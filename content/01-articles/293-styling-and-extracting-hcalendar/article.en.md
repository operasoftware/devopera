Title: Styling and extracting hCalendar
----
Date: 2009-08-19 14:49:43
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

<p>UPDATE! September 10th 2009: After publishing this article, we were contacted by Microformats instigator <a href="http://tantek.com/">Tantek Çelik</a>, who suggested we implement the <a href="http://microformats.org/wiki/value-class-pattern">value-class-pattern</a> to improve on the example&#39;s accessibility. The original method used a <code>title</code> attribute on the <code>abbr</code> element to contain the ISO date of the event start and finish times, which is an ok way to do it, but the new way makes more sense semantically, and sits better with screenreaders reading out the data. The new version (article updated throughout) uses <code>span</code> elements to contain the <code>title</code> ISO date, with a <code>class</code> value of <code>value-title</code> to indicate that this is an hCalendar value. Much better all round! We&#39;d like to say thank you to Tantek for the suggestion, and to <a href="http://adactio.com">Jeremy Keith</a> for some further advice.</p>

<p>You can <a href="hCalendar_example2.zip">download the new version of the code</a>, or <a href="incontrol2.html">view the new example live</a>, to follow along with this example. If you wish to compare and contrast the new and old methods, you can still <a href="hCalendar_example.zip">download the old source code</a>, or <a href="incontrol.html">run the old example live</a>.</p>
</div>

<h2>Introduction</h2>

<p>While the Web is filled with all kinds of useful information it’s sometimes cumbersome to make use of it. </p>

<p>From business information trapped inside an image format to email addresses hacked to foil spam bots from harvesting them, web developers often make it harder for our visitors to make use of the information we want to give them, and for us to reuse it in other applications.</p>

<p>One example is event information - the traditional way would be to present it as a paragraph (or list) of text, and hope people mark it in their calendars, perhaps writing it on to a physical calendar or copying and pasting it into their computer&#39;s calendar application.</p> 

<p>However, we can make things easier by marking up our events with the hCalendar microformat - this allows site visitors can use a third-party application to add our event information to their calendar applications with a single button click - no copy and paste required! In this article I will show you how to markup and style the hCalendar microformat, and how to provide your site visitors with a link to import your event into their calendar application using the Technorati Events Feed Service.</p>

<h2>Introducing hCalendar</h2>


<p>hCalendar is the microformat that embeds event information into a web page. Based on the iCalendar file format used to exchange event data, it uses standardized (X)HTML to code semantic information - such as the event time and place - into a web document.</p>

<h2>The HTML</h2>

<p>Let&#39;s examine a section of our HTML table:</p>

<pre><code>&lt;tr&gt;
  &lt;th colspan=&quot;3&quot;&gt;June 11th, 2009&lt;/th&gt;
&lt;/tr&gt;
  
&lt;tr class=&quot;vevent alt&quot;&gt;
  &lt;td width=&quot;104&quot;&gt;&lt;span class=&quot;dtstart&quot;&gt;&lt;span class=&quot;value-title&quot; title=&quot;2009-06-11T08:00-04:00&quot;&gt;8:00&lt;/span&gt;&lt;/span&gt;-&lt;span class=&quot;dtend&quot;&gt;&lt;span class=&quot;value-title&quot; title=&quot;2009-06-11T09:00-04:00&quot;&gt;9:00&lt;/span&gt;&lt;/span&gt;&lt;/td&gt;
  &lt;td width=&quot;382&quot; class=&quot;summary&quot;&gt;&lt;strong&gt;Keynote&lt;/strong&gt; (Daniel Burka, Digg.com)&lt;/td&gt;
  &lt;td width=&quot;133&quot; class=&quot;location&quot;&gt;Main Auditorium&lt;/td&gt;
&lt;/tr&gt;

