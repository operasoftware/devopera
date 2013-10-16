Title: MAMA: Scripting - quantities and sizes
----
Date: 2008-12-12 12:15:49
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-css-syntax/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: CSS syntax</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-scripting-syntax/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Scripting syntax</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#qtys">Quantities of script components in Web pages</a></li>
    <li><a href="#venn">Venn diagram: script usage by type</a></li>
    <li><a href="#sizeext">Sizes: external script</a></li>
    <li><a href="#sizeembed">Sizes: embedded script</a></li>
    <li><a href="#sizeevent">Sizes: event handler script</a></li>
    <li><a href="#sizehyperlinkjs">Sizes: hyperlink JavaScript</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Scripting was detected in 2,617,305 of MAMA&#39;s URLs, from 4 different sources:</p>

<ul>
    <li>External scripts via the <a href="http://dev.opera.com/articles/view/mama-head-structure/#script"><code class="elem">SCRIPT</code>/<code class="att">Src</code> 
        element/attribute</a></li>
    <li>Embedded scripts as inline content of the <a href="http://dev.opera.com/articles/view/mama-head-structure/#script"><code class="elem">SCRIPT</code> element</a></li>
    <li>Common <a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/">event handler attributes</a> 
        (attributes beginning with the string <span class="string">&quot;on&quot;</span>)</li>
    <li>JavaScript URL syntax used by <a href="http://dev.opera.com/articles/view/mama-hyperlinks/">hyperlinks</a> 
        (Any content after the leading string <span class="string">&quot;javascript:&quot;</span> in a hyperlink)</li>
</ul>

<p>All of these sources together form an interesting and complex backdrop on which 
   to paint our analysis of what MAMA discovered about script usage on the Web.</p>

<h2 id="qtys">Quantities of script components in Web pages</h2>
<p>Of the 4 possible methods to specify scripting, the most popular technique 
   found by MAMA is embedded script - just over 88% of scripts used this 
   method. External scripts and event handler attributes were used in a similar 
   number of cases, both used in ~2/3 of all scripting cases. The &quot;quantity per 
   page&quot; values and other counters represent the number of occurrences for the 
   specific syntax that was discovered for a URL. For example, the maximum number 
   of external scripts encountered in any single page was 264; the maximum number 
   of event handlers discovered was 37,658. The average &quot;per-page&quot; numbers listed 
   in the table below (Fig 2-1) apply where that type of scripting was used and 
   does not cover the total MAMA URL space.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> 
   Totals for different methods of script inclusion</caption>
   <tr valign="bottom"><th>Script type</th><th>Description</th><th>Total URLs<br />containing<br />script type</th><th>% Total<br />script<br />usage</th>
        <th>Most<br />popular<br />quantity</th>
        <th>Max.<br />quantity<br />per page</th><th>Avg.<br />quantity<br />per page</th></tr>
   <tr class="r1"><td><a href="embedscriptqty-url.htm">Embedded scripts</a></td><td>Inline content of the <code class="elem">SCRIPT</code> element</td><td class="num">2,303,363</td>
        <td class="num">88.01%</td><td class="num">1</td><td class="num">2,010</td><td class="num">3.6</td></tr>
   <tr class="r2"><td><a href="eventscriptqty-url.htm">Event handlers</a></td><td>Content of attributes beginning with <span class="string">&quot;on&quot;</span></td><td class="num">1,707,594</td>
        <td class="num">65.24%</td><td class="num">1</td><td class="num">37,658</td><td class="num">19.2</td></tr>
   <tr class="r1"><td><a href="externalscriptqty-url.htm">External scripts</a></td><td>Content from <code class="elem">SCRIPT</code>/<code class="att">Src</code> URLs</td><td class="num">1,651,383</td>
        <td class="num">63.09%</td><td class="num">1</td><td class="num">264</td><td class="num">2.5</td></tr>
   <tr class="r2"><td><a href="hyperlinkjsqty-url.htm">JavaScript URLs</a></td><td>Hyperlink URLs prefaced by <span class="string">&quot;javascript:&quot;</span></td><td class="num">483,936</td>
        <td class="num">18.49%</td><td class="num">1</td><td class="num">3,396</td><td class="num">4.9</td></tr>
