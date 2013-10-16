Title: Building your first Link API application
----
Date: 2010-10-21 07:43:54
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

<p>In our <a href="http://dev.opera.com/articles/view/introducing-the-opera-link-api/">Introducing the Opera Link API</a> article, we saw that the <a href="http://www.opera.com/docs/apis/linkrest/">Link API</a> works in a RESTful manner, and looked at what you can do with it. This gives you enough information to start working the Link API into your own applications, but to make it easier we have developed libraries to help you get up and running quickly, and a couple of example applications to give you inspiration to write your own.</p>

<p>The libraries provide a high level interface to the API functionality, simplifying the authorization process and data access and manipulation. For now, you have a <a href="http://github.com/operasoftware/pyoperalink">Python library</a> and a <a href="http://github.com/operasoftware/AndroidOperaLink">Java library</a> with two examples, a simple <a href="http://github.com/operasoftware/xmarks-importer">Xmarks importer</a> written in Python and a simple <a href="http://github.com/operasoftware/AndroidNotes">Android application to access your notes</a>. Be sure to check <a href="http://github.com/operasoftware/">Opera&#39;s GitHub account</a> for future updates. If you have a GitHub account, you can automatically follow all updates by clicking the &quot;Follow&quot; button on the top right.</p>

<p>This article will show you how to write an application from the
ground up using the Python library. To follow this tutorial, you will need a working
<a href="http://python.org/">Python</a> installation, a copy of
the <a href="http://github.com/operasoftware/pyoperalink">pyoperalink
library</a> and a recent
<a href="http://pypi.python.org/pypi/oauth2/">oauth2 package</a> installed.</p>

<h2>Getting consumer keys</h2>

<p>For your application to get access to the data, it needs a <em>consumer key</em> (application keys in OAuth parlance) so OAuth can identify it. To get an application key, go to the
<a href="https://auth.opera.com/service/oauth/application/new">application
registration</a> in the OAuth website (see Figure 1). You will need to login with
your Opera account (that&#39;s a My Opera, Link, Unite, Portal,
widgets.opera.com or dev.opera.com account: they&#39;re all the same). If you
don&#39;t have one, you can go to
the <a href="http://my.opera.com/community/signup/">My Opera sign up
page</a> and get one.

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/390-building-your-first-link-api-application/oauth1.png" alt="OAuth application registering scren" />
<p class="comment">Figure 1: Registering a new OAuth application.</p>
</div>

<p>In the application registration page you will have to provide:</p>

<ul>
<li>An application name</li>
<li>An application type (make sure you specify
&quot;Desktop/mobile&quot; for this example)
<li>An application website URL (as
this application is just an example and you don&#39;t have a website for
it, you can give the URL for this article)</li>
<li>A description</li>

<p>After
you click &quot;I agree and request an API key&quot; you will be shown the
&quot;Consumer key&quot; and &quot;Consumer secret&quot; (see Figure 2). If you need them again, you can
check them by going to <a href="https://auth.opera.com/service/oauth/applications/">your
registered applications</a>.</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/390-building-your-first-link-api-application/oauth2.png" alt="the consumer key and secret for the new application" />
<p class="comment">Figure 2: Consumer key and secret for the new application.</p>
</div>

<p>Now that you have your application key, you&#39;re ready to rock!</p>

<h2>Authenticating from Python</h2>

<p>Create a new file called <tt>duplicateremover.py</tt> with the following
content, replacing <tt>YOUR CONSUMER KEY</tt>
and <tt>YOUR CONSUMER SECRET</tt> with the values you got in the
previous step):</p>

<pre class="sh_python"><code>from pyoperalink.auth import OAuth
from pyoperalink.client import LinkClient
from pyoperalink.datatypes import Bookmark, BookmarkFolder, SpeedDial

consumer_key = &#39;YOUR CONSUMER KEY&#39;
consumer_secret = &#39;YOUR CONSUMER SECRET&#39;
auth = OAuth(consumer_key, consumer_secret)

