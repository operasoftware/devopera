Title: MAMA: Basic document structure
----
Date: 2008-11-07 13:05:45
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: W3C validator research</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-document-encodings/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Document encodings</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#docsizes">Document statistics</a></li>
    <li><a href="#boms">Byte order marks</a></li>
    <li><a href="#doctypes">Doctypes</a></li>
    <li><a href="#tagratio">A document&#39;s &quot;Tag Ratio&quot;</a></li>
    <li><a href="#elems">Markup elements</a></li>
    <li><a href="#attrs">Markup attributes</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>To get started in MAMA&#39;s look at markup practices and trends, we will first look at 
   overall document sizes; then, we will examine some of the basic document structural components 
   (Byte Order Marks and Doctypes). Finally, the full frequency tables for both 
   elements and attributes will be presented. It is expected that most readers will 
   find the breakdowns in the individual sections sufficient for most purposes. 
   Those wishing to dig into the meat of this research are encouraged 
   to look deeply at the complete, unvarnished <a href="elemlist-url.htm">elements</a> 
   and <a href="attrlist-url.htm">attributes</a> 
   frequency tables for quicker cross-comparison between markup topics.</p>

<h2 id="docsizes">Document statistics</h2>
<h3>Document size</h3>
<p>This first metric is the integer character length of the original main document. 
   No document dependencies are counted in this number. The average document size 
   of MAMA&#39;s analyzed URLs was 16,406 characters. In all, ~55 URLs hit MAMA&#39;s hard limit 
   ceiling of 5 Megabytes.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> Document sizes</caption>
   <tr valign="bottom">
     <th>Size range</th>
     <th>Frequency</th>
     <th rowspan="11">&#xA0;</th>
     <th>Size range</th>
     <th>Frequency</th>
     <th rowspan="11">&#xA0;</th>
     <th>Size range</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td>=0</td>
     <td class="num">2,217</td>
     <td>&gt;8000 &amp;&amp; &lt;=9000</td>
     <td class="num">136,348</td>        
     <td>&gt;35000 &amp;&amp; &lt;=40000</td>
     <td class="num">76,277</td>
   </tr>
   <tr class="r2">
     <td>&gt;0 &amp;&amp; &lt;= 500</td>
     <td class="num">137,827</td>
     <td>&gt;9000 &amp;&amp; &lt;=10000</td>
     <td class="num">127,766</td>
     <td>&gt;40000 &amp;&amp; &lt;=45000</td>
     <td class="num">59,142</td>
   </tr>
   <tr class="r1">
     <td>&gt;500 &amp;&amp; &lt;=1000</td>
     <td class="num">202,031</td>
     <td>&gt;10000 &amp;&amp; &lt;=12000</td>
     <td class="num">229,676</td>
     <td>&gt;45000 &amp;&amp; &lt;=50000</td>
     <td class="num">44,190</td>
   </tr>
   <tr class="r2">
     <td>&gt;1000 &amp;&amp; &lt;=2000</td>
     <td class="num">255,084</td>
     <td>&gt;12000 &amp;&amp; &lt;=14000</td>
     <td class="num">194,834</td>
     <td>&gt;50000 &amp;&amp; &lt;=75000</td>
     <td class="num">112,481</td>
   </tr>
   <tr class="r1">
     <td>&gt;2000 &amp;&amp; &lt;=3000</td>
     <td class="num">188,206</td>
     <td>&gt;14000 &amp;&amp; &lt;=16000</td>
     <td class="num">162,359</td>
     <td>&gt;75000 &amp;&amp; &lt;=100000</td>
     <td class="num">40,349</td>
   </tr>
   <tr class="r2">
     <td>&gt;3000 &amp;&amp; &lt;=4000</td>
     <td class="num">170,332</td>
     <td>&gt;16000 &amp;&amp; &lt;=18000</td>
     <td class="num">135,076</td>
     <td>&gt;100000 &amp;&amp; &lt;=150000</td>
     <td class="num">27,382</td>
   </tr>
   <tr class="r1">
     <td>&gt;4000 &amp;&amp; &lt;=5000</td>
     <td class="num">159,744</td>
     <td>&gt;18000 &amp;&amp; &lt;=20000</td>
     <td class="num">112,276</td>
     <td>&gt;150000 &amp;&amp; &lt;=200000</td>
     <td class="num">7,972</td>
   </tr>
   <tr class="r2">
     <td>&gt;5000 &amp;&amp; &lt;=6000</td>
     <td class="num">156,531</td>
     <td>&gt;20000 &amp;&amp; &lt;=25000</td>
     <td class="num">213,093</td>
     <td>&gt;200000 &amp;&amp; &lt;=250000</td>
     <td class="num">3,092</td>
   </tr> 
   <tr class="r1">
     <td>&gt;6000 &amp;&amp; &lt;=7000</td>
     <td class="num">152,619</td>
     <td>&gt;25000 &amp;&amp; &lt;=30000</td>
     <td class="num">147,698</td>
     <td>&gt;250000 &amp;&amp; &lt;=300000</td>
     <td class="num">1,643</td>
   </tr>
   <tr class="r2">
     <td>&gt;7000 &amp;&amp; &lt;=8000</td>
     <td class="num">144,561</td>
     <td>&gt;30000 &amp;&amp; &lt;=35000</td>
     <td class="num">104,822</td>
     <td>&gt;300000</td>
     <td class="num">3,552</td>
   </tr>
