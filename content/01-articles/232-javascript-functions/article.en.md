Title: JavaScript functions
----
Date: 2009-02-03 06:38:34
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
<li class="prev"><a href="http://dev.opera.com/articles/view/unobtrusive-javascript/" rel="prev" title="link to the previous article in the series">Previous article—The principles of unobtrusive JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/objects-in-javascript/" rel="next" title="link to the next article in the series">Next article—Objects in JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>Functions lie at the core of practically everything <em>useful</em> that you’ll do with JavaScript.  Broadly speaking, they offer the ability to break a program into logical chunks, each implementing a specific piece of functionality.  They’re a central feature of the language, and a good chunk of JavaScript’s attractiveness is due to the particular ways in which it enables you to use and create functions.  If you’ve done some programming before in languages like PHP or Java, you’ll feel right at home with functions in JavaScript; if not, don’t worry.  Functions are <em>critical</em>, but they’re not hard to wrap your head around.  This article explains why you’ll want to understand functions, then dives into their syntax and shows you how to create and use them.</p>

<p class="note">Note that the <a href="functions_code.zip">functions examples are available for download</a>, as well as being linked to at appropriate places in the article below.</p>

<p>The structure of this article is as follows:</p>

<ul>
<li><a href="#whatandwhy">What and why</a></li>
<li><a href="#functionsyntax">A Function’s syntax</a>
  <ul>
    <li><a href="#usingthefunction">Using the function</a></li>
    <li><a href="#arguments">Arguments</a></li>
    <li><a href="#returnvalues">Return values</a></li>
  </ul>
</li>
<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="whatandwhy">What and why</h2>

<p>You certainly don’t want to reach for your specifications to refresh your memory each time you need to perform a specific calculation; it&#39;s much better to simply code the calculation’s steps <strong>once</strong>, bundle that up as a <code>calculateSomething</code> function, and then point to that implementation next time you need to perform the same activity.  This simple act of bundling up a set of commands means that you can concentrate on the <em>activities</em> that your code implements instead of the intimate details of those activities’ internal steps.  You can think of the functions you write as a layer sitting on top of JavaScript’s built-in core; you’re creating <em>new commands</em> that are more expressive and more understandable in the context of your particular application.</p>

<p>With that in mind, the “why?” of functions has a very straightforward answer: they are the basic building blocks that allow you to structure your code to enhance understanding of its purpose, and to reuse the functions you’ve written to avoid writing the same bits of code in multiple places.  Your program will be easier to write and test if you break it into small pieces, each with a defined task.</p>

<p>Moreover, breaking your code up into well thought-out functions makes maintaining your code in the future much easier.  Imagine, for example, that the rules for daylight savings time are changed again next year.  If you’ve done that calculation eighty-five times throughout your project, you <em>will</em> introduce new bugs when you update the code in each of those locations; it’s repetitive, manual, and failure-prone.  On the other hand, changing a single <code>calculateDaylightSavings</code> function allows you to cascade that single change down through the rest of your program with a single fix, much the same as the CSS cascade of style down through the page.  In this way, functions make maintenance much less error prone, and easier to implement successfully.</p>

<h2 id="functionsyntax">A Function’s syntax</h2>

<p>Defining your own function is a simple task.  As an example, let’s build a <a href="functions_1.html">function that generates a random background colour for an element</a> on a page:</p>

<pre><code>function setElementBackground() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var obj = document.getElementById(&#39;element_to_change&#39;);
  if ( obj ) {
    obj.style.background = &#39;rgb(&#39; + red + &#39;,&#39; + green + &#39;,&#39; + blue + &#39;)&#39;;
  }
}</code></pre>

<p>Without worrying too much about the code executed by the function, I’d like you to focus at this moment on 4 important features of the function’s syntax:</p>

<ol>
  <li>A function declaration always begins with the keyword <code>function</code>, which makes sense.</li>

  <li>The next bit is the function’s name, in this case <code>setElementBackground</code> (I generally use <a href="http://en.wikipedia.org/wiki/CamelCase">camelCase</a> for function names).  The name of the function is important, as it’s the bit you have to remember in order to use and reuse the code.  Make sure it&#39;s an accurate description of what the function does; I’m sure you’ll agree that <code>setElementBackground</code> is a <strong>much</strong> better, more descriptive function name than something like <code>coloursAreNice</code> or <code>crazySetter</code>.</li>

  <li>Directly after the function’s name come a pair of parentheses.  Inside these come the functions <strong>argument list</strong>, which enables you to make your functions more generic, and thus more reusable—you can apply them to more situations more easily.  This is a powerful concept, but optional, so I’ll discuss it in more detail in the next section.</li>

  <li>Finally comes a pair of curly-brackets containing some code: these signify a <strong>block</strong> of code in JavaScript.  Everything inside this block  will be executed when the function is called, in order, just like any other bit of JavaScript code you’ve written.</li>
