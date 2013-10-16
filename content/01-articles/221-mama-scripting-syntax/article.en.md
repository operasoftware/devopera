Title: MAMA: Scripting syntax
----
Date: 2008-12-12 12:15:55
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-scripting-quantities-and-sizes/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Scripting - quantities and sizes</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-script-identifier-tokenization/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Script identifier tokenization</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#filenames">External script file names</a></li>
    <li><a href="#mimetypes">External script MIME types</a></li>
    <li><a href="#functionnames">JavaScript function names</a></li>
    <li><a href="#menulibrary">DHTML menu/library usage</a></li>
    <li><a href="#writeother">Scripts dynamically creating/writing other technologies</a></li>
    <li><a href="#mentions">Mentioning specific browsers in script content</a></li>
    <li><a href="#other">Other miscellaneous script detections</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Scripting was detected in 2,617,305 of MAMA&#39;s URLs (74.58%), coming from 
   <a href="http://dev.opera.com/articles/view/mama-scripting-quantities-and-sizes/#venn">4 different sources</a>: 
   <a href="http://dev.opera.com/articles/view/mama-hyperlinks/">JavaScript URLs</a>,
   <a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/">event-handler attributes</a>, 
   <a href="http://dev.opera.com/articles/view/mama-head-structure/#script">external scripts and embedded scripts</a>. 
   A number of strategies were employed to extract information out of the scripting 
   content that MAMA explored. Substring matching was used, in addition to regular 
   expressions and complex scripting language tokenization. This last method was 
   added fairly late to MAMA&#39;s analysis, but it has been an excellent way to discover 
   various factors that were not otherwise available through the simpler 
   substring/regular expression processes.</p>

<h2 id="filenames">External script file names</h2>
<p>This item of scripting metadata was originally requested to allow easier 
   tracking of JavaScript/DHTML code libraries. A quick survey of authors&#39; use 
   of script libraries shows that they usually do not alter the filenames. Looking 
   at the <a href="scriptfilelist-url.htm">full frequency table</a> of external 
   script file names, one can easily pick out the names of common script libraries: 
   Prototype, Scriptaculous, Lightbox, Milonic ... it goes on and on. Also 
   noticeable in the list are a number of scripts used for a variety of purposes. 
   Google&#39;s Urchin tracking script <span class="string">&quot;urchin.js&quot;</span> is the 
   most popular script name by more than a factor of 2, while their ad-syndication 
   script <span class="string">&quot;show_ads.js&quot;</span> comes in second place. A 
   variety of Adobe/Macromedia scripts can also be found in this list. If you 
   examine file name data and compare them to the frequency tables for script 
   function names (below), it is easy to uncover direct relationships between the 
   two. Of course, often a script is just created from scratch by the page author, and they often do 
   nothing to disguise that fact&#8212;external scripts using the file names 
   <span class="string">&quot;script.js&quot;</span> and <span class="string">&quot;scripts.js&quot;</span> 
   are the most popular &quot;obvious&quot; file names found.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> Top external script file names<br />(See also the 
   <a href="scriptfilelist-url.htm">complete frequency table</a>)</caption>
   <tr valign="bottom"><th>File name</th><th>Frequency</th><th>% Using<br />external<br />script</th><th rowspan="12">&#xA0;</th><th>File name</th><th>Frequency</th><th>% Using<br />external<br />script</th></tr>
   <tr class="r1"><td><span class="string">urchin.js</span></td><td class="num">383,870</td><td class="num">23.25%</td><td><span class="string">init.js</span></td><td class="num">21,858</td><td class="num">1.32%</td></tr>
   <tr class="r2"><td><span class="string">show_ads.js</span></td><td class="num">178,697</td><td class="num">10.82%</td><td><span class="string">script.js</span></td><td class="num">21,849</td><td class="num">1.32%</td></tr>
   <tr class="r1"><td><span class="string">counter.js</span></td><td class="num">71,294</td><td class="num">4.32%</td><td><span class="string">scripts.js</span></td><td class="num">21,301</td><td class="num">1.29%</td></tr>
   <tr class="r2"><td><span class="string">AC_RunActiveContent.js</span></td><td class="num">60,428</td><td class="num">3.66%</td><td><span class="string">getcod.cgi</span></td><td class="num">20,099</td><td class="num">1.22%</td></tr>
   <tr class="r1"><td><span class="string">menu.js</span></td><td class="num">47,936</td><td class="num">2.90%</td><td><span class="string">hb.js</span></td><td class="num">19,866</td><td class="num">1.20%</td></tr>
   <tr class="r2"><td><span class="string">swfobject.js</span></td><td class="num">43,751</td><td class="num">2.65%</td><td><span class="string">global.js</span></td><td class="num">19,655</td><td class="num">1.19%</td></tr>
   <tr class="r1"><td><span class="string">mm_menu.js</span></td><td class="num">35,992</td><td class="num">2.18%</td><td><span class="string">functions.js</span></td><td class="num">19,503</td><td class="num">1.18%</td></tr>
   <tr class="r2"><td><span class="string">prototype.js</span></td><td class="num">31,162</td><td class="num">1.89%</td><td><span class="string">code-end.js</span></td><td class="num">19,416</td><td class="num">1.18%</td></tr>
   <tr class="r1"><td><span class="string">rollover.js</span></td><td class="num">28,215</td><td class="num">1.71%</td><td><span class="string">code-start.js</span></td><td class="num">19,416</td><td class="num">1.18%</td></tr>
   <tr class="r2"><td><span class="string">common.js</span></td><td class="num">26,297</td><td class="num">1.59%</td><td><span class="string">code-middle.js</span></td><td class="num">19,416</td><td class="num">1.18%</td></tr>
   <tr class="r1"><td><span class="string">animate.js</span></td><td class="num">23,656</td><td class="num">1.43%</td><td><span class="string">lycosRating.js.php</span></td><td class="num">19,414</td><td class="num">1.18%</td></tr>
