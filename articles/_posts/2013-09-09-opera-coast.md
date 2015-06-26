---
title: 'Opera Coast: Developer Resources'
authors:
- samuel-irons
intro: 'Opera Coast takes advantage of mobile browsing by supporting and encouraging development for touch-based web design. There are many resources available online for developers to optimize their sites to this end.'
tags:
- javascript
license: cc-by-3.0
---

Web apps are the center of the Opera Coast browsing experience.

Opera Coast takes advantage of mobile browsing by supporting and encouraging development for touch-based web design. There are many resources available online for developers to optimize their sites to this end.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/coast-ipad.png" alt="">
</figure>

## Design web apps for Opera Coast

If you want to make the most of the Opera Coast experience, you should design your web apps or sites for mobile browsing first. From there, you can expand or contract your pages to fit other devices. Ideally, you can serve different sites for different platforms and devices.

There are a number of tools and APIs you can take advantage of that will make a tablet or smartphone experience more rewarding for your users, paramountly touch events. The iPhone and iPad are renowned for their touch gestures, providing a unique experience to using the device. W3C has proposed [a recommendation for touch events](https://dvcs.w3.org/hg/webevents/raw-file/v1/touchevents.html), which allows you to utilize taps, swipes, pinches, and multiple touches for your web apps.

It’s tempting to use shared buttons that will work on both mobile and desktop versions of your web app or site, but you should consider swipe, multi-touch, and pinch gestures first. Delivering a mobile-oriented interaction to mobile users will make your pages more attractive to them.

You should also consider dynamic methods of loading new content. Transitioning from page to page feels out of date on smartphones, tablets, and slates, and can detract from the experience. Consider showing users interesting loading indicators, instead of spinners. Utilize animations to illustrate transitions and cover up any lags during loading times.

## Set up your HTML first and be consistent

Web apps and sites will begin to render on Opera Coast as soon as the `<html>` element is recognized. This is a good visual cue to your users that a page is being rendered. Setting up the HTML first will quickly provide the user a visual outline of the page, even on slower connections, reassuring the user that a page is going to be served.

Consistency between the static elements of your HTML between pages will take full advantage of the user’s cache and allow your pages to render faster. Find a visual layout that works well with all aspects of your web app or site and maintain it throughout each page.

## Get better performance though script placement

Place scripts at the bottom of the page; this is a best practice for web apps and pages designed for mobile devices. Only in rare cases will you need your JavaScript to execute before anything else on the page. Unlike stylesheets, which should appear toward the top of the page, scripts can prevent parallel and/or progressive loading of page elements. Browsers won’t start anything else until the script is finished, even if the scripts are on different hostnames. To prevent this, and to render page elements in parallel with scripts, place them at the bottom of the page.

## Adjust the initial containing block and zoom factor

The default zoom and containing block on desktop computers is different than on tablets or smartphones. In effect, if you try to display what looks good on desktop on a smaller device, your images and text may look blown-up or blurry when viewed on that device. There are some complicated reasons for this, but basically a pixel measurement is not the same across devices. W3C recommends that if “the pixel density of the output device is very different from that of a typical computer display [such as the iPad’s Retina display], the user agent should rescale pixel values.”

For better text and image rendering on web apps or pages designed specifically for mobile devices, its recommended that you reset the initial block and zoom factor by using a meta viewport element. Insert the following markup into your `<head>` element to tell the device at what scale you want to render the page:

	<meta name="viewport" content="width=device-width,initial-scale=1">

This markup is not a catch-all, but will help render web apps or pages better between devices. You can adjust the zoom or add constraints to the viewport scale, as well. This can be useful when tweaking how a page might look in a different orientation, or a screen with a higher resolution.

## Tailor your web app to Opera Coast

You can style your web app or site to look great on Opera Coast by adding media queries to your CSS. You can supply different stylesheet effects for tweaking your pages across devices. For example, here are the recommended queries for iPads, allowing you to adjust elements for Retina and non-Retina displays:

### iPad 2 and iPad Mini (non-Retina)

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)
	and (-webkit-min-device-pixel-ratio: 1) {
		/* Insert styles */
	}

### iPad 3 and iPad 4 (Retina)

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)
	and (-webkit-min-device-pixel-ratio: 2) {
		/* Insert styles */
	}

Note that you should always add corresponding `-moz-`, `-ms-`, `-o-`, and unprefixed CSS rules, so as to not exclude other browser engines. This also applies for the code examples mentioned below.

## Style your web app according to screen orientation

You can change the way your CSS affects text and images depending on the orientation of the user’s device using media queries. In this way, you can make sure your web app looks great in both portrait and landscape orientations. Adding the orientation descriptor (either portrait or landscape) to your media query will allow to define specific styles depending on the device’s orientation.

For example, you can specify styles for an iPad Mini device in landscape orientation by adding this `@media` rule to your CSS:

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)
	and (-webkit-min-device-pixel-ratio: 1) and (orientation: landscape) {
		/* Insert styles */
	}

Or, for an iPad 4, in portrait orientation:

	@media only screen and (min-device-width:768px) and (max-device-width:1024px)
	and (-webkit-min-device-pixel-ratio:2) and (orientation:portrait) {
		/* Insert styles */
	}

