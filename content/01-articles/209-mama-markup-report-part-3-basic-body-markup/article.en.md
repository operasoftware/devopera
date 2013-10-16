Title: MAMA: Markup report, part 3: Basic BODY markup
----
Date: 2008-11-21 11:06:44
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
<p>This is it. This week we begin to cover the real heart of HTML markup. These 
   elements are what make HTML tick—they give documents their life and primary 
   expression. Hyperlinks create the &quot;web&quot; of the Web; images are the primary 
   avenue for authors to incorporate multimedia, and the many phrase and block 
   elements covered here imbue content with semantics and basic formatting. We
   will take a look at each of these areas in turn. For a deeper look at these 
   areas and more, the following MAMA article topics are also available this week:</p>

<ul>
    <li><a href="http://dev.opera.com/articles/view/mama-body-structure/">The BODY element</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-hyperlinks/">Hyperlinks</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-images-elements-and-formats/">Images</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-phrase-block-list/">Phrase and block markup</a></li>
</ul>

<p class="note">To read more details of MAMA&#39;s findings, <a href="http://dev.opera.com/articles/view/mama/">check out the MAMA home page</a>.</p>

<h2>Hyperlinks</h2>
<p>Hyperlinks make the Web the web that it is. It is little wonder then that 
   the A element is the most popular of any of the <code class="elem">BODY</code>&#39;s 
   child elements. MAMA considered each occurrence of an <code class="att">Href</code> 
   attribute in an <code class="elem">AREA</code> or <code class="elem">A</code> element 
   as a hyperlink and kept a running tally for each URL analyzed. It also compared 
   the domain of the URL in a hyperlink with the domain of the page being analyzed 
   in order to discover how many external domains were being referenced in a 
   document. Of the 3,337,666 URLs that contained hyperlinks, 72.2% of them had
   at least one linking outside the domain of the URL that was analyzed. The 
   average number of hyperlinks per document was 38.4.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Top attribute frequencies for the A and AREA elements</caption>
   <tr valign="bottom"><th>ELEMENT/<br />
Attribute</th><th>Frequency</th><th>% Total<br />
element<br />
usage</th><th rowspan="7"> </th>
       <th>ELEMENT/<br />
Attribute</th><th>Frequency</th><th>% Total<br />
element<br />
usage</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">3,307,397</td><td class="num">--</td>
       <td><code class="elem">AREA</code></td><td class="num">453,187</td><td class="num">--</td></tr>
   <tr class="r2"><td>    <code class="att">Href</code></td><td class="num">3,304,834</td><td class="num">99.9%</td>
       <td>    <code class="att">Coords</code></td><td class="num">452,272</td><td class="num">99.8%</td></tr>
   <tr class="r1"><td>    <code class="att">Target</code></td><td class="num">1,978,018</td><td class="num">59.8%</td>
       <td>    <code class="att">Href</code></td><td class="num">450,478</td><td class="num">99.4%</td></tr>
   <tr class="r2"><td>    <code class="att">Title</code></td><td class="num">658,820</td><td class="num">19.9%</td>
       <td>    <code class="att">Shape</code></td><td class="num">439,720</td><td class="num">97.0%</td></tr>
   <tr class="r1"><td>    <code class="att">Name</code></td><td class="num">485,168</td><td class="num">14.7%</td>
       <td>    <code class="att">Alt</code></td><td class="num">203,624</td><td class="num">44.9%</td></tr>
   <tr class="r2"><td>    <code class="att">Rel</code></td><td class="num">96,613</td><td class="num">2.9%</td>
       <td>    <code class="att">Nohref</code></td><td class="num">13,570</td><td class="num">3.0%</td></tr>
</table>

