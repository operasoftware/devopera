Title: MAMA: Methodology
----
Date: 2008-10-15 00:21:04
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-what-has-come-before/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: What has come before</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-the-url-set/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: The URL set</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<div><strong>Index:</strong></div>
<ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#tinymachine">MAMA&#39;s tiny machine &quot;empire&quot;: hardware and software</a></li>
    <li><a href="#analysisprocessing">Analysis processing time (project duration)</a></li>
    <li><a href="#breakdownanalysisprocessing">Breakdown of MAMA&#39;s basic analysis processing time</a></li>
    <li><a href="#frequencytables">Frequency tables</a></li>
    <li><a href="#stockparsers">To use stock parsers or create it all from scratch, that is the question</a></li>
    <li><a href="#caveats">Caveats and disclaimers</a></li>
    <li><a href="#designchoices">Design choices</a></li>
</ol>

<h2 id="introduction">Introduction</h2>

<p>MAMA is written in Perl and stores its information in a MySQL database. The 
   internals of the system reflected its incremental development over a long 
   period of time. It began life as a series of counters and simple condition 
   checks and evolved over the years into a complex labyrinth of data structures. 
   The current codebase is fairly messy and in need of some TLC. New features 
   have been bolted on where useful or necessary. The MAMA system also has many 
   satellite Perl scripts to accomplish various tasks, including some of the 
   complex data analysis and correlation from the database.</p>

<h2 id="tinymachine">MAMA&#39;s tiny machine &quot;empire&quot;: hardware and software</h2>

<h3>The MAMA database machine</h3>

<p>The database where the analysis data is stored has undergone several iterations. 
   The initial version had an ugly monolithic table design and was extremely slow. 
   The current version has far more features and adaptability, and yet the query 
   performance has also been greatly improved. The MAMA database currently has 
   100 million total records in 22 tables and ~21GB of data representing the 
   analysis of just over 3.5 million URLs.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> MAMA Database Hardware/Software</caption>
<tr>
  <th>Component</th>
  <th>Details</th>
</tr>
<tr class="r1">
  <td>Hardware CPU</td>
  <td>Dual core Intel Pentium D/3.00GHz</td>
</tr>
<tr class="r2">
  <td>Hardware RAM</td>
  <td>2 Gigabytes</td>
</tr>
<tr class="r1">
  <td>OS</td>
  <td>Debian 4.0 (Etch)</td>
</tr>
<tr class="r2">
  <td>MySQL</td>
  <td>Ver. 5.0.32</td>
</tr>
</table>

<h3>MAMA&#39;s client analysis machines</h3>

<p>MAMA&#39;s main analysis script was distributed to other client machines to do 
   the URL fetching and deconstruction steps. The results of this were then 
   passed to the MAMA database machine. There were only about 4-8 client machines 
   available at any one time, most of which were older, underpowered machines by 
   today&#39;s hardware standards. All clients were running Linux distribution flavors. 
   By comparison to the hardware in Saarsoo&#39;s study (18 machines), MAMA&#39;s usages 
   were downright modest.</p>

<h3>MAMA&#39;s validator machines</h3>

<p>MAMA was only able to employ two local copies of the W3C validator on separate 
   machines. One of these machines was very old and weak by today&#39;s hardware 
   standards, while the other one was a more typical modern system. The weak 
   machine was simply not up to the task and could only handle about 1/10th of 
   the load that the more powerful machine easily handled. MAMA would feed a URL 
   to the validator, parse the output result, send it to the MAMA database for 
   storage, and then move on to the next URL in the list to be analyzed. Rinse 
   and repeat until complete. The big bottleneck was the validator. If MAMA had 
   more validators available to use, the processing time would be drastically cut 
   from weeks to days.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> W3C Markup Validator Hardware</caption>
    <tr>
      <th>Component</th>
      <th>Details</th>
    </tr>
    <tr class="r1">
      <td>Validator #1</td>
      <td>CPU: Intel 2.4GHz dual core P4; RAM: 1GB</td>
    </tr>
    <tr class="r2">
      <td>Validator #2</td>
      <td>CPU: AMD 800MHz; RAM: 768MB</td>
    </tr>
