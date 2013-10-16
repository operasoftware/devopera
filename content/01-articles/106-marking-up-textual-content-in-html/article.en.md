Title: Marking up textual content in HTML
----
Date: 2008-07-08 07:14:14
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
<li class="prev"><a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" rel="prev" title="link to the previous article in the series">Previous article—Choosing the right doctype for your HTML documents</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/16-html-lists/" rel="next" title="link to the next article in the series">Next article—HTML lists</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

    <h2>Introduction</h2>
    
        <p>In this article I will take you through the basics of using HTML to
        describe the meaning of the content within the body of your document.</p>
        
        <p>We will look at general structural elements such as headings and
        paragraphs and embedding quotes and code. After that we will look
        at inline content, such as short quotes and emphasis, and finish with
        a quick examination of old-fashioned presentational content. This article’s structure is as follows:</p>
    
    <ul>
    <li><a href="#whitespace">Space—the final frontier</a></li>
    
    <li><a href="#block">Block level elements</a>
    <ul>
    <li><a href="#headings">Page section headings</a></li>
    <li><a href="#paragraphs">Generic paragraphs</a></li>
    <li><a href="#cite">Quoting other sources</a></li>
    <li><a href="#preformatted">Preformatted text</a></li>
    </ul>
    </li>
    
    <li><a href="#inline">Inline elements</a>
    <ul>
    <li><a href="#quotations">Short quotations</a></li>
    <li><a href="#emphasis">Emphasis</a></li>
    <li><a href="#italics">Italicised text</a></li>
    </ul>
    </li>

    <li><a href="#presentational">Presentational elements—never use these</a></li>
    
    <li><a href="#summary">Summary</a></li>
   

    </ul>


<p><strong>Note</strong>: After each code example, there is a “View live examples” link, which when clicked will take you to the actual rendered output of that source code, contained within a different file—it is to view live examples of how the source code is actually rendered in the browser, as well as looking at the code.</p> 
    
    <h2 id="whitespace">Space—the final frontier</h2>
    
        <p>An important point to cover before I start discussing text, though,
        is that of space, specifically the space between words. When writing
        HTML, the source document will contain what is termed “white space”
        &#x2014; the characters in the file that serve to separate text. An
        actual space character, as you would get when you hit the Spacebar 
        on the keyboard is the most common, but there are others such as the
        Tab character and the marker between two separate lines in a document
        (called a carriage return or new line).</p>
        
        <p>In HTML, multiple occurrences of these characters are (almost) always
        treated as a single space character. For example:</p>
        
            <pre>&lt;h3&gt;In   the
                beginning&lt;/h3&gt;</pre>

<a href="HTMLtext_examples.html#whitespace">View live examples</a>
        
        <p>would be interpreted by a web browser to be equivalent to:</p>
        
            <pre>&lt;h3&gt;In the beginning&lt;/h3&gt;</pre>
        
        <p>The only place where this is not the case is in the <code>pre</code> element, 
        which is discussed in detail later in this article.</p> 
        
        <p>This can be a source of confusion for first-time authors of an HTML
        document, who try to pad out text with extra spaces to achieve a
        desired indentation, or to get more spacing after the period between
        sentences and introduce more vertical space between paragraphs.
        Influencing the visual layout of your documents is not something to
        be done in the HTML source, and is instead achieved through style
        sheets, discussed later in this series of articles.</p>
        
        
    <h2 id="block">Block level elements</h2>
    
    <p>In this section I’ll go through the syntax and usage of the common <a href="http://dev.opera.com/articles/view/12-the-basics-of-html/#blockinline" title="block level elements definition">block level elements</a> used to format text.</p>
    
        <h3 id="headings">Page section headings</h3>
    
        <p>Once the page has been broken down into logical sections, each
        section should be introduced by an appropriate header. This is
        discussed further in the article <a href="http://dev.opera.com/articles/view/7-what-does-a-good-web-page-need/" title="what does a good web page need">What does a good web page need</a>.</p>
        
        <p>HTML defines six levels of header, <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, and
        <code>h6</code> (from the highest importance to the lowest). Generally speaking,
        the <code>h1</code> would be the main heading of the entire page and introduce
        everything. <code>h2</code> is then used to break the page up into sections,
        <code>h3</code> the sub-sections, and so on.</p> 
        
        <p>It is important to use the header levels to describe the document in
        terms of section, sub-section, sub-sub-section as this makes the
        <a href="http://www.accessibilitytips.com/2008/03/10/avoid-skipping-header-levels/" title="avoiding skipping header levels">document more understandable to screen readers</a> and to automated
        processes (like Google’s indexing bots).</p>

        <p>A good example of a header structure, using this document as a
        template, would look like this:</p>
        
