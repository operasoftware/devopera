---
title: Event Streaming to Web Browsers
authors:
- arve-bersvendsen
intro: 'One cool feature we added to Opera 9 is Server-Sent Events from the WHATWG Web Applications 1.0 specification. Using SSE you can push DOM events continously from your web server to the visitor’s browser. This creates a lot of exciting opportunities for web application authors.'
tags:
- server-sent-events
- opera-9
- labs
license: os-asa
layout: post
---

## This article is obsolete

This article is out of date, and we will provide an updated source of information in due course. One major difference to be aware of is that the content-type is listed below as `application/x-dom-event-stream`, whereas the newest [server-sent events spec][1] lists it as `text/event-stream`. The examples below should work ok if you make this change in the code.

[1]: http://www.w3.org/TR/2009/WD-eventsource-20091029/#text-event-stream

One cool feature we added to Opera 9 is [Server-Sent Events][2] from the [WHATWG][3] Web Applications 1.0 specification. Using SSE you can push DOM events continously from your web server to the visitor's browser. This creates a lot of exciting opportunities for web application authors.

[2]: http://whatwg.org/specs/web-apps/current-work/#scs-server-sent
[3]: http://whatwg.org/

Traditionally, when building an Ajax application, the browser continually polls the server, sending requests to the server, asking to get data back, making new HTTP requests for every single poll, putting more strain on the server than needed.

The event streaming approach instead opens a persistent connection to the server, sending data to the client when new information is available, eliminating the need for continuous polling. This method for doing remoting offers a tremendous advantage, since the server no longer has to handle the overhead associated with clients asking for new data. Instead, the server simply sends back data every connected client when appropriate, thus reducing the load on the server, with the added advantage of offering instant feedback to the user.

### Opera Web Chat

<figure>
	<img src="/articles/event-streaming-to-web-browsers/screenshot.jpg" alt="Opera Web Chat Screenshot">
</figure>

To provide you with a starting point on how to build your own event streaming application, we have built [Opera Web Chat][5]. This is a web based chatroom offering some of the features from the built in to the Opera IRC client. Currently the chat only offers one single chatroom. (A screenshot is available [here][4].)

[5]: http://oxzone.opera.com/webchat/

Keep in mind that it is an experimental service, which means it may not always be available for use.

### How to use Server-Sent Events

To use Server-Sent Events in a web application, add an `<event-source>` element to the document, with a src attribute pointing to a event source URL. This URL should provide a persistent HTTP connection that sends a data stream containing the events. The connection must use the content type `application/x-dom-event-stream`.

It is possible to send events with any name, and specify the properties of the event object. Opera 9.01 only supports the `data` property of the event, so this is what we are going to use in these examples.

The server side event source writes the events whenever they occur, and sends them over HTTP to the client. This is a basic example of event data. This is more thoroughly explained in the specification.

	Event: server-time
	data: [time on the server]
	Event: the-answer
	data: 42

This will send two events to the browser, and it's possible to catch them as DOM events. The following JavaScript example listens for the `server-time` event, and alerts the content.

	document.getElementsByTagName('event-source')[0]
		.addEventListener('server-time', eventHandler, false);
	function eventHandler(event)
	{
		// Alert time sent by the server
		alert(event.data);
	}

This is a very simple Python CGI example which sends a new event every 3 seconds. Every event is named `server-time`, and sends an event with the data property set to the current time of the server in seconds.

Keep in mind that when a CGI script outputs data, there is no guarantee that it is sent immediately. There are often caching mechanisms and so on in place. For this reason it may be necessary to explicitly flush the output.

Here is the example code written in python.

	#!/usr/bin/python
	import sys
	import time
	print "Content-Type: application/x-dom-event-stream\n\n"
	while True:
		print "Event: server-time"
		print "data: %f\n" % (time.time(),)
		sys.stdout.flush()
		time.sleep(3)

The same example written in PHP:

	<?php
		header("Content-Type: application/x-dom-event-stream");
		while(true) {
			echo "Event: server-time\n";
			$time = time();
			echo "data: $time\n";
			echo "\n";
			flush();
			sleep(3);
		}
	?>

### Opportunities

In addition to the chat application we made, there are lots of different applications that can be made with Server-Sent Events. For instance games or instant messaging clients, such as MSN Messenger, Jabber or AIM. You could also build stock and news tickers, status and log file monitors, or anyhing _you_ can come up with.

What will you build? You can [join the discussion][6] on Opera Web Applications blog.

[6]: http://my.opera.com/WebApplications/blog/show.dml/438711#comments
