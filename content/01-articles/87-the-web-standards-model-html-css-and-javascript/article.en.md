Title: The Web standards model - HTML, CSS and JavaScript
----
Date: 2008-07-08 07:08:45
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
<li class="prev"><a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work/" rel="prev" title="link to the previous article in the series">Previous article—How does the Internet work?</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/" rel="next" title="link to the next article in the series">Next article—Web standards—beautiful dream, but what’s the reality?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>In the last article, we touched briefly on the basic building blocks of the web—HTML (or XHTML), CSS and JavaScript.  Now it’s time for me to dig a little deeper and to look at each of these—what they do, and how the three interact with each other to create a web site. The contents of this article are as follows:</p>

<ul>
<li><a href="#whyseparate">Why separate?</a></li>

<li><a href="#markup">Markup, the basis of every page</a>
<ul><li><a href="#xhtml">What is XHTML?</a></li>
<li><a href="#validation">Validation, what’s that?</a></li></ul>
</li>

<li><a href="#css">CSS—let’s add some style</a></li>

<li><a href="#javascript">JavaScript—adding behaviour to web pages</a></li>

<li><a href="#example">An example page</a>
<ul><li><a href="#index">index.html</a></li>
<li><a href="#styles">styles.css</a></li></ul>
</li>

<li><a href="#summary">Summary</a></li>

<li><a href="#exercises">Exercise questions</a></li>

</ul>

<h2 id="whyseparate">Why separate?</h2>
<p>That’s usually the first question that gets asked about web standards.  You can accomplish content, styling and layout just using HTML—font elements for style and HTML tables for layout, so why should I bother with this XHTML/CSS stuff? Tables for layout, etc. is how it used to be done in the bad old days of web design, and many people still do it like this (although you really shouldn’t be), which is one of the reasons why we created this course in the first place. We won’t be covering such methods in this course. Here are the most compelling reasons for using CSS and HTML over outdated methods: </p>
<ol>
<li><strong>Efficiency of code</strong>:  The larger your files are, the longer they will take to download, and the more they will cost some people (some people still pay for downloads by the megabyte.) You therefore don’t want to waste your bandwidth on large pages cluttered up with styling and layout information in every HTML file. A much better alternative is to make the HTML files stripped down and neat, and include the styling and layout information just once in a separate CSS file. To see an actual case of this in action, check out <a href="http://www.alistapart.com/articles/slashdot/">the A List Apart Slashdot rewrite article</a>  where the author took a very popular web site and re-wrote it in XHTML/CSS. </li>
<li><strong>Ease of maintenance</strong>:  Following on from the last point, if your styling and layout information is only specified in one place, it means you only have to make updates in one place if you want to change your site’s appearance. Would you prefer to update this information on every page of your site? I didn’t think so. </li>
<li><strong>Accessibility</strong>: Web users who are visually impaired can use a piece of software known as a “screen reader” to access the information through sound rather than sight—it literally reads the page out to them. In addition voice input software, used by people with mobility impairments, also benefits from well constructed semantic web pages. Much like a screen reader user uses keyboard commands to navigate headings, links and forms, a voice input user will use voice commands. Web documents  marked up semantically rather than presentationally can be easier to navigate and the information in them is more likely to be found by the user.  In other words, the faster you “get to the point” (the content), the better.  Screen readers can’t access text locked away in images, and find some uses of JavaScript confusing.  Make sure that your critical content is available to everyone. </li>
<li><strong>Device compatibility</strong>:  Because your XHTML page is just plain markup, with no style information, it can be reformatted for different devices with vastly differing attributes (eg screen size) by simply applying an alternative style sheet—you can do this in a few different ways (look at the <a href="http://dev.opera.com/articles/mobile/">mobile articles on dev.opera.com</a> for resources on this).  CSS also natively allows you to specify different style sheets for different presentation methods/media types (eg viewing on the screen, printing out, viewing on a mobile device.) </li>
<li><strong>Web crawlers/search engines</strong>:  Chances are you will want your pages to be easy to find by searching on Google, or other search engines.  A search engine uses a “crawler”, which is a specialized piece of software, to read through your pages.  If that crawler has trouble finding the content of your pages, or mis-interprets what’s important because you haven’t defined headings as headings and so on, then chances are your rank in the search results will suffer. </li>
<li><strong>It’s just good practice</strong>:  This is a bit of a “because I said so” reason, but talk to any professional standards-aware web developer or designer, and they’ll tell you that separating content, style, and behaviour is the best way to develop an application.</li>
</ol>

