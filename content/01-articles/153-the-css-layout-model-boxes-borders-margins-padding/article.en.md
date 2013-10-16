Title: The CSS layout model - boxes, borders, margins, padding
----
Date: 2008-09-26 06:34:20
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
<li class="prev"><a href="http://dev.opera.com/articles/view/29-text-styling-with-css/" rel="prev" title="link to the previous article in the series">Previous article—Text styling with CSS</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/31-css-background-images/" rel="next" title="link to the next article in the series">Next article—CSS background images</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>At first glance, the CSS layout model is a straightforward affair.  Boxes, borders, and margins are fairly simple objects, and CSS syntax provides a simple way to describe their characteristics.</p>
<p>However, browser rendering engines follow a long list of rules laid down in the CSS 2.1 Recommendation, and a few of their own. For this reason, there are a lot of details that need to be understood before advanced techniques can be added to a stylist&#x2019;s repertoire.</p>
<p>In this article you will be introduced to the CSS properties that manipulate the layout of HTML elements, including their borders, margins, and much more. Coverage will also include some of the rules mentioned above.  Advanced column layout and grid-focused techniques will be discussed in later articles that will explore form layout, floats, clearing, and positioning in greater detail. There will be many code examples linked to throughout the article to demonstrate techniques discussed, but if you want to work through the code on your local machine, you can <a href="article30_examples.zip">download all the code examples here</a>.</p>

<p>The contents of this article are as follows:</p>

<ul>
  <li><a href="#changingcomposition">Changing composition: CSS margins, borders, and padding</a>

    <ul>
      <li><a href="#whitespace">Putting whitespace around an object: the margin-top, margin-right, margin-bottom, margin-left, and margin properties</a>
        <ul>
          <li><a href="#automargins">Auto margins</a></li>
          <li><a href="#negativemargins">Negative margins</a></li>
          <li><a href="#collapsingmargins">Collapsing margins</a></li>
          <li><a href="#demo1">Demonstration 1</a></li>
        </ul>
      </li>
      <li><a href="#addingborders">Adding a border to an object: border properties</a>
        <ul>
          <li><a href="#borderwidth">The border-width properties</a></li>
          <li><a href="#bordercolor">The border-color properties</a></li>
          <li><a href="#bordershorthand">The border shorthand property and its four cousins, in more detail</a></li>
          <li><a href="#fivebordershorthandproperties">Creating rules: the rationale for five border shorthand properties&#x2026; instead of one</a></li>
          <li><a href="#whysomanyproperties">&#x2026;And why so many properties? They&#x2019;re just borders, right?</a></li>
          <li><a href="#demo2">Demonstration 2</a></li>
        </ul>
      </li>
      <li><a href="#padding">When margins alone aren&#x2019;t enough: padding properties</a>
        <ul>
           <li><a href="#demo3">Demonstration 3</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#widthandheight">Working with element width and height</a>
    <ul>
      <li><a href="#widthandheightbasics">Width and height basics</a></li>
      <li><a href="#minandmax">min-width, max-width, min-height, and max-height</a>
        <ul>
          <li><a href="#demo4">Demonstration 4</a></li>
        </ul>
      </li>
      <li><a href="#overflow">Overflow: fencing in code, or setting it free</a>
        <ul>
          <li><a href="#fouroverflowvalues">The results of the four overflow values</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#cssboxmodels">The CSS box models: fitting everything together</a>
    <ul>
      <li><a href="#choosingrightunits">Choosing the right units for your layout</a>
        <ul>
          <li><a href="#sizingelements">The principal rule of sizing elements: mix proportional and static units with care, or not at all</a></li>
          <li><a href="#unittypeprocons">Choosing the right unit type for layout: advantages and disadvantages</a></li>
        </ul>
      </li>
      <li><a href="#boxmodelcomponents">The box model components</a></li>
      <li><a href="#W3Cboxmodel">The W3C box model: everything is additive</a>
        <ul>
          <li><a href="#proportionalmarginspadding">Proportional margins and padding in the W3C box model</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#documentflow">Working with document flow</a>
    <ul>
      <li><a href="#elementtypesdisplay">Element types and the display property</a>
        <ul>
          <li><a href="#demo5">Demonstration 5</a></li>
        </ul>
      </li>
      <li><a href="#float">Causing elements to flow <em>around</em> others: the float property</a>
        <ul>
          <li><a href="#demo6">Demonstration 6</a></li>
        </ul>
      </li>
      <li><a href="#floatandclear">Forcing elements <em>below</em> their floated predecessors: the clear property</a></li>
    </ul>
  </li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#furtherreading">Further reading</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
</ul>


<h2 id="changingcomposition">Changing composition: CSS margins, borders, and padding</h2>

<p>Many HTML elements, such as <code>div</code> elements and headings, are rendered by default to occupy the entire width of the browser canvas and force a terminal linebreak, so that several such elements in series would render in a top-to-bottom stack on the document canvas. </p>

<p>However, HTML elements and the browser styles usually set for them are inadequate to the full range of use cases developers are called upon to consider in their work. The way CSS and HTML work together has been tuned to &#x201C;fill in the gaps&#x201D; so that <code>class</code>es and <code>id</code>s can add semantic meaning to markup while style sheet rules can precisely change the layout and presentation of content&#x2014;perhaps even by canceling out large parts of the browser default styles altogether.</p>

<p>Careful control of whitespace is among a designer&#x2019;s most important tools &#x2014; and in the opinion of this author, the single most important. However, the degree of control over whitespace that brings high production values to a site design is  absent from default browser stylesheets, which means that stylists typically make frequent use of the margin, border, padding, and other CSS layout properties explained in this article.</p>

<p>Margins, borders, and padding are arranged as shown in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/figure1.png" alt="how css layout works with margin outside the box and padding inside the box" /></p>
<p class="comment">Figure 1: An explicit illustration of the various parts of an element box, labelled with associated CSS properties.</p>

