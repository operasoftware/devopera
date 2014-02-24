---
title: SVG or Canvas? СHoosing Between the Two
authors:
- mihai-sucan
intro: 'In this article Mihai Sucan explores the differences between SVG and Canvas and presents a few examples to help you decide which one is best for the functionality you are trying to implement.'
layout: article
---
<p class="note"><strong>Article update, 16th June 2010</strong>: Notes added to say that Microsoft have announced support for SVG and Canvas in IE9.</p>

<h2>Contents:</h2>

<ul>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#svg">Scalable Vector Graphics</a></li>
<li><a href="#html5-canvas">HTML 5 Canvas</a></li>
<li><a href="#comparison-of-svg-and-canvas">Comparison of SVG and
      Canvas</a></li>
<li><a href="#which-one-to-pick">Which one to pick?</a></li>
<li><a href="#summary">Summary</a></li>
</ul>


<h2 id="introduction">Introduction</h2>

<p>New Web technologies are gaining support across browsers, with bridging solutions becoming available for those that don&apos;t, eg <a href="http://raphaeljs.com/">Raphaёl</a> for SVG, and <a href="http://code.google.com/p/explorercanvas/">ExCanvas</a> for Canvas. Even <a href="http://blogs.msdn.com/ie/archive/2010/02/01/w3c-svg-working-group-update-for-january-2010.aspx">Internet Explorer has started to flirt with SVG</a> (with support annouced for IE9), so we could see wider support in the future! This however causes a new problem to rear its ugly head &mdash; it has become harder to decide which technology is best for a new project.</p>

<p><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html">HTML5 Canvas</a> and <a href="http://www.w3.org/TR/SVG/">SVG</a> are both Web technologies that allow you to create rich graphics inside the browser, but they are fundamentally different. In this article we explore those differences, giving you the knowledge needed to use SVG and Canvas effectively and appropriately.</p>

<p class="note">If you wish to experiment more with the code presented here, you can <a href="svg-or-canvas-article.zip">download the SVG and Canvas examples</a> provided in this article.</p>

<h2 id="svg">Scalable Vector Graphics</h2>

<p><a href="http://www.w3.org/TR/SVG/">SVG</a> is an XML-based vector graphics format. SVG content can be
    static, dynamic, interactive and animated &mdash; it is very flexible. You can
    also style SVG with CSS and add
    dynamic behaviour to it using the SVG DOM. And of course, because the text inside SVG exists in
    a file, it is relatively accessible too. You can also include SVG content
    inside standard (X)HTML using <code>object</code>.</p>

<p>Here is an <a href="circle.svg">example of a circle drawn with SVG</a> &mdash; it includes a radial gradient and a simple zoom in/out animation:</p>

<p><a href="circle.svg"><img src="svg-circle-with-gradient.jpg" alt="Circle with a gradient" style="float:right;margin-left:8px" /></a></p>

<pre style="max-height:326px"><code>&lt;svg version="1.1"
  width="320" height="320"
  xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;defs&gt;
    &lt;radialGradient id="circleGrad"&gt;
      &lt;stop offset="0%"   stop-color="rgb(255, 255, 0)" /&gt;
      &lt;stop offset="100%" stop-color="rgb(  0, 255, 0)" /&gt;
    &lt;/radialGradient&gt;
  &lt;/defs&gt;

  &lt;ellipse fill="url(#circleGrad)" stroke="#000" cx="50%"
  cy="50%" rx="50%" ry="50%"&gt;
    &lt;animate attributeName="rx" values="0%;50%;0%" dur="2s"
      repeatCount="indefinite" /&gt;
    &lt;animate attributeName="ry" values="0%;50%;0%" dur="2s"
      repeatCount="indefinite" /&gt;
  &lt;/ellipse&gt;
&lt;/svg&gt;</code></pre>

<p class="note">Note that the animation only plays in Opera and Webkit-based
    Web browsers.</p>

<p>With SVG you can do a lot more than simple vector graphics and
    animations. You can develop highly interactive Web applications with
    scripting, advanced animation events, filters, and almost anything you want.
    To learn more about SVG, read the <a href="http://dev.opera.com/articles/view/svg-evolution-not-revolution/"><em>SVG: Evolution, Not Revolution</em> article series</a>.</p>

