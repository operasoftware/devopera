Title: MAMA: CSS report
----
Date: 2008-12-08 15:09:57
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

<h2>Introduction</h2>
<p>Cascading Style Sheets (CSS) is one of the biggest success stories of the Web. 
   It was first specified by the W3C in 1995, and was quickly embraced by browsers
   and authors. CSS offers much richer typographical control than the HTML-based 
   solutions that were the norm before it came into being. Over a decade after the 
   first documents started using CSS, the Web has clearly embraced it&#8212;it was 
   detected in 2,821,141 of MAMA&#39;s URLs (80.4%). For a deeper look at the details 
   of MAMA&#39;s CSS examination, the following MAMA article topics are also available this week:</p>

<ul>
    <li><a href="http://dev.opera.com/articles/view/mama-css-quantities-and-sizes/">CSS quantities and sizes</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-css-syntax/">CSS syntax</a></li>
</ul>

<h2>CSS inclusion methods used in Web pages</h2>
<p>CSS tracking in MAMA was accomplished via the following 3 sources:</p>

<ul>
    <li>External CSS via the <a href="http://dev.opera.com/articles/view/mama-head-structure/#link"><code class="elem">LINK</code> element</a></li>
    <li>Embedded CSS by way of <a href="http://dev.opera.com/articles/view/mama-head-structure/#style"><code class="elem">STYLE</code> element</a> content</li>
    <li><a href="http://dev.opera.com/articles/view/mama-common-attributes/#style"><code class="att">Style</code> attribute</a> content</li>
</ul>

<p>The <code class="att">Style</code> attribute was the most common method encountered, 
   just barely exceeding the total for the external CSS construct 
   (<code class="elem">LINK</code> element). The &quot;times per page&quot; values and other 
   counters represent the number of occurrences for the specific syntax that is 
   encountered for a URL. For example, the maximum number of 
   <code class="elem">LINK</code>ed style sheets discovered in any single page was 
   44; the maximum number of <code class="att">Style</code> attributes found was 
   21,293. The average &quot;per-page&quot; numbers listed in the table below  
   apply where that type of CSS was used and does not cover the total MAMA URL 
   space.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Totals for different methods of CSS inclusion</caption>
   <tr valign="bottom"><th>CSS type</th><th>Description</th><th>Total URLs<br />containing<br />CSS type</th><th>% Total<br />CSS usage</th>
       <th>Most<br />popular<br />quantity</th>
       <th>Max.<br />quantity<br />per page</th><th>Avg.<br />quantity<br />per page</th></tr>
   <tr class="r1"><td>Style attribute</td><td>Contents of all Style attributes</td><td class="num">1,898,513</td>
        <td class="num">67.3%</td><td class="num">1</td><td class="num">21,293</td><td class="num">25.6</td></tr>
   <tr class="r2"><td>External CSS</td><td>Content from all LINK/Href/Rel=&quot;Stylesheet&quot; URLs</td><td class="num">1,836,260</td>
        <td class="num">65.1%</td><td class="num">1</td><td class="num">44</td><td class="num">1.5</td></tr>
   <tr class="r1"><td>Embedded CSS</td><td>Contents of all STYLE elements</td><td class="num">1,321,006</td>
        <td class="num">46.8%</td><td class="num">1</td><td class="num">708</td><td class="num">1.6</td></tr>
</table>

<h2>CSS usage source diagram</h2>
<p>The most popular combination of CSS methods is external CSS (the <code class="elem">LINK</code> 
   element) in conjunction with inline CSS (the <code class="att">Style</code> 
   attribute). The least popular mixing is external CSS paired with embedded CSS (the 
   <code class="elem">STYLE</code> element). To get a clearer view of the uses and 
   intersections of the different CSS methods, the following diagram is helpful:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/218-mama-css-report/venn-cssbreakdown.png" width="593" height="392" alt="Venn diagram for CSS usage types" /></p>
<p class="note"><strong>Note:</strong> Region sizes are not to scale.</p>

