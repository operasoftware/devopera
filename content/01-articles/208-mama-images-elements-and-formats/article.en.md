Title: MAMA: Images - elements and formats
----
Date: 2008-11-21 11:05:34
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-phrase-block-list/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Phrase, block, list, and other elements</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-forms/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Forms</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#img">IMG element</a></li>
    <li><a href="#inputsrc">INPUT Type=&quot;image&quot;/Src</a></li>
    <li><a href="#bgattr">Background attribute of BODY, TABLE, TD, and TH elements</a></li>
    <li><a href="#maparea">MAP and AREA</a></li>
    <li><a href="#howmany">How many images were encountered?</a></li>
    <li><a href="#formats">Image formats</a></li>
    <li><a href="#combovenn">Image formats in combination</a></li>
    <li><a href="#other">Other image formats</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Inline images have become an integral part of the Web since they were first 
   introduced in Mosaic 0.1 beta just over 15 years ago. Indeed, the graphical 
   nature of the Web is definitely one of its biggest selling points. It was a 
   natural part of MAMA&#39;s evolution to study image usage&#8212;3,219,487 URLs in the set analyzed used 
   the <code class="elem">IMG</code> element&#8212;that&#39;s 91.74%! Extra 
   scrutiny was given to the most popular image formats in use today: GIF, JPEG, 
   and PNG. Due to some of the limitations MAMA had and the unknown nature of 
   what it might encounter, the image analysis was somewhat conservative. MAMA 
   was designed to download objects serially instead of in parallel. This strategy 
   worked fine for downloading one, two, or several page components at a time, but 
   if this was done for <strong>every</strong> inline image there would have been 
   a serious degradation in MAMA&#39;s per-URL analysis duration. As a result, it only 
   kept track of various image quantities and stayed away from looking at information 
   on image dimension, file size, or other format metadata. MAMA will hopefully do 
   more in the future to detect these pieces of data and other image specification vectors.</p>

<h3>Elements and attributes used to display or control image behavior</h3>
<p>MAMA detected image usage in the expected way&#8212;using the <code class="att">Src</code> 
   attribute of the <code class="elem">IMG</code> element. It also allowed for 
   some of the other popular ways to specify images, but not all of them. For 
   instance, it <strong>did</strong> detect the <code class="att">Background</code> 
   markup attribute used by the 
   <code class="elem">BODY</code>|<code class="elem">TABLE</code>|<code class="elem">TD</code>|<code class="elem">TH</code> 
   elements, as well as the <code class="att">Src</code> attribute of the <code class="elem">INPUT</code> 
   <code class="att">Type</code>=<span class="string">&quot;image&quot;</span> construct. 
   However, MAMA did not try to detect images specified using the 
   <code class="elem">OBJECT</code> element this time, and it has not (yet) looked 
   for images defined using CSS properties such as <code class="prop">&quot;background-image&quot;</code>. 
   In future crawls, attempts will be made to broaden image usage detection.</p>

<h2 id="img">IMG Element</h2>
<p>The <code class="elem">IMG</code>/<code class="att">Src</code> method of specifying 
   an image was obviously going to have very high usage&#8212;and with 91.74% using it, 
   that is indeed the case. Considering the image use rate in another constructive 
   way&#8212;as a percentage of URLs where an image was specified using any MAMA-detectable 
   manner&#8212;the ratio skyrockets. Total image usage occurred in 3,233,208 of MAMA&#39;s URLs, so 
   the percentage for this alternate view is 99.57%! It can be said that when images are 
   specified in a document, at least one of them will almost always be via the 
   <code class="elem">IMG</code>/<code class="att">Src</code> method.</p>

