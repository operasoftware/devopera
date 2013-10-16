Title: MAMA: CSS quantities and sizes
----
Date: 2008-12-08 15:10:04
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-xml/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: XML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-css-syntax/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: CSS syntax</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#qtys">Quantities of CSS components</a></li>
    <li><a href="#venn">Venn diagram breakdown: CSS usage</a></li>
    <li><a href="#sizeext">Sizes: External CSS (LINK element)</a></li>
    <li><a href="#sizeembed">Sizes: Embedded CSS (STYLE element)</a></li>
    <li><a href="#sizeinline">Sizes: Inline CSS (Style attribute)</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>CSS was detected in 2,821,141 of MAMA&#39;s URLs (80.39%). &quot;Using CSS&quot; was defined as having any sort of content from 1 or more of the following 3 sources: </p>

<ul>
    <li>External CSS via the <code class="elem">LINK</code> element in the <a href="http://dev.opera.com/articles/view/mama-head-structure/#link"><code class="elem">HEAD</code> of the document</a></li>
    <li>Embedded CSS by way of <a href="http://dev.opera.com/articles/view/mama-head-structure/#style"><code class="elem">STYLE</code> element</a> content</li>
    <li><a href="http://dev.opera.com/articles/view/mama-common-attributes/#style"><code class="att">Style</code> attribute</a> content</li>
</ul>

<p>MAMA also detected CSS usage in XML using the <span class="string">&quot;xml-stylesheet&quot;</span> 
   processing instruction but discovered this in only 568 cases. We will 
   ignore those cases for simplicity in the following discussion about quantities 
   and sizes.</p>

<p>Looking at some of the URLs for extreme cases with External CSS (and @import 
   CSS) pointed out some flaws in MAMA&#39;s analysis strategy. Some of these issues 
   were even anticipated and workarounds were created, but developers on the Web 
   find ways to create the most outlandish code. These shortcomings will all 
   be addressed in the next version, but for now they help demonstrate that 
   analyzing a Web page is always a more complex proposition than expected.</p>

<h2 id="qtys">Quantities of CSS components in Web pages</h2>
<p>MAMA detected CSS usage in 3 distinct ways: via the common <code class="att">Style</code> 
   attribute, external CSS using the <code class="elem">LINK</code> element, and 
   embedded CSS from the <code class="elem">STYLE</code> element. The <code class="att">Style</code> 
   attribute was the most common method, barely exceeding the total for the external 
   CSS construct (<code class="elem">LINK</code> element). The &quot;times per page&quot; 
   values and other counters represent the number of occurrences for the specific 
   syntax encountered for a URL. For example, the maximum number of 
   <code class="elem">LINK</code>ed style sheets discovered in any single page was 
   44; the maximum number of <code class="att">Style</code> attributes found was 
   21,293. The average &quot;per-page&quot; numbers listed in the table below (Fig 2-1) 
   details where the different types of CSS were used and does not cover the total MAMA URL 
   space.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> Totals for different methods of CSS inclusion</caption>
   <tr valign="bottom"><th>CSS type</th><th>Description</th><th>Total URLs<br />containing<br />CSS type</th><th>% Total<br />CSS usage</th>
        <th>Most<br />popular<br />quantity</th>
        <th>Max.<br />quantity<br />per page</th><th>Avg.<br />quantity<br />per page</th></tr>
   <tr class="r1"><td><a href="css-styleattrqty-url.htm">Style attribute</a></td><td>Contents of all Style attributes</td><td class="num">1,898,513</td>
        <td class="num">67.30%</td><td class="num">1</td><td class="num">21,293</td><td class="num">25.6</td></tr>
   <tr class="r2"><td><a href="css-extcssqty-url.htm">External CSS</a></td><td>Content from all LINK/Href/Rel=&quot;stylesheet&quot; URLs</td><td class="num">1,836,260</td>
        <td class="num">65.09%</td><td class="num">1</td><td class="num">44</td><td class="num">1.5</td></tr>
   <tr class="r1"><td><a href="css-embedcssqty-url.htm">Embedded CSS</a></td><td>Contents of all STYLE elements</td><td class="num">1,321,006</td>
        <td class="num">46.83%</td><td class="num">1</td><td class="num">708</td><td class="num">1.6</td></tr>