<h2>CSS properties</h2>
<p>The most popular CSS properties are the replacements for standard &quot;old school&quot; 
   HTML presentational markup. The top 3 properties replicate the functionality 
   of the <code class="elem">FONT</code> element, and the next 2 in popularity take over 
   from the <code class="elem">U</code>, <code class="elem">S</code>, <code class="elem">STRIKE</code> 
   and <code class="elem">B</code> elements. For CSS Box Model properties 
   (<code class="prop">&#39;border&#39;</code>, <code class="prop">&#39;margin&#39;</code>, and 
   <code class="prop">&#39;padding&#39;</code>), the shorthand versions are more popular 
   than their separate component forms, but the reverse is true for the <code class="prop">&#39;font&#39;</code> 
   and <code class="prop">&#39;background&#39;</code> properties. The most popular component properties for the CSS Box Model are the
top side for <code class="prop">&#39;margin&#39;</code>, and the bottom side for
<code class="prop">&#39;border&#39;</code>/<code class="prop">&#39;padding&#39;</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top CSS properties</caption>
   <tr valign="bottom"><th>CSS property</th><th>Frequency</th><th>% Total<br />CSS usage</th>
       <th rowspan="11">&#xA0;</th><th>CSS property</th><th>Frequency</th><th>% Total<br />CSS usage</th></tr>
   <tr class="r1"><td><code class="prop">color</code></td><td class="num">2,400,643</td><td class="num">85.1%</td><td><code class="prop">margin</code></td><td class="num">1,317,016</td><td class="num">46.7%</td></tr>
   <tr class="r2"><td><code class="prop">font-size</code></td><td class="num">2,336,689</td><td class="num">82.8%</td><td><code class="prop">padding</code></td><td class="num">1,276,661</td><td class="num">45.3%</td></tr>
   <tr class="r1"><td><code class="prop">font-family</code></td><td class="num">2,223,829</td><td class="num">78.8%</td><td><code class="prop">margin-top</code></td><td class="num">1,241,997</td><td class="num">44.0%</td></tr>
   <tr class="r2"><td><code class="prop">text-decoration</code></td><td class="num">2,113,412</td><td class="num">74.9%</td><td><code class="prop">line-height</code></td><td class="num">1,179,743</td><td class="num">41.8%</td></tr>
   <tr class="r1"><td><code class="prop">font-weight</code></td><td class="num">2,012,992</td><td class="num">71.4%</td><td><code class="prop">margin-bottom</code></td><td class="num">1,173,093</td><td class="num">41.6%</td></tr>
   <tr class="r2"><td><code class="prop">background-color</code></td><td class="num">1,698,366</td><td class="num">60.2%</td><td><code class="prop">margin-left</code></td><td class="num">1,125,675</td><td class="num">39.9%</td></tr>
   <tr class="r1"><td><code class="prop">width</code></td><td class="num">1,596,974</td><td class="num">56.6%</td><td><code class="prop">position</code></td><td class="num">1,095,461</td><td class="num">38.8%</td></tr>
   <tr class="r2"><td><code class="prop">text-align</code></td><td class="num">1,448,336</td><td class="num">51.3%</td><td><code class="prop">padding-left</code></td><td class="num">989,492</td><td class="num">35.1%</td></tr>
   <tr class="r1"><td><code class="prop">height</code></td><td class="num">1,428,991</td><td class="num">50.7%</td><td><code class="prop">background</code></td><td class="num">958,127</td><td class="num">34.0%</td></tr>
   <tr class="r2"><td><code class="prop">border</code></td><td class="num">1,376,821</td><td class="num">48.8%</td><td><code class="prop">display</code></td><td class="num">954,047</td><td class="num">33.8%</td></tr>
</table>

<h2>Special CSS features: inherit and !important</h2>
<p>Two keywords in CSS have special meaning&#8212;they are not selectors and they are 
   not properties. The <span class="string">&quot;inherit&quot;</span> keyword is a special 
   global property value used to explicitly pass on a particular value from a parent 
   to a child. Just under 10% of all URLs using CSS (278,743 URLs) use this keyword 
   at least once. The other special keyword is <span class="string">&quot;!important&quot;</span>, 
   which specifies a shift in the bias of a document&#39;s cascade order toward a specific 
   CSS rule. It was found in 155,449 of MAMA&#39;s URLs (over 5% of all cases using CSS). 
   These numbers seem significant, but if one frames the numbers in perspective with 
   the CSS property frequency table, optimism is quickly deflated. For instance, 
   there are almost 75 CSS properties that are more popular than the <span class="string">&quot;!important&quot;</span> 
   keyword, including the non-standard <code class="prop">&#39;filter&#39;</code> and 
   most of the scrollbar properties.</p>

<h2>At-rules</h2>
<p>MAMA tracked 3 types of CSS at-rule syntax: <code class="atrule">@import</code>, 
   <code class="atrule">@media</code>, and <code class="atrule">@charset</code>. 
   For <code class="atrule">@charset</code>, only the existence of the at-rule 
   is tracked. In the case of <code class="atrule">@media</code>, the existence 
   is tracked, along with the stated media type values. Lastly, <code class="atrule">@import</code> 
   statements were dissected and analyzed for their file names and media types.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Popularity of CSS At-rules</caption>
    <tr valign="bottom"><th>At-rule type</th><th>Frequency</th><th>% Total<br />CSS usage</th></tr>
    <tr class="r1"><td><code class="atrule">@import</code></td><td class="num">191,496</td><td class="num">6.79%</td></tr>
    <tr class="r2"><td><code class="atrule">@media</code></td><td class="num">63,293</td><td class="num">2.24%</td></tr>
    <tr class="r1"><td><code class="atrule">@charset</code></td><td class="num">30,022</td><td class="num">1.06%</td></tr>
</table>

<h2>Media types</h2>
<p>There were 404,212 pages that specified at least one CSS media type. Media types 
   were detected by looking at the <code class="att">Media</code> attribute of 
   all <code class="elem">LINK</code> and <code class="elem">STYLE</code> elements, 
   as well as the CSS <code class="string">@media</code> at-rule syntax. The 
   resulting list of media types were then matched against the following regular 
   expression:</p>

<p class="note"><strong>Regexp:</strong><br /> 
   <code class="regexp">/(all|screen|print|speech|aural|handheld|projection|tv)/i</code></p>

<p>Any media type that was not recognized fell into a catch-all category termed 
   <span class="string">&quot;other&quot;</span>. What were some of the <span class="string">&quot;other&quot;</span> 
   media types? The 3 main types that were noticeable in significant quantities are 
   all from CSS2: <span class="string">&quot;braille&quot;</span>, <span class="string">&quot;embossed&quot;</span>, 
   and <span class="string">&quot;tty&quot;</span>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Popular CSS media types</caption>
   <tr valign="bottom"><th>Media type</th><th>Frequency</th><th>% Total<br />media usage</th>
       <th rowspan="6">&#xA0;</th><th>Media type</th><th>Frequency</th><th>% Total<br />media usage</th></tr>
   <tr class="r1"><td><span class="string">screen</span></td><td class="num">252,948</td><td class="num">62.6%</td>
       <td><span class="string">other</span></td><td class="num">7,119</td><td class="num">1.8%</td></tr>
   <tr class="r2"><td><span class="string">print</span></td><td class="num">171,328</td><td class="num">42.4%</td>
       <td><span class="string">tv</span></td><td class="num">5,770</td><td class="num">1.4%</td></tr>
   <tr class="r1"><td><span class="string">all</span></td><td class="num">130,227</td><td class="num">32.2%</td>
       <td><span class="string">aural</span></td><td class="num">2,533</td><td class="num">0.6%</td></tr>
   <tr class="r2"><td><span class="string">projection</span></td><td class="num">31,651</td><td class="num">7.8%</td>
       <td><span class="string">speech</span></td><td class="num">301</td><td class="num">0.1%</td></tr>
   <tr class="r1"><td><span class="string">handheld</span></td><td class="num">22,316</td><td class="num">5.5%</td>
       <td>&#xA0;</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2>Pseudo-classes and pseudo-elements</h2>
<p>There are a number of these constructs defined in CSS2, and many more are listed 
   in CSS3. Only a subset of pseudo-classes and pseudo-elements were chosen for tracking 
   in MAMA for this report. Some obvious/important pseudo-classes were ignored this time, 
   specifically <code class="string">&quot;:active&quot;</code>, <code class="string">&quot;:link&quot;</code> ,
   and <code class="string">&quot;:visited&quot;</code>.</p>

<p>The pseudo-class <code class="string">:hover</code> is used in two-thirds of all pages that use CSS. 
   The pseudo-element <code class="string">:after</code> is (strangely) 3 times more popular than 
   <code class="string">:before</code>. The psuedo-class <code class="string">:first-child</code> 
   is more than 4 times as frequent as <code class="string">:last-child</code> 
   (although that can probably be attributed to <code class="string">:first-child</code> 
   being in CSS2, while <code class="string">:last-child</code> was not added until 
   CSS3). The typography distinctions that are <code class="string">:first-letter</code> 
   and <code class="string">:first-line</code> are not that widely used, although 
   authors preferred to control the initial letter of a block more often than the 
   initial line (by more than a 3:1 ratio).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Popular CSS Pseudo-classes and Pseudo-elements</caption>
   <tr valign="bottom"><th>Pseudo-class/element</th><th>Frequency</th><th>% Total<br />CSS usage</th>
       <th rowspan="6">&#xA0;</th><th>Pseudo-class/element</th><th>Frequency</th><th>% Total<br />CSS usage</th></tr>
   <tr class="r1"><td><code class="string">hover</code></td><td class="num">1,918,442</td><td class="num">68.0%</td><td><code class="string">first-letter</code></td><td class="num">15,804</td><td class="num">0.6%</td></tr>
   <tr class="r2"><td><code class="string">after</code></td><td class="num">96,541</td><td class="num">3.4%</td><td><code class="string">last-child</code></td><td class="num">5,826</td><td class="num">0.2%</td></tr>
   <tr class="r1"><td><code class="string">focus</code></td><td class="num">94,953</td><td class="num">3.4%</td><td><code class="string">first-line</code></td><td class="num">4,476</td><td class="num">0.2%</td></tr>
   <tr class="r2"><td><code class="string">before</code></td><td class="num">34,558</td><td class="num">1.2%</td><td><code class="string">not</code></td><td class="num">2,785</td><td class="num">0.1%</td></tr>
   <tr class="r1"><td><code class="string">first-child</code></td><td class="num">24,769</td><td class="num">0.9%</td><td><code class="string">lang</code></td><td class="num">2,546</td><td class="num">0.1%</td></tr>
</table>

<h2>Conclusion</h2>
<p>Although this overview covers many interesting points of MAMA&#39;s CSS examination, 
   the reader is encouraged to also dig deeper into the main MAMA articles on CSS
   (see the links at the beginning of this document). These documents add more detail
   to the topics already mentioned and discuss additional interesting topics such 
   as MIME types and file names for external CSS, detailed usage of 
   <code class="atrule">@import</code>, and CSS browser vendor extensions.</p>

<p>Stay tuned for next week&#39;s topics, when we will start looking at what MAMA discovered about script usage.</p>
