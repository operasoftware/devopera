Title: Location-based publishing and services
----
Date: 2008-04-17 16:57:26
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th January 2012: This article is obsolete</h2>

<p>This fantastic article is unfortunately now obsolete/out of date, so should no longer be treated as a current or reliable source of information. Please consult other articles for more up-to-date information on location-based services, such as <a href="http://dev.opera.com/articles/view/how-to-use-the-w3c-geolocation-api/">How to use the W3C Geolocation API</a>.</p>
</div>

<h2>Introduction</h2>

<p><a href="http://en.wikipedia.org/wiki/Geocoding" rel="tag" title="&amp;quot;Geocoding&amp;quot; on Wikipedia">Geocoded content</a> is transforming our Web. By adding geographical coordinates (latitude and longitude) to our media, we can help others find it through location-based search engines and <a href="http://en.wikipedia.org/wiki/Web_mapping" rel="tag" title="&amp;quot;Web mapping&amp;quot; on Wikipedia">web maps</a>.</p>

<p>The tools for publishing geocoded media are more accessible and widespread than they&#39;ve ever been, and we are finding all sorts of ways to put our content on the Map. Figure 1 shows a typical example.</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2343191632/" title="Google Earth at the West Pier"><img src="http://farm4.static.flickr.com/3100/2343191632_59f8da8b0a.jpg" title="Google Earth at the West Pier" alt="Google Earth at the West Pier" height="309" width="500" /></a></p>

<p class="comment">Figure 1: A web map (Google Earth), displaying user-generated content.</p>

<p>There&#39;s no limit to the variety of geo content. It could be anything: a listing of houses for sale in a neighbourhood, photos taken while travelling or a stream of local news stories.</p>

<p>A wave of geo innovation is under way and it has the potential to connect local populations and to communicate news and ideas from every corner of the planet. If the World Wide Web has lured people away from their own neighbourhoods, then geo is the technology that will bring it back.</p>
<p>In this article, we&#39;ll look at ways that you can geocode your content, using data formats such as the <a href="#location-nanoformat" title="Location nanoformat, in this article">location nanoformat</a>, <a href="#gpx" title="GPX, in this article">GPX</a> and combinations of <a href="#geo-microformat" title="Geo Microformat, in this article">geocoded microformats</a> in HTML.</p>



<h2 id="where-am-i">Where Am I?</h2>

<p>Ever since the first cave paintings of <a href="http://news.bbc.co.uk/1/hi/sci/tech/871930.stm" title="Cave paintings of star maps in Lascaux, France, on BBC News">stellar constellations</a>, and the first attempt to condense the geographical knowledge of an entire empire on to a <a href="http://en.wikipedia.org/wiki/Ptolemy%27s_world_map" title="&amp;quot;Ptolemy&#39;s world map&amp;quot; on Wikipedia">single sheet of paper</a> (see Figure 2), we&#39;ve <a href="http://en.wikipedia.org/wiki/History_of_cartography" title="&amp;quot;History of cartography&amp;quot; on Wikipedia">had a thirst</a> to plot the location of just about everything that we know exists.</p>

<p><a href="http://en.wikipedia.org/wiki/Image:PtolemyWorldMap.jpg" title="Ptolemys world map image on Wikipedia"><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/23/PtolemyWorldMap.jpg/500px-PtolemyWorldMap.jpg" alt="Ptolemys World Map" /></a></p>

<p class="comment">Figure 2: Ptolemy&#39;s world map.</p>

<p>We&#39;ve used the Map to find ourselves and to see where we&#39;re going. It is both a mirror and a lens, giving feedback on the world and helping us plan our next move. It has been a catalyst for our pursuits, as we&#39;ve hunted trade routes and treasures, and followed pathways into mind-expanding new vistas and cultures...</p>



<h2 id="place-for-everything">A Place For Everything</h2>

<p>On the Web, we tend to navigate by <strong>subject</strong>, using keywords and tags (e.g. &quot;world music&quot;). The rise of blogging gave us new possibilities for navigating via <strong>time</strong> (e.g. &quot;most recent&quot; posts and comments), and social networking now lets us explore the context of <strong>social relationship</strong> (e.g. posts and recommendations by &quot;contacts&quot;, &quot;friends&quot; and &quot;followers&quot;). But into the melting pot comes another axis of meaning: <strong>location</strong>.</p>

<p>&quot;Where is it?&quot;, &quot;where will it be?&quot;, &quot;where are you now?&quot;, &quot;what is nearby?&quot; Given the option, you&#39;ll find that searching for content by location can be every bit as useful as the subject, timing or person who published it.</p>
<p>Let&#39;s say you get fired up by astronomy... You could explore other astronomers&#39; <a href="http://flickr.com/map/?q=astronomy" rel="tag" title="Geocoded photos tagged &amp;quot;astronomy&amp;quot; on Flickr">photos on a world map</a>, showing the places where the photos were taken, as seen in Figure 3:</p>


