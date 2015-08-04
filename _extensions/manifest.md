---
title: 'Manifest Files'
support: 15
source: http://developer.chrome.com/trunk/extensions/manifest.html
license: cc-by-3.0
---

## Contents

1. [Field summary](#overview)
2. [Field details](#field_details)
	1. [default_locale](#default_locale)
	2. [description](#description)
	3. [developer](#developer)
	4. [homepage_url](#homepage_url)
	5. [icons](#icons)
	6. [incognito](#incognito)
	7. [key](#key)
	8. [minimum_opera_version](#minimum_opera_version)
	9. [name](#name)
	10. [permissions](#permissions)
	11. [requirements](#requirements)
	12. [version](#version)
	13. [manifest_version](#manifest_version)
	14. [web_accessible_resources](#web_accessible_resources)
	15. [sandbox](#sandbox)

Every extension, installable web app, and theme has a [JSON](http://www.json.org)-formatted manifest file, named `manifest.json`, that provides important information.

## Field summary {#overview}

The following code shows the supported manifest fields, with links to the page that discusses each field. The only fields that are always required are `name` and `version`.

	{
		// Required
		"name": "My Extension",
		"version": "versionString",
		"manifest_version": 2,

		// Recommended
		"description": "A plain text description",
		"developer": { … },
		"icons": { … },
		"default_locale": "en",

		// Pick one (or none)
		"browser_action": { … },
		"page_action": { … },

		// Add any of these that you need
		"background": { "persistent": false, … },
		"background": { "persistent": true, … },
		"content_scripts": [ … ],
		"content_security_policy": "policyString",
		"homepage_url": "http://path/to/homepage",
		"incognito": "spanning", // or "split"
		"key": "publicKey",
		"minimum_opera_version": "versionString",
		"options_page": "aFile.html",
		"permissions": [ … ],
		"requirements": { … },
		"update_url": "http://path/to/updateInfo.xml",
		"web_accessible_resources": [ … ],
		"sandbox": [ … ]
	}

## Field details {#field_details}

This section covers fields that aren’t described in another page. For a complete list of fields, with links to where they’re described in detail, see the [Field summary](#overview).

### `default_locale` {#default_locale}

Specifies the subdirectory of `_locales` that contains the default strings for this extension. This field is **required** in extensions that have a `_locales` directory; it **must be absent** in extensions that have no `_locales` directory.

### `description` {#description}

A plain text string (no HTML or other formatting; no more than 132 characters) that describes the extension. The description should be suitable for both the browser’s extension management UI and the Opera addons site. You can specify locale-specific strings for this field; see [Internationalization](internationalization) for details.

### `developer` {#developer}

Contains information about author of the extension. It can contain the fields `name` and `url`. For example,

	"developer": {
		"name": "John Doe",
		"url": "http://www.example.org"
	 }

### `homepage_url` {#homepage_url}

The URL of the homepage for this extension. The extensions management page will contain a link to this URL. If you distribute your extension using the Opera addons site, the homepage URL defaults to the extension’s own page.

### `icons` {#icons}

One or more icons that represent the extension. You should always provide a 128×128 icon; it’s used during installation and by the Opera addons site. Extensions should also provide a 48×48 icon, which is used in the extensions management page. You can also specify a 16×16 icon to be used as the favicon for an extension’s pages.

Icons should generally be in PNG format, because PNG has the best support for transparency. They can, however, be in any format supported by Opera 15 and above, including BMP, GIF, ICO, and JPEG. Here’s an example of specifying the icons:

	"icons": {
		"16": "icon16.png",
		"48": "icon48.png",
		"128": "icon128.png"
	}

**Important:** Use only the documented icon sizes. You might notice that Opera sometimes resizes these icons down to smaller sizes. For example, the install dialog might shrink the 128-pixel icon down to 69 pixels. However, the details of Opera’s UI may change between versions, and these changes assume that developers are using the documented sizes. If you use other sizes, your icon may look bad in future versions of the browser.

### `incognito` {#incognito}

Either `spanning` or `split`, to specify how this extension will behave if allowed to run in incognito mode.

The default for extensions is `spanning`, which means that the extension will run in a single shared process. Any events or messages from an incognito tab will be sent to the shared process, with an _incognito_ flag indicating where it came from. Because incognito tabs cannot use this shared process, an extension using the `spanning` incognito mode will not be able to load pages from its extension package into the main frame of an incognito tab.

In `split` mode, if the extension contains a background page, this page will run in the incognito process. This incognito process runs along side the regular process, but has a separate memory-only cookie store. Each process sees events and messages only from its own context (for example, the incognito process will see only incognito tab updates). The processes are unable to communicate with each other.

As a rule of thumb, if your extension needs to load a tab in an incognito browser, use _split_ incognito behavior. If your extension needs to be logged into a remote server or persist settings locally, use _spanning_ incognito behavior.

### `key` {#key}

This value can be used to control the unique ID of an extension when it is loaded during development.

**Note:** You don’t usually need to use this value. Instead, write your code so that the key value doesn’t matter by using relative paths and [`extension.getURL`](extension.html#method-getURL).

To get a suitable key value, first install your extension from a `.crx` file. Then, in your user data directory, look in the file `Default/Extensions/<extensionId>/<versionString>/manifest.json`. You will see the key value filled in there.

### `minimum_opera_version` {#minimum_opera_version}

The version of Opera that your extension requires, if any. The format for this string is the same as for the version field.

### `name` {#name}

A short, plain text string (no more than 45 characters) that identifies the extension. The name is used in the install dialog, extension management UI, and the Opera extensions catalog. You can specify locale-specific strings for this field; see [Internationalization](internationalization) for details.

### `permissions` {#permissions}

You need to declare your intent to use certain features by listing them in the `permissions` field. A typical example of it would be like so:

	"permissions": [
		"tabs",
		"http://*.opera.com",
		"contextMenus"
	]

You can use match patterns to specify if the extension wants the code to run on certain pages. Please see the [article on match patterns](tut_match_patterns.html) for more details.

**Note:** If you want to display the favicon of a page, you would need to mention it in the permissions field as `opera://favicon`. Once you declare it in the permissions field, then you can use it like so:

	<img src="opera://favicon/http://www.google.com/">

### `requirements` {#requirements}

The `3D` requirement denotes GPU hardware acceleration. The `webgl` requirement refers to the [WebGL API](http://www.khronos.org/webgl/). You can list the 3D-related features your extension requires, as demonstrated in the following example:

	"requirements": {
		"3D": {
			"features": ["webgl"]
		}
	}

### `version` {#version}

One to four dot-separated integers identifying the version of this extension. A couple of rules apply to the integers: they must be between 0 and 65535, inclusive, and non-zero integers can’t start with 0. For example, `99999` and `032` are both invalid.

Here are some examples of valid versions:

- `1`
- `1.0`
- `2.10.2`
- `3.1.2.4567`

The autoupdate system compares versions to determine whether an installed extension needs to be updated. If the published extension has a newer version string than the installed extension, then the extension is automatically updated.

The comparison starts with the leftmost integers. If those integers are equal, the integers to the right are compared, and so on. For example, `1.2.0` is a newer version than `1.1.9.9999`.

A missing integer is equal to zero. For example, `1.1.9.9999` is newer than `1.1`.

### `manifest_version` {#manifest_version}

One integer specifying the version of the manifest file format your package requires. As of Opera 15, developers _should_ specify `2` (without quotes) to use the format as described by this document:

	"manifest_version": 2

### `web_accessible_resources` {#web_accessible_resources}

An array of strings specifying the paths (relative to the package root) of packaged resources that are expected to be usable in the context of a web page. For example, an extension that injects a content script with the intention of building up some custom interface for `example.com` would whitelist any resources that interface requires (images, icons, stylesheets, scripts, etc.) as follows:

	"web_accessible_resources": [
		"images/my-awesome-image1.png",
		"images/my-amazing-icon1.png",
		"style/double-rainbow.css",
		"script/double-rainbow.js"
	]

These resources would then be available in a webpage via the URL `opera-extension://[PACKAGE ID]/[PATH]`, which can be generated with the [extension.getURL](extension.html#method-getURL) method. Whitelisted resources are served with appropriate [CORS](http://www.w3.org/TR/cors/) headers, so they’re available via mechanisms like XHR.

Injected content scripts themselves do not need to be whitelisted.

Resources inside of packages using [`manifest_version`](#manifest_version) 2 or above are **blocked by default**, and must be whitelisted for use via this property.

### `sandbox` {#sandbox}

Defines an collection of extension pages that are to be served in a sandboxed unique origin, and optionally a Content Security Policy to use with them. Being in a sandbox has two implications:

1. A sandboxed page will not have access to extension APIs, or direct access to non-sandboxed pages (it may communicate with them via `postMessage()`).
2. A sandboxed page is not subject to the [Content Security Policy (CSP)](tut_architecture_overview.html#permissions_and_privileges) used by the rest of the extension (it has its own separate CSP value). This means that, for example, it can use inline script and `eval`.

For example, here’s how to specify that two extension pages are to be served in a sandbox with a custom CSP:

	"sandbox": {
		"pages": [
			"page1.html",
			"directory/page2.html"
		],
		// Optional
		"content_security_policy":
			"sandbox allow-scripts; script-src https://www.google.com"
	]

If not specified, the default `content_security_policy` value is `sandbox allow-scripts allow-forms`. You can specify your CSP value to restrict the sandbox even further, but it must have the `sandbox` directive and may not have the `allow-same-origin` token (see [the HTML5 specification](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox) for possible sandbox tokens).

Note that you only need to list pages that you expected to be loaded in windows or frames. Resources used by sandboxed pages (e.g. stylesheets or JavaScript source files) do not need to appear in the `sandboxed_page` list, they will use the sandbox of the page that embeds them.
