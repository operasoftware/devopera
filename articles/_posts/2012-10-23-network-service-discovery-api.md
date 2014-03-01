---
title: Network Service Discovery API Support in Opera
authors:
- daniel-davis
- rich-tibbett
intro: 'The Network Service Discovery API enables web pages to communicate with devices advertising themselves on the network via different discovery protocols in a peer-to-peer configuration. Now you can use JavaScript to find a UPnP server locally, browse its content and send that content to a UPnP client. This article, with links to experimental builds, shows you how.'
cover: png
license: cc-by-3.0
layout: article
---
<ul>
<li><a href="#intro">Introduction</a></li>
<li><a href="#whatis">What is the Network Service Discovery API?</a></li>
<li><a href="#download">Download a build</a></li>
<li><a href="#whatdoes">What does this build do?</a></li>
<li><a href="#howtouse">How do I use it?</a></li>
<li><a href="#demos">Can I see any demos?</a></li>
<li><a href="#production">Are these builds production-ready?</a></li>
<li><a href="#other">Anything else to be aware of?</a></li>
<li><a href="#next">What's next?</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<h2 id="intro">Introduction</h2>

<p><object width="640" height="360"><param name="movie" value="http://www.youtube.com/v/dujaAWwGVB4?version=3&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/dujaAWwGVB4?version=3&amp;rel=0" type="application/x-shockwave-flash" width="640" height="360" allowscriptaccess="always" allowfullscreen="true"></embed></object></p>

<p><a href="http://blog.nielsen.com/nielsenwire/online_mobile/three-screen-report-media-consumption-and-multi-tasking-continue-to-increase/">According to Nielsen</a>, as of 2009 nearly 60% people in the US used their TV and internet simultaneously for an average of 2.5 hours per person per month. That's around 128 million people and just over 19 billion minutes of simultaneous viewing per month! It's not surprising, then, that we've seen a surge of interest in multi-screen development recently. As part of this, we've submitted a draft specification to the W3C entitled <a href="http://www.w3.org/TR/2012/WD-discovery-api-20121004/">Network Service Discovery API</a> which aims to ease discovering and sharing data between devices.</p>

<h2 id="whatis">What is the Network Service Discovery API?</h2>

<p>The Network Service Discovery API enables web pages to communicate with devices advertising themselves on the network via different discovery protocols in a peer-to-peer configuration. It abstracts away the underlying complexity of Service Discovery protocols and returns back one or more UPnP or Zeroconf services in the network via a single API call. Now you can use JavaScript to find a UPnP server locally, browse its content and send that content to a UPnP client. A web page can act as a third-party control point and pass messages between connected services in the most appropriate format for that service.</p>

<h2 id="download">Download a build</h2>

<p>We have implemented this API in an <a href="http://dev.opera.com/labs">Opera Labs</a> build for desktop, available for you to download and experiment with. You can download the build most suited for your platform here:</p>

<ul>
<li>Opera desktop for Windows: <a href="http://www.opera.com/download/get.pl?id=35124&amp;sub=true&amp;nothanks=yes&amp;location=360">32 bit</a> | <a href="http://www.opera.com/download/get.pl?id=35125&amp;sub=true&amp;nothanks=yes&amp;location=360">64 bit</a></li>
<li><a href="http://www.opera.com/download/get.pl?id=35126&amp;sub=true&amp;nothanks=yes&amp;location=360">Opera desktop for Mac</a></li>
<li>Opera desktop for Linux: <a href="http://www.opera.com/download/get.pl?id=35121&amp;sub=true&amp;nothanks=yes&amp;location=360">i386 (deb)</a> | <a href="http://www.opera.com/download/get.pl?id=35120&amp;sub=true&amp;nothanks=yes&amp;location=360">amd64 (deb)</a> | <a href="http://www.opera.com/download/get.pl?id=35123&amp;sub=true&amp;nothanks=yes&amp;location=360">i386 (RPM)</a> | <a href="http://www.opera.com/download/get.pl?id=35122&amp;sub=true&amp;nothanks=yes&amp;location=360">x86_64 (RPM)</a> | <a href="http://www.opera.com/download/get.pl?id=35118&amp;sub=true&amp;nothanks=yes&amp;location=360">i386 (.xz)</a> | <a href="http://www.opera.com/download/get.pl?id=35119&amp;sub=true&amp;nothanks=yes&amp;location=360">x86_64 (.xz)</a></li>
<li>Opera desktop for FreeBSD: <a href="http://www.opera.com/download/get.pl?id=35117&amp;sub=true&amp;nothanks=yes&amp;location=360">i386</a> | <a href="http://www.opera.com/download/get.pl?id=35116&amp;sub=true&amp;nothanks=yes&amp;location=360">amd64</a></li>
</ul>

    <div class="note">
