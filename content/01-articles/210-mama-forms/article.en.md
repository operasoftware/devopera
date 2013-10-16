Title: MAMA: Forms
----
Date: 2008-11-28 10:36:33
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-images-elements-and-formats/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Images - elements and formats</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-plug-ins/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Plug-ins</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#form">FORM element</a></li>
    <li><a href="#input">INPUT element</a></li>
    <li><a href="#select">SELECT element</a></li>
    <li><a href="#optgroup">OPTGROUP element</a></li>
    <li><a href="#option">OPTION element</a></li>
    <li><a href="#label">LABEL element</a></li>
    <li><a href="#textarea">TEXTAREA element</a></li>
    <li><a href="#legend">LEGEND element</a></li>
    <li><a href="#button">BUTTON element</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Aside from hyperlinks, forms are the main way users interact with the Web. 
   Among their varied critical uses, forms allow people to:</p>
   
   <ul>
   <li>Find what they want via search engines</li>
   <li>Publish their thoughts online via blogs</li> 
   <li>Enter their personal details and make purchases via e-commerce sites</li>
   </ul>
   
   <p>The standards bodies keep trying to create successors to the current popular 
   incarnation of forms in order to make things easier for creators and to provide 
   a richer experience for users (check out <a href="http://www.w3.org/TR/xforms/">the 
   XForms spec</a> and <a href="http://www.whatwg.org/specs/web-forms/current-work/">the 
   WebForms 2.0 spec</a>). By MAMA&#39;s representation statistics, authors 
   do not seem to be embracing the newer forms features yet in significant 
   quantities. The XForms namespace was only found in 16 of MAMA&#39;s URLs, and 
   syntax from the most popular new features in Web Forms 2.0 numbers just over 100 
   detected cases. (Bear in mind that, at the time of writing, Web Forms 2.0 was a 
   nascent technology, with fairly limited browser support.) Forms in general are very 
   popular—found on up to one-third of all pages analyzed.</p>

<p>The popularity of the main types of form elements varies widely, and sometimes 
   surprisingly. For example, almost every <code class="elem">FORM</code> has an 
   <code class="elem">INPUT</code> element, but relatively few make use of <code class="elem">TEXTAREA</code>. 
   Such variations may be due to a number of factors, including inherent biases in 
   MAMA&#39;s current URL set (a majority of MAMA&#39;s URLs are Surface/Home pages). The 
   intended use of a Web page often dictates the types of elements used, including 
   form elements.</p>

<h3>Form elements frequencies</h3>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 1-1:</strong> Frequency of forms-related elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th><th rowspan="6"> </th><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FORM</code></td><td class="num">1,040,771</td><td><code class="elem">TEXTAREA</code></td><td class="num">36,410</td></tr>
   <tr class="r2"><td><code class="elem">INPUT</code></td><td class="num">1,008,545</td><td><code class="elem">FIELDSET</code></td><td class="num">31,673</td></tr>
   <tr class="r1"><td><code class="elem">SELECT</code></td><td class="num">285,362</td><td><code class="elem">LEGEND</code></td><td class="num">18,269</td></tr>
   <tr class="r2"><td><code class="elem">OPTION</code></td><td class="num">281,923</td><td><code class="elem">BUTTON</code></td><td class="num">11,455</td></tr>
   <tr class="r1"><td><code class="elem">LABEL</code></td><td class="num">159,631</td><td><code class="elem">OPTGROUP</code></td><td class="num">5,348</td></tr>
</table>

<h2 id="form">The <code class="elem">FORM</code> element</h2>
<p>We will start our look at form elements by looking at its main container element: 
   <code class="elem">FORM</code>. Notice that the <code class="att">Action</code> 
   attribute is used on most pages—it specifies what to do with the information 
   the form is collecting. This attribute is required, so the dominance here is 
   understandable. The <code class="att">Method</code> attribute is only slightly 
   less popular than the required <code class="att">Action</code> attribute (found in 89.39% 
   of all form usage). The <code class="att">Name</code> attribute is just over 
   twice as popular as the <code class="att">Id</code> attribute for this element.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 2-1:</strong> FORM element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="6"> </th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">FORM</code></td><td class="num">1,040,771</td><td>   <code class="att">Target</code></td><td class="num">199,085</td></tr>
   <tr class="r2"><td>   <code class="att">Action</code></td><td class="num">977,934</td><td>   <code class="att">Enctype</code></td><td class="num">31,845</td></tr>
   <tr class="r1"><td>   <code class="att">Method</code></td><td class="num">930,343</td><td>   <code class="att">Accept-charset</code></td><td class="num">8,775</td></tr>
   <tr class="r2"><td>   <code class="att">Name</code></td><td class="num">570,643</td><td>   <code class="att">Align</code></td><td class="num">1,569</td></tr>
   <tr class="r1"><td>   <code class="att">Id</code></td><td class="num">266,886</td><td>   <code class="att">Accept</code></td><td class="num">0</td></tr>
