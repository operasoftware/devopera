Title: MAMA: Key findings
----
Date: 2008-10-15 00:21:19
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
<li class="next"><a href="http://dev.opera.com/articles/view/mama-the-average-web-page/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: The &quot;average&quot; Web page</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<div><strong>Index:</strong></div>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#servers">Web servers used</a></li>
    <li><a href="#structsize">Document structure and size</a></li>
    <li><a href="#validation">HTML markup validation</a></li>
    <li><a href="#flash">Flash detection</a></li>
    <li><a href="#xmlhttprequest">XMLHttpRequest object detection</a></li>
    <li><a href="#css">CSS</a></li>
    <li><a href="#scripting">Scripting</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>This article provides some of MAMA&#39;s most interesting findings, to offer
   a quick glimpse of what MAMA is capable of and to whet the reader&#39;s appetite for the more 
   intricate results found in the rest of the study.</p>

<p class="note">In this study, MAMA examined 3,509,180 URLs in 3,011,668 domains. 
   More details about <a href="http://dev.opera.com/articles/view/mama-the-url-set/">MAMA&#39;s URL set and how it was selected</a> 
   are available in another document.</p>

<h2 id="servers">Web servers used</h2>
<p>The eternal tug-of-war continues between the two biggest Web server giants, 
   Apache and Microsoft&#39;s IIS. <a href="http://news.netcraft.com/archives/2007/11/index.html">Data 
   from Netcraft</a> at the time of MAMA&#39;s analysis details the split as follows:</p>

   <ul>
       <li><strong>Apache:</strong> 50.76%</li>
       <li><strong>IIS:</strong> 35.84%</li>
   </ul>

<p>The balance between these Web servers as represented in MAMA is skewed more in favor of Apache:</p>

   <ul>
       <li><strong>Apache:</strong> 2,011,088 domains (67.72%)</li>
       <li><strong>IIS:</strong> 769,375 domains (25.91%)</li>
   </ul>

<p>MAMA&#39;s data on Web server usage is extracted from the <code class="skeyw">Server</code> field of each 
   HTTP Header analyzed.</p>

<p class="note">For more details on HTTP headers, please see the <a href="http://dev.opera.com/articles/view/mama-http-headers-report/">HTTP headers report</a>; you can also find even greater detail in the <a href="http://dev.opera.com/articles/view/mama-http-headers/">full HTTP headers results</a></p>

<h2 id="structsize">Document structure and size</h2>
<p>At the heart of the Web are the markup documents themselves. To start with, we will give you the following quick findings:</p>

<ul>
    <li>The size of the average primary document in MAMA is almost 16,500 characters.</li>
    <li>1,788,294 of URLs carried a Doctype statement&#8212;just over 50%!</li>
    <li>HTML Doctypes outnumbered XHTML Doctypes by about 2 to 1.</li>
    <li>&quot;Transitional&quot; Doctype flavors dominated over their &quot;strict&quot; and &quot;frameset&quot; variants by more than 10 to 1.</li>
    <li>Approximately 85% of all of MAMA&#39;s pages would be rendered in browsers using their &quot;Quirks&quot; modes.</li>
</ul>

<p>Which HTML elements do authors prefer? Structural ones. Five of the top six elements 
   in MAMA are structural markup, although functional elements are certainly not 
   sitting in the corner weeping. Hyperlinks, images, and tables are popular as well. 
   Hyperlinks (the <code class="elem">A</code> element) make the Web into an actual &quot;web&quot; of 
   documents, so its primacy as the top functional element is expected. Likewise, the 
   grandfather of all multimedia elements, <code class="elem">IMG</code>, is the second most popular 
   functional element. The overwhelming use of tables will probably disturb some 
   markup purists ... after all, those instances cannot <strong>ALL</strong> be actual 
   data tables (not even the majority).</p>

