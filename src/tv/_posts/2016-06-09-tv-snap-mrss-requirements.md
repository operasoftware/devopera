---
title: Opera TV Snap Data Format Requirements
authors:
- oskar-furga
intro: 'Specification of Opera MRSS format required to publish applications using TV Snap Template.'
tags:
- video
- media
- tv
license: cc-by-3.0
---

## Table of Contents

- [Introduction](#introduction)
	- [Basics](#basics)
- [Opera MRSS](#mrss)
	- [Feed example](#feed)
	- [Item example](#item)
	- [Visualization](#visualization)

## Introduction {#introduction}

Opera TV Snap is an industry-first, end-to-end solution that allows content publishers to create and submit a Smart TV app into the Opera TV Store quickly and easily, for free. See [opera.com/tvsnap](http://www.opera.com/tvsnap/) for more details.

### Basics {#basics}

Specification you should be aware before preparing video feed for TV Snap Template:

- [RSS specification](http://rssboard.org/rss-specification/).
- [MRSS specification](http://rssboard.org/media-rss/).
- [RSS feed validator](http://rssboard.org/rss-validator/).
- [RFC822](http://rssboard.org/rss-validator/) for date and time.
- [HTML5 Audio and Video Support in Opera TV Store Applications](https://dev.opera.com/tv/html5-audio-video-in-opera-tv-store-apps/)
- 16:9 thumbnail ratio is a must. 256 × 144 px is minimal and recommended for the best user experience. If image will be greater it will be scaled to 256 px.

## Opera MRSS {#mrss}

For Opera TV Snap Template we use MRSS subset of tags.

- MRSS may contain more tags than TV Snap Template supports, but they will be ignored.
- For TV Snap 2.0 we don’t use any namespace in our feed parser, but `media` namespace is recommended for defining content.

### Feed example {#feed}

Required tags are:

- `<rss>` as a top level tag.
- One `<channel>` as a child of `<rss>`.
- `<channel>` must contain `<title>` and at least one `<item>`.
- Each `<item>` must be a child of `<channel>`.

Optional tags:

- `<link rel="next">` with proper `href` should point to the next page of results.
- Tags like `<title>` or `<description>` and others not mentioned before won’t be used.

Feed structure:

	<?xml version="1.0" encoding="utf-8"?>
	<rss version="2.0">
		<channel>
			<title></title>
			<descrption></description>
			<item><!-- See example in next section --></item>
			<item><!-- … --></item>
			<!-- More items -->
			<link rel="next" href="[next results page]"/>
		</channel>
	</rss>

### Item example {#item}

Required tags are:

- `<media:title>`
- `<media:content>` with correct `url` & `type`.
	- Content might also contain `duration` & `bitrate` attributes.
	- Duration should be set as a number of seconds.
	- For widest device support and best user experience use mp4 video type with bitrate up to 4000 kbit (see our [Audio & Video Support](https://dev.opera.com/tv/html5-audio-video-in-opera-tv-store-apps/)).
- `<media:thumbnail>` with correct `url` pointing to an image.
	- 256 × 144 px format is recommended (see [Basics](#basics) for more info)
	- If there is more than one thumbnail then best will be selected based on `width` attribute (if present).

Optional tags:

- `<media:category>` will be used as a section name for videos.
	- There might be more than one category, but only first one will be used.
	- If category is empty or not set then category based on `<pubDate>` will be created (eg. "March 2016").
- `<media:description>` if exist it will be displayed as description for the video.
- `<pubDate>` will be used to group videos if `<category>` is not set.
	- If there are less than 20 videos monthly then periods are merged (eg. January — March 2016).
	- This attribute is also used to create _Most Recent_ category (latest 20 videos) — if not defined then category is hidden.

Item structure:

	<item>
		<media:title>Sam Smoothy Follows His Fathers Footsteps In The Andes | Lost…</title>
		<media:description>Many years ago, Sam Smoothy’s father climbed in the Andes mountains (…)</description>
		<media:category>Skiing</category>
		<pubDate>Mon, 21 Mar 2016 11:00:01 GMT</pubDate>
		<media:content url="video.mp4" type="video/mp4" bitrate="2200" duration="772"/>
		<media:thumbnail url="thumb.jpg" width="288" height="162"/>
	</item>

### Visualization {#visualization}

Below is example application look with defined categories. Background and thumbnail of this app (right top corner) is provided through the [submission panel](https://publish.tvstore.opera.com/metadata/new/mrss) and is not a part of Opera MRSS format.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/example-1.jpg" alt="Category based TV Snap 2.0 application">
	<figcaption elem="caption">Category based TV Snap 2.0 application</figcaption>
</figure>

Example of TV Snap application without defined categories.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/example-2.jpg" alt="Date based TV Snap 2.0 application">
	<figcaption elem="caption">Date based TV Snap 2.0 application</figcaption>
</figure>