<p>There are some attributes that pair naturally together in the <code class="elem">IMG</code> 
   element, so we should examine how often they occur together. The <code class="att">Height</code> 
   and <code class="att">Width</code> attributes are used together in 2,937,843 cases, 
   indicating a clear authoring preference for explicit specification of <strong>both</strong> 
   aspects of an image&#39;s dimensions. The <code class="att">Hspace</code> and <code class="att">Vspace</code> 
   attributes are used together 354,011 times, with horizontal padding around an image 
   (<code class="att">Hspace</code>), enjoying a significant lead when used solo. An 
   expected pairing between <code class="att">Usemap</code> and <code class="att">Ismap</code>, however, 
   did not materialize in the figures very often (only 18,825 times).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> IMG element/attribute frequency</caption>
    <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="7">&#xA0;</th>
                        <th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="7">&#xA0;</th>
                        <th>ELEMENT/Attribute</th><th>Frequency</th></tr>
    <tr class="r1"><td><code class="elem">IMG</code></td><td class="num">3,219,487</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Align</code></td><td class="num">1,134,698</td>
        <td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Ismap</code></td><td class="num">32,131</td></tr>
    <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Src</code></td><td class="num">3,219,304</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">875,461</td>
        <td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Longdesc</code></td><td class="num">25,413</td></tr>
    <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Width</code></td><td class="num">2,957,808</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Hspace</code></td><td class="num">526,348</td>
        <td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Lowsrc</code></td><td class="num">24,944</td></tr>
    <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Height</code></td><td class="num">2,945,989</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Usemap</code></td><td class="num">447,774</td>
        <td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Loop</code></td><td class="num">4,016</td></tr>
    <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Border</code></td><td class="num">2,810,265</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Vspace</code></td><td class="num">445,580</td>
        <td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Start</code></td><td class="num">2,100</td></tr>
    <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Alt</code></td><td class="num">2,520,939</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Title</code></td><td class="num">367,132</td>
        <td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="inputsrc"><code class="elem">INPUT</code> 
   <code class="att">Type</code>=<span class="string">&quot;image&quot;</span>/<code class="att">Src</code></h2>
<p>The overloaded <code class="elem">INPUT</code> element allows an image to be 
   specified as a graphical submit button using the <code class="att">Src</code> 
   attribute. This form of image embedding has a higher representation than I 
   anticipated, with about one-third of URLs using graphical submit buttons instead 
   of <code class="elem">INPUT</code> <code class="att">Type</code>=<span class="string">&quot;submit&quot;</span>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> INPUT TYPE=&quot;image&quot;/SRC attribute frequency</caption>
    <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
    <tr class="r1"><td><code class="elem">INPUT</code></td><td class="num">1,008,545</td></tr>
    <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Src</code></td><td class="num">337,286</td></tr>
</table>

<h2 id="bgattr"><code class="att">Background</code> attribute of <code class="elem">BODY</code>, 
   <code class="elem">TABLE</code>, <code class="elem">TD</code> and <code class="elem">TH</code> elements</h2>
<p>The role that these early presentational attributes serve is now more effectively 
   filled using CSS, but a surprising number of URLs still use <code class="att">Background</code>. 
   The most popular usage of this type is with the <code class="elem">TD</code> 
   element, where almost 25% of URLs using a <code class="elem">TD</code> element 
   also have the <code class="att">Background</code> attribute.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> Background attribute frequency</caption>
    <tr valign="bottom"><th>ELEMENT[Attribute]</th><th>Element<br />Frequency</th><th>Attribute<br />Frequency</th><th>Percentage</th></tr>
    <tr class="r1"><td><code class="elem">BODY</code>[<code class="att">Background</code>]</td><td class="num">3,452,907</td><td class="num">634,617</td><td class="num">18.38%</td></tr>
    <tr class="r2"><td><code class="elem">TABLE</code>[<code class="att">Background</code>]</td><td class="num">2,894,184</td><td class="num">281,209</td><td class="num">9.72%</td></tr>
    <tr class="r1"><td><code class="elem">TD</code>[<code class="att">Background</code>]</td><td class="num">2,891,972</td><td class="num">714,706</td><td class="num">24.71%</td></tr>
    <tr class="r2"><td><code class="elem">TH</code>[<code class="att">Background</code>]</td><td class="num">148,344</td><td class="num">5,354</td><td class="num">3.61%</td></tr>
</table>

