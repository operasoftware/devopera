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
	- [Opera metadata](#metadata)
	- [Item example](#item)
	- [Visualization](#visualization)

## Introduction {#introduction}

Opera TV Snap is an industry-first, end-to-end solution that allows content publishers to create and submit a Smart TV app to the Opera TV Store quickly and easily, for free. See the [Opera TV Snap page](http://www.opera.com/tvsnap/) for more details.

### Basics {#basics}

Specifications you should be aware of before preparing a video feed for the TV Snap Template:

- [RSS specification](http://rssboard.org/rss-specification/).
- [MRSS specification](http://rssboard.org/media-rss/).
- [RSS feed validator](http://rssboard.org/rss-validator/).
- [RFC822](http://rssboard.org/rss-validator/) for date and time.
- [HTML5 Audio and Video Support in Opera TV Store Applications](https://dev.opera.com/tv/html5-audio-video-in-opera-tv-store-apps/)
- 16:9 thumbnail ratio is a must. 256 × 144 px is minimal and recommended for the best user experience. If the image is greater, it will be scaled down to 256 px.

## Opera MRSS {#mrss}

TV Snap 3.0 Template uses Opera Media RSS Specification (OMRSS).

- Feed must point to the MRSS compliant data.
- MRSS may contain more tags than TV Snap Template supports, but they will be ignored.
- We are still trying to provide backward compatibility with RSS, but OMRSS format is recommended and contains many improvements. Feed without `media` namespace will be parsed, but support for this format might be removed in the future.

### Feed example {#feed}

Required tags are:

- `<rss>` as a top level tag.
- One `<channel>` as a child of `<rss>`.
- `<channel>` must contain `<title>` and at least one `<item>`.
- Each `<item>` must be a child of `<channel>`.

Optional tags:

- `<link rel="next">` with proper `href` should point to the next page of results.
- `<opera:metadata>` as a child of `<channel>`
	- It is used as a wrapper to define nested categories.
	- You can indefinitely nest categories inside another one.

Example feed: [Opera MRSS](http://apps.tvstore.opera.com/broadcastspec/opera_mrss_for_broadcasters.xml)

Feed structure:

	<rss xmlns:media="http://search.yahoo.com/mrss/" xmlns:opera="http://apps.tvstore.opera.com/broadcastspec/" version="2.0">
		<channel>
			<title>Channel Title</title>
			<description>Description of channel content</description>
			<opera:metadata>
				<!-- categoryData items - see next section -->
			</opera:metadata>
			<item><!-- See example in next section --></item>
			<item><!-- … --></item>
			<!-- More items -->
			<link rel="next" href="[next results page]"/>
		</channel>
	</rss>

### Opera metadata {#metadata}

Inside `<opera:metadata>` you can put `<opera:categoryData>` to define categories and collections (nested categories).

**Important**: If you use metadata to define categories then in `<media:category>` you should use `path` instead of real category name (it will be taken from `categoryData`'s `label`)

Required attributes of `categoryData`:
- `path` argument defines category nesting. For each nested category you should define exaclty one `categoryData` with correct `path`.
- `label` is name of category

Optional attributes of `categoryData`:
- `description` is description of category.
- `order` argument is optional. If it's not passed then order will be based on MRSS feed order.
- `background` attribute replaces application's background whenever user visits the category. This image should be in jpg format, 1280x720.
- `thumbnail`, `thumbnailwidth` & `thumbnailheight` are used to display category thumbnail.

Example:

	<opera:metadata>
		<!-- 1st category level. -->
		<opera:categoryData order="1" path="videos" label="Clips" description="Section with cool clips."/>
		<!-- 2nd category level. -->
		<opera:categoryData order="1" path="videos/fail" label="Fail Compilations" description="Fail compilations" background="http://domain.com/category55image-background.jpg" thumbnail="http://domain.com/category55image.jpg" thumbwidth="256" thumbheight="144" />
		<opera:categoryData order="2" path="videos/cats" label="Cute Cats" description="All the cute cats in one place" background="http://domain.com/category55image-background.jpg" thumbnail="http://domain.com/category55image.jpg" thumbwidth="256" thumbheight="144" />
		<!-- 3rd category level. -->
		<opera:categoryData order="1" path="videos/cats/black" label="Black Cats" description="Only black cats" />
		<opera:categoryData order="2" path="videos/cats/white" label="White Cats" description="Only white cats" background="http://domain.com/category55image-background.jpg" thumbnail="http://domain.com/category55image.jpg" thumbwidth="256" thumbheight="144" />
	</opera:metadata>

### Item example {#item}

Required tags are:

- `<media:title>`
- `<media:content>` with correct `url` & `type`.
	- You might also use `<media:group>` to group multiple media elements (like video in different formats)
	- Content might also contain `duration` & `bitrate` attributes.
	- Duration should be set as a number of seconds.
	- For widest device support and best user experience use mp4 video type with bitrate up to 4000 kbit (see our [Audio & Video Support](https://dev.opera.com/tv/html5-audio-video-in-opera-tv-store-apps/)).
- `<media:thumbnail>` with correct `url` pointing to an image.
	- 256 × 144 px format is recommended (see [Basics](#basics) for more info)
	- If there is more than one thumbnail then best will be selected based on `width` attribute (if present).
- At least one `<media:category>` is needed but item can belong to many categories. It should contain path to the actual category defined in `<opera:metadata>` tag if one is present or just a simple name of the category.

Optional tags:

- `<pubDate>` used to sort movies from newest to oldest
    - if not set then order will be set based on feed appearence
- `<media:description>` if exist it will be displayed as description for the video.
- `<media:restriction>` used to define country restrictions
- `<media:keywords>` for movie keywords (used in search)
- `<media:credit>` for move credits
- `<media:subTitle>` providing subtitles in VTT format
- `<opera:orderInCategory>` is used to set order of item in category. If item is in many categories then it can have order set to each category separately. It has two required attributes:
    - `path` with value the same as defined in category
    - `value` as a number (ascending)
- Any other MRSS tag (see [MRSS specification](http://rssboard.org/media-rss/))

Item structure:

	<item>
		<pubDate>Mon, 21 Mar 2016 11:00:01 GMT</pubDate>
		<media:title>
			Sam Smoothy Follows His Fathers
			Footsteps In The Andes | Lost…
		</title>
		<media:description>
			Many years ago, Sam Smoothy’s father
			climbed in the Andes mountains…
		</description>
		<media:category>Skiing</category>
		<media:category>Winter/Events</category>
		<opera:orderInCategory path="Winter/Events" value="12"/>
		<media:content url="video.mp4" type="video/mp4"
			bitrate="2200" duration="772"/>
		<media:thumbnail url="thumb.jpg" width="256" height="144"/>
	</item>

### Visualization {#visualization}

Below is example application look with defined categories. Background and thumbnail of this app (right top corner) is provided through the [submission panel](https://publish.tvstore.opera.com/metadata/new/mrss) and is not a part of Opera MRSS format.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/example-1.jpg" alt="Main page view">
	<figcaption elem="caption">Main page view</figcaption>
</figure>

Example of TV Snap application with collections.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/example-2.jpg" alt="View with collections">
	<figcaption elem="caption">View with collections</figcaption>
</figure>