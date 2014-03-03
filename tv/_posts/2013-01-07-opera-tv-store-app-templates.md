---
title: Opera TV Store App Templates
authors:
- daniel-davis
intro: 'Since the launch of the Opera TV Store, we’ve seen a variety of apps published by creators and enjoyed by users. The fact that our TV apps are built using web standards means that web developers can use their existing skills to create content for the TV platform. Developing for TV can still feel unfamiliar, however, so to make it easier we’ve created a couple of templates for common types of apps that content creators can freely use.'
tags:
- store
- tv
license: cc-by-3.0
layout: article
---

## Introduction

Since the launch of the Opera TV Store, we’ve seen a variety of apps published by creators and enjoyed by users. The fact that our TV apps are built using web standards means that web developers can use their existing skills to create content for the TV platform. Developing for TV can still feel unfamiliar, however, so to make it easier we’ve created a couple of templates for common app types that content creators can freely use.

On any platform, news and entertainment are among the most popular types of content so the templates we’re providing are for video player and RSS reader apps. Both of them are intended to be easy to customise so you can quickly publish your own branded apps without having to worry about development time and costs.

## Video player template

<figure id="figure-1">
	<img src="/articles/opera-tv-store-app-templates/video-app-template.jpg" alt="Screenshot showing the video player TV app in use">
	<figcaption markdown="span">Figure 1: The video player TV template in use</figcaption>
</figure>

### Overview

The video app template is more than just a simple player — it allows you to separate videos into channels based on a theme or subject. There is also a built-in bookmarking feature where users can move videos they particularly like into a list of their favorites. When watching videos, users can also choose to play videos continuously and even shuffle the order in which they are played. To customize the template, there are three main areas that can be easily edited — data (which can be via the XML file or your existing API), images and colors.

### Customization

The first thing you will want to do is add your chosen videos and channels. This is done in the `video.xml` file, which looks like this:

	<?xml version="1.0" encoding="UTF-8"?>
	<rss>
		<channel>
		<item>
			<title>Opera Labs: Mobile Extensions</title>
			<description>We’re excited to share with you a Labs release of our mobile browser with support for extensions.</description>
			<category>Opera Labs</category>
			<duration>00:01:24</duration>
			<content url="http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.mp4" fileSize="24434480" type="video/mp4" />
			<thumbnail url="http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.jpg" width="250" height="140" />
		</item>
		</channel>
	</rss>

This file is read by the function `getData()`, in the file `videotemplate.js`, so if you prefer to use your own API or RSS feed for the source of the videos you just need to change the file address in that function. You would also need to change the parsing rules in the `prepareData()` function in the same file to suit.

For visual customization, all images are contained in the `images` directory and named with logical filenames such as `logo.png`. This allows you to easily replace them with your own logo and color scheme. In addition the styles for the app’s design are in the `style.css` file in the `css` directory. Font and color definitions have been placed at the top of this file to make it easier to customize.

## RSS reader template

<figure id="figure-2">
	<img src="/articles/opera-tv-store-app-templates/rss-app-template.jpg" alt="Screenshot showing the RSS reader TV app in use">
	<figcaption markdown="span">Figure 2: The RSS reader TV template in use</figcaption>
</figure>

### Overview

The RSS reader app template allows you to conveniently provide news or other regularly updated content in a single app. Like the video app template, it is easily controlled with the direction keys of a TV remote control and includes a slideshow feature that can automatically display individual news items or articles one by one. Customization can consist of simple color changes, or more advanced alterations such as editing the dynamically-generated HTML.

### Customization

The most important step is to specify the feeds you’d like to use. This is done by editing the `DEF_FEEDS` array in the `js/config.js` file. You can add as many as you like — including feeds that are hosted on an external domain — however to workaround browser security measures a proxy feed server needs to be used. There are instructions for setting this up in the tutorial, linked to with the downloadable package below. A list of feeds may look something like this:

	var DEF_FEEDS = [{
		url: 'data/data.xml';
	},
	{
		url: 'http://my.opera.com/chooseopera/xml/rss/blog/',
		proxy: true
	}];

Also in the `js/config.js` file are options to change the title of your app and the address of the proxy server, if necessary:

	/**
	 * Application main title
	 */
	var APP_TITLE = 'All feeds';

	/**
	 * Proxy URL
	 */
	var PROXY_URL = '/xhrproxy/?_proxy_url=';

Visual styles for the app can be changed by editing the `css/common.css` file, and if you’d like to edit the HTML that each feed item uses, that is contained in the `js/Item.js` file in the `TMPL` and `TMPL_CONTENT` arrays.

## Downloading the templates!

The app templates are available for download here (ZIP files):

- [Video player app template][3]
- [RSS reader app template][4]

[3]: http://apps.tvstore.opera.com/templates/videotemplate.zip
[4]: http://apps.tvstore.opera.com/templates/rssreader.zip

The ZIPs both include more detailed tutorials on how to add your own data and customize the templates to suit your taste or brand guidelines. They have been designed so that you don’t need to edit functionality or layout to create an easy-to-use, good-looking app, however because both templates are provided under a [free, open source license][5], there’s nothing to stop you customizing the code at a deeper level if you wish. We look forward to seeing the apps you create from these templates in the Opera TV Store!

[5]: http://creativecommons.org/licenses/by/3.0/

The templates are licensed under a [Creative Commons Attribution 3.0 Unported][6] license. Please include the following notice in any distribution: Copyright © 2012 Opera Software ASA. Used by Permission.

[6]: http://creativecommons.org/licenses/by/3.0/

## Updating the templates

We are constantly looking to improve our app templates, by fixing bugs and adding new features. Because of this, they are designed to be easily upgradeable to updated versions containing new styling and script logic — as long as application developers do not modify files other than the `custom.css` and `config.js` files. Whenever a new version of an app template is available (check the links above) just download and unpack it, then copy your app’s existing custom `config.js` and `custom.css` files into the updated package, overwriting the default ones there.

If your app has more significant customizations, bear in mind that upgrading to a new version might be much more difficult. Also please note that these instructions mainly relate to the video app template (and possible others that we may release in the future) — the RSS app template is unlikely to require updates, and such an update would be much more complicated.
