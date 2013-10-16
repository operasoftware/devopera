Title: MAMA: Markup report, part 4: Forms, tables, and plug-ins, oh my!
----
Date: 2008-11-28 10:37:50
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
<p>In this week&#39;s overview we wrap up MAMA&#39;s look at markup by covering its most 
   complex structures—forms, tables, and plug-ins. These topics take Web pages 
   from a simple series of text, links, images, and lists to an entirely different
   level. Forms greatly expand user interaction possibilities. Tables generate
   axial relationships—which authors have creatively distorted for their most
   popular (and questionable) use, creating pixel-perfect grid based layouts. Plug-ins afford 
   extensibility beyond HTML&#39;s stock capabilities. Without any of these features, 
   HTML would be a barren, unexciting markup language. For a deeper look 
   at these areas and more, the following MAMA article topics are also available 
   this week:</p>

<ul>
    <li><a href="http://dev.opera.com/articles/view/mama-forms/">Forms</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-tables/">Tables</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-plug-ins/">Plug-ins</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-xml/">XML</a></li>
</ul>

<h2>Forms</h2>
<p>Aside from hyperlinks, forms are the main way in which users interact with the Web. 
   Among their varied critical uses, forms allow people to find things with search 
   engines, publish their thoughts with blogging systems, and buy things on e-commerce 
   sites. Forms in general are very popular—found on up to one-third of all pages analyzed.</p>

<h3>Elements used in forms</h3>
<p>The popularity of the main types of form elements varies widely, and sometimes 
   surprisingly. For example, almost every <code class="elem">FORM</code> has an 
   <code class="elem">INPUT</code>, but relatively few make use of 
   <code class="elem">TEXTAREA</code>. Such variations may be due to a number of 
   factors, including inherent biases in MAMA&#39;s current URL set (a majority of MAMA&#39;s 
   URLs are <a href="http://dev.opera.com/articles/view/mama-the-url-set/#surfaceversusdeep">Surface/Home</a> 
   pages, which rarely have forms on them, apart from the increasingly-popular search field). The intended use of a Web page often dictates the types of elements 
   used, including form elements.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Frequencies of form-related elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="6"> </th><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FORM</code></td><td class="num">1,040,771</td><td><code class="elem">TEXTAREA</code></td><td class="num">36,410</td></tr>
   <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">1,008,545</td><td><code class="elem">FIELDSET</code></td><td class="num">31,673</td></tr>
   <tr class="r1"><td><code class="elem">SELECT</code></td><td class="num">285,362</td><td><code class="elem">LEGEND</code></td><td class="num">18,269</td></tr>
   <tr class="r2"><td><code class="elem">OPTION</code></td><td class="num">281,923</td><td><code class="elem">BUTTON</code></td><td class="num">11,455</td></tr>
   <tr class="r1"><td><code class="elem">LABEL</code></td><td class="num">159,631</td><td><code class="elem">OPTGROUP</code></td><td class="num">5,348</td></tr>
</table>

<h2>The <code class="elem">FORM</code> element</h2>
<p>We will start our look at form elements by looking at its main container element: 
   <code class="elem">FORM</code>. It was detected in 1,040,771 of MAMA&#39;s URLs. 
   Notice that the <code class="att">Action</code> attribute is used on most of these
   pages—it specifies what to do with the information the form is collecting. 
   This attribute is required, so the dominance here is understandable. The 
   <code class="att">Method</code> attribute is only slightly less popular than the 
   <code class="att">Action</code> attribute (89.4% of all forms usage).</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Top attributes of the FORM element</caption>
   <tr valign="bottom"><th>Form<br />

Attribute</th><th>Frequency</th></tr>
   <tr class="r2"><td><code class="att">Action</code></td><td class="num">977,934</td></tr>
   <tr class="r1"><td><code class="att">Method</code></td><td class="num">930,343</td></tr>
   <tr class="r2"><td><code class="att">Name</code></td><td class="num">570,643</td></tr>
   <tr class="r1"><td><code class="att">Id</code></td><td class="num">266,886</td></tr>
   <tr class="r2"><td><code class="att">Target</code></td><td class="num">199,085</td></tr>
</table>

