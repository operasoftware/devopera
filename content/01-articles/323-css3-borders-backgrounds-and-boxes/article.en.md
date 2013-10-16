Title: CSS3 borders, backgrounds and boxes
----
Date: 2009-12-22 08:02:04
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

<p>In this article, we will showcase some examples made using the new properties in the <a href="http://www.w3.org/TR/css3-background/">W3C&#39;s CSS3 Backgrounds and Borders specification</a>. We recommend using <a href="http://www.opera.com/browser/">Opera 11 or later</a> to view these examples in their full glory.</p>

<ul>
  <li><a href="#background-clip"><code>background-clip</code></a></li>
  <li><a href="#background-origin"><code>background-origin</code></a></li>
  <li><a href="#multiple-background">Multiple background images</a></li>
  <li><a href="#background=attachment"><code>background-attachment</code></a></li>
  <li><a href="#background-shorthand">updated <code>background</code> shorthand</a></li>
  <li><a href="#box-shadow"><code>box-shadow</code></a></li>
  <li><a href="#box-decoration-break"><code>box-decoration-break</code></a></li>
  <li><a href="#border-radius"><code>border-radius</code></a></li>
  <li><a href="#border-image"><code>border-image</code></a></li>
</ul>


<h2 id="background-clip"><code>background-clip</code></h2>

<p>The first CSS3 property that we&#39;ll introduce is <code>background-clip</code>. This property is used to determine whether the background image extends into the border or not.</p>

<p>There are two options, the default <code>border-box</code> and <code>padding-box</code>. When <code>border-box</code> is used, the background image will extend to the border and will therefore show up behind the border, as in Figure 1. The other option is <code>padding-box</code> which means the background image won’t stretch to the border. The image will simply appear until the edge of the padding, as shown in Figure 2.</p>

<div style="border:10px dashed #354658;background:#B6B9B9 no-repeat scroll 0 5px;color:#354658;font-weight:bold;width:145px;height:145px;margin-right:10px;background-clip:border-box">background-clip: border-box;</div>
<p class="comment">Figure 1: <code>background-clip: border-box;</code></p>

<div style="border:10px dashed #354658;background:#B6B9B9 no-repeat scroll 0 5px;color:#354658;font-weight:bold;width:145px;height:145px;margin-right:10px;background-clip:padding;background-clip:padding-box;">background-clip: padding-box;</div>
<p class="comment">Figure 2: <code>background-clip: padding-box;</code></p>

<p>In essence, <code>padding-box</code> clips the background image to the padding box while <code>border-box</code> clips the background image to the border. <a href="http://people.opera.com/zibin/background/background_origin_clip.html">Screenshots of <code>background-clip</code> and <code>background-origin</code></a> show you how it looks if your browser does not support this CSS3 property.</p>

<p class="note">Note that Gecko still uses their vendor prefix: <code>-moz-background-clip</code>. Gecko is also using the old property value without the <code>-box</code> suffix. Therefore, instead of <code>padding-box</code>, Gecko uses <code>padding</code> for the same effect. These issues have been fixed in the latest nightlies of Firefox but have not yet reached a final release at the time of writing. The latest versions of WebKit now support these properties without the prefix.</p>

<h2 id="background-origin"><code>background-origin</code></h2>

<p>The <code>background-origin</code> property is used to determine how the <code>background-position</code> of a background in a certain box is calculated.</p>

<p>When you position a background image, <code>background-origin</code> allows you to specify your starting point. The default <code>padding-box</code> positions the background image relative to the outer edge of the padding (inner edge of the border), whereas <code>border-box</code> positions the background image relative to the outer edge of the border. There is also the value <code>content-box</code> which, not surprisingly, positions the background image relative to the outer edge of the content (inner edge of the padding).</p>

<p>For example, a background image positioned 10px from the left and top will show in the following positions using the different values for <code>background-origin</code>:</p>

