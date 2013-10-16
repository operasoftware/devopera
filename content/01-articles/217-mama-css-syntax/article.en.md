Title: MAMA: CSS syntax
----
Date: 2008-12-08 15:10:00
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-css-quantities-and-sizes/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: CSS quantities and sizes</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-scripting-quantities-and-sizes/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Scripting - quantities and sizes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#atrule">At-rules</a></li>
    <li><a href="#filename">External CSS file names</a></li>
    <li><a href="#mime">External CSS MIME types</a></li>
    <li><a href="#media">Media types</a></li>
    <li><a href="#pcpe">Pseudo-classes and pseudo-elements</a></li>
    <li><a href="#cssprop">CSS properties</a></li>
    <li><a href="#inheritimport">Notable CSS syntax: Inherit and !important</a></li>
    <li><a href="#csspropval">Miscellaneous CSS property values and other syntax</a></li>
    <li><a href="#saarsoo">Saarsoo&#39;s CSS study</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>MAMA&#39;s look at CSS covered a number of different areas. It looked at external CSS 
   (the <a href="http://dev.opera.com/articles/view/mama-head-structure/#link"><code class="elem">LINK</code> 
   element</a>), embedded CSS (via the <a href="http://dev.opera.com/articles/view/mama-head-structure/#style"><code class="elem">STYLE</code> 
   element</a>), and inline CSS (using the common 
   <a href="http://dev.opera.com/articles/view/mama-common-attributes/#style"><code class="att">Style</code> 
   attribute</a>). It also delved into CSS specified using the <code class="atrule">@import</code> 
   syntax and did its best to reveal CSS usage in XML with the <span class="string">&quot;xml-stylesheet&quot;</span> 
   processing instruction. Overall, CSS was detected in 2,821,141 (80.39%) of the 
   URLs that MAMA analyzed. CSS properties, MIME types, media types, and other 
   syntax was tracked, but more can be done to analyze CSS usage; Saarsoo&#39;s study 
   proved that. We will look at the factors, many unique to this analysis, that MAMA 
   tracked in its study of CSS, and then we will compare some of the commonalities 
   and differences between the results MAMA found and what Saarsoo was able to 
   discover in his study.</p>

<h2 id="atrule">At-rules</h2>
<p>MAMA tracked 3 types of CSS at-rule syntax: <code class="atrule">@import</code>, 
   <code class="atrule">@media</code> and <code class="atrule">@charset</code>. 
   For <code class="atrule">@charset</code>, only the existence of the at-rule 
   is tracked. In the case of <code class="atrule">@media</code>, the existence 
   is tracked, along with the stated media type values (see the <a href="#media">Media 
   types section</a> below for more). Lastly, <code class="atrule">@import</code> 
   statements were dissected and analyzed for their file names and media types.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> Popularity of CSS At-rules</caption>
    <tr valign="bottom"><th>At-rule type</th><th>Frequency</th><th>% Total<br />CSS usage</th></tr>
    <tr class="r1"><td><code class="atrule">@import</code></td><td class="num">191,496</td><td class="num">6.79%</td></tr>
    <tr class="r2"><td><code class="atrule">@media</code></td><td class="num">63,293</td><td class="num">2.24%</td></tr>
    <tr class="r1"><td><code class="atrule">@charset</code></td><td class="num">30,022</td><td class="num">1.06%</td></tr>
</table>

