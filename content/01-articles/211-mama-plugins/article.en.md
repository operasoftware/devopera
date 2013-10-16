Title: MAMA: Plug-ins
----
Date: 2008-11-28 10:37:05
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-forms/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Forms</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-tables/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Tables</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#param">PARAM</a></li>
    <li><a href="#applet">APPLET</a></li>
    <li><a href="#embed">EMBED</a></li>
    <li><a href="#object">OBJECT</a></li>
    <li><a href="#flashjava">Flash and Java usage</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>The Web has multiple elements to handle plug-ins because of simple evolution. 
   At first, there was no standardized way to use plug-ins, so solutions arose 
   haphazardly&#8212;<code class="elem">APPLET</code>, <code class="elem">EMBED</code> 
   and <code class="elem">PARAM</code>. The standards process produced a cohesive 
   solution in the for of the <code class="elem">OBJECT</code> element, but authoring inertia 
   seems to indicate that <code class="elem">APPLET</code> and <code class="elem">EMBED</code> 
   are not going anywhere. Rather than the <code class="elem">OBJECT</code> element 
   being used <strong>instead of</strong> <code class="elem">EMBED</code>, for 
   instance, the majority of <code class="elem">OBJECT</code> tags are used 
   <strong>in conjunction with</strong> <code class="elem">EMBED</code> elements. 
   In all, 503,783 URLs use both <code class="elem">EMBED</code> and <code class="elem">OBJECT</code> 
   elements (94.46% of all <code class="elem">OBJECT</code> and 92.31% of all 
   <code class="elem">EMBED</code> instances).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 1-1:</strong> Plug-in-related elements</caption>
   <tr valign="bottom"><th>ELEMENT</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">PARAM</code></td><td class="num">576,702</td></tr>
   <tr class="r2"><td><code class="elem">OBJECT</code></td><td class="num">533,343</td></tr>
   <tr class="r1"><td><code class="elem">EMBED</code></td><td class="num">545,734</td></tr>
   <tr class="r2"><td><code class="elem">APPLET</code></td><td class="num">52,160</td></tr>
</table>

<h2 id="param"><code class="elem">PARAM</code> element</h2>
<p>This element can be a child element of both the <code class="elem">APPLET</code> 
   and <code class="elem">OBJECT</code> elements, allowing parameters to be passed 
   to a plug-in. Very few documents use <code class="elem">APPLET</code> and
   <code class="elem">OBJECT</code> without a <code class="elem">PARAM</code>; 
   <code class="elem">APPLET</code> and <code class="elem">OBJECT</code> were 
   used in a combined 580,031 cases, and <code class="elem">PARAM</code> was used 
   in 576,702 of those (99.43%). The <code class="att">Value</code> and 
   <code class="att">Name</code> attributes are used in almost every instance 
   where <code class="elem">PARAM</code> was found. There is no limit to the number 
   of parameters that can be passed to a plug-in, but authors typically refrain 
   from using them to excess. The average number of <code class="elem">PARAM</code> 
   elements in a document when <code class="elem">PARAM</code> is used is 8.6. 
   However, the most popular quantity of <code class="elem">PARAM</code> elements is 2&#8212;probably related to Flash usage, where the common <code class="elem">OBJECT</code> 
   syntax uses 2 <code class="elem">PARAM</code>s. A <a href="paramqty-url.htm">full 
   frequency table</a> of <code class="elem">PARAM</code> quantities is available 
   for your viewing pleasure.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> PARAM element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">PARAM</code></td><td class="num">576,702</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Value</code></td><td class="num">576,554</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">576,508</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Valuetype</code></td><td class="num">14,489</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Ref</code></td><td class="num">951</td></tr>
</table>