</table>

<h3>Maximum quantities of the script usage types</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> URLs with the most embedded scripts</caption>
   <tr valign="bottom"><th>URL</th><th>Embedded<br />script qty</th></tr>
   <tr class="r1"><td><a href="http://www.realestateinform.com">http://www.realestateinform.com/</a></td><td class="num">2,010</td></tr>
   <tr class="r2"><td><a href="http://www.momentoffame.com/photopost/index.php">http://www.momentoffame.com/photopost/index.php</a></td><td class="num">1,901</td></tr>
   <tr class="r1"><td><a href="http://www.cafes.es/">http://www.cafes.es/</a></td><td class="num">1,865</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-3:</strong> URLs with the most event handler scripts</caption>
   <tr valign="bottom"><th>URL</th><th>Event<br />script qty</th></tr>
   <tr class="r1"><td><a href="http://www.gibson.com/en-us/Divisions/Gibson%20Original/Gibson%20Mandolins/">http://www.gibson.com/en-us/Divisions/Gibson%20Original/Gibson%20Mandolins/</a></td><td class="num">37,658</td></tr>
   <tr class="r2"><td>http://ww2.keeneland.com/default.aspx (URL no longer active)</td><td class="num">11,583</td></tr>
   <tr class="r1"><td><a href="http://www.mriresearch.org/">http://www.mriresearch.org/</a></td><td class="num">7,630</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-4:</strong> URLs with the most external scripts</caption>
   <tr valign="bottom"><th>URL</th><th>External<br />script qty</th></tr>
   <tr class="r1"><td><a href="http://www.basisonline.org/the_wager/index.html">http://www.basisonline.org/the_wager/index.html</a></td><td class="num">264</td></tr>
   <tr class="r2"><td><a href="http://www.hear.org/starr/hiplants/images/family/rubiaceae.htm">http://www.hear.org/starr/hiplants/images/family/rubiaceae.htm</a></td><td class="num">255</td></tr>
   <tr class="r1"><td><a href="http://www.schwarzeneggergovernor.com">http://www.schwarzeneggergovernor.com/</a></td><td class="num">164</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-5:</strong> URLs with the most JavaScript URL scripts</caption>
   <tr valign="bottom"><th>URL</th><th>JavaScript<br />URL qty</th></tr>
   <tr class="r1"><td><a href="http://consc.net/mindpapers/2/all">http://consc.net/mindpapers/2/all/</a></td><td class="num">3,396</td></tr>
   <tr class="r2"><td>http://www.anrc.ro/DesktopDefault.aspx?tabid=1318 (URL no longer active)</td><td class="num">2,495</td></tr>
   <tr class="r1"><td><a href="http://www.affairsoftheheart.info">http://www.affairsoftheheart.info/</a></td><td class="num">2,382</td></tr>
</table>

<h2 id="venn">Venn diagram: script usage by type</h2>
<p>The most common script usage was the intersection of external and embedded 
   script with event handler attributes. The rarest combination detected was 
   the use of only event handler script with JavaScript URLs. To get a clearer 
   view of the uses and intersections of the different script specification 
   methods, let&#39;s examine a helpful Venn diagram. Of all the Venn diagrams 
   for MAMA, this one is the most daunting; a 4-part intersection is rather  complex.</p>

<p class="note"><strong>Note:</strong> Region sizes are not to scale</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/222-mama-scripting-quantities-and-sizes/4partvenn-script.png" width="749" height="350" alt="Venn diagram for script usage types" /></p>

