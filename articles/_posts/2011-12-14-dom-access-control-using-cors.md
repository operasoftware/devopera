---
title: DOM Access Control Using Cross-Origin Resource Sharing
authors:
- tiffany-brown
intro: 'This article provides an introductory guide to cross origin resource sharing, or CORS, a technology allowing you to control communication and access between resources residing at different origins in a secure manner, getting around problems associated with the traditional same-origin security policy.'
license: cc-by-3.0
---
<ul>
<li><a href="#intro">Introduction</a></li>
<li><a href="#whatiscors">What is CORS?</a></li>
<li><a href="#makingsimpleCORSrequests">How browsers make <em>simple</em> cross-origin requests</a></li>
<li><a href="#makingcomplexCORSrequests">How browsers make <em>complex</em> cross-origin requests</a>
</li>
<li><a href="#SendingResponseHeaders">Sending CORS response headers</a>
<ul>
<li><a href="#AccessControlAllowOrigin">Access-Control-Allow-Origin</a></li>
<li><a href="#AccessControlAllowMethods">Access-Control-Allow-Methods</a></li>
<li><a href="#AccessControlAllowHeaders">Access-Control-Allow-Headers</a></li>
<li><a href="#AccessControlAllowCredentials">Access-Control-Allow-Credentials</a></li>
<li><a href="#AccessControlExposeHeaders">Access-Control-Expose-Headers </a></li>
<li><a href="#AccessControlMaxAge">Access-Control-Max-Age</a></li>
</ul>
</li>
<li><a href="#SettingResponseHeaders">How to set response headers</a>
<ul>
<li><a href="#ConditionalCORS">Conditional CORS</a></li>
</ul>
</li>
<li><a href="#LearnMore">Learn more</a></li>
</ul>

<h2 id="intro">Introduction</h2>

<p>Same-origin policies are a central security concept of modern browsers. In a web context, they prevent a script hosted at one <strong>origin</strong> &#8212; meaning the same protocol, domain name, and port &#8212; from reading from or writing to the <abbr title="Document Object Model">DOM</abbr> of another.</p>

<p>This restriction is sensible and useful most of the time. Without a same-origin policy, a script hosted on <code>http://foo.example</code> could hijack cookie data or sensitive document information from <code>http://bar.example</code> and redirect it to <code>http://evilsite.example</code>.</p>

<p>Sometimes, however, a same-origin policy can be burdensome. Making requests across subdomains, for example, is prohibited by a same-origin policy. You also can't use <code>XMLHttpRequest</code> to pull in JSON data from a third-party API. To make matters worse, workarounds such as <a href="https://en.wikipedia.org/wiki/JSONP">JSONP</a> or  <a href="http://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_DOM_access"><code>document.domain</code></a> can leave us vulnerable to <acronym title="cross-site scripting">XSS</acronym> attacks.</p>

<p>What we need, then, is a mechanism for requesting data across origins, but with the ability to deny requests that don't come from the right source. This is the problem that Cross-Origin Resource Sharing (or <a href="http://www.w3.org/TR/cors/"><abbr>CORS</abbr></a>) solves.</p>

<p class="note">Cross-Origin Resource Sharing is new in <a href="http://opera.com/download/">Opera 12</a>. Support is also available in Chrome, Safari, Firefox, and the forthcoming Internet Explorer 10.</p>

<h2 id="whatiscors">What is <abbr>CORS</abbr>?</h2>

<p><abbr>CORS</abbr> is a system of headers and rules that allow browsers and servers to communicate whether or not a given origin is allowed access to a resource stored on another. Understanding CORS is critical to working with modern web APIs. <a href="http://dev.w3.org/2006/webapi/XMLHttpRequest-2/">Cross-domain <code>XMLHttpRequest</code></a>, and Internet Explorer's <a href="http://msdn.microsoft.com/en-us/library/cc288060(VS.85).aspx"><code>XDomainRequest</code></a> object, for example, both rely on it.</p>

<p>CORS consists of three request headers, and six response headers (see <a href="#fig1">Table 1</a> below). Browsers automatically set request headers for some cross-origin requests, such as those made using the <code>XMLHttpRequest</code> object.</p>

