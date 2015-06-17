---
title: 'Installable Web Apps and Add To Homescreen'
authors:
- bruce-lawson
intro: 'This labs build of Opera for Android begins to bridge the gap between native and web apps' User Experience.'
tags:
- android
- opera-mini
license: cc-by-3.0
published: false	
---

# Installable Web Apps and Add To Homescreen

Today, we’re launching a labs build of Opera for Android with a new feature, provisionally called Add To Homescreen, that allows web apps to be “bookmarked” on to the homescreen of your visitors' device, increasing engagement and visibility of your branding. When your visitor taps your icon on their homescreen, Opera is opened without browser chrome (optionally) so your app is full-screen.

## Why? 

Alex Russell of the Google Chrome team has an excellent write-up called [Progressive Apps: Escaping Tabs Without Losing Our Soul](https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/comment-page-1/#comment-25492) that explains many of the advantages from both a developer and consumer perspective.

Two more that appeal to us:

### No update distribution lag

With a centralised app store distribution model, the user receives notification that a new version of your app is available; they download it and install it. However, in many parts of the world, data is expensive or wifi is a luxury, so people don’t update over their mobile connections. This means that outdated versions of your app continue to be used long after you’ve released an update. If the outdated version has a security flaw, this is a problem.

With Installable Web Apps, the app is actually on your web server, so the instant you update it, everybody gets it - there's no update distribution lag, and the user isn’t wasting their precious data to download a new version of your app.

### Less storage space is required

The [average app user has 36 apps on their smartphone (PDF)](https://think.storage.googleapis.com/docs/mobile-app-marketing-insights.pdf). 25% are used daily (social/ comms/ gaming); 25% are never used.

Those occasionally-used apps are taking up a lot of storage on a device that may be inexpensive and therefore have little space. We know from the [2015 Google I/O keynote](http://www.singjupost.com/google-io-2015-keynote-full-transcript/7/) that

> over a quarter of new Android devices have only 512 MB of RAM

and, according to [Techrepublic](vhttp://www.techrepublic.com/article/ram-a-lama-dont-be-a-ding-ding-about-android-storage/),

> Internal storage is particularly important, because this is where your apps are stored. If you buy a budget or entry-level phone, you’ll probably find around 512 MB of internal storage. With this low amount of storage, you’ll only be able to install a few apps. 

Installable Web Apps only store an icon and a text-based JSON manifest on the device, thereby using much less storage.

## Installation mechanisms 

In this labs build, site visitors can save a page to the homescreen by tapping the "+" icon on the left of the URL bar.

[!! screenshot]

In a future release, we’ll make it more discoverable: under certain circumstances Opera will prompt the user to and offer to Add to Homescreen.



[screenshot of banner on dev.Opera]

[!! HEURISTICS??]

Note that this intentionally differs from the heuristics used by Chrome for Android (which are, themselves, [subject to change](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en#criteria-faq)). We intend to share information with the Chrome team on what works and what doesn’t, to make this a more compelling feature. In short: the heuristics will change.

If you never want the App Install Banner to be shown, you can [cancel it](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android#cancel) by listening for `beforeinstallprompt` and preventing default. [Maybe lose this paragraph as we're not releasing the app banner yet so it's confusing]
    

## Defining icon and start-up characteristics

To make your site “installable”, you need to declare some characteristics that are stored by the operating system and passed to Opera when the icon is activated.

Spec author Marcos Cáceres and I documented this in [the HTML App Manifest](http://html5doctor.com/web-manifest-specification/#appname).

Opera (and Chrome) for Android require

* a `short_name`
*  a `144x144` png icon
* a mime type of `image/png` on your icon declaration

!! check - do we implement all of this???


## Navigating outside the App’s scope

In your manifest file, you declare the *scope* of your App:

    {
    "scope": "/myapp"
    }

If the user follows a link that takes them outside the scope of your App, the browser will flash 68 times, the device will vibrate like a walrus possessed by Satan and a klaxon will sound. [!! what DOES happen?]

This lets the user know they’re outside *your* app, and reveals the URL bar so they can know where they really are. ([Link rot is prevalent](https://www.tbray.org/ongoing/When/201x/2015/05/25/URI-decay) on the web, so it’s possible that a link you provided has been taken over by someone else, potentially malicious.)

## Conclusion

At Opera, we’re excited to promote Web Apps to be “first-class citizens” on Android devices, with visibility alongside native apps; we love the Web and we want to see it thrive.