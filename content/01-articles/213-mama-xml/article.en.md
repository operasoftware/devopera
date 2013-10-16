Title: MAMA: XML
----
Date: 2008-11-28 16:30:43
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

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-tables/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Tables</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-css-quantities-and-sizes/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: CSS quantities and sizes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<h1>MAMA: XML</h1>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#pis">XML processing instructions (PIs)</a></li>
    <li><a href="#prolog">The XML prolog and its encoding</a></li>
    <li><a href="#xmlnamespace">XML Namespaces</a></li>
    <li><a href="#xmlrelated">Other XML-related attributes</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>MAMA tracked a number of XML-related details in order to get a better sense 
   of how XML is used on the Web. We have already seen evidence of XML in some 
   of the other sections of this write-up. The <code class="skeyw">Content-Type</code> 
   HTTP header revealed just over 1,000 documents using XML-related MIME types.
   URLs analyzed that ended in <span class="string">&quot;.xml&quot;</span> or 
   <span class="string">&quot;.xhtm&quot;</span> were detected in just <strong>under</strong>
   1,000 documents. Certain conditions in scripting also mark a document with the 
   &quot;stamp&quot; of XML. In this section, we will look at some additional factors which 
   contribute to the evidence of XML usage in Web documents: XML processing 
   instructions (PIs), the XML prolog (a type of PI), and XML namespaces. We can 
   even consider the presence of an XHTML Doctype as another tip that XML is in use. 
   Combining these factors together, over 700,000 URLs (~20% of all URLs analyzed) 
   exhibited evidence of <strong>trying</strong> to be XML in one form or another. 
   Adding in other details that MAMA did not directly analyze, this number can 
   likely be said to be even higher. XML syntax definitely deserves some scrutiny 
   in MAMA&#39;s research.</p>

<h2 id="pis">XML processing instructions (PIs)</h2>
<p>The number of URLs reporting PIs was 104,413. This is slightly lower than the 
   number mentioned below for XML prologs detected. In the MAMA code, this should 
   not be possible, since the XML prolog detection is a child condition of the XML 
   PI case. This difference exposes a small bug in PI detection when frames are 
   used. It looks like it affects ~2-4% of the PI URLs, and will be fixed in the 
   next version.</p>

<p>The <a href="xmlpis-url.htm">XML PI quantity full frequency table</a> shows that 
   some documents have significant numbers of PIs. Investigating such cases exposes 
   some practices that would be considered sloppy; some authors put multiple XML 
   prologs in a single document, while others misplace PI-looking constructs from 
   pre-processing languages.</p>

<p class="note"><strong>Ex:</strong> 33 XML prologs in a document: <a href="http://www.711.ru/">http://www.711.ru/</a></p>

<h3>CSS stylesheets in XML</h3>
<p>In all, 569 CSS stylesheet PIs were detected. MAMA used the following approach to judge a positive match:</p>
<ol>
    <li>The PI begins with the string <span class="string">&quot;xml-stylesheet&quot;</span>.</li>
    <li>The PI has a &quot;Type&quot; attribute value of <span class="string">&quot;text/css&quot;</span>.</li>
</ol>

<h2 id="prolog">The XML prolog and its encoding</h2>
<p>An XML prolog is a type of processing instruction and is an optional component 
   of an XML document. MAMA found 104,722 URLs with XML prologs amongst its URLs. 
   The following is a typical XML prolog:</p>

<p class="note"><strong>Ex: </strong> &lt;?<code class="elem">xml</code> 
   <code class="att">version</code>=<span class="string">&quot;1.0&quot;</span> 
   <code class="att">encoding</code>=<span class="string">&quot;iso-8859-1&quot;</span>?&gt;</p>

<h3>XML encoding</h3>
<p>The XML prolog can also have an optional <code class="att">Encoding</code> 
   attribute, which specifies the character set used in the document. Use of the 
   <code class="att">Encoding</code> attribute in the prolog is very popular&#8212;if we look at all URLs that actually use an XML prolog, 96,264 of them (over 
   92%) specify a document&#39;s encoding in this manner. The <span class="string">&quot;iso-8859-1&quot;</span> 
   value is twice as popular as any other encoding method.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> 
   Top XML encoding values<br />[Also see the <a href="xmlenc-url.htm">full frequency table</a>.]</caption>
   <tr valign="bottom"><th>Encoding value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">iso-8859-1</span></td><td class="num">54,572</td></tr>
   <tr class="r2"><td><span class="string">utf-8</span></td><td class="num">27,052</td></tr>
   <tr class="r1"><td><span class="string">iso-8859-2</span></td><td class="num">3,919</td></tr>
   <tr class="r2"><td><span class="string">shift_jis</span></td><td class="num">2,464</td></tr>
   <tr class="r1"><td><span class="string">utf-16</span></td><td class="num">1,688</td></tr>
