Title: Text styling with CSS
----
Date: 2008-10-03 22:09:12
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
<li class="prev"><a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/" rev="prev" title="link to the previous article in the series">Previous article—Inheritance and Cascade</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/30-the-css-layout-model-boxes-border/" rel="next" title="link to the next article in the series">Next article—The CSS layout model—boxes, borders, margins, padding</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>Because the Web is a collection of <em>documents</em> — some dynamic, some static, some functional — the conventions under which they&#x2019;re formatted are borrowed from our best point of reference: six centuries of printing tradition. This includes typography. The Web however is a new and different medium, and web site typography needs a largely very different skill set to print design, and is subject to a lot more limitations.</p>
<p>This article builds upon the knowledge gained earlier on in the course, providing you with a detailed guide to styling text effectively using CSS. There are several examples linked to below, which will demonstrate the techniques discussed—here you can <a href="article29_examples.zip">download all the article 29 examples</a>.</p>

<p>The article structure is as follows:</p>

<ul>
<li><a href="#webtypographyreview">Web typography review</a>
<ul>
<li><a href="#contrast">Contrast</a></li>
<li><a href="#legibilityreadability">Legibility and readability</a></li>
</ul>

</li>

<li><a href="#cssfonttext">CSS font properties: changing the look of your text</a>
<ul>
<li><a href="#fontsizeunittype">font-size and unit type selection</a>
<ul>
<li><a href="#howitsdone">How it&#x2019;s done</a></li>
<li><a href="#whatunittypesforcss">What unit types can be applied to CSS text properties?</a></li>
<li><a href="#sizeunitbestpractices">What&#x2019;s the use of so many different unit types?</a></li>
<li><a href="#pixelphysicalequivalent">What is the <em>physical</em> equivalent of a desktop pixel?</a></li>
<li><a href="#emspercentagepoints">Ems, percentages, and points, according to CSS</a></li>
<li><a href="#CSS21TRNote">A brief note about the official CSS 2.1 Recommendation</a></li>
<li><a href="#sizekeywords">Size keywords</a></li>
</ul>


</li>
<li><a href="#fontfamilytypeface">font-family and typeface selection</a></li>
<li><a href="#fontstylevariantweight">font-style, font-variant, and font-weight: changing the details</a>
<ul>
<li><a href="#whyfontstyle">Why use the font-style property, when the em and i elements seem adequate?</a></li>
<li><a href="#fontvariantstandout">font-variant as another tool for making short passages stand out</a></li>
<li><a href="#fontweightboldness">font-weight: boldness and the lack thereof</a></li>
</ul>
</li>
<li><a href="#fontshorthand">The font shorthand property</a></li>
</ul>
</li>	
	
<li><a href="#textalignmentproperties">CSS text and alignment properties: altering composition</a>
<ul>

<li><a href="#textalignjustification">text-align and justification</a>
<ul>
<li><a href="#properwesternjustification">Proper justification of copy written in Western alphabets</a></li>	
</ul>
</li>	
<li><a href="#changingtracking">Changing tracking: the letter-spacing and word-spacing properties</a>
<ul>
<li><a href="#emunitscontrol">Using em units for good control</a></li>
</ul>
</li>
<li><a href="#initialindentation">Indenting initial lines: the text-indent property</a></li>
<li><a href="#capitalisation">Capitalisation: the text-transform property</a></li>
<li><a href="#linksanddeletions">Link styling and showing deletions: the text-decoration property</a>
<ul>
<li><a href="#borders">Borders, not underlines, with acronym and abbr</a></li>
</ul>
</li>
<li><a href="#leadingadjustment">Leading adjustment and line-height</a></li>
<li><a href="#supplantingprebr">Supplanting pre and br: the white-space property</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>	
<li><a href="#furtherreading">Further reading</a></li>	
<li><a href="#exercises">Exercise questions</a></li>	
</ul>

<h2 id="webtypographyreview">Web typography review</h2>

<p>On the Web, designers have much less control over presentation than they do in other media. This is most obvious when it comes to document canvas properties such as size, resolution, and contrast.  There are also severe limitations on the quality of Web typography, which were discussed in the <a href="http://dev.opera.com/articles/view/11-typography-on-the-web/" title="typography basics articles">article about typography fundamentals</a>.</p>
<p>Other subjects that deserve an introduction are <em>contrast</em>, <em>legibility</em>, and <em>readability</em>—I’ll go through these now.</p>

<h3 id="contrast">Contrast</h3>

<p>Type <strong>contrast</strong>, the ease with which passages can be distinguished from whitespace and adjacent passages, is influenced by a number of factors such as luminosity, colour, size, and composition. It is mentioned here for the sake of pointing out that low contrast copy should be set at the largest practicable size.</p>

<h3 id="legibilityreadability">Legibility and readability</h3>