<div block="table">
<table id="fig1">
<caption>Figure 1: A table of cross-origin resource sharing headers</caption>
<thead>
	<tr>
		<th>Request headers</th>
		<th>Response headers</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td><code>Origin</code>: Lets the target host know that the request is coming from an external source, and what that source is.</td>
		<td><a href="#AccessControlAllowOrigin"><code>Access-Control-Allow-Origin</code></a>: Lets the referer know whether it is allowed to use the target resource.</td>
	</tr>
	<tr>
		<td><code>Access-Control-Request-Method</code>: Included when the HTTP method used is one that may cause a side-effect (such as <code>PUT</code> or DELETE).</td>
		<td><a href="#AccessControlAllowMethods"><code>Access-Control-Allow-Methods</code></a>: Lets the referer know what HTTP methods are allowed, i.e. if the one(s) specified in <code>Access-Control-Request-Method</code> are okay.</td>
	</tr>

	<tr>
		<td><code>Access-Control-Request-Headers</code>: Included when the header is a complex header, such as <code>If-Modified-Since</code>, or a custom header such as Opera Mini's <code>X-Forwarded-For</code>.</td>
		<td><a href="#AccessControlAllowHeaders"><code>Access-Control-Allow-Headers</code></a>: Lets the referer know if the headers it sent are okay.</td>
	</tr>

	<tr>
		<td>&nbsp;</td>
		<td><a href="#AccessControlMaxAge"><code>Access-Control-Max-Age</code></a>: Explicitly informs the referer how many seconds it should store the preflight result. Within this time, it can just send the request, and doesn't need to bother sending the preflight request again.</td>
	</tr>

	<tr>
		<td>&nbsp;</td>
		<td><a href="#AccessControlAllowCredentials"><code>Access-Control-Allow-Credentials</code></a>: This tells the host whether the request can include user credentials.</a></td>

	</tr>

	<tr>
		<td>&nbsp;</td>
		<td><a href="#AccessControlExposeHeaders"><code>Access-Control-Expose-Headers</code></a>: Lets the host know exactly which headers it can expose to the referring application. A header white-list.</td>
	</tr>
</tbody>
</table>
</div>

<p>Response headers, of course, are returned by the URI in question. You can set them in your server configuration file or per URI using a server-side language. Which approach you choose will depend on the kind of application you're building. We'll cover each response header in the <a href="#SendingResponseHeaders">Sending CORS Response Headers</a> section.</p>

<p>Though cross-origin resource sharing is a permissions system of sorts, understand that it is <strong>not a form of content protection</strong>: it is a form of <strong>cross-site scripting protection</strong>. Browsers will still complete the HTTP request, but will expose the resulting response body <em>only</em> if the response includes the appropriate headers. You will experience this if you run the <a href="http://people.opera.com/tiffanyb/2011/cors/">CORS demos</a>.</p>

<p class="note">Speaking of running demos, I recommend using an HTTP monitor to observe headers, as built-in developer tools can sometimes mask what's happening under the hood. A good open source choice is <a href="http://www.wireshark.org/">Wireshark</a>, and pay-for alternatives include <a href="http://www.charlesproxy.com/">Charles</a> (Mac/Win/Linux; US$50 / ~&euro;38) and <a href="http://tuffcode.com/">HTTPScoop</a> (Mac; &euro;12 / ~US$15)</p>

<h2 id="makingsimpleCORSrequests">How browsers make simple cross-origin requests</h2>

<p>When a script attempts a cross-origin request, the user agent will automatically include one or more request headers, depending on how the request is formed. If the server or application sends the appropriate response headers, subsequent attempted changes to the DOM will succeed.</p>

<p>Here&#8217;s an example. The code below uses <code>XMLHttpRequest</code> to retrieve a JSON-formatted file from <code>http://foo.example</code>. We'll assume that this script is hosted on <code>http://bar.example</code>.</p>

<pre><code>var xhr = new XMLHttpRequest();
xhr.onload = function(e){
  // Build a list and append it to the document's body.
}
xhr.open('GET', 'http://foo.example/data.json');
xhr.send( null );</code></pre>

<p>Now let's look at how Opera and other browsers handle this cross-origin request. What follows is an example of Opera's request headers.</p>

