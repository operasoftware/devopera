Title: Running your web applications offline with HTML5 AppCache
----
Date: 2010-07-01 05:59:40
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Introduction</h2>

Web applications have become a major part of many people’s lives, so much so that many of us use them all the time. Wouldn&#39;t it be great if we could use them even when offline? Until recently, there wasn’t any viable way to do this – however, with the introduction of the <a href="http://dev.w3.org/html5/spec/offline.html">W3C HTML5 application cache</a> feature, it is possible to make your web applications run offline as well as online. Let us see how...

<h2>Why have your app run offline?</h2>

<p>Web applications are becoming more complex and capable every day. There are many examples of web applications doing the same job as desktop applications in various fields (think about Google Docs, Picasa, etc.). However, one major disadvantage is that they cannot work when the user is not connected to the Internet.</p>

<p>This is where HTML5&#39;s new offline storage comes in. It tries to remove that disadvantage by defining a way to store files in a cache, so that when the user is offline, the browser still has access to the necessary files. These can be HTML, CSS or JavaScript files, or any other assets the site needs to run.</p>

<h2>Saving your files for offline use with the application cache</h2>

<p>HTML5 has a feature for offline web applications called application cache, or AppCache for short. Files stored in this AppCache are available to the application even when the user is offline. You can specify which files you want to store in the AppCache using a <code>manifest</code> file.  </p>

<h2>How is the application cache different from the normal browser cache?</h2>

<p>There a number of ways in which AppCache is different from the browser&#39;s normal cache. First of all, is the intention behind the two. AppCache is intended for proper web applications whereas the browser&#39;s cache is for normal web pages in general. The normal cache will cache pretty much any page whereas the AppCache will only cache pages which are specifically included in the manifest file. Plus, the normal cache is unreliable, as we dont know which pages (and which resources within those pages) will be available for sure.</p>

<p>AppCache is exciting because now the developer has much more programmatic control over the cache, which means much more certainty and control over how web applications could behave offline. Also to note, is that you can have multiple pages share the same AppCache. Also, with AppCache, you can make use of the API to determine what is the state of the AppCache, and then even have it update itself.</p>

<h3>The <code>manifest</code> file</h3>
<p>This file resides on the server and dictates which files should be stored client-side in the browser&#39;s AppCache, in readiness for the user going offline. Let&#39;s delve a bit deeper in into how it works.</p>

<p>You can give the manifest file any name you want, but best practice dictates that you give it an extension of <code>.manifest</code>. Every manifest file has to start with <code>CACHE MANIFEST</code>, after which you list the files you want to be stored and made available for offline use. Comments can be made by putting <code>#</code> at the beginning of a line. A very simple manifest file looks like so:</p>

<pre><code>CACHE MANIFEST
#You can also use the <code>CACHE:</code> section header to explicitly declare the following three files.

style.css
script.js
index.htm</code></pre>

<div class="note">
<p>The manifest file has to have the correct MIME Type, which is <code>text/cache-manifest</code>. To deal with these, you could have an extension <code>.manifest</code> for the manifest file, and add the following in the <code>.htaccess</code> file on your server:</p>
<pre><code>AddType text/cache-manifest .manifest</code></pre>
</div>

<h2>Linking the HTML file with the manifest file</h2>

<p>Now that you have created the manifest file telling which files need to be cached in your application, you need tell the HTML page to use that cache. To do this you have to link the page to the manifest file by including the <code>manifest</code> attribute in the <code>&lt;HTML&gt;</code> tag of your page. For example:</p>

<pre><code>&lt;html manifest=&#x201D;demo.manifest&#x201D;&gt;</code></pre>

<p>If your web application has more than one page, make sure that all the pages link to the manifest file in this way, otherwise they won&#39;t be part of the AppCache, and won&#39;t work offline.</p>

