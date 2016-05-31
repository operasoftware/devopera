---
title: Opera MAMA — a Sneak Peek at Headings, Images and Summary
authors:
- henny-swan
tags:
- structure
- images
- mama
- headings
- summary
- standards
license: cc-by-3.0
---

<p><a href="https://dev.opera.com/articles/view/mama/">MAMA</a> has been busy these last few weeks and we have some early results coming in. Based on <a href="http://www.iheni.com/ask-mama-what-the-web-is-made-of/">feedback and requests</a> here is a snapshot of what the Web&#39;s made of and some quick and dirty analysis.

The results are based on 4,225,113 URLs tested from over 250 countries; more about the <a href="https://dev.opera.com/articles/view/mama-methodology/">methodology</a> can be found in Dev Opera. It&#39;s worth noting that the numbers do not all add up as URLs may fulfill a number of the criteria. Therefore, percentages are guidelines only.</p>

<h3>Headings</h3>
<ul>
<li>No headings used: 2473197, 58.5%</li>
<li><code>H1</code> used multiple times in a doc: 336523, 7.9%</li>
<li>Headings don&#39;t start with <code>H1</code>: 681316, 16.1%</li>
<li>Heading levels were skipped: 479294, 11.3%</li>
<li>Heading levels were out of order: 298695, 7.1%</li>
</ul>

<p>Structure on the web is fundamental for readable web pages by both search engines and assistive technologies such as screen readers and refreshable braille displays. With a heading structure missing on over half the pages tested, and implemented incorrectly on the majority of others these results are pretty disappointing - if not very surprising.</p>

<p>WebAim&#39;s <a href="http://www.webaim.org/projects/screenreadersurvey/#headings">screen reader survey findings for headings</a> found that 52% of respondents relied on headings to navigate around pages. I think this is a woefully low number but is perhaps an understandable given less than half of the websites tested had any headings at all.</p>


<p>Constantly debated is the use - or rather misuse - of <a href="http://www.iheni.com/html-5-to-the-h1-debate-rescue/">multiple <code>H1</code>s</a> in a page, so much so there is even a website dedicated to the <a href="http://www.h1debate.com/"><code>H1</code> debate</a>. Should a page have just have one heading describing the unique page content or can it have two and include the website name as a second <code>H1</code>?</p>

<p>I&#39;m not a fan of multiple <code>H1</code>s as it interrupts the logical page structure for screen reader users who rely on headings to get a mental overview of the <em>page content</em> and navigate it. Coding the website name as <code>H1</code> also duplicates unnecessary information - a user can easily find out what site they are on by reading the page <code>title</code>, logo or other branded elements as well as copy.</p>

<p>The 11.3% of pages that skip heading levels may be evidence of headings are being used for presentation rather than structure. Often this is found in sites that fail to use good CSS and style text using H1-H6. This is especially confusing for a screen reader or refreshable braille display users as they get a partial and confused structure - a bit like a text book with half the index missing. </p>

<p>What MAMA shows is that we&#39;re far off from getting structure right yet. In the meantime we&#39;re snubbing search engines and assistive technologies, which get left out in the cold as they can&#39;t make sense of content. To get an idea of what I mean check out the <a href="http://www.weba11y.com/Examples/ImportanceHTMLHeadings.html">Importance of HTML Headings for Accessibility video</a> from Aaron Cannon.</p>

<h3>Images</h3>
<ul>
	<li><code>title</code> used in an <code>img</code> element: 647651, 15.3%</li>
	<li><code>alt</code> used in an <code>img</code> element: 3176199, 75.1%</li>
	<li><code>title</code> and <code>alt</code> used together in same <code>img</code> element: 575544, 13.6%</li>
</ul>
<p>The thorny issue of images doesn&#39;t really contain many surprises with still a quarter of web pages lacking any <code>alt</code> attribute whatsoever. This of course doesn&#39;t take into account pages that have a mix of images both with and without <code>alt</code> attributes. What is interesting is that just over 13% use <em>both</em> <code>title</code> and <code>alt</code>  around the same image.</p>

