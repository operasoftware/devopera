---
title: An Introduction to HTML5 Web Messaging
authors:
- tiffany-brown
intro: 'HTML5 web messaging provides a way for documents to share data without exposing the DOM to malicious cross-origin scripting. This article provides an introductory guide to using this new functionality, and some simple examples to get you started.'
license: cc-by-3.0
---
<ul>
<li><a href="#messageevent">Message events</a></li>
<li>
			<a href="#crossdoc">Cross-document messaging</a>
<ul>
<li><a href="#sendingcrossdoc">Sending a cross-document message</a></li>
<li><a href="#receivingcrossdoc">Receiving a cross-document message</a></li>
<li><a href="#whenisdocready">Detecting when the receiving document is ready</a></li>
</ul>
</li>
<li>
			<a href="#channel">Channel messaging</a>
<ul>
<li><a href="#messageports">The <code>MessageChannel</code> and <code>MessagePort</code> objects</a></li>
<li><a href="#sendingports">Sending ports and messages</a></li>
</ul>
</li>
<li><a href="#learnmore">Learn more</a></li>
</ul>

<h2>Introduction</h2>

<p>Web messaging is a way for documents in separate browsing contexts to share data without the DOM being exposed to malicious cross-origin scripting. Unlike other forms of cross-site communication (cross-domain XMLHttpRequest, or dynamic script insertion), web messaging never directly exposes the DOM.</p>

<p>Say for example you want to send data from your page to an ad contained in an <code>iframe</code>, which is hosted by a third-party server. If the parent document tries to read a variable within the <code>iframe</code> or vice-versa, browsers will throw a security exception. With web messaging we can get around this by passing that data across as a <code>message</code> event.</p>

<p>When we talk about web messaging, we're actually talking about two slightly different systems: <strong>cross-document messaging</strong> and <strong>channel messaging</strong>. Cross-document messaging is often referred to by its syntax as <code>window.postMessage()</code>, and channel messaging is also known as <code>MessageChannel</code>. Along with server-sent events and <a href="http://dev.opera.com/articles/tags/web%20sockets">web sockets</a>, cross-document and channel messaging are a valuable part of the HTML5 &#8216;suite&#8217; of communication interfaces.</p>

<p class="note">Web messaging is supported by Opera, Chrome, and Safari, though Safari &#8804; 5.1.2 <a href="https://bugs.webkit.org/show_bug.cgi?id=63141">contains a bug</a>. Internet Explorer 8+ partially supports cross-document messaging: it currently works with iframes, but not new windows. Internet Explorer 10, however, will support <code>MessageChannel</code>. Firefox currently supports cross-document messaging, but not <code>MessageChannel</code>.</p>

<h2 id="messageevent">Message events</h2>

<p>Before we get into the nitty-gritty of web messaging, let's take a look at the <code>message</code> event object. Cross-document messaging, channel messaging, server-sent events and web sockets all fire <code>message</code> events, so understanding it is helpful. Message events, defined by the <a href="http://dev.w3.org/html5/postmsg/#event-definitions"><code>MessageEvent</code> interface</a>,  contain five read-only attributes:</p>

<dl>
	<dt><code>data</code></dt>
		<dd>Contains an arbitrary string of data, sent by the originating script.</dd>
	<dt><code>origin</code></dt>
		<dd>A string containing the originating document's scheme, domain name, and port (for example: <em>https://domain.example:80</em>)</dd>
	<dt><code>lastEventId</code></dt>
		<dd>A string containing a unique identifier for the current <code>message</code> event.</dd>
	<dt><code>source</code></dt>
		<dd>A reference to the originating document's window. More accurately, it's a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#windowproxy"><code>WindowProxy</code> object</a>.</dd>
	<dt><code>ports</code></dt>
		<dd>An array containing any <a href="http://dev.w3.org/html5/postmsg/#messageport"><code>MessagePort</code></a> objects sent with the message.</dd>
</dl>

<p>In the case of cross-document messaging events and channel messaging, the value of <code>lastEventId</code> is always an empty string; <code>lastEventId</code> applies to server-sent events. If no ports are sent with the message, the value of the <code>ports</code> attribute will be an array whose length is zero.</p>

<p><code>MessageEvent</code> inherits from the DOM <a href="http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#interface-event"><code>Event</code> interface</a> and shares its properties. Message events however do not bubble, are not cancelable, and have no default action.</p>

<h2 id="crossdoc">Cross-document messaging</h2>

<p>Now we've looked at Message events, let's continue by getting to grips with cross-document messaging.</p>

<h3 id="sendingcrossdoc">Sending a cross-document message</h3>

<p>To send a cross-document message, we need to create a new <strong>browsing context</strong> &#8212; either by creating a new window or referencing an <code>iframe</code>. We can then send a message from it using the <code>postMessage()</code> method. For cross-document messaging, <code>postMessage()</code> requires two arguments.</p>

