---

title: Passing messages in extensions
author: shwetankdixit
copyright: opera-google-ccby
originalsource: http://developer.chrome.com/extensions/messaging.html
---

## Introduction

Communicating and passing messages around is an essential part in developing extensions. Let’s take a look at the different ways to do that using the Opera Extensions API.

The two broad types of communication methods we have are simple short lived messages, and a more long lived communication method. We’ll cover both in this article.

## Simple short lived communication

If all you need to do is to send a one-shot message to another part of the extension, and optionally get a callback, then you can use the `runtime.sendMessage()` or `tabs.sendMessage()` methods to do so. To receive a message, use the `runtime.onMessage()` method.

Let’s take an example of an extension which (on click of a button) counts the number of `<p>` elements in the page and updates the button with a badge showing the number.

In the background script, we initially write:

<pre class="prettyprint">
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tab) { /*Select active tab of the current window*/
       chrome.tabs.sendMessage(tab\[0].id, {line: 'countparas'}); /*Send a message to the content script*/
    });
});
</pre>

So in effect, we are selecting the currently active tab of the current window and sending a message the content script associated with it. When the content script receives this message, it will initiate a function, like so:

<pre class="prettyprint">
chrome.runtime.onMessage.addListener(
	function (request, sender){
		if (request.line=='countparas'){ /* If we get the request from the Background script */
			var paras = document.body.querySelectorAll('p'); /* Select all `&lt;p>` elements in the document body */
			if (paras.length > 0){ /* If the number of `&lt;p>` elements is greater than zero */
			var theCount = paras.length+''; /* Assigning that number to a variable called 'theCount' and convert it to a string format */
			chrome.runtime.sendMessage({count:theCount}); /* Send the count back to the background script */
			} else {
				alert('There does not seem to be any `&lt;p>` elements in this page!');
			}
		}
});
</pre>

Here the content script is listening for the message ‘countparas’, and only once it receives it, it initiates the counting of all the `<p>`elements in the page. Once it does that, it sends back a message with the count.

The background script once again listens for a message from the content script regarding the count, and once it does, it updates the badge like so:

<pre class="prettyprint">
chrome.runtime.onMessage.addListener(
	function (request, sender) {
		if (request.count){ /*If there exists a value named 'count' in the message sent by content script */
			console.log('Count of paragraphs in the document is: '+request.count + 'and tab id is '+sender.tab.id);
			var mytext = ""+request.count+"";
			chrome.browserAction.setBadgeText({text: mytext}); /*Set the badge of the extension to the value of 'mytext'*/
		}
	}

);
</pre>

Feel free to [download the extension](samples/MessagePassing.nex) and examine it further.

## Cross-extension messaging

In addition to sending messages between different components in your extension, you can use the messaging API to communicate with other extensions. This lets you expose a public API that other extensions can take advantage of.

Listening for incoming requests and connections is similar to the internal case, except you use the [runtime.onMessageExternal](https://developer.chrome.com/apps/runtime#event-onMessageExternal) or [runtime.onConnectExternal](https://developer.chrome.com/apps/runtime#event-onConnectExternal) methods. Here's an example of each:

<pre class="prettyprint">
// For simple requests:
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (sender.id == blacklistedExtension)
      return;  // don&#39;t allow this extension access
    else if (request.getTargetData)
      sendResponse({targetData: targetData});
    else if (request.activateLasers) {
      var success = activateLasers();
      sendResponse({activateLasers: success});
    }
  });

// For long-lived connections:
chrome.runtime.onConnectExternal.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    // See other examples for sample onMessage handlers.
  });
});
</pre>

Likewise, sending a message to another extension is similar to sending one within your extension. The only difference is that you must pass the ID of the extension you want to communicate with. For example:

<pre class="prettyprint">
/ The ID of the extension we want to talk to.
var laserExtensionId = &quot;abcdefghijklmnoabcdefhijklmnoabc&quot;;

// Make a simple request:
chrome.runtime.sendMessage(laserExtensionId, {getTargetData: true},
  function(response) {
    if (targetInRange(response.targetData))
      chrome.runtime.sendMessage(laserExtensionId, {activateLasers: true});
  });

// Start a long-running conversation:
var port = chrome.runtime.connect(laserExtensionId);
port.postMessage(...);
</pre>

## Sending messages from web pages

Similar to cross-extension messaging, your app or extension can receive and respond to messages from regular web pages. To use this feature, you must first specify in your manifest.json which web sites you want to communicate with. For example:

