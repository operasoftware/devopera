---
title: 'RoboHydra: A New Testing Tool for Client-Server Interactions'
authors:
- esteban-velazquez
intro: 'RoboHydra is a web server designed to help you write and test software that uses HTTP as a communication protocol. This article will take you through the basics of how RoboHydra works and how to install and use it at a basic level. You’ll see how to use it as a proxy for an existing site, and how you can make changes to local files and see those changes immediately reflected on the live site!'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>HTTP is the most used protocol on the internet. Most APIs available on the internet use it — not only web pages, but also mobile applications, public APIs, programs for backend service integration, etc. Considering how much software uses HTTP to talk to other software, it's surprising that there aren't many tools to assist us in situations where we want to test communication between client and server across HTTP.</p>

<p><a href="http://robohydra.org/">RoboHydra</a> is a web server designed precisely to help you write and test software that uses HTTP as a communication protocol. There are many ways to use RoboHydra, but the most common use cases are as follows:</p>

<ol>
<li>RoboHydra allows you to combine a locally stored website front end with a back end sat on a remote server, allowing you to test your own local front end installation with a fully functional back end, without having to install the back end on your local machine.</li>
<li>If you write a program designed to talk to a server using HTTP, you can use RoboHydra to imitate that server and pass custom responses to the program. This can help you reproduce different bugs and situations that might be otherwise hard, if not impossible, to test.</li>
</ol>

<p>This article will take you through the basics of how RoboHydra works and how to install and use it at a basic level; at the end you will explore the first scenario listed above. Future articles will explore the second scenario listed above, and look at more advanced uses of RoboHydra.</p>

<h2>A RoboHydra's anatomy</h2>

<p>A RoboHydra web server is composed of many <strong>heads</strong>. A RoboHydra head is a piece of software that serves requests for a certain URL path, and defines a certain behaviour for that head to apply to that URL. For example, a RoboHydra server could have one head listening in <code>/articles/newest</code> that returns a fixed list of articles, another head listening in <code>/static</code> that proxies HTTP requests to the production server, and so on.</p>

<p>The behaviour of each head is determined by its type: there are heads that always return a fixed response, heads that proxy requests to another server, heads that serve files from the local filesystem, heads that execute a given JavaScript function, etc. You can program your own heads to define whatever behaviour you want.</p>

<p>When a RoboHydra server receives a request, it will go through all its heads in order, trying to find one that matches the URL of the incoming request. When it finds one, it will make that head process the request.</p>

