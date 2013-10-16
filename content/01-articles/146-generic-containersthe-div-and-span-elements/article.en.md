Title: Generic containers—the div and span elements
----
Date: 2008-09-26 05:41:15
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
<li class="prev"><a href="http://dev.opera.com/articles/view/21-lesser-known-semantic-elements/" rel="prev" title="link to the previous article in the series">Previous article—Lesser known semantic elements</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/" rel="next" title="link to the next article in the series">Next article—Creating multiple pages with navigation menus</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>In this article, I am going to explain to you how and when to use the two elements in HTML that are <em>not</em> used to describe the content. The <code>span</code> and <code>div</code> elements do not actually confer any meaning to the content they envelop; instead, they are a generic mechanism that allows you to create custom  structure or groupings of elements where no other HTML element is really appropriate, and that can be then styled with CSS or manipulated via JavaScript. Although <code>div</code>s don’t add any semantic meaning, they could be considered to represent a structural division of the mark-up, along with the appropriate semantic class or ID name.</p> 

<p>They are the “tag of the last resort” and should only be used where no other HTML element fits the bill, because they have no meaning to assistive techologies, search engines, etc.</p>

<p>The article stucture is as follows:</p>

<ul>
<li><a href="#semanticallyneutral">Semantically neutral</a></li>
<li><a href="#inlineblock">Inline versus block</a></li>
<li><a href="#groupingcontent">More explanation of grouping content</a></li>
<li><a href="#extrainformation">Extra information</a></li>
<li><a href="#hooks">Hooks for JavaScript, as well as CSS</a></li>
<li><a href="#divitis">div-itis</a></li>

<li><a href="#inappropriatesemantics">Inappropriate semantics</a>
<ul>
<li><a href="#genericparagraphs">Generic paragraphs</a></li>
<li><a href="#presentationalelements">Presentational elements</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>

</ul>
    
<h2 id="semanticallyneutral">Semantically neutral</h2>
    
<p>Most elements in HTML exist to describe the content, such as images, lists, headings, or assist in setting up the document—head, body, link, meta, etc. There are two elements however that have no assigned meaning. From the HTML spec:</p>
    
<blockquote><p>The <code>div</code> and <code>span</code> elements, in conjunction with the <code>id</code> and <code>class</code> attributes, offer a generic mechanism for adding structure to documents.</p></blockquote>
    
<p>These two elements can be considered the scaffolding of HTML. They give you the ability to group content, add extra information around content and hooks for adding styling and interactivity. They do not however add any new semantic meaning to the document, in and of themselves.</p>
    
<h2 id="inlineblock">Inline versus block</h2>
    
<p>As you learned earlier, <a href="/articles/view/12-the-basics-of-html/#blockinline">block elements are elements that help inform the structure of a document</a>.  The <code>div</code> element, short for division, is the block level generic container.  It is normally used to wrap around other block level elements, to group them together (see the next section for more of an exploration of this). It can also be used to collect together a bunch of inline elements and/or text that otherwise don’t logically fit under another block level element, but this should be a last resort.</p>
        
<p>The <code>span</code> element is the inline level generic container. It also helps to inform the structure of document, but it is used to group or wrap other inline elements and/or text, rather than block level elements.</p>

<p>The line between the two different types might seem fairly arbitrary at first.  The difference to bear in mind is the type of content, and how it would appear when written down without any styling. A <code>div</code> is placed around a group of block level elements—for example, to wrap a heading plus a list of links to make a navigation menu. A span wraps a group of inline elements or (most usually) plain text. The key word is “group”: if a <code>div</code> wraps just one block-level element, or a span just one inline element, it&#39;s being used unnecessarily. For example, check out the way the <code>div</code> and <code>span</code> elements are used in the following simple markup:</p>