<p>In a design context <strong>legibility</strong> is the ease with which a text passage can be <em>scanned</em> for specific pieces of information, while <strong>readability</strong> is the ease with which a passage can be <em>comprehended</em>. Design decisions that enhance one quality or the other are listed in Table 1.</p>

<table>
	<caption>Table 1: characteristics of legibility and readability</caption>
	<thead>
		<tr>
			<th>Goal</th>
			<th>Line length</th>
			<th>Gutters (space between<br /> columns of text) &amp; <a href="http://en.wikipedia.org/wiki/Leading">leading</a></th>
			<th>Type choice</th>
			<th>Justification</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Readability</th>
			<td>moderate</td>
			<td>increased</td>
			<td>serif</td>
			<td>right-ragged [left]</td>
		</tr>
		<tr>
			<th>Legibility</th>
			<td>short</td>
			<td>normal</td>
			<td>sans-serif</td>
			<td>variable, often full</td>
		</tr>
	</tbody>
</table>

<p>Optimal column width will be discussed in the next article - <a href="http://dev.opera.com/articles/view/30-the-css-layout-model/" title="the CSS layout model">The CSS layout model</a>.</p>

<h2 id="cssfonttext">CSS font properties: changing the look of your text</h2>

<p>Typesetting involves the manipulation of text with respect to both composition and the look of individual letters and words. The latter class of tasks is handled by the CSS font properties, which will be discussed below.</p>

<h3 id="fontsizeunittype">font-size and unit type selection</h3>

<p>Since documents typically vary type sizes more than typefaces, and variant fonts are usually handled well by user agent stylesheets, the primary property of interest is <code>font-size</code>. When used in a rule, it&#x2019;s followed with a value that specifies a unit measurement, or sometimes a keyword size (such as <em>small</em> or <em>medium</em>).</p>

<h4 id="howitsdone">How it&#x2019;s done</h4>

<p>The most important <code>font-size</code> declaration in a stylesheet looks something like this:</p>

<pre>body {…
	font-size: 14px;
	…}</pre>

<p>Inheritance causes all type size specifications in a document to be based upon the size declared for the document <code>body</code>, whether in the browser&#x2019;s stylesheet or in yours.</p>
<p>The typical browser default of 16 pixels is a good starting point for the size of your body copy, but most visitors can read smaller type with ease.  As a result, many designers choose smaller sizes—around 11&#x2013;14 pixels.</p>
<p>Inheritance applies to type sizing when a relative size is specified, and when a keyword size is specified for an element with a non-keyword-sized parent.</p>

<h4 id="whatunittypesforcss">What unit types can be applied to CSS text properties?</h4>

<p>In stylesheet rules, the unit types most commonly applied to text are pixels (<code>px</code>), ems (<code>em</code>, explained below), percentages (<code>%</code>), and points (<code>pt</code>). The behaviour of text resized with these units is described in Table 2.</p>

<table>
	<caption>Table 2: convenient CSS units for text sizing</caption>
	<thead>
		<tr>
			<th>Unit</th>
			<th>Definition¹</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>CSS ems</th>
			<td>Δ = <i>x</i></td>
			<td><code>1.333em</code></td>
		</tr>
		<tr>
			<th>Keywords</th>
			<td><acronym title="User Agent ie browser">UA</acronym> defined²</td>
			<td><code>large</code>, <i lang="la" title="Latin: et cetera, &#39;and so forth&#39;">&amp;c.</i></td>
                </tr>
		<tr>
			<th>Percentage</th>
			<td>Δ = <i>x</i>&#xA0;÷&#xA0;100</td>
			<td><code>133.3%</code></td>
		</tr>
		<tr>
			<th>Pixels</th>
			<td>absolute unit</td>
			<td><code>16px</code></td>
		</tr>
		<tr>
			<th>Points</th>
			<td>absolute unit</td>
			<td><code>12pt</code></td>
		</tr>
	</tbody>
</table>

<p><strong>¹</strong> Δ is the <strong>ratio</strong> of change in type size from the inherited value.<br />
<strong>²</strong> Only the nearest <em>non-keyword</em> size value is inherited.</p>


<p>Other available unit types include size keywords, picas (<code>pc</code>, one pica equals exactly 12 points), and exes (<code>ex</code>). Many of the other unit types supported by CSS2 are also available, but are rarely used when working with text.</p>

<h4 id="sizeunitbestpractices">What&#x2019;s the use of so many different unit types?</h4>