<pre><code>&lt;h1&gt;Marking up textual content in HTML&lt;/h1&gt;
&lt;h2&gt;Introduction&lt;/h2&gt;
&lt;h2&gt;Space—the final frontier&lt;/h2&gt;
&lt;h2&gt;Block level elements&lt;/h2&gt;
&lt;h3&gt;Page section headings&lt;/h3&gt;
&lt;h3&gt;Generic paragraphs&lt;/h3&gt;
&lt;h3&gt;Quoting other sources&lt;/h3&gt;
&lt;h3&gt;Preformatted text&lt;/h3&gt;
&lt;h2&gt;Inline elements&lt;/h2&gt;

[…and so on…]</code></pre>
  
<a href="HTMLtext_examples.html#headings">View live examples</a>
            
        <h3 id="paragraphs">Generic paragraphs</h3>
    
        <p>The paragraph is the building block of most documents. In HTML a
        paragraph is represented by the <code>p</code> element, which takes no special
        attributes. For example:</p>
        
            <pre>&lt;p&gt;This is a very short paragraph. It only has two sentences.&lt;/p&gt;</pre>
<a href="HTMLtext_examples.html#paragraph">View live examples</a>
        
        <p>A paragraph in many articles and books can contain just one sentence.
        Whilst the meaning (in terms of written prose) of “paragraph” is fairly
        clear, on the web much shorter areas of text are often wrapped in
        paragraph elements as the author believes this is more “semantic”
        than using a <code>div</code> element (we will cover these in a future article
        called “Generic containers”).</p>
        
        <p>A paragraph is a collection of one or more sentences, just as in
        newspapers and books. On the web, it is good form to use the
        paragraph element for this and not just any random piece of text in
        the page. If it is just a few words and not even a proper sentence,
        then it should probably not be marked up as a paragraph.</p>
        
        
        <h3 id="cite">Quoting other sources</h3>

        <p>Very often articles, blog posts, and reference documents will quote
        in whole or in part another document. In HTML, this is marked up 
        using the <code>blockquote</code> element for lengthy quotations, such as entire
        sentences, paragraphs, lists, or the like.</p> 
        
        <p>A <code>blockquote</code> element cannot contain text, but must instead have
        another block level element inside it. You should use the same
        block level element as was used in the original document. If you 
        are quoting a paragraph of text, use a paragraph; when quoting a
        list of items, use the elements for lists; and so on.</p>
        
        <p>If the quote comes from another web page, you can indicate this using
        the <code>cite</code> attribute, like so:</p>
        
<pre>&lt;p&gt;HTML 4.01 is the only version of HTML that you should use
when creating a new web page, as, according to the 
specification:&lt;/p&gt;
&lt;blockquote cite=&quot;http://www.w3.org/TR/html401/&quot;&gt;
&lt;p&gt;This document obsoletes previous versions of HTML 4.0,
although W3C will continue to make those specifications and
their DTDs available at the W3C Web site.&lt;/p&gt;
&lt;/blockquote&gt;</pre>

<a href="HTMLtext_examples.html#cite">View live examples</a>
        
        <p>The <code>cite</code> attribute is not required in the case where the quote is
        taken from a novel, magazine or other form of offline content.</p>
        
        
        <h3 id="preformatted">Preformatted text</h3>
        
        <p>Any text in which the formatting and white space (see earlier) is
        significant should be marked up using the <code>pre</code> element.</p>

        <p>In most web browsers, text marked as preformatted will be displayed
        to the user as it appears in the source, sometimes using a fixed-width
        (monospaced) font, giving the text a feeling of having come from a
        typewriter. This is an artifact of programmers using fixed width fonts for early uses of preformatted text.</p>
        
        <p>In this example, you can see a snippet of code written in the 
        perl programming language:</p>
        
