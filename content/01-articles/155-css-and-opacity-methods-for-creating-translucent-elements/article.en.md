Title: CSS and opacity: methods for creating translucent elements
----
Date: 2008-08-15 13:25:15
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
	<p>There are two general methods for creating partially transparent elements on a Web page. The first method uses transparent PNGs with the opacity pre-set through a digital imaging application. While this technique works, making it cross-browser compatible is a bit complicated. Internet Explorer 6 and below don’t support PNG alpha-transparency natively, so you need to incorporate <a href="http://christopherschmitt.com/2007/10/30/png-transparency-for-internet-explorer-ie6-and-beyond/">Microsoft’s <code>AlphaImageLoader</code> filter and some scripting</a> to correct for this deficiency.</p>
	<p>The second method for creating translucent elements—the technique we’ll explore in this article—is to use CSS properties to directly control the transparency of an element. </p>
	<p>While this method has drawbacks of its own, it does enjoy advantages over the PNG technique: It is much  simpler—not only are you directly manipulating the transparency of an element and you need not load external images, but also you don’t need to mess with Microsoft’s complicated AlphaImageLoader filter. Although use of another, less convoluted filter is necessary. </p>

<p>Throughout the course of this article, I’ll be taking you through some examples to demonstrate how to use opacity techniques on Web pages—to help follow along with these examples, you can <a href="opacity_examples.zip">download all the example files</a>.</p>

	<h2>The CSS opacity property</h2>
	<p>CSS3 has a <a href="http://www.w3.org/TR/css3-color/#transparency">specific property</a> that controls the transparency of an element, aptly named &quot;opacity&quot;. It takes as its value a number from zero to one, representing the degree to which the element is opaque. A value of zero means completely transparent and one means completely solid.</p>
	<p> To demonstrate this property using a simple example, let’s create a couple of boxes using CSS. After creating two divs, and setting their dimensions, color, and position in the browser window using CSS, we end up with the example shown in Figure 1: </p>
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/155-css-and-opacity-methods-for-creating-translucent-elements/css-opacity_stacked-elements.png" width="593" height="506" /></p>
	<p class="comment">Figure 1. Stacked elements</p>

<p>Now, let’s make box &quot;B&quot; partially transparent by setting the opacity property:</p>

<pre>#boxB {
  opacity: .3;
}</pre>

<p>Here, we’ve made it 30% opaque, and end up with a translucent box example as shown in Figure 2: </p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/155-css-and-opacity-methods-for-creating-translucent-elements/css-opacity_30-opaque.png" width="593" height="506" /></p>
<p class="comment">Figure 2. See through element when its opacity setting is lowered</p>

<p>Suppose we’ve decided the box is a little more transparent than we’d like. Then, we can just adjust the level of opacity:</p>

<pre>#boxB {
  opacity: .7;
}</pre>

<p>Now, the box in the example is a bit more opaque (at 70%), as shown in Figure 3:</p>
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/155-css-and-opacity-methods-for-creating-translucent-elements/css-opacity_70-opaque.png" width="593" height="506" /></p>
	<p class="comment">Figure 3. Increasing the value of the opacity</p>
	
	  <p class="note">Why do we use decimal numbers and not percentages which are used in other properties? As mentioned in a <a href="http://lists.w3.org/Archives/Public/www-style/2002Mar/0062.html">correspondance with Tantek &#xC7;elik</a>, who was Microsoft’s primary representative to the HTML and CSS working groups at the W3C at the time, the thought was that percentages might be too confusing especially with regard to parent elements and inheritance. So, using a new unit value was put in place to help alleviate those concerns and retain some clarity.</p>

	<p>While this property has great potential, it is still an experimental property that is not officially recommended by the W3C. However, most modern browsers support the <code>opacity</code> property, including Firefox 1.5+, Safari 1.2+, and Opera 9+. Internet Explorer 7 doesn’t support the property and it does not look like the upcoming IE8 will support it either—although that’s based on testing the first beta, which is the latest version available as of this writing.</p>
	<p>So, how do we ensure cross-browser compatibility for partially transparent elements? Fortunately, Internet Explorer and Mozilla-based browsers such as Firefox and Netscape Navigator came with their own browser-specific, proprietary properties that allow us to replicate the opacity property just illustrated. the Mozilla one no longer needs to be used, as it now has full support for the proper <code>opacity</code> property; for Internet Explorer 5.5 and up we need to use its <code>filter</code> property, which is capable of creating various effects such as shadows and gradients in IE browsers. To manipulate and element’s transparency, use the alpha filter, and pass through it an opacity value between 0 and 100:</p>

<pre>#boxB {
  filter: alpha(opacity=30);
}</pre>
	<h2>A cross-browser solution </h2>
	<p>Now, let’s work through an example that functions in most modern browsers. </p>
	<p>First, we’ll create a simple Web page, as shown in Figure 4, that includes two main <code>div</code>s: a &#x201C;content&#x201D; <code>div</code> that displays a boat image in the background, and a white overlay that includes a serene quote from <em><a href="http://en.wikipedia.org/wiki/Tao_Te_Ching">The Tao Te Ching</a></em>:</p>

