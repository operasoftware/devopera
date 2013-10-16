Title: Lesser-known semantic elements
----
Date: 2008-07-08 07:16:49
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
<li class="prev"><a href="http://dev.opera.com/articles/view/20-html-forms-the-basics/" rel="prev" title="link to the previous article in the series">Previous article - HTML forms—the basics</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/22-generic-containers-8212-the-div-and/" rel="next" title="link to the next article in the series">Next article—Generic containers - the div and span elements</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

    <h2>Introduction</h2>
    
        <p>In this article I will introduce you to some of the more obscure
        and less well-known and used semantic elements in HTML. I’ll look
        at marking up programming code, interaction with computers,
        citations and abbreviations, showing changes made to documents and 
        more. I will also finish up by looking at some of the proposals
        for new extra semantics made in the draft of HTML 5.</p>
        
        <ul>
        <li><a href="#contact">Highlighting contact information</a></li>
        <li><a href="#code">Programming languages and code</a></li>
        <li><a href="#computerinteraction">Displaying computer interaction</a></li>
        <li><a href="#variables">Variables</a></li>
        <li><a href="#citations">Citations</a></li>
        <li><a href="#abbreviations">Abbreviations</a></li>
        <li><a href="#dfn">Defining instances</a></li>
        <li><a href="#supsub">Superscript and subscript</a></li>
        <li><a href="#linebreaks">Line breaks</a></li>
        <li><a href="#horizontal">Horizontal rules</a></li>
        <li><a href="#insdel">Changes to documents (inserting and deleting)</a></li>
        <li><a href="#futurehtml">Some future HTML elements</a></li>
        <li><a href="#summary">Summary</a></li>
        </ul>
 
<p><strong>Note</strong>: After each code example, there is a “View source” link, which when clicked will take you to the actual rendered output of that source code, contained within a different file—it is provided so you can view live examples of how the source code is actually rendered in the browser, as well as looking at the code.</p>    
    
    <h2 id="contact">Highlighting contact information</h2>
    
        <p>The <code>address</code> element is probably the most badly named and
        misunderstood element in HTML. At first glance, with a name like
        “address” it would appear that it is used to encapsulate addresses,
        email, postal or otherwise. This is only partially the case.</p>

        <p>The actual meaning of <code>address</code> is to supply contact information <em>for the author or authors</em> of the page, or the major section of the page, that it
        appears within. This can take the form of a name, an email address, a
        postal address or a link to another page with more contact
        information. For example:</p>
        
<pre>&lt;address&gt; 
  &lt;span&gt;Mark Norman Francis&lt;/span&gt;, 
  &lt;span class=&quot;tel&quot;&gt;1-800-555-4865&lt;/span&gt;
&lt;/address&gt;</pre>

<a href="lesserknownsemantics.html#address1" title="Simple address example">View source</a>
        
        <p>In the following example, the address is contained within the footer
        paragraph and simply links to another page on the site. The extended
        contact information on the page that this link targets could then
        have much more detailed contact information, to save repeating it
        endlessly across the entire site.</p>

<pre>&lt;p class=&quot;footer&quot;&gt;&#xA9; Copyright 2008&lt;/p&gt;
&lt;address&gt;
&lt;a href=&quot;/contact/&quot;&gt;Mark Norman Francis&lt;/a&gt;
&lt;/address&gt;</pre>

<a href="lesserknownsemantics.html#address2" title="Advanced address example">View source</a>
        
        <p>Of course, if the site had more than one author, the same pattern
        could be used, just linking to different contact pages for the
        different authors.</p>

        <p>It is *incorrect* to use the <code>address</code> element to indicate any other
        type of addresses, such as this:</p>
        
<pre>&lt;p&gt; Our company address: &lt;/p&gt;
  &lt;address&gt;
    Opera Software ASA,
    Waldemar Thranes gate 98,
    NO-0175 OSLO,
    NORWAY
  &lt;/address&gt;</pre>