<h2 id="html5-canvas">HTML5 Canvas</h2>

<p>The <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html">HTML5 Canvas specification</a> is a versatile JavaScript API allowing us to code
    programmatic drawing operations. Canvas, by itself, allows you to define
    a <code>canvas</code> context object (manifesting as
    a <code>&lt;canvas&gt;</code> element on your HTML page), which can then be
    drawn inside. To do the actual drawing, you have different options:</p>

<ul>
<li>A <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#the-2d-context">2D drawing context</a>,</li>
<li>A <a href="https://www.khronos.org/webgl/">3D drawing context (WebGL)</a>.</li>
</ul>

<p>The former is more established and is available in all the modern Web
    browsers (again, with support annouced for IE9),
    while the latter is in the early process of being defined, having only
    a handful of experimental implementations.</p>

<p>We are just going to look at the 2D context of Canvas, as it is more
    widely supported. This context provides you with a simple yet powerful API
    for performing quick drawing operation, on a 2D bitmap surface. There is no
    file format, and you can only draw using script. You do not have any DOM
    nodes for the shapes you draw &mdash; it is all on the surface, as pixels. This
    means that you can concentrate on your drawing without performance penalties
    as the complexity of the image increases.</p>

<p>Here is the same <a href="circle-canvas.html">animated circle drawn with
      Canvas</a>:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Canvas animation example&lt;/title&gt;
    &lt;script type="text/javascript"&gt;&lt;!--
window.addEventListener('load', function () {
  // Get the canvas element.
  var canvas = document.getElementById('myCanvas'),
      w = 4,
      h = 4,
      zoompx = 6,
      step = 'zoomin';

  if (!canvas || !canvas.getContext) {
    return;
  }

  // Get the canvas 2d context.
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    return;
  }

  var K = 4*((Math.SQRT2-1)/3);

setInterval(function () {
  if (step == 'zoomin') {
    w += zoompx;
    h += zoompx;
  } else if (step == 'zoomout') {
    w -= zoompx;
    h -= zoompx;
  }

  if (w &gt; canvas.width) {
    w = canvas.width;
    step = 'zoomout';
  } else if (w &lt; 4) {
    w = 4;
    step = 'zoomin';
  }

  if (h &gt; canvas.height) {
    h = canvas.height;
    step = 'zoomout';
  } else if (h &lt; 4) {
    h = 4;
    step = 'zoomin';
  }

  // Create the radial gradient: x0, y0, r0, x1, y1, r1.
  // That's the start circle (x0,y0) coordinates and r0 radius,
  // followed by the end circle (x1,y1) coordinates and r1 radius.
  var gradient = ctx.createRadialGradient(
      Math.round(w/2), Math.round(h/2), 0, Math.round(w/2), Math.round(h/2),
      Math.round(Math.min(w, h)/2));

  gradient.addColorStop(0, "#ff0");
  gradient.addColorStop(1, "#0f0");

  // Use the gradient for the fillStyle.
  ctx.fillStyle = gradient;

  // Ellipse radius and center.
  var cx = w/2,
      cy = h/2,

      // Ellipse radius*Kappa, for the Bézier curve control points
      rx = cx*K,
      ry = cy*K;

  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.setTransform(1, 0, 0, 1, Math.round((canvas.width - w) / 2),
    Math.round((canvas.height - h) / 2));

  ctx.beginPath();

  // startX, startY
  ctx.moveTo(cx, 0);

  // Control points: cp1x, cp1y, cp2x, cp2y, destx, desty
  // go clockwise: top-middle, right-middle, bottom-middle, then left-middle
  ctx.bezierCurveTo(cx + rx, 0, w, cy - ry, w, cy);
  ctx.bezierCurveTo(w, cy + ry, cx + rx, h, cx, h);
  ctx.bezierCurveTo(cx - rx, h, 0, cy + ry, 0, cy);
  ctx.bezierCurveTo(0, cy - ry, cx - rx, 0, cx, 0);

  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}, 20);
}, false);
    // --&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;&lt;canvas id="myCanvas" width="320" height="320"&gt;Your browser does not have
    support for Canvas.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>The 2D context has no animation-related features &mdash; you just perform the
    drawing operations how and when you want. In this case, the circle is
    rendered inside a function invoked every few milliseconds.</p>

