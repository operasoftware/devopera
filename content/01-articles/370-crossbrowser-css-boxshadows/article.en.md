Title: Cross-browser CSS box-shadows
----
Date: 2010-07-15 12:10:51
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

<h2 id="introduction">Introduction</h2>

<p>Drop shadows are often used in web and print design to give elements more depth. Creating drop shadows for the Web used to require multiple images, created in image editing software and then attached to the page as CSS background images. This approached worked, but as well as being labour-intensive in terms of creating the necessary graphics, it also required bloating your markup with nested divisions, as each element could only have one image attached to it.</p>

<p>CSS3 now provides us with the <code>box-shadow</code> property, which can be used to create multiple shadows on any block level element programmatically. This saves a lot of time spent in image editing software and removes those nasty nested divs, but it isn&#39;t supported by Internet Explorer, so what is best for us to do?</p>

<p>In this article I will take you through a possible cross-browser solution &#x2014; a <code>box-shadow</code>-based technique that also provides fallbacks for IE using IE-filters. I won&#39;t discuss basic syntax or usage of this property, as it is already covered nicely in <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow">CSS3 borders, backgrounds and box-shadows</a>.</p>

<h2>Contents:</h2>

<ul>
	<li><a href="#internalSupport">Native support in browsers</a></li>
	<li><a href="#ieAnalog">IE Filters</a></li>
	<li><a href="#IEandNormal">Creating the drop shadow in IE and in other browsers</a></li>
	<li><a href="#inner">Inner shadow</a></li>
	<li><a href="#realization">Putting the example together</a></li>
	<li><a href="#summary">Summary</a></li>
</ul>

<p class="note">EDITOR&#39;S NOTE: A few of you may be wondering what we are doing publishing an example that makes use of IE Filters? After all, they can slow down the page a lot, and they are a proprietary, IE-specific, non-open standard. CSS3 properties can handle a lot of the typical IE filter use cases. Well, this is great if you don&#39;t particularly need the drop-shadows in IE (9 will support <code>box-shadow</code>, but 8 and below don&#39;t), and/or want to add a JavaScript solution. But what if you absolutely need UI consistency across all browsers and want it to work without JavaScript? We absolutely do not condone widespread use of IE filters, but taking a pragmatic view, this is a good cross-browser solution for certain situations.</p>
	
<h2 id="internalSupport">Native support in browsers</h2>
<p>The CSS3 <code>box-shadow</code> property has good support across most modern browsers, although for cross-browser support you currently need to use all of the following variants of the property:</p>
<ul>
	<li>For support in Opera and IE9 and higher you need to include the official W3C variant of the property, without prefixes: <code>box-shadow</code></li>
	<li>For support in Firefox you need to include a <code>-moz-</code> vendor-prefixed version: <code>-moz-box-shadow</code></li>
	<li>For support in WebKit-based browsers (eg Google Chrome and Apple Safari) you need to include a <code>-webkit-</code> vendor-prefixed version: <code>-webkit-box-shadow</code></li>
	<li>IE up to version 8 does not support the property at all, so you will have to either settle for a site without the shadows or develop a workaround &#x2014; my solution is covered below.</li>
</ul>

<p>Browser support summary (as of July 2010):</p>

<table style="border-collapse:separate;border-spacing:2px;background:transparent">
<thead>
	<tr style="color:#fff">
		<td></td>
		<th style="text-align:center;background:#233D61">Internet Explorer</th>
		<th style="text-align:center;background:#A36223">Firefox</th>
		<th style="text-align:center;background:#666666">Safari</th>
		<th style="text-align:center;background:#3F77BB">Chrome</th>
		<th style="text-align:center;background:#812323">Opera</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td style="background:#eee">Far past</td>
		<td style="background:#FF9999">6.0</td>
		<td style="background:#FF9999">3.0</td><td style="background:#CCFF99">3.2</td><td style="background:#CCFF99">3.0</td><td style="background:#FF9999">9.6</td>
	</tr>
	<tr>
		<td style="background:#eee">Past</td>
		<td style="background:#FF9999">7.0</td>
		<td style="background:#CCFF99">3.5</td>
		<td style="background:#CCFF99">4.0</td>
		<td style="background:#CCFF99">4.0</td>
		<td style="background:#FF9999">10.10</td>
	</tr>
	<tr class="now">
		<td style="background:#eee">Present</td>
		<td style="background:#FF9999" rowspan="2">8.0</td>
		<td style="background:#CCFF99" rowspan="2">3.6</td>
		<td style="background:#CCFF99" rowspan="2">5.0</td>
		<td style="background:#CCFF99" rowspan="2">5.0</td>
		<td style="background:#CCFF99" rowspan="2">10.60</td>
	</tr>
	<tr class="near">
		<td style="background:#eee">Near future (late 2010)</td>
	</tr>
	<tr class="far">
		<td style="background:#eee">Future (beyond late 2010)</td>
		<td style="background:#CCFF99">9.0</td>
		<td style="background:#CCFF99">4.0</td>
		<td style="background:#CCFF99">5.*</td>
		<td style="background:#CCFF99">6.0</td>
		<td style="background:#CCFF99">11.0</td>
	</tr>