</table>

<h3>The <code class="att">Method</code> attribute</h3>
<p>Approximately 70% of pages that specify an explicit HTTP Method use the 
   <span class="string">&quot;post&quot;</span> method, while ~46% use the <span class="string">&quot;get&quot;</span> 
   method (some documents had pages with multiple forms that had a mixture of methods). This would indicate a clear authoring preference for the 
   <span class="string">&quot;post&quot;</span> method, but there are a few factors to 
   consider. Up to 15% of the pages specifying the <code class="att">Method</code> 
   attribute use multiple forms on the page that mix <strong>both</strong> 
   <span class="string">&quot;post&quot;</span> and <span class="string">&quot;get&quot;</span> methods. 
   There are 110,428 URLs that used the <code class="elem">FORM</code> element 
   with no <code class="att">Method</code> attribute; <span class="string">&quot;get&quot;</span> 
   is the implied default value in such cases. This brings the relative preferences 
   for <code class="att">Method</code> among all <code class="elem">FORM</code> 
   usages much closer: 62.19% for <span class="string">&quot;post&quot;</span> and 51.56% for 
   an explicit <strong>or</strong> implied <span class="string">&quot;get&quot;</span> value. 
   The <a href="formmethodlist-url.htm">full frequency table</a> for this attribute 
   shows other values, including a number of typos, but they appear inconsequential 
   next to the two main, accepted values.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 2-2:</strong> FORM Method explicit values</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">post</span></td><td class="num">647,234</td></tr>
   <tr class="r2"><td><span class="string">get</span></td><td class="num">426,192</td></tr>
</table>

<h3>The <code class="att">Accept-charset</code> attribute</h3>
<p>MAMA kept track of the values for this attribute, although it was not known 
   in advance if it was used in significant quantities (it was detected only 
   8,775 times). The most popular value is clearly <span class="string">&quot;utf-8&quot;</span>, 
   with <span class="string">&quot;iso-8859-1&quot;</span> also being very common. Other 
   than those, Japanese encodings held sway with 3 of the next 4 most popular values.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 2-3:</strong> 
   FORM Accept-charset values<br />

[Also see the <a href="formacceptcharsetlist-url.htm">full frequency table</a>.]</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">utf-8</span></td><td class="num">5,683</td></tr>
   <tr class="r2"><td><span class="string">iso-8859-1</span></td><td class="num">2,185</td></tr>
   <tr class="r1"><td><span class="string">x-euc-jp</span></td><td class="num">286</td></tr>
   <tr class="r2"><td><span class="string">iso-8859-2</span></td><td class="num">147</td></tr>
   <tr class="r1"><td><span class="string">euc-jp</span></td><td class="num">138</td></tr>
   <tr class="r2"><td><span class="string">shift_jis</span></td><td class="num">86</td></tr>
</table>

