Title: MAMA: Scripting report, part 1: Basic scripting syntax and features
----
Date: 2008-12-12 12:16:00
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
<p>To my knowledge, there has never been an in-depth examination of scripting 
   factors in Web pages. Rene Saarsoo&#39;s study of <a href="http://triin.net/2006/06/12/JavaScript">Coding 
   Practices of Web Pages</a> was able to analyze some factors, but a bug in his 
   analysis program prevented deeper investigation.</p>

<p>A number of strategies were employed by MAMA to extract information from scripting 
   content. Substring matching was used, in addition to regular expressions and complex 
   scripting language tokenization. We will look this week at the basics of scripting, 
   leaving room for next week&#39;s thorough examination of MAMA&#39;s scripting tokenization.
   For a deeper look at the details of MAMA&#39;s scripting examination, the following 
   MAMA article topics are also available this week:</p>

<ul>
    <li><a href="http://dev.opera.com/articles/view/mama-scripting-quantities-and-sizes/">Scripting: quantities and sizes</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-scripting-syntax/">Scripting syntax</a></li>
</ul>

<h2>Script inclusion methods used in Web pages</h2>
<p>Scripting was detected in 2,617,305 of MAMA&#39;s URLs, from four different sources:</p>

<ul>
    <li>External scripts via the <a href="http://dev.opera.com/articles/view/mama-head-structure/#script"><code class="elem">SCRIPT</code>/<code class="att">Src</code> 
        element/attribute</a></li>
    <li>Embedded scripts as inline content of the <a href="http://dev.opera.com/articles/view/mama-head-structure/#script"><code class="elem">SCRIPT</code> element</a></li>
    <li>Common <a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/">event handler attributes</a> 
        (attributes beginning with the string <span class="string">&quot;on&quot;</span>)</li>
    <li>JavaScript URL syntax used by <a href="http://dev.opera.com/articles/view/mama-hyperlinks/">hyperlinks</a> 
        (Any content after the leading string <span class="string">&quot;javascript:&quot;</span> in a hyperlink)</li>
</ul>

<p>All of these sources together form an interesting and complex backdrop on which 
   to paint our analysis of what MAMA discovered about script usage on the Web.</p>

<h2>Quantities of script components in Web pages</h2>
<p>Of the four possible methods to specify scripting, the most popular technique 
   found by MAMA is via embedded script&#8212;just over 88% of scripts used this 
   method. External scripts and event-handler attributes were used in a similar 
   number of cases (they were both used in ~2/3 of all scripting cases). The &quot;quantity per 
   page&quot; values and other counters represent the number of occurrences for the 
   specific syntax that was discovered for a URL. For example, the maximum number 
   of external scripts encountered in any single page was 264; the maximum number 
   of event handlers discovered was 37,658. The average &quot;per-page&quot; numbers listed 
   in the table below apply where that type of scripting was used and 
   does not cover the total MAMA URL space.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Totals for different methods of script inclusion</caption>
   <tr valign="bottom"><th>Script type</th><th>Description</th><th>Total URLs<br />containing<br />script type</th><th>% Total<br />script<br />usage</th>
       <th>Most<br />popular<br />quantity</th>
       <th>Max.<br />quantity<br />per page</th><th>Avg.<br />quantity<br />per page</th></tr>
   <tr class="r1"><td><a href="embedscriptqty-url.htm">Embedded scripts</a></td><td>Inline content of the <code class="elem">SCRIPT</code> element</td><td class="num">2,303,363</td>
       <td class="num">88.0%</td><td class="num">1</td><td class="num">2,010</td><td class="num">3.6</td></tr>
   <tr class="r2"><td><a href="eventscriptqty-url.htm">Event handlers</a></td><td>Content of attributes beginning with <span class="string">&quot;on&quot;</span></td><td class="num">1,707,594</td>
       <td class="num">65.2%</td><td class="num">1</td><td class="num">37,658</td><td class="num">19.2</td></tr>
   <tr class="r1"><td><a href="externalscriptqty-url.htm">External scripts</a></td><td>Content from <code class="elem">SCRIPT</code>/<code class="att">Src</code> URLs</td><td class="num">1,651,383</td>
       <td class="num">63.1%</td><td class="num">1</td><td class="num">264</td><td class="num">2.5</td></tr>
   <tr class="r2"><td><a href="hyperlinkjsqty-url.htm">JavaScript URLs</a></td><td>Hyperlink URLs prefaced by <span class="string">&quot;javascript:&quot;</span></td><td class="num">483,936</td>
       <td class="num">18.5%</td><td class="num">1</td><td class="num">3,396</td><td class="num">4.9</td></tr>
</table>

