Title: A developer’s look at Opera Mini 5
----
Date: 2010-03-16 06:53:51
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

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/346-a-developers-look-at-opera-mini-5/OperaMini_tabs.png" width="266" height="346" alt="The Opera Mini 5 UI with 3 tabs open." />
<p class="comment">Figure 1: The Opera Mini 5 UI with 3 tabs open</p>
</div>

<p>This article introduces Opera Mini 5, our next-generation mobile Web browser. Like previous versions, Opera Mini 5 works on most modern phones — from high-end smartphones to basic feature phones. In fact, it will run on almost any phone with a <abbr title="Java Virtual Machine">JVM</abbr>, and there are even native versions for Windows Mobile and Android (currently in beta).</p>

<p class="note">Visit our <a href="http://www.opera.com/mobile/">Opera Mini &amp; Opera Mobile</a> page for details and download instructions.</p>

<p>Opera Mini can display regular web pages designed for desktop browsers even on low-spec devices, and thanks to our compression technology it drastically reduces the amount of data being transferred, saving you time and money. At present, it’s being used worldwide by over 50 million users, and adoption is only increasing. Read our <a href="http://www.opera.com/smw/">State of the Mobile Web Report</a> for more detailed coverage of the mobile web industry, including a breakdown of Opera usage on mobile in different countries, what sites are popular on mobile, and other analyses.</p>

<p>This article will briefly outline how Opera Mini 5 works, look at the new <abbr title="User Interface">UI</abbr> and features, and then provide developers with information on Opera Mini 5’s standards support and general advice on making sites mobile-friendly.</p>

<p>The table of contents is as follows:</p>

<ul>
  <li><a href="#serverbased">Server-side rendering</a></li>
  <li><a href="#features">Opera Mini 5 new features</a></li>
  <li><a href="#standardssupport">Opera Mini 5 standards support</a></li>
  <li><a href="#uastring">Identifying Opera Mini 5: The user agent string</a></li>
  <li><a href="#optimizing">Optimizing for mobile</a></li>
  <li><a href="#summary">Summary</a></li>
</ul>

<h2 id="serverbased">Server-side rendering</h2>

<p>Opera Mini 5 is a thin-client application: when you use it to request a web page <strong><em>(1)</em></strong>, that request is sent off to a server-farm <strong><em>(2)</em></strong>; a proxy server receives the requested web page <strong><em>(3)</em></strong>, renders and reformats it, and then converts it to a light and efficient format developed by Opera called <a href="http://dev.opera.com/articles/view/opera-binary-markup-language/"><abbr title="Opera Binary Markup Language">OBML</abbr></a> <strong><em>(4)</em></strong>. This is then sent to the Opera Mini client <strong><em>(5)</em></strong>, which displays it on the phone screen <strong><em>(6)</em></strong>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/346-a-developers-look-at-opera-mini-5/mini-render.png" alt="A diagram of how Opera Mini works." />
<p class="comment">Figure 2: The Opera Mini request–response workflow.</p>

<p>As most of the complex processing is done on the server, Opera Mini 5 can run on relatively low-spec phones. In addition, the conversion to <abbr title="Opera Binary Markup Language">OBML</abbr> can reduce the amount of data being transferred to your phone by up to 90%, meaning that, where bandwidth is at a premium, you can save a lot of time and money.</p>

<p>Note that, as all the processing is done on the server and what is sent to the client is a static snapshot of the web page, some sites that feature heavy Ajax functionality or background scripting may not behave quite like you’d expect. However, most sites will function without a problem — you can find out more about <a href="#standardssupport">Opera Mini 5’s standards support</a> later on in the article.</p>

<h2 id="features">Opera Mini 5 new features</h2>

<p>Opera Mini 5 has a bold new <abbr title="User Interface">UI</abbr> and many exciting features, and comes with support for both touchscreen- and keypad-style phones — see Figure 3.</p>

