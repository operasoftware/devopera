Title: SVG Evolution 2: Our First Steps Into SVG
----
Date: 2006-11-30 12:14:58
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<p class="note"><strong>Article update, 16th June 2010</strong>: Updates to support information for SVG text selection, and declarative animation. Opera and Safari now support both of these, although Firefox is still behind in this area.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/svg-evolution-not-revolution/" rel="prev" title="link to the previous article in the series">Previous article—SVG: Evolution, Not Revolution</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/svg-evolution-3-applying-polish/" rel="next" title="link to the next article in the series">Next article—SVG Evolution 3: Applying Polish</a></li>
</ul>

    <h2>In Case You Are Just Tuning In</h2>
    
    <p>This is the second in a short series of articles in which we explore how to integrate <a href="http://www.w3.org/TR/SVG/">Scalable Vector Graphics (SVG)</a> into web applications.  In our <a href="http://dev.opera.com/articles/view/22/">first article</a>, we gave an introduction to SVG language and some of its basic capabilities.  We introduced the concept that SVG images are XML documents with DOMs and that web developers have the ability to integrate SVG documents with other (X)HTML and SVG documents such that scripted communication between document DOMs can take place.</p>
    
    <p>To illustrate the concepts, we took a simple <a href="http://dev.opera.com/articles/view/22/ex1-gallery.xhtml">image gallery</a> and rewrote the application using SVG documents for the raster images.  The end result is an <a href="http://dev.opera.com/articles/view/22/ex2-gallery.xhtml">HTML+SVG image gallery</a> that provides equivalent functionality while presenting us with a lot of interesting possibilities for enhancements.  We will start to explore these possibilities in this and the next article.</p>

    <h2>Immediate Benefits</h2>

    <p>SVG, as a graphical format, has many benefits over its raster counterparts.  But it&#39;s interesting to observe that, even in our simple <a href="http://dev.opera.com/articles/view/22/ex2-gallery.xhtml">SVG Image Gallery</a> application we created to be at parity with the HTML version that user agents (browsers) can allow some immediate benefits by default.</p>
    
    <div style="margin: 10px; float:right;"><img style="width:350px;" title="Opera provides options to manipulate SVG images in its context menu" alt="Opera SVG context menu" src="http://forum-test.oslo.osa/kirby/content/articles/22-svg-evolution-2-our-first-steps-into-svg/opera-svg-context-menu.png" /><div>Figure 1 - Opera&#39;s SVG context menu</div></div>
        
    <p>Remember:  The &#39;S&#39; in SVG stands for &quot;scalable&quot;.  As a result, user agents can allow the user to zoom, pan and otherwise manipulate SVG images in ways that might not make sense for other graphic formats.  In Opera you can right-click on any SVG image to zoom in/out.  Try this in the SVG version of the photo gallery:  Click on a thumbnail, then once the image loads in the main panel, right-click the large image and choose Zoom In from the context menu.  Now hold down the mouse button on the image and move the mouse around - this allows you to pan around the image.  Because the format is SVG, the user gets Image Zoom and Pan for free.  The Adobe SVG Viewer also allows similar manipulations.  NOTE: At this time, Firefox does not support SVG zooming/panning out of the box, though there is an <a href="http://www.treebuilder.de/zoomAndPan/index.htm">extension</a> that allows this.</p>
    
    <p>It is also worth noting that, because SVG is plain text XML, the user can also look at the source of an SVG image using the context menu.  Looking at the &quot;source&quot; of an image is probably a new concept to most folks, but it can be extremely useful in certain situations (when learning about the SVG format, when trying to discover copyright/contact information, etc).  In Opera, this is achieved by choosing the &quot;Source&quot; option from the context menu.  In Firefox, this is achieved by choosing &quot;This&#xA0;Frame&#xA0;-&gt;&#xA0;View&#xA0;Frame&#xA0;Source&quot;.</p>
    
    <p>For most other intents and purposes, an SVG image in a web page functions very much like a raster image in a web page.  For instance, you can copy an SVG image via the context menu and paste it into a different application as a raster bitmap.</p> 

    <h2>The Painters Model and Transformations</h2>
    
    <p>Next, let&#39;s modify our simple example.  We&#39;re going to add a simple visible <a href="http://en.wikipedia.org/wiki/Digital_watermark">watermark</a> to the photos to illustrate how SVG content is rendered as well as the concept of transformations.  If you&#39;re lucky, you might also learn something about SVG text and opacity.</p>
    

    <h3>The Painters Model</h3>
    
    <p>SVG uses something called the <a href="http://www.w3.org/TR/SVG11/render.html#PaintersModel">Painters Model</a> to dictate how SVG content should be rendered.  What this means is that conceptually the SVG document is rendered in the order in which the SVG entities appear in the XML.  In other words, if I have a simple SVG document like:</p>

