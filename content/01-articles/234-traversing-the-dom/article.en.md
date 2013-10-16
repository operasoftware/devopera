Title: Traversing the DOM
----
Date: 2009-02-03 06:38:27
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
<li class="prev"><a href="http://dev.opera.com/articles/view/objects-in-javascript/" rel="prev" title="link to the previous article in the series">Previous article—Objects in JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/creating-and-modifying-html/" rel="next" title="link to the next article in the series">Next article—Creating and modifying HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>It’s hard to come up with any example of useful JavaScript code on the web that doesn’t interact in some way with an HTML document.  Generally speaking, your code needs to read in values from the page, process them in some way, and then generate output in the form of visible changes or informational messages.  As your next step towards the goal of creating responsive interfaces for your pages and applications, this article and the next will introduce the <strong>Document Object Model</strong>, which provides the mechanism for <em>inspecting</em> and <em>manipulating</em> the semantic and presentational layers that you create.</p>

<p>After reading this article, you’ll have a good understanding of what the DOM is, and how you can use it to navigate through an HTML page in order to find the exact spot at which you need to gather some data or make a change.  The next article in the series (<a href="http://dev.opera.com/articles/view/creating-and-modifying-html/">Creating and modifying HTML</a>) will pick up there, outlining the methods by which you can manipulate the data on the page, changing values or creating entirely new elements and attributes.</p>

<p>The structure of this article is as follows:</p>

<ul>
  <li><a href="#plantingseeds">Planting seeds</a></li>
  <li><a href="#growingtrees">Growing trees</a></li>
  <li><a href="#nodes">Nodes</a></li>
  <li><a href="#branchtobranch">Branch to branch</a></li>
  <li><a href="#directaccess">Direct access</a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="plantingseeds">Planting seeds</h2>

<p>The <acronym title="Document Object Model">DOM</acronym>, as you might guess from the name Document Object Model, is a model of the HTML document which is created by the browser when it loads up your web page. JavaScript has access to all of the information is this model.  Let’s step back a moment, and consider what exactly is being modeled.</p>

<p>When I build a page, my goal is to add meaning to raw content by mapping it to the HTML tags I have available: One bit of content is a <em>paragraph</em>, so I’ll use a <code>p</code> tag; the next is a <em>link</em>, so I’ll use an <code>a</code> tag, and so on.  I also encode relationships between elements: <code>input</code> fields each have a <code>label</code>, and might sit together inside a <code>fieldset</code>.  Moreover, I’ll go a bit beyond this basic set of HTML tags by adding <code>id</code> and <code>class</code> attributes where appropriate in order to infuse the page with more  structures I can use to style or manipulate it.  Once this HTML framework is built, I’ll use CSS to dress up those pure semantics with stylish presentation.  <span lang="fr">Et voil&#xE0;</span>, you’ve created a page that will <em>delight</em> your users.</p>

<p>But that’s not all. I’ve created a document that’s simply <em>dripping</em> with  meta-information that I can manipulate using JavaScript.  I can find specific elements or <em>groups</em> of elements and delete, add, and modify them according to user-defined variables; I can find presentational information (CSS) and modify styles on the fly; I can validate the information users enter into forms; and a whole host of other things. For JavaScript to do these things, it needs access to information, and the DOM provides JavaScript with all of this.</p>

<p>It’s also important to note that well-structured HTML and CSS form the seed from which JavaScript&#39;s model for the page will grow.  The model of a poorly constructed document will differ in undesirable ways from your expectations, and behave inconsistently across browsers.  It’s vital, then, that your HTML and CSS be both <a href="http://dev.opera.com/articles/view/24-validating-your-html/">well-formed and valid</a> in order to ensure that JavaScript ends up with exactly the model you think it should.</p>

<h2 id="growingtrees">Growing trees</h2>

<p>After creating and styling your document, the next step is to hand it off to a browser to display to your users.  This is where the DOM comes into play, reading through the document you’ve written, and dynamically generating a DOM you can use within your programs.  Specifically, the DOM represents the HTML page as a <strong>tree</strong>, in much the same way you might represent your ancestry as a “family tree”.  Each element on the page is contained in the DOM as a <strong>node</strong>, with branches linking to elements it directly contains (its <strong>children</strong>), and to the element that directly contains it (its <strong>parent</strong>).  Let’s work through a simple HTML document to make these relationships clear:</p>

<pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;This is a Document!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;This is a header!&lt;/h1&gt;
    &lt;p id=&quot;excitingText&quot;&gt;
      This is a paragraph! &lt;em&gt;Excitement&lt;/em&gt;!
    &lt;/p&gt;
    &lt;p&gt;
      This is also a paragraph, but it&#39;s not nearly as exciting as the last one.
    &lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
    
<p>As you can see, the entire document is contained within an <code>html</code> element.  That element directly contains two others: <code>head</code> and <code>body</code>.  Those show up in our model as its children, and they each point to <code>html</code> as their parent.  And so it goes, down through the document hierarchy, with each element pointing to its direct descendants as children, and to its direct ancestor as parent:</p>

<ul>
  <li><code>title</code> is a child of <code>head</code>.</li>
  <li><code>body</code> has three children — two <code>p</code> elements and an <code>h1</code> element.</li>
  <li>The <code>p</code> element with the <code>id=&quot;excitingText</code> has a child of its own — an <code>em</code> element.</li>
  <li>The plain text content of the elements (ie “This is a Document!”) is also represented in the DOM, as <strong>text nodes</strong>.  These have no children of their own, but do point to their containing elements as parents.</li>
</ul>

<p>So, the DOM hierarchy we end up for the above HTML document is represented visually something like Figure 1:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/234-46-traversing-the-dom/DOMTree.gif" alt="A visual DOM tree representation of an HTML document" /></p>
<p class="comment">Figure 1: The above HTML document represented visually as a DOM tree.</p>

<p>It’s a straightforward mapping from the HTML document to this tree structure, which succinctly captures the direct relationships between elements on the page, making the hierarchy clear.  You’ll notice, however, that I’ve added a node labeled <code>document</code> above the <code>html</code> node.  This is the document’s <strong>root</strong>, and acts as JavaScript’s most-visible hook into the tree.</p>

<h2 id="nodes">Nodes</h2>

<p>Before I shimmy up the tree and start swinging from branch to branch, let’s take a moment to examine in some detail what exactly I’ll be hanging on to.</p>

<p>Each node in the DOM tree is an <a href="http://dev.opera.com/articles/view/44-objects-in-javascript/">object</a> representing a single element on the page.  Nodes understand their relationship to other nodes in their immediate vicinity, and contain a good deal of information about themselves.  In much the same way as a child might clamber from one branch to the next closest in a backyard oak, I can gather all the information from a node that I need to get to its parent or to its children.</p>

<p>As you might expect, given JavaScript’s object-nature, the information I’m looking for in this case is exposed via the node’s properties.  Specifically, the <code>parentNode</code> and <code>childNodes</code> properties.  As each element on the page has at most one parent, the <code>parentNode</code> property is straightforward: it simply gives you access to the node’s parent.  Nodes can have any number of children, however, so the <code>childNodes</code> property is actually an array.  Each element of the array points to one child, in the same order they appear in the document.  Our example document’s <code>body</code> element would therefore have a <code>childNodes</code> array containing the <code>h1</code>, the first <code>p</code>, then the second <code>p</code>, in that order.</p>

<p>These aren’t the only interesting properties of nodes, of course.  But this is a good start.  So what code do I use to get my hands on one of these nodes in the first place?  Where do I start my explorations?</p>

<h2 id="branchtobranch">Branch to branch</h2>

<p>The best place to begin is at the document’s root, accessible via an object creatively named <code>document</code>.  As <code>document</code> is right at the root, it doesn’t have a <code>parentNode</code>, but it does have a single child: the <code>html</code> element node, which we can access via <code>document</code>’s <code>childNodes</code> array:</p>

<pre><code>var theHtmlNode = document.childNodes[0];</code></pre>

<p>This line of code creates a new variable named <code>theHtmlNode</code>, and assigns it the value of the <code>document</code> object’s first child (remember that JavaScript arrays start numbering with 0, not 1). You can confirm that you’ve gotten your hands on the <code>html</code> node by examining <code>theHtmlNode</code>’s <code>nodeName</code> property, which gives vital information about the exact kind of node you’re dealing with:</p>