<p id="config">Note: For this API to work, you <strong>must</strong> enable two features in this build:</p>
      <ol>
<li>Go to <a href="opera:config#UserPrefs|EnableServiceDiscoveryAPI"><code>opera:config</code> -> Enable Service Discovery API</a>, check the box and click Save.</li>
<li>Go to <a href="opera:config#Network|AllowCrossNetworkNavigation"><code>opera:config</code> -> Allow Cross Network Navigation</a>, check the box and click Save.</li>
      </ol>
    </div>

<p><img src="opera-config_service-discovery.png" width="800"/></p>

<h2 id="whatdoes">What does this build do?</h2>

<p>This build is based on the <a href="http://www.w3.org/TR/2012/WD-discovery-api-20121004/">Network Service Discovery API specification</a> snapshot dated 4th October 2012 with the following caveats:</p>

<ul>
<li>The desktop builds support <a href="http://www.w3.org/TR/2012/WD-discovery-api-20121004/#simple-service-discovery-protocol-ssdp">UPnP Service Discovery</a> only at this early stage. We plan to also support <a href="http://www.w3.org/TR/2012/WD-discovery-api-20121004/#zeroconf-mdns-dns-sd">Zeroconf discovery</a> in our API.</li>
<li>We have not yet implemented <a href="http://www.w3.org/TR/2012/WD-discovery-api-20121004/#dfn-setup-a-upnp-events-subscription">UPnP Event Subscription</a> functionality.</li>
<li>We are not currently shipping a user interface for this so you will need to set the <a href="opera:config#UserPrefs|EnableServiceDiscoveryAPI">opera:config#UserPrefs|EnableServiceDiscoveryAPI</a> flag to enable this API.</li>
</ul>

<p>Focusing on <a href="http://upnp.org">UPnP</a>, communication is possible with XML messaging relayed via the <a href="http://dev.opera.com/articles/view/xhr2/">XMLHttpRequest API</a>. Here is an example SOAP request to browse files within the remote directory of a <a href="http://upnp.org/specs/av/av1/">UPnP Media Server</a>:</p>

<pre><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
    &lt;s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"&gt;
      &lt;s:Body&gt;
        &lt;u:Browse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"&gt;
          &lt;ObjectID&gt;0&lt;/ObjectID&gt;
          &lt;BrowseFlag&gt;BrowseDirectChildren&lt;/BrowseFlag&gt;
          &lt;Filter&gt;*&lt;/Filter&gt;
          &lt;StartingIndex&gt;0&lt;/StartingIndex&gt;
          &lt;RequestedCount&gt;100000&lt;/RequestedCount&gt;
        &lt;/u:Browse&gt;
      &lt;/s:Body&gt;
    &lt;/s:Envelope&gt;</code></pre>

<p>The most common use case at this stage is to search for media files on a server and play them in a renderer on a separate client. The API can even be used to change the volume on a UPnP-enabled TV. There are a few more <a href="http://www.w3.org/TR/2012/WD-discovery-api-20121004/#use-cases-and-requirements">use case suggestions in the spec</a> and we're looking forward to seeing what innovative services you can come up with.</p>

<h2 id="howtouse">How do I use it?</h2>

<p>It's probably best to look at a basic example by breaking it down into a few simple steps:</p>

    <ol>
<li>Call the <code>navigator.getNetworkServices()</code> method, passing it a list of well-known service types to look for.</li>
<li>If successful, specify a callback function to execute. Its argument is an array of found services.</li>
<li>Commands are sent to to your chosen service's URL usually using an XMLHttpRequest (but the API also allows you to theoretically connect devices via Web Sockets).</li>
<li>If necessary, the service's response can be parsed and then acted upon by your web application.</li>
    </ol>

<p>To simplify the process, we have also created the <a href="http://richtr.github.com/plug.play.js/">Plug.Play library</a> which acts as a UPnP service layer abstraction on top of <code>navigator.getNetworkServices()</code>. The library's <a href="https://github.com/richtr/plug.play.js">home page</a> includes a detailed breakdown of the steps mentioned briefly above - how to use  <code>navigator.getNetworkServices()</code> and how to then, optionally, use the library to invoke UPnP actions and process responses.</p>