<h3 id="whitespace">Putting whitespace around an object: the margin-top, margin-right, margin-bottom, margin-left, and margin properties</h3>

<p>Margins can be specified singly, or in a shorthand rule.  Furthermore, the shorthand rule still allows control of individual borders around an object. Valid values are usually specified in <code>px</code> or <code>em</code> units (pixels or ems). On print-specific stylesheets <code>in</code>, <code>cm</code>, or <code>pt</code> units might be used instead (inches, centimeters or points).</p>
<p>In all cases <code>%</code> (percentage) is a valid value, but needs to be used with care; such values are calculated as a proportion of the parent element&#x2019;s width, and careless provision of values might have unintended consequences. This challenge is explained in more detail during the discussion of the CSS box model below.</p>
<p>All inline elements except images lack margins, and will not take margin values. For a list of these elements, consult Table 2 below.</p>



<h4 id="automargins">auto margins</h4>

<p>Depending upon the circumstances, provision of an <code>auto</code> value instructs the browser to render a margin according to the value provided in its own stylesheet.  However, when such a margin is applied to an element with a meaningful width, an <code>auto</code> margin instead causes all of the available space to be rendered as whitespace.</p>

<p>Given the following rule:</p>

<pre>.narrowWaisted {
  width: 16.667em;
  margin: 1em auto 1em auto;
}</pre>

<p>&#x2026;A block element of the <code>class</code> <code>narrowWaisted</code> will center itself in the middle of the available canvas.</p>

<p>&#x2026;Or the right margin of an applicable element can be set to some relatively small value, while the left margin is assigned an <code>auto</code> value.</p>
<p>When that&#x2019;s done, such an element will instead appear nearly flush-right.</p>

<h4 id="negativemargins">Negative margins</h4>

<p>All of the margin properties can be assigned <em>negative</em> values.  When this is done, an adjacent margin can be effectively &#x201C;canceled out&#x201D; to any degree.  Given a large enough negative margin applied to a large enough element, the affected adjacent element can even be <em>overlapped</em>.</p>

<p>for example, consider the following simple <code>div</code> elements (taken from <a href="negativemargins1.html">example file negativemargin1.html</a>.)</p>

<pre><code>&lt;div id=&quot;header&quot;&gt;&lt;h1&gt;Lovely header&lt;/h1&gt;&lt;/div&gt;
&lt;div id=&quot;content&quot;&gt;&lt;p&gt;Overlapping text is entirely unreadable&lt;/p&gt;&lt;/div&gt;</code></pre>

<p>When styled with the following CSS</p>

<pre><code>body {background-color:white; font-family:Geneva, Arial, Helvetica, sans-serif;}
#header { background-color:yellow; }
h1 { color:red;; font-size:2em; }</code></pre>

<p>It creates the output shown in Figure 2:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/negativemargins1.jpg" alt="Two elements with no negative margins applied" /></p>
<p class="comment">Figure 2: The two elements from our simple example. Nothing special to see here.</p>

<p>Here comes the interesting part. Now we’ll add a fairly sizeable negative margin to the top of the bottom element, using the following rule:</p>

<pre><code>#content {margin-top:-3em;}</code></pre>

<p>This gives us the visual effect of shifting the element up so it overlaps with the heading, as shown in Figure 3 (see the <a href="negativemargins2.html">negativemargins2.html example file</a> for a live example).</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/negativemargins2.jpg" alt="Two elements with negative margins applied" /></p>
<p class="comment">Figure 3: With a negative margin applied, the bottom element shifts upwards and overlaps the heading.</p>


<h4 id="collapsingmargins">Collapsing margins</h4>

<p>In cases where two similar and adjacent block elements share margins that are greater than zero, only the larger of the two margins will be applied. For example, take the following rule:</p>
<pre>p {
  margin: 1em auto 1.5em auto;
}</pre>

<p>If a document including this style rule is rendered <em>literally</em>, the resulting margin between two paragraphs in series wouild be <code>2.5em</code>, as the sum of the bottom margin of paragraph 1 (1.5em) and the top margin of paragraph 2 (1em). However, due to the application of collapsing margins, the margin between them is only <code>1.5em</code>.</p>
<p>Lists and headings are peculiar among block elements, so their margins will not be collapsed into the margins of the other block elements.</p>

<h4 id="demo1">Demonstration 1</h4>
	<p>In the text styling article, the typesetting of the opening section of an F. Scott Fitzgerald story was done with many of the tools made available by CSS. For the demonstration in this article, that same page is being put to use again, with some minor changes (principally, the addition of a container element around all of the copy). The text styling is unchanged, but the few layout styles applied to that demonstration have been removed.</p>
	<p>For starters, margins will be added to all of the elements that will need them.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="demo_rev0.html">Minimally styled demonstration document</a></li>
		<li><a href="layout_00.css">Beginning stylesheet</a></li>
		<li><a href="demo_rev1.html">New margins on <code>body</code>, title, pullquote, document container, and paragraphs</a></li>
		<li><a href="layout_01.css">Demo 1 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
<pre>body { margin: 0; }
  #main { margin: 0 auto 0 auto; }
  h1 { margin: 0 0 1em 0; }
  .pullQuote { margin: auto 0 1em 1em; }
  p { margin: 0; }
  .attribution { margin: 0 0 1.5em 0; }</pre>

<h3 id="addingborders">Adding a border to an object: border properties</h3>

