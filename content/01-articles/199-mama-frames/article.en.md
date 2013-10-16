Title: MAMA: Frames
----
Date: 2008-11-14 13:50:44
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Event-handler attributes</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-head-structure/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: HEAD structure</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#strategy">MAMA&#39;s strategy for dealing with frames</a></li>
    <li><a href="#frameset">FRAMESET element</a></li>
    <li><a href="#frame">FRAME element</a></li>
    <li><a href="#iframe">IFRAME element</a></li>
    <li><a href="#noframes">NOFRAMES element</a></li>
    <li><a href="#target">Frame-related attribute: Target</a></li>
    <li><a href="#mime">Framed document MIME types</a></li>
    <li><a href="#doctypes">Frames and Doctypes</a></li>
    <li><a href="#w3c">Frames and the W3C-Member List</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>The frame layout concept for Web pages was first implemented in Netscape 2.0 
   in 1995. It allowed the browser window to be sub-divided into any number of 
   rows or columns of smaller, windowed documents. The concept has many 
   <a href="http://users.ipa.net/~djhill/frmain.html">design</a> and 
   <a href="http://www.useit.com/alertbox/9612.html">usability</a> problems, 
   and yet it is popular enough (and easy enough) that its usage has blossomed 
   over the years. Many authors and designers have a special place of fury in 
   their hearts for frames&#8212; a place where disdain for other reviled constructs 
   such as the <code class="elem">BLINK</code> and <code class="elem">MARQUEE</code> 
   elements lives. The standards community codified common browser/author practice 
   with HTML 4.0, and this included frames functionality as well as inline frames. 
  However, in recognizing frames, the W3C also relegated it forever after to a special 
   DTD ghetto. Perhaps some day the standards community will embrace a different 
   concept similar to what frames accomplish. Nevertheless, the current version of 
   frames enjoys wide deployment &quot;in the wild&quot;, despite its many drawbacks. Frames 
   defiantly maintain a degree of authoring inertia, despite the general disfavor. 
   Authors probably do not care enough about the arguments against frames to use 
   other alternatives&#8212;or else they just are not being original enough in coming 
   up with design alternatives. Despite being dropped in XHTML 1.1, frames are not 
   going to go away.</p>

<h2 id="strategy">MAMA&#39;s strategy for dealing with frames</h2>
<p>Documents containing frame-related elements are often quite simplistic&#8212;they 
   usually consist of some document <code class="elem">HEAD</code> elements 
   followed by the frame markup structure. This alone does not accurately depict 
   all of the content that the browser is going to experience when accessing a 
   URL using frames. Each of the sub-frame URLs (specified by the <code class="att">Src</code> 
   attribute of the <code class="elem">FRAME</code> element) may have a very rich 
   markup experience that is not hinted at by the original frame structure document. 
   For example, if Javascript or Flash was only used in a sub-frame, the analysis 
   of the original frames page would not reflect that&#8212;even though the user would 
   experience the full aggregate of the features used in <strong>ALL</strong> of 
   the frames. Given the size of the analyzed URL set, it was not expected that 
   MAMA would be able to catalog and subsequently visit each of the sub-frames 
   individually in the timeframe available. To ensure that MAMA&#39;s analysis was as 
   close to the real-world experience as possible, a (debatable) design decision 
   was made to string together the content of the frames definition pages and the 
   content of all sub-frames into one long document for MAMA to analyze. Some of 
   MAMA&#39;s element counting statistics were inflated by this strategy, but it seems 
   to be a useful approach for the study to have adopted. There are certainly a few 
   drawbacks to this methodology&#8212;the overall view of the &quot;document&quot; can become 
   distorted unless steps are taken to allow for the changes. MAMA compensated as 
   well as it could by only using the originating frameset document as reference 
   for things like Doctype and other document metadata and ignoring any 
   corresponding information from the sub-frames.</p>