<p>Speaking of semantics, markup elements with the lowest MAMA representation are 
   generally phrase elements with defined semantics. Authors do not seem to 
   embrace them in significant numbers. Enough talk; let&#39;s get on to the raw numbers. 
   The first table below shows the 10 most popular HTML 4.x elements.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">The 10 most popular HTML 4.x elements</caption>
   <tr valign="bottom">
     <th>Element</th>
     <th>Frequency</th>
     <th rowspan="6">&#xA0;</th>
     <th>Element</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><code class="elem">HEAD</code></td>
     <td class="num">3,464,519</td>
     <td><code class="elem">META</code></td>
     <td class="num">3,276,347</td>
   </tr>
   <tr class="r2">
     <td><code class="elem">TITLE</code></td>
     <td class="num">3,459,207</td>
     <td><code class="elem">IMG</code></td>
     <td class="num">3,219,487</td>
   </tr>
   <tr class="r1">
     <td><code class="elem">HTML</code></td>
     <td class="num">3,452,975</td>
     <td><code class="elem">TABLE</code></td>
     <td class="num">2,894,184</td>
   </tr>
   <tr class="r2">
     <td><code class="elem">BODY</code></td>
     <td class="num">3,452,907</td>
     <td><code class="elem">TD</code></td>
     <td class="num">2,891,972</td>
   </tr>
   <tr class="r1">
     <td><code class="elem">A</code></td>
     <td class="num">3,307,397</td>
     <td><code class="elem">TR</code></td>
     <td class="num">2,891,205</td>
   </tr>
</table>

<p>Next, we have the 10 least popular HTML 4.x elements.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">The 10 least popular HTML 4.x elements</caption>
   <tr valign="bottom">
     <th>Element</th>
     <th>Frequency</th>
     <th rowspan="6">&#xA0;</th>
     <th>Element</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><code class="elem">TFOOT</code></td>
     <td class="num">3,947</td>
     <td><code class="elem">INS</code></td>
     <td class="num">1,344</td>
   </tr>
   <tr class="r2">
     <td><code class="elem">DFN</code></td>
     <td class="num">3,584</td>
     <td><code class="elem">KBD</code></td>
     <td class="num">1,313</td>
   </tr>
   <tr class="r1">
     <td><code class="elem">MENU</code></td>
     <td class="num">1,906</td>
     <td><code class="elem">VAR</code></td>
     <td class="num">1,258</td>
   </tr>
   <tr class="r2">
     <td><code class="elem">Q</code></td>
     <td class="num">1,785</td>
     <td><code class="elem">DEL</code></td>
     <td class="num">1,243</td>
   </tr>
   <tr class="r1">
     <td><code class="elem">SAMP</code></td>
     <td class="num">1,609</td>
     <td><code class="elem">BDO</code></td>
     <td class="num">167</td>
   </tr>
</table>

<p class="note">See the full lists of <a href="elemlist-url.htm">markup elements encountered</a>, and 
<a href="attrlist-url.htm">markup attributes found</a>.</p>

<h2 id="validation">HTML markup validation</h2>
<p>MAMA ran every single URL it analyzed through the <a href="http://validator.w3.org/">W3C 
   validator</a>; the validator&#39;s SOAP response contains a binary true/false 
   result of the validation. A &quot;true&quot; value is considered a successful validation.</p>

<p>MAMA found that 145,009 out of 3,509,180 URLs passed validation&#8212;only 4.13%!. 
   Even though this ratio shows great improvement over the results of previous 
   validation studies (see the table below), this is a very worrying figure, which 
   shows that there is a lot of Web standards education still to be done to 
   increase these levels. The table below shows the trend of improvement between 
   MAMA and previous studies.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Markup validation studies</caption>
   <tr valign="bottom">
     <th>Study</th>
     <th>Date</th>
     <th>Total<br />Validated</th>
     <th>Passed<br />Validation</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td>Parnas</td>
     <td>Dec 2001</td>
     <td class="num">2,034,788</td>
     <td class="num">14,563</td>
     <td class="num">0.71%</td>
   </tr>
   <tr class="r2">
     <td>Saarsoo</td>
     <td>Jun 2006</td>
     <td class="num">1,002,350</td>
     <td class="num">25,890</td>
     <td class="num">2.58%</td>
   </tr>
   <tr class="r1">
     <td>MAMA</td>
     <td>Jan 2008</td>
     <td class="num">3,509,180</td>
     <td class="num">145,009</td>
     <td class="num">4.13%</td>
   </tr>
</table>

