Title: MAMA: Common attributes
----
Date: 2008-11-14 13:50:51
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-code-comments/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Code comments</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Event-handler attributes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#name">Name</a></li>
    <li><a href="#class">Class</a></li>
    <li><a href="#style">Style</a></li>
    <li><a href="#id">Id</a></li>
    <li><a href="#title">Title</a></li>
    <li><a href="#lang">Lang</a></li>
    <li><a href="#dir">Dir</a></li>
    <li><a href="#accesskey">Accesskey</a></li>
    <li><a href="#tabindex">Tabindex</a></li>
    <li><a href="#longdesc">Longdesc</a></li>
    <li><a href="#disabled">Disabled</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>The common attributes are those that are used across a multitude of elements. 
   They are often attributes of critical importance to the most popular features 
   that Web browsers have. They are listed here under the same umbrella for a single 
   goal&#8212; when viewed together, comparing the use of these attributes with 
   their many applicable elements can expand our understanding of an attribute 
   itself and how/when authors tend to use it.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 1-1:</strong> 
   Common attribute usage</caption>
   <tr valign="bottom">
     <th>Attribute</th>
     <th>Frequency</th>
     <th rowspan="7">&#xA0;</th>
     <th>Attribute</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><code class="att">Name</code></td>
     <td class="num">3,220,308</td>
     <td><code class="att">Dir</code></td>
     <td class="num">136,997</td>
   </tr>
   <tr class="r2">
     <td><code class="att">Class</code></td>
     <td class="num">2,139,184</td>
     <td><code class="att">Accesskey</code></td>
     <td class="num">80,026</td>
   </tr>
   <tr class="r1">
     <td><code class="att">Style</code></td>
     <td class="num">1,878,916</td>
     <td><code class="att">Tabindex</code></td>
     <td class="num">49,081</td>
   </tr>
   <tr class="r2">
     <td><code class="att">Id</code></td>
     <td class="num">1,782,769</td>
     <td><code class="att">Longdesc</code></td>
     <td class="num">26,641</td>
   </tr>
   <tr class="r1">
     <td><code class="att">Title</code></td>
     <td class="num">1,010,147</td>
     <td><code class="att">Disabled</code></td>
     <td class="num">6,643</td>
   </tr>
   <tr class="r2">
     <td><code class="att">Lang</code></td>
     <td class="num">475,336</td>
     <td>&#xA0;</td>
     <td>&#xA0;</td>
   </tr>
</table>

<h2 id="name">The <code class="att">Name</code> attribute</h2>
<p>This attribute has a number of heterogenous uses&#8212;many of them very popular. 
   It comes as no surprise, then, that it is very widely used; 3,220,308 of MAMA&#39;s 
   URLs (91.77%) carry the attribute in some fashion. Comparing the usage of 
   <code class="att">Name</code> to the <code class="att">Id</code> attribute 
   (which shares at least part of its functionality) demonstrates clear differences. 
   <code class="att">Name</code> has especially deep coverage in its uses 
   with the <code class="elem">META</code>, <code class="elem">PARAM</code>, 
   <code class="elem">MAP</code>, and <code class="elem">FRAME</code> elements, 
   not to mention its often-paired use with Form fields. In many of these cases, 
   usage runs above 95%. There are also some noticeable uses with vendor-specific 
   attributes (such as <code class="att">Csaction</code>, 
   <code class="att">Menumachine</code>, and <code class="att">Cssequence</code>) 
   where penetration is almost 100%&#8212;a sure sign that a program is responsible 
   for the attribute creation; humans just are <strong>not</strong> that reliable!</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> 
   Elements using Name and relative attribute popularities<br />[Please also see the 
   <a href="elementsusingname-url.htm">full frequency table</a>.]</caption>
   <tr valign="bottom">
     <th>ELEMENT</th>
     <th>Frequency</th>
     <th>% of<br />Total<br />element<br />usage</th>
     <th rowspan="7">&#xA0;</th>
     <th>ELEMENT</th>
     <th>Frequency</th>
     <th>% of<br />Total<br />element<br />usage</th>
     <th rowspan="7">&#xA0;</th>
     <th>ELEMENT</th><th>Frequency</th>
     <th>% of<br />Total<br />element<br />usage</th>
   </tr>
   <tr class="r1">
     <td><code class="elem">META</code></td>
     <td class="num">2,710,638</td>
     <td class="num">82.73%</td>
     <td><code class="elem">MAP</code></td>
     <td class="num">456,648</td>
     <td class="num">99.72%</td>
     <td><code class="elem">TABLE</code></td>
     <td class="num">20,507</td>
     <td class="num">0.71%</td>
   </tr>
   <tr class="r2">
     <td><code class="elem">INPUT</code></td>
     <td class="num">990,058</td>
     <td class="num">98.17%</td>
     <td><code class="elem">FRAME</code></td>
     <td class="num">349,820</td>
     <td class="num">92.52%</td>
     <td><code class="elem">CSACTION</code></td>
     <td class="num">17,222</td>
     <td class="num">99.99%</td>
   </tr>
   <tr class="r1">
     <td><code class="elem">IMG</code></td>
     <td class="num">875,460</td>
     <td class="num">27.19%</td>
     <td><code class="elem">SELECT</code></td>
     <td class="num">275,323</td>
     <td class="num">96.48%</td>
     <td><code class="elem">DIV</code></td>
     <td class="num">17,018</td>
     <td class="num">0.68%</td>
   </tr>
   <tr class="r2">
     <td><code class="elem">PARAM</code></td>
     <td class="num">576,508</td>
     <td class="num">99.97%</td>
     <td><code class="elem">EMBED</code></td>
     <td class="num">138,809</td>
     <td class="num">25.44%</td>
     <td><code class="elem">OBJECT</code></td>
     <td class="num">9,284</td>
     <td class="num">1.74%</td>
   </tr>
   <tr class="r1">
     <td><code class="elem">FORM</code></td>
     <td class="num">570,643</td>
     <td class="num">54.83%</td>
     <td><code class="elem">IFRAME</code></td>
     <td class="num">87,763</td>
     <td class="num">39.45%</td>
     <td><code class="elem">SPAN</code></td>
     <td class="num">8,778</td>
     <td class="num">0.57%</td>
   </tr>
   <tr class="r2">
     <td><code class="elem">A</code></td>
     <td class="num">485,168</td>
     <td class="num">14.67%</td>
     <td><code class="elem">TEXTAREA</code></td>
     <td class="num">32,500</td>
     <td class="num">89.26%</td>
     <td><code class="elem">LAYER</code></td>
     <td class="num">7,583</td>
     <td class="num">28.83%</td>
   </tr>
</table>

