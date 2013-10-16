Title: A developer’s look at Opera Mini 5 beta 2
----
Date: 2009-12-02 12:11:07
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

<p class="note">DEPRECATED: This article is deprecated, and a newer article with updated information is available at <a href="http://dev.opera.com/articles/view/opera-mini-5-developers/">A developer’s look at Opera Mini 5</a>. You should read this one if you want updated information.</p>

<h2>Introduction</h2>

<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/305-a-developers-look-at-opera-mini-5-beta-2/mini5ui.png" alt="opera mini 5 main ui" />
</div>

<p>This article introduces Opera Mini 5 Beta 2, our cutting-edge mobile Web browser. Like previous versions, Opera Mini 5 beta 2 works on most modern phones — from top of the range smart phones to feature phones.  In fact, it will run on almost any phone with a <abbr title="Java Virtual Machine">JVM</abbr>, showing regular web pages designed for desktop browsers without any problem, and reducing file sizes to save you time and money. Opera Mini is incredibly popular, being used worldwide by over 30 million users. Read our <a href="http://www.opera.com/smw/">State of the Mobile Web Report</a> for more detailed coverage of the mobile web industry, including a breakdown of Opera usage on mobile in different countries, what sites are popular on mobile, and other analyses.</p>

<p>This article will briefly outline how Opera Mini 5 works and look at the new <abbr title="User Interface">UI</abbr> and features.  Then we’ll have a look at the user agent string and Opera Mini 5’s standards support, and we’ll touch on the optimizations you can make to improve web page compatibility with Opera Mini 5 and mobile web browsers in general.</p>

<p>The table of contents is as follows:</p>

<ul>
  <li><a href="#serverbased">Server-side rendering</a></li>
  <li><a href="#features">Opera Mini 5 new features</a></li>
  <li><a href="#standardssupport">Opera Mini 5 standards support</a></li>
  <li><a href="#uastring">Identifying Opera Mini 5: The user agent string</a></li>
  <li><a href="#optimizing">Optimizing for mobile</a></li>
  <li><a href="#summary">Summary</a></li>
</ul>

<p class="note">Visit our <a href="http://www.opera.com/mobile/">Opera Mini &amp; Opera Mobile</a> page for details and download instructions.</p>

<h2 id="serverbased">Server-side rendering</h2>

<p>Opera Mini 5 is a thin-client application: when you use it to request a web page <strong><em>(1)</em></strong>, that request is sent off to a server-farm <strong><em>(2)</em></strong>; a proxy server receives the requested web page <strong><em>(3)</em></strong>, renders and reformats it, and then converts it to a light and efficient format developed by Opera called <a href="http://dev.opera.com/articles/view/opera-binary-markup-language/"><abbr title="Opera Binary Markup Language">OBML</abbr></a> <strong><em>(4)</em></strong>. This is then sent to the Opera Mini client <strong><em>(5)</em></strong>, which displays it on the phone screen <strong><em>(6)</em></strong>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/305-a-developers-look-at-opera-mini-5-beta-2/mini-render.png" alt="how opera mini works" />
<p class="comment">Figure 1: The Opera Mini request–response workflow.</p>

<p>As most of the complex processing is done on the server, Opera Mini 5 can run on relatively low-spec phones. In addition, the conversion to <abbr title="Opera Binary Markup Language">OBML</abbr> can reduce the file size by up to 90%, meaning that, where bandwidth is at a premium, you can save a lot of time and money.</p>

<p>Note that, as all the processing is done on the server and what is to the client is a snapshot of the web page, some sites that feature heavy Ajax functionality or background scripting may not behave quite like you’d expect. However, most sites will function without a problem — you can find out more about Opera Mini 5’s standards support later on in the article.</p>

<h2 id="features">Opera Mini 5 new features</h2>

<p>Opera Mini 5 has a bold new look and many exciting features, and comes with support for both touch and non-touch screen phones. The new <abbr title="User Interface">UI</abbr> was designed by Opera’s fabulous designers — see Figure 2.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/305-a-developers-look-at-opera-mini-5-beta-2/mininewui.png" alt="Opera Mini 5 Speed Dial and tabs" />
<p class="comment">Figure 2: The Opera Mini 5 UI with Speed Dial and tabs.</p>

<p>As you can see, Opera Mini now features tabs as well as Speed Dial thumbnails. And if you&#39;re already using Opera on your desktop or on another device, you can now keep all your bookmarks, Speed Dials and settings synchronized thanks to <a href="http://www.opera.com/link/">Opera Link</a>.</p>

<p>You can display pages using either regular desktop view, in which you can scroll around the page and zoom in and out, or in Mobile view, where the whole page is reformatted to a single column. The latter tends to work better for devices with narrow screens.</p>
<h2 id="standardssupport">Opera Mini 5 standards support</h2>

