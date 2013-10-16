Title: MAMA: HTTP headers report
----
Date: 2008-10-31 08:28:03
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

<h1></h1>

<h2>Introduction</h2>

<p>Before we start discussing the main part of MAMA&#39;s results on markup, CSS, and 
   script, we need to start at the logical beginning of our story. Any page that a 
   browser displays begins with a HTTP transaction. The requester asks a Web 
   server for a document, and the server responds with important meta-information 
   about the HTTP transaction response before moving forward and delivering the bulk 
   of the response&#8212;the document itself. This HTTP response contains many items 
   worth examining. Some may consider this topic dull&#8212; it is an easy claim 
   to make that most authors will never have a need to know about the details of the 
   HTTP transport layer in the process of writing their documents. However, it all 
   starts with the HTTP headers&#8212; it is the basis for all the rest that follows 
   and is critical for us to look at to produce a cohesive exploration of Web 
   documents.</p>

<p>Read the first report in the series - <a href="http://dev.opera.com/articles/view/mama-markup-validation-report/">MAMA: Markup validation report</a> - if you haven&#39;t already done so. For more on MAMA, check out the <a href="http://dev.opera.com/articles/view/mama/">MAMA homepage</a>. For more on HTTP headers, check out the <a href="http://dev.opera.com/articles/view/mama-http-headers/">full HTTP header results</a>.</p>

<h2>MAMA&#39;s HTTP request headers</h2>

<p>We must first look at MAMA&#39;s HTTP request headers before looking at how Web 
   servers responded to MAMA. The initial HTTP request is the first link in the 
   chain, and it shapes much of what follows. For this study, MAMA tried to 
   experience the Web as closely as possible to how Opera would experience it.
   Of particular interest is MAMA&#39;s User-Agent string:</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">MAMA&#39;s HTTP request headers</caption>
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

<p class="note"><strong>Note:</strong> The <code class="skeyw">Accept-Language</code> 
   and <code class="skeyw">Accept-Charset</code> values chosen reflect the author&#39;s 
   own particular language bias. This can have an affect on what is served in the 
   HTTP response.</p>

<h2 id="anatomy">The HTTP Response&#8212; general anatomy</h2>
<p>The HTTP response block consists of a &quot;status line&quot; followed by any number 
   of newline-separated header field/value pairs. HTTP/1.1 
   (<a href="http://www.ietf.org/rfc/rfc2616.txt">RFC 2616</a>) provides 
   considerable detail about the anatomy of an HTTP response, but in this 
   overview we will only examine some of its most popular field/value components.
   The format that HTTP header name/value pairs follows is generally:</p>

   <p class="note">[Field Name (case-insensitive)]: [Field Value]</p>

<h2>HTTP header response fields</h2>

<p>First we will take a look at the most popular HTTP header fields in MAMA&#39;s URL set. 
   Three fields were found to be nearly universal: <code class="skeyw">Content-Type</code> 
   (the MIME type of the document), <code class="skeyw">Date</code> (the date of the HTTP 
   transaction) and <code class="skeyw">Server</code> (information about the Web server 
   sending the HTTP response).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"> 
   Most popular HTTP header fields (top 10)</caption>
   <tr>
     <th>Header name</th>
     <th>Quantity</th>
     <th>Percentage</th>
     <th rowspan="6">&#xA0;</th>
     <th>Header name</th>
     <th>Quantity</th>
     <th>Percentage</th>
   </tr> 
   <tr class="r1">
     <td><code class="skeyw">Content-Type</code></td>
     <td class="num">3,508,919</td>
     <td class="num">100.0%</td>
     <td><code class="skeyw">Last-Modified</code></td>
     <td class="num">2,129,100</td>
     <td class="num">60.7%</td>
   </tr>
   <tr class="r2">
     <td><code class="skeyw">Date</code></td>
     <td class="num">3,504,603</td>
     <td class="num">99.9%</td>
     <td><code class="skeyw">Content-Range</code></td>
     <td class="num">2,068,687</td>
     <td class="num">59.0%</td>
   </tr>
   <tr class="r1">
     <td><code class="skeyw">Server</code></td>
     <td class="num">3,465,179</td>
     <td class="num">98.8%</td>
     <td><code class="skeyw">ETag</code></td>
     <td class="num">1,954,567</td>
     <td class="num">55.7%</td>
   </tr>
   <tr class="r2">
     <td><code class="skeyw">Connection</code></td>
     <td class="num">2,851,099</td>
     <td class="num">81.3%</td>
     <td><code class="skeyw">Accept-Ranges</code></td>
     <td class="num">1,870,170</td>
     <td class="num">53.3%</td>
   </tr>
   <tr class="r1">
     <td><code class="skeyw">Content-Length</code></td>
     <td class="num">2,534,203</td>
     <td class="num">72.2%</td>
     <td><code class="skeyw">X-Powered-By</code></td>
     <td class="num">1,348,347</td>
     <td class="num">38.4%</td>
   </tr>
