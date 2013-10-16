Title: Inheritance and Cascade
----
Date: 2008-09-26 06:31:48
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
<li class="prev"><a href="http://dev.opera.com/articles/view/27-css-basics/" rev="prev" title="link to the previous article in the series">Previous article—CSS basics</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/29-text-styling-with-css/" rel="next" title="link to the next article in the series">Next article—Text styling with CSS</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>Inheritance and the cascade are two fundamental concepts in <abbr>CSS</abbr>.
Everyone who uses <abbr>CSS</abbr> needs to understand them.
Fortunately, they aren’t very difficult to grasp, although some of the details may be a bit hard to remember.</p>

<p>The two concepts are closely related, yet different. Inheritance is associated with how the elements in the <abbr>HTML</abbr> markup inherit properties
from their parent (containing) elements and pass them on to their children, while the cascade has to do with the
<abbr>CSS</abbr> declarations being applied to a document, and how conflicting rules do or don’t override each other.</p>

<p>I will look closely at both concepts in this article. Inheritance is probably an easier concept to grasp, so I’ll start with that, then progress to the intricacies of the cascade. <a href="inheritance_cascade_code.zip">Download the source code for the examples</a> in this article; the zip contains the finished CSS and HTML, as well as the initial HTML template for you to work with as you go through the examples.</p>

<p>The contents of this article are as follows:</p>

<ul>

<li><a href="#inheritance">Inheritance</a>
<ul>
<li><a href="#inheritanceuseful">Why inheritance is useful</a></li>
<li><a href="#howinheritanceworks">How inheritance works</a></li>
<li><a href="#inheritanceexample">An example of inheritance</a></li>
<li><a href="#forcinginheritance">Forcing inheritance</a></li>
</ul>
</li>

<li><a href="#thecascade">The cascade</a>
<ul>
<li><a href="#importance">Importance</a></li>
<li><a href="#specificity">Specificity</a></li>
<li><a href="#sourceorder">Source order</a></li>
</ul>
</li>

<li><a href="#summary">summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>

</ul>

<h2 id="inheritance">Inheritance</h2>

<p><dfn>Inheritance</dfn> in <abbr>CSS</abbr> is the mechanism through which certain properties are passed on from a parent element down to its children. It’s quite similar to inheritance in genetics, really.
If the parents have blue eyes, their children will probably have blue eyes, too.</p>

<p>Not all <abbr>CSS</abbr> properties are inherited, because it doesn’t make sense for some of them to be.
For instance, margins are not inherited, since it’s unlikely that a child element should need the same margins as its parent.
In most cases common sense will tell you which properties are inherited and which aren’t, but to be really sure
you need to look up each property in the <a href="http://www.w3.org/TR/CSS21/propidx.html">CSS 2.1 specification property summary table</a>.</p>

<h3 id="inheritanceuseful">Why inheritance is useful</h3>

<p>Why does <abbr>CSS</abbr> have an inheritance mechanism then?
The easiest way to answer that is probably to consider what it’d be like if there was no such thing as inheritance.
You would have to specify things like font family, font size and text colour individually—for every single element type.</p>

<p>Using inheritance, you can for example specify the font properties for the <code>html</code> or <code>body</code> elements and
they will be inherited by all other elements.
You can specify background and foreground colours for a specific container element and the foreground colour will
automatically be inherited by any child elements in that container.
The background colour isn’t inherited, but the initial value for <code>background-color</code> is
<code>transparent</code>, which means the parent’s background will shine through.
The effect is similar to what you’d get if the background colour were inherited, but consider what would happen if background <em>images</em> were inherited!
Every child would have the same background image as its parent and the result would look like a jigsaw puzzle put together by someone with a serious drug problem, since the background would “start over” for each element.</p>

<h3 id="howinheritanceworks">How inheritance works</h3>

<p>Every element in an <abbr>HTML</abbr> document will inherit all inheritable properties from its parent <em>except</em> the root element (<code>html</code>), which doesn’t have a parent.</p>

