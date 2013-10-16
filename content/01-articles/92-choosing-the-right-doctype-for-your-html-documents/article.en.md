Title: Choosing the right doctype for your HTML documents
----
Date: 2008-07-08 07:13:49
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
<li class="prev"><a href="http://dev.opera.com/articles/view/13-the-html-head-element/" rel="prev" title="link to the previous article in the series">Previous article—The HTML &lt;head&gt; element</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/" rel="next" title="link to the next article in the series">Next article—Marking up textual content in HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>Introduction</h2>



<p><a href="http://dev.opera.com/articles/view/13-the-html-head-element/" rev="prev" alt="the html head element">Article 13</a> dissected the anatomy of the <code>head</code> section of an HTML document, looking briefly at what different things can be contained in the head, and what they do. In this article I will look at the doctype in a lot more detail, showing what it does and how it helps you validate your HTML, how to choose a doctype for your document, and the XML declaration, which you’ll rarely need, but will sometimes come across.</p>

<ul>
<li><a href="#doctypefirst">The doctype comes first</a></li>
<li><a href="#doctypeswitching">Doctype switching and rendering modes</a></li>
<li><a href="#validation">Validation</a></li>
<li><a href="#choosingdoctype">Choosing a doctype</a></li>
<li><a href="#xmldeclaration">The XML declaration</a></li>
<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>
<li><a href="#furtherreading">Further reading</a></li>
</ul>



<h2 id="doctypefirst">The doctype comes first</h2>


<p>The very first thing you should make sure to have in any HTML document you create is a DTD declaration. If you haven’t heard anyone mention a DTD declaration before, don’t worry. For the sake of making things easier, it is often referred to as a “doctype”, which is what I’ll call it in the rest of this article.</p>

<p>You might be wondering what a “DTD” or doctype is. DTD is short for “Document Type Definition”, and among other things it defines what elements and attributes are allowed to be used in a certain flavor of HTML—yes that’s right, there are different versions of HTML in use on the Web today, but don’t let this worry you—you’ll only really need to concern yourselves with one.</p>

<p>The doctype is used for two things, by different kinds of software:</p>

<ol>

<li>Web browsers use it to determine which rendering mode they should use (more on rendering modes later).</li>

<li>Markup validators look at the doctype to determine which rules they should check the document against (more on that later as well).</li>

</ol>

<p>Both of these will affect you, but in different ways, which will be explained later on in this article.</p>

<p>Here is an example:</p>

    <pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;

        &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</pre>

<p>Now, that may look like a lot of nonsense to you, so let me offer a somewhat simplified explanation of how it is constructed. For a much more detailed look at exactly what each character refers to, see the article <a href="http://www.blooberry.com/indexdot/html/tagpages/d/doctype.htm" title="detailed analysis of doctypes">!DOCTYPE</a>.</p>

<p>The most important parts of the doctype are the two strings delimited by quotes. <code>&quot;-//W3C//DTD HTML 4.01//EN&quot;</code> states that this is a DTD document published by the W3C, that the DTD describes HTML version 4.01, and that the language used in the DTD is English.</p>

<p>The second string, <code>&quot;http://www.w3.org/TR/html4/strict.dtd&quot;</code>, is a URL that points to the DTD document used for this doctype.</p>

<p>Even though a doctype may look a bit strange, it is required by the HTML and XHTML specifications. If you don’t include one you will get a validation error when you check the syntax of your document with the W3C Markup validator or other tools that check HTML documents for errors. Some web browsers even contain such functionality by default, while others can have it added by installing an extension.</p>

<h2 id="doctypeswitching">Doctype switching and rendering modes</h2>

<p>If you do not provide a doctype, browsers will handle and render the document anyway—they need to make an attempt to render all sorts of strange things that they come across on the Web, so they can’t always be very picky. However, without a doctype, the results may not look like you intended, because of something called “doctype sniffing” or “doctype switching”.</p>

<p>Most web browsers released in the 21st century look at the doctype of any HTML documents they encounter and use that to decide whether the author of the documents took care to write their HTML and CSS properly according to web standards.</p>

<p>If they find a doctype that indicates that the document is coded well, they use something called “Standards mode” when they layout the page. In standards mode, browsers generally try to render the page according to the CSS specifications—they trust that the person who created the document knew what they were doing.</p>

<p>On the other hand, if they find an outdated or incomplete doctype, they use “Quirks mode”, which is more backwards compatible with old practices and old browsers. Quirks mode assumes that the document is old or that it has not been created with web standards in mind—it means that the web page will still render, but it will take a lot more processing power to do so, and you’ll likely get a strange or ugly result, which you weren’t quite expecting.</p>

<p>The differences are mostly related to how CSS is rendered, and only in a few cases about how the actual HTML is treated. As a web designer or developer, you will get the most consistent results by making sure that all browsers use their Standards rendering mode, hence you should stick to web standards, and use a proper doctype!</p>

<h2 id="validation">Validation</h2>

<p>As I mentioned earlier, the doctype is also used by validators, which you will learn more about later in this article series. For now, all you need to know is that a validator is used to check that the syntax of your HTML document is correct and does not contain any mistakes. The validator programs look at the doctype you have used to determine what rules to use. It’s a bit like telling a spell checker which language a document is written in. If you don’t tell it, it won’t know which spelling and grammar rules to use.</p>

<h2 id="choosingdoctype">Choosing a doctype</h2>