# Get the access token (load from file or get from the server)
try:
    with open(&#39;access_token.txt&#39;, &#39;r&#39;) as token_file:
        a_t = token_file.readline().rstrip()
        a_t_s = token_file.readline().rstrip()
        auth.set_access_token(a_t, a_t_s)
except IOError:
    url = auth.get_authorization_url()
    print &quot;Now go to:\n\n%s\n\nand type here the verifier code you get:&quot; \
        % (url)
    verifier = raw_input()
    if verifier == &quot;&quot;:
        print &quot;You need to write the verifier code. Please try again.&quot;
        sys.exit(1)
    token = auth.get_access_token(verifier)
    with open(&#39;access_token.txt&#39;, &#39;w&#39;) as token_file:
        token_file.write(&quot;%s\n%s\n&quot; % (token.key, token.secret))</code></pre>

<p>The first time you run this application, it will ask you to go to a
special URL and type your username and password. Do this and you will see a verifier code that looks like Figure 3:</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/390-building-your-first-link-api-application/oauth3.png" alt="a screen showing the verifier code from OAuth" />
<p class="comment">Figure 3: Verifier code from OAuth.</p>
</div>

<p>Paste that code into the application and press Enter (see Figure 4). Your application is now authorised to manage the Opera Link data for the account you logged in with.</p>

<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/390-building-your-first-link-api-application/oauth4.png" alt="pasting the verifier code from OAuth into the application" />
<p class="comment">Figure 4: Pasting the verifier code from OAuth into the application.</p>
</div>

<h2>Accessing some data</h2>

<p>Now that we have authenticated, we can start looking at the Opera Link
data and manipulating it. In this tutorial we will
have a look at the Speed Dial content the account has, and look for
bookmarks with the same URL. We will move any such bookmarks to the trash folder.</p>

<p>So let&#39;s start by having a look at the current Speed Dial URLs and
printing them on to the screen. Add the following text at the end of
the <tt>duplicateremover.py</tt> file:</p>

<pre class="sh_python"><code>client = LinkClient(auth)
speeddials = client.get_speeddials()
speeddial_urls = [sd.uri for sd in speeddials]
print &quot;The list of Speed Dial URLs is:&quot;, speeddial_urls</code></pre>

<p>The first line there creates an object to access the Link data, and
passes the authentication information as a parameter. We then get a
list of all dials in your Speed Dial, and extract their URLs in a list
by using the property <tt>uri</tt>. Once we have the list of those
URLs, we print them on screen. If you run the example application now, you will see a list of URLs in your terminal.</p>

<h2>Inspecting top-level bookmarks</h2>

<p>Now let&#39;s get the root level bookmarks and see if any of them have
the same URLs that appear in the <tt>speeddial_urls</tt> list. Add the
following code to the end of your script:</p>

<pre class="sh_python"><code>bookmarks = client.get_bookmarks() # Only top-level bookmarks
for bookmark in bookmarks:
    if isinstance(bookmark, Bookmark) and bookmark.uri in speeddial_urls:
        print &quot;I should delete the bookmark with title&quot;, bookmark.title</code></pre>

<p>Here we are iterating over the top level bookmarks and checking if
any of their URLs iare in our list. Notice how we only check
the <tt>uri</tt> property for actual bookmarks, not for bookmark
folders or separators, by using <tt>isinstance</tt>. If when you run
this code you don&#39;t get anything on your screen, try adding some
bookmarks into the root folder pointing to URLs you already have in your
Speed Dial (you might want to do that from the <a href="http://link.opera.com">Opera Link web interface</a> in My
Opera, so your changes are instant).</p>

<h2>Removing duplicate bookmarks</h2>

<p>Now that you have some bookmarks ready for deletion, modify the
code so that the <tt>for</tt> loop looks like this:</p>

<pre class="sh_python"><code>for bookmark in bookmarks:
    if isinstance(bookmark, Bookmark) and bookmark.uri in speeddial_urls:
        print &quot;Moving bookmark &#39;%s&#39; to Trash&quot; % (bookmark.title,)
        client.trash_bookmark(bookmark.id)</code></pre>

If you now run the example again, you will see the familiar Speed Dial URL list, then a line &quot;<tt>Moving bookmark &#39;...&#39; to Trash</tt>&quot; for every bookmark you already have in your Speed Dial. After running the example, you can go to the web interface in My Opera and check that those bookmarks are now in the Trash folder.

<h2>Beyond the basics</h2>

<p>So far we have only covered the basics of bookmarks and Speed Dial. For more information, you can read the <a href="http://github.com/operasoftware/pyoperalink/">pyoperalink</a> documentation, the <a href="http://www.opera.com/docs/apis/linkrest/">Opera Link API reference documentation</a>, and all the sample code in <a href="http://github.com/operasoftware/">Opera&#39;s GitHub account</a>.</p></li></ul></p>
