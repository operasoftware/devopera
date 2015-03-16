---
title: How Media Queries Allow You to Optimize SVG Icons for Several Sizes
authors:
- andreas-bovens
tags:
- video
- svg
- media-queries
license: cc-by-3.0
---

One thing that seems to come up from time to time when talking about SVG is the apparent lack of a mechanism to make certain size specific adjustments. Typical use case is icon design, where you want to make sure the outline of the icon you’re creating is always 1px, regardless of the icon being 16, 32 or 64 pixels in size.

While at the [SVG Open][1] conference last week, I investigated how this problem could be solved, and found out that you can do this by using media queries inside the SVG file. Different `width`s set on the `img` tag pointing to the SVG file then will trigger different `max-width`/`min-width` media queries to be triggered.

[1]: http://www.svgopen.org/2009/

I’ve presented my findings during the lightning talks session at SVG Open, and have turned the talk into a [YouTube video][2], which you can watch below.

[2]: https://www.youtube.com/watch?v=YAK5el8Uvrg

<figure block="figure">
	<iframe width="420" height="315" src="https://www.youtube.com/embed/YAK5el8Uvrg" allowfullscreen elem="media"></iframe>
</figure>

Referenced demos:

- [Media Queries in HTML](http://people.opera.com/andreasb/demos/demo_mediaqueries/)
- [Colored Circle](http://people.opera.com/andreasb/demos/demos_svgopen2009/update/svgscalebasic.html)
- [One SVG image, with media queries triggering different colors](http://people.opera.com/andreasb/demos/demos_svgopen2009/circles.html)
- [Logo, turning into a simplified logo when smaller](http://people.opera.com/andreasb/demos/demos_svgopen2009/update/svgscalelogo.html)
- [Gold trend chart, turning into a sparkline when smaller](http://people.opera.com/andreasb/demos/demos_svgopen2009/update/svgscalegold.html)
