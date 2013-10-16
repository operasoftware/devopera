Title: A CSS-only scrollable timeline, Part 1
----
Date: 2010-08-25 11:45:44
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Introduction</h2>

<p>It is quite surprising that very few tools for creating timelines exist, and those on offer typically use Flash or proprietary JavaScript and don&#39;t offer much in the way of customization.</p>

<p>Timelines offer a great way to present data and, combined with people&#39;s natural inclinations towards chronologically ordered data, hold enormous potential. In this article we will go through the basics of creating a simple timeline involving absolutely no Flash or JavaScript — only HTML and CSS.</p>

<p>Contents:</p>
<ul>
  <li><a href="#sec1">Structure</a></li>
  <li><a href="#sec2">Making the table scrollable and adding style</a></li>
  <li><a href="#sec3">Entering information onto the timeline</a></li>
  <li><a href="#sec4">Styling and positioning the entries</a></li>
  <li><a href="#sec5">Animated expanding entries</a></li>
  <li><a href="#sec6">Supporting information and Final polishing</a></li>
  <li><a href="#sec7">Summary</a></li>
</ul>

<h2 id="sec1">Structure</h2>

<p>In terms of marking up the timeline, I decided that the choice came down to either an HTML <code>&lt;table&gt;</code>, or a series of nested <code>&lt;div&gt;</code> elements. We have to take into account the simplicity and semantics of the markup, accessibility and ease of styling.</p>

<p>Tables seem to win out here. Tables are obviously far more semantically rich than nested divisions, and therefore easier to style without having to resort to presentational classes and IDs. Also, as suggested by the W3C, from an accessibility point of view <a href="http://www.w3.org/TR/WCAG10-HTML-TECHS/#tables">tables are friendlier to screen readers</a>.</p>

<h4>Creating the table</h4>

<p>By combining various CSS effects we can create a timeline with a stable and easily modifiable structure and visuals. We will start by creating the grid, comprised of a table with 7 rows and 5 columns (you can obviously use as many as you like when adapting this to your own projects). The only content we will include for now is the timeline years, in the table header row.</p>

<pre><code>&lt;!DOCTYPE html&gt;

&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;title&gt;Timeline&lt;/title&gt;
&lt;/head&gt;
  &lt;body&gt;
&lt;div id=&quot;timeline&quot;&gt;
  &lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;1998&lt;/th&gt;
        &lt;th&gt;1999&lt;/th&gt;
        &lt;th&gt;2000&lt;/th&gt;
        &lt;th&gt;2001&lt;/th&gt;
        &lt;th&gt;2002&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
    	&lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>The initial styling is simple, with a declaration for the width of the entire table that will automatically fit all columns. In terms of height the <code>&lt;table&gt;</code> tag often behaves unpredictably — the safest way around this is to set the height of both the <code>&lt;td&gt;</code> and <code>&lt;th&gt;</code> elements.</p>

<pre><code>/*TABLE*/
table {
  width:1200px;
}

/*CELLS AND HEADER*/
td, th {
  padding:0;
  height:22px;
  border: 1px solid #222;
}</code></pre>

<p>You can see the <a href="basic-1.html">basic table demo</a> running live — this will look something like Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/371-a-cssonly-scrollable-timeline-part-1/basic-1.png" alt="Our basic table with minimal styling" /></p>
<p class="comment">Figure 1: Our basic table with minimal styling.</p>

<h2 id="sec2">Making the table scrollable and adding style</h2>

<p>Probably the most important feature of the timeline is its ability to be scrolled horizontally with a scrollbar at the bottom. This requires the insertion of a new container around the table. The styling of this new container can be found below:</p>

<pre><code>#timeline {
  width:800px;
  overflow:hidden;
  overflow-x:scroll;
  position:relative;
}</code></pre>

<p>We set the width of the outer container to 800 pixels but it can be any number that is lower than the width of the <code>&lt;table&gt;</code> element — this sets the amount of content that is immediately visible without any scrolling. The two <code>overflow</code> properties ensure that only horizontal scrolling will be available.</p>

