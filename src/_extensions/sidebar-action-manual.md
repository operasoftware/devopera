---
title: Creating Extensions For The Sidebar
authors:
- shwetank-dixit
intro: 'This article describes how to use the [`sidebarAction` API](/extensions/sidebar-action-api/) to create extensions which live on the browser’s sidebar.'
featured: featured
license: cc-by-3.0
---

## Introduction

This article describes how to use the [`sidebarAction` API](/extensions/sidebar-action-api/) to create extensions which live on the browser’s sidebar.

## The Sidebar

<figure block="figure">
	<img elem="media" src="{{ page.id }}/scheme.png" alt="The sidebar">
</figure>

Since Opera 30 you can enable the browser sidebar. This is a place on the left side of the browser which has room for additional functionality for the user. The sidebar consists of the _icons list_ on the left hand side of the sidebar and the clicking on an icon from the icons list will open its corresponding _panel_.

The panel is an HTML page specified inside the extension which will house the main content of the extension. Every sidebar action _must_ have a panel page specified.

## The Manifest

It is important to mention the following things in the manifest for sidebar extensions.

	"sidebar_action": {
		// Required
		"default_icon": "icon.png",
		// Optional; shown in tooltip
		"default_title": "My Sample Extension",
		// Required
		"default_panel": "panel.html"
	}

You can also specify a series of sizes and icon paths as keys and values, instead of a single icon value described above. If you want to specify icons for a series of sizes, then instead of mentioning one default icon, you can specify an object listing out the paths to the icons and their corresponding sizes in the `default_icon` field like so:

	"sidebar_action": {
		"default_icon": {
			"19": "images/19.png",
			"38": "images/38.png"
		}
	}

## The `sidebarAction` API

We’ve made the [`sidebarAction` API](/extensions/sidebar-action-api/) to be similar to the [`browserAction` API](/extensions/browser-actions/) so that extension authors could easily grasp the API and have an easier time porting their existing extisting extensions to a sidebar extension, should they choose to do so.

Though a bit similar in terms of the architecture, sidebar extensions should be viewed as different from extensions which use browser actions. The extensions which live on the sidebar are more long-lived.

## Maintaining state

The panel page works similar to any other web page. So if the user closes the panel, it is the same as any other page whose tab is closed — this means the next time the user opens a panel, it starts from scratch — just like a web page which has been refreshed.

However, given that panels are supposed to be long-lived apps, there needs to be a way to maintain state — which means having a way for data to persist no matter how many times the user opens or closes the panel. This can be accomplished by sending data entered in the popup to the background script.

For example, let’s take the case of a simple `<textarea>`. We would like to make sure that whatever data is entered by the user is still there no matter how many times the panel is opened or closed. The code for the panel page can be like so:

	<h1>Saving state</h1>
	<p>
		The stuff typed in the textarea should still be there
		exactly as you had typed it, even if you close and re-open the panel.
	</p>
	<textarea id="maintext"></textarea>

And script for the HTML above:

	var maintext = document.querySelector('#maintext');
	var theValue;

	maintext.onchange = function() {
		save();
	}

	function save() {
		theValue = maintext.value;
		chrome.extension.getBackgroundPage().setValue(theValue);
	}

	function show() {
		theValue = chrome.extension.getBackgroundPage().getValue();

		if (!theValue) {
			theValue = '';
		}

		maintext.value = theValue;
	}

	document.addEventListener('DOMContentLoaded', show, false);

Above, we make sure we call the `save()` function whenever there is a change in the text area (this will be called when the panel is closed too) by listening to the `onchange` event.

Whenever the page is loaded, we listen to the `DOMContentLoaded` event, and make sure to retrieve the value from the background script and put it back in the text area.

The background script will look like so:

	var value;

	function getValue() {
		value = localStorage.getItem('maintext');
		return value;
	}

	function setValue(theValue) {
		localStorage.setItem('maintext', theValue);
	}

Keep in mind that the extensions panel page can be considered as “closed” if the panel is not open, but its background will always be running. So you can maintain state by making sure that the background script either stores data to localStorage, or if it stores the data in the background script itself.

You can [download the sample sidebar extension](/extensions/extension-samples/sidebar-maintain-state.nex) and have a look at the code.

## Detecting user focus on the panel

There might be situations where you would want to detect whether the user has focus on your panel or not. You can listen to the `onfocus` and `onblur` events on the `window` elements in the panel page, to see when the user has focus on your panel, and when the user leaves focus from your panel. Support for the events on the `sidebarAction` namespace will also come soon.

	window.onfocus = function() {
		console.log('The user is focussed on the panel page');
	}
	window.onblur = function() {
		console.log('The user has left focus from the panel page');
	}

Now that you know how to make sidebar extensions, here is hoping you quickly submit some great extensions to the [Opera Add-ons catalog](https://addons.opera.com/extensions/?tag=sidebar).
