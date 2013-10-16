Title: Opera Unite developer's primer
----
Date: 2009-06-16 07:01:59
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

<p class="comment">Further content contributions by Arve, Chris, Zi Bin, and Lissy.</p>

<p class="note">There is an updated version of this article available: <a href="http://dev.opera.com/articles/view/842/">Opera Unite developer’s primer — revisited</a></p>

<h2>Introduction</h2>
  
  <p>Opera Unite features a Web server running inside the Opera browser, which allows you to do some amazing things. At the touch of a button, you can share images, documents, video, music, games, collaborative applications and all manner of other things with your friends and colleagues.</p>

  <p>This article gets you started on the road to Opera Unite Service development &#8212; it describes how the Opera Unite Web Server in Opera works
  and how it can be used. Below I will briefly recap some of the basic concepts related to Opera Unite, show how you can enable the Web server in your browser, and give an example of how to write a simple Opera Unite blog service.</p>

  <p>The contents of this article are as follows:</p>

  <ul>
    <li><a href="#concepts">Basic concepts</a>
      <ul>
        <li><a href="#conceptsunite">What is Opera Unite?</a></li>
        <li><a href="#conceptsproxy">Opera Unite Proxy</a></li>
        <li><a href="#conceptsservices">Opera Unite Services</a></li>
      </ul>
    </li>
    <li><a href="#enabling">Enabling your Web server</a></li>
    <li><a href="#service">Creating an Opera Unite Service: A simple blog</a>
      <ul>
        <li><a href="#servicestructure">Files and folders in the service</a></li>
        <li><a href="#serviceconfig">Configuring the service: config.xml</a></li>
        <li><a href="#serviceindex">Tying it together: index.html</a></li>
        <li><a href="#servicescript">Creating the script: script.js</a>
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
    <li><a href="#using">Using your Opera Unite Service</a></li>
    <li><a href="#viewing">Viewing your Opera Unite Service</a></li>
    <li><a href="#uploading">Uploading your Unite Service to unite.opera.com</a>
      <ul>
        <li><a href="#uploadingbefore">Before publishing</a></li>
        <li><a href="#uploadingprocess">Publishing your service</a></li>
        <li><a href="#uploadinghowto">How can I get people to try my service?</a>
          <ul>
            <li><a href="#uploadingdesc">How can I write an effective service description?</a></li>
            <li><a href="#uploadingscreen">How can I make effective screenshots of my service?</a></li>
          </ul>
        </li>
        <li><a href="#uploadingapproval">Approval of Opera Unite Services</a>
          <ul>
            <li><a href="#uploadingguides">What are the guidelines for approval of an Opera Unite Service?</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#readmore">Further reading</a></li>
  </ul>
 

  <h2 id="concepts">Basic concepts</h2>

  <h3 id="conceptsunite">What is Opera Unite?</h3>

  <p>Opera Unite is, in short, a Web server running inside the Opera Web
  browser. This Web server allows the user to install
  services and share these services with their friends and colleagues (or everyone, if they wish). The interaction is all done via a central Opera Unite server &#8212; Opera Unite uses a proxy between the server and its clients (found at <a href="http://www.operaunite.com">operaunite.com</a>) to avoid the need for any special firewall configuration.</p>

  <h3 id="conceptsproxy">Opera Unite proxy</h3>

  <p>Traditionally, when a user runs a Web server in a home network, the
  network has a device that acts as a firewall, which
  needs to be configured separately, as illustrated in Figure 1.</p>

  <img src="http://forum-test.oslo.osa/kirby/content/articles/253-opera-unite-developers-primer/traditio.jpg" alt="traditional web server setup" />
  <p class="comment">Figure 1: A traditional Web server setup</p>

  <p>Typically, the user will need to open ports and enable port forwarding
  to a local computer in order for people outside the firewall to be able
  to access the server.</p>

  <p>However, when the user is using Opera Unite, no configuration is
  needed, as seen in Figure 2.</p>

  <img src="http://forum-test.oslo.osa/kirby/content/articles/253-opera-unite-developers-primer/operauni.jpg" alt="server set up when using the Unite server in your browser" />
  <p class="comment">Figure 2: The set up when using the Opera Unite server in your browser</p>

  <p>The Web server initiates a connection to the proxy, which uses
  this to pass information back about incoming requests.</p>

