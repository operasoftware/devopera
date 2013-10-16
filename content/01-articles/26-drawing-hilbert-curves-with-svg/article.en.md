Title: Drawing Hilbert curves with SVG
----
Date: 2007-01-26 13:30:05
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

<p><a href="http://en.wikipedia.org/wiki/Space-filling_curve">Hilbert curves</a> are a type of space-filling curve that can be constructed with the SVG <a href="http://www.w3.org/TR/SVG11/shapes.html">polyline</a> element, using a basic design and then aggregating. </p>

<p>I started by polylining one basic design into four sections of a graph, making the necessary adjustments to connect them up. This then becomes my main building block.</p>

<object data="" width="500">(main building block)</object>

<p><a href="A-Graph.svg">View the main building block.</a></p>

<p>By taking the main building block and translating, rotating and scaling, the next-larger curve can be constructed. To flip a section, a negative scale value is used. The four sections are joined by three short line segments.</p>

<object data="" width="500">(next-larger curve)</object>

<p><a href="B-Graph.svg">View the next-larger curve.</a></p>

<p>Then, do it again to make it bigger. If you connect the two ends at the bottom, you will have a closed curved which could be copied as an image and color filled.</p>

<object data="" width="500">(next-larger curve)</object>

<p><a href="C-Graph.svg">View the next-larger curve.</a></p>


<h1>Working with Paths</h1>

<p>By changing the polyline to a SVG <a href="http://www.w3.org/TR/SVG11/paths.html">path</a> element and connecting up the four lines, you can make a super path. Then add some SVG <a href="http://www.w3.org/TR/SVG11/animate.html">animated motion</a>.</p>

<object data="" width="500">(Example 1)</object>

<p><a href="A-Path.svg">View the animated path.</a></p>

<p>Here is another example of an animated path where I am animating two circles (one twice as fast as the other), one png image and one text string which only makes one circuit and then freezes.</p>

<object data="" width="500">(Example 2)</object>

<p><a href="A-Path2.svg">View the animated path.</a></p>

<p>Here is an example of an animated text path.</p>

<object data="" width="500">(Example 3)</object>

<p><a href="Hilbert-text.svg">View the animated text path.</a></p>


