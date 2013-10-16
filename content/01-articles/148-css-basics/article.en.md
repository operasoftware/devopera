Title: CSS basics
----
Date: 2008-09-26 06:30:33
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
<li class="prev"><a href="http://dev.opera.com/articles/view/26-accessibility-testing/" rev="prev" title="link to the previous article in the series">Previous article—Accessibility testing</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/" rel="next" title="link to the next article in the series">Next article—Inheritance and cascade</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

  <p>In the earlier tutorials of this course we talked about the content of web sites and how to structure content using HTML. This is very important as it means that we give our documents meaning and structure for other technologies to tie into seamlessly. The most important web technology to discuss next is CSS (Cascading Style Sheets), which is used to style our HTML, and position it on the web page. In this article I’ll introduce you to CSS—what it is, how to apply it to HTML, and what basic CSS syntax looks like. The structure of the article is as follows:</p>

<ul>
<li><a href="#whatiscss">What is CSS?</a></li>

<li><a href="#definingstylerules">Defining style rules</a>
<ul>
<li><a href="#csscomments">CSS comments</a></li>
<li><a href="#groupingselectors">Grouping selectors</a></li>
</ul>
</li>

<li><a href="#advancedselectors">Advanced CSS selectors</a>
<ul>
<li><a href="#universal">Universal selectors</a></li>
<li><a href="#attribute">Attribute selectors</a></li>
<li><a href="#child">Child selectors</a></li>
<li><a href="#descendent">Descendent selectors</a></li>
<li><a href="#adjacent">Adjacent sibling selectors</a></li>
<li><a href="#pseudoclasses">Pseudo-classes</a></li>
<li><a href="#pseudoelements">Pseudo-elements</a></li>
</ul>
</li>

<li><a href="#shorthand">CSS shorthand</a>
  <ul>
    <li><a href="#comparingvalues">Comparing individual and shorthand values</a></li>
    <li><a href="#lessthanfourvalues">Providing less than four values for the margin property</a></li>
    <li><a href="#singlepropertyorshorthandvalue">Making the choice to use a single property or a shorthand value</a></li>
    <li><a href="#shorthandreference">Shorthand reference</a></li>
  </ul>
</li>

<li><a href="#applyingcsstohtml">Applying CSS to HTML</a>
<ul>
<li><a href="#inline">Inline styles</a></li>
<li><a href="#embedded">Embedded styles</a></li>
<li><a href="#external">External style sheets</a></li>
<li><a href="#import">@importing stylesheets</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>

</ul>
  
<h2 id="whatiscss">What is CSS?</h2>
<p>Whilst HTML structures the document and tells browsers what a certain element’s function is (it is a link to another page? Is it a heading?), CSS gives the browser instructions on how to display a certain element—styling, spacing and positioning. If HTML is the struts and bricks that make up the structure of a house, CSS is the plaster and paint to decorate it.</p>

<p>This is done using a system of rules, the exact syntax of which you’ll learn more about below. These rules state what HTML elements should have styling added to them, and then within each rule list the properties (eg colour, size, font, etc.) of those HTML elements they want to manipulate, and what values they want to change them to. For example, a CSS rule might state “I want to find every <code>h2</code> element and colour them all green”, or “I want to find every paragraph with a class name of <code>author-name</code>, colour their backgrounds in red, make the text inside them twice the size of normal paragraph text, and add 10 pixels of spacing around each one.</p>

<p>CSS is not a programming language like JavaScript and it is not a markup language like HTML—actually there is nothing that can be compared to it. Technologies that defined interfaces before web development always mixed presentation and structure. This is not a clever thing to do in an environment that changes as often as the web, which is why CSS was invented.</p>


<h2 id="definingstylerules">Defining style rules</h2>

<p>Without further ado, let’s have a look at a CSS code example, and then dissect it:</p>

<pre><code>
selector {
  property1:value;
  property2:value;
  property3:value;
}
</code></pre>