</table>

<h2 id="mimetypes">External script MIME types</h2>
<p>MAMA tracked the returned MIME type of external scripts that were downloaded. 
   It did not trust any explicit values for the <code class="att">Type</code> 
   attribute (if present) for this information; it relied solely upon the 
   information received when actually fetching the external resource. The value 
   <span class="string">&quot;application/x-javascript&quot;</span> is the most popular by 
   more than a factor of two over the 2nd place MIME type&#8212;<span class="string">&quot;text/javascript&quot;</span>. 
   At over 10% of the external script population, the MIME type <span class="string">&quot;text/html&quot;</span> 
   is surprising in its popularity. One hopes that this is the result of misconfigured 
   servers and not Web page 404-redirects&#8212;there is currently very little MAMA 
   can do to tell the difference. In all, ~800 scripts reported a VBScript MIME type, 
   although MAMA found over 100,000 cases of the keyword <span class="string">&quot;vbscript&quot;</span> 
   in both embedded and external scripts. While there are some believable scenarios 
   where VBscript could be used in embedded form 10-to-1 compared to external 
   scripts, the overall ratio of external to embedded scripts does not support 
   this outcome. It is very possible that a number of servers are not delivering 
   external VBScript files with the correct MIME type. As with the 
   <a href="http://dev.opera.com/articles/view/mama-css-syntax/#mime">external CSS MIME</a> case, many other 
   MIME types were also observed in the <a href="scriptmimelist-url.htm">full 
   MIME frequency table</a>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> Top external ecript MIME types<br />(See also the 
   <a href="scriptmimelist-url.htm">complete frequency table</a>)</caption>
   <tr valign="bottom"><th>MIME type</th><th>Frequency</th><th>% Using<br />external<br />script</th><th rowspan="8">&#xA0;</th><th>MIME type</th><th>Frequency</th><th>% Using<br />external<br />script</th></tr>
   <tr class="r1"><td><span class="string">application/x-javascript</span></td><td class="num">1,282,922</td><td class="num">77.69%</td><td><span class="string">none</span></td><td class="num">4,242</td><td class="num">0.26%</td></tr>
   <tr class="r2"><td><span class="string">text/javascript</span></td><td class="num">559,688</td><td class="num">33.89%</td><td><span class="string">application/octetstream</span></td><td class="num">1,222</td><td class="num">0.07%</td></tr>
   <tr class="r1"><td><span class="string">text/html</span></td><td class="num">176,863</td><td class="num">10.71%</td><td><span class="string">text/js</span></td><td class="num">1,051</td><td class="num">0.06%</td></tr>
   <tr class="r2"><td><span class="string">text/plain</span></td><td class="num">16,684</td><td class="num">1.01%</td><td><span class="string">text/vbscript</span></td><td class="num">797</td><td class="num">0.05%</td></tr>
   <tr class="r1"><td><span class="string">application/javascript</span></td><td class="num">12,522</td><td class="num">0.76%</td><td><span class="string">text/css</span></td><td class="num">461</td><td class="num">0.03%</td></tr>
   <tr class="r2"><td><span class="string">application/octet-stream</span></td><td class="num">8,420</td><td class="num">0.51%</td><td><span class="string">image/gif</span></td><td class="num">313</td><td class="num">0.02%</td></tr>
   <tr class="r1"><td><span class="string">text/x-js</span></td><td class="num">6,283</td><td class="num">0.38%</td><td><span class="string">texthtml</span></td><td class="num">298</td><td class="num">0.02%</td></tr>