</table>

<h3>Document Frame/IFrame sizes</h3>
<p>This is an integer character length that is the aggregate sum of all Frames 
   and IFrames used in a document. In all, 80.78% of all pages had a Frame/IFrame length 
   of 0, and this is an expected result&#8212;any non-zero value means that Frames 
   or IFrames are part of the document infrastructure. The average length of the 
   combined Frame/IFrame components was 3,060.4 characters, but this factors in 
   all the cases where there were no Frames or IFrames. The average length of the 
   Frame/IFrame components where they were <strong>actually used</strong> was 
   15,919.8 characters.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-2:</strong> Frame/IFrame sizes</caption>
   <tr valign="bottom">
     <th>Size range</th>
     <th>Frequency</th>
     <th rowspan="11">&#xA0;</th>
     <th>Size range</th>
     <th>Frequency</th>
     <th rowspan="11">&#xA0;</th>
     <th>Size range</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td>=0</td>
     <td class="num">2,834,569</td>
     <td>&gt;8000 &amp;&amp; &lt;=9000</td>
     <td class="num">27,863</td>
     <td>&gt;35000 &amp;&amp; &lt;=40000</td>
     <td class="num">12,034</td>
   </tr>
   <tr class="r2">
     <td>&gt;0 &amp;&amp; &lt;= 500</td>
     <td class="num">26,035</td>
     <td>&gt;9000 &amp;&amp; &lt;=10000</td>
     <td class="num">25,025</td>
     <td>&gt;40000 &amp;&amp; &lt;=45000</td>
     <td class="num">8,786</td>
   </tr>
   <tr class="r1">
     <td>&gt;500 &amp;&amp; &lt;=1000</td>
     <td class="num">35,043</td>
     <td>&gt;10000 &amp;&amp; &lt;=12000</td>
     <td class="num">43,865</td>
     <td>&gt;45000 &amp;&amp; &lt;=50000</td>
     <td class="num">6,408</td>
   </tr>
   <tr class="r2">
     <td>&gt;1000 &amp;&amp; &lt;=2000</td>
     <td class="num">50,640</td>
     <td>&gt;12000 &amp;&amp; &lt;=14000</td>
     <td class="num">37,049</td>
     <td>&gt;50000 &amp;&amp; &lt;=75000</td>
     <td class="num">16,642</td>
   </tr>
   <tr class="r1">
     <td>&gt;2000 &amp;&amp; &lt;=3000</td>
     <td class="num">41,304</td>
     <td>&gt;14000 &amp;&amp; &lt;=16000</td>
     <td class="num">29,324</td>
     <td>&gt;75000 &amp;&amp; &lt;=100000</td>
     <td class="num">6,411</td>
   </tr>
   <tr class="r2">
     <td>&gt;3000 &amp;&amp; &lt;=4000</td>
     <td class="num">38,274</td>
     <td>&gt;16000 &amp;&amp; &lt;=18000</td>
     <td class="num">24,789</td>
     <td>&gt;100000 &amp;&amp; &lt;=150000</td>
     <td class="num">4,929</td>
   </tr>
   <tr class="r1">
     <td>&gt;4000 &amp;&amp; &lt;=5000</td>
     <td class="num">35,519</td>
     <td>&gt;18000 &amp;&amp; &lt;=20000</td>
     <td class="num">20,177</td>
     <td>&gt;150000 &amp;&amp; &lt;=200000</td>
     <td class="num">3,313</td>
   </tr>
   <tr class="r2">
     <td>&gt;5000 &amp;&amp; &lt;=6000</td>
     <td class="num">32,526</td>
     <td>&gt;20000 &amp;&amp; &lt;=25000</td>
     <td class="num">41,618</td>
     <td>&gt;200000 &amp;&amp; &lt;=250000</td>
     <td class="num">880</td>
   </tr>
   <tr class="r1">
     <td>&gt;6000 &amp;&amp; &lt;=7000</td>
     <td class="num">31,593</td>
     <td>&gt;25000 &amp;&amp; &lt;=30000</td>
     <td class="num">27,106</td>
     <td>&gt;250000 &amp;&amp; &lt;=300000</td>
     <td class="num">376</td>
   </tr>
   <tr class="r2">
     <td>&gt;7000 &amp;&amp; &lt;=8000</td>
     <td class="num">29,351</td>
     <td>&gt;30000 &amp;&amp; &lt;=35000</td>
     <td class="num">17,032</td>
     <td>&gt;300000</td>
     <td class="num">699</td>
   </tr>
