---
title: 'All Together Now: Video, 3D, File Access'
authors:
- charles-mccathienevile
intro: 'It’s here, the newest singing, dancing labs build (so far…). This time we basically have the latest desktop build plus video, 3D canvas, and File I/O. And this time we have Windows, Linux and Mac builds — so all you Mac fans, you can now have an Opera of your own in Ogg Theora.'
tags:
- carakan
- performance
- ecmascript
- javascript
- opera-10
- labs
license: os-asa
---

It’s here, the newest singing, dancing labs build (so far…). This time we basically have the latest desktop build plus video, 3D canvas, and File I/O. And this time we have Windows, Linux and Mac builds — so all you Mac fans, you can now have an Opera of your own in Ogg Theora.

Don’t forget the articles on these features, how to use them, and examples that we have published in the past:

File I/O (originally [announced in May][1], and [proposed to W3C][2] for development as a standard) gives you a way to interact with the filesystem in your application. In this build, we have only enabled this feature for widgets, which can now ask the user to enable them to use an area in the filesystem — either to work with their existing content (manage photos that other applications also work on, for example) or a new clean sandbox for storage. Code documentation online or as a downloadable [zip package][4] and a [zip package of examples][5] are available.

[1]: http://labs.opera.com/news/2008/05/08/
[2]: http://lists.w3.org/Archives/Public/public-webapi/2008May/0065.html
[4]: /articles/all-together-now-video-3d-file-access/FileIO.zip
[5]: /articles/all-together-now-video-3d-file-access/FileIO-examples.zip

The video feature provides support for the royalty-free Ogg Theora video format, used by Wikipedia and others. There are [HTML5 examples][6] based on working drafts of the HTML 5 specification being developed at W3C, and Erik Dahlström’s [video in SVG][7] article.

[6]: http://dev.opera.com/articles/a-call-for-video-on-the-web/
[7]: http://my.opera.com/MacDev_ed/blog/2007/11/21/svg-at-the-movies-take-two

3D canvas is the most experimental feature in this build. At least Opera and Mozilla have been thinking about how to provide 3D rendering in a way we can implement cross-platform even on proprietary systems. 3D canvas, like its 2D cousin, gives developers a javascript-based approach (which meant that we could implement it for you to try, without spending massive amounts of time that should be spent on current work). Tim Johansson, who implemented it, wrote about [using 3D canvas][8] including some examples.

[8]: http://my.opera.com/timjoh/blog/2007/11/13/taking-the-canvas-to-another-dimension

## The fine print

This is a _labs_ build. That means it may eat your data, crash your machine, or do other bad things. BACKUP YOUR DATA before you install this, and you might not want to use it as your main build. (Then again, maybe you’re a video fiend, and you _do_ want this as your main build. It is pretty close to the desktop team’s “[peek under the hood][9]” released today, so roughly the same issues list should apply). You have been warned…

[9]: http://my.opera.com/desktopteam/blog/2008/07/18/a-peek-under-the-hood

If you want to discuss the builds please head over to the [Desktop Team blog][10] on My Opera.

[10]: http://my.opera.com/desktopteam/blog/2008/07/18/file-i-o-video-3d-canvas-all-in-one-go