<p><a href="http://www.flickr.com/photos/dharmasphere/2326325889/" title="Astronomy World Map (Flickr)"><img src="http://farm3.static.flickr.com/2356/2326325889_3defd6c351.jpg" title="Astronomy World Map (Flickr)" alt="Astronomy World Map (Flickr)" height="309" width="500" /></a></p>

<p class="comment">Figure 3: The astronomy world map on Flickr.</p>

<p>You could even stay up to date with new photos by subscribing to the <a href="http://api.flickr.com/services/feeds/geo/?tags=astronomy" title="GeoRSS feed of photos tagged &amp;quot;astronomy&amp;quot; on Flickr">geocoded feed</a>, to be read in a feed reader or plotted inside a mapping application (e.g. <a href="http://earth.google.com" title="Google Earth, 3D mapping application">Google Earth</a>, <a href="http://maps.yahoo.com" title="Yahoo Maps">Yahoo Maps</a>, <a href="http://maps.live.com" title="Microsoft&#39;s Live Search Maps">Live Search Maps</a>, <a href="http://mapufacture.com" title="Mapufacture, geo feed reader and mapping application">Mapufacture</a> or <a href="http://maptrot.com" title="Maptrot, geo feed reader and mapping application">Maptrot</a>) or <a href="http://en.wikipedia.org/wiki/Mashup_%28web_application_hybrid%29" title="&amp;quot;Mashup&amp;quot; on Wikipedia">mashed up</a> with other data sources.</p>

<p>Or you might be looking for <a href="http://maps.google.co.uk/maps?q=http://www.indeed.co.uk/rss%3Fq%3Dteacher" title="UK teaching jobs geo feed from Indeed, displayed in Google Maps">teaching jobs in the UK</a> (<a href="http://www.indeed.co.uk/rss?q=teacher" rel="tag" title="UK teaching jobs geo feed from Indeed">feed</a>), <a href="http://www.nestoria.es/madrid-centro/" title="Madrid real estate from Nestoria">real estate in Madrid</a> (<a href="http://rss.nestoria.es/madrid-centro/" title="Madrid real estate geo feed from Nestoria">feed</a>), or <a href="http://upcoming.yahoo.com/search/?type=Events&amp;amp;q=music&amp;amp;rt=1&amp;amp;loc=san+francisco" title="Events tagged &amp;quot;music&amp;quot; in San Francisco, from Upcoming">gigs in San Francisco</a> (<a href="http://upcoming.yahoo.com/syndicate/v2/search_all/?q=music&amp;amp;loc=san+francisco" title="Geo feed of events tagged &amp;quot;music&amp;quot; in San Francisco, from Upcoming">feed</a>). Welcome to the <a href="http://en.wikipedia.org/wiki/Geoweb" rel="tag" title="&amp;quot;Geoweb&amp;quot; on Wikipedia">Geoweb</a>, the <a href="http://en.wikipedia.org/wiki/The_Long_Tail" rel="tag" title="&amp;quot;The Long Tail&amp;quot; on Wikipedia">Long Tail</a> of location...</p>


<h2 id="modern-cartographer">Tools for the Modern Cartographer</h2>

<p>It has become fairly easy to pinpoint one&#39;s position on the planet, with the use of a <a href="http://en.wikipedia.org/wiki/Global_Positioning_System" rel="tag" title="&amp;quot;GPS&amp;quot; on Wikipedia"><acronym title="Global Positioning System">GPS</acronym></a> unit - either a standalone handset like the one in Figure 4, or a GPS phone, camera or other integrated device.</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2343857280/" title="GPS at the West Pier"><img src="http://farm3.static.flickr.com/2066/2343857280_69f007f903.jpg" title="GPS at the West Pier" alt="GPS at the West Pier" height="309" width="500" /></a></p>

<p class="comment">Figure 4: A GPS handset.</p>

