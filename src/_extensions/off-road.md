---
title: Working With Off-Road Mode
authors:
- shwetank-dixit
license: cc-by-3.0
---

## Introduction

One of Opera’s most popular features is “Off-Road Mode” (Also known as "Opera Turbo Mode"), which is a setting which, when enabled, speeds up your web loading by passing content through Opera’s servers, thereby greatly compressing the content.

We’ve enabled extension developers to access this setting, which gives the ability to determine if Off-Road Mode is enabled or not, or to set or clear it. You can also listen to changes to this setting by adding event handlers.

Off-Road mode, being a browser setting, is accessible like all other browser settings as mentioned in the [Types](https://developer.chrome.com/extensions/types) documentaton.

## Manifest specifications

You first need to add the `offroad` field to the extension manifest file. For example:

	{
		"name": "Offroad Mode Event test",
		"description": "Detecting offroad mode",
		"background": {
			"scripts": ["background.js"]
		},
		"permissions": ["offroad"]
	}

## Determining whether Off-Road mode is enabled or not

Determining whether Off-Road Mode is enabled or not is pretty simple. Just call `opr.offroad.enabled.get()` and check the `value` of the callback object. If the value is `true` then it is enabled otherwise it is not. Let’s see an example:

	opr.offroad.enabled.get({}, function(details) {
		if (details.levelOfControl === 'controllable_by_this_extension' ||
			details.levelOfControl === 'controlled_by_this_extension') {
			if (details.value == true) {
				// Off-Road Mode is enabled
			 } else {
				//Off-Road Mode is not enabled
			 }
		}
	});

In fact, you can listen for the whenever the setting has been changed either way, by adding an event listener, like so:

	opr.offroad.enabled.onChange.addListener(function (event) {
		if (event.value === true){
			alert('Offroad Mode is now ON');
		} else {
			alert('Offroad Mode is now OFF');
		}
	});

## Setting the Off-Road Mode through an extension

You can enable or disable Off-Road Mode through your extension by calling the `opr.offroad.enabled.set()` function and passing an object with a `value` field as `false` or `true`. For example:

	opr.offroad.enabled.set({
		'value': true
	});

Feel free to [download the sample extension](/extensions/extension-samples/off-road.nex) and try it out yourself.
