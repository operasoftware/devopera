Title: MAMA: The URL Set
----
Date: 2008-10-15 00:21:31
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-methodology/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Methodology</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-acknowledgments/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Acknowledgements</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#yahoorandom">MAMA&#39;s initial URL source&#8212;Yahoo!&#39;s random URL generators</a></li>
    <li><a href="#dmoz">DMoz (The Open Directory Project)</a></li>
    <li><a href="#w3calexa">Other URL sets used by MAMA: The W3C Member Company list and the Alexa 500</a></li>
    <li><a href="#dmozoverlap">DMoz overlap with the other URL sets</a></li>
    <li><a href="#domaincapping">Limiting domain over-representation in a URL set (domain-capping)</a></li>
    <li><a href="#surfaceversusdeep">Surface vs. Deep URLs and the MAMA URL set</a></li>
    <li><a href="#domainparkingproblem">The domain-parking problem</a></li>
    <li><a href="#protocols">Protocols: To use or not to use, that is the question</a></li>
    <li><a href="#errorconditions">Web server error conditions</a></li>
    <li><a href="#knowingoursetofurls">Getting to know our set of URLs</a></li>
</ol>

<h2 id="introduction">Introduction</h2>

<h3>How big is the Web?</h3>

<p>In <a href="http://en.wikipedia.org/wiki/Sisyphus">Sisyphean</a> fashion, we 
   will start this section by trying to calculate the size of the ever-evolving 
   Web. As a shortcut, we will consider another attempt at this estimate from 
   the <a href="http://www.boutell.com/newfaq/misc/sizeofweb.html">WWW FAQ</a>. 
   It does this by roughly estimating the number of Web pages on the Web, based 
   on some Yahoo! and Netcraft numbers from August 2005. The methodology used is 
   coarse, but it is an effective, general handwaving assessment. The FAQ comes 
   up with an &quot;average number of pages per Web site&quot; number (based on the Yahoo! 
   and Netcraft data) of 273.</p>

<p>Assuming the average number of pages per Web site has not changed appreciably 
   over time, the FAQ then extrapolates Feb 2007 numbers. Taking this number and 
   adding on Apr 2008 site-reachability numbers from Netcraft (165,719,150), the 
   total number of pages on the WWW becomes <strong>45.2 billion</strong> 
   (although Netcraft also lists an additional, unexplained quantity of &quot;active&quot; 
   sites that would lower the rough total to about 18 billion). By comparison, 
   MAMA ended up analyzing only 3.5 <strong>million</strong> URLs&#8212;a grain 
   of sand on the beach, or a drop in the ocean, you could say.</p>

<p class="note"><strong>Note:</strong> Since I originally wrote this, 
   <a href="http://googleblog.blogspot.com/2008/07/we-knew-web-was-big.html">Google 
   released a blog entry</a> in July 2008 stating that their Web exploration 
   system had reached a milestone of exposing 1 trillion unique URLs.</p>

<h3>How to choose a URL set</h3>

<p>MAMA&#39;s analysis total is a mere fraction of even a single percent of such a 
   daunting total. It seems odd to say that 3.5 million of <strong>anything</strong> 
   is insignificant. So let us assume for a moment that it is not. We are just 
   not able to look at <strong>every</strong> Web page, so we must choose a 
   smaller group of URLs to look at and justify that this is representative of 
   the whole Web. One option is to choose a set of URLs selected at random. I 
   had some conversations with Rene Saarsoo (author of an excellent previous study 
   on <a href="http://triin.net/2006/06/12/Coding_practices_of_web_pages">coding 
   practices</a>), and he brought up many excellent points about the structure of 
   the Web and choices in URL sets&#8212;some of which I have tried to paraphrase 
   here. He definitely hit the nail on the head about random URL samples when he said:</p>

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><p>&quot;We 
   can raise different problems that the truly random sample has, but it&#39;s hard to come up 
   with some other methodology that wouldn&#39;t be even more flawed.&quot;</p></blockquote>

<p>MAMA&#39;s URL set actually started life as an attempt at a random grouping, but it 
   has evolved into its current iteration to be decidedly non-random. How then do 
   we justify that any non-random group of URLs is sufficiently <em>random enough</em> 
   and/or representative of the larger Web? Can we just settle it by saying <q>it 
   looks like the Web because the sample is big&#8212;<em>JUST LIKE THE WEB</em></q>?</p>

