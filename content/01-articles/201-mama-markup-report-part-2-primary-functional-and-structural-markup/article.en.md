Title: MAMA: Markup report, part 2: Primary functional and structural markup
----
Date: 2008-11-14 13:50:21
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
<p>This time we will look at some of the basic document structural elements. These
   are the elements that form the backbone of most documents. Some of the topics 
   mentioned this week carry so much detail (such as the child elements of the 
   <code class="elem">HEAD</code> element) that we can only give them brief lip 
   service here. For a deeper look at these areas and more, the following MAMA 
   article topics are also available this week:</p>

<ul>
    <li><a href="http://dev.opera.com/articles/view/mama-frames/">Frames</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-head-structure/">HEAD structure</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-common-attributes/">Common attributes</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/">Event-handler attributes</a></li>
</ul>

<p>Some of the topics involved with the <code class="elem">HEAD</code> element, 
   such as CSS (the <code class="elem">LINK</code> and <code class="elem">STYLE</code> 
   elements), and script (the <code class="elem">SCRIPT</code> element) will receive 
   <strong>MUCH</strong> more attention in other articles coming soon.</p>

<p class="note">To read more details of MAMA&#39;s findings, <a href="http://dev.opera.com/articles/view/mama/">check out the MAMA home page</a>.</p>

<h2>Frames</h2>
<p>The document layout concept for Web pages known as &quot;frames&quot; was first implemented 
   in Netscape 2.0 in 1995. It allows the browser window to be sub-divided into any 
   number of rows or columns of smaller windowed documents. The concept has many 
   <a href="http://users.ipa.net/~djhill/frmain.html">design</a> and 
   <a href="http://www.useit.com/alertbox/9612.html">usability</a> problems; 
   yet, it is popular enough (and easy enough) that its usage has blossomed 
   over the years. Many authors and designers have a special place of fury in 
   their hearts for frames&#8212;a place where disdain for other reviled constructs 
   like the <code class="elem">BLINK</code> and <code class="elem">MARQUEE</code> 
   elements lives. The current version of frames enjoys wide deployment &quot;in the wild&quot;, 
   despite its many drawbacks. Frames defiantly maintain a degree of authoring 
   inertia, despite the general disfavor. 
   Many authors probably do not care enough about the arguments against frames to use 
   other alternatives&#8212;or else they just are not being original enough in coming 
   up with design alternatives. Despite being dropped in XHTML 1.1, frames are not 
   going to go away any time soon.</p>

<h3>Usage of Frame-related elements</h3>
<p>The almost identical numbers of <code class="elem">FRAMESET</code> and 
   <code class="elem">FRAME</code> element usage are an obvious result&#8212;neither 
   element does anything useful without the other. The <code class="elem">FRAME</code> 
   and <code class="elem">IFRAME</code> elements, on the other hand, are not used 
   together very often&#8212;only 19,472 of the <code class="elem">IFRAME</code> cases 
   (8.8%) use the two elements together. Although the <code class="elem">IFRAME</code> 
   use numbers are lower than either the <code class="elem">FRAMESET</code> or 
   <code class="elem">FRAME</code> totals, the total number is likely much higher&#8212;
   many Web page ad systems are dynamically created by script using IFrames.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top Frame-related elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FRAMESET</code></td><td class="num">378,033</td></tr>
   <tr class="r2"><td><code class="elem">FRAME</code></td><td class="num">378,107</td></tr>
   <tr class="r1"><td><code class="elem">IFRAME</code></td><td class="num">222,462</td></tr>
</table>

