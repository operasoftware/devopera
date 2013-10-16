Title: MAMA script tokenization: ECMAScript/JavaScript syntax
----
Date: 2008-12-19 07:53:35
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-script-tokenization-dom/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Script tokenization: DOM</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-what-has-come-before/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: What has come before</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>


<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#keywords">JavaScript/ECMAScript keywords</a></li>
    <li><a href="#reserved">ECMAScript-reserved words</a></li>
    <li><a href="#array">Array object</a></li>
    <li><a href="#date">Date object</a></li>
    <li><a href="#func">Function object</a></li>
    <li><a href="#globconstmeth">Global constants and methods</a></li>
    <li><a href="#globobj">Global objects</a></li>
    <li><a href="#globproto">Global object prototypes&#8212;messing with a good thing</a></li>
    <li><a href="#math">Math object</a></li>
    <li><a href="#number">Number object</a></li>
    <li><a href="#object">Object object</a></li>
    <li><a href="#regexp">RegExp object</a></li>
    <li><a href="#string">String object</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Scripting use was detected in 2,617,305 of MAMA&#39;s URLs. This entire 
   section is devoted to details of 13 different areas of the JavaScript/ECMAScript 
   language, covering basic JavaScript syntax and core JavaScript objects. We will 
   leave analysis of the DOM for the <a href="http://dev.opera.com/articles/view/mama-script-tokenization-dom/">dedicated DOM tokenization</a> article.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 1-1:</strong> Overall use of JavaScript/ECMAScript factors</caption>
   <tr valign="bottom"><th>JavaScript factor</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>JavaScript factor</th><th>Frequency</th></tr>
   <tr class="r1"><td>ECMAScript keywords</td><td class="num">2,476,007</td><td>Function object</td><td class="num">925,025</td></tr>
   <tr class="r2"><td>String object</td><td class="num">1,982,954</td><td>Object object</td><td class="num">487,445</td></tr>
   <tr class="r1"><td>Array object</td><td class="num">1,835,275</td><td>RegExp object</td><td class="num">313,752</td></tr>
   <tr class="r2"><td>Global objects</td><td class="num">1,817,657</td><td>Global prototypes</td><td class="num">170,844</td></tr>
   <tr class="r1"><td>Global constants/methods</td><td class="num">1,760,274</td><td>Reserved keywords</td><td class="num">94,035</td></tr>
   <tr class="r2"><td>Date object</td><td class="num">1,085,966</td><td>Number object</td><td class="num">11,641</td></tr>
</table>

<h2 id="keywords">JavaScript/ECMAScript keywords</h2>
<p>This is the list of keywords standardized by ECMAScript v3. Each keyword is 
   part of the language&#39;s basic syntax. As such, many of them are expected to have 
   <strong>VERY</strong> high usage, which is indeed the case. Looking at the 
   entire group, these keywords are used in 2,476,007 URLs (94.60% of all pages 
   using scripting). A closer examination of this section reveals some of the 
   basic ways that JavaScript/ECMAScript is used in the wild:</p>

<ul>
    <li><code class="keyw">function</code> is used the most of all keywords with 
        87.19% of all scripting cases. In 84.68% of the pages that used <code class="keyw">function</code> 
        there was at least one <code class="keyw">return</code> keyword also detected.</li>
    <li>Predictably, <code class="keyw">function</code> is more popular than <code class="keyw">var</code>, 
        and in turn <code class="keyw">var</code> is used at higher rates than <code class="keyw">new</code>.</li>
    <li>Conditional constructs (<code class="keyw">if</code>) are favored over looping (<code class="keyw">for</code>), 
        and the alternate looping mechanism <code class="keyw">while</code> is 
        less popular than the primary <code class="keyw">for</code> usage.</li>
    <li>The <code class="keyw">else</code> keyword for conditional code flow was 
        used 80% as often as the companion keyword <code class="keyw">if</code>.</li>
    <li><code class="keyw">break</code> is favored over <code class="keyw">continue</code>.</li>
    <li>Boolean values <code class="keyw">true</code> and <code class="keyw">false</code> 
        are used a similar number of times and are used together 1,314,911 times (91.19% 
        of <code class="keyw">false</code> cases and 85.98% of <code class="keyw">true</code> 
        cases).</li>
    <li>The<code class="keyw">try</code>/<code class="keyw">catch</code> syntax is 
        used a similar number of times. The fallback condition <code class="keyw">finally</code> 
        is only used in 5.5% of the cases using <code class="keyw">catch</code>.</li>
