---
title: Optional permissions
copyright: opera-google-ccby
originalsource: http://developer.chrome.com/extensions/permissions.html
---
<h2>Introduction</h2>
<p>You can use the <a href="https://developer.chrome.com/extensions/permissions"><code>chrome.permissions</code> API</a> to request <a href="#manifest">declared optional permissions</a> at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.</p>


<h2 id="types">
Step 1: Decide which permissions are required and which are optional
</h2>

<p>
An extension can declare both required and optional permissions. In general, you should:
<ul>
<li>Use required permissions when they are needed for your extension’s basic functionality.</li>
<li>Use optional permissions when they are needed for optional features in your extension.</li>
</ul>
</p>

<p>
Advantages of <em>required</em> permissions:
<ul>
<li><strong>Fewer prompts:</strong>
An extension can prompt the user once to accept all permissions.</li>
<li><strong>Simpler development:</strong>
Required permissions are guaranteed to be present.</li>
</ul>
</p>

<p>
Advantages of <em>optional</em> permissions:
<ul>
<li><strong>Better security:</strong>
Extensions run with fewer permissions since users only enable permissions that are needed.</li>
<li><strong>Better information for users:</strong>
An extension can explain why it needs a particular permission when the user enables the relevant feature.</li>
<li><strong>Easier upgrades:</strong>
When you upgrade your extension, Opera will not disable it for your users if the upgrade adds optional rather than required permissions.</li>
</ul>
</p>

<h2 id="manifest"> Step 2: Declare optional permissions in the manifest </h2>
<p>
Declare optional permissions in your <a href="manifest.html">extension
manifest</a> with the <code>optional_permissions</code> key, using the
same format as the <a href="declare_permissions.html#manifest">permissions</a>
field:
</p>

<pre class="prettyprint" data-filename="manifest.json">
{
"name": "My extension",
...
<b>"optional_permissions": [ "tabs", "http://www.example.com/" ],</b>
...
}
</pre>

<p>
You can specify any of the following as optional
<a href="declare_permissions.html">permissions</a>:
<ul>
<li><i>host permissions</i></li>
<li>background</li>
<li>bookmarks</li>
<li>clipboardRead</li>
<li>clipboardWrite</li>
<li>contentSettings</li>
<li>contextMenus</li>
<li>cookies</li>
<li>debugger</li>
<li>history</li>
<li>idle</li>
<li>management</li>
<li>notifications</li>
<li>pageCapture</li>
<li>tabs</li>
<li>topSites</li>
<li>webNavigation</li>
<li>webRequest</li>
<li>webRequestBlocking</li>
</ul>
</p>

<h2 id="request"> Step 3: Request optional permissions </h2>
<p>
Request the permissions from within a user gesture using
<code>permissions.request()</code>:
<pre class="prettyprint">
document.querySelector('#my-button').addEventListener('click', function (event) {
	// Permissions must be requested from inside a user gesture, like a button's
	// click handler.
	chrome.permissions.request({
		permissions: ['tabs'],
		origins: ['http://www.example.com/']
	}, function (granted) {
		// The callback argument will be true if the user granted the permissions.
		if (granted) {
			doSomething();
		} else {
			doSomethingElse();
		}
	});
});
</pre>
</p>

<p>
Opera prompts the user if adding the permissions results in different warning messages than the user has
already seen and accepted.

<h2 id="contains"> Step 4: Check the extension's current permissions </h2>
<p>
To check whether your extension has a specific permission or set of
permissions, use <code>permission.contains()</code>:
</p>

<pre class="prettyprint">
chrome.permissions.contains({
	permissions: ['tabs'],
	origins: ['http://www.google.com/']
}, function (result) {
	if (result) {
		// The extension has the permissions.
	} else {
		// The extension doesn't have the permissions.
	}
});
</pre>

<h2 id="remove"> Step 5: Remove the permissions </h2>
<p>
You should remove permissions when you no longer need them.
After a permission has been removed, calling
<code>permissions.request()</code> usually adds the permission back without
prompting the user.
</p>

<pre class="prettyprint">
chrome.permissions.remove({
	permissions: ['tabs'],
	origins: ['http://www.google.com/']
}, function (removed) {
	if (removed) {
		// The permissions have been removed.
	} else {
		// The permissions have not been removed (e.g., you tried to remove
		// required permissions).
	}
});
</pre>
