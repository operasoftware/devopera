---
title: Geolocation-Enabled Build
authors:
- max-froumentin
tags:
- geolocation
- w3c
- opera
- coreblog
license: cc-by-3.0
---

We are delighted to release the [first build of Opera with geolocation support](http://snapshot.opera.com/windows/opera_wingogi_geo.zip). The geolocation Working Group of the W3C has recently released the [first Working Draft of the geolocation API specification](http://www.w3.org/TR/2008/WD-geolocation-API-20081222/), and we are now releasing the first Labs build with support for the API.

The API is used in a web page’s JavaScript code to retrieve the current latitude and longitude of the browser. The following snippet shows how a web page would request the browser’s location:

	// One-shot position request:
	navigator.geolocation.getCurrentPosition(showMapCallback);

	function showMapCallback(position) {
		// Show a map centered at (position.coords.latitude, position.coords.longitude).
	}

As you can see, the API is very simple, and doesn’t get much more complicated with more advanced functionalities (see [more examples from the specification](http://www.w3.org/TR/2008/WD-geolocation-API-20081222/#introduction)).

Geolocation on the web is not new. Many sites already use the IP address of the browser to serve targetted content, mostly ads (you will have seen the “Find a Friend in [your city]” banners). However, that method is notoriously inaccurate and cannot be reliably used for more advanced geolocation services. On the other hand, the device which the browser is running on is more likely to have an accurate idea of its location if it has a GPS chip or can triangulate the wireless access points or cell towers, or look up its IP address. Even if the device doesn’t have the right hardware, a location provider web service can be used. This build uses the [Skyhook service](http://www.skyhookwireless.com/developers/sdk.php), and therefore you will need to [register your site on loki.com](http://loki.com/) in order for your geo-enabled web application to be allowed to request the locations of users. Additionally, if you’re running Windows XP you will also need to run [`svcsetup.exe`](http://snapshot.opera.com/windows/svcsetup.exe), which ensures that WiFi scanning will not be affected by various “WiFi managers” that are shipped with many laptops. All this won’t be necessary in future releases, but for now **if you experience crashes, it is likely because you need to run `svcsetup.exe` first**.

More importantly, leaving it to the browser to transmit its location means that the user can remain in control of their privacy. This build will prompt the user if they agree to send their location, every time a site requests it. While the UI in this build is experimental, it provides one possible way of protecting the user’s privacy.

The W3C Geolocation API is likely to become a widely adopted standard, and Opera is providing this early implementation of the API to let developers and users start experimenting with it. We would be very grateful for feedback from both developers and users, on the API itself and on what functionality and level of privacy control you would like to see exposed in the user interface.

Once you have installed this build, you can go and test it out on our [geolocation demo page](http://html5demos.com/geo), which will show were you are on a map, and will display scheduled near you.
