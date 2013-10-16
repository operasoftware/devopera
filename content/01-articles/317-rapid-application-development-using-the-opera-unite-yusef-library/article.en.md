Title: Rapid application development using the Opera Unite Yusef library
----
Date: 2009-11-24 10:46:27
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

<h2>Introduction</h2>

<p>Yusef is a framework for Opera Unite applications that provides ready-made solutions to problems such as form validation, access control, UI templating, and more. A lot of functionality is available through Yusef itself, with even more features made available through Yusef plugins.</p>

<p>In a previous article we <a href="http://dev.opera.com/articles/view/yusef-the-unite-server-framework/">introduced you to the Yusef library and its plugins</a>. This article will go a little further, looking at a simple application that uses the new version of Yusef provided along with Opera 10.10 (and subsequent releases) to rapidly create applications with a unified UI template (using the <abbr title="User Interface">UI</abbr> plugin) and built-in access control (using the <abbr title="Access Control List">ACL</abbr> plugin). It also demonstrates how to use the new <code>getData()</code> function to get access to information on the state of the application and its users. The sample application looks like Figure 1.</p>

<img src="/articles/view/rapid-unite-app-development-with-yusef/screenshot.png" alt="Hello Yusef and Libraries app" />
<p class="comment">Figure 1: Our sample application.</p>

<p>It’s a good idea at this point to <a href="YusefLibraryApp.ua">download the sample Opera Unite application</a> so you can follow along with the code.</p>

<h2>An updated Yusef</h2>

<p>Upon the release of Opera 10.10 final, we made a new version of Yusef available. You can check out the new Yusef by going to the <code>libraries/yusef</code> folder of the sample Opera Unite application linked above. This new Yusef contains some changes — to start with it makes it easier to retrieve important information about the user and the application. You do this by calling <code>Yusef.getData()</code> — here is an example of how it can be used:</p>

<pre><code>var data = Yusef.getData(connection);

var username = data.username; // Gets the username of the person if he&#39;s logged in

var isOwner = data.visitor.isOwner; // Tells us if the person is the owner of the application or not

var isLocal = data.visitor.isLocal // Tells us if the user is accessing the application through the local network or not</code></pre>

<p><code>Yusef.getData()</code> can also give us other useful information such as the origin URL, the application name, the device name, whether the user has cookies, and more.</p>

<h2>The ACL and UI plugins</h2>

<p>The <abbr title="Access Control List">ACL</abbr> Yusef plugin is used to restrict access to all or part of your application. The <abbr title="User Interface">UI</abbr> Yusef plugin gives your users access to a particular UI template as a default skin, which is stored in the <code>default</code> subfolder. You can add your own custom skins and switch to them later if you want as well. Using these two plugins will be covered in much more detail in later articles, but for now we’ll just load them as includes in our application using Yusef’s automated library loader, which we will cover below.</p>


<h2>The “libraries” package</h2>

<p>The example application’s <code>libraries</code> directory contains a package of essential Opera Unite JavaScript libraries containing many useful functions, for example <code>libraryLoader</code>, which loads necessary includes into the application, a JSON parsing library, the PSO library, which gives better error messages to the console, and more. You’ll also notice that the directory includes Markuper, Yusef and its plugins.</p>

<h2>libraryLoader</h2>

<p>We will use Yusef’s automated <code>libraryLoader</code> to load the necessary plugins — you will see the following code at the top of the <code>index.html</code> file:</p>

<pre><code>&lt;!DOCTYPE html&gt;