</table>

<h2 id="functionnames">JavaScript function names</h2>
<p>MAMA tracked the function names declared in script code. For a number of reasons, 
   library scripts are fairly easy to pick out in the <a href="jsfunctionlist-url.htm">full 
   frequency list</a>, especially near the top:</p>

<ol>
    <li>Common script libraries are used by many different URLs, but they use the 
        same function naming schemes, and often the same external script file name.</li>
    <li>These libraries almost always have the same or similar frequency rates, 
        so they cluster together in the list for easier detection.</li>
    <li>Because of their proximities in the list, function naming schemes used by 
        libraries stand out.</li>
</ol>

<h3>Top scripting libraries detected by function name</h3>
<p>To see script library activity in action, we can look at the top 75 entries in 
   the <a href="jsfunctionlist-url.htm">function name list</a> (cutoff value 
   chosen to demonstrate the proximity effect of libraries in the list):</p>

<ul>
    <li>The most popular values are Macromedia-related (function names prefixed by 
        <span class="string">&quot;MM_&quot;</span>). The first two have similar frequencies, 
        and the next pair have similar frequencies as well.</li>
    <li>Google&#39;s Urchin tracker comes next, with 29 of the top 75 spots, all with 
        <strong>VERY</strong> similar frequencies (all within the range 384-394,000 times each). The 
        function names are prefixed with <span class="string">&quot;__utm&quot;</span> or 
        <span class="string">&quot;_u&quot;</span>. Not coincidentally, an external script 
        file name <span class="string">&quot;urchin.js&quot;</span> was found 383,870 times.</li>
    <li>Google&#39;s ad-syndication platform is also well represented in the function 
        name list. The function names are all very compact&#8212;typically 1-2 letters 
        long. The entire code for this ad-syndication script is also compacted, 
        with no linefeeds and extra spacing. These function names are all adjacent 
        in the frequency list, being used 160-185,000 times. It is again no 
        coincidence that the external script file name 
        <span class="string">&quot;show_ads.js&quot;</span> was used 178,697 times.</li>
    <li>The following image control/rollover effect functions are very popular and 
        all seem to be related, based on their similar naming schemes and proximities 
        in the frequency list: <code class="svar">changeImages</code> (66,867), 
        <code class="svar">preloadImages</code> (62,570), 
        <code class="svar">newImage</code> (60,512).</li>
    <li>Adobe&#39;s &quot;Active Content&quot; controls Flash instances in Web pages. 
        These 5 &quot;Active Content&quot; functions have names prefixed by <span class="string">&quot;AC_&quot;</span> 
        and occurred between 60-64,000 times in MAMA. A corresponding external 
        script with the name <span class="string">&quot;AC_RunActiveContent.js&quot;</span>
        was found 60,428 times and is no doubt related to these instances.</li>
    <li>2 adjacent entries read and write browser cookies - <code class="svar">getCookie</code> and <code class="svar">setCookie</code>.</li>
    <li>In the top 75, two function names (<code class="svar">hideMenu</code> 
        and <code class="svar">Menu</code>) can be found, but if you go below 
        position 75 you can find many more functions obviously relating to menus.</li>