<h3>The <code class="att">Name</code> attribute frequency</h3>
<p>The average quantity of the <code class="att">Name</code> attribute in MAMA&#39;s 
   URL set (when it was used) was 13.0 times. This average is a bit lower than 
   that of its sister attribute <code class="att">Id</code>, and this is also 
   reflected in the extreme use cases for <code class="att">Name</code>. As usual, 
   there is an extreme (some might say absurd, but I will not pass judgment) use 
   case (49,260 <code class="att">Name</code> attributes in one document), with 
   the next-nearest neighbor falling into a <strong>very</strong> distant second 
   place. The <a href="nameattrqtylist-url.htm">full frequency table</a> is begging 
   for your attention.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> 
   URLs with the most Name attributes</caption>
   <tr valign="bottom">
     <th>URL</th>
     <th>Name<br />quantity</th>
   </tr>
   <tr class="r1">
     <td><a href="http://genforum.genealogy.com/ny/all.html">http://genforum.genealogy.com/ny/all.html/</a></td>
     <td class="num">49,260</td>
   </tr>
   <tr class="r2">
     <td><a href="http://www.notisum.se/rnp/SLS/lag/19920300.htm">http://www.notisum.se/rnp/SLS/lag/19920300.htm/</a></td>
     <td class="num">4,614</td>
   </tr>
   <tr class="r1">
     <td>http://www.broekemasierbestrating.nl/Default.htm/ (URL no longer active)</td>
     <td class="num">598</td>
   </tr>
   <tr class="r2">
     <td><a href="http://www.BeerHatsOnline.com">http://www.BeerHatsOnline.com/</a></td>
     <td class="num">359</td>
   </tr>
</table>

<h3>The <code class="att">Name</code> attribute values</h3>
<p>The list of values for this attribute can be a bit confusing, as it is a 
   combined value list representing <strong>all</strong> types of <code class="att">Name</code> usage. 
   The top 15 slots are almost all from <code class="elem">META</code>, 
   and other distinct uses like <code class="elem">PARAM</code>, 
   Forms, <abbr title="Client-side image maps">CSIM</abbr> and 
   hyperlink anchors stand out with high representation as well.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-3:</strong> 
   Popular values for the Name attribute<br />[Please also see the 
        <a href="namelist-url.htm">full frequency table</a>.]</caption>
    <tr valign="bottom"><th>Value</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Value</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Value</th><th>Frequency</th></tr>
    <tr class="r1"><td><span class="string">keywords</span></td><td class="num">2,189,708</td><td><span class="string">quality</span></td><td class="num">504,666</td><td><span class="string">bgcolor</span></td><td class="num">228,085</td></tr>
    <tr class="r2"><td><span class="string">description</span></td><td class="num">2,100,858</td><td><span class="string">revisit-after</span></td><td class="num">475,765</td><td><span class="string">language</span></td><td class="num">215,683</td></tr>
    <tr class="r1"><td><span class="string">generator</span></td><td class="num">943,496</td><td><span class="string">copyright</span></td><td class="num">423,210</td><td><span class="string">top</span></td><td class="num">205,657</td></tr>
    <tr class="r2"><td><span class="string">robots</span></td><td class="num">937,844</td><td><span class="string">progid</span></td><td class="num">281,339</td><td><span class="string">submit</span></td><td class="num">192,095</td></tr>
    <tr class="r1"><td><span class="string">author</span></td><td class="num">818,017</td><td><span class="string">distribution</span></td><td class="num">236,615</td><td><span class="string">q</span></td><td class="num">182,848</td></tr>
    <tr class="r2"><td><span class="string">movie</span></td><td class="num">530,989</td><td><span class="string">rating</span></td><td class="num">230,894</td><td><span class="string">map</span></td><td class="num">176,556</td></tr>
</table>


<h2 id="class">The <code class="att">Class</code> attribute</h2>
<p>This attribute is used to identify document structures for use in CSS. Multiple 
   elements can carry the same class name, thereby allowing authors to create 
   arbitrary groupings to control presentation. In all, 2,139,184 of the URLs in MAMA 
   (60.96%) had at least one occurrence of the <code class="att">Class</code> 
   attribute. In addition, 98.52% of URLs that use <code class="att">Class</code>also use CSS 
   in some manner. The value for the <code class="att">Class</code> attribute is 
   a space-separated list of class names, but the typical usage is a single class 
   name&#8212;only 296,136 of the URLs using the attribute (13.84%) had any 
   <code class="att">Class</code> value carrying more than one class name.</p>

<h3>Elements using the <code class="att">Class</code> attribute</h3>
<p>By relative percentage, the <code class="att">Class</code> attribute shows a 
   strong usage tendency. Block- and Form-related elements have high usage but 
   inline/phrasal elements usually have <strong>much</strong> lower representation. 
   The only real exceptions to this are hyperlinks (<code class="elem">A</code>), 
   and the <code class="elem">SPAN</code> element (and also, inexplicably, the 
   <code class="elem">ABBR</code> element). In fact, the generic block and inline 
   elements (<code class="elem">DIV</code> and <code class="elem">SPAN</code> 
   respectively) are among the highest relative representation of any of the elements. 
   On the other hand, basic structural elements like <code class="elem">HTML</code> 
   and <code class="elem">BODY</code> have surprisingly low relative 
   <code class="att">Class</code> usage. Adobe GoLive&#39;s editor appears to generate 
   a <code class="att">Class</code> attribute for its custom <code class="elem">CSACTION</code> 
   element in every page it touches.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> 
   Elements using Class and relative attribute popularities<br />[Please also see the 
        <a href="elementsusingclass-url.htm">full frequency table</a>.]</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="8">&#xA0;</th>
        <th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th>
