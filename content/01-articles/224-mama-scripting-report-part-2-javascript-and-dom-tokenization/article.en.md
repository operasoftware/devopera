Title: MAMA scripting report, part 2: JavaScript and DOM tokenization
----
Date: 2008-12-19 07:54:42
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

<h2>Introduction&#8212;mining JavaScript code</h2>
<p>Throughout much of MAMA&#39;s development history, script content was analyzed 
   using numerous substring and regular expression checks. There was always a 
   desire to use a more formal analysis, but an easy and simple solution never 
   presented itself. After discovering <a href="http://triin.net/2006/06/12/Coding_practices_of_web_pages">Saarsoo&#39;s 
   markup and CSS study</a> and the breadth of his results, it was decided that 
   one of the biggest deficits still outstanding in large-scale Web research was 
   an in-depth analysis of JavaScript. This was the impetus necessary to finally 
   tackle the formal analysis problem.</p>

<p>This week&#39;s overview on MAMA&#39;s scripting tokenization analysis can only be 
   called &quot;brief&quot; compared to the following detailed articles 
   that it summarizes:</p>
<ul>
    <li><a href="http://dev.opera.com/articles/view/mama-script-identifier-tokenization/">Script identifier tokenization</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/">Tokenization: JavaScript/ECMAScript syntax</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-script-tokenization-dom/">Tokenization: DOM</a></li>
</ul>

<h3>Analyzing the JavaScript</h3>
<p>MAMA adapted a simple <a href="http://www.cdiggins.com/tokenizer.html">public 
   domain JavaScript tokenization script</a> by Christopher Diggins. His tokenizer 
   breaks down JavaScript into a number of categories: 
   comments, quoted strings, identifiers, numbers, whitespace, and symbols. Of 
   these, the basic JavaScript and DOM syntax would be covered by the identifiers 
   category. Out of storage necessity, I wanted to break up these identifier tokens 
   into groups for easier access. The basic structure of JavaScript as a group of 
   objects with methods and properties lends itself to this type of categorization, 
   so it was a natural fit. The compartmentalization of the language into small 
   groups also easily translated to a database design that made searching for 
   specific JavaScript and DOM keywords much faster. MAMA would also store these 
   keywords with their case-sensitivity preserved, which would further aid in 
   disambiguating their use. All told, 28 categories were selected containing a 
   total of 481 identifier keywords.</p>

<h3>Tokenization: Problems encountered</h3>
<p>MAMA has done well with this initial tokenizer design, but it is a first-generation 
   effort that could be improved. For instance, a major bug was discovered after the 
   analysis phase&#8212;a database field created to store token identifier chains never 
   stored anything at all. This field would have allowed better correlation for keywords 
   with ambiguous meaning. For example, the <code class="svar">open</code> method is 
   used by multiple objects including Window and XMLHTTPRequest; the lost MAMA field 
   would have allowed a greater degree of clarity with multiple uses of the same 
   keyword. The next major MAMA crawl will definitely address this lack and will 
   go even farther in its examination of scripting.</p>

<p>Some other basic issues were noticed during this process:</p>

<ul>
    <li>The fewer characters in a keyword, the less likely it is to be used for a single 
        specific purpose. This is especially true for common or ambiguous words like 
        <code class="svar">all</code>, <code class="svar">class</code> and <code class="svar">id</code>.</li>
    <li>Mixed-case keywords stand a higher chance of representing unique usage, 
        especially camel-case property and method keywords, such as <code class="svar">hasChildNodes</code>
        and <code class="svar">getElementById</code>.</li>

</ul>

<h2>JavaScript (ECMAScript)</h2>
<p>The JavaScript keyword category contains 13 different areas of the JavaScript/ECMAScript 
   language, covering basic JavaScript syntax and core JavaScript objects.</p>

<h3>JavaScript (ECMAScript) language keywords</h3>
<p>This is the list of keywords standardized by ECMAScript v3. Each keyword is 
   part of the language&#39;s basic syntax. As such, many of them are expected to have 
   <strong>VERY</strong> high usage, which is indeed the case. Looking at the 
   entire group, these keywords are used in 2,476,007 URLs (94.6% of all pages 
   using scripting). A closer examination of this section reveals some of the 
   basic ways that JavaScript/ECMAScript is used in the wild:</p>