<p>There <em>is</em> a <code>border</code> shorthand property, but it&#x2019;s only useful when you want to provide a complete and consistent border around all four sides of an element. It&#x2019;s also possible to set the weight (width), style, and colour of any of an element&#x2019;s four possible borders by using any meaningful combination of the following properties:</p>
<ul>
	<li><code>border-width</code></li>
	<li><code>border-style</code></li>
	<li><code>border-color</code></li>
	<li><code>border-top</code></li>
	<li><code>border-top-width</code></li>
	<li><code>border-top-style</code></li>
	<li><code>border-top-color</code></li>
	<li><code>border-right</code></li>
	<li><code>border-right-width</code></li>
	<li><code>border-right-style</code></li>
	<li><code>border-right-color</code></li>
	<li><code>border-bottom</code></li>
	<li><code>border-bottom-width</code></li>
	<li><code>border-bottom-style</code></li>
	<li><code>border-bottom-color</code></li>
	<li><code>border-left</code></li>
	<li><code>border-left-width</code></li>
	<li><code>border-left-style</code></li>
	<li><code>border-left-color</code></li>
</ul>

<h4 id="borderwidth">The border-width properties</h4>

<p>These properties behave exactly as one would expect: they assign explicit weight to one or more borders.</p>
<p>The <code>border-width</code> shorthand property accepts values in the same notation as the <code>margin</code> shorthand property, except that percentage values are unsupported. You might well see yourself writing a rule like the following:</p>
<pre>td {
	border-width: 1px 0 0 1px;
}</pre>

<h4 id="borderstyle">The <code>border-style</code> properties</h4>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/figure4.png" alt="eight different values for border style in CSS" /></p>
	<p class="comment">Figure 4: the eight common border styles in action.</p>



<p>The <code>border-style</code> properties commonly accept any of the following values:</p>
<dl>
	<dt><code>dashed</code></dt>
		<dd>The length of dashes, and the amount of whitespace between them, is determined by the browser.</dd>
	<dt><code>dotted</code></dt>
		<dd>The amount of whitespace between dots (which may take on any shape with an aspect ratio of 1) is determined by the browser.</dd>
	<dt><code>double</code></dt>
		<dd>The provided width will be divided into thirds and rendered in filled-negative-filled order.</dd>
	<dt><code>groove</code></dt>
		<dd>An <code>outset</code> will be rendered immediately inside and flush to an <code>inset</code>.</dd>
	<dt><code>inset</code></dt>
		<dd>The border will be shaded to make it appear as if the element to which it is applied is depressed into the canvas.</dd>
	<dt><code>none</code></dt>
		<dd>Equivalent to specifying a <code>-width</code> of zero.</dd>
	<dt><code>outset</code></dt>
		<dd>The border will be shaded to make it appear as if the element to which it is applied extrudes from the canvas.</dd>
	<dt><code>ridge</code></dt>
		<dd>An <code>inset</code> will be rendered immediately inside and flush to an <code>outset</code>.</dd>		
	<dt><code>solid</code></dt>
		<dd>The border appears as an unbroken, unshaded line.</dd>
</dl>
<p>When the <code>border-style</code> shorthand property is used, it can accept up to four values which are applied in the same fashion as <code>margin</code> shorthand values.</p>
<p>The practice of obscuring a border (rather than omitting it) is handled by the <code>-color</code> properties.</p>

<h4 id="bordercolor">The border-color properties</h4>

<p>Finally, it&#x2019;s possible to set any color on any individual border, with either a single property such as those listed above, or the <code>border-color</code> shorthand property.  Refer to the explanation of the the <code>margin</code> shorthand property for details about the results of providing fewer than four values.</p>
<p>Like <code>background-color</code>, <code>border-color</code> can take a value of <code>transparent</code>. This can be useful in dealing with edge cases that require consistent composition but not consistent use of borders.</p>

<h4 id="bordershorthand">The border shorthand property and its four cousins, in more detail</h4>

<p>Unlike the various <code>-width</code>, <code>-style</code>, and <code>-color</code> border properties, these five properties allow you to define the three characteristics of an object&#x2019;s four borders, or of any sigle border at a time.  Valid <code>border</code> (etc) shorthand values contain any or all of the width, style, and color properties that apply to that border; the only limitation is that you must refer to either one side of an element at a time, or all four at once.</p>
<p>Consider the following <code>border</code> rule:</p>

<pre>#borderShorthandExample {
	border: 2px outset rgb(160,0,0);
	padding: .857em;
	background-color: rgb(255,224,224);
}</pre>
<p style="border: 2px outset rgb(160,0,0);padding: .857em;background-color: rgb(255,224,224);">An element to which the above rule is applied would look exactly like this paragraph.</p>
<p>When a value is omitted from a <code>border</code> shorthand rule, the rendered element will display a default result:</p>
<ul>
	<li><strong>Border width</strong> will be determined by the browser.</li>
	<li><strong>Border style</strong> will be <code>solid</code>.</li>
	<li><strong>Border color</strong> will be identical to the <code>color</code> applied to the element in question.</li>
</ul>

<h4 id="fivebordershorthandproperties">Creating rules: the rationale for five border shorthand properties&#x2026; instead of one</h4>

<p>The &#x201C;rules&#x201D; discussed here are lines drawn through a layout, not directives to follow.  Such lines enhance contrast between an element and its neighbouring space, and in many cases they help to create the illusion of depth within a layout.  This last result is exemplified by the existence of the <code>inset</code> and <code>outset</code> border styles.</p>
<p>While these same effects can be accomplished by putting borders around all four sides of an element, the ability to draw precisely defined lines in a layout allows its designer considerable control over details.</p>

<h4 id="whysomanyproperties">&#x2026;And why so many properties? They&#x2019;re just borders, right?</h4>

<p>When a layout is created which demands exceptional skill from a stylist, there will be a need to account for edge cases; this was already raised in the earlier discussion of margins.</p>
<p>Because of the way in which site designs are executed, you will encounter many cases where this element or that might have similar structural properties to other elements in a document, but have different presentation requirements.  In these situations it makes perfect sense to write one rule for the most common case, and additional rules for each of the edge cases.  It&#x2019;s for this reason that the <code>auto</code> and <code>inherit</code> values exist: to use a default style as an edge case.</p>
<p>In the case of borders, edge cases might well require the alteration of a single characteristic of a border on a single side of an element &#x2014; and when one wisely follows the KISS Principle, it&#x2019;s usually best to stick to changing <em>only</em> those details which <em>need</em> to be changed.</p>