<p>Next up, the border between table cells looks terrible and nothing like a grid, but this is easily fixable by setting <code>border-collapse:collapse;</code> on the <code>&lt;table&gt;</code> element. we also style the <code>&lt;th&gt;</code> elements so they look more distinct, and apply some general styling to all table cells, resulting in the grid looking neat and less obtrusive:</p>

<pre><code>td, th {
  padding:0;
  height:22px;
  border: 1px solid #b4ced8;
}

th {
  font:bold 14px &quot;Trebuchet MS&quot;, sans-serif;
  color:#4f6b72;
  letter-spacing:2px;
  text-align:center;
  background:#cae3ed;
}</code></pre>

<p>You can test the <a href="basic-2.html">neat styled table</a> live; Figure 2 shows how it should look.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/371-a-cssonly-scrollable-timeline-part-1/basic-2.png" alt="Our table styling now looks much better" /></p>
<p class="comment">Figure 2: Our table styling now looks much better.</p>


<h2 id="sec3">Entering information onto the timeline</h2>

<p>Positioning entries on our table should be done with minimum hassle and maximum stylability. To do this we will place the entries (paragraphs, images or whatever) into <code>&lt;div&gt;</code> elements. This is semantically ok, very stable even when changing the width or height of the entire grid, and we are able to use the <code>&lt;div&gt;</code> to position the entries anywhere we want for visual effect, stretch them outside their containing table cells, and still have them remain accessible. A typical entry looks like this:</p>

<pre><code>&lt;td&gt;&lt;div&gt;&lt;p&gt;This starts in the middle of 1999&lt;/p&gt;&lt;/div&gt;&lt;/td&gt;</code></pre>

<p>For now we will add some styles to these entries to make them behave consistently:</p>

<pre><code>/*BOXES*/
td div {
  float:left;
  height:0;
}

td div p {
  margin:0;
  text-align:center;
  cursor:default;
  font-size:14px;
  padding:2px;
}</code></pre>

<p>You can see the new <a href="basic-3.html">timeline example with basic entries added</a> running live; it should look like Figure 3:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/371-a-cssonly-scrollable-timeline-part-1/basic-3.png" alt="The timeline now has entries added" /></p>
<p class="comment">Figure 3: The timeline now has entries added.</p>


<h2 id="sec4">Styling and positioning the entries</h2>

<p>One slight problem at the moment is that the width of each table column is different depending on the content inside it. This is easily fixable by setting <code>table-layout:fixed;</code> on the <code>&lt;table&gt;</code> element.</p>

<p>With this problem solved, we will now give the <code>&lt;div&gt;</code> and <code>&lt;p&gt;</code> elements some classes for styling purposes and an ID for positioning and width. The height of the boxes is automatic and depends on the amount of content each <code>&lt;div&gt;</code> has. The updated HTML for each entry is something like the following:</p>

<pre><code>&lt;td&gt;&lt;div id=&quot;one&quot;&gt;&lt;p class=&quot;girly&quot;&gt;This starts in the middle of 1999&lt;/p&gt;&lt;/div&gt;&lt;/td&gt;</code></pre>

<p>The new CSS looks like so:</p>

<pre><code>/*BOX GROUPS*/

.girly {
  background:#fdd;
  border:1px solid #e084ad;
  color:#db6483;
  -moz-border-radius:10px;
  border-radius:10px;
  font-family:Verdana;
}

.blueish {
  background:#b1c7ef;
  border:1px solid #8487ad;
  font-family:Georgia;
}

.elegant {
  background:#fffdce;
  border:1px solid #845700;
  color:#8f5600;
  -moz-border-radius:3px;
  border-radius:3px;
  font-family:Georgia;
}

/*INDIVIDUAL BOXES*/

#one {
  width:260%;
  margin-left:50%;
}