<h3>The <code class="att">Method</code> attribute</h3>
<p>Approximately 70% of pages that specify an explicit HTTP Method use the 
   <span class="string">&quot;post&quot;</span> method, while ~46% use the <span class="string">&quot;get&quot;</span> 
   method. This would indicate a clear authoring preference for the 
   <span class="string">&quot;post&quot;</span> method, but there are a few factors to 
   consider. About 15% of the pages specifying the <code class="att">Method</code> 
   attribute use multiple forms on the page that mix <strong>both</strong> 
   <span class="string">&quot;post&quot;</span> and <span class="string">&quot;get&quot;</span> methods. 
   There are 110,428 URLs that used the <code class="elem">FORM</code> element 
   with no <code class="att">Method</code> attribute; <span class="string">&quot;get&quot;</span> 
   is the implied default value in such cases. This brings the relative preferences 
   for <code class="att">Method</code> amongst all <code class="elem">FORM</code> 
   usages much closer: 62.2% for <span class="string">&quot;post&quot;</span> and 51.6% for 
   an explicit <strong>or</strong> implied <span class="string">&quot;get&quot;</span> value.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">FORM Method attribute explicit values</caption>
   <tr valign="bottom"><th>Method<br />

value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">post</span></td><td class="num">647,234</td></tr>
   <tr class="r2"><td><span class="string">get</span></td><td class="num">426,192</td></tr>
</table>

<h2>The <code class="elem">INPUT</code> element</h2>
<p>This popular element is used in 96.9% of all documents using forms. With the 
   element&#39;s functionality being as overloaded as it is, this popularity is both 
   understandable and expected. Some of its attributes are also very popular.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Popular attributes of the INPUT element</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="7"> </th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">INPUT</code></td><td class="num">1,008,545</td><td>   <code class="att">Maxlength</code></td><td class="num">329,415</td></tr>
   <tr class="r2"><td>   <code class="att">Type</code></td><td class="num">1,005,152</td><td>   <code class="att">Alt</code></td><td class="num">213,924</td></tr>
   <tr class="r1"><td>   <code class="att">Name</code></td><td class="num">990,058</td><td>   <code class="att">Border</code></td><td class="num">172,843</td></tr>
   <tr class="r2"><td>   <code class="att">Value</code></td><td class="num">947,403</td><td>   <code class="att">Checked</code></td><td class="num">135,049</td></tr>
   <tr class="r1"><td>   <code class="att">Size</code></td><td class="num">656,354</td><td>   <code class="att">Width</code></td><td class="num">120,420</td></tr>
   <tr class="r2"><td>   <code class="att">Src</code></td><td class="num">335,990</td><td>   <code class="att">Height</code></td><td class="num">119,902</td></tr>
</table>

<h3>The <code class="att">Type</code> attribute</h3>
<p>Many of the attributes for the <code class="elem">INPUT</code> element are only 
   applicable to specific <code class="att">Type</code> attribute values, so we must
   examine this attribute&#39;s values first.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Popular values of the INPUT Type attribute</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th><th rowspan="6"></th><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">text</span></td><td class="num">806,926</td><td><span class="string">radio</span></td><td class="num">159,626</td></tr>
   <tr class="r2"><td><span class="string">hidden</span></td><td class="num">733,126</td><td><span class="string">empty</span></td><td class="num">110,971</td></tr>
   <tr class="r1"><td><span class="string">submit</span></td><td class="num">568,445</td><td><span class="string">checkbox</span></td><td class="num">81,260</td></tr>
   <tr class="r2"><td><span class="string">image</span></td><td class="num">337,286</td><td><span class="string">button</span></td><td class="num">71,031</td></tr>
   <tr class="r1"><td><span class="string">password</span></td><td class="num">167,098</td><td><span class="string">reset</span></td><td class="num">17,417</td></tr>
</table>

<p>We can now look more deeply at the various uses of the messy <code class="elem">INPUT</code> element:</p>

<ul>
    <li>The <span class="string">&quot;empty&quot;</span> value indicates that an 
        <code class="elem">INPUT</code> element did not have a <code class="att">Type</code> 
        value at all. In such situations, a widget is interpreted as 
        <code class="att">Type</code>=<span class="string">&quot;Text&quot;</span>. In all, 79,050 
        URLs used <code class="elem">INPUT</code> elements where none of them 
        specified a <code class="att">Type</code> attribute.</li>
    <li>In the early days of forms, <span class="string">&quot;Submit&quot;</span> 
        buttons were usually paired with a <span class="string">&quot;Reset&quot;</span> 
        button, but today, that seems to be passé. By comparison, 
        <span class="string">&quot;Reset&quot;</span> is rarely encountered now.</li>
    <li>The <span class="string">&quot;Submit&quot;</span> and <span class="string">&quot;Image&quot;</span> 
        types: Because <span class="string">&quot;Image&quot;</span> is a type of submittal, and 
        each will often be used to the exclusion of the other, looking at their 
        combined totals shows that submittal is the most popular function of forms 
        (more popular than <span class="string">&quot;Text&quot;</span>). This is actually 
        an expected result.</li>
    <li>The <code class="att">Type</code>=<span class="string">&quot;Image&quot;</span> related 
        attributes: <code class="att">Width</code> and <code class="att">Hspace</code> 
        (horizontal dimensions) have just a slight edge over <code class="att">Height</code> 
        and <code class="att">Vspace</code> (vertical dimensions), just like they 
        do with the <code class="elem">IMG</code> element.</li>
    <li>The exclusive choice widget, <code class="att">Type</code>=<span class="string">&quot;Radio&quot;</span>, 
        is twice as popular as the multi-choice 
        <code class="att">Type</code>=<span class="string">&quot;Checkbox&quot;</span> widget.</li>