<h4 id="demo2">Demonstration 2</h4>
<div class="demoPointer">
	<p>Certain sections of the document should be given embellishment in the form of rules and borders.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="demo_rev2.html">Add a bottom rule to the title, and a border around the pullquote</a></li>
		<li><a href="layout_02.css">Demo 2 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
	<pre><code>h1 { border-bottom: 1px solid rgb(153,153,153); }
.pullQuote { border: 1px solid rgb(153,153,153); }</code></pre>


<h3 id="padding">When margins alone aren&#x2019;t enough: padding properties</h3>

<p>You will encounter elements with background colours in secondary or accent hues that require gutters between content and margins. In other situations, you&#x2019;ll need to provide space between borders and the copy near them.</p>
<p>In such cases and many others, you&#x2019;ll get considerable use from the <code>padding</code>, <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code> properties. These properties insert negative space between the margins or borders of an element and its content. See Figure 1 above for a clear illustration of the relationship between margins, borders, and padding.</p>
<p>These properties behave in exactly the same manner as margin properties, with the following exceptions:</p>
<ul>
	<li><code>auto</code> values are functionally useless in references to padding properties.</li>
	<li>Negative padding values are invalid.</li>
	<li>Padding is never collapsed.</li>
	<li>Margin values are not applied to inline elements, but padding values are.</li>
</ul>

<h4 id="demo3">Demonstration 3</h4>
	<p>Gutters should be provided for the elements to which borders were previously added.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="demo_rev3.html">Insert gutters adjacent to the borders previously put on the title and pullquote</a></li>
		<li><a href="layout_03.css">Demo 3 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
<pre>body { padding: 0; }
  h1 { padding: .5em 0 .5em 0; }
  .pullQuote { padding: .5em; }</pre>


<h2 id="widthandheight">Working with element width and height</h2>

<p>Most elements can have their dimensions altered as a matter of course. You&#x2019;ve seen this capability demonstrated earlier in this article, during the discussion of <code>auto</code> margins.</p>
<p>The CSS properties used to manipulate the dimensions of elements are <code>width</code>, <code>height</code>, <code>min-width</code>, <code>max-width</code>, <code>min-height</code>, and <code>max-height</code>. These properties can then be divorced from (or linked to) the dimensions of element contents with the <code>overflow</code> property.</p>
<p>There&#x2019;s also a <code>clip</code> property which <em>hides</em> parts of an element <em>inside</em> its margins.  However, it&#x2019;s omitted from this article because of its narrow scope of use.</p>

<h3 id="widthandheightbasics">width and height basics</h3>

<p>As a rule, <code>width</code> and <code>height</code> produce exactly the results one would expect.  However, their use carries some important caveats.</p>
<ul>
	<li><strong><code>width</code> and <code>height</code> cannot be applied to <code>inline</code> elements&#x2026;</strong> There are several elements (such as <code>span</code>, <code>strong</code>, and <code>em</code>) that will ignore the application of <code>width</code> and <code>height</code> values under typical circumstances. A list of these elements can be found in the discussion of element types, later in this article.</li>
	<li><strong>&#x2026;except for images, which can be assigned <code>width</code> and <code>height</code> even though they are inline elements.</strong> The CSS 2.1 Recommendation refers to images as &#x201C;replaced&#x201D; elements, which means that the browsers should always treat them as possessing static dimensions.  For this reason, those dimensions can be arbitrarily altered.</li>
	<li><strong><code>width</code> and <code>height</code> are only two of the properties that can influence the functional dimensions of an element.</strong> As a result, it&#x2019;s easy to put yourself in situations where an element is too small (usually too narrow) to hold its content as expected, leading to blowouts.  The CSS box model discussion below addresses this issue.</li>
	<li><strong>Rendering bugs in Microsoft Internet Explorer (IE) make it necessary to specify explicit <code>width</code> or <code>height</code> property/value pairs for some elements.</strong> There are some peculiarities about IE&#x2019;s rendering engine that can only be resolved with brute force (see the Glossary).  Most of these peculiarities are known and slated to be removed from IE 8, but until that version has replaced its predecessors within the IE install base, this issue will be an inevitable test case.  <a href="http://www.positioniseverything.net/">PositionIsEverything.net</a> and the <a href="http://css-discuss.incutio.com/">CSS-Discuss Wiki</a> provide ample information about this issue and techniques that work around it.</li>
	<li><strong>Rounding algorithms will, from time to time, cause off-spec differences in layout between browsers which display content via LCD, LED, or CRT (<code>type=&quot;screen&quot;</code>) display media.</strong> The <code>screen</code> media type ultimately requires all units to be coverted into pixel measurements, which may map differently from one browser to the next.</li>
</ul>

<h3 id="minandmax">min-width, max-width, min-height, and max-height</h3>

<p>From time to time you will encounter situations in which you need to constrain the size of an element &#x2014; usually to ensure that a proportionally-sized column will always retain a readable width. The various <code>min-</code> and <code>max-</code> properties answer this requirement. As is the case with <code>width</code> and <code>height</code>, the results one can expect from using these properties are fairly predictable as a matter of course.</p>
<p>However, in the experience of this author, these properties have limited use (although other authors disagree). Like plain old <code>width</code> and <code>height</code>, they&#x2019;re subject to rounding errors that can deliver entirely unexpected results.  More importantly, they are completely unsupported in IE 6, which still holds a considerable market share as of July 2008.</p>

<h4 id="demo4">Demonstration 4</h4>
	<p><code>auto</code> margins were placed to the left and right of the page container. Now it needs a <code>width</code> for those margin values to make any sense. Furthermore, the plan is to assign a <code>float</code> value to the pullquote, so that&#x2019;ll get a width, too.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="demo_rev4.html">Change the width of the document container and the pullquote</a></li>
		<li><a href="layout_04.css">Demo 4 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