<h2 id="markup">Markup, the basis of every page</h2>

<p>HTML and XHTML are markup languages composed of elements, which contain attributes (some optional and some mandatory.)  These elements are used to markup the various different types of content in documents, specifying what each bit of content is supposed to be rendered as in web browsers (for example headings, paragraphs, tables, bulleted lists etc. </p>

<p>As you’d expect, elements define the actual content type, while attributes define extra information about those elements, such as an ID to identify that element, or a location for a link to point to. You should bear in mind that markup is supposed to be as semantic as possible, ie it is supposed to describe the function of the content as accurately as possible. Figure 1 shows the anatomy of a typical (X)HTML element. </p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/87-4-the-web-standards-model-html-css-and-javascript/article4_1.png" alt="A typical HTML element" />
 

<p class="comment">Figure 1: Anatomy of an (X)HTML element. <a href="figure1_longdesc.html" style="font-size:85%;">Read Figure 1 description</a></p>

<p>With that in mind, just what is the difference between HTML and XHTML? </p>

<h3 id="xhtml">What is XHTML?</h3>

<p>The “X” in XHTML means “extensible”.  One of the most common questions for those starting out is “should I be using HTML or XHTML, and what the heck is the difference?”.  They pretty much do the same thing; the biggest difference is in the structure. See Table 1 for the main differences. </p>

<table>
<tr>
  <th>HTML </th>
  <th>XHTML</th>
</tr>
<tr>
  <td> Elements and attributes are case insensitive, <code>&lt;h1&gt;</code> is the same thing as <code>&lt;H1&gt;</code>.</td>
  <td> Elements and attributes are case sensitive; they are all lowercase. </td>
</tr>
<tr>
  <td> Certain elements don’t need a closing tag (eg paragraphs, <code>&lt;p&gt;</code>), while others (called “empty elements”) forbid the closing tag (eg images, <code>&lt;img&gt;</code>).</td>
  <td><p>All elements must be explicitly closed (eg <code>&lt;p&gt;A paragraph&lt;/p&gt;</code>). Elements without content may be closed using a slash in the start tag (eg <code>&lt;hr&gt;&lt;/hr&gt;</code> and <code>&lt;hr/&gt;</code> mean the same thing).</p>

<p>If you are serving your XHTML as <code>text/html</code>, then you should use the shorthand syntax on all <a href="http://www.cs.tut.fi/~jkorpela/html/empty.html#html">elements that are defined as being “empty”</a> and place a space before the slash. You should use the long form (with separate start and end tags) on any element not defined as empty—even if you don’t have any content in it.</p></td></tr>
<tr>
  <td> Some attribute values may be written without being enclosed in quotes.</td>
  <td> Attribute values must be enclosed by quotes.</td>
</tr>
<tr>
  <td> Shorthand can be used for certain attributes (ie <code>&lt;option selected&gt;</code>).</td>
  <td>The full attribute form must be used for all attributes (eg <code>&lt;option selected=&quot;selected&quot;&gt;</code>).</td>
</tr>
<tr>
  <td>Servers should deliver HTML to the client with a media type of <code>text/html</code>.</td>
  <td>XHTML Should use the <code>application/xhtml+xml</code> media type but may use <code>application/xml</code>, <code>text/xml</code> or <code>text/html</code>. If <code>text/html</code> is used then the <a href="http://www.w3.org/TR/xhtml1/guidelines.html">HTML compatibility guidelines</a> should be followed because browsers will treat it as HTML (and use error recovery to account for the differences between the languages).</td>
</tr>
</table>
<p class="comment">Table 1: Differences between HTML and XHTML. </p>

<p>For now, we&#39;d recommend that you don&#39;t worry too much about whether you are writing HTML or XHTML. Stick to the advice presented throughout this course and use an HTML doctype (<a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/">see article 14 for more on doctypes</a>) and you shouldn&#39;t go far wrong.</p>

<h3 id="validation">Validation, what’s that?</h3>

<p>Because HTML and XHTML are set standards (and CSS too, for that matter), the World Wide Web Consortium (W3C) has created a great tool called a validator to automatically check your pages for you, and point out any problems/errors your code might have, such as missing closing tags or missing quotes around attributes.  The HTML validator is available online at <a href="http://validator.w3.org" title="The W3C HTML validator">http://validator.w3.org/</a>.  It will automatically detect whether you’re using HTML or XHTML, and which doctype you’re using.  If you want to check out your CSS, the validator for that is available at <a href="http://jigsaw.w3.org/css-validator/" title="The W3C CSS validator">http://jigsaw.w3.org/css-validator/</a>.</p>

<p>For more information on validation, see Article 24 (not yet published). For more information on doctypes, see article <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" title="article 14 covers doctypes">Article 14</a>.</p>

<h2 id="css">CSS—let’s add some style</h2>

<p>Cascading Style Sheets allow you fine control over the formatting and layout of your document.  You can change or add colors, backgrounds, font sizes and styles, and even position things on your web page in different places. There are 3 main ways to apply styles using CSS: redefining an element, applying a style to an ID, or applying a style to a class.  Let’s take a look at each: </p>

<ol>
<li><p>Redefining an element.  You can change the way any (X)HTML element displays by defining a rule to style it.  If you want all of your paragraphs to be double-spaced and green, in CSS you can add in this declaration: </p>
<pre><code>p {
  line-height: 2;
  color: green;
}</code></pre>

<p>Now any content enclosed within <code>&lt;p&gt;&lt;/p&gt;</code> tags will have double the line height, and be colored green.</p></li>

<li><p>Defining an ID.  You can give an element an <code>id</code> attribute  to uniquely identify it on a page (each ID can be used only once on a page)—for example <code>id=&quot;navigation_menu&quot;</code>.  This lets you have finer control over formatting on a page, for example, if you only want a certain paragraph double-spaced and highlighted with green text, give it an ID: </p>

<pre><code>&lt;p id=&quot;highlight&quot;&gt;Paragraph content&lt;/p&gt;</code></pre>

<p>And then apply a CSS rule to it like follows:</p>

<pre><code>#highlight {
  line-height: 2;
  color: green;
}</code></pre>

