Title: HTML tables
----
Date: 2008-07-08 07:16:04
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
<li class="prev"><a href="http://dev.opera.com/articles/view/18-html-links-let-s-build-a-web/" rel="prev" title="link to the previous article in the series">Previous article—HTML links—let’s build a web!</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/20-html-forms-the-basics/" rel="next" title="link to the next article in the series">Next article—HTML forms—the basics</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>“Ack!”—how do you use web standards to organize reams of data?  The very idea of tons of nested elements needed to get all the data into nice little rows and boxes ought to put your brain into “Ack!” mode, but there is a solution—tables to the rescue!</p>

<p>In web design tables are a good way to organize data into a tabular form.  In other words, think of tables, charts, and other information graphics that help you to see and process a great deal of information in a summary that allows you to compare and contrast different pieces of data.   You see them all the time on websites, whether they are giving a summary or comparison of political election results, sports statistics, price comparisons, size charts, or other data.</p>

<p>Back in the Jurassic Age of the Internet before CSS was popularised as a method of separating the presentation from structure of the HTML, tables were used as a way to lay out web pages—to create columns, boxes, and generally arrange the content.  This is the wrong way to go about it; tables for layout resulted in bloated, messy pages with tons of nested tables—larger file sizes, hard to maintain, hard to modify after the fact. You’ll still see sites like this on the Web, but rest assured that these days you should just use tables for what they are designed for—tabular data—and use CSS to control layout.</p>

<p>In this article I will cover how to use HTML tables properly—the structure is as follows:</p>

<ul>
    <li><a href="#basictable">The most basic table</a></li>
    <li><a href="#addingfeatures">Adding some more features</a></li>
    <li><a href="#morestructure">Structuring the table further</a></li>
    <li><a href="#csstable">CSS to the rescue: a better looking table</a></li>
    <li><a href="#summary">Summary</a></li>
    <li><a href="#furtherreading">Further reading</a></li>
    <li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="basictable">The most basic table</h2>

<p>I will start with the semantic HTML code required to render a basic table—this particular example compares recent volcanic eruptions in the Pacific region of North America.  I like volcanos and when I was a kid, I convinced my mom to take me to several of these volcanos on our summer road trips to visit Grandma.  I dearly hoped that one of the <a href="http://www.smithsonianjourneys.org/blog/2010/10/12/oregons-volcanoes/" title="pacific volcanos information">Pacific Northwest volcanos</a> would erupt while we were on holiday, but to no avail. The first table looks like so:</p>

<pre>
&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Volcano Name&lt;/td&gt;
        &lt;td&gt;Location&lt;/td&gt;
        &lt;td&gt;Last Major Eruption&lt;/td&gt;
        &lt;td&gt;Type of Eruption&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. Lassen&lt;/td&gt;
        &lt;td&gt;California&lt;/td&gt;
        &lt;td&gt;1914-17&lt;/td&gt;
        &lt;td&gt;Explosive Eruption&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. Hood&lt;/td&gt;
        &lt;td&gt;Oregon&lt;/td&gt;
        &lt;td&gt;1790s&lt;/td&gt;
        &lt;td&gt;Pyroclastic flows and Mudflows&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt .St. Helens&lt;/td&gt;
        &lt;td&gt;Washington&lt;/td&gt;
        &lt;td&gt;1980&lt;/td&gt;
        &lt;td&gt;Explosive Eruption&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</pre>

<p>This code renders as follows:</p>

<table>
<tr>
<td>Volcano Name</td>
<td>Location</td>
<td>Last Major Eruption</td>
<td>Type of Eruption</td>
</tr>
<tr>
<td>Mt. Lassen</td>
<td>California</td>
<td>1914-17</td>
<td>Explosive Eruption</td>
</tr>
<tr>
<td>Mt. Hood</td>
<td>Oregon</td>
<td>1790s</td>
<td>Pyroclastic flows and Mudflows</td>
</tr>
<tr>
<td>Mt .St. Helens</td>
<td>Washington</td>
<td>1980</td>
<td>Explosive Eruption</td>
</tr>
</table>


<p>Let’s start by breaking down the HTML markup used in the above code:</p>

<ul>
<li><code>&lt;table&gt;&lt;/table&gt;</code>:  The table is necessary to indicate to the browser that you wish to arrange the content in a tabular fashion.</li>

<li><code>&lt;tr&gt;&lt;/tr&gt;</code>:  The <code>tr</code> element establishes a table row. This allows the browser to organize any content between the <code>&lt;tr&gt;</code> and <code>&lt;/tr&gt;</code> tags in a horizontal fashion, or all in a row.</li>

