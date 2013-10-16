Title: MAMA: Hyperlinks
----
Date: 2008-11-21 10:50:29
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-body-structure/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: BODY structure</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-phrase-block-list/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Phrase, block, list, and other elements</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#totals">Hyperlink totals</a></li>
    <li><a href="#protocols">Hyperlink protocols</a></li>
    <li><a href="#area">The AREA element</a></li>
    <li><a href="#a">The A element</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Hyperlinks are the glue that holds the Web together. Without them, the Web 
   wouldn&#39;t be a web at all&#8212;just an un-organized group consisting of billions 
   of isolated documents. Aside from the URL set to which MAMA already has access, the 
   treasure trove of links and metadata are really the only easy method MAMA could 
   use to expand its URL set in the future&#8212;and what an expansion that would be! 
   With MAMA&#39;s URL set having an average of 38 hyperlinks per page, the ~3.5 million 
   URLs it has already analyzed translates to roughly 130 million more. We are not 
   sure yet whether MAMA could handle that many in its database, but a significant 
   amount of URL atrophy has been noticeable during this research. There is 
   definitely security in numbers for future MAMA Web crawls.</p>

<h2 id="totals">Hyperlink totals</h2>
<p>MAMA considered each occurrence of an <code class="att">Href</code> attribute 
   in an <code class="elem">AREA</code> or <code class="elem">A</code> element 
   as a hyperlink and kept a running tally for each URL analyzed. It also compared 
   the domain of the URL in a hyperlink with the domain of the page being analyzed 
   in order to discover how many external domains were being referenced in a 
   document. The winner for most URLs at the time of writing seems to be 
   <a href="http://www.scheffau.at/">http://www.scheffau.at/</a>, which has 37,538 
   hyperlinks (in the sub-frames). In all, 2,408,662 of the 3,337,666 URLs that contained 
   any hyperlinks (72.17%) had at least one linking outside the domain of the URL 
   being analyzed. The average number of hyperlinks per document was 38.41.</p>