<p>If we could look at the <strong>entire</strong> Web, the discussion about 
   establishing the legitimacy of the URL set would be moot, surely? No, even 
   that idea is a fallacy. If one could somehow look at all URLs in the 
   publicly-accessible Web, it still doesn&#39;t include any URLs from the so-called 
   <em>private Web</em> of intranets and other private URLs hidden behind 
   passwords, forms, and other barriers to open access. These URLs cannot be 
   lightly dismissed either. Added together, the overall URL space becomes many 
   times bigger than our previously-stated WWW FAQ estimate. This hidden <em>Dark 
   Matter of the Web</em> may also look very different to the public Web that 
   MAMA samples data from, so there is no guarantee that these pages we can view 
   are truly representative of what <strong>all</strong> pages look like. We will 
   next take an in-depth look in this section at the non-random URL set that MAMA 
   ended up using and examine the strategies, advantages and shortcomings inherent 
   and employed where possible. We will put the URLs through the wringer to examine 
   the usefulness of our set in representing the larger Web.</p>

<h2 id="yahoorandom">MAMA&#39;s initial URL source&#8212;Yahoo!&#39;s random URL generators</h2>

<p>In the early days of MAMA, a different source for URLs was used. Another tool 
   on which the author was working polled the <abbr title="Random Yahoo! Link">RYL</abbr> 
   service as part of its process to browse URLs automatically. That tool would 
   log the URLs that it used, so they could be referred to later to reproduce any 
   problems encountered. The <a href="http://random.yahoo.com/fast/ryl">US RYL 
   service</a> returned URLs from all over the world, whereas the Japanese RYL service (URL no longer active) returned Japanese-specific URLs that were useful when testing Asian language issues.</p>

<p>Over time, this automated browsing tool amassed a rather large number of logs. 
   When MAMA was being developed, it was a simple task to write a script to comb 
   these logs and create a unique list of URLs that could be used to test the 
   nascent MAMA system. This list, consisting of ~750,000 URLs, became the core 
   set of URLs used for MAMA analysis. The size of the list was manageable enough 
   to crawl fully in just a few days of straight processing, and it represented a 
   sizeable chunk of Web, useful for finding URLs using specific technologies for 
   which MAMA searched. Given MAMA&#39;s resources and database query speed at the 
   time, this was really about the most it could handle.</p>

<p class="note">Note: The RYL links are only listed for posterity&#8212;sadly, 
   the Japanese generator has been defunct for several years, and 
   <a href="http://random.yahoo.com/fast/ryl">Yahoo!&#39;s &quot;regular&quot; Random Link 
   generator</a> has been up and down over the years. Perhaps Yahoo! will someday 
   choose to bring this useful tool back for good, but, for now, one can only be 
   referred to it in the past-tense. Nevertheless, it served its purpose well for 
   MAMA.</p>

<p>MAMA used this URL set repeatedly and continues to do so, but the efficacy of 
   it is waning over time.  The list of Yahoo! random URLs was a one-time, static 
   snapshot, gathered between 2002-2004. Many factors, including link-rot and 
   domain expiration, have reduced the usable URL space to less than 500,000 in 
   the latest analysis. I discuss the Yahoo! URL set here only to note the 
   evolution of MAMA&#39;s processes&#8212;URLs from this set are not included in this 
   research unless they are also present in one of the URL sources that MAMA 
   <strong>did</strong> use (DMoz, Alexa or W3C companies).</p>

<h2 id="dmoz">DMoz (The Open Directory Project)</h2>

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><p>&quot;More 
   input. MORE INPUT!&quot;<br /><span style="font-size:small;"> --Johnny 5, Short Circuit</span></p></blockquote>
    
<p>The RYL tool worked fine in its time and was a great progenitor to this present 
   research. However, MAMA was ready to cover a wider URL space and needed a new 
   source for URLs&#8212;where to get a sufficiently large set of URLs for MAMA to use?</p>

<p>The two feasible options were:</p>
    <ol>
        <li>To acquire a URL set</li>
        <li>To return to the Web-crawler idea</li>
    </ol>
    
