Title: Opera Mobile 10 developer’s introduction
----
Date: 2010-03-16 06:58:23
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

<p><a href="http://www.opera.com/mobile/">Opera Mobile</a> is our web browser for high-end phones and we have just released version 10 for Windows Mobile and Nokia smartphones. In this article we take a look at the browser’s main new features, provide developers with information on making sites mobile-friendly, remote debugging with Opera Dragonfly, and give an overview of Opera Mobile 10’s new standards support.</p>

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">This article is obsolete</h2>
<p>It&#39;s retained for historical purposes only. 

Download the <a href="http://www.opera.com/browser/">latest version 

of Opera</a> or see what&#39;s coming soon in <a href="http://www.opera.com/browser/next/">Opera.Next</a>.</p> 
</div>  

<p>The table of contents for this article is as follows:</p>

<ul>
  <li><a href="#mobile10features">Opera Mobile 10 features</a></li>
  <li><a href="#uastring">The Opera Mobile 10 user agent string</a></li>
  <li><a href="#optimizationmobile">Optimizing for mobile</a></li>
  <li><a href="#debugging">Improved remote debugging with Opera Dragonfly</a></li>
  <li><a href="#standards">New standards support</a></li>
  <li><a href="#summary">Summary</a></li>
</ul>

<h2 id="mobile10features">Opera Mobile 10 features</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/347-opera-mobile-10-developers-introduction/OperaMobile_UI.png" width="266" height="346" alt="Tabs and Speed Dial in Opera Mobile 10 on a keypad-style phone" />
<p class="comment">Figure 1: Tabs and Speed Dial on a keypad-style phone</p>
</div>

<p>Once you’ve installed Opera Mobile 10 and launched the application, the first thing you’ll notice is the new <abbr title="User Interface">UI</abbr>. Figure 1 shows the new tabs, icons and also Speed Dial – the feature we pioneered in our desktop browser. Speed Dial appears when you start the browser, open a new tab or select <cite>Start Page</cite> from the menu, giving you fast access to your favorite sites. And if you&#39;re already using Opera on your desktop or on another device, you can now keep your bookmarks, Speed Dial and search engines synchronized thanks to <a href="http://www.opera.com/link/">Opera Link</a>.</p>

<p>A lot of work has gone into streamlining the look and feel of our browser products across different devices, so using Opera Mobile 10 will be a familiar experience to anyone who has already used <a href="http://www.opera.com/mini/">Opera Mini</a> 5.</p>

<p>Like its big brother on the desktop, Opera Mobile 10 also features <a href="http://www.opera.com/browser/turbo/">Opera Turbo</a>. If you are browsing the Web in an area with low or patchy mobile coverage and bandwidth, you can turn on Opera Turbo to compress web sites by up to 70%, depending on your circumstances.</p>

<p>If you dive into the <cite>Settings</cite>, you’ll find many more options, such as <cite>Mobile View</cite>, which displays content in a single column, as well as advanced privacy management settings and more. And just like its desktop counterpart, you can enter <kbd>opera:config</kbd> in the address bar for power-user tweaks.</p>

<h2 id="uastring">The Opera Mobile 10 user agent string</h2>

