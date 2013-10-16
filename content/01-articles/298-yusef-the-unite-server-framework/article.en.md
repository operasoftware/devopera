Title: Yusef: the Unite Server Framework
----
Date: 2009-10-14 06:00:59
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

<p class="comment">Content contributions by Mathieu Henri, Hans S. Tømmerholt and Gautam Chandna.</p>
<p class="comment">Updated on 3rd February 2010.</p>
<h2>Introduction</h2>
<p>
This article gets you started with Opera Unite’s Server Framework: Yusef. After reading this article, you will be able to start harnessing the strength of Yusef. Included is a simple example to get things going. 
</p>
<p>
If you have not read the <a href="http://dev.opera.com/articles/view/opera-unite-developer-primer-revisited/">Opera Unite developer primer</a>, we encourage you to do so before starting with Yusef.
</p>
<p>
The article structure is as follows:
</p>
<ul>
    <li><a href="#Basic_Concepts">Basic Concepts</a></li>
    <li><a href="#Yusef_Core">Yusef Core</a></li>
        <ul>
            <li><a href="#Section">Section</a></li>
            <li><a href="#Action">Action</a></li>
            <li><a href="#Plugin">Plugin</a></li>
        </ul>
    <li><a href="#Example">Example</a></li>
    <li><a href="#Summary">Summary</a></li>
    <li><a href="#Reference">Reference Materials</a></li>
</ul>
<h2 id="Basic_Concepts">Basic Concepts</h2>
<p>
The Unite Server Framework — or Yusef — was started as a way to manage different functional requirements of Opera Unite applications. It was initially created by Opera’s Web Apps team to ease the development of Opera Unite applications. It soon evolved into a large framework covering multiple aspects of making an application.
</p>
<p>
For a developer, Yusef helps you take care of things such as providing a UI template, form POST validation and access control (amongst others). It evolved out of a need to modularize work in Opera Unite and is here to ease your work.</p>

<img src="/articles/view/yusef-the-unite-server-framework/yusef_model_4.png" alt="Diagram of Yusef and an Opera Unite application page" />
<p class="comment">Figure 1: Yusef and an Opera Unite application page.</p>

<p class="note">
Think of Yusef as a daemon service that runs in the background, and your script as server-side JavaScript. After all that is processed, a HTML page is dumped, which is the Opera Unite application.
</p>
<h2 id="Yusef_Core">Yusef Core</h2>
<p>
Yusef Core provides the backbone of an  Opera Unite application and deals with mount points, the sharing of static files, section listeners (the root or subpaths of the application), form actions (validated by means of a cryptographic nonce — a secure one-time random number used for authentication) and features some hooks to extend these basic functions and add plugins. 
</p>
<p>
There are three main parts in the Yusef Core. <i>Section</i> and <i>Actions</i> are ways Yusef listens to events triggered by users in an Opera Unite application page, while <i>Plugins</i> introduce extra features such as access control.</p>

<img src="/articles/view/yusef-the-unite-server-framework/3part.png" alt="Section, Action, Plugin" />
<p class="comment">Figure 2: The three fundamentals of the Yusef Core.</p>

