Title: HTTP: Response Codes
----
Date: 2012-09-11 11:57:36
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

<p><a href="http://dev.opera.com/articles/view/http-lets-get-it-on/">In the last article</a>, we concluded by saying that HTTP manages the interactions between a client and a server, and explained the notion of HTTP headers. There will be a lot more to say about these later on in this article series: they influence interactions and performance. In the meantime, let&#39;s look at an equally important and related aspect of these interactions: HTTP Response codes.</p>

<h2 id="stroll">A stroll through the streets</h2>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/783-http-response-codes/map.jpg" style="display:block;margin:1em auto;" alt="" />One morning, I took a walk to go to a coffee shop and read a book. To my surprise, when I arrived there, the shop was closed. A message on the door said that during this week a festival was being held, so the coffee would be served <strong>temporary</strong> in their food truck — &quot;The <code>307</code>&quot; — near the river. I went there and enjoyed the coffee.</p>

<p>Next I decided &quot;This is a good day for browsing in a bookshop — I&#39;ll head to my favourite bookshop in town.&quot; When I got there, I found that the shop was unfortunately closed, but all was not lost: there was a message on the door saying that the bookshop needed more space and they had <strong>permanently</strong> moved to a new building at &quot;<code>301</code>, Berners-Lee Street&quot;. &quot;Cool,&quot; I said to myself, &quot;that&#39;s not very far away — I&#39;ll go and visit them.&quot; When I arrived there, the employees recognised me, greeting me in <strong><code>200</code> ways. OK</strong>, I&#39;m exaggerating, but you get the idea!</p>

<p>On my way back home, at number &quot;<code>410</code> Berners-Lee Street&quot;, there was a shop with dust gathering on the window. A notice from the owner said that they applied for bankruptcy and had to close, for ever <strong>gone</strong>. I was then even more surprised when I arrived at the end of the street, number &quot;<code>500</code>, Berners-Lee&quot;: a full 4 storey building had completely collapsed. I&#39;m not sure what happened there!</p>

<p>Anyway, it was very good day overall, and I thought I&#39;d round it off by writing about HTTP codes sent by the server in response to the client making requests.</p>

<h2 id="syntax-status">HTTP Response Syntax and Status Line</h2>

<p><a href="http://dev.opera.com/articles/view/http-lets-get-it-on/">In the last article</a>, we touched upon the first line of the response syntax sent by clients (including the methods). This time we will focus mainly on the first line of the response message coming from the server, and what the different codes that can appear in that line mean. Note that these two types of message — request and response — are very similar. As stated in the <a href="http://tools.ietf.org/html/draft-ietf-httpbis-p1-messaging#section-3.1">HTTP/1.1 revision</a> (still at work but almost finished):</p>

<blockquote cite="http://tools.ietf.org/html/draft-ietf-httpbis-p1-messaging#section-3.1">
<p>An HTTP message can either be a request from client to server or a
response from server to client.  Syntactically, the two types of
message differ only in the start-line, which is either a request-line
(for requests) or a status-line (for responses), and in the algorithm
for determining the length of the message body (Section 3.3).</p>
</blockquote>

<p>The first line in the response is called the <a href="http://tools.ietf.org/html/draft-ietf-httpbis-p1-messaging#section-3.1.2">status-line</a>. The line starts with the HTTP protocol version, a space, a 3-digit integer code, a space and finally an explanation sentence. Here is an example:</p>

<pre><code>HTTP/1.1 200 OK</code></pre>

<p>Note that the short explanation sentence is completely optional and should be ignored by clients; a script should not rely on it for processing purposes. Let&#39;s go through some of the most common status codes and look at their intended meaning.</p>

<h2 id="server-response">Server and HTTP Response Codes</h2>

<h3 id="ok">200, ok — everything is fine!</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/783-http-response-codes/coffee.png" style="float:right;margin-left:1em;" alt="" />Each time someone wants to visit Opera&#39;s home page, a client requests a <code>http://www.opera.com/</code> by sending this kind of message:</p>

<pre><code>GET / HTTP/1.1
Host: www.opera.com
Accept-Language: fr
User-Agent: BrowseAndDream/1.0</code></pre>

