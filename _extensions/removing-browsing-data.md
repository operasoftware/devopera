---
title: Removing Browsing Data
source: http://developer.chrome.com/extensions/browsingData.html
license: cc-by-3.0
---

## Introduction

You can use the [`chrome.browsingData` API](https://developer.chrome.com/extensions/browsingData) to remove browsing data from a user’s local profile.

## Manifest

You must declare the `browsingData` permission in the [extension manifest](/extensions/manifest/) to use this API.

	{
		"name": "My extension",
		"permissions": [
			"browsingData"
		]
	}

## Usage

The simplest use-case for the [`chrome.browsingData` API](https://developer.chrome.com/extensions/browsingData) is a a time-based mechanism for clearing a user’s browsing data. Your code should provide a timestamp which indicates the historical date after which the user’s browsing data should be removed. This timestamp is formatted as the number of milliseconds since the Unix epoch (which can be retrieved from a JavaScript `Date` object via the `getTime` method).

For example, to clear all of a user’s browsing data from the last week, you might write code as follows:

	var callback = function () {
		// Do something clever here once data has been removed.
	};

	var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
	var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
	chrome.browsingData.remove({
		'since': oneWeekAgo
	}, {
		'appcache': true,
		'cache': true,
		'cookies': true,
		'downloads': true,
		'fileSystems': true,
		'formData': true,
		'history': true,
		'indexedDB': true,
		'localStorage': true,
		'pluginData': true,
		'passwords': true,
		'webSQL': true
		},
	callback);

The `chrome.browsingData.remove` method allows you to remove various types of browsing data with a single call, and will be much faster than calling multiple more specific methods. If, however, you only want to clear one specific type of browsing data (cookies, for example), the more granular methods offer a readable alternative to a call filled with JSON.

	var callback = function () {
		// Do something clever here once data has been removed.
	};

	var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
	var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;

	chrome.browsingData.removeCookies({
		'since': oneWeekAgo
	}, callback);

**Important:** Removing browsing data involves a good deal of heavy lifting in the background, and can take _tens of seconds_ to complete, depending on a user’s profile. You should use the callback mechanism to keep your users up to date on the removal’s status.

## Origin Types

Adding an `originTypes` property to the API’s options object allows you to specify which types of origins ought to be effected. Currently, origins are divided into three categories:

- `unprotectedWeb` covers the general case of websites that users visit without taking any special action. If you don’t specify an `originTypes`, the API defaults to removing data from unprotected web origins.
- `extension` covers origins under the `chrome-extensions` scheme. Removing extension data is, again, something you should be very careful about.

We could adjust the previous example to remove only data from unprotected websites as follows:

	var callback = function () {
		// Do something clever here once data has been removed.
	};

	var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
	var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;

	chrome.browsingData.remove({
		'since': oneWeekAgo,
		'originTypes': {
			'unprotectedWeb': true
		}
	}, {
		'appcache': true,
		'cache': true,
		'cookies': true,
		'downloads': true,
		'fileSystems': true,
		'formData': true,
		'history': true,
		'indexedDB': true,
		'localStorage': true,
		'serverBoundCertificates': true,
		'pluginData': true,
		'passwords': true,
		'webSQL': true
		},
	callback);

**Seriously:** Be careful when using this functionality. Your users will write you angry emails if they’re not well-informed about what to expect when your extension removes data on their behalf.