</tbody>
</table>
<div>
	<div style="float:left">
		<div style="background:#CCFF99;display:-moz-inline-stack;display:inline-block;*display:inline;zoom:1;vertical-align:middle;width:70px;height:20px"></div>
		&#x2014; Supported
	</div>
	<div style="float:left;padding:0 0 0 40px">
		<div style="background:#FF9999;display:-moz-inline-stack;display:inline-block;*display:inline;zoom:1;vertical-align:middle;width:70px;height:20px"></div>
		&#x2014; Not supported
	</div>
	<br style="clear:both" />
</div>
<p />
<p class="note">Data about IE9 taken from IE9 Developer Preview 3.</p>

<h2 id="ieAnalog">IE filters</h2>
<p>I have learnt a lot about CSS-filters in IE recently. First of all, the
<a href="http://msdn.microsoft.com/en-us/library/ms532979(VS.85).aspx" target="_blank">blur filter</a> allows you to blur elements in IE.
Let&#39;s start with a simple <code>&lt;div&gt;</code> element:</p>
<pre><code>&lt;div style=&quot;background:blue;height:100px;width:100px;&quot;&gt;&lt;/div&gt;</code></pre>

<p>This looks like Figure 1.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/370-crossbrowser-css-boxshadows/IEbefore.png" width="169" height="169" alt="Just blue layer" title="" /></p>
<p class="comment">Figure 1: A simple <code>&lt;div&gt;</code> element with fixed dimensions.</p>

<p>We can give this a blur radius of 5 pixels in IE using the following filter:</p>
<pre><code>&lt;div style=&#39;background:blue;height:100px;width:100px;
  filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);
  -ms-filter:&quot;progid:DXImageTransform.Microsoft.Blur(pixelradius=5)&quot;;&#39;&gt;
&lt;/div&gt;</code></pre>

<p>This gives the effect shown in Figure 2 when applied to our example.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/370-crossbrowser-css-boxshadows/IEblured.png" width="169" height="169" alt="Blue layer with blur in Internet Explorer" title="" /></p>
<p>Figure 2: Our simple <code>&lt;div&gt;</code> element with a blur filter applied.</p>

<h2 id="IEandNormal">Creating the drop shadow in IE and in other browsers</h2>

<p>We can use this to create box-shadows in IE. I will include a &quot;ghost&quot; <code>&lt;div&gt;</code> element the same size as the content we want
to put a shadow on. In browsers that do support <code>box-shadow</code>, it will be hidden off screen.
In IE, it will be given a blur and positioned behind the content block to act as a drop shadow.</p>

<p>The drop shadow is made in modern browsers using the following (X)HTML and CSS:</p>

<pre><code>&lt;!-- (X)HTML --&gt;
&lt;div class=&quot;baseBlock&quot;&gt;&lt;/div&gt;

/* CSS */
.baseBlock{
    height:100px;
    width:100px;
    background:#f9f;
    box-shadow:10px 10px 5px #000;
    -moz-box-shadow:10px 10px 5px #000;
    -webkit-box-shadow:10px 10px 5px #000;
}</code></pre>

<p>To replicate this effect in IE, we include a special &quot;ghost&quot; <code>&lt;div&gt;</code> element, which is defined like so:</p>

<pre><code>&lt;!-- (X)HTML --&gt;
&lt;div class=&quot;ieBlock&quot;&gt;&lt;/div&gt;

/* CSS */
.ieBlock{
    height:100px;
    width:100px;
    background:#000;
    filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=10);
    -ms-filter:&quot;progid:DXImageTransform.Microsoft.Blur(pixelradius=10)&quot;;
}</code></pre>