<p>Another related statistic MAMA uncovered was that, of the number of sites 
   proudly displaying <a href="http://www.w3.org/QA/Tools/Icons">&quot;W3C validation 
   badges&quot;</a>, only ~50% of them actually validate. There are likely many reasons 
   for this disparity, but it is obvious that such badges are not effective at 
   representing the current validation state of a page.</p>

<p class="note">For more details on the subject of markup validation, see the 
   <a href="http://dev.opera.com/articles/view/mama-markup-validation-report/">Markup validation report</a>, or the <a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/">full validation study</a>.</p> 

<h2 id="flash">Flash detection</h2>
<p>The total number of MAMA URLs using the Flash plugin is 1,176,227 (33.5%). 
   Usage of Flash was determined by looking for any of the following items:</p>

<ul>
    <li>Any <code class="elem">PARAM</code> element containing the substrings 
        <span class="string">&quot;.swf&quot;</span> or <span class="string">&quot;flash&quot;</span></li>
    <li>Any <code class="elem">EMBED</code>/<code class="att">Src</code> or 
        <code class="elem">OBJECT</code>/<code class="att">Data</code> attribute values pointing 
        to content with a MIME type using the substring <span class="string">&quot;flash&quot;</span></li>
    <li>Any scripting content with the substring <span class="string">&quot;flash&quot;</span> or 
        <span class="string">&quot;.swf&quot;</span></li>
</ul>

<p>The table below details the incidence of Flash in MAMA&#39;s URLs, broken down into 
   the top 20 countries. The usage rates overall are fairly high, as one would expect
   from a cross-platform plugin with the popularity of Flash. Even at its &quot;worst&quot;, 
   it never dips below 25%&#8212;at least 1 in 4 pages uses Flash. Flash usage in some 
   countries can even be considered extraordinary; China wins the prize for highest 
   use at just over 67%, and Turkey comes next at almost 60%. Usage rates by country 
   are typically between 30-40%.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">URLs using Flash in MAMA&#39;s top 20 countries</caption>
   <tr valign="bottom">
     <th>Country</th>
     <th>Total URLs<br />From Country</th>
     <th># Usage<br />Of Flash</th>
     <th>% Usage<br />Of Flash</th>
     <th rowspan="11">&#xA0;</th>
     <th>Country</th>
     <th>Total URLs<br />From Country</th>
     <th># Usage<br />Of Flash</th>
     <th>% Usage<br />Of Flash</th>
   </tr>
   <tr class="r1">
     <td>United States</td>
     <td class="num">1,477,436</td>
     <td class="num">481,250</td>
     <td class="num">32.57%</td>
     <td>Denmark</td>
     <td class="num">50,875</td>
     <td class="num">12,888</td>
     <td class="num">25.33%</td>
   </tr>
   <tr class="r2">
     <td>Germany</td>
     <td class="num">407,638</td>
     <td class="num">101,914</td>
     <td class="num">25.00%</td>
     <td>Australia</td>
     <td class="num">49,982</td>
     <td class="num">15,069</td>
     <td class="num">30.15%</td>
   </tr>
   <tr class="r1">
     <td>Great Britain</td>
     <td class="num">244,554</td>
     <td class="num">74,037</td>
     <td class="num">30.27%</td>
     <td>Switzerland</td>
     <td class="num">49,683</td>
     <td class="num">13,714</td>
     <td class="num">27.60%</td>
   </tr>
   <tr class="r2">
     <td>France</td>
     <td class="num">139,400</td>
     <td class="num">57,968</td>
     <td class="num">41.58%</td>
     <td>Russia</td>
     <td class="num">40,790</td>
     <td class="num">13,370</td>
     <td class="num">32.78%</td>
   </tr>
   <tr class="r1">
     <td>Italy</td>
     <td class="num">137,070</td>
     <td class="num">55270</td>
     <td class="num">40.32%</td>
     <td>Sweden</td>
     <td class="num">33,654</td>
     <td class="num">9,321</td>
     <td class="num">27.70%</td>
   </tr>
   <tr class="r2">
     <td>Canada</td>
     <td class="num">133,506</td>
     <td class="num">41,316</td>
     <td class="num">30.95%</td>
     <td>China</td>
     <td class="num">31,345</td>
     <td class="num">21,010</td>
     <td class="num">67.03%</td>
   </tr>
   <tr class="r1">
     <td>Japan</td>
     <td class="num">124,976</td>
     <td class="num">39,674</td>
     <td class="num">31.75%</td>
     <td>Czech Republic</td>
     <td class="num">26,728</td>
     <td class="num">11,520</td>
     <td class="num">43.10%</td>
   </tr>
   <tr class="r2">
     <td>Netherlands</td>
     <td class="num">79,562</td>
     <td class="num">29,600</td>
     <td class="num">37.20%</td>
     <td>Austria</td>
     <td class="num">24,563</td>
     <td class="num">6,783</td>
     <td class="num">27.61%</td>
   </tr>
   <tr class="r1">
     <td>Spain</td>
     <td class="num">76,421</td>
     <td class="num">35,339</td>
     <td class="num">46.24%</td>
     <td>Norway</td>
     <td class="num">21,185</td>
     <td class="num">7,878</td>
     <td class="num">37.19%</td>
   </tr>
   <tr class="r2">
     <td>Poland</td>
     <td class="num">58,929</td>
     <td class="num">24,971</td>
     <td class="num">42.37%</td>
     <td>Turkey</td>
     <td class="num">18,621</td>
     <td class="num">11,145</td>
     <td class="num">59.85%</td>
   </tr>
