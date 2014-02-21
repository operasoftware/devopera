---
layout: post
title: Geolocation-enabled build
authors:
- maxfroumentin
tags:
- geolocation
- W3C
- opera
- coreblog
layout: article
---
<p>We are delighted to release the <a href="http://snapshot.opera.com/windows/opera_wingogi_geo.zip">first build of Opera with geolocation support</a>.  The geolocation Working Group of the W3C has recently relased the <a href="http://www.w3.org/TR/2008/WD-geolocation-API-20081222/">first Working Draft of the geolocation API specification</a>, and we are now releasing the first Labs build with support for the API.</p>

<p>The API is used in a web page&#39;s Javascript code to retrieve the current latitude and longitude of the browser. The following snippet shows how a web page would request the browser&#39;s location:</p>

<pre>// One-shot position request:
navigator.geolocation.getCurrentPosition(showMapCallback);

function showMapCallback(position) {
  // Show a map centered at (position.coords.latitude, position.coords.longitude).
}</pre>

<p>As you can see, the API is very simple, and doesn&#39;t get much more complicated with more advanced functionalities (see <a href="http://www.w3.org/TR/2008/WD-geolocation-API-20081222/#introduction">more examples from the specification</a>)</p>

<p>Geolocation on the web is not new. Many sites already use the IP address of the browser to serve targetted content, mostly ads (you will have seen the &#39;Find a Friend in [your city]&#39; banners). However, that method is notoriously inaccurate and cannot be reliably used for more advanced geolocation services. On the other hand, the device which the browser is running on is more likely to have an accurate idea of its location if it has a GPS unit or can triangulate the wireless access points or cell towers, or look up its IP address. Even if the device doesn&#39;t have the right hardware, a location provider web service can be used. This build uses the <a href="http://www.skyhookwireless.com/developers/sdk.php">Skyhook service</a>, and therefore you will need to <a href="http://loki.com/">register your site on loki.com</a> in order for your geo-enabled web application to be allowed to request the locations of users. Additionally, if you&#39;re running Windows XP you will also need to run <a href="http://snapshot.opera.com/windows/svcsetup.exe">svcsetup.exe</a>, which ensures that wifi scanning will not be affected by various &quot;wifi managers&quot; that are shipped with many laptops. All this won&#39;t be necessary in future releases, but for now <b>if you experience crashes, it is likely because you need to run svcsetup.exe first</b>.</p>

<p>More importantly, leaving it to the browser to transmit its location means that the user can remain in control of their privacy. This build will prompt the user if they agree to send their location, every time a site requests it. While the UI in this build is experimental, it provides one possible way of protecting the user&#39;s privacy.</p>

<p>The W3C Geolocation API is likely to become a widely adopted standard, and Opera is providing this early implementation of the API to let developers and users start experimenting with it. We would be very grateful for feedback from both developers and users, on the API itself and on what functionality and level of privacy control you would like to see exposed in the user interface.</p>

<p>Once you have installed this build, you can go and test it out on our <a href="http://people.opera.com/~maxfro/demos/geo/">geolocation demo page</a>,  which will show were you are on a map, and will display scheduled near you.</p>