<p>Inside the Canvas surface you can perform pixel-manipulation operations
    like image filters. You can insert images like <code>.png</code>s or
    <code>.jpg</code>s, or anything else the Web browser can load. The Canvas
    output can also be exported/saved in common image formats.</p>

<p class="note">To learn more about Canvas basics, read our <a href="http://dev.opera.com/articles/view/html-5-canvas-the-basics/">HTML5 Canvas tutorial</a>.</p>

<p>The Canvas example provided here is not a good use-case for Canvas
    because you can achieve the same effect with a lot less code in SVG, as
    shown in the previous section. The SVG version is also a lot easier to
    understand and manage. For Canvas-based animations we need to use timers, to
    manually draw each frame, while SVG makes things a lot easier with its
    support for declarative animations.</p>

<p>A better use-case for Canvas is the display of dynamic information, such
    as interactive graphs and image analysis. For example, here is a demo that
    calculates and displays an image histogram using the Canvas 2D context
    API (click the below image):</p>

<p><a href="histogram.html"><img src="canvas-image-histogram.jpg" alt="Canvas-based image histogram" /></a></p>

<p>The image histogram example code loads an image with the
    <code>img</code> element, then counts all the pixels in the image with the Canvas 2D context API. The pixels are counted for each channel
    in the user-selected color space (<abbr title="Red, Green, Blue">RGB</abbr>,
    <abbr title="Hue, Saturation, Value">HSV</abbr> or <abbr title="Cyan, Magenta, Yellow, Kelvin (Black)">CMYK</abbr>). Once the image has been analyzed,
    a second Canvas element is used to draw the image histogram based on the
    data gathered.</p>

<p class="note"><strong>Where does the Canvas 3D context fit in?</strong>
    With the 3D context you can draw 3D objects, textures and shaders, and
    incorporate animation.  You can make 3D games (think Quake) and 3D modeling
    tools (think about product visualization &mdash; a car, furniture, etc.)  The Web
    browser draws the scene using hardware acceleration, if it is available.</p>

<h2 id="comparison-of-svg-and-canvas">Comparison of SVG and Canvas</h2>

<p>The tables below give you an overview of the advantages and disadvantages
    of SVG and Canvas.</p>

    <h3>Advantages</h3>

    <table summary="This table lists the advantages of SVG and HTML5 Canvas.">
        <tr>
         <th width="50%">Canvas</th>
         <th>SVG</th>
      </tr>
       <tr>
        <td>
          <!-- The advantages of Canvas -->
<ul>
<li>High performance 2D surface for drawing anything you want.</li>

<li>Constant performance &mdash; everything is a pixel. Performance only
            degrades when the image resolution increases.</li>

<li>You can save the resulting image as a <code>.png</code> or <code>.jpg</code>.</li>

<li>Best suited for generating raster graphics (for example in
            games, fractals, etc.), editing of images, and operations requiring
            pixel-level manipulation.</li>
</ul>
        </td>
        <td>
          <!-- The advantages of SVG -->
<ul>
<li>Resolution independence &mdash; this makes SVG better suited for
            cross-platform user interfaces because it allows scaling for any
            screen resolution.</li>

<li>SVG has very good support for animations. Elements can be animated using a declarative syntax, or via JavaScript.</li>

<li>You have full control over each element using the SVG DOM API in
            JavaScript.</li>

<li>SVG is an XML file format, which means that depending on each Web
            browser implementation the accessibility of SVG documents can be
            much better than that of <code>canvas</code> elements. This makes SVG a better solution for Web application user interfaces. Even if SVG provides
            mostly presentational markup, the semantics of the user interface
            can be improved with <a href="http://www.w3.org/WAI/intro/aria"><abbr title="Accessible Rich Internet Applications">ARIA</abbr></a> attributes.</li>
</ul>
        </td>
      </tr>
   </table>

   <h3>Disadvantages</h3>

   <table summary="This table lists the advantages of SVG and HTML5 Canvas">
      <tr>
         <th width="50%">Canvas</th>
         <th>SVG</th>
      </tr>
      <tr>
        <td>
          <!-- The disadvantages of Canvas -->
<ul>
<li>There are no DOM nodes for anything you draw. It is all pixels.</li>

<li>There&apos;s no API for animation. You have to resort to timers and other events to
            update the Canvas when needed.</li>