</ul>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> ECMAScript/JavaScript keywords</caption>
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

<h2 id="reserved">ECMAScript-reserved words</h2>
<p>These keywords are not currently used by ECMAScript/JavaScript, but ECMA has 
   reserved their use for possible inclusion in future ECMAScript versions. The 
   reserved words do not necessarily tell us too much about current script syntax
   but can point out the scope of possible problems if new scripting syntax is 
   introduced. All told, 94,035 URLs used at least 1 of these reserved words, with the 
   <code class="keyw">class</code> keyword detected almost 5 times as often as 
   its nearest reserved word value. If MAMA&#39;s tokenization process can be trusted, 
   as many as 3.59% of URLs that use scripting could be in for some kind of surprise 
   if any of these reserved words become official parts of future ECMAScript syntax.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> ECMAScript-reserved words</caption>
   <tr valign="bottom"><th>Reserved<br />word</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Reserved<br />word</th><th>Frequency</th>
        <th rowspan="9">&#xA0;</th><th>Reserved<br />word</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Reserved<br />word</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="keyw">class</code></td><td class="num">69,649</td><td><code class="keyw">public</code></td><td class="num">1,665</td>
        <td><code class="keyw">goto</code></td><td class="num">420</td><td><code class="keyw">abstract</code></td><td class="num">81</td></tr>
   <tr class="r2"><td><code class="keyw">boolean</code></td><td class="num">14,510</td><td><code class="keyw">private</code></td><td class="num">1,441</td>
        <td><code class="keyw">interface</code></td><td class="num">347</td><td><code class="keyw">implements</code></td><td class="num">33</td></tr>
   <tr class="r1"><td><code class="keyw">float</code></td><td class="num">12,915</td><td><code class="keyw">double</code></td><td class="num">971</td>
        <td><code class="keyw">super</code></td><td class="num">340</td><td><code class="keyw">const</code></td><td class="num">31</td></tr>
   <tr class="r2"><td><code class="keyw">static</code></td><td class="num">7,485</td><td><code class="keyw">protected</code></td><td class="num">913</td>
        <td><code class="keyw">package</code></td><td class="num">305</td><td><code class="keyw">byte</code></td><td class="num">26</td></tr>
   <tr class="r1"><td><code class="keyw">import</code></td><td class="num">3,813</td><td><code class="keyw">final</code></td><td class="num">841</td>
        <td><code class="keyw">extends</code></td><td class="num">152</td><td><code class="keyw">synchronized</code></td><td class="num">11</td></tr>
   <tr class="r2"><td><code class="keyw">int</code></td><td class="num">3,058</td><td><code class="keyw">short</code></td><td class="num">630</td>
        <td><code class="keyw">export</code></td><td class="num">130</td><td><code class="keyw">volatile</code></td><td class="num">11</td></tr>
   <tr class="r1"><td><code class="keyw">native</code></td><td class="num">2,613</td><td><code class="keyw">enum</code></td><td class="num">585</td>
        <td><code class="keyw">debugger</code></td><td class="num">127</td><td><code class="keyw">transient</code></td><td class="num">5</td></tr>
   <tr class="r2"><td><code class="keyw">long</code></td><td class="num">2,490</td><td><code class="keyw">char</code></td><td class="num">494</td>
        <td><code class="keyw">throws</code></td><td class="num">107</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="array">Array object</h2>
