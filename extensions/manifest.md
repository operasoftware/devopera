---
title: 'Formats: Manifest Files'
support: 15
source: http://developer.chrome.com/trunk/extensions/manifest.html
license: cc-by-3.0
---

<div id="toc">
	<h2>Contents</h2>
	<ol>
		<li>
			<a href="manifest.html#overview"> Field summary </a>
		</li>
		<li>
			<a href="manifest.html#field_details">Field details</a>
			<ol>
				<li><a href="manifest.html#default_locale">default_locale</a></li>
				<li><a href="manifest.html#description">description</a></li>
				<li><a href="manifest.html#developer">developer</a></li>
				<li><a href="manifest.html#homepage_url">homepage_url</a></li>
				<li><a href="manifest.html#icons">icons</a></li>
				<li><a href="manifest.html#incognito">incognito</a></li>
				<li><a href="manifest.html#key">key</a></li>
				<li><a href="manifest.html#minimum_opera_version">minimum_opera_version</a></li>
				<li><a href="manifest.html#name">name</a></li>
				<li><a href="manifest.html#permissions">permissions</a></li>
				<li><a href="manifest.html#requirements">requirements</a></li>
				<li><a href="manifest.html#version">version</a></li>
				<li><a href="manifest.html#manifest_version">manifest_version</a></li>
				<li><a href="manifest.html#web_accessible_resources">web_accessible_resources</a></li>
				<li><a href="manifest.html#sandbox">sandbox</a></li>
			</ol>
		</li>
	</ol>
</div>




<p>
Every extension, installable web app, and theme has a
<a href="http://www.json.org">JSON</a>-formatted manifest file,
named <code>manifest.json</code>,
that provides important information.
</p>

<h2 id="overview"> Field summary </h2>

<p>
The following code shows the supported manifest fields,
with links to the page that discusses each field.
The only fields that are always required
are <b>name</b> and <b>version</b>.
</p>

<pre class="prettyprint">
{
	<em>// Required</em>
	"<a href="manifest.html#name">name</a>": "<em>My Extension</em>",
	"<a href="manifest.html#version">version</a>": "<em>versionString</em>",
	"<a href="manifest.html#manifest_version">manifest_version</a>": 2,

	<em>// Recommended</em>
	"<a href="manifest.html#description">description</a>": "<em>A plain text description</em>",
	"<a href="manifest.html#developer">developer</a>": { ... },
	"<a href="manifest.html#icons">icons</a>": { ... },
	"<a href="manifest.html#default_locale">default_locale</a>": "<em>en</em>",

	<em>// Pick one (or none)</em>
	"<a href="browserAction.html">browser_action</a>": {...},
	"<a href="pageAction.html">page_action</a>": {...},

	<em>// Add any of these that you need</em>
	"<a href="tut_architecture_overview.html#the-background-process">background</a>": {"persistent": false, ...},
	"<a href="tut_architecture_overview.html#the-background-process">background</a>": {"persistent": true, ...},
	"<a href="tut_content_scripts.html">content_scripts</a>": [...],
	"<a href="tut_architecture_overview.html#permissions-and-privileges">content_security_policy</a>": "<em>policyString</em>",
	"<a href="manifest.html#homepage_url">homepage_url</a>": "http://<em>path/to/homepage</em>",
	"<a href="manifest.html#incognito">incognito</a>": "spanning" <em>or</em> "split",
	"<a href="manifest.html#key">key</a>": "<em>publicKey</em>",
	"<a href="manifest.html#minimum_opera_version">minimum_opera_version</a>": "<em>versionString</em>",
	"<a href="tut_architecture_overview.html#the-options-page">options_page</a>": "<em>aFile</em>.html",
	"<a href="declare_permissions.html">permissions</a>": [...],
	"<a href="manifest.html#requirements">requirements</a>": {...},
	"update_url": "http://<em>path/to/updateInfo</em>.xml",
	"<a href="manifest.html#web_accessible_resources">web_accessible_resources</a>": [...],
	"<a href="manifest.html#sandbox">sandbox</a>": [...]
}
</pre>


<h2 id="field_details">Field details</h2>

<p>
This section covers fields that aren't described in another page.
For a complete list of fields,
with links to where they're described in detail,
see the <a href="manifest.html#overview">Field summary</a>.
</p>


<h3 id="default_locale">default_locale</h3>

<p>
Specifies the subdirectory of <code>_locales</code>
that contains the default strings for this extension.
This field is <b>required</b> in extensions
that have a <code>_locales</code> directory;
it <b>must be absent</b> in extensions
that have no <code>_locales</code> directory.
<!--For details, see
<a href="i18n.html">Internationalization</a>.
</p>-->

<h3 id="description">description</h3>

<p>
A plain text string
(no HTML or other formatting;
no more than 132 characters)
that describes the extension.
The description should be suitable for both
the browser's extension management UI
and the Opera addons site.
You can specify locale-specific strings for this field;
see <a href="i18n.html">Internationalization</a> for details.
</p>

