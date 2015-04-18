---
title: UX accessibility with aria-label
authors:
- heydon-pickering
intro: '`aria-label` is a useful tool to ensure a good user experience for assistive technology users, elevating your design from merely technically compliant to well signposted and usable.'
tags:
- accessibility
- wai-aria
cover: jpg
featured: featured
license: cc-by-3.0
---

WAI-ARIA, the accessibility extension technology for HTML, has a reputation for being complex — if not entirely impenetrable — in its specification.

How WAI-ARIA’s suite of attributes relate to one another, the underlying HTML and the circumstances under which they are set or mutated is not a trivial affair. And that’s before you try to establish the differing interaction conventions of desktop versus web applications or begin to reconcile the notion of interoperable state with your visual design process.

Basically, it’s a big bum ache. An interesting and ennobling bum ache, but a bum ache nonetheless.

However, while integrated WAI-ARIA widgets, which require an exacting deployment of interrelated HTML attributes and key bindings, can be daunting prospects, not all of WAI-ARIA is organized in such a strict fashion. The `aria-label` attribute, on account of being a [global property](http://www.w3.org/TR/wai-aria/states_and_properties#global_states), can be called upon anywhere in a page, independently of any other WAI-ARIA features, as and when you need it.

As I shall describe, `aria-label` is a useful tool to ensure a good user experience for assistive technology users, elevating your design from merely technically compliant to well signposted and usable. There’s also more than one “effect” that `aria-label` can be used to achieve.

## The virtue of text

Here is a rule of thumb:

> Whenever you communicate anything on the web not using text, you’re probably doing so inaccessibly

The Web is a conduit for text and web accessibility is about making sure that text is — really and truly — text. Not pictures of text, but text. It’s not _quite_ that simple because there’s focus management to worry about, but that’s pretty much it.

- Text nodes are accessible because they are text
- Semantic HTML elements are accessible because they prompt the interface to announce descriptive text
- WAI-ARIA property and state attributes are a standardized means of supplementing content with qualifying, assistive-technology-announceable… text

The `aria-label` property falls into the third of these three camps.

Why is text so central to accessibility? Because text is highly _interoperable_. That is, systems of letters can be translated into code points and interpreted by all sorts of different software. Oh and humans understand text already, of course.

Because different machines can all read and write text, information can be interpreted and conveyed to humans in different ways. Primarily visually (in letter forms) but also aurally (as synthesized speech) and even by touch (refreshable Braille displays, for instance).

## Accessible names

HTML elements have roles and names. These are both bits of text. If you were to think of them as people, you could say their role is _who they are_ and their name is _what they have to say_. Regarding interactive elements like `<button>`s, names are important because they tell you what the element is for and what it will do. Their role is “button” and their name might be “do x”.

The “button” role piece of text is provided simply by using the `<button>` element, but the name must be written manually, by the author. The easiest (and best) way to supply a name for an element is to **write some text between the opening and closing tags**, like so:

	<button>Launch missile at my own face</button>

Text nodes are great because you can read them by looking at them or have them read to you. (Mostly) everyone has access to text nodes.

Astonishingly, some web developers seem to spend a lot of their time trying to avoid using text nodes in their interfaces. To them, using _text_ for the purpose of _using text_ is all too obvious. They like to use vectors, rasters or inexplicable pictograms instead.

It is in this circumstance that someone has to add an _accessible name_ separately.

### Accessible name calculation

So common is the practice of not using text in **a medium principally designed for the conveyance of text** that, over the years, we have devised a number of ways to add remedial text after a visual design has been “finished”. This adding of an invisible accessible name usually employs one of the following:

- The `title` attribute
- The `alt` attribute
- The `aria-label` attribute
- The `aria-labelledby` attribute
- Some text in a hidden `<span>` that’s been flung off the side of the screen by an excessive 9 million pixels just in case screen resolutions get so high that this floating bit of text becomes visible to the 8 people who can afford that super-high-resolution model of Apple™ computer.

Some of the attributes are [incredibly unreliable](http://blog.silktide.com/2013/01/i-thought-title-text-improved-accessibility-i-was-wrong/) (`title`) and others can only legally — and successfully — be used on certain elements (`alt`), leaving the two dedicated ARIA attributes `aria-label` and `aria-labelledby`.

In [the calculation](http://www.w3.org/TR/html-aam-1.0/) of which bit of (remedial) text should take precedence when more than one is present, `aria-label` and `aria-labelledby` also rank most highly, overriding the other methods.

## Providing an accessible name with `aria-label`

If no accessible name is available, screen readers try their best to come up with something based on the element and its attributes. This, inevitably, leads to some utterly perplexing results.

Have you observed the habit of using `<a>` elements as buttons? Then perhaps you’ve seen a spoof `href` like `#` here and there?

	<a href="#" class="button"></a>

	.button {
		background-image: url(button-with-fake-text.png);
	}

It may surprise you that when focusing this “button” the screen reader JAWS announces “number link”. Number? Yes, the screen reader, bereft of an accessible name, desperately blurts out the `href` value, which it interprets as “number” — as in “[the #1 book on web application accessibility](https://shop.smashingmagazine.com/apps-for-all-coding-accessible-web-applications.html)”. “Number link”? What on earth does that mean?

The `aria-label` attribute can be used to easily add a proper name to the element, like so:

	<a href="#" class="button" aria-label="Launch missile at my own face"></a>

It’s still the wrong type of element because it’s a link and launching a missile at one’s own face is not a _linking action_, but at least the name tells you what the interactive element will do. Now screen reader users get the same warning that the button will launch a self destructive missile.

Support for `aria-label` is also dependable, making our missile warning system still more robust. The 'aria-label` attribute works across the full gamut of popular browser and screen reader combinations including NVDA, JAWS and VoiceOver paired with Internet Explorer, Firefox, Chrome and others.

## Providing _better_ text with `aria-label`

As I already covered, `aria-label` is favored in accessible name calculation. Apart from `aria-labelledby`, it will override all additional naming methods. This means you can use it to provide _better_ text for assistive technologies without altering text intended for visual users.

When would you want to do this? There are a couple of scenarios worth considering.

### Interpreting icons

It’s rarely wise to rely entirely on icons in your design lexicon. Even those who can actually see the icons are liable to waste valuable time trying to guess what they are supposed to mean. Nonetheless, there are some conventions that are well understood, like the `&times;` symbol used to denote a close button.

The trouble is, “button multiplication”, “button times” and such are not very helpful labels as substitutes for the visual signifier. So we supply an `aria-label` to override the text node of `&times;` without disturbing the actual letterform:

	<button aria-label="close">&times;</button>

Now the “accessibility layer” of the interpreted interface includes the instruction to tell assistive technologies to use the “close” name, prompting them to announce “button close” or something similar.

### Improving non-visual context

It has become popular to use the so-called “hamburger icon” to denote a button that opens a site’s main navigation menu. The `≡` character used for this purpose is often a unicode character meaning “identical to” in mathematics. Screen readers like NVDA do not understand the symbol so just ignore it (or unhelpfully read out “symbol 8801” in certain modes). JAWS simply says “equals”.

[Myself and others are not convinced](https://lmjabreu.com/post/why-and-how-to-avoid-hamburger-menus/) that everyone understands even the visual symbol to mean “the main menu of this site” and resolve to add an adjacent “menu” to clarify:

	<button>≡ menu</button>

Now, when you focus that button using JAWS it will read “button equals menu” which, depending on how you look at it, is either a lie (the button itself is _not_ the menu) or a tautology (“this menu button is the menu button”).

You could use the global `aria-hidden` property to clear up confusion by eliminating the “equals” announcement:

	<button><span aria-hidden="true">≡</span> menu</button>

But I prefer to exploit an opportunity to give some extra context:

	<button><span aria-label="site navigation">≡</span> menu</button>

Because the span has no semantics — no role to be announced — focusing this button would now read “(button) site navigation menu” as a seamless run of speech.

If the design is successful, the position of the button in the visual layout and the use of the `≡` symbol already imply that this particular menu is the site’s navigation menu. We’ve now made this context explicit in a paradigm where visual clues cannot be relied upon. This is the essence of accessible User Experience Design.

## Adding context using containers

In the last two examples, we exploited `aria-label`’s ability to override text nodes, but there is a way to provide contextual information via `aria-label` while preserving the text node of the focused element. This is by supplying an `aria-label` to a parent (container) element.

### Multiple navigation landmarks

The navigation landmark (`role="navigation"` in ARIA speak or `<nav>` in basic HTML) is most frequently used just once per page, to denote the site’s main navigation. It’s what would hide behind the hamburger icon, if you will.

However, as [the spec’ suggests](http://www.w3.org/WAI/PF/aria/20091214/roles#navigation), navigation landmarks can be used _“for navigating the document or related documents”_.

Why not both? Why indeed. You could have a navigation landmark to navigate between pages and one to navigate around the current page. The trick is in differentiating the two upon entering either landmark. This is where `aria-label` comes in once again.

Consider these two, complementary navigation landmarks, one for the site and the other for just the about page:

	<nav role="navigation" aria-label="Site">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>

	<nav role="navigation" aria-label="About page">
		<ul>
			<li><a href="#intro">Introduction</a></li>
			<li><a href="#what-I-do">What I do</a></li>
			<li><a href="#testimonials">Testimonials</a></li>
			<li><a href="#get-a-quote">Get a quote</a></li>
		</ul>
	</nav>

When navigating by keyboard and entering one of these landmarks, you will focus the first of the links provided. But it’s not just the link role and its name that will be announced. The landmark will also be identified, as well as the existence of the list (handy for informing the user that there are multiple links).

In our case, the label will be prepended to the announcement as well, telling the user what sort of navigation landmark they are in. Each of these little bits of information helps to paint a clearer picture of the interface in hand.

So, when the user focuses the first of the links in the “site” navigation landmark, the NVDA screen reader — for example — will announce _“site navigation landmark, list of four items, home link.”_ By the same token, when the “about page” landmark is entered the output is _“about page navigation landmark, list of four items, introduction same page link.”_ (Note how the `#` in the about page links’ `href`s prompts the NVDA reader to clarify that the link is to a location on that same page.)

## Conclusion

In that final example, a number of techniques — ARIA role deployment, accessible naming, semantic HTML and known AT convention — were combined to make the interface clearer and therefore provide a better experience for the user. But, in effect, we were just composing a sentence, piece by piece. The introduction of `aria-label` to that sentence improves the UX by labelling that part of the interface.

WAI-ARIA is not intended to affect the behavior of HTML interfaces. In ARIA widgets like tab interfaces, it’s the JavaScript that actually changes the state of the widget as you use it. Behavior is a part of UX, of course, but its much the same whether you are using the interface visually, aurally or both at the same time.

A state change is a state change. But it’s with the provision of text, labels, _words_ that the nature and the state of an interface can be made accessible. It’s worth bearing that in mind when you embark on designing more complex ARIA-based patterns. Hopefully, things will fall into place more easily.
