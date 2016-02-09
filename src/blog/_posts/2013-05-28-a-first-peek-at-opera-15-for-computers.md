---
title: A First Peek at Opera 15 for Computers
authors:
- bruce-lawson
tags:
- stash
- discover
- blink
intro: 'Hurrah! Hot on the heels of the release of Opera 14 for Android (based on Chromium 26), here’s a first peek at our all new Opera for Computers. It’s called Opera Next 15 and it’s based on Chromium 28 — which means that it comes with Blink on board — but as it’s an evergreen browser with a fast release cycle, we don’t recommend reading too much into the digits — it’s what’s in it that counts!'
license: cc-by-3.0
---

Hurrah! Hot on the heels of the release of [Opera 14 for Android][1] (based on Chromium 26), here’s a first peek at our all new Opera for Computers. It’s called [Opera Next 15][2] and it’s based on Chromium 28 — which means that it comes with [Blink][3] on board — but as it’s an evergreen browser with a [URL=http://my.opera.com/desktopteam/blog/opera-features-and-release-cycle]fast release cycle[/URL], we don’t recommend reading too much into the digits — it’s what’s in it that counts!

[1]: /blog/opera-14-for-android-is-out
[2]: https://www.opera.com/next/
[3]: http://www.chromium.org/blink

This is a stable build — we’ve been using it as our main browser for a while now —, but it isn’t the final release - you can expect rapid updates in the weeks to come. Note that this Next build is available for Windows and Mac. A Linux version is coming later, but we wanted as many people to have a peek as soon as possible.

## So what’s new?

First, you’ll notice a radically simpler UI that is nicely integrated with the platform. We want your Opera to feel native to your operating system — after all, it’s probably the program you use the most apart from your OS.

Just like on Opera 14 for Android, we’ve merged bookmarks into Speed Dial, which give you a visual overview of your favorite pages. You can now group Speed Dials together into folders, just by dragging one on top of the other — if you want, you can name the folder via a simple right-click.

To add a page or extension to Speed Dial, simply click on the big plus sign. You can also do this while you’re browsing, of course: just click the “Add to Speed Dial” icon in the top right corner of the address bar, and the page in question will be added to Speed Dial.

If you have a lot of Speed Dial items, you can click the search icon in the top right corner. Start typing in the field that appears, and your bookmarked sites will be filtered in real-time.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/add-to-speed-dial.png">
</figure>

### Stash

Do you sometimes find yourself browsing the web, and coming across pages you want to save for later — e.g. a list of favorite gadgets on Amazon, or a selection of hotels on a booking site? This always posed a problem in the past, and many were using their tab bar to hold tabs for later use. With Opera 15, you can **Stash** a page, and return to it when you have time.

Simply hit the heart icon when you’re on a page you like and whenever you want to return to it, open your Stash from the start page (open a new tab or click the Start Page icon to the left of the address field). When a page has already been added to your Stash, the address field icon will be highlighted to reflect that. You can click the highlighted icon to remove the page from your Stash.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/stash.png">
</figure>

To adjust the size of your stashed items, use the slider to the right. If you have a lot of stashed items, you can click the search icon in the top right corner of the Stash page, and just like with Speed Dial, filter your stashed sites in real-time.

### Discover

Discover is another new feature to Opera 14 for Android and Opera 15 for Computers, which helps you find interesting content to jump straight into browsing. Click the cog to change settings - select your language and location, and select subjects depending on your interests. For launch there are 13 categories in 32 languages.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/discover.png">
</figure>

### Combined address and search field

Opera 15 for Computers has a combined address and search bar, showing suggestions (that can be turned off via Settings > Privacy and Security) and multiple search providers.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/smartbox.png">
</figure>

### Off-road mode

Just because you have a computer rather than a mobile device doesn’t mean that you’re always on fast wifi; you might be on shared wifi at a coffee shop, or your network might be slow today. Activating Off-Road Mode from the Opera Menu sends pages through Opera’s compression servers, reducing the page size significantly by using a smart mix of image compression, SPDY and more. Note that rendering happens on the client side, so JavaScript will work without a problem. Secure (https) pages don’t get sent through our proxy.

### Mouse gestures

One of Opera’s classic features, [mouse gestures][4], let you perform common browsing actions with small, quick mouse movements. Note that on Mac they are by default disabled, since Mac has native support for system touch gestures.

[4]: https://www.opera.com/help/tutorials/gestures/

Advanced keyboard shortcuts are also available, but are off by default. To enable them, go to Settings > Browser > Enable advanced keyboard shortcuts. And while your at it, have a look at the other advanced settings on opera:settings.

### For developers

Developer tools are available behind a setting (More Tools > Enable developer tools). You’ll find there Web Inspector (Opera Dragonfly is not included in this release), the classic View Source option, and a list of installed browser plugins.

### Extensions

With Opera switching to Chromium and this complete UI remake, our [URL=https://dev.opera.com/articles/view/major-changes-in-operas-extensions-infrastructure/]extensions infrastructure has also undergone a major overhaul[/URL]: from Opera 15 onward, Opera 11 and 12’s extension format is no longer supported (and we’ve [archived its documentation on GitHub][5]), and instead, **we’ve switched to Chromium’s extension model**. At this point, Opera 15 supports a subset of the Chromium extension APIs — with more to come — as well as our own [Speed Dial API][6].

[5]: https://github.com/operasoftware/operaextensions.js/tree/master/docs
[6]: https://dev.opera.com/extensions/speed-dial-manual/

If you’re a Chromium extensions developer, be sure to submit your extensions to [our extensions catalog][7]! Extension developers like Evernote, Feedly, Disconnect, LastPass, WOT, Ghostery, and the very cool cottonTracks have already done this, and you can find their extensions [in the catalog][8].

[7]: http://addons.opera.com/extensions/
[8]: https://addons.opera.com/en/extensions/

If you’re new to Chromium extension development, we’ve prepared a [number of tutorials][9] and have included relevant API documentation as well. We’ve also built a [URL=https://github.com/operasoftware/oex2nex]conversion utility [/URL]into the developer interface of [our extensions catalog][10] to make the transition from the old to the new format as smooth as possible.

[9]: https://dev.opera.com/extensions/
[10]: http://addons.opera.com/extensions/

### What is not (yet) in Opera 15 for Computers?

Opera 15 doesn’t include the M2 mail client. Not all current Opera customers use M2, so to simplify the UI even further and reduce the footprint of the program, we’ve decided to split it out into a separate product, called Opera Mail. You can [get a preview build on the Desktop Team blog][11].

[11]: http://my.opera.com/desktopteam/blog/opera-next-15-0-released/

Other features missing from the first release of Opera based on Chromium will be evaluated and potentially re-instated in future releases.

`getUserMedia` isn’t hooked up yet in Opera 15 and will be come back in a future release. W3C Geolocation is similarly dropped for the time being. It’s a feature most used with mobile browsers, hence it’s included in Opera 14 for Android. It will of course return in a future release.

The Developer Flags page is also still missing, although [select command line flags are available][12]. We plan to bring this back as well in the near future.

[12]: http://www.chromium.org/developers/how-tos/run-chromium-with-flags

### Made to discover

There’s a lot inside Opera Next 15, with a simple, friendly and attractive user interface. Take a look around; in the settings you can disable cookies, pop-ups, plugins etc on a site-by-site basis, send a Do Not Track header, disable various speed-optimizing enhancements should you choose so. We hope you’ll enjoy discovering its features, and maybe build some extensions for it!
