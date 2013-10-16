Title: MAMA: Tables
----
Date: 2008-11-28 10:37:27
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-plug-ins/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Plug-ins</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-xml/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: XML</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#nesting">How deeply are tables nested?</a></li>
    <li><a href="#table">TABLE element</a></li>
    <li><a href="#tdth">TD and TH elements</a></li>
    <li><a href="#tr">TR element</a></li>
    <li><a href="#tbhf">TBODY, THEAD and TFOOT elements</a></li>
    <li><a href="#caption">CAPTION element</a></li>
    <li><a href="#colgroup">COL and COLGROUP elements</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Tables have a bad reputation among the markup purists in the development community, 
   because many authors often use them for presentation purposes. Tables 
   generally increase the complexity of documents and can make them more difficult 
   to maintain. Authors do not really see these factors as significant drawbacks though, 
   judging by the overwhelming popularity of tables for layout. In practice, the use of presentation-only 
   tables by authors is what makes the main table-related elements some of the most 
   popular sub-elements of <code class="elem">BODY</code>, after the <code class="elem">A</code> 
   and <code class="elem">IMG</code> elements. The most frequently occurring of 
   these is the <code class="elem">TABLE</code> element, found in 2,894,184 of MAMA&#39;s 
   URLs (82.47%).</p>

<h3>Usage of the table elements</h3>
<p>Authors have a definite preference for the table elements they use. Almost every 
   table uses the <code class="elem">TABLE</code>, <code class="elem">TR</code> and 
   <code class="elem">TD</code> elements. All of the other elements are used rarely 
   by comparison. The <code class="elem">CAPTION</code>, <code class="elem">COL</code>, 
   <code class="elem">THEAD</code>, <code class="elem">COLGROUP</code>, and 
   <code class="elem">TFOOT</code> elements are all used in less than 1% of 
   <code class="elem">TABLE</code> occurrences.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 1-1:</strong> Frequency of table-related elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">TABLE</code></td><td class="num">2,894,184</td><td><code class="elem">CAPTION</code></td><td class="num">23,306</td></tr>
   <tr class="r2"><td><code class="elem">TD</code></td><td class="num">2,891,972</td><td><code class="elem">COL</code></td><td class="num">21,775</td></tr>
   <tr class="r1"><td><code class="elem">TR</code></td><td class="num">2,891,205</td><td><code class="elem">THEAD</code></td><td class="num">21,474</td></tr>
   <tr class="r2"><td><code class="elem">TBODY</code></td><td class="num">364,542</td><td><code class="elem">COLGROUP</code></td><td class="num">12,225</td></tr>
   <tr class="r1"><td><code class="elem">TH</code></td><td class="num">148,344</td><td><code class="elem">TFOOT</code></td><td class="num">3,947</td></tr>
</table>

<h3>Use of table elements together in the same page</h3>
<p>Looking at the cases where the major table elements are used in the same 
   document, there are thousands of instances where they are not used together. 
   This is low considering the overall sample size. Keep in mind, that this 
   measure only counts usage <strong>anywhere</strong> in a document&#8212;not 
   usage together nor even correct usage. The true numbers here are likely higher 
   as a consequence. One wonders, for example, why a <code class="elem">TABLE</code> 
   would ever exist without any <code class="elem">TD</code> or <code class="elem">TH</code> 
   elements. Leftover markup? Authoring ignorance? The plot thickens....</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 1-2:</strong> Table elements used together in documents</caption>
   <tr valign="bottom"><th>ELEMENTS</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">TABLE</code> &amp;&amp; <code class="elem">TR</code></td><td class="num">2,889,207</td></tr>
   <tr class="r2"><td><code class="elem">TABLE</code> &amp;&amp; (<code class="elem">TD</code> || <code class="elem">TH</code>)</td><td class="num">2,892,682</td></tr>
   <tr class="r1"><td><code class="elem">TR</code> &amp;&amp; (<code class="elem">TD</code> || <code class="elem">TH</code>)</td><td class="num">2,890,605</td></tr>
</table>

<h2 id="nesting">How deeply are tables nested?</h2>
<p>One of the features requested for MAMA was the ability to detect deeply-nested 
   tables. Such structures can be excellent stress tests for a browser. In theory, 
   every <code class="elem">TABLE</code> open tag should have a corresponding closing 
   tag. As MAMA traversed a document, any <code class="elem">TABLE</code> open tags 
   added 1 to the current depth counter. A closing <code class="elem">TABLE</code> 
   tag would subtract 1 from the depth counter. When the depth counter hit a new high 
   score for the document, that value became the new &quot;maximum table depth&quot;. This rather 
   simplistic system yielded a number for a document&#39;s &quot;maximum table nesting depth&quot;&#8212;it does not necessarily mean that the open and closing tags are properly nested; 
   that is another issue entirely. The result here may be esoteric, but can still 
   provide some entertainment.</p>