<p>Writing a Web spider was still not that appealing at the time, because all of 
   MAMA&#39;s planned development time was going to be devoted to the analysis tool 
   for the foreseeable future. Acquiring a URL set had its own issues; companies 
   that track or mine URLs in some manner (search engines such as Google or Yahoo!, 
   or trend-tracking services such as Alexa) generally consider their URL databases 
   to be either direct or indirect intellectual property. These companies protect 
   their intellectual property either by providing limited access to their URL set, 
   or charging for access. For example, if you search for <span class="string">&quot;boat&quot;</span> 
   on google.com, the 
   results (at the time of writing) proudly say that there are 225 <strong>million</strong> 
   search results&#8212;but you can only access the first 1,000 of those results. 
   Unless you build your own Web crawler&#8212;the infrastructure for which can be 
   quite an undertaking in itself&#8212;where can you get URLs of the necessary 
   diversity and quantity to make an &quot;analysis of the Web&quot; interesting?</p>

<h3>DMoz: Just what the doctor ordered</h3>

<p>I discovered the publicly-available <a href="http://www.dmoz.org/">Open Directory 
   Project</a> (aka <abbr title="Directory Mozilla">DMoz</abbr>) list of URLs in 
   2004, between the first and second generations of MAMA development. I knew this 
   would be MAMA&#39;s next eventual analysis goal, even though MAMA did not have the 
   resources to analyze a set of that size at the time. DMoz had many advantages 
   in its favor, including diversity, human selection, low repetition, and full 
   categorization! It was also freely usable by anyone, so the results could be 
   more openly verified. With ~5 million URLs, the DMoz set was about ten times 
   MAMA&#39;s then-current sample size, so it seemed to be an ideal next step. 
   Reinforcing the decision was the later discovery that Dagfinn Parnas had used 
   DMoz in his university thesis research involving markup validation in 2001, 
   and Rene Saarsoo had also used it in his more comprehensive university thesis 
   research on Web page coding practices. MAMA would be treading on familiar ground.</p>

<h3>About the DMoz URL set</h3>

<p>DMoz is a great project that can best be summed up in its own words:</p>

<blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><p>&quot;The 
   Open Directory Project is the largest, most comprehensive 
   human-edited directory of the Web. It is constructed and maintained by a vast, 
   global community of volunteer editors...The Open Directory powers the core 
   directory services for the Web&#39;s largest and most popular search engines and 
   portals, including Netscape Search, AOL Search, Google, Lycos, HotBot, DirectHit, 
   and <a href="http://www.dmoz.org/Computers/Internet/Searching/Directories/Open_Directory_Project/Sites_Using_ODP_Data/">hundreds 
   of others</a>.&quot;</p></blockquote> 

<p>As of 24 March 2008, DMoz harnessed, <q>4,599,644 sites&#8212;79,311 editors&#8212;over 
   590,000 categories</q>, but these numbers can fluctuate fairly wildly (on 27 
   January, 2008 it had 4,830,584 sites and 75,151 editors). Any analysis of DMoz 
   must take into account that DMoz grows and changes over time as editors add, 
   freshen, or delete URLs from its roster. URLs can grow stale or obsolete through 
   removal, and domains can and do die on a distressingly regular basis. The 
   aggregation source of these URLs remains the same, but the set itself is an 
   evolving, dynamic entity.</p>

<p>Dmoz has a liberal <a href="http://www.dmoz.org/license.html">Free Use License</a> 
   and the entire <a href="http://rdf.dmoz.org/">URL set is available for easy 
   download</a>. Beware, however&#8212;the ~200MB gzipped RDF data file expands 
   to over 2GB of URLs and metadata! To pull the URLs out of the DMoz list, it 
   was a fairly trivial matter of separating out the content of any and all 
   <code class="elem">&lt;link r:resource &gt;</code> attribute values from the RDF data file 
   with a small Perl script. The initial DMoz snapshot for MAMA was taken in May 
   2007 and was used throughout the summer and into the fall during initial 
   testing. After the big full analysis took place, a new DMoz snapshot was 
   downloaded in late November 2007. Any new DMoz URLs not previously in MAMA 
   to that point were then added, which makes our final DMoz URL analysis set 
   effectively a superset of the May and November 2007 snapshots. This resulting 
   <strong>LONG</strong> list of URLs became the new basis for MAMA&#39;s analysis, 
   but a lot of work needed to be done to it before it was entirely usable for 
   our needs. We will discuss the ways that this URL set needed to be distilled 
   before examination could begin as well as some post processing that was also 
   necessary.</p>

<h2 id="w3calexa">Other URL sets used by MAMA: The W3C Member Company list and the Alexa 500</h2> 