<pre><code>alert( &quot;theHtmlNode is a &quot; + theHtmlNode.nodeName + &quot; node!&quot; );</code></pre>

<p>This code pops up an alert box that reads “theHtmlNode is a HTML node!”.  Great!  The <code>nodeName</code> property gives you access to the node’s type.  For element nodes, the property contains the tag name in upper case: here it’s “HTML”; for a link it would be “A”, for a paragraph “P”, and so on.  A text node’s <code>nodeName</code> property is “#text”, and <code>document</code>’s <code>nodeName</code> is “#document”.</p>

<p>You also know that <code>theHtmlNode</code> should contain a reference to its parent.  You can check that it’s working the way it&#39;s expected to with the following test:</p>

<pre><code>if ( theHtmlNode.parentNode == document ) {
  alert( &quot;Hooray!  The HTML node&#39;s parent is the document object!&quot; );
}</code></pre>

<p>This does just as we were expecting.  Using this information, let’s write some code to get a reference to the first paragraph in the example document’s body.  This is the second child of the <code>body</code> element, which is the second child of the <code>html</code> element, which is the first child of the <code>document</code> object.  Whew.</p> 

<pre><code>var theHtmlNode = document.childNodes[0];
var theBodyNode = theHtmlNode.childNodes[1];
var theParagraphNode = theBodyNode.childNodes[1];
alert( &quot;theParagraphNode is a &quot; + theParagraphNode.nodeName + &quot; node!&quot; );</code></pre>

<p>Wonderful.  It does exactly what we want.  But it’s really quite verbose, and there&#39;s a much better way to write it.  In the <a href="http://dev.opera.com/articles/view/objects-in-javascript/">Objects article</a>, you learned that you can chain object references together; you can do the same thing here, skipping the intermediary variables by writing the following:</p>

<pre><code>var theParagraphNode = document.childNodes[0].childNodes[1].childNodes[1];
alert( &quot;theParagraphNode is a &quot; + theParagraphNode.nodeName + &quot; node!&quot; );</code></pre>

<p>This is much less verbose, and saves you a bit of code.</p>

<p>A node’s first child is always <code>node.childNodes[0]</code>, and a node’s last child is always <code>node.childNodes[node.childNodes.length - 1]</code>.  I access these quite often, but they are a bit unwieldy to type over and over again.  Given how frequently useful they are, the DOM gives you explicit shortcuts for both: <code>.firstChild</code> and <code>.lastChild</code> respectively.  Since the <code>html</code> node is the first child of the <code>document</code> object, and the <code>body</code> node is the last child of the <code>html</code> node, you could rewrite the above code even more clearly as:</p>

<pre><code>var theParagraphNode = document.firstChild.lastChild.childNodes[1];
alert( &quot;theParagraphNode is a &quot; + theParagraphNode.nodeName + &quot; node!&quot; );</code></pre>

<p>These close-range node-navigation methods are useful, and let you get wherever you like in a document, but they’re cumbersome.  Even in this tiny example document, you can start to see how laborious it can be to navigate from the root node down into the depths of the markup.  There must be a better way to get around!</p>

<h2 id="directaccess">Direct access</h2>

<p>It’s really very difficult to specify explicit paths to each of the elements you’re interested in on a page.  Moreover, it becomes <em>completely</em> impossible if the page you’re working with is in any way dynamically generated (for example using a server-side language like PHP or ASP.NET) as you can’t guarantee that, for example, the paragraph you’re looking for is <em>always</em> the <code>body</code> node’s second child.  So a better way is needed to get to a specific element without explicit knowledge of its surroundings.</p>

<p>Looking back at the HTML document in the example above, you can see that there’s an <code>id</code> attribute on the paragraph we just discussed.  This <code>id</code> is unique, and identifies a specific location in the document that allows you to bypass the explicit path by using the <code>document</code> object’s <code>getElementById</code> method.  The method does exactly what you’d expect, giving you back either <code>null</code> if you give JavaScript an <code>id</code> that doesn’t exist on the page, or the element node you’ve requested if it does exist.  To test it out, let’s compare the results of the new method with the old:</p>

<pre><code>var theParagraphNode = document.getElementById(&#39;excitingText&#39;);
if ( document.firstChild.lastChild.childNodes[3] == theParagraphNode ) {
 alert( &quot;theParagraphNode is exactly what we expect!&quot; );
}</code></pre>

<p>This code will pop up the confirmation message, proving that the two methods give identical results for this example document.  <code>getElementById</code> is the most efficient way of gaining access to a particular piece of a page: if you know you’ll need to do some processing somewhere on a page (especially if you can’t guarantee where) adding an <code>id</code> attribute in the appropriate place will save you time.</p>

<p>Equally useful is the DOM’s <code>getElementsByTagName</code> method, which returns a collection of all the elements on the page of a particular type.  You can for example get JavaScript to show you all the <code>p</code> elements on the page. The following example gives us both the exciting paragraph, and its less interesting sibling:</p>

<pre><code>var allParagraphs = document.getElementsByTagName(&#39;p&#39;);</code></pre>

<p>Processing the resulting collection stored in <code>allParagraphs</code> is best done with a <code>for</code> loop: you can work with it almost exactly like an array:</p>

<pre><code>for (var i=0; i &lt; allParagraphs.length; i++ ) {
  //  do your processing here, using
  //  &quot;allParagraphs[i]&quot; to reference
  //  the current element of the
  //  collection
        
  alert( &quot;This is paragraph &quot; + i + &quot;!&quot; );
}</code></pre>

<p>For more complex documents, returning <em>all</em> elements of a given type might still be overwhelming.  Instead of working through all 200 <code>div</code>s on a large page, it’s likely that you really just want to manipulate the <code>div</code>s from a specific section.  In that case you can combine these two methods to filter your results: grab an element using its <code>id</code>, and ask it for all the elements of a given type that it contains.  As an example, I could grab <em>all</em> of the <code>em</code> elements in my exciting paragraph by asking for the following</p>

<pre><code>document.getElementById(&#39;excitingText&#39;).getElementsByTagName(&#39;em&#39;)</code></pre>

<h2 id="summary">Summary</h2>

<p>The DOM is the foundation of almost everything JavaScript does for us on the web.  It’s the interface that allows us to interact with our page’s content, and it’s essential to understand how to get around within that model.</p>

<p>This article has given you the basic tools for that job.  You can easily traverse the DOM now using <code>document</code> to get a handle on the DOM’s root, and <code>childNodes</code> and <code>parentNode</code> to hop up and down the tree to nodes’ direct relatives.  You can skip over intermediaries and avoid hard-coding long and cumbersome paths using <code>getElementById</code> and <code>getElementsByTagName</code> to create your own shortcuts.  But climbing around in your tree is only the beginning.</p>

<p>The logical next step is to start <em>doing</em> interesting things with the results your JavaScript returns.  You’ll need to grab data to power your scripts, and manipulate data on the page to create exciting user interactions.  We’ll explore those topics in the next article, which shows you how to use methods the DOM provides to interact with nodes and their attributes, and to weave that interaction into the scripts and interfaces you create in the future.</p>

<h2 id="exercises">Exercise questions</h2>

<ul>
  <li>Using the example document from the article, write three different paths that end up on the <code>head</code> element.  Remember that you can chain <code>childNodes</code> and <code>parentNode</code> together as much as you like.</li>
    
<li>Given an arbitrary node, how can you determine its type?</li>
    
<li>Given an arbitrary node, how can you get back to the <code>document</code> object? Hint: Remember that the <code>document</code> object’s <code>parentNode</code> property returns <code>null</code>.</li>

</ul>
   
<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/objects-in-javascript/" rel="prev" title="link to the previous article in the series">Previous article—Objects in JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/creating-and-modifying-html/" rel="next" title="link to the next article in the series">Next article—Creating and modifying HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/234-46-traversing-the-dom/mikewest.jpg" alt="Picture of the article author Mike West" style="float:right;" /></p>

<p>Mike West is a philosophy student cleverly disguised as an experienced and successful web developer. He’s been working with the web for over a decade, most recently on the team responsible for building up Yahoo!’s European news sites.</p>

<p style="padding-bottom:50px;">After abandoning suburban Texas’ wide open plains in 2005, Mike settled in Munich, Germany where he’s struggling with the language less and less every day. <a href="http://mikewest.org/">mikewest.org</a> is his home on the web, (slowly) gathering his writings and links together for posterity. He keeps his code on <a href="http://github.com/mikewest">GitHub</a>.</p>
