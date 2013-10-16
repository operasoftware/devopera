Title: MAMA: HEAD structure
----
Date: 2008-11-14 13:50:41
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-frames/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Frames</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-body-structure/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: BODY structure</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>


<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#head">HEAD and its sub-elements</a></li>
    <li><a href="#title">TITLE element</a></li>
    <li><a href="#meta">META element</a></li>
    <li><a href="#script">SCRIPT element</a></li>
    <li><a href="#link">LINK element</a></li>
    <li><a href="#style">STYLE element</a></li>
    <li><a href="#base">BASE element</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>The elements that constitute the Head section of a page contain meta information 
   about the document, providing data used to access crucial external resources or 
   other important information. The importance of these elements is highlighted by 
   their dominant usage above other elements.</p>

<p class="note"><strong>NOTE:</strong><br />The elements listed in this section usually 
   exist within the <code class="elem">HEAD</code> element, but the statistics 
   presented for these elements/attributes are for occurrences <em>anywhere</em> in 
   the document.</p>

<h2 id="head"><code class="elem">HEAD</code> and its sub-elements</h2>
<p>The <code class="elem">HEAD</code> element is the most popular of any markup 
   element, and its top 5 sub-elements are also in the top 20 of <strong>ALL</strong> 
   markup elements. Not all of the sub-elements are so popular. The obsolete 
   <code class="elem">ISINDEX</code> element was only found in 63 URLs&#8212;it 
   seems well and truly dead, having long-since been replaced by the much richer 
   interactive Forms we know and love today.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> Elements in the HEAD block</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">HEAD</code></td><td class="num">3,464,519</td><td><code class="elem">LINK</code></td><td class="num">2,018,510</td></tr>
   <tr class="r2"><td><code class="elem">TITLE</code></td><td class="num">3,459,207</td><td><code class="elem">STYLE</code></td><td class="num">1,313,454</td></tr>
   <tr class="r1"><td><code class="elem">META</code></td><td class="num">3,276,347</td><td><code class="elem">BASE</code></td><td class="num">266,149</td></tr>
   <tr class="r2"><td><code class="elem">SCRIPT</code></td><td class="num">2,528,823</td><td><code class="elem">ISINDEX</code></td><td class="num">63</td></tr>
</table>

