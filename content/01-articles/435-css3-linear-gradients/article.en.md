Title: CSS3 linear gradients
----
Date: 2011-03-17 07:21:17
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

<div class="note">
<h2>Article update: 12th December 2012</h2>
<p>The article has been updated to cover the gradient syntax covered in the (at the time of writing) latest <a href="http://dev.w3.org/csswg/css3-images/#linear-gradients">Image Values and Replaced Content Module Level 3</a> specification, dated June 12th 2012.</p>
</div>	
	<h2>Introduction</h2>
	
	<p>For as long as we can remember, we have used colour gradients on the Web to brighten things up, and add class to designs. If you want to create a fantastic looking button, panel, gauge, progress bar or other UI feature, a gradient is the way to go.</p>
	
	<p>Up until now, we have always used repeated background images to create gradient effects. The CSS is simple, and creating a gradient using Photoshop, Fireworks, or another graphics tool is not hard. However, doing it this way is rather inflexible, given that if you want to vary the colour scheme or other features of the gradient, you need to go back to your graphics tool and create another image! Wouldn&#39;t it be better if you had complete control over the gradients using CSS?</p>
	
	<p>CSS3 comes to the rescue with the <a href="http://www.w3.org/TR/2011/WD-css3-images-20110217/">CSS Image Values and Replaced Content Module Level 3</a>: part of this module defines CSS gradients, which allow us to create any gradients we want using only CSS. In this article I will explore how to use linear and repeated linear gradients, which are supported across Opera 11.10+, Firefox 3.6+, Safari 5.03+ and Chrome 7+.</p>
	
	<p class="note">Note: <a href="http://dev.w3.org/csswg/css3-images/#radial-gradients">Radial gradients</a> are covered in the article <a href="http://dev.opera.com/articles/view/css3-radial-gradients/">CSS3 radial gradients</a>.</p>
	
	<h2>Creating gradients</h2>
	
	<p class="note">I have included some simple examples for you to play with in my <a href="linear-gradient-demo.html">linear gradients demo</a>. Download this example and play with different values as you read through the sections below.</p>
	
	<p>To create a basic linear gradient, you need to provide a start point and an end point, like so:</p>
	
	<pre><code>background-image: linear-gradient(rgb(100,100,100),rgb(200,200,200));</code></pre>
	
	<p>This creates a simple gradient that goes from a darker grey at the top of the element the gradient is applied to, down to a lighter grey at the bottom, as seen in Figure 1. Here I&#39;m applying it to a simple article element, but you can apply it to any block level element you like.</p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/435-css3-linear-gradients/css-linear-gradient_example.png" alt="a really basic CSS3 linear gradient" /></p>
	<p class="comment">Figure 1: A really basic CSS3 linear gradient.</p>
	
<p>So why is the gradient applied as a background image and not a background colour, which might seem more appropriate? This is because of flexibility and familiarity. We always used to apply gradients using CSS background images, plus now you can use CSS multiple backgrounds to layer multiple images on top of gradients, if you like.</p>