<h3>The W3C-member companies</h3>

<p>The W3C is the organization that creates the CSS and markup standards and the 
   markup validator used in this study. It is instructive to look at how URLs 
   from these companies compare with URLs that are not as closely connected to 
   the standards process. One would expect that the member company URLs 
   [<a href="w3cmemberlist.htm">January 2008 snapshot list</a>, 
    <a href="http://www.w3.org/Consortium/Member/List">latest live version</a>] 
   would adhere to the standards a little more closely than the general 
   population&#8212;if for no other reason than they have an active stake in 
   promoting them. Other studies have also looked at the W3C-member-company 
   URLs to measure various standards compliance factors, so it was a natural 
   fit for MAMA to include it as well.</p>
 
<h3>The Alexa Global Top 500 list</h3>
    
<p><a href="http://www.alexa.com/">Alexa</a> is a service from Amazon. It utilizes 
   Web crawling and user-installed browser toolbars to track the popularity of sites 
   among the users of those toolbars. Alexa maintains, among many other useful 
   measurements, a global &quot;Top 500&quot; [<a href="alexaglobaltop500list.htm">January 
   2008 snapshot list</a>, <a href="http://www.alexa.com/site/ds/top_sites?ts_mode=global&amp;lang=none">latest 
   live version</a>]. The Alexa list was chosen primarily because the size of the 
   list was similar in size to the W3C member company list&#8212;so even though 
   MAMA might be comparing apples to oranges, at least it compared a fairly equal 
   number of apples and oranges. The W3C company list skews toward academic and 
   &quot;big money&quot; commercial computer sites, whereas the Alexa list is representative 
   of what people actually use/experience on the Web on a day-to-day basis.</p>

<p>While few could argue that Alexa&#39;s &quot;Top 500&quot; list is relevant and popular, 
   it has some definite biases:</p>

    <ul>
        <li>It is prejudiced toward big, popular sites with many country-specific 
            variants, such as Google, Yahoo!, and eBay. This ends up reducing the 
            breadth of the list. Google is the most extreme example of this, with 
            63 of the 487 URLs in the analyzed set being various regional Google sites.</li>
        <li>It includes the top pages of domain aggregators with varied user 
            content, such as LiveJournal, Facebook, and fc2.com. These top pages 
            are not representative of the wide variety of the user-created content 
            they contain.</li>
        <li>The list consists entirely of top-level, entrance, or <em>surface</em> 
            pages of a site. There is no intentional <em>deep</em> URL representation.</li>
    </ul>
   
<h2 id="dmozoverlap">DMoz overlap with the other URL sets</h2>

<p>DMoz simply does not cover all URLs in the world&#8212;as a human-<strong>filtered</strong> 
   system it cannot do so. Nor does it even include all URLs that some of MAMA&#39;s 
   other, much smaller sources consider important. Despite this, DMoz does overlap 
   well with all the other sets MAMA has. The only facet of these lists that might 
   generate any caution is that roughly half of the Alexa 500 set is 
   <strong>NOT</strong> included in DMoz. Remember that these Alexa URLs are all 
   considered to be &quot;very important&quot; by its own measure. However, from a quick 
   perusal, one notices that many of the URLs from the Alexa list that are missing 
   from DMoz fall into a few broad and possibly questionable categories that DMoz 
   might avoid&#8212;namely, pornography, file sharing, and warez. That does not 
   mean that the average user shies away from them though.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> URL set overlap with DMoz</caption>
    <tr>
      <th>URL Set</th>
      <th>Total Set Size</th>
      <th>Shared With DMoz</th>
      <th>Percentage</th>
    </tr>
    <tr class="r1">
      <td>Yahoo! Random initial set</td>
      <td class="num">462,970</td>
      <td class="num">171,248</td>
      <td class="num">36.99%</td>
    </tr>
    <tr class="r2">
      <td>Alexa Global Top 500</td>
      <td class="num">487</td>
      <td class="num">261</td>
      <td class="num">53.59%</td>
    </tr>
    <tr class="r1">
      <td>W3C Member Companies</td>
      <td class="num">413</td>
      <td class="num">227</td>
      <td class="num">54.96%</td>
    </tr>
</table>
   

<h2 id="domaincapping">Limiting domain over-representation in a URL set (domain-capping)</h2>

