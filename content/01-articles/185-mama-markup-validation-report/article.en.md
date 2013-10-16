Title: MAMA: Markup validation report
----
Date: 2008-10-15 00:21:46
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
<p>Web standards are good for the Web! Most of the readers of this site will 
   understand why this statement holds true&#8212;ease of maintenance, cross platform 
   compatibility, access by people with disabilities, the list goes on!</p>

<p>But how does the reality of the Web hold up to these ideals? Surely with so many good reasons 
   to code using open Web standards, the majority of sites should validate? Not so&#8212;Opera&#39;s 
   <a href="http://dev.opera.com/articles/view/mama/">MAMA project</a> has gathered a lot of quite shocking statistics 
   showing that very few of the sites surveyed actually exhibit markup that validates.</p>

<p>This article will discuss validation and MAMA&#39;s findings, including what markup validation is, 
   whether people bother to validate their markup, how many sites actually do validate, and possible 
   reasons why the rate of markup validation is still so low.</p>

<p class="note">Note that this article is a heavily condensed version of the 
   <a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/">full MAMA markup validation study</a>, aimed at giving a 
   quick summary of its main points. For a much deeper treatment of the area of markup validation, 
   check out the full version.</p>

<h2>What is markup validation?</h2>
<p>The <a href="http://validator.w3.org/">W3C validator</a> is a tool that authors can use to 
   ensure that their markup conforms to a standard. This tool began life 
   <a href="http://validator.w3.org/whatsnew.html#t2008-08-08">over 10 years ago</a> as a Web 
   wrapper around an SGML parser, but it has expanded its reach over time to include validation 
   capability for documents of many flavors. The tool checks a page of markup against a set of 
   rules defined by the document&#39;s Doctype, and delivers either a cheerful passing grade,  
   or a failure message with a list of any warnings and errors that need to be addressed.</p>

<h2>Do people validate?</h2>
<p>Will we ever get everyone validating? That is a bit much to hope for. HTML&#39;s genesis as a 
   simple language that anyone and everyone could learn means that there will inevitably always be 
   those that don&#39;t know all (or most) of the rules. Many authors &quot;speak&quot; pidgin markup that 
   would make a learned HTML author&#39;s (or validator&#39;s) toes curl.</p>

<p>As part of MAMA&#39;s overall analysis process, it ran every URL in its database through the W3C&#39;s 
   markup validator. MAMA was able to validate 3,509,180 URLs in 3,011,661 domains, and 
   <strong>only 4.13%</strong> of the URL set passed validation (with 4.33% of the domains having at 
   least 1 URL that passed validation).</p>

<p>This is a decent increase over previous validation studies performed in the past:</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Validation pass rate studies</caption>
   <tr valign="bottom">
     <th>Study</th>
     <th>Date</th>
     <th>Passed Validation</th>
     <th>Total Validated</th>
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
     <td class="num">3,509,170</td>
     <td class="num">4.13%</td>
  </tr>
</table>

<h2>So how many pages validate in total, roughly?</h2>
<p>Using recent approximations for the size and reachability of the Web coupled 
   with the validation pass rates discovered by MAMA, rough numbers can be 
   estimated for the overall validation rates of the <strong>ENTIRE</strong> Web. 
   <a href="http://googleblog.blogspot.com/2008/07/we-knew-web-was-big.html">Google&#39;s 
   recent total URL estimate</a> of 1 trillion reachable Web pages would give us 
   <strong>41.3 billion</strong> URLs passing markup validation. That is a 
   <strong>LOT</strong> of Web pages. A different data point comes from 
   <a href="http://news.netcraft.com/archives/2008/08/29/august_2008_web_server_survey.html">Netcraft&#39;s 
   August 2008 assessment of reachable domains</a>: 176,748,506. Coupling that 
   with MAMA&#39;s per-domain validation metric would give us <strong>7.65 million 
   domains</strong> that have <em>at least 1 URL passing markup validation</em>.</p>

<h2>How often do authors validate?</h2>
<p>The W3C suggests that you display <a href="http://www.w3.org/QA/Tools/Icons">Validation 
   image badges</a> on pages that have passed validation. MAMA used a Perl regular expression 
   to detect the use of such validation badges utilizing the W3C naming scheme. This pattern 
   match was used against the SRC attributes of IMG elements of all URLs analyzed:</p>

<p class="note">Regexp:<br /><code class="regexp">/valid-((css|html|mathml|svg|xhtml|xml).*?)(-blue)?(\.png|\.gif|-v\.svg|-v\.eps)?$/i || 
   /(wcag1.*?)(\.png|\.gif|-v\.svg|-v\.eps)?$/i)</code></p>

