---
title: Interaction Media Features and their potential (for incorrect assumptions)
authors:
- patrick-lauke
intro: 'You can check input device capabilities with Media Queries Level 4 … but first, understand their limitations'
tags:
- css
- media-queries
published: false
cover: jpg
license: cc-by-3.0
---

The [Media Queries Level 4 Interaction Media Features](http://www.w3.org/TR/2014/WD-mediaqueries-4-20140605/#mf-interaction) — `pointer`, `hover` and the more recent `any-pointer` and `any-hover` — are meant to allow sites to implement different styles and functionality (either CSS-specific interactivity like `:hover`, or even JavaScript behaviours, when queried using `window.matchMedia`), depending on the particular characteristics of a user’s input modalities. Common use cases cited are often “make controls bigger/smaller depending on whether the users has a touchscreen device or is using a mouse/stylus” and “only use a CSS dropdown menu if the user has an input that allows `:hover`-based interactions”.

<figure block="figure" markdown="block">

	@media (pointer:fine) {
		/* ok to use small buttons/controls */
	}

	@media (hover:hover) {
		/* ok to use :hover-based menus */
	}

	@media (pointer:coarse) {
		/* make buttons and other “touch targets” bigger */
	}

	@media (hover:none), (hover:on-demand) {
		/* suppress :hover-based menus */
	}

<figcaption elem="caption" markdown="span">
	Some classic use cases for `pointer` or `hover`
</figcaption>

</figure>

## What’s the *primary* input?

One of the problems with the way `pointer` and `hover` are designed is the fundamental fact that they only expose the characteristics of the *primary* input device. What constitutes a primary input is, however, not always obvious.

Traditionally, we could say that a phone/tablet’s primary input is the touchscreen. But on desktop/laptop devices, any hard distinction already becomes blurry: these devices usually have both a keyboard and mouse/trackpad. What is the *primary* input in this case? Currently, browsers make the assumption that in these situations, it’s the mouse/trackpad. But what if I’m actually a user who navigates only using the keyboard (which, depending on how things are coded, can be considered a `pointer:fine` — for focusable elements like links and buttons — or `pointer:none` device — in the case of custom interfaces, reliant on JavaScript events with coordinates, such as a `<canvas>` — lacking `:hover`)? This particular case is (sort of) aknowledged in the spec:

> For accessibility reasons, even on devices whose pointing device can be described as fine, the UA may give a value of coarse or none to this media query, to indicate that the user has difficulties manipulating the input device accurately or at all.

At the time of writing, there are no options in browsers/UAs that let a user explicitly say “I’m a keyboard user” (let’s not even mention the “I’m a user with reduced mobility” scenario, where a user may in fact be using a mouse/trackpad — or even an alternative input method such as a head wand, or a virtual mouse, which translates back to actual mouse inputs — but with great difficulty and reduced accuracy).

Beyond the accessibility angle, there are further issues with the concept of *primary* inputs. What about devices like a Microsoft Surface, with a touchscreen, stylus and (with addition of a type cover) a trackpad and keyboard? Arguably, these devices blur the definition of *primary* input completely (though there is potential here for browsers to implement heuristics — consider Windows 10’s ability to switch to “Tablet mode”, which browsers could take as indication to treat any available touchscreen as primary).

**Note:** For a similar take on this problem, see [Stu Cox: The Good & Bad of Level 4 Media Queries](http://www.stucox.com/blog/the-good-and-bad-of-level-4-media-queries/), although his post refers to an earlier iteration of the spec, which only contained `pointer` and `hover` and a wooly requirement for these features to report the *least capable*, rather than the *primary*, input device.

So, right out of the gate, the fact that `pointer` and `hover` only relate to what the browser/OS believe to be the *primary* input may be wrong on devices with potentially two or more different primary inputs.

Fundamentally, the problem with the original `pointer` and `hover` is that they don’t cover multi-input scenarios. The user may for instance have paired a bluetooth mouse to their phone/tablet — suddenly, instead of a pointing device with `pointer:coarse` and `hover:none`, they have an additional `pointer:fine`, `hover:hover` capable one. But as the *primary* input is still the touchscreen, no extra media queries based on these capabilities would kick in.

| feature            | touchscreen | touchscreen + mouse | desktop/laptop | desktop/laptop + touchscreen |
|--------------------|-------------|---------------------|----------------|------------------------------|
| `pointer:none`     | false       | false               | false          | false                        |
| `pointer:coarse`   | **true**    | **true**            | false          | false                        |
| `pointer:fine`     | false       | false               | **true**       | **true**                     |
| `hover:none`       | false       | false               | false          | false                        |
| `hover:on-demand`  | **true**    | **true**            | false          | false                        |
| `hover:hover`      | false       | false               | **true**       | **true**                     |

**Note:** from my (admittedly limited to Android/Blink) testing, it seems that on touchscreen devices, `hover:on-demand`, rather than `hover:none`, returns true — probably a conscious decision on the part of Blink, related to the fact that `:hover` (and even compatibility mouse events like `mouseover`) can be triggered by a touchscreen “tap”.

That’s where `any-pointer` and `any-hover` are supposed to come into play.

## Testing the capabilities of all inputs

Instead of focusing purely on the *primary* input, `any-pointer` and `any-hover` report the capabilities of *all* available inputs. Going back to the original use cases for the interaction media features, instead of basing our decision to provide larger/smaller inputs or to enable/disable `:hover`-based functionality only on the characteristics of the *primary* input, we can make that decision based on the characteristics of *any* available inputs. Roughly translated, instead of saying “only offer a CSS menu if the primary input has `hover:hover`”, we can build media queries that equate to “only offer a `:hover` based menu if at least one of the inputs available to the user has `hover:hover` capability”. Depending on the specific implementation, the `any-pointer` and `any-hover` interaction media features may even change dynamically when inputs are added/removed — so a site/app could immediately react to, say, a mouse being paired with a touchscreen device.

**Note:** in Chrome’s current implementation, the values for these media features are not updated dynamically, and even remain the same after a refresh — see my video [Chrome 42 Beta: any-pointer/any-hover MQ feature issue](https://www.youtube.com/watch?v=nAh80QI8vlI) and the related Chromium bug [Issue 442418: Support dynamic values for interaction media queries](https://code.google.com/p/chromium/issues/detail?id=442418).

In order to support multi-input scenarios, where different inputs may have different characteristics, in the case of `any-pointer` and `any-hover`

> more than one of their values can match, if different input devices have different characteristics

(compared to `pointer` and `hover`, which only ever refer to the capabilities of the *primary* input).

| feature               | touchscreen | touchscreen + mouse | desktop/laptop | desktop/laptop + touchscreen |
|-----------------------|-------------|---------------------|----------------|------------------------------|
| `any-pointer:none`    | false       | false               | false          | false                        |
| `any-pointer:coarse`  | **true**    | **true**            | false          | **true**                     |
| `any-pointer:fine`    | false       | **true**            | **true**       | **true**                     |
| `any-hover:none`      | false       | false               | false          | false                        |
| `any-hover:on-demand` | **true**    | **true**            | false          | **true**                     |
| `any-hover:hover`     | false       | **true**            | **true**       | **true**                     |

<figure block="figure" mod="right-half">
	<img elem="media" src="{{ page.id }}/android-touchscreen-mouse.png" alt="Interaction Media Features in Opera on an Android phone with paired bluetooth mouse">
	<figcaption elem="caption">Interaction Media Features in Opera on an Android phone with paired bluetooth mouse</figcaption>
</figure>

**Note:** you can [see how the interactive media features are evaluated](http://patrickhlauke.github.io/touch/pointer-hover-any-pointer-any-hover/) on your specific device. Currently, interaction media features are supported in Blink (since M-21 for `pointer`/`hover` — [Issue 123062: Support pointer and hover CSS media features for touch screens](https://code.google.com/p/chromium/issues/detail?id=123062) — and M-41 for `any-pointer`/`any-hover` — [Issue 398943: Ship `any-pointer` and `any-hover` Media Queries](https://code.google.com/p/chromium/issues/detail?id=398943)) and the preview release of Internet Explorer/Spartan [status.modern.ie](https://status.modern.ie/mediaquerieslevel4interactionmediafeaturespointerandhover)). Safari should have support for these soon ([Changeset 179055](http://trac.webkit.org/changeset/179055)). There does not appear to be any movement on implementing these features in Firefox. Note that the [Media Queries Level 4 Interaction Media Features](http://www.w3.org/TR/2014/WD-mediaqueries-4-20140605/#mf-interaction) are still at the Working Draft stage, so some of the wording/functionality may still change before they become stable recommendations.

## Potential for incorrect assumptions

Certainly, it’s valuable for a developer to be able to know the characteristics of *any* input device that the user has at their disposal. However, this can still lead to fundamentally flawed assumptions (very similar to the ones I outlined in my article on [Detecting touch: it’s the “why”, not the “how”](https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/)): it doesn’t matter so much what inputs (and their specific characteristics) are *potentially* available to a user — what matters, in most cases, is what input the user is using *right now*.

Take the example of a phone/tablet with a paired mouse: `any-hover:hover` will be true, as there is a hover-capable input present — but does that mean that we can now rely on hover-based functionality? What if the user, regardless of the mouse, is still using the touchscreen?

<figure block="figure" markdown="block">

	@media (any-pointer:fine) and (any-hover:hover) {
		/* at least one device is mouse-like…
		we can use small buttons and :hover-based menus, right?
		what if they’re using a touchscreen… */
	}

<figcaption elem="caption" markdown="span">
	Assumptions based on `any-pointer` or `any-hover`
</figcaption>

</figure>

## Targeting the least capable input

Since we cannot know for sure which input is currently being used, I would suggest that `any-pointer` and `any-hover` are only valuable for checking the *lowest common denominator*, the least “capable” input. In the example of the phone/tablet with a paired mouse, we’d still only be able to use the information provided by `any-pointer` and `any-hover` to determine that yes, even though there are different inputs available, one of them is still coarse and does not support hover.

<figure block="figure" markdown="block">

	@media (any-pointer:coarse) {
		/* at least one input is “coarse”
		make buttons and other “touch targets” bigger */
	}

	@media (any-hover:none), (any-hover:on-demand) {
		/* at least one input has no or (usually clunky)
		“on-demand” hover suppress :hover-based menus */
	}

<figcaption elem="caption" markdown="span">
	Use `any-pointer` or `any-hover` for lowest common denominator
</figcaption>

</figure>

Instead of testing for the presence of a particular capability, we could of course test for the *absence* of less capable inputs, and suppress styles that would otherwise be needed if those limited input types were present. However, the limited way in which the logical `not` currently works in [Media Queries Level 3](http://www.w3.org/TR/css3-mediaqueries/#media0) (which don’t support chaining multiple tests together with a comma — the logical `or` — and negating the whole resulting expression) makes this unnecessarily cumbersome, since we can effectively only test for the absence of *one* of the values at a time:

<figure block="figure" markdown="block">

	@media not all and (any-pointer:coarse) {
		/* no inputs are “coarse”
		they may be “fine” or “none” */
	}

	@media not all and (any-hover:on-demand) {
		/* no input with “on-demand” hover is present
		they either have “hover” or “none” */
	}

	@media not all and (any-hover:none) {
		/* no input without hover is present
		they either have “hover” or “on-demand” */
	}

<figcaption elem="caption" markdown="span">
	Explicitly test for absence of “less capable” inputs
</figcaption>

</figure>

**Note:** normally, the `all and` part would be superfluous, but it seems Internet Explorer currently has a bug that prevents `not` from working correctly without an explicit media type as part of the query.

We could try to work around the limitations of `not` by using [nested `@media` blocks](http://www.w3.org/TR/css3-conditional/#contents-of), but this further increases complexity and has the potential for cross-browser incompatibilities at this point:

<figure block="figure" markdown="block">

	@media not all and (any-hover:none) {
		@media not all and (any-hover:on-demand) {
			/* neither “none” nor “on-demand” hover inputs are present
			meaning all inputs have `hover:hover`
			safe to use hover-based features?
			still does not identify keyboard users at the moment */
		}
	}

<figcaption elem="caption" markdown="span">
	Nested `@media` queries
</figcaption>

</figure>

Lastly, we could wait for the “full boolean algebra” approach of [Media Queries Level 4 media conditions](http://dev.w3.org/csswg/mediaqueries-4/#media-conditions) — but this is not currently supported in any browser:

<figure block="figure" markdown="block">

	@media not ((any-pointer:none) or (any-pointer:on-demand)) {
		/* as above, but far more readable
		sadly, not supported in any browser yet */
	}

<figcaption elem="caption" markdown="span">
	MQ Level 4 full boolean algebra media condition
</figcaption>

</figure>

Regardless of which specific approach we opt for, in the end, we’re using `any-pointer` and `any-hover` to somehow find our baseline for the least capable input, rather than trying to determine the most capable one.

## Query responsibly

For me, the take-away from all this is: `pointer` and `hover` tell you about the capabilities of whatever the browser/UA determines to be the primary device. This information is mostly useless, as there may be additional input methods, and the browser may have made assumptions which are not correct. `any-pointer` and `any-hover` tell you about the capabilities of all connected inputs, and with some degree of media query acrobatics we can even narrow down the overall range of potential capabilities available. But none of these tell you specifically about the capabilities of the input device your user is using *right now* — and of course, you can only know what specific input a user will be using once they already started an interaction, at which point it’s likely too late to switch around style or functionality.

By all means, use [Media Queries Level 4 Interaction Media Features](http://www.w3.org/TR/2014/WD-mediaqueries-4-20140605/#mf-interaction) to make your site respond to different input device capabilities — but beware false assumptions about what these media features actually tell you. Or keep it simple: design for all types of input and/or offer the user an explicit way to switch to their preferred mode.
