---

title: Extending DevTools
copyright: opera-google-ccby
originalsource: http://developer.chrome.com/extensions/devtools.html
---


<div id="gc-pagecontent">
	<div id="toc">
		<ol>
			<li>
				<a href="#overview">Overview</a>
			</li>
			<li>
				<a href="#devtools-page">The DevTools Page</a>
			</li>
			<li>
				<a href="#creating">Creating a DevTools Extension</a>
			</li>
			<li>
				<a href="#devtools-ui">DevTools UI Elements: Panels and Sidebar Panes</a>
			</li>
			<li>
				<a href="#solutions">Communicating Between Extension Components</a>
				<ol>
					<li>
						<a href="#injecting">Injecting a Content Script</a>
					</li>
					<li>
						<a href="#evaluating-js">Evaluating JavaScript in the Inspected Window</a>
					</li>
					<li>
						<a href="#selected-element">Passing the Selected Element to a Content Script</a>
					</li>
					<li>
						<a href="#content-script-to-devtools">Messaging from Content Scripts to the DevTools Page</a>
					</li>
					<li>
						<a href="#detecting-open-close">Detecting When DevTools Opens and Closes</a>
					</li>
				</ol>
			</li>
			<li>
				<a href="#more">More information</a>
			</li>
			<li>
				<a href="#examples">Examples</a>
			</li>
		</ol>
	</div>
	<h2 id="overview">
		Overview
	</h2>
	<p>
		A DevTools extension adds functionality to the Web Inspector included with Opera. It can add new UI panels and sidebars, interact with the inspected page, get information about network requests, and more. DevTools extensions have access to an additional set of DevTools-specific extension APIs:
	</p>
	<ul>
		<li>
			<code><a href="https://developer.chrome.com/extensions/devtools_inspectedWindow">devtools.inspectedWindow</a></code>
		</li>
		<li>
			<code><a href="https://developer.chrome.com/extensions/devtools_network">devtools.network</a></code>
		</li>
		<li>
			<code><a href="https://developer.chrome.com/extensions/devtools_panels">devtools.panels</a></code>
		</li>
	</ul>
	<p>
		A DevTools extension is structured like any other extension: it can have a background page, content scripts, and other items. In addition, each DevTools extension has a DevTools page, which has access to the DevTools APIs.
	</p>
	<p>
		<img src="/static/images/devtools-extension.png" alt="Architecture diagram showing DevTools page communicating with the inspected window and the background page. The background page is shown communicating with the content scripts and accessing extension APIs. The DevTools page has access to the DevTools APIs, for example, creating panels.">
	</p>
	<h2 id="devtools-page">
		The DevTools page
	</h2>
	<p>
		An instance of the extension's DevTools page is created each time a DevTools window opens. The DevTools page exists for the lifetime of the DevTools window. The DevTools page has access to the DevTools APIs and a limited set of extension APIs. Specifically, the DevTools page can:
	</p>
	<ul>
		<li>Create and interact with panels using the <code><a href="https://developer.chrome.com/extensions/devtools_panels">devtools.panels</a></code> APIs.
		</li>
		<li>Get information about the inspected window and evaluate code in the inspected window using the <code><a href="https://developer.chrome.com/extensions/devtools_inspectedWindow">devtools.inspectedWindow</a></code> APIs.
		</li>
		<li>Get information about network requests using the <code><a href="https://developer.chrome.com/extensions/devtools_network">devtools.network</a></code> APIs.
		</li>
	</ul>
	<p>
		The DevTools page cannot use most of the extensions APIs directly. It has access to the same subset of the <code><a href="https://developer.chrome.com/extensions/extension">extension</a></code> and <code><a href="https://developer.chrome.com/extensions/runtime">runtime</a></code> APIs that a content script has access to. Like a content script, a DevTools page can communicate with the background page using <a href="tut_message_passing.html">Message Passing</a>. For an example, see <a href="#injecting">Injecting a Content Script</a>.
	</p>
	<h2 id="creating">
		Creating a DevTools extension
	</h2>
	<p>
		To create a DevTools page for your extension, add the <code>devtools_page</code> field in the extension manifest:
	</p>
	<pre>
{
"name": ...
"version": "1.0",
"devtools_page": "devtools.html",
...
}
</pre>
	<p>
		An instance of the <code>devtools_page</code> specified in your extension's manifest is created for every DevTools window opened. The page may add other extension pages as panels and sidebars to the DevTools window using the <code><a href="https://developer.chrome.com/extensions/devtools_panels">devtools.panels</a></code> API.
	</p>
	<p class="note">
		The <code>devtools_page</code> field must point to an HTML page. This differs from the <code>background</code> field, used for specifying a background page, which lets you specify JavaScript files directly.
	</p>
	<p>
		The <code>chrome.devtools.*</code> API modules are available only to the pages loaded within the DevTools window. Content scripts and other extension pages do not have these APIs. Thus, the APIs are available only through the lifetime of the DevTools window.
	</p>
	<h2 id="devtools-ui">
		DevTools UI elements: panels and sidebar panes
	</h2>
	<p>
		In addition to the usual extension UI elements, such as browser actions, context menus and popups, a DevTools extension can add UI elements to the DevTools window:
	</p>
	<ul>
		<li>A <em>panel</em> is a top-level tab, like the Elements, Sources, and Network panels.
		</li>
		<li>A <em>sidebar pane</em> presents supplementary UI related to a panel. The Styles, Computed Styles, and Event Listeners panes on the Elements panel are examples of sidebar panes. Currently your extension can only add sidebar panes to the Elements panel. (Note that the appearance of sidebar panes may not match the image, depending on the version of Opera you're using, and where the DevTools window is docked.)
		</li>
	</ul><img src="/static/images/devtools-extension-ui.png" alt="DevTools window showing Elements panel and Styles sidebar pane.">
	<p>
		Each panel is its own HTML file, which can include other resources (JavaScript, CSS, images, and so on). Creating a basic panel looks like this:
	</p>
	<pre>
chrome.devtools.panels.create("My Panel",
"MyPanelIcon.png",
"Panel.html",
function(panel) {
// code invoked on panel creation
}
);
</pre>
	<p>
		JavaScript executed in a panel or sidebar pane has access to the the same APIs as the DevTools page.
	</p>
	<p>
		Creating a basic sidebar pane for the Elements panel looks like this:
	</p>
	<pre>
chrome.devtools.panels.elements.createSidebarPane("My Sidebar",
function(sidebar) {
// sidebar initialization code here
sidebar.setObject({ some_data: "Some data to show" });
});
</pre>
	<p>
		There are several ways to display content in a sidebar pane:
	</p>
	<ul>
		<li>
			<p>
				HTML content. Call <code><a href="https://developer.chrome.com/extensions/devtools_panels#method-ExtensionSidebarPane-setPage">setPage</a></code> to specify an HTML page to display in the pane.
			</p>
		</li>
		<li>
			<p>
				JSON data. Pass a JSON object to <code><a href="https://developer.chrome.com/extensions/devtools_panels#method-ExtensionSidebarPane-setObject">setObject</a></code>.
			</p>
		</li>
		<li>
			<p>
				JavaScript expression. Pass an expression to <code><a href="https://developer.chrome.com/extensions/devtools_panels#method-ExtensionSidebarPane-setExpression">setExpression</a></code>. DevTools evaluates the expression in the context of the inspected page, and displays the return value.
			</p>
		</li>
	</ul>
	<p>
		For both <code>setObject</code> and <code>setExpression</code>, the pane displays the value as it would appear in the DevTools console. However, <code>setExpression</code> lets you display DOM elements and arbitrary JavaScript objects, while <code>setObject</code> only supports JSON objects.
	</p>
	<h2 id="solutions">
		Communicating between extension components
	</h2>
	<p>
		The following sections describe some typical scenarios for communicating between the different components of a DevTools extension.
	</p>
	<h3 id="injecting">
		Injecting a Content Script
	</h3>
	<p>
		The DevTools page can't call <code><a href="https://developer.chrome.com/extensions/tabs#method-executeScript">tabs.executeScript</a></code> directly. To inject a content script from the DevTools page, you must retrieve the ID of the inspected window's tab using the <code><a href="https://developer.chrome.com/extensions/devtools_inspectedWindow#property-tabId">inspectedWindow.tabId</a></code> property and send a message to the background page. From the background page, call <code><a href="https://developer.chrome.com/extensions/tabs#method-executeScript">tabs.executeScript</a></code> to inject the script.
	</p>
	<p class="note">
		If a content script has already been injected, you can add additional context scripts using the <code>eval</code> method. See <a href="#selected-element">Passing the Selected Element to a Content Script</a> for more information.
	</p>
	<p>
		The following code snippets show how to inject a content script using <code>executeScript</code>.
	</p>
	<pre>
// DevTools page -- devtools.js
// Create a connection to the background page
var backgroundPageConnection = chrome.runtime.connect({
name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
// Handle responses from the background page, if any
});

// Relay the tab ID to the background page
chrome.runtime.sendMessage({
tabId: chrome.devtools.inspectedWindow.tabId,
scriptToInject: "content_script.js"
});
</pre>
	<p>
		Code for the background page:
	</p>
	<pre>
// Background page -- background.js
chrome.runtime.onConnect.addListener(function(devToolsConnection) {
// assign the listener function to a variable so we can remove it later
var devToolsListener = function(message, sender, sendResponse) {
// Inject a content script into the identified tab
chrome.tabs.executeScript(message.tabId,
	{ file: message.scriptToInject });
}
// add the listener
devToolsConnection.onMessage.addListener(devToolsListener);

devToolsConnection.onDisconnect(function() {
 devToolsConnection.onMessage.removeListener(devToolsListener);
});
}
</pre>
	<h3 id="evaluating-js">
		Evaluating JavaScript in the Inspected Window
	</h3>
	<p>
		You can use the <code><a href="https://developer.chrome.com/extensions/devtools_inspectedWindow#method-eval">inspectedWindow.eval</a></code> method to execute JavaScript code in the context of the inspected page. You can invoke the <code>eval</code> method from a DevTools page, panel or sidebar pane.
	</p>
	<p>
		By default, the expression is evaluated in the context of the main frame of the page. Use the <code>useContentScriptContext: true</code> option to evaluate the expression in the same context as the content scripts.
	</p>
	<p>
		Calling <code>eval</code> with <code>useContentScriptContext: true</code> does not <em>create</em> a content script context, so you must load a context script before calling <code>eval</code>, either by calling <code>executeScript</code> or by specifying a content script in the <code>manifest.json</code> file.
	</p>
	<p>
		Once the context script context exists, you can use this option to inject additional content scripts.
	</p>
	<p class="warning">
		The <code>eval</code> method is powerful when used in the right context and dangerous when used inappropriately. Use the <code><a href="https://developer.chrome.com/extensions/tabs#method-executeScript">tabs.executeScript</a></code> method if you don't need access to the JavaScript context of the inspected page. For detailed cautions and a comparison of the two methods, see <code><a href="https://developer.chrome.com/extensions/devtools_inspectedWindow">devtools.inspectedWindow</a></code>.
	</p>
	<h3 id="selected-element">
		Passing the Selected Element to a Content Script
	</h3>
	<p>
		The content script doesn't have direct access to the current selected element. However, any code you execute using <code><a href="https://developer.chrome.com/extensions/devtools_inspectedWindow#method-eval">inspectedWindow.eval</a></code> has access to the DevTools console and command-line APIs. For example, in evaluated code you can use <code>$0</code> to access the selected element.
	</p>
	<p>
		To pass the selected element to a content script:
	</p>
	<ul>
		<li>Create a method in the content script that takes the selected element as an argument.
		</li>
		<li>Call the method from the DevTools page using <code><a href="https://developer.chrome.com/extensions/devtools_inspectedWindow#method-eval">inspectedWindow.eval</a></code> with the <code>useContentScriptContext: true</code> option.
		</li>
	</ul>
	<p>
		The code in your content script might look something like this:
	</p>
	<pre>
function setSelectedElement(el) {
// do something with the selected element
}
</pre>
	<p>
		Invoke the method from the DevTools page like this:
	</p>
	<pre>
chrome.devtools.inspectedWindow.eval("setSelectedElement($0)",
{ useContentScriptContext: true });
</pre>
	<p>
		The <code>useContentScriptContext: true</code> option specifies that the expression must be evaluated in the same context as the content scripts, so it can access the <code>setSelectedElement</code> method.
	</p>
	<h3 id="content-script-to-devtools">
		Messaging from Content Scripts to the DevTools Page
	</h3>
	<p>
		Messaging between the DevTools page and content scripts is indirect, by way of the background page.
	</p>
	<p>
		When sending a message <em>to</em> a content script, the background page can use the <code><a href="https://developer.chrome.com/extensions/tabs#method-sendMessage">tabs.sendMessage</a></code> method, which directs a message to the content scripts in a specific tab, as shown in <a href="#injecting">Injecting a Content Script</a>.
	</p>
	<p>
		When sending a message <em>from</em> a content script, there is no ready-made method to deliver a message to the correct DevTools page instance associated with the current tab. As a workaround, you can have the DevTools page establish a long-lived connection with the background page, and have the background page keep a map of tab IDs to connections, so it can route each message to the correct connection.
	</p>
	<pre>
// background.js
var connections = {};

chrome.runtime.onConnect.addListener(function (port) {

var extensionListener = function (message, sender, sendResponse) {

// The original connection event doesn't include the tab ID of the
// DevTools page, so we need to send it explicitly.
if (message.name == "init") {
	connections[message.tabId] = port;
	return;
}

// other message handling
}

// Listen to messages sent from the DevTools page
port.onMessage.addListener(extensionListener);

port.onDisconnect.addListener(function(port) {
port.onMessage.removeListener(extensionListener);

var tabs = Object.keys(connections);
for (var i=0, len=tabs.length; i &lt; len; i++) {
	if (connections[tabs[i]] == port) {
	delete connections[tabs[i]]
	break;
	}
}
});
});

// Receive message from content script and relay to the devTools page for the
// current tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// Messages from content scripts should have sender.tab set
if (sender.tab) {
var tabId = sender.tab.id;
if (tabId in connections) {
connections[tabId].postMessage(request);
} else {
console.log("Tab not found in connection list.");
}
} else {
console.log("sender.tab not defined.");
}
return true;
});
</pre>
	<p>
		The DevTools page (or panel or sidebar pane) establishes the connection like this:
	</p>
	<pre>
