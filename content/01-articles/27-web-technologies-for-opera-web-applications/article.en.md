Title: Web Technologies for Opera Web Applications
----
Date: 2007-02-09 09:48:37
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">14th December 2011: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Please consult the following for more up-to-date information:</p>

<ul>
  <li><a href="http://dev.opera.com/web">The dev.opera.com web technologies page</a> contains multiple articles covering most of what is covered briefly here.</li>
  <li>Either that or use the search functionality of <a href="http://dev.opera.com">dev.opera.com</a> to find articles on the subject you want.</li>
</ul>
</div>

<p>
The basis of a Web application is usually <abbr title="HyperText Markup Language">HTML</abbr>. The HTML documents are translated into a  <abbr title="Document Object Model">DOM</abbr> data structure by the browser. The DOM tree can be modified through scripting, often in ECMA/JavaScript, where elements can be added, changed, or removed through DOM bindings in the scripting environment. The result is a document that can change dynamically. Combine this with networking capability through the XMLHttpRequest object, and you have a fully working Web application. Opera also has support for various multimedia such as SVG, Canvas and the <code class="script">Audio</code> object.
</p>

<ol>
<li><a href="#techhtml">HTML - HyperText Markup Language</a></li>
<li><a href="#techxml">XML - Extensible Markup Language</a></li>
<li><a href="#techdom">DOM - Document Object Model</a></li>
<li><a href="#javascript">ECMA/JavaScript</a></li>
<li><a href="#techcss">CSS - Cascading Style Sheets</a></li>
<li><a href="#techxslt">XSLT - Extensible Style sheet Language: Transform</a></li>
<li><a href="#commnet">Networking</a>
  <ol>
  <li><a href="#netxhr">The XMLHttpRequest object</a></li>
  <li><a href="#netdom">DOM Level 3: Load and Save</a></li>
  <li><a href="#netscript">Script tag hack</a></li>
  <li><a href="#netiframe">The Iframe hack</a></li>
  </ol>
</li>
<li><a href="#webforms">Web Forms</a></li>
<li><a href="#crossdoc">Cross document messaging</a></li>
<li><a href="#commmultimedia">Multimedia</a>
  <ol>
  <li><a href="#techsvg">SVG - Scalable Vector Graphics</a></li>
  <li><a href="#techcanvas">Canvas</a></li>
  <li><a href="#multimediaaudio">The Audio object</a></li>
  </ol>
</li>
<li><a href="#references">References</a></li>
</ol>

<h3 id="techhtml">HTML - HyperText Markup Language</h3>

<p>
HTML is the oldest and most widespread language on the Web. It describes hyperlinked documents where the content is marked up with tags, or elements, that identify semantic parts of the document, such as paragraphs, headings, and lists.
</p>

<pre><code class="example">&lt;!DOCTYPE html&gt;
&lt;<span class="elem">html</span>&gt;
  &lt;<span class="elem">head</span>&gt;
    &lt;<span class="elem">title</span>&gt;A Web page&lt;/<span class="elem">title</span>&gt;
  &lt;/<span class="elem">head</span>&gt;
  &lt;<span class="elem">body</span>&gt;
    &lt;<span class="elem">h1</span>&gt;A Web page&lt;/<span class="elem">h1</span>&gt;
    &lt;<span class="elem">p</span>&gt;A &lt;<span class="elem">a</span> <span class="att">href</span>=&quot;<span class="value uri">foo.html</span>&quot;&gt;link&lt;/<span class="elem">a</span>&gt;.&lt;/<span class="elem">p</span>&gt;
  &lt;/<span class="elem">body</span>&gt;
&lt;/<span class="elem">html</span>&gt;
</code>
</pre>

<p>HTML has several types of <span class="elem">elements</span> divided into two categories, <em>block elements</em> and <em>inline elements</em>. Block elements separate the document into different types of sections. Examples include the <code class="elem">p</code> (paragraph), <code class="elem">ul</code> (unordered list) and <code class="elem">table</code> (tabular data) elements. Inline elements refer to parts of a sentence, for example surrounding a set of words. Examples include the <code class="elem">q</code> (quote), <code class="elem">code</code> (program code) and <code class="elem">dfn</code> (definition) elements. Through the use of these different elements, content can be marked up to identify the different kinds of content in the document. The different elements can have <span class="att">attributes</span>, name-value pairs which further qualify the elements with information. Examples include the <code class="att">id</code> (identifier), <code class="att">href</code> (hypertext reference, a link URL), and <code class="att">lang</code> (language) attributes.</p>

<p>HTML comes in two flavours: HTML and XHTML. The latter is an application of <a href="#techxml">XML</a>, meaning that it is required to be <a href="#well_formed">well formed</a>, but thus also easier to parse. The content of the languages is mostly the same, meaning the same elements and attributes are available. However, there are slight differences in how Opera handles the two. See the document on doctypes in Opera <a href="#refs_operadoctype" class="ref">[OPERADOCTYPE]</a> for more information.</p>

<p>See the HTML specification <a href="#refs_html4" class="ref">[HTML4]</a> and the XHTML specification <a href="#refs_xhtml" class="ref">[XHTML]</a> for more information.</p>

<h2 id="techxml">XML - Extensible Markup Language</h2>

<p>XML is not a language as such, but rather a meta-language used to describe languages for representing data. It serves as the basis for <em>applications</em> like SVG and XHTML. The syntax defines <em class="elem">elements</em>, which may have <em class="att">attributes</em> and contain <em>text</em> and other elements.</p>