<p>Whether or not the inherited properties will have any effect depends on other things, as you shall see later on
when I talk about the cascade. Just as a blue-eyed mother can have a brown-eyed child if the father has brown eyes,
inherited properties in <abbr>CSS</abbr> can be overridden.</p>

<h3 id="inheritanceexample">An example of inheritance</h3>

<ol>
<li>
<p>Copy the following <abbr>HTML</abbr> document into a new file in your favourite text editor and save it as <kbd>inherit.html</kbd>.</p>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
    &lt;title&gt;Inheritance&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Heading&lt;/h1&gt;
    &lt;p&gt;A paragraph of text.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>If you open the document in your web browser you will see a rather boring document displayed according to your browser’s default styling.</p></li>
<li>
<p>Create a new empty file in your text editor, copy the <abbr>CSS</abbr> rule below into it, and save the file as <kbd>style.css</kbd> in the same location as the <abbr>HTML</abbr> file.</p>

<pre><code>html {
  font: 75% Verdana,sans-serif;
}</code></pre>
</li>
<li>
<p>Link the style sheet to your <abbr>HTML</abbr> document by inserting the following line before the
<code>&lt;/head&gt;</code> tag.</p>

<pre><code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt;</code></pre>
</li>
<li>
<p>Save the modified <abbr>HTML</abbr> file and reload the document in your browser.
The font will change from the browser’s default (often Times or Times New Roman) to Verdana.
If you don’t have Verdana installed on your computer, the text will be displayed in the default sans serif font specified in your browser settings.</p>

<p>The text will also become smaller; only three quarters of what it was in the unstyled version.</p>

<p>The <abbr>CSS</abbr> rule we specified applies only to the <code>html</code> element. We didn’t specify any rules for headings or paragraphs, yet all the text now displays in Verdana at 75% of the default size. Why? Because of inheritance.</p>

<p>The <code>font</code> property is a shorthand property that sets a whole number of font-related properties.
We’ve only specified two of them—the font size and the font family—but that rule is equivalent to the following:</p>

<pre><code>html {
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-size: 75%;
  line-height: normal;
  font-family: Verdana,sans-serif;
}</code></pre>

<p>All of those properties are inherited, so the <code>body</code> element will inherit them from the
<code>html</code> element and then pass them on to its children—the heading and the paragraph.</p>

<p>But wait a second! There’s something fishy going on with the inheritance of font size, isn’t there?
The <code>html</code> element’s font size is set to 75%, but 75% of <em>what</em>?
And shouldn’t the font size of the <code>body</code> be 75% of its parent’s font size, and the font
sizes of the heading and the paragraph should be 75% of that of the <code>body</code> element, surely?</p>

<p>The value that is inherited is not the <dfn>specified value</dfn>—the value we write in our style sheet—but something called the <dfn>computed value</dfn>.
The computed value is, in the case of font size, an absolute value measured in pixels.
For the <code>html</code> element, which doesn’t have a parent element from which to inherit, a percentage
value for font size relates to the default font size set in the browser.
Most contemporary browsers have a default font size setting of 16px.
75% of 16 is 12, so the computed value for the font size of the <code>html</code> element will probably be 12px.
And <em>that</em> is the value that is inherited by <code>body</code> and passed on to the heading and the paragraph.</p>

<p>(The font size of the heading is larger, because the browser applies some built-in styling of its own. See the discussion about the cascade, below.)</p>
</li>
<li>
<p>Add two more declarations to the rule in your <abbr>CSS</abbr> style sheet:</p>

<pre><code>html {
  font: 75% Verdana,sans-serif;
  <strong>background-color: blue;
  color: white;</strong>
}</code></pre>
</li>
<li>
<p>Save the <abbr>CSS</abbr> file and reload the document in your browser.</p>
<p>Now the background is bright blue and all the text is white.
The rule applies to the <code>html</code> element—the whole document—whose background will be blue.
The white foreground colour is inherited by the <code>body</code> element and passed on to all children of
<code>body</code>—in this case the heading and the paragraph. They don’t inherit the background but it will default to <code>transparent</code>, so the net visual result will be white text on a blue background.</p>
</li>
<li>
<p>Add another new rule to the style sheet, and save and reload the document:</p>

