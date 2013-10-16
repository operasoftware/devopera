Title: MAMA: Phrase, block, list, and other elements
----
Date: 2008-11-21 10:52:14
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-hyperlinks/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Hyperlinks</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-images-elements-and-formats/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Images - elements and formats</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>


<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#phrase">Phrase elements</a></li>
    <li><a href="#font">FONT element: Markup dedicated to visual formatting</a></li>
    <li><a href="#block">Basic block elements</a></li>
    <li><a href="#list">List elements</a></li>
    <li><a href="#ruby">Ruby elements</a></li>
    <li><a href="#obsolete">Obsolete elements</a></li>
    <li><a href="#extensions">Browser extension elements/attributes</a></li>
    <li><a href="#misc">Miscellaneous elements</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>This section is a catch-all, covering the &quot;rest&quot; of popular markup in use 
   that did not easily fall into the other markup categories. It covers basic 
   phrase and block markup, list-related elements, browser extensions, and other 
   elements and attributes. While none of these elements are among the 10 most 
   popular, they do constitute a majority among the next 10 and the following 
   20 as well.</p>

<h2 id="phrase">Phrase elements</h2>
<p>The purpose of many markup elements is to declare the appearance or nature of 
   the embedded text. The following 22 elements either describe some simple 
   formatting instructions for text content or have a loftier goal of describing 
   the intrinsic nature of the content. Applying a bold effect is the most popular 
   usage for this type of element (<code class="elem">STRONG</code> almost always 
   equates to bold formatting). The almost eight-fold preference of <code class="elem">SUP</code> 
   over the comparable <code class="elem">SUB</code> element is puzzling.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> Frequencies of phrase markup</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="12">&#xA0;</th><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">B</code></td><td class="num">1,805,495</td><td><code class="elem">CITE</code></td><td class="num">12,562</td></tr>
   <tr class="r2"><td><code class="elem">SPAN</code></td><td class="num">1,527,964</td><td><code class="elem">ACRONYM</code></td><td class="num">10,983</td></tr>
   <tr class="r1"><td><code class="elem">STRONG</code></td><td class="num">1,102,056</td><td><code class="elem">SUB</code></td><td class="num">9,378</td></tr>
   <tr class="r2"><td><code class="elem">I</code></td><td class="num">668,742</td><td><code class="elem">S</code></td><td class="num">7,767</td></tr>
   <tr class="r1"><td><code class="elem">EM</code></td><td class="num">351,594</td><td><code class="elem">CODE</code></td><td class="num">7,595</td></tr>
   <tr class="r2"><td><code class="elem">U</code></td><td class="num">342,612</td><td><code class="elem">STRIKE</code></td><td class="num">5,991</td></tr>
   <tr class="r1"><td><code class="elem">SMALL</code></td><td class="num">155,962</td><td><code class="elem">DFN</code></td><td class="num">3,584</td></tr>
   <tr class="r2"><td><code class="elem">BIG</code></td><td class="num">76,946</td><td><code class="elem">Q</code></td><td class="num">1,785</td></tr>
   <tr class="r1"><td><code class="elem">SUP</code></td><td class="num">73,309</td><td><code class="elem">SAMP</code></td><td class="num">1,609</td></tr>
   <tr class="r2"><td><code class="elem">TT</code></td><td class="num">15,480</td><td><code class="elem">KBD</code></td><td class="num">1,313</td></tr>
   <tr class="r1"><td><code class="elem">ABBR</code></td><td class="num">14,902</td><td><code class="elem">VAR</code></td><td class="num">1,258</td></tr>
</table>

<h2 id="font"><code class="elem">FONT</code> element: markup dedicated to visual formatting</h2>
<p>This element was originally a Netscape extension that later was included in 
   HTML 3.2 and then immediately deprecated&#8212;much greater control is attainable 
   using CSS. That does not stop it from remaining extremely popular with authors. 
   In fact, it is <strong>THE</strong> most popular phrase markup element, even 
   more popular than the <code class="elem">B</code> or <code class="elem">SPAN</code> 
   elements.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> FONT element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FONT</code></td><td class="num">2,061,417</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Size</code></td><td class="num">1,709,405</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Color</code></td><td class="num">1,634,714</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Face</code></td><td class="num">1,379,110</td></tr>
</table>

<h3>Attribute values</h3>
<p>Because of the popularity of this element, and other studies focusing their 
   attentions on other areas of markup (Hickson) or CSS (Saarsoo), it was instructive 
   to look at values for some HTML attributes that had not been discussed 
   before. The 3 main <code class="elem">FONT</code> attributes were ripe for this 
   type of analysis.</p>