<p>MAMA found that slightly less than half of pages using detectable validation icons actually 
   passed validation.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Validation pass rates of URLs with Validation icons</caption>
   <tr valign="bottom">
     <th>Type Of Badge<br />Identified</th>
     <th>Total</th>
     <th>Actually<br />Validated</th>
   </tr>
   <tr class="r1" valign="top">
     <td>xhtml</td>
     <td class="num">11,657</td>
     <td class="num">5,480</td>
   </tr>
   <tr class="r2" valign="top">
     <td>html</td>
     <td class="num">22,033</td>
     <td class="num">10,995</td>
   </tr>
</table>

<p>These badges appear to falsely convey the current validation state of a URL just as often as 
   they get it right, so use of these icons to report the <strong>CURRENT STATE</strong> of validating 
   pages should perhaps be discouraged. An evolving Web page is always a moving target, and such 
   icons can not be trusted to be up-to-date and true.</p>

<h2>Who validates?</h2>
<p>One set of URLs where you would expect especially high validation pass rates 
   is the W3C&#39;s member companies. This is indeed true (just over 20% of the 
   companies&#39; URL top pages pass validation), but 1 in 5 is still rather low 
   for companies linked to the organization that creates and advances the 
   markup standards.</p>

<p>Is it fair to expect such high numbers from the W3C member companies? Yes. 
   Is it realistic? Apparently not. Looking at historical validation pass rates 
   for these companies highlights the annoying fact that achieving a passing 
   markup validation does not in any way guarantee that the page will maintain 
   that state over time. Harkening back to the previous section on how <strong>often</strong>
   authors validate their documents, the answer seems to be &quot;not very often&quot;.</p>

<h3>Validation for CMS and editors</h3>
<p>Validation rates in MAMA&#39;s URLs were compared with the URLs that used the 
   <code class="elem">META</code> &quot;Generator&quot; syntax. This allowed for the identification 
   of text and Web page editors, as well as popular content management 
   systems (CMS). First, the good news. Most of the popular identified CMS 
   systems surpass the validation rates of the general URL population, with 
   the exception of Blogger. It had an exceptionally poor showing in MAMA&#39;s URL set.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom">Validation pass rates relating to CMS</caption>
    <tr valign="bottom"><th>CMS</th><th>Total URLs<br />In MAMA</th><th>Quantity<br />Passing<br />Validation</th><th>Percentage<br />Passing<br />Validation</th></tr>
    <tr class="r1"><td>Typo</td><td class="num">18,067</td><td class="num">2,301</td><td class="num">12.7%</td></tr>
    <tr class="r2"><td>WordPress</td><td class="num">16,594</td><td class="num">1,494</td><td class="num">9.0%</td></tr>
    <tr class="r1"><td>Joomla</td><td class="num">34,852</td><td class="num">2,248</td><td class="num">6.5%</td></tr>
    <tr class="r2"><td>Blogger</td><td class="num">9,907</td><td class="num">30</td><td class="num">0.3%</td></tr>
    </table>

<p>Now for the (mostly) bad news. The text and Web page editors that identified 
   themselves via the <code class="elem">META</code> element simply embarrassed themselves compared to 
   the general population&#39;s validation pass rate...except for a lone shining beacon.
   Apple&#39;s iWeb editor definitively won the day in this category. Approximately 
   82% of pages reporting this editor passed validation&#8212;an <strong>astounding</strong> 
   result considering the next-closest editor pass rate was Adobe Dreamweaver 
   with only <strong>3.4%</strong>! Aside from iWeb, all of the popular Web 
   page editors that MAMA discovered had lower validation pass rates than the 
   overall URL set.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom">Validation pass rates relating to editors</caption>
    <tr valign="bottom"><th>Editor</th><th>Total URLs<br />In MAMA</th><th>Quantity<br />Passing<br />Validation</th><th>Percentage<br />Passing<br />Validation</th></tr>
    <tr class="r1"><td>Apple iWeb</td><td class="num">2,504</td><td class="num">2,051</td><td class="num">81.9%</td></tr>
    <tr class="r2"><td>Adobe Dreamweaver</td><td class="num">5,954</td><td class="num">205</td><td class="num">3.4%</td></tr>
    <tr class="r1"><td>NetObjects Fusion</td><td class="num">26,355</td><td class="num">802</td><td class="num">3.0%</td></tr>
    <tr class="r2"><td>Adobe GoLive</td><td class="num">41,865</td><td class="num">1,086</td><td class="num">2.6%</td></tr>
    <tr class="r1"><td>IBM WebSphere</td><td class="num">32,218</td><td class="num">626</td><td class="num">1.9%</td></tr>
    <tr class="r2"><td>Microsoft MSHTML</td><td class="num">40,030</td><td class="num">518</td><td class="num">1.3%</td></tr>
    <tr class="r1"><td>Microsoft Visual Studio</td><td class="num">22,936</td><td class="num">272</td><td class="num">1.2%</td></tr>
    <tr class="r2"><td>Claris Home Page</td><td class="num">6,259</td><td class="num">48</td><td class="num">0.8%</td></tr>
    <tr class="r1"><td>Adobe PageMill</td><td class="num">15,148</td><td class="num">100</td><td class="num">0.7%</td></tr>
    <tr class="r2"><td>Microsoft FrontPage</td><td class="num">347,095</td><td class="num">1,923</td><td class="num">0.6%</td></tr>
    <tr class="r1"><td>Microsoft Word</td><td class="num">24,892</td><td class="num">154</td><td class="num">0.6%</td></tr>
    </table>