<pre class="clear"><code>&lt;svg&gt;
  &lt;circle fill=&quot;blue&quot; cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;40&quot;/&gt;
  &lt;rect fill=&quot;red&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;50&quot; height=&quot;50&quot;/&gt;
&lt;/svg&gt;</code></pre>

    <p>The blue circle will be rendered and then the red rectangle will be rendered &quot;on top&quot; of the circle, partially obscuring it (<a href="rect-on-circle.svg">like this</a>).  If we had flipped the order (put the &lt;rect&gt; element before the &lt;circle&gt; element), then the circle would partially obscure the rectangle (<a href="circle-on-rect.svg">like this</a>).</p>
    
    <p>We use our knowledge of the painter&#39;s model concept to draw a simple text caption on top of the main image like so:</p>

<pre class="clear"><code>&lt;g id=&quot;the_preview&quot;&gt;
  &lt;image id=&quot;thePreviewImage&quot; class=&quot;preview&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;640&quot; height=&quot;480&quot;/&gt;<b>
  &lt;text fill=&quot;white&quot; fill-opacity=&quot;0.4&quot; x=&quot;10&quot; y=&quot;20&quot; 
  font-size=&quot;20&quot; font-family=&quot;Times&quot;&gt;SVG Image Gallery&lt;/text&gt;</b>
&lt;/g&gt;</code></pre>

    <p>Because the &lt;text&gt; element appears after the &lt;image&gt; element in the SVG document, the text will be drawn <em>on top</em> of the raster image.</p>
    
    <p>Note that we are filling the text with the colour white, but we are making it partially transparent (fill-opacity=&quot;0.4&quot;).  SVG supports a set of <a href="http://www.w3.org/TR/SVG11/painting.html#FillProperties">Fill</a> and <a href="http://www.w3.org/TR/SVG11/painting.html#StrokeProperties">Stroke</a> Properties that can be applied to any SVG element (i.e. shapes, rasters, text).  In the text example, we are not stroking (outlining) the text, only filling it.  Read more about the SVG text element <a href="http://www.w3.org/TR/SVG11/text.html#TextElement">here</a>.</p>
    
    <h3>Transformations</h3>
    
    <p>SVG supports the ability to transform any element in a variety of ways via the <a href="http://www.w3.org/TR/SVG11/coords.html#TransformAttribute"><i>transform</i> attribute</a>.  The value of the <i>transform</i> attribute can take a whitespace/comma-separated list of the following values:  </p>
    
    <dl>
        <dt>translate( tx, [ty] )</dt><dd>Shifts the element by tx and ty units.  ty is optional and defaults to the value of 0.</dd>
        <dt>scale( sx, [sy] )</dt><dd>Scales the element by sx in the x-direction and sy in the y-direction.  sy is optional and defaults to the value of sx.</dd>
        <dt>rotate( rotate-angle [cx cy] )</dt><dd>Rotates the element by rotate-angle degrees around the given point (cx,cy). cx and cy are optional and default to the point (0,0).</dd>
    </dl>
    

    <p>The <i>transform</i> attribute supports additional transformations (skewing and general-purpose matrix transformation), see the <a href="http://www.w3.org/TR/SVG11/coords.html#TransformAttribute">SVG spec</a> for further details.</p>
    
    <p>We&#39;re going to use the rotate value to put our digital watermark along the left side of the image:</p>
    
<pre class="clear"><code>&lt;g id=&quot;the_preview&quot;&gt;
  &lt;image id=&quot;thePreviewImage&quot; class=&quot;preview&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;640&quot; height=&quot;480&quot;/&gt;
  &lt;text <b>transform=&quot;rotate(90, 10, 20)&quot;</b> fill=&quot;white&quot; fill-opacity=&quot;0.4&quot; x=&quot;10&quot; y=&quot;20&quot; 
  font-size=&quot;20&quot; font-family=&quot;Times&quot;&gt;SVG Image Gallery&lt;/text&gt;
