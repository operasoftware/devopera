---
title: How to Use the W3C Geolocation API
authors:
- shwetank-dixit
intro: 'In this article, Opera Web Evangelist Shwetank gives you a guide to the W3C Geolocation API, which is newly-supported in our Opera 10.60 beta release. Find out how to add location awareness to your Web apps for a lot of interesting possibilities!'
license: cc-by-nc-sa-3.0
---
<h2>Introduction</h2>

<p>Imagine visiting a city for the first time. You&apos;re hungry, but don&apos;t know where the nearest restaurants are and which of them are any good. Wouldn&apos;t it be nice if some app could detect your location and provide you with a list of restaurants closest to you, along with reviews and ratings for each one?</p>

<p>And this is not the only consideration &mdash; could it detect your location accurately, keeping in mind your privacy as well? This is where the <a href="http://dev.w3.org/geo/api/spec-source.html">W3C Geolocation API</a> comes in, support for which is included in <a href="http://www.opera.com/desktop/">Opera 10.60 and above</a>.</p>

<h2>What is Geolocation?</h2>

<p>By <q>Geolocation</q>, we mean the use of scripts within the browser to determine  where a particular user is. This will have countless advantages in Web applications and is an exciting capability for browsers to have. For example, you could build a Web service to provide you with information about the nearest hospital, with turn-by-turn route navigation info. Or, how about an app that tells you about all the cool meetups happening in your area in the coming days, along with exact locations? Excited yet? Read on!</p>

<h2>The W3C Geolocation API</h2>

<p>People have been trying to determine a user&apos;s location for quite a while on the Web. However, most of the older methods are quite inaccurate, and don&apos;t seek the user&apos;s permission to access this information. The W3C Geolocation API is specified by the W3C to provide a uniform way for developers to make location-aware Web applications. It is much more accurate and built in such a way that the user is able to control whether his or her location information is to be revealed on a given site or not.</p>

<h2>How is location determined?</h2>

<p>In browsers that support Geolocation, user locations are determined based on a combination of data from users&apos; wifi access points and users&apos; IP addresses.</p>

<h2>How will visitors to your site approve or deny sharing of their location information?</h2>

<p><img src="{{ page.id }}/1st_geo_screenshot_Linux.jpg" alt="Image of browser requesting user permission for sharing of location information" /></p>
<p class="comment">Figure 1: A browser alerting the user that an application is trying to access their location data via the Geolocation API and asking for their permission to access it.</p>

<p>Whenever you access a page that includes Geolocation code, a small notification will appear at top of the page asking whether you want to share your location information with the application or not (see Figure 1). If you do, then the information will be shared; you can also choose to select <q>remember my choice for this site</q> so that in future you won&apos;t be asked again and the application will automatically go with the choice you made the first time. Similarly, you can block your location information, giving you as the user a case-by-case choice in terms of your privacy.</p>

<h2>How do you use it in a Web app?</h2>

<p>Using the Geolocation API is easy. First, you'll want to determine whether the user&apos;s browser actually supports Geolocation. You can do this with JavaScript to query the browser and see if it supports the <code>navigator.geolocation</code> property. For a <q>one-shot</q> determination of the user&apos;s location, you can use the <code>navigator.geolocation.getCurrentPosition()</code> function which, if successful, will call whichever success callback function you choose.</p>

<p>A good way to do this is:</p>

<pre><code>//Check if browser supports W3C Geolocation API
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} else {
	alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}</code></pre>

<p class="note">In a production system, you should consider fallback so those users without Geolocation-enabled browsers can manually enter their location by inputting their postal code or choosing their position on a map, for example.</p>

<p>Then you add the success function:</p>

<pre><code>function successFunction(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	alert('Your latitude is :'+lat+' and longitude is '+long);
}</code></pre>

<p>You can write the error function however you want. Refer to the <a href="http://dev.w3.org/geo/api/spec-source.html#position_error_interface">PositionError Interface</a> in the specification for more on error codes. For the sake of the example, we&apos;ll keep it simple for now:</p>

<pre><code>function errorFunction(position) {
	alert('Error!');
}</code></pre>

<p>Here is the <a href="{{ page.id }}/basic_geolocation_example.htm">resulting example page</a>.</p>

<p>If you want to keep watching the user's position and update the function accordingly, you can use the <code>navigator.geolocation.watchPosition()</code> function. It accepts the same parameters and works in more or less the same way as <code>getCurrentPosition()</code>. In both <code>getCurrentPosisition()</code> and <code>watchPosition()</code>, only the first parameter is necessary. The second parameter, which handles the error callback, is optional. In addition to that there is a third optional parameter &mdash; an object containing attributes that define:</p>

<ul>
<li><a href="http://www.w3.org/TR/geolocation-API/#high-accuracy">greater accuracy</a></li>
<li><a href="http://www.w3.org/TR/geolocation-API/#timeout_error">timeout</a> between determination of location and invocation of the success callback function.</li>
<li>A <a href="http://www.w3.org/TR/geolocation-API/#max-age">maximum age</a> for which the app can cache the location information until the next <code>getCurrentPosition()</code> or <code>watchPosition()</code> is called.</li>
</ul>

<h2>What next?</h2>

<p>Having the ability to determine the user&apos;s location is great. However, with the API you get a latitude/longitude pair. How do you get to know where on earth that latitude/longitude pair corresponds to? That is where reverse geocoding comes into play.</p>

<p>Reverse geocoding is the process of finding out where exactly a latitude/longitude pair corresponds to. For example, if we are given a lat/long pair of (38.898748, -77.037684), reverse geocoding can tell us that it corresponds to the White House in Washington, D.C.</p>

