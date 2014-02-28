---
title: 'Web Storage: Easier, More Powerful Client-Side Data Storage'
authors:
- shwetank-dixit
intro: 'This article covers Web Storage, a new W3C specification supported in Opera 10.50+ that allows data to be saved on the client-side in a much more powerful, more secure fashion than before. Here Shwetank Dixit discusses both facets of Web Storage - Local Storage and Session Storage - and how to use them to store web application data on the client, along with some simple examples to get you started.'
license: cc-by-nc-sa-3.0
layout: article
---
<h2>Introduction</h2>

<p>Web applications are getting more advanced each day, with more elaborate uses of JavaScript as well as upcoming standards and technologies. We increasingly rely on these applications, many of them becoming a part of our daily lives. One area in which Web application development has been lacking is the ability to store data on the client-side. That is, until now.</p>

<p><a href="http://dev.w3.org/html5/webstorage/">Web Storage</a> is a W3C specification that provides functionality for storing data on the client side until the end of a session (Session Storage), or beyond (Local Storage). It is much more powerful than traditional cookies, and easier to work with. In this article we will look at why this is, and how to use it.</p>

<h2>The current problem: cookies can crumble</h2>

<p>Before we go on further, let’s take a very brief look on why the current way of storing data on the client-side — cookies — is a problem:</p>

<ul>
<li>Low size: Cookies generally have a maximum size of around 4KB, which is not much good for storing any kind of complex data</li>
<li>It’s difficult for cookies to keep track of two or more transactions on the same site, which might be happening in two or more different tabs</li>
<li>Cookies can be exploited using techniques such as cross site scripting, resulting in security breaches</li>
</ul>

<p>Other (less popular) alternatives to cookies include techniques involving query strings, hidden form fields, flash based local shared objects, etc. Each with their own set of problems related to security, ease of use, size restrictions etc. So up until now we have been using  pretty bad ways of storing data on the user’s end. We need a better way, which is where Web Storage comes in.</p>

<h2>Web Storage</h2>

<p><a href="http://dev.w3.org/html5/webstorage/">The W3C Web Storage specification</a> was designed as a better way of storing data on the client-side. It has two different types of storage: Session Storage and Local Storage.</p>

<p>Both Session and Local Storage will typically be able to store around 5Mb of data per domain, which is significantly more than cookies. As we’ll read on, we’ll find out more about them, and what makes Web Storage a better storage mechanism</p>

<h3>Session Storage</h3>

<p>Session Storage has one purpose: To remember all the data in your session, and forget it as soon you close the tab (or window) you are working in.</p>

<h4>Setting and retrieving data</h4>

<p>To set a key value pair in Session Storage, you just need to write a line like this:</p>

<pre><code>sessionStorage.setItem(yourkey, yourvalue);</code></pre>

<p>To retrieve the data again, you would write:</p>

<pre><code>var item = sessionStorage.getItem(yourkey);</code></pre>

<p>To store the value <q>This is a sample sentence</q> in the Session Storage, you could write:</p>

<pre><code>sessionStorage.setItem(1, 'This is a sample sentence');</code></pre>

<p class="note">Here, the key value is 1, but that does not mean that its the first value as such. It just converts the number 1 in a string '1' and uses that as key, it does not put that key value pair in the first position as such.</p>

<p>And to retrieve that sentence back inside a JavaScript alert, you’d write:</p>

<pre><code>var item = sessionStorage.getItem(1);
alert(item);</code></pre>

<p>Another example of <code>setItem()</code> could be:</p>
<pre><code>sessionStorage.setItem('name', 'john');</code></pre>

<p>and you could retrieve it using</p>
<pre><code>var name = sessionStorage.getItem('name');</code></pre>

<h4>Removing and clearing data</h4>

<p>There are also methods for removing and clearing data from the Session Storage. The <code>removeItem()</code> method is used to remove a particular item from the list:</p>

<pre><code>var item = sessionStorage.removeItem(yourkey);</code></pre>

<p>Bear in mind that you can also just reference a data item’s key and remove it from the list that way:</p>

<pre><code>var items = sessionStorage.removeItem(1);</code></pre>

<p>The <code>clear()</code> method is used to clear all items in the list; you use it in the following way:</p>

<pre><code>sessionStorage.clear();</code></pre>

<p>And you can use the <code>length</code> attribute to find out of the number of key/value pairs in the storage, like this:</p>

<pre><code>var no_of_items = sessionStorage.length;</code></pre>

<h2>Local Storage</h2>

<p>Local Storage is used if you want the data to be stored for more than a single session. A simple use case would be to count the number of times a person has visited a Web page. When a page uses Local Storage, the page (or window) can be closed and re-opened, and still show the saved data — it provides persistent storage.</p>

<p>Saving and retrieving data in Local Storage works similarly to Session Storage: it uses the same function names <code>setItem()</code> and <code>getItem()</code>. To save a sentence in Local Storage you write something like this:</p>

<pre><code>
localStorage.setItem(1, 'This is a sample sentence');
</code></pre>
and to retrieve it:
<pre><code>
var data = localStorage.getItem(1);
</code></pre>

<p>Also just like Session Storage, Local Storage supports the length attribute, <code>removeItem()</code> and <code>clear()</code>.</p>