&lt;/g&gt;</code></pre>
    
    <p>Note that SVG coordinates start at the top-left corner of the image.  The y-axis goes from the top of the image to the bottom and the x-axis goes from the left of the image to the right.  Thus, we need to rotate our text +90 degrees (clockwise) around the anchor point of the text (10,20).</p>
    
    <p><strong><a href="ex3-gallery.xhtml" title="SVG Gallery with watermark">Click here</a></strong> to see the SVG gallery with the digital watermark added.</p>
    
    <div style="margin: 10px; float:right;"><img style="width:350px;" title="Opera provides SVG text selection and copying via context menu" alt="SVG text selection and copy" src="http://forum-test.oslo.osa/kirby/content/articles/22-svg-evolution-2-our-first-steps-into-svg/svg-text-selection.png" /><div>Figure 2 - SVG Text selection</div></div>

    <p>By now, I hope you are realizing that the SVG format offers some very exciting possibilities.  Each SVG image is a living, breathing document that can be modified, transformed, re-arranged, scripted, and styled to your heart&#39;s content.  Now let&#39;s move on to some eye candy!</p>

&lt;page /&gt;

    <h2>Breathing Life Into the UI</h2>
    
    <p>As far as web applications go, our photo gallery user interface is very simple and not very interactive.  There is nothing in the UI that responds organically or reacts to mouse movements to indicate the application is alive and well.  Modern applications sport these interfaces not just because they look good but offer the user a sense of satisfaction that they are operating a <em>well-oiled</em> machine and not a dated, rusty antique.  It tells the user something is happening and makes the application seem responsive.</p>
    
    <p>We are going to make our preview SVG document respond to mouse-over/mouse-out events by highlighting the moused-over image.  Such techniques have been used for a long time in web applications by some combination of HTML, CSS and/or JavaScript.  For a touch of class, we&#39;re going to animate the highlighting such that it smoothly transitions from dim to bright.  And we&#39;re going to do it without any JavaScript or CSS using <a href="http://www.w3.org/TR/SVG11/animate.html">SVG Declarative Animation</a> instead.</p>
    
    <h3>Dropping A Veil</h3>
    
    <p>Our first step is to add a &quot;veil&quot; on top of the thumbnail raster image to darken it.  The veil will be a semi-transparent black and will completely cover the image:</p>
    
<pre class="clear"><code>&lt;g id=&quot;thumbnail&quot; onclick=&quot;showPreviewFromSVG(this, event); return false;&quot; cursor=&quot;pointer&quot;&gt;
  &lt;rect id=&quot;blueborder&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;104&quot; height=&quot;79&quot; fill=&quot;blue&quot;/&gt;
  &lt;image id=&quot;theImage&quot; class=&quot;thumb&quot; x=&quot;2&quot; y=&quot;2&quot; width=&quot;100&quot; height=&quot;75&quot;/&gt;<b>
  &lt;rect id=&quot;veil&quot; fill=&quot;black&quot; x=&quot;2&quot; y=&quot;2&quot; width=&quot;100&quot; height=&quot;75&quot; fill-opacity=&quot;0.3&quot;&gt;
  &lt;/rect&gt;</b>
&lt;/g&gt;</code></pre>
    
    <p>Note that the above &quot;veil&quot; element has an opacity of 0.3, which has the effect of darkening all the thumbnail images slightly.</p>
    
    <h3>Animation</h3>
    
    <p>Next, we add some animation to the veil.  We are only going to touch briefly on the topic of animation, since there have already been two excellent articles on SVG animation (<a href="http://dev.opera.com/articles/view/26/">here</a> and <a href="http://dev.opera.com/articles/view/50/">here</a>).  For this animation, our needs are simple:</p>
    
    <ul>
        <li>when the mouse enters the thumbnail, animate the fill-opacity of the veil from 0.3 to 0.0 over 250ms</li>
        <li>when the mouse leaves the thumbnail, animate the fill-opacity of the veil from 0.0 to 0.3 over 250ms</li>
    </ul>
    
    <p>Since the subject of the animation is the veil, we add two &lt;animate&gt; elements as children to the &quot;veil&quot; &lt;rect&gt; element.  The attribute of the &quot;veil&quot; element that we want to animate is the fill-opacity attribute.  Here is the same code as above with the animation bits added:</p>
    