<p>The server will analyse the message from the client and give an answer according to what it has understood from the URI and the headers. As said in previous articles, it&#39;s all about managing an interaction to the best ability of the two parties: the client and the server.</p>

<p>If understood, the server will respond to the request with a message starting with <code>200 OK</code> — everything is fine, the request has been successful. This message will contain a few HTTP Response headers and the page&#39;s content, which might vary depending on the client HTTP request headers; there is no absolute answer. As with any negotiation, this is a dialog to find the best compromise for both parties. Here is an example response to our above request:</p>

<pre><code>HTTP/1.1 200 OK
Date: Fri, 24 Aug 2012, 13:56:44 GMT</code></pre>

<h3 id="temporary">307, moved temporarily elsewhere</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/783-http-response-codes/food_truck.png" style="float:right;margin-left:1em;" alt="" />The server could respond to the client with a message stating that the content has been temporary moved to a new location. This is useful when you want to redirect a client to a specific page for a little while. For example, imagine a Web address giving the weather forecast for Taipei, and there has lately a very strong typhoon. It would be a good idea to inform users specifically about the typhoon, until it has passed. The request might look like this:</p>

<pre><code>GET /taiwan/weather/today HTTP/1.1
Host: meteo.example.org</code></pre>

<p>The server might want to reply to the client saying &quot;here is a page elsewhere that will give you very specific information about the current crisis in Taipei.&quot;. The response would look something like this:</p>

<pre><code>HTTP/1.1 307 Temporary Redirect
Date: Fri, 24 Aug 2012, 13:56:44 GMT
Location: http://meteo.example.org/taiwan/weather/crisis</code></pre>

<p>Usually browser clients automatically follow the redirection to the new address mentioned in the <code>Location</code> line. The redirection could be to another domain on the Web. Once the crisis is finished, the redirection will be removed from the server. A client is not supposed to remember that redirection as something definitive. That&#39;s important in the case of bookmarks or history. It would be perfectly possible to program a client to manage these redirections in a meaningful way.</p>

<p>Even though such redirects are not seen by the user in most browsers, it would be possible to create a body (the payload of the HTTP message) with a short message giving a link to the new location, to allow the user to click through to it.</p>

<h3 id="permanent">301, address changed permanently</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/783-http-response-codes/book.png" style="float:right;margin-left:1em;" alt="" />When managing information on a Web site, sometimes we really need to inform the client (and its users) that a web page has changed address permanently. In a company, sometimes business units are reorganised, through mergers or a change of priorities. Let&#39;s say that in a technology company the electromechanical unit has been absorbed completely by the electronics division. A client requesting</p>

<pre><code>GET /section/electromech/about HTTP/1.1
Host: inc.example.com</code></pre>

<p>could be redirected to the following:</p>

<pre><code>HTTP/1.1 301 Moved Permanently
Date: Fri, 24 Aug 2012, 13:56:44 GMT
Location: http://inc.example.com/section/electronic/about</code></pre>

<p>The difference between this status, and the previous <code>307</code> code we looked at, is that this change is permanent and the server is sending a clear message to the client that if it has bookmarks that have the old URI in memory, it might be time to adjust to the new URI. This could be handled automatically or via a user confirmation.</p>

<p>There are also two direct benefits of redirecting old URIs to the new ones. You create trust for your users by maintaining the information and showing that you care about the information you are managing. The second benefit comes with the stability of the resources. Web sites with a reputation for maintaining their links will be more likely to have other sites linking to them on a long term basis, hence improving its search engine karma.</p>

<h3 id="gone">410, this is the end — my only friend, the end</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/783-http-response-codes/closed.png" style="float:right;margin-left:1em;" alt="" />Sometimes a Web site needs to say to the client that the information that existed at this precise URI is gone forever. There might be good reasons to do that. We all know that cool URIs don&#39;t break; <code>410 Gone</code> is the appropriate way of &quot;breaking them&quot;. More exactly it is a way to tell users that the content previously available at this URI has been intentionally deleted. The server is informing clients accessing the resource that they should <strong>not remember</strong> the URI. In a system that has bookmarks or a history log, it is a way to tell the client (and its user) that this can be safely erased. Imagine the case of a social network, and requesting a specific user&#39;s page:</p>

