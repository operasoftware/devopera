---
title: Everything You Need to Know About the CSS `will-change` Property
authors:
- sara-soueidan
intro: 'CSS `will-change` is a new property that allows you to let a browser know ahead of time that an element may change, so that it can make any preparatory optimisations. Sara Soueidan shows you how to put an end to cargo-cult hacks, and speed up your animations.'
tags:
- css
- javascript
license: cc-by-3.0
layout: article
---

## Introduction

If you’ve ever noticed “that flicker” in WebKit-based browsers while performing certain CSS operations, especially CSS transforms and animations, then you’ve most likely come across the term “hardware acceleration” before.

## The CPU, GPU, and Hardware Acceleration

In a nutshell, *Hardware Acceleration* means that the **Graphics Processing Unit** (GPU) will assist your browser in rendering a page by doing some of the heavy lifting, instead of throwing it all onto the **Central Processing Unit** (CPU) to do. When a CSS operation is hardware-accelerated, it usually gets a speed boost as the page rendering gets faster.

As their names show, both the CPU and the GPU are processing units. The CPU is located on the computer’s motherboard; it processes almost everything and is known as the brain of the computer. The GPU is located on the graphics card of the computer, and is responsible for processing and rendering graphics. Moreover, a GPU is designed specifically for performing the complex mathematical and geometric calculations that are necessary for graphics rendering. Hence, offloading operations onto the GPU can yield massive performance gains and can also reduce CPU contention on mobile devices.

Hardware acceleration (a.k.a. GPU acceleration) relies on a *layering model* used by the browser as it renders a page. When certain operations (such as 3D transforms) are performed on an element on a page, that element is moved to its own “layer”, where it can render independently from the rest of the page and be *composited in* (drawn onto the screen) later. This isolates the rendering of the content so that the rest of the page doesn’t have to be rerendered if the element’s transform is the only thing that changes between frames, and often provides significant speed benefits. It is worth mentioning here that only 3D transforms qualify for their own layer; 2D transforms don’t.

CSS animations, transforms and transitions are not automatically GPU accelerated, and instead execute from the browser’s slower software rendering engine. However, some browsers provide [hardware acceleration by means of certain properties](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) to provide better rendering performance. For example, the `opacity` property is one of the few CSS properties that can be properly accelerated because the GPU can manipulate it easily. Basically, any layer where you want to fade the opacity over a CSS transition or animation, the browser is actually smart enough to throw it onto the GPU and do the manipulation over there and it’s going to be very fast. Of all CSS things, opacity is one of the most performant and you’re not going to have problems using it. Other common hardware-accelerated operations are CSS 3D transforms.

## The Old: The `translateZ()` (or `translate3d()`) Hack

For quite some time now, we’ve been using what has been known as the `translateZ()` (or `translate3d()`) hack (sometimes also called the null transform hack) to **trick the browser** into pushing our animations and transforms into hardware acceleration. We’ve been doing that by adding a simple 3D transformation to an element that will *not* be transforming in three-dimensional space. For example, an element that’s animated in two-dimensional space can be hardware-accelerated by adding this simple rule to it:

	transform: translate3d(0, 0, 0);

Hardware-accelerating an operation results in the creation of what is known as a compositor layer that is uploaded to and composited by the GPU. However, force-hacking layer creation may not always be the solution to certain performance bottlenecks on a page. Layer creation techniques can boost page speed, but they come with a cost: they take up memory in system RAM and on the GPU (particularly limited on mobile devices) and having lots of them can have a bad impact (especially on mobile devices), so they must be used wisely and you need to make sure that hardware-accelerating your operation will really help the performance of your page, and that a performance bootleneck is not being caused by another operation on your page.

In order to avoid layer-creation hacks, a new CSS property has been introduced, that allows us to inform the browser ahead of time of what kinds of changes we are likely to make to an element, thus allowing it to optimize how it handles the element ahead of time, performing potentially-expensive work preparing for an operation such as an animation, for example, before the animation actually begins. This property is the new `will-change` property.

## The New: The Glorious `will-change` Property

The `will-change` property allows you to inform the browser ahead of time of what kinds of changes you are likely to make to an element, so that it can set up the appropriate optimizations before they’re needed, therefore avoiding a non-trivial start-up cost which can have a negative effect on the responsiveness of a page. The elements can be changed and rendered faster, and the page will be able to update snappily, resulting in a smoother experience.