<h3>The <code class="elem">A</code> <code class="att">Rel</code> attribute</h3>
<p>The <code class="att">Rel</code> attribute for the <code class="elem">A</code> 
   element expresses the relationship that the destination URL has to the current 
   URL. Until relatively recently this attribute was underused. However, its 
   <a href="http://microformats.org/wiki/existing-rel-values">use has grown in 
   the last few years as microformats have been embraced</a>. The most popular 
   values for this attribute are <span class="string">&quot;nofollow&quot;</span> at more 
   than 2-to-1 over the next-nearest values of <span class="string">&quot;bookmark&quot;</span> 
   and <span class="string">&quot;tag&quot;</span>.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Top values for A Rel</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th><th rowspan="6"> </th><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">nofollow</span></td><td class="num">46,179</td><td><span class="string">license</span></td><td class="num">6,330</td></tr>
   <tr class="r2"><td><span class="string">bookmark</span></td><td class="num">20,524</td><td><span class="string">alternate</span></td><td class="num">5,252</td></tr>
   <tr class="r1"><td><span class="string">tag</span></td><td class="num">20,445</td><td><span class="string">lightbox</span></td><td class="num">2,917</td></tr>
   <tr class="r2"><td><span class="string">category</span></td><td class="num">13,012</td><td><span class="string">me</span></td><td class="num">1,929</td></tr>
   <tr class="r1"><td><span class="string">external</span></td><td class="num">7,473</td><td><span class="string">self</span></td><td class="num">1,630</td></tr>
</table>

<h2>Images</h2> 
<p>MAMA kept track of how many images were detected in each document, including 
   duplicate references to the same image. It tallied the total image references 
   encountered (avg: 22.6), the number of unique images encountered (avg: 12.3), 
   and the maximum number of times an image was referenced multiple times (avg: 15.2). 
   MAMA found 3,233,208 URLs (92.14%) using images via the following methods:</p>

<ul>
    <li>The <code class="elem">IMG</code> element</li>
    <li>The forms <code class="elem">INPUT</code> 
        <code class="att">Type</code>=<span class="string">&quot;image&quot;</span>/<code class="att">Src</code> widget usage</li>
    <li>Elements with a <code class="att">Background</code> attribute</li> 
</ul>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">MAMA&#39;s Image usage detections</caption>
    <tr valign="bottom"><th>ELEMENT[Attribute]</th><th>Frequency</th><th>Percentage</th></tr>
    <tr class="r1"><td><code class="elem">IMG</code>[<code class="att">Src</code>]</td><td class="num">3,219,304</td><td class="num">91.7%</td></tr>
    <tr class="r2"><td><code class="elem">TD</code>[<code class="att">Background</code>]</td><td class="num">714,706</td><td class="num">20.4%</td></tr>
    <tr class="r1"><td><code class="elem">BODY</code>[<code class="att">Background</code>]</td><td class="num">634,617</td><td class="num">18.1%</td></tr>
    <tr class="r2"><td><code class="elem">INPUT</code>[<code class="att">Src</code>]</td><td class="num">337,286</td><td class="num">9.6%</td></tr>
    <tr class="r1"><td><code class="elem">TABLE</code>[<code class="att">Background</code>]</td><td class="num">281,209</td><td class="num">8.0%</td></tr>
    <tr class="r2"><td><code class="elem">TH</code>[<code class="att">Background</code>]</td><td class="num">5,354</td><td class="num">0.2%</td></tr></table>

<h3>The <code class="elem">IMG</code> element</h3>
<p>The <code class="elem">IMG</code> element was by far the most popular method 
   for using images in a document. Of the child elements of <code class="elem">BODY</code>, 
   <code class="elem">IMG</code> is second in popularity only to hyperlinks—used in 91.7% of MAMA&#39;s URL set. Several of its attributes rank among the top 
   10 of all markup attributes.</p> 

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Top attribute frequencies for the IMG element</caption>
    <tr valign="bottom"><th>ELEMENT/<br />
Attribute</th><th>Frequency</th><th>% Total<br />
element<br />
usage</th><th rowspan="7"> </th>
                        <th>ELEMENT/<br />