</table>

<p>Although many of the other HTTP header fields are not as ubiquitous as the 
   top 3, we can see from the top 10 that many other headers are used <strong>VERY</strong> 
   frequently. The average is 9 fields for an HTTP header.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"> 
   Popularity of HTTP header field quantity (top 10)</caption>
   <tr>
     <th>Number<br />of fields</th>
     <th>Quantity</th>
     <th>Percentage</th>
   </tr>
   <tr class="r1">
     <td>9</td>
     <td class="num">1,601,744</td>
     <td class="num">45.6%</td>
   </tr>
   <tr class="r2">
     <td>10</td>
     <td class="num">377,903</td>
     <td class="num">10.8%</td>
   </tr>
   <tr class="r1">
     <td>7</td>
     <td class="num">373,266</td>
     <td class="num">10.6%</td>
   </tr>
   <tr class="r2">
     <td>6</td>
     <td class="num">327,701</td>
     <td class="num">9.3%</td>
   </tr>
   <tr class="r1">
     <td>8</td>
     <td class="num">307,215</td>
     <td class="num">8.8%</td>
   </tr>
   <tr class="r2">
     <td>5</td>
     <td class="num">196,896</td>
     <td class="num">5.6%</td>
   </tr>
   <tr class="r1">
     <td>11</td>
     <td class="num">160,630</td>
     <td class="num">4.6%</td>
   </tr>
   <tr class="r2">
     <td>12</td>
     <td class="num">82,386</td>
     <td class="num">2.4%</td>
   </tr>
   <tr class="r1">
     <td>13</td>
     <td class="num">33,923</td>
     <td class="num">1.0%</td>
   </tr>
   <tr class="r2">
     <td>4</td>
     <td class="num">15,652</td>
     <td class="num">0.5%</td>
   </tr>
</table>

<p>The average length of a typical HTTP header in MAMA&#39;s URL set is 381 characters. 
   The smallest HTTP header block encountered was 66 characters, while the longest
   found was 9,725 characters.</p>

<h2><code class="skeyw">Content-Type</code> HTTP header &quot;charset&quot; value</h2>

<p>While the purpose of the <code class="skeyw">Content-Type</code> header to 
   describe a document&#39;s MIME type is naturally ubiquitous, MAMA&#39;s URL selection 
   process eliminated MIME types that it could not analyze. The URLs that MAMA 
   surveyed were almost all <span class="string">&quot;text/html&quot;</span>, but other values were also encountered.</p>

<p>One optional portion of the <code class="skeyw">Content-Type</code> header 
   field does deserve some extra scrutiny. It is the <span class="string">&quot;Charset&quot;</span> 
   parameter, found in 688,819 of MAMA&#39;s URLs (19.6%):</p>

<p class="note"><strong>Ex:</strong> <code class="skeyw">Content-Type</code>: <span class="string">text/html; charset=utf-8</span></p>

<p>The charset field describes the encoding used for the document. Two values are 
   dominant and roughly equal here&#8212;<span class="string">&quot;utf-8&quot;</span> and 
   <span class="string">&quot;iso-8859-1&quot;</span>, with the former value having the slight edge.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"> 
   Popular Server HTTP header values</caption>
   <tr>
     <th>Encoding</th>
     <th>Quantity</th>
     <th>Percentage<br />overall</th>
     <th>Percentage using<br />HTTP header charset</th>
   </tr>
   <tr class="r1">
     <td>utf-8</td>
     <td class="num">318,351</td>
     <td class="num">9.1%</td>
     <td class="num">46.2%</td>
   </tr>
   <tr class="r2">
     <td>iso-8859-1</td>
     <td class="num">286,967</td>
     <td class="num">8.2%</td>
     <td class="num">41.7%</td>
   </tr>
   <tr class="r1">
     <td>windows-1251</td>
     <td class="num">32,154</td>
     <td class="num">0.9%</td>
     <td class="num">4.7%</td>
   </tr>
   <tr class="r2">
     <td>iso-8859-2</td>
     <td class="num">9,033</td>
     <td class="num">0.3%</td>
     <td class="num">1.3%</td>
   </tr>
   <tr class="r1">
     <td>iso-8859-15</td>
     <td class="num">4,476</td>
     <td class="num">0.1%</td>
     <td class="num">0.7%</td>
   </tr>
   <tr class="r2">
     <td>windows-1252</td>
     <td class="num">3,424</td>
     <td class="num">0.1%</td>
     <td class="num">0.5%</td>
   </tr>
   <tr class="r1">
     <td>us-ascii</td>
     <td class="num">3,228</td>
     <td class="num">0.1%</td>
     <td class="num">0.5%</td>
   </tr>
   <tr class="r2">
     <td>shift_jis</td>
     <td class="num">2,869</td>
     <td class="num">0.1%</td>
     <td class="num">0.4%</td>
   </tr>
   <tr class="r1">
     <td>[none/empty]</td>
     <td class="num">2,701</td>
     <td class="num">0.1%</td>
     <td class="num">0.4%</td>
   </tr>
   <tr class="r2">
     <td>euc-jp</td>
     <td class="num">2,589</td>
     <td class="num">0.1%</td>
     <td class="num">0.4%</td>
   </tr>