<ul>
    <li>The keyword <code class="keyw">function</code> is used the most of all keywords, with 
        87.2% of all scripting cases. In all, 84.7% of pages that used <code class="keyw">function</code> 
        had at least one case of the <code class="keyw">return</code> keyword.</li>
    <li>Predictably, <code class="keyw">function</code> is more popular than <code class="keyw">var</code>, 
        and in turn <code class="keyw">var</code> is used at higher rates than <code class="keyw">new</code>.</li>
    <li>Conditional constructs (<code class="keyw">if</code>) are favored over looping (<code class="keyw">for</code>), 
        and the alternate looping mechanism <code class="keyw">while</code> is 
        less popular than the primary <code class="keyw">for</code> usage.</li>
    <li>The <code class="keyw">else</code> keyword for conditional code flow was 
        used 80% as often as the companion keyword <code class="keyw">if</code>.</li>
    <li><code class="keyw">break</code> is favored over <code class="keyw">continue</code>.</li>
    <li>Boolean values <code class="keyw">true</code> and <code class="keyw">false</code> 
        are used a similar number of times and are used together 1,314,911 times (91.2% 
        of <code class="keyw">false</code> cases and 85.6% of <code class="keyw">true</code> 
        cases).</li>
    <li>The <code class="keyw">try</code>/<code class="keyw">catch</code> syntax is 
        used a similar number of times. The fallback condition <code class="keyw">finally</code> 
        is only used in 5.5% of the cases using <code class="keyw">catch</code>.</li>
</ul>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">JavaScript (ECMAScript) keywords</caption>
   <tr valign="bottom"><th>Keyword</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Keyword</th><th>Frequency</th>
       <th rowspan="8">&#xA0;</th><th>Keyword</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Keyword</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="keyw">function</code></td><td class="num">2,281,902</td><td><code class="keyw">true</code></td><td class="num">1,529,306</td>
       <td><code class="keyw">try</code></td><td class="num">753,384</td><td><code class="keyw">default</code></td><td class="num">254,919</td></tr>
   <tr class="r2"><td><code class="keyw">if</code></td><td class="num">2,253,000</td><td><code class="keyw">false</code></td><td class="num">1,441,874</td>
       <td><code class="keyw">catch</code></td><td class="num">752,271</td><td><code class="keyw">throw</code></td><td class="num">242,519</td></tr>
   <tr class="r1"><td><code class="keyw">var</code></td><td class="num">2,152,170</td><td><code class="keyw">null</code></td><td class="num">1,412,832</td>
       <td><code class="keyw">continue</code></td><td class="num">611,755</td><td><code class="keyw">do</code></td><td class="num">137,318</td></tr>
   <tr class="r2"><td><code class="keyw">new</code></td><td class="num">1,939,996</td><td><code class="keyw">typeof</code></td><td class="num">1,015,441</td>
       <td><code class="keyw">in</code></td><td class="num">563,323</td><td><code class="keyw">void</code></td><td class="num">130,542</td></tr>
   <tr class="r1"><td><code class="keyw">return</code></td><td class="num">1,932,406</td><td><code class="keyw">while</code></td><td class="num">1,014,486</td>
       <td><code class="keyw">case</code></td><td class="num">328,235</td><td><code class="keyw">delete</code></td><td class="num">77,570</td></tr>
   <tr class="r2"><td><code class="keyw">else</code></td><td class="num">1,795,957</td><td><code class="keyw">break</code></td><td class="num">893,712</td>
       <td><code class="keyw">switch</code></td><td class="num">325,443</td><td><code class="keyw">instanceof</code></td><td class="num">61,019</td></tr>
   <tr class="r1"><td><code class="keyw">for</code></td><td class="num">1,751,342</td><td><code class="keyw">this</code></td><td class="num">810,322</td>
       <td><code class="keyw">with</code></td><td class="num">287,731</td><td><code class="keyw">finally</code></td><td class="num">41,788</td></tr>
</table>