Attribute</th><th>Frequency</th><th>% Total<br />
element<br />
usage</th></tr>
    <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">3,219,487</td><td class="num">--</td>
        <td>    <code class="att">Align</code></td><td class="num">1,134,698</td><td class="num">35.2%</td></tr>
    <tr class="r2"><td>    <code class="att">Src</code></td><td class="num">3,219,304</td><td class="num">99.99%</td>
        <td>    <code class="att">Name</code></td><td class="num">875,461</td><td class="num">27.2%</td></tr>
    <tr class="r1"><td>    <code class="att">Width</code></td><td class="num">2,957,808</td><td class="num">91.9%</td>
        <td>    <code class="att">Hspace</code></td><td class="num">526,348</td><td class="num">16.3%</td></tr>
    <tr class="r2"><td>    <code class="att">Height</code></td><td class="num">2,945,989</td><td class="num">91.5%</td>
        <td>    <code class="att">Usemap</code></td><td class="num">447,774</td><td class="num">13.9%</td></tr>
    <tr class="r1"><td>    <code class="att">Border</code></td><td class="num">2,810,265</td><td class="num">87.3%</td>
        <td>    <code class="att">Vspace</code></td><td class="num">445,580</td><td class="num">13.8%</td></tr>
    <tr class="r2"><td>    <code class="att">Alt</code></td><td class="num">2,520,939</td><td class="num">78.3%</td>
        <td>    <code class="att">Title</code></td><td class="num">367,132</td><td class="num">11.4%</td></tr>
</table>

<h3>Image formats</h3>
<p>Authors use images in many ways, and there is definitely room on the Web for 
   the many formats currently in play. In addition to keeping track of image 
   totals, MAMA looked at the popularity of the GIF, JPEG, and PNG formats. MAMA 
   defaulted to using an image&#39;s file extension to judge the type of format. If 
   MAMA could declare a particular format from just this alone, it did not try 
   to dig any deeper. If the file extension check was inconclusive, MAMA would 
   then download the HTTP HEAD of the referenced image and proceed to examine 
   the image&#39;s MIME type to detect the format.</p>

<p>JPEG has no real competition in depicting photographs or realistic scenes, but 
   the PNG format and the dominant GIF format are at odds for the same use cases. 
   Due to a number of <a href="http://en.wikipedia.org/wiki/Portable_Network_Graphics#Web_browser_support_for_PNG">historical 
   issues</a>, uptake of the PNG format has been slower than many expected. Authors 
   seem to have no problem with both formats coexisting on their Web sites. </p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Image format statistics</caption>
   <tr valign="bottom"><th>Image<br />
Format</th><th>Total<br />
occurrences</th><th>Percentage</th>
       <th>Maximum<br />
quantity<br />
encountered</th><th>Average<br />
in sample</th></tr> 
   <tr class="r1"><td>GIF</td><td class="num">2,854,113</td><td class="num">81.3%</td>
       <td class="num">1,610</td><td class="num">9.0</td></tr>
   <tr class="r2"><td>JPEG</td><td class="num">2,451,507</td><td class="num">69.9%</td>
       <td class="num">1,201</td><td class="num">6.1</td></tr>
   <tr class="r1"><td>PNG</td><td class="num">374,408</td><td class="num">10.7%</td>
       <td class="num">539</td><td class="num">3.2</td></tr>
</table>

<h3>Image formats in combination: Venn diagram</h3>
<p>The following diagram shows the usage overlap of the three dominant image 
   formats. The relationship between GIF and PNG is usually characterized as a 
   competitive one, so it was expected that these numbers would demonstrate 
   authors showing a clear preference for one or the other in their pages. That 
   is definitely <strong>not</strong> the case. PNGs were detected in 374,408 URLs, 
   and of those, 311,827 URLs (83.3%) also used the GIF format as well. If that 
   is what constitutes a format war, the battle is a subtle one.</p>

