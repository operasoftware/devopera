---
title: How to Do Photoshop-Like Effects in SVG
authors:
- erik-dahlstrom
intro: 'Wanna add some polish to your site, the standards way? In this article Erik shows how you can save time and money on creating graphics and effects programmatically using SVG instead of doing them all manually using Photoshop.'
license: cc-by-nc-sa-2.5
layout: article
---
<h2>Introduction</h2>
<p><object data="filters0.svg" type="image/svg+xml" style="width:100px;height:100px;float:left;margin-right:10px;margin-bottom:20px;padding-top:6px"><img src="filters0.jpg" alt="Filter image" /></object>I came across this nice <a href="http://psdtuts.com/interface-tutorials/how-to-create-a-stunning-vista-inspired-menu/">Photoshop tutorial</a> the other day. Looking at this, and the other tutorials available there made me want to try to recreate the same effects, not using Photoshop however, just SVG. Read on for my take on the above tutorial. To better follow the steps in my article I recommend reading these side by side.</p>

<p>Note that the <a href="http://my.opera.com/MacDev_ed/blog/2008/02/05/how-to-do-photoshop-like-effects-in-svg">original version of this article can be found on my blog</a>.</p>

    <h2>Step 1</h2>
    <p>Create a new SVG file, and create an svg canvas like so:</p>

    <pre>&lt;svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 600 335"&gt;
&lt;/svg&gt;
</pre>

<p>By adding a <code>viewBox</code> with the dimensions 600 x 335 you can get the SVG to scale to whatever size you want later on.</p>

<h2>Step 2</h2>
<p>Next, create some rectangles and a couple of gradients by adding the following inside the <code>svg</code> element.</p>

<pre>&lt;linearGradient id="lowergrad" x1="0" y1="1" x2="0" y2="0"&gt;
  &lt;stop stop-color="#000000" offset="0"/&gt;
  &lt;stop stop-color="#0c0c0c" offset="1"/&gt;
&lt;/linearGradient&gt;
 &lt;linearGradient id="uppergrad" x1="0" y1="1" x2="0" y2="0"&gt;
  &lt;stop stop-color="#35393d" offset="0"/&gt;
  &lt;stop stop-color="#787b7d" offset="1"/&gt;
&lt;/linearGradient&gt;
&lt;g id="bar" fill-opacity="0.9" shape-rendering="optimizeSpeed"&gt;
  &lt;rect id="upperbar" y="285" width="600" height="25"
   fill="url(#uppergrad)"/&gt;
  &lt;rect id="lowerbar" y="310" width="600" height="25"
   fill="url(#lowergrad)"/&gt;
&lt;/g&gt;</pre>

<p>The linear gradients gradiate between the first color and the second color at a 90 degree angle. 90 degree angles (sometimes called straight angles) are easily translated into a vector from point (x1,y1) to point (x2,y2), where the value '1' maps to 100% of the boundingbox of the shape that gets painted with the gradient, and the value '0' maps of course to 0% of the same. I've added the gradient stops with the colors we want, and set the offsets. The offset is where the color will be mapped onto the gradient vector specified with x1, y1, x2 and y2.</p>

<p class="comment">In case you didn't follow the above, here is a little more explaination -  any angle can be written as the vector (x1,y1) to (x2,y2) (the angle is the angle of that vector). When you create a gradient the default is that the boundingbox of the shape that the gradient is applied to is used. In other words, the attributes x1,x2,y1,y2 are mapped onto the bounding box that gradient is used on as follows: (x,y)=(0,0) means the upper left corner, (x,y)=(1,1) means the bottom right corner. The gradient vector is the line between the start point (x1,y1) and the end point (x2,y2).</p>

<p>The <code>g</code> element groups the rects together and provides a <code>shape-rendering</code> property to disable anti-aliasing so that the edges stay crisp. I've also added the 90% opacity to the <code>g</code> layer. Then for each of the rects I've assigned a fill. Note that for better performance you should use <code>fill-opacity</code> instead of <code>opacity</code>.</p>

<h2>Step 3</h2>

<p>Next, create a few straight lines - add these inside the <code>g</code> element from the previous step, just below the closing &lt;g&gt; tag:</p>

<pre>&lt;line stroke-width="2" stroke="#9fa2a4" x1="0" y1="287"
 x2="600" y2="287"/&gt;
&lt;line stroke-width="2" stroke="#484b4d" x1="0" y1="285"
 x2="600" y2="285"/&gt;
</pre>

<p>One thing to note here is that <code>line</code> elements have no fill, only stroke. Everything else should be fairly easy to understand; you draw the line between (x1,y1) and (x2,y2).</p>