<p>You can use these devices to record a log of your movements over time and to note any places of interest (&#39;<a href="http://en.wikipedia.org/wiki/Waypoint" rel="tag" title="&amp;quot;Waypoint&amp;quot; on Wikipedia">waypoints</a>&#39;). These locations can be transmitted live to another device via <a href="http://en.wikipedia.org/wiki/Bluetooth" rel="tag" title="&amp;quot;Bluetooth&amp;quot; on Wikipedia">Bluetooth</a>, streamed directly into the Web or transferred to a personal computer.</p>

<p>An increasing number of grassroots projects, such as <a href="http://openstreetmap.org" title="Open Street Map, grassroots mapping project">Open Street Map</a> and <a href="http://freethepostcode.org" title="Free The Postcode, open database of UK postcode locations">Free The Postcode</a>, harness the global community of GPS users and challenge the traditionally top-down approach of compiling map data.</p>

<p>Instead of GPS, you might use a <a href="http://en.wikipedia.org/wiki/GSM_localization" rel="tag" title="&amp;quot;GSM localization&amp;quot; on Wikipedia">mobile application</a> or service such as <a href="http://zonetag.research.yahoo.com" title="Zone Tag, localisation for mobile phones">Zone Tag</a> to determine your position from the mobile phone masts nearby. Or you might use a web map to find a place, <a href="http://www.getlatlon.com" title="Get Lat Lon, to look up your location on a map">search by postal address</a>, or use a number of <a href="http://en.wikipedia.org/wiki/Wikipedia:Obtaining_geographic_coordinates" title="&amp;quot;Obtaining geographic coordinates&amp;quot; on Wikipedia">other methods</a>.</p>

<p>Most often, you will need these coordinates in <em>decimal</em> form. This can be <a href="http://www.fcc.gov/mb/audio/bickel/DDDMMSS-decimal.html" title="Convert degrees, minutes and seconds to a decimal latitude and longitude">converted</a> from the traditional degrees, minutes and seconds representation of coordinates.</p>

<p>Let us now look at some of the developing geo web standards, which allow us to weave location into our content. Imagine that you&#39;re at <span class="adr"><abbr class="geo" title="50.818967;-0.151934"><a href="http://en.wikipedia.org/wiki/West_Pier" rel="tag" title="&amp;quot;The West Pier&amp;quot; on Wikipedia">The West Pier</a></abbr> of <span class="locality">Brighton</span>, <abbr class="country-name" title="United Kingdom">UK</abbr></span>:</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2327016582/" title="West Pier Calm"><img src="http://farm4.static.flickr.com/3143/2327016582_bd2cd2648d.jpg" title="West Pier Calm" alt="West Pier Calm" height="309" width="500" /></a></p>

<p class="comment">Figure 5: The West Pier of Brighton.</p>

<p>The latitude is 50.818967 and the longitude is -0.151934 (<a href="http://maps.google.co.uk/maps?q=50.818967,-0.151934" title="Map of the West Pier, Brighton, UK">map</a>).</p>



<h2 id="geo-meta">HTML Meta Tags: The Old School Way</h2>

<p>In the days before the World Wide Web, <a href="http://en.wikipedia.org/wiki/Usenet" rel="tag" title="&amp;quot;Usenet&amp;quot; on Wikipedia">Usenet</a> users could broadcast their location by including their &quot;<a href="http://en.wikipedia.org/wiki/ICBM_address" rel="tag" title="&amp;quot;ICBM address&amp;quot; on Wikipedia"><acronym title="InterContinental Ballistic Missile">ICBM</acronym> address</a>&quot; in the signature of their messages. This allowed the network of users to be geographically mapped.</p>

<p>This practice was carried over to the Web, where a web page could be geocoded by adding &quot;ICBM&quot; and/or &quot;geo.position&quot; <a href="http://en.wikipedia.org/wiki/Meta_element" title="&amp;quot;Meta element&amp;quot; on Wikipedia">meta tags</a> to the document head (a <a href="http://www.geo-tag.de" title="Generate geo meta tags">geo tag generator</a> helps to simplify the process):</p>

<pre><code>&lt;head&gt;
   &lt;meta name=&quot;DC.title&quot; content=&quot;The West Pier&quot; /&gt;
   &lt;meta name=&quot;ICBM&quot; content=&quot;50.818967, -0.151934&quot; /&gt;
   &lt;meta name=&quot;geo.position&quot; content=&quot;50.818967;-0.151934&quot; /&gt;
&lt;/head&gt;</code></pre>

<p>Services such as <a href="http://geourl.org" title="GeoUrl, mapping the location of websites">GeoUrl</a> can be used to find such a geocoded site. For example, <a href="http://geourl.org/near?lat=50.818967&amp;amp;long=-0.151934" title="Websites near the West Pier, as mapped by GeoUrl">websites near the West Pier</a> (or see the <a href="http://geourl.org/near?lat=50.818967&amp;amp;long=-0.151934;format=rss20" title="Geo feed of websites near the West Pier, as mapped by GeoUrl">feed</a> visualised in <a href="http://maps.google.co.uk/maps?f=q&amp;amp;hl=en&amp;amp;geocode=&amp;amp;q=http:%2F%2Fgeourl.org%2Fnear%3Flat%3D50.818967%26long%3D-0.151934%3Bformat%3Drss20&amp;amp;ie=UTF8&amp;amp;ll=50.821879,-0.148573&amp;amp;spn=0.012715,0.030556&amp;amp;z=15" title="Geo feed of websites near the West Pier, as mapped by GeoUrl, shown in Google Maps">Google Maps</a>):</p>


<p><a href="http://www.flickr.com/photos/dharmasphere/2327141344/" title="Websites Near The West Pier (GeoUrl to Google Maps)"><img src="http://farm4.static.flickr.com/3026/2327141344_45752e9118.jpg" title="Websites Near The West Pier (GeoUrl to Google Maps)" alt="Websites Near The West Pier (GeoUrl to Google Maps)" height="309" width="500" /></a></p>

<p class="comment">Figure 6: The GeoURL service allows you to find the location of URLs.</p>


<h2 id="geo-exif">Photos and their EXIF Data</h2>

<p>As a <a href="http://en.wikipedia.org/wiki/Geocoded_photograph" title="&amp;quot;Geocoded photograph&amp;quot; on Wikipedia">geo-photographer</a>, you can use a tool such as <a href="http://code.google.com/p/gpicsync/" title="GPicSync, desktop software for GPS synchronisation of photos">GPicSync</a>, <a href="http://robogeo.com" title="RoboGeo, desktop software for GPS synchronisation of photos">RoboGeo</a> or <a href="http://gpstagr.jianing.net" title="GPSTagr, GPS synchronisation for photos on Flickr">GPSTagr</a> to synchronise your photos with your GPS handset&#39;s log. Alternatively, you might use a <a href="http://www.news.com/8301-13580_3-9868159-39.html" title="Article on GPS cameras">GPS camera</a>, or a <a href="http://photofinder.atpinc.com" title="ATP Photo Finder, GPS unit + SD card reader">specialist GPS unit</a> (see Figure 7) that can directly geocode the image files on your camera&#39;s memory card:</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2343032387/" title="ATP Photo Finder at the West Pier"><img src="http://farm4.static.flickr.com/3202/2343032387_26337d02f4.jpg" title="ATP Photo Finder at the West Pier" alt="ATP Photo Finder at the West Pier" height="309" width="500" /></a></p>

<p class="comment">Figure 7: A GPS unit for geocoding image files on a memory card.</p>

<p>This geo information is added to the photos&#39; <a href="http://en.wikipedia.org/wiki/Exchangeable_image_file_format" title="&amp;quot;Exchangeable image format&amp;quot; on Wikipedia"><abbr title="EXchangeable Image Format">EXIF</abbr> data</a>, which stores such details as the time each photo was taken, shutter speed, etc. Alternatively, you could upload photos to a photo-sharing website and drag each photo on to a map (e.g. on <a href="http://flickr.com" title="Flickr, photo-sharing site">Flickr</a>, <a href="http://www.panoramio.com" title="Panoramio, photo-sharing site">Panoramio</a> or <a href="http://locr.com" title="Locr, photo-sharing site">Locr</a>).</p>



<h2 id="gpx">GPX</h2>

<p>GPS devices store data in a number of different formats. However, when they communicate with other devices and applications, they often use an XML language called <a href="http://www.topografix.com/gpx.asp" title="GPX resources">GPX</a>:</p>

<pre><code>&lt;gpx&gt;
   &lt;wpt lat=&quot;50.818967&quot; lon=&quot;-0.151934&quot;&gt;
      &lt;name&gt;The West Pier&lt;/name&gt;
      &lt;time&gt;2008-03-20T13:57Z&lt;/time&gt;
   &lt;/wpt&gt;
&lt;/gpx&gt;</code></pre>

<p>In this simplified example, the &lt;wpt&gt; element describes a &#39;waypoint&#39; - a manually logged point of interest. The language can describe a number of other useful <a href="http://www.topografix.com/gpx/1/1/" title="GPX schema documentation">features</a> and can be interchanged with other formats using tools like <a href="http://www.gpsvisualizer.com" title="GPSVisualizer, visualise and convert GPS data">GPSVisualizer</a> and <a href="http://www.gpsbabel.org" title="GPSBabel, convert different types of GPS file formats">GPSBabel</a>.</p>



<h2 id="geotagging">Geotagging</h2>

<p>Whenever a post can be &quot;tagged&quot; (such as on a blog, or a media-sharing website), it can also be &quot;<a href="http://en.wikipedia.org/wiki/Geotagging" rel="tag" title="&amp;quot;Geotagging&amp;quot; on Wikipedia">geotagged</a>&quot; with the location coordinates:</p>

<pre><code>geo:lat=50.818967
geo:lon=-0.151934
geotagged</code></pre>

<p>The first tag gives the latitude, the second the longitude and we&#39;ve added a third tag, &quot;geotagged&quot;, so that the post can be easily found in a search for geotagged media (see Figure 8):</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2326326387/" title="Geotagged Posts (Technorati)"><img src="http://farm3.static.flickr.com/2325/2326326387_71596c66d1.jpg" title="Geotagged Posts (Technorati)" alt="Geotagged Posts (Technorati)" height="309" width="500" /></a></p>

<p class="comment">Figure 8: A search for blog posts with a &quot;geotagged&quot; tag on Technorati.</p>

<p>Some video-sharing sites, such as <a href="http://www.viddler.com" title="Viddler, video-sharing site">Viddler</a> and Motionbox, allow tagging of the video timeline. This enables individual <a href="http://thinkwhere.wordpress.com/2006/10/22/deep-geotagging-of-videos-motionbox/" title="Blog post about geotagging video timelines">segments of video to be geotagged</a>.</p>

<h2 id="location-nanoformat">Microblogging with the Location Nanoformat</h2>

<p>Surely the simplest of all publications is the humble txt msg ;)</p>
<p>You can geocode your status updates (on, say, <a href="http://twitter.com" title="Twitter, microblogging social network">Twitter</a> or Jaiku) by simply adding <code>L:</code> (upper-case) or <code>l:</code> (lower-case), along with your coordinates to the end of the message:</p>

