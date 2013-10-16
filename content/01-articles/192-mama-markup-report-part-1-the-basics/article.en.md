Title: MAMA: Markup report, part 1: the basics
----
Date: 2008-11-07 13:06:02
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

<p>Our first look at markup in MAMA&#39;s URL set will begin with the basics. We 
   will look at some of the housekeeping concerns of every document: how they 
   are encoded, how big documents are, how much of the document is actual 
   markup, doctype usage, etc. We will also give a quick overview of the most 
   popular elements and attributes before we start digging deeper into those 
   sub-topics. This overview should give you an idea of what markup documents look 
   like in the broadest sense.</p>

<p>For a deeper look at these areas and more, the following MAMA article topics 
   are also available this week:</p>
<ul>
    <li><a href="http://dev.opera.com/articles/view/mama-basic-document-structure/">Basic document structure</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-document-encodings/">Document encodings</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-character-entities/">Character entities</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-code-comments/">Code comments</a></li>
</ul>

<h2>Document Encodings</h2>
<p>Before a document&#39;s content can be examined, its encoding must be 
   determined. The biggest trouble with specifying HTML encoding is 
   that there are so <strong>many</strong> ways to do it. A document may specify none, 
   one, or even <strong>ALL</strong> of the different methods. And, if there is 
   disagreement at any of these levels of twirled spaghetti, a precarious 
   dance must ensue.</p>

<p>MAMA tracked the specific encoding values from three primary locations:</p>

<ul>
    <li>The <span class="string">&quot;charset&quot;</span> parameter of the HTTP header:
        <div class="note"><strong>ex:</strong> 
        <code class="skeyw">Content-Type</code>: text/html; charset=ISO-8859-1</div></li>
    <li>The <span class="string">&quot;charset&quot;</span> parameter for the Content-Type 
        via the <code class="elem">META</code> element:
        <div class="note"><strong>ex:</strong> 
        &lt;<code class="elem">META</code> 
        <code class="att">Http-equiv</code>=<span class="string">&quot;Content-Type&quot;</span> 
        <code class="att">Content</code>=<span class="string">&quot;text/html; charset=Shift-JIS&quot;</span>&gt;</div></li>
    <li>The XML encoding:
        <div class="note"><strong>ex:</strong> &lt;?<code class="elem">xml</code> 
        <code class="att">version</code>=<span class="string">&quot;1.0&quot;</span> 
        <code class="att">encoding</code>=<span class="string">&quot;utf-8&quot;</span>?&gt;</div></li>
</ul>

<p>The HTML encoding was specified using at least one of these methods in 2,626,228 of the
   URLs MAMA examined (74.8%). Of these, the dominant scheme was the META element 
   syntax, used in ~90% of the cases where MAMA detected any of the 3 encoding 
   sources.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/192-mama-markup-report-part-1-the-basics/venn-encodingsources.png" width="593" height="392" alt="Venn diagram for breakdown of encoding source specification methods" /></p>

<p class="note"><strong>Note:</strong> Region sizes are not to scale.</p>