<p>This will only apply the CSS rule to the paragraph on the page with an <code>id</code> attribute of <code>highlight</code> (the pound sign is just CSS convention to indicate that it’s an ID).</p></li>

<li><p>Defining a class.  Classes are just like IDs, except that you can have more than one of the same class on each page. Following along with our double-spacing example, if you want to double space and highlight the first two paragraphs on a page, you would add classes to them like so: </p>

<pre><code>&lt;p class=&quot;highlight&quot;&gt;Paragraph content&lt;/p&gt;
&lt;p class=&quot;highlight&quot;&gt;The content of the second paragraph&lt;/p&gt;</code></pre>

<p>And then apply a CSS rule to them like follows:</p>

<pre><code>.highlight {
  line-height: 2;
  color: green;
}</code></pre>

<p><code>highlight</code> is a class this time, not an ID—the period is just CSS convention to indicate that it’s a class. </p></li>
</ol>

<p>The example below will give you more of an idea of how CSS styles HTML; we’ll start looking at CSS in way more detail in Article 22, which will be published soon.</p>

<h2 id="javascript">JavaScript—adding behaviour to web pages</h2>

<p>Finally, JavaScript is the scripting language that you use to add behaviour to your web pages—it can be used to validate the data you enter into a form (tell you if it is in the right format or not), provide drag and drop functionality, change styles on the fly, animate page elements such as menus, handle button functionality, and a million other things. Most modern JavaScript works by finding a target HTML element, and then doing something to it, just like CSS, but the way it operates, the syntax etc is rather different. </p>

<p>JavaScript is a more complicated and expansive subject than HTML and CSS, so to keep things simple and avoid confusion at this stage, I won’t be discussing it in the below example. In fact, you won’t be looking at JavaScript in this course again until much later on.</p>

<h2 id="example">An example page</h2>

<p>There are a lot of details I haven’t covered here, but we’ll get through everything during this web design course! For now, I’ll present you with a real page example, just to give you a taste of what you’ll be working with in the rest of the articles. </p>

