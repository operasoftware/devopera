Title: Your first look at JavaScript
----
Date: 2009-02-03 06:38:48
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-uses/" rel="prev" title="link to the previous article in the series">Previous article—What can you do with JavaScript?</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/javascript-best-practices/" rel="next" title="link to the next article in the series">Next article—JavaScript best practices</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>In this article we’ll cover the basics of JavaScript — how and where to use it, what problems to avoid and general basics to get you started on your journey towards becoming a top-notch JavaScript developer.</p>

<p>the structure of this article is as follows:</p>

<ul>
  <li><a href="#whatisjavascript">What is JavaScript and how do you execute it?</a>
    <ul>
      <li><a href="#internaljavascript">Including your JavaScript inside your HTML document</a></li>
      <li><a href="#linkingexternaljavascript">Linking to an external JavaScript file</a></li>
    </ul>
  </li>
  <li><a href="#javascriptbrowserperformance">JavaScript and browser performance</a></li>
  <li><a href="#wheretoputjavascript">Where to put JavaScript</a></li>
  <li><a href="#javascriptsecuritylack">JavaScript security and the lack thereof</a></li>
  <li><a href="#techniquesavoid">Techniques to avoid</a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="whatisjavascript">What is JavaScript and how do you execute it?</h2>

<p>JavaScript is a text-based language that does not need any conversion before being executed. Other languages like <a href="http://dev.opera.com/articles/view/38-programming-the-real-basics/#interpreted">Java and C++ need to be compiled to be executable</a> but JavaScript is executed instantly by a type of program that interprets the code called a parser (pretty much all web browsers contain a JavaScript parser).</p>

<p>To execute JavaScript in a browser you have two options — either put it inside a <code>script</code> element anywhere inside an HTML document, or put it inside an external JavaScript file (with a <kbd>.js</kbd> extension) and then reference that file inside the HTML document using an empty <code>script</code> element with a <code>src</code> attribute. We’ll look at both of these methods inside this section.</p>

<h3 id="internaljavascript">Including your JavaScript inside your HTML document</h3>

<p>The most basic inclusion of JavaScript inside your HTML page would look something like this:</p>