<p>Similar to <a href="http://dev.opera.com/articles/view/opera-ua-string-changes/">Opera 10 for desktop</a>, Opera Mobile 10 identifies as Opera 9.80, version 10.00 (to circumvent badly written browser-sniffing scripts which can&#39;t handle double-digit version numbers).</p>

<p>The user agent string for the Nokia version is:</p>

<pre><code>Opera/9.80 (S60; SymbOS; Opera Mobi/498; U; en-GB) Presto/2.4.18 Version/10.00</code></pre>

<p>On Windows Mobile, the <abbr title="User Agent">UA</abbr> string reads:</p>

<pre><code>Opera/9.80 (Windows Mobile; WCE; Opera Mobi/WMD-50286; U; en) Presto/2.4.13 Version/10.00</code></pre>

<p class="note">In general, Opera can also be identified by using JavaScript to test for the presence of the <code>window.opera</code> object.</p>

<h2 id="optimizationmobile">Optimizing for mobile</h2>

<p>Generally, you shouldn’t sniff for browsers and serve different content to different user agents. Instead, a more sustainable and robust method is to make your sites work well across a variety of devices and screen sizes using common HTML and CSS hooks.</p>

<h3 id="viewport">Viewport <code>meta</code> tag</h3>

<p>When loading a Web page in Opera Mobile, you get a zoomed-out overview of the page and then can pan and zoom into selected content in just a few clicks. While this approach works fine for most websites, it is possible to further enhance the user experience for your visitors by presenting an zoomed-in view of the page by default. This approach works particularly well for Web applications, giving them more of an &quot;application-like&quot; feel.</p>

<p>By default Opera Mobile assumes a page to be 850 pixels wide, and the zoomed-out overview rescales these values accordingly to fit on the device screen. With a viewport <code>meta</code> tag in the <code>head</code> section of the page you can override this default width and instead set an arbitrary pixel value such as 320, 480, etc. For cross-device compatibility, we recommend setting the width to the <code>device-width</code>:</p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot; /&gt;</code></pre>

<p>This adjusts the page width to fit in the full width of the screen, or put differently, it makes one CSS pixel equal to one device pixel.</p>

<p>A lot of websites use the viewport <code>meta</code> tag only on a different “mobile” URL, but it is worth pointing out that, particularly in combination with Media Queries, it is possible to just have one page that works well and is optimized for several screen sizes.</p>

<h3 id="mediaqueries">Media Queries</h3>

<p>Media Queries are a CSS3 feature that allow you to specify under what conditions a style sheet or a particular set of CSS rules should be applied. For instance, to limit a set of styles to only apply to a screen which is 480px or less, you could use the following Media Query:</p>

<pre><code>@media screen and (max-width: 480px) {  
  background-color: red;
  font-size: 1.5em;
}</code></pre>

<p>Note the relationship to the viewport width here: when the page is loaded in a desktop browser, the viewport width is the width of the browser window; when it is loaded in Opera Mobile 10, the viewport width defaults to 850 pixels unless overridden by the viewport <code>meta</code> tag.</p>

<p>You can try this out for yourself by loading our <a href="/articles/view/opera-mobile-10-developers-introduction/mq-viewport.html">Media Queries + viewport example</a> in Opera Desktop and then on Opera Mobile 10. On desktop, we get a three column layout for browser widths wider than 800 pixels — the page gets a different layout when the browser is resized. In Opera Mobile 10 running on a device with a physical screen that&#39;s less than 400 pixels wide (as an example, a Nokia 5800 in portrait mode has a width of 360 pixels), a viewport <code>meta</code> of <code>width=device-width</code> triggers the <code>@media screen and (max-width: 400px) { … }</code> style rules, and the three column page turns into a single column page.</p>

<h2 id="debugging">Improved remote debugging with Opera Dragonfly</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/347-opera-mobile-10-developers-introduction/dragonfly-highlight2.png" width="388" height="289" alt="Opera Dragonfly element highlight" />
<p class="comment">Figure 2: Opera Dragonfly element highlight</p>
</div>

<p>As with earlier Opera Mobile releases, <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> allows you to debug web pages being displayed on your mobile phone remotely from your desktop. To debug pages in Opera Mobile 10, open Opera Dragonfly in Opera Desktop (<cite>Page/View &gt; Developer Tools &gt; Opera Dragonfly</cite>) and follow the instructions in Daniel&#39;s <a href="http://my.opera.com/ODIN/blog/opera-mobile-10-and-its-remote-debugging-party-trick">remote debugging article (with video)</a>. As Opera Mobile 10 uses Presto 2.4, Opera Dragonfly may have to download a new compatible version before you can start debugging.</p>
 
<p>The main new feature in Opera Dragonfly and Opera Mobile 10 is the element highlight. This feature highlights the metrics of the currently selected element, so when you click on an element, it is highlighted along with alignment guides. When clicking on the <cite>Layout</cite> tab in the DOM inspector, you can hover over the different metrics such as the <code>margin</code> or <code>padding</code> to highlight that part of the element. The highlight colors are fully customizable (go to the <cite>Settings</cite> tab and click on the <cite>Spotlight</cite> heading.)</p>

<h2 id="standards">New standards support</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/347-opera-mobile-10-developers-introduction/multiple-bg-images_demo_mobile.png" width="266" height="596" alt="Example of multiple background images" />
<p class="comment">Figure 3: Example of multiple background images</p>
</div>

<p>Opera Mobile 10 is powered by the Presto 2.4 rendering engine, which has improved performance and better support for standards, details of which can be found in our <a href="http://www.opera.com/docs/specs/presto24/">Presto 2.4 documentation</a>.</p>

<p>Please note that Opera Mobile 10 does not have <a href="http://my.opera.com/core/blog/2009/02/04/vega">Vega accelerated rendering</a> enabled, so features such as <code>border-radius</code>, <code>box-shadow</code>, etc. that depend on our Vega graphics library currently aren’t supported. To give you a good overview of what works where, we have created a <a href="http://my.opera.com/ODIN/blog/2010/03/16/opera-standards-chart">chart comparing the standards support in Opera Mini 5, Opera Mobile 10 and our latest desktop browser</a>.</p>

<p>That being said, Presto 2.4 does bring new support for a few interesting CSS properties to Opera Mobile 10.</p>

<h3 id="multiple-bg-images">Multiple background images and more</h3>

<p>With the <a href="http://www.w3.org/TR/css3-background/">CSS3 Backgrounds and Borders module</a> it is now possible to have more than one image in the background of a single element. One use-case for this is having a decorative background that resizes nicely whatever the size of the containing element, as in this <a href="http://people.opera.com/danield/css3/backgrounds/">example of multiple background images</a> (see Figure 3). It also demonstrates the ability to have separate repeating background images on either side of the page.</p>
<p>Incidentally, this example also makes use of <a href="#mediaqueries">media queries</a> and the <a href="#viewport">viewport meta tag</a> so it should look good on a variety of screen sizes.</p>

<p>In addition to multiple background images, Opera Mobile 10 also supports other parts of the <a href="http://www.w3.org/TR/css3-background/">CSS3 Backgrounds and Borders module</a> we&#39;ve written about before, such as <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow/#background-clip"><code>background-clip</code></a>, <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow/#background-origin"><code>background-origin</code></a> and <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow/#multiple-background"><code>background-repeat</code></a>.</p>

<h3 id="css-transitions">CSS Transitions</h3>

<p><a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/#introduction">CSS Transitions</a> are supported as well, but it&#39;s worth pointing out that they may not work entirely as you&#39;d expect: many current examples using transition effects are triggered with the <code>:hover</code> pseudo-class, which generally won&#39;t work on on touchscreen devices.</p>

<p>As a little demo, we&#39;ve modified <a href="/articles/view/opera-mobile-10-developers-introduction/transition-timing-example.htm">David&#39;s CSS Transition timing example</a>, which now invokes the transition effect with a JavaScript timer rather than on <code>:hover</code> — however, the rest of the demo is exactly the same as in our previous article on <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/#introduction">CSS Transitions</a>, showing the different easing algorithms that can be applied to a transition effect.</p>

<h2 id="summary">Summary</h2>

<p>That wraps up our introduction to Opera Mobile 10. We’ve taken you through its main new features and exciting new web standards support. As always, let us know how you like it, and don&#39;t forget to check out the <a href="http://my.opera.com/ODIN/blog/2010/03/16/opera-standards-chart">Opera Mobile 10, Opera Mini 5 and Opera 10.50 standards support chart</a>!</p>
