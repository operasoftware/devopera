---
title: 'Introducing Device-Stock-UA: A New Request Header and Proposal'
authors:
- tiffany-brown
tags:
- opera-mobile
- opera-mini
- http
license: cc-by-3.0
---

Our latest releases of [Opera Mobile and Opera Mini](http://www.opera.com/mobile/) will include a new header: `Device-Stock-UA`. The value of this header matches that of the stock user agent bundled with the operating system on which Opera Mobile or Mini is running. Below is an example of what this header might look like on an Android device (a T-Mobile myTouch4G).

	Device-Stock-UA: Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; myTouch4G Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1

We’ve set a precedent for such a header with `X-OperaMini-Phone-UA`. Opera Mini includes this header with every request. Other headers, such as [`X-Original-User-Agent` and `X-Device-User-Agent`](http://mobiforge.com/developing/blog/x-device-user-agent-header-appearing-requests) exist in the wild and function similarly. None of these headers are standard. Nor do they comply with [RFC 6648](https://tools.ietf.org/html/rfc6648).

To that end, we’re proposing Device-Stock-UA as an industry standard. A draft version of this RFC is [available on GitHub](https://github.com/operasoftware/Device-Stock-UA-RFC). Please contribute and comment. We’ve worked closely with [dotMobi](http://dotmobi.com/) on this proposal; it is also implemented in their [goMobi service](http://gomobi.info/).

## Why introduce a new header?

The goal of Device-Stock-UA is to help mobile site and application developers determine the device on which an HTTP client is running and adapt content accordingly. In mobile-centric web development, there’s a tension between the “[One Web](http://www.w3.org/TR/mobile-bp/#OneWeb)” philosophy and the realities of networks, protocols, device hardware, and user agent capabilities. We think that this header will lead to a better experience for Opera Mobile and Opera Mini users. And we think this can be useful for other user agents as well.

By embracing the “One Web” philosophy, developers can choose to build a single, responsive experience for a range of devices. Feature-detection and [progressive enhancement](http://www.w3.org/community/webed/wiki/Graceful_degredation_versus_progressive_enhancement) ensure that any capable browser — not a single, dominant browser — has access to a given resource. Innovations such as [`meta viewport / @viewport`](https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport/) and [media queries](https://dev.opera.com/articles/love-your-devices-adaptive-web-design-with-media-queries-viewport-and-more/) allow us to streamline development and maintenance with a single code base. It’s the approach we advocate here at Opera.

But from a pragmatic point-of-view: data plans cost money and time. Serving fewer bytes helps companies contain bandwidth costs. While we’re looking forward to how responsive images will solve a number of these problems through declarative markup, we see a lot of developers choosing [server-driven content negotiation](https://tools.ietf.org/html/rfc2616#page-72): serving markup, CSS, JavaScript, and images based on the value of the User-Agent header.

Most widely-used APIs for server-driven content negotiation use the User-Agent header to infer browser and device capabilities. They assume a one-to-one relationship between a User-Agent string and a device. Opera Mobile and Mini use platform-specific user agent strings — as with desktop browsers — that do not include device information. For Opera Mobile in particular, this created site compatibility and content optimization issues. With no way to determine the device, Opera Mobile would be served the same small images and basic markup as feature phones. The X-OperaMini-Phone-UA header prevented Opera Mini from facing similar issues.

## Phasing out `X-OperaMini-Phone-UA`

In the short-term, Opera Mini will send _both_ the `Device-Stock-UA` and `X-OperaMini-Phone-UA` headers. Opera does not have a definitive cut-off date for removing the `X-OperaMini-Phone-UA` header, but it will happen eventually. We’ll also work with popular mobile content negotiation APIs to add support for `Device-Stock-UA`.
