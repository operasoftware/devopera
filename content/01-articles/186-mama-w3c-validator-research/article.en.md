Title: MAMA: W3C validator research
----
Date: 2008-10-15 00:21:56
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-http-headers/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: HTTP Headers</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-basic-document-structure/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Basic document structure</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Page 1 index : <a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/?page=2">Page 2 index</a> : <a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/?page=3">Page 3 index</a></strong></p>
<ol>
    <li><a href="#intro">About markup validation&#8212;an introduction</a></li>
    <li><a href="#prevstudy">Previous validation studies</a></li>
    <li><a href="#sourcetool">Sources and tools: The URL set and the validator</a></li>
    <li><a href="#whatuse">What use is markup validation to an author?</a></li>
    <li><a href="#validated">How many pages validated?</a></li>
    <li><a href="#w3clist">Interesting views of validation rates, part 1: W3C-Member companies</a></li>
</ol>

<p class="note">Note that this document is large, so has been broken up into 3 pages; use the navigation at the bottom of the document to navigate between pages.</p>

<h2 id="intro">About markup validation&#8212;an introduction</h2>

<p><a href="http://dev.opera.com/articles/view/mama/">MAMA</a> is an in-house Opera research project developed to 
   create a repeatable and cross-referenced analysis of a significant population of Web pages that 
   represent real world markup. Of course, part of that examination must also cover markup validation&#8212;an 
   important measure of a page&#39;s adherence to a specific standard. The W3C markup validation tool 
   produces useful metrics that add to the rest of MAMA&#39;s breakdown of its URL set. We will look at what 
   validation reveals about these URLs, what it means to validate a document, and what benefits or 
   drawbacks are derived from the process.</p>

<p>The readership of this section of MAMA&#39;s research is expected to be the casual Web 
   page author out for a relaxing weekend browse, as well as those developing the W3C validator tool itself, 
   looking for incisive statistics about the validation &quot;State Of The Union&quot;. As a result of this diverse 
   audience, some readers will find that some sections are redundant or mystifying 
   (possibly both at the same time even!). Feel free to skip around the article as needed, but the best 
   first-time reading flow is definitely a linear read. Some of the data presented may need some 
   prerequisite knowledge, but I hope that even the most detailed examinations here may be of interest 
   to all readers in some way. There are some positive trends, some surprises, and some disappointments in 
   the figures to follow.</p>

   <h3>A quick summary:</h3>
   <p><strong>The good news:</strong> Markup validation pass rates are definitely improving over time.<br />
   <strong>The bad news:</strong> The overall validation pass rate is still miserably low and is not increasing 
   as fast as one would hope</p>

<h2 id="prevstudy">Previous validation studies</h2>
<p>There are two previous, large-scale studies of markup validation to which we can compare MAMA&#39;s results 
   regarding markup validation trends. Direct correlation with these previous studies was not an original 
   goal of MAMA, but it is a happy accident, given that many of MAMA&#39;s design choices happen to coincide.</p>

<ul>
    <li>Dec. 2001: Dagfinn Parnas&#39;s <a href="http://www.ub.uib.no/elpub/2001/h/413001/">&quot;How to 
        cope with incorrect HTML&quot;</a> thesis; University of Bergen, Norway</li>
    <li>Jun. 2006: Rene Saarsoo&#39;s &quot;Coding practices of Web pages&quot; bachelor thesis 
        <a href="http://triin.net/2006/05/10/veebipraktikad.pdf">[PDF, In Estonian]</a>
        <a href="http://triin.net/2006/06/12/Coding_practices_of_web_pages">[English summary]</a></li> 
</ul>

<p>The analysis tools and target URL group were roughly the same between MAMA and these other projects. 
   Both Parnas&#39;s and Saarsoo&#39;s studies used the <a href="http://htmlhelp.com/tools/validator/">WDG 
   validator</a> (see next section), which shares much of the same back-end mechanics with the W3C validator. 
   Both studies also used the <a href="http://www.dmoz.org/">DMoz URL set</a> (see next section). The main 
   difference between the URL sets used lies in the amount of DMoz analyzed; where MAMA&#39;s research overlaps 
   with Parnas&#39;s and Saarsoo&#39;s studies, we will attempt to compare results.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> URL set sizes of validation studies</caption>
   <tr>
     <th>Study</th>
     <th>Date</th>
     <th>URL Set</th>
     <th>Full DMoz Size</th>
     <th>Study Set Size</th>
   </tr> 
   <tr class="r1">
     <td>Parnas</td>
     <td>Dec. 2001</td>
     <td>DMoz</td>
     <td class="num">~2.5 million</td>
     <td class="num">~2.4 million</td>
   </tr>
   <tr class="r2">
     <td>Saarsoo</td>
     <td>Jun. 2006</td>
     <td>DMoz</td>
     <td class="num">~4.4 million</td>
     <td class="num">~1.0 million</td>
   </tr>
   <tr class="r1">
     <td>MAMA</td>
     <td>Jan. 2008</td>
     <td>DMoz</td>
     <td class="num">~4.7 million</td>
     <td class="num">~3.5 million</td>
   </tr>
</table>