<h3><code class="atrule">@Import</code> usage: Quantities</h3>
<p>This syntax represents an additional source of CSS content when used in a document. 
   The CSS <code class="atrule">@import</code> syntax is necessary to analyze but 
   tricky to handle - an <code class="atrule">@import</code> statement can point 
   to other <code class="atrule">@import</code> statements; it can even point to 
   itself in endless recursion. In order to sidestep such logistical headaches, 
   only the first-level <code class="atrule">@import</code> URLs were resolved, 
   downloaded and added to the CSS analysis queue for MAMA. These first-level 
   <code class="atrule">@import</code> situations were detected in 191,496 URLs. 
   The quantities and sizes of <code class="atrule">@import</code> statements 
   were also tracked. The most extreme case originally registered as having 1,224
   <code class="atrule">@import</code> statements, but more recent scrutiny 
   exposed only 68 (still high, but not astronomical like before). When 
   <code class="atrule">@import</code> is used, the average number of statements 
   was 2.3 and the most popular number was 1. The top <code class="atrule">@import</code> 
   case (verifiable at the time of writing) was 
   <a href="http://www.lmmeteoven.org/">http://www.lmmeteoven.org/</a>, which 
   points out an issue in MAMA&#39;s detection strategy. Sure, 151 <code class="atrule">@import</code> 
   statements are detected, but the majority of those are repeated declarations&#8212;there are only 1-2 dozen unique URLs represented there. A 
   <a href="css-importqty-url.htm">full frequency table</a> of 
   <code class="atrule">@import</code> quantities is available.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> URLs with the most detected @import statements</caption>
    <tr valign="bottom"><th>URL</th><th>Quantity<br />@import</th></tr>
    <tr class="r1"><td><a href="http://www.lmmeteoven.org/">http://www.lmmeteoven.org/</a></td><td class="num">151</td></tr>
    <tr class="r2"><td><a href="http://www.esu1.org/">http://www.esu1.org/</a></td><td class="num">97</td></tr>
    <tr class="r1"><td><a href="http://www.educarchile.cl/Portal.Base/Web/VerContenido.aspx?ID=106101&amp;amp;IDI=1377&amp;amp;GUID=4117d428-fe27-4e54-b738-c873a5878d7b">http://www.educarchile.cl/...</a></td><td class="num">68</td></tr>
</table>

<h3><code class="atrule">@Import</code> usage: sizes</h3>
<p>As with external style sheets, the extreme size values here point out some 
   problems with MAMA&#39;s strategies for deciding what to do with <code class="atrule">@import</code> 
   content. The list of URLs that MAMA analyzes is not reduced to unique URLs, 
   which results in inflated sums. This is an issue when the same <code class="atrule">@import</code> 
   object is referenced in multiple sub-frames, but some pages 
   repeat an <code class="atrule">@import</code> reference multiple times, even in the same document!</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-3:</strong> @import sizes</caption>
   <tr valign="bottom"><th>Size range</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>Size range</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>Size range</th><th>Frequency</th></tr>
   <tr class="r1"><td>=0</td><td class="num">3,331,624</td><td>&gt;7000 &amp;&amp; &lt;=8000</td><td class="num">6,881</td>
        <td>&gt;25000 &amp;&amp; &lt;=30000</td><td class="num">6,089</td></tr>
   <tr class="r2"><td>&gt;0 &amp;&amp; &lt;= 500</td><td class="num">14,350</td><td>&gt;8000 &amp;&amp; &lt;=9000</td><td class="num">5,355</td>
        <td>&gt;30000 &amp;&amp; &lt;=35000</td><td class="num">4,732</td></tr>
   <tr class="r1"><td>&gt;500 &amp;&amp; &lt;=1000</td><td class="num">7,569</td><td>&gt;9000 &amp;&amp; &lt;=10000</td><td class="num">4,737</td>
        <td>&gt;35000 &amp;&amp; &lt;=40000</td><td class="num">8,540</td></tr>
   <tr class="r2"><td>&gt;1000 &amp;&amp; &lt;=2000</td><td class="num">17,123</td><td>&gt;10000 &amp;&amp; &lt;=12000</td><td class="num">8,461</td>
        <td>&gt;40000 &amp;&amp; &lt;=45000</td><td class="num">2,423</td></tr>
   <tr class="r1"><td>&gt;2000 &amp;&amp; &lt;=3000</td><td class="num">17,252</td><td>&gt;12000 &amp;&amp; &lt;=14000</td><td class="num">6,765</td>
        <td>&gt;45000 &amp;&amp; &lt;=50000</td><td class="num">2,055</td></tr>
   <tr class="r2"><td>&gt;3000 &amp;&amp; &lt;=4000</td><td class="num">9,426</td><td>&gt;14000 &amp;&amp; &lt;=16000</td><td class="num">5,396</td>
        <td>&gt;50000 &amp;&amp; &lt;=75000</td><td class="num">4,791</td></tr>
   <tr class="r1"><td>&gt;4000 &amp;&amp; &lt;=5000</td><td class="num">8,751</td><td>&gt;16000 &amp;&amp; &lt;=18000</td><td class="num">5,108</td>
        <td>&gt;75000 &amp;&amp; &lt;=100000</td><td class="num">1,533</td></tr>
   <tr class="r2"><td>&gt;5000 &amp;&amp; &lt;=6000</td><td class="num">8,693</td><td>&gt;18000 &amp;&amp; &lt;=20000</td><td class="num">4,138</td>
        <td>&gt;100000 &amp;&amp; &lt;=150000</td><td class="num">1,523</td></tr>
   <tr class="r1"><td>&gt;6000 &amp;&amp; &lt;=7000</td><td class="num">7,024</td><td>&gt;20000 &amp;&amp; &lt;=25000</td><td class="num">8,280</td>
        <td>&gt;150000</td><td class="num">561</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-4:</strong> URLs with the largest @import size</caption>
    <tr valign="bottom"><th>URL</th><th>@Import size<br />(chars)</th></tr>
    <tr class="r1"><td>http://www.boone.k12.ky.us/index.htm (URL no longer active)</td><td class="num">874,643</td></tr>
    <tr class="r2"><td>http://www.waitrose.com/inspiration/wfi.aspx (URL no longer active)</td><td class="num">751,734</td></tr>
    <tr class="r1"><td><a href="http://www.educarchile.cl/Portal.Base/Web/VerContenido.aspx?ID=106101&amp;amp;IDI=1377&amp;amp;GUID=4117d428-fe27-4e54-b738-c873a5878d7b">http://www.educarchile.cl/...</a></td><td class="num">646393</td></tr>