<pre><code>This place is beautiful. l:50.818967, -0.151934</code></pre>

<p>&#39;<a href="http://microformats.org/wiki/twitter-nanoformats" rel="tag" title="&amp;quot;nanoformats&amp;quot; in the Microformats wiki">Nanoformats</a>&#39; are a growing collection of highly simplified, standardised ways to add semantic meaning to short bursts of content, such as text messages. Some early applications that use the location nanoformat are <a href="http://twittervision.com" title="Twittervision, real-time geo visualisation for Twitter message">Twittervision</a> (Figure 9) and <a href="http://twitterwhere.mattking.org" title="Twitterwhere, to follow Twitter messages from a specific geographical area">Twitterwhere</a>, which let you track Twitter users and their messages on a world map:</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2343154254/" title="Twittervision"><img src="http://farm3.static.flickr.com/2412/2343154254_d1d1646a9b.jpg" title="Twittervision" alt="Twittervision" height="309" width="500" /></a></p>

<p class="comment">Figure 9: Twittervision.</p>

<p>The BBC World Service&#39;s <a href="http://dharmafly.com/blog/bangladeshboat" title="Bangladesh River Journey, a geo mashup with Flickr, Twitter and Google Maps">Bangladesh River Journey</a> (see Figure 10) used geocoded Twitter messages to synchronise the location of a stream of different media publications:</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/1848329163/" title="BBC World Service: site launch"><img src="http://farm3.static.flickr.com/2298/1848329163_99ef9335c7.jpg" title="BBC World Service: site launch" alt="BBC World Service: site launch" height="309" width="500" /></a></p>