<p class="note">Note that the proxy is really only a fallback mechanism, to ensure that data can be delivered in case NAT traversal fails. Opera Unite has support for &quot;UPnP&quot;, meaning Universal Plug and Play, which allows you to share your data using direct connections to your computer, if available. This can make loading speeds for your services faster, as they will bypass the proxy server. However, as it is up to each service to load content using the direct connection, it may not always run services faster. UPnP has no authentication mechanism, and assumes that local systems and their users are completely trustworthy.</p>

  <h3 id="conceptsservices">Opera Unite Services</h3>

  <p>An Opera Unite Service is a special kind of <a href="http://dev.opera.com/articles/view/creating-your-first-opera-widget/">Opera Widget</a>,
  which holds the logic for receiving requests and responding to them.
  A widget is an Opera Unite Service if its <code>config.xml</code>
  contains a <code>feature</code> element like this:</p>

<pre><code>&lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
  &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
  &lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
&lt;/feature&gt;</code></pre>

  <p>In this case, a special JavaScript object, <code>opera.io.webserver</code>, 
  becomes available to the service. See the <a href="http://dev.opera.com/libraries/unite/">Opera Unite Web Server JavaScript API</a>
  for more information.</p>

  <p>As the Opera Widgets technology is used, the Opera Unite Service can provide the person running the Opera Unite server with a simple way of controlling and configuring it, all using standard HTML, CSS and JavaScript. Opera Unite Services do however get access to functionality normally not present in widgets or Web pages, for example a 
  <a title="FileI/O JavaScript API" href="http://dev.opera.com/libraries/fileio/">sandboxed file system</a>.</p>
  
<p class="note">For those of you who are interested in learning more about Opera Widgets, you can <a href="http://dev.opera.com/addons/widgets/">find more Widgets articles on dev.opera</a>.</p>

  <p>Let&#8217;s move on, get Opera Unite enabled, and start building up a simple Opera Unite Service.</p>

  <h2 id="enabling">Enabling your Web server</h2>

  <p>For security and performance reasons, the Web server does not run by default when Opera is started. You enable the server by selecting Tools &gt; Opera Unite Server &gt; Enable Opera Unite, or by opening an Opera Unite service. When you do so, a dialog pops up asking you to specify a username and password. This is your My Opera username and password.</p>

  <p class="note">Note that only My Opera usernames containing valid URL characters will work with Opera Unite. Invalid characters include &#8220;/&#8221;, &#8220;.&#8221;, &#8220;_&#8221; and space.</p>

  <p>In the next wizard screen, you need to define a device. You may select a device name from the drop-down list, or specify your own. The device name is used to identify your server via the proxy. It will be available via a URL like the following:</p>

  <pre>http://<em class="dname">devicename</em>.<em class="uname">username</em>.<em class="pname">proxyaddress</em>/<em class="sname">servicename</em></pre>

  <p>So, to visit the service <code>test</code> on the server <code>your_device</code> on
  <code>operaunite.com</code>, the URL becomes:</p>

  <pre><code>http://<em class="dname">your_device</em>.<em class="uname">your_username</em>.<em class="pname">operaunite.com</em>/<em class="sname">test</em></code></pre>

 <h2 id="service">Creating the Opera Unite Service: A simple blog</h2>

  <p>Here is a short walk-through for creating a simple blogging
  service that allows the user to write blog entries. Once stored,
  the entries are immediately available to the world through the
  server.</p>

  <p>The service has two parts: One is a configuration view for the service, where
  the owner can configure and control it. The other part is a series of Web pages generated or served by the service, which are visible to the user.</p>

  <p>For those who just can&#8217;t wait, you can download <a href="blog.us">Opera Unite blog source code</a>. It is packaged with extension <code>.us</code>, the default extension for Unite Services. You can unzip the package to look at the source code or drag the package into Opera browser to fire up the Unite blog example.</p>

  <h3 id="servicestructure">Files and folders in the service</h3>

  <p>Our service will contain the files and folders shown in Figure 3:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/253-opera-unite-developers-primer/structur.jpg" alt="The directory structure of the service" />
  <p class="comment">Figure 3: The directory structure of the service</p>

  <ul>
    <li><code>config.xml</code>: Configuration file for the service</li>
    <li><code>index.html</code>: Starting logic for the service, including scripts.</li>
    <li><code>script/script.js</code>: The actual Web server code.</li>
  </ul>

  <p>Of these, only <code>config.xml</code> and <code>index.html</code> are required.</p>

  <p>You may include a <code>public_html</code> folder, which is a magic 
  folder in Opera Unite Services. Normally, files and folders inside your 
  service are not available to users requesting your service, so if you want to
  distribute a fancy stylesheet, static images and similar, these files
  go inside here. These files are mapped to the relative root of your
  service, so a file named <var>cats.png</var> inside the <code>public_html</code> folder of
  the <em>helloOperaUnite</em> service will be available at</p>

  <p><code>http://your_device.your_username.operaunite.com/helloOperaUnite/cats.png</code>.</p>

  <h3 id="serviceconfig">Configuring the service: config.xml</h3>

  <p>This service will be packaged in the same way as an Opera Widget, so we&#8217;ll need to define
  a <code>config.xml</code> file. The file is just like a normal Opera Widgets <code>config.xml</code> file, with a few extra details. In order to identify your service
  as a Opera Unite Service, you need to add a <code>feature</code> element
  to the <code>widget</code> element in your <code>config.xml</code> file.</p>

  <p class="note">Please note that Opera Widgets are packaged as regular zip files and renamed to use the extension <code>.wgt</code>, whereas Opera Unite Services are packaged and renamed to use the extension <code>.us</code> to denote Opera Unite Service.</p>