</table>

<h2 id="filename">External CSS file names</h2>
<p>Tracking CSS file names is an example of a MAMA feature in search of a reason for 
   existing. The URLs of external style sheets from <code class="elem">LINK</code> and 
   <code class="atrule">@import</code>-ed CSS were reduced to just the final filename 
   portion and this was stored in MAMA. This originally began as a request from a 
   co-worker to track file names used 
   by external <strong>scripts</strong>. With scripts, I knew that this data would 
   be compelling and useful. The code for tracking script file names was easy to replicate 
   for external CSS files, but I did not know what the result would be&#8212;it turns out it 
   is not very compelling. The popular file names used for external CSS files are rather 
   tedious and obvious: <span class="string">&quot;style.css&quot;</span>, <span class="string">&quot;main.css&quot;</span>, 
   <span class="string">&quot;default.css&quot;</span>, and the inspired <span class="string">&quot;css.css&quot;</span>
   are among the devastatingly insightful author choices for CSS file names. Yes, the 
   <a href="cssfilelist-url.htm">full frequency table</a> is also available.</p>

<h2 id="mime">External CSS MIME types</h2>
<p>This feature tracked the actual returned MIME type of the external CSS files 
   (via <code class="elem">LINK</code> and <code class="atrule">@import</code> 
   references). It did not trust any reported <code class="elem">LINK</code> 
   <code class="att">Type</code> attribute, if present. The actual result is 
   what one would expect&#8212;almost 99% of all external CSS are delivered with a 
   <span class="string">&quot;text/css&quot;</span> MIME type. Other types were encountered, 
   but some are puzzling. Why would some external CSS be served as an image or 
   JavaScript MIME type? Are these servers just mis-configured? The distant-second 
   place value of <span class="string">&quot;text/html&quot;</span> has two easy explanations&#8212;misconfigured Web servers (again), or Pseudo-404 errors redirecting to full 
   HTML error pages. 134,839 URLs with external style sheet references had at least 
   one that had no MIME type at all. Once again, MAMA comes through with a 
   <a href="cssmimelist-url.htm">full frequency table</a> for your viewing pleasure.</p>

<h2 id="media">Media types</h2>
<p>In all, 404,212 pages specified at least one CSS media type. Media types were detected 
   by looking at the <code class="att">Media</code> attribute of all <code class="elem">LINK</code> 
   and <code class="elem">STYLE</code> elements, as well as the CSS <code class="string">@media</code> 
   at-rule syntax. The resulting list of media types were then matched against the following regular 
   expression:</p>

<p class="note"><strong>Regexp:</strong><br /> 
   <code class="regexp">/(all|screen|print|speech|aural|handheld|projection|tv)/i</code></p>

