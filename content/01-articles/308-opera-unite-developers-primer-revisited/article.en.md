Title: Opera Unite developer’s primer — revisited
----
Date: 2009-10-14 06:01:41
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Unite will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<p class="comment">Content contributions by Arve, Chris, Zi Bin and Lissy.</p>

<h2>Introduction</h2>
  
  <p>Opera Unite features a Web server running inside the Opera browser, which allows you to do some amazing things. At the touch of a button, you can share images, documents, video, music, games, collaborative applications and all manner of other things with your friends and colleagues. We first released an <a href="http://labs.opera.com/news/2009/06/16/">Opera Labs build</a> containing an early version of the Opera Unite server back in 2009, and now it&#39;s included in the <a href="http://www.opera.com/browser/">latest version of Opera for desktop</a> (although not enabled by default).</p>

  <p>This article gets you started on the road to Opera Unite application development — it describes how the Opera Unite server in Opera works and how it can be used. Below I will briefly recap some of the basic concepts related to Opera Unite, show how you can enable the Web server in your browser, and give an example of how to write a simple Opera Unite blog application.</p>

  <p>The contents of this article are as follows:</p>

  <ul>
    <li><a href="#concepts">Basic concepts</a>
      <ul>
        <li><a href="#conceptsunite">What is Opera Unite?</a></li>
        <li><a href="#conceptsproxy">Opera Unite Proxy</a></li>
        <li><a href="#conceptsapplications">Opera Unite applications</a></li>
      </ul>
    </li>
    <li><a href="#enabling">Enabling your Web server</a></li>
    <li><a href="#application">Creating an Opera Unite Application: A simple blog</a>
      <ul>
        <li><a href="#applicationstructure">Files and folders in the application</a></li>
        <li><a href="#applicationconfig">Configuring the application: config.xml</a></li>
        <li><a href="#applicationindex">Tying it together: index.html</a></li>
        <li><a href="#applicationscript">Creating the script: script.js</a>
          <ul>
            <li><a href="#scriptlisteners">The request event listeners</a></li>
            <li><a href="#scriptlist">Showing a list of blog entries</a></li>
            <li><a href="#scriptentry">Showing a single entry</a></li>
            <li><a href="#scriptfrom">Showing the form for adding an entry</a></li>
            <li><a href="#scriptsave">Saving an entry</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#using">Using your Opera Unite application</a></li>
    <li><a href="#viewing">Viewing your Opera Unite application</a></li>
    <li><a href="#uploading">Publishing your Opera Unite application to unite.opera.com</a>
      <ul>
        <li><a href="#uploadingbefore">Before publishing</a></li>
        <li><a href="#uploadingprocess">Publishing your application</a></li>
        <li><a href="#uploadinghowto">How can I get people to try my application?</a></li>
        <li><a href="#uploadingapproval">Approval of Opera Unite applications</a>
          <ul>
            <li><a href="#uploadingguides">What are the guidelines for approval of an Opera Unite application?</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#readmore">Further reading</a></li>
  </ul>
 

  <h2 id="concepts">Basic concepts</h2>

  <p>In this section we’ll run through the basics of how Opera Unite works, and how Opera Unite applications are constructed.</p>

  <h3 id="conceptsunite">What is Opera Unite?</h3>

  <p>Opera Unite is a Web server running inside the Opera Web browser, allowing the user to install applications and share these applications with their friends and colleagues (or everyone, if they wish). The Opera Unite server provides a proxy between the server and its clients (found at <a href="http://unite.opera.com/">unite.opera.com</a>) to avoid the need for any special firewall configuration.</p>

  <h3 id="conceptsproxy">Opera Unite proxy</h3>

  <p>Traditionally when a user runs a Web server in a home network the
  network has a device that acts as a firewall, which
  needs to be configured separately, as illustrated in Figure 1.</p>

  <img src="http://forum-test.oslo.osa/kirby/content/articles/308-opera-unite-developers-primer-revisited/traditio.jpg" alt="traditional web server setup" />
  <p class="comment">Figure 1: A traditional Web server setup</p>

  <p>Typically, the user will need to open ports and enable port forwarding to a local computer in order for people outside the firewall to be able to access the server.</p>

  <p>However, when the user is using Opera Unite, no configuration is
  needed, as seen in Figure 2.</p>

  <img src="http://forum-test.oslo.osa/kirby/content/articles/308-opera-unite-developers-primer-revisited/operauni.jpg" alt="server set up when using the Opera Unite server in your browser" />
  <p class="comment">Figure 2: The set up when using the Opera Unite server in your browser</p>

  <p>The Web server initiates a connection to the proxy, which uses this to pass information back about incoming requests.</p>