<p>As pointed out in Table 2, there are <em>relative</em> and <em>absolute</em> sizing units. Keywords take on both characteristics — absolute sizing with respect to one another, but relative to the non-keyword value they inherit. The best practices to follow for their use are as follows:</p>
<ul>
	<li><strong>Absolute</strong> sizes (<code>px</code>, standardized units such as <code>pt</code>) are best used in layouts that do not change in relation to document canvas properties — so-called &#x201C;fixed&#x201D;, &#x201C;static&#x201D;, or &#x201C;Ice&#x201D; layouts.</li>
	<li><strong>Relative</strong> sizes (<code>em</code>, <code>%</code>) should be used in non-static layouts, and in situations where a compromise needs to be struck between site usability and the designer&#x2019;s control over the layout.</li>
	<li><strong>Keyword</strong> sizes (explained below) should be used when usability trumps all other design considerations.</li>
</ul>

<h4>Absolute sizes and usability</h4>

<p>Older versions of Internet Explorer do not allow the visitor to resize text that has been set at absolute sizes, and the text resizing interfaces of some browsers that <em>do</em> allow that degree of user control can be hard-to-find (Opera and Firefox users have it easy, with <kbd>Shift + Ctrl/Cmd + plus/minus</kbd> and <kbd>Ctrl/Cmd + plus/minus</kbd> respectively). Because of these constraints, it&#x2019;s a common practice to set the <code>font-size</code> of <code>body</code> to a relative value, usually in <code>em</code> units that are assumed to be controlled by the browser default.</p>

<h4 id="pixelphysicalequivalent">What is the <em>physical</em> equivalent of a desktop pixel?</h4>

<p>The most accurate answer to this question is that there is no such thing.  Pixels are a unit of display hardware resolution, and nothing more.  However…</p>
<p>Despite the fact that it is strictly impossible to define or predict the literal size of a pixel, high-strung commercial project sponsors tend to be unpleasantly surprised when they discover that the design of their site takes on a different look on client hosts that are configured differently to their own, and yell at the web designer because of this. For that reason, it can be helpful to understand how pixels behave—I’m giving you this as ammunition, ready for those times when anyone you are creating a web site for complains that the text doesn’t look exactly the same on different machines.</p>
<p>Software publishers have an informal understanding that 96 <abbr title="pixels per inch">ppi</abbr> (pixels per inch) is a reasonable measurement.  Thus 16 pixel body copy will print at a size of one-sixth of an inch, or 12 points.  On the increasingly typical 17&#x2033; 1280x800 liquid crystal display, such 16 pixel copy will have an approximate size of 13 points on screen, but on a similar 15&#x2033; notebook display, its size will be 11.44 points.</p>
<p>These measurements are effective at default settings. Most environments allow the end user to set a custom ppi measurement, so edge cases will arise.</p>
<p>In conclusion: a pixel is a pixel, but everything else is variable.</p>

<h4 id="emspercentagepoints">Ems, percentages, and points, according to CSS</h4>

<p>Traditionally, the <em>em</em> is equivalent to the height of an uppercase &#x201C;M&#x201D; in the font to which it applies. However, in CSS the <code>em</code> unit is actually equivalent to the total height of one line; in other words for an element that has had its <code>font-size</code> set to 14 pixels:</p>
<p><code>1em = 100% = 14px</code></p>
<p>In typical environments, this statement above can be expanded to:</p>
<p><code>1em = 100% = 14px = 10.5pt</code></p>
<p>Increasing or decreasing sizes work multiplicatively, so if you have a second element that you want to set to a size of 16 pixels, given normal inheritance all of the following would obtain the desired result:</p>
<p><code>1.143em = 114.3% &#x2248; 16px = 12pt</code></p>

<h4 id="CSS21TRNote">A brief note about the official CSS 2.1 Recommendation</h4>

<p>You will find yourself directed on occasion to consult the World Wide Web Consortium&#x2019;s <a href="http://www.w3.org/TR/CSS21/" title="CSS 2.1 specification">Candidate Recommendation for the CSS 2.1 Specification</a>. Like all W3C Recommendations, this document can be considered the definition of a Web standard; some are followed more faithfully than others, by browser manufacturers as well as web developers.</p>
<p>While knowledge of W3C Recommendations in both breadth and depth is good to have, this course has been written to give you a concise but easy to digest introduction to web development/design, and the W3C recommendations can be a bit verbose, to say the least. All cases here in which you are directed to visit the CSS 2.1 Recommendation point to material that&#x2019;s too obscure to justify accurate explanation in this article.</p>

<h4 id="sizekeywords">Size keywords</h4>

<p>You can also use size keywords, as briefly mentioned above. There are seven of them, from <code>xx-small</code> up to <code>xx-large</code>, with <code>medium</code> being the middle (and default) value. The full list of all seven values is spelled out in Table 3 below, which includes all of the keywords supported by the various CSS properties discussed in this article.</p>
<p>The CSS 2.1 Recommendation provides a wealth of additional detail about <a href="http://www.w3.org/TR/CSS21/fonts.html#font-size-props" title="How keyword values work"><code>font-size</code> keywords</a>.</p>