<p>Any media type that was not recognized fell into a catch-all category termed 
   <span class="string">&quot;other&quot;</span>. What were some of the <span class="string">&quot;other&quot;</span> 
   media types? The 3 main types that were noticeable in significant quantities are all from CSS2&#8212;<span class="string">&quot;braille&quot;</span>, <span class="string">&quot;embossed&quot;</span> 
   and <span class="string">&quot;tty&quot;</span>. These values will definitely be added 
   to the regular expression above the next time a big analysis is done.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> Popular CSS media types</caption>
   <tr valign="bottom"><th>Media type</th><th>Frequency</th><th>% Total<br />media usage</th>
       <th rowspan="6">&#xA0;</th><th>Media type</th><th>Frequency</th><th>% Total<br />media usage</th></tr>
   <tr class="r1"><td><span class="string">screen</span></td><td class="num">252,948</td><td class="num">62.58%</td>
       <td><span class="string">other</span></td><td class="num">7,119</td><td class="num">1.76%</td></tr>
   <tr class="r2"><td><span class="string">print</span></td><td class="num">171,328</td><td class="num">42.39%</td>
       <td><span class="string">tv</span></td><td class="num">5,770</td><td class="num">1.43%</td></tr>
   <tr class="r1"><td><span class="string">all</span></td><td class="num">130,227</td><td class="num">32.22%</td>
       <td><span class="string">aural</span></td><td class="num">2,533</td><td class="num">0.63%</td></tr>
   <tr class="r2"><td><span class="string">projection</span></td><td class="num">31,651</td><td class="num">7.83%</td>
       <td><span class="string">speech</span></td><td class="num">301</td><td class="num">0.07%</td></tr>
   <tr class="r1"><td><span class="string">handheld</span></td><td class="num">22,316</td><td class="num">5.52%</td>
       <td>&#xA0;</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="pcpe">Pseudo-classes and pseudo-elements</h2>
<p>There are a number of these constructs defined in CSS2 and CSS3. A subset of pseudo-classes and pseudo-elements were chosen for tracking 
   in MAMA. Some obvious/important pseudo-classes were overlooked in this analysis, 
   specifically <code class="string">&quot;:active&quot;</code>, <code class="string">&quot;:link&quot;</code> 
   and <code class="string">&quot;:visited&quot;</code>. It must be stressed that these are 
   not the only possible pseudo-classes and pseudo-elements, just most of the ones 
   that were widely (or soon to be widely) implemented by browsers at the time they 
   were added to MAMA.</p>

<p>A simple regular expression match was performed on all CSS content looking for the following pattern:</p>

<p class="note"><strong>Regexp:</strong><br /> 
   <code class="regexp">/&#58;&#40;hover|focus|root|empty|not|first-child|first-node|last-node|last-child|lang|before|after|first-letter|first-line)/gios</code></p>

<p>The pseudo-class <code class="string">:hover</code> is used in two-thirds of all pages that use CSS. 
   The pseudo-element <code class="string">:after</code> is (strangely) 3 times more popular than 
   <code class="string">:before</code>. The pseudo-element <code class="string">:first-child</code> 
   is more than 4 times as frequent as <code class="string">:last-child</code> 
   (although that can probably be attributed to <code class="string">:first-child</code> 
   being in CSS2, while <code class="string">:last-child</code> was not added until 
   CSS3). The typography distinctions that are <code class="string">:first-letter</code> 
   and <code class="string">:first-line</code> are not that widely used, although 
   authors clearly prefer to control the initial letter of a block 3 times as much 
   as the initial line.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> Popular CSS Pseudo-classes and pseudo-elements</caption>
   <tr valign="bottom"><th>Pseudo-class/element</th><th>Frequency</th><th>% Total<br />CSS usage</th>
       <th rowspan="8">&#xA0;</th><th>Pseudo-class/element</th><th>Frequency</th><th>% Total<br />CSS usage</th></tr>
   <tr class="r1"><td><code class="string">hover</code></td><td class="num">1,918,442</td><td class="num">68.00%</td><td><code class="string">first-line</code></td><td class="num">4,476</td><td class="num">0.16%</td></tr>
   <tr class="r2"><td><code class="string">after</code></td><td class="num">96,541</td><td class="num">3.42%</td><td><code class="string">not</code></td><td class="num">2,785</td><td class="num">0.10%</td></tr>
   <tr class="r1"><td><code class="string">focus</code></td><td class="num">94,953</td><td class="num">3.37%</td><td><code class="string">lang</code></td><td class="num">2,546</td><td class="num">0.09%</td></tr>
   <tr class="r2"><td><code class="string">before</code></td><td class="num">34,558</td><td class="num">1.22%</td><td><code class="string">root</code></td><td class="num">2,267</td><td class="num">0.08%</td></tr>
   <tr class="r1"><td><code class="string">first-child</code></td><td class="num">24,769</td><td class="num">0.88%</td><td><code class="string">empty</code></td><td class="num">392</td><td class="num">0.01%</td></tr>
   <tr class="r2"><td><code class="string">first-letter</code></td><td class="num">15,804</td><td class="num">0.56%</td><td><code class="string">last-node</code></td><td class="num">75</td><td class="num">0.00%</td></tr>
   <tr class="r1"><td><code class="string">last-child</code></td><td class="num">5,826</td><td class="num">0.21%</td><td><code class="string">first-node</code></td><td class="num">74</td><td class="num">0.00%</td></tr>