</ul>

<h2>Tables</h2>
<p>Tables have a bad reputation among the markup purists in the development community, 
   because many authors often use them solely for Web page layout. Tables 
   generally increase the complexity of documents and can make them more difficult 
   to maintain. Authors do not really see these factors as significant drawbacks, though, 
   judging by the overwhelming popularity of layout tables in the MAMA result set. In practice, the use of presentational 
   tables by authors is what makes the main table-related elements some of the most 
   popular sub-elements of <code class="elem">BODY</code>, after the <code class="elem">A</code> 
   and <code class="elem">IMG</code> elements. The most frequently occurring of 
   these is the <code class="elem">TABLE</code> element, found in 2,894,184 of MAMA&#39;s 
   URLs (82.5%). Authors have a definite preference for the table elements they use. 
   Almost every table uses the <code class="elem">TABLE</code>, <code class="elem">TR</code> 
   and <code class="elem">TD</code> elements. All of the other elements are used rarely 
   by comparison. <code class="elem">CAPTION</code>, <code class="elem">COL</code>, 
   <code class="elem">THEAD</code>, <code class="elem">COLGROUP</code>, and 
   <code class="elem">TFOOT</code> are all used in less than 1% of 
   <code class="elem">TABLE</code> occurrences.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Table-related elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="6"> </th><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">TABLE</code></td><td class="num">2,894,184</td><td><code class="elem">CAPTION</code></td><td class="num">23,306</td></tr>
   <tr class="r2"><td><code class="elem">TD</code></td><td class="num">2,891,972</td><td><code class="elem">COL</code></td><td class="num">21,775</td></tr>
   <tr class="r1"><td><code class="elem">TR</code></td><td class="num">2,891,205</td><td><code class="elem">THEAD</code></td><td class="num">21,474</td></tr>
   <tr class="r2"><td><code class="elem">TBODY</code></td><td class="num">364,542</td><td><code class="elem">COLGROUP</code></td><td class="num">12,225</td></tr>
   <tr class="r1"><td><code class="elem">TH</code></td><td class="num">148,344</td><td><code class="elem">TFOOT</code></td><td class="num">3,947</td></tr>
</table>

<h3>Attributes of the <code class="elem">TABLE</code> element</h3>
<p>This wrapper element for table structures is (naturally) the most popular element 
   of its type. It ranks #8 overall in element popularity, used in 82.47% of all 
   MAMA&#39;s URLs. Many attributes were detected for this element, only some of which 
   are in the standards. A few of these attributes are <strong>VERY</strong> popular 
   with authors - <code class="att">Border</code>, <code class="att">Width</code>, 
   <code class="att">Cellpadding</code> and <code class="att">Cellspacing</code> 
   are used in ~90% of all URLs that use tables. Usage of other attributes, like 
   <code class="att">Rules</code> and <code class="att">Frame</code> barely
   register; they are used in less than 0.5% of all <code class="elem">TABLE</code>
   cases.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Popular attributes of the TABLE element</caption>
   <tr valign="bottom"><th>Attribute</th><th>Frequency</th><th rowspan="6"> </th><th>Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="att">Border</code></td><td class="num">2,691,899</td><td><code class="att">Height</code></td><td class="num">1,220,050</td></tr>
   <tr class="r2"><td><code class="att">Width</code></td><td class="num">2,637,117</td><td><code class="att">Bgcolor</code></td><td class="num">893,573</td></tr>
   <tr class="r1"><td><code class="att">Cellpadding</code></td><td class="num">2,585,020</td><td><code class="att">Bordercolor</code></td><td class="num">417,650</td></tr>
   <tr class="r2"><td><code class="att">Cellspacing</code></td><td class="num">2,578,416</td><td><code class="att">Background</code></td><td class="num">281,209</td></tr>
   <tr class="r1"><td><code class="att">Align</code></td><td class="num">1,226,047</td><td><code class="att">Valign</code></td><td class="num">87,291</td></tr>
