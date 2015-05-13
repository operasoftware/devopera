---
title: New Web Standards Support in Opera 11.10 Beta
authors:
- zi-bin-cheah
tags:
- multi-column
- gradients
- woff
- webp
- opera-presto
license: cc-by-3.0
---

<h3>So many new features!</h3>

<p>
This is a season of plenty. Recently, we already announced an <a href="http://labs.opera.com/news/2011/02/22/">HTML5 parser labs build</a>, and a <a href="http://labs.opera.com/news/2011/02/28/">WebGL and Hardware acceleration labs build</a>. And now, we are happy to bring you the <a href="http://www.opera.com/browser/next/">Opera desktop 11.10 beta</a>, which includes support for several new web standards goodies. Let&#39;s take a look.
</p>

<h4>Multi-column text layouts</h4>
<p>Designers have always wanted a way to elegantly organize their text layout into columns, something that is impossible to do using positioning or floats without hard-coding column breaks, therefor rendering it useless for sites with a lot of dynamic content. Fortunately, CSS3 has come to the rescue with the <a href="http://www.w3.org/TR/css3-multicol/">Multi-column Layout Module</a>, which allows us to easily split content into a column structure and control the flow, break and spacing of the columns. Molly E. Holzschlag shows us how to use this functionality in her <a href="https://dev.opera.com/articles/view/css3-multi-column-layout/">CSS3 Multi-column Layout</a> Dev.Opera article.</p>

<p>For a quick demo, check out Vadim Makeev&#39;s beautiful <a href="http://people.opera.com/pepelsbey/experiments/multicol/">Multicolumn newspaper demo</a>.</p>

<h4>Linear gradients</h4>

<p>CSS3 linear gradients (part of the <a href="http://www.w3.org/TR/2011/WD-css3-images-20110217/">CSS Image Values and Replaced Content Module Level 3</a> allows us to easily create colour gradients, and alpha fading effect if you include RGBa or HSLa colours. This rocks, as we no longer need to rely on images for subtle shading, buttons, and other common web site features. Chris Mills explains the ins and outs of <a href="https://dev.opera.com/articles/view/css3-linear-gradients/">CSS3 linear gradients</a> in his new Dev.Opera article. Note that Radial gradients are not yet supported, but they are coming soon!</p>

<p>I have created an interactive <a href="http://people.opera.com/zibin/gradient/">flower demo showing linear gradients fading in and out</a>, and Vadim has created a rather fine <a href="http://people.opera.com/pepelsbey/experiments/apple-menu/">Apple buttons demo</a> employing gradients.
</p>


<h4>WebP</h4>

<p>
<a href="http://code.google.com/speed/webp/">WebP</a> is a new open lossy image format proposed by Google, ideal for graphics on the web. We are proud to bring native support for this format into 11.10 beta.</p>

<p>You can create WebP images using <a href="http://code.google.com/speed/webp/download.html">Google&#39;s WebP converter tool</a>.</p>

<h4>Speed Dial enhancements</h4>

<p>
The HTML5 specification says that the <a href="https://html.spec.whatwg.org/multipage/links.html#rel-icon"><code>rel</code> attribute now accepts the <code>icon</code> value</a>, which you can take advantage of for providing custom Speed Dial icons for your pages. You can also further style the icons using the <code>view-mode:minimized</code> media feature in your CSS, the X-Purpose HTTP header, and autoreloading. Read about all of these in more detail in Tiffany&#39;s <a href="https://dev.opera.com/articles/view/opera-speed-dial-enhancements/">Make your site shine in Speed Dial</a> article.
</p>

<h4>Improvements to Opera Extensions</h4>

<p>Opera extensions are a runaway success, and we&#39;re seeing now 20 new submissions every day. With the release of the URL Filter API in Opera 11.10, web developers can now build extensions providing more control over access to different domains. <a href="https://dev.opera.com/articles/view/site-blocking-with-operas-url-filter-api/">Site blocking with Opera’s URL Filter API article</a> by Daniel Davis explains this in more detail.</p>

<p>Also, to coincide with the new beta, Christian Magnus Sinding-Larsen has provided a guide explaining <a href="https://dev.opera.com/articles/view/creating-effective-opera-extension-icons/">how to create effective Opera Extension icons</a>.
</p>

<p>If you are new to Opera extensions, we recommend starting from <a href="https://dev.opera.com/articles/view/opera-extensions-quick-documentation-overview/">this handy quick guide</a>, which has all pointers to relevant documentation, articles and examples, allowing you to get started straight away.</p>

<h4>WOFF</h4>
<p>The <a href="http://www.w3.org/TR/WOFF/">Web Open Font Format (WOFF)</a> &#x2014; backed by Opera, Microsoft and Mozilla &#x2014; acts as a container for TrueType and OpenType fonts, reducing file size, and allowing designers to include extra information with the font such as font licensing info and the like. My <a href="https://dev.opera.com/articles/view/introducing-woff-web-open-font-format/">Introducing WOFF</a> article shows you more, including how to create and use WOFF fonts.</p>

<h3>Have fun!</h3>
<p>As always, feedback from our users constantly pushes us to make greater products. If you find any bugs, please head over to our <a href="https://bugs.opera.com/wizard">Bug Tracking System</a> and report them. Leave a note or comment and tell us what you like (or dislike) about 11.10 beta. Have fun!
</p>
