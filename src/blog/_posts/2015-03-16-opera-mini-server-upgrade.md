---
title: Opera Mini server upgrade
authors:
- bruce-lawson
intro: 'We’ve upgraded our Opera Mini servers to a new version of our Presto rendering engine. Here’s what that means for web developers.'
tags:
- html
- css
- javascript
- opera
- opera-mini
license: cc-by-3.0
---

We’ve upgraded our Opera Mini servers to a new version of our Presto rendering engine. This means that CSS Flexbox and layouts depending on `rem` units will now display as you expect.

As you may know, Opera Mini renders pages on Opera’s servers which are then sent, in a highly compressed format, to clients on devices. This means that all users will see pages rendered using the updated Mini servers, with no need to update their software. 260 million users upgraded automatically, in one weekend. Wow.

## What’s new

### HTML5 Parser

The Mini servers now use Ragnarök, our implementation of the [HTML5 parsing algorithm](https://html.spec.whatwg.org/multipage/syntax.html#parsing). The parsing algorithm is like an HTML ninja — incredibly powerful, yet it goes unnoticed. When we first implemented this in Opera Desktop, we found a 20% reduction in site compatibility problems, so this under-the-hood change should result in even-greater interoperability.

### HTML5 input types

The servers now support HTML5 input types (`tel`, `date`, `number`, etc). We plan to release clients later to make this available on supported operating systems. Until then, they fall back to `<input type="text">` as the spec requires.

### CSS Flexbox

Flexbox (officially, _CSS Flexible Box Model_) is a new way to layout pages so that they can be responsive without media queries. Boxes stretch or shrink to take up the available space, divide themselves equally to preserve a grid-like layout across arbitrary widths and content can be visually re-ordered without touching source order — so, for example, a nav which is on the left on desktop and before the main content in source order can be positioned to appear after the main content on a narrow screen.

Read more:

* [Flexbox — Fast Track to Layout Nirvana?](https://dev.opera.com/articles/flexbox-basics/)
* [Advanced Cross-Browser Flexbox](https://dev.opera.com/articles/advanced-cross-browser-flexbox/)
* [Animating Flexboxes: The Lowdown](https://dev.opera.com/articles/animating-flexboxes-the-lowdown/)

### CSS `rem` units

The CSS `rem` unit is equal to the computed value of `font-size` on the root element. Using this unit in your layout means that changing the `font-size` on the `html` element changes all other `rem`-expressed properties.

### ECMAScript 5

The following features are now supported:

* strict mode
* [reserved words as property names](https://mathiasbynens.be/notes/javascript-properties)
* [zero-width Unicode characters in identifiers](https://mathiasbynens.be/notes/javascript-identifiers)
* immutable global `undefined`
* `Function.prototype.bind`
* `Object.defineProperties`
* `Object.freeze`
* `Object.getOwnPropertyDescriptor`
* `Object.getOwnPropertyNames`
* `Object.getPrototypeOf`
* `Object.isExtensible`
* `Object.isFrozen`
* `Object.isSealed`
* `Object.preventExtensions`
* `Object.seal`

This completes our support for ES5.

## What is Opera Mini running?

Previously, the Opera Mini clusters were running a version of Opera Presto analogous to the 11 series of Desktop. This has been upgraded to a version analogous to Desktop 12, with several features disabled, mostly because of architectural constraints; for example:

* JavaScript-only APIs don’t work on Opera Mini because of its architecture. Other aspects of JavaScript do work, however; read more about [Opera Mini and JavaScript.](https://dev.opera.com/articles/opera-mini-and-javascript/)
* Some CSS features are disabled as well; for example, CSS rounded corners (`border-radius`) and gradients are turned off because, once rendered on the Mini servers, they would need to be sent as a bitmap to the client, thus increasing the initial pagesize instead of compressing it.
* CSS web fonts are not downloaded; instead the device’s system fonts are used. This is because many devices don’t allow other fonts to be installed; web fonts can be a large download that slows down rendering, and system fonts tend to be carefully optimised for the display they’re on so they give a better experience.
* CSS and SVG animations don’t show; only the first frame is rendered.

The Opera Mini UA string has been updated to reflect the new server version: it currently reads `Presto/2.12.423`. See more about the [Opera Mini request headers](/articles/opera-mini-request-headers/).

## Design considerations

* If you use CSS gradients as backgrounds to text/buttons, set a sensible `background-color` that contrasts well with the text so that it can be read without the gradient.
* Don’t rely on icon fonts, as web fonts aren’t downloaded. Instead, use an SVG `<img>`. These can be made responsive; see [How Media Queries Allow You to Optimize SVG Icons for Several Sizes](https://dev.opera.com/blog/how-media-queries-allow-you-to-optimize-svg-icons-for-several-sizes/).
* If you rely on some sort of Geo IP tool for detecting a visitor’s location, note that the IP address you find in the headers is that of our compression proxy. The user’s original IP address is passed on via the `X-Forwarded-For` header. (Read more about [Opera Mini request headers](/articles/opera-mini-request-headers/).)
* Ask yourself [“Do Websites Need to Look Exactly the Same in Every Browser”](http://dowebsitesneedtolookexactlythesameineverybrowser.com/) and remember that your content is the reason that visitors come to your site.

## Testing

We’ve tested this extensively, but you may wish to see how your pages look. There are several ways to do this.

### Download Opera Mini

You can download Opera Mini onto your device, of course. Point your pocket-dwelling chum at [m.opera.com](http://m.opera.com/) and download it for Android, iOS, Windows Phone or any generic feature phone — Opera Mini works on 3000+ different devices.

If you’re using the iOS version, note that you have to switch it to Mini mode to go through Opera’s Mini servers. Tap the red “O” menu, and choose “Opera Mini”. Opera Mini for iOS also compresses videos. See [more information about Opera Mini for iOS](https://dev.opera.com/blog/opera-mini-8-for-ios/).

### Test from Desktop

For development and testing purposes, it can be useful to install Opera Mini on your computer. You’ll need Java and MicroEmulator, in which you’ll run an instance of Opera Mini for J2ME-enabled feature phones. [Installing Opera Mini on Your Computer](https://dev.opera.com/articles/installing-opera-mini-on-your-computer/) has all the information you need.

[You can even run Opera Mini on a Chromebook.](https://dev.opera.com/articles/opera-mini-chrome-os/) Yes, you read that right.

### Test local web sites using ngrok

Many developers choose to use [ngrok](https://ngrok.com/) to securely expose a local web server to the internet. As their website explains, “ngrok creates a tunnel from the public internet (`https://subdomain.ngrok.com/`) to a port on your local machine. You can give this URL to anyone to allow them to try out a web site you’re developing without doing any deployment”. Then you simply point Opera Mini at `subdomain.ngrok.com` to test your site. ngrok is open source, and also provides a paid-for service.

## Conclusion

After months of planning and testing, we’re delighted to bring the magic of ES5, HTML5 Parsing, CSS Flexbox and the glory of the `rem` unit to more than a quarter of a billion users. Meanwhile, we continue to work to make Opera Mini faster and [more widely-available](http://www.operasoftware.com/press/releases/mobile/2014-08-21) to ensure that [*everyone* has access to the Web](http://blogs.opera.com/news/2015/04/opera-mini-history-new-version-android/).