<a href="lesserknownsemantics.html#address3" title="incorrect address example">View source</a>
        
        <p>(Of course, if Opera was taking collective responsibility for
        this article, this would be correct, even though I, and not all
        of Opera, am the author of this particular page.)</p>
        
        <p>For any general address, you can use something called a &quot;microformat&quot;
        to indicate that a paragraph contains an address. There is <a href="http://dev.opera.com/articles/html/" title="microformats articles on dev opera">more
        information on Microformats in other articles on dev.opera.com</a>.</p>

    
    <h2 id="code">Programming languages and code</h2>
    
        <p>The <code>code</code> element is used to indicate computer code or programming
        languages, such as PHP, JavaScript, CSS, XML and so on. For short
        samples within a sentence, you would simply wrap the element around
        the code snippet, like so:</p>
        
<pre>&lt;p&gt;It is bad form to use event handlers like
&lt;code&gt;onclick&lt;/code&gt; directly in the HTML.&lt;/p&gt;</pre>

<a href="lesserknownsemantics.html#code1" title="first code example">View source</a>
        
        <p>For larger samples of code which span multiple lines, you can use a 
        preformatted block as shown in the <a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/" title="marking up textual content in HTML">Marking up textual content in HTML</a> article.</p>
        
        <p>Although there is no defined method of indicating which programming
        language or code is shown within the <code>code</code> element, you can use
        the <code>class</code> attribute. A common practice (mentioned
        in the HTML 5 draft) is to use the prefix <code>language-</code> and then append
        the language name. So the above example would become:</p>
        
<pre>&lt;p&gt;It is bad form to use event handlers like 
&lt;code class=&quot;language-javascript&quot;&gt;onclick&lt;/code&gt;
directly in the HTML.&lt;/p&gt;</pre>

<a href="lesserknownsemantics.html#code2" title="second code example">View source</a>
        
        <p>Some programming languages have names that cannot be easily
        represented in classes, such as C# (C-Sharp). The correct way of
        writing this would be “<code>class=&#39;language-c\#&#39;</code>”, which could be confusing
        and easily mis-typed. I would recommend using a class consisting of
        only letters and hyphens, and spelling it out completely. So in this
        case, use “<code>class=&#39;language-csharp&#39;</code>” instead.</p>
    
    
    <h2 id="computerinteraction">Displaying computer interaction</h2>
    
        <p>The two elements <code>samp</code> and <code>kbd</code> can be used to indicate the input
        and output of interaction with a computer program. For example:</p>
        
<pre>&lt;p&gt;One common method of determining if a computer is connected
to the internet is to use the computer program &lt;code&gt;ping&lt;/code&gt;
to see if a computer likely to be running is reachable.&lt;/p&gt;

&lt;pre&gt;&lt;samp class=&quot;prompt&quot;&gt;kittaghy%&lt;/samp&gt; &lt;kbd&gt;ping -o google.com&lt;/kbd&gt;
  &lt;samp&gt;PING google.com (64.233.187.99): 56 data bytes
  64 bytes from 64.233.187.99: icmp_seq=0 ttl=242 time=108.995 ms

  --- google.com ping statistics ---
  1 packets transmitted, 1 packets received, 0% packet loss
  round-trip min/avg/max/stddev = 108.995/108.995/108.995/0.000 ms
  &lt;/samp&gt;&lt;/pre&gt;</pre>

<a href="lesserknownsemantics.html#computer" title="computer interaction example">View source</a>

        <p>The <code>samp</code> element indicates sample output from a computer program. As 
        shown in the example, different types of output can be indicated using
        the <code>class</code> attribute. There are no widely adopted conventions for which
        kind of classes to use, however.</p>
        
        <p>The <code>kbd</code> element indicates input from the user interacting with the
        computer. Although this is traditionally keyboard input (hence the
        “kbd” contraction used) it should also be used to indicate other
        types of input, such as spoken voice.</p>
    
    
    <h2 id="variables">Variables</h2>
        
        <p>The <code>var</code> element is used to indicate variables in textual content.
        This can include algebraic mathematical expressions or within
        programming code. For example:</p>
            
<pre>&lt;p&gt;The value of &lt;var&gt;x&lt;/var&gt; in
 3&lt;var&gt;x&lt;/var&gt;+2=14 is 4.&lt;/p&gt;
    