<h2 id="maparea"><code class="elem">MAP</code> and <code class="elem">AREA</code></h2>
<p>These elements defining Client-Side Image Maps (CSIM) naturally pair together, 
   as neither element serves any effective purpose without the other. The numbers 
   certainly bear this out, with 452,944 URLs having <strong>BOTH</strong> 
   <code class="elem">MAP</code> and <code class="elem">AREA</code> elements 
   (~99% of URLs using either). One has to wonder why the few remaining cases 
   that do not use the elements together even exist&#8212;are they just the flotsam 
   of dead markup?</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> MAP element/attribute frequency</caption>
    <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
    <tr class="r1"><td><code class="elem">MAP</code></td><td class="num">457,902</td></tr>
    <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">456,648</td></tr>
    <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Id</code></td><td class="num">58,141</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> AREA element/attribute frequency</caption>
    <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
    <tr class="r1"><td><code class="elem">AREA</code></td><td class="num">453,187</td></tr>
    <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Coords</code></td><td class="num">452,272</td></tr>
    <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Href</code></td><td class="num">450,478</td></tr>
    <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Shape</code></td><td class="num">439,720</td></tr>
    <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Alt</code></td><td class="num">203,624</td></tr>
    <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Nohref</code></td><td class="num">13,570</td></tr>
</table>

<h3>Values of the <code class="elem">AREA</code>/<code class="att">Shape</code> attribute</h3>
<p>The <a href="shapeattributevalues-url.htm">frequency table</a> for this attribute&#39;s 
   values is short and sweet&#8212;authors stick to the known keywords. There is a clear 
   preference for the geometric shape of choice, though: <span class="string">&quot;rect&quot;</span> 
   is favored 10 to 1 over the next-nearest value <span class="string">&quot;poly&quot;</span>.</p>

<h2 id="howmany">How many images were encountered?</h2>
<p>MAMA kept track of how many images were detected in each document, even duplicate 
   ones. It tallied the total image references encountered, the number of unique 
   images encountered, and the maximum number of times an image was referenced 
   multiple times. MAMA found 3,233,208 of 3,509,180 URLs (92.14%) using images via 
   at least one of the previously mentioned methods.</p> 

<p class="note"><strong>Caution:</strong> Some of the URLs mentioned may cause loading problems in a browser.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> Maximum image usages</caption>
    <tr valign="bottom"><th>Criteria</th><th>Maximum<br />Quantity</th><th>Average<br />In Sample</th></tr>
    <tr class="r1"><td>Total number images</td><td class="num">65,535</td><td class="num">22.63</td></tr>
    <tr class="r2"><td>Total number unique images</td><td class="num">1,610</td><td class="num">12.27</td></tr>
    <tr class="r1"><td>Maximum number duplicate images</td><td class="num">65,535</td><td class="num">15.22</td></tr>
    <tr class="r2"><td>Maximum number background images</td><td class="num">242</td><td class="num">2.57</td></tr>
</table>

<p class="note"><strong>Note:</strong><br />
   MAMA used the MySQL SMALLINT data type to store image usage information, which 
   has a maximum value of 65,535. Values higher than this are capped to the maximum 
   value. This seemed like a safe upper boundary, but in the end there was the 
   occasional surprise that exceeded even that lofty number. If a URL is shown 
   having an image tally of 65,535, it is a good bet that the quantity was 
   considerably more than that in reality.</p>

<h3>Total images</h3>
<p>This total tracks any reference to an image, including duplicates. For example, 
   with the venerable and maligned &quot;spacer gif&quot; authoring trick (commonly used to 
   try to achieve pixel-perfect table layouts), each usage of the image would count 
   toward the overall image total. Two URLs in MAMA hit the maximum image quantity limit.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-2:</strong> URLs having highest total images</caption>
    <tr valign="bottom"><th>URL</th><th>Total<br />images</th></tr>
    <tr class="r1"><td>http://www.ratingspot.com/ (URL no longer active)</td><td class="num">65,535</td></tr>
    <tr class="r2"><td><a href="http://www.goldcup2002.com/">http://www.goldcup2002.com/</a></td><td class="num">65,535</td></tr>
    <tr class="r1"><td><a href="http://www.houseofnutrition.com/">http://www.houseofnutrition.com/</a></td><td class="num">25,909</td></tr>
    <tr class="r2"><td><a href="http://www.1000irani.com/">http://www.1000irani.com/</a></td><td class="num">12,527</td></tr>
</table>

