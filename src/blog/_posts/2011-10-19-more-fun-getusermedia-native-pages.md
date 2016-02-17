---
title: More Fun Using the Web, With `getUserMedia` and Native Pages
authors:
- thomas-ford
intro: 'This time we are making available a very exciting build indeed, with support for both the `getUserMedia` method, enabling us to make use of video input from a user’s web cam, and native pages — codenamed Opera Reader — an innovative new set of CSS constructs that allow you to split pages up into paged media.'
tags:
- getusermedia
- opera-mobile
license: os-asa
---

Note: the features covered in this article are now available in a much more stable form in our latest [Opera Next][1] release.

[1]: https://www.opera.com/browser/next/

Another Opera labs release is upon us, esteemed friends in the land of Web! This time we are making available a very exciting build indeed, with support for both the `getUserMedia` method, enabling us to make use of video input from a user’s web cam, and native pages — codenamed Opera Reader — an innovative new set of CSS constructs that allow you to split pages up into paged media, revolutionising the Web reading experience. Want to know more? Read on.

## The builds

To start off with, let’s get you acquainted with the new builds themselves. You can play with these new experimental features in any of the builds listed below:

- [Opera Desktop for Mac][2]
- [Opera Desktop for Linux][3]
- [Opera Desktop for Windows][4]
- [Opera Mobile for Android][5]

[2]: http://snapshot.opera.com/labs/camera-and-pages/Opera-Labs-Camera-and-Pages-12.00-1113.dmg
[3]: http://snapshot.opera.com/labs/camera-and-pages/Linux-FreeBSD/
[4]: http://snapshot.opera.com/labs/camera-and-pages/Opera-Labs-Camera-and-Pages-12.00-1113.exe
[5]: https://www.opera.com/download/get.pl?sub=++++&id=34184&location=360&nothanks=yes

## Native pages

Browsers have adopted the scroll metaphor, offering scrollbars for navigating up and down our content. This is an easy solution for the software, as it allows all content to be accessible without needing to worry about pagination. This however leads to chopped lines of text, and doesn’t work so well on mice-less devices. In addition, mankind misses the beauty of a nicely laid out page.

We’ve more recently seen a step in the right direction, with a proliferation of e-reader devices (such as the Amazon Kindle) with “next page” and “previous page” buttons allowing users to read e-books in a more “book like” fashion. But the Kindle is a walled garden: wouldn’t it be beneficial to have an open technology that allows us to present any content we choose in this manner?

<figure block="figure">
	<img elem="media" src="{{ page.id }}/codex.jpg" alt="A codex">
</figure>

To this end, we are very excited to give you a first look at how a browser can split content into native pages. This proof of concept implements CSS3 extensions to split content into pages that can be “turned” in a natural manner through gestures rather than point and click, control the positioning/floating of figures in multi-column layouts more precisely and provide a consistent navigation system for such content that is independent of your documents. The new CSS3 features that enable this are detailed in the [CSS Generated Content for Paged Media module][7].

[7]: http://dev.w3.org/csswg/css3-gcpm/

For example, turning the contents of an entire web page into a rudimentary paged experience is as simple as including the following in your page:

	@media -o-paged {
		html {
			height: 100%;
			overflow: -o-paged-x;
		}
	}

What we are doing here is declaring that devices that support the `-o-paged` media type should break up the contents of the `<html>` element into pages that fill 100% of the height of the browser window. These pages should be navigated in between horizontally (e.g. by swiping right and left on a touchscreen device): this is what `overflow: -o-paged-x` does.

Like the book revolutionised reading when it replaced the scroll as the most popular reading format in the 5th century, we are hoping that native pages will revolutionise the way that people read the web.

To find out more and play with some demos, read [Opera Reader: Paging the Web][8] by Chris Mills and Håkon Wium Lie.

[8]: http://people.opera.com/howcome/2011/reader/

## Cameras and getUserMedia

We’ve also added support for `getUserMedia`, an HTML5 API method that allows you to set the source of an HTML5 `<video>` as the input of the user’s web cam. This can be achieved with something as simple as the following:

	// Replace the source of the video element with the stream from the camera
	var video = document.getElementById('sourcevid');
	if (navigator.getUserMedia) {
		navigator.getUserMedia('video', successCallback, errorCallback);
		function successCallback(stream) {
			video.src = stream;
		}
		function errorCallback(error) {
			console.error('An error occurred: [CODE ' + error.code + ']');
			return;
		}
	} else {
		console.log('Native web camera streaming (getUserMedia) is not supported in this browser.');
		return;
	}

<figure block="figure">
	<img elem="media" src="{{ page.id }}/exploding-camera.jpg" alt="HTML5 exploding camera demo">
</figure>

For more information about this, including demos, hurry along and have a read of [Playing with HTML5 video and getUserMedia support][10] by Daniel Davis.

[10]: /articles/playing-with-html5-video-and-getusermedia-support/

## Release notes for desktop

- The desktop builds are based on the recent Opera 12 pre-alpha release. Features introduced in there, such as hardware acceleration and WebGL support, are disabled.
- Two `opera:config` preferences are turned on by default: “Scroll is Pan” and “Smooth Scrolling”. As a consequence of this, text selection is broken. This will be fixed soon.
- A known issue is that, when pages have page overflow set, users have to focus the page to be able to use keyboard navigation.
- The device API does not have a user interface yet. This will be added soon.
- These are proof of concept builds, and should be considered experimental and for developer use only.

## Release notes for mobile

- This build is based on Opera Mobile 11.5 for Android, and installs side-by-side next to the regular Opera Mobile 11.5 for Android.
- This build is considered experimental and is intended for development and testing purposes only. This build has not gone through full release testing, and may include unknown bugs or issues.
- Two opera:config preferences are turned on by default: “Scroll is Pan” and “Smooth Scrolling”. As a consequence of this, long press and text selection are broken.
- The device API does not have a user interface yet. This will be added soon.

## Feedback

If you have any feedback, please post it at the [Opera desktop blog][11].

[11]: http://my.opera.com/desktopteam/blog/2011/10/19/new-opera-labs-release-with-getusermedia-and-opera-reader
