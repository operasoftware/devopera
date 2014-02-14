---
title: Themes in Opera 18+
authors:
- andreas-bovens
intro: 'Due to the major architectural changes we’ve been going through recently, the first versions of our Chromium/Blink based Opera browser (versions 15, 16 and 17) do not support themes. However, from Opera 18 onward, themes are supported again! This article explains you how to create themes for Opera 18+.'
tags:
- themes
- opera
layout: article
---

Due to the major architecture changes we’ve been going through recently, the first versions of our Chromium/Blink based Opera browser (versions 15, 16 and 17) do not support themes. However, from Opera 18 onward, themes are supported again! This article explains you how to create themes for Opera 18+.

## How to

In short, the steps to create a theme are as follows:

1. Find two images you want to use and place them in a folder — I found two nice ones on [Unsplash][1]
2. Create a persona.ini file with your text editor, and add the necessary meta data
3. Compress/archive the content of the folder as a zip file
4. Test if the theme works by dragging it to opera:themes
5. Upload the theme to [our addons catalog][2]

[1]: http://unsplash.com
[2]: https://addons.opera.com/en/themes/

I’ve created a [test theme][3] for you to play with. Just download and unzip it to inspect what’s inside. You find extensive details in the following sections.

[3]: /articles/themes-in-opera-18-and-higher/yellow_sf.zip

<figure>
	<img src="/articles/themes-in-opera-18-and-higher/yellow_sf.jpg" alt="Screenshot of Opera 18 with Yellow SF theme">
	<figcaption markdown="span">Yellow SF theme applied on Opera 18</figcaption>
</figure>

## Images

You’ll need to pick two images: one will function as the background for Speed Dial, the other one as background for pages like opera:extensions, opera:settings, opera:about, etc.

Make sure the images you use are of sufficient size and quality as they’ll need to be rescaled to fit on different screen resolutions. In order to reduce file size as much as possible without sacrificing quality, run your images through a tool like [ImageOptim][5], which shaves off unnecessary bytes from PNG and JPG files.

[5]: http://imageoptim.com

## Persona.ini details

The content of the persona.ini file is as follows:

	[Info]
	Name				= Yellow SF
	Author			 	= Andreas Bovens
	Author URL			= http://bovens.net/
	Version				= 2

	[Start Page]
	Background			= 01.jpg
	Position			= center bottom
	Title Text Color	= #ffffff
	Title Text shadow	= #261712

	[Web UI Pages]
	Background			= 02.jpg
	Position			= center top

	; images by Charlie Foster, found on http://unsplash.com

This should be quite self explanatory, but just in case, here are the details line per line:

- **[Info]**: info section
	- **Name**: Title of the theme
	- **Author**: Author name
	- **Author URL**: A URI that points to the author’s home page or e-mail. Valid schemes are http, https, and mailto
	- **Version**: Version 2 indicates Opera 18+ themes
- **[Start Page]**: section with settings for Speed Dial
	- **Background**: File name of the image that goes behind Speed Dial.
	- **Position**: Position of the start page image — optional, any CSS keyword for position: left, top, right, bottom, center.
	- **Title Text Color**: Color of the text — optional, HEX notation, without alpha
	- **Title Text Shadow**: Color of the text shadow — optional. If set, will be applied as `text-shadow: 1px 1px 1px Value`
- **[Web UI Pages]**: section with settings for opera:settings, opera:about, etc.
	- **Background**: File name of the image that goes behind other pages
	- **Position**: See above for positioning details

In the end I’ve added a comment. You can put comments anywhere you like in the file, as long as they are on a separate line and start with a semicolon (;). You can do this for instance to give attribution to the photographer or designer who made the background images.

## Compression, testing and upload

Make sure there are no unnecessary files inside the zip file, like source files for graphics, .git folders or .DS_Store files, for instance.

To test the theme, load opera:themes in the browser, and drag and drop the ZIP file onto the opera:themes page. If everything is right, the theme will be installed in the Themes Manager’s My Themes section.

To upload the theme, log into the [Opera Add-ons catalog][6], go to [My uploads][7], and submit your theme.

[6]: https://addons.opera.com/
[7]: https://addons.opera.com/en/developer/

## Previous theme format and legacy features

Themes made for Opera 12 and 12.1 also work in Opera 18+, but not all features have a visual effect. The theme will not expand under the tabs for instance, and settings like “Tint Color” are no longer supported.

## Summary

As you can see, making themes for Opera is very easy. Try it out for yourself!