<p>This object&#39;s property and method keywords were detected in 1,835,275 URLs. 
   The Array object is mostly concerned with manipulations of array structures, 
   but it has one main informational property, <code class="svar">length</code>, 
   which details the number of items in the array. This property is used 
   far more often than any of the other Array-specific methods, but that is an 
   expected state of affairs, because it is also used by the String object to 
   count the number of characters in a string. <a href="http://dev.opera.com/articles/view/mama-script-identifier-tokenization/#how">The 
   way tokenization in MAMA is currently set up</a>, it can not distinguish between these two uses. 
   Of the standard array operations, <code class="svar">push</code> is much more 
   popular than <code class="svar">pop</code>, <code class="svar">shift</code> 
   is much more popular than <code class="svar">unshift</code>, while 
   <code class="svar">shift</code> has only marginally higher representation than 
   <code class="svar">pop</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> Properties and methods of the Array object</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">length</code></td><td class="num">1,825,953</td><td><code class="svar">concat</code></td><td class="num">113,300</td><td><code class="svar">splice</code></td><td class="num">50,193</td></tr>
   <tr class="r2"><td><code class="svar">join</code></td><td class="num">401,563</td><td><code class="svar">shift</code></td><td class="num">84,745</td><td><code class="svar">sort</code></td><td class="num">46,780</td></tr>
   <tr class="r1"><td><code class="svar">push</code></td><td class="num">378,223</td><td><code class="svar">reverse</code></td><td class="num">62,908</td><td><code class="svar">unshift</code></td><td class="num">19,198</td></tr>
   <tr class="r2"><td><code class="svar">slice</code></td><td class="num">187,082</td><td><code class="svar">pop</code></td><td class="num">56,512</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="date">Date object</h2>
<p>MAMA found 1,085,966 URLs using at least one of these Date object keywords. This 
   object has dozens of methods that allow full control of all aspects of dates and 
   times. Most of the methods have &quot;plain&quot; versions and UTC (Coordinated Universal Time) 
   versions, but the plain types were always found to be more popular than the 
   corresponding UTC incarnations. Additionally, most of the timeframe methods have 
   get and set variations. As an example, two main methods to access the month portion 
   of a date are <code class="svar">getMonth</code> and <code class="svar">setMonth</code>. 
   The MAMA URL set revealed that reading an existing date component (&quot;get&quot;) is 
   always more popular than the date&#39;s corresponding write method (&quot;set&quot;).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> Properties and methods of the Date object<br />[Please also see the <a href="jsdateobjs-url.htm">full frequency table</a>.]</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">getTime</code></td><td class="num">880,057</td><td><code class="svar">getMonth</code></td><td class="num">238,845</td>
        <td><code class="svar">getDay</code></td><td class="num">161,373</td><td><code class="svar">getSeconds</code></td><td class="num">119,185</td></tr>
   <tr class="r2"><td><code class="svar">toGMTString</code></td><td class="num">589,687</td><td><code class="svar">getDate</code></td><td class="num">231,988</td>
        <td><code class="svar">getYear</code></td><td class="num">156,232</td><td><code class="svar">setMonth</code></td><td class="num">29,439</td></tr>
   <tr class="r1"><td><code class="svar">setTime</code></td><td class="num">534,490</td><td><code class="svar">parse</code></td><td class="num">223,046</td>
        <td><code class="svar">getMinutes</code></td><td class="num">131,256</td><td><code class="svar">setDate</code></td><td class="num">28,329</td></tr>
   <tr class="r2"><td><code class="svar">getTimezoneOffset</code></td><td class="num">327,185</td><td><code class="svar">getHours</code></td><td class="num">167,625</td>
        <td><code class="svar">getFullYear</code></td><td class="num">125,465</td><td><code class="svar">setFullYear</code></td><td class="num">22,882</td></tr>
</table>

<h2 id="func">Function object</h2>
<p>The properties and methods of the Function object are applied to JavaScript 
   functions&#8212;really, they <strong>must</strong> stop using such hard-to-remember 
   syntax! In all, 925,025 URLs from MAMA detected these specific property/method keywords. 
   Of that number, 97.40% of the time the <code class="svar">arguments</code> 
   keyword is used, which is just over 1/3 of all URLs that use scripting. All 
   other property/method keywords here have much lower usage rates.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> Properties and methods of the Function object</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="4">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">arguments</code></td><td class="num">900,932</td><td><code class="svar">callee</code></td><td class="num">58,194</td></tr>
   <tr class="r2"><td><code class="svar">apply</code></td><td class="num">113,173</td><td><code class="svar">caller</code></td><td class="num">22,094</td></tr>
   <tr class="r1"><td><code class="svar">call</code></td><td class="num">77,192</td><td><code class="svar">prototype</code></td><td class="num">9,260</td></tr>
