---
title: The CSS3 `object-fit` and `object-position` Properties
authors:
- chris-mills
intro: 'An introduction to the new `object-fit` and `object-position` CSS3 properties from the CSS Image Values and Replaced Content module working draft.'
tags:
- css3
- open-web
- opera-11
layout: article
---

## Introduction

A common problem in CSS concerns how to control the aspect ratio of replaced elements, such as `<img>` or `<video>`. For example, you might want to have all images occupy the same space on a page, but not distort and lose their aspect ratio when someone uses an image file that isn't quite the right size. Resizing and letter-boxing the image slightly to conserve the aspect ratio is a much more elegant solution than squashing and stretching an image to fit. Or you might want to go the opposite way, and force letter-boxed items, like HTML5 `<video>`s to conform to a specific width and height — maybe you want all videos to be a specific aspect ratio, and want a solution where ones with different aspect ratios automatically appear correctly?

Doing this kind of thing is currently quite difficult, requiring JavaScript to access and manipulate sizes on the fly, or lots of CSS. The CSS3 [CSS Image Values and Replaced Content][1] module working draft define a property called [`object-fit`][2] which aims to solve exactly these sorts of problems. And this module also contains a related property called [`object-position`][3] that you can use to set the horizontal and vertical position of content inside the element.

[1]: http://dev.w3.org/csswg/css3-images/
[2]: http://dev.w3.org/csswg/css3-images/#object-fit
[3]: http://dev.w3.org/csswg/css3-images/#object-position

Support for `object-fit` and `object-position` was introduced in Opera 11 (albeit with an `-o-` vendor prefix). You can set these new properties on the following replaced elements: `<video>`, `<object>`, `<img>`, `<input type=image>`, `<svg>`, `<svg:image>` and `<svg:video>`.

`object-fit` works with SVG content, but the same effect can also be achieved by setting the `preserveAspectRatio=""` attribute in the SVG itself.

## How do `object-fit` and `object-position` work?

You can successfully apply `object-fit` to any replaced element, for example:

	img {
		height: 100px;
		width: 100px;
		object-fit: contain;
	}

In the code samples and examples for this article, we set the `width` and `height` of our replaced elements in CSS. `object-fit` also takes effect when the dimensions have been specified directly in HTML – however, in browsers that don't support this CSS property, this would result in those replaced elements always looking squashed or stretched, so instead we omit the dimensions and let those browsers simply display them using their intrinsic sizes. Which approach works best will depend on your specific situation and what sort of graceful degradation you want to achieve.

The four possible values of `object-fit` are as follows:

- `contain`: if you have set an explicit `height` and `width` on a replaced element, `object-fit:contain` will cause the content (e.g. the image) to be resized so that it is fully displayed with intrinsic aspect ratio preserved, but still fits inside the dimensions set for the element.
- `fill`: causes the element's content to expand to completely fill the dimensions set for it, even if this does break its intrinsic aspect ratio.
- `cover`: preserves the intrinsic aspect ratio of the element content, but alters the width and height so that the content completely covers the element. The smaller of the two is made to fit the element exactly, and the larger overflows the element.
- `none`: the content completely ignorse any height or weight set on the element, and just uses the replaced element's intrinsic dimensions.

Although the value `none` was in the original specification and is supported in Opera, it has been removed in a later revision of the spec – but may well return in a future iteration.

`object-position` works in exactly the same way as [`background-position`][4] does for background images, and can take the same values. For example:

[4]: http://dev.opera.com/articles/view/31-css-background-images/#positioningtheimage

	img {
		height: 100px;
		width: 100px;
		object-fit: contain;
		object-position: top 75%;
	}

In Opera, `object-fit` can also take a value of `auto`, which is the default if the property is not specified. It only really exists to retain backwards compatibility and to allow you to override earlier settings.

## Resizing image while preserving aspect ratio

Sometimes referred to as letter-boxing, there are times when you will want to preserve the aspect ratio of the images on a page, but get them to fit inside the same area. For example, you might have a content management system that allows you to upload products on an e-commerce site or images for an image gallery, with lots of different content authors. They may upload images in roughly the right size, but the dimensions are not always exact – although the images all need to fit in the same-sized part of the screen on each product page, and can't spill out of it or be cut off by the edges. In this case, you could change aspect ratio to make the images all fit in exactly the same size, but that will probably look horrible:

![Images with the aspect ratio shifted look horrible.][5]

[5]: /articles/css3-object-fit-object-position/figure1.jpg

Figure 1: Images with the aspect ratio shifted look horrible.

The other option is to letterbox the images:

![Letter-boxing the images looks much better.][6]

[6]: /articles/css3-object-fit-object-position/figure2.jpg

Figure 2: Letter-boxing the images looks much better.

