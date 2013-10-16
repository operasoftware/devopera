Title: HTTP — an application-level protocol
----
Date: 2011-12-06 21:03:17
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

<p>In Bhutan, when people meet, they usually greet each other with “Is your body well?” In Japan they might bow, depending on the circumstances. In Oman, men often add give each other a kiss on the nose after shaking hands. In Cambodia and Thailand, they often join their hands as if praying. All of these are communication protocols, a simple sequence of codes that have meaning and prepare the two parties for a meaningful exchange.</p>

<p>On the Web, we have a very effective application protocol that prepares computers the world over for meaningful exchanges: <a href="https://en.wikipedia.org/wiki/HTTP">Hypertext Transfer Protocol</a>, or HTTP. HTTP is an application-level protocol on top of <a href="https://en.wikipedia.org/wiki/TCP/IP_model">TCP/IP</a>, a communication protocol. HTTP often seems to get forgotten about when teaching web design and development, which is a shame: understanding it will help you to define better user interactions, achieve better site performance and create effective tools for managing information on the Web. </p>

<p>This is the first of a series of articles that aims to teach HTTP basics, and how we can use it more effectively. In this article we will look at where the HTTP cog fits into the Internet machine.</p>

<h2 id="protocol">What is a communication protocol?</h2>

<p>Before looking at the specifics, let&#39;s consider a basic communication scenario. To be able to communicate, two parties (be they software, devices, people, etc.) need:</p>

<ul>
  <li>syntax (data format and coding)</li>
  <li>semantics (control information and error handling)</li>
  <li>timing (speed matching and sequencing)</li>
</ul>

<p>When two people meet, they engage using a communication protocol: for example, in Japan, a person will make a specific gesture with the body. One such gesture is a bow, which is the <strong>syntax</strong> used for the interaction. In Japanese customs, the gesture of the bow (among others) is associated with the <strong>semantics</strong> of greeting someone. Finally, when one person bows to another person, a sequence of events has been established between the two in a specific <strong>timing</strong>.</p>

<p><img src="http://dev.opera.com/articles/view/http-basic-introduction/protocole-communication.png" alt="Protocol of communications" /></p>

<p>An online communication protocol contains the same elements. The syntax will be the sequence of characters such as keywords we use for writing the protocols. The semantics is the meaning associated with each of these keywords and finally the timing is the order in which two or more entities exchange these keywords.</p>

<h2 id="tcpip">Where does HTTP fit into the machine?</h2>

<p>HTTP itself runs on top of other protocols. When connecting to a web site, for example at <code>www.example.org</code>, the user agent is using the TCP/IP suite of protocols. The <a href="http://en.wikipedia.org/wiki/TCP/IP_model">TCP/IP model</a> was designed in 1970 with <a href="http://tools.ietf.org/html/rfc1122">4 distinct layers</a>:</p>

<ol>
<li><strong>Link</strong> describes the access to physical media (e.g. using the network card)</li>
<li><strong>Internet</strong> describes the envelope and routing of data — how it is packaged (IP)</li>
<li><strong>Transport</strong> describes the way the data is delivered from the starting point to the final destination (TCP, UDP)</li>
<li><strong>Application</strong> describes the meaning or format of the transferred messages (HTTP)</li>
</ol>

<p>HTTP is an <strong>application protocol</strong> that sits above the communication protocol. This is important to keep in mind. Separating the model into independent layers helps to evolve parts of the platform without having to rewrite everything. For example, TCP, a transport protocol, could evolve without having to modify HTTP, the application protocol. In practice, the details become a little bit uglier when we are striving for high performance communication. For the first few HTTP articles we will focus on the separation of layers as defined in the TCP/IP model. HTTP has been defined to communicate information between two pieces of software via HTTP messages. The way we shape and design these messages has consequences on the client (the browser for example), the server (web site) and their intermediaries (the proxy).</p>

<h2 id="telnet">Let&#39;s reach a server</h2>

<p>Port 80 is the default port for connecting to a Web server.  We can try this ourselves using the shell. Open your terminal/command line and try opening a connection to <code>www.opera.com</code> on port 80 using the following command:</p>

<pre><code>telnet www.opera.com 80</code></pre>

<p>You should get an output like so:</p>

<pre><code>Trying 195.189.143.147...
Connected to front.opera.com.
Escape character is &#39;^]&#39;.
Connection closed by foreign host.
</code></pre>

<p>We can see that the terminal is trying to communicate with the server located at IP address <code>195.189.143.147</code>. If we don&#39;t do anything else the server will close the connection by itself. It is entirely possible to use a different port and a different communication protocol, but these are the most common.</p>

<h2 id="http">Let&#39;s speak a bit of HTTP</h2>

<p>Let&#39;s try again to communicate with the server. Enter the following message into your terminal/command line:</p>

<pre><code>telnet www.opera.com 80</code></pre>

<p>Once this is done and the communication is established, type the following HTTP message quickly (before the connection automatically closes), then press enter/return twice:</p>

<pre><code>GET / HTTP/1.1
Host: www.opera.com</code></pre>

<p>This message specifies:</p>

<ul>
  <li><code>GET</code>: That we wish to <code>GET</code> a representation of information.</li>
  <li><code>/</code>: That the information we want to get at is stored at the root of the site.</li>
  <li><code>HTTP/1.1</code>: We are speaking using <code>HTTP</code> version 1.1.</li>
  <li><code>Host:</code>: I&#39;m trying to reach a specific site.</li>
  <li><code>www.opera.com</code>: the name of the site is www.opera.com.</li>
</ul>

<p>Now it is time for the server to answer. You should see the terminal window fill up with content along these lines:</p>

<pre><code>HTTP/1.1 200 OK
Date: Wed, 23 Nov 2011 19:41:37 GMT
Server: Apache
Content-Type: text/html; charset=utf-8
Set-Cookie: language=none; path=/; domain=www.opera.com; expires=Thu, 25-Aug-2011 19:41:38 GMT
Set-Cookie: language=en; path=/; domain=.opera.com; expires=Sat, 20-Nov-2021 19:41:38 GMT
Vary: Accept-Encoding
Transfer-Encoding: chunked

&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
…</code></pre>

<p>Here the server is saying: &quot;I speak <code>HTTP</code> version 1.1. Your request was successful, so I have responded with the code <code>200</code>.&quot; The <code>OK</code> string is optional and meant for explaining what this code means to humans — in this case, everything is ok and our message has been accepted. A series of <code>HTTP headers</code> are then sent to describe what the message is, and how it should be understood. Finally, the contents of the page located at the root of the site is included, beginning with <code>&lt;!DOCTYPE html&gt;</code>. The list of HTTP verbs and codes will be explained in the next few articles.</p>

<p><img src="http://dev.opera.com/articles/view/http-basic-introduction/opera-http-intro-devopera-2.jpg" alt="HTTP request and response" /></p>

<h2 id="summary">Summary</h2>

<p>We just talked HTTP — it is as simple as that! We sent a message (exactly like writing a letter) and we received an answer because our message was understood. Next time we will explore in detail what some of these headers mean and what they can be used for.</p>

