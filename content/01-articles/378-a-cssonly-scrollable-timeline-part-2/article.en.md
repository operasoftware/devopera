Title: A CSS-only scrollable timeline, Part 2
----
Date: 2010-11-03 11:25:31
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

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline/" rel="start" title="link to the first article in the series">A CSS-only scrollable timeline, Part 1</a></li>
</ul>


<h2>Introduction</h2>

<p>This article will focus on a few practical ways to improve the timeline we built in the <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline/">first part of the article</a> with a brand new &quot;framework&quot;. We will use CSS3 extensively and improve cross-browser compatibility.</p>

<p>Contents:</p>

<ul>
  <li><a href="#sec0">Building a timeline CV</a></li>
  <li><a href="#sec1">Time gaps and improved layout</a></li>
  <li><a href="#sec2">Structuring and styling the elements</a></li>
  <li><a href="#sec3">Eye candy</a></li>
  <li><a href="#sec4">Milestones introduced</a></li>
  <li><a href="#sec5">Dates and positioning</a></li>
  <li><a href="#sec6">BONUS - Porsche Timeline</a></li>
  <li><a href="#sec7">Summary</a></li>
</ul>



<h2 id="sec0">Building a timeline CV</h2>

<p>A personal employment/experience timeline can be an extremely useful addition to an online portfolio or CV/résumé. Showing an employer what you have done in your academic/professional life through a nicely styled timeline allows you to get the information across clearly while also showing off your CSS creativity. Because of its horizontal left-to-right structure it feels more natural than dates and months in typical CVs (which are ordered chronologically or reverse-chronologically depending on where you are in the world).</p>

<p>We are going to use a completely new structure from the previous article to create a scrollable CV.</p>

<pre><code>
&lt;div id=&quot;timeline&quot;&gt;
  &lt;div id=&quot;main&quot;&gt;
    &lt;div class=&quot;year&quot;&gt;
      &lt;h2&gt;2003&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;year&quot;&gt;
      &lt;h2&gt;2004&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;year&quot;&gt;
      &lt;h2&gt;2005&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;year&quot;&gt;
      &lt;h2&gt;2006&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;year&quot;&gt;
      &lt;h2&gt;2007&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;year&quot;&gt;
      &lt;h2&gt;2008&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;year&quot;&gt;
      &lt;h2&gt;2009&lt;/h2&gt;
    &lt;/div&gt;
    &lt;div class=&quot;year&quot;&gt;
      &lt;h2&gt;2010&lt;/h2&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

<p>See the <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/cv-1.html">basic first iteration</a> from which we start, it should look like Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/378-a-cssonly-scrollable-timeline-part-2/cv-screen-1.png" alt="The timeline has basic styling and almost no functionality now but is easily coded" /></p>
<p class="comment">Figure 1: The basic timeline has almost no functionality now but is structurally sound.</p>

<h2 id="sec1">Time gaps and improved layout</h2>

<p>You might want to hide some spans of time in the timeline, because nothing interesting occurs in those periods. This is best done by leaving empty space between the years and putting an ellipsis denoting a purposeful omission of something.</p>

<p>In terms of the code this can easily be achieved with a single class. In this example we want to add a gap after the first and third columns, so we will style it like so:</p>

<pre><code>
.gap {
  display: block;
  margin-right: 22px;
}

.gap h2::after {
  content: &quot;...&quot;;
  position: absolute;
  margin-left: 125px;
  color: #000;
}</code></pre>



<p>We will also put horizontal zebra stripes on the timeline with a simple line of code using an advanced CSS3 selector:</p>

<pre><code>.year:nth-child(even) {
  background: #f9f6f3;
}</code></pre>


<p>To further style the timeline we will add visual hint for the beginning and the end with some rounded corners:</p>

<pre><code>
.year:first-child {
  -moz-border-radius: 30px 0 0 30px;
  border-radius: 30px 0 0 30px;
}

.year:last-child {
  -moz-border-radius: 0 30px 30px 0;
  border-radius: 0 30px 30px 0;
}

.year:first-child h2 {
  -moz-border-radius: 26px 0 0 0;
  border-radius: 29px 0 0 0;
}