<h3>The Array object</h3>
<p>This object&#39;s property and method keywords were detected in 1,835,275 URLs. 
   The Array object is mostly concerned with manipulations of array structures, 
   but it has one main informational property, <code class="svar">length</code>, 
   which informs about the number of items in the array. This property is used 
   far more often than any of the other Array-specific methods, but that is an 
   expected state of affairs, because it is also used by the String object to 
   count the number of characters in a string. The way MAMA is currently set up, 
   it can not distinguish between these two uses. Of the standard array operations, 
   <code class="svar">push</code> is much more popular than <code class="svar">pop</code>, 
   <code class="svar">shift</code> is much more popular than <code class="svar">unshift</code>, 
   while <code class="svar">shift</code> has only marginally higher representation than <code class="svar">pop</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Properties and methods of the Array object</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">length</code></td><td class="num">1,825,953</td><td><code class="svar">reverse</code></td><td class="num">62,908</td></tr>
   <tr class="r2"><td><code class="svar">join</code></td><td class="num">401,563</td><td><code class="svar">pop</code></td><td class="num">56,512</td></tr>
   <tr class="r1"><td><code class="svar">push</code></td><td class="num">378,223</td><td><code class="svar">splice</code></td><td class="num">50,193</td></tr>
   <tr class="r2"><td><code class="svar">slice</code></td><td class="num">187,082</td><td><code class="svar">sort</code></td><td class="num">46,780</td></tr>
   <tr class="r1"><td><code class="svar">concat</code></td><td class="num">113,300</td><td><code class="svar">unshift</code></td><td class="num">19,198</td></tr>
   <tr class="r2"><td><code class="svar">shift</code></td><td class="num">84,745</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3>JavaScript: The global object</h3>
<p>This is not an object class, but it covers references to all the major predefined 
   objects, including the Error object types. MAMA detected the use of these global 
   object references in 1,817,657 URLs (almost 70% of all URLs using scripting). The 
   Array object is referenced most, used in over 55% of all URLs using script. The 
   Date object is explicitly used in over 42% of scripting cases. All the other global 
   objects were mentioned by only 15% or less each of scripting cases.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Properties and methods of the Global object</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">Array</code></td><td class="num">1,453,169</td><td><code class="svar">RangeError</code></td><td class="num">33,849</td></tr>
   <tr class="r2"><td><code class="svar">Date</code></td><td class="num">1,119,350</td><td><code class="svar">Boolean</code></td><td class="num">23,715</td></tr>
   <tr class="r1"><td><code class="svar">Object</code></td><td class="num">368,446</td><td><code class="svar">Math</code></td><td class="num">23,560</td></tr>
   <tr class="r2"><td><code class="svar">String</code></td><td class="num">361,638</td><td><code class="svar">SyntaxError</code></td><td class="num">4,857</td></tr>
   <tr class="r1"><td><code class="svar">RegExp</code></td><td class="num">315,660</td><td><code class="svar">TypeError</code></td><td class="num">785</td></tr>
   <tr class="r2"><td><code class="svar">Error</code></td><td class="num">221,977</td><td><code class="svar">ReferenceError</code></td><td class="num">179</td></tr>
   <tr class="r1"><td><code class="svar">Function</code></td><td class="num">152,246</td><td><code class="svar">URIError</code></td><td class="num">135</td></tr>
   <tr class="r2"><td><code class="svar">Number</code></td><td class="num">103,658</td><td><code class="svar">EvalError</code></td><td class="num">129</td></tr>
</table>

<h3>The String object</h3>
<p>The String object is used to manipulate groups of individual characters. MAMA 
   discovered 1,982,954 URLs using String object-specific keywords, but that 
   includes the <code class="svar">length</code> property, which is also used as 
   a property by the Array object. This name collision issue also happens with the 
   <code class="svar">replace</code>/<code class="svar">search</code> keywords, 
   which are used by both the String and Location objects. The way MAMA is currently 
   set up, it can not distinguish between multiple uses of a keyword. Judging by 
   the relative popularity of other properties and methods between the two objects, 
   it is likely that the majority of the 1,825,953 uses of the <code class="svar">length</code> 
   property are in a String object context.</p>