&lt;pre&gt;&lt;code class=&quot;language-perl&quot;&gt;
my &lt;var&gt;$welcome&lt;/var&gt; = &quot;Hello world!&quot;;
&lt;/code&gt;&lt;/pre&gt;</pre>

<a href="lesserknownsemantics.html#variables" title="Variables example">View source</a>
    
    <h2 id="citations">Citations</h2>
    
        <p>The <code>cite</code> element is used to indicate where the nearby content comes
        from—when quoting a person, a book or other publication, or
        generally referring people to another source, that source should be
        wrapped in a <code>cite</code> element. For example:</p>
        
<pre>&lt;p&gt;The saying &lt;q&gt;Everything should be made as simple as possible,
but not simpler&lt;/q&gt; is often attributed to &lt;cite&gt;Albert
Einstein&lt;/cite&gt;, but it is actually a paraphrasing of a quote which
is much less easy to understand.&lt;/p&gt;</pre>

<a href="lesserknownsemantics.html#citations" title="Citations example">View source</a>
    
    
    <h2 id="abbreviations">Abbreviations</h2>
    
        <p>The <code>abbr</code> and <code>acronym</code> elements are used to indicate where 
        abbreviations occur, and provide a method for expanding upon them
        without unnecessarily interrupting the flow of the document.</p>
        
        <p>The text that is the abbreviation gets wrapped in the <code>abbr</code> element, 
        and the full version is placed in the <code>title</code> attribute, like so:</p>
        
<pre>&lt;p&gt;Styling is added to 
&lt;abbr title=&quot;Hypertext Markup Language&quot;&gt;HTML&lt;/abbr&gt; documents
using &lt;abbr title=&quot;Cascading Style Sheets&quot;&gt;CSS&lt;/abbr&gt;.&lt;/p&gt;</pre>

