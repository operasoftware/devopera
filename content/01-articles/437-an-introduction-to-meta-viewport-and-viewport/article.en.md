Title: An introduction to meta viewport and @viewport
----
Date: 2011-03-22 07:12:20
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2>Introduction</h2>

<p>Support for the viewport meta tag in Opera’s mobile products has been around for quite some time, and from Opera Mobile 11 onward, we have made our viewport implementation more robust, added support for new mechanisms to deal with different screen densities, and included an implementation of our own <a href="http://dev.w3.org/csswg/css-device-adapt/#the-viewport-rule">CSS @viewport rule proposal</a>. In addition, Opera Mini 6 and later now also comes with basic support for the viewport meta tag.</p>
<p class="note">Update 27 May 2012: There is experimental <a href="http://msdn.microsoft.com/en-us/library/ie/hh708740(v=vs.85).aspx">support for -ms-viewport in Internet Explorer 10</a>.</p>

<p>So, what better time than now to give you an introduction to the various viewport related mechanisms you can use to optimize your site for mobile? Let’s get started!</p>

<h2>Web page handling by mobile browsers</h2>

<div class="right">
<p><a href="nytimes.jpg"><img src="http://forum-test.oslo.osa/kirby/content/articles/437-an-introduction-to-meta-viewport-and-viewport/nytimes-small.jpg" alt="New York Times Art page screenshot" /></a></p>
<p class="comment">Figure 1: The New York Times website is<br /> scaled down so as to fit nicely in the<br /> available screen space.</p>
</div>

<p>Recent generations of mobile browsers can render full web pages without a problem and scale them so they fit nicely inside the phone browser’s visible screen area or viewport — the user then can zoom in on areas of interest and pan around on the page using touch, keypad, trackball or other input, depending on the phone model. </p>

<p>Opera Mobile follows this logic as well: it renders a normal web page using a viewport width of 980px — think of it as pretending to be a desktop browser with an 980px window width. It then squeezes the resulting page rendering to fit nicely inside the actual viewport of the phone browser you are using.</p>

<p>If the page loaded is wider than 980px, such as for instance <a href="http://www.nytimes.com/">www.nytimes.com</a> (see Figure 1), Opera Mobile goes to some extra effort, making the viewport a little wider so as to make sure the parts that would otherwise fall out of the 980px are included as well. The result is then scaled down so the page fits nicely inside the available screen area.</p>

<p>For a lot of sites, this way of page handling and interaction is sufficient. However, there may be cases where you want to control the size and scaling of the page, for instance when you are making a mobile-optimized web app with a native feel. It is here that the viewport meta tag and the new @viewport rule come in handy: they enable you to override that default 980px viewport value, define a maximum viewport height, and more, allowing you to manipulate the browser’s display and zoom behavior as you please.</p>

<h2>Viewport syntax</h2>

<p>Overriding the default viewport can be done by including a viewport meta tag in the <code>&lt;head&gt;</code> section of your page. I’m including a somewhat complex example just to illustrate what the syntax looks like:</p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=320, initial-scale=0.5&quot;&gt;</code></pre>

<p>Alternatively — and this currently only works in Opera Mobile 11 and later, hence the <code>-o-</code> prefix — you can use the @viewport rule in your CSS. A translation of the example above would be as follows:</p>

<pre><code>@-o-viewport {
  width: 320px;
  zoom: 0.5;
}</code></pre>

<p class="note">The above example and certain others in this article use CSS properties with an <code>-o-</code> prefix — for reasons of clarity and simplicity, we have not included other vendor prefixes. However, note that if you use these properties in a real-world website you should make sure to also include <code>-webkit-</code>, <code>-moz-</code> and <code>-ms-</code> prefixed properties, as well as a prefixless variant.</p>

<p>Looking at the above examples, it is worth pointing out that whereas the @viewport syntax is CSS, the viewport meta tag syntax is <strong>not</strong> CSS. This means for instance that you have to use commas as delimiters between viewport values, and not semicolons. Make sure you get this right, as semicolon delimiters may result in the viewport values being interpreted incorrectly or even discarded entirely, even although certain user-agents are forgiving.</p>