<p><img width="593" alt="Venn diagram for image format usage types" src="http://forum-test.oslo.osa/kirby/content/articles/209-mama-markup-report-part-3-basic-body-markup/venn-imageformatbreakdown.png" height="392" />
</p>

<p class="note"><strong>Note:</strong> Region sizes are not to scale</p>

<h2>Phrase elements</h2>
<p>The purpose of some of these inline elements is to assign semantic meaning to 
   text content. Many of the other elements in this category set their sights
   lower; they convey simple formatting and appearance information. In fact, 
   the most popular of these elements is still the <code class="elem">FONT</code> 
   element—an element that exists purely to convey formatting. Markup purists 
   will be dismayed that <code class="elem">FONT</code> remains in such high usage, 
   but they can console themselves that the overall use of CSS (80.4%) now edges 
   out <code class="elem">FONT</code> (58.7%) by a comfortable margin. Other 
   interesting findings of note include <code class="elem">SMALL</code> being 
   twice as popular as <code class="elem">BIG</code>, and <code class="elem">SUP</code> 
   in use almost 8 times as much as <code class="elem">SUB</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Top phrase markup elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="6"> </th><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FONT</code></td><td class="num">2,061,417</td><td><code class="elem">EM</code></td><td class="num">351,594</td></tr>
   <tr class="r1"><td><code class="elem">B</code></td><td class="num">1,805,495</td><td><code class="elem">U</code></td><td class="num">342,612</td></tr>
   <tr class="r2"><td><code class="elem">SPAN</code></td><td class="num">1,527,964</td><td><code class="elem">SMALL</code></td><td class="num">155,962</td></tr>
   <tr class="r1"><td><code class="elem">STRONG</code></td><td class="num">1,102,056</td><td><code class="elem">BIG</code></td><td class="num">76,946</td></tr>
   <tr class="r2"><td><code class="elem">I</code></td><td class="num">668,742</td><td><code class="elem">SUP</code></td><td class="num">73,309</td></tr>
</table>