<th rowspan="8">&#xA0;</th>
        <th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">A</code></td><td class="num">1,111,526</td><td class="num">33.61%</td><td><code class="elem">IMG</code></td><td class="num">320,281</td><td class="num">9.95%</td>
        <td><code class="elem">H2</code></td><td class="num">93,530</td><td class="num">16.32%</td></tr>
    <tr class="r2"><td><code class="elem">TD</code></td><td class="num">1,082,979</td><td class="num">37.45%</td><td><code class="elem">LI</code></td><td class="num">228,422</td><td class="num">27.07%</td>
        <td><code class="elem">SELECT</code></td><td class="num">90,781</td><td class="num">31.81%</td></tr>
    <tr class="r1"><td><code class="elem">SPAN</code></td><td class="num">1,046,840</td><td class="num">68.51%</td><td><code class="elem">UL</code></td><td class="num">197,729</td><td class="num">24.41%</td>
        <td><code class="elem">H3</code></td><td class="num">62,411</td><td class="num">14.23%</td></tr>
    <tr class="r2"><td><code class="elem">DIV</code></td><td class="num">1,031,384</td><td class="num">41.26%</td><td><code class="elem">FONT</code></td><td class="num">165,186</td><td class="num">8.01%</td>
        <td><code class="elem">FORM</code></td><td class="num">44,247</td><td class="num">4.25%</td></tr>
    <tr class="r1"><td><code class="elem">P</code></td><td class="num">736,885</td><td class="num">27.26%</td><td><code class="elem">TR</code></td><td class="num">147,474</td><td class="num">5.10%</td>
        <td><code class="elem">HR</code></td><td class="num">37,689</td><td class="num">5.17%</td></tr>
    <tr class="r2"><td><code class="elem">TABLE</code></td><td class="num">580,281</td><td class="num">20.05%</td><td><code class="elem">BODY</code></td><td class="num">119,899</td><td class="num">3.47%</td>
        <td><code class="elem">B</code></td><td class="num">36,812</td><td class="num">2.04%</td></tr>
    <tr class="r1"><td><code class="elem">INPUT</code></td><td class="num">438,516</td><td class="num">43.48%</td><td><code class="elem">H1</code></td><td class="num">101,917</td><td class="num">13.25%</td>
        <td><code class="elem">STRONG</code></td><td class="num">31,615</td><td class="num">2.87%</td></tr>
</table>

<h3>The <code class="att">Class</code> attribute frequency</h3>
<p>Most pages were found to use this attribute, and did they ever! Some of the 
   extreme cases found employed <code class="att">Class</code> attribute in impressive 
   quantities. Because the attribute is used as an aggregation mechanism with disparate 
   elements, usage in high quantities is to be expected. The average number of 
   <code class="att">Class</code> attributes in a page (when they were used) was found 
   to be 48.4. The highest quantity of the attribute recorded by MAMA was 98,439 times, 
   but the live version at the time of writing is <strong>even higher</strong>: 102,627 
   times! It is a spreadsheet application&#8212;a gigantic grid of cells, each with a 
   <code class="att">Class</code> attribute&#8212;a sure way to inflate an attribute if ever 
   there was one. That single case has 4 times as many <code class="att">Class</code> 
   attributes as any other case found in MAMA. A <a href="classattrqtylist-url.htm">full 
   frequency table</a> of <code class="att">Class</code> attribute quantities is available.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-2:</strong> 
   URLs with the most Class attributes</caption>
    <tr valign="bottom"><th>URL</th><th>Class<br />Quantity</th></tr>
    <tr class="r1"><td><a href="http://spreadsheets.google.com/pub?key=pk_yT3zL-5Gp45a3UyKbMOA">http://spreadsheets.google.com/pub?key=pk_yT3zL-5Gp45a3UyKbMOA/</a></td>
        <td class="num">102,627</td></tr>
    <tr class="r2"><td><a href="http://web.archive.org/web/20081226175527/http://www.amphilsoc.org/library/mole/c/chargaff.htm">http://www.amphilsoc.org/library/mole/c/chargaff.htm/</a></td>
        <td class="num">25,417</td></tr>
    <tr class="r1"><td>http://rpo.library.utoronto.ca/poem/19.html/ (URL no longer active)</td>
        <td class="num">15,940</td></tr>
    <tr class="r2"><td><a href="http://nzvillage.com/newzealand/cms/front_content.php?idcat=164">http://nzvillage.com/newzealand/cms/front_content.php?idcat=164/</a></td>
        <td class="num">13,691</td></tr>
</table>

<h3>The <code class="att">Class</code> name values</h3>
<p>In Hickson&#39;s Google research, he takes a close look at <code class="att">Class</code> 
   attribute values. As the main editorial force behind WhatWG&#39;s and the W3C&#39;s HTML 5, 
   this was definitely useful and informative data to gather and examine. Hickson said 
   that one value of the <code class="att">Class</code> attribute was &quot;baffling&quot;&#8212;the 
   value of <span class="string">&quot;link&quot;</span>. In the URLs sampled from MAMA, the 
   class seems to be used often in relation to hyperlinks. The obvious question then 
   is why an author would not just use an <code class="elem">A</code> or 
   <code class="elem">AREA</code> element selector instead of creating a custom class. 
   Well, a small sampling of URLs using this class value showed that it was applied to 
   structures <strong>related</strong> to a hyperlink just as often as it was applied 
   to a direct hyperlink itself (like being applied to a <code class="elem">TD</code> 
   table cell encapsulating nothing but a link). In such cases, using a simple CSS 
   Element selector would not be sufficient. Yes, other methods could be used to reference 
   it (and probably are&#8212;CSS selectors are not yet tracked in MAMA), but this method at 
   least is widely used.</p>

<p>The frequency table of <code class="att">Class</code> attribute values compares 
   favorably to Hickson&#39;s Google research. In all, 15 of the top 20 values from MAMA&#39;s list 
   are in the top 20 from Google&#39;s list, and the top 2 values (<span class="string">&quot;footer&quot;</span> 
   and <span class="string">&quot;menu&quot;</span>) are the same order in both. The most 
   popular value <span class="string">&quot;footer&quot;</span> is twice as popular as its 
   natural companion <span class="string">&quot;header&quot;</span>; so, could 
   one say that authors prefer page footers to page headers in their designs? One big 
   noticeable trend from the <code class="att">Class</code> value list: there are a 
   high number of class names of the form: <code class="regexp">/style\d+/</code>. 
   The popularity of each class value decreases as the integer value at the end 
   increases. MAMA detected values like this going at least up to 
   <span class="string">&quot;style117&quot;</span> and probably higher. A high (but untested) 
   correlation was noticed between class names of this type and the use of Macromedia 
   Dreamweaver scripting library functions. As Macromedia Dreamweaver is not always 
   the easiest editor to detect, this correlation will remain a theory.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-3:</strong> 
   Popular values of the Class attribute<br />[Please 
   also see the <a href="classlist-url.htm">full frequency table</a>.]</caption>
    <tr valign="bottom"><th>Value</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Value</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Value</th><th>Frequency</th></tr>
    <tr class="r1"><td><span class="string">footer</span></td><td class="num">179,528</td><td><span class="string">style2</span></td><td class="num">89,851</td><td><span class="string">nav</span></td><td class="num">68,634</td></tr>
    <tr class="r2"><td><span class="string">menu</span></td><td class="num">146,673</td><td><span class="string">header</span></td><td class="num">89,274</td><td><span class="string">clear</span></td><td class="num">68,571</td></tr>
    <tr class="r1"><td><span class="string">style1</span></td><td class="num">138,308</td><td><span class="string">copyright</span></td><td class="num">86,979</td><td><span class="string">search</span></td><td class="num">59,802</td></tr>
    <tr class="r2"><td><span class="string">msonormal</span></td><td class="num">123,374</td><td><span class="string">button</span></td><td class="num">81,503</td><td><span class="string">style4</span></td><td class="num">56,032</td></tr>
    <tr class="r1"><td><span class="string">text</span></td><td class="num">122,911</td><td><span class="string">main</span></td><td class="num">69,620</td><td><span class="string">logo</span></td><td class="num">48,831</td></tr>
    <tr class="r2"><td><span class="string">content</span></td><td class="num">113,951</td><td><span class="string">style3</span></td><td class="num">69,349</td><td><span class="string">body</span></td><td class="num">48,052</td></tr>
    <tr class="r1"><td><span class="string">title</span></td><td class="num">91,957</td><td><span class="string">small</span></td><td class="num">68,995</td><td><span class="string">left</span></td><td class="num">47,822</td></tr>