<p>The example I present below is a references page, which you could use to cite references at the end of say, a psychology essay on the group dynamics of a web development team, or a report for work on broadband Internet use in the United States. Please note, that if you’re a stickler for strict academic writing, this example shows APA formatting (I had to pick one). <a href="article4_examples.zip">Download the code here</a>.</p>

<h3 id="index">index.html</h3>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;
  &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;

&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;/&gt;

  &lt;title&gt;References&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    @import url(&quot;styles.css&quot;);
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div id=&quot;bggraphic&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;header&quot;&gt;
    &lt;h1&gt;References&lt;/h1&gt;
  &lt;/div&gt;
  &lt;div id=&quot;references&quot;&gt;
    &lt;cite class=&quot;article&quot;&gt;Adams, J. R. (2008). The Benefits of Valid Markup: A Post-Modernistic Approach to Developing Web Sites. &lt;em&gt;The Journal of Awesome Web Standards, 15:7,&lt;/em&gt; 57-62.&lt;/cite&gt;
    &lt;cite class=&quot;book&quot;&gt;Baker, S. (2006). &lt;em&gt;Validate Your Pages.... Or Else!.&lt;/em&gt; Detroit, MI: Are you out of your mind publishers.&lt;/cite&gt;
    &lt;cite class=&quot;article&quot;&gt;Lane, J. C. (2007). Dude, HTML 4, that&apos;s like so 2000. &lt;em&gt;The Journal that Publishes Genius, 1:2, &lt;/em&gt; 12-34.&lt;/cite&gt;
    &lt;cite class=&quot;website&quot;&gt;Smith, J. Q. (2005). &lt;em&gt;Web Standards and You.&lt;/em&gt; Retrieved May 3, 2007 from Web standards and you.&lt;/cite&gt;
  &lt;/div&gt;
  &lt;div id=&quot;footer&quot;&gt;
    &lt;p&gt;The content of this page is copyright &#xA9; 2007 &lt;a href=&quot;mailto:jonathan.lane@gmail.com&quot;&gt;J. Lane&lt;/a&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>I’m not going to dissect this file line by line, as you’ll see many examples in future articles, however, a few major things to take note of are as follows. </p>

<p>Line 1 is what’s called the document type declaration, or doctype.  In this case, the page is XHTML 1.0 Transitional. The doctype specifies a set of rules that your markup has to follow, and can be validated against. See <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" title="article 14 covers doctypes">Article 14</a> for more on doctypes. </p>

<p>Lines 5 to 7 import a CSS file into the page—the styles contained in this file will be applied to the various elements on the page.  You’ll see the content of the CSS file that handles all of the formatting for the page in the next section.</p>

<p>I’ve assigned a different class to each of the different types of reference.  Doing this lets me apply a different style to each type of reference—for instance in our example I’ve put a different color to the right of each reference to make it easier to scan the list. </p>

<p>Now let’s take a look at the CSS that styles the HTML. </p>

<h3 id="styles">styles.css</h3>

<pre><code>body {
  background: #fff url(&#39;images/gradbg.jpg&#39;) top left repeat-x;
  color: #000;
  margin: 0;
  padding:0;
  border: 0;
  font-family: Verdana, Arial, sans-serif; font-size: 1em;
}

div {
  width: 800px;
  margin: 0 auto;
}

#bggraphic {
  background: url(&#39;images/pen.png&#39;) top left no-repeat;
  height: 278px;
  width: 362px;
  position: absolute;
  left: 50%;
  z-index: 100;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 30px;
  background: url(&#39;images/headbg.png&#39;) top left repeat;
  padding: 10px 0;
}

#references cite {
  margin: 1em 0 0 3em;
  text-indent: -3em;
  display: block;
  font-style: normal;
  padding-right: 3px;
}

.website {
  border-right: 5px solid blue;
}

.book {
  border-right: 5px solid red;
}

.article {
  border-right: 5px solid green;
}

#footer {
  font-size: 0.5em;
  border-top: 1px solid #000;
  margin-top: 20px;
}

#footer a {
  color: #000;
  text-decoration: none;
}

#footer a:hover {
  text-decoration: underline;
}</code></pre>