<pre class="clear"><code>&lt;g id=&quot;thumbnail&quot; onclick=&quot;showPreviewFromSVG(this, event); return false;&quot; cursor=&quot;pointer&quot;&gt;
  &lt;rect id=&quot;blueborder&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;104&quot; height=&quot;79&quot; fill=&quot;blue&quot;/&gt;
  &lt;image id=&quot;theImage&quot; class=&quot;thumb&quot; x=&quot;2&quot; y=&quot;2&quot; width=&quot;100&quot; height=&quot;75&quot;/&gt;
  &lt;rect id=&quot;veil&quot; fill=&quot;black&quot; x=&quot;2&quot; y=&quot;2&quot; width=&quot;100&quot; height=&quot;75&quot; fill-opacity=&quot;0.3&quot;&gt;<b>
    &lt;animate attributeName=&quot;fill-opacity&quot; attributeType=&quot;XML&quot; 
      begin=&quot;mouseover&quot; dur=&quot;0.25s&quot; fill=&quot;freeze&quot; to=&quot;0.0&quot; /&gt;
    &lt;animate attributeName=&quot;fill-opacity&quot; attributeType=&quot;XML&quot; 
      begin=&quot;mouseout&quot; dur=&quot;0.25s&quot; fill=&quot;freeze&quot; to=&quot;0.3&quot; /&gt;</b>
  &lt;/rect&gt;
&lt;/g&gt;</code></pre>
    
    <p>The <i>to</i> attribute is the final value that the attribute should have.  The <i>dur</i> attribute is how long the animation should take.  The <i>begin</i> attribute defines when that animation will start (in this case, the animations begin upon a mouseover/mouseout event).  The <i>fill</i> attribute defines what will happen when the animation is over: in this case we want to freeze the values once the animation is finished (the other option is &quot;remove&quot; which would remove the animated effect once the animation is complete, obviously we do not want this for our example) .</p>
    
    <p><strong><a href="ex4-gallery.xhtml">Click Here</a></strong> to play with the animation by waving your mouse over the thumbnail images.</p>
    
    <h3>Conditional Processing: The Cold Hard Reality</h3>
    
    <p>Declarative animation is really cool, and as of 2010 it is supported in Opera 9+ and Safari 4+, so the effect (although subtle) in the example above is visible in those browsers. However, what happens to Firefox? In Firefox the &lt;animate&gt; elements are ignored, thus all thumbnails will be slightly darkened and remain that way with no other visible effect. But at least it is still usable.</p>
    
    <p>Now, darkening all the thumbnail images isn&#39;t the end of the world, but for users of browsers that don&#39;t support animation, we are darkening the images for no apparent reason.  We&#39;ll briefly address how to handle this situation next.</p>
    
    <p>The SVG spec is huge, packed with many features.  The spec authors realized this, and consequently realized that expecting user agent developers to support all features of the SVG language during the early phases of adoption would be unrealistic.  As a result, SVG supports <em>conditional processing</em>, which allows content developers and web authors to produce fall-back content when a particular SVG feature is not supported.  A list of SVG feature strings is available in the spec <a href="http://www.w3.org/TR/SVG11/feature.html">here</a>.</p>
    
    <p>The key to conditional processing is the <a href="http://www.w3.org/TR/SVG11/struct.html#SwitchElement">&lt;switch&gt;</a> element and the <a href="http://www.w3.org/TR/SVG11/struct.html#RequiredFeaturesAttribute"><i>requiredFeatures</i></a> attribute.  As per the spec: <q>The &#39;switch&#39; element evaluates the requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then processes and renders the first child for which these attributes evaluate to true.</q>  In other words, we can wrap the &quot;veil&quot; &lt;rect&gt; element of our thumbnail image in a &lt;switch&gt; element and then add a <i>requiredFeatures</i> attribute to the &lt;rect&gt; elements.  In this way, if the user agent supports declarative animation, the &quot;veil&quot; &lt;rect&gt; will be rendered (and its &lt;animate&gt; children will be processed) and if declarative animation is <em>not</em> supported, then the &quot;veil&quot; &lt;rect&gt; element is not processed or rendered.</p>
    
    <p>Here is the final code for the thumbnail SVG image:</p>
    
