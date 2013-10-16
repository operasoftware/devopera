Title: MAMA script tokenization: DOM
----
Date: 2008-12-19 07:53:16
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-script-identifier-tokenization/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: script identifier tokenization</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Script tokenization: ECMAScript/JavaScript syntax</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#char">Character- and text-related objects, properties, and methods</a></li>
    <li><a href="#css">CSS related objects, properties, and methods</a></li>
    <li><a href="#doc">The Document object</a></li>
    <li><a href="#elem">The Element object</a></li>
    <li><a href="#evt">Event-related objects, properties, and methods</a></li>
    <li><a href="#loc">The Location object</a></li>
    <li><a href="#misc">Miscellaneous objects, properties, and methods</a></li>
    <li><a href="#nav">The Navigator object</a></li>
    <li><a href="#nodeobj">The Node object</a></li>
    <li><a href="#rangeobj">The Range object</a></li>
    <li><a href="#screenobj">The Screen object</a></li>
    <li><a href="#table">Table related objects, properties, and methods</a></li>
    <li><a href="#trav">Traversal-related objects, properties, and methods</a></li>
    <li><a href="#win">The Window object</a></li>
    <li><a href="#xml">XML related objects, properties, and methods</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Scripting use was found in 2,617,305 of the URLs that MAMA analyzed. This section 
   is devoted to the results uncovered for 294 DOM-related keywords in 15 categories 
   encompassing the largest objects and conceptual areas of the DOM. JavaScript/ECMAScript 
   syntax keywords are covered in the <a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/">JavaScript/ECMAScript tokenization section</a>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 1-1:</strong> Overall use of JavaScript/ECMAScript factors</caption>
   <tr valign="bottom"><th>Objects</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Objects</th><th>Frequency</th></tr>
   <tr class="r1"><td>Window</td><td class="num">2,366,008</td><td>Screen</td><td class="num">899,431</td></tr>
   <tr class="r2"><td>Document</td><td class="num">2,353,632</td><td>XML-related</td><td class="num">694,702</td></tr>
   <tr class="r1"><td>Navigator</td><td class="num">1,553,086</td><td>Miscellaneous</td><td class="num">263,161</td></tr>
   <tr class="r2"><td>Location</td><td class="num">1,511,874</td><td>Character-related</td><td class="num">146,606</td></tr>
   <tr class="r1"><td>Event-related</td><td class="num">1,379,606</td><td>Range</td><td class="num">83,590</td></tr>
   <tr class="r2"><td>Element</td><td class="num">1,336,464</td><td>Table-related</td><td class="num">75,110</td></tr>
   <tr class="r1"><td>CSS-related</td><td class="num">1,066,861</td><td>Traversal-related</td><td class="num">14,414</td></tr>
   <tr class="r2"><td>Node</td><td class="num">946,815</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="char">Character- and text-related objects, properties, and methods</h2>
<p>These properties and methods of the CharacterData and Text objects were discovered 
   in 146,606 URLs. It is quite obvious that the keyword <code class="svar">data</code> 
   is the one inflating this tally. While it <strong>is</strong> possible that all 
   instances of the <code class="svar">data</code> keyword found are for the 
   CharacterData object property, that outcome strains credibility too far. The word 
   <span class="string">&quot;Data&quot;</span> is too common for this particular 
   usage to be unique&#8212;so, take that number with a grain of salt. The other various 
   properties and methods here were very rarely detected, and they are dwarfed by 
   comparison to simple JavaScript String object functions.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> DOM Character and Text-related properties and methods</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">data</code></td><td class="num">144,526</td><td><code class="svar">appendData</code></td><td class="num">118</td></tr>
   <tr class="r2"><td><code class="svar">splitText</code></td><td class="num">2,527</td><td><code class="svar">deleteData</code></td><td class="num">47</td></tr>
   <tr class="r1"><td><code class="svar">insertData</code></td><td class="num">659</td><td><code class="svar">substringData</code></td><td class="num">20</td></tr>
   <tr class="r2"><td><code class="svar">replaceData</code></td><td class="num">304</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="css">CSS related objects, properties, and methods</h2>
<p>These keywords are used as the properties and methods of the CSS2Properties 
   and CSSStyleSheet and objects. They were detected in 1,066,861 of MAMA&#39;s URLs, 
   with the <code class="svar">style</code> keyword being used in almost every 
   single one of those cases. Because <span class="string">&quot;style&quot;</span> is a
   rather common concept when dealing with pages, it <strong>is</strong> possible 
   that some of the uses in the keyword&#39;s overall count do not have to do with 
   controlling CSS properties. However, unlike with other keywords that might have 
   multiple uses, controlling CSS is expected to be the dominant use for the 
   keyword&#8212;historically, it is the easiest method for accessing and changing 
   CSS property information via script. The next most popular keyword, 
   <code class="svar">cssText</code>, shows significantly higher use rates than 
   the remaining methods; it is another simple older method for changing CSS 
   property information (except with the ability to control entire CSS rules 
   instead of individual properties).</p>

<p>Adding CSS to a document (<code class="svar">addRule</code> and 
   <code class="svar">insertRule</code>) is apparently more popular than removing 
   CSS. The IE-specific method for adding CSS (<code class="svar">addRule</code>) 
   was found to be significantly more popular than the W3C DOM method 
   (<code class="svar">insertRule</code>), but the W3C DOM method for removing CSS 
   (<code class="svar">deleteRule</code>) was slightly more popular than the 
   IE-specific method (<code class="svar">removeRule</code>). MAMA found a slight 
   clustering in the 15,000 range with the <code class="svar">cssRules</code>, 
   <code class="svar">selectorText</code>, and <code class="svar">addRule</code> 
   keywords&#8212;suggesting that they might be commonly used together, but this only 
   held true for <code class="svar">cssRules</code> and <code class="svar">selectorText</code>, 
   which were used in the same URLs 12,162 times. The similar usage rate of 
   <code class="svar">addRule</code> seems to be merely a coincidence.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> DOM CSS-related properties and methods</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">style</code></td><td class="num">1,066,508</td><td><code class="svar">addRule</code></td><td class="num">14,520</td></tr>
   <tr class="r2"><td><code class="svar">cssText</code></td><td class="num">75,677</td><td><code class="svar">insertRule</code></td><td class="num">4,110</td></tr>
   <tr class="r1"><td><code class="svar">cssRules</code></td><td class="num">16,056</td><td><code class="svar">deleteRule</code></td><td class="num">752</td></tr>
   <tr class="r2"><td><code class="svar">selectorText</code></td><td class="num">15,960</td><td><code class="svar">removeRule</code></td><td class="num">569</td></tr>