<h2 id="sizeext">Sizes: external script</h2>
<p>Unlike the 3 other scripting component types, the distribution of sizes for 
   external scripts is not uniform. It does not spike immediately at small sizes 
   and then quickly level off. There are at least two noticeable peaks in the 
   middle of the range - first a modest one between 14-16,000 characters, and 
   then a much bigger one between 20-22,000 characters. The average total external 
   script size is thus increased to a significant 26,550.4 characters. The maximum 
   size recorded by MAMA was an incredible 10,008,659 characters, but this result 
   was not directly reproducible several months later at the time of writing. 
   Instead, another URL took up the torch - lasallecounty.org with a maximum 
   external script size of 14,257,992 characters in only 2 external scripts. This 
   <strong>has</strong> to be an authoring mistake. One would not expect such an 
   outlandish size case to remain this way, as users would likely never tolerate 
   waiting for a script that big to finish loading. The other URLs that made MAMA&#39;s 
   maximum external script size list were 1/4 the size of lasallecounty.org or less.</p>

<h3>Size distribution of external script</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> External script sizes</caption>
   <tr valign="bottom"><th>Size range</th><th>Frequency</th><th rowspan="11">&#xA0;</th><th>Size range</th><th>Frequency</th><th rowspan="11">&#xA0;</th><th>Size range</th><th>Frequency</th></tr>
   <tr class="r1"><td>=0</td><td class="num">1,907,375</td><td>&gt;8000 &amp;&amp; &lt;=9000</td><td class="num">29,061</td>
        <td>&gt;26000 &amp;&amp; &lt;=28000</td><td class="num">32,659</td></tr>
   <tr class="r2"><td>&gt;0 &amp;&amp; &lt;= 500</td><td class="num">75,958</td><td>&gt;9000 &amp;&amp; &lt;=10000</td><td class="num">18,163</td>
        <td>&gt;28000 &amp;&amp; &lt;=30000</td><td class="num">36,898</td></tr>
   <tr class="r1"><td>&gt;500 &amp;&amp; &lt;=1000</td><td class="num">80,535</td><td>&gt;10000 &amp;&amp; &lt;=12000</td><td class="num">32,588</td>
        <td>&gt;30000 &amp;&amp; &lt;=35000</td><td class="num">67,502</td></tr>
   <tr class="r2"><td>&gt;1000 &amp;&amp; &lt;=2000</td><td class="num">103,223</td><td>&gt;12000 &amp;&amp; &lt;=14000</td><td class="num">27,771</td>
        <td>&gt;35000 &amp;&amp; &lt;=40000</td><td class="num">65,848</td></tr>
   <tr class="r1"><td>&gt;2000 &amp;&amp; &lt;=3000</td><td class="num">99,197</td><td>&gt;14000 &amp;&amp; &lt;=16000</td><td class="num">85,204</td>
        <td>&gt;40000 &amp;&amp; &lt;=45000</td><td class="num">37,688</td></tr>
   <tr class="r2"><td>&gt;3000 &amp;&amp; &lt;=4000</td><td class="num">70,486</td><td>&gt;16000 &amp;&amp; &lt;=18000</td><td class="num">45,346</td>
        <td>&gt;45000 &amp;&amp; &lt;=50000</td><td class="num">28,266</td></tr>
   <tr class="r1"><td>&gt;4000 &amp;&amp; &lt;=5000</td><td class="num">43,395</td><td>&gt;18000 &amp;&amp; &lt;=20000</td><td class="num">29,499</td>
        <td>&gt;50000 &amp;&amp; &lt;=75000</td><td class="num">111,160</td></tr>
   <tr class="r2"><td>&gt;5000 &amp;&amp; &lt;=6000</td><td class="num">46,157</td><td>&gt;20000 &amp;&amp; &lt;=22000</td><td class="num">147,081</td>
        <td>&gt;75000 &amp;&amp; &lt;=100000</td><td class="num">46,699</td></tr>
   <tr class="r1"><td>&gt;6000 &amp;&amp; &lt;=7000</td><td class="num">48,650</td><td>&gt;22000 &amp;&amp; &lt;=24000</td><td class="num">54,757</td>
        <td>&gt;100000 &amp;&amp; &lt;=150000</td><td class="num">34,957</td></tr>
   <tr class="r2"><td>&gt;7000 &amp;&amp; &lt;=8000</td><td class="num">28,468</td><td>&gt;24000 &amp;&amp; &lt;=26000</td><td class="num">45,402</td>
        <td>&gt;150000</td><td class="num">29,187</td></tr>
