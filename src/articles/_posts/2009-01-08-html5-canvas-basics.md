---
title: HTML5 Canvas — the Basics
authors:
- mihai-sucan
intro: 'HTML5 canvas is a powerful, flexible way to create two dimensional graphics on web pages using scripting, and a number of previous dev.opera.com articles have demonstrated usage of it already. This article goes back to basics, giving beginners a starting point to work from and explaining the basics. Get drawing!'
license: cc-by-nc-sa-2.5
---
<h2>Table of contents</h2>

<ul>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#thebasicsofusingcanvas">The basics of using canvas</a></li>
<li><a href="#the2dcontextapi">The 2D context API</a>
<ul>
<li><a href="#basiclinesandstrokes">Basic lines and strokes</a></li>
<li><a href="#paths">Paths</a></li>
<li><a href="#insertingimages">Inserting images</a></li>
<li><a href="#pixelbasedmanipulation">Pixel-based
		manipulation</a></li>
<li><a href="#text">Text</a></li>
<li><a href="#shadows">Shadows</a></li>
<li><a href="#gradients">Gradients</a></li>
</ul>
</li>
<li><a href="#summary">Summary</a></li>
</ul>

<h2 id="introduction">Introduction</h2>

<p>The <a
href="https://html.spec.whatwg.org/multipage/">HTML5 specification</a>
includes lots of new features, one of which is <a
href="https://html.spec.whatwg.org/multipage/the-canvas-element.html">the
<code>canvas</code> element</a>. HTML5 <code>canvas</code> gives you an
easy and powerful way to draw graphics using JavaScript. For each
<code>canvas</code> element you can use a "context" (think about a page in
a drawing pad), into which you can issue JavaScript commands to draw
anything you want. Browsers can implement multiple canvas contexts and the different <abbr title="Application Programmable
Interfaces">APIs</abbr> provide the drawing functionality.</p>

<p>Most of the major browsers include the 2D canvas context capabilities
- <a href="http://opera.com/">Opera</a>, <a
href="http://mozilla.com/">Firefox</a>, <a
href="http://konqueror.org/">Konqueror</a> and <a
href="http://apple.com/safari">Safari</a>. In addition, there are
experimental builds of Opera that include support for a 3D canvas context,
and an add-on that allows 3D canvas support in Firefox:</p>

<ul>
<li><a href="/articles/video-3d-canvas-and-file-io-repeat/">Download an Opera
build featuring 3D canvas, HTML video and File I/O support.</a></li>
<li><a
href="http://my.opera.com/timjoh/blog/2007/11/13/taking-the-canvas-to-another-dimension">Find
more out about using the Opera 3D canvas context.</a></li>
<li><a
href="http://blog.vlad1.com/2007/11/26/canvas-3d-gl-power-web-style/">Find
more out about obtaining and using the Firefox 3D canvas
context.</a></li>
</ul>

<p>This article takes you through the basics of implementing a 2D canvas
context, and using the basic canvas functions, including lines, shape
primitives, images, text, and more. You are assumed to have mastered
JavaScript basics already.</p>

<p class="note">Note that you can <a href="canvas-primer.zip">download all the code examples in a single zip file</a>, as well as viewing them live using the links below.</p>

<h2 id="thebasicsofusingcanvas">The basics of using canvas</h2>

<p>Creating a canvas context on your page is as simple as adding the
<code>&lt;canvas&gt;</code> element to your HTML document like so:</p>

<pre><code>&lt;canvas id="myCanvas" width="300" height="150"&gt;
Fallback content, in case the browser does not support Canvas.
&lt;/canvas&gt;</code></pre>