</table>

<h2 id="globconstmeth">Global constants and methods</h2>
<p>These keywords control aspects of the global object. They were detected in 
   1,760,274 URLs from MAMA, or just over 2/3 of all scripting cases. The 
   <code class="svar">escape</code> keyword is more popular than the corresponding 
   <code class="svar">unescape</code> keyword, by a 3:2 ratio. The <code class="svar">encodeURI</code> keyword is <strong>FAR</strong> more popular than the related <code class="svar">decodeURI</code> 
   keyword (by almost 50 to 1!); but, in an odd twist, <code class="svar">encodeURIComponent</code> 
   is only <strong>slightly</strong> more popular than <code class="svar">decodeURIComponent</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Global object constants and methods</caption>
   <tr valign="bottom"><th>Contstant/method</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Contstant/method</th><th>Frequency</th>
        <th rowspan="6">&#xA0;</th><th>Constant/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">parseInt</code></td><td class="num">1,172,466</td><td><code class="svar">decodeURIComponent</code></td><td class="num">541,755</td><td><code class="svar">isFinite</code></td><td class="num">25,243</td></tr>
   <tr class="r2"><td><code class="svar">escape</code></td><td class="num">1,096,151</td><td><code class="svar">encodeURI</code></td><td class="num">392,740</td><td><code class="svar">NaN</code></td><td class="num">12,135</td></tr>
   <tr class="r1"><td><code class="svar">eval</code></td><td class="num">971,985</td><td><code class="svar">isNaN</code></td><td class="num">356,244</td><td><code class="svar">decodeURI</code></td><td class="num">8,414</td></tr>
   <tr class="r2"><td><code class="svar">unescape</code></td><td class="num">729,588</td><td><code class="svar">parseFloat</code></td><td class="num">343,896</td><td><code class="svar">Infinity</code></td><td class="num">935</td></tr>
   <tr class="r1"><td><code class="svar">encodeURIComponent</code></td><td class="num">589,443</td><td><code class="svar">undefined</code></td><td class="num">177,960</td><td><code class="svar">getClass</code></td><td class="num">638</td></tr>
</table>

<h3>Browser sniffing and parseInt</h3>
<p>The <code class="svar">parseInt</code> keyword is the most popular of all the 
   global object constants and methods, so taking a closer look is warranted. The keyword <code class="svar">parseInt</code> is often found when using script to perform 
   crude browser detection (sniffing). So, how often is <code class="svar">parseInt</code> 
   used when comparing it to the components of the Navigator object that are also 
   commonly employed to do browser sniffing? The following numbers only indicate 
   usage somewhere for the same URL&#8212;it does not mean they are used in the 
   same function or even the same script! Still, the high degree of use correlation between 
   <code class="svar">parseInt</code> and the popular Navigator properties indicates 
   a distinct affinity between the two.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-2:</strong> Use of &quot;parseInt&quot; with Navigator properties</caption>
   <tr valign="bottom"><th>Condition</th><th>Frequency</th><th>Total for<br />Navigator<br />property</th><th>Navigator<br />property %</th></tr>
   <tr valign="top" class="r1"><td><code class="svar">parseInt</code> &amp;&amp; <code class="svar">appVersion</code></td><td class="num">731,386</td><td class="num">885,564</td><td class="num">82.59%</td></tr>
   <tr valign="top" class="r2"><td><code class="svar">parseInt</code> &amp;&amp; <code class="svar">appName</code></td><td class="num">630,039</td><td class="num">877,345</td><td class="num">71.81%</td></tr>
   <tr valign="top" class="r1"><td><code class="svar">parseInt</code> &amp;&amp; <code class="svar">userAgent</code></td><td class="num">593,363</td><td class="num">812,382</td><td class="num">73.04%</td></tr>
