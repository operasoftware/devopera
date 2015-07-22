---
title: 'Making animated themes for Opera'
authors:
- shwetank-dixit
intro: 'You can now make animated themes in Opera. This guide tells you how.'
tags:
- opera
- addons
- themes
license: cc-by-3.0
---

## Introduction

This tutorial will tell you about animated themes, how to make them, and where to upload them for distribution.

## Animated Themes

Support for themes has been there for [quite a long time](https://dev.opera.com/articles/themes-in-opera-18-and-higher/), but it was using JPG, PNG or other such non-animated images. However with Opera 32 and above, you have support for animated themes in which you can use a WebM video file.

The maximum file size supported for a WebM videos in themes is 50 MB.

## Making an animated theme

There are four simple steps to make your animated theme and to test it out on your local machine:

1. Add the required `.webm` file(s) in a directory.
2. Specify details about the theme in a `Persona.ini` file.
3. Zip up the `Persona.ini` file along with the `.webm` file(s).
4. Goto `opera:themes`. Drag and drop the `.zip` file to the window.

If all things are valid, your theme should be installed in the Opera browser running on your local machine.

You can easily make an animated theme using the _theme creator_ in Opera.

1. Open Opera and go to [opera://themes](opera://themes).
2. On the left hand side menu, click on _Create your theme_.
3. Enter relevant details and select the `.webm` file you want.
4. Click on the _Create_ button.

### The `Persona.ini` file

The `Persona.ini` file is just a file which lists essential details about the theme. This includes the theme name, the author, name of the `.webm` file(s) you want included in the theme, and other such things. Let’s see a sample `Persona.ini` file to know more.

	[Info]
	Name					= Sample Extension
	Author					= Random Person
	Author URL				= http://example.org/
	Version					= 2

	[Start Page]
	Background				= sample.webm
	Position				= center bottom

	[Web UI Pages]
	Background				= sample.webm
	Position				= center top
	; “sample” video courtesy of example.org

The `[Info]` section contains all the information about the extension. The things you lists under it are the following:

- **Name**: Title of the theme.
- **Author**: Author name.
- **Author URL**: A URI that points to the author’s home page or e-mail. Valid schemes are `http`, `https`, and `mailto`.
- **Version**: Version 2 indicates Opera 18+ themes.

The `[Start Page]` category lists the details required for the theme when start page is displayed. The start page is the page displayed whenever you open a new tab (this typically includes the speed dial view you see). You need to list the following things under this section.

- **Background**: File name of the image that goes behind Speed Dial.
- **Position**: Position of the start page image — optional, any CSS keyword for position: `left`, `top`, `right`, `bottom`, `center`.

The `[Web UI Pages]` section lists the things needed for the other web UI pages. For example, the the downloads, settings, and extension management pages.

- **Background**: File name of the image that goes behind other pages.
- **Position**: See above for positioning details.

You can includes comments in the `Persona.ini` page as well. They need to be in a seperate line of their own, and need to be started by a semi-colon `;`.

Keep in mind you can set different resources for the Start Page and the Web UI pages. So you can have, say, a video file for the Start Page (this will also be reflected in the history, tabs, bookmarks page and themes management page) and another video (or even image) for the Web UI pages (which will be reflected on the downloads, settings, plug-ins, password management page, and extension management page).

## Testing and uploading to the Opera Add-ons catalog

Once you have zipped up the `Persona.ini` file and required `.webm` files, and have tested it out by installing the theme in your local Opera install, you’re ready to publish it on the [Opera Add-ons catalog](https://addons.opera.com/en/).

Just head over to the [Upload Add-on](https://addons.opera.com/developer/upload/) section of the Opera Add-ons catalog, and submit your theme. Once the moderator approves, it will be published on the Opera Add-ons catalog.
