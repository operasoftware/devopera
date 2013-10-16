Title: Event Streaming to Web Browsers
----
Date: 2011-11-24 11:02:53
----
Lang: en
----
Author: 
----
License: Opera Software ASA
----
License_url: http://www.opera.com
----
Text:

<div class="note">
  <h2>This article is obsolete</h2>
  <p>This article is out of date, and we will provide an updated source of information in due course. One major difference to be aware of is that the content-type is listed below as <code>application/x-dom-event-stream</code>, whereas the newest <a href="http://www.w3.org/TR/2009/WD-eventsource-20091029/#text-event-stream">server-sent events spec</a> lists it as <code>text/event-stream</code>. The examples below should work ok if you make this change in the code.</p>
</div>

<div id="content">
<p>
 One cool feature we added to Opera 9 is
 <a href="http://whatwg.org/specs/web-apps/current-work/#scs-server-sent">
  Server-Sent Events
 </a>
 from the
 <a href="http://whatwg.org/">
  WHATWG
 </a>
 Web Applications 1.0 specification. Using SSE you can push DOM events continously from your web server to the visitor&#39;s browser. This creates a lot of exciting opportunities for web application authors.
</p>
<p>
 Traditionally, when building an Ajax application, the browser continually polls the server, sending requests to the server, asking to get data back, making new HTTP requests for every single poll, putting more strain on the server than needed.
</p>
<p>
 The event streaming approach instead opens a persistent connection to the server, sending data to the client when new information is available, eliminating the need for continuous polling. This method for doing remoting offers a tremendous advantage, since the server no longer has to handle the overhead associated with clients asking for new data. Instead, the server simply sends back data every connected client when appropriate, thus reducing the load on the server, with the added advantage of offering instant feedback to the user.
</p>
<h3>
 Opera Web Chat
</h3>
<p>
 <a href="http://oxzone.opera.com/resource/webchat_screenshot.jpg">
  <img src="http://oxzone.opera.com/resource/webchat_screenshot.jpg" alt="Opera Web Chat Screenshot" class="left" style="width:33%;" />
 </a>
 To provide you with a starting point on how to build your own event streaming application, we have built
 <a href="http://oxzone.opera.com/webchat/">
  Opera Web Chat
 </a>
 . This is a web based chatroom offering some of the features from the built in to the Opera IRC client. Currently the chat only offers one single chatroom. (A screenshot is available
 <a href="http://oxzone.opera.com/resource/webchat_screenshot.jpg">
  here
 </a>
 .)
</p>
<p>
 Keep in mind that it is an experimental service, which means it may not always be available for use.
</p>
<h3>
 How to use Server-Sent Events
</h3>
<p>
 To use Server-Sent Events in a web application, add an
 <code>
  &lt;event-source&gt;
 </code>
 element to the document, with a src attribute pointing to a event source URL. This URL should provide a persistent HTTP connection that sends a data stream containing the events. The connection must use the content type
 <code>
  application/x-dom-event-stream
 </code>
 .
</p>
<p>
 It is possible to send events with any name, and specify the properties of the event object. Opera 9.01 only supports the
 <code>
  data
 </code>
 property of the event, so this is what we are going to use in these examples.
</p>
<p>
 The server side event source writes the events whenever they occur, and sends them over HTTP to the client. This is a basic example of event data. This is more thoroughly explained in the specification.
</p>
<pre>
 Event: server-time
data: [time on the server]
Event: the-answer
data: 42
</pre>
<p>
 This will send two events to the browser, and it&#39;s possible to catch them as DOM events. The following JavaScript example listens for the &quot;server-time&quot; event, and alerts the content.
</p>
<pre>
 document.getElementsByTagName(&quot;event-source&quot;)[0]
        .addEventListener(&quot;server-time&quot;, eventHandler, false);
function eventHandler(event)
{
    // Alert time sent by the server
    alert(event.data); 
}
</pre>
<p>
 This is a very simple Python CGI example which sends a new event every 3 seconds. Every event is named &quot;server-time&quot;, and sends an event with the data property set to the current time of the server in seconds.
</p>
<p>
 Keep in mind that when a CGI script outputs data, there is no guarantee that it is sent immediately. There are often caching mechanisms and so on in place. For this reason it may be necessary to explicitly flush the output.
</p>
<p>
 Here is the example code written in python.
</p>
<pre>
 #!/usr/bin/python
import sys
import time
print &quot;Content-Type: application/x-dom-event-stream\n\n&quot;
while True:
    print &quot;Event: server-time&quot;
    print &quot;data: %f\n&quot; % (time.time(),)
    sys.stdout.flush()
    time.sleep(3)
</pre>
<p>
 The same example written in PHP:
</p>
<pre>
 &lt;?php
header(&quot;Content-Type: application/x-dom-event-stream&quot;);
while(true) {
    echo &quot;Event: server-time\n&quot;;
    $time = time();
    echo &quot;data: $time\n&quot;;
    echo &quot;\n&quot;;
    flush();
    sleep(3);
}
?&gt;
</pre>
<h3>
 Opportunities
</h3>
<p>
 In addition to the chat application we made, there are lots of different applications that can be made with Server-Sent Events. For instance games or instant messaging clients, such as MSN Messenger, Jabber or AIM. You could also build stock and news tickers, status and log file monitors, or anyhing
 <em>
  you
 </em>
 can come up with.
</p>
<p>
 What will you build?
</p>
<p>
 You can
 <a href="http://my.opera.com/WebApplications/blog/show.dml/438711#comments">
  join the discussion
 </a>
 on Opera Web Applications blog.
</p>
</div>

