Title: Styling tables
----
Date: 2008-09-26 06:37:02
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
<li class="prev"><a href="http://dev.opera.com/articles/view/32-styling-lists-and-links/" rel="prev" title="link to the previous article in the series">Previous article—Styling lists and links</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/34-styling-forms/" rel="next" title="link to the next article in the series">Next article—Styling forms</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>At times it seems that tables are a little misunderstood in modern web development. So much attention is given to &quot;don’t use tables!&quot; that people sometimes forget the issue is actually &quot;don’t use tables <em>for layout</em>&quot;. Tables are excellent for their true purpose—displaying tabular data. So it makes sense to know how to style them properly. </p>
<p>This tutorial will focus on applying CSS in an efficient manner, to produce clear and readable data table styles. I’ll also cover some common design requests for tables. The article structure is as follows:</p>

<ul>
<li><a href="#tablestructure">Table structure</a></li>
<li><a href="#tablebasics">The basics</a>
<ul>
<li><a href="#tableandcellwidth">Table and cell width</a></li>
<li><a href="#textalignment">Text alignment</a></li>
<li><a href="#borders">Borders</a></li>
<li><a href="#padding">Padding</a></li>
<li><a href="#captionplacement">Caption placement</a></li>
<li><a href="#backgrounds">Backgrounds</a></li>
<li><a href="#fixingie">Fixing IE with conditional styles</a></li>
</ul>
</li>

<li><a href="#variations">Common variations</a>
<ul>
<li><a href="#zebrastriping">Zebra striping</a></li>
<li><a href="#unevencolumns">Uneven columns</a></li>
<li><a href="#incomplete-grids">Incomplete grids</a> </li>
<li><a href="#inner-grids">Inner grids</a> </li>
</ul>
</li>

<li><a href="#commonbugs">Two common bugs</a>
<ul>
<li><a href="#bordercollapse">Border-collapse bug</a></li>
<li><a href="#margincaption">Margin/caption bug</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>
<li><a href="#furtherreading">Futher reading</a></li>
</ul>

<p>You may find it useful to <a href="table-examples.zip">download the code examples for tables shown in this article</a>, so you can follow along with the article as it progresses.</p>

<h2 id="tablestructure">Table structure</h2>

<p>Before we dive into the CSS, let’s consider the key structural elements of tables you will need to style clearly:</p>
<ul>
  <li>Table headings</li>
  <li>Table data cells </li>
  <li>Table captions</li>
</ul>

<p>When your site users read your table, they should be able to easily understand and follow the structure of the table. The most common way to do this is with borders, background colours, or both. </p>
<p>You do not have to follow these style conventions, however, you should ensure that there is some clear difference between <code>th</code> and <code>td</code> cells; also, the <code>caption</code> should be clearly associated with the table and differentiated from other text on the page. </p>

<h2 id="tablebasics">The basics </h2>

<p>Consider the way this unstyled table is rendered (this is the same example you met in <a href="http://dev.opera.com/articles/view/19-html-tables/">Article 19—HTML tables</a>):</p>
<table summary="a summary of recent major volcanic eruptions in the Pacific Northwest">
	<caption>Recent Major Volcanic Eruptions in the Pacific Northwest</caption>
	<thead>
		<tr>
			<th scope="col">Volcano Name</th>
			<th scope="col">Location</th>
			<th scope="col">Last Major Eruption</th>
			<th scope="col">Type of Eruption</th>
		</tr>
	</thead>
	<tfoot><tr><td colspan="4">Compiled in 2008 by Ms Jen</td></tr></tfoot>
	<tbody>
		<tr>
			<th scope="row">Mt. Lassen</th>
			<td>California</td>
			<td>1914-17</td>
			<td>Explosive Eruption</td>
		</tr>
		<tr>
			<th scope="row">Mt. Hood</th>
			<td>Oregon</td>
			<td>1790s</td>
			<td>Pyroclastic flows and Mudflows</td>
		</tr>
		<tr>
			<th scope="row">Mt. St. Helens</th>
			<td>Washington</td>
			<td>1980</td>
			<td>Explosive Eruption</td>
		</tr>
	</tbody>