<pre>#main { width: 42em; }
.pullQuote { width: 14em; }</pre>

<h3 id="overflow">overflow: fencing in content, or setting it free</h3>

<p>When an element&#x2019;s <code>width</code> or <code>height</code> are set, it&#x2019;s sometimes necessary to consider what results are desired in the event that the contents of that element take up more space than is strictly available.  This is especially true on sites with both user generated content and strict layout specifications.</p>
<p>The <code>overflow</code> property and its four valid values &#x2014; <code>visible</code>, <code>hidden</code>, <code>auto</code>, and <code>scroll</code> &#x2014; are provided to handle such circumstances. Figure 5 illustrates the effect they have when applied to an element whose content spills out of its bounding box.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/figure5.png" alt="the effects of the CSS overflow property" /></p>
<p class="comment">Figure 5: The effects of the CSS overflow property.</p>

<h4 id="fouroverflowvalues">The results of the four overflow values</h4>

<dl>
	<dt><code>visible</code> <strong>(default)</strong></dt>
		<dd>Contents beyond the available dimensions of an element are displayed <em>without</em> affecting the flow or margins of adjacent elements. Consequently, content of one element may appear to <em>collide</em> with the content of its neighbours. Techniques for avoiding this outcome and special cases caused by rendering issues in IE are discussed in later articles.</dd>
	<dt><code>hidden</code></dt>
		<dd>Any content which lies beyond the bounds of an element will be hidden from view.</dd>
	<dt><code>auto</code></dt>
		<dd>The dimensions of an element will be constrained just as when the <code>hidden</code> value is used, except that scrollbars will be created as needed to make overflowing content accessible to the visitor.</dd>
	<dt><code>scroll</code></dt>
		<dd>Both vertical and horizontal scrollbars will be incorporated into the element, even if they&#x2019;re not needed.</dd>
</dl>

<h2 id="cssboxmodels">The CSS box models: fitting everything together</h2>

<p>Now that the fundamental layout properties have been covered, it&#x2019;s time to discover how the width of an element is rendered by the browser according to its CSS properties &#x2014; and how to keep elements from blowing out your layouts. Some results will make perfect sense, while others will seem horribly counter-intuitive. To complicate matters, there are actually two layout algorithms to consider: the model specified by the World Wide Web Consortium (W3C) in the CSS 2.1 Recommendation, and the one used in older versions of IE.</p>

<h3 id="choosingrightunits">Choosing the right units for your layout</h3>

<p>As in the case of text, elements can be sized with either proportional units such as <code>%</code> or <code>em</code>, or static units like <code>px</code>.  Something else to consider is that the browser canvas is always sized at a static value that cannot be assumed without using client-side script code to either retrieve that size, or resize the window &#x2014; techniques which are ill-suited to the demands of accessibility, usability, and media portability.</p>

<h4 id="sizingelements">The principal rule of sizing elements: mix proportional and static units with care, or not at all</h4>

<p>The default value for both <code>width</code> and <code>height</code> is <code>auto</code>, which in Standard English is a directive to &#x201C;use the available space.&#x201D; The result for block elements is that their computed <code>width</code> occupies <em>all</em> of that space. With respect to <code>height</code>, elements expand to enclose their content by default.</p>
<p>If you change <code>width</code> and <code>height</code> values, you must then be careful to ensure that the contents of an element will fit (with their margins, borders, and padding) into the width you&#x2019;ve specified.  The easiest way to do this by engaging in the following process:</p>
<ol>
	<li>Consider the largest maximum width likely to be available for your layout, given common display resolutions and/or type sizes.  As of this writing, this measurement will typically be something around 800 or 1024 pixels.  The broader the expected audience of your site, the more likely it is that the smaller of these values should be chosen.</li>
	<li>Create a container element for your entire document that is set to an expected width less than the width worked out in step #1.</li>
	<li>Use the same unit type when setting layout properties for the elements within the container element created in step #2.</li>
</ol>

<h4 id="unittypeprocons">Choosing the right unit type for layout: advantages and disadvantages</h4>

	<table>
		
		<thead>
			<tr>
				<th>Unit</th>
				<th>Advantages</th>
				<th>Disadvantages</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>em</th>
				<td><ul>
					<li>Best suited to creating highly precise layout grids in two dimensions</li>
					<li>When used in relation to document containers, makes possible layouts that expand or contract according to the size of body copy</li>
					<li>The computed dimensions of elements become easily predictable</li>
				</ul></td>
				<td><ul>
					<li>Fractional units might expand or contract with slight differences between browsers</li>
					<li>To achieve the best results, all <code>font-size</code> and <code>line-height</code> values in the document should be set to explicit and predictable values</li>
				</ul></td>
			</tr>
			<tr>
				<th>percentage</th>
				<td><ul>
					<li>Best suited to <em>completely</em> flexible layouts</li>
					<li>Easiest for creating things like equal columns</li>
				</ul></td>
				<td><ul>
					<li>Blowout avoidance might require extra container elements</li>
					<li>Might result in unacceptably wide or narrow elements</li>
					<li>Results are highly dependent on context (see discussion of the box models below)</li>
				</ul></td>
			</tr>
			<tr>
				<th>px</th>
				<td><ul>
					<li>Offers the greatest amount of control over layout</li>
					<li>Eliminates most cross-browser variation in layout</li>
				</ul></td>
				<td><ul>
					<li>Most ill-suited to accessibility and cross-media support requirements</li>
					<li>Most susceptible to blowouts</li>
				</ul></td>
			</tr>
		</tbody>
	</table>
	<p class="comment">Table 1: Advantages and disadvantages of the percentage, em, and pixel units in specifying layout properties.</p>

<h3 id="boxmodelcomponents">The box model components</h3>

<p>The box model is really just a series of directives that define how the various layout specifications of an element interact with one another. The components covered by the box model are:</p>
<ol>
	<li>document canvas</li>
	<li>margins</li>
	<li>borders</li>
	<li>padding</li>
	<li>element widths and heights</li>
	<li>child element properties</li>
