---
title: WebSockets in Opera
authors:
- simon-pieters
tags:
- websockets
- testsuite
- coreblog
license: cc-by-3.0
---

<h3>Introduction</h3>

<p>Opera has just <a href="http://my.opera.com/desktopteam/blog/2010/10/11/websockets">released a public build</a> with support for WebSockets. WebSockets will be supported in the final release of Opera 10.70. <a href="http://en.wikipedia.org/wiki/WebSockets">WebSockets</a> provide a way to communicate between script in a Web page and the server in <a href="http://en.wikipedia.org/wiki/Duplex_(telecommunications)#Full-duplex">full-duplex</a> mode with low <a href="http://en.wikipedia.org/wiki/Latency_(engineering)#Packet-switched_networks">latency</a>.</p>

<p>Before people have tried to <a href="http://en.wikipedia.org/wiki/Comet_(programming)">fake bidirectional communication using XMLHttpRequest</a>, but this is slow since it needs to set up a new TCP connection for each message. WebSockets sets up one TCP connection and confirms that the server can speak WebSocket by doing a special handshake, after which the server and the client can send text messages over the connection at will, resulting in <a href="http://bloga.jp/ws/jq/wakachi/mecab/wakachi.html">faster communication</a>.</p>

<p>This enables applications and games that have multiple users interacting real-time (such as <a href="http://code.google.com/p/quake2-gwt-port/">Quake</a>) to run natively in the browser without plugins, with good performance.</p>

<h3>WebSocket versions</h3>

<p>Opera supports <a href="https://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-00">version -00</a> of the protocol (aka -76). This is the same as Chrome 6, Safari 5.0.2 and Firefox 4 beta. Older versions of Chrome and Safari supported an older version of the protocol which used a different handshake (version -75). The current version of the protocol (-02) has different framing, but the handshake is the same as in -00/-76. There has been discussion about changing the handshake, too, possibly to always use TLS with Next Protocol Negotiation. There have also been discussions about supporting multiplexing, chunking, compression, and sending binary data. This means that the protocol is likely to change in incompatible ways in the future. However, <a href="http://dev.w3.org/html5/websockets/">the WebSocket API</a> is unlikely to change.</p>

<h3>How to use WebSockets</h3>

<p>To connect to a WebSocket server, you use the <code>WebSocket</code> constructor like so:</p>

<pre>var ws = new WebSocket(&#39;ws://example.org:12345/demo&#39;);</pre>

<p>You can also request a specific subprotocol with a second parameter:</p>

<pre>var ws = new WebSocket(&#39;ws://example.org:12345/demo&#39;, &#39;my-chat-protocol&#39;);</pre>

<p>You can try to connect to any host and any port (except blocked ports), although the server needs to support WebSockets and expect a connection from the page that opens the connection for it to be established. The meaning of the subprotocol is server-specific.</p>

<p>If the connection is established, the WebSocket object receives an &#39;open&#39; event, at which point you can start to send and receive messages. You send a message using the <code>send()</code> method, and you handle incoming messages with an <code>onmessage</code> event listener:</p>

<pre>ws.onopen = function(e) {
  // the connection is now established
  // let&#39;s send a message
  this.send(&#39;Hello!&#39;);
}
ws.onmessage = function(e) {
  // got a message from the server
  alert(e.data);
}</pre>

<p>If the server refuses the connection, or if the connection closes for some reason, the WebSocket object gets a &#39;close&#39; event.</p>

<pre>ws.onclose = function(e) {
  alert(&#39;WebSocket closed :-(&#39;);
}</pre>

<p>You can close the connection with the <code>close()</code> method.</p>

<pre>ws.close();</pre>

<p>If the server sends frames that the browser doesn&#39;t understand (maybe because the server just supports a newer version of the protocol), then you get &#39;error&#39; events. If you get &#39;error&#39; events and no &#39;message&#39; events, you may want to close the connection and fall back to using something else.</p>

<p>If you want to check if the browser supports WebSockets, just do:</p>

<pre>if (&#39;WebSocket&#39; in window) {
  // WebSockets supported
} else {
  // WebSockets not supported
}</pre>

<h3>Opera&#39;s contributions</h3>

<p>When implementing WebSockets in Opera, we also developed a testsuite that covers both the protocol and the API, which tries to test all aspects of the specifications, including error handling and weird edge cases. With WebSockets we were pedantic about getting everything right, which also meant that we found a lot of bugs and inconsistencies in the specifications. The good thing is that we sent that feedback to the working group so the specifications could be fixed, and everyone is better off as a result.</p>

<p>The WebSocket specifications were very easy to test and implement. Having the requirements written as detailed algorithms makes it very easy to make sure that you get everything correct, and that leads to better interoperability between implementations, which is the whole point of having specifications.</p>

<p>You can check if your browser supports WebSockets and how well it supports WebSockets with <a href="http://testsuites.opera.com/websockets/">Opera&#39;s WebSockets testsuite</a>. You will need to install the testsuite to use it.</p>

<h3>Conclusion</h3>

<p>WebSockets is a promising technology that enables applications and games on the Web to support real-time multiuser communication with good performance. The API is really simple and is unlikely to change. However, the protocol is not stable yet. Happy WebSocketing! :up: </p>
