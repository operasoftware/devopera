Title: Opera Web Standards Curriculum glossary
----
Date: 2008-09-26 15:25:25
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

<p>In this document we have listed a lot of the most common/important terms relating to web design and development, and their definitions, so you can look up anything that you are not sure about throughout your journey across the far reaches of the Opera Web Standards Curriculum. Let us know if you find any errors in this document, or any terms you think need to be added.</p>

<h2>A</h2>
<dl>
    <dt id="absolute-unit">absolute unit</dt>
    <dd><strong>in css includes in, cm, mm, pt, pc</strong></dd>

    <dt id="alignment">alignment</dt>
    <dd><strong>Main concepts: left, right, centred, justified</strong></dd>

    <dt id="ascender">ascender</dt>
    <dd>The stem of a <a href="#glyph">glyph</a> such as &#x201C;d&#x201D; or &#x201C;h&#x201D; which terminates near a glyph&#x2019;s <a href="#cap-line">cap line</a>.</dd>
</dl>

<h2>B</h2>

<dl>
    <dt id="baseline">baseline</dt>
    <dd>The line on which the lowest terminals of most commonly used <a href="#glyph">glyph</a>s, excepting those with <a href="#descender ">descender</a>s, rest. The line as a whole is said to rest here.</dd>

    <dt id="blowout">blowout</dt>
    <dd>An event during which a layout which displays in an entirely unexpected fashion due to width and/or height miscalculations. When caused in fact by a bug in a mass market browser&#x2019;s rendering engine, blowouts inevitably inform future <a href="#test-case">test cases</a>.</dd>

    <dt id="bold">bold</dt>
    <dd></dd>

    <dt id="brute-force">brute force</dt>
    <dd>With focus on the second meaning from the <a href="http://www.catb.org/jargon/html/B/brute-force.html">Jargon File</a>: &#x201C;A primitive programming style in which the programmer relies on a computer&#x2019;s processing power instead of using his own intelligence to simplify the problem, often ignoring problems of scale and applying naive methods suited to small problems directly to large ones. The term can also be used in reference to programming style: brute-force programs are written in a heavy-handed, tedious way, full of repetition and devoid of any elegance or useful abstraction&#x2026;&#x201D; While Web markup is merely parsed and interpreted, rendering engine peculiarities and poorly trained designers give brute force a cozy home in untold thousands of style sheets, each filled with its share of repetitive property/value pairs that have no hope of being compressed into shorthand or more sensibly designed rule blocks.</dd>
</dl>

<h2>C</h2>

<dl>
<dt id="cap-line">cap line</dt>
	<dd>The line met by most uppercase letters and slightly exceeded by the terminals of the <a href="#ascender">ascenders</a> of many lowercase letters.</dd>

	<dt id="canvas">canvas</dt>
		<dd>That part of the Web browser interface in which a page is actually displayed. Depending upon the browser, <code>!DOCTYPE</code> declaration, and Content-Type in use, it is represented by either the <code>html</code> or <code>body</code> element. Not to be confused with the HTML5 canvas element.</dd>


    <dt id="centred">centred</dt>
    <dd></dd>

    <dt id="character">character</dt>
    <dd>A <a href="#glyph">glyph</a>, or set of glyphs that always appear together, within a <a href="#font">font</a>.</dd>

    <dt id="character-encoding">character encoding</dt>
    <dd></dd>

    <dt id="character-set">character set</dt>
    <dd>The full range of <a href="#character">character</a>s that can be included in a <a href="#font">font</a> intended for electronic documents, in which each character assumes a unique <a href="#code-position">code position</a>. Documents are said to be encoded in a given character set, and the client host might automatically re-encode the document in a different character set prior to display, if the preferred font is insufficiently compatible with the original character set. This can lead to the exposure of code position mismatches to a site visitor, which becomes an important consideration when the international nature of the Web is taken into account.</dd>
	
<dt id="code-position">code position</dt>
	<dd>The decimal or hexadecimal transposition of a <a href="#character">character</a>&#x2019;s bit encoding within its <a href="#character-set">character set</a>. These are exposed to producers who use HTML entities.</dd>
	
    <dt id="copy">copy</dt>
	<dd>The broad term for prose delivered by a writer.</dd>
	
    <dt id="container-element">container element</dt>
		<dd>The <code>%block</code> element that determines the current flow and/or positioning context.</dd>
</dl>

<h2>D</h2>

<dl>
<dt id="descender">descender</dt>
	<dd>The stems and legs of letters such as &#x201C;p&#x201D; and &#x201C;y&#x201D; which fall below the <a href="#baseline">baseline</a>.</dd>