<p>Because gradients are background images however, you can — and should — specify a fall back background-color. Imagine your page has a white background, and you have a button with a gradient background and white text above it. To prevent older browsers displaying white text on the white background of the page, you can give your button a <code>background-color: gray</code> so the text remains readable and the button doesn&#39;t appear broken.  In modern browsers, the gradient will hide the color.</p>
	
	<h3>Varying the gradient angle</h3>
    
    <p>In the first example, we didn&#39;t specify any kind of direction or angle, and the gradient went from the top of the block to the bottom. This is the default, and is equivalent to writing this:</p>
    
    <pre><code>background-image: linear-gradient(<strong>to bottom,</strong>rgb(100,100,100),rgb(200,200,200));</code></pre>
    
    <p>So the angle goes at the start of the gradient information, separated by the colours by a comma. You can make the gradient go across the block from the top, bottom, left or right, by changing the keywords appropriately as seen in figure 2.</p>
    
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/435-css3-linear-gradients/css-linear-gradient_angles.png" alt="Altering the angle keyword between to bottom, to top, to right, and to left, respectively" /></p>
	<p class="comment">Figure 2: altering the angle keyword between <code>to bottom</code>, <code>to top</code>, <code>to right</code>, and <code>to left</code>, respectively.</p>
	
	<p>You can also use values of <code>to top left</code>, <code>to top right</code>, <code>to bottom left</code> and <code>to bottom right</code>: these make the gradient start from that corner, and run towards the opposite corner of the box.</p>
	
	<p>The other way to set gradient angles is through a degree value, for example:</p>
	
	<pre><code>background-image: linear-gradient(<strong>0deg,</strong>rgb(100,100,100),rgb(200,200,200));</code></pre>
	
	<ul>
	  <li><code>0deg</code> is equivalent to <code>to top</code>.</li>
	  <li><code>90deg</code> is equivalent to <code>to right</code>.</li>
	  <li><code>180deg</code> is equivalent to <code>to bottom</code>.</li>
	  <li><code>270deg</code> is equivalent to <code>to left</code>.</li>
	  <li><code>360deg</code> brings you back to <code>to top</code> again.</li>
	  </ul>
	  
	  <p>This gives you a good idea of how the degree values work. Try playing with them and seeing what you come up with!</p>
	
	<h2>Colour stops</h2>
	
	<p>A colour stop is simply a position along the gradient that has a specific colour. You can specify as many colours as you like along a gradient, and the browser will calculate all the colours between those stops. Let&#39;s look at an example, which creates a gradient running from top left to bottom right, changing colour from a lighter red to a darker red:</p>
	
	<pre><code>background-image: linear-gradient(to bottom right,rgb(255,0,0),rgb(150,0,0));</code></pre>
	
	<p>This is equivalent to the following:</p>
	
	<pre><code>background-image: linear-gradient(to bottom right,rgb(255,0,0) 0%,rgb(150,0,0) 100%);</code></pre>
	
	<p>So here we have one colour stop at 0%, and one at 100% of the way across the block the element is applied to. But there is no point writing these, as this is the default. Instead, it is a lot more useful to add colour stops in between the start and end. For example:</p>
	
	<pre><code>background-image: linear-gradient(to bottom right,rgb(255,0,0),rgb(100,0,0) 50%,rgb(50,0,0) 75%,rgb(150,0,0));</code></pre>
	
	<p>Here we are starting with a really light red, then going to a darker red at 50%, an even darker one at 75%, and then then a slightly lighter one at 100%. This gives us the result shown in Figure 3.</p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/435-css3-linear-gradients/css-linear-gradient_multiple-stops.png" alt="a linear CSS gradient with multple colour stops" /></p>
	<p class="comment">Figure 3: A linear CSS gradient with multiple colour stops.</p>
	
	<p>Doing it with percentages is really cool, and shows how versatile CSS gradients are. The conditions in the code will always be true, even if you have a liquid layout where the box the gradient is applied to changes width or height as the browser window is resized.</p>
	
	<p>If you want to, you can also use pixels or other fixed CSS unit values instead of the percentages. For example:</p>
	
	<pre><code>background-image: linear-gradient(to bottom right,rgb(255,0,0),rgb(100,0,0) 100px,rgb(50,0,0) 200px,rgb(150,0,0));</code></pre>
	
	<p>This means the colour stops will always occur 100 and 200 pixels from the start of the gradient, regardless of how much you resize the browser window. You can vary the position of the beginning and end colour stops as well if you want - they don&#39;t need to appear at the beginning and end of the block! In such a case, the space before the beginning colour stop will be a solid block of that colour, and the space after the end colour stop will be a solid block of the end colour. For example, try something like:</p>
	
	<pre><code>background-image: linear-gradient(90deg,rgb(100,100,100) 50% ,rgb(200,200,200) 75%);</code></pre>
	
	<p>and you&#39;ll get something like Figure 4.</p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/435-css3-linear-gradients/css-linear-gradient_colour-stops.png" alt="Moving the start and end colour stops." /></p>
	<p class="comment">Figure 4: Moving the start and end colour stops.</p>
	
	<h3>Transparency gradients</h3>
	
	<p>One really cool technique to consider is varying the alpha channel value of the colour along the gradient. For example:</p>
	
	<pre><code>background-image: linear-gradient(to right,rgba(100,100,100,1),rgba(100,100,100,0.5));</code></pre>
	
	<p>Here we are using RGBA colours, with an alpha channel value of 1 at the start of the gradient, and 0.5 at the end. I&#39;ve not touched the red, green and blue values, but I&#39;ve ended up with a really cool effect as shown in Figure 5.</p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/435-css3-linear-gradients/css-linear-gradient_transparency.png" alt="Varying transparency along a gradient to give a cool semi-seethrough effect." /></p>
	<p class="comment">Figure 5: Varying transparency along a gradient to give a cool semi-seethrough effect.</p>
	
	<h2>Repeating linear gradients</h2>
	
	<p>Instead of <code>linear-gradient</code>, you can use <code>repeating-linear-gradient</code>: this takes the colour stop values and repeats them endlessly. It doesn&#39;t make much sense to do this with percentage values, but with pixels and other units, it can create some cool effects. For example:</p>
	
	<pre><code>background-image: repeating-linear-gradient(70deg,rgb(255,0,0),rgb(100,0,0) 20px, rgb(255,0,0) 40px);</code></pre>
	
	<p>Here we are starting at a bright full red, moving to a darker red after 20 pixels, then moving back to the full red at 40 pixels. Then, because it is a repeating gradient, it keeps repeating this pattern until the end of the block. The above example looks something like Figure 6.</p>
	
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/435-css3-linear-gradients/css-linear-gradient_repeating.png" alt="A repeating gradient example" /></p>
	<p class="comment">Figure 6: A repeating gradient example.</p>

              <h2>Browser support, and old syntax</h2>

