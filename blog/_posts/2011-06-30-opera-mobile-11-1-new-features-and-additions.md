---
title: Opera Mobile 11.1 — New Features and Additions
authors:
- patrick-lauke
tags:
- opera-mobile
- opera-mini
- viewport
- odin
license: cc-by-3.0
layout: post
---

<div>
  <img src="/blog/opera-mobile-11-1-new-features-and-additions/fig1.png" style="float: right; margin: 0 0 3px 10px;" alt="The new Opera Mobile 11.1" />
</div>

<p>Today we had not one, but two product releases: <a href="http://www.opera.com/mobile/">Opera Mini 6.1</a> (for Android, Blackberry, J2ME and Symbian) and <a href="http://www.opera.com/mobile/">Opera Mobile 11.1</a> (for Android and Symbian). You can get them directly from <a href="http://m.opera.com">m.opera.com</a>.</p>

<p>While Opera Mini 6.1 is primarily a security and stability release, Opera Mobile 11.1 has been updated to use the <a href="http://www.opera.com/docs/specs/presto28/">Opera Presto 2.8 rendering engine</a>. This boosts the browser&#39;s capabilities with a whole host of new HTML5 and CSS 3 features – many of which only just made their official desktop debut in the <a href="http://my.opera.com/ODIN/blog/2011/06/28/opera-11-50-released-speed-dial-extensions-improved-standards-support">Opera 11.50 release</a> two days ago.</p>

<h3>Multi-column layout</h3>
<p>The <a href="http://www.w3.org/TR/css3-multicol/">CSS Multi-column Layout Module</a> specification allows designers to finally create complex, print-like multi-column layouts without having to abuse <code>table</code> markup. See our <a href="http://dev.opera.com/articles/view/css3-multi-column-layout/">introduction to CSS3 Multi-column layouts</a> and check out the slightly modified <a href="http://people.opera.com/patrickl/experiments/multicol/newspaper/">newspaper-style multi-column layout</a>.</p>


<h3><code>&lt;time&gt;</code> element</h3>
<p>You can now see the <a href="http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element"><code>&lt;time&gt;</code> element</a> and its associated <a href="http://my.opera.com/ODIN/blog/2011/05/31/dom-scripting-and-the-time-element">DOM scripting possibilities</a> in action, even on your mobile device, with the <a href="http://people.opera.com/miket/2011/5/time.html">mighty date robot demo</a>.</p>


<h3>Session history and navigation</h3>
<p>The <a href="http://www.w3.org/TR/html5/history.html#history">HTML5 session history and navigation API</a> allows for new ways to programmatically control and manipulate the browser&#39;s session history, save a web application&#39;s state, and handle user interactions (without breaking things like the <em>back</em> button). Of course, there&#39;s a recent article <a href="http://dev.opera.com/articles/view/introducing-the-html5-history-api/">introducing the HTML5 History API</a>, complete with a nifty <a href="http://people.opera.com/miket/2011/6/viewer.html">file browsing app example</a>.</p>


<h3><code>dataset</code> and <code>data-*</code> attributes</h3>
<p>Rather than overloading <code>className</code> or adding invalid attributes to their markup, developers can now use a standardised and easy way to <a href="http://www.w3.org/TR/html5/elements.html#embedding-custom-non-visible-data-with-the-data-attributes">embed custom non-visible data with the <code>data-*</code> attributes</a> in HTML5. We&#39;ve recently published an <a href="http://dev.opera.com/articles/view/an-introduction-to-datasets/">introduction to datasets</a> that shows you how.</p>


<h3>W3C File API</h3>
<p>The <a href="http://www.w3.org/TR/file-upload/">W3C File API</a> allows web applications to open, read and manipulate data inside local files – all completely client-side. Opera Mobile 11.1, like Opera 11.50 on desktop, currently has partial support for this API. See our article on <a href="http://dev.opera.com/articles/view/the-w3c-file-api/">The W3C File API</a> for more details and examples.</p>


<h3><code>classList</code> API</h3>
<p>A lot of interactive, JavaScript-driven visual effects rely on adding, removing, toggling and checking different classes to change the styling of an element. Up to now, this involved string manipulations of the element&#39;s <code>className</code> attribute. <code>classList</code> is a new object, added to all nodes in the DOM, that provides all associated class names as a <a href="http://www.w3.org/TR/html5/common-dom-interfaces.html#domtokenlist-0"><code>DOMTokenList</code></a>, which includes handy native methods that make these common operations a breeze.</p>


<h3>WebP</h3>
<p><a href="http://code.google.com/speed/webp/">WebP</a> is a new image format from Google, using the same VP8 codec as the <a href="http://www.webmproject.org/">WebM</a> video format. On average, WebP images are more than 30% smaller than JPEG files with only a minor reduction in quality, making them ideal for use in mobile devices. Beyond being able to display <a href="http://code.google.com/speed/webp/gallery.html">WebP images</a>, Opera Mobile 11.1 will now also use this new image format internally with <a href="http://www.opera.com/browser/turbo/">Opera Turbo</a> – making it even faster on slow connections.</p>


<h3>Linear gradients</h3>
<p>We now have initial support for <a href="http://www.w3.org/TR/css3-images/#gradients">CSS3 linear gradients</a>. As in our desktop version, there&#39;s no support yet for radial gradients. See Vadim&#39;s <a href="http://people.opera.com/pepelsbey/experiments/apple-menu/">Apple button menu example</a>, part of our <a href="http://dev.opera.com/articles/view/css3-linear-gradients/">CSS3 linear gradients article</a>.</p>


<h3>Default zoom on high-DPI devices</h3>
<p>By default, Opera Mobile used to apply a zoom factor of 160% on devices with high-DPI screens. In combination with</p>
<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;</code></pre>
<p>on a <code>480px</code> wide screen (on VGA, WVGA, XVGA devices), 160% zoom resulted in a viewport width of <code>480px / 1.6 = 300px</code>. However, many mobile-optimised sites – despite using <code>device-width</code> in their <code>viewport</code> definition – still seem to assume a width of <code>320px</code> (the default iPhone width) in their layouts. This resulted in an annoying <code>20px</code> horizontal scroll. In Opera Mobile 11.1 we&#39;ve changed the default zoom on high-DPI devices to 150%, which gives us increased compatibility with these badly coded sites.</p>

<div>
  <img src="/blog/opera-mobile-11-1-new-features-and-additions/fig2.png" alt="The mobile version of Flickr with a zoom of 160%, showing the unsightly horizontal scrollbars, and now with 150%, fitting perfectly." />
  <p class="caption">Figure 2: The mobile version of Flickr with a zoom of 160%, showing the unsightly horizontal scrollbars, and now with 150%, fitting perfectly.</p>
</div>

<p>For further details, see <a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">An introduction to <code>meta</code> <code>viewport</code> and <code>@viewport</code></a>, which has been updated to reflect this tweaked behavior.</p>

<h3>...and much more</h3>

<p>We&#39;ve only cherry-picked some of the new features in this release. For an overview of how the new <a href="http://www.opera.com/mobile/">Opera Mobile 11.1</a> stacks up in comparison to its previous version, have a look at the overview of <a href="http://www.opera.com/docs/specs/productspecs/">web specifications support in Opera products</a> and the detailed <a href="http://www.opera.com/docs/specs/presto28/">web specifications support in Opera Presto 2.8</a>. Enjoy!</p>