&lt;script src=&quot;libraries/libraryLoader/librariesLoader.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
  Libraries.setTail( &#39;yusef.translation&#39;, &#39;yusef.ui&#39;, &#39;yusef.acl&#39; );
  Libraries.load();
&lt;/script&gt;</code></pre>

<p>Here we are including <code>librariesLoader.js</code> and using its simple syntax to select the plugins we want to use and load them into the application. <code>ui</code> is used to apply a UI template to the application, <code>acl</code> controls access to the application by users, and we have also included the <code>translation</code> library, which provides a way to include translations of the application into different languages.</p>

<h2>Server-side JavaScript</h2>

<p>All the server-side JavaScript for your Opera Unite applications should reside in the <code>serverScripts</code> directory — check out the <code>main.js</code> file contained inside this directory in the example application.</p>

<h3>Adding Section Listeners</h3>

<p>The next thing you’ll see in <code>main.js</code> is a section listener that will listen to <code>_index</code>, and call a function <code>indexFunction</code> when the <code>index.html</code> page is called. To make sure that the section loads with the UI template applied, we have to use <code>{ui:true}</code> as the third argument in the section listener — this calls the UI template to load. The JS code for this looks like so:</p>

<pre><code>Yusef.addSectionListener(&quot;_index&quot;, indexFunction, {ui:true});</code></pre>

<p>The above code adds a section listener for the index page, which calls the <code>indexFunction()</code> function, and grants permission for the UI template to be loaded for that function.</p>

<h3>Retrieving data</h3>

<p>Next we use <code>Yusef.getData()</code> to retrieve data about access control, UI, etc. and store it in a variable:</p>

<pre><code>function indexFunction(connection) {

  /* Get Yusef data (access control, common UI, etc) */
  var data = Yusef.getData( connection );

  /* Get the application template */
  var tmpl = new Markuper( &#39;templates/hello.html&#39;, data );

  /* Set data for the application template */
  data.content = {
    message: &quot;This is the index page&quot;
  }

  tmpl.parse( data );

  return {
    title   : connection.request.path,
    content : tmpl.select( &#39;#hello&#39; ),
    styles  : [{href: &#39;styles/style.css&#39;}]
  };

}</code></pre>

<p>The <code>Yusef.getData()</code> function retrieves all the data associated with the UI plugin and the application itself and stores it in the <code>data</code> variable. The <code>getData()</code> function returns data about the current access level of the user (from ACL), the UI template they are using, the current application they are using and the type of connection they are using to access the application.</p>

<p>The <code>Markuper</code> line in the code above calls the HTML template for the application — <code>hello.html</code> — using Markuper and stores it in the <code>tmpl</code> variable. You can find the corresponding HTML file in the <code>templates</code> directory.</p>

<h3>Writing the HTML</h3>

<p>The main code inside <code>hello.html</code> looks like so:</p>

<pre><code>&lt;div id=&quot;hello&quot;&gt;

&lt;span class=&quot;roundedBreadcrumbs&quot; /&gt;
  &lt;h2 class=&quot;breadcrumbs&quot;&gt;&lt;a href=&quot;#&quot;&gt;Hello Yusef and Libraries!&lt;/a&gt;&lt;/h2&gt;
  &lt;p data-keep-if=&quot;visitor.isOwner&quot;&gt;Hi {{username}}&lt;/p&gt;
  &lt;p data-remove-if=&quot;visitor.isOwner&quot;&gt;Hi Visitor!&lt;/p&gt;
  &lt;p&gt;{{content.message}}&lt;/p&gt;
  &lt;p data-keep-if=&quot;visitor.isLocal&quot;&gt;You&#39;re on the local network!&lt;/p&gt;
&lt;/div&gt;</code></pre>

<p>Remember our <code>data</code> variable from above, which contains the info from <code>Yusef.getData()</code>? Since the template is processing all the information from <code>data</code>, and <code>Yusef.getData()</code> can provide us with information about the current users of the application, we can use that information to give different content to different users depending on whether they are the owner of the application or just a visitor (on a local network or otherwise).</p>

<h3>Handling requests</h3>

<p>Any normal web application will probably use GET or POST requests in some form or another. In Opera Unite you can handle them using <code>event.connection.request.queryItems[]</code> for GET requests and <code>event.connection.request.bodyItems[]</code> for POST requests. In this article we will just look at handling GET in Opera Unite; POST will follow in a future article.</p>

<p><code>main.js</code> contains a section listener that processes the GET input and produces some output:</p>

<pre><code>Yusef.addSectionListener(&quot;testingget&quot;, theGetFunction, {ui:true});</code></pre>

<p>This makes sure that whenever we go to <code><em>ourapplication</em>/testingget/</code> the function <code>theGetFunction()</code> is called, which processes the results and displays them in another file called <code>another.html</code>. Let’s look at that function:</p>

<pre><code>function theGetFunction(connection){
  var data = Yusef.getData(connection);
  var therequest = event.connection.request.queryItems[&#39;doesit&#39;][0];
  var tmpl = new Markuper(&#39;templates/another.html&#39;, data);
  data.content = {
    message: &quot;Hello there!&quot;,
    message2: therequest
  }               

  tmpl.parse( data );
  return {
    title   : connection.request.path,
    content : tmpl.select( &#39;#hello&#39; ),
    styles  : [{href: &#39;styles/style.css&#39;}]
  };
}</code></pre>

<p>Going back to <code>hello.html</code> briefly, take note of the following line, which includes the GET call:</p>

<pre><code>&lt;p&gt; &lt;a href=&quot;testingget?doesit=works&quot;&gt;Click here&lt;/a&gt; to go to an example page which processes GET requests&lt;/p&gt;</code></pre>

<h3>another.html</h3>

<p>Now for the <code>another.html</code> file mentioned above, which displays the data outputted by the <code>theGetFunction</code> function.</p>

<pre><code>&lt;div id=&quot;hello&quot;&gt;
  &lt;span class=&quot;roundedBreadcrumbs&quot; /&gt;
  &lt;h2 class=&quot;breadcrumbs&quot;&gt;&lt;a href=&quot;#&quot;&gt;Hello Yusef and Libraries!&lt;/a&gt;&lt;/h2&gt;

  &lt;p data-keep-if=&quot;visitor.isOwner&quot;&gt;Hi {{username}}&lt;/p&gt;
  &lt;p data-remove-if=&quot;visitor.isOwner&quot;&gt;Hi Visitor!&lt;/p&gt;
  &lt;p&gt;{{content.message}}, the GET request: {{content.message2}}&lt;/p&gt;
&lt;/div&gt;</code></pre>

<p>Looking at this from top to bottom, the first two lines inside the <code>div</code> are used to display the <a href="/articles/view/rapid-unite-app-development-with-yusef/Picture3.png">standard Opera Unite application rounded corner black box</a>. The next two lines display a custom welcome message depending on whether the person accessing the application is the application owner or not. Finally, the last line displays the data sent via GET.</p>

<h2>Conclusion</h2>

<p>The libraries we have made available can be used to create Opera Unite applications very quickly and easily. You don&#39;t even need to deal with the coding required to make the UI uniform, handle 404 errors, or create an access control system. The libraries can handle all this for you, allowing you to focus on the functionality of the application itself.</p>