</table>


<p>The data is understandable, but it does takes some effort to work out what’s happening. Let’s add some style to make it easier to read. </p>

<h3 id="tableandcellwidth">Table and cell width </h3>

	<p>The first decision is how wide to make the table. The browser default is the same as setting <code>table { width: auto; }</code>, which results in the table extending to the width of the content. This generally looks untidy.</p>
	
	<p>Let’s imagine that our table is going into a content column 600px wide. Let’s set the table to expand to 100% of the available width, to make best use of space. Since there are four columns, let’s also set the width of the table cells to an equal 25% each:</p>
	
<pre>table {
  width: 100%;
}

th, td {
  width: 25%;
}</pre>
	<p>You can actually just set the width on <code>th</code> and it will set the width of all the columns; however, it doesn’t hurt to be thorough. This simple style will produce the result seen in Figure 1: </p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-01.gif" alt="Screenshot showing evenly sized columns" width="593" height="164" /></p>
	<p class="comment">Figure 1: The example table with simple width settings.</p>

	<p>The cells are now sitting at an even width. We’ll look at setting uneven widths later, but for now let’s push on. </p>

	<h3 id="textalignment">Text alignment</h3>

	<p>The table is still a bit confusing to read, so let’s set up the text alignment to be a little neater—the additional rule below will left-align the headers to match the content (by default, browsers centre table headings):</p>
<pre>table {
  width: 100%;
}

th, td {
  width: 25%;
  text-align: left;
}</pre>
	
	<p>This neatens things up a little, as you can see in Figure 2:</p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-02.gif" alt="Screenshot showing left-aligned headers" width="594" height="164" /> </p>
	<p class="comment">Figure 2: Table with left alignment applied.</p>
	
	<p>Currently all of the cells are vertically aligned to the centre. If you prefer, you can set this to align text to the top or bottom of the cell, or in fact any <a href="http://www.w3.org/TR/REC-CSS2/visudet.html#line-height"><code>vertical-align</code> setting</a> that you like. The new rules below set the text to align to the top:</p>
	
<pre>table {
  width: 100%;
}

th, td {
  width: 25%;
  text-align: left;
  <strong>vertical-align: top;</strong>
}</pre>

	<p>The table now looks like Figure 3:</p>

	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-03.gif" alt="Screenshot showing top-aligned cells" width="594" height="164" /> </p>
	<p class="comment">Figure 3: Table with vertical alignment added.</p>

	<p>Note how the top row of headings all sit at the top, even though &quot;Last Major Eruption&quot; wraps on to two lines. </p>
	
	<h3 id="borders">Borders</h3>

	<p>The table is looking a little nicer, however it is still a bit hard to read along each line. It’s time to set some borders to make things easier to read. You need to set borders separately for each part of the table, then decide how those borders should combine. </p>
	<p>To show where the borders will be set, Figure 4 shows different borders for <code>table</code> (<code>solid black</code>), <code>caption</code> (<code>solid grey</code>), <code>th</code> (<code>dashed blue</code>) and <code>td</code> (<code>dotted red</code>):  </p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/border-differentiation.gif" alt="Screenshot showing the border placements" width="600" height="198" /></p>
	<p class="comment">Figure 4: illustration of the different element borders within a table. </p>
	
	<p>Note how the <code>table</code> border runs around the outside of all the heading and data cells, then between the cells and the caption. You can also see that by default, the <code>th</code> and <code>td</code> borders are spaced out from each other. </p>
	<p>Let’s look at a different style of table - you can set up a simple black border for the table and cells, using the <code>border</code> property—this is done via the new rules below:</p>
	
<pre>table {
  width: 100%;
  <strong>border: 1px solid #000;</strong>
}