<h2>Setting the viewport width</h2>

<p>Now we&#39;ll look in more detail at setting the viewport width.</p>

<h3>Specific width</h3>

<p>Let’s set some values. As a first example, we’ll set the viewport to be 320 pixels wide. </p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=320&quot;&gt;</code></pre>

<p>or alternatively,</p>

<pre><code>@-o-viewport {
  width: 320px;
}</code></pre>

<p>This setting will make the browser render the page on a canvas with a width of 320px, and then fit the result as neatly as possible inside the available screen area. If that area is 360px wide (see Figure 2), the content will be scaled up by a factor of 1.125; if it’s 240px wide, expect it to become smaller by a factor of 0.75.</p>

<div class="left">
<p><a href="viewport_specific-width.jpg"><img src="http://forum-test.oslo.osa/kirby/content/articles/437-an-introduction-to-meta-viewport-and-viewport/viewport_specific-width_small.jpg" alt="screenshots of pages using a viewport width of 320px" /></a></p>
<p class="comment">Figure 2: <a href="http://people.opera.com/andreasb/viewport/ex01.html">page with a viewport width of 320px</a> on a 360×600px screen in portrait and landscape orientation.</p>
</div>

<p>It is worth pointing out that using a specific pixel value for the viewport offers a quick and easy way to optimize an existing, not too wide design for mobile viewing. For instance, if your page content is living inside a centered, 500 pixel-wide container you can set the viewport to be 500px, which will nicely blow up that container so as to make it fit inside the available screen area. If you need a bit more margin on the left and right, try a larger pixel value, e.g. 550px.</p>

<h3>Device width</h3>

<p>Alternatively, and this is our recommended practice, you can set the viewport width to be equal to the width of the device’s screen: </p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;</code></pre>

<p>or in CSS,</p>

<pre><code>@-o-viewport {
  width: device-width;
}</code></pre>

<p>By using this setting, you basically tell the browser <em>“No scaling needed, thank you very much. Just make the viewport as many pixels wide as the device screen width.”</em> This means that if the device has a screen that is 360px wide, the viewport width will be 360px (see Figure 3); if it’s 480px, the viewport will be 480px, etc. To get an idea of what your site will look like when using this setting, you can simply resize your desktop browser window and try out different sizes: no scaling will occur of course, but that’s exactly the point.</p>

<p>When using this setting, you’ll want to use various liquid layout techniques and media queries, so as to make sure your site looks nice and adapts itself to varying screen sizes. We’ll look at how to combine viewport with media queries a bit later on.</p>

<div class="left">
<p><a href="viewport_device-width.jpg"><img src="http://forum-test.oslo.osa/kirby/content/articles/437-an-introduction-to-meta-viewport-and-viewport/viewport_device-width_small.jpg" alt="screenshots of pages using a viewport width of device-width" /></a></p>
<p class="comment">Figure 3: <a href="http://people.opera.com/andreasb/viewport/ex02.html">page with a viewport width of <code>device-width</code></a> on a 360×600px screen in portrait and landscape orientation.</p>
</div>

<h2>Other viewport properties</h2>

<p>There are some other viewport properties you should be aware of: we&#39;ll look at these now.</p>

<h3>Viewport height</h3>

<p>Similar to the <code>width</code> property, there is also a corresponding one for height settings. You can use it with specific pixel values, or with <code>device-height</code>. You won’t find yourself using the <code>height</code> property that often — it’s mostly useful for pages that should not pan, or else, only pan sideways, both of which occur relatively rarely.</p>

<p>In the following example, we limit the canvas effectively to the number of pixels shown by the browser window — panning is not possible at all:</p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, height=device-height&quot;&gt;</code></pre>

<p>or alternatively,</p>

<pre><code>@-o-viewport {
  width: device-width;
  height: device-height;
}</code></pre>

<h3>Initial scale</h3>