<p>The result of this is shown in Figure 3:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/370-crossbrowser-css-boxshadows/ieShadowForComparison.png" width="189" height="189" alt="CSS box-shadow in IE" title="" /></p>
<p class="comment">Figure 4: The IE drop shadow, shown on its own without the content it is shadowing.</p>

<h2 id="realization">Putting the example together</h2>
<p>You can download a <a href="http://dev.opera.com/articles/view/cross-browser-box-shadows/example1.zip">normal drop shadow example</a> and an <a href="http://dev.opera.com/articles/view/cross-browser-box-shadows/example2.zip">inner drop shadow example</a> to get more of an idea of how this technique works. Below I have listed the full code for the basic technique.
The first listing shows the (X)HTML code for the example, with the main content and &quot;ghost&quot; <code>&lt;div&gt;</code> element put together:</p>

<pre><code>&lt;!-- (X)HTML --&gt;
&lt;div class=&quot;baseBlock&quot;&gt;
  &lt;div class=&quot;baseBlockIn&quot;&gt;
    Lorem ipsum dolor ...
  &lt;/div&gt;
  &lt;div class=&quot;ieShadow&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>


<p><code>&lt;div class=&quot;baseBlock&quot;&gt;</code> is the container for the content block. <code>&lt;div class=&quot;baseBlockIn&quot;&gt;</code> is the content container that we apply <code>box-shadow</code> to (this also helps fix problems with z-index in IE7).
<code>&lt;div class=&quot;ieShadow&quot;&gt;&lt;/div&gt;</code> is the &quot;ghost&quot; block that is blurred to create the shadow in IE.</p>

<p>The next section shows the first block of CSS, which is applied to every browser rendering the content:</p>

<pre><code>/* CSS for all browsers */
.baseBlock{
    width:180px;
    box-shadow:10px 10px 5px #444;
    -moz-box-shadow:10px 10px 5px #444;
    -webkit-box-shadow:10px 10px 5px #444;
}

.baseBlockIn{/* Content part specially separated for fixing problems with z-index in IE7 */
    padding:10px 15px;
    background:#f9f;
}

.ieShadow{
    display:none;
}
</code></pre>

<p>Here we are setting <code>box-shadow</code> for browsers that support it, and then hiding the IE shadow from non-IE browsers. The next code block shows the IE-only CSS &#x2014; we are applying this using an IE conditional comment:</p>

<pre><code>/* CSS for IE versions 8 and below through conditional comments */
.baseBlock{
    position:relative;
    z-index:3;
}

.baseBlockIn{
    position:relative;
    z-index:4;/* z-index for content must be bigger then z-index for shadow */
}

.ieShadow{
    display:block;
    position:absolute;
    z-index:2;
    top:5px;
    left:5px;
    right:-5px;
    bottom:-5px;
    filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=5);
    -ms-filter:&quot;progid:DXImageTransform.Microsoft.Blur(pixelradius=5)&quot;;
    background-color:#444;
}
</code></pre>

<p>Here <code>baseBlock</code> is used as the positioning context for the content and its drop shadow. The content &#x2014; the <code>.baseBlockIn</code> <code>&lt;div&gt;</code> element &#x2014; is given a larger z-index than the actual shadow &#x2014; the
<code>.ieShadow</code> <code>&lt;div&gt;</code> element. The latter is then positioned using absolute positioning, and the shadow created using a background colour and a blur filter.</p>

<p>There are some Peculiarities with how IE calculates the values of <code>left</code>, <code>top</code>, <code>right</code> and <code>bottom</code>, which affects the shadow <code>&lt;div&gt;</code> element:</p>
<ul>
	<li><code>left</code> value is calculated as X-offset minus blur value;</li>
	<li><code>top</code> value is calculated as Y-offset minus blur value;</li>
	<li><code>right</code> value is calculated as blur value minus X-offset;</li>
	<li><code>bottom</code> value is calculated as blur value minus Y-offset.</li>
</ul>

<p>So in the code, we need to use positioning to emulate the shadow offsets created by <code>box-shadow:10px 10px 5px #444;</code>:

<ul>
<li>The <code>left</code> value is calculated as X-offset minus blur value;
10 - 5 = 5</li>
<li>The <code>top</code> value is calculated as Y-offset minus blur value;
10 - 5 = 5</li>
<li>The <code>right</code> value is calculated as blur value minus X-offset;
5 - 10 = -5</li>
<li>The <code>bottom</code> value is calculated as blur value minus Y-offset.
5 - 10 = -5</li>
</ul>