th, td {
  width: 25%;
  text-align: left; 
  vertical-align: top; 
  <strong>border: 1px solid #000;</strong>
}</pre>

<p>Which produces the result seen in Figure 4: </p>

	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-04.gif" alt="Screenshot showing simple black borders" width="600" height="179" /> </p>
	<p class="comment">Figure 4: Table with simple black borders applied.</p>
	
	<p>This makes the rows far easier to read, however you may not like the spacing between the cells. There are two ways to change this. </p>
	<p>First, you can simply close the gaps using the <code>border-spacing</code> property, like so:</p>
	
<pre>table {
  width: 100%;
  border: 1px solid #000;
}

th, td {
  width: 25%;
  text-align: left; 
  vertical-align: top;
  border: 1px solid #000;
  <strong>border-spacing: 0;</strong>
}</pre>

	<p>This will make the borders touch together instead of sitting apart. This changes the 1px border into a 2px border, as seen in Figure 5:</p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-05.gif" alt="Screenshot of cells with the borders adding together" width="600" height="167" /> </p>
	<p class="comment">Figure 5: Table with border spacing removed, producing a 2px border effect.</p>
	
	<p>You can also increase the space between cells using <code>border-spacing</code>, although bear in mind that this property doesn’t work in Internet Explorer. </p>
	<p>If you want to retain the 1px border effect, you’ll need to set the table so that the borders &quot;collapse&quot; into each other. You can do this using the <code>border-collapse</code> property instead of the <code>border-spacing</code> property:</p>
	
<pre>table {
  width: 100%;
  border: 1px solid #000;
}

th, td {
  width: 25%;
  text-align: left; 
  vertical-align: top; 
  border: 1px solid #000;
  <strong>border-collapse: collapse;</strong>
  }</pre>
	
	<p>This will produce a table with a 1px border, like in Figure 6:</p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-06.gif" alt="Screenshot of table with uniform 1px borders and no gaps between cells" width="600" height="161" /> </p>
	<p class="comment">Figure 6: Table with border-collapse set to collapse, reducing the border to 1px.</p>
	
	<p>When you set borders to collapse, you need to keep in mind that this can cause issues if you have different border styles applied to adjacent cells. When the different border styles are collapsed into each other, they will &quot;conflict&quot; with each other. This is resolved according to the <a href="http://www.w3.org/TR/REC-CSS2/tables.html#border-conflict-resolution">W3C CSS2 Table border conflict resolution rules</a>, which determine which style &quot;wins&quot; when they are collapsed. </p>
	
	<h3 id="padding">Padding</h3>

	<p>Now that you have borders on the cells, you might like to add some whitespace to the caption and table cells. You simply use padding to accomplish this: </p>
	
<pre>table {
  width: 100%;
  border: 1px solid #000;
}

th, td {
  width: 25%;
  text-align: left; 
  vertical-align: top; 
  border: 1px solid #000;
  border-collapse: collapse;
  <strong>padding: 0.3em;</strong>
}

caption {
  <strong>padding: 0.3em;</strong>
}</pre>
	
	<p>This allows the text to &quot;breathe&quot; a little, as seen in Figure 7:</p>
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-07.gif" alt="Screenshot showing increased padding" width="600" height="206" /></p>
	<p class="comment">Figure 7: Table with padding applied to all cells. </p>
	
	<h3 id="captionplacement">Caption placement</h3>

	<p>So far the caption has been left sitting at the top of the table. However, you might like to move the caption somewhere else. Unfortunately you cannot do this in IE, but for all other browsers you can change the position of the caption using the <code>caption-side</code> property. The options are top, bottom, left and right. Let’s move the caption to the bottom: </p>
	
<pre>table {
  width: 100%;
  border: 1px solid #000;
}

th, td {
  width: 25%;
  text-align: left; 
  vertical-align: top; 
  border: 1px solid #000;
  border-collapse: collapse;
  padding: 0.3em;
  <strong>caption-side: bottom;</strong>
}

caption {
  padding: 0.3em;
}</pre>

