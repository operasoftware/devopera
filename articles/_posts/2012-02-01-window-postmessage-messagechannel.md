---
title: An Introduction to HTML5 Web Messaging
authors:
- tiffany-brown
intro: 'HTML5 web messaging provides a way for documents to share data without exposing the DOM to malicious cross-origin scripting. This article provides an introductory guide to using this new functionality, and some simple examples to get you started.'
tags:
- javascript
- communication
- html5
license: cc-by-3.0
---

- [Message events](#messageevent)
- [Cross-document messaging](#crossdoc)
	- [Sending a cross-document message](#sendingcrossdoc)
	- [Receiving a cross-document message](#receivingcrossdoc)
	- [Detecting when the receiving document is ready](#whenisdocready)
- [Channel messaging](#channel)
	- [The `MessageChannel` and `MessagePort` objects](#messageports)
	- [Sending ports and messages](#sendingports)
- [Learn more](#learnmore)

## Introduction

Web messaging is a way for documents in separate browsing contexts to share data without the DOM being exposed to malicious cross-origin scripting. Unlike other forms of cross-site communication (cross-domain XMLHttpRequest, or dynamic script insertion), web messaging never directly exposes the DOM.

Say for example you want to send data from your page to an ad contained in an `iframe`, which is hosted by a third-party server. If the parent document tries to read a variable within the `iframe` or vice-versa, browsers will throw a security exception. With web messaging we can get around this by passing that data across as a `message` event.

When we talk about web messaging, we’re actually talking about two slightly different systems: **cross-document messaging** and **channel messaging**. Cross-document messaging is often referred to by its syntax as `window.postMessage()`, and channel messaging is also known as `MessageChannel`. Along with server-sent events and [web sockets][1], cross-document and channel messaging are a valuable part of the HTML5 “suite” of communication interfaces.

[1]: https://dev.opera.com/articles/tags/web%20sockets

Web messaging is supported by Opera, Chrome, and Safari, though Safari ≤ 5.1.2 [contains a bug][2]. Internet Explorer 8+ partially supports cross-document messaging: it currently works with iframes, but not new windows. Internet Explorer 10, however, will support `MessageChannel`. Firefox currently supports cross-document messaging, but not `MessageChannel`.

[2]: https://bugs.webkit.org/show_bug.cgi?id=63141

## Message events {#messageevent}

Before we get into the nitty-gritty of web messaging, let’s take a look at the `message` event object. Cross-document messaging, channel messaging, server-sent events and web sockets all fire `message` events, so understanding it is helpful. Message events, defined by the [`MessageEvent` interface][3], contain five read-only attributes:

[3]: http://dev.w3.org/html5/postmsg/#event-definitions

- `data` Contains an arbitrary string of data, sent by the originating script.
- `origin` A string containing the originating document’s scheme, domain name, and port (for example: _https://domain.example:80_)
- `lastEventId` A string containing a unique identifier for the current `message` event.
- `source` A reference to the originating document’s window. More accurately, it’s a [`WindowProxy` object][4].
- `ports` An array containing any [`MessagePort`][5] objects sent with the message.

[4]: https://html.spec.whatwg.org/multipage/browsers.html#windowproxy
[5]: http://dev.w3.org/html5/postmsg/#messageport

In the case of cross-document messaging events and channel messaging, the value of `lastEventId` is always an empty string; `lastEventId` applies to server-sent events. If no ports are sent with the message, the value of the `ports` attribute will be an array whose length is zero.

`MessageEvent` inherits from the DOM [`Event` interface][6] and shares its properties. Message events however do not bubble, are not cancelable, and have no default action.

[6]: http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#interface-event

## Cross-document messaging {#crossdoc}

Now we’ve looked at Message events, let’s continue by getting to grips with cross-document messaging.

### Sending a cross-document message {#sendingcrossdoc}

To send a cross-document message, we need to create a new **browsing context** — either by creating a new window or referencing an `iframe`. We can then send a message from it using the `postMessage()` method. For cross-document messaging, `postMessage()` requires two arguments.

- **message**: The message to send.
- **targetOrigin**: The origin to which the message will be sent.

An optional third argument, **transfer**, is used for channel messaging, which we’ll dicuss later in this article.

The `message` parameter is not limited to strings. Structured objects, data objects (such as `File` and `ArrayBuffer`), or arrays can also be sent as messages. Be aware, however, that Internet Explorer 8 and 9, and Firefox versions 3.6 and below only support strings.

The `targetOrigin` is the origin of the receiving document. Browsers will not send the message unless the origin of the receiving browsing context matches the one provided in `targetOrigin`. You can circumvent this restriction using the `*` wild card character. Doing so however can lead to information leakage, so it’s best to set a specific target origin.

You can also limit message sending to the same origin by setting the `targetOrigin` argument to `/`, However at the time of publication, only Opera supports this.

In the example below, we will send a message from our parent document to a document contained within an `iframe`. Even though our documents share the same origin, for cross-browser compatibility we will set the value of `targetOrigin` to `https://dev.opera.com` instead of `/`. If our document lived on another domain, we could send a message using its origin as the target.

Note that origins do not contain a trailing slash.

	var iframe = document.querySelector('iframe');
	var button = document.querySelector('button');

	var clickHandler = function(){
		// iframe.contentWindow refers to the iframe’s window object.
		iframe.contentWindow.postMessage('The message to send.','https://dev.opera.com');
	}

	button.addEventListener('click',clickHandler,false);

### Receiving a cross-document message {#receivingcrossdoc}

Of course, sending an event is only half of the process. We also need to handle these events in the receiving document. As discussed above, each time `postMessage()` is called, a `message` event is dispatched in the receiving document.

We can then listen for the `message` event as shown below:

	var messageEventHandler = function(event){
		// check that the origin is one we want.
		if(event.origin == 'https://dev.opera.com'){
			alert(event.data);
		}
	}
	window.addEventListener('message', messageEventHandler,false);

See a working example of sending and receiving messages in this [cross-document messaging demo][7].

[7]: {{ page.id }}/crossdocmessaging.html

### Detecting when the receiving document is ready {#whenisdocready}

In our above examples, `window.postMessage()` is being invoked inside an event handler that requires user interaction. For a simple demo, this is fine. A better way to handle this in the real world, however, is to ensure that scripts in the target browsing context have had time to set up listeners and that they are ready to receive our messages. To check that, we can send a `message` event to our parent document when the new document is loaded.

Let’s at look some example code. In this example, we are going to open a new window. When the document in that window loads, it will post a `message` to the opening window. Let’s also assume that our markup has a `button` element, which is how we will open the new window.

	var clickHandler, messageHandler, button;

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

	window.addEventListener('message',messageHandler, false);

When our button is clicked, the `clickHandler` function will open a new window and our `messageHandler` function will listen for the message from the opened window. Note that `event.source` is a `WindowProxy` object that represents our opened window.

In our opened window, we will listen for the `DOMContentLoaded` event — see below. When it is fired, it will use `window.postMessage()` to “notify” the opening document that it is ready to receive messages ([view a `window.postMessage()` notification demo][8]).

[8]: {{ page.id }}/webmessaging-tellopener.html

	var loadHandler = function(event){
		event.currentTarget.opener.postMessage('ready','http://foo.example');
	}
	window.addEventListener('DOMContentLoaded', loadHandler, false);

## Channel messaging {#channel}

Channel messaging provides a means of direct, two-way communication between browsing contexts. As with cross-document messaging the DOM is not directly exposed. Instead, at each end of our pipe is a **port**; the data sent from one port becomes input in the other (and vice-versa).

Channel messaging is particularly useful for communication across multiple origins. Consider the following scenario. We have a document at _http://socialsite.example_ containing content from _http://games.example_ embedded in one iframe, and content from _http://addressbook.example_ in another.

Now let’s say that we want to send a message from our address book site to our games site. We could use the social site as a proxy. That, however, means the address book gains the same level of trust as the social site. Our social site either has to trust every request, or filter them for us.

With channel messaging, however, _http://addressbook.example_ and _http://games.example_ can communicate directly.

### The `MessageChannel` and `MessagePort` Objects {#messageports}

When we create a `MessageChannel` object, we’re really creating two interrelated ports. One port stays open on our sending side. The other is forwarded to another browsing context.

Each port is a [`MessagePort`][9] object with three available methods.

[9]: http://dev.w3.org/html5/postmsg/#messageport

- `postMessage()`: Posts a message through the channel.
- `start()`: Begins the dispatch of messages received on the port.
- `close()`: Closes and deactivates the port.

`MessagePort` objects also have an `onmessage` event attribute, which can be used to define an event handler function instead of adding an event listener.

### Sending ports and messages {#sendingports}

Let’s look at an example of communicating with channel messaging. We’ll use a scenario similar to what’s described above: a document containing two `iframe`s. We will send messages from one `iframe` to the other, using a `MessageChannel` object and ports.

All of the documents in the examples linked above have the same origin. However, the process is the same for cross-origin communication.

In our first `iframe`, we will do the following.

- Create a new `MessageChannel` object.
- Transfer one `MessageChannel` port to our parent document where it will be forwarded to our other `iframe`.
- Define an event listener for our remaining port to handle the message sent from our other `iframe`
- Open our port so that we can receive messages.

We will also wrap everything in a function that will be invoked when the DOM is ready.

	var loadHandler = function(){
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

	window.addEventListener('DOMContentLoaded', loadHandler, false);

Now in our parent document, we will listen for this incoming message and associated port. When it’s received, we will post a message to our second `iframe`, and forward our port with that message.

	var loadHandler = function(){
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

	window.addEventListener('DOMContentLoaded',loadHandler,false);

Finally, in our second `iframe`, we can handle the message from our parent document, and post a message to the port. The message sent from this port will be handled by the `portMsgHandler` function in our first document.

	var loadHandler(){
		// Define our message handler function
		var messageHandler = function(messageEvent){

			// Our form submission handler
			var formHandler = function(){
				var msg = 'add <foo@example.com> to game circle.';
				messageEvent.ports[0].postMessage(msg);
			}
			document.forms[0].addEventListener('submit',formHandler,false);
		}
		window.addEventListener('message',messageHandler,false);
	}

	window.addEventListener('DOMContentLoaded',loadHandler,false);

The channel messaging examples above were simplified a little for readability. In practice, you should always check whether `MessageChannel` is supported. It’s also a good practice to check that your message event was sent by an origin you expect. We’ve done both in our [channel messaging demo][10].

[10]: {{ page.id }}/channelmessaging.html

## Learn More {#learnmore}

- [HTML5 Web Messaging][11] specification from the World Wide Web Consortium
- [HTML5 Web Messaging][12]: slides by Mike Taylor at Slideshare

[11]: http://dev.w3.org/html5/postmsg/
[12]: http://www.slideshare.net/miketaylr/html5-web-messaging-7970364

“Message in a bottle” cover picture courtesy of [Sergio Aguirre][13].

[13]: http://www.flickr.com/photos/sergiodjt/3928105188/
