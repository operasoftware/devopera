---
title: Working With Bookmarks
authors:
- shwetank-dixit
intro: 'This tutorial will guide you on how to access the browser bookmarks in an extension.'
license: cc-by-3.0
---

## Introduction

This article describes how to use the [bookmarks API](https://developer.chrome.com/extensions/bookmarks) to work with the browser’s bookmarks.

## Manifest

To have access to the bookmarks, you first need to declare this in the manifest file by putting `bookmarks` in the `permissions` field, like so:

	{
		"name": "Bookmarks Extension",
		"permissions": [
			"bookmarks"
		]
	}

## The Bookmarks API

The bookmarks API can be accessed through `chrome.bookmarks.*` functions. These functions provide you with the ability to access the whole or part of the bookmarks tree, create, update or delete bookmarks, and even search for a part of the bookmarks tree depending on your search query.

Note that you cannot remove or add anything from the root folder. In addition, there are two other folders, named “BookmarksBar” and “Other Folder”, where you cannot rename, move or delete any entries.

Before we dive into how to use the API functions, let’s take a look at an important object type we’ll need to work with.

### The BookmarkTreeNode Type

Think of the bookmarks system as a tree. If you’re familiar with a bit of computer science, then you will be knowing the concept of a [tree in relation to programming](http://en.wikipedia.org/wiki/Tree_%28data_structure%29 ).

You can think of each node in the tree as a bookmark entry. This entry can be either an actual bookmark or a bookmark folder.

Each node will have a certain set of properties. Some of these include the title, the URL (if it’s a bookmark), the date when it was added, etc. If it is a folder, then this node will have further children, so the subtree is exposed in these properties too.

### Listing all the bookmarks

Let’s see how to traverse the bookmarks tree and list all the bookmarks present in the browser. We will use the `chrome.bookmarks.getTree()` function to get the entire bookmarks tree and list the title and URL in a popup.

Our popup.html page looks like:

	var list = document.querySelector('#bookmarklist');

	chrome.bookmarks.getTree(function (bmTree) {
		bmTree.forEach( function (node){
			processNode(node);
		});
	});

	function processNode(node) {
		if (node.children) {
			// We won’t touch the root directory which has no parentId,
			// as well as the “BookmarkBar Folder” and the “Other Folder”
			// both of which have parentId as `0`. We’ll cover everything else here
			if (node.parentId && node.parentId != '0'){
				list.innerHTML += '<li>' + node.title + '(Folder)</li><ul id="' + node.id + '"></ul>';
			}
			node.children.forEach(function(child){
				processNode(child);
			});
		}
		if (node.url){
			if (node.parentId){
				var check = document.getElementById(node.parentId);
			}
			// If a folder exists with this id
			if (check) {
				// Add the children as a list entry under that folder
				check.innerHTML += '<li>' + node.title + '</li>';
			} else {
				// Add a list entry under the main list
				list.innerHTML += '<li>' + node.title + '</li>';
			}
		}
	}

In the above code we have used a recursive function to go through all bookmark nodes. Whenever it finds a bookmark folder, it will go through its child nodes until it finds bookmark entries. It will keep adding the bookmark folders and bookmark entries along the way as it goes through them.

You can [download the working extension](/extensions/extension-samples/bookmarks-api-1.nex) and have a play with it. A good exercise would be to add clickable links to the list so that a person could open that URL in a new tab when someone clicks on it.

We've also added a function called `getRootByName` which allows you to get the  object of some specific root folders. You can [visit its API page](/extensions/getrootbyname/) to know more about the page and see sample code.

### Creating new bookmark entries

You can create new bookmark entries (these can be either bookmarks or bookmark folders) by using the function `chrome.bookmarks.create()`. To create bookmarks on the first level, you will to have the specify the `parentId` as `1`. Let’s look at the following example:

	chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.bookmarks.create({
			'title': 'Opera Extensions Resources',
			'parentId': '1'
		}, function (newEntry) {
			chrome.bookmarks.create({
				'title': 'Opera Extensions Documentation',
				'url': 'http://dev.opera.com/extension/',
				'parentId': newEntry.id
			});
			chrome.bookmarks.create({
				'title': 'Opera Addons Gallery',
				'url': 'http://addons.opera.com',
				'parentId': newEntry.id
			});
			console.log('New Entry Added');
		});
	});

The above code will create a new folder called “Opera Extensions Resources” and then create two bookmarks within that folder. Note that we mentioned the `parentId` as `1` so that the folder is placed on the main quick access bar. Upon creation, a callback function is fired, where we can get the `id` of the newly created bookmark entry. In the above code we create two bookmarks and the set the `parentId` of it to the `id` of the bookmark folder we just created. This places the two bookmarks inside the newly created bookmark folder.  

You can [download the sample extension](/extensions/extension-samples/bookmarks-api-2.nex) for the above and tinker with the code yourself.