</table>

<h2 id="style">The <code class="att">Style</code> attribute</h2>
<p>This attribute is used to specify CSS at ground-level&#8212;&quot;in the trenches&quot; so 
   to speak. Using CSS in this way negates many of its broad control advantages; 
   styles applied only affect the current element and its descendents. In all, 1,878,916 
   of MAMA&#39;s URLs (53.54%) use it in some fashion. It is used most often with the 
   generic <code class="elem">DIV</code> and <code class="elem">SPAN</code> 
   elements - to be expected since these elements don&#39;t have any special intrinsic 
   rendering behaviors on their own. There is a noticeable authoring fondness for 
   using <code class="att">Style</code> with Form-related elements, and Table-related 
   elements (although there are some exceptions with the latter, like the 
   <code class="elem">TR</code> element). Most pages use <code class="att">Style</code> 
   with Inline/Phrasal markup elements sparingly, while its popularity with most block 
   elements fares much better.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> 
   Elements using Style and relative attribute popularities<br />[Please also see the 
   <a href="elementsusingstyle-url.htm">full frequency table</a>.]</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="8">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="8">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">DIV</code></td><td class="num">884,825</td><td class="num">35.40%</td><td><code class="elem">INPUT</code></td><td class="num">270,155</td><td class="num">26.79%</td>
        <td><code class="elem">H1</code></td><td class="num">48,767</td><td class="num">6.34%</td></tr>
    <tr class="r2"><td><code class="elem">SPAN</code></td><td class="num">637,422</td><td class="num">41.72%</td><td><code class="elem">BODY</code></td><td class="num">217,890</td><td class="num">6.31%</td>
        <td><code class="elem">LI</code></td><td class="num">45,570</td><td class="num">5.40%</td></tr>
    <tr class="r1"><td><code class="elem">TD</code></td><td class="num">616,249</td><td class="num">21.31%</td><td><code class="elem">FONT</code></td><td class="num">171,646</td><td class="num">8.33%</td>
        <td><code class="elem">IFRAME</code></td><td class="num">44,729</td><td class="num">20.11%</td></tr>
    <tr class="r2"><td><code class="elem">TABLE</code></td><td class="num">586,223</td><td class="num">20.26%</td><td><code class="elem">FORM</code></td><td class="num">126,233</td><td class="num">12.13%</td>
        <td><code class="elem">BR</code></td><td class="num">44,337</td><td class="num">1.46%</td></tr>
    <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">464,347</td><td class="num">14.42%</td><td><code class="elem">SELECT</code></td><td class="num">77,080</td><td class="num">27.01%</td>
        <td><code class="elem">MARQUEE</code></td><td class="num">41,076</td><td class="num">29.27%</td></tr>
    <tr class="r2"><td><code class="elem">A</code></td><td class="num">462,297</td><td class="num">13.98%</td><td><code class="elem">TR</code></td><td class="num">68,615</td><td class="num">2.37%</td>
        <td><code class="elem">B</code></td><td class="num">35,819</td><td class="num">1.98%</td></tr>
    <tr class="r1"><td><code class="elem">P</code></td><td class="num">434,288</td><td class="num">16.07%</td><td><code class="elem">UL</code></td><td class="num">52,927</td><td class="num">6.53%</td>
        <td><code class="elem">H2</code></td><td class="num">33,929</td><td class="num">5.92%</td></tr>
</table>

<h2 id="id">The <code class="att">Id</code> attribute</h2>
<p>This attribute is used to create a document-wide unique identifier for an element. 
   The <code class="att">Id</code> attribute was originally meant to supercede the 
   use of the <code class="att">Name</code> attribute, but with 1,782,769 of MAMA&#39;s 
   URLs (50.80%) using <code class="att">Id</code> and 3,220,308 using 
   <code class="att">Name</code> (91.77%), it is a transition that seems to be 
   still very much &quot;in progress&quot;. <code class="elem">DIV</code> uses the <code class="att">Id</code> 
   attribute more than twice as often as its nearest neighbors in the frequency 
   table, <code class="elem">TABLE</code> and <code class="elem">IMG</code>. 
   <code class="elem">DIV</code> usage of <code class="att">Id</code> is also 5 
   times as popular as its related cousin <code class="elem">SPAN</code>. 
   <code class="elem">IFRAME</code> and Form-related elements have rather high 
   usage rates. <code class="elem">UL</code> representation is also quite high, 
   but there doesn&#39;t seem to be any obvious justification for that outcome. 
   Netscape 4.x&#39;s proprietary <code class="att">LAYER</code> and <code class="att">ILAYER</code> 
   elements each have over 50% relative usage of <code class="att">Id</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> 
   Elements using Id and relative attribute popularities<br />[Please also see the 
   <a href="elementsusingid-url.htm">full frequency table</a>.]</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="7">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="7">&#xA0;</th>
        <th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">DIV</code></td><td class="num">1,085,482</td><td class="num">43.42%</td><td><code class="elem">TD</code></td><td class="num">230,312</td><td class="num">7.96%</td>
        <td><code class="elem">P</code></td><td class="num">81,128</td><td class="num">3.00%</td></tr>
    <tr class="r2"><td><code class="elem">TABLE</code></td><td class="num">482,760</td><td class="num">16.68%</td><td><code class="elem">UL</code></td><td class="num">192,453</td><td class="num">23.76%</td>
        <td><code class="elem">SELECT</code></td><td class="num">68,087</td><td class="num">23.86%</td></tr>
    <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">471,807</td><td class="num">14.65%</td><td><code class="elem">SPAN</code></td><td class="num">180,553</td><td class="num">11.82%</td>
        <td><code class="elem">MAP</code></td><td class="num">58,141</td><td class="num">12.70%</td></tr>
    <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">372,905</td><td class="num">36.97%</td><td><code class="elem">OBJECT</code></td><td class="num">165,628</td><td class="num">31.05%</td>
        <td><code class="elem">IFRAME</code></td><td class="num">57,001</td><td class="num">25.62%</td></tr>
    <tr class="r1"><td><code class="elem">A</code></td><td class="num">319,619</td><td class="num">9.66%</td><td><code class="elem">LI</code></td><td class="num">91,022</td><td class="num">10.79%</td>
        <td><code class="elem">H1</code></td><td class="num">41,281</td><td class="num">5.37%</td></tr>
    <tr class="r2"><td><code class="elem">FORM</code></td><td class="num">266,886</td><td class="num">25.64%</td><td><code class="elem">BODY</code></td><td class="num">90,883</td><td class="num">2.63%</td>
        <td><code class="elem">TR</code></td><td class="num">33,053</td><td class="num">1.14%</td></tr>