<pre>GET /data.json HTTP/1.1
User-Agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.10.238 Version/12.00
Host: foo.example
Accept: text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1
Accept-Language: en, en-US
Accept-Encoding: gzip, deflate
Referer: http://bar.example/document_making_the_request.html
Connection: Keep-Alive
<strong>Origin: http://bar.example</strong></pre>

<p>See that <code>Origin</code> header? It lets <code>http://foo.example/data.json</code> know that this request is coming from an external source. Notice too that the <code>Referer</code> and <code>Origin</code> headers have different values, and that the value of <code>Origin</code> does not include a trailing slash.</p>

<p>Now let's look at the URI's response headers.</p>

<pre>HTTP/1.1 200 OK
Date: Tue, 04 Oct 2011 00:18:35 GMT
Server: Apache/2.2.20
Cache-Control: max-age=0
Expires: Tue, 04 Oct 2011 00:18:35 GMT
Vary: Accept-Encoding
Content-Type: application/json
<strong>Access-Control-Allow-Origin: http://bar.example</strong>
</pre>

<p>Here we have an <code>Access-Control-Allow-Origin</code> response header. That header indicates whether or not <code>http://bar.example</code> is allowed to use this resource. Because the value of <code>Access-Control-Allow-Origin</code> matches <code>http://bar.example</code>, subsequent DOM operations requiring <code>data.json</code> will succeed (as you can see in my <a href="http://people.opera.com/tiffanyb/2011/cors/origin/">CORS example)</a>. If the <code>Access-Control-Allow-Origin</code> value did not match, or the header was missing, then the contents of <code>data.json</code> would not be made available to the DOM. We&#8217;ll discuss the <a href="#AccessControlAllowOrigin"><code>Access-Control-Allow-Origin</code></a> header in greater detail below.</p>

<h2 id="makingcomplexCORSrequests">How browsers make complex cross-origin requests</h2>

<p>For <a href="http://www.w3.org/TR/cors/#simple-method">simple request methods</a> (<code>GET</code>, <code>HEAD</code> and <code>POST</code>), and <a href="http://www.w3.org/TR/cors/#simple-header">simple request headers</a> (<code>Accept</code>, <code>Accept-Language</code>, <code>Content-Language</code>, <code>Last-Event-ID</code>, or <code>Content-Type</code>) the exchange between the <code>Origin</code> header and the <code>Access-Control-Allow-Origin</code> header is enough.</p>

<p>Complex request methods and request headers (including custom headers) work a bit differently. They require that the cross-origin request be pre-approved using a <strong>preflight request</strong>.</p>

<p>A <strong>preflight</strong> request asks the target server whether it is okay to make a full request using a particular method or header. In a typical cross-origin request, the user agent says to the server, <q>Hi there! It&#8217;s <code>http://foo.example</code>. Please send me this resource.</q> In a preflight request, the user agent will start off by saying, <q>Hey, hey! It&#8217;s <code>http://foo.example</code>. I am going to ask for this resource using the <code>PUT</code> method. I also plan to include an <code>If-Modified-Since</code> header. Will you tell me whether you can handle this method and header before I send the actual request?</q></p>

<p>During a preflight operation, the user agent first sends a request using the <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.2"><code>OPTIONS</code></a> method. In addition to the <code>Origin</code> header, the preflight request will include the <code>Access-Control-Request-Method</code> and/or an <code>Access-Control-Request-Headers</code> header.</p>

<p><code>Access-Control-Request-Method</code> is included when the <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html#sec5.1.1">HTTP method</a> used is one that may have a side effect &#8212; using <code>PUT</code> or <code>DELETE</code>, for example. Browsers also send <code>Access-Control-Request-Headers</code> when the header is a complex header, such as  <code>If-Modified-Since</code>, or a custom header such as Opera Mini's <code>X-Forwarded-For</code>.</p>

<p>Let's look at an example using the <code>PUT</code> method. This request will be made from <code>servera.example</code> to <code>serverb.example</code> using <code>XMLHttpRequest</code>.</p>

<pre>var xhr = new XMLHttpRequest() ;
xhr.open('PUT', 'http://serverb.example/formhandler/');
xhr.send('data=some+data');</pre>