<h3>An interesting frame-related attribute: <code class="att">Target</code></h3>
<p>Use of the <code class="att">Target</code> attribute is far, far greater than 
   the general usage of frames would indicate. It was detected in 2,077,198 of 
   MAMA&#39;s URLs, with <code class="elem">A</code> element usage leading the way: 1,978,018 times&#8212;more than 
   3 times as much as the overall use of <code class="elem">FRAME</code> and 
   <code class="elem">IFRAME</code> would indicate. Why is this? Authors are most 
   likely concerned with the frame situation the hyperlinks in their documents 
   will end up in, so they take steps to control it with the <code class="att">Target</code> 
   attribute.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Target attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>frequency</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">1,978,018</td></tr>
   <tr class="r2"><td><code class="elem">FORM</code></td><td class="num">199,085</td></tr>
   <tr class="r1"><td><code class="elem">BASE</code></td><td class="num">159,479</td></tr>
   <tr class="r2"><td><code class="elem">AREA</code></td><td class="num">146,703</td></tr>
   <tr class="r1"><td><code class="elem">LINK</code></td><td class="num">1,585</td></tr>
</table>

<h3>Popular <code class="att">Target</code> attribute values</h3>
<p>The <code class="att">Target</code> attribute can accept a wide variety of values, 
   but it also has several special reserved keywords, all beginning with the 
   underscore character (&quot;_&quot;): <span class="string">&quot;_blank&quot;</span>, 
   <span class="string">&quot;_top&quot;</span>, <span class="string">&quot;_self&quot;</span>, 
   <span class="string">&quot;_parent&quot;</span> and <span class="string">&quot;_new&quot;</span>.
   Naturally, these values are the most popular. Values resembling these keywords 
   (such as <span class="string">&quot;blank&quot;</span> or <span class="string">&quot;new&quot;</span>)
   are also very common, as are those which stress the parent-child relationship 
   of frame documents to their content documents (including <span class="string">&quot;main&quot;</span> 
   and <span class="string">&quot;contents&quot;</span>, and even German equivalents of the same: 
   <span class="string">&quot;hauptframe&quot;</span> and <span class="string">&quot;inhalt&quot;</span>).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top Target attribute values</caption>
   <tr valign="bottom"><th>Target attribute value</th><th>frequency</th><th rowspan="8">&#xA0;</th><th>Target attribute value</th><th>frequency</th></tr>
   <tr class="r1"><td><span class="string">_blank</span></td><td class="num">1,548,594</td><td><span class="string">blank</span></td><td class="num">43,287</td></tr>
   <tr class="r2"><td><span class="string">_top</span></td><td class="num">550,637</td><td><span class="string">mainframe</span></td><td class="num">31,691</td></tr>
   <tr class="r1"><td><span class="string">_self</span></td><td class="num">306,182</td><td><span class="string">google_window</span></td><td class="num">20,905</td></tr>
   <tr class="r2"><td><span class="string">_parent</span></td><td class="num">121,225</td><td><span class="string">contents</span></td><td class="num">18,076</td></tr>
   <tr class="r1"><td><span class="string">_new</span></td><td class="num">84,293</td><td><span class="string">hauptframe</span></td><td class="num">15,829</td></tr>
   <tr class="r2"><td><span class="string">main</span></td><td class="num">82,075</td><td><span class="string">inhalt</span></td><td class="num">12,828</td></tr>
   <tr class="r1"><td><span class="string">new</span></td><td class="num">52,756</td><td><span class="string">content</span></td><td class="num">10,316</td></tr>
</table>

<h2>The <code class="elem">HEAD</code> element and its children</h2>
<p><code class="elem">HEAD</code> is the most popular of any element used in MAMA&#39;s
   URL set, found in 98.7% of MAMA&#39;s URLs. Its top 5 sub-elements are also in the 
   top 20 of <strong>ALL</strong> markup elements used. This overview will not spend 
   too much time on this topic. Many of these child elements participate in very 
   important Web page topics, such as CSS and scripting.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top elements in the HEAD block</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>frequency</th><th rowspan="5">&#xA0;</th><th>ELEMENT</th><th>frequency</th></tr>
   <tr class="r1"><td><code class="elem">HEAD</code></td><td class="num">3,464,519</td><td><code class="elem">LINK</code></td><td class="num">2,018,510</td></tr>
   <tr class="r2"><td><code class="elem">TITLE</code></td><td class="num">3,459,207</td><td><code class="elem">STYLE</code></td><td class="num">1,313,454</td></tr>
   <tr class="r1"><td><code class="elem">META</code></td><td class="num">3,276,347</td><td><code class="elem">BASE</code></td><td class="num">266,149</td></tr>
   <tr class="r2"><td><code class="elem">SCRIPT</code></td><td class="num">2,528,823</td><td><code class="elem">ISINDEX</code></td><td class="num">63</td></tr>