</table>

<h2 id="globobj">Global objects</h2>
<p>This is JavaScript&#39;s global object. It is not an object class, but it covers 
   references to all the major predefined objects, including Error object types. 
   MAMA detected the use of these global object references in 1,817,657 URLs 
   (almost 70% of all URLs using scripting). The Array object is referenced most, 
   used in over 55% of all URLs using script. The Date object is explicitly 
   used in over 42% of scripting cases. All the other global objects were mentioned 
   by only 15% or less each of scripting cases.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-1:</strong> Properties and methods of the Global object</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">Array</code></td><td class="num">1,453,169</td><td><code class="svar">RegExp</code></td><td class="num">315,660</td>
        <td><code class="svar">RangeError</code></td><td class="num">33,849</td><td><code class="svar">TypeError</code></td><td class="num">785</td></tr>
   <tr class="r2"><td><code class="svar">Date</code></td><td class="num">1,119,350</td><td><code class="svar">Error</code></td><td class="num">221,977</td>
        <td><code class="svar">Boolean</code></td><td class="num">23,715</td><td><code class="svar">ReferenceError</code></td><td class="num">179</td></tr>
   <tr class="r1"><td><code class="svar">Object</code></td><td class="num">368,446</td><td><code class="svar">Function</code></td><td class="num">152,246</td>
        <td><code class="svar">Math</code></td><td class="num">23,560</td><td><code class="svar">URIError</code></td><td class="num">135</td></tr>
   <tr class="r2"><td><code class="svar">String</code></td><td class="num">361,638</td><td><code class="svar">Number</code></td><td class="num">103,658</td>
        <td><code class="svar">SyntaxError</code></td><td class="num">4,857</td><td><code class="svar">EvalError</code></td><td class="num">129</td></tr>
</table>

<h2 id="globproto">Global object prototypes&#8212;messing with a good thing</h2>
<p>A developer at Opera requested real-life use cases where JavaScript/ECMAScript&#39;s 
   built in global object types were modified using the prototype property. If an 
   identifier chain (ex: <code class="svar">Array.prototype</code>) contained the 
   string <span class="string">&quot;.prototype&quot;</span> and the substring before that 
   was a reference to one of the global objects, it was considered a match. The 
   detection method used was not perfect (eg: <code class="svar">foo.Array.prototype</code> 
   would not match) and was intended to be a first-generation attempt only. Several 
   of the global objects&#8212;mostly the Error objects&#8212;did not appear to have any 
   prototype modification: <code class="svar">EvalError</code>, <code class="svar">Math</code>, 
   <code class="svar">RangeError</code>, <code class="svar">ReferenceError</code>, 
   and <code class="svar">URIError</code>. The Array object had the most prototype 
   changes by a wide margin, followed by the String object. What use might such 
   information serve? For one, the data could point out functionality that the 
   global objects lack which many authors could find useful. These could be good 
   candidates for new features in future versions of JavaScript/ECMAScript.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-1:</strong> Modified global object prototypes</caption>
   <tr valign="bottom"><th>Object</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Object</th><th>Frequency</th>
        <th rowspan="5">&#xA0;</th><th>Object</th><th>Frequency</th></tr>
   <tr class="r1"><td>Array</td><td class="num">125,575</td><td>Date</td><td class="num">15,681</td><td>RegExp</td><td class="num">257</td></tr>
   <tr class="r2"><td>String</td><td class="num">77,123</td><td>Object</td><td class="num">12,282</td><td>TypeError</td><td class="num">5</td></tr>
   <tr class="r1"><td>Function</td><td class="num">52,457</td><td>Error</td><td class="num">4,837</td><td>SyntaxError</td><td class="num">5</td></tr>
   <tr class="r2"><td>Number</td><td class="num">40,049</td><td>Boolean</td><td class="num">731</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="math">Math object</h2>