<p>There are a few ways to do reverse geocoding and all of them require using some external service or other. You can use <a href="http://www.geonames.org/export/web-services.html">GeoNames.org&apos;s API</a> to do it, as well as <a href="http://wiki.openstreetmap.org/wiki/Nominatim#Reverse%5FGeocoding%5F.2F%5FAddress%5Flookup">WikiMapia&apos;s API or Data Set called Nominatim</a>, run by volunteers. Google Maps also provides a way to reverse geocode latitude/longitude pairs into actual addresses to display on a map.</p>

<p>Other APIs in which latitude/longitude pairs can be used include the <a href="http://www.flickr.com/services/api/">Flickr API</a>, which includes <a href="http://www.flickr.com/services/api/flickr.photos.geo.photosForLocation.html">methods for retrieving photos taken at a particular latitude/longitude pair</a>, the <a href="http://www.meetup.com/meetup_api/docs/">Meetup.com API</a>, and others.</p>

<h2>Finding you on a map</h2>

<p>Let's quickly go through a small example that uses Google Maps to display the map of the place where the user is currently located. We&apos;ll first include the script to load Google Maps onto the page:</p>

<pre><code>&lt;script src="http://maps.google.com/maps/api/js?sensor=false"&gt;&lt;/script&gt;</code></pre>

<p>Then we include our logic to determine the location and display a map centered on that location:</p>

<pre><code>&lt;script type="text/javascript"&gt;
// Determine support for Geolocation
if (navigator.geolocation) {
	// Locate position
	navigator.geolocation.getCurrentPosition(displayPosition, errorFunction);
} else {
	alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}

// Success callback function
function displayPosition(pos) {
	var mylat = pos.coords.latitude;
	var mylong = pos.coords.longitude;
	var thediv = document.getElementById('locationinfo');
	thediv.innerHTML = '&lt;p&gt;Your longitude is :' +
		mylong + ' and your latitide is ' + mylat + '&lt;/p&gt;';

//Load Google Map
var latlng = new google.maps.LatLng(mylat, mylong);
	var myOptions = {
	  zoom: 15,
	  center: latlng,
	  mapTypeId: google.maps.MapTypeId.HYBRID
	};

var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

//Add marker
var marker = new google.maps.Marker({
		 position: latlng,
		 map: map,
		 title:"You are here"
	 });
}

// Error callback function
function errorFunction(pos) {
	alert('Error!');
}
&lt;/script&gt;</code></pre>

<p>Finally, the HTML and CSS to display the data is as follows:</p>

<pre><code>&lt;head&gt;
	&lt;style type="text/css"&gt;
		html, body {
		width: 100%;
		height: 100%;
	}
	#map_canvas {
		height: 85%;
		width: 100%;
	}
	&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;div id="map_canvas"&gt;&lt;/div&gt;
	&lt;div id="locationinfo"&gt;&lt;/div&gt;
&lt;/body&gt;</code></pre>

<p>Figure 2 shows the <a href="http://people.opera.com/shwetankd/external/demos/demo_geo_googlemap.htm">resulting Geolocation example</a>. It will ask you for permission to share your location and then display a Google Map of your location.</p>

<p><img src="{{ page.id }}/geoscreenshot4.jpg" alt="Screenshot of the article mentioned above" /></p>
<p class="comment">Figure 2: Screenshot of the page, which shows your co-ordinates and a map centered on those co-ordinates.</p>
<p class="note">In the above screenshot, you may notice a small icon representing geolocation on the right side of the address bar. This icon will be on any page in which geolocation is being used. If you deny geolocation privileges to a page which requests it, then this icon will not appear on the address bar of that tab. Click on the icon to access further settings related to geolocation, such as denying a page access to your location.</p>

<h3>Conclusion</h3>
<p>The W3C Geolocation API provides an exciting and convenient way for Web developers to allow their applications to make use of the user&apos;s location. The capability to do it is more accurate now than past methods and provides a greater level of privacy to users than ever before. Now it&apos;s up to developers to make exciting applications that build upon this capability.</p>

<h3>Demo Pages</h3>
<ul>
<li>The first example in the article shows how to <a href="{{ page.id }}/basic_geolocation_example.htm">use the functions to get a longitude/latitude pair</a>.</li>
<li>The second example in the article <a href="http://people.opera.com/shwetankd/external/demos/demo_geo_googlemap.htm">determines your location and uses a Google Map to display your city</a>.</li>
<li><a href="https://dev.opera.com/authors/vadim-makeev/">Vadim Makeev</a> has created a <a href="{{ page.id }}/GeolocationAPI.htm">simple example that zooms in and displays your exact location</a>, using the Geolocation API, Google Maps API v3, and Simple JS (accuracy as always will depend on how much geo data is available for your area).</li>
<li>A more <a href="http://experimenting.in/other/demo_geo_twitter_mashup.htm">complicated Geolocation demo</a> which finds out the name of your location, displays a map of it, lists the tweets mentioning your location and also any meetups happening in the next few days around that location. Uses data from <a href="http://geonames.org">GeoNames.org</a>, <a href="http://maps.google.com">Google Maps</a>, <a href="http://www.twitter.com">Twitter</a> and <a href="http://www.meetup.com">Meetup.com</a>.</li>
<li>A <a href="http://people.opera.com/pepelsbey/experiments/geo/">Geolocation demo in Russian</a>, also by <a href="https://dev.opera.com/authors/vadim-makeev/">Vadim Makeev</a>, uses <a href="http://maps.yandex.ru">Yandex Maps</a> and <a href="http://www.twitter.com">Twitter</a> and works in a similar way to the previous example.</li>
</ul>

<h3>Read more...</h3>
<ul>
<li><a href="https://dev.opera.com/articles/view/w3c-device-orientation-api/">How to use the Device Orientation API</a></li>
</ul>
