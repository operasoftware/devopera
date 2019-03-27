---
title: Working with the context menu
authors:
- shwetank-dixit
intro: 'The context menu is the menu which comes up after you right-click on a page. Integrating your extension into this menu might provide useful functionality.'
license: cc-by-3.0
---

## Introduction

This article describes how to use the `chrome.contextmenus.*` methods and events to manipulate the browser’s context menu.

## What is the context menu?

Usually, when you right-click (or <kbd>Ctrl</kbd>-click on Mac) on something in a web page inside your browser, a menu pops up: This is called the context menu. You can usually bring this up using various keyboard shortcuts too, depending on the exact platform you are using. Using the Context Menu API we can add and manipulate items in this menu and have it perform actions. We can even restrict it to certain types of media. So for example, we can specify that a context menu item should appear only if a user right-clicks on an image, rather than a video or some other media type.

## How do we customize the context menu?

There are a number of steps for us to take if we want to create an extension that customizes the context menu in some way. Let’s go through these steps now.

### Declare it in the manifest

The first thing to do when working with the context menu is add the necessary permissions in the extension manifest file. We’ll use the `contextMenus` keyword in the `permissions` key to declare our intention to use it.

It is also recommended to have a 16x16 icon next to the context menu item, which is also defined in the manifest.

The manifest would look like so:

	{
		'name': 'Context Menu Extension',
		'permissions': [
			'contextMenus'
		],
		'icons': {
			'16': 'icon-small.png',
		}
	}

## Creating a context menu item

We can create a context menu item by calling the `create()` function. As an argument, this function takes an object that details which kind of context menu item we want to create.

Let’s for example create a context menu item that will only appear when a user right/ctrl-clicks some highlighted text; it will open a new tab, load [Google](http://www.google.com) in it, and perform a Google search for the selected text.

To set up the context menu, we would write something like this in the background.js script:

	chrome.contextMenus.create({
		title: 'Look up: %s',
		contexts: ['selection'],
		onclick: searchText
	});

The object we are passing in as the argument of `create()` has three parts to it:

- First, `title` defines what text the context menu item will have when displayed. Note the presence of the `%s`: this will make sure the highlighted text is mentioned in the menu item. For example, if we have selected the text “Opera for Android”, in the context menu item, the context menu text will show up as “Look up: Opera for Android”.
- Next, the `contexts` line specifies what circumstances the menu item should appear in; we’re limiting this context menu item to only appear when selected text is right/ctrl-clicked. You could other types of context like `image`, `video`, `page`, `link`, `editable` (for form fields) and more. If you want your menu to appear in all contexts, use `all`.
- Last, we are defining what happens when the menu item is clicked, in the `onclick` line: When someone clicks on the menu item, the `searchtext()` function will be fired.

### Controlling the result of a user clicking on the menu item

Once the user clicks on the menu item, we need it to do something. In our example, the function `searchtext()` is called `onclick`. The function looks like so:

	function searchText(info){
		var myQuery = encodeURI('https://www.google.com/search?q=' + info.selectionText);
		chrome.tabs.create({
			url: myQuery
		});
	}

The function handles an `info` object of type [`OnClickData`](https://developer.chrome.com/extensions/contextMenus#type-OnClickData) — This is an object which stores a bunch of relevant information when a context menu item is clicked. In our case, it will contain information about the text we selected. We can get this by using `info.selectionText`. After that it is just a simple matter of appending that text to Google’s query URL as a query string, creating a new tab, and loading the URL you just assembled in the new tab.

You can [download the context menu extension example](/extensions/extension-samples/context-menu-selected-text.crx) described above and take a better look at the code.