<h2>Step 4</h2>

<p>Now it's time to draw the divider line (the vertical line in between each button) - add this as follows:</p>

<pre>&lt;linearGradient id="upperdivider" x1="0" y1="1" x2="0" y2="0"&gt;
  &lt;stop stop-color="#676a6d" offset="0"/&gt;
  &lt;stop stop-color="#afb1b2" offset="1"/&gt;
&lt;/linearGradient&gt;</pre>

<p>This first bit of code adds the gradient that goes on the bottom half of the divider. Next you need to add the following, which allows you to reuse the divider multiple times.</p>

<pre>&lt;g id="divider"&gt;
  &lt;line y1="290" y2="310" stroke-width="2" stroke="url(#upperdivider)"/&gt;
  &lt;line y1="310" y2="330" stroke-width="2" stroke="#43474b"/&gt;
&lt;/g&gt;
...
&lt;use xlink:href="#divider" x="100"/&gt;
&lt;use xlink:href="#divider" x="200"/&gt;
&lt;use xlink:href="#divider" x="300"/&gt;
&lt;use xlink:href="#divider" x="400"/&gt;
&lt;use xlink:href="#divider" x="500"/&gt;</pre>

<p>The divider group once is defined once, then re-used multiple times with the <code>use</code> element. This is really convenient - if you change the look of the divider, all of the <code>use</code> instances will be updated too. It's possible to optimize here by creating filled rects instead of lines, and using only one gradient. In this particular example that's hardly the most time consuming part of the SVG anyway, so I've opted to leave it as close to the original tutorial as possible.</p>

<h2>Step 5</h2>

<p>Next, you will add the text for the navigation buttons, styling it with common properties, and align it. Add the following CSS to your document:</p>

<pre>&lt;style&gt;
  .links { font-family: Arial, sans-serif;
           font-size: 16px;
           text-anchor: middle;
           fill: white;
           text-rendering: optimizeLegibility; }
&lt;/style&gt;
...
&lt;text class="links" x="150" y="316.5"&gt;Blog&lt;/text&gt;
&lt;text class="links" x="250" y="316.5"&gt;About&lt;/text&gt;
&lt;text class="links" x="350" y="316.5"&gt;Tutorials&lt;/text&gt;
&lt;text class="links" x="450" y="316.5"&gt;Contact&lt;/text&gt;</pre>

<p>Instead of rewriting stuff multiple times you've assigned a <code>class</code> attribute and then used CSS to style all the text. We've used Arial with a sans-serif fallback, and set the size and aligned the text using the <code>text-anchor</code> property. The text will be aligned around the 'x' coordinate <del>we</del> specified. I've added a <code>text-rendering</code> property to make the text look more readable on viewers that support it. Usually it means that the text renders a bit more crisp.</p>

<h2>Step 6</h2>

<p>To add the background image, simply drop in an <a href="http://www.w3.org/TR/SVG11/struct.html#ImageElement"><code>image</code> element</a>, as follows.</p>

<pre>&lt;image xlink:href="background.jpg" width="100%" height="100%"
  preserveAspectRatio="xMinYMid slice"/&gt;</pre>

<p>The image should cover the entire canvas so we specify <code>width</code> and <code>height</code> as 100%. Note that you can also write <code>width="600" height=335"</code> since you have defined the coordinate system using the <code>viewBox</code> attribute on the root <code>svg</code> element (in step #1). Finally you add a <a href="http://www.w3.org/TR/SVG11/coords.html#ViewBoxAttribute"><code>preserveAspectRatio</code> attribute</a> so that if we decide to add a graphic that can't be scaled to fit exactly, it will still fill the canvas without being stretched. Now you can simply make the image point at an svg document instead whenever you want, meaning that you get a fully scalable result.</p>

<h2>Step 7</h2>

<p>To get the blurred rounded rect you have to use SVG <a href="http://www.w3.org/TR/SVG11/filters.html">filters</a> and <a href="http://www.w3.org/TR/SVG11/masking.html">clipping</a>. <strong>Start by defining the clip region</strong>, which is a rounded rect, inside a <code>defs</code> element, to be called upon as necessary:</p>

<pre><code>&lt;clipPath id="clip"&gt;
  &lt;rect id="blurrect" x="-10%" y="25%"
   width="55%" height="60%" rx="20"/&gt;
&lt;/clipPath&gt;</code></pre>

<p>This is as simple as drawing any other SVG graphic; the only difference is that you have wrapped it inside a <code>clipPath</code> element. This defines a clipping region that we can use on other elements. Next, create the blur filter as follows, again adding it inside the <code>defs</code> element:</p>