<h4>Demonstration 1</h4>
	<p>From time to time, this text will link to a progressively styled demonstration document that will display the CSS properties under discussion, in actual use. This first instance shows the example document HTML completely unstyled</p>

	<h5>Links:</h5>

	<ul>
		<li><a href="copy_example1.html">Unstyled demonstration document</a></li>
		<li><a href="copy_example2.html">Resized title, attributions, and bodycopy</a></li>
		<li><a href="text_01.css">Demo 1 stylesheet</a></li>
	</ul>
	
	<h5>New rules</h5>
<pre>body { font-size: 14px; }
h1 { font-size: x-large; }
.sectionNote { font-size: medium; }
.attribution { font-size: small; }</pre>

<h3 id="fontfamilytypeface">font-family and typeface selection</h3>

<p>With text sized to your satisfaction, you can move onto selecting a typeface or two. This is accomplished with the <code>font-family</code> property, which is used as shown in Demonstration 2 below.</p>

<p>When providing a value for the <code>font-family</code> property, you should follow these rules:</p>
<ol title="List of rules to follow when specifying values for the font-family property.">
	<li>Faces must be named exactly as they are named in the font library of the client host, using the non-variant font as a guide.</li>
	<li>All named faces must be separated by commas, with or without trailing whitespace.</li>
	<li>In cases where the name of a face contains more than one word, it must be enclosed by single or double quotes. <strong>Example:</strong> <code>&#39;Times New Roman&#39;</code>.</li>
	<li>Faces should be named in order of <em>ascending</em> likelihood of availability. For example, if you want Macintosh users to see a page set in Palatino, your property-value declaration should probably read as follows: <code>font-family: Palatino, Georgia, serif;</code>. Palatino is exactly what you want, but some users may not have it; Georgia is much more likely to be available, and is similar to Palatino; serif refers to a generic default serif font—if neither Palatino nor Georgia are available, the system will fall back to its default serif font.</li>
	<li>As a fail-safe, a <code>font-family</code> value should always end with the appropriate generic name, as explained above. The typefaces used in generic families by MacOS 10.5 are displayed in Figure 1.</li>
</ol>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/152-29-text-styling-with-css/text_fig.gif" width="278" height="181" alt="default generic type in MacOS 10.5." /></p>

<p class="comment">Figure 1: Default &#x201C;generic&#x201D; typefaces in MacOS 10.5, as rendered at 24px by Safari 3.1.</p>

<p>The CSS 2.1 Recommendation lists <a href="http://www.w3.org/TR/CSS21/fonts.html#generic-font-families" title="Typefaces that apply to generic font families">several more typefaces that might apply to each generic family</a>.</p>

<h4>Demonstration 2</h4>
	<p>Now that the size of the text is predictable, we want to optimize the typefaces used.  The title is best set in a sans serif face for legibility, and the narrative itself in a serif face.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example3.html">New fonts</a></li>
		<li><a href="text_02.css">Demo 2 stylesheet</a></li>
	</ul>
	<h5>New rules</h5>
<pre>body { font-family: Palatino,&#39;Palatino Linotype&#39;,Georgia,
            sans-serif; }
h1 { font-family: Helvetica,Arial,sans-serif; }
blockquote { font-family: Helvetica,Arial,sans-serif; }</pre>

<h3 id="fontstylevariantweight">font-style, font-variant, and font-weight: changing the details</h3>

<p>The <code>font-style</code> property manipulates italicisation without resorting to the <code>i</code> element; its three valid values are <code>italic</code>, <code>oblique</code>, and <code>normal</code>.</p>
<p>The <code>italic</code> and <code>oblique</code> values deliver functionally identical results in the most recent versions of all mass-market Web browsers, even though there is a meaningful <em>technical</em> difference between the two styles, as explained in the <a href="http://dev.opera.com/articles/view/opera-web-standards-curriculum-glossary/" title="glossary">Glossary</a> that accompanies this course.</p>

<h4 id="whyfontstyle">Why use the font-style property, when the em and i elements seem adequate?</h4>

<p>Each of those elements has specific uses: the <code>em</code> to provide emphasis, and <code>i</code> to serve as an alternative to <code>&lt;span style=&quot;font-style: italic;&quot;&gt;…&lt;/span&gt;</code> in those few instances when its use would be appropriate. Generally <code>&lt;i&gt;</code> isn’t appropriate at all, as it is a presentational element, but there are certain pieces of copy that are italicised by convention, such as book titles (although this is still arguable; some think the <code>cite</code> element is more appropriate for book titles. Do what seems most appropriate). <code>&lt;em&gt;</code> is generally more appropriate, because it specifies emphasis as a concept, rather than italics as a specific style—the actual look of emphasis may vary between different browsers.</p>
<p>There are situations where the use of <code>em</code> and its cousin <code>strong</code> may require a different approach.  For example, suppose you wanted to emphasize copy by enlarging it. The consistent step for providing strong emphasis would then be to add italicisation, resulting in rules such as the following:</p>