// Create a connection to the background page
var backgroundPageConnection = chrome.runtime.connect({
name: "panel"
});

backgroundPageConnection.postMessage({
name: 'init',
tabId: chrome.devtools.inspectedWindow.tabId
});
</pre>
	<h3 id="detecting-open-close">
		Detecting When DevTools Opens and Closes
	</h3>
	<p>
		If your extension needs to track whether the DevTools window is open, you can add an <a href="https://developer.chrome.com/extensions/runtime#event-onConnect">onConnect</a> listener to the background page, and call <a href="https://developer.chrome.com/extensions/runtime#method-connect">connect</a> from the DevTools page. Since each tab can have its own DevTools window open, you may receive multiple connect events. To track whether any DevTools window is open, you need to count the connect and disconnect events as shown below:
	</p>
	<pre>
// background.js
var openCount = 0;
chrome.runtime.onConnect.addListener(function (port) {
if (port.name == "devtools-page") {
if (openCount == 0) {
alert("DevTools window opening.");
}
openCount++;

port.onDisconnect.addListener(function(port) {
	openCount--;
	if (openCount == 0) {
	alert("Last DevTools window closing.");
	}
});
}
});
</pre>
	<p>
		The DevTools page creates a connection like this:
	</p>
	<pre>
// devtools.js

// Create a connection to the background page
var backgroundPageConnection = chrome.runtime.connect({
name: "devtools-page"
});
</pre>
</div>
