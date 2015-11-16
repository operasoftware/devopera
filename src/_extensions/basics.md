---
title: The Basics of Making an Extension
authors:
- shwetank-dixit
intro: 'With the use of step-by-step instructions, we will cover how to make a basic Opera extension.'
featured: featured
license: cc-by-3.0
---

## Introduction

Making extensions for Opera is really easy. If you are already familiar with making Google Chrome extensions, then you will be right at home, as Opera uses the Chromium extensions architecture (with some minor differences). And even if you aren’t, Opera extensions are still easy — they are made using open web technologies, plus some specific APIs to tap into browser functionality.

In this article we’ll put together a simple example extension to show you how it works.

## What’s in an Opera extension?

An Opera extension contains a _manifest file_ which defines metadata like the name of the extension, its author, etc. It also lists the various API permissions we want the extension to have. It will also typically have a _background page_ or _background script_, which is responsible for communicating with the browser UI. Apart from that, it could have a _content script_ which deals with changes to web pages. You could also need some other HTML (and related CSS and JavaScript) files for button popups or an options page.

Apart from all the JS and HTML files, you’ll also need to put in some images for the extension icons.

All of this is wrapped in a ZIP file format with a special header and the .nex file extension. To know more about the architecture of extensions in Opera, please read the [associated article](/extensions/architecture-overview/), which describes it in detail.

## Your first extension

Now that we’re familiar with the basics of how it all works, let’s try putting an extension together. We’ll make a simple extension that will add a button to the browser toolbar — when clicked, the button will open up a new tab and load [dev.opera.com](http://dev.opera.com). This is a pretty trivial example, but it’ll get you used to the basics.

### Step 1: Defining the extension with an extension manifest
The first step we’ll take is to define the extension manifest. This is where we define the name of the extension, its description, author, version number, and other such details.

There is another important aspect to extension manifests — inside we define the necessary permissions in order for the extension to run properly. For our example, working with tabs is required, so this needs to be specified in the manifest.

Extension manifests are written in the [JSON](http://json.org) format; we’ll explain the specifics later, but for now just open up a text editor, type the following into a new file and save it as `manifest.json` in an empty directory, anywhere you like.

	{
		"manifest_version": 2,

		"name": "Opera Extensions — Getting Started",
		"description": "Sample extension for the “Making your first extension” article",
		"version": "1.0",
		"background": {
			"scripts": ["background.js"]
		},

		"permissions": ["tabs"],
		"browser_action": {
			"default_icon": "icon.png",
			"default_title": "Go to Dev.Opera!"
		}
	}

### Step 2: Communicating with the browser: the background script
The background script is very important — this is where anything to do with manipulating the browser UI is contained. In our case, we’ll be working with tabs, so we will be using methods from the Tabs API in our script. You’ll read more about working with tabs later on, but for now, create a file named `background.js` in the same directory as before and enter the following code into it:

	chrome.browserAction.onClicked.addListener(function() {
		chrome.tabs.query({
			currentWindow: true,
			active: true
		}, function(tab) {
			chrome.tabs.create({
				"url": "http://dev.opera.com"
			});
		});
	});

### Step 3: Including icons and other assets

You’ll need an icon for the toolbar button, and represent the extension in other places. For icons, we would recommend you [read our article on it](/extensions/effective-icons/), where we discuss the appropriate sizes and best practices for great looking icons in extensions.

You may also need other files such as images, fonts, videos etc. You can include them in the parent directory, or create a separate folder (for example, a folder named `media`) or two, and place them there.

### Step 4: Testing your extension

Okay, time to test out your extension. For the final extension, you’ll need to package and sign the extension from the Extension Settings page. But the good news is that you don’t need to do this every time you want to test things out — you can test your extension straight from the directory, like so:

1. Go to the browser address bar and type `opera:extensions` (or use the <kbd>Cmd/Ctrl Shift E</kbd> shortcut)
2. Check the “Developer Mode” button to enable it.
3. Click on the “Load Unpacked Extension…” button.
4. Select your extension’s directory

Thats it! Your extension should be loaded in “Developer Mode”. This mode gives you the ability to inspect various parts of the extension using the browser’s developer tools. You can also make changes to your extension’s code and quickly see the effects with the Reload button.

If all goes well, you should see an icon in the top right of the browser window next to the address bar. Clicking on it will open up a new tab, which will go to [Dev.Opera](http://dev.opera.com) — Opera’s developer tutorial site.

### Step 5 — Packing it all up!

Once you are satisfied that your extension is finished, you need to package it into a NEX file, as follows:

1. Go to the browser address bar and type _opera:extensions_.
2. Make sure you have “Developer Mode” (located on the top right) checked.
3. Click on the “Pack Extension” button, located on the top of the page.
4. Select the directory of your extension
5. Click “OK”.

Your NEX package will be generated in the parent directory of the one you had selected. Congratulations!

## What now?

As you can see, making extensions for Opera is really easy. Through this tutorial, you’ve learn how to make a basic extension, load it in Developer Mode, test it out and finally package it.

From here you should take a look at the other tutorials we’ve written, covering different parts of extension functionality in more detail (like Buttons, Tabs, Messaging, etc.) If you need a pure reference guide, check out the API Docs section in the sidebar.