<div style="border:10px dashed #354658;background:#B6B9B9 url(Opera_logo.png) no-repeat scroll;color:#354658;font-weight:bold;width:125px;height:125px;margin-right:10px;margin-bottom:10px; background-origin:border-box;"><code>background-origin: border-box;</code></div>
<p class="comment">Figure 3: <code>background-origin: border-box;</code></p>

<div style="border:10px dashed #354658;background:#B6B9B9 url(Opera_logo.png) no-repeat scroll;color:#354658;font-weight:bold;width:125px;height:125px;margin-right:10px;margin-bottom:10px;background-origin:padding-box;"><code>background-origin: padding-box;</code></div>
<p class="comment">Figure 4: <code>background-origin: padding-box;</code></p>

<div style="border:10px dashed #354658;background:#B6B9B9 url(Opera_logo.png) no-repeat 10px 10px scroll;color:#354658;font-weight:bold;width:125px;height:125px;margin-bottom:10px;margin-right:10px;background-clip:padding-box;background-origin:border-box;"><code>background-clip: padding-box; background-origin: border-box;</code></div>
<p class="comment">Figure 5: <code>background-clip: padding-box; background-origin: border-box;</code></p>

<div style="border:10px dashed #354658;background:#B6B9B9 url(Opera_logo.png) no-repeat 10px 10px scroll;color:#354658;font-weight:bold;width:125px;height:125px;margin-bottom:10px;margin-right:10px;background-clip:padding-box;background-origin:padding-box;"><code>background-clip: padding-box; background-origin: padding-box;</code></div>
<p class="comment">Figure 6: <code>background-clip: padding-box; background-origin: padding-box;</code></p>

<p>If your browser does not support this feature yet, you can take a look at the <a href="http://people.opera.com/zibin/background/background_origin_clip.html"><code>background-clip</code> and <code>background-origin</code> screenshots</a>.</p>

<p>Daniel Davis has another <a href="http://people.opera.com/danield/examples/bg-clip.html">example and explanation of CSS3 <code>background-clip</code> and <code>background-origin</code></a>.</p>

<p class="note">Similar to <code>background-clip</code>, Gecko still uses its prefix for <code>background-origin</code>. Gecko is also using the old property value without the <code>-box</code> suffix. Instead of <code>padding-box</code>, Gecko uses <code>padding</code> for the same effect. These issues have been fixed in the latest nightlies of Firefox but have not yet reached a final release at the time of writing.</p>

<h2 id="multiple-background">Multiple background images</h2>

<p>CSS3 allows multiple backgrounds on a single element. This is done by defining multiple background images. You can achieve the effect using either the <code>background-image</code> or shorthand <code>background</code> properties.</p>

<h3>Example 1</h3>

<p>In the first example, we show you how to merge three background images into one using the <code>background</code> property.</p>

<div style="font-size:10em">
<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/driedrose.png" height="120px" alt="dried rose" /> + 
<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/rose.png" height="120px" alt="rose" /> + 
<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/fieldsky.jpg" height="120px" alt="field and sky scenery" />
</div>

<p class="comment">Figure 7: Three individual background images</p>

<p>By defining the background images in order, they overlap each other. The <a href="http://www.w3.org/TR/css3-background/#layering">W3C spec says</a></p>
<blockquote>The first image in the list is the layer closest to the user, the next one is painted behind the first, and so on. The background color, if present, is painted below all of the other layers. Note that the -o-border-image properties can also define a background image, which, if present, is painted on top of the background created by the background properties.
</blockquote>

<p>You can view the <a href="http://people.opera.com/zibin/background/multiple_background_image.html">multiple background image example here</a>. The results can be seen in figure 8.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/multiple_background.jpg" alt="" />

<p class="comment">Figure 8: Screenshot of a combined background image using multiple background images</p>

<pre><code>background:
  url(rose.png) no-repeat 150px -20px,
  url(driedrose.png) no-repeat,						
  url(fieldsky.jpg) no-repeat;</code></pre>