<p>I went a little overboard with styling up this page, adding some neat background effects in order to show you some of the things that can be accomplished using CSS. </p>

<p>Line 1 sets some defaults for the document such as text and background color, width of border to add around the text, etc.  Some people won’t bother to explicitly state defaults like these, and most modern browsers will apply their own defaults, but it is a good idea, as it allows you more control over how your web site will look across different browsers. </p>

<p>On the next line I’ve set the page to be 800px wide (although I could have specified a percentage here to have the page expand/contract based on the size of the browser window.  The margin setting I’ve used here will ensure that the page content stays centered in the window. </p>

<p>Next let’s turn our attention to the background images used in the page (these are applied using the background: url declarations.) I’ve got 3 different background elements on this page.  The first is a gradient that tiles across the top of the page giving us the nice blue fade.  Second, I’ve used a semi-transparent PNG for the pen graphic in order to provide enough contrast with the text above it and to pick up the gradient (semi-transparent PNG images don’t work in Internet Explorer 6 or below, but they work in pretty much every modern browser; see <a href="http://code.google.com/p/ie7-js/">Dean Edward&#39;s IE-fixing JavaScript</a> for an IE6 solution to this issue, which also fixes some of IE6’s CSS support issues.) 
Finally, I’ve used another semi-transparent PNG for the background of our page heading.  It gives the heading a little added contrast, and provides a neat effect. </p>

<p>The example looks like Figure 2. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/87-4-the-web-standards-model-html-css-and-javascript/article4_2.jpg" alt="The finished example" />

 <p class="comment">Figure 2: The finished example with styles applied. </p>

<h2 id="summary">Summary</h2>

<p>There is nothing mystical about XHTML, CSS and JavaScript.  They’re simply an evolution of the web.  If you’ve already had some exposure to HTML, there is nothing to “unlearn”.  Everything you know is still relevant, you’ll just have to handle certain things a different way (and be a little more careful in your markup). </p>

<p>Aside from getting the satisfaction of a job well done, web standards development just makes sense.  The counter-arguments to developing with standards is that it’s time consuming and a pain in the neck having to make a layout work across browsers.  The opposite argument could be applied to making a non-standards-based layout work across a range of devices and with future browser versions. How can you be certain that your hobbled-together markup will display at all in future versions of Opera, Firefox, Safari, Chrome, Internet Explorer, etc.?  You can’t, unless you follow the rules. </p>

<h2 id="exercises">Exercise questions</h2>
<ul>
<li>What’s the difference between a class and an ID?</li>
<li>What role do XHTML, CSS and JavaScript each play on a web site?</li>
<li>Take the index.html file from the example provided, and change the formatting using the CSS alone (I&#39;d suggest editing the file using a text editor such as Notepad or Text Wrangler).  Do not make any changes to the HTML.
<ul><li>Add an icon for each of the different reference types (a different icon for articles, books and web resources). Create your own icons for this purpose, and make them appear alongside the different reference types using CSS alone.</li>
<li>Hide the copyright notice at the bottom of the page.</li>
<li>Change the look of the title, make it distinctive.</li>
</ul></li>
<li>What sorts of things could you do to the CSS to make this example work well on a mobile phone browser?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/3-how-does-the-internet-work/" rel="prev" title="link to the previous article in the series">Previous article—How does the Internet work?</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/5-web-standards-beautiful-dream-bu/" rel="next" title="link to the next article in the series">Next article—Web standards—beautiful dream, but what’s the reality?</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>




<h2>About the author</h2>



<img src="http://forum-test.oslo.osa/kirby/content/articles/87-4-the-web-standards-model-html-css-and-javascript/Jonlane.jpg" alt="Picture of the article author Jonathan Lane" class="right" />


<p>Jonathan Lane is the President of <a href="http://industryinteractive.net/">Industry Interactive</a>—a web development/web application development company located on Mayne Island, British Columbia, Canada.  He got his start in development working for the University of Lethbridge Curriculum Re-Development Center as their web projects coordinator for many years.</p>



<p>He blogs at <a href="http://www.flyingtroll.com/">Flyingtroll</a> and is currently developing <a href="http://www.mailmanagr.com/">Mailmanagr</a>, an e-mail interface for the Basecamp project management application.</p>
          