<li><code>&lt;td&gt;&lt;/td&gt;</code>: The <code>td</code> element defines the table cell or each individual space for content within the row. Only use as many <code>td</code> table cells as needed for actual data. Don’t use empty <code>td</code> cells for white space or padding—you use CSS to create any white space or padding needed, as this is not only a good way to separate presentation from structure but it also makes the table easier to understand for people with visual impairments who are using screenreaders to read the table contents out to them.</li>
 </ul>

<p>Note that the basic elements must be nested as follows:</p>

<pre>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;content&lt;/td&gt;
        &lt;td&gt;content&lt;/td&gt;
        &lt;td&gt;content&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</pre>


<p>To order them in another fashion will cause the browser to spit up the equivalent of an internet hair ball and render the table in a very odd fashion if at all.</p>


<h2 id="addingfeatures">Adding some more features</h2>

<p>Now the basic table is in place, you can add some slightly more complex table features—first, I will add a caption and Table headers to help improve the data both in terms of semantics and legibility for screen readers. The updated table markup looks like so:</p>


<pre>
&lt;table&gt;
    &lt;caption&gt;Recent Major Volcanic Eruptions in the Pacific Northwest&lt;/caption&gt;
    &lt;tr&gt;
        &lt;th&gt;Volcano Name&lt;/th&gt;
        &lt;th&gt;Location&lt;/th&gt;
        &lt;th&gt;Last Major Eruption&lt;/th&gt;
        &lt;th&gt;Type of Eruption&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. Lassen&lt;/td&gt;
        &lt;td&gt;California&lt;/td&gt;
        &lt;td&gt;1914-17&lt;/td&gt;
        &lt;td&gt;Explosive Eruption&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. Hood&lt;/td&gt;
        &lt;td&gt;Oregon&lt;/td&gt;
        &lt;td&gt;1790s&lt;/td&gt;
        &lt;td&gt;Pyroclastic flows and Mudflows&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Mt. St. Helens&lt;/td&gt;
        &lt;td&gt;Washington&lt;/td&gt;
        &lt;td&gt;1980&lt;/td&gt;
        &lt;td&gt;Explosive Eruption&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</pre>


<p>This code is rendered as:</p>


<table>
<caption>Recent Major Volcanic Eruptions in the Pacific Northwest</caption>
<tr>
<th>Volcano Name</th>
<th>Location</th>
<th>Last Major Eruption</th>
<th>Type of Eruption</th>
</tr>
<tr>
<td>Mt. Lassen</td>
<td>California</td>
<td>1914-17</td>
<td>Explosive Eruption</td>
</tr>
<tr>
<td>Mt. Hood</td>
<td>Oregon</td>
<td>1790s</td>
<td>Pyroclastic flows and Mudflows</td>
</tr>
<tr>
<td>Mt. St. Helens</td>
<td>Washington</td>
<td>1980</td>
<td>Explosive Eruption</td>
</tr>
</table>


<p>The new elements used here are:</p>

<ul>
<li><code>&lt;caption&gt;&lt;/caption&gt;</code>: The <code>caption</code> element allows you to title the table data. Most browsers will center the caption and render it the same width as the table, unless one chooses to use CSS to align the text differently.</li>

<li><code>&lt;th&gt;&lt;/th&gt;</code>: The <code>th</code> element delineates the content between the tag as the table head titles for each column.  This is useful not just to help semantically describe what the function of this content is, but it also helps render it more accurately in a variety of browsers and devices.  The above example is the most stripped down way to use the <code>th</code> element.</li>
</ul>

<h2 id="morestructure">Structuring the table further</h2>

<p>As a final step in structuring our table, I will define header and body table sections, add a footer and define the scope of row and column headings. I will also add a summary attribute to describe the table contents. The final markup looks like so:</p>


<pre>
&lt;table summary=&quot;a summary of recent major volcanic eruptions in the Pacific Northwest&quot;&gt;
    &lt;caption&gt;Recent Major Volcanic Eruptions in the Pacific Northwest&lt;/caption&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;col&quot;&gt;Volcano Name&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Location&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Last Major Eruption&lt;/th&gt;
            &lt;th scope=&quot;col&quot;&gt;Type of Eruption&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;td colspan=&quot;4&quot;&gt;Compiled in 2008 by Ms Jen&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;  
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;row&quot;&gt;Mt. Lassen&lt;/th&gt;
            &lt;td&gt;California&lt;/td&gt;
            &lt;td&gt;1914-17&lt;/td&gt;
            &lt;td&gt;Explosive Eruption&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;row&quot;&gt;Mt. Hood&lt;/th&gt;
            &lt;td&gt;Oregon&lt;/td&gt;
            &lt;td&gt;1790s&lt;/td&gt;
            &lt;td&gt;Pyroclastic flows and Mudflows&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;th scope=&quot;row&quot;&gt;Mt. St. Helens&lt;/th&gt;
            &lt;td&gt;Washington&lt;/td&gt;
            &lt;td&gt;1980&lt;/td&gt;
            &lt;td&gt;Explosive Eruption&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<p>This table code looks like so in a browser:</p>

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