<pre>em {
	font-size: large;
	font-style: normal;
}

strong {
	font-size: large;
	font-weight: normal;
	font-style: italic;
}</pre>
<p>The preceding stylesheet rules would deliver results similar to the following:</p>
<p>The <strong style="font-size: large; font-style: normal; font-style: italic;">quick</strong> red fox jumped over the <em style="font-size: large; font-style: normal;">lazy</em> brown dog.</p>

<h4>Demonstration 3</h4>

	<p>There are no italicised words or passages in the demonstration copy, and the attributions already contain the necessary italicisation due to use of the <code>cite</code> element. Given the lack of options, the title is the best candidate for italicisation.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example4.html">Italicise the title</a></li>
		<li><a href="text_03.css">Demo 3 stylesheet</a></li>

	</ul>
	<h5>New rules</h5>
<pre>h1 { font-style: italic; }
.sectionNote { font-style: normal; }</pre>


<h4 id="fontvariantstandout">font-variant as another tool for making short passages stand out</h4>

<p>The <code>font-variant</code> property has two possible values, <code>small-caps</code> and <code>normal</code>.  &#x201C;Small caps&#x201D; (also known as &#x201C;copperplate&#x201D; letters) are used by some designers to highlight the opening phrase of a long narrative, or to provide emphasis for quoted signage, such as the following:</p>
<p style="font-variant: small-caps;">Abandon all hope, ye who enter here.</p>

<h4>Demonstration 4</h4>

<div class="demoPointer">
	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example5.html">Set the opening phrase in small caps</a></li>
		<li><a href="text_04.css">Demo 4 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
<pre>.opening { font-variant: small-caps; }</pre>
</div>

<h4 id="fontweightboldness">font-weight: boldness and the lack thereof</h4>

<p>The <code>font-weight</code> property allows you to alter the level of boldness of any passage of text to which it is applied.</p>
<p>The commonly supported values of the <code>font-weight</code> property are <code>normal</code> and <code>bold</code>.  While the CSS 2.1 Recommendation provides <a href="http://www.w3.org/TR/CSS21/fonts.html#font-boldness" title="font-weight property  values">several other values</a>, the current state of Web typography support makes those other values functionally meaningless to all but specialist users.</p>

<h4>Demonstration 5</h4>

<div class="demoPointer">
	<p>Boldfacing the name of an author is a design technique more often used in periodicals, but it still fits in various situations on the web.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example6.html">Boldface the author&#x2019;s name</a></li>
		<li><a href="text_05.css">Demo 5 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
<pre>.author { font-weight: bold; }</pre>
</div>

<h3 id="fontshorthand">The font shorthand property</h3>

<p>Many text properties can be provided in the value for a single property, if needed, in a manner similar in nature to background properties.</p>
<p>A font shorthand rule looks like this:</p>
<p class="codeExample"><code>h1 {
	font: italic normal bold x-large/1.167em Helvetica,Arial,sans-serif;
}</code></p>
<p>For the best results, the value you supply for this property should include your intended values for all of the following individual properties in the following order, separated by spaces:</p>
<ol title="font shorthand property syntax">
	<li><code>font-style</code></li>
	<li><code>font-variant</code></li>
	<li><code>font-weight</code></li>
	<li><code>font-size</code>, followed if necessary by a slash and the value of <code>line-height</code> (see below)</li>
	<li><code>font-family</code>, which in this instance can also be a reserved word specifying a system font; multiple values should be separated by commas but not spaces</li>
</ol>

<table>
	<caption>Table 3: supported keyword values for properties discussed in this article</caption>
	<thead>
		<tr>
			<th>property</th>
			<th>Values</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>font-family</th>
			<td><code>cursive</code>, <code>fantasy</code>, <code>monospace</code>, <code>sans-serif</code>, <code>serif</code></td>
		</tr>
		<tr>
			<th>font-size</th>
			<td><code>xx-small</code>, <code>x-small</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>, <code>xx-large</code></td>
		</tr>
		<tr>
			<th>font-style</th>
			<td><code>italic</code>, <code>normal</code>, <code>oblique</code></td>
		</tr>
		<tr>
			<th>font-variant</th>
			<td><code>normal</code>, <code>small-caps</code></td>
		</tr>
		<tr>
			<th>font-weight</th>
			<td><code>bold</code>, <code>normal</code></td>
		</tr>
		<tr>
			<th>line-height</th>
			<td><code>normal</code></td>
		</tr>
		<tr>
			<th>text-align</th>
			<td><code>center</code>, <code>justify</code>, <code>left</code>, <code>right</code></td>
		</tr>
		<tr>
			<th>text-decoration</th>
			<td><code>line-through</code>, <code>none</code>, <code>overline</code>, <code>underline</code></td>
		</tr>
		<tr>
			<th>text-transform</th>
			<td><code>capitalize</code>, <code>lowercase</code>, <code>none</code>, <code>uppercase</code></td>
		</tr>
		<tr>
			<th>white-space</th>
			<td><code>normal</code>, <code>nowrap</code>, <code>pre</code>, <code>pre-line</code>, <code>pre-wrap</code></td>
		</tr>
	</tbody>