</table>

<h2>The <code class="elem">TD</code> and <code class="elem">TH</code> elements</h2>
<p>These two elements are grouped together because they mostly share the same 
   attributes and have very similar usage. But their usage rates could not be more 
   different. The most popular table sub-element is <code class="elem">TD</code> (detected in 2,891,972 URLs), and it is the 9th most popular element overall (used in 82.4% 
   of all URLs in MAMA and 99.9% of all URLs using the <code class="elem">TABLE</code> 
   element). The <code class="elem">TH</code> sub-element, on the other hand, is used in only 5.1% 
   of URLs using the <code class="elem">TABLE</code> element. Because of the 
   inherent attribute overlap between <code class="elem">TD</code> and 
   <code class="elem">TH</code>, it can be interesting to compare attribute usage 
   rates between the two elements. Percentages of the total element usage are 
   also provided to help cross-comparisons.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Top attributes of the TD and TH elements</caption>
   <tr valign="bottom"><th>TD Attribute</th><th>Frequency</th><th>% of<br />

Element</th>
       <th rowspan="11"> </th><th>TH Attribute</th><th>Frequency</th><th>% of<br />

Element</th></tr>
   <tr class="r1"><td><code class="elem">TD</code></td><td class="num">2,891,972</td><td class="num">--</td>
       <td><code class="elem">TH</code></td><td class="num">148,344</td><td class="num">--</td></tr>
   <tr class="r2"><td><code class="att">Width</code></td><td class="num">2,324,752</td><td class="num">80.4%</td>
       <td><code class="att">Valign</code></td><td class="num">46,799</td><td class="num">31.6%</td></tr>
   <tr class="r1"><td><code class="att">Valign</code></td><td class="num">2,189,287</td><td class="num">75.7%</td>
       <td><code class="att">Width</code></td><td class="num">45,709</td><td class="num">30.8%</td></tr>
   <tr class="r2"><td><code class="att">Align</code></td><td class="num">1,977,367</td><td class="num">68.4%</td>
       <td><code class="att">Colspan</code></td><td class="num">38,587</td><td class="num">26.0%</td></tr>
   <tr class="r1"><td><code class="att">Colspan</code></td><td class="num">1,711,437</td><td class="num">59.2%</td>
       <td><code class="att">Align</code></td><td class="num">35,710</td><td class="num">24.1%</td></tr>
   <tr class="r2"><td><code class="att">Height</code></td><td class="num">1,672,129</td><td class="num">57.8%</td>
       <td><code class="att">Scope</code></td><td class="num">30,111</td><td class="num">20.3%</td></tr>
   <tr class="r1"><td><code class="att">Bgcolor</code></td><td class="num">1,306,542</td><td class="num">45.2%</td>
       <td><code class="att">Height</code></td><td class="num">28,195</td><td class="num">19.0%</td></tr>
   <tr class="r2"><td><code class="att">Rowspan</code></td><td class="num">901,303</td><td class="num">31.2%</td>
       <td><code class="att">Bgcolor</code></td><td class="num">22,406</td><td class="num">15.1%</td></tr>
   <tr class="r1"><td><code class="att">Background</code></td><td class="num">714,706</td><td class="num">24.7%</td>
       <td><code class="att">Nowrap</code></td><td class="num">10,469</td><td class="num">7.1%</td></tr>
   <tr class="r2"><td><code class="att">Nowrap</code></td><td class="num">353,572</td><td class="num">12.2%</td>
       <td><code class="att">Rowspan</code></td><td class="num">6,324</td><td class="num">4.3%</td></tr>
</table>

<h2>How deeply are tables nested?</h2>
<p>One of the features requested for MAMA was the ability to detect deeply-nested 
   tables. Such structures can be excellent stress tests for a browser. In theory, 
   every <code class="elem">TABLE</code> open tag should have a corresponding closing 
   tag. As MAMA traversed a document, any <code class="elem">TABLE</code> open tags 
   added 1 to the current depth counter. A closing <code class="elem">TABLE</code> 
   tag would subtract 1 from the depth counter. When the depth counter hit a new high 
   score for the document, that value became the new &quot;maximum table depth&quot;. This rather 
   simplistic system yielded a number for a document&#39;s &quot;maximum table nesting depth&quot;—it does not necessarily mean that the open and closing tags are properly nested; 
   that is another issue entirely. The average nesting depth when tables were used was 2.77.
   The maximum nesting depth discovered was an astounding 745 deep at 
   <a href="http://www.artsforeveryone.com/">http://www.artsforeveryone.com/</a>.
   </p>

