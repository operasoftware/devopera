Title: HTML links - let's build a web!
----
Date: 2008-07-08 07:15:38
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
<li class="prev"><a href="http://dev.opera.com/articles/view/17-images-in-html/" rel="prev" title="link to the previous article in the series">Previous article—Images in HTML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/19-html-tables/" rel="next" title="link to the next article in the series">Next article—HTML tables</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>In this tutorial you’ll learn all about one of the most ground-breaking inventions in the history of the web—links. Links allow the reader of a document to follow them to another document and jump from server to server without having to disconnect and connect all over again. A lot has happened since they were first invented but one thing stayed the same: links are a very important part of the web experience and you can make it easy or hard for your web site’s visitors depending on how you use them. </p>

<p>After you’ve gone through this article you’ll know how to create links that are easy to understand and function in any environment. Furthermore you’ll learn how linking affects your search engine popularity and you’ll get some tips about wording links. As usual, <a href="links_code.zip" title="code examples for this article">there is an accompanying zip file to this tutorial</a>, which contains several files I’ll refer to as we go along. The structure of the article is as follows:</p>

<ul>
<li><a href="#whatarelinks">What are links?</a></li>
<li><a href="#anchoranatomy">The anatomy of an anchor link</a></li>
<li><a href="#linkortarget">Link or target? The <code>name</code> and <code>href</code> attributes</a></li>

<li><a href="#noambiguity">Don’t leave any ambiguity about what you’re linking to</a>
<ul>
<li><a href="#extrainfotitle">Providing extra information with a <code>title</code> attribute</a></li>
<li><a href="#linktononhtml">Linking to non-HTML resources—don’t make people guess</a></li>
<li><a href="#externalinternal">External vs internal links</a></li>
</ul>
</li>

<li><a href="#badhabits">Frames and popups—just say no</a></li>
<li><a href="#linkbenefits">Benefits of outbound and inbound links</a></li>
<li><a href="#linkwording">Link wording</a></li>
<li><a href="#linkstyling">Link styling</a></li>
<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>


</ul>
<h2 id="whatarelinks">What are links? </h2>
<p>Links are parts of a web site (usually created using HTML, but not always) that point to other resources—other HTML documents, text files, PDFs, etc. There are links that should be followed automatically by the browser, created using <code>link</code> elements (you’ve already encountered some of those in earlier articles—they were used to import CSS files into an HTML document) and then there are links that are optional for the user to activate. These are called <strong>anchors</strong> and you can add them to the document using the <code>a</code> element. </p>
<h2 id="anchoranatomy">The anatomy of an anchor link</h2>
<p>You can turn any inline element in the document into an anchor link by adding an <code>a</code> element around it. For example, in the following HTML document the text <em>Yahoo Developer Network</em> gets turned into a link (<a href="linkexample.html" title="basic link example">linkexample.html</a>). </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;Link Example&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;A link to the YDN&lt;/h1&gt;
  &lt;p&gt;&lt;a href=&quot;http://developer.yahoo.com&quot;&gt;Yahoo Developer Network&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Visitors activating this link (either by clicking it with a mouse, or activating it with the keyboard or voice in some cases) will leave the current site and go to the YDN. There are more changes happening to the link itself, and we’ll see about them later when we talk about link styling. </p>

<p>The anchor has several attributes you can add: </p>
<ul>
<li><code>href</code>—the resource it points to (either an external file or an anchor ID).</li>
<li><code>id</code>—the anchor ID if the anchor is a target and not a link.</li>
<li><code>title</code>—extra information about the external resource.</li>
</ul>

<p>Let’s go through the most important attributes first and then talk about what you can do to make things easy to grasp for your visitors. </p>

<h2 id="linkortarget">Link or target? The <code>id</code> and <code>href</code> attributes</h2>