<pre><code>h1 {
  font-size: 300%;
}</code></pre>

<p>This rule sets the font size for the heading. The percentage is applied to the inherited font size—75% of the browser default, which we have assumed to be 12px—so the heading size will be 300% of 12px, or 36px.</p>
</li>
</ol>

<h3 id="forcinginheritance">Forcing inheritance</h3>

<p>You can force inheritance—even for properties that aren’t inherited by default—by using the <code>inherit</code> keyword. This should be used with care, however, since Microsoft Internet Explorer (up to and including version 7) doesn’t support this keyword.</p>

<p>The following rule will make all paragraphs inherit all background properties from their parents:</p>

<pre><code>p {
  background: inherit;
}</code></pre>

<p>With shorthand properties you can use <code>inherit</code> <em>instead of</em> the normal values. You have to use shorthand for everything or nothing—in longhand you can’t specify some values and use <code>inherit</code> for others, because the values can be given in any order and there is no way to specify <em>which</em> values we want to inherit.</p>

<p>Forcing inheritance isn’t something you need to do every day. It can be useful to “undo” a declaration in a conflicting rule, or to avoid hardcoding certain values. As an example, consider a typical navigation menu:</p>

<pre><code>&lt;ul id=&quot;nav&quot;&gt;
  &lt;li&gt;&lt;a href=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;/news/&quot;&gt;News&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;/products/&quot;&gt;Products&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;/services/&quot;&gt;Services&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;/about/&quot;&gt;About Us&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<p>To display this list of links as a horizontal menu, you could use the following <abbr>CSS</abbr>:</p>

<pre><code>#nav {
  background: blue;
  color: white;
  margin: 0;
  padding: 0;
}

#nav li {
  display: inline;
  margin: 0;
  padding: 0 0.5em;
  border-right: 1px solid;
}

#nav li a {
  color: inherit;
  text-decoration: none;
}</code></pre>

<p>Here the background colour of the whole list is set to blue in the rule for <code>#nav</code>. This also sets the foreground colour to white, and this is inherited by each list item and each link. The rule for the list items sets a right border, but doesn’t specify the border colour, which means it will use the inherited foreground colour (white). For the links we’ve used <code>color:inherit </code>  to force inheritance and override the browser&#39;s default link colour.</p>

<p>Of course I could just as well have specified the border colour as white and the links’ text colour as white, but the beauty of letting inheritance do the job is that you now have only one place to change the colours if you decide to go with another colour scheme.</p>

<h2 id="thecascade">The cascade</h2>

<p><abbr>CSS</abbr> means Cascading Style Sheets, so it shouldn’t come as a surprise that the <dfn>cascade</dfn> is an important concept.
It’s the mechanism that controls the end result when multiple, conflicting <abbr>CSS</abbr> declarations apply to the same element.
There are three main concepts that control the order in which <abbr>CSS</abbr> declarations are applied:</p>

<ol>
	<li>Importance</li>
	<li>Specificity</li>
	<li>Source order</li>
</ol>

<p>I will look into these concepts below, one by one.</p>

<p>Importance is most … er … important. If two declarations have the same importance, the specificity of the rules decides which one will apply. If the rules have the same specificity, then source order controls the outcome.</p>

<h3 id="importance">Importance</h3>

<p>The <dfn>importance</dfn> of a <abbr>CSS</abbr> declaration depends on <em>where</em> it is specified. The conflicting declarations will be applied in the following order; later ones will override earlier ones:</p>

<ol>
	<li>User agent style sheets</li>
        <li>Normal declarations in user style sheets</li>
        <li>Normal declarations in author style sheets</li>
	<li>Important declarations in author style sheets</li>
	<li>Important declarations in user style sheets</li>
</ol>

<p>A <dfn>user agent style sheet</dfn> is the built-in style sheet of the browser.
Every browser has its default rules for how to display various <abbr>HTML</abbr> elements if no style is specified by the user or designer of the page. For instance, unvisited links are usually blue and underlined.</p>