</table>

<h2 id="cssprop">CSS properties</h2>
<p>The most popular CSS properties are the replacements for standard &quot;old school&quot; 
   HTML presentational markup. Three of the top five properties replicate the functionality 
   of the <code class="elem">FONT</code> element, and the remaining ones take over 
   for the <code class="elem">U</code>, <code class="elem">S</code>, <code class="elem">STRIKE</code> 
   and <code class="elem">B</code> elements. For CSS Box Model properties 
   (<code class="prop">&#39;border&#39;</code>, <code class="prop">&#39;margin&#39;</code>, and 
   <code class="prop">&#39;padding&#39;</code>), the shorthand versions are more popular 
   than their component forms, but the reverse is true for the <code class="prop">&#39;font&#39;</code> 
   and <code class="prop">&#39;background&#39;</code> properties. The most popular CSS Box 
   Model side properties are top for <code class="prop">&#39;margin&#39;</code>, and bottom 
   for <code class="prop">&#39;border&#39;</code>/<code class="prop">&#39;padding&#39;</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Popular CSS properties<br />[Please also see the 
       <a href="cssproplist-url.htm">complete frequency table</a>.]</caption>
   <tr valign="bottom"><th>CSS property</th><th>Frequency</th><th>% Total<br />CSS usage</th>
       <th rowspan="15">&#xA0;</th><th>CSS property</th><th>Frequency</th><th>% Total<br />CSS usage</th></tr>
   <tr class="r1"><td><code class="prop">color</code></td><td class="num">2,400,643</td><td class="num">85.09%</td><td><code class="prop">margin-bottom</code></td><td class="num">1,173,093</td><td class="num">41.58%</td></tr>
   <tr class="r2"><td><code class="prop">font-size</code></td><td class="num">2,336,689</td><td class="num">82.83%</td><td><code class="prop">margin-left</code></td><td class="num">1,125,675</td><td class="num">39.90%</td></tr>
   <tr class="r1"><td><code class="prop">font-family</code></td><td class="num">2,223,829</td><td class="num">78.83%</td><td><code class="prop">position</code></td><td class="num">1,095,461</td><td class="num">38.83%</td></tr>
   <tr class="r2"><td><code class="prop">text-decoration</code></td><td class="num">2,113,412</td><td class="num">74.91%</td><td><code class="prop">padding-left</code></td><td class="num">989,492</td><td class="num">35.07%</td></tr>
   <tr class="r1"><td><code class="prop">font-weight</code></td><td class="num">2,012,992</td><td class="num">71.35%</td><td><code class="prop">background</code></td><td class="num">958,127</td><td class="num">33.96%</td></tr>
   <tr class="r2"><td><code class="prop">background-color</code></td><td class="num">1,698,366</td><td class="num">60.20%</td><td><code class="prop">display</code></td><td class="num">954,047</td><td class="num">33.82%</td></tr>
   <tr class="r1"><td><code class="prop">width</code></td><td class="num">1,596,974</td><td class="num">56.61%</td><td><code class="prop">margin-right</code></td><td class="num">936,379</td><td class="num">33.19%</td></tr>
   <tr class="r2"><td><code class="prop">text-align</code></td><td class="num">1,448,336</td><td class="num">51.34%</td><td><code class="prop">font-style</code></td><td class="num">933,690</td><td class="num">33.10%</td></tr>
   <tr class="r1"><td><code class="prop">height</code></td><td class="num">1,428,991</td><td class="num">50.65%</td><td><code class="prop">background-image</code></td><td class="num">922,566</td><td class="num">32.70%</td></tr>
   <tr class="r2"><td><code class="prop">border</code></td><td class="num">1,376,821</td><td class="num">48.80%</td><td><code class="prop">padding-top</code></td><td class="num">905,852</td><td class="num">32.11%</td></tr>
   <tr class="r1"><td><code class="prop">margin</code></td><td class="num">1,317,016</td><td class="num">46.68%</td><td><code class="prop">border-bottom</code></td><td class="num">894,900</td><td class="num">31.72%</td></tr>
   <tr class="r2"><td><code class="prop">padding</code></td><td class="num">1,276,661</td><td class="num">45.25%</td><td><code class="prop">top</code></td><td class="num">890,666</td><td class="num">31.57%</td></tr>
   <tr class="r1"><td><code class="prop">margin-top</code></td><td class="num">1,241,997</td><td class="num">44.02%</td><td><code class="prop">left</code></td><td class="num">857,439</td><td class="num">30.39%</td></tr>
   <tr class="r2"><td><code class="prop">line-height</code></td><td class="num">1,179,743</td><td class="num">41.82%</td><td><code class="prop">padding-bottom</code></td><td class="num">828,349</td><td class="num">29.36%</td></tr>