For example, when using CSS 3D Transforms on an element, the element and its contents might be promoted to a layer, as we mentioned earlier, before they are composited in (drawn onto the screen) later. However, setting up the element in a fresh layer is a relatively expensive operation, which can delay the start of a transform animation by a noticeable fraction of a second, causing that noticable “flicker”.

In order to avoid this delay, you can inform the browser about the changes some time *before* they actually happen. That way, it will have some time to prepare for these changes, so that when these changes occur, the element’s layer will be ready and the transform animation can be performed and then the element can be rendered and the page updated in quickly.

Using `will-change`, hinting to the browser about an upcoming transformation can be as simple as adding this rule to the element that you’re expecting to be transformed:

	will-change: transform;

You can also declare to the browser your intention to change an element’s scroll position (the element’s position in the visible scroll window and how much of it is visible within that window), its contents, or one or more of its CSS property values by specifying the name of the properties you’re expecting to change. If you expect or plan to change mutliple values/aspects of an element, you can provide a list of comma-separated values. For example, if you’re expecting the element to be animated and moved (its position changed), you can declare that to the browser like so:

	will-change: transform, opacity;

Specifying what exactly you want to change allows the browser to make better decisions about the optimizations that it needs to make for these particular changes. This is obviously a better way to achieve a speed boost without resorting to hacks and forcing the browser into layer creations that may or may not be necessary or useful.

### Does `will-change` affect the element it is applied to beyond hinting the browser about the changes to that element?