<h3>The <code class="att">Profile</code> attribute of the HEAD element</h3>
<p>This attribute was detected 19,030 times in MAMA&#39;s URLs. It is used to specify 
   a URL location of a metadata profile. At least ~90% of the values point to the 
   <abbr title="Xhtml Friends Network">XFN</abbr> metadata system, which is 
   used by the <code class="att">Rel</code> attribute of hyperlinks to indicate 
   relationships between authors and other people. Other types occurring with some 
   frequency were Dublin Core and RSS syndication metadata.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> 
   Popular values for the HEAD Profile attribute<br />(See also the <a href="headprofile-url.htm">complete 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>Profile attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">http://gmpg.org/xfn/11/</span></td><td class="num">15,770</td></tr>
   <tr class="r2"><td><span class="string">http://gmpg.org/xfn/1/</span></td><td class="num">1,149</td></tr>
   <tr class="r1"><td><span class="string">http://dublincore.org/documents/dcq-html/</span></td><td class="num">395</td></tr>
   <tr class="r2"><td><span class="string">http://purl.org/metadata/dublin_core/</span></td><td class="num">313</td></tr>
</table>

<h2 id="title"><code class="elem">TITLE</code> element</h2>
<p>With 3,459,207 occurrences, this is the second most popular element overall. When 
   planning MAMA, it did not seem like storing the contents of the <code class="elem">TITLE</code> 
   element would be all that compelling. I did not know how long the contents might 
   reach either. So I settled for clamping the stored value to 255 characters. 
   Any content after the first 255 characters was not stored. This makes some 
   statistics about <code class="elem">TITLE</code> length meaningless, but others 
   can still be useful; 128,874 URLs had empty <code class="elem">TITLE</code> elements, 
   and 23,322 URLs had the maximum <code class="elem">TITLE</code> length (255 characters).</p>
    
<h2 id="meta"><code class="elem">META</code> element</h2>
<p>This element ranks 6th overall in usage. Because this level of popularity was 
   expected, MAMA stored additional details about some of the attribute values 
   that were expected to be interesting. Values for the <code class="att">HTTP-Equiv</code> 
   and <code class="att">Name</code> attributes were saved, as well as specific 
   values for the <code class="att">Content</code> attribute for the Content-Encoding 
   and Generator usages.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> META element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">META</code></td><td class="num">3,276,347</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Content</code></td><td class="num">3,273,610</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Http-equiv</code></td><td class="num">2,826,859</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">2,710,638</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Scheme</code></td><td class="num">34,807</td></tr>
</table>

<h3><code class="elem">META</code> <code class="att">Name</code> attribute values</h3>
<p>The numbers here show that <span class="string">&quot;keywords&quot;</span> and 
   <span class="string">&quot;description&quot;</span> are about equally popular. Perhaps 
   they are two great tastes that go great together on the Web? Yes. Over 90% of 
   the time, these two types of <code class="elem">META</code> are indeed used together.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-2:</strong> 
   Top META Name attribute values<br />(See also the <a href="metanamelist-url.htm">complete 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>META Name value</th><th>frequency</th><th rowspan="7">&#xA0;</th><th>META Name value</th><th>frequency</th></tr>
   <tr class="r1"><td><span class="string">keywords</span></td><td class="num">2,170,259</td><td><span class="string">copyright</span></td><td class="num">419,554</td></tr>
   <tr class="r2"><td><span class="string">description</span></td><td class="num">2,098,529</td><td><span class="string">progid</span></td><td class="num">280,923</td></tr>
   <tr class="r1"><td><span class="string">generator</span></td><td class="num">942,051</td><td><span class="string">distribution</span></td><td class="num">235,943</td></tr>
   <tr class="r2"><td><span class="string">robots</span></td><td class="num">931,622</td><td><span class="string">rating</span></td><td class="num">227,732</td></tr>
   <tr class="r1"><td><span class="string">author</span></td><td class="num">815,415</td><td><span class="string">language</span></td><td class="num">206,990</td></tr>
   <tr class="r2"><td><span class="string">revisit-after</span></td><td class="num">471,573</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3><code class="elem">META</code> <code class="att">Http-equiv</code> attribute values</h3>
<p>The big story here is that most documents declare their MIME type using a 
   <code class="elem">META</code> statement (over 75% of all URLs analyzed). 
   All other usages are dwarfed by the <span class="string">&quot;Content-type&quot;</span> value.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-3:</strong> 
   Top META Http-equiv attribute values<br />(See also the <a href="metahttpequivlist-url.htm">complete 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>META Http-equiv value</th><th>frequency</th><th rowspan="8">&#xA0;</th><th>META Http-equiv value</th><th>frequency</th></tr>
   <tr class="r1"><td><span class="string">content-type</span></td><td class="num">2,679,505</td><td><span class="string">cache-control</span></td><td class="num">71,245</td></tr>
   <tr class="r2"><td><span class="string">content-language</span></td><td class="num">456,078</td><td><span class="string">keywords</span></td><td class="num">56,833</td></tr>
   <tr class="r1"><td><span class="string">pragma</span></td><td class="num">167,801</td><td><span class="string">reply-to</span></td><td class="num">50,307</td></tr>
   <tr class="r2"><td><span class="string">refresh</span></td><td class="num">163,413</td><td><span class="string">content-script-type</span></td><td class="num">46,839</td></tr>
   <tr class="r1"><td><span class="string">expires</span></td><td class="num">163,350</td><td><span class="string">description</span></td><td class="num">43,694</td></tr>
   <tr class="r2"><td><span class="string">content-style-type</span></td><td class="num">114,828</td><td><span class="string">pics-label</span></td><td class="num">35,359</td></tr>
   <tr class="r1"><td><span class="string">imagetoolbar</span></td><td class="num">86,502</td><td><span class="string">page-enter</span></td><td class="num">34,575</td></tr>
</table>

<h3><code class="elem">META</code> <code class="att">Http-equiv</code>=<span class="string">&quot;content-type&quot;</span> 
    charset values</h3>
<p>Of the 2,679,505 URLs that used the <code class="elem">META</code> 
   <code class="att">Http-equiv</code>=<span class="string">&quot;content-type&quot;</span> 
   value, 2,363,865 of them (88.22%) also specified a <span class="string">&quot;charset&quot;</span> 
   parameter to provide encoding details. The top value was the western encoding 
   <span class="string">&quot;iso-8859-1&quot;</span>, which was 4 times as likely as any 
   other detected value. Encodings can sometimes be a bit cryptic, so the following 
   guide to languages and encoding values may be helpful with the short summary table 
   below (Fig 4-4) as well as the <a href="metacenc-url.htm">full frequency table</a> 
   for the <span class="string">&quot;charset&quot;</span> value:</p>

<ul>
    <li><strong>Cyrillic (includes Russian):</strong> windows-1251, koi8-r, iso-8859-5</li>
    <li><strong>Japanese:</strong> shift_jis, euc_jp, x-sjis, iso-2022-jp, shift-jis</li>
    <li><strong>Chinese:</strong> Trad. Chinese: big5, x-x-big5; Simp. Chinese: gb2312, gbk</li>
    <li><strong>Korean:</strong> euc-kr, ks_c_5601-1987</li>
</ul>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-4:</strong> Top META content-type/charset component values</caption>
   <tr valign="bottom"><th>META charset value</th><th>frequency</th><th rowspan="6">&#xA0;</th><th>META charset value</th><th>frequency</th></tr>
   <tr class="r1"><td><span class="string">iso-8859-1</span></td><td class="num">1,424,697</td><td><span class="string">windows-1251</span></td><td class="num">45,674</td></tr>
   <tr class="r2"><td><span class="string">windows-1252</span></td><td class="num">330,123</td><td><span class="string">windows-1250</span></td><td class="num">31,470</td></tr>
   <tr class="r1"><td><span class="string">utf-8</span></td><td class="num">249,084</td><td><span class="string">gb2312</span></td><td class="num">25,378</td></tr>
   <tr class="r2"><td><span class="string">shift_jis</span></td><td class="num">90,517</td><td><span class="string">big5</span></td><td class="num">12,282</td></tr>
   <tr class="r1"><td><span class="string">iso-8859-2</span></td><td class="num">59,850</td><td><span class="string">windows-1254</span></td><td class="num">10,318</td></tr>
</table>


<h3><code class="elem">META</code> <code class="att">Name</code>=<span class="string">&quot;generator&quot;</span>: 
   Editors and Content Management Systems (CMS) used</h3>
<p>MAMA also looked at these values in the section on markup validation. The most 
   noticeable nugget here is that the many incarnations of Microsoft FrontPage are 
   the definite leaders for this value. FrontPage occurs more than 8 times as 
   often as any other <code class="elem">META</code> 
   <code class="att">Name</code>=<span class="string">&quot;generator&quot;</span> value. 
   The following two tables are summary totals for the individual values found in 
   the full <a href="metagen-url.htm">per-URL frequency table</a>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-5:</strong> Editor usage tracked via META Name=&quot;generator&quot;</caption>
   <tr valign="bottom"><th>Editor substring</th><th>frequency</th><th rowspan="7">&#xA0;</th><th>Editor substring</th><th>frequency</th></tr>
   <tr class="r1"><td><span class="string">Microsoft FrontPage</span></td><td class="num">347,095</td><td><span class="string">Microsoft Visual Studio</span></td><td class="num">22,936</td></tr>
   <tr class="r2"><td><span class="string">Adobe GoLive</span></td><td class="num">41,865</td><td><span class="string">Adobe PageMill</span></td><td class="num">15,148</td></tr>
   <tr class="r1"><td><span class="string">Microsoft MSHTML</span></td><td class="num">40,030</td><td><span class="string">Claris Home Page</span></td><td class="num">6,259</td></tr>
   <tr class="r2"><td><span class="string">IBM WebSphere</span></td><td class="num">32,218</td><td><span class="string">Adobe Dreamweaver</span></td><td class="num">5,954</td></tr>
   <tr class="r1"><td><span class="string">NetObjects Fusion</span></td><td class="num">26,355</td><td><span class="string">Apple iWeb</span></td><td class="num">2,504</td></tr>
   <tr class="r2"><td><span class="string">Microsoft Word</span></td><td class="num">24,892</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>
    
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-6:</strong> CMS usage tracked via META Name=&quot;generator&quot;</caption>
   <tr valign="bottom"><th>CMS substring</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">Joomla</span></td><td class="num">34,852</td></tr>
   <tr class="r2"><td><span class="string">Typo3</span></td><td class="num">18,067</td></tr>
   <tr class="r1"><td><span class="string">WordPress</span></td><td class="num">16,594</td></tr>
   <tr class="r2"><td><span class="string">Blogger</span></td><td class="num">9,907</td></tr>
</table>

<h2 id="script"><code class="elem">SCRIPT</code> element</h2>
<p>We will be looking at scripting in much greater depth in a future section on Script, so for now 
   we will just take a quick look at the element and its attributes.</p>

<p class="note"><strong>Note:</strong> Many people seem to have problems 
   spelling &quot;language&quot; - a number of misspellings of this occur fairly frequently.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> SCRIPT element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>frequency</th></tr>
   <tr class="r1"><td><code class="elem">SCRIPT</code></td><td class="num">2,528,823</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Language</code></td><td class="num">1,965,725</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">1,769,337</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Src</code></td><td class="num">1,649,468</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Charset</code></td><td class="num">25,776</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Defer</code></td><td class="num">19,941</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">For</code></td><td class="num">4,177</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Event</code></td><td class="num">3,973</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">xml:space</code></td><td class="num">520</td></tr>
</table>

<h2 id="link"><code class="elem">LINK</code> element</h2>
<p>We will be looking at the dominant use of the <code class="elem">LINK</code> element 
   for CSS in much greater depth in a future section on CSS, so for now we&#39;ll just take a quick look at the element, its attributes 
   plus a detail view of the values for the <code class="att">Rel</code> and 
   <code class="att">Type</code>. Although the <code class="att">Href</code> and 
   <code class="att">Rel</code> attributes are not required by HTML 4.0, authors 
   appear to treat them that way&#8212;they are both used in over 99% of all 
   <code class="elem">LINK</code> usages. The frequency of the <code class="att">Rev</code> 
   attribute is higher than expected, but a random sampling reveals only the 
   <span class="string">&quot;made&quot;</span> value is in wide use.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> LINK element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>frequency</th></tr>
   <tr class="r1"><td><code class="elem">LINK</code></td><td class="num">2,018,510</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Href</code></td><td class="num">2,016,007</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Rel</code></td><td class="num">2,001,105</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">1,777,982</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Media</code></td><td class="num">288,862</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Title</code></td><td class="num">234,355</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Rev</code></td><td class="num">43,977</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Charset</code></td><td class="num">4,306</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Hreflang</code></td><td class="num">2,335</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Target</code></td><td class="num">1,585</td></tr>
</table>

<h3><code class="elem">LINK</code> <code class="att">Rel</code> attribute values</h3>
<p>This attribute was tracked in MAMA by breaking the value down into space-separated 
   components. External style sheet statements are present in 90% of <code class="elem">LINK</code> 
   instances, over 20% use the shortcut icon syntax, and ~8.5% of <code class="elem">LINK</code> 
   elements specify an alternate form (most likely RSS or similar based on the 
   <code class="att">Type</code> attribute values in the next section).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-2:</strong> 
   Top LINK Rel attribute values<br />(See also the <a href="linkrellist-url.htm">complete 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>LINK Rel value</th><th>frequency</th><th rowspan="7">&#xA0;</th><th>LINK Rel value</th><th>frequency</th></tr>
   <tr class="r1"><td><span class="string">stylesheet</span></td><td class="num">1,836,140</td><td><span class="string">search</span></td><td class="num">22,296</td></tr>
   <tr class="r2"><td><span class="string">icon</span></td><td class="num">451,386</td><td><span class="string">edit-time-data</span></td><td class="num">22,217</td></tr>
   <tr class="r1"><td><span class="string">shortcut</span></td><td class="num">434,440</td><td><span class="string">schema.dc</span></td><td class="num">19,193</td></tr>
   <tr class="r2"><td><span class="string">alternate</span></td><td class="num">170,342</td><td><span class="string">pingback</span></td><td class="num">18,270</td></tr>
   <tr class="r1"><td><span class="string">file-list</span></td><td class="num">46,894</td><td><span class="string">home</span></td><td class="num">12,145</td></tr>
   <tr class="r2"><td><span class="string">edituri</span></td><td class="num">35,383</td><td><span class="string">author</span></td><td class="num">11,894</td></tr>
</table>

<h3><code class="elem">LINK</code> <code class="att">Type</code> attribute values</h3>
<p>The <code class="att">Type</code> attribute is not required, but most authors 
   seem to use the <code class="att">Type</code> attribute for stylesheet and RSS 
   uses. The <code class="att">Type</code> usage ratio appears to fall off 
   considerably when specifying a shortcut icon though&#8212;there are ~450,000 
   uses of <code class="att">Rel</code>=<span class="string">&quot;icon&quot;</span> syntax, 
   but &quot;image/*&quot; MIME types only happen 1/3 of the time.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-3:</strong> 
   Top LINK Type attribute values<br />(See also the <a href="linktypelist-url.htm">complete 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>LINK Type value</th><th>frequency</th><th rowspan="9">&#xA0;</th><th>LINK Type value</th><th>frequency</th></tr>
   <tr class="r1"><td><span class="string">text/css</span></td><td class="num">1,720,750</td><td><span class="string">image/png</span></td><td class="num">9,770</td></tr>
   <tr class="r2"><td><span class="string">application/rss+xml</span></td><td class="num">147,654</td><td><span class="string">application/opensearchdescription+xml</span></td><td class="num">8,846</td></tr>
   <tr class="r1"><td><span class="string">image/x-icon</span></td><td class="num">103,102</td><td><span class="string">image/gif</span></td><td class="num">6,859</td></tr>
   <tr class="r2"><td><span class="string">application/rsd+xml</span></td><td class="num">35,387</td><td><span class="string">text/html</span></td><td class="num">4,280</td></tr>
   <tr class="r1"><td><span class="string">application/atom+xml</span></td><td class="num">34,866</td><td><span class="string">image/vnd.microsoft.icon</span></td><td class="num">3,169</td></tr>
   <tr class="r2"><td><span class="string">image/ico</span></td><td class="num">20,149</td><td><span class="string">application/wlwmanifest+xml</span></td><td class="num">2,615</td></tr>
   <tr class="r1"><td><span class="string">text/xml</span></td><td class="num">14,293</td><td><span class="string">application/xml</span></td><td class="num">1,094</td></tr>
   <tr class="r2"><td><span class="string">application/rdf+xml</span></td><td class="num">10,351</td><td><span class="string">images/x-icon</span></td><td class="num">1,006</td></tr>
</table>

<h2 id="style"><code class="elem">STYLE</code> element</h2>
<p>As was already mentioned, we will be looking at style sheets in much greater 
   depth in a future section on CSS, so for 
   now we will just take a quick look at the element and its attributes.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> STYLE element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>frequency</th></tr>
   <tr class="r1"><td><code class="elem">STYLE</code></td><td class="num">1,313,454</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">1,028,840</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Media</code></td><td class="num">116,336</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Title</code></td><td class="num">7,236</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">xml:space</code></td><td class="num">140</td></tr>
</table>

<h2 id="base"><code class="elem">BASE</code> element</h2>
<p>This element&#39;s original purpose was to declare a common root URL for relative 
   URLs in a document, so it is a bit surprising to find that the original usage 
   has been usurped in popularity by frame target control.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-1:</strong> BASE element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>frequency</th></tr>
   <tr class="r1"><td><code class="elem">BASE</code></td><td class="num">266,149</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Target</code></td><td class="num">159,479</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Href</code></td><td class="num">109,404</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-frames/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Frames</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-body-structure/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: BODY structure</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