<h3 id="Section">Section</h3>
<p>
Sections are the topmost subpath in which a request is made (ie <code>http://device.user.opeaunite.com/application/section</code>). Developers can add a section listener method to respond to requests made into a given top most subpath, or at the top <code>_index</code> level of the service. For example, a section listener might listen to the URL subpath and fire an event called <code>showFileList</code> when users view the page with a subpath <code>showFileList</code> — http://device.user.operaunite.com/application/showFileList. The event can then perform an action, such as showing a list of files.
</p>
<p>
<code>addSectionListener</code> is a Yusef method that listens to HTTP requests and registers them to a function. It allows Yusef to listen and perform actions when a page is loaded. The event is tied to a path (section), for example <code>http://device.user.operaunite.com/application/sectionevent1/</code> can be tied to <code>addSectionListener(&#39;sectionevent1&#39;, function(),args);</code>
</p>
<p>
Yusef Core itself creates a section called <code>static</code> which serves all content located in the application’s <code>public_html</code> folder. This is used to serve static resources such as the icon, style sheets, scripts and graphics of the application.
</p>
<h3 id="Action">Action</h3>
<p>
Unite actions are the way Yusef deals with a form POST. Developers can register an action listener to process the data posted by a form. The function <code>registerUniteActionListener</code> listens to POST requests and registers each of them to a specific function. Each POST request corresponds to a unique function. 
<p>
For example, a form may submit data to the root of the application - <code>http://device.user.operaunite.com/application/</code>
</p>

<pre>
<code>
 &lt;input type=&quot;hidden&quot; name=&quot;unite-action&quot; value=&quot;&lt;action name&gt;&quot;&gt;
 &lt;input type=&quot;hidden&quot; name=&quot;unite-nonce&quot; value=&quot;&lt;session.nonce&gt;&quot;&gt;
</code>
</pre>
<p>
The form POST must include these two arguments which is needed by Yusef to validate and forward the entire request to your assigned <code>actionListener</code>. The cryptographic nonce is used for authentication.
</p>
<h3 id="Plugin">Plugin</h3>
<p>
Yusef provides several plugins, amongst them are <abbr title="Access Control List">ACL</abbr> and UI plugins. Developers who want to extend Yusef functionality can either create a new plugin or extend the public method of Yusef plugins.
</p>
<p>We will be looking more closely at plugins in future articles.</p>
<h2 id="Example">Example</h2>
<p>
Before we dive into the code, let’s revisit a few ideas. Yusef is a server-side framework. Code written will be processed on the backend. The entry point of an Opera Unite application is a special index.html page, used to invoke Yusef and other server side functions and libraries. This index.html is not used to display a page but just to invoke scripts. You can think of the whole process as a daemon.
</p>
<p>
In this example, we want to start an Opera Unite application with Yusef as the framework. Download a <a href="/articles/view/yusef-the-unite-server-framework/helloYusef.ua">Yusef Core example</a>. The basic file structure is
</p>
<ul>
<li>index.html</li>
<li>config.xml</li>
<li>libraries/yusef</li>
<li>libraries/Markuper</li>
<li>libraries/PSO</li>
<li>serverScripts/helloYusef.js</li>
<li>templates/helloYusef.html</li>
<li>public_html/style.css</li>

</ul>
<h3>config.xml</h3>
<p>
config.xml is the descriptor of an Opera Unite application. It is where we tell users the application name and what this application is about.  Opera Unite&#39;s config.xml structure is identical to the Opera Widgets config.xml specification.
</p>
<pre>
<code>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget network=&quot;public&quot; version=&quot;1.0&quot; id=&quot;Unite/helloYusef/&quot; &gt;
	&lt;widgetname&gt;Hello Yusef&lt;/widgetname&gt;
	&lt;description&gt;An example application that uses Yusef, access control and Markuper.&lt;/description&gt;
        &lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
        <param name="type" value="service" />
        <param name="servicepath" value="hello_yusef" />
        &lt;/feature&gt;
        &lt;feature name=&quot;http://xmlns.opera.com/fileio&quot;&gt;
        &lt;/feature&gt;
	&lt;icon width=&#39;64&#39; height=&#39;64&#39; &gt;public_html/favicon.64x64.png&lt;/icon&gt;
        &lt;icon width=&#39;48&#39; height=&#39;48&#39; &gt;public_html/favicon.48x48.png&lt;/icon&gt;
        &lt;icon width=&#39;32&#39; height=&#39;32&#39; &gt;public_html/favicon.32x32.png&lt;/icon&gt;
	&lt;icon width=&#39;16&#39; height=&#39;16&#39; &gt;public_html/favicon.16x16.png&lt;/icon&gt;
	&lt;author&gt;
		&lt;name&gt;Gautam Chandna, Opera Software ASA&lt;/name&gt;
	&lt;/author&gt;
&lt;/widget&gt;
</code>
</pre>
<p>
We are calling our application &quot;Hello Yusef&quot;. It is mandatory to specify the Web server and File I/O needed in our Opera Unite application.
</p>
<p class="note">
Including File I/O in the application descriptor might be counter intuitive for applications that don’t need File I/O. However, File I/O is required for access to a sandbox for application data.
</p>
<h3>index.html</h3>
<p>
The entry point of an Opera Unite application is index.html. Remember that this index.html is used to invoke libraries and Yusef, not to display content.
</p>
<p>
There are two ways to invoke the libraries, one is to do it selectively as shown below. 
</p>
<pre>
<code>
&lt;script src=&quot;libraries/PSO/pso.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;libraries/Markuper/template.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;libraries/yusef/common.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;libraries/yusef/core.js&quot;&gt;&lt;/script&gt;
</code>
</pre>
<p>
Core.js and common.js are both Yusef files. We can savely ignore them for now. We have also specified <a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper</a> as our UI template.
</p>


<p>The second and preferred way is to use the new libraryLoader, we are able to load all the libraries at one go and choose the Yusef plugin using <code>Libraries.setTail</code> function.
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

<h3>ServerScripts/HelloYusef.js</h3>

<p>
Opera Unite applications that use Yusef as the framework have a magic folder called <code>serverScripts</code>. Scripts in this folder are automatically invoked and all scripts related to the server side of your application can be placed in this folder.
</p>
<pre>
<code>
    Yusef.addSectionListener
    (
        &#39;_index&#39;,
        function( connection )
        {
          ...
        }
    );
</code>
</pre>
<p>
Inside HelloYusef.js, Yusef functions are invoked. Member functions of Yusef are invoked through a Yusef singleton — a class/object that is instantiated once, hence <code>Yusef</code> is always the object name. For example <code>addSectionListener</code> function is invoked via <code>Yusef.addSectionListener</code>.
</p>
<p>
The <code>addSectionListener</code> listens to subpaths in a URI. For example, when accessing <code>device.user.operaunite.com/application/addfile</code>, the listener for <code>addfile</code> is fired.
Here we have a listener listening to <code>_index</code> — which is fired when the top level URI of an Opera Unite application is accessed. 
</p>
<pre>
<code>
 function( connection )
        {
   var tmpl = new Markuper( &#39;templates/helloYusef.html&#39; );
            var data = {
                title       : connection.request.path,
                servicePath : opera.io.webserver.currentServicePath,
                content     : &quot;Hello Yusef&quot;,
                stylesheet  : &#39;style.css&#39;
            }
            tmpl.parse( data );
            return tmpl.html();
}
</code>
</pre>
<p>
Let’s look at the function that is invoked. The <a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper template library</a> is called with the location of the template as an argument. An object notation variable <i>data</i> is instantiated with values. Among them is the <code>servicePath</code> identified using the <code>opera.io.webserver</code> object. For more information about <code>opera.io.webserver</code>, you can take a look at the <a href="http://dev.opera.com/libraries/unite/docs/allclasses.dml">Opera Unite API</a>.
</p>
<p>
Finally, we explicitly parse the template in order to proceed with the data binding before returning the template.
</p>
<p class="note">After this, you might want to read up on <a href="http://dev.opera.com/articles/view/rapid-unite-app-development-with-yusef/">Rapid application development using the Opera Unite Yusef library</a> to find out more about getData() function that allows us to retrieve various different application data</p>
<p>
<h3>templates/helloYusef.html</h3>
<p>This is the final piece of the puzzle.</p>
<pre>
<code>
&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;/&gt;
    <title>{{data.title}}</title>
    &lt;link
      rel=&quot;stylesheet&quot;
      type=&quot;text/css&quot;
      href=&quot;{{data.servicePath}}static/{{data.stylesheet}}&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div&gt;
        {{data.content}}
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>
<p>
The Markuper template library outputs the page <code>templates/helloYusef.html</code>, which is the page presented to your users. 
<p>
A special syntax is used to retrieve the JavaScript value bound to the template. For example <code>{{data.servicePath}}</code> references the <code>servicePath</code> value previously specified in helloYusef.js. 
</p>

<img src="/articles/view/yusef-the-unite-server-framework/helloYusef_screenshot.png" alt="say hello to Yusef" />
<p class="comment">Figure 3: Hello Yusef example.</p>

<p>There you have it. An Opera Unite application using the Yusef framework is created. You can download the source code of our <a href="/articles/view/yusef-the-unite-server-framework/helloYusef.ua">helloYusef example</a>.</p>
<h2 id="Summary">Summary</h2>
<p>

<p>
In this article, we have introduced Yusef, Opera Unite’s Server Framework. There are three parts to Yusef, <i>section</i> (which listens to a URL subpath), <i>action</i> (which deals with form POST) and <i>plugin</i>. 
</p>
<p>
You can slowly increase the complexity by adding more plugins. One such interesting plugin is the Yusef UI plugin that ties together Opera Unite’s UI templating engine called <a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper</a>. 
</p>
<p>
We will have a closer look at Yusef plugins in a future article.
</p>

<h2 id="Reference">Reference Materials</h2>
<p> 
You might want to take a look at these other Opera Unite articles or libraries.</p> 
<ul>
<li>
<a href="http://dev.opera.com/articles/view/opera-unite-developer-primer-revisited/">Opera Unite Development primer</a>
</li>
<li>
<a href="http://dev.opera.com/articles/view/markuper-unite-template-library/">Markuper template library</a>
</li>
<li>
<a href="http://dev.opera.com/libraries/unite/">Opera Unite API</a>
</li>
<li>
<a href="http://dev.opera.com/libraries/fileio/">File I/O API</a>
</li>
</ul>
                </p></p></p></p>
