Title: MAMA: Character entities
----
Date: 2008-11-07 13:05:35
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-document-encodings/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Document Encodings</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-code-comments/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Code comments</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#usage">Character entity usage</a></li>
    <li><a href="#namednumeric">A popularity contest: Named or numeric character entities?</a></li>
    <li><a href="#illegal">Illegal code points for numeric entities</a></li>
    <li><a href="#email">The mystery of the word jumble</a></li>
</ol>

<h2 id="introduction">Introduction</h2>
<p>I am not aware of any past studies of character entities (either numeric or named). MAMA&#39;s study appears 
   to be the first; although, in hindsight, more could have been done. Knowing what character entities are used is definitely 
   a good start, but it would also be nice to know <strong>how many</strong> character entities a document has as well.</p>

<h2 id="usage">Character-entity usage</h2>
<p>In all, 3,002,458 of 3,509,180 URLs analyzed (85.56%) use at least 1 character entity. 
   The most popular entity reference is the &quot;Non-breaking space&quot;, used 2,537,947 
   times (72.32% of pages overall)&#8212;twice as much as any other entity used.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> 
   Popular character entities<br />[See also the <a href="charentslist-url.htm">full 
   frequency table</a>]</caption>
   <tr valign="bottom">
     <th>Entity description</th>
     <th>Entity</th>
     <th>Entity<br />code</th>
     <th>Frequency</th>
     <th rowspan="9">&#xA0;</th>
     <th>Entity description</th>
     <th>Entity</th>
     <th>Entity<br />code</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td>Non-breaking space</td>
     <td>&#xA0;</td>
     <td>nbsp</td>
     <td class="num">2,537,947</td>
     <td>Small &#39;o&#39; with diaeresis</td>
     <td>&#xF6;</td>
     <td>ouml</td>
     <td class="num">184,313</td>
   </tr>
   <tr class="r2">
     <td>Ampersand</td>
     <td>&amp;</td>
     <td>amp</td>
     <td class="num">1,256,005</td>
     <td>Right double-angle quotation mark</td>
     <td>&#xBB;</td>
     <td>raquo</td>
     <td class="num">123,207</td>
   </tr>
   <tr class="r1">
     <td>Copyright sign</td>
     <td>&#xA9;</td>
     <td>copy</td>
     <td class="num">776,051</td>
     <td>Small &#39;a&#39; qith grave</td>
     <td>&#xE0;</td>
     <td>agrave</td>
     <td class="num">119,984</td>
   </tr>
   <tr class="r2">
     <td>Quotation mark</td>
     <td>&quot;</td>
     <td>quot</td>
     <td class="num">520,902</td>
     <td>Small &#39;e&#39; with grave</td>
     <td>&#xE8;</td>
     <td>egrave</td>
     <td class="num">104,890</td>
   </tr>
   <tr class="r1">
     <td>Greater-than sign</td>
     <td>&gt;</td>
     <td>gt</td>
     <td class="num">276,149</td>
     <td>Less-than sign</td>
     <td>&lt;</td>
     <td>lt</td>
     <td class="num">100,218</td>
   </tr>
   <tr class="r2">
     <td>Small &#39;u&#39; with diaeresis</td>
     <td>&#xFC;</td>
     <td>uuml</td>
     <td class="num">226,695</td>
     <td>Small Sharp S</td>
     <td>&#xDF;</td>
     <td>szlig</td>
     <td class="num">94,842</td>
   </tr>
   <tr class="r1">
     <td>Small &#39;e&#39; with acute</td>
     <td>&#xE9;</td>
     <td>eacute</td>
     <td class="num">207,322</td>
     <td>Apostrophe</td>
     <td>&#39;</td>
     <td>39</td>
     <td class="num">89,642</td>
   </tr>
   <tr class="r2">
     <td>Small &#39;a&#39; with diaeresis</td>
     <td>&#xE4;</td>
     <td>auml</td>
     <td class="num">204,855</td>
     <td>Small &#39;o&#39; with acute</td>
     <td>&#xF3;</td>
     <td>oacute</td>
     <td class="num">86,211</td>
   </tr>
</table>
 
<h2 id="namednumeric">A popularity contest: Named or numeric character entities?</h2>
<p>Among the most popular entities, there is a definite preference for using the 
   named version rather than the numeric version&#8212;in the frequency table above 
   (Fig 2-1) a numeric entity is not encountered until the 15th slot. In almost 
   every case where a named entity counterpart exists, the named version is 
   <strong>at least</strong> as popular as the numeric version, if not much 
   more so.</p>

<p>An allowed alternate form of numeric character entity is a hexadecimal version 
   of the entity number, like so:</p>
<p class="note"><strong>Standard numeric entity:</strong> <code class="value">&amp;#46;</code> 
    = <strong>Hexadecimal numeric entity:</strong> <code class="value">&amp;#x2e;</code></p>

<p>This form of numeric entity was detected many times in MAMA&#39;s URLs, but its usage 
   is sharply lower than the equivalent standard decimal representations of the same entity.</p>

