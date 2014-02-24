---
title: Setting Web Type to a Baseline Grid
authors:
- craig-grannell
intro: 'Another article in Craig Grannell’s fabulous series on design basics. In this article Craig gives us the lowdown on grid design basics - how to create a baseline grid in CSS, and how to position text on screen using it, with distances measured in both pixels and ems.'
layout: article
---
<h2>Introduction</h2>

<p>This article covers the basics of baseline grids&mdash;defined grid areas within which content is placed&mdash;and how they can be applied effectively to the web medium. In print, baseline grids are almost mandatory. They ensure the bottom of each line of text&mdash;its baseline&mdash;aligns with a vertical grid, akin to writing on a ruled piece of paper. With books, this means text is always in the same position on the page. This ensures the gaps between lines of text aren&#8217;t &#8220;filled&#8221; with content showing through from the reverse of any page, thereby making the text easier to read. This advantage isn&#8217;t relevant for Web design, but the other major advantage&#8212;maintaining a vertical rhythm&#8212;is.</p>

<h2>Why you should use a baseline grid</h2>

<p>Historically, Web designers have set text in an arbitrary and scrappy manner. Margins below text elements are often set equally for every element, regardless of their size, and scant attention is paid to leading, even though the <code>line-height</code> attribute provides scope for defining this typographic control online.</p>

<p>However, in the same way regular rhythm in music helps people keep track, a regular rhythm in type makes things easier for whoever&#8217;s experiencing the content. Assumptions can be made&mdash;often subconsciously&mdash;regarding where a piece of content is going to be, purely on the basis of the rhythm. Searching and disorientation are both reduced, and the speed in which content can be accessed and digested is increased. Figure 1, below, shows a comparison of a page with arbitrary values with one that has considered vertical rhythm. The difference is subtle, but the image with text aligned to a baseline grid is neater and easier to read.</p>

<a href="figure-1.gif"><img src="figure-1.gif" alt="Figure 1: A page with arbitrary leading values (left) versus text set to a baseline grid (right)." style="max-width:100%" /></a>

<p class="comment">Figure 1: A page with arbitrary leading values (left) versus text set to a baseline grid (right)</p>

<h2>Getting started</h2>

<p>First, you need some content to style. Below is a code block that includes a number of typical typographic elements, structured in a semantic manner. There are three levels of headings (for the main title, the strap-line and cross-heads), some paragraphs, a blockquote (for a pull-quote) and a list. Note that the lines are truncated, to make the structure more obvious; you can <a href="baseline.html">download the original HTML document here</a>. The type elements are housed within a &#8220;wrapper&#8221; <code>div</code>, to define a width for the page&#8217;s content.</p>
<pre>&lt;div id="wrapper"&gt;
  &lt;h1&gt;Main heading&lt;/h1&gt;
  &lt;h2&gt;Article strap-line. [...]&lt;/h2&gt;
  &lt;p&gt;Suspendisse id [...].&lt;/p&gt;
  &lt;p&gt;Donec porttitor [...].&lt;/p&gt;
  &lt;h3&gt;Cross-head&lt;/h3&gt;
  &lt;p&gt;Proin tincidunt [...]&lt;/p&gt;
  &lt;blockquote&gt;
    &lt;p&gt;Nunc molestie [...]&lt;/p&gt;
    &lt;p&gt;&lt;cite&gt;Citation reference&lt;/cite&gt;&lt;/p&gt;
  &lt;/blockquote&gt;
  &lt;p&gt;Morbi a [...]&lt;/p&gt;
  &lt;p&gt;Proin at eros non:&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;Eros adipiscing mollis&lt;/li&gt;
    &lt;li&gt;Donec semper turpis sed diam&lt;/li&gt;
    &lt;li&gt;Sed consequat ligula nec tortor&lt;/li&gt;
  &lt;/ul&gt;
  &lt;p&gt;Integer eget [...]&lt;/p&gt;
&lt;/div&gt;</pre>

<p>Next, a decision needs to be made regarding the underlying unit height of the baseline grid, based around a value in pixels. With comfortable Web text typically being sized between 11px and 13px (or equivalent values in ems), a vertical unit of around 18px is suitable. This slightly loose leading ensures there&#8217;s a little room to breathe between lines of copy and makes the content easier to read for users.</p>

