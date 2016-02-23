---
title: Opera Mobile Emulator Build With Experimental WebKit Prefix Support
authors:
- bruce-lawson
intro: 'Through our site compatibility work, we have experienced that many site authors only use `-webkit-` prefixed CSS, thereby ignoring other vendor prefixes and not even including an unprefixed equivalent. This leads to a reduced user experience on non-WebKit browsers, as they don’t receive the same shiny effects, even although they support them. To tackle this problem, we are releasing an experimental Opera Mobile Emulator build with experimental support for selected `-webkit-` prefixes.'
tags:
- css
- opera-mobile
- emulator
- prefixes
- presto
- webkit
license: cc-by-3.0
---

CSS vendor prefixes were introduced in CSS 2.1 for vendor-specific extensions with the warning that [authors should avoid vendor-specific extensions][1]. CSS Snapshot 2010 [extended the definition][2]:

> Prior to a specification reaching the Candidate Recommendation stage in the W3C process, all implementations of a CSS feature are considered experimental. The CSS Working Group recommends that implementations use a vendor-prefixed syntax for such features, including those in W3C Working Drafts.

[1]: http://www.w3.org/TR/CSS21/syndata.html#vendor-keywords
[2]: http://www.w3.org/TR/css-2010/#experimental

Opera, along with Mozilla, announced at a CSS Working Group meeting ([minutes][3]) that we would support some `-webkit-` prefixes. This is because through our site compatibility work, we have experienced that many authors of (especially mobile) sites only use `-webkit-` prefixed CSS, thereby ignoring other vendor prefixes and not even including an unprefixed equivalent. This leads to a reduced user experience on Opera and Firefox, which don’t receive the same shiny effects such as transitions, gradients and the like, _even if the browser supported those effects_.

[3]: http://lists.w3.org/Archives/Public/www-style/2012Feb/0313.html

The vendor prefix system is hard to use. It’s easy to miss out a vendor prefix when copying and pasting multiple lines, or because a vendor doesn’t support a certain feature while you’re developing. Some specifications seem to take forever to get to the Candidate Recommendation stage at the W3C, after which vendors are supposed to unprefix their implementations. Some developers erroneously assume that mobile development equals iOS devices, so only use `-webkit-` prefixes because they don’t know or don’t care about other browsers. There are many reasons for missing out some prefixes — but the user is always the loser.

## Automatic error recovery

One of the [HTML5 design principles][5] is:

[5]: http://www.w3.org/TR/html-design-principles/#handle-errors

> Error handling should be defined so that interoperable implementations can be achieved. Prefer graceful error recovery to hard failure, so that users are not exposed to authoring errors.

CSS is not HTML, of course. But the same principle holds. Using single-vendor code on the World Wide Web that results in non-interoperability is an authoring error. In the same way that the HTML5 parsing algorithm “re-writes” HTML to make tags close correctly in the DOM in order to ensure interoperability, this Labs release tests reacting to certain `-webkit-` prefixed CSS properties as though they were `-o-` prefixes in order that users are not exposed to authoring errors.

## Builds