<p>Most of the String object methods have high usage rates; <code class="svar">length</code>, 
   <code class="svar">indexOf</code>, and <code class="svar">substring</code> are 
   all used in more than half of the URLs that use scripting. There are some 
   clear trends though&#8212;<code class="svar">toLowerCase</code> is 
   <strong>MUCH</strong> more popular than <code class="svar">toUpperCase</code>, 
   and <code class="svar">substring</code> is <strong>MUCH</strong> more popular 
   than <code class="svar">substr</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Properties and methods of the String object</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">length</code></td><td class="num">1,825,953</td><td><code class="svar">lastIndexOf</code></td><td class="num">642,927</td></tr>
   <tr class="r2"><td><code class="svar">indexOf</code></td><td class="num">1,643,269</td><td><code class="svar">charCodeAt</code></td><td class="num">486,355</td></tr>
   <tr class="r1"><td><code class="svar">substring</code></td><td class="num">1,523,307</td><td><code class="svar">substr</code></td><td class="num">470,049</td></tr>
   <tr class="r2"><td><code class="svar">toLowerCase</code></td><td class="num">966,482</td><td><code class="svar">match</code></td><td class="num">450,277</td></tr>
   <tr class="r1"><td><code class="svar">split</code></td><td class="num">912,249</td><td><code class="svar">toUpperCase</code></td><td class="num">271,588</td></tr>
   <tr class="r2"><td><code class="svar">charAt</code></td><td class="num">870,869</td><td><code class="svar">fromCharCode</code></td><td class="num">140,676</td></tr>
   <tr class="r1"><td><code class="svar">replace</code></td><td class="num">710,059</td><td><code class="svar">localeCompare</code></td><td class="num">169</td></tr>
   <tr class="r2"><td><code class="svar">search</code></td><td class="num">658,995</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2>The DOM</h2>
<p>Scripting use was found in MAMA 2,617,305 times. This section is devoted to 
the results uncovered for 294 DOM-related keywords in 15 categories encompassing 
the largest Objects and conceptual areas of the DOM. 
The DOM is a very large domain to cover, so in the end I limited the initial set 
to objects and keywords that I thought might be the most popular or interesting. </p>

<h3>The Document object</h3>
<p>Forty keywords were associated with the Document object for MAMA, with 2,353,632 
   of the URLs having at least one of the keyword snippets (89.9% of all URLs 
   using script). The parent substring <code class="svar">document</code> has 
   the highest popularity here, and it actually has the highest occurrence of 
   <strong>ANY</strong> tokenized keyword detected by MAMA (in 89.6% of all 
   script). This could be persuasive evidence in demonstrating that dynamically 
   changing the document is the <strong>most</strong> popular use of JavaScript.</p>
    
<p>The <code class="svar">getElementById</code> and <code class="svar">write</code> 
   keywords are understandably quite popular, being the basic historic methods for 
   addressing and dynamically creating parts of a document; each was found in over 
   50% of all script cases. The W3C DOM method of addressing content 
   <code class="svar">document.getElementById</code> is more popular than the 
   MSIE-originated <code class="svar">document.all</code> by a comfortable margin. 
   The <code class="svar">getElementById</code> method is almost twice as popular as 
   <code class="svar">getElementsByTagName</code>, and both trounce 
   <code class="svar">getElementsByName</code> by a <strong>wide</strong> 
   margin. The <code class="svar">write</code> method is clearly preferred by 
   authors over <code class="svar">writeln</code> 4.5 to 1.</p>

<p>Other keywords from the Document object can tell us a lot about many aspects of usage in
   Web-page authoring. The <code class="svar">layers</code> keyword is actually 
   the most common process used to detect (browser sniff) Netscape Navigator 4, 
   which explains why the use of this keyword in script is <strong>so</strong> 
   large compared to the <a href="http://dev.opera.com/articles/view/mama-phrase-block-list/#extensions"><code class="elem">LAYER</code> 
   element</a> (the script keyword is used over 34 times as much)! The <code class="svar">cookie</code> 
   keyword can give a good measure of how often client-side cookies are used by 
   script (22.4% of all Web pages). This is probably a much better measure than 
   the Navigator object&#39;s <code class="svar">cookieEnabled</code> property reflecting 
   only 45,411 cases. The <code class="svar">images</code> keyword here is just one 
   useful factor in determining whether scripting is dynamically controlling images; 
   top keywords from the token remainders list also suggest Image usage (<code class="svar">src</code>, 
   <code class="svar">width</code>, <code class="svar">Image</code>, and 
   <code class="svar">height</code>). These could also be leveraged to discover 
   scripts that are manipulating Images. Direct use of the <code class="elem">FORM</code>, 
   <code class="elem">INPUT</code> or <code class="elem">SELECT</code> elements 
   in markup were detected in 1,068,842 cases, while the DOM level 0 <code class="svar">forms</code> 
   keyword was detected 665,305 times. However, these factors occurred <strong>together</strong> 
   only 293,048 times. What this disparity might suggest about form control via 
   script is not really clear&#8212;perhaps, in a significant number of cases,form 
   widgets are generated dynamically.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">DOM Document object properties and methods</caption>
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