<p>The maximum nesting depth discovered was a rather astounding 745 deep at 
   <a href="http://www.artsforeveryone.com/">http://www.artsforeveryone.com/</a>, 
   with the next-nearest depth being 495 in a case where tables syntax was used 
   very poorly. The average nesting depth when tables were used was 2.77.
   <a href="maxtabledepth-url.htm">The full frequency table</a> is also available.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> URLs with highest Table-nesting depth</caption>
   <tr valign="bottom"><th>URLs</th><th>Nesting<br />Depth</th></tr>
   <tr class="r1"><td><a href="http://www.artsforeveryone.com/">http://www.artsforeveryone.com/</a></td><td class="num">745</td></tr>
   <tr class="r2"><td><a href="http://mikv1.narod.ru/">http://mikv1.narod.ru/</a></td><td class="num">495</td></tr>
   <tr class="r1"><td><a href="http://www.cerveceria.info/index.html">http://www.cerveceria.info/index.html</a></td><td class="num">409</td></tr>
</table>

<h2 id="table"><code class="elem">TABLE</code> element</h2>
<p>This wrapper element for table structures is (naturally) the most popular 
   of its type. It ranks #8 overall in element popularity, used in 82.47% of all 
   MAMA&#39;s URLs. Many attributes were detected for this element, only some of which 
   are in the standards. A few of the attributes are <strong>VERY</strong> popular 
   with authors&#8212;<code class="att">Border</code>, <code class="att">Width</code>, 
   <code class="att">Cellpadding</code>, and <code class="att">Cellspacing</code> 
   are used in ~90% of all URLs that use tables. Other, less popular detected 
   attributes are either apparently bogus (such as <code class="att">Cool</code> and 
   <code class="att">Celpadding</code>) or editor extensions (like the numerous 
   Adobe GoLive attributes <code class="att">Gridx</code>/<code class="att">Gridy</code>, 
   <code class="att">Showgridx</code>/<code class="att">Showgridy</code> 
   and <code class="att">Usegridx</code>/<code class="att">Usegridy</code>).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> TABLE element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="11">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">TABLE</code></td><td class="num">2,894,184</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">87,291</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">2,691,899</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Summary</code></td><td class="num">78,448</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">2,637,117</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolorlight</code></td><td class="num">76,385</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Cellpadding</code></td><td class="num">2,585,020</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolordark</code></td><td class="num">73,284</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Cellspacing</code></td><td class="num">2,578,416</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Dir</code></td><td class="num">60,922</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">1,226,047</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Cols</code></td><td class="num">35,703</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">1,220,050</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Vspace</code></td><td class="num">19,771</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">893,573</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Hspace</code></td><td class="num">19,254</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolor</code></td><td class="num">417,650</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Rules</code></td><td class="num">12,628</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Background</code></td><td class="num">281,209</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Frame</code></td><td class="num">9,945</td></tr>
</table>

<h3>The <code class="att">Frame</code> attribute</h3>
<p>This attribute for the <code class="elem">TABLE</code> element was first specified 
   in HTML 4.0, and its adoption rate has not been very high&#8212;MAMA only found 9,945 
   URLs using it (0.34% of cases using the <code class="elem">TABLE</code> element). 
   Officially, it takes one of 9 discrete values, and, as expected, they are the most 
   popular ones. What never fails to surprise is how creative authors can be&#8212;MAMA 
   noted <strong>70</strong> different total values for this attribute (some of which 
   are listed in the <a href="tableframelist-url.htm">full frequency table</a>). The 
   top value specifies no border at all, and the next most popular is a complete 
   border&#8212;the main purpose of this attribute was to give authors <strong>more</strong> 
   control over table borders than just a simple on/off setting, but it seems that 
   is how authors use this attribute.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-2:</strong> Popular Frame attribute values<br />
        (See also the <a href="tableframelist-url.htm">complete frequency table</a>.)</caption>
   <tr valign="bottom"><th>Value</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">void</span></td><td class="num">3,716</td><td><span class="string">vsides</span></td><td class="num">402</td></tr>
   <tr class="r2"><td><span class="string">box</span></td><td class="num">3,147</td><td><span class="string">above</span></td><td class="num">295</td></tr>
   <tr class="r1"><td><span class="string">border</span></td><td class="num">730</td><td><span class="string">rhs</span></td><td class="num">184</td></tr>
   <tr class="r2"><td><span class="string">hsides</span></td><td class="num">544</td><td><span class="string">lhs</span></td><td class="num">144</td></tr>
   <tr class="r1"><td><span class="string">below</span></td><td class="num">534</td><td><span class="string">0</span></td><td class="num">83</td></tr>
</table>