<h3>URLs using the most <code class="elem">PARAM</code> elements</h3>
<p>The maximum number of <code class="elem">PARAM</code> elements detected in a 
   single document was a dizzying 4,025 (!!). These extremes for <code class="elem">PARAM</code> 
   usage appear to vary over time. Jackandsusie.com, as originally analyzed, had 4,025 
   <code class="elem">PARAM</code> elements but at the time of writing it had 2,087. 
   The next highest value detected (not listed below) had almost no <code class="elem">PARAM</code> 
   elements at the time of writing. Three of the four extreme <code class="elem">PARAM</code> 
   usages listed were in conjunction with the <code class="elem">APPLET</code> element. 
   (Really, there <strong>are</strong> easier ways to create dynamic button effects and 
   flashy scrollers!)</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> URLs with the most detected PARAM elements</caption>
   <tr valign="bottom"><th>URL</th><th>Quantity<br />PARAM<br />Elements</th></tr>
   <tr class="r1"><td><a href="http://www.jackandsusie.com/">http://www.jackandsusie.com/</a></td><td class="num">4,025</td></tr>
   <tr class="r2"><td><a href="http://cotidianasvistas.blogspot.com/">http://cotidianasvistas.blogspot.com/</a></td><td class="num">1,320</td></tr>
   <tr class="r1"><td><a href="http://www.ocracokeisland.com/index.htm">http://www.ocracokeisland.com/index.htm</a></td><td class="num">1,150</td></tr>
   <tr class="r2"><td><a href="http://www.selectconsult.ro/">http://www.selectconsult.ro/</a></td><td class="num">1,022</td></tr>
</table>

<h3>The <code class="att">Name</code> attribute</h3>
<p>The most popular values here are the top two, at more than 2-to-1 over any 
   other values. These values, <span class="string">&quot;movie&quot;</span> and 
   <span class="string">&quot;quality&quot;</span>, are both related to Flash usage.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-3:</strong> 
   Top PARAM Name values<br />[Please also see the <a href="paramnamelist-url.htm">full frequency table</a>.]</caption>
   <tr valign="bottom"><th>Name value</th><th>Frequency</th>
        <th rowspan="7">&#xA0;</th><th>Name value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">movie</span></td><td class="num">529,950</td><td><span class="string">loop</span></td><td class="num">74,815</td></tr>
   <tr class="r2"><td><span class="string">quality</span></td><td class="num">503,365</td><td><span class="string">scale</span></td><td class="num">60,251</td></tr>
   <tr class="r1"><td><span class="string">bgcolor</span></td><td class="num">227,371</td><td><span class="string">play</span></td><td class="num">43,362</td></tr>
   <tr class="r2"><td><span class="string">wmode</span></td><td class="num">119,030</td><td><span class="string">flashvars</span></td><td class="num">38,759</td></tr>
   <tr class="r1"><td><span class="string">allowscriptaccess</span></td><td class="num">94,394</td><td><span class="string">base</span></td><td class="num">33,225</td></tr>
   <tr class="r2"><td><span class="string">menu</span></td><td class="num">80,290</td><td><span class="string">salign</span></td><td class="num">31,647</td></tr>
</table>

<h2 id="applet"><code class="elem">APPLET</code> element</h2>
<p>This element is used to embed Java Applets in a document. When Applets are in 
   use, the average quantity detected was 2.7, and the most popular number of 
   Applets per document was 1. Judging by their overwhelming popularity, it appears 
   that authors treat <code class="att">Code</code>, <code class="att">Height</code>, 
   and <code class="att">Width</code> as required attributes. A <a href="appletqty-url.htm">full 
   frequency table</a> of <code class="elem">APPLET</code> quantities is on hand.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> APPLET element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th>
        <th rowspan="8">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">APPLET</code></td><td class="num">52,160</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">6,558</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Code</code></td><td class="num">52,137</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Alt</code></td><td class="num">3,874</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">52,101</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Hspace</code></td><td class="num">2,284</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">52,097</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Vspace</code></td><td class="num">1,676</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Codebase</code></td><td class="num">27,661</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Mayscript</code></td><td class="num">1,417</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Archive</code></td><td class="num">10,706</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Viewastext</code></td><td class="num">801</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">10,578</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3>URLs using the most <code class="elem">APPLET</code> elements</h3>