<h3>The Element object</h3>
<p>The keywords collected under the Element object umbrella were found in 1,336,464 
   URLs from MAMA. The MSIE shorthand <code class="svar">innerHTML</code>, which is 
   used to read and dynamically write content in a document, is very popular. If we 
   compare <code class="svar">innerHTML</code> to <code class="svar">document.createElement</code> 
   or any of the Node object&#39;s methods for accessing and writing child nodes, it 
   appears that it may actually be less popular these days than equivalent W3C DOM 
   methods. Writing attributes with the <code class="svar">setAttribute</code> 
   method appears to be a more frequent authoring task than merely reading it with 
   <code class="svar">getAttribute</code>.</p>

<p>The <code class="svar">currentStyle</code> keyword (used 111,964 times) comes 
   from IE and is only slightly more widespread than the W3C DOM version 
   <code class="svar">window.getComputedStyle</code> (used 99,815 times). These 
   two methods of accessing a browser&#39;s CSS interpretation share usage in a large 
   majority of the cases (92,505 times), indicating an author preference to get 
   the job done using any and <strong>all</strong> methods at their disposal.</p>

<p>The offset/scroll methods originated by IE show clear trends. 
   <code class="svar">offsetTop</code> and <code class="svar">offsetLeft</code> 
   are more popular than either <code class="svar">offsetHeight</code> and 
   <code class="svar">offsetWidth</code>. Similarly, Top and Left are both more 
   popular than Height and Width for the &quot;scroll&quot; methods. The Top and Height 
   properties are always more popular than the Left and Width properties for 
   both the offset and scroll method groups. In cases where the Left and Width 
   component methods are used, the overwhelming majority (more than 90% each) 
   are used in conjunction with the more dominant Top/Height methods.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">DOM Element object properties and methods</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="6">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">id</code></td><td class="num">1,007,621</td><td><code class="svar">className</code></td><td class="num">359,699</td><td><code class="svar">getAttribute</code></td><td class="num">299,346</td></tr>
   <tr class="r2"><td><code class="svar">innerHTML</code></td><td class="num">695,329</td><td><code class="svar">offsetHeight</code></td><td class="num">353,416</td><td><code class="svar">scrollLeft</code></td><td class="num">283,749</td></tr>
   <tr class="r1"><td><code class="svar">setAttribute</code></td><td class="num">413,403</td><td><code class="svar">scrollTop</code></td><td class="num">352,061</td><td><code class="svar">scrollHeight</code></td><td class="num">252,315</td></tr>
   <tr class="r2"><td><code class="svar">offsetTop</code></td><td class="num">370,397</td><td><code class="svar">offsetWidth</code></td><td class="num">339,529</td><td><code class="svar">tagName</code></td><td class="num">245,805</td></tr>
   <tr class="r1"><td><code class="svar">offsetLeft</code></td><td class="num">361,448</td><td><code class="svar">offsetParent</code></td><td class="num">330,524</td><td><code class="svar">currentStyle</code></td><td class="num">111,964</td></tr>
</table>

<h3>The Node object</h3>
<p>The <code class="svar">appendChild</code> keyword was especially popular in 
   this group. Authors apparently like to dynamically add content to documents&#8212;what a surprise! It was detected in 713,711 of MAMA&#39;s URLs&#8212;more than twice 
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
   <code class="svar">nextSibling</code> is more than three times as popular as 
   <code class="svar">previousSibling</code>. <code class="svar">nodeType</code> 
   and <code class="svar">nodeName</code> are used a similar number of times and 
   are used in combination ~2/3 of the time (93,546 cases).</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">DOM Node object properties and methods</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="8">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">appendChild</code></td><td class="num">713,711</td><td><code class="svar">nodeName</code></td><td class="num">144,836</td><td><code class="svar">ownerDocument</code></td><td class="num">60,851</td></tr>
   <tr class="r2"><td><code class="svar">parentNode</code></td><td class="num">317,411</td><td><code class="svar">attributes</code></td><td class="num">127,841</td><td><code class="svar">xml</code></td><td class="num">48,824</td></tr>
   <tr class="r1"><td><code class="svar">childNodes</code></td><td class="num">236,865</td><td><code class="svar">nodeValue</code></td><td class="num">116,097</td><td><code class="svar">replaceChild</code></td><td class="num">47,405</td></tr>
   <tr class="r2"><td><code class="svar">firstChild</code></td><td class="num">186,788</td><td><code class="svar">hasChildNodes</code></td><td class="num">115,660</td><td><code class="svar">cloneNode</code></td><td class="num">47,233</td></tr>
   <tr class="r1"><td><code class="svar">removeChild</code></td><td class="num">174,231</td><td><code class="svar">nextSibling</code></td><td class="num">102,171</td><td><code class="svar">previousSibling</code></td><td class="num">28,972</td></tr>
   <tr class="r2"><td><code class="svar">insertBefore</code></td><td class="num">152,605</td><td><code class="svar">prefix</code></td><td class="num">93,197</td><td><code class="svar">normalize</code></td><td class="num">10,107</td></tr>
   <tr class="r1"><td><code class="svar">nodeType</code></td><td class="num">150,297</td><td><code class="svar">lastChild</code></td><td class="num">62,872</td><td><code class="svar">selectSingleNode</code></td><td class="num">7,679</td></tr>
