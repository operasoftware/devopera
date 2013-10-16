Title: Supplementary: More about the document <head>
----
Date: 2008-07-08 07:17:28
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
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
  <p>In <a href="http://dev.opera.com/articles/view/13-the-html-head-element/" title="basics of the html head">Article 13</a> of this course you learned about the essential things that go inside the <code>head</code> of an HTML document. In this tutorial I’ll expand on that information and talk about some other—lesser used—things that you can add to the <code>head</code> section of an HTML document; these are less essential, but still very useful nonetheless. By the end of this tutorial you’ll know how to collate several HTML documents into a larger multi-part collection, what a favicon is and how to use it, and what RSS is all about. Before you go any further, <a href="moreinthehead.zip" title="zip containing the code examples for this article">download this article’s accompanying zip file</a> so you can follow along with the examples. The contents of this article are as follows:</p>
  
  <ul>
  <li><a href="#documentrelationships">Document relationships—collating several HTML documents into a collection</a></li>
  <li><a href="#alternativedocuments">Linking to alternative versions of the document</a>
  <ul>
  <li><a href="#translations">Translations</a></li>
  <li><a href="#feeds">Feeds</a></li>
  </ul>
  </li>
  
  
  <li><a href="#favicons">Making bookmarking more fun—using favicons</a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
  </ul>
 
 <h2 id="documentrelationships">Document relationships—collating several HTML documents into a collection</h2>
  <p>One feature of HTML that stems from the origins of the web as a document repository are document relationships. These define how one document relates to another, for example if it is the previous or next document in a logical chain or if it is the index of a whole series of documents.</p>
  <p>In a sense, you’ve already done this in <a href="http://dev.opera.com/articles/view/13-the-html-head-element/" title="basics of the html head">Article 13</a>, when you applied a style sheet to a document to give it a different look and feel with the <code>link</code> element:</p>

<pre><code>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Breeding Dogs - Tips about Alsatians&lt;/title&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; href=&quot;styles.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;print&quot; href=&quot;printstyles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

  <p>The relationship of the current document to others is defined in much the same way using the <code>link</code> element and the <code>rel</code> or <code>rev</code> attributes. The <code>rel</code> attribute (<em>relationship</em>) defines the relationship that the linked document has to the current one, and the <code>rev</code> attribute (<em>reverse relationship</em>) defines the relationship the current document has to the linked one.</p>

<p class="note">Don’t worry about the <code>rev</code> attribute too much—it is a bit confusing, but you will need to use it rarely, if at all.</p>

  <p>There are no mandatory prefixed values for the <code>rel</code> and <code>rev</code> attributes, but there is a taxonomy supported by browsers and indexing tools that you should consider following under most normal circumstances for <code>rel</code>:</p>
  <dl>
    <dt>home</dt>
    <dd>The home document of the current collection</dd>
    <dt>index</dt>
    <dd>The index of the current collection</dd>
    <dt>contents</dt>
    <dd>The contents list of the current collection</dd>
    <dt>search</dt>
    <dd>The search page of the current collection</dd>
    <dt>glossary</dt>
    <dd>The glossary of the current collection</dd>
    <dt>help</dt>
    <dd>The help page of the current collection</dd>
    <dt>first</dt>
    <dd>The first document in current collection</dd>
    <dt>previous</dt>
    <dd>The previous document from this one in the logical order of the collection</dd>
    <dt>next</dt>
    <dd>The document following this one in the logical order of the collection</dd>
    <dt>last</dt>
    <dd>The last document of the current collection</dd>
    <dt>up</dt>
    <dd>The document one level up in the hierarchy of the current collection</dd>
    <dt>copyright</dt>
    <dd>The copyright information of the current collection</dd>
    <dt>author</dt>
    <dd>The information page about the author of the current collection</dd>
  </dl>

  <p>Most browsers don’t do anything with this information. Some however will follow the link and load the document in the background so that it shows up a lot faster for the reader. The real browser exception is Opera, which has an extra navigation toolbar you can turn on by selecting View &gt; Toolbars &gt; Navigation bar from the menu. Once turned on you get the link relationships defined in the document as an extra toolbar. Figure 1 shows the W3C HTML standards document in Opera:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/95-supplementary-more-about-the-document-head/morehead-figure1.png" alt="Screenshot of the Opera browser showing the navigation bar" /></p>
  <p class="comment">Figure 1: Opera shows the link relationships of the current document in a special navigation toolbar
  </p>

  <p>Even though they are not displayed in a visible sense, it is a good idea to provide a human-readable explanation of what the linked documents are about in a <code>title</code> attribute as the file names alone are not necessarily enough.</p>

  <p>Now let’s move on to have a look at how link relationships can be used to collate several documents into a collection. For example, the start page of an online course spanning several documents could be the following (<a href="start.html" title="the first document in the example set">start.html</a>):</p>