<pre><code>&lt;widget&gt;
  &lt;widgetname&gt;My blogging service&lt;/widgetname&gt;
  &lt;description&gt;Blogging service example from the Opera Unite Services primer.&lt;/description&gt;
  &lt;author&gt;
    &lt;name&gt;Hans S. Toemmerholt&lt;/name&gt;
    &lt;organisation&gt;Opera Software ASA&lt;/organisation&gt;
  &lt;/author&gt;
  &lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
    &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
    &lt;param name=&quot;servicepath&quot; value=&quot;blog&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

  <p>The <code>widgetname</code> element of the service
  also acts as its service name. This is the name which will be shown to 
  the user when installing and using the service.</p>

  <p>You may also add a <code>servicepath</code> element to the <code>config.xml</code> file.
  The content of this element must be a valid part of a URI and will define what
  the <em>name of your service will be in the URI</em> of the service.
  If this element is not present, Opera will attempt to use the content 
  <code>widgetname</code> element as the URI component. If this name is not valid as
  a URI component, the installation of the service will fail with an error message.</p>

  <p>When the service is packaged and run, the above <code>config.xml</code> will make it respond to</p>

  <p><code>http://<em class="dname">your_device</em>.<em class="uname">your_username</em>.<em class="pname">operaunite.com</em>/<em class="sname">blog/</em></code></p>

  <h3 id="serviceindex">Tying it together: index.html</h3>

  <p>A service has no UI beyond the Web pages it produces. <code>index.html</code> is the starting point for the service, so that is in effect the UI. In our example, we&#8217;ll use a minimal HTML 5 file with a reference to the script we&#39;re using:</p>

  <pre><code>&lt;!DOCTYPE html&gt;
&lt;script src=&quot;script/script.js&quot;&gt;&lt;/script&gt;</code></pre>

  <h3 id="servicescript">Creating the script: script.js</h3>

  <p>Note the link to the script file <var>script.js</var> is in the
  above code snippet. The Web server listens to requests made from
  clients (users browsing the URL of the service) and creates
  responses that are sent back. The response is typically a
  generated Web page containing information.</p>

  <p>The functionality in Opera Unite is exposed to developers through a set of
  <a title="Opera Unite Web Server JavaScript API" href="http://dev.opera.com/libraries/unite/">JavaScript APIs</a>,
  including objects representing the Web server, connections, incoming requests and outgoing
  responses.</p>

  <p>What follows is a walk-through of the script.</p>

  <h4 id="scriptlisteners">The request event listeners</h4>

  <p>A Web server handles requests from clients and sends reponses back
  to them. The Opera Unite Web server is <em>event-based</em> and will raise a
  DOM event in the service every time a Web browser makes a connection to the
  server asking for files related to the Opera Unite Service. In order to respond 
  to such events, we need to set up event listeners. This is done in 
  <code>window.onload</code>:</p>

  <pre class="example"><code>var webserver;
var entries = [];

