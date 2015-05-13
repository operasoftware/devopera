---
title: Developing for Opera Unite
authors:
- zi-bin-cheah
tags:
- yusef
- unite
license: cc-by-3.0
---

<h3>How are we doing?</h3>
<p>
Yusef is used by developers to build their Opera Unite application. It is essentially a collection of libraries to help speed up application development.
</p>
<p>
Since the launch of Yusef in October 2009, we have made several changes to this framework. Let&#39;s take a look at two of them.
</p>
<h4>libraryLoader.js</h4>
<p>
libraryLoader.js allows us to invoke libraries.  With it, we can easily invoke the libraries in an Opera Unite application and choose the Yusef plugin using the <code>Libraries.setTail</code> function.
</p>
<pre>
<code>
&lt;script src=&quot;libraries/libraryLoader/librariesLoader.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
  Libraries.setTail( &#39;yusef.translation&#39;, &#39;yusef.ui&#39;, &#39;yusef.acl&#39; );
  Libraries.load();
&lt;/script&gt;
</code>
</pre>
<p>
Previously, we had to invoke the libraries manually.
</p>
<h4>getData()</h4>
<p>
Secondly, we also have a function call getData(), which is a wrapper to return plugin and application data. We can get a return of <code>sessionId, sessionId, serviceName, servicePathHash, hostName, username, deviceName, isHomeApp, requestSection, requestPath, isLocal, isOwner</code> and many more.

<pre>
<code>
var data = Yusef.getData(connection);

var username = data.username; // Gets the username of the person if user is logged in

var isOwner = data.visitor.isOwner; // Tells us if the person is the owner of the application
</code>
</pre>


<h3>What&#39;s next?</h3>
<p>
Looking forward, we would love to see more Opera Unite applications. If you want to win prizes while building a great application, you might want to check out our <a href="http://unite.opera.com/develop/contest/">Opera Unite Weekly Application challenge</a>.
</p>
<p>
For more on Yusef, check out Shwetank Dixit&#39;s <a href="https://dev.opera.com/articles/view/rapid-unite-app-development-with-yusef/">Rapid application development using the Opera Unite Yusef library</a> or the original article about <a href="https://dev.opera.com/articles/view/yusef-the-unite-server-framework/">Yusef - Opera Unite Server Framework</a>.
</p></p>