<p>A bug prevented MAMA from directly saving the information for this object from 
   the pages it analyzed. The Math object constants and static functions <strong>were</strong> 
   successfully pulled from scripts by MAMA, but the database field where that 
   information would be stored was not created properly. Hence, that particular 
   data was thrown away. But not all was lost&#8212;&quot;leftovers&quot; list from the tokenizer 
   existed for all identifier tokens that did not get placed into other categories, 
   and this stored the information for the Math object, anyway. These numbers 
   <strong>should</strong> be reliable for our analysis. Future versions of MAMA 
   will correct this bug.</p>

<p>Several of the Math object constants (<code class="svar">E</code>, 
   <code class="svar">LOG10E</code>, <code class="svar">LOG2E</code>, 
   <code class="svar">SQRT1_2</code> and <code class="svar">SQRT2</code>) were 
   not detectable in any of the URLs that MAMA analyzed. Of the remaining ones, 
   only <code class="svar">PI</code> was detected in a significant quantity 
   (9,766 times). Computing the maximum and minimum (<code class="svar">max</code> 
   and <code class="svar">min</code> respectively) was also very well represented.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-1:</strong> Constants and functions of the Math object</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="8">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="8">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">max</code></td><td class="num">73,296</td><td><code class="svar">cos</code></td><td class="num">7,281</td><td><code class="svar">ceil</code></td><td class="num">760</td></tr>
   <tr class="r2"><td><code class="svar">exp</code></td><td class="num">63,522</td><td><code class="svar">abs</code></td><td class="num">4,935</td><td><code class="svar">atan2</code></td><td class="num">581</td></tr>
   <tr class="r1"><td><code class="svar">min</code></td><td class="num">58,858</td><td><code class="svar">sin</code></td><td class="num">4,056</td><td><code class="svar">tan</code></td><td class="num">253</td></tr>
   <tr class="r2"><td><code class="svar">log</code></td><td class="num">30,632</td><td><code class="svar">pow</code></td><td class="num">3,886</td><td><code class="svar">acos</code></td><td class="num">136</td></tr>
   <tr class="r1"><td><code class="svar">random</code></td><td class="num">26,900</td><td><code class="svar">floor</code></td><td class="num">3,042</td><td><code class="svar">atan</code></td><td class="num">28</td></tr>
   <tr class="r2"><td><code class="svar">PI</code></td><td class="num">9,766</td><td><code class="svar">sqrt</code></td><td class="num">1,972</td><td><code class="svar">LN10</code></td><td class="num">20</td></tr>
   <tr class="r1"><td><code class="svar">round</code></td><td class="num">9,244</td><td><code class="svar">asin</code></td><td class="num">1,804</td><td><code class="svar">LN2</code></td><td class="num">4</td></tr>
</table>

<h2 id="number">Number object</h2>
<p>The constants and methods from this object were not accessed very often compared 
   to other objects - only 0.44% of all scripts used 1 or more of them in MAMA&#39;s 
   URL set. The keyword used most of all is <code class="svar">MAX_VALUE</code>, 
   but the one used the fewest times is <code class="svar">MIN_VALUE</code>...quite 
   appropriate. The value <code class="svar">POSITIVE_INFINITY</code> is used more 
   than twice as much as <code class="svar">NEGATIVE_INFINITY</code>...this is 
   probably a very funny cosmic math joke to someone, but for most people the 
   punchline would fall flat.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 11-1:</strong> Constants and methods of the Number object</caption>
   <tr valign="bottom"><th>Constant/method</th><th>Frequency</th><th rowspan="5">&#xA0;</th><th>Constant/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">MAX_VALUE</code></td><td class="num">7,526</td><td><code class="svar">toPrecision</code></td><td class="num">282</td></tr>
   <tr class="r2"><td><code class="svar">toFixed</code></td><td class="num">3,291</td><td><code class="svar">toExponential</code></td><td class="num">90</td></tr>
   <tr class="r1"><td><code class="svar">POSITIVE_INFINITY</code></td><td class="num">737</td><td><code class="svar">MIN_VALUE</code></td><td class="num">47</td></tr>
   <tr class="r2"><td><code class="svar">NEGATIVE_INFINITY</code></td><td class="num">319</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="object">Object object</h2>
