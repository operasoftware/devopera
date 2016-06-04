---
title: Using Capability Detection
authors:
- hallvord-steen
intro: 'Browser name sniffing, using scripts figure out which browser is used and then provide different content to them, is a widespread practice with a long history. Unfortunately these scripts are usually static, while browsers keep evolving. Simply put: sniffing browser names can seriously damage the future health of your script.'
tags:
- javascript
- compatibility
- dom
license: cc-by-nc-sa-2.5
---

Browser name sniffing, using scripts figure out which browser is used and then provide different content to them, is a widespread practice with a long history. Unfortunately these scripts are usually static, while browsers keep evolving.

This makes these scripts extremely fragile whenever an unexpected new browser or a new version happens to load the page. Simply put: **Sniffing browser names can seriously damage the future health of your script**.

## So why do we sniff?

Virtually every script out there needs to know a few essential things about the browser it runs in. There are three main goals of browser name sniffing:

- Detecting features — support for things like DOM, ActiveX or Java, XMLHttpRequest
- Detecting APIs — where the browsers have named the same feature slightly differently, say whether you must use `event.target` or `event.srcElement`
- Working around bugs — when a browser simply doesn’t behave correctly, and you can not pretend you forgot to test the site in that browser

## The better approaches

The goal is after all detecting the capabilities of the browser that shows your page — so rather than looking at browser names and versions we should dive right into capability or feature detection!

JavaScript has several built-in features that let you check how things work — without looking at browser names at all. If we think in terms of capability detection, it turns out to be relatively simple to avoid browser sniffing.

To use capability detection, start by getting an overview of which features are required for your script. Then you can use object detection to check if the features exist. I recommend that you also try calling a few selected functions to verify as in-depth as possible that the feature really exists in the visiting browser.

### Proper feature detection

#### How not to do it

Do not check for one object and assume others are available. For instance, it is common to check for document.all and assume your visitor uses IE and all IE-proprietary functions can be used.

#### How to do it

1. Document what you need
2. Look for selected API functions from features that your script depends on
3. Don’t take shortcuts
4. Check if they work by using them on a known element/feature

#### Example

##### DOM support

A major site uses the following function to check if the browser has advanced DOM support:

	var isDOM = false;
	if (document.getElementById &&
		document.getElementById('assessDomNode')) {
		if (document.getElementById('assessDomNode').cloneNode &&
			document.getElementById('assessDomNode').cloneNode(true)) {
			isDOM = true;
		}
	}

Note how they check whether functions are available with `if(document.getElementById)`, then proceed to actually calling that function and finally test if the browser supports the fairly advanced W3C DOM compatible cloneNode method.

Some features are not so straightforward to test, but with some creativity very few things are outright impossible. For instance, if you wanted to test if the browser supported try .. catch blocks you could include a separate JavaScript file or SCRIPT tag with the following code:

	var trycatchsupported = false;
	eval('try { trycatchsupported = true } catch(e) {}');

It needs to be in a separate tag or at the end of a script if you want to prevent syntax errors caused by the try .. catch from stopping your main script.

##### `hasFeature()`

The DOM standard has added a method for feature detection, `document.implementation.hasFeature()`. It is called with a feature name and a version number, for example `document.implementation.hasFeature('HTML', '4.0')`. However, JavaScript’s object detection feature gives you much more detailed, cross-browser and reliable information about what is supported.

### Proper API detection

Handling API differences is often done by writing wrapper functions for the APIs that differ. One very common scenario is getting a reference to a specific element in a page.

#### How not to do it

- As far as possible avoid making assumptions about what parts of any API is supported.
- For example, do not detect `HTMLElement` and assume that `__defineGetter__` is available for your wrapper function
- Avoid setting properties that may be read-only in some browsers. For example, if you handle keyboard events and try setting the `event.which` property without checking if it exists, browsers that _do_ support `event.which` will throw an error

#### How to do it

- Use object detection to find the right API
- Within the wrapper function, start with the most standards-compatible method.

#### Examples

The classic example is using a function to get a reference to an element in the page.

	function findElement(id) {
		// Standardised method first
		if (document.getElementById) {
			return document.getElementById(id);
		} else if (document.all) {
			return document.all[id];
		} else if (document.layers) {
			return document.layers[id];
		} else {
			return null;
		}
	}

Remember to use it correctly, by checking that it actually returns something useful:

	var elm=findElement('navigation');
	if (elm) {
		// do what you need
	} else {
		// very old browser without any DOM support.
	}

### Proper bug handling

Name-based browser detection may be a part of the toolkit for working around bugs in specific browsers and versions, but you should also consider whether the script simply can **test if the bug exists**.

#### Examples

Here are two examples of how you can check if an incompatibility exists, rather than checking by browser name and version.

##### Array length incompatibility

An early version of a very popular DHTML menu script contained the following code:

	if ((navigator.userAgent.indexOf('Gecko') != -1)) {
		top_menu[top_menu.length] = null;
	}
	if ((navigator.userAgent.indexOf('Konqueror') != -1)) {
		top_menu[top_menu.length] = null;
	}
	if (Nav4) {
		top_menu[top_menu.length] = null;
	}

The reason for that block of sniffing is that they created arrays that ended with a comma. According to the ECMAScript standard, the array `['something',]` has only one item in it, while in IE it will have two. To work around this browser difference the script adds an extra array element if it detects certain specific browsers.

This could have been done much simpler by checking the length of an array literal to see what the browser does:

	if (['',].length == 1){
		top_menu[top_menu.length] = null;
	}

##### `cloneNode()` and user data

A very popular blogging site contains the following code:

	if (Detect.SAFARI() || Detect.OPERA()) {
		// cloneNode isn’t capturing node attributes
		// or values for some browsers
		this.textarea.value = this.textarea_orig.value;
		this.textarea.name = this.textarea_orig.name;
		this.textarea.id = this.textarea_orig.id;

The problem is that using cloneNode on a form element does not clone any changes the user has made to the text in the element. The following replacement looks for the bug rather than the browser:

	if (this.textarea.value != this.textarea_orig.value) {
		// cloneNode isn’t capturing node attributes
		// or values for some browsers
		this.textarea.value = this.textarea_orig.value;
		this.textarea.name = this.textarea_orig.name;
		this.textarea.id = this.textarea_orig.id;

## Towards capability detection — a script to get you started

To write scripts that will handle future browsers and new versions well you must try to leave behind the mindset of browser detection wherever possible. The good news is that sniffing the name of the browser rarely is necessary. Most of the time, it is much easier to detect whether the functions and features we need are supported.

To get you started, a [capability detection demonstration script]({{ page.id }}/demo.html). Some features:

- Detects various levels of DOM support
- Detects VBScript support
- Detects text selection/WYSIWYG editing capabilities
- Adds custom attributes to the `navigator` object rather than creating global variables or a specific sniffer object. The `navigator` object is meant to provide information about the script's environment, so lets make good use of it.

You are encouraged to use and alter the script. Consider the features your JavaScript application needs and remove the parts of the script that you do not use.