Alternatively, you can load a separate CSS entirely for each orientation. For the best performance, we still recommend using `@media` in a minified CSS file. But, for development and testing, you can load different stylesheets by adding an orientation descriptor to your linked resources.

Here’s an example of loading two different styles in the `<head>` element:

	<!-- Styles for iPad 2/iPad Mini, in portrait orientation -->
	<link rel="stylesheet" media="only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: portrait)" href="lo-res-portrait.css">
	<!-- Styles for iPad 3/4, in landscape orientation -->
	<link rel="stylesheet" media="only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)" href="hi-res-landscape.css">

There are additional descriptors and ways of working with media queries. [Read all about them in the W3C Media Queries recommendation.](http://drafts.csswg.org/mediaqueries3/)

## Serve Retina images

If you are setting up different viewport sizes, you may also want to serve different images to fit various device resolutions. W3C has specified a new attribute for the `<img>` element that defines variants of the same image to serve different resolutions for content images: `srcset`. Note that this is only supported from iOS 7 onward.

If you want to serve a higher-resolution image for Retina displays, without penalizing loading times for lower-density displays (like those of iPad 2 and iPad Mini), you can mark up your image element to change the image source when the browser detects a higher pixel density.

For example:

	<img src="image.jpg" srcset="retina.jpg 2x">

This markup basically says, “use the standard image for low-resolution displays, and use this hi-resolution image (`retina.jpg`) for devices with a higher pixel density.” This attribute can also serve up different images for viewport sizes, as well, by setting optional width and height descriptors for multiple `srcset` attributes. [You can read all about the `srcset` attribute in the WHATWG HTML Living Standard.](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset)

## Optimize your Opera Coast web app image (site tile icon)

Here’s a list of useful tips to make sure your icon looks great on Opera Coast.

### Your web app’s image and preferred size

In general, icon references and domain names are used to group pages into the same web app on Opera Coast’s home screen or in search results. You should include the same icons and icon-reference markup for pages you want grouped together.

For the best image fidelity, Opera Coast prefers a web-app image size of 228×228px.

### Multiple icon references

Opera Coast web-app image sizes are larger than Microsoft tile images and Apple touch icons (144×144px). To retain icons for MS and Apple implementations, we recommend you reference your Opera Coast web-app image using the following markup in your `<head>` element:

	<link rel="icon" href="$URL" sizes="228x228">

This will distinguish an icon optimized for Opera Coast.

### Web-app image preferences

If you don’t wish to remake your site’s icon, Opera Coast will look for the following HTML elements to find an icon for your pages, and use the largest one to set your site’s web-app image:

	<meta name="msapplication-TileImage" content="$URL">
	<meta name="msapplication-TileColor" content="$COLOR">
	<link rel="apple-touch-icon" href="$URL" sizes="$AxB">
	<link rel="apple-touch-icon-precomposed" href="$URL" sizes="$AxB">
	<link rel="shortcut icon" href="$URL">
	<link rel="icon" href="$URL">

Both `msapplication-TileImage` and `msapplication-TileColor` are used simultaneously to produce an icon’s image. If either reference is missing, Opera Coast will look for other icon references to produce the web-app image.

### Web-app image border colors

The border color for web apps is determined by the dominant color in the icon.

### Web-app image preference when there is no markup

Opera Coast will look for common icons names on your root directory. For example, `example.com/favicon.ico` or `example.com/apple-touch-icon.png`. If Opera Coast cannot find an icon on your root directory, the web-app image is created by assigning a color and adding text. Opera Coast will remember these assignments until it detects that an icon has been added to the site’s mark-up.

## Open links in Opera Coast from 3rd party apps

If you want to open URLs in Opera Coast, you can use the prefix `coast-http://` or `coast-https://`.

### Use x-callback-url to get back to your app

If you'd like to keep a more seamless flow between your app and the web, Opera Coast supports x-callback-url. The x-callback-url schema guides users back to your native app when they follow a link that opens in Opera Coast.

To add a callback for web links that open in Opera Coast, use the following schema:

	coast://x-callback-url/open?x-source=<X>&x-success=<Y>&url=<Z>

Where `X` is a name of source app, `Y` is url to go back to source app, and `Z` is url to be opened in Coast.

For example:

	coast://x-callback-url/open?
		x-source=KickAssApp&
		x-success=com.KickAssApp.callback%3A%2F%2F&
		url=http%3A%2F%2Fwww.operacoast.com

## Debug your app with Safari

Unfortunately, Apple restricts apps other than Safari from using Web Inspector to debug web apps and pages. It is recommended that you use Safari to debug. Generally, if you app works well in Safari, it should work well in Opera Coast.
To debug in Safari:

1. Connect your device to your Mac’s USB port.
2. On your device, go to _Settings_ → _Safari_ → _Advanced_, and toggle on the _Web Inspector_ option.
3. On your device, navigate to your web app’s location in the Safari app.
4. On your computer, open Safari and select _Develop_ → _Device Name_ → _Web App Name_.

Note that debugging does not work in private browsing sessions.
