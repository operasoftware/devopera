Title: Supplementary: Common HTML entities used for typography
----
Date: 2008-09-26 15:25:13
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>There are a number of HTML entities that come in handy when there&#x2019;s a need for first-rate typesetting. Many of those listed in Table 1 are useful only when used in foreign language copy (and copy written in specific dialects of English), so context should be taken into account before the choice is made to use them.</p>
<p>For the sake of portability, Unicode entity references should be reserved for use in documents certain to be written in the UTF-8 or UTF-16 character sets. In all other cases, the alphanumeric references should be used.</p>

<table>
	<thead>
		<tr>
			<th>Character(s)</th>
			<th>Literal(s)</th>
			<th>Alphanumeric value(s)</th>
			<th>Unicode value(s)</th>
			<th>Prefer to</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Cent (currency)</th>
			<td>&#xA2;</td>
			<td><code>&amp;cent;</code></td>
			<td><code>&amp;#162;</code></td>
			<td><code>&#xA0;</code></td>
		</tr>
		<tr>
			<th>Pound (currency)</th>
			<td>&#xA3;</td>
			<td><code>&amp;pound;</code></td>
			<td><code>&amp;#163;</code></td>
			<td><code>&#xA0;</code></td>
		</tr>
		<tr>
			<th>Section <sup>1</sup></th>
			<td>&#xA7;</td>
			<td><code>&amp;sect;</code></td>
			<td><code>&amp;#167;</code></td>
			<td><code>&#xA0;</code></td>
		</tr>
		<tr>
			<th>Copyright</th>
			<td>&#xA9;</td>
			<td><code>&amp;copy;</code></td>
			<td><code>&amp;#169;</code></td>
			<td><code>(c)</code></td>
		</tr>
		<tr>
			<th>Guillemets <sup>2</sup></th>
			<td>&#xAB; &#xBB;</td>
			<td><code>&amp;laquo; &amp;raquo;</code></td>
			<td><code>&amp;#171; &amp;#187;</code></td>
			<td><code>&amp;quot;</code></td>
		</tr>
		<tr>
			<th>Registered trademark</th>
			<td>&#xAE;</td>
			<td><code>&amp;reg;</code></td>
			<td><code>&amp;#174;</code></td>
			<td><code>(R)</code></td>
		</tr>
		<tr>
			<th>Degree(s)</th>
			<td>&#xB0;</td>
			<td><code>&amp;deg;</code></td>
			<td><code>&amp;#176;</code></td>
			<td><code>&#xA0;</code></td>
		</tr>
		<tr>
			<th>Plus/minus</th>
			<td>&#xB1;</td>
			<td><code>&amp;plusmn;</code></td>
			<td><code>&amp;#177;</code></td>
			<td><code>+/-</code></td>
		</tr>
		<tr>
			<th>Pilcrow (paragraph) <sup>3</sup></th>
			<td>&#xB6;</td>
			<td><code>&amp;para;</code></td>
			<td><code>&amp;#182;</code></td>
			<td><code>&#xA0;</code></td>
		</tr>
		<tr>
			<th>Middle dot <sup>4</sup></th>
			<td>&#xB7;</td>
			<td><code>&amp;middot;</code></td>
			<td><code>&amp;#183;</code></td>
			<td><code>&#xA0;</code></td>
		</tr>
		<tr>
			<th>Fractional half <sup>5</sup></th>
			<td>&#xBD;</td>
			<td><code>&amp;frac12;</code></td>
			<td><code>&amp;#188;</code></td>
			<td><code>1/2</code></td>
		</tr>
		<tr>
			<th>En dash <sup>6, 7</sup></th>
			<td>&#x2013;</td>
			<td><code>&amp;ndash;</code></td>
			<td><code>&amp;#8211;</code></td>
			<td><code>-</code> for ranges</td>
		</tr>
		<tr>
			<th>Em (long) dash <sup>7, 8</sup></th>
			<td>&#x2014;</td>
			<td><code>&amp;mdash;</code></td>
			<td><code>&amp;#8212;</code></td>
			<td><code>-</code> enclosed by spaces, or <code>--</code></td>
		</tr>
		<tr>
			<th>Single quotes <sup>9, 10</sup></th>
			<td>&#x2018; &#x2019;</td>
			<td><code>&amp;lsquo; &amp;rsquo;</code></td>
			<td><code>&amp;#8216; &amp;#8217;</code></td>
			<td><code>&#39;</code> or <code>&amp;apos;</code></td>
		</tr>
		<tr>
			<th>Single low quote <sup>11</sup></th>
			<td>&#x201A;</td>
			<td><code>&amp;sbquo;</code></td>
			<td><code>&amp;#8218;</code></td>
			<td><code>&#39;</code> or comma</td>
		</tr>
		<tr>
			<th>Double quotes <sup>9</sup></th>
			<td>&#x201C; &#x201D;</td>
			<td><code>&amp;ldquo; &amp;rdquo;</code></td>
			<td><code>&amp;#8220; &amp;#8221;</code></td>
			<td><code>&quot;, &amp;quot;</code>, <code>&#39;&#39;</code>, or <code>``</code></td>
		</tr>
		<tr>
			<th>Double low quote <sup>11</sup></th>
			<td>&#x201E;</td>
			<td><code>&amp;bdquo;</code></td>
			<td><code>&amp;#8222;</code></td>
			<td><code>&amp;quot;</code> or <code>,,</code></td>
		</tr>
		<tr>
			<th>Single &amp; double daggers</th>
			<td>&#x2020; &#x2021;</td>
			<td><code>&amp;dagger; &amp;Dagger;</code></td>
			<td><code>&amp;#8224; &amp;#8225;</code></td>
			<td><code>*</code> and <code>**</code></td>
		</tr>
		<tr>
			<th>Bullet</th>
			<td>&#x2022;</td>
			<td><code>&amp;bull;</code></td>
			<td><code>&amp;#8226;</code></td>
			<td><code>*</code></td>
		</tr>
		<tr>
			<th>Ellipsis <sup>12</sup></th>
			<td>&#x2026;</td>
			<td><code>&amp;hellip;</code></td>
			<td><code>&amp;#8230;</code></td>
			<td><code>...</code></td>
		</tr>
		<tr>
			<th>Prime &amp; double prime <sup>13</sup></th>
			<td>&#x2032; &#x2033;</td>
			<td><code>&amp;prime; &amp;Prime;</code></td>
			<td><code>&amp;#8242; &amp;#8243;</code></td>
			<td><code>&#39;</code>, <code>&#39;&#39;</code>, <code>&amp;apos;</code>, <code>&amp;quot;</code>, <code>minutes:seconds</code> elapsed</td>
		</tr>
		<tr>
			<th>Euro sign</th>
			<td>&#x20AC;</td>
			<td><code>&amp;euro;</code></td>
			<td><code>&amp;#8364;</code></td>
			<td><code>&#xA0;</code></td>
		</tr>
		<tr>
			<th>Trademark</th>
			<td>&#x2122;</td>
			<td><code>&amp;trade;</code></td>
			<td><code>&amp;#8482;</code></td>
			<td><code>(tm)</code></td>
		</tr>
		<tr>
			<th>Almost equal to</th>
			<td>&#x2248;</td>
			<td><code>&amp;asymp;</code></td>
			<td><code>&amp;#8776;</code></td>
			<td><code>~</code></td>
		</tr>
		<tr>
			<th>Not equal to</th>
			<td>&#x2260;</td>
			<td><code>&amp;ne;</code></td>
			<td><code>&amp;#8800;</code></td>
			<td><code>!=</code></td>
		</tr>
		<tr>
			<th>Less/greater than or equal to</th>
			<td>&#x2264; &#x2265;</td>
			<td><code>&amp;le; &amp;ge;</code></td>
			<td><code>&amp;#8804; &amp;#8805;</code></td>
			<td><code>&lt;= or &gt;=</code></td>
		</tr>
                <tr>
			<th>Less/greater than</th>
			<td>&lt; &gt;</td>
			<td><code>&amp;lt; &amp;gt;</code></td>
			<td><code>&amp;#062; &amp;#060;</code></td>
			<td></td>
		</tr>

	</tbody>