<h2>Plug-ins</h2>
<p>The Web has multiple elements to handle plug-ins because of simple evolution. 
   At first, there was no standardized way to use plug-ins, so solutions arose 
   haphazardly—<code class="elem">APPLET</code>, <code class="elem">EMBED</code>,
   and <code class="elem">PARAM</code>. The standards process produced a cohesive 
   solution in the <code class="elem">OBJECT</code> element, but authoring inertia 
   seems to indicate that <code class="elem">APPLET</code> and <code class="elem">EMBED</code> 
   are not going anywhere. Rather than the <code class="elem">OBJECT</code> element 
   being used <strong>instead of</strong> <code class="elem">EMBED</code>, the majority of <code class="elem">OBJECT</code> tags are used 
   <strong>in conjunction with</strong> <code class="elem">EMBED</code> elements. 
  In all, 503,783 URLs use both <code class="elem">EMBED</code> and <code class="elem">OBJECT</code> 
   elements (94.5% of all <code class="elem">OBJECT</code> and 92.3% of all 
   <code class="elem">EMBED</code> instances).</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment">Plugin-related elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">PARAM</code></td><td class="num">576,702</td></tr>
   <tr class="r2"><td><code class="elem">OBJECT</code></td><td class="num">533,343</td></tr>
   <tr class="r1"><td><code class="elem">EMBED</code></td><td class="num">545,734</td></tr>
   <tr class="r2"><td><code class="elem">APPLET</code></td><td class="num">52,160</td></tr>
</table>

<h3>Flash usage</h3>
<p>MAMA tried to discover evidence of Flash usage in every document it analyzed. 
   It had to resort to looking for a number of different factors, as authors can 
   use Flash in many ways. Its use was detected by satisfying one or more of the 
   following components:</p>

<ul>
    <li>Any <code class="elem">PARAM</code> element that contained the substrings 
        <span class="string">&quot;.swf&quot;</span> or <span class="string">&quot;flash&quot;</span></li>
    <li>Any MIME types containing the substring <span class="string">&quot;flash&quot;</span> 
        from getting any <code class="elem">EMBED</code>[<code class="att">Src</code>] or 
        <code class="elem">OBJECT</code>[<code class="att">Data</code>] URLs</li>
    <li>Any scripting component containing the substring <span class="string">&quot;flash&quot;</span> 
        or <span class="string">&quot;.swf&quot;</span></li>
</ul>

<p>Using these criteria, 1,176,227 URLs were found to be using Flash. This is a 
   <strong>MUCH</strong> higher result than one would expect by looking solely at 
   the <code class="elem">EMBED</code> and <code class="elem">OBJECT</code> elements. 
   This means that either some aspect(s) of MAMA&#39;s detection mechanism are too 
   relaxed, or that some part of the analysis is flagging a lot of positive matches 
   that <code class="elem">EMBED</code> or <code class="elem">OBJECT</code> detection 
   alone does not catch. If any part of the above detection is suspect, it is likely 
   to be the scripting detection of Flash (due to the simplistic nature of its
   substring search). Judging by anecdotal evidence seen over the years, the number 
   is probably pretty accurate; scripting is frequently given the duty of dynamically 
   generating plug-in markup.</p>

<h3>Java usage</h3>
<p>As with Flash, there were a number of methods MAMA used to detect Java usage. 
   The following criteria were used to judge whether or not Java was being used 
   in a URL and resulted in the detection of 53,688 matches:</p>

<ul>
    <li>Any usage of the <code class="elem">APPLET</code> element</li>
    <li>Any <code class="elem">PARAM</code> element that contained the substrings 
        <span class="string">&quot;.class&quot;</span> or <span class="string">&quot;java&quot;</span></li>
    <li>Any MIME types containing the substring <span class="string">&quot;java&quot;</span> 
        from getting any <code class="elem">OBJECT</code>[<code class="att">Data</code>] URLs</li>
    <li>Any scripting component containing the substring 
        <span class="string">&quot;application/java-vm&quot;</span></li>
</ul>

<h2>Conclusion</h2>
<p>Now that we have spent several weeks looking intensely at HTML&#39;s many markup 
   topics (and rightly so), we will next be turning our attention to other important 
   Web page technologies that are vital to address in any examination of the Web. 
   Next week we will look at the details of 
   <acronym title="Cascading Style Sheets">CSS</acronym> usage: the whos, whats, 
   wheres, whens, whys, and hows of the way CSS is used.</p>