<div class="right">
<p><a href="viewport_initial-scale.jpg"><img src="http://forum-test.oslo.osa/kirby/content/articles/437-an-introduction-to-meta-viewport-and-viewport/viewport_initial-scale_small.jpg" alt="screenshot of page with an initial scale of 2" /></a></p>
<p class="comment">Figure 4: <a href="http://people.opera.com/andreasb/viewport/ex03.html">page with an initial scale of 2</a>.</p>
</div>

<p>In addition to the above, you may want to specify the initial zoom factor for the viewing area. If you want to set the viewport of your page to be equal to the device’s width and have it zoom in by default with a factor of 2 for example, this property will come in handy. The code for that would look as follows:</p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=2&quot;&gt;</code></pre>

<p>or alternatively,</p>

<pre><code>@-o-viewport {
  width: device-width;
  zoom: 2;
}</code></pre>

<p>Figure 4 shows what this would look like — although it is not a particularly practical demonstration of the possibilities the initial scale setting has to offer, the underlying point should be clear: content is blown up with a factor of 2 upon first load.</p>

<p style="padding-right: 42%;">It is worth pointing out here that once one of the values for viewport width, height or initial scale is set, the browser will automatically infer values for the properties that are not set. For example, when setting the width to <code>device-width</code>, the initial scale value is automatically considered to be 1, and vice versa. It is only when you want to use a non-inferred value that it makes sense to set more than one property.</p>

<h3>Scaling constraints</h3>

<p>If you want to, you can constrain how much the user can zoom in or out by setting the <code>maximum-scale</code> and <code>minimum-scale</code> properties. For example:</p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, maximum-scale=2, minimum-scale=0.5&quot;&gt;</code></pre>

<p>or alternatively,</p>

<pre><code>@-o-viewport {
  width: device-width;
  max-zoom: 2;
  min-zoom: 0.5;
}</code></pre>

<p>It is also possible to completely turn off zooming, however keep in mind that zooming is an important accessibility feature that is used by a lot of people. Turning it off should therefore only happen when really necessary, such as for certain types of games and applications. Here is some example code, taken from <a href="http://www.splintered.co.uk/experiments/archives/paranoid_0.3/">a <code>&lt;canvas&gt;</code> game demo</a>: </p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=372, user-scalable=no&quot;&gt;</code></pre>

<p>or alternatively,</p>

<pre><code>@-o-viewport {
  width: 372px;
  user-zoom: fixed;
}</code></pre>

<h2>Throwing media queries into the mix</h2>

<p>For those not familiar yet with media queries, you can think of them as conditional hooks that trigger different CSS rules to be applied if a defined set of environmental prerequisites are met. Differently said, media queries allow you to optimize your site for all kinds of screen sizes, and tweak or radically change its layout for varying device contexts.</p>

<p>In the example below, I give all images a width of 96% of their container as well as a black background, provided the viewport width is equal to or smaller than 360px. This makes sure the image is nicely centered on smaller screens, while the black background is there just to highlight that there is something special going on.</p>

<pre><code>@media screen and (max-width: 360px) {
  img {
    width: 96%;
    background: #000;
  }
}</code></pre>

<p>A major caveat here is that if we don’t set the viewport explicitly in our document, the media query will not be triggered in our mobile browser. Indeed, in its default setting, Opera Mobile renders the document with an assumed 980px wide viewport, therefore the media query is not applied. </p>

<p>To solve this, we can simply define the viewport width as being equal to <code>device-width</code>:</p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;</code></pre>

<p>or in CSS,</p>

<pre><code>@-o-viewport {
  width: device-width;
}</code></pre>

<p>This will give the page a viewport equal to the screen’s width — it will scale up the page content accordingly — and trigger our media query to be applied on devices that are as wide or narrower than 360px. Opera Mobile running on the Nokia 5800 (which is 360px wide in portrait mode) will thus show the images at 96% of their container, just like Safari on the 2nd gen iPod Touch (which is 320px wide). A screen with a 480px width however will not apply the media query (see Figure 5).</p>