<p>This rhythm of 18px needs to be maintained throughout the entire page, via careful setting of line-heights and margin values. This is easiest to explain by using pixels as the unit for font-sizing, so I&#8217;ll do this first. Once the basic methodology has been explored, I’ll then rework the CSS and size the fonts using ems, which, unlike pixel-sized text, can be resized using IE's standard text-sizing controls, for version 6 and below. (Opera, Safari and Firefox, of course, are happy to resize text defined in any unit, and IE 7 also has similar zooming capabilities.)</p>

<h2>Defining page defaults</h2>

<p>Everything else within this article is CSS-based. Prior to setting property values for text elements, page defaults need styling. I will use the universal selector (<code>*</code>) to remove padding and margins from all elements, and then define a default font stack and <code>color</code> value using a <code>body</code> rule. Within the <code>body</code> rule, I also define the baseline grid unit height via the <code>line-height</code> property. Then, I style the &#8220;wrapper&#8221; div by setting <code>width</code> and <code>margin</code> values for the <code>#wrapper</code> rule.</p>

<pre>* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Lucida, Arial, Helvetica, sans-serif;
  color: #111111;
  line-height: 18px;
}

#wrapper {
  width: 500px;
  margin: 36px auto;
}</pre>

<h2>Styling text elements</h2>

<p>With text elements, the entire amount of space they take up needs to be equal to or a multiple of the <code>line-height</code> value, including padding and margins, if applied. Therefore, in the following code block, you&#8217;ll see that the majority of the <code>margin-bottom</code> values are equal to 18px, the <code>line-height</code> value. In the case of the <code>h3</code> element, the negative margin value &#8220;pulls&#8221; subsequent content up, so there&#8217;s no gap under it.</p>

<pre>h1 {
  font-size: 27px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 18px;
}

h2 {
  font-size: 15px;
  margin-bottom: 18px;
}

h3 {
  font-size: 12px;
  margin-bottom: -18px;
}

p, ul {
  font-size: 12px;
  margin: 18px 0;
}</pre>

<p>For the <code>blockquote</code> element (for the pull-quote) and content within, three rules are required. The first, for the <code>blockquote</code> itself, sets text within the pull-quote to bold and adds some padding to its left and right sides, to make the text stand out from the body copy. The <code>blockquote p</code> rule removes margins from within the <code>blockquote</code>, otherwise there&#8217;d be a gap between the quote and citation, making the relationship between the two less obvious. The cite element is set to display as a block element, so it stretches to fill the paragraph that contains it, and the text is aligned right&#8212;a common standard with pull-quote citations. This helps differentiate the citation from the quote body.</p>
<pre>blockquote {
  font-weight: bold;
  padding: 0 100px;
}

blockquote p {
  margin: 0;
}

cite {
  text-align: right;
  display: block;
}</pre>

<p>The completed page is shown in Figure 2.</p>

<img src="figure-2.gif" alt="Figure 2: The complete Web page, with vertical rhythm carefully set using pixel values" width="400" height="608" />
<p class="comment">Figure 2: The complete web page, with vertical rhythm carefully set using pixel values.</p>

<h2>Using ems to size text</h2>

<p>As mentioned earlier, sizing text in pixels remains problematic, due to Internet Explorer 6 still being heavily used, and because of legacy text-sizing controls remaining in Internet Explorer 7. Even though an Opera-like page zoom is available in IE7, it&#8217;s likely that many users will stick to old methods, which don&#8217;t enable text sized in pixels to be zoomed.</p>

<p>An alternative is to use ems. By setting the page&#8217;s overall <code>font-size</code> value to <code>62.5%</code> in the <code>body</code> rule, text can be sized in ems using a value a tenth of the target pixel size. In other words, 1.0em equates to 10px, and 2.4em equates to 24px. This is only true for browsers using default settings (to make sure, you should use some kind of CSS reset), but it&#8217;s nonetheless a good method for retaining control over font sizes and also offering flexibility for scaling text.</p>

<p>However, if the text is to scale and retain the vertical rhythm, margin values and <code>line-height</code> must now be defined in ems also; otherwise, the rhythm will break as soon as the text is zoomed. First, then, I&#8217;ll amend the <code>body</code> rule, adding the <code>font-size</code> value mentioned earlier and changing the <code>line-height</code> value to 1.8em.</p>