</table>
    
<h2 id="analysisprocessing">Analysis processing time (project duration)</h2>

<p>Completing both phases of URL analysis for MAMA took some time. The process 
   was divided up into several smaller tasks. The main analysis and the validation 
   analysis were completed at different times, because the validator machines were 
   not yet ready at the time of the main analysis. This means that the main 
   analysis and the validation analysis were completed roughly 2 months apart - 
   enough time for a small portion of URLs to have changed their content 
   significantly. In the future, both stages of analysis would preferably be done 
   at the same time. The main analysis took just over 2 weeks to complete, while 
   the validation phase took about 3 weeks to finish.</p>

<p>For the main analysis phase, note that some batches of URLs were completed at 
   different times. The bulk of the URL set was done in the first half of November. 
   A diff was performed between MAMA&#39;s URL set and the then-current DMoz URL set 
   and new URLs were added to MAMA from 10-12 December. Finally, The balance of 
   Alexa URLs and W3C member company URLs that were not already in MAMA were 
   analyzed at the end of January.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> Dates of MAMA analysis phases</caption>
    <tr>
      <th>Analysis phase</th>
      <th>Dates</th>
    </tr>
    <tr class="r1">
      <td>Main analysis</td>
      <td>31 Oct. - 13 Nov. 2007; 10 - 12 Dec. 2007; 28 - 29 Jan. 2008</td>
    </tr>
    <tr class="r2">
      <td>Markup validation</td>
      <td>08 - 29 Jan. 2008</td>
    </tr>
</table>

<h2 id="breakdownanalysisprocessing">Breakdown of MAMA&#39;s basic analysis processing time</h2>

<p>For most of the URLs in MAMA, the basic analysis phase was a quick affair. 
   50% of the URLs took less than 2 seconds each; 75% of them took less than 5 
   seconds. It was the remaining 25% of the URLs where MAMA spent most of its 
   analysis time. There was a hard timeout limit set for each HTTP transaction - 
   180 seconds. This explains the slight hump in Fig 4-1 below, between 180-240 
   seconds. The listed analysis times included not just the main URL itself, 
   but a page&#39;s many dependencies (scripts, style sheets, and often some of the 
   images as well). Since MAMA analyzed a URL&#39;s dependencies serially, in some 
   cases the overall analysis time blossomed. 43 URLs took over half an hour 
   each to analyze, while the most extreme case was a URL that took over 4.5 
   hours to analyze!</p>

    
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> MAMA basic URL analysis time</caption>
    <tr>
      <th>Time (Sec)</th>
      <th>Frequency</th>
      <th>Time (Sec)</th>
      <th>Frequency</th>
    </tr>
    <tr class="r1">
      <td>0-1</td>
      <td class="num">865,590</td>
      <td>10-15</td>
      <td class="num">118,288</td>
    </tr>
    <tr class="r2">
      <td>1-2</td>
      <td class="num">871,701</td>
      <td>15-20</td>
      <td class="num">40,650</td>
    </tr>
    <tr class="r1">
      <td>2-3</td>
      <td class="num">513,339</td>
      <td>20-25</td><td class="num">20,319</td>
    </tr>
    <tr class="r2">
      <td>3-4</td>
      <td class="num">325,583</td>
      <td>25-30</td><td class="num">10,976</td>
    </tr>
    <tr class="r1">
      <td>4-5</td>
      <td class="num">213,415</td>
      <td>30-60</td>
      <td class="num">20,435</td>
    </tr>
    <tr class="r2">
      <td>5-6</td>
      <td class="num">162,767</td>
      <td>60-120</td>
      <td class="num">7,996</td>
    </tr>
    <tr class="r1">
      <td>6-7</td>
      <td class="num">121,782</td>
      <td>120-180</td>
      <td class="num">1,897</td>
    </tr>
    <tr class="r2">
      <td>7-8</td>
      <td class="num">85,167</td>
      <td>180-240</td>
      <td class="num">17,222</td>
    </tr>
    <tr class="r1">
      <td>8-9</td>
      <td class="num">61,653</td>
      <td>240-300</td>
      <td class="num">586</td>
    </tr>
    <tr class="r2">
      <td>9-10</td>
      <td class="num">46,699</td>
      <td>300+</td>
      <td class="num">3,115</td>
    </tr>
