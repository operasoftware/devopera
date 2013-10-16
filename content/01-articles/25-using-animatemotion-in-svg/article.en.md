Title: Using animateMotion in SVG
----
Date: 2007-01-19 16:30:24
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

<p>You can create your own universe with SVG. No, really. At least if you&#39;ll settle for a little sun, a little earth, and a little moon. We can even throw in a comet &#x2013; Comet SVG! First off, let&#39;s see what this SVG will do. Then, we&#39;ll make some changes to the source code and note the effects.</p>

<p><a href="SolarSystem.svg">View SVG.</a></p>

<p>Now right-click the SVG and view the source code. Each second represents a day in this solar system. To move the Moon, the Earth, and the comet, <code class="elem"><a href="http://www.w3.org/TR/SVG/animate.html#AnimateMotionElement">animateMotion</a></code> has been used three times in this SVG.</p>

<p>The Moon&#39;s motions follow the <code class="val">path2</code> ellipsis around the Earth <code class="val">path1</code> ellipsis around the Sun. You can modify the path through the <code class="att"><a href="http://www.w3.org/TR/SVG/paths.html#DAttribute">d</a></code> attribute. Just for fun, let&#39;s reverse the direction of the moon by changing the <a href="http://www.w3.org/TR/SVG/paths.html#PathData">path</a> code from</p>

<pre><code><span class="att">d</span>=&#39;<span class="val"><span class="m" title="moveto (x,y)">M390,80</span>&#xA0;<span title="relative horizontal lineto (x)">h 0</span>&#xA0;<span title="relative arc"><span class="m">a50,19</span> 0 1,<span class="m">0</span> 1,1</span> <span title="closepath">z</span></span>&#39;</code>
     ^location   ^orbit     ^direction</pre>
to <pre><code><span class="att">d=&#39;</span><span class="val"><span class="m" title="moveto (x,y)">M300,90</span>&#xA0;<span title="relative horizontal lineto (x)">h 0</span>&#xA0;<span title="relative arc"><span class="m">a50,15</span> 0 1,<span class="m">1</span> 1,1</span>&#xA0;<span title="closepath">z</span>&#39;</span></code></pre>

<p><a href="SolarSystem1.svg">View the new SVG.</a></p>

<p>But the universe doesn&#39;t look right without stars, so let&#39;s add some. Replace the black rectangle background with a PNG image.</p>

<pre><code>&lt;<span class="elem">image</span> <span class="att">xlink:href</span>=&#39;<span class="val uri">Stars.png</span>&#39; <span class="att">x</span>=&#39;<span class="val">0</span>&#39; <span class="att">y</span>=&#39;<span class="val">0</span>&#39; <span class="att">width</span>=&#39;<span class="val">1000</span>&#39; <span class="att">height</span>=&#39;<span class="val">800</span>&#39; /&gt;</code></pre>

<p><a href="SolarSystem2.svg">Now view the new SVG.</a></p>

<p>You have your universe. Now you can make it better.</p>