<p>Now let's look at the preflight request headers.</p>

<pre>OPTIONS /formhandler/ HTTP/1.1
User-Agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.10.238 Version/12.00
Host: serverb.example
Accept: text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1
Accept-Language: en, en-US
Accept-Encoding: gzip, deflate
Referer: http://servera.example/make_cross_origin_request
Connection: Keep-Alive
Content-Length: 0
Origin: http://servera.example
Access-Control-Request-Method: PUT</pre>

<p>The URI returns a standard set of response headers. But it also includes the <code>Access-Control-Allow-Origin</code> and <code>Access-Control-Allow-Methods</code> headers.</p>

<pre>HTTP/1.1 200 OK
Date: Tue, 06 Dec 2011 23:28:16 GMT
Server: Apache/2.2.21
Access-Control-Allow-Origin: http://servera.example
Access-Control-Allow-Methods: PUT
Cache-Control: max-age=0
Expires: Tue, 06 Dec 2011 23:28:16 GMT
Vary: Accept-Encoding
Content-Encoding: gzip
Content-Length: 134
Content-Type: text/html; charset=UTF-8</pre>

<p>Here the values of <code>Access-Control-Allow-Origin</code> and <code>Access-Control-Allow-Methods</code> match the values of <code>Origin</code> and <code>Access-Control-Request-Method</code>, respectively. As a result, this preflight request will be followed by an <em>actual request</em> that includes the request body (in this case, <code>data=some+data</code>).</p>

<p>We will cover <code>Access-Control-Allow-Methods</code> and a similar header, <code>Access-Control-Allow-Headers</code>, in the <a href="#SendingResponseHeaders">Sending CORS response headers</a> section. For now, it's enough to understand that if either of these headers were missing or contained values that did not match, the browser would cancel the actual request.</p>

<h2 id="SendingResponseHeaders">Sending CORS response headers</h2>

<p>Scripts can initiate cross-origin requests, but the target URI must permit fetching by sending the appropriate response headers. Let&#8217;s look at each possible response header.</p>

<h3 id="AccessControlAllowOrigin"><code>Access-Control-Allow-Origin</code></h3>

<p>As its name suggests, the <code>Access-Control-Allow-Origin</code> header is a response to the <code>Origin</code> request header. It tells the user agent whether the requesting origin has permission to fetch the resource.</p>

<p><code>Access-Control-Allow-Origin</code> can be set to one of three values:</p>

<ul>
<li><code>null</code>, which denies all origins;</li>
<li><code>*</code>, the wildcard operator, which allows all origins; or</li>
<li>An origin list of one or more space-separated origins.</li>
</ul>

<p>The following examples are all valid headers.</p>

<ul>
<li><code>Access-Control-Allow-Origin: null</code></li>
<li><code>Access-Control-Allow-Origin: *</code></li>
<li><code>Access-Control-Allow-Origin: http://foo.example</code></li>
<li><code>Access-Control-Allow-Origin: http://foo.example http://bar.example</code></li>
</ul>