<pre><code>&lt;script&gt;
  var x = 3;
  alert(&#39;hello there, I am JavaScript - x is &#39;+x);
&lt;/script&gt;</code></pre>

<p>You could put this anywhere inside your document and it would execute, but some places are definitely better than others — see the <a href="#wheretoputjavascript">Where to put JavaScript</a> section for guidance on this.</p>

<p>As there might be several different types of script available to use on web pages in the future it makes sense to add the name of the script you are using as a MIME type:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
  var x = 3;
  alert(&#39;hello there, I am JavaScript - x is &#39;+x);
&lt;/script&gt;</code></pre>

<p><strong>Note:</strong> You will find script examples on the web that have a <code>language=&quot;javascript&quot;</code> attribute. This is not part of any standard and is utterly useless; delete this where you can. This is a throwback to the bad old days, when VBScript was also in popular use on web pages. VBScript usage died however, as it only works in IE.</p>

<p>In the past there was a need to comment out JavaScript with an HTML comment to prevent browsers from showing the code as HTML. As this only applies to very old browsers you don’t need to bother with that any longer. If you are using strict XHTML as your DOCTYPE however you need to enclose any JavaScript in a CDATA block to make it validate (don&#39;t worry about why - it is not really important at this stage in your learning):</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
/* &lt;![CDATA[ */
  var x = 3;
  alert(&#39;hello there, I am JavaScript - x is &#39;+x);
/* ]]&gt; */
&lt;/script&gt;</code></pre>

<p>However, for strict XHTML documents it is much more sensible not to embed any JavaScript but instead keep it in an external document.</p>

<h3 id="linkingexternaljavascript">Linking to an external JavaScript file</h3>

<p>In order to link to an external JavaScript (either on the same server or anywhere on the internet) all you have to do is to add a <code>src</code> attribute to your script element:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot; src=&quot;myscript.js&quot;&gt;&lt;/script&gt;</code></pre>

<p>Upon meeting this element in a page, browsers will then load the file <code>myscript.js</code> and execute it. Any content inside the <code>script</code> element itself will be skipped when you provide a <code>src</code> attribute. The following example will load the file <code>myscript.js</code> and execute the code in it but will not execute the alert inside the <code>script</code> element at all.</p>

<pre><code>&lt;script type=&quot;text/javascript&quot; src=&quot;myscript.js&quot;&gt;
  alert(&#39;I am pointless as I won\&#39;t be executed&#39;);
&lt;/script&gt;</code></pre>

<p>Keeping your code in an external JavaScript file makes a lot of sense, as:</p>

<ul>
  <li>You can apply the same JavaScript functionality to several HTML documents and still keep maintenance easy: if there is a desired change in functionality all you need to do is change one single file.</li>
  <li>Your JavaScript will be cached by browsers. Caching means that browsers will take a copy of your JavaScript and store it on the computer of the visitors surfing on your site. The next time this user loads the same script it will not be taken from your server but their own computers — thus loading much faster.</li>
  <li>You can easily find your script if you need to modify it, avoiding the need to scan through long HTML documents to find the place to fix a problem.</li>
  <li>Fixing errors becomes easier as a debugging tool or error console will tell you which file contains the error and reliably report the line number.</li>
</ul>

<p>You can add as many JavaScript files as you want to a document but there are several considerations to make before going down that route.</p>

<h2 id="javascriptbrowserperformance">JavaScript and browser performance</h2>

<p>Cutting up a lot of JavaScript into different files, each dealing with one task at a time, is a great idea to keep your functionality easy to maintain and allow for quick bug-fixing. For example you could have several script blocks like these:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot; src=&quot;config.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;base.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;effects.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;validation.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;widgets.js&quot;&gt;&lt;/script&gt;</code></pre>

<p>The development benefits of this are however diminished by the effect this has on the performance of your document. This differs slightly from browser to browser but the worst case scenario (which is sadly enough still the most used browser) does the following:</p>

<ul>
  <li>Every time the browser encounters a <code>script</code> element, it will pause rendering (displaying) the document.</li>
  <li>It will then load the JavaScript file defined in the <code>src</code> attribute (if you use a script on another server you also have to wait until the browser finds that server).</li>
  <li>It then will execute the script before it goes on to accessing the next one.</li>
</ul>

<p>All of this means that the display of your web site is slowed down until all of these steps happen for all the scripts you include. This can become annoying for your visitors.</p>

<p>One way around this is to use a backend script to create a single file from all the files you use. That way you have the benefit of keeping maintenance easy while at the same time cutting down on delays to your web page display. There are several scripts like this on the web — one of them is written in PHP and <a href="http://www.ejeliot.com/">available from Ed Eliot</a>.</p>

<p>The delay in display also defines where you want to put your JavaScript in the document.</p>

<h2 id="wheretoputjavascript">Where to put JavaScript</h2>

<p>Technically you can put JavaScript anywhere in your document. The decision you have to make is to weigh performance against making it easy for developers to find your scripts and ensuring that your JavaScript enhancements work immediately for your visitors.</p>

<p>The classic best practice for placing scripts was in the <code>head</code> of the document:</p>

<pre><code>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;
&quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html lang=&quot;en-en&quot;&gt; 
&lt;head&gt;
 &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;
 &lt;title&gt;&lt;/title&gt;
 &lt;script type=&quot;text/javascript&quot; src=&quot;myscripts.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- lots of HTML here --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>This has the benefit of being a predictable location of scripts — developers know where to find them. It also has the benefit of ensuring that all JavaScript has been loaded and executed before the document is displayed.</p>

<p>The drawbacks are that your scripts delay the display of the document and that the script does not have access to the HTML in the document. You therefore need to delay the execution of any scripts that change the HTML of the document until the document has finished loading. This can be done with an <a href="http://www.onlinetools.org/articles/unobtrusivejavascript/chapter4.html">onload handler</a> or one of the various <a href="http://dean.edwards.name/weblog/category/dom/onload/">DOMready</a> or <a href="http://developer.yahoo.com/yui/examples/event/event-timing.html">contentAvailable</a> solutions out there on the web — none of which are bullet-proof and most of which rely on browser-specific hacks.</p>

<p>Performance specialists have more recently started to advocate placing your JavaScript at the end of the <code>body</code> instead:</p>

<pre><code>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;
&quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html lang=&quot;en-en&quot;&gt; 
&lt;head&gt;
 &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;
 &lt;title&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- lots of HTML here --&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;myscripts.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>This benefits your JavaScript by not delaying the display of the HTML and also means that any HTML you want to alter with JavaScript is already available.</p> 

<p>One of the drawbacks are that this practice is not quite common yet, and you might confuse developers who maintain your code. Another — more problematic — drawback is that the HTML becomes available before your JavaScript is loaded. While this is exactly what you want to achieve, it also means that visitors will start interacting with your interface before you get the chance to change it. Say for example you want to validate a form with JavaScript before it is submitted to the server — the form might get submitted before the script has been loaded. If you write your script as a mere enhancement (rather than relying on it) that is not a problem though — just an annoyance.</p>

<p>It is up to you to choose what fits the purpose of your web site; you could even choose to do a mixture of both — put the scripts with very important functionality in the <code>head</code>, and call them in conjunction with the “nice-to-have” scripts at the end of the document.</p>

<pre><code>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;
&quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html lang=&quot;en-en&quot;&gt; 
&lt;head&gt;
 &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;
 &lt;title&gt;&lt;/title&gt;
 &lt;script type=&quot;text/javascript&quot; src=&quot;myimportantscripts.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- lots of HTML here --&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
applyFunctionality();
&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;myscripts.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Whatever you do, make sure that the order of your scripts is right, as browsers will load and parse them one after the other. This also brings us to another thing to consider when using JavaScript.</p>

<h2 id="javascriptsecuritylack">JavaScript security and the lack thereof</h2>

<p>We cannot stress this enough. JavaScript is a wonderful language and can help you to build highly responsive and beautifully interactive web sites and applications, but where it falls down terribly is security. In short, there is no security model in JavaScript and you should not protect, encrypt, secure or store anything vital or secret with it.</p> 

<p>Every script on the page has the same rights — all of them can access each other, read out variables, access functions and also override each other. If you have a function called <code>init()</code> in your first included script, and another one in your last included script, the original one will be overridden. We will come back to this problem in the <a href="http://dev.opera.com/articles/view/javascript-best-practices/">best practices article</a> of this course.</p>

<p>All of this wouldn’t be much of an issue if you never used other people’s scripts. However, seeing that most online advertising and statistics tracking is done with JavaScript this will not be the case — you will use third party scripts all the time.</p>

<p>Scripts can also read cookies and using the <code>prototype</code> of a function you can override any native JavaScript function. Lastly, JavaScript can easily be turned off so you can forget about JavaScript protection being a good security measure.</p>

<p>JavaScript is always readily available for reading and analyzing by other developers. Of course you can pack (remove all unnecessary whitespace) and obfuscate (use random variable and function names) your scripts, but even those can be reverse engineered; in this case the only person you stop from using your code easily is yourself. The availability of the source code and the ability to read and analyze it is possibility the main factor for the success of JavaScript - for years we learnt by peeking at other people’s solutions. Nowadays this is luckily over as there are good books and tutorials available.</p>

<p class="note">Whereas packing and obfuscation are useless as security measures, they are often done on medium and large scripts before the code is put live on the web as part of the publication process. This helps to cut down on the amount of bandwidth required to serve the site to it&#39;s users. A saving of a few bytes here and there may not seem significant on your blog about kittens, but it can add up to massive savings when you are dealing with a site with usage figures like those of google.com.</p>

<h2 id="techniquesavoid">Techniques to avoid</h2>

<p>The biggest problem with learning JavaScript is that there is a massive amount of outdated and possibly dangerous information out there. This is especially frustrating as a lot of this information is very well presented and gives a lot of beginners a “quick win” feeling of knowing JavaScript by copying and pasting some ready-made code.</p>
<p>As the environment JavaScript is being applied to is very much unknown (users can have any setup) and we don’t know what decisions led to code we find on the web being created in a particular way, we shouldn’t point fingers at solutions. However, the following ideas are a thing of the past and you should only use them as a very last resort if you need them to support really old, bad browsers.</p>

<ul><li><code>document.write()</code> — you can write out content to the document using <code>document.write()</code> but there are several issues with this: you mix HTML and scripting and you need to add a script node exactly where you want the content to appear, which slows down your page. It is a very cool way of easily showing (for example in a tutorial or when testing/debugging your code) what the result of some piece of code is, but it is a bad example to show people, as you should never have to use it in live code.</li>
<li><code>&lt;noscript&gt;&lt;/noscript&gt;</code> — as its name implies, the <code>noscript</code> element is the opposite to the <code>script</code> element. The content inside it will be shown to users that have JavaScript disabled. The main reason to use <code>noscript</code> is to provide alternative content for users who do not have JavaScript available in their browser. Users that have no JavaScript don’t do that to make your life harder — they might do it because of a security policy, or because the browser they are using does not support JavaScript. But what you can provide inside <code>noscript</code> is limited, and you shouldn’t use it provide a note telling users to enable JavaScript in their browser — for some users this is not possible.</li>
<li><code>&lt;a href=&quot;javascript:doStuff()&quot;&gt;&#x2026;&lt;/a&gt;</code> — this was a very common way to invoke JavaScript functionality, most of the time when a button was not an option (you cannot style buttons in older browsers). The problem is that this is not a valid link as <code>javascript</code> is not an internet protocol (like <code>ftp://</code> or <code>http://</code>). If JavaScript is turned off the link still appears and gives the user false hope that something is going to happen.</li>
<li><code>document.layers</code> and <code>document.all</code> — both of these solutions were the DOM equivalents in old browsers (Netscape 4.x and Internet Explorer 4 respectively) and unless you need to support those (sorry if you have to) this is unnecessary code.</li></ul>

<h2 id="summary">Summary</h2>

<p>This concludes your first glimpse at JavaScript. Instead of explaining a lot of detail here I wanted to give you an overview of how best to apply JavaScript to a page, and what to avoid. In the next tutorial we’ll talk about best practices using a real code example.</p>

<h2 id="exercises">Exercise Questions</h2>

<ul>
  <li><p>What does the following link do and what problems can that cause?</p>
  
  <pre><code>&lt;a href=&quot;javascript: open(&#39;tac.pdf&#39;)&quot;&gt;Read our Terms and Conditions&lt;/a&gt;</code></pre>
  
  </li>

  <li><p>Providing parameters for scripts is a powerful way of making them reusable. It is very important to keep the option to provide compact and easy to use parameters. What are the downsides of the following solution (which provides parameters that are compact and easy to use)?</p>
  
<pre><code>&lt;script src=&quot;badge.js&quot;&gt;
  var color = &#39;blue&#39;;
  var background = &#39;yellow&#39;;
  var width = 400;
&lt;/script&gt;</code></pre>
  </li>
  
  <li>What is the issue with so called “global variables”, and how can they be avoided?</li>

  <li>Where in the document would you put a large script that is nice to have but not vital to the functionality of the site? Why?</li>

  <li><p>What is the problem with executing scripts like this:</p>
  
  <pre><code>&lt;body onload=&quot;init()&quot;&gt;</code></pre>
  
  </li>
  
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-uses/" rel="prev" title="link to the previous article in the series">Previous article—What can you do with JavaScript?</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/javascript-best-practices/" rel="next" title="link to the next article in the series">Next article—JavaScript best practices</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/239-41-your-first-look-at-javascript/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />
<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>
        