</table>

<h2 id="doc">The Document object</h2>
<p>Forty keywords were associated with the Document object for MAMA, with 2,353,632 
   of the URLs having at least one of the keyword snippets (89.93% of all URLs 
   using script). The parent substring <code class="svar">document</code> has 
   the highest popularity here, and it actually has the highest occurrence of 
   <strong>ANY</strong> tokenized keyword detected by MAMA (in 89.63% of all 
   script). This could be persuasive proof in demonstrating that dynamically 
   changing the document is the <strong>most</strong> popular use of JavaScript.</p>
    
<p>The <code class="svar">getElementById</code> and <code class="svar">write</code> 
   keywords are understandably quite popular, being the basic historic methods for 
   addressing and dynamically creating parts of a document; each was found in over 
   50% of all script cases. The W3C DOM method of addressing content 
   <code class="svar">document.getElementById</code> is more popular than the 
   MSIE-originated <code class="svar">document.all</code> by a comfortable margin. The
   <code class="svar">getElementById</code> method is almost twice as popular as 
   <code class="svar">getElementsByTagName</code>, and both trounce 
   <code class="svar">getElementsByName</code> by a <strong>wide</strong> 
   margin. The <code class="svar">write</code> method is clearly preferred by 
   authors over <code class="svar">writeln</code> 4.5 to 1.</p>

<p>Other keywords from the Document object can tell us a lot about many aspects of usage in
   Web-page authoring. Detection of the <code class="svar">layers</code> keyword is actually 
   the most common process used to sniff out (browser sniff) Netscape Navigator 4, 
   which explains why the use of this keyword in script is <strong>so</strong> 
   large compared to the <a href="http://dev.opera.com/articles/view/mama-phrase-block-list/#extensions"><code class="elem">LAYER</code> 
   element</a> (the script keyword is used over 34 times as much)! The <code class="svar">cookie</code> 
   keyword can give a good measure of how often client-side cookies are used by 
   script (22.41% of all Web pages)&#8212;this is probably a much better measure than 
   the Navigator object&#39;s <code class="svar">cookieEnabled</code> property reflecting 
   only 45,411 cases. The <code class="svar">images</code> keyword here is just one 
   useful factor in determining whether scripting is dynamically controlling images; 
   top keywords from the token remainders list also suggest Image usage (<code class="svar">src</code>, 
   <code class="svar">width</code>, <code class="svar">Image</code> and 
   <code class="svar">height</code>). These could also be leveraged to discover 
   scripts that are manipulating Images. Direct use of the <code class="elem">FORM</code>, 
   <code class="elem">INPUT</code> or <code class="elem">SELECT</code> elements 
   in markup were detected in 1,068,842 cases, while the DOM level 0 <code class="svar">forms</code> 
   keyword was detected 665,305 times. However, these factors occurred <strong>together</strong> 
   only 293,048 times. What this disparity might suggest about forms control via 
   script is not really clear&#8212;perhaps, in a significant number of cases, form 
   widgets are generated dynamically.</p>

<p>Usage of the <code class="svar">createRange</code> keyword generally agrees 
   with the numbers for keywords in the section on the Range object. The various 
   Range keywords were detected in 83,590 cases, while the Document object 
   <code class="svar">createRange</code> keyword was used 75,703 times. Regarding
   the <code class="svar">createTextNode</code> keyword usage&#8212;there was a concern 
   <a href="#char">previously mentioned</a> that the <code class="svar">data</code> 
   keyword being used 144,526 times might be artificially inflated, but with 
   <code class="svar">createTextNode</code> discovered in 125,308 URLs, the 
   <code class="svar">data</code> rate suddenly doesn&#39;t seem that unnatural.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> DOM Document object properties and methods<br />
        (Please see also the <a href="domdocobjs-url.htm">full frequency table</a>.)</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="8">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">document</code></td><td class="num">2,345,827</td>
       <td><code class="svar">getElementsByTagName</code></td><td class="num">797,464</td>
       <td><code class="svar">URL</code></td><td class="num">382,120</td></tr>
   <tr class="r2"><td><code class="svar">getElementById</code></td><td class="num">1,484,601</td>
       <td><code class="svar">cookie</code></td><td class="num">786,427</td>
       <td><code class="svar">writeln</code></td><td class="num">312,995</td></tr>
   <tr class="r1"><td><code class="svar">write</code></td><td class="num">1,401,743</td>
       <td><code class="svar">body</code></td><td class="num">746,071</td>
       <td><code class="svar">lastModified</code></td><td class="num">229,841</td></tr>
   <tr class="r2"><td><code class="svar">all</code></td><td class="num">1,145,064</td>
       <td><code class="svar">createElement</code></td><td class="num">731,116</td>
       <td><code class="svar">links</code></td><td class="num">173,607</td></tr>
   <tr class="r1"><td><code class="svar">referrer</code></td><td class="num">959,234</td>
       <td><code class="svar">forms</code></td><td class="num">665,305</td>
       <td><code class="svar">createTextNode</code></td><td class="num">125,308</td></tr>
   <tr class="r2"><td><code class="svar">images</code></td><td class="num">901,477</td>
       <td><code class="svar">domain</code></td><td class="num">528,066</td>
       <td><code class="svar">anchors</code></td><td class="num">122,835</td></tr>
   <tr class="r1"><td><code class="svar">layers</code></td><td class="num">898,064</td>
       <td><code class="svar">documentElement</code></td><td class="num">419,297</td>
       <td><code class="svar">defaultView</code></td><td class="num">92,977</td></tr>
</table>

<h2 id="elem">The Element object</h2>
<p>The keywords collected under the Element object umbrella were found in 1,336,464 
   URLs from MAMA. The MSIE shorthand <code class="svar">innerHTML</code>, which is 
   used to read and dynamically write content in a document, is very popular. If we 
   compare <code class="svar">innerHTML</code> to <code class="svar">document.createElement</code> 
   or any of the Node object&#39;s methods for accessing and writing child nodes, it 
   appears that it may actually be less popular these days than equivalent W3C DOM 
   methods. Writing attributes with the <code class="svar">setAttribute</code> 
   method appears to be a more frequent authoring task than merely reading it with 
   <code class="svar">getAttribute</code>, and by comparison the 
   <code class="svar">removeAttribute</code> method barely registers against both of the others.</p>

