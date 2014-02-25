---
title: 'Grid Design Basics: Grids for Web Page Layouts'
authors:
- craig-grannell
intro: 'In this article, Craig Grannell builds on his previous article to take us through the basics of actually laying out pages on a grid. It’s packed with essential tips.'
license: cc-by-nc-sa-2.5
layout: article
---
<h2>Introduction</h2>

<p>Since tables were co-opted for layout purposes, columns have become key to many Web design layouts, and this thinking continued when CSS took over from tables (at least in the minds of savvy designers) for Web-page presentation. However, other fields of layout design don&#8217;t think in arbitrary columns, they work with grids, and these form the basis for the structure of page designs. This article will provide the lowdown on grid design for Web pages.</p>

<h2>Thinking modular</h2>

<p>Grids are a template, a framework within which creativity can flourish. Too many designers spend time looking at a blank canvas, trying to figure out where elements should be positioned, but, if you have a flexible underlying grid, many such problems are already solved for you. It becomes obvious where and how elements should and can be positioned, thereby leaving you, the designer, with more time to work on graphic design and other page components.</p>

<p>Instead of arbitrarily picking column sizes, grids enable you to create a common visual language throughout an entire Web site, rather than deciding things on a page-by-page basis. Components relate to each other, which makes it easier for users to scan content and develop familiarity with it, in a manner similar to text that&#8217;s set on a baseline grid (see my <a href="http://dev.opera.com/articles/view/setting-web-type-to-a-baseline-grid/">Setting Web type to a baseline grid</a> article for more).</p>

<h2>Creating a layout grid</h2>

<p>Unlike in print, there&#8217;s no set canvas size for a Web page. This means one aspect of magazine-oriented grids&mdash;working to specific vertical points across an entire page&mdash;is, at best, tricky. Generally, it&#8217;s best to ensure that a vertical rhythm is maintained (again, see the <a href="http://dev.opera.com/articles/view/setting-web-type-to-a-baseline-grid/">baseline grids article</a>) but not get hung up on trying to align elements across different page areas (navigation, content, sidebar) and instead focus on working with vertical grid lines.</p>

<p>With the majority of users now having monitors capable of a resolution of 1024 x 768 or higher, the tendency for layouts is towards a width of about 950. For grid design, a 960-pixel total width is a good starting point, because it provides a massive amount of scope for divisions (960 is divisible by 2, 3, 4, 5, 6, 8, 10, 12, 15, 16, 20, 24, 30, 32, 40, 48, 60, 64, 80, 96, 120, 160, 192, 240, 320 and 480).</p>

<p>That said, too many columns can result in excessive complexity, so when working on initial grid designs, stick to about a dozen columns. The reason for working with 12 columns (rather than, say, seven or ten) is because of the flexibility it affords you in being able to divide the layout evenly (2 x 6, 3 x 4) and also in various other combinations, as shown in Figure 1. In that image, the underlying grid is shown in grey&mdash;light grey for columns and dark grey for gutters that provide white-space between page elements; the red stripes show how the grid can be divided up.</p>

<p class="note">Note that it&#8217;s best to set the gutter widths to an odd number of pixels, because then a one-pixel dividing line can be placed between two columns. If a gutter&#8217;s width is an even number of pixels, a one-pixel line can&#8217;t sit centrally between two columns.</p>

<img src="figure-1.png" alt="Figure 1: A 12-column grid system showing a few of the potential available divisions" width="700" height="391" />
<p class="comment">Figure 1: A 12-column grid system showing a few of the potential available divisions.</p>

<p>By using guides in your graphic design software package, you should be able to work up layouts rapidly, positioning elements such as sidebars and content areas with ease, since your basic grid is already catered for. In Figure 2, the layout has been divided into three main components. At the top, the masthead spans the entire design&#8217;s width. Below, the main content area spans eight columns, and a sidebar spans four. Within the sidebar, yellow areas denote potential positions for blocks of content: a full-width piece, an Mid-Page Unit (MPU), and two columns for item lists or advertising. Within the main content area, the grid has enabled us to start dividing up the space for chunks of content, without having to make decisions regarding how wide each block content should be&mdash;the grid takes care of that. This speeds up the design process, but also ensures site-wide harmony&mdash;assuming the grid is adhered to, a common language will be maintained regarding component sizes. (<a href="grids-63-17.psd">Download a 12-column Photoshop grid document here</a>.)</p>

