---
title: 'HTML5 canvas performance: Drawing circles'
authors:
- daniel-davis
tags:
- performance
- javascript
- html5
- canvas
- odin
layout: article
---
<img src="/blog/html5-canvas-performance-drawing-circles/canvas-christmas-tree.jpg" alt="HTML5 canvas baubles on a Christmas tree" style="float:right;margin:0 0 1em 1em;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);" />

<p>As it&#39;s nearly Christmas, I was playing with HTML5 canvas to draw baubles on a photo of a Christmas tree. Wondering what was the best way to do it, I came across this answer on Stack Overflow about <a href="http://stackoverflow.com/questions/9742830/html5-canvas-glass-circle#answer-9743575">drawing circles with just radial gradients</a>.</p>

<h2>Circles</h2>

<p>As you probably know, the standard way of drawing circles is to use <code>arc()</code>:</p>

<pre><code>// Drawing a circle the traditional way
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2, true);
ctx.fillStyle = &#39;rgba(195, 56, 56, 1)&#39;;
ctx.fill();
ctx.closePath();</code></pre>

<p>This way of drawing a circle is a bit cumbersome in my opinion, compared to SVG for example. I thought the idea of using just radial gradients was a clever alternative and wondered what the performance difference would be.</p>

<pre><code>// Drawing a circle with a radial gradient
var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
gradient.addColorStop(0.95, &#39;rgba(195, 56, 56, 1)&#39;);
gradient.addColorStop(1, &#39;rgba(195, 56, 56, 0)&#39;);
ctx.fillStyle = gradient;
ctx.fillRect(x - radius, y - radius, x + radius, y + radius);</code></pre>

<p>Sure enough, using radial gradients is slower than <code>arc()</code>. Several times slower! You can play with this <a href="http://people.opera.com/danield/html5/canvas-speed/">canvas test page</a> here to see the speed difference for yourself.</p>

<p>If I&#39;d thought about it properly, I should have realised this without needing to test it and saved myself some time, but then I tried playing with spheres (well, circles with shading) as well.</p>

<h2>Spheres</h2>

<p>There are two common ways to make spheres in canvas:</p>
<ol>
    <li>Radial gradients</li>
    <li>Existing images using <code>drawImage()</code></li>
</ol>

<pre><code>// Drawing a sphere with radial gradients
var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
gradient.addColorStop(0, &#39;rgba(255, 255, 255, 1)&#39;);
gradient.addColorStop(0.2, &#39;rgba(255, 85, 85, 1)&#39;);
gradient.addColorStop(0.95, &#39;rgba(128, 0, 0, 1)&#39;);
gradient.addColorStop(1, &#39;rgba(128, 0, 0, 0)&#39;);
ctx.fillStyle = gradient;
ctx.fillRect(x - radius, y - radius, x + radius, y + radius);</code></pre>

<pre><code>// Drawing a sphere with an existing image
var img = new Image();
img.src = &#39;images/baubles.png&#39;;
ctx.drawImage(img, x, y, width, height);</code></pre>

<p>As before, radial gradients are several times slower. Of course, the flip side is that radial gradients are generated dynamically and so can be changed on-the-fly with JavaScript, whereas images have to be pre-made in graphics software. These images can&#39;t be edited directly with JavaScript although you can easily change their size. You can also control the colour in a couple of ways:</p>
<ol>
    <li>Using an image sprite of a particular image with varying colours.</li>
    <li>Using a greyscale image and applying a semi-transparent overlay with <code>arc()</code>.</li>
</ol>

<p>Don&#39;t forget that using images means they have to be downloaded first so it&#39;s better to pre-load them if possible.</p>

<p>You can test the performance of these on the same <a href="http://people.opera.com/danield/html5/canvas-speed/">canvas test page</a>.</p>

<p>As you can see, the overlay approach is obviously slower but not as much as with gradients. It also gives you more freedom in controlling the colours, however the overall effect has lower contrast than the original image.</p>

<h2>Summary</h2>

<p>In general, the speed difference is not noticeable for simple applications or fast hardware, but could be an issue if you&#39;re using animation, making a high-performance game, or designing for a TV or set-top box. As always, every decision is a compromise so here&#39;s a summary of the various trade-offs and what I&#39;ve learned:</p>

<ul>
    <li>If you just want to draw a circle, use <code>arc()</code>.</li>
    <li>If you want to draw a sphere, use an image (and pre-load it).</li>
    <li>If you want to draw a variety of spheres, try using image sprites.</li>
    <li>If you want spheres with dynamically-changing colours, consider using an image with a semi-transparent overlay.</li>
    <li>Only use radial gradients if you really need to.</li>
</ul>

<p>One final thing I&#39;ve learned is that adding thousands of baubles does not enhance a Christmas tree&#39;s beauty!</p>

<h3 id="update">UPDATE:</h3>

<p><a href="https://twitter.com/askoth">Marcelo</a> came up with the cool idea of creating a single image on a hidden canvas using a radial gradient, and then repeatedly drawing that with <code>drawImage()</code>. This gets around the need to create images in advance and also means you can edit the colour on-the-fly. But here&#39;s the best part &#x2014; ignoring the initial gradient creation time, it&#39;s actually faster than using <code>drawImage()</code> on an existing image! The code looks something like this:</p>

<pre><code>// Create a second &quot;buffer&quot; canvas but don&#39;t append it to the document
var tmpCanvas = document.createElement(&#39;canvas&#39;);
var tmpCtx = tmpCanvas.getContext(&#39;2d&#39;);

// Add the necessary gradients here, as above

// Draw the image from the second &quot;buffer&quot; canvas
ctx.drawImage(tmpCanvas, x, y, width, height);</code></pre>

<p>So, if you&#39;re drawing lots of circles or spheres, this is my recommended method. Nice one Marcelo!</p>
