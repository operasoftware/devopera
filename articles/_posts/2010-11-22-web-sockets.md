---
title: Introducing Web Sockets
authors:
- bruce-lawson
- mike-taylor
intro: 'The beta release of Opera 11 debuts our support for Web Sockets. In this article we will explain the background to Web Sockets, show why it is a cool feature, and give you some simple usage examples to get you up to speed.'
license: cc-by-nc-sa-3.0
---
<h2>Introduction</h2>

<p>Opera 11 and above support Web Sockets, a feature once part of the HTML5 spec known as <a href="http://www.w3.org/TR/2008/WD-html5-20080610/comms.html#tcpconnection">TCPConnection</a>. Web Sockets today, however, are specified in two places: the <a href="http://www.w3.org/TR/websockets/">Web Sockets API</a> is maintained by HTML5 editor Ian Hickson, while the <a href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol">Web Socket protocol</a> is edited by Ian Fette. Web Sockets allow an application to push information back and forth between server and browser, rather than having to poll the server at set intervals or use <code>&lt;iframe&gt;</code> tricks — this allows web developers to cut down on unnecessary HTTP traffic, hacks and complexity.</p>

<p>In this article we will explain the background to Web Sockets, show why it is a cool feature, and give you some simple usage examples to get you up to speed.</p>

<h2>Web Sockets history</h2>

<p>Urban legend has it that Web Sockets were invented by Ian Hickson as a way to <a href="http://ln.hixie.ch/?start=1113762425">control his model train set from a browser</a>. Unfortunately, it's not true — Hickson says on the matter (personal communication):</p>

<blockquote>
<p>I think work on Web Sockets (TCPConnection at the time) predates my
thoughts of running my train layout using Web Sockets, but Web Sockets
definitely would make doing so much easier. The problem is the normal Web
app controlling a single system problem: there is one computer with a
serial port connection to the <a href="http://en.wikipedia.org/wiki/Märklin_Digital">Märklin Interface unit</a>, and one wants to be
able to write a Web page that communicates with that computer, sending
instructions and receiving updates, without having to poll, have multiple
connections, use &lt;script&gt; streams in &lt;iframe&gt;s, etc.</p>
</blockquote>

<h2>Why Web Sockets are cool</h2>

<p>The Web Sockets API allows you to open a connection to a server using the new <code>ws</code> protocol, which remains open for the life of that session. It's <dfn>full-duplex</dfn>, that is, it allows communication in both directions simultaneously. It also has much less overhead than repeatedly polling a server to see if anything has changed. Previously, such functionality was only available using plugin technologies such as Flash.</p>

<p>In <a href="http://www.websockets.org/quantum.html">tests run by Kaazing Corp</a>, who have been closely involved in the specification process, it was found that "HTML5 Web Sockets can provide a 500:1 or — depending on the size of the HTTP headers — even a 1000:1 reduction in unnecessary HTTP header traffic and 3:1 reduction in latency";.</p>

<p>In short: Web Sockets can make your applications faster, more efficient, and more scalable.</p>

<h2>How Web Sockets works</h2>

<p>Web Sockets comprises a JavaScript API, described below, and the protocol <code>ws:</code> — or <code>wss:</code> for encrypted transmission. Opera supports version -00 of the protocol (aka -76). This is the same as Chrome 6, Safari 5.0.2 and Firefox 4 beta. The protocol is standardised by the <a href="http://www.ietf.org/">IETF</a> and is liable to change; the API is unlikely to change however. This means that your application might stop working if it's talking to a server that uses a different version of the protocol, but with a relatively stable client-side API you probably won't have to change your client-side code.</p>

<h3>The Web Sockets API</h3>

<p>To connect to a Web Socket server, you use the <code>WebSocket</code> constructor like so:</p>

<pre><code>var ws = new WebSocket('ws://example.org:12345/demo');</code></pre>

<p>You can also request specific subprotocols with a second parameter:</p>

<pre><code>var ws = new WebSocket('ws://example.org:12345/demo', 'my-chat-protocol');</code></pre>

<p>If you require more than one subprotocol, you can pass them in as an array of strings (to be supported in a future version of Opera):</p>

<pre><code>var ws = new WebSocket('ws://example.org:12345/demo', ['chat-protocol-v2-with-bells-and-whistles', 'chat-protocol']);</code></pre>

<p>The server will choose the most compatible version, which can then be checked by reading the <code>ws.protocol</code> property.</p>