<pre><code>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Link relationship example&lt;/title&gt;
  &lt;link rel=&quot;contents&quot; title=&quot;table of contents&quot; href=&quot;toc.html&quot;&gt;
  &lt;link rel=&quot;next&quot; title=&quot;next: chapter one&quot; href=&quot;chapter1.html&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Course example&lt;/h1&gt;
  &lt;p&gt;This would be the cover page of an article series or course&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;chapter1.html&quot; rel=&quot;next&quot;&gt;Let&#39;s start with Chapter One&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>The first chapter would be the following (<a href="chapter1.html" title="chapter 1 in the example documents">chapter1.html</a>):</p>

<pre><code>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Chapter One - Link relationship example&lt;/title&gt;
  &lt;link rel=&quot;contents&quot; title=&quot;Table of Contents&quot; href=&quot;toc.html&quot;&gt;
  &lt;link rel=&quot;home&quot; title=&quot;Home Page&quot; href=&quot;start.html&quot;&gt;
  &lt;link rel=&quot;prev&quot; title=&quot;previous: Home Page&quot; href=&quot;start.html&quot;&gt;
  &lt;link rel=&quot;next&quot; title=&quot;next: Second Chapter&quot; href=&quot;chapter2.html&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Chapter One&lt;/h1&gt;
  &lt;p&gt;This would be the chapter one page of an article series or course&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;start.html&quot; rev=&quot;prev&quot;&gt;Back to Start&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;toc.html&quot; rel=&quot;contents&quot;&gt;Table of contents&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;chapter2.html&quot; rel=&quot;next&quot;&gt;Go on to Chapter Two&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>The second chapter (<a href="chapter2.html" title="chapter 2 in the example documents">chapter2.html</a>):</p>

<pre><code>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Link relationship example&lt;/title&gt;
  &lt;link rel=&quot;contents&quot; title=&quot;Table of Contents&quot; href=&quot;toc.html&quot;&gt;
  &lt;link rel=&quot;home&quot; title=&quot;Home page&quot; href=&quot;start.html&quot;&gt;
  &lt;link rel=&quot;prev&quot; title=&quot;previous: first chapter&quot; href=&quot;chapter1.html&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Chapter Two&lt;/h1&gt;
  &lt;p&gt;This would be the second chapter page of an article series or course&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;chapter1.html&quot; rev=&quot;prev&quot;&gt;Back to chapter 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;toc.html&quot; rel=&quot;contents&quot;&gt;Table of contents&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>And finally the table of contents (<a href="toc.html" title="the table of contents in the example documents">toc.html</a>):</p>

<pre><code>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Table of contents - Link relationship example&lt;/title&gt;
  &lt;link rel=&quot;home&quot; title=&quot;home page&quot; href=&quot;start.html&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Table of contents&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;chapter1.html&quot;&gt;Chapter One - about stuff&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;chapter2.html&quot;&gt;Chapter Two - about other stuff&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;start.html&quot; rel=&quot;home&quot;&gt;Back to home&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>You can also use <code>rel</code> and <code>rev</code> attributes on the links in the document to tell browsers and assistive technology that these anchors correspond with the link relationships.</p>

