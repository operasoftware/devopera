---
title: The State of Vertical Range Inputs (As of Nov 2012)
authors:
- mike-taylor
tags:
- input
- html5
- forms
- odin
layout: post
---

Yesterday I found myself needing to write a silly demo to sketch out some code (to be used in a larger project). The idea was to dump a ton of `<input type=range>` elements on a page, alternate between horizontal and vertical orientations, and manipulate the `value` property in various magical ways.

<figure>
	<img src="/blog/the-state-of-vertical-range-inputs/rangesss.png">
</figure>

The default rendering of `type=range` is a horizontal slider widget. To see it yourself quickly, put the following in your browser URL bar: `

	data:text/html, <input type="range">

There’s a catch though — not all browsers support this yet. But we’re really, really [close][2], especially with [an implementation in progress][3] for Firefox (Microsoft beating Mozilla? End of days, etc.).

[2]: http://caniuse.com/#feat=input-range
[3]: https://bugzilla.mozilla.org/show_bug.cgi?id=344618

So how do you get a vertical range slider? The [HTML Standard mentions][4] “determin[ing] the orientation of the control from the ratio of the style-sheet-specified height and width properties.” So as long as you define the width to be smaller than the height, your browser should create a vertical range input for you.

[4]: http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#range-state-(type=range

You can [see if this works in your browser][5] right now.

[5]: http://software.hixie.ch/utilities/js/live-dom-viewer/?saved=1943

Unfortunately, Opera is still the only browser to support this out of the box. Webkit-based browsers can get by with the `-webkit-appearance: slider-vertical` non-standard CSS, but that doesn’t help Firefox or IE10.

But what about Firefox? Luckily there’s a [handful of polyfills][6] out there. You’ll just have to let me know if anyone of them enable vertical ranges, and will work for IE10!

[6]: http://duckduckgo.com/?t=ous&q=html5+range+input+polyfill

So the good news is that we’re really close to all modern browsers supporting `<input type=range>`. And the less good news is that native vertical ones need more time. It’s time to tweak my silly demo.