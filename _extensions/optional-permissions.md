---
title: Optional Permissions
source: http://developer.chrome.com/extensions/permissions.html
license: cc-by-3.0
---

## Introduction

You can use the [`chrome.permissions` API](https://developer.chrome.com/extensions/permissions) to request declared optional permissions at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.

##  Step 1: Decide which permissions are required and which are optional

An extension can declare both required and optional permissions. In general, you should:

- Use required permissions when they are needed for your extension’s basic functionality.
- Use optional permissions when they are needed for optional features in your extension.

Advantages of _required_ permissions:

- **Fewer prompts:** An extension can prompt the user once to accept all permissions.
- **Simpler development:** Required permissions are guaranteed to be present.

Advantages of _optional_ permissions:

- **Better security:** Extensions run with fewer permissions since users only enable permissions that are needed.
- **Better information for users:** An extension can explain why it needs a particular permission when the user enables the relevant feature.
- **Easier upgrades:** When you upgrade your extension, Opera will not disable it for your users if the upgrade adds optional rather than required permissions.

##  Step 2: Declare optional permissions in the manifest

Declare optional permissions in your [extension manifest](/extensions/manifest/) with the `optional_permissions` key, using the same format as the [permissions](/extensions/declare-permissions/) field:

	{
		"name": "My extension",
		"optional_permissions": [
			"tabs",
			"http://www.example.com/"
		]
	}

You can specify any of the following as optional [permissions](/extensions/declare-permissions/):

- _host permissions_
- `background`
- `bookmarks`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `cookies`
- `debugger`
- `history`
- `idle`
- `management`
- `notifications`
- `pageCapture`
- `tabs`
- `topSites`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`

##  Step 3: Request optional permissions

Request the permissions from within a user gesture using `permissions.request()`:

	document.querySelector('#my-button').addEventListener('click', function (event) {
		// Permissions must be requested from inside a user gesture,
		// like a button’s click handler.
		chrome.permissions.request({
			permissions: ['tabs'],
			origins: ['http://www.example.com/']
		}, function (granted) {
			// The callback argument will be true
			// if the user granted the permissions.
			if (granted) {
				doSomething();
			} else {
				doSomethingElse();
			}
		});
	});

Opera prompts the user if adding the permissions results in different warning messages than the user has already seen and accepted.

##  Step 4: Check the extension’s current permissions

To check whether your extension has a specific permission or set of permissions, use `permission.contains()`:

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

##  Step 5: Remove the permissions

You should remove permissions when you no longer need them. After a permission has been removed, calling `permissions.request()` usually adds the permission back without prompting the user.

	chrome.permissions.remove({
		permissions: ['tabs'],
		origins: ['http://www.google.com/']
	}, function (removed) {
		if (removed) {
			// The permissions have been removed.
		} else {
			// The permissions have not been removed
			// (e.g., you tried to remove required permissions).
		}
	});