<p class="note">In both Session Storage and Local Storage, the <code>clear()</code> function has the same objective - to clear <em>all</em> the values in list. This means that if you call, say <code>localStorage.clear()</code> then it will remove all local storage from that origin. So all Local Storage data from say, (such as www.example.org, www.example.org:80, www.example.org/abc/, www.example.org/xyz/) will be cleared. However, storage for, say, abc.example.org will not be affected by it. For Session Storage though, it will only clear the storage for the current session.</p>

<h2>A simple example</h2>

<p>To illustrate Web Storage in action, I have created a simple example that uses both Local Storage and Session Storage. Check out the <a href="http://people.opera.com/shwetankd/external/demos/webstorage_demo.htm">Web Storage demo page</a> to see this in action. The demo will ask you to enter two strings, one for Session Storage, the other for Local Storage. You can then open the Storage Inspector in Opera Dragonfly to access the Web Storage. You'll also notice that once you close and page, and then open it again, the data you typed in for Local Storage is preserved, whereas for Session Storage, this is not the case.</p>

<h2>Using the Storage event</h2>
<p>The specification also provides for the <a href="http://dev.w3.org/html5/webstorage/#the-storage-event">storage event</a> to be fired whenever the storage area changes. This provides various usefull attributes such as:</p>

<ul>
<li><strong>storageArea</strong>: Tells which kind of storage it is (Session or Local)</li>
<li><strong>key</strong>: The key which is being changed.</li>
<li><strong>oldValue</strong>: The old value of the key.</li>
<li><strong>newValue</strong>: The new value of the key.</li>
<li><strong>url</strong>: The URL of the page whose key is changed.</li>
</ul>

<p>If a <code>clear()</code> method is called, then <code>key</code>, <code>oldValue</code> and <code>newValue</code> attributes are set to null. Here is a <a href="http://people.opera.com/shwetankd/external/demos/webstorage_demo2.htm">modified version of the demo page</a> mentioned previously, this time using storage events to let the user know the change in values. If you enter a value, and then change it once again, then you'll see an alert mentioning the old value and the new value.</p>

<h2>Where do I get detailed access to Web Storage data on my browser?</h2>

<p>In Opera 10.50+, there are a few ways you can do this. You can enter <a href="opera:webstorage">opera:webstorage</a>, as well as <a href="opera:config#PersistentStorage">opera:config#PersistentStorage</a> in the address bar to access high level details of Web Storage (what is the storage limit, where it is saved, etc), but there is an even better way for developers to get detailed information on the Web Storage for a particular page — through the Storage Inspector in Opera Dragonfly, which provides you with much more detailed information.</p>

<p><img src="storage_inspector.jpg" alt="Screenshot of Opera Dragonfly providing Web Storage information for that page" /></p>

<p>Opera 10.50+ has a new and improved <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> debugging tool included (which we recently released as an <a href="http://bitbucket.org/scope/">open source project</a>). Amongst the fixes, improvements and new features is the Storage Inspector. This gives developers a separate tab to access information regarding cookies and the Local and Session Storage of a page. Open Opera Dragonfly and click on the <em>Storage</em> tab to access it.</p>

<h2>Important things to keep in mind regarding Web Storage</h2>
<ul>
<li><strong>Storage per origin</strong>: All storage from the same origin will share the same storage space. An origin is a tuple of scheme/host/port (or a globally unique identifier). For example, http://www.example.org and http://abc.example.org are two separate origins, as are http://example.org and https://example.org as well as http://example.org:80 and http://example.org:8000</li>
<li><strong>Storage limit</strong>: As of now, most browsers that have implemented Web Storage, including Opera, have placed the storage limit at 5 Mb per domain. You can change this storage limit on a per-domain basis by saving some data from a domain in Session or Local Storage, then going to <a href="opera:webstorage">opera:webstorage</a>. That domain will then appear in the list there, and you can click it to access statistics and options, including size of data saved for that domain, what the storage limit is, and what the browser will do when that limit is exceeded.</li>
<li><strong>Security considerations and associated best practices</strong>: Storage is assigned on a per-origin basis. Someone might use DNS Spoofing to make themselves look like a particular domain when in fact they aren’t, thereby gaining access to the storage area of that domain on a user’s computer. SSL can be used in order to prevent this from happening, so users can be absolutely sure that the site they are viewing is from the same domain name.</li>
<li><strong>Where not to use it</strong>: If two different users are using different pathnames on a single domain, they can access the storage area of the whole origin and therefore each other’s data. Hence, it is advisable for people on free hosts who have their sites on different directories of the same domain (for example, freehostingspace.org/user1/ and freehostingspace.org/user2/), to not use Web Storage on their pages for the time being.</li>
<li><strong>Web Storage is not part of the HTML5 spec</strong>: It is a <a href="http://dev.w3.org/html5/webstorage/">whole specification in itself</a>.</li>
</ul>

<h2 id="readmore">Read more...</h2>
<ul>
<li><a href="/articles/view/taking-your-web-apps-offline-web-storage-appcache-websql/">Taking your web apps offline: A tale of Web Storage, Application Cache and WebSQL</a></li>
<li><a href="/articles/view/offline-applications-html5-appcache/">Running your web applications offline with HTML5 Application Cache</a></li>
</ul>