.year:last-child h2 {
  -moz-border-radius: 0 26px 0 0;
  border-radius: 0 29px 0 0;
}
</code></pre>

<p class="note">We are setting a different border radius for the inner heading to avoid the <a href="http://blog.gonchuki.com/archives/standards-compliancy-is-a-lie-or-how-all-browsers-have-a-broken-border-radius/">border-radius background bleed bug</a>: this currently seems to be the only way of fixing it for all browsers.</p>

<p>Now the timeline has a neater look and feel. <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/cv-2.html">Test the second iteration live here</a> or just have a look at it in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/378-a-cssonly-scrollable-timeline-part-2/cv-screen-2.png" alt="The gaps look natural and are easy to notice and understand" /></p>
<p class="comment">Figure 2: The gaps look natural and are easy to notice and understand.</p>



<h2 id="sec2">Structuring and styling the elements</h2>

<p>Below is some sample markup of a single entry in the timeline. The most substantial difference from the first article is the fact that now the containing div has the id, all the classes and the tabindex attribute. We do this because it will allow us to position the elements automatically according to the date (see the &quot;<a href="#sec5">Dates and Positioning</a>&quot; section.) Note that for our integration of the hCalendar microformat we are already adding <code>vevent</code> and <code>summary</code> classes.</p>

<pre><code>
&lt;div id=&quot;school&quot; class=&quot;education one-row vevent&quot; tabindex=&quot;2&quot;&gt;
  &lt;p class=&quot;summary&quot;&gt;
    Ohio High School
    &lt;span&gt;Studied business and economics&lt;/span&gt;
  &lt;/p&gt;
&lt;/div&gt;</code></pre>

<p>In this section we will improve on the styling of these entries in several ways so that when an element is hovered over or focused on it will stay on top of the other elements. In addition, everything has fancier styling making use of some modern CSS3 functions while becoming even more compatible with older browsers like IE7.</p>

<pre><code>/*ELEMENTS*/
.year div {
  float: left;
  height: 0;
  width: 100%;
  position: relative;
}

.year div p, #legend div {
  margin: 0;
  position: relative;
  z-index: 1;
  text-align: center;
  cursor: default;
  border: 1px solid #402607;
  font: 18px Georgia, serif;
  padding: 2px;
  -moz-border-radius: 4px;
  border-radius: 4px;

  -webkit-box-shadow: 1px 1px 2px rgba(0,0,0,0.5),
  inset 0 10px rgba(255,255,255,0.2),
  inset 0 10px 10px rgba(255,255,255,0.25),
  inset 0 -3px 20px rgba(0,0,0,0.3);

  -moz-box-shadow: 1px 1px 2px rgba(0,0,0,0.5),
  inset 0 10px rgba(255,255,255,0.2),
  inset 0 10px 20px rgba(255,255,255,0.25),
  inset 0 -3px 30px rgba(0,0,0,0.3);

  box-shadow: 1px 1px 2px rgba(0,0,0,0.5),
  inset 0 10px rgba(255,255,255,0.2),
  inset 0 10px 10px rgba(255,255,255,0.25),
  inset 0 -3px 20px rgba(0,0,0,0.3);
}

.year div:hover, .year div:focus {
  z-index:2;
}

.education p, #legend .education {
  background: #fff5b7;
  color: #523100;
}

.work p, #legend .work {
  background:#deae2d;
  color:#000;
}</code></pre>

<p class="note">For more information on advanced effects with CSS3 shadows check out <a href="http://dev.opera.com/articles/view/beautiful-ui-styling-with-css3-text-shadow-box-shadow-and-border-radius/">Beautiful UI styling with CSS3 text shadow, box shadow and border radius</a>, by Jan Henrik Helmers.</p>

<p>Next we will define the length of the elements in percentages. As before, 100% width is one year no matter how many pixels wide the timeline is. The positioning of the elements no longer needs to be defined by hand as it will be done automatically with some input in the &quot;<a href="#sec5">Dates and Positioning</a>&quot; section. Below are just two examples.</p>

<pre><code>/*INDIVIDUAL ELEMENTS*/
#school p {
  width: 88%;
}

#college p {
  width: 365%;
}</code></pre>

<p>Now we set the height for the tips that expand below the elements in the timeline.</p>