<p>A <dfn>user style sheet</dfn> is a style sheet that the <em>user</em> has specified. Not all browsers support user style sheets, but they can be very useful, especially for users with certain types of disabilities.
For instance, a dyslexic person can have a user style sheet that specifies certain fonts and colours that help reading.</p>

<p>Opera allows you to specify user stylesheets by going to <samp>Tools</samp> (or the <samp>Opera</samp> menu on the Mac) &gt; <samp>Preferences…</samp> &gt; <samp>Advanced</samp> tab &gt; <samp>Content</samp>, clicking on the <samp>Style Options…</samp> button, then pointing to your user style sheet in the <samp>My style sheet</samp> text field inside the <samp>Display</samp> tab of this dialog box.
You can also specify if you want the user style sheet to override the author (web designer’s) stylesheet in the
<samp>Presentation</samp> tab, and even add a button into the user interface that allows you to switch between the user and author style sheet.
To do this, OK out of the <samp>Preferences…</samp> menu completely, then right- or <kbd>Ctrl</kbd>-click somewhere on the Opera browser interface, select
<samp>Customize…</samp> &gt; <samp>Buttons</samp> tab &gt; <samp>Browser</samp> view, and drag the <samp>Author Mode</samp> button somewhere on to one of your toolbars.</p>

<p>An <dfn>author style sheet</dfn> is what we normally refer to when we say “style sheet”. It’s the style sheet that the author of the document (or, more likely, the site’s designer) has written and linked to (or included).</p>

<p><dfn>Normal declarations</dfn> are just that: normal declarations.
The opposite is <dfn>important declarations</dfn>, which are declarations followed by an <code>!important</code> directive.</p>

<p>As you can see, important declarations in a user style sheet will trump everything else, which is logical.
That dyslexic user might, for instance, want all text to be displayed in Comic Sans MS if he finds that font
easier to read. He could then have a user style sheet containing the following rule:</p>

<pre><code>* {
  font-family: &quot;Comic Sans MS&quot; !important;
}</code></pre>

<p>In  this case, no matter what the designer specified, and no matter what the browser’s default font family is set to, everything will be displayed in Comic Sans MS.</p>

<p>The default browser rendering will only apply if those declarations aren’t overridden by any rules in a user style sheet or an author style sheet, since the user agent style sheet has the lowest precedence.</p>

<p>To be honest, most designers don’t have to think too much about importance, since there’s nothing we can do about it. There is no way we could know if a user has a user style sheet defined that will override our <abbr>CSS</abbr>. If they do, they probably have a very good reason for doing so, anyway. Still, it’s good to know what importance is and how it may affect the presentation of our documents.</p>

<h3 id="specificity">Specificity</h3>

