Title: Adding meaning to your HTTP error pages!
----
Date: 2009-09-23 10:56:18
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<h2>Introduction</h2>

<p>When searching for something on the web we&#8217;ve all had the experience of clicking on a link in a search engine&#8217;s results page only to find that the page no longer exists. If there&#8217;s no information on that page other than a default error message, the most likely course of action on the user&#8217;s part is to press the back button and try the next search result.</p>



<p>As site authors we can make our error pages more meaningful to our users, so that an error becomes an opportunity to bring the user back into a site and show them content that&#8217;s relevant to what they&#8217;re looking for. In this article I&#8217;ll show you how to do just that.</p>



<p>The contents of this article are as follows:</p>



<ul>
<li><a href="#typical-http-error-codes">Typical HTTP error codes</a></li>
<li><a href="#creating-a-custom-error-page">Creating a custom error page</a></li>
<li><a href="#making-a-smarter-error-page">Making a smarter error page</a>
<ul>
<li><a href="#search-engine-referrers">Search engine referrers</a>
<ul>
<li><a href="#a-word-on-security">A word on security</a></li>
</ul>
</li>
<li><a href="#providing-useful-routes-back-into-your-site">Providing useful routes back into your site</a></li>
<li><a href="#handling-content-removal">Handling content removal</a></li>
<li><a href="#bending-the-rules">Bending the rules for SEO</a></li>
</ul>
</li>
<li><a href="#advanced-warning-of-problems">Advanced warning of problems</a></li>
<li><a href="#pitfalls-to-avoid">Pitfalls to avoid</a>
<ul>
<li><a href="#monitor-error-pages-carefully">Monitor error page resources carefully</a></li>
<li><a href="#ensure-the-correct-http-status-code-is-served">Ensure the correct HTTP status code is served</a></li>
<li><a href="#set-up-redirects-for-urls-that-have-changed">Set up redirects for URLs that have changed</a></li>
<li><a href="#avoid-mystery-timed-redirects">Avoid mystery timed redirects</a></li>
</ul>
</li>
<li><a href="#summary">Summary</a></li>
</ul>



<h2 id="typical-http-error-codes">Typical HTTP error codes</h2>



<p>For the purpose of this article we&#8217;re going to focus on creating pages for handling the following <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">HTTP status codes</a>:</p>

<ul>

<li><strong>404</strong>: When a page is not found by your webserver it will serve a <code>404 NOT FOUND</code> status in its response headers. Along with the status code, most webservers are configured by default to display a basic page providing limited details of the error. The language used in these pages is often not particularly informative and tends to be overly technical.</li>

<li><strong>410</strong>: A <code>410 GONE</code> status is similar to the 404 page, except that it&#8217;s saying that the content has been deliberately removed. For example, you should return this status if a news article had to be removed for legal reasons.</li>

<li><strong>500</strong>: A <code>500 Server Error</code> page is shown when the server has a serious problem. Typical causes of 500 errors would be misconfiguration of the web server or a fatal error in server-side code. This page should always be static, because &#8212; depending on the cause of the error &#8212; you cannot guarantee that execution of server-side scripting  (such as calling separate include files or a redirection to another page) will be possible.</li>

</ul>

<h2 id="creating-a-custom-error-page">Creating a custom error page</h2>

<p>On any site it&#8217;s a good idea to create a design for your error pages so that the error pages fit into the overall design. If you don&#8217;t configure custom error pages, users will only see the default error page for the particular web server or framework you are using.</p>

<p>Another good reason to override Apache&#8217;s default error pages is the fact that Internet Explorer displays its own internal error pages if the error page served is smaller than 512 bytes &#8212; and all of the default error messages are below this arbitrary threshold.</p>

<p>All that&#8217;s needed for a custom page is to create an HTML document for each error that you want to handle and then configure your webserver or framework to use them in place of their defaults.</p>

<p>For starters, any useful error page needs to provide a clear indication of what has happened, so that the user understands what went wrong. It&#8217;s best to avoid any technical jargon, as we want to avoid scaring users into reaching for the back button.</p>

<p>The default apache error document reads as follows:</p>

<pre><code>Not Found

The requested URL /blah was not found on this server.</code></pre>

<p>We as developers all know what a URL is, but would your granny? You should tailor the language of your error message to be understandable by your site&#8217;s audience, whether it is likely to be web geeks, or <q>normal</q> people.</p>

<p>An alternative version to this would be to use something a little more human, like this example used on google.com:</p>

<pre><code>The page - www.google.com/dkjfhsd - does not exist.

Suggestions:

* Check the spelling of the address you typed
* If you are still having problems, please visit the Help Center</code></pre>