<p>The new elements/attributes are as follows:</p>

<ul>
<li>The <code>thead</code>, <code>tbody</code> and <code>tfoot</code> elements: These define the table’s header, body and footer respectively. Unless you are coding a really complex table with many columns and rows of data,  using these may be overkill.  In a complex table, however, using them can not only structure the content for the coder’s sake, but also for browsers and other devices.</li>

<li>The <code>colspan</code> and <code>rowspan</code> attributes: The <code>colspan</code> attribute creates a table cell that will span more than one column.  In the case of the above footer, I wanted the one table cell to span the whole width of the table, thus I told it that it was to span four columns. Alternately, you can add a table cell <code>rowspan</code> attribute that will allow the table cell to span x amount of rows, for example <code>&lt;td rowspan=&quot;3&quot;&gt;</code>.</li>

<li>The <code>summary</code> attribute: This attribute is used to define a summary of the table contents, for use by screenreaders (notice that you didn’t see it on the rendered version of the table above.) Note that in the older WC3 recommendations, WCAG 1.0 and HTML 4.0, it says you can use the <code>summary</code> attribute as detailed above. In newer drafts of the specs however, the <code>summary</code> attribute is not mentioned.  Whether to still use the <code>summary</code> attribute seems undecided, so for now we at the Web Standards Curriculum have agreed that it is safe to still use it. After all, it doesn’t cause anything to break, and it confers accessibility advantages.</li>

<li>The <code>scope</code> attribute: You may also have noticed the <code>scope</code> attributes in the <code>th</code> tags, and the fact that I have defined the volcano names as headings too, inside the data rows! This is perfectly allowable, but anyway, I digress. The <code>scope</code> attribute can be used in the <code>th</code> element to tell screen readers that the <code>th</code> content is the title for a column or a row.  The <code>scope</code> attribute is only used in the <code>th</code> element.</li>
</ul>

<h2 id="csstable">CSS to the rescue: a better looking table</h2>

<p>The above listed elements and attributes are all that is necessary to code a good data table. Now the HTML structure is in place, let’s look at some simple CSS to make the table look a bit nicer:</p>

<pre>body {
	background: #ffffff;
	margin: 0;
	padding: 20px;
	line-height: 1.4em;
	font-family: tahoma, arial, sans-serif;
	font-size: 62.5%;
}

table {
	width: 80%;
	margin: 0;
	background: #FFFFFF;
	border: 1px solid #333333;
	border-collapse: collapse;
}

td, th {
	border-bottom: 1px solid #333333;
	padding: 6px 16px;
	text-align: left;
}

th {
	background: #EEEEEE;
}

caption {
	background: #E0E0E0;
	margin: 0;
	border: 1px solid #333333;
	border-bottom: none;
	padding: 6px 16px;
	font-weight: bold;
}</pre>

<p>When applied to our final table markup, the table looks as seen in Figure 1. You can also <a href="table3.html" title="the final table example, with CSS styling">check out the example live here</a>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/126-19-html-tables/table3.png" alt="the final table example" />

<p class="comment">Figure 1: The table now looks a lot more visually appealing.</p>


<p>Oooh... Look, much better.  You can choose to style the table anyway you want, but the above provides a baseline to work with. You’ll <a href="http://dev.opera.com/articles/view/33-styling-tables/">learn a lot more about styling tables with CSS later in the course</a>, but for now I’ll just briefly break down what each section of this CSS is doing:</p>

<ul>
<li><code>body</code>: In the above CSS, I have added properties to set the margin (to zero in this case), padding to give a little room, background color (white), font size and family, as well as the line height to also give a little breathing room.  You can <a href="csstable.zip" title="the full code for the last example">download the code for this example here</a>—try altering the properties in the CSS file to see how things change.</li>

