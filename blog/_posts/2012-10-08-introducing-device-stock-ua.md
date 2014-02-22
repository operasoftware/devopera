---
title: 'Introducing Device-Stock-UA: A New Request Header and Proposal'
authors:
- tiffany-brown
tags:
- opera-mobile
- opera-mini
- http
- odin
layout: post
---
<p>Our latest releases of <a href="http://www.opera.com/mobile/">Opera Mobile and Opera Mini</a> will include a new header: <b>Device-Stock-UA</b>. The value of this header matches that of the stock user agent bundled with the operating system on which Opera Mobile or Mini is running. Below is an example of what this header might look like on an Android device (a T-Mobile myTouch4G). </p>

<pre>Device-Stock-UA: Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; myTouch4G Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1</pre>

    <p>We&#39;ve set a precedent for such a header with <code>X-OperaMini-Phone-UA</code>. Opera Mini includes this header with every request. Other headers, such as <a href="http://mobiforge.com/developing/blog/x-device-user-agent-header-appearing-requests">X-Original-User-Agent and X-Device-User-Agent</a> exist in the wild and function similarly. None of these headers are standard. Nor do they comply with <a href="http://tools.ietf.org/html/rfc6648">RFC 6648</a>.</p>

<p>To that end, we&#39;re proposing Device-Stock-UA as an industry standard. A draft version of this RFC is <a href="https://github.com/operasoftware/Device-Stock-UA-RFC">available on GitHub</a>. Please contribute and comment.  We&#39;ve worked closely with <a href="http://dotmobi.com/">dotMobi</a> on this proposal; it is also implemented in their <a href="http://gomobi.info/">goMobi service</a>. </p>

<h2>Why introduce a new header?</h2>

    <p>The goal of Device-Stock-UA is to help mobile site and application developers determine the device on which an HTTP client is running and adapt content accordingly. In mobile-centric web development, there&#39;s a tension between the &#8220;<a href="http://www.w3.org/TR/mobile-bp/#OneWeb">One Web</a>&#8221; philosophy and the realities of networks, protocols, device hardware, and user agent capabilities. We think that this header will lead to a better experience for Opera Mobile and Opera Mini users. And we think this can be useful for other user agents as well.</p>

<p>By embracing the &#8220;One Web&#8221; philosophy, developers can choose to build a single, responsive experience for a range of devices. Feature-detection and <a href="http://www.w3.org/community/webed/wiki/Graceful_degredation_versus_progressive_enhancement">progressive enhancement</a> ensure that any capable browser &#8212; not a single, dominant browser &#8212; has access to a given resource. Innovations such as <a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/"><code>meta viewport / @viewport</code></a> and <a href="http://dev.opera.com/articles/view/love-your-devices-adaptive-web-design-with-media-queries-viewport-and-more/">media queries</a> allow us to streamline development and maintenance with a single code base. It&#39;s the approach we advocate here at Opera.</p>

<p>But from a pragmatic point-of-view: data plans cost money and time. Serving fewer bytes helps companies contain bandwidth costs. While we&#39;re looking forward to how responsive images will solve a number of these problems through declarative markup, we see a lot of developers choosing <a href="http://tools.ietf.org/html/rfc2616#page-72">server-driven content negotiation</a>: serving markup, CSS, JavaScript, and images based on the value of the User-Agent header.</p>

<p>Most widely-used APIs for server-driven content negotiation use the User-Agent header to infer browser and device capabilities. They assume a one-to-one relationship between a User-Agent string and a device. Opera Mobile and Mini use platform-specific user agent strings &#8212; as with desktop browsers &#8212; that do not include device information. For Opera Mobile in particular, this created site compatibility and content optimization issues. With no way to determine the device, Opera Mobile would be served the same small images and basic markup as feature phones. The X-OperaMini-Phone-UA header prevented Opera Mini from facing similar issues.

<h2>Phasing out <code>X-OperaMini-Phone-UA</code></h2>

<p>In the short-term, Opera Mini will send <em>both</em> the <code>Device-Stock-UA</code> and <code>X-OperaMini-Phone-UA</code> headers. Opera does not have a definitive cut-off date for removing the <code>X-OperaMini-Phone-UA</code> header, but it will happen eventually. We&#39;ll also work with popular mobile content negotiation APIs to add support for <code>Device-Stock-UA</code>.</p></p>