#two {
  width:100%;
  margin-left:38%;
}

#three {
  width:150%;
  margin-left:10%;
}

#four {
  width:100%;
}</code></pre>

<p class="note">Note that we are giving classes to the <code>&lt;p&gt;</code> elements for styling, and IDs to the containing <code>&lt;div&gt;</code> elements for positioning.</p>

<p>The last few CSS styles apply different widths and positions to different entries, relative to their containing table cells. The percentages are calculated in terms of the containing cell dimensions. For example, the entry with ID <code>one</code> has a <code>margin-left</code> of 50% applied to it so it will start from the middle of the cell it was positioned in initially; the <code>width</code> of 260% means that it will expand to 2.6 times the length of a standard table cell. An easy way to remember this is to think that 100% is equal to one period of the timeline (in our case it is a year).</p>

<p>You can test a demo of the <a href="basic-4.html">timeline with styled entries</a> live; it should look like Figure 4.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/371-a-cssonly-scrollable-timeline-part-1/basic-4.png" alt="Our entries are now styled much more nicely, and stretched across different amounts of time on the timeline" /></p>
<p class="comment">Figure 4: Our entries are now styled much more nicely, and stretched across different amounts of time on the timeline.</p>


<h2 id="sec5">Animated expanding entries</h2>

<p>Now is the time to add some animation to our entries so that they look more slick. We will make a single box smoothly expand when hovered over or given focus. The first thing to do is put enough content inside the entries so we can see the effect occur. Next we add classes to our entry content of <code>tiprows1</code>, <code>tiprows2</code>, etc. depending on how tall we want them to expend to:</p>
<pre><code>&lt;td&gt;&lt;div id=&quot;one&quot;&gt;&lt;p class=&quot;girly tiprows1&quot;&gt;This starts in the middle of 1999&lt;span&gt;the animation sure looks slick&lt;/span&gt;&lt;/p&gt;&lt;/div&gt;&lt;/td&gt;</code></pre>

<p>These classes are styled as follows in the CSS. Note the use of simple CSS3 transitions to provide the animation:</p>

<pre><code>/*TIP CONTENT*/

td div p span {
  position:relative; 
  text-align:center;
  height:0;
  display:block;
  overflow:hidden;
}

/*TIP ANIMATIONS*/

td div span {
  -webkit-transition:0.4s;
  -moz-transition:0.4s;
  -o-transition:0.4s;
  transition:0.4s;
}

/*TIP SIZES*/

.tiprows1:hover span {
  height:1.2em;
}

.tiprows2:hover span {
  height:2.4em; /*add 1.2em for each new row if more rows are needed*/
}</code></pre>


<p class="note">You may ask why we can&#39;t just use <code>display:none;</code> for the tooltip and then display it on hover/focus, thus making the height calculate itself automatically and not require different classes for different tooltip sizes? The problem with this approach is that it will not display any animation because browsers need a beginning and end point of every property they animate. Having an automatically calculated height will chop and/or break any animation. In addition, content that is set to <code>display:none;</code> isn&#39;t visible by screenreaders.</p>

<p>You can test the <a href="basic-5.html">animated timeline entries demo</a> yourself.</p>


<h2 id="sec6">Supporting information and Final polishing</h2>

<p>No timeline should be without supporting information — in this final section we will add two <code>&lt;h3&gt;</code> headings that will serve as a header and a legend and an <code>&lt;abbr&gt;</code> element in each entry that will show the corresponding start and end date. The dates will show above the entry, and we will mark them up in the hCalendar microformat so that you can see more accurately what the date span of each entry is. In addition, I have used the <a href="http://h2vx.com/ics/">h2vx</a> service from Technorati to add a link to the page that when clicked, extracts the entries as an <code>.ics</code> files that could then be imported into a calendar app such as iCal, Mozilla Sunbird or even Google Calendar. Sample hCalendar markup is given below:</p>