<pre class="clear"><code>&lt;g id=&quot;thumbnail&quot; onclick=&quot;showPreviewFromSVG(this, event); return false;&quot; cursor=&quot;pointer&quot;&gt;
  &lt;rect id=&quot;blueborder&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;104&quot; height=&quot;79&quot; fill=&quot;blue&quot;/&gt;
  &lt;image id=&quot;theImage&quot; class=&quot;thumb&quot; x=&quot;2&quot; y=&quot;2&quot; width=&quot;100&quot; height=&quot;75&quot;/&gt;<b>
  &lt;switch&gt;</b>
  &lt;rect id=&quot;veil&quot; fill=&quot;black&quot; x=&quot;2&quot; y=&quot;2&quot; width=&quot;100&quot; height=&quot;75&quot; fill-opacity=&quot;0.3&quot;<b>
  requiredFeatures=&quot;http://www.w3.org/TR/SVG11/feature#Animation&quot;</b>&gt;
    &lt;animate attributeName=&quot;fill-opacity&quot; attributeType=&quot;XML&quot; 
      begin=&quot;mouseover&quot; dur=&quot;0.25s&quot; fill=&quot;freeze&quot; to=&quot;0.0&quot; /&gt;
    &lt;animate attributeName=&quot;fill-opacity&quot; attributeType=&quot;XML&quot; 
      begin=&quot;mouseout&quot; dur=&quot;0.25s&quot; fill=&quot;freeze&quot; to=&quot;0.3&quot; /&gt;
  &lt;/rect&gt;<b>
  &lt;/switch&gt;</b>
&lt;/g&gt;</code></pre>

    <p><strong><a href="ex5-gallery.xhtml">Click Here</a></strong> to see this in action.</p>
    
    <h3>Alternative Solutions</h3>
    
    <p>I should point out a couple other possible solutions that may have occurred to the astute reader:</p>
    <ul>
        <li>We could have scripted the animation here for Firefox users by creating event listeners and then using setTimeout to adjust the value of fill-opacity in the SVG DOM, or we could have used the excellent <a href="http://www.vectoreal.com/smilscript/">smilscript</a> until such time as Firefox supports declarative animation.</li>
        <li>Even easier, instead of using the veil to darken all thumbnails and removing it when hovered over, we could have used the veil to <em>lighten</em> the hovered thumbnail (by filling the veil with white) and then having the <i>fill-opacity</i> attribute animate from 0.0 to 0.3 when the thumbnail was moused over.  In the real world, this would be a preferred approach, but to be honest, we were using this somewhat contrived example to illustrate the conditional processing functionality within SVG.  We leave this as an exercise for the reader.</li>
    </ul>
    
    <p>Are you still with me?  Ok, enough playing around with this glitzy animation, let&#39;s get into some actually useful SVG functionality on the next page.</p>

&lt;page /&gt;

    <h2>Adding Some Functionality</h2>
    
    <p>While eye candy is always good to get some wow, let&#39;s start to work on some practical uses of SVG in the area of &quot;image gallery&quot;.  We&#39;ll start slow by adding a toolbar with some buttons to the main image (the preview image) in the photo gallery.  This will allow us to get our hands dirty with some SVG scripting.  We&#39;ll also get a chance to see how CSS can be used to style SVG elements.</p>

    <h3>Styling The Toolbar</h3>
    
    <p>The toolbar should be semi-transparent and appear right on top of the main image.  First, here is the code for the toolbar:</p>
    
<pre class="clear"><code>&lt;g id=&quot;options_panel&quot; display=&quot;none&quot; transform=&quot;translate(50,5)&quot;&gt;
  &lt;rect id=&quot;options_panel_bkgnd&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;120&quot; height=&quot;30&quot; /&gt;
  &lt;polyline class=&quot;topleftborder&quot; points=&quot;0,30 0,0 120,0&quot;/&gt;
  &lt;polyline class=&quot;botrightborder&quot; points=&quot;120,0 120,30 0,30&quot;/&gt;
&lt;/g&gt;</code></pre>

    <p>We will add the &quot;options_panel&quot; group (&lt;g&gt;) element to the SVG main image group (&quot;the_preview&quot;).  At this point, the options_panel simply contains a rectangle (&quot;options_panel_bkgnd&quot;) with some polylines serving as borders to give the panel a 3D feel.  We&#39;re going to use CSS to style the SVG elements by updating our external CSS file:</p>
    