<p>You need to define an element ID so you can find the element later in
your JavaScript code, and you also need to define the width and height of
the canvas.</p>
<p>That's your drawing pad created, so now let's put pen to paper. To draw
inside your canvas you need to use JavaScript. First you find your canvas
element using <code>getElementById</code>, then you initialize the context
you want. Once you do that, you can start drawing into the canvas using the
available commands in the context API. The following script (<a
href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-using-canvas.html">try running the example live</a>) draws
a simple rectangle into the canvas we defined above:</p>

<pre><code>// Get a reference to the element.
var elem = document.getElementById('myCanvas');

// Always check for properties and methods, to make sure your code doesn't break
// in other browsers.
if (elem &amp;&amp; elem.getContext) {
	// Get the 2d context.
	// Remember: you can only initialize one context per element.
	var context = elem.getContext('2d');
	if (context) {
		// You are done! Now you can draw your first rectangle.
		// You only need to provide the (x,y) coordinates, followed by the width and
		// height dimensions.
		context.fillRect(0, 0, 150, 100);
	}
}</code></pre>

<p class="note">You can choose to include this script inside the
<code>head</code> of your document, or in an external file - it's up to
you.</p>

<h2 id="the2dcontextapi">The 2D context API</h2>

<p>Now we have created our first basic canvas image, let's look a bit more
deeply into the 2D canvas API, and see what is available for us to make use
of.</p>

<h3 id="basiclinesandstrokes">Basic lines and strokes</h3>

<p>You already saw in the example above that it's really easy to draw
rectangles colored the way you want.</p>
<p>With the <var>fillStyle</var> and <var>strokeStyle</var> properties you
can easily set the colors used for rendering filled shapes and strokes. The
color values you can use are the same as in <abbr title="Cascading Style
Sheet">CSS</abbr>: hex codes, <abbr title="red, green, blue">rgb</abbr>(),
<abbr title="red, green, blue, alpha">rgba</abbr>() and even <abbr
title="hue, saturation, light, alpha">hsla</abbr>() if the browser
supports it (for example this feature is supportd in Opera 10.00 and later).</p>
<p>With <code>fillRect</code> you can draw filled rectangles. With
<code>strokeRect</code> you can draw rectangles only using borders, without
filling. If you want to clear some part of the canvas, you can use
<code>clearRect</code>. These three methods all use the same arguments:
<var>x</var>, <var>y</var>, <var>width</var>, <var>height</var>. The first
two arguments tell the (x,y) coordinates, and the last two arguments tell
the width and height dimensions for the rectangle.</p>
<p>To change the thickness of the lines, you can use the
<var>lineWidth</var> property. Let's look at an <a
href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-rects.html">example that uses <code>fillRect</code>,
<code>strokeRect</code> <code>clearRect</code> and more</a>:</p>

<pre><code>context.fillStyle   = '#00f'; // blue
context.strokeStyle = '#f00'; // red
context.lineWidth   = 4;

// Draw some rectangles.
context.fillRect  (0,   0, 150, 50);
context.strokeRect(0,  60, 150, 50);
context.clearRect (30, 25,  90, 60);
context.strokeRect(30, 25,  90, 60);</code></pre>

<p>This example gives you an output like that seen in Figure 1.</p>

<p><a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-rects.html"><img src="html5-canvas_fillRect-strokeRect-clearRect.jpg"
alt="Example render of fillRect, strokeRect and clearRect."></a></p>
<p class="comment">Figure 1: Example rendering of fillRect, strokeRect and
clearRect.</p>

<h3 id="paths">Paths</h3>

<p>The canvas paths allow you to draw custom shapes. You draw the "outline"
first, then choose to draw the stroke and fill the shape at the end, if you
wish. Creating a custom shape is simple - to start drawing the path, use
<code>beginPath()</code>, then draw the path that makes up your shape using
lines, curves and other primitives. Once you are done, call
<code>fill</code> and <code>stroke</code> if you want to fill your shape or
to draw the stroke, then call <code>closePath()</code> to finish off your
shape.</p>

<p>An example is in order - the following code will <a
href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-triangle.html">draw a triangle</a>:</p>

<pre><code>// Set the style properties.
context.fillStyle   = '#00f';
context.strokeStyle = '#f00';
context.lineWidth   = 4;

context.beginPath();
// Start from the top-left point.
context.moveTo(10, 10); // give the (x,y) coordinates
context.lineTo(100, 10);
context.lineTo(10, 100);
context.lineTo(10, 10);

// Done! Now fill the shape, and draw the stroke.
// Note: your shape will not be visible until you call any of the two methods.
context.fill();
context.stroke();
context.closePath();</code></pre>

<p>This will give an output like that shown in Figure 2.</p>

<p><a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-triangle.html"><img src="html5-canvas_triangle.jpg"
alt="Triangle"></a></p>
<p class="comment">Figure 2: A basic triangle.</p>

<p>I have also prepared a more complex <a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-paths.html">paths
example featuring lines, curves and arcs</a> - check it out.</p>

<h3 id="insertingimages">Inserting images</h3>

<p>The <code>drawImage</code> method allows you to insert other images
(<code>img</code> and <code>canvas</code> elements) into your canvas
context. In Opera you can also draw SVG images inside your canvas. This is
quite a complex method, which takes three, five or nine arguments:</p>

<ul>
<li>Three arguments: The basic <code>drawImage</code> usage involves one
argument to point to the image to be included, and two to specify the
destination coordinates inside your canvas context.</li>
<li>Five arguments: The middle <code>drawImage</code> usage includes the
above three arguments, plus two to specify the width and height of the
inserted image (in cases where you want to resize it).</li>
<li>Nine arguments: The most advanced <code>drawImage</code> usage includes
the above five arguments, plus two values for coordinates inside the source
images, and two values for width and height inside the source image. These
values allow you to dynamically crop the source image before bringing it
into your canvas context.</li>
</ul>

<p>The following example code shows <a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-drawimage.html">all
three types of <code>drawImage</code> in action</a>:</p>

<pre><code>// Three arguments: the element, destination (x,y) coordinates.
context.drawImage(<var>img_elem</var>, <var>dx</var>, <var>dy</var>);

// Five arguments: the element, destination (x,y) coordinates, and destination
// width and height (if you want to resize the source image).
context.drawImage(<var>img_elem</var>, <var>dx</var>, <var>dy</var>, <var>dw</var>, <var>dh</var>);

// Nine arguments: the element, source (x,y) coordinates, source width and
// height (for cropping), destination (x,y) coordinates, and destination width
// and height (resize).
context.drawImage(<var>img_elem</var>, <var>sx</var>, <var>sy</var>, <var>sw</var>, <var>sh</var>, <var>dx</var>, <var>dy</var>, <var>dw</var>, <var>dh</var>);</code></pre>

<p>This should render as shown in Figure 3.</p>

<p><a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-drawimage.html"><img src="html5-canvas_drawImage.jpg"
alt="Example rendering of drawImage."></a></p>
<p class="comment">Figure 3: Example <code>drawImage</code> rendering.</p>

<h3 id="pixelbasedmanipulation">Pixel-based manipulation</h3>

<p>The 2D Context API provides you with three methods that help you draw
pixel-by-pixel: <code>createImageData</code>, <code>getImageData</code>, and
<code>putImageData</code>.</p>

<p>Raw pixels are held in objects of type <code>ImageData</code>. Each
object has three properties: <var>width</var>, <var>height</var> and
<var>data</var>.  The <var>data</var> property is of type <span
class="Type">CanvasPixelArray</span>, holding a number of elements equal
to <code><var>width</var>*<var>height</var>*4</code>; this means that for
every pixel you define the red, green, blue and alpha values of all the
pixels, in the order you want them to appear (all the values range from 0 to
255, including alpha!). Pixels are ordered left to right, row by row, from
top to bottom.</p>

<p>To better understand how all this works take a look at <a
href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-imagedata2.html">an example which draws a block of red
pixels</a>.</p>

<pre><code>// Create an ImageData object.
var imgd = context.createImageData(50,50);
var pix = imgd.data;

// Loop over each pixel and set a transparent red.
for (var i = 0; n = pix.length, i &lt; n; i += 4) {
	pix[i  ] = 255; // red channel
	pix[i+3] = 127; // alpha channel
}

// Draw the ImageData object at the given (x,y) coordinates.
context.putImageData(imgd, 0,0);</code></pre>

<p>Note: not all browsers implement <code>createImageData</code>. On such
browsers, you need to obtain your <code>ImageData</code> object using the
<code>getImageData</code> method. Please see the provided <a
	href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-imagedata2.html">example code</a>.</p>

<p>With the <code>ImageData</code> capabilities you can do a lot more than that. For
example, you can do image filtering, or you can do mathematical
visualisations (think fractals and more). The following code shows you how
to create a <a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-imagedata.html">simple color inversion
	filter</a>:</p>

<pre><code>// Get the <code>CanvasPixelArray</code> from the given coordinates and dimensions.
var imgd = context.getImageData(<var>x</var>, <var>y</var>, <var>width</var>, <var>height</var>);
var pix = imgd.data;

// Loop over each pixel and invert the color.
for (var i = 0, n = pix.length; i &lt; n; i += 4) {
	pix[i  ] = 255 - pix[i  ]; // red
	pix[i+1] = 255 - pix[i+1]; // green
	pix[i+2] = 255 - pix[i+2]; // blue
	// i+3 is alpha (the fourth element)
}

// Draw the <code>ImageData</code> at the given (x,y) coordinates.
context.putImageData(imgd, <var>x</var>, <var>y</var>);</code></pre>

<p>Figure 4 shows the color inversion filter applied to an Opera
graphic (compare to Figure 3, which shows the original color scheme of the Opera graphic).</p>

<p><a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-imagedata.html"><img src="html5-canvas_color-inversion-filter.jpg"
	alt="Example rendering of the invert color filter."></a></p>
<p class="comment">Figure 4: The color inversion filter in action.</p>

<h3 id="text">Text</h3>

<p>The Text API is only available in recent WebKit builds, and in Firefox
3.1 nightly builds, but I decided to include it here for completeness.</p>
<p>The following text properties are available on the <code>context</code>
object:</p>

<ul>
<li><code>font</code>: Specifies the font of the text, in the same manner
	as the <abbr title="Cascading Style Sheet">CSS</abbr>
	<code>font-family</code> property)</li>