<h2>Overall document sizes</h2>
<p>Among the many statistics MAMA has gathered about the documents it analyzed, 
   length statistics prove to be interesting to examine. One such criteria
   is the basic overall document length. This is simply the length of the 
   original document, without adding in any of the page&#39;s external 
   dependencies like CSS or Scripting. The average basic document size of 
   MAMA&#39;s analyzed URLs was 16,406 characters.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">MAMA&#39;s base document size ranges</caption>
   <tr><th>Size range (characters)</th><th>Frequency</th><th>Percentage</th></tr>
   <tr class="r1"><td>0 &amp;&amp; &lt;= 5,000</td><td class="num">1,113,224</td><td class="num">31.7%</td></tr>
   <tr class="r2"><td>&gt;5,000 &amp;&amp; &lt;= 10,000</td><td class="num">717,825</td><td class="num">20.5%</td></tr>
   <tr class="r1"><td>&gt;10,000 &amp;&amp; &lt;= 15,000</td><td class="num">509,456</td><td class="num">14.5%</td></tr>
   <tr class="r2"><td>&gt;15,000 &amp;&amp; &lt;= 20,000</td><td class="num">324,765</td><td class="num">9.3%</td></tr>
   <tr class="r1"><td>&gt;20,000 &amp;&amp; &lt;= 25,000</td><td class="num">213,093</td><td class="num">6.1%</td></tr>
   <tr class="r2"><td>&gt;25,000 &amp;&amp; &lt;= 50,000</td><td class="num">432,129</td><td class="num">12.3%</td></tr>
   <tr class="r1"><td>&gt;50,000 &amp;&amp; &lt;= 75,000</td><td class="num">112,481</td><td class="num">3.2%</td></tr>
   <tr class="r2"><td>&gt;75,000 &amp;&amp; &lt;= 100,000</td><td class="num">40,349</td><td class="num">1.1%</td></tr>
   <tr class="r1"><td>&gt;100,000 &amp;&amp; &lt;= 200,000</td><td class="num">35,354</td><td class="num">1.0%</td></tr>
   <tr class="r2"><td>&gt; 200,000</td><td class="num">8,287</td><td class="num">0.2%</td></tr>
</table>

<h2>But what about all those dependencies?</h2>
<p>One other interesting length factor MAMA tracked was labeled &quot;extras&quot;. This 
   measure added up the sizes of all external CSS, scripting, frames, and 
   IFrames referenced by the main document. While the basic document length 
   gives some idea of a user&#39;s initial download penalty, this &quot;extras&quot; length 
   gives a better sense of the overall weight of a page before its objects 
   (such as images and plug-ins) are loaded. The overall average length of all 
   the &quot;extras&quot; is 20,296 characters, but it increases to 28,038 characters, 
   factoring in only the cases where any of the &quot;extras&quot; exist. This is 
   definitely a case where the documents that are &quot;extras heavy&quot; are throwing 
   off the total average&#8212;as you can see, most documents actually have 
   an &quot;extras&quot; sum of less than 10,000 characters. So, by at least one measure, 
   the <em>average page</em> will download as much in &quot;extras&quot; content 
   size as it must download for the main document.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">MAMA&#39;s &quot;extras&quot; size ranges<br />(969,042 URLs had an &quot;extras&quot; size of 0)</caption>
   <tr><th>Size range (characters)</th><th>Frequency</th><th>Percentage</th></tr>
   <tr class="r1"><td>&gt;0 &amp;&amp; &lt;= 5,000</td><td class="num">753,392</td><td class="num">21.5%</td></tr>
   <tr class="r2"><td>&gt;5,000 &amp;&amp; &lt;= 10,000</td><td class="num">361,460</td><td class="num">10.3%</td></tr>
   <tr class="r1"><td>&gt;10,000 &amp;&amp; &lt;= 15,000</td><td class="num">207,283</td><td class="num">5.9%</td></tr>
   <tr class="r2"><td>&gt;15,000 &amp;&amp; &lt;= 20,000</td><td class="num">182,116</td><td class="num">5.2%</td></tr>
   <tr class="r1"><td>&gt;20,000 &amp;&amp; &lt;= 25,000</td><td class="num">190,039</td><td class="num">5.4%</td></tr>
   <tr class="r2"><td>&gt;25,000 &amp;&amp; &lt;= 50,000</td><td class="num">467,214</td><td class="num">13.3%</td></tr>
   <tr class="r1"><td>&gt;50,000 &amp;&amp; &lt;= 75,000</td><td class="num">173,156</td><td class="num">4.9%</td></tr>
   <tr class="r2"><td>&gt;75,000 &amp;&amp; &lt;= 100,000</td><td class="num">78,497</td><td class="num">2.2%</td></tr>
   <tr class="r1"><td>&gt;100,000 &amp;&amp; &lt;= 200,000</td><td class="num">95,093</td><td class="num">2.7%</td></tr>
   <tr class="r2"><td>&gt;200,000</td><td class="num">31,888</td><td class="num">0.9%</td></tr>
