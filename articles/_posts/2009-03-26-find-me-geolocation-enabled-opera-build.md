---
title: Find Me! Geolocation-Enabled Opera Build
authors:
- chris-mills
intro: 'Another great Opera technology release is with us! We are delighted to release the first build of Opera with Geolocation API support. You can use this to expose the browser’s geographical position, and make use of it in your applications.'
tags:
- geolocation
- labs
license: cc-by-3.0
layout: article
---

## This article is obsolete

It’s retained for historical purposes only. Download the [latest version of Opera][1] or see what’s coming soon in [Opera.Next][2]. See [Web specifications support in Opera][3].

[1]: http://www.opera.com/browser/
[2]: http://www.opera.com/browser/next/
[3]: http://www.opera.com/docs/specs/

Another great Opera technology release is with us — we are delighted to release the first build of Opera with Geolocation API support — you can use this to expose the browser’s geographical position, and make use of it in your applications.

This article gives you some background information, plus usage details and links to all the files you need to start playing with this exciting new functionality now.

_Please note that the geolocation feature is now included in [stable Opera release][4]._

[4]: http://www.opera.com/download/ (Download Opera browser)

### History of geolocation

Geolocation on the web is not new — many sites already use the IP address of the browser to serve targeted content, mostly in the form of advertisements. You have doubtless seen banners along the lines of _“Find a Friend in [your city]”_ while surfing the web. However, the IP address method is notoriously inaccurate and cannot be reliably used for more advanced geolocation services.

You can get a much more accurate location reading if the device the browser is running on has a GPS available, or can triangulate using wireless access points or cell towers. And even if the device doesn’t have the right hardware for this, a location provider web service can be used to provide a fairly accurate location reading.

The modern web has many applications that can make great use of this data — geographical information can really enrich your data set. It would be possible to use this API with services like [Google Maps][5] (for finding services around your current location), [Dopplr][6] (for registering your current location as part of a trip) and [Flickr][7] (for finding pictures around your current location).

[5]: http://maps.google.com
[6]: http://www.dopplr.com/
[7]: http://www.flickr.com/

This kind of functionality has been made a lot easier with the introduction of the Geolocation API.

### The Geolocation API

The Geolocation Working Group of the W3C has recently released the [first working draft of the geolocation API specification][8]. The API is used via JavaScript, with commands being used to retrieve the current latitude and longitude of the browser. The following snippet shows how a web page would request the browser’s location:

[8]: http://www.w3.org/TR/2008/WD-geolocation-API-20081222/

	// One-shot position request:
	navigator.geolocation.getCurrentPosition(showMapCallback);
	function showMapCallback(position) {
		// Show a map centered at
		// position.coords.latitude
		// position.coords.longitude
	}

As you can see, the API is very simple; it doesn’t get really much more complicated than this, even with more advanced examples (check out [examples from the specification][9] ).

[9]: http://www.w3.org/TR/2008/WD-geolocation-API-20081222/#introduction

More importantly, leaving it to the browser to transmit its location means that the user can remain in control of their privacy. The W3C Geolocation API is likely to become a widely adopted standard, and Opera is providing this early implementation of the API to let developers and users start experimenting with it.

### How the Opera Geolocation build works

- Once you have downloaded and installed the build, check out the [Geolocation API spec][10] , and start playing with the functionality.
- This build uses the [Skyhook web service][11] to retrieve the location information - this allows you to use the API even if you don’t have access to a GPS or triangulation device. To develop applications that make use this service you need to [register your site on loki.com][12].
- Additionally, if you’re running Windows XP you will also need to run [svcsetup.exe][13] , which ensures that wifi scanning will not be affected by the various “wifi managers” shipped with many laptops. All this won’t be necessary in future releases.

[10]: http://www.w3.org/TR/2008/WD-geolocation-API-20081222/
[11]: http://www.skyhookwireless.com/developers/sdk.php
[12]: http://loki.com/
[13]: http://snapshot.opera.com/windows/svcsetup.exe

This Opera build will prompt the user to make sure they agree to send their location, every time a site requests it. Your actual location (and under the right circumstances this build can readily identify your location to an accuracy of a few metres) is extremely sensitive information. Our current limited UI is designed to allow you to test the build as easily as possible, while protecting your location information — we take the security and privacy of users very seriously. For normal usage, you should not give your location information out anywhere except to trusted applications from trusted developers.

We would be very grateful for any feedback you can provide, on the API itself and the user interface. Does it provide appropriate functionality and levels of privacy control? [Give us feedback in our forums][14], or comment on the [core concerns blog][15].

[14]: http://my.opera.com/community/forums/forum.dml?id=31
[15]: http://my.opera.com/core/blog/