<h3>Total number of unique images</h3>
<p>This number tracks only the unique references to images. For a given URL, 
   comparing this number to the &quot;Total number of images&quot; value might provide 
   some insight about usage of repeated graphical elements such as spacers, 
   bullets, horizontal rules, and so forth.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-3:</strong> URLs having highest totals of unique image references</caption>
    <tr valign="bottom"><th>URL</th><th>Total<br />unique<br />images</th></tr> 
    <tr class="r1"><td><a href="http://www.ccom-inet.de/">http://www.ccom-inet.de/</a></td><td class="num">1,610</td></tr>
    <tr class="r2"><td><a href="http://www.dolomitenhotels.net/">http://www.dolomitenhotels.net/</a></td><td class="num">1,247</td></tr>
    <tr class="r1"><td>http://www.peterkamin.de/Goslar/goslar.htm (URL no longer active)</td><td class="num">1,105</td></tr>
    <tr class="r2"><td><a href="http://www.lenuagedesfilles.com/">http://www.lenuagedesfilles.com/</a></td><td class="num">1,070</td></tr>
</table>

<h3>Maximum number of duplicate images</h3>
<p>Every time an image reference was used more than once, MAMA kept track of the 
   running totals. The value stored by MAMA, &quot;Maximum duplicates&quot;, represents the 
   highest number of times a unique inline image URL was duplicated in a document. 
   In all, 1,592,488 URLs had at least one image reference used more than once. The 
   frequency table for this value does not show any big leaps or jumps in it, but 
   there are some small reversals that may warrant some scrutiny. There does not 
   seem to be any obvious reason for the slight order alterations.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-4:</strong> URLs having highest totals of image duplicates</caption>
    <tr valign="bottom"><th>URL</th><th>Total<br />duplicate<br />images</th></tr> 
    <tr class="r1"><td>http://www.ratingspot.com/ (URL no longer active)</td><td class="num">65,535</td></tr>
    <tr class="r2"><td><a href="http://www.goldcup2002.com/">http://www.goldcup2002.com/</a></td><td class="num">65,535</td></tr>
    <tr class="r1"><td><a href="http://www.houseofnutrition.com/">http://www.houseofnutrition.com/</a></td><td class="num">25,771</td></tr>
</table>

<h3>Maximum number of background images</h3>
<p>Any image reference using the <code class="att">Background</code> attribute 
   (from the <code class="elem">BODY</code>, <code class="elem">TABLE</code>, 
   <code class="elem">TD</code> and <code class="elem">TH</code> elements) was 
   counted as a background image. MAMA had 1,288,880 URLs with at least one 
   such background image.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-5:</strong> URLs having highest totals of background images</caption>
    <tr valign="bottom"><th>URL</th><th>Total<br />background<br />images</th></tr> 
    <tr class="r1"><td>http://www.gasperitsch.com/ (URL no longer active)</td><td class="num">242</td></tr>
    <tr class="r2"><td><a href="http://www.youth.cn">http://www.youth.cn/</a></td><td class="num">167</td></tr>
    <tr class="r1"><td><a href="http://www.333tourthai.com/">http://www.333tourthai.com/</a></td><td class="num">154</td></tr>
    <tr class="r2"><td><a href="http://www.imagegood.co.kr">http://www.imagegood.co.kr/</a></td><td class="num">124</td></tr>
</table>

<h2 id="formats">Image formats</h2>
<p>Authors use images in many ways, and there is definitely room on the Web for 
   all of the popular formats. In addition to keeping track of image totals, 
   MAMA tried to discover which formats were in common use. Specifically, we 
   wanted to see how often GIFs, JPEGs, and PNGs occurred. We will first take a 
   look at how each image type was detected (Fig 7-1), follow it up with general 
   usage statistics for those types (Fig 7-2), and then list some examples of 
   the extreme usage cases detected.</p>

<h3>Image format detection</h3>
<p>MAMA defaulted to using an image&#39;s file extension to judge the format type. If 
   MAMA could declare an image format from just this data alone, it did not try 
   to dig any deeper than that. If it could not determine the format from the 
   file extension, MAMA would then download the HTTP HEAD of the referenced image 
   and proceed to examine the image&#39;s MIME type to detect the format. This policy 
   was a useful shortcut that really helped with the analysis script&#39;s overall performance.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Methods used to detect image formats in MAMA</caption>
    <tr valign="bottom"><th>Image format</th><th>Substring detected<br />in file extension</th><th>Substring detected<br />in MIME type</th></tr> 
    <tr class="r1"><td>GIF</td><td><span class="string">&quot;.gif&quot;</span></td><td><span class="string">&quot;gif&quot;</span></td></tr>
    <tr class="r2"><td>JPEG</td><td><span class="string">&quot;.jpg&quot;</span> or <span class="string">&quot;.jpeg&quot;</span></td><td><span class="string">&quot;jpeg&quot;</span></td></tr>
    <tr class="r1"><td>PNG</td><td><span class="string">&quot;.png&quot;</span></td><td><span class="string">&quot;png&quot;</span></td></tr>
