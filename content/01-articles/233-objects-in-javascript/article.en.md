Title: Objects in JavaScript
----
Date: 2009-02-03 06:38:31
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
<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-functions/" rel="prev" title="link to the previous article in the series">Previous article—JavaScript functions</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/traversing-the-dom/" rel="next" title="link to the next article in the series">Next article—Traversing the DOM</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>The <a href="http://dev.opera.com/articles/view/43-javascript-functions/">functions article</a> that this follows introduced the concept of functions, 
teaching you how to better organize and reuse your code by grouping individual
activities into logical chunks that you can call whenever you like.  Now that 
you’re comfortable with these essential components of JavaScript programming, 
I’d like to expand upon their application by introducing <strong>objects</strong>.  Objects
enable you to gather together the related bundles of functionality you define as
functions, and bind them into a coherent package that you can pass around and
refer to as a <em>single item</em>.  This ability has very practical impacts upon
the code you’re able to write, even if it sounds a little abstract at the
moment.</p>

<p>You might not have noticed it, but you’ve been implicitly exposed to objects
throughout this series; here, I’ll give you a more explicit understanding of
how objects work in JavaScript, and explain how you can increase the
expressiveness and reusability of your code by exploiting them.</p>

<p>This article’s structure is as follows:</p>

<ul>
  <li><a href="#whyobjects">Why objects?</a></li>
  <li><a href="#familiar">Familiar territory</a></li>
  <li><a href="#creatingobjects">Creating objects</a></li>
  <li><a href="#selfreference">Self-reference</a></li>
  <li><a href="#associativearrays">Objects as associative arrays</a></li>
  <li><a href="#whyobjects">The object literal</a></li>
  <li><a href="#summary">Summary — there’s much more to learn</a></li>
  <li><a href="#furtherreading">Further reading</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
</ul>

<p class="note">Note: There is an example available for you to download or run live, which contains code to calculate the area of a triangle, both with and without objects. This code is built up in the explanations below. Run the <a href="triangle_area.html">triangle objects example</a>.</p>

<h2 id="whyobjects">Why objects?</h2>

<p>The single most important reason to care about objects is their capacity to improve your code’s representation of the data and processes you’re implementing.  As a trivial example, consider how you’d write code that did some sort of work with a triangle.  You know that triangles in general have three sides, so to deal with a specific triangle the obvious thing to do is to create three variables:</p>

<pre><code>// This is a triangle.
var sideA = 3;
var sideB = 4;
var sideC = 5;</code></pre>

<p>And there you go, you’ve got a triangle!  But not <em>really</em>, right?  You’ve really just created three variables that you need to keep track of separately, and a comment to remind yourself what you were thinking.  This simply isn’t as clear or as usable as it could be.  But no matter, let’s continue on and consider how you’d build some calculations around this “triangle”.  To find its area, you might write the function as follows:</p>

<pre><code>function getArea( a, b, c ) {
  // Return the area of a triangle using Heron&#39;s formula
        
  var semiperimeter   =   (a + b + c) / 2;
  var calculation     =   semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
  return Math.sqrt( calculation );
}

alert( getArea( sideA, sideB, sideC ) );</code></pre>

<p>You’ll notice that you have to pass all the information about the triangle into the function in order for it to do any calculation.  The activities related to triangles are <em>completely</em> decoupled from the triangle’s data, even though they don’t really make sense in isolation.</p>

<p>Further, I’ve used a nicely generic name for the function and each of the variables:  <code>getArea</code>, <code>sideA</code>, etc.  What happens when I find out next week that I need to extend my program to include a rectangle?  I’d <em>like</em> to use <code>sideA</code> and <code>sideB</code> for the square&#39;s data, but those variable names are already taken.  I could use <code>side1</code> and <code>side2</code>, but I bet you can see why that’s a recipe for confusion and disaster.  I’d probably end up using <code>rectangleSideA</code> and <code>rectangleSideB</code>, and to stay consistent, I’d also have to go back and change all the code that’s already written for triangles to use <code>triangleSideA</code> and so on, which introduces some potential for error.  The same goes of course for the function name: I’d like to use <code>getArea</code> for both shapes, as it’s <em>conceptually</em> the same calculation, but I can’t.  There must be a better way to represent my data!</p>