<ul>
<li><strong>message</strong>: The message to send.</li>
<li><strong>targetOrigin</strong>: The origin to which the message will be sent.</li>
</ul>

<p>An optional third argument, <strong>transfer</strong>, is used for <a href="#channel">channel messaging</a>, which we'll dicuss later in this article.</p>

<p>The <code>message</code> parameter is not limited to strings. Structured objects, data objects (such as <code>File</code> and <code>ArrayBuffer</code>), or arrays can also be sent as messages. Be aware, however, that Internet Explorer 8 and 9, and Firefox versions 3.6 and below only support strings.</p>

<p>The <code>targetOrigin</code> is the origin of the receiving document. Browsers will not send the message unless the origin of the receiving browsing context matches the one provided in <code>targetOrigin</code>. You can circumvent this restriction using the <code>*</code> wild card character. Doing so however can lead to information leakage, so it's best to set a specific target origin.</p>

<p>You can also limit message sending to the same origin by setting the <code>targetOrigin</code> argument to <code>/</code>, However at the time of publication, only Opera supports this.</p>

<p>In the example below, we will send a message from our parent document to a document contained within an <code>iframe</code>. Even though our documents share the same origin, for cross-browser compatibility we will set the value of <code>targetOrigin</code> to <code>http://dev.opera.com</code> instead of <code>/</code>. If our document lived on another domain, we could send a message using its origin as the target.</p>

<p class="note">Note that origins do not contain a trailing slash.</p>

<pre><code>var iframe = document.querySelector('iframe');
var button = document.querySelector('button');

var clickHandler = function(){
	// iframe.contentWindow refers to the iframe's window object.
	iframe.contentWindow.postMessage('The message to send.','http://dev.opera.com');
}

button.addEventListener('click',clickHandler,false);</code></pre>

<h3 id="receivingcrossdoc">Receiving a cross-document message</h3>

<p>Of course, sending an event is only half of the process. We also need to handle these events in the receiving document. As discussed above, each time <code>postMessage()</code> is called, a <a href="#messageevent"><code>message</code> event</a> is dispatched in the receiving document.</p>

<p>We can then listen for the <code>message</code> event as shown below:

<pre><code>var messageEventHandler = function(event){
	// check that the origin is one we want.
	if(event.origin == 'http://dev.opera.com'){
		alert(event.data);
	}
}
window.addEventListener('message', messageEventHandler,false);</code></pre>

<p>See a working example of sending and receiving messages in this <a href="crossdocmessaging.html">cross-document messaging demo</a>.</p>

<h3 id="whenisdocready">Detecting when the receiving document is ready</h3>

<p>In our above examples, <code>window.postMessage()</code> is being invoked inside an event handler that requires user interaction. For a simple demo, this is fine. A better way to handle this in the real world, however, is to ensure that scripts in the target browsing context have had time to set up listeners and that they are ready to receive our messages. To check that, we can send a <code>message</code> event to our parent document when the new document is loaded.</p>

<p>Let's at look some example code. In this example, we are going to open a new window. When the document in that window loads, it will post a <code>message</code> to the opening window. Let's also assume that our markup has a <code>button</code> element, which is how we will open the new window.</p>

<pre><code>var clickHandler, messageHandler, button;

button = document.querySelector('button');

clickHandler = function(){
	window.open('otherpage.html','newwin','width=500,height=500');
}

button.addEventListener('click',clickHandler,false);

messageHandler = function(event){
	if(event.origin == 'http://foo.example'){
		event.source.postMessage('This is the message.','http://foo.example');
	}
}

window.addEventListener('message',messageHandler, false);</code></pre>

<p>When our button is clicked, the <code>clickHandler</code> function will open a new window and our <code>messageHandler</code> function  will listen for the message from the opened window. Note that <code>event.source</code> is a <code>WindowProxy</code> object that represents our opened window.</p>

<p>In our opened window, we will listen for the <code>DOMContentLoaded</code> event — see below. When it is fired, it will use <code>window.postMessage()</code> to "notify" the opening document that it is ready to receive messages (<a href="webmessaging.tellopener.html">view a <code>window.postMessage()</code> notification demo</a>).</p>

<pre><code>var loadHandler = function(event){
	event.currentTarget.opener.postMessage('ready','http://foo.example');
}
window.addEventListener('DOMContentLoaded', loadHandler, false);</code></pre>

<h2 id="channel">Channel messaging</h2>

<p>Channel messaging provides a means of direct, two-way communication between browsing contexts. As with cross-document messaging the DOM is not directly exposed. Instead, at each end of our pipe is a <strong>port</strong>; the data sent from one port becomes input in the other (and vice-versa).</p>

<p>Channel messaging is particularly useful for communication across multiple origins. Consider the following scenario. We have a document at <em>http://socialsite.example</em> containing content from <em>http://games.example</em> embedded in one iframe, and content from <em>http://addressbook.example</em> in another.</p>