<p><dfn>Specificity</dfn> is something every <abbr>CSS</abbr> author needs to understand and to think about.
It can be thought of as a measure of how specific a rule’s selector is.
A selector with low specificity may match many elements (like <code>*</code> which matches every element in the
document), while a selector with high specificity might only match a single element on a page (like
<code>#nav</code> that only matches the element with an <code>id</code> of <code>nav</code>).</p>

<p>The specificity of a selector can easily be calculated, as we shall soon see.
If two or more declarations conflict for a given element, and all the declarations have the same importance, then the one in the rule with the most specific selector will “win”.</p>

<p>Specificity has four components; let’s call them a, b, c and d. Component “a” is the most distinguishing, “d” the least.</p>

<p>Component “a” is quite simple: it’s 1 for a declaration in a <code>style</code> attribute, otherwise it’s 0.</p>

<p>Component “b” is the number of <code>id</code> selectors in the selector (those that begin with a <code>#</code>).</p>

<p>Component “c” is the number of attribute selectors—including class selectors—and pseudo-classes.</p>

<p>Component “d” is the number of element types and pseudo-elements in the selector.</p>

<p>After a bit of counting, we can thus string those four components together to get the specificity for any rule.
<abbr>CSS</abbr> declarations in a <code>style</code> attribute don’t have a selector, so their specificity is always 1,0,0,0.</p>

<p>Let’s look at a few examples—after this it should be quite clear how this works.</p>

<table>
	<thead>
		<tr><th>Selector</th> <th>a</th> <th>b</th> <th>c</th> <th>d</th> <th>Specificity</th></tr>
	</thead>
	<tbody>
		<tr><td><code>h1</code></td> <td>0</td> <td>0</td> <td>0</td> <td>1</td> <td>0,0,0,1</td></tr>
		<tr><td><code>.foo</code></td> <td>0</td> <td>0</td> <td>1</td> <td>0</td> <td>0,0,1,0</td></tr>
		<tr><td><code>#bar</code></td> <td>0</td> <td>1</td> <td>0</td> <td>0</td> <td>0,1,0,0</td></tr>
		<tr><td><code>html&gt;head+body ul#nav *.home a:link</code> </td> <td>0</td> <td>1</td> <td>2</td> <td>5</td> <td>0,1,2,5</td></tr>
	</tbody>
</table>

<p>Let’s look at the last example in some more detail. You get a=0 since it’s a selector, not a declaration in a <code>style</code> attribute.
There is one ID selector (<code>#nav</code>), so b=1.
There is one attribute selector (<code>.home</code>) and one pseudo-class (<code>:link </code> ), so c=2.
There are five element types (<code>html</code>, <code>head</code>, <code>body</code>, <code>ul</code> and <code>a</code>), so d=5.
The final specificity is thus 0,1,2,5.</p>

<p>It’s worth noting that combinators (like <code>&gt;</code>, <code>+</code> and the white space) do not affect a selector’s specificity. The universal selector (<code>*</code>) has no input on specificity, either.</p>

<p>Also worth noting is that there is a huge difference in specificity between an <code>id</code> selector and an attribute selector that happens to refer to an <code>id</code> attribute. Although they match the same element, they have very different specificities. The specificity of <code>#nav</code> is 0,1,0,0 while the specificity of <code>[id=&quot;nav&quot;]</code> is only 0,0,1,0.</p>

<p>Let’s look at how this works in practice.</p>
<ol>
	<li>
	<p>Start by adding another paragraph to your <abbr>HTML</abbr> document.</p>

<pre><code>&lt;body&gt;
  &lt;h1&gt;Heading&lt;/h1&gt;
  &lt;p&gt;A paragraph of text.&lt;/p&gt;
  <strong>&lt;p&gt;A second paragraph of text.&lt;/p&gt;</strong>
&lt;/body&gt;</code></pre>
</li>
<li>
	<p>Add a rule to your style sheet to make text in paragraphs have a different colour:</p>

<pre><code>p {
  color: cyan;
}</code></pre>
</li>
<li>
<p>Save both files and reload the document in your browser, and there should now be two paragraphs with cyan text.</p>
</li>
<li>
<p>Set an <code>id</code> on the first paragraph, so you can target it easily with a <abbr>CSS</abbr> selector.</p>

<pre><code>&lt;body&gt;
  &lt;h1&gt;Heading&lt;/h1&gt;
  &lt;p <strong>id=&quot;special&quot;</strong>&gt;A paragraph of text.&lt;/p&gt;
  &lt;p&gt;A second paragraph of text.&lt;/p&gt;
&lt;/body&gt;</code></pre>
</li>
<li>
<p>Add a rule for the special paragraph in your style sheet:</p>

<pre><code>#special {
  background-color: red;
  color: yellow;
}</code></pre>
</li>
<li>
<p>Save both files and reload the document in your browser to see the now rather colourful result.</p>
</li>
</ol>
<p>Let’s look at the declarations that apply to your two paragraphs.</p>

<p>The first rule you added sets <code>color:cyan </code>  for <em>all</em> paragraphs.
The second rule sets a red background colour and sets <code>color:yellow </code>  for the single element that has the
<code>id</code> of <code>special</code>. Your first paragraph matches both of those rules; it is a paragraph and it has the <code>id</code> of <code>special</code>.</p>

<p>The red background isn’t a problem, because it’s only specified for <code>#special</code>.
Both rules contain a declaration of the <code>color</code> property, though, which means there is a conflict.
Both rules have the same importance—they are normal declarations in the author style sheet—so you have to look at the specificity of the two selectors.</p>

<p>The selector of the first rule is <code>p</code>, which has a specificity of 0,0,0,1 according to the rules above since it contains a single element type.
The selector of the second rule is <code>#special</code>, which has a specificity of 0,1,0,0 since it consists of an
<code>id</code> selector. 0,1,0,0 is much more specific than 0,0,0,1 so the <code>color:yellow</code>  declaration wins and you get yellow text on a red background.</p>

<h3 id="sourceorder">Source order</h3>

<p>If two declarations affect the same element, have the same importance and the same specificity, the final distinguishing mark is the <dfn>source order</dfn>.
The declaration that appears later in the style sheets will “win” over those that come before it.</p>

<p>If you have a single, external style sheet, then the declarations at the end of the file will override those that occur earlier in the file if there’s a conflict.
The conflicting declarations could also occur in different style sheets.
In that case, the order in which the style sheets are linked, included or imported controls which declaration will be applied, so if you have two linked stylesheets in a document <code>head</code>, the one linked to last will override the one linked to first. Let’s look at a practical example of how this works.</p>
<ol>
<li>
<p>Add a new rule to your style sheet, at the very end of the file, like so:</p>

<pre><code>p {
  background-color: yellow;
  color: black;
}</code></pre>
</li>
<li>
<p>Save and reload the web page. you now have <em>two</em> rules that match all paragraphs. They have the same importance and the same specificity (since the selector is the same), therefore the final mechanism for disambiguating will be the source order.</p>
<p>The last rule specifies <code>color:black </code> and that will override <code>color:cyan </code> from the earlier rule.</p>
</li>
</ol>
<p>Note how the first paragraph isn’t affected at all by this new rule.
Although the new rule appears last, its selector has lower specificity than the one for <code>#special</code>. This shows clearly how specificity trumps source order.</p>

<h2 id="summary">Summary</h2>

<p>Inheritance and the cascade are fundamental concepts that every web designer needs to understand.</p>

<p>Inheritance lets us declare properties on high-level elements and allows those properties to trickle down to all descendant elements. Only some properties are inherited by default, but inheritance can be forced with the <code>inherit</code> keyword.</p>

<p>The cascade sorts out all conflicts when multiple declarations would affect a given element. Important declarations will override less important ones. Among declarations with equal importance, the rule’s specificity controls which one will apply.
And, all else being equal, the source order makes the final distinction.</p>

<h2 id="exercises">Exercise Questions</h2>

<ul>
	<li>Is the <code>width</code>  property inherited? Think about it first—would it make sense?—then look up the correct answer in the <a href="http://www.w3.org/TR/CSS21/">CSS specification</a>.</li>

	<li>If we add <code>!important</code> to the <code>color:black </code> declaration in the last rule in our
	<a href="inheritance_cascade_code.zip">example style sheet</a>, will this have any effect on the text colour in the first, “special” paragraph?</li>

	<li>Which selector is more specific, “<code>#special</code>” or “<code>html&gt;head+body&gt;h1+p</code>”?</li>

	<li>What should a user style sheet look like to make our test document display in black Comic Sans MS on a white
	background, regardless of the author style sheet?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/27-css-basics/" rev="prev" title="link to the previous article in the series">Previous article—CSS basics</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/29-text-styling-with-css/" rel="next" title="link to the next article in the series">Next article—Text styling with CSS</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<img src="http://forum-test.oslo.osa/kirby/content/articles/151-28-inheritance-and-cascade/tommyOlsson.jpg" alt="Picture of the article author Tommy Olsson" class="right" />

<p>Tommy Olsson is a pragmatic evangelist for web standards and accessibility, who lives in the outback of central Sweden. He wrote his first HTML document in 1993 and is currently the technical webmaster for a Swedish government agency.</p>

<p>He has written one book so far—The Ultimate CSS Reference (with Paul O’Brien)</p>