</table>


<h2 id="textalignmentproperties">CSS text and alignment properties: altering composition</h2>

<p>A stylist working with letters and words is dealing in details: lines, curves, dots, pixels, and the other <em>cellular</em> bits of a design. A design is a whole thing however; it has  bigger components which are brought into focus by composition controlled principally through the CSS layout model. In addition to that layout model, CSS also implements text and alignment properties that influence composition. The rest of this article  will discuss those properties.</p>

<h3 id="textalignjustification">text-align and justification</h3>

<p>As is the case with word processing environments, the <code>text-align</code> property supports four justification values: <code>left</code>, <code>right</code>, <code>center</code>, and <code>justify</code>. The last of these provides <em>full</em> justification: visible text margins that are consistent on both the left and right sides of a block of copy.</p>

<h4 id="properwesternjustification">Proper justification of copy written in Western alphabets</h4>

<p>The best general usage of the different available alignments is as follows:</p>

<ul>
<li><strong>Left justification</strong> is best suited to long passages of narrative.</li>
<li><strong>Right justification</strong> is best used on the leftmost column of data tables and multiple column layouts. When the adjacent column is then left justified and placed on the other side of an appropriately wide gutter, the result is to improve the legibility of both columns.</li>
<li><strong>Full justification</strong> works well for small blocks such as block quotations and teaser copy.  When used on long passages of narrative set to optimal width bestride wide margins, full justification also improves the apparent coherence of your layout.</li>
<li><strong>Centering</strong> is typically used for interface elements and serial lists such as those found in site footers.</li>
</ul>

<h4>Demonstration 6</h4>

	<p>Since the demonstration is built around fiction originally sourced from a book, why not give it full justification?</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example7.html">Apply full justification to the bodycopy of the passage</a></li>
		<li><a href="text_06.css">Demo 6 stylesheet</a></li>

	</ul>
	<h5>New rules:</h5>
<pre>p { text-align: justify; }
blockquote p { text-align: left; }</pre>

<h3 id="changingtracking">Changing tracking: the letter-spacing and word-spacing properties</h3>

<p>These properties are fairly self-explanatory; they allow you to alter the amount of whitespace between letters and words, respectively.</p>
<p>The most common use of <code>letter-spacing</code> is to provide subtle emphasis analogous in effect to that provided by <code>font-variant: small-caps;</code> it may also be used to subtly alter the composition of interface elements.</p>
<p>The <code>word-spacing</code> property is best used to deliberately change the number of words likely to appear on a single line of copy. For example, it might be used if you have a copy block of typical width, but atypical type size.</p>
<p>In print, letterspacing and word spacing are also applied on an ad hoc basis to avoid composition flaws, but on the Web this technique has limited usefulness.</p>
<p>In addition to unit values, these properties support the <code>normal</code> value.</p>

<h4 id="emunitscontrol">Using em units for good control</h4>

<p>When you change the letterspacing of text, a little nudge carries for a long distance; the default letterspacing tends to be between one-tenth and one-twentieth of an em, so <code>letter-spacing</code> values that do more than double or halve the default might well result in illegible copy.</p>

<h4>Demonstration 7</h4>

<div class="demoPointer">
	<p>The sign copy discussed near the end could use some subtle emphasis… and since the pull quote is set in a larger size, it can be improved using some word spacing.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example8.html">Add letterspacing to the proposed sign greetings in the penultimate paragraph of the passage</a></li>
		<li><a href="text_07.css">Demo 7 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
<pre>q { letter-spacing: .143em; }
.pullQuote { word-spacing: .143em; }</pre>
</div>

<h3 id="initialindentation">Indenting initial lines: the text-indent property</h3>

<p>The <code>text-indent</code> property makes it possible to indent paragraphs in the traditional style of printed matter. There are also a number of advanced layout techniques that are made possible by this property and its support of negative values.</p>
<p>The values supported by this property are the same as those supported by <code>font-size</code>, with the addition of <code>normal</code>.</p>

<h4>Demonstration 8</h4>

	<p>On the same rationale that the passage was fully justified, maybe it should have all of its paragraphs indented.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example9.html">Provide initial indentation for the paragraphs of the bodycopy</a></li>
		<li><a href="text_08.css">Demo 8 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