<pre><code>GET /people/jeanpaulsartres HTTP/1.1
Host: socialnetwork.example.com</code></pre>

<p>The person no longer wants to be part of your social network and has decided to close their account. On the server side, you might want to warn other users accessing the URI because they might have it in their bookmarks or history:</p>

<pre><code>HTTP/1.1 410 Gone</code></pre>

<h3 id="500">500, I have a bad feeling about this</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/783-http-response-codes/collapsed_house.png" style="float:right;margin-left:1em;" alt="" />Sometimes the server is unable to answer the request without knowing why. HTTP doesn&#39;t deal at all with the way the web sites are working, for example how the data are stored in a database, or how the server-side code retrieves and manipulates that data. The server might have delivered the request to some internal software but not got an appropriate answer. So the server notifies the client and its user that there is something wrong happening that it is not sure about with a response like this:</p>

<pre><code>HTTP/1.1 500 Internal Server Error</code></pre>

<h2 id="redirect-howto">Implementing response status lines in web servers</h2>

<p>When designing a system to manage content, separating the layers out into resources and their URIs is essential. It helps when answering client requests with the right information. Serving content to software or a person is something crafted in the fabric of time. The information evolves, changes. Caring about that in advance makes the system more flexible. Giving all code strategies for implementing server responses is not the purpose of this article, but the following examples should at least give you a starting point, although be warned that they probably won&#39;t scale very well to large operations involving thousands of URIs.</p>

<h3 id="apache">Redirecting with Apache</h3>

<p>If we want to redirect <samp>http://inc.example.com/section/<strong>electromech</strong>/about</samp> to <samp>http://inc.example.com/section/<strong>electronic</strong>/about</samp>, one way of doing it is to put an <samp>.htaccess</samp> file at the root of our site with the following instructions:</p>

<pre><code>RewriteEngine On
RewriteBase /
RewriteRule ^/section/electromech/about /section/electronic/about [L,R=301]</code></pre>

<p class="note">Note: There are other ways to handle this as well: through <samp>httpd.conf</samp>, through databases, through scripting, etc. It depends on the way your system is built.</p>

<h3 id="nginx">Redirecting with nginx</h3>

<p>nginx is another frequently used server, more specifically for <abbr title="Content Delivery Network">CDN</abbr>s. The above example rewritten for nginx would look like so:</p>

<pre><code>server {
  listen 80;
  server_name inc.example.com;
  rewrite ^/section/electromech/about http://inc.example.com/section/electronic/about permanent;
}</code></pre>


<h2 id="family">HTTP codes, we are family</h2>

<p>Above we have looked at just a few of the available HTTP codes; there are <a href="http://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics#section-4">many others</a>. Some are very well-known, such as <code>404 Not Found</code>, but others are quite obscure and don&#39;t crop up very often. Whatever the case, the first digit is always an indication of the family of codes they belong to:</p>

<ul>
  <li>1xx (Informational): Request received, continuing process.</li>
  <li>2xx (Successful): The action was successfully received, understood, and accepted.</li>
  <li>3xx (Redirection): Further action needs to be taken in order to
complete the request.</li>
  <li>4xx (Client Error): The request contains bad syntax or cannot be
fulfilled.</li>
  <li>5xx (Server Error): The server failed to fulfil an apparently
valid request.</li>
</ul>

<h2 id="summary">Summary</h2>

<p>And that brings us to the end of our study of HTTP status codes. I encourage you to explore each HTTP code, and familiarise yourself with their purposes. Some have particular consequences for caching and the resource payload of the HTTP message; we will look at caching next time around.</p>

<h2 id="remember">What you need to remember</h2>

<ul>
  <li>Servers send HTTP status codes to provide quick information on the response sent by the client.</li>
  <li>HTTP status codes have consequences on caching, and handling of URIs on the client side.</li>
  <li>There are different families of HTTP status codes.</li>
</ul>

