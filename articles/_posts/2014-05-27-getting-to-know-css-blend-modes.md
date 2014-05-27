---
title: Getting to know CSS Blend Modes
authors:
- shwetank-dixit
intro: 'CSS Blend Modes provide a way to specify how one layer will interact or “blend” with the one underneath. Until now, this was the domain of photo editing applications, but now they are available on the web using CSS itself!'
tags:
- blendmodes
- css
- masking
cover: jpg
license: cc-by-3.0
layout: article
---

CSS Blend Modes provide a way to specify how one layer will interact or “blend” with the one underneath. Until now, this was the domain of photo editing applications, but now they are available on the web using CSS itself!

## What are CSS Blend Modes

If you have ever used a photo editing application extensively (like for example, _Adobe Photoshop_, _Pixelmator_, _GIMP_, etc.) then you might be familiar with Blend Modes. Like the name suggests, Blend Modes are various modes by which the one image will blend into the image underneath. Depending on the mode you choose, you will get different results with different effects.

These Blend Modes are now available in CSS as well via the [Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/) specification. Blend Modes are used to determine how a particular color will blend into the background layer’s color. The results can be very interesting indeed.

## How Blend Modes work

Blend Modes are basically a set of different ways to determine what the final color of the image should be when an element (either partially, or fully) overlaps another one. In essence, these modes are mathematical functions, which use the mathematical representations of the colors of the source and background layers — for example RGBa, where values are between 0 and 1 for all the channels — and returns a final mathematical value for that particular pixel, which in the end, determines the color of that pixel. The exact formulas that each blend mode employs for determining colors can be read in the [specification](http://dev.w3.org/fxtf/compositing-1/#blending). For now, we’ll take a look at the various Blend Modes that are available to us in CSS, and what kind of effect they produce.

## The various Blend Modes available in CSS

### Normal

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_normal.jpg" alt="" class="figure__media">
</figure>

The _normal_ blend mode just produces the source image without any visible effect.

### Multiply

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_multiply.jpg" alt="" class="figure__media">
</figure>

As the name suggests, the _multiply_ blend mode multiplies the colors of the source image and the background image to get the final color. This typically results in a darkened image.

### Screen

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_screen.jpg" alt="" class="figure__media">
</figure>

This is the opposite of _multiply_. The compliment (i.e, “1.0 — the color value”) of the source and the backdrop layers are multiplied, and then its compliment is taken to form the final color of the pixel.

### Overlay

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_overlay.jpg" alt="" class="figure__media">
</figure>

The _overlay_ blend mode applies the _screen_ blend mode to lighter pixels and _multiply_ blend mode to darker pixels. This in effect means that it makes lighter pixels even lighter, and darker pixels even darker.

### Darken

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_darken.jpg" alt="" class="figure__media">
</figure>

This mode applies whichever color tone is darker between the source and the backdrop colors.

### Lighten

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_lighten.jpg" alt="" class="figure__media">
</figure>

This mode is the opposite of _darken_. It applies whichever color tone is lighter between the source and the backdrop colors.

### Color-Dodge

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_colordodge.jpg" alt="" class="figure__media">
</figure>

The _Color-Dodge_ mode brightens the backdrop color, resulting in an image with stark contrast.

### Color-Burn

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_colorburn.jpg" alt="" class="figure__media">
</figure>

This mode darkens the backdrop color, and increases the contrast between the source and the backdrop color.

### Hard-Light

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_hardlight.jpg" alt="" class="figure__media">
</figure>

This is the opposite of _overlay_. It applies _multiply_ on the lighter pixels and _screen_ on the darker ones.

### Soft-Light

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_softlight.jpg" alt="" class="figure__media">
</figure>

This applies _multiply_ on darker values and _screen_ on lighter values. It is similar to _overlay_, but works slightly differently.

### Hue

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_hue.jpg" alt="" class="figure__media">
</figure>

This mode applies the saturation and luminosity of the backdrop color, but with the hue of the source color.

### Saturation

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_saturation.jpg" alt="" class="figure__media">
</figure>

_Saturation_ produces a color with the saturation of the source color, and blends the hue and luminosity of the background color.

### Color

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_color.jpg" alt="" class="figure__media">
</figure>

The _color_ blend mode produces a color with the hue and saturation of the source color, and luminosity of the background color.

###Luminosity

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_luminosity.jpg" alt="" class="figure__media">
</figure>

This produces a color with the luminosity of the source color, and blends the hue and saturation of the background color.

### Difference

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_difference.jpg" alt="" class="figure__media">
</figure>

The _difference_ blend mode subtracts the darker of the two colors from the lighter color, forming a kind of _photo negative_ effect. Black is not affected, white is inverted absolutely, and the rest of colors are affected based on their brightness levels.

### Exclusion

<figure class="figure">
	<img src="{{ page.id }}/images/blendmode_exclusion.jpg" alt="" class="figure__media">
</figure>

The _exclusion_ blend mode produces a lower-contrast version of the effect produced by _difference_ mode.

Some might not find it convenient to remember how each and every blend mode works exactly, so its helpful to group them into a few broad categories according to the general effect that they provide. We can group all these modes into the following:

1. **Darkening**: The _darken_, _multiply_, and _color-burn_ modes would fall into this category. These modes essentially darken the image in their own ways.
2. **Lightening**: The _lighten_, _screen_ and _color-dodge_ modes essentially lighten up the image.
3. **Contrast**: The _overlay_, _soft-light_ and _hard-light_ modes pretty much play up the contrast.
4. **Comparative**: The _difference_ and _exclusion_ modes would fall in this category.
5. **Component**: The _hue_, _saturation_, _color_ and _luminosity_ modes would come under this. The other Blend Modes work on each color channel independently, whereas the modes under this group work by singling out one component from the source layer and blending the other components from the source and background layer.

## Working with `mix-blend-mode`

<figure class="figure">
	<img src="{{ page.id }}/images/mixblend.jpg" alt="" class="figure__media">
</figure>

The `mix-blend-mode` property specifies how the source element will mix colors with the backdrop. The backdrop could be any element underneath the source element (for example a heading could be a source element and its container `<div>` the backdrop.). Using it is as simple as writing something like:

	mix-blend-mode: difference

or

	mix-blend-mode: overlay

and so on. Note that this works with any kind of element. If you apply `mix-blend-mode` to an element, then it will mix its colors with any element which it is overlapping. Check out a page I made which showcases [two images blending with each other]({{ page.id }}/demo_blendmodes_mixblend.html)!

## Using the `isolation` property

If you use `mix-blend-mode` then it will blend the element with all the elements in the backdrop that it overlaps. What if you want a set of elements to blend with each other (say in a container `<div>`) but not with any other elements underneath?

If you can do that by _isolating_ that `<div>` by using the `isolation` property. For example,

	div {
		isolation: isolate;
	}

This creates a new stacking context, and the elements will blend only within that stacking context and not with any others underneath.

[A demo here]({{ page.id }}/demo_blendmodes_tile.html) uses `mix-blend-mode` and the `isolate` property. Here we have applied `isolation` to the `<div>` that contains the picture. If we don’t use the `isolation` property, then it will blend into the layer beneath the picture as well. You can see both effects by checking the checkbox and see how the image is different in both cases.

## Working with `background-blend-mode`

The `background-blend-mode` property specifies how the source element is supposed to mix its color _of its own_ background image and background color. If there are any other layers underneath the element (for example a section element with a blue background color) it will _not_ mix its colors with that element. It will only mix its colors with the background image and colors specified for its own self in the CSS.

An example of its use would be the following:

	background-image: url(images/sample.png);
	background-color: red;
	background-blend-mode: multiply;

If you are using multiple background images, then you can apply multiple background Blend Modes for those respectively. For example:

	background-image: url(images/sample1.png), url(images/sample2.png);
	background-color: blue;
	background-blend-mode: screen, overlay;

In the above example, the image _sample1.png_ will get the _screen_ blend mode applied to it, while _sample2.png_ will get the _overlay_ mode applied to it.

## Using Blend Modes with other technologies

### Gradients

You can also use all these modes in combination with gradients and masks to form interesting effects in your designs. One of the most promising use cases that I foresee for this is the use of radial gradients for images. For example, the following image:

<figure class="figure">
	<img src="{{ page.id }}/images/radialgradient.png" alt="" class="figure__media">
</figure>

You can see a working demonstration of the above effect on the [demo page]({{ page.id }}/demo_blendmodes_gradients.html). All we have done in that demo is to have a transparent-to-black radial gradient (in the case of the linear gradient, its transparent-to-yellow) and on top we have placed the image and applied a _multiply_ blend mode using `mix-blend-mode: multiply`. When the user hovers over the picture, we use `mix-blend-mode: normal` to remove the effect.

### Masks, Animations and Filters
One simple (some would say obvious!) point to remember is that when you are using masking, the mask layer will be the highest layer in the stacking context. This means that you need to make sure that whatever layers you want blended, are visible through the mask.

Blend Modes also work fine with animated elements, though they themselves are not animatable properties. See [this demo]({{ page.id }}/demo_blendmodes_mask.html) where we used Blend Modes with CSS masks and animations. Notice that we’ve applied a separate `mix-blend-mode` to blend the _text_ as well as the image. You can even add CSS filters to blended images to further tweak and optimize your designs.

### Video

Though we’ve focused more on images in this article, but [Blend Modes can also be applied to video]({{ page.id }}/demo_blendmodes_video.html) using `mix-blend-mode`. If you add on top blended images or text, you can create some complex effects or presentations. This further enhances the possibilities you can achieve using these modes.

### Blend Modes in Canvas

Blend Modes are also available in `<canvas>` via the [Canvas 2D Context API](http://www.w3.org/TR/2dcontext2/#compositing). All you need to do is to set the `globalCompositeOperation` property on the `canvas 2d context` to whatever Blend Modes you like.

A lot of times you might want to further control the image by tweaking the opacity, which can be done with the `globalAlpha` property.

For example:

	var canvas = document.querySelector('canvas');
	var context = getContext('2d');
	// Everything drawn on this context will now have
	// a “screen” blend mode applied to it.
	context.globalCompositeOperation = 'screen';
	// Drawn elements will have an alpha channel of 0.7
	context.globalAlpha = 0.7;

I’ve made a couple of small [demos of canvas utilizing Blend Modes]({{ page.id }}/demo_blendmodes_canvas.html) through `globalCompositeOperator` which you can take a look at. You can also take a look at [this writeup by Adobe](https://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/) where they talk more about Blend Modes in canvas.

### Blend Modes in SVG

The specification also allows you to add blends via CSS inside SVG documents.

	<svg xmlns="http://www.w3.org/2000/svg">
		<style>
			rect {
				mix-blend-mode: multiply;
			}
		</style>
		<rect x="10" y="10" width="100" height="100" rx="15" ry="15" fill="#ff0000"/>
		<rect x="40" y="40" width="100" height="100" rx="15" ry="15" fill="green"/>
	</svg>

Of course, in SVG you can also use `feImage` and `feBlend` to add Blend Modes, but most would agree that it’s preferable to add it via CSS as mentioned above, as it is much more convenient.

## Browser Support

Chromium-based browsers have the most support for CSS Blend Modes at the moment (they have support for both `background-blend-mode` as well as `mix-blend-mode`). To enable support for CSS Blend Modes in Opera, type _opera:flags_ in the address bar and enable the option: _Enable experimental Web Platform features_. For Chrome, you need to enable the same option by going to _chrome://flags_.

Firefox right now does not have support for the `isolation` property, but you can still play with the other properties by searching for them in `about:config` and enabling it there. Safari and Internet Explorer do not have support for these properties thus far.

Until browser support has improved, it is advisable to use CSS Blend Modes in production as an enhancement to existing designs and not as a critical part of the design. However, for demonstration purposes, it’s best that you view the linked demos in a browser which has support for both `background-blend-mode` and `mix-blend-mode`. The Adobe Web Platform Team maintains a [page detailing blend mode support for various browsers](http://html.adobe.com/webplatform/graphics/blendmodes/browser-support/) which is quite detailed.

## Feature Detection for Blend Modes

It is important to use Blend Modes using feature detection. You can detect both support for `mix-blend-mode` and `background-blend-mode` using JavaScript like so:

	if ('CSS' in window && 'supports' in window.CSS) {
		var supportsMixBlendMode = window.CSS.supports('mix-blend-mode', 'multiply');
		var supportsBackgroundBlendMode = window.CSS.supports('background-blend-mode', 'multiply');
		var supportsIsolation = window.CSS.supports('isolation', 'isolate');
		…
	}

This will return `true` if it detects support for it, and `false` otherwise.

However, the most robust solution is to use [Modernizr](http://modernizr.com)’s [`testProp()`](http://modernizr.com/docs/#testprop) functionality to test for the feature, like so:

	var mixBlendModeSupport = Modernizr.testProp('mixBlendMode');
	var backgroundBlendModeSupport = Modernizr.testProp('backgroundBlendMode');
	var isolationSupport = Modernizr.testProp('isolation');

It will return `true` if the browser has support for it, and `false` otherwise.

It is also possible to use the `@supports` feature for it, like so:

	@supports(mix-blend-mode: screen) {
		…
	}

If you want to determine support for both `mix-blend-mode` and `background-blend-mode` properties, you could write:

	@supports((mix-blend-mode: screen) and (background-blend-mode: screen)) {
		…
	}

## Conclusion

Blend Modes are great for applying different effects to elements within a web page, a feature that was previously unavailable to us using web technologies. It is an upcoming technology, and, at the time of this writing, browser support is patchy, but it is expected to become much better over time. You can apply some fantastic tweaks and effects with Blend Modes, so in the future you won’t need to start up a photo editor application just to apply nice effects on the graphical elements of your page.

## Useful Links

- The Specification — [CSS Compositing and Blending Level 1](http://dev.w3.org/fxtf/compositing-1/)
- The Adobe Web Platform Team’s [Page for Blending and Compositing](http://html.adobe.com/webplatform/graphics/blendmodes/)
- The Adobe Web Platform Team: [Blending features in Canvas](http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/)
- [The Basics of CSS Blend Modes](http://css-tricks.com/basics-css-blend-modes/)

## Credit:

Image credit: [Ricardo Liberato](https://www.flickr.com/photos/liberato/199164956), [Swaminathan](https://www.flickr.com/photos/araswami/2605623669) and [Phil Roeder](https://www.flickr.com/photos/tabor-roeder/5569818223/).