</table>

<h2>Doctypes</h2>
<p>The markup validator has a lot to say about Doctypes. They are a key component 
   in determining a successful validation. MAMA stored the information about a 
   document&#39;s Doctype pulled from the W3C validator, but it also looked for the 
   Doctype information separately. In MAMA&#39;s URL set, 1,788,294 of the URLs 
   analyzed (50.96%) had a Doctype present. About 85% of MAMA&#39;s URLs would be 
   rendered in most browsers using their &quot;Quirks&quot; mode.</p>

<h3>Doctype versions</h3>
<p>Different versions of the HTML standard can be detected via unique strings in the Doctype 
   statement. The leading space in most of the values below helps differentiate 
   between HTML and XHTML versions. HTML 4 variants are twice as popular 
   as any of the other versions.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Doctype versions popularity in MAMA</caption>
   <tr valign="bottom">
     <th>Doctype-version substring</th><th>Frequency</th><th>Percentage<br />Using<br />Doctype</th>
   </tr>
   <tr class="r1"><td><span class="string">&quot; html 4&quot;</span> (HTML 4 variants)</td><td class="num">1,122,392</td><td class="num">62.8%</td></tr>
   <tr class="r2"><td><span class="string">&quot; xhtml 1.0&quot;</span></td><td class="num">548,307</td><td class="num">30.7%</td></tr>
   <tr class="r1"><td><span class="string">&quot; html 3.2&quot;</span></td><td class="num">57,354</td><td class="num">3.2%</td></tr>
   <tr class="r2"><td><span class="string">&quot;ietf&quot;</span></td><td class="num">34,965</td><td class="num">2.0%</td></tr>
   <tr class="r1"><td><span class="string">&quot; xhtml 1.1&quot;</span></td><td class="num">20,958</td><td class="num">1.2%</td></tr>
   <tr class="r2"><td><span class="string">&quot;softquad&quot;</span> || <span class="string">&quot;//sq//&quot;</span></td><td class="num">9,950</td><td class="num">0.6%</td></tr>
   <tr class="r1"><td><span class="string">&quot; html 2&quot;</span></td><td class="num">7,640</td><td class="num">0.4%</td></tr>
   <tr class="r2"><td><span class="string">&quot; html 3.0&quot;</span></td><td class="num">1,711</td><td class="num">0.1%</td></tr>
</table>

<h3>Doctype flavors</h3>
<p>Beginning with HTML 4.0, HTML was stratified into 3 separate variants: Strict, 
   Transitional, and Frameset. A portion of the Doctype statement directly reflects 
   these variants and we can easily discern the &quot;flavors&quot; of HTML by searching for 
   the substrings. The Transitional configuration is more than 10 times as likely 
   as the other types.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Doctype flavor popularity in MAMA</caption>
   <tr valign="bottom"><th>Doctype-flavor substring</th><th>Frequency</th><th>Percentage<br />Using<br />Doctype</th></tr>
   <tr class="r1"><td><span class="string">&quot;Transitional&quot;</span></td><td class="num">1,459,912</td><td class="num">81.6%</td></tr>
   <tr class="r2"><td><span class="string">&quot;Strict&quot;</span></td><td class="num">130,191</td><td class="num">7.3%</td></tr>
   <tr class="r1"><td><span class="string">&quot;Frameset&quot;</span></td><td class="num">64,516</td><td class="num">3.6%</td></tr>
</table>

<p>For more about doctypes, read the <a href="http://dev.opera.com/articles/view/mama-basic-document-structure/#doctypes">doctypes section of the Basic structure article</a>.</p>

<h2>Miscellaneous document structure matters</h2>
<p>MAMA calculated a &quot;Tag Ratio&quot; for each document. This was total length of 
   the content within all tags divided by the overall page length. A Tag Ratio 
   of 0 would be all plain text, while a Tag Ratio of 100.0 would be completely 
   tags, without even having linefeeds or spaces between the tags. The average 
   document had a Tag Ratio of 61.64%&#8212;almost 2/3 of each document being tags.</p>