</ol>

<h3 id="usingthefunction">Using the function</h3>

<p>Now we’ve defined the function, to call it somewhere in your code you would simply write:</p>

<pre><code>setElementBackground();</code></pre>

<p>That&#39;s all there is to it!  You no longer have to concern yourself with the difficult internal details of <code>setElementBackground</code>; you’ve already written the code, so now you’re able to use it with ease wherever you like, and reap the (random) rewards of reuse.</p>

<p>Now, the function I’ve just written is completely self-contained.  It performs some activity, then exits; it neither needs input from the code that called it, nor does it give any information back to its caller about what happened.  JavaScript, of course, allows us to write code that’s a bit more talkative and flexible than that, so let’s have a look at how we deal with information input to and output from functions.</p>

<h3 id="arguments">Arguments</h3>

<p>Passing information into a function in order to influence its behavior is a great way to make it more flexible and useful in a variety of situations.  For example, I’ve hard-coded the <code>id</code> of the element whose background is changed inside <code>setElementBackground</code>; it would be nice to be able to specify different elements on the page whenever I call the function so that I could <em>reuse</em> this function for different elements, instead of duplicating all that code.  <strong>Arguments</strong> are the solution.</p>

<p>Earlier, I noted that the function’s definition contains a set of parentheses directly after the function’s name.  This is the function’s <strong>argument list</strong>.  To accept input from the caller, just specify a comma-separated list of variables that your function would like to receive.  You can specify as many or as few as you’d like, and the names you use in the argument list can be referenced inside the function’s body just like with any other variable. The updated <code>setElementBackground</code> function looks like so (<a href="functions_2.html">check out the first example improvement</a> live):</p>

<pre><code>function setElementBackground( elementID ) {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var obj = document.getElementById( elementID );
  if ( obj ) {
    obj.style.background = &#39;rgb(&#39; + red + &#39;,&#39; + green + &#39;,&#39; + blue + &#39;)&#39;;
  }
}</code></pre>

<p>Calling this function with an element ID passed in as an argument is straightforward:</p>

