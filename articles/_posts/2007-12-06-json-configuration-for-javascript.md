---
title: JSON Configuration for JavaScript
authors:
- gareth-rushgrove
intro: 'If you’re working in a web development team with developers alongside designers, and you want to give the designers an easy way to change the variable parts of the application without the risk of breaking things, an external configuration file is a great idea, and JSON (JavaScript Object Notation) is a perfect format in which to store this data. In this article, Gareth Rushgrove shows you how.'
tags:
- ajax
- javascript
- json
- yui
layout: article
---

## Introduction

In the early days (well, about 4 or 5 years ago in web terms) JavaScript was mainly the preserve of the web developer/designer. For all but the most forward thinking, the approach taken when a little client side interactivity was required was to jump on to the web, find a suitable script and copy, paste and hack it to your needs. Then along came Ajax, progressive enhancement and a bunch of libraries and how things have changed. We’re now making much more use of JavaScript in complex — often bespoke — ways, in our sites and applications. This new emphasis means more people with a programmer mentality are starting to do more complicated things with JavaScript. We’re starting to see talk of JavaScript patterns, meta programming and domain specific languages and prototypal inheritance. All of this just might be too much for the interaction designer who just wants to improve the user experience of the application.

In order to work efficiently in a multi-disciplinary environments, and to create good reusable code, you need to include some well thought out abstractions in your applications. If you’re a JavaScript developer this abstraction might take the form of using a library such as [Dojo][1] or [JQuery][2]. If you’re a web designer working with a development team this might mean using JSON for application configuration details, which is what this article is about.

[1]: http://dojotoolkit.org/
[2]: http://jquery.com/

The core idea is to move out of our central code base things that might change depending on the context of use — such as element `id`s, URLs or image names — and put them in an external configuration declaration. This way the web designer can tell the program what to do without changing (and maybe breaking) it’s internals. This also allows the JavaScript programmer to refactor the underlying code as required, as long as it maintains the same interface and variable names. Below I’ll quickly run through what JSON is and then go through a short example, to give you a more solid idea of what I’m on about.

## JSON

[Douglas Crockford][3], all round JavaScript guru and the inventor of [JSON][4] describes it as follows:

[3]: http://crockford.com/
[4]: http://json.org/

> JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.

JSON is particularly handy when dealing with JavaScript as it is JavaScript, or rather a subset of it (JSON is just standard JavaScript, containing name-value pairs and other data structures to represent the information you want to store.)

This has a number of benefits — in particular there is no complex parsing involved, and JSON is also much more human readable than using something like XML. JSON should look pretty familiar to anyone who has played with JavaScript, or other C syntax inspired languages for that matter — here’s an example declaration:

	var Object = {"array":[
		{"class": "one"},
		{"class": "two"},
		{"class": "three"}
	]};

When it comes to extracting information from JSON using JavaScript you can use the simple dot notation, like so:

	Object.array[0].class // “one”

If you have a string of JSON text from an external source (from a call to an API perhaps) you can convert this to a JavaScript object using either the inbuilt `eval` function or a JSON parser. Using `eval` is recommended only for situations where the JSON supplied can be completely trusted, which is rarely, unless you control the front and backend of your application. In the case of using JSON for configuration it’s probably best to use the parser option, especially since you might intend to release the application for others outside of your control to use.

In order to use it you’ll need to download the [JSON Parser][5] and include it in your page. If you have the JSON string in a `JSONstring` variable you can use the parser as follows to generate an object on which to operate.

[5]: http://www.JSON.org/js.html

	var Object = JSON.parse(JSONstring);

## A Short Example

To demonstrate the general concepts I’ll build a client-side include system that allows me to inject the contents of a file on the same host into the loading page (using the `XMLHTTPRequest` object,) replacing any existing content at the same time. To speed things up a bit I’ll make use of [YUI][6], the YAHOO! User Interface Library. You could of course write this using your library of choice or pure JavaScript, but YUI is saving me a little time and making my code easy to follow. I’m using the YUI [Event Utility][7] to trigger the loading of the JavaScript on page load and making use of the YUI [Connection Manager][8] to make the Ajax request.