</table>
<p><strong>Table 1:</strong> HTML entities useful for proper typesetting, listed in order by decimal Unicode position.</p>

<p class="note">Note that guillemets are used for quotes in certain European languages (such as French and Norsk); in these situations, you should always use <code>q</code> elements instead.</p>

<h3 id="entityusagenotes">HTML entity usage notes</h3>

<ol id="entityUsage">
	<li>Citations of statute law, eg, &#x201C;29 <acronym title="United States Code">USC</acronym> &#xA7; 794 (d),&#x201D; are the matter most likely to reference this character.</li>
	<li>Guillemets often enclose the names of stories, songs, films, public accommodations (eg, &#xAB;Rick&#x2019;s Caf&#xE9; Americain&#xBB;), and popular toponyms in European languages, particularly those of the Romance sub-family. They are also used for quotes in certain European languages (such as French and Norsk); in these situations, you should always use <code>q</code> elements instead.</li>
	<li>The pilcrow, used to mark the beginning of paragraphs that might otherwise be ambiguous, is useful when setting teaser copy. The print distribution of Rolling Stone magazine has often used such an approach. In technical writing, it might also be useful for marking an orphaned first line of a paragraph. &#xB6; Paragraphs marked with this symbol will most often be assigned a <code>display</code> value of <code>inline</code>, which will be explained in the introduction to the CSS layout model.</li>
	<li>The middle dot is an anachronistic analogue to the decimal point, still used by some designers to enumerate amounts of decimalized currency.</li>
	<li>HTML also provides references to the code positions for one-quarter and three-quarters fractions.</li>
	<li>The en dash is used between two quantities or dates to suggest a range, and is indistinguishable from a proper minus sign (<code>&amp;minus;</code>/<code>&amp;#8722;</code>). However, it should always be distinguished from a hyphen (<code>&amp;#45;</code>), which is used to separate the parts of an ad hoc compound word.</li>
	<li>Browsers create soft linebreaks after hyphens (see above), but not after en dashes or em dashes.</li>
	<li>The exclusive use of the em dash in English is to mark one or both ends of a dependent clause in lieu of parentheses, and to indicate that if spoken aloud the clause should be preceded and followed by uninflected pauses.  In several other languages &#x2014; particularly those of the Slavic sub-family &#x2014; em dashes indicate dialogue from the beginning of a paragraph. Tradition dictates that this character not be enclosed itself by spaces, but the thoughtful user of markup may wish to do just that in order to avoid an especially ragged line.</li>
	<li>These are the members of the automated &#x201C;Smart Quotes&#x201D; set of characters incorporated into most popular word processing platforms.  They are often encoded at vendor-specific code positions rather than Unicode or ISO Latin code positions, which can cause problems when they are copied into a Web document.</li>
	<li>The single close quote character is also used in English as the apostrophe.</li>
	<li>Low quotes are used in several Central and Eastern European langauges in preference to the analogous English opening quote characters.</li>
	<li>Since the ellipsis is a single character, the tracking of its constituent glyphs will <em>not</em> be affected by any value set for the <code>letter-spacing</code> or <code>text-align</code> properties.</li>
	<li>Primes are used to denote minutes (of both time elapsed and arc) and feet as units of measurement; the double prime in its turn denotes seconds and inches.  The use of these characters in relation to units of time elapsed has decreased in popularity in recent years, a decrease that correlates strongly with the increased availability of word processing systems (and their common use by non-specialist operators). Many fonts use prime and double prime characters indistinguishable from single and double close quotes, but for reasons of portability these entities should still be used when called for, notwithstanding the characteristics of the intended display face.</li>
</ol>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<p><img alt="Picture of the article author Ben Henick" src="http://forum-test.oslo.osa/kirby/content/articles/154-supplementary-common-html-entities-used-for-typography/benhenick.jpeg" class="right" /></p>

<p>Ben Henick has been building Web sites in one capacity or another since September 1995, when he took on his first Web project as an academic volunteer. Since then, most of his work has been done on a freelance basis.</p>

<p>Ben is a generalist; his skillset touches on nearly every aspect of site design and development, from CSS and HTML, to design and copywriting, to PHP/MySQL and JavaScript/Ajax.</p>

<p>He lives in Lawrence, Kansas, with three computers and zero television sets. You can read more about him and his work at <a href="http://www.henick.net/">henick.net</a>.</p>