</table>

<h3>The <code class="att">Id</code> attribute frequency</h3>
<p>About half of the pages in MAMA used the <code class="att">Id</code> attribute. 
   Pages that used the attribute averaged about 15.8 uses per document. As with 
   many other cases in MAMA, the extreme use case was unique&#8212;it used 3 times as 
   many <code class="att">Id</code> attributes as the next-nearest URL. A 
   <a href="idattrqtylist-url.htm">full frequency table</a> of <code class="att">Id</code> 
   quantities is ready for any curious readers.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> 
   URLs with the most Id attributes</caption>
    <tr valign="bottom"><th>URL</th><th>Id<br />Quantity</th></tr>
    <tr class="r1"><td><a href="http://www.gibson.com/en-us/Divisions/Gibson%20Original/Gibson%20Mandolins/">http://www.gibson.com/en-us/Divisions/Gibson%20Original/Gibson%20Mandolins/</a></td>
        <td class="num">12,084</td></tr>
    <tr class="r2"><td><a href="http://web.archive.org/web/20090615022101/http://compas.ifrance.com/compas/">http://compas.ifrance.com/compas/</a></td>
        <td class="num">4,452</td></tr>
    <tr class="r1"><td><a href="http://web.archive.org/web/20080515213741/http://cabokarate.spaces.live.com/">http://cabokarate.spaces.live.com/</a></td>
        <td class="num">3,519</td></tr>
    <tr class="r2"><td><a href="http://www.townhall.com/columnists/">http://www.townhall.com/columnists/</a></td>
        <td class="num">1,984</td></tr>
</table>

<h3>The <code class="att">Id</code> attribute values</h3>
<p>At first glance, it does not seem like examining these values would be interesting. 
   For an attribute that is supposed to contain unique values, the chances of value 
   overlap between URLs should be much lower than with many other attributes, right? 
   Not so fast. The really interesting thing to note is there is considerable overlap 
   in <code class="att">Id</code> and <code class="att">Class</code> attribute values. 
   <span class="string">&quot;Footer&quot;</span> is the most popular value for each 
   attribute, but many of the most popular values for each attribute hold different 
   relative positions in the value lists. #2 on the <code class="att">Id</code> list 
   <span class="string">&quot;Content&quot;</span> is #6 on the <code class="att">Class</code> 
   list, #3 on the <code class="att">Id</code> list is #9 on the <code class="att">Class</code> 
   list, and so on. Hickson&#39;s Google study only looked at <code class="att">Class</code> 
   atcode class=tribute values, but perhaps should have looked at <code class="att">Id</code> as well. 
   It is apparent from the top values in both <code class="att">Class</code> and 
   <code class="att">Id</code> rankings that authors continually have to work around 
   unfilled semantic niches in the standards.</p>

<p class="note"><strong>Note:</strong> There is an interesting discrepancy between 
   HTML and CSS treatment of the <code class="att">Id</code> value. In HTML, an 
   <code class="att">Id</code> value <strong>must</strong> begin with a letter 
   ([A-Za-z]), but in CSS there is no such restriction in referencing an 
   <code class="att">Id</code> value. In theory, the HTML constraint should limit 
   <code class="att">Id</code> values to the more limited HTML form, but browsers 
   are usually more forgiving and allow the CSS interpretation of an <code class="att">Id</code> 
   value, so in &quot;the wild&quot; there are many cases where <code class="att">Id</code> 
   values begin with a different character. In MAMA, 135,994 of the URLs using 
   <code class="att">Id</code> (7.63%) had at least one value that began with a 
   character other than [A-Za-z].</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-3:</strong> 
   Id attribute values<br />[Please also see the <a href="idlist-url.htm">full frequency table</a>.]</caption>
    <tr valign="bottom"><th>Value</th><th>Frequency</th><th rowspan="7">&#xA0;</th>
        <th>Value</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Value</th><th>Frequency</th></tr>
    <tr class="r1"><td><span class="string">footer</span></td><td class="num">288,061</td><td><span class="string">table1</span></td><td class="num">101,677</td><td><span class="string">wrapper</span></td><td class="num">66,730</td></tr>
    <tr class="r2"><td><span class="string">content</span></td><td class="num">228,661</td><td><span class="string">menu</span></td><td class="num">96,161</td><td><span class="string">top</span></td><td class="num">66,615</td></tr>
    <tr class="r1"><td><span class="string">header</span></td><td class="num">223,726</td><td><span class="string">layer1</span></td><td class="num">93,920</td><td><span class="string">table2</span></td><td class="num">57,934</td></tr>
    <tr class="r2"><td><span class="string">logo</span></td><td class="num">121,351</td><td><span class="string">autonumber1</span></td><td class="num">77,350</td><td><span class="string">layer2</span></td><td class="num">56,823</td></tr>
    <tr class="r1"><td><span class="string">container</span></td><td class="num">119,877</td><td><span class="string">search</span></td><td class="num">74,887</td><td><span class="string">sidebar</span></td><td class="num">52,416</td></tr>
    <tr class="r2"><td><span class="string">main</span></td><td class="num">106,327</td><td><span class="string">nav</span></td><td class="num">72,057</td><td><span class="string">image1</span></td><td class="num">48,922</td></tr>
</table>