<pre>&lt;filter id="blurpane"&gt;
 &lt;feImage xlink:href="#blurrect" result="clip"/&gt;
 &lt;feGaussianBlur stdDeviation="2" in="SourceGraphic"
 result="blur"/&gt;
 &lt;feComposite operator="in" in="blur" in2="clip"/&gt;
  &lt;feComposite mode="over" in="blur" in2="SourceGraphic"
   result="final"/&gt;
&lt;/filter&gt;</pre>

<p>The filter is doing the following:</p>

<ol>
<li>It takes the rounded rect and defines it as the input to the filter, naming it <code>clip</code></li>
<li>Next it blurs the background image (using keyword <code>SourceGraphic</code>) and names it <code>blur</code></li>
<li>It then composites the two together, effectively clipping the result</li>
<li>Last, it composites the result of the previous step with the original background image</li>
</ol>

<p>Here's how to create the clip-path and filter - create this below the code in the previous step:</p>

<pre>&lt;g filter="url(#dropshadow)"&gt;
  &lt;g clip-path="url(#clip)"&gt;
    &lt;image image-rendering="optimizeSpeed" xlink:href="background.jpg"
     width="100%" height="100%" preserveAspectRatio="xMidYMid slice"
     filter="url(#blurpane)"/&gt;
  &lt;/g&gt;
&lt;/g&gt;</pre>

<p class="comment">The clip-path refers to the clipPath element created in a previous step. It is applied to a group so that the filter can first be applied to the image. If the clip-path is applied to the image then the filter result may get clipped - sometimes that's desirable, sometimes not. The entire group here should be added directly after the background image in the previous step. This is the "blurred rounded rect" effect and you want it drawn on top of the background image. Note that it looks like the background image is drawn twice, but this is actually intentional. By clipping the filter a bit we get better performance since that means we won't have to recalculate the filter as often when we do the hover effect (it means that we can draw the cheaper non-filtered image on those parts that are outside of the blurred rect). <code>image-rendering="optimizeSpeed"</code> means you can draw the image quicker, and since we're filtering it won't show anyway. <code>preserveAspectRatio="xMidYMid slice"</code> means you can use a background image that is not of the same aspect ratio as the svg area that you need; this means you can cover the entire area defined by the <code>width</code> and <code>height</code> attributes.</p>

<p>The image element uses the filter <code>(filter="url(#blurpane)")</code>, and the group clips the result to the shape defined by <code>(clip-path="url(#clip)")</code>; finally we add a drop shadow to that end result - <code>(filter="url(#dropshadow)")</code>.
</p>

<p>Now you have added a drop-shadow filter on the blurred region. The drop-shadow filter has its filter region limited so that we don't spend time filtering regions that aren't interesting; add this below the previous snippet:</p>

<pre>&lt;filter id="dropshadow" x="0" y="30%" width="60%" height="54%"&gt;
  &lt;feGaussianBlur in="SourceAlpha" stdDeviation="5"/&gt;
  &lt;feComponentTransfer&gt;
    &lt;feFuncA type="linear" slope="0.5"/&gt;
  &lt;/feComponentTransfer&gt;
  &lt;feMerge&gt;
    &lt;feMergeNode/&gt;
    &lt;feMergeNode in="SourceGraphic"/&gt;
  &lt;/feMerge&gt;
&lt;/filter&gt;</pre>

<p>The drop-shadow filter works like so:</p>

<ol>
<li>It takes the alpha channel of the graphic that the filter is applied to and blurs it</li>
<li>It then makes it more transparent using a component transfer on the alpha channel</li>
<li>Next it merges the blurred slightly more transparent shadow with the original graphic (SourceGraphic)</li>
</ol>

<p>A tip for visualising the filter region is to make a simple filter and use a <code>feFlood</code> element to fill the region. It should furthermore be noted that I make no claims that the provided filter-chains are optimal - in fact I'm fairly sure they could be improved.</p>

<h2>Step 8</h2>

<p>Add some text for the blurred rect, plus a gradient fill and a drop-shadow like so (add this below the previous code snippet)</p>

<pre>&lt;text id="header" font-family="Arial" font-weight="900"
 font-size="40" x="20" y="55%" fill="url(#textgrad)"
 filter="url(#smallblur)"&gt;SVG Example&lt;/text&gt;
&lt;text id="subheader" font-family="Arial" font-size="20"
 font-style="italic" x="20" y="75%" fill="url(#textgrad)"
 filter="url(#smallblur)"&gt;Shiny new web standards for all!&lt;/text&gt;</pre>