</table>

<h3>Maximum sizes of external script</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-2:</strong> URLs with the largest external script sizes</caption>
   <tr valign="bottom"><th>URL</th><th>External script<br />size (chars)</th></tr>
   <tr class="r1"><td><a href="http://www.lasallecounty.org/index.htm">http://www.lasallecounty.org/index.htm</a></td><td class="num">14,257,992</td></tr>
   <tr class="r2"><td><a href="http://www.dockendorf.biz/index.html">http://www.dockendorf.biz/index.html</a></td><td class="num">3,486,769</td></tr>
   <tr class="r1"><td><a href="http://www.nordicway.com/index.html">http://www.nordicway.com/index.html</a></td><td class="num">2,735,461</td></tr>
   <tr class="r2"><td><a href="http://www.languagesource.com">http://www.languagesource.com/</a></td><td class="num">1,996,866</td></tr>
</table>

<h2 id="sizeembed">Sizes: embedded script</h2>
<p>The overall size of embedded scripts tapers off gradually, with the average size 
   being 2,481.8 characters. The largest embedded script total size that MAMA 
   analyzed was 2,937,643 characters, but the case with the biggest live verifiable 
   size was 2,251,905 characters (pathguy.com). The URLs representing the maximum 
   values used scripting in some unusual ways. real-estate-denver-colorado.com is 
   a particularly odd case, filled with over 73,000 lines of JavaScript devoted to 
   form validation of 12,190 specific invalid user names for its site. Another case 
   (asciimation.co.nz) stores frame after frame of ASCII pictures representing the 
   Star Wars saga as JavaScript arrays (I have a bad feeling about this).</p>

<h3>Size distribution of embedded script</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> Embedded script sizes</caption>
   <tr valign="bottom"><th>Size range</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>Size range</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>Size range</th><th>Frequency</th></tr>
   <tr class="r1"><td>=0</td><td class="num">1,208,935</td><td>&gt;7000 &amp;&amp; &lt;=8000</td><td class="num">26,361</td>
        <td>&gt;25000 &amp;&amp; &lt;=30000</td><td class="num">8,525</td></tr>
   <tr class="r2"><td>&gt;0 &amp;&amp; &lt;= 500</td><td class="num">776,696</td><td>&gt;8000 &amp;&amp; &lt;=9000</td><td class="num">20,826</td>
        <td>&gt;30000 &amp;&amp; &lt;=35000</td><td class="num">4,505</td></tr>
   <tr class="r1"><td>&gt;500 &amp;&amp; &lt;=1000</td><td class="num">340,766</td><td>&gt;9000 &amp;&amp; &lt;=10000</td><td class="num">16,121</td>
        <td>&gt;35000 &amp;&amp; &lt;=40000</td><td class="num">3,001</td></tr>
   <tr class="r2"><td>&gt;1000 &amp;&amp; &lt;=2000</td><td class="num">524,775</td><td>&gt;10000 &amp;&amp; &lt;=12000</td><td class="num">22,112</td>
        <td>&gt;40000 &amp;&amp; &lt;=45000</td><td class="num">2,390</td></tr>
   <tr class="r1"><td>&gt;2000 &amp;&amp; &lt;=3000</td><td class="num">213,289</td><td>&gt;12000 &amp;&amp; &lt;=14000</td><td class="num">14,856</td>
        <td>&gt;45000 &amp;&amp; &lt;=50000</td><td class="num">1,243</td></tr>
   <tr class="r2"><td>&gt;3000 &amp;&amp; &lt;=4000</td><td class="num">116,929</td><td>&gt;14000 &amp;&amp; &lt;=16000</td><td class="num">12,299</td>
        <td>&gt;50000 &amp;&amp; &lt;=75000</td><td class="num">3,473</td></tr>
   <tr class="r1"><td>&gt;4000 &amp;&amp; &lt;=5000</td><td class="num">79,642</td><td>&gt;16000 &amp;&amp; &lt;=18000</td><td class="num">8,181</td>
        <td>&gt;75000 &amp;&amp; &lt;=100000</td><td class="num">1,089</td></tr>
   <tr class="r2"><td>&gt;5000 &amp;&amp; &lt;=6000</td><td class="num">50,892</td><td>&gt;18000 &amp;&amp; &lt;=20000</td><td class="num">5,484</td>
        <td>&gt;100000 &amp;&amp; &lt;=150000</td><td class="num">591</td></tr>
   <tr class="r1"><td>&gt;6000 &amp;&amp; &lt;=7000</td><td class="num">35,840</td><td>&gt;20000 &amp;&amp; &lt;=25000</td><td class="num">9,832</td>
        <td>&gt;150000</td><td class="num">527</td></tr>
