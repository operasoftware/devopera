Title: Gridnite part 2: developing the formula engine
----
Date: 2009-09-09 13:56:25
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Unite will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<h2>Introduction</h2>

<p class="note"><a href="http://dev.opera.com/articles/view/gridnite-part-3-saving-and-restoring-multiple-spreadsheets/">Part 3: saving and restoring multiple spreadsheets</a> is now also available.</p>

<p>In the <a href="http://dev.opera.com/articles/view/gridnite-unite-powered-spreadsheet/">first part of my &quot;Gridnite&quot; series</a>, I showed you how to build a basic 
multi-user spreadsheet application that can propagate (push) changes to other 
users. In this part, I&#39;m going to fix some bugs and add formula functionality to Gridnite. Let&#39;s face it &#x2014; formulas are an essential spreadsheet feature.</p>

<p>The structure of this article is as follows:</p>

<ul>
  <li><a href="#bugs">First, the bugs</a></li>
  <li><a href="#formulaengine">The formula engine</a>
    <ul>
      <li><a href="#planning">Planning the code</a>
        <ul>
          <li><a href="#regex">The regular expressions</a></li>
          <li><a href="#wiringup">Wiring up the regular expressions to the spreadsheet</a></li>
          <li><a href="#formularesult">Getting the formula result</a></li>
          <li><a href="#formulaeinsideformulae">Formulae inside formulae</a></li>
          <li><a href="#wholeeval">Evaluating the whole spreadsheet</a></li>
          <li><a href="#readingcontents">Reading the cell contents</a></li>
          <li><a href="#cyclicreferences">Dealing with cyclic references</a></li>
          <li><a href="#modifyload">Modifying the loading procedure</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#optimize">Optimizations</a></li>
  <li><a href="#conclusion">Conclusion</a></li>
</ul>

<p class="note">To follow along with this article and try out the Gridnite formula engine for yourself, <a href="gridnite.v1.1.zip">download the updated application</a>.</p>

<h2 id="bugs">First, the bugs</h2>

<p>Bugs are an <em>inevitable</em> part of the software development process, and I do mean inevitable. Turns out that the <code>escape(...)</code> function in the original Gridnite application&#39;s JavaScript wasn&#39;t doing exactly what it was supposed to. Its purpose is to safely send 
data between Unite&#39;s server-side JavaScript, and the client-side JavaScript in 
the application visitor&#39;s browsers. The problem arose when I started implementing the formula functionality &#x2014; when I inserted a formula of say <code>a1+b2</code> 
into a cell, the escape function didn&#39;t change the <q>+</q> sign at all, which meant that the <code>a1+b2</code> became <code>a1 b2</code> upon decoding.</p>

<p>The solution is to use the <code>escapeURIComponent()</code> function instead. I read that it only works in recent browsers, but I tested it in Internet Explorer 6 and found that it does work, although IE&#39;s JavaScript slows to a crawl with even the most basic calculations.</p>

<h2 id="formulaengine">The formula engine</h2>

<p class="note">This article assumes that you understand what a regular expression is. If you don&#39;t, check out a tutorial on this subject, such as the <a href="http://www.regular-expressions.info/tutorial.html">Regular Expression Tutorial</a> from <em>regular-expressions.info</em>. It&#39;s a very useful feature of many programming languages. There is also an excellent <a href="http://widgets.opera.com/widget/10802/">regular expression tester Opera Widget</a> available.</p>

<p>So, how do you evaluate an expression like <code>=(A1+B2)*SUM(A1:C3)</code>?</p>

<p>The right way to develop a formula engine would be to create a 
<a href="http://en.wikipedia.org/wiki/Recursive_descent_parser">recursive descent parser</a>, which would be secure and fairly fast too. However, 
creating such a parser in a limited timeframe and explaining it in an article seems like an impossible task: you need to create a parser that converts a 
string into an abstract syntax tree and then evaluate that tree to match 
particular cell values.</p>

<p>That&#39;s a lot to explain, so for now I&#39;m going to settle for an 
easier and slightly more <q>evil</q> solution: naive regular expressions and the <code>eval (...)</code> function. I will make it nicer along the way, but bear in mind that this is a simple solution, and therefore pretty slow, although it is fairly secure.</p>

