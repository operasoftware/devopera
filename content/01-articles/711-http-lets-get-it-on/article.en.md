Title: HTTP: Let's GET it on!
----
Date: 2012-06-14 16:11:12
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

<h2>Introduction</h2>

<p>A few weeks ago, we learnt that HTTP is an <a href="http://dev.opera.com/articles/view/http-basic-introduction/">application-level protocol</a>. Now it is time to explore how we can use this protocol to communicate between the client and the server.</p>

<h2>Getting things on the Web</h2>

<p>Remember that the HTTP client (browser) is always initiating the request to the HTTP server. The HTTP protocol gives the client a few tools to express its intention to the server: The URI, the HTTP methods and the HTTP headers.</p>

<h3>Give a name to things</h3>

<p>URIs are one of the cornerstones of the Web. They solved an important issue that existed on the Internet at large:  how to <strong>uniquely identify</strong> something on the network.</p>

<p>Now, if you ask someone to grab an object and bring it to you, there are not many solutions. The words you use will start to identify the object you need.</p>

<ul>
  <li>You could ask a friend: &quot;Bring me the book&quot;</li>
  <li>The friend might reply: &quot;OK, but which one?&quot;. </li>
  <li>You: &quot;The book in the other room.&quot;</li>
  <li>Friend (goes to the other room): &quot;Huh? Which one?&quot;</li>
  <li>You (slightly annoyed): &quot;The green one!&quot;</li>
  <li>Friend: &quot;Hey… calm down. There are two green books here!&quot;</li>
</ul>

<p>You stand up and finally get the book yourself. But all of that could have been a lot simpler. How do we uniquely identify these things we might want to access later on? Memory is one possibility. How do we give instructions to someone to get the right object? Let&#39;s create a system for it:</p>

<ol>
  <li>Cut pieces of papers or use yellow sticky notes. </li>
  <li>In the room around you or on your table, put the empty notes near or on top of the objects (for example books) you need to access later on.</li>
  <li>On each note, put a unique ID. </li>
  <li>Repeat the process in another room or on another table.</li>
</ol>

<p>Remember that it is not only for your own usage but it will <strong>enable interactions</strong> (and obviously avoid your frustrations). I just did it for me. I have written on the pieces of papers, the following identifiers attached to each object.</p>

<pre><code>myRoom.org/table/book/001
myRoom.org/shelf/book/002
otherRoom.org/cup/001
otherRoom.org/flower/001
otherRoom.org/book/001</code></pre>

<p>I think by now you&#39;ve got it. We now have a system of labels for identifying precisely things in a space. On the Web, we are dealing with an information space and the labels identifying this information are URIs.</p>

<h3>Access the identified things</h3>

<p><a href="http://dev.opera.com/articles/view/http-basic-introduction/">In the last article</a>, we learnt to craft an HTTP request on the command line. We used a very minimal construct with the HTTP method <code>GET</code> and one HTTP header: <code>Host</code>.</p>

<pre><code>GET / HTTP/1.1
Host: www.opera.com</code></pre>

<p>The full list of current <a href="http://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics#section-6">HTTP methods</a> is: <code>OPTIONS</code>, <code>GET</code>, <code>HEAD</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>, <code>TRACE</code>, <code>CONNECT</code>. Each of them have different roles that we will explore in further articles. <code>GET</code> is by far the most used one. Each time, we enter an HTTP URI in the browser address bar, we send a <code>GET</code> request to a server.</p>

<p>On the Web, a lot more information (HTTP headers) is sent by the client to the server to help with negotiating the HTTP request. The server then will be able to adjust its answer according to these headers. There is a very practical tool in <a href="http://my.opera.com/dragonfly/blog/">Opera Dragonfly</a> to create custom HTTP requests and inspect the server HTTP response: you can find it under the Network section, in the Make Request tab.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/711-http-lets-get-it-on/opera-dragonfly-network.png" alt="Opera Dragonfly Network Tab" /></p>

<p>In the Make Request tab, there are three areas:</p>

<ul>
  <li><strong>URL</strong>: The resource identifier (or Web address)</li>
  <li><strong>Request body</strong>: What the client will send to the server. (The button &quot;Send request&quot; will actually send the request across the network to the server.)</li>
  <li><strong>Response</strong>: The response of the server once the request has been made.</li>
</ul>

<h3>Let&#39;s customize the HTTP request</h3>

<ol>
  <li>Copy <code>http://www.opera.com/</code> in the URL section</li>
  <li><p>Copy and paste the following HTTP request into the &quot;Request body&quot; section of the network tab. We added the <code>Accept-Language</code> header to the previous minimal HTTP request.</p>

<pre><code>GET / HTTP/1.1
Host: www.opera.com
Accept-Language: en</code></pre>
</li>
<li>Then hit the &quot;Send request&quot; button.</li>
</ol>

<p>The Opera HTTP server will reply with a few HTTP response headers and the markup for the document. You may have to scroll in the window: the response can be long. Notice that the document is in English — not only in terms of written language, but also explicitly specified in  the <code>html</code> element&#39;s <code>lang</code> attribute:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;</code></pre>

<p>Let&#39;s try with French:</p>

<pre><code>GET / HTTP/1.1
Host: www.opera.com
Accept-Language: fr</code></pre>

<p>This time server responds with French specified in the markup and the actual text of the document.</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;fr&quot;&gt;</code></pre>

<p>We used exactly the same URI — <code>http://www.opera.com/</code> — and we received different answers only because we changed the HTTP <code>Accept-language</code>. Note that the server replied with plenty of headers — giving us in return information on the resource status such as its type, etc. That will allow the client to adjust the processing of the document. You can try it with different languages: <code>ja</code> for Japanese, <code>de</code> for German, etc.</p>

<p>What happens if we request a language that doesn&#39;t exist on the server? Just try it: for example <code>zh</code> for Chinese:</p>

<pre><code>GET / HTTP/1.1
Host: www.opera.com
Accept-Language: zh</code></pre>

<p>You got the English version of the Web site — puzzled? This is part of the design choice of the Web site. The server HTTP response could have been designed in a different way: it could have simply replied &quot;no, we do not have a Chinese version for this address&quot; or &quot;There is no Chinese version for this address, here are the languages we do have available&quot; (with a list of links to specific versions in different languages). But the Opera UX department decided that when the request language was not known, the server would send by default the English version. It is really a question of choice: there is no formal standard here.</p>

<p>It&#39;s why I often teach a bit of HTTP to UX people and front-end developers. HTTP is an application protocol for managing the interactions between a client and a server. As such, understanding how it works will help with designing meaningful interactions when creating a Web site for both humans and machines (bots, API clients, etc).</p>

<h2>What you need to remember</h2>

<ul>
<li><strong>URI</strong>: A system for identifying pieces of information on the network.</li>
<li><strong>HTTP Methods</strong>: The protocol currently contains 8 methods for requesting a URI: <code>OPTIONS</code>, <code>GET</code>, <code>HEAD</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>, <code>TRACE</code>, <code>CONNECT</code>. In this article we focused on the most commonly used one: <code>GET</code></li>
<li><strong>HTTP Headers</strong>: The headers are additional data sent by the user agent to give more context about the transaction going on between the client and the server. Some of them will help the server reply in the most appropriate way.</li>
</ul>

<p>Cover image from the <a href="http://www.flickr.com/photos/boston_public_library/2349875751/">Boston Public Library</a></p>a href=