<pre><code>
/*TIPS*/
.year div p span {
  position: relative;
  height: 0;
  opacity: 0;
  display: block;
  overflow: hidden;
}

.year div:hover p span, .year div:focus p span {
  opacity: 1;
}

.year div.one-row:hover p span, .year div.one-row:focus p span {
  height: 1.2em;
}

.year div.two-rows:hover p span, .year div.two-rows:focus p span {
  height: 2.4em;
}</code></pre>


<p>Finally, we will define the row/level only on elements that will not lay on the first row, the class is added to the containing div, and the general style is simply this:</p>

<pre><code>
.level2 {
  top: 42px;
}

.level3 {
  top: 84px;
}
</code></pre>

<p><a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/cv-3.html">Test the third iteration live</a>, or view it in Figure 3.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/378-a-cssonly-scrollable-timeline-part-2/cv-screen-3.png" alt="The timeline is filled with elements with different and advanced visuals" /></p>
<p class="comment">Figure 3: The timeline is filled with elements with different and advanced visuals.</p>


<h2 id="sec3">Eye candy</h2>

<p>Next I want to add a smooth transition to the timeline entries so that when they are hovered over, the box expands and after that we see a fade-in of the tooltip text. To achieve this I borrowed some techniques from <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/">CSS3 transitions and 2D transforms</a>. Please read it if you need to catch up with the basics of 2D transforms and transitions.</p>

<p>We will use the shorthand transition property to set the elements&#39; 
animations in such a way that on hover they will first expand to the 
desired size and then, after a very short delay, the tooltip&#39;s text will fade in. Since only the text has a variable opacity we will add a delay only to the opacity transition. The height transition will start immediately.</p>

<pre><code>/*ANIMATIONS*/
.year div, .year div p, .year div p span {
  -webkit-transition: opacity .4s .25s, width .2s, z-index .2s, height .2s;
  -o-transition: opacity .4s .25s, width .2s, height .2s;
  -moz-transition: opacity .4s .25s, width .2s, height .2s;
  transition: opacity .4s .25s, width .2s, height .2s;
}</code></pre>
<p class="note">The z-index property in the webkit code seems to fix a bug with the expansion of tips.</p>

<p>We will also add a legend&#x2014;this will add more clarity to the timeline. Here&#39;s the markup for it:</p>

<pre><code>&lt;div id=&quot;legend&quot;&gt;
  Legend:
  &lt;div class=&quot;work&quot;&gt;Work experience&lt;/div&gt;
  &lt;div class=&quot;education&quot;&gt;Education&lt;/div&gt;
&lt;/div&gt;</code></pre>

<p>Then we style it a bit:</p>

<pre><code>/*LEGEND*/
#legend {
  margin-top: 20px;
}

#legend div {
  display: inline;
  margin: 0 6px;
}</code></pre>

<p>You can <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/cv-4.html">test the new animated example with a legend here</a> or view it below.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/378-a-cssonly-scrollable-timeline-part-2/cv-screen-4.png" alt="There is a legend added and some nice animations" /></p>
<p class="comment">Figure 4: There is a legend added and some nice animations.</p>



<h2 id="sec4">Milestones introduced</h2>

<p>Timelines are not only about processes that take place within a specific 
period of time&#x2014;there are also events that take place at a single specific <em>point</em> in time, which we call milestones. In this section we will add several milestones to the markup. Basically they are very similar to events, but with no duration and a 
start date only. In addition, they require a little more markup. They also have a distinctive color, a small rectangular size, and a symbol that gives a hint about the content of the milestone. This is what the HTML markup for a milestone looks like:</p>

<pre><code>
&lt;div id=&quot;birth&quot; class=&quot;milestone two-rows vevent&quot; tabindex=&quot;1&quot;&gt;
  &lt;p class=&quot;summary&quot;&gt;
    &amp;#9786;
    &lt;span&gt;I was born&lt;/span&gt;
  &lt;/p&gt;
&lt;/div&gt;
</code></pre>

<p>And this is the CSS we will style it with:</p>

<pre><code>.milestone p, #legend .milestone {
  background: #852525;
  color: #fff;
  width: 25px;
}

.milestone p:first-letter {
  font: 25px Georgia, serif;
}</code></pre>