</table>

<h3>Browser vendor CSS property extensions</h3>
<p>The major browser makers have extended CSS over the years, and documents on the 
   Web show just how much effect this has had on authoring practice. Mozilla&#39;s 
   <code class="prop">&#39;-moz-opacity&#39;</code> is the most popular one, with the 
   standardized version <code class="prop">&#39;opacity&#39;</code> being only slightly 
   more popular. Microsoft Office CSS extensions (prefixed by <span class="string">&quot;mso-&quot;</span>) 
   have the highest representation overall, with 202 (!!) different CSS properties 
   in the frequency table. Adobe (<span class="string">&quot;-adbe-&quot;</span>), Apple/Safari 
   (<span class="string">&quot;-webkit-&quot;</span>), KDE (<span class="string">&quot;-khtml-&quot;</span>), 
   Microsoft (<span class="string">&quot;-ms-&quot;</span>) and Opera (<span class="string">&quot;-o-&quot;</span>) 
   are all also represented by CSS browser extensions.</p>

<h2 id="inheritimport">Notable CSS syntax: inherit and !important</h2>
<p>Two keywords in CSS have special meaning&#8212;they are not selectors, and they are 
   not properties. The <span class="string">&quot;inherit&quot;</span> keyword is a special 
   global property value used to explicitly pass on a particular value from a parent 
   to a child. Just under 10% of all URLs using CSS (278,743 URLs) use this keyword 
   at least once. The other special keyword is <span class="string">&quot;!important&quot;</span>, 
   which specifies a shift in the bias of a document&#39;s cascade order toward a specific 
   CSS rule. It was found in 155,449 of MAMA&#39;s URLs (over 5% of all cases using CSS). 
   These numbers seem significant, but if one frames the numbers in persective with 
   the CSS property frequency table, optimism is quickly deflated. For instance, 
   there are almost 75 CSS properties that are more popular than the <span class="string">&quot;!important&quot;</span> 
   keyword, including the non-standard <code class="prop">&#39;filter&#39;</code> and 
   most of the scrollbar properties.</p>

