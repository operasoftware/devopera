Title: Introducing the Opera Link API
----
Date: 2010-10-14 11:25:26
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

<p><a href="http://opera.com/link">Opera Link</a> - our service for synchronising your browser information such as bookmarks and history across different locations - has been around for some years now, but so far it has been available
only in Opera products. That has finally changed! With the Opera Link API now
available, you can now develop your own applications that can both read and
write Opera Link data.</p>

<p>The Opera Link API is accessible through HTTP and is REST-based. It can output
either XML or JSON, and you can use whatever server-side language you are
comfortable with when writing your application. The authentication uses OAuth,
which means each application you write will have its own application key and
can be identified uniquely.</p>

<p>Later articles will showcase examples of libraries in different languages, and
look at our OAuth implementation in more detail. This article will provide a
gentle introduction to using the main features of the Opera Link API.</p>

<p class="note">Note: This article is really intended to familiarise readers with the basic commands available inside the Opera Link API, and how it works. Subsequent articles will cover development of actual applications.</p>

<p>Contents:

<ul>
<li><a href="#debugger">The linkapidebugger tool</a></li>
<li><a href="#debuggerdetails">Simple debugger command examples</a></li>
<li><a href="#apibasics">API basics</a>
  <ul>
    <li><a href="#firstbookmark">Creating your first bookmark</a></li>
    <li><a href="#movingaround">Moving around</a></li>
    <li><a href="#trash">Trashing bookmarks</a></li>
    <li><a href="#speeddial">Checking your SpeedDial</a></li>
    <li><a href="#notes">Notes</a></li>
  </ul>
</li>
<li><a href="#summary">Summary</a></li>

</ul>

<h2 id="debugger">The linkapidebugger tool</h2>


<p>To follow the examples in this article, we have created a simple Python command
line tool that allows you to easily make requests to the API server. To use it,
you need to:</p>

<ul>
  <li><a href="linkapidebugger.zip">Download the linkapidebugger tool</a> to your local drive</li>
  <li>Make sure you have an Opera account (also known as a My Opera, Dev Opera, or Opera Link account). If you don&#39;t have one, you can <a href="http://my.opera.com/community/signup/">get an Opera account from My Opera</a></li>
  <li>Install a working Python installation on your machine. Many platforms come with Python already installed, but you might want to install the latest version from <a href="http://www.python.org/">the Python site</a> anyway just in case.</li>
  <li>Unzip the linkapidebugger into its own directory</li>
</ul>

<p>Once you have everything in place, you have to execute the tool the
first time to connect to your account by opening the command line/terminal, accessing the directory you unpacked the tool into and entering the following command:</p>

<pre><code>python linkapidebugger.py</code></pre>

<p>Now go to the URL it gives, which will look something like this:</p>

<pre><code>https://auth.opera.com/service/oauth/authorize?oauth_token=RTw5HwxMd89yym1U1FUd3wLPPtY06qIQ&amp;oauth_callback=oob</code></pre>

<p>Enter your Opera account details and select <em>Grant access</em> — the page will respond by giving you a verifier code. If you go back to the command line/terminal you&#39;ll see that it is asking you to enter the verifier code. Enter the code at the blinking prompt, and press Enter/Return, and the standard prompt will come up.</p>

<p>Now you can use the linkapidebugger to follow the rest of the article.</p>

<h2 id="debuggerdetails">Simple debugger command examples</h2>

<p>The utility has two modes of operation: GET and POST. The GET method simply
receives a URL and makes the request. The POST method needs an arbitrary number
of named parameters that will be read from the terminal. To make a GET request,
simply give the URL as a parameter:</p>

<pre><code>python linkapidebugger.py https://link.api.opera.com/rest/bookmark/children</code></pre>

<p>To make a POST request, on the other hand, you need to give the URL to POST to,
and add POST as a second parameter:</p>

<pre><code>python linkapidebugger.py https://link.api.opera.com/rest/bookmark/children POST</code></pre>

<p>linkapidebugger will then ask you for all the parameters to send in with the POST request. It reads extra parameters from the keyboard, one per line, eg <code>api_method=delete</code>. You end your data with an empty line, ie just press Enter/Return twice after your data has finished:</p>

<pre><code>api_method=create
item_type=bookmark
title=Bookmark title
uri=http://example.com
 
[now press enter/return twice to complete the parameters list]</code></pre>

<p>The full terminal input and output will look like this: (command entries in black/strong emphasis, program outputs in gray font with no emphasis):</p>