<p>Figure 8 shows the result.</p>

	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-08.gif" alt="Screenshot of the caption at the bottom" width="600" height="209" /></p>
	<p class="comment">Figure 8: Table with caption moved to the bottom of the table. </p>
	
	<p>If you do want move the caption, remember that any side-specific styles will not work in IE. For example if you add three borders to make the caption &quot;join&quot; the bottom of the table, it won’t have the desired effect in IE because the caption will still be at the top. You will need to use <a href="http://dev.opera.com/articles/view/supporting-ie-with-conditional-comments/">conditional comments</a> to re-style your table for IE. See also the <a href="#fixingie">Fixing IE with conditional styles</a> section later on, for more details.</p>
	
	<p>For the rest of the examples, I will leave it at the top. </p>

    <h3 id="backgrounds">Backgrounds</h3>

 <p>Another simple way to style tables is to add background colours and images. This is done with the <code>background</code> property, although you need to be aware that the different parts of the table will &quot;layer&quot; over each other. <a href="http://www.w3.org/TR/REC-CSS2/tables.html#table-layers">The CSS2 specification explains background layering in some detail</a> however the short version is that backgrounds will override each other in the following order: </p>
 
    <ol>
      <li>table (which sits at the &quot;bottom&quot; or the &quot;back&quot;)</li>
      <li>column groups </li>
      <li>columns </li>
      <li>row groups</li>
      <li>rows</li>
      <li>cells (&quot;top&quot; or &quot;front&quot;, meaning their background overrides all the others)  </li>
    </ol>
   
   <p>So, if you set a background for the table, and a different colour for cells, the cell background will cover up the table background. If you have borders set to <code>collapse</code>, the table background won’t show at all. If you set <code>border-collapse</code> to <code>separate</code>, however, the table background will show through between the borders. </p>

<p class="note">Note that the concept of different elements sitting on top of one another on the page is controllable; you can control how high or low in the “stack” an element sits in relation to other elements by changing its <code>z-index</code> property. You will <a href="http://dev.opera.com/articles/view/37-css-absolute-and-fixed-positioning/#zindex">learn more about z-index</a> in Article 37.</p>
    
    <p>Imagine you set the table to have a red background and cells to have a white background. Separated cells will show the red, but the cells stay white, as demonstrated by Figure 9: </p>
    
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-09.gif" alt="Screenshot of red background showing through" width="600" height="224" /></p>
    <p class="comment">Figure 9: Table demonstrating the red table element background showing between the white backgrounds of the cell elements. </p>
    
    <p>You can also use a background image. For example, if you wanted to have a gradient showing through between the cells, you could set the <code>th</code> and <code>td</code> cells to white backgrounds, but set the <code>table</code> background to a gradient:</p>
    
<pre>table {
  border-collapse: separate;
  border-spacing: 5px;
  background: #000 url(&quot;gradient.gif&quot;) bottom left repeat-x;
  color: #fff;
}

td, th {
  background: #fff;
  color: #000;
}</pre>

    <p>Note that the background colour is set to black, which will fill up the space at the top where the gradient graphic finishes (you should always allow for your table being taller than the background image). The foreground colour is set to white, in case these default colours ever show through to the cell content. In general, the cell styles will override the text colour settings from the <code>table {}</code> style, but you should always declare contrasting foreground and background colours at each level. </p>
    <p>These styles produce a table which would look like Figure 10 in most browsers: </p>
    
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-11.gif" alt="Screenshot showing gradient background" width="600" height="242" /></p>
    <p class="comment">Figure 10: Table demonstrating a gradient background image showing through between the cells. </p>
    
    <p>By default IE won’t show as much of the background, since it doesn’t support <code>border-spacing</code>. However you will still get the same general effect, as indicated by Figure 11.</p>
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-12.gif" alt="Screenshot showing smaller gaps in IE" width="600" height="224" /> </p>
    <p class="comment">Figure 11: The smaller border-spacing gap rendered by IE. </p>
    
    <p>Depending on your circumstances, you may be happy to simply accept this different rendering between browsers. Of course that isn’t always an option, for example when a client particularly wants a design to look exactly the same in all browsers. </p>

  
 <h3 id="fixingie">Fixing IE with conditional styles</h3>