</table>

<h3>Maximum sizes of embedded script</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> URLs with the largest embedded script sizes</caption>
   <tr valign="bottom"><th>URL</th><th>Embedded script<br />size (chars)</th></tr>
   <tr class="r1"><td><a href="http://www.pathguy.com/cg35.htm">http://www.pathguy.com/cg35.htm</a></td><td class="num">2,251,905</td></tr>
   <tr class="r2"><td><a href="http://www.real-estate-denver-colorado.com/">http://www.real-estate-denver-colorado.com/</a></td><td class="num">2,247,372</td></tr>
   <tr class="r1"><td><a href="http://www.asciimation.co.nz/">http://www.asciimation.co.nz/</a></td><td class="num">2,192,120</td></tr>
   <tr class="r2"><td><a href="http://www.ymps.ttct.edu.tw/index.html">http://www.ymps.ttct.edu.tw/index.html</a></td><td class="num">1553,583</td></tr>
</table>

<h2 id="sizeevent">Sizes: event handler script</h2>
<p>The total size of most event handler uses is less than 2,000 characters, with 
   over half of the uses being less than 500 total characters. For a rough calculation, 
   we can add this together with the average quantity of event handlers (19) mentioned 
   previously, giving an approximate size per average event handler of 26 characters. 
   True, combining these averages together in such a manner is questionable, but it 
   helps to demonstrate that event handlers will likely be used for very short, atomic 
   script code or to point to longer functions in external and embedded scripts.</p>

<p>The maximum recorded total size for event handlers was 3,437,290 characters, 
   but live analysis of some of these chart-topping URLs revealed a maximum of only 
   1,812,178 characters - just over half as many (but still extremely large). The 
   average total event handler size was 973.0 characters.</p>

<p>Unlike the typical brief uses already mentioned, some authors go overboard when 
   using event handlers (using hundreds or even thousands of instances). One hopes 
   that such code is produced programmatically, because it would be difficult to 
   keep track of so many individual code snippets; not to mention that such uses 
   waste a reader&#39;s bandwidth. The ohiosmiles.com, keen.land.com and reactome.org 
   cases each apply several event handlers to <strong>EVERY</strong> link, resulting 
   in thousands of instances in a single document...Exhausting!</p>