<pre class="prettyprint">
&quot;externally_connectable&quot;: {
  &quot;matches&quot;: [&quot;*://*.example.com/*&quot;]
}
</pre>

This will expose the messaging API to any page which matches the URL patterns you specify. The URL pattern must contain at least a second-level domain - that is, hostname patterns like "\*", "\*\.com", "\*\.co\.uk", and "\*\.appspot\.com" are prohibited. From the web page, use the runtime.sendMessage or runtime.connect APIs to send a message to a specific app or extension. For example:

<pre class="prettyprint">
// The ID of the extension we want to talk to.
var editorExtensionId = &quot;abcdefghijklmnoabcdefhijklmnoabc&quot;;

// Make a simple request:
chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: url},
  function(response) {
    if (!response.success)
      handleError(url);
  });
</pre>

From your app or extension, you may listen to messages from web pages via the runtime.onMessageExternal or runtime.onConnectExternal APIs, similar to cross-extension messaging. Only the web page can initiate a connection. Here is an example:

<pre class="prettyprint">
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (sender.url == blacklistedWebsite)
      return;  // don&#39;t allow this web page access
    if (request.openUrlInEditor)
      openUrl(request.openUrlInEditor);
  });
</pre>

## Native messaging

**Note**: This will be fully available from Opera 20 onwards.

Extensions can exchange messages with native applications. Native applications that support this feature must register a native messaging host that knows how to communicate with the extension. Chrome starts the host in a separate process and communicates with it using standard input and standard output streams.

### Native messaging host

In order to register a native messaging host the application must install a manifest file that defines the native messaging host configuration. Below is an example of the manifest file:

<pre class="prettyprint">
{
  &quot;name&quot;: &quot;com.my_company.my_application&quot;,
  &quot;description&quot;: &quot;My Application&quot;,
  &quot;path&quot;: &quot;C:\\Program Files\\My Application\\chrome_native_messaging_host.exe&quot;,
  &quot;type&quot;: &quot;stdio&quot;,
  &quot;allowed_origins&quot;: [
    &quot;chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/&quot;
  ]
}
</pre>

Native messaging host manifest file contains the following fields:

<table class="simple">
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>name</code></td>
    <td>Name of the native messaging host. Clients pass this string to
    <a href="https://developer.chrome.com/apps/runtime#method-connectNative">runtime.connectNative</a> or <a href="https://developer.chrome.com/apps/runtime#method-sendNativeMessage">runtime.sendNativeMessage</a>.</td>
  </tr>
  <tr>
    <td><code>description</code></td>
    <td>Short application description.</td>
  </tr>
  <tr>
    <td><code>path</code></td>
    <td>Path to the native messaging host binary. On Linux and OSX the path must
    be absolute. On Windows it can be relative to the directory in which the
    manifest file is located.</td>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td>Type of the interface used to communicate with the native messaging
    host. Currently there is only one possible value for this parameter:
    <code>stdio</code>. It indicates that Chrome should use <code>stdin</code>
    and <code>stdout</code> to communicate with the host.</td>
  </tr>
  <tr>
    <td><code>allowed_origins</code></td>
    <td>List of extensions that should have access to the native messaging host.</td>
  </tr>
</table>

Location of the manifest file depends on the platform:

**Windows**:
The manifest file can be located anywhere in the file system. The application installer must create registry key `HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts\com.my_company.my_application` and set default value of that key to the full path to the manifest file.

**OSX**:
The manifest file must be placed at `/Library/Google/Chrome/NativeMessagingHosts/com.my_company.my_application.json`.

Opera starts each native messaging host in a separate process and communicates with it using standard input (`stdin`) and standard output (`stdout`). The same format is used to send messages in both directions: each message is serialized using JSON, UTF-8 encoded and is preceded with 32-bit message length in native byte order.



## Other methods of communication

In some situations you might want a more *persistent* form of communication between the different parts of your extension, in which case you can open a message channel between your content script and the extension page using [`runtime.connect()`](https://developer.chrome.com/apps/runtime#method-connect) or [`tabs.connect()`](https://developer.chrome.com/extensions/tabs#method-connect).

You can communicate between different extensions by using the [`runtime.onMessageExternal()`](https://developer.chrome.com/apps/runtime#event-onMessageExternal) and [`runtime.onConnectExternal()`](https://developer.chrome.com/apps/runtime#event-onConnectExternal) methods.