</table>

<h3>Maximum quantities of the CSS usage types</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> URLs with the most external CSS</caption>
   <tr valign="bottom"><th>URL</th><th>External<br />CSS qty</th></tr>
   <tr class="r1"><td><a href="http://www.rocblanchotels.com/">http://www.rocblanchotels.com/</a></td><td class="num">45</td></tr>
   <tr class="r2"><td>http://www2k.biglobe.ne.jp/~hideko/ (URL no longer active)</td><td class="num">39</td></tr>
   <tr class="r1"><td><a href="http://www.frelimo.org.mz/">http://www.frelimo.org.mz/</a></td><td class="num">34</td></tr>
</table>
    
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-3:</strong> URLs with the most embedded CSS</caption>
   <tr valign="bottom"><th>URL</th><th>Embedded<br />CSS qty</th></tr>
   <tr class="r1"><td><a href="http://www.1000irani.com/">http://www.1000irani.com/</a></td><td class="num">708</td></tr>
   <tr class="r2"><td>http://www.australianet.net/tra/ (URL no longer active)</td><td class="num">665</td></tr>
   <tr class="r1"><td>http://mocambique1.blogs.sapo.pt/ (URL no longer active)</td><td class="num">196</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-4:</strong> URLs with the most Style attributes</caption>
   <tr valign="bottom"><th>URL</th><th>Style<br />attribute<br />qty</th></tr>
   <tr class="r1"><td>http://www.albumdefamille.neufblog.com/ (URL no longer active)</td><td class="num">21,293</td></tr>
   <tr class="r2"><td>http://www.azeribook.com/folk/molla_nasreddin.htm (URL no longer active)</td><td class="num">20,602</td></tr>
   <tr class="r1"><td>http://members.1012surfnet.at/sabatieu/ (URL no longer active)</td><td class="num">19,041</td></tr>
</table>

<h2 id="venn">Venn diagram: CSS usage by type</h2>
<p>The most popular combination of CSS methods is external CSS in conjunction 
   with inline CSS. The least popular mixing is external CSS paired with 
   embedded CSS. To get a clearer view of the uses and intersections of the 
   different CSS methods, a Venn diagram is helpful:</p>

<p class="note"><strong>Note:</strong> Region sizes are not to scale</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/216-mama-css-quantities-and-sizes/venn-cssbreakdown.png" width="593" height="392" alt="Venn diagram for CSS usage types" /></p>

<h2 id="sizeext">Sizes: External CSS (<code class="elem">LINK</code> element)</h2>
<p>Tracking external CSS generated some errors and exposed a few problems that 
   will be changed in MAMA&#39;s next version. A number of cases (~30) had a total 
   analyzed external CSS size of about 5 megabytes, but in the live version of 
   those URLs, these sizes were not at all reproducible. Five megabytes is the 
   maximum that MAMA allowed any downloadable component to reach before aborting, 
   so it explains why there was so much clustering around that value. There may 
   have been a runaway/race condition in any number of sources&#8212;the Web server, 
   network conditions, the Perl LWP fetching code, etc. There is no way to be sure what happened&#8212;some of the remaining extreme size cases exhibit aberrant 
   behavior; for example, one URL had an external CSS reference to an MP4 video! Another URL 
   had a reasonably-sized external CSS file, but there were a large number of 
   garbage characters at the very end (making the file size over a megabyte). 
   Other instances demonstrated a weakness in MAMA&#39;s approach to serializing 
   framed content for analysis; sometimes an external CSS was referenced in 
   multiple frames and therefore added more than once to the overall size sums.</p>

<p>The largest case of external CSS use that was both realistic and verifiable at the time of writing was 
    <a href="http://www.goldeneaglecoin.com/">http://www.goldeneaglecoin.com/</a>, which had 868,426 characters. The site http://www.skatteinform.dk/ (URL no longer active) had a high number of garbage characters, and <a href="http://www.vanderlande.com">http://www.vanderlande.com</a> was the case where MAMA repeatedly added 
    the external CSS references in all IFRAMEs to the overall sizes.
    Trying to offset these problems a little, all cases above 
    900,000 characters were tossed out to find an average of 8387.1 characters for external style sheets. 
    MAMA attempted to filter out Web servers silently redirecting to non-CSS content, but more could be done&#8212;there are probably a number of cases where external CSS redirects to the URL&#39;s home page or other HTML pages. An example that 
    demonstrates the effects of failing to do this is <a href="http://www.dmc.tv/">http://www.dmc.tv/</a>, in which 5 of the 13 
    detected external CSS references silently pointed to HTML pages.</p>

