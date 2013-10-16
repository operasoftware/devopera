Title: MAMA: HTTP Headers
----
Date: 2008-10-31 10:26:55
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-the-average-web-page/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: The &quot;average&quot; Web page</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: W3C validator research</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<div><strong>Index:</strong></div>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#mamareqhdr">About MAMA&#39;s HTTP requests</a></li>
    <li><a href="#anatomy">The HTTP response&#8212;general anatomy</a></li>
    <li><a href="#popular">Most popular HTTP Header fields and other additional data</a></li>
    <li><a href="#proto">HTTP protocols</a></li>
    <li>HTTP Header fields:
        <ol class="innerlist">
            <li><a href="#conttype">Content-Type: MIME types and character sets</a></li>
            <li><a href="#server">Server</a></li>
            <li><a href="#connection">Connection</a></li>
            <li><a href="#xpoweredby">X-Powered-By</a></li>
            <li><a href="#expires">Expires</a></li>
            <li><a href="#cachecontrol">Cache-Control</a></li>
            <li><a href="#vary">Vary</a></li>
            <li><a href="#sslcipher">SSL-Cipher</a></li>
            <li><a href="#other">The other HTTP Header fields</a></li>
        </ol>
    </li>
</ol>

<h2 id="intro">Introduction</h2>
<p>In the beginning, there were only a few HTTP Headers with which MAMA was concerned 
   (such as the <code class="skeyw">Content-Type</code> and <code class="skeyw">Server</code> 
   fields). As feature requests for HTTP Header data accumulated over time, managing 
   the results became more difficult. MAMA generally was not as concerned with what 
   the HTTP Headers contained as with what the rest of the HTTP response had to say. 
   At a certain point, the various checks that MAMA was doing on the HTTP Headers 
   became too numerous, so the decision was made to store the <strong>entire</strong> 
   HTTP Header in the database. This way, any new requests could be quickly completed 
   locally without having to do an entirely fresh re-crawl of the entire MAMA URL set.</p> 

<p>For this study, we will first look at the general shape and composition of the 
   HTTP Headers MAMA encountered before looking at some of the results found for 
   select individual HTTP Headers. Saarsoo&#39;s study is the only comparable 
   large-scale study of HTTP Headers of which I am aware, and MAMA&#39;s discoveries 
   will be compared with Saarsoo&#39;s data where possible.</p>

<h2 id="mamareqhdr">About MAMA&#39;s HTTP Requests</h2>
<p>An HTTP response is often heavily dependent on the original HTTP request. It 
   is important to look at what MAMA is sending as its HTTP request before 
   looking at the responses received. An original goal for MAMA was to mimic, as 
   accurately as possible, what an Opera Web browser would encounter when surfing 
   the net; this likely led to a coloring of some of the data returned. Servers 
   can and do discriminate on the basis of User-Agent or other HTTP Header fields. 
   The HTTP request headers used in this study are shown in figure 2-1 below. The 
   biggest difference between Opera&#39;s HTTP request headers and MAMA&#39;s lies in the 
   <code class="skeyw">Accept-Encoding</code> value. Opera can handle gzip, 
   deflate and other encodings. This functionality was not added to MAMA in order 
   to limit the coding and analysis effort MAMA needed to do for each URL.</p>

   <p class="note"><strong>NOTE:</strong> The <code class="skeyw">Accept-Language</code> 
   and <code class="skeyw">Accept-Charset</code> values chosen reflect the author&#39;s 
   own particular language bias.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> 
   MAMA&#39;s HTTP request headers</caption>
   <tr><th>Header name</th><th>Header value</th></tr> 
   <tr class="r1">
     <td><code class="skeyw">Accept</code></td>
     <td><span class="string">&quot;text/html, application/xml;q=0.9, application/xhtml+xml, 
         image/png, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1&quot;</span></td>
   </tr>
   <tr class="r2">
     <td><code class="skeyw">Accept-Charset</code></td>
     <td><span class="string">&quot;windows-1252, utf-8, utf-16, iso-8859-1;q=0.6, *;q=0.1&quot;</span></td>
   </tr>
   <tr class="r1">
     <td><code class="skeyw">Accept-Encoding</code></td>
     <td><span class="string">&quot;identity, *;q=0&quot;</span></td>
   </tr>
   <tr class="r2">
     <td><code class="skeyw">Accept-Language</code></td>
     <td><span class="string">&quot;en&quot;</span></td>
   </tr>
   <tr class="r1">
     <td><code class="skeyw">Connection</code></td>
     <td><span class="string">&quot;Keep-Alive&quot;</span></td>
   </tr>
   <tr class="r2">
     <td><code class="skeyw">User-Agent</code></td>
     <td><span class="string">&quot;Opera/9.10 (Windows NT 5.1; U; en)&quot;</span></td>
   </tr>
</table>