<li><code>textAlign</code>: Specifies the horizontal alignment of the
	text. Values: <code>start</code>, <code>end</code>, <code>left</code>,
	<code>right</code>, <code>center</code>. Default value:
	<code>start</code>.</li>
<li><code>textBaseline</code>: Specifies the vertical alignment of the
	text. Values: <code>top</code>, <code>hanging</code>, <code>middle</code>,
	<code>alphabetic</code>, <code>ideographic</code>, <code>bottom</code>.
	Default value: <code>alphabetic</code>.</li>
</ul>

<p>You have two methods for drawing text: <code>fillText</code> and
<code>strokeText</code>. The first one draws the text shape, filled using
the current <var>fillStyle</var>, while the latter draws the text
outline/border using the current <var>strokeStyle</var>. Both take three
arguments: the text you want to display, and the (x,y) coordinates to define
where to render it.  There's also an optional fourth argument
- maximum width. This causes the browser to shrink the text to fit inside
the given width, if that's needed.</p>
<p>The text alignment properties affect the text position relative to the
(x,y) coordinates you give to the drawing methods.</p>
<p>At this point, an example is in order - the following code is a <a
	href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-text.html">simple canvas text "hello world" example</a>.</p>

<pre><code>context.fillStyle    = '#00f';
context.font         = 'italic 30px sans-serif';
context.textBaseline = 'top';
context.fillText  ('Hello world!', 0, 0);
context.font         = 'bold 30px sans-serif';
context.strokeText('Hello world!', 0, 50);</code></pre>