</table>

<h3>Image format usage totals</h3>
<p>JPEG has no real competition in depicting photographs or realistic scenes, but 
   the PNG format and the dominant GIF format are at odds for the same use cases. 
   Due to a number of <a href="http://en.wikipedia.org/wiki/Portable_Network_Graphics#Web_browser_support_for_PNG">historical 
   issues</a>, uptake of the PNG format has been slower than many expected. Authors 
   seem to have no problem with both formats coexisting on their Web sites. GIF 
   and PNG, can&#39;t we all just get along?</p>

<p class="note"><strong>Note:</strong> The frequency tables for each image type are 
   rather linear, typically in order all the way out past the 30th position in the list.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-2:</strong> Image format statistics</caption>
    <tr valign="bottom"><th>Image<br />Format</th><th>Total<br />occurrences</th><th>Percentage</th>
        <th>Maximum<br />quantity<br />encountered</th><th>Average<br />in sample</th><th>Standard<br />deviation<br />in sample</th></tr> 
    <tr class="r1"><td>GIF</td><td class="num">2,854,113</td><td class="num">81.33%</td>
        <td class="num">1,610</td><td class="num">9.04</td><td class="num">10.45</td></tr>
    <tr class="r2"><td>JPEG</td><td class="num">2,451,507</td><td class="num">69.86%</td>
        <td class="num">1,201</td><td class="num">6.11</td><td class="num">9.54</td></tr>
    <tr class="r1"><td>PNG</td><td class="num">374,408</td><td class="num">10.67%</td>
        <td class="num">539</td><td class="num">3.21</td><td class="num">5.31</td></tr>
</table>

<h3>Maximum image format uses</h3>
<p>Notice that the maximum image quantity instance for each format is usually a 
   rather extreme value compared to any of its closest neighbors and is not typical.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-3:</strong> URLs having highest number of detected GIFs</caption>
    <tr valign="bottom"><th>URL</th><th>Total<br />GIFs</th></tr> 
    <tr class="r1"><td><a href="http://www.ccom-inet.de/">http://www.ccom-inet.de/</a></td><td class="num">1,610</td></tr>
    <tr class="r2"><td><a href="http://www.r-type.org/muse/aaa0000.htm">http://www.r-type.org/muse/aaa0000.htm</a></td><td class="num">939</td></tr>
    <tr class="r1"><td><a href="http://www.pcpages.com/homemom/ogpjoint.html">http://www.pcpages.com/homemom/ogpjoint.html</a></td><td class="num">869</td></tr>
    <tr class="r2"><td>http://dibujando-en-el-viento.nireblog.com/ (URL no longer active)</td><td class="num">821</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-4:</strong> URLs having highest number of detected JPEGs</caption>
    <tr valign="bottom"><th>URL</th><th>Total<br />JPEGs</th></tr> 
    <tr class="r1"><td><a href="http://www.dolomitenhotels.net/">http://www.dolomitenhotels.net/</a></td><td class="num">1,201</td></tr>
    <tr class="r2"><td><a href="http://car-hifi-produkte.de">http://car-hifi-produkte.de/</a></td><td class="num">833</td></tr>
    <tr class="r1"><td><a href="http://www.lacancha.com/greatest.html">http://www.lacancha.com/greatest.html</a></td><td class="num">816</td></tr>
    <tr class="r2"><td>http://www.worldisround.com/articles/16107/index.htm (URL no longer active)</td><td class="num">805</td></tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-5:</strong> URLs having highest number of detected PNGs</caption>
    <tr valign="bottom"><th>URL</th><th>Total<br />PNGs</th></tr> 
    <tr class="r1"><td><a href="http://www.aaronmichaels.com/">http://www.aaronmichaels.com/</a></td><td class="num">539</td></tr>
    <tr class="r2"><td>http://www-laog.obs.ujf-grenoble.fr/~desert/cosmologie/cours/coursv2/coursv2.html (URL no longer active)</td><td class="num">537</td></tr>
    <tr class="r1"><td>http://www.sigmasigmarho.com/usf/ (URL no longer active)</td><td class="num">251</td></tr>
    <tr class="r2"><td><a href="http://www2002.org/CDROM/refereed/127/">http://www2002.org/CDROM/refereed/127/</a></td><td class="num">233</td></tr>