</table>

<h3>The <code class="elem">META</code> <code class="att">Name</code> and 
    <code class="att">Http-equiv</code> attributes</h3>
<p>The META element is a popular way to assign and designate extra information 
   <em>about</em> the document. It accomplishes important authoring tasks that 
   are not possible in any other way, so its use is extremely very high. This usage
   is rather evenly divided between two functional attributes: <code class="att">Http-equiv</code> 
   and <code class="att">Name</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top META Http-equiv and Name attribute values</caption>
   <tr valign="bottom"><th>Http-equiv<br />attribute<br />value</th><th>frequency</th><th rowspan="6">&#xA0;</th><th>Name<br />attribute<br />value</th><th>frequency</th></tr>
   <tr class="r1"><td><span class="string">content-type</span></td><td class="num">2,679,505</td><td><span class="string">keywords</span></td><td class="num">2,170,259</td></tr>
   <tr class="r2"><td><span class="string">content-language</span></td><td class="num">456,078</td><td><span class="string">description</span></td><td class="num">2,098,529</td></tr>
   <tr class="r1"><td><span class="string">pragma</span></td><td class="num">167,801</td><td><span class="string">generator</span></td><td class="num">942,051</td></tr>
   <tr class="r2"><td><span class="string">refresh</span></td><td class="num">163,413</td><td><span class="string">robots</span></td><td class="num">931,622</td></tr>
   <tr class="r1"><td><span class="string">expires</span></td><td class="num">163,350</td><td><span class="string">author</span></td><td class="num">815,415</td></tr>
</table>

<h2>Common attributes</h2>
<p>There are a number of attributes that are nearly universal in scope and usage 
   with HTML; they can be applied to most, if not all elements. The following sections
   examine some of these in more detail.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Common attribute usage</caption>
   <tr valign="bottom"><th>Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="att">Name</code></td><td class="num">3,220,308</td></tr>
   <tr class="r2"><td><code class="att">Class</code></td><td class="num">2,139,184</td></tr>
   <tr class="r1"><td><code class="att">Style</code></td><td class="num">1,878,916</td></tr>
   <tr class="r2"><td><code class="att">Id</code></td><td class="num">1,782,769</td></tr>
   <tr class="r1"><td>Event handlers (&quot;on*&quot; attributes)</td><td class="num">1,692,823</td></tr>
   <tr class="r2"><td><code class="att">Title</code></td><td class="num">1,010,147</td></tr>
</table>