</table>

<h2 id="xmlnamespace">XML namespaces</h2>
<p>Although detecting the XML prolog declaration gives <strong>some</strong> 
   idea of how XML is used on the Web, it is not a required item for an XML 
   document. MAMA also looked for XML namespace URIs used in documents and the 
   number was <strong>MUCH</strong> higher than for the XML prolog. XML namespaces 
   were found in 656,808 URLs (18.72% of all URLs analyzed). The XHTML namespace 
   is the prevalent value here, but another conspicuous trend is easily noticeable: 
   a significant number of Microsoft-related namespaces are very prominent. Twenty-two
   of the top 100 namespaces were from Microsoft. Conversely, some interesting 
   XML-related technologies had very low representation in the URLs that MAMA analyzed; 
   XLINK was detected 152 times, but XML events, XHTML2, XFORMS and XSLT each only 
   had 1-2 dozen cases each. Server-side XSLT (a separate implementation vector than
   this evidence of client-side XSLT) likely has higher usage rates than 
   MAMA&#39;s XSLT numbers indicate&#8212;evidence from the &quot;Server&quot; and &quot;X-Powered-By&quot;
   HTTP header fields support this view.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> Top XML namespace URIs<br />[Also see the 
   <a href="nsnamelist-url.htm">full frequency table</a>.]</caption>
   <tr valign="bottom"><th>Namespace URI</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">http://www.w3.org/1999/xhtml</span></td><td class="num">564,458</td></tr>
   <tr class="r2"><td><span class="string">urn:schemas--microsoft-com&#58;office&#58;office</span></td><td class="num">78,212</td></tr>
   <tr class="r1"><td><span class="string">urn:schemas--microsoft-com&#58;vml </span></td><td class="num">74,737</td></tr>
   <tr class="r2"><td><span class="string">http://www.w3.org/tr/rec-html40</span></td><td class="num">70,932</td></tr>
   <tr class="r1"><td><span class="string">urn:schemas--microsoft-com&#58;office&#58;word </span></td><td class="num">23,993</td></tr>
</table>

<h2 id="xmlrelated">Other XML-related attributes</h2>
<h3>Xml&#58;space</h3>
<p>The <code class="att">xml&#58;space</code> attribute is used to signal that contained spacing is important 
   and should be preserved. It can be applied to any element, but, for most markup 
   scenarios, it will typically be interesting only in JavaScript and CSS contexts. 
   In the URLs that MAMA analyzed, this holds true: the attribute was used 520 times
   with the <code class="elem">SCRIPT</code> element, 140 times in the 
   <code class="elem">STYLE</code> element, but was not detected with any other elements.</p>
    
<h3>Xml&#58;lang</h3>
<p>This attribute is used to define the natural language of an element&#39;s contents. 
   It takes as a value an <a href="http://www.ietf.org/rfc/rfc3066.txt">RFC 3066</a> 
   language code. As you can see from the table below (Fig 5-1), the most popular 
   place to use this attribute is the <code class="elem">HTML</code> element; it 
   dwarfs all other usages by a factor of almost 100.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> Elements that use the xml:lang attribute</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">HTML</code></td><td class="num">213,216</td><td><code class="elem">LINK</code></td><td class="num">254</td></tr>
   <tr class="r2"><td><code class="elem">SPAN</code></td><td class="num">2,886</td><td><code class="elem">P</code></td><td class="num">195</td></tr>
   <tr class="r1"><td><code class="elem">META</code></td><td class="num">2,333</td><td><code class="elem">HEAD</code></td><td class="num">133</td></tr>
   <tr class="r2"><td><code class="elem">A</code></td><td class="num">1,258</td><td><code class="elem">INPUT</code></td><td class="num">97</td></tr>
   <tr class="r1"><td><code class="elem">BODY</code></td><td class="num">824</td><td><code class="elem">EM</code></td><td class="num">93</td></tr>
   <tr class="r2"><td><code class="elem">ACRONYM</code></td><td class="num">385</td><td><code class="elem">IMG</code></td><td class="num">74</td></tr>
   <tr class="r1"><td><code class="elem">DIV</code></td><td class="num">328</td><td><code class="elem">TITLE</code></td><td class="num">72</td></tr>
   <tr class="r2"><td><code class="elem">ABBR</code></td><td class="num">322</td><td><code class="elem">H2</code></td><td class="num">69</td></tr>
   <tr class="r1"><td><code class="elem">LI</code></td><td class="num">278</td><td><code class="elem">H1</code></td><td class="num">61</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-tables/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Tables</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-css-quantities-and-sizes/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: CSS quantities and sizes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