<p>Note that the newest versions of Opera, Firefox and IE all support the current syntax of linear gradients, without prefixes, while WebKit-based browsers still require the old syntax. For compatibility with older browser versions and -Webkit- versions, you should consider including vendor prefixes versions of the property, all including the older syntax. This is basically the same, except:</p>

<ul>
  <li>The direction keywords are the opposite way round and don&#39;t include the word <code>to</code>. So <code>top left</code> is equivalent to <code>to bottom right</code>, <code>bottom</code> is equivalent to <code>to top</code>, and so on.</li>
  <li>When signifying angles for directions, you need to do some recalculation, as <code>0deg</code> used to mean horizontal towards the right (equivalent to <code>left</code>), and now it means vertical and upwards (equivalent to <code>to top</code>).
</li></ul>

<p>So a full cross browser block that also looks after older browser syntax would something like this:</p>

<pre><code>background-image: -webkit-repeating-linear-gradient(20deg,rgb(255,0,0),rgb(100,0,0) 20px, rgb(255,0,0) 40px);
  background-image: -moz-repeating-linear-gradient(20deg,rgb(255,0,0),rgb(100,0,0) 20px, rgb(255,0,0) 40px);
  background-image: -ms-repeating-linear-gradient(20deg,rgb(255,0,0),rgb(100,0,0) 20px, rgb(255,0,0) 40px);
  background-image: -o-repeating-linear-gradient(20deg,rgb(255,0,0),rgb(100,0,0) 20px, rgb(255,0,0) 40px);
  background-image: repeating-linear-gradient(70deg,rgb(255,0,0),rgb(100,0,0) 20px, rgb(255,0,0) 40px);
}</code></pre>	

	<h2>More involved examples</h2>
	
	<p>My Opera team mate Vadim Makeev over in St. Petersburg has created a really cool <a href="http://people.opera.com/pepelsbey/experiments/apple-menu/">Apple button menu example</a>, see Figure 7.</p>
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/435-css3-linear-gradients/css-linear-gradient_apple-menu-button.png" alt="Cool push buttons created using CSS dropshadows and gradients" /></p>
	<p class="comment">Figure 7: Cool push buttons created using CSS drop shadows and gradients.</p>
	
	<p>The explanation he includes below the example makes it very easy to see how it&#39;s done, and this just shows what cool things we can now produce with nothing but a little bit of CSS sparkle.</p>
	
	<p class="note">Lea Verou also has some nice CSS gradient examples available, such as <a href="http://lea.verou.me/2010/12/checkered-stripes-other-background-patterns-with-css3-gradients/">Checkerboard, striped &amp; other background patterns with CSS3 gradients</a> and <a href="http://lea.verou.me/2011/03/beveled-corners-negative-border-radius-with-css3-gradients/">Beveled corners &amp; negative border-radius with CSS3 gradients</a>.</p>
	
	<h2>Summary</h2>
	
	<p>And thus ends our brief foray into linear CSS gradients. I hope you found this article useful, and I&#39;m looking forward to seeing how you make use of this great new feature!</p>

<h2 id="readmore">Read more...</h2>
<ul>
  <li><a href="/articles/view/css3-radial-gradients/">CSS3 radial gradients</a></li>
  <li><a href="/articles/view/css3-border-background-boxshadow/">CSS3 borders, backgrounds and boxes</a></li>
</ul>