<h3 id="developer">developer</h3>
<p>
Contains information about author of the extension. It can contain the fields <code>"name"</code> and <code>"url"</code>. For example,
<pre class="prettyprint">
"developer": { "name": "John Doe",
							 "url": "http://www.example.org" },
</pre>
</p>


<h3 id="homepage_url">homepage_url</h3>

<p>
The URL of the homepage for this extension. The extensions management page
will contain a link to this URL. If you distribute your
extension using the Opera addons site,
the homepage URL defaults to the extension's own page.
</p>

<h3 id="icons">icons</h3>

<p>
One or more icons that represent the extension.
You should always provide a 128x128 icon;
it's used during installation and by the Opera addons site.
Extensions should also provide a 48x48 icon,
which is used in the extensions management page.
You can also specify a 16x16 icon to be used as the favicon
for an extension's pages.
</p>

<p>
Icons should generally be in PNG format, because PNG has the best support for transparency.
They can, however, be in any format supported by Opera 15 and above, including BMP, GIF, ICO, and JPEG.
Here's an example of specifying the icons:
</p>

<pre class="prettyprint">
"icons": { "16": "icon16.png",
					 "48": "icon48.png",
					"128": "icon128.png" },
</pre>

<div class="note">
<p><b>Important:</b> Use only the documented icon sizes. You might notice that Opera sometimes resizes these icons down to smaller sizes. For example, the install dialog might shrink the 128-pixel icon down to 69 pixels. However, the details of
Opera's UI may change between versions, and these changes assume that
developers are using the documented sizes. If you use other sizes,
your icon may look bad in future versions of the browser.</p>
</div>

<h3 id="incognito">incognito</h3>

<p>
Either <code>"spanning"</code> or <code>"split"</code>, to specify how this extension will
behave if allowed to run in incognito mode.
</p>

<p>
The default for extensions is <code>"spanning"</code>, which means that the extension
will run in a single shared process. Any events or messages from an incognito
tab will be sent to the shared process, with an <em>incognito</em> flag
indicating where it came from. Because incognito tabs cannot use this shared
process, an extension using the <code>"spanning"</code> incognito mode will not be able to
load pages from its extension package into the main frame of an incognito tab.
</p>

<p>In <code>"split"</code> mode, if the extension contains a background page, this page will run in the incognito process. This incognito process runs along side the regular process, but has a separate memory-only cookie store. Each process sees events and messages only from its own context (for example, the incognito process will see only incognito tab updates). The processes are unable to communicate with each other.
</p>

<p>
As a rule of thumb, if your extension needs to load a tab in an incognito browser, use
<em>split</em> incognito behavior. If your extension needs to be logged
into a remote server or persist settings locally, use <em>spanning</em>
incognito behavior.
</p>

<h3 id="key">key</h3>

<p>
This value can be used to control
the unique ID of an extension when
it is loaded during development.
</p>

<p class="note">
<strong>Note:</strong> You don't usually need to
use this value. Instead, write your
code so that the key value doesn't matter
by using relative paths
and <a href="extension.html#method-getURL">extension.getURL</a>.
</p>

<p>
To get a suitable key value, first
install your extension from a <code>.crx</code> file.
Then, in your user data directory</a>, look in the file
<code>Default/Extensions/<em>&lt;extensionId&gt;</em>/<em>&lt;versionString&gt;</em>/manifest.json</code>.
You will see the key value filled in there.
</p>

<h3 id="minimum_opera_version"> minimum Opera version </h2>

<p>
The version of Opera that your extension requires, if any. The format for this string is the same as for the <a href="#version">version</a> field.
</p>

<h3 id="name">name</h3>

<p>
A short, plain text string
(no more than 45 characters)
that identifies the extension.
The name is used in the install dialog,
extension management UI,
and the Opera extensions catalog.
You can specify locale-specific strings for this field;
see <a href="i18n.html">Internationalization</a> for details.
</p>

<h3 id="permissions">permissions</h3>
<p>You need to declare your intent to use certain features by listing them in the <code>"permissions"</code> field. A typical example of it would be like so:</p>
<pre class="prettyprint">
"permissions": [
		"tabs",
		"http://*.opera.com",
		"contextMenus"
]
</pre>
<p>You can use match patterns to specify if the extension wants the code to run on certain pages. Please see the <a href="tut_match_patterns.html">article on match patterns</a> for more details.</p>
<p><em>Note</em>: If you want to display the favicon of a page, you would need to mention it in the permissions field as <code>"opera://favicon"</code>. Once you declare it in the permissions field, then you can use it like so:</p>
<pre class="prettyprint">
&lt;img src=&quot;opera://favicon/http://www.google.com/&quot;&gt;
</pre>