</table>

<h3>The Window object</h3>
<p>This object represents a browser window or sub-frame. Of all the keywords in 
   this group, <code class="svar">window</code> was obviously going to be the 
   most popular. There are a number of intriguing comparisons to be made between 
   the various keyword couplings.</p>

<p>Dialogs are generated in JavaScript using the <code class="svar">alert</code>, 
   <code class="svar">confirm</code>, and <code class="svar">prompt</code> methods 
   of the Window object. Of these, <code class="svar">alert</code> is used most&#8212;17.8% of URLs using script utilize it in some fashion; <code class="svar">confirm</code> 
   and <code class="svar">prompt</code> are only found in 4.1% and 1.2% of scripted 
   pages respectively.</p>

<p><code class="svar">setTimeout</code> is almost twice as popular as <code class="svar">clearTimeout</code>, 
   but <code class="svar">clearTimeout</code> is almost <strong>NEVER</strong> 
   used without <code class="svar">setTimeout</code> (found together in 490,124 
   URLs). Similarly, <code class="svar">setInterval</code> is significantly more 
   popular than its companion <code class="svar">clearInterval</code>, but 
   <code class="svar">clearInterval</code> use is almost always paired with 
   <code class="svar">setInterval</code> (detected in unison 311,890 times).</p>

<p>Some of the keywords in this group are generic in nature and can be used across 
   multiple objects. The keywords <code class="svar">focus</code> and <code class="svar">blur</code> 
   were placed here, but also apply to other objects (like Input and Link). The 
   simple keyword <code class="svar">open</code> definitely applies as the Window 
   object method, but as a concept <code class="svar">open</code> is very generic 
   and there may be some name collision (such as another official use as a separate 
   method of the XMLHttpRequest object).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">DOM Window object properties and methods</caption>
    <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="8">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
    <tr class="r1"><td><code class="svar">window</code></td><td class="num">1,812,773</td><td><code class="svar">frames</code></td><td class="num">790,893</td><td><code class="svar">alert</code></td><td class="num">467,055</td></tr>
    <tr class="r2"><td><code class="svar">navigator</code></td><td class="num">1,570,402</td><td><code class="svar">self</code></td><td class="num">739,456</td><td><code class="svar">status</code></td><td class="num">464,370</td></tr>
    <tr class="r1"><td><code class="svar">location</code></td><td class="num">1,475,171</td><td><code class="svar">innerWidth</code></td><td class="num">668,432</td><td><code class="svar">setInterval</code></td><td class="num">392,436</td></tr>
    <tr class="r2"><td><code class="svar">screen</code></td><td class="num">1,049,650</td><td><code class="svar">innerHeight</code></td><td class="num">657,440</td><td><code class="svar">close</code></td><td class="num">355,895</td></tr>
    <tr class="r1"><td><code class="svar">open</code></td><td class="num">1,021,945</td><td><code class="svar">event</code></td><td class="num">525,373</td><td><code class="svar">clearInterval</code></td><td class="num">316,922</td></tr>
    <tr class="r2"><td><code class="svar">parent</code></td><td class="num">836,445</td><td><code class="svar">clearTimeout</code></td><td class="num">493,937</td><td><code class="svar">history</code></td><td class="num">254,699</td></tr>
    <tr class="r1"><td><code class="svar">setTimeout</code></td><td class="num">812,357</td><td><code class="svar">focus</code></td><td class="num">475,947</td><td><code class="svar">pageYOffset</code></td><td class="num">254,325</td></tr>