<p>There is a workaround for the IE problems listed above. It requires a hack and an extra stylesheet, but it works. You can use an <code>expression</code> to produce the wider gap, then load that expression using conditional comments. The expression syntax is: </p>

<pre><code>table {
  <strong>border-collapse: expression(&quot;separate&quot;, cellSpacing = &quot;5px&quot;);</strong>
}</code></pre>

    <p>This CSS is only useful to IE, so you only want IE to apply it. The expression will also invalidate your stylesheet, so many developers prefer to isolate IE hacks in a separate stylesheet only loaded by IE. </p>
    <p>To do this, create a new stylesheet named ie-only.css and link it within conditional comments:</p>

<pre><strong>&lt;!--[if lte IE 7]&gt;</strong>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen&quot; href=&quot;ie-only.css&quot; /&gt;<strong>&lt;![endif]--&gt;</strong></pre>

    <p>Note the <code>[if lte IE 7]</code> means &quot;if less than or equal to IE version 7&quot;. This reveals the code to IE7 and all earlier versions of IE, while the surrounding HTML comment hides the code from all other browsers. You can adjust this to whichever version of IE you need to target, for example to target IE6 and earlier use <code>[if IE 6]</code>.</p>

<p>In your main stylesheet, set the normal style:</p>

<pre><code>table {
  border: 1px solid #000;
  border-collapse: separate;
  border-spacing: 5px;
  background: #000 url(&quot;gradient.gif&quot;) bottom left repeat-x;
}</code></pre>

<p>Then set your IE-only style in <code>ie-only.css</code>: </p>

<pre>table {
  border-collapse: expression(&quot;separate&quot;, cellSpacing = &quot;5px&quot;);
}</pre>

    <p>This will get IE to produce a table with wide cell spacing. You just have to remember to maintain the extra width settings—if you update your main stylesheet, you will have to update <code>ie-only.css</code> as well. Obviously conditional comments allow you to do a lot more than just style tables, since the extra stylesheet can contain as much CSS as you need to fix IE bugs. </p>

    <h3>A simple design </h3>
    
    <p>Most designs use relatively simple combinations of backgrounds. Let’s give the table headers a grey background, and change the caption to be white text on black: </p>
    
<pre>table {
  width: 100%;
  border: 1px solid #000;
}

th, td {
  width: 25%;
  text-align: left; 
  vertical-align: top; 
  border: 1px solid #000;
  border-collapse: collapse;
  padding: 0.3em;
  caption-side: bottom; 
}

caption {
  padding: 0.3em;
  <strong>color: #fff;
  background: #000;</strong>
}

th {
  <strong>background: #eee;</strong>
}</pre>

    <p>This looks like Figure 12:</p>
    
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-10.gif" alt="Screenshot of table with black and grey backgrounds added" width="600" height="214" /></p>
    <p class="comment">Figure 12: Table with reversed white-on-black caption and light grey background applied to the table heading cells. </p>
  
  <h2 id="variations">Common variations </h2>

  <p>In this section I will look at some common design archetypes you will see again and again in tables across the Web.</p>
  
  <h3 id="zebrastriping">Zebra striping</h3>

    <p>A common design request for tables is to create rows with alternating colours. These are commonly referred to as &quot;zebra striping&quot;. Although there is <a href="http://www.alistapart.com/articles/zebrastripingdoesithelp">some conjecture as to whether zebra striping actually helps the reader</a>, they are a popular style. Figure 13 shows an example:</p>
    
    <img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-zebra01.gif" alt="Screenshot of table with alternating row backgrounds" width="600" height="240" />
    <p class="comment">Figure 13: A table with &quot;zebra stripes&quot;, alternate rows set to white or light grey. </p>
    
    <p>The simplest way to accomplish zebra stripes is to add a class to alternate table rows, then use a contextual CSS selector to style the cells in those rows. First, the classes &quot;odd&quot; and &quot;even&quot; are added to the table rows, like so: </p>