<img src="figure-2.png" alt="Figure 2: A basic layout scamp for a sites home-page content structure." width="700" height="730" />
<p class="comment">Figure 2: A basic layout scamp for a site&#8217;s home-page content structure</p>

<h2>Taking grids to the Web</h2>

<p>When it comes to CSS and grids, it&#8217;s best to keep things as simple and modular as possible. That way, you can start with common boilerplate documents and tailor them to individual Web sites. For something with the same basic underlying structure as the design shown in Figure 2 (if not the internal content areas that were shown in yellow), the basic structure is a page within a &#8220;wrapper&#8221;, which has a content area, a sidebar, and a bunch of nested areas within those sections.</p>

<p>The basic page structure can therefore be marked up as follows:</p>

<pre>&lt;div id="wrapper"&gt;
  &lt;div id="masthead"&gt;&lt;/div&gt;
  &lt;div id="contentArea"&gt;&lt;/div&gt;
  &lt;div id="sidebar"&gt;&lt;/div&gt;
&lt;/div&gt;</pre>

<p>Within those areas, you can then place nested divs, with <code>class</code> values that relate to the number of grid columns they span. In the following example, there are three rows of content blocks: the first row has four two-column blocks, the second has a six-column block and a two-column block, and the third has two four-column blocks.</p>

<pre>&lt;div id="contentArea"&gt;
  &lt;div class="twoCol"&gt;2-Col&lt;/div&gt;
  &lt;div class="twoCol"&gt;2-Col&lt;/div&gt;
  &lt;div class="twoCol"&gt;2-Col&lt;/div&gt;
  &lt;div class="twoCol"&gt;2-Col&lt;/div&gt;

  &lt;div class="sixCol"&gt;6-Col&lt;/div&gt;
  &lt;div class="twoCol"&gt;2-Col&lt;/div&gt;

  &lt;div class="fourCol"&gt;4-Col&lt;/div&gt;
  &lt;div class="fourCol"&gt;4-Col&lt;/div&gt;
&lt;/div&gt;</pre>

<p>Purists might argue that these values aren&#8217;t semantic. However, since it&#8217;s perfectly acceptable to use multiple <code>class</code> values, it makes sense to keep the column values separate and to add further styles to specific elements by way of a section-specific <code>class</code> value:</p>

<pre>&lt;div class="sixCol leadArticle"&gt;6-Col&lt;/div&gt;
&lt;div class="twoCol leadArticleImage"&gt;2-Col&lt;/div&gt;</pre>

<p>CSS can then be used to define specific settings (such as background colors or images) for&#8212;in the above code&#8217;s case&#8212;the lead article and lead article image.</p>

<h2>Styling the online grid</h2>

<p>When it comes to CSS, gutters make things a little complicated. Each content box within a typical page is a floated box, and gutters either have to form part of that box (by being included in its <code>width</code> value or by adding on the gutter to the column width via <code>padding</code>) or be set adjacent to it by using a margin. The required method depends on the component being styled.</p>

<img src="figure-3.png" alt="Figure 3: Taking grids online using basic HTML divs and CSS styling." width="700" height="193" />
<p>Figure 3: Taking grids online using basic HTML divs and CSS styling</p>

<p>In Figure 3 (above), the styled page is shown. (Note that this figure again does <em>not</em> denote the same layout as Figure 2.) In our example, the grid has 12 columns and a 960-pixel width, as already explained. Therefore, each column/gutter pair is 80px. The gutter is 17px, meaning each column is 63px wide. When a content area spans <strong>n</strong> columns, it also spans <strong>n-1</strong> gutters, and so a two-column box has a width of 143px (63+17+63), a four-column box has a width of 303px (63+17+63+17+63+17+63), and so on. An easier means of calculating the widths is just to multiply 80px by the number of columns the box needs to span and then subtract a gutter width of 17px.</p>