<h3>Size distribution of external CSS (<code class="elem">LINK</code> element)</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> External CSS sizes (LINK element)</caption>
   <tr valign="bottom"><th>Size range</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>Size range</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>Size range</th><th>Frequency</th></tr>
   <tr class="r1"><td>=0</td><td class="num">1,727,948</td><td>&gt;7000 &amp;&amp; &lt;=8000</td><td class="num">63,619</td>
        <td>&gt;25000 &amp;&amp; &lt;=30000</td><td class="num">32,007</td></tr>
   <tr class="r2"><td>&gt;0 &amp;&amp; &lt;= 500</td><td class="num">121,838</td><td>&gt;8000 &amp;&amp; &lt;=9000</td><td class="num">54,192</td>
        <td>&gt;30000 &amp;&amp; &lt;=35000</td><td class="num">28,166</td></tr>
   <tr class="r1"><td>&gt;500 &amp;&amp; &lt;=1000</td><td class="num">152,027</td><td>&gt;9000 &amp;&amp; &lt;=10000</td><td class="num">47,634</td>
        <td>&gt;35000 &amp;&amp; &lt;=40000</td><td class="num">15,931</td></tr>
   <tr class="r2"><td>&gt;1000 &amp;&amp; &lt;=2000</td><td class="num">267,587</td><td>&gt;10000 &amp;&amp; &lt;=12000</td><td class="num">79,179</td>
        <td>&gt;40000 &amp;&amp; &lt;=45000</td><td class="num">9,562</td></tr>
   <tr class="r1"><td>&gt;2000 &amp;&amp; &lt;=3000</td><td class="num">202,354</td><td>&gt;12000 &amp;&amp; &lt;=14000</td><td class="num">61,637</td>
        <td>&gt;45000 &amp;&amp; &lt;=50000</td><td class="num">10,112</td></tr>
   <tr class="r2"><td>&gt;3000 &amp;&amp; &lt;=4000</td><td class="num">150,273</td><td>&gt;14000 &amp;&amp; &lt;=16000</td><td class="num">42,080</td>
        <td>&gt;50000 &amp;&amp; &lt;=75000</td><td class="num">19,512</td></tr>
   <tr class="r1"><td>&gt;4000 &amp;&amp; &lt;=5000</td><td class="num">115,056</td><td>&gt;16000 &amp;&amp; &lt;=18000</td><td class="num">33,164</td>
        <td>&gt;75000 &amp;&amp; &lt;=100000</td><td class="num">6,874</td></tr>
   <tr class="r2"><td>&gt;5000 &amp;&amp; &lt;=6000</td><td class="num">105,108</td><td>&gt;18000 &amp;&amp; &lt;=20000</td><td class="num">28,657</td>
        <td>&gt;100000 &amp;&amp; &lt;=150000</td><td class="num">4,403</td></tr>
   <tr class="r1"><td>&gt;6000 &amp;&amp; &lt;=7000</td><td class="num">80,456</td><td>&gt;20000 &amp;&amp; &lt;=25000</td><td class="num">48,152</td>
        <td>&gt;150000</td><td class="num">1,652</td></tr>
</table>

<h3>Maximum sizes of external CSS (<code class="elem">LINK</code> element)</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-2:</strong> URLs with the largest external CSS sizes (LINK element)</caption>
   <tr valign="bottom"><th>URL</th><th>External CSS<br />size (chars)</th></tr>
   <tr class="r1"><td>http://www.skatteinform.dk/ (URL no longer active)</td><td class="num">1,051,671</td></tr>
   <tr class="r2"><td><a href="http://www.goldeneaglecoin.com/">http://www.goldeneaglecoin.com/</a></td><td class="num">868,426</td></tr>
   <tr class="r1"><td>http://www.vanderlande.com/Pages/default.aspx (URL no longer active)</td><td class="num">763,681</td></tr>