</ol>
<p>The last of these items in turn includes the other five. However, for simplicity&#x2019;s sake this section will focus on simple parent-child element relationships, and reserve discussion of multi-level box model interactions for later articles that will delve into the finer points of page layout.</p>

<h3 id="W3Cboxmodel">The W3C box model: everything is additive</h3>

<p>The basic rule is that the computed width or height of an element is equal to:</p>
<p><code>margin + border + padding + (width|height)</code></p>
<p>In many cases the <code>width</code> and/or <code>height</code> will be set to its default value of <code>auto</code>, meaning that the canvas area put aside for content is equal to:</p>
<p><code>available_canvas &#x2212; margin &#x2212; padding &#x2212; border</code></p>
<p>In such an equation, <code>available_canvas</code> is itself a discrete (if often auto-computed) value, less the amount of margins, borders and padding.  This number is most important for the <em>width</em> of elements, because width calculation errors on the part of a designer will have the undesirable result of causing a horizontal scrollbar to appear in the browser window.  Additionally, browsers always place elements at the left margin of the browser canvas that would otherwise overflow beyond the right margin of the browser window, unless instructed to do otherwise.</p>
<p>Consider the following style sheet rule:</p>

<pre>#myLayoutColumn {
  width: 50em;
  margin: 1.5em auto 1.5em auto;
  border: .1em;
  padding: .9em;
}</pre>
<p>As discussed during the explanation of margin properties above, one can expect <code>#myLayoutColumn</code> to center itself within its container element, whether that container is <code>body</code>, or something created by the production team.</p>
<p>Furthermore, if the activation of &#x201C;strict mode&#x201D; (through the use of an appropriate <code>!DOCTYPE</code> declaration) causes the W3C box model to be used, one can also expect the computed <em>non-marginal</em> width to be:</p>
<p class="arithmetic"><code><del>0</del>.1em + .9em + 50em + .9em + .1em = 52em</code></p>
<p>In <code>screen</code> media the browser will then take this value, round all of the values separately to the nearest pixel, and render the result accordingly.</p>

<h4 id="proportionalmarginspadding">Proportional margins and padding in the W3C box model</h4>

<p>When the W3C box model is in use, proportional margins and padding are computed relative to the computed <code>width</code> of the <em>containing</em> element.  To give one example, if you specify <code>margin: 20%</code> for an element that&#x2019;s contained within an element that is 800 pixels wide, the margin rendered around the first element will be 160 pixels on all sides (as 20% of 800 is 160).</p>
<p>If that same element is assigned <code>padding: 5%</code>, its computed content width will be 400 pixels:</p>
<pre><code>20% + 5% + 5% + 20% = <em>50%</em>
<em>0.50</em> &#xD7; 800 = <em>400</em>
800 &#x2212; <em>400</em> = <em>400</em></code></pre>

<h2 id="documentflow">Working with document flow</h2>

<p>Upcoming tutorials discuss the creation of multi-column layouts, so there are three CSS properties left to introduce in this article: <code>display</code>, <code>float</code>, and <code>clear</code>.</p>

<h3 id="elementtypesdisplay">Element types and the display property</h3>

<p>With the exception of <code>html</code>, <code>body</code>, and <code>table</code> parts, each element in the HTML 4.01 Recommendation that relates to primary content has an associated type of inline or block.  Each type determines default layout behaviour in different ways:</p>
<dl>
	<dt>inline</dt>
		<dd>
			<ul>
				<li>Text and images that immediately follow and/or precede inline elements are rendered on a common baseline with the content of the inline element, unless they&#39;re so long that they would otherwise overlap the edge of the containing element, in which case the inline content will wrap onto a new baseline underneath the first one.</li>

<li>Lines of text within inline elements are laid out with soft linebreaks as needed (or allowed), except where this behaviour is modified by use of the <code>white-space</code> property.</li>
				<li><code>margin</code>, <code>width</code>, <code>height</code>, and <code>float</code> properties in style sheet rules applicable to these elements (except <code>img</code> and <code>object</code>) are ignored.</li>
				<li>Inline elements can only contain text or other inline elements.</li>
			</ul>
		</dd>
	<dt>block</dt>
		<dd>
			<ul>
				<li>These elements are rendered as discrete blocks within their containers.</li>
				<li>Unless assigned a <code>float</code> value of <code>left</code> or <code>right</code>, will always be rendered with preceding and following linebreaks.</li>
				<li>Linebreaks between nested block elements that don&#x2019;t have any content between them will typically be collapsed.</li>
				<li>block elements with a width of <code>auto</code> (the default) will always expand to fill the entire width available to them.</li>
			</ul>
		</dd>