<div class="left">
<p><a href="viewport_media-queries.jpg"><img src="http://forum-test.oslo.osa/kirby/content/articles/437-an-introduction-to-meta-viewport-and-viewport/viewport_media-queries_small.jpg" alt="screenshot of pages with media query not actived and activated" /></a></p>
</div>
<p class="comment">Figure 5: in <a href="http://people.opera.com/andreasb/viewport/ex04.html">this viewport example</a>, the media query does not affect the 480px wide browser window on the left, but it is triggered on the 320px one on the right: this nicely illustrates how you can do layout adaptation for different screen sizes and form factors.</p>

<p class="note">In these examples, we’re using <code>max/min-width</code> media queries rather than the <code>max/min-device-width</code> variant. Although the latter should work as well, they are a bit less practical as they don’t come into action when resizing your browser window on desktop — the width of your computer screen always stays the same. <code>max/min-width</code> media queries on the other hand do react to desktop browser window resizing, which is handy for development and nice for your users when they run your site in a smaller window.</p>

<p>So, using a smart combination of viewport and media query settings, it is effectively possible to create <em>one</em> single site that works well on desktop and mobile. For inspiration and plenty of real-world examples, have a look at the <a href="http://mediaqueri.es/">mediaqueri.es gallery</a>.</p>

<h2 id="high-dpi">Going one level deeper — dealing with high-DPI screens</h2>

<p>Now let&#39;s look at optimizing pages for high-DPI screens.</p>

<h3>A pixel is not what it seems</h3>

<p>The recent generation of mobile devices comes with screens with extremely high DPI (dots per inch) — this makes it almost impossible to distinguish individual pixels and renders objects shown on the screen with very high fidelity. The problem however is that because the pixels are so small, web content becomes very tiny as well: text with a 11px sized font for instance will be minuscule, and on desktop normal looking images will be rendered fairly small. Therefore, Opera Mobile applies a default zoom level larger than 100% when run on high-DPI devices. In Opera Mobile on the HTC Desire for instance, this default zoom is 150%.</p>

<p>Said differently, this means that a pixel is not what it seems. When talking about pixels thus far we’ve talked about them in terms of CSS pixels, which are, believe it or not, a relative length unit. 1 CSS pixel can consist of multiple device pixels: in the case of Opera Mobile on the HTC Desire for instance, 1 CSS pixel is equal to 1.5 device pixels.</p>

<h3>Preserving image crispiness</h3>

<p>So, this larger-than-100% default zoom level increases legibility, but what about the fidelity of your content? Fonts, borders, and SVG files all render very crisp as they are vector-based, but for rasterized images it’s possible to experience some quality loss. There is an easy workaround for this though: you can include a high-resolution image in your page but constrain its width to, say, half of the original. When the image is shown on a high-DPI device, the default zoom and larger image size level each other out, and the image stays crisp. Consider the following scenario:</p>

<pre><code>&lt;img src=&quot;500px_image.jpg&quot; width=&quot;250&quot;&gt;</code></pre>

<p>If the viewport width is set to be equal to the <code>device-width</code>, this image will be shown with a width of 250 device pixels on Safari on a 2nd gen iPod Touch. Opera Mobile on the HTC Desire will show it with a width of 375 device pixels (= 250×150%). And on device browsers with a 200% default zoom it will be 500 device pixels (= 250×200%). Crispiness is assured all the way!</p>

<h3 id="device-pixel-ratio">A screen density media query</h3>

<p>In case you want to take this further and do targeted fine tuning for particular screen densities, you can use the <code>device-pixel-ratio</code> media query, which allows you to only apply style rules depending on whether certain screen density-related conditions are met. The following CSS gives <a href="http://people.opera.com/andreasb/viewport/seamless.jpg">the 500×500px background image</a> a <code>background-size</code> of 250px. This makes the tiles sharper when shown on high-DPI devices with a default zoom factor of 150% (= 3/2) or larger, such as the HTC Desire. The code would look as follows, and can be seen in action in Figure 6:</p>

<pre><code>@media screen and (-o-min-device-pixel-ratio: 3/2) {
  body {
    background-size: 250px;
  }
}</code></pre>

<p class="note">Note that Opera only accepts ratios as <code>device-pixel-ratio</code> values (e.g. 3/2). The default Android browser on the other hand prefers numbers (e.g. 1.5). As this feature requires a vendor prefix at this point, it is just a matter of specifying the right value for each rendering engine.</p>