<h2>The <code class="att">Name</code> and <code class="att">Id</code> attributes</h2>
<p>These are two similar attributes that both assign unique identifiers to individual
   elements. Of the two, <code class="att">Name</code> is encountered more often; 
   It is actually the most popular of all the common attributes (used in some form 
   on 91.8% of MAMA&#39;s URLs). The <code class="att">Id</code> attribute is the newer 
   method for uniquely labeling an element, while the <code class="att">Name</code> 
   attribute has considerable historical traction with authors under a variety of 
   different uses.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top elements using Name and Id attributes, with relative attribute popularities</caption>
   <tr valign="bottom">
     <th>ELEMENTs<br />using Name</th><th>frequency</th><th>% Total<br />element<br />usage</th><th rowspan="11">&#xA0;</th><th>ELEMENTs<br />using Id</th><th>frequency</th><th>% Total<br />element<br />usage</th>
   </tr>
   <tr class="r1"><td><code class="elem">META</code></td><td class="num">2,710,638</td><td class="num">82.7%</td>
       <td><code class="elem">DIV</code></td><td class="num">1,085,482</td><td class="num">43.4%</td></tr>
   <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">990,058</td><td class="num">98.2%</td>
       <td><code class="elem">TABLE</code></td><td class="num">482,760</td><td class="num">16.7%</td></tr>
   <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">875,460</td><td class="num">27.2%</td>
       <td><code class="elem">IMG</code></td><td class="num">471,807</td><td class="num">14.7%</td></tr>
   <tr class="r2"><td><code class="elem">PARAM</code></td><td class="num">576,508</td><td class="num">99.97%</td>
       <td><code class="elem">INPUT</code></td><td class="num">372,905</td><td class="num">37.0%</td></tr>
   <tr class="r1"><td><code class="elem">FORM</code></td><td class="num">570,643</td><td class="num">54.8%</td>
       <td><code class="elem">A</code></td><td class="num">319,619</td><td class="num">9.7%</td></tr>
   <tr class="r2"><td><code class="elem">A</code></td><td class="num">485,168</td><td class="num">14.7%</td>
       <td><code class="elem">FORM</code></td><td class="num">266,886</td><td class="num">25.6%</td></tr>
   <tr class="r1"><td><code class="elem">MAP</code></td><td class="num">456,648</td><td class="num">99.7%</td>
       <td><code class="elem">TD</code></td><td class="num">230,312</td><td class="num">8.0%</td></tr>
   <tr class="r2"><td><code class="elem">FRAME</code></td><td class="num">349,820</td><td class="num">92.5%</td>
       <td><code class="elem">UL</code></td><td class="num">192,453</td><td class="num">23.8%</td></tr>
   <tr class="r1"><td><code class="elem">SELECT</code></td><td class="num">275,323</td><td class="num">96.5%</td>
       <td><code class="elem">SPAN</code></td><td class="num">180,553</td><td class="num">11.8%</td></tr>
   <tr class="r2"><td><code class="elem">EMBED</code></td><td class="num">138,809</td><td class="num">25.4%</td>
       <td><code class="elem">OBJECT</code></td><td class="num">165,628</td><td class="num">31.1%</td></tr>
</table>

<h3><code class="att">Name</code> and <code class="att">Id</code> attribute values</h3>
<p>There are extreme differences between the most popular values these two attributes
   carry. The top values of the <code class="att">Name</code> attribute demonstrate 
   their ancestry of specific usage in the popular <code class="elem">META</code>, 
   <code class="elem">IMG</code>, <code class="elem">A</code>, <code class="elem">PARAM</code>,
   and form elements. On the other hand, top values for the <code class="att">Id</code> 
   attribute evidence a templating or classification behavior akin to the use of the 
   <code class="att">Class</code> attribute. The most frequent <code class="att">Id</code> 
   values show sequential unique labels for certain categories, for instance the images 
   in a typical document might all sport successive <code class="att">Id</code> attributes 
   (eg: <span class="string">&quot;image1&quot;</span>, <span class="string">&quot;image2&quot;</span>, 
   <span class="string">&quot;image3&quot;</span>...). The full attribute value lists for 
   <a href="/articles/view/mama-common-attributes/namelist-url.htm"><code class="att">Name</code></a> and 
   <a href="/articles/view/mama-common-attributes/idlist-url.htm"><code class="att">Id</code></a> demonstrate these 
   behaviors more clearly than the shorter top 10 lists here are able to do.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Popular values for the Name and Id attributes</caption>
    <tr valign="bottom"><th>Name<br />attribute<br />value</th><th>frequency</th><th rowspan="11">&#xA0;</th>
        <th>Id<br />attribute<br />value</th><th>frequency</th></tr>
    <tr class="r1"><td><span class="string">keywords</span></td><td class="num">2,189,708</td><td><span class="string">footer</span></td><td class="num">288,061</td></tr>
    <tr class="r2"><td><span class="string">description</span></td><td class="num">2,100,858</td><td><span class="string">content</span></td><td class="num">228,661</td></tr>
    <tr class="r1"><td><span class="string">generator</span></td><td class="num">943,496</td><td><span class="string">header</span></td><td class="num">223,726</td></tr>
    <tr class="r2"><td><span class="string">robots</span></td><td class="num">937,844</td><td><span class="string">logo</span></td><td class="num">121,351</td></tr>
    <tr class="r1"><td><span class="string">author</span></td><td class="num">818,017</td><td><span class="string">container</span></td><td class="num">119,877</td></tr>
    <tr class="r2"><td><span class="string">movie</span></td><td class="num">530,989</td><td><span class="string">main</span></td><td class="num">106,327</td></tr>
    <tr class="r1"><td><span class="string">quality</span></td><td class="num">504,666</td><td><span class="string">table1</span></td><td class="num">101,677</td></tr>
    <tr class="r2"><td><span class="string">revisit-after</span></td><td class="num">475,765</td><td><span class="string">menu</span></td><td class="num">96,161</td></tr>
    <tr class="r1"><td><span class="string">copyright</span></td><td class="num">423,210</td><td><span class="string">layer1</span></td><td class="num">93,920</td></tr>
    <tr class="r2"><td><span class="string">progid</span></td><td class="num">281,339</td><td><span class="string">autonumber1</span></td><td class="num">77,350</td></tr>
</table>

<h2>The <code class="att">Class</code> attribute</h2>
<p>This attribute offers a degree of categorization and classification not possible 
   with the inherent element semantics of a markup language. The <code class="att">Class</code> 
   attribute allows multiple elements to share the same grouping, and a single element 
   instance can belong to multiple categories. The attribute sees its greatest expression 
   with CSS (which we will cover more later), but the category names themselves that 
   authors assign are interesting to examine.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top elements using Class attribute, with relative attribute popularities</caption>
    <tr valign="bottom"><th>ELEMENT</th><th>frequency</th><th>% Total<br />element<br />usage</th><th rowspan="6">&#xA0;</th>
        <th>ELEMENT</th><th>frequency</th><th>% Total<br />element<br />usage</th></tr>
    <tr class="r1"><td><code class="elem">A</code></td><td class="num">1,111,526</td><td class="num">33.6%</td><td><code class="elem">TABLE</code></td><td class="num">580,281</td><td class="num">20.1%</td></tr>
    <tr class="r2"><td><code class="elem">TD</code></td><td class="num">1,082,979</td><td class="num">37.5%</td><td><code class="elem">INPUT</code></td><td class="num">438,516</td><td class="num">43.5%</td></tr>
    <tr class="r1"><td><code class="elem">SPAN</code></td><td class="num">1,046,840</td><td class="num">68.5%</td><td><code class="elem">IMG</code></td><td class="num">320,281</td><td class="num">10.0%</td></tr>
    <tr class="r2"><td><code class="elem">DIV</code></td><td class="num">1,031,384</td><td class="num">41.3%</td><td><code class="elem">LI</code></td><td class="num">228,422</td><td class="num">27.1%</td></tr>
    <tr class="r1"><td><code class="elem">P</code></td><td class="num">736,885</td><td class="num">27.3%</td><td><code class="elem">UL</code></td><td class="num">197,729</td><td class="num">24.4%</td></tr>
</table>

<h3><code class="att">Class</code> attribute values</h3>
<p>The most popular <code class="att">Class</code> value, <span class="string">&quot;footer&quot;</span>, 
   is twice as popular as its natural companion <span class="string">&quot;header&quot;</span>. 
   One big noticeable trend from the full <a href="/articles/view/mama-common-attributes/classlist-url.htm"><code class="att">Class</code> 
   value list</a>: there are a high number of class names of the form: 
   <code class="regexp">/style\d+/</code>. The popularity of each class value 
   decreases as the integer value at the end increases. MAMA detected values like 
   this going at least up to <span class="string">&quot;style117&quot;</span> and probably 
   higher. A high (but untested) correlation was noticed between class names of 
   this type and the use of Macromedia Dreamweaver scripting library functions. 
   As Macromedia Dreamweaver is not always the easiest editor to detect, this 
   correlation will remain a theory.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top values for the Class attribute</caption>
    <tr valign="bottom"><th>Value</th><th>frequency</th><th rowspan="6">&#xA0;</th><th>Value</th><th>frequency</th></tr>
    <tr class="r1"><td><span class="string">footer</span></td><td class="num">179,528</td><td><span class="string">content</span></td><td class="num">113,951</td></tr>
    <tr class="r2"><td><span class="string">menu</span></td><td class="num">146,673</td><td><span class="string">title</span></td><td class="num">91,957</td></tr>
    <tr class="r1"><td><span class="string">style1</span></td><td class="num">138,308</td><td><span class="string">style2</span></td><td class="num">89,851</td></tr>
    <tr class="r2"><td><span class="string">msonormal</span></td><td class="num">123,374</td><td><span class="string">header</span></td><td class="num">89,274</td></tr>
    <tr class="r1"><td><span class="string">text</span></td><td class="num">122,911</td><td><span class="string">copyright</span></td><td class="num">86,979</td></tr>
</table>

<h2>Event-handler attributes</h2>
<p>As mentioned previously, we will discuss scripting in greater detail soon. However, for 
   now, we will take a look at those HTML markup portals to scripting,
   the event-handler attributes. Event handlers were detected in ~2/3 of the 2,617,305 
   MAMA URLs using script. MAMA found 52 unique event-handler attribute names 
   occurring more than 4 times. With each event-handler attribute, there was 
   generally a single element with which it showed the greatest affinity.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top event-handler attribute usage</caption>
   <tr valign="bottom"><th>Event handler</th><th>Element with<br />highest usage</th>
       <th>Frequency when<br />used with element</th><th>Total overall<br />attribute frequency</th></tr>
   <tr class="r1"><td><code class="att">Onmouseover</code></td><td><code class="elem">A</code></td><td class="num">829,262</td><td class="num">1,051,631</td></tr>
   <tr class="r2"><td><code class="att">Onmouseout</code></td><td><code class="elem">A</code></td><td class="num">781,567</td><td class="num">998,854</td></tr>
   <tr class="r1"><td><code class="att">Onload</code></td><td><code class="elem">BODY</code></td><td class="num">741,946</td><td class="num">772,567</td></tr>
   <tr class="r2"><td><code class="att">Onclick</code></td><td><code class="elem">A</code></td><td class="num">492,092</td><td class="num">684,117</td></tr>
   <tr class="r1"><td><code class="att">Onchange</code></td><td><code class="elem">SELECT</code></td><td class="num">158,761</td><td class="num">163,476</td></tr>
   <tr class="r2"><td><code class="att">Onsubmit</code></td><td><code class="elem">FORM</code></td><td class="num">151,699</td><td class="num">152,286</td></tr>
   <tr class="r1"><td><code class="att">Onfocus</code></td><td><code class="elem">INPUT</code></td><td class="num">146,043</td><td class="num">197,235</td></tr>
</table>

<h2>Conclusion</h2>
<p>Now that we are starting to see the general shape that markup documents take,
   we should pause to consider what to look at next. The full writeups for this
   week offer our first real glimpses of what makes most documents tick (especially
   the thorough treatment of a document&#39;s <a href="http://dev.opera.com/articles/view/mama-head-structure/"><code class="elem">HEAD</code> 
   structure</a> and the use of <a href="http://dev.opera.com/articles/view/mama-common-attributes/">common attributes</a>). Looking ahead to
   next week, our natural progression leads us to the elements that most authors use
   in the <code class="elem">BODY</code> section of their documents: images 
   (<code class="elem">IMG</code>) and hyperlinks (<code class="elem">A</code>).
   Next week&#39;s overview will also start dipping into the bulk of the basic semantic 
   phrase and block markup. See you soon!</p>
