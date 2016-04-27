---
title: New Developer Features in Opera 11.50 Beta
authors:
- andreas-bovens
tags:
- dataset
- opera-presto
- speed-dial
- classlist
- time
- video
license: cc-by-3.0
---

<p>This morning, we’ve released <a href="https://www.opera.com/browser/next/">Opera 11.50 beta</a> through our Next channel, and it comes with a number of interesting developer bits. Let’s have a look.</p>
<h3><code>classList</code> goodness</h3>
<p>Using <code>classList</code>, you can easily add, remove, or toggle a class on an element, without the need for complex regex or libraries. The code to toggle a class is as simple as this:</p>
<pre><code>onclick=&quot;document.getElementById(’blinds’).classList.toggle(’cover’);&quot;</code></pre>
<p>You can then attach some styles to <code>#blinds.cover</code>, and off you go. It even works nicely with CSS transitions, so you can create smooth page effects that are applied on the click of a button. For a simple example, see my <a href="http://people.opera.com/andreasb/demos/html5-classlist/"><code>classList</code> demo</a>.</p>
<h3><code>&lt;time&gt;</code> element</h3>
<p>We’re the first browser to support the <code>&lt;time&gt;</code> element. Mike has covered how you can make use of it in a <a href="http://my.opera.com/ODIN/blog/2011/05/31/dom-scripting-and-the-time-element">previous post</a>. Also be sure to check out our <a href="http://people.opera.com/miket/2011/5/time.html">time robot demo</a>.</p>
<h3>Session History &amp; Navigation</h3>
<p>Presto 2.8 also comes with support for <a href="http://dev.w3.org/html5/spec/history.html#history">HTML5 Session History &amp; Navigation</a>. You can find all details on our <a href="https://www.opera.com/docs/specs/presto28/sessionhistorynav/">specs pages</a>.</p>
<h3>Datasets</h3>
<p>Support for <code>data-*</code> attributes and <code>dataset</code> has been around <a href="http://my.opera.com/ODIN/blog/unveiling-opera-11-10-final">since Opera 11.10</a>, but Divya has now written a nice <a href="https://dev.opera.com/articles/view/an-introduction-to-datasets/">dataset developer introduction</a> on Dev.Opera.</p>
<h3>Speed Dial extensions</h3>
<p>And last but not least, we’ve further enhanced our Speed Dial extensions implementation. You can download the latest Speed Dial extensions from our <a href="https://addons.opera.com/addons/extensions/">extensions catalog</a>, or build your own using our <a href="https://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/">Speed Dial Extension developer introduction</a>, which is now available not only in English, but also in <a href="https://dev.opera.com/articles/view/5502">German</a>, <a href="https://dev.opera.com/articles/view/5512">Simplified Chinese</a>, <a href="https://dev.opera.com/articles/view/5522">Russian</a>, <a href="https://dev.opera.com/articles/view/5532">Bahasa Indonesia</a>, <a href="https://dev.opera.com/articles/view/5572">Spanish</a>, <a href="https://dev.opera.com/articles/view/5612">Vietnamese</a>, <a href="https://dev.opera.com/articles/view/5652">Brazilian Portuguese</a> and <a href="https://dev.opera.com/articles/view/5622">Japanese</a>. In the video below, Arnstein explains how easy it is to build one.</p>

<figure block="figure">
	<iframe elem="media" width="560" height="315" src="https://www.youtube.com/embed/H5uNupSR6yw" allowfullscreen></iframe>
</figure>

<p><strong>Note:</strong> due to a caching issue, Opera Dragonfly stops working from time to time. In order to resolve this and continue debugging, clear up your cache and refresh. Of course, we’re working on a fix for this, so this should only be a temporary annoyance.</p>
