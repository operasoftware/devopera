---
title: Adding keyboard shortcuts
authors:
- shwetank-dixit
intro: 'This short tutorial covers how to use keyboard shortcuts in extensions.'
license: cc-by-3.0
---

## Introduction

This article describes how to use the [Commands API](https://developer.chrome.com/extensions/commands) to add keyboard shortcuts to various commands in your extensions.

## Keyboard shortcuts in extensions

Keyboard shortcuts in extensions can only have the following supported keys: A-Z, 0-9, Comma, Period, Home, End, PageUp, PageDown, Insert, Delete, Tab, arrow keys (Up, Down, Left, Right), and media keys (MediaNextTrack, MediaPlayPause, MediaPrevTrack, MediaStop).

Every keyboard shortcut combination must include either <kbd>Alt</kbd> or <kbd>Ctrl</kbd> (or <kbd>Cmd</kbd> on Mac). Note that <kbd>Ctrl</kbd> is automatically converted to <kbd>Cmd</kbd> on Mac, so if you want to use the <kbd>Ctrl</kbd> key instead of <kbd>Cmd</kbd> on Mac then please specify it as `MacCtrl`.

You cannot use <kbd>Ctrl</kbd> and <kbd>Alt</kbd> in the same shortcut combination. Also, you cannot use modifier keys like <kbd>Ctrl</kbd> or <kbd>Alt</kbd> in combination with media keys like <kbd>MediaNextTrack</kbd>, <kbd>MediaPlayPause</kbd>, etc. Another thing to note is that browser shortcut keys will take precedence over keyboard shortcut keys defined in the extension. So if your extension defines a shortcut key, but the browser already has the same shortcut key for something, then when the user presses that keyboard shortcut the browser defined action for that keyboard shortcut will be used. So always make sure that the keyboard shortcut you define for the extension does not conflict with any pre-existing keys defined in the browser.

## Permissions

To get the ability to have keyboard shortcuts, you first need to declare this in the manifest file by putting *commands* in the *permissions* field, like so:

	{
		'commands': {
			…
		}
	}

There are two reserved commands called `_execute_browser_action` (which will open up a browser action popup page) and `_execute_page_action` (which will open up the page action’s popup page). To have an keyboard shortcut to open up the browser action’s popup page, you would write the following in the manifest file.

	'commands': {
		'_execute_browser_action': {
			'suggested_key': {
				'windows': 'Ctrl+Shift+Y',
				'mac': 'Command+Shift+Y'
			}
		}
	}

Besides the commands for opening popups for browser and page actions, we can define shortcuts for our own commands too. For example, let’s make a command called `test`. We’ll define it in the manifest like so:

	'commands': {
		'test': {
			'suggested_key': {
				'default': 'Ctrl+Shift+J',
				'mac': 'Command+Shift+J'
			},
			'description': 'Test alert function'
		}
	}

**Note:** While developing, if you decide to change the keyboard shortcut, then simply reloading the extension in developer mode will not be enough. You will need to delete the extension and install it again for the new keyboard shortcut to take effect.

In the next section we’ll see how to detect for this keyboard shortcut in order to run our own functionality.

## Detecting for keyboard shortcuts

You can detect for keyboard shortcuts by attaching a handler in your background script.  You can then detect whenever a keyboard shortcut is pressed, whether it corresponds to a particular command or not.

For example, in the background script, we can write:

	chrome.commands.onCommand.addListener(function(command) {
		if (command == 'test') {
			alert('Keyboard shortcut from extension worked!');
		}
	});

As always, you can [download a sample extension](/extensions/extension-samples/commands-1.crx) which utilizes the commands API to create keyboard shortcuts and look through its code.