</ul>

<p>This is just a small sample; a number of other unique prefixes are noticeable 
   by glancing further down the frequency list&#8212;Adobe GoLive has <strong>many</strong> 
   functions prefixed by <span class="string">&quot;CS&quot;</span> (after finding 
   100 such unique function names, I stopped counting). Functions common to 
   Lycos/Angelfire/Tripod scripts were well represented with the common prefixes 
   <span class="string">&quot;lhb_&quot;</span> (17 times), <span class="string">&quot;LR_&quot;</span> 
   (18 times) and <span class="string">&quot;lycos_&quot;</span> (11 times).</p>

<h2 id="menulibrary">DHTML menu/library usage</h2>
<p>This part of MAMA&#39;s research began as a desire to locate real-life examples 
   of specific popular DHTML menu systems and libraries so that we could test 
   their functionality in Opera and investigate various issues. I worked with 
   a colleague to identify 1 or 2 substrings from each of these menus/libraries 
   that would uniquely distinguish them from other JavaScript code. Every effort 
   was made to guarantee that the patterns were distinctive, but the criteria used 
   may not be totally reliable. There <strong>can</strong>, of course, always be 
   the occasional false positive, and future versions of these script libraries 
   may alter some of the (currently) unique criteria that MAMA seeks.</p>

<p>MAMA detected 1,084,593 URLs using at least 1 of the following DHTML Menus or 
   Libraries. In the URLs where these systems were detected, over 60% used the 
   Macromedia functions, while over 1/3 used Google&#39;s Urchin tracking system. 
   By comparison, all of the other code libraries were used far less often.</p>

