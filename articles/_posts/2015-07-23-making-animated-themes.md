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

Support for themes has been there for [quite a long time](https://dev.opera.com/articles/themes-in-opera-18-and-higher/), but it was using JPG, PNG or other such non-animated images. However with Opera 32 and above, you have support for animated themes in which you can use a WebM video file or an animated WebP file.

In the video below, you can see an example of animated themes in action.

<figure block="figure">
	<video elem="media" controls>
		<source src="{{ page.id }}/video.mp4" type="video/mp4">
		<source src="{{ page.id }}/video.webm" type="video/webm">
	</video>
</figure>

Videos by [NatureClip](http://natureclip.co.nr/) Licensed under CC-BY
[Still Lake]({{ page.id }}/still-lake.zip) (6 MB) & [Silent Forest]({{ page.id }}/forest.zip) (10 MB).

In the above video, you can see the *Still Lake* animated theme being installed by dragging the .zip file to the `opera:themes` page, after which you can see the theme in action when we go to the speed dial page. Later in the video, we open up the preferences page. You will notice that the background theme is applied there too. In fact, the background theme will be visible on all such internal pages.

All themes you install will be visible in the *My Themes* section of the `opera:themes` page. 

The maximum file size supported for WebM and animated WebP files in themes is 50 MB. Animated GIFs and animated PNGs are not supported.

## Making an animated theme

There are four simple steps to make your animated theme and to test it out on your local machine:

1. Add the required `.webm` or animated WebP file(s) in a directory.
2. Specify details about the theme in a `persona.ini` file.
3. Zip up the `persona.ini` file along with the `.webm` or animated WebP file(s).
4. Goto `opera:themes`. Drag and drop the `.zip` file to the window.

If all things are valid, your theme should be installed in the Opera browser running on your local machine.

You can easily make an animated theme using the _theme creator_ in Opera.

1. Open Opera and go to [opera://themes](opera://themes).
2. On the left hand side menu, click on _Create your theme_.
3. Enter relevant details and select the `.webm` or animated WebP file you want.
4. Click on the _Create_ button.

### The `persona.ini` file

The `persona.ini` file is just a file which lists essential details about the theme. This includes the theme name, the author, name of the `.webm` file(s) you want included in the theme, and other such things. Let’s see a sample `persona.ini` from Still Lake theme to know more.

	; Licensed under CC-BY
	; Video by NatureClip
	; http://natureclip.co.nr/

	[Info]
	Name			= Still Lake
	Author			= Vadim Makeev
	Author URL		= http://pepelsbey.net
	Version			= 2

	[Start Page]
	Background		= video.webm
	Position		= center bottom

	[Web UI Pages]
	Background		= cover.jpg
	Position		= center bottom

The `[Info]` section contains all the information about the extension. The things you lists under it are the following:

- **Name**: Title of the theme.
- **Author**: Author name.
- **Author URL**: A URI that points to the author’s home page or e-mail. Valid schemes are `http`, `https`, and `mailto`.
- **Version**: Version 2 indicates themes for Opera 18 and higher.

The `[Start Page]` category lists the details required for the theme when start page is displayed. The start page is the page displayed whenever you open a new tab (this typically includes the speed dial view you see). You need to list the following things under this section.

- **Background**: File name of the image that goes behind Speed Dial.
- **Position**: Position of the start page image — optional, any CSS keyword for position: `left`, `top`, `right`, `bottom`, `center`.

The `[Web UI Pages]` section lists the things needed for the other web UI pages. For example, the the downloads, settings, and extension management pages.

- **Background**: File name of the image that goes behind other pages.
- **Position**: See above for positioning details.

You can includes comments in the `persona.ini` page as well. They need to be in a seperate line of their own, and need to be started by a semi-colon `;`.

Keep in mind you can set different resources for the Start Page and the Web UI pages. So you can have, say, a video file for the Start Page (this will also be reflected in the history, tabs, bookmarks page and themes management page) and another video (or even image) for the Web UI pages (which will be reflected on the downloads, settings, plug-ins, password management page, and extension management page).

It is important to note that the video or animated WebP only consumes resources when it is in view. When you are not browsing an Opera internal page, then the theme will not be visible, and hence will not consume resources.

## Choosing the right background animation

There are a few things to consider when making an animated theme. The video being used should look nice as a background, and preferebly should look good when played in a loop. If you intend to submit the theme to the [Opera Addons Catalog](https://addons.opera.com/), then it should abide by all the relevant [acceptance criteria](https://dev.opera.com/extensions/tut_publishing_guidelines.html#acceptance-criteria). If the source video requires attribution, then please provide that in the description text in the addons page (and if you want, then as a comment in the `persona.ini` file as well.)

There are a lot of resources on the internet where you can find high-quality videos to use in your animated themes. For example, check out [Vimeo’s Creative Commons Page](https://vimeo.com/creativecommons), [Open Footage](http://www.openfootage.net), [Archive.org]( https://archive.org/details/movies), [Pexels](https://videos.pexels.com/), [Mazwai](http://mazwai.com/) and [Gfycat](http://gfycat.com).

## Testing and uploading to the Opera Add-ons catalog

Once you have zipped up the `persona.ini` file along with required `.webm` or animated WebP files, and have tested it out by installing the theme in your local Opera install, you’re ready to publish it on the [Opera Add-ons catalog](https://addons.opera.com/).

Just head over to the [Upload Add-on](https://addons.opera.com/developer/upload/) section of the Opera Add-ons catalog, and submit your theme. Once the moderator approves, it will be published on the Opera Add-ons catalog.