<pre class="clear"><code>g#options_panel {
  fill-opacity: 0.5;
  stroke-opacity: 0.5;
}
rect#options_panel_bkgnd {
  fill: grey;
}
polyline.topleftborder {
  fill: none;
  stroke: white;
  stroke-width: 2;
}
polyline.botrightborder {
  fill: none;
  stroke: grey;
  stroke-width: 2;
}</code></pre>
    
    <p>In the CSS, we set the entire &quot;options_panel&quot; group&#39;s opacity (both fill and stroke) to 0.5.  This means that all children will, by default cascade rules, inherit the opacity of their parent, meaning the entire panel will be semi-opaque.  The fill colour of the background rectangle and the stroke of the polylines are also styled.</p>
    
    <p>Note that to associate this external CSS file with the SVG content, we must add the following line to the <a href="http://www.w3.org/TR/2000/REC-xml-20001006#sec-prolog-dtd">XML prolog</a>:</p>
    
    <pre class="clear"><code>&lt;?xml-stylesheet href=&quot;ex6-gallery.css&quot; type=&quot;text/css&quot;?&gt;</code></pre>

    <h3>Displaying The Toolbar</h3>
    
    <p>You may notice in the above SVG code that the options_panel group is initially not displayed (the <i>display</i> attribute is set to &quot;none&quot;).  This is because we only want to make the toolbar visible when we mouse-over the main image.  To do this, we add a JavaScript function and assign two event listeners to call it.  Here is the SVG code with the JavaScript added:</p>

<pre class="clear"><code>&lt;g id=&quot;the_preview&quot; <b>onmouseover=&quot;showOptions(true)&quot; onmouseout=&quot;showOptions(false)&quot;</b>&gt;
  &lt;image id=&quot;thePreviewImage&quot; class=&quot;preview&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;512&quot; height=&quot;384&quot;/&gt;
  &lt;text transform=&quot;rotate(90, 10, 20)&quot; fill=&quot;white&quot; fill-opacity=&quot;0.4&quot;
    x=&quot;10&quot; y=&quot;20&quot; font-size=&quot;30&quot; font-family=&quot;Times&quot;&gt;SVG Image Gallery&lt;/text&gt;
  &lt;g id=&quot;options_panel&quot; display=&quot;none&quot; transform=&quot;translate(50,5)&quot;&gt;
    &lt;rect id=&quot;options_panel_bkgnd&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;120&quot; height=&quot;30&quot; /&gt;
    &lt;polyline class=&quot;topleftborder&quot; points=&quot;0,30 0,0 120,0&quot;/&gt;
    &lt;polyline class=&quot;botrightborder&quot; points=&quot;120,0 120,30 0,30&quot;/&gt;

    <b>&lt;script&gt;&lt;![CDATA[
      function showOptions(bShow) {
        var optionsPanel = document.getElementById(&quot;options_panel&quot;);
        if(optionsPanel) {
          optionsPanel.setAttributeNS(null, &quot;display&quot;, (bShow ? &quot;inline&quot; : &quot;none&quot;));
        }
      }
    ]]&gt;&lt;/script&gt;</b>
  &lt;/g&gt;