<pre>body {
  font-size: 62.5%;
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Lucida, Arial, Helvetica, sans-serif;
  color: #111111;
  line-height: 1.8em;
}</pre>

<p>The <code>font-size</code> values for the text elements should be changed according to the ratio mentioned earlier&mdash;this is done by dividing by 10 and amending the units from px to em.</p>

<p>Margins are a little more complex. With 1em equating to the font size of the current unit, margin values are calculated by dividing the <code>line-height</code> value from the <code>body</code> rule by the <code>font-size</code> value in each case. Take, for example, the <code>h1</code> rule:</p>

<pre>h1 {
  font-size: 2.7em;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 0.666666em;
}</pre>

<p>With a <code>font-size</code> value of 2.7em (equating to 27px), a <code>margin-bottom</code> value of 1em would place a margin equivalent to 27px underneath the <code>h1</code> element. By dividing the <code>line-height</code> value of 1.8 by the <code>font-size</code> value of 2.7, we get the value 0.666666, and two-thirds of 2.7em is 1.8em&mdash;the same as the <code>line-height</code> value. (Read that again&mdash;it will make sense after a couple of run throughs, if it doesn't already.)</p>

<p>Using this methodology, margin values can be defined for the other text elements. For the <code>h2</code> element, with a <code>font-size</code> of 1.5em, the <code>margin-bottom</code> value is 1.8/1.5em, which is 1.2em. For elements with a <code>font-size</code> of 1.2em, the <code>margin</code> values are 1.8/1.2em, which is 1.5em. Again, the <code>h3</code> rule has a negative bottom margin, to &#8220;pull&#8221; subsequent content up, but its value still adheres to the grid.</p>

<pre>h2 {
  font-size: 1.5em;
  margin-bottom: 1.2em;
}

h3 {
  font-size: 1.2em;
  margin-bottom: -1.5em;
}

p, ul {
  font-size: 1.2em;
  margin: 1.5em 0;
}</pre>

<h2>Final thoughts</h2>

<p>The <a href="files-for-download.zip">example documents are available for download here</a>, and the ems-based one shows a few additional changes. The <code>width</code> for the <code>#wrapper</code> rule is defined in ems, as is the <code>blockquote</code> rule&#8217;s <code>padding</code> value. This means these settings will scale as the page is zoomed, so the entire page retains its ratios, rather than just the text getting bigger.</p>

<p>However, perhaps the most important change is the addition of a background image to the &#8220;wrapper&#8221; div. This GIF is an 18 x 20 image with a single-pixel line at its foot. When tiled, this shows the baseline grid, making the page look like lined paper&mdash;see Figure 3, below. This is a good device to use when initially working on pages with a baseline grid, to ensure the various elements correctly adhere to it. If things move out of synch part-way down, start checking margin values for elements further up the page.</p>

<img src="figure-3.gif" alt="Figure 3: Using a tiled background to make the baseline grid visible." width="400" height="610" />
<p class="comment">Figure 3: Using a tiled background to make the baseline grid visible</p>

<p>One final tip is for Internet Explorer only. In this example, margins and padding were removed from all elements, meaning list-item content is aligned with body copy, resulting in hanging bullets. From a typographical standpoint, this is actually more correct, but with most software keen to place content within boxes, the art of hanging bullets (and punctuation) has been somewhat lost.</p>

<p>Internet Explorer, even with version 7, typically doesn&#8217;t display content outside of the parent box, and so it doesn&#8217;t show the bullet points in this page. However, by adding the following rule, which positions unordered lists in a relative fashion, you can add padding to the left and then &#8220;pull&#8221; the lists left by the same amount (via the negative <code>left</code> value), allowing the bullets to make a welcome return:</p>

<pre>ul {
  padding-left: 1.5em;
  position: relative;
  left: -1.5em;
}</pre>

<p>Note that this rule doesn&#8217;t affect Opera, Safari, and Firefox, but as it&#8217;s a rule specifically for Internet Explorer, it should nonetheless be applied using a conditional comment:</p>

<pre>&lt;!--[if lte IE 7]&gt;
  &lt;link rel="stylesheet" type="text/css" href="ie-7-hacks.css" media="screen" /&gt;
&lt;![endif]--&gt;</pre>

<p>You can find <a href="http://dev.opera.com/articles/view/supporting-ie-with-conditional-comments/">more about conditional comments</a> in a dedicated dev.opera.com article.</p>
