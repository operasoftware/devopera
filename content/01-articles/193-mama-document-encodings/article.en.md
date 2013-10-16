Title: MAMA: Document Encodings
----
Date: 2008-11-07 13:05:50
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-basic-document-structure/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Basic document structure</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-character-entities/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Character entities</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#how">How encodings are specified</a></li>
    <li><a href="#agree">Can we agree to disagree?</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>A critical part of rendering a document lies in a browser discerning the proper 
   character set encoding. MAMA tracked most of the methods that can be used to 
   detect the encoding, but it did not attempt to declare a &quot;One, True Encoding&quot; 
   in cases where discrepancies existed. In this section we will examine the usage 
   of three of the main encoding sources and discover how/whether they overlapped, 
   and whether they agreed with each other.</p>

<h2 id="how">How encodings are specified</h2>
<p>The <a href="http://dev.opera.com/articles/view/mama-http-headers/#conttype">HTTP Headers</a> can 
   provide the encoding through the &quot;Charset&quot; parameter of the Content-Type field. 
   The Content-Type (and consequently the &quot;Charset&quot; parameter) can also be 
   specified in HTML via the META element, and XML documents have an additional means to signal the document&#39;s encoding by 
   using an &quot;encoding&quot; attribute on the XML 
   prolog. The encoding was specified using at least one of these methods in 
   2,626,228 URLs from MAMA (74.84%). As you can see, authors show a great 
   preference for using the META element to specify a document&#39;s encoding over the 
   other two methods.</p>

<p class="note"><strong>Note:</strong> Region sizes are not to scale</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/193-mama-document-encodings/venn-encodingsources.png" width="593" height="392" alt="Venn diagram for breakdown of encoding source specification methods" /></p>

<h2 id="agree">Can we agree to disagree?</h2>
<p>Having multiple encoding sources can quickly become a can of worms&#8212;what 
   happens when those encodings do not agree with each other? Nothing is worse 
   than a Web page having a schizophrenic argument with itself about its 
   encoding identity. To compare encodings, the various values were all forced 
   to lowercase and leading/trailing spaces were removed. Encoding variations 
   like <span class="string">&quot;iso-8859-1&quot;</span>, <span class="string">&quot;iso_8859_1&quot;</span> 
   and <span class="string">&quot;iso 8859-1&quot;</span> would all be considered 
   different values using this scheme. The results of this comparison show that 
   in the majority of encoding overlap situations, the values agree (72.96% of 
   all overlap scenarios). However, values are <strong>expected</strong> to agree; 
   another (negative) way to frame the results is that 133,968 URLs (27.04% of 
   the overlap scenarios) have specified multiple encodings <strong>and they clash 
   with each other</strong>. So in at least 1/4 of cases where a browser does not 
   have a single encoding source, it must then resort to 
   <a href="http://nikitathespider.com/articles/EncodingDivination.html" title="Nikita the Spiders Encoding Divination Flowchart">torturous 
   gymnastics</a> to determine the outcome.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 3-1:</strong> 
   Encoding agreement when specified by multiple sources</caption>
   <tr valign="bottom">
     <th>Encoding specification method</th>
     <th>Total<br />quantity</th>
     <th>Encodings<br />agree</th>
     <th>Percentage<br />agrees</th>
   </tr>
   <tr class="r1">
     <td>HTTP Header and META only</td>
     <td class="num">417,113</td>
     <td class="num">293,868</td>
     <td class="num">70.45%</td>
   </tr>
   <tr class="r2">
     <td>META and XML only</td>
     <td class="num">49,115</td>
     <td class="num">45,029</td>
     <td class="num">91.68%</td>
   </tr>
   <tr class="r1">
     <td>HTTP Header and XML only</td>
     <td class="num">6,791</td>
     <td class="num">4,553</td>
     <td class="num">67.04%</td>
   </tr>
   <tr class="r2">
     <td>All three: HTTP Header, META and XML</td>
     <td class="num">22,500</td>
     <td class="num">18,101</td>
     <td class="num">80.45%</td>
   </tr>
</table>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-basic-document-structure/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Basic document structure</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-character-entities/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Character entities</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