<p class="note">Note that the proxy is really only a fallback mechanism to ensure that data can be delivered in case <abbr title="Network Address Translation">NAT</abbr> traversal fails. Opera Unite has support for <abbr title="Universal Plug and Play">UPnP</abbr>, which allows you to share your data using direct connections to your computer, if available. This can make loading speeds for your applications faster as they will bypass the proxy server. However, as it is up to each application to load content using the direct connection, it may not always run applications faster. UPnP has no authentication mechanism, and assumes that local systems and their users are completely trustworthy.</p>

  <h3 id="conceptsapplications">Opera Unite applications</h3>

<p>Opera Unite applications have a <code>config.xml</code> file containing fundamental information about the application, and a fairly standard web site directory structure. In these respects they are very similar to <a href="http://dev.opera.com/articles/view/creating-your-first-opera-widget/">Opera Widgets</a>, although the way Opera Unite applications are run/used is very different to Opera Widgets. They also differ in other ways — unlike in Opera Widgets, Opera Unite <code>config.xml</code> files must also contain a <code>feature</code> element like this:</p>

<pre><code>&lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
  &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
  &lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
&lt;/feature&gt;</code></pre>

  <p>In this case, a special JavaScript object — <code>opera.io.webserver</code> — becomes available to the application. See the <a href="http://dev.opera.com/libraries/unite/">Opera Unite Web Server JavaScript API</a> for more information.</p>

  <p>As the Opera Widgets technology is used, the Opera Unite application can provide the person running the Opera Unite server with a simple way of controlling and configuring it, all using standard HTML, CSS and JavaScript. Opera Unite applications do, however, get access to functionality normally not present in widgets or Web pages, for example a 
  <a title="FileI/O JavaScript API" href="http://dev.opera.com/libraries/fileio/">sandboxed file system</a>.</p>
  
