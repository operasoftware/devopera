---
title: NPAPI Plugins
support: 16
source: http://developer.chrome.com/extensions/npapi.html
license: cc-by-3.0
---

**Warning:** NPAPI support will be deprecated from Opera 20 onward. We recommend converting your extension to use other extension APIs or [native messaging](/extensions/message-passing/#native-messaging) instead.

## Introduction

Leveraging HTML and JavaScript makes developing new extensions really easy, but what if you have existing legacy or proprietary code that you want to reuse in your extension? In that case, you can bundle an NPAPI plugin with your extension, allowing you to call into native binary code from JavaScript.

Code running in an NPAPI plugin has the full permissions of the current user and is not sandboxed or shielded from malicious input by Opera in any way. You should be especially cautious when processing input from untrusted sources, such as when working with content scripts or XMLHttpRequest.

## Details

How to develop an NPAPI plugin is outside the scope of this document. See [Mozilla’s NPAPI plugin reference](https://developer.mozilla.org/en/Plugins) for information on how to do that.

Once you have an NPAPI plugin, follow these steps to get your extension using it.

### 1. Manifest

Add a section to your extension’s `manifest.json` that describes where to find the plugin, along with other properties about it:

	{
		"name": "My Extension",
		"plugins": [
			{ "path": "extension_plugin.dll" }
		]
	}

The `path` property specifies the path to your plugin, relative to the manifest file. The `public` property specifies whether your plugin can be accessed by regular web pages; the default is `false`, meaning only your extension can load the plugin. Add `"public": true` to make your plugin accessible on regular web pages and content scripts. But be careful — any web page will then be able to call into your plugin.

### 2. HTML file

Create an HTML file that loads your plugin by mime-type. Assuming your mime-type is `application/x-my-extension`

	<embed type="application/x-my-extension" id="pluginId">
	<script>
		var plugin = document.getElementById('pluginId');
		// Call a method in your plugin
		var result = plugin.myPluginMethod();
		console.log('My plugin returned: ' + result);
	</script>

This can be inside a background page or any other HTML page used by your extension. If your plugin is `public`, you can even use a content script to programmatically insert your plugin into a web page.

## Security considerations

Including an NPAPI plugin in your extension is dangerous because plugins have unrestricted access to the local machine. If your plugin contains a vulnerability, an attacker might be able to exploit that vulnerability to install malicious software on the user’s machine. Hence, avoid including an NPAPI plugin whenever possible.

Furthermore, marking your NPAPI plugin `public` increases the attack surface of your extension because the plugin is exposed directly to web content, making it easier for a malicious web site to manipulate your plugin. Hence, avoid making your NPAPI plugin public whenever possible.