<pre>  ...

&lt;tr class=&quot;odd&quot;&gt;

  ...

&lt;tr class=&quot;even&quot;&gt;

  ...</pre>

<p>You can skip the heading row as it already has its own style. You then add a contextual class to set the background for all cells inside odd class rows: </p>

<pre>.odd th, .odd td {
  background: #eee; 
}</pre>
  
  <p>This is the simplest way to add zebra striping to an HTML table that will work across all browsers, but it is not perfect—what if you add a row to the table? You’d then need to move all your <code>odd</code> and <code>even</code> class names around to get everything looking right again.</p>
  
<p>There are two other options:</p>
    <ul>
    <li><p>You can add the classes using unobtrusive JavaScript, as demonstrated in <a href="http://www.alistapart.com/articles/zebratables/">A List Apart: Zebra Tables</a>. Most JavaScript frameworks have a suitable method, too: <a href="http://jquery.com/blog/2006/10/18/zebra-table-showdown/">Zebra Table Showdown</a> compares a range of framework implementations.</p></li>
    <li><p>You can use the CSS3 <code>:nth-child</code> selector, however, this isn’t supported across all the major browsers yet. Support will improve as time goes on though.</p>
    
    <p>You can <a href="http://dev.opera.com/articles/view/zebra-striping-tables-with-css3/">find more out about zebra striping with <code>nth-child</code> in a dedicated dev.opera.com article</a>.</p></li>
    </ul>

  
    <h3 class="incomplete-grids">Incomplete grids</h3>
    <p>Some designs will respond well to less structured, more open-looking grids. A simple variation is to remove the vertical borders and leave out the background fill on the caption, as seen in Figure 14:</p>
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-13.gif" alt="Screenshot of opened grid design" width="600" height="206" /> </p>
    <p class="comment">Figure 14: A table with lighter grey borders only on the outer edge and bottom of each cell. </p>
    
    <p>The CSS for this effect is:</p>
<pre>table {
  width: 100%;
  border: 1px solid #999;
  text-align: left;
  border-collapse: collapse;
  margin: 0 0 1em 0;
  caption-side: top;
}

caption, td, th {
  padding: 0.3em;
}

th, td {
  border-bottom: 1px solid #999;
  width: 25%;
}

caption {
  font-weight: bold;
  font-style: italic;
}</pre>
 
 <p>You can take this a step further and remove all of the borders, except a top and bottom border to give some definition to the table body—see Figure 15:</p>
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-14.gif" alt="Screenshot of a table with borders at the top and bottom of the table body" width="600" height="175" /></p>
    <p class="comment">Figure 15: A table with borders applied only to the top and bottom of the table body.</p>
   
   <p>The CSS for this effect is:</p>
<pre>table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  margin: 0 0 1em 0;
  caption-side: top;
}

caption, td, th {
  padding: 0.3em;
}

tbody {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}

tbody th, tfoot th {
  border: 0;
}

th.name {
  width: 25%;
}

th.location {
  width: 20%;
}

th.lasteruption {
  width: 30%;
}

th.eruptiontype {
  width: 25%;
}

tfoot {
  text-align: center;
  color: #555;
  font-size: 0.8em;
}</pre>
  
  <h3 id="inner-grids">Inner grids</h3>
    <p>Sometimes you will want to remove the outer border, but keep the inner grid of borders, like in Figure 16:</p>
    
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/styling-table-15.gif" alt="Screenshot of table with inner grid design" width="600" height="199" /> </p>
    <p class="comment">Figure 16: A table with an inner grid design.</p>
    
    <p>To accomplish this for all current browsers, you need to add a class to the <code>th</code> and <code>td</code> cells that appear last on each row, like this:</p>
    