<div class="left">
<p><a href="viewport_device-pixel-ratio.jpg"><img src="http://forum-test.oslo.osa/kirby/content/articles/437-an-introduction-to-meta-viewport-and-viewport/viewport_device-pixel-ratio_small.jpg" alt="screenshot of pages with and without device-pixel-ratio media query" /></a></p>
<p class="comment">Figure 6: two HTC Desire screenshots, with on the left, <a href="http://people.opera.com/andreasb/viewport/ex02.html">our earlier example</a> with just <code>width=device-width</code> — note the magnified and somewhat pixelated background; on the right, <a href="http://people.opera.com/andreasb/viewport/ex05.html">an example with added <code>device-pixel-ratio</code> goodness</a>, which results in much nicer, DPI-aware background image tiling.</p>
</div>

<h3>Setting the target density</h3>

<p>As you can guess from the previous sections, this a-pixel-is-not-a-pixel business also affects viewport settings. If we look at Opera Mobile on the HTC Desire again, we can see that setting the viewport to <code>width=device-width</code> results in it having a width of 320 CSS pixels, which in reality is represented by 480 device pixels (= 320 × 150%). </p>

<p>Sounds complicated? Well, here is some good news: in almost all cases, this is nothing to worry about. Let the mobile browser take care of all the scaling math, and limit your focus to tweaking your images a bit as described above, if at all.</p>

<p>However, there might be scenarios where you really need pixel-level control, such as for a mobile-optimized maps service: <code>target-densitydpi</code> is a viewport property that allows you to do this. If we give this property a value of <code>device-dpi</code>, we’re actually saying: <em>“No scaling needed, thank you very much — and yes, I&#39;m serious! Just make the viewport equal to as many CSS pixels as there are device pixels in the width of the screen.”</em> The code for that looks as follows:</p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, target-densitydpi=device-dpi&quot;&gt;</code></pre>

<p>Opera Mobile does not come with support for <code>target-densitydpi</code> via @viewport, so your only option is to set it via a meta viewport tag for the time being.</p>

<div class="left">
<p><a href="viewport_target-densitydpi.jpg"><img src="http://forum-test.oslo.osa/kirby/content/articles/437-an-introduction-to-meta-viewport-and-viewport/viewport_target-densitydpi_small.jpg" alt="screenshot of pages with and without target-densitydpi set" /></a></p>
<p class="comment">Figure 7: two HTC Desire screenshots, with on the left, <a href="http://people.opera.com/andreasb/viewport/ex02.html">our earlier example</a> with just <code>width=device-width</code> — note the default scaling of 150%; on the right, <a href="http://people.opera.com/andreasb/viewport/ex06.html">an example with <code>target-densitydpi</code> set to <code>device-dpi</code></a>, which results in all scaling to be turned off.</p>
</div>


<p>Besides the <code>device-dpi</code> value, you can also set <code>high-dpi</code>, <code>medium-dpi</code>, <code>low-dpi</code> or an actual DPI number for the <code>target-densitydpi</code> property: this allows you to specify the target density for which your web page is designed. No worries if this sounds complicated — it’s rather unlikely you’ll need this at all.</p>

<p>One thing worth highlighting is that in the case where you set the <code>target-densitydpi</code> to <code>device-dpi</code>, you’ll want to optimize your layout for screens with different DPIs manually. This can happen through the aforementioned <code>device-pixel-ratio</code> media query, which conveniently allows you to define styles for specific screen densities.</p>

<h2>Conclusion and references</h2>

<p>This concludes our brief foray into the realms of viewport — play around with these values, and let us know what combination works best for you!</p>

<h3>Further reading:</h3>
<ul>
<li><a href="http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/usingtheviewport/usingtheviewport.html">Configuring the viewport</a></li>
<li><a href="http://developer.android.com/reference/android/webkit/WebView.html">Building web pages to support different screen densities</a></li>
<li><a href="http://dev.w3.org/csswg/css-device-adapt/#the-lsquouser-zoomrsquo-property">CSS Device Adaptation</a></li>
</ul>