<p>Opera Mini 5 now uses the <a href="http://www.opera.com/docs/specs/presto22/">Opera Presto 2.2</a> rendering engine, bringing its display capabilities in line with <a href="http://www.opera.com/mobile/">Opera Mobile</a> 9.7 beta and <a href="http://www.opera.com/browser/">Opera 10</a> for desktop. This means that you can take advantage of the same standards support on Opera Mini 5 as on its desktop cousin, with a few small exceptions: HTML 5 Forms and Web Fonts are not supported, and the blur effect on text-shadows and SMIL animations are also disabled. The majority of JavaScript functions are available, except those that require asynchronous operations or user interaction once the page has been loaded. Note that plug-ins, such as Adobe Flash, are not supported.</p> 

<p>The vast majority of readers will be familiar with common web standards usage, but we’ll still cover some of the more interesting features supported in Opera Mini 5 beta 2:</p>

<ul>
  <li><p><strong>CSS 3 Media Queries</strong>. These allow you to dynamically optimize CSS layouts and styling depending on device attributes such as screen width and height. See the <a href="http://dev.opera.com/articles/view/opera-mini-5-developer-preview/#mediaqueries">Media Queries</a> section for an example.</p></li>

  <li>
    <p><strong>CSS 3 colors: RGB(A) and HSL(A)</strong>. Opera Mini 5 also now supports the <abbr title="Red Green Blue (Alpha)">RGB(A)</abbr> and <abbr title="Hue Saturation Lightness (Alpha)">HSL(A)</abbr> color models outlined in the <a href="http://www.w3.org/TR/css3-color/">CSS 3 Color Module</a>. You can find more details about these color models in our <a href="http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/">Color in Opera 10 — HSL, RGB and Alpha Transparency</a> article.</p>

<p>Have a look at our <a href="rgba-hsla.html">RGB(A)/HSL(A) example</a> using Opera Mini 5. You’ll see a series of tables with individually-colored cells, to demonstrate the effect of iterative increases to the different channels in the two color models.</p>
</li>

  <li>
    <p><strong>CSS 3 Selectors</strong>: Opera Mini has support for all the selectors listed in the <a href="http://www.w3.org/TR/css3-selectors/">CSS 3 Selectors Module</a>. We have created a typical <a href="css3selectors.html">zebra-striped playlist table</a> that makes use of the <code>nth-child</code> pseudo-selector and a CSS 3 attribute selector. Have a look at the source code to see what is going on. There are a number of <a href="http://dev.opera.com/articles/view/zebra-striping-tables-with-css3/">Dev.Opera CSS articles</a> that cover many of these selectors in detail, and you can find a lot more good information on CSS 3 selectors and other features at <a href="http://css3.info">CSS3.info</a>.</p></li>
  <li><p><strong>SVG</strong>: Opera Mini 5 supports <abbr title="Scalable Vector graphics">SVG</abbr>. You can try it out by loading <a href="operaicon6.svgz">this SVG based Opera logo</a> in Opera Mini 5 beta 2.</p></li>
</ul>

<p class="note">You can find more details about standards support in Opera Presto 2.2 on the <a href="http://www.opera.com/docs/specs/presto22/">Web specifications supported in Opera Presto 2.2</a> page, and additional examples in our recently published <a href="http://dev.opera.com/articles/view/the-opera-10-experience/">Opera 10 article</a>.</p>

<h2 id="uastring">Identifying Opera Mini 5: The user agent string</h2>

<p>A browser can be recognised by its user agent string.  Opera Mini 5 identifies as <code>Opera 9.8</code>, with <code>Opera Mini/5.x</code> included in the parentheses. Its default user agent string is as follows:</p>

<pre><code>Opera/9.80 (J2ME/MIDP; Opera Mini/5.0.16823/1126; U; en) Presto/2.2.0</code></pre>

<p>It is important to bear in mind that phone manufacturers and mobile carriers often customize their browser’s user agent strings, so sniffing for an exact match to any particular user agent string doesn’t always yield the desired results.  The <code>Opera Mini/5.x</code> portion of the string should always be included, where <code>x</code> is the minor version number. Also note that in general, Opera can be identified by using JavaScript to test for the <code>window.opera</code> object.</p>

<p>We’d like to advise that, where possible, you shouldn’t test for browsers or features and serve different content. Instead, you can make your sites work well across a variety of devices and screen sizes using Web standards and Media Queries. The following section has more details.</p> 

<h2 id="optimizing">Optimizing for mobile</h2>

<p>In this section we will look at specific techniques and tips for optimizing pages for mobile viewing.</p>

<h3 id="mediaqueries">Media Queries</h3>

<p>With all the devices of different shapes and sizes on the market, you can’t guarantee what screen size your web site will be viewed on – so design your layouts to be fluid and robust, and use Web Standards and Media Queries to dynamically optimize for different screen sizes.</p>

