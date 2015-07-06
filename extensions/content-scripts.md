---
title: Content Scripts
source: http://developer.chrome.com/trunk/extensions/content_scripts.html
license: cc-by-3.0
---

## Contents

1. [Manifest](#registration)
	1. [Match patterns and globs](#match-patterns-globs)
2. [Programmatic injection](#pi)
3. [Execution environment](#execution-environment)
4. [Communication with the embedding page](#host-page-communication)
5. [Security considerations](#security-considerations)
6. [Referring to extension files](#extension-files)

Content scripts are JavaScript files that run in the context of web pages. By using the standard [Document Object Model](http://www.w3.org/TR/DOM-Level-2-HTML/) (DOM), they can read details of the web pages the browser visits, or make changes to them.

Here are some examples of what content scripts can do:

- Find unlinked URLs in web pages and convert them into hyperlinks
- Increase the font size to make text more legible
- Find and process [microformat](http://microformats.org/) data in the DOM

However, content scripts have some limitations. They **cannot**:

- Use chrome.* APIs (except for parts of [`chrome.extension`](https://developer.chrome.com/extensions/extension))
- Use variables or functions defined by their extension’s pages
- Use variables or functions defined by web pages or by other content scripts

These limitations aren’t as bad as they sound. Content scripts can _indirectly_ use the chrome.* APIs, get access to extension data, and request extension actions by exchanging [messages](/extensions/message-passing/) with their parent extension. Content scripts can also make cross-site XMLHttpRequests to the same sites as their parent extensions, and they can communicate with web pages using the shared DOM. For more insight into what content scripts can and can’t do, learn about the execution environment.

## Manifest {#registration}

If your content script’s code should always be injected, register it in the [extension manifest](/extensions/manifest/) using the `content_scripts` field, as in the following example.

	{
		"name": "My extension",
		…
		"content_scripts": [
			{
				"matches": ["http://www.google.com/*"],
				"css": ["mystyles.css"],
				"js": ["jquery.js", "myscript.js"]
			}
		],
		…
	}

If you want to inject the code only sometimes, use the [`permissions`](/extensions/manifest/#permissions) field instead, as described in Programmatic injection.

	{
		"name": "My extension",
		…
		"permissions": [
			"tabs", "http://www.google.com/*"
		],
		…
	}

Using the `content_scripts` field, an extension can insert multiple content scripts into a page; each of these content scripts can have multiple JavaScript and CSS files. Each item in the `content_scripts` array can have the following properties:

<table>
<tr>
	<th>Name</th>
	<th>Type</th>
	<th>Description</th>
</tr>
<tr>
	<td><code>matches</code></td>
	<td>array of strings</td>
	<td>
		<em>Required.</em> Specifies which pages this content script will be injected into. See <a href="/extensions/match-patterns/">Match Patterns</a> for more details on the syntax of these strings and <a href="#match-patterns-globs">Match patterns and globs</a> for information on how to exclude URLs.
	</td>
</tr>
<tr>
	<td><code>exclude_matches</code></td>
	<td>array of strings</td>
	<td>
		<em>Optional.</em> Excludes pages that this content script would otherwise be injected into. See <a href="/extensions/match-patterns/">Match Patterns</a> for more details on the syntax of these strings and <a href="#match-patterns-globs">Match patterns and globs</a> for information on how to exclude URLs.
	</td>
</tr>
<tr>
	<td><code>css</code></td>
	<td>array of strings</td>
	<td>
		<em>Optional.</em> The list of CSS files to be injected into matching pages. These are injected in the order they appear in this array, before any DOM is constructed or displayed for the page.
	</td>
</tr>
<tr>
	<td><code>js</code></td>
	<td>array of strings</td>
	<td>
		<em>Optional.</em> The list of JavaScript files to be injected into matching pages. These are injected in the order they appear in this array.
	</td>
</tr>
<tr>
	<td><code>run_at</code></td>
	<td>string</td>
	<td>
		<em>Optional.</em> Controls when the files in <code>js</code> are injected. Can be <code>document_start</code>, <code>document_end</code>, or <code>document_idle</code>. Defaults to <code>document_idle</code>. In the case of <code>document_start</code>, the files are injected after any files from <code>css</code>, but before any other DOM is constructed or any other script is run. In the case of <code>document_end</code>, the files are injected immediately after the DOM is complete, but before subresources like images and frames have loaded. In the case of <code>document_idle</code>, the browser chooses a time to inject scripts between <code>document_end</code> and immediately after the <code><a href="http://www.whatwg.org/specs/web-apps/current-work/#handler-onload">window.onload</a></code> event fires. The exact moment of injection depends on how complex the document is and how long it is taking to load, and is optimized for page load speed. <strong>Note:</strong> With <code>document_idle</code>, content scripts may not necessarily receive the <code>window.onload</code> event, because they may run after it has already fired. In most cases, listening for the <code>onload</code> event is unnecessary for content scripts running at <code>document_idle</code> because they are guaranteed to run after the DOM is complete. If your script definitely needs to run after <code>window.onload</code>, you can check if <code>onload</code> has already fired by using the <code><a href="http://www.whatwg.org/specs/web-apps/current-work/#dom-document-readystate">document.readyState</a></code> property.
	</td>
</tr>
<tr>
	<td><code>all_frames</code></td>
	<td>boolean</td>
	<td>
		<em>Optional.</em> Controls whether the content script runs in all frames of the matching page, or only the top frame.<br><br>Defaults to <code>false</code>, meaning that only the top frame is matched.
	</td>
</tr>
<tr>
	<td><code>include_globs</code></td>
	<td>array of string</td>
	<td>
		<em>Optional.</em> Applied after <code>matches</code> to include only those URLs that also match this glob. Intended to emulate the <a href="http://wiki.greasespot.net/Metadata_Block#.40include"><code>@include</code></a> Greasemonkey keyword. See <a href="#match-patterns-globs">Match patterns and globs</a> below for more details.
	</td>
</tr>
<tr>
	<td><code>exclude_globs</code></td>
	<td>array of string</td>
	<td>
		<em>Optional.</em> Applied after <code>matches</code> to exclude URLs that match this glob. Intended to emulate the <a href="http://wiki.greasespot.net/Metadata_Block#.40include"><code>@exclude</code></a> Greasemonkey keyword. See <a href="#match-patterns-globs">Match patterns and globs</a> below for more details.
	</td>
</tr>
</table>

### Match patterns and globs {#match-patterns-globs}

The content script will be injected into a page if its URL matches any `matches` pattern and any `include_globs` pattern, as long as the URL doesn’t also match an `exclude_matches` or `exclude_globs` pattern. Because the `matches` property is required, `exclude_matches`, `include_globs`, and `exclude_globs` can only be used to limit which pages will be affected.

For example, assume `matches` is `["http://*.nytimes.com/*"]`:

- If `exclude_matches` is `["*://*/*business*"]`, then the content script would be injected into `http://www.nytimes.com/health` but not into `http://www.nytimes.com/business`.
- If `include_globs` is `["*nytimes.com/???s/*"]`, then the content script would be injected into `http:/www.nytimes.com/arts/index.html` and `http://www.nytimes.com/jobs/index.html` but not into `http://www.nytimes.com/sports/index.html`.
- If `exclude_globs` is `["*science*"]`, then the content script would be injected into `http://www.nytimes.com` but not into `http://science.nytimes.com` or `http://www.nytimes.com/science`.

Glob properties follow a different, more flexible syntax than [match patterns](/extensions/match-patterns/). Acceptable glob strings are URLs that may contain “wildcard” asterisks and question marks. The asterisk `*` matches any string of any length (including the empty string); the question mark `?` matches any single character.

For example, the glob `http://???.example.com/foo/*` matches any of the following:

- `http://www.example.com/foo/bar`
- `http://the.example.com/foo/`

However, it does _not_ match the following:

- `http://my.example.com/foo/bar`
- `http://example.com/foo/`
- `http://www.example.com/foo`

## Programmatic injection {#pi}

Inserting code into a page programmatically is useful when your JavaScript or CSS code shouldn’t be injected into every single page that matches the pattern — for example, if you want a script to run only when the user clicks a browser action’s icon.

To insert code into a page, your extension must have cross-origin permissions for the page. It also must be able to use the `chrome.tabs` module. You can get both kinds of permission using the manifest file’s [permissions](/extensions/manifest/#permissions) field.

Once you have permissions set up, you can inject JavaScript into a page by calling [tabs.executeScript](https://developer.chrome.com/extensions/tabs#method-executeScript). To inject CSS, use [tabs.insertCSS](https://developer.chrome.com/extensions/tabs#method-insertCSS).

The following code (from the [make_page_red](http://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/api/browserAction/make_page_red/) example) reacts to a user click by inserting JavaScript into the current tab’s page and executing the script.

	/* in background.html */
	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript(null,
		{
			code: 'document.body.bgColor = "red"'
		});
	});

	/* in manifest.json */
	"permissions": [
		"tabs", "http://*/*"
	],

When the browser is displaying an HTTP page and the user clicks this extension’s browser action, the extension sets the page’s `bgcolor` property to `'red'`. The result, unless the page has CSS that sets the background color, is that the page turns red.

Usually, instead of inserting code directly (as in the previous sample), you put the code in a file. You inject the file’s contents like this:

	chrome.tabs.executeScript(
		null, {
			file: 'content_script.js'
		}
	);

## Execution environment {#execution-environment}

Content scripts execute in a special environment called an _isolated world_. They have access to the DOM of the page they are injected into, but not to any JavaScript variables or functions created by the page. It looks to each content script as if there is no other JavaScript executing on the page it is running on. The same is true in reverse: JavaScript running on the page cannot call any functions or access any variables defined by content scripts.

For example, consider this simple page:

	<!-- hello.html -->
	<html>
		<button id="mybutton">click me</button>
		<script>
			var greeting = 'hello, ';
			var button = document.getElementById('mybutton');
			button.person_name = 'Bob';
			button.addEventListener('click', function() {
				alert(greeting + button.person_name + '.');
			}, false);
		</script>
	</html>

Now, suppose this content script was injected into hello.html:

	/* contentscript.js */
	var greeting = "hola, ";
	var button = document.getElementById("mybutton");
	button.person_name = "Roberto";
	button.addEventListener("click", function() {
		alert(greeting + button.person_name + ".");
	}, false);

Now, if the button is pressed, you will see both greetings.

Isolated worlds allow each content script to make changes to its JavaScript environment without worrying about conflicting with the page or with other content scripts. For example, a content script could include jQuery v1 and the page could include jQuery v2, and they wouldn’t conflict with each other.

Another important benefit of isolated worlds is that they completely separate the JavaScript on the page from the JavaScript in extensions. This allows us to offer extra functionality to content scripts that should not be accessible from web pages without worrying about web pages accessing it.

## Communication with the embedding page {#host-page-communication}

Although the execution environments of content scripts and the pages that host them are isolated from each other, they share access to the page’s DOM. If the page wishes to communicate with the content script (or with the extension via the content script), it must do so through the shared DOM.

An example can be accomplished using `window.postMessage` (or `window.webkitPostMessage` for Transferable objects):

	/* contentscript.js */
	var port = chrome.runtime.connect();

	window.addEventListener('message', function(event) {
		// We only accept messages from ourselves
		if (event.source != window) {
			return;
		}

		if (event.data.type && (event.data.type == 'FROM_PAGE')) {
			console.log('Content script received: ' + event.data.text);
			port.postMessage(event.data.text);
		}
	}, false);

	/* http://foo.com/example.html */
	document.getElementById('theButton').addEventListener('click', function() {
		window.postMessage({
			type: 'FROM_PAGE',
			text: 'Hello from the webpage!'
		}, '*');
	}, false);

In the above example, example.html (which is not a part of the extension) posts messages to itself, which are intercepted and inspected by the content script, and then posted to the extension process. In this way, the page establishes a line of communication to the extension process. The reverse is possible through similar means.

## Security considerations {#security-considerations}

When writing a content script, you should be aware of two security issues. First, be careful not to introduce security vulnerabilities into the web site your content script is injected into. For example, if your content script receives content from another web site (for example, by making an XMLHttpRequest), be careful to filter that content for [cross-site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting) attacks before injecting the content into the current page. For example, prefer to inject content via innerText rather than innerHTML. Be especially careful when retrieving HTTP content on an HTTPS page because the HTTP content might have been corrupted by a network [“man-in-the-middle”](http://en.wikipedia.org/wiki/Man-in-the-middle_attack) if the user is on a hostile network.

Second, although running your content script in an isolated world provides some protection from the web page, a malicious web page might still be able to attack your content script if you use content from the web page indiscriminately. For example, the following patterns are dangerous:

	/* contentscript.js */
	var data = document.getElementById('json-data')
	// WARNING! Might be evaluating an evil script!
	var parsed = eval('(' + data + ')')

	/* contentscript.js */
	var elmt_id = …
	// WARNING! elmt_id might be '); … evil script … //'!
	window.setTimeout('animate(' + elmt_id + ')', 200);

Instead, prefer safer APIs that do not run scripts:

	/* contentscript.js */
	var data = document.getElementById('json-data')
	// JSON.parse does not evaluate the attacker’s scripts.
	var parsed = JSON.parse(data)

	/* contentscript.js */
	var elmt_id = …
	// The closure form of setTimeout does not evaluate scripts
	window.setTimeout(function() {
		animate(elmt_id);
	}, 200);

## Referring to extension files {#extension-files}

Get the URL of an extension’s file using `chrome.extension.getURL()`. You can use the result just like you would any other URL, as the following code shows.

	// Code for displaying <extensionDir>/images/myimage.png:
	var imgURL = chrome.extension.getURL('images/myimage.png');
	document.getElementById('someImage').src = imgURL;