<p>Some URLs use large numbers of Java applets, often for disappointingly 
   little return (all the URLs listed below use Java to create animated push 
   button effects). The maximum number of <code class="elem">APPLET</code> 
   elements detected by MAMA was 82. Other documents also used 
   similarly high numbers of applets, with several URLs registering quantities 
   above 50 for a single URL.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-2:</strong> URLs with the most detected APPLET elements</caption>
   <tr valign="bottom"><th>URL</th><th>Quantity<br />APPLET<br />Elements</th></tr>
   <tr class="r1"><td>http://www.ez2.net/trojanforce/index.htm (URL no longer active)</td><td class="num">82</td></tr>
   <tr class="r2"><td><a href="http://www.televisioninternet.com/">http://www.televisioninternet.com/</a></td><td class="num">79</td></tr>
   <tr class="r1"><td><a href="http://www.kilowattsoftware.com/glitterWarePageIE.htm">http://www.kilowattsoftware.com/glitterWarePageIE.htm</a></td><td class="num">73</td></tr>
   <tr class="r2"><td><a href="http://laramsfreakworks.homestead.com/">http://laramsfreakworks.homestead.com/</a></td><td class="num">66</td></tr>
</table>

<h2 id="embed"><code class="elem">EMBED</code> element</h2>
<p>This element is the <strong>outdated</strong> method to include inline plug-in 
   content in a document. Its use has been officially supplanted by the 
   <code class="elem">OBJECT</code> element in the standards, but <code class="elem">OBJECT</code> 
   has not quite overtaken <code class="elem">EMBED</code> in usage numbers 
   (<code class="elem">EMBED</code> is still slightly more popular than 
   <code class="elem">OBJECT</code>). Additionally, most 
   cases indicate that <code class="elem">EMBED</code> and <code class="elem">OBJECT</code> 
   are usually used together (over 90% of URLs that use <code class="elem">EMBED</code> 
   also use <code class="elem">OBJECT</code>). Similar to the <code class="elem">APPLET</code> 
   element, there are 3 attributes that are used in almost every case&#8212;one to 
   specify the URL of the plug-in content (<code class="att">Src</code> in this 
   case), and two others for the content&#39;s dimensions (<code class="att">Height</code> 
   and <code class="att">Width</code>). Also very widely used are the <code class="att">Type</code>, 
   <code class="att">Pluginspage</code> and <code class="att">Quality</code> attributes. 
   The average number of <code class="elem">EMBED</code> elements in a document when it 
   is used is 1.7, with the most popular <code class="elem">EMBED</code> quantity being 
   1. A <a href="embedqty-url.htm">full frequency table</a> of <code class="elem">EMBED</code> 
   quantities is available.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> EMBED element/attribute usage<br />[Please also see the 
        <a href="embedattribs.htm">full frequency table</a>]</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="10">&#xA0;</th>
                        <th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">EMBED</code></td><td class="num">545,734</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">135,043</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Src</code></td><td class="num">545,257</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Wmode</code></td><td class="num">84,745</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">537,814</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Allowscriptaccess</code></td><td class="num">75,118</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">537,448</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Loop</code></td><td class="num">65,530</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">510,242</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Menu</code></td><td class="num">50,029</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Pluginspage</code></td><td class="num">491,348</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Scale</code></td><td class="num">40,412</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Quality</code></td><td class="num">484,736</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Play</code></td><td class="num">22,271</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">194,952</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Flashvars</code></td><td class="num">19,612</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">138,809</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Autostart</code></td><td class="num">19,301</td></tr>
</table>

<h3>URLs using the most <code class="elem">EMBED</code> elements</h3>
<p>The maximum number of <code class="elem">EMBED</code> elements that MAMA found 
   was 186, but the usage in that case is questionable: all the <code class="elem">EMBED</code>s 
   in that URL have dimensions, but no <code class="att">Src</code> attribute, so 
   this example does not represent the element in a realistic fashion. The first &quot;legitimate&quot; 
   maximum detected used 113 <code class="elem">EMBED</code> elements. This and the 
   other URLs mentioned below were all uses of multiple Flash objects.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-2:</strong> URLs with the most detected EMBED elements</caption>
   <tr valign="bottom"><th>URL</th><th>Quantity<br />EMBED<br />Elements</th></tr>
   <tr class="r1"><td><a href="http://k2.secure-banking.com/1102a.cfm">http://k2.secure-banking.com/1102a.cfm</a></td><td class="num">186</td></tr>
   <tr class="r2"><td>http://www.donanimhaber.com/index.asp (URL no longer active)</td><td class="num">113</td></tr>
   <tr class="r1"><td><a href="http://www.sanpetersburgo.com/idiomam.htm">http://www.sanpetersburgo.com/idiomam.htm</a></td><td class="num">112</td></tr>
   <tr class="r2"><td>http://www.xtec.es/aulanet/ud/ciencies/taula/index.htm (URL no longer active)</td><td class="num">110</td></tr>