<p>An <code>a</code> element can play several roles depending on which attributes are set. The most common attribute you’ll use is the <code>href</code> attribute, which defines what resource the link points to. This attribute can contain different values: </p>
<ul>
<li>A URL in the same folder (help.html), relative to the current folder (for example “../../help/help.html”—2 dots means “go up one level in the site folder hierarchy”) or absolute to the server root (for example “/help/help.html”—having a forward slash at the front of the address means the address starts at the root of the computer the page is on)</li>
<li>A URL on a different server altogether (for example “http://wait-till-i.com” or “ftp://ftp.opera.com/” or “http://developer.yahoo.com/yui”).</li>
<li>A fragment identifier or id name preceded by a hash (for example “#menu”). This points to a target inside the same document.</li>
<li>A mixture of URLs and fragment identifiers—you can link directly to a section of a different document by pointing the <code>href</code> attribute to a URL followed by a fragment identifier (for example “http://developer.yahoo.com/yui/#cheatsheets”).</li>
</ul>

<p> Any of these will make it a link as it points to somewhere else. On the other hand an <code>id</code> attribute will make it an anchor in the page—something another link points to. This is a bit confusing as both use the anchor element (<code>a</code>). To make it easy to remember think of it like this: an <code>id</code> attribute makes a link an anchor and you can use it to link to specific document sections. The following HTML has examples of all the different types of links in it (<a href="linkexamples.html" title="different link examples">linkexamples.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;Different Link Example&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;linkexamplestyles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Different Link examples&lt;/h1&gt;

  &lt;h2&gt;Example of in-page navigation with fragment identifiers, links and anchors&lt;/h2&gt;
  &lt;div id=&quot;nav&quot;&gt;
    &lt;ul id=&quot;toc&quot;&gt;
      &lt;li&gt;&lt;a href=&quot;#sec1&quot;&gt;Section One&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#sec2&quot;&gt;Section Two&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#sec3&quot;&gt;Section Three&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#sec4&quot;&gt;Section Four&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;#sec5&quot;&gt;Section Five&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;  
    
  &lt;div id=&quot;content&quot;&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec1&quot;&gt;Section #1&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Back to menu&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec2&quot;&gt;Section #2&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Back to menu&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec3&quot;&gt;Section #3&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Back to menu&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec4&quot;&gt;Section #4&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Back to menu&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;h2&gt;&lt;a id=&quot;sec5&quot;&gt;Section #5&lt;/a&gt;&lt;/h2&gt;
      &lt;p&gt;&lt;a href=&quot;#toc&quot;&gt;Back to menu&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;h2&gt;Some other link examples&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;http://developer.yahoo.com&quot;&gt;Yahoo Developer Network&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;http://dev.opera.com/articles/view/the-freelancing-business-part-1-pricing/#marketing&quot;&gt;Tips on marketing yourself&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;ftp://get.opera.com/pub/opera/win/&quot;&gt;Download different Opera versions&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;http://farm1.static.flickr.com/56/188791635_0b8bdd808d.jpg?v=0&quot;&gt;Photo of my book&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;

&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Open this file in your browser of choice and experiment with it. You’ll find that activating any of the links in the first list will jump to the appropriate section of the document. This is because they are connected by the same fragment identifier—the first link in the list for example has an <code>href</code> attribute of <code>#sec1</code>, which is the same as the ID value of the link inside the first <code>h2</code> element of the content. This is all you need to do to connect two anchor elements in a document—use the same value preceded by a hash if you link to it in an <code>href</code> attribute. You might also have realized that the URL in the location bar of your browser changed and now shows the fragment identifier at the end of it, which means visitors can bookmark this section or email the link to other people to send them exactly where they should go. </p>

<p>However, if you activate any of the “Back to menu” links, the same functionality occurs. How is that possible? Fragment identifiers can be any element with an ID. To recap: </p>

<ul>
<li>anchor links can have a fragment identifier as the value of the <code>ref</code> attribute—this fragment identifier must start with a hash sign (#).</li>
<li>When activated, this link will jump to any HTML element with an <code>id</code> of this value. The IDs on each page must be unique.</li>
<li>IDs follow certain naming conventions. Most importantly is that they must start with an alphanumeric character and must not have any spaces in them.</li>
</ul>

<p>That covers the menu and the different sections in the example but what about the other links? If you try them out you’ll see that they point to different targets—one goes to another site, another displays a photo and the third one shows a specific section of another web page (found by jumping to a specific ID). If all of that worked for you, great—but what if you or your browser couldn’t understand some of these resources? </p>
<h2 id="noambiguity">Don’t leave any ambiguity about what you’re linking to</h2>
<p>The most important thing to remember about links is that they are a substantial part of your relationship with your visitors. They trust that when you offer them a link, they can follow it and get good, relevant information. If your links don’t work because the linked resource is not available or in a format the visitor cannot consume you betrayed that trust and lost credibility. Don’t let that happen.</p>
<h3 id="extrainfotitle">Providing extra information with a <code>title</code> attribute</h3>
<p>Like almost any other HTML element you can add a <code>title</code> attribute to an <code>a</code> element to add some extra information. Browsers will show a so called tooltip when visitors hover their mouse cursor over the link. This tooltip then tells them what the link is about. For example you could give a small introduction to the content and location of the linked document (<a href="titleexample.html" title="title attribute example">titleexample.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;Adding extra information with a title attribute&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;linkexamplestyles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Adding extra information with a title attribute&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li&gt;Find more information on the &lt;a title=&quot;The Yahoo Developer Network is the main hub for all the developer tools Yahoo offers, including the Yahoo User Interface Library (YUI) and the Design Patterns repository&quot; href=&quot;http://developer.yahoo.com&quot;&gt;Yahoo Developer Network&lt;/a&gt;.&lt;/li&gt;
  &lt;/ul&gt;

  &lt;/body&gt;
&lt;/html&gt;</pre>

<p class="comment">Figure 1: Adding a title attribute shows the information as a tooltip when visitors hover over the link. </p>

<p>However, you cannot expect visitors to have enough patience and hand-eye coordination to rely on this for crucial information. Visually impaired users, who cannot see the page at all, are very likely not to be able to reach this information. While screen readers have the option to read out <code>title</code> attributes for the end user it is turned off by default—which is why you should never use the <code>title</code> attribute for crucial information about the link. Crucial information might be: </p>

<ul>
<li>Linking to non-HTML resources like PDF files, images, videos, sound files or downloads.</li>
<li>Leaving the current site and linking to another server (external vs internal links).</li>
<li>Linking to a document that’ll open in a different frame or a popup.</li>
</ul>
<h3 id="linktononhtml">Linking to non-HTML resources—don’t make people guess</h3>
<p>It can be very annoying when you click on a link and your browser does not know what to do with what the link you clicked on points to. It is pretty common however to see web sites link to images, PDF documents and videos without warning their visitors to be prepared. Videos especially are very often a cause for browser crashes. Furthermore, the resource might be on the larger side (20MB PDF anyone?) which means that visitors might prefer to download it rather than opening it inside the browser and add to its already hefty memory consumption, or just not access it at all. </p>

<p>One of the biggest success factors of a web product is not keeping people guessing what happens when they perform an action and instead tell them flat out what effects their action will have. In the case of links all you need to do to prevent a lot of frustration is to tell your visitors what the linked resource is. Here are some examples (<a href="linkingnonhtml.html" title="telling your visitors where they are linking to">linkingnonhtml.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;title&gt;Linking non-HTML resources&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;linkexamplestyles.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Linking non-HTML resources&lt;/h1&gt;

  &lt;ul&gt;
    &lt;li&gt;Find more information on the &lt;a href=&quot;http://developer.yahoo.com&quot;&gt;Yahoo Developer Network site (external)&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;Download the &lt;a href=&quot;http://www.wait-till-i.com/stuff/JavaScript-DOM-Cheatsheet.pdf&quot;&gt;Dom Cheatsheet (PDF, 85KB)&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;Pick and &lt;a href=&quot;ftp://get.opera.com/pub/opera/win/&quot;&gt;download different Opera versions from their FTP (external)&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;Check out a &lt;a href=&quot;http://farm1.static.flickr.com/56/188791635_0b8bdd808d.jpg?v=0&quot;&gt;Photo of my book (JPG, 200KB)&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;

  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>By providing such information about the linked file and its size you leave the decision of what to do with it with your visitors rather than expecting them to have certain browser settings or installed software. If you mix that with clever styling you can even make it look pretty and intuitive. If you want to be very safe, also offer a help section that explains what the different file formats are and where you could get the software needed to display them. </p>

<h3 id="externalinternal">External vs. internal links</h3>
<p>One of the biggest fears of business decision makers when it comes to their company’s web sites is people leaving prematurely. This is often the reason for never offering third party links (unless the third parties pay money for the privilege of having web traffic directed towards them). I’ll come back to this error in judgment later on; for now let’s talk about what people do to avoid visitors leaving their site and how these measures affect the site’s success. </p>
<h2 id="badhabits">Frames and popups—just say no</h2>
<p>The fear of losing visitors to other sites while still wanting to link to them gave us some inventions in web development that have been a thorn in the side of usable sites for years: frames and popups. </p>
<p>Using HTML frames means you separate the page shown in the browser into several different documents. The benefit is that the document seemingly stays the same even when you load parts of it either from your own server or from third party servers. This is where the usefulness ends however—frames are a terrible user experience and actually harmful: </p>
<ul>
<li>Search engines can never index a whole page but instead might show up parts of a page in search results that don’t make sense out of context.</li>
<li>Visitors cannot bookmark the page—the next time they open their bookmark they’ll get the initial state of the frameset and not the page as they left it.</li>
<li>Visitors dependent on assistive technology have a very hard time navigating around framesets.</li>
<li>Third party sites might not like to be shown inside a frameset and use “framebreaker” scripts that replace framesets with the real URL when you try to embed them. This is to stop criminals luring Internet users into entering for example credit card information into a web site that seemingly looks like a bank (so called “phishing”).</li>
</ul>
<p>Links inside a frameset use the <code>target</code> attribute of the anchor to target the correct frame. Each frame in a frameset gets a certain name and activating the link would open the document defined in the <code>href</code> attribute in that frame. If the frameset is not available (for example when a visitor found the document with the links via a search engine) each link opens in a new browser instance. </p>
<p>Opening a new browser instance is another common way to link to third party sites—either with a scripted pop-up window or with a <code>target</code> attribute with the value of <code>_blank</code>. The fact that every modern browser comes with a pop-up blocker should give an indication of how safe it is to rely on this technique in this day and age. It’s not!</p>
<p>In short: <strong>do not use the <code>target</code> attribute when you create links, unless you really know what you are doing</strong>. It is an outdated idea anyhow—these days most browsers have tabbed interfaces, so users can open third party sites in the background for later reading while they stay on your site. Under certain circumstances you may want to indicate the difference between external and internal links, but always leave it to the discretion of the visitor what they want to do with them.</p>

<h2 id="linkbenefits">Benefits of outbound and inbound links</h2>
<p>There are several good reasons for linking to third party sites even when they are competitors.</p>
<ul>
<li>It gives you credibility in the eyes of your visitors—you are so sure of the quality of your content that you don’t shy away from the competition.</li>
<li>It is an opportunity to deliver a full service—you can link to content and articles or even products on other sites that you don’t cover but that might be of interest for those visitors who want to dive deeper into the topic at hand.</li>
<li>You can prove a point by building on an older article by a third party and offering a better or different solution and referencing the old article as a proof via a link.</li>
</ul>
<p>The usefulness of inbound links (links pointing from a third party site to yours) is less debated. The more often that valid and high quality sites link to yours with relevant keywords, the higher you’ll rank in search engines such as Google. Before that happens however you need to prove that you don’t shy away from linking to others either. </p>
<p>The relevant keywords bring us to another very important part of creating good links: how to word them. </p>

<h2 id="linkwording">Link wording</h2>
<p>I’ve covered this partly in the section about linking to non-HTML resources, but it is good to remind ourselves that links are not only part of the page copy but also interactive elements in the document. </p>
<p>Some assistive technologies will offer a list of links instead of the whole document to allow visitors to quickly navigate their way through it, which means that you need to make sure that your link texts make sense outside the context they are in. You can easily check this in Opera by opening any web site and choosing Tools &gt; Links from the menu or pressing <kbd>Ctrl + Shift + L</kbd>. You’ll get a new tab that shows all the links in the document and where they point to. </p>
<p>This means you should make sure not only that all the link texts make sense, but also that there are not links that have the same wording but point to different resources. The classic mistake here is “click here” links, worded for example like “To download the latest version of our tool click here”. It is much better to use a link text that explains what it points to—in this case “You can download the latest version of our tool and try it out for yourself”.</p>
<p>The same applies to “more” links. You’ll find these in news sites where you get a heading and a teaser text and a “more” or “full story” link to follow. The solution to this problem is to either use a linked “more” image and give it a unique alternative text or to add a span inside the link after the “more” and hide it with CSS. You’ll hear more about these tricks in the tutorial about menus and navigation later in the course. </p>

<h2 id="linkstyling">Link styling</h2>
<p>We’re not quite at CSS yet with this course, but it is useful to consider at this point that the way links look is very important and there are several different link states to consider. The link states (which later on relate to CSS pseudo-selectors—this sounds complex, but it isn’t) are: </p>
<ul>
<li><code>link</code>—the default state—it defines what links should look like in a certain part of the document. By default, unvisited links are coloured blue.</li>
<li><code>visited</code>—the style of a link that was already visited before (and might already be in the browser cache). By default, already visited links are colored purple.</li>
<li><code>hover</code>—the style of a link whilst the mouse cursor is hovering over it.</li>
<li><code>active</code>—the style of the link while it is activated, ie while the connection to the other site is in progress; it is also the style of the last activated link when you arrive at the document by going back in your browser.</li>
</ul>

<h2 id="summary">Summary</h2>
<p>We covered a lot this time, but it is very important to remember how links work and what they should do. You will learn a lot of tricks and techniques in your career as a web developer to override this default behaviour and I hope you’ll stop and wonder if what you are trying to do is really necessary. </p>
<p>I talked about:</p>
<ul>
<li>The anatomy of the <code>a</code> element and its (non-deprecated) attributes</li>
<li>The difference between <code>a</code> elements as links (with an <code>href</code> attribute) and as anchors (with a <code>name</code> attribute)</li>
<li>The need for an anchor id to be unique</li>
<li>The necessity to tell visitors what to expect when they follow a link (what format is the file and how big is it) </li>
<li>How to add information via the title attribute that gets displayed as a tool-tip – and why this is not a safe way of providing crucial information</li>
<li>The difference between external (pointing to third party sites) and internal (pointing to documents on the same server) links</li>
<li>Outdated practices like popups and frames and why you should avoid them</li>
<li>The benefits of linking to, and getting linked to by, other sites</li>
<li>How to word links properly so that they make sense out of context, and why this is necessary</li>
<li>The background behind basic link styling.</li>
</ul>
<p>With this knowledge under your belt you should be able to write HTML documents that link properly and you are ready to go and think about menus and site navigation.</p>
<h2 id="exercises">Exercise questions</h2>
<ul>
<li>What is wrong with the following link: <code>&lt;a href=&quot;report.pdf&quot; title=&quot;report as PDF, 2.3MB&quot;&gt;get our latest report&lt;/a&gt;</code>?</li>
<li>What is the <code>target</code> attribute in links for and are there any good uses for it?</li>
<li>I’ve talked about link relationships and connections between links and anchors. Is there an attribute for links that describes relationships between documents, too?</li>
<li>How can you write a link that sends the visitors to an element further down the page when they click it? What do you need to make sure of beforehand?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/17-images-in-html/" rel="prev" title="link to the previous article in the series">Previous article—Images in HTML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/19-html-tables/" rel="next" title="link to the next article in the series">Next article—HTML tables</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/100-18-html-links-lets-build-a-web/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />

<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>
    
