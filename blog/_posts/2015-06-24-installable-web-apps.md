---
title: 'Installable Web Apps and Add to Home screen'
authors:
- andreas-bovens
- bruce-lawson
intro: 'This labs build of Opera for Android begins to bridge the gap between the native and web apps’ user experience.'
tags:
- android
- opera
- javascript
- offline
- service-workers
license: cc-by-3.0
---

Today, we’re excited to release a [special labs build of Opera for Android](http://www.opera.com/download/get/?partner=www&product=android&level=Developer) with an experimental new feature, called “Add to Home screen”, which you can find when clicking the small plus button on the left of the address bar.

When a user clicks “Add to Home screen” after loading your site in Opera, a shortcut to your site is placed on the Home screen of their device, allowing for direct access and increased visibility.

There is more though: “Add to Home screen” also supports the new [Web Manifest](https://w3c.github.io/manifest/) spec, which means that a website added to the Home screen can be configured to open with a particular UI mode, orientation and more. It’s even run as a separate process, just like a native app. We call this “Installable Web Apps”.

## Why?

We’re very excited about Installable Web Apps, as it bridges the gap between native and web apps in a most elegant way: it allows you to build applications using the full web stack that run in the browser as well as outside of it, without sacrificing crucial functionality like hyperlinking, and without the need for app stores or gatekeepers.

If you want to read more about why this is an exciting evolution, Alex Russell of the Google Chrome team has an excellent write-up called [Progressive Apps: Escaping Tabs Without Losing Our Soul](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/comment-page-1/#comment-25492) that explains many of the advantages from both a developer and a consumer perspective.

Here are two more that appeal to us:

### No update distribution lag

With a centralised app store distribution model, the user receives a notification that a new version of your app is available; they download it and install it. However, in many parts of the world, data is expensive or WiFi is a luxury, so people don’t update over their mobile connections. This means that outdated versions of your app continue to be used long after you’ve released an update. If the outdated version has a security flaw, this is a problem.

With Installable Web Apps, the app is actually on your web server, so the instant you update it, everybody gets it, at the time they need it — there’s no update distribution lag, and the user isn’t wasting their precious data to download a complete new version of your app.

### Less storage space required

The [average app user has 36 apps on their smartphone (PDF)](https://think.storage.googleapis.com/docs/mobile-app-marketing-insights.pdf). 25% are used daily (social/comms/gaming); 25% are never used.

Those occasionally used apps are taking up a lot of storage on a device that may be inexpensive and therefore have little space. We know from the [2015 Google I/O keynote](https://www.youtube.com/watch?v=7V-fIGMDsmE&feature=youtu.be&t=1h21m30s) that

> Over a quarter of new Android devices have only 512 MB of RAM

and, according to [Techrepublic](vhttp://www.techrepublic.com/article/ram-a-lama-dont-be-a-ding-ding-about-android-storage/),

> Internal storage is particularly important, because this is where your apps are stored. If you buy a budget or entry-level phone, you’ll probably find around 512 MB of internal storage. With this low amount of storage, you’ll only be able to install a few apps.

Installable Web Apps only store an icon, a text-based JSON manifest and some cached data on the device, which is likely to use less storage.

## Installation mechanisms

In this labs build, site visitors can add a website to their Home screen by tapping the **+** icon on the left of the address bar.

<figure block="figure">
	<video elem="media" mod="center" width="360" height="640" controls>
		<source src="{{ page.id }}/screen.mp4" type="video/mp4">
		<source src="{{ page.id }}/screen.webm" type="video/webm">
	</video>
</figure>

In a future release, we’ll make it more discoverable: under certain circumstances Opera will prompt the user to the site they’re visiting to the Home screen.

## Defining icon and start-up characteristics

To make your site “installable”, you need to declare some characteristics in a special manifest file, and make sure it’s served over HTTPS. If it’s served over HTTP or the manifest is missing, a shortcut is placed on the Home screen, but you don’t get a real installable app, display modes and orientation settings don’t take effect, etc.

Spec author Marcos Cáceres and Bruce documented what goes in the manifest in an HTML5 Doctor article called [HTML App Manifest](http://html5doctor.com/web-manifest-specification/#appname).

You can check out the one we made for Dev.Opera on [GitHub](https://github.com/operasoftware/devopera/blob/master/devopera.webmanifest).

## Display modes

The specification defines [display modes](https://w3c.github.io/manifest/#display-modes) different ways to show your web app.

Opera for Android supports

- `fullscreen` — the app will take all the screen; hardware keys and the status bar will not be shown. Note, this is not the same as HTML5 `fullscreen` mode.
- `standalone` — no browser UI is shown, but the hardware keys and status bar will be displayed.
- `browser` — the app will be shown with normal browser UI, ie. as a normal website. Note that custom orientations are not yet supported in this mode.

The `minimal-ui` mode is not supported; it falls back to `browser` as the spec requires.

## Navigating outside the app’s scope

If the user follows a link that takes them outside the domain of an installed web app, the browser will flash 68 times, the device will vibrate like a walrus possessed by Satan and a klaxon will sound. Just kidding, in that case, the externally linked site will open in a new tab in Opera, showing the address bar, so you know where you are.

## Conclusion

At Opera, we’re excited to promote Web Apps to be “first-class citizens” on Android devices and beyond, with visibility alongside native apps; we love the Web and we want to see it thrive.