<p class="note">For those of you who are interested in learning more about Opera Widgets, you can <a href="http://dev.opera.com/addons/widgets/">find more Widgets articles on dev.opera</a>.</p>

  <p>Let’s move on, get Opera Unite enabled, and start building up a simple Opera Unite application.</p>

  <h2 id="enabling">Enabling your Web server</h2>

  <p>For security and performance reasons, the Web server does not run by default when Opera is started. You enable the server by selecting Tools &gt; Opera Unite Server &gt; Enable Opera Unite, or by opening an Opera Unite application. When you do so, a dialog pops up asking you to specify a username and password. This is your My Opera username and password.</p>

  <p class="note">Note that only My Opera usernames containing valid URL characters will work with Opera Unite. Invalid characters include “/”, “.”, “_” and space.</p>

  <p>In the next wizard screen, you need to define a device. You may select a device name from the drop-down list, or specify your own. The device name is used to identify your server via the proxy. It will be available via a URL like the following:</p>

  <pre><code>http://devicename.username.proxyaddress/applicationname</code></pre>

  <p>So, to visit the application <code>test</code> on the server <code>your_device</code> on
  <code>operaunite.com</code>, the URL becomes:</p>

  <pre><code>http://your_device.your_username.operaunite.com/test</code></pre>

 <h2 id="application">Creating the Opera Unite application: A simple blog</h2>

  <p>Here is a short walk-through for creating a simple blogging
  application that allows the user to write blog entries. Once stored,
  the entries are immediately available to the world through the Opera Unite
  server.</p>

  <p>The application has two parts: One is a configuration view for the application, where the owner can configure and control it. The other part is a series of Web pages generated or served by the application, which are visible to the user.</p>

  <p>For those who just can’t wait, you can download the <a href="blog.ua">Opera Unite blog source code</a> and start playing with it already. It is packaged with a <code>.ua</code> extension, the default extension for Opera Unite applications. You can unzip the package to look at the source code or drag the package into the Opera browser to fire up the Opera Unite blog example.</p>

  <h3 id="applicationstructure">Files and folders in the application</h3>

  <p>The blog application will contain the files and folders shown in Figure 3:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/308-opera-unite-developers-primer-revisited/structur.jpg" alt="The directory structure of the application" />
  <p class="comment">Figure 3: The directory structure of the application</p>

  <ul>
    <li><code>config.xml</code>: Configuration file for the application.</li>
    <li><code>index.html</code>: Starting logic for the application, including scripts.</li>
    <li><code>script/script.js</code>: The actual Web server code.</li>
  </ul>

  <p>Of these, only <code>config.xml</code> and <code>index.html</code> are required.</p>

  <p>You may include a <code>public_html</code> folder, which is a magic 
  folder in Opera Unite applications. Normally, files and folders inside your application are not available to users requesting your application, so if you want to distribute a separate stylesheet, static images and similar, those files go inside here. These files are mapped to the relative root of your application, so a file named <var>cats.png</var> inside the <code>public_html</code> folder of the <code>helloOperaUnite</code> application will be available at</p>

  <pre><code>http://your_device.your_username.operaunite.com/helloOperaUnite/cats.png</code></pre>

  <h3 id="applicationconfig">Configuring the application: config.xml</h3>

  <p>This application will be packaged in the same way as an Opera Widget, so we’ll need to define a <code>config.xml</code> file. The file is just like a normal Opera Widgets’ <code>config.xml</code> file, with a few extra details. In order to identify your application as an Opera Unite application, you need to add a <code>feature</code> element to the <code>widget</code> element in your <code>config.xml</code> file.</p>

  <p class="note">Please note that Opera Widgets are packaged as regular zip files and renamed to use the extension <code>.wgt</code>, whereas Opera Unite applications are packaged and renamed to use the extension <code>.ua</code> to denote “Unite Application”.</p>

<pre><code>&lt;widget&gt;
  &lt;widgetname&gt;My blogging application&lt;/widgetname&gt;
  &lt;description&gt;Blogging application example from the Opera Unite applications primer.&lt;/description&gt;
  &lt;author&gt;
    &lt;name&gt;Hans S. Toemmerholt&lt;/name&gt;
    &lt;organisation&gt;Opera Software ASA&lt;/organisation&gt;
  &lt;/author&gt;
  &lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
    &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
    &lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

  <p>The <code>widgetname</code> element of the application also acts as its application name. This is the name which will be shown to the user when installing and using the application.</p>

  <p>You may also add a <code>servicepath</code> element to the <code>config.xml</code> file.
  The content of this element must be a valid part of a URI and defines what the <em>name of your application will be in the URI</em> of the application.
  If this element is not present, Opera will attempt to use the content of the 
  <code>widgetname</code> element as the URI component. If this name is not valid as a URI component, the installation of the application will fail with an error message.</p>

  <p>When the application is packaged and run, the above <code>config.xml</code> will make it respond to</p>

  <pre><code>http://your_device.your_username.operaunite.com/blog/</code></pre>

  <h3 id="applicationindex">Tying it together: index.html</h3>

  <p>An application has no UI beyond the Web pages it produces. <code>index.html</code> is the starting point for the application, so that <em>is</em> the UI. In our example, we’ll use a minimal HTML 5 file with a reference to the script we’re using:</p>

  <pre><code>&lt;!DOCTYPE html&gt;
&lt;script src=&quot;script/script.js&quot;&gt;&lt;/script&gt;</code></pre>

  <h3 id="applicationscript">Creating the script: script.js</h3>

  <p>Note the link to the script file <var>script.js</var> in the
  above code snippet. The Web server listens to requests made from
  clients (users browsing the URL of the application) and creates
  responses that are sent back. The response is typically a
  generated Web page containing information.</p>

  <p>The functionality in Opera Unite is exposed to developers through a set of <a title="Opera Unite Web Server JavaScript API" href="http://dev.opera.com/libraries/unite/">JavaScript APIs</a>, including objects representing the Web server, connections, incoming requests and outgoing responses.</p>

  <p>What follows is a walk-through of the script.</p>

  <h4 id="scriptlisteners">The request event listeners</h4>

  <p>A Web server handles requests from clients and sends responses back
  to them. The Opera Unite Web server is <em>event-based</em> and will raise a DOM event in the application every time a Web browser makes a connection to the server asking for files related to the Opera Unite application. In order to respond to such events, we need to set up event listeners. This is done in <code>window.onload</code>:</p>

