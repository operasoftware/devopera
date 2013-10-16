Title: The CSS3 object-fit and object-position properties
----
Date: 2011-01-06 10:10:38
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Introduction</h2>

<p>A common problem in CSS concerns how to control the aspect ratio of replaced elements, such as <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code>. For example, you might want to have all images occupy the same space on a page, but not distort and lose their aspect ratio when someone uses an image file that isn&#39;t quite the right size. Resizing and letter-boxing the image slightly to conserve the aspect ratio is a much more elegant solution than squashing and stretching an image to fit. Or you might want to go the opposite way, and force letter-boxed items, like HTML5 <code>&lt;video&gt;</code>s to conform to a specific width and height — maybe you want all videos to be a specific aspect ratio, and want a solution where ones with different aspect ratios automatically appear correctly?</p>
    
<p>Doing this kind of thing is currently quite difficult, requiring JavaScript to access and manipulate sizes on the fly, or lots of CSS. The CSS3 <a href="http://dev.w3.org/csswg/css3-images/">CSS Image Values and Replaced Content</a> module working draft define a property called <a href="http://dev.w3.org/csswg/css3-images/#object-fit"><code>object-fit</code></a> which aims to solve exactly these sorts of problems. And this module also contains a related property called <a href="http://dev.w3.org/csswg/css3-images/#object-position"><code>object-position</code></a> that you can use to set the horizontal and vertical position of content inside the element.</p>

<p>Support for <code>object-fit</code> and <code>object-position</code> was introduced in Opera 11 (albeit with an <code>-o-</code> vendor prefix). You can set these new properties on the following replaced elements: <code>&lt;video&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input type=image&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;svg:image&gt;</code> and <code>&lt;svg:video&gt;</code>.</p>

<p class="note"><code>object-fit</code> works with SVG content, but the same effect can also be achieved by setting the <code>preserveAspectRatio=&quot;&quot;</code> attribute in the SVG itself.</p>

<h2>How do <code>object-fit</code> and <code>object-position</code> work?</h2>

<p>You can successfully apply <code>object-fit</code> to any replaced element, for example:</p>
	
<pre><code>img {
  height: 100px;
  width: 100px;
  <strong>object-fit: contain;</strong>
}</code></pre>

<p class="note">In the code samples and examples for this article, we set the <code>width</code> and <code>height</code> of our replaced elements in CSS. <code>object-fit</code> also takes effect when the dimensions have been specified directly in HTML – however, in browsers that don&#39;t support this CSS property, this would result in those replaced elements always looking squashed or stretched, so instead we omit the dimensions and let those browsers simply display them using their intrinsic sizes. Which approach works best will depend on your specific situation and what sort of graceful degradation you want to achieve.</p>

<p>The four possible values of <code>object-fit</code> are as follows:</p>

<ul>
<li><code>contain</code>: if you have set an explicit <code>height</code> and <code>width</code> on a replaced element, <code>object-fit:contain;</code> will cause the content (e.g. the image) to be resized so that it is fully displayed with intrinsic aspect ratio preserved, but still fits inside the dimensions set for the element.</li>
<li><code>fill</code>: causes the element&#39;s content to expand to completely fill the dimensions set for it, even if this does break its intrinsic aspect ratio.</li>
<li><code>cover</code>: preserves the intrinsic aspect ratio of the element content, but alters the width and height so that the content completely covers the element. The smaller of the two is made to fit the element exactly, and the larger overflows the element.</li>
<li><code>none</code>: the content completely ignorse any height or weight set on the element, and just uses the replaced element&#39;s intrinsic dimensions.</li>
</ul>

<p class="note">Although the value <code>none</code> was in the original specification and is supported in Opera, it has been removed in a later revision of the spec – but may well return in a future iteration.</p>

<p><code>object-position</code> works in exactly the same way as <a href="http://dev.opera.com/articles/view/31-css-background-images/#positioningtheimage"><code>background-position</code></a> does for background images, and can take the same values. For example:</p>
	