<h3>Example 2</h3>

<p>Alternatively, you can use the <code>background-image</code> property to create a background with multiple images.</p>

<p>In this second example we show you how to create the <a href="http://www.alistapart.com/articles/slidingdoors/">sliding doors technique</a> using only <code>background-image</code>. This time there&#39;s no need for extra nested blocks. Together with <code>background-repeat</code> and <code>background-position</code>, Patrick Lauke shows us how <a href="http://people.opera.com/patrickl/experiments/css3/sliding-doors/">sliding door buttons are created using multiple background images</a>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/multiplebackground_slidingdoor.png" alt="" />

<p class="comment">Figure 9: Screenshot of the sliding doors technique using multiple background images</p>

<pre><code>background-image: url(left.png), url(right.png), url(main.png);
background-repeat: no-repeat, no-repeat, repeat-x;
background-position: left top, right top, left top;</code></pre>

<h2 id="background=attachment"><code>background-attachment</code></h2>

<p>The <code>background-attachment</code> property determines if a background image is fixed or scrolls with the rest of the page. It happens when we define how a background image is attached to a viewport. Background images can be <code>fixed</code>to a viewport or can <code>scroll</code> along with the element or with its contents via <code>local</code>.</p>

<p>See <a href="http://people.opera.com/pepelsbey/experiments/bga/">Vadim Makeev&#39;s <code>background-attachment</code> demo</a>. He has created three sections to demonstrate how <code>fixed</code>, <code>scroll</code> and <code>local</code> are affected when we scroll the viewport and the full document.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/background_attachment.png" width="620" height="408" alt="" />

<p class="comment">Figure 10: Screenshot of our <code>background-attachment</code> example</p>

<p class="note">The <code>local</code> value for <code>background-attachment</code> is new in the <a href="http://www.w3.org/TR/css3-background/">W3C&#39;s CSS3 border and background specification</a>. At the time of writing, it is not yet supported in public releases of Firefox.</p>

<h2 id="background-shorthand">Updated <code>background</code> shorthand</h2>

<p>Starting with Opera 11, it is possible to specify the new CSS3 background properties in the <code>background</code> shorthand. This includes <code>background-size</code>, <code>background-clip</code> and <code>background-origin</code>.</p>

<p>There are a few things to be aware of when using the new background shorthand. If only one <a href="http://www.w3.org/TR/2010/WD-css3-background-20100612/#ltboxgt">box value</a> is specified both <code>background-clip</code> and <code>background-origin</code> are set to this value. If two are specified then the first is used for the origin and the second is used for the clip. As both <code>background-position</code> and <code>background-size</code> accept length and percentage values, a forward slash (/) needs to be present before the first <code>background-size</code> value. Finally, if specifying multiple background images, only the final image can specify a <code>background-color</code>.</p>

<p>In the following demo the <code>background</code> shorthand has been used to specify three images to illustrate the CSS box model. All values have been specified, even if they are the same as the default, to show how they can be defined. Each image has a different <code>background-origin</code> to place the image in the border box, padding box and content box respectively.</p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/background-screenshot.png" width="292" hight="161" alt="" />
<p class="comment">Figure 11: Screenshot of the box model example created using the <code>background</code> shorthand, including various  CSS3 properties</p>

<p>See the <a href="http://dev.opera.com/static/dstorey/backgrounds/background-shorthand.html">background shorthand demo</a> in action.</p>

<p>The <code>background</code> shorthand used is as follows:</p>

<code><pre>background: url(&quot;content.svgz&quot;) no-repeat left top / 200px 70px scroll content-box content-box,
	    url(&quot;padding.svgz&quot;) no-repeat left top / 240px 110px scroll padding-box padding-box,
	    url(&quot;border.svgz&quot;) no-repeat left top / 280px 150px scroll border-box border-box white;</pre></code>

<h2 id="box-shadow"><code>box-shadow</code></h2>

<p>Box shadow allows shadow effects on elements. This property takes several values:</p>

