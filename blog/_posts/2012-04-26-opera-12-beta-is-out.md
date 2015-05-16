---
title: A Quick Look at What’s in Opera 12 Beta for Developers
authors:
- andreas-bovens
tags:
- opera-presto
- beta
license: cc-by-3.0
---

<p>This morning, we&#39;ve released <a href="http://www.opera.com/browser/next/">Opera 12 beta</a> and as always, a new release comes with improved standards support and other developer features — a quick overview of the shiny:</p>

<h3>Hardware acceleration and WebGL support</h3>

<p>As <a href="http://my.opera.com/desktopteam/blog/2012/04/20/update-on-hardware-acceleration-in-opera-12">announced</a> last week, we&#39;re aiming to make Opera entirely hardware accelerated, from the UI to all page rendering and painting (with support for OpenGL as well as DirectX backends), but for now, both HWA and WebGL are turned off by default. You can enable them by setting <code>opera:config#UserPrefs|EnableWebGL</code> and <code>opera:config#UserPrefs|EnableHardwareAcceleration</code> to 1, saving and <strong>restarting</strong> the browser.</p>
<p>If you&#39;re interested in trying out a WebGL demo, check out <a href="http://operasoftware.github.com/Emberwind/">Emberwind</a>; if you want to start coding WebGL, have a look at <a href="https://dev.opera.com/articles/tags/webgl">our WebGL articles</a>.</p>

<h3>CSS3 Animations and more animatable properties</h3>
<p>Opera 12 beta supports CSS3 animations, and we have prepared a <a href="https://dev.opera.com/articles/view/css3-animations/">fitting Dev.Opera article</a> to celebrate that.</p>
<p>We&#39;ve also expanded our support for animatable properties (so you can animate them using CSS3 transitions as well as CSS3 animations) to include <code>background-position</code>, <code>border-bottom-color</code>, <code>border-color</code>, <code>border-left-color</code>, <code>border-right-color</code>, <code>border-top-color</code>, and <code>text-shadow</code>. Furthermore, <code>step-start</code>, <code>step-end</code> and steps timing functions for <code>transition-timing-function</code> are supported as well.</p>

<h3>Generated Content for Paged Media</h3>
<p>The <a href="http://www.w3.org/TR/css3-gcpm/">CSS Generated Content for Paged Media Module</a> is a spec spearheaded by our CTO Håkon Wium Lie, and it allows you to create a page-like browsing experience on web pages by adding a few lines of CSS to your content. Opera 12 beta includes a partial implementation of the spec, which you can try out using <a href="http://people.opera.com/howcome/2012/reader/">Håkon&#39;s examples</a>. Tip: use your mouse&#39;s horizontal scrolling mechanism to move to the next page, or try PageUp/Down.</p>

<h3>Camera support with <code>getUserMedia</code></h3>
<p>A lot has happened since we <a href="http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview">announced our first build with camera support</a> in March 2011, and last week <code>getUserMedia</code> has finally landed in our Next channel (and in this beta of course), <a href="http://my.opera.com/desktopteam/blog/2012/04/17/camera-getusermedia-support">with a fresh privacy UI</a> to boot. If you want to get started building stuff, check out our <a href="https://dev.opera.com/articles/view/playing-with-html5-video-and-getusermedia-support/"><code>getUserMedia</code> article</a>. For demo fun, there are our <a href="http://shinydemos.com/photo-booth/">Photo Booth</a>, <a href="http://shinydemos.com/polaroid-taker/">Polaroid</a>, <a href="http://shinydemos.com/color-picker/">Color Picker</a> and <a href="http://shinydemos.com/explode/">Explode</a> examples.</p>

<h3>CORS</h3>
<p>Opera 12 beta comes with support for cross-origin resource sharing, also known as CORS. If you want to learn how to use this in your site, check out our Dev.Opera article about it: <a href="https://dev.opera.com/articles/view/dom-access-control-using-cross-origin-resource-sharing/">DOM access control using cross-origin resource sharing</a>.

<h3>Drag and Drop</h3>
<p>HTML5 includes the Drag and Drop API, which gives us the ability to natively drag, drop, and transfer data to HTML elements, and now this is supported in Opera 12 beta as well. We have published <a href="https://dev.opera.com/articles/view/drag-and-drop/">a fresh article detailing how to use Drag and Drop</a> earlier today, so be sure to have a look.</p>

<h3>Updated Windows &amp; Tabs extension API</h3>
<p>Opera 12 beta comes with an update to the Windows &amp; Tabs API, for which we have published <a href="https://dev.opera.com/articles/view/extensions-api-windows-tabs/">updated documentation</a>. Be sure to read through it if your existing Opera extension relies on it, and feel free to ask questions in the comment section on the API pages.</p>

<h3>Discontinuation of Unite and Widgets</h3>
<p>Earlier this week, we <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">announced that we&#39;re discontinuing Unite and Widgets</a> in Opera 12, but at the same time are going full steam ahead with our <a href="https://addons.opera.com/">extensions platform</a>. For those who want to convert their existing widgets to extensions, we&#39;ve produced an <a href="https://dev.opera.com/articles/view/converting-widgets-to-opera-extensions/">article to help you with the conversion process</a>.</p>

<h3>Themes</h3>
<p>If you want to spice up your browsing experience, with, let&#39;s say, a cookie monster-themed browser UI, be sure to check out our <a href="https://addons.opera.com/en/themes/">new themes catalog</a>. Making themes is super easy, and the nitty-gritty details of Opera 12&#39;s new theming infrastructure are explained in our <a href="https://dev.opera.com/articles/view/operas-lightweight-themes/">Opera&#39;s lightweight themes article</a>.</p>

<p>And last but not least, our <a href="http://www.opera.com/docs/specs/productspecs/">product specs overview page</a> has been updated as well, giving you an overview of what is supported where in all recent Opera products.</p></p>