<h2 id="sourcetool">Sources and tools: The URL set and the validator</h2>
<p>[For more details about the URLs and tools used in this study, take a look at the 
   <a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/?page=3#methodology">Methodology Appendix</a> section of this document.]</p>

<h3>Treading on familiar ground: The Open Directory Project (DMoz)</h3>
<p>There is a lot of MAMA coverage <a href="http://dev.opera.com/articles/view/mama-the-url-set/">elsewhere</a> about the <a href="http://www.dmoz.org/">DMoz URL set</a> 
   and the decision to use it as the basis of MAMA&#39;s research. MAMA did not analyze <strong>ALL</strong> of the DMoz URLs, 
   though. Transient network issues, dead URLs, and other problems inevitably kept the final URLs analyzed from being bigger 
   than its final total of about 3.5 million. The number of URLs from any given domain was limited in order to decrease 
   per-domain bias in the results. This was an important design decision, because DMoz has a <strong>big</strong> problem 
   with domain bias (~5% of all URLs in it are solely from cnn.com, for example). Parnas and Saarsoo did not do this, but it 
   has proven to be a useful strategy to employ. I set an arbitrary per-domain limit of 30 URLs, and this seems to be a fair 
   limitation. This restriction policy also helps track per-domain trends&#8212;if any are noticeable, they will be presented 
   where they seem interesting.</p> 

<p>Any comparison of MAMA&#39;s data to other similar studies, even if they also use DMoz, must take into 
   account that DMoz grows and changes over time as editors add, freshen, or delete URLs from its roster. URLs can grow 
   stale or obsolete through removal, and domains can and do die on a distressingly regular basis. The aggregation 
   source of these URLs remains the same, but the set itself is an evolving, dynamic entity.</p>

<h3>The W3C validator</h3>
<p>To test the URL set, MAMA used the W3C Markup Validator tool (<a href="http://validator.w3.org/">http://validator.w3.org/</a>, 
   v. 0.8.2 released Oct. 2007), which uses the OpenSP parser for its main validation engine. The W3C Markup Validator is 
   a free service from the W3C that helps authors improve the quality of their documents by checking adherence to standards 
   via DTDs. The Parnas and Saarsoo studies both used the <a href="http://htmlhelp.com/tools/validator/">WDG validator</a>, 
   but for MAMA&#39;s analysis, the W3C validator was the validation tool of choice. 
   <a href="http://htmlhelp.com/tools/validator/differences.html.en">As stated on the WDG&#39;s Web site</a>, there are many 
   similarities between these two validators,</p>

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><div>&quot;Most 
   of the previous differences between the two validators have disappeared with recent development 
   of the W3C validator&quot;.</div></blockquote>

<p>So, even though the validators used are different, there is significant overlap between MAMA&#39;s validation study data
   and the other previous studies. The W3C Quality Assurance group has produced many excellent tools and processes over the 
   years, and that hard work definitely deserves to be showcased in a study like this. Kudos to the W3C validator team!</p>

<h2 id="whatuse">What use is markup validation to an author?</h2>
<p>Why would an author validate a document at all? A validator does not write a Web page for you&#8212;
   the inspiration and perspiration must still come completely from the author. There does not appear to be any 
   real negative consequences to omitting this step. Sticking rigorously to a standard does not necessarily 
   spell success&#8212;using a validator on a page and correcting any problems it brings to light does not guarantee 
   that the result will look right on one browser, let alone all of them. Conversely, an invalid page may render exactly the way an author was expecting.</p>

<p>Both authors and readers have come to expect that <strong>all</strong> browsers perform impeccable 
   error recovery in the face of the worst tag soups the Web can throw at it. Forgiveness is perhaps the most 
   under-appreciated yet important feature we expect from a browser. However, that is asking a lot, especially for the 
   increasingly lightweight devices that are being used to browse the Web. If there are any consequences for sloppy 
   authoring practices, it would be here.</p>

<p>Henri Sivonen <a href="http://lists.w3.org/Archives/Public/public-html/2008Apr/0322.html">properly framed the 
   role of the markup validator</a> in an author&#39;s toolkit:</p>
   
<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><div>&quot;[A] 
   validator is just a spell checker for the benefit of markup writers so that they can identify 
   typos and typo-like mistakes instead of having to figure out why a counter-intuitive error handling mechanism 
   kicks in when they test in browsers.&quot;</div></blockquote>

<p>Continuing with the spell-checker analogy, there are no dire consequences for a page failing to 
   validate, just as there is seldom a serious consequence of having spelling typos in a document&#8212;the overall full 
   meaning is still conveyed well enough to get the point across.</p>

<p>Using the spell-checker analogy also helps dispel a practice that the W3C encourages, something 
   that we will talk more about in a later section&#8212;proclaiming that a page has been validated. This is a pointless
   exercise and means nothing (W3C tool evangelism aside). It is like saying a document has been spell-checked
   at some time during its history. <strong>Any</strong> subsequent change to a document can introduce errors&#8212;both 
   spelling and syntax-wise&#8212;and make the claim superfluous code baggage. As we will show in later sections, pages 
   that have passed validation in the past often do not <strong>STAY</strong> validated!</p>

<p>Markup validation is a useful tool to help insure that a page conforms to a target you are aiming 
   for. The most obvious thing to take away from the entirety of the MAMA research is that people are BAD at this 
   &quot;HTML thing&quot;. Improper tag nesting is rampant, and misspelled or misplaced element and attribute names happen all
   the time. It is very easy to make silly, casual mistakes&#8212;we all make them. Validation of Web pages would expose 
   all these types of simple (and avoidable) errors in moments.</p>

<p>For even more (and probably better) reasons to validate your documents, have a look at the W3C&#39;s 
   excellent treatment of the subject: &quot;<a href="http://validator.w3.org/docs/why.html">Why Validate?</a>&quot;.</p>

<h2 id="validated">How many pages validated?</h2>
<h3>The raw validation numbers</h3>
<p>The validator&#39;s SOAP response has an <code class="elem">&lt;m:validity &gt;</code> 
   element with Boolean content values of <span class="string">&quot;true&quot;</span> and 
   <span class="string">&quot;false&quot;</span>. A &quot;true&quot; value is considered a successful validation. 
   MAMA found that 145,009 out of 3,509,180 URLs passed validation.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> Validation pass rate studies</caption>
   <tr valign="bottom">
     <th>Study</th>
     <th>Date</th>
     <th>Passed validation</th>
     <th>Total validated</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td>Parnas</td>
     <td>Dec. 2001</td>
     <td class="num">14,563</td>
     <td class="num">2,034,788</td>
     <td class="num">0.71%</td>
   </tr>
   <tr class="r2">
     <td>Saarsoo</td>
     <td>Jun. 2006</td>
     <td class="num">25,890</td>
     <td class="num">1,002,350</td>
     <td class="num">2.58%</td>
   </tr>
   <tr class="r1">
     <td>MAMA</td>
     <td>Jan. 2008</td>
     <td class="num">145,009</td>
     <td class="num">3,509,180</td>
     <td class="num">4.13%</td>
   </tr>
</table>

<p>Another interesting view of MAMA&#39;s URL validation study is how many domains in MAMA that contained ANY 
   page that validated: 130,398 (of 3,011,661 distinct domains validated) [4.33%]</p>

<h3>Validation rates where select Web-page authoring features are also involved</h3>
<p>Now, we need to ask the same basic &quot;does it validate?&quot; question multiple ways, keeping our main variable (validation rate) 
   constant, while varying other criteria. This has the potential to say some interesting things about the validation 
   rates as a whole, while also providing insight to biases that can arise when mixing popular factors and technologies 
   found in web pages. Note: instead of listing overall URL totals, the totals mentioned are only for the URLs that use 
   each technology.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> Validation pass rates relating to various features<br />
Quantities are per-URL. Numbers in &quot;[]&quot; brackets indicate per-domain quantities</caption>
   <tr valign="bottom">
     <th>Authoring<br />feature used</th>
     <th>Criteria used to match</th>
     <th>Quantity<br />validating</th>
     <th>Total quantity<br />using technology</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1" valign="top">
     <td>Script/JavaScript</td>
     <td><ul>
         <li>Any <code class="uri">&quot;javascript:&quot;</code> URL</li>
         <li>Any external script pointed to by <code class="elem">SCRIPT</code> element</li>
         <li>Any script embedded in a <code class="elem">SCRIPT</code> element</li>
         <li>Any known event handler content (for attributes beginning with &quot;on&quot;)</li>
         </ul></td>
     <td>99,299<br />[90,233]</td>
     <td>2,617,828<br />[2,306,921]</td>
     <td>3.79%<br />[3.91%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>CSS</td>
     <td><ul>
         <li>Any <code class="att">Style</code> attribute content</li>
         <li>Any content of <code class="elem">STYLE</code> element</li>
         <li>Any external stylesheet pointed to by <code class="elem">LINK</code> 
             element (<code class="att">Rel</code>=<span class="string">&quot;stylesheet&quot;</span>)</li>
         </ul></td>
     <td>129,893<br />[117,361]</td>
     <td>2,821,141<br />[2,487,898]</td>
     <td>4.64%<br />[4.72%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Adobe Flash</td>
     <td><ul>
         <li><code class="elem">EMBED</code>: MIME type of the <code class="att">Src</code> 
             attribute contains <span class="string">&quot;flash&quot;</span></li>
         <li><code class="elem">PARAM</code>: Element contains the string 
             <span class="string">&quot;.swf&quot;</span> or <span class="string">&quot;flash&quot;</span></li>
         <li><code class="elem">OBJECT</code>: MIME type of the object contains <span class="string">&quot;flash&quot;</span></li>
         <li>Script: Any mention of <span class="string">&quot;flash&quot;</span> or <span class="string">&quot;.swf&quot;</span></li>
         </ul></td>
     <td>44,491<br />[41,058]</td>
     <td>1,176,227<br />[1,050,121]</td>
     <td>3.78%<br />[3.91%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Frames</td>
     <td><ul>
         <li>Usage of the <code class="elem">FRAMESET</code> element</li>
         </ul></td>
     <td>5,905<br />[5,741]</td>
     <td>378,033<br />[354,321]</td>
     <td>1.56%<br />[1.62%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Iframes</td>
     <td><ul>
         <li>Usage of the <code class="elem">IFRAME</code> element</li>
         </ul></td>
     <td>4,615<br />[4,238]</td>
     <td>222,462<br />[193,489]</td>
     <td>2.07%<br />[2.19%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Font</td>
     <td><ul>
         <li>Usage of the <code class="elem">FONT</code> element (common, CSS-obsoleted formatting markup)</li>
         </ul></td>
     <td>29,723<br />[27,491]</td>
     <td>2,061,422<br />[1,762,528]</td>
     <td>1.44%<br />[1.56%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>IIS Web Server</td>
     <td><ul>
         <li>Detection of <span class="string">&quot;iis&quot;</span> string in HTTP header <code class="skeyw">Server</code> field</li>
         </ul></td>
     <td>24,743<br />[22,227]</td>
     <td>883,854<br />[769,375]</td>
     <td>2.80%<br />[2.89%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Apache Web Server</td>
     <td><ul>
         <li>Detection of <span class="string">&quot;apache&quot;</span> string in HTTP header <code class="skeyw">Server</code> field</li>
         </ul></td>
     <td>110,834<br />[99,866]</td>
     <td>2,347,328<br />[2,011,088]</td>
     <td>5.38%<br />[4.97%]</td>
   </tr>
</table>

<h3>Validation, content management systems (CMS), and editors</h3>
<p>MAMA looked at the <code class="elem">META</code> <span class="string">&quot;Generator&quot;</span> 
   value to find popular CMS and editors in use for the following table, looking for 
   any noticeable trends in validation rates. One might expect per-domain numbers to 
   be more interesting in this case than per-URL, because sites are often developed 
   using a single platform, but there is very little difference between the two views. 
   In general, CMS systems generate valid pages at markedly higher rates than the overall 
   average, with &quot;Typo3&quot; variants leading at almost 13%. On the other hand, the editor 
   situation has some wild differences. Microsoft&#39;s FrontPage has a VERY wide deployment rate, 
   but a depressingly low validation pass rate of ~0.5%. Apple&#39;s iWeb editor, however, 
   has a freakishly high validation rate. Kudos to iWeb for this happy discovery.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-3:</strong> 
   Validation pass rates relating to editors<br />
   Quantities are per-URL. Numbers in &quot;[]&quot; brackets indicate per-domain quantities</caption>
   <tr valign="bottom">
     <th>Editor</th>
     <th>Quantity<br />passing<br />validation</th>
     <th>Total<br />occurrences</th>
     <th>Percentage</th></tr>
   <tr class="r1" valign="top">
     <td>Apple iWeb</td>
     <td class="num">2,051<br />[2,016]</td>
     <td class="num">2,504<br />[2,465]</td>
     <td class="num">81.91%<br />[81.78%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Microsoft FrontPage</td>
     <td class="num">1,923<br />[1,846]</td>
     <td class="num">347,095<br />[305,220]</td>
     <td class="num">0.55%<br />[0.60%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Adobe GoLive</td>
     <td class="num">1,086<br />[1,057]</td>
     <td class="num">41,865<br />[39,035]</td>
     <td class="num">2.59%<br />[2.71%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>NetObjects Fusion</td>
     <td class="num">802<br />[793]</td>
     <td class="num">26,355<br />[25,466]</td>
     <td class="num">3.04%<br />[3.11%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>IBM WebSphere</td>
     <td class="num">626<br />[585]</td>
     <td class="num">32,218<br />[24,460]</td>
     <td class="num">1.94%<br />[2.39%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Microsoft MSHTML</td>
     <td class="num">518<br />[502]</td>
     <td class="num">40,030<br />[38,328]</td>
     <td class="num">1.29%<br />[1.31%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Microsoft Visual Studio</td>
     <td class="num">272<br />[245]</td>
     <td class="num">22,936<br />[21,051]</td>
     <td class="num">1.19%<br />[1.16%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Adobe Dreamweaver</td>
     <td class="num">205<br />[198]</td>
     <td class="num">5,954<br />[5,647]</td>
     <td class="num">3.44%<br />[3.51%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Microsoft Word</td>
     <td class="num">154<br />[153]</td>
     <td class="num">24,892<br />[22,503]</td>
     <td class="num">0.62%<br />[0.68%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Adobe PageMill</td>
     <td class="num">100<br />[92]</td>
     <td class="num">15,148<br />[12,142]</td>
     <td class="num">0.66%<br />[0.76%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Claris Home Page</td>
     <td class="num">48<br />[41]</td>
     <td class="num">6,259<br />[4,798]</td>
     <td class="num">0.77%<br />[0.85%]</td>
   </tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-4:</strong> 
   Validation pass rates relating to CMS<br />
   Quantities are per-URL. Numbers in &quot;[]&quot; brackets indicate per-domain quantities</caption>
   <tr valign="bottom">
     <th>CMS</th>
     <th>Quantity<br />passing<br />validation</th>
     <th>Total<br />occurrences<br />of CMS</th><th>percentage</th>
   </tr>
   <tr class="r1" valign="top">
     <td>Typo3</td>
     <td class="num">2,301<br />[2,170]</td>
     <td class="num">18,067<br />[16,930]</td>
     <td class="num">12.74%<br />[12.82%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Joomla</td>
     <td class="num">2,248<br />[2,233]</td>
     <td class="num">34,852<br />[34,237]</td>
     <td class="num">6.45%<br />[6.52%]</td>
   </tr>
   <tr class="r1" valign="top">
     <td>WordPress</td>
     <td class="num">1,494<br />[1,472]</td>
     <td class="num">16,594<br />[16,046]</td>
     <td class="num">9.00%<br />[9.17%]</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Blogger</td>
     <td class="num">30<br />[30]</td>
     <td class="num">9,907<br />[9,808]</td>
     <td class="num">0.30%<br />[0.31%]</td>
   </tr>
</table>

<h2 id="w3clist">Interesting views of validation rates, part 1: W3C-Member companies</h2>
<p>The W3C is the organization that creates the markup standards and the markup 
   validator used in this study. One would hope that the individual companies that support and 
   comprise the W3C would spearhead the effort to follow the standards that the W3C creates. 
   Well, it turns out that is indeed the case. The top pages of W3C-member companies definitely 
   adhere to markup standards at much higher rates than the rest of the Web. However, these &quot;standard-bearers&quot; 
   (pun intended) could definitely do better at this than they currently do.</p>

<p>In February 2002, Marko Karppinen <a href="http://web.archive.org/web/20080505040802/http://www.markokarppinen.com/20020222.html">validated 
   506 URLs</a> of all the <a href="http://www.w3.org/Consortium/Member/List">W3C-member companies</a> at 
   that time. Only 18 of these pages passed validation. Compared to Parnas&#39;s validation study of the DMoz 
   URLs just two months before, the W3C-member company validation rate of 3.56% was considerably 
   better than the 0.7% rate for URLs &quot;in the wild&quot;, but it is nothing for the paragons of Web 
   standards to brag about. Such a low validation pass rate could easily be perturbed by any 
   number of transient conditions or other factors.</p>

<p>Saarsoo <a href="http://www.triin.net/2006/03/05/Validating_sites_of_W3C_members">also did a study</a>
   of W3C-member company validation rates in Jun. 2006. By that point, the validation situation had improved nicely 
   for the member companies to 17.00%. Fast-forwarding now to Jan. 2008 [<a href="w3cmemberlist.htm">W3C-member-company list snapshot</a>], and we see that the general Web-at-large has caught up to, and even exceeded, the 
   previous validation pass rate of W3C-member companies from Karppinen&#39;s study era. The general validation pass rate in 
   the DMoz population is now running at ~4.13%, and the W3C-member company pass rate is a strong 20.15%, with more member 
   companies than ever claiming the validation crown.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> 
   W3C-Member-company list validation studies</caption>
   <tr valign="bottom">
     <th>W3C-member list study</th>
     <th>Date</th>
     <th>Total in<br />member list</th>
     <th>Total<br />validated</th>
     <th>Passed<br />validation</th>
     <th>Percentage</th></tr>
   <tr class="r1">
     <td>Marko Karppinen</td>
     <td>Feb. 2002</td>
     <td class="num">506</td>
     <td class="num">506</td>
     <td class="num">18</td>
     <td class="num">3.56%</td>
   </tr>
   <tr class="r2">
     <td>Saarsoo</td>
     <td>Jun. 2006</td>
     <td class="num">401</td>
     <td class="num">352</td>
     <td class="num">61</td>
     <td class="num">17.00%</td>
   </tr>
   <tr class="r1">
     <td>MAMA</td>
     <td>Jan. 2008</td>
     <td class="num">429</td>
     <td class="num">412</td>
     <td class="num">83</td>
     <td class="num">20.15%</td>
   </tr>
</table>

<p>Just showcasing the increased validation rate does not tell the whole story. 
    Saarsoo left an excellent data trail to which to compare the present validation pass rate. It is interesting 
    to note that, although the overall pass rate has increased, <strong>many of the sites that passed validation 
    previously no longer do so at the time of writing</strong>. Achieving a passing validation status does not 
    seem to be as hard as <strong>maintaining</strong> that status over time. Compared to Saarsoo&#39;s study, 
    there are just as many URLs that previously validated but currently do not as there are URLs that 
    maintained their passing validation status.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-2:</strong> Validation comparison to Saarsoo&#39;s W3C-Member-Company study</caption>
   <tr valign="bottom">
     <th>Validation comparison</th>
     <th>Quantity</th>
   </tr>
   <tr class="r1">
     <td>URLs that validated before and do now</td>
     <td class="num">25</td>
   </tr>
   <tr class="r2">
     <td>URLs that validated before but do not now and are still in W3C-member-company list</td>
     <td class="num">25</td>
   </tr>
   <tr class="r1">
     <td>URLs that validated before but are no longer in W3C-member-company list</td>
     <td class="num">11</td>
   </tr>
</table>

<p>Saarsoo commented in 2006 on the dynamic nature of the W3C company roster. From early 2002  there 
   were 506 member companies, dipping down to 401 in mid-2006, to the present time (early 2008) where we see the list back 
   up to 429. To put the change in some perspective, the net loss of companies in the list over this time-frame is 77, 
   which is almost as many companies as the number that currently pass validation. Put simply, a pessimist might say that 
   a company on this list is just about as likely to drop out of the W3C as it is to achieve a successful validation.</p>

<h3>The W3C-Member List successful validation Honor Roll</h3>
<p>In his 2002 study, Karppinen prominently listed the W3C-member companies whose 
   main URLs passed validation in order to,</p>

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><div>&quot;highlight 
   the effort that goes into making an interoperable web site&quot;.</div></blockquote>

<p>This is an excellent idea and is becoming a bit of a time-honored tradition that both the Saarsoo study 
   and this one has followed. The first list from Karppinen was easy to keep inline with the rest of the study, because it 
   was (unfortunately) short and sweet. As the pass rate has improved over time, this list becomes progressively longer. 
   This is the goal, though; everyone <strong>wants</strong> the list to be too long to display easily.
   [<a href="w3cvalidationhonorroll.htm">See the Honor Roll list here.</a>]</p>

<h3>And the crown goes to ...</h3>
<p>Two companies&#39; URLs have maintained valid sites throughout all three studies from 2002-2008. 
    These companies deserve extra congratulations for this feat.</p>

<ul>
   <li><a href="http://www.ukoln.ac.uk/">Joint Info. Systems Comm. of the UK Higher Ed. Funding Council (JISC)</a></li>
   <li><a href="http://www.opera.com/">Opera Software</a> (the company for which the author works)</li>
</ul>

<p>Many sites are constantly changing, but being a member of an organization that creates 
   standards should be compulsion enough to attain a recognized level of excellence in those standards. 
   Saarsoo ended his 2006 look at the W3C-member list with an optimistic wish for the future,</p>

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><div>&quot;Maybe 
   at 2008 we have 50% of valid W3C member sites.&quot;</div></blockquote>

<p>Unfortunately, that number is nowhere close to the current reality. It may be too much for the W3C to 
   require its member-companies&#39; sites to pass validation, but they should definitely try to push for higher 
   levels than they currently attain, to serve as a good example if nothing else.</p>

&lt;page /&gt;

<p><strong><a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/">Page 1 index</a> : Page 2 index : <a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/?page=3">Page 3 index</a></strong></p>
<ol>
    <li><a href="#alexalist">Interesting views of validation rates, part 2: Alexa Global Top 500</a></li>
    <li><a href="#iconbadge">Validation badge/icons: An interesting diversion?</a></li>
    <li><a href="#doctype">Doctypes</a></li>
    <li><a href="#charset">Character sets</a></li>
</ol>

<h2 id="alexalist">Interesting views of validation rates, part 2: Alexa Global Top 500</h2>
<h3>About the Alexa Global Top 500</h3>
<p>Now, we will look at another &quot;interesting&quot; small URL set, the <a href="http://www.alexa.com/">Alexa</a> service from Amazon. 
   Alexa utilizes Web crawling and user-installed browser toolbars to track &quot;important sites&quot;. It maintains, among many 
   other useful measures, a global &quot;Top 500&quot; list of URLs considered popular on the Web. The Alexa list was chosen primarily 
   because the size of the list was similar in size to the W3C list&#8212;so even though MAMA might be comparing apples to oranges, 
   at least it compares a fairly equal number of apples and oranges. The W3C-company list skews toward academic and &quot;big 
   money&quot; commercial computer sites. The Alexa list is representative of what and how people actually use and experience on the Web on a 
   day-to-day basis.</p>

<p>While few could argue that Alexa&#39;s &quot;Top 500&quot; list is relevant and popular, there are some definite 
   biases in its list:</p>

   <ul>
       <li>It is prejudiced toward big/popular sites with many country-specific variants, such as Google, Yahoo!, and eBay.
           This ends up reducing the breadth of the list. Google is the most extreme example of this, with 63 of the 
           487 URLs in the analyzed set being various regional Google sites.</li>
       <li>It includes the top pages of domain aggregators with varied user content, such as LiveJournal, Facebook, and 
           fc2.com. These top pages are not representative of the wide variety of the user-created content they contain.</li>
       <li>The list consists entirely of top-level, entrance, or &quot;surface&quot; pages of a site. There is no 
           intentional &quot;deep&quot; URL representation.</li>
   </ul>

<h3>Validating the Alexa Top 500</h3>
<p>On 28 January 2008, the then-latest Alexa Top 500 list was inserted into MAMA [<a href="alexaglobaltop500list.htm">January 
    2008 snapshot list</a>, <a href="http://www.alexa.com/site/ds/top_sites?ts_mode=global%26lang=none">latest live version</a>]. 
    About half of these URLs were already in MAMA, having been part of other sources. Of the 500 
    URLs in this list, 487 were successfully analyzed and validated. Only 32 of these URLs passed validation (6.57%).
    This is a slightly higher percentage rate than the much larger overall MAMA population, but the quantity and 
    difference are still too small to declare any trends.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Alexa Top 500 validation studies</caption>
   <tr valign="bottom">
     <th>Alexa Top 500 List study</th>
     <th>Date</th><th>Passed validation</th>
     <th>Total set-size</th><th>percentage</th>
   </tr>
   <tr class="r1">
     <td>MAMA</td>
     <td>Jan. 2008</td>
     <td class="num">32</td>
     <td class="num">487</td>
     <td class="num">6.57%</td>
   </tr>
</table>

<h3>For future Alexa studies</h3>
<p>OK, so the Alexa Top 500 <strong>does</strong> have some drawbacks. Should the URL set be tossed 
   out entirely? Can this set be improved? Aside from the Top 500, Alexa has a very deep catalog and categorization 
   of URLs, some of them available freely, but most are available only for a fee. Some categories of URLs include division 
   by country and by language. Alexa currently has publicly-available lists of the top 100 URLs for 21 different languages 
   (2,100 URLs) and 117 countries (11,700 URLs). Note: The per-country list represents popularity among users 
   in a country, not sites hosted in the country. An undoubtedly-interesting expanded list of the Alexa Global Top 
   500 could be created by aggregating all of these sources, which would probably yield 5,000-10,000 URLs 
   (if duplicates were eliminated).</p>

<p>If the validation rates of the Alexa Global Top 500 are studied in the future, the current version 
   of the Top 500 list of URLs will likely be quite different than it is at this time of writing. The topicality of the list&#8212;a strength that promotes the relevance of the analysis&#8212;and also makes cross-comparisons over time difficult. 
   Documenting the list that was used in each analysis will be helpful in doing that.</p>

<h2 id="iconbadge">Validation badge/icons: An interesting diversion?</h2>
<p>Before MAMA had validated even a single URL, the author discovered this page at the W3C&#39;s site:
   <a href="http://www.w3.org/QA/Tools/Icons">http://www.w3.org/QA/Tools/Icons</a>. This page lists icons that,</p>

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><div>&quot;may 
   be used on documents that successfully passed validation for a specific technology, using the 
   W3C validation services&quot;.</div></blockquote> 

<p>It seemed like an interesting idea to compare the pages that were using these images claiming validation with how 
   they actually validate. This can only be a crude measure for a number of reasons, but, by far, the main one 
   is as follows: an author can easily host the validation icon/badge on their own server and name it anything they want.</p>

<p>For those gearheads in the audience who have some &quot;regexp savvy&quot;, the following Perl regular expression was 
   used to identify validation icon/badges utilizing the W3C naming scheme. This pattern match was used against the 
   <code class="att">Src</code> attribute of the <code class="elem">IMG</code> elements of URLs analyzed:</p>

<p class="note"><strong>Regexp:</strong><br /> <code class="regexp">/valid-((css|html|mathml|svg|xhtml|xml).*?)(-blue)?(\.png|\.gif|-v\.svg|-v\.eps)?$/i ||
               /(wcag1.*?)(\.png|\.gif|-v\.svg|-v\.eps)?$/i</code></p>

<p>This seems to capture fully all the variations of the W3C&#39;s established naming conventions (any corrections are very welcome 
    if it does not). Note that the regexp errs on the cautious side and can also capture unintended matches like JPEG files matching 
    the naming scheme. One might think this an error, but it turns out it is not. JPEG versions of the validation icons are not 
    (currently) listed on the W3C&#39;s Web site, but a random spot-check of JPEG images thus detected by MAMA <strong>ARE</strong> 
    validation badge icons! In this case, what appears to be false-positives are actually valid after all.</p>

<p class="note"><strong>Ex:</strong> <code class="uri">http://www.w3.org/Icons/valid-html401-blue.png</code> 
   is stored as <span class="string">&#39;html401-blue&#39;</span></p>

<h3>Validation rates of URLs having validation badge/icons</h3>
<p>Now we will look at the list of <a href="url.htm">W3C Validation Image Badges</a> 
   found in MAMA by URL [also <a href="dom.htm">by domain</a>]. Even with the various 
   pitfalls that could occur with MAMA&#39;s pattern matching, there is still a comparison that is interesting to explore: 
   how many pages that use a badge actually validate? If we consider that the only type of badge of real interest in our 
   sample is an HTML variant (html, xhtml), looking for the substrings &quot;html&quot; and &quot;xhtml&quot; within this field in MAMA gives us:</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-1:</strong> Validation rates of URLs with validation icons</caption>
   <tr valign="bottom">
     <th>Type of badge<br />identified</th>
     <th>Total</th>
     <th>Actually<br />validated</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1" valign="top">
     <td>xhtml</td>
     <td class="num">11,657</td>
     <td class="num">5,480</td>
     <td class="num">47.01%</td>
   </tr>
   <tr class="r2" valign="top">
     <td>html</td>
     <td class="num">22,033</td>
     <td class="num">10,995</td>
     <td class="num">49.90%</td>
   </tr>
</table>

<p>This is just under 50% in each case, which is frankly a rather miserable hit ratio.
   If these URLs do not validate, do they bear <strong>ANY</strong> resemblance to the badge they are claiming?</p>

<h3>Comparison of stated validation badge/icon type versus actual detected Doctype</h3>
<p>Next, we will try comparing the actual Doctypes detected compared to the badges claiming compliance 
   to those respective Doctypes. Doctypes detected in both the validator and MAMA analyses are listed for comparison. 
   The situation definitely improves here over the previous figures.
   Note: Fatal validation errors cause the validator to under-report Doctypes by reporting no Doctype 
   at all in such cases.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 8-2:</strong> Reported validation icon type versus MAMA-detected Doctype</caption>
   <tr valign="bottom">
     <th>Type Of badge<br />identified</th>
     <th>Validator-<br />detected<br />Doctype</th>
     <th>MAMA-<br />detected<br />Doctype</th>
     <th>Total according<br />to badge/icon</th>
   </tr>
   <tr class="r1" valign="top">
     <td>xhtml</td>
     <td class="num">10,553</td>
     <td class="num">11,054</td>
     <td class="num">11,657</td>
   </tr>
   <tr class="r2" valign="top">
     <td>html</td>
     <td class="num">20,570</td>
     <td class="num">21,475</td>
     <td class="num">22,033</td>
   </tr>
</table>

<p>The validation badges certainly increase public awareness of validation as something for which the authors strive, 
   but it does not appear to be the best measure of reality. For the half of badged URLs that claim validation compliance 
   but currently do not validate, one has to wonder whether they ever did validate in the past. Pages definitely tend to change 
   over time and removing or updating an icon badge may not be high on most author&#39;s list of &quot;Things To Do&quot;. The next time you see 
   such an icon, consider its current state with a grain of salt.</p>

<h3>For future W3C badge studies</h3>
<p>After this survey was completed, the following rather prominent quote was noticed on the 
   <a href="http://www.w3.org/QA/Tools/Icons">W3C&#39;s Validation Icons</a> page,</p>

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><div>&quot;The 
   image should be used as a link to re-validate the document.&quot;</div></blockquote>

<p>It may be useful to incorporate this fact to identify further validation badges in the future.</p>

<h2 id="doctype">Doctypes</h2>
<h3>What are we examining?</h3> 
<p>First up is the Doctype. The Doctype statement tells the validator which DTD to use when validating&#8212;it is the basic evaluation metric for the document. MAMA used its own methods to divine the Doctype for every document, 
   but the validator actually detects the Doctype in two slightly different ways: one by the validator itself and the 
   other by the SGML parser at the core of the validator.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-1:</strong> Detected Doctype factors used in this study</caption>
   <tr valign="bottom">
     <th>Source of<br />Doctype</th>
     <th>Information being used</th>
   </tr>
   <tr class="r1" valign="top">
     <td>MAMA</td>
     <td>Detected Doctype statement</td>
   </tr>
   <tr class="r2" valign="top">
     <td>Validator</td>
     <td>SOAP <code class="elem">&lt;m:doctype &gt;</code> content</td>
   </tr>
   <tr class="r1" valign="top">
     <td>Validator</td>
     <td><span class="string">&#39;W09&#39;</span>/<span class="string">&#39;W09x&#39;</span> warning messages</td>
   </tr>
</table>

<p>This is a good time to dissect a Doctype and see what makes it tick. We will look at a typical Doctype 
   statement, and examine all of its parts:</p>

<p class="note"><strong>Ex:</strong> &lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; 
   &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-2:</strong> Components of a DTD</caption>
   <tr valign="bottom">
     <th>Component</th>
     <th>Description</th>
   </tr>
   <tr class="r1" valign="top">
     <td><span class="string">&quot;&lt;!DOCTYPE&quot;</span></td>
     <td>The beginning of the Doctype</td>
   </tr>
   <tr class="r2" valign="top">
     <td><span class="string">&quot;html&quot;</span></td>
     <td>This string specifies the name of the root element for the markup type.</td>
   </tr>
   <tr class="r1" valign="top">
     <td><span class="string">&quot;PUBLIC&quot;</span></td>
     <td>This indicates the availability of the DTD resource. It can be a publicly-accessible 
         object (<span class="string">&quot;PUBLIC&quot;</span>) or a system resource 
         (<span class="string">&quot;SYSTEM&quot;</span>) such as a local file or URL. HTML/XHTML DTDs 
         are specified by <span class="string">&quot;PUBLIC&quot;</span> identifiers.</td>
   </tr>
   <tr class="r2" valign="top">
     <td><span class="string">&quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;</span></td>
     <td>This is the Formal Public Identifier (FPI). This compact, quoted string gives a lot of information about the 
         DTD, such as its Registration, Organization, Type, Label, and the Encoding language. For HTML/XHTML DTDs, the 
         most interesting part of this is the label portion (the &quot;XHTML 1.0 Transitional&quot; part). If the processing 
         entity does not already have local access to this DTD, it can get it from the System Identifier (next portion).</td>
   </tr>
   <tr class="r1" valign="top">
     <td><span class="string">&quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;</span></td>
     <td>The System Identifier (SI); the URL location of the DTD specified in the FPI</td>
   </tr>
   <tr class="r2" valign="top">
     <td><span class="string">&quot;&gt;&quot;</span></td>
     <td>The ending of the Doctype</td>
   </tr>
</table>

<p>MAMA&#39;s analysis stores the entire DOCTYPE statement, but the validator&#39;s SOAP response only returns a portion of it&#8212;
   generally the FPI, but some situations may return the SI instead or even nothing at all if an error condition is detected. 
   These situations are infrequent, though; only 70 URLs analyzed by the validator returned the Doctype&#39;s SI, for example.</p>

<h3>!Doctypes!</h3>
<p>The validator examined 3,509,10 URLs overall. Of those, the validator says that 1,474,974 (42.03%) 
   &quot;definitely&quot; did not use a DOCTYPE (indicated by an empty content for the <code class="elem">&lt;m:doctype &gt;</code> element 
   in the SOAP response). In addition to the empty <code class="elem">&lt;m:doctype &gt;</code> element in the SOAP response, the validator 
   also returns explicit warnings for the instances it does not encounter a Doctype statement: specifically, warning codes 
   &#39;W09&#39; and &#39;W09x&#39; are generated by the SGML parser layer of the validator. Is there any correlation between these warning 
   codes and the &quot;official&quot; empty Doctype mentioned in the SOAP response? The quick answer is yes. Some 1,373,352 URLs have either 
   the &#39;W09&#39; or &#39;W09x&#39; warnings. Looking closer for a direct correlation, 1,371,899 URLs were issued a &#39;W09&#39;/&#39;W09x&#39; warning 
   <strong>AND</strong> do not have a Doctype listed in the SOAP response. This leaves 1,453 URLs that had some sort of 
   validator-detectable Doctype, but a warning for No Doctype was issued. Sampling several URLs from the above set showed that, 
   in every case, the Doctype statement was not at the very beginning of the document. So, it appears that the OpenSP 
   parser does not like this, but the validator itself is OK with this scenario.</p>

<p>MAMA also looked at Doctypes in its main analysis. We have compared cases where both tools found no Doctype. 
   MAMA found 1,720,886 URLs without a Doctype. This is a rather large discrepancy compared to the validator&#39;s numbers above. 
   We must alter this figure further because the SOAP response for a validation failure error returns empty 
   <code class="elem">&lt;m:doctype &gt;</code> and <code class="elem">&lt;m:charset &gt;</code> elements. To improve the quality of our 
   comparison between MAMA and the validator&#39;s results, we must exclude from our mutual examination all URLs with 
   a positive validator failure count. After this minor adjustment, the numbers are much more in line with 
   each other. To the numbers:</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-3:</strong> Scenarios where Doctype is not present</caption>
   <tr valign="bottom">
     <th>Situation</th>
     <th>Qty</th>
   </tr>
   <tr class="r1">
     <td>MAMA detected no Doctype.</td>
     <td class="num">1,465,367</td>
   </tr>
   <tr class="r2">
     <td>Validator detected no Doctype.</td>
     <td class="num">1,474,974</td>
   </tr>
   <tr class="r1">
     <td>MAMA and validator both detected no Doctype.</td>
     <td class="num">1,423,478</td>
   </tr>
   <tr class="r2">
     <td>MAMA detected no Doctype, but the validator did.</td>
     <td class="num">41,889</td>
   </tr>
   <tr class="r1">
     <td>Validator detected no Doctype, but MAMA did.</td>
     <td class="num">51,496</td>
   </tr>
</table>

<p>The final two numbers are the most interesting. These discrepancies are still quite large 
   (~3% of the overall &#39;no Doctype detected&#39; count). What could account for this? Some reasons noticed for the 
   differences (there could be others):</p>

<ul>
    <li>MAMA did not look for a Doctype in the destination document of a META refresh/redirect. The validator appears to do this.
        <p class="note">Ex: <a href="http://disneyworld.disney.go.com/wdw/parks/parkLanding?id=TLLandingPage">http://disneyworld.disney.go.com/wdw/parks/parkLanding?id=TLLandingPage</a></p></li>
    <li>MAMA does not request or handle gzipped content, but it was occasionally served to it anyway. The validator appears to handle this.</li>
    <li>MAMA looked anywhere in the document for a Doctype, but the validator only looks near the beginning of the document. 
        A rather large set of URLs unfortunately fit this description.
        <p class="note">Ex: <a href="http://www.ruready.com/">http://www.ruready.com/</a></p></li>
    <li>URL content can change over time, including the addition or deletion of Doctypes. MAMA&#39;s analysis occurred in November 2007, 
        and the validation of those same URLs happened in January 2008&#8212;over 2 months later. In sampling random parts of the URL 
        set where MAMA did not initially detect a Doctype, a current, live analysis by MAMA does indeed detect a Doctype in most 
        cases tried. Other than a bug existing in MAMA (unfortunately, always possible in any software), this is the best 
        explanation to put forth.</li>
</ul>

<h3>Doctype statement present details</h3>
<p>What about URLs that had validator-detectable Doctypes? We will linger on the comparison between MAMA&#39;s Doctype detection 
   and the Validator&#39;s before looking in depth at what those Doctypes were.</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-4:</strong> Scenarios where Doctype is present</caption>
   <tr valign="bottom">
     <th>Situation</th>
     <th>Qty</th>
   </tr>
   <tr class="r1">
     <td>MAMA detected a Doctype.</td>
     <td class="num">1,788,294</td>
   </tr>
   <tr class="r2">
     <td>The validator detected a Doctype.</td>
     <td class="num">1,625,509</td>
     </tr>
   <tr class="r1">
     <td>MAMA and the validator both detected a Doctype, and it was the same.</td>
     <td class="num">1,583,620</td>
   </tr>
   <tr class="r2">
     <td>MAMA and the validator both detected a Doctype, and it was different.</td>
     <td class="num">36,119</td>
   </tr>
</table>

<p>Where MAMA and the validator both found a Doctype, they disagree 2.28% of the time. Other than the 
   aforementioned time delay between the MAMA and validator analyses, could there be other reasons to account for this 
   difference? Scanning a list of results for MAMA/validator Doctypes that differed, there may indeed be a trend&#8212;and a 
   positive one at that. Of the 36,119 URLs that changed Doctype, 23,390 of them (64.76%) changed from an HTML Doctype 
   to an XHTML Doctype. There are a few reasons mentioned above that could be affecting these results, and the above 
   numbers <strong>could</strong> be a coincidence, but this looks like a data point supporting the gradual shift from 
   HTML to XHTML.</p>

<p>To summarize the <a href="doctypes-url.htm">per-URL</a> and 
   <a href="doctypes-dom.htm">per-domain</a> frequency tables for validator Doctype, Transitional FPI flavors 
   have a lock on the top three most popular positions. The other variants trail far behind. If a document has a Doctype, 
   it is likely to be a Transitional flavor of XHTML 1.0 or (even more likely) HTML 4.0x.
   XHTML 1.0 Strict dominates over any other Strict variant (98% of all Strict types).</p>

<h3>Totals for common substrings found in the validator Doctype field</h3>
<p>A survey of the FPIs the validator exposed is like a microcosm of the evolution of HTML&#8212;there are documents claiming to adhere to &quot;ancient&quot; versions from the early days all the way through to 
   the language&#39;s present XHTML incarnations. Searching for a few, well-chosen substrings demonstrates this variety well,
   and we can see how well an author&#39;s choice of Doctype FPI results in actually passing validation. Out of the 1,625,509 
   URLs exposing a Doctype to the validator, Strict Doctypes pass validation twice as often as the other flavors, and XHTML 
   Doctypes are much are heavily favored for passing validation than other Doctypes. More could be said about the final two 
   items in the table below (to say the least), but that is left for a future discussion.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-5:</strong> Detection of substrings in the Doctype field</caption>
   <tr valign="bottom">
     <th>Doctype flavor</th>
     <th>Qty</th>
     <th>Percentage<br />of total</th>
     <th>Passing<br />validation</th>
     <th>Percentage of<br />flavor</th>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot;Transitional&quot;</span></td>
     <td class="num">1,341,024</td>
     <td class="num">82.50%</td>
     <td class="num">112,348</td>
     <td class="num">8.38%</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&quot;Strict&quot;</span></td>
     <td class="num">100,002</td>
     <td class="num">6.15%</td>
     <td class="num">17,502</td>
     <td class="num">17.50%</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot;Frameset&quot;</span></td>
     <td class="num">57,225</td>
     <td class="num">3.52%</td>
     <td class="num">4,133</td>
     <td class="num">7.22%</td>
   </tr>

   <tr valign="bottom">
     <th>Doctype markup language</th>
     <th>Qty</th>
     <th>Percentage<br />of total</th>
     <th>Passing<br />validation</th>
     <th>Percentage of<br />markup language</th>
   </tr>    
   <tr class="r1">
     <td><span class="string">&quot; html 4&quot;</span> (HTML 4 variants)</td>
     <td class="num">987,701</td>
     <td class="num">60.76%</td>
     <td class="num">66,535</td>
     <td class="num">6.74%</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&quot; xhtml 1.0&quot;</span></td>
     <td class="num">544,622</td>
     <td class="num">33.50%</td>
     <td class="num">71,537</td>
     <td class="num">13.14%</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot; html 3.2&quot;</span></td>
     <td class="num">44,642</td>
     <td class="num">2.75%</td>
     <td class="num">1,753</td>
     <td class="num">3.93%</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&quot; xhtml 1.1&quot;</span></td>
     <td class="num">19,984</td>
     <td class="num">1.23%</td>
     <td class="num">4,074</td>
     <td class="num">20.39%</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot; html 2&quot;</span></td>
     <td class="num">4,792</td>
     <td class="num">0.29%</td>
     <td class="num">176</td>
     <td class="num">3.67%</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&quot; html 3.0&quot;</span></td>
     <td class="num">884</td>
     <td class="num">0.05%</td>
     <td class="num">44</td>
     <td class="num">4.98%</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot;WAP&quot;</span></td>
     <td class="num">789</td>
     <td class="num">0.05%</td>
     <td class="num">468</td>
     <td class="num">59.32%</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&quot; xhtml 2&quot;</span></td>
     <td class="num">11</td>
     <td class="num">0.00%</td>
     <td class="num">0</td>
     <td class="num">0.00%</td>
   </tr>
</table>

<p>The studies from Parnas and Saarsoo did not use the W3C validator, and, as a consequence, there was 
   not such an extreme focus on Doctype usage. Generally, the validator they used only tracked whether a Doctype was 
   used at all. The main reported error type in Parnas&#39; study was a missing Doctype, with only 18.8% of URLs 
   having one present. By the time of Saarsoo&#39;s study, the number of URLs having a Doctype moved up to 39.08%. Fast-forward 
   to now, and that number has grown considerably yet again&#8212;to 57.7% according to the W3C validator. This is a very 
   respectable increase over time. If few authors are actually creating valid documents, at least most of them seem 
   to understand that there <strong>IS</strong> a standard to which they should be adhering.</p>

<h3>Doctypes for our small, special interest URL sets</h3>
<p>Backtracking just a little, the next two tables are a quick look at the Doctypes used for the 
   W3C-member-company URLs and the Alexa Top 500 list. Almost 76% of those URLs passing validation 
   are XHTML variants in the W3C-company set, and in the Alexa list it is almost 66%.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-6:</strong> 
   Doctype FPIs of W3C-Member-Company Web sites and validation rates</caption>
   <tr valign="bottom">
     <th>Doctype FPI</th>
     <th>Passed<br />validation</th>
     <th>Total</th>
     <th>Percentage<br />of FPI type</th>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD XHTML 1.0 Transitional//EN</td>
     <td class="num">36</td>
     <td class="num">145</td>
     <td class="num">24.83%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD XHTML 1.0 Strict//EN</td>
     <td class="num">23</td>
     <td class="num">45</td>
     <td class="num">51.11%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD HTML 4.01 Transitional//EN</td>
     <td class="num">16</td>
     <td class="num">95</td>
     <td class="num">16.84%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD XHTML 1.1//EN</td>
     <td class="num">4</td>
     <td class="num">8</td>
     <td class="num">50.00%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD HTML 4.0 Transitional//EN</td>
     <td class="num">3</td>
     <td class="num">22</td>
     <td class="num">13.64%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD HTML 4.01//EN</td>
     <td class="num">1</td>
     <td class="num">7</td>
     <td class="num">14.29%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD HTML 3.2//EN</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD HTML 4.01 Frameset//EN</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD HTML 3.2 Final//EN</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD XHTML 1.0 Strict//FI</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD XHTML 1.0 Frameset//EN</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r2">
     <td>[None]</td>
     <td class="num">0</td>
     <td class="num">85</td>
     <td class="num">0.00%</td>
   </tr>
</table>

<p>&#xA0;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-7:</strong> Doctype FPIs of Alexa Top 500 Web sites and validation rates</caption>
   <tr valign="bottom">
     <th>Doctype FPI</th>
     <th>Passed<br />validation</th>
     <th>Total</th>
     <th>Percentage<br />of FPI type</th>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD XHTML 1.0 Strict//EN</td>
     <td class="num">10</td>
     <td class="num">37</td>
     <td class="num">27.03%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD XHTML 1.0 Transitional//EN</td>
     <td class="num">9</td>
     <td class="num">130</td>
     <td class="num">6.92%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD HTML 4.01 Transitional//EN</td>
     <td class="num">5</td>
     <td class="num">77</td>
     <td class="num">6.49%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD HTML 4.0 Transitional//EN</td>
     <td class="num">3</td>
     <td class="num">22</td>
     <td class="num">13.64%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD HTML 4.01//EN</td>
     <td class="num">2</td>
     <td class="num">12</td>
     <td class="num">16.67%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD XHTML 1.1//EN</td>
     <td class="num">2</td>
     <td class="num">5</td>
     <td class="num">40.00%</td>
   </tr>
   <tr class="r1">
     <td>-//iDNES//DTD HTML 4//EN</td>
     <td class="num">1</td>
     <td class="num">1</td>
     <td class="num">100.00%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD HTML 4.01 Frameset//EN</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD XHTML 1.1//EN http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD XHTML 1.0 Strict //EN</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r1">
     <td>-//W3C//DTD XHTML 1.0 Transitional//ES</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r2">
     <td>-//W3C//DTD HTML 4.0 Strict//EN</td>
     <td class="num">0</td>
     <td class="num">1</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r1">
     <td>[None]</td>
     <td class="num">0</td>
     <td class="num">193</td>
     <td class="num">0.00%</td>
   </tr>
</table>

<h2 id="charset">Character sets</h2>
<p>In the previous section on Doctypes, there were many ways to look at just a single variable (presence 
   or lack of a Doctype). Now, with character sets it becomes even more complex. Even a simplistic view of character set 
   determination can involve at least three aspects of a document. MAMA, the validator, and the validator&#39;s SGML parser 
   <strong>ALL</strong> have something to say about the choice of a document&#39;s character set. To cover every permutation
   and difference between the many possible charset specification vectors would definitely exhaust the author and most likely 
   bore the reader. Every effort will be made to present some of this data in a way from that is not <strong>TOO</strong> 
   overwhelming.</p>

<p>There are three main areas of interest when determining the character set to use when validating a document:</p>

<ul>
    <li>The <strong>charset</strong> parameter of the <code class="skeyw">Content-Type</code> field in a document&#39;s HTTP Header</li>
    <li>The <strong>charset</strong> parameter of the <code class="att">Content</code> 
        attribute for a <code class="elem">META</code> &quot;Content-Type&quot; declaration</li>
    <li>The <strong>encoding</strong> attribute of the XML prologue</li>
</ul>

<p>For brevity, these will be shortened to &quot;HTTP&quot;, &quot;META&quot;, and &quot;XML&quot; respectively.</p>

<h3>Character set differences between MAMA and the validator</h3>
<p>An important difference exists between MAMA and the validator when talking about character sets.
   There is an HTTP header that allows a request to specify which character sets it prefers. MAMA sent this &quot;Accept-Charset&quot;
   header with a value of <span class="string">&quot;windows-1252, utf-8, utf-16, iso-8859-1;q=0.6, *;q=0.1&quot;</span>. 
   This header field value is used by 
   Opera (9.10), and MAMA tried to emulate this browser as closely as possible. The character sets that were specified 
   reflect the author&#39;s own particular language bias. The validator is another story. It does not send an &quot;Accept-Charset&quot; 
   header field at all. This may cause differences between the two and affect the reported character set results.</p>

<h3>MAMA&#39;s view of character sets</h3>
<p>First up is a look at what MAMA was able to determine about these three fields, and how they are 
   used in combination with each other. The totals here account for all cases where a non-empty value was present for 
   any of the HTTP/META/XML charset specification types. The following tables show the frequencies for the different ways that character sets are 
   established and mixed. A document can have none, any or all of these factors. Note: The XML level in Fig 9-1 appears 
   to be very low in comparison to the other specification methods, but this is because the number of documents with 
   an XML declaration is also rather low. Looked at in this way, that ratio actually the highest, being even more favorable 
   than the META case at 96,264 of 104,722 URLs (91.92%). Fig 9-2 offers a breakdown of all the combinations of ways to 
   specify a character set. By a large majority, authors do this using only the META element method. The final table, Fig 9-3,
   shows what happens when more than one source for a character set existed in a document, and whether these multiple values 
   agreed with one another.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-1:</strong> MAMA&#8212;How character sets are specified</caption>
   <tr valign="bottom">
     <th>Charset<br />source</th>
     <th>Number of<br />occurrences</th>
     <th>Total where<br />any charset<br />specified</th>
     <th>Percentage<br />where any<br />charset<br />specified</th>
   </tr>
   <tr class="r1">
     <td>HTTP</td>
     <td class="num">686,749</td>
     <td class="num">2,626,206</td>
     <td class="num">26.15%</td>
   </tr>
   <tr class="r2">
     <td>META</td>
     <td class="num">2,361,221</td>
     <td class="num">2,626,206</td>
     <td class="num">89.91%</td>
   </tr>
   <tr class="r1">
     <td>XML</td>
     <td class="num">96,264</td>
     <td class="num">2,626,206</td>
     <td class="num">3.67%</td>
   </tr>
</table>

<p>&#xA0;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-2:</strong> 
   MAMA&#8212;How character sets are specified in combination</caption>
   <tr valign="bottom">
     <th>Charset<br />specified in</th>
     <th>Quantity</th>
     <th>Total where<br />any charset<br />specified</th>
     <th>Percentage<br />where any<br />charset<br />specified</th>
   </tr>
   <tr class="r1">
     <td>HTTP only</td>
     <td class="num">240,349</td>
     <td class="num">2,626,206</td>
     <td class="num">9.15%</td>
   </tr>
   <tr class="r2">
     <td>META only</td>
     <td class="num">1,872,497</td>
     <td class="num">2,626,206</td>
     <td class="num">71.30%</td>
   </tr>
   <tr class="r1">
     <td>XML only</td>
     <td class="num">17,858</td>
     <td class="num">2,626,206</td>
     <td class="num">0.68%</td>
   </tr>
   <tr class="r2">
     <td>HTTP and META</td>
     <td class="num">417,109</td>
     <td class="num">2,626,206</td>
     <td class="num">15.88%</td>
   </tr>
   <tr class="r1">
     <td>HTTP and XML</td>
     <td class="num">6,791</td>
     <td class="num">2,626,206</td>
     <td class="num">0.26%</td>
   </tr>
   <tr class="r2">
     <td>META and XML</td>
     <td class="num">49,115</td>
     <td class="num">2,626,206</td>
     <td class="num">1.87%</td>
   </tr>
   <tr class="r1">
     <td>All three sources</td>
     <td class="num">22,500</td>
     <td class="num">2,626,206</td>
     <td class="num">0.86%</td>
   </tr>
</table>

<p>&#xA0;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-3:</strong> 
   MAMA&#8212;How character sets disagree when specified in combination</caption>
   <tr valign="bottom">
     <th>Specified<br />charset<br />sources</th>
     <th>Disagree</th>
     <th>Total</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td>HTTP and META</td>
     <td class="num">123,245</td>
     <td class="num">417,109</td>
     <td class="num">29.55%</td>
   </tr>
   <tr class="r2">
     <td>HTTP and XML</td>
     <td class="num">2,238</td>
     <td class="num">6,791</td>
     <td class="num">32.96%</td>
   </tr>
   <tr class="r1">
     <td>META and XML</td>
     <td class="num">4,086</td>
     <td class="num">49,115</td>
     <td class="num">8.32%</td>
   </tr>
   <tr class="r2">
     <td>All three sources</td>
     <td class="num">4,399</td>
     <td class="num">22,500</td>
     <td class="num">19.55%</td>
   </tr>
</table>

<h3>The validator&#39;s view of character sets</h3>
<p>Now, we will look at the way the markup validator views charset information. The validator generally looks for 
   the same three document sources mentioned previously to determine charset information. Before looking at these actual charset values, 
   it is useful to examine whether the validator&#39;s view of charset information is internally consistent or not. It can also be 
   instructive to compare, where possible, the validator&#39;s view of charset information versus MAMA&#39;s view.</p>

<p>To directly compare validator and MAMA charset information, we must remove some URLs from consideration. 
   The validator&#39;s SOAP response returns an empty charset value in all cases where there is a validator failure. It is useful 
   to know if the validator is returning a &quot;truly&quot; empty charset value, so all URLs with a failure error are removed from the 
   examination set for this phase. This immediately reduces our URL group by 408,687 URLs.</p>

<p>The items of interest to look at in the validator response are the contents of the 
   <code class="elem">&lt;m:charset &gt;</code> element and warnings issued for no 
   detected charset or charset value mismatch from differing sources. We will explore 
   how/if all these factors mesh when the validator is determining which charset to use.</p>

<h3>Validator-detected charsets versus MAMA-detected charsets</h3>
<p>The following table is mostly for sanity checking to see if the validator&#39;s results resemble MAMA&#39;s 
   results. The first two entries have very low totals, but this may involve some corner charset detection cases worth taking 
   a second glance. The third case is a definite indication that the validator has default fallback values used for 
   character set when none is detected through the typical methods.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-4:</strong> 
   Validator versus MAMA charset detection</caption>
   <tr valign="bottom">
     <th>Validator<br />charset<br />detected</th>
     <th>Scenario</th>
     <th>Total</th>
   </tr>
   <tr class="r1">
     <td>No</td>
     <td>No MAMA charsets detected</td>
     <td class="num">47</td>
   </tr>
   <tr class="r2">
     <td>No</td>
     <td>MAMA charset detected</td>
     <td class="num">1,179</td>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>No MAMA charsets detected</td>
     <td class="num">592,361</td>
   </tr>
   <tr class="r2">
     <td>Yes</td>
     <td>Validator also issued: &quot;Warning! Conflicting charsets...&quot; message</td>
     <td class="num">118,367</td>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>Validator also issued: &quot;Warning! No charset found...&quot; message</td>
     <td class="num">480,942</td>
   </tr>
</table>

<h3>Validator Warning 04 issued: No character encoding found</h3>
<p>This table might be a little confusing with some of the double negatives being tossed around. The presence 
   of a Warning 04 means that the SGML parser portion of the validator did not detect a character set. This result may differ
   from what the validator ends up deciding should be used for the charset. Note that Row 2 is the sum of rows 1, 3, and 4. 
   Row 6 is the sum of rows 5, 7, and 8. Row 5 is another indication that the validator uses a default character set value.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-5:</strong> 
   Validator Warning 04 scenarios</caption>
   <tr valign="bottom">
     <th>Warning 04</th>
     <th>Charset state</th>
     <th>Total</th>
   </tr>
   <tr class="r1">
     <td>No</td>
     <td>No validator charset detected</td>
     <td class="num">1,226</td>
   </tr>
   <tr class="r2">
     <td>No</td>
     <td>Validator charset detected</td>
     <td class="num">2,618,315</td>
   </tr>
   <tr class="r1">
     <td>No</td>
     <td>No MAMA charset detected</td>
     <td class="num">137,286</td>
   </tr>
   <tr class="r2">
     <td>No</td>
     <td>MAMA charset detected</td>
     <td class="num">2,482,255</td>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>No validator charset detected</td>
     <td class="num">0</td>
   </tr>
   <tr class="r2">
     <td>Yes</td>
     <td>Validator charset detected</td>
     <td class="num">480,942</td>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>No MAMA charset detected</td>
     <td class="num">455,122</td>
   </tr>
   <tr class="r2">
     <td>Yes</td>
     <td>MAMA charset detected</td>
     <td class="num">25,820</td>
   </tr>
</table>

<h3>Validator Warnings 18-20 issued: Character encoding mismatches</h3>
<p>In these cases, the validator discovers more than one encoding source, and there is some 
   disagreement between them. The validator does not say what the disagreement was, so for some idea, we can 
   look at the data MAMA discovered about these sources. Note that the final row in each table is the expected 
   scenario for the warning to be generated; naturally, those totals are the highest by a wide margin. URLs from 
   the other rows may merit further testing, but there is one reason mentioned before that can explain at least 
   some of these quantities: the two-month delta between MAMA&#39;s analysis and the validator&#39;s analysis of the URL set.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-6:</strong> 
   Warning 18: Character encoding mismatch<br />(HTTP Header encoding/XML encoding)</caption>
   <tr valign="bottom">
     <th>MAMA<br />Detected<br />HTTP</th>
     <th>MAMA<br />Detected<br />XML</th>
     <th>Additional Factor</th>
     <th>Total</th>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>No</td>
     <td>--</td>
     <td class="num">483</td>
   </tr>
   <tr class="r2">
     <td>No</td>
     <td>Yes</td>
     <td>--</td>
     <td class="num">70</td>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>Yes</td>
     <td>Both agree</td>
     <td class="num">80</td>
   </tr>
   <tr class="r2">
     <td>Yes</td>
     <td>Yes</td>
     <td>Both different</td>
     <td class="num">2,517</td>
   </tr>
</table>

<p>&#xA0;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-7:</strong> 
   Warning 19: Character encoding mismatch<br />(HTTP Header encoding/META encoding)</caption>
   <tr valign="bottom">
     <th>MAMA<br />Detected<br />HTTP</th>
     <th>MAMA<br />Detected<br />META</th>
     <th>Additional Factor</th>
     <th>Total</th>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>No</td>
     <td>--</td>
     <td class="num">6,712</td>
   </tr>
   <tr class="r2">
     <td>No</td>
     <td>Yes</td>
     <td>--</td>
     <td class="num">4,485</td>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>Yes</td>
     <td>Both agree</td>
     <td class="num">4,153</td>
   </tr>
   <tr class="r2">
     <td>Yes</td>
     <td>Yes</td>
     <td>Both different</td>
     <td class="num">97,028</td>
   </tr>
</table>

<p>&#xA0;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-8:</strong> 
   Warning 20: Character encoding mismatch<br />(XML encoding/META element encoding)</caption>
   <tr valign="bottom">
     <th>MAMA<br />Detected<br />XML</th>
     <th>MAMA<br />Detected<br />META</th>
     <th>Additional Factor</th>
     <th>Total</th>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>No</td>
     <td>--</td>
     <td class="num">79</td>
   </tr>
   <tr class="r2">
     <td>No</td>
     <td>Yes</td>
     <td>--</td>
     <td class="num">50</td>
   </tr>
   <tr class="r1">
     <td>Yes</td>
     <td>Yes</td>
     <td>Both agree</td>
     <td class="num">88</td>
   </tr>
   <tr class="r2">
     <td>Yes</td>
     <td>Yes</td>
     <td>Both different</td>
     <td class="num">992</td>
   </tr>
</table>

<h3>Validator-detected charset values</h3>
<p>We have saved the best of our character set discussion for last: what values are actually used 
   by the validator for character set? (We will be looking at similar frequency tables for each of the MAMA-detected charset 
   sources (HTTP header, META, XML) in another section of this study.) The full 
   <a href="charsets-url.htm">per-URL</a> and <a href="charsets-dom.htm">per-Domain</a> 
   frequency tables for validator charset show very little movement between the two&#8212;you have to go down to #17 before 
   there is a difference! Below is an abbreviated per-URL frequency table for validator character-set values (out of 243 
   unique values found for this field).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 10-9:</strong> 
   Validator character-set short frequency table</caption>
   <tr valign="bottom">
     <th>Validator<br />charset value</th>
     <th>Frequency</th>
     <th>Percentage</th>
     <th rowspan="9">&#xA0;</th>
     <th>Validator<br />charset value</th>
     <th>Frequency</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td>iso-8859-1</td>
     <td class="num">1,510,827</td>
     <td class="num">43.05%</td>
     <td>iso-8859-15</td>
     <td class="num">12,276</td>
     <td class="num">0.35%</td>
   </tr>
   <tr class="r2">
     <td>utf-8</td>
     <td class="num">943,326</td>
     <td class="num">26.88%</td>
     <td>big5</td>
     <td class="num">11,395</td>
     <td class="num">0.32%</td>
   </tr>
   <tr class="r1">
     <td>windows-1252</td>
     <td class="num">293,595</td>
     <td class="num">8.37%</td>
     <td>windows-1254</td>
     <td class="num">9,756</td>
     <td class="num">0.28%</td>
   </tr>
   <tr class="r2">
     <td>shift_jis</td>
     <td class="num">87,593</td>
     <td class="num">2.50%</td>
     <td>iso-8859-9</td>
     <td class="num">9,091</td>
     <td class="num">0.26%</td>
   </tr>
   <tr class="r1">
     <td>iso-8859-2</td>
     <td class="num">60,663</td>
     <td class="num">1.73%</td>
     <td>us-ascii</td>
     <td class="num">8,134</td>
     <td class="num">0.23%</td>
   </tr>
   <tr class="r2">
     <td>windows-1251</td>
     <td class="num">51,336</td>
     <td class="num">1.46%</td>
     <td>euc-jp</td>
     <td class="num">7,174</td>
     <td class="num">0.20%</td>
   </tr>
   <tr class="r1">
     <td>windows-1250</td>
     <td class="num">30,353</td>
     <td class="num">0.86%</td>
     <td>x-sjis</td>
     <td class="num">5,564</td>
     <td class="num">0.16%</td>
   </tr>
   <tr class="r2">
     <td>gb2312</td>
     <td class="num">19,412</td>
     <td class="num">0.55%</td>
     <td>euc-kr</td>
     <td class="num">4,768</td>
     <td class="num">0.14%</td>
   </tr>
</table>

&lt;page /&gt;

<p><strong><a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/">Page 1 index</a> : <a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/?page=2">Page 2 index</a> : Page 3 index</strong></p>
<ol>
    <li><a href="#fails">Validator failures</a></li>
    <li><a href="#warns">Validator warnings</a></li>
    <li><a href="#errors">Validator errors</a></li>
    <li><a href="#conclusion">Summing up ...</a></li>
    <li><a href="#methodology">Appendix: Validation methodology</a></li>
</ol>

<h2 id="fails">Validator failures</h2>
<p>When the validator runs into a condition that does not allow it to validate a document, a failure notice is issued. 
   The validator defines nine different conditions as fatal errors, but MAMA only encountered four of them among all the  
   URLs it has processed through the validator. It is certainly possible that MAMA&#39;s selection mechanism may have 
   contributed to prevention of these errors from occurring. Some 408,920 URLs out of the 3,509,180 URLs validated (11.65%) 
   officially failed validation for various reasons.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 11-1:</strong> 
   Validator failure modes</caption>
   <tr valign="bottom">
     <th>Failure type</th>
     <th>Detected<br />in MAMA</th>
     <th>Explanation</th>
   </tr>
   <tr class="r1">
     <td>Transcode error</td>
     <td>No</td>
     <td>Occurs when attempting to transcode the character encoding of the document</td>
   </tr>
   <tr class="r2">
     <td>Byte Error</td>
     <td>Yes</td>
     <td>Bytes found that are not valid in the specified character encoding</td>
   </tr>
   <tr class="r1">
     <td>URI Error</td>
     <td>No</td>
     <td>The URL Scheme/protocol is not supported by the validator</td>
   </tr>
   <tr class="r2">
     <td>No-content error</td>
     <td>No</td>
     <td>No content found to validate</td>
   </tr>
   <tr class="r1">
     <td>IP Error</td>
     <td>No</td>
     <td>IP address is not public</td>
   </tr>
   <tr class="r2">
     <td>HTTP Error</td>
     <td>Yes</td>
     <td>Received unexpected HTTP response</td>
   </tr>
   <tr class="r1">
     <td>MIME Error</td>
     <td>Yes</td>
     <td>Unsupported MIME type</td>
   </tr>
   <tr class="r2">
     <td>Parse External ID Error</td>
     <td>Yes</td>
     <td>Reference made to a system-specific file instead of using a well-known public identifier</td>
   </tr>
   <tr class="r1">
     <td>Referer Error</td>
     <td>No</td>
     <td>Referer check requested but &#39;Referer&#39; HTTP header not sent</td>
   </tr>
</table>

<h3>Frequencies of failure types in MAMA</h3>
<p>By far, the &quot;Fatal Byte Error&quot; occurs the most of any failure error&#8212;300,008 times (8.55%) out of all URLs validated. 
   This error type occurs when characters in the document are not valid in the detected character encoding. This is an 
   indication to the validator that it cannot trust the information it has about the document, so it chooses to quit 
   trying rather than attempt to validate incorrectly.</p>

<p>An additional failure mode relating to MAMA&#39;s processing of the validator&#39;s activities should be mentioned. If MAMA 
   did not receive a response back from the validator, or some other (possibly) temporary factor caused an interruption 
   between MAMA and the validator, an &quot;err&quot; message code was generated. MAMA encountered this type of error 34,950 times out of 
   the 3,509,180 URLs (1.00%) that were passed to the validator. Note that MAMA has not yet tried to re-validate any of these URLs.
   There are various pluses and minuses to dismissing the &quot;err&quot; state, or any other validator
   failure mode from the overall grand total of URLs validated. These failed URLs remain in the final count, but 
   if you disagree, there is enough numerical data to be able to arrive at your own tweaked numbers and percentages.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 11-2:</strong> 
   Validator failures in MAMA&#39;s URLs</caption>
   <tr valign="bottom">
     <th>Failure type</th>
     <th>Number of<br />occurrences</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td>Fatal byte error</td>
     <td class="num">300,008</td>
     <td class="num">8.55%</td>
   </tr>
   <tr class="r2">
     <td>Fatal HTTP error</td>
     <td class="num">63,908</td>
     <td class="num">1.82%</td>
   </tr>
   <tr class="r1">
     <td>err</td>
     <td class="num">34,950</td>
     <td class="num">1.00%</td>
   </tr>
   <tr class="r2">
     <td>Fatal Parse Extid error</td>
     <td class="num">8,360</td>
     <td class="num">0.24%</td>
   </tr>
   <tr class="r1">
     <td>Fatal MIME error</td>
     <td class="num">1,709</td>
     <td class="num">0.05%</td>
   </tr>
</table>

<h3>Number of failures</h3>
<p>A field was created in the MAMA database to store the number of failures encountered in a document. 
   The expectation was that the validator could only experience one failure mode at a time, so this field would hold 
   either a &#39;0&#39; or &#39;1&#39;. Imagine the surprise when 248 URL cases registered as having two failure types at the same time!
   It turns out that in every one of these cases, it was the &quot;Fatal Byte Error&quot; and &quot;Fatal MIME Error&quot; occurring at the 
   same time.<br />[Note: 98 of the 248 URLs returning these double-failure modes are definitely text files (ending in &quot;.txt&quot;) 
   and should be removed from consideration]</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 11-3:</strong> 
   Number of failures per URL</caption>
   <tr valign="bottom">
     <th>Number of<br />failures</th>
     <th>Number of<br />occurrences</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td class="num">0</td>
     <td class="num">3,100,484</td>
     <td class="num">88.35%</td>
   </tr>
   <tr class="r2">
     <td class="num">1</td>
     <td class="num">408,439</td>
     <td class="num">11.64%</td>
   </tr>
   <tr class="r1">
     <td class="num">2</td>
     <td class="num">248</td>
     <td class="num">0.01%</td>
   </tr>
</table>

<h2 id="warns">Validator warnings</h2>
<p>The validator issues a Warning if it detects missing or conflicting information important for the validation process. 
   In such cases, the validator must make a &quot;best guess&quot;; if the validator has chosen wrong, it can negate the entire 
   validation results. The validator suggests that all Warning issues be addressed so that the validator can produce results 
   that have the highest confidence.</p>

<p>The validator can produce 27 different types of Warnings, but MAMA only encountered 14 of them in its journeys 
   through DMoz and friends. A specific Warning type will only be issued once for a URL if it is encountered, but multiple Warning 
   types can be issued for the same URL.</p>

<h3>Frequencies of Warning types</h3>
<p>The most common Warning type in MAMA&#39;s URL set was W06/&quot;Unable to determine parse mode&quot;, with W09/&quot;No DOCTYPE found&quot; coming a 
   close second. These two each dwarf all other Warning types combined by a factor of two. For full explanations of the Warning 
   codes, see the <a href="http://dev.w3.org/cvsweb/validator/share/templates/en_US/warnings.tmpl?rev=1.40&amp;amp;content-type=text/x-cvsweb-markup">Validator 
   CVS</a>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 12-1:</strong> 
   Validator Warning-type frequency table</caption>
   <tr valign="bottom">
     <th>Warning code</th>
     <th>Explanation</th>
     <th>Frequency</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td>W06</td>
     <td>Unable to determine parse mode (XML/SGML)</td>
     <td class="num">1,585,029</td>
     <td class="num">45.17%</td>
   </tr>
   <tr class="r2">
     <td>W09</td>
     <td>No DOCTYPE found</td>
     <td class="num">1,372,864</td>
     <td class="num">39.12%</td>
   </tr>
   <tr class="r1">
     <td>W04</td>
     <td>No character encoding found</td>
     <td class="num">480,942</td>
     <td class="num">13.71%</td>
   </tr>
   <tr class="r2">
     <td>W19</td>
     <td>Character encoding mismatch (HTTP header/META element)</td>
     <td class="num">113,927</td>
     <td class="num">3.25%</td>
   </tr>
   <tr class="r1">
     <td>W11</td>
     <td>Namespace found in non-XML document</td>
     <td class="num">65,807</td>
     <td class="num">1.88%</td>
   </tr>
   <tr class="r2">
     <td>W23</td>
     <td>Conflict between MIME type and document type</td>
     <td class="num">19,097</td>
     <td class="num">0.54%</td>
   </tr>
   <tr class="r1">
     <td>W21</td>
     <td>Byte-order mark found in UTF-8 File</td>
     <td class="num">17,148</td>
     <td class="num">0.49%</td>
   </tr>
   <tr class="r2">
     <td>W22</td>
     <td>Character Encoding suggestion: use XXX instead of YYY</td>
     <td class="num">8,237</td>
     <td class="num">0.23%</td>
   </tr>
   <tr class="r1">
     <td>W24</td>
     <td>Rare or unregistered character encoding detected</td>
     <td class="num">7,149</td>
     <td class="num">0.20%</td>
   </tr>
   <tr class="r2">
     <td>W18</td>
     <td>Character encoding mismatch (HTTP header/XML encoding)</td>
     <td class="num">3,220</td>
     <td class="num">0.09%</td>
   </tr>
   <tr class="r1">
     <td>W20</td>
     <td>Character encoding mismatch (XML encoding/META element)</td>
     <td class="num">1,220</td>
     <td class="num">0.04%</td>
   </tr>
   <tr class="r2">
     <td>W09x</td>
     <td>No DOCTYPE found. Checking XML syntax only</td>
     <td class="num">488</td>
     <td class="num">0.01%</td>
   </tr>
   <tr class="r1">
     <td>W07</td>
     <td>Contradictory parse modes detected (XML/SGML)</td>
     <td class="num">72</td>
     <td class="num">0.00%</td>
   </tr>
   <tr class="r2">
     <td>W01</td>
     <td>Missing &#39;charset&#39; attribute (HTTP header for XML)</td>
     <td class="num">21</td>
     <td class="num">0.00%</td>
   </tr>
</table>

<h3>Warnings in combination</h3>
<p>MAMA never encountered more than five different Warning types at a time for any given URL. The most 
   common scenario found was for a URL to have two types of Warnings at a time. There is a definite correlation 
   between the two most frequent Warning types and that big &quot;bump&quot; in the Warning-count list below. Of the 1,025,319 
   cases where only two different Warning types were encountered, 951,957 (92.84%) were the W06 and W09 type together.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 12-2:</strong> Number of warnings per URL</caption>
   <tr valign="bottom">
     <th>Number of<br />Warnings</th>
     <th>Frequency</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td class="num">0</td>
     <td class="num">1,702,424</td>
     <td class="num">48.51%</td>
   </tr>
   <tr class="r2">
     <td class="num">1</td>
     <td class="num">363,103</td>
     <td class="num">10.35%</td>
   </tr>
   <tr class="r1">
     <td class="num">2</td>
     <td class="num">1,025,319</td>
     <td class="num">29.22%</td>
   </tr>
   <tr class="r2">
     <td class="num">3</td>
     <td class="num">411,850</td>
     <td class="num">11.74%</td>
   </tr>
   <tr class="r1">
     <td class="num">4</td>
     <td class="num">6,439</td>
     <td class="num">0.18%</td>
   </tr>
   <tr class="r2">
     <td class="num">5</td>
     <td class="num">35</td>
     <td class="num">0.00%</td>
   </tr>
</table>

<p class="note">Ex: 5 Warning types in combination: <a href="http://www.hazenasvinov.cz">http://www.hazenasvinov.cz</a></p>

<h3>... And, er ... those other types of warnings too</h3>
<p>The truth is, the validator seems to define a warning somewhat loosely, hence the capitalized use of 
   &quot;Warning&quot; in the previous section to make the validator&#39;s two interpretations distinct. Firstly, it defines a &quot;Warning&quot; 
   according to the warning codes and meanings in the above section, where MAMA encountered no more than 5 Warning types 
   at a time. The validator additionally has a warnings section in its SOAP output, and a warning summary count. 
   When the validator uses this latter interpretation of warning, it seems to have a more liberal meaning. It lumps other 
   error types in with the strict Warnings measure as classified before. By this accounting, a number of URLs in DMoz have more than 
   <strong>10,000</strong> of these warnings each.</p>

<p>The URL that contained the most &quot;warnings&quot; of this expanded type is a blog at: 
   <a href="http://club-aguada.blogspot.com/">http://club-aguada.blogspot.com/</a>. In MAMA&#39;s initial analysis, it reported 
   19,602 warnings! When collecting together this research soon after, this URL was re-checked on 16 Feb., 2008 through the 
   validator and it still had 14,838 warnings&#8212;and an additional 14,949 errors. This URL only has about 10-20 paragraphs of 
   text content and an additional 1,400 or so non-visible search engine spam hyperlinks. Such a big change in results seems 
   somewhat suspect in a short amount of time, but content in blogs tend to change rather rapidly which could account for 
   the difference.</p>

<p>What <strong>IS</strong> of concern is how a page that is less than 250KB in size generates over <strong>26MB</strong> from 
   the validator&#39;s SOAP output mode. The SOAP version is much more terse than the HTML output, so the validation results 
   size could have been <strong>even bigger</strong>. A validation result like this is just far too excessive. Perhaps the 
   validator should offer a way (at least as an option) to truncate the warnings and/or errors after a certain amount to 
   control this problem.</p>

<h2 id="errors">Validator errors</h2>
<p>Any problem or issue that the validator can recognize that is not a failure or a warning is just a common &quot;error&quot;. 
   Errors have the most variety&#8212;446 are currently defined in the 
   <a href="http://dev.w3.org/cvsweb/validator/share/templates/en_US/error_messages.cfg">error_messages.cfg file</a> in the 
   validator&#39;s code. The validator only encountered 134 of them through MAMA&#39;s URL set. The validation studies done by Parnas 
   and Saarsoo kept track of far fewer error types&#8212;perhaps to decrease the studies&#39; complexity. MAMA kept track of them all 
   in the hopes that it might be useful to those developing or using the validator. First we will take a look at the various 
   error types and error frequencies. To wrap things up, we will showcase URLs demonstrating some of the extreme error 
   scenarios discovered (the URLs exhibited the error behavior at the time of writing but can change over time).</p>

<h3>Error-type frequency</h3>
<p>For each error type found in a URL, MAMA stored only the error code and the number of times that error type 
   occurred. Shown below is a short &quot;Top 10&quot; list of the most frequent error types. The frequency ratios for the top errors 
   generally agree with Saarsoo&#39;s research, with a few minor differences. The error that happens most often in the 
   analyzed URL set is #108 (2,253,893 times), followed closely by: #127 (2,013,162 times). Coming in third is an interesting 
   document structural error, #344: &quot;No document type declaration; implying X&quot;. This error appears to mirror the 
   functionality of Warning W09/W09x, &quot;No DOCTYPE found&quot; (see previous section) very closely - notice that the 
   occurrence numbers for the two types are almost identical.</p>

<table cellpadding="2" cellspacing="0">
<caption class="comment" style="caption-side: bottom"><strong>Fig 13-1:</strong> Validator error-type frequency table</caption>
   <tr>
     <th>Error code</th>
     <th>Error description</th>
     <th>Frequency</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td>108</td>
     <td>There is no attribute X</td>
     <td class="num">2,253,893</td>
     <td class="num">64.23%</td>
   </tr>
   <tr class="r2">
     <td>127</td>
     <td>Required attribute X not specified</td>
     <td class="num">2,013,162</td>
     <td class="num">57.37%</td>
   </tr>
   <tr class="r1">
     <td>344</td>
     <td>No document type declaration; implying X</td>
     <td class="num">1,371,836</td>
     <td class="num">39.09%</td>
   </tr>
   <tr class="r2">
     <td>79</td>
     <td>End tag for element X which is not open</td>
     <td class="num">1,232,169</td>
     <td class="num">35.11%</td>
   </tr>
   <tr class="r1">
     <td>64</td>
     <td>Document type does not allow element X here</td>
     <td class="num">1,229,145</td>
     <td class="num">35.03%</td>
   </tr>
   <tr class="r2">
     <td>76</td>
     <td>Element X undefined</td>
     <td class="num">1,114,796</td>
     <td class="num">31.77%</td>
   </tr>
   <tr class="r1">
     <td>325</td>
     <td>Reference to entity X for which no system identifier could be generated</td>
     <td class="num">859,846</td>
     <td class="num">24.50%</td>
   </tr>
   <tr class="r2">
     <td>25</td>
     <td>General entity X not defined and no default entity</td>
     <td class="num">859,636</td>
     <td class="num">24.50%</td>
   </tr>
   <tr class="r1">
     <td>338</td>
     <td>Cannot generate system identifier for general entity X</td>
     <td class="num">859,636</td>
     <td class="num">24.50%</td>
   </tr>
   <tr class="r2">
     <td>247</td>
     <td>NET-enabling start-tag requires SHORTTAG YES</td>
     <td class="num">798,046</td>
     <td class="num">22.74%</td>
   </tr>
</table>

<p>The full <a href="errorcounthistogram.htm">validator error-type frequency table</a> 
   for MAMA&#39;s study is in a separate document. For brevity, only the error codes are listed there. The complete list of 
   <a href="http://validator.w3.org/docs/errors.html">validator error codes and their explanations</a> can be found on the 
   W3C&#39;s site. Note that a few error message codes are not described in the aforementioned W3C document, and need a 
   little extra exposition:</p>
   <ul>
       <li>&quot;xmlw&quot;: XML well-formedness error</li>
       <li>&quot;no-x&quot;: No-xmlns error (No XML Namespace declared)</li>
       <li>&quot;wron&quot;: Wrong-xmlns (Incorrect XML Namespace declared)</li>
   </ul>

<h3>Quantity of error types</h3>
<p>There were 3,000,493 URLs where at least one validation error occurred. But among these URLs, there 
   was a great variety in the types of erorrs encountered. The vast majority of URLs encountering errors 
   found 10 types of errors or less. The average total number of validation errors per page is 46.70.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 13-2:</strong> 
   Validator error-type variety per URL<br />[See also the <a href="errortypes-url.htm">full frequency table</a>]</caption>
   <tr valign="top">
     <th>Total number<br />error types</th>
     <th>Number of<br />occurrences</th>
     <th rowspan="9">&#xA0;</th>
     <th>Total number<br />error types</th>
     <th>Number of<br />occurrences</th>
   </tr>
   <tr class="r1">
     <td class="num">0</td>
     <td class="num">508,687</td>
     <td class="num">8</td>
     <td class="num">208,563</td>
   </tr>
   <tr class="r2">
     <td class="num">1</td>
     <td class="num">194,518</td>
     <td class="num">9</td>
     <td class="num">172,004</td>
   </tr>
   <tr class="r1">
     <td class="num">2</td>
     <td class="num">249,997</td>
     <td class="num">10</td>
     <td class="num">145,127</td>
   </tr>
   <tr class="r2">
     <td class="num">3</td>
     <td class="num">301,900</td>
     <td class="num">11</td>
     <td class="num">117,612</td>
   </tr>
   <tr class="r1">
     <td class="num">4</td>
     <td class="num">315,367</td>
     <td class="num">12</td>
     <td class="num">96,969</td>
   </tr>
   <tr class="r2">
     <td class="num">5</td>
     <td class="num">336,832</td>
     <td class="num">13</td>
     <td class="num">76,967</td>
   </tr>
   <tr class="r1">
     <td class="num">6</td>
     <td class="num">312,103</td>
     <td class="num">14</td>
     <td class="num">61,692</td>
   </tr>
   <tr class="r2">
     <td class="num">7</td>
     <td class="num">252,934</td>
     <td class="num">15</td>
     <td class="num">47,681</td>
   </tr>
</table>

<h3>Error extremes</h3>
<p>DMoz has <strong>many</strong> URLs, and some are bound to have unbelievable numbers of errors. 
   Believe it, though&#8212;the following three tables showcase the most extreme offenders in generating validator error messages.</p>

<p>The URLs in these lists are fairly diverse. Some of the documents are long, yet some are also 
   fairly brief (considering the error quantity). Some use CSS or scripting, while others do not. IIS and Apache are usually both 
   well-represented. The only noticeable tendency is found in the last table (Fig 13-5) for the widest variety of error types; 
   five of the eight worst offenders in this category use Microsoft IIS 6.0/ASP.NET servers (note the same URL pattern in 4 of them). 
   There is no noticeable correlation other than this. One plausible explanation for the inflated error numbers could be that IIS 
   servers browser sniff for the User-Agent header string and deliver lower-quality content based on the validator&#39;s UA value 
   &quot;W3C_Validator/1.575&quot;.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 13-3:</strong> 
   URLs with the most errors of a specific type</caption>
   <tr valign="top">
     <th>URL</th>
     <th>Error Type</th>
     <th>Error Qty</th>
   </tr>
   <tr class="r2">
     <td><a href="http://www.music-house.co.uk/">http://www.music-house.co.uk/</a></td>
     <td>76</td>
     <td class="num">28,961</td>
   </tr>
   <tr class="r1">
     <td><a href="http://www.zughaid.com/TMP.htm">http://www.zughaid.com/TMP.htm</a></td>
     <td>325</td>
     <td class="num">22,193</td>
   </tr>
   <tr class="r2">
     <td><a href="http://web.archive.org/web/20060904051111/http://www.filosofico.net/virgilioeneide.htm">http://www.filosofico.net/virgilioeneide.htm</a></td>
     <td>65</td>
     <td class="num">15,409</td>
   </tr>
   <tr class="r1">
     <td><a href="http://www.gencat.cat/diue/llengua/eines_per_a_lempresa/lexics/alimenta.htm">http://www.gencat.cat/diue/llengua/eines_per_a_lempresa/lexics/alimenta.htm</a></td>
     <td>64</td>
     <td class="num">14,316</td>
   </tr>
   <tr class="r2">
     <td><a href="http://web.archive.org/web/20090125102924/http://www.cwc.lsu.edu/cwc/projects/dbases/chase.htm">http://www.cwc.lsu.edu/cwc/projects/dbases/chase.htm</a></td>
     <td>82</td>
     <td class="num">12,211</td>
   </tr>
   <tr class="r1">
     <td><a href="http://www.dienanh.net/forums/">http://www.dienanh.net/forums/</a></td>
     <td>xmlw</td>
     <td class="num">12,103</td>
   </tr>
</table>

<p>&#xA0;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 13-4:</strong> 
   URLs with the most total errors in combination</caption>
   <tr valign="top">
     <th>URL</th>
     <th>Total Errors</th>
   </tr>
   <tr class="r2">
     <td><a href="http://club-aguada.blogspot.com/">http://club-aguada.blogspot.com/</a></td>
     <td class="num">37,370</td>
   </tr>
   <tr class="r1">
     <td><a href="http://www.first-jp.com/">http://www.first-jp.com/</a></td>
     <td class="num">34,530</td>
   </tr>
   <tr class="r2">
     <td><a href="http://www.prezesm.kylos.pl/">http://www.prezesm.kylos.pl/</a></td>
     <td class="num">33,083</td>
   </tr>
   <tr class="r1">
     <td><a href="http://defensor-sporting.blogspot.com/">http://defensor-sporting.blogspot.com/</a></td>
     <td class="num">31,617</td>
   </tr>
   <tr class="r2">
     <td><a href="http://www.mlnh.zmva.ru">http://www.mlnh.zmva.ru</a></td>
     <td class="num">29,184</td>
   </tr>
   <tr class="r1">
     <td><a href="http://www.music-house.co.uk/">http://www.music-house.co.uk/</a></td>
     <td class="num">28,963</td>
   </tr>
</table>

<p>&#xA0;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 13-5:</strong> 
   URLs with the widest variety of error types</caption>
   <tr valign="top">
     <th>URL</th>
     <th>Error Type Qty</th>
   </tr>
   <tr class="r1">
     <td><a href="http://web.archive.org/web/20090206231808/http://alumni.wsu.edu/site/c.llKYL9MQIsG/b.1860301/k.BCA0/Home.htm">http://alumni.wsu.edu/site/c.llKYL9MQIsG/b.1860301/k.BCA0/Home.htm</a></td>
     <td class="num">39</td>
   </tr>
   <tr class="r2">
     <td><a href="http://www.vincipro.com/cart/home.php">http://www.vincipro.com/cart/home.php</a></td>
     <td class="num">38</td>
   </tr>
   <tr class="r1">
     <td><a href="http://www.c-sharpcorner.com/UploadFile/prasad_1/RegExpPSD12062005021717AM/RegExpPSD.aspx">http://www.c-sharpcorner.com/UploadFile/prasad_1/RegExpPSD12062005021717AM/RegExpPSD.aspx</a></td>
     <td class="num">38</td>
   </tr>
   <tr class="r2">
     <td><a href="http://www.sleepfoundation.org/site/c.huIXKjM0IxF/b.2417141/k.C60C/Welcome.htm">http://www.sleepfoundation.org/site/c.huIXKjM0IxF/b.2417141/k.C60C/Welcome.htm</a></td>
     <td class="num">35</td>
   </tr>
   <tr class="r1">
     <td><a href="http://web.archive.org/web/20100526082612/http://www.buckeyeranch.org/site/c.glKSLeMXIsG/b.1043121/k.BCC0/Home.htm">http://www.buckeyeranch.org/site/c.glKSLeMXIsG/b.1043121/k.BCC0/Home.htm</a></td>
     <td class="num">35</td>
   </tr>
   <tr class="r2">
     <td><a href="http://www.ucmerced.edu/">http://www.ucmerced.edu/</a></td>
     <td class="num">35</td>
   </tr>
   <tr class="r1">
     <td><a href="http://web.archive.org/web/20080611035149/http://www.girlscouts.ak.org/site/c.hsJSK0PDJpH/b.1806483/k.BE48/Home.htm">http://www.girlscouts.ak.org/site/c.hsJSK0PDJpH/b.1806483/k.BE48/Home.htm</a></td>
     <td class="num">35</td>
   </tr>
   <tr class="r2">
     <td><a href="http://kaltenkirchen.dlrg.de">http://kaltenkirchen.dlrg.de</a></td>
     <td class="num">35</td>
</tr>
</table>

<h2 id="conclusion">Summing up ...</h2>
<p>Parnas&#39; study presented an interesting statistic:</p> 

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><div>&quot;In 
   October 2001, the W3C validator validated approximately 80,000 documents per day&quot;</div></blockquote>
   
<p>Olivier Th&#xE9;reaux, who currently works on development of the W3C validator, provided an updated 
   usage statistic in February 2008 of <strong>~700-800,000 URLs per day</strong>. This is a ten-fold increase. The 
   awareness regarding the <strong>process</strong> of validating documents definitely seems to be increasing over time, 
   as this sharp increase in usage of the validator indicates. The <strong>perceived importance</strong> of having documents 
   pass validation though, needs to improve. Yes, the pass-rate in the general Web population has also increased by a 
   respectable rate&#8212;0.71% to 4.13% in &quot;just&quot; six years. It also has increased similarly for the W3C member companies
   in that time. However, in the case of the W3C members, they appear to regress in their validation pass state about as 
   often as they attain this goal. How can the Web-at-large strive to do better when these key companies do not seem 
   to be trying harder? As we have seen with the (non-)success of the validation icon badge, it is one thing to 
   say you support the standards&#8212;and validation as a means to that end&#8212;but it does not necessarily reflect reality.</p>

<p>If we relax our concentration on simply passing validation, we notice that support for other 
   parts of this process are improving nicely over time. At least one aspect of the validation process has made great 
   strides and definitely contributes to a perceived importance for document correctness&#8212;Doctype usage. Doctypes 
   help concentrate author focus toward thinking about what standards their documents are trying to adhere to. This 
   can only help the validation cause over time. The Web may be crossing an important threshold in this regard. 
   The number of URLs in this study carrying a Doctype of some kind, has <strong>just</strong> barely crossed the 
   50% boundary. In the U.S. political system this is called a &quot;clear mandate&quot;&#8212;so, an avalanche of authors 
   validating their documents must not be far behind ... right? Joking aside, there is a clear and obvious connection 
   between claiming to adhere to a standard and then actually doing so. Increased outreach by the standards community
   to help developers draw the dotted line between the two points in this line can only help matters here.</p>

<h2 id="methodology">Appendix: Validation methodology</h2>
<p>Markup validation was the last main phase of the research completed. MAMA only attempted to validate 
   the URLs that were successfully analyzed in the other big analysis phase, so as to maximize the possibility for data 
   cross-referencing.</p>

<h3>The URL set</h3>
<p>MAMA employed several strategies to <a href="http://dev.opera.com/articles/view/mama-the-url-set/">refine and improve the analysis set 
   of URLs</a>. The full size of the DMoz URL set was ~4.5 million as of Nov. 2007, which was distilled down to ~3.5 million 
   URLs. Saarsoo&#39;s study chose to follow, as closely as possible, the URL-selection strategy that Parnas used in his study, 
   to ensure maximum compatibility between the two. MAMA&#39;s URL selection methods do not directly match these other studies. 
   Even with the set size reduction, this appears to be the largest URL sample of validation trends to date.</p>

<ul>
    <li>URL sets analyzed:
    <ul>
        <li>DMoz (May 2007 initial snapshot, added diff Nov. 2007)</li>
        <li><a href="w3cmemberlist.htm">W3C-member-company home pages</a> (429 listed URLs; 26 January 2008)</li>
        <li><a href="alexaglobaltop500list.htm">Alexa Global Top 500</a> (500 URLs; 28 January 2008)</li>
    </ul></li>
    <li>Basic filtering: Domain limiting of the randomized URL set to no more 30 URLs analyzed per domain</li>
    <li>Other filtering: Excluded non-HTTP/HTTPS protocols</li>
    <li>Skipped analysis of URLs that hit any failure conditions</li>
</ul>

<p>Various parts of the examined URL sets have definite bias. Alexa&#39;s top URL lists, for example, are the 
   result of usage stats from voluntary installation of a Windows-only MSIE toolbar. The DMoz set has definite top-page-itis&#8212;it 
   is skewed heavily toward the root/home pages of domains by as much as 80%!</p>

<h3>The W3C validator</h3>
<p>MAMA was only able to employ two local copies of the W3C validator on separate machines. One of these 
   machines was very &quot;old&quot; and weak by today&#39;s hardware standards, while the other one was more of a &quot;typical&quot; modern system. 
   The weak machine was simply not up to the task and could only handle about 1/10th of the load that the more powerful 
   machine easily handled. MAMA would feed a URL to the validator, parse the output result, then send it to the MAMA 
   database for storage, and move on to the next URL in the list to be analyzed ... rinse and repeat until complete.
   The big bottleneck was the validator. If MAMA had more validators available to use, the processing time would be 
   drastically cut from weeks to days.</p>

<ul>
    <li><strong>Validator machine 1:</strong> CPU: Intel 2.4GHz dual core P4; RAM: 1GB</li>
    <li><strong>Validator machine 2:</strong> CPU: AMD 800MHz; RAM: 768MB</li>
    <li><strong>Driver script:</strong> Perl (using LWP module for validator communication and DBI module for database connectivity)</li>
    <li><strong>Number of driver scripts:</strong> Usually about 10 at a time</li>
    <li><strong>Duration of validation:</strong> 8-29 January, 2008 (~ 3 weeks), usually 24/7</li>
    <li><strong>Processing rate:</strong> ~150,000 URLs per day</li>
    <li><strong>How many URLs validated:</strong> 3509170 URLs from 3011661 domains.</li>
    <li><strong>URL list:</strong> randomized</li>
</ul>

<p>The markup validator has a number of processing options, but a main goal for the validation process 
   was to keep the analysis simple and direct. Each candidate URL was passed to the validator using the following options.
   The SOAP output was chosen for its brevity and ease of results parsing.</p>

<ul>
    <li><strong>Charset:</strong> Detect automatically</li>
    <li><strong>Doctype:</strong> Detect automatically</li>
    <li><strong>Output:</strong>  SOAP</li>
</ul>

<p>MAMA stored a compacted version of the results of each URL validation. In retrospect, it would also 
   have been useful to store at least part of each error description (the unique arguments portion), but during this 
   first time through there was no way to know just how much storage all that data would need. So, MAMA opted to 
   store as little as possible. As it is, MAMA&#39;s abbreviated format stored over 25 million rows of data for the abbreviated 
   error messages alone. A goal for &quot;next time&quot; is to store all the unique error arguments in addition to what MAMA currently stores.</p>

<ul>
    <li>Did it validate? (Pass/Fail)</li>
    <li>Doctype FPI</li>
    <li>Character set</li>
    <li>Number of warnings</li>
    <li>Number of errors</li>
    <li>Number of failures</li>
    <li>Date the URL was validated</li>
    <li>An aggregated list of error types and the quantity of those errors for the URL</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-http-headers/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: HTTP Headers</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-basic-document-structure/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Basic document structure</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
