---
title: CSS3 Borders, Backgrounds and Boxes
authors:
- zi-bin-cheah
- vadim-makeev
- david-storey
intro: 'Opera 10.50+ comes with support for the CSS3 Backgrounds and Borders specification. Amongst them are `border-radius`, `border-image`, multiple backgrounds and `box-shadow`. Opera 10.60+ updates this support with `box-decoration-break` and an updated `background` shorthand. We’ll showcase all these and more through examples and explanations.'
tags:
- css3
- border-radius
- box-decoration-break
- box-shadow
- open-web
- opera-11
layout: article
---

## Introduction

In this article, we will showcase some examples made using the new properties in the [W3C’s CSS3 Backgrounds and Borders specification][1]. We recommend using [Opera 11 or later][2] to view these examples in their full glory.

[1]: http://www.w3.org/TR/css3-background/
[2]: http://www.opera.com/browser/

- [`background-clip`](#background-clip)
- [`background-origin`](#background-origin)
- [Multiple background images](#multiple-background)
- [`background-attachment`](#background-attachment)
- [updated `background` shorthand](#background-shorthand)
- [`box-shadow`](#box-shadow)
- [`box-decoration-break`](#box-decoration-break)
- [`border-radius`](#border-radius)
- [`border-image`](#border-image)

## `background-clip`

The first CSS3 property that we’ll introduce is `background-clip`. This property is used to determine whether the background image extends into the border or not.

There are two options, the default `border-box` and `padding-box`. When `border-box` is used, the background image will extend to the border and will therefore show up behind the border, as in Figure 1. The other option is `padding-box` which means the background image won’t stretch to the border. The image will simply appear until the edge of the padding, as shown in Figure 2.

<figure id="figure-1">
	<div id="figure-1-demo" markdown="span">
		`background-clip:border-box`
	</div>
	<style>
		#figure-1-demo {
			margin-right:10px;
			width:145px;
			height:145px;
			border:10px dashed #354658;
			background:#B6B9B9 no-repeat scroll 0 5px;
			background-clip:border-box;
			color:#354658;
			font-weight:bold;
			}
	</style>
	<figcaption markdown="span">Figure 1: `background-clip:border-box`</figcaption>
</figure>

<figure id="figure-2">
	<div id="figure-2-demo" markdown="span">
		`background-clip:padding-box`
	</div>
	<style>
		#figure-2-demo {
			margin-right:10px;
			width:145px;
			height:145px;
			border:10px dashed #354658;
			background:#B6B9B9 no-repeat scroll 0 5px;
			background-clip:padding;
			background-clip:padding-box;
			color:#354658;
			font-weight:bold;
			}
	</style>
	<figcaption markdown="span">Figure 2: `background-clip:padding-box`</figcaption>
</figure>

In essence, `padding-box` clips the background image to the padding box while `border-box` clips the background image to the border. [Screenshots of `background-clip` and `background-origin`][12] show you how it looks if your browser does not support this CSS3 property.

[12]: http://people.opera.com/zibin/background/background_origin_clip.html

Note that Gecko still uses their vendor prefix: `-moz-background-clip`. Gecko is also using the old property value without the `-box` suffix. Therefore, instead of `padding-box`, Gecko uses `padding` for the same effect. These issues have been fixed in the latest nightlies of Firefox but have not yet reached a final release at the time of writing. The latest versions of WebKit now support these properties without the prefix.

## `background-origin`

The `background-origin` property is used to determine how the `background-position` of a background in a certain box is calculated.

When you position a background image, `background-origin` allows you to specify your starting point. The default `padding-box` positions the background image relative to the outer edge of the padding (inner edge of the border), whereas `border-box` positions the background image relative to the outer edge of the border. There is also the value `content-box` which, not surprisingly, positions the background image relative to the outer edge of the content (inner edge of the padding).

For example, a background image positioned 10 pixels from the left and top will show in the following positions using the different values for `background-origin`:

<figure id="figure-3">
	<div id="figure-3-demo" markdown="span">
		`background-origin:border-box`
	</div>
	<style>
		#figure-3-demo {
			margin-right:10px;
			margin-bottom:10px;
			width:125px;
			height:125px;
			border:10px dashed #354658;
			background:#B6B9B9 url(/articles/css3-borders-backgrounds-boxes/opera-logo.png) no-repeat scroll;
			background-origin:border-box;
			color:#354658;
			font-weight:bold;
			}
	</style>
	<figcaption markdown="span">Figure 3: `background-origin:border-box`</figcaption>
</figure>

<figure id="figure-4">
	<div id="figure-4-demo" markdown="span">
		`background-origin:padding-box`
	</div>
	<style>
		#figure-4-demo {
			margin-right:10px;
			margin-bottom:10px;
			width:125px;
			height:125px;
			border:10px dashed #354658;
			background:#B6B9B9 url(/articles/css3-borders-backgrounds-boxes/opera-logo.png) no-repeat scroll;
			background-origin:padding-box;
			color:#354658;
			font-weight:bold;
			}
	</style>
	<figcaption markdown="span">Figure 4: `background-origin:padding-box`</figcaption>
</figure>

<figure id="figure-5">
	<div id="figure-5-demo" markdown="span">
		`background-clip:padding-box` and `background-origin:border-box`
	</div>
	<style>
		#figure-5-demo {
			margin-right:10px;
			margin-bottom:10px;
			width:125px;
			height:125px;
			border:10px dashed #354658;
			background:#B6B9B9 url(/articles/css3-borders-backgrounds-boxes/opera-logo.png) no-repeat 10px 10px scroll;
			background-clip:padding-box;
			background-origin:border-box;
			color:#354658;
			font-weight:bold;
			}
	</style>
	<figcaption markdown="span">Figure 5: `background-clip:padding-box` and `background-origin:border-box`</figcaption>
</figure>

<figure id="figure-6">
	<div id="figure-6-demo" markdown="span">
		`background-clip:padding-box` and `background-origin:padding-box`
	</div>
	<style>
		#figure-6-demo {
			margin-right:10px;
			margin-bottom:10px;
			width:125px;
			height:125px;
			border:10px dashed #354658;
			background:#B6B9B9 url(/articles/css3-borders-backgrounds-boxes/opera-logo.png) no-repeat 10px 10px scroll;
			background-clip:padding-box;
			background-origin:padding-box;
			color:#354658;
			font-weight:bold;
			}
	</style>
	<figcaption markdown="span">Figure 6: `background-clip:padding-box` and `background-origin:padding-box`</figcaption>
</figure>

If your browser does not support this feature yet, you can take a look at the [`background-clip` and `background-origin` screenshots][13].

[13]: http://people.opera.com/zibin/background/background_origin_clip.html

Daniel Davis has another [example and explanation of CSS3 `background-clip` and `background-origin`][14].

[14]: http://people.opera.com/danield/examples/bg-clip.html

Similar to `background-clip`, Gecko still uses its prefix for `background-origin`. Gecko is also using the old property value without the `-box` suffix. Instead of `padding-box`, Gecko uses `padding` for the same effect. These issues have been fixed in the latest nightlies of Firefox but have not yet reached a final release at the time of writing.

## Multiple background images

CSS3 allows multiple backgrounds on a single element. This is done by defining multiple background images. You can achieve the effect using either the `background-image` or shorthand `background` properties.

### Example 1

In the first example, we show you how to merge three background images into one using the `background` property.

<figure id="figure-7">
	<img src="/articles/css3-borders-backgrounds-boxes/driedrose.png" alt="Dried rose">
	<img src="/articles/css3-borders-backgrounds-boxes/rose.png" alt="Rose">
	<img src="/articles/css3-borders-backgrounds-boxes/fieldsky.jpg" alt="Field and sky scenery">
	<figcaption>Figure 7: Three individual background images</figcaption>
</figure>

By defining the background images in order, they overlap each other. The [W3C spec says][18]:

[18]: http://www.w3.org/TR/css3-background/#layering

> The first image in the list is the layer closest to the user, the next one is painted behind the first, and so on. The background color, if present, is painted below all of the other layers. Note that the `border-image` properties can also define a background image, which, if present, is painted on top of the background created by the background properties.

You can view the [multiple background image example here][19]. The results can be seen in figure 8.

[19]: http://people.opera.com/zibin/background/multiple_background_image.html

<figure id="figure-8">
	<img src="/articles/css3-borders-backgrounds-boxes/multiple-background.jpg">
	<figcaption>Figure 8: Screenshot of a combined background image using multiple background images</figcaption>
</figure>

	background:
		url(rose.png) no-repeat 150px -20px,
		url(driedrose.png) no-repeat,
		url(fieldsky.jpg) no-repeat;

### Example 2

Alternatively, you can use the `background-image` property to create a background with multiple images.

In this second example we show you how to create the [sliding doors technique][21] using only `background-image`. This time there’s no need for extra nested blocks. Together with `background-repeat` and `background-position`, Patrick Lauke shows us how [sliding door buttons are created using multiple background images][22].

[21]: http://www.alistapart.com/articles/slidingdoors/
[22]: http://people.opera.com/patrickl/experiments/css3/sliding-doors/

<figure id="figure-9">
	<img src="/articles/css3-borders-backgrounds-boxes/multiple-background-slidingdoor.png">
	<figcaption>Figure 9: Screenshot of the sliding doors technique using multiple background images</figcaption>
</figure>

	background-image:url(left.png), url(right.png), url(main.png);
	background-repeat:no-repeat, no-repeat, repeat-x;
	background-position:left top, right top, left top;

## `background-attachment`

The `background-attachment` property determines if a background image is fixed or scrolls with the rest of the page. It happens when we define how a background image is attached to a viewport. Background images can be `fixed` to a viewport or can `scroll` along with the element or with its contents via `local`.

See [Vadim Makeev’s `background-attachment` demo][24]. He has created three sections to demonstrate how `fixed`, `scroll` and `local` are affected when we scroll the viewport and the full document.

[24]: http://people.opera.com/pepelsbey/experiments/bga/

<figure id="figure-10">
	<img src="/articles/css3-borders-backgrounds-boxes/background-attachment.png">
	<figcaption markdown="span">Figure 10: Screenshot of our `background-attachment` example</figcaption>
</figure>

The `local` value for `background-attachment` is new in the [W3C’s CSS3 border and background specification][26]. At the time of writing, it is not yet supported in public releases of Firefox.

[26]: http://www.w3.org/TR/css3-background/

## Updated `background` shorthand

Starting with Opera 11, it is possible to specify the new CSS3 background properties in the `background` shorthand. This includes `background-size`, `background-clip` and `background-origin`.

There are a few things to be aware of when using the new background shorthand. If only one [box value][27] is specified both `background-clip` and `background-origin` are set to this value. If two are specified then the first is used for the origin and the second is used for the clip. As both `background-position` and `background-size` accept length and percentage values, a forward slash `/` needs to be present before the first `background-size` value. Finally, if specifying multiple background images, only the final image can specify a `background-color`.

[27]: http://www.w3.org/TR/2010/WD-css3-background-20100612/#ltboxgt

In the following demo the `background` shorthand has been used to specify three images to illustrate the CSS box model. All values have been specified, even if they are the same as the default, to show how they can be defined. Each image has a different `background-origin` to place the image in the border box, padding box and content box respectively.

<figure id="figure-11">
	<img src="/articles/css3-borders-backgrounds-boxes/background-screenshot.png">
	<figcaption markdown="span">Figure 11: Screenshot of the box model example created using the `background` shorthand, including various CSS3 properties</figcaption>
</figure>

See the [background shorthand demo][29] in action.

[29]: /articles/css3-borders-backgrounds-boxes/background-shorthand/

The `background` shorthand used is as follows:

	background:
		url(content.svgz) no-repeat left top / 200px 70px scroll content-box content-box,
		url(padding.svgz) no-repeat left top / 240px 110px scroll padding-box padding-box,
		url(border.svgz) no-repeat left top / 280px 150px scroll border-box border-box white;

## `box-shadow`

Box shadow allows shadow effects on elements. This property takes several values:

- The first value indicates the horizontal offset of the shadow. You can use a negative value to put the shadow to the left of your box.
- The second value indicates the vertical offset. You can use a negative value to put the shadow above your box
- The third value is the blur radius. The bigger the value, the more blurred it is.

Additionally, you can give the shadow `color`, `spread` and `offset` values. Let’s look at some examples:

<figure id="figure-12">
	<div id="figure-12-demo"></div>
	<style>
		#figure-12-demo {
			margin:7px;
			padding:15px;
			box-shadow:10px 10px 20px #000;
			border:3px solid #ffffff;
			background-color:#ccc;
			color:#ffffff;
			}
	</style>
	<figcaption markdown="span">Figure 12: `box-shadow:10px 10px 20px #000`</figcaption>
</figure>

<figure id="figure-13">
	<div id="figure-13-demo"></div>
	<style>
		#figure-13-demo {
			margin:7px;
			padding:15px;
			box-shadow:10px 10px 1px #000;
			border:3px solid #ffffff;
			background-color:#ccc;
			color:#ffffff;
			}
	</style>
	<figcaption markdown="span">Figure 13: blur radius is set to just 1 pixel</figcaption>
</figure>

	box-shadow:10px 10px 1px #000;

<figure id="figure-14">
	<div id="figure-14-demo"></div>
	<style>
		#figure-14-demo {
			margin:7px;
			padding:15px;
			box-shadow:10px 10px 20px #FE2E2E;
			border:3px solid #FFFFFF;
			border-radius:20px;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 14: sexied up with pink</figcaption>
</figure>

	box-shadow:10px 10px 20px #FE2E2E;
	border-radius:20px;

<figure id="figure-15">
	<div id="figure-15-demo"></div>
	<style>
		#figure-15-demo {
			margin:7px;
			padding:15px;
			box-shadow:20px 20px 10px 10px #888;
			border:3px solid #FFFFFF;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 15: the spread value set to 10 pixels making the shadow bigger</figcaption>
</figure>

	box-shadow:20px 20px 10px 10px;

<figure id="figure-16">
	<div id="figure-16-demo"></div>
	<style>
		#figure-16-demo {
			margin:7px;
			padding:15px;
			box-shadow:-10px -10px 20px inset;
			border:3px solid #FFFFFF;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 16: the inset value creates an inner shadow</figcaption>
</figure>

	box-shadow:-10px -10px 20px inset;

To check whether you’re looking at the correct `box-shadow` implementation, please see the [CSS3 `box-shadow` screenshots and example here][30].

[30]: http://people.opera.com/zibin/background/box_shadow.html

### Example

If you like a kick in your tea, add some `box-shadow`, [transforms, transitions][31], [RGBa][32], query selectors and `:lang()`. Enjoy the steaming hot [CSS3 `box-shadow` effects by Vadim Makeev][33].

[31]: http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/
[32]: http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/
[33]: http://people.opera.com/pepelsbey/experiments/bsh/

<figure id="figure-17">
	<img src="/articles/css3-borders-backgrounds-boxes/box-shadow-tea.png">
	<figcaption markdown="span">Figure 17: Teacup using `box-shadow` and other CSS3 effects</figcaption>
</figure>

The `box-shadow` property only works on Gecko and WebKit with a `-moz-` and `-webkit-` prefix, respectively.

## `box-decoration-break`

When laying out content in CSS, boxes can be broken into two or more pieces in a number of ways; in paged media such a print content is broken into page boxes when an element flows onto another page, when using CSS [Multi-column layout][35] a box is broken when flowing from one column to the next, and for inline elements an inline box is broken into line boxes when flowing from one line to the next.

[35]: http://www.w3.org/TR/css3-multicol/

The [`box-decoration-break` property][36] allows you to define how these boxes behave. The `slice` value is the default value and behaves as if you do not not specify the property or it is not supported. Properties such as `border-radius`, `box-shadow`, `border` and `padding` are not applied where the box breaks. The edge will be straight as if there was no special decoration, almost as if you cut the box cleanly into pieces, and places the pieces in position, such as the next line, page or column. See figure 13 for a visual demonstration of inline blocks with `box-decoration-break:slice` applied.

[36]: http://www.w3.org/TR/css3-background/#the-box-decoration-break

<figure id="figure-18">
	<img src="/articles/css3-borders-backgrounds-boxes/box-decoration-slice.png">
	<figcaption markdown="span">Figure 18: A screenshot showing `box-decoration-break:slice` applied to inline elements. This is default behaviour</figcaption>
</figure>

The `clone` value applies the `padding`, `border`, `border-radius`, `-o-border-image` and `box-shadow` to each box independently. This means that where the box breaks, such as at the start and end of a line, the `border`, `border-radius` and so on will be drawn, so that it looks like each box is its own element. If a background image is applied and set to `no-repeat`, it will be drawn once for each box See figure 14 for a visual demonstration of inline blocks with `box-decoration-break:clone` applied.

<figure id="figure-19">
	<img src="/articles/css3-borders-backgrounds-boxes/box-decoration-clone.png">
	<figcaption markdown="span">Figure 19: A screenshot showing `box-decoration-break:clone` applied to inline elements. Note how the `border-radius` and `box-shadow` is applied at the end and start of the line</figcaption>
</figure>

Check out the [box-decoration-break demo][39] in Opera 10.60 or above to see this in action.

[39]: /articles/css3-borders-backgrounds-boxes/box-decoration-break/

## `border-radius`

The highly-awaited `border-radius` has arrived! We can now create rounded corners for our elements, just like the ones below.

`border-radius` is the shorthand for:

- `border-top-left-radius`
- `border-bottom-left-radius`
- `border-top-right-radius`
- `border-bottom-right-radius`

Let’s dive into some examples.

<figure id="figure-20">
	<div id="figure-20-demo">Four rounded corners</div>
	<style>
		#figure-20-demo {
			margin:7px;
			padding:15px;
			border:3px solid #FFFFFF;
			border-radius:25px;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 20: Four rounded corners</figcaption>
</figure>

	border-radius:25px;

<figure id="figure-21">
	<div id="figure-21-demo">Two rounded corners</div>
	<style>
		#figure-21-demo {
			margin:7px;
			padding:15px;
			border:3px solid #FFFFFF;
			border-bottom-left-radius:40px;
			border-bottom-right-radius:40px;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 21: Two rounded corners</figcaption>
</figure>

	border-bottom-left-radius:40px;
	border-bottom-right-radius:40px;

<figure id="figure-22">
	<div id="figure-22-demo">Four rounded corners</div>
	<style>
		#figure-22-demo {
			margin:7px;
			padding:15px;
			border:3px solid #FFFFFF;
			border-bottom-left-radius:40px;
			border-bottom-right-radius:40px;
			border-top-left-radius:10px;
			border-top-right-radius:10px;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 22: Four rounded corners, the bottom corners with a 40 pixel radius and the top corners with a 10 pixel radius</figcaption>
</figure>

	border-bottom-left-radius:40px;
	border-bottom-right-radius:40px;
	border-top-left-radius:10px;
	border-top-right-radius:10px;

<figure id="figure-23">
	<div id="figure-23-demo">One rounded corner</div>
	<style>
		#figure-23-demo {
			margin:7px;
			padding:15px;
			border:3px solid #FFFFFF;
			border-bottom-right-radius:120px;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 23: One rounded corner with a radius of 120 pixels</figcaption>
</figure>

	border-bottom-right-radius:120px;

<figure id="figure-24">
	<div id="figure-24-demo">Four rounded corners</div>
	<style>
		#figure-24-demo {
			margin:7px;
			padding:15px;
			border:3px solid #FFFFFF;
			border-radius:120px 20px;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 24: Four rounded corners, two with a radius of 20 pixels and the other two with a radius of 120 pixels</figcaption>
</figure>

	border-radius:120px 20px;

<figure id="figure-25">
	<div id="figure-25-demo">Rounded corners</div>
	<style>
		#figure-25-demo {
			margin:7px;
			padding:15px;
			border:3px solid #FFFFFF;
			border-radius:120px / 20px;
			background-color:#CCC;
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 25: Rounded corners with a radius of 120 pixels along the X-axis and 20 pixels along the Y-axis</figcaption>
</figure>

	border-radius:120px / 20px;

<figure id="figure-26">
	<div id="figure-26-demo">Rounded corners</div>
	<style>
		#figure-26-demo {
			margin:7px;
			padding:15px;
			border:3px solid #FFFFFF;
			border-radius:30px;
			background-color:#CCC;
			background:url(/articles/css3-borders-backgrounds-boxes/japanese-tile.jpg);
			color:#FFFFFF;
			}
	</style>
	<figcaption markdown="span">Figure 26: Rounded corners with a background image</figcaption>