<pre>&lt;div id=&quot;content&quot;&gt;
  &lt;div id=&quot;quotebox&quot;&gt;
    &lt;div id=&quot;quote&quot;&gt;
      &lt;p&gt;Be content with what you have; rejoice in the way things are.&lt;/p&gt;
      &lt;p&gt;When you realize there is nothing lacking, the whole world belongs to you.&lt;/p&gt;
      &lt;p&gt;&lt;em&gt;&amp;mdash; Lao Tzu&lt;/em&gt;&lt;/p&gt;
    &lt;/div&gt;&lt;!-- end #quote --&gt;
  &lt;/div&gt;&lt;!-- end #quotebox --&gt;
&lt;/div&gt;&lt;!-- end #content --&gt; </pre>

    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/155-css-and-opacity-methods-for-creating-translucent-elements/css-opacity_default-rendering.png" width="846" height="687" /></p>
	<p class="comment">Figure 4. The default rendering</p>
	<p>Suppose we want to make the white overlay partially transparent, so that the boat image is visible behind it. To do this, add all three of our opacity properties to the relevant CSS selector. In this example, the &#x201C;quotebox&#x201D; <code>div</code> encloses the overlay: </p>

<pre>#quotebox {
  opacity: .4;
  filter: alpha(opacity=40);
}</pre>

	<p>We use all three properties here to ensure that the transparency effect works in as many browsers as possible. We end up with a barely-opaque overlay in our Web page, as shown in Figure 5:</p>
	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/155-css-and-opacity-methods-for-creating-translucent-elements/css-opacity_all-transparent.png" width="846" height="687" /></p>
	<p class="comment">Figure 5. The transparent quote</p>
	<p>While the overlay itself looks good, notice that the quotation text is transparent as well. This is because the opacity properties are inherited by all child elements. In this example, the &quot;quote&quot; <code>div</code> encloses the quotation. We can try to override this inherited transparency by resetting the opacity in the quote div: </p>

<pre>#quote {
font-size: 32px;
color: #000;
opacity: 1;
filter: alpha(opacity=100);
}</pre>
	<p>Unfortunately, this technique doesn’t work in many browsers, and you’ll still end up with unreadable text! </p>
	<p>So, the rather imperfect solution to this problem is to make the overlay opaque enough that the enclosed text is still readable, as shown in Figure 6:</p>

<pre>#quotebox {
  opacity: .65;
  filter: alpha(opacity=65);
}</pre>

	<p><img src="http://forum-test.oslo.osa/kirby/content/articles/155-css-and-opacity-methods-for-creating-translucent-elements/css-opacity_final-example.png" width="846" height="687" /></p>
	<p class="comment">Figure 6. The quote with improved contrast for better legibility</p>
	<p>Now, the overlay is still nicely translucent, and we can comfortably read the text. While this doesn’t provide the versatility we might want in our design, it is a manageable solution until browser support catches up with this fairly new CSS property.</p>
	<h2>Drawbacks</h2>
	<p>While we have a fairly elegant way to ensure cross-compatibility of element transparency, there are a couple of drawbacks to this technique. </p>
	<p>Besides the inheritability problem mentioned above, the CSS we’ve created is not standards-compliant.  CSS3 properties are not recommended yet, although the <a href="http://jigsaw.w3.org/css-validator/#validate_by_uri+with_options">CSS validator can optionally validate CSS3</a>, and the other two are proprietary properties not recognized by the W3C.</p>
	<p>So, if it is important for your code to be valid—and there are many considerations to recommend it—then this method is not for you. However, if you are looking for a simple solution that works on most browsers until W3C recommendations and modern browsers catch up to CSS3, then this technique for creating partially-transparent elements may be the one you’re looking for. </p>

<h2>transparent future</h2>

While <code>opacity</code> is a widely implemented part of the CSS 3 Color Module, that specification also includes additional ways to control transparency through CSS.  It is now possible to specify an alpha channel to the familiar RGB color model and the new HSL color model.  These color models with alpha channels added are called RGBA and HSLA respectively.

The alpha channel is specified as the last value of the RGBA or HSLA value, and works much the same way as opacity, with a value between 0 (fully transparent) and 1 (fully opaque).  For example, the RGBA value <code>rgba(255, 0, 0, 0.5)</code> is red that is half transparent, half opaque.  The difference between opacity and these two new color models is that opacity is applied to the whole element, so the text, background and border will all take the specified opacity.  In RGBA and HSLA, it only applies to the property it is specified on, so you can make the background have transparency while keeping the text fully opaque for example.

Both HSLA and RGBA are implemented in the next version of Opera’s rendering engine, Core-2.2, and can be previewed in the <a href="http://labs.opera.com/news/2008/03/28/">Opera ACID3 build</a> on Opera Labs.  Support is also included in Safari 3+ and Firefox 3+.