<p>In practice, however, origin lists (<code>Access-Control-Allow-Origin: http://foo.example http://bar.example</code>) do not yet work in any browser. Instead, servers and applications must return an <code>Access-Control-Allow-Origin</code> header conditionally, based on the value of the <code>Origin</code> request header. An example of how to do this follows, in the <a href="#ConditionalCORS">Conditional CORS implementation section</a>.</p>

<p>Also keep in mind that, though it is <em>possible</em> to use a wildcard value, it isn't necessarily a good idea. Doing so will allow scripts from <em>any</em> origin access to your document tree. It is safest to limit access to origins you know, and authenticate requests for sensitive data.</p>


<h3 id="AccessControlAllowMethods"><code>Access-Control-Allow-Methods</code></h3>

<p>If a preflight request contains an <code>Access-Control-Request-Method</code> header, the target URI must return an <code>Access-Control-Allow-Methods</code> header for the request to be completed successfully. The header's value must be one or more <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html#sec5.1.1">HTTP methods</a> such as <code>PUT</code>, <code>DELETE</code>, <code>TRACE</code> or <code>CONNECT</code> (again, <code>GET</code>, <code>POST</code>, and <code>HEAD</code> are considered simple methods, and will not cause this header to be included).</p>

<p>It's perfectly valid to allow multiple methods. However, you must separate them with a comma: <code>Access-Control-Allow-Methods: PUT, DELETE</code>.</p>

<h3 id="AccessControlAllowHeaders"><code>Access-Control-Allow-Headers</code></h3>

<p><code>Access-Control-Allow-Headers</code> has a similar function to <code>Access-Control-Allow-Methods</code>, but instead tells the browser whether a particular <em>header</em> is allowed.</p>

<p>Standard or custom headers are appropriate values for <code>Access-Control-Allow-Headers</code>. For the cross-origin request to succeed, its value must match (or include) the value of the <code>Access-Control-Request-Headers</code> header. Let&#8217;s look at an example.</p>

<pre>OPTIONS /data.json HTTP/1.1
User-Agent: Opera/9.80 Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.10.238 Version/12.00
Host: domain.example
Accept: text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1
Accept-Language: en, en-US
Accept-Encoding: gzip, deflate
Referer: http://requestingserver.example/path/to/document_making_the_request/
Connection: Keep-Alive
Origin: http://requestingserver.example
Access-Control-Request-Headers: X-Secret-Request-Header</pre>

<p>The response headers might look like this:

<pre>HTTP/1.1 200 OK
Date: Tue, 04 Oct 2011 00:18:35 GMT
Server: Apache/2.2.20
Cache-Control: max-age=0
Expires: Tue, 04 Oct 2011 00:18:35 GMT
Vary: Accept-Encoding
Content-Type: text/html; charset=UTF-8
Access-Control-Allow-Origin: http://requestingserver.example
Access-Control-Allow-Headers: X-Secret-Request-Header, X-Forwarded-For</pre>

<p>In this case, the request succeeds. If the value of <code>Access-Control-Allow-Headers</code> was <code>X-Not-A-Secret</code> instead, or missing entirely, this would have failed. As with <code>Access-Control-Allow-Methods</code>, multiple header values must be separated by a comma.</p>


<h3 id="AccessControlAllowCredentials"><code>Access-Control-Allow-Credentials</code></h3>

<p>Cross-origin requests do not include cookies or HTTP authentication information by default; they can, however, if the credentials flag is set to true. In the case of <code>XMLHttpRequest</code>, the credentials flag can be set using the <code>withCredentials</code> property. Below is an example of such a request. If a user cookie is available, it will be sent to the server.</p>

<pre>xhr = new XMLHttpRequest();
xhr.open('GET','/page_requiring_authentication/');
xhr.withCredentials = true;
xhr.send( null );
</pre>

<p>Setting <code>Access-Control-Allow-Credentials</code> tells the user agent whether the response should be exposed when the credentials flag is true. If sent in response to a preflight request, it indicates that the actual request can include user credentials. In these cases, the <code>Access-Control-Allow-Origin</code> header must match the origin in order for the request to succeed; a wild card value will not work. Again, if the header is missing entirely, the request will fail (view my <a href="http://people.opera.com/tiffanyb/2011/cors/access-control-allow-credentials/"><code>Access-Control-Allow-Credentials</code> demo</a>).</p>

<h3 id="AccessControlExposeHeaders"><code>Access-Control-Expose-Headers</code> </h3>

<p>Browsers, by default, limit which cross-origin response headers are available to the DOM. Using the <code>XMLHttpRequest.getResponseHeader()</code> to read the <code>Content-Length</code> header will result in a <code>null</code> value. You may however want your application to know how many bytes of content to expect. <code>Access-Control-Expose-Headers</code> is designed to let developers white-list headers that can safely be exposed to the requesting origin.</p>

<p>Unfortunately, <code>Access-Control-Expose-Headers</code> does not yet work as you might expect in some browsers. To date:</p>

<ul>
<li>Opera and Firefox will permit both standard HTTP headers and custom headers to be exposed.</li>
<li>Chrome and Safari will not expose headers it deems unsafe, including custom headers.</li>
<li>Internet Explorer will expose custom headers, but not standard ones that it deems unsafe.</li>
</ul>

<p><code>Content-Length</code>, for example, can be exposed in Firefox and Opera, but not Internet Explorer, Chrome, or Safari. A custom header such as <code>X-Secret-Request-Header</code> can be exposed in Opera, Internet Explorer, and Firefox, but not Chrome or Safari. To see this for yourself, compare how my <a href="http://people.opera.com/tiffanyb/2011/cors/access-control-expose-headers/"><code>Access-Control-Expose-Headers</code> demo</a> works in different browsers.</p>

<h3 id="AccessControlMaxAge"><code>Access-Control-Max-Age</code></h3>

<p>When a user agent makes a preflight request, the result is stored in the preflight result cache. The default expiration varies from browser to browser, but cross-origin requests made after the result cache expires will be preceded by another preflight request.</p>

<p><code>Access-Control-Max-Age</code> explicitly informs the user agent how many seconds it should store the preflight result (try viewing my <a href="http://people.opera.com/tiffanyb/2011/cors/access-control-max-age/"><code>Access-Control-Max-Age</code> demo</a>). <code>Access-Control-Max-Age: 15</code>, for instance, tells the browser <q>If you make another request in the next fifteen seconds, you can skip the preflight process. Just send the request.</q> Setting <code>Access-Control-Max-Age</code> to zero (<code style="white-space:nowrap">Access-Control-Max-Age: 0</code>) disables the preflight result cache.</p>

<h2 id="SettingResponseHeaders">How to Set Response Headers</h2>

<p>The easiest way to enable cross-origin resource sharing is to set response headers per file type or directory using a server configuration file. The example that follows is specific to Apache, and requires <code>mod_headers</code>. To permit requests for all JSON files from <code>http://foo.example</code>, your <code>.htaccess</code> file should contain the following.</p>

<pre>&lt;IfModule mod_headers.c&gt;
  &lt;FilesMatch "\.json$"&gt;
      Header set Access-Control-Allow-Origin "http://foo.example"
  &lt;/FilesMatch&gt;
&lt;IfModule&gt;</pre>

<p>If you use another web server, consult its documentation for instructions.</p>

<p>Setting CORS headers in the server configuration is adequate in some situations, although in most cases you&#8217;ll want to set access control response headers per URI. This should be done at the application level using a server-side language of your choice.</p>

<h3 id="ConditionalCORS">Conditional CORS</h3>

<p>As discussed above, no major browser yet supports multiple origins as a value for the  <code>Access-Control-Allow-Origin</code> header. So what do you do if you want to share data across several origins? The solution is to set the value conditionally.</p>

<p>The simple example that follows uses PHP to send an <code>Access-Control-Allow-Origin</code> response header only if the supplied origin is in our white list (<code>$allowed</code>):</p>

<pre id="conditional-origin"><code>&lt;?php
# First check whether the Origin header exists
if( in_array('HTTP_ORIGIN', $_SERVER) ) {
  # Define a list of permitted origins
  $allowed = array('http://foo.example','http://bar.example','http://dom.example');

  # Check whether our origin is permitted.
  if(in_array($_SERVER['HTTP_ORIGIN'], $allowed) ){
    $filtered_url = filter_input(INPUT_SERVER, 'HTTP_ORIGIN', FILTER_SANITIZE_URL);
    $send_header  = 'Access-Control-Allow-Origin: '.$filtered_url;
    header($send_header);
    // Send your content here.
  }
} else {
  exit;
}
?&gt;</code></pre>

<p>A more robust version of the above example might keep a list of allowed origins for each URI in a datastore. Again, this is not an effective way to protect sensitive data. But it <em>is</em> a bullwark against XSS attacks.</p>

<h2 id="LearnMore">Learn More</h2>

<p>For a greater understanding of cross-domain scripting and cross-origin resource sharing, visit the resources below.</p>

<ul>
<li><a href="http://www.w3.org/TR/cors/">CORS specification</a></li>
<li><a href="http://enable-cors.org/">Enable Cross-Origin Resource Sharing</a></li>
<li><a href="http://code.google.com/p/html5security/wiki/CrossOriginRequestSecurity">Guide to Secure Implementation of HTML5's Cross Origin Requests</a></li>
<li><a href="http://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_DOM_access">Browser Security Handbook, part 2</a></li>
</ul>