<p>This object is a superclass&#8212;the parent of all JavaScript objects&#8212;and, 
   as such, these properties and methods are shared by all other objects. There 
   were 487,445 URLs in MAMA that used 1 or more of these property/method keywords, 
   with the <code class="svar">toString</code> method being the runaway author favorite.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 12-1:</strong> Properties and methods of the Object object</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">toString</code></td><td class="num">468,948</td><td><code class="svar">hasOwnProperty</code></td><td class="num">7,659</td></tr>
   <tr class="r2"><td><code class="svar">constructor</code></td><td class="num">83,338</td><td><code class="svar">propertyIsEnumerable</code></td><td class="num">370</td></tr>
   <tr class="r1"><td><code class="svar">valueOf</code></td><td class="num">23,573</td><td><code class="svar">isPrototypeOf</code></td><td class="num">35</td></tr>
   <tr class="r2"><td><code class="svar">toLocaleString</code></td><td class="num">8,337</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="regexp">RegExp object</h2>
<p>This object was created to enable regular expression pattern matching functionality 
   in JavaScript/ECMAScript. One or more of these keywords were found in 313,752 of 
   MAMA&#39;s URLs. Several of the keywords here stand a greater chance of being non-unique 
   with respect to the RegExp object, so some of the results here may be biased. For 
   instance, <code class="svar">test</code> as a keyword is nondescript and could 
   represent many things in different situations.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 13-1:</strong> Properties and methods of the RegExp object</caption>
   <tr valign="bottom"><th>Property/method</th><th>Frequency</th><th rowspan="9">&#xA0;</th><th>Property/method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">test</code></td><td class="num">237,755</td><td><code class="svar">lastIndex</code></td><td class="num">11,052</td></tr>
   <tr class="r2"><td><code class="svar">exec</code></td><td class="num">113,711</td><td><code class="svar">ignoreCase</code></td><td class="num">3,068</td></tr>
   <tr class="r1"><td><code class="svar">source</code></td><td class="num">70,751</td><td><code class="svar">multiline</code></td><td class="num">751</td></tr>
   <tr class="r2"><td><code class="svar">global</code></td><td class="num">12,847</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h2 id="string">String object</h2>
<p>The String object is used to manipulate groups of individual characters. MAMA 
   discovered 1,982,954 URLs using String object-specific keywords, but that 
   includes the <code class="svar">length</code> property, which is also used as 
   a property by the Array object. This name collision issue also happens with the 
   <code class="svar">replace</code>/<code class="svar">search</code> keywords, 
   which are used by both the String and Location objects. The way MAMA is currently 
   set up, it cannot distinguish between multiple uses of a keyword. Judging by 
   the relative popularity of other properties and methods between the two objects, 
   it is likely that the majority of the 1,825,953 uses of the <code class="svar">length</code> 
   property are in a String object context. Some of this object&#39;s methods were not 
   grouped here by MAMA, specifically the HTML methods (<code class="svar">anchor</code>, 
   <code class="svar">big</code>, <code class="svar">blink</code>, <code class="svar">bold</code>, 
   <code class="svar">fixed</code>, <code class="svar">fontcolor</code>, 
   <code class="svar">fontsize</code>, <code class="svar">italics</code>, 
   <code class="svar">link</code>, <code class="svar">small</code>, 
   <code class="svar">strike</code>, <code class="svar">sub</code> and 
   <code class="svar">sup</code>), but most of these can be tracked in the 
   section covering &quot;<a href="http://dev.opera.com/articles/view/mama-script-identifier-tokenization/#therest">The Rest</a>&quot;. Some of 
   the methods of the String object (namely <code class="svar">concat</code> and 
   <code class="svar">slice</code>) were never detected in any of the URLs MAMA analyzed.</p>