In order to test this out, we have prepared Opera Mobile Emulator Labs builds with support for [selected](#whichones) `-webkit-` prefixes.

- [Opera Mobile Emulator Labs build for Mac][8]
- [Opera Mobile Emulator Labs build for Windows][9]
- [Opera Mobile Emulator Labs build for Linux][10]

[8]: https://www.opera.com/download/get.pl?id=34627&sub=true&nothanks=yes&location=360
[9]: https://www.opera.com/download/get.pl?id=34629&sub=true&nothanks=yes&location=360
[10]: https://www.opera.com/download/get.pl?id=34628&sub=true&nothanks=yes&location=360

## Which prefixes are affected? {#whichones}

Two different types of prefixes are supported:

### `-webkit-linear-gradient`

`-webkit-linear-gradient` and `-o-linear-gradient` will behave identically and the following rules will be obeyed when evaluating styles.

- Duplicate properties will not be preserved when both `-webkit-linear-gradient` and `-o-linear-gradient` are found. Whichever comes last will override the other.
- Which name is in use will be tracked, so if the value is retreived from JavaScript, the prefix is remembered.

### Properties

`-webkit-` prefixed properties are supported through a CSS property aliasing mechanism, and also will obey the following rules.

- As above, when a `-webkit-` prefixed property and an `-o-` prefixed property are encountered, they are treated as instances of the same property, so the latest one (according to usual cascade rules) wins.
- When accessing or setting the value of a property through JavaScript, all the aliased names of a property are visible as members of the `CSSStyleDeclaration` object, and they map to the same value.
	- However, the `CSSStyleDeclaration` `.item(*)` function will return the canonical name of the alias, not the name actually used. This point may be changed in the future if it is found to cause problems.
- `removeProperty`, `setProperty`, `getPropertyValue`, and `getPropertyPriority` all will work with aliases as described above.
- `webkitTransitionEnd` is aliased to `oTransitionEnd` enabling the use of `addEventListener('webkitTransitionEnd')`
	- If both `addEventListener('webkitTransitionEnd')` and `addEventListener('oTransitionEnd')` have been used to register a listener, only the `oTransitionEvent` will be fired.
- If the property name is used as the value of another property (as is the case with `transition-property`), the name that was used is preserved.

The properties that have been aliased in this way are:

<figure block="figure">
<table>
<tr>
	<th><code>-o-</code></th>
	<th><code>-webkit-</code></th>
</tr>
<tr>
	<td><code>box-shadow</code></td>
	<td><code>-webkit-box-shadow</code></td>
</tr>
<tr>
	<td><code>-o-transform</code></td>
	<td><code>-webkit-transform</code></td>
</tr>
<tr>
	<td><code>-o-transform-origin</code></td>
	<td><code>-webkit-transform-origin</code></td>
</tr>
<tr>
	<td><code>border-radius</code></td>
	<td><code>-webkit-border-radius</code></td>
</tr>
<tr>
	<td><code>border-top-left-radius</code></td>
	<td><code>-webkit-border-top-left-radius</code></td>
</tr>
<tr>
	<td><code>border-top-right-radius</code></td>
	<td><code>-webkit-border-top-right-radius</code></td>
</tr>
<tr>
	<td><code>border-bottom-left-radius</code></td>
	<td><code>-webkit-border-bottom-left-radius</code></td>
</tr>
<tr>
	<td><code>border-bottom-right-radius</code></td>
	<td><code>-webkit-border-bottom-right-radius</code></td>
</tr>
<tr>
	<td><code>-o-transition</code></td>
	<td><code>-webkit-transition</code></td>
</tr>
<tr>
	<td><code>-o-transition-delay</code></td>
	<td><code>-webkit-transition-delay</code></td>
</tr>
<tr>
	<td><code>-o-transition-duration</code></td>
	<td><code>-webkit-transition-duration</code></td>
</tr>
<tr>
	<td><code>-o-transition-property</code></td>
	<td><code>-webkit-transition-property</code></td>
</tr>
<tr>
	<td><code>-o-transition-timing-function</code></td>
	<td><code>-webkit-transition-timing-function</code></td>
</tr>
</table>
</figure>

## How did you choose these?

We decided to alias properties and values for which are frequently used in the wild with a `-webkit-` prefix and without fallback, but which we already support either under an `-o-` prefix or unprefixed. To determine which property was frequent, and how often it had fallbacks, we analyzed the style sheets of a large number of popular websites (Alexa top 10,000). Based on that information, we made a subjective judgment.

## Just mobile, or desktop too?

Both. Our Desktop and Mobile browsers share the same core. Testing in multiple browsers is hard enough without having to worry about subtle differences between various ports of the same browsers.

## What will happen to my site?

One of the following:

If you were just ignoring Opera, and only used `-webkit-` prefixes, we’ve just made your site more compatible to Opera users. In this example, the words “Vital information” were previously invisible to Opera, but visible in WebKit browsers. Now, they are visible in Opera too.

	<!DOCTYPE html>
	<meta charset=utf-8>
	<style>
		div {
			color:white;
			height:100px;
			background:-webkit-linear-gradient(
				top,
				rgba(30, 87, 153, 1) 0%,
				rgba(125, 185, 232, 0) 100%
				);
			}
	</style>

	<div>Vital information</div>

[Test example 1][15].

[15]: /articles/opera-mobile-emulator-webkit-prefix-support/test-1.html

- If you weren’t using `-webkit-` prefixes (you were using the unprefixed variant, for instance), nothing changes and you don’t have to care.
- If you’ve been using both `-webkit-` and `-o-` (or unprefixed) and supplying the same value to both, it will keep working just fine and you don’t need to care.
- If you were using both `-webkit-` and `-o-` (or unprefixed), and supplied different values to each, you need to check the order in which they put things in the style sheet. Because these `-o-` and `-webkit-` prefixes are regarded as being variants of the same name, the later version will be the one that is applied, whether it is prefixed `-webkit-` or `-o-`.

Consider a page that for some reason sends a red gradient to Opera and a blue gradient to WebKit. If the `-o-` rule comes before the `-webkit-` rule, Opera and webkit will receive a blue gradient, because the `-webkit-` rule over-rides the `-o-` rule:

	<!DOCTYPE html>
	<meta charset=utf-8>
	<style>
		div {
			color:white;
			height:100px;
			background:-o-linear-gradient(
				top,
				rgba(255, 0, 0, 1) 0%,
				rgba(125,185,232,0) 100%
				);
			background:-webkit-linear-gradient(
				top,
				rgba(30, 87, 153, 1) 0%,
				rgba(125, 185, 232, 0) 100%
				);
			}
	</style>

	<div>Vital information</div>

[Try example 2][16]. Note that current versions of Opera will show a red gradient, this experimental build shows a blue background

[16]: /articles/opera-mobile-emulator-webkit-prefix-support/test-2.html

In order to send a rule with different values to Opera, it must be after the `-webkit-` rule in the cascade ([example 3][17]):

[17]: /articles/opera-mobile-emulator-webkit-prefix-support/test-3.html

	<!DOCTYPE html>
	<meta charset=utf-8>
	<style>
		div {
			color:white;
			height:100px;
			background:-webkit-linear-gradient(
				top,
				rgba(30, 87, 153, 1) 0%,
				rgba(125, 185, 232, 0) 100%
				);
			background:-o-linear-gradient(
				top,
				rgba(255, 0, 0, 1) 0%,
				rgba(125, 185, 232, 0) 100%
				);
			}
	</style>

	<div>Vital information</div>

We discussed having the `-o-` prefixed version always trump a `-webkit-` version, but that breaks the cascade mechanism of CSS, which make it much harder for authors to debug sites and could have many unforeseen consequences. Therefore, we ask you to make a once-only check.

## What about differences in behaviors between WebKit and Opera?

As far as we can tell, the behavior the properties that we have aliased is identical in WebKit and Opera, or at least close enough that the differences will not matter in practice. If it turns out that there are differences big enough to cause breakage, we will consider our options, one of which is to align the behavior of our `-webkit-` prefixed variant to what WebKit actually does.

## Isn’t this going to ruin everything and make my life as a developer way more complicated?

No. If you’re using vendor prefixes correctly, nothing will change. If you were only using `-webkit-` prefixes, you get backwards compatibility for some of those in Opera, without harming your iPhone joy.

## Why is Opera breaking the Web and interoperability?

We’re not. We make a web browser, that allows people to access content on the web. When people block access by certain browsers, whether by omitting CSS rules or actively blocking, we have a duty to our users to access that content.

We’re promoting interoperability by silently correcting errors in an entirely predictable way, to benefit users.

## Has similar stuff been done before?

All browsers include mechanisms to deal with broken or unintended content. For example, IE6 invented DOCTYPE switching that assumed, from the lack of `DOCTYPE` that the developer wanted the erroneous IE5 box model. Opera and Firefox had to include bug compatibility with IE6, which is only being removed now.

More recently, Opera Mobile and Safari/iOS supported semicolons as delimiters between values for the viewport meta tag. The spec specifies commas, but authors were using semicolons.

When encountering broken XML (served as `application/xhtml+xml`), Opera decided to silently reparse the broken document as HTML, rendering the content to the end user, instead of showing an incomprehensible Parsing Failed error.

And, of course, the HTML5 parsing algorithm “rewrites” broken or mis-nested HTML to ensure interoperable DOMs between browsers.

## Why are you levelling blame at the feet of us developers?

We’re not. Others share the blame too:

- The CSS WG (that includes us) for failing to sufficiently prioritize specs that are seeing wide adoption
- WebKit vendors for not putting much effort in standardizing their proposals, for advertising `-webkit-` without fallbacks, and for not dropping prefixes at all
- The CSS WG for designing the prefix system, with all its downsides
- Authors and clients who believed it to be legitimate to exclude people because of their browsers

The point of this isn’t to blame anyone. It’s to get the content to the user.

## So I only need to use `-webkit-` prefixes now? w00t!

Absolutely not. We’re doing this now to ensure that there is compatibility with the 13 features we’re aliasing. We hope we never need add any more and that we can drop support for these. It remains vitally important to make sure that you code for all browsers, even if they don’t have support for a certain feature while you’re coding. We suggest this as a pattern that will ensure the cascade functions and any Opera-specific values are rendered:

	blah {
		-webkit-foo:bar;
		-moz-foo:bar;
		-ms-foo:bar;
		-o-foo:bar;
		foo:bar;
		}

Added 8 May 2012:

We want to ensure that the vendor prefix system never gets us into this situation again. So, in parallel with this experimental build of Opera Mobile Emulator, Opera’s representative on the CSS Working Group, Florian Rivoal, has a [proposal to fix the vendor prefixing system][24]:

[24]: http://lists.w3.org/Archives/Public/www-style/2012May/0125.html

> When a browser vendor implements a new css feature, it should support it, from day 1, both prefixed and unprefixed, the two being aliased. If a style sheet contains both prefixed and unprefixed, the last one wins, according to the cascade.
>
> Authors should write their style sheets using the unprefixed property, and only add a prefixed version of the property (below the unprefixed one) if they discover a bug or inconsistency that they need to work around in a particular browser.
>
> If a large amount of content accumulates using the a particular vendor prefix to work around an issue with the early implementation in that browser, the vendor could decide to freeze the behavior of the prefixed property while continuing to improve the unprefixed one.

(Read the [full explanation][25]). This is [currently being debated][26] in the Working Group.

[25]: http://lists.w3.org/Archives/Public/www-style/2012May/0125.html
[26]: http://lists.w3.org/Archives/Public/www-style/2012May/thread.html#msg125
