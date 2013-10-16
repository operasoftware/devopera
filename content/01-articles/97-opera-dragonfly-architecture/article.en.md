Title: Opera Dragonfly Architecture
----
Date: 2008-05-06 16:12:32
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

<p>This article covers the architecture of Opera Dragonfly in detail, showing what the different components in the architecture are, and how they interact during Dragonfly&#39;s running.</p>

<ul>
<li><a href="#archoverview">Architecture overview</a></li>
<li><a href="#scenarios">Debugging scenarios</a>
<ul>
<li><a href="#scenariosintegrated">Integrated</a></li>
<li><a href="#scenariosremote">Remote</a></li>
</ul>
</li>
<li><a href="#components">Components</a>
<ul>
<li><a href="#componentruntime">Runtime</a></li>
<li><a href="#componentdebugged">Debugging host</a></li>
<li><a href="#componentscope">The Scope module</a>
<ul>
<li><a href="#scopeprotocol">The Scope protocol</a></li>
</ul>
</li>
<li><a href="#componentproxy">Proxy</a></li>
<li><a href="#componentdebugger">The debugging client</a></li>
</ul>
</li>
</ul>


<h2 id="archoverview">Architecture overview</h2>

<p>The architecture of Opera Dragonfly, Opera Software&#8217;s development tools, is designed to allow debugging on a desktop computer, as well as on other devices such as mobile phones.</p>

<p>A <em>Scope module</em> exposes information about the <em>runtimes</em>, i.e. the web pages and applications in the debugged Opera instance. This instance acts as the <em>debugging host</em> and serves this information to <em>clients</em>. The format of the data sent back and forth is defined by a <em>Scope protocol</em>.</p>

<p>To overcome potential firewall issues, a <em>proxy</em> mediates the communication between the browser and the debugger. An example is debugging an application or web page on a mobile phone, using a normal desktop computer.</p>

<p>The <em>client</em>, i.e. the debugger application visualizes the information and allows the user to manipulate the runtimes.</p>

<p>The host and client, may run on the same or different devices, and the proxy may run inside either instance or on a separate server.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/97-opera-dragonfly-architecture/overview.png" title="Overview of Dragonfly architecture, showing the host, scope module, protocol, proxy and client" alt="Overview of Dragonfly architecture, showing the host, scope module, protocol, proxy and client" /></p>




<h2 id="scenarios">Debugging scenarios</h2>

<p>There are two primary ways of doing debugging:</p>

<ul>
<li>Integrated: The scope, proxy and debugger run in the same Opera instance.</li>
<li>Remote: The scope and debugger run on two different instances of Opera, for example on two different devices. The proxy may run on one of them, or on a separate computer.</li>
</ul>

<h3 id="scenariosintegrated">Integrated</h3>

<p>This is the typical scenario. The developer is working on a web application and runs it in the normal Opera browser. The debugger is running in the same instance and is shown in a separate window or in a panel integrated in the browser window.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/97-opera-dragonfly-architecture/integrated.png" title="Diagram showing integrated debugging. The debugging host, proxy and client are running on the same computer." alt="Diagram showing integrated debugging. The debugging host, proxy and client are running on the same computer." /></p>

<p>In this case, the debugging host, proxy and client are all running inside the same browser instance. The proxy runs on a random port chosen by Opera, and the Scope module and debugger are automatically connected to it.</p>

<h3 id="scenariosremote">Remote</h3>

<p>An example for this scenario is debugging a web page or application on a mobile phone. The phone has limited screen space and may be cumbersome to develop on, so instead a desktop computer is used to do the debugging.</p>

<p>Another possibility is debugging one Opera instance from another instance on the same device, which is useful if the debugging host is in danger of crashing.</p>

<p>Remote debugging can be broken down into two main scenarios:</p>

<ul>
<li>The proxy runs on one of the two instances.</li>
<li>The proxy runs outside both instances, for example on a public server.</li>
</ul>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/97-opera-dragonfly-architecture/local.png" title="Diagram showing remote debugging where the proxy is integrated into the client." alt="Diagram showing remote debugging where the proxy is integrated into the client." /></p>

<p>The second scenario is applicable when either or both the debugged instance and the debugger is running behind a firewall.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/97-opera-dragonfly-architecture/remote.png" title="Diagram showing remote debugging. The debugging host, proxy and client are potentially all running on different computers." alt="Diagram showing remote debugging. The debugging host, proxy and client are potentially all running on different computers." /></p>

<h2 id="components">Components</h2>

<p>The architecture is made up of the following components:</p>

<ul>
<li><a href="#componentruntime">Runtime</a></li>
<li><a href="#componentdebugged">Debugging host</a></li>
<li><a href="#componentscope">Scope module</a>
<ul>
<li><a href="#scopeprotocol">Scope protocol</a></li>
</ul></li>
<li><a href="#componentproxy">Proxy</a></li>
<li><a href="#componentdebugger">Debugging client</a></li>
</ul>

<h3 id="componentruntime">Runtime</h3>

<p>Each ECMAScript environment is a single runtime. Each HTML document then has a single runtime associated with it. Documents in frames and iframes also have their own runtimes.</p>

<h3 id="componentdebugged">Debugging host</h3>

<p>A debugging host is any instance of Opera which has the Scope module enabled and which has connected to the proxy. It may contain several <a href="#component-runtime">runtimes</a>.</p>

<h3 id="componentscope">The Scope module</h3>

<p>The Scope module is a part of the Opera application. Once enabled, the module establishes a socket connection to a proxy URL and inspects any runtimes in the debugging host. It then sends this information to the debugger. It also responds to commands made by the debugger for specific information, such as downloading the DOM for a selected node.</p>

<h4 id="scopeprotocol">The Scope protocol</h4>

<p>The Scope protocol is a set of rules and formats for exchanging information about <a href="#component-runtime">runtimes</a> between the host and the client. Examples include getting the DOM document structure from a runtime, or a set of computed styles.</p>

<p class="note">The Scope protocol is still under development. Once it is finished, it will be made public. Vendors may then create their own debugging clients and integrate them into applications such as IDEs (e.g. Aptana or Eclipse). Using the scope protocol, such clients can retrieve information about the runtimes of an Opera browser.</p>

<h3 id="componentproxy">Proxy</h3>

<p>The proxy is responsible for routing messages between the browser and the debugger. It is especially important in a remote debugging scenario where the debugging host and client are not on the same computer.</p>

<p>Opera supplies an integrated proxy in the instance running the debugger, but a proxy can also run on a a public server. This way, both the debugged instance and the debugger can be behind a firewall.</p>

<h3 id="componentdebugger">The debugging client</h3>

<p>The debugger is the client which connects to the scope module of the debugging host through the proxy. It receives a representation of the runtimes in that instance. The debugger visualizes the runtimes and allows the user to modify them. It does this by sending requests back to the Scope module using the <a href="#scope-protocol">Scope protocol</a>.</p>

<p>The current implementation of the debugger is made entirely in web technology: HTML/XML, CSS and JavaScript.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/97-opera-dragonfly-architecture/dragonfly-script.png" title="Dragonfly showing the ECMAScript debugger on www.opera.com" alt="Dragonfly showing the ECMAScript debugger on www.opera.com" /></p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/97-opera-dragonfly-architecture/dragonfly-dom.png" title="Dragonfly showing the DOM inspector on www.opera.com" alt="Dragonfly showing the DOM inspector on www.opera.com" /></p>
