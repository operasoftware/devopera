Title: Playing SVG Darts: Target Practice
----
Date: 2006-10-17 10:12:57
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

<p><object data="" width="250" height="250" class="right">[SVG showing darts board]</object></p>

<p>This is the first part out of three showing how to create a game of darts using <abbr title="Scalable Vector Graphics">SVG</abbr>. In this part I will show how to draw a dart board, including using &#39;iron wire&#39; SVG Fonts for numbers. In the two following parts I will show how to make the game work, using some easy SVG scripting, and the advantages of using SVG filters for statistics, photorealism, and accessibility.</p>

<h2 class="clear">The colored sections</h2>

<p><object data="" width="200" height="100" class="right">[SVG showing the four component slices]</object>In SVG everything is rendered in order of the document, so when two things overlap the second will be on top. This is a principle heavily used in this example. Imagine looking through a circular hole in the ceiling straight down onto a sort of wedding-cake on a big black table. There are 6 cake layers from bottom to top: red/green, black/white, again red/green, and finally a black/white one topped off with green icing and a red cherry.</p>

<p>I&#39;ll <a href="http://www.w3.org/TR/SVG/struct.html#Head">define</a> one SLICE (technically a <a href="http://en.wikipedia.org/wiki/Circular_sector">circular sector</a>) and use that 20 times alternating in color for every size of SLICE: &quot;inner&quot;,&quot;triple&quot;,&quot;outer&quot; and &quot;double&quot; to make up the dartboard.</p>


<pre><code>&lt;defs&gt;
    &lt;path id=&quot;SLICE&quot; d=&quot;M 0 0 L 15.643 98.769 A 100 100 0 0 1 -15.643 98.769 Z&quot; stroke-width=&quot;0&quot; /&gt;
    &lt;use id=&quot;double&quot; xlink:href=&quot;#SLICE&quot; transform=&quot;scale(1.695)&quot; /&gt;
    &lt;use id=&quot;outer&quot; xlink:href=&quot;#SLICE&quot; transform=&quot;scale(1.605)&quot; /&gt;
    &lt;use id=&quot;triple&quot; xlink:href=&quot;#SLICE&quot; transform=&quot;scale(1.065)&quot; /&gt;
    &lt;use id=&quot;inner&quot; xlink:href=&quot;#SLICE&quot; transform=&quot;scale(0.975)&quot; /&gt;
&lt;/defs&gt;</code></pre>

<p><a href="slices.svg">View the source code</a></p>

<h2>The separating wires</h2>

<p>A dartboard is of course not complete without iron wires to be able to unambiguously determine the score, 20 lines and 6 circles. I don&#39;t define the wires as stroke of the SLICE, because for scoring i need to be able to distinguish them from the area they surround. Plus as stroke-width scales along with the area it would limit
re-<a href="http://www.w3.org/TR/SVG/struct.html#UseElement">use</a>.</p>

<h2>The numbers</h2>  
<p>Then I added the 20 silver-colored numbers around the target and the blue score (initially 0). I coded them as SVG Fonts so that no matter how funky or unreadable they are, you can still copy them to other applications just like plain text, and search engines like Google can read them too. With some highschool mathematics I modeled the digits as pieces of iron wire, just using straight lines, and circular arcs of 2 different radii. Here are the defined numbers in use:</p>

<pre><code>&lt;g id=&quot;numbers&quot;&gt;
  &lt;text font-family=&quot;dartdigits&quot; text-anchor=&quot;middle&quot; fill=&quot;Silver&quot; 
        font-size=&quot;100&quot; transform=&quot;rotate(-270) translate(0,-205)&quot; &gt;6&lt;/text&gt;
  &lt;text font-family=&quot;dartdigits&quot; text-anchor=&quot;middle&quot; fill=&quot;Silver&quot; 
        font-size=&quot;100&quot; transform=&quot;rotate(-288) translate(0,-205)&quot;&gt;13&lt;/text&gt;
  &lt;i&gt;[17 more numbers successively rotated 18° around the target]&lt;/i&gt;
  &lt;text font-family=&quot;dartdigits&quot; text-anchor=&quot;middle&quot; fill=&quot;Silver&quot; 
        font-size=&quot;100&quot; transform=&quot;rotate(-252) translate(0,-205) rotate(180)&quot;&gt;10&lt;/text&gt;
&lt;/g&gt;
&lt;text font-family=&quot;dartdigits&quot; id=&quot;scoreboard&quot; x=&quot;245&quot; y=&quot;-205&quot; font-size=&quot;325&quot; 
      stroke=&quot;blue&quot; text-anchor=&quot;end&quot; fill=&quot;blue&quot;&gt;0&lt;/text&gt;</code></pre>

<p><object data="" width="300" height="140" class="right">[SVG showing the numbers]</object>As you see in this illustration the upright numbers are aligned with the upside-down versions, which is not the case for many common fonts. This is needed for aligning the numbers 11 up to 6 and 8 up to 10 all on one circle through  rotation, and is accomplished by centering the glyphs on y=0. As I had the glyph definitions also centered on x=0, where SVG takes the left edge as 0, I had to change all (absolute) x-values. A little task that will be a lot simpler as soon as the horiz-origin-x attribute is implemented.</p>

<p>With some rotate and translate (which are applied in the order of reading from right to left) and text-anchor=&quot;middle&quot; I correctly position, orient, and center the numbers next to the corresponding slices.</p>

<h2>The scoreboard</h2>

<p>The scoreboard at the upper right corner is updated through the <code>onmouseover=&quot;showScore(..)</code> function. I declare that hitting a wire always results in a &quot;bounce-out,&quot; something that in reality only rarely happens. Another imperfection, this time not in my code but in Opera 9 is that the score is not always properly updated, probably through mouseover not always firing when it should.</p>

<h2>Implementation notes</h2> 


<ul>
<li>Because the Opera 9 implementation of glyphs (the definition of how the characters look) was limited, I had to convert mystroked path for the numbers to a non-stroked outline of the same shape. I used <a href="http://www.inkscape.org/">Inkscape</a>&#39;s &quot;stroke to path&quot; function for this purpose.</li>
<li>While developing this example i looked a lot at <a href="http://opera.com/docs/specs/opera9/svg/">what Opera 9 implements of SVG</a>, and used attributes instead of style declarations. </li>
<li>Possible improvements of this example are more realistic &#39;bouncing wires&#39;, smaller filesize, better code readability and anything you can come up with. </li>
<li>I love Inkscape, but i don&#39;t like that it changes SVG that I didn&#39;t call any actions on into code that is quite different of which the rendering is sometimes not the same, though very, very similar.</li>
</ul>
  