<pre>&lt;pre&gt;&lt;code class=&quot;language-perl&quot;&gt;
# read in the named file in its entirety
sub slurp {
  my $filename = shift;
  my $file     = new FileHandle $filename;
                
  if ( defined $file ) {
    local $/;
    return &lt;$file&gt;;
  }
  return undef;
};
&lt;/code&gt;&lt;/pre&gt;</pre>
<a href="HTMLtext_examples.html#preformatted">View live examples</a>
        
        <p>The use of <code>code</code> above will be explained in the <a href="http://dev.opera.com/articles/view/21-lesser-known-semantic-elements/" title="lesser known semantic elements">lesser-known semantic elements</a> article later on in the course.</p>
        
    
    
    <h2 id="inline">Inline elements</h2>
    
    <p>In this section I’ll go through the syntax and usage of the common <a href="http://dev.opera.com/articles/view/12-the-basics-of-html/#blockinline" alt="inline element definition" title="inline element definition">inline elements</a> used to format text.</p>
    

        <h3 id="quotations">Short quotations</h3>
        
        <p>Short quotes which are used within a normal sentence or paragraph 
        are contained within the <code>q</code> element. Like the <code>blockquote</code> element,
        this can contain a <code>cite</code> attribute, which indicates the page on the
        internet where the quote can be found.</p>
        
        <p>A short quote should normally be rendered with quotation marks around
        it. According to <a href="http://www.w3.org/TR/html401/struct/text.html#h-9.2.2.1" title="quote marks on quotations should be inserted by the user agent">the HTML specification</a>, these should be
        inserted by the user-agent so that they can be correctly nested and
        made aware of the language being used in the document. CSS can be used
        to control the quotation marks used—this is covered in a
        later article on “styling text”.</p>
        
        <p>An example of <code>q</code> in action:</p>
        
            <pre>&lt;p&gt;This did not end well for me. Oh well, 
              &lt;q lang=&quot;fr&quot;&gt;c&#39;est la vie&lt;/q&gt; as the French say.&lt;/p&gt;</pre>
 <a href="HTMLtext_examples.html#q">View live examples</a>       
        <h3 id="emphasis">Emphasis</h3>
        
        <p>HTML contains two methods for indicating that the text within needs
        to be emphasised to the user, such as error messages, warnings, or
        notes. For visual browsers this normally means applying a different
        colour, font or making the text bolder or italicised. For users     
        of screen readers this can result in a different voice or other 
        auditory effect.</p>
        
        <p>For text that needs to be emphasised, you use the <code>em</code> element, like 
        so:</p>
        
<pre>&lt;p&gt;&lt;em&gt;Please note:&lt;/em&gt; the kettle is to be unplugged at
              night.&lt;/p&gt;</pre>
<a href="HTMLtext_examples.html#em">View live examples</a>
        
        <p>If an entire sentence was to be emphasised, but there was still a
        point within that sentence needed to be emphasised further, you use
        the <code>strong</code> element to indicate stronger emphasis than normal, like
        so:</p>
        
