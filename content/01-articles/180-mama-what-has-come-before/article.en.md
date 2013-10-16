Title: MAMA: What has come before
----
Date: 2008-10-15 00:20:58
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Script tokenization: ECMAScript/JavaScript syntax</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-methodology/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Methodology</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>This article looks at what has come before MAMA in terms of web structure studies, both small and large.</p>

<h2 id="small">Small-scale studies</h2>

<p>There have been a number of attempts in the past to gain some measure of the 
   composition of the Web. Many of them have had small sample sizes (in the range 
   of hundreds to a few thousand URLs). The following is a chronological list of 
   some of the more interesting smaller studies available covering various aspects 
   of the Web. It is by no means exhaustive:</p>
  
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 1-1:</strong> Small-scale URL studies</caption>
<tr>
  <th>Date</th>
  <th>Description</th>
  <th>Author</th>
  <th>URL Sample Size</th>
</tr>
<tr class="r1">
  <td>Feb 2002</td>
  <td><a href="http://web.archive.org/web/20080505040802/http://www.markokarppinen.com/20020222.html">W3C member company 
      site validation results</a></td>
  <td>Marko Karppinen</td>
  <td>506 sites</td>
</tr>
<tr class="r2">
  <td>Apr 2003</td>
  <td><a href="http://www.goer.org/Journal/2003/Apr/index.html">&quot;Alpha Geeks&quot; 
      XHTML usage on personal Web pages</a></td>
  <td>Evan Goer</td>
  <td>113 sites</td>
</tr>
<tr class="r1">
  <td>Nov 2005</td>
  <td><a href="http://westciv.typepad.com/dog_or_higher/2005/11/real_world_sema.html"><code class="att">Class</code> 
      and <code class="att">Id</code> attribute value usage</a></td>
  <td>John Allsopp</td>
  <td>1315 sites</td>
</tr>
<tr class="r2">
  <td>2007-2008</td>
  <td><a href="http://philip.html5.org/data.html">Various markup factors</a></td>
  <td>Philip Taylor</td>
  <td>Various</td>
</tr>
</table>
 


<h2 id="large">Large-scale studies</h2>
<h3>Parnas: &quot;Markup Validity of Open Directory Web Pages&quot;</h3>

<p>Dagfinn Parnas&#39; masters thesis work in 2001 involving markup validation rates 
   is the first large-scale analysis of the composition Web of which I am aware, 
   but the world would have to wait until 2005 for the next major look at what 
   was being used in Web pages.</p>

<h3>Ian Hickson/Google: &quot;Web Authoring Statistics&quot;</h3>

<p>One of the people I had asked regarding criteria for MAMA to examine was my 
   then-coworker at Opera, Ian Hickson, who now works at Google. He was (and still 
   is) heavily involved in the W3C standards process and had excellent ideas of 
   things to look for. However, there are a number of things he requested that 
   MAMA just was not up to analyzing at the time (such as <code class="att">Class</code> 
   names used in a document). On moving to Google, he was able to leverage their 
   vast caches of Web pages to come up with the first widely-available deep 
   analysis of Web page technologies. The sheer volume of Web pages analyzed for 
   his &quot;Web Authoring Statistics&quot; document is a daunting monument to the power that 
   a search engine company can bring to bear on the issue. Ian&#39;s study is 
   <strong>great</strong>&#8212;in terms of pure representative numbers it will 
   probably never have an equal. Given its current resources, MAMA will certainly 
   never be able to analyze that many URLs.</p>

<h3>Rene Saarsoo: Coding practices of Web pages</h3>

<p>Rather late in the MAMA-development process, I was pointed to Saarsoo&#39;s thesis 
   work that had been released about a year before. In shape and form, his work 
   bears many resemblances to MAMA, and his work also inspired me to add many new 
   features to MAMA at a late hour&#8212;the intention was not to duplicate his 
   features, but rather to try to fill gaps that neither of our studies had 
   addressed up to that point. For example, MAMA&#39;s research on scripting was 
   expanded in response to a bug in Saarsoo&#39;s analysis script that failed to 
   correctly gather certain data items. Saarsoo&#39;s study also fills some holes that 
   MAMA has&#8212;for example, it goes into much greater detail about CSS than 
   MAMA currently does.</p>

    
<table cellspacing="0" cellpadding="3">
<caption class="comment" style="caption-side: bottom"><strong>Fig 2-1:</strong> Large-scale URL studies</caption>
<tr valign="bottom">
  <th>Date</th>
  <th>Description</th>
  <th>Author</th>
  <th>URL Sample Size</th>
</tr>
<tr class="r1">
  <td>Dec. 2001</td>
  <td><a href="http://www.ub.uib.no/elpub/2001/h/413001/">Markup Validity of Open Directory Web Pages</a></td>
  <td>Dagfinn Parnas</td>
  <td>&gt;2,000,000</td>
</tr>
<tr class="r2">
  <td>Dec. 2005</td>
  <td><a href="http://code.google.com/webstats/index.html">Web Authoring Statistics</a></td>
  <td>Ian Hickson/Google</td>
  <td>&gt;1,000,000,000</td>
</tr>
<tr class="r1">
  <td>Jun. 2006</td>
  <td><a href="http://triin.net/2006/06/12/Coding_practices_of_web_pages">Coding Practices of Web Pages</a></td>
  <td>Rene Saarsoo</td>
  <td>~1,270,000</td>
</tr>
</table>

<p class="note">There is significant overlap in all of these studies (MAMA included), 
   but together they constitute a much larger tapestry of information than any single 
   study can manage. In the various MAMA reports published now and in the future, we 
   will make many comparisons to the data from these other studies; the reader is 
   encouraged to visit all of them to gain a deeper understanding of all aspects of 
   Web pages.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Script tokenization: ECMAScript/JavaScript syntax</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-methodology/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: Methodology</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