&lt;tr&gt;
  &lt;td&gt;9:00-9:15&lt;/td&gt;
  &lt;td colspan=&quot;2&quot;&gt;Break&lt;/td&gt;
&lt;/tr&gt;
          
&lt;tr class=&quot;vevent alt&quot;&gt;
  &lt;td&gt;&lt;span class=&quot;dtstart&quot;&gt;&lt;span class=&quot;value-title&quot; title=&quot;2009-06-11T09:15-04:0000&quot;&gt;9:15&lt;/span&gt;&lt;/span&gt;-&lt;span class=&quot;dtend&quot;&gt;&lt;span class=&quot;value-title&quot; title=&quot;2009-06-11T11:00-04:00&quot;&gt;11:00&lt;/span&gt;&lt;/span&gt;&lt;/td&gt;
  &lt;td class=&quot;summary&quot;&gt;&lt;strong&gt;HTML+XHTML Workshop&lt;/strong&gt; (Molly E. Holzschlag)&lt;/td&gt;
  &lt;td class=&quot;location&quot;&gt;Main Auditorium&lt;/td&gt;
&lt;/tr&gt;

  [...]
&lt;/table&gt;</code></pre>

<p>Here we have a series of events, with each event getting its own row. The columns include the time for each academic talk, the name of the talk, and its location. Note the use of hCalendar properties - each separate event (enclosed in a table row tag) is designated by the <code>vevent</code> class. This specifies it as an hCalendar entry.</p>

<p>And, while only the beginning time of the event (<code>dtstart</code>) and <code>summary</code> is required for every hcalendar event, we&#39;ve also included the end time (<code>dtend</code>) and <code>location</code> properties.</p>

<p class="note">Note: For more optional properties, see the <a href="http://microformats.org/wiki/hcalendar-cheatsheet">hCalendar cheatsheet</a>. For tools to create your own hCalendar, check out the <a href="http://microformats.org/code/hcalendar/creator">hCalendar Creator</a> and the <a href="http://dmitry.baranovskiy.com/work/csc/">Conference Schedule Creator</a>.)</p>

<p>While this code provides the structure for our calendar, the unstyled table is quite plain and difficult to read, as shown in Figure 1:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/293-styling-and-extracting-hcalendar/hcal01.jpg" alt="default rendering of the HTML table" />
<p class="comment">Figure 1. The default rendering of the HTML table.</p>

<h2>Styling hCalendar with CSS</h2>

<p>Let&#39;s move forward by digging into the CSS for this page; first, we&#39;ll add some much-needed padding and borders:</p>

<pre><code>table {
  border: 1px solid #d2d1ef;
}

td {
  border-top: 1px solid #d2d1ef;
  margin: 0;
  padding: 7px;
}</code></pre>

<p>We&#39;ve added a light lavender border around the perimeter of the table, as well as between its rows. The padding gives the text within the cells some breathing room, as shown in Figure 2:</p>
 
<img src="http://forum-test.oslo.osa/kirby/content/articles/293-styling-and-extracting-hcalendar/hcal02.jpg" alt="Light coloured border around the content in table cells" />
<p class="comment">Figure 2: Light coloured border around the content in table cells.</p>

<p>Next, we&#39;re going to style the table headers: here, the headers are those cells marking out the two dates of the conference:</p>

<pre><code>th {
  font: normal 16px &quot;Trebuchet MS&quot;, Verdana, Arial, sans-serif;
  color: #fff;
  padding: 10px 7px 10px 7px;
  background-image: url(images/background.jpg);
}</code></pre>

<p>After setting the font and its colour, we&#39;ve added some extra padding to the top and bottom of the cell, just to make it a bit chunkier than the rest of the table rows. Finally, we&#39;ve added a soft purple gradient JPEG (see Figure 3) as the background image.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/293-styling-and-extracting-hcalendar/hcal03.jpg" alt="The image used for tiling backgrounds" />
<p class="comment">Figure 3: The image used for tiling backgrounds.</p>