</table>

<h2 id="object"><code class="elem">OBJECT</code> element</h2>
<p>To wrap up the plug-in-related elements, we come to the <code class="elem">OBJECT</code> 
   element. It was introduced in HTML 4.0 to accomplish all of the tasks associated with 
   the <code class="elem">APPLET</code> and <code class="elem">EMBED</code> elements, 
   as well as assuming other unrelated duties such as hosting inline images. 
   Dimensions and paths to the plug-in content are again the dominant attributes. 
   The most popular number of <code class="elem">OBJECT</code> elements used is 1, 
   and the average number of <code class="elem">OBJECT</code> elements when they are 
   used is 1.7. As ever, MAMA has a <a href="objectqty-url.htm">full frequency table</a> 
   of <code class="elem">OBJECT</code> quantities for your perusal.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> OBJECT element/attribute usage</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="11">&#xA0;</th>
       <th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">OBJECT</code></td><td class="num">533,343</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Hspace</code></td><td class="num">8,839</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">528,107</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Viewastext</code></td><td class="num">6,190</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">527,771</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Standby</code></td><td class="num">2,261</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Classid</code></td><td class="num">497,697</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Alt</code></td><td class="num">1,480</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Codebase</code></td><td class="num">493,980</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Wmode</code></td><td class="num">941</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">127,294</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Allowscriptaccess</code></td><td class="num">817</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">27,257</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Allownetworking</code></td><td class="num">789</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Data</code></td><td class="num">24,261</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Namo_flashbutton</code></td><td class="num">513</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">17,633</td><td>&#xA0;&#xA0;&#xA0;<code class="att">Bgcolor</code></td><td class="num">500</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;<code class="att">Vspace</code></td><td class="num">8,900</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3>URLs using the most <code class="elem">OBJECT</code> elements</h3>
<p>The maximum number of <code class="elem">OBJECT</code>s that MAMA detected 
   was 1,554; although the count from that URL at the time of writing stands 
   much lower at 924, it is still far and away the highest <code class="elem">OBJECT</code> 
   frequency from any URL that MAMA looked at. Unfortunately, all of the <code class="elem">OBJECT</code> 
   elements in this case appear to do nothing. Every one of the 924 <code class="elem">OBJECT</code> 
   instances at that URL carry <code class="att">Height</code> and <code class="att">Width</code> 
   only but no content. For more &quot;reasonable&quot; maximum numbers of <code class="elem">OBJECT</code> 
   elements, we proceed to the next URLs on the list which have ~100-200 <code class="elem">OBJECT</code>s 
   each. These instances all use Flash.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> URLs with the most detected OBJECT elements</caption>
   <tr valign="bottom"><th>URL</th><th>Quantity<br />OBJECT<br />Elements</th></tr>
   <tr class="r1"><td><a href="http://www.jimcoservices.com/">http://www.jimcoservices.com/</a></td><td class="num">1554</td></tr>
   <tr class="r2"><td>http://www.loiclemeur.com/france/podcasting/ (URL no longer active)</td><td class="num">191</td></tr>
   <tr class="r1"><td><a href="http://www.sanpetersburgo.com/idiomam.htm">http://www.sanpetersburgo.com/idiomam.htm</a></td><td class="num">112</td></tr>
   <tr class="r2"><td>http://www.xtec.es/aulanet/ud/ciencies/taula/index.htm (URL no longer active)</td><td class="num">110</td></tr>
</table>