<h2 id="input">The <code class="elem">INPUT</code> element</h2>
<p>This popular element is used in 96.90% of all documents using forms. With the 
   element&#39;s functionality being as overloaded as it is, this popularity is both 
   understandable and expected. Many of the attributes listed below in Fig 3-1 
   are only used with specific <code class="att">Type</code> attribute values, 
   so we will look at the <code class="att">Type</code> attribute before saying 
   anything more about the other attributes.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 3-1:</strong> INPUT element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="9"> </th><th>ELEMENT/Attribute</th><th>Frequency</th>
        <th rowspan="9"> </th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">INPUT</code></td><td class="num">1,008,545</td><td>   <code class="att">Border</code></td><td class="num">172,843</td>
        <td>   <code class="att">Vspace</code></td><td class="num">8,358</td></tr>
   <tr class="r2"><td>   <code class="att">Type</code></td><td class="num">1,005,152</td><td>   <code class="att">Checked</code></td><td class="num">135,049</td>
        <td>   <code class="att">Autocomplete</code></td><td class="num">5,053</td></tr>
   <tr class="r1"><td>   <code class="att">Name</code></td><td class="num">990,058</td><td>   <code class="att">Width</code></td><td class="num">120,420</td>
        <td>   <code class="att">Readonly</code></td><td class="num">3,936</td></tr>
   <tr class="r2"><td>   <code class="att">Value</code></td><td class="num">947,403</td><td>   <code class="att">Height</code></td><td class="num">119,902</td>
        <td>   <code class="att">Language</code></td><td class="num">3,314</td></tr>
   <tr class="r1"><td>   <code class="att">Size</code></td><td class="num">656,354</td><td>   <code class="att">Align</code></td><td class="num">70,163</td>
        <td>   <code class="att">Valign</code></td><td class="num">3,184</td></tr>
   <tr class="r2"><td>   <code class="att">Src</code></td><td class="num">335,990</td><td>   <code class="att">Accesskey</code></td><td class="num">35,501</td>
        <td>   <code class="att">Disabled</code></td><td class="num">2,688</td></tr>
   <tr class="r1"><td>   <code class="att">Maxlength</code></td><td class="num">329,415</td><td>   <code class="att">Tabindex</code></td><td class="num">34,725</td>
        <td>   <code class="att">Dir</code></td><td class="num">1,892</td></tr>
   <tr class="r2"><td>   <code class="att">Alt</code></td><td class="num">213,924</td><td>   <code class="att">Hspace</code></td><td class="num">10,193</td>
        <td>   <code class="att">Required</code></td><td class="num">929</td></tr>
</table>

<h3>The <code class="att">Type</code> attribute</h3>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 3-2:</strong> 
   Top INPUT Type attribute usage<br />

[Please also see the <a href="inputtypelist-url.htm">complete 
   frequency table</a>.]</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th><th rowspan="9"></th><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">text</span></td><td class="num">806,926</td><td><span class="string">checkbox</span></td><td class="num">81,260</td></tr>
   <tr class="r2"><td><span class="string">hidden</span></td><td class="num">733,126</td><td><span class="string">button</span></td><td class="num">71,031</td></tr>
   <tr class="r1"><td><span class="string">submit</span></td><td class="num">568,445</td><td><span class="string">reset</span></td><td class="num">17,417</td></tr>
   <tr class="r2"><td><span class="string">image</span></td><td class="num">337,286</td><td><span class="string">search</span></td><td class="num">1,102</td></tr>
   <tr class="r1"><td><span class="string">password</span></td><td class="num">167,098</td><td><span class="string">textbox</span></td><td class="num">864</td></tr>
   <tr class="r2"><td><span class="string">radio</span></td><td class="num">159,626</td><td><span class="string">input</span></td><td class="num">796</td></tr>
   <tr class="r1"><td><span class="string">empty</span></td><td class="num">110,971</td><td><span class="string">file</span></td><td class="num">791</td></tr>
</table>

<p>Now, our discussion of the <code class="elem">INPUT</code> element gets more interesting:</p>