<pre>&lt;body&gt;
  &lt;div id=&quot;mainContent&quot;&gt;
    &lt;h1&gt;Title of the page&lt;/h1&gt;
    &lt;p&gt;This is the first paragraph of content on my example page.&lt;/p&gt;
    &lt;img src=&quot;example.gif&quot; alt=&quot;This image is merely an example, nothing special&quot;&gt;
    &lt;p&gt;This is the second paragraph of content on my example page. It is very
    similar to the first, but there is a &lt;span id=&quot;specialAlert&quot;&gt;special alert here
    that we want to colour and increase text size using CSS&lt;/span&gt;.
    It&#39;s not really standard emphasis - it&#39;s more just styling, so &lt;em&gt; and &lt;strong&gt; are not really appropriate.&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;</pre>

<p>You could now select the content inside the <code>div</code> and <code>span</code> using their <code>id</code> attributes, and apply special styling and positioning to them using CSS.</p>
        
<h2 id="groupingcontent">More exploration of grouping content</h2>
    
<p>Viewing the source of many pages on the internet will reveal a nest of <code>div</code> elements including common metaphors in the <code>class</code>es and/or <code>id</code>s of the elements—for example <code>header</code>, <code>footer</code>, <code>content</code>, <code>sidebar</code>, and so on.</p>

<p class="note">Your <code>class</code> and <code>id</code> names should always be <em>semantic</em>, meaning they should refer to the meaning/role of the content, rather than just referring to its visual appearence. So for example, <code>sidebar</code> and <code>alertMessage</code> are good <code>class</code> names, whereas <code>redLefthandColumn</code> and <code>blueFlashingText</code> are not. What if you wanted to change the colour of the sidebar from red to blue at a later date, or switch its position on the site from left to right? What if you wanted your alerts to be changed from blue and flashing to green and not flashing?</p>

<p>These divisions provide predictability when creating page structures, and, perhaps most importantly, when looking at the HTML again later, they provide clues as to which part of the page you are in. A well divided page is almost self documenting as to its intent and contents.</p>

<p>To hopefully make this a little bit clearer, let’s look at a <code>div</code>structure from a real site—<a href="http://dev.opera.com">the home page of dev.opera.com</a> to be exact. Bear in mind that the below code example contains no content at all, apart from a few other elements I’ve included because they are important for the site structure. I’m mainly looking at reproducing just the actual site structure as defined using <code>div</code> elements. In the code below, read the HTML comments carefully—I’ve inserted these to explain the site structure. As you look through the code, open the main page of dev.opera.com inside a new tab or window in your browser so you can refer to the look of the site as you explore its structure.</p>
    
<pre>&lt;body&gt;
&lt;!-- First up we have a wrap div, which wraps the entire page, and allows more precise control of it as a whole --&gt;
  &lt;div id=&quot;wrap&quot;&gt;
  &lt;!-- This unordered list contains the list of links to all Opera&#39;s different sites, which you can see across the very top of the page --&gt;
    &lt;ul id=&quot;sitenav&quot; class=&quot;hidemobile&quot;&gt;
      ...
    &lt;/ul&gt;
      ...
    &lt;!-- This is the search form - the search box you see at the top right of the page --&gt;
    &lt;form action=&quot;/search/&quot; method=&quot;get&quot; id=&quot;search&quot;&gt;
      &lt;div&gt;
        ...
      &lt;/div&gt;
    &lt;/form&gt;
    &lt;!-- This unordered list contains the main navigation menu of the site - the horizontal tab menu you see just below the main title graphic --&gt;
    &lt;ul id=&quot;menu&quot;&gt;
      ...
    &lt;/ul&gt;
    &lt;!-- This nested div forms the structure of the login box, where you enter your user name and password to log in to the site. You will only see this if you are currently logged out. --&gt;
    &lt;div id=&quot;loginbox&quot;&gt;
      &lt;div id=&quot;login&quot;&gt;
        ...
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- This series of nested divs is where the main content of the page is contained - all of the article summaries that form the main bulk of the page content --&gt;
    &lt;div id=&quot;content2&quot;&gt;
      &lt;div id=&quot;main&quot;&gt;  
        ...
        &lt;div class=&quot;major&quot;&gt;
          ...
        &lt;/div&gt;
        &lt;div class=&quot;major&quot;&gt;
          ...
        &lt;/div&gt;
        ...
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- This div contains the sidebar of the page - the article categories, the latest comments, etc --&gt;
    &lt;div id=&quot;side&quot;&gt;
      ...
    &lt;/div&gt;
    &lt;!-- This div contains the page footer, which is where you&#39;ll see the copyright message, and various links at the bottom of the page. --&gt;
    &lt;div id=&quot;footer&quot;&gt;
      ...
    &lt;/div&gt;
  &lt;!-- The end of the page - this is the closing tag for the wrap div --&gt;  
  &lt;/div&gt;
