Title: Site blocking with Opera’s URL Filter API
----
Date: 2011-03-11 01:32:35
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

<p>Picture the scene: You come back home late, tired from a fun but exhausting night out and you decide to quickly check your preferred microblogging site. You don’t quite agree with one of the messages you read and decide to fire off a quick reply. When you return to your normal self the following morning however, you re-read your message and cringe. Did I really write that?</p>

<p>There are times when blocking sites from ourselves is not a bad idea. Maybe it’s better if you&#39;re unable to open that website after a few drinks on a Saturday night. Maybe your credit card report would be healthier if checkout pages were hidden from view, or maybe there&#39;s a particular website that you&#39;d rather not see at all, even by accident.</p>

<p>Opera’s built-in content blocker has been helping users for a long time now, but with the release of the URL Filter API in Opera 11.10, web developers can build extensions that not only make it easier for users to block content but also give them more control. In this tutorial we&#39;ll look at the concept of the URL Filter API, some scenarios in which it could be used and a step-by-step explanation of how to use it.</p>

<h2>Concept</h2>

<p>Opera’s built-in content blocker uses a file containing a list of domains, similar to the way an operating system’s hosts file works. This file, <code>urlfilter.ini</code>, is found in a user&#39;s profile directory and URLs can be easily added through the Opera UI by right-clicking on a page and selecting &quot;Block content&quot;. You can also manage content by going to Tools &gt; Advanced &gt; Blocked content. The URL Filter API can enable an extension to temporarily add domains to the content blocker. The following diagram illustrates this concept.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/429-site-blocking-with-operas-url-filter-api/URLFilterAPI_concept.png" width="640" height="431" alt="The URL Filter API adds virtual lists to Opera&#39;s built-in content blocker." /></p>
<p class="comment">Figure 1: The URL Filter API adds virtual lists to Opera’s built-in content blocker.</p>

<h2>Scenarios</h2>

<p>Examples of when this could be useful include:</p>

<ul>
  <li>Blocking by time: Block social networking or other sites you are addicted to, at certain times.</li>
  <li>Blocking by page content: Block any page that has a “Buy” button or a field requesting a credit card number.</li>
  <li>One-click blocking: Block the current domain at the click of a button.</li>
  <li>Remotely controlled blocking: Block domains based on a third party&#39;s list.</li>
</ul>

<p>But wait a minute, I hear you say. Can’t we do all this stuff already with JavaScript? Well, yes you can, but using this API offers two main advantages:</p>

<ul>
  <li>When blocking hundreds or even thousands of domains, letting the browser do the work can increase efficiency considerably.</li>
  <li>With just a single method needed to block a domain, your code will be simpler to write and maintain.</li>
</ul>

<h2>Getting it to work</h2>

<p>Enough talking, let’s start coding! In this tutorial, we&#39;re going to make a very basic example extension that increases productivity by blocking the two most popular social networking sites. The first thing we need to do when using the URL Filter API in an extension is enable it simply by adding the following line to our <code>config.xml</code> file:</p>

<pre><code>&lt;feature name=&quot;opera:urlfilter&quot;/&gt;</code></pre>

<p>Now on to the extension’s content. As you probably know, as well as a <code>config.xml</code> file, all extensions require an <code>index.html</code> file so we’ll create one now. All this does is call a script file &#x2014; <code>background.js</code> in this case.</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;utf-8&quot;&gt;
        &lt;script src=&quot;background.js&quot;&gt;&lt;/script&gt;
        &lt;title&gt;URLFilter (Opera extension)&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Now we’ll move onto the JavaScript. First we’ll create a <code>background.js</code> file and add an array containing the sites to block. We’ll also store a reference to the <code>URLFilter</code> object, which is slightly more efficient than repeatedly referring to <code>opera.extension.urlfilter</code>.</p>

<pre><code>var sites = [&#39;*://twitter.com/*&#39;,  &#39;*://*.twitter.com&#39;, &#39;*://facebook.com/*&#39;, &#39;*://*.facebook.com/*&#39;];

var filter = opera.extension.urlfilter;</code></pre>

<p class="note">Note that asterisks (*) can be used as wild cards anywhere within a URL, for example <code>*://</code> will block pages using any protocol including http and https.</p>

<p>So far so easy. The <code>URLFilter</code> object contains a virtual list &#x2014; <code>block</code> &#x2014; for blocking domains and has two methods: <code>add()</code> and <code>remove()</code>. To block sites in our example, we loop through our array and use the <code>add()</code> method for each site:</p>

<pre><code>for (var i = 0, len = sites.length; i &lt; len; i++) {
    filter.block.add(sites[i]);
}</code></pre>

<p>Lastly we wrap the above code in a check for the URL Filter API itself:</p>

<pre><code>if (typeof opera.extension.urlfilter != &#39;undefined&#39;) {
    ...
}</code></pre>

<p>Believe it or not, that’s it! To test it out, you can download our <a href="URLFilterExample.oex">URLFilterExample.oex example extension</a> or have a go at building it yourself using the complete code shown below, not forgetting the icons of course! Note that you may have to clear the browser&#39;s cache after installing the extension, otherwise it may look as though the site is not blocked.</p>

<p class="comment">config.xml</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://people.opera.com/danield/URLFilterExample&quot; defaultlocale=&quot;en&quot;&gt;
    &lt;name&gt;URL Filter Example&lt;/name&gt;
    &lt;description xml:lang=&quot;en&quot;&gt;Block certain sites with Opera&#39;s in-built URL filter.&lt;/description&gt;
    &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
    &lt;icon src=&quot;icon_64.png&quot;/&gt;
    &lt;icon src=&quot;icon_18.png&quot;/&gt;
    &lt;feature name=&quot;opera:urlfilter&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p class="comment">index.html</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;utf-8&quot;&gt;
        &lt;script src=&quot;background.js&quot;&gt;&lt;/script&gt;
        &lt;title&gt;URL Filter Example (Opera extension)&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p class="comment">background.js</p>

<pre><code>// Check that the URL Filter API exists
if (typeof opera.extension.urlfilter != &#39;undefined&#39;) {
    
    // Put the sites we want to block in an array
    var sites = [&#39;*://twitter.com/*&#39;, &#39;*://*.twitter.com&#39;, &#39;*://facebook.com/*&#39;, &#39;*://*.facebook.com/*&#39;];

    // Asign the URLFilter object to a variable for efficiency
    var filter = opera.extension.urlfilter;

    // Loop through the array of sites and add each one to the &quot;block&quot; list
    for (var i = 0, len = sites.length; i &lt; len; i++) {
        filter.block.add(sites[i]);
    }
}</code></pre>

<p>Naturally there are several improvements we could make to this simple example before releasing it to the world, such as enabling the user to add or remove sites as they wish. To do this, you could use the <a href="http://dev.opera.com/articles/view/opera-extensions-options-page/">extension preferences feature</a>.

<h2>Conclusion</h2>

<p>As you can see, the URL Filter API is easy to use, but can be very powerful. It builds on technology that has existed in the Opera desktop browser for years but as of Opera 11.10 you can now build your own interface to it and add enhancements. It’s worth remembering that blocked content is not simply hidden – it’s prevented from downloading in the first place so users don’t have to wait or pay for content they’re not going to see. There are many applications for this: We’re looking forward to seeing what you create and submit to the <a href="http://addons.opera.com/">Opera extensions repository</a>.</p>

<h2>Reference</h2>
<p><a href="http://www.opera.com/docs/apis/extensions/urlfilter/">URL Filter API for Opera extensions</a></p></p>