</table>

<h2 id="frequencytables">Frequency tables</h2>

<p>In order to decrease the physical size of the frequency table documents found 
   in this study, any values detected less than 4 times were not included. Looked 
   at one way, MAMA&#39;s philosophy can be summed up as:</p>

    <ul>
        <li>2 times is a coincidence</li>
        <li>3 times is the beginnings of a trend, or a big coincidence</li>
        <li>4 times is where even coincidences become too big to ignore</li>
    </ul>

<p>But this is over-thinking the strategy. Listing every single detected value 
   in every frequency table is simply untenable. As it is, some of the lower 
   bounds of the tables had to be raised to make the overall size more manageable. 
   The frequency tables were mostly created by automation scripts, but occasionally 
   some additional hand-editing was done to remove values that seemed grossly 
   incorrect or obviously didn&#39;t fit the context.</p>

<p>The general attribute frequency table had a special extra filter added - some 
   authors don&#39;t properly quote attribute values, which leads to an unintended 
   (and incorrect) proliferation of attributes. This was readily apparent with 
   <code class="elem">META</code> elements, and what should have been <code class="att">Keywords</code> 
   and <code class="att">Description</code> attribute values were parsed as an explosion of 
   attribute names, causing the attribute frequency table to grow by almost 33%. 
   A custom attribute filter was therefore made for the <code class="elem">META</code> element 
   to only allow attribute values that you&#39;d commonly expect for the element. 
   Aside from this, MAMA&#39;s frequency tables generally go into much greater depth 
   than has been documented in other studies, even to the point where many values 
   listed will be below any sort of statistical significance. This may be overwhelming 
   to many readers, but it provides as deep a look as possible for those who are 
   interested in such minutiae and are actually looking for aberrant behavior. It 
   is the unexpected cases that happen with regularity that are often the most 
   interesting to browser makers.</p>

<h2 id="stockparsers">To use stock parsers or create it all from scratch, that is the question</h2>

<p>Unlike Ian Hickson&#39;s work at Google and Rene Saarsoo&#39;s research, I did not 
   use an official or stock parsing library for markup analysis. I originally 
   had the (untested) theory that markup &quot;in the wild&quot; could be very, VERY bad, 
   and didn&#39;t expect that an off-the-shelf parsing library could cope with the 
   dregs of the Web. Since most browsers are very forgiving of bad markup, it 
   seemed like MAMA&#39;s approach should also be as forgiving as possible. It wasn&#39;t 
   that I didn&#39;t trust the quality of any existing parser - the fact is that I 
   simply didn&#39;t trust the quality of the markup I would run into on the Web. I 
   could more readily adapt my own code if I ran into problems.</p>

<p>As MAMA&#39;s capabilities grew to encompass more of the script and CSS end of 
   things, my thoughts on this problem have evolved somewhat. In terms of 
   syntactic strictness, the script content on a web page stands the highest 
   chance of being the most valid - scripting engines are very unforgiving of 
   errors, hence authors must produce more rigorous code. Markup, on the other 
   hand, can be badly nested with many errors, and a browser will still try to 
   render it. Real-world CSS falls somewhere between these two extremes. Web 
   pages in the wild unearth situations that can really stress a parser, so the 
   error recovery needs to be very robust. If I had to begin MAMA again, I would 
   try to use existing parsing libraries for all its markup, CSS and script 
   analysis needs, just to ease the workload.</p>

<p>Over time, MAMA will try to incorporate existing parsers where it is feasible 
   and useful; the first change will be integrating the Perl SAC module for CSS 
   analysis in the future. After seeing its utility in Saarsoo&#39;s study it seems 
   to me to be an excellent choice for improving MAMA&#39;s CSS detection.</p>

<h2 id="caveats">Caveats and disclaimers</h2>

