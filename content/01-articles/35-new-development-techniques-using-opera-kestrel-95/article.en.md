Title: New development techniques using Opera Kestrel (9.5)
----
Date: 2007-09-05 19:34:59
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

<p>Kestrel is the upcoming version of Opera&#39;s desktop browser (version 9.5.) The full version isn&#39;t available yet, but the first beta version is already available to play with, at <a href="http://www.opera.com/download/?ver=9.50b" alt="Link to Kestrel beta download">http://www.opera.com/download/?ver=9.50b</a>. Now that Opera has fully migrated to the new version of its rendering engine, Core-2, Opera Kestrel has a few new techniques available for developers to play with, including new CSS3 and SVG support, and a new JavaScript engine, all of which I will discuss in this article.</p>

<h2>Say hello to CSS3 selectors</h2>

<p>Kestrel supports the full range of CSS3 selectors, so you can take advantage of some of the CSS3 spec&#39;s advanced selectors to select very useful element groups without having to add extra mark-up or class/ID names.</p>  

<h3>Tiger striped tables</h3>

<p>Alternating the background colour of the rows in a data table has been a popular usability technique for a few years now - it allows the eye to follow the rows more easily.  This traditionally required JavaScript or adding a class name to each row that needed to be styled with the alternative colour, but no more!  This can now be done with <code>nth-child</code> (or <code>nth-of-type</code>).</p>

<p>In the following example (see <a href="http://files.myopera.com/dstorey/experiments/iTunesTable.html" alt="CSS3 zebra sriped HTML table example">here</a> for the example in action) the striped effect can be created by simply using:</p>

<pre><code>#playlist tr:nth-child(odd) td {
  background-color: #edf3fe; 
}
</code></pre>

<p>Alternatively <code>nth-child(even)</code> could have been used.  You can have exact control over which element is selected, by specifying the element number, the repeating pattern you want and/or the element offset value.  For example, <code>tr:nth-child(2)</code> would specify the second row only, <code>tr:nth-child(3n)</code> would select every third row, while <code>tr:nth-child(3n+1)</code> would select every third row offset by one.</p>  

<h3>Drop caps</h3>