<h2 id="anatomy">The HTTP Response - general anatomy</h2>
<p>HTTP/1.1 (<a href="http://www.ietf.org/rfc/rfc2616.txt">RFC 2616</a>) goes 
   into great detail about the allowed configurations that an HTTP response can 
   take on. In this section, only the HTTP Header block that comes before the 
   main HTTP response body will be covered. In general terms, the header block 
   consists of a &quot;status line&quot; followed by any number of newline-separated 
   header field/value pairs. The status line contains important basic information 
   about the entire HTTP transaction and has the following format:</p> 

   <p class="note">[Protocol]/[HTTP Version] [HTTP Status Code] [HTTP Status 
   reason text]</p>

   <p>The format of the Header name/value pairs that follow is generally:</p>

   <p class="note">[Field Name (case-insensitive)]: [Field Value]</p>

<h2 id="popular">Most popular HTTP Header fields and other additional data</h2>
<p>In this section, we will look at which HTTP Headers were the most popular ones encountered.</p>
<h3>Popularity contest</h3>
<p>To start off our look at HTTP Headers, Fig 4-1 below is an abbreviated look 
   at a frequency table of the most popular header fields found in MAMA&#39;s URL 
   set (see also the more extensive <a href="httpheaders-url.htm">per-URL
   frequency table</a>). The astute reader may have already noticed that the 
   caption in Fig 4-1 below reads, &quot;Top 10...&quot;, but there are <strong>13</strong> 
   values. This is because the first three field names&#8212;the ubiquitous ones 
   prefixed by &quot;Client-&quot;&#8212;are generated in MAMA&#39;s process as a result of the 
   usage of Perl&#39;s LWP module. These fields will be ignored in this study. As 
   a result, the most frequent HTTP Header field name then becomes the expected 
   <code class="skeyw">Content-Type</code>. With this adjustment, MAMA&#39;s 
   frequency table generally agrees very closely with Saarsoo&#39;s study of HTTP 
   Headers for the top values.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> 
   Top 10 HTTP Header field names<br />(Of 3,509,180 URLs analyzed)</caption>
   <tr>
     <th>Header name</th>
     <th>Header value</th>
     <th rowspan="8">&#xA0;</th>
     <th>Header name</th>
     <th>Header value</th>
   </tr> 
   <tr class="r1">
     <td><code class="skeyw">Client-Date</code></td>
     <td class="num">3,509,180</td>
     <td><code class="skeyw">Content-Length</code></td>
     <td class="num">2,534,203</td>
   </tr>
   <tr class="r2">
     <td><code class="skeyw">Client-Response-Num</code></td>
     <td class="num">3,509,180</td>
     <td><code class="skeyw">Last-Modified</code></td>
     <td class="num">2,129,100</td>
   </tr>
   <tr class="r1">
     <td><code class="skeyw">Client-Peer</code></td>
     <td class="num">3,509,175</td>
     <td><code class="skeyw">Content-Range</code></td>
     <td class="num">2,068,687</td>
   </tr>
   <tr class="r2">
     <td><code class="skeyw">Content-Type</code></td>
     <td class="num">3,508,919</td>
     <td><code class="skeyw">ETag</code></td>
     <td class="num">1,954,567</td>
   </tr>
   <tr class="r1">
     <td><code class="skeyw">Date</code></td>
     <td class="num">3,504,603</td>
     <td><code class="skeyw">Accept-Ranges</code></td>
     <td class="num">1,870,170</td>
   </tr>
   <tr class="r2">
     <td><code class="skeyw">Server</code></td>
     <td class="num">3,465,179</td>
     <td><code class="skeyw">X-Powered-By</code></td>
     <td class="num">1,348,347</td>
   </tr>
   <tr class="r1">
     <td><code class="skeyw">Connection</code></td>
     <td class="num">2,851,099</td>
     <td>&#xA0;</td>
     <td>&#xA0;</td>
   </tr>
</table>

<h3>Other semi-random data about HTTP Headers</h3>
<p>The most common number of HTTP Header fields encountered in this study was 12 
   (please see also the <a href="headerfieldqtys-url.htm">full 
   frequency table</a>)&#8212;actually 9, if you take into account the adjusted 
   value due to the ignored &quot;Client-*&quot; headers. The overall length of the header 
   had a fairly wide distribution, with the average length being 381 characters. 
   The longest header block length encountered was 9,725 characters, found at 
   <a href="http://www.studentenwerk.uni-freiburg.de/">http://www.studentenwerk.uni-freiburg.de/</a> 
   in an apparently isolated case; the URL has an overabundance of &quot;EACCELERATOR 
   hit&quot; header fields repeated 100 times! This is definitely not typical, and 
   the Header block for that URL is not otherwise remarkable.</p>