<pre><code>img {
  height: 100px;
  width: 100px;
  object-fit: contain;
  <strong>object-position: top 75%;</strong>
}</code></pre>

<p class="note">In Opera, <code>object-fit</code> can also take a value of <code>auto</code>, which is the default if the property is not specified. It only really exists to retain backwards compatibility and to allow you to override earlier settings.</p>
    
<h2>Resizing image while preserving aspect ratio</h2>

<p>Sometimes referred to as letter-boxing, there are times when you will want to preserve the aspect ratio of the images on a page, but get them to fit inside the same area. For example, you might have a content management system that allows you to upload products on an e-commerce site or images for an image gallery, with lots of different content authors. They may upload images in roughly the right size, but the dimensions are not always exact – although the images all need to fit in the same-sized part of the screen on each product page, and can&#39;t spill out of it or be cut off by the edges. In this case, you could change aspect ratio to make the images all fit in exactly the same size, but that will probably look horrible:</p>
    
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/421-the-css3-objectfit-and-objectposition-properties/figure1.jpg" alt="Images with the aspect ratio shifted look horrible." /></p>
<p class="comment">Figure 1: Images with the aspect ratio shifted look horrible.</p>

<p>The other option is to letterbox the images:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/421-the-css3-objectfit-and-objectposition-properties/figure2.jpg" alt="Letter-boxing the images looks much better." /></p>
<p class="comment">Figure 2: Letter-boxing the images looks much better.</p>

<p>This looks much better, but it is quite complicated to achieve on the client-side with current browser support. You could of course use some kind of server-side solution to preprocess the images, but this again is complex and adds more overhead.</p>
    
<p>You can handle this problem really easily with <code>object-fit</code>:</p>
    
<pre><code>img {
  width: 300px;
  height: 300px;
  ...
  <strong>-o-object-fit: contain;</strong>
}</code></pre>

<p class="note">Note: In the example files, I&#39;ve included versions of the prefixed properties with <code>-o-</code>, <code>-moz-</code>, <code>-ms-</code>, and <code>-webkit-</code> prefixes, plus a prefixless version. This is to ensure forward compatibility with Opera and other browsers, as more start to support the properties, and when they move to supporting prefixless (final) versions. I&#39;ve just included the Opera versions of the properties here, for brevity.</p>
	
<p>The images are all set to be the same width and height, but <code>-o-object-fit:contain;</code> forces all the images to fit inside the same area and maintain aspect ratio, as demonstrated in the <a href="object-fit-contain-images.html"><code>-o-object-fit:contain;</code> example</a>.</p>
	
<p>An even better solution, depending on your particular application, might be to maintain aspect ratio, but change the size and crop of the image so it completely envelops the <code>&lt;img&gt;</code> element. This can be done easily, by replacing <code>-o-object-fit:contain;</code> with <code>-o-object-fit:cover;</code>, and adding <code>overflow:hidden;</code> to the mix:</p>
	
<pre><code>img {
  ...
  <strong>-o-object-fit: cover;</strong>
  <strong>overflow: hidden;</strong>
}</code></pre>

<p>See the <a href="object-fit-cover-images.html"><code>-o-object-fit:cover;</code> example</a>.</p>
	   
<h2>Overriding a video&#39;s aspect ratio</h2>
   
<p>This example goes in the opposite direction - this time we are taking a video with a broken aspect ratio, which is far too wide and stretches across the element in a nasty thin strip, and forcing it to change aspect ratio and nicely fill it up using <code>object-fit:fill;</code>. Why would we want to do this? Maybe some of the videos your contents editors upload to your CMS have a a broken aspect ratio, and you want to fix them all on the fly, in one easy fell swoop?</p>
   
<p class="note">Note that normally videos with broken aspect ratio aren&#39;t this extreme: they might be 4:3 instead of 16:9, which is still annoying of course.</p>
   
<p>To illustrate the point, our <a href="object-fit-fill-video.html"><code>object-fit:fill;</code> video example</a> uses two <code>&lt;video&gt;</code> elements – one displayed in its intrinsic (broken) aspect ratio, and the second one corrected via CSS:</p>
   