<p class="comment">Figure 10: The BBC Bangladesh River Journey mashup.</p>

<p>Some applications also recognise place names:</p>

<pre><code>This place is beautiful. l:The West Pier, Brighton, UK</code></pre>

<p>They achieve this by looking up the place name and retrieving coordinates from a database such as the <a href="http://www.geonames.org" title="Geonames, a web service that converts place names into geo coordinates">Geonames</a> web service, another community mapping project.</p>

<h2 id="geo-microformat">geo Microformat for HTML</h2>

<p>We can mark up locations in HTML with the <a href="http://microformats.org/wiki/geo" rel="tag" title="&amp;quot;geo&amp;quot; in the Microformats wiki">geo microformat</a>:</p>

<pre><code>This place is beautiful.

&lt;span class=&quot;geo&quot;&gt;
   &lt;span class=&quot;latitude&quot;&gt;50.818967&lt;/span&gt;
   &lt;span class=&quot;longitude&quot;&gt;-0.151934&lt;/span&gt;
&lt;/span&gt;</code></pre>

<p>Note that, in this example, we could have used any HTML element instead of <code>&lt;span&gt;</code>, if that would have made better sense in context. In most cases, microformats do not require specific element types - rather, it is the <code>class</code> attributes of the elements that matter.</p>

<p>Just like any other HTML content, you can then go on to use a CSS stylesheet to highlight or embellish these geo elements, or perhaps hide them from view, and JavaScript on the page could be used to <a href="http://24ways.org/2007/unobtrusively-mapping-microformats-with-jquery" title="Article on using jQuery to geocode and map hCard elements">interact with the geo elements</a>. In addition, browser extensions such as <a href="https://addons.mozilla.org/en-US/firefox/addon/4106" title="Operator, a microformats add-on for Firefox">Operator</a> or <a href="http://minimap.spatialviews.com" title="Minimap, a mapping extension for Firefox and Flock">Minimap</a> offer a number of actions for each location:</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2343435278/" title="Minimap"><img src="http://farm3.static.flickr.com/2293/2343435278_3355d3a742.jpg" title="Minimap" alt="Minimap" height="309" width="500" /></a></p>

<p class="comment">Figure 11: The Minimap Firefox extension.</p>

<p>The geo data on the page could also be parsed and converted by an <a href="http://suda.co.uk/projects/microformats/geo/" title="Conversion tool for geo microformats">external parser</a> and <a href="http://dev.opera.com/articles/view/microformat-encoding-and-visualization/" title="Article on the visualisation of microformats">visualised on another website</a>.</p>



<h2 id="geo-shortcut">geo Microformat Shortcut</h2>

<p>A simple way to add machine-readable coordinates to HTML, without cluttering up the page for human readers, is to use a proposed shortcut for the geo microformat that utilises the <a href="http://microformats.org/wiki/abbr-design-pattern" rel="tag" title="&amp;quot;abbr design pattern&amp;quot; in the Microformats wiki">&lt;abbr&gt; element design pattern</a>:</p>

<pre><code>&lt;abbr class=&quot;geo&quot; title=&quot;50.818967;-0.151934&quot;&gt;
   The West Pier, Brighton, UK
&lt;/abbr&gt;</code></pre>

<p>A software program could read this snippet and determine that the text &quot;The West Pier, Brighton, UK&quot; more specifically refers to the location at latitude 50.818967, longitude -0.151934.</p>

