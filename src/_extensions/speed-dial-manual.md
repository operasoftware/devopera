---
title: Speed Dial Extensions
authors:
- shwetank-dixit
intro: 'Back in 2007 we introduced the concept of _Speed Dial_ to browsers. It has since turned out to be a hugely popular feature, so it makes sense to give extension authors the ability to add to it by giving them the ability to make Speed Dial extensions.'
license: cc-by-3.0
---

## Introduction

<figure block="figure">
	<img elem="media" src="{{ page.url }}/speed-dial.jpg" alt="Speed Dial extensions">
</figure>

Back in 2007 we introduced the concept of _Speed Dial_ to browsers. It has since turned out to be a hugely popular feature, so it makes sense to give extension authors the ability to add to it by giving them the ability to make Speed Dial extensions.

Speed Dial extensions use an `opr.*` API instead of a `chrome.*` one. Also, they must be packaged in _.nex_ files — if they are in any other files (including _.crx_ they will not run).

## Manifest specifications

The first thing to do is to specify in the manifest that you want the extension to be a Speed Dial extension. First you’ll need to mention `speeddial` in the `permissions` field. You also need to mention the Speed Dial page, which will also act as your background page. Another thing to note is that Speed Dial extensions, do _not_ have permission to create other UI elements like a button or a popup etc.

There is also a `speeddial` field in which you need to specify the title of the Speed Dial and the URL to which it will point to, like so:

	{
		"name": "Speed Dial Extension",
		"developer": "John Doe",
		"permissions": ["speeddial"],
		"background": {
			"page": "speeddial.html"
		},
		"speeddial": {
			"title": "Sample Speed Dial",
			"url": "http://www.opera.com",
			"size_mode": "auto_zoom"
		}
	}

**Note:** Opera will take string described in the `name` field of the manifest and use it as the title of the Speed Dial extension. You can of course then change the title using JavaScript, which is described later on in this article.

## Adapting to user scaling of Speed Dial thumbnails

If the user scales down the size of the thumbnails of the Speed Dials, then Speed Dial extensions will be affected too. This may result in non-optimal text or graphics, depending on the size. From Opera 20 onwards, we are introducing a field called `size_mode` which will allow two values: `auto_zoom` (which is the default) and `adapt`.

If you set he value of `size_mode` to `adapt` then the Speed Dial extension is rendered with viewport size of the current thumbnail size (no scaling) and the extension needs to adapt to the changing size. This gives you control of how the Speed Dial extension will look in different sizes.

If the value is set to `auto_zoom`, then the extension is rendered with viewport size as for the original thumbnail (228×168 px) and zoomed to fit the actual thumbnail size.

The default value is `auto_zoom` so that all extension work out of the box. However, feel free to tweak your extensions by setting `size_mode` to `adapt` in the manifest and use responsive design techniques to further enahnce your Speed Dial displays.

## The Speed Dial page

The Speed Dial page itself is just an HTML page, which will be displayed in the Speed Dial cell. A Speed Dial cell is 228 px in width and 168 px in height. Let’s take an example Speed Dial extension, and see the HTML associated HTML page.

	<!DOCTYPE html>
	<html>
	<head>
		<style>
			body {
				background-color: #333;
				color: #fff;
			}
		</style>
	</head>
	<body>
		<h1>Hey, I’m a Speed Dial extension</h1>
	</body>
	</html>

This will result in a Speed Dial extension which would look like the one below:

<figure block="figure">
	<img elem="media" src="{{ page.url }}/extension-1.png" alt="First Speed Dial extension">
</figure>

Note that the text is there, but is in the top-left corner of the page. Let’s see how to change that so that elements can center nicely in the Speed Dial cell.

## Centering elements in a Speed Dial cell

One of the most common things in a Speed Dial cell is to place an element (whether it’s some piece of text or some image) in the center of the Speed Dial. Since Speed Dial pages are just normal HTML pages, you can use CSS to do this. Previous ways to center content were a bit hard to do if you wanted the content to be centered both vertically and horizontally.

However, with CSS Flexbox, it’s possible to do it very easily. Use `align-items: center` to center the content vertically and `justify-content: center` to do it horizontally. For now, we would also like you to include used Flexbox properties with prefixes as well as the standard version — this would allow the effect to work currently (using prefixes) and makes sure that will work in the future too (when Flexbox is unprefixed, in which case, the unprefixed version will apply).

An example of such an implementation is below:

	<!DOCTYPE html>
	<html>
	<head>
		<style>
			body {
				display: -webkit-flex;
				display: flex;
				-webkit-align-items: center;
				align-items: center;
				-webkit-justify-content: center;
				justify-content: center;
			}
		</style>
	</head>
	<body>
	<div id="cont">
		<img src="opera-icon-low-res.png" alt="Opera Icon">
	</div>
	</body>
	</html>

Which will result in the image being positioned like so:

<figure block="figure">
	<img elem="media" src="{{ page.url }}/extension-2.png" alt="Centering images in Speed Dial with Flexbox">
</figure>

If you are not familiar with Flexbox, you can learn more about it by reading Chris Mills’ great [introductory Flexbox article](http://dev.opera.com/articles/flexbox-basics/), and then go on for a more [advanced article](http://dev.opera.com/articles/advanced-cross-browser-flexbox/) too.

## Use JavaScript to enhance your extension

You can access the Speed Dial functions using JavaScript by using the `opr.speeddial.*` APIs. Your JS code can be simply be linked from the Speed Dial page, for example

	<script src="speeddial.js"></script>

The most common things to do with a Speed Dial in an extension would be to

1. Get details like the title and the URL of the Speed Dial.
2. To update the title and URL to something different.

For the former, you need to use the `get()` variable. A callback is triggered which gives you the required details. For example:

	opr.speeddial.get(function(result) {
		console.log(
			'The URL is: ' + result.url +
			' and the title is ' + result.title
		);
	});

To update the Speed Dial extension, you simply use the `update()` function. For example:

	opr.speeddial.update({
		url: 'http://dev.opera.com',
		title: 'Dev.Opera'
	});

Feel free to [download our sample Speed Dial extension](/extensions/extension-samples/speed-dial-center-content.nex) and have a look around the code.
