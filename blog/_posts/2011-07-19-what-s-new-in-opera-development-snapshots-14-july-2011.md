---
title: 'What’s New in Opera Development Snapshots: 14 July 2011'
authors:
- divya-manian
tags:
- opera-next
- carakan
- odin
license: cc-by-3.0
---

<p>Woo, <a href="http://my.opera.com/desktopteam/blog/2011/07/14/javascript-on-a-diet">we got some dramatic big updates this time</a>! Let&#39;s see what&#39;s new.</p>
<p>As usual, your <a href="http://www.opera.com/browser/next/">Opera Next</a> should already have this update (checking <code>opera:about</code> should give you &quot;Presto/2.9.<b>181</b> Version/12.00&quot; under <i>Browser Identification</i>).</p>
<ul>
<li>
	<h3>6-7% reduction in memory consumption</h3><p>The object model was completely rewritten which increases the overall performance and reduces Carakan&#x2019;s memory usage! Woo!</p></li>
<li><h3>Choose preloading videos</h3>
	<p>Opera will now honor the <code>preload</code> attribute on HTML5 <code>video</code> elements. Here is a <a href="http://jsfiddle.net/nimbu/b637m/show/">demo</a> to show how that works (Dev.Opera has some <a href="https://dev.opera.com/articles/tags/video/">excellent posts on how to use HTML5 video</a>). </p>
</li>
<li>
	<h3>The curse of the 32767px is lifted!</h3>
	<p>This is H-U-G-E! Opera&#39;s humble origins had enforced a strict rule on how big CSS pixel offsets and dimensions can be (for reducing memory usage), which meant if you had <code>width: 90000px </code>or <code>left: 90000000px</code> (a few of us like to think bigger) in your CSS, Opera will clip it to 32767px. This meant traditional solutions that used a width to set horizontal scrolling, would result in wrapped divs even if you did not want wrapping.</p>
	<p>Fear not, now that is no longer the case. You can set as long a value as you like. If <code>66666699999em</code> is your lucky number, go for it.  Check out <a href="http://anton.kovalyov.net/slides/gothamjs/">this presentation by Anton Kovalyov</a> in current and Next to see the difference. </p>
</li>
<li>
	<h3>Font family fixes</h3>
	<p>Some bugs in the parsing of family names were fixed. <a href="http://modernizr.com">modernizr.com</a>&#39;s <a href="http://gyazo.com/0a14a6df219732ef473220775070fe77.png">before/after</a> is an eloquent expression of these fixes.</p>
</li>
<li>
	<h3>Change viewport via JavaScript</h3>
	<p><a href="http://www.blog.highub.com/">Shi Chuan</a>, <a href="https://mathiasbynens.be/">Mathias</a> wrote <a href="https://gist.github.com/901295">an interesting solution to fix the viewport scaling</a> that occurs when you change the orientation of mobile devices using JavaScript (<a href="https://github.com/shichuan/mobile-html5-boilerplate/issues/12">more context</a>). This did not trigger a re-layout in Opera, which meant the change in layout were never applied. But now it does!</p>
</li>
<li>
	<p>If you are a frequent user of <a href="http://github.com">github</a>, you would find it easier to use, as SSL renegotiations are now more reliable with this snapshot.</p>
</li>
<li>
	<h3>Combining text-align: right/center with negative text-indent introduces scrollbar in overflow container</h3>
	<p>This is pretty common on sites that use image replacement with text indentation and a text alignment that is not default triggered unseemly scrollbars. A related issue was the introduction of scrollbars with box shadows. Both of these will no longer happen, yay!</p>
</li>
<li>
	<h3>Box shadow no longer paints incorrectly with a transition</h3>
	<p>If you had an element with box shadows, artifacts occurred when the element was moved via transitions. So, expect smoother transitions!</p>
</li>
<li>
	<h3>Having two references to same CSS file, and replacing one, no longer replaces the other</h3>
	<p>There was a bug that most obviously shows in <a href="http://entireweb.com">entireweb.com</a>, in which replacing one of the duplicate references to a CSS file via JavaScript would replace all occurrences of that CSS file. This is no longer the case.</p>
</li>
<p>Please do try it out and let us know if any of these do not work for you, or any other suggestions you might have!</p></ul>