<p class="note"><strong>Note:</strong> All of the search criteria are case-sensitive regular expressions.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> DHTML Menus/Libraries detected by MAMA</caption>
   <tr><th>DHTML menu/library name</th><th>Search criteria (regexp)</th><th>Frequency</th></tr> 
   <tr class="r1"><td><a href="http://www.adobe.com/">Macromedia functions from Dreamweaver/Fireworks</a></td><td><strong>Script:</strong> <code class="regexp">/ MM_/</code></td><td class="num">682,019</td></tr>
   <tr valign="top" class="r2"><td><a href="http://www.google.com/analytics">Google Analytics/Urchin Tracker</a></td><td><strong>Script:</strong> <code class="regexp">/function\s+urchinTracker/</code><br /><strong>Filename:</strong> <code class="regexp">/^urchin\.js$/</code></td><td class="num">384,756</td></tr>
   <tr class="r1"><td><a href="http://www.prototypejs.org/">Prototype JavaScript Framework</a></td><td><strong>Script:</strong> <code class="regexp">/var\s+Prototype\s+=\s+{\s+Version:\s+/</code></td><td class="num">31,423</td></tr>
      <tr valign="top" class="r1"><td><a href="http://www.omniture.com/en/products/web_analytics/sitecatalyst">Omniture/SiteCatalyst Analytics</a></td><td><strong>Script:</strong> <code class="regexp">/SiteCatalyst/</code>, <code class="regexp">/Omniture/</code><br /><strong>Filename:</strong> <code class="regexp">/^s_code\.js$/</code></td><td class="num">18,468</td></tr>
   <tr valign="top" class="r2"><td><a href="http://www.jquery.com/">JQuery Library</a></td><td><strong>Script:</strong> <code class="regexp">/jQuery./</code><br /><strong>Filename:</strong> <code class="regexp">/^jquery.*?\.js$/</code></td><td class="num">17,027</td></tr>
   <tr class="r1"><td><a href="http://www.dynamicdrive.com/dynamicindex1/hvmenu/">Dynamic Drive HV Menu</a></td><td><strong>Script:</strong> <code class="regexp">/MbrSetUp/</code>, <code class="regexp">/ChildVerticalOverlap/</code></td><td class="num">15,111</td></tr>
   <tr class="r2"><td><a href="http://www.milonic.com/">Milonic DHTML Menu</a></td><td><strong>Script:</strong> <code class="regexp">/closeMenusByArray/</code>, <code class="regexp">/milonic/</code></td><td class="num">13,585</td></tr>
   <tr valign="top" class="r1"><td><a href="http://www.websidestory.com/">WebSideStory/HitBox Analytics</a></td><td><strong>Script:</strong> <code class="regexp">/function\s+_hbEvent/</code><br /><strong>Filename:</strong> <code class="regexp">/^hbx\.js$/</code></td><td class="num">10,963</td></tr>
   <tr class="r1"><td><a href="http://developer.yahoo.com/yui/">Yahoo YUI! Library</a></td><td><strong>Script:</strong> <code class="regexp">/YAHOO.namespace/</code></td><td class="num">7,953</td></tr>
   <tr class="r2"><td><a href="http://www.hiermenuscentral.com/">Jupitermedia HierMenus</a></td><td><strong>Script:</strong> <code class="regexp">/HM_/</code></td><td class="num">7,631</td></tr>
   <tr class="r1"><td><a href="http://www.likno.com/">Likno AllWebMenus</a></td><td><strong>Script:</strong> <code class="regexp">/awmCreateMenu/</code></td><td class="num">5,705</td></tr>
   <tr class="r2"><td><a href="http://www.opencube.com/">OpenCube QuickMenu Pro</a></td><td><strong>Script:</strong> <code class="regexp">/dqm__/</code>, <code class="regexp">/DQM_/</code></td><td class="num">4,837</td></tr>
   <tr class="r1"><td><a href="http://dynapi.sourceforge.net/">Dan Steinman&#39;s DynAPI</a></td><td><strong>Script:</strong> <code class="regexp">/dynapi/</code></td><td class="num">3,471</td></tr>
   <tr valign="top" class="r2"><td><a href="http://tinymce.moxiecode.com/">TinyMCE Text Editor</a></td><td><strong>Script:</strong> <code class="regexp">/tinyMCE./</code><br /><strong>Filename:</strong> <code class="regexp">/tiny_mce\.js/</code></td><td class="num">3,432</td></tr>
   <tr class="r1"><td><a href="http://www.brothercake.com/dropdown">Ultimate Drop Down Menu</a></td><td><strong>Script:</strong> <code class="regexp">/um.menuClasses/</code>, <code class="regexp">/\/\/UDMv3/</code></td><td class="num">3,334</td></tr>
   <tr class="r2"><td><a href="http://software.xfx.net/">xFx Menu</a></td><td><strong>Script:</strong> <code class="regexp">/dmbtbB/</code>, <code class="regexp">/rjsPath/</code></td><td class="num">2,490</td></tr>
   <tr class="r1"><td><a href="http://www.xtreeme.com/sitexpert">Siteexpert/Xtreeme Menu</a></td><td><strong>Script:</strong> <code class="regexp">/m1.bIncBorder/</code></td><td class="num">2,044</td></tr>
   <tr class="r2"><td><a href="http://www.twinhelix.com/">Freestyle Menu (Angus Turnbull)</a></td><td><strong>Script:</strong> <code class="regexp">/FSMenu.prototype/</code></td><td class="num">1,770</td></tr>
   <tr class="r1"><td><a href="http://www.twinhelix.com/">Cascading Popup Menu (Angus Turnbull)</a></td><td><strong>Script:</strong> <code class="regexp">/PopupMenu.prototype/</code></td><td class="num">840</td></tr>
   <tr class="r2"><td><a href="http://www.mochikit.com/">MochiKit Library</a></td><td><strong>Script:</strong> <code class="regexp">/MochiKit.MochiKit/</code></td><td class="num">248</td></tr>
   <tr class="r1"><td><a href="http://www.dojotoolkit.org/">Dojo JavaScript Toolkit</a></td><td><strong>Script:</strong> <code class="regexp">/dojo.js/</code></td><td class="num">220</td></tr>
   <tr class="r2"><td><a href="http://www.treemenu.com/">Tree Menu</a></td><td><strong>Script:</strong> <code class="regexp">/MTMOutputString/</code></td><td class="num">110</td></tr>
</table>

<h2 id="writeother">Scripts dynamically creating/writing other technologies</h2>
<p>During MAMA&#39;s development process, a number of URL examples exhibited behaviors 
   that appeared to be distressingly common. So common, in fact, that it seemed 
   imperative for MAMA to measure just <strong>how</strong> frequently it was 
   happening in the wild. Scripts have the ability to dynamically add markup and 
   code to a document, and some even go so far as to dynamically create other 
   <strong>scripts</strong>. Full script parsing and execution would be necessary 
   to track down, detect, and analyze <strong>ALL</strong> of these cases, but MAMA 
   is not able to do that in the current version. Instead, MAMA settled for 
   detecting situations where external dependencies are dynamically written in order 
   to gauge the relative importance of this type of behavior. MAMA&#39;s discovery that 
   as many as 25% of the URLs using scripting matched its rudimentary &quot;Script writing 
   a Script&quot; criteria definitely warrants future investigation!</p>

<p>Dynamically created CSS and Frames occurrences were much less frequent than the 
   script-&gt;script case. All of the checks used simple regular expression substring 
   matches, but in the script-&gt;script instance, MAMA added an additional detection 
   in the JavaScript tokenization routine, looking for adjacent quoted string tokens 
   joined by JavaScript&#39;s <span class="string">&quot;+&quot;</span> operator. A simple analysis 
   then looked for aggregate strings satisfying MAMA&#39;s search criteria.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> Dynamically created external dependencies written by script</caption>
   <tr><th>Scenario</th><th>What was detected</th><th>Frequency</th><th>% Total<br />script usage</th></tr>
   <tr valign="top" class="r1"><td>Script writing Script</td><td>Substring/Regexp: <code class="regexp">/&lt;scr/</code> or<br />parsed JS String tokens containing:<br /> 
        <code class="regexp">/&lt;script/</code> &amp;&amp; <code class="regexp">/\ssrc\s*=/</code></td><td class="num">675,902</td><td class="num">25.82%</td></tr>
   <tr class="r2"><td>Script writing CSS</td><td>Substring/Regexp: <code class="regexp">/rel=[\&#39;\&quot;]?stylesheet/</code></td><td class="num">95,066</td><td class="num">3.63%</td></tr>
   <tr class="r1"><td>Script writing Frames</td><td>Substring/Regexp: <code class="regexp">/&lt;frameset/</code></td><td class="num">14,840</td><td class="num">0.57%</td></tr>
</table>

<h2 id="mentions">Mentioning specific browsers in script content</h2>
<p>This feature began as a generic question many at Opera had: &quot;How many authors 
   write their Web pages with Opera in mind?&quot;. Opera already had evidence that some 
   authors make use of browser-specific workarounds, and this is especially true 
   of scripting. For a simple answer to this question, MAMA detected the use of 
   browser name keywords (case-insensitively)&#8212;these were expected to be unique 
   enough to give a good idea of how many authors were considering specific browsers 
   in their development. MAMA&#39;s approach searched against <strong>all</strong> 
   scripting content, including script comments. This method does not give 100% 
   reliable numbers&#8212;it can be fairly easy for simple keyword matching to give 
   false-positives, after all. The choice of the keywords used was expected to 
   reveal true browser name mentions in the <strong>majority</strong> of cases.</p>

<p>It turns out that the most difficult of all the browsers to detect in script 
   is Opera, because authors generally refer to Opera with the single 
   <span class="string">&quot;opera&quot;</span> keyword. This keyword can also match 
   <span class="string">&quot;operator&quot;</span>;for example, about 25,000 of MAMA&#39;s 
   URLs used the keywords <span class="string">&quot;operator&quot;</span> or 
   <span class="string">&quot;operators&quot;</span>. Authors also typically use a single 
   keyword with Safari, but this is not a problem since <span class="string">&quot;safari&quot;</span> 
   is not a substring of any other common word (well, that <strong>I</strong> 
   know of, anyway).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Browser names mentioned in script</caption>
   <tr><th>Browser</th><th>Keywords</th><th>Frequency</th><th>% Total<br />script<br />usage</th></tr> 
   <tr class="r1"><td>Microsoft Internet Explorer</td><td><span class="string">&quot;Internet Explorer&quot;</span>, 
       <span class="string">&quot;MSIE&quot;</span></td><td class="num">916,306</td><td class="num">35.01%</td></tr>
   <tr class="r2"><td>Opera</td><td><span class="string">&quot;Opera&quot;</span></td><td class="num">766,274</td><td class="num">29.28%</td></tr>
   <tr class="r1"><td>Mozilla Firefox</td><td><span class="string">&quot;Mozilla&quot;</span>, 
       <span class="string">&quot;Gecko&quot;</span>, <span class="string">&quot;Firefox&quot;</span></td><td class="num">475,628</td><td class="num">18.17%</td></tr>
   <tr class="r2"><td>Apple Safari</td><td><span class="string">&quot;Safari&quot;</span></td><td class="num">279,946</td><td class="num">10.70%</td></tr>
</table>

<h2 id="other">Other miscellaneous script detections</h2>
<p>Many of the items here are detections added to satisfy special requests from 
   those at Opera who needed to quickly gather statistics on script usage. There 
   used to be many more of this type of simple checks, but with the advent of MAMA&#39;s 
   newer basic JavaScript tokenizer, they became redundant and were removed. These 
   are the remainders of that older strategy. Some of the following items are 
   important, while others would definitely be considered esoteric or &quot;fringe&quot; data 
   based on the usage numbers. Mostly, it serves as a reminder that you can find 
   any sort of information you like from scripting if you just know how to look for it.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-1:</strong> Miscellaneous items searched for in scripts</caption>
   <tr><th>Factor</th><th>Motivation</th><th>What was detected</th><th>Frequency</th></tr> 
   <tr valign="top" class="r1"><td>Window.open</td><td>To help study pop-up-blocking trends</td>
        <td>Substring: <span class="string">&quot;window.open&quot;</span> in any script content</td><td class="num">938,210</td></tr>
   <tr valign="top" class="r2"><td>Frame breaking</td><td>Internal tool defeated by frame breakers</td>
        <td>Substring: <span class="string">&quot;top.location.href&quot;</span> in any script content</td><td class="num">115,564</td></tr>
   <tr valign="top" class="r1"><td>VBScript usage</td><td>To find scripting cases using Microsoft&#39;s scripting language</td>
        <td>Substring <span class="string">&quot;vbscript&quot;</span> (CI) in all opening SCRIPT tags, as well as in any script content</td>
        <td class="num">103,485</td></tr>
   <tr valign="top" class="r2"><td>CSS .filter property</td><td>To find sites using MSIE CSS &#39;filter&#39; property via script (could be name collisions with DOM Traversal)</td>
        <td>Substring: <span class="string">&quot;.filter&quot;</span> in any script content</td><td class="num">198,487</td></tr>
   <tr valign="top" class="r1"><td>CSS .display set to &quot;block&quot;</td><td>Sites use to dynamically toggle sections</td>
        <td>Regexp: <code class="regexp">/style.display\s*=\s*[\&#39;\&quot;]block/</code> in any script content</td><td class="num">238,917</td></tr>
   <tr valign="top" class="r2"><td>CSS .display set to &quot;table&quot; or &quot;inline-table&quot;</td><td>Testing sites that use this CSS property/value combination</td>
        <td>Regexp: <code class="regexp">/style.display\s*=\s*[\&#39;\&quot;](inline-)?table/</code> in any script content</td><td class="num">1,543</td></tr>
   <tr valign="top" class="r1"><td>Use of the &quot;eval&quot; keyword</td><td>Script engine developer needed live test cases</td>
        <td><code class="svar">eval</code> used as a parsed JavaScript identifier</td><td class="num">13,067</td></tr>
   <tr valign="top" class="r2"><td>Aliasing &quot;eval&quot; to another variable</td><td>Script engine developer needed live test cases</td>
        <td>Regexp: <code class="regexp">/\=\s*eval[^\w]/</code> &amp;&amp; !~ <code class="regexp">/\=\s*eval\s*\(/</code></td><td class="num">303</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-scripting-quantities-and-sizes/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Scripting - quantities and sizes</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-script-identifier-tokenization/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Script identifier tokenization</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