</table>

<h3>Document &quot;extras&quot; sizes</h3>
<p>This value is an aggregate sum length of all the &quot;extra&quot; dependencies in a 
   document (not counting embedded objects). It consists of all frames and 
   IFrames content (the Frame/IFrame size count from the previous table), all 
   external script content, and all CSS from external and imported stylesheets. 
   Values of 0 are still expected to have a high representation, but now that we 
   have multiple factors in play, the chances of that happening are greatly 
   reduced. The overall average length of all &quot;extras&quot; is 20,295.7 characters, 
   but it increases to 28,038.3 characters factoring in only the cases 
   where any of the &quot;extras&quot; exist.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-3:</strong> Document &quot;extras&quot; sizes</caption>
   <tr valign="bottom">
     <th>Size range</th>
     <th>Frequency</th>
     <th rowspan="12">&#xA0;</th>
     <th>Size range</th>
     <th>Frequency</th>
     <th rowspan="12">&#xA0;</th>
     <th>Size range</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td>=0</td>
     <td class="num">969,042</td>
     <td>&gt;9000 &amp;&amp; &lt;=10000</td>
     <td class="num">53,271</td>
     <td>&gt;40000 &amp;&amp; &lt;=45000</td>
     <td class="num">69,438</td>
   </tr>
   <tr class="r2">
     <td>&gt;0 &amp;&amp; &lt;= 500</td>
     <td class="num">84,747</td>
     <td>&gt;10000 &amp;&amp; &lt;=12000</td>
     <td class="num">92,431</td>
     <td>&gt;45000 &amp;&amp; &lt;=50000</td>
     <td class="num">53,694</td>
   </tr>
   <tr class="r1">
     <td>&gt;500 &amp;&amp; &lt;=1000</td>
     <td class="num">117,985</td>
     <td>&gt;12000 &amp;&amp; &lt;=14000</td>
     <td class="num">76,680</td>
     <td>&gt;50000 &amp;&amp; &lt;=60000</td>
     <td class="num">81,219</td>
   </tr>
   <tr class="r2">
     <td>&gt;1000 &amp;&amp; &lt;=2000</td>
     <td class="num">178,577</td>
     <td>&gt;14000 &amp;&amp; &lt;=16000</td>
     <td class="num">89,519</td>
     <td>&gt;60000 &amp;&amp; &lt;=70000</td>
     <td class="num">68,595</td>
   </tr>
   <tr class="r1">
     <td>&gt;2000 &amp;&amp; &lt;=3000</td>
     <td class="num">154,796</td>
     <td>&gt;16000 &amp;&amp; &lt;=18000</td>
     <td class="num">73,095</td>
     <td>&gt;70000 &amp;&amp; &lt;=80000</td>
     <td class="num">43,553</td>
   </tr>
   <tr class="r2">
     <td>&gt;3000 &amp;&amp; &lt;=4000</td>
     <td class="num">120,169</td>
     <td>&gt;18000 &amp;&amp; &lt;=20000</td>
     <td class="num">57,694</td>
     <td>&gt;80000 &amp;&amp; &lt;=90000</td>
     <td class="num">33,830</td>
   </tr>
   <tr class="r1">
     <td>&gt;4000 &amp;&amp; &lt;=5000</td>
     <td class="num">97,118</td>
     <td>&gt;20000 &amp;&amp; &lt;=22500</td>
     <td class="num">101,774</td>
     <td>&gt;90000 &amp;&amp; &lt;=100000</td>
     <td class="num">24,456</td>
   </tr>
   <tr class="r2">
     <td>&gt;5000 &amp;&amp; &lt;=6000</td>
     <td class="num">88,678</td>
     <td>&gt;22500 &amp;&amp; &lt;=25000</td>
     <td class="num">88,265</td>
     <td>&gt;100000 &amp;&amp; &lt;=150000</td>
     <td class="num">68,781</td>
   </tr>
   <tr class="r1">
     <td>&gt;6000 &amp;&amp; &lt;=7000</td>
     <td class="num">89,053</td>
     <td>&gt;25000 &amp;&amp; &lt;=30000</td>
     <td class="num">137,810</td>
     <td>&gt;150000 &amp;&amp; &lt;=200000</td>
     <td class="num">26,312</td>
   </tr>
   <tr class="r2">
     <td>&gt;7000 &amp;&amp; &lt;=8000</td>
     <td class="num">66,891</td>
     <td>&gt;30000 &amp;&amp; &lt;=35000</td>
     <td class="num">116,366</td>
     <td>&gt;200000 &amp;&amp; &lt;=250000</td>
     <td class="num">13,022</td>
   </tr>
   <tr class="r1">
     <td>&gt;8000 &amp;&amp; &lt;=9000</td>
     <td class="num">63,567</td>
     <td>&gt;35000 &amp;&amp; &lt;=40000</td>
     <td class="num">89,906</td>
     <td>&gt;250000</td>
     <td class="num">18,866</td>
   </tr>