<p>The <code class="svar">currentStyle</code> keyword (used 111,964 times) comes 
   from IE and is only slightly more widespread than the W3C DOM version 
   <code class="svar">window.getComputedStyle</code> (used 99,815 times). These 
   two methods of accessing a browser&#39;s CSS interpretation share usage in a large 
   majority of the cases (92,505 times), indicating an author preference to get 
   the job done using any and <strong>all</strong> methods at their disposal.</p>

<p>The offset/scroll methods that originated in IE show some interesting trends. 
   <code class="svar">offsetTop</code> and <code class="svar">offsetLeft</code> 
   are more popular than either <code class="svar">offsetHeight</code> and 
   <code class="svar">offsetWidth</code>. Similarly, Top and Left are both more 
   popular than Height and Width for the &quot;scroll&quot; methods. The Top and Height 
   properties are always more popular than the Left and Width properties for 
   both the offset and scroll method groups. In cases where the Left and Width 
   component methods are used, the overwhelming majority (more than 90% each) 
   are used in conjunction with the more dominant Top/Height methods.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> DOM Element object properties and methods<br />
        (Please see also the <a href="domelemobjs-url.htm">full frequency table</a>.)</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="6">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">id</code></td><td class="num">1,007,621</td><td><code class="svar">className</code></td><td class="num">359,699</td><td><code class="svar">getAttribute</code></td><td class="num">299,346</td></tr>
   <tr class="r2"><td><code class="svar">innerHTML</code></td><td class="num">695,329</td><td><code class="svar">offsetHeight</code></td><td class="num">353,416</td><td><code class="svar">scrollLeft</code></td><td class="num">283,749</td></tr>
   <tr class="r1"><td><code class="svar">setAttribute</code></td><td class="num">413,403</td><td><code class="svar">scrollTop</code></td><td class="num">352,061</td><td><code class="svar">scrollHeight</code></td><td class="num">252,315</td></tr>
   <tr class="r2"><td><code class="svar">offsetTop</code></td><td class="num">370,397</td><td><code class="svar">offsetWidth</code></td><td class="num">339,529</td><td><code class="svar">tagName</code></td><td class="num">245,805</td></tr>
   <tr class="r1"><td><code class="svar">offsetLeft</code></td><td class="num">361,448</td><td><code class="svar">offsetParent</code></td><td class="num">330,524</td><td><code class="svar">currentStyle</code></td><td class="num">111,964</td></tr>
</table>

<h2 id="evt">Event-related objects, properties, and methods</h2>
<p>These keywords were detected in 1,379,606 URLs, which suggests that more than 
   half of all URLs using events in some manner. The <code class="svar">onload</code> 
   keyword was found to be the most popular of all the keywords, and more popular 
   than any other directly addressed event by almost a factor of two. The W3C DOM 
   <code class="svar">addEventListener</code> keyword and the MSIE-originated 
   <code class="svar">attachEvent</code> are the next most popular values. 
   <code class="svar">addEventListener</code> and <code class="svar">attachEvent</code>
   are used together 539,193 times, indicating that authors clearly prefer to cover 
   their bases by using both methods. Adding/attaching events is far more popular 
   than removing/detaching events, both by a factor of ~7 to 1. When 
   <code class="svar">removeEventListener</code> and <code class="svar">detachEvent</code> 
   methods are used, it is almost <strong>always</strong> with related add/attach 
   methods&#8212; code class=&quot;svar&quot;&gt;addEventListener and <code class="svar">removeEventListener</code> 
   are used together 94,918 times, while <code class="svar">attachEvent</code> 
   and <code class="svar">detachEvent</code> are found together in 80,114 URLs.</p>

<p>Looking at some of the specific event properties, the client coordinate 
   properties are approximately three times as popular as the offset coordinate properties. 
   <code class="svar">clientX</code> and <code class="svar">clientY</code> are 
   used in very similar frequencies, indicating an affinity for being used 
   together, and this is definitely the case&#8212;they are used together in 
   159,487 instances (&gt;95% of all client* cases). The <code class="svar">offsetX</code> 
   and <code class="svar">offsetY</code> properties manifest the same pattern; 
   they are used together in 49,780 URLs (&gt;97% of all offset* cases).</p>

<p>Two forms-related events (<code class="svar">reset</code> and <code class="svar">submit</code>) 
   can be triggered by the DOM. The usage of the <code class="svar">submit</code> 
   keyword was detected 279,761 times. This is only 30.89% of the number of URLs 
   using submittal triggers with HTML forms (905,731 times for <code class="elem">INPUT</code> 
   <code class="att">Type</code>=<span class="string">&quot;submit&quot;</span> and <code class="elem">INPUT</code> 
   <code class="att">Type</code>=<span class="string">&quot;Image&quot;</span> combined). 
   On the other hand, authors emphatically prefer to have form reset behavior 
   in their control via script rather than leaving it to the author - 
   <code class="elem">INPUT</code> <code class="att">Type</code>=<span class="string">&quot;Reset&quot;</span> 
   was found 17,417 times, but the <code class="svar">reset</code> keyword was 
   detected in 69,536 URLs.</p>
 