<pre>  ...

&lt;tr&gt;
  &lt;th scope=&quot;col&quot;&gt;Volcano Name&lt;/th&gt;
  &lt;th scope=&quot;col&quot;&gt;Location&lt;/th&gt;
  &lt;th scope=&quot;col&quot;&gt;Last Major Eruption&lt;/th&gt;
  &lt;th scope=&quot;col&quot; <strong>class=&quot;last&quot;</strong>&gt;Type of Eruption&lt;/th&gt;
&lt;/tr&gt;

  ...</pre>
  
  <p>Then we use that class to remove the right border from those cells. The full CSS is: </p>

<pre>table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  margin: 0 0 1em 0;
  caption-side: top;
}

caption, td, th {
  padding: 0.3em;
}

th, td {
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
}

th.last, td.last {
  border-right: 0;
}

tfoot th, tfoot td {
  border-bottom: 0;
  text-align: center;
}

th {
  width: 25%;
}</pre>
  
  <h4>Inner grids using <code>:last-child</code> </h4>
    <p>When browser support improves, we will be able to use the pseudo selector <code>:last-child</code> to achieve this effect without classes. The CSS would be:</p>

<pre>table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  margin: 0 0 1em 0;
  caption-side: top;
}

caption, td, th {
  padding: 0.3em;
}

th, td {
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
}

<strong>th:last-child, td:last-child {
  border-right: 0;
}</strong>

th {
  width: 25%;
}</pre>

    <p>This currently works in the latest versions of Opera, Firefox and Safari.</p>
    
    <h2 id="commonbugs">Two common bugs </h2>

<p>In this last section I’ll cover two really common bugs, so you’re prepared for when they crop up. They concern borders and captions. </p>

<h3 id="bordercollapse">border-collapse bug</h3>

<p>When you set your table to <code>border-collapse: collapse;</code> you will find that Firefox and Safari will incorrectly display the width of table features. For example, if you set a 1px border on the table, cells and caption, Firefox will render the caption 1px too narrow on the left, as seen in Figure 17:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/1px-caption-issue.gif" alt="Screenshot of a 1px shortfall" width="400" height="117" /> </p>
<p class="comment">Figure 17: The <code>border-collapse</code> bug affects Firefox and Safari.</p>

<p>Safari does the same thing, just on the right. This bug is all based on a rounding issue that ultimately comes down to how you display &quot;0.5 of a pixel&quot;. It can be argued that this is not a bug per se, but the browsers don’t agree so it’s effectively a bug.</p>

<p>So what’s the solution? If you want to use a 1px border and a caption background, there really isn’t a fix other than to &quot;live with it &quot;. It is a very minor difference and a non-fatal problem—that is, the table remains entirely usable. So, many people choose to just live with the differences between browsers. Let the Web be the Web. </p>

<p>If you are happy to use a larger border, say 2px, then you can simply set a 1px border on table, cells and caption; then set table to separate borders and apply zero spacing between them:</p>

<pre>table { 
  border-collapse: separate;
  border-spacing: 0; 
  border: 1px solid #000;
}

th, td, caption {
  border: 1px solid #000;
}</pre>

<p>In Firefox at least, the 1px borders will add up to the desired 2px rendered border, avoiding the rounding problem on the way. Safari still leaves a gap.</p>

<p>Alternatively, you can hide the problem by not using a border or background colour on your caption. The problem is still there; you just won’t see it. This is probably the simplest and most effective solution. </p>

<h3 id="margincaption">Margin/caption bug </h3>

<p>If you use a caption and set a margin on <code>table</code>, you need to be aware that Firefox and Safari may place the table margin <em>between</em> the table cells and the caption.</p>