<p>So, now that you know that you need to insert a doctype and what it is used for, how will you know which one to choose? There isn’t just one, after all, there are many. You could even create your own if you feel up to something more advanced. But I’m not going to mention a whole lot of different doctypes. I’ll try to keep things simple and settle for two.</p>

<p>If your document is HTML, use this:</p>

     <pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;

       &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</pre>

<p>If your document is XHTML, use this:</p>

     <pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot;

       &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;</pre>

<p class="comment">Note: &quot;Real&quot; XHTML should be delivered to the web browser as XML, but the details of how and when to do that, and the implications it has, is beyond the scope of this particular article.</p>

<p>Both of these doctypes will ensure that browsers use their Standards mode when dealing with your document. The most noticeable effect that will have on your work is that you will get more consistent results when styling the document with CSS. To see some of the other doctypes that you could use, the W3C have published a list of <a href="http://www.w3.org/QA/2002/04/valid-dtd-list.html" title="W3C recommended DTDs list">Recommended DTDs to use in your Web document</a>.</p>

<p>You may notice that both of the doctypes I mention here are called “Strict”. While that may sound a bit scary, it isn’t.</p>

<p>There are strict and transitional flavours of both HTML and XHTML. Strict in this case means that the doctypes allow less presentational markup than the transitional doctype does. The presentational markup that isn’t allowed shouldn’t really be there anyway, since you should use HTML to define the structure and meaning of your documents, and CSS to determine how they are presented. Using a strict doctype will help you with that, since the validator will alert you of any presentational elements or attributes that have sneaked its way into your code.</p>

<h2 id="xmldeclaration">The XML declaration</h2>

<p>I stated earlier that the doctype needs to be the very first thing in your HTML documents. Well, that is in fact a slightly simplified version of the truth. There is also the XML declaration to consider.</p>

<p>You may have seen a code snippet that looks like this before the doctype in some XHTML documents:</p>

     <pre>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</pre>

<p>This is called an XML Declaration, and when it is present it needs to be inserted <em>before</em> the doctype.</p>

<p>Internet Explorer version 6 has a problem with that—this causes it to switch into Quirks mode, and as I explained earlier you most likely do not want that.</p>

<p>Luckily the XML declaration is not required unless you are really sending your XHTML documents as XML to web browsers (see the sidenote about XHTML) *and* you are using a different character encoding than UTF-8 *and* your server is not sending an HTTP header that determines the character encoding.</p>

<p>The probability of all that happening all at once is quite slim, so the easiest way to solve the Internet Explorer problem is to simply omit the XML declaration. Don’t forget the doctype though!</p>

<h2 id="summary">Summary</h2>

<p>Always include one of the doctypes mentioned here as the very first thing in all of your HTML documents. It will make sure that validators know what version of HTML you are using, so they can correctly report any mistakes you have made. It will also make sure that all recent web browsers use their Standards mode, which will give you more consistent results when you are styling the document with CSS.</p>


<h2 id="exercises">Exercise questions</h2>

<p>Here a few questions that you should be able to answer after reading this:</p>

<ul>

<li>What are the two main purposes of including a doctype in HTML documents?</li>

<li>What are the benefits of using a strict doctype instead of a transitional one?</li>

<li>Why is the XML declaration problematic?</li>

<li>One doctype I haven’t mentioned in this article is the frameset doctype—research what this does, and why it shouldn’t be used.</li>
</ul>

<h2 id="furtherreading">Further reading</h2>

<ul>
<li><a href="http://www.w3.org/QA/Tips/Doctype">Don’t forget to add a doctype</a></li>

<li><a href="http://www.w3.org/QA/2002/04/valid-dtd-list.html">Recommended DTDs to use in your Web document.</a></li>

<li><a href="http://www.alistapart.com/articles/doctype/">Fix Your Site With the Right DOCTYPE!</a></li>

<li><a href="http://hsivonen.iki.fi/doctype/">Activating the Right Layout Mode Using the Doctype Declaration</a></li>

<li><a href="http://www.opera.com/docs/specs/doctype/">The Opera 9 DOCTYPE Switches</a></li>

<li><a href="http://www.quirksmode.org/css/quirksmode.html">Quirks mode and strict mode</a></li>

<li><a href="http://24ways.org/2005/transitional-vs-strict-markup">Transitional vs. Strict Markup</a></li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/13-the-html-head-element/" rel="prev" title="link to the previous article in the series">Previous article—The HTML &lt;head&gt; element</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/" rel="next" title="link to the next article in the series">Next article—Marking up textual content in HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>
<h2>About the author</h2>

<img src="http://forum-test.oslo.osa/kirby/content/articles/92-14-choosing-the-right-doctype-for-your-html-documents/rogerjohansson.jpg" alt="Picture of the article author Roger Johansson" class="right" />

<p>Roger Johansson is a web professional with a passion for web standards, accessibility, and usability. He spends his days developing websites at Swedish web consultancy <a href="http://www.netrelations.se/">NetRelations</a>, and his evenings and weekends writing articles for his personal sites <a href="http://www.456bereastreet.com/">456 Berea Street</a> and <a href="http://www.kaffesnobben.com/">Kaffesnobben</a>.</p>

<p>When he is not stuck in front of a computer, Roger can often be found either in his garden, getting dirt under his fingernails, or in the wilderness, fishing.</p>
