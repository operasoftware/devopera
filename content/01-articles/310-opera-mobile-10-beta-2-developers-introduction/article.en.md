Title: Opera Mobile 10 beta 2 developer’s introduction
----
Date: 2009-12-02 12:13:51
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

<p class="note">This article is <strong>deprecated</strong>; instead, we refer to <a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/">Mobile-friendly: The mobile web optimization guide</a> and <a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">An introduction to meta viewport and @viewport</a>.</p>

<h2>Introduction</h2>

<p><a href="http://www.opera.com/mobile/">Opera Mobile</a> is our web browser for high-end phones and we have just released the second beta of version 10, which can be installed on Windows Mobile and Nokia smartphones. To find out whether your phone will run it and how to download it, visit our <a href="http://www.opera.com/mobile/">Opera Mobile section</a>. As well as being a double-digit Opera Mobile release, Opera Mobile 10 beta 2 is also the first Opera browser to use our Presto 2.4 rendering engine, which features enhanced standards support.</p>

<p class="note">Opera Mobile is a complete web browser installed on your mobile phone — all the code rendering and JavaScript interaction happens on your mobile. This is in contrast to <a href="http://www.opera.com/mini/">Opera Mini</a>, where the rendering happens on the server and a compressed version is then sent to the handset.</p>

<h2 id="mobile10features">Opera Mobile 10 features</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/310-opera-mobile-10-beta-2-developers-introduction/Opera_Mobile_10_beta.png" alt="Opera Mobile 10 beta UI" />
<p class="comment">Figure 1: Opera Mobile 10 beta 2 UI</p>
</div>

<p>Once you’ve installed Opera Mobile 10 and launched the application, the first thing you’ll notice is the new <abbr title="User Interface">UI</abbr>. Figure 1 demonstrates the new tabs, icons and also Speed Dial, the popular feature we pioneered in our desktop browser. Speed Dial has now been ported to Opera Mobile and appears when you start the browser, open a new tab or select <cite>Start Page</cite> from the menu, giving you fast access to your favorite sites. And if you&#39;re already using Opera on your desktop or on another device, you can now keep all your bookmarks, Speed Dials and settings synchronized thanks to <a href="http://www.opera.com/link/">Opera Link</a>.</p>

<p>A lot of work has gone into streamlining the look and feel of our browser products across different devices, so using Opera Mobile 10 will be a familiar experience to anyone who has already used Opera Mini 5 beta 2 (or newer).</p>

<p>Like its big brother on the desktop, Opera Mobile 10 also features <a href="http://www.opera.com/browser/turbo/">Opera Turbo</a>. If you are browsing the Web in an area of low or patchy bandwidth, you can turn on Opera Turbo to compress web sites by up to 70%, depending on your circumstances.</p>

<p>If you dive into the <cite>Settings</cite>, you’ll find many more options, such as <cite>Mobile view</cite>, which displays content in a single column, as well as advanced privacy management settings and more. And just like its desktop counterpart, you can enter <kbd>opera:config</kbd> in the address bar for power user tweaks.</p>

<h2>The Opera Mobile 10 beta 2 user agent string</h2>

<p>Similar to <a href="http://dev.opera.com/articles/view/opera-ua-string-changes/">Opera 10 for desktop</a>, Opera Mobile 10 beta 2 identifies as Opera 9.8, version 10.00. The user agent string for the Nokia version is as follows: </p>

<pre><code>Opera/9.80 (S60; SymbOS; Opera Mobi/315; U; en-GB) Presto/2.4.15 Version/10.00</code></pre>

<p>And for the Windows Mobile version:</p>

<pre><code>Opera/9.80 (Windows Mobile; WCE; Opera Mobi/WMD-50286; U; en) Presto/2.4.13 Version/10.00</code></pre>

<p>Note that in general, Opera can be identified by using JavaScript to test for the <code>window.opera</code> object.</p>

<h2 id="optimizationmobile">Optimizing for mobile</h2>

<p>Generally, you shouldn’t sniff for browsers and serve different content to different user agents. Instead, you can make your sites work well across a variety of devices and screen sizes using common HTML and CSS hooks. This section has more details on how to do this.</p>

<h3 id="viewport">Viewport meta tag</h3>

<p>When loading a Web page in Opera Mobile, you get a zoomed-out overview of the page and then can pan and zoom into selected content in just a few clicks. While this approach works fine for most websites, it is possible to further enhance the user experience by presenting an already-zoomed in view of the page to give it a more application-like feel.</p>