<h3 id="planning">Planning the code</h3>

<p>Let&#39;s outline the plan. I need to convert <code>=(A1+B2)*SUM(A1:C3)</code> to something 
like <code>(cell_value(&#39;A1&#39;)+cell_value(&#39;B2&#39;))*sum_of(range(&#39;A1&#39;, &#39;C3&#39;))</code>, then supply this to <code>eval(...)</code> and get a result via Opera&#39;s JavaScript parser (which is recursive descent too).</p>

<p>There&#39;s a number of stumbling blocks here that I need to be mindful of. First of all, what if a user supplies a string like <code>=alert(1);</code> into a cell? That would result into a call to the <code>alert</code> function 
during <code>eval</code>. Although example could be quite annoying, it&#39;s pretty harmless. On the other hand, some bad guy could input a <code>script</code> element that could load an external JavaScript, which in turn could upload a whole spreadsheet onto their server, which is quite evil. I need to take precautions against this kind of activity.</p>

<h4 id="regex">The regular expressions</h4>

<p>First, I will check that the string entered into a cell doesn&#39;t contain weird symbols &#x2014; I can do this using a regular expression, like so:</p>

<pre><code>_formula.match(/^=[&quot;A-Za-z0-9\.\(\)\*/:+-]+$/)</code></pre>

<p>In human language, this equates to &quot;I will match a string that starts with an equals (=) sign, followed by only letters, numbers, dots, brackets, math signs and colons ( : )&quot;. That is probably enough to validate most of the formulas I need.</p>

<p>There&#39;s an extra symbol that should be here though &#x2014; the backslash (&quot;<code>\</code>&quot;). It&#39;s quite important, because you might want to use a string that has a 
quote inside of it, but it also brings a lot of insecurity to applications using 
<code>eval(...)</code> &#x2014; that&#39;s one of the good reasons you should create a real parser when creating a real world app. Most PHP attacks use a backslash to end a string and then execute malicious code in some way. Therefore I will not be allowing the use of backslashes.</p>

<p class="note">Is it possible to safely add a backslash using regular expressions? Yes, but it 
would require a lot of testing using the most of horrible strings you can 
imagine, like <code>&quot;TEST\&quot;&quot;</code>, <code>&quot;TEST\&quot;</code> and even <code>&quot;TEST\\&quot;</code>. It isn&#39;t easy (which is why it&#39;s not covered in this article) but it&#39;s certainly possible.</p>

<p>Next I will get rid of another way to get <code>eval</code> to do more evil things &#x2014; comments (for example <code>//</code> and <code>/* ... */</code>). The regular expression that does this for us is as follows:</p>

<pre><code>_formula.match(/(\/\*|\/\/)/)</code></pre>

<p>If there&#39;s a match, that means the string contains either <code>&quot;/*&quot;</code> or <code>&quot;//&quot;</code> symbols, which isn&#39;t needed in a spreadsheet formula, and could mean a lot of unexpected trouble during evaluation, eg from malicious users trying to set up <abbr title="Cross Site Scripting">XSS</abbr> attacks.</p>

<p>The last thing to do is check that functions used in formulae entered into cells are limited to ones I actually want to support (thereby protecting against users entering JavaScript function names into a formula). The regular expression for this looks like so:</p>

<pre><code>var strings = (_formula.replace(/&quot;.*?&quot;/g,&quot;)+&#39; &#39;).match(/[a-z]{2,}/gi);</code></pre>

<p>First I&#39;ll remove any quoted strings (<code>&quot;.*?&quot;</code>); that&#39;s where the problems with 
backslash could begin &#x2014; for example matching <code>&quot;.*?&quot;</code> on a string of <code>&quot;They call him 
\&quot;Robot\&quot;&quot;</code> would yield a result of <code>&quot;They call him \&quot;</code> (up to first quote), 
which is wrong. But since I&#39;m not allowing backslashes, that&#39;s not a problem.</p>

<p>Then I match <code>/[a-z]{2,}/</code>, which is any letter, twice or more.</p>

<p>Next I check:</p>

<pre><code>if(!strings[i].match(/^(SUM|MAX|MIN|AVG)$/)) {</code></pre>

<p>This contains the functions I&#39;m going to define &#x2014; <code>SUM</code>, <code>MAX</code>, 
<code>MIN</code> and <code>AVG</code>. (You can 
extend this to contain any function you like).</p>

<p>Now I&#39;m done with regular expressions and security, so we can move on.</p>

<h4 id="wiringup">Wiring up the regular expressions to the spreadsheet</h4>

<p>Remember the sample formula I listed earlier:</p>

<pre><code>=(A1+B2)*SUM(A1:C3)</code></pre>

<p>To make this work I first need to find all references to cells by name (<code>A1</code>, <code>B2</code>, <code>C3</code>, etc.) and then replace 
them with a function call to get that cell&#39;s value. I&#39;ve called this function 
<code>formula_single_cell_value(&#39;A1&#39;)</code> in Gridnite. The formula seems to be a pretty obvious first step when dealing with a regular expression:</p>

<pre><code>_eval_formula = _formula.replace(/\b([A-Z][0-9]{1,3})\b/g, 
&#39;formula_single_cell_value(\&#39;$1\&#39;)&#39;); </code></pre>

<p>But here&#39;s the problem &#x2014; if I just look for anything that looks like <code>A1</code> and 
replace it, I&#39;m going to run into expressions that <code>A1</code> is just a part of, such as <code>A1:C3</code>. This would result in
<code>&quot;formula_single_cell_value(&#39;A1&#39;):formula_single_cell_value(&#39;C3&#39;)&quot;</code>, which is 
JavaScript nonsense (two function calls, separated by colon!) I need to find 
those references and replace them with a call to another function, for example <code>&quot;formula_range_value(&#39;A1&#39;,&#39;C3&#39;)&quot;</code>.</p>

<pre><code>_eval_formula = _eval_formula.replace( 
/\bformula_single_cell_value\(\&#39;([A-Z][0-9]{1,3})\&#39;\):formula_single_cell_value\(\&#39;([A-Z][0-9]{1,3})\&#39;\)/g, 
&#39;formula_range_value(\&#39;$1\&#39;, \&#39;$2\&#39;)&#39;); </code></pre>

<p>The last step is to convert our special functions, like <code>SUM(...)</code>, to JavaScript functions, like <code>formula_sum(...)</code>. This is also straight-forward:</p>

<pre><code>_eval_formula = _eval_formula.replace(/\bSUM\(/g, &#39;formula_sum(&#39;);</code></pre>

<h4 id="formularesult">Getting the formula result</h4>

<p>At this point, I just need to &quot;eval&quot; this variable (<code>_eval_formula</code>) to get the result. Just in case the user makes a mistake in the syntax, I&#39;ll wrap the code in a <code>try { } catch</code> construct:</p>

<pre><code>try { 
  _new_value = eval(_eval_formula); 
} catch(err) { 
  throw(&#39;Can not evaluate formula.&#39; + /*_eval_formula + err*/); 
};</code></pre>

<p>The <code>throw</code> here is used to &quot;bubble&quot; the exception above (where it&#39;s handled and a nice, user-friendly message is shown). The commented out part (<code>_eval_formula + 
err</code>) is a way to debug our formula conversion &#x2014; it allows us to see the final string to be evaluated).</p>

<h4 id="formulaeinsideformulae">Formulae inside formulae</h4>

<p>You can write formulae involving cells that have other formulae inside them &#x2014; how does that work? Let&#39;s say we have the formula <code>B2 = A1+2</code>, and <code>A1</code> is itself a formula, say <code>=5+C3</code>?</p>

<p><code>B2</code> would be evaluated as a call to <code>formula_single_cell_value(&#39;B2&#39;)</code>, which 
would be converted to <code>formula_single_cell_value(&#39;A1&#39;) + 2</code>. The call to 
<code>formula_single_cell_value(&#39;A1&#39;)</code> would be evaluated as 
<code>&quot;5+formula_single_cell_value(&#39;C3&#39;)&quot;</code>, so there&#39;s no problem here at all.</p>

<h4 id="wholeeval">Evaluating the whole spreadsheet</h4>

<p>How do we evaluate a whole spreadsheet? Simple &#x2014; I&#39;ll just call <code>formula_single_cell_value</code>
on each cell:</p>

<pre><code>function evaluate_cells() { 
  cells_cache = {}; 
  $(&#39;td.cell&#39;).each(function(){ 
    evaluate_cell(this.id.replace(/^CELL_/,&quot;)); 
  }); 
};</code></pre>

<p><code>evaluate_cell</code> is a small helper function that sends a call to  
<code>formula_single_cell_value</code> and shows the value in a cell (via jQuery), OR shows a 
nice user-friendly message, as discussed above. I&#39;ll explain <code>cells_cache</code> very shortly.</p>

<h4 id="readingcontents">Reading the cell contents</h4>

<p>The last part of the puzzle is the actual <code>formula_single_cell_value</code> function. It 
looks at the cell contents and determines how to parse them. If the cell contains numbers and a dot, that&#39;s a <code>float</code>,
and I can use JavaScript&#39;s <code>parseFloat(...)</code> function to return the number. If the cell contains only numbers, that&#39;s an <code>int</code>, so I can use <code>parseInt</code>. If neither of these possibilities are true <code>formula_eval</code> is called, which 
checks if the string starts with equal sign (=). If it does it&#39;s a formula; if not it&#39;s just a string. </p>

<p>If <code>formula_eval</code> comes across a formula it evaluates it, as 
described above, starting with the safety checks and working up to processing it with the <code>eval(...)</code> function.</p>

<p class="note">Note: I didn&#39;t explain how to write functions like <code>formula_sum(...)</code> because of limited space, but it&#39;s pretty 
trivial &#x2014; you just sum all of the <code>formula_single_cell_value(...)</code> results for each of the supplied elements. <code>formula_range_value</code> is a little more complex, but again it isn&#39;t really voodoo magic; all it does is convert the range &#x2014; eg <code>(&#39;A1&#39;,&#39;C2&#39;)</code> &#x2014; to an array &#x2014; eg <code>[&#39;A1&#39;,&#39;B1&#39;,&#39;C1&#39;, &#39;A2&#39;,&#39;B2&#39;,&#39;C2&#39;]</code>. It does a little 
black magic with ASCII codes, but it&#39;s not too complex.</p>

<h4 id="cyclicreferences">Dealing with cyclic references</h4>

<p>One more thing that I haven&#39;t dealt with (yet) is &quot;cyclic references&quot; &#x2014; what if I have two cells that reference each other, for example <code>A1 = B1+1</code> and <code>B1 = A1+1</code>? That&#39;s an infinite loop! This is where the <code>cells_cache</code> variable comes into play.</p>

<p>When <code>evaluate_cells</code> is called, I create an associative array, as follows:</p>

<pre><code>cells_cache = {}</code></pre>

<p>Each time we start evaluating a formula, we compare the value stored in the 
<code>cells_cache[&#39;..&#39;]</code> array to the <code>calculating_34#43</code> variable. If they are identical then we&#39;re dealing with a cyclic 
reference, otherwise we set the value of <code>cells_cache[&#39;..&#39;]</code> to 
<code>&#39;calculating_34#43&#39;</code> (although this should be something even more random to avoid 
collision with something the user actually enters into a cell). Let&#39;s look at an 
example:</p>

<pre><code>A1 = B1+1 
  cells_cache[&#39;A1&#39;] == &quot;calculating_34#43&quot; ? 
  // No, it&#39;s empty - go on: 
  Set cells_cache[&#39;A1&#39;] to &quot;calculating_34#43&quot;

  // While evaluating this, we arrive at B1: 
  B1 = A1+1 
  cells_cache[&#39;B1&#39;] == &quot;calculating_34#43&quot; ? 
  // No, it&#39;s empty - go on: 
  Set cells_cache[&#39;B1&#39;] to &quot;calculating_34#43&quot;

  // While evaluating this, we arrive at A1: 
  cells_cache[&#39;A1&#39;] == &quot;calculating_34#43&quot; ? 
  // YES, it&#39;s a cyclic reference!</code></pre>

<h4 id="modifyload">Modifying the loading procedure</h4>

<p>Now that the whole things works, I need to think about the fact that in the 
first article I made the whole spreadsheet load as a static HTML table. That 
was ok initially, but now I have a formula engine to worry about I need to do things differently, otherwise the formulas won&#39;t be evaluated. The modification will load the page as an EMPTY table, followed by a <code>SCRIPT</code> element with a series of calls to <code>set_cell_value(&#39;A1&#39;, &#39;=B1+1&#39;);</code></p>

<pre><code>init_script = &#39;&#39;;
... for each cell, stored on server side: 
init_script += &#39;set_cell_value(&#39;+safe_js_val(A+j)+&#39;, &#39;+safe_js_val(_value)+&#39;);&#39;;

template.select(&#39;body&#39;)[0].innerHTML += 
  &#39;&lt;scr&#39;+&#39;ipt&gt;$(document).ready(function(){&#39; + init_script + &#39;});&lt;/scr&#39;+&#39;ipt&gt;&#39;;</code></pre>

<p>In any case, I would have needed to modify the <code>set_cell_value(...)</code> function so that each time a user updates a cell (ie, each time this function is called) the whole spreadsheet is recalculated with a call to <code>evaluate_cells(...)</code>.</p>

<p>There&#39;s another modification needed. When all I was dealing with was static data, I could just keep the data in a table cell. But what about the formulas? Once I evaluate the formula, it&#39;s gone (replaced with the evaluated 
content). Here I&#39;ll do a clever thing and kill two rabbits with one stone: I&#39;m going to store the actual formulas in the cell <code>title</code> attributes. By doing so I can prevent formulas from being replaced with evaluated content, and allow the user to see the formulas by hovering over the cells.</p>

<h2 id="optimize">Optimizations</h2>

<p>Now that the spreadsheet is calculating everything needed, it&#39;s time to think about some optimizations. Remember that <q>Premature optimization is the root of all evil</q> (Donald Knuth &#x2014; see <a href="http://en.wikipedia.org/wiki/Program_optimization#When_to_optimize">Program optimization &lt; When to optimize</a> on Wikipedia for the quote source). In other words, make sure your program works first, <strong>then</strong> optimize it.</p>

<p>At this stage, the main problem is that when the spreadsheet loads and a cell updates, the whole spread sheet needs to be recalculated, which results in a lot of unnecessary overhead. To get around this I&#39;ve added a simple <code>page_loaded = 0</code> variable to the start of the script that prevents the <code>evaluate_cells</code> function from being executed until all cells are filled up, at which point, <code>page_loaded</code> is set to 1. This simple modification resulted in 8600 calculations being cut down to 500 &#x2014; the loading speed was increased by more than a factor of 10 with less than 5 lines of code.</p>

<p>Another thing to consider is that the <code>cells_cache</code> array can be reused to cut down on unnecessary calculations. Let&#39;s take a sample range formula, for example <code>C4 = SUM(A1:C3)</code>. That&#39;s 9 calculations at least, even more if the cells within the <code>A1:C3</code> contain their own formulas. This also means that any other cell that contains a formula involving <code>C4</code> would also require at least 9 calculations. But wait &#x2014; the formula values are already stored in the <code>cells_cache</code> array! So each time the code starts calculating a cell value it looks at that array to see if there&#39;s a value in the cells referenced in the formula &#x2014; <code>cells_cache[&#39;C4&#39;]</code> in the case of the above example. This means that in actual fact I doesn&#39;t need to be calculated again; I just return it early from the cache. If there is not already a value in the array, the formula is evaluated, and the result stored in <code>cells_cache[&#39;C4&#39;]</code>.</p>

<h2 id="conclusion">Conclusion</h2>

<p>The development of the formula engine took about 7 hours in total. A recursive descent parser would have taken much longer to implement, but it would be more robust. However, the parser I&#39;ve created here is still perfectly functional, it was a good exercise, and it was much easier to explain! This article contains some good tips on creating formulas, reg exs, and JavaScript security, and more importantly, I have added further functionality to the Gridnite Unite application.</p>