<h2 id="csspropval">Miscellaneous CSS property values</h2>
<p>MAMA generally tracked only CSS properties in this version. Future MAMA versions 
   plan to gather more details about CSS. Some other parts of CSS syntax were also 
   harvested this time, but MAMA generally stayed away from the values used by the 
   CSS properties. There <strong>were</strong> some exceptions&#8212;due to requests from 
   co-workers, a few select property values were compiled.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-1:</strong> Popularity of some CSS property values</caption>
   <tr valign="bottom"><th>Property[value]</th><th>Frequency</th><th rowspan="4">&#xA0;</th><th>Property[value]</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="prop">overflow</code>[<span class="string">auto</span>]</td><td class="num">175,474</td><td><code class="prop">position</code>[<span class="string">fixed</span>]</td><td class="num">22,459</td></tr>
   <tr class="r2"><td><code class="prop">text-decoration</code>[<span class="string">blink</span>]</td><td class="num">73,781</td><td><code class="prop">overflow</code>[<span class="string">scroll</span>]</td><td class="num">12,602</td></tr>
   <tr class="r1"><td><code class="prop">display</code>[<span class="string">table</span>]</td><td class="num">53,517</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="saarsoo">Saarsoo&#39;s CSS study</h2>
<p>Renee Saarsoo&#39;s university thesis work &quot;Coding Practices of Web Pages&quot; was 
   groundbreaking in its coverage of both the <a href="http://triin.net/2006/06/12/CSS">breadth 
   and depth of CSS usage</a> on a large scale URL set. I discovered this study very 
   late in MAMA&#39;s most recent development cycle and was impressed with the scope 
   of the information presented&#8212;especially compared with the CSS information that 
   MAMA was gathering. Now, Saarsoo was able to discover a number of things that 
   MAMA did not, but the reverse is also true. Together, these two studies reveal 
   a substantial amount of information about CSS usage on the Web.</p>

<p>When developing code, some things are easy ... and some are hard. For MAMA and 
   the way it was designed, information about CSS selectors, property 
   values, and units was among the harder things to analyze. Saarsoo&#39;s study 
   represented these areas very well. In the future, the Perl CSS::SAC parser 
   used in Saarsoo&#39;s study will be integrated into MAMA in the hopes of gathering 
   similar data for it to scrutinize and correlate.</p>

<p>By analyzing CSS selectors, Saarsoo was able to look at the actual 
   <code class="att">Class</code> and <code class="att">Id</code> attributes 
   referenced by CSS. MAMA did not do this, but it did look at all 
   <code class="att">Class</code> and <code class="att">Id</code> attributes 
   used in markup. By combining these two, an interesting comparison could be 
   generated about how the attributes specified in a page are used&#8212;and disused&#8212;by CSS.</p>

<h3>Some loose comparisons between MAMA and Saarsoo&#39;s CSS results</h3>
<p>Saarsoo&#39;s study looked at some factors that do not have <strong>direct</strong> 
   comparisons in MAMA, but we can look at data of a similar nature for instructive 
   parallels. For instance, Saarsoo&#39;s study looks at CSS usage of image formats 
   for various purposes. It showed that the GIF format is used almost 4-to-1 over 
   the JPEG format, with PNG trailing <strong>FAR</strong> behind both. MAMA&#39;s 
   <a href="http://dev.opera.com/articles/view/mama-images-elements-and-formats/#formats">look at inline and background image 
   usage</a> in markup also shows that the GIF format is dominant, but JPEG usage 
   is only slightly less popular, and the margin to PNG&#39;s third place ranking 
   is much smaller.</p>

<p>MAMA&#39;s look at the <a href="http://dev.opera.com/articles/view/mama-phrase-block-list/#font"><code class="elem">FONT</code> element</a> reveals trends in font name usage and colors specified for 
   them. These findings can be compared to Saarsoo&#39;s look at the CSS <code class="prop">&#39;font-family&#39;</code> 
   property and the general usage of CSS color units. We can see that the popularity 
   of the top font names are almost exactly the same between these studies: 
   <span class="string">&quot;Arial&quot;</span>, <span class="string">&quot;Helvetica&quot;</span>, 
   <span class="string">&quot;Verdana&quot;</span>, and <span class="string">&quot;sans-serif&quot;</span> 
   are definitely kings. Saarsoo concluded that the #rrggbb colour syntax was the most popular 
   in CSS, and this is also true with the <code class="elem">FONT</code>/<code class="att">Color</code> 
   markup usage. His results regarding the most popular colors also agrees with MAMA&#39;s 
   findings about the <code class="elem">FONT</code> element.</p>


<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-css-quantities-and-sizes/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: CSS quantities and sizes</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-scripting-quantities-and-sizes/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Scripting - quantities and sizes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>code class=