The answer is yes and no—it depends on the properties that you’re specifying and informing the browser about. If any non-initial value of a property would create a [stacking](http://reference.sitepoint.com/css/stacking) [context](http://www.w3.org/TR/CSS2/zindex.html) on the element, specifying that property in `will-change` will create a stacking context on the element.

For example, the `clip-path` property and the `opacity` property both lead to the creation of a stacking context on the element they are applied to, when they are used with values other than their initial values. Hence, using one of (or both of) these properties as values for `will-change` will create a stacking context on the element, **even before the change actually happens**. The same applies to other properties that would create a stacking context on an element.

Also, some properties can lead to the creation of a **containing block** for fixed-position elements. For example, a [transformed element creates a containing block for all its positioned descendants](http://meyerweb.com/eric/thoughts/2011/09/12/un-fixing-fixed-elements-with-css-transforms/), even those that have been set to `position: fixed`. So, if a property leads to the creation of a containing block, then specifying it as a value for `will-change` will also lead to the generation of a containing block for fixed-position elements.

Other than that, the `will-change` property has no direct effect on the element it is applied to—it is merely a rendering hint to the browser allowing it to set up optimizations for the changes that will occur to that element. It has no direct effect on an element beyond the creation of stacking contexts and containing blocks in the situations mentioned above.

## Using `will-change`: The Do’s and The Don’ts

Knowing what `will-change` does, it can be very tempting to think: “Just have the browser optimize EVERYTHING!”. I mean it makes sense, right? Who wouldn’t want all of their changes to be optimized for and ready to roll on demand?

As powerful and great as `will-change` is, it’s not any different from any other kind of power, so, as with other sources of power, there comes responsibility. `will-change` should be used wisely, otherwise it will end up resulting in performance hits that could actually crash your page.

As with any performance hints, `will-change` has its side effects that aren’t directly detectable (after all, it is just a way to talk to the browser behind the scenes), so it may be tricky to use. Here are some things to keep in mind when you use this property, to make sure you get the best out of it while avoiding the harm that can come from misusing it.

### Don’t Use `will-change` to Declare Changes to Too Many Properties or Elements

As I mentioned earlier, it might be very tempting to just tell the browser to optimize for changes that may occur to *all* properties on *all* elements; so adding the following rule to our style sheet might make some sense at first:

	*,
	*::before,
	*::after {
		will-change: all;
	}

As good as this looks (I know it looked good and made sense to me at first), this is in fact very harmful, and more so invalid. Not only is the all keyword an invalid value for `will-change` (we’ll cover the list of valid and invalid values later in the article), but such a blanket rule wouldn’t be useful. You see, the browser **does already try to optimize for everything** as much as it can (remember `opacity` and 3D transforms?), so explicitly telling it to do that doesn’t really change anything or help in any way. As a matter of fact, doing this has the capacity to do a lot of harm, because some of the stronger optimizations that are likely to be tied to `will-change` end up using a lot of a machine’s resources, and when overused like this can cause the page to slow down or even crash.

In other words, putting the browser on guard for changes that may or may not occur is a bad idea, and will do more harm that good. **Don’t do it.**

### Give the Browser Enough Time to Work

The `will-change` property is named like that for an obvious reason: informing the browser about changes that **will** occur, not changes that **are** occuring. Using `will-change`, we’re asking the browser to make certain optimizations for the changes we’re declaring, and in order for that to happen, the browser needs some time to actually make these optimizations, so that when the changes occur, the optimizations can be applied without any delays.

Setting `will-change` on an element immediately before it changes has little to no effect. (It might actually be worse than not setting it at all. You could incur the cost of a new layer when what you’re animating wouldn’t have previously qualified for a new layer!) For example, if a change is going to happen on hover, then this:

	.element:hover {
		will-change: transform;
		transition: transform 2s;
		transform: rotate(30deg) scale(1.5);
	}

…tells the browser to make optimizations for a change that is already taking place, and that’s useless and kind of negates the whole concept behind `will-change`. Instead, you should find a way to to predict at least slightly ahead of time that something will change, and set `will-change` *then*.

For example, if an element will change when it is clicked, then setting up `will-change` when that element is hovered gives the browser enough time to optimize for that change. The time between hovering the element and actually clicking it by the user is enough for the browser to set up the optimizations, because human reaction time is relatively slow, so this will give the browser around 200ms time window before the change actually happens, and this is enough for it to set up the optimizations.

	.element {
		/* style rules */
		transition: transform 1s ease-out;
	}
	.element:hover {
		will-change: transform;
	}
	.element:active {
		transform: rotateY(180deg);
	}

But what if you expect the change to happen **on hover**, not on click? The above declaration will be useless as we mentioned. In this case, it is often still possible to find *some* way to predict the action before it occurs. For example, hovering an ancestor of the changing element may give enough lead time:

	.element {
		transition: opacity .3s linear;
	}
	/* declare changes on the element when the mouse enters / hovers its ancestor */
	.ancestor:hover .element {
		will-change: opacity;
	}
	/* apply change when element is hovered */
	.element:hover {
		opacity: .5;
	}

However, hovering the ancestor does not always indicate that the element will be interacted with for sure, so you could do something like set `will-change` when a view becomes active in your application, or if the element is within the visible part of the viewport, which increases the chances of the element being interacted with.

### Remove `will-change` After the Changes Are Done

The optimizations that the browser makes for changes that are about to occur are usually costly and, as we mentioned earlier, can take up much of the machine’s resources. The usual browser behavior for optimizations that it makes is to remove these optimzations and revert back to normal behavior as soon as it can. However, `will-change` **overrides this behavior** maintaining the optimizations for much longer than the browser would otherwise do.

As such, you should always remember to *remove* `will-change` after the element is done changing, so the browser can recover whatever resources the optimizations are claiming.

It’s not possible to remove `will-change` if it is declared in the style sheet, which is why it is almost always recommended that you set and unset it using JavaScript. By scripting, you can declare your changes to the browser, and then remove `will-change` after the changes are done, by listening to when these changes have finished. For example, just like we did in the style rules in the previous section, you could listen for when the element (or its ancestor) is hovered, and then set `will-change` on `mouseenter`. If your element is being animated, you can listen for when the animation has ended using the DOM event `animationEnd`, and then remove `will-change` once `animationEnd` is fired.

	// Rough generic example
	// Get the element that is going to be animated on click, for example
	var el = document.getElementById('element');

	// Set will-change when the element is hovered
	el.addEventListener('mouseenter', hintBrowser);
	el.addEventListener('animationEnd', removeHint);

	function hintBrowser() {
		// The optimizable properties that are going to change
		// in the animation's keyframes block
		this.style.willChange = 'transform, opacity';
	}

	function removeHint() {
		this.style.willChange = 'auto';
	}

Craig Buckler has written [an article](http://www.sitepoint.com/css3-animation-javascript-event-handlers/) about capturing CSS animation events in JavaScript that you should check out if you’re not familiar with this. There’s also an article about [controlling CSS animations and transitions](http://css-tricks.com/controlling-css-animations-transitions-javascript/) on CSS-Tricks that’s also worth checking out.

### Use `will-change` Sparingly in Style Sheets

As we’ve seen in the previous section, `will-change` can be used to hint the browser about changes that are just about to occur to an element within a few milliseconds. This is one of the use cases where declaring `will-change` in a style sheet is okay. Although it’s recommended to set and unset `will-change` using JavaScript, there are some situations where setting it in the style sheet (and keeping it) is appropriate.

One example is setting `will-change` on a small number of elements that are likely to be interacted with by the user over and over again, and that should respond to the user’s interaction in a snappy manner. The limited number of elements means that the optimizations made by the browser won’t be overused and therefore won’t hurt as much. For example, transforming a sidebar by sliding it out when the user requests it. The following rule would be appropriate:

	.sidebar {
		will-change: transform;
	}

Another example is using `will-change` on an element that changes nearly constantly, like an element that responds to the user’s mouse movement and is moved around the screen as the mouse moves. In this case, just declaring the will-change value in the stylesheet is fine, as it accurately describes that the element will regularly/constantly change, and so should be kept optimized.

	.annoying-element-stuck-to-the-mouse-cursor {
		will-change: left, top;
	}

### `will-change` Property Values

The `will-change` property takes one of four possible values: `auto`, `scroll-position`, `contents`, and `<custom-ident>`.

The `<custom-ident>` value is used to specify the name(s) of one or more properties that you expect to change. Multiple properties are comma-separated. The following are examples of valid `will-change` declarations with specified property names:

	will-change: transform;
	will-change: opacity;
	will-change: top, left, bottom, right;

The `<custom-ident>` value excludes the keywords `will-change`, `none`, `all`, `auto`, `scroll-position`, and `contents`, in addition to the keywords normally excluded from [`<custom-ident>`](http://dev.w3.org/csswg/css-values-3/#identifier-value). So, as we mentioned in the beginning of the article, the `will-change: all` declaration is invalid and will thus be ignored by the browser.

The value `auto` indicates no particular intent, meaning that the browser will not set up any special optimizations other than the ones it normally does.

The `scroll-position` value indicates, as the name suggests, that you expect to change an element’s scroll position any time in the near future. This value is useful because, when used, the browser will prepare for and render content beyond that which is visible in the scroll window on a scrollable element. Browsers often only render the content *in* the scroll window, and some of the content past that window, balancing memory and time savings from the skipped rendering against making scrolling look nice. Using `will-change: scroll-position`, it can make further rendering optimizations so that longer and/or faster content scrolls can be done smoothly.

The `contents` value indicates that the element’s content is expected to change. Browsers usually “cache” rendering of elements over time, because most things don’t change very often, or only change their position. This value will be read by the browser as a signal to do less caching on the element, or avoid caching on the element altogether, because if the element’s content is regularly changing, then keeping a cache of the content will be useless and a waste of time, so the browser will just stop caching and continue rendering the element from scratch whenever its content changes.

As mentioned before, some properties will have no effect when specified in `will-change`, because the browser doesn’t perform any special optimizations for changes in most properties. It is still safe to specify them, though; it’ll simply have no effect. Other properties may result in the creation of stacking contexts (`opacity`, `clip-path`, etc.) and/or containing blocks.

## Browser Support

At the time of writing of this article, only Chrome Canary 36+, Opera Developer 23+, and Firefox Nightly support the `will-change` property. There is [an intent to ship it to the stable channel](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/LwvyVCMQx1k) too. And word says that it won’t be long before it is supported in all modern browsers.

## Final Words

The `will-change` property is a will help us write hack-free performance-optimized code, and emphasize the importance of speed and performance to our CSS operations. But, as with all things, with great power comes great reponsibility, and `will-change` is one of those properties that should not be taken lightly and should be used wisely. At this point, I’m going to quote Tab Atkins Jr., the `will-change` [specification](http://dev.w3.org/csswg/css-will-change/) editor:

> Set `will-change` to the properties you’ll actually change, on the elements that are actually changing. And remove it when they stop.

Thank you for reading!

*A very big thank you to Paul Lewis for his review and feedback, and to Tab Atkins for his support and answers, and to Bruce Lawson and Mathias Bynens for reviewing the article.*