</table>


<h2 id="combovenn">Image formats in combination: Venn diagram</h2>
<p>The following diagram shows the overlap in usage of the three dominant image 
   formats. The relationship between GIF and PNG is usually characterized as an 
   adversarial one, so it was expected that these numbers would demonstrate 
   authors showing a clear preference for one or the other in their pages. However, 
   that definitely is not the case. PNGs were detected in 374,408 URLs, and of 
   those, 311,827 URLs (83.29%) also used the GIF format as well. If that is what 
   constitutes a format war, the battle is a subtle one.</p>

<p class="note"><strong>Note:</strong> Region sizes are not to scale</p>
<div><img src="http://forum-test.oslo.osa/kirby/content/articles/208-mama-images-elements-and-formats/venn-imageformatbreakdown.png" width="593" height="392" alt="Venn diagram for image format usage types" /></div>

<h2 id="other">Other image formats</h2>
<p>Any image reference not falling into the GIF, JPEG, or PNG classifications was 
   put into an &quot;other&quot; category. In all, 372,895 MAMA URLs contained images in this group&#8212;over 10% of all pages analyzed! This seems like a much higher number than 
   one would expect for image formats &quot;on the fringe&quot;. Now, we can look at the qualifications 
   for this fallback category to see what can be revealed about the process.</p>

<p><strong>Processing a unique image reference in MAMA:</strong></p>
<ol>
    <li>Look for a file extension of .gif, .jpg/.jpeg, or .png.</li>
    <li>If a file extension is not found, get a HEAD of the image URL and remember 
        the MIME type; otherwise, the MIME type is blank.</li>
    <li>If the extension or the MIME type contains an indication for GIF, JPEG, or PNG, 
        increment the appropriate counters.</li>
    <li>Otherwise, increment the &quot;other&quot; counter.</li>
</ol>

<p>Image format detection in MAMA was added rather late in the development process, 
   and some of the strategies used can be improved on for next time. MAMA downloaded 
   document dependencies serially instead of in parallel, so analyzing each and every 
   image reference would have been very expensive time-wise. In the steps above you 
   may notice that the MIME type is <strong>only</strong> fetched if a known extension 
   is not detected. It was expected that the majority of images in a document would 
   fall into one of the 3 image format categories featured, so excessive network 
   activity to download the HTTP Headers of images would be greatly reduced. The above 
   strategy works well for detecting GIF, JPEG, and PNG, but things could be improved 
   with respect to the &quot;other&quot; category. In addition to image references that were in 
   other image formats, there were additional false positives:</p>

<ul>
    <li>A large number of images are served by scripts or cgis using URL arguments 
        and had no file extensions. These would always fail the file extension check 
        and fall through to the MIME type check.</li> 
    <li>If the MIME type check failed for any reason, be it network timeouts or 
        other transient conditions, an empty value was returned. Images served 
        using the previously mentioned method that should have normally fallen into 
        our 3 main categories would then end up in &quot;other&quot;.</li>
    <li>If a MIME type check was attempted for a broken image link, it could return 
        a 404 Error (or worse, an HTML 404-redirect), and this could throw off the 
        detection method. A next-iteration strategy would be to ignore these cases altogether.</li>
</ul>

<p>Given those caveats, MAMA <strong>did</strong> detect some image formats outside 
   our 3 big buckets. Generally, the most popular formats were bitmaps and icon files 
   (often using &quot;.bmp&quot; and &quot;.ico&quot; extensions), but the URLs with the highest concentrations
   of these image types were all .ico file type cases
   (ex: <a href="http://www.lenuagedesfilles.com/">http://www.lenuagedesfilles.com/</a>
   with 883 and <a href="http://www.blogalego.com">http://www.blogalego.com/</a> 
   with 401 respectively).</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-phrase-block-list/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Phrase, block, list, and other elements</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-forms/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Forms</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>td
