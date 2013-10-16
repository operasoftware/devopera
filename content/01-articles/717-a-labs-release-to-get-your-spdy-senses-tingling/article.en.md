Title: A labs release to get your SPDY senses tingling
----
Date: 2012-07-04 18:35:12
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

<p>For many years now, we have relied on the marriage of the TCP and HTTP protocols for handling data request/response communication, and transporting the resulting data packets to where they need to go. In short, they are how we get things done on the Web. But they are not perfect. Websites are a lot bigger and more complicated than they used to be when these protocols were first designed. HTTP in particular has problems with latency, because:</p>

<ul>
  <li>It can only fetch a single resource at a time, per connection</li>
  <li>Only the client can initiate requests under HTTP</li>
  <li>HTTP request and response headers are uncompressed, and can become rather large. In addition, many header transmissions are redundant</li>
  <li>Data transmitted via HTTP is not always compressed.</li>
</ul>

<p>In short, the web is slower than it could be, and the problem will get worse as web sites continue to increase in size and complexity. To mitigate this problem, the Google Chromium team set to work and developed a new networking protocol for the web, which would reduce latency and speed up page loading. The result is SPDY, which Google have put to work on most of their services (<a href="https://twitter.com/">Twitter</a> and <a href="http://en.wikipedia.org/wiki/SPDY#Server_support_and_usage">a number of other sites</a> are also using it), allowing much faster loading speeds, provided the web browser being used supports SPDY.</p>

<p>The good news is that we&#39;ve been hard at work implementing SPDY support in Opera, so the big red O can also take advantage of these performance increases! Other advantages include better compatibility with all Google services (and other sites and applications that employ SPDY), and allowing developers to test their own SPDY based services with Opera.</p>

<p>We are proud to present an experimental labs release that includes our SPDY support. Please try it out, and let us know what you think.</p>

<h2>Further SPDY information</h2>

<p>SPDY does not completely replace HTTP and TCP — it augments and works on top of those protocols. HTTP&#39;s communication semantics and TCP&#39;s congestion control, for example, are still used, but SPDY provides many advantages, such as multiple streams per connection, and more efficient connection management and data formats.</p>

<p>SPDY doesn&#39;t force data compression, but SPDY user-agents MUST support gzip compression. Regardless of the <code>Accept-Encoding</code> header sent by the user-agent, the server may always send content encoded with gzip or deflate encoding.</p>

<p>Currently there are two versions of SPDY that are deployed and used in the web: <a href="http://www.chromium.org/spdy/spdy-protocol/spdy-protocol-draft2">spdy/2</a> and <a href="http://www.chromium.org/spdy/spdy-protocol/spdy-protocol-draft3">spdy/3</a>. All Google services (using secure connection) and Twitter can be used with both of them - it&#39;s for the client to negotiate which version is to be used. The negotiation is being done by the <a href="https://technotes.googlecode.com/git/nextprotoneg.html">NPN protocol</a> during the SSL handshake. Of course, the client can also negotiate to use plain HTTP over SSL if desired.</p>

<p>Google have prepared an <a href="http://code.google.com/p/mod-spdy/">SPDY module for Apache 2.2</a>, therefore anyone can deploy SPDY on their own Apache-based server and use it for creating web sites and applications.</p>

<h2>Download our SPDY build</h2>

<p>Please select a suitable build for your operating system:</p>

<ul>
  <li><a href="http://snapshot.opera.com/labs/spdy/Opera-Labs-SPDY-12.01-1495.i386.exe">Windows 32-bit</a> / <a href="http://snapshot.opera.com/labs/spdy/Opera-Labs-SPDY-12.01-1495.x64.exe">Windows 64-bit</a></li>
  <li><a href="http://snapshot.opera.com/labs/spdy/Opera-Labs-SPDY-12.01-1495.dmg">Mac</a></li>
  <li><a href="http://snapshot.opera.com/labs/spdy/Linux-FreeBSD/">Linux &amp; FreeBSD</a></li>
</ul>

<h3>Support notes</h3>

<p>Opera&#39;s SPDY implementation currently supports all features of the spdy/2 and spdy/3 protocols, except for:</p>

<ul>
  <li><a href="http://www.chromium.org/spdy/link-headers-and-server-hint">PUSH and HINT</a>: There is no deployment of PUSH and HINT usage on the web (as far as we know), and no way to use it with mod_spdy, so we decided not to implement it for the time being, until we have something to test it on, and more evidence of actual usage.</li>
  <li>The <code>Alternate-Protocol</code> header: Neither Chrome nor Firefox have implemented this in the way described in <a href="http://www.chromium.org/spdy/spdy-protocol/spdy-protocol-draft2">SPDY draft 2</a>, moreover <a href="http://www.chromium.org/spdy/spdy-protocol/spdy-protocol-draft3">SPDY draft 3</a> does not even mention that header anymore, so we decided to not support it.</li>
  <li>Persisting SETTINGS values: Servers may request that the client persists some of the connection settings sent to it in the SETTINGS frame. In such cases the client should remember such settings, and use them in all future connections (the user should also be able to clear them when desired.) This isn&#39;t a key feature of the SPDY protocol, and SPDY works perfectly fine without it, but we&#39;ll probably implement it in a future build.</li>
</ul>

<h2>How fast is it?</h2>

<p>Our rough performance tests ran on Windows with 50ms extra latency, and revealed that SPDY gave us a 38,67% performance boost (compared to normal HTTPS) in the network layer. That&#39;s great for a start!</p>

<p>Google also has some <a href="http://www.chromium.org/spdy/spdy-whitepaper/#TOC-Preliminary-results">SPDY performance test results</a> available.</p>

<h2>How do I know that Opera is using SPDY?</h2>

<p>Use of the SPDY protocol is completely transparent for users. There is no additional scheme like <code>spdy://</code>, and we don&#39;t have any indicator saying <q>ATTENTION, page loaded with SPDY!</q>. There is an SPDY indicator extension available for Firefox and Chrome, and this should also be available for Opera, soon after we&#39;ve created the necessary API to make this possible.</p>

<p>One way to recognise an SPDY site is by looking at the additional headers loaded with SPDY: Opera Dragonfly makes this easy. The spdy/2 additional headers are <code>method</code>, <code>scheme</code>, <code>url</code> and <code>version</code>. For spdy/3, the additional headers are <code>:method</code>, <code>:scheme</code>, <code>:host</code>, <code>:path</code> and <code>:version</code>.</p>

<h2>Summary</h2>

<p>SPDY is a useful new protocol that has already demonstrated significant performance increases over using HTTP/HTTPS alone, and Opera is proud to unveil support for it. Please let us know what you think of our experimental SPDY build, by leaving comments on this article or filing bugs through our <a href="https://bugs.opera.com/wizard/">bug wizard</a>.</p>

<p>You can find much more detail about SPDY, including Google&#39;s own performance test results, at the <a href="http://www.chromium.org/spdy/spdy-whitepaper/">Chromium Team SPDY Whitepaper</a>.</p>