<h3>The <code class="att">Rules</code> attribute</h3>
<p>This is a companion attribute to the <code class="att">Frame</code> attribute 
   covered in the previous section. The <code class="att">Rules</code> and 
   <code class="att">Frame</code> attributes were both introduced at the same time in HTML 
   4.0 and, together, were meant to give authors complex table border control. It 
   was discovered in 12,628 URLs (0.44% of cases using <code class="elem">TABLE</code>). 
   As with <code class="att">Frame</code>, many values were detected in addition 
   to the 5 accepted values. The most popular attribute value again turns the border 
   <strong>off</strong> completely, and the next most popular turns it <strong>on</strong> 
   completely. Give authors the keys to the sports car, and they only use it to drive 
   to the corner grocery store. </p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-3:</strong> Popular Rules attribute values<br />
        (See also the <a href="tableruleslist-url.htm">complete frequency table</a>.)</caption>
   <tr valign="bottom"><th>Value</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">none</span></td><td class="num">6,134</td><td><span class="string">cols</span></td><td class="num">840</td></tr>
   <tr class="r2"><td><span class="string">all</span></td><td class="num">4,512</td><td><span class="string">groups</span></td><td class="num">426</td></tr>
   <tr class="r1"><td><span class="string">rows</span></td><td class="num">1,524</td><td><span class="string">0</span></td><td class="num">54</td></tr>
</table>

<h2 id="tdth"><code class="elem">TD</code> and <code class="elem">TH</code> elements</h2>
<p>These two elements are grouped together because they mostly share the same 
   attributes and have very similar usage. However, their usage rates could not be more 
   different. The <code class="elem">TD</code> element is the most popular of all the table 
   sub-elements, and it is the ninth most popular element overall (used in 82.41% 
   of all URLs in MAMA and 99.92% of all URLs using the <code class="elem">TABLE</code> 
   element). The <code class="elem">TH</code> element, on the other hand, is used in only 5.13% 
   of URLs using the <code class="elem">TABLE</code> element. Because of the 
   inherent attribute overlap between <code class="elem">TD</code> and 
   <code class="elem">TH</code>, it can be interesting to compare attribute usage 
   rates between the two elements. Percentages of the total element usage are 
   also provided to help with comparisons.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> TD element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/<br />Attribute</th><th>Frequency</th><th>% Of<br />Element</th><th rowspan="8">&#xA0;</th>
        <th>ELEMENT/<br />Attribute</th><th>Frequency</th><th>% Of<br />Element</th><th rowspan="8">&#xA0;</th>
        <th>ELEMENT/<br />Attribute</th><th>Frequency</th><th>% Of<br />Element</th></tr>
   <tr class="r1"><td><code class="elem">TD</code></td><td class="num">2,891,972</td><td class="num">--</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Rowspan</code></td><td class="num">901,303</td><td class="num">31.17%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Xpos</code></td><td class="num">23,139</td><td class="num">0.80%</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">2,324,752</td><td class="num">80.39%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Background</code></td><td class="num">714,706</td><td class="num">24.71%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Content</code></td><td class="num">16,760</td><td class="num">0.58%</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">2,189,287</td><td class="num">75.70%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Nowrap</code></td><td class="num">353,572</td><td class="num">12.23%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Scope</code></td><td class="num">8,722</td><td class="num">0.30%</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">1,977,367</td><td class="num">68.37%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolor</code></td><td class="num">131,492</td><td class="num">4.55%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Abbr</code></td><td class="num">2,866</td><td class="num">0.10%</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Colspan</code></td><td class="num">1,711,437</td><td class="num">59.18%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolorlight</code></td><td class="num">28,070</td><td class="num">0.97%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Headers</code></td><td class="num">1,015</td><td class="num">0.04%</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">1,672,129</td><td class="num">57.82%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolordark</code></td><td class="num">26,273</td><td class="num">0.91%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Axis</code></td><td class="num">206</td><td class="num">0.01%</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">1,306,542</td><td class="num">45.18%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">24,141</td><td class="num">0.83%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Charoff</code></td><td class="num">114</td><td class="num">0.00%</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-2:</strong> TH element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/<br />Attribute</th><th>Frequency</th><th>% Of<br />Element</th><th rowspan="7">&#xA0;</th>
        <th>ELEMENT/<br />Attribute</th><th>Frequency</th><th>% Of<br />Element</th><th rowspan="7">&#xA0;</th>
        <th>ELEMENT/<br />Attribute</th><th>Frequency</th><th>% Of<br />Element</th></tr>
   <tr class="r1"><td><code class="elem">TH</code></td><td class="num">148,344</td><td class="num">--</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">28,195</td><td class="num">19.01%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolor</code></td><td class="num">3,342</td><td class="num">2.25%</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">46,799</td><td class="num">31.55%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">22,406</td><td class="num">15.10%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolorlight</code></td><td class="num">705</td><td class="num">0.48%</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">45,709</td><td class="num">30.81%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Nowrap</code></td><td class="num">10,469</td><td class="num">7.06%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolordark</code></td><td class="num">679</td><td class="num">0.46%</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Colspan</code></td><td class="num">38,587</td><td class="num">26.01%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Rowspan</code></td><td class="num">6,324</td><td class="num">4.26%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">149</td><td class="num">0.10%</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">35,710</td><td class="num">24.07%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Background</code></td><td class="num">5,354</td><td class="num">3.61%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Axis</code></td><td class="num">119</td><td class="num">0.08%</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Scope</code></td><td class="num">30,111</td><td class="num">20.30%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Abbr</code></td><td class="num">5,153</td><td class="num">3.47%</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Headers</code></td><td class="num">32</td><td class="num">0.02%</td></tr>