<ul>
    <li>The <span class="string">&quot;empty&quot;</span> value indicates that an 
        <code class="elem">INPUT</code> element did not have a <code class="att">Type</code> 
        attribute at all. In such situations, a widget is interpreted as 
        <code class="att">Type</code>=<span class="string">&quot;Text&quot;</span>. In all, 79,050 
        URLs used <code class="elem">INPUT</code> elements where none of them 
        specified a <code class="att">Type</code> attribute.</li>
    <li>The most popular attribute value is <code class="att">Type</code>=<span class="string">&quot;Text&quot;</span>, but <span class="string">&quot;Hidden&quot;</span> 
        is also very popular.</li>
    <li>The next most popular <code class="att">Type</code> values are 
        <span class="string">&quot;Submit&quot;</span> and then <span class="string">&quot;Image&quot;</span>. 
        Because <span class="string">&quot;Image&quot;</span> is a type of submittal, and 
        each of the two mentioned will often be used to the exclusion of the other, looking at their 
        combined totals shows that submittal is the most popular function of forms 
        (more popular than <span class="string">&quot;Text&quot;</span>). This is actually 
        an expected result.</li>
    <li><code class="att">Type</code>=<span class="string">&quot;Image&quot;</span> has a 
        much higher representation than expected, with up to one-third of <code class="elem">INPUT</code> 
        instances using graphical submit buttons instead of the default 
        <span class="string">&quot;Submit&quot;</span> widget.</li>
    <li><code class="att">Type</code>=<span class="string">&quot;Image&quot;</span> related 
        attributes: <code class="att">Width</code> and <code class="att">Hspace</code> 
        (horizontal dimensions) have just a slight edge over <code class="att">Height</code> 
        and <code class="att">Vspace</code> (vertical dimensions), the same as in the case of the <code class="elem">IMG</code> element.</li>
    <li><code class="att">Type</code>=<span class="string">&quot;Image&quot;</span>: The 
        <code class="att">Src</code> attribute is used 335,990 times, compared 
        with 337,286 times for <code class="att">Type</code>=<span class="string">&quot;Image&quot;</span>—  a difference of 1,296 URLs not having any <code class="att">Src</code>. 
        This does not make a lot of sense and might warrant further investigation.</li>
    <li>In the early days of forms, most <span class="string">&quot;Submit&quot;</span> 
        buttons were paired with a <span class="string">&quot;Reset&quot;</span> 
        button, but today, that seems to be passé. By comparison, 
        <span class="string">&quot;Reset&quot;</span> is rarely encountered now.</li>
    <li>The <code class="att">Size</code> and <code class="att">Maxlength</code> 
        attributes (used with <code class="att">Type</code>=<span class="string">&quot;Text&quot;</span>) 
        are both quite popular overall, but <code class="att">Size</code> is about 
        twice as popular as <code class="att">Maxlength</code>.</li>
    <li>The exclusive choice widget, <code class="att">Type</code>=<span class="string">&quot;Radio&quot;</span>, 
        is twice as popular as the multi-choice 
        <code class="att">Type</code>=<span class="string">&quot;Checkbox&quot;</span> widget.</li>
    <li>The invalid sequence <code class="att">Type</code>=<span class="string">&quot;Input&quot;</span> 
        occurs more often than <code class="att">Type</code>=<span class="string">&quot;File&quot;</span>. 
        On the surface, this seems unusual, but this outcome may be quite reasonable. 
        The <code class="att">Type</code>=<span class="string">&quot;File&quot;</span> sequence is often 
        used with more complex Web application pages that are not presented as often 
        on the main Surface/Home pages that compose the majority of MAMA&#39;s URL set.</li>
</ul>

<h3>The <code class="att">Size</code> attribute</h3>
<p>The popular values for the <code class="att">Size</code> attribute (used with 
   <code class="att">Type</code>=<span class="string">&quot;Text&quot;</span> boxes) 
   definitely show a pattern. Authors really like multiples of 5, although the 
   most popular explicit value - <span class="string">&quot;20&quot;</span> - is also the 
   default size used in most browsers.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 3-3:</strong> 
   Input Size values<br />

[Also see the <a href="inputsizelist-url.htm">full frequency table</a>.]</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">20</span></td><td class="num">137,644</td></tr>
   <tr class="r2"><td><span class="string">15</span></td><td class="num">114,750</td></tr>
   <tr class="r1"><td><span class="string">10</span></td><td class="num">109,592</td></tr>
   <tr class="r2"><td><span class="string">12</span></td><td class="num">54,690</td></tr>
   <tr class="r1"><td><span class="string">25</span></td><td class="num">44,623</td></tr>
   <tr class="r2"><td><span class="string">30</span></td><td class="num">34,639</td></tr>
</table>