<p class="note">You can also use <code>rel</code> and <code>rev</code> for other purposes, such as Microformats—<a href="http://dev.opera.com/articles/view/xfn-encoding-extraction-and-visualizat/" title="XFN encoding and visualization">check out this article for some uses of the XFN Microformat</a>.</p>

  <h2 id="alternativedocuments">Linking to alternative versions of the document</h2>

<p>The option to link to other documents that have a certain relationship to the document in question also includes different language versions of the same document, or different formats. You can do both by providing a link with a <code>rel</code> attribute value of <code>alternate</code>, indicating an alternative version.</p>

  <h3 id="translations">Translations</h3>

<p>Translations are a great candidate for document interlinking. It might for example be that one language version of a document is very successful and visitors who don’t speak that language would love to have that information available to them. By linking from the original to the alternative language version you’ll make it easier for readers of the alternative to understand and promote the content and possibly make the other language version as successful. The following example shows how you can define the other language versions (<a href="languageexample.html" title="links to translations of your document">languageexample.html</a>); note the syntax—it’s pretty intuitive:</p>

<pre><code>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0 1//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Multiple Languages example&lt;/title&gt;
  &lt;link rel=&quot;contents&quot; title=&quot;table of contents&quot; href=&quot;toc.html&quot;&gt;
  &lt;link rel=&quot;next&quot; title=&quot;next: chapter one&quot; href=&quot;chapter1.html&quot;&gt;
  &lt;link rel=&quot;alternate&quot; title=&quot;The course in Dutch&quot; type=&quot;text/html&quot; hreflang=&quot;nl&quot; href=&quot;../nl/start.html&quot;&gt;
  &lt;link rel=&quot;alternate&quot; title=&quot;The course in German&quot; type=&quot;text/html&quot; hreflang=&quot;de&quot; href=&quot;../de/start.html&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Course example&lt;/h1&gt;
  &lt;p&gt;This would be the cover page of an article series or course&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;chapter1.html&quot; rel=&quot;next&quot;&gt;Let&#39;s start with Chapter One&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;ul&gt;
    &lt;li&gt;Other languages:
      &lt;uL&gt;
        &lt;li&gt;&lt;a href=&quot;../de/start.html&quot; lang=&quot;de&quot; hreflang=&quot;de&quot;&gt;Deutsch&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;../de/start.html&quot; lang=&quot;nl&quot; hreflang=&quot;nl&quot;&gt;Nederlands&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>There is much more to explore with offering an international version of a web site than this, and we are hoping to provide a dedicated tutorial on this subject later on in the course. You might have noticed the attributes <code>hreflang</code> and <code>lang</code> that you might not have seen before. The <code>hreflang</code> attribute on links and anchors defines the human language of the linked document and the <code>lang</code> attribute defines the language of the text inside the element that has this attribute. This is very important for accessibility as text-to-speech software needs to switch the pronounciation voice from language to language.</p>

<p>Different languages have obviously been around since the Internet first existed (and thousands of years before that), but there is another type of alternative web page that you’ll see a lot as you trawl the web—feeds (eg RSS feeds). These are very popular, especially for documents that change constantly, such as news sites. I’ll look at these next.</p>

  <h3 id="feeds">Feeds</h3>

<p>A feed is a document containing condensed information detailing the new additions to your site in chronological order. Users can subscribe to it and get to know what has changed on your site recently without having to visit it. They do this by using tools like feed readers, eg <a href="http://reader.google.com" title="googles web based feed reader">Google Reader</a>, <a href="http://www.netvibes.com" title="netvibes online feed reader">Netvibes</a> or <a href="http://www.bloglines.com/">Bloglines</a>. Some modern browsers (such as Opera) and e-mail clients (such as Mac Mail, or Outlook on Windows) can also process and display feeds. You can recognize that a web site offers a feed by the RSS icon next to the location as shown in Figure 2:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/95-supplementary-more-about-the-document-head/morehead-figure2.gif" alt="Screenshot of the Opera browser showing a RSS icon in the navigation bar" /></p>
<p class="comment">Figure 2: Opera shows an orange RSS icon next to the location of web sites that offer a feed.</p>