<pre><code>setElementBackground( &#39;element_to_change&#39; );</code></pre>

<p>If you accidentally call the function without passing in an argument, it takes the value <code>undefined</code>.  You can test for this inside your function body to provide a bit of defense against unintentional misuse:</p>

<pre><code>if ( elementID == undefined) {
  // This will evaluate to `true` if the `elementID`
  // variable wasn&#39;t provided by the caller.
  // You can then write some code inside this
  //if statement to stop the code from erroring.
}</code></pre>

<p>The confusing, but nice, bit about function arguments is that the names of variables in the argument list have <em>nothing</em> to do with the name of variables passed into the function.  If <code>elementID</code> is defined as the function’s argument, JavaScript creates a variable <em>inside</em> the function named <code>elementID</code> that has no effect on any variables outside the function — you can have another function outside the function of the same name, and its value would not be altered as a result of any statements inside the function. For example:</p>

<pre><code>var elementID = &quot;No change!&quot;;
setElementBackground( &#39;element_to_change&#39; );
alert( elementID ); // Alerts &quot;No change!&quot;;</code></pre>

<p>This has a very important side effect.  Arguments and variables defined within a function are scoped locally, that is, they are not available from outside of the function nor have any effect on similarly named variables in the global scope.  I’ll talk a bit more about this concept (called <strong>scope</strong>) in the <a href="http://dev.opera.com/articles/view/44-objects-in-javascript/">Objects</a> and <a href="http://dev.opera.com/articles/view/javascript-best-practices/">JavaScript best practices</a> articles, but for now, let’s look at a quick example.  I’ll define a <code>substring</code> function accepting a string and a starting point:</p>

<pre><code>function substring( obj, start ) {
  obj = obj.substring(8);
}

var myString = &quot;This is a string!&quot;;
substring(myString, 8);
alert(myString); // Alerts &quot;This is a string!&quot;</code></pre>

<p>Even though the <code>obj</code> variable is reassigned inside the function to the result of the built-in <code>substring</code> method, <code>myString</code> isn’t affected at all; only the <em>copy</em> of <code>myString</code> sitting inside <code>substring</code> was changed.  The external variable has no idea at all that anything has happened.</p>

<p>This raises the question of communication: if changing arguments’ values has no effect outside the function, how do you pass information back from a function to it’s caller? Let&#39;s look at this now.</p>

<h3 id="returnvalues">Return values</h3>

<p>It’s very common indeed for a function to do some calculation, and give the result of that work back to its caller to be used elsewhere.  It might be useful, for example, for our <code>setElementBackground</code> function to <em>return</em> an array of the colour values for use elsewhere.  That’s a simple matter of using the <code>return</code> keyword JavaScript provides, as shown here:</p>

<pre><code>function setElementBackground( elementID ) {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var obj = document.getElementById( elementID );
  if ( obj ) {
    obj.style.background = &#39;rgb(&#39; + red + &#39;,&#39; + green + &#39;,&#39; + blue + &#39;)&#39;;
  }

  return [ red, green, blue ];
}</code></pre>

<p><a href="functions_3.html">check out the second example improvement</a> in action.</p>

<p>That simple addition means that you can now call the function in such a way as to capture its result in a variable:</p>

<pre><code>var my_result = setElementBackground(&#39;element_to_change&#39;);</code></pre>

<p>Even if your function doesn’t need to return a value, or has no real value to return, it’s good practice to indicate success or failure by returning <code>true</code> or <code>false</code>, respectively.  With that in mind, I’ll change <code>setElementBackground</code> to return <code>false</code> if the <code>elementID</code> that was passed in doesn’t actually exist:</p>

<pre><code>function setElementBackground( elementID ) {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var obj = document.getElementById( elementID );
  if ( obj ) {
    obj.style.background = &#39;rgb(&#39; + red + &#39;,&#39; + green + &#39;,&#39; + blue + &#39;)&#39;;
    return [ red, green, blue ];
  } else {
    return false;
  }
}</code></pre>

<p><a href="functions_4.html">check out the third example improvement</a> in action.</p>

<p>This allows you to check that the code executed properly by testing its return value, for example:</p>

<pre><code>if ( !setElementBackground(&#39;element_does_not_exist&#39;) ) {
  alert(&quot;Something went wrong!  `element_does_not_exist` doesn&#39;t exist!&quot;);
}</code></pre>

<p>Additionally, please note that the <code>return</code> keyword actually ends execution of your function right when it’s called, <em>returning</em> execution to the place at which your function was called.  Code sitting below the call to <code>return</code> is not executed — it’s simply ignored.</p>

<h2 id="summary">Summary</h2>

<p>With that, you now know pretty much everything you need to in order to begin sprinkling your code full of functions.  They’re a foundational part of good JavaScript code and your programs will be better organized, clearer and more readable, and easier to comprehend if you take the opportunity to wrap code up in well-named functions for reuse.</p>

<h2 id="exercises">Exercise questions</h2>

<ul>
<li>What are functions?  Why are they useful?</li>

<li>How do you define a function?</li>

<li>How do you pass information into a function?  Why would you want to?  Conversely, how can you get information out of a function?</li>

<li>Wouldn’t it be nice if you could pass a colour array into `setElementBackground`?  Try modifying the code to accept another argument, and use that variable inside the function to override the random background colour.</li>

</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/unobtrusive-javascript/" rel="prev" title="link to the previous article in the series">Previous article—The principles of unobtrusive JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/objects-in-javascript/" rel="next" title="link to the next article in the series">Next article—Objects in JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<img src="http://forum-test.oslo.osa/kirby/content/articles/232-44-javascript-functions/mikewest.jpg" alt="Picture of the article author Mike West" style="float:right;" />

<p>Mike West is a philosophy student cleverly disguised as an experienced and successful web developer. He’s been working with the web for over a decade, most recently on the team responsible for building up Yahoo!’s European news sites.</p>

<p style="padding-bottom:50px;">After abandoning suburban Texas’ wide open plains in 2005, Mike settled in Munich, Germany where he’s struggling with the language less and less every day. <a href="http://mikewest.org/">mikewest.org</a> is his home on the web, (slowly) gathering his writings and links together for posterity. He keeps his code on <a href="http://github.com/mikewest">GitHub</a>.</p>padding-bottom:50px;
