---
title: NPAPI Plugins
support: 16
source: http://developer.chrome.com/extensions/npapi.html
license: cc-by-3.0
---
<p class="alert"><strong>Warning:</strong> NPAPI support will be deprecated from Opera 20 onward. We recommend converting your extension to use other extension APIs or <a href="tut_message_passing.html#native_messaging">native messaging</a> instead.</p>


<h2 id="introduction">Introduction</h2>

<p>
Leveraging HTML and JavaScript makes developing new extensions really easy,
but what if you have existing legacy or proprietary code that you want to reuse in your extension? In that case, you can bundle an NPAPI plugin with your extension, allowing you to call into native binary code from JavaScript.
</p>

<p>Code running in an NPAPI plugin has the full permissions of the current user and is not sandboxed or shielded from malicious input by Opera in any way. You should be especially cautious when processing input from untrusted sources, such as when working with content scripts or XMLHttpRequest.</p>

<h2 id="details">Details</h2>

<p>
How to develop an NPAPI plugin is outside the scope of this document.
See <a href="https://developer.mozilla.org/en/Plugins">Mozilla's
NPAPI plugin reference</a> for information on how to do that.
</p>

<p>
Once you have an NPAPI plugin, follow these steps to get your extension using it.
</p>

<ol>
	<li>
		Add a section to your extension's <code>manifest.json</code>
		that describes where to find the plugin,
		along with other properties about it:

<pre class="prettyprint">{
	"name": "My extension",
	...
	<b>"plugins": [
		{ "path": "extension_plugin.dll" }
	]</b>,
	...
}</pre>

		<p>
		The "path" property specifies the path to your plugin,
		relative to the manifest file.
		The "public" property specifies whether
		your plugin can be accessed by regular web pages;
		the default is false,
		meaning only your extension can load the plugin. Add
		<code>"public": true</code> to make your plugin accessible on
		regular web pages and content scripts. But
		<a href="#security-considerations">be careful</a> — any
		web page will then be able to call into your plugin.
		</p>
	 </li>

	 <li>
		 Create an HTML file that loads your plugin by mime-type.
		 Assuming your mime-type is "application/x-my-extension":

<pre class="prettyprint">
&lt;embed type="application/x-my-extension" id="pluginId"></embed>
&lt;script>
	var plugin = document.getElementById("pluginId");
	var result = plugin.myPluginMethod();  // call a method in your plugin
	console.log("my plugin returned: " + result);
&lt;/script></pre>

		 <p>
		 This can be inside a background page
		 or any other HTML page used by your extension.
		 If your plugin is "public",
		 you can even use a content script to programmatically
		 insert your plugin into a web page.
		 </p>
	 </li>
</ol>

<h2 id="security-considerations">Security considerations</h2>

<p>
Including an NPAPI plugin in your extension is dangerous because plugins
have unrestricted access to the local machine. If your plugin contains
a vulnerability, an attacker might be able to exploit that vulnerability
to install malicious software on the user's machine. Hence, avoid
including an NPAPI plugin whenever possible.
</p>

<p>
Furthermore, marking your NPAPI plugin "public" increases the attack surface of your
extension because the plugin is exposed directly to web content, making
it easier for a malicious web site to manipulate your plugin. Hence,
avoid making your NPAPI plugin public whenever possible.
</p>