<pre><code>
&lt;abbr&gt;
  &lt;time datetime=&quot;1999-06-01&quot; class=&quot;dtstart value-title&quot; title=&quot;1999-06-01&quot;&gt;July 1st, 1999&lt;/time&gt;
  to 
  &lt;time datetime=&quot;2002-02-04&quot; class=&quot;dtend value-title&quot; title=&quot;2002-02-04&quot;&gt;February 4th, 2002&lt;/time&gt;
&lt;/abbr&gt;</code></pre>

<p>Adter that we add the class &quot;summary&quot; to the paragraph element to meet the minimum requirements of the hCalendar microformat for content. Then the styling comes:</p>

<pre><code>/*DATES*/

td div abbr {
  font:bold 11px &quot;Trebuchet MS&quot;, sans-serif; 
  padding:0 3px;
  margin-left:8px;
  border:1px solid #777;
  border-bottom:0;
  border-radius:3px 3px 0 0;
  background:rgba(255,255,255,0.7);
}</code></pre>

<p>Finally, to give the users the ability to export the events as an <code>.ics</code> file:</p>

<pre><code>
&lt;p&gt;&lt;a href=&quot;javascript:void(location.href=&#39;http://feeds.technorati.com/events/&#39;+escape(location.href))&quot;&gt;Download these events&lt;/a&gt; to your calendar.&lt;/p&gt;
</code></pre>

<p class="note">You can check what percentages correspond to your dates in this <a href="dates-percentages.html">dates as percentages list</a>.</p>

<p>The legend consists of divs that inherit the style of the entries they are describing. Nothing special is required to style these two elements, except some spacing and font sizing:</p>

<pre><code>/*HEADER AND LEGEND*/

h3	{
  margin:10px 0;
}

#legend &gt; div	{
  font-weight:normal;
  display:inline;
  font-size:70%;
  margin:0 5px;
}</code></pre>

<p>In addition to this styling, some borders and shadows have been added to make the timeline stand out more. Notice that we have increased the table width (not the container) by 50% (from 1200px to 1800px) and still the width <em>and</em> position of every box is the same in relative terms. You can change one number and everything else will size and reposition itself to behave like you wanted it to.</p>

<p>We will add one more function to the timeline to enhance accessibility. Some people cannot or choose not use a mouse. We will therefore make the timeline keyboard accessible, assigning the <code>Tab</code> button as the control to switch between timeline entries. To do this we  first add the <code>tabindex=&quot;x&quot;</code> attribute to the <code>&lt;p&gt;</code> of each entry. The &quot;x&quot; should be a positive integer, and be different in each case, and the order the entries are number in will denote the order of selection when you press <code>Tab</code>. Here is how the code looks:</p>

<pre><code>&lt;p class=&quot;girly tiprows1 summary&quot; tabindex=&quot;2&quot;&gt;</code></pre>

<p>Currently this solution works nicely when switching between the entries, but cycling through them does not expand them. To correct this we will simply modify the selector that controls the hover animation to include the <code>focus</code> pseudo-class as well, so we end up with this:</p>

<pre><code>.tiprows1:hover span, .tiprows1:focus span</code></pre>

<p>You can test the <a href="basic-6.html">final table example</a> live; it should look like Figure 5.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/371-a-cssonly-scrollable-timeline-part-1/basic-6.png" alt="Our final timeline example in all its glory" /></p>
<p class="comment">Figure 5: Our final timeline example in all its glory.</p>


<h2 id="sec7">Summary</h2>

<p>In this article we have created a timeline with semantic, accessible markup, and elegant CSS. The timeline itself is not a work of art but its purpose is to demonstrate what is possible. The next part of the article will focus on practical applications of the timeline, and giving it a more appealing visual style.</p>

<p class="note">All popular browsers except Firefox (3.6) and IE (all versions) support the entry animation. On browsers that don&#39;t support the necessary CSS transition, the full entries will still display on hover, but it won&#39;t look as good.</p>