<pre>p { text-indent: 1.429em; }
blockquote p { text-indent: 0; }</pre>

<h3 id="capitalisation">Capitalisation: the text-transform property</h3>

<p>Just as the <code>font-variant</code> property gives you access to copperplate letters, the <code>text-transform</code> property deals specifically with capitalisation. Its allowed values provide for all-caps, all-lowercase, or all-initially-capitalised rendering of text. See Table 3 above for a list of supported values.</p>

<h4>Demonstration 9</h4>

	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example10.html">Emphasise the excerpt author in all-caps</a></li>
		<li><a href="text_09.css">Demo 9 stylesheet</a></li>

	</ul>
	<h5>New rules:</h5>
	<pre>.author { text-transform: uppercase; }</pre>

<h3 id="linksanddeletions">Link styling and showing deletions: the text-decoration property</h3>

<p>This property makes it possible to put lines over, under, and through text. Its most common use is to manipulate default link underlines, however wikis, satire, and other settings will beg use of strikethroughs. In these cases you will want to employ the <code>ins</code> (insert) and <code>del</code> (delete) elements, which provide equivalent styling to the following:</p>

<pre>ins {
  text-decoration: underline;
}

del {
  text-decoration: line-through;
 }</pre>
 
 <p>Even without custom stylesheet rules, <code>ins</code> and <code>del</code> style markup as follows:</p>
 
 <div><del>Mark Twain</del> <ins>Benjamin Disraeli</ins> is remembered for many witticisms, including &#x201C;there are lies, damned lies, and statistics.&#x201D;</div>
 
<h4 id="borders">Borders, not underlines, with acronym and abbr</h4>
 
