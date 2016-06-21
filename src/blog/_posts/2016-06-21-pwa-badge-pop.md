---
title: 'Making progressive web apps even better: ambient badging and “pop into browser”'
authors:
- andreas-bovens
intro: 'We’re excited to release a Labs build of Opera for Android with support for two experimenal features that enhance the discoverability and use of progressive web apps.'
tags:
- pwa
- mobile
- android
- opera
license: cc-by-3.0
---

<figure block="figure" mod="right">
	<img elem="media" src="{{ page.id }}/picture.png" width="360" style="margin: 0 0 15px 15px" alt="Add to home screen badge in URL bar">
</figure>

We’re excited to release a [Labs build of Opera](https://www.opera.com/download/get/?partner=www&product=android&level=Labs) for Android with support for two experimenal features that enhance the discoverability and use of progressive web apps.

## Ambient badging

Earlier this month, [Alex Russell wrote](https://infrequently.org/2016/06/pwa-discovery-you-aint-seen-nothin-yet/):

> Wouldn’t it be great if there were a button in the URL bar that appeared whenever you landed on a PWA that you could always tap to save it to your homescreen?

We have been exploring this idea for a while, and are previewing an early version of this idea in this Labs build.

If you load a site that passes the criteria to qualify as a progressive web app, a small phone icon is shown to the left of the URL bar, labeling it as such. Note that this is different from the [“add to home screen” install banner](https://dev.opera.com/blog/web-app-install-banners/), which requires a user engagement check.

Give it a spin on one of the sites listed on [pwa.rocks](https://pwa.rocks/) and [let us know](https://twitter.com/odevrel/) how it goes.

## Pop into browser

<figure block="figure" mod="right">
	<video elem="media" controls cover="{{ page.id }}/video.jpg" width="360" style="margin: 0 0 15px 15px">
		<source src="{{ page.id }}/video.mp4" type="video/mp4">
		<source src="{{ page.id }}/video.webm" type="video/webm">
	</video>
</figure>

A few weeks ago, there were [some discussions](https://adactio.com/journal/10708) around the lack of visibility of URLs in progressive web apps. What to do for instance if you want to find out the URL of a page inside a progressive web app?

[Jeremy Keith tweeted](https://twitter.com/adactio/status/734875747169501185):

> I want people to be able to copy URLs. I want people to be able to hack URLs. I’m not ashamed of my URLs …I’m downright proud.

Also here, we’ve been doing some explorations: initially, we thought we could surface the URL by requiring the user to long-press anywhere in the web app and [show it in a context menu](http://www.brucelawson.co.uk/2016/on-urls-in-progressive-web-apps/). However, after further investigations, this turned out to be harder than expected — e.g. what to do with form fields, where context menus serve a different purpose? Then we had the idea to somehow connect it to the “pull-to-refresh” spinner, as a secondary gesture to the left or right. You can see in the video how this works. Quite useful, and it’s discoverable, without getting in the way.

These are just early proposals, and we may or may not include them in a final Opera for Android build. In the meanwhile, we’re happy to hear your feedback: give it a spin and [let us know](https://twitter.com/odevrel/) what you think.