<h2 id="select">The <code class="elem">SELECT</code> element</h2>
<p>Aside from the overloaded <code class="elem">INPUT</code> element, the 
   <code class="elem">SELECT</code> element is the next most popular of the form 
   widgets. The use of the <code class="att">Multiple</code> attribute was much lower than I 
   expected; it only just beats out <code class="att">Disabled</code> for last 
   place with usage in 0.64% of all <code class="elem">SELECT</code> lists. The 
   <code class="att">Name</code> attribute is used with most <code class="elem">SELECT</code> 
   elements (96.48%), and <code class="att">Name</code> dominates over the 
   <code class="att">Id</code> attribute again by a 4-to-1 ratio.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 4-1:</strong> SELECT element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="5"> </th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">SELECT</code></td><td class="num">285,362</td><td>   <code class="att">Tabindex</code></td><td class="num">5,282</td></tr>
   <tr class="r2"><td>   <code class="att">Name</code></td><td class="num">275,323</td><td>   <code class="att">Multiple</code></td><td class="num">1,826</td></tr>
   <tr class="r1"><td>   <code class="att">Size</code></td><td class="num">70,201</td><td>   <code class="att">Disabled</code></td><td class="num">1,515</td></tr>
   <tr class="r2"><td>   <code class="att">Id</code></td><td class="num">68,087</td><td> </td><td> </td></tr>
</table>

<h3>The <code class="att">Size</code> attribute</h3>
<p>The <code class="att">Size</code> attribute is only used in ~25% of all 
   <code class="elem">SELECT</code> lists, but as you can see from the frequency 
   data for the attribute value, the size that is specified the most is 1 (93.26% 
   of the time). Since this the typical default size in most browsers, the value 
   is probably automatically inserted as such by many Web page editors. Also of 
   note is that the legal <code class="att">Size</code>=<span class="string">&quot;2&quot;</span> 
   value does not even make the top 10 values, whereas some questionable values 
   like <span class="string">&quot;0&quot;</span> and <span class="string">&quot;-1&quot;</span> rank higher.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 4-2:</strong> SELECT Size frequency<br />

[See also the full 
   <a href="selectsizelist-url.htm">frequency table</a>.]</caption>
   <tr valign="bottom"><th>Attribute value</th><th>Frequency</th><th rowspan="6"> </th><th>Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">1</span></td><td class="num">65,472</td><td><span class="string">0</span></td><td class="num">576</td></tr>
   <tr class="r2"><td><span class="string">5</span></td><td class="num">1,164</td><td><span class="string">10</span></td><td class="num">510</td></tr>
   <tr class="r1"><td><span class="string">3</span></td><td class="num">869</td><td><span class="string">8</span></td><td class="num">417</td></tr>
   <tr class="r2"><td><span class="string">4</span></td><td class="num">861</td><td><span class="string">7</span></td><td class="num">323</td></tr>
   <tr class="r1"><td><span class="string">6</span></td><td class="num">725</td><td><span class="string">-1</span></td><td class="num">246</td></tr>
</table>

<h2 id="optgroup">The <code class="elem">OPTGROUP</code> element</h2>
<p><code class="elem">OPTGROUP</code> was introduced in HTML 4.0, and it still 
   has not gained a lot of traction—it was found to be the least popular of any 
   of the form-related elements. When it <strong>is</strong> used, it almost 
   always uses the <code class="att">Label</code> attribute. The other attribute 
   specifically defined for this element, <code class="att">Disabled</code>, 
   was only detected a paltry 4 times.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 5-1:</strong> OPTGROUP element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">OPTGROUP</code></td><td class="num">5,348</td></tr>
   <tr class="r2"><td>   <code class="att">Label</code></td><td class="num">5,327</td></tr>
   <tr class="r1"><td>   <code class="att">Disabled</code></td><td class="num">4</td></tr>
</table>

<h2 id="option">The <code class="elem">OPTION</code> element</h2>
<p>There are over 3,000 URLs in MAMA that use the <code class="elem">SELECT</code> 
   element but not the <code class="elem">OPTION</code> element. It is possible 
   that these cases are creating the <code class="elem">OPTION</code> elements 
   for these lists dynamically using <code class="elem">SCRIPT</code>, but that 
   would need some further scrutiny. Almost 97% of all URLs having <code class="elem">OPTION</code> 
   elements also use a <code class="att">Value</code> attribute with at least 
   one of them. The <code class="att">Label</code> and <code class="att">Disabled</code> 
   attributes are (comparatively) rarely used, proving to be only slightly more 
   popular than the <code class="att">Name</code> attribute.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 6-1:</strong> OPTION element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="5"> </th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">OPTION</code></td><td class="num">281,923</td><td>   <code class="att">Label</code></td><td class="num">1,735</td></tr>
   <tr class="r2"><td>   <code class="att">Value</code></td><td class="num">273,138</td><td>   <code class="att">Disabled</code></td><td class="num">1,325</td></tr>
   <tr class="r1"><td>   <code class="att">Selected</code></td><td class="num">163,967</td><td>   <code class="att">Name</code></td><td class="num">1,017</td></tr>
   <tr class="r2"><td>   <code class="att">Id</code></td><td class="num">4,615</td><td> </td><td> </td></tr>