<h3>Not a new problem&#8212;MAMA&#39;s &quot;Wikipedia Effect&quot; becomes the &quot;CNN Effect&quot;</h3>

<p>In the early days of MAMA&#39;s research, a problem surfaced that skewed some of 
   the statistics returned. Searching for a specific technology via MAMA might 
   return, say, 1,500 URLs matching the criteria, but in some instances over 
   1,000 of them might be from the same domain. At the time, I dubbed this the 
   &quot;Wikipedia Effect&quot; because it was often the most frequent example of this problem. 
   Wikipedia had several thousand URLs present in the URL set at that point and it 
   used many exotic features that MAMA looked for.</p>

<p>After doing a first examination of DMoz, I found that my &quot;Wikipedia Effect&quot; could 
   better be called the &quot;CNN Effect&quot;&#8212;the initial DMoz set from May 2007 
   contained 223,616 URLs from cnn.com domains out of 4,464,396 total URLs&#8212;over 
   5 percent of all its URLs! CNN was (by far) the worst offender of this issue. The 
   solution to this was to keep track of the domains used in MAMA and how many URLs 
   are analyzed from each domain. When a domain reached a specific number of URLs 
   analyzed, MAMA would no longer analyze any more from that domain. Various domain 
   caps were tried, but I settled for 30 for this analysis&#8212;it seems to strike 
   the right balance between content diversity and over-representation. In MAMA&#39;s 
   URL set, 682,058 URLs were rejected from analysis because their domains had 
   exceeded the domain cap. Some 4,413 domains had URLs with a full complement of 
   30 URLs (see also the 
   <a href="domaincounthistogram.htm">full frequency table</a>).</p>

<h3>Issues noticed with domain-capping</h3>

<p>There are a number of issues that could arise when contemplating the use of 
   domain-capping in URL analysis. MAMA&#39;s attempt was definitely first-generation, 
   but it is a much-needed step in the right direction. Using a domain-capping 
   system seems to be a new feature in this type of study&#8212;to my knowledge, 
   this approach was not taken before (by Parnas or Saarsoo). The method used is 
   not foolproof, and more could have been done with this. MAMA only did a simple, 
   exact-string comparison to judge whether a domain was the same. This method 
   does not allow for the common practice of having similar sub-domains on large 
   Web sites. Looking again at CNN&#39;s site, although the specific domain 
   <a href="http://www.cnn.com">cnn.com</a> has only 30 URLs in MAMA, there are 
   35 CNN sub-domains in all represented in MAMA (such as 
   <a href="http://edition.cnn.com">edition.cnn.com</a>, etc.). 
   So, instead of the initial goal to have no more than 30 URLs from CNN, we now 
   have 346! Future studies attempting to limit per-domain representation should 
   try to take sub-domains into account.</p>

<p>Setting a conservative domain cap can be helpful if you are not sure of what 
   your URL population looks like yet. If bias or skew is later exposed in the 
   distribution of the URL population, the domain cap can be readjusted to help 
   remedy the situation. A final, fundamental question must be asked that challenges 
   the basic assumption about the need for domain capping:<q>Is having too many URLs 
   from the same domain inherently a <strong>BAD</strong> thing?</q> That will not 
   necessarily always be the case. With MAMA, we wanted to stress breadth rather 
   than depth because the URL set is already quite breadth heavy (almost 94% of 
   the domains have only 1 URL representative).</p>

<p>Another incorrect assumption when adopting domain capping is that authoring 
   patterns in URLs from the same domain will follow repeating patterns&#8212;this 
   does not always hold true either. For some very large sites, the opposite is 
   true, such as community hosting sites with user-generated content such as 
   Earthlink.com or Geocities.com. In such cases, foreknowledge of important 
   prominent hosting sites could lead one to use the equivalent of a whitelist 
   to circumvent domain-capping mechanisms.</p>

<h2 id="surfaceversusdeep">Surface vs. Deep URLs and the MAMA URL set</h2>

