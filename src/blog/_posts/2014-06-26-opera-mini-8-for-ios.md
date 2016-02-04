---
title: Opera Mini 8 for iOS released
authors:
- bruce-lawson
intro: 'Opera Mini for iOS has been completely redesigned, with three different rendering modes. Here’s what web developers need to know.'
tags:
- javascript
- opera
- mini
- ios
license: cc-by-3.0
---

<figure block="figure" mod="right">
	<img elem="media" mod="half" src="{{ page.id }}/intro.jpg">
	<figcaption elem="caption">Opera Mini for iOS</figcaption>
</figure>

Today, we released [Opera Mini 8 for iOS](https://itunes.apple.com/app/id363729560). It’s a completely redesigned product that, for the first time, offers three different browser modes, two of which save time and money for the consumer — or get them connected on slow networks that other browsers can’t handle. More details for consumers are available [on mobile team blog](http://www.opera.com/blogs/mobile/2014/06/download-the-new-opera-mini-for-iphone-ipad/).

If you’ve upgraded from the previous version, it will start in Mini mode. New installs will open in Turbo mode. The browser mode can be switched using the “O” button on the right of the toolbar.

Let’s look at those three modes in more detail:

## Mini mode

This mode is how [Opera Mini’s 244 million users](http://www.operasoftware.com/smw/2014-04) experience your site. _You must enable this mode to test your site through the Opera Mini servers._

This mode routes all traffic through our Opera Mini servers, which render pages then compress them by up to 90% before sending them to the client devices.

This means pages download much faster and — if you pay by the megabyte or are roaming — saves you a lot of money. The price to pay is that animations, gradients, rounded corners and other CSS extras are dropped. SVG images are supported, but animated images only render the first frame. Web fonts are not supported due to the download overhead (use SVG icons rather than icon fonts). JavaScript may not work as you would expect. Developers should read [JavaScript and Opera Mini](https://dev.opera.com/articles/opera-mini-and-javascript/) for a full description.

The rendering engine used is Opera Presto. The user agent string is <samp>Opera/9.80 (iPhone; Opera Mini/8.0.0/34.2336; U; en) Presto/2.8.119 Version/11.10</samp>. We are currently working on upgrading Opera Mini to use a newer version of Opera Presto, so CSS `rem` units and Flexbox are supported. As this upgrade is performed on our servers, all Opera Mini users will immediately benefit. There is no publicly-announced timescale for this upgrade.

If you rely on some sort of Geo IP tool for detecting a visitor’s location, note that the IP address you find in the headers when Mini mode is turned on is the one of our compression proxy. The user’s original IP address is passed on via the `X-Forwarded-For` header.

## Turbo mode

<figure block="figure" mod="right">
	<img elem="media" mod="half" src="{{ page.id }}/turbo.jpg">
	<figcaption elem="caption">Browser modes switcher with advanced compression settings</figcaption>
</figure>

Opera Turbo mode is very different from Opera Mini mode. In this mode, rendering is done on the iPhone/ iPad, but some images and media are compressed through our servers. CSS and JavaScript behave as normal. HTTPS pages are not sent through our Turbo servers, even if Turbo mode is enabled.

Because this mode doesn’t send pages through the Opera Mini servers, it has a different User Agent string: <samp>Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) OPiOS/8.0.0.78129 Mobile/11D201 Safari/9537.53</samp>.

Because of clause 2.17 in [Apple’s App Store approval guideline](https://developer.apple.com/appstore/resources/approval/guidelines.html#functionality), we can’t use Blink or V8; the rendering is done by the iOS WebKit framework and WebKit Javascript.

Opera Turbo mode is the preferred mode for speed and savings. You can control the quality of images using the slider in Advanced Settings after choosing this mode in the O Menu.

Note that if Turbo mode is on, the IP address is also modified, just as is the case with Mini (see above). You find the originating IP address under the `X-Forwarded-For` header.

## Uncompressed mode

This mode does no compression at all; everything happens on the client device. This mode is useful when you’re connected to fast, stable wifi and you need highest quality images. The User Agent string and rendering engine is the same as for Opera Turbo mode.

## QR Codes!

<figure block="figure" mod="right">
	<img elem="media" mod="half" src="{{ page.id }}/qr.png">
	<figcaption elem="caption"><a href="https://addons.opera.com/en/extensions/details/qr-codematic/">QR Codematic</a> extension for Opera</figcaption>
</figure>

Opera Mini 8 for iOS includes a QR code reader to save you from having to type an address. Check it out by tapping the address bar: above the keyboard a QR code icon is shown, which spawns a full QR code reader.

For easy sharing of a web address with a nearby friend, you can generate a QR code using O > Share > QR code. Your friends then can use a QR code reader to quickly load the page on their device.

We thought it would be nice to bring this QR Code based sharing mechanism also to desktop, and hence, we’ve implemented similar functionality in an extension. With [QR Codematic](https://addons.opera.com/en/extensions/details/qr-codematic/) you can generate QR codes from web pages and selected text, and even read QR codes using getUserMedia. Be sure to give it a try!

## Power user tips

<figure block="figure" mod="right">
	<img elem="media" mod="half" src="{{ page.id }}/toggle.png">
	<figcaption elem="caption">Address bar navigation toggle</figcaption>
</figure>

Not strictly for web developers, but some useful power-user tips to speed up your testing in Opera Mini 8 for iOS:

- You can close multiple tabs at once by swiping them up at the same time with multiple fingers
- The virtual keyboard includes a toggle to edit stuff in the address bar: left right moves the cursor, holding the toggle triggers selection
- Holding the + sign in open tabs view triggers a list of recently closed tabs.
- On an iPhone, you can type in the address bar by pulling the speed dial background down. This allows one-hand browsing.

That wraps up the developer-focussed information on Opera Mini 8 for iOS. But, of course, developers use the web a lot, and like to save time and money, so why not give it a try yourself?