&lt;/body&gt;</pre>

<h2 id="extrainformation">Extra information</h2>
        
<p>Some content has extra information that is of use to user agents and other parsers, and this needs to be conveyed through an attribute. <code>span</code> elements are often a good way to attach such information to content on a web page, as you will see below.</p>

<p>A good example is a different language appearing within a document. For example:</p>
        
<pre><code>&lt;p&gt;&lt;q&gt;Plus &#xE7;a change, plus c&#39;est la m&#xEA;me chose&lt;/q&gt; she said.&lt;/p&gt;</code></pre>

<p>Although the language of the main document is English, the quote is actually French. This would be indicated through the use of the <code>lang</code> attribute, like so:</p>

<pre><code>&lt;p&gt;&lt;q lang=&#39;fr&#39;&gt;Plus &#xE7;a change, plus c&#39;est la m&#xEA;me chose&lt;/q&gt; she said.&lt;/p&gt;</code></pre>
        
<p>Now, in that example, it was easy to mark the change in language as it all appeared within a quote, so the <code>q</code> element was perfect to use to wrap the content. There are some cases however where there isn’t an appropriate semantic element easily available, so you would instead have to resort to a <code>span</code> or <code>div</code>. For example:</p>
        
<pre><code>&lt;p&gt;A screen reader will read the French word chat (cat) as chat (to talk informally) unless it is properly marked up.&lt;/p&gt;</code></pre>

<p>In this example, the first instance of the word <em>chat</em>, being an example of French within an English document, should have the difference indicated so it isn’t just interpreted as the English word chat. In this case, a <code>span</code> around the word chat is the right way to go about it, as there is no other HTML element appropriate to wrap the French word (we do not want to emphasise the word, it is not a quote, or a piece of code, etc). And being a single word in a sentence, it is inline level. The example would therefore be better written as:</p>

<pre><code>&lt;p&gt;A screen reader will read the French word &lt;span lang=&#39;fr&#39;&gt;chat&lt;/span&gt; (cat) as chat (to talk informally) unless it is properly marked up.&lt;/p&gt;</code></pre>
        
<p>This is the same technique used in <a href="http://microformats.org/about/">microformats</a> for marking up common data formats within web pages. You can find a lot more about microformats in some of the <a href="http://dev.opera.com/articles/html/">more advanced HTML articles on dev.opera.com</a>.</p>
    
<h2 id="hooks">Hooks for JavaScript, as well as CSS</h2>
    
<p>I’ve already talked about how you can use <code>div</code> and <code>span</code> along with <code>id</code> and <code>class</code> attributes to provide hooks with which to apply CSS styles and positioning to certain parts of your content. The same thing can be done to apply JavaScript to your document too.</p>

<p>If a given element needs to be found and manipulated by JavaScript, it is common to apply an <code>id</code> to it, and then use the <code>getElementById</code> function to find it. You’ll learn a lot more about JavaScript in the last part of the course.</p>
    
<h2 id="divitis">“div-itis”</h2>
    
<p>One thing to be aware of is an effect commonly referred to as “div-itis” in the web development community.</p>