</table>

<h2>The <code class="skeyw">Server</code> HTTP header</h2>

<p>This is an interesting value to examine. The main story we see here illustrates
   a long-standing competition between the two most popular Web servers, Apache 
   and Microsoft&#39;s IIS. MAMA&#39;s numbers show the distribution heavily skewed in
   Apache&#39;s favor (67.7% as versus 25.9% for IIS). This balance does not match 
   <a href="http://news.netcraft.com/archives/2007/11/index.html">Netcraft&#39;s 
   numbers for the same time period</a>: Netcraft&#39;s data shows Apache as the 
   dominant Web server, but less so than in MAMA&#39;s case (Apache: 50.76%, IIS: 35.84%).</p>

<p>The URL set used in Rene Saarsoo&#39;s previous study of 
   <a href="http://triin.net/2006/06/12/HTTP_headers">&quot;Coding practices of Web pages&quot;</a> 
   shares a great deal of overlap with MAMA, and its HTTP header <code class="skeyw">Server</code> 
   field usage ratio is very similar to MAMA&#39;s. The main conclusion we can draw from 
   this is that the Dmoz URL set itself (which is MAMA&#39;s main URL source in this 
   study) has a slight bias towards Apache over the Web-at-large that Netcraft 
   appears to cover.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"> 
   Popular Server HTTP header values</caption>
   <tr>
     <th>Web<br />server</th>
     <th>Number<br />domains</th>
     <th>Percent<br />domains</th>
   </tr> 
   <tr class="r1">
     <td>Apache</td>
     <td class="num">2,011,088</td>
     <td class="num">67.7%</td>
   </tr>
   <tr class="r2">
     <td>Microsoft IIS</td>
     <td class="num">769,375</td>
     <td class="num">25.9%</td>
   </tr>
   <tr class="r1">
     <td>Other</td>
     <td class="num">189,275</td>
     <td class="num">6.4%</td>
   </tr>
</table>

<h2>The <code class="skeyw">Content-Length</code> HTTP header</h2>

<p>This header field, used in ~70% of MAMA&#39;s URLs, tells the requester exactly how 
   long the incoming document is. Does it tell the truth? Luckily, we have a way 
   to measure this. MAMA assessed the length of every document it analyzed by 
   using Perl&#39;s <code>length</code> function against the received content body. 
   Comparing these two values, MAMA finds that the <code class="skeyw">Content-Length</code> 
   values are rarely incorrect. If they are, they are only off by 1. Out of 
   2,533,890 URLs using the <code class="skeyw">Content-Length</code> HTTP header, 
   all were the same as MAMA&#39;s measured length value, except:</p> 

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"> 
   Comparison of MAMA&#39;s actual document length to the stated Content-Length HTTP header</caption>
   <tr>
     <th>Comparison condition</th>
     <th>Quantity</th>
   </tr> 
   <tr class="r1">
     <td><code class="skeyw">Content-Length</code> exceeded MAMA&#39;s count by 1</td>
     <td class="num">663</td>
   </tr>
   <tr class="r2">
     <td>MAMA&#39;s length exceeded <code class="skeyw">Content-Length</code> by 1</td>
     <td class="num">2</td>
   </tr>
   <tr class="r1">
     <td><code class="skeyw">Content-Length</code> value could not be compared to MAMA&#39;s length</td>
     <td class="num">58</td>
   </tr>
</table>

<h2>Summary</h2>
<p>It is very likely that the typical Web page author will have never seen the 
   HTTP headers with which their pages are served. Many of the common HTTP headers
   are the moral equivalent of boring paperwork that has little effect on the author. 
   However, authors should not make the mistake of simply dismissing them entirely&#8212; 
   they lay the groundwork for the document that follows. Some of the popular 
   header fields (like those influencing a document&#39;s caching and encoding behavior)
   directly influence the end-user&#39;s experience of the pages they&#39;ve spent so 
   much effort creating.</p>
