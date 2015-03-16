---
title: Profiler updated with zoomable timeline
authors:
- david-hasather
tags:
- dragonfly
license: cc-by-3.0
---

Today we’re releasing an update to the profiler, which now offers variable zooming capabilities. Above the main timeline, there is now a mini-timeline where all events are shown. To zoom in on a specific location, just click and drag to select an area in the mini-timeline. When an area has been selected, it can be moved by grabbing the selected area, or resized by dragging one of the edges. You can also resize or move by using the mouse wheel or the arrow keys.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/0profiler.png" alt="">
	<figcaption elem="caption">The newly updated profiler view.</figcaption>
</figure>

We’ve also added the ability to filter out certain events with a short duration. The filter can show all events, all events over 1 ms, or all events over 15 ms.

We hope these changes will make it easier to inspect the profiled data. As ever, we welcome any feedback or suggestions.