<p>By including a viewport meta tag in the <code>head</code> section of the page, you can override the default width a page gets on mobile — Opera Mobile assumes this is 850 pixels — and instead sets an arbitrary pixel value such as 320, 480, etc. For cross-device compatibility purposes and easy calculating, we recommend setting the width to the <code>device-width</code> variable, as follows:</p>

<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot; /&gt;</code></pre>

<p>This adjusts the page width to fit in the full width of the screen, or put differently, it makes one CSS pixel equal to one device pixel.</p>

<p>A lot of websites use the viewport meta tag only on a different “mobile” URL, but it is worth pointing out that by combining it with Media Queries, it is possible to just have one page that works well and is optimized for several screen sizes.</p>

<h3 id="mediaqueries">Media Queries</h3>

<p>Media Queries are a CSS3 feature that allow you to specify under what conditions a style sheet should be applied. They are included using the <code>@media</code> at-rule, a media type, and optional expressions that limit the scope of the style sheet. For instance, to limit a style sheet to only apply to a screen with a viewport of 480 pixels or less, you could use the following Media Query:</p>

<pre><code>@media screen and (max-width: 480px) {  
  background-color: red;
  font-size: 1.5em;
}</code></pre>

<p>Note the relationship to the viewport width here: when the page is loaded in a desktop browser, the viewport width is the width of the browser window; when it is loaded in Opera Mobile 10 beta 2, the viewport width is defined by the viewport meta tag, unless there is none present, in which case it defaults to 850 pixels.</p>

<p>You can try this out for yourself by loading our <a href="/articles/view/opera-mobile-10-beta-developers-introduction/mq-viewport.html">Media Queries + viewport example</a> in Opera Desktop and then on Opera Mobile 10 beta 2. On desktop, we get a three column layout for browser widths wider than 800 pixels — the page gets a different layout when the browser is resized. On Opera Mobile 10 beta 2, a viewport of <code>width=device-width</code> (in the case of the Nokia 5800 in portrait mode this translates to 360 pixels) triggers the <code>@media screen and (max-width: 400px) {}</code> style rules to be applied, and the three column page turns into a single column one.</p>

<h2 id="debugging">Improved remote debugging with Opera Dragonfly</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/310-opera-mobile-10-beta-2-developers-introduction/dragonfly-highlight2.png" alt="Opera Dragonfly element highlight" />
<p class="comment">Figure 2: Opera Dragonfly element highlight</p>
</div>

<p>As with earlier Opera Mobile releases, <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> allows you to debug your web pages directly on your mobile phone. To debug pages in Opera Mobile 10 beta 2, open Opera Dragonfly in Opera Desktop (Tools &gt; Advanced &gt; Developer Tools) and follow the instructions in the Dev Opera <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">remote debugging</a> article. As Opera Mobile 10 uses Presto 2.4, Opera Dragonfly will have to download a new compatible version before you can start debugging.</p>
 
<p>The main new feature in Opera Dragonfly and Opera Mobile 10 beta 2 is the element highlight. This feature highlights the metrics of the currently selected element, so when you click on a element, it is highlighted along with alignment guides. When clicking on the <em>Layout</em> tab in the DOM inspector, you can hover over the different metrics such as the margin or padding to highlight that part of the element. The highlight colors are fully customizable (go to the <em>Settings</em> tab and click on the <em>Spotlight</em> heading.)</p>

<h2 id="standards">New standards support</h2>

<p>Opera Mobile 10 beta 2 is the first Opera browser release to feature our new Presto 2.4 rendering engine. The new engine supports everything featured in <a href="http://www.opera.com/docs/specs/presto23/">Presto 2.3</a>, plus some new additions.</p>

<p>For this beta release, we have not enabled <a href="http://my.opera.com/core/blog/2009/02/04/vega">Vega accelerated rendering</a> yet, so features such as <code>border-radius</code>, <code>box-shadow</code>, etc. that depend on our Vega graphics backend don’t work for now. Also note that this is an early version of Presto 2.4 and not all standards features have been included in this release. We have more in the pipeline for future Opera Mobile 10 versions, so stay tuned.</p>

<p>That being said, Presto 2.4 brings new support for a couple of interesting CSS properties to Opera Mobile 10 beta 2; we explore these in the sections below.</p>

<h3 id="bg-origin">Background-origin</h3>