<p>So, after all is said and done, the final result we are left with is similar to that shown in Figure 5:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/370-crossbrowser-css-boxshadows/outsetPrimer.png" width="490" height="329" alt="Obtained result of cross-browser box-shadow in different browsers" title="" /></p>
<p class="comment">Figure 5: The final example, showing the drop shadow in modern browsers and in current versions of IE.</p>

<h2 id="inner">Inner shadow</h2>

<p>We can use a similar technique to create inner shadows that work across browsers including IE. The differences are that <code>overflow: hidden;</code> is used to clip the shadow so that it doesn&#39;t spill out of the container, and we also change the <code>background-color</code> in the conditional CSS to the same as the <code>box-shadow</code> colour in the main CSS. Again, let&#39;s first start with the (X)HTML:</p>

<pre><code>&lt;!-- (X)HTML --&gt;
&lt;div class=&quot;shadowBoxOut&quot;&gt;
  &lt;div class=&quot;shadowBox&quot;&gt;
    &lt;div class=&quot;ieShadow&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;content&quot;&gt;
      Lorem ipsum dolor ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<p>Next, the CSS that all browsers use is served:</p>

<pre><code>/* CSS for all browsers */
.shadowBoxOut{
    border:1px solid #000;
    width:180px;
}

.shadowBox{
    background:#fff;
    padding:10px 15px;
    color:#000;
    box-shadow:inset 30px 30px 20px #888;
    -moz-box-shadow:inset 30px 30px 20px #888;
    -webkit-box-shadow:inset 30px 30px 20px #888;
}

.ieShadow{
    display:none;
}</code></pre>

<p>And finally, the conditional CSS that only gets served to IE via a conditional comment:</p>

<pre><code>/* CSS for IE versions 8 and below through conditional comments */
.shadowBox{
    background:#888;/* Background colour changed to shadow colour */
    position:relative;
    overflow:hidden;
    zoom:1;
    border-right:1px solid transparent;/* Fix problem with shadow overlay above content in IE8 */
    *border-right:0;
}

.ieShadow{
    display:block;
    position:absolute;
    top:10px;
    left:10px;
    bottom:-10px;
    right:-10px;
    background:#fff;/* Here must be set of base layer background color */
    filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=20);
    -ms-filter:&quot;progid:DXImageTransform.Microsoft.Blur(pixelradius=20)&quot;;
}

.content{
    position:relative;
}</code></pre>

<p>Again, the same peculiarities of calculating values of <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code> in the shadow <code>&lt;div&gt;</code> element in IE apply in this situation.

<p>The code above gives us the rendering shown in Figure 6.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/370-crossbrowser-css-boxshadows/insetPrimer.png" width="523" height="350" alt="Obtained result of cross-browser box-shadow in different browsers" title="" /></p>
<p class="comment">Figure 6: The final inner shadow example, showing the drop shadow in modern browsers and in current versions of IE.</p>

<h2 id="summary">Summary</h2>
<p>In this article we have walked through a cross-browser solution for creating drop shadows on block level elements, based on <code>box-shadow</code> and using IE filters to provide IE support. It provides drop shadows for:</p>
<ul>
	<li>Apple Safari 3+</li>
	<li>Google Chrome 2+</li>
	<li>Microsoft Internet Explorer 7+</li>
	<li>Mozilla Firefox 3.5+</li>
	<li>Opera 10.50+</li>
</ul>

<p>The advantages of this approach are:</p>

<ul>
	<li>It uses no images, meaning less messing around in image editing software, less HTTP requests and better performance;</li>
	<li>There is no JavaScript needed;</li>
	<li>You can set any shadow color you like.</li>
</ul>


<p>One disadvantage is that using combinations of <code>top</code>/<code>bottom</code> properties and <code>left</code>/<code>right</code> properties is not supported by IE6, therefore this technique will not work reliably in that browser, unless you are applying it to elements
with fixed height. In this case you can make it work in IE6 by swapping out <code>top</code>/<code>bottom</code> for <code>top</code>/<code>height</code> and <code>left</code>/<code>right</code> for <code>left</code>/<code>width</code>.

<h2 id="readmore">Read more...</h2>
<ul>
  <li><a href="/articles/view/beautiful-ui-styling-with-css3-text-shadow-box-shadow-and-border-radius/">Beautiful UI styling with CSS3 text-shadow, box-shadow and border-radius</a></li>
  <li><a href="/articles/view/css3-border-background-boxshadow/">CSS3 borders, backgrounds and boxes</a></li>
</ul></p></p></p>