<!--<img src="http://forum-test.oslo.osa/kirby/content/articles/346-a-developers-look-at-opera-mini-5/OperaMini_speeddial.png" width="266" height="346" alt="Opera Mini 5 Speed Dial" /><img src="http://forum-test.oslo.osa/kirby/content/articles/346-a-developers-look-at-opera-mini-5/OperaMini_touchscreen.png" width="258" height="444" alt="Opera Mini 5 tabs on a touchscreen device" />-->
<img src="http://forum-test.oslo.osa/kirby/content/articles/346-a-developers-look-at-opera-mini-5/touch-nontouch-comparison.png" width="522" height="455" alt="Opera Mini 5 showing a Web page and multiple tabs on a touchscreen device, and the Speed Dial on a keypad device" />
<p class="comment">Figure 3: The Opera Mini 5 UI adapts to both touchscreen- and keypad-style phones.</p>

<p>As you can see, Opera Mini now features tabs as well as Speed Dial thumbnails. And if you&#39;re already using Opera on your desktop or on another device, you can now keep your bookmarks, Speed Dial and search engines synchronized thanks to <a href="http://www.opera.com/link/">Opera Link</a>.</p>

<p>You can display pages using either regular desktop view, in which you can scroll around the page and zoom in and out, or Mobile View, which is reformats the page to a single column. The latter tends to work better for devices with narrow screens. You&#39;ll also notice that text is automatically wrapped to fit inside the screen width, making horizontal scrolling unnecessary when reading text.</p>

<h2 id="standardssupport">Opera Mini 5 standards support</h2>