<p>You can try to connect to any host and any port except blocked ports, however the server needs to support Web Sockets and will expect a connection from the designated page that is expected to open the connection for it to be established. A subprotocol, if used, is an arbitrary string (composed of printable ASCII characters) that ensures that the client and server send messages that are mutually comprehensible. For example,  <a href="http://blog.caucho.com/?p=500">Caucho Technology writes</a> that subprotocols are useful <q>to make sure a Quake/2.0 [WebSocket] client won't get confused talking to a Quake/1.0 [WebSocket] server</q>.</p>

<p>If the connection is established, the <code>WebSocket</code> object receives an <code>open</code> event, at which point you can start to send and receive messages. In the context of Web Sockets, a message is simply a string of text, for example, a bit of JSON. You send a message using the <code>send()</code> method, and you handle incoming messages with an <code>onmessage</code> event listener:</p>

<pre><code>ws.onopen = function(e) {
	// the connection is now established
	// let's send a simple message
	this.send('{"username": "Bruce", "message": "Hello!"}');
}

ws.onmessage = function(e) {
	// got a message from the server
	var msg = JSON.parse(e.data);
	alert(msg.message);
}</code></pre>

<p>If the server refuses the connection, or if the connection closes for some reason, the <code>WebSocket</code> object receives a <code>close</code> event.</p>

<pre><code>ws.onclose = function(e) {
	alert('WebSocket closed :-(');
}</code></pre>

<p>You can close the connection with the <code>close()</code> method:</p>

<pre><code>ws.close();</code></pre>

<p>If the server sends frames that the browser doesn't understand (maybe because the server only supports a newer version of the protocol), then you will get <code>error</code> events. If you get <code>error</code> events but no <code>message</code> events, you may want to close the connection and fall back to using something else, such as, <code>XHR</code> long-polling or a Comet server.</p>

<p>Feature detection of Web Sockets is simple — just do the following:</p>

<pre><code>if ('WebSocket' in window) {
	// Web Sockets supported
} else {
	// Web Sockets not supported
}</code></pre>

<p>Or if you're already using <a href="http://www.modernizr.com/">Modernizr</a> in your application, detection is just as simple:</p>

<pre><code>if (Modernizr.websockets) {
	// Web Sockets supported
} else {
	// Web Sockets not supported
}</code></pre>

<h2>What about non-supporting browsers?</h2>

<p>The <a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills">HTML5 Cross browser Polyfills</a> wiki lists three scripts that you can use as shims to simulate Web Sockets for older, non-supporting browsers (note that we haven't tested all of them). The <a href="http://socket.io">Socket.IO</a> project is a particularly nice solution as it bundles a Node.js Web Socket server with a unified, abstracted API with automatic fallbacks to Flash sockets, AJAX long polling, AJAX multipart streaming, <code>&lt;iframe&gt;</code> streaming and JSONP for less-capable clients. Socket.IO is open-source and works with <a href="http://nodejs.org">Node.js</a>, with a few other compatible implementations for other server technologies.</p>

<h2>Demos</h2>

<p>The following applications take advantage of Web Sockets to provide (near) real-time multi-user interactions:</p>

<ul>
<li><a href="http://mrdoob.com/projects/multiuserpad/">Mr. Doob's Multiuser Sketchpad</a>: In this multi-user <code>&lt;canvas&gt;</code> drawing application, Web Sockets are used to to pass along the coordinates of the lines that other users draw back to each client as they happen.</li>
<li><a href="http://rumpetroll.com/">Rumpetroll</a>: As a tadpole, you can swim around and chat with other tadpoles. Web Sockets allow for the locations of tadpoles and messages to be passed along to each user.</li>
<li><a href="http://wordsquared.com/">wordsquared.com</a>: In this massively multiplayer online word game, Web Sockets are used to allow users to see everybody else's tiles as they are played.</li>
</ul>

<p>In addition to those demos, Ericsson Labs has a nice screencast demonstrating the benefits of Web Sockets over HTTP long-polling for real-time applications:</p>

<ul>
<li><a href="http://www.youtube.com/watch?v=Z897fkPn7Rw">WebSocket speed comparison (video)</a></li>
</ul>

<h3>Resources</h3>
<ul>
<li><a href="http://my.opera.com/core/blog/websockets">Web Sockets in Opera</a> by Simon Pieters</li>
<li><a href="http://testsuites.opera.com/websockets/">Web Sockets test suite</a></li>
<li><a href="http://dev.w3.org/html5/websockets/">Web Sockets spec</a></li>
<li><a href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol">Web Sockets protocol</a></li>
</ul>
