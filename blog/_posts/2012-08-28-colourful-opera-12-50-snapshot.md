---
title: A colourful Opera 12.50 snapshot
authors:
- patrick-lauke
tags:
- opera-12
layout: article
---
<p>As work steadily continues on our next stable release, this week&#39;s <a href="http://my.opera.com/desktopteam/blog/2012/08/28/core">Opera 12.50 snapshot</a> provides a colourful mixed bag of new features and improvements. As ever, we&#39;ve cherry-picked the ones we find most interesting for developers.</p>

<h3>Context Menu API for extensions</h3>

<p>Another new API for extensions? Yes indeed! This time, it&#39;s a handy method to add items to the context / right-click menu. This can be useful for any kind of interaction with a page or its contents.</p>
<p>The API allows fine-grained control, making it possible for an extension menu item to only appear in the context menu for a link, or to only be present on certain domains. It&#39;s also possible to add sub-menu items which can be created with a folder-style structure. When a menu item is clicked, there are also a variety of event properties to enable you to work with things such as a link&#39;s URL or some text selected by the user.</p>
<p>In short, this API is ideal for developers wanting to activate their extension through more than just a toolbar button, so feel free to try it out following our freshly released <a href="http://dev.opera.com/articles/view/extensions-api-contextmenu/">Context Menu API documentation</a>.</p>

<h3>Fullscreen API</h3>

<p>The <a href="http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html">Fullscreen API</a> provides a simple set of JavaScript methods (such as <code>element.requestFullscreen()</code> and <code>document.exitFullscreen()</code>), as well as a new <code>:fullscreen</code> pseudo-class, that allow pages – and, more interestingly, even individual elements within a page, like a custom video player or a canvas game – to go fullscreen.</p>
<p>As a simple demo, I&#39;ve hacked up one of my old video player examples (with custom HTML-based controls) to include this new functionality: <a href="http://people.opera.com/patrickl/experiments/video/fullscreen/"><cite>HTML5 video - fancy video controls with JavaScript, including Fullscreen API support</cite></a>. Note that in this demo it&#39;s not just the <code>video</code> element, but the whole container – including the custom controls – that is going fullscreen. </p>

<p class="note">As ever, with the new &quot;HTML5 the living-on-the-edge standard&quot;, specs chop and change. This snapshot implements the <a href="http://dvcs.w3.org/hg/fullscreen/raw-file/529a67b8d9f3/Overview.html">Fullscreen API editors&#39; draft 7 February 2012</a>, while the standard has now mutated in the latest <a href="http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html">July 2012 version</a>.</p>

<h3>HTML5 &lt;ol reversed&gt;</h3>
<p>A nifty feature from HTML5-the-living-standard is <code><a href="http://dev.w3.org/html5/spec/the-ol-element.html#attr-ol-reversed">&lt;ol reversed&gt;</a></code>. The specification says &quot;The reversed attribute is a boolean attribute. If present, it indicates that the list is a descending list (..., 3, 2, 1). If the attribute is omitted, the list is an ascending list (1, 2, 3, ...).&quot;</p>
<p>Note that if you combine <code>reversed</code> with the <code>start</code> attribute (which was bizarrely <a href="http://www.w3.org/TR/html401/struct/lists.html#h-10.2">deprecated in HTML 4</a> but re-instated as a full member of the attribute gang in HTML5) you could encounter lists counting to zero or below. If you&#39;re using a counter style that isn&#39;t decimal (for example, alpha or roman numerals), the list will be decimal when it drops below the value that corresponds to 1. The spec says:</p>
<blockquote><p>Numbers less than or equal to zero should always use the decimal system regardless of the type attribute.</p></blockquote>
<p>For browsers without support, there&#39;s a clever and semantically meaningful <a href="http://www.impressivewebs.com/reverse-ordered-lists-html5/">reverse ordered lists polyfill</a> by Louis Lazaris.</p>
<h3>SPDY support</h3>

<p>They grow up so quickly...only last month we released an <a href="http://dev.opera.com/articles/view/opera-spdy-build/">Opera Labs build with SPDY support</a>, and now it graduated to our main branch, on track for inclusion in our next stable release.</p>

<p>As a bonus, this snapshot also comes bundled with a <a href="https://addons.opera.com/en/extensions/details/spdy-indicator/">SPDY indicator extension</a> that shows you when a site uses SPDY...no more hunting around in <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a>&#39;s network panel for those extra headers!</p>

<p class="note">If you previously installed extensions in Opera Next, the bundled extension may not show up automatically. Either reinstall this snapshot with a clean profile, or simply grab the <a href="https://addons.opera.com/en/extensions/details/spdy-indicator/">SPDY indicator extension</a> from the addons site.</p>

<h3>Nested <code>@media</code> blocks</h3>

<p>As a first step towards our implementation of <a href="http://dev.w3.org/csswg/css3-conditional/">CSS 3 Conditional Rules</a>, this build introduces support for nested <code>@media</code> blocks. Instead of long and repetitive <code>@media</code> feature lists such as:</p>

<pre><code>@media only screen and (orientation: portrait) and (min-width: 480px) {
    ...
}
@media only screen and (orientation: portrait) and (min-width: 600px) {
    ...
}
@media only screen and (orientation: portrait) and (min-width: 768px) {
    ...
}</code></pre>

<p>it&#39;s now possible to nest media queries, allowing for much cleaner, leaner and most importantly more understandable CSS:</p>

<pre><code>@media only screen {
    @media (orientation: portrait) {
        @media (min-width:480px) {
            ...
        }
        @media (min-width: 600px) {
            ...
        }
        @media (min-width: 768px) {
            ...
        }
    }
}</code></pre>

<h3>Support for images with ICC Profiles</h3>

<p>Beyond containing the image data itself, many image formats (JPG, PNG, TIFF to name a few) allow for embedded colour profiles. These ICC profiles tell programs how the raw image data should be interpreted, mapped to the currently-used colour space, and ultimately displayed. The large majority of images on the web don&#39;t contain embedded ICC profiles, so browsers will simply display them without any sort of color correction. However, photo enthusiasts and perfectionists will be pleased to know that, should their images contain specific profile information, Opera will display these as intended.</p>

<p>For further information on ICC profiles, I&#39;d recommend this excellent and accessible primer on <a href="http://regex.info/blog/photo-tech/color-spaces-page0">Digital Image Color Spaces</a>, but here&#39;s a simple example.</p>

<div><img src="http://files.myopera.com/patrickhlauke/blog/brucel-ICC.jpg" alt="A photo of Bruce Lawson, with an embedded colour profile - ICC-aware browsers will display this correctly" style="display:inline" /> <img src="http://files.myopera.com/patrickhlauke/blog/brucel-no-ICC.jpg" alt="The same photo of Bruce Lawson, but this time without any embedded ICC profile - this will appear completely colour-shifted in all browsers" style="display:inline" />
<p class="caption">If Bruce looks blue in both images, your browser doesn&#39;t support ICC profiles.</p>
</div>

<p>Both of these images are exactly the same, in terms of their raw image data. They were created using an exaggerated custom colour profile, to more clearly illustrate the point. The first image contains an embedded ICC profile, which signals to colour-managed programs how to interpret the data, while the second image doesn&#39;t. In browsers that don&#39;t support colour profiles, both images will be displayed without any colour correction (resulting in the funky colour shift), while ICC-aware browsers will correct and display the first image based on its embedded ICC profile.</p>

<p class="note">And here&#39;s the Russian translation of this post: <a href="http://habrahabr.ru/company/opera/blog/150316/">Красочная сборка Opera 12.50</a>.</p>