</table>

<h2 id="sizeembed">Sizes: Embedded CSS (<code class="elem">STYLE</code> element)</h2>
<p>MAMA detected a URL with embedded CSS sections totalling 1,572,504, but that 
   points out a potential problem with this kind of tally: whitespace. The huge 
   sizes reported for the top 3 of the URLs listed below is the result of  <strong>EXCESSIVE</strong> use of extra whitespace. Such situations are 
   probably the result of misconfigured Web servers and large amounts of code from 
   pre-processed languages (such as PHP or ASP). The pre-processed code itself is not 
   present in the rendered document, but extra whitespace is added for every line 
   of the code resulting in an astronomical amount of spaces that dominate a document&#39;s 
   downloaded size. With that in mind, MAMA&#39;s average embedded CSS size was 953.6 
   characters.</p>

<h3>Size distribution of embedded CSS (<code class="elem">STYLE</code> element)</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> Embedded CSS sizes (STYLE element)</caption>
   <tr valign="bottom"><th>Size range</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Size range</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Size range</th><th>Frequency</th></tr>
   <tr class="r1"><td>=0</td><td class="num">2,196,509</td><td>&gt;5000 &amp;&amp; &lt;=6000</td><td class="num">12,575</td>
        <td>&gt;14000 &amp;&amp; &lt;=16000</td><td class="num">1,237</td></tr>
   <tr class="r2"><td>&gt;0 &amp;&amp; &lt;= 500</td><td class="num">865,538</td><td>&gt;6000 &amp;&amp; &lt;=7000</td><td class="num">13,346</td>
        <td>&gt;16000 &amp;&amp; &lt;=18000</td><td class="num">920</td></tr>
   <tr class="r1"><td>&gt;500 &amp;&amp; &lt;=1000</td><td class="num">183,220</td><td>&gt;7000 &amp;&amp; &lt;=8000</td><td class="num">7,252</td>
        <td>&gt;18000 &amp;&amp; &lt;=20000</td><td class="num">1,002</td></tr>
   <tr class="r2"><td>&gt;1000 &amp;&amp; &lt;=2000</td><td class="num">124,580</td><td>&gt;8000 &amp;&amp; &lt;=9000</td><td class="num">5,544</td>
        <td>&gt;20000 &amp;&amp; &lt;=40000</td><td class="num">2,830</td></tr>
   <tr class="r1"><td>&gt;2000 &amp;&amp; &lt;=3000</td><td class="num">44,621</td><td>&gt;9000 &amp;&amp; &lt;=10000</td><td class="num">2,249</td>
        <td>&gt;40000 &amp;&amp; &lt;=60000</td><td class="num">584</td></tr>
   <tr class="r2"><td>&gt;3000 &amp;&amp; &lt;=4000</td><td class="num">24,977</td><td>&gt;10000 &amp;&amp; &lt;=12000</td><td class="num">4,455</td>
        <td>&gt;60000 &amp;&amp; &lt;=80000</td><td class="num">111</td></tr>
   <tr class="r1"><td>&gt;4000 &amp;&amp; &lt;=5000</td><td class="num">15,466</td><td>&gt;12000 &amp;&amp; &lt;=14000</td><td class="num">2,040</td>
        <td>&gt;80000</td><td class="num">124</td></tr>
</table>

<h3>Maximum sizes of embedded CSS (<code class="elem">STYLE</code> element)</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> URLs with the largest STYLE element sizes</caption>
   <tr valign="bottom"><th>URL</th><th>STYLE element<br />size (chars)</th></tr>
   <tr class="r1"><td><a href="http://www.moundsviewschools.org/belair/home.htm">http://www.moundsviewschools.org/belair/home.htm</a></td><td class="num">1,572,504</td></tr>
   <tr class="r2"><td><a href="http://www.macuisinechezvous.com/">http://www.macuisinechezvous.com/</a></td><td class="num">1,049,159</td></tr>
   <tr class="r1"><td><a href="http://www.procolharum.com/">http://www.procolharum.com/</a></td><td class="num">1,048,724</td></tr>
   <tr class="r2"><td><a href="http://www.kshamm.de/">http://www.kshamm.de/</a></td><td class="num">956,362</td></tr>
