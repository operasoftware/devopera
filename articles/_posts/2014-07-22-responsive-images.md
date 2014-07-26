---
title: 'Responsive Images: Use Cases and Documented Code Snippets to Get You Started'
authors:
- andreas-bovens
intro: 'A handy list of documented examples of responsive images markup, to make you familiar with its different combined use cases.'
tags:
- html
- media
- picture
- media-queries
- rwd
cover: jpg
license: cc-by-3.0
---

<style>
	.feature {
		display:inline-block;
		padding:1px 10px;
		}
	.feature--false {
		background:#EEE;
		}
	.feature--true {
		background:#00A700;
		color:#FFF;
		}
</style>

## Introduction

Finally, true responsive images are becoming a reality on the web — in pure HTML, without convoluted hacks. The `<picture>` element and a couple of new attributes for the `<img>` element are behind a flag in Chromium 37 and shipping in Chromium 38 (so coming soon in Opera), in [Firefox Nightly](https://bugzilla.mozilla.org/show_bug.cgi?id=870022) and are being [implemented in WebKit](https://bugs.webkit.org/show_bug.cgi?id=134634) (although it remains to be seen if Apple will ship it in the next version of Safari).

The new `<picture>` element can be verbose and confusing, because it solves a range of use cases. To help you match your requirements to the responsive image syntax, we’ve prepared this article full of examples.

## Four questions

Before you start using responsive images in your design, you always have to answer the following four questions:

- Do I want my image **sizes** to change depending on my responsive design rules?
- Do I want to optimize for high-**dpi** screens?
- Do I want to serve images with different **mime** types to browsers that support them?
- Do I want to serve different **art** depending on certain contextual factors?

In the examples below, we’re referring to these questions with the keywords **sizes**, **dpi**, **mime** and **art**, respectively, and then for each combination of answers, we show a snippet of example code with a short explanation. When creating these examples, I had [this night shot of the Oslo Opera house](http://commons.wikimedia.org/wiki/File:Full_Opera_by_night.jpg) in my head — it might be useful for your reference.

<figure class="figure">
	<img src="{{ page.id }}/opera-house.jpg" alt="The Opera House in Oslo at night" class="figure__media">
	<figcaption class="figure__caption">The Opera House in Oslo at night</figcaption>
</figure>

## Things to keep in mind

Before you start looking at the different examples though, here are a couple of things to keep in mind:

- `<picture>` *requires* `<img>` as its last child. Without that, nothing is displayed. This is good for accessibility as there is just one traditional place for your alternate text, and it’s great for fallback content
in old browsers, which just show the `<img>` element.
- Think of `<picture>`, `sizes` and `srcset` attributes as overriding the `src` of the `<img>`. Check `currentSrc` in JavaScript to see what’s chosen by the browser. Old browsers will just use `<img src>` of course, so you’d use something like `image.currentSrc || image.src` to handle all cases.
- The `srcset` and `sizes` list is a hint to browsers, not a command. For example, a device with a device-pixel-ratio of 1.5 is free to use either the 1x or 2x image, depending on what it knows about its capabilities, the network, etc.
- `<img sizes="(max-width: 30em) 100vw …">` says: if this “media query”
is true, show the image with a `100vw` width. The first true “media query”
wins, so source order matters.

## Art direction use case

<span class="feature feature--false">sizes</span>
<span class="feature feature--false">dpi</span>
<span class="feature feature--false">mime</span>
<span class="feature feature--true">art</span>

	<picture>
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot.jpg">
		<img
			src="opera-closeup.jpg" alt="The Oslo Opera House">
	</picture>

For browser windows with a width of 1024 CSS pixels and wider, a full-shot photo is used; smaller browser windows get a close-up photo.

## Different image types use case

<span class="feature feature--false">sizes</span>
<span class="feature feature--false">dpi</span>
<span class="feature feature--true">mime</span>
<span class="feature feature--false">art</span>

	<picture>
		<source
			srcset="opera.webp"
			type="image/webp">
		<img
			src="opera.jpg" alt="The Oslo Opera House">
	</picture>

Browsers that support WebP get a WebP image; other browsers get JPG.

## Different image types & art direction use case

<span class="feature feature--false">sizes</span>
<span class="feature feature--false">dpi</span>
<span class="feature feature--true">mime</span>
<span class="feature feature--true">art</span>

	<picture>
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot.webp"
			type="image/webp">
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot.jpg">
		<source
			srcset="opera-closeup.webp"
			type="image/webp">
		<img
			src="opera-closeup.jpg" alt="The Oslo Opera House">
	</picture>

For browser windows with a width of 1024 CSS pixels and wider, a full-shot photo is used; smaller browser windows get a close-up photo. This photo is served as WebP to browsers that support it; other browsers get JPG.

## High-DPI images use case

<span class="feature feature--false">sizes</span>
<span class="feature feature--true">dpi</span>
<span class="feature feature--false">mime</span>
<span class="feature feature--false">art</span>

	<img
		src="opera-1x.jpg" alt="The Oslo Opera House"
		srcset="opera-2x.jpg 2x, opera-3x.jpg 3x">

Browsers on devices with high-DPI screens get a high resolution image; other browsers get a normal image.

## High-DPI images & art direction use case

<span class="feature feature--false">sizes</span>
<span class="feature feature--true">dpi</span>
<span class="feature feature--false">mime</span>
<span class="feature feature--true">art</span>

	<picture>
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot-1x.jpg 1x,
					opera-fullshot-2x.jpg 2x,
					opera-fullshot-3x.jpg 3x">
		<img
			src="opera-closeup-1x.jpg" alt="The Oslo Opera House"
			srcset="opera-closeup-2x.jpg 2x,
					opera-closeup-3x.jpg 3x">
	</picture>

For browser windows with a width of 1024 CSS pixels and wider, a full-shot photo is used; smaller browser windows get a close-up photo. In addition, these photos are served as high-resolution images to browsers on devices with high-DPI screens; other browsers get a normal image.

## High-DPI images & different image types use case

<span class="feature feature--false">sizes</span>
<span class="feature feature--true">dpi</span>
<span class="feature feature--true">mime</span>
<span class="feature feature--false">art</span>

	<picture>
		<source
			srcset="opera-1x.webp 1x,
					opera-2x.webp 2x,
					opera-3x.webp 3x"
			type="image/webp">
		<img
			src="opera-1x.jpg" alt="The Oslo Opera House"
			srcset="opera-2x.jpg 2x,
					opera-3x.jpg 3x">
	</picture>

Browsers on devices with high-DPI screens get an image with twice or even three times the amount of pixels; other browsers get a normal image. These photos are served as WebP to browsers that support it; other browsers get JPG.

## High-DPI images, different image types & art direction use case

<span class="feature feature--false">sizes</span>
<span class="feature feature--true">dpi</span>
<span class="feature feature--true">mime</span>
<span class="feature feature--true">art</span>

	<picture>
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot-1x.webp 1x,
					opera-fullshot-2x.webp 2x,
					opera-fullshot-3x.webp 3x"
			type="image/webp">
		<source
			media="(min-width: 1024px)"
			srcset="opera-fullshot-1x.jpg 1x,
					opera-fullshot-2x.jpg 2x,
					opera-fullshot-3x.jpg 3x">
		<source
			srcset="opera-closeup-1x.webp 1x,
					opera-closeup-2x.webp 2x,
					opera-closeup-3x.webp 3x"
			type="image/webp">
		<img
			src="opera-closeup-1x.jpg" alt="The Oslo Opera House"
			srcset="opera-closeup-2x.jpg 2x,
					opera-closeup-3x.jpg 3x">
	</picture>

For browser windows with a width of 1024 CSS pixels and wider, a full-shot photo is used; smaller browser windows get a close-up photo. In addition, these photos are served as high-resolution images to browsers on devices with high-DPI screens; other browsers get a normal image. They are also served as WebP to browsers that support it; other browsers get JPG.

## Changing image sizes use case

<span class="feature feature--true">sizes</span>
<span class="feature feature--false">dpi</span>
<span class="feature feature--false">mime</span>
<span class="feature feature--false">art</span>

	<img
		src="opera-fallback.jpg" alt="The Oslo Opera House"
		sizes="(min-width: 640px) 60vw, 100vw"
		srcset="opera-200.jpg 200w,
				opera-400.jpg 400w,
				opera-800.jpg 800w,
				opera-1200.jpg 1200w">

For browser windows with a width of 640 CSS pixels and wider, a photo with a width of 60% of the viewport width is used; for less wide browser windows, a photo with a width that is equal to the full viewport width is used. The browser picks the optional image from a selection of images with widths of 200px, 400px, 800px and 1200px, keeping in mind image width and screen DPI.

## Changing image sizes & art direction use case

<span class="feature feature--true">sizes</span>
<span class="feature feature--false">dpi</span>
<span class="feature feature--false">mime</span>
<span class="feature feature--true">art</span>

	<picture>
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.jpg 200w,
					opera-fullshot-400.jpg 400w,
					opera-fullshot-800.jpg 800w,
					opera-fullshot-1200.jpg 1200w">
		<img
		 	src="opera-fallback.jpg" alt="The Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.jpg 200w,
					opera-closeup-400.jpg 400w,
					opera-closeup-800.jpg 800w,
					opera-closeup-1200.jpg 1200w">
	</picture>

For browser windows with a width of 1280 CSS pixels and wider, a full-shot photo with a width of 50% of the viewport width is used; for browser windows with a width of 640-1279 CSS pixels, a photo with a width of 60% of the viewport width is used; for less wide browser windows, a photo with a width that is equal to the full viewport width is used. In each case, the browser picks the optional image from a selection of images with widths of 200px, 400px, 800px and 1200px, keeping in mind image width and screen DPI.

## Changing image sizes & different image types use case

<span class="feature feature--true">sizes</span>
<span class="feature feature--false">dpi</span>
<span class="feature feature--true">mime</span>
<span class="feature feature--false">art</span>

	<picture>
		<source
			srcset="opera-200.webp 200w,
					opera-400.webp 400w,
					opera-800.webp 800w,
					opera-1200.webp 1200w"
			type="image/webp">
		<img
			src="opera-fallback.jpg" alt="The Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-200.jpg 200w,
					opera-400.jpg 400w,
					opera-800.jpg 800w,
					opera-1200.jpg 1200w">
	</picture>

For browser windows with a width of 640 CSS pixels and wider, a photo with a width of 60% of the viewport width is used; for less wide browser windows, a photo with a width that is equal to the full viewport width is used. The browser picks the optional image from a selection of images with widths of 200px, 400px, 800px and 1200px, keeping in mind image width and screen DPI. These photos are served as WebP to browsers that support it; other browsers get JPG.

## Changing image sizes, different image types & art direction use case

<span class="feature feature--true">sizes</span>
<span class="feature feature--false">dpi</span>
<span class="feature feature--true">mime</span>
<span class="feature feature--true">art</span>

	<picture>
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.webp 200w,
					opera-fullshot-400.webp 400w,
					opera-fullshot-800.webp 800w,
					opera-fullshot-1200.webp 1200w"
			type="image/webp">
		<source
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.webp 200w,
					opera-closeup-400.webp 400w,
					opera-closeup-800.webp 800w,
					opera-closeup-1200.webp 1200w"
			type="image/webp">
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.jpg 200w,
					opera-fullshot-400.jpg 400w,
					opera-fullshot-800.jpg 800w,
					opera-fullshot-1200.jpg 1200w">
		<img
			src="opera-fallback.jpg" alt="The Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.jpg 200w,
					opera-closeup-400.jpg 400w,
					opera-closeup-800.jpg 800w,
					opera-closeup-1200.jpg 1200w">
	</picture>

For browser windows with a width of 1280 CSS pixels and wider, a full-shot photo with a width of 50% of the viewport width is used; for browser windows with a width of 640-1279 CSS pixels, a photo with a width of 60% of the viewport width is used; for less wide browser windows, a photo with a width that is equal to the full viewport width is used. In each case, the browser picks the optional image from a selection of images with widths of 200px, 400px, 800px and 1200px, keeping in mind image width and screen DPI. These photos are served as WebP to browsers that support it; other browsers get JPG.

## Changing image sizes & high-DPI images use case

<span class="feature feature--true">sizes</span>
<span class="feature feature--true">dpi</span>
<span class="feature feature--false">mime</span>
<span class="feature feature--false">art</span>

	<img
		src="opera-fallback.jpg" alt="The Oslo Opera House"
		sizes="(min-width: 640px) 60vw, 100vw"
		srcset="opera-200.jpg 200w,
				opera-400.jpg 400w,
				opera-800.jpg 800w,
				opera-1200.jpg 1200w,
				opera-1600.jpg 1600w,
				opera-2000.jpg 2000w">

For browser windows with a width of 640 CSS pixels and wider, a photo with a width of 60% of the viewport width is used; for less wide browser windows, a photo with a width that is equal to the full viewport width is used. The browser picks the optional image from a selection of images with widths of 200px, 400px, 800px, 1200px, 1600px and 2000px, keeping in mind image width and screen DPI.

## Changing image sizes, high-DPI images & art direction use case

<span class="feature feature--true">sizes</span>
<span class="feature feature--true">dpi</span>
<span class="feature feature--false">mime</span>
<span class="feature feature--true">art</span>

	<picture>
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.jpg 200w,
					opera-fullshot-400.jpg 400w,
					opera-fullshot-800.jpg 800w,
					opera-fullshot-1200.jpg 1200w,
					opera-fullshot-1600.jpg 1600w,
					opera-fullshot-2000.jpg 2000w">
		<img
			src="opera-fallback.jpg" alt="The Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.jpg 200w,
					opera-closeup-400.jpg 400w,
					opera-closeup-800.jpg 800w,
					opera-closeup-1200.jpg 1200w,
					opera-closeup-1600.jpg 1600w,
					opera-closeup-2000.jpg 2000w">
	</picture>

For browser windows with a width of 1280 CSS pixels and wider, a full-shot photo with a width of 50% of the viewport width is used; for browser windows with a width of 640-1279 CSS pixels, a photo with a width of 60% of the viewport width is used; for less wide browser windows, a photo with a width that is equal to the full viewport width is used. In each case, the browser picks the optional image from a selection of images with widths of 200px, 400px, 800px, 1200px, 1600px and 2000px, keeping in mind image width and screen DPI.

## Changing image sizes, high-DPI images & different image types use case

<span class="feature feature--true">sizes</span>
<span class="feature feature--true">dpi</span>
<span class="feature feature--true">mime</span>
<span class="feature feature--false">art</span>

	<picture>
		<source
			srcset="opera-200.webp 200w,
					opera-400.webp 400w,
					opera-800.webp 800w,
					opera-1200.webp 1200w,
					opera-1600.webp 1600w,
					opera-2000.webp 2000w"
			type="image/webp">
		<img
			src="opera-fallback.jpg" alt="The Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-200.jpg 200w,
					opera-400.jpg 400w,
					opera-800.jpg 800w,
					opera-1200.jpg 1200w,
					opera-1600.jpg 1600w,
					opera-2000.jpg 2000w">
	</picture>

For browser windows with a width of 640 CSS pixels and wider, a photo with a width of 60% of the viewport width is used; for less wide browser windows, a photo with a width that is equal to the full viewport width is used. The browser picks the optional image from a selection of images with widths of 200px, 400px, 800px, 1200px, 1600px and 2000px, keeping in mind image width and screen DPI. These photos are served as WebP to browsers that support it; other browsers get JPG.

## Changing image sizes, high-DPI images, different image types & art direction use case

<span class="feature feature--true">sizes</span>
<span class="feature feature--true">dpi</span>
<span class="feature feature--true">mime</span>
<span class="feature feature--true">art</span>

	<picture>
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.webp 200w,
					opera-fullshot-400.webp 400w,
					opera-fullshot-800.webp 800w,
					opera-fullshot-1200.webp 1200w,
					opera-fullshot-1600.webp 1600w,
					opera-fullshot-2000.webp 2000w"
			type="image/webp">
		<source
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.webp 200w,
					opera-closeup-400.webp 400w,
					opera-closeup-800.webp 800w,
					opera-closeup-1200.webp 1200w,
					opera-closeup-1600.webp 1600w,
					opera-closeup-2000.webp 2000w"
			type="image/webp">
		<source
			media="(min-width: 1280px)"
			sizes="50vw"
			srcset="opera-fullshot-200.jpg 200w,
					opera-fullshot-400.jpg 400w,
					opera-fullshot-800.jpg 800w,
					opera-fullshot-1200.jpg 1200w,
					opera-fullshot-1600.jpg 1800w,
					opera-fullshot-2000.jpg 2000w">
		<img
			src="opera-fallback.jpg" alt="The Oslo Opera House"
			sizes="(min-width: 640px) 60vw, 100vw"
			srcset="opera-closeup-200.jpg 200w,
					opera-closeup-400.jpg 400w,
					opera-closeup-800.jpg 800w,
					opera-closeup-1200.jpg 1200w,
					opera-closeup-1600.jpg 1600w,
					opera-closeup-2000.jpg 2000w">
	</picture>

For browser windows with a width of 1280 CSS pixels and wider, a full-shot photo with a width of 50% of the viewport width is used; for browser windows with a width of 640-1279 CSS pixels, a photo with a width of 60% of the viewport width is used; for less wide browser windows, a photo with a width that is equal to the full viewport width is used. In each case, the browser picks the optional image from a selection of images with widths of 200px, 400px, 800px, 1200px, 1600px and 2000px, keeping in mind image width and screen DPI. These photos are served as WebP to browsers that support it; other browsers get JPG.

## There is more!

Don’t worry if you haven’t understood this fully! Soon, we’ll publish an in-depth tutorial article on `<picture>` and responsive images. In the meantime, enjoy preparing to save your boss’ and customers’ bandwidth, and making your site even more performant.