<h2>Using section headers for better control over the AppCache</h2>
<p>So far, we&#39;ve seen a very basic example of how to use the manifest file. With the use of section headers, we can actually specify exactly how a certain file is to be cached, or not.</p>

<h3>Explicitly defining the files to be cached</h3>

<p>You can use the <code>CACHE:</code> section header to explicitly declare which files need to be cached. For example, the previous example of the manifest file can be written like so, and it will function in exactly the same way:</p>

<pre><code>CACHE MANIFEST

CACHE:
style.css
script.js
index.htm</code></pre>

<p>The only difference is that in this example we have explicitly declared that all those files will be part of the application cache. Here is a very simple <a href="http://people.opera.com/shwetankd/demos/2/index.htm">example page that uses the <code>CACHE:</code> section header</a>.</p>

<p class="note">It is important to note that the path mentioned for the files should be relative to the location of the manifest file. In the examples here, we are assuming that the files mentioned are in the same directory as the manifest file. You can use relative as well as absolute URLs when stating the files in the manifest file.</p>

<p>The files specified as part of the <code>CACHE:</code> will load from AppCache (not the server) even if you are online, provided that there is no change in the manifest file. If, however, the browser finds an updated manifest file, then the new cache will once again be downloaded according to the what new manifest file says. So AppCache may not be suitable for sites with fast moving content like news blogs, for example, but can be very useful for web applications which do a particular thing and want to work offline (for example, a calendar app, or a to-do list, etc.). </p>


<h3>What if I want a file to bypass the cache and load directly from the server?</h3>

<p>If a page is associated with a manifest file, then only those files mentioned in the manifest file will try to load regardless of whether the user is online or offline. Now, there may be situations where you might want some file to bypass this cache when the user is online, so that it connects and downloads fresh from the server instead of the cache (For example, some dynamic content from a CGI Script).</p>

<p>Basically, if a page is associated with a manifest file, then all network traffic for its files is blocked, and files either have to be loaded from the AppCache, or fail to load. The <code>NETWORK:</code> section header gives exceptions for this rule. You can use the <code>NETWORK:</code> section header to declare which files should NOT to be cached, so that they are downloaded from the server, and never be part of the application cache. The <code>NETWORK:</code> section header respects the browser&#39;s normal cache header. So if a file is supposed to be cached by the browser&#39;s normal cache, then it will still be cached by it (just like any other file not specified in the AppCache), even if it&#39;s specified under the <code>NETWORK:</code> section header.</p>

<pre><code>CACHE MANIFEST

CACHE:
style.css
script.js
index.htm

NETWORK:
style2.css
</code></pre>

<p>In the above example, <code>style2.css</code> will always be downloaded from the server and never be part of the application cache. Keep in mind that it may be the case that you have too many files to list which need to bypass the cache, making writing them all down under the <code>NETWORK:</code> section header cumbersome. In this case you can use the asterisk character (*), so that all urls are allowed to go online if you are online.</p> 

<p>Check out my <a href="http://people.opera.com/shwetankd/demos/3/index.htm">example that uses a manifest file employing a <code>NETWORK:</code> section header</a>. You will notice what when you are offline and re-load the page, the page does reload, but the background styling disappears. This is because the background styling in this example is in the file <code>style2.css</code>, which is under the <code>NETWORK:</code> section header, meaning that it is not cached and will only load when you are online and re-load the page. </p>
<!--
<p class="note">It may be the case that you have too many files to list which need to bypass the cache, making writing them all down under the <code>NETWORK:</code> section header cumbersome. In this case you can use the asterisk character (*), so that all urls are allowed to go online if you are online</p>
-->
<h3>Providing fallback content</h3>

<p>The <code>FALLBACK:</code> section header is used to define fallbacks to be used in place of files that fail to load (or load incompletely):</p>

<pre><code>CACHE MANIFEST

CACHE:
style.css
script.js
index.htm

NETWORK:
style2.css

FALLBACK:
main_image.jpg backup_image.jpg
</code></pre>