<pre>&lt;p&gt;&lt;em&gt;Please note: the kettle &lt;strong&gt;must&lt;/strong&gt; be unplugged every evening, otherwise it will explode -
&lt;strong&gt;killing us all&lt;/strong&gt;&lt;/em&gt;.&lt;/p&gt;</pre>
     <a href="HTMLtext_examples.html#emstrong">View live examples</a>   

        <h3 id="italic">Italicised text</h3>
        
        <p>It is commonly thought that “italicised” does not describe the
        meaning, and thus the <code>i</code> element should not be used (much like
        some other presentational elements described in the next section).</p>
        
        <p>There are a couple of instances when describing the content as being
        italicised is arguably correct. It has been noted that some concepts
        are best described as “italicised” rather than having to create some
        very specific and otherwise unused elements. These include things
        such as the names of ships, the titles of television series, movies
        and books, some technical terms and other taxonomic designations.</p>
        
        <p>The argument is that the italicisation indicates that the text within is special, and the context indicates how it is special. Indeed, this is reflected in the currently draft HTML 5
        specification:</p>
        
            <blockquote cite="http://www.w3.org/html/wg/html5/#i">The i element represents a span of text in an alternate voice or
            mood, or otherwise offset from the normal prose […]
            The i element should be used as a last resort when no other
            element is more appropriate.</blockquote>
        
        <p>Since the <code>i</code> element can be restyled by CSS to not be italic, the
        meaning of “italic” in this context is essentially “something
        a little bit different”. I don’t find this acceptable, personally
        speaking, but there is enough precedent out there for it to be used
        this way.</p>
        

        <h2 id="presentational">Presentational elements—never use these</h2>
        
        <p>The HTML specification includes several elements that are widely
        described as “presentational” because they only specify what the
        content within them should look like, and not what it means.</p>
        
        <p>Some of these have been labeled as deprecated in the specification.
        This means that they have been superseded by a newer method of
        achieving the same result.</p>
        
        <p>I will describe them briefly here, but note that this is mostly of
        historic interest—these elements should never be used in any
        modern web page. The effect of all of these elements should be
        achieved in another way and will be described in two forthcoming
        articles: “styling text with CSS” and <a href="http://dev.opera.com/articles/view/21-lesser-known-semantic-elements/" title="lesser known semantic elements">lesser known semantic
        elements</a>.</p>
        
        <dl>
        <dt><code>font face=&quot;…&quot; size=&quot;…&quot;</code></dt>
            <dd>The text within should be rendered by the browser using a font
            different from the default &#x2014; instead, fonts should be set
            using CSS.</dd>
        <dt><code>b</code></dt>
            <dd>The text within is bold—this almost always means the text
            has been emphasised, so you should use <code>em</code> or <code>strong</code> as shown
            earlier.</dd>
        <dt><code>s</code> and <code>strike</code></dt>
            <dd>The text within has been struck-through with a line—if
            this is merely a presentational effect, this should be achieved
            with CSS. Alternatively, if the text is actually being marked as
            having been deleted or unwanted it should be marked up with the
            <code>del</code> element, described in the later article.</dd>
        <dt><code>u</code></dt>
            <dd>The text within has been underlined—this is almost always
            a visual effect, and so should be achieved with CSS.</dd>
        <dt><code>tt</code></dt>
            <dd>The text within is presented in a “teletype” or monospaced font
           —this should be achieved with CSS or a more appropriate
            semantic element such as <code>pre</code>—as shown above.</dd>
        <dt><code>big</code> and <code>small</code></dt>
            <dd>The size of the text within has been adjusted—this should
            be achieved with CSS.</dd>
        </dl>
    
    <h2 id="summary">Summary</h2>
        
        <p>In this article, I have talked about some of the most common elements
        used when marking up textual content. <a href="http://dev.opera.com/articles/view/16-html-lists/" title="HTML lists article">In the next article</a>, you will
        progress to another type of content: lists of items.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" rel="prev" title="link to the previous article in the series">Previous article—Choosing the right doctype for your HTML documents</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/16-html-lists/" rel="next" title="link to the next article in the series">Next article—HTML lists</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

 <h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/106-15-marking-up-textual-content-in-html/norm.jpg" alt="Picture of the article author Mark Norman Francis" />

<p class="comment">Photo credit: <a href="http://flickr.com/photos/andybudd/98405468/" title="Original photo source">Andy Budd</a>.</p>

</div>

<p>Mark Norman Francis has been working with the internet since before the web was invented. In his last job he worked at Yahoo! as a Front End Architect for the world’s biggest website, defining best practices, coding standards and quality in web development internationally.</p>


<p>Previous to Yahoo! he worked at Formula One Management, Purple Interactive and City University in various roles including web development, backend CGI programming and systems architecture. He pretends to blog at <a href="http://marknormanfrancis.com/" title="Norms blog">http://marknormanfrancis.com/</a>.</p>
