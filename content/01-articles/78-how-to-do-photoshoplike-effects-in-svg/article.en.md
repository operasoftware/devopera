Title: How to do Photoshop-like effects in SVG
----
Date: 2008-02-29 09:31:46
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

<h2>Introduction</h2>
<p><object data="" type="image/svg+xml" style="width:100px;height:100px;float:left;margin-right:10px;margin-bottom:20px;padding-top:6px"><img src="http://forum-test.oslo.osa/kirby/content/articles/78-how-to-do-photoshoplike-effects-in-svg/filters0.jpg" alt="Filter image" /></object>I came across this nice <a href="http://psdtuts.com/interface-tutorials/how-to-create-a-stunning-vista-inspired-menu/">Photoshop tutorial</a> the other day. Looking at this, and the other tutorials available there made me want to try to recreate the same effects, not using Photoshop however, just SVG. Read on for my take on the above tutorial. To better follow the steps in my article I recommend reading these side by side.</p>

<p>Note that the <a href="http://my.opera.com/MacDev_ed/blog/2008/02/05/how-to-do-photoshop-like-effects-in-svg">original version of this article can be found on my blog</a>.</p>
    
    <h2>Step 1</h2>
    <p>Create a new SVG file, and create an svg canvas like so:</p>
    
    <pre>&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; 
     xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; 
     viewBox=&quot;0 0 600 335&quot;&gt;
&lt;/svg&gt;
</pre>

<p>By adding a <code>viewBox</code> with the dimensions 600 x 335 you can get the SVG to scale to whatever size you want later on.</p>

<h2>Step 2</h2>
<p>Next, create some rectangles and a couple of gradients by adding the following inside the <code>svg</code> element.</p>

<pre>&lt;linearGradient id=&quot;lowergrad&quot; x1=&quot;0&quot; y1=&quot;1&quot; x2=&quot;0&quot; y2=&quot;0&quot;&gt;
  &lt;stop stop-color=&quot;#000000&quot; offset=&quot;0&quot;/&gt;
  &lt;stop stop-color=&quot;#0c0c0c&quot; offset=&quot;1&quot;/&gt;
&lt;/linearGradient&gt;
 &lt;linearGradient id=&quot;uppergrad&quot; x1=&quot;0&quot; y1=&quot;1&quot; x2=&quot;0&quot; y2=&quot;0&quot;&gt;
  &lt;stop stop-color=&quot;#35393d&quot; offset=&quot;0&quot;/&gt;
  &lt;stop stop-color=&quot;#787b7d&quot; offset=&quot;1&quot;/&gt;