</table>

<h2 id="label">The <code class="elem">LABEL</code> element</h2>
<p>It is not necessary for a <code class="elem">LABEL</code> element to have a 
   <code class="att">For</code> attribute in order to directly associate it with 
   another element, but most authors do so (88% of the time). The representation 
   of the <code class="att">Accesskey</code> attribute seems quite low, but that 
   is a little deceiving; only the <code class="elem">A</code> and 
   <code class="elem">INPUT</code> elements had higher numbers for the attribute.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 7-1:</strong> LABEL element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">LABEL</code></td><td class="num">159,631</td></tr>
   <tr class="r2"><td>   <code class="att">For</code></td><td class="num">140,576</td></tr>
   <tr class="r1"><td>   <code class="att">Accesskey</code></td><td class="num">5,330</td></tr>
</table>

<h2 id="textarea">The <code class="elem">TEXTAREA</code> element</h2>
<p>I found it rather surprising that <code class="elem">TEXTAREA</code> was used 
   in only 3.50% of all pages using the <code class="elem">FORM</code> element. 
   Perhaps the dominance of top-level pages in MAMA&#39;s URL set had something to 
   do with the usage numbers. The <code class="elem">TEXTAREA</code> element is often a 
   workhorse for more serious applications than what you would likely 
   find on a glossy/glitzy home page. The <code class="att">Rows</code> attribute 
   has a slight edge over the <code class="att">Cols</code> attribute in usage, 
   but both attributes are found at the same time in 31,046 URLs. In all, 3,136 URLs used 
   <code class="elem">TEXTAREA</code> elements without any <code class="att">Rows</code> 
   or <code class="att">Cols</code> attributes (less than 10% of all URLs using 
   <code class="elem">TEXTAREA</code>), leaving the browser to use the default 
   dimensions. Note that the <code class="att">Name</code> attribute maintains 
   its dominance again over the <code class="att">Id</code> attribute by a wide margin.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 8-1:</strong> TEXTAREA element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="6"> </th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">TEXTAREA</code></td><td class="num">36,410</td><td>   <code class="att">Wrap</code></td><td class="num">7,848</td></tr>
   <tr class="r2"><td>   <code class="att">Rows</code></td><td class="num">32,754</td><td>   <code class="att">Readonly</code></td><td class="num">1,668</td></tr>
   <tr class="r1"><td>   <code class="att">Name</code></td><td class="num">32,500</td><td>   <code class="att">Tabindex</code></td><td class="num">1,570</td></tr>
   <tr class="r2"><td>   <code class="att">Cols</code></td><td class="num">31,566</td><td>   <code class="att">Accesskey</code></td><td class="num">91</td></tr>
   <tr class="r1"><td>   <code class="att">Id</code></td><td class="num">9,183</td><td>   <code class="att">Disabled</code></td><td class="num">79</td></tr>
</table>

<h3><code class="elem">TEXTAREA</code> <code class="att">Wrap</code> attribute values</h3>
<p>The values for this attribute have never been well documented. In addition to 
   a number of other values, there are three combinations that seem to be an 
   attempt to control the same behavior of a <code class="elem">TEXTAREA</code> 
   box: <span class="string">&quot;Virtual&quot;</span>/<span class="string">&quot;Physical&quot;</span>, 
   <span class="string">&quot;Soft&quot;</span>/<span class="string">&quot;Hard&quot;</span> and 
   <span class="string">&quot;Off&quot;</span>/<span class="string">&quot;On&quot;</span>. 
   <span class="string">&quot;Virtual&quot;</span>, <span class="string">&quot;Soft&quot;</span> 
   and <span class="string">&quot;Off&quot;</span> all seem to be much more popular than 
   their corresponding opposite attribute value. HTML5&#39;s 
   <a href="http://www.whatwg.org/specs/web-forms/current-work/">Web Forms 2.0</a> 
   codifies the <span class="string">&quot;Soft&quot;</span>/<span class="string">&quot;Hard&quot;</span> 
   values, but as can be seen, these are not the values that are the most widely used.</p> 

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 8-2:</strong> 
   Popular TEXTAREA Wrap values<br />