<h2>Some of the validation results in brief</h2>
<p>The validator goes far beyond a simple &quot;thumbs-up/down&quot; decision over whether 
   a document passes validation. When an error of any type is discovered, the 
   validator is very helpful in showing you just how many, and (more helpful) just 
   <strong>where</strong> those errors occurred.</p>

<p>The W3C&#39;s validator defines 27 separate types of warnings, and 446 types of errors.
   Some documents that MAMA validated contained errors numbering in the tens of 
   <strong>thousands</strong>. No one said passing validation is always easy.</p>

<p>Some tasty nuggets found from MAMA&#39;s validation of 3.5 million documents:</p>

<ul>
  <li>More URLs than ever are using Doctype statements. In MAMA&#39;s URL set the number has passed the 50% threshold (51.0%).</li>
  <li>Strict Doctype flavors pass validation at much higher rates (17.5%) than Transitional (8.4%) or Frameset (7.2%).</li>
  <li>XHTML Doctype flavors pass validation at much higher rates (13.4%) than HTML flavors (6.6%).</li>
  <li>The majority of pages specify a document&#39;s encoding, and do so via the <code class="elem">META</code> markup syntax (89.9%).</li>
  <li>The most popular detected encodings are <code class="val">iso-8859-1</code> (43.1%) and <code class="val">utf-8</code> (26.9%).</li>
  <li>The most frequent fatal validation error: characters are used that aren&#39;t allowed by the detected character set (8.6%).</li>
  <li>The most frequent validation errors encountered both deal with attributes: 
  <ul>
     <li><q class="string">There is no attribute <em>X</em></q> (64.2%)</li>
     <li><q class="string">Required attribute <em>X</em> not specified</q> (57.4%)</li>
   </ul>
   </li>
</ul>

<h2>Why are so few pages validating?</h2>

<p>There are a lot of reasons why most of the Web does not validate; consider the following cases:</p>

<ul>
    <li>Many sites are built upon CMSes that do not spit out standards-compliant 
        markup on the front end&#8212;it is nigh-on impossible to get these sites to validate.</li>
    <li>Many sites are put up on the Web by hobbyists, who do not care about Web 
        standards&#8212;they just want to get their &quot;look at my kittens&quot; site on the 
        Web by any means necessary.</li>
    <li>Many sites these days feature user-generated content (think of any blog and 
        social networking site); even if you make your blog validate, it can still 
        easily be invalidated by a site visitor submitting a comment featuring bad markup.</li>
    <li>A lot of developers don&#39;t care about validation&#8212;their site works for the 
        target audience they are aiming it at, and they get paid regardless of 
        standards compliance.</li>
    <li>And many more reasons!</li>
</ul>

<p>Chris Mills has written a 
   <a href="http://files.myopera.com/chrismills/blog/WebStandardsEducation.zip">presentation 
   on Web standards and education</a> (ZIP file download), which covers possible 
   reasons for non-validation in more detail.</p>

<h2>Summary</h2>

<p>The role of the validator has been likened to that of a &quot;spell-checker&quot; for 
   Web page structure. A validator alone will not make your page better...a page
   that passes validation can still look or behave terribly, and a page with 
   hundreds or even thousands of errors can still produce a reasonable user 
   experience in most browsers.</p>

<p>A validator simply catches errors. We all make mistakes, even the experts. 
   The worst mistakes are often the typos or unintentional gaffes; a validator can 
   make easy work of catching these. Authors should validate&#8212;it&#39;s an easy process. 
   This is not a conundrum; validate your code and do it often. </p>
