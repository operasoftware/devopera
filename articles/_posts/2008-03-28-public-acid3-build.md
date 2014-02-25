---
title: Public Acid3 Build
authors:
- lars-bolstad
intro: 'Two days ago Opera reached a 100/100 pass rate on [the Acid3 test](http://acid3.acidtests.org/) for the first time and we published a screenshot on the Desktop team blog to back up the claim. I am pleased to announce the first public build with a 100/100 pass rate and pixel-perfect rendering!'
tags:
- acid
- labs
license: os-asa
layout: article
---

Two days ago Opera reached a 100/100 pass rate on [the Acid3 test][1] for the first time and we published a screenshot on the [Desktop team blog][2] to back up the claim. I am pleased to announce the first public build with a 100/100 pass rate and pixel-perfect rendering! The build can be downloaded here: [Windows][3], [Linux][4].

[1]: http://acid3.acidtests.org/
[2]: http://my.opera.com/desktopteam/blog/2008/03/26/opera-and-the-acid3-test
[3]: http://snapshot.opera.com/windows/opera_wingogi_acid3.zip
[4]: http://snapshot.opera.com/unix/opera_lingogi_acid3.tar.gz

As you will notice, this is not a regular Opera desktop build, but a version of WinGogi desktop. This is the Windows version of the reference builds that we use internally for testing Opera’s platform-independent Core. “Desktop” means it is compiled with the same feature set as our regular desktop browser. Still, we do not recommend using this build for regular Web surfing as it lacks some of the security-related features found in our regular desktop versions.

In addition to a 100/100 pass rate and pixel-perfect rendering, the animation needs to be “smooth” in order to pass the test formally. While the actual smoothness of the animation to some extent depends on the capabilities of the machine running the build (and even on the responsiveness of the acidtests.org web site and your network connection speed for one of the tests), there are at least two subtests where we feel we need to improve the performance in order to achieve a perfect pass on current hardware. Clicking on the “A” in “Acid3” brings up a dialog listing the tests that took too long to execute.

For comments, please head over to the [Desktop team blog][5].

[5]: http://my.opera.com/desktopteam/blog/2008/03/28/public-acid3-build
