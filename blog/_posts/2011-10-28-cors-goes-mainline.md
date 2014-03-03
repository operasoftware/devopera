---
title: CORS Goes Mainline
authors:
- charles-mccathienevile
tags:
- http
- features
- protocols
- core
- webstandards
- w3c
- coreblog
license: cc-by-3.0
layout: post
---

<p>About 6 years ago Opera&#39;s <a href="http://my.opera.com/anne/" rel="nofollow" target="_blank">Anne van Kesteren</a> started working on a spec called &quot;Access Control&quot;, which had been used in VoiceXML to allow limited cross-site access for cases where that didn&#39;t pose a security problem. After many years of working on the spec, in Opera, and with other browser developers, it is something the Web is starting to adopt - a real standard, now called <a href="http://www.w3.org/TR/cors/" rel="nofollow" target="_blank">CORS</a>. Although it is still formally a working draft, it has been stabilising and getting deployed in test applications so we don&#39;t expect it to change a lot now.<br/><br/>This week, Opera integrated support for it into the core mainline, meaning it can start to be adopted in product builds - so look for it soon in a snapshot near you. ... </p><!--more-->Cross-Origin Resource Sharing(CORS) has applications for XMLHttpRequest, EventSource and cross-origin image fetches. Here&#39;s a brief attempt at giving an overview of what it brings.<br/><br/>In its simple form, CORS requires the user agent to lace requests with an &quot;Origin:&quot; header when performing accesses outside of a same-origin boundary. The &quot;Origin:&quot; being the (protocol,server,port) of the originating content (e.g., <a href="http://sau.no" target="_blank">http://sau.no</a>) So, if content on sau.no accesses elg.no resources, the elg.no resource will verify that such access is allowed and include CORS headers in the response. (e.g., Access-Control-Allow-Origin: <a href="http://sau.no" target="_blank">http://sau.no</a>) The user agent then verifies that the attempted CORS access was indeed permitted from the given origin before giving the green light.<br/><br/>That&#39;s the simple form. Full CORS also handles any method and header along with optionally using credentials/cookies for such cross-origin accesses. To quote the <a href="http://www.w3.org/TR/2010/WD-cors-20100727/#introduction" target="_blank">introduction of the current W3C working draft</a>:<br/><br/><blockquote class="bbquote"><p> If a resource author has a simple text resource residing at <a href="http://example.com/hello" target="_blank">http://example.com/hello</a> which contains the string &quot;Hello World!&quot; and would like <a href="http://hello-world.example" target="_blank">http://hello-world.example</a> to be able to access it, the response combined with a header introduced by this specification could look as follows:<br/><pre>
Access-Control-Allow-Origin: http://hello-world.example

Hello World!</pre><br/>Using XMLHttpRequest a client-side Web application on <a href="http://hello-world.example" target="_blank">http://hello-world.example</a> can access this resource as follows:<br/><pre>var client = new XMLHttpRequest();
client.open(&quot;GET&quot;, &quot;http://example.com/hello&quot;)
client.onreadystatechange = function() { /* do something */ }
client.send()</pre><br/>It gets slightly more complicated if the resource author wants to be able to handle cross-origin requests using methods other than simple methods. In that case the author needs to reply to a preflight request that uses the OPTIONS method and then needs to handle the actual request that uses the desired method (DELETE in this example) and give an appropriate response. The response to the preflight request could have the following headers specified:<br/><pre>Access-Control-Allow-Origin: http://hello-world.example
Access-Control-Max-Age: 3628800
Access-Control-Allow-Methods: PUT, DELETE</pre><br/>The Access-Control-Max-Age header indicates how long the response can be cached, so that for subsequent requests, within the specified time, no preflight request has to be made. The Access-Control-Allow-Methods header indicates the methods that can be used in the actual request. The response to the actual request can simply contain this header:<br/><pre>Access-Control-Allow-Origin: http://hello-world.example</pre><br/>The complexity of invoking the additional preflight request is the task of the user agent. Using XMLHttpRequest again and assuming the application were hosted at <a href="http://calendar.example/app" target="_blank">http://calendar.example/app</a> the author could use the following ECMAScript snippet:<br/><pre>function deleteItem(itemId, updateUI) {
  var client = new XMLHttpRequest()
  client.open(&quot;DELETE&quot;, &quot;http://calendar.example/app&quot;)
  client.onload = updateUI
  client.onerror = updateUI
  client.onabort = updateUI
  client.send(&quot;id=&quot; + itemId)
} </pre></p></blockquote><br/>The CORS algorithm/protocol is clearly of a general nature, and has applicability in a number of settings already. The current integration adds it to XMLHttpRequest, EventSource, and cross-origin image fetches. The last part allows use of cross-origin images and textures on Canvas and WebGL. Adding the CORS security checks to other contexts will be done over time.<br/><br/>As part of this work we have done a little general upgrade of our XMLHttpRequest and we now support EventTarget. The modernisation continues, and we hope to round out our implementation of the XMLHttpRequest2 specification soon.<br/>
