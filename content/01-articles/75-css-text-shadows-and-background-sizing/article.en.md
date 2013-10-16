Title: CSS text shadows and background sizing
----
Date: 2008-02-21 01:09:40
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
<p>CSS3 offers advancements in how Web designers can apply design touches to their designs. One of the most often wished for properties - <code>text-shadow</code>, which allows easy creation of drop shadows - looks to be popular as new versions of popular browsers are starting to support the property.</p>

<p>I will also look at <code>background-size</code> - this is a CSS property that will let Web designers set the backgrounds of elements so that the background images can stretch or fill the entire background image, if widely implemented. </p>  

<p>Together both CSS properties can add unique twists to everyday Web design with minimal effort. In this article I will explore both of these, showing how they work with some simple examples. (<a href="code-examples.zip">you can download the code examples here</a>.) </p>

<h2>Bringing Light to Text Shadows</h2>

<p>Text shadows were first seen in the CSS 2 specification, but they didn&#39;t make into the 2.1 specification since browsers weren&#39;t supporting the property. Within the CSS 3 specification however the <code>text-shadow</code> property has made a reappearance. </p> 

<p>Let&#39;s take a look at a CSS rule that utilizes the <code>text-shadow</code> property to get a better idea of the values it accepts: </p>

<pre><code>h1 {
  text-shadow: #555 3px 3px 2px;
}</code></pre> 

<p>The first value sets the color for the shadow. In the example shown in Figure 1 (<a href="text-shadows01.html">text-shadows01.html</a>), the shortcut for the value <code>#555555 is being used. </code></p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/75-css-text-shadows-and-background-sizing/image1.gif" alt="A text shadow applied to the heading" />
<p class="comment">Figure 1: The <code>text-shadow</code> property applied to a heading. </p>

<p>The second value sets the x-coordinates for the shadow. The greater the value, the further away from the right of the text the shadow is placed. A negative value pulls the shadow to the left. </p> 

<p>In the Figure 2 (<a href="text-shadows02.html">text-shadows02.html</a>), a value of 20 pixels is used for the x-coordinate - this pulls the shadow to the right: </p> 

<pre><code>h1 {
  text-shadow: #555 20px 3px 2px;
}</code></pre>

<img src="http://forum-test.oslo.osa/kirby/content/articles/75-css-text-shadows-and-background-sizing/image2.gif" alt="The text shadow has moved to the right of the text" />
<p class="comment">Figure 2: The shadow moves to the right. </p>

<p>The third value sets the y-coordinates for the shadow. The greater the value, the further below the text the shadow is placed. A negative value pulls the shadow above the text. </p>

<p>In the Figure 3 (<a href="text-shadows03.html">text-shadows03.html</a>), a value of 20 pixels is used for the y-coordinate - this pulls the shadow down below the text:</p> 

<pre><code>h1 {
  text-shadow: #555 3px 20px 2px;
}</code></pre>

<img src="http://forum-test.oslo.osa/kirby/content/articles/75-css-text-shadows-and-background-sizing/image3.gif" alt="The text shadow has moved below the text" />
<p class="comment">Figure 3: The shadow moved to the bottom. </p>

<p>The last value sets the blur radius of the shadow. The greater the value, the more diffuse the blur effect.  In Figure 4 (<a href="text-shadows04.html">text-shadows04.html</a>), a value of 20 pixels is used for the blur radius: </p> 

<pre><code>h1 {
  text-shadow: #555 3px 3px 20px;
}</code></pre>


<img src="http://forum-test.oslo.osa/kirby/content/articles/75-css-text-shadows-and-background-sizing/image4.gif" alt="More blur on the text shadow" />
<p class="comment">Figure 4: A large diffuse drop shadow. </p>

<p>While the <code>text-shadow</code> property allows for an easy addition of a graphic effect to a Web page, some restraint should be applied. </p>

<p>For starters, the Web is two-dimensional medium. You shouldn&#39;t overdo it - adding cheesy Photoshop effects like beveling or shadows forces elements on a page to appear three dimensional. The greater the bevel or length of the drop shadow, the greater the trespass in the design, as these effects draw attention to the elements rather than letting the design as a whole communicate to the reader. </p>

<p>I&#39;d recommend one to two pixels depth at most for effects like text shadow. This touch gives a slight lift off the Web page, but doesn&#39;t attract too much attention to itself, letting the overall design of the page work as a whole. </p>  