</table>

<h2 id="sizeinline">Sizes: Inline CSS (<code class="att">Style</code> attribute)</h2>
<p>The maximum recorded aggregate size of inline CSS was an enormous 2,589,039 characters 
   (the total size for the main document size at that URL was over 3.5 Megabytes, 
   so over 70% of this big document&#39;s size was Inline CSS! Excessive!). The average 
   inline size was 1,006.8 characters. All the highest inline CSS size URL cases 
   listed below were created by Microsoft Office and make heavy use of its 
   <span class="string">&quot;mso-&quot;</span> CSS extensions. In the future, it could be 
   interesting to look deeper at the relative sizes of Microsoft Office document inline CSS versus non-MSOffice pages.</p>

<h3>Size distribution of inline CSS (<code class="att">Style</code> attribute)</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> Inline CSS sizes (Style attribute)</caption>
   <tr valign="bottom"><th>Size range</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Size range</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Size range</th><th>Frequency</th></tr>
   <tr class="r1"><td>=0</td><td class="num">1,610,667</td><td>&gt;5000 &amp;&amp; &lt;=6000</td><td class="num">14,804</td>
        <td>&gt;14000 &amp;&amp; &lt;=16000</td><td class="num">2,468</td></tr>
   <tr class="r2"><td>&gt;0 &amp;&amp; &lt;= 500</td><td class="num">1,235,564</td><td>&gt;6000 &amp;&amp; &lt;=7000</td><td class="num">10,296</td>
        <td>&gt;16000 &amp;&amp; &lt;=18000</td><td class="num">2,840</td></tr>
   <tr class="r1"><td>&gt;500 &amp;&amp; &lt;=1000</td><td class="num">262,306</td><td>&gt;7000 &amp;&amp; &lt;=8000</td><td class="num">7,386</td>
        <td>&gt;18000 &amp;&amp; &lt;=20000</td><td class="num">1,267</td></tr>
   <tr class="r2"><td>&gt;1000 &amp;&amp; &lt;=2000</td><td class="num">196,019</td><td>&gt;8000 &amp;&amp; &lt;=9000</td><td class="num">5,252</td>
        <td>&gt;20000 &amp;&amp; &lt;=40000</td><td class="num">4,587</td></tr>
   <tr class="r1"><td>&gt;2000 &amp;&amp; &lt;=3000</td><td class="num">77,092</td><td>&gt;9000 &amp;&amp; &lt;=10000</td><td class="num">4,111</td>
        <td>&gt;40000 &amp;&amp; &lt;=60000</td><td class="num">1,092</td></tr>
   <tr class="r2"><td>&gt;3000 &amp;&amp; &lt;=4000</td><td class="num">39,154</td><td>&gt;10000 &amp;&amp; &lt;=12000</td><td class="num">6,249</td>
        <td>&gt;60000 &amp;&amp; &lt;=80000</td><td class="num">403</td></tr>
   <tr class="r1"><td>&gt;4000 &amp;&amp; &lt;=5000</td><td class="num">23,166</td><td>&gt;12000 &amp;&amp; &lt;=14000</td><td class="num">3,780</td>
        <td>&gt;80000</td><td class="num">677</td></tr>
</table>

<h3>Maximum sizes of inline CSS (<code class="att">Style</code> attribute)</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-2:</strong> URLs with the largest Style attribute sizes</caption>
   <tr valign="bottom"><th>URL</th><th>STYLE element<br />size (chars)</th></tr>
   <tr class="r1"><td>http://www.albumdefamille.neufblog.com/ (URL no longer active)</td><td class="num">2,589,039</td></tr>
   <tr class="r2"><td>http://www.azeribook.com/folk/molla_nasreddin.htm (URL no longer active)</td><td class="num">1,423,099</td></tr>
   <tr class="r1"><td>http://www.fw.hu/eventoj/steb/vortaroj/elektra-terminaro.htm (URL no longer active)</td><td class="num">959,898</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-xml/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: XML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-css-syntax/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: CSS syntax</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