This looks much better, but it is quite complicated to achieve on the client-side with current browser support. You could of course use some kind of server-side solution to preprocess the images, but this again is complex and adds more overhead.

You can handle this problem really easily with `object-fit`:

	img {
		width: 300px;
		height: 300px;
		…
		-o-object-fit: contain;
	}

Note: In the example files, I've included versions of the prefixed properties with `-o-`, `-moz-`, `-ms-`, and `-webkit-` prefixes, plus a prefixless version. This is to ensure forward compatibility with Opera and other browsers, as more start to support the properties, and when they move to supporting prefixless (final) versions. I've just included the Opera versions of the properties here, for brevity.

The images are all set to be the same width and height, but `-o-object-fit:contain` forces all the images to fit inside the same area and maintain aspect ratio, as demonstrated in the [`-o-object-fit:contain` example][7].

[7]: /articles/css3-object-fit-object-position/contain-images.html

An even better solution, depending on your particular application, might be to maintain aspect ratio, but change the size and crop of the image so it completely envelops the `<img>` element. This can be done easily, by replacing `-o-object-fit:contain` with `-o-object-fit:cover`, and adding `overflow:hidden` to the mix:

	img {
		…
		-o-object-fit: cover;
		overflow: hidden;
	}

See the [`-o-object-fit:cover` example][8].

[8]: /articles/css3-object-fit-object-position/cover-images.html

## Overriding a video's aspect ratio

This example goes in the opposite direction - this time we are taking a video with a broken aspect ratio, which is far too wide and stretches across the element in a nasty thin strip, and forcing it to change aspect ratio and nicely fill it up using `object-fit:fill`. Why would we want to do this? Maybe some of the videos your contents editors upload to your CMS have a a broken aspect ratio, and you want to fix them all on the fly, in one easy fell swoop?

Note that normally videos with broken aspect ratio aren't this extreme: they might be 4:3 instead of 16:9, which is still annoying of course.

To illustrate the point, our [`object-fit:fill` video example][9] uses two `<video>` elements – one displayed in its intrinsic (broken) aspect ratio, and the second one corrected via CSS:

[9]: /articles/css3-object-fit-object-position/fill-video.html

	<video controls="controls" src="windowsill.webm"
		width="426" height="240" class="no-object-fit">
		…
	</video>
	<video controls="controls" src="windowsill.webm"
		width="426" height="240" class="object-fit">
		…
	</video>

Even though the `<video>` elements have `width` and `height` attributes specified in the markup, the first video actually appears letter-boxed, since the `<video>` element always tries to maintaining the source file's intrinsic aspect ratio … and it looks pretty terrible. In the second video, we've simply forced it to conform to the `width` and `height` of the element by applying `object-fit:fill`:

	.object-fit {
		…
		-o-object-fit: fill;
	}

This overrides the video's intrinsic aspect ratio, forcing it to completely fill the `<video>` element so it displays correctly.

## Interesting transition effects

Combining `object-fit` and `object-position` with CSS transitions can lead to some pretty interesting effects for image or video galleries. Let's make some slight modifications to our first example:

	img {
		width: 200px;
		height: 200px;
		…
		overflow: hidden;
		-o-object-fit: none;
		-o-object-position: 25% 50%;
		-o-transition: 1s width, 1s height;
	}

	img:hover, img:focus {
		height: 350px;
		width: 350px;
	}

Of course, this is only a simplified example to illustrate our point. I've enabled basic keyboard access by giving the images a `tabindex` attribute, making them focusable. A full-fledged image gallery would obviously have the thumbnails wrapped clickable, showing large versions of the images.

When you move over the various thumbnails in our [`object-fit:none` with `overflow` gallery example][10] you'll notice that the images aren't shrunk down to fit the element. Instead, only a small part of the image is shown, and the element grows to reveal more of the image. What gives?

[10]: /articles/css3-object-fit-object-position/none-transitions.html

By setting `-o-object-fit:none` on the `<img>` elements, I am telling their content to completely ignore the `width` and `height` set earlier, and spill out of the sides of the elements. Since the intrinsic size of the image files is a lot bigger than the dimensions specified for the `<img>` elements, I've used `overflow:hidden` to crop anything that spills out. A transition is then used to smoothly increase the size of the `<img>` element when it's hovered/focused, which reveals more of the image.

But not only that! I've also used the `-o-object-position: 25% 50%` property to move the position of the image on the `<img>` element over to the right a bit, which creates a nice content-revealing effect.

You could also use `-o-object-position` to move a contained video or image to make a space for captions.

## Summary

This article showcased a few ideas for how to use `object-fit` and `object-position`. You can find more examples on our [`object-fit` test suites page][11]. We are looking forward to seeing what examples you create, and as always let us know what you think of our implementation!

[11]: http://testsuites.opera.com/object-fit/