<h2 id="geo-adr">geo + adr Microformat</h2>

<p>One of the most useful properties of microformats is that they can be grouped and nested within each other, to form <a href="http://premasagar.com/microformats/compound/" rel="tag" title="Visualisation of interwoven compound microformats">compound microformats</a>.</p>

<p>We could, for example, have placed the geo microformat inside an <a href="http://microformats.org/wiki/adr" rel="tag" title="&amp;quot;adr&amp;quot; in the Microformats wiki">adr</a> (address) microformat, to indicate that these are coordinates for a particular postal address or place name:</p>

<pre><code>This place is beautiful.

&lt;span class=&quot;adr&quot;&gt;
   &lt;span class=&quot;extended-address&quot;&gt;The West Pier&lt;/span&gt;,
   &lt;span class=&quot;locality&quot;&gt;Brighton&lt;/span&gt;,
   &lt;abbr class=&quot;country-name&quot; title=&quot;United Kingdom&quot;&gt;UK&lt;/abbr&gt;

   (&lt;span class=&quot;geo&quot;&gt;
      &lt;span class=&quot;latitude&quot;&gt;50.818967&lt;/span&gt;,
      &lt;span class=&quot;longitude&quot;&gt;-0.151934&lt;/span&gt;
   &lt;/span&gt;)
&lt;/span&gt;</code></pre>

<p>This produces the following output:</p>

<pre><code>This place is beautiful. The West Pier, Brighton, UK (50.818967, -0.151934)</code></pre>

<p>The commas and brackets in this example are for <em>human</em> readability (most important!) and have no effect on the machine-readable microformat.</p>

<p>Using the <code>&lt;abbr&gt;</code> design pattern, our geo + adr microformat might instead look like this:</p>

<pre><code>This place is beautiful.

&lt;abbr class=&quot;geo&quot; title=&quot;50.818967;-0.151934&quot;&gt;
   &lt;span class=&quot;adr&quot;&gt;
      &lt;span class=&quot;extended-address&quot;&gt;The West Pier&lt;/span&gt;,
      &lt;span class=&quot;locality&quot;&gt;Brighton&lt;/span&gt;,
      &lt;abbr class=&quot;country-name&quot; title=&quot;United Kingdom&quot;&gt;UK&lt;/abbr&gt;
   &lt;/span&gt;
&lt;/abbr&gt;</code></pre>



<h2 id="geo-hcard">geo + hCard</h2>

<p>Geo can also be used (with or without the postal address) within an <a href="http://microformats.org/wiki/hcard" rel="tag" title="&amp;quot;hCard&amp;quot; in the Microformats wiki">hCard</a> microformat, to mark up contact details for a person or organisation:</p>

<pre><code>&lt;div class=&quot;vcard&quot;&gt;
   &lt;span class=&quot;fn&quot;&gt;John Smith&lt;/span&gt;

   &lt;span class=&quot;adr&quot;&gt;
      &lt;span class=&quot;extended-address&quot;&gt;The West Pier&lt;/span&gt;,
      &lt;span class=&quot;locality&quot;&gt;Brighton&lt;/span&gt;,
      &lt;abbr class=&quot;country-name&quot; title=&quot;United Kingdom&quot;&gt;UK&lt;/abbr&gt;

      (&lt;span class=&quot;geo&quot;&gt;
         &lt;span class=&quot;latitude&quot;&gt;50.818967&lt;/span&gt;,
         &lt;span class=&quot;longitude&quot;&gt;-0.151934&lt;/span&gt;
      &lt;/span&gt;)
   &lt;/span&gt;
&lt;/div&gt;</code></pre>



<h2 id="geo-hatom">geo + hAtom Microformat</h2>

<p>Another proposed, but as yet not finalised, use of the geo microformat is within the <a href="http://microformats.org/wiki/hatom" rel="tag" title="&amp;quot;hAtom&amp;quot; in the Microformats wiki">hAtom</a> microformat.</p>

<p>hAtom is a way to build HTML with the same semantic structure as an <a href="http://en.wikipedia.org/wiki/Atom_%28standard%29" title="&amp;quot;Atom&amp;quot; on Wikipedia">Atom</a> or <a href="http://en.wikipedia.org/wiki/RSS" rel="tag" title="&amp;quot;RSS&amp;quot; on Wikipedia">RSS</a> feed. An hAtom entry includes descriptive information about the post, such as its title, author and time of publication. This transforms a website into something akin to a massive Atom or RSS feed. New content can be picked up by feed readers <a href="http://microformats.org/wiki/xhtml-syndication" rel="tag" title="&amp;quot;XHML syndication&amp;quot; in the Microformats wiki">directly from the HTML</a> and, assuming the website keeps a <a href="http://en.wikipedia.org/wiki/Representational_State_Transfer" rel="tag" title="&amp;quot;REST&amp;quot; on Wikipedia">logical URL structure</a>, its entire archive of posts becomes automatically available as a <a href="http://allinthehead.com/retro/301/can-your-website-be-your-api" title="Using a website as its own API">web service API</a>, with no back-end scripting required.</p>

