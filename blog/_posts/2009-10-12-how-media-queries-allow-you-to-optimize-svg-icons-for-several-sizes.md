---
title: How media queries allow you to optimize SVG icons for several sizes
authors:
- andreas-bovens
tags:
- opera
- svg-open
- video
- svg
- media-queries
- odin
layout: article
---
One thing that seems to come up from time to time when talking about <abbr title="Scalable Vector Graphics">SVG</abbr> is the apparent lack of a mechanism to make certain size specific adjustments. Typical use case is icon design, where you want to make sure the outline of the icon you&#39;re creating is always 1px, regardless of the icon being 16, 32 or 64 pixels in size.

While at the <a href="http://www.svgopen.org/2009/">SVG Open</a> conference last week, I investigated how this problem could be solved, and found out that you can do this by using media queries inside the SVG file. Different <code>width</code>s set on the <code>img</code> tag pointing to the SVG file then will trigger different <code>max-width</code>/<code>min-width</code> media queries to be triggered.

I&#39;ve presented my findings during the lightning talks session at SVG Open, and have turned the talk into a <a href="http://www.youtube.com/watch?v=YAK5el8Uvrg">YouTube video</a>, which you can watch below.

<object type="application/x-shockwave-flash" style="width:425px; height:344px;" data="">
<param name="movie" value="http://www.youtube.com/v/YAK5el8Uvrg" />
</object>

Referenced demos:<ul><li><a href="http://people.opera.com/andreasb/demos/demo_mediaqueries/">Media Queries in HTML</a></li><li><a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/update/svgscalebasic.html">Colored Circle</a></li><li><a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/circles.html">One SVG image, with media queries triggering different colors</a></li><li><a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/update/svgscalelogo.html">Logo, turning into a simplified logo when smaller</a></li><li><a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/update/svgscalegold.html">Gold trend chart, turning into a sparkline when smaller</a></li></ul>