<p>We can divide HTTP URLs into two types:<em>Surface</em> and <em>Deep</em>. 
   Surface URLs are the top-level/home page of a given domain and take the 
   following form: <code class="uri"><em>[protocol]://[domain]</em></code> (with an optional 
   trailing slash). An additional type of URL would also fall into this 
   category&#8212;a <em>pseudo-Surface</em> URL if you will, where the bare 
   Surface format also carries a default system filename, which is a moral 
   equivalent to the bare Surface version, such as <code class="uri"><em>http://www.example.com/index.html</em></code>. 
   All other HTTP URLs fall into the flip-side category where there are extra 
   query arguments, path and/or other file information at the end of the 
   <em>Surface</em> URL form. The rough numbers from the WWW FAQ mentioned 
   before gave us 275 as a value for the average number of pages per site. 
   It is obvious that Deep URLs will almost always outnumber Surface URLs by 
   a very large margin (a domain will only have one Surface URL). If we picked 
   a page truly at random from a given domain, that page would almost never be 
   a Surface URL.</p>

<p>Hickson&#39;s research at Google is heavily skewed toward Deep URLs, to be more 
   in keeping with the nature of the Web itself. Whatever other problems that 
   URL set might or might not have, at least it can be said that it is fairly 
   representative of the real world skew of <em>Surface</em> vs. <em>Deep</em> 
   URLs. In choosing the DMoz URL set as the main candidate for analysis, both 
   Saarsoo&#39;s and MAMA&#39;s research follow a different path. DMoz is <strong>VERY</strong> 
   heavily biased towards Surface URLs&#8212;approximately 75% of the domains 
   in MAMA have only Surface URLs represented! This is a direct result of the 
   nature of the URL set itself and the set&#39;s human selection factor.</p>

<p>Surface URLs usually serve as the locus and focal point of the entire site, 
   where access to the rest of the site is most easily achieved. They usually 
   have more traffic than any of the site&#39;s individual Deep URLs, so of any 
   single page to look at on a site, the Surface URL will often be the most 
   interesting. The Surface page is most likely to have the most development 
   scrutiny and effort; the reasonable side-effect of this being that the 
   quality of these pages will likely be higher than many of the Deep URLs on 
   the same site. On the other hand, many sites use templates to maintain 
   uniform design, so the Surface URLs can often bear a great resemblance to 
   other Deep URLs. Both of these reasons are some good arguments towards 
   excusing the heavy weighting of Surface URLs in the DMoz set.</p>

<p>We are interested in an <em>average</em> user browsing experience, but such 
   behavior will vary from site to site. How can we justify that the URLs we are 
   examining represent the average user&#39;s browsing experience? We can start this 
   process by inferring that a typical user will likely visit more than one page 
   on a site and will also likely visit the &quot;Home&quot;/Surface URL of the site. To 
   take steps to balance the DMoz URL set in the future, one might choose to 
   examine each Surface URL looking for all the Deep URL hyperlinks contained 
   within. One would then add a random Deep URL from these candidates to the URL 
   set to be analyzed. This should at least bring the Surface to Deep URL ratio 
   roughly into balance&#8212;a step in the right direction. Using such a balance, 
   one could even classify URLs by their Surface/Deep nature and do comparisons 
   between them to see how the general composition of each type of page fares.</p>

<div class="note">
<p><strong>Note:</strong> The equivalent of the following Perl regular expression 
   was used on MAMA&#39;s URL set to detect pseudo-Surface URLs:</p>

<p><code class="regexp">/^https?:\/\/[domain]\/((index|start|default)\.(asp|aspx|htm|html|xml|xhtm|xhtml|cgi|php|php2|jsp))$/i</code></p>
</div>

<p>the following table shows the number of URLs MAMA looked at that were surface URLs, versus the number that were deep URLs.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> Surface/Deep URL statistics for domains in MAMA</caption>
  <tr>
    <th>Description of domain condition</th>
    <th>Quantity</th>
  </tr> 
  <tr class="r1">
    <td>Domain has a Surface URL</td>
    <td>2,018,936</td>
  </tr>
  <tr class="r2">
    <td>Domain only has Surface URLs</td>
    <td>1,969,092</td>
  </tr>
  <tr class="r1">
    <td>Domain has a pseudo-Surface &#39;Default filename&#39; URL</td>
    <td>352,963</td>
  </tr>
  <tr class="r2">
    <td>Domain only has pseudo-Surface &#39;Default filename&#39; URLs</td>
    <td>342,535</td>
  </tr>
  <tr class="r1">
    <td>Domain has Surface or pseudo-Surface URL but not Deep</td>
    <td>2,312,533</td>
  </tr>
  <tr class="r2">
    <td>Domain has a Deep URL</td>
    <td>1,119,404</td>
  </tr>
  <tr class="r1">
    <td>Domain only has Deep URLs</td>
    <td>699,135</td>
  </tr>