<div class="note">Notice that the font size of <code>.milestone p:first-letter</code> has been set to equal the width of <code>.milestone p</code>. This is done to create a stronger visual effect.</div>

<p>The plan is to make a box wide enough only for one symbol (<a href="http://en.wikipedia.org/wiki/Miscellaneous_Symbols">a list of unicode symbols</a> is available at Wikipedia), which will denote a milestone. The information contained in the <code>&lt;span&gt;</code> will be available upon hovering over the element as with normal events.</p>

<p>To get this working, we need to define a width for each expanded milestone. Since the width depends only on the text we will define it manually in pixels.</p>

<div class="note">Notice that we already defined the standard height of a milestone together with the height in the row class, therefore the width is all we have to worry about here.</div>

<pre><code>#birth:hover p, #birth:focus p {
  width: 50px;
}</code></pre>

<p>A few paragraphs ago we added a width property in the animation functions - this was to have a smooth animation for the horizontal expansion of the milestones only.</p>

<p>This step is now finished and you can play around with the <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/cv-5.html">timeline populated with milestones here</a>.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/378-a-cssonly-scrollable-timeline-part-2/cv-screen-5.png" alt="The milestones add color and much needed functionality" /></p>
<p class="comment">Figure 5: The milestones add color and much needed functionality.</p>

<h2 id="sec5">Dates and positioning</h2>

<p>We will now add exportable date information about all events and 
milestones as we did in <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline/">part 1 of this article</a>, only now we will use 
some advanced techniques to clean up the code and make it more semantic 
and logical.</p>

<p>Adding date information about a single entry is very simple. In the HTML code below we have added only two <code>&lt;abbr&gt;</code> elements&#x2014;everything else is as it was before. For events without duration (milestones) we will need only the first <code>&lt;abbr&gt;</code> element with the <code>dtstart</code> class.</p>

<pre><code>
&lt;div id=&quot;school&quot; class=&quot;education one-row vevent&quot; tabindex=&quot;2&quot;&gt;
  &lt;abbr class=&quot;dtstart value&quot; title=&quot;2001-08-06&quot;&gt;&amp;nbsp;&lt;/abbr&gt;
  &lt;p class=&quot;summary&quot;&gt;
    Ohio High School
    &lt;span&gt;Studied business and economics&lt;/span&gt;
  &lt;/p&gt;
  &lt;abbr class=&quot;dtend value&quot; title=&quot;2005-07-02&quot;&gt;&amp;nbsp;&lt;/abbr&gt;
&lt;/div&gt;</code></pre>


<p>Now comes the most interesting part! With the use of advanced attribute selectors, we will position each event and the corresponding dates to a predefined position, depending on the starting month of the event. Below is the code for just the first two months:</p>
<pre><code>
.dtstart[title*=&quot;-01-&quot;], .dtstart[title*=&quot;-01-&quot;]~p, .dtstart[title*=&quot;-01-&quot;]~p~.dtend {
  margin-left: 4.2%;
}

.dtstart[title*=&quot;-02-&quot;], .dtstart[title*=&quot;-02-&quot;]~p, .dtstart[title*=&quot;-02-&quot;]~p~.dtend {
margin-left: 12.5%;
}</code></pre>

<p>Then we will style the dates. Everything here is pretty straightforward except for the part where we transform the title of an element into visible text using generated content. Read Divya Manian&#39;s <a href="http://dev.opera.com/articles/view/css-generated-content-techniques/">CSS generated content techniques</a> article for more insight into the matter.</p>

<pre><code>/*DATES*/
.dtstart::after, .dtend::after {
  font: bold 10px Verdana, sans-serif;
  color: #000;
  background: rgba(255,255,255,0.7);
  margin: 0;
  padding: 0;
  z-index: 1;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  border: 1px solid #888;
  -moz-border-radius: 2px;
  border-radius: 2px;
  height: 1.2em;
  width: 30px;
  opacity: 0;
}

.dtstart, .dtend {
  border-bottom: 0;
  position: absolute;
  height: 0;
  margin: 0;
  padding: 0;
}

.dtend {
  margin-top: -1.4em;
}

