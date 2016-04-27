---
title: Opera TV Snap data format requirements
authors:
- oskar-furga
intro: 'Specification of Opera MRSS format required to publish applications using TV Snap Template.'
tags:
- mrss
- snap
- store
- template
- tv
- video
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

Opera TV Snap is an industry-first, end-to-end solution that allows content publishers to create and submit a Smart TV app into the Opera TV Store quickly and easily, for free. See [opera.com/tvsnap][1] for more details.

### Basics {#basics}

Specification you should be aware before preparing video feed for TV Snap Template:

* RSS specification: [rssboard.org/rss-specification][2]
* MRSS specification: [rssboard.org/media-rss][3]
* Feed should validate: [rssboard.org/rss-validator][4]
* Date and time format must comply with [RFC822][5]
* [HTML5 Audio and Video Support in Opera TV Store Applications][6]
* 16:9 thumbnail ratio is a must. 256 x 144 [px] is minimal and recommended for the best user experience . If image will be greater it will be scaled to 256 px.

## Opera MRSS {#mrss}

For Opera TV Snap Template we use MRSS subset of tags.

* MRSS may contain more tags than TV Snap Template supports, but they will be ignored.
* For TV Snap 2.0 we don't use any namespace in our feed parser, but `media` namespace is recommended for defining content.

### Feed example {#feed}

Required tags are:
* `<rss>` as a top level tag.
* One `<channel>` as a child of `<rss>`.
* `<channel>` must contain `<title>` and at least one `<item>`.
* Each `<item>` must be a child of `<channel>`.

Optional tags:
* `<link rel="next">` with proper `href` should point to the next page of results.
* Tags like `<title>` or `<description>` and others not mentioned before won't be used.

Feed structure:

	<?xml version="1.0" encoding="utf-8"?>
	<rss version="2.0">
		<channel>
			<title></title>
			<descrption></description>
			<item><!-- see example in next section  --></item>
			<item><!-- ... --></item>
			<!-- more items -->
			<link rel="next" href="http://link_to_next_results_page.com" />
		</channel>
	</rss>

### Item example {#item}

Required tags are:
* `<media:title>`
* `<media:content>` with correct `url` & `type`.
	- Content might also contain `duration` & `bitrate` attributes.
	- Duration should be set as a number of seconds.
	- For widest device support and best user experience use mp4 video type with bitrate up to 4000 kbit (see our [Audio & Video Support][6]).
* `<media:thumbnail>` with correct `url` pointing to an image.
	- 256 x 144 px format is recommended (see [Basics](#basics) for more info)
	- If there is more than one thumbnail then best will be selected based on `width` attribute (if present).

Optional tags:
* `<media:category>` will be used as a section name for videos.
	- There might be more than one category, but only first one will be used.
	- If category is empty or not set then category based on `<pubDate>` will be created (eg. "March 2016").
* `<media:description>` if exist it will be displayed as description for the video.
* `<pubDate>` will be used to group videos if `<category>` is not set.
    - If there are less than 20 videos monthly then periods are merged (eg. January - March 2016).
    - This attribute is also used to create *Most Recent* category (latest 20 videos) - if not defined then category is hidden.

Item structure:

	<item>
		<media:title>Sam Smoothy Follows His Fathers Footsteps In The Andes | Lost...</title>
		<media:description>Many years ago, Sam Smoothy's father climbed in the Andes mountains (...)</description>
		<media:category>Skiing</category>
		<pubDate>Mon, 21 Mar 2016 11:00:01 GMT</pubDate>
		<media:content url="http://elisa.vo.llnwd.net/v1/stage/podcasts/extranet-604163_2M.mp4" type="video/mp4" bitrate="2200" duration="772" />
		<media:thumbnail url="http://edge.cdn.epictv.com/images/episode_604163_14566_288X162.jpg" width="288" height="162" />
	</item>

### Visualization {#visualization}

Below is example application look with defined categories. Background and thumbnail of this app (right top corner) is provided through the [submission panel][8] and is not a part of Opera MRSS format.

![Category based TV Snap 2.0 application][7]

Example of TV Snap application without defined categories.

![Date based TV Snap 2.0 application][9]

[1]: http://www.opera.com/tvsnap/
[2]: http://rssboard.org/rss-specification/
[3]: http://rssboard.org/media-rss/
[4]: http://rssboard.org/rss-validator/
[5]: http://www.w3.org/Protocols/rfc822/#z28
[6]: https://dev.opera.com/tv/html5-audio-video-in-opera-tv-store-apps/
[7]: snap2-example.jpg
[8]: https://publish.tvstore.opera.com/metadata/new/mrss
[9]: snap2-example2.jpg