<p>To combat this in Firefox, you can set the margin on three sides of <code>table</code>, set the <code>caption-side</code> explicitly, then add the fourth margin to the <code>caption</code>. Unfortunately, this solution will invoke the bug in Safari. So, this isn’t really a fix unless you are willing to live with the bug in either Firefox or Safari. </p>
<p>The only way to avoid a problem in both Firefox <em>and</em> Safari is to set a zero margin on the side with the caption. For example, if your caption is at the top you could just set your margin on the right, bottom and left sides; or just the bottom. This may work if you set all of your margins on the same side of content elements, so the margin isn’t required to space the table from adjacent content. </p>

<h2 id="summary">Summary</h2>

<p>By now you should have a good grasp of the fundamental styling options available for tables. There are some limitations imposed by browser inconsistencies, but in general you should be able to create clear and readable tables without any trouble. Just pay attention to your borders, give the text some breathing room, and be careful with backgrounds.</p>

<h2 id="exercises">Exercise questions</h2>


<ul>
  <li>How do you control the space between table and cell borders? </li>
  <li>What happens when <code>table</code> has one background colour, <code>th</code> and <code>td</code> cells have another background colour, and <code>border-collapse</code> is set to <code>collapse</code>?</li>
  <li>How do you set different columns to have different widths? </li>
</ul>

<h2 id="furtherreading">Further reading</h2>
<ul>
  <li><a href="http://www.w3.org/TR/REC-CSS2/tables.html">W3C: CSS2 Tables</a>, with particular reference to the <a href="http://www.w3.org/TR/REC-CSS2/tables.html#table-layers">CSS2 table background layering</a> section. </li>
  <li><a href="http://www.alistapart.com/articles/dao/">A List Apart:  A Dao of Web Design</a>—&quot;let the web be the web&quot;. A timeless article which will explain why a 1px difference between browsers doesn’t truly matter. </li>
  <li><a href="http://www.alistapart.com/articles/zebratables/">A List Apart: Zebra Tables</a> and <a href="http://www.alistapart.com/articles/zebrastripingdoesithelp/">A List Apart: Zebra Striping: Does it Really Help?</a></li>
  <li>
  <a href="http://dev.opera.com/articles/view/zebra-striping-tables-with-css3/">Zebra striping tables with CSS3</a>
  </li>
  <li><a href="http://dev.opera.com/articles/view/supporting-ie-with-conditional-comments/">Supporting IE with conditional comments</a></li>
  <li><a href="http://veerle.duoh.com/blog/comments/a_css_styled_table/">A CSS styled table | </a><a href="http://veerle.duoh.com/index.php/blog/comments/a_css_styled_calendar/">Veerle&#39;s</a><a href="http://veerle.duoh.com/blog/comments/a_css_styled_table/"> blog</a> &amp; <a href="http://veerle.duoh.com/index.php/blog/comments/a_css_styled_calendar/">A CSS styled calendar | Veerle&#39;s blog</a></li>
  <li><a href="http://icant.co.uk/csstablegallery/index.php">Data Tables and Cascading Style Sheets Gallery</a> shows off a variety of table designs (although be aware many do not meet <a href="http://www.w3.org/TR/AERT#color">W3C colour contrast recommendations</a>).</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/32-styling-lists-and-links/" rel="prev" title="link to the previous article in the series">Previous article—Styling lists and links</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/34-styling-forms/" rel="next" title="link to the next article in the series">Next article—Styling forms</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>
<img src="http://forum-test.oslo.osa/kirby/content/articles/161-33-styling-tables/benbuchanan.jpg" alt="Picture of the article author Ben Buchanan" class="right" />
<p>Ben Buchanan started creating web pages more than ten years ago, while completing a degree in everything but IT. He has worked in both the public (university) and private sectors; and worked on the redevelopment of major websites including <a href="http://www.theaustralian.com.au/">The Australian</a> and three generations of <a href="http://www.griffith.edu.au/">Griffith University</a>’s corporate website. He now works as Frontend Architect for <a href="http://www.newsdigitalmedia.com.au/">News Digital Media</a> and writes at <a href="http://weblog.200ok.com.au/">the 200ok weblog</a>.</p>