<ul>
	<li>The first value indicates the horizontal offset of the shadow. You can use a negative value to put the shadow to the left of your box.</li>
	<li>The second value indicates the vertical offset. You can use a negative value to put the shadow above your box</li>
	<li>The third value is the blur radius. The bigger the value, the more blurred it is.</li>
</ul>

<p>Additionally, you can give the shadow <code>color</code>, <code>spread</code> and <code>offset</code> values. Let&#39;s look at some examples.</p>

<div style="color:#ffffff;background-color: #ccc;border: 3px solid #ffffff;padding: 15px;margin: 7px;box-shadow:10px 10px 20px #000;"></div>

<pre><code>box-shadow: 10px 10px 20px #000;</code></pre>

<div style="color:#ffffff;background-color: #ccc;border: 3px solid #ffffff;padding: 15px;margin: 7px;box-shadow:10px 10px 1px #000;"></div>

<pre><code>box-shadow: 10px 10px 1px #000;
/* Blur radius is set to just 1 */</code></pre>

<div style="color:#ffffff;background-color: #ccc;border: 3px solid #ffffff;padding: 15px;margin: 7px;box-shadow:10px 10px 20px #FE2E2E;border-radius:20px;"></div>

<pre><code>box-shadow: 10px 10px 20px #FE2E2E;
border-radius: 20px;
/* Sexied up with pink and border-radius */</code></pre>

<div style="color:#ffffff;background-color: #ccc;border: 3px solid #ffffff;padding: 15px;margin: 7px;box-shadow: 20px 20px 10px 10px #888;margin-bottom:20px"></div>

<pre><code>box-shadow: 20px 20px 10px 10px;
/* The spread value set to 10 pixels making the shadow bigger */</code></pre>

<div style="color:#ffffff;background-color: #ccc;border: 3px solid #ffffff;padding: 15px;margin: 7px;box-shadow:-10px -10px 20px inset;"></div>

<pre><code>box-shadow: -10px -10px 20px inset;
/* The inset value creates an inner shadow */</code></pre>

<p>To check whether you&#39;re looking at the correct <code>box-shadow</code> implementation, please see the <a href="http://people.opera.com/zibin/background/box_shadow.html">CSS3 <code>box-shadow</code> screenshots and example here</a>.</p>

<h3>Example</h3>

<p>If you like a kick in your tea, add some <code>box-shadow</code>, <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/">transforms, transitions</a>, <a href="http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/">RGBa</a>, query selectors and <code>:lang()</code>. Enjoy the steaming hot <a href="http://people.opera.com/pepelsbey/experiments/bsh/">CSS3 <code>box-shadow</code> effects by Vadim Makeev</a>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/box_shadow_Tea.png" width="620" height="408" alt="" />

<p class="comment">Figure 12: Teacup using <code>box-shadow</code> and other CSS3 effects</p>

<p class="note">The <code>box-shadow</code> property only works on Gecko and WebKit with a <code>-moz-</code> and <code>-webkit-</code> prefix, respectively.</p>

<h2 id="box-decoration-break"><code>box-decoration-break</code></h2>

<p>When laying out content in CSS, boxes can be broken into two or more pieces in a number of ways; in paged media such a print content is broken into page boxes when an element flows onto another page, when using CSS <a href="http://www.w3.org/TR/css3-multicol/">Multi-column layout</a> a box is broken when flowing from one column to the next, and for inline elements an inline box is broken into line boxes when flowing from one line to the next.</p>

<p>The <a href="http://www.w3.org/TR/css3-background/#the-box-decoration-break"><code>box-decoration-break</code> property</a> allows you to define how these boxes behave. The <code>slice</code> value is the default value and behaves as if you do not not specify the property or it is not supported. Properties such as <code>border-radius</code>, <code>box-shadow</code>, <code>border</code> and <code>padding</code> are not applied where the box breaks. The edge will be straight as if there was no special decoration, almost as if you cut the box cleanly into pieces, and places the pieces in position, such as the next line, page or column. See figure 13 for a visual demonstration of inline blocks with  <code>box-decoration-break: slice</code> applied.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/box-decoration-slice.png" width="540" height="111" alt="" />
<p class="comment">Figure 13: A screenshot showing <code>box-decoration-break: slice</code> applied to inline elements. This is default behaviour.</p>