<p>Opera Mini 5 now uses the <a href="http://www.opera.com/docs/specs/presto24/">Opera Presto 2.4</a> rendering engine, bringing its display capabilities in line with Opera Mobile 10.</p>
<p>Note that because Vega (Opera&#39;s graphics library) is not enabled on our proxy servers, things like <code>border-radius</code>, CSS transitions or graphically-intensive effects such as <code>text-shadow</code> blurring – which do work in Opera 10.50 for desktop – are not supported in Opera Mini 5.</p>
<p>In addition, there are a few more caveats specific to Opera Mini 5 that developers need to be aware of: HTML 5’s new form controls and CSS 3 Web Fonts are not supported. For <abbr title="Synchronized Multimedia Integration Language">SMIL</abbr> and <code>&lt;canvas&gt;</code> animations, only the first frame is shown. The majority of JavaScript that is triggered <code>onload</code> should work just fine, except in cases where those scripts require asynchronous operations. JavaScript won&#39;t run client-side (for instance in response to user interaction) once the page has finished loading. Plug-ins, such as Adobe Flash, are not supported.</p>
<p>For more details, see the comparison chart of <a href="http://my.opera.com/ODIN/blog/2010/03/16/opera-standards-chart">standards supported in Opera Mini 5, Opera Mobile 10, and our latest desktop browser</a>.</p> 

<p>With that out of the way, let&#39;s mention some of the more interesting new web standards supported in Opera Mini 5:</p>

<ul>
  <li><p><strong>CSS3 Media Queries</strong>. These allow you to dynamically optimize CSS layouts and styling depending on device attributes such as screen width and height. See the <a href="http://dev.opera.com/articles/view/opera-mini-5-developer-preview/#mediaqueries">Media Queries</a> section for a basic example.</p></li>

  <li>
    <p><strong>CSS3 colors: RGB(A) and HSL(A)</strong>. Opera Mini 5 supports the <abbr title="Red Green Blue (Alpha)">RGB(A)</abbr> and <abbr title="Hue Saturation Lightness (Alpha)">HSL(A)</abbr> color models outlined in the <a href="http://www.w3.org/TR/css3-color/">CSS3 Color Module</a>. You can find more details about these color models in our <a href="http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/">HSL, RGB and Alpha Transparency</a> article.</p>

  <li><p><strong>CSS3 Selectors</strong>: Opera Mini has full support for all the selectors listed in the <a href="http://www.w3.org/TR/css3-selectors/">CSS3 Selectors Module</a>.</p></li>

  <li><p><strong>CSS3 multiple background images</strong>: Opera Mini now enables you to have more than one image in the background of a single element. One use-case for this is having a decorative background that resizes nicely whatever the size of the containing element, as in this <a href="http://people.opera.com/danield/css3/backgrounds/">example of multiple background images</a>. Incidentally, this example also makes use of <a href="#mediaqueries">media queries</a> so it should look good on a variety of screen sizes. You can see a few more examples in our article on <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow#multiple-background">CSS3 borders, backgrounds and box-shadows</a>.</p></li>

  <li><p><strong>SVG</strong>: Opera Mini 5 supports <abbr title="Scalable Vector graphics">SVG</abbr> (rendered as a raster image). You can try it out by loading <a href="http://dev.opera.com/articles/view/opera-mini-5-beta-developers/operaicon6.svgz">this SVG based Opera logo</a> in Opera Mini 5.</p></li>
</li></ul>

<p class="note">You can find more details about standards support in Opera Presto 2.4 on the <a href="http://www.opera.com/docs/specs/presto24/">Web specifications supported in Opera Presto 2.4</a> page.</p>

<h2 id="uastring">Identifying Opera Mini 5: The user agent string</h2>

<p>A browser can be recognized by its user agent string.  Opera Mini 5 identifies as <code>Opera/9.80</code>, with <code>Opera Mini/5.x</code> included in the parentheses. Its user agent string is as follows:</p>

<pre><code>Opera/9.80 (J2ME/MIDP; Opera Mini/5.0.18635/1030; U; en) Presto/2.4.15</code></pre>

<p>It is important to bear in mind that the user agent string&#39;s build or Presto number may be changed in the future, so sniffing for an exact match to any particular user agent string doesn’t always yield the desired results.  The <code>Opera Mini/5.x</code> portion of the string is probably the most relevant bit, where <code>x</code> is the minor version number. Also note that in general, Opera can be identified by using JavaScript to test for the <code>window.opera</code> object.</p>

<p>We’d like to advise that, where possible, you shouldn’t test for browsers and serve different content. A more sustainable and robust approach is to make your sites work well across a variety of devices and screen sizes using Web standards and Media Queries. The following section has more details about this.</p> 

<h2 id="optimizing">Optimizing for mobile</h2>

<p>In this section we will take a brief look at specific techniques and tips for optimizing pages for mobile viewing.</p>

<h3 id="mediaqueries">Media Queries</h3>

<p>With all the devices of different shapes and sizes on the market, you can’t guarantee what screen size your Web site will be viewed on. Design your sites to be fluid and adaptable, and use Web Standards and Media Queries to dynamically optimize the layout for different screen sizes.</p>

<p>Media Queries are a CSS3 feature that allow you to specify under what conditions a style sheet or a particular set of CSS rules should be applied. For instance, to limit a set of styles to only apply to a screen which is 480px or less, you could use the following Media Query: </p>


<pre><code>@media screen and (max-device-width: 480px) {  
  // insert CSS rules here
}</code></pre>

<p>After the <code>@media</code> declaration, you first list the media types that this block of rules applies to. After that you can optionally define a series of expressions which set further condition on when the rules should be applied. In the example we’re limiting the scope of the style rules with <code>max-device-width</code> – this tests the physical width of the screen.  You can also use <code>max-width</code>, which on a desktop browser would test the width of the browser window, but on mobile browsers checks the width of the virtual viewport. A list of supported media features can be found in the <a href="http://www.opera.com/docs/specs/presto24/css/mediaqueries/">Opera Presto 2.4 Media Queries spec</a>.  Media Queries are also supported by recent versions of WebKit and Gecko.</p>
 
<p>Let’s have a look at a simple <a href="/articles/view/opera-mini-5-developers/mediaqueries-example-basic.html">Media Queries example</a>, as seen in Figure 4.</p>

<img src="/articles/view/opera-mini-5-developers/mediaqueries-large.png" alt="Media query example on desktop" />
<p class="comment">Figure 4: Media Query example on desktop.</p>

<p>The <code>style</code> block of this example (kept inside the HTML file for demonstration purposes) defines some general CSS, which we want applied in all situations, and sets a basic layout with a floated content sidebar. Note that other style rules not directly related to the demonstration of Media Queries have been omitted in the following listing.</p>

<pre><code>
body { […] padding: 0 5px; }
[…]
div.sidebar {
	width: 250px;
	padding: 150px 10px 10px 10px;
	float: left;
	font-size: 1.6em;
	[…]
	background: #c60f16 url(mediaqueries-mob.png) no-repeat center 10px;
	[…]
}
[…]
.screen { display: block; }
.mobile { display: none; }
</code></pre>

<p>This sort of layout works fine on large screens, but on small-screen devices we would like to keep the layout as a single column.</p>

<pre><code>
@media handheld,
	screen and (max-width: 480px),
	screen and (max-device-width: 480px)  {
		.screen { display: none; }
		.mobile { display: block; }
		body { padding: 0; }
		div.sidebar {
			width: auto;
			float: none;
			background: #c60f16 url(mediaqueries-mob-s.png) no-repeat left center;
			margin: 0;
			padding: 10px 5px 10px 160px;
			font-size: 1.3em;
		}
}</code></pre>

 
<p>The Media Query includes three comma-separated expressions. The CSS in this block is applied if any of the following conditions are met:</p>
<ul>
 
<li>the browser identifies itself as a <code>handheld</code> device. Opera Mini ignores this unless it is explicitly switched to <em>Mobile View</em> by the user</li>
 
<li>the browser window width or virtual viewport is 480 pixels or less</li>
 
<li>the screen width of the device is 480 pixels or less.</li>
 
</ul>
 
<p>To see the Media Query in action, view this example on Opera Mini 5, and try it on Opera desktop and reduce the width of the browser window below 480 pixels — see Figure 5.</p>

<img src="/articles/view/opera-mini-5-developers/mediaqueries-small-device.png" alt="Media query example on Opera Mini 5 and desktop with a small width" />
<p class="comment">Figure 5: The Media Query example running on Opera Mini 5 and desktop with a narrow window width.</p>



<h3 id="tips">Other tips and caveats</h3>
<ul>
  <li>
  <p>Make sure your site is usable both via keyboard and mouse. Mobile phones can have touchscreens or keypads (which then use spatial navigation and virtual mouse pointers) – your Web site should work in both cases.</p></li>
  <li>
  <p>If you decide to create a separate mobile-specific version of your site, make sure that users can still easily reach the full desktop version and set it as their default via a cookie or profile preference.</p></li>
  <li><p>If you don&#39;t have a phone on which you can use Opera Mini, you can use our <a href="http://www.opera.com/mini/demo/">online Opera Mini demo</a> or run a copy of the browser locally with the <a href="http://www.microemu.org/">MicroEmulator</a>.</p></li>
  <li><p>As a final point, it is a good idea to test your site in a number of mobile browsers and devices, even if it is just to get some familiarity with the different contexts in which users view your site.</p></li>
</ul>

<p>You can find more tips on designing for mobile browsers in our <a href="http://dev.opera.com/articles/view/introduction-to-the-mobile-web/">Introduction to the mobile web</a> article.</p>


<h2 id="summary">Summary</h2>

<p>We hope you’ve enjoyed this overview of <a href="http://www.opera.com/mini/">Opera Mini 5</a>. We’ve taken you through its main new features and exciting new Web standards support. As always, let us know how you like it!</p>