<pre><code class="example">&lt;<span class="elem">foo</span> <span class="att">bar</span>=&quot;<span class="value">foo</span>&quot;&gt;
  &lt;<span class="elem">bar</span>&gt;Foobar!&lt;/<span class="elem">bar</span>&gt;
&lt;/<span class="elem">foo</span>&gt;</code></pre>

<p>This example shows a simple, but correct XML document. The author decides which names are used for the elements and attributes. Usually the grammar, the legal list of elements and attributes for an application, is formalized in a Document Type Definition (DTD) or <a href="http://www.w3.org/TR/xmlschema-0/">XML Schema</a>. There are also other standards for formalizing XML grammars like <a href="http://relaxng.org/">RelaxNG</a>.</p>

<p>An XML document must be <dfn id="well_formed">well formed</dfn>, meaning in particular:</p>

<ul>
<li>All elements must be closed, either having a closing tag (<code>&lt;foo&gt;..&lt;/foo&gt;</code>), or be closed &quot;in themselves&quot; (<code>&lt;foo/&gt;</code>).</li>
<li>Elements must be nested correctly. This means that an element&#39;s end tag must follow all other end tags of elements opened inside the element: <code>&lt;foo&gt;&lt;bar&gt;..&lt;/foo&gt;&lt;/bar&gt;</code> is illegal.</li>
<li>Attributes must be enclosed in quotes, either &quot; or &#39;.</li>
</ul>

<p>Unless a style sheet is attached, arbitrary XML will be displayed as a block of text (the default display in CSS). The example above will result simply in a page saying &quot;Foobar!&quot;.</p>

<p>See the XML specification <a href="#refs_xml" class="ref">[XML]</a> for more information.</p>

<h3 id="techdom">DOM - Document Object Model</h3>

<p>The DOM is an interface which exposes the structure of a document to programming languages. With the help of the DOM, developers can add, remove, hide, and change elements, or <dfn>nodes</dfn> (elements, attributes, text, comments, and more), in a document dynamically and programmatically. One can also retrieve nodes from the existing document and inspect them. The DOM defines an <abbr title="Application Programming Interface">API</abbr>, which guarantees that the way to program is the same across programming languages, be it JavaScript, Perl or Java. The following example uses JavaScript:
</p>