</table>

<h2 id="domainparkingproblem">The domain-parking problem</h2>

<p>One issue to watch when dealing with a URL set of this size is URL atrophy. 
   In addition to URLs going dead, the domain names under which they operate 
   can come up for renewal and switch ownership. The too-common practice of 
   &quot;domain parking&quot; occurs when an entity buys a domain name for the express 
   purpose of trawling for click-throughs from users looking for something 
   relevant to their original needs that brought them to that page. There are 
   a number of very large-scale domain-parking companies that do this and it 
   is <strong>BIG</strong> business, with several sites like 
   <a href="http://www.dailydomainer.com/">www.dailydomainer.com</a> and 
   <a href="http://parkquick.com/">parkquick.com</a> devoted entirely to the 
   topic. Domain parking becomes a problem for a research project like this 
   because the URL set becomes a potential random minefield of unwitting links 
   to the same exact type of templated markup. In MAMA&#39;s case, a redirect to a 
   new domain should eventually hit the domain cap and limit the &quot;damage&quot; of 
   over-representation. Problem solved?</p> 

<p>Not quite. The whole domain-parking issue came to light after noticing a 
   common trend in the URLs that MAMA was processing. A URL that might have 
   originally looked something like this:</p>

<p><code class="uri">http://www.ronaldraygun.com/</code></p>

<p>was redirected to a domain-parking site with a URL like this:</p>

<p><code class="uri">http://www.ronaldraygun.com/frame.aspx?u=http%3a%2f%2flanding.domainsponsor.com%3fa_id%3d1637%26domainname%3dronaldraygun.com%26adultfilter%3doff%26popunder%3doff&amp;r=1</code></p>

<p>This particular domain parker&#39;s way of using the original domain&#39;s name as 
   a starting point easily circumvented MAMA&#39;s domain capping mechanism. Other 
   domain parkers may utilize different mechanisms that complicate strategies 
   to detect legitimate URLs. Even though all 12,514 URLs matching 
   domainsponsor.com&#39;s URL pattern have been removed from consideration in this 
   research, this is a seemingly never-ending problem. One factor that can help 
   weed out domain parkers is that big parking companies will probably be 
   well-represented in ANY sizeable URL set, so odd authoring practices will 
   tend to stand out. For example, another domain parker (ActiveAudience) was 
   recently detected this way via unusual values for the <code class="elem">A</code> element&#39;s 
   <code class="att">Name</code> attribute. Sadly, this pattern was discovered too late and 
   the URLs were not excluded from MAMA.</p>

<div class="note">
<h4>Some well-known large scale domain-parking companies (there are many more):</h4>
    <ul>
        <li><a href="http://www.activeaudience.com/">ActiveAudience</a></li>
        <li><a href="http://buydomains.com/">Buydomains</a></li>
        <li><a href="http://www.cashparking.com/">Cash Parking</a></li>
        <li><a href="http://domainsponsor.com/">Domain Sponsor</a></li>
        <li><a href="http://fabulous.com/">Fabulous</a></li>
        <li><a href="http://goldkey.com/">GoldKey</a></li>
        <li><a href="http://namedrive.com/">Namedrive</a></li>
        <li><a href="http://parked.com/">Parked</a></li>
        <li><a href="http://parkingdots.com/">Parking Dots</a></li>
        <li><a href="http://sedo.com/">Sedo</a></li>
        <li><a href="http://trafficz.com/">TrafficZ</a></li>
    </ul>
</div>

<p>Ian Hickson&#39;s Google research analyzed only URLs that ranked high in Google&#39;s 
   PageRank technology. One hopes that Google&#39;s PageRank ranking system would 
   rate domain-parking URLs much lower and the research would avoid the issue 
   altogether. If the research being done does not have the benefit and backing 
   of a major search-engine player though, vetting of URLs needs to be done from 
   scratch. Future studies should be aware of the domain parking issue and take
   as many steps as possible to detect or eliminate domain parkers from their 
   URL rosters. Otherwise, they end up skewing the results.</p>

<h2 id="protocols">Protocols: To use or not to use, that is the question</h2>