<h2 id="proto">HTTP protocol versions</h2>
<p>MAMA used a native Perl LWP method to get the protocol and version used in 
   the URL&#39;s HTTP response. It then did a simple substring match for 
   <span class="string">&quot;1.1&quot;</span>, <span class="string">&quot;1.0&quot;</span> or 
   <span class="string">&quot;0.9&quot;</span> within that value. To allow for instances 
   where some other version was detected, MAMA also had 
   <span class="string">&quot;unknown&quot;</span> as a fallback default value, but all 
   HTTP responses fell within the three expected version types anyway. Almost 
   half (50/104) of the HTTP/0.9 URLs were from galeon.com variants (ex: 
   <a href="http://equipobarzamudio.galeon.com/">http://equipobarzamudio.galeon.com/</a>). 
   Whittling down duplicate domains from the HTTP/0.9 result, MAMA discovered 
   only 42 unique servers using this HTTP protocol version (<em>insert witty joke 
   referencing Douglas Adams here</em>).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> 
   HTTP protocol versions in MAMA</caption>
   <tr>
     <th>HTTP protocol</th>
     <th>Quantity</th>
   </tr> 
   <tr class="r1">
     <td>HTTP/1.1</td>
     <td class="num">3,451,169</td>
   </tr>
   <tr class="r2">
     <td>HTTP/1.0</td>
     <td class="num">57,907</td>
   </tr>
   <tr class="r1">
     <td>HTTP/0.9</td>
     <td class="num">104</td>
   </tr>
</table>

<h2 id="fields">HTTP Header fields</h2>

    <h3 id="conttype"><code class="skeyw">&quot;Content-Type&quot;</code> HTTP Header field: 
    MIME types and character sets</h3>
    <h4>MIME types</h4>
    <p>Of the 3,509,180 URLs that MAMA analyzed, the vast majority (~99.9%) used 
    a <span class="string">&quot;text/html&quot;</span> MIME type 
    (<a href="mamaurlset-mimehistogram.htm">see full frequency table</a>). 
    <span class="string">&quot;text/plain&quot;</span> and <span class="string">&quot;application/xhtml+xml&quot;</span> 
    types also had some occasional representation in the set (~1,000 cases each). Other 
    values were also encountered, albeit very rarely&#8212;including some values that 
    would clearly indicate they should not be analyzed by MAMA as markup (like 
    <span class="string">&quot;text/rtf&quot;</span>). It was not known in advance of performing 
    the analysis whether some content could be masquerading using unexpected MIME 
    types (such as HTML being served as <span class="string">&quot;text/plain&quot;</span>), so 
    MAMA was not as discerning in this area as it could have been. In the future, 
    more will be done to filter out unprocessable MIME types from analysis, including 
    checking file extensions for inappropriate types (there are 694 URLs still present 
    in MAMA&#39;s set that have a <span class="string">&quot;.txt&quot;</span> file extension, for example).</p>

    <h4>The Content-Type &#39;Charset&#39; parameter</h4>
    <p>The character set used for a document can be specified in several ways. One 
    of those ways is through the <code class="skeyw">Content-Type</code> HTTP Header 
    field using a <span class="string">&quot;charset&quot;</span> 
    parameter (we&#39;ll look at the other methods in the Document 
    encodings section). The HTTP Header line syntax for defining the character 
    set via this method looks like this:</p>
    
    <p class="note"><em>Content-Type: text/html; charset=ISO-8859-1</em></p> 
    
    <p>Although the <code class="skeyw">Content-Type</code> Header field was 
    encountered in almost every single URL analyzed, the <span class="string">&quot;charset&quot;</span> 
    parameter was only detected in 688,819 (19.63%) of them. A look at the 
    <a href="httpheaders-charsetvalue-url.htm">frequency table of the values for 
    the charset parameter</a> shows that the value is usually (~88% of the time) 
    either <span class="string">&quot;utf-8&quot;</span> or <span class="string">&quot;iso-8859-1&quot;</span>.</p>
 
    <h4>Silly HTTP Header pet tricks - Case-sensitivity of the &#39;Charset&#39; keyword</h4>
    <p>Although HTTP/1.1 defines the media type <span class="string">&quot;charset&quot;</span> 
    parameter as being case-insensitive, what sort of capitalization is found on 
    the Web? The dominating usage is all lowercase in 99.2% of the cases. A recent 
    question from a co-worker prompted MAMA to answer this minor question. Answers 
    big and small, MAMA can provide them all!</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6A-1:</strong> 
       Capitalization of the &quot;charset&quot; parameter name</caption>
       <tr valign="bottom">
         <th>&quot;Charset&quot;<br />Capitalization</th>
         <th>Quantity</th>
       </tr> 
       <tr class="r1">
         <td>charset</td>
         <td class="num">683,265</td>
       </tr>
       <tr class="r2">
         <td>Charset</td>
         <td class="num">5,487</td>
       </tr>
       <tr class="r1">
         <td>CHARSET</td>
         <td class="num">66</td>
       </tr>
       <tr class="r2">
         <td>CharSet</td>
         <td class="num">1</td>
       </tr>
    </table>
    
    <h3 id="server"><code class="skeyw">&quot;Server&quot;</code> HTTP Header field</h3>
    <p>This field contains information about the Web server used to serve the 
    HTTP request. MAMA again used a built-in Perl LWP method to detect this 
    field. The value of the <code class="skeyw">Server</code> HTTP Header field 
    is expected to be the same for all pages from that server, so rather than 
    look at results on a per-URL basis, it is more instructive to look at 
    per-domain results.</p>

    <p>In the brief summary below (Fig 6B-1), notice the obvious (and expected) 
    dominance of the Apache and IIS Web servers. In fact, in the full 
    <a href="server-dom.htm">per-domain</a> and <a href="server-url.htm">per-URL</a> 
    unique value frequency tables for the HTTP Header <code class="skeyw">Server</code> 
    field, <strong>all</strong> the values in the top ten are either Apache or IIS 
    related. Apache is represented in a whopping 2,011,088 (67.72%) of domains 
    in MAMA while IIS is used in 769,375 (25.91%) domains. The popularity ranking 
    of the Web servers mentioned below is very similar to 
    <a href="http://triin.net/2006/06/12/HTTP_headers">Saarsoo&#39;s study</a>.</p> 

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6B-1:</strong> 
       Popular HTTP Header &quot;Server&quot; field Values<br />[Out of 2,969,738 domains]</caption>
       <tr>
         <th>Server substring value</th>
         <th>Quantity</th>
         <th rowspan="10">&#xA0;</th>
         <th>Server substring value</th>
         <th>Quantity</th>
       </tr>
       <tr class="r1">
         <td>Apache</td>
         <td class="num">2,011,088</td>
         <td>Lotus-Domino</td>
         <td class="num">6,609</td>
       </tr>
       <tr class="r2">
         <td>IIS</td>
         <td class="num">769,375</td>
         <td>IBM</td>
         <td class="num">6,289</td>
       </tr>
       <tr class="r1">
         <td>[Empty]</td>
         <td class="num">42,261</td>
         <td>IdeaWebServer</td>
         <td class="num">5,912</td>
       </tr>
       <tr class="r2">
         <td>Zeus</td>
         <td class="num">21,314</td>
         <td>ZServer</td>
         <td class="num">4,990</td>
       </tr>
       <tr class="r1">
         <td>Squeegit</td>
         <td class="num">20,569</td>
         <td>WebServerX</td>
         <td class="num">4,667</td>
       </tr>
       <tr class="r2">
         <td>Rapidsite</td>
         <td class="num">18,876</td>
         <td>Sun-ONE-Web</td>
         <td class="num">4,427</td>
       </tr>
       <tr class="r1">
         <td>NOYB</td>
         <td class="num">9,746</td>
         <td>SX_Spectrum</td>
         <td class="num">4,088</td>
       </tr>
       <tr class="r2">
         <td>GFE</td>
         <td class="num">9,734</td>
         <td>NCSA</td>
         <td class="num">109</td>
       </tr>
       <tr class="r1">
         <td>Netscape</td>
         <td class="num">7,926</td>
         <td>&#xA0;</td>
         <td>&#xA0;</td>
       </tr>
    </table>

    <h4><code class="skeyw">&quot;Server&quot;</code> oddities</h4>
    <p>The count for Apache also includes an additional Server string added for 
    completeness: <span class="string">&quot;a p a c h e&quot;</span> (2,616 times). The 
    results in Fig 6B-1 are also slightly muddied by an odd value that is undoubtedly 
    some form of joke&#8212; 86 domains had a Server header field value with both 
    <span class="string">&quot;IIS&quot;</span> <strong>and</strong> 
    <span class="string">&quot;Apache&quot;</span> in them (all of them being the string 
    <span class="string">&quot;Apache-IIS/5.0&quot;</span>), from domains such as 
    <a href="http://www.longevitytea.com/">http://www.longevitytea.com/</a> 
    and <a href="http://letspartyrental.com/">http://letspartyrental.com/</a>. 
    The value is undoubtedly a spoof or hoax&#8212; one would expect a real hybrid of 
    the dominant Web servers to be a bit more popular. Lastly, notice also that 
    a fair number of servers use the <code class="skeyw">Server</code> HTTP 
    Header field to rebuff our desire for deeper knowledge of the Web servers 
    that are in use: 9,746 domains tell us that it is <span class="string">&quot;NOYB&quot;</span> 
    (None Of Your Business) ... <strong>the nerve!</strong></p>

    <h3 id="connection"><code class="skeyw">&quot;Connection&quot;</code> HTTP Header field</h3>
    <p>The Connection field specifies options that are to be used for the current 
    particular HTTP connection. In MAMA&#39;s analysis, the value is almost always 
    <span class="string">&quot;close&quot;</span> (~98.5%) when it is present. This result is 
    <strong>very</strong> different than Saarsoo&#39;s research where <span class="string">&quot;close&quot;</span> 
    was actually a minority value (~41.3%) compared to the dominant value of 
    <span class="string">&quot;keep-alive&quot;</span> (~58.7%). A number of factors may have 
    influenced this, with the most likely culprit being the facilities used in the 
    respective studies to fetch the URLs&#8212; the Perl LWP module in this MAMA 
    study and GNU Wget in Saarsoo&#39;s case. For now we will let this discrepancy stand, 
    but the issue may be interesting to revisit in the future.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6C-1:</strong> 
       HTTP Header &quot;Connection&quot; field values</caption>
       <tr class="h">
         <th>Value</th>
         <th>Frequency</th>
       </tr>
       <tr class="r1">
         <td>close</td>
         <td class="num">2,806,105</td>
       </tr>
       <tr class="r2">
         <td>keep-alive</td>
         <td class="num">39,804</td>
       </tr>
       <tr class="r1">
         <td>transfer-encoding</td>
         <td class="num">2,970</td>
       </tr>
       <tr class="r2">
         <td>keep-alive, close</td>
         <td class="num">1,857</td>
       </tr>
       <tr class="r1">
         <td>keep-alive, timeout=50, maxreq=60</td>
         <td class="num">203</td>
       </tr>
       <tr class="r2">
         <td>keep-alive, te, close</td>
         <td class="num">143</td>
       </tr>
       <tr class="r1">
         <td>persistent</td>
         <td class="num">7</td>
       </tr>
    </table>

    <h4>Somebody get that kid a dictionary</h4>
    <p>In the list of HTTP Header fields encountered (Fig 4-1 above), some 
    variations are noticeable. Often these variations are misspellings, but it 
    is difficult to know whether these are deliberate or not. The HTTP Header 
    field with the most variations and frequency was definitely the 
    <code class="skeyw">Connection</code> field. Some of the misspellings 
    are so demonstrably wrong that one wonders how they could survive even the 
    simplest of inspections, but 13,764 occurrences of <span class="string">&quot;Cneoction&quot;</span> 
    seems <strong>far</strong> too high to be an accident. Table Fig 6C-2 below 
    shows the strange and slightly bizarre list of erroneous 
    <code class="skeyw">Connection</code> header misspellings.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6C-2:</strong> 
       Misspellings of the &quot;Connection&quot; HTTP Header field</caption>
       <tr>
         <th>Misspelling</th>
         <th>Frequency</th>
       </tr>
       <tr class="r1">
         <td>Cneonction</td>
         <td class="num">13,764</td>
       </tr>
       <tr class="r2">
         <td>NnCoection</td>
         <td class="num">8,569</td>
       </tr>
       <tr class="r1">
         <td>X-Cnection</td>
         <td class="num">1,332</td>
       </tr>
       <tr class="r2">
         <td>Xonnection</td>
         <td class="num">135</td>
       </tr>
       <tr class="r1">
         <td>-Onnection</td>
         <td class="num">82</td>
       </tr>
    </table>

    <h3 id="xpoweredby"><code class="skeyw">&quot;X-Powered-By&quot;</code> HTTP Header field</h3>
    <p>This is a common Header extension field used to identify the Web server 
    pre-processing engine in use (if any). ASP and PHP dominate this field (you 
    have to go down past the 20th position in the <a href="httpheaders-x-powered-by-url.htm">popularity 
    frequency table</a> to find a value that <strong>does not</strong> contain 
    either ASP or PHP). Combined, the various ASP and PHP values comprise 98.2% 
    of all <code class="skeyw">X-Powered-By</code> values. PHP is the most diversified 
    of the values in use, with about 450 of the 750 values (~60%!) in the frequency 
    table being unique PHP flavors. Finally, let us pause a moment and contemplate 
    all the hard work that the fine folk mentioned in the 6th position put into all of this...</p>

    <p>...OK, that is enough. Back to the analysis.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6D-1:</strong> 
       X-Powered-By substrings detected</caption>
       <tr>
         <th>Substring detected</th>
         <th>Frequency</th>
       </tr>
       <tr class="r1">
         <td>ASP</td>
         <td class="num">720,386</td>
       </tr>
       <tr class="r2">
         <td>PHP</td>
         <td class="num">603,590</td>
       </tr>
       <tr class="r1">
         <td>pleskwin</td>
         <td class="num">7,836</td>
       </tr>
       <tr class="r2">
         <td>modlayout</td>
         <td class="num">5,979</td>
       </tr>
       <tr class="r1">
         <td>servlet</td>
         <td class="num">2,223</td>
       </tr>
       <tr class="r2">
         <td>&quot;the blood, sweat and tears of the fine, fine textdrive staff&quot;</td>
         <td class="num">633</td>
       </tr>
       <tr class="r1">
         <td>zend</td>
         <td class="num">496</td>
       </tr>
    </table>

    <h3 id="expires"><code class="skeyw">&quot;Expires&quot;</code> HTTP Header field</h3>
    <p>The <code class="skeyw">Expires</code> header documents a &quot;best before&quot; 
    date. Unlike with food products, an expired date does not necessarily mean 
    that the resource has changed or disappeared. The field is used to give the 
    date and time after which the content is considered &quot;stale&quot;&#8212; proxy 
    servers need to be especially mindful of this value to prevent old cached 
    content from being passed on to an end-user instead of fresher content from 
    the originating source. Other than some extremes and error cases, this field 
    is somewhat tedious to sift through&#8212;as you can see from 
    <a href="httpheaders-expires-url.htm">the full Expires frequency table</a>, 
    the values are mostly simple dates.</p>

    <h4><q>Those who cannot remember the past are condemned to repeat it</q> (George Santayana)</h4>
    <p>Looking closer at the proper format for the <code class="skeyw">Expires</code> field in 
    <a href="http://www.ietf.org/rfc/rfc2616.txt">HTTP 1.1 (RFC 2616)</a>, MAMA 
    uncovers quite a few transgressions:</p>

    <blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><p>&quot;[It] 
    <strong>MUST</strong> be in RFC 1123 date format, such as: &#39;Tue, 26 Oct 1999 
    19:00:00 GMT&#39;...HTTP/1.1 clients and caches <strong>MUST</strong> treat other 
    invalid date formats, especially including the value &#39;0&#39;, as in the past (i.e., 
    &#39;already expired&#39;)&quot;</p></blockquote>

    <p>Not only are values of <span class="string">&quot;0&quot;</span> for the date used, 
    but also more extreme values like <span class="string">&quot;now&quot;</span>, 
    <span class="string">&quot;never&quot;</span>, <span class="string">&quot;-1&quot;</span>, 
    <span class="string">&quot;-1d&quot;</span> and <span class="string">&quot;-10000&quot;</span>. 
    Values in the past generally don&#39;t go further back than the UNIX origin date 
    favorite of <span class="string">&quot;01 Jan 1970&quot;</span>, but the occasional URL 
    makes a foray in the time machine back to the turn of the last century (1900). 
    An enterprising group of 27 URLs made the jump back to Bastille Day 
    (<span class="string">&quot;14 Jul, 1789&quot;</span>) for their expiration&#8212;it 
    might entertaining to double-check to see if those were all French URLs. 10 
    URLs authoritatively stated they are expired (and probably mummified) by 
    using an expiry of <span class="string">&quot;01 jan 0001&quot;</span>.</p>

    <h4>Back to the future!</h4>
    <p>Going in the other direction, MAMA also discovered many <code class="skeyw">Expires</code> dates 
    beyond the MAMA analysis timeframe. <a href="http://www.ietf.org/rfc/rfc2616.txt">HTTP 
    1.1 (RFC 2616)</a> has an interesting comment on future expiries:</p>

    <blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><p>&quot;To 
    mark a response as &#39;never expires,&#39; an origin server sends an Expires date 
    approximately one year from the time the response is sent. HTTP/1.1 servers 
    <strong>SHOULD NOT</strong> send Expires dates more than one year in the future.&quot;</p></blockquote>

    <p>Contrary to this mentioned proviso, a number of URLs (92) jump forward to 
    the future, but not the recommended single year. URLs with expiries set 
    clearly in the future used a smattering of dates between 2010 and 2035&#8212;quite 
    a bit forward in time than what is suggested. The wording of 
    <a href="http://www.ietf.org/rfc/rfc2119.txt">RFC 2119</a>&#8212;a document 
    about the wording of requirements in RFCs&#8212;says that pesky, previously 
    mentioned &quot;SHOULD&quot; terminology indicates that the future date values MAMA 
    encountered are permissible if the creator knows what they are doing. One 
    hopes that the creators of four URLs in MAMA know what they are doing when 
    they set their <code class="skeyw">Expires</code> field in the year 2999! 
    What would the Web even look like then?!</p>

    <h3 id="cachecontrol"><code class="skeyw">&quot;Cache-Control&quot;</code> HTTP Header field</h3>
    <h4>Field-component popularity</h4>
    <p>This field communicates information used to override normal caching 
    strategies employed by proxies or clients. The value is a comma-separated 
    list of related header fields that are relevant when deciding the caching 
    status for a document. MAMA&#39;s raw <a href="httpheaders-cachecontrol-url.htm">per-URL 
    frequency table</a> for this field is a list of unique compound values, but 
    that does not really reveal the popularity of the sub-components very well. 
    The table below (Fig 6F-1) goes further by showing the most popular 
    frequencies of the components referenced in each &quot;Cache-Control&quot; header 
    value from the full frequency table.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6F-1:</strong> 
       &quot;Cache-Control&quot; value component frequency table</caption>
       <tr>
         <th>Value component</th>
         <th>Frequency</th>
         <th rowspan="8">&#xA0;</th>
         <th>Value Component</th>
         <th>Frequency</th>
       </tr>
       <tr class="r1">
         <td>private</td>
         <td class="num">356,826</td>
         <td>public</td>
         <td class="num">8,409</td>
       </tr>
       <tr class="r2">
         <td>no-cache</td>
         <td class="num">245,761</td>
         <td>s-maxage</td>
         <td class="num">3,244</td>
       </tr>
       <tr class="r1">
         <td>pre-check</td>
         <td class="num">219,069</td>
         <td>cache</td>
         <td class="num">2,986</td>
       </tr>
       <tr class="r2">
         <td>post-check</td>
         <td class="num">218,957</td>
         <td>proxy-revalidate</td>
         <td class="num">2,943</td>
       </tr>
       <tr class="r1">
         <td>must-revalidate</td>
         <td class="num">196,645</td>
         <td>store</td>
         <td class="num">255</td>
       </tr>
       <tr class="r2">
         <td>no-store</td>
         <td class="num">180,853</td>
         <td>no-transform</td>
         <td class="num">170</td>
       </tr>
       <tr class="r1">
         <td>max-age</td>
         <td class="num">85,695</td>
         <td>&#xA0;</td>
         <td>&#xA0;</td>
       </tr>
    </table>

    <h4>It is just a matter of time</h4>
    <p>One thing that stands out when looking at the complete 
    <code class="skeyw">Cache-Control</code> frequency table is the wide variety 
    of <code class="skeyw">Max-age</code> time values. Since the 
    <code class="skeyw">Max-age</code> value should take precedence over any 
    <code class="skeyw">Expires</code> header value, it can be informative to 
    look closer at the times represented. In the distribution table below (Fig 
    6F-2), noticeable spikes are apparent. Other values were also detected, but 
    their frequencies were below the chosen threshold.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6F-2:</strong> 
       Cache-Control &quot;Max-age&quot; values</caption>
       <tr>
         <th>Max-age value (sec)</th>
         <th>Frequency</th>
         <th rowspan="15">&#xA0;</th>
         <th>Max-age value (sec)</th>
         <th>Frequency</th>
       </tr>
       <tr class="r1">
         <td>0</td>
         <td class="num">33,882</td>
         <td>10800 (3 hr)</td>
         <td class="num">408</td>
       </tr>
       <tr class="r2">
         <td>1</td>
         <td class="num">2,188</td>
         <td>14400 (4 hr)</td>
         <td class="num">238</td>
       </tr>
       <tr class="r1">
         <td>10</td>
         <td class="num">508</td>
         <td>18000 (5 hr)</td>
         <td class="num">347</td>
       </tr>
       <tr class="r2">
         <td>20</td>
         <td class="num">579</td>
         <td>21600 (6 hr)</td>
         <td class="num">1,091</td>
       </tr>
       <tr class="r1">
         <td>30</td>
         <td class="num">305</td>
       a href=  <td>28800 (8 hr)</td>
         <td class="num">318</td>
       </tr>
       <tr class="r2">
         <td>60 (1 min)</td>
         <td class="num">11,553</td>
         <td>43200 (12 hr)</td>
         <td class="num">297</td>
       </tr>
       <tr class="r1">
         <td>120 (2 min)</td>
         <td class="num">676</td>
         <td>86400 (1 day)</td>
         <td class="num">5,546</td>
       </tr>
       <tr class="r2">
         <td>300 (5 min)</td>
         <td class="num">2,224</td>
         <td>172800 (2 day)</td>
         <td class="num">262</td>
       </tr>
       <tr class="r1">
         <td>600 (10 min)</td>
         <td class="num">9,848</td>
         <td>259200 (3 day)</td>
         <td class="num">482</td>
       </tr>
       <tr class="r2">
         <td>900 (15 min)</td>
         <td class="num">808</td>
         <td>432000 (5 day)</td>
         <td class="num">384</td>
       </tr>
       <tr class="r1">
         <td>1200 (20 min)</td>
         <td class="num">261</td>
         <td>604800 (7 day)</td>
         <td class="num">665</td>
       </tr>
       <tr class="r2">
         <td>1800 (30 min)</td>
         <td class="num">1,295</td>
         <td>864000 (10 day)</td>
         <td class="num">200</td>
       </tr>
       <tr class="r1">
         <td>3600 (1 hr)</td>
         <td class="num">3,735</td>
         <td>1209600 (14 day)</td>
         <td class="num">651</td>
       </tr>
       <tr class="r2">
         <td>7200 (2 hr)</td>
         <td class="num">1,773</td>
         <td>2592000 (1 month)</td>
         <td class="num">715</td>
       </tr>
    </table>

    <h3 id="vary"><code class="skeyw">&quot;Vary&quot;</code> HTTP Header field</h3>
    <p>This field consists of a comma-separated list of other header fields that 
    are used to determine:</p>

    <blockquote style="background-color: #ffffcc; border: thin solid #cccccc; padding: 5px"><p>&quot;... 
    whether a cache is permitted to use the response to reply to a subsequent request 
    without revalidation. For uncacheable or stale responses, the Vary field value 
    advises the user agent about the criteria that were used to select the representation.&quot;</p></blockquote>

    <p>The full <a href="httpheaders-vary-url.htm">per-URL frequency table</a> of 
    unique values found for this field is not very extensive, but a quick summary 
    is still useful. Notice that <span class="string">&quot;accept-encoding&quot;</span> is 
    the dominant value here.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6G-1:</strong> 
       &quot;Vary&quot; value component frequency table</caption>
       <tr>
         <th>Value component</th>
         <th>Frequency</th>
       </tr>
       <tr class="r1">
         <td>accept-encoding</td>
         <td class="num">119,130</td>
       </tr>
       <tr class="r2">
         <td>host</td>
         <td class="num">47,727</td>
       </tr>
       <tr class="r1">
         <td>user-agent</td>
         <td class="num">41,469</td>
       </tr>
       <tr class="r2">
         <td>*</td>
         <td class="num">36,485</td>
       </tr>
       <tr class="r1">
         <td>cookie</td>
         <td class="num">8,845</td>
       </tr>
       <tr class="r2">
         <td>accept-language</td>
         <td class="num">1,267</td>
       </tr>
       <tr class="r1">
         <td>nfinfo</td>
         <td class="num">568</td>
       </tr>
       <tr class="r2">
         <td>negotiate</td>
         <td class="num">428</td>
       </tr>
       <tr class="r1">
         <td>x-forwarded-host</td>
         <td class="num">421</td>
       </tr>
       <tr class="r2">
         <td>referer</td>
         <td class="num">48</td>
       </tr>
    </table>

    <h3 id="sslcipher"><code class="skeyw">&quot;SSL-Cipher&quot;</code> HTTP Header field</h3>
    <h4>Popularity: a small sample space, but more to come</h4>
    <p>In the URL set that MAMA analyzed, there were relatively few URLs using 
    the HTTPS protocol&#8212;only 4,994. MAMA detects all <code class="skeyw">SSL-Cipher</code> 
    HTTP Header fields due to a past request from an Opera developer to discover what cipher 
    types are in use, but MAMA&#39;s sample space is not overly large. To satisfy 
    the original request fully, a much deeper study of HTTPS domains was performed 
    and will be presented as an adjunct to this study at a later time. As a 
    consequence, I will not go into great depth about this header field here.</p>

    <p>The SSL settings are expected to be uniform across a given Web server, so 
    the focus here is <code class="skeyw">SSL-Cipher</code> values on a per-domain basis 
    (<a href="httpheaders-sslcipher-dom.htm">full frequency table</a>). The 4,994 
    HTTPS URLs are from 4,355 unique domains. Among these domains, two cipher strings
    are rather evenly dominant: <span class="string">&quot;RC4-MD5&quot;</span> and 
    <span class="string">&quot;DHE-RSA-AE256-SHA&quot;</span>. Other values also 
    occurred, although with far lower frequency.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6H-1:</strong> 
       SSL Cipher types</caption>
       <tr>
         <th>Cipher types</th>
         <th>Frequency</th>
         <th>Percentage<br />HTTPS URLs</th>
       </tr>
       <tr class="r1">
         <td>RC4-MD5</td>
         <td class="num">1,729</td>
         <td class="num">39.70%</td>
       </tr>
       <tr class="r2">
         <td>DHE-RSA-AES256-SHA</td>
         <td class="num">1,674</td>
         <td class="num">38.44%</td>
       </tr>
       <tr class="r1">
         <td>Other</td>
         <td class="num">953</td>
         <td class="num">21.88%</td>
       </tr>
    </table>

    <h4>HTTPS headers from an HTTP URL?</h4>
    <p>One would expect that only HTTPS URLs would deliver an 
    <code class="skeyw">SSL-Cipher</code> header, but that is not always the 
    case. Some 4,994 URLs used the HTTPS protocol, but in fact 4,997 URLs had 
    a non-empty <code class="skeyw">SSL-Cipher</code> header field&#8212;three 
    non-HTTPS servers were sending the header as well.</p>

    <table cellspacing="0" cellpadding="3">
    <caption class="comment" style="caption-side: bottom"><strong>Fig 6H-2:</strong> 
       HTTP Sites sending SSL headers</caption>
       <tr>
         <th>URL</th>
       </tr>
       <tr class="r1">
         <td><a href="http://www.nfc.usda.gov/">http://www.nfc.usda.gov/</a></td>
       </tr>
       <tr class="r2">
         <td><a href="http://www.pbefcu.com/">http://www.pbefcu.com/</a></td>
       </tr>
       <tr class="r1">
         <td><a href="http://www.simap.ch/">http://www.simap.ch/</a></td>
       </tr>
    </table>
    

    <h3 id="other">The other HTTP Header fields</h3>
    <p>Several of the other popular HTTP Headers were also analyzed but did not 
    yield much in the way of interesting trends to present here. For instance, 
    when the <code class="skeyw">Client-Transfer-Encoding</code> header is actually 
    used, it only yielded the value <span class="string">&quot;chunked&quot;</span>. The 
    <a href="httpheaders-contentlang-url.htm">values for 
    <code class="skeyw">Content-Language</code></a> have a fair amount of variety 
    but are not otherwise very remarkable. Other fields like 
    <code class="skeyw">Content-Length</code>, <code class="skeyw">Etag</code>, 
    and <code class="skeyw">Set-Cookie</code> produced so many unique random 
    values that there was no point in searching for trends. For some fields that 
    had small result sets, like the <code class="skeyw">Pragma</code> header, 
    the only thing that stood out was how dominant a single value was 
    (<span class="string">&quot;no-cache&quot;</span>: 98% of the time). The 
    <code class="skeyw">Pragma</code> field also demonstrated the same sort of 
    curiosity found in fields like the <code class="skeyw">Connection</code> 
    header&#8212;that the specification writers&#39; original choice of the field 
    name was sometimes unfortunate in that some keywords are just easily misspelled, 
    such as <span class="string">&quot;cache&quot;</span> 
    giving way to semi-frequent variations like <span class="string">&quot;chache&quot;</span>, 
    <span class="string">&quot;cashe&quot;</span> and <span class="string">&quot;cahce&quot;</span>.</p>


<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-the-average-web-page/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: The &quot;average&quot; Web page</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: W3C validator research</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
