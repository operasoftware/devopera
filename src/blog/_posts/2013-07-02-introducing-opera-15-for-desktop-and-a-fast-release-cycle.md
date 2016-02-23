---
title: Introducing Opera 15 for Computers, and a Fast Release Cycle
authors:
- bruce-lawson
tags:
- chromium
- blink
license: cc-by-3.0
---

Here it is — [Opera 15 for computers](https://www.opera.com/computer): your fast, secure browser that doesn’t get in your way. Here’s a quick video introduction.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_mpF5aQpmow" frameborder="0" allowfullscreen></iframe>

Opera 15 for computers also commences our new [fast release cycle](https://www.opera.com/blogs/desktop/2013/05/opera-features-and-release-cycle/), so expect to see what’s in the next version very soon, too.

### So what’s new?

First, you’ll notice a radically simpler UI that is nicely integrated with the platform. We want your Opera to feel native to your operating system — after all, it’s probably the program you use the most apart from your OS.

### Speed Dial

Just like in Opera for Android, we’ve merged bookmarks into Speed Dial, which give you a visual overview of your favorite pages. When you migrate from Opera 12 to Opera 15, you’re offered the option of converting your bookmarks to Speed Dial entries — just click on the orange Bookmark Importer to get started. Note that you can now group Speed Dial entries together into folders, just by dragging one on top of the other — if you want, you can name the folder via a simple right-click.

![Speed Dial]({{ page.id }}/sd.png)

To add a page or extension to Speed Dial, simply click on the big plus sign. You can also do this while you’re browsing, of course: just click the "Add to Speed Dial" icon in the top right  corner of the address bar, and the page in question will be added to Speed Dial.

If you want to save all your open tabs into one Speed Dial folder (you’ve been doing some research, or looking at holidays), simply right-click anywhere in in the tab bar and choose "Save tabs as Speed Dial group". To re-open them all, simply right-click on the Speed Dial folder and choose Open all.

If you have a lot of Speed Dial entries, you can click the search icon in the top right corner. Start typing in the field that appears, and your bookmarked sites will be filtered in real-time.

![Add to Speed Dial button]({{ page.id }}/add-to-sd.png)

### Bookmarks and bookmarklets

Although most users don’t use bookmarks, some long-term users told us that they have many, many bookmarks in deep folder structures. We love our long-term users, so we’ve worked with developer [Stuart Langridge](http://kryogenix.org/) to develop a [Bookmarks Manager Extension](https://github.com/operasoftware/bookmarks-manager-extension) that brings some basic bookmarks functionality to Opera 15 <del>for those that want it</del> until [bookmarks are reimplemented](http://my.opera.com/desktopteam/blog/2013/07/10/ctrl-z-of-ctrl-d).

Here’s how you get started:

1. Export your bookmarks from Opera 12: Bookmarks > Manage Bookmarks > File > Export as HTML. (Make sure you choose the HTML format, which is used by other browsers, Delicious and others.)
2. Start Opera 15 and install the [Bookmarks Manager Extension](https://github.com/operasoftware/bookmarks-manager-extension), which allows you to import the structured HTML file and then constructs an IndexedDB database that you can manipulate from the extension. It will also allow you to use imported bookmarklets.

The extension is also [available on GitHub](https://github.com/operasoftware/bookmarks-manager-extension) — feel free to contribute.

Note that you can also [convert your bookmarklets to Chrome extensions](http://sandbox.self.li/bookmarklet-to-extension/) and then add them in Opera 15 through the extension manager.

### Stash

Do you sometimes find yourself browsing the web, and coming across pages you want to save for later — e.g. a list of favorite gadgets on Amazon, or a selection of hotels on a booking site? This always posed a problem in the past, and many were using their tab bar to hold tabs for later use. With Opera 15, you can **Stash** a page, and return to it when you have time.

![Stash]({{ page.id }}/stash.png)

Simply hit the heart icon when you’re on a page you like and whenever you want to return to it, open your Stash from the start page (open a new tab or click the Start Page icon to the left of the address field). When a page has already been added to your Stash, the address field icon will be highlighted to reflect that. You can click the highlighted icon to remove the page from your Stash.

To adjust the size of your stashed items, use the slider to the right. If you have a lot of stashed items, you can click the search icon in the top right corner of the Stash page, and just like with Speed Dial, filter your stashed sites in real-time.

### Discover

Discover is another new feature to Opera for Android and Opera 15 for Computers, which helps you find interesting content to jump straight into browsing. Click the cog to change settings - select your language and location, and select subjects depending on your interests. For launch there are 13 categories in 32 languages.

![Discover]({{ page.id }}/discover.png)

### Combined address and search field

Opera 15 for Computers has a combined address and search bar, showing suggestions (that can be turned off via Settings → Privacy and Security) and multiple search providers. You can also set your default search provider in the Preferences section.

### Off-Road mode

Just because you have a computer rather than a mobile device doesn’t mean that you’re always on fast Wi-Fi; you might be on shared Wi-Fi at a coffee shop, or your network might be slow today. Activating Off-Road Mode from the Opera Menu sends pages through Opera’s compression servers, reducing the page size significantly by using a smart mix of image compression, SPDY and more. Note that rendering happens on the client side, so JavaScript will work without a problem. Secure (https) pages don’t get sent through our proxy.

### Mouse gestures

One of Opera’s classic features, [mouse gestures](https://www.opera.com/help/tutorials/gestures/), let you perform common browsing actions with small, quick mouse movements. Note that on Mac they are by default disabled, since Mac has native support for system touch gestures.

Advanced keyboard shortcuts are also available, but are off by default. To enable them, go to Settings → Browser → Enable advanced keyboard shortcuts. And while you’re at it, have a look at the other advanced settings on `opera:settings`.

### For developers

Opera 15 is based on Chromium 28 — which means that it comes with [Blink](http://www.chromium.org/blink) on board — but as it’s an [evergreen browser](http://www.yetihq.com/blog/evergreen-web-browser/) with a [fast release cycle](http://my.opera.com/desktopteam/blog/opera-features-and-release-cycle), we don’t recommend reading too much into the digits — it’s what’s in it that counts.

Developer tools are available behind a setting (Enable Developer Tools). Once enabled, you’ll find the classic View Source option, and a list of installed browser plugins and Web Inspector (Opera Dragonfly is not included in this release, but [we’re hiring Dragonfly/ JavaScript developers](http://business.opera.com/company/jobs/opening/372/)).

### Extensions

With Opera switching to Chromium and this complete UI remake, our [extensions infrastructure has also undergone a major overhaul](https://dev.opera.com/articles/view/major-changes-in-operas-extensions-infrastructure/): from Opera 15 onward, Opera 11 and 12’s extension format is no longer supported (and we’ve [archived its documentation on GitHub](https://github.com/operasoftware/operaextensions.js/tree/master/docs)), and instead, **we’ve switched to Chromium’s extension model**. At this point, Opera 15 supports a subset of the Chromium extension APIs — with more to come — as well as our own [Speed Dial API](https://dev.opera.com/extensions/speed-dial-manual/).

If you’re a Chromium extensions developer, be sure to submit your extensions to [our extensions catalog](http://addons.opera.com/extensions/)! Extension developers like Pinterest, Pocket, Wunderlist, Evernote, Feedly, Disconnect, LastPass, WOT, Ghostery, cottonTracks, and over a 100 more have already done this, and you can find their extensions [in our extensions catalog](https://addons.opera.com/en/extensions/).

![Extensions catalog]({{ page.id }}/extensions.png)

If you’re new to Chromium extension development, we’ve prepared a [fresh set of extension dev tutorials](https://dev.opera.com/extensions/) and have included relevant API documentation as well. We’ve also built a [conversion utility](https://github.com/operasoftware/oex2nex) into the developer interface of [our extensions catalog](http://addons.opera.com/extensions/) to make the transition from the old to the new format as smooth as possible.

### What is not (yet) in Opera 15 for Computers?

Opera 15 doesn’t include the M2 mail client. Not all current Opera customers use M2, so to simplify the UI even further and reduce the footprint of the program, we’ve split it out into a separate product. You’re cordially invited to grab yourself a freshly-baked copy of [Opera Mail](https://www.opera.com/computer/mail), which deals with multiple accounts, mailing lists and includes an RSS reader.

`getUserMedia` isn’t hooked up yet in Opera 15 and will be come back in a future release. W3C Geolocation is similarly dropped for the time being. It’s a feature most used with mobile browsers, hence it’s included in Opera  for Android. It will of course return in a future release.

The Developer Flags page is also  missing, although [select command line flags are available](http://www.chromium.org/developers/how-tos/run-chromium-with-flags). We plan to implement this in the near future.

With our fast release cycle, you’ll soon be able to see what’s in store for Opera 16 - stay tuned to the [Desktop Team blog](http://my.opera.com/desktopteam/blog/).

### What about Linux?

We are planning to release a Chromium-based Opera for Linux, but it’s not ready yet.

### Anorak corner

As Opera 15 has a brand new rendering engine, we thought we’d explain what the product is made of. Web content is handled by Chromium/Blink, combined with the V8 JavaScript engine. On top of that, we have implemented our own UI features from scratch:

* native UI
* Speed Dials
* Stash
* Discover
* Off-Road mode (formerly Opera Turbo)
* basic theming
* reopening of closed tabs
* browser.js
* mouse gestures
* downloads button
* search engine switcher
* O-menu (Windows)
* native context menus

We’ve also modified the following Chromium features:

* look and feel of WebUI parts
* download manager
* settings
* extensions (including our Speed Dial API)
* address field suggestions
* crash logging

### Chromium / Blink commits

Our engineers have also been busy committing features and fixes to Blink, and upstreaming various changes to Chromium. [This page](http://operasoftware.github.io/upstreamtools/) gives an overview of changes we’ve made thus far — we plan to further update and enhance it, so add it to your Github watches.

### Made to discover

There’s a lot inside Opera Next 15, with a simple, friendly and attractive user interface. Take a look around; in the settings you can disable cookies, pop-ups, plugins etc on a site-by-site basis, send a Do Not Track header, disable various speed-optimizing enhancements should you choose so. We hope you’ll enjoy discovering its features, and maybe build some extensions for it!