&lt;/g&gt;</code></pre>
    
    <div style="margin: 10px; float:right;"><img style="width:350px;" title="The empty toolbar" alt="The empty toolbar" src="http://forum-test.oslo.osa/kirby/content/articles/22-svg-evolution-2-our-first-steps-into-svg/cpanel-start.png" /><div>Figure 3 - The empty toolbar</div></div>
    
    <p>The event handlers for the mouse-over and mouse-out events are set at &quot;the_preview&quot; group element.  These event handlers call the showOptions() function which accepts a true/false argument.  The argument dictates whether the &quot;options_panel&quot; element will be visible or not.  <strong><a href="ex6-gallery.xhtml">Click here</a></strong> to observe this in action (you will have to move your mouse onto the main image to see the empty toolbar).</p>
    
    <p>Note that I&#39;ve put the JavaScript &lt;script&gt; element as a child of the &quot;options_panel&quot; element.  This may give the false impression that the script statements belong to the &quot;options_panel&quot; element or only has scope to the &quot;options_panel&quot; element.  This is not the case.  Scripts in SVG operate just like scripts in HTML:  Script statements are simply executed when they are first encountered in document order.  The showOptions() function does not belong to the DOM object but exists in the global (or &quot;window&quot;) scope.  Placing &lt;script&gt; elements nested within other SVG elements might make sense for small applications to keep code local to the SVG elements they impact, but as your application grows, it will eventually make sense to move all JavaScript into a separate .js file and reference that file once within the SVG document.</p>

    <h3>Some Simple Buttons</h3>
    
    <p>Now we&#39;ll add our first buttons to the toolbar.  Nothing fancy to begin with, we&#39;re going to use the power of SVG transformations to do some very basic things:  Flipping the image vertically and horizontally.</p>
    
    <p>Buttons on the control panel will just be &lt;rect&gt; elements that contain simple graphics, listen for mouse click events and pass control to JavaScript functions.  We leave it as exercises to the reader for something fancier (including improved button graphics, mouseout/mouseover event listening with some visual effect, animated button images, etc).  Here is the code for a basic button:</p>
    
<pre class="clear"><code>&lt;g id=&quot;flipv_button&quot; cursor=&quot;pointer&quot; onclick=&quot;flipVert()&quot; pointer-events=&quot;all&quot;&gt;
  &lt;title&gt;Flip Image vertically&lt;/title&gt;
  &lt;-- Button graphics go here in a 25x25 coordinate space --&gt;
  &lt;script&gt;&lt;![CDATA[
    function flipVert() {
      // ...
    }
  ]]&gt;&lt;/script&gt;
&lt;/g&gt;</code></pre>

    <p>We will use the template above and copy it for each button, then transform the &lt;g&gt; element by doing a translation for each button.  Note that the &lt;title&gt; element is used to provide some description of what the button does.  User agents should make this information available (i.e. in tooltip or in the status bar) when moused over.</p>

    <p>For flipping the image, our functions will simply keep track of a global JavaScript variable, toggle it from 1 to -1 and then set the <i>transform</i> attribute with an appropriate value of scale():</p>
    
<pre class="clear"><code>&lt;script&gt;&lt;![CDATA[
  // Global variables
  var gnFlippedHoriz = 1;
  var gnFlippedVert = 1;
  function flipImage() {
    var scaleStr = &quot;translate(256,192) scale(&quot;;
    scaleStr += gnFlippedHoriz;
    scaleStr += &quot;,&quot;;
    scaleStr += gnFlippedVert;
    scaleStr += &quot;) translate(-256,-192)&quot;;
    var img = document.getElementById(&quot;thePreviewImage&quot;);
    if(img) { img.setAttributeNS(null, &quot;transform&quot;, scaleStr); }
  }
  function flipHoriz() {
    gnFlippedHoriz *= -1;
    flipImage();
  }
  function flipVert() {
    gnFlippedVert *= -1;
    flipImage();
  }
]]&gt;&lt;/script&gt;</code></pre>

    <p>Look at what the flipImage() function does:  A horizontal flip is accomplished by scale(-1,1), while a vertical flip is scale(1,-1).  Since all transformations take place with respect to the origin (0,0) of the coordinate system, we need to first move the image so that its center point is at the origin (<i>translate(-256,-192)</i>), then scale the image, then move the image back so that its top-left point is at the origin (<i>translate(256,192)</i>).  To flip the image horizontally (but not vertically), the <i>transform</i> attribute value should be &quot;translate(256,192) scale(-1,1) translate(256,-192)&quot;.</p>
    
    <p><strong><a href="ex7-gallery.xhtml">Click Here</a></strong> to play with the final version of the code.</p>
    
    <p>I hope this article has helped convinced you that SVG is a technology that can be used to provide both elegant interactivity and useful functionality to Rich Internet Applications in modern web browsers.  In the next (and final) article in this series, we&#39;ll buff off the rough edges of our sample SVG+XHTML+CSS+JS web application, provide yet more useful functionality to the Image Gallery, and illustrate a couple more complex features of SVG.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/svg-evolution-not-revolution/" rel="prev" title="link to the previous article in the series">Previous article—SVG: Evolution, Not Revolution</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/svg-evolution-3-applying-polish/" rel="next" title="link to the next article in the series">Next article—SVG Evolution 3: Applying Polish</a></li>
</ul>
    