<pre><code>var webserver;
var entries = [];
window.onload = function () {
  webserver = opera.io.webserver
  if (webserver)
  {
    // Handle requests for various URLs
    webserver.addEventListener(&#39;_index&#39;, showEntryList, false);
    webserver.addEventListener(&#39;entry&#39;, showEntry, false);
    webserver.addEventListener(&#39;form&#39;, showForm, false);
    webserver.addEventListener(&#39;save&#39;, saveEntry, false);
  }
}</code></pre>

  <p>What is going on here?</p>

  <p>We are checking if the application is actually a web application, by
  checking for the <code>webserver</code> object. If it is present, we add four event listeners — <code>_index</code>,
  <code>entry</code>, <code>form</code> and <code>save</code>.</p>

  <p>When these listeners are set up, the application will now call one of
  the functions each time a user visits one of the following URLs:</p>

<pre><code>http://your_device.your_username.operaunite.com/blog/
http://your_device.your_username.operaunite.com/blog/entry/
http://your_device.your_username.operaunite.com/blog/form/</code></pre>

  <p>The <code>_index</code> request is special, and means a request to the root path of the application. Also note that, as we shall see, the user will not visit “save” directly — only through the form.</p>

  <h4 id="scriptlist">Showing a list of blog entries</h4>

  <p>The code for the <code>_index</code> request, the <code>showEntryList</code> function, is quite simple. When receiving a request, it writes back a HTML page with a list of the saved entries.</p>

<pre><code>function showEntryList(e)
{
  var response = e.connection.response;
  response.write( &#39;&lt;!DOCTYPE html&gt;&#39;
    + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Entries&lt;/title&gt;&lt;/head&gt;&#39;
    + &#39;&lt;body&gt;&lt;ul&gt;&#39;
  );

  for ( var i = 0, entry; entry = entries[i]; i++ )
  {
    response.write(&#39;&lt;li&gt;&#39;+entry.date+&#39;: &lt;a href=&quot;entry?id=&#39;+i+&#39;&quot;&gt;&#39;+entry.title+&#39;&lt;/a&gt;&lt;/li&gt;&#39;);
  }

  response.write(&#39;&lt;/ul&gt;&#39;
    + &#39;&lt;p&gt;&lt;a href=&quot;form&quot;&gt;Add en entry&lt;/a&gt;&lt;/p&gt;&#39;
    + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
  );
  response.close();
}</code></pre>

<p>Line-by-line, the script does the following:</p>

<p>It first gets a reference to the <code>response</code> object. This is the object that holds the methods necessary to send output back to the client:</p>

<pre><code>var response = e.connection.response;</code></pre>

  <p>The <code>write</code> method then writes the content to the web
  browser that requested the page. First, we write a simple HTML shell:</p>

<pre><code>response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
  + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Entries&lt;/title&gt;&lt;/head&gt;&#39;
  + &#39;&lt;body&gt;&lt;ul&gt;&#39;
);</code></pre>

  <p>The existing blog entries are marked up as a list with links to
  the individual entries:</p>

<pre><code>for ( var i = 0, entry; entry = entries[i]; i++ )
{
  response.write(&#39;&lt;li&gt;&#39;+entry.date+&#39;: &lt;a href=&quot;entry?id=&#39;+i+&#39;&quot;&gt;&#39;+entry.title+&#39;&lt;/a&gt;&lt;/li&gt;&#39;);
}</code></pre>

  <p>Finally, we close the connection.</p>

<pre><code>response.close();</code></pre>

  <h4 id="scriptentry">Showing a single entry</h4>

  <p>Next, we need to output something when the user clicks a 
  link to an entry:</p>

<pre><code>function showEntry(e)
{
  var index = e.connection.request.queryItems[&#39;id&#39;][0];
  var entry = entries[index];
  // ToDo Should have error handling here
  var response = e.connection.response;
  response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
    + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;&#39;+entry.title+&#39;&lt;/title&gt;&lt;/head&gt;&#39;
    + &#39;&lt;body&gt;&lt;h1&gt;&#39;+entry.title+&#39;&lt;/h1&gt;&#39;
    + &#39;&lt;p&gt;&#39;+entry.date+&#39;&lt;/p&gt;&#39;
    + &#39;&lt;div&gt;&#39;+entry.text+&#39;&lt;/div&gt;&#39;
    + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
  );
  response.close();
}</code></pre>

  <p>Line-by-line, the script does the following:</p>

  <p>It first gets a reference to the <code>request</code> object, which
  contains information about the incoming request:</p>

<pre><code>var request = e.connection.request;</code></pre>

  <p>CGI GET arguments are stored in the <code>queryItems</code> 
  property of the request. We get the <code>id</code> of the entry to display. 
  Note that the the same CGI argument may have multiple values: </p>

<pre><code>var index = request.queryItems[&#39;id&#39;][0];</code></pre>

  <p>Next we get the corresponding blog entry:</p>

<pre><code>var entry = entries[index];</code></pre>

  <p>The <code>write</code> method then writes the content to the web
  browser that requested the page. The title, date and text of the blog entry
  are wrapped in suitable markup:</p>

<pre><code>response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
  + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;&#39;+entry.title+&#39;&lt;/title&gt;&lt;/head&gt;&#39;
  + &#39;&lt;body&gt;&lt;h1&gt;&#39;+entry.title+&#39;&lt;/h1&gt;&#39;
  + &#39;&lt;p&gt;&#39;+entry.date+&#39;&lt;/p&gt;&#39;
  + &#39;&lt;div&gt;&#39;+entry.text+&#39;&lt;/div&gt;&#39;
  + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
);</code></pre>


  <h4 id="scriptfrom">Showing the form for adding an entry</h4>

  <p>When you click the “Add an entry” link, a classic Web form is displayed:</p>

<pre><code>function showForm(e)
{
  var response = e.connection.response;
  response.write(&#39;&lt;!DOCTYPE html&gt;&#39;
    + &#39;&lt;html&gt;&lt;head&gt;&lt;title&gt;Add entry&lt;/title&gt;&lt;/head&gt;&#39;
    + &#39;&lt;body&gt;&lt;h1&gt;Add entry&lt;/h1&gt;&#39;
    + &#39;&lt;form method=&quot;post&quot; action=&quot;save&quot;&gt;&#39;
    + &#39;&lt;p&gt;&lt;label for=&quot;namefield&quot;&gt;Title&lt;/label&gt; &lt;input id=&quot;nameField&quot; type=&quot;text&quot; name=&quot;title&quot;&gt;&lt;/p&gt;&#39;
    + &#39;&lt;p&gt;&lt;label for=&quot;textArea&quot;&gt;Text&lt;/label&gt; &lt;textarea id=&quot;textArea&quot; name=&quot;text&quot;&gt;&lt;/textarea&gt;&lt;/p&gt;&#39;
    + &#39;&lt;p&gt;&lt;input type=&quot;submit&quot; name=&quot;Add entry&quot;&gt;&lt;/p&gt;&#39;
    + &#39;&lt;/form&gt;&#39;
    + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
  );
  response.close();
}</code></pre>

  <p>This could be a lot more complicated, eg handling error messages, adding pre-populated values, input validation and so on. Ideally you should also offer some authentication scheme to guard against potentially destructive data operations, but we’ve kept it simple to highlight the Opera Unite knowledge.</p>

  <h4 id="scriptsave">Saving an entry</h4>

  <p>Finally, when you submit the form, a new entry should be saved. For now, entries are stored in a simple array so will be lost when the application is restarted, but it wouldn’t be so hard to extend the example to provide a means of retaining the blog entries.</p>

<pre><code>function saveEntry(e)
{
  var request = e.connection.request
  var response = e.connection.response;
  // Get POST data
  var title = request.bodyItems[&#39;title&#39;][0];
  var text = request.bodyItems[&#39;text&#39;][0];
  entries.push({
    &#39;title&#39; : title, 
    &#39;text&#39; : text,
    &#39;date&#39; : new Date()
  });
  // Redirect back to the index of the application
  response.setStatusCode(302);
  response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
  response.close();
}</code></pre>

  <p>Instead of <code>request.queryItems</code>, we use the <code>bodyItems</code> property to access data sent by POST, in this case the title and the content of the new entry.</p>

<pre><code>var title = request.bodyItems[&#39;title&#39;][0];
var text = request.bodyItems[&#39;text&#39;][0];</code></pre>

<p>Submitting the form saves the entry, storing it in an array:</p>
 	 
<pre><code>entries.push({
  &#39;title&#39; : title,
  &#39;text&#39; : text,
  &#39;date&#39; : new Date()
});</code></pre>

  <p>Finally, when the entry is saved, we redirect back to the list of 
  entries:</p>

<pre><code>response.setStatusCode(302);
response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
response.close();</code></pre>

<p>Here we create a standard HTTP temporary redirect back to the root of the application, represented by the <code>webserver.currentServicePath</code> property. This will fire an <code>_index</code> request, and the list of entries will then be shown.</p>

  <p>Again, in a production-level you should add error handling and status messages to this.</p>

  <h2 id="using">Using your Opera Unite application</h2>

  <p>In order to get your Opera Unite application running, you simply need to load the application. Click and drag its <code>config.xml</code> file or a zipped version of the whole application into your browser window. Alternatively, open <code>config.xml</code> from a file
  dialog. If you have not previously started any Opera Unite applications, the Opera Unite configuration dialog will now appear.</p>

<p>Double click <code>My blogging application</code> in the Opera Unite applications pane and you should get a page appearing in the browser window, as seen in Figure 4:</p>
  
   <img src="http://forum-test.oslo.osa/kirby/content/articles/308-opera-unite-developers-primer-revisited/blogmain.jpg" alt="The blog application main screen" />
   <p class="comment">Figure 4: The blog application main screen.</p>

  <p>Clicking the <em>Add an entry</em> link will take you to a form that allows you to add a blog entry, as seen in Figure 5.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/308-opera-unite-developers-primer-revisited/blogform.jpg" alt="A form for entering a new blog entry" />
   <p class="comment">Figure 5: The form for entering a new blog post.</p>


<p>When you enter some text and press submit, you are taken back to the blog main screen and your blog entry is available to view. You can click on the blog entry title to view the post. Add a few blog entries, have a play around, and you should end up with something like Figure 6.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/308-opera-unite-developers-primer-revisited/fullblog1.jpg" alt="A few blog entries entered into the blog application" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/308-opera-unite-developers-primer-revisited/fullblog2.jpg" alt="An expanded full blog entry" />
   <p class="comment">Figure 6: Our blog is now nicely populated.</p>

  <h2 id="viewing">Viewing your Opera Unite application</h2>

  <p>If you followed this guide and started the application in Opera, you 
  should now have a functioning web application. Anyone can visit it
  by going to the URL</p>

<pre><code>http://devicename.username.proxyaddress/applicationname</code></pre>

  <p>In this case, if the device is called your_device 
  and it’s running the blog application, the URL becomes:</p>

<pre><code>http://your_device.username.operaunite.com/blog</code></pre>

   <p>As you saw when running the example above, you can visit the root
  address of the device to see the installed applications on a system, for example:</p>

<pre><code>http://your_device.username.operaunite.com/</code></pre>

  <p>This page will contain information on which applications are installed
  on the system, and if the information is found in <code>config.xml</code>, it will
  also list information on each application, including author, description, etc.</p>

  <h2 id="uploading">Publishing your Opera Unite application onto unite.opera.com</h2>

<p>So now you’ve put together a cool Opera Unite application you not only want to let people use it via your Opera Unite server, you also want to make it available for others to download and install on their Opera Unite servers, right? So how do we do this? The answer is to publish them to <a href="http://unite.opera.com">unite.opera.com</a> — this is the site where Opera Unite applications are distributed. This section will show you how.</p>

<h3 id="uploadingbefore">Before publishing</h3>

<p>Before publishing you should test your application to find bugs. Test on different platforms, devices and Opera browser versions if you can. Also remember that people using your applications can do so from any browser, not just Opera, so test your application’s pages in other browsers (Firefox, Safari, etc.).</p>

<p>If you are having trouble getting your application to work and you are convinced that the actual code of the application is right, check your <code>config.xml</code> file for errors. It needs to work for the application to be accepted. Opening the file in a different browser will check it for well-formedness. Check also that your <code>config.xml</code> file contains enough information. We will use this file to supply information about your application to <a href="http://unite.opera.com">unite.opera.com</a> and to the Opera Unite application page on computers where the application is installed.</p>

<p>Also consider translating the application, if this is appropriate and you can do so.</p>

<p>Finally, take a screenshot of the application in action, as described below.</p>


<h3 id="uploadingprocess">Publishing your application</h3>

<p>To do this, you need to visit Opera’s <a href="http://unite.opera.com/applications/publish/">Publish page</a>. Select your application archive file in the archive file chooser dialog and upload it. Read through and verify the information taken from your <code>config.xml</code> file. Feel free to add more text if you wish.</p>

<p>Next up, select your screenshot in the screenshot file dialog box so that others will be able to see what your application looks like before they try it out.</p>

<p>You also need to select the target devices that your application is designed to be used with. Make sure you have tested it on those devices. Select a relevant group for your application. The last step is to select the target languages for your application. Make sure you have supplied translations for all the languages you select.</p>

<h3 id="uploadinghowto">How can I get people to try my application?</h3>

<p>When you have spent a lot of time making an application, you’ll naturally want people to try it out. To increase the number of views, use the application descriptions to tell potential users what to expect when running the application. Each application has a short description, automatically copied from your <code>config.xml</code> file, and a long description where you can provide more details and tips for use.</p>

<p>Use the short description to catch the user’s eye, stating what your application does and what value users can get out of it. It may be a tagline, but it should be informative. You should avoid phrases like “Download me” or “This is a super cool app” which are likely to turn users away. Use the long description to tell people what features your application has, how it was implemented, about changes in different versions, rules for games, and so on.</p>

<p>Finally, don’t forget to take a screenshot of your application in action. For inspiration, the <a href="http://unite.opera.com/applications/author/OperaUnite/">Opera Unite team’s applications</a> are a good place to start.</p>

<p class="note">Note that you should ideally make your screenshots 445 x 230 pixels — this is the size we have been using on the <a href="http://unite.opera.com">Opera Unite web site</a>. If you use different-sized screenshots they will be resized, which may lead to undesirable results.</p>

<h3 id="uploadingapproval">Approval of Opera Unite applications</h3>

<p>All applications need to be approved by Opera Software staff. We check for errors to ensure that our users have a good online experience, but we do not take responsibility for the content of the applications or make any guarantees about the functionality. See our <a href="http://unite.opera.com/disclaimer/">disclaimer</a>.</p>

<h4 id="uploadingguides">What are the guidelines for approval of an Opera Unite application?</h4>

<p>These are some of the guidelines that apply to applications:</p>

<ul>
  <li>The application must have a sensible name and description.</li>
  <li>The application must not have obvious bugs, so ensure that you test it before publishing.</li>
  <li>The application must not contain malicious or destructive code.</li>
  <li>The application must not contain or use copyrighted information for which you do not hold the rights.</li>
  <li>The application must not contain or point to adult or hateful content.</li>
  <li>The application should serve standards-compliant HTML pages that are viewable in all modern browsers on a variety of devices.</li>
</ul>   


  <h2 id="readmore">Further reading</h2>

  <p>Now that you are familiar with the basics of creating and publishing Opera Unite applications, you might want to delve a bit deeper:</p>

  <ul>
    <li><a href="http://dev.opera.com/libraries/unite/">The Opera Unite JavaScript API</a> — JSDoc-style reference for the JavaScript interfaces and methods available for the Opera Unite Web Server.</li>
    <li><a href="http://dev.opera.com/libraries/fileio/">The Opera File I/O JavaScript API</a> — JSDoc-style reference for the JavaScript
    interfaces and methods available for working with files and directories.</li>
  <li><a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper: The Opera Unite application template library</a></li>
<li><a href="http://dev.opera.com/articles/view/yusef-the-unite-service-framework/">Yusef: The Opera Unite Service Framework</a></li>
  </ul>