<pre><code><span style="color:gray;">$&gt;</span> <strong style="font-weight:bold;">python linkapidebugger.py https://link.api.opera.com/rest/bookmark/children</strong>
<span style="color:gray;">Response properties
===================
{&#39;status&#39;: &#39;200&#39;, &#39;content-location&#39;: &#39;https://link.api.opera.com/rest/bookmark/children?oauth_nonce=34340886&amp;oauth_timestamp=1286984865&amp;oauth_consumer_key=test_desktop_key&amp;oauth_signature_method=HMAC-SHA1&amp;oauth_version=1.0&amp;oauth_token=ATvn1SKopv1i0lA5CaELgWiaqgI5S7w5&amp;oauth_signature=yHW3jrERm2eBGACLxkDu3L1lWnk%3D&#39;, &#39;transfer-encoding&#39;: &#39;chunked&#39;, &#39;vary&#39;: &#39;Authorization&#39;, &#39;server&#39;: &#39;Apache/2.2.9 (Debian) mod_wsgi/2.5 Python/2.5.2&#39;, &#39;date&#39;: &#39;Wed, 13 Oct 2010 15:47:45 GMT&#39;, &#39;content-type&#39;: &#39;application/json; charset=utf-8&#39;}

Response body
=============
[
    {
        &quot;item_type&quot;: &quot;bookmark_folder&quot;, 
        &quot;id&quot;: &quot;4E1601F6F30511DB9CA51FD19A7AAECA&quot;, 
        &quot;properties&quot;: {
            &quot;show_in_panel&quot;: false, 
            &quot;title&quot;: &quot;Trash&quot;, 
            &quot;show_in_personal_bar&quot;: false, 
            &quot;panel_pos&quot;: -1, 
            &quot;type&quot;: &quot;trash&quot;, 
            &quot;personal_bar_pos&quot;: -1
        }
    }, 

[...followed by loads more JSON bookmark entries...]</span></code></pre>

<p class="note">Note: in future examples, we will just show the complete listing like this, so you can easily reference what you need to enter, and what the response should be.</p>

<h2 id="apibasics">API basics</h2>

<p>The Opera Link API allows you to access the data stored in your Opera Link
account. You can query specific items like a single bookmark or note, parts of
your data like a whole bookmark folder, or your whole data set, and also make
changes to the data and add new items. With it you can write your own
applications to manage your bookmarks, display or share your SpeedDial on a
website, import or export your data in whatever format you need, etc.</p>

<p>The Opera Link API supports different data types. The current list is
bookmarks, SpeedDial and notes, but this list will be extended in the future.
Some operations are common to all data types, while others behave differently
or are only available for certain data types. <a href="http://www.opera.com/docs/apis/linkrest/">The complete Link API reference
documentation</a> is available on our documentation pages.</p>

<p>Basically, all data is available in URLs under
<code>https://link.api.opera.com/rest/&lt;data_type&gt;</code>.  Every item has a unique ID
that identifies it, and when operating on a specific piece of data, you
typically use a URL like
<code>https://link.api.opera.com/rest/&lt;data_type&gt;/&lt;unique_id&gt;</code>. You&#39;ve already seen some basic examples in the Simple debugger command examples section above. Below we will look at some examples specific to all the different API features.</p>

<p>As a general rule, GET requests only query information (ie they never make any
changes to your data), while POST requests are used to modify data (ie they
create, update or delete items).</p>

<p>If you add <code>?api_output=xml</code> at the end of the query URL, you will get XML output.  If you want the whole contents of your account (not just the
root folder contents) you can ask for <code>descendants</code> instead of <code>children</code>.</p>

<h3 id="firstbookmark">Creating your first bookmark</h3>

<p>The next example will create a new bookmark in your root folder. To do that,
you have to fire a POST request to <code>https://link.api.opera.com/rest/bookmark/</code>
containing at the very least the <code>api_method</code>, <code>item_type</code>, <code>title</code> and <code>uri</code> parameters.</p>

<p>The parameter <code>api_method</code> should have the value <code>create</code>. The parameter
<code>item_type</code> should have the value <code>bookmark</code>. <code>title</code> and <code>uri</code> can have whatever title and URI you want for your new bookmark. For example:</p>

<p><code>python linkapidebugger.py https://link.api.opera.com/rest/bookmark/ POST</code></p>

<p><code>api_method=create</code><br />
<code>item_type=bookmark</code><br />
<code>title=My first API bookmark</code><br />
<code>uri=http://opera.com</code></p>

<p>The complete terminal input and output will look something like this:</p>

<pre><code><span style="color:gray;">$&gt;</span> <strong style="font-weight:bold;">python linkapidebugger.py https://link.api.opera.com/rest/bookmark/ POST</strong>
<span style="color:gray;">Reading extra parameters from the keyboard, one per line
(e.g. &#39;api_method=delete&#39;)
End with an empty line (ie. just pressing ENTER twice after your data)</span>
<strong style="font-weight:bold;">api_method=create
item_type=bookmark
title=My first API bookmark
uri=http://opera.com</strong>
 
<span style="color:gray;">Response properties
===================

{&#39;status&#39;: &#39;200&#39;, &#39;content-length&#39;: &#39;241&#39;, [... more output ...]}
 
Response body
=============

[
  {
    &quot;item_type&quot;: &quot;bookmark&quot;, 
    &quot;id&quot;: &quot;319A38DB4581426DA48CAB58C2528FD4&quot;, 
    &quot;properties&quot;: {
      &quot;created&quot;: &quot;2010-08-18T12:59:13Z&quot;, 
      &quot;uri&quot;: &quot;http://opera.com&quot;, 
      &quot;title&quot;: &quot;My first API bookmark&quot;
    }
  }
]</span></code></pre>

<p>Note that the output will be the newly created bookmark, including a unique ID
for it generated by the server. You will need this ID to further manipulate the
element later.</p>

<p>Try repeat your first GET request from above now: you should see your new
bookmark popping up in the results.</p>

<h3 id="movingaround">Moving around</h3>

<p>Now let&#39;s look at something slightly different - say that you want to move
some bookmarks to a different folder, or simply change their order. To do this,
you can use the API method <code>move</code>. This method moves a given item to a position
relative to another item. For example, it allows us to move item A before,
after, or inside, item B (the latter works only if item B is a folder). So,
say that the bookmark you just created got the id
<code>319A38DB4581426DA48CAB58C2528FD4</code> and you wanted to move it before the Trash
folder (you need to substitute your own ID in the request and parameter below). To do this you can issue a POST request something like so:</p>

<p><code>python linkapidebugger.py https://link.api.opera.com/rest/bookmark/319A38DB4581426DA48CAB58C2528FD4/ POST</code></p>

<p>And try parameters like this:</p>

<p><code>api_method=move</code><br />
<code>reference_item=4E1601F6F30511DB9CA51FD19A7AAECA</code><br />
<code>relative_position=before</code></p>

<p>The complete input and output looks like this:</p>

<pre><code><span style="color:gray;">$&gt;</span> <strong style="font-weight:bold;">python linkapidebugger.py https://link.api.opera.com/rest/bookmark/319A38DB4581426DA48CAB58C2528FD4/ POST</strong>
<span style="color:gray;">Reading extra parameters from the keyboard, one per line
(e.g. &#39;api_method=delete&#39;)
End with an empty line (ie. just pressing ENTER twice after your data)</span>
<strong style="font-weight:bold;">api_method=move
reference_item=4E1601F6F30511DB9CA51FD19A7AAECA
relative_position=before</strong>
 
<span style="color:gray;">  [... same output as above ...]</span></code></pre>

<p>Again, try issuing the first GET request again to check your updated bookmarks.</p>

<h3 id="trash">Trashing bookmarks</h3>

<p>Another common operation will be moving bookmarks to the Trash folder. You can
just move them yourself with the <code>move</code> command, but as it&#39;s a relatively
common operation, there is a handy shortcut available to do it: the <code>trash</code>
command. To move a bookmark to the Trash, simply issue a POST request to the
appropriate element with the <code>api_method</code> set to <code>trash</code>, like so (again, substitute your own ID):</p>

<p><code>python linkapidebugger.py https://link.api.opera.com/rest/bookmark/319A38DB4581426DA48CAB58C2528FD4/ POST</code></p>

<p>And enter the following parameters:</p>

<p><code>api_method=trash</code></p>

<p>The complete input and output is as follows:</p>

<pre><code><span style="color:gray;">$&gt;</span> <strong style="font-weight:bold;">python linkapidebugger.py https://link.api.opera.com/rest/bookmark/319A38DB4581426DA48CAB58C2528FD4/ POST</strong>
<span style="color:gray;">Reading extra parameters from the keyboard, one per line
(e.g. &#39;api_method=delete&#39;)
End with an empty line (ie. just pressing ENTER twice after your data)</span>
<strong style="font-weight:bold;">api_method=trash</strong>
 
<span style="color:gray;">  [... same output as above ...]</span></code></pre>

<p>If you now issue a GET <code>children</code> request, you won&#39;t see the element — you&#39;ll only see the trash folder. You will
have to use the <code>descendants</code> request to get the contents of Trash, or use the
<code>children</code> request giving the ID of the Trash folder like so:</p>

<p><code>python linkapidebugger.py https://link.api.opera.com/rest/bookmark/4E1601F6F30511DB9CA51FD19A7AAECA/children/</code>

<p>the complete input and output looks like so:</p>

<pre><code><span style="color:gray;">$&gt;</span> <strong style="font-weight:bold;">python linkapidebugger.py https://link.api.opera.com/rest/bookmark/4E1601F6F30511DB9CA51FD19A7AAECA/children/</strong>
<span style="color:gray;">[
  {
    &quot;item_type&quot;: &quot;bookmark&quot;, 
    &quot;id&quot;: &quot;319A38DB4581426DA48CAB58C2528FD4&quot;, 
    &quot;properties&quot;: {
      &quot;created&quot;: &quot;2010-08-18T12:59:13Z&quot;, 
      &quot;uri&quot;: &quot;http://opera.com&quot;, 
      &quot;title&quot;: &quot;My first API bookmark&quot;
    }
  }
]</span></code></pre>


<h3 id="speeddial">Checking your SpeedDial</h3>

<p>But enough about bookmarks. After all, there are more data types covered by the
API! We&#39;ll now move on to SpeedDial, which works a bit differently from
bookmarks. Here, items don&#39;t get a unique id generated by the server. Instead,
the unique id for the item is simply its position in the SpeedDial. If you want
to check the contents of your SpeedDial, you can simply issue a <code>children</code>
request like this:</p>

<p><code>python linkapidebugger.py https://link.api.opera.com/rest/speeddial/children/</code></p>

<p>The input and output looks like so:</p>

<pre><code><span style="color:gray;">$&gt;</span> <strong style="font-weight:bold;">python linkapidebugger.py https://link.api.opera.com/rest/speeddial/children/</strong>
<span style="color:gray;">

Response properties
===================

{&#39;status&#39;: &#39;200&#39;, [... more output ...]}
 
Response body
=============

[
  {
    &quot;item_type&quot;: &quot;speeddial&quot;, 
    &quot;id&quot;: &quot;1&quot;, 
    &quot;properties&quot;: {
      &quot;reload_interval&quot;: &quot;2147483646&quot;, 
      &quot;title&quot;: &quot;Opera Portal beta&quot;, 
      &quot;uri&quot;: &quot;http://redir.opera.com/speeddials/portal/&quot;, 
      &quot;reload_only_if_expired&quot;: &quot;0&quot;, 
      &quot;reload_enabled&quot;: &quot;0&quot;
    }
  },
   
    [... more SpeedDial entries ...]
]</span></code></pre>

<p>Creating entries in your SpeedDial is very easy, although you need to make sure you use empty speed dial positions, otherwise, you&#39;ll get an error! For example, to create a new speed dial entry in position 6, you&#39;d use this request:</p>

<p><code>python linkapidebugger.py https://link.api.opera.com/rest/speeddial/6/ POST</code></p>

<p>And parameters like this:</p>

<p><code>api_method=create</code><br />
<code>title=My first SpeedDial entry</code><br />
<code>uri=http://my.opera.com</code></p>

<p>the full input and output will look something like this:</p>

<pre><code><span style="color:gray;">$&gt;</span> <strong style="font-weight:bold;">python linkapidebugger.py https://link.api.opera.com/rest/speeddial/6/ POST</strong>
<span style="color:gray;">Reading extra parameters from the keyboard, one per line
(e.g. &#39;api_method=delete&#39;)
End with an empty line (ie. just pressing ENTER twice after your data)</span>
<strong style="font-weight:bold;">api_method=create
title=My first SpeedDial entry
uri=http://my.opera.com</strong>
 
<span style="color:gray;">[
  {
    &quot;item_type&quot;: &quot;speeddial&quot;, 
    &quot;id&quot;: &quot;6&quot;, 
    &quot;properties&quot;: {
      &quot;position&quot;: &quot;6&quot;, 
      &quot;uri&quot;: &quot;http://my.opera.com&quot;, 
      &quot;title&quot;: &quot;My first SpeedDial entry&quot;
    }
  }
]</span></code></pre>

<h3 id="notes">Notes</h3>

<p>Notes work almost exactly like bookmarks, but instead of the <code>title</code> parameter, they have <code>content</code>. Notes also have an optional <code>uri</code> field, in this case it represents the URI the content has been taken from. Nevertheless notes should be trivial to use if you have already mastered bookmarks. For example, checking the notes in the root folder is done like so:</p>

<pre><code><span style="color:gray;">$&gt;</span> <strong style="font-weight:bold;">python linkapidebugger.py https://link.api.opera.com/rest/note/children/</strong>
 
<span style="color:gray;">Response properties
===================

{&#39;status&#39;: &#39;200&#39;, &#39;content-length&#39;: &#39;191&#39;, [... more output ...]}
 
Response body
=============
 
[
  {
    &quot;item_type&quot;: &quot;note_folder&quot;, 
    &quot;id&quot;: &quot;A9AAFED0976111DC85AC8946BEF8D2DC&quot;, 
    &quot;properties&quot;: {
      &quot;item_type&quot;: &quot;trash&quot;, 
      &quot;title&quot;: &quot;Trash&quot;
    }
  }
]</span></code></pre>

<h2 id="summary">Summary</h2>


<p>This has been just a quick introduction to the Opera Link API to get you
started. Be sure to check the reference documentation for the full details and
possibilities, and watch this space for further articles covering the API and
OAuth.</p>
                                                                                </p></p>