&lt;/linearGradient&gt;
&lt;g id=&quot;bar&quot; fill-opacity=&quot;0.9&quot; shape-rendering=&quot;optimizeSpeed&quot;&gt;
  &lt;rect id=&quot;upperbar&quot; y=&quot;285&quot; width=&quot;600&quot; height=&quot;25&quot; 
   fill=&quot;url(#uppergrad)&quot;/&gt;
  &lt;rect id=&quot;lowerbar&quot; y=&quot;310&quot; width=&quot;600&quot; height=&quot;25&quot; 
   fill=&quot;url(#lowergrad)&quot;/&gt;
&lt;/g&gt;</pre>

<p>The linear gradients gradiate between the first color and the second color at a 90 degree angle. 90 degree angles (sometimes called straight angles) are easily translated into a vector from point (x1,y1) to point (x2,y2), where the value &#39;1&#39; maps to 100% of the boundingbox of the shape that gets painted with the gradient, and the value &#39;0&#39; maps of course to 0% of the same. I&#39;ve added the gradient stops with the colors we want, and set the offsets. The offset is where the color will be mapped onto the gradient vector specified with x1, y1, x2 and y2.</p>

<p class="comment">In case you didn&#39;t follow the above, here is a little more explaination -  any angle can be written as the vector (x1,y1) to (x2,y2) (the angle is the angle of that vector). When you create a gradient the default is that the boundingbox of the shape that the gradient is applied to is used. In other words, the attributes x1,x2,y1,y2 are mapped onto the bounding box that gradient is used on as follows: (x,y)=(0,0) means the upper left corner, (x,y)=(1,1) means the bottom right corner. The gradient vector is the line between the start point (x1,y1) and the end point (x2,y2).</p>

<p>The <code>g</code> element groups the rects together and provides a <code>shape-rendering</code> property to disable anti-aliasing so that the edges stay crisp. I&#39;ve also added the 90% opacity to the <code>g</code> layer. Then for each of the rects I&#39;ve assigned a fill. Note that for better performance you should use <code>fill-opacity</code> instead of <code>opacity</code>.</p>

<h2>Step 3</h2>

<p>Next, create a few straight lines - add these inside the <code>g</code> element from the previous step, just below the closing &lt;g&gt; tag:</p>

<pre>&lt;line stroke-width=&quot;2&quot; stroke=&quot;#9fa2a4&quot; x1=&quot;0&quot; y1=&quot;287&quot; 
 x2=&quot;600&quot; y2=&quot;287&quot;/&gt;
&lt;line stroke-width=&quot;2&quot; stroke=&quot;#484b4d&quot; x1=&quot;0&quot; y1=&quot;285&quot; 
 x2=&quot;600&quot; y2=&quot;285&quot;/&gt;
</pre>

<p>One thing to note here is that <code>line</code> elements have no fill, only stroke. Everything else should be fairly easy to understand; you draw the line between (x1,y1) and (x2,y2).</p>

<h2>Step 4</h2>

<p>Now it&#39;s time to draw the divider line (the vertical line in between each button) - add this as follows:</p>

<pre>&lt;linearGradient id=&quot;upperdivider&quot; x1=&quot;0&quot; y1=&quot;1&quot; x2=&quot;0&quot; y2=&quot;0&quot;&gt;
  &lt;stop stop-color=&quot;#676a6d&quot; offset=&quot;0&quot;/&gt;
  &lt;stop stop-color=&quot;#afb1b2&quot; offset=&quot;1&quot;/&gt;
&lt;/linearGradient&gt;</pre>

<p>This first bit of code adds the gradient that goes on the bottom half of the divider. Next you need to add the following, which allows you to reuse the divider multiple times.</p>

<pre>&lt;g id=&quot;divider&quot;&gt;
  &lt;line y1=&quot;290&quot; y2=&quot;310&quot; stroke-width=&quot;2&quot; stroke=&quot;url(#upperdivider)&quot;/&gt;
  &lt;line y1=&quot;310&quot; y2=&quot;330&quot; stroke-width=&quot;2&quot; stroke=&quot;#43474b&quot;/&gt;
&lt;/g&gt;
...
&lt;use xlink:href=&quot;#divider&quot; x=&quot;100&quot;/&gt;
&lt;use xlink:href=&quot;#divider&quot; x=&quot;200&quot;/&gt;
&lt;use xlink:href=&quot;#divider&quot; x=&quot;300&quot;/&gt;
&lt;use xlink:href=&quot;#divider&quot; x=&quot;400&quot;/&gt;
&lt;use xlink:href=&quot;#divider&quot; x=&quot;500&quot;/&gt;</pre>

<p>The divider group once is defined once, then re-used multiple times with the <code>use</code> element. This is really convenient - if you change the look of the divider, all of the <code>use</code> instances will be updated too. It&#39;s possible to optimize here by creating filled rects instead of lines, and using only one gradient. In this particular example that&#39;s hardly the most time consuming part of the SVG anyway, so I&#39;ve opted to leave it as close to the original tutorial as possible.</p>

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
&lt;text class=&quot;links&quot; x=&quot;150&quot; y=&quot;316.5&quot;&gt;Blog&lt;/text&gt;
&lt;text class=&quot;links&quot; x=&quot;250&quot; y=&quot;316.5&quot;&gt;About&lt;/text&gt;
&lt;text class=&quot;links&quot; x=&quot;350&quot; y=&quot;316.5&quot;&gt;Tutorials&lt;/text&gt;
&lt;text class=&quot;links&quot; x=&quot;450&quot; y=&quot;316.5&quot;&gt;Contact&lt;/text&gt;</pre>

<p>Instead of rewriting stuff multiple times you&#39;ve assigned a <code>class</code> attribute and then used CSS to style all the text. We&#39;ve used Arial with a sans-serif fallback, and set the size and aligned the text using the <code>text-anchor</code> property. The text will be aligned around the &#39;x&#39; coordinate <del>we</del> specified. I&#39;ve added a <code>text-rendering</code> property to make the text look more readable on viewers that support it. Usually it means that the text renders a bit more crisp.</p>

<h2>Step 6</h2>

<p>To add the background image, simply drop in an <a href="http://www.w3.org/TR/SVG11/struct.html#ImageElement"><code>image</code> element</a>, as follows.</p>

<pre>&lt;image xlink:href=&quot;background.jpg&quot; width=&quot;100%&quot; height=&quot;100%&quot; 
  preserveAspectRatio=&quot;xMinYMid slice&quot;/&gt;</pre>
  
<p>The image should cover the entire canvas so we specify <code>width</code> and <code>height</code> as 100%. Note that you can also write <code>width=&quot;600&quot; height=335&quot;</code> since you have defined the coordinate system using the <code>viewBox</code> attribute on the root <code>svg</code> element (in step #1). Finally you add a <a href="http://www.w3.org/TR/SVG11/coords.html#ViewBoxAttribute"><code>preserveAspectRatio</code> attribute</a> so that if we decide to add a graphic that can&#39;t be scaled to fit exactly, it will still fill the canvas without being stretched. Now you can simply make the image point at an svg document instead whenever you want, meaning that you get a fully scalable result.</p>

<h2>Step 7</h2>

<p>To get the blurred rounded rect you have to use SVG <a href="http://www.w3.org/TR/SVG11/filters.html">filters</a> and <a href="http://www.w3.org/TR/SVG11/masking.html">clipping</a>. <strong>Start by defining the clip region</strong>, which is a rounded rect, inside a <code>defs</code> element, to be called upon as necessary:</p>

<pre><code>&lt;clipPath id=&quot;clip&quot;&gt;
  &lt;rect id=&quot;blurrect&quot; x=&quot;-10%&quot; y=&quot;25%&quot;
   width=&quot;55%&quot; height=&quot;60%&quot; rx=&quot;20&quot;/&gt;
&lt;/clipPath&gt;</code></pre>

<p>This is as simple as drawing any other SVG graphic; the only difference is that you have wrapped it inside a <code>clipPath</code> element. This defines a clipping region that we can use on other elements. Next, create the blur filter as follows, again adding it inside the <code>defs</code> element:</p>

<pre>&lt;filter id=&quot;blurpane&quot;&gt;
 &lt;feImage xlink:href=&quot;#blurrect&quot; result=&quot;clip&quot;/&gt;
 &lt;feGaussianBlur stdDeviation=&quot;2&quot; in=&quot;SourceGraphic&quot; 
 result=&quot;blur&quot;/&gt;
 &lt;feComposite operator=&quot;in&quot; in=&quot;blur&quot; in2=&quot;clip&quot;/&gt;
  &lt;feComposite mode=&quot;over&quot; in=&quot;blur&quot; in2=&quot;SourceGraphic&quot; 
   result=&quot;final&quot;/&gt;
&lt;/filter&gt;</pre>

<p>The filter is doing the following:</p>

<ol>
<li>It takes the rounded rect and defines it as the input to the filter, naming it <code>clip</code></li>
<li>Next it blurs the background image (using keyword <code>SourceGraphic</code>) and names it <code>blur</code></li>
<li>It then composites the two together, effectively clipping the result</li>
<li>Last, it composites the result of the previous step with the original background image</li>
</ol>

<p>Here&#39;s how to create the clip-path and filter - create this below the code in the previous step:</p>

<pre>&lt;g filter=&quot;url(#dropshadow)&quot;&gt;
  &lt;g clip-path=&quot;url(#clip)&quot;&gt;
    &lt;image image-rendering=&quot;optimizeSpeed&quot; xlink:href=&quot;background.jpg&quot; 
     width=&quot;100%&quot; height=&quot;100%&quot; preserveAspectRatio=&quot;xMidYMid slice&quot; 
     filter=&quot;url(#blurpane)&quot;/&gt;
  &lt;/g&gt;
&lt;/g&gt;</pre>

<p class="comment">The clip-path refers to the clipPath element created in a previous step. It is applied to a group so that the filter can first be applied to the image. If the clip-path is applied to the image then the filter result may get clipped - sometimes that&#39;s desirable, sometimes not. The entire group here should be added directly after the background image in the previous step. This is the &quot;blurred rounded rect&quot; effect and you want it drawn on top of the background image. Note that it looks like the background image is drawn twice, but this is actually intentional. By clipping the filter a bit we get better performance since that means we won&#39;t have to recalculate the filter as often when we do the hover effect (it means that we can draw the cheaper non-filtered image on those parts that are outside of the blurred rect). <code>image-rendering=&quot;optimizeSpeed&quot;</code> means you can draw the image quicker, and since we&#39;re filtering it won&#39;t show anyway. <code>preserveAspectRatio=&quot;xMidYMid slice&quot;</code> means you can use a background image that is not of the same aspect ratio as the svg area that you need; this means you can cover the entire area defined by the <code>width</code> and <code>height</code> attributes.</p>

<p>The image element uses the filter <code>(filter=&quot;url(#blurpane)&quot;)</code>, and the group clips the result to the shape defined by <code>(clip-path=&quot;url(#clip)&quot;)</code>; finally we add a drop shadow to that end result - <code>(filter=&quot;url(#dropshadow)&quot;)</code>.
</p>

<p>Now you have added a drop-shadow filter on the blurred region. The drop-shadow filter has its filter region limited so that we don&#39;t spend time filtering regions that aren&#39;t interesting; add this below the previous snippet:</p>

<pre>&lt;filter id=&quot;dropshadow&quot; x=&quot;0&quot; y=&quot;30%&quot; width=&quot;60%&quot; height=&quot;54%&quot;&gt;
  &lt;feGaussianBlur in=&quot;SourceAlpha&quot; stdDeviation=&quot;5&quot;/&gt;
  &lt;feComponentTransfer&gt;
    &lt;feFuncA type=&quot;linear&quot; slope=&quot;0.5&quot;/&gt;
  &lt;/feComponentTransfer&gt;
  &lt;feMerge&gt;
    &lt;feMergeNode/&gt;
    &lt;feMergeNode in=&quot;SourceGraphic&quot;/&gt;
  &lt;/feMerge&gt;
&lt;/filter&gt;</pre>

<p>The drop-shadow filter works like so:</p>

<ol>
<li>It takes the alpha channel of the graphic that the filter is applied to and blurs it</li>
<li>It then makes it more transparent using a component transfer on the alpha channel</li>
<li>Next it merges the blurred slightly more transparent shadow with the original graphic (SourceGraphic)</li>
</ol>

<p>A tip for visualising the filter region is to make a simple filter and use a <code>feFlood</code> element to fill the region. It should furthermore be noted that I make no claims that the provided filter-chains are optimal - in fact I&#39;m fairly sure they could be improved.</p>

<h2>Step 8</h2>

<p>Add some text for the blurred rect, plus a gradient fill and a drop-shadow like so (add this below the previous code snippet)</p>

<pre>&lt;text id=&quot;header&quot; font-family=&quot;Arial&quot; font-weight=&quot;900&quot; 
 font-size=&quot;40&quot; x=&quot;20&quot; y=&quot;55%&quot; fill=&quot;url(#textgrad)&quot; 
 filter=&quot;url(#smallblur)&quot;&gt;SVG Example&lt;/text&gt;
&lt;text id=&quot;subheader&quot; font-family=&quot;Arial&quot; font-size=&quot;20&quot; 
 font-style=&quot;italic&quot; x=&quot;20&quot; y=&quot;75%&quot; fill=&quot;url(#textgrad)&quot; 
 filter=&quot;url(#smallblur)&quot;&gt;Shiny new web standards for all!&lt;/text&gt;</pre>
 
 <p>The gradient used here is nothing special, but I&#39;ve included it here anyway along with a drop-shadow filter that we also apply on the text. Add the following snippet inside the <code>defs</code> element.</p>

 <pre>&lt;linearGradient id=&quot;textgrad&quot; x1=&quot;0&quot; y1=&quot;1&quot; x2=&quot;0&quot; y2=&quot;0&quot;&gt;
  &lt;stop stop-color=&quot;#afb1b2&quot; offset=&quot;0&quot;/&gt;
  &lt;stop stop-color=&quot;white&quot; offset=&quot;0.5&quot;/&gt;
&lt;/linearGradient&gt;
&lt;filter id=&quot;smallblur&quot; height=&quot;140%&quot;&gt;
  &lt;feGaussianBlur in=&quot;SourceAlpha&quot; stdDeviation=&quot;1.5&quot;/&gt;
  &lt;feOffset dx=&quot;2&quot; dy=&quot;2&quot;/&gt;
  &lt;feMerge&gt;
    &lt;feMergeNode/&gt;
    &lt;feMergeNode in=&quot;SourceGraphic&quot;/&gt;
  &lt;/feMerge&gt;
&lt;/filter&gt;</pre>

<h2>Step 9</h2>

<p>Now you will add the hover effect, a blurred ellipse with clipping. This reuses some of the code you already have. Add the following at the bottom of the file:</p>

<pre>&lt;ellipse id=&quot;hover&quot; cx=&quot;250&quot; cy=&quot;340&quot; 
 rx=&quot;100&quot; ry=&quot;30&quot; style=&quot;display:none&quot;/&gt;</pre>
 
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
  document.getElementById(&quot;hover&quot;).style.display=&quot;inline&quot;;
  document.getElementById(&quot;hover&quot;).cx.baseVal.value=val+50;
  document.getElementById(&quot;hoverrect&quot;).x.baseVal.value = val-1;
}
function hideHover()
{
  document.getElementById(&quot;hover&quot;).style.display=&quot;none&quot;;
}
&lt;/script&gt;</pre>

<p>These functions are called on <code>mouseover</code> on a few interesting areas. These areas can be defined separately from the actual graphic elements used (in this case the text labels). I&#39;ve defined a few rectangles for regions that looked <strong>suitable</strong> for the <code>mouseover</code> effects. The rects are invisible and <strong>exist just to listen</strong> to the events.</p>

<h2>Final result</h2>

<p><object data="" type="image/svg+xml" width="100%" height="335"><img src="http://forum-test.oslo.osa/kirby/content/articles/78-how-to-do-photoshoplike-effects-in-svg/vistamenu.jpg" alt="SVG menu fallback image" /></object></p>
<p>&#xA0;</p>
    
    <p>Note that if your browser doesn&#39;t support the SVG Basic 1.1 filters the example will display a static JPEG image instead. This uses a two-level fallback. First off it&#39;s using <code>&lt;object data=&quot;menu.svg&quot;&gt;&lt;img src=&quot;fallback.jpg&quot;&gt;&lt;/object&gt;</code>, then it&#39;s also adding a switch inside the SVG so that an SVG browser will show the same JPEG if the 1.1 basic filter feature is not supported. Here&#39;s what that looks like:</p>

<pre>&lt;switch&gt;
  &lt;g requiredFeatures=&quot;http://www.w3.org/TR/SVG11/feature#BasicFilter&quot;&gt;
    ... main content of the svg ...
  &lt;/g&gt;
  &lt;image xlink:href=&quot;fallback.jpg&quot; .../&gt;
&lt;/switch&gt;</pre>

<p>As of this moment, this only seems to be supported completely in Opera. Firefox 3 renders it strangely, and Safari and IE doesn&#39;t support it at all.</p>
    
    
    <p>You can click <a href="vistamen.svg">here</a> and select <code>Ctrl/Right-click &gt; Source</code> to see the source of the SVG.</p>
    
    <p class="note"><strong>Update, January 2010</strong>: There is also a <a href="vistamenu-ffversion.svg">Firefox-friendly version of the menu</a> available, which doesn&#39;t have the same dependencies as the original.</p>

    <h2>Conclusion</h2>
    
    <p>Using modern web standards it&#39;s easy to create nice effects that were previously only possible in photo editing applications, such as Photoshop. By using stylesheets we can change the look of the graphics without needing to go back to an image editing application to re-color and re-export them and then fix all links to point to the new images. Instead we might decide that blue was a sucky color, and just add a style rule for changing that to a fresh lime green. No other changes required! If you don&#39;t fancy learning SVG techniques like this, then fine - while you&#39;re still stuck doing all that Photoshopping I&#39;ll just grab a beer in the mean time while the browser does the job for me instead! Mmm...beer.</p>
    
    <p>Some other small points to consider are that it is also really easy to update changes in the text content, without having to mess with the graphics; also, being vector-based, it resizes very comfortably, without distortion.</p>
