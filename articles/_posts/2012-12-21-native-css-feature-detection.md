---
title: Native CSS Feature Detection via the `@supports` Rule
authors:
- chris-mills
intro: 'We have practised feature detection to allow us to provide appropriate code to browsers with differing levels of standards support for a while now, but we’ve always needed 3rd party libraries to handle it. But not for much longer: the CSS3 Conditional Rules Module Level 3 provides the `@supports` at-rule and associated JavaScript API, providing a native mechanism for doing CSS feature detection. In this article we’ll give you the lowdown on how this rule works, looking at a real example in the process.'
license: cc-by-3.0
---
## Introduction

With browsers of varying degrees of standards support still in use for browsing the Web (from decent modern browsers, to old rustbuckets like IE6), we are pretty comfortable with the idea of sending different code to different browsers to provide different-but-still-acceptable user experiences. This is done in a variety of ways, but generally it relies on the rather error-prone browser detection, or the cleverer and more robust feature detection.

Feature detection is normally done by writing your own JavaScript to test if a fundamental property, method, etc. of the feature you are detecting exists or can be used, or by using a 3rd party feature detection library, such as the excellent [Modernizr](http://www.modernizr.com/). Modernizr provides feature tests and mechanisms for selectively applying CSS and JavaScript based on the results of those tests, for a whole host of different HTML5 and CSS3 features.

This is really useful, but many people have asked if we are going to see native mechanisms for doing such feature tests. The good news is that we are already starting to do so! This article looks at the CSS `@supports` rule, part of the [CSS3 Conditional Rules Module Level 3](http://www.w3.org/TR/css3-conditional/#at-supports), which provides a perfect mechanism for selectively applying CSS based on feature support. Here we'll look at basic syntax, along with an applied example.

Note: `@supports` can currently be seen working across Opera 12.10 and Firefox Aurora; browsers that don't support `@supports` will just ignore the code inside those blocks completely. This means that it has some useful applications already, but if it doesn't suit your situation, you can stick to Modernizr for now.

## `@supports` syntax

`@supports` takes the form of an at-rule block, which performs a test and then executes normal CSS rules placed inside the block depending on whether the test returns true or not. In this case, the test is always one or more CSS declarations, and the browser returns true if it supports the indicated declaration(s). For example:

	@supports (display:flex) {
		section { display: flex }
		...
	}

The rules inside this block will be applied if the browser supports `display: flex`.

`@supports` also provides a `not` keyword for applying styles when features are not supported. You could provide some specific alternative styling for browsers that don't support `display:flex` like this:

	@supports not (display: flex) {
		// provide alternative layout
		// with floats perhaps
	}

`@supports` also provides `or` and `and` keywords, for applying styles only if the browser passes two or more specific support tests, or if the browser passes one of a number of different support tests.

For example, Flexbox is only supported without prefixes in Opera (Mobile and Next) and IE10 preview. To test if the browser supports any of the necessary prefixed versions or the non-prefixed version, you could do this:

	@supports (display: -webkit-flex) or
	          (display: -moz-flex) or
	          (display: flex) {
		section {
			display: -webkit-flex;
			display: -moz-flex;
			display: flex;
			/* … */
		}
	}

For an `and` example, you might want to apply a multi-column layout and associated rules only when the unprefixed version of the `column-width` and `column-span` properties are supported, as browsers that support multi-col with prefixes currently don't support `column-span`, which limits its usefulness:

	@supports (column-width: 20rem) and (column-span: all) {
		div { column-width: 20rem }
		div h2 { column-span: all }
		div h2 + p { margin-top: 0; }
		/* … */
	}

The last thing to note about `@supports` syntax is that you are not allowed to mix `and`, `or` and `not` without using a layer of parentheses to make the precedence clear. So for example you might want to apply an animation involving a 3D transform to an element, ONLY if the browser supports both the animation and 3D transform:

	@supports ((-webkit-animation-name: my-animation) and (-webkit-transform: rotate3D(1,2,4,90deg))) or
	          ((-moz-animation-name: my-animation) and (-moz-transform: rotate3D(1,2,4,90deg))) or
	          ((-ms-animation-name: my-animation) and (-ms-transform: rotate3D(1,2,4,90deg))) or
	          ((-o-animation-name: my-animation) and (-o-transform: rotate3D(1,2,4,90deg))) or
	          ((animation-name: my-animation) and (transform: rotate3D(1,2,4,90deg))) {
		/* add your funky animation here! */
	}

## A `@supports` example

To demonstrate a real world usage of `@supports`, I’m going to rewrite an example I first wrote for my book ([Practical CSS3: develop and design](http://www.amazon.com/Practical-CSS3-Develop-Chris-Mills/dp/0321823729)) — a simple 3D rotating card flipper example that uses Modernizr to provide an alternative experience to browsers that don't support 3D transforms (like Opera, at the time of writing; we've got it in the pipeline!) or 2D transforms (I just apply a lot of left padding to the front of the card on hover to show the back.) You can [view the Modernizr card flipper example running live]({{ page.id }}/example-with-modernizr/two-faced-cheek-modernizr.html), and see the difference between the experience for different support levels in Figures 1-3.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/css-supports-rule_3d-transform.jpg" alt="A business card created using CSS3. In browsers that do support 3D transforms the card flips over with a nice animation">
	<figcaption elem="caption">Figure 1: In browsers that do support 3D transforms the card flips over with a nice animation.</figcaption>
</figure>

<figure block="figure">
	<img elem="media" src="{{ page.id }}/css-supports-rule_2d-transform.jpg" alt="A business card created using CSS3. In browsers that don’t support 3D transforms but do support 2D transforms, the front of the card moves over with a nice animation to reveal the back">
	<figcaption elem="caption">Figure 2: In browsers that don’t support 3D transforms but do support 2D transforms, the front of the card moves over with a nice animation to reveal the back.</figcaption>
</figure>

<figure block="figure">
	<img elem="media" src="{{ page.id }}/css-supports-rule_basic-move.jpg" alt="A business card created using CSS3. In browsers that don’t support 3D or 2D transforms the front of the card just moves to show the back with no animation">
	<figcaption elem="caption">Figure 3: In browsers that don’t support 3D or 2D transforms, the front of the card just moves to show the back with no animation.</figcaption>
</figure>

In my Modernizr example, I am working backwards, providing fallback code for browsers that don’t support 3D transforms, then providing a really basic experience for browsers that don't support 2D transforms either. In the @supports example, I work the other way around with more of progressive enhancement approach, first providing a really basic experience to show both sides of the business card that works in pretty much all browsers:

	/* || For browsers that don’t support 2D or 3D transforms */
	#wrapper:hover #inner-wrapper #front, #wrapper:focus #inner-wrapper #front {
		margin-left: -350px;
	}

Older browsers will just get to here, and then ignore everything inside the `@supports` rules.

Then we have a set of rules for browsers supporting 2D transforms:

	/* || For browsers supporting 2D transforms */

	@supports (-webkit-transform: rotate(-30deg)) or
	          (-moz-transform: rotate(-30deg)) or
	          (-ms-transform: rotate(-30deg)) or
	          (-o-transform: rotate(-30deg)) or
	          (transform: rotate(-30deg)) {

		#inner-wrapper #front {
			-webkit-transition: 0.8s all ease-in;
			-moz-transition: 0.8s all ease-in;
			-ms-transition: 0.8s all ease-in;
			-o-transition: 0.8s all ease-in;
			transition: 0.8s all ease-in;
		}

		#wrapper:hover #inner-wrapper #front, #wrapper:focus #inner-wrapper #front {
			margin-left: 0;

			-webkit-transform: rotate(-30deg) translate(-50%,-100%);
			-moz-transform: rotate(-30deg) translate(-50%,-100%);
			-ms-transform: rotate(-30deg) translate(-50%,-100%);
			-o-transform: rotate(-30deg) translate(-50%,-100%);
			transform: rotate(-30deg) translate(-50%,-100%);
		}

	}

…and finally, a set of rules for browsers supporting 3D transforms:

	/* || For browsers supporting 3D transforms */

	@supports (-webkit-transform: rotateX(0deg)) or
	          (-moz-transform: rotateX(0deg)) or
	          (-ms-transform: rotateX(0deg)) or
	          (-o-transform: rotateX(0deg)) or
	          (transform: rotateX(0deg)) {

		#front, #back {
			-webkit-backface-visibility: hidden;
			-moz-backface-visibility: hidden;
			-ms-backface-visibility: hidden;
			-o-backface-visibility: hidden;
			backface-visibility: hidden;
		}

		#front {
			-webkit-transform: rotateX(0deg);
			-moz-transform: rotateX(0deg);
			-ms-transform: rotateX(0deg);
			-o-transform: rotateX(0deg);
			transform: rotateX(0deg);
		}

		#back {
			-webkit-transform: rotateX(180deg);
			-moz-transform: rotateX(180deg);
			-ms-transform: rotateX(180deg);
			-o-transform: rotateX(180deg);
			transform: rotateX(180deg);
		}

		#wrapper:hover #inner-wrapper, #wrapper:focus #inner-wrapper {
			-webkit-transform: rotateX(180deg);
			-moz-transform: rotateX(180deg);
			-ms-transform: rotateX(180deg);
			-o-transform: rotateX(180deg);
			transform: rotateX(180deg);
		}

		#wrapper:hover #inner-wrapper #front, #wrapper:focus #inner-wrapper #front {
			-webkit-transform: none;
			-moz-transform: none;
			-ms-transform: none;
			-o-transform: none;
			transform: none;
		}

	}

[See the `@supports` card flipper example running live.]({{ page.id }}/example-with-supports/two-faced-cheek-supports.html)

## `window.supportsCSS()`

Opera 12.10 is currently the only browser to support `@supports`' corresponding JavaScript API, which allows you to run code conditionally depending on whether the browser supports a given CSS feature. For example, here's my initial simple example rewritten for JavaScript:

	var flexy = window.supportsCSS('display:flex');

	if (flexy) {
		alert('I support Flexbox!');
	}

In the spec, you’ll see that the syntax is listed as `CSS.supports`, not `window.supportsCSS`. This is because we implemented a slightly older version of the spec, plus we were worried about the site compatibility implications of an object called `CSS` in the global namespace. What is eventually settled upon remains to be seen.

## Summary

And so draws to a close our study of `@supports`! This feature is really interesting, as you can be so precise with the feature detection and CSS delivery you are implementing. One problem is of course, the fact that older browsers you will want to deliver alternative styling to won't support `@supports`, but it still has uses now. In any case, we hope the was a useful exploration, and we expect this feature to become a lot more useful in the future. Let us know what you think of the idea, by giving your feedback on the comments of this article, or on [the www-style list](http://lists.w3.org/Archives/Public/www-style/).