[6]: http://developer.yahoo.com/yui/
[7]: http://developer.yahoo.com/yui/event/
[8]: http://developer.yahoo.com/yui/connection/

A few things immediately stand out as possible candidates to move out of the code and into a configuration file — the URL of the file I want to include and the id of the element whose content I am going to replace. Also, generic error messages written during development sometimes end up being used in production code — moving these messages into the configuration file should ensure we get higher quality and more user friendly messages. The name value pairs to be represented in JSON are as follows:

<table>
<tr>
	<th>Variable</th>
	<th>Value</th>
</tr>
<tr>
	<td>URL</td>
	<td>include.html</td>
</tr>
<tr>
	<td>id</td>
	<td>example</td>
</tr>
<tr>
	<td>success_message</td>
	<td>“The external file has been included in the page”</td>
</tr>
<tr>
	<td>failure_message</td>
	<td>“There was a problem including the file”</td>
</tr>
</table>

In JSON you can write this like so:

	var Config = {
		url: "include.html",
		id: "example",
		success_message: "The external file has been included in the page",
		failure_message: "There was a problem including the file"
	}

Moving the values of the variables stored outside the JavaScript code shouldn’t make the code any more difficult to read as long as I use sensible names for the configuration variables — check out the following:

	var Include = function() {

		function success(o) {
			if (document.getElementById(Config.id).innerHTML = o.responseText) {
				YAHOO.log(Config.success_message);
			} else {
				YAHOO.log(Config.failure_message);
			}
		};

		function failure() {
			document.getElementById(Config.id).innerHTML = Config.failure_message;
			YAHOO.log(Config.failure_message);
		};

		return({
			fetch: function() {
				var request = YAHOO.util.Connect.asyncRequest(
					'GET', Config.url,
					{success:success, failure:failure}
				);
			}
		});

	}();

I’m going to load the include file when the page is ready, in this case when the DOM has loaded completely. I’m also being a good citizen by logging everything to the console, which in this simple example makes it easier to see what is going on.

	YAHOO.widget.Logger.enableBrowserConsole()
	YAHOO.util.Event.onDOMReady(Include.fetch);

If you want to check out the complete example code and try it out at home you can [download the working example here][9].

[9]: /articles/json-configuration-for-javascript/examples.zip

There is a lot more I could do with this application to make it more useful in the real world. At present I can’t deal with more than one include definition in the current JSON file, and offering the designer other loading options rather than just firing it off when the page loads seems like a logical progression. Some error handling is also desirable — for instance, if the specified `id` doesn’t exist you’ll get an error. A more complex JSON configuration might look something like this:

	var Config = {"includes":[
		{
			"url": "", "id": "",
			"success_message": "",
			"failure_message": "",
			"trigger_id": "",
			"trigger_event": ""
		},
		{
			"url": "", "id": "",
			"success_message": "",
			"failure_message": "",
			"trigger_id": "",
			"trigger_event": ""
		}
	]};

## Conclusions

Good candidates for moving into configuration files in this way include:

- Element `id`s and `class`es: Placing these into configuration files immediately makes your JavaScript more portable — decoupling your code from the front end in this manner makes it easier for the front end developer or designer to just plugin your code to their front end and use it.
- Boundary settings — Settings such as minimum Flash versions or the default volume level for an audio clip might change in different contexts.
- Messaging configurations — Having all your client side messaging details in one place makes it easier to manage, as such details can often change — for example e-mail address, server port etc.

Think carefully about what you do place in a configuration declaration — sometimes it can be tempting to move everything out of the main code into configuration files. Resist this unless you have a particularly good reason to do so as needless abstractions can make the resulting code harder to understand and maintain for everyone involved. The best remedy for this is to decide on the required configuration options with the rest of your team, based on where else the feature is to be used in the rest of your work.