.vevent:hover .dtend, .vevent:focus .dtend {
  position: absolute;
  height: 0;
  margin: 0;
  padding: 0;
  margin-top: 0;
}

.year .dtstart::after {
  position: absolute;
  top: -1.4em;
}

.year .dtend::after {
  position: absolute;
  bottom: -1.4em;
}</code></pre>

<p>With the code above in place, the start and end times of events and the start date of milestones appear smoothly when hovering over or focusing on the entries. We can do even more by adding content depending on the type of entry we have, which we will insert using CSS to avoid any duplication of data resulting in more code.</p>

<pre><code>
.education:hover .dtstart::after, .education:focus .dtstart::after {
  content: &quot;Studied from &quot;attr(title);
  opacity: 1;
  width: auto;
}

.work:hover .dtstart::after, .work:focus .dtstart::after {
  content: &quot;Worked from &quot;attr(title);
  opacity: 1;
  width: auto;
}

.milestone:hover .dtstart::after, .milestone:focus .dtstart::after {
  content: &quot;Event occured on &quot;attr(title);
  opacity: 1;
  width: auto;
}

.year div:hover .dtend::after, .year div:focus .dtend::after {
  content: &quot;to &quot;attr(title);
  opacity: 1;
  width: auto;
}</code></pre>

<p class="note">In the actual example that follows all this content is duplicated almost identically because IE8 doesn&#39;t understand the two semicolons for pseudo-elements and needs only one semicolon.</p>

<p>Lastly, we will add the magical link at the bottom that exports the hCalendar information that we have.</p>

<p>Our CV timeline is now complete! <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/cv-6.html">Test the FINAL version live</a>, or see what it looks like in Figure 6.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/378-a-cssonly-scrollable-timeline-part-2/cv-screen-6.png" alt="The finished product now looks better than ever with the milestones and the dates as additional information" /></p>
<p class="comment">Figure 6: The finished product now looks better than ever with the milestones and the dates as additional information.</p>


<h2 id="sec6">BONUS - Porsche Timeline</h2>

<p>Provided below is a very brief section covering how to create another timeline. Its purpose is to showcase what can be achieved with this method when mixed with other techniques.</p>

<p>The timeline we are going to create lists several Porsche car models by their years of manufacture and also provides a picture for every model. I have used <a href="http://en.wikipedia.org/wiki/Template:Porsche">Porsche information from Wikipedia</a> to populate the example.</p>

<p>The image of each car model will be absolutely positioned in the upper right corner of the timeline, the font is a custom one, you can <a href="http://designgraphics.org/modules.php?name=Downloads&amp;d_op=viewdownloaddetails&amp;lid=7&amp;ttitle=">download the custom font</a> from <a href="http://designgraphics.org/">designgraphics.com</a>. If you need EOT fonts (for IE support) you can use the <a href="http://www.kirsle.net/wizards/ttf2eot.cgi">ttf2eot tool for converting TTF fonts to EOT</a>. Another new thing is having a fixed first column that divides the car models into three classes — be aware that they are not really accurate, but are good enough for the purposes of the showcase. Finally, we will add an element in the last cell of the timeline table with zero width and zero height but with an picture of Ferdinand Porsche for an image — this picture will be shown if the upper half of the timeline is hovered. Give the <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/porsche.html">final Porsche timeline a try</a>, and see it in action in Figure 6.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/378-a-cssonly-scrollable-timeline-part-2/porsche-screen.png" alt="The end demo with a lot of styling and some CSS3 functions and properties implemented" /></p>
<p class="comment">Figure 6: The end demo with a lot of styling and some CSS3 functions and properties implemented.</p>

<h2 id="sec7">Summary</h2>

<p>The <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/cv-6.html">timeline CV</a> offers great flexibility and can be adapted to match any visual style of any website. In addition, its basic functionality is supported in all modern browsers plus Internet Explorer 7 and 8 (IE7 doesn&#39;t show the dates).</p>

<p>We have completed the <a href="http://dev.opera.com/articles/view/css-only-scrollable-timeline-2/porsche.html">final Porsche timeline</a> in just 150 lines of code. The approach we have used here can be used not only for a timeline with pictures but a creatively styled fully-functional gallery. Feel free to experiment with and modify the code of any of the examples above for your particular needs.</p>