<h2 id="illegal">Illegal code points for numeric entities</h2>
<p>The range of code points from 127-159 is designated as &quot;system control characters&quot; 
   in ISO-8859-*, and Unicode character sets and should not be used. This does not stop 
   authors from including them as numeric character entities in the wild, though. The 
   most popular entities in this range correspond to certain Windows system-specific 
   characters that are not very portable. As mentioned before, the legal named entity 
   versions of the Windows-specific character are quite a bit more popular, as are the 
   legal Unicode numeric entity forms of the characters. The only slight exception is 
   the &quot;Bullet&quot; character&#8212;it is slightly more popular in its illegal &amp;#149; 
   incarnation than either of its legal forms separately.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> 
   Popularity comparison for key, illegal numeric entities<br />
   Values in &quot;[]&quot; brackets represent the Hexadecimal version of the numeric entities</caption>
   <tr valign="bottom">
     <th>Character description</th>
     <th>Character</th>
     <th>Illegal<br />numeric<br />entity</th>
     <th>Frequency</th>
     <th>Proper<br />numeric<br />entity</th>   
     <th>Frequency</th>
     <th>Named<br />entity</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1" valign="top">
     <td>Left single quotation mark</td>
     <td>&#x2018;</td>
     <td class="num">145</td>
     <td class="num">3,284</td>
     <td class="num">8216<br />[x2018]</td>
     <td class="num">11,220<br />[122]</td>
     <td>lsquo</td>
     <td class="num">8,890</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Right single quotation mark</td>
     <td>&#x2019;</td>
     <td class="num">146</td>
     <td class="num">25,056</td>
     <td class="num">8217<br />[x2019]</td>
     <td class="num">77,397<br />[940]</td>
     <td>rsquo</td>
     <td class="num">82,000</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Left double quotation mark</td>
     <td>&#x201C;</td>
     <td class="num">147</td>
     <td class="num">9,165</td>
     <td class="num">8220<br />[x201c]</td>
     <td class="num">40,866<br />[586]</td>
     <td>ldquo</td>
     <td class="num">37,661</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Right double quotation mark</td>
     <td>&#x201D;</td>
     <td class="num">148</td>
     <td class="num">8,536</td>
     <td class="num">8221<br />[x201d]</td>
     <td class="num">42,206<br />[414]</td>
     <td>rdquo</td>
     <td class="num">35,170</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Bullet</td>
     <td>&#x2022;</td>
     <td class="num">149</td>
     <td class="num">40,768</td>
     <td class="num">8226<br />[x2022]</td>
     <td class="num">37,128<br />[2,373]</td>
     <td>bull</td>
     <td class="num">38,136</td>
   </tr>
   <tr class="r2" valign="top">
     <td>En dash</td>
     <td>&#x2013;</td>
     <td class="num">150</td>
     <td class="num">16,562</td>
     <td class="num">8211<br />[x2013]</td>
     <td class="num">34,300<br />[232]</td>
     <td>ndash</td>
     <td class="num">45,323</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Em dash</td>
     <td>&#x2014;</td>
     <td class="num">151</td>
     <td class="num">14,833</td>
     <td class="num">8212<br />[x2014]</td>
     <td class="num">19,065<br />[146]</td>
     <td>mdash</td>
     <td class="num">22,290</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Trademark sign</td>
     <td>&#x2122;</td>
     <td class="num">153</td>
     <td class="num">12,510</td>
     <td class="num">8482<br />[x2122]</td>
     <td class="num">11,570<br />[131]</td>
     <td>trade</td>
     <td class="num">17,223</td>
   </tr>
</table>

<h2 id="email">The mystery of the word jumble</h2>
<p>Upon assembling a list of the top numeric character entities, a number of 
   seemingly unrelated, unremarkable ASCII characters stand out. The most popular numeric 
   entity characters do not reflect the letters with 
   the <a href="http://en.wikipedia.org/wiki/Letter_frequencies">highest relative 
   frequencies</a> (in the English language at least). This group of characters 
   only makes sense though when they are put together. They indicate that 
   obfuscated e-mail addresses are very popular. The following e-mail-related 
   character and word groupings stand out: <span class="string">&quot;@&quot;</span>, 
   <span class="string">&quot;at&quot;</span>, <span class="string">&quot;.&quot;</span>, 
   <span class="string">&quot;:&quot;</span>, <span class="string">&quot;nospam&quot;</span>, 
   <span class="string">&quot;email&quot;</span> and <span class="string">&quot;com&quot;</span>...that 
   could make, for example:</p> 

<p class="note"><span class="string">&quot;email: test at foo.com.nospam&quot;</span></p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> 
   Popular numeric entities representing &#39;boring&#39; characters</caption>
   <tr valign="bottom">
     <th>Numeric<br />entity</th>
     <th>Character</th>
     <th>Frequency</th>
     <th rowspan="8">&#xA0;</th>
     <th>Numeric<br />entity</th>
     <th>Character</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td class="num">64</td>
     <td>@</td>
     <td class="num">35,494</td>
     <td class="num">101</td>
     <td>e</td>
     <td class="num">22,067</td>
   </tr>
   <tr class="r2">
     <td class="num">46</td>
     <td>.</td>
     <td class="num">27,506</td>
     <td class="num">108</td>
     <td>l</td>
     <td class="num">20,781</td>
   </tr>
   <tr class="r1">
     <td class="num">111</td>
     <td>o</td>
     <td class="num">26,046</td>
     <td class="num">110</td>
     <td>n</td>
     <td class="num">19,867</td>
   </tr>
   <tr class="r2">
     <td class="num">97</td>
     <td>a</td>
     <td class="num">24,773</td>
     <td class="num">99</td>
     <td>c</td>
     <td class="num">18,645</td>
   </tr>
   <tr class="r1">
     <td class="num">105</td>
     <td>i</td>
     <td class="num">24,198</td>
     <td class="num">115</td>
     <td>s</td>
     <td class="num">17,741</td>
   </tr>
   <tr class="r2">
     <td class="num">116</td>
     <td>t</td>
     <td class="num">23,067</td>
     <td class="num">58</td>
     <td>:</td>
     <td class="num">13,890</td>
   </tr>
   <tr class="r1">
     <td class="num">109</td>
     <td>m</td>
     <td class="num">22,674</td>
     <td class="num">112</td>
     <td>p</td>
     <td class="num">8,492</td>
   </tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-document-encodings/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Document Encodings</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-code-comments/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Code comments</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