<p class="note"><strong>Note:</strong> The <code class="svar">reset</code> keyword 
   is generic enough that it may be experiencing name collisions with non-forms 
   usages, which could possibly cause inflated numbers.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> DOM Event-related object properties and methods<br />
        (Please see also the <a href="domeventobjs-url.htm">full frequency table</a>.)</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="9">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">onload</code></td><td class="num">661,791</td>
       <td><code class="svar">onmouseover</code></td><td class="num">263,944</td>
       <td><code class="svar">returnValue</code></td><td class="num">125,882</td></tr>
   <tr class="r2"><td><code class="svar">addEventListener</code></td><td class="num">640,385</td>
       <td><code class="svar">srcElement</code></td><td class="num">238,556</td>
       <td><code class="svar">stopPropagation</code></td><td class="num">111,280</td></tr>
   <tr class="r1"><td><code class="svar">attachEvent</code></td><td class="num">570,029</td>
       <td><code class="svar">onmousedown</code></td><td class="num">177,502</td>
       <td><code class="svar">onunload</code></td><td class="num">106,075</td></tr>
   <tr class="r2"><td><code class="svar">onclick</code></td><td class="num">356,291</td>
       <td><code class="svar">clientX</code></td><td class="num">166,210</td>
       <td><code class="svar">preventDefault</code></td><td class="num">105,364</td></tr>
   <tr class="r1"><td><code class="svar">onresize</code></td><td class="num">317,844</td>
       <td><code class="svar">clientY</code></td><td class="num">163,762</td>
       <td><code class="svar">onmousemove</code></td><td class="num">97,793</td></tr>
   <tr class="r2"><td><code class="svar">onerror</code></td><td class="num">294,842</td>
       <td><code class="svar">onmouseup</code></td><td class="num">161,678</td>
       <td><code class="svar">removeEventListener</code></td><td class="num">95,032</td></tr>
   <tr class="r1"><td><code class="svar">submit</code></td><td class="num">279,761</td>
       <td><code class="svar">cancelBubble</code></td><td class="num">153,350</td>
       <td><code class="svar">toElement</code></td><td class="num">91,460</td></tr>
   <tr class="r2"><td><code class="svar">onmouseout</code></td><td class="num">265,180</td>
       <td><code class="svar">keyCode</code></td><td class="num">144,397</td>
       <td><code class="svar">detachEvent</code></td><td class="num">80,137</td></tr>
</table>