<p>Whilst it is easy to add styling via a lot of nested <code>div</code> or <code>span</code> elements, it is a temptation best avoided as much as possible. In most cases, it is possible to attach the styling or JavaScript functionality to existing elements in the document. A generic container should be a last resort—it is better to try to write web pages by starting with just the semantic elements, and adding the containers only when necessary.</p>
    
<h2 id="inappropriatesemantics">Inappropriate semantics</h2>

<p>In this section I explore some common mistakes to be aware of when marking up content using HTML, to be avoided if at all possible.</p>
    
<h3 id="genericparagraphs">Generic “paragraphs”</h3>
        
<p>Sometimes, it is tempting to throw a <code>p</code> (paragraph) element around any block of text, but this isn’t really correct. As stated in my earlier <a href="/articles/view/15-marking-up-textual-content-in-html/">article on marking up content</a>:</p>

<blockquote><p>If it is just a few words and not even a proper sentence, then it should probably not be marked up as a paragraph.</p></blockquote>
        
<p>A <code>div</code> or <code>span</code> (depending on the exact situation) is the correct element to wrap around disjointed textual content that has no other semantic relationship covered by other HTML elements.</p>
        
<h3 id="presentationalelements">Presentational elements</h3>
        
<p>One notably bad piece of advice sometimes found on the internet is the practice of using short, presentational elements such as <code>b</code> or <code>i</code> as generic containers in place of <code>span</code>. The reasoning provided is commonly one of two things:</p>

<ul>
  <li>The elements are three bytes shorter, and so save bandwidth in both the HTML and the CSS.</li>
  <li>The styling required is for appearance only, so using “presentational” elements is actually ok in this circumstance.</li>
</ul>
        
<p>The first one is true, but the saving is almost always negligible (unless you are doing an incredible amount of presentational effects), especially given modern compression applied by web servers to documents before sending them over the internet to the browser. This makes documents much shorter than any human short-hand can achieve.</p>
        
<p>The second reason betrays a lack of comprehension as to what presentational actually means in the context of HTML. Presentational elements describe what their content should <em>look like</em> (<code>b</code> means simply “text within is bold”). They do not represent generic hooks for styling what is within.</p>

<p>If a small section of text within a paragraph needs styling or targeting by JavaScript and there is not already an applicable semantic element to wrap around it, the only correct element to use is a <code>span</code>.</p>

<h2 id="summary">Summary</h2>

<p>This draws my exploration of the <code>span</code> and <code>div</code> elements to a close—you should now understand their purpose much better, and be able to use them with confidence. Later articles on CSS will go much more deeply into using them to create page layouts, and other uses.</p>

<h2 id="exercises">Exercise questions</h2>

<ul>
<li>What is the difference between <code>div</code> and <code>span</code>?</li>
<li>Name 2 main uses of these elements on web pages.</li>
<li>Have a look at the source code of one of the pages of your favourite web site. Consider the structure of it. Does it use a lot of <code>div</code> and <code>span</code> elements? Can you see anything bad or inappropriate about the way they are used? How could it be improved?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/21-lesser-known-semantic-elements/" rel="prev" title="link to the previous article in the series">Previous article—Lesser known semantic elements</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/" rel="next" title="link to the next article in the series">Next article—Creating multiple pages with navigation menus</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

  <h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/146-22-generic-containersthe-div-and-span-elements/norm.jpg" alt="Picture of the article author Mark Norman Francis" />

<p class="comment">Photo credit: <a href="http://flickr.com/photos/andybudd/98405468/" title="Original photo source">Andy Budd</a>.</p>

</div>

<p>Mark Norman Francis has been working with the internet since before the web was invented. In his last job he worked at Yahoo! as a Front End Architect for the world’s biggest website, defining best practices, coding standards and quality in web development internationally.</p>


<p>Previous to Yahoo! he worked at Formula One Management, Purple Interactive and City University in various roles including web development, backend CGI programming and systems architecture. He pretends to blog at <a href="http://marknormanfrancis.com/" title="Norms blog">http://marknormanfrancis.com/</a>.</p>