<p>Among some designers it is popular to alter the appearance of <code>acronym</code> and <code>abbr</code> elements so that they appear with what appears at first glance to be a <em>dotted</em> underline. However, this effect is actually accomplished with a <code>border-bottom</code> value. (Remember that some browsers supply this automatically, but others, such as IE 6, don&#39;t).</p>

<h4>Demonstration 10</h4>

	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example11.html">Remove the underline from the link to the Gutenberg E-Text source for the demonstration copy</a></li>
		<li><a href="text_10.css">Demo 10 stylesheet</a></li>

	</ul>
	<h5>New rules:</h5>
	<pre>.source a { text-decoration: none; }</pre>

<h3 id="leadingadjustment">Leading adjustment and line-height</h3>

<p>It&#x2019;s well-known that placing some whitespace between lines of text tends to increase its readability, because the increased space ensures that ascenders and descenders (see Figure 2 for explanation) on adjacent lines will not compete for visual focus.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/152-29-text-styling-with-css/figure2.jpg" alt="Ascenders are the parts of letters that rise above the mean line of the text and descenders are the parts of letters that drop below the base line that the text sits on" /></p>

<p class="comment">Figure 2: Ascenders are the parts of letters that rise above the mean line of the text; descenders are the parts of letters that drop below the base line that the text sits on.</p>


<p>There&#x2019;s a loose relationship between the <code>font-size</code> of an element and its <code>line-height</code>, but by default, all user agents insert a small amount of leading into each line of text — usually 10&#x2013;15% of the height of the letters themselves.  Because this default changes from one typeface to the next, the <code>line-height</code> property supports a value of <code>normal</code> in addition to numeric values.</p>
<p>It is also worth noting that unlike most CSS properties, <code>line-height</code> accepts numeric values without units, which are then rendered as a ratio of the default.</p>

<h4>Demonstration 11</h4>

	<p>The relationship between leading and readability has been bandied about a lot, so here&#x2019;s the proof.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="copy_example12.html">Apply a suitable amount of leading to the passage</a></li>
		<li><a href="text_11.css">Demo 11 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
	<pre>           p { line-height: 1.5; }
.attribution { line-height: 1.5; }</pre>

<h3 id="supplantingprebr">Supplanting pre and br: the white-space property</h3>

<p>Forced linebreaks are a presentational element in the strictest sense, though there are many circumstances in which they&#x2019;re a desirable element of a site design. In tandem with browsers&#x2019; habit of breaking lines on arbitrary spaces, exercising the desired degree of control with markup alone can be a challenge.</p>
<p>The <code>pre</code> element is provided to deal with these challenges, though it presents challenges of its own, which is why CSS offers the <code>white-space</code> property. Its supported values, which are listed in Table 3, allow the stylist to choose whether or not the browser will render whitespace and linebreaks that have been added to source markup or inserted as generated content.</p>
<p>The CSS 2.1 Recommendation provides <a href="http://www.w3.org/TR/CSS21/text.html#white-space-prop" title="white-space property implementation and use">exhaustive details about the suggested implementation and use of the <code>white-space</code> property</a>.</p>

<h2 id="summary">Summary</h2>

<p>An excellent site design requires a high level of attention to detail and proper adjustment of the interaction of numerous elements, not the least of which is type.</p>
<p>The suite of font and text properties supported by current browsers&#x2019; implementations of CSS gives nearly the highest level of control over typesetting that existing output hardware will allow, and it&#x2019;s up to the conscientious site stylist to learn how to use them. As a result of using those properties successfully, sites go into production that can aspire to approach standards of quality in typesetting more commonly associated with the print medium we&#x2019;ve developed over the span of centuries, in spite of the fact that the Web hasn&#x2019;t yet been around for longer than a single generation.</p>

<h2 id="furtherreading">Further reading</h2>

<ul>
<li>Bos, Bert, et al. 2007. Cascading style sheets level 2 revision 1 (CSS 2.1) specification.
World Wide Web Consortium. <a href="http://www.w3.org/TR/2007/CR-CSS21-20070719">http://www.w3.org/TR/2007/CR-CSS21-20070719</a> <i>etc.</i> (accessed 28 May 2008).</li>
<li>Chaparro, Barbara, <i>et al.</i> 2004. Reading online text: a comparison of four white space layouts.
Wichita State University Software Usablity Research Laboratory Usability News. <a href="http://www.surl.org/usabilitynews/62/whitespace.asp">http://www.surl.org/usabilitynews/62/whitespace.asp</a> (accessed 28 May 2008).</li>
<li>Dean, Paul. 2008. Extreme type terminology.
I Love Typography, the Typography Blog. <a href="http://ilovetypography.com/2008/03/21/extreme-type-terminology/">http://ilovetypography.com/2008/03/21/extreme-type-terminology/</a> <i>etc.</i> (accessed 28 May 2008).</li>
<li>Horton, Sarah, and Lynch, Patrick. 2002. <a href="http://www.webstyleguide.com/">Web style guide</a>: basic principles for creating web sites, 2nd edition. New Haven, Conn.: Yale University Press.</li>
<li>Roselli, Adrian. 2002. A simple character entity chart.
Evolt.org. <a href="http://www.evolt.org/article/A_Simple_Character_Entity_Chart/17/21234/">http://www.evolt.org/article/A_Simple_Character_Entity_Chart/17/21234/</a> (accessed 28 May 2008).</li>
</ul>

<h2 id="exercises">Exercises</h2>

<ul>
	<li>List three HTML elements, <strong>other than</strong> <code>b</code> and <code>i</code>, which are typically rendered with variant fonts by default. Briefly describe the intended purpose of the elements you listed, and explain how the use of a variant font is appropriate to those elements&#x2019; purposes.</li>
	<li>Subjectively test the readability of a long text passage of your choice, at varying <code>line-height</code> values. Briefly summarize your results.</li>
	<li>Apply <code>text-transform: uppercase;</code> to a single paragraph of the passage used for the previous exercise, and repeat your subjective test for readability. Briefly summarize your results.</li>
	<li>Briefly explain the advantages and disadvantages of anti-aliasing, using the <a href="#webtypographyreview">typography review</a> in this article for guidance.</li>
	<li>Describe the order in which typefaces should be specified, in a <code>font-family</code> value.</li>
	<li>In a closed-book setting, choose at least three properties described in this article and list at least one valid value (other than defaults) for each. Demonstrate or describe the results of the use of these property/value pairs in a stylesheet.</li>
	<li>Create an element, populate it with copy, and assign it a <code>font-size</code> value of <code>9px</code>. Open the document containing this element in Internet Explorer, and cycle through the type sizes provided in the <span class="softwareUseSteps">View &#x2192; Text Size</span> menu. Evaluate the suitability of these results on sites with large numbers of middle aged and elderly visitors.</li>
</ul>


<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/28-inheritance-and-cascade/" rev="prev" title="link to the previous article in the series">Previous article—Inheritance and Cascade</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/30-the-css-layout-model-boxes-border/" rel="next" title="link to the next article in the series">Next article—The CSS layout model—boxes, borders, margins, padding</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>

<p><img alt="Picture of the article author Ben Henick" src="http://forum-test.oslo.osa/kirby/content/articles/152-29-text-styling-with-css/benhenick.jpeg" class="right" /></p>

<p>Ben Henick has been building Web sites in one capacity or another since September 1995, when he took on his first Web project as an academic volunteer. Since then, most of his work has been done on a freelance basis.</p>

<p>Ben is a generalist; his skillset touches on nearly every aspect of site design and development, from CSS and HTML, to design and copywriting, to PHP/MySQL and JavaScript/Ajax.</p>

<p>He lives in Lawrence, Kansas, with three computers and zero television sets. You can read more about him and his work at <a href="http://www.henick.net/">henick.net</a>.</p>
