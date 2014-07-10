---
title: 'What’s New in Opera Development Snapshots: 10 February 2011 Edition'
authors:
- divya-manian
tags:
- opera-next
- odin
license: cc-by-3.0
---

<p>The new Opera Next snapshot is out with a whole slew of fixes. Download it from the <a href="http://my.opera.com/desktopteam/blog/2012/02/10/core-dnt-mail-themes">links in the Desktop team&#39;s blog post</a> or wait a while for it to show up on your Opera Next updates. Here are what would be of interest to web developers:</p>

<h3>New Features</h3>

<ul>
<li><p>Implementation of XHR2 is now complete (with the addition of Upload and Progress Events). </p></li>
<li><p>We have introduced the Do Not Track header. Karl Dubost has more details explaining <a href="http://my.opera.com/ODIN/blog/2012/02/10/implementing-do-not-track-opera">why Do Not Track header was introduced and how it works</a>.</p></li>
</ul><h3>CSS</h3>

<ul>
<li><p>When <code>textarea</code> is assigned <code>white-space</code> property that is anything but <code>nowrap</code>, Opera (and all other browsers) continue to wrap ignoring whatever value is assigned. However, we have altered this behaviour in this snapshot to respect the style property set. For example, if you had a <a href="http://jsfiddle.net/nimbu/MuCL2/"><code>white-space: pre</code> assigned to a textarea</a>, this will make sure the textarea does not wrap text.</p><p>Given that we are the only browser respecting setting of this value on textareas, we will keep a lookout for any compatibility issues - if you find any sites break in Opera because of this, <a href="http://twitter.com/odevrel">please report to us</a>.</p></li>
<li><p>A strange bug existed which would somehow invert the background color on which an outline color is applied if the value is set to <code>currentColor</code> (<a href="http://jsfiddle.net/nimbu/J3FPV/">See example of outline color set to currentColor</a>). This has now been fixed.</p></li>
<li><p>When <code>list-style-image</code> is specified with a valid image in the presence of <code>list-style-type: none</code>, it should render the bullet as an image. Previously, Opera did not render the image if it was a CSS gradient, but now it does (<a href="http://jsfiddle.net/nimbu/7FRqp/">See this example of <code>list-style-image</code> with a gradient</a>). </p></li>
<li><p>Opera calculated box and text shadows incorrectly. The spec states the box shadow must be a gaussian blur with a standard deviation equal to half the blur radius. This was not the case earlier (<a href="http://jsfiddle.net/nimbu/2szQ3/">see CSS box shadow gaussian blur compared with the SVG gaussian blur</a>). We have now fixed this for both box and text shadows. </p></li>
<li><p>Text selection <a href="http://jsfiddle.net/nimbu/AaHmq/">was impossible when you set line-height to 0 and overflow set to hidden</a>. This has been fixed. </p></li>
<li><p>Opera used to drop rules that followed a declaration that had <code>!important</code> but lacked a closing semicolon. This caused compatibility issues on numerous sites that had incorrect style declarations (all the more reason to use a tool that outputs valid styles!).You can see how <a href="http://jsfiddle.net/nimbu/7x35X/">having an invalid <code>!important</code> impacts styling of the text</a>. </p></li>
<li><p>We have been working on improving performance, and while doing so, we found a double click bug, which resulted in <a href="http://jsfiddle.net/nimbu/NRFLv/">elements remaining in <code>active</code> state after double clicking</a>. </p></li>
<li><p><a href="http://jsfiddle.net/nimbu/Hw22e/">Style tags in embedded SVG in HTML5 were ignored</a>, but no longer.  </p></li>
<li><p><a href="http://jsfiddle.net/nimbu/spsam/">Removing <code>border-radius</code> via <code>element.style.removeProperty</code> now works</a>.</p></li>
</ul><h3>APIs</h3>

<ul>
<li><p>EventSource has been updated to set <code>Use Credentials</code> to <code>false</code> by default as per <a href="https://www.w3.org/Bugs/Public/show_bug.cgi?id=14592">the latest update to the specification prompted by Jonas Sicking of Mozilla</a>. </p></li>
<li><p><code>postMessage</code> used to return <code>file: //localhost</code> (for example) instead of <code>null</code> that the specification mentions. This has been updated to return null for file scheme.</p></li>
<li><p>Occasionally, the last progress event of the FileReaderAPI would be fired after <code>loadend</code> event, but this has now been fixed. </p></li>
<li><p><code>Event.prototype</code> now has constants <a href="http://jsfiddle.net/nimbu/7Yspf/"><code>CAPTURING_PHASE</code>, <code>AT_TARGET</code>, <code>BUBBLING_PHASE</code>, <code>CAPTURING_PHASE</code>, <code>AT_TARGET</code>, and <code>BUBBLING_PHASE</code></a>.</p></li>
<li><p><code>document.lastModified</code> has been updated to return current time if it is not known, to match the spec.</p></li>
<li><p>We noted that traversing DOM and running cloneNodes,  and setting innerHTML en masse spikes CPU usage - <a href="https://bugzilla.redhat.com/page.cgi?id=browse.html&amp;amp;product=Fedora&amp;amp;bug_status=open&amp;amp;tab=components">most notably on this redhat bugzilla page</a>. This is much less strenuous on the CPU than before. </p></li>
</ul><h3>HTML</h3>

<ul>
<li>When a numeric or date input element was hidden and then cleared of value and shown, the old value was still preserved (<a href="http://jsfiddle.net/nimbu/wBEY3/">here is an example of that</a>). This has been fixed. </li>
</ul><h3>Others</h3>

<ul>
<li>about:blank is not blank enough! Previously our <a href="http://pastie.org/3356900"><code>about:blank</code> page used to look like this</a>, this has been updated to render just what the HTML5 parser would render <a href="http://pastie.org/3356911">when a blank HTML page is served</a>.</li>
</ul>