<h2>Diagram: Script usage by type</h2>
<p>The most common script usage was the intersection of external and embedded 
   script with event handler attributes. The rarest combination detected was 
   the use of only event handler script with JavaScript URLs. To get a clearer 
   view of the uses and intersections of the different script specification 
   methods, we can examine the corresponding Venn diagram.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/220-mama-scripting-report-part-1-basic-scripting-syntax-and-features/4partvenn-script.png" width="749" height="350" alt="Venn diagram for script usage types" /></p>

<p class="note"><strong>Note:</strong> Region sizes are not to scale</p>

<h2>Scripts dynamically creating/writing other technologies</h2>
<p>During MAMA&#39;s development process, a number of URL examples I tested exhibited 
   behaviors that appeared to be distressingly common. So common, in fact, that it 
   seemed imperative for MAMA to measure just <strong>how</strong> frequently it was 
   happening in the wild. Scripts have the ability to dynamically add markup and 
   code to a document, and some even go so far as to dynamically create other 
   <strong>scripts</strong>. Full script parsing and execution would be necessary 
   to track down, detect and analyze <strong>ALL</strong> of these cases, but MAMA 
   is not able to do that in the current version. Instead, MAMA settled for simply 
   detecting the situations where external dependencies are dynamically written in 
   order to gauge the relative importance of this type of behavior. MAMA&#39;s discovery 
   that as many as 25% of the URLs using scripting matched its rudimentary &quot;Script 
   writing a Script&quot; criteria definitely warrants future MAMA attention!</p>

