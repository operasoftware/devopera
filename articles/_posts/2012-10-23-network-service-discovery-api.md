---
title: Network Service Discovery API Support in Opera
authors:
- daniel-davis
- rich-tibbett
intro: 'The Network Service Discovery API enables web pages to communicate with devices advertising themselves on the network via different discovery protocols in a peer-to-peer configuration. Now you can use JavaScript to find a UPnP server locally, browse its content and send that content to a UPnP client. This article, with links to experimental builds, shows you how.'
tags:
- upnp
- javascript
license: cc-by-3.0
---

- [Introduction](#intro)
- [What is the Network Service Discovery API?](#whatis)
- [Download a build](#download)
- [What does this build do?](#whatdoes)
- [How do I use it?](#howtouse)
- [Can I see any demos?](#demos)
- [Are these builds production-ready?](#production)
- [Anything else to be aware of?](#other)
- [If you have problems](#problems)
- [What’s next?](#next)
- [Conclusion](#conclusion)

## Introduction {#intro}

<figure class="figure">
	<iframe width="560" height="315" src="//www.youtube.com/embed/dujaAWwGVB4" allowfullscreen class="figure__media"></iframe>
</figure>

[According to Nielsen][1], as of 2009 nearly 60% people in the US used their TV and internet simultaneously for an average of 2.5 hours per person per month. That’s around 128 million people and just over 19 billion minutes of simultaneous viewing per month! It’s not surprising, then, that we’ve seen a surge of interest in multi-screen development recently. As part of this, we’ve submitted a draft specification to the W3C entitled [Network Service Discovery API][2] which aims to ease discovering and sharing data between devices.

[1]: http://blog.nielsen.com/nielsenwire/online_mobile/three-screen-report-media-consumption-and-multi-tasking-continue-to-increase/
[2]: http://www.w3.org/TR/2012/WD-discovery-api-20121004/

## What is the Network Service Discovery API? {#whatis}

The Network Service Discovery API enables web pages to communicate with devices advertising themselves on the network via different discovery protocols in a peer-to-peer configuration. It abstracts away the underlying complexity of Service Discovery protocols and returns back one or more UPnP or Zeroconf services in the network via a single API call. Now you can use JavaScript to find a UPnP server locally, browse its content and send that content to a UPnP client. A web page can act as a third-party control point and pass messages between connected services in the most appropriate format for that service.

## Download a build {#download}

We have implemented this API in an [Opera Labs][3] build for desktop, available for you to download and experiment with. You can download the build most suited for your platform here:

[3]: http://dev.opera.com/labs

- Opera desktop for Windows: [32 bit][4], [64 bit][5]
- [Opera desktop for Mac][6]
- Opera desktop for Linux: [i386 (deb)][7], [amd64 (deb)][8], [i386 (RPM)][9], [x86_64 (RPM)][10], [i386 (.xz)][11], [x86_64 (.xz)][12]
- Opera desktop for FreeBSD: [i386][13], [amd64][14]

[4]: http://www.opera.com/download/get.pl?id=35124&sub=true&nothanks=yes&location=360
[5]: http://www.opera.com/download/get.pl?id=35125&sub=true&nothanks=yes&location=360
[6]: http://www.opera.com/download/get.pl?id=35126&sub=true&nothanks=yes&location=360
[7]: http://www.opera.com/download/get.pl?id=35121&sub=true&nothanks=yes&location=360
[8]: http://www.opera.com/download/get.pl?id=35120&sub=true&nothanks=yes&location=360
[9]: http://www.opera.com/download/get.pl?id=35123&sub=true&nothanks=yes&location=360
[10]: http://www.opera.com/download/get.pl?id=35122&sub=true&nothanks=yes&location=360
[11]: http://www.opera.com/download/get.pl?id=35118&sub=true&nothanks=yes&location=360
[12]: http://www.opera.com/download/get.pl?id=35119&sub=true&nothanks=yes&location=360
[13]: http://www.opera.com/download/get.pl?id=35117&sub=true&nothanks=yes&location=360
[14]: http://www.opera.com/download/get.pl?id=35116&sub=true&nothanks=yes&location=360

Note: For this API to work, you **must** enable two features in this build:

1. Go to <a href="opera:config#UserPrefs|EnableServiceDiscoveryAPI"><code>opera:config</code> -> Enable Service Discovery API</a>, check the box and click Save.
2. Go to <a href="opera:config#Network|AllowCrossNetworkNavigation"><code>opera:config</code> -> Allow Cross Network Navigation</a>, check the box and click Save.

<figure class="figure">
	<img src="{{ page.id }}/opera-config-service-discovery.png" alt="" class="figure__media">
</figure>

## What does this build do? {#whatdoes}

This build is based on the [Network Service Discovery API specification][18] snapshot dated 4th October 2012 with the following caveats:

[18]: http://www.w3.org/TR/2012/WD-discovery-api-20121004/

- The desktop builds support [UPnP Service Discovery][19] only at this early stage. We plan to also support [Zeroconf discovery][20] in our API.
- We have not yet implemented [UPnP Event Subscription][21] functionality.
- We are not currently shipping a user interface for this so you will need to set the <a href="opera:config#UserPrefs|EnableServiceDiscoveryAPI"><code>opera:config#UserPrefs|EnableServiceDiscoveryAPI</code></a> flag to enable this API.

[19]: http://www.w3.org/TR/2012/WD-discovery-api-20121004/#simple-service-discovery-protocol-ssdp
[20]: http://www.w3.org/TR/2012/WD-discovery-api-20121004/#zeroconf-mdns-dns-sd
[21]: http://www.w3.org/TR/2012/WD-discovery-api-20121004/#dfn-setup-a-upnp-events-subscription

Focusing on [UPnP][23], communication is possible with XML messaging relayed via the [XMLHttpRequest API][24]. Here is an example SOAP request to browse files within the remote directory of a [UPnP Media Server][25]:

[23]: http://upnp.org
[24]: http://dev.opera.com/articles/view/xhr2/
[25]: http://upnp.org/specs/av/av1/

	<?xml version="1.0" encoding="utf-8"?>
		<s:Envelope
			s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"
			xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
		<s:Body>
			<u:Browse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">
				<ObjectID>0</ObjectID>
				<BrowseFlag>BrowseDirectChildren</BrowseFlag>
				<Filter>*</Filter>
				<StartingIndex>0</StartingIndex>
				<RequestedCount>100000</RequestedCount>
			</u:Browse>
		</s:Body>
	</s:Envelope>

The most common use case at this stage is to search for media files on a server and play them in a renderer on a separate client. The API can even be used to change the volume on a UPnP-enabled TV. There are a few more [use case suggestions in the spec][26] and we’re looking forward to seeing what innovative services you can come up with.

[26]: http://www.w3.org/TR/2012/WD-discovery-api-20121004/#use-cases-and-requirements

## How do I use it? {#howtouse}

It’s probably best to look at a basic example by breaking it down into a few simple steps:

1. Call the `navigator.getNetworkServices()` method, passing it a list of well-known service types to look for.
2. If successful, specify a callback function to execute. Its argument is an array of found services.
3. Commands are sent to to your chosen service’s URL usually using an XMLHttpRequest (but the API also allows you to theoretically connect devices via Web Sockets).
4. If necessary, the service’s response can be parsed and then acted upon by your web application.

To simplify the process, we have also created the [Plug.Play library][27] which acts as a UPnP service layer abstraction on top of `navigator.getNetworkServices()`. The library’s [home page][28] includes a detailed breakdown of the steps mentioned briefly above — how to use `navigator.getNetworkServices()` and how to then, optionally, use the library to invoke UPnP actions and process responses.

[27]: http://richtr.github.com/plug.play.js/
[28]: https://github.com/richtr/plug.play.js

## Can I see any demos? {#demos}

We’ve prepared a couple of simple demos to demonstrate the discovery concept. The first is a [media player demo][29] which acts as a middle-man between media servers and renderers The second is a [web-based UPnP inspector][30] so you can monitor and edit messages to and from UPnP devices. Of course, to test these out you need UPnP services available on your network. Wikipedia has an extensive [list of UPnP media servers and clients][31], both hardware and software.

[29]: http://dev.opera.com/static/articles/2012/nsd-demo/
[30]: http://dev.opera.com/static/articles/2012/snoopnp/
[31]: http://en.wikipedia.org/wiki/List_of_UPnP_AV_media_servers_and_clients

<figure class="figure">
	<a href="{{ page.id }}/nsd-demo/"><img src="{{ page.id }}/upnp-web-demo.png" alt="" class="figure__media"></a>
</figure>

<figure class="figure">
	<a href="{{ page.id }}/snoopnp/"><img src="{{ page.id }}/javascript-upnp-inspector.png" alt="" class="figure__media"></a>
</figure>

## Are these builds production-ready? {#production}

No. The main issue is that there is no UI or privacy mechanism at this point -- in other words, web pages have full access to all UPnP services on your local network and a call to getNetworkServices will return all services that match the requested service type. Because of this, the Service Discovery API needs to be enabled manually in <a href="opera:config#UserPrefs|EnableServiceDiscoveryAPI">opera:config</a> in the builds provided on this page, as mentioned earlier.

Ultimately, this API will ship with a opt-in interface to allow users to authorize a web page to connect with one or more services that the page has requested. We are currently hard at work imagining this user interface. When we have a good user experience story to tell for this API we will provide updates on this blog.

## Anything else to be aware of? {#other}

A couple of things:

- The `getNetworkServices` method will look for services for up to three seconds. The time limit is because of the current lack of UI but it can be adjusted in <a href="opera:config#UserPrefs|ServiceDiscoveryTimeMs">opera:config -> Service Discovery Time Ms</a>.
- There is a [bug in VirtualBox on Windows][38] that causes all multicast communication to be blocked, including but not limited to UPnP discovery. If you have VirtualBox installed on your system, disable the “VirtualBox Host-Only Ethernet Adapter” network interface and restart Opera (or, in rare cases, the whole system).

[38]: https://www.virtualbox.org/ticket/8698

## If you have problems {#problems}

If you have trouble getting the demos or your own code to work, there are number of things that could be the cause. Here are some steps to take to fix the problem.

1. The first thing to check is that you have enabled the two essential options in `opera:config`. See the download section for details.
2. If that doesn’t work, it could be an issue with the UPnP device you’re using. We’ve noticed differences in UPnP support even within a single product line of TVs, for example. Please try with another UPnP device if possible, or test using a UPnP server and renderer installed on your own PC first.
3. Another cause could be file formats. UPnP renderers are restricted by the formats they can decode and play so trying media files in various formats may help.
4. If the problem still persists then please leave a comment at the bottom of this article or a message in the [Dev.Opera forums][39].

[39]: http://my.opera.com/community/forums/tgr.dml?id=2157

## What’s next? {#next}

We are currently discussing and iterating on the [current Network Service Discovery specification][40] in the [W3C Device APIs Working Group][41]. If you would like to contribute to development of this specification, you should join the [public mailing list][42].

[40]: http://www.w3.org/TR/2012/WD-discovery-api-20121004/
[41]: http://www.w3.org/2009/dap/
[42]: http://lists.w3.org/Archives/Public/public-device-apis/

One future improvement we are considering is to enable web pages to register themselves as services and advertise themselves on the local network. This would mean they could communicate with other devices in a network peer-to-peer, even between web pages on different devices!

## Conclusion {#conclusion}

As this is the first implementation of an early specification, any developer feedback is extremely valuable. We’d be grateful if you could let us know in the comments section below about your experiences with these builds, as well as ideas you may have for other use cases and improvements we could make. One improvement that has lots of potential is support for Zeroconf, meaning web pages could talk to iTunes, AirPlay devices, etc.

Multi-screen capability is a fast-moving technology so watch this space!