<p>The pertinent parts are as follows:</p>
<ul>
<li>The selector identifies the HTML elements that the rule will be applied to, identified by the actual element name, eg <code>body</code>, or by other means such as <code>class</code> attribute values—we’ll get on to these later.</li>
<li>The curly braces contain the property/value pairs, which are separated from each other by semi-colons; the properties are separated from their respective values by colons,</li>
<li>The properties define what you want to do to the element(s) you have selected. These come in wide varieties, which can affect element colour, background colour, position, margins, padding, font type, and many other things.</li>
<li>The values are the values that you want to change each property of the selected elements to. The values are dependent on the property, for example properties that affect colour can take hexadecimal colours, like #336699, RGB values like rgb(12,134,22) or colour names like red, green or blue. Properties that affect position, margins, width, height etc can be measured in pixels, ems, percentages, centimeters or other such units.</li>
</ul>
<p>Now let&#39;s look at a specific example:</p>

<pre><code>
p {
  margin:5px;
  font-family:arial;
  color:blue;
}
</code></pre>

<p>The HTML element this rule selects is <code>p</code>—every <code>p</code> in the HTML document(s) that use this CSS  will have this rule applied to it, unless they have more specific rules also applied to them, in which case the more specific rule(s) will overwrite this rule. The properties  affected by this rule are the margins around the paragraphs, the font of the text inside the paragraphs, and the colour of that text. The margins are  set at 5 pixels, the font is  set as Arial, and the colour of the text is  set as blue.</p>

<p>We will come back to all of these specifics later—the main goal of this tutorial is to cover the basics of CSS and not the nitty-gritty details.</p>

<p>A whole set of these rules goes together to form a style sheet. This is the most basic syntax of CSS there is. There is more, but not much—probably the coolest thing about CSS is its simplicity.</p>

<h3 id="csscomments">CSS comments</h3>

<p>One thing to know early on is how to comment in CSS. You add comments by enclosing them in <code>/*</code> and <code>*/</code>. Comments can span several lines, and the browser will ignore these lines:</p>

<pre><code>
/* These are basic element selectors */
selector{
  property1:value;
  property2:value;
  property3:value;
}
</code></pre>

<p>You can add comments either between rules or inside the property block—for example in the following CSS the 2nd and 3rd properties are enclosed inside comment delimiters, so they will be ignored by the browser. This is useful when you are checking out what effect certain parts of your CSS are having on your web page; just comment them out, save your CSS, and reload the HTML.</p>

<pre><code>
selector{
  property1:value;
  /* 
  property2:value;
  property3:value;
  */
}
</code></pre>

<p>Unlike other languages, CSS only has block level comments—single line comments do not exist. You can of course constrain the comment to a single line if you wish, but you still need to include the opening and closing comment delimeters (<code>/*</code> and <code>*/</code>).</p>

<h3 id="groupingselectors">Grouping selectors</h3>

<p>You can also group different selectors. Say you want to apply the same style to <code>h1</code> and <code>p</code>—you could write the following CSS:</p>

<pre><code>
h1 {color:red;}

p {color:red;}
</code></pre>

<p>This however is not ideal, as you repeat information that is  the same. Therefore you can shorten the CSS by grouping the selectors together with a comma—the rules within the brackets are applied to both selectors:</p>

<pre><code>
h1, p {color:red;}
</code></pre>

<p>There are several different selectors, each matching a different part of the markup. The three most basic ones that you&#39;ll encounter most often are as follows:</p>

<dl>
  <dt><code>p {}</code>: element selector</dt>
  <dd>matches all the elements of that name on the page (<code>p</code> elements, in the case above)</dd>
  <dt><code>.example{}</code>: class selector</dt>
  <dd>matches all elements that have a <code>class</code> attribute with the value specified, so the above would match <code>&lt;p class=&quot;example&quot;&gt;</code>, <code>&lt;li class=&quot;example&quot;&gt;</code> or <code>&lt;div class=&quot;example&quot;&gt;</code>, or any other element with a <code>class</code> of <code>example</code>. Note that class selectors don&#39;t test for any specific element name</dd>
  <dt><code>#example{}</code>: id selector</dt>
  <dd>matches all elements that have an <code>id</code> attribute with the value specified, so the above would match <code>&lt;p id=&quot;example&quot;&gt;</code>, <code>&lt;li id=&quot;example&quot;&gt;</code> or <code>&lt;div id=&quot;example&quot;&gt;</code>, or any other element with an <code>id</code> of <code>example</code>. Note that ID selectors don’t test for any element name, and you can only have one of each ID per HTML document—they are unique to each page.</dd>