<pre><code class="example" id="domex"><span class="comment">//Create a new node</span>
<code class="keyw">var</code> bar = document.createElement( &quot;bar&quot; );
<span class="comment">//Give it an attribute</span>		
bar.setAttribute(&quot;foo&quot;, &quot;foobar&quot;);		
<span class="comment">//Retrieve existing node</span>
<code class="keyw">var</code> foo = document.getElementsByTagName(&#39;foo&#39;)[0];	
<span class="comment">//Add new node to existing parent</span>
foo.appendChild(bar);					
</code>
</pre>

<p>The DOM is a basis for language-specific extensions. The two most prominent are the HTML and Style DOMs. For each type of element in HTML, there is a corresponding class. The <code>select</code> element has a class called HTMLSelectElement. The HTML DOM offers HTML specific objects and shortcuts like the <code class="script prop">document.body</code> property and properties and methods like <code class="script prop">selectedIndex</code> and <code class="script func">add(option)</code> on <code class="script prop">HTMLSelectElement</code> objects.</p>

<p>The DOM specifications come in different versions called levels, and the latest release is level 3. Level 0 is not a specification but refers to the pre-standard implementations by Netscape and Internet Explorer.</p>

<p>See the following links for more information:</p>

<ul>
<li>The DOM Level 2 Core Specification <a href="#refs_dom2" class="ref">[DOM2]</a>.</li>
<li>The DOM Level 3 Core Specification <a href="#refs_dom3" class="ref">[DOM3]</a>.</li>
<li>The HTML DOM specification <a href="#refs_dom2html" class="ref">[DOM2HTML]</a>.</li>
<li>The Style DOM specification <a href="#refs_dom2style" class="ref">[DOM2STYLE]</a>.</li>
<li>DOM activities at the W3C <a href="#refs_w3cdom" class="ref">[W3CDOM]</a>.</li>
</ul>

<h3 id="javascript">ECMA/JavaScript</h3>

<p>JavaScript is a scripting language, a simple programming language which runs in the browser. The syntax is similar to Java and C, although the language behavior is different. Since its original inception by Netscape in 1995, the language has evolved to incorporate a large set of features. The language is standardized by the Ecma standards organization, under the name of ECMAScript, or ECMA-262 as it is the 262nd standard created by the organization. ECMAScript is currently in the 3rd edition (version), with the 4th edition under development. Like other programming languages, JavaScript offers variables, functions, data types, string processing, regular expressions and the like. It can also offer an interface to functionality in the browser, such as opening windows, manipulating the browser&#39;s history and current location.</p>

<p>An HTML or XML document may contain JavaScript code or refer to external scripting files through the <code class="elem">script</code> element.</p>

<pre><code class="example">&lt;<span class="elem">script</span> <span class="att">type</span>=&quot;<span class="value">text/javascript</span>&quot;&gt;
  <span class="script"><span class="keyw">function</span> <span class="">foo()</span> {
    <span class="func">alert(&#39;<span class="string">foo</span>&#39;)</span>;
  }
</span>&lt;/<span class="elem">script</span>&gt;</code></pre>

<p>In the example above, an alert box is shown when the function <code class="script func">foo</code> is executed.</p>

<p>The language is the host to the DOM bindings in the browser, and contains a reference to the current document. The <code class="script prop">document</code> property from the <a href="#domex">DOM example</a> above is an example of a property which is inserted into the scripting environment. Through this property, programmers can access the contents of the current document through the DOM API.</p>

<p>JavaScript communicates with the users through events. When a user clicks a button or enters text into an HTML form, an event is fired and received by the scripting environment. The author may create event listeners written in JavaScript which react to the event by for example getting some data from a server and inserting the data into the document.</p>

<pre><code class="example">&lt;<span class="elem">input</span> <span class="att">type</span>=&quot;<span class="value">button</span>&quot; <span class="att">onclick</span>=&quot;<span class="value script func">foo()</span>&quot; <span class="att">value</span>=&quot;<span class="value">Click me!</span>&quot;&gt;</code></pre>

<p>In the example above, the function <code>foo</code> from the previous example is called when the user clicks the button.</p>

<p>For more maintainable code event listeners can be kept in the script itself, thus allowing changes in the document without having to rewrite the event handler attributes (like <code class="att">onclick</code> in the example above).</p>

<p>See the following links for more information:</p>

<ul>
<li>The ECMAScript 262 specification <a href="#refs_ecmascript" class="ref">[ECMASCRIPT]</a>.</li>
<li>JavaScript tutorial at HowToCreate.co.uk <a href="#refs_howtojs" class="ref">[HOWTOJS]</a>.</li>
<li>Efficient JavaScript at dev.opera.com <a href="#refs_effjs" class="ref">[EFFJS]</a>.</li>
<li>JavaScript resources at crockford.com <a href="#refs_crockford" class="ref">[CROCKFORD]</a>.</li>
</ul>

<h3 id="techcss">CSS - Cascading Style Sheets</h3>

<p>Where HTML is used to mark up a text in a semantic manner, CSS is used to determine how that text is to be presented. Fonts, colors, backgrounds, and layout are all governed by CSS. The language consists of selectors and style rules. A selector defines which elements of a page are to be affected by a set of style rules. Examples include <code>p</code>, meaning any <code>p</code> element, <code>.foo</code>, meaning any element with the <code>foo</code> class or <code>foo bar</code>, meaning any element of type <code>bar</code>, which is a descendant of any element of type <code>foo</code>. Style rules are name/value pairs, where the names are CSS properties such as <code>color</code>, <code>background</code>, <code>position</code> and so on.</p>

<pre><code class="example style"><span class="sel">p.big</span> {
  <span class="prop">font-size</span>: <span class="value">14pt</span>;
  <span class="prop">color</span>: <span class="value">darkgrey</span>;
}</code></pre>

<p>The example states that all text inside <code class="elem">p</code> elements with a <code class="att">class</code> attribute with the value <code class="value">big</code>, should have a 14 pt font size and be dark grey.</p>

<p>Style rules are connected to a document either through an element&#39;s <code class="att">style</code> attribute, the <code class="elem">style</code> element in the document&#39;s <code class="elem">head</code> element, or through references to external stylesheets through a <code class="elem">link</code> element.</p>

<p>The current version of CSS is 2.1, although CSS3 is under development. Opera already has experimental support for parts of the CSS3 specification.</p>

<p>See the following links for more information:</p>

<ul>
<li>The W3C Style activities <a href="#refs_w3cstyle" class="ref">[W3CSTYLE]</a>.</li>
<li>The CSS 2.1 specification <a href="#refs_css2" class="ref">[CSS2]</a>.</li>
<li>The Current work on CSS at the W3C <a href="#refs_w3ccsscur" class="ref">[W3CCSSCUR]</a>.</li>
</ul>

<h3 id="techxslt">XSLT - Extensible Stylesheet Language: Transform</h3>

<p>XSLT is used to transform an XML document to a new XML structure, into HTML or plain text. Transformation is done through matching different fragments of a document with templates, extracting data from the old XML structure, and inserting it into a new one. A use case is storing all data in one internal XML format, using transformations to produce different views or formatting of the data.</p>

<p>Example:</p>

<p>This XML document...</p>

<pre><code class="example">&lt;<span class="elem">foo</span>&gt;
  &lt;<span class="elem">bar</span>&gt;foo&lt;/<span class="elem">bar</span>&gt;
&lt;/<span class="elem">foo</span>&gt;</code></pre>

<p>...transformed with this XSLT...</p>

<pre><code class="example">&lt;<span class="elem">xsl:stylesheet</span>&gt;
  &lt;<span class="elem">xsl:template</span> <span class="att">match</span>=&quot;<span class="value">foo</span>&quot;&gt;
    &lt;<span class="elem">foobar</span>&gt;&lt;<span class="elem">xsl:value-of</span> <span class="att">select</span>=&quot;<span class="value">bar</span>&quot;/&gt;&lt;/<span class="elem">foobar</span>&gt;
  &lt;/<span class="elem">xsl:template</span>&gt;
&lt;/<span class="elem">xsl:stylesheet</span>&gt;</code></pre>

<p>...will produce the following XML document:</p>

<pre><code class="example">&lt;<span class="elem">foobar</span>&gt;foo&lt;/<span class="elem">foobar</span>&gt;</code></pre>

<p>See the XSLT specification <a href="#refs_xslt" class="ref">[XSLT]</a> for more information.</p>

<h3 id="commnet">Networking</h3>

<p>Opera supports several technologies for retrieving data over the Web. The most common in use today is the <a href="#netxhr">XMLHttpRequest object</a>. Before this, one would typically use iframes or import external scripts to get data into the application. These methods have their uses, but XMLHttpRequest is by far the most useful.</p>

<h4 id="netxhr">The XMLHttpRequest object</h4>

<p>Opera supports the XMLHttpRequest JavaScript object (XHR). With this object, the developer can make requests for small amounts of data from a server. Results are normally returned as XML which becomes interpreted into a complete DOM tree. The response is available in the <code class="script prop">responseText</code> and <code class="script prop">responseXML</code> of the object.</p>

<p>The basic functionality of the XHR object is that you create one, bind a event handler to the object, open a URL and send data, for example POST data. When a response is received, the event handler is triggered. This is demonstrated in a simple example:</p>

<pre><code class="example script"><span class="keyw">var</span> <span class="var">req</span> = <span class="keyw">new</span>  <span class="func">XMLHttpRequest ()</span>;
<span class="prop">req.onreadystatechange</span> = <span class="keyw">function</span> () {
  <span class="keyw">if</span> ( <span class="prop">req.readyState</span> == <span class="num">4</span> ) {		
     <span class="comment">//The request is completed</span>
    <span class="keyw">if</span> ( <span class="prop">req.status</span> == <span class="num">200</span> ) {		
        <span class="comment">//The HTTP status code is ok</span>
      <span class="prop func">opera.postError(<span class="prop">req.responseXML.documentElement.nodeName</span>)</span>;
      <span class="prop func">opera.postError(<span class="prop">req.responseText</span>)</span>
    } <span class="keyw">else</span> {
      <span class="comment">//handle errors</span>
    }
  }
}
<span class="func">req.open( &#39;<span class="string">GET</span>&#39;, &#39;<span class="uri">http://example.com/file.xml</span>&#39;, true )</span>;
<span class="func">req.send(<span class="keyw">null</span>)</span>;</code></pre>

<p>In the example, the XML data from file.xml get translated into a DOM tree and stored in the req.responseXML variable. req.responseText contains the actual XML text.</p>

<p>XHRs can be done in synchronous and asynchronous fashion, using the third argument to the <code class="script func">open</code> method. In most cases you&#39;ll want the latter. In synchronous mode, the request will halt the executing script until the request is completed and a response is received.</p>

<p class="note">If the data received from an XHR is not XML or fails parsing as such, <code class="prop script">responseXML</code> contains an empty DOM tree, not null. <code class="prop script">req.responseText</code> contains the data received.</p>

<p>XHR relies on a same-origin policy which states that an XHR sent from a document may only get a response from the same server that served the document. Other attempts consitute a security violation and will fail. This security feature is disabled in widgets in order to make them more useful.</p>

<p>Keep in mind that running several XHRs at the same time, may cause each of them to run slowly. Note also that the connection phase may take some time on low end devices, in which case some sort of progress bar should be displayed to the user.</p>

<p>See the W3C working draft on XMLHttpRequest <a href="#refs_xhr" class="ref">[XHR]</a>.</p>

<h4 id="netdom">DOM Level 3: Load and Save</h4>

<p>W3C supplies its own methods in their DOM Level 3: Load and Save recommendation. Here one creates a specific LSParser object, which then parses an URI. LSParser objects can parse in a synchronous or asynchronous mode, and may also parse strings.</p>

<pre><code class="example script"><span class="keyw">var</span> di = document.implementation;
<span class="keyw">var</span> parser <span class="prop">document.implementation</span>.<span class="prop func">createLSParser( di.MODE_ASYNCHRONOUS )</span>;
<span class="prop">parser.onload</span> = <span class="keyw">function</span> (evt) {
  <span class="func">alert(evt.newDocument.documentElement)</span>;
}
<span class="prop">parser</span>.<span class="prop func">parseURI(&#39;http://example.com/doc.xml&#39;)</span>;</code></pre>

<p>In this example, the LSParser is used in asynchronous mode. In this case, a load event is fired when the document is fully loaded. The <code class="script func">parseURI</code> method itself returns <code class="script keyw">null</code>, and the new document must be picked up in an onload event handler.</p>

<p>DOM Level 3: Load and Save is supported by Opera, but is not in widespread use.</p>

<p>See the DOM Level 3: Load and Save specification <a href="#refs_dom3ls" class="ref">[DOM3LS]</a>.</p>

<h4 id="netscript">Script tag hack</h4>

<p>It is possible to add references to external scripts through the DOM. The script will then be downloaded and executed by the browser. Variables and functions in the script will be inserted into the global scope. Beware of this approach, as it may load potentially harmful code if the source is not trustworthy.</p>

<pre><code class="example script"><code class="keyw">var</code> newScript = <span class="prop">document.createElement(&#39;script&#39;)</span>;
<span class="prop">script.type</span> = &#39;<span class="string">text/javascript</span>&#39;;
<span class="prop">script.src</span> = &#39;<span class="uri">http://example.com/example.js</span>&#39;;
<span class="prop">document.body.appendChild(script)</span>;
<span class="prop">document.body.removeChild(script)</span>; 
<span class="comment">//Clean up</span></code></pre>

<h4 id="netiframe">The <code>iframe</code> hack</h4>

<p>A document may contain several iframes, which may again connect to any webpage. However, it is only possible to access a document in an iframe via the DOM if that document is loaded from the same origin as the owner document. So, this works just like <a href="#netxhr">XMLHttpRequest</a>. Data can be retrieved and accessed from the same origin. The iframe may be used to load an XML file, as in the following example:</p>

<pre><code class="example script"><code class="keyw">var</code> iframe = <span class="prop">document.createElement(&#39;iframe&#39;)</span>;
<span class="prop">iframe.style.display</span> = &#39;<span class="string">none</span>&#39;;
<span class="prop">iframe.src</span> = &#39;<span class="string">the guidelines.html</span>&#39;;
<span class="prop">iframe.onload</span> = <span class="keyw">function</span> () {
  <span class="func">processData(this.contentDocument)</span>;
  <span class="func">document.body.removeChild(this)</span>;
};
<span class="func">document.body.appendChild(iframe)</span>;
<span class="func">opera.postError(&#39;added&#39;)</span>;</code></pre>

<h3 id="webforms">Web Forms</h3>

<p>Opera has experimental support for Web Forms on all platforms. The Web Forms specification defines some extensions to the HTML Form model, including for example more input types like <code class="value">email</code>, <code class="value">number</code> and <code class="value">url</code>, form control repetition, client-side validation and more.</p>

<p>An example using the range type:</p>

<pre><code class="example">&lt;<span class="elem">input</span> <span class="att">type</span>=&quot;<span class="value">range</span>&quot; <span class="att">min</span>=&quot;<span class="value">0</span>&quot; <span class="att">max</span>=&quot;<span class="value">10</span>&quot; <span class="att">step</span>=&quot;<span class="value">2</span>&quot; <span class="att">required</span>=&quot;<span class="value">required</span>&quot;&gt;</code></pre>

<p>Opera will render this as a slider with a wide space between six markers.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/27-web-technologies-for-opera-web-applications/slider.png" alt="%5BSlider%5D" /></p>

<p>Opera now also supplies its own graphical widget for date and time:</p>

<pre><code class="example">&lt;<span class="elem">input</span> <span class="att">type</span>=&quot;<span class="value">datetime</span>&quot; <span class="att">name</span>=&quot;<span class="value">birthdate</span>&quot;&gt;</code></pre>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/27-web-technologies-for-opera-web-applications/datetime.png" alt="%5BDatetime%5D" /></p>

<p>The Web Forms specification allows repeating form controls. This enables Web authors to define a template set of form controls, which may then be repeated a chosen number of times in the page. In addition, there is support for automated adding and removal of these repetitions, using type=&quot;add&quot; and type=&quot;remove&quot; attribute on buttons.</p>

<p>In the following example the <code>li</code> element, containing one text input and one remove button is repeated three times. The text field in each repetition is assigned a running id, 0, 1, etc, which allows all the inputs to be submited in the same form. In this case, the id ([foo]) is enclosed in yet another set of brackets, to denote the array syntax supported by for example PHP.</p>

<pre><code class="example">&lt;<span class="elem">form</span> <span class="att">action</span>=&quot;<span class="value uri">script.cgi</span>&quot; <span class="att">method</span>=&quot;<span class="value">get</span>&quot;&gt;
&lt;<span class="elem">ul</span>&gt;
  &lt;<span class="elem">li</span> <span class="att">id</span>=&quot;<span class="value">foo</span>&quot; <span class="att">repeat</span>=&quot;<span class="value">template</span>&quot; <span class="att">repeat-start</span>=&quot;<span class="value">3</span>&quot;&gt;
    &lt;<span class="elem">input</span> <span class="att">type</span>=&quot;<span class="value">text</span>&quot; <span class="att">name</span>=&quot;<span class="value">bar==[[foo]]==</span>&quot; <span class="att">value</span>=&quot;<span class="value">[foo]</span>&quot;&gt;
    &lt;<span class="elem">input</span> <span class="att">type</span>=&quot;<span class="value">remove</span>&quot;&gt;
  &lt;/<span class="elem">li</span>&gt;
&lt;/<span class="elem">ul</span>&gt;
&lt;<span class="elem">p</span>&gt;&lt;<span class="elem">input</span> <span class="att">type</span>=&quot;<span class="value">add</span>&quot; <span class="att">template</span>=&quot;<span class="value">foo</span>&quot;&gt;&lt;<span class="elem">input</span> <span class="att">type</span>=&quot;<span class="value">submit</span>&quot;&gt;&lt;/<span class="elem">p</span>&gt;
&lt;/<span class="elem">form</span>&gt;</code></pre>

<p>The remove button will automatically remove the repetition it is associated with, without the need for any JavaScript code. Similarly, the add button will add another repetition to the bottom of the form, increasing the id number.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/27-web-technologies-for-opera-web-applications/repeat.png" alt="%5BRepeat%5D" /></p>

<p>See the WHATWG Web Applications specification <a href="#refs_webforms" class="ref">[WEBFORMS]</a> for more info.</p>

<h3 id="crossdoc">Cross-document messaging</h3>

<p>The WhatWG Web Applications specification defines a set of interfaces for cross-document messaging. A script in one document can create a message and dispatch it to another document, for example the contentDocument of an iframe element. Example modified from the WHATWG Web Applications spec <a href="#refs_whatwg" class="ref">[WHATWG]</a>:</p>

<pre><code class="example"><code class="keyw">var</code> iframe = document.getElementsByTagName(&#39;iframe&#39;)[0];
iframe.contentDocument.postMessage(&#39;foo&#39;);</code></pre>

<p>The receiving document must listen for messages by having added a message event listener:</p>

<pre><code class="example"><span class="prop">document.addEventListener(&#39;message&#39;, receiver, false)</span>;
<span class="keyw">function</span> <span class="func">receiver(e)</span> {
  <span class="keyw">if</span> (<span class="prop">e.domain</span> == &#39;<span class="string">example.com</span>&#39;) {
    <span class="func">displaySelection(e.data)</span>;
  }
}</code></pre>

<p>The <code class="prop">domain</code> property exists to prevent cross-site security issues. It is recommended to always check this property before processing the message data. Note that in order to use this technology, you must already have a reference to the target document, such as is the case with iframes.</p>

<p>See the WHATWG Web Applications specification <a href="#refs_crossdoc" class="ref">[CROSSDOC]</a> for more information.</p>

<h3 id="commmultimedia">Multimedia</h3>

<h4 id="techsvg">SVG - Scalable Vector Graphics</h4>

<p>SVG is an application format based on vector graphics expressed in XML syntax. As opposed to raster images like JPG and GIF which color individual pixels, vector graphics just describe shapes that appear in the image, like circles, rectangles and paths. One benefit of this is the abillity to scale the image. Developers can apply various filters to create visiual effects.</p>

<pre><code class="example">
&lt;!DOCTYPE svg PUBLIC &quot;-//W3C//DTD SVG 1.1//EN&quot; 
  &quot;<span class="uri">http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd</span>&quot;&gt;
&lt;<span class="elem">svg</span> <span class="att">xmlns</span>=&quot;<span class="uri value">http://www.w3.org/2000/svg</span>&quot;&gt;
  &lt;<span class="elem">g</span>&gt;
    &lt;<span class="elem">rect</span> <span class="att">x</span>=&quot;<span class="value">10</span>&quot; <span class="att">y</span>=&quot;<span class="value">10</span>&quot; <span class="att">width</span>=&quot;<span class="value">100</span>&quot; <span class="att">height</span>=&quot;<span class="value">100</span>&quot; <span class="att">stroke</span>=&quot;<span class="value">red</span>&quot; <span class="att">fill</span>=&quot;<span class="value">blue</span>&quot;/&gt;
    &lt;<span class="elem">circle</span> <span class="att">cx</span>=&quot;<span class="value">20</span>&quot; <span class="att">cy</span>=&quot;<span class="value">30</span>&quot; <span class="att">r</span>=&quot;<span class="value">15</span>&quot; <span class="att">stroke</span>=&quot;<span class="value">green</span>&quot; <span class="att">fill</span>=&quot;<span class="value">yellow</span>&quot;/&gt;
  &lt;/<span class="elem">g</span>&gt;
&lt;/<span class="elem">svg</span>&gt;</code></pre>

<p>Elements of SVG documents can be animated. SVG also has a DOM, which means the document itself can be manipulated. Like the HTML DOM, the SVG DOM supports events triggered by the user, for example clicks and key presses. SVG also has its own set of CSS style rules, for example for controlling the stroke or fill of an element. In many ways SVG resembles Flash, allthough in an open format.</p>

<p>See the SVG specification <a href="#refs_svg" class="ref">[SVG]</a> and <a href="http://dev.opera.com/articles/svg/">further articles on Dev Opera</a></p>

<h4 id="techcanvas">Canvas</h4>

<p>The canvas differs from SVG in that it is an area of pixels to paint on, not a definition of shapes. It is represented by the <code class="elem">canvas</code> element in HTML5 <a href="#refs_whatwg" class="ref">[WHATWG]</a>. The element can be programmatically accessed and manipulated through JavaScript, in much the same way as working with the <code class="script">Graphics</code> object in Java. Canvas has strokes, fills, opacity, transformations, paths, global composite operations and many other features to make for a powerful drawing technology.</p>

<pre><code class="example"><code class="keyw">var</code> <span class="var">canvas</span> = <span class="func">document.getElementById(&#39;canvas&#39;)</span>;
if ( ! canvas.getContext ) { return; }
<span class="keyw">var</span> <span class="var">c</span> = <span class="func">canvas.getContext(&#39;2d&#39;)</span>;
<span class="func">c.strokeRect(10,10,100,100)</span>;
<span class="prop">c.fillStyle</span> = &#39;<span class="string">red</span>&#39;;
<span class="func">c.fillRect( 20, 20, 80, 80 )</span>;
<span class="prop">c.fillStyle</span> = &#39;<span class="string">rgba(0,255,0,0.6)</span>&#39;;
<span class="func">c.fillRect( 30,30,60,60)</span>;
<span class="func">c.beginPath()</span>;
<span class="func">c.moveTo(60,60)</span>;
<span class="func">c.lineTo(65,60)</span>;
<span class="func">c.lineTo(65,65)</span>;
<span class="func">c.lineTo(55,65)</span>;
<span class="func">c.lineTo(55,55)</span>;
<span class="func">c.lineTo(70,55)</span>;
<span class="func">c.lineTo(70,70)</span>;
<span class="func">c.lineTo(50,70)</span>;
<span class="func">c.lineTo(50,70)</span>;
<span class="func">c.libar#refs_svgneTo(50,50)</span>;
<span class="func">c.lineTo(75,50)</span>;
<span class="func">cspan class=.quadraticCurveTo( 85,60, 75,75 )</span>;
<span class="func">c.lineTo(45,75)</span>;
<span class="func">c.quadraticCurveTo( 40,60, 45,45 )</span>;
<span class="func">c.lineTo(80,45)</span>;
<span class="func">c.stroke()</span>;</code></pre>

<p>The canvas can be animated by using the setTimeout and setInterval functions in JavaScript. Typically, one would clear the canvas for each step and draw a new step in the animation.</p>

<p>See the following links for more information:</p>

<ul>
<li>WHATWG Web Application specification: Dynamic canvas <a href="#refs_canvas" class="ref">[CANVAS]</a>.</li>
<li>Example of image manipulation at virtuelvis.com  <a href="#refs_virtuelvis" class="ref">[VIRTUELVIS]</a>.</li>
<li>The Opera 2dgame context <a href="#refs_opera2dgame" class="ref">[OPERA2DGAME]</a>.</li>
</ul>

<h4 id="multimediaaudio">The Audio object</h4>

<p>Audio can ble played using the Audio object in JavaScript. This object is specified in the Web Applications specification, which is a working draft. However, Opera already supports it.</p>

<pre><code class="example">a = <span class="keyw">new</span> Audio ( &#39;<span class="uri">sound.wav</span>&#39; );
a.onload = <span class="keyw">function</span> () {
  a.loop();
  a.play();
  a.stop();
}</code></pre>

<p>An <code class="att">onload</code> event handler is used to determine that the entire clip has been loaded before playing it. Calling <code class="script func">loop()</code> will play the sound on infinte loop once it&#39;s started. The <code class="func script">loop</code> method can be called with an argument signifying the number of times to loop.</p>

<p>See the WHATWG Web Applications specification <a href="#refs_whatwg" class="ref">[WHATWG]</a> for more information.</p>

<h3 id="references">References</h3>

<dl>
<dt><span class="refitem" id="refs_html4">[HTML4]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/html4">HTML 4.01 - W3C Recommendation</a>&quot;, &quot;HTML 4.01 - W3C Recommendation&quot; is available at http://www.w3.org/TR/html4</dd>
<dt><span class="refitem" id="refs_xhtml">[XHTML]</span></dt> 
<dd>&quot;<a href="http://www.w3.org/TR/xhtml1/">W3C Recommendation</a>&quot;, &quot;W3C Recommendation&quot; is available at http://www.w3.org/TR/xhtml1/</dd>
<dt><span class="refitem" id="refs_operadoctype">[OPERADOCTYPE]</span></dt>
<dd>&quot;<a href="http://www.opera.com/docs/specs/doctype/">DOCTYPE handling in Opera</a>&quot;, &quot;DOCTYPE handling in Opera&quot; is available at http://www.opera.com/docs/specs/doctype/</dd>
<dt><span class="refitem" id="refs_xml">[XML]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/xml">XML 1.1 - W3C Recommendation</a>&quot;, &quot;XML 1.1 - W3C Recommendation&quot; is available at http://www.w3.org/TR/xml</dd>
<dt><span class="refitem" id="refs_dom2">[DOM2]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/DOM-Level-2-Core/">DOM Level 2 Core - W3C Recommendation</a>&quot;, &quot;DOM Level 2 Core - W3C Recommendation&quot; is available at http://www.w3.org/TR/DOM-Level-2-Core/</dd>
<dt><span class="refitem" id="refs_dom2events">[DOM2EVENTS]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/DOM-Level-2-Events/">DOM Level 2 Events - W3C Recommendation</a>&quot;, &quot;DOM Level 2 Events - W3C Recommendation&quot; is available at http://www.w3.org/TR/DOM-Level-2-Events/</dd>
<dt><span class="refitem" id="refs_dom2html">[DOM2HTML]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/DOM-Level-2-HTML/">DOM Level 2 HTML - W3C Recommendation</a>&quot;, &quot;DOM Level 2 HTML - W3C Recommendation&quot; is available at http://www.w3.org/TR/DOM-Level-2-HTML/</dd>
<dt><span class="refitem" id="refs_dom2style">[DOM2STYLE]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/DOM-Level-2-Style/">DOM Level 2 Style - W3C Recommendation</a>&quot;, &quot;DOM Level 2 Style - W3C Recommendation&quot; is available at http://www.w3.org/TR/DOM-Level-2-Style/</dd>
<dt><span class="refitem" id="refs_dom3">[DOM3]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/">DOM Level 3 Core - W3C Recommendation</a>&quot;, &quot;DOM Level 3 Core - W3C Recommendation&quot; is available at http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/</dd>
<dt><span class="refitem" id="refs_dom3ls">[DOM3LS]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/2004/REC-DOM-Level-3-LS-20040407/">DOM Level 3: Load and Save - W3C Recommendation</a>&quot;, &quot;DOM Level 3: Load and Save - W3C Recommendation&quot; is available at http://www.w3.org/TR/2004/REC-DOM-Level-3-LS-20040407/</dd>
<dt><span class="refitem" id="refs_w3cdom">[W3CDOM]</span></dt>
<dd>&quot;<a href="http://www.w3.org/DOM">DOM activities at the W3C</a>&quot;, &quot;DOM activities at the W3C&quot; is available at http://www.w3.org/DOM</dd>
<dt><span class="refitem" id="refs_ecmascript">[ECMASCRIPT]</span></dt>
<dd>&quot;<a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript Specification</a>&quot;, &quot;ECMAScript Specification&quot; is available at http://www.ecma-international.org/publications/standards/Ecma-262.htm</dd>
<dt><span class="refitem" id="refs_howtojs">[HOWTOJS]</span></dt>
<dd>&quot;<a href="http://www.howtocreate.co.uk/tutorials/javascript/">JavaScript tutorial at HowToCreate.co.uk</a>&quot;, Mark &#39;Tarquin&#39; Wilton-Jones, &quot;JavaScript tutorial at HowToCreate.co.uk&quot; is available at http://www.howtocreate.co.uk/tutorials/javascript/</dd>
<dt><span class="refitem" id="refs_effjs">[EFFJS]</span></dt>
<dd>&quot;<a href="http://dev.opera.com/articles/view/efficient-javascript/">Efficient JavaScript code at dev.opera.com</a>&quot;, Mark &#39;Tarquin&#39; Wilton-Jones, &quot;Efficient JavaScript code at dev.opera.com&quot; is available at http://dev.opera.com/articles/view/efficient-javascript/</dd>
<dt><span class="refitem" id="refs_crockford">[CROCKFORD]</span></dt>
<dd>&quot;<a href="http://www.crockford.com/">JavaScript resources at crockford.com</a>&quot;, Douglas Crockford, &quot;JavaScript resources at crockford.com&quot; is available at http://www.crockford.com/</dd>
<dt><span class="refitem" id="refs_css2">[CSS2]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/css2/">CSS 2.1 - W3C Recommendation</a>&quot;, &quot;CSS 2.1 - W3C Recommendation&quot; is available at http://www.w3.org/TR/css2/</dd>
<dt><span class="refitem" id="refs_w3cstyle">[W3CSTYLE]</span></dt>
<dd>&quot;<a href="http://www.w3.org/Style">Style activities at the W3C</a>&quot;, &quot;Style activities at the W3C&quot; is available at http://www.w3.org/Style</dd>
<dt><span class="refitem" id="refs_w3ccsscur">[W3CCSSCUR]</span></dt>
<dd>&quot;<a href="http://www.w3.org/Style/CSS/current-work">Current CSS work at the W3C</a>&quot;, &quot;Current CSS work at the W3C&quot; is available at http://www.w3.org/Style/CSS/current-work</dd>
<dt><span class="refitem" id="refs_xslt">[XSLT]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/xslt">XSLT 1.0 - W3C Recommendation</a>&quot;, &quot;XSLT 1.0 - W3C Recommendation&quot; is available at http://www.w3.org/TR/xslt</dd>
<dt><span class="refitem" id="refs_xhr">[XHR]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/XMLHttpRequest/">XMLHttpRequest - W3C Working Draft</a>&quot;, &quot;XMLHttpRequest - W3C Working Draft&quot; is available at http://www.w3.org/TR/XMLHttpRequest/</dd>
<dt><span class="refitem" id="refs_svg">[SVG]</span></dt>
<dd>&quot;<a href="http://www.w3.org/TR/svg">SVG 1.1 - W3C Recommendation</a>&quot;, &quot;SVG 1.1 - W3C Recommendation&quot; is available at http://www.w3.org/TR/svg</dd>
<dt><span class="refitem" id="refs_whatwg">[WHATWG]</span></dt>
<dd>&quot;<a href="http://www.whatwg.org/specs/web-apps/current-work/">Web Applications 1.0 - WHATWG Working Draft</a>&quot;, &quot;Web Applications 1.0 - WHATWG Working Draft&quot; is available at http://www.whatwg.org/specs/web-apps/current-work/</dd>
<dt><span class="refitem" id="refs_webforms">[WEBFORMS]</span></dt>
<dd>&quot;<a href="http://www.whatwg.org/specs/web-forms/current-work/">Web Forms 2.0 - WHATWG Working Draft</a>&quot;, &quot;Web Forms 2.0 - WHATWG Working Draft&quot; is available at http://www.whatwg.org/specs/web-forms/current-work/</dd>
<dt><span class="refitem" id="refs_crossdoc">[CROSSDOC]</span></dt>
<dd>&quot;<a href="http://www.whatwg.org/specs/web-apps/current-work/#crossDocumentMessages">Cross document messaging, from the Web Applications 1.0 working draft</a>&quot;, &quot;Cross document messaging, from the Web Applications 1.0 working draft&quot; is available at http://www.whatwg.org/specs/web-apps/current-work/#crossDocumentMessages</dd>
<dt><span class="refitem" id="refs_audio">[AUDIO]</span></dt>
<dd>&quot;<a href="http://www.whatwg.org/specs/web-apps/current-work/#sound">The Audio Object, from the Web Applications 1.0 working fraft</a>&quot;, &quot;The Audio Object, from the Web Applications 1.0 working fraft&quot; is available at http://www.whatwg.org/specs/web-apps/current-work/#sound</dd>
<dt><span class="refitem" id="refs_canvas">[CANVAS]</span></dt>
<dd>&quot;<a href="http://whatwg.org/specs/web-apps/current-work/#scs-dynamic">WHATWG Wep Applications: Dynamic canvas element</a>&quot;, &quot;WHATWG Wep Applications: Dynamic canvas element&quot; is available at http://whatwg.org/specs/web-apps/current-work/#scs-dynamic</dd>
<dt><span class="refitem" id="refs_virtuelvis">[VIRTUELVIS]</span></dt>
<dd>&quot;<a href="http://virtuelvis.com/2005/12/image-manipulation-in-canvas/">Examples of image manipulation at virtuelvis.com</a>&quot;, Arve Bersvendsen, &quot;Examples of image manipulation at virtuelvis.com&quot; is available at http://virtuelvis.com/archives/2005/12/canvas-image-manipulation</dd>
<dt><span class="refitem" id="refs_opera2dgame">[OPERA2DGAME]</span></dt>
<dd>&quot;<a href="http://my.opera.com/WebApplications/blog/show.dml/200788">Blog post on the Opera 2dgame canvas context</a>&quot;, &quot;Blog post on the Opera 2dgame canvas context&quot; is available at http://my.opera.com/WebApplications/blog/show.dml/200788</dd>
</dl>
XML 1.1 - W3C Recommendation
