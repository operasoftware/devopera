---
title: 'Front-End Performance: The Dark Side'
authors:
- mathias-bynens
intro: 'Mathias recently gave a presentation on how in security-sensitive situations, performance can be a bug rather than a feature.'
tags:
- http
- javascript
license: cc-by-3.0
---

On April 1st, I spoke at the very first [Fronteers Spring Conference](https://fronteers.nl/congres/2016-spring). The theme of the whole conference was **performance**. For my presentation, I decided to try something a little bit different: instead of talking about techniques that lead to better client-side performance, I focused on security-sensitive situations in which performance can actually be a _bug_ rather than a feature.

View [the slides](https://speakerdeck.com/mathiasbynens/front-end-performance-the-dark-side-at-fronteers-spring-conference-2016) here:

<figure block="figure">
	<iframe elem="media" src="https://speakerdeck.com/player/63fc31552bd24a5dbf3bf22f9454c35f" width="767" height="493" allowfullscreen></iframe>
</figure>

Check out the video below.

<figure block="figure">
	<iframe elem="media" src="https://player.vimeo.com/video/163113209" width="640" height="360" allowfullscreen></iframe>
</figure>

The Q&A session after the talk was recorded as well.

<figure block="figure">
	<iframe elem="media" src="https://player.vimeo.com/video/163232535" width="640" height="360" allowfullscreen></iframe>
</figure>

The presentation walks through what _timing attacks_ are, explains how they can occur on the web through client-side code, and demonstrates how modern performance-related web APIs can sometimes have a negative security impact. To get the point across, I showcased some brilliant research by [Yan Zhu](https://zyan.scripts.mit.edu/sniffly/) and [Tom Van Goethem](https://tom.vg/academic/#ccs2015-timing). My favorite demo was one of Tom’s, where a client-side timing attack (using nothing but JavaScript) is used to figure out the exact age of the current visitor. (This demo starts around 16:03 in the first video.)

To me, this stuff is extremely interesting on a technical level. It’s also a little scary, however, to realize that malicious actors can use these techniques to invade your privacy while you’re browsing the web, without you ever knowing. Embedded third-party advertisements could be running timing attacks in the background, leaking pieces of private info (such as age, gender, location), which in turn enables them to serve you more targeted advertisements, fingerprint and track you across the web, or even de-anonymize you completely.

The sad news is that, as a web developer, there’s no obvious way to prevent this type of attack. Using [`Same-Site` cookies](http://www.sjoerdlangkemper.nl/2016/04/14/preventing-csrf-with-samesite-cookie-attribute/) helps, but its `strict` mode seems a bit too aggressive for mainstream usage, and its `lax` mode might still not fully protect against timing attacks.

End users should consider [blocking third-party cookies](opera://settings/?search=third-party%20cookies), or using a content blocker (not just an ad blocker) in their browser.