<h3><code class="att">Size</code> attribute</h3>
<p>With the <code class="att">Size</code> attribute, absolute font size values 
   are preferred over relative font size changes. Font size <span class="string">&quot;2&quot;</span> 
   is the most popular, with <span class="string">&quot;1&quot;</span> also having high representation.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-2:</strong> 
   FONT Size values with highest frequency<br />(Also see the <a href="fontsizelist-url.htm">full frequency table</a>.)</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">2</span></td><td class="num">967,193</td><td><span class="string">-1</span></td><td class="num">311,017</td></tr>
   <tr class="r2"><td><span class="string">1</span></td><td class="num">785,227</td><td><span class="string">6</span></td><td class="num">204,675</td></tr>
   <tr class="r1"><td><span class="string">3</span></td><td class="num">488,919</td><td><span class="string">-2</span></td><td class="num">182,372</td></tr>
   <tr class="r2"><td><span class="string">4</span></td><td class="num">485,621</td><td><span class="string">+1</span></td><td class="num">170,310</td></tr>
   <tr class="r1"><td><span class="string">5</span></td><td class="num">332,907</td><td><span class="string">+2</span></td><td class="num">115,593</td></tr>
</table>

<h3><code class="att">Color</code> attribute</h3>
<p>The hexadecimal (#RRGGBB syntax) method is preferred over the friendly color names. White 
   and black have the clear edge in the frequency list, while blue, red, yellow, 
   and gray are also very popular.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-3:</strong> 
   FONT Color values with highest frequency<br />(Also see the <a href="fontcolorlist-url.htm">full 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">#ffffff</span></td><td class="num">535,698</td><td><span class="string">red</span></td><td class="num">90,996</td></tr>
   <tr class="r2"><td><span class="string">#000000</span></td><td class="num">442,291</td><td><span class="string">white</span></td><td class="num">90,452</td></tr>
   <tr class="r1"><td><span class="string">#ff0000</span></td><td class="num">318,323</td><td><span class="string">#666666</span></td><td class="num">84,941</td></tr>
   <tr class="r2"><td><span class="string">#0000ff</span></td><td class="num">188,611</td><td><span class="string">#ffff00</span></td><td class="num">81,481</td></tr>
   <tr class="r1"><td><span class="string">#000080</span></td><td class="num">101,950</td><td><span class="string">black</span></td><td class="num">77,329</td></tr>
</table>

<h3><code class="att">Face</code> attribute</h3>
<p>This attribute allows you to specify the type of font used, in the same manner 
   as the <code class="prop">font-family</code> CSS property. The &quot;Arial&quot; font is a runaway 
   favorite here, while &quot;Helvetica&quot;, &quot;Verdana&quot; and &quot;sans-serif&quot; are only half as 
   popular. This attribute value allows a comma-separated list of font names, so 
   &quot;Arial&quot; may be very popular as a primary font choice, or it may also be a popular 
   fallback font used when designating other specific fonts.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-4:</strong> 
   FONT Face values with highest frequency<br />(Also see the <a href="fontfacelist-url.htm">full 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">Arial</span></td><td class="num">1,036,962</td><td><span class="string">times</span></td><td class="num">101,094</td></tr>
   <tr class="r2"><td><span class="string">Helvetica</span></td><td class="num">660,926</td><td><span class="string">tahoma</span></td><td class="num">93,718</td></tr>
   <tr class="r1"><td><span class="string">Verdana</span></td><td class="num">548,563</td><td><span class="string">geneva</span></td><td class="num">86,016</td></tr>
   <tr class="r2"><td><span class="string">sans-serif</span></td><td class="num">486,824</td><td><span class="string">serif</span></td><td class="num">72,203</td></tr>
   <tr class="r1"><td><span class="string">Times New Roman</span></td><td class="num">197,881</td><td><span class="string">comic sans ms</span></td><td class="num">68,708</td></tr>
</table>

<h3>About Face!: Fonts used in Japan</h3>
<p>This is a good time to make use of MAMA&#39;s country tracking in order to locate 
   regional differences in specific font use. Japanese font usage on Web pages, 
   as a break-out example, would likely have specific trends very different than 
   that of the rest of the Web-at-large. There were 124,976 URLs tracked in MAMA 
   identified as being from Japan, and only 23,466 used the <code class="elem">FONT</code> 
   <code class="att">Face</code> attribute. In this restricted population, the 
   &quot;Arial&quot; font surprisingly takes the top spot again. This is a bit odd because 
   &quot;Arial&quot; does not contain any Japanese character glyphs. Perhaps &quot;Arial&quot; is again 
   being used as a fallback font. Japan-specific fonts &quot;Osaka&quot; and &quot;MS UI Gothic&quot; 
   also have high representation here.</p> 

<p class="note"><strong>Note:</strong> Some of the values in the full frequency 
   table are meaningless gibberish, due to a bug in MAMA&#39;s storage of multi-byte 
   Asian characters.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-5:</strong> 
   FONT Face values with highest frequency in Japan<br />(Also see the <a href="fontfacejplist-url.htm">full 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">Arial</span></td><td class="num">3,333</td><td><span class="string">verdana</span></td><td class="num">1,303</td></tr>
   <tr class="r2"><td><span class="string">Osaka</span></td><td class="num">2,615</td><td><span class="string">sans-serif</span></td><td class="num">1,235</td></tr>
   <tr class="r1"><td><span class="string">Helvetica</span></td><td class="num">1,738</td><td><span class="string">times</span></td><td class="num">607</td></tr>
   <tr class="r2"><td><span class="string">Times New Roman</span></td><td class="num">1,677</td><td><span class="string">comic sans ms</span></td><td class="num">567</td></tr>
   <tr class="r1"><td><span class="string">MS UI Gothic</span></td><td class="num">1,627</td><td><span class="string">century</span></td><td class="num">542</td></tr>
</table>

<h2 id="block">Basic block elements</h2>
<p>The <code class="elem">P</code> and <code class="elem">DIV</code> elements are the 
   workhorses of HTML, as expected, but the popularity of <code class="elem">CENTER</code> 
   is higher than expected, being encountered more often than any of the 
   <code class="elem">Hx</code> heading levels. The decreasing popularity of the 
   heading levels from <code class="elem">H1</code>-<code class="elem">H6</code> 
   is not a surprise.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> 
   Frequencies of Block elements/attributes</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="9">&#xA0;</th>
       <th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">P</code></td><td class="num">2,702,935</td><td><code class="elem">H4</code></td><td class="num">185,110</td></tr>
   <tr class="r2"><td><code class="elem">DIV</code></td><td class="num">2,499,779</td><td><code class="elem">H5</code></td><td class="num">103,060</td></tr>
   <tr class="r1"><td><code class="elem">CENTER</code></td><td class="num">1,076,535</td><td><code class="elem">ADDRESS</code></td><td class="num">50,269</td></tr>
   <tr class="r2"><td><code class="elem">H1</code></td><td class="num">769,344</td><td><code class="elem">H6</code></td><td class="num">45,676</td></tr>
   <tr class="r1"><td><code class="elem">H2</code></td><td class="num">573,002</td><td><code class="elem">PRE</code></td><td class="num">36,620</td></tr>
   <tr class="r2"><td><code class="elem">H3</code></td><td class="num">438,496</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">63</td></tr>
   <tr class="r1"><td><code class="elem">BLOCKQUOTE</code></td><td class="num">188,947</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Cite</code></td><td class="num">1,402</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3>A common attribute for block elements: <code class="att">Align</code></h3>
<p>Many of the basic block elements have the <code class="att">Align</code> attribute 
   in common, which controls horizontal alignment of the content within the block. 
   More than half of all URLs with <code class="elem">P</code> elements also use the 
   <code class="att">Align</code> attribute on at least one of the element instances, but 
   the prize for highest usage goes to the <code class="elem">DIV</code> element: 
   67.82% of the URLs that use <code class="elem">DIV</code> also have at least 
   one of the <code class="elem">DIV</code>s using the <code class="att">Align</code> 
   attribute. The Heading elements (<code class="elem">H1</code>-<code class="elem">H6</code>) 
   all have similar usage rates for the <code class="att">Align</code> attribute: ~15-20%.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-2:</strong> 
   Usage of the Align attribute in block elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% Total<br />element<br />usage</th><th rowspan="5">&#xA0;</th>
       <th>ELEMENT</th><th>Frequency</th><th>% Total<br />element<br />usage</th></tr>
   <tr class="r1"><td><code class="elem">DIV</code></td><td class="num">1,695,287</td><td class="num">67.82%</td><td><code class="elem">H3</code></td><td class="num">60,477</td><td class="num">13.79%</td></tr>
   <tr class="r2"><td><code class="elem">P</code></td><td class="num">1,375,278</td><td class="num">50.88%</td><td><code class="elem">H4</code></td><td class="num">30,682</td><td class="num">16.58%</td></tr>
   <tr class="r1"><td><code class="elem">H1</code></td><td class="num">110,342</td><td class="num">14.34%</td><td><code class="elem">H5</code></td><td class="num">21,302</td><td class="num">20.67%</td></tr>
   <tr class="r2"><td><code class="elem">H2</code></td><td class="num">76,291</td><td class="num">13.31%</td><td><code class="elem">H6</code></td><td class="num">10,342</td><td class="num">22.64%</td></tr>
</table>

<h2 id="list">List elements</h2>
<p>It is surprising that the unordered list (<code class="elem">UL</code>) is 
   almost 20 times as popular as the ordered list (<code class="elem">OL</code>)&#8212;one would think that ranking things would be a more popular activity on the 
   Web (hotornot.com, anyone?). The <code class="elem">UL</code> and <code class="elem">OL</code> 
   elements are used in the same documents in 29,564 cases (~2/3 of the <code class="elem">OL</code> 
   total). The <code class="elem">DL</code> list also finishes the race far in 
   advance of the <code class="elem">OL</code> element, at almost a 2-to-1 ratio. 
   The deprecated <code class="elem">MENU</code> and <code class="elem">DIR</code> 
   elements are both <strong>definitely</strong> on the way out&#8212;if usage of 
   <code class="elem">OL</code> compared to <code class="elem">UL</code> seemed rare, 
   the situation for <code class="elem">MENU</code> and <code class="elem">DIR</code> is dire.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> 
   Frequencies of List elements/attributes</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">LI</code></td><td class="num">843,869</td><td><code class="elem">DT</code></td><td class="num">74,984</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">5854</td><td><code class="elem">DD</code></td><td class="num">71,477</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Value</code></td><td class="num">597</td><td><code class="elem">OL</code></td><td class="num">47,196</td></tr>
   <tr class="r2"><td><code class="elem">UL</code></td><td class="num">809,915</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Start</code></td><td class="num">2,266</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">23,996</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">3,425</td></tr>
   <tr class="r2"><td><code class="elem">DL</code></td><td class="num">84,257</td><td><code class="elem">DIR</code></td><td class="num">4,397</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Compact</code></td><td class="num">583</td><td><code class="elem">MENU</code></td><td class="num">1,906</td></tr>
</table>

<h3>The <code class="att">Type</code> attribute of <code class="elem">LI</code>, 
   <code class="elem">UL</code> and <code class="elem">OL</code></h3>
<p>MAMA stored the values of the <code class="att">Type</code> attribute for the 
   <code class="elem">LI</code> element and combined the <code class="att">Type</code> 
   values for <code class="elem">UL</code> and <code class="elem">OL</code> elements. 
   The expected keywords are dominant in both cases, but a prominent swap occurs 
   between the frequency tables for this attribute of the 
   <a href="litypelist-url.htm"><code class="elem">LI</code> element</a> and the 
   <a href="olultypelist-url.htm"><code class="elem">UL</code>/<code class="elem">OL</code> 
   elements</a>. The most popular value for <code class="elem">LI</code>/<code class="att">Type</code> 
   is <span class="string">&quot;square&quot;</span>, followed by <span class="string">&quot;disc&quot;</span>. 
   The top <code class="elem">OL</code>-<code class="elem">UL</code>/<code class="att">Type</code> 
   values are the same, but reversed. There may be an obvious explanation for this 
   that I am missing.</p>

<h2 id="ruby">Ruby elements</h2>
<p>The <code class="elem">RUBY</code> elements were introduced to HTML in 
   XHTML 1.1 for primary use in select Asian language situations. The various 
   Ruby-related elements still appear to suffer from low adoption. As expected, 
   the clear majority of cases (265 of 289) are Japanese URLs.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> Usage of Ruby elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">RUBY</code></td><td class="num">289</td></tr>
   <tr class="r2"><td><code class="elem">RT</code></td><td class="num">278</td></tr>
   <tr class="r1"><td><code class="elem">RB</code></td><td class="num">216</td></tr>
   <tr class="r2"><td><code class="elem">RP</code></td><td class="num">204</td></tr>
</table>

<h2 id="obsolete">Obsolete elements</h2>
<p>These elements were obsolete back when HTML 2.0 was the latest and greatest 
   version in the land. As you can see, they have all but disappeared from 
   author&#39;s development lexicons.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Usage of obsolete elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">XMP</code></td><td class="num">311</td></tr>
   <tr class="r2"><td><code class="elem">PLAINTEXT</code></td><td class="num">189</td></tr>
   <tr class="r1"><td><code class="elem">LISTING</code></td><td class="num">32</td></tr>
</table>

<h2 id="extensions">Browser extension elements/attributes</h2>
<p>Some elements and attributes have been created by browser vendors in the past 
   but have not been embraced in the standards. The functionality of the oft-maligned 
   <code class="elem">BLINK</code> element was absorbed in CSS to become 
   &quot;<code class="prop">text-decoration</code>: <span class="string">blink</span>&quot;. 
   With time, usage of the <code class="elem">BLINK</code> element will disappear, 
   but currently <code class="elem">BLINK</code>&#39;s usage by 26,807 URLs is ~36% 
   of the &quot;<code class="prop">text-decoration</code>: <span class="string">blink</span>&quot; 
   version. Some extensions catch on, while others do not. The <code class="elem">LAYER</code> 
   and <code class="elem">ILAYER</code> elements&#8212;both Netscape 4 specific elements&#8212;are 
   fairly popular, while usage of <code class="elem">MULTICOL</code>, an element 
   introduced and only supported in the same Netscape version is almost nonexistent. 
   Of all the browser extensions that have not gained standards traction, the crown 
   definitely belongs to <code class="elem">MARQUEE</code>&#8212;an element originating
   in Microsoft&#39;s Internet Explorer 2.0 and now embraced by all major browsers.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-1:</strong> Usage of browser extensions</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="15">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">MARQUEE</code></td><td class="num">140,328</td><td><code class="elem">SPACER</code></td><td class="num">34,470</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Scrollamount</code></td><td class="num">73,551</td><td><code class="elem">BLINK</code></td><td class="num">26,807</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">67,071</td><td><code class="elem">LAYER</code></td><td class="num">26,305</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Scrolldelay</code></td><td class="num">66,185</td><td><code class="elem">ILAYER</code></td><td class="num">21,391</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">58,552</td><td><code class="elem">NOLAYER</code></td><td class="num">12,389</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Direction</code></td><td class="num">43,831</td><td><code class="elem">MULTICOL</code></td><td class="num">75</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Behavior</code></td><td class="num">37,835</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">32,466</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">23,804</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Loop</code></td><td class="num">16,055</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">9,059</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Truespeed</code></td><td class="num">6,182</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Hspace</code></td><td class="num">2,159</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Vspace</code></td><td class="num">2,052</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="misc">Miscellaneous elements</h2>
<p>These elements are a grab bag of markup that do not really fit in other categories, 
   but as you can see by the popularity of <code class="elem">BR</code> (the 11th 
   most popular element overall), they cannot be ignored. The revision control 
   elements <code class="elem">INS</code> and <code class="elem">DEL</code>, along 
   with the bi-directional control element <code class="elem">BDO</code> were all 
   introduced in HTML 4.0, but none of them have any significant authoring traction 
   &quot;in the wild&quot; even though they have been around for over 10 years.</p>

<p class="note"><strong>Note:</strong> The value in parentheses for the <code class="elem">BR</code> 
   element indicates the frequency of &quot;<code class="elem">&lt;br /&gt;</code>&quot;, 
   which was detected separately from &quot;<code class="elem">&lt;br&gt;</code>&quot;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-1:</strong> Usage of misc. elements</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="15">&#xA0;</th>
        <th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr valign="top" class="r1"><td><code class="elem">BR</code></td><td class="num">2,859,662<br />(168,642)</td><td><strong>WBR</strong></td><td class="num">4,883</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Clear</code></td><td class="num">107,624</td><td><code class="elem">INS</code></td><td class="num">1,344</td></tr>
   <tr class="r1"><td><code class="elem">HR</code></td><td class="num">729,380</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Datetime</code></td><td class="num">139</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Size</code></td><td class="num">227,745</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Cite</code></td><td class="num">82</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">226,657</td><td><code class="elem">DEL</code></td><td class="num">1,243</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Noshade</code></td><td class="num">117,978</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Datetime</code></td><td class="num">165</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">100,044</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Cite</code></td><td class="num">33</td></tr>
   <tr class="r2"><td><code class="elem">NOBR</code></td><td class="num">89,903</td><td><code class="elem">BDO</code></td><td class="num">167</td></tr>
   <tr class="r1"><td><code class="elem">BASEFONT</code></td><td class="num">13,158</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Dir</code></td><td class="num">147</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Size</code></td><td class="num">10,113</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Color</code></td><td class="num">7,231</td><td>&#xA0;</td><td>&#xA0;</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Face</code></td><td class="num">1,810</td><td>&#xA0;</td><td>&#xA0;</td></tr>   
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-hyperlinks/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Hyperlinks</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-images-elements-and-formats/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Images - elements and formats</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