<p>In the same way that it makes sense to create a function that bundles up a series of commands into a single, well-named activity, it makes sense here to create an object that brings each “thing” together into a single unit.  Instead of being limited to JavaScript’s natively-supported primitive data types (strings, numbers, booleans, etc.), objects enable you to build your own amalgamation of any number of variables of any type.  This free-form flexibility enables you to build structures that map quite directly to the “things” you’re concerned with when writing your programs, and to use them directly in your code just like you’d use native primitives.  Here, I should build triangle and rectangle objects, each containing all the data necessary to deal intelligently with the shape, as well as all the activities I might want to perform with it.  With that goal in mind, let’s get into some syntax.</p>

<h2 id="familiar">Familiar territory</h2>

<p>If you look back to the <a href="/articles/view/javascript-functions/functions_4.html">final functions example from the previous article</a>, you’ll see code snippets like:</p>

<pre><code>var obj = document.getElementById( elementID );</code></pre>
    
<p>and:</p>
    
<pre><code>obj.style.background = &#39;rgb(&#39;+red+&#39;,&#39;+green+&#39;,&#39;+blue&#39;)&#39;;</code></pre>

<p>Surprise!  You’ve been using objects without even knowing it!  Let’s explore
these two snippets in some detail to start piecing together JavaScript’s
object syntax.</p>

<p>The code <code>var obj = document.getElementById( elementID )</code> should look somewhat
familiar.  You know that parentheses at the end of a command mean that a function of some sort is being executed, and you can see that the result of the function call is being stored in a variable named <code>obj</code>.  The only piece here that’s really <em>new</em> is the dot in the middle.  As it turns out, this <strong>dot notation</strong> is how JavaScript grants access to the data inside an object.  The dot (.) is simply an operator that sits between its operands, just like + and -.</p>

<p>By convention, the variables stored in an object that we access via the dot operator are generically called <strong>properties</strong>.  Properties that happen to be functions are called <strong>methods</strong>.  There’s no magic to either of those words; methods are just functions, properties are just variables.</p>