<li>Poor text rendering capabilities.</li>

<li>Might not be the best choice for cases where accessibility is
            crucial. Canvas gives you a surface to draw onto with the API of the
            context you choose. Inherently, this means it is all pixels &mdash; unless
            some future API will define additional capabilities for
            accessibility. For now, you can provide fallback content inside the
            <code>canvas</code> element that is displayed by the Web browser when the element itself cannot be rendered. Additionally, you can perform
            checks with JavaScript to see if the desired Canvas API is available
            for use. Based on that you can provide different functionality for
            users of Web browsers that lack <code>canvas</code> support.</li>

<li>Canvas is not suited for Web site or application user interfaces. This is
            because user interfaces typically need to be dynamic and
            interactive, and Canvas requires you to manually redraw each element
            in the interface. Other reasons would be the lack of animation and
            accessibility support.</li>
</ul>
        </td>
        <td>
          <!-- The disadvantages of SVG -->
<ul>
<li>Slow rendering when document complexity increases &mdash; anything
            that uses the DOM a lot will be slow.</li>

<li>SVG might not be suited by itself for applications like games.
            Perhaps the best choice would be a Canvas + SVG combination.</li>
</ul>
        </td>
      </tr>
    </table>

<p class="note">Note: If accessibility is a concern, HTML might be better
    suited than SVG, being that it has more tools available for enabling and testing accessibility.
    In any case you should make sure you add <a href="http://www.w3.org/WAI/intro/aria"><abbr title="Accessible Rich Internet Applications">ARIA</abbr></a> attributes to your HTML/SVG markup to greatly improve the accessibility of your Web application.</p>

<h2 id="which-one-to-pick">Which one to pick?</h2>

<p>Each technology has its own uses &mdash; it is not like one can abandon Canvas
    in favor of SVG, or vice-versa.</p>

<p>You should use Canvas for:</p>

<ul>
<li>Interactive image editing: cropping, resizing, filters (think red eye
      removal, sepia, colorize, etc.)</li>

<li>Generating raster graphics: data visualizations, data plots, rendering
      fractals, function plots.</li>

<li>Image analysis: read pixels to gather data for histograms, color
      usage, and anything else you can imagine.</li>

<li>Rendering game graphics, such as sprites and backgrounds.</li>
</ul>

<p>You should use SVG for:</p>

<ul>
<li>Resolution-independent Web application user interfaces.</li>
<li>Highly interactive animated user interfaces.</li>
<li>Data charts and plots.</li>
<li>Vector image editing.</li>
</ul>

<p>In short, you should use both technologies. In a game you might want to
    render raster graphics dynamically using Canvas, then animate them with SVG.
    In an image editor you might want to render both vector and raster
    graphics.</p>

<p class="note"><strong>When should you not use these technologies?</strong>
    There are pure HTML + CSS-based solutions for things like rounded corners, transitions, drop shadows and transparency.
    You should also consider a JavaScript library such as <a href="http://jqueryui.com">jQuery UI</a>. Ask yourself if you really need
    SVG or Canvas at all, or if you can make your project only with pure HTML
    + CSS. SVG is a mostly presentational markup, and SVG experts are a lot less
    common than HTML junkies. HTML is a lot more common, more cross-browser
    compatible, and it has richer non-presentational semantics. Choosing SVG
    over HTML + CSS purely for presentational merits may not be the best
    choice.</p>

<h2 id="summary">Summary</h2>

<p>In this article we have explored the differences between two seemingly similar
    Web technologies, SVG and HTML5 Canvas. Each technology has its strengths
    and weaknesses, therefore you should make sure they are used appropriately. Often, combining them inside a single Web application can yield good results.</p>

<p>Good luck developing the next killer Web application!</p>

<p class="note">There is another great article available that explores the differences between Canvas and SVG &mdash; check out <a href="http://nimbupani.com/a-bit-of-svg-and-canvas.html">A Bit of SVG and Canvas</a> by Divya Manian.</p>

<h2 is="readmore">Read more...</h2>
<ul>
<li><a href="/articles/view/html-5-canvas-the-basics/">HTML5 canvas - the basics</a></li>
<li><a href="/articles/view/how-to-do-photoshop-like-effects-in-svg/">How to do Photoshop-like effects in SVG</a></li>
</ul>