<p>The gradient used here is nothing special, but I've included it here anyway along with a drop-shadow filter that we also apply on the text. Add the following snippet inside the <code>defs</code> element.</p>

<pre>&lt;linearGradient id="textgrad" x1="0" y1="1" x2="0" y2="0"&gt;
  &lt;stop stop-color="#afb1b2" offset="0"/&gt;
  &lt;stop stop-color="white" offset="0.5"/&gt;
&lt;/linearGradient&gt;
&lt;filter id="smallblur" height="140%"&gt;
  &lt;feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/&gt;
  &lt;feOffset dx="2" dy="2"/&gt;
  &lt;feMerge&gt;
    &lt;feMergeNode/&gt;
    &lt;feMergeNode in="SourceGraphic"/&gt;
  &lt;/feMerge&gt;
&lt;/filter&gt;</pre>

<h2>Step 9</h2>

<p>Now you will add the hover effect, a blurred ellipse with clipping. This reuses some of the code you already have. Add the following at the bottom of the file:</p>

<pre>&lt;ellipse id="hover" cx="250" cy="340"
rx="100" ry="30" style="display:none"/&gt;</pre>

<p>There is a bit of style on the element itself here, but most of it is going to be put into the <code>style</code> element - add the following in just before the closing <code>style</code> tag:</p>

<pre>#hover {
fill:#5c94c5;
filter:url(#bigblur);
clip-path:url(#cliphover); }</pre>

<p>The ellipse is clipped to the rect shape of the buttons.</p>

<h2>Step 10</h2>

<p>Since this is SVG you can play with the result easily, and add dynamic effects. Add a hover effect by adding the following <code>script</code> block inside the <code>defs</code> element:</p>

<pre>&lt;script&gt;
function setHover(val)
{
  document.getElementById("hover").style.display="inline";
  document.getElementById("hover").cx.baseVal.value=val+50;
  document.getElementById("hoverrect").x.baseVal.value = val-1;
}
function hideHover()
{
  document.getElementById("hover").style.display="none";
}
&lt;/script&gt;</pre>

<p>These functions are called on <code>mouseover</code> on a few interesting areas. These areas can be defined separately from the actual graphic elements used (in this case the text labels). I've defined a few rectangles for regions that looked <strong>suitable</strong> for the <code>mouseover</code> effects. The rects are invisible and <strong>exist just to listen</strong> to the events.</p>

<h2>Final result</h2>

<p><object data="vistamen.svg" type="image/svg+xml" width="100%" height="335"><img src="vistamenu.jpg" alt="SVG menu fallback image" /></object></p>
<p>&nbsp;</p>

<p>Note that if your browser doesn't support the SVG Basic 1.1 filters the example will display a static JPEG image instead. This uses a two-level fallback. First off it's using <code>&lt;object data="menu.svg"&gt;&lt;img src="fallback.jpg"&gt;&lt;/object&gt;</code>, then it's also adding a switch inside the SVG so that an SVG browser will show the same JPEG if the 1.1 basic filter feature is not supported. Here's what that looks like:</p>

<pre>&lt;switch&gt;
  &lt;g requiredFeatures="http://www.w3.org/TR/SVG11/feature#BasicFilter"&gt;
    ... main content of the svg ...
  &lt;/g&gt;
  &lt;image xlink:href="fallback.jpg" .../&gt;
&lt;/switch&gt;</pre>

<p>As of this moment, this only seems to be supported completely in Opera. Firefox 3 renders it strangely, and Safari and IE doesn't support it at all.</p>

<p>You can click <a href="vistamen.svg">here</a> and select <code>Ctrl/Right-click &gt; Source</code> to see the source of the SVG.</p>

<p class="note"><strong>Update, January 2010</strong>: There is also a <a href="vistamenu-ffversion.svg">Firefox-friendly version of the menu</a> available, which doesn't have the same dependencies as the original.</p>

<h2>Conclusion</h2>

<p>Using modern web standards it's easy to create nice effects that were previously only possible in photo editing applications, such as Photoshop. By using stylesheets we can change the look of the graphics without needing to go back to an image editing application to re-color and re-export them and then fix all links to point to the new images. Instead we might decide that blue was a sucky color, and just add a style rule for changing that to a fresh lime green. No other changes required! If you don't fancy learning SVG techniques like this, then fine - while you're still stuck doing all that Photoshopping I'll just grab a beer in the mean time while the browser does the job for me instead! Mmm...beer.</p>

<p>Some other small points to consider are that it is also really easy to update changes in the text content, without having to mess with the graphics; also, being vector-based, it resizes very comfortably, without distortion.</p>
