---
title: Buffered rendering in SVG
authors:
- andreas-bovens
tags:
- svg-open
- performance
- svg
- odin
layout: article
---
<p>One of the things recently added to Opera is support for the <a href="http://www.w3.org/TR/SVGTiny12/painting.html#BufferedRenderingProperty"><code>buffered-rendering</code> SVG property</a>. SVG content providers can use this property to provide a hint to the implementation about how often an element is modified so it can make better speed vs. memory trade-offs.</p>
<p>The attribute values for <code>buffered-rendering</code> are <code>auto</code>, <code>dynamic</code>, and <code>static</code>. From the <a href="http://www.w3.org/TR/SVGTiny12/painting.html#BufferedRenderingProperty">SVG Tiny 1.2</a> recommendation:</p>
<ul>
<li><code>auto</code>: Indicates that the user agent is expected to use a reasonable compromise between speed of update and resource allocation.</li>
<li><code>dynamic</code>: Indicates that the element is expected to be modified often.</li>
<li><code>static</code>: Indicates that the element is not expected to be modified often. This suggests that user agent may be able to allocate resources, such as an offscreen buffer, that would allow increased performance in redraw. It does not mean that the element will never change. If an element is modified when the value is &#39;static&#39;, then redraw might have reduced performance.</li>
</ul>
<p>This may sound abstract, so let&#39;s have a look at an actual example. <a href="http://people.opera.com/andreasb/demos/demos_svgopen2010/bufferedrendering2/highlight-default.svg">The first demo</a>, which does not have buffered rendering specified, is an SVG image with an embedded PNG, on top of which a complex filter is applied. When hovering over the image, the filter is disabled in a radius around the pointer. When viewed in <a href="http://www.opera.com/browser/">Opera 10.6x</a>, you can see the performance is quite slow, and the filter-less circle has trouble catching up with the pointer.</p>
<p>If we now set the <code>buffered-rendering</code> property on the containing <code>&lt;g&gt;</code> to <code>static</code> (see <a href="http://people.opera.com/andreasb/demos/demos_svgopen2010/bufferedrendering2/highlight-static.svg">demo 2</a>), you&#39;ll notice the performance will be much faster. This is because the <code>static</code> value makes the browser cache the filter rendering as a raster, resulting in a better allocation of resources, and thus better performance.</p>
<p>Now, interestingly enough, the difference between these two demos will be less obvious when viewed in the latest <a href="http://my.opera.com/desktopteam/blog/">Opera 10.70 snapshots</a>: they both perform very well, and there is only a small performance delay on the first example. The reason for this is because the Opera 10.70 builds come with a number of SVG filter optimizations, which, of course, is even better ;-)</p>
<p>So, to wrap up this post, here&#39;s <a href="http://people.opera.com/andreasb/demos/demos_svgopen2010/bufferedrendering/">another example</a> of buffered rendering - you&#39;ll notice a clear difference in framerate between the two demos. Be sure to try out buffered rendering in your own SVG graphics, and let us know how it goes!</p>