<p>RoboHydra runs as a Node JS package. That means it is written in JavaScript but runs on the command line, not in the browser (remember — it's a server, not a client!)</p>

<h2>Installing RoboHydra</h2>

<p>You can essentially install and use Robohydra wherever you like on your local drive, but you need to choose a single directory to do your installation and work inside. Therefore, before installing anything, we'll create a directory called <code>devo-robohydra</code> that will contain all the files created for this article, and the RoboHydra installation itself. <em>Execute all commands from this directory</em>: RoboHydra uses relative paths to find its files.</p>

<ul>

<li>

<p>The first step towards using RoboHydra on your computer is to make sure you have Node JS installed (you can check by typing <code>node -v</code> in a terminal; you should get at least version <code>v0.6.0</code>). If not, you'll have to install Node JS first. You can compile Node from source or download the pre-compiled binaries (.pkg, .exe, etc.) for the platform of your choice — see <a href="http://nodejs.org">nodejs.org</a> for more.</p>

</li>

<li>

<p>Next, install RoboHydra itself by typing <code>npm install robohydra</code> in your command line. You should end up with RoboHydra installed inside the directory <em>devo-robohydra/node_modules/robohydra</em>. Once installed, you don't actually need to touch anything inside the <em>node_modules</em> directory.</p>

</li>

</ul>

<p class="note">Note: You can also install RoboHydra by downloading it directly from the <a href="https://github.com/operasoftware/robohydra">RoboHydra project on GitHub</a> and putting it inside a manually created <em>node_modules</em> directory.</p>

<h2>RoboHydra basics</h2>

<p>Once installed, you can run RoboHydra from your working directory by invoking your own custom configuration files like so:</p>

<pre><code class="no-highlight">./node_modules/.bin/robohydra <em>configuration-file-name</em></code></pre>

<p>Or, if you add <code>node_modules/.bin</code> to your <code>$PATH</code>, simply with:</p>

<pre><code class="no-highlight">robohydra <em>configuration-file-name</em></code></pre>

<p>So robohydra is run from inside the <em>node_modules</em> directory, and your configuration files are placed inside the root of your working directory, which in this case is <code>devo-robohydra</code>.</p>

<p>RoboHydra configuration files are simple JSON files that specify a list of <strong>plugins</strong> to be loaded. Plugins are special scripts that define one or more heads that you want to load together. A configuration file loading two plugins, <code>monitor</code> and <code>dev-proxy</code>, would look like this:</p>

<pre><code class="javascript">{
	"plugins": [
		{"name": "monitor", "config": {}},
		{"name": "dev-proxy", "config": {}}
	]
}</code></pre>

<p>The actual code of your plugins is written in JavaScript, and needs to be stored in a directory <em>robohydra/plugins</em>, placed inside your working directory. So by default, the example plugins mentioned above would be loaded from <em>devo-robohydra/robohydra/plugins/monitor/index.js</em> and <em>devo-robohydra/robohydra/plugins/dev-proxy/index.js</em>. We will see how to write a full plugin in the example that follows.</p>

<p class="note">For more example plugins and configuration files, look in the <em>devo-robohydra/node_modules/robohydra/examples</em> directory.</p>

<h2>Using RoboHydra as a proxy</h2>

<p>As we explained earlier, one of the situations in which RoboHydra can be useful is when you're developing the front end of a web application. Imagine you are one of the front end developers for <a href="https://www.opera.com">https://www.opera.com</a>. It would be convenient to be able to connect to some URL in your browser that behaves like opera.com, except that the front end files are served from your local filesystem, and the back end is hosted somewhere else — you don't actually need to have the whole opera.com backend on your local machine!</p>

<p>To achieve this you can create a simple RoboHydra web server that serves local files for any requests starting with a certain path containing your local code (for example <em>/js/</em>), and proxies every other request (e.g. <em>/developer/tools</em>) to https://www.opera.com.</p>

<h3>Writing a proxy plugin</h3>

<p>To achieve this, we'll have to write a RoboHydra plugin containing two heads: one to serve local files from <em>/js/</em> and another to proxy everything else to https://www.opera.com. The former will serve static files, and the latter will be a proxying head. The plugin code will look like this:</p>

<pre><code class="javascript">var heads                   = require('robohydra').heads,
		RoboHydraHeadFilesystem = heads.RoboHydraHeadFilesystem,
		RoboHydraHeadProxy      = heads.RoboHydraHeadProxy;

exports.getBodyParts = function(config) {
	var projectPath = config.rootpath || '.';

	return {
		heads: [
			new RoboHydraHeadFilesystem
			(
				{
					name: 'js',
					mountPath: '/js',
					documentRoot: projectPath + '/static/js'
				}
			),

			// When none of the above heads match, this head
			// always matches
			new RoboHydraHeadProxy
			(
				{
					name: 'proxy',
					mountPath: '/',
					proxyTo: 'https://www.opera.com',
					setHostHeader: true
				}
			)
		]
	};
};</code></pre>

<ol>

<li>
<p>We'll call our plugin <code>operacom-dev</code>: save the above code as <em>devo-robohydra/robohydra/plugins/operacom-dev/index.js</em>.</p>
</li>

<li>
<p>Now create a configuration file called operacom-dev.conf inside <em>devo-robohydra</em> with the following contents:</p>

<pre><code class="javascript">{
	"plugins": [
		{"name": "operacom-dev", "config": {"rootpath": "operacom"}}
	]
}</code></pre>
</li>

<li>
<p>As a last step, you'll have to download the <a href="operacom-js.zip">JavaScript files for www.opera.com</a> and uncompress the ZIP file in the <em>devo-robohydra</em> directory.</p>
</li>

</ol>

<p>Now you should have all these files and directories in <em>devo-robohydra</em>:</p>

<ul>
<li><em>node_modules</em>, containing the installed robohydra package.</li>
<li><em>robohydra/plugins/operacom-dev</em>, containing your plugin.</li>
<li><code>operacom-dev.conf</code>, your configuration file.</li>
<li>The <em>operacom/static/js</em> directory, containing your front-end files for www.opera.com.</li>
</ul>

<h3>RoboHydra in action</h3>

<p>Now that everything is in place, you can start the custom server by telling RoboHydra which configuration file it should load:</p>

<pre><code class="no-highlight">./node_modules/.bin/robohydra operacom-dev.conf</code></pre>

<p>RoboHydra will then listen on port 3000. This means you can go to <code>http://localhost:3000</code> with your browser, and you'll see opera.com. However, if you modify the files under <em>operacom/static/js</em>, you'll see the changes immediately: you could be a front-end developer for www.opera.com!</p>

<p class="note">Note: To start RoboHydra listening on a different port, you need to start it and include the <code>-p</code> flag, followed by the desired port number. So for example, <code>./node_modules/.bin/robohydra -p 3001 operacom-dev.conf</code> would start it on port 3001.</p>

<p>Let's see this in action. Open <code>operacom/static/js/mainmenu.js</code> and find the following function:</p>

<pre><code class="javascript">frm.onsubmit=function() {
	if(this.words.value=='Search www.opera.com'||this.words.value=='') {
		alert('Please enter a search term.');
		this.words.focus();
		return false;
	}
}</code></pre>

<p>If you click on the search button at the bottom of the page without typing in any words, the alert box will appear to tell you what to do. Let's try changing this function to the following, to present the error message to the user in a different way:</p>

<pre><code class="javascript">frm.onsubmit=function() {
	if(this.words.value=='Search www.opera.com'||this.words.value=='') {
		wrd.value = 'Please enter a search term.';
		wrd.style.color = 'black';
		wrd.style.fontWeight = 'bold';
		this.words.focus();
		return false;
	}
}</code></pre>

<p>Save your JS file, then go to <code>http://localhost:3000</code> with your browser and reload the page to make sure you're using the latest JavaScript files. If you go to the bottom of the page and click on the search button without typing any words, you'll see the updated effect. This illustrates just how great RoboHydra is for such experimentation.</p>

<h2>The admin interface</h2>

<p>Another RoboHydra feature that comes in handy in many situations is the admin interface. From it you can, among other things, see the available heads, create heads with fixed content, and enable and disable heads — see Figure 1. It's always available at http://localhost:3000/robohydra-admin/.</p>

<p><img src="robohydra-admin.png" alt="The RoboHydra admin interface, showing custom heads, and featuring controls to enable and disable heads as you see fit"></p>
<p class="caption">Figure 1: The RoboHydra admin interface. Note that our custom heads are listed, along with attach and detach buttons.</p>

<p>In the context of using RoboHydra as a front-end development proxy, one practical use of the admin interface is to compare how the site behaves with our local JavaScript code and the original code. To do so, we only have to detach and reattach the "js" head. When the head is detached, only the "proxy" head will be active, so all requests will pass through to www.opera.com.</p>

<h2>Summary</h2>

<p>This concludes our short tour of RoboHydra. By now you should be familiar with how to install and use RoboHydra and write a simple plugin for it. You should also now be well aware of how useful it can be! In subsequent articles, we'll show you some more interesting and complex use cases, like emulating a server to build a test suite or saving and replaying traffic to allow you to work offline.</p>
