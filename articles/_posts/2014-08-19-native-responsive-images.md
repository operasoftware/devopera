---
title: Native Responsive Images
authors:
- yoav-weiss
intro: 'Yoav Weiss, the implementor of `<picture>` in Blink, explains how we got the new responsive images spec and how you can use it.'
tags:
- html
- media
- picture
- media-queries
- rwd
license: cc-by-3.0
---

## How It All Began

Our story starts in ancient times, when WURFLs roamed the wilderness, and mobile-only websites were a thing. In these times, a developer that wanted to provide access to his website to mobile users created a simpler, dumbed down version of the “real” website, and served that based on UA detection.

As you surely know, the proliferation of devices with numerous viewport dimensions and many different capabilities called out for a better way to target mobile (and not-so-mobile) users. [Responsive Web Design](http://alistapart.com/article/responsive-web-design) combined new browser capabilities and CSS techniques to create websites that adapt to the device displaying them, and look ideal everywhere. That enabled developers to stop worrying about unreliable device detection and think of their websites in terms of viewport dimensions.

But, even though RWD sites _looked_ different on each device, underneath, [most of them continued to download the same resources for all devices](http://www.guypo.com/uncategorized/real-world-rwd-performance-take-2/). And since images [comprised the major part](http://httparchive.org/interesting.php#bytesperpage) of the bytes that websites were downloading, the developer community started to look into possible solutions to avoid this waste.

That started a (very) long process in which multiple proposals were suggested on various mailing-lists, the problem was analyzed over [blog post](http://blog.cloudfour.com/responsive-imgs/) debates, and the [various use-cases](http://usecases.responsiveimages.org/) that emerged were taken into consideration. The developer community united to form the [Responsive Images Community Group](http://responsiveimages.org/), and eventually, browser vendors got involved and consensus was reached. The [picture element](http://picture.responsiveimages.org/) specification that was written in collaboration between the community and browser vendors was merged into the [HTML spec](https://html.spec.whatwg.org/multipage/embedded-content.html), and both Blink & Gecko’s implementations are destined to ship early this fall!

But, hold on a minute. That’s a great story and all, but why should I care about responsive images? What can responsive images do for _me?_

## Fixed Width Images

So, let’s say that the website you’re building has images that are always of the same dimensions regardless of viewport size. E.g. the website you’re building is not responsive. The only thing “responsive” about these images is that you want them to look good on high-end devices with a higher Device-Pixel-Ratio (or DPR, as his parents fondly call him), but you don’t want to send “retina images” to devices that don’t need them.

Let’s say that you have a 500px image. You want it to be displayed at these _same_ dimensions on retina screens, only with higher quality.

The syntax that enables you to do that would look something like:

	<img src="cat_500px.jpg"
		srcset="cat_750px.jpg 1.5x, cat_1000px.jpg 2x"
		width="500px" alt="lolcat">

Short and sweet, right? No need for too many explanations there. You just give the browser a comma-separated list of resources and their `x` descriptors (describing the screen’s DPR), and the browser picks the best fit.

Note that the 1x image resource is in the `src` attribute, where it doubles as a fallback resource. There’s no need to write the same resource twice!

## Variable Width Images

Now, if your site is a “classical” responsive website with “stretchy” images, the above is not enough. It’s better than nothing, sure, but a 1920px wide screen and a 360px screen with the same density will get the same image, which means you’ll be making significant UX compromises, either on blurriness or on slowness.

What you really want is to define the image resources in a way that allows a browser to pick the right one for the current DPR and viewport size. But how can we do that?

Ideally, we’d want to define the set of available image resources along with their physical dimensions (i.e. their width in pixels), and have the browser download one based on the image’s display dimensions.

But there’s a problem: the browser doesn’t know what the image’s display dimensions will be when it needs to choose which resource to download. The image’s display dimensions depend on the final page’s layout, which often relies on external CSS, and can be influenced by the image’s dimensions, as well as the dimensions of other images on the page. That’s some circularity madness right there!

So, if we want the browser to download the right resource, we need to provide it with a hint regarding the final display dimensions — there’s just no way around that. Of course, depending on our design, the image’s dimensions can vary at the various layouts.

These are rather complex constraints, which is one of the reasons it took a long while to get a proper definition of the problem. Eventually, Google’s [Tab Atkins](https://twitter.com/tabatkins) and [John Mellor](https://twitter.com/john__mellor) came up with a proposal for a syntax that would resolve this “stretchy images” use case, and it was happily adopted into the overall responsive images spec (with Tab as well as [Simon Pieters](https://twitter.com/zcorpan) from Opera doing most of the spec’s editing).

Let’s look at an example of what you would do if you have an image that takes up different dimensions at different layout breakpoints:

	<img sizes="(max-width: 30em) 100vw,
				(max-width: 50em) 50vw,
				calc(33vw - 100px)"
		srcset="swing-200.jpg 200w,
				swing-400.jpg 400w,
				swing-800.jpg 800w,
				swing-1600.jpg 1600w"
		src="swing-400.jpg" alt="Kettlebell Swing">

That may seem overwhelming at first, so let’s break it up into pieces. The `w` descriptors of the `srcset` syntax are not very different from the `x` descriptors that we saw earlier. The `srcset` attribute contains a grocery list of resources that the browser can pick from, and the `w` descriptors tell the browser each resource’s physical dimensions.

But, didn’t we just say that the browser cannot wait for the image’s display dimensions to be calculated because doing so would result in significant delays and possible double downloads? And if the browser cannot wait for the display dimensions, how can it use the image’s physical dimensions to determine which resource to download?

This is where the `sizes` attribute comes into play. It is comprised of value pairs, where the first (optional) value is a media condition (a media query without the media type) and the second value is a CSS length.

The browser goes over the media conditions and looks for the first one that matches the current environment (in most cases, “current environment” `==` current viewport). The second value of the pair (or the first one if the media condition is missing), is set as the pair’s “effective size”, and it describes the estimated display dimensions of the image. This is the hint the developer has to give the browser in order for it to know which resource to pick.

The effective size of the matching pair is used by the browser, along with the screen’s DPR (and possibly other factors) to figure out which resource would be the best to download and display.

Going back to our code example above, assuming we’re running with a browser viewport of 20em over the default root font size of 16px (i.e. a viewport width of 320px), the browser will go over the `sizes` pairs and pick the first one: `(max-width: 30em) 100vw`. That would indicate it that the image is likely to be displayed at the full width of the viewport, so assuming a DPR of 1, the browser is likely try to download the first resource that is larger than 320px wide and end up downloading `swing-400.jpg`. If the DPR value is 2, in order to match the screen’s density the required resource needs to be twice as large, so the browser will probably download the first resource larger than 640px, which is `swing-800.jpg`.

Now, if our viewport is 40em (640px), the `(max-width: 50em) 50vw` pair matches, and the image is likely to take up half of the viewport’s width. That means the image picked it probably the first one larger than 320px for 1x screens and 640px for 2x screens, and the downloaded resources are likely to be identical in both cases.

Why did I use all of those “likely”s and “probably”s in the sections above? They’re there because for the resources _inside_ `srcset`, the browser is free to pick whatever resource its algorithms see fit. That means that you, as a web developer, can’t rely on the browser downloading and displaying the exact resource you want it to. That’s a Good Thing™, since it leaves the browser room to innovate in this space, by adding user preferences, network considerations and other future optimizations to the decision-making process. And since all of the different resources should only differ in quality, differing resource choices shouldn’t have any impact on your page’s layout.

It’s worth noting that if the `sizes` attribute is missing, a default value of `100vw` is used as the effective size instead, as it represents the largest display dimensions the image might be displayed in without horizontal scrolling.

So what happens if you want to see slightly different images on different layouts, showing images whose proportions are different, whose subject is more visible, or anything else your creative selves desire?

That’s what the art direction use case is all about!

## Art Direction

The term “Art Direction” with regard to responsive images was first [coined](http://blog.cloudfour.com/a-framework-for-discussing-responsive-images-solutions/) by [Jason Grigsby](https://twitter.com/grigs), and refers to cases where you want to tailor-fit the displayed image to a specific responsive layout breakpoint. Art direction should be used when your image resources differ not only in their quality, but also in their proportions, crop area, copy text location, shot angle, etc, etc. The possibilities are limitless!

In these cases, you want to make sure that the image displayed to your users at a certain design breakpoint is in fact the image you intended they’d see.

The art direction syntax goes something like:

	<picture>
		<source media="(min-width: 45em)" srcset="large.jpg">
		<source media="(min-width: 32em)" srcset="med.jpg">
		<img src="small.jpg" alt="The president giving an award.">
	</picture>

Here again we hand out a grocery list of resources to the browser. The difference is that this is a list of `<source>` tags, and _their_ selection algorithm is [well-defined by the spec](https://html.spec.whatwg.org/multipage/embedded-content.html#select-an-image-source).

The browser follows that algorithm to the letter and picks the source tag that you intended, every time.

Very much like it does when using the `sizes` algorithm, the browser goes over the list of sources and picks the first one that matches. A match can happen based on both `media` and `type` attributes. (Why `type`? We’ll see that in a bit.)

If both attributes either match or are missing, the matching source is picked. If none of the `<source>`s match, the `<img>` is picked. And once we have an element that’s picked as the source for this image, the resource that will be downloaded is chosen using the source’s `srcset` and `sizes` attributes, according to the same mechanisms we discussed earlier.

A few things to take note of:

- `<source src>` does nothing, and is ignored during the selection process. Make sure you use `<source srcset>`.
- Even though `picture` is the parent element, the element doing all the heavy lifting here is the `<img>`. The `<img>` uses its `<picture>` parent and its elder `<source>` siblings to pick a resource to load, but eventually it is the `<img>` that is used to display the resource. That means that the `<img>` _must_ be there, otherwise, no image will be displayed on screen. That’s also good for fallback purposes: the `<img>` needs to be there in order to provide a fallback for older browsers, so it should be there anyway, but regardless, if the `<img>` is not there, nothing will display.
- Last but not least, if you want to style your image, you need to style `<img>` like you always have. In the immortal words of Tab Atkins, you should think of `<picture>` as a “magical span” around your `<img>`. Same goes for `alt` text. It should go on your `<img>`, like it always has.

### Why can’t we do art-direction with `sizes`/`srcset`?

By design, the `sizes`/`srcset` syntax takes into account the viewport’s width as well as the screen’s DPR. Adding art-direction into the same syntax would have meant that the web developer has to explicitly specify all the DPR and viewport width combinations in the markup.

That would have made the web developer’s job much more difficult and would have made the syntax much harder to grasp and significantly more verbose.

## Image Format Fallback

One more thing you may want to do related to images (not necessarily responsive ones) is to serve different file formats to different browsers, according to the browser’s support for them. On top of the "traditional" file formats that browsers support (i.e. PNG, JPEG and GIF), there are several newer file formats that browser vendors are trying to push. These formats usually perform better than the traditional formats, since they include all kinds of algorithmic improvements that make image compression more efficient. Specifically, Google is pushing the [WebP](https://developers.google.com/speed/webp/) format and Microsoft is pushing [JPEG-XR](http://msdn.microsoft.com/en-us/library/windows/desktop/hh707223.aspx).

The problem here is that these new formats lack the traditional formats’ level of ubiquitous support, which means that if you serve these formats as your `<img src>` value, even though the browsers that support them will show an improved user experience, the ones that don’t won’t show any image at all. That’s hardly good.

Up until today, the only way to serve such formats without breaking the user experience in non-supporting browsers was content-negotiation, using the `Accept` HTTP header or UA sniffing. While that mostly works fine, it has some caveats. It requires server-side fiddling, which some developers can’t do or lack interest in doing. It also introduces difficulties with regard to making these images publicly cacheable.

With the picture syntax, we finally have a way to define a client-side fallback mechanism. By using the `type` attribute on `<source>` we can provide the browser with multiple resource URLs, and let the browser pick the one it supports. Such mechanisms have been available for other resource types for years (e.g. fonts, videos). Now a fallback mechanism is also available for images.

The syntax for client-side format fallback looks something like:

	<picture>
		<source type="image/webp" srcset="president.webp">
		<source type="image/vnd.ms-photo" srcset="president.jpxr">
		<img src="president.jpg" alt="The president fistbumps someone.">
	</picture>

## Can I Use It Today?

Native support for most of the features we discussed is still a few weeks away from reaching stable browsers, but you certainly can start using these features right now.

The `srcset` `x` descriptor is already supported in browsers since Chrome 34, Opera 21 and will be supported in Safari 8.

Picture element support is destined to ship in a few weeks in Chrome 38, Opera 25 and Firefox 33. The implementation of the `sizes`/`srcset` part of the syntax in WebKit is complete, but unfortunately, it did not ship in Safari 8. There’s also still work to be done (read: I need to work on it) to implement the full `<picture>` syntax there.

Regarding IE, officially `<picture>` is “under consideration”, but the IE development team show up on the #respimg IRC channel quite often and ask good questions. Let’s hope the status will switch to “in development” shortly.

Picture element support was also implemented in the W3C’s [validator](http://validator.w3.org/), so you can use that to spot mistakes in your markup, should you run into trouble with it.

The feature has a standard compliant polyfill called [picturefill](https://scottjehl.github.io/picturefill/), and even without it, the inherent `<img>` fallback makes it so that legacy browsers would still download and display the fallback image, meaning that the user experience in these browsers won’t be any different than what they get if you simply use an `<img>` tag.

## The Proposal Left Behind

Those of you who followed the responsive images saga closely may remember yet another proposal, called “Client-Hints”. That proposal suggested solving some of the use cases by using HTTP request headers to tell the server regarding the browser’s environmental conditions, and letting the server adapt the images it sends accordingly. That kind of solution is generally referred to as “content negotiation”.

Unfortunately some browser vendors were reluctant to add new content negotiation-based solutions, because of past bad experience with this kind of solutions. Without support from these browser vendors, progress on Client-Hints stalled and now the proposal is not being actively worked on.

## Community

The responsive images effort, unlike the development process behind most web platform features, was community-driven. It was championed by the RICG, supported by the developer community, and taken home when browser folks got involved too. One big happy family.

In the same spirit, the feature’s implementation in Blink (the rendering engine behind Chrome and Opera) also set something of a precedent.

In order to defuse [initial](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2014-January/041833.html) [implementation](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2014-January/041910.html) concerns from the Blink project, I [devised an implementation plan](https://groups.google.com/a/chromium.org/d/msg/blink-dev/9xIjDTOwbeI/1mL2lDYaHFYJ) with the Blink team and started to work on related infrastructure.

At first, I worked on that during my free time, but later on, after I saw how long that was going to take, I completed the feature’s implementation as my day job. I was financed by the community via a [crowd funding campaign](https://www.indiegogo.com/projects/picture-element-implementation-in-blink) which was put together with the help of the RICG gang (particularly [Mat Marquis](https://twitter.com/wilto) and [Geri Coady](https://twitter.com/hellogeri)).

Web developers, agencies, as well as Google and Opera contributed to the campaign, making it possible for me to work full-time on the implementation, and bring it to where it is today.

## To Sum It Up

Responsive images have been a pain point when developing responsive websites for quite some time. Now, finally, a native solution is getting close.

You can start using it today, with or without picturefill, and start savings your users’ time and money!

*[UA]: User Agent
*[RWD]: Responsive Web Design