</table>

<h2 id="boms">Byte Order Marks</h2>
<p>A co-worker asked for MAMA to detect the presence of Byte Order Marks (BOMs), 
   which are used to signal the use of some encoding flavors. The intent was to 
   find real-world examples of pages that used these BOMs so that they could be 
   tested in Opera. Alas, MAMA only detected 3 of the 8 types of BOMs it looked 
   for in the URLs analyzed. A Perl regular expression match against the first 
   5 characters in each URL document was done to detect the following encodings.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> BOM detection patterns in MAMA</caption>
   <tr valign="bottom">
     <th>BOM type</th>
     <th>Perl regexp</th>
   </tr>
   <tr class="r1">
     <td>utf-32 (little-endian)</td>
     <td><code class="regexp">/^(\xff\xfe\x00\x00)/</code></td>
   </tr>
   <tr class="r2">
     <td>utf-32 (big-endian)</td>
     <td><code class="regexp">/^(\x00\x00\xfe\xff)/</code></td>
   </tr>
   <tr class="r1">
     <td>utf-16 (little-endian)</td>
     <td><code class="regexp">/^(\xff\xfe)/</code></td>
   </tr>
   <tr class="r2">
     <td>utf-16 (big-endian)</td>
     <td><code class="regexp">/^(\xfe\xff)/</code></td>
   </tr>
   <tr class="r1">
     <td>utf-8</td>
     <td><code class="regexp">/^(\xef\xbb\xbf)/</code></td>
   </tr>
   <tr class="r2">
     <td>utf-7</td>
     <td><code class="regexp">/^(\x2b\x2f\x76\x38\x2d)/</code></td>
   </tr>
   <tr class="r1">
     <td>scsu</td>
     <td><code class="regexp">/^(\x0e\xfe\xff)/</code></td>
   </tr>
   <tr class="r2">
     <td>bocu-1</td>
     <td><code class="regexp">/^(\xfb\xee\x28)/</code></td>
   </tr>
</table>
    
<h3>BOMs detected</h3>
<p>The 3 BOMs were found in a total of 17,649 URLs (0.50% of all URLs analyzed). 
   The BOM found most often is utf-8.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-2:</strong> BOMs detected in MAMA&#39;s URLs</caption>
   <tr valign="bottom">
     <th>BOM</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td>utf-8</td>
     <td class="num">17,006</td>
   </tr>
   <tr class="r2">
     <td>utf-16 (little-endian)</td>
     <td class="num">647</td>
   </tr>
   <tr class="r1">
     <td>utf-16 (big-endian)</td>
     <td class="num">26</td>
   </tr>
</table>

<h2 id="doctypes">Doctypes</h2>
<p>The Doctype statement is used in two ways. Passively, it proclaims the markup 
   standard to which the document is supposed to adhere. A markup validator can 
   use this information to analyze its conformance to that standard. We 
   <a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/?page=2#doctype">examine 
   the validation aspect of the Doctype and its implications</a> in a separate 
   document. In this section we will look at some of the things we can easily 
   glean from the Doctype, as well as the more active role that Doctypes have 
   taken in recent years in their role as arbiter of the rendering mode that a 
   browser will use.</p>

<h3>Anatomy of a Doctype statement</h3>
<p>Now, we can take a look at the components of a Doctype to see what sort of information it can offer us:</p>
<p class="note">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; 
    &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-1:</strong> Components of a Doctype</caption>
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
     <td>This string specifies the name of the root element for the markup type</td>
   </tr>
   <tr class="r1" valign="top">
     <td><span class="string">&quot;PUBLIC&quot;</span></td>
     <td>This indicates the availability of the DTD resource. It can be a publicly 
         accessible object (&quot;PUBLIC&quot;) or a system resource (&quot;SYSTEM&quot;) such as a local file or URL. HTML/XHTML DTDs are specified 
         by &quot;PUBLIC&quot; identifiers.</td>
   </tr>
   <tr class="r2" valign="top">
     <td><span class="string">&quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;</span></td>
     <td>This is the Formal Public Identifier (FPI). 
         This compact, quoted string gives a lot of information about the DTD, such as its Registration, Organization, Type, Label, 
         and the Encoding language. For HTML/XHTML DTDs, the most interesting part of this is the label portion (the &quot;XHTML 1.0 
         Transitional&quot; part). If the processing entity does not already have local access to this DTD, it can get it from the 
         System Identifier (next portion).</td>
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