<h2 id="frameset"><code class="elem">FRAMESET</code> element</h2>
<p>This element is used to create the layout grid of the sub-document frames, and 
   was encountered 378,033 times (10.77% of all MAMA&#39;s URLs). <code class="elem">FRAMESET</code> 
   specifies how the current document can be sub-divided into a grid of relative 
   or specific dimensions using the <code class="att">Rows</code> and 
   <code class="att">Cols</code> attributes, but neither of these attributes are 
   the most frequently used&#8212;that title belongs to the attribute <code class="att">Border</code>. 
   The primary reason for this is that a <code class="att">Rows</code> 
   <strong>OR</strong> <code class="att">Cols</code> attribute is often used to 
   the exclusion of the other attribute. In spite of <code class="att">Rows</code> 
   and <code class="att">Cols</code> being less popular than <code class="att">Border</code>, 
   the majority of URLs using the <code class="elem">FRAMESET</code> element have 
   <code class="elem">ROWS</code> and <code class="elem">COLS</code> attributes 
   together in combination (203,575 times). The list of attributes below (Fig 3-1) 
   demonstrates a peculiar Web behavior: authors will dream up markup attributes and 
   pepper their code with them, whether they actually have an effect in any 
   browser. The only standards-legal attributes in this list are 
   <code class="att">Rows</code> and <code class="att">Cols</code>, and the others 
   are browser-extensions. The full MAMA attribute list shows that there were as 
   many as 24 other attributes detected for <code class="elem">FRAMESET</code> (like 
   <code class="att">Cellpadding</code>, <code class="att">Spacing</code> and 
   <code class="att">Frameset</code>)...many of which are clearly erroneous and can 
   not possibly have an effect in any browser!</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> FRAMESET element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FRAMESET</code></td><td class="num">378,033</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Marginheight</code></td><td class="num">8,210</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">320,423</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Noresize</code></td><td class="num">6,238</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Rows</code></td><td class="num">310,679</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Scrolling</code></td><td class="num">5,522</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Frameborder</code></td><td class="num">301,851</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Leftmargin</code></td><td class="num">1,818</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Framespacing</code></td><td class="num">277,052</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">1,810</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Cols</code></td><td class="num">268,482</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Topmargin</code></td><td class="num">1,791</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Bordercolor</code></td><td class="num">16,160</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Framecolor</code></td><td class="num">1,262</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Marginwidth</code></td><td class="num">8,331</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Framepadding</code></td><td class="num">1,189</td></tr>
</table>

<h2 id="frame"><code class="elem">FRAME</code> element</h2>
<p>This element is used to specify the target object that will live in the frame. 
   It also gives direction for the individual frame&#39;s behavior. One would expect a 
   1-to-1 relationship between the usage of the <code class="elem">FRAMESET</code> 
   and <code class="elem">FRAME</code> elements, but that is not quite the case&#8212;377,803 URLs used both of these elements at the same time, leaving 230 
   <code class="elem">FRAMESET</code>-only URLs and 304 <code class="elem">FRAME</code>-only 
   URLs. Attribute popularity follows standards-approved lines and is much more 
   uniform than for the <code class="elem">FRAMESET</code> element. The 
   <code class="att">Longdesc</code> attribute, on the other hand, is poorly 
   represented and has never caught on.</p>

<p>Documents that use frames can point to other documents containing frames. It 
   is possible that an author could nest frames to an infinite depth, but in practice 
   the chances of that happening by design or accident are ... well ... pretty low. 
   How low? We are not exactly sure (yet), because MAMA only tried to detect the use 
   of nested frames&#8212; specifically the <code class="elem">FRAME</code> element&#8212;in second-level framed documents and not beyond that. In all, 56,242 URLs were found 
   to have nested frames (14.88% of all URLs using frames). This seems like a 
   good starting point for further study if it seems warranted.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> FRAME element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FRAME</code></td><td class="num">378,107</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">31,645</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Src</code></td><td class="num">377,986</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Framespacing</code></td><td class="num">18,098</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">349,820</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Bordercolor</code></td><td class="num">8,203</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Scrolling</code></td><td class="num">312,463</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Topmargin</code></td><td class="num">5,366</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Noresize</code></td><td class="num">268,967</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Leftmargin</code></td><td class="num">4,626</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Marginwidth</code></td><td class="num">160,768</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Resize</code></td><td class="num">2,098</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Marginheight</code></td><td class="num">159,237</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">1,121</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Frameborder</code></td><td class="num">118,858</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Longdesc</code></td><td class="num">643</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Target</code></td><td class="num">89,487</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3>URLs using the most frames</h3>
<p>The site MAMA found with the most Frame document references was 
   http://www.iddic.com/index.html/ (URL no longer active) 
   with 65 (Fig 4-2). It looks like this is not a unique case, as several URLs 
   were detected to have more than 50 frames each. The average number of frames 
   (when they <strong>ARE</strong> used) is 2.83.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-2:</strong> URLs with the highest Frame quantities</caption>
   <tr valign="bottom"><th>URL</th><th>quantity</th></tr>
   <tr class="r1"><td>http://www.iddic.com/index.html/ (URL no longer active)</td><td class="num">65</td></tr>
   <tr class="r2"><td><a href="http://www.cywu.org.uk/">http://www.cywu.org.uk/</a></td><td class="num">63</td></tr>
   <tr class="r1"><td><a href="http://www.markt-zell.de/">http://www.markt-zell.de/</a></td><td class="num">63</td></tr>
   <tr class="r2"><td><a href="http://www.timiane.dk/index.htm">http://www.timiane.dk/index.htm/</a></td><td class="num">52</td></tr>
</table>

<h2 id="iframe"><code class="elem">IFRAME</code> element</h2>
<p>This element creates an inline, or floating, frame in a document. Instead of 
   a document that only specifies the way other documents will live together in 
   a window, an <code class="elem">IFRAME</code> is included within the normal 
   document flow, in much the same way an inline <code class="elem">IMG</code> 
   is used. In practice, many will be familiar with <code class="elem">IFRAME</code> 
   these days as a carrier for complex (and sometimes bothersome) advertisements 
   found on many websites. <code class="att">Src</code> is naturally the dominant 
   attribute here, with <code class="att">Frameborder</code> being (strangely) 
   slightly more popular than the more practical issue of specifying dimensions 
   for the <code class="elem">IFRAME</code> (<code class="att">Height</code> 
   and <code class="att">Width</code>). Usage of the <code class="att">Longdesc</code> 
   attribute barely makes it into this list; its frequency is well below the 
   usages of many non-standardized attributes.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> IFRAME element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="13">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">IFRAME</code></td><td class="num">222,462</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">29,256</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Src</code></td><td class="num">218,803</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Allowtransparency</code></td><td class="num">22,674</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Frameborder</code></td><td class="num">203,627</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Bordercolor</code></td><td class="num">8,534</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">202,572</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Framespacing</code></td><td class="num">7,839</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">202,147</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Noresize</code></td><td class="num">7,098</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Scrolling</code></td><td class="num">178,129</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Target</code></td><td class="num">5,308</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Marginwidth</code></td><td class="num">117,095</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Topmargin</code></td><td class="num">3,347</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Marginheight</code></td><td class="num">115,280</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Leftmargin</code></td><td class="num">3,228</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">87,763</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">2,434</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">35,869</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Background-color</code></td><td class="num">914</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Hspace</code></td><td class="num">34,504</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Longdesc</code></td><td class="num">362</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Vspace</code></td><td class="num">34,383</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3>How often <code class="elem">IFRAME</code>s are used</h3>
<p>The maximum number of <code class="elem">IFRAME</code> references was an 
   astounding 769, with the average number for documents using <code class="elem">IFRAME</code> 
   being 1.51. The <code class="elem">FRAME</code> and <code class="elem">IFRAME</code> 
   elements are not used in conjunction very often&#8212;only 19,472 cases out of 
   222,462 (8.75%).</p>

<p class="note"><strong>Note:</strong><br /> Use caution accessing any of the 
   high-<code class="elem">IFRAME</code>-quantity URLs mentioned in Fig 5-2: 
   some browsers may have problems with these extreme situations.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> URLs using the most IFRAMEs</caption>
   <tr valign="bottom"><th>URL</th><th>Quantity</th></tr>
   <tr class="r1"><td><a href="http://www.nbhqjx.com/">http://www.nbhqjx.com/</a></td><td class="num">769</td></tr>
   <tr class="r2"><td><a href="http://www.1000irani.com/">http://www.1000irani.com/</a></td><td class="num">708</td></tr>
   <tr class="r1"><td>http://www.kramers-landhandel.de/shop/ (URL no longer active)</td><td class="num">386</td></tr>
   <tr class="r2"><td><a href="http://www.pizza-juechsen.de/">http://www.pizza-juechsen.de/</a></td><td class="num">385</td></tr>
   <tr class="r1"><td><a href="http://www.anomaliesandquandaries.homestead.com">http://www.anomaliesandquandaries.homestead.com/</a></td><td class="num">134</td></tr>
   <tr class="r2"><td><a href="http://www.kissnews.de/shop/start.html">http://www.kissnews.de/shop/start.html/</a></td><td class="num">117</td></tr>
   <tr class="r1"><td><a href="http://www.revelation13.net/movie.html">http://www.revelation13.net/movie.html/</a></td><td class="num">107</td></tr>
   <tr class="r2"><td><a href="http://www.trierer-orgelpunkt.de/">http://www.trierer-orgelpunkt.de/</a></td><td class="num">104</td></tr>
</table>

<h2 id="noframes"><code class="elem">NOFRAMES</code> element</h2>
<p>This element is for non-framed, fallback content. Only a browser that does not 
   understand frames or has frames functionality turned off will display the 
   content. It is considered good practice to use this element on any Web page 
   that is also specifying the use of Frames, and it was detected in 313,084 URLs&#8212;82.8% of the URLs using <code class="elem">FRAMESET</code>.</p>

<h2 id="target">Frame-related attribute: <code class="att">Target</code></h2>
<p>According to HTML 4.01, there are only 5 elements that can carry the 
   <code class="att">Target</code> attribute: <code class="elem">A</code>, 
   <code class="elem">AREA</code>, <code class="elem">BASE</code>, 
   <code class="elem">FORM</code> and <code class="elem">LINK</code>. The URLs 
   that MAMA analyzed used the attribute in a distressingly diverse list of 
   elements (25)! Elements with no business carrying this attribute, like 
   <code class="elem">DIV</code> and <code class="elem">OPTION</code>, occur 
   in quantities too frequent to be an accident. Looking at cases on the 
   standards-approved side of the fence, use of <code class="att">Target</code> 
   with the <code class="elem">A</code> element is far, far greater than the 
   general usage of frames would indicate. Authors are most likely concerned 
   with the frame situation their hyperlinks will end up in, so they take 
   steps to control it with the <code class="att">Target</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Target attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">1,978,018</td></tr>
   <tr class="r2"><td><code class="elem">FORM</code></td><td class="num">199,085</td></tr>
   <tr class="r1"><td><code class="elem">BASE</code></td><td class="num">159,479</td></tr>
   <tr class="r2"><td><code class="elem">AREA</code></td><td class="num">146,703</td></tr>
   <tr class="r1"><td><code class="elem">LINK</code></td><td class="num">1,585</td></tr>
</table>

<h3><code class="att">Target</code> attribute values</h3>
<p>What sort of values does the <code class="att">Target</code> attribute use? 
   It has several reserved keywords, all beginning with the underscore character 
   (&quot;_&quot;): <span class="string">&quot;_blank&quot;</span>, <span class="string">&quot;_top&quot;</span>, 
   <span class="string">&quot;_self&quot;</span>, <span class="string">&quot;_parent&quot;</span> and 
   <span class="string">&quot;_new&quot;</span>. As expected, these values are the most 
   popular. Values resembling these keywords (such as <span class="string">&quot;blank&quot;</span> 
   or <span class="string">&quot;top&quot;</span>) are also very popular, as are values which 
   stress the parent-child relationship of frame documents to their content documents 
   (including <span class="string">&quot;main&quot;</span> and <span class="string">&quot;contents&quot;</span>, 
   and even German equivalents of the same: <span class="string">&quot;hauptframe&quot;</span> 
   and <span class="string">&quot;inhalt&quot;</span>).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-2:</strong> 
   Target attribute values<br />(See also the <a href="frametargetlist-url.htm">complete 
   frequency table</a>)</caption>
   <tr valign="bottom"><th>Target attribute value</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Target attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">_blank</span></td><td class="num">1,548,594</td><td><span class="string">mainframe</span></td><td class="num">31,691</td></tr>
   <tr class="r2"><td><span class="string">_top</span></td><td class="num">550,637</td><td><span class="string">google_window</span></td><td class="num">20,905</td></tr>
   <tr class="r1"><td><span class="string">_self</span></td><td class="num">306,182</td><td><span class="string">contents</span></td><td class="num">18,076</td></tr>
   <tr class="r2"><td><span class="string">_parent</span></td><td class="num">121,225</td><td><span class="string">hauptframe</span></td><td class="num">15,829</td></tr>
   <tr class="r1"><td><span class="string">_new</span></td><td class="num">84,293</td><td><span class="string">inhalt</span></td><td class="num">12,828</td></tr>
   <tr class="r2"><td><span class="string">main</span></td><td class="num">82,075</td><td><span class="string">content</span></td><td class="num">10,316</td></tr>
   <tr class="r1"><td><span class="string">new</span></td><td class="num">52,756</td><td><span class="string">top</span></td><td class="num">7,977</td></tr>
   <tr class="r2"><td><span class="string">blank</span></td><td class="num">43,287</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="mime">Framed document MIME types</h2>
<p>In the process of fetching the first-level frames of a document, MAMA tracked 
   the MIME type of the frames. Some file types were outright rejected before this 
   tracking could occur, based solely on file extension alone. The following file 
   extensions were not tracked but were probably not rare occurrences: 
   <code class="regexp">/\.(exe|mov|mp3|pdf|swf|wav|wma|wmv)/i</code>. After eliminating 
   those, the most popular values were almost all <span class="string">&quot;text/html&quot;</span> 
   (by a very wide margin), with <span class="string">&quot;text/plain&quot;</span> and an empty 
   MIME type also occurring with some frequency.</p>

<p class="note"><strong>Note:</strong><br />In the <a href="framemimelist-url.htm">full 
   frequency table</a> the overall total is much larger than the number of URLs 
   containing frames. This is because a URL can point to multiple frames at once.</p>

<h2 id="doctypes">Frames and Doctypes</h2>
<p>HTML 4 and XHTML 1.0 have a special Doctype that is meant to be used when any 
   frame-related elements are used in a document. How do documents fare at actually 
   using these Doctypes? The answer is, &quot;lower than the general population&quot;, but 
   the overall numbers are still not too bad: 129,190 of the 378,033 URLs using the 
   <code class="elem">FRAMESET</code> element (34.17%) also use a Doctype&#8212;but not 
   so fast! Are these Doctypes specifying the frameset Doctype? Oops&#8212;that would 
   be a &quot;no&quot; just as often as it is a &quot;yes&quot;: only 60,638 of the URLs that use the 
   <code class="elem">FRAMESET</code> element (16.04%) use a frameset Doctype.</p>

<h2 id="w3c">Frames and the W3C-Member List</h2>
<p>Now, we can revisit the W3C-Member company list. If the use of frames is at odds with 
   the standards and design folk, one would expect that usage by the W3C companies 
   would be much less than the general population. That does seem to hold generally
   true at a quick glance. In our &quot;The Wild&quot; sample space of 3,509,180 URLs, 378,033 
   use frames (10.77%), and 222,462 use iframes (6.34%). In the W3C-company population, 
   14/429 use frames (3.26%), and 26/429 use iframes (6.06%). To harp on the Doctype 
   issue again (because we can), only 6 of those sites using frames had Doctypes, with 
   only two(!!) of those using the frameset Doctype.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Event-handler attributes</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-head-structure/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: HEAD structure</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