[Please also see the <a href="textareawraplist-url.htm">complete 
   frequency table</a>.]</caption>
   <tr valign="bottom"><th>Wrap Attribute value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">virtual</span></td><td class="num">3,608</td></tr>
   <tr class="r2"><td><span class="string">physical</span></td><td class="num">1,886</td></tr>
   <tr class="r1"><td><span class="string">soft</span></td><td class="num">1,299</td></tr>
   <tr class="r2"><td><span class="string">hard</span></td><td class="num">376</td></tr>
   <tr class="r1"><td><span class="string">off</span></td><td class="num">252</td></tr>
   <tr class="r2"><td><span class="string">on</span></td><td class="num">201</td></tr>
</table>

<h2 id="legend">The <code class="elem">LEGEND</code> element</h2>
<p>The &quot;bounding box&quot; visual effect that the <code class="elem">FIELDSET</code> 
   element creates is usually paired with a <code class="elem">LEGEND</code> in 
   traditional user interface usage, so it is odd that only 57.68% of 
   <code class="elem">FIELDSET</code>s have a <code class="elem">LEGEND</code> 
   element. Additionally, very few authors subsequently use the <code class="att">Align</code> 
   or <code class="att">Accesskey</code> attributes.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 9-1:</strong> LEGEND element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">LEGEND</code></td><td class="num">18,269</td></tr>
   <tr class="r2"><td>   <code class="att">Align</code></td><td class="num">546</td></tr>
   <tr class="r1"><td>   <code class="att">Accesskey</code></td><td class="num">91</td></tr>
</table>

<h2 id="button">The <code class="elem">BUTTON</code> element</h2>
<p>This element is rarely used in comparison to the <code class="elem">INPUT</code> 
   <code class="att">Type</code> attribute values that it subsumes. The <code class="elem">INPUT</code> 
   <code class="att">Type</code>=<span class="string">Submit</span>/<span class="string">Reset</span>/<span class="string">Image</span> 
   are still the preferred method for accomplishing their respective tasks. Even 
   so, this forms latecomer still has some respectable numbers given its relatively 
   recent arrival. Notice that the <code class="att">Name</code> to 
   <code class="att">Id</code> ratio is much closer than with other, older forms widgets.</p>

<p>Given that the <code class="att">Type</code> attribute has a default value 
   of <span class="string">&quot;Submit&quot;</span>, and submittal is the top function from the 
   <code class="elem">INPUT</code> element that <code class="elem">BUTTON</code> 
   replicates, it seems a little peculiar that having an explicit <code class="att">Type</code> 
   attribute has fairly high usage (~80%). MAMA did not track the <code class="att">Type</code> 
   attribute for this element the way it did for the <code class="att">Type</code> 
   attribute for <code class="elem">INPUT</code>, but it is expected that 
   <code class="att">Type</code>=<span class="string">&quot;Submit&quot;</span> would be 
   the dominant value here as well.</p>

<table cellspacing="0" cellpadding="3">
<caption style="caption-side: bottom" class="comment"><strong>Fig 10-1:</strong> BUTTON element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="5"> </th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">BUTTON</code></td><td class="num">11,455</td><td>   <code class="att">Value</code></td><td class="num">2,271</td></tr>
   <tr class="r2"><td>   <code class="att">Type</code></td><td class="num">9,079</td><td>   <code class="att">Tabindex</code></td><td class="num">464</td></tr>
   <tr class="r1"><td>   <code class="att">Name</code></td><td class="num">4,246</td><td>   <code class="att">Disabled</code></td><td class="num">59</td></tr>
   <tr class="r2"><td>   <code class="att">Id</code></td><td class="num">3,387</td><td> </td><td> </td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-images-elements-and-formats/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Images - elements and formats</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-plug-ins/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Plug-ins</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