<p>A popular way to add drop caps is to put a span around the first letter, or add a class to the paragraph you want to add the drop cap to and use the <code>::first-letter</code> pseudo-element to manipulate the drop cap (the class is needed as it isn&#39;t always predictable where the element will be in the code; there could be a image or a list before the first paragraph for example, which could throw things off.)  But no more do we have to suffer this hassle - you can now create a drop cap (among many other things) with the <code>first-of-type</code> selector.</p>

<p>Check out the following code:</p>

<pre><code>div.article &gt; p:first-of-type::first-letter { }</code></pre>

<p>This selects the first letter of the first <code>p</code> element that is a direct child of the <code>div</code> element with an class of <code>article</code>.  If there are any other elements before the first paragraph of the article, the correct element will still be selected.  It ignores any paragraphs that are not a direct descendent, such as those contained in <code>div</code> elements.  This can be seen in the example <a href="http://files.myopera.com/dstorey/experiments/dropcaps.html" alt="CSS3 drop caps example">found here</a>.</p>

<h2>Dynamic Media queries</h2>

<p>Media queries allow you to query certain properties about the user&#39;s system, so that you can tailor the style and layout to suit their needs.  They are most commonly used to customise the layout for mobile devices, but they can be useful on the desktop too.  With Kestrel, media queries are dynamic, meaning that if you have a media query that checks the screen width, the query will fire automatically when the user moves the window size below/above that width, rather than you being expected to refresh the page.  This can be very useful - with liquid layouts, there are often problems where content overlaps or breaks unappealingly onto a new line when the user resizes their browser below a certain width; with dynamic media queries you could avoid this by using a media query to automatically break the content in an acceptable manner when the browser goes below that width.</p>

<p>Let&#39;s have a look at a real example - point your browser at <a href="http://files.myopera.com/dstorey/experiments/dynamicmediaqueries.html" alt="media queries example">this example</a>. If you resize the browser window horizontally the Media Query fires when the column of text reaches a hard to read width, and clears the text under the image by removing the float from the <code>figure</code> class.  It also reduces the size of the heading to make it more readable at smaller window sizes, and scales the image so that it remains fully visible.</p>

<p>The CSS for this is:</p>

<pre><code>@media screen and (max-width: 730px) {

  h1 { font-size: 2em; }

    .figure {
      float: none;
      margin: 0 10%;
    }

    .figure p { display: none; }

    .figure img {
      max-width: 95%;
      height: auto;
      padding-bottom: 5px;
    }
}
</code></pre>

<h2>Other useful CSS additions</h2>

<p>Selectors aren’t the only CSS additions to Kestrel. For a further overview please check out the change logs (<a href="http://snapshot.opera.com/" alt="The Opera desktop browser change logs">you can find links to them here</a>) or <a href="http://my.opera.com/dstorey/blog/2007/08/27/update-on-css-support-in-kestrel" alt="More information on CSS3 additions to Kestrel">my previous post on Opera Labs</a> for a quicker overview.</p>  

<h2>Adding decoration using SVG</h2>

<p>SVG (scalable vector graphics) is a markup language for creating high-quality, small bandwidth vector graphics and animations. It has shown promise for a long time, but hasn&#39;t yet made it to the main stream, mainly because of browser adoption, but this is starting to change. Opera Kestrel improves its support further with partial support for SVG 1.2 Tiny (the basic subset of SVG guaranteed to work on all devices including mobile phones, as long as a parser is available,) amongst other things.  The most interesting addition in my opinion though is the ability to use SVG as the source of an <code>img</code> element and make use of it via CSS using the <code>background-image</code> and <code>list-style-image</code> properties.  Below we&#39;ll look at how this can be used to spice up your designs.</p>

<h3>Rounded corners</h3>

<p>The <code>border-radius</code> property has been added to CSS to make rounded corners easier.  This doesn&#39;t work in Opera at the present moment, but SVG can be used in tandem with <code>border-radius</code> to create rounded corners that work in the latest versions of Opera, Safari and Firefox.</p>  

<p>In the following example (see <a href="http://files.myopera.com/dstorey/experiments/roundedcorners.html" alt="CSS3 and SVG rounded corners example">here</a> for a live example) you can see each technique used separately, then them combined in the final example.  No special HTML is needed, except a regular block level element (in this case a <code>div</code>) to apply the style to.</p>

<p>The CSS needed is as follows:</p>

<pre><code>  background:  silver url(&quot;../images/roundedcorners2.svg&quot;);
  -webkit-border-radius: 1em; -moz-border-radius: 1em; border-radius: 1em;
</code></pre>

<p>And the SVG:</p>

<pre><code>  &lt;rect fill=&quot;white&quot;  x=&quot;0&quot; y=&quot;0&quot; width=&quot;100%&quot; height=&quot;100%&quot; /&gt;
  &lt;rect fill=&quot;silver&quot;  x=&quot;0&quot; y=&quot;0&quot; width=&quot;100%&quot; height=&quot;100%&quot; rx=&quot;1em&quot;/&gt;
</code></pre>

<p>Browsers that don&#39;t understand SVG as background images will ignore the file and apply the <code>border-radius</code> if they support it.  Browsers that don&#39;t support either will fall back to square corners (do nothing.)  In Opera Kestrel, it will display the SVG image as a background, covering the silver background colour.  The first rectangle in the SVG covers the content <code>div</code> with the same colour as the web page background (in this case white) to stop the rounded corners being spoiled by same-colour corners showing through.  The second rectangle is set to the same colour as the background of the content <code>div</code>, and has <code>1em</code> radius rounded corners applied to it using <code>rx</code>.</p> 

<p>While SVG can be used to simulate <code>border-radius</code>, it is not limited to round corners, so it is also quite possible to simulate <code>border-image</code> in the same way.  It is quite easy to imagine using it for cut off corners, page curls and the like.</p>  

<h3>Gradients</h3>

<p>If you want to add gradients to your design, the most common method is to use a tiled image.  With Kestrel this can be added with a very simple SVG file set as a background image.  As it is SVG, it scales much better than the bitmap alternative when zooming, and this is becoming a bigger issue as the web moves to situations where zooming is a common activity, such as on mobile phones and TV based browsers.  It also doesn’t require a image editor to adjust the gradient, and it can even be changed programatically through JavaScript if required.</p> 

<p>In the <a href="http://files.myopera.com/dstorey/experiments/iTunesTable.html" alt="Striped table example">previous striped table example</a>, a gradient was applied as a background image to the first row in the table.  For browsers that don&#39;t accept SVG as a background image they apply the supplied background colour, which is generally an acceptable fallback.</p>  

<p>The CSS was very similar to the example above:</p>

<pre><code>#playlist tr:first-of-type { background: rgb(187,187,187) url(&quot;../images/gradient.svg&quot;); }</code></pre>

<p>While the SVG is just a simple gradient element applied the fill of a rectangle:</p>

<pre><code>  &lt;defs&gt;
    &lt;linearGradient id=&quot;grad&quot; x1=&quot;0%&quot; y1=&quot;0%&quot; x2=&quot;0%&quot; y2=&quot;100%&quot;&gt;
      &lt;stop offset=&quot;30%&quot; style=&quot;stop-color: rgb(219,219,219);&quot;/&gt;
      &lt;stop offset=&quot;90%&quot; style=&quot;stop-color: rgb(187,187,187);&quot;/&gt;
    &lt;/linearGradient&gt;
  &lt;/defs&gt;
  &lt;rect fill=&quot;url(#grad)&quot;  x=&quot;0&quot; y=&quot;0&quot; width=&quot;100%&quot; height=&quot;100%&quot; /&gt;
</code></pre>

<h2>Introducing the new JavaScript engine</h2>

<p>We heard there was a challenger to our speed crown.  Not one to shy away from a challenge, we are debuting a new improved, more efficient and quicker JavaScript engine in Kestrel.  it is not only faster (and getting faster with every build,) but also has a huge number of bug fixes and feature enhancements.</p>  

<p>One of the focuses was fixing bugs in relation to rich text editing.  Examples include adding support for <code>Node.compareDocumentPosition</code> from DOM3, and <code>Range.comparePoint</code> from the Gecko DOM.  These are both used by Google Pages.  JavaScript 1.5 getters and setters have also been added, improving the compatibility with a number of big sites including Yahoo! Mail and a number of Microsoft Live properties.</p>  

<p>A popular and useful feature will be the addition of native support for <code>getElementByClassName</code> from HTML5.  This will save you from having to roll your own or using a JavaScript library for this commonly required functionality.</p>  

<p>More changes can be found in the change logs (<a href="http://snapshot.opera.com" alt="The Opera desktop browser change logs">again, find links to them here</a>,) and the new JavaScript engine will be the focus of an upcoming article on <a href="http://dev.opera.com" alt="The dev.opera.com home page">dev.opera.com</a>.</p> 

<h2>Summary</h2>

<p>In this article I have provided a useful look ahead towards new web development techniques available due to the new standards support in next-generation browsers such as Opera Kestrel. These changes will only improve our work by making new techniques available but by also making existing techniques easier and simpler to achieve. Keep giving Opera and the rest of the browser manufacturers feedback about this kind of thing and it will become more standard across browsers, driving quicker adoption.</p>