</figure>

	border-radius:30px;
	background:url(japanese-tile.jpg);

To check whether your browser supports `border-radius` correctly you can compare the original [`border-radius` example][40] with the [`border-radius` screenshots][41]. Patrick Lauke and Vadim Makeev have created a [`border-radius` picker][42] that helps you to generate a one-liner `border-radius` code.

[40]: http://people.opera.com/zibin/background/border_radius.html
[41]: http://people.opera.com/zibin/background/border_radius_screenshot.html
[42]: http://people.opera.com/pepelsbey/experiments/bdr/

Gecko still uses the `border-radius` properties with the `-moz-` prefix. Gecko also has an alternative syntax for non-shorthand values. These issues have been fixed in the latest nightlies of Firefox but have not yet reached a final release at the time of writing.

## `-o-border-image`

Using the `-o-border-image` property, you can use an image to act as an element’s border. Images can be set to `stretch`, `repeat` or `round`.

<figure id="figure-27">
	<div id="figure-27-demo">Border Image</div>
	<style>
		#figure-27-demo {
			padding:20px;
			border:10px;
			background:#0E0E0E;
			-o-border-image:url(/articles/css3-borders-backgrounds-boxes/molecule.png) 50 repeat;
			border-image:url(/articles/css3-borders-backgrounds-boxes/molecule.png) 50 repeat;
			}
	</style>
	<figcaption markdown="span">Figure 27: Border Image with `repeat`</figcaption>