<p>MAMA also kept its eye out for character entities&#8212;a portable way to express
   characters that are not in the page&#39;s specified character set. All Unicode 
   characters can be given as a numeric entity, while many of these can also 
   be expressed via special name codes. In almost every case where a named 
   entity counterpart exists for a character, the named version is least as 
   popular as the numeric version, if not often much more so.</p>

<p class="note"><strong>ex:</strong> <span class="string">&amp;nbsp;</span> 
   (used 2,537,947 times); <span class="string">&amp;#160;</span> found 
   41,390 times</p>

<p>The character entity used most often was the &quot;non-breaking space&quot;, found 
   in 72.3% of all MAMA&#39;s documents.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top 10 most popular character entities</caption>
   <tr valign="bottom">
     <th>Entity Description</th><th>Entity</th><th>Entity<br />Code</th><th>Frequency</th>
     <th rowspan="6">&#xA0;</th>
     <th>Entity Description</th><th>Entity</th><th>Entity<br />Code</th><th>Frequency</th>
   </tr>
   <tr class="r1">
     <td>Non-breaking space</td><td>&#xA0;</td><td>nbsp</td><td class="num">2,537,947</td>
     <td>Small &#39;u&#39; with Diaeresis</td><td>&#xFC;</td><td>uuml</td><td class="num">226,695</td>
   </tr>
   <tr class="r2">
     <td>Ampersand</td><td>&amp;</td><td>amp</td><td class="num">1,256,005</td>
     <td>Small &#39;e&#39; with Acute</td><td>&#xE9;</td><td>eacute</td><td class="num">207,322</td>
   </tr>
   <tr class="r1">
     <td>Copyright Sign</td><td>&#xA9;</td><td>copy</td><td class="num">776,051</td>
     <td>Small &#39;a&#39; with Diaeresis</td><td>&#xE4;</td><td>auml</td><td class="num">204,855</td>
   </tr>
   <tr class="r2">
     <td>Quotation Mark</td><td>&quot;</td><td>quot</td><td class="num">520,902</td>
     <td>Small &#39;o&#39; with Diaeresis</td><td>&#xF6;</td><td>ouml</td><td class="num">184,313</td>
   </tr>
   <tr class="r1">
     <td>Greater-Than Sign</td><td>&gt;</td><td>gt</td><td class="num">276,149</td>
     <td>Right Double-Angle Quotation Mark</td><td>&#xBB;</td><td>raquo</td><td class="num">123,207</td>
   </tr>
</table>

<h2>Popular markup elements and attributes</h2>
<p>For authors that have spent any time at all writing HTML documents,
   there will be no real surprises about which elements are the most popular.
   The 10 most popular markup elements can be divided into three basic categories:</p>

<ul>
    <li>Basic document-structure elements (<code class="elem">HTML</code>, 
        <code class="elem">HEAD</code>, <code class="elem">BODY</code>, 
        <code class="elem">TITLE</code> and <code class="elem">META</code>)</li>
    <li>Tables (<code class="elem">TABLE</code>, <code class="elem">TR</code> 
        and <code class="elem">TD</code>)</li>
    <li>Hyperlinks and images (<code class="elem">A</code> and <code class="elem">IMG</code>)</li>