<p>Feed pages are either structured using HTML or an XML format like RSS or Atom, and they are hardly ever generated by hand. Most of the time personal publishing systems will do that work for you and all you need to do to offer the world a feed of your site is link to the XML document with the correct meta element in the head of your document. The following is an excerpt from my blog at <a href="http://wait-till-i.com">http://wait-till-i.com</a> and points to the RSS feed (<a href="feedexample.html" title="RSS feed example">feedexample.html</a>):</p>

<pre><code>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;link rel=&quot;alternate&quot; type=&quot;application/rss+xml&quot; title=&quot;Wait till I come! RSS Feed&quot; href=&quot;http://www.wait-till-i.com/feed/&quot;&gt;
  &lt;title&gt;Wait till I come!&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Example of an RSS feed&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Supplying a feed makes sense for content-heavy web sites that change very often (like blogs or photo sites), and by using a feed reading tool and subscribing to feeds you can cut down on a lot of your surfing and research time.</p>
<p>If you don’t update your site that often but you have a lot of content and want people to have a visual reminder of your web site, then you might want to consider using a shortcut icon to stand out in people’s bookmark lists. This is what I’ll cover in the section below.</p>

  <h2 id="favicons">Making bookmarking more fun—using favicons</h2>

<p>One last subject I’ll cover here is shortcut icons or favicons. These are small images with a file format of .ico—if you place one on your web server, you can use it to show a small icon next to the entry of your web site in a visitor’s bookmark list, as shown in Figure 3:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/95-supplementary-more-about-the-document-head/morehead-figure3.gif" alt="Screenshot of bookmark list with icons next to the entries" /></p>
  <p class="comment">Figure 3: Icons next to a bookmark make it easier to remember the site. You can add one of these by using a shortcut-icon meta element.</p>


<p>The biggest obstacle to adding your shortcut icon is actually creating it in the right format as not many graphics creation packages support the ico format. One option is to use the free online tool <a href="http://www.genfavicon.com/" title="genfavicon icon generator">genfavicon</a>. Once you have it, adding it to your document is as easy as adding another meta element with a <code>rel</code> value of “Shortcut Icon”, as shown in the following example (<a href="favicon-example.html" title="favicon example">favicon-example.html</a>):</p>

<pre><code>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;Shortcut Icon example&lt;/title&gt;
  &lt;link rel=&quot;Shortcut Icon&quot; href=&quot;favicon.ico&quot; type=&quot;image/x-icon&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Example of a shortcut icon&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>If you open this document in a browser it should show the Opera icon next to the address in the location toolbar. If you bookmark it, the same icon will appear next to the bookmark.</p>

  <h2 id="summary">Summary</h2>
<p>That’s all for this article, and for the <code>head</code> section of an HTML document. There are other things I could cover, but they tend to be fairly advanced subjects, and often not a good idea—what I have covered here, and in <a href="http://dev.opera.com/articles/view/13-the-html-head-element/" title="The HTML head element">Article 13</a>, should give you all you need to get on. In this article I covered:</p>
<ul>
  <li>Defining document relationships with the <code>rel</code> and <code>rev</code> attribute in <code>link</code> elements</li>
  <li>Linking to alternative versions of the same document like translations or feeds</li>
  <li>Adding a shortcut icon to documents that shows in bookmarks and in browser tabs</li>
</ul>
  
  <h2 id="exercises">Exercise questions</h2>

<ul>
  <li>Why does it make sense to define link relationships when they are not displayed?</li>
  <li>How would you link to a search page?</li>
  <li>What use is offering a feed to your visitors? What <code>rel</code> value do you use to link to one?</li>
  <li>What do you need to make sure of when you link to documents in other languages?</li>
  <li>If you open the example documents in a text editor you’ll find another <code>meta</code> element we haven’t discussed here with an attribute of <code>content-type</code>, and something called <code>utf-8</code>. What is <code>utf-8</code>?</li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/95-supplementary-more-about-the-document-head/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />
<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>
</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a> and is available on many a social network as &#x201C;codepo8&#x201D;.</p> title=