</dl>
<p>The <code>display</code> property has three commonly used values &#x2014; <code>block</code>, <code>inline</code>, and <code>none</code> &#x2014; of which two refer to the corresponding element types.  The effect of changing an element&#x2019;s <code>display</code> value is to cause an inline element to behave like a block element, to make a block element behave like an inline one, or to alter the rendering of the document as if the element (and all of its contents) did not exist at all.</p>
<p>As a matter of course, it&#x2019;s vital to know which elements correspond to which types by default, relationships laid out briefly in Table 2:</p>

	<table>
		
		<thead>
			<tr>
				<th>Element</th>
				<th>Type</th>
				<th>Subtype</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th><code>a</code></th>
				<td>inline</td>
				<td>special</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>abbr</code></th>
				<td>inline</td>
				<td>phrase</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>acronym</code></th>
				<td>inline</td>
				<td>phrase</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>address</code></th>
				<td>block</td>
				<td>&#xA0;</td>
				<td>Behaves similarly to <code>p</code> in common practice</td>
			</tr>
			<tr>
				<th><code>blockquote</code></th>
				<td>block</td>
				<td>&#xA0;</td>
				<td>Must contain at least one block element when the declared <code>!DOCTYPE</code> is <code>Strict</code></td>
			</tr>
			<tr>
				<th><code>body</code></th>
				<td>&#xA0;</td>
				<td>&#xA0;</td>
				<td>Encloses the entire document canvas; commonly takes on a margin (in IE, Firefox, and Safari) or padding (in Opera) of <code>10px</code> in <code>screen</code> media</td>
			</tr>
			<tr>
				<th><code>cite</code></th>
				<td>inline</td>
				<td>phrase</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>div</code></th>
				<td>block</td>
				<td>&#xA0;</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>em</code></th>
				<td>inline</td>
				<td>phrase</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>fieldset</code></th>
				<td>block</td>
				<td>&#xA0;</td>
				<td>Commonly rendered by default with <code>border: 1px black;</code></td>
			</tr>
			<tr>
				<th><code>form</code></th>
				<td>block</td>
				<td>&#xA0;</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>h1 &#x2026; h6</code></th>
				<td>block</td>
				<td>heading</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>input</code></th>
				<td>inline</td>
				<td>formctrl</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>img</code></th>
				<td>inline</td>
				<td>special</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>label</code></th>
				<td>inline</td>
				<td>formctrl</td>
				<td>&#xA0;</td>
                        </tr>			
                        <tr>
				<th><code>li</code></th>
				<td>block</td>
				<td>&#xA0;</td>
				<td>Element type not specified in Document Type Definition, but this element may contain either block or inline elements; the complete CSS 2.1 Recommendation sets aside a <code>display</code> value for list items</td>
			</tr>
			<tr>
				<th><code>ol</code></th>
				<td>block</td>
				<td>list</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>p</code></th>
				<td>block</td>
				<td>&#xA0;</td>
				<td>May only contain inline elements; commonly rendered with top and bottom margins</td>
			</tr>
			<tr>
				<th><code>span</code></th>
				<td>inline</td>
				<td>special</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>strong</code></th>
				<td>inline</td>
				<td>phrase</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>table</code></th>
				<td>block</td>
				<td>&#xA0;</td>
				<td>&#xA0;</td>
			</tr>
			<tr>
				<th><code>ul</code></th>
				<td>block</td>
				<td>list</td>
				<td>&#xA0;</td>
			</tr>
		</tbody>
	</table>
	<p class="comment">Table 2: Frequently used HTML elements and their types. Only margins between two adjacent block elements of the same subtype will collapse.</p>

<h4 id="demo5">Demonstration 5</h4>
	<p>How about removing the &#x201C;Prologue&#x201D; annotation from the title, just for demonstration&#x2019;s sake?</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="demo_rev5.html">Remove the extraneous bit from the title</a></li>
		<li><a href="layout_05.css">Demo 5 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
	<pre>.sectionNote { display: none; }</pre>

<h3 id="float">Causing elements to flow <em>around</em> others: the float property</h3>

<img src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/box_bacon_cat.jpg" id="baconCat" alt="a cat with bacon taped to his back" style="float:left;padding-right: 20px;" />
<p>A photo is positioned to the left of this paragraph. Practically all of you will see that the following copy flows naturally <em>around</em> it, though some might need first to cease wondering why a well-known science fiction novelist would tape bacon to his cat—even if he was having a slow day. HTML attributes can be used to specify the layout behaviour you see, but in this instance the results were accomplished with CSS.</p>

<p>As one can imagine, the property/value pair that works this magic is <code>float: left;</code>. The finer points of working with floats will be addressed in later articles, but it&#x2019;s necessary to touch on the basics here. <code>float: right</code> is also a perfectly serviceable property/value pair, and for those occasions when you need to contradict a <code>class</code> assignment that invokes <code>float</code>, you can specify <code>float: none</code>.</p>
<p>The <code>float</code> property <em>does</em> come with a few use instructions:</p>
<ul>
	<li>A <code>float</code> value will only matter if it&#x2019;s applied to a block element with an explicit <code>width</code>.</li>
	<li><code>float</code>, <code>clear</code>, and <code>margin</code> properties all appear <em>together</em> in style sheet rules meant to create columns within a layout.</li>
	<li>Causing a floated element to stretch to the bottom of its container is a tricky matter, but not impossible. The common way to do this is referred to as <a href="http://www.alistapart.com/articles/fauxcolumns/">faux-columns</a>.</li>
</ul>

<h4 id="demo6">Demonstration 6</h4>
	<p>Placement of a <code>float</code> value on the pullquote has been talked about, so now it gets done and the results can be seen. While we&#39;re at it, let&#39;s add some background colour to help distinguish it from the main content.</p>
	<h5>Links:</h5>
	<ul>
		<li><a href="demo_rev6.html">Float the pullquote over at the right margin</a></li>
		<li><a href="layout_06.css">Demo 6 stylesheet</a></li>
	</ul>
	<h5>New rules:</h5>
	<pre>.pullQuote { float: right;
background-color: rgb(204,204,204); }</pre>

<h3 id="floatandclear">Forcing elements <em>below</em> their floated predecessors: the clear property</h3>

<p>Like the <code>float</code> property, the <code>clear</code> property can be assigned one of the <code>left</code>, <code>right</code>, or <code>none</code> values. The <code>both</code> value is also supported.</p>

<p>While the <code>float</code> property directs how the content of subsequent elements should flow around it, the <code>clear</code> property directs how an element should flow around all of its neighbours—in many practical cases, not at all.</p>

<p>Figure 6 illustrates the behaviour of <code>clear: left;</code> in a layout where two initial consecutive elements have been assigned identical <code>height</code> values, and <code>float</code> values of <code>left</code> and <code>right</code>:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/figure6.png" alt="clear left allows the bottom box to clear both columns as they are the same height" /></p>
<p class="comment">Figure 6: <code>clear:left </code> allows the bottom box to clear both columns, as they are the same height.</p>