<p>Figure 5 shows the output of this example.</p>

<p><a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-text.html"><img src="html5-canvas_text-rendering.jpg"
	alt="Example text render."></a></p>
<p class="comment">Figure 5: A simple canvas text rendering.</p>

<h3 id="shadows">Shadows</h3>

<p>The Shadow API gives you four properties:</p>

<ul>
<li><code>shadowColor</code>: Sets the shadow color you want. The value
	allowed is the same as the CSS color values.</li>
<li><code>shadowBlur</code>: Sets the amount of blur on the shadow, in
	pixels. The lower the blur value, the sharper the shadows are. It gives a very similar effect to gaussian blur in Photoshop.</li>
<li><code>shadowOffsetX</code> and <code>shadowOffsetY</code>: Specifies
	the x and y offset of the shadow, again in pixels.</li>
</ul>

<p>Usage is very straightforward, as shown by the following <a
	href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-shadows.html">canvas shadow code example</a>:</p>

<pre><code>context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur    = 4;
context.shadowColor   = 'rgba(255, 0, 0, 0.5)';
context.fillStyle     = '#00f';
context.fillRect(20, 20, 150, 100);</code></pre>

<p>This will render as shown in Figure 6.</p>

<p><a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-shadows.html"><img src="html5-canvas_shadow.jpg"
	alt="Example canvas shadow - a blue rectangle with a red shadow."></a></p>