</table>

<h2 id="tr"><code class="elem">TR</code> element</h2>
<p>This element groups table cells (<code class="elem">TD</code> and 
   <code class="elem">TH</code> elements) into rows. It was used in 2,891,205 
   URLs from MAMA, or 99.90% of all URLs that used the <code class="elem">TABLE</code> 
   element. Unlike its <code class="elem">TD</code> and <code class="elem">TH</code> 
   sub-elements, authors appear to eschew the use of attributes for <code class="elem">TR</code> - 
   over 60% of all the URLs that used <code class="elem">TR</code> elements did 
   not carry attributes for any <code class="elem">TR</code> instance.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> TR element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">TR</code></td><td class="num">2,891,205</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolor</code></td><td class="num">24,073</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">642,250</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Background</code></td><td class="num">20,028</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">403,805</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">3,934</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">319,779</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolordark</code></td><td class="num">557</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">184,333</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bordercolorlight</code></td><td class="num">539</td></tr>
</table>

<h2 id="tbhf"><code class="elem">TBODY</code>, <code class="elem">THEAD</code> and 
   <code class="elem">TFOOT</code> elements</h2>
<p>These three elements are lumped together, but their usage varies widely. The 
   most popular, <code class="elem">TBODY</code>, is only used in 12.60% of table 
   situations. The <code class="elem">TBODY</code> element is almost 17 times as popular as 
   <code class="elem">THEAD</code>, and <code class="elem">TBODY</code> leaves 
   <code class="elem">TFOOT</code> in the dust by almost a factor of 100. A number 
   of reasons could be found for the wide variation here, including editors being 
   responsible for inflating the numbers of <code class="elem">THEAD</code> elements. However, 
   we could take the semantic meaning at face value: maybe headers for tables are 
   just not very popular. By the same token, one could say that even fewer authors 
   are inclined to use footers for their tables. With the ever-popular usage of 
   tables solely for layout, attaching such altruistic semantics to these elements 
   may be folly anyway.</p>

<p>It would be unfair to say that authors <strong>never</strong> use attributes 
   with these elements, but with the most popular attribute for each achieving a 
   mere 0.25-0.4% of the overall element usage, the numbers only get worse.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> TBODY, THEAD, and TFOOT element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="5">&#xA0;</th>
        <th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">TBODY</code></td><td class="num">364,542</td><td><code class="elem">THEAD</code></td><td class="num">21,474</td>
        <td><code class="elem">TFOOT</code></td><td class="num">3,947</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">1,386</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">52</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">15</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">1,092</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">21</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">12</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">405</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">36</td>
        <td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">6</td></tr>
</table>

<h2 id="caption"><code class="elem">CAPTION</code> element</h2>
<p>This element is poorly used in MAMA&#39;s URL set&#8212;only 0.81% of all 
   <code class="elem">TABLE</code> occurrences.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> TR element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">CAPTION</code></td><td class="num">23,306</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">3,775</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">249</td></tr>
</table>

<h2 id="colgroup"><code class="elem">COL</code> and <code class="elem">COLGROUP</code> elements</h2>
<p>As with the <code class="elem">CAPTION</code> element, both of these elements 
   were found to have low usage rates (less than 1% of all table usages). Most 
   instances of the <code class="elem">COL</code> element (83.76%) use the 
   <code class="att">Width</code> attribute, but other detected attributes for 
   <code class="elem">COL</code> and <code class="elem">COLGROUP</code> are used 
   in 15% of the element&#39;s instances or less.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-1:</strong> COL element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">COL</code></td><td class="num">21,775</td><td><code class="elem">COLGROUP</code></td><td class="num">12,225</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">18,238</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Span</code></td><td class="num">993</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Span</code></td><td class="num">3,676</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">869</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">1,758</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">249</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">1,537</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Valign</code></td><td class="num">175</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">88</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-plug-ins/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Plug-ins</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-xml/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: XML</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