<h3>Some <code class="att">Id</code> value trends</h3>
<p>The full list of <code class="att">Id</code> attribute values also points out 
   one other interesting tendency: The top 100 consists of repeating <code class="att">Id</code> 
   archetypes where the value only varies by the addition of numeric counters. This 
   obviously indicates cases where more than one of a single type is used/expected, 
   such as with <span class="string">&quot;table&quot;</span>, <span class="string">&quot;image&quot;</span>, 
   or <span class="string">&quot;menu&quot;</span>. Of the top 100 <code class="att">Id</code> 
   values, over half of the values consist of variations on just 7 of the <code class="att">Id</code> 
   value substrings shown in the table below (Fig 5-4). These patterns are used over 
   and over and do not stop with the top 100. There are many other values that also 
   show templated trends, and substring values like <span class="string">&quot;table&quot;</span> 
   aren&#39;t used just 10 times in the entire value list&#8212;that is just the number of 
   times they are used in the top 100 values. In actuality, it is used 95 times in 
   the <code class="att">Id</code> value list (and probably more, given an exhaustive 
   complete list of <code class="att">Id</code> values).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-4:</strong> 
   Popularity of Id attribute templates in Top 100 values</caption>
    <tr valign="bottom"><th>Value<br />Substring</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Value<br />Substring</th><th>Frequency</th></tr>
    <tr class="r1"><td><span class="string">layer</span></td><td class="num">10/100</td><td><span class="string">nav</span></td><td class="num">7/100</td></tr>
    <tr class="r2"><td><span class="string">table</span></td><td class="num">10/100</td><td><span class="string">autonumber</span></td><td class="num">6/100</td></tr>
    <tr class="r1"><td><span class="string">image</span></td><td class="num">7/100</td><td><span class="string">main</span></td><td class="num">4/100</td></tr>
    <tr class="r2"><td><span class="string">menu</span></td><td class="num">7/100</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="title">The <code class="att">Title</code> attribute</h2>
<p>This attribute is used to set &quot;advisory information&quot; about an element. In 
   practical terms, this means authors can specify any value they want. It was 
   found in 1,010,147 of MAMA&#39;s URLs (28.79%). It is most popular with hyperlinks 
   (<code class="elem">A</code> and <code class="elem">AREA</code>), as well as 
   the <code class="elem">IMG</code> and <code class="elem">LINK</code> elements. 
   Usage on <code class="elem">TH</code> elements eclipses the relative usage by 
   <code class="elem">TD</code> elements nearly 4:1. A few elements have 
   extraordinarily high usage rates: <code class="elem">ABBR</code> and 
   <code class="elem">ACRONYM</code> - probably because HTML 4 goes out of its 
   way to define special <code class="att">Title</code> behavior with these 
   elements.</p>

<p>At the request of a co-worker, one extra <code class="att">Title</code>-related 
   feature was tracked by MAMA: Newlines in the source code. Historically, 
   these have caused various problems in some browsers and it was hoped that 
   it could be useful in a testing capacity at some point down the line to track 
   them. Of the pages that used the <code class="att">Title</code> attribute, 
   21,759 (2.15%) had at least 1 embedded Newline.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> 
   Elements using Title and relative attribute popularities<br />[Please also see the 
   <a href="elementsusingtitle-url.htm">full frequency table</a>.]</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="8">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="8">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">A</code></td><td class="num">658,820</td><td class="num">19.92%</td><td><code class="elem">FRAME</code></td><td class="num">17,257</td><td class="num">4.56%</td>
        <td><code class="elem">IFRAME</code></td><td class="num">5,887</td><td class="num">2.65%</td></tr>
    <tr class="r2"><td><code class="elem">IMG</code></td><td class="num">367,132</td><td class="num">11.40%</td><td><code class="elem">TD</code></td><td class="num">16,717</td><td class="num">0.58%</td>
        <td><code class="elem">TABLE</code></td><td class="num">5,048</td><td class="num">0.17%</td></tr>
    <tr class="r1"><td><code class="elem">LINK</code></td><td class="num">234,355</td><td class="num">11.61%</td><td><code class="elem">DIV</code></td><td class="num">16,191</td><td class="num">0.65%</td>
        <td><code class="elem">H1</code></td><td class="num">3,381</td><td class="num">0.44%</td></tr>
    <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">72,471</td><td class="num">7.19%</td><td><code class="elem">ABBR</code></td><td class="num">14,455</td><td class="num">97.00%</td>
        <td><code class="elem">TH</code></td><td class="num">3,293</td><td class="num">2.22%</td></tr>
    <tr class="r1"><td><code class="elem">AREA</code></td><td class="num">61,137</td><td class="num">13.49%</td><td><code class="elem">LABEL</code></td><td class="num">14,443</td><td class="num">9.05%</td>
        <td><code class="elem">LI</code></td><td class="num">3,163</td><td class="num">0.37%</td></tr>
    <tr class="r2"><td><code class="elem">OBJECT</code></td><td class="num">23,163</td><td class="num">4.34%</td><td><code class="elem">ACRONYM</code></td><td class="num">10,329</td><td class="num">94.05%</td>
        <td><code class="elem">FORM</code></td><td class="num">2,864</td><td class="num">0.28%</td></tr>
    <tr class="r1"><td><code class="elem">SPAN</code></td><td class="num">17,942</td><td class="num">1.17%</td><td><code class="elem">STYLE</code></td><td class="num">7,236</td><td class="num">0.55%</td>
        <td><code class="elem">FONT</code></td><td class="num">2,819</td><td class="num">0.14%</td></tr>
</table>

<h2 id="lang">The <code class="att">Lang</code> attribute</h2>
<p>This attribute indicates the base language of the content. It takes as a value 
   <a href="http://www.ietf.org/rfc/rfc1766.txt">RFC 1766</a> language codes. In 
   practice, some values in the <a href="langlist-url.htm">full frequency table</a> 
   stray from this ideal&#8212;they occasionally include encodings such as 
   <span class="string">&quot;utf-8&quot;</span> and other types of &quot;languages&quot; (such as 
   <span class="string">&quot;javascript1.2&quot;</span>). The relative usage popularity 
   offers a few head-scratchers: <code class="elem">SPAN</code> is a much more 
   popular user of <code class="att">Lang</code> than <code class="elem">DIV</code>. 
   <code class="elem">HTML</code> is also quite popular&#8212;considerably higher than 
   application to the <code class="elem">BODY</code> element. Both 
   <code class="elem">ACRONYM</code> and <code class="elem">ABBR</code> usages 
   also stand out with especially high representation.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> 
   Elements using Lang and relative attribute popularities</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="6">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="6">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">HTML</code></td><td class="num">314,584</td><td class="num">9.11%</td><td><code class="elem">FONT</code></td><td class="num">2,423</td><td class="num">0.12%</td>
        <td><code class="elem">HEAD</code></td><td class="num">978</td><td class="num">0.03%</td></tr>
    <tr class="r2"><td><code class="elem">SPAN</code></td><td class="num">87,675</td><td class="num">5.74%</td><td><code class="elem">DIV</code></td><td class="num">2,316</td><td class="num">0.09%</td>
        <td><code class="elem">ACRONYM</code></td><td class="num">770</td><td class="num">7.01%</td></tr>
    <tr class="r1"><td><code class="elem">META</code></td><td class="num">55,003</td><td class="num">1.68%</td><td><code class="elem">LINK</code></td><td class="num">1,552</td><td class="num">0.08%</td>
        <td><code class="elem">TITLE</code></td><td class="num">626</td><td class="num">0.02%</td></tr>
    <tr class="r2"><td><code class="elem">BODY</code></td><td class="num">38,157</td><td class="num">1.11%</td><td><code class="elem">P</code></td><td class="num">1,390</td><td class="num">0.05%</td>
        <td><code class="elem">FORM</code></td><td class="num">625</td><td class="num">0.06%</td></tr>
    <tr class="r1"><td><code class="elem">A</code></td><td class="num">3,830</td><td class="num">0.12%</td><td><code class="elem">SCRIPT</code></td><td class="num">1,231</td><td class="num">0.05%</td>
        <td><code class="elem">ABBR</code></td><td class="num">593</td><td class="num">3.98%</td></tr>