<li><code>table</code>: borders have been added using the CSS border declaration. To make this work correctly, I also had to set the <code>border-collapse</code> property to <code>collapse</code>, to reset the border values in the table and allow the <code>border-bottom</code> to be a straight rule line across the whole row rather than being broken up at the end of each table cell. I chose a <code>width</code> of 80% for this example (this makes the table extend across 80% of the screen width; the table will change width relative to any change made to the browser window width).</li>

<li><code>th</code> and <code>td</code>: In the above example CSS, I have set the text alignment to be left, but you could set it to center or even give the various <code>th</code> and <code>td</code> elements class names and then use the CSS to have more control over each row or column (in the row case, you would give the <code>tr</code> element tag a class name).  I also gave both the <code>th</code> and <code>td</code> a bit of padding to open up the rows and allow for greater readability. In the case of the <code>th</code> selector above, I set another color as to differentiate the headings  from the rest of the table.</li>

<li><code>caption</code>: If you do not set CSS properties for the <code>caption</code> selector, then it does not have a border and is the same background color as the whole page even though the HTML markup for the caption is within the <code>table</code> tag.  Thus, in the above example I have given the caption a border (with no bottom border, as the border in the table already provided it), a different background color and bold type to set the caption apart from the table header row.</li>
</ul>

<h2 id="summary">Summary</h2>

<p>In this article I have gone through all you need to know to create effective HTML data tables. That’s a wrap! I’ll leave you with some pertinent thoughts:</p>

<ul>
<li>It is important that tables are correctly coded to be readable by a variety web browsers, mobile, accessible, and other devices.  Table HTML is best kept to a minimum, and you should use CSS to style the tables. You’ll learn a lot more about CSS later on in the course.</li>
<li>Tables can be accessible to mobile devices and users that use screen reading software by keeping the code clean, using attributes such as scope and summary as well as the caption element to help announce clearly and semantically what the respective sections are for. Also important for accessibility is to not use empty table cells for spacing (use CSS for this instead).</li>
</ul>

<h2 id="furtherreading">Further reading</h2>

<ul>
<li><a href="http://www.w3.org/TR/html401/struct/tables.html" title="The W3C tables recommendation">W3C HTML 4 Tables Recommendation</a></li>
<li><a href="http://www.w3.org/TR/CSS21/tables.html" title="The W3C CSS 2 tables recommendation">W3C CSS 2 tables recommendation</a></li>
<li><a href="http://www.456bereastreet.com/archive/200410/bring_on_the_tables/" title="tables article by Roger Johansson">Roger Johansson’s “Bring on the Tables”</a></li>
</ul>


<h2 id="exercises">Exercise questions</h2>

<ul>
<li>Start by coding a simple table with only the 3 main table elements: <code>table</code>, <code>tr</code>, and <code>td</code>.  Save it and view it in a browser.</li>
<li>Much like the second example above, add a caption, header, and footer to your table.  How does that change what you see in the browser?</li>
<li>What can you do to make your table more accessible to screen readers and hand held devices?</li>
<li>Now create a CSS file.  Try styling the borders, padding, and cell spacing of your table with only CSS and no attributes in your HTML markup.  Add background color and style the fonts.</li>
</ul>

<p>Have fun.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/18-html-links-let-s-build-a-web/" rel="prev" title="link to the previous article in the series">Previous article—HTML links—let’s build a web!</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/20-html-forms-the-basics/" rel="next" title="link to the next article in the series">Next article—HTML forms—the basics</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<img src="http://forum-test.oslo.osa/kirby/content/articles/126-19-html-tables/msjen.jpg" alt="Picture of the article author Ms Jen" class="right" />

<p>A web designer/developer by trade, a photographer,
moblogger and professional art weirdo for the love of it, Ms. Jen
started her art and design career in the high chair with her love of personal
food art and food wall art at the age of 11 months. She taught herself HTML
in 1996 when a computer snob said that an artist could not learn to code and
has been fully in love with all things web design ever since.</p>

<p>Ms. Jen is the owner and founder of Black Phoebe Designs, a web &amp;
mobile design firm. Ms. Jen has has a Masters degree in Computer
Science and Multimedia Systems from Trinity College in Dublin, Ireland,
and taught web design at an LA area university from 2001–2005. She
has participated in two Nokia mobile blogging projects, Wasabi
Lifeblog (2004–2005) and the Nokia Urbanista Diaries (2008). Ms. Jen
can always be found online at <a href="http://www.blackphoebe.com" title="Black Phoebe homepage">blackphoebe.com</a> or <a href="http://blackphoebe.mobi/" title="Black Phoebe mobile site">blackphoebe.mobi</a>.</p>