<p>The dot operator expects an object on its left, and a property name on its right; applying this to the code snippet, you can tell that I’m accessing the <code>getElementById</code> method of the built in <code>document</code> object (which you’ll read <em>much</em> more about in the upcoming <a href="http://dev.opera.com/articles/view/45-traversing-the-dom/">article on traversing the DOM</a>.</p>

<p>The next snippet is a little more interesting: it has <em>two</em> dots.  One of the 
really exciting things about JavaScript’s object support is the notion of 
<strong>chaining</strong> dots together to dive down into complex structures.  In short,
you can chain objects together the same way that you can execute
<code>var x = 2 + 3 + 4 + 5;</code> and expect a resulting 14; the object references
simply resolve themselves, left to right (you can impress your friends by explaining that this makes the JavaScript dot operator into a “left-associative infix operator”).  In this case, <code>obj.style</code>
is evaluated, resolving to an object whose <code>background</code> property is then 
accessed.  If you like, you can make this explicit in your code by adding 
parentheses: <code>(obj.style).background</code>.</p>

<h2 id="creatingobjects">Creating objects</h2>

<p>To build my own triangle object, I’ll create it explicitly using the following syntax:</p>

<pre><code>var triangle = new Object();</code></pre>

<p><code>triangle</code> is now a blank foundation, waiting for you to construct some 
soaring three-sided edifice.  You can do so by adding properties to your object using the dot operator:</p>

<pre><code>triangle.sideA  =   3;
triangle.sideB  =   4;
triangle.sideC  =   5;</code></pre>

<p>You don’t actually have to do anything special to add new properties to an
object.  When JavaScript evaluates the dot operator, it’s quite forgiving
indeed.  If you attempt to set a property that doesn’t exist, JavaScript
creates it for you.  If you try to read a property that isn’t there,
JavaScript returns “undefined”.  This is convenient, but can mask errors if
you’re not careful, so watch out for typos!</p>

<p>Adding methods works similarly — here’s an example:</p>

<pre><code>triangle.getArea    =   function ( a, b, c ) {
  // Return the area of a triangle using Heron&#39;s formula
        
  var semiperimeter   =   (a + b + c) / 2;
  var calculation     =   semiperimeter * (semiperimeter - a) *
                                (semiperimeter - b) * (semiperimeter - c);
  return Math.sqrt( calculation );
        
};      // Note the semi-colon here; it’s mandatory.</code></pre>

<p>If you’re thinking that this looks a <em>lot</em> like defining a function, you’re spot on: I’ve simply left off the function’s name entirely.  JavaScript has the concept of an <em>anonymous</em> function that doesn’t have a name of its own, but is instead stored in a variable just like any other value.  In this code, I’m creating an anonymous function, and storing it in the <code>triangle</code> object’s <code>getArea</code> property.  The object then carries that function around with it, just like it carries any other property.</p>

<h2 id="selfreference">Self-reference</h2>

<p>One of the goals of creating the <code>triangle</code> object was to create a bond between the triangle’s data and the actions I can perform on the data.  I haven’t accomplished that yet, however.  You’ll notice right away that the <code>triangle.getArea</code> method still requires that the side length data be passed in when it’s executed, resulting in code that looks like this:</p>

<pre><code>triangle.getArea( triangle.sideA, triangle.sideB, triangle.sideC );</code></pre>

<p>I think this is better than the code I had at the beginning of the article, as it clearly expresses a <em>relationship</em> between the data and the activity.  That relationship, however, means that we shouldn’t have to tell the method what values to work with.  It should be able to gather data about the object on which it lives, and use that data without asking you to input it manually.</p>

<p>The secret lies in the <code>this</code> keyword, which you can use inside a method’s definition to refer back to other properties and methods on the same object.  Rewriting the <code>getArea</code> method to use <code>this</code>, we end up with the following code:</p>

<pre><code>triangle.getArea    =   function () {
  // Return the area of a triangle using Heron&#39;s formula
        
  var semiperimeter   =   (this.sideA + this.sideB + this.sideC) / 2;
  var calculation     =   semiperimeter * (semiperimeter - this.sideA) * (semiperimeter - this.sideB) * (semiperimeter - this.sideC);
                                
  return Math.sqrt( calculation );
        
};      // Note the semi-colon here, it&#39;s mandatory.</code></pre>

<p>As you can see, <code>this</code> works somewhat like a mirror.  When the <code>getArea</code> method is executed, it takes a long look at its reflection to read its <code>sideA</code>, <code>sideB</code>, and <code>sideC</code> properties.  It’s able to use those in its calculation, instead of relying on input from outside.</p>  

<p class="note">Note: This is a bit of an oversimplification.  <code>this</code> doesn’t <em>always</em> refer to the object on which a method is defined, but instead can change based on specific contexts.  Sorry for the obscurity here, but it’s a bit beyond the scope of this article.  That said, you can rest assured that in the context I’m using it here, <code>this</code> will always refer to the <code>triangle</code> object.</p>

<h2 id="associativearrays">Objects as associative arrays</h2>

<p>The dot operator isn’t the only way to access an object’s properties and 
methods; they can also be accessed quite efficiently using the <strong>subscript 
notation</strong> you’ll probably be familiar with from the earlier <a href="http://dev.opera.com/articles/view/38-programming-the-real-basics/#arrays">discussion of 
arrays</a>.  In short, you can treat an object as an <strong>associative 
array</strong> that maps a string to a value in the same way that a typical 
array maps a number to a value.  Using this notation, you could rewrite 
<code>triangle</code> a second way:</p>

<pre><code>var triangle = new Object();
triangle[&#39;sideA&#39;]   =   3;
triangle[&#39;sideB&#39;]   =   4;
triangle[&#39;sideC&#39;]   =   5;
triangle[&#39;getArea&#39;] =   function ( a, b, c ) {
  // Return the area of a triangle using Heron&#39;s formula
        
  var semiperimeter   =   (a + b + c) / 2;
  var calculation     =   semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
  return Math.sqrt( calculation );
        
};      // Note the semi-colon here, it&#39;s mandatory.</code></pre>

<p>At first glance, this might appear superfluous.  Why not just use dot
notation?  The benefit of this new syntax is that the property name isn’t 
hard-coded into your program. You can use variables to specify the property 
names, which means you can build truly flexible commands that do different 
things based on context.  For example, you could build a function that
compared two objects to see if they share a common property:</p>

<pre><code>function isPropertyShared( objectA, objectB, propertyName ) {
  if (
     typeof objectA[ propertyName ] !== undefined
     &amp;&amp;
     typeof objectB[ propertyName ] !== undefined
     ) {
         alert(&quot;Both objects have a property named &quot; + propertyName + &quot;!&quot;);
       }
}</code></pre>

<p>This function would be simply impossible to write in a generic way using dot 
notation, as I’d have to explicitly write the property names to test in the 
program&#39;s code.  You’ll use this syntax a <em>lot</em>.</p>

<p class="note">Note: An associative array is called a “hash” in Perl, a “hashtable” in 
C#, a “map” in C++, a “hashmap” in Java, a “dictionary” in Python, and so on.  
It’s a very powerful and foundational concept in programming, and you might already know it under a different name.</p>

<h2 id="objectliteral">The object literal</h2>

<p>Let’s take a close look at some code that’s probably quite familiar:</p>

<pre><code>alert(&quot;Hello world&quot;);</code></pre>

<p>You can identify <code>alert</code> right away as a function that’s being called with a
single argument: the string “Hello world”.  What I’d like you to note here is
that you <em>didn’t</em> have to write:</p>

<pre><code>var temporaryString = &quot;Hello world&quot;;
alert(temporaryString);</code></pre>

<p>JavaScript simply understands that anything contained inside a pair of
double-quotes (&quot; &quot;) should be treated as a string, and does whatever
background magic is necessary to make that work wherever you write it.  The
string is created and passed right into the function all at once.  Formally,
<code>&quot;Hello world&quot;</code>` is referred to as a <strong>string literal</strong>; you’ve literally typed
out everything that’s going into the string in order to create it.</p>

<p>JavaScript has a similar syntax for “object literals” that allows you to
create your own object without any syntactical overhead.  Let’s rewrite the
object I created above yet a third way, this time as an object literal:</p>

<pre><code>var triangle = {
  sideA:      3,
  sideB:      4,
  sideC:      5,
  getArea:    function ( a, b, c ) {
    // Return the area of a triangle using Heron&#39;s formula
        
    var semiperimeter   =   (a + b + c) / 2;
    var calculation     =   semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
    return Math.sqrt( calculation );
        
  }
};</code></pre>
    
<p>The syntax is clear: the object literal uses curly-braces to demarcate the
beginning and end of the object, which contain an arbitrary number of
“<code><var>propertyName</var>: <var>propertyValue</var></code>” pairs
separated by commas.  This makes it quite easy to build up structures for use
in your programs without tedious repetition of the object name on every line.</p>

<p>One thing to watch out for, though: it&#39;s a very common mistake to put a comma after the last item in the object literal’s list of properties (in this case, after the <code>getArea</code> definition).  Only put commas <em>between</em> properties — an extra comma at the end will cause errors.  Especially when coming back to code later to insert or remove values, you’ll need to be very careful to keep commas in the right places.</p>

<h2 id="summary">Summary — there’s much more to learn</h2>

<p>This is really just scratching the surface of object capabilities and 
limitations in JavaScript.  After reading through, you should be comfortable 
creating your own objects, adding properties and methods, and using them in
simple self-referential ways.  There’s a lot more out there, but none of it is 
<em>essential</em> for you in your explorations.  This article is meant to start you 
down the path, and give you the tools you need to understand code you’ll be
exposed to as you delve deeper into the subject.</p>

<h2 id="furtherreading">Further reading</h2>

<ul>
  <li><a href="http://nefariousdesigns.co.uk/archive/2006/05/object-oriented-javascript/">Object Oriented JavaScript</a>: A good introduction to more advanced object-oriented concepts in JavaScript.</li>

  <li><a href="http://javascript.crockford.com/private.html">Private Members in JavaScript</a>: Douglas Crockford’s seminal discussion of implementing encapsulation in JavaScript.</li>

  <li><a href="http://www.digital-web.com/articles/scope_in_javascript/">Scope in JavaScript</a>: A more advanced discussion of the intricacies of the <code>this</code> keyword in various contexts.</li>
</ul>

<h2 id="exercises">Exercise questions</h2>

<ul>
  <li>When might you want to use subscript notation instead of dot notation when referencing an object’s properties?</li>
    
  <li>How can an object refer to itself?  Why is this valuable?</li>
    
  <li>What is an object literal?  When creating an object literal, where do the commas go?</li>

  <li>I built an object to represent a triangle, and calculate its area.  I’d
    like you to do the same for a rectangle.  Use <code>this</code> in the rectangle’s
    <code>getArea</code> method to avoid passing its data around unnecessarily.</li>

</ul>
    
<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/javascript-functions/" rel="prev" title="link to the previous article in the series">Previous article—JavaScript functions</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/traversing-the-dom/" rel="next" title="link to the next article in the series">Next article—Traversing the DOM</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<img src="http://forum-test.oslo.osa/kirby/content/articles/233-45-objects-in-javascript/mikewest.jpg" alt="Picture of the article author Mike West" style="float:right;" />

<p>Mike West is a philosophy student cleverly disguised as an experienced and successful web developer. He’s been working with the web for over a decade, most recently on the team responsible for building up Yahoo!’s European news sites.</p>

<p style="padding-bottom:50px;">After abandoning suburban Texas’ wide open plains in 2005, Mike settled in Munich, Germany where he’s struggling with the language less and less every day. <a href="http://mikewest.org/">mikewest.org</a> is his home on the web, (slowly) gathering his writings and links together for posterity. He keeps his code on <a href="http://github.com/mikewest">GitHub</a>.</p>