<h3>Doctypes found by MAMA</h3>
<p>The entire Doctype statement was stored in MAMA. In all, 1,788,294 of the URLs analyzed 
   (50.96%) had a Doctype present. For the purposes of the <a href="doctype-ci-url.htm">full 
   frequency table</a> for Doctype, the values were normalized to lower case.</p> 

<h3>Doctype versions</h3>
<p>Different HTML standards can be detected via unique strings in the Doctype 
   statement. The leading space in most of the values below helps differentiate 
   between HTML and XHTML versions. HTML 4 variants are twice as popular 
   as any of the other versions.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-2:</strong> 
   Doctype versions in MAMA</caption>
   <tr valign="bottom">
     <th>Doctype-version substring</th>
     <th>Frequency</th>
     <th rowspan="6">&#xA0;</th>
     <th>Doctype-version substring</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot; html 4&quot;</span> (HTML 4 variants)</td>
     <td class="num">1,122,392</td>
     <td><span class="string">&quot;softquad&quot;</span> || <span class="string">&quot;//sq//&quot;</span></td>
     <td class="num">9,950</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&quot; xhtml 1.0&quot;</span></td>
     <td class="num">548,307</td>
     <td><span class="string">&quot; html 2&quot;</span></td>
     <td class="num">7,640</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot; html 3.2&quot;</span></td>
     <td class="num">57,354</td>
     <td><span class="string">&quot; html 3.0&quot;</span></td>
     <td class="num">1,711</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&quot;ietf&quot;</span></td>
     <td class="num">34,965</td>
     <td><span class="string">&quot;WAP&quot;</span></td>
     <td class="num">131</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot; xhtml 1.1&quot;</span></td>
     <td class="num">20,958</td>
     <td><span class="string">&quot; xhtml 2&quot;</span></td>
     <td class="num">18</td>
   </tr>
</table>

<h3>Doctype flavors</h3>
<p>Beginning with HTML 4.0, HTML was stratified into 3 separate variants: Strict, 
   Transitional, and Frameset. The Label portion of the Doctype FPI reflects these 
   variants, and we can easily discern the &quot;flavors&quot; of HTML by searching for 
   the substrings. The Transitional configuration is more than 10 times as likely 
   as the other types.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-3:</strong> 
   Doctype flavors in MAMA</caption>
   <tr valign="bottom">
     <th>Doctype-flavor substring</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot;Transitional&quot;</span></td>
     <td class="num">1,459,912</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&quot;Strict&quot;</span></td>
     <td class="num">130,191</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&quot;Frameset&quot;</span></td>
     <td class="num">64,516</td>
   </tr>
</table>

<h3>System Identifiers (SIs)</h3>
<p>A look at the full Doctype frequency table shows that there is a good balance 
   between Doctypes that specify a SI versus those that do not. A simplistic way 
   to find SIs that use an absolute URI would be to look for the string 
   <span class="string">&quot;http://&quot;</span> in the Doctype statements; doing so 
   finds 880,702 matching URLs. However, URIs can be relative too, so we should expand 
   our search. If instead of <span class="string">&quot;http://&quot;</span> we look for 
   <span class="string">&quot;.dtd&quot;</span>, this might be a good usage indicator for 
   <strong>ALL</strong> Doctypes with SIs. Doing so finds 897,601 URLs, or 50.19% 
   of all MAMA cases where a Doctype is present.</p>

<h3>Doctype switching: Standards vs. Quirks mode</h3>
<p>Saarsoo produced a comparison of what pages were rendered in Standards vs. 
   Quirks mode based on Henri Sivonen&#39;s <a href="http://hsivonen.iki.fi/doctype/">excellent 
   page on doctype switching</a>. Using this page as a guide, we can construct 
   a similar table, but with MAMA numbers included. To reduce the complexity of Sivonen&#39;s original table, we&#39;ll only show the columns of the most popular current browser sets in use: Mozilla/Safari, Opera 9, IE7/Opera7.1 and IE6/Opera7. Note that these groupings pair up browsers that have very similar quirks, almost standards, and standards modes.
   Standards, Almost Standards, and Quirks modes are listed as <span class="std">&#xA0;S&#xA0;</span>, 
   <span class="astd">&#xA0;A&#xA0;</span> and <span class="qrk">&#xA0;Q&#xA0;</span> respectively.</p>