</dl>

<h2>E</h2>

<dl>
    <dt id="edge-case">edge case</dt>
    <dd>In a site layout, a design requirement that is confined to a proprtionally small number of elements or documents.</dd>

    <dt id="em">em</dt>
    <dd><strong>Basic concept: typographic unit, defined as the point size of the font, traditionally the width of the M character was one em, but this doesn&#39;t often hold true in modern typefaces.</strong></dd>

    <dt id="en">en</dt>
    <dd><strong>Basic concept: typographic unit, defined as half the height of the font, usually the width of the letter n.</strong></dd>
</dl>

<h2>F</h2>

<dl>
    <dt id="flush">flush</dt>
    <dd>In a site layout, the state in which no <a href="#whitespace">whitespace</a> is present between two elements, or between content and the edges of its containing element.</dd>

    <dt id="flush-left">flush left</dt>
    <dd></dd>

    <dt id="flush-right">flush right</dt>

    <dt>font</dt>
    <dd>The entire collection of <a href="#character">character</a>s in a given style and/or weight (eg, <a href="#italic">italic</a>) of a particular <a href="#typeface">typeface</a>. In CSS, such glyphs are set with the <code>font-style</code> and <code>font-weight</code> attributes.</dd>

    <dt id="functional-notation">functional notation</dt>
    <dd><strong>to denote colors, attributes and URIs values in CSS. function-name(argument), e.g. url(http://eg.com)</strong></dd>
</dl>

<h2>G</h2>

<dl>
    <dt id="generic-font-family">generic font family</dt>
    <dd></dd>

        <dt id="glyph">glyph</dt>
	<dd>A single letter, numeral, mark, symbol, or ligature within a given <a href="#font">font</a>; usually but not always a synonym for <a href="#character">character</a>.</dd>

	<dt id="grid">grid</dt>
<dd>A composition device used to ensure that all elements in a layout will appear at coordinates that can be predicted with ease. The use of an effective grid makes a layout seem more coherent than would otherwise be the case.</dd>

	<dt id="gutter">gutter</dt>
	<dd>The <a href="#whitespace">whitespace</a> present between two adjacent margins, apparent as a result of <a href="#justification">justification</a>, bordering, or <a href="#rule-typography">rule</a> placement.</dd>

</dl>

<h2>H</h2>

<dl>
    <dt id="hanging-punctuation">hanging punctuation</dt>
    <dd></dd>

    <dt id="hyphenation">hyphenation</dt>
    <dd><strong>main concept: used to break words up at end of lines to avoid whitespace</strong></dd>
</dl>

<h2>I</h2>

<dl>
<dt id="italic">italic</dt>
	<dd>The designation of a <a href="#font">font</a> that blends calligraphic influences with the design of a <a href="#typeface">typeface</a>&#x2019;s book weight font.</dd>
</dl>

<h2>J</h2>

<dl>
    <dt id="justification">justification</dt>
    <dd>The practice of aligning multiple lines of type precisely to one or both of their common margins. In the case of full justification, this is usually accomplished by incrementally increasing word spacing in amounts that change from one line to the next. Justification of web copy is controlled by the <code>text-align</code> CSS attribute.</dd>

    <dt id="justified">justified</dt>
    <dd><strong>explain justified alignment here, or combine above?</strong></dd>
</dl>

<h2>K</h2>

<dl>
    <dt id="kerning">kerning</dt>
    <dd><strong>Important to point out difference between letter-spacing/tracking and kerning</strong></dd>

    <dt id="keyword-value">keyword value</dt>
    <dd></dd>

<dt id="kiss">KISS Principle</dt>
	<dd>Short for &#x201C;Keep It Simple, Stupid.&#x201D; A basic engineering axiom states that the more parts there are in a system, or the more interactions that take place between parts of a system, the greater the number of failure modes that will be designed into that system. The KISS Principle embodies the idea that by reducing the number of parts or interactions, a designer can reduce the number of failure modes as a matter of course.  With respect to CSS and HTML, parts are elements, and interactions usually correlate with the depth of a document tree &#x2014; so by reducing the number of elements and stylesheet rules attached to a layout, a development team can reduce the likelihood that a layout will break or require a future ground-up redesign.</dd>
</dl>

<h2>L</h2>

<dl>
    <dt id="leading">leading</dt>
    <dd>The amount of <a href="#whitespace">whitespace</a> between two adjacent lines of type, so-called because during the era of offset printing, the amount of space was controlled by inserting strips of lead between lines of type. In CSS, this element is controlled by the <code>line-height</code> attribute.</dd>

    <dt id="letter-spacing">letter-spacing</dt>
    <dd><strong>also known as tracking</strong></dd>

    <dt id="ligature">ligature</dt>
    <dd></dd>

    <dt id="lining-figures">lining figures</dt>
    <dd><strong>supported by all  core fonts except georgia.</strong></dd>

    <dt id="lorem-ipsum">lorem ipsum</dt>
    <dd><strong>keywords: greeked text, placeholder text.</strong></dd>
</dl>

<h2>M</h2>

<dl>
    <dt id="mean-line">mean line</dt>
    <dd><strong>main concept: imaginary line where none-ascending characters terminate</strong></dd>
    <dt id="monospaced-typeface">monospaced typeface</dt>
     <dd><strong>Note: generic font family is <code>monospace</code></strong></dd>
</dl>

<h2>N</h2>

<dl>
    <dt id="non-negative-number-value">non-negative number value</dt>
    <dd></dd>

    <dt id="number-value">number value</dt>
    <dd></dd>
</dl>

<h2>O</h2>

<dl>
    <dt id="oblique">oblique</dt>
    <dd>The designation of a <a href="#font">font</a> derived from the book weight font of a <a href="#typeface">typeface</a> by slanting the latter&#x2019;s strokes slightly clockwise.</dd>

    <dt id="oldstyle-figures">oldstyle figures</dt>
    <dd>only Georgia of the core fonts supports oldstyle (but not lining)</dd>

    <dt id="ornamental-typeface">ornamental typeface</dt>
    <dd>GFF is <code>fantasy</code></dd>

    <dt>orphan</dt>
    <dd></dd>
</dl>

<h2>P</h2>

<dl>
    <dt id="pagination">pagination</dt>
    <dd><strong>Useful to explain for CSS print profile/media type et al.</strong></dd>

    <dt id="pica">pica</dt>
    <dd><strong>Basic concept: A modern pica used by computers is 4.233mm or 0.166&quot;</strong></dd>

    <dt id="point">point</dt>
    <dd><strong>Basic concept: A modern point there are 72 points to the inch, and 12 points to the pica.</strong></dd>
</dl>

<h2>Q</h2>


<h2>R</h2>

<dl>
    <dt id="ragging">ragging</dt>
    <dd>Apposite of <a href="#justification">justification</a>, this is the practice of leaving word spacing unchanged, thus causing lines with common margins to have different lengths.</dd>

    <dt id="recommendation">Recommendation</dt>
    <dd>The World Wide Web Consortium (W3C) title for what is often referred to as a web standard. Because the W3C does not certify anyone, because it has no bylaws or procedures to penalize members for violating Recommendations in their implementations, and because the practices set forth in W3C literature do not carry the expressed force of statute law, W3C only applies the term &#x201C;standard&#x201D; to other organizations&#x2019; work, as appropriate.</dd>

    <dt id="relative-unit">relative unit</dt>
    <dd><strong>in css includes, em, ex, px</strong></dd>

    <dt id="rendering-engine">rendering engine</dt>
    <dd>Web browsers actually exercise a number of functions not visible to the typical Web user: network transactions, encryption, user interactivity, image decoding, and interaction with a client host&#x2019;s filesystem (among others). The rendering engine is that part of a browser&#x2019;s codebase which actually turns a developer&#x2019;s HTML and CSS into page layouts.  Also known as a layout engine.</dd>

    <dt id="river">river</dt>
    <dd><strong>main concept: vertical lines of white space down a paragraph</strong></dd>

    <dt id="rule">rule</dt>
    <dd id="rule-typography">The generic name for any line of arbitrary length and weight which finds its way into a layout.</dd>
</dl>

<h2>S</h2>

<dl>
    <dt id="sans-serif-typeface">sans serif typeface</dt>
    <dd>TEXT GOES HERE</dd>

    <dt id="script-typeface">script typeface</dt>
    <dd><strong>generic font family is <code>cursive</code></strong></dd>

    <dt id="serif">serif</dt>
    <dd>A flaring foot drawn on one or both sides of the terminal of a stroke, most often found around the <a href="#baseline">baseline</a> and <a href="#cap-line">cap line</a> of a line of type; also the classification of any <em>typeface</em> which incorporates this feature into its design (oppose <a href="#sans-serif">sans-serif</a>).</dd>

    <dt id="serif-typeface">serif typeface</dt>
    <dd><strong>Note: tidy up above and point here</strong></dd>

    <dt id="small-caps">small caps</dt>
    <dd></dd>

    <dt id="stem">stem</dt>
    <dd></dd>

    <dt id="string-value">string value</dt>
    <dd></dd>

    <dt id="subscript">subscript</dt>
    <dd></dd>

    <dt id="superscript">superscript</dt>
    <dd></dd>

    <dt id="symbol-typeface">symbol typeface</dt>
    <dd>No GFF in CSS as far as I know - most likely because symbols are different per character for different symbol fonts, making fallback pointless.</dd>
</dl>

<h2>T</h2>

<dl>
<dt id="test-case">test case</dt>
	<dd>A scenario of site use or misuse, worked out in advance by its development team.  In a formal quality assurance setting, these scenarios are deliberately played out in order to ensure that the site will behave as expected under circumstances that are both reasonable and foreseeable.</dd>
<dt id="typeface">typeface</dt>
	<dd>A family of type that shares strict commonality of design across all of its <a href="#font">font</a>s. A <strong>stroke</strong> is part of a <strong>glyph</strong>, which is identical to or part of at least one <strong>character</strong>. A complete collection of characters of identical weight and/or style is a <strong>font</strong>, and a collection of fonts with strict commonalities of design is a <strong>typeface</strong>.</dd>
<dt id="taxonomy">taxonomy</dt>
	<dd><p>The deliberate hierarchical arrangement of a body of inter-related matter.  The classical example is the one published by Carl Linnaeus in 1735 for application to the study of biology, for example:</p>
		<ul title="Man, as defined taxonomically.">
			<li><strong>Domain:</strong> <i class="speciesClassfication">Eukaryota</i> [comprising nucleic cells]<ul>
				<li><strong>Kingdom:</strong> <i class="speciesClassification">Animalia</i> [animals]<ul>
					<li><strong>Phylum:</strong> <i class="speciesClassfication">Chordata</i> [vertebrates]<ul>
						<li><strong>Class:</strong> <i class="speciesClassfication">Mammalia</i> [possessing mammary glands]<ul>
							<li><strong>Order:</strong> <i class="speciesClassfication">Primates</i> [literally &#x201C;of the first rank&#x201D;]<ul>
								<li><strong>Family:</strong> <i class="speciesClassfication">Hominidae</i> [higher 	primates]<ul>
									<li><strong>Genus:</strong> <i class="speciesClassfication">Homo</i> [systematically tool-using, literally &#x201C;similar to Man&#x201D;]<ul>
										<li><strong>Species:</strong> <i class="speciesClassfication">sapiens</i> [literally &#x201C;knowing&#x201D;]</li>
									</ul></li>
								</ul></li>
							</ul></li>
						</ul></li>
					</ul></li>
				</ul></li>
			</ul></li>
		</ul>
	<p>Other examples include subject-specific classification systems used in commerce, information science, and medicine.  All of these involve the use of what are called <em>controlled vocabularies</em>: bounded lists, often created over years through popular use, of terms relating to a single subject or group of subjects.  Where one term on a given list is understood to refer to a superset of other terms, it is assigned to a higher echelon within its taxonomy.  The relationship between this practice and the organization of a typical site&#x2019;s primary navigation should be readily apparent to the typical reader.</p></dd>
</dl>

<h2>U</h2>

<h2>V</h2>

<h2>W</h2>

<dl>
    <dt id="weight">weight</dt>
    <dd>(i): The importance of a directive like a style sheet rule.</dd>
    <dd>(ii) In addition, weight is also the heaviness or lightness (width, if you will) of rules, borders, and lettering. <span class="edNote">Added &quot;weight.&quot;</span></dd>

    <dt id="whitespace">whitespace</dt>
    <dd>Any space in a layout not occupied by <em>copy</em>, headlines, illustration, borders, or <em>rule</em>s.</dd>

    <dt id="widow">widow</dt>
    <dd></dd>
</dl>

<h2>X</h2>

<dl>
<dt id="x-height">x-height</dt>
	<dd>The height of a lowercase &#x201C;x&#x201D;, which tends to be shared by most of the lowercase letters in a <a href="#font">font</a>. Referenced in CSS by the <code>ex</code> unit. <strong>needs to be re-written as not strictly true (well kind of).  Actual definition is the distance between the mean line and the baseline. This is the height of the x, u, v, w and z in many, but not all fonts.  Others either ascend, descend, or exceed the x-height to look nicer (characters with curved tops like c, o and so on.</strong></dd>
</dl>


<h2>Y</h2>


<h2>Z</h2>



<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>
