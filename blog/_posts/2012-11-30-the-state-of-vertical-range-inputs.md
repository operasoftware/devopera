---
title: The State of Vertical Range Inputs (as of Nov 2012)
authors:
- mike-taylor
tags:
- input
- html5
- forms
layout: article
---
<p>Yesterday I found myself needing to write a silly demo to sketch out some code (to be used in a larger project). The idea was to dump a ton of <code>&lt;input type=range&gt;</code> elements on a page, alternate between horizontal and vertical orientations, and manipulate the <code>value</code> property in various magical ways.</p>

<span class='imgcenter'><img alt='' src='http://files.myopera.com/miketaylr/blog/rangesss.png' /></span>

<p>The default rendering of <code>type=range</code> is a horizontal slider widget. To see it yourself quickly, put the following in your browser URL bar: <code><pre>data:text/html, &lt;input type=&quot;range&quot;&gt;</pre></code></p>

<p>There&#39;s a catch though &#x2014; not all browsers support this yet. But we&#39;re really, really <a href="http://caniuse.com/#feat=input-range">close</a>, especially with <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=344618">an implementation in progress</a> for Firefox (Microsoft beating Mozilla? End of days, etc.).</p>

<p>So how do you get a vertical range slider? The <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#range-state-(type=range">HTML Standard mentions</a> &quot;determin[ing] the orientation of the control from the ratio of the style-sheet-specified height and width properties.&quot; So as long as you define the width to be smaller than the height, your browser should create a vertical range input for you.</p>

<p>You can <a href="http://software.hixie.ch/utilities/js/live-dom-viewer/?saved=1943">see if this works in your browser</a> right now.</p>

<p>Unfortunately, Opera is still the only browser to support this out of the box. Webkit-based browsers can get by with the <code>-webkit-appearance: slider-vertical</code> non-standard CSS, but that doesn&#39;t help Firefox or IE10.</p>

<p>But what about Firefox? Luckily there&#39;s a <a href="http://duckduckgo.com/?t=ous&amp;amp;q=html5+range+input+polyfill">handful of polyfills</a> out there. You&#39;ll just have to let me know if anyone of them enable vertical ranges, and will work for IE10!</p>

<p>So the good news is that we&#39;re really close to all modern browsers supporting <code>&lt;input type=range&gt;</code>. And the less good news is that native vertical ones need more time. It&#39;s time to tweak my silly demo.</p>