<p>Thus, for the internal boxes shown in Figure 3, we end up with CSS such as the following:</p>

<pre>.twoCol, .fourCol, .sixCol {
  margin-right: 17px;
  float: left;
}

.twoCol {
  width: 143px;
}

.fourCol {
  width: 303px;
}

.sixCol {
  width: 463px;
}</pre>

<p>Note the grouped selector that adds a <code>margin-right</code> setting to every box type, to ensure it has a correct gutter at its right-hand side, and that subsequent content is therefore positioned correctly. (In the example screen-grabs, colors and bottom margins have also been added for clarity.)</p>

<p>For containing divs, we need a different method. Although the sidebar width should technically be as per the four-column box, if we set it like this, its internal content won&#8217;t be wide enough to house two two-column boxes and their <code>margin-right</code> values, so they&#8217;d sit one under the other. Therefore, the <code>width</code> settings for containing boxes must incorporate the right-most gutter. The math for this is simple: 80px multiplied by the number of grid columns the relevant element spans:</p>

<pre>#wrapper {
  width: 960px;
  margin: 0 auto;
}

#masthead {
  width: 960px;
}

#contentArea {
  float: left;
  width: 640px;
}

#sidebar {
  float: left;
  width: 320px;
}</pre>

<p>(Note that for Internet Explorer 6 and below to behave, <code>overflow: hidden;</code> may need to be added to the <code>#contentArea</code> and <code>#sidebar</code> rules via CSS attached using a <a href="http://dev.opera.com/articles/view/supporting-ie-with-conditional-comments/">conditional comment</a>.)</p>

<h2>Further thoughts</h2>

<p>For many designs, the mark-up will need further additions, slightly disrupting the &#8220;harmony&#8221; of the pure grid-oriented code. When heights of floated elements differ, they stack linearly, and this can mess up the layout, as shown in Figure 4.</p>

<img src="figure-4.png" alt="Figure 4: Broken stacking due to inconsistent heights of floated elements" width="700" height="234" />
<p class="comment">Figure 4: Broken stacking due to inconsistent heights of floated elements.</p>

<p>To get around this, surround each &#8220;row&#8221; of boxes/content blocks in a clearing div as follows:</p>

<pre>&lt;div class="rowContainer"&gt;
  [a row of boxes]
&lt;/div&gt;</pre>

<p>Then, set the CSS for <code>.rowContainer</code> to <code>clear: left;</code>. This will fix flow issues in all major browsers.  (Note that future CSS will enable you to solve this problem without clearing divs, perhaps via the use of <code>display: table</code>. However, with support in current versions of Internet Explorer unavailable, manual clearing is needed for the time being.)</p>

<img src="figure-5.png" alt="Figure 5: Repaired stacking by using a clearing mechanism." width="700" height="215" />
<p class="comment">Figure 5: Repaired stacking by using a clearing mechanism</p>

<h2>Summary</h2>

<p>By creating a flexible grid, you should be able to more easily work up designs. Once you&#8217;re comfortable working with a grid, you can amend your workflow and boilerplates to suit. If you find a 12-column grid restrictive, double the number of columns in your default documents. Alternatively, create a set of documents, each with a different number of columns, and use the relevant one for any given project.</p>

<p>A final tip is to use temporary background images to ensure your page is adhering to your grid. Export the relevant layers of your graphic design document and apply the grid as a background to your site&#8217;s wrapper or body, as shown in Figure 6.</p>

<img src="figure-6.jpg" alt="Figure 6: The Snub Communications website with its underlying grid image activated." width="500" height="486" />
<p class="comment">Figure 6: The Snub Communications Web site with its underlying grid image activated</p>

<p>Leave the rule in your CSS and comment it out prior to launching your site. This will enable you to rapidly &#8220;turn on&#8221; the visual grid when you make updates, ensuring your common site-wide language isn&#8217;t polluted by items breaking the grid and messing up your design.</p>