window.onload = function () {

    webserver = opera.io.webserver

    if (webserver)
    {
        //Handle requests for various URLs
        webserver.addEventListener(&#39;_index&#39;, showEntryList, false);
        webserver.addEventListener(&#39;entry&#39;, showEntry, false);
        webserver.addEventListener(&#39;form&#39;, showForm, false);
        webserver.addEventListener(&#39;save&#39;, saveEntry, false);
    }
}
</code></pre>

  <p>What is going on here?</p>

  <p>We are checking if the service is actually a Web service, by
  checking for the <code>webserver</code> object. If it is present, we add four event listeners <code>_index</code>,
  <code>entry</code>, <code>form</code> and <code>save</code>.</p>

  <p>When this listener is set up, the service will now call one of
  the functions each time a user visits one of the following URLs:</p>

  <ul>
    <li><code>http://your_device.your_username.operaunite.com/blog/</code></li>
    <li><code>http://your_device.your_username.operaunite.com/blog/<em class="ename">entry</em></code></li>
    <li><code>http://your_device.your_username.operaunite.com/blog/<em class="ename">form</em></code></li>
  </ul>

  <p>The <code>_index</code> request is special, and means a request to the root path of
  the service. As we shall see, the user will not visit &#8220;save&#8221; directly, only through the form.</p>

  <h4 id="scriptlist">Showing a list of blog entries</h4>

  <p>The code for the <code>_index</code> request, the <code>showEntryList</code> 
  function, is quite simple. When receiving a request, it writes back a
  HTML page with a list of the saved entries.</p>

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
      + &#39;&lt;p&gt;&lt;a href=&quot;form&quot;&gt;Add en entry&lt;/a&gt;.&lt;/p&gt;&#39;
      + &#39;&lt;/body&gt;&lt;/html&gt;&#39;
    );
    response.close();
}</code></pre>

  <p>Line-by-line, the script does the following:</p>

  <p>It first gets a reference to the <code>response</code> object. This is the object that
  holds the methods necessary to send output back to the client:</p>

  <pre><code>var response = e.connection.response;</code></pre>

  <p>The <code>write</code> method then writes the content to the web
  browser that requested the page. First, we write a simple HTML shell:</p>

  <pre><code>response.write( &#39;&lt;!DOCTYPE html&gt;&#39;
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
    //ToDo Should have error handling here
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
  contains information about the incomming request:</p>

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

  <p>When you click the &#8220;Add an entry&#8221; link, a classic Web form is displayed:</p>

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

  <p>This could be a lot more complicated, handling error messages, adding 
  already filled-in values and so on. You should also offer some authentication
  scheme for potentially destructive data operations, but we keep it simple as an example.</p>

  <h4 id="scriptsave">Saving an entry</h4>

  <p>Finally, when you submit the form, a new entry should be saved. For now, entries are stored in a simple array, so will be lost when the service is restarted, but it wouldn&#8217;t be so hard to extend the example to provide a means of retaining the blog entries.</p>

  <pre>function saveEntry(e)
{
    var request = e.connection.request
    var response = e.connection.response;

    //Get POST data
    var title = request.bodyItems[&#39;title&#39;][0];
    var text = request.bodyItems[&#39;text&#39;][0];

    entries.push({
        &#39;title&#39; : title, 
        &#39;text&#39;  : text,
        &#39;date&#39;  : new Date()
    });


    //Redirect back to the index of the service
    response.setStatusCode(302);
    response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
    response.close();
}</pre>

  <p>Instead of <code>request.queryItems</code>, we use the <code>bodyItems</code>
  property to access data sent by POST, in this case the title and the content of
  the new entry.</p>

  <pre><code>var title = request.bodyItems[&#39;title&#39;][0];
var text = request.bodyItems[&#39;text&#39;][0];</code></pre>

<p>Submitting the form saves the entry, storing it in an array:</p>
 	 
 	   <pre><code>entries.push({
 	     &#39;title&#39; : title,
 	     &#39;text&#39;  : text,
 	     &#39;date&#39;  : new Date()
 	 });</code></pre>

  <p>Finally, when the entry is saved, we want to redirect back to the list of 
  entries:</p>

<pre><code>response.setStatusCode(302);
response.setResponseHeader( &#39;Location&#39;, webserver.currentServicePath );
response.close();</code></pre>

<p>Here we create a standard HTTP temporary redirect back to the root of the service, represented by the <code>webserver.currentServicePath</code> property. This will fire an <code>_index</code> request, and the list of entries will then be shown.</p>

  <p>Again, you should add error handling and status messages to this.</p>

  <h2 id="using">Using your Opera Unite Service</h2>

  <p>In order to get your Opera Unite Service running, you simply need to
  load the service. Click and drag its <code>config.xml</code> or a zipped
  version of the service into your browser window. Or open it from a file
  dialog. If you have not previously started any Opera Unite Services, the
  Opera Unite configuration dialog will now appear.</p>

<p>Double click the <em>My blogging service</em> service in the Unite Services pane, and you should get a page appearing in the browser window, as seen in Figure 4:</p>
  
   <img src="http://forum-test.oslo.osa/kirby/content/articles/253-opera-unite-developers-primer/blogmain.jpg" alt="the blog service main screen" />
   <p class="comment">Figure 4: The blog service main screen.</p>

  <p>Clicking the <em>Add an entry</em> link will take you to a form that allows you to add a blog entry, as seen in Figure 5.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/253-opera-unite-developers-primer/blogform.jpg" alt="a form for entering a new blog entry" />
   <p class="comment">Figure 5: The form for entering a new blog post.</p>


<p>When you enter some text and press submit, you are taken back to the blog main screen, and your blog entry is available to view. You can click on the blog entry title to view the post. Add a few blog entries, have a play around. You should end up with something like Figure 6.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/253-opera-unite-developers-primer/fullblog1.jpg" alt="a few blog entries entered into the blog service" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/253-opera-unite-developers-primer/fullblog2.jpg" alt="an expanded full blog entry" />
   <p class="comment">Figure 6: Our blog is now nicely populated.</p>

  <h2 id="viewing">Viewing your Opera Unite Service</h2>

  <p>If you followed this guide and started the service in Opera, you 
  should now have a functioning web service. Anyone can visit it
  by going to the URL</p>

  <pre>http://<em class="dname">devicename</em>.<em class="uname">username</em>.<em class="pname">proxyaddress</em>/<em class="sname">servicename</em></pre>

  <p>In this case, if the device is called <em class="dname">your_device</em> 
  and it&#8217;s running the blog service, the URL becomes:</p>

  <pre>http://<em class="dname">your_device</em>.<em class="uname">username</em>.<em class="pname">operaunite.com</em>/<em class="sname">blog</em></pre>

   <p>As you saw when running the example above, you can visit the root
  address for the device to see the installed services on a system, for example:</p>

  <pre>http://<em class="dname">your_device</em>.<em class="uname">username</em>.<em class="pname">operaunite.com</em>/</pre>

  <p>This page will contain information on which services are installed
  on the system, and if the information is found in <code>config.xml</code>, it will
  also list information on each service and its author.</p>

  <h2 id="uploading">Uploading your Opera Unite Service onto unite.opera.com</h2>

<p>So now you&#39;ve put together a cool Opera Unite Service, you not only want to let people use it via your Opera Unite server &#8212; you also want to make it available for others to download and install on their Opera Unite servers, right? So how do we do this? The answer is to upload them to <a href="http://unite.opera.com">unite.opera.com</a> &#8212; this is the site where Unite Services are distributed. This section will show you how.</p>

<h3 id="uploadingbefore">Before publishing</h3>

<p>Before publishing you should ideally test your service to find bugs. Test on different platforms, devices and Opera browser versions if you can. Also remember that people consuming your services can do so from any browser, not just Opera, so test your service pages in other browsers (Firefox, Safari, etc.) on other computers.</p>

<p>If you are having trouble getting your service to work and you are convinced that the actual code of the service is right, check your <code>config.xml</code> file for errors. It needs to work for the service to be accepted. Opening the file in a different browser will check it for well-formedness. Check also that your <code>config.xml</code> contains enough information. We will use this file to supply information about your service to <a href="http://unite.opera.com">unite.opera.com</a>, and to the Opera Unite Service page on computers where the service is installed.</p>

<p>Also consider translating the service, if this is appropriate and you can do so.</p>


<p>Finally, take a screenshot of the service in action, as described below.</p>


<h3 id="uploadingprocess">Publishing your service</h3>

<p>To do this, you need to visit Opera&#8217;s <a href="http://unite.opera.com/services/upload/">Upload page</a>. Select your service archive file (.zip) in the archive file chooser dialog and upload it. Read through and verify the information taken from your <code>config.xml</code>. Feel free to add more text if you wish.</p>

<p>Next up, select your screenshot in the screenshot file dialog box, so that others will be able to see what your service looks like before they try it out.</p>

<p>You also need to select the target devices that your service is designed to be used with. Make sure you have tested it on those devices. Select a relevant group for your service. The last step is to select the target languages for your service. Make sure you have supplied translations for all the languages you select.</p>

<h3 id="uploadinghowto">How can I get people to try my service?</h3>

<p>When you have spent a lot of time making a service, you naturally want people to try it out.  To increase the number of views, you need to tell potential users what to expect when running the service.</p>

<p>There are two effective ways of achieving this: Writing an effective service description and making useful screenshots (see below for both).</p>

<h4 id="uploadingdesc">How can I write an effective service description?</h4>

<p>There are two fields that you can use to communicate with your users:</p>

<ul>
  <li>The short description is taken from your <code>config.xml</code> file and shown on all lists the service appears on</li>
  <li>The long description is shown on your service page</li>
</ul>

<p>Use the short description to catch the user&#8217;s eye, stating what your service does and what value users can get out of it. It may be a tagline, but it should be informative. You should avoid phrases like &#8220;Download me&#8221; or &#8220;This is a super cool service&#8221;.</p>

<p>The following are examples of effective descriptions:</p>
<ul>
        <li>&#8220;Stay updated on the weather in location <var>X</var>, <var>Y</var>, <var>Z</var>.&#8221;</li>
        <li>&#8220;Relax with this classic game of <var>XYZ</var>.&#8221;</li>
        <li>&#8220;Get quick access to the <var>XYZ</var> specification.&quot;&#8221;</li>
        <li>&#8220;Measure your Web page elements with this expandable ruler.&#8221;</li>
        <li>&#8220;Read news from Slashdot.&#8221;</li>
</ul>

<p>Use the long description to tell people what features your service has, how it was implemented, about changes in different versions, rules for games, and so on.</p>

<p>Bear in mind that your description will be read by people from different backgrounds, countries, cultures, and age groups, with different platforms, devices and browser versions. Not everyone understands things the way you do. You can often identify issues that need clarification by seeking feedback from friends and family.</p>

<h4 id="uploadingscreen">How can I make effective screenshots of my service?</h4>

<p>For screenshots to be effective, follow the tips listed below:</p>

<ul>
  <li>show the core functionality of your service</li>
  <li>Show the most important service interaction pages, not the login page or the preferences page if your service has them</li>
  <li>Show your service in action. If it is a game, show the game running. If it can have data, show it with data</li>
  <li>Crop the screenshot to just show the most important parts of the service</li>
</ul>

<p class="note">Note that you should make your screenshots 445 x 230 pixels ideally &#8212; this is the size we have been using on the <a href="http://unite.opera.com">Unite web site</a>. If you use different-sized screenshots, they will be resized, which may lead to undesirable results.</p>

<h3 id="uploadingapproval">Approval of Opera Unite Services</h3>

<p>All services need to be approved by Opera Software staff. We check for errors to ensure that our users have a good online experience, but we do not take responsibility for the content of the services or make any guarantees about the functionality. See our <a href="http://unite.opera.com/disclaimer/">disclaimer</a>.</p>

<h4 id="uploadingguides">What are the guidelines for approval of an Opera Unite Service?</h4>

<p>These are some of the guidelines that apply to services:</p>

<ul>
  <li>The service must have a sensible name and description</li>
  <li>The service must not have obvious bugs, so ensure that you test it before uploading</li>
  <li>The service must not contain malicious or destructive code</li>
  <li>The service must not contain or use copyrighted information for which you do not hold the rights</li>
  <li>The service must not contain or point to adult or hateful content</li>
  <li>The service should serve standards-compliant HTML pages that are viewable in all modern browsers on a variety of devices.</li>
</ul>   


  <h2 id="readmore">Further reading</h2>

  <p>Now that you are familiar with the basics of creating and uploading Opera Unite Services, you might want delve a bit deeper:</p>

  <ul>
    <li><a href="http://dev.opera.com/libraries/unite/">The Opera Unite JavaScript API</a> &#8212; JSDoc style reference for JavaScript
    interfaces and methods available for the Opera Unite Web Server.</li>
    <li><a href="http://dev.opera.com/libraries/fileio/">The Opera File I/O JavaScript API</a> &#8212; JSDoc style reference for JavaScript
    interfaces and methods available for working with files and directories.</li>
  <li><a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper: The Opera Unite Service template library</a></li>
  </ul>