<h3 id="requirements">requirements</h3>
<p>
The "3D" requirement denotes GPU hardware acceleration.
The "webgl" requirement refers to the
<a href="http://www.khronos.org/webgl/">WebGL API</a>.
You can list the 3D-related features your extension requires,
as demonstrated in the following example:
</p>

<pre class="prettyprint">
"requirements": {
	"3D": {
		"features": ["webgl"]
	}
}
</pre>

<h3 id="version">version</h3>

<p>
One to four dot-separated integers
identifying the version of this extension.
A couple of rules apply to the integers:
they must be between 0 and 65535, inclusive,
and non-zero integers can't start with 0.
For example, 99999 and 032 are both invalid.
</p>

<p>
Here are some examples of valid versions:
</p>

<ul>
	<li> <code>"version": "1"</code> </li>
	<li> <code>"version": "1.0"</code> </li>
	<li> <code>"version": "2.10.2"</code> </li>
	<li> <code>"version": "3.1.2.4567"</code> </li>
</ul>

<p>
The autoupdate system compares versions
to determine whether an installed extension
needs to be updated.
If the published extension has a newer version string
than the installed extension,
then the extension is automatically updated.
</p>

<p>
The comparison starts with the leftmost integers.
If those integers are equal,
the integers to the right are compared,
and so on.
For example, 1.2.0 is a newer version than 1.1.9.9999.
</p>

<p>
A missing integer is equal to zero.
For example, 1.1.9.9999 is newer than 1.1.
</p>

<!--
<p>
For more information, see
<a href="autoupdate.html">Autoupdating</a>.
</p>
-->


<h3 id="manifest_version">manifest_version</h3>

<p>
One integer specifying the version of the manifest file format your package
requires. As of Opera 15, developers <em>should</em> specify <code>2</code>
(without quotes) to use the format as described by this document:
</p>

<pre class="prettyprint">"manifest_version": 2</pre>

<h3 id="web_accessible_resources">web_accessible_resources</h3>

<p>
An array of strings specifying the paths (relative to the package root) of
packaged resources that are expected to be usable in the context of a web page.
For example, an extension that injects a content script with the intention of
building up some custom interface for <code>example.com</code> would whitelist
any resources that interface requires (images, icons, stylesheets, scripts,
etc.) as follows:
</p>

<pre class="prettyprint">{
	...
	"web_accessible_resources": [
		"images/my-awesome-image1.png",
		"images/my-amazing-icon1.png",
		"style/double-rainbow.css",
		"script/double-rainbow.js"
	],
	...
}</pre>

<p>
These resources would then be available in a webpage via the URL
<code>opera-extension://[PACKAGE ID]/[PATH]</code>, which can be generated with
the <a href="extension.html#method-getURL">extension.getURL</a> method. Whitelisted resources are served with appropriate
<a href="http://www.w3.org/TR/cors/">CORS</a> headers, so they're available via
mechanisms like XHR.
</p>

<p>
Injected content scripts themselves do not need to be whitelisted.
</p>

<h4 id="availability">Default Availability</h4>

<p>
Resources inside of packages using <a href="manifest.html#manifest_version"><code>manifest_version</code></a>
2 or above are <strong>blocked by default</strong>, and must be whitelisted
for use via this property.
</p>

<h3 id="sandbox">sandbox</h3>

<p>
Defines an collection of extension pages that are to be served
in a sandboxed unique origin, and optionally a Content Security Policy to use
with them. Being in a sandbox has two implications:
</p>

<ol>
<li>A sandboxed page will not have access to extension APIs, or
direct access to non-sandboxed pages (it may communicate with them via
<code>postMessage()</code>).</li>
<li>
	<p>A sandboxed page is not subject to the
	<a href="tut_architecture_overview.html#permissions_and_privileges">Content Security Policy
	(CSP)</a> used by the rest of the extension (it has its own separate
	CSP value). This means that, for example, it can use inline script and
	<code>eval</code>.</p>

	<p>For example, here's how to specify that two extension pages are to be
	served in a sandbox with a custom CSP:</p>

	<pre class="prettyprint">{
	...
	"sandbox": {
		"pages": [
			"page1.html",
			"directory/page2.html"
		]
		<i>// content_security_policy is optional.</i>
		"content_security_policy":
				"sandbox allow-scripts; script-src https://www.google.com"
	],
	...
}</pre>

	<p>
	If not specified, the default <code>content_security_policy</code> value is
	<code>sandbox allow-scripts allow-forms</code>. You can specify your CSP
	value to restrict the sandbox even further, but it must have the <code>sandbox</code>
	directive and may not have the <code>allow-same-origin</code> token (see
	<a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox">the
	HTML5 specification</a> for possible sandbox tokens).
	</p>
</li>
</ol>

<p>
Note that you only need to list pages that you expected to be loaded in
windows or frames. Resources used by sandboxed pages (e.g. stylesheets or
JavaScript source files) do not need to appear in the
<code>sandboxed_page</code> list, they will use the sandbox of the page
that embeds them.
</p>