<p> To get you started, here&#8217;s a simple example using Apache &#8212; don&#8217;t forget to make it look pretty. (If you&#8217;re lacking creative inspiration, <a href="http://flickr.com/search/?q=404+page">Flickr</a> can provide some ideas):</p>

<ol>
<li>

<p>Create your markup (feel free to reuse <a href="404.html">my example</a>)</p>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot;   
&quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;title&gt;Page Not Found&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Page not found&lt;/h1&gt;

  &lt;p&gt;The page you were trying to reach doesn&#8217;t exist. To continue on your journey please try one of the following:&lt;/p&gt;

  &lt;ol&gt;                
    &lt;li&gt;
      &lt;!-- You could display the request url here but as always be sure to escape it correctly --&gt;
      &lt;p&gt;Please check the url (web address) is correct; does it contain any spelling errors or typos?&lt;/p&gt;
      &lt;p&gt;If it does - please correct it in the address bar of your browser and hit enter&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;!-- Provide a standard search box for your site --&gt;
      &lt;p&gt;Try searching for the content you were looking for&lt;/p&gt;
      &lt;form  method=&quot;GET&quot; action=&quot;/search/&quot;&gt;
        &lt;div&gt;&lt;!-- Using a div here as we don&#8217;t want a fieldset and legend for a search box --&gt;
          &lt;input name=&quot;q&quot; value=&quot;&quot;&gt;
          &lt;input type=&quot;submit&quot; name=&quot;submit&quot; value=&quot;Search&quot;&gt;
        &lt;/div&gt;
      &lt;/form&gt;
    &lt;/li&gt;
    &lt;!-- if referrer is set you could set up a link to send them back to that  &#8212;  just be sure 
to not trust that data and make sure you&#8217;re not setting up a security hole in your site --&gt;
    &lt;li&gt;Press the back button on your browser to return to the page you were previously on&lt;/li&gt;
  &lt;/ol&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

</li>

<li>

<p>Save this page in the <code>htdocs</code> folder of your Apache server installation</p></li>

<li>

<p>Configure Apache to serve this page for 404 errors</p>

<p>The main configuration file is usually called <code>httpd.conf</code> or <code>apache2.conf</code>, depending on the version of Apache you&#8217;re using.</p>

<pre><code>ErrorDocument 404 /srv/awesome.com/htdocs/404.html</code></pre>

<p>If you place the error document inside the main configuration folder as instructed above, then it will be the error page for every site and virtualhost on your server.  If you&#8217;d prefer to set up separate error pages for each virtualhost, you will need to place them inside the root folder of each virtualhost and specifically configure their individual <code>ErrorDocument</code> directives. For detailed information on virtualhosts setup, see the <a href="http://httpd.apache.org/docs/trunk/vhosts/">Apache vhosts Documentation</a>.</p>

</li>

<li>

<p>Restart Apache.</p>

<ul>

<li>

<p>On most Linux systems &#8212; <code>sudo /etc/init.d/apache2 restart</code>

</p></li>

<li>

<p>On Mac OS X &#8212; <code>sudo apachectl restart</code>

</p></li>

</ul>

</li>

</ol>

<p>There are a few caveats when configuring the <code>ErrorDocument</code> directive in Apache. If you specify a full URL for an error document, Apache will redirect the client to that location and the client will see the redirect status code rather than the original error page status code. This is something to be avoided as it&#8217;s extremely important to make sure error pages are served with the correct status code  &#8212; not doing so can confuse search engine robots.</p>

<h2 id="making-a-smarter-error-page">Making a smarter error page</h2>

<p>So, if you follow the example above for all your different error codes, you&#8217;ll end up with a beautiful set of custom error pages that look a lot nicer than the defaults and that describe what the error really means to the user in a friendly way. Having done this, how can we make our error pages even better?</p>

<p>First let&#8217;s look at making our error pages smarter for our users. Say a site visitor has come to our site looking for a particular piece of information and has hit the 404 page - what can we do to retain them?</p>

<h3 id="search-engine-referrers">Search engine referrers</h3>

<p>A <a href="http://en.wikipedia.org/wiki/Referrer">referrer</a> is a header sent by the browser which tells a server the previous site the user was visiting. Like any data sent by the browser, we can&#8217;t trust it completely - but it can still be used to attempt to deduce some information about where a user has come from.</p>

<p>Here&#8217;s an example of how to extract the keywords from a Google referral. An example google search URL looks like so:</p>

<pre><code>http://www.google.co.uk/search?hl=en&amp;q=barista+champion&amp;btnG=Google+Search&amp;meta=</code></pre>

<p>Using an appropriate server-side function such as Python&#8217;s <code>urlparse</code> module we can extract the relevant parts of the the query string:</p>