<p>DMoz contains some types of URLs that MAMA did not want to concern itself 
   with. These non-markup URLs were removed from the list of URLs to be analyzed. 
   MAMA only looked at HTTP or HTTPS protocol documents. We&#39;ll look more at the 
   breakdown of HTTP protocol versions and other criteria detected by MAMA in a 
   later section to be published in the future.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 9-1:</strong> DMoz protocols not analyzed by MAMA</caption>
    <tr>
      <th>Protocol</th>
      <th>Quantity</th>
    </tr> 
    <tr class="r1">
      <td>news://</td>
      <td>14,468</td>
    </tr>
    <tr class="r2">
      <td>ftp://</td>
      <td>746</td>
    </tr>
    <tr class="r1">
      <td>irc://</td>
      <td>223</td>
    </tr>
    <tr class="r2">
      <td>mms://</td>
      <td>120</td>
    </tr>
    <tr class="r1">
      <td>sherlock://</td>
      <td>42</td>
    </tr>
</table>

<h2 id="errorconditions">Web-server error conditions</h2>

<p>Some Web servers are mis-configured to return a custom error page when a &quot;404 
   Not Found&quot; situation is encountered. Because this custom error page actually 
   exists on the server, the HTTP status code returned is sometimes &quot;200 OK&quot; 
   instead of the proper &quot;404 Not Found&quot; code. The resulting pages should not be 
   analyzed, but how can you tell the difference? This is a problem in the typical 
   main-URL case, but becomes even more prominent when you consider that instead 
   of receiving an external CSS file, MAMA could instead get, say, an error page 
   filled with markup and embedded JavaScript. MAMA took several precautions 
   against the latter case of mis-served content violating the MIME type of 
   Web-page dependencies, creating a weighted scoring system to establish the 
   validity of an object.</p>

<p>An error page thus created is not something we want to count towards MAMA&#39;s 
   statistics. There are certain repeating patterns that many URLs of this 
   response type have&#8212;primarily the keywords <span class="string">&quot;error&quot;</span> 
   and <span class="string">&quot;404&quot;</span>. MAMA was 
   able to leverage this to filter them out from consideration. This keyword 
   detection approach works, but it is not without its problems. False positives 
   are easy to find; for example, it is still not very long since terrorism 
   became a popular topic of debate and discussion. Eliminating URLs with the 
   <span class="string">&quot;error&quot;</span> substring eliminates all URLs that discuss 
   <span class="string">&quot;terror&quot;</span> and <span class="string">&quot;terrorism&quot;</span>. 
   So, there is more work to be done.</p>

<p>I never came up with a foolproof method for this, so I settled for a <em>good 
   enough</em> approach. I eliminated all URLs from consideration that had the 
   substrings <span class="string">&quot;404&quot;</span> and <span class="string">&quot;error&quot;</span> 
   (but not <span class="string">&quot;terror&quot;</span>). This eliminated 4,388 URLs 
   from our final analysis set. It is not a perfect solution, but doing a manual 
   scan of the excised URLs showed that less than 100 of these URLs are not error 
   pages. Restoring these non-error, <em>error-like</em> URLs is not really that 
   interesting considering the overall size of our URL set&#8212;100 pages out 
   of several million seems an acceptable loss.</p>

<h2 id="knowingoursetofurls">Getting to know our set of URLs</h2>

<p>Now that we have deflated our initial exuberance over having a nicely-sized 
   URL analysis set, let us take a look at some hard numbers about MAMA&#39;s URLs. 
   There are 3,509,180 URLs in 3,011,668 domains, from 
   <a href="countryhistogram.htm">217 identified countries</a>. 
   4,994 of those URLs use the HTTPS protocol. We will discuss more of the details 
   of the set in other sections appropriate to their topics.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 11-1:</strong> Facts about the MAMA URL analysis set</caption>
    <tr>
      <th>Statistic</th>
      <th>Quantity</th>
    </tr> 
    <tr class="r1">
      <td>Total analyzed URLs</td>
      <td>3,509,180</td>
    </tr>
    <tr class="r2">
      <td>Total analyzed domains</td>
      <td>3,011,668</td>
    </tr>
    <tr class="r1">
      <td>Domains having only 1 URL</td>
      <td>2,826,740</td>
    </tr>
    <tr class="r2">
      <td>Total countries</td>
      <td>217</td>
    </tr>
    <tr class="r1">
      <td>HTTP URLs</td>
      <td>3,504,186</td>
    </tr>
    <tr class="r2">
      <td>HTTPS URLs</td>
      <td>4,994</td>
    </tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-methodology/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Methodology</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-acknowledgments/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Acknowledgements</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
