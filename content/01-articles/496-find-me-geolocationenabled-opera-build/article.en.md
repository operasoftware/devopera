Title: Find me! Geolocation-enabled Opera build
----
Date: 2011-11-24 11:02:53
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">This article is obsolete</h2>
<p>It&#39;s retained for historical purposes only. Download the <a href="http://www.opera.com/browser/">latest version of Opera</a> or see what&#39;s coming soon in <a href="http://www.opera.com/browser/next/">Opera.Next</a>. See <a href="http://www.opera.com/docs/specs/">Web specifications support in Opera</a>.</p> 
</div>

<div id="content">
<p>
 Another great Opera technology release is with us — we are delighted to release the first build of Opera with Geolocation API support — you can use this to expose the browser&#39;s geographical position, and make use of it in your applications.
</p>
<p>
 This article gives you some background information, plus usage details and links to all the files you need to start playing with this exciting new functionality now.
</p>
<p>
 <em>
  Please note that the geolocation feature is now included in
  <a href="http://www.opera.com/download/" title="Download Opera browser">
   stable Opera release
  </a>
  .
 </em>
</p>
<h3>
 History of geolocation
</h3>
<p>
 Geolocation on the web is not new — many sites already use the IP address of the browser to serve targeted content, mostly in the form of advertisements. You have doubtless seen banners along the lines of
 <em>
  &quot;Find a Friend in [your city]&quot;
 </em>
 while surfing the web. However, the IP address method is notoriously inaccurate and cannot be reliably used for more advanced geolocation services.
</p>
<p>
 You can get a much more accurate location reading if the device the browser is running on has a GPS available, or can triangulate using wireless access points or cell towers. And even if the device doesn&#39;t have the right hardware for this, a location provider web service can be used to provide a fairly accurate location reading.
</p>
<p>
 The modern web has many applications that can make great use of this data - geographical information can really enrich your data set. It would be possible to use this API with services like
 <a href="http://maps.google.com">
  Google Maps
 </a>
 (for finding services around your current location),
 <a href="http://www.dopplr.com/">
  Dopplr
 </a>
 (for registering your current location as part of a trip) and
 <a href="http://www.flickr.com/">
  Flickr
 </a>
 (for finding pictures around your current location).
</p>
<p>
 This kind of functionality has been made a lot easier with the introduction of the Geolocation API.
</p>
<h3>
 The Geolocation API
</h3>
<p>
 The Geolocation Working Group of the W3C has recently released the
 <a href="http://www.w3.org/TR/2008/WD-geolocation-API-20081222/">
  first working draft of the geolocation API specification
 </a>
 . The API is used via JavaScript, with commands being used to retrieve the current latitude and longitude of the browser. The following snippet shows how a web page would request the browser&#39;s location:
</p>
<pre>
 <code>
  // One-shot position request:
navigator.geolocation.getCurrentPosition(showMapCallback);
function showMapCallback(position) {
  // Show a map centered at (position.coords.latitude, position.coords.longitude).
}
 </code>
</pre>
<p>
 As you can see, the API is very simple; it doesn&#39;t get really much more complicated than this, even with more advanced examples (check out
 <a href="http://www.w3.org/TR/2008/WD-geolocation-API-20081222/#introduction">
  examples from the specification
 </a>
 ).
</p>
<p>
 More importantly, leaving it to the browser to transmit its location means that the user can remain in control of their privacy. The W3C Geolocation API is likely to become a widely adopted standard, and Opera is providing this early implementation of the API to let developers and users start experimenting with it.
</p>
<h3>
 How the Opera Geolocation build works
</h3>
<ul>
 <li>
  Once you have downloaded and installed the build, check out the
  <a href="http://www.w3.org/TR/2008/WD-geolocation-API-20081222/">
   Geolocation API spec
  </a>
  , and start playing with the functionality.
 </li>
 <li>
  This build uses the
  <a href="http://www.skyhookwireless.com/developers/sdk.php">
   Skyhook web service
  </a>
  to retrieve the location information - this allows you to use the API even if you don&#39;t have access to a GPS or triangulation device. To develop applications that make use this service you need to
  <a href="http://loki.com/">
   register your site on loki.com
  </a>
  .
 </li>
 <li>
  Additionally, if you&#39;re running Windows XP you will also need to run
  <a href="http://snapshot.opera.com/windows/svcsetup.exe">
   svcsetup.exe
  </a>
  , which ensures that wifi scanning will not be affected by the various &quot;wifi managers&quot; shipped with many laptops. All this won&#39;t be necessary in future releases.
 </li>
</ul>
<p>
 This Opera build will prompt the user to make sure they agree to send their location, every time a site requests it. Your actual location (and under the right circumstances this build can readily identify your location to an accuracy of a few metres) is extremely sensitive information. Our current limited UI is designed to allow you to test the build as easily as possible, while protecting your location information — we take the security and privacy of users very seriously. For normal usage, you should not give your location information out anywhere except to trusted applications from trusted developers.
</p>
<p>
 We would be very grateful for any feedback you can provide, on the API itself and the user interface. Does it provide appropriate functionality and levels of privacy control?
 <a href="http://my.opera.com/community/forums/forum.dml?id=31">
  Give us feedback in our forums
 </a>
 , or comment on the
 <a href="http://my.opera.com/core/blog/">
  core concerns blog
 </a>
 .
</p>
</div>