<p>Dynamically created CSS and Frame occurrences were much less frequent than the 
   script-&gt;script case. All of the checks used simple regular expression substring 
   matches, but in the script-&gt;script instance, MAMA added an additional detection 
   in the JavaScript tokenization routine, looking for adjacent quoted string tokens 
   joined by JavaScript&#39;s <span class="string">&quot;+&quot;</span> operator. A simple analysis 
   then looked for aggregate strings satisfying MAMA&#39;s search criteria.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Dynamically-created external dependencies written by script</caption>
   <tr><th>Scenario</th><th>What was detected</th><th>Frequency</th><th>% Total<br />script<br />usage</th></tr>
   <tr valign="top" class="r1"><td>Script writing Script</td><td>Substring/Regexp: <code class="regexp">/&lt;scr/</code> or<br />parsed JS String tokens containing:<br /> 
        <code class="regexp">/&lt;script/</code> &amp;&amp; <code class="regexp">/\ssrc\s*=/</code></td><td class="num">675,902</td><td class="num">25.8%</td></tr>
   <tr class="r2"><td>Script writing CSS</td><td>Substring/Regexp: <code class="regexp">/rel=[\&#39;\&quot;]?stylesheet/</code></td><td class="num">95,066</td><td class="num">3.6%</td></tr>
   <tr class="r1"><td>Script writing Frames</td><td>Substring/Regexp: <code class="regexp">/&lt;frameset/</code></td><td class="num">14,840</td><td class="num">0.6%</td></tr>
</table>

<h2>Mentioning specific browsers in script content</h2>
<p>This feature began as a generic question many at Opera had: &quot;How many authors 
   write their Web pages with Opera in mind?&quot;. Opera already had evidence that some 
   authors make use of browser-specific workarounds, and this is especially true 
   of scripting. For a simple answer to this question, MAMA detected the use of 
   browser name keywords (case-insensitively)&#8212;these were expected to be unique 
   enough to give a good idea of how many authors were at least <strong>thinking</strong>
   about specific browsers when they developed their documents. MAMA&#39;s approach 
   searched against <strong>all</strong> scripting content, including script 
   comments. This method does not give 100% reliable numbers&#8212;it can be fairly 
   easy for simple keyword matching to give false-positives, after all. The 
   choice of the keywords used was expected to reveal true browser name mentions 
   in the <strong>majority</strong> of cases.</p>

<p>It turns out that the most difficult of all the browsers to detect in script 
   is Opera, because authors generally refer to Opera with only the single 
   <span class="string">&quot;opera&quot;</span> keyword. This keyword can also match 
   <span class="string">&quot;operator&quot;</span>, for example; about 25,000 of MAMA&#39;s 
   URLs used the keywords <span class="string">&quot;operator&quot;</span> or 
   <span class="string">&quot;operators&quot;</span>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Browser names mentioned in script</caption>
   <tr><th>Browser</th><th>Keywords</th><th>Frequency</th><th>% Total<br />script<br />usage</th></tr> 
   <tr class="r1"><td>Microsoft Internet Explorer</td><td><span class="string">&quot;Internet Explorer&quot;</span>, 
       <span class="string">&quot;MSIE&quot;</span></td><td class="num">916,306</td><td class="num">35.0%</td></tr>
   <tr class="r2"><td>Opera</td><td><span class="string">&quot;Opera&quot;</span></td><td class="num">766,274</td><td class="num">29.3%</td></tr>
   <tr class="r1"><td>Mozilla Firefox</td><td><span class="string">&quot;Mozilla&quot;</span>, 
       <span class="string">&quot;Gecko&quot;</span>, <span class="string">&quot;Firefox&quot;</span></td><td class="num">475,628</td><td class="num">18.2%</td></tr>
   <tr class="r2"><td>Apple Safari</td><td><span class="string">&quot;Safari&quot;</span></td><td class="num">279,946</td><td class="num">10.7%</td></tr>
</table>

<h2>VBScript usage</h2>
<p>MAMA expected the script it encountered to be JavaScript. This is a fair 
   expectation, but it is somewhat unrealistic. Some fraction of Web pages are 
   definitely known to support Microsoft&#39;s IE-only VBScript. There have not been 
   any big public studies into script usage before, so MAMA had no idea at the 
   beginning of the study about how prevalent VBScript might be. A special check 
   was added to detect the use of this scripting language: all opening 
   <code class="elem">SCRIPT</code> tags and all script content was examined for 
   (case-insensitive) traces of the substring <span class="string">&quot;vbscript&quot;</span>. 
   103,485 URLs in MAMA were found satisfying this condition (4.0% of pages using 
   scripting).</p>

<h2>Script library evidence using MAMA search factors as archaeology tools</h2>
<p>There were two specific factors MAMA studied which shows that it is easy to 
   expose script library usage: external script file names and JavaScript function names. 
   When many authors make use of a popular script, the usage numbers of these two
   factors really makes them stand out. In the case of function names, library 
   function names often use a consistent naming scheme and they have similar 
   frequency rates; these cluster together in a frequency list, making them easier
   to detect.</p>

<h3>Top scripting libraries detected by function name</h3>
<p>To see script library activity in action, we need to look at the top 75 entries in 
   the full <a href="jsfunctionlist-url.htm">function name list</a> (cutoff value 
   chosen to demonstrate the proximity effect of libraries in the list):</p>

<ul>
    <li>The most popular values are Macromedia-related (function names prefixed by 
        <span class="string">&quot;MM_&quot;</span>). The first two have similar frequencies, 
        and the next pair have similar frequencies as well.</li>
    <li>Google&#39;s Urchin tracker comes next, with 29 of the top 75 spots, all with 
        <strong>VERY</strong> similar frequencies (384-394,000 times each). The 
        function names are prefixed with <span class="string">&quot;__utm&quot;</span> or 
        <span class="string">&quot;_u&quot;</span>. Not coincidentally, an external script 
        file name <span class="string">&quot;urchin.js&quot;</span> was found 383,870 times.</li>
    <li>Google&#39;s ad-syndication platform is also well represented in the function 
        name list. The function names are all very compact&#8212;typically 1-2 letters 
        long. The entire code for this ad-syndication script is also compacted, 
        with no linefeeds and extra spacing. These function names are all adjacent 
        in the frequency list, being used 160-185,000 times. It is no coincidence 
        again that the external script file name <span class="string">&quot;show_ads.js&quot;</span> 
        was used 178,697 times.</li>
    <li>The following image control/rollover effect functions are very popular and 
        all seem to be related, based on their similar naming schemes and proximities 
        in the frequency list: <code class="svar">changeImages</code> (66,867), 
        <code class="svar">preloadImages</code> (62,570), 
        <code class="svar">newImage</code> (60,512).</li>
    <li>Adobe&#39;s &quot;Active Content&quot; seems to control Flash instances in Web pages. 
        These 5 &quot;Active Content&quot; functions have names prefixed by <span class="string">&quot;AC_&quot;</span> 
        and occurred between 60-64,000 times in MAMA. A corresponding external 
        script with the name <span class="string">&quot;AC_RunActiveContent.js&quot;</span>
        was found 60,428 times and is no doubt related to these instances.</li>
    <li>Two adjacent entries appear to read and write browser cookies 
        (<code class="svar">getCookie</code> and <code class="svar">setCookie</code>).</li>
    <li>In the top 75, two function names (<code class="svar">hideMenu</code> 
        and <code class="svar">Menu</code>) can be found, but if you go below 
        position 75 you can find many more functions obviously relating to menus.</li>
</ul>

<p>This is just a small sample, a number of other unique prefixes are noticeable 
   by glancing further down the frequency list&#8212;Adobe GoLive has <strong>many</strong> 
   functions prefixed by <span class="string">&quot;CS&quot;</span> (after finding 
   100 such unique function names, I stopped counting). Functions common to 
   Lycos/Angelfire/Tripod scripts were well represented with the common prefixes 
   <span class="string">&quot;lhb_&quot;</span> (17 times), <span class="string">&quot;LR_&quot;</span> 
   (18 times) and <span class="string">&quot;lycos_&quot;</span> (11 times).</p>

<h3>...And there is <em>more</em> evidence</h3>
<p>Detecting libraries was a very important task for MAMA. The external script 
   file names and function names were the <strong>passive</strong> evidence found. 
   MAMA also identified unique strings that would track usage of a number of 
   specific script libraries in common use (e.g., Prototype and jQuery), tracking 
   systems (e.g.: Urchin, Omniture, and Hitbox), and DHTML menu systems (e.g. Milonic). Every effort was made to guarantee that the patterns were 
   distinctive, but the criteria used may not be totally reliable. There can, of 
   course, always be the occasional false positive, and future versions of these 
   script libraries may alter some of the (currently) unique criteria that MAMA 
   seeks. The full <a href="http://dev.opera.com/articles/view/mama-scripting-syntax/#menulibrary">script syntax 
   article</a> details the results for all 24 of the libraries it looked for in 
   more detail.</p>

<p class="note"><strong>Note:</strong> All of the search criteria are case-sensitive regular expressions.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Most popular DHTML Menus/Libraries detected by MAMA</caption>
   <tr><th>DHTML menu/library name</th><th>Search criteria (regexp)</th><th>Frequency</th></tr> 
   <tr class="r1"><td><a href="http://www.adobe.com/">Macromedia functions from Dreamweaver/Fireworks</a></td><td><strong>Script:</strong> <code class="regexp">/ MM_/</code></td><td class="num">682,019</td></tr>
   <tr valign="top" class="r2"><td><a href="http://www.google.com/analytics">Google Analytics/Urchin Tracker</a></td><td><strong>Script:</strong> <code class="regexp">/function\s+urchinTracker/</code><br /><strong>Filename:</strong> <code class="regexp">/^urchin\.js$/</code></td><td class="num">384,756</td></tr>
   <tr class="r1"><td><a href="http://www.prototypejs.org/">Prototype JavaScript Framework</a></td><td><strong>Script:</strong> <code class="regexp">/var\s+Prototype\s+=\s+{\s+Version:\s+/</code></td><td class="num">31,423</td></tr>
   <tr valign="top" class="r1"><td><a href="http://www.omniture.com/en/products/web_analytics/sitecatalyst">Omniture/SiteCatalyst Analytics</a></td><td><strong>Script:</strong> <code class="regexp">/SiteCatalyst/</code>, <code class="regexp">/Omniture/</code><br /><strong>Filename:</strong> <code class="regexp">/^s_code\.js$/</code></td><td class="num">18,468</td></tr>
   <tr valign="top" class="r2"><td><a href="http://www.jquery.com/">JQuery Library</a></td><td><strong>Script:</strong> <code class="regexp">/jQuery./</code><br /><strong>Filename:</strong> <code class="regexp">/^jquery.*?\.js$/</code></td><td class="num">17,027</td></tr>
   <tr class="r1"><td><a href="http://www.dynamicdrive.com/dynamicindex1/hvmenu/">Dynamic Drive HV Menu</a></td><td><strong>Script:</strong> <code class="regexp">/MbrSetUp/</code>, <code class="regexp">/ChildVerticalOverlap/</code></td><td class="num">15,111</td></tr>
   <tr class="r2"><td><a href="http://www.milonic.com/">Milonic DHTML Menu</a></td><td><strong>Script:</strong> <code class="regexp">/closeMenusByArray/</code>, <code class="regexp">/milonic/</code></td><td class="num">13,585</td></tr>
   <tr valign="top" class="r1"><td><a href="http://www.websidestory.com/">WebSideStory/HitBox Analytics</a></td><td><strong>Script:</strong> <code class="regexp">/function\s+_hbEvent/</code><br /><strong>Filename:</strong> <code class="regexp">/^hbx\.js$/</code></td><td class="num">10,963</td></tr>
</table>

<h2>Conclusion</h2>
<p>In the interests of brevity, many of the topics in this week&#39;s overview received 
   a very condensed treatment. The reader is encouraged to dig deeper into this week&#39;s 
   main MAMA scripting articles for more extensive coverage of the various factors 
   examined. (See the links at the beginning of this document.) Next week, we will 
   look at the goldmine of information that MAMA was able to extract from its 
   tokenization of scripting code&#8212;almost 500 JavaScript and DOM-related keywords 
   were identified in 28 categories.</p>   