<p>Now let's say that we want to send a message from our address book site to our games site. We could use the social site as a proxy. That, however, means the address book gains the same level of trust as the social site. Our social site either has to trust every request, or filter them for us.</p>

<p>With channel messaging, however, <em>http://addressbook.example</em> and <em>http://games.example</em> can communicate directly.</p>

<h3 id="messageports">The <code>MessageChannel</code> and <code>MessagePort</code> Objects</h3>

<p>When we create a <code>MessageChannel</code> object, we're really creating two interrelated ports. One port stays open on our sending side. The other is forwarded to another browsing context.</p>

<p>Each port is a <a href="http://dev.w3.org/html5/postmsg/#messageport"><code>MessagePort</code></a> object with three available methods.</p>

<ul>
<li><code>postMessage()</code>: Posts a message through the channel.</li>
<li><code>start()</code>: Begins the dispatch of messages received on the port.</li>
<li><code>close()</code>: Closes and deactivates the port.</li>
</ul>

<p><code>MessagePort</code> objects also have an <code>onmessage</code> event attribute, which can be used to define an event handler function instead of adding an event listener.</p>

<h3 id="sendingports">Sending ports and messages</h3>

<p>Let's look at an example of communicating with channel messaging. We'll use a scenario similar to what's described above: a document containing two <code>iframe</code>s. We will send messages from one <code>iframe</code> to the other, using a <code>MessageChannel</code> object and ports.</p>

<p>All of the documents in the examples linked above have the same origin. However, the process is the same for cross-origin communication.</p>

<p>In our first <code>iframe</code>, we will do the following.</p>

<ul>
<li>Create a new <code>MessageChannel</code> object.</li>
<li>Transfer one <code>MessageChannel</code> port to our parent document where it will be forwarded to our other <code>iframe</code>.</li>
<li>Define an event listener for our remaining port to handle the message sent from our other <code>iframe</code></li>
<li>Open our port so that we can receive messages.</li>
</ul>

<p>We will also wrap everything in a function that will be invoked when the DOM is ready.</p>

<pre><code>var loadHandler = function(){
	var mc, portMessageHandler;

	mc = new MessageChannel();

	// Send a port to our parent document.
	window.parent.postMessage('documentAHasLoaded','http://foo.example',[mc.port2]);

	// Define our message event handler.
	portMessageHandler = function(portMsgEvent){
		alert( portMsgEvent.data );
	}

	// Set up our port event listener.
	mc.port1.addEventListener('message', portMessageHandler, false);

	// Open the port
	mc.port1.start();
}

window.addEventListener('DOMContentLoaded', loadHandler, false);</code></pre>

<p>Now in our parent document, we will listen for this incoming message and associated port. When it's received, we will post a message to our second <code>iframe</code>, and forward our port with that message.</p>

<pre><code>var loadHandler = function(){
	var iframes, messageHandler;

	iframes = window.frames;

	// Define our message handler.
	messageHandler = function(messageEvent){
		if( messageEvent.ports.length > 0 ){
			// transfer the port to iframe[1]
			iframes[1].postMessage('portopen','http://foo.example',messageEvent.ports);
		}
	}

	// Listen for the message from iframe[0]
	window.addEventListener('message',messageHandler,false);
}

window.addEventListener('DOMContentLoaded',loadHandler,false);</code></pre>

<p>Finally, in our second <code>iframe</code>, we can handle the message from our parent document, and post a message to the port. The message sent from this port will be handled by the <code>portMsgHandler</code> function in our first document.</p>

<pre><code>var loadHandler(){
	// Define our message handler function
	var messageHandler = function(messageEvent){

		// Our form submission handler
		var formHandler = function(){
			var msg = 'add &lt;foo@example.com&gt; to game circle.';
			messageEvent.ports[0].postMessage(msg);
		}
		document.forms[0].addEventListener('submit',formHandler,false);
	}
	window.addEventListener('message',messageHandler,false);
}

window.addEventListener('DOMContentLoaded',loadHandler,false);</code></pre>

<p>The channel messaging examples above were simplified a little for readability. In practice, you should always check whether <code>MessageChannel</code> is supported. It's also a good practice to check that your message event was sent by an origin you expect. We've done both in our <a href="channelmessaging.html" target="_blank">channel messaging demo</a>.</p>

<h2 id="learnmore">Learn More</h2>

<ul>
<li><a href="http://dev.w3.org/html5/postmsg/">HTML5 Web Messaging</a> specification from the World Wide Web Consortium</li>
<li><a href="http://www.slideshare.net/miketaylr/html5-web-messaging-7970364">HTML5 Web Messaging</a>: slides by Mike Taylor at Slideshare</li>
</ul>

<p class="note">"Message in a bottle" cover picture courtesy of <a href="http://www.flickr.com/photos/sergiodjt/3928105188/">Sergio Aguirre</a>.</p>