<p>With the complexity of Sivonen&#39;s chart, one would expect the numbers for the 
   different browsers to vary by a wider margin. It appears the main differences 
   in most browsers are in Doctypes with lower representation in the wild. Generally, 
   about 85% of all Web pages are rendered using Quirks mode, while the remaining 
   ~15% of URLs are rendered using either Standards or Almost Standards modes. 
   If we only look at URLs that have a Doctype, Standards, and Almost Standards are 
   used in ~30% of those cases.</p>

<table cellspacing="0" cellpadding="3" style="font-size: x-small;">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-4:</strong> 
   Doctype switching behavior in browsers<br />(Behavior data from Henri Sivonen&#39;s Doctype switching table)</caption>
   <tr valign="bottom">
     <th>Doctype</th>
     <th>MAMA<br />frequency</th>
     <th>Moz/<br />Safari</th>
     <th>Opera9</th>
     <th>IE7/<br />Opera7.1</th>
     <th>IE6/<br />Opera7</th>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot;&gt;</span></td>
     <td class="num">6,745</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;&gt;</span></td>
     <td class="num">2,488</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; 
         &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</span></td>
     <td class="num">42</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; 
         &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</span></td>
     <td class="num">14,471</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; 
         &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;</span></td>
     <td class="num">90,296</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; 
         &quot;http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd&quot;&gt;</span></td>
     <td class="num">2,732</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0 Transitional//EN&quot; 
         &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;</span></td>
     <td class="num">2,185</td>
     <td style="background-color: #efcfcf;">Q</td>
     <td style="background-color: #efcfcf;">Q</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.1//EN&quot; 
         &quot;http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd&quot;&gt;</span> <strong>(w/o XML prolog):</strong></td>
     <td class="num">10,563</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML Basic 1.0//EN&quot; 
         &quot;http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd&quot;&gt;</span> <strong>(w/o XML prolog):</strong></td>
     <td class="num">26</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; 
         &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;</span> <strong>(w/o XML prolog):</strong></td>
     <td class="num">58,086</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; 
         &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</span> <strong>(w/o XML prolog):</strong></td>
     <td class="num">295,687</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.1//EN&quot; 
         &quot;http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd&quot;&gt;</span> <strong>(w/ XML prolog):</strong> </td>
     <td class="num">3,475</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #efcfcf;">Q</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML Basic 1.0//EN&quot; 
         &quot;http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd&quot;&gt;</span> <strong>(w/ XML prolog):</strong></td>
     <td class="num">14</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #efcfcf;">Q</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; 
         &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;</span> <strong>(w/ XML prolog):</strong></td>
     <td class="num">5,842</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #efcfcf;">Q</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; 
         &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</span> <strong>(w/ XML prolog):</strong></td>
     <td class="num">54,765</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #efcfcf;">Q</td>
   </tr>
   <tr class="r2">
     <td><span class="string">&lt;!DOCTYPE HTML PUBLIC &quot;ISO/IEC 15445:2000//DTD HTML//EN&quot;&gt;</span></td>        
     <td class="num">10</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #efcfcf;">Q</td>
     <td style="background-color: #efcfcf;">Q</td>
     <td style="background-color: #efcfcf;">Q</td>
   </tr>
   <tr class="r1">
     <td><span class="string">&lt;!DOCTYPE html&gt;</span></td>
     <td class="num">199</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #cfefcf;">S</td>
     <td style="background-color: #ffffcf;">A</td>
     <td style="background-color: #ffffcf;">A</td>
   </tr>
</table>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 4-5:</strong> 
   MAMA&#39;s Doctype switching totals by browser</caption>
   <tr valign="bottom">
     <th>Browser</th>
     <th>Standards<br />Mode [%]</th>
     <th>Almost<br />Standards<br />Mode [%]</th>
     <th>Quirks<br />Mode [%]</th>
   </tr>
   <tr valign="top" class="r1">
     <td>Mozilla/Safari</td>
     <td class="num">101,961<br />[2.91%]</td>
     <td class="num">443,480<br />[12.64%]</td>
     <td class="num">2,963,739<br />[84.46%]</td>
   </tr>
   <tr valign="top" class="r2">
     <td>Opera 9</td>
     <td class="num">101,951<br />[2.91%]</td>
     <td class="num">443,480<br />[12.64%]</td>
     <td class="num">2,963,749<br />[84.46%]</td>
   </tr>
   <tr valign="top" class="r1">
     <td>IE7/Opera 7.1</td>
     <td class="num">0<br />[0.0%]</td>
     <td class="num">547,616<br />[15.61%]</td>
     <td class="num">2,961,564<br />[84.39%]</td>
   </tr>
   <tr valign="top" class="r2">
     <td>IE6/Opera 7.0</td>
     <td class="num">0<br />[0.0%]</td>
     <td class="num">483,520<br />[13.78%]</td>
     <td class="num">3,025,660<br />[86.22%]</td>
   </tr>
</table>

<h2 id="tagratio">A document&#39;s &quot;Tag Ratio&quot;</h2>
<p>During MAMA&#39;s analysis, it kept track of the size of all the markup tags used, 
   as well as the overall page size. The ratio of these two values provides some 
   minor insight into authoring practices, and how much plain text content authors 
   have on their pages. Saarsoo did something similar in his study, but he called 
   his ratio a &quot;text percentage&quot;. In his study, the plain-text portion of the page 
   averaged about 20% of the overall size. In MAMA&#39;s case, the &quot;Tag Ratio&quot; was the 
   total content within all tags divided by the overall page size. A low Tag Ratio 
   value reflects a relatively small amount of markup tags compared to the text 
   content while a high tag ratio would be a large amount of markup tags compared 
   to the text content. A Tag Ratio of 0 would be all plain-text, while a Tag Ratio 
   of 100.0 would be completely tags, without even having linefeeds or spaces between 
   the tags. The average document had a Tag Ratio of 61.64%, with almost 2/3 of each 
   document being tags. A <a href="tagratiolist.htm">full frequency table</a> 
   of Tag Ratios is also available.</p>

<h2 id="elems">Markup elements</h2>
<p>We will discuss many of these elements in more detail in their appropriate sections; 
   here we will just take a quick look at the top 20, and say a little something 
   about the overall rankings before moving on. There are no real surprises here 
   in the rankings of the top elements. Comparing the chart below to Saarsoo&#39;s study, 
   there is a <strong>little</strong> movement in the rankings but not until we 
   get out of the top 10&#8212;and the top 50 elements from both share 49 elements in 
   common! Hickson&#39;s study has some differences in ranking order even in its top 
   10. The discrepancies are very minor however, involving values that have 
   very similar totals and adjacent positions in MAMA&#39;s list.</p>

<p>The most popular elements</p>

<ul>
<li>Basic document elements: <code class="elem">HTML</code>, 
   <code class="elem">HEAD</code> and <code class="elem">BODY</code></li>
<li>Hyperlinks and images: <code class="elem">A</code> and <code class="elem">IMG</code></li>
<li>Tables (<code class="elem">TABLE</code>, <code class="elem">TD</code> and 
   <code class="elem">TR</code>)</li>
<li>A smattering of important elements used in the <code class="elem">HEAD</code>: <code class="elem">TITLE</code>, 
   <code class="elem">META</code>, <code class="elem">SCRIPT</code>, 
   <code class="elem">LINK</code> and <code class="elem">STYLE</code></li>
<li>Simple structural and formatting elements: <code class="elem">BR</code>, 
   <code class="elem">P</code>, <code class="elem">DIV</code>, <code class="elem">FONT</code>, 
   <code class="elem">B</code>, <code class="elem">SPAN</code> and <code class="elem">STRONG</code></li>
   </ul>
   
   <p>No real surprises here; the full, unvarnished element list also reveals a significant 
   number of irrelevant entries as you go deeper down the roster&#8212;it seems there 
   is a lot of custom markup, typos, and script fragments out there (the script 
   fragments may be artifacts of MAMA&#39;s parsing strategy).</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 6-1:</strong> 
   Popular markup elements<br />[Please also see the 
   <a href="elemlist-url.htm">complete frequency table</a>]</caption>
   <tr valign="bottom">
     <th>ELEMENT</th>
     <th>Frequency</th>
     <th rowspan="8">&#xA0;</th>
     <th>ELEMENT</th>
     <th>Frequency</th>
     <th rowspan="8">&#xA0;</th>
     <th>ELEMENT</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">HEAD</code></strong></td>
     <td class="num">3,464,519</td>
     <td><strong><code class="elem">TABLE</code></strong></td>
     <td class="num">2,894,184</td>
     <td><strong><code class="elem">FONT</code></strong></td>
     <td class="num">2,061,417</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">TITLE</code></strong></td>
     <td class="num">3,459,207</td>
     <td><strong><code class="elem">TD</code></strong></td>
     <td class="num">2,891,972</td>
     <td><strong><code class="elem">LINK</code></strong></td>
     <td class="num">2,018,510</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">HTML</code></strong></td>
     <td class="num">3,452,975</td>
     <td><strong><code class="elem">TR</code></strong></td>
     <td class="num">2,891,205</td>
     <td><strong><code class="elem">B</code></strong></td>
     <td class="num">1,805,495</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">BODY</code></strong></td>
     <td class="num">3,452,907</td>
     <td><strong><code class="elem">BR</code></strong></td>
     <td class="num">2,859,662</td>
     <td><strong><code class="elem">SPAN</code></strong></td>
     <td class="num">1,527,964</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">A</code></strong></td>
     <td class="num">3,307,397</td>
     <td><strong><code class="elem">P</code></strong></td>
     <td class="num">2,702,935</td>
     <td><strong><code class="elem">STYLE</code></strong></td>
     <td class="num">1,313,454</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">META</code></strong></td>
     <td class="num">3,276,347</td>
     <td><strong><code class="elem">SCRIPT</code></strong></td>
     <td class="num">2,528,823</td>
     <td><strong><code class="elem">STRONG</code></strong></td>
     <td class="num">1,102,056</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">IMG</code></strong></td>
     <td class="num">3,219,487</td>
     <td><strong><code class="elem">DIV</code></strong></td>
     <td class="num">2,499,779</td>
     <td><strong><code class="elem">CENTER</code></strong></td>
     <td class="num">1,076,535</td>
   </tr>
</table>

<h2 id="attrs">Markup attributes</h2>
<p>As with the discussions about markup elements, we will wait to talk more about 
   attributes in the sections appropriate for each. Right now, we will again look 
   at a top 20 list. The attributes found in the top 20 all come from only 7 
   different elements:</p>

<ul>   
   <li><code class="elem">A</code></li>
   <li><code class="elem">META</code></li> 
   <li><code class="elem">IMG</code></li>
   <li><code class="elem">TABLE</code></li> 
   <li><code class="elem">TD</code></li>
   <li><code class="elem">LINK</code></li> 
   <li><code class="elem">SCRIPT</code></li>
</ul>
   
   <p>These results and their ordering compare 
   favorably to the <a href="http://code.google.com/webstats/2005-12/elements.html">brief 
   attribute data</a> listed in Hickson&#39;s study.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 7-1:</strong> 
   Popular markup attributes<br />[Please also see the 
   <a href="attrlist-url.htm">complete frequency table</a>]</caption>
   <tr valign="bottom">
     <th>ELEMENT[Attribute]</th>
     <th>Frequency</th>
     <th rowspan="8">&#xA0;</th>
     <th>ELEMENT[Attribute]</th>
     <th>Frequency</th>
     <th rowspan="8">&#xA0;</th>
     <th>ELEMENT[Attribute]</th>
     <th>Frequency</th>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">A</code></strong>[<code class="att">Href</code>]</td>
     <td class="num">3,304,834</td>
     <td><strong><code class="elem">META</code></strong>[<code class="att">Name</code>]</td>
     <td class="num">2,710,638</td>
     <td><strong><code class="elem">TD</code></strong>[<code class="att">Valign</code>]</td>
     <td class="num">2,189,287</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">META</code></strong>[<code class="att">Content</code>]</td>
     <td class="num">3,273,610</td>
     <td><strong><code class="elem">TABLE</code></strong>[<code class="att">Border</code>]</td>
     <td class="num">2,691,899</td>
     <td><strong><code class="elem">LINK</code></strong>[<code class="att">Href</code>]</td>
     <td class="num">2,016,007</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Src</code>]</td>
     <td class="num">3,219,304</td>
     <td><strong><code class="elem">TABLE</code></strong>[<code class="att">Width</code>]</td>
     <td class="num">2,637,117</td>
     <td><strong><code class="elem">LINK</code></strong>[<code class="att">Rel</code>]</td>
     <td class="num">2,001,105</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Width</code>]</td>
     <td class="num">2,957,808</td>
     <td><strong><code class="elem">TABLE</code></strong>[<code class="att">Cellpadding</code>]</td>
     <td class="num">2,585,020</td>
     <td><strong><code class="elem">A</code></strong>[<code class="att">Target</code>]</td>
     <td class="num">1,978,018</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Height</code>]</td>
     <td class="num">2,945,989</td>
     <td><strong><code class="elem">TABLE</code></strong>[<code class="att">Cellspacing</code>]</td>
     <td class="num">2,578,416</td>
     <td><strong><code class="elem">TD</code></strong>[<code class="att">Align</code>]</td>
     <td class="num">1,977,367</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">META</code></strong>[<code class="att">Http-equiv</code>]</td>
     <td class="num">2,826,859</td>
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Alt</code>]</td>
     <td class="num">2,520,939</td>
     <td><strong><code class="elem">SCRIPT</code></strong>[<code class="att">Language</code>]</td>
     <td class="num">1,965,725</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Border</code>]</td>
     <td class="num">2,810,265</td>
     <td><strong><code class="elem">TD</code></strong>[<code class="att">Width</code>]</td>
     <td class="num">2,324,752</td>
     <td><strong><code class="elem">LINK</code></strong>[<code class="att">Type</code>]</td>
     <td class="num">1,777,982</td>
   </tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: W3C validator research</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-document-encodings/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Document encodings</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