<h2 id="demos">Can I see any demos?</h2>

<p>We've prepared a couple of simple demos to demonstrate the discovery concept. The first is a <a href="http://dev.opera.com/static/articles/2012/nsd-demo/">media player demo</a> which acts as a middle-man between media servers and renderers The second is a <a href="http://dev.opera.com/static/articles/2012/snoopnp/">web-based UPnP inspector</a> so you can monitor and edit messages to and from UPnP devices. Of course, to test these out you need UPnP services available on your network. Wikipedia has an extensive <a href="http://en.wikipedia.org/wiki/List_of_UPnP_AV_media_servers_and_clients">list of UPnP media servers and clients</a>, both hardware and software.</p>

<p><a href="http://dev.opera.com/static/articles/2012/nsd-demo/"><img src="upnp-web-demo.png" width="800"/></a></p>

<p><a href="http://dev.opera.com/static/articles/2012/snoopnp/"><img src="javascript-upnp-inspector.png" width="800"/></a></p>

<h2 id="production">Are these builds production-ready?</h2>

<p>No. The main issue is that there is no UI or privacy mechanism at this point &mdash; in other words, web pages have full access to all UPnP services on your local network and a call to getNetworkServices will return all services that match the requested service type. Because of this, the Service Discovery API needs to be enabled manually in <a href="opera:config#UserPrefs|EnableServiceDiscoveryAPI">opera:config</a> in the builds provided on this page, <a href="#download">as mentioned earlier</a>.</p>

<p>Ultimately, this API will ship with a opt-in interface to allow users to authorize a web page to connect with one or more services that the page has requested. We are currently hard at work imagining this user interface. When we have a good user experience story to tell for this API we will provide updates on this blog.</p>

<h2 id="other">Anything else to be aware of?</h2>

<p>A couple of things:</p>

<ul>
<li>The <code>getNetworkServices</code> method will look for services for up to three seconds. The time limit is because of the current lack of UI but it can be adjusted in <a href="opera:config#UserPrefs|ServiceDiscoveryTimeMs">opera:config -> Service Discovery Time Ms</a>.</li>
<li>There is a <a href="https://www.virtualbox.org/ticket/8698">bug in VirtualBox on Windows</a> that causes all multicast communication to be blocked, including but not limited to UPnP discovery. If you have VirtualBox installed on your system, disable the "VirtualBox Host-Only Ethernet Adapter" network interface and restart Opera (or, in rare cases, the whole system).</li>
</ul>

<h2 id="problems">If you have problems</h2>

<p>If you have trouble getting the demos or your own code to work, there are number of things that could be the cause. Here are some steps to take to fix the problem.</p>

    <ol>
<li>The first thing to check is that you have enabled the two essential options in <code>opera:config</code>. See the <a href="#download">download section</a> for details.</li>
<li>If that doesn't work, it could be an issue with the UPnP device you're using. We've noticed differences in UPnP support even within a single product line of TVs, for example. Please try with another UPnP device if possible, or test using a UPnP server and renderer installed on your own PC first.</li>
<li>Another cause could be file formats. UPnP renderers are restricted by the formats they can decode and play so trying media files in various formats may help.</li>
<li>If the problem still persists then please leave a comment at the bottom of this article or a message in the <a href="http://my.opera.com/community/forums/tgr.dml?id=2157">Dev.Opera forums</a>.</li>
    </ol>

<h2 id="next">What's next?</h2>

<p>We are currently discussing and iterating on the <a href="http://www.w3.org/TR/2012/WD-discovery-api-20121004/">current Network Service Discovery specification</a> in the <a href="http://www.w3.org/2009/dap/">W3C Device APIs Working Group</a>. If you would like to contribute to development of this specification, you should join the <a href="http://lists.w3.org/Archives/Public/public-device-apis/">public mailing list</a>.</p>

<p>One future improvement we are considering is to enable web pages to register themselves as services and advertise themselves on the local network. This would mean they could communicate with other devices in a network peer-to-peer, even between web pages on different devices!</p>

<h2 id="conclusion">Conclusion</h2>

<p>As this is the first implementation of an early specification, any developer feedback is extremely valuable. We'd be grateful if you could let us know in the comments section below about your experiences with these builds, as well as ideas you may have for other use cases and improvements we could make. One improvement that has lots of potential is support for Zeroconf, meaning web pages could talk to iTunes, AirPlay devices, etc.</p>

<p>Multi-screen capability is a fast-moving technology so watch this space!</p>