<h3>Size distribution of event handler script</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> Event handler script sizes</caption>
   <tr valign="bottom"><th>Size range</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>Size range</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>Size range</th><th>Frequency</th></tr>
   <tr class="r1"><td>=0</td><td class="num">1,812,178</td><td>&gt;7000 &amp;&amp; &lt;=8000</td><td class="num">4,609</td>
        <td>&gt;25000 &amp;&amp; &lt;=30000</td><td class="num">639</td></tr>
   <tr class="r2"><td>&gt;0 &amp;&amp; &lt;= 500</td><td class="num">910,605</td><td>&gt;8000 &amp;&amp; &lt;=9000</td><td class="num">3,196</td>
        <td>&gt;30000 &amp;&amp; &lt;=35000</td><td class="num">346</td></tr>
   <tr class="r1"><td>&gt;500 &amp;&amp; &lt;=1000</td><td class="num">326,661</td><td>&gt;9000 &amp;&amp; &lt;=10000</td><td class="num">2,474</td>
        <td>&gt;35000 &amp;&amp; &lt;=40000</td><td class="num">245</td></tr>
   <tr class="r2"><td>&gt;1000 &amp;&amp; &lt;=2000</td><td class="num">263,615</td><td>&gt;10000 &amp;&amp; &lt;=12000</td><td class="num">3,366</td>
        <td>&gt;40000 &amp;&amp; &lt;=45000</td><td class="num">160</td></tr>
   <tr class="r1"><td>&gt;2000 &amp;&amp; &lt;=3000</td><td class="num">94,675</td><td>&gt;12000 &amp;&amp; &lt;=14000</td><td class="num">1,892</td>
        <td>&gt;45000 &amp;&amp; &lt;=50000</td><td class="num">152</td></tr>
   <tr class="r2"><td>&gt;3000 &amp;&amp; &lt;=4000</td><td class="num">40,751</td><td>&gt;14000 &amp;&amp; &lt;=16000</td><td class="num">1,311</td>
        <td>&gt;50000 &amp;&amp; &lt;=75000</td><td class="num">295</td></tr>
   <tr class="r1"><td>&gt;4000 &amp;&amp; &lt;=5000</td><td class="num">20,200</td><td>&gt;16000 &amp;&amp; &lt;=18000</td><td class="num">852</td>
        <td>&gt;75000 &amp;&amp; &lt;=100000</td><td class="num">101</td></tr>
   <tr class="r2"><td>&gt;5000 &amp;&amp; &lt;=6000</td><td class="num">12,051</td><td>&gt;18000 &amp;&amp; &lt;=20000</td><td class="num">610</td>
        <td>&gt;100000 &amp;&amp; &lt;=150000</td><td class="num">78</td></tr>
   <tr class="r1"><td>&gt;6000 &amp;&amp; &lt;=7000</td><td class="num">7,033</td><td>&gt;20000 &amp;&amp; &lt;=25000</td><td class="num">1,039</td>
        <td>&gt;150000</td><td class="num">46</td></tr>
</table>

<h3>Maximum sizes of event handler script</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-2:</strong> URLs with the largest event handler script sizes</caption>
   <tr valign="bottom"><th>URL</th><th>Event script<br />size (chars)</th></tr>
   <tr class="r1"><td><a href="http://www.ohiosmiles.com/">http://www.ohiosmiles.com/</a></td><td class="num">1809979</td></tr>
   <tr class="r2"><td>http://ww2.keeneland.com/default.aspx (URL no longer active)</td><td class="num">1598238</td></tr>
   <tr class="r1"><td><a href="http://www.reactome.org">http://www.reactome.org/</a></td><td class="num">496996</td></tr>
   <tr class="r2"><td><a href="http://www.conflictlab.com/chronicle/911/">http://www.conflictlab.com/chronicle/911/</a></td><td class="num">459875</td></tr>
</table>

