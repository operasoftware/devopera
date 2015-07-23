---
title: Permissions Declarations
source: http://developer.chrome.com/extensions/declare_permissions.html
license: cc-by-3.0
---

## Introduction

It is required to first declare which permissions you would like the browser to grant your extension. Some permissions are also displayed to users before installation. Permissions are declared in the manifest file, for example:

	"permissions": [
		"tabs",
		"http://www.opera.com/",
		"http://*.example.org/",
	]

## Permissions declarations allowed in Opera extensions

The following is an overview of the various permissions declarations possible in extensions in Opera, and what they mean.

- `match pattern`: Specifies a host permission. Required if the extension or app wants to interact with the code running on pages. Many capabilities, such as cross-origin XMLHttpRequests, programmatically injected content scripts, etc., require host permissions. For details on the syntax, see [Match Patterns](tut_match_patterns.html).
- `activeTab`: The activeTab permission gives an extension temporary access to the currently active tab when the user invokes the extension - for example by clicking its browser action. Access to the tab lasts until the tab is navigated or closed. This serves as an alternative for many uses of `<all_urls>`, but displays no warning message during installation
- `alarms`: Required if the extension or app uses the [chrome.alarms](https://developer.chrome.com/extensions/alarms) API.
- `background`: You typically use the background permission with a [background page or event page](tut_architecture_overview.html#the_background_process).
- `bookmarks`: Gives your extension access to the [chrome.bookmarks](https://developer.chrome.com/extensions/bookmarks) API.
- `browsingData`: Gives your extension access to the [chrome.browsingData](https://developer.chrome.com/extensions/browsingData) API.
- `contextMenus`: Required if the extension or app uses the [chrome.contextMenus](https://developer.chrome.com/extensions/contextMenus) API.
- `cookies`: Required if the extension or app uses the [chrome.cookies](https://developer.chrome.com/extensions/cookies) API.
- `downloads`: Required if the extension or app uses the [chrome.downloads](https://developer.chrome.com/extensions/downloads) API.
- `fontSettings`: Required if the extension or app uses the [chrome.fontSettings](https://developer.chrome.com/extensions/fontSettings) API.
- `geolocation`: Allows the extension or app to use the [proposed HTML5 geolocation API](http://dev.w3.org/geo/api/spec-source.html) without prompting the user for permission.
- `history`: Required if the extension or app uses the [chrome.history](https://developer.chrome.com/extensions/history) API.
- `identity`: Required if the extension or app uses the [chrome.identity](https://developer.chrome.com/extensions/identity) API.
- `idle`: Required if the extension or app uses the [chrome.idle](https://developer.chrome.com/extensions/idle) API.
- `management`: Required if the extension uses the [chrome.management](https://developer.chrome.com/extensions/management) API.
- `offroad`: Gives the extension access to the [Off-Road Mode](tut_offroad.html).
- `pageCapture`: Gives the extension access to the [chrome.pageCapture](https://developer.chrome.com/extensions/pageCapture) API.
- `power`: Required if the extension or app uses the [chrome.power](https://developer.chrome.com/extensions/power) API.
- `proxy`: Required if the extension or app uses the [chrome.proxy](https://developer.chrome.com/extensions/proxy) API.
- `storage`: Required if the extension or app uses the [chrome.storage](https://developer.chrome.com/extensions/storage) API. Note: `storage.sync` is not supported.
- `tabs`: Required if the extension uses the [chrome.tabs](https://developer.chrome.com/extensions/tabs) or [chrome.windows](https://developer.chrome.com/extensions/windows) API.
- `webNavigation`: Gives your extension access to the [chrome.webNavigation](https://developer.chrome.com/extensions/webNavigation) API.
- `webRequest`: Required if the extension uses the [chrome.webRequest](https://developer.chrome.com/extensions/webNavigation) API.
- `speeddial`:  Required if the extension uses the [opr.speeddial](speeddial.html) API.

## Optional permissions

You can use the [`chrome.permissions` API](https://developer.chrome.com/extensions/permissions) to request [declared optional permissions](tut_optional_permissions.html#manifest) at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.
