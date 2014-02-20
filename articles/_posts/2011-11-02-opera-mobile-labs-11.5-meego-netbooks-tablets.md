---
title: Opera Mobile Labs 11.5 for MeeGo Netbooks and Tablets
authors:
- mostyn-bramley
intro: 'Since releasing Opera Mobile 11.5 for Android earlier this month, we have been working on an updated Labs release for MeeGo netbooks and tablets running Intel Atom processors.'
tags:
- atom
- intel
- meego
- opera-mobile
- labs
layout: article
---

**Update 2012-02-21:** This post has been edited with information about an updated build available [from our download server][1] as well as from the Intel AppUp store. For a Nokia N9 build, check our [A treat for Nokia N9 users][2] Opera Labs post.

[1]: http://www.opera.com/download/get.pl?sub=++++&id=34191&location=270&nothanks=yes
[2]: /articles/a-treat-for-nokia-n9-users-opera-mobile-labs-11-5/

Since releasing [Opera Mobile 11.5 for Android][3] earlier this month, we have been working on an updated Labs release for MeeGo netbooks and tablets running Intel Atom processors.

[3]: https://market.android.com/details?id=com.opera.browser&hl=en

Aside from the changes you may have seen on our Android release, this build contains a nifty hybrid mouse/touch input method which adds support for mouseover events while still working on touchscreens. To try it out, use the `-usehybridinput` command line argument when launching.

As with other Labs releases, this build has not gone through full release testing, but it should work well enough to have some fun with. To install, [download this package][4], and run the following command in a root terminal on your device:

[4]: http://www.opera.com/download/get.pl?sub=++++&id=34191&location=270&nothanks=yes

    rpm -i Opera_Mobile-Labs-MeeGo-11.50-42.i386.rpm

Or, if you have a previous version of Opera Mobile installed:

    rpm -e Opera_Mobile-MeeGo
    rpm -U Opera_Mobile-Labs-MeeGo-11.50-42.i386.rpm

Alternatively, if your MeeGo install has the [Intel’s AppUp store][5], you should be able to find Opera Mobile there as a free download as well.

[5]: http://www.appup.com/applications/index

## Release notes

- Added data usage view: see how much bandwidth you have saved with Opera Turbo.
- Updated Presto engine to 2.9.201.
- Hybrid mouse/touch input events support for touchscreen netbooks.

## Known issues

- Portrait orientation on tablets is not supported.
- HTML5 video is not supported.
- Flash is not supported.

## Additional notes for the release of

- Italian, French, German and Spanish speaking users will be pleased to know that the user interface should appear in your system’s default language.
- The compromised DigiNotar Root Certificate Authority has been removed from the list of trusted certificate authorities. Some background details are available [over at the Opera Rootstore blog][6].

[6]: http://my.opera.com/rootstore/blog/2011/09/06/diginotar-first-step-disabling-the-root