<h2 id="sizehyperlinkjs">Sizes: hyperlink JavaScript</h2>
<p>The size distribution chart shows a rapid falloff in popularity after the 500 
   character mark, indicating that this type of scripting is usually used sparingly 
   and only in small snippets. As recorded in MAMA, the maximum detected hyperlink 
   JavaScript size was a very weighty 1,045,812 characters. The live analysis of 
   that URL shows a significant reduction, but it is still the top value: 589,097 
   characters. The average number of characters used for hyperlink JavaScript, when 
   this type of script is used, was 217.7 characters. Itsandil.rediffiland.com had 
   its hyperlink JavaScript size distributed across a main page and 6 
   <code class="elem">IFRAME</code>s. The star-academy.info case is a little 
   different, in that it used all of its hyperlink JavaScript in the fallback 
   content inside an <code class="elem">IFRAME</code> element.</p>

<h3>Size distribution of hyperlink JavaScript</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Hyperlink JavaScript sizes</caption>
    <tr valign="bottom"><th>Size range</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Size range</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Size range</th><th>Frequency</th></tr>
    <tr class="r1"><td>=0</td><td class="num">3,026,752</td><td>&gt;5000 &amp;&amp; &lt;=6000</td><td class="num">515</td>
        <td>&gt;14000 &amp;&amp; &lt;=16000</td><td class="num">81</td></tr>
    <tr class="r2"><td>&gt;0 &amp;&amp; &lt;= 500</td><td class="num">442,377</td><td>&gt;6000 &amp;&amp; &lt;=7000</td><td class="num">372</td>
        <td>&gt;16000 &amp;&amp; &lt;=18000</td><td class="num">46</td></tr>
    <tr class="r1"><td>&gt;500 &amp;&amp; &lt;=1000</td><td class="num">22,084</td><td>&gt;7000 &amp;&amp; &lt;=8000</td><td class="num">174</td>
        <td>&gt;18000 &amp;&amp; &lt;=20000</td><td class="num">38</td></tr>
    <tr class="r2"><td>&gt;1000 &amp;&amp; &lt;=2000</td><td class="num">10,515</td><td>&gt;8000 &amp;&amp; &lt;=9000</td><td class="num">145</td>
        <td>&gt;20000 &amp;&amp; &lt;=25000</td><td class="num">48</td></tr>
    <tr class="r1"><td>&gt;2000 &amp;&amp; &lt;=3000</td><td class="num">3,287</td><td>&gt;9000 &amp;&amp; &lt;=10000</td><td class="num">119</td>
        <td>&gt;25000 &amp;&amp; &lt;=30000</td><td class="num">24</td></tr>
    <tr class="r2"><td>&gt;3000 &amp;&amp; &lt;=4000</td><td class="num">1468</td><td>&gt;10000 &amp;&amp; &lt;=12000</td><td class="num">143</td>
        <td>&gt;30000 &amp;&amp; &lt;=35000</td><td class="num">24</td></tr>
    <tr class="r1"><td>&gt;4000 &amp;&amp; &lt;=5000</td><td class="num">815</td><td>&gt;12000 &amp;&amp; &lt;=14000</td><td class="num">78</td>
        <td>&gt;35000</td><td class="num">75</td></tr>
</table>

<h3>Maximum sizes of hyperlink JavaScript</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-2:</strong> URLs with the largest Hyperlink JavaScript sizes</caption>
   <tr valign="bottom"><th>URL</th><th>Hyperlink<br />JavaScript<br />size (chars)</th></tr>
   <tr class="r1"><td>http://www.xocoxoco.dk/ (not available anymore)</td><td class="num">589,097</td></tr>
   <tr class="r2"><td><a href="http://itsandil.rediffiland.com/iland/itsandil.html">http://itsandil.rediffiland.com/iland/itsandil.html</a></td><td class="num">212,928</td></tr>
   <tr class="r1"><td><a href="http://www.star-academy.info">http://www.star-academy.info/</a></td><td class="num">211,069</td></tr>
   <tr class="r2"><td>http://www008.upp.so-net.ne.jp/tarch/ (not available anymore)</td><td class="num">157,194</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-css-syntax/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: CSS syntax</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-scripting-syntax/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Scripting syntax</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