<p>The fallback content is supposed to be cached and only used in case the main content does not load. In the above example, <code>backup_image.jpg</code> is cached by AppCache so if <code>main_image.jpg</code> cannot load, <code>backup_image.jpg</code> will load in its place. Check out my <a href="http://people.opera.com/shwetankd/demos/4/index.htm">manifest backup example</a> — if you go to this page, and disconnect from the internet and then re-load the page, the browser will try to load the image, but since you&#39;re not online (and the image is not cached) it will not load, and hence the fallback content will load in its place instead. (The browser will first take a little time trying to load the main content, and only then load the fallback content...so be patient!)</p>

<p>This manifest file is utilized in my <a href="http://people.opera.com/shwetankd/demos/5/index.htm">example that provides fallback content for a number of images</a>.</p>

<h2>Using the application cache API and events to make sure the latest files are used in your cache</h2>

<p>One of the great things about application cache is that now you, the programmer, have access to how the cache could behave. You have access to events which can tell you about the current state of the application cache, and have functions to asynchronously update the it too. For exampple, you can use <code>window.applicationCache</code> to find out if the browser supports application cache or not. Let&#39;s take a look at some other ways in which you can gain programmatic control over the application cache.</p>


<h3>Statuses</h3>

<p>You can check the current status of the application cache using <code>window.applicationCache.status</code>, which returns a numeric value mapped to the following states:</p>

<dl>
<dt><code>0 </code> - <code>uncached</code></dt><dd>If the page is not linked to the application cache. Also, the the very first time the application cache is being downloaded, then during the time it is being downloaded, the AppCache will have a status of <code>uncached</code>.</dd>
<dt><code>1</code> - <code>idle</code></dt><dd>When the browser has the latest version of the AppCache, and there aren no updated versions to download, then the status is set to <code>Idle</code>.</dd>
<dt><code>2</code> - <code>checking</code></dt><dd>The duration of when the page is checking for an updated manifest file, then the status is set to <code>Checking</code>.</dd>
<dt><code>3</code> - <code>downloading</code></dt><dd>The duration of when the page is actually downloading a new cache (if an updated manifest file has been detected), the status is set to <code>downloading</code></dd>
<dt><code>4</code> - <code>updateready</code></dt><dd>Once the browser finishes downloading that new cache, it is ready to be used (but still not being used yet). During this time, the status is set as <code>updateready</code></dd>
<dt><code>5</code> - <code>obsolete</code></dt><dd>In case the manifest file cannot be found, then the status is set to <code>obsolete</code> and the application cache gets deleted.  It is important to know, that in case the manifest file (or any file mentioned in the manifest file except those which have a fallback) fail to load, then it will be counted as an error and the old application cache will continue to be used.</dd>
</dl>

<h3>Events</h3>
<p>Certain events also get fired, depending on what going on with the AppCache at the moment.</p>
<dl>
<dt><code>checking</code></dt><dd>This gets fired when browser is checking for attempting to download the manifest for the first time, or is checking if there is an updated version of the manifest file.</dd>
<dt><code>noupdate</code></dt><dd>If there is no updated version of the manifest file on the server, then <code>noupdate</code> is fired.</dd>
<dt><code>downloading</code></dt><dd>If the browser is downloading the cache for the first time, or if is downloading an updated cache, then this is fired.</dd>
<dt><code>progress</code></dt><dd>This is fired for each and every file which is downloaded as part of the AppCache.</dd>
<dt><code>cached</code></dt><dd>This is fired when all the resources have finished downloading, and application is cached.</dd>
<dt><code>updateready</code></dt><dd>Once resources have finished re-downloading for an updated cached file, then <code>updateready</code> is called. Once this happens, then we can use <code>swapCache()</code> (as explained later in the article) to make the browser to use this newly updated cache.</dd>
<dt><code>obsolete</code></dt><dd>This is fired if the manifest file cannot be found (404 error or 410 error).</dd>
<dt><code>error</code></dt><dd>This can be fired for a number of reasons. If the manifest file can&#39;t be found, then the application cache download process has to be aborted, in which case this event can be fired. It can also be fired in case the manifest file is present, but any of the files mentioned in the manifest file can&#39;t be downloaded properly. It can even be fired in case the manifest file changes while the update is being run (in which case the browser will wait a while before trying again), or in any other case where there is a fatal error. </dd>
</dl>