<p>Some aspects of the MAMA system have inherent limitations that may (or may 
   not) have introduced problems or bias:</p>
    
    <ul>
        <li><strong>Country determination:</strong><br />MAMA uses the Perl 
            <a href="http://www.maxmind.com/app/country">Geo::IP module from 
            Maxmind</a> to determine the country of origin of URLs. Any problems 
            or limitations with Maxmind&#39;s system are thus also problems and 
            limitations in MAMA&#39;s country selection system.</li>
        <li><strong>Geographical limitations:</strong><br />The MAMA system is 
            running from Norway. Network resolution and other issues may have 
            arisen that affect the results because of the system&#39;s geographical location.</li>
        <li><strong>Parsers:</strong><br />The parsing mechanisms for markup and 
            CSS are custom, and there may be some bugs remaining.</li>
        <li><strong>URLs mentioned:</strong><br /> URLs singled out in this study 
            demonstrate the described behaviors at the time of writing, but URLs 
            can/do change over time.</li>
        <li>The frequency tables sometimes contain values with excessive escape 
            characters &quot;\&quot;. This is partially a result of MAMA&#39;s markup-in-script 
            detection, and also a bug resulting from improper data round-tripping 
            from MAMA&#39;s database storage. It will be fixed in future versions.</li>
        <li><strong>Character length</strong><br /> A metric used several times in 
            this study is &quot;character length&quot; of a file; this is used in lieu of 
            file size. Character length is not as immediately relatable as giving a 
            file size, but this functionality is easily available in Perl and 
            provides similar data to file size. Generally, 1 character = 1 byte, but 
            that is not always the case; Unicode and Asian character sets complicate
            such measures (among other factors), and file sizes can differ between 
            OSes.</li>
        <li>MAMA did not analyze <strong>ALL</strong> of the URLs it set out to. 
            Transient network issues, dead URLs and other problems inevitably 
            kept the final URLs analyzed from being bigger than its final total 
            of about 3.5 million.</li> 
    </ul>

<h2 id="designchoices">Design choices</h2>

<p>MAMA tries to emulate a browser as closely as possible, but in the end it 
   simply is not. The following are some things it can and can&#39;t handle.</p>

<h3>MAMA as a Browser Engine</h3>
    <ul>
      <li>MAMA identified itself as Opera 9.10 for its User-Agent string in order 
          to experience the Web the way Opera&#39;s browser would.</li>
      <li>MAMA&#39;s URL selection policy did not respect any <em>robots.txt</em> or 
          other spidering methodologies. MAMA relied on a randomized URL set and 
          domain-capping to prevent server overloading, coupled with the expectation 
          that <strong>all</strong> URLs in DMoz were fair game for surveying by 
          their very nature.</li>
    </ul>

<h3>Frames, etc.</h3>
    <ul>
        <li>Sub-frames and <code class="elem">META</code> refresh documents are added to the 
            overall analysis stack for each URL when encountered. This more 
            accurately represents the overall browsing experience for a single 
            URL, but for some tallies that MAMA kept track of (like total number 
            of URLs in a document), this ended up inflating the sums for the 
            parent page; the approach has both good and bad qualities.</li>
        <li>Sub-frames are added to the overall analysis stack, but not any nested 
            framesets; This process applies only to the 1st-level of frame documents.</li> 
    </ul>

<h3>JavaScript detection</h3>
    <ul>
        <li>For better or worse, MAMA attempted to look in <code class="elem">SCRIPT</code> 
            blocks for dynamically written markup. The remnants of this policy 
            can be seen in the frequency tables where JavaScript syntax 
            occasionally stands out.</li>
        <li>Scripts are particularly problematic since MAMA doesn&#39;t use a real 
            JavaScript engine. Scripts are only tokenized and specific token 
            chains are searched for keywords. No complex parsing was attempted.</li>
        <li>Scripting functions and variables can be abstracted so that it 
            disguises JavaScript features MAMA looks for.</li>
        <li>Attempts were made to detect external CSS or scripts that are 
            dynamically written by other scripts, but no attempt was made to 
            download or analyze their contents.</li>
    </ul>

    <h3>Other</h3>
    <ul>
        <li>MAMA didn&#39;t handle cookie processing.</li>
        <li>Any unusual or extraordinary authoring conditions that the analysis 
            script didn&#39;t expect</li>
    </ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-what-has-come-before/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: What has come before</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-the-url-set/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: The URL set</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