<h2 id="protocols">Hyperlink protocols</h2>
<p>A facet of every hyperlink that was tracked was the protocol of the URL. MAMA&#39;s 
   analysis was confined to the HTTP protocol (and some HTTPS), but having a 
   repository of URLs using other protocols is expected to be very helpful in 
   Opera&#39;s future testing and development efforts. The storing of protocol types used 
   in hyperlinks was limited to non-HTTP protocols, because the overwhelming 
   majority was expected to be the HTTP protocol; MAMA only
   wanted to track and store data on the exceptions to the rule.</p> 
   
   <p>You can throw a rock in any direction on the Web and hit an HTTP URL&#8212;they are 
   a dime a dozen. Having a ready cache of URLs that make use of/link to esoteric 
   protocols can be a useful thing to have available. Notice that HTTPS is the 
   dominant non-HTTP protocol, by far. The next-nearest neighbor is the FILE 
   protocol, which is puzzling&#8212;for documents on the publicly accessible Web, 
   these should all be non-functional links. Also making their presence known are 
   FTP, RSS (&quot;feedhttp&quot;), and&#8212;ahem&#8212;&quot;NHP&quot;. Also notice 
   that the simple 4-letter string <span class="string">&quot;http&quot;</span> is apparently 
   difficult to spell&#8212;variants such as &quot;hhtp&quot;, &quot;htto&quot; and &quot;htp&quot; occur far too often.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> 
   Popular non-HTTP hyperlink protocols<br />(See also the <a href="protocollist-url.htm">full 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>Protocol</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>Protocol</th><th>Frequency</th></tr>
   <tr class="r1"><td>https</td><td class="num">236,389</td><td>mms</td><td class="num">2,419</td></tr>
   <tr class="r2"><td>file</td><td class="num">34,056</td><td>callto</td><td class="num">1,030</td></tr>
   <tr class="r1"><td>ftp</td><td class="num">8,207</td><td>irc</td><td class="num">832</td></tr>
   <tr class="r2"><td>nhp</td><td class="num">3,993</td><td>mailto</td><td class="num">706</td></tr>
   <tr class="r1"><td>feedhttp</td><td class="num">2,957</td><td>telnet</td><td class="num">601</td></tr>
</table>

<h2 id="area">The <code class="elem">AREA</code> element</h2>
<p>Client Side Image Maps (CSIM) allow one or more activate-able shapes on an 
   image to be defined. The <code class="elem">AREA</code> element (which needs 
   to be paired with the <code class="elem">MAP</code> element for full CSIM 
   functionality) has several attributes that control the geometry of the hyperlink. 
   The <code class="elem">AREA</code> attribute of greatest interest in this section 
   is <code class="att">Href</code>. Just as with the <code class="att">Href</code> 
   attribute for the <code class="elem">A</code> element, it specifies the destination 
   at the other side of the link jump.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> AREA element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">AREA</code></td><td class="num">453,187</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Coords</code></td><td class="num">452,272</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Href</code></td><td class="num">450,478</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Shape</code></td><td class="num">439,720</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Alt</code></td><td class="num">203,624</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Nohref</code></td><td class="num">13,570</td></tr>
</table>

<h2 id="a">The <code class="elem">A</code> element</h2>
<p>The <code class="elem">A</code> element has a number of attributes, ranging from 
   the popular (the <code class="att">Href</code> attribute for the <code class="elem">A</code> 
   element is actually <strong>THE</strong> most popular of any attribute in all the 
   URLs that MAMA analyzed), to the esoteric and the forgotten (<code class="att">Methods</code> 
   and <code class="elem">Urn</code>).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-1:</strong> A element/attribute frequency</caption>
   <tr valign="bottom"><th>ELEMENT/Attribute</th><th>Frequency</th><th rowspan="10">&#xA0;</th><th>ELEMENT/Attribute</th><th>Frequency</th></tr>
   <tr class="r1"><td><code class="elem">A</code></td><td class="num">3,307,397</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Shape</code></td><td class="num">4,058</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Href</code></td><td class="num">3,304,834</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Hreflang</code></td><td class="num">3,065</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Target</code></td><td class="num">1,978,018</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Rev</code></td><td class="num">761</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Title</code></td><td class="num">658,820</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Disabled</code></td><td class="num">556</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Name</code></td><td class="num">485,168</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Coords</code></td><td class="num">201</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Rel</code></td><td class="num">96,613</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Charset</code></td><td class="num">137</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Accesskey</code></td><td class="num">54,876</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Methods</code></td><td class="num">62</td></tr>
   <tr class="r2"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Tabindex</code></td><td class="num">14,898</td><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Urn</code></td><td class="num">58</td></tr>
   <tr class="r1"><td>&#xA0;&#xA0;&#xA0;&#xA0;<code class="att">Type</code></td><td class="num">12,251</td><td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<h3><code class="elem">A</code> <code class="att">Rel</code> attribute</h3>
<p>The <code class="att">Rel</code> attribute for the <code class="elem">A</code> 
   element expresses the relationship that the destination URL has to the current 
   URL. Until relatively recently, this attribute was under-used. However, its 
   <a href="http://microformats.org/wiki/existing-rel-values">use has grown in 
   the last few years as microformats have been embraced</a>. The most popular 
   values for this attribute are <span class="string">&quot;nofollow&quot;</span> at more 
   than 2-to-1 over the next-nearest values of <span class="string">&quot;bookmark&quot;</span> 
   and <span class="string">&quot;tag&quot;</span>.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-2:</strong> 
   Top A Rel values<br />(See also the <a href="arellist-url.htm">full 
   frequency table</a>.)</caption>
   <tr valign="bottom"><th>A Rel Attribute Value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">nofollow</span></td><td class="num">46,179</td></tr>
   <tr class="r2"><td><span class="string">bookmark</span></td><td class="num">20,524</td></tr>
   <tr class="r1"><td><span class="string">tag</span></td><td class="num">20,445</td></tr>
   <tr class="r2"><td><span class="string">category</span></td><td class="num">13,012</td></tr>
   <tr class="r1"><td><span class="string">external</span></td><td class="num">7,473</td></tr>
   <tr class="r2"><td><span class="string">license</span></td><td class="num">6,330</td></tr>
   <tr class="r1"><td><span class="string">alternate</span></td><td class="num">5,252</td></tr>
   <tr class="r2"><td><span class="string">lightbox</span></td><td class="num">2,917</td></tr>
   <tr class="r1"><td><span class="string">me</span></td><td class="num">1,929</td></tr>
   <tr class="r2"><td><span class="string">self</span></td><td class="num">1,630</td></tr>
</table>

<h3><code class="elem">A</code> <code class="att">Name</code> attribute</h3>
<p>The <code class="att">Name</code> attribute, also known as an anchor, identifies 
   a location in a document. Hyperlinks can link to a specific part of a document 
   using an anchor. The values that this attribute may take can be semantically 
   significant. The top values for <code class="att">Name</code> reflect this, 
   representing common locations or controls such as 
   <span class="string">&quot;top&quot;</span>, <span class="string">&quot;bottom&quot;</span> 
   and <span class="string">&quot;menu&quot;</span> found in many documents. The <span class="string">&quot;Top&quot;</span> value is 
   by far the most popular, occurring at least an order of magnitude more than 
   any other value.</p>

<p class="note"><strong>Note:</strong> The values for this attribute highlight 
   an interesting trend&#8212;there are many popular values of the form 
   <span class="string">&quot;dk[number]&quot;</span>. In all, 21 of the top 26 spots in the 
   frequency table follow this pattern, with very similar quantities 
   (~6000-9000 times each), with the lowest values like <span class="string">&quot;dk3&quot;</span> 
   having the highest frequency and higher values like <span class="string">&quot;dk18&quot;</span> 
   having the lowest frequency. Testing several representative URLs using these 
   <code class="elem">A</code> <code class="att">Name</code> values (such as 
   <a href="http://www.plasmatvrentals.com/">http://www.plasmatvrentals.com/</a> 
   and <a href="http://www.weddingfavour.net/">http://www.weddingfavour.net/</a>), 
   they <strong>ALL</strong> seem to be from a single domain-parking site 
   (domainsponsor.com). This is unfortunate and skews MAMA&#39;s overall results. 
   Next time around, this fact will be used to filter out this particular domain parker.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 5-3:</strong> 
   Popular A Name values<br />(See also the <a href="anamelist-url.htm">full frequency table</a>.)</caption>
   <tr valign="bottom"><th>A name value</th><th>Frequency</th><th rowspan="7">&#xA0;</th><th>A name value</th><th>Frequency</th></tr>
   <tr class="r1"><td><span class="string">top</span></td><td class="num">163,733</td><td><span class="string">links</span></td><td class="num">5,057</td></tr>
   <tr class="r2"><td><span class="string">content</span></td><td class="num">15,258</td><td><span class="string">oben</span> (German for &quot;top&quot;)</td><td class="num">4,781</td></tr>
   <tr class="r1"><td><span class="string">bottom</span></td><td class="num">9,142</td><td><span class="string">news</span></td><td class="num">4,318</td></tr>
   <tr class="r2"><td><span class="string">up</span></td><td class="num">7,147</td><td><span class="string">menu</span></td><td class="num">4,137</td></tr>
   <tr class="r1"><td><span class="string">contact</span></td><td class="num">5,841</td><td><span class="string">topofpage</span></td><td class="num">3,998</td></tr>
   <tr class="r2"><td><span class="string">pagetop</span></td><td class="num">5,559</td><td><span class="string">navigation</span></td><td class="num">3,920</td></tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-body-structure/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: BODY structure</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-phrase-block-list/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Phrase, block, list, and other elements</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