</table>

<p class="note">There is a further article available providing <a href="http://dev.opera.com/articles/view/mama-plug-ins/">more detailed information on Plugin usage</a>.</p>

<h2 id="xmlhttprequest">XMLHttpRequest object detection</h2>
<p>The XMLHttpRequest DOM object is an important part of <abbr title="Asynchronous JavaScript and XML">AJAX</abbr>, 
   which facilitates responsiveness and interactivity in Web applications. MAMA 
   detected XMLHttpRequest usage by tokenizing all identifiers in script 
   components, and looking for the complete string &quot;XMLHttpRequest&quot; to satisfy the 
   condition. The following table shows the number of MAMA pages using this DOM feature
   in MAMA&#39;s top 20 countries.</p>

<p>Overall, XMLHttpRequest was used in 112,277 of MAMA&#39;s URLs (3.20% of all its Web 
   pages or 4.29% of all MAMA&#39;s Web pages that used script). Japan showed the least 
   usage, while Norway (Opera&#39;s home country) exhibited the highest usage rates at 10.18%. 
   <a href="http://triin.net/2006/06/12/JavaScript#ajax">Saarsoo&#39;s previous study</a> 
   from June 2006 indicated overall usage of only 1.90%, so there is a significant 
   upward trend in usage of XMLHttpRequest.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">URLs using XMLHttpRequest in MAMA&#39;s top 20 countries</caption>
   <tr valign="bottom">
     <th>Country</th>
     <th>Total URLs<br />From Country</th>
     <th># Usage Of<br />XMLHttpRequest</th>
     <th>% Usage Of<br />XMLHttpRequest</th>
     <th rowspan="11">&#xA0;</th>
     <th>Country</th>
     <th>Total URLs<br />From Country</th>
     <th># Usage Of<br />XMLHttpRequest</th>
     <th>% Usage Of<br />XMLHttpRequest</th>
   </tr>
   <tr class="r1">
     <td>United States</td>
     <td class="num">1,477,436</td>
     <td class="num">52,640</td>
     <td class="num">3.56%</td>
     <td>Denmark</td>
     <td class="num">50,875</td>
     <td class="num">1,966</td>
     <td class="num">3.86%</td>
   </tr>
   <tr class="r2">
     <td>Germany</td>
     <td class="num">407,638</td>
     <td class="num">9,147</td>
     <td class="num">2.24%</td>
     <td>Australia</td>
     <td class="num">49,982</td>
     <td class="num">1,681</td>
     <td class="num">3.36%</td>
   </tr>
   <tr class="r1">
     <td>Great Britain</td>
     <td class="num">244,554</td>
     <td class="num">7,402</td>
     <td class="num">3.03%</td>
     <td>Switzerland</td>
     <td class="num">49,683</td>
     <td class="num">1,514</td>
     <td class="num">3.05%</td>
   </tr>
   <tr class="r2">
     <td>France</td>
     <td class="num">139,400</td>
     <td class="num">5,129</td>
     <td class="num">3.68%</td>
     <td>Russia</td>
     <td class="num">40,790</td>
     <td class="num">1,219</td>
     <td class="num">2.99%</td>
   </tr>
   <tr class="r1">
     <td>Italy</td>
     <td class="num">137,070</td>
     <td class="num">2,641</td>
     <td class="num">1.93%</td>
     <td>Sweden</td>
     <td class="num">33,654</td>
     <td class="num">1,387</td>
     <td class="num">4.12%</td>
   </tr>
   <tr class="r2">
     <td>Canada</td>
     <td class="num">133,506</td>
     <td class="num">4,391</td>
     <td class="num">3.29%</td>
     <td>China</td>
     <td class="num">31,345</td>
     <td class="num">1,582</td>
     <td class="num">5.05%</td>
   </tr>
   <tr class="r1">
     <td>Japan</td>
     <td class="num">124,976</td>
     <td class="num">1,092</td>
     <td class="num">0.87%</td>
     <td>Czech Republic</td>
     <td class="num">26,728</td>
     <td class="num">771</td>
     <td class="num">2.88%</td>
   </tr>
   <tr class="r2">
     <td>Netherlands</td>
     <td class="num">79,562</td>
     <td class="num">4,101</td>
     <td class="num">5.15%</td>
     <td>Austria</td>
     <td class="num">24,563</td>
     <td class="num">511</td>
     <td class="num">2.08%</td>
   </tr>
   <tr class="r1">
     <td>Spain</td>
     <td class="num">76,421</td>
     <td class="num">1,894</td>
     <td class="num">2.48%</td>
     <td>Norway</td>
     <td class="num">21,185</td>
     <td class="num">2,157</td>
     <td class="num">10.18%</td>
   </tr>
   <tr class="r2">
     <td>Poland</td>
     <td class="num">58,929</td>
     <td class="num">1,593</td>
     <td class="num">2.70%</td>
     <td>Turkey</td>
     <td class="num">18,621</td>
     <td class="num">864</td>
     <td class="num">4.64%</td>
   </tr>
</table>

<p class="note">There are further articles available providing <a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript-dom/">more detailed information on script tokenization</a> - links can found at this URL.</p>

<h2 id="css">CSS</h2>
<p>CSS is clearly a dominant Web technology, found in 2,821,141 MAMA URLs (80.39%). 
   Several methods are available to authors for using style sheets, and MAMA 
   detected all of them. Let us look at some quick results:</p>
   
   <ul>
   <li>Embedded and Inline CSS (via the <code class="elem">STYLE</code> element and <code class="att">Style</code> 
       attributes respectively) each had an average length of about 1,000 characters.</li>
   <li>The average length of external CSS (referenced via the <code class="elem">LINK</code> element) 
       is about 8,500 characters.</li>
   <li>External and Inline CSS were both used in approximately 65% of all CSS 
       cases, while Embedded CSS is found in ~45% of all CSS ... there is obviously 
       some significant overlap between these CSS inclusion methods.</li>
   </ul>

<p>CSS was meant to supplant the previous markup-only attempts at specifying a Web 
   page&#39;s look-and-feel. The old methods are perhaps best typified by the use of the 
   <code class="elem">FONT</code> element. As of now, CSS usage is more popular than <code class="elem">FONT</code> 
   use (<code class="elem">FONT</code> was used 2,061,417 times vs. 2,821,141 times for CSS). 
   <code class="elem">FONT</code> is still used often as a visual fallback in the majority of 
   cases - 1,592,546 URLs used <strong>both</strong> CSS and the <code class="elem">FONT</code> element.</p>

<p>With CSS being so prevalent, which properties are the primary choice of page 
   authors? And which properties do they stay away from? The following are 
   popularity lists for the top 10 and bottom 10 CSS properties encountered from 
   CSS 2.1. Control of font characteristics are the dominant use of CSS, while 
   properties with narrow browser support are used the least. The mantra of 
   &quot;if you build it, they will come&quot; may apply here. First, the 10 most popular:</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">10 most popular CSS 2.1 properties</caption>
   <tr valign="bottom">
     <th>CSS Property</th>
     <th>Frequency</th>
     <th rowspan="6">&#xA0;</th>
     <th>CSS Property</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><code class="prop">Color</code></td>
     <td class="num">2,400,643</td>
     <td><code class="prop">Background-color</code></td>
     <td class="num">1,698,366</td>
   </tr>
   <tr class="r2">
     <td><code class="prop">Font-size</code></td>
     <td class="num">2,336,689</td>
     <td><code class="prop">Width</code></td>
     <td class="num">1,596,974</td>
   </tr>
   <tr class="r1">
     <td><code class="prop">Font-family</code></td>
     <td class="num">2,223,829</td>
     <td><code class="prop">Text-align</code></td>
     <td class="num">1,448,336</td>
   </tr>
   <tr class="r2">
     <td><code class="prop">Text-decoration</code></td>
     <td class="num">2,113,412</td>
     <td><code class="prop">Height</code></td>
     <td class="num">1,428,991</td>
   </tr>
   <tr class="r1">
     <td><code class="prop">Font-weight</code></td>
     <td class="num">2,012,992</td>
     <td><code class="prop">Border</code></td>
     <td class="num">1,376,821</td>
   </tr>
</table>

<p>Now, the 10 least popular:</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">10 least popular CSS 2.1 properties</caption>
   <tr valign="bottom">
     <th>CSS Property</th>
     <th>Frequency</th>
     <th rowspan="6">&#xA0;</th>
     <th>CSS Property</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><code class="prop">Page-break-inside</code></td>
     <td class="num">5,075</td>
     <td><code class="prop">Outline-color</code></td>
     <td class="num">1,653</td>
   </tr>
   <tr class="r2">
     <td><code class="prop">Caption-side</code></td>
     <td class="num">4,666</td>
     <td><code class="prop">Outline-width</code></td>
     <td class="num">1,571</td>
   </tr>
   <tr class="r1">
     <td><code class="prop">Quotes</code></td>
     <td class="num">2,849</td>
     <td><code class="prop">Orphans</code></td>
     <td class="num">1,499</td>
   </tr>
   <tr class="r2">
     <td><code class="prop">Widows</code></td>
     <td class="num">2,092</td>
     <td><code class="prop">Counter-increment</code></td>
     <td class="num">292</td>
   </tr>
   <tr class="r1">
     <td><code class="prop">Outline-style</code></td>
     <td class="num">1,744</td>
     <td><code class="prop">Counter-reset</code></td>
     <td class="num">247</td>
   </tr>
</table>

<p class="note">See the <a href="cssproplist-url.htm">CSS properties list</a> for all the CSS properties MAMA detected</p>

<h2 id="scripting">Scripting</h2>
<p>Scripting is the other dominant and integral technology used with HTML markup. Some short facts follow:</p>

<ul>
    <li>MAMA found at least one form of scripting in 2,617,305 MAMA URLs (74.58%).</li>
    <li>MAMA detected the 4 main methods of including script in documents. Of these 
        methods, the most popular was embedding code in a <code class="elem">SCRIPT</code> element, 
        used in over 88% of all pages using scripting! External scripts and event 
        handler attributes had similar popularity, being used in ~65% of all URLs that 
        used script. JavaScript protocol URLs were found in less than 20% of scripted URLs.</li>
    <li>The sizes of scripts used in documents varied greatly, depending on the method used. 
        External scripts were typically the largest, averaging ~26,500 characters. 
        Embedded scripts averaged ~2,500 characters, while event-handler attributes and 
        JavaScript protocol URLs each averaged about 500 characters each.</li>
    <li>Finally, the use of scripting was dominated via JavaScript by a WIDE margin, with 
        VBScript relegated to also-ran status. The substring <span class="string">&quot;vbscript&quot;</span> 
        was searched for in opening <code class="elem">SCRIPT</code> tags, as well as in 
        any script content. It was found in only 103,485 (3.95%) of the URLs that used scripting.</li>
</ul>

<p class="note">There are further articles available providing <a href="http://dev.opera.com/articles/view/mama-scripting-syntax-and-features/">more detailed information on Scripting syntax and features</a>.</p>

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/mama-the-average-web-page/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: The &quot;average&quot; Web page</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