<h3>DOM Event type/Event-handler usage comparison</h3>
<p>The following comparisons are intriguing in what they reveal about event usage 
   and authoring tendencies. With some events authors clearly prefer <strong>either</strong> 
   the HTML event-handler version or the DOM version; in only a few cases is 
   there no authoritative bias. Authors opt for the HTML event handler version of 
   events with <code class="att">Onclick</code>, <code class="att">Onmouseout</code>, 
   <code class="att">Onmouseover</code>, <code class="att">Onsubmit</code>, 
   <code class="att">Onfocus</code>, <code class="att">Onblur</code> and <code class="att">Onchange</code> 
   (essentially, basic mouse and form events). The DOM event version is favored for 
   <code class="svar">onresize</code>, <code class="svar">onerror</code>, 
   <code class="svar">onmousedown</code>, <code class="svar">onmouseup</code>, 
   <code class="svar">onunload</code>, <code class="svar">onmousemove</code>, 
   <code class="svar">onkeydown</code>, <code class="svar">onkeyup</code>, 
   <code class="svar">onabort</code>, <code class="svar">ondblclick</code> and 
   <code class="svar">onreset</code>. Some events can be paired together by their 
   natures; for example, a mousedown event yields to onmouseup event (or else a 
   reader&#39;s hand will get <strong>really</strong> tired). No other coupling 
   demonstrates this connection better than the <code class="svar">onmouseover</code> 
   and <code class="svar">onmouseout</code> keywords, used in 253,222 cases together 
   (over 95%).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-2:</strong> DOM event vs. HTML event handler usage comparison</caption>
   <tr valign="bottom"><th>Event type</th><th>DOM event<br />frequency</th><th>HTML event<br />handler<br />frequency</th><th rowspan="8">&#xA0;</th>
        <th>Event type</th><th>DOM event<br />frequency</th><th>HTML event<br />handler<br />frequency</th><th rowspan="8">&#xA0;</th>
        <th>Event type</th><th>DOM event<br />frequency</th><th>HTML event<br />handler<br />frequency</th></tr>
   <tr class="r1"><td>onload</td><td class="num">661,791</td><td class="num">772,567</td><td>onmouseup</td><td class="num">161,678</td><td class="num">41,497</td>
        <td>onblur</td><td class="num">31,190</td><td class="num">88,175</td></tr>
   <tr class="r2"><td>onclick</td><td class="num">356,291</td><td class="num">684,117</td><td>onunload</td><td class="num">106,075</td><td class="num">34,612</td>
        <td>onchange</td><td class="num">26,861</td><td class="num">163,476</td></tr>
   <tr class="r1"><td>onresize</td><td class="num">317,844</td><td class="num">17,950</td><td>onmousemove</td><td class="num">97,793</td><td class="num">7,173</td>
        <td>onkeyup</td><td class="num">17,129</td><td class="num">9,874</td></tr>
   <tr class="r2"><td>onerror</td><td class="num">294,842</td><td class="num">4,892</td><td>onsubmit</td><td class="num">55,652</td><td class="num">152,286</td>
        <td>onabort</td><td class="num">8,169</td><td class="num">255</td></tr>
   <tr class="r1"><td>onmouseout</td><td class="num">265,180</td><td class="num">998,854</td><td>onfocus</td><td class="num">50,100</td><td class="num">197,235</td>
        <td>ondblclick</td><td class="num">6,421</td><td class="num">2,416</td></tr>
   <tr class="r2"><td>onmouseover</td><td class="num">263,944</td><td class="num">1,051,631</td><td>onkeydown</td><td class="num">46,186</td><td class="num">14,518</td>
        <td>onreset</td><td class="num">1,561</td><td class="num">200</td></tr>
   <tr class="r1"><td>onmousedown</td><td class="num">177,502</td><td class="num">57,049</td><td>onkeypress</td><td class="num">42,782</td><td class="num">28,601</td>
        <td>onselect</td><td class="num">1,106</td><td class="num">736</td></tr>
</table>

<h2 id="loc">The Location object</h2>
<p>Overall, the keywords from this group were found in 1,511,874 of MAMA&#39;s URLs. 
   Most of these keywords have name collisions with other objects, so the frequency 
   amounts are most definitely inflated beyond any totals that could be tallied 
   solely for Location object usages. The main sources of name collision are the 
   <code class="svar">replace</code>/<code class="svar">search</code> keywords 
   also used by the String object, and the Location object shares all 
   of its properties with the Link object.</p>

<p>Another factor to consider with these (and other) keywords is their use in 
   conjunction with script library usage. Some of the script libraries are used 
   <strong>so</strong> often that an object, property and/or method&#39;s use in a 
   library would strongly skew usage numbers upward. For instance, the 
   <code class="svar">protocol</code> keyword is used by Google&#39;s Urchin tracker 
   and that alone would represent over 75% of its overall usage. The effects of 
   script library usage can not be treated lightly!</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> DOM Location object properties and methods</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">href</code></td><td class="num">1,156,937</td><td><code class="svar">hash</code></td><td class="num">484,143</td><td><code class="svar">host</code></td><td class="num">93,132</td></tr>
   <tr class="r2"><td><code class="svar">replace</code></td><td class="num">710,059</td><td><code class="svar">hostname</code></td><td class="num">474,023</td><td><code class="svar">force</code></td><td class="num">13,392</td></tr>
   <tr class="r1"><td><code class="svar">search</code></td><td class="num">658,995</td><td><code class="svar">pathname</code></td><td class="num">466,921</td><td><code class="svar">port</code></td><td class="num">10,443</td></tr>
   <tr class="r2"><td><code class="svar">protocol</code></td><td class="num">506,825</td><td><code class="svar">reload</code></td><td class="num">304,513</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="misc">Miscellaneous objects, properties, and methods</h2>
<p>This was a &quot;catch-all&quot; group used to group together various keywords that 
   didn&#39;t fit into the other DOM object groups. Some of the keywords were leftover 
   legacy checks that MAMA had sought prior to the tokenization effort. Others
   were hand-picked from objects only having one or a few properties that might 
   be of later interest. To reiterate, putting keywords here simply enabled faster 
   searching capability. Otherwise they would have continued on to the final remainder 
   token group I termed &quot;The Others&quot;. The &quot;item&quot; keyword here has the highest usage&#8212;it can be used to access the components of a variety of different objects; however, it is also a generic keyword that could result in some name collision. The 
   remaining curiosity in this group is the <code class="svar">hasFeature</code> 
   keyword. With only 4,629 instances in a churning sea of heavy DOM usage, this 
   shortcut method for detecting feature support has gained almost <strong>NO</strong> 
   authoring traction and appears to be a failure.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-1:</strong> Misc. DOM objects, properties, and methods</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">item</code></td><td class="num">238,099</td><td><code class="svar">getClientRects</code></td><td class="num">5,611</td></tr>
   <tr class="r2"><td><code class="svar">specified</code></td><td class="num">23,664</td><td><code class="svar">hasFeature</code></td><td class="num">4,629</td></tr>
   <tr class="r1"><td><code class="svar">getBoundingClientRect</code></td><td class="num">16,574</td><td><code class="svar">namedItem</code></td><td class="num">356</td></tr>
   <tr class="r2"><td><code class="svar">createDocument</code></td><td class="num">11,822</td><td><code class="svar">ownerElement</code></td><td class="num">21</td></tr>
</table>

<h2 id="nav">The Navigator object</h2>
<p>The use of <code class="svar">appVersion</code>, <code class="svar">appName</code> 
   and <code class="svar">userAgent</code> in conjunction with 
   <a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/#globconstmeth">parseInt</a> and <a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/#string">indexOf/substring</a> 
   has previously been discussed, resulting in a proclamation that those methods 
   are usually coupled to Navigator object usage to enable browser sniffing. Now 
   we can look at how these 3 Navigator object keywords are used together by authors.</p>

<p>At least one of the Navigator object keywords were found in 1,553,086 of MAMA&#39;s 
   URLs, and for the top three keywords, the count is still a very high 1,345,468 URLs, 
   or 51.41% of all Script cases. They are all used together in only 319,289 of those 
   instances. The strongest affinity between these keywords is with <code class="svar">appName</code> 
   and <code class="svar">appVersion</code>; they are used together in 664,239 
   cases, or about 75% of their respective totals in isolation.</p>

<p><a href="http://dev.opera.com/articles/view/mama-plug-ins/#flashjava">Elsewhere in MAMA&#39;s research</a>, 
   we looked at the criteria MAMA used to judge when Java and Flash were in use. 
   We can attempt to do the same here by looking at two specific keywords from the 
   Navigator object. The <code class="svar">javaEnabled</code> keyword was detected 
   669,819 times, compared with MAMA&#39;s method of discovery tallying 53,688 times&#8212;a <strong>HUGE</strong> difference. MAMA&#39;s Java usage detection tricks were not 
   exhaustive but should catch most cases. Perhaps most Java applet references are 
   written dynamically by Web pages these days. This fragile theory may not be as 
   flimsy as it seems if we also look at the <code class="svar">plugins</code> 
   keyword compared to MAMA&#39;s other parameters for finding Flash usage. MAMA&#39;s 
   basic Flash detection methods pointed toward a very strong interaction of Flash 
   and script, and the heavy use of the <code class="svar">plugins</code> keyword fits in nicely with that.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-1:</strong> DOM Navigator object properties and methods</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="4">&#xA0;</th><th>Property/method</th><th>Frequency</th>
        <th rowspan="4">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">appVersion</code></td><td class="num">885,564</td><td><code class="svar">plugins</code></td><td class="num">683,748</td><td><code class="svar">platform</code></td><td class="num">167,109</td></tr>
   <tr class="r2"><td><code class="svar">appName</code></td><td class="num">877,345</td><td><code class="svar">javaEnabled</code></td><td class="num">669,819</td><td><code class="svar">cookieEnabled</code></td><td class="num">45,411</td></tr>
   <tr class="r1"><td><code class="svar">userAgent</code></td><td class="num">812,382</td><td><code class="svar">mimeTypes</code></td><td class="num">323,142</td><td><code class="svar">appCodeName</code></td><td class="num">3,398</td></tr>
</table>
   
<h2 id="nodeobj">The Node object</h2>
<p>The <code class="svar">appendChild</code> keyword was especially popular in 
   this group&#8212;authors apparently like to dynamically add content to documents. 
   What a surprise! It was detected in 713,711 of MAMA&#39;s URLs&#8212;more than twice 
   as often as the next-nearest Node object keyword. This number may seem unusually 
   high compared to its other keyword siblings, but not if we look outside the Node 
   object for a correlation. The related DOM method <code class="svar">document.createElement</code> 
   is a likely companion to <code class="svar">appendChild</code>, and it was 
   seen 731,116 times.</p>

<p>Some other relative comparisons can also be interesting; <code class="svar">appendChild</code> 
   is four times as popular as <code class="svar">removeChild</code>, while 
   <code class="svar">removeChild</code> is <strong>MUCH</strong> more popular 
   than <code class="svar">replaceChild</code>. <code class="svar">firstChild</code> 
   is approximately three times as popular as <code class="svar">lastChild</code> and 
   <code class="svar">nextSibling</code> is more than 3 times as popular as 
   <code class="svar">previousSibling</code>. <code class="svar">nodeType</code> 
   and <code class="svar">nodeName</code> are used a similar number of times and 
   are used in combination ~2/3 of the time (93,546 cases). Authors do not seem 
   to use the <code class="svar">hasAttributes</code> property (found only 75 times)&#8212;they must be using some other means to check for attributes&#39; existence.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-1:</strong> DOM Node object properties and methods<br />(Please see also the <a href="domnodeobjs-url.htm">full frequency table</a>.)</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Property/method</th><th>Frequency</th>
        <th rowspan="8">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">appendChild</code></td><td class="num">713,711</td><td><code class="svar">nodeName</code></td><td class="num">144,836</td><td><code class="svar">ownerDocument</code></td><td class="num">60,851</td></tr>
   <tr class="r2"><td><code class="svar">parentNode</code></td><td class="num">317,411</td><td><code class="svar">attributes</code></td><td class="num">127,841</td><td><code class="svar">xml</code></td><td class="num">48,824</td></tr>
   <tr class="r1"><td><code class="svar">childNodes</code></td><td class="num">236,865</td><td><code class="svar">nodeValue</code></td><td class="num">116,097</td><td><code class="svar">replaceChild</code></td><td class="num">47,405</td></tr>
   <tr class="r2"><td><code class="svar">firstChild</code></td><td class="num">186,788</td><td><code class="svar">hasChildNodes</code></td><td class="num">115,660</td><td><code class="svar">cloneNode</code></td><td class="num">47,233</td></tr>
   <tr class="r1"><td><code class="svar">removeChild</code></td><td class="num">174,231</td><td><code class="svar">nextSibling</code></td><td class="num">102,171</td><td><code class="svar">previousSibling</code></td><td class="num">28,972</td></tr>
   <tr class="r2"><td><code class="svar">insertBefore</code></td><td class="num">152,605</td><td><code class="svar">prefix</code></td><td class="num">93,197</td><td><code class="svar">normalize</code></td><td class="num">10,107</td></tr>
   <tr class="r1"><td><code class="svar">nodeType</code></td><td class="num">150,297</td><td><code class="svar">lastChild</code></td><td class="num">62,872</td><td><code class="svar">selectSingleNode</code></td><td class="num">7,679</td></tr>
</table>

<h2 id="rangeobj">The Range object</h2>
<p>Usage of the various properties and methods of the Range object was detected 
   83,590 times (only 3.19% of URLs using script). By comparison, the 
   <code class="svar">createRange</code> method of the Document object was used 
   by 75,703 URLs. Of these Range keywords, <code class="svar">collapse</code> 
   is used the most, with both <code class="svar">setStartBefore</code> and 
   <code class="svar">setStartAfter</code> also being very popular. 
   The <code class="svar">selectNodeContents</code> method was found to be considerably 
   more popular than <code class="svar">selectNode</code>&#8212;by almost a factor 
   of eight. Other related start/end keywords have usage rates that are similar to each other.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 11-1:</strong> DOM Range object properties and methods<br />(Please see also the <a href="domrangeobjs-url.htm">full frequency table</a>.)</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Property/method</th><th>Frequency</th>
        <th rowspan="7">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">collapse</code></td><td class="num">51,435</td><td><code class="svar">deleteContents</code></td><td class="num">3,935</td><td><code class="svar">endOffset</code></td><td class="num">2,647</td></tr>
   <tr class="r2"><td><code class="svar">setStartBefore</code></td><td class="num">43,138</td><td><code class="svar">setStart</code></td><td class="num">3,171</td><td><code class="svar">insertNode</code></td><td class="num">2,321</td></tr>
   <tr class="r1"><td><code class="svar">setStartAfter</code></td><td class="num">40,270</td><td><code class="svar">startOffset</code></td><td class="num">3,150</td><td><code class="svar">cloneContents</code></td><td class="num">2,261</td></tr>
   <tr class="r2"><td><code class="svar">selectNodeContents</code></td><td class="num">37,027</td><td><code class="svar">setEnd</code></td><td class="num">3,086</td><td><code class="svar">endContainer</code></td><td class="num">2,236</td></tr>
   <tr class="r1"><td><code class="svar">collapsed</code></td><td class="num">12,862</td><td><code class="svar">detach</code></td><td class="num">2,732</td><td><code class="svar">cloneRange</code></td><td class="num">1,993</td></tr>
   <tr class="r2"><td><code class="svar">selectNode</code></td><td class="num">4,636</td><td><code class="svar">startContainer</code></td><td class="num">2,659</td><td><code class="svar">setEndAfter</code></td><td class="num">1,911</td></tr>
</table>

<h2 id="screenobj">The Screen object</h2>
<p>In the midst of compiling this research, a few surprising tidbits of information came to light. Based on my experience in the past, I didn&#39;t expect the 
   <code class="svar">colorDepth</code> property to be as popular as it was (just 
   over 32% of all MAMA&#39;s script cases). The next closest keyword was used with 
   only 30% of the frequency of <code class="svar">colorDepth</code>. The 
   <code class="svar">availWidth</code> and <code class="svar">availHeight</code> 
   properties are almost always used together (253,148 cases). Similarly, the 
   <code class="svar">screenX</code>/<code class="svar">screenY</code> and 
   <code class="svar">screenTop</code>/<code class="svar">screenLeft</code> 
   properties are usually paired together as well (19,022 and 14,823 times 
   respectively).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 12-1:</strong> DOM Screen object properties and methods</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">colorDepth</code></td><td class="num">843,022</td><td><code class="svar">screenY</code></td><td class="num">19,173</td></tr>
   <tr class="r2"><td><code class="svar">availWidth</code></td><td class="num">257,025</td><td><code class="svar">screenTop</code></td><td class="num">15,778</td></tr>
   <tr class="r1"><td><code class="svar">availHeight</code></td><td class="num">255,641</td><td><code class="svar">screenLeft</code></td><td class="num">15,020</td></tr>
   <tr class="r2"><td><code class="svar">screenX</code></td><td class="num">19,735</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="table">Table related objects, properties, and methods</h2>
<p>These table keywords were in 75,110 cases. Things seem a little amiss with some 
   aspects of the results though. The <code class="elem">CAPTION</code> markup 
   element had a lower frequency than the <code class="svar">caption</code> keyword 
   in script, so its usage solely in a table-related context is suspect. As a 
   keyword, <code class="svar">caption</code> can also apply to image captions, 
   so there could be some name collision going on there. This also brings into 
   question usage rates for other simple (and popular) table-related generic 
   keywords <code class="svar">cells</code> and <code class="svar">rows</code>, 
   but the representation numbers don&#39;t really exhibit significant name collision 
   overlap issues. The <code class="svar">rows</code> and <code class="svar">cells</code> 
   keywords are used in combination together in a majority of their cases (21,574 
   times). However, <code class="svar">caption</code> is used rarely with either 
   <code class="svar">cells</code> or <code class="svar">rows</code> (719 and 1,971 
   times respectively).</p>

<p>The <code class="svar">tHead</code> keyword is only used 40% as often as 
   <code class="svar">tBodies</code>, while <code class="svar">tBodies</code> 
   is used ten times as often as <code class="svar">tFoot</code>. Dealing with 
   rows is more popular than dealing with individual cells (<code class="svar">rows</code>:<code class="svar">cells</code> = 
   47,401:25,321; <code class="svar">deleteRow</code>:<code class="svar">deleteCell</code> = 
   2,970:599), but authors use the DOM to insert rows and cells at similar rates.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 13-1:</strong> DOM Table-related object properties and methods</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Property/method</th><th>Frequency</th>
        <th rowspan="7">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">rows</code></td><td class="num">47,401</td><td><code class="svar">rowIndex</code></td><td class="num">3,703</td><td><code class="svar">tFoot</code></td><td class="num">167</td></tr>
   <tr class="r2"><td><code class="svar">cells</code></td><td class="num">25,321</td><td><code class="svar">deleteRow</code></td><td class="num">2,970</td><td><code class="svar">sectionRowIndex</code></td><td class="num">101</td></tr>
   <tr class="r1"><td><code class="svar">caption</code></td><td class="num">24,146</td><td><code class="svar">tHead</code></td><td class="num">1,944</td><td><code class="svar">createTHead</code></td><td class="num">21</td></tr>
   <tr class="r2"><td><code class="svar">tBodies</code></td><td class="num">4,824</td><td><code class="svar">deleteCell</code></td><td class="num">599</td><td><code class="svar">deleteCaption</code></td><td class="num">11</td></tr>
   <tr class="r1"><td><code class="svar">insertRow</code></td><td class="num">4,493</td><td><code class="svar">createCaption</code></td><td class="num">406</td><td><code class="svar">createTFoot</code></td><td class="num">7</td></tr>
   <tr class="r2"><td><code class="svar">insertCell</code></td><td class="num">4,314</td><td><code class="svar">deleteTHead</code></td><td class="num">368</td><td><code class="svar">deleteTFoot</code></td><td class="num">6</td></tr>
</table>

<h2 id="trav">Traversal-related objects, properties, and methods</h2>
<p>This section covers select keywords used by the NodeFilter, NodeIterator, and 
   TreeWalker objects. It was originally added to balance the search criteria for 
   the Range object. After all, the W3C specification is for both Range 
   <strong>AND</strong> Traversal. The results extracted from this section are 
   inconclusive. The <code class="svar">nextNode</code> method is used at much 
   higher rates than any of the other keywords tracked&#8212;by comparison all of 
   the other keywords are <strong>very</strong> rarely used. Since many of the 
   methods here are inherited from the more generalized Node object, it is hard 
   to draw many conclusions.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 14-1:</strong> DOM Traversal-related objects, properties, and methods</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="4">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">nextNode</code></td><td class="num">14,360</td><td><code class="svar">whatToShow</code></td><td class="num">46</td></tr>
   <tr class="r2"><td><code class="svar">createTreeWalker</code></td><td class="num">85</td><td><code class="svar">acceptNode</code></td><td class="num">39</td></tr>
   <tr class="r1"><td><code class="svar">NodeFilter</code></td><td class="num">84</td><td><code class="svar">previousNode</code></td><td class="num">10</td></tr>
</table>

<h2 id="win">The Window object</h2>
<p>This object represents a browser window or sub-frame. Of all the keywords in 
   this group, <code class="svar">window</code> was obviously going to be the 
   most popular. There are a number of interesting comparisons to be made between the various keyword couplings.</p>

<p>Dialogs are generated in JavaScript using the <code class="svar">alert</code>, 
   <code class="svar">confirm</code>, and <code class="svar">prompt</code> methods 
   of the Window object. Of these, <code class="svar">alert</code> is used most&#8212;17.84% of URLs using script utilize it in some fashion; <code class="svar">confirm</code> 
   and <code class="svar">prompt</code> are only found in 4.07% and 1.19% of scripted 
   pages respectively.</p>

<p><code class="svar">setTimeout</code> is almost twice as popular as <code class="svar">clearTimeout</code>, 
   but <code class="svar">clearTimeout</code> is almost <strong>NEVER</strong> 
   used without <code class="svar">setTimeout</code> (found together in 490,124 
   URLs). Similarly, <code class="svar">setInterval</code> is significantly more 
   popular than its companion <code class="svar">clearInterval</code>, but 
   <code class="svar">clearInterval</code> use is almost always paired with 
   <code class="svar">setInterval</code> (detected in unison 311,890 times).</p>

<p>The (move/scroll/resize)To methods are always more popular than the related 
   (move/scroll/resize)By methods; use of the move* actions are preferred over 
   the scroll* methods, which in turn see higher use than the resize* methods. 
   <code class="svar">pageXOffset</code> is only found 81.58% as often as the 
   <code class="svar">pageYOffset</code> cases, but <code class="svar">pageYOffset</code> 
   is rarely seen without a <code class="svar">pageXOffset</code> present. 
   The <code class="svar">innerHeight</code> and <code class="svar">innerWidth</code> methods 
   share very similar frequency rates, because they are usually used together 
   (in 641,857 cases).</p>

<p>Some of the keywords in this group are generic in nature and can be used across 
   multiple objects. The keywords <code class="svar">focus</code> and <code class="svar">blur</code> 
   were placed here, but also apply to other objects (like Input and Link). The 
   simple keyword <code class="svar">open</code> definitely applies as the Window 
   object method, but as a concept <code class="svar">open</code> is very generic 
   and there may be some name collision (such as another official use as a separate 
   method of the XMLHttpRequest object).</p>

<p>The relationship between <code class="svar">getComputedStyle</code> and 
   <code class="svar">currentStyle</code> was covered in the <a href="#elem">section 
   above on the Element object</a>. The History DOM object was not given its 
   own MAMA category, but its major (generically named) methods were extractable 
   from the &quot;rest&quot; section (<code class="svar">go</code>: 72,381, <code class="svar">back</code>: 
   41,836, <code class="svar">forward</code>: 4,572)&#8212;it seems that authors 
   are not inclined to go forward in the browsing history as often as they wish 
   to back.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 15-1:</strong> DOM Window object properties and methods<br />
        (Please see also the <a href="domwindowobjs-url.htm">full frequency table</a>.)</caption>
    <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Property/method</th><th>Frequency</th>
        <th rowspan="8">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
    <tr class="r1"><td><code class="svar">window</code></td><td class="num">1,812,773</td><td><code class="svar">frames</code></td><td class="num">790,893</td><td><code class="svar">alert</code></td><td class="num">467,055</td></tr>
    <tr class="r2"><td><code class="svar">navigator</code></td><td class="num">1,570,402</td><td><code class="svar">self</code></td><td class="num">739,456</td><td><code class="svar">status</code></td><td class="num">464,370</td></tr>
    <tr class="r1"><td><code class="svar">location</code></td><td class="num">1,475,171</td><td><code class="svar">innerWidth</code></td><td class="num">668,432</td><td><code class="svar">setInterval</code></td><td class="num">392,436</td></tr>
    <tr class="r2"><td><code class="svar">screen</code></td><td class="num">1,049,650</td><td><code class="svar">innerHeight</code></td><td class="num">657,440</td><td><code class="svar">close</code></td><td class="num">355,895</td></tr>
    <tr class="r1"><td><code class="svar">open</code></td><td class="num">1,021,945</td><td><code class="svar">event</code></td><td class="num">525,373</td><td><code class="svar">clearInterval</code></td><td class="num">316,922</td></tr>
    <tr class="r2"><td><code class="svar">parent</code></td><td class="num">836,445</td><td><code class="svar">clearTimeout</code></td><td class="num">493,937</td><td><code class="svar">history</code></td><td class="num">254,699</td></tr>
    <tr class="r1"><td><code class="svar">setTimeout</code></td><td class="num">812,357</td><td><code class="svar">focus</code></td><td class="num">475,947</td><td><code class="svar">pageYOffset</code></td><td class="num">254,325</td></tr>
</table>

<h3>Double checking the use of other DOM object names</h3>
<p>Some of the keywords in the Window object group represent the parent object 
   names for other DOM groupings in MAMA. Looking at these keyword frequencies 
   and the overall uses for the other keyword groups, we find that the totals 
   are quite compatible:</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 15-2:</strong> Comparison of DOM Window object keywords to other MAMA category totals</caption>
   <tr valign="bottom"><th>Window<br />object<br />keyword</th><th>Keyword<br />frequency</th><th>Keyword<br />group<br />frequency</th></tr>
   <tr class="r1"><td><span class="string">&quot;navigator&quot;</span></td><td class="num">1,570,402</td><td class="num">1,553,086</td></tr>
   <tr class="r2"><td><span class="string">&quot;location&quot;</span></td><td class="num">1,475,171</td><td class="num">1,511,874</td></tr>
   <tr class="r1"><td><span class="string">&quot;screen&quot;</span></td><td class="num">1,049,650</td><td class="num">899,431</td></tr>
</table>

<h2 id="xml">XML related objects, properties, and methods</h2>
<p>Not all of these keywords are dedicated solely to XML processing. The keyword 
   with the highest detected frequency here was <code class="svar">ActiveXObject</code>, 
   which is MSIE&#39;s generic system for using ActiveX controls in Web pages. How do
   we filter out non-XML related usages of <code class="svar">ActiveXObject</code>? 
   Firstly, authors wanting to use XMLHttpRequest these days will typically allow for 
   <strong>both</strong> types of objects. These two keywords are used together 
   in 105,013 cases (93.53% of <code class="svar">XMLHttpRequest</code> cases). 
   Another notable pairing is the incidence of the <code class="svar">onreadystatechange</code>
   keyword, which also tracks very close to use of <code class="svar">XMLHttpRequest</code> 
   (94.94%). The readyState is a vital part of XMLHTTP processing, so tracking 
   its numbers can also expose MSIE-only uses of XMLHTTP. The keywords <code class="svar">readyState</code> 
   and <code class="svar">onreadystatechange</code> were used together 104,763 times. 
   The remainder of the <code class="svar">readyState</code> cases (in 45,329 URLs) 
   will likely be MSIE centric syntax.</p>

<p>Saarsoo also looked for &quot;XMLHttpRequest&quot; usage and only encountered it 6,125 
   times&#8212;1.90% of the pages that were determined to be using JavaScript in his 
   study. By comparison, MAMA&#39;s usage rate is quite a bit higher. Considering 
   only the same metric (use of <code class="svar">XMLHttpRequest</code>), it 
   was found in 4.29% of MAMA&#39;s URLs that were using Script.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 16-1:</strong> DOM XML-related object properties and methods</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/method</th><th>Frequency</th>
        <th rowspan="5">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">ActiveXObject</code></td><td class="num">652,356</td><td><code class="svar">onreadystatechange</code></td><td class="num">106,599</td><td><code class="svar">getResponseHeader</code></td><td class="num">32,187</td></tr>
   <tr class="r2"><td><code class="svar">readyState</code></td><td class="num">150,092</td><td><code class="svar">responseText</code></td><td class="num">95,262</td><td><code class="svar">statusText</code></td><td class="num">22,358</td></tr>
   <tr class="r1"><td><code class="svar">XMLHttpRequest</code></td><td class="num">112,277</td><td><code class="svar">setRequestHeader</code></td><td class="num">73,413</td><td><code class="svar">parseFromString</code></td><td class="num">15,266</td></tr>
   <tr class="r2"><td><code class="svar">send</code></td><td class="num">109,029</td><td><code class="svar">responseXML</code></td><td class="num">42,272</td><td><code class="svar">getAllResponseHeaders</code></td><td class="num">11,492</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-script-identifier-tokenization/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: script identifier tokenization</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Script tokenization: ECMAScript/JavaScript syntax</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