<pre><code>&lt;video controls=&quot;controls&quot; src=&quot;http://forum-test.oslo.osa/kirby/content/articles/421-the-css3-objectfit-and-objectposition-properties/windowsill.webm&quot; width=&quot;426&quot; height=&quot;240&quot; class=&quot;no-object-fit&quot;&gt;
  ...
&lt;/video&gt;

&lt;video controls=&quot;controls&quot; src=&quot;http://forum-test.oslo.osa/kirby/content/articles/421-the-css3-objectfit-and-objectposition-properties/windowsill.webm&quot; width=&quot;426&quot; height=&quot;240&quot; class=&quot;object-fit&quot;&gt;
  ...
&lt;/video&gt;</code></pre>

<p>Even though the <code>&lt;video&gt;</code> elements have <code>width</code> and <code>height</code> attributes specified in the markup, the first video actually appears letter-boxed, since the <code>&lt;video&gt;</code> element always tries to maintaining the source file&#39;s intrinsic aspect ratio … and it looks pretty terrible. In the second video, we&#39;ve simply forced it to conform to the <code>width</code> and <code>height</code> of the element by applying <code>object-fit:fill;</code>:</p>
   
<pre><code>.object-fit {
  ...
  <strong>-o-object-fit: fill;</strong>
}</code></pre>

<p>This overrides the video&#39;s intrinsic aspect ratio, forcing it to completely fill the <code>&lt;video&gt;</code> element so it displays correctly.</p>

<h2>Interesting transition effects</h2>
   
<p>Combining <code>object-fit</code> and <code>object-position</code> with CSS transitions can lead to some pretty interesting effects for image or video galleries. Let&#39;s make some slight modifications to our first example:</p>
   
<pre><code>img {
  width: 200px;
  height: 200px;
  ...
  <strong>overflow: hidden;
  -o-object-fit: none;
  -o-object-position: 25% 50%;
  -o-transition: 1s width, 1s height;</strong>
}
		
<strong>img:hover, img:focus {
  height: 350px;
  width: 350px;
}</strong></code></pre>

<p class="note">Of course, this is only a simplified example to illustrate our point. I&#39;ve enabled basic keyboard access by giving the images a <code>tabindex</code> attribute, making them focusable. A full-fledged image gallery would obviously have the thumbnails wrapped clickable, showing large versions of the images.</p>

<p>When you move over the various thumbnails in our  <a href="object-fit-none-transitions.html"><code>object-fit:none;</code> with <code>overflow</code> gallery example</a> you&#39;ll notice that the images aren&#39;t shrunk down to fit the element. Instead, only a small part of the image is shown, and the element grows to reveal more of the image. What gives?</p>

<p>By setting <code>-o-object-fit:none;</code> on the <code>&lt;img&gt;</code> elements, I am telling their content to completely ignore the <code>width</code> and <code>height</code> set earlier, and spill out of the sides of the elements. Since the intrinsic size of the image files is a lot bigger than the dimensions specified for the <code>&lt;img&gt;</code> elements, I&#39;ve used <code>overflow:hidden;</code> to crop anything that spills out. A transition is then used to smoothly increase the size of the <code>&lt;img&gt;</code> element when it&#39;s hovered/focused, which reveals more of the image.</p>

<p>But not only that! I&#39;ve also used the <code>-o-object-position: 25% 50%;</code> property to move the position of the image on the <code>&lt;img&gt;</code> element over to the right a bit, which creates a nice content-revealing effect.</p>

<p class="note">You could also use <code>-o-object-position</code> to move a contained video or image to make a space for captions.</p>

<h2>Summary</h2>

<p>This article showcased a few ideas for how to use <code>object-fit</code> and <code>object-position</code>. You can find more examples on our <a href="http://testsuites.opera.com/object-fit/"><code>object-fit</code> test suites page</a>. We are looking forward to seeing what examples you create, and as always let us know what you think of our implementation!</p>
