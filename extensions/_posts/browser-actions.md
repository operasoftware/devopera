---
title: 'Browser Actions: Buttons, Popups and Badges'
authors:
- shwetank-dixit
license: cc-by-3.0
---

## Introduction

In the [architecture overview](tut_architecture_overview.html), we covered the various UI elements that can be included in Opera extensions: these fall into two categories, *Page Actions* and *Browser Actions*.

In this article, we’ll get to see how to put these UI elements into action in an extension.

Getting to display any of these UI elements on the browser is extremely simple. All you need to do is enter the necessary details in the extension manifest, and make sure you have the appropriate functionality ready in the extension package (icon files, popup.html, background.js, etc).

## Browser Actions

*Browser actions* are used to put UI elements on the extensions toolbar. These UI elements can be a button (with or without a badge) or a popup. Use browser actions if you want the UI element to appear all the time.

However, if you don’t want the UI element to appear all the time, rather only wanting it to appear in specific pages, then it’s recommended to use *Page Actions*, which is explained later in the article. You cannot use both *Browser Actions* and *Page Actions* at the same time.

### Buttons

To display a button in the browser UI, we simply mention it in the extension manifest like so:

	'browser_action': {
		'default_icon': 'icon.png',
		// Optional; shown in tooltip
		'default_title': 'My Sample Extension'
	}

Providing the default icon size in 19px or 38px size will allow the browser to automatically adjust the icon size according to the pixel density of the user’s display.

Putting this in the manifest will just display the button in the browser. Clicking it will not have an effect. However, with a button, you need it to perform a function once someone clicks on it.

To do that, you need to use add an event listener which listens to the click event, like so:

	chrome.browserAction.onClicked.addListener(function(){
		console.log('This button was clicked!');
	});

[Download our sample button extension](samples/BrowserActions-button.nex) to see a very simple button example.

### Popups

To create a popup, you just need to make an HTML file (lets call it ‘popup.html’) which will be the web page displayed when the popup is opened. All you need to do is to mention this the extension manifest like so:

	'browser_action': {
		'default_icon': 'icon.png',
		// Optional; shown in tooltip
		'default_title': 'My Sample Extension',
		'default_popup': 'popup.html'
	}

Go ahead and [download our sample extension](samples/BrowserActions-Popup.nex), which has a very simple popup being displayed.

### Badges

Badges are small pieces of information located right next to a button. They often show supplementary information (for example, an extension for your email site might show the number of unread mails etc).

Badges are supposed to show a very small amount of information, so they are limited to 4 characters or less.

Lets see how to make a badge and set its text to update after a while.

Badges can be set using JavaScript in the background script (make sure to mention the background script in the extension manifest). There are two functions you need to be aware of:

- `chrome.browserAction.setBadgeBackgroundColor()`, this sets the background color of the badge
- `chrome.browserAction.setBadgeText()`, this sets the text of the badge

In our example, lets set the badge text as “Hey” with a background color of red. In our background script, we will write:

	chrome.browserAction.setBadgeBackgroundColor({
		color: '#ff0000'
	});
	chrome.browserAction.setBadgeText({
		text: 'Hey'
	});

Thats it! This is how you set a badge in your chrome extension. You can also specify an RGBa value instead of a hex value in case you want to add some translucency to the background. You can make it so that you update the badge after certain intervals of time, or after a certain action is performed.

## Page Actions

Page actions are used to put icons inside the address bar in order for them to perform an action. This action should be relevant to the current visible page, but not necessarily to all the pages open in the browser.

Just like Browser Actions, you can make buttons and popups for Page Actions too, in pretty much the same way. However, it is not possible to have badges for Page Actions.

### Buttons

To get to display a button, simply mention it in the extension manifest like so:

	'page_action': {
		'default_icon': 'icon.png',
		// Optional; shown in tooltip
		'default_title': 'My Sample Extension',
	}

### Popups

To display a popup, you just need to make an HTML file (lets call it ‘popup.html’) which will be the web page displayed when the popup is opened. All you need to do is to mention this the extension manifest like so:

	'page_action': {
		'default_icon': 'icon.png',
		// Optional; shown in tooltip
		'default_title': 'My Sample Extension',
		'default_popup': 'popup.html'
	}

## Displaying a Page Action

Page Actions are not displayed by default, unlike browser actions. You will need to explicitly show it using the `show()` function, and alternatively hide it using the `hide()` function.

For this, you will also need to know the Tab ID of the current visible tab. Thus the code to show or hide the Page Actions should reside in the background script. For example, to only show Page Actions in URLs on www.opera.com, we would do something like this in the background script:

	function checkURL(tabID, changeInfo, tab){
		// If it satisfies the criteria (the URL containing 'www.opera.com')
		if (tab.url.indexOf('www.opera.com') > -1) {
			// Shows the page action
			chrome.pageAction.show(tabID);
		}
	}
	chrome.tabs.onUpdated.addListener(checkURL);

Go ahead and [download the source for this extension](samples/PageActions.nex), to check out the code required for making it work.