<p>Media Queries are a CSS 3 feature that allow you to specify under what conditions a style sheet should be applied. They are applied using the <code>@media</code> at-rule, a media type, and optional expressions that limit the scope of the style sheet. For instance, to limit a style sheet to only apply to a screen which is 480px or less, you could use the following Media Query: </p>


<pre><code>@media screen and (max-device-width: 480px) {  
  // insert CSS rules here
}</code></pre>

<p>After the <code>@media</code> declaration, you first list the media types that this block of rules applies to. After that you can optionally define a series of expressions which set further condition on when the rules should be applied. In the example we’re limiting the scope of the style rules with <code>max-device-width</code> – this tests the physical width of the screen.  You can also use <code>max-width</code>, which on a desktop browser would test the width of the browser window, but on mobile browsers checks the width of the virtual viewport. A list of supported media features can be found in the <a href="http://www.opera.com/docs/specs/presto22/css/mediaqueries/">Opera Presto 2.2 Media Queries spec</a>.  Media Queries are also supported by recent versions of WebKit and Gecko.</p>
 
<p>Let’s have a look at a <a href="http://dev.opera.com/articles/view/opera-mini-5-beta-developers/mediaquery3.html">Media Queries example</a>, as seen in Figure 3.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/305-a-developers-look-at-opera-mini-5-beta-2/mediaqueryexample1.png" alt="media query example on desktop" />
<p class="comment">Figure 3: Media Query example on desktop.</p>

<pre><code>@media screen and (min-width: 480px) {
  .content p:before  {
    content: &quot;You are now using the styling designed for screen. &quot;;
    font-weight: bold;
  }
}</code></pre>

<p>The Media Query works in the same way as described above, but tests for a minimum width, via the <code>min-width</code> media feature. If the condition is met, the rules inside the block are applied.</p>

<pre><code>@media handheld, screen and (max-width: 480px),
       screen and (max-device-width: 480px)  {
  .content p:before  {
    content: &quot;You are now using the styling designed for
              handhelds or devices with &lt; 480px screens. &quot;;
    font-weight: bold;
  }

  div.sidebar, div.content {
    width: auto;
    float: none;
    margin: 0;
    padding: 0.5em;
  }
}</code></pre>

 
<p>The second Media Query includes three expressions.  The CSS in this block is applied if any of these expressions are true:</p>
<ul>
 
<li>The browser identifies itself as a handheld via the <code>handheld</code> media type. Opera Mini and Mobile ignore this unless they are switched to the Mobile View by the user.</li>
 
<li>The browser window width or virtual viewport is 480 pixels or less.</li>
 
<li>The screen width of the device is 480 pixels or less</li>
 
</ul>
 
<p>To see the Media Query in action, view this example on Opera Mini 5, and try it on Opera 10 desktop and reduce the width of the browser window below 480 pixels - see Figure 4.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/305-a-developers-look-at-opera-mini-5-beta-2/mediaqueryexample2.png" alt="media query example on Opera Mini 5 and desktop with a small width" />
<p class="comment">Figure 4: The Media Query example running on Opera Mini 5 beta 2, and on Opera 10 desktop with a narrow window width.</p>



<h3 id="tips">Other tips and caveats</h3>
<ul>
  <li>
    <p>Mobile devices in general have less memory and CPU speed than their desktop counterparts. Think carefully about how memory-intensive your web applications are, and optimize them as much as possible. Battery life is an important constraint on mobile, so avoid intensive use of JavaScript and especially <abbr title="XmlHttpRequest">XHR</abbr>.</p></li>
  <li>
  <p>Make sure your site is usable both via keyboard and mouse. Mobile phones can come with spatial navigation, virtual mouse pointers and touch input, and your web application should work in all these scenarios.</p></li>
  <li><p>Keep text entry to a minimum, as entering text is far more awkward on mobile than on desktop. For example, where possible, allow your users to select options from a list rather than entering them as free-form text.</p></li>
  <li>
  <p>In case you decide to create a separate mobile-specific version of your site, make sure that users can still easily reach the full desktop version and set it as their default via a cookie or profile preference.</p></li>
  <li><p>As a final point, it is a good idea to test your site in a number of mobile browsers and devices, even if it is just to get some familiarity with the different contexts in which users view your site.</p></li>
</ul>

<p>You can find more tips on designing for mobile browsers in our <a href="http://dev.opera.com/articles/view/introduction-to-the-mobile-web/">Introduction to the mobile web</a> article.</p>


<h2 id="summary">Summary</h2>

<p>We hope you’ve enjoyed this overview of Opera Mini 5 beta 2. We’ve taken you through its main new features and exciting new web standards support. As always, let us know how you like it!</p>
