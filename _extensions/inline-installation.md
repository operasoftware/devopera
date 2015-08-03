---
title: Inline Installation of Extensions
authors:
- shwetank-dixit
license: cc-by-3.0
---

## Introduction

Usually, the way users install extensions is by going to the [Opera Addons Catalog](http://addons.opera.com) and selecting an extension there. However, at times, you might want a way for a person to click on a link on your own web page, and install it without having to go the addons catalog. This process is known as “inline installation” of extensions.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/installation.png" alt="">
</figure>

Inline installation is especially useful for extension authors who have a dedicated webpage or site for the extension, from where they would like the peple visiting that page to install it without having to leave their site. With “inline installation” of extensions, you can have the browser prompt the user to install the extension from the current web page itself. Keep in mind that the extension is still served and installed from the [Opera Addons Catalog](http://addons.opera.com), but the user will not be required to go there, and can install the extension through the prompt right from your web page.

## What to add in your webpage

You will need to use the [`opr.addons.installExtension()`](/extensions/addons-api/#method-installextension) function and add it to your page. Its first parameter is the `id` of the extension, followed by an optional success callback and an error callback.

Let’s see some sample code of how it would be like to add inline installation to a webpage.

Assuming a button with the `id` as `my-extension`.

	<button id="my-extension">
		Click here to add my extension
	</button>

We would add the following piece of JavaScript.

	var id = '<sample extension id>';
	var myExtension = document.querySelector('#my-extension');

	myExtension.addEventListener('click', function(event) {
		opr.addons.installExtension(
			id, function () {
				console.log('Success');
			}, function (errorMessage) {
				console.log('Error: ' + errorMessage)
			}
		);
	}, true);

When the person clicks on the button, it calls `opr.addons.installExtension()`. The first parameter will take the `id` of the extension and call the installation dialog box, from which the user can see details of the extension (Its name, icon and a short summary of the permissions it wants access to). The user can then either cancel the installation request or go on to install it.

## Some things to keep in mind

There are a few things to keep in mind when using `opr.addons.installExtension()`. The first is that it can only be used in the top frame (that is, not through an `<iframe>` or such). Secondly, at most only one installation may run at a given time, and it can only be used in response to a user gesture (for example, a mouse click). So, it is recommended that you implement this functionality in conjuction with a user interface element which makes it clear what the gesture is supposed to be (e.g. for using a button if using the mouse click event).

One more thing to keep in mind is that you can call for the inline installation of any Opera extension from your webpage.

So go on and add inline installation of Opera extensions to your web pages. It’s a great way to get more people to install extensions and it is very simple to implement!