<pre><code>&gt;&gt;&gt; import urlparse
&gt;&gt;&gt; url = &quot;http://www.google.co.uk/search?hl=en&amp;q=barista+champion&amp;btnG=
Google+Search&amp;meta=&quot;
&gt;&gt;&gt; url_parts = urlparse.urlparse(url)
&gt;&gt;&gt; url_parts
(&#39;http&#39;, &#39;www.google.co.uk&#39;, &#39;/search&#39;, &#39;&#39;,
&#39;hl=en&amp;q=barista+champion&amp;btnG=Google+Search&amp;meta=&#39;, &#39;&#39;)</code></pre>

<div class="note">

<p>Note that in Python 2.5 <code>parse_qs</code> is found in the <code>cgi</code> module, eg:</p>

<pre><code>&gt;&gt;&gt; from cgi import parse_qs
&gt;&gt;&gt; query_parts = parse_qs(url_parts[5])
&gt;&gt;&gt; query_parts
{&#39;q&#39;: [&#39;barista champion&#39;], &#39;btnG&#39;: [&#39;Google Search&#39;], &#39;hl&#39;: [&#39;en&#39;]}
&gt;&gt;&gt; terms = query_parts.get(&#39;q&#39;, None) and query_parts[&#39;q&#39;][0].split()
&gt;&gt;&gt; terms
[&#39;barista&#39;, &#39;champion&#39;]</code></pre>

<p>Also note that in Python 2.6 <code>parse_qs</code> is found in the <code>urlparse</code> module, eg:</p>

<pre><code>&gt;&gt;&gt; query_parts = urlparse.parse_qs(url_parts[4])
&gt;&gt;&gt; query_parts
{&#39;q&#39;: [&#39;barista champion&#39;], &#39;btnG&#39;: [&#39;Google Search&#39;], &#39;hl&#39;: [&#39;en&#39;]}
&gt;&gt;&gt; terms = query_parts.get(&#39;q&#39;, None) and query_parts[&#39;q&#39;][0].split()
&gt;&gt;&gt; terms
[&#39;barista&#39;, &#39;champion&#39;]</code></pre>

<p>Last, note that in Python 3.0 The entire <a href="http://www.python.org/doc/2.6/library/urlparse.html?highlight=2to3"><code>urlparse</code> module</a> is moving to <code>urllib.parse</code>; the <code>2to3.py</code> script can update your code for you when you&#8217;re ready to move to Python 3.</p>

</div>

<p>If a user has come to our site from the results page of a search engine, we can look at the referrer and work out what search terms they had entered. We can then use those terms to search our site and provide a set of alternative content that matches those results. For instance,  you could feed those terms into your own search function and surface some relevant pages that might be of interest.</p>

<h4 id="a-word-on-security">A word on security</h4>

<p>As with any other external source, it&#8217;s important to take care when making use of any data sent in a referrer, as you cannot trust this data  &#8212; a referrer header can easily be forged. If you are displaying anything on your site based on the referrer, it&#8217;s important to ensure that it&#8217;s correctly escaped to <a href="http://en.wikipedia.org/wiki/Cross-site_scripting">avoid XSS vectors</a>. If you are using referrer data to run queries against a database, you should also ensure that you correctly filter the data to avoid the possibility of an <a href="http://en.wikipedia.org/wiki/Sql_injection">SQL injection attack</a>.</p>

<h3 id="providing-useful-routes-back-into-your-site">Providing useful routes back into your site</h3>

<p>If a visitor didn&#8217;t land on your error page from a search engine&#8217;s results page, you have less to go on in terms of knowing what the the user was looking for. But never fear  &#8212;  there&#8217;s still plenty of approaches that can be used to engage the user.</p>

<p>One possibility is to surface your site&#8217;s most popular content. For example, if you&#8217;re running an online shop then an obvious choice would be to provide links to the 10 most popular products on your site.</p>

<p>Another approach is to provide a search box for users to use to find something relevant. It&#8217;s still worth looking at the referrer header, as you may be able to use a similar approach to that of the search engine referrer, which is to break apart the referring URL to feed a search. This will probably only work if your site is designed with nice URLs, eg:</p>

<pre>http://caffeineftw.com/news/2009-world-barista-championships</pre>

<p>In this example, we can take the last part of the URL and split on the hyphen to get a nice set of search terms. We could also process out the <a href="http://en.wikipedia.org/wiki/Stop_words">stop words</a> such as <q>and</q> and <q>to</q>, but this may not be necessary if our site&#8217;s search capability already takes care of that.</p>

<p>Here&#8217;s a very basic example of how we can break this down (again, in Python):</p>

<pre><code>&gt;&gt;&gt; url = 
&#39;http://caffeineftw.com/news/2009-world-barista-championships&#39;
&gt;&gt;&gt; [ item for item in url.split(&#39;/&#39;) if item !=&quot;&quot; ][-1].split(&#39;-&#39;)
[&#39;2009&#39;, &#39;world&#39;, &#39;barista&#39;, &#39;championships&#39;]</code></pre>

<p>So in this case we could feed our search with the following keywords:</p>

<pre><code>2009 world barista championships</code></pre>

<p>and present links to some likely matches on our 404 page, so that the user will almost certainly be brought back into looking around the site.</p>



<h3 id="handling-content-removal">Handling content removal</h3>



<p>As briefly mentioned above, sometimes it&#8217;s necessary to explicitly remove content from a site, and a <code>410 GONE</code> status should be served.</p>

<p>Ideally your content management system will not actually delete content when it&#8217;s removed, but retain it in its data store and only make it unreachable for outside users, Assuming that you can still access the  original content behind the scenes, you can use that data and associated metadata in the 410 error page to once again feed a search or automatically find related content.</p>

<p>As an example, you might have published an article about a celebrity wedding, which has then had to be removed due to legal reasons. The URL has now become a <code>410 GONE</code> error page, but your server-side code can still use its knowledge of what used to be displayed on that addess and feed a search with any stored tags or other metadata, so that you can at least provide a list of related content for the uses.</p>





<h3 id="bending-the-rules">Bending the rules for SEO</h3>



<p>Sometime it&#8217;s necessary to bend the rules and make what should be a 404/410 page a 200 OK. This is a technique used for <abbr title="Search Engine Optimisation">SEO</abbr> purposes when there&#8217;s lots of inbound links pointing a page that has been removed. In those special cases it can be useful to retain inbound traffic by essentially promoting a specialised error page in place of the previous content.                </p>

<h2 id="advanced-warning-of-problems">Pitfalls to avoid</h2>

<p>Here&#8217;s a number of potential pitfalls to avoid when building smarter error pages.</p>





<h3 id="monitor-error-pages-carefully">Monitor error page resources carefully</h3>

<p>If you&#8217;re adding searches fed by keywords extracted from referrers and historical metadata you want to keep a close eye on those pages, as delivering a smart error page will obviously use more resources than serving up a static page. To limit the resource hit, it&#8217;s worth thinking about caching search results for a limited time - that way, if you get a lot of errors in a short time due to a bad internal link, the load on the server is controlled.</p>



<h3 id="ensure-the-correct-http-status-code-is-served">Ensure the correct HTTP status code is served</h3>

<p>A common mistake is to set up a custom error page, but to end up serving it with a <code>200 OK</code> status code. This can be an issue if a search engine indexes your site, sees the <code>200 OK</code> responses for what should be 404 or 410 error codes, and ends up indexing your actual error page. This will lead to listings for your company appearing with the error page content in the search results pages, instead of more meaningful content.</p>

<p>Another thing to avoid is redirecting to an error page. If something is wrong you really should be serving the correct status code at the exact URL that was requested, not changing the URL.</p>



<h3 id="set-up-redirects-for-urls-that-have-changed">Set up redirects for URLs that have changed</h3>

<p>In an ideal world all URLs would be permanent. However, in the real world there will always come a time where a URL has to be moved for some reason or another.</p>

<p>If a 404 error is occurring because you&#8217;ve moved a page to a different URL then the correct way to handle that is to issue a <code>301 Moved Permanently</code>, which instructs the browser to seamlessly take the user to the content&#8217;s new location. This header also helps to get the new location indexed by search engines, and the outdate URL to be replaced in their database with the new one (maintaining any keyword and search ranking you may already have had for the old address).</p>

<p>Ideally, your content management tool should be automatically keeping track of pages you move and set up relevant <code>301 Moved Permanently</code> redirect locations accordingly.</p>



<h3 id="avoid-mystery-timed-redirects">Avoid mystery timed redirects</h3>

<p>At the time of writing the <a href="http://yahoo.com">yahoo.com</a> 404 page uses a meta-refresh to send users to their homepage after 10 seconds, but they also provide a search box on their 404! This means that you could be in the middle of typing a new search when you are redirected to the homepage without any prior warning &#8212; an annoying &quot;feature&quot; to avoid.</p>





<h2 id="summary">Summary</h2>

<p>In this article we&#8217;ve covered ways to build smart error pages that are designed to guide the user back into the site by showing them relevant content when something goes wrong. Doing this attempts to engage your audience and maximises the time they spend on your site without having them navigate back to a search results page.</p>
