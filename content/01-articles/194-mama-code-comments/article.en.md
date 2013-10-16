Title: MAMA: Code comments
----
Date: 2008-11-07 13:05:57
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-character-entities/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Character entities</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-common-attributes/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Common attributes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#commentqtys">Comment quantities</a></li>
    <li><a href="#commentsizes">Overall comment sizes</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>In another section of this research, we looked at the sizes of documents and 
   their components. When considering this, one has to remember that SGML/XML 
   comments can be present in content and this also affects these sizes. Browsers 
   do not care about comments and neither do users/readers of Web pages&#8212;so why 
   should MAMA? To MAMA, comments are just &quot;extraneous fluff&quot; that only serve to 
   bulk up the overall size of a document and increase its loading time. However, comments deserve at least a cursory overview in our discussion to expose just how much 
   &quot;extraneous fluff&quot; is out there in the wild.</p>

<p>Where might large quantities of comments be encountered? Longer documents and 
   auto-generated content are definitely the leading candidates. We will 
   look at how many comments documents have as well as how much data is contained 
   in those comments.</p>

<h2 id="commentqtys">Comment quantities</h2>
<p>MAMA used a MySQL SMALLINT data type (max. value: 65,535) to store the quantity 
   of comments on a page. Surprisingly, in the most extreme cases this was not big 
   enough. Only 1 URL was found to exceed this in MAMA&#39;s URL set, but plausible 
   automated page creation scenarios could conceivably recreate these conditions 
   with regularity. The lone URL with the copious comments was 
   <a href="http://genforum.genealogy.com/ny/all.html">http://genforum.genealogy.com/ny/all.html</a>.
   MAMA stored its maximum value of 65,535, but a live analysis showed 146,376 
   comments in a 9.2MB HTML file!</p>

<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> 
   URLs with the most SGML/XML comments</caption>
   <tr valign="bottom">
     <th>URL</th>
     <th>Comment<br />quantity</th>
   </tr>
   <tr class="r1">
     <td><a href="http://genforum.genealogy.com/ny/all.html">http://genforum.genealogy.com/ny/all.html</a></td>
     <td class="num">146,376</td>
   </tr>
   <tr class="r2">
     <td><a href="http://jollyroger.com/zz/yna3d/WilliamJameshall/shakespeare1.html">http://jollyroger.com/zz/yna3d/WilliamJameshall/shakespeare1.html</a></td>
     <td class="num">42,166</td>
   </tr>
   <tr class="r1">
     <td><a href="http://www.olawsky.de/schlesien/forum.html">http://www.olawsky.de/schlesien/forum.html</a></td>
     <td class="num">24,196</td>
   </tr>
   <tr class="r2">
     <td><a href="http://www.driverforum.com/bios/">http://www.driverforum.com/bios/</a></td>
     <td class="num">20,407</td>
   </tr>
</table>

<p>In all, 2,840,900 URLs contained at least 1 comment&#8212;80.96% of the overall total URLs 
   analyzed. When comments are present in a document, they have an average quantity 
   of 12.4. The most popular number of comments for a page to have is 1 (448,326 
   times). The <a href="commentqty-url.htm">full frequency table</a> for comment 
   quantities monotonically decreases&#8212;each additional comment sees a corresponding 
   drop in frequency, at least out past the 20th position.</p>

<h2 id="commentsizes">Overall comment sizes</h2>
<p>In the original sample, the maximum overall comment size was 4,980,813 characters, 
   but comment size seems to vary a lot. The URL originally reporting this comment 
   size is much lower at the time of writing, but other cases have been found to be 
   as big as or even far exceeding MAMA&#39;s recorded maxmimum size. In the original URL 
   sampling, the average comment size, when comments are present, was 2,252 characters. 
   In any case, a number of URLs have comments that are several megabytes in size. There 
   does seem to be a big contributor to this problem of burgeoning comments: &quot;Conditional 
   Comments&quot; syntax. Hands down, code produced by Microsoft&#39;s Publisher and Word products 
   creates huge amounts of content in conditional comments on sites such as 
   <a href="http://www.rodontinipasquale.it/">http://www.rodontinipasquale.it/</a> and 
   <a href="http://www.norman.k12.ok.us/160/">http://www.norman.k12.ok.us/160/</a>.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-character-entities/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Character entities</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-common-attributes/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Common attributes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