</ul>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top 10 markup elements</caption>
   <tr valign="bottom">
     <th>ELEMENT</th><th>Frequency</th><th>Percentage</th>
     <th rowspan="6">&#xA0;</th>
     <th>ELEMENT</th><th>Frequency</th><th>Percentage</th>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">HEAD</code></strong></td><td class="num">3,464,519</td><td class="num">98.7%</td>
     <td><strong><code class="elem">META</code></strong></td><td class="num">3,276,347</td><td class="num">93.4%</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">TITLE</code></strong></td><td class="num">3,459,207</td><td class="num">98.6%</td>
     <td><strong><code class="elem">IMG</code></strong></td><td class="num">3,219,487</td><td class="num">91.7%</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">HTML</code></strong></td><td class="num">3,452,975</td><td class="num">98.4%</td>
     <td><strong><code class="elem">TABLE</code></strong></td><td class="num">2,894,184</td><td class="num">82.5%</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">BODY</code></strong></td><td class="num">3,452,907</td><td class="num">98.4%</td>
     <td><strong><code class="elem">TD</code></strong></td><td class="num">2,891,972</td><td class="num">82.4%</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">A</code></strong></td><td class="num">3,307,397</td><td class="num">94.2%</td>
     <td><strong><code class="elem">TR</code></strong></td><td class="num">2,891,205</td><td class="num">82.4%</td>
   </tr>
</table>

<p>The list of the most popular attributes in MAMA comes primarily from 
   only 4 of the previously covered top 10 elements. Attributes for 
   <code class="elem">A</code>, <code class="elem">IMG</code>, 
   <code class="elem">META</code> and <code class="elem">TABLE</code> are 
   the most popular. It is interesting that none of the top structural 
   elements (<code class="elem">HEAD</code>, <code class="elem">TITLE</code>, 
   <code class="elem">HTML</code>, <code class="elem">BODY</code>) score any 
   attributes in the top 10 attribute beauty pageant.</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom">Top 10 markup attributes</caption>
   <tr valign="bottom">
     <th>ELEMENT[Attribute]</th><th>Frequency</th><th>Percentage</th>
     <th rowspan="6">&#xA0;</th>
     <th>ELEMENT[Attribute]</th><th>Frequency</th><th>Percentage</th>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">A</code></strong>[<code class="att">Href</code>]</td><td class="num">3,304,834</td><td class="num">94.2%</td>
     <td><strong><code class="elem">META</code></strong>[<code class="att">Http-equiv</code>]</td><td class="num">2,826,859</td><td class="num">80.6%</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">META</code></strong>[<code class="att">Content</code>]</td><td class="num">3,273,610</td><td class="num">93.3%</td>
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Border</code>]</td><td class="num">2,810,265</td><td class="num">80.1%</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Src</code>]</td><td class="num">3,219,304</td><td class="num">91.7%</td>
     <td><strong><code class="elem">META</code></strong>[<code class="att">Name</code>]</td><td class="num">2,710,638</td><td class="num">77.2%</td>
   </tr>
   <tr class="r2">
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Width</code>]</td><td class="num">2,957,808</td><td class="num">84.3%</td>
     <td><strong><code class="elem">TABLE</code></strong>[<code class="att">Border</code>]</td><td class="num">2,691,899</td><td class="num">76.7%</td>
   </tr>
   <tr class="r1">
     <td><strong><code class="elem">IMG</code></strong>[<code class="att">Height</code>]</td><td class="num">2,945,989</td><td class="num">84.0%</td>
     <td><strong><code class="elem">TABLE</code></strong>[<code class="att">Width</code>]</td><td class="num">2,637,117</td><td class="num">75.1%</td>
   </tr>
</table>

<h2>Conclusion</h2>
<p>This overview of the basics of markup seems to be too thin to allow
   us to come to any real &quot;conclusions&quot; on the topic just yet. We are 
   just getting started. The information here on <a href="http://dev.opera.com/articles/view/mama-document-encodings/">document encodings</a> and 
   <a href="http://dev.opera.com/articles/view/mama-basic-document-structure/#docsizes">length</a>, <a href="http://dev.opera.com/articles/view/mama-basic-document-structure/#doctypes">doctypes</a>, <a href="http://dev.opera.com/articles/view/mama-basic-document-structure/#tagratio">tag ratios</a>, and <a href="http://dev.opera.com/articles/view/mama-character-entities/">character entities</a> glosses over 
   many of the details found in the deeper writeup. Our final, simplistic 
   mention of popular markup elements and attributes merely sets the stage 
   for what will follow&#8212;in the coming weeks, we will devote considerably 
   more attention to the details of elements and attributes in common use.</p>
