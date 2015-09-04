---
title: 'Houdini Task Force meeting report'
authors:
- bruce-lawson
intro: 'The Houdini Task Force met in Paris to discuss how to make CSS extensible. Here’s my meeting report.'
tags:
- css
- standards
- w3c
license: cc-by-3.0
---

Houdini is a joint W3C technical architecture group and CSS WG initiative to specify hooks into existing CSS. Its primary aim isn’t to give us “new CSS” but to add API hooks into the browsers’ built-in CSS capability so developers can hook into it, use the native implementation where we want (rather than duplicate it) and extend it. It’s applying the Extensible Web Manifesto’s philosophy to CSS. (If you’d like to know more about the aims and back story, read [Sex, Houdini and the Extensible Web by Brian Kardell](https://dev.opera.com/articles/houdini/).)

The Houdini Task Force held [its first meeting](https://wiki.css-houdini.org/planning/sydney-2015) in Sydney in February 2015 and a follow-up in the beautiful offices of Mozilla, Paris in August 2015.

I attended as an observer, as I’ve been excited and intrigued by the project since its inception. In attendance were delegates from Apple, Opera, Mozilla, Microsoft, Google, Adobe, HP, and invited experts like Florian Rivoal and Lea Verou. (See the full [participants list](https://wiki.css-houdini.org/planning/paris-2015#participants).)


What follows isn’t a full record of the meeting, but my notes on the main questions I had; much of the meeting was taken up with discussion of implementation details and, as I wasn’t representing an implementor, they weren’t of primary interest to me. [Simon Pieters](http://twitter.com/zcorpan) was formally representing Opera.

(You can read the full IRC logs of [day 1](http://logs.csswg.org/irc.w3.org/houdini/2015-08-28/) and [day 2](http://logs.csswg.org/irc.w3.org/houdini/2015-08-29/)).

It’s important to note that many of the [specs discussed](https://drafts.css-houdini.org/) are very nascent; some of them are little more than boilerplate prose.

I came to the meeting with a concrete set of use-cases that developers had told me they wanted, against which I attempted to measure the utility of the extensions discussed. After all, although one of the recurring jokes of the meeting was “Houdini Group: not immediately useful”, there’s no point in extending CSS for purely philosophical satisfaction; the outcome must be useful to developers at the end of the process.

Sample questions I had:

- Will I be able to do sane (but currently impossible) layouts that depend on arbitrary element foo “knowing about” arbitrary element bar and match it/ react to it?
- Will I be able to do something as simple and desirable as the proposed (and rejected) [text-wrap: balance](https://blogs.adobe.com/webplatform/2013/01/30/balancing-text-for-better-readability/)?
- Will I be able to do the much-requested h1 {font-size: just-make-it-big-enough-and-kern-it-pleasingly-so-that-it-fits-the-width} (For example, see [fittext.js](http://fittextjs.com/).)
- Can I polyfill [CSS Regions](http://www.w3.org/TR/css-regions-1/)?

## CSS Script API

The first thing on the agenda was the [CSS Script API](http://bfgeek.com/css-houdini-drafts/css-script-api/), AKA “CSS Worker” (or maybe “Isolated Worker”; bikeshedding continues) which is a bedrock that much of Houdini depends.

It’s an “API for running scripts in stages of the rendering pipeline independent of the main execution environment. This allows other APIs such as Style/Layout/Paint which effect [sic] different parts of the rendering pipeline to be exposed to the author safely, without major changes to the main execution environment APIs.” Similar to Service Worker, “the CSSWorkerGlobalScope may be destroyed / created at anytime. “

There was concern over performance; Simon Fraser
 (from Apple) was reluctant to add too many hooks into CSS that people can hang JavaScript on and slow down the pages, preferring to see declarative methods of achieving effects that the browser can optimise.

I agree, primarily because declarative methods are easier for authors; for sought-after use cases, we shouldn’t require developers to start scripting CSS or downloading libraries. (also, as [Andrea Moreati told me](https://twitter.com/moreati/status/637176796811759616) as I was live-tweeting, "CSS and `<p>` zero days are a lot rarer than JavaScript zero days".

But that ship’s already sailed — already, sane additions to HTML like [`<table sortable>`](https://html.spec.whatwg.org/multipage/tables.html#table-sorting-model) are already [batted away](https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/07v_yMErc_A/vMaLz90VOJkJ) with “someone should create a web components library”.

Nevertheless, Ian Kilpatrick (the editor), said that Google have a prototype of CSS Workers and the Custom Layout spec that allows them to replicate a subset of Flexbox in unoptimised JavaScript that’s about half as fast as native.

## Custom layout API

The [Custom layout API](https://drafts.css-houdini.org/css-layout-api/) has a minimum set of features balancing making it useful for authors while not striking terror into the hearts of implementors:

- Expose minInlineContent/maxInlineContent
- AbsPos is handled automatically (in the same fashion as flex/grid).
- The custom layout container establishes a formatting context, which implies that:
	- Floats cannot intrude into the custom layout
	- Margins do not collapse
- Blockify all children (similar to flex/grid)
- Float does not have any effect on children of a custom layout container (similar to flex/grid).
- No changing paint order (like the CSS order property on flex/grid).

I initially read the latter point (no changing paint order) to suggest that I couldn’t lay out stuff independent of source order (thinking “no” forbade an equivalent to CSS order property). That would be pretty lame; it’s hard to think of an exciting new layout that slavishly follows source order. But I’m a buffoon and W3C’s [Chris Lilley set me right](https://twitter.com/svgeesus/status/637287345105018880): “paint order meaning order in which overlapping items are painted; not layout position.”

[Stuart Langridge grumbled](https://twitter.com/sil/status/637179440640999424) “hrm. That’s scripting. I already have scripting. Providing more hooks for js to use is nice, but it’s not CSS”. That’s true; any kind of polyfill/ prollyfill uses script to simulate a native implementation.

The difference with Houdini is that you don’t have to emulate _everything_. You can get the information you need about boxes, heights, widths etc direct from the CSS Engine, via Houdini APIs, rather than have to jump through horrible hacky hoops with JavaScript. Ian Kilpatrick mentioned a previous version of Google Docs in which a font was copied to an off-screen iframe and then measured with JS; in the future™, that information will be available with the Houdini APIs.

Ian explained (after the meeting): “the iframe in Google Docs is subtle. It’s not just specific to Docs. The iframe is used to limit the amount of layout work that is needed to query the element’s width/height. Docs & others who perform layout use this “trick” to contain the amount of layout work, (as the browser only has to layout a small iframe, rather than a large page). They can’t use a trick like FastDom as these layouts are usually iterative. So to do the custom layout, they layout thrash, but only on a small DOM. Custom layout you are performing this layout as part of the layout pass so, querying a childs width/height is contained to just that subtree. (and hence fast)”

Then you plug in whatever custom things that CSS doesn’t currently support, and the browser’s CSS parser continues doing its job, but with knowledge of what you’ve done. Instead of doing all the work yourself, you’re just plugging the hole rather than replicating the entire CSS in JavaScript.

## CSS Custom Paint API

The [custom paint API](https://drafts.css-houdini.org/css-paint-api/) allows you to have other things as a background apart from still images. The spec gives an example using canvas and `background-image: paint(circle)`:

	#myElement {
		--circle-color: red;
		background-image: paint(circle);
	}

Notice this uses a _custom property_, as defined in Houdini’s [Custom Properties and Layout module](https://drafts.css-houdini.org/css-properties-values-api/); the `--` prefix is an “empty” vendor prefix (eg, not `-moz-` or `-webkit-`, as it’s defined by the individual author.
The script to accomplish this is:

	this.registerPaint({
		name: 'circle',
		dependencies: ['--circle-color'],
		paintCallback: function(ctx, geom, properties) {
			// Change the fill color.
			var color = properties['--circle-color'];
			ctx.fillStyle = color;

			// Determine the center point and radius.
			var x = geom.width / 2;
			var y = geom.height / 2;
			var radius = Math.min(x, y);

			// Draw the circle \o/
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
			ctx.fill();
		}
	});

Of, you could do with this an extra canvas element behind the element that you want to set a background on, but that would require more markup and ensuring that the canvas and the “real” element were always the same size and overlapping.

## CSSOM 2.0

In a new version of CSSOM, value objects would be preferable, but we can’t rely on TC39 standardising those in time, so it’ll use normal objects (strings are too slow). As this is a “framework dev”‘s API, I raided the Mozilla kitchen for 9 kilos of their excellent goat cheese and gave that my attention.

## GCSS

Lea Verou proposed [Generalized Cascading Sheets](https://lists.w3.org/Archives/Public/public-houdini/2015Jul/0003.html) to W3C, so that a general set of rules could be derived so the CSS Parser could be used (hooked into, adapted and — when necessary — over-ridden) by the “proliferation of languages with CSS-like syntax and rules”.

The [CSS Parser API](https://drafts.css-houdini.org/css-parser-api/) gives most of the hooks (although shorthands are currently a mess), and Houdini APIs “expose what the browser does to turn charaters into CSSOM”. Google reps were reluctant to add the Cascade to that because their implementation isn’t generic, but that’s easy enough to implement in JavaScript, if you can get specificity of a selector from Houdini (and not all CSS-style languages cascade, anyway).

I’m unclear about what (if anything) was resolved as the next step. If I were implementing, I’d want to concentrate on the core Houdini specs that let web authors do more stuff™ before specifiying a meta-CSS for non-web authors, with all the research and cross-interest group argy-bargy that would require, although I agree it’s a useful long-term goal.

## Font Metrics

Font metrics API will allow authors to get info about a glyph (and potentially more info about its parent font — does it have an oblique variant, what’s font’s x-height?).

Use cases are things like lining up images with top of a drop cap; exposing font baselines on 2 different things and lining them up.

I think the group didn’t know enough about what designers need to know about fonts to further specify this w/o consulting authors. But it’s early days, and they’d love [constructive comments and feedback](https://github.com/w3c/css-houdini-drafts/issues)

## Custom Compositor

Custom Compositor was originally called “UI Worker” — here’s a [video from BlinkOn3](https://www.youtube.com/watch?v=Kgy6XBJB_jI) with the basic use-case spelled out.

Later on it became “CompositorWorker” (and elsewhere, “Async Style; like I said, bikeshedding continues) with an [explainer document](https://docs.google.com/document/d/18GGuTRGnafai17PDWjCHHAvFRsCfYUDYsi720sVPkws/edit#) that says “the key problem facing the Web Platform is providing a thread that can run user code, respond to input, and update visuals without janking”

From the explainer: the goals of this API are to

- Interact well with scroll customization, Web Animations, and input,
- Permit custom effects synchronized with threaded scrolling and CSS animations,
- Minimize foot guns, and
- Avoid coupling to current browser architectures.

## Rendering Pipeline

There was a proposal for a [standardised rendering pipeline](https://docs.google.com/document/d/1Mw6qNw8UAEfW96CXaXRVYPPZjqQS3YdK7v57wFttAhs/edit#) (although this might not fit firmly within the Houdini remit).

The proto-spec says things like “Exactly once per frame, the browser should run the pipeline from start to finish (i.e. left to right).”

I’m all for APIs that give us a common representation of browsers’ different internal structures, but I’m less sure of a specification that requires a particular order of processing at specified intervals. While the text quoted above seems sensible enough, who’s to say that a browser will never come up with a way to optimise speed or CPU by doing things differently? I’m wary of painting ourselves into a corner or forcing Chromium’s workflow on other browsers here.

## Conclusion

When it came to prioritisation, I said (from a highly unscientific process of reading what was said by people geeky enough to be tweeting me on a warm Saturday afternoon) that authors seemed most enthused by Custom Paint, Custom Layout, and Font Metrics.

Many attendees expressed concerns about potentially requiring them to re-factor code to homogenise implementations (rather than simply adding hooks to expose information within their current implementations), and all were wary of performance implications of shipping foot-guns.

The ultimate end-result, of paramount importance to me, is that Houdini doesn’t stop development of declarative CSS by batting all new proposals to scripting against Houdini. I hope it functions as a method for developers to try out ideas which are then rolled back into the declarative language for native implementation and optimisation. Time will tell.

_Thank you to Ian Kilpatrick (Google) for corrections and contributions to this report, to Mozilla for hosting and giving me goat cheese, and to the Houdini Task Force for allowing me to attend and providing me with a comfortable cage._