<p>When you add geo to hAtom, it is analogous to moulding standard RSS into <a href="http://georss.org" title="GeoRSS resources">GeoRSS</a> - that is, a geo-coded RSS or Atom feed:</p>

<pre><code>&lt;div class=&quot;hentry&quot;&gt;
   &lt;h2 class=&quot;entry-title&quot;&gt;The West Pier&lt;/h2&gt;
   &lt;p class=&quot;entry-content&quot;&gt;This place is beautiful.&lt;/p&gt;

   &lt;address class=&quot;vcard author&quot;&gt;
      &lt;span class=&quot;fn&quot;&gt;Premasagar&lt;/span&gt;
   &lt;/address&gt;

   &lt;a rel=&quot;bookmark&quot; href=&quot;http://twitter.com/statuses/33333/&quot;&gt;
      &lt;abbr class=&quot;updated&quot; title=&quot;2008-03-20T13:57Z&quot;&gt;3 hours ago&lt;/abbr&gt;
   &lt;/a&gt;

   (&lt;span class=&quot;geo&quot;&gt;
      &lt;span class=&quot;latitude&quot;&gt;50.818967&lt;/span&gt;,
      &lt;span class=&quot;longitude&quot;&gt;-0.151934&lt;/span&gt;
   &lt;/span&gt;)
&lt;/div&gt;</code></pre>

<p>GeoRSS is used as the standard mechanism for exchanging geocoded publications on the Web (and <a href="http://code.google.com/apis/kml/" rel="tag" title="KML resources">KML</a> is fast becoming the most common way to <em>visualise</em> it). By marking up your websites in geo + hAtom, you align your content with that transport mechanism, giving it the potential for more widespread distribution.</p>




<h2 id="hcalendar-geo">hCalendar + geo Microformat</h2>

