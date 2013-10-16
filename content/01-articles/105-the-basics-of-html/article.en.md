Title: The basics of HTML
----
Date: 2008-07-08 07:12:57
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
<li class="prev"><a href="http://dev.opera.com/articles/view/11-typography-on-the-web/" rel="prev" title="link to the previous article in the series">Previous article—Typography on the web</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/13-the-html-head-element/" rel="next" title="link to the next article in the series">Next article—The HTML &lt;head&gt; element</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

    <h2>Introduction</h2>
    
        <p>In this article you will learn the basics of HTML—what it is, what
        it does, its history in brief, and what the structure of an HTML
        document looks like.  The articles that follow this one will look at
        each individual part of HTML in much greater depth. The structure of this article is as follows:</p>
    
    <ul>
    <li><a href="#whatishtml">What HTML is</a></li>
    <li><a href="#htmllooks">What HTML looks like</a></li>
    <li><a href="#htmlhistory">The history of HTML</a></li>
    <li><a href="#htmlstructure">The structure of an HTML document</a></li>
    <li><a href="#htmlsyntax">The syntax of HTML elements</a></li>
    <li><a href="#blockinline">Block level and inline elements</a></li>
    <li><a href="#characterreferences">Character references</a></li>
    <li><a href="#summary">Summary</a></li>
    </ul>
    
        <h2 id="whatishtml">What HTML is</h2>
        
        <p>Most desktop applications that read and write files use a special file
        format. For example, Microsoft Word understands “.doc” files and
        Microsoft Excel understands “.xls”. These files contain the
        instructions on how to rebuild the document the next time you open 
        it, what the contents of that document are, and “metadata” about the
        article such as the author, the date the document was last modified,
        even things such a list of changes made so you can go back and forth
        between versions.</p>

        <p>HTML (“HyperText Markup Language”) is a language to describe the 
        contents of web documents. It uses a special syntax containing
        markers (called “elements”) which are wrapped around the text within
        the document to indicate how user agents should interpret that
        portion of the document.</p>
        
        <p>The technical term “user agents” is used here rather than “web
        browsers”. A user agent is any software that is used to access web
        pages on behalf of users. There is an important distinction to be made
        here—all types of desktop browser software (Internet Explorer, Opera,
        Firefox, Safari, Chrome etc.) and alternative browsers for other devices (such as the Wii Internet channel,
        and mobile phone browsers such as Opera Mini and WebKit on the iPhone) 
        are user agents, but not all user agents are
        browser software. The automated programs that Google and Yahoo! use
        to index the web to use in their search engines are also user agents,
        but no human being is controlling them directly.</p> 
        
        <h2 id="htmllooks">What HTML looks like</h2>
        
       <p>HTML is just a plain textual representation of content and its 
        general meaning. For example, the code for the “The Purpose of HTML” header above
        looks like:</p>
        
            <pre>&lt;h2 id=&quot;htmllooks&quot;&gt;What HTML looks like&lt;/h2&gt;</pre>
            
        <p>The “<code>&lt;h2&gt;</code>” part is a marker (which we refer to as a “tag”) that means
        “what follows should be considered a second level heading”. The
        “<code>&lt;/h2&gt;</code>” is a tag to indicate where the end of the second level
        heading is (which we refer to as a “closing tag”). The opening
        tag, closing tag and everything in between is called an “element”. 
        Many people use the terms element and tag interchangeably however, which is not strictly correct. The <code>id=&quot;htmllooks&quot;</code> is an attribute; you&#39;ll learn mroe about these later on.</p>
        
        <p>In most browsers there is a “Source” or “View Source” option, commonly under
        the “View” menu. If you have the option, choose it now and spend
        some time looking at the HTML source for this page.</p>
        
   <h2 id="htmlhistory">The history of HTML</h2>
    
        <p>In the article <a href="http://dev.opera.com/articles/view/2-the-history-of-the-internet-and-the-w/" title="the history of the web">The history of the internet and the web</a> you learned a little about how 
        the modern Web came about. When Tim Berners-Lee invented the World
        Wide Web, he created both the first web server and web browser and 
        <a href="http://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/MarkUp.html" title="The first ever version of HTML">the first version of HTML</a>.</p> 
        
        <p>Whilst HTML has changed considerably since the first days, a lot of
        the content of modern-day HTML is embodied in that first
        documentation and more than half of the “tags” described in the
        original “HTML tags” document still exist.</p>
        
        <p>As more people started writing web pages and alternatives to the 
        original browser software, more features were being added to HTML. 
        Many were adopted universally (such as the <code>img</code> element used to 
        insert an image into a document, first implemented in NCSA Mosaic).
        Some were more proprietary and really only used in one or two
        browsers. There was a growing need for standardisation—so that
        authors of other web browsing software had a document (called a
        “specification”) that definitively described to them what HTML 
        looked like so they could judge whether or not they were missing
        out on implementing some parts of HTML.</p>
        
        <p>The IETF (Internet Engineering Task Force—a standards body
        concerned with inter-operability across the internet) published a
        draft proposal of HTML in 1993. This expired without becoming a
        standard in 1994, but prompted the IETF to create a working group to
        look at HTML standardisation.</p>
        
        <p>In 1995, “HTML 2.0” was written, taking ideas from the original 
        HTML draft. An alternate proposal called HTML+ was also written by
        Dave Raggett, which was used as a basis for many of the new elements implemented by browsers (such as the method for inserting images into documents, pioneered by NCSA Mosaic).</p>
        
        <p>A draft of HTML 3.0 followed later that year, but work on that version
        was discontinued because of a lack of support for the direction from
        browser makers. HTML 3.2 dropped many of the new features of 3.0, and
        instead adopted many of the creations of the then-popular browsers
        Mosaic and Netscape Navigator.</p>
        
        <p>In 1997, the W3C published HTML 4.0 as a recommendation that adopted
        more browser-specific extensions but also attempted to rationalise and
        clean up HTML. This was done by marking various elements as 
        deprecated—which means the elements are obsolete and whilst they
        still exist in this version they will be removed in a later revision.
        This was to encourage better and more semantic use of HTML in 
        documents (described in more detail in <a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/" title="the web standards model">The web standards
        model</a> article).</p>
        
        <p>HTML 4.01 was published in 1999, with some errata noted in 2001. This
        is the latest version of HTML, although HTML 5 is currently being
        drafted.</p>
        
        <p>In 2000, the W3C also published the XHTML 1.0 specification, which was
        HTML re-structured to be a valid XML document.</p> 
        
    <h2 id="htmlstructure">The structure of an HTML document</h2>
        
        <p>The smallest valid HTML document possible would be something like this:</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;
&quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Example page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello world&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
            
        <p>The document first starts with a document type element, or doctype (described in
        more detail in the <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" title="choosing the right doctype">Choosing the right doctype…</a>). This describes which type of HTML
        is being used—so that browsers can determine how to interpret
        the document, and work out whether it is following the rules it says it is going to follow.</p>

        <p>After this, you can see the opening tag of the <code>html</code> element. This
        is a wrapper around the entire document. The closing <code>html</code> tag is the last
        thing in any HTML document.</p>
        
        <p>Inside the <code>html</code> element, there is the <code>head</code> element. This is a
        wrapper to contain information about the document (the metadata).
        This is described in more detail in <a href="http://dev.opera.com/articles/view/13-the-html-head-element/" title="article about the html head">the next article</a>. Inside the
        head is the <code>title</code> element, which defines the “Example
        page” heading in the menu bar.</p>
        
        <p>After the <code>head</code> element there is a <code>body</code> element, which is the
        wrapper to contain the actual content of the page—in this case,
        only a level-one header (<code>h1</code>) element, which contains the text “Hello world.”
        And that’s our document in full.</p>
        
        <p>As you can see, elements often contain other elements. The body of
        the document will invariably end up involving many nested elements.
        Page divisions create the overall structure of the document, and will
        contain subdivisions. These will contain headings, paragraphs, lists
        and so on. Paragraphs can contain elements that make links to other
        documents, quotes, emphasis and so on. You will find out more about
        these elements as the series progresses.</p>
        
    <h2 id="htmlsyntax">The syntax of HTML elements</h2>
        
        <p>As you have already seen, a basic element in HTML consists of two
        markers around a block of text. There are some elements that do not
        wrap around text, and in almost every case elements can contain
        sub-elements (such as <code>html</code> containing <code>head</code> and <code>body</code> in the
        example above).</p>

        <p>Elements can also have attributes, which can modify the behaviour
        of the element and introduce extra meaning.</p>
        
<pre>&lt;div id=&quot;masthead&quot;&gt;
  &lt;h1&gt;The Basics of 
    &lt;abbr title=&quot;Hypertext Markup Language&quot;&gt;HTML&lt;/abbr&gt;
  &lt;/h1&gt;
&lt;/div&gt;</pre>
            
        <p>In this example a <code>div</code> element (page division, a way of breaking
        documents into logical blocks) has had an <code>id</code> attribute added, and
        this has been given a value of <code>masthead</code>. The <code>div</code> contains an <code>h1</code>
        element (first, or most important level header), which in turn
        contains some text. Part of that text is wrapped in an <code>abbr</code> element
        (used to specify the expansion of abbreviations), which has the
        attribute of <code>title</code>, the value of which is set to <code>Hypertext Markup
        Language</code>.</p>
        
        <p>Many attributes in HTML are common to all elements, though some are
        specific to a given element or elements. They are always of the form
        <code>keyword=&quot;value&quot;</code>. The value should be surrounded by single or double
        quotes (in some circumstances the quotes can be left out, but this
        is not a good practice in terms of predictability, understanding and
        clarity—you should <em>always</em> put quotes around your values).</p>
        
        <p><a href="http://www.w3.org/TR/html401/index/attributes.html" title="HTML attributes spec">Attributes and their possible values are mostly defined by the HTML
        specifications</a>—you cannot make up your own attributes without 
        making the HTML invalid, as this can confuse user agents and cause
        problems interpreting the web page correctly. The only real 
        exceptions are the <code>id</code> and <code>class</code> attributes—their values are
        entirely under your control, as they are for adding your own meaning
        and semantics to your documents.</p>

        <p>An element within another element is referred to as being a “child”
        of that element. So in the above example, <code>abbr</code> is a child of the
        <code>h1</code>, which is itself a child of the <code>div</code>. Conversely, the <code>div</code>
        would be referred to as a “parent” of the <code>h1</code>. This parent/child 
        concept is important, as it forms the basis of CSS and is heavily
        used in JavaScript.</p>
        
    <h2 id="blockinline">Block level and inline elements</h2>
    
        <p>There are two general categories of elements in HTML, which
        correspond to the types of content and structure those elements
        represent—block level elements and inline elements.</p>
        
        <p>Block level means a higher level element, normally informing the
        structure of the document. It may help to think of block level
        elements being those that start on a new line, breaking away
        from what went before. Some common block level elements include
        paragraphs, list items, headings and tables.</p>
        
        <p>Inline elements are those that are contained within block level
        structural elements and surround only small parts of the document’s content,
        not entire paragrahs and groupings of content. An inline element will not cause a new line to
        appear in the document, they are the kind of elements that would
        appear in a paragraph of text. Some common inline elements include
        hypertext links, highlighted words or phrases and short quotations.</p>
        
    <h2 id="characterreferences">Character references</h2>
    
        <p>One last item to mention in an HTML document is how to include
        special characters. In HTML the characters &lt;, &gt; and &amp; are special.
        They start and end parts of the HTML document, rather than
        representing the characters less-than, greater-than and ampersand.</p>
        
        <p>One of the earliest mistakes a web author can make is to use an
        ampersand in a document and then have something unexpected appear.
        For example, writing “Imperial units measure weight in stones&amp;pounds” could actually end up appearing as “…stones&#xA3;s” in some browsers.</p>
        
        <p>This is because the literal string &quot;&amp;pound;&quot; is actually a character
        reference in HTML. A character reference is a way of including a
        character into a document that is difficult or impossible to enter
        using a keyboard, or in a particular document encoding.</p>
        
        <p>The ampersand (&amp;) introduces the reference and the semi-colon (;) ends
        it. However, many user agents can be quite forgiving of HTML mistakes
        such as leaving out the semi-colon, and treat &quot;&amp;pound&quot; as a character
        reference. References can either be numbers (numeric references) or
        shorthand words (entity references).</p>
        
        <p>An actual ampersand has to be entered into a document as &quot;&amp;amp;&quot;,
        which is the character entity reference, or as &quot;&amp;#38;&quot; which is
        the numeric reference. <a href="http://www.evolt.org/article/A_Simple_Character_Entity_Chart/17/21234/" title="entity reference chart">A full chart of character references can
        be found on evolt.org</a>.</p>
        
    <h2 id="summary">Summary</h2>
        
        <p>In this article, you have learned the basics of HTML, where it has
        evolved from and have some insight into the structure of an HTML
        document. We will now continue to describe the <code>&lt;head&gt;</code> section of
        an HTML document in some more detail, before continuing to address
        the <code>&lt;body&gt;</code> content.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/11-typography-on-the-web/" rel="prev" title="link to the previous article in the series">Previous article—Typography on the web</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/13-the-html-head-element/" rel="next" title="link to the next article in the series">Next article—The HTML &lt;head&gt; element</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>
        
  <h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/105-12-the-basics-of-html/norm.jpg" alt="Picture of the article author Mark Norman Francis" />

<p class="comment">Photo credit: <a href="http://flickr.com/photos/andybudd/98405468/" alt="Original photo source">Andy Budd</a>.</p>

</div>

<p>Mark Norman Francis has been working with the internet since before the web was invented. In his last job he worked at Yahoo! as a Front End Architect for the world’s biggest website, defining best practices, coding standards and quality in web development internationally.</p>


<p>Previous to Yahoo! he worked at Formula One Management, Purple Interactive and City University in various roles including web development, backend CGI programming and systems architecture. He pretends to blog at <a href="http://marknormanfrancis.com/" alt="Norms blog">http://marknormanfrancis.com/</a>.</p>
