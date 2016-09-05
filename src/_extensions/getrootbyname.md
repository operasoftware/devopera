---
title: chrome.bookmarks.getRootByName
support: 32
license: cc-by-3.0
---

## Contents

1. [Methods](#methods)
	1. [`getRootByName`](#getrootbyname)

## Methods {#methods}

### getRootByName {#getrootbyname}

	chrome.bookmarks.getRootByName(
		string id,
		function callback
	)

Retrieves the specified bookmak root.

### Parameters

	id (String)

The ID of root bookmark item. Allowed values include `bookmarks_bar`, `other`, `mobile`, `unsorted`, `user_root`, `shared`, `trash`, and `speed_dial`.

	callback (function)

The callback function returns the root object. You can then iterate on this object to get its details and children.

### Callback Function

The callback function returns the root object which is a [BookmarkTreeNode](https://developer.chrome.com/extensions/bookmarks#type-BookmarkTreeNode) object.

### Example

	chrome.bookmarks.getRootByName('bookmarks_bar', function(rootItem) {
		console.log(rootItem.title); // Will print 'Bookmarks Bar'
		chrome.bookmarks.getChildren(rootItem.id, function(result) {
			console.log(result[0].title); // Will print title of first entry in the bookmarks bar
		});
	});