<p>Lastly, make sure to bulletproof your design so that it takes into account browsers that don&#39;t support <code>text-shadow</code>. For example, don&#39;t set the color of the headline text to be the same as the background otherwise browsers that don&#39;t support the <code>text-shadow</code> property will appear to display a blank area, as shown in Figure 5, leaving your site&#39;s visitors without legible text. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/75-css-text-shadows-and-background-sizing/image5.gif" alt="No text shadow in Firefox" />
<p class="comment">Figure 5: The heading appears gone in the Firefox browser. </p>
<h3>Support for Text-Shadow</h3>
<p>Modern browsers are including support for text-shadow includes Safari 3 and Opera 9.5. </p>

<p>There are methods discussed <a href="http://www.workingwith.me.uk/articles/css/cross-browser-drop-shadows">elsewhere</a> that go into detail on how to get a cross-browser support for text-shadow in other browsers like Firefox and Mozilla through a mixture of CSS hacks, pseudo-elements and proprietary filters. Those methods however seem rather excessive for such a simple effect and not as graceful as a cut and dry CSS3 property. </p> 

<h2>The Story on Background Sizing</h2>
<p>As Web designers, it&#39;s important to make sure every image is properly optimized and sized before a site goes live. These extra steps help to keep file sizes low and speeds browser rendering times, but the Web isn&#39;t a pixel perfect medium.</p>

<p>As elements can be resized, perfectly sized background images can show their edges. These are times when stretching or filling an element&#39;s background image would be most helpful as shown in Figure 6 (<a href=" background-sizing01.html">background-sizing01.html</a>.) </p>  

<img src="http://forum-test.oslo.osa/kirby/content/articles/75-css-text-shadows-and-background-sizing/image6.gif" alt="This background image is overrun by text" />
<p class="comment">Figure 6: The background image is overrun by text. </p>

<p>In CSS3, there&#39;s a property that can help do just that: <code>background-size</code>. It should probably be called &quot;background-stretching&quot; instead, since it can expand an image to fill the background of an element as shown in Figure 7 (<a href=" background-sizing02.html">background-sizing02.html</a>): </p>

<pre><code>div {
  background-image: url(bkgd_col.png);
  background-size: 100% auto;
  background-repeat: repeat-y;
  border: 1px solid #466900;
}</code></pre>

<img src="http://forum-test.oslo.osa/kirby/content/articles/75-css-text-shadows-and-background-sizing/image7.gif" alt="The image resizes to the width of the element" />
<p class="comment">Figure 7: The background image resizes to the width of the element. </p>

<p>The first value for the <code>background-size</code> property sets the width and the second one sets the height. If there is only one value, its value is applied to both the width and height. The <code>background-size</code> property accepts percentage and length values as well as <code>auto</code>.</p> 

<p>An interesting effect is to tile out the images perfectly in the background. In this example, the backgrounds are set to place two copies of the image side-by-side as shown in Figure 8 (<a href=" background-sizing03.html">background-sizing03.html</a>).</p>

<pre><code>body {
  background-image: url(starstripes.png);
  background-size: 50% auto;
  background-repeat: repeat-x;
  margin-top: 30%;
}</code></pre>


<img src="http://forum-test.oslo.osa/kirby/content/articles/75-css-text-shadows-and-background-sizing/image8.gif" alt="Background sizing in action" />
<p class="comment">Figure 8: Perfectly placing two images in the background.</p>

<p>What&#39;s happening is that the first value of background-size splits the width of an element in half and tells the browser to showcase two images in the available space. The second value of auto tells the browser to use as much space as needed for the height so that the aspect ratio of the image is kept in place.</p>

<p>A word of warning: when using raster images like GIF, JPEG or PNGs, images will start to look jagged as they resize. (One day all browsers will support SVG and it will be a beautiful thing.)</p> 

<h3>Support for Background Size</h3>

<p>Currently, support for <code>background-size</code> is limited to Safari 3 and Opera 9.5. And in order to use the property in those browsers, proprietary CSS property values need to be used: <code>-o-background-size</code> and <code>-webkit-background-size</code>.  The following declaration block would be used in order to get the greatest support from browsers side by side at present: </p>

<pre><code>body {
  background-image: url(starstripes.png);
  background-size: 50% auto;
  -o-background-size: 50% auto;
  -webkit-background-size: 50% auto;
  background-origin: border;
  background-repeat: repeat-x;
  margin-top: 30%;
}</code></pre>

<p>As the CSS3 spec solidifies, the proprietary values should be removed, and replaced with the single standard value. </p>

<h2>In Conclusion</h2>
<p>While not fully supported in most browsers, the future of CSS3 holds much promise. With the adoption of new CSS3 properties, Web designers can look to making their designs more visually interesting and, hopefully, a little easier to produce. </p> 
    