<p>Geo can be used within the <a href="http://microformats.org/wiki/hcalendar" rel="tag" title="&amp;quot;hCalendar&amp;quot; in the Microformats wiki">hCalendar</a> microformat to provide the location of an event - both historical and upcoming events. Even fleeting, passing thoughts (or &#39;tweets&#39;) can be represented, like so:</p>

<pre><code>&lt;div class=&quot;vevent&quot;&gt;
   &lt;h2 class=&quot;summary&quot;&gt;The West Pier&lt;/h2&gt;
   &lt;p class=&quot;description&quot;&gt;This place is beautiful.&lt;/p&gt;

   &lt;a class=&quot;url&quot; href=&quot;http://twitter.com/statuses/33333/&quot;&gt;
      &lt;abbr class=&quot;dtstart&quot; title=&quot;2008-03-20T13:57Z&quot;&gt;3 hours ago&lt;/abbr&gt;
   &lt;/a&gt;

   &lt;p class=&quot;location&quot;&gt;
      &lt;span class=&quot;adr&quot;&gt;
         &lt;span class=&quot;extended-address&quot;&gt;The West Pier&lt;/span&gt;,
         &lt;span class=&quot;locality&quot;&gt;Brighton&lt;/span&gt;,
         &lt;abbr class=&quot;country-name&quot; title=&quot;United Kingdom&quot;&gt;UK&lt;/abbr&gt;

         (&lt;span class=&quot;geo&quot;&gt;
            &lt;span class=&quot;latitude&quot;&gt;50.818967&lt;/span&gt;,
            &lt;span class=&quot;longitude&quot;&gt;-0.151934&lt;/span&gt;
         &lt;/span&gt;)
      &lt;/span&gt;
   &lt;/p&gt;
&lt;/div&gt;</code></pre>

<p>The <code>dtstart</code> class in hCalendar is for the date-time of the start of the event. This is written according to the &#39;<a href="http://microformats.org/wiki/datetime-design-pattern" title="&amp;quot;datetime design pattern&amp;quot; in the Microformats wiki">datetime design pattern</a>&#39;, which is common to all microformats that describe time.</p>


<h2 id="hcalendar-geo-hatom">hCalendar + geo + hAtom Microformat</h2>

<p>For some uses, geocoded hAtom and hCalendar microformats can be combined within the same block of HTML. For example, an event (hCalendar) might be posted as a feed entry (hAtom). Or a feed entry (hAtom) might describe a passing moment (hCalendar):</p>

<pre><code>&lt;div class=&quot;vevent hentry&quot;&gt;
   &lt;h2 class=&quot;summary entry-title&quot;&gt;The West Pier&lt;/h2&gt;
   &lt;p class=&quot;description entry-content&quot;&gt;This place is beautiful.&lt;/p&gt;

   &lt;address class=&quot;vcard author&quot;&gt;
      &lt;span class=&quot;fn&quot;&gt;Premasagar&lt;/span&gt;
   &lt;/address&gt;

   &lt;a class=&quot;url&quot; rel=&quot;bookmark&quot; href=&quot;http://twitter.com/statuses/33333/&quot;&gt;

      &lt;abbr class=&quot;dtstart updated&quot; title=&quot;2008-03-20T13:57Z&quot;&gt;3 hours ago&lt;/abbr&gt;
   &lt;/a&gt;

   &lt;p class=&quot;location&quot;&gt;

      &lt;span class=&quot;adr&quot;&gt;
         &lt;span class=&quot;extended-address&quot;&gt;The West Pier&lt;/span&gt;,
         &lt;span class=&quot;locality&quot;&gt;Brighton&lt;/span&gt;,
         &lt;abbr class=&quot;country-name&quot; title=&quot;United Kingdom&quot;&gt;UK&lt;/abbr&gt;

      &lt;/span&gt;

      (&lt;span class=&quot;geo&quot;&gt;
         &lt;span class=&quot;latitude&quot;&gt;50.818967&lt;/span&gt;,
         &lt;span class=&quot;longitude&quot;&gt;-0.151934&lt;/span&gt;

      &lt;/span&gt;)
   &lt;/p&gt;
&lt;/div&gt;</code></pre>



<h2 id="where-next-geo-html">Where Next for Geo HTML?</h2>

<p>As you&#39;ve seen, there are a number of different types of content that can be enhanced with the geo microformat. However, at present, the microformat can only describe solitary, one-dimensional points. Formats such as <a href="http://georss.org" title="GeoRSS resources">GeoRSS</a>, <a href="http://code.google.com/apis/kml/" title="KML resources">KML</a> and <a href="http://en.wikipedia.org/wiki/Geography_Markup_Language" rel="tag" title="&amp;quot;GML&amp;quot; on Wikipedia">GML</a>, on the other hand, can also handle altitude, lines, areas and volumes. This is useful for describing streets, paths, boundaries, city and country territories, 3D buildings and natural features.</p>

<p>It remains to be seen whether such sophistication will make it into an HTML standard, or whether we will use HTML to embed external geo objects. These objects could be coded in a more specialised language, just as we currently embed JavaScript files and CSS stylesheets. Such discussions are <a href="http://microformats.org/wiki/geo-extension-waypoints" title="&amp;quot;geo extension: waypoints&amp;quot; in the Microformats wiki">well</a> <a href="http://microformats.org/wiki/geo-brainstorming" title="&amp;quot;geo brainstorming&amp;quot; in the Microformats wiki">under</a> <a href="http://microformats.org/wiki/geo-extension-elevation" title="&amp;quot;geo extension: elevation&amp;quot; in the Microformats wiki">way</a>.</p>



<h2 id="future-geo">The Future of Geo</h2>

<p>In this article, we&#39;ve explored some of the newest developments in geocoded content. Whilst mapping itself is an ancient pursuit, we are beginning to see the promise of a new kind of cartography. When we reach a critical mass of geo content and a wider distribution of geo applications and hardware, we can expect to see a very different Web than the one we know today.</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2344289818/" title="Google Earth at the Empire State Building"><img src="http://farm4.static.flickr.com/3110/2344289818_12116eb130.jpg" title="Google Earth at the Empire State Building" alt="Google Earth at the Empire State Building" height="309" width="500" /></a></p>

<p class="comment">Figure 12: Google Earth, showing a 3D Empire State Building with Wikipedia content.</p>

<p>We are starting to see geo-awareness being built into everyday devices - including phones, computers and cameras. In the same way that clocks are now used to time-stamp the messages we send and the pictures we take, we may in future take it for granted that they <em>geo-stamp</em> our data too.</p>

<p>It may also become common practice to update a web service, such as <a href="http://fireeagle.yahoo.net" title="Fire Eagle, a web service to log your location">Fire Eagle</a> (Figure 13), with one&#39;s current location - a practice that we might call &quot;geoscrobbling&quot;:</p>

<p><a href="http://www.flickr.com/photos/dharmasphere/2342704485/" title="Fire Eagle"><img src="http://farm4.static.flickr.com/3094/2342704485_fbc77b5d1c.jpg" title="Fire Eagle" alt="Fire Eagle" height="309" width="500" /></a></p>

<p class="comment">Figure 13: Yahoo Fire Eagle.</p>

<p>The record of a person&#39;s position over time could be used to place anything that they publish onto a Map, or could be streamed to their friends, or to web services that have permission to access it. And yes, you can also expect a flurry of discussions on geo privacy and security.</p>

<p>Perhaps future camcorders will track their position as they record - quite literally, filming on location. Yahoo Live + Fire Eagle be the future of mobile video?</p>

<p class="note">Note: Yahoo! Live was discontinued at the end of December 2008.</p>

<h2>Summary</h2>

<p>Geo is the most physical of all web technologies. It offers us a chance to reconnect with our local communities and to discover those around us. And as the world grows closer, we will start to see ourselves on each other&#39;s maps. So, watch this space... (and that space... and that one)...</p>


<p class="comment">
	<a href="http://premasagar.com" title="Premasagar Rose, personal site">Premasagar Rose</a> is co-director of <a href="http://dharmafly.com" title="Dharmafly, social web development">Dharmafly</a>, a social web development company in Brighton, UK.
</p>