<p class="note">The event handlers for these events are all prefixed by &#39;on&#39;. For example, <code>onchecking</code>, <code>onupdateready</code>, <code>onerror</code>, etc.</p>

<p>The application cache API has a few things worth noting:</p>
<ul>

<li><p><code>window.applicationCache.update()</code>: This will trigger the application cache download process, which is nearly the same as reloading the page. It simply checks if the manifest has changed, and if so downloads a fresh version of all the content in the cache (respecting any cache headers). Note that even though a new cache is created with this, the page will continue to use the old cache. To make the page use the new cache you have just downloaded, you must use the <code>swapCache()</code> function.</p></li>

<li><p><code>window.applicationCache.swapCache()</code>: This function tells the browser to start using the new cache data if it is available. It is important to note that even if there is a new manifest file, the application will still continue using the old cache (as specified in the old manifest file) untill <code>swapCache()</code> is called. Once <code>swapCache()</code> is called, then the cache will be used as specified from the new manifest file.</p></li>
</ul>

<p>Normally you won’t need to use the <code>update()</code> function, as the browser should automatically do this when reloading a page. Most commonly the <code>swapCache()</code> function will be used in conjunction with the <code>onupdateready</code> event.</p>

<p>In the following example, if you change the manifest file and reload the page, the browser will download the new files in the cache, and then switch to the new cache (as the <code>swapcache()</code> function is called):</p>

<pre><code>
&lt;html manifest=&quot;demo.manifest&quot;&gt;
&lt;head&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
window.applicationCache.addEventListener(&#39;updateready&#39;, function(){
		window.applicationCache.swapCache();
}, false);
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
...
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>If the page you build is unlikely to be reloaded by the user for a while, then you could periodically call the <code>update()</code> function to check for new updates to the manifest file, and if so, call the <code>swapcache()</code> function on an <code>updateready</code> event to download and switch to the new cache:</p>

<pre><code>setInterval(function () { window.applicationCache.update(); }, 3600000); // Check for an updated manifest file every 60 minutes. If it&#39;s updated, download a new cache as defined by the new manifest file.

window.applicationCache.addEventListener(&#39;updateready&#39;, function(){ // when an updated cache is downloaded and ready to be used
		window.applicationCache.swapCache(); //swap to the newest version of the cache
}, false);</code></pre>

<p>This code will check for an updated version of the manifest file every 60 minutes. If it finds a different version of the manifest file on the server than it previously encountered, it will download a new cache based on this new manifest. Once that happens, an <code>updateready</code> event will be fired, stating that an updated copy of the cache has finished downloading and is ready to be used. We can then explicitly use the <code>swapCache()</code> function to swap the old cache with the new one we just downloaded.</p>

<p>In this way, you can ensure that the user&#39;s cache will stay updated.</p>

<h3>Summary</h3>
<p>The introduction of the <a href="http://dev.w3.org/html5/spec/offline.html">W3C HTML5 application cache</a> provides exciting new possibilities to web developers. Web applications can now be cached for offline use, thereby making them even more powerful and useful than before.</p>

  <h2 id="readmore">Read more...</h2>
  <ul>
    <li><a href="/articles/view/taking-your-web-apps-offline-web-storage-appcache-websql/">Taking your web apps offline: A tale of Web Storage, Application Cache and WebSQL</a></li>
    <li><a href="/articles/view/web-storage/">Web Storage: easier, more powerful client-side data storage</a></li>
  </ul>