<p>In the preceding demonstration, the <em>default</em> flow of <code>#cLeftWidget</code> would place it just below the Latin text &#x2014; that is, <em>between</em> <code>#fLeftWidget</code> and <code>#fRightWidget</code>.</p>
<p>Consider what happens when the first of the same collection of elements is made shorter than its flush-right sibling, as seen in Figure 7.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/figure7.png" alt="When the right column is longer than the left column clear left will not clear both columns and so clear both must be used instead" /></p>
<p class="comment">Figure 7: When the right column is longer than the left column, <code>clear:left </code>  will not clear both columns and so <code>clear:both </code>  must be used instead</p>

<p>In the first example, the <code>clear</code> value of the trailing element is set to <code>left</code> in order to make a point: because both of the <code>float</code>ed elements are the same height, the <code>clear</code>ed element will be pushed below both.  However, the second example proves that in order to achieve the same result with <code>float</code>ed elements of differing heights, <code>clear: both;</code> must be used.</p>

<p>This discussion of the <code>clear</code> property is intended as a simple introduction to its effects, while later articles discuss the finer points of technique associated with its use.</p>

<h2 id="summary">Summary</h2>

<p>Between differences in rendering engines, the need to cover a wide swathe of traditionally defined ground, and the inability to predict the certain dimensions of a browser window, the layout of Web documents is fraught with hassles and caveats.  However, the common level of CSS support has advanced to the point where Web documents are not hard to get to give decent results across browsers.</p>

<h2 id="furtherreading">Further reading</h2>

<ul>
<li>Bergevin, Holly, and Gallant, John. 2006. Explorer exposed.
Position Is Everything. <a href="http://positioniseverything.net/explorer.html">http://positioniseverything.net/explorer.html</a> (accessed 1 July 2008).</li>
<li>Bos, Bert, <i lang="la" title="Latin: et alli, &#39;and others&#39;">et al.</i> 2007. Cascading style sheets level 2 revision 1 (CSS 2.1) specification.
World Wide Web Consortium. <a href="http://www.w3.org/TR/2007/CR-CSS21-20070719">http://www.w3.org/TR/2007/CR-CSS21-20070719</a> <i lang="la">etc.</i> (accessed 30 June 2008).</li>
<li>Raggett, Dave, <i lang="la">et. al</i>. 1999. HTML 4.01 specification.
World Wide Web Consortium. <a href="http://www.w3.org/TR/1999/REC-html401-19991224">http://www.w3.org/TR/1999/REC-html401-19991224</a> <i lang="la">etc.</i> (accessed 30 June 2008).</li>
<li>Raymond, Eric, and Steele, Guy, eds. 2003. Brute force.
The Jargon File (Version 4.4.7). <a href="http://www.catb.org/jargon/html/B/brute-force.html">http://www.catb.org/jargon/html/B/brute-force.html</a> (accessed 30 June 2008).</li>
<li>Scalzi, John. 2006. Clearly you people thought I was kidding.
Whatever. <a href="http://www.scalzi.com/whatever/004457.html">http://www.scalzi.com/whatever/004457.html</a> (accessed 30 June 2008).</li>
</ul>

<h2 id="exercises">Exercise questions</h2>

<ol>
	<li>Under which circumstances is it best to use the shorthand <code>margin</code> value, or a single margin property such as <code>margin-top</code>?</li>
	<li>When the shorthand <code>margin</code>, <code>padding</code>, and <code>border-width</code> properties are provided with all four values, in what order are those values applied to the four sides of an element?</li>
	<li>If you want to place a rule under the text of each heading in a document, which property would you use?</li>
	<li>Which <code>border-style</code> value would you use to give an element an appearance like an interface button?</li>
	<li><em>Yes or no:</em> Will specifying a border around an element will also provide for a gutter around the content of that element, by default?</li>
	<li>If you create an element that isn&#x2019;t as wide as its container, which property/value pair do you need to set to ensure that the element is horizontally centered within its container?</li>
	<li><em>Yes or no:</em> If you place a container element within <code>body</code> and set its <code>width</code> to a value greater than <code>100%</code>, will the behaviour of the document canvas change?</li>
	<li>If an image is too large for its containing element, which property/value pair would you use to ensure that your page layout doesn&#x2019;t blow out, and why?</li>
	<li>If you assign a <code>display</code> value of <code>block</code> to an <code>a</code> (link) element and give that element a reasonable height and width, how does the mouseover behaviour of that link change in <code>screen</code> display media?</li>
	<li>Under normal circumstances, a block element expands to fill the width of its container (less margins, borders, and padding). By default, does this behaviour truly change when that element is preceded by a <code>float</code>ed element &#x2014; or merely <em>appear</em> to change?</li>
	<li>If you intend to apply a <code>float</code> value to an element, which other property must you also set on that element?</li>
	<li>If you wanted to make <em>absolutely</em> sure that an element would <em>always</em> expand to fill the width of its container, which property/value pairs would you set?</li>
</ol>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/29-text-styling-with-css/" rel="prev" title="link to the previous article in the series">Previous article—Text styling with CSS</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/31-css-background-images/" rel="next" title="link to the next article in the series">Next article—CSS background images</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<img alt="Picture of the article author Ben Henick" src="http://forum-test.oslo.osa/kirby/content/articles/153-30-the-css-layout-model-boxes-borders-margins-padding/benhenick.jpeg" class="right" />

<p>Ben Henick has been building Web sites in one capacity or another since September 1995, when he took on his first Web project as an academic volunteer. Since then, most of his work has been done on a freelance basis.</p>

<p>Ben is a generalist; his skillset touches on nearly every aspect of site design and development, from CSS and HTML, to design and copywriting, to PHP/MySQL and JavaScript/Ajax.</p>

<p>He lives in Lawrence, Kansas, with three computers and zero television sets. You can read more about him and his work at <a href="http://www.henick.net/">henick.net</a>.</p>
	</div>em