<h3>The <code class="att">Classid</code> attribute</h3>
<p>A <code class="att">Classid</code> value is a 32-digit hexadecimal string 
   that can be used to uniquely identify a Microsoft Windows ActiveX component 
   for interpreting the content pointed to by the <code class="att">OBJECT</code>. 
   The <code class="att">Classid</code> attribute value was tracked by MAMA to 
   see if anything could be learned from its usage in the real world. Unfortunately, 
   the <a href="classidlist-url.htm">full frequency table</a> is not terribly 
   easy to read; a <code class="att">Classid</code> may be easy to interpret by 
   a computer but humans are another matter entirely. Your favorite search 
   engine can make quick work of deciphering these cryptic strings. The top 
   <code class="att">Classid</code> value detected (by a <strong>HUGE</strong> 
   margin) was the Flash player (<code class="att">Classid</code>: 
   <span class="string">&quot;d27cdb6e-ae6d-11cf-96b8-444553540000&quot;</span>).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-3:</strong> Top Classid attribute values</caption>
   <tr valign="bottom"><th>Classid</th><th>Plugin Type</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">d27cdb6e-ae6d-11cf-96b8-444553540000</span></td><td>Adobe Flash</td><td class="num">500,417</td></tr>
   <tr class="r2"><td><span class="string">22d6f312-b0f6-11d0-94ab-0080c74c7e95</span></td><td>Windows Media Player</td><td class="num">2,704</td></tr>
   <tr class="r1"><td><span class="string">6bf52a52-394a-11d3-b153-00c04f79faa6</span></td><td>Windows Media Player</td><td class="num">1,732</td></tr>
   <tr class="r2"><td><span class="string">02bf25d5-8c17-4b23-bc80-d3488abddc6b</span></td><td>Apple Quicktime</td><td class="num">691</td></tr>
</table>

<h2 id="flashjava">Flash and Java usage</h2>
<p>So far in this document, I have mostly skirted around the issue of what types of 
   plug-ins are in use on the Web, but MAMA did not try to avoid this in its 
   research. In fact it specifically looked for as many manifestations as possible 
   of two widely used plug-ins: Flash and Java.</p> 

<h3>Flash</h3>
<p>MAMA tried to discover evidence of Flash usage in every document it analyzed. 
   It had to resort to looking for a number of different factors, as authors can 
   use Flash in many ways. Its use was detected by looking for one or more of the 
   following components:</p>

<ul>
    <li>Any <code class="elem">PARAM</code> element that contained the substrings 
        <span class="string">&quot;.swf&quot;</span> or <span class="string">&quot;flash&quot;</span></li>
    <li>Any MIME types containing the substring <span class="string">&quot;flash&quot;</span> 
        from <code class="elem">EMBED</code>[<code class="att">Src</code>] and 
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

<p>It should also be noted that MAMA did not explicitly use the <code class="att">Classid</code> 
   attribute to help declare the Flash totals. That does not appear to be a hindrance 
   though. Adding those URLs using the Flash <code class="att">Classid</code> 
   (d27cdb6e-ae6d-11cf-96b8-444553540000) to the Flash tally causes absolutely 
   <strong>no</strong> change to the total. This indicates that checking for the Flash 
   <code class="att">Classid</code> would be a redundant search factor.</p>

<h3>Java</h3>
<p>As with Flash, there were a number of methods MAMA used to detect Java usage. 
   Some of the policies used could be improved upon, but all in all they work 
   rather well. The following criteria were used to judge whether or not Java 
   was being used in a URL and resulted in the detection of 53,688 matches:</p>

<ul>
    <li>Any usage of the <code class="elem">APPLET</code> element</li>
    <li>Any <code class="elem">PARAM</code> element that contained the substrings 
        <span class="string">&quot;.class&quot;</span> or <span class="string">&quot;java&quot;</span></li>
    <li>Any MIME types containing the substring <span class="string">&quot;java&quot;</span> 
        from getting any <code class="elem">OBJECT</code>[<code class="att">Data</code>] URLs</li>
    <li>Any scripting component containing the substring 
        <span class="string">&quot;application/java-vm&quot;</span></li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-forms/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Forms</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-tables/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Tables</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>movie