<ul>
  <li><a href="/articles/view/opera-mobile-10-beta-developers-introduction/bg-origin.html">Live <code>background-origin</code> showcase</a></li>
  <li><a href="/articles/view/opera-mobile-10-beta-developers-introduction/bg-origin_showcase.zip"><code>background-origin</code> code download</a></li>
</ul>

<p><code>background-origin</code> and <code>background-repeat</code> (see below) are part of the <a href="http://www.w3.org/TR/css3-background/">CSS3 Backgrounds and Borders module</a> and are closely related. Both showcases also use some oh-so-handy <a href="#mediaqueries">Media Queries</a> so the layout is optimized for both mobile and desktop users.</p>

<p>The first showcase demonstrates <code>background-origin</code>. This property specifies the starting point of any background image you apply to an element; the values it can take are as follows:</p>

<ul>
  <li><code>padding-box</code>: Positions the background image relative to the outer edge of the padding (inner edge of the border). This is the default behavior</li>
  <li><code>border-box</code>: Positions the background image relative to the outer edge of the border</li>
  <li><code>content-box</code>: Positions the background image relative to the outer edge of the content (inner edge of the padding)</li>
</ul>

<p>The example shows three <code>div</code>s with the same background image applied to them and a similar double border. Each one has a different <code>background-origin</code> value set on it. From left to right, these are <code>background-origin: padding-box</code>, <code>background-origin:border-box</code> and <code>background-origin:content-box</code>. Figure 3 shows the different effects these have.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/310-opera-mobile-10-beta-2-developers-introduction/background-origin_demo_mobile.png" alt="The difference between background-origin’s padding-box, border-box and content-box attributes." />
<p class="comment">Figure 3: The difference between <code>background-origin:padding-box</code>, <code>background-origin:border-box</code> and <code>background-origin:content-box</code>.</p>

<h3 id="bg-repeat">Background-repeat</h3>

<ul>
  <li><a href="/articles/view/opera-mobile-10-beta-developers-introduction/bg-repeat.html">Live <code>background-repeat</code> showcase</a></li>
  <li><a href="/articles/view/opera-mobile-10-beta-developers-introduction/bg-repeat_showcase.zip"><code>background-repeat</code> code download</a></li>
</ul>

<p>The second showcase highlights two new values for <code>background-repeat</code>, namely <code>round</code> and <code>space</code>, both introduced to tidy up repeated background images that don’t fit neatly into your container.</p>

<ul>
  <li><code>round</code>: The background image is resized to fit in the container a whole number of times.</li>
  <li><code>space</code>: Whitespace is inserted between background images to fit in the container a whole number of times.</li>
</ul>

<p>In the two examples in Figure 4 the background images both have the same width of 100 pixels. In the first example, the dinosaur would normally appear two and a half times horizontally; the effect of <code>round</code> is to shrink the image so that three instances can fit neatly into the container.</p>

<p>The second example works in a similar way but whitespace is resized instead of images. Again, the dinosaur would normally appear two and a half times horizontally, but the use of <code>space</code> has resulted in just two images being displayed with padding between them.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/310-opera-mobile-10-beta-2-developers-introduction/background-repeat_demo_mobile.png" alt="The difference between background-repeat’s round and space attributes." />
<p class="comment">Figure 4: The difference between <code>background-repeat:round</code> and <code>background-repeat:space</code>.</p>

<h3 id="wordwrap">Word-wrap</h3>

<ul>
  <li><a href="/articles/view/opera-mobile-10-beta-developers-introduction/word-wrap.html">Live <code>word-wrap</code> showcase</a></li>
</ul>


<p>the <code>word-wrap</code> property is nice and straightforward taking either of two values, <code>normal</code> or <code>break-word</code>. The default setting is <code>normal</code>, meaning that lines are only broken at allowed break points such as spaces, for example. Changing this to <code>break-word</code> forces words to be broken if they would otherwise overflow beyond their container, as in Figure 5.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/310-opera-mobile-10-beta-2-developers-introduction/word-wrap_demo_mobile.png" alt="Word-wrap demo on Opera Mobile 10 beta 2" />
<p class="comment">Figure 5: Word-wrap demo</p>

<p><code>word-wrap</code> should not be confused with <code>text-wrap</code>, which sets the mode for text wrapping. Also note that <code>word-wrap</code> is only effective if <code>text-wrap</code> is set to <code>normal</code> (default) or <code>suppress</code>.</p>

<h2 id="Summary">Summary</h2>

<p>That wraps up our introduction to Opera Mobile 10 beta 2. We’ve taken you through its main new features and exciting new web standards support. As always, let us know how you like it!</p>