</dl>

<p>You can see the above selectors in action in the following examples. Notice that when you open the example in a browser the <code>warning</code> style gets applied to both the list item and the paragraph (if the bullet disappears it&#39;s because you are setting a white text colour on a white background).</p>
<ul>
<li><a class="codeexample" href="example-selectors.html">example-selectors.html</a></li>
<li><a class="codeexample" href="selectors.css">selectors.css</a></li>
</ul>

<p>You can join some selectors to define even more specific rules:</p>

<dl>
  <dt><code>p.warning{}</code></dt>
  <dd>matches all paragraphs with the <code>class</code> of <code>warning</code></dd>
  <dt><code>div#example{}</code></dt>
  <dd>matches the element with the <code>id</code> attribute example, but only when it is a <code>div</code></dd>
  <dt><code>p.info, li.highlight{}</code></dt>
  <dd>matches paragraphs with a <code>class</code> of <code>info</code> and list items with a <code>class</code> of <code>highlight</code></dd>
</dl>

<p>In the following example I use these to differentiate between the different warning styles:</p>

<ul>
<li><a class="codeexample" href="example-specificselectors.html">example-specificselectors.html</a></li>
<li><a class="codeexample" href="specificselectors.css">specificselectors.css</a></li>
</ul>


<h2 id="advancedselectors">Advanced CSS selectors</h2>

<p>In the above section, I introduced you to the most basic of CSS selectors, element, class and id selectors. With these selectors you can accomplish a lot, but this certainly isn’t the be all and end all of selectors—there are other selectors that allow you to select elements to style based on more specific criteria:</p>

<ul>
<li>Universal selectors: universal selectors can be used to select every element on the page.</li>
<li>Attribute selectors: as their name suggests, attribute selectors allow you to select elements based on their attributes.</li>
<li>Child selectors: if you want to select specific elements that are children of other specific elements, use this selector.</li>
<li>Descendent selectors: if you want to select specific elements that are descendents of other specific elements (not just direct children, but further down in the tree as well), you can use this selector type.</li>
<li>Adjacent sibling selectors: if you want to select just specific elements that follow other specific elements, use these selectors.</li>
<li>Pseudo-classes: these allow you to style elements based not on what the elements are, but on more esoteric factors such as the states of links (eg if they are being hovered over, or have been visited already).</li>
<li>Pseudo-elements: these allow you to style specific parts of elements, rather than the whole element (eg the first letter within that element); they also allow you to insert content before or after specific elements.</li>
</ul>

<p class="note">You will see references to some of the more complicated selectors as you progress through the rest of the curriculum, but don’t worry if you don’t understand them all immediately—you will get there as you gain more experience in styling web pages! It is best to start off easy with the three basic selectors mentioned in the above section, then move on to the others as you gain more confidence.</p>

<h3 id="universal">Universal selectors</h3>

<p>Put simply, universal selectors select every element on a page to apply styles to. For example, the following rule says that every element on the page should be given a solid 1 pixel black border:</p>

<pre><code>* {
  border: 1px solid #000000;
}</code></pre>

<h3 id="attribute">Attribute selectors</h3>

<p>Attribute selectors allow you to select elements based on attributes they contain. For example, you can select every <code>img</code> element with an <code>alt</code> attribute with the following selector:</p>

<pre><code>img[alt] {

  border: 1px solid #000000;

}</code></pre>

<p>Note the square brackets.</p>

<p>Using the above selector, you could perhaps choose to put a black border around any images that have an <code>alt</code> attribute, and style other images with a bright red border—useful in accessibility testing.</p>

<p>But attributes instantly get more useful when you consider that you can select by <em>attribute value</em>, not just attribute names. The following rule gives all images with an <code>src</code> attribute value of <code>alert.gif</code>:</p>

<pre><code>img[src=&quot;alert.gif&quot;] {

  border: 1px solid #000000;

}</code></pre>

<p>You might not think this is hugely useful, but again, it can be useful for debugging purposes. Far more useful is the ability to select for specific parts of attributes, for example file extensions. And this is on the way—CSS 3 actually introduces three new types of attribute selector that can select based on text strings in attribute values (at the beginning, end, or anywhere within the value). <a href="http://dev.opera.com/articles/view/css-3-attribute-selectors/">Read Christopher Schmitt’s article on CSS 3 attribute selectors</a>.</p>

<h3 id="child">Child selectors</h3>

<p>You can use a child selector to select just specific elements that are children of other specific elements. For example, the following rule will turn the text of <code>strong</code> elements that are children of <code>h3</code> elements blue, but no other <code>strong</code> elements: </p>

<pre><code>h3 &gt; strong {

  color: blue;

}</code></pre>

<p class="note">Child selectors are not supported in IE 6 or below.</p>

<h3 id="descendent">Descendent selectors</h3>

<p>Descendent selectors are very similar to child selectors, except that child selectors only select <strong>direct</strong> descendents; descendent selectors select suitable elements anywhere in the element hierarchy, not just direct descendents. Let&#39;s look at what this means more carefully. Consider the following HTML snippet:</p>

<pre><code>&lt;div&gt;
  &lt;em&gt;hello&lt;/em&gt;
  &lt;p&gt;In this paragraph I will say 
    &lt;em&gt;goodbye&lt;/em&gt;.
  &lt;/p&gt;
&lt;/div&gt;</code></pre>

<p>In this snippet, the <code>div</code> element is the parent of all the others. It has two children, an <code>em</code> and a <code>p</code>. The <code>p</code> element has a single child element, another <code>em</code>.</p>

<p>You could use a child selector to select just the <code>em</code> immediately inside the <code>div</code>, like so:</p>

<pre><code>div &gt; em {

 ...

}</code></pre>

<p>If you instead used a descendent selector, as follows:</p>

<pre><code>div em {

 ...

}</code></pre>

<p>Both of the <code>em</code> elements would be selected.</p>

<h3 id="adjacent">Adjacent sibling selectors</h3>

<p>These selectors allow you to select a specific element that comes directly after another specific element, on the same level in the element hierarchy. For example, if you wanted to select all <code>p</code> elements that come immediately after <code>h2</code> elements, but no other <code>p</code> elements, you could use the following rule:</p>

<pre><code>h2 + p {

 ...

}</code></pre>

<p class="note">Adjacent sibling selectors are not supported in IE 6 or below.</p>


<h3 id="pseudoclasses">Pseudo-classes</h3>

<p>Pseudo-classes are used to provide styles not for elements, but for various states of elements. The most common usage you’ll come across is styling link states, so I’ll look at these first. The following list gives you the different pseudo-classes, and a description of the link state they select:</p> 

<ul>
<li><code>:link</code>—the normal, default state of links, just as you first found them.</li>
<li><code>:visited</code>—links that you have already visited in the browser you are currently using.</li>
<li><code>:focus</code>—links (or form fields, or anything else) that currently have the keyboard cursor within them.</li>
<li><code>:hover</code>—links that are currently being hovered over by the mouse pointer.</li>
<li><code>:active</code>—a link that is currently being clicked on.</li>
</ul>

<p>The following CSS rules make it so that by default, links are blue (the default in most browsers anyway). When hovered over, the default link underline disappears. We want the same effect when the link is focussed via the keyboard, so we duplicate the <code>:hover </code> rule with <code>:focus </code> . When a link has already been visited, it turns grey. Finally, when a link is active, it is bolded, as an extra clue that something is about to happen.</p>

<pre><code>a:link {

 color: blue;

}

a:visited {

 color: gray;

}

a:hover, a:focus {

text-decoration: none;

}

a:active {

 font-weight: bold;

}</code></pre>

<p class="note">Take care if you don&#39;t specify these rules in  the same order as they are shown in above, otherwise they might not work as you expect. This is due to the way specificity causes later rules in the stylesheet to override earlier rules. You’ll <a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/">learn more about specificity in the next article</a>.</p>

<p>The <code>:focus</code>  pseudo-class is also  useful as a usability aid in forms. For example, you can highlight the input field that has the active blinking cursor inside it with a rule like this:</p>

<pre><code>input:focus  {

 border: 2px solid black;
 background color: lightgray;
 
}</code></pre>



<p>Next, I’ll have a look at <code>:first-child</code>—this pseudo-class selects any instance of the element that is the first child element of its parent, so for example, the following rule selects the first list item (bulleted or numbered) in any list and makes its text bold:</p>

<pre><code>li:first-child {

 font-weight: bold;
 
}</code></pre>

<p>Lastly, I’ll briefly mention the <code>:lang</code>  pseudo-class, which selects elements whose languages have been set to the specified language using the <code>lang</code> attribute. For example, the following element:</p>

<pre><code>&lt;p lang=&quot;en-US&quot;&gt;A paragraph of American text, gee whiz!&lt;p&gt;</code></pre>

<p>Could be selected using the following:</p>

<pre><code>p:lang((en-US) {

 ...
 
}</code></pre>

<h3 id="pseudoelements">Pseudo-elements</h3>

<p>Pseudo elements have two purposes. First of all, you can use them to select the first letter or first line of text inside a given element. To create a drop cap easily at the start of every paragraph of your document, you could use the following rule:</p>

<pre><code>p:first-letter {

  font-weight: bold;
  font-size: 300%
  background-color: red;

}</code></pre>

<p>the first letter of every paragraph will now be bolded, 300% bigger than the rest of the paragraph, and have a red background.</p>

<p>To make the first line of every paragraph bold, you could use the following rule:</p>

<pre><code>p:first-line {

  font-weight: bold;
  
}</code></pre>

<p>The second use of pseudo-elements is generating content via CSS, which is more complicated. You can use the <code>:before</code>  or <code>:after</code>  pseudo-elements to specify that content should be inserted before or after the element you are selecting. You then specify <em>what it is</em> that you want to insert. As a simple example, you can use the following rule to insert a decorative images after every link on the page:</p>

<pre><code>a:after {

  content: &quot; &quot; url(flower.gif);

}</code></pre>

<p>You can also use the <code>attr()</code> function to insert the values of attributes of the elements after the element. For example, you could insert the target of every link in your document in brackets after them using the following:</p>

<pre><code>a:after {

  content: &quot;(&quot; attr(href) &quot;)&quot;;

}</code></pre>

<p>Rules like this are great for  print stylesheets, which are stylesheets you can write and which are automatically applied when a user prints a page. The advantage for the user is that you can hide all the navigation that a user can&#39;t follow in a printout, and use the technique above so  the reader can see the URLs referenced on a page.</p>

<p>You can also insert incremented numerical values after repeating elements (such as bullets or paragraphs) using the <code>counter()</code> function—this is explained in much more detail in the <a href="http://dev.opera.com/articles/view/automatic-numbering-with-css-counters/">dev.opera.com article on CSS counters</a>.</p>

<p class="note">These selectors are not supported in IE 6 or below. Also note that you shouldn&#39;t insert important information with CSS, or that content will be unavailable to assistive technologies or if a user chooses not to use your stylesheet. The golden rule is that CSS is for styling; HTML is for important content. </p>

<h2 id="shorthand">CSS shorthand</h2>

<p>Another thing you’ll come across regularly in this course is CSS shorthand. It is possible to combine several related CSS properties together into one property to save time and effort on your part. In this section I will look at the available types of shorthand.</p>

<p class="note">I’ve already used shorthand in this section without mentioning it. The <code>border: 2px solid black;</code> rule is shorthand for separately specifying <code>border-width: 2px;</code>, <code>border-style: solid;</code> and <code>border-color: black;</code>.</p>

<h3 id="comparingvalues">Comparing individual and shorthand values</h3>

<p>Consider the following margin rule (padding and border shorthand works in the same way):</p>

<pre>div.foo {
  margin-top: 1em;
  margin-right: 1.5em;
  margin-bottom: 2em;
  margin-left: 2.5em;
}</pre>

<p>Such a rule could also be written as:</p>

<pre>div.foo {
	margin: 1em 1.5em 2em 2.5em;
}</pre>

<h3 id="lessthanfourvalues">Providing less than four values for a shorthand property</h3>

<p>A shorthand value can take less than four values according to the list below. The results are ordered by the number of values provided:</p>
<ol>
	<li>Same value applied to all four sides, for example <code>margin: 2px;</code></li>
	<li>First value applied to the top and bottom, second to the left and right, for example <code>margin: 2px 5px;</code>.</li>
	<li>First and third values applied to the top and bottom respectively, second value applied to the left and right, for example <code>margin: 2px 5px 1px;</code>.</li>
	<li>Values applied to the top, right, bottom, and left respective to CSS source order, as seen above.</li>
</ol>
<p>Generally, the wisest course is to provide all four values to shorthand  properties, for reasons of legibility.  This advice also applies to the <code>padding</code> shorthand property.</p>

<h3 id="singlepropertyorshorthandvalue">Making the choice to use a single property or a shorthand value</h3>

<p>Shorthand <code>margin</code> and <code>padding</code> properties tend to get the greatest share of use, though there are situations in which the shorthand properties are best avoided, or at least considered carefully, such as the following:</p>
<ul>
	<li><strong>Only a single margin needs to be set.</strong> In a situation where only one property needs to be set, the act of simultaneously setting multiple properties usually violates the KISS (Keep It Simple, Stupid) Principle, explained in the Glossary.</li>
	<li><strong>The selector to which your properties apply is subject to many edge cases.</strong> When this happens&#x2014;which it will, sooner or later&#x2014;the inevitable heap of shorthand values can become hard to follow when it comes time to repair or alter your layout.</li>
	<li><strong>The stylesheet you&#x2019;re writing will be maintained by people whose skills (or spatial reasoning ability) are deficient.</strong> If you can count on them to read this article you may not need to worry about this scenario, but it&#x2019;s best not to make any assumptions.</li>
	<li><strong>You need to supplant a value, to account for an edge case.</strong> While this requirement is often a signal of a poorly designed document or stylesheet&#x2026; those are hardly unheard of, either.</li>
</ul>

<h3 id="shorthandreference">Shorthand reference</h3>

<ol>
<li><p>Border shorthand for different properties: Already explained at the very start of this section. One extra point to mention is that you can even set border properties values just for a single border of the element it is applied to like so:</p>

<pre><code>border-left-width: 2px;
border-left-style: solid;
border-left-color: black;</code></pre></li>

<li>
<p>Margin, padding and border shorthand for same properties: These all act in the same way; shown as seen above in the  <a href="#comparingvalues">Comparing individual and shorthand values</a> section.</p>
</li>

<li><p>Font shorthand: You can specify the font size, weight, style, family and line height using one line shorthand. For example, consider the following CSS:</p>

<pre><code>font-size: 1.5em;
line-height: 200%;
font-weight: bold;
font-style: italic;
font-family: Georgia, &quot;Times New Roman&quot;, serif;</code></pre>

<p>You could specify all of this using the following line:</p>

<pre><code>font: 1.5em/200% bold italic Georgia,&quot;Times New Roman&quot;,serif;</code></pre>
</li>
<li><p>Background shorthand: you can specify background colour, background image, image repeat and image position with one line of CSS. Take the following:</p>

<pre><code>background-color: #000;
background-image: url(image.gif);
background-repeat: no-repeat;
background-position: top left;</code></pre>

<p>This can all be represented using the following shorthand:</p>

<pre><code>background: #000 url(image.gif) no-repeat top left;</code></pre>
</li>

<li>
<p>List shorthand: Again, a similar story with list properties allows you to put the property values for list bullet type, position and image on a single line. Take the following CSS:</p>

<pre><code>list-style-type: circle;
list-style-position: inside;
list-style-image: url(bullet.gif);</code></pre>

<p>This is the equivalent of:</p>

<pre><code>list-style: circle inside url(bullet.gif);</code></pre>
</li>
</ol>

<p class="note">Note that <code>#000</code> is a shorthand hexidecimal colour value; it is equivalent to the longhand #000000, seen earlier on. Let&#39;s look at a more complicated example too; #6c9 is the same as #66cc99.</p>

<h2 id="applyingcsstohtml">Applying CSS to HTML</h2>
<p>There are three ways to apply CSS to an HTML document: inline styles, embedded styles and external style sheets. Unless you have a very good reason to use one of the first two always go for the third option. The reason for this will become obvious to you soon, but first review the different options.</p>

<h3 id="inline">Inline styles</h3>
<p>You can apply styles to an element using a <code>style</code> attribute, like so:</p>

<pre><code>&lt;p style=&quot;background:blue; color:white; padding:5px;&quot;&gt;Paragraph&lt;/p&gt;</code></pre>

<p>Inside this attribute you list all the CSS properties and their values (each property/value pair is separated from the others by a semi-colon, and each property is separated from its value within each pair by a colon.) This is how you define styles in CSS. <a class="codeexample" href="example-inline.html">Try viewing the source of this example</a> (right/Ctrl + click &gt; Source in Opera).</p> 

<p>If you open this example in a browser you will see that the paragraph with the <code>style</code> attribute is blue with white text and has a different size to the others, as shown in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/148-27-css-basics/cssbasics-figure1.png" alt="Screenshot of the Opera browser showing an applied inline style sheet" /></p>
<p class="comment">Figure 1: Opera shows the paragraph with the applied inline styles differently to the others.</p>

<p>The benefit of inline styles is that the browser will be forced to use these settings. Any other styles defined in other style sheets or even embedded in the <code>head</code> of the document will be overridden by these styles.</p>

<p>The big problem of inline styles is that they make maintenance a lot harder than it should be. Using CSS is all about separating the presentation of the document from the structure, but inline styles are doing just that—scattering presentation rules throughout the document.</p>

<p>In addition to the maintenance issue you don’t take advantage of the most powerful part of CSS: the cascade. We’ll come back to the cascade in detail in the next article, but for now all you need to know is that using the cascade means you define a look and feel in one place and the browser applies it to all the elements that match a certain rule.</p>

<h3 id="embedded">Embedded styles</h3>

<p>Embedded styles are placed in the <code>head</code> of the document inside a <code>style</code> element, <a class="codeexample" href="example-embedded.html">as in this example</a>:</p>

<pre><code>&lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
  p {
    color:white;
    background:blue; 
    padding:5px;
  }
&lt;/style&gt;</code></pre>

<p>If you open the above link in a browser you’ll see that the defined styles get applied to all the paragraphs in the document, as shown in Figure 2. Also try looking at the example page’s source to see the CSS inside the <code>head</code>.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/148-27-css-basics/cssbasics-figure2.png" alt="Screenshot of the Opera browser showing how an embedded style sheet affects a lot of elements" /></p>
<p class="comment">Figure 2: Opera shows all paragraphs with the styles defined in the embedded style sheet.</p>  
  
<p>The benefit with embedded styles is that you don’t need to add a <code>style</code> attribute to each paragraph—you can style them all with one single definition. This also means that if you need to change the look and feel of all paragraphs, you can do it in one single location, however this is still limited to one document—what if you want to define the look of paragraphs for a whole site in one go? Enter external style sheets.</p>

<h3 id="external">External style sheets</h3>

<p>External style sheets means putting all your CSS definitions in their own file, saving it with a file extension of CSS, and then applying it to your HTML documents using a <code>link</code> element inside the document <code>head</code>. View source of our <a class="codeexample" href="example-external.html">example page</a>, and note that the <code>head</code> contains a  <code>link</code> element that references this <a class="codeexample" href="styles.css">external CSS file</a>, and verify that the styles defined in the external CSS file are applied to the HTML. Let’s have a closer look at that <code>link</code> element:</p>

<pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; type=&quot;text/css&quot; media=&quot;screen&quot;&gt;</pre>

<p>We’ve talked about the <code>link</code> element before in this course. Just to recap: the <code>href</code> attribute points to the CSS file, the <code>media</code> attribute defines which media should get these styles applied to it (<code>screen</code> in this case as we don’t want a printout to look like this) and the <code>type</code> defines what the linked resource is (a file extension is not enough to determine that).</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/148-27-css-basics/cssbasics-figure3.png" alt="Screenshot of the Opera browser showing how an external style sheet affects a lot of elements" /></p>
<p class="comment">Figure 3: Opera sh/codeh3 id=ows the styles defined in the external style sheet when it is linked with a link element.</p>  

<p>This is the best of all worlds: you keep your look and feel definitions all in one single file, which means that you can make site-wide changes by changing one file, and the browser can load that once and then cache it for all other documents that reference it, meaning less to download.</p>

<h3 id="import">@importing stylesheets</h3>

<p>There is actually another way to import external style sheets into HTML files - the <code>@import</code> property. This is inserted into an embedded style sheet, in the same way as the embedded CSS shown above. The syntax looks as follows:</p>

<pre><code>&lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
  @import url(&quot;styles.css&quot;);

  ...other import statements or CSS styles could go here...
   
&lt;/style&gt;</code></pre>

<p>You&#39;ll sometimes see import statements without the brackets, but it does the same thing. Another thing to be aware of is that <code>@import</code> should always be first in an embedded style sheet. Finally, you can specify that the imported style sheet be applied only to certain types of media by including the media type at the end of the import statement (this works in every browser except IE6 and below). The following does the same thing as the previous code example:</p>

<pre><code>&lt;style type=&quot;text/css&quot;&gt;
  @import url(&quot;styles.css&quot;) screen;

  ...other import statements or CSS styles could go here...
   
&lt;/style&gt;</code></pre>


<p>The first question you&#39;ll be asking is &quot;why on earth do I need another way to apply external style sheets to my HTML documents?&quot; Well, you don&#39;t really - I am mainly including information on <code>@import</code> here for the sake of completeness. There are a few minor advantages/disadvantages of using <code>@import</code> over <code>link</code> elements, but they are <em>very minor</em>, so it&#39;s really up to you which way you go. <code>link</code> elements are the recognised best way to do things these days.</p>

<ul>
<li>Older browsers don&#39;t recognise <code>@import</code> at all, so completely ignore it (Netscape 4 and older, and IE 4 and older if you omit the brackets from around the filename). You can therefore use an <code>@import</code> statement to hide styles from old buggy browsers that would use them incorrectly. You could put your up-to-date styles in an external stylesheet and import them with <code>@import</code>, then provide some really basic styles that will not cause IE/Netscape 4 to choke in the embedded stylesheet. This is useful, but you&#39;ll very rarely need to ensure IE/Netscape 4 compatibility these days!</li>
<li>As mentioned before, IE6 doesn&#39;t support putting the media type at the end of the <code>@import</code> line, so they are not a good way to go if you want to insert multiple stylesheets for different media.</li>
<li>You could argue that the code for multiple <code>@import</code> statements is smaller than the code for multiple <code>link</code> elements, but this is pretty negligible.</li>
</ul>

<h2 id="summary">Summary</h2>

<p>In this tutorial you learnt about applying CSS to HTML documents, either as inline styles using <code>style</code> attributes, embedded styles in a <code>style</code> element in the document <code>head</code> or as external files in their own document. You also learnt that the latter—linking an external style sheet using a <code>link</code> element—makes the most sense in terms of maintenance and caching. We then talked about the basic syntax of CSS and explained comments, different selector types, and grouping of selectors.</p>

<p>In the next tutorial we’ll go deeper into the details of CSS, covering the cascade and specificity of selectors in detail.</p>

<h2 id="exercises">Exercise Questions</h2>
<ul>
  <li>What are the benefits and problems of inline styles and how do you apply them to an element?</li>
  <li>What is a style rule? Describe the different components and syntax.</li>
  <li>Say you have a bunch of style rules, what do you need to do to make them into an external style sheet?</li>
  <li>What does the following CSS selector match: <code>ul#nav{}</code>?</li>
  <li>What is the benefit of grouping selectors?</li>
  <li>How can you define a print style sheet?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/26-accessibility-testing/" rev="prev" title="link to the previous article in the series">Previous article—Accessibility testing</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/" rel="next" title="link to the next article in the series">Next article—Inheritance and cascade</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/148-27-css-basics/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />

<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>li