<p>The <code>clone</code> value applies the <code>padding</code>, <code>border</code>, <code>border-radius</code>, <code>-o-border-image</code> and <code>box-shadow</code> to each box independently. This means that where the box breaks, such as at the start and end of a line, the <code>border</code>, <code>border-radius</code> and so on will be drawn, so that it looks like each box is its own element. If a background image is applied and set to <code>no-repeat</code>, it will be drawn once for each box See figure 14 for a visual demonstration of inline blocks with  <code>box-decoration-break: clone</code> applied.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/box-decoration-clone.png" width="540" height="102" alt="" />
<p class="comment">Figure 14: A screenshot showing <code>box-decoration-break: clone</code> applied to inline elements. Note how the <code>border-radius</code> and <code>box-shadow</code> is applied at the end and start of the line.</p>

<p>Check out the <a href="http://dev.opera.com/static/dstorey/boxes/box-decoration-break.html">box-decoration-break demo</a> in Opera 10.60 or above to see this in action.</p>

<h2 id="border-radius"><code>border-radius</code></h2>

<p>The highly-awaited <code>border-radius</code> has arrived! We can now create rounded corners for our elements, just like the ones below.</p>

<p><code>border-radius</code> is the shorthand for:</p>
<ul>
	<li><code>border-top-left-radius</code></li>
	<li><code>border-bottom-left-radius</code></li>
	<li><code>border-top-right-radius</code></li>
	<li><code>border-bottom-right-radius</code></li>
</ul>

<p>Let&#39;s dive into some examples.</p>

<div style="color:#ffffff;background-color: #ccc;border: 3px solid #ffffff;padding: 15px;margin: 7px;border-radius: 25px;">Four rounded corners</div>

<pre><code>border-radius: 25px;</code></pre>

<div style="color:#ffffff;background-color:#ccc;border: 3px solid #ffffff;padding: 15px;margin: 7px;border-bottom-left-radius: 40px;border-bottom-right-radius: 40px;">Two rounded corners</div>

<pre><code>border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;</code></pre>

<div style="color:#ffffff;background-color:#ccc;border: 3px solid #ffffff;padding: 15px;margin:7px;border-bottom-left-radius:40px;border-bottom-right-radius:40px;border-top-left-radius:10px;border-top-right-radius: 10px;">Four rounded corners, the bottom corners with a 40 pixel radius and the top corners with a 10 pixel radius</div>

<pre><code>border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;	
border-top-left-radius: 10px;
border-top-right-radius: 10px;</code></pre>

<div style="color:#ffffff;background-color:#ccc;border: 3px solid #ffffff;margin:7px;padding: 50px;color: white;border:  solid #ffffff;border-bottom-right-radius:120px;">One rounded corner with a radius of 120 pixels</div>

<pre><code>border-bottom-right-radius: 120px;</code></pre>

<div style="color:#ffffff;background-color:#ccc;border: 3px solid #ffffff;margin:7px;padding: 50px;color: white;border:  solid #ffffff;border-radius:120px 20px;">Four rounded corners, two with a radius of 20 pixels and the other two with a radius of 120 pixels</div>

<pre><code>border-radius: 120px 20px;</code></pre>

<div style="color:#ffffff;background-color:#ccc;border: 3px solid #ffffff;margin:7px;padding: 50px;color: white;border:  solid #ffffff;border-radius:120px / 20px;">Rounded corners with a radius of 120 pixels along the x-axis and 20 pixels along the y-axis</div>

<pre><code>border-radius: 120px / 20px;</code></pre>

