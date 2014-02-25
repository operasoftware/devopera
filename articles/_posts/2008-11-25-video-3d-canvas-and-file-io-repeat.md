---
title: 'Video, 3D Canvas and File I/O: Repeat!'
authors:
- chris-mills
intro: 'We’ve done it again! This article gives you the low down on our _all new_ Opera desktop build with support for the HTML5 `<video>` element, 3D canvas, and the File I/O API. Find out what it contains, and download builds for Windows, Mac and UNIX!'
tags:
- video
- file-io
- canvas
- opera-9
- labs
layout: article
---

We’ve done it again - we’ve made a new build available of Opera with support for video, file I/O and 3D canvas. If you enjoyed the [builds][1] we released last time, then you should upgrade - you’ll enjoy the increased stability of this build, along with other things like low-bandwidth mail mode, and various security upgrades (These new builds are based on the Opera 9.62 stable release).

[1]: http://labs.opera.com/news/2008/07/18/

If you haven’t tried video, now might be a good time. Whatever the case, click on these links and get cracking:

- [ Opera 9.62 Video, 3D canvas and File I/O build for Windows ][2]
- [ Opera 9.62 Video, 3D canvas and File I/O build for Windows (Classic installer) ][3]
- [ Opera 9.62 Video, 3D canvas and File I/O build for Mac ][4]
- [ Opera 9.62 Video, 3D canvas and File I/O build for UNIX ][5]

[2]: http://snapshot.opera.com/windows/o962s_video_10469m.exe
[3]: http://snapshot.opera.com/windows/o962s_video_10469.exe
[4]: http://snapshot.opera.com/mac/o962s_video_5257.dmg
[5]: http://snapshot.opera.com/unix/snapshot_video-2467/

These builds are officially experimental so may contain bugs. Please remember to back up your data before installing any experimental build. (Remember to back up your data anyway. Computers don’t last forever).

## HTML 5 video

If you’re not sure what this is all about, it is all about being able to put videos on the web as easily as this:

	<video controls="controls" src="some.ogg">
		Better to have backup content in case <a href="some.ogg">your video file</a>
		doesn’t work for the user. Perhaps they don’t have a nice Ogg-playing browser.
		Perhaps they don’t have the bandwidth for video. Perhaps they can’t see it anyway,
		or just choose not to. You can add a <img src="some.jpg" alt="random picture">
		in the backup content, of course.
	</video>

There are more links in the [ release notes from the last video build ][6] .

[6]: http://labs.opera.com/news/2008/07/18/

## File I/O

Second, this release is all about being able to build applications that can run a real file system - one the user can see and play with within the application the same as they would on a local machine. This is achieved using the [File I/O API][7] we released earlier this year.

[7]: http://labs.opera.com/news/2008/05/08/

## 3D Canvas

Third, using this build you can run cool 3D applcations created using [our 3D Canvas implementation][8], which is included in this build.

[8]: http://my.opera.com/timjoh/blog/2007/11/13/taking-the-canvas-to-another-dimension

Note: 3D canvas doesn’t work on all systems. If you don’t have the right stuff in your machine this build will simply not render 3D canvas objects.

Enjoy!
