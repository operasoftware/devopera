---
title: Page Visibility API Support in Opera 12.10
authors:
- tiffany-brown
tags:
- page visibility
- HTML5
- blog
layout: article
---
<p>Our recent <a href="http://www.opera.com/browser/download/">Opera 12.10 release</a> added partial support for the <a href="http://www.w3.org/TR/page-visibility/">Page Visibility API</a>. It&#39;s a simple API, but a mighty one because it allows developers to specify what a document should do when it becomes hidden. If you&#39;ve ever been embarrassed at the office while trying to determine which of your 200 tabs is playing unexpected sound, you&#39;ll appreciate the utility of the Page Visibility API.</p>

<h2>How it works</h2>

<p>The Page Visibility API adds two attributes &#8212; <code>hidden</code> and <code>visibilityState</code> &#8212; and a <code>visibilitychange</code> event to the <a href="http://www.w3.org/TR/html5/dom.html#document">HTML5 <code>Document</code> interface</a>. When the document&#39;s window or tab isn&#39;t visible, the value of <code>document.hidden</code> will be <code>true</code>, otherwise it will be <code>false</code>.</p>

<p>The <code>document.visibilityState</code> attribute simply reveals the particular state of a document: <code>hidden</code> or <code>visible</code>. Two other values &#8212; <code>prerender</code> and <code>unloaded</code> are outlined in the specification, but not yet supported.</p>

<p>When the visibility state of a document changes, Opera will fire a <code>visibilitychange</code> event. This is where it gets interesting. When the document is not visible, your <code>visibilitychange</code> handler can pause media or animations. When the document becomes visible again, the handler can play the media, or resume the animation. It&#39;s particularly useful for memory-intensive applications such as games. This <a href="http://people.opera.com/tiffanyb/2012/pagevis/index.html" title="A demonstration of the Page Visibility API" target="_blank">demo</a> shows an example using video. A small word of warning: the video plays automatically any time the tab is in the foreground.</p>

<h2>Limitations</h2>

<p>Some parts of this implementation don&#39;t quite work as you might expect. For example, switching from Opera to another application will not fire a <code>visibilitychange</code> event. Neither will minimizing the browser window. </p>

<p>Because it&#39;s document-specific, you also can&#39;t use the Page Visibility API to determine which tab or window is active. It is possible to determine whether your document is visible, and therefore active. But it is not possible to determine which of the other tabs or windows currently has focus.</p>

<h2>Other browsers</h2>

<p>Opera is not the only browser to support this API. It <em>is</em>, however, the only one to use un-prefixed properties at this time. Corresponding properties in other browsers are as follows. </p>

<ul>
	<li><b>Chrome / WebKit:</b> <code>document.webkitVisibilityState</code> and <code>document.webkitHidden</code></li>
	<li><b>Firefox:</b> <code>document.mozVisibilityState</code> and <code>document.mozHidden</code></li>
	<li><b>Internet Explorer:</b> <code>document.msVisibilityState</code> and <code>document.msHidden</code></li>
</ul>

<p>You will also need to listen for the <code>webkitvisibilitychange</code>, <code>mozvisibilitychange</code>, and <code>msvisibilitychange</code> events.</p>
