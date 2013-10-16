Title: MAMA: BODY structure
----
Date: 2008-11-21 11:04:27
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-head-structure/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: HEAD structure</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-hyperlinks/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Hyperlinks</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#elemattrs">BODY element and attributes</a></li>
    <li><a href="#common">Common and proprietary attributes</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p><code class="elem">BODY</code> ranks as the 4th most popular element overall. Most people would expect 
   this near-ubiquity, but the opening and closing tags for the <code class="elem">BODY</code> 
   element are actually <strong>optional</strong>. A natural result of relaxed 
   specification requirements is decreased usage, and it is interesting to see
   the way HTML evolved&#8212;some other elements such as <code class="elem">LI</code> and 
   <code class="elem">P</code> also have closing tags that were optional, and many 
   authors omit closers for them. However, the <code class="elem">BODY</code> element has 
   always been treated with a bit more sanctity than the other elements with optional 
   components. Every generic HTML authoring template will include the <code class="elem">BODY</code>, 
   and every beginner&#39;s class in HTML will admonish its students if they forget to 
   include a <code class="elem">BODY</code> element.</p>

<h2 id="elemattrs"><code class="elem">BODY</code> element and attributes</h2>
<p>Of the URLs that had a <code class="elem">BODY</code> element, 799,002 of 
   them (23.14%) did not use any attributes. In the remaining group, two-thirds of 
   the URLs used the <code class="att">Bgcolor</code> attribute.</p>

<p><code class="att">Marginheight</code> and 
   <code class="att">Marginwidth</code> are attributes that share a similar 
   purpose and will often be used together. The same can also be said of the 
   <code class="att">Link</code>/<code class="att">Text</code>/<code class="att">Vlink</code>/<code class="att">Alink</code> 
   attributes. This explains the proximities of the attributes in the frequency 
   tables. Strangely, this even holds true for totally invalid attributes such as 
   <code class="att">Vspace</code> and <code class="att">Hspace</code>, which 
   have almost identical usage numbers&#8212;they are used 4,215 and 4,214 times 
   respectively, and 4,107 of those times are in the same document.</p>

<p>We can compare the overall attribute frequency results to Hickson&#39;s 
   <a href="http://code.google.com/webstats/2005-12/element-body.html">Google 
   research</a> and find a high correlation&#8212;except for an odd switch. 
   In Hickson&#39;s URL set research, the margin appearance attributes 
   (<code class="att">Marginheight</code>/<code class="att">Marginwidth</code>) 
   both have higher frequency than the text and link color appearance attributes 
   (<code class="att">Link</code>/<code class="att">Text</code>/<code class="att">Vlink</code>/<code class="att">Alink</code>). 
   In MAMA&#39;s research, the relative popularity of these two groups is reversed; 
   there doesn&#39;t seem to be any obvious explanation for the swap.</p> 
 
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> BODY element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="10">&#xA0;</th>
        <th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">BODY</code></td><td class="num">3,452,907</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Alink</code></td>
        <td class="num">700,028</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">5,478</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">1,769,135</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Background</code></td>
        <td class="num">634,617</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">4,884</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Topmargin</code></td><td class="num">1,111,967</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Rightmargin</code></td>
        <td class="num">177,579</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Vspace</code></td><td class="num">4,215</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Leftmargin</code></td><td class="num">1,055,657</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bottommargin</code></td>
        <td class="num">137,443</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Hspace</code></td><td class="num">4,214</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Link</code></td><td class="num">923,425</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgproperties</code></td>
        <td class="num">51,550</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">4,111</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Vlink</code></td><td class="num">903,271</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Scroll</code></td>
        <td class="num">27,026</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Nosave</code></td><td class="num">3,451</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Text</code></td><td class="num">840,383</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Nof</code></td>
        <td class="num">21,835</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">2,639</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Marginheight</code></td><td class="num">823,090</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Ms_positioning</code></td>
        <td class="num">9,499</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Marginleft</code></td><td class="num">2,292</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Marginwidth</code></td><td class="num">816,162</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Stylesrc</code></td>
        <td class="num">6,707</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Margin</code></td><td class="num">2,119</td></tr>
</table>

<h2 id="common">Common and proprietary attributes</h2>
<p>The attribute list for the <code class="att">BODY</code> element above 
   (Fig 2-1) does not include many of the attributes that Hickson&#39;s study did, 
   namely all of the generic attributes 
   (<a href="http://dev.opera.com/articles/view/mama-common-attributes/#style"><code class="att">Style</code></a>, 
   <a href="http://dev.opera.com/articles/view/mama-common-attributes/#class"><code class="att">Class</code></a>, 
   <a href="http://dev.opera.com/articles/view/mama-common-attributes/#id"><code class="att">Id</code></a>, 
   <a href="http://dev.opera.com/articles/view/mama-common-attributes/#lang"><code class="att">Lang</code></a> and event handlers); those are discussed in 
   other sections. Other semi-popular attributes find a place in this usage list, 
   even though they are not valid by any of the popular markup standards. 
   Attributes such as <code class="att">Ms_positioning</code> and <code class="att">Scroll</code> 
   are MSIE-only browser extensions, while others are created by Web page editors 
   as part of their creation process (such as <code class="att">Nof</code> from 
   Netobjects Fusion and <code class="att">Stylesrc</code> from Microsoft FrontPage).</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-head-structure/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: HEAD structure</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-hyperlinks/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Hyperlinks</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