</figure>

	border-image:url(molecule.png) 50 stretch;

<figure id="figure-28">
	<div id="figure-28-demo">Border Image</div>
	<style>
		#figure-28-demo {
			padding:20px;
			border:10px;
			background:#0E0E0E;
			-o-border-image:url(/articles/css3-borders-backgrounds-boxes/molecule.png) 50 stretch;
			border-image:url(/articles/css3-borders-backgrounds-boxes/molecule.png) 50 stretch;
			}
	</style>
	<figcaption markdown="span">Figure 28: Border Image `stretch`</figcaption>
</figure>

	-o-border-image:url(molecule.png) 50 stretch;

The `stretch` and `repeat` values are fairly self-explanatory. The `round` value still repeats the image but compresses the image to fit the element width without showing only parts of the image itself. See Vadim Makeev’s [animated showcase of CSS3’s `border-image`][43] to get an idea of how the effect works. Screenshots are shown below.

[43]: http://people.opera.com/pepelsbey/experiments/bdi/

<figure id="figure-29">
	<img src="/articles/css3-borders-backgrounds-boxes/border-image-stretch.png">
	<figcaption markdown="span">Figure 29: `-o-border-image:stretch` screenshot</figcaption>
</figure>

<figure id="figure-30">
	<img src="/articles/css3-borders-backgrounds-boxes/border-image-repeat.png">
	<figcaption markdown="span">Figure 30: `-o-border-image:repeat` screenshot</figcaption>
</figure>

Opera 11.50 requires the `-o-` prefix for `border-image`. While the CSS3 Backgrounds and Borders module is fairly stable, the `border-image` spec has changed substantially since we implemented it (including becoming a short hand for a number of individual `border-image` properties). As such we introduced the vendor prefix until the implementation matches the new spec. It is no longer supported prefixless at the time of writing. WebKit and Gecko also currently require their respective prefix.

## Conclusion

We hope you enjoyed reading and trying out these new CSS3 implementations. They run in Opera 11+, and other standards-aware browsers.

Credit goes to Daniel Davis and Patrick Lauke for their wonderful demos, and David Storey for his suggestions, ideas, and updating this article for the new features found in Opera 11.

## Read more

- [Beautiful UI styling with CSS3 text-shadow, box-shadow, and border-radius][46]
- [CSS3 transitions and 2D transforms][47]

[46]: /articles/beautiful-ui-styling-with-css3-text-shadow-box-shadow-and-border-radius/
[47]: /articles/css3-transitions-and-2d-transforms/