<div style="color:#ffffff;background-color:#ccc;border: 3px solid #ffffff;margin:7px;padding: 50px;color: white;border:  solid #ffffff;background: url(japanese_tile.jpg);border-radius:30px;">Rounded corners with a background image</div>

<pre><code>background: url(image/japanese_tile.jpg);
border-radius: 30px;</code></pre>

<p>To check whether your browser supports <code>border-radius</code> correctly you can compare the original <a href="http://people.opera.com/zibin/background/border_radius.html"><code>border-radius</code> example</a> with the <a href="http://people.opera.com/zibin/background/border_radius_screenshot.html"><code>border-radius</code> screenshots</a>. Patrick Lauke and Vadim Makeev have created a <a href="http://people.opera.com/pepelsbey/experiments/bdr/"><code>border-radius</code> picker</a> that helps you to generate a one-liner <code>border-radius</code> code.</p>

<p class="note">Gecko still uses the <code>border-radius</code> properties with the <code>-moz-</code> prefix. Gecko also has an alternative syntax for non-shorthand values. These issues have been fixed in the latest nightlies of Firefox but have not yet reached a final release at the time of writing.</p>

<h2 id="border-image"><code>-o-border-image</code></h2> 

<p>Using the <code>-o-border-image</code> property, you can use an image to act as an element&#39;s border. Images can be set to <code>stretch</code>, <code>repeat</code> or <code>round</code>.</p>

<div style="border:10px;background:#0e0e0e;border-image: url(molecule.png) 50 repeat; -o-border-image: url(molecule.png) 50 repeat; padding:20px;">Border Image</div>

<pre><code>border-image: url(molecule.png) 50 stretch;</code></pre>

<div style="border:10px;background:#0e0e0e;border-image: url(molecule.png) 50 stretch; -o-border-image: url(molecule.png) 50 stretch;padding:20px;">Border Image</div>

<pre><code>-o-border-image: url(molecule.png) 50 stretch;</code></pre>

<p>The <code>stretch</code> and <code>repeat</code> values are fairly self-explanatory. The <code>round</code> value still repeats the image but compresses the image to fit the element width without showing only parts of the image itself. See Vadim Makeev&#39;s <a href="http://people.opera.com/pepelsbey/experiments/bdi/">animated showcase of CSS3&#39;s <code>border-image</code></a> to get an idea of how the effect works. Screenshots are shown below.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/border_image_stretch.png" width="200" alt="" />
<p class="comment">Figure 15: <code>-o-border-image: stretch</code> screenshot</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/323-css3-borders-backgrounds-and-boxes/border_image_repeat.png" width="200" alt="" />
<p class="comment">Figure 16: <code>-o-border-image: repeat</code> screenshot</p>

<p class="note">Opera 11.50 requires the -o- prefix for <code>border-image</code>. While the CSS3 Backgrounds and Borders module is fairly stable, the <code>border-image</code> spec has changed substantially since we implemented it (including becoming a short hand for a number of individual <code>border-image</code> properties). As such we introduced the vendor prefix until the implementation matches the new spec. It is no longer supported prefixless at the time of writing. WebKit and Gecko also currently require their respective prefix.</p>
  
<h2>Conclusion</h2>

<p>We hope you enjoyed reading and trying out these new CSS3 implementations. They run in Opera 11+, and other standards-aware browsers.</p>

<p>Credit goes to Daniel Davis and Patrick Lauke for their wonderful demos, and David Storey for his suggestions, ideas, and updating this article for the new features found in Opera 11.</p>code

<h2 id="readmore">Read more...</h2>
<ul>
  <li><a href="/articles/view/beautiful-ui-styling-with-css3-text-shadow-box-shadow-and-border-radius/">Beautiful UI styling with CSS3 text-shadow, box-shadow, and border-radius</a></li>
  <li><a href="/articles/view/css3-transitions-and-2d-transforms/">CSS3 transitions and 2D transforms</a></li>
</ul>