<h3>The <code class="elem">FONT</code> element</h3> 
<p>Zeroing in on this element can tell us a lot about &quot;old school&quot; HTML. When 
   it was introduced at the end of 1994, it filled an early void for typographical 
   capabilities with authors. CSS has since subsumed all the features that 
   <code class="elem">FONT</code> first brought to the Web. The values for the 
   main attributes of the <code class="elem">FONT</code> element show a dominant
   value preferred for each: the <code class="att">Color</code> is usually white 
   (<span class="string">&quot;#ffffff&quot;</span> or <span class="string">&quot;white&quot;</span>), 
   the <code class="att">Face</code> is typically <span class="string">&quot;Arial&quot;</span>, 
   and the <code class="att">Size</code> is most often <span class="string">&quot;2&quot;</span>.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">FONT element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FONT</code></td><td class="num">2,061,417</td></tr>
   <tr class="r2"><td>   <code class="att">Size</code></td><td class="num">1,709,405</td></tr>
   <tr class="r1"><td>   <code class="att">Color</code></td><td class="num">1,634,714</td></tr>
   <tr class="r2"><td>   <code class="att">Face</code></td><td class="num">1,379,110</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Top attribute values for FONT attributes</caption>
   <tr valign="bottom"><th>Color<br />
attribute<br />
value</th><th>Frequency</th><th rowspan="6"> </th>
       <th>Face<br />
attribute<br />
value</th><th>Frequency</th><th rowspan="6"> </th>
       <th>Size<br />
attribute<br />
value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">#ffffff</span></td><td class="num">535,698</td>
       <td><span class="string">arial</span></td><td class="num">1,036,962</td>
       <td><span class="string">2</span></td><td class="num">967,193</td></tr>
   <tr class="r2"><td><span class="string">#000000</span></td><td class="num">442,291</td>
       <td><span class="string">helvetica</span></td><td class="num">660,926</td>
       <td><span class="string">1</span></td><td class="num">785,227</td></tr>
   <tr class="r1"><td><span class="string">#ff0000</span></td><td class="num">318,323</td>
       <td><span class="string">verdana</span></td><td class="num">548,563</td>
       <td><span class="string">3</span></td><td class="num">488,919</td></tr>
   <tr class="r2"><td><span class="string">#0000ff</span></td><td class="num">188,611</td>
       <td><span class="string">sans-serif</span></td><td class="num">486,824</td>
       <td><span class="string">4</span></td><td class="num">485,621</td></tr>
   <tr class="r1"><td><span class="string">#000080</span></td><td class="num">101,950</td>
       <td><span class="string">times new roman</span></td><td class="num">197,881</td>
       <td><span class="string">5</span></td><td class="num">332,907</td></tr>
</table>

<h2>Block and replaced elements</h2>
<p>These elements are used in a wide variety of situations to accomplish an 
   assortment of tasks. Some of them are widely used and others are not. The only
   relationship that many of these elements have is that they share little in 
   common with the other main MAMA categories.</p>

<p>The <code class="elem">BR</code> element is used most frequently in this group, 
   but <code class="elem">P</code> and <code class="elem">DIV</code> are also 
   favored by authors. The <code class="elem">BR</code> element ranks a little higher 
   than the numbers below indicate, because MAMA detected <code class="elem">&lt;br&gt;</code> 
   separately from <code class="elem">&lt;br/&gt;</code>. The two variants
   of <code class="elem">BR</code> were detected in 2,884,356 of MAMA&#39;s URLs (82.2%). 
   The heading elements (<code class="elem">H1</code>-<code class="elem">H6</code>) 
   followed an expected popularity path: <code class="elem">H2</code> is found 
   less often than <code class="elem">H1</code>, <code class="elem">H3</code> 
   less often than <code class="elem">H2</code> and so on. <code class="elem">UL</code>
   is found at almost 20 times the frequency of the <code class="elem">OL</code> 
   element; it is a little surprising that authors do not show a tendency to rank things.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Top block and replaced elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>Percentage</th><th rowspan="6"> </th>
       <th>ELEMENT</th><th>Frequency</th><th>Percentage</th></tr>
   <tr class="r1"><td><code class="elem">BR</code></td><td class="num">2,859,662</td><td class="num">81.5%</td>
                  <td><code class="elem">H1</code></td><td class="num">769,344</td><td class="num">21.9%</td></tr>
   <tr class="r2"><td><code class="elem">P</code></td><td class="num">2,702,935</td><td class="num">77.0%</td>
                  <td><code class="elem">HR</code></td><td class="num">729,380</td><td class="num">20.8%</td></tr>
   <tr class="r1"><td><code class="elem">DIV</code></td><td class="num">2,499,779</td><td class="num">71.2%</td>
                  <td><code class="elem">H2</code></td><td class="num">573,002</td><td class="num">16.3%</td></tr>
   <tr class="r2"><td><code class="elem">CENTER</code></td><td class="num">1,076,535</td><td class="num">30.7%</td>
                  <td><code class="elem">H3</code></td><td class="num">438,496</td><td class="num">12.5%</td></tr>
   <tr class="r1"><td><code class="elem">UL</code></td><td class="num">809,915</td><td class="num">23.1%</td>
                  <td><code class="elem">BLOCKQUOTE</code></td><td class="num">188,947</td><td class="num">5.4%</td></tr>
</table>

<h2>Conclusion</h2>
<p>This week&#39;s topics mark a turning point in the MAMA results. Although some 
   other topics are also very popular (such as next week&#39;s tables and forms), 
   hyperlinks and images constitute arguably <strong>THE</strong> most important part 
   of HTML. Next week, we will wrap up MAMA&#39;s look at markup by covering the 
   remaining popular markup topics: forms, plug-ins, tables, and XML.</p>