<p>Most of the String object methods have high usage rates; <code class="svar">length</code>, 
   <code class="svar">indexOf</code> and <code class="svar">substring</code> are 
   all used in more than half of the URLs that use scripting. There are some 
   interesting trends though - <code class="svar">toLowerCase</code> is 
   <strong>MUCH</strong> more popular than <code class="svar">toUpperCase</code>, 
   and <code class="svar">substring</code> is <strong>MUCH</strong> more popular 
   than <code class="svar">substr</code>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 14-1:</strong> Properties and methods of the String object</caption>
   <tr valign="bottom"><th>Property/<br />method</th><th>Frequency</th><th rowspan="6">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th>
        <th rowspan="6">&#xA0;</th><th>Property/<br />method</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="svar">length</code></td><td class="num">1,825,953</td><td><code class="svar">charAt</code></td><td class="num">870,869</td><td><code class="svar">substr</code></td><td class="num">470,049</td></tr>
   <tr class="r2"><td><code class="svar">indexOf</code></td><td class="num">1,643,269</td><td><code class="svar">replace</code></td><td class="num">710,059</td><td><code class="svar">match</code></td><td class="num">450,277</td></tr>
   <tr class="r1"><td><code class="svar">substring</code></td><td class="num">1,523,307</td><td><code class="svar">search</code></td><td class="num">658,995</td><td><code class="svar">toUpperCase</code></td><td class="num">271,588</td></tr>
   <tr class="r2"><td><code class="svar">toLowerCase</code></td><td class="num">966,482</td><td><code class="svar">lastIndexOf</code></td><td class="num">642,927</td><td><code class="svar">fromCharCode</code></td><td class="num">140,676</td></tr>
   <tr class="r1"><td><code class="svar">split</code></td><td class="num">912,249</td><td><code class="svar">charCodeAt</code></td><td class="num">486,355</td><td><code class="svar">localeCompare</code></td><td class="num">169</td></tr>
</table>

<h3>IndexOf, substring, and browser sniffing</h3>
<p>The discussion in the Global object section looked for a correlation between 
   the use of the <code class="svar">parseInt</code> method and several common 
   Navigator object properties: <code class="svar">appName</code>, 
   <code class="svar">appVersion</code>, <code class="svar">userAgent</code>. 
   Two methods of the String object are also used often in browser-sniffing scripts: 
   <code class="svar">indexOf</code> and <code class="svar">substring</code>. We 
   again see a strong use correlation between these String methods and the Navigator
   object properties. The biggest connection drawn between these items is the use 
   of <code class="svar">indexOf</code> with the <code class="svar">userAgent</code> 
   Navigator property in over 98% of <code class="svar">userAgent</code> cases.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 15-1:</strong> Use of &quot;parseInt&quot; with Navigator properties</caption>
   <tr valign="bottom"><th>Condition</th><th>Frequency</th><th>Total for<br />Navigator<br />property</th><th>Navigator<br />property %</th></tr>
   <tr class="r1"><td><code class="svar">indexOf</code> &amp;&amp; <code class="svar">userAgent</code></td><td class="num">801,109</td><td class="num">812,382</td><td class="num">98.61%</td></tr>
   <tr class="r2"><td><code class="svar">indexOf</code> &amp;&amp; <code class="svar">appVersion</code></td><td class="num">702,228</td><td class="num">885,564</td><td class="num">79.30%</td></tr>
   <tr class="r1"><td><code class="svar">indexOf</code> &amp;&amp; <code class="svar">appName</code></td><td class="num">650,241</td><td class="num">877,345</td><td class="num">74.11%</td></tr>
   <tr class="r2"><td><code class="svar">substring</code> &amp;&amp; <code class="svar">userAgent</code></td><td class="num">705,859</td><td class="num">812,382</td><td class="num">86.89%</td></tr>
   <tr class="r1"><td><code class="svar">substring</code> &amp;&amp; <code class="svar">appVersion</code></td><td class="num">642,193</td><td class="num">885,564</td><td class="num">72.52%</td></tr>
   <tr class="r2"><td><code class="svar">substring</code> &amp;&amp; <code class="svar">appName</code></td><td class="num">611,198</td><td class="num">877,345</td><td class="num">69.66%</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-script-tokenization-dom/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Script tokenization: DOM</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-what-has-come-before/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: What has come before</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