<p>Now our conference schedule is starting to look more polished, as seen in Figure 4.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/293-styling-and-extracting-hcalendar/hcal04.jpg" alt="The headers are now styled: looking better already" />
<p class="comment">Figure 4: The headers are now styled: looking better already!</p>

<p>Next, let&#39;s add some zebra striping to make the table a bit more readable. To do this, we need to go back into our HTML and add an extra class to every other table row:</p>

<pre><code>&lt;tr class=&quot;vevent alt&quot;&gt;</code></pre>

<p>Once every other table row is marked out, we can target those rows and colour them separately:</p>

<pre><code>tr.alt {
 background-color: #e7e7ff;
}</code></pre>

<p>So, we&#39;ve changed the <code>background-color</code> of every other table row to a light lavender, resulting in the page seen in Figure 5.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/293-styling-and-extracting-hcalendar/hcal05.jpg" alt="table cells are striped" />
<p class="comment">Figure 5: The table cells are striped.</p>


<p class="note">Note that you can stripe tables much more easily using the CSS 3 <code>nth-child</code> pseudo-class, which works in most modern browsers. However, this excludes Internet Explorer, so I have stuck with the old way in this article to ensure maximum compatibility. To learn more about <code>nth-child</code>, read my <a href="http://dev.opera.com/articles/view/zebra-striping-tables-with-css3">Zebra Striping tables with CSS 3</a> article.</p>

<p>This conference schedule is looking really great, but there is still more we can do: let&#39;s add a bit more interactivity to the page. We&#39;ll include some interesting hover effects, so that when the user runs his mouse over a row, the row becomes highlighted. Not only is this effect pretty, but it enhances usability by focusing the users attention on what her mouse is hovering over.</p>

<pre><code>tr:hover {
 background-color: #d2d1ef;
}</code></pre>

<p>Here, we&#39;ve just targeted the <code>:hover </code> pseudo-class within the table row, and have coloured the background a darker shade of lavender. Now, when the user runs his mouse over a row, the <code>:hover </code> pseudo-class is activated, and the row changes colour.</p>

<h2>Please, won&#39;t somebody think of the Microformat?</h2>

<p>Now that our table <em>looks</em> good, let&#39;s exploit the hCalendar markup in our schedule. As hCalendar is a standardized method of marking up HTML (as all Microformats are), there are several third-party tools available to extract this information from your pages. One such tool is Technorati&#39;s <a href="http://technorati.com/events/">Events Feed Service</a>, which allows you to pull in (or subscribe to) the hCalendar events embedded in web pages using your calendar application (such as iCal or Google Calendar). You can use this service by entering a URL to the Events Service bookmarklet on your web page, or you can add its bookmarklet to your bookmarks - see the <a href="http://technorati.com/events/">Events Feed Service</a> page for all the details you&#39;ll need to do this.</p>

<p>In this case, we&#39;ll take the latter option and add a link to the bookmarklet at the bottom of our page:</p>

<pre><code>&lt;p&gt;&lt;a href=&quot;javascript:void(location.href=&#39;http://feeds.technorati.com/events/&#39;+escape(location.href))&quot;&gt;Download this schedule&lt;/a&gt; to your calendar.&lt;/p&gt;</code></pre>

<p>When the user clicks on the link, the Technorati service activates and the user is prompted to download the conference events into their calendar application.</p>

<p>Figure 6 shows the finished page.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/293-styling-and-extracting-hcalendar/hcal06.jpg" alt="a rollover effect on the table rows and a link to download the schedule" />
<p class="comment">Figure 6. Now we have a rollover effect on the table rows, and a link to download the schedule.</p>

<h2>Summary</h2>
<p>The finished conference schedule is nicely styled, subtly interactive, and provides users with an easy way to import the schedule into their calendars. This article has demonstrated how we can easily incorporate the hCalendar Microformat into our web pages.</p>