<p class="comment">Figure 6: Example canvas shadow - a blue rectangle with
a red shadow.</p>

<h3 id="gradients">Gradients</h3>

<p>The <code>fillStyle</code> and <code>strokeStyle</code> properties can
also have <code>CanvasGradient</code> objects assigned to them, instead of
CSS color strings - these allow you to use color gradients to color your
lines and fills instead of solid colors.</p>
<p>To create <code>CanvasGradient</code> objects you can use two methods:
<code>createLinearGradient</code> and <code>createRadialGradient</code>. The
former creates a linear gradient - lines of color all going in one direction
- while the latter creates a radial gradient - circles of color emanating
out from a single point.</p>
<p>Once you have the gradient object you can add color stops along the
gradient using the <code>addColorStop</code> method of the object.</p>

<p>The following code shows you how to use gradients:</p>

<pre><code>// You need to provide the source and destination (x,y) coordinates
// for the gradient (from where it starts and where it ends).
var gradient1 = context.createLinearGradient(<var>sx</var>, <var>sy</var>, <var>dx</var>, <var>dy</var>);

// Now you can add colors in your gradient.
// The first argument tells the position for the color in your gradient. The
// accepted value range is from 0 (gradient start) to 1 (gradient end).
// The second argument tells the color you want, using the CSS color format.
gradient1.addColorStop(0,   '#f00'); // red
gradient1.addColorStop(0.5, '#ff0'); // yellow
gradient1.addColorStop(1,   '#00f'); // blue

// For the radial gradient you also need to provide source
// and destination circle radius.
// The (x,y) coordinates define the circle center points (start and
// destination).
var gradient2 = context.createRadialGradient(<var>sx</var>, <var>sy</var>, <var>sr</var>, <var>dx</var>, <var>dy</var>, <var>dr</var>);

// Adding colors to a radial gradient is the same as adding colors to linear
// gradients.</code></pre>

<p>I have also prepared a more advanced example, which makes use of a <a
href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-gradients.html">linear gradient, shadows and text</a>.  The
example produces an output as seen in Figure 7.</p>

<p><a href="http://www.robodesign.ro/coding/canvas-primer/20081208/example-gradients.html"><img src="html5-canvas_linear-gradient.jpg"
alt="Example rendering using a linear gradient."></a></p>
<p class="comment">Figure 7: Example rendering using a linear gradient.</p>


<h2>Online canvas demos</h2>

<p>If you want to see what others have done with Canvas, you can take a look
at the following projects and demos:</p>

<ul>
<li><a href="http://www.benjoffe.com/code/demos/interpolate/">Newton polynomial</a></li>
<li><a href="http://www.benjoffe.com/code/demos/canvascape/">Canvascape - "3D Walker"</a></li>
<li><a href="http://code.google.com/p/paintweb">Paint.Web - painting
	demo, open-source</a></li>
<li><a
	href="http://arapehlivanian.com/wp-content/uploads/2007/02/canvas.html">Star-field
	flight</a></li>
<li><a href="http://www.blobsallad.se/">Interactive blob</a></li>
</ul>

<h2 id="summary">Summary</h2>

<p>Canvas is one of the most interesting HTML5 features, and it's ready to
be used within most modern Web browsers. It provides all you need to create
games, user interface enhancements, and other things besides. The 2D context
API includes a wealth of functionality in addition to that discussed in this
article - I hope you've gained a good grounding in canvas, and a thirst to
know more!</p>

<h2 id="readmore">Read more...</h2>
<ul>
<li><a href="/articles/html5-canvas-painting/">Creating an HTML5 canvas painting application</a></li>
<li><a href="/articles/svg-or-canvas-choose/">SVG or Canvas? Сhoosing between the two</a></li>
</ul>