<a href="lesserknownsemantics.html#abbreviations" title="Abbreviations example">View source</a>
        
        <p>An acronym is a type of abbreviation, with the difference that the
        result is accepted to be, and spoken as if it were, an actual word. 
        An example is scuba, which is formed from the phrase “self-contained
        underwater breathing apparatus”. Whilst the HTML 4.01 specification
        allows for both <code>abbr</code> and <code>acronym</code> elements, there is some trouble
        trying to do the right thing here…</p>
        
        <p>Internet Explorer (before version 7, and 7 doesn&#39;t provide the dotted underline underneath abbreviations that other browsers do) doesn&#39;t recognise the <code>abbr</code>
        element, but does recognise <code>acronym</code>. Unfortunately, acronyms are a
        subset of abbreviations and it is incorrect to markup something like
        “HTML” using the <code>acronym</code> element.</p>
            
        <p>Also, in the draft of HTML 5, the <code>acronym</code> element has been dropped
        in favour of standardising on <code>abbr</code> for both, as any acronym is also
        a valid abbreviation.</p>

        <p>The best thing to do is to avoid using <code>acronym</code> and just stick to
        using <code>abbr</code> throughout your code. If you need to apply some visual
        styling to the <code>abbr</code>, you can place a <code>span</code> inside it and target
        that instead of the <code>abbr</code> so that all browsers will get the visual
        styles applied. More details will appear in a later article on
        “styling text”.</p>
        
        
    <h2 id="dfn">Defining instances</h2>
        
        <p>There is some confusion over the proper use of <code>dfn</code>, which is
        described in the HTML specification as “the defining instance of the
        enclosed term”. This is remarkably close to the idea of the <code>dt</code> element (definition term) used in definition lists.</p>
        
        <p>The difference is that the term used in <code>dfn</code> does not have to be 
        a part of a list of terms and descriptions and can instead be used
        as part of the normal flow of text, even in conversational style
        prose. So, let&#39;s look at an example of using <code>dfn</code>:</p>

<pre>&lt;p&gt;&lt;dfn&gt;HTML&lt;/dfn&gt;: HTML stands for &quot;HyperText Markup Language&quot;. This is 
the language used to describe the contents of web documents.&lt;/p&gt;</pre>

<p>The term HTML appears, and is followed immediately by a definition of what it is, therefore this is an ideal place for the <code>dfn</code> eement to be used. You should only really use it once on a page, where a term is first defined, but terms should only really be defined once on a page anyway, so this is not too troubling.</p>

        <p>This is all well and good, but an isolated example is not very practical - the use of <code>dfn</code> is recommended when an abbreviation is used more than
        once on a page. For example, in the article <a href="http://dev.opera.com/articles/view/12-the-basics-of-html/" title="the basics of HTML">The basics of HTML</a> earlier in
        this series, the abbreviation HTML appeared over forty times. To
        use the code “<code>&lt;abbr title=&quot;HyperText Markup Language&quot;&gt;HTML&lt;/abbr&gt;</code>” 
        each and every time it is used would be a waste of bandwidth, 
        visually distracting and for screen reader users probably quite
        tiresome as HTML is expanded over and over, even though they would
        already have been told what it stands for. Instead, the code could
        be inserted at the point where it is first defined for the readers:</p>
        
<pre>&lt;p&gt;&lt;dfn&gt;&lt;abbr&gt;HTML&lt;/abbr&gt;&lt;/dfn&gt; (&quot;HyperText Markup Language&quot;) is 
a language to describe the contents of web documents.&lt;/p&gt;</pre>

<a href="lesserknownsemantics.html#dfn1" title="first defining instances example">View source</a>
        
        <p>Then later, whenever HTML is used, it can be marked up simply as 
        “<code>&lt;abbr&gt;HTML&lt;/abbr&gt;</code>”. A user agent could then make available to the
        user some method of retrieving the defining instance of that
        abbreviation. Unfortunately, no user agent currently does this, 
        including screen readers. It would be better, then, to use the 
        <code>title</code> attribute as well to provide this information:</p>
        
<pre>&lt;p&gt;&lt;dfn&gt;&lt;abbr title=&quot;HyperText Markup Language&quot;&gt;HTML&lt;/abbr&gt;&lt;/dfn&gt; (&quot;HyperText Markup Language&quot;) is a language to describe the contents of web documents.&lt;/p&gt;</pre>

<a href="lesserknownsemantics.html#dfn2" title="second defining instances example">View source</a>
        
        <p>Unfortunately, we have now doubled up on the expanded term for HTML,
        which can be a problem for screen reader users. However, leaving out
        the visible expansion makes the document less useful for sighted
        users which will be the greater proportion of users in almost every
        case.</p> 
        
        <p>I would suggest that this is an acceptable trade-off when there are
        only one or two items requiring a definition (in pages that require a larger number of definitions, it might be
        better to create a glossary section or page where the more rigourous
        definition list markup can be used). If you are very 
        concerned about this, the code could instead appear as:</p>
        
<pre>&lt;p&gt;&lt;abbr title=&quot;HyperText Markup Language&quot;&gt;HTML&lt;/abbr&gt; 
(&lt;dfn&gt;HyperText Markup Language&lt;/dfn&gt;) is a language to 
describe the contents of web documents.&lt;/p&gt;</pre>

<p><a href="lesserknownsemantics.html#dfn3" title="third defining instances example">View source</a>.</p>
        
        <p>However, the user
        agent would still have to have some method of connecting the definition with all the instances of the defined term. No browser currently does anything useful with <code>dfn</code>, although it is still a useful hook for CSS to style. The solution suggested above is currently the best we’ve got.</p>
        
        <p>This is an unfortunate instance where the specification has been
        created without clear guidelines on how an element is supposed to be
        used, and probably was not based upon any real-world usage of that
        element &#x2014; otherwise there would be a method of combining the
        term with its full description or definition. The HTML 5 
        specification goes into a lot more <a href="http://www.w3.org/html/wg/html5/#the-dfn">detail about how <code>dfn</code> is to be 
        used</a>, but this is still in draft and not suitable for use on the
        web yet.</p>
    
    
    <h2 id="supsub">Superscript and subscript</h2> 
    
        <p>To mark up a part of some text as being super- or subscripted 
        (slightly raised or lowered compared to the rest of the text) 
        you use the <code>sup</code> and <code>sub</code> elements.</p>
        
        <p>Some languages require these elements for correct usage of
        abbreviations and it can be used when a small amount of mathematical
        content is being marked up, without resorting to using MathML (a
        specific, rather heavyweight mathematical markup language, created
        for the sole purpose of marking up heavyweight mathematical
        formulae).</p>
        
        <p>An example of both types:</p>
        
<pre>&lt;p&gt;The chemical formula for water is H&lt;sub&gt;2&lt;/sub&gt;O, and it
is also known as hydrogen hydroxide.&lt;/p&gt;
&lt;p&gt;The famous formula for mass-energy equivalence as derived
by Albert Einstein is E=mc&lt;sup&gt;2&lt;/sup&gt; &#x2014; energy 
is equal to the mass multiplied by the speed of light 
squared.&lt;/p&gt;</pre>

<a href="lesserknownsemantics.html#supsub" title="superscript and subscript example">View source</a>
    
    
    <h2 id="linebreaks">Line breaks</h2>
    
        <p>Because of the way HTML defines white space, it is not possible
        to control where lines of text break (such as marking up a postal 
        address as a paragraph, but wanting the visual appearance to have
        each part of the address appear on a separate line) by simply 
        pressing the Return key whilst writing the text.</p>
        
        <p>A line break can be introduced into the document using the <code>br</code>
        element. However, this should only be used to force line breaks where
        they are required, and never to apply more vertical spacing between
        paragraphs or such in a document—that is more properly done
        with CSS.</p>
        
        <p>Sometimes it might be easier to use the preformatted text block
        rather than inserting <code>br</code> elements. Or, if one particular part
        of some text is desired to be on a line by itself, but this is
        just a styling issue, it can be surrounded by a <code>span</code> element
        and set to display as a block level element.</p>
        
        <p>So for example you could write the Opera contact address seen
        earlier in this article when talking about the <code>address</code> element like
        this instead:</p>
        
<pre>&lt;p&gt;Our company address: &lt;/p&gt;
&lt;address&gt;
Opera Software ASA,&lt;br&gt;Waldemar Thranes gate 98,&lt;br&gt;
NO-0175 OSLO,&lt;br&gt;NORWAY
&lt;/address&gt;</pre>

<a href="lesserknownsemantics.html#breaks" title="Line breaks example">View source</a>
    
        <p>Of course, if you are writing XHTML rather than HTML, the element
        should be self-closing, like so: &lt;br /&gt;.</p>
    
    <h2 id="horizontal">Horizontal rules</h2>
    
        <p>A horizontal rule is created in HTML with the <code>hr</code> element. It 
        inserts into the document a line, which is described to represent
        a boundary between different sections of a document.</p>
        
        <p>Whilst some argue that this is inherently non-semantic and purely
        a visual, presentational effect, there is actually some precedent
        in literature for such an element to exist. Within a chapter (which
        could be described as a section within a book), a horizontal rule
        will appear between scenes that occur in different times and/or 
        places. Also, poetry can use decorative breaks to separate different
        stanzas of the poem.</p> 
        
        <p>Neither use would justify the existence of a new header element,
        which is the accepted way of marking the boundaries between document
        sections.</p>
        
        <p>The <code>hr</code> element has no uncommon attributes and should be styled
        using CSS if the default appearance in unsatisfactory.</p>
        
        <p>Also, like the line break, if you are writing XHTML and not HTML,
        use the self-closing form—&lt;hr /&gt;.</p>
    
    
    <h2 id="insdel">Changes to documents (inserting and deleting)</h2>
    
        <p>If a document has been changed since the first time it was available,
        you can mark these changes so that return visitors or automated
        processes can tell what has changed, and when.</p>
        
        <p>New text (insertions) should be surrounded by the <code>ins</code> element. 
        Text that has been removed (deletions) should be surrounded by the
        <code>del</code> element. If a deletion
        and insertion have been made at the same point in the document, good form suggests
        having the deleted text first, followed by the insertion.</p>
        
        <p>Both elements can take two attributes that give more meaning to the
        edits.</p>
        
        <p>If the reason for the change is stated in the page or elsewhere on
        the web, you should link to that document or fragment in the cite
        attribute. This effectively says “This change happened because of
        this reason.”</p>

        <p>You can also indicate the time at which the change was made by
        using a datetime attribute. The value should be an ISO-standard
        timestamp, which is generally of the form “YYYY-MM-DD HH:MM:SS
        ±HH:MM” (<a href="http://en.wikipedia.org/wiki/ISO_8601">more information is available on wikipedia</a>).</p>
        
        <p>An example using both attributes:</p>
        
<pre>&lt;p&gt;We should only solve problems that actually arise. As
  &lt;cite&gt;&lt;del datetime=&quot;2008-03-25 18:26:55 Z&quot;
  cite=&quot;/changes.html#revision-4&quot;&gt;Donald Knuth&lt;/del&gt;&lt;ins
  datetime=&quot;2008-03-25 18:26:55 Z&quot;
  cite=&quot;/changes.html#revision-4&quot;&gt;C. A. R. Hoare&lt;/ins&gt;&lt;/cite&gt;
  said: &lt;q&gt;premature optimization is the root of all 
  evil&lt;/q&gt;.&lt;/p&gt;</pre>

<a href="lesserknownsemantics.html#insdelexample" title="inserting and deleting example">View source</a>

    <h2 id="futurehtml">Some future HTML elements</h2>
    
        <p>As has been noted several times in this and some other articles,
        <a href="http://www.w3.org/html/wg/html5/" title="the current HTML 5 spec">HTML version 5</a> is being drafted at the moment. This will be the
        most radical update to HTML since its inception. By actually 
        studying the patterns of HTML being used right now on the internet,
        rather than thinking about what might be useful to people, it stands
        a good chance of taking document semantics that are currently little
        more than convention and inserting them directly into the 
        specification.</p>
        
        <p>Some example elements slated to be introduced in HTML that could
        really improve the way we encode and use documents include:</p>
        
        <ul>
       <li><code>header</code>—contains the header (masthead) of a page; normally
        consisting of a logo and title, maybe a short “about” area and
        some site-global navigation such as login/logout/profile links.</li>
       <li><code>footer</code>—contains the footer of a page, which normally consists
        of further links within a site, copyright and other legal information.</li>
      <li><code>nav</code>—contains the primary navigation links of a page.</li>
      <li><code>article</code>—contains the part of a page that is the main
        content area, excluding all other page elements such as navigation,
        header and footer.</li>
      <li><code>aside</code>—contains sidebar information on a given area of the
        page, and can also be used for pull quotes or notes within the
        main content.</li>
        </ul>
        
        <p>There are more, which you can find in the <a href="http://www.whatwg.org/specs/web-apps/current-work/">HTML 5 specification</a>
        itself.</p>
    
    
    <h2 id="summary">Summary</h2>
    
        <p>In this article, I have described some of the lesser known and more
        infrequently used semantic elements available in HTML. In the next
        article, available soon, we will examine further how to correctly use the two
        semantically-neutral elements in HTML, <code>div</code> and <code>span</code>.</p>
 
<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/20-html-forms-the-basics/" rel="prev" title="link to the previous article in the series">Previous article - HTML forms—the basics</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/22-generic-containers-8212-the-div-and/" rel="next" title="link to the next article in the series">Next article—Generic containers - the div and span elements</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>



  <h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/107-21-lesserknown-semantic-elements/norm.jpg" alt="Picture of the article author Mark Norman Francis" />

<p class="comment">Photo credit: <a href="http://flickr.com/photos/andybudd/98405468/" title="Original photo source">Andy Budd</a>.</p>

</div>

<p>Mark Norman Francis has been working with the internet since before the web was invented. In his last job he worked at Yahoo! as a Front End Architect for the world’s biggest website, defining best practices, coding standards and quality in web development internationally.</p>


<p>Previous to Yahoo! he worked at Formula One Management, Purple Interactive and City University in various roles including web development, backend CGI programming and systems architecture. He pretends to blog at <a href="http://marknormanfrancis.com/" title="Norms blog">http://marknormanfrancis.com/</a>.</p>lesserknownsemantics.html#breaks