<p>There&#39;s rarely a good use case for this and has more of a negative impact of bloating your code and creating usability woes for screen reader and refreshable braille display users. In my experience, <code>title</code> text is very misunderstood and generally used incorrectly. Many page authors duplicate <code>alt</code> - or link - text leading to a classic case of <a href="http://www.rnib.org.uk/wacblog/articles/too-much-accessibility/too-much-accessibility-title-attributes/">too much accessibility</a> as some screen reader users are forced to hear text twice.</p>

<p>Once we have had more time to analyse the data I hope to be able to let you know how many of the <code>title</code> and <code>alt</code> text combinations replicate text exactly in both.</p>

<h3>Summary</h3>
<ul>
	<li>Table <code>summary</code>: 102821 times, 2.4%</li>
	<li>1829 out of 102821 URLs using <code>summary</code> use &quot;layout table&quot;, 1.7%</li>
</ul>
<p>A <code>summary</code> on a data table is a useful way for a screen reader user to get information about the data in the table and how it is organised. Its intended use is not, however, to describe layout tables which should be avoided (and CSS used) and also should not be made evident to the screen reader user.</p>

<p>In the results we can see that 1.7% of URLS are using layout tables due to the misguided use of &quot;Layout table&quot; as the <code>summary</code>. This is really a conservative estimate as we can&#39;t predict every value to be tested however MAMA did unveil numerous instances of other misguided <code>summary</code> text such as: &quot;layout&quot;, &quot;layout table&quot;, &quot;header&quot;, &quot;navigation&quot;, &quot;content&quot;, &quot;banner&quot;, &quot;main&quot;, &quot;main table&quot;, &quot;breadcrumb&quot;, &quot;category&quot;...the list goes on. Terms like this are of little use to the user when read out and bloat the amount of information they are forced to wade through.</p>

<p>This is a prime example of how there is a disconnect between the <abbr title="&quot;Hypertext">HTML</abbr> 4.01 specification and <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 with actual usage. As <a href="http://www.w3.org/TR/REC-html40/struct/global.html#edef-TITLE">HTML 4.01 states</a> <cite>&quot;This attribute offers advisory information about the element for which it is set</cite>. It should never contain primary information and should not duplicate information.

<a href="http://www.w3.org/TR/WCAG-TECHS/H73.html">WCAG 2.0</a> makes explicit reference warning against usage of the <code>summary</code> attribute on layout tables:</p>

<blockquote>...if a layout table is used, then the <code>summary</code> attribute is not used or is null. The purpose of a layout table is simply to control the placement of content; the table itself is “transparent&quot; to the user. A <code>summary</code> would “break&quot; this transparency by calling attention to the table. A null <code>summary</code> (<code>summary=&quot;&quot;</code>) on layout tables is acceptable.</blockquote>

Partly because of such misuse of the <code>summary</code> attribute on the web today the <abbr title="&quot;Hypertext">HTML</abbr> 5 Working Group are advocating the removal of <code>summary</code> from HTML5. This is something that is not a popular with many accessibility advocates who argue that if used correctly on data tables to provide information about the table contents <code>summary</code> is beneficial. Fellow Opera Evangelist <a href="http://www.brucelawson.co.uk/2009/html-5-politics-and-me/">Bruce Lawson</a> has some compelling ideas around <code>summary</code> in HTML5 as well as other accessibility implications for the new specification.


<h3>Coming next</h3>
<p>We&#39;re only just starting to look at the data so if you have any further requests of what you want us to look at leave a comment. Full analysis and data will be published in due course together with breakdown by country. To get an idea of what we&#39;ll cover check out <a href="https://dev.opera.com/articles/view/mama/">last year&#39;s MAMA results</a></p>.