</table>

<h3>XML related objects, properties, and methods</h3>
<p>Not all of these keywords are dedicated solely to XML processing. The keyword 
   with the highest detected frequency here was <code class="svar">ActiveXObject</code>, 
   which is MSIE&#39;s generic system for using ActiveX controls in Web pages. How do
   we filter out non-XML related usages of <code class="svar">ActiveXObject</code>? 
   Firstly, authors wanting to use XMLHttpRequest these days will typically allow for 
   <strong>both</strong> types of objects. These two keywords are used together 
   in 105,013 cases (93.5% of <code class="svar">XMLHttpRequest</code> cases). 
   Another notable pairing is the incidence of the <code class="svar">onreadystatechange</code>
   keyword, which also tracks very close to use of <code class="svar">XMLHttpRequest</code> 
   (94.9%). The readyState is a vital part of XMLHTTP processing, so tracking 
   its numbers can also expose MSIE-only uses of XMLHTTP. The keywords <code class="svar">readyState</code> 
   and <code class="svar">onreadystatechange</code> were used together 104,763 times. 
   The remainder of the <code class="svar">readyState</code> cases (in 45,329 URLs) 
   will likely be MSIE centric syntax.</p>

<p>Saarsoo also looked for &quot;XMLHttpRequest&quot; usage and only encountered it 6,125 
   times&#8212;1.9% of the pages that were determined to be using JavaScript in his 
   study. By comparison, MAMA&#39;s usage rate is quite a bit higher. Considering 
   only the same metric (use of <code class="svar">XMLHttpRequest</code>), it 
   was found in 4.3% of MAMA URLs that were using script.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">DOM XML-related object properties and methods</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">ActiveXObject</code></td><td class="num">652,356</td><td><code class="svar">onreadystatechange</code></td><td class="num">106,599</td><td><code class="svar">getResponseHeader</code></td><td class="num">32,187</td></tr>
   <tr class="r2"><td><code class="svar">readyState</code></td><td class="num">150,092</td><td><code class="svar">responseText</code></td><td class="num">95,262</td><td><code class="svar">statusText</code></td><td class="num">22,358</td></tr>
   <tr class="r1"><td><code class="svar">XMLHttpRequest</code></td><td class="num">112,277</td><td><code class="svar">setRequestHeader</code></td><td class="num">73,413</td><td><code class="svar">parseFromString</code></td><td class="num">15,266</td></tr>
   <tr class="r2"><td><code class="svar">send</code></td><td class="num">109,029</td><td><code class="svar">responseXML</code></td><td class="num">42,272</td><td><code class="svar">getAllResponseHeaders</code></td><td class="num">11,492</td></tr>
</table>

<h2>Conclusion</h2>
<p>I have come to the conclusion that adding the JavaScript tokenizer was a 
   very good move. There is still a lot more that can be extracted from 
   scripting, but this process brings it a <strong>LONG</strong> way in 
   the right direction. This is the first ever detailed look at script usage on a 
   large scale in the wild, and it offers comprehensive data on the subjects 
   of JavaScript and the DOM. Short of adding a full JavaScript execution 
   engine to MAMA&#39;s analysis, this tokenizer will serve the MAMA system 
   well for some time to come; There is even more interesting data still
   to be mined from this in the future.</p>
   
   <h2>Overall summary - MAMA phase 1</h2>

<p>So, this brings the release of the current crop of MAMA analysis data to completion&#8212;I truly 
   hope this data has been useful, and that it answers some of the burning 
   questions you have about what is out there on the Web. However, this is by no 
   means the end of what MAMA has to offer; there will be a short pause until 
   after the new year while MAMA gathers more data. The next phase of MAMA&#39;s 
   life will involve a full re-crawl of the URL set used in this study in 
   order to examine how Web pages change over time. During that process, a 
   number of brand-new search criteria will 
   also be analyzed. New data resulting from this update will of 
   course end up published in additional articles here on dev.opera.com as soon as they are ready.</p>

<p>There has been considerable interest in making MAMA&#39;s data available for 
   general consumption, and we are definitely moving in that direction as 
   resources allow it. Please let us know if you would like to be included in the
   preliminary betas of this project.</p>
   
   <p>And of course, please let us know also if you have any ideas for further data mining you would like to see done, or think there is anything noticeably absent from the current data set.</p>