</table>

<h2 id="dir">The <code class="att">Dir</code> attribute</h2>
<p>This attribute is meant to give the &quot;base direction of directionally neutral 
   text&quot; for an element&#39;s content and attribute values. There are two acceptable 
   values, <span class="string">&quot;ltr&quot;</span> (left-to-right) and 
   <span class="string">&quot;rtl&quot;</span> (yep&#8212;right-to-left). The attribute was 
   detected at least once in 136,997 of the URLs MAMA analyzed (only 3.90%). 
   The <a href="dirlist-url.htm">complete list</a> of values detected for this 
   attribute show some other uses not defined by HTML, aside from the usual typos 
   and other uninteresting noise. One use is apparently to define a base directory 
   (&quot;dir&quot;) associated with the element to which it is applied. However, these other usages 
   are absolutely trampled by the two main accepted values in terms of popularity. 
   The least popular of the two, <span class="string">&quot;rtl&quot;</span> occurs more 
   than 100 times as much as the next nearest non-HTML value. The left-to-right 
   value <span class="string">&quot;ltr&quot;</span> is more than 10 times as popular as 
   <span class="string">&quot;rtl&quot;</span>. Authors have a clear preference for using 
   this attribute on the <code class="elem">TABLE</code> and 
   <code class="elem">HTML</code> elements over others.</p>

<h3>Dir attribute value popularity</h3>
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-1:</strong> 
   Dir attribute values</caption>
    <tr valign="bottom"><th>Value</th><th>Frequency</th></tr>
    <tr class="r1"><td><span class="string">ltr</span></td><td class="num">129,893</td></tr>
    <tr class="r2"><td><span class="string">rtl</span></td><td class="num">11,321</td></tr>
</table>

<h3>Elements using the Dir attribute</h3>
<p>The <code class="elem">TABLE</code> and <code class="elem">HTML</code> elements 
   show the strongest <code class="att">Dir</code> attribute tendency, with the 
   <code class="elem">BLOCKQUOTE</code> element actually having the highest relative 
   usage. The <code class="elem">TABLE</code> and <code class="elem">HTML</code> 
   usages are understandable but <code class="elem">BLOCKQUOTE</code> may not be 
   as obvious. A moment&#39;s reflection reveals why&#8212;to maintain the full integrity 
   of a quotation, the natural language and internal direction of the content must 
   be preserved.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-2:</strong> 
   Elements using Dir and relative attribute popularities</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="8">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">TABLE</code></td><td class="num">60,922</td><td class="num">2.10%</td><td><code class="elem">BLOCKQUOTE</code></td><td class="num">4,919</td><td class="num">2.60%</td></tr>
    <tr class="r2"><td><code class="elem">HTML</code></td><td class="num">47,011</td><td class="num">1.36%</td><td><code class="elem">INPUT</code></td><td class="num">1,892</td><td class="num">0.19%</td></tr>
    <tr class="r1"><td><code class="elem">P</code></td><td class="num">14,028</td><td class="num">0.52%</td><td><code class="elem">UL</code></td><td class="num">720</td><td class="num">0.09%</td></tr>
    <tr class="r2"><td><code class="elem">BODY</code></td><td class="num">8,474</td><td class="num">0.25%</td><td><code class="elem">A</code></td><td class="num">651</td><td class="num">0.02%</td></tr>
    <tr class="r1"><td><code class="elem">TD</code></td><td class="num">7,535</td><td class="num">0.26%</td><td><code class="elem">SELECT</code></td><td class="num">643</td><td class="num">0.23%</td></tr>
    <tr class="r2"><td><code class="elem">SPAN</code></td><td class="num">7,085</td><td class="num">0.46%</td><td><code class="elem">FONT</code></td><td class="num">517</td><td class="num">0.03%</td></tr>
    <tr class="r1"><td><code class="elem">DIV</code></td><td class="num">5,592</td><td class="num">0.22%</td><td><code class="elem">H1</code></td><td class="num">505</td><td class="num">0.07%</td></tr>
</table>

<h2 id="accesskey">The <code class="att">Accesskey</code> attribute</h2>
<p>An accesskey is supposed to be a single character used to give focus to an 
   element. In all, 80,026 URLs had at least one element carrying an 
   <code class="att">Accesskey</code> attribute, but the two most popular elements 
   that use it are <code class="elem">A</code> (68.57%) and <code class="elem">INPUT</code> 
   (44.36%). Three other elements also used this attribute on a regular basis. The 
   <a href="accesskeylist-url.htm">full frequency table</a> of values shows that 
   authors do well at restricting their values to a single character. Curiously, 
   the most popular character used is &quot;s&quot; (with no obvious rationale to its 
   popularity). After that, numbers dominate the list. Ten of the top 15 
   <code class="att">Accesskey</code> values are the digits &quot;0&quot;-&quot;9&quot; (with &quot;1&quot; 
   being most popular). Looking beyond the numbers, we find that the entire English 
   alphabet ranks next before anything else. The top 36 spots consist of the 
   digits &quot;0&quot;-&quot;9&quot; and the English alphabet &quot;a&quot;-&quot;z&quot; (MAMA ignored case-sensitivity 
   when generating this frequency table). The <code class="elem">INPUT</code> and 
   <code class="elem">LABEL</code> elements seem to have a greater affinity for 
   the attribute than other elements, and <code class="elem">A</code> enjoys a 
   much higher relative usage rate than the analogous <code class="elem">AREA</code> element.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-1:</strong> 
   Elements using Accesskey and relative attribute popularities</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">A</code></td><td class="num">54,876</td><td class="num">1.66%</td></tr>
    <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">35,501</td><td class="num">3.52%</td></tr>
    <tr class="r1"><td><code class="elem">LABEL</code></td><td class="num">5,330</td><td class="num">3.34%</td></tr>
    <tr class="r2"><td><code class="elem">SELECT</code></td><td class="num">601</td><td class="num">0.21%</td></tr>
    <tr class="r1"><td><code class="elem">AREA</code></td><td class="num">518</td><td class="num">0.11%</td></tr>
</table>

<h2 id="tabindex">The <code class="att">Tabindex</code> attribute</h2>
<p>This attribute gives an explicit position in the tabbing order for the current 
   page. In MAMA, 49,081 URLs use the <code class="att">Tabindex</code> attribute 
   at least once&#8212;usage on the <code class="elem">INPUT</code> element represents 
   over 70% of that total, while its next most-popular use on the <code class="elem">A</code> 
   element trails far behind at just over 30%. HTML 4 defines only a narrow set of 
   elements that can use <code class="att">Tabindex</code>, but in common usage 
   some elements that aren&#39;t in the HTML 4 allowed set are more popular than some 
   of those that are&#8212;for example, <code class="elem">IMG</code> and <code class="elem">DIV</code> 
   usages are more popular than <code class="elem">OBJECT</code> and <code class="elem">BUTTON</code>. 
   A look at element-relative usage shows that authors prefer to use this 
   attribute with form widgets (<code class="elem">INPUT</code>, <code class="elem">SELECT</code>, 
   <code class="elem">TEXTAREA</code> and <code class="elem">BUTTON</code>) over other elements.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-1:</strong> 
   Elements using Tabindex and relative attribute popularities</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="6">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="6">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">INPUT</code></td><td class="num">34,725</td><td class="num">3.44%</td><td><code class="elem">DIV</code></td><td class="num">623</td><td class="num">0.03%</td>
        <td><code class="elem">LI</code></td><td class="num">308</td><td class="num">0.04%</td></tr>
    <tr class="r2"><td><code class="elem">A</code></td><td class="num">14,898</td><td class="num">0.45%</td><td><code class="elem">OBJECT</code></td><td class="num">523</td><td class="num">0.10%</td>
        <td><code class="elem">TABLE</code></td><td class="num">279</td><td class="num">0.01%</td></tr>
    <tr class="r1"><td><code class="elem">SELECT</code></td><td class="num">5,282</td><td class="num">1.85%</td><td><code class="elem">BUTTON</code></td><td class="num">464</td><td class="num">4.05%</td>
        <td><code class="elem">SPAN</code></td><td class="num">244</td><td class="num">0.02%</td></tr>
    <tr class="r2"><td><code class="elem">TEXTAREA</code></td><td class="num">1,570</td><td class="num">4.31%</td><td><code class="elem">AREA</code></td><td class="num">384</td><td class="num">0.09%</td>
        <td><code class="elem">LABEL</code></td><td class="num">166</td><td class="num">0.10%</td></tr>
    <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">1,376</td><td class="num">0.04%</td><td><code class="elem">TD</code></td><td class="num">384</td><td class="num">0.01%</td>
        <td><code class="elem">IFRAME</code></td><td class="num">96</td><td class="num">0.04%</td></tr>
</table>

<h2 id="longdesc">The <code class="att">Longdesc</code> attribute</h2>
<p>This attribute is a URL that should provide a &quot;longer description&quot; of the resource. 
   In MAMA, 26,641 URLs used <code class="att">Longdesc</code> in some manner. Only 4 elements 
   were found to use this attribute in noticeable quantities: <code class="elem">IMG</code>,
   <code class="elem">FRAME</code>, <code class="elem">IFRAME</code> and 
   <code class="elem">INPUT</code>, with the <code class="elem">IMG</code> usage occurring 
   far more than any other type (95.39% of all URLs with <code class="att">Longdesc</code> 
   usage). All the values here <strong>should</strong> be absolute or relative URLs, but 
   the reality is a bit different. The <a href="longdesclist-url.htm">full frequency 
   table</a> for this attribute at first seems rather unremarkable. All of the 
   frequencies are quite low, indicating the unique nature of the attribute values. 
   What also stands out is how many of the values are definitely <strong>not</strong> 
   URLs, such as:</p>

<p class="note">&quot;boy hunched alone with hands in arms&quot;</p>

<p>A rough estimate of the number of non-URL <code class="att">Longdesc</code> 
   attribute values is just over 1/3.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 11-1:</strong> 
   Elements using Longdesc and relative attribute popularities</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">25,413</td><td class="num">0.79%</td></tr>
    <tr class="r2"><td><code class="elem">FRAME</code></td><td class="num">643</td><td class="num">0.17%</td></tr>
    <tr class="r1"><td><code class="elem">IFRAME</code></td><td class="num">362</td><td class="num">0.16%</td></tr>
    <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">251</td><td class="num">0.03%</td></tr>
</table>

<h2 id="disabled">The <code class="att">Disabled</code> attribute</h2>
<p>This attribute is not very widely used&#8212;only 6,643 URLs were detected to carry 
   the attribute in any capacity. The <code class="elem">INPUT</code>, 
   <code class="elem">SELECT</code> and <code class="elem">OPTION</code> elements 
   are where it is used most, but there are some other oddities in the list below; 
   how exactly does a <code class="elem">SPAN</code> element set to 
   <code class="att">Disabled</code> react any differently than a <code class="elem">SPAN</code> 
   that doesn&#39;t carry the attribute?</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 12-1:</strong> 
   Elements using Disabled and relative attribute popularities</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th><th rowspan="6">&#xA0;</th><th>ELEMENT</th><th>Frequency</th><th>% of<br />Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">INPUT</code></td><td class="num">2,688</td><td class="num">0.27%</td><td><code class="elem">SPAN</code></td><td class="num">106</td><td class="num">0.01%</td></tr>
    <tr class="r2"><td><code class="elem">SELECT</code></td><td class="num">1515</td><td class="num">0.53%</td><td><code class="elem">TEXTAREA</code></td><td class="num">79</td><td class="num">0.22%</td></tr>
    <tr class="r1"><td><code class="elem">OPTION</code></td><td class="num">1325</td><td class="num">0.47%</td><td><code class="elem">STYLE</code></td><td class="num">74</td><td class="num">0.01%</td></tr>
    <tr class="r2"><td><code class="elem">A</code></td><td class="num">556</td><td class="num">0.02%</td><td><code class="elem">IMG</code></td><td class="num">63</td><td class="num">0.00%</td></tr>
    <tr class="r1"><td><code class="elem">LINK</code></td><td class="num">355</td><td class="num">0.02%</td><td><code class="elem">BUTTON</code></td><td class="num">59</td><td class="num">0.52%</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-code-comments/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Code comments</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Event-handler attributes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
