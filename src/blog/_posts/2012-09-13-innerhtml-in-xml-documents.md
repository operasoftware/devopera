---
title: Changes to the Behavior of `innerHTML` in XML Documents
authors:
- patrick-lauke
tags:
- xml
license: cc-by-3.0
---

In the run-up to the next stable desktop release, you’ll notice that a lot of changes are being made to our browser’s core engine. Although here on the Developer Relations blog we usually just cherry-pick and explain some of the shinier new additions that fall under the big “HTML5” umbrella, there are also quite often tiny improvements under the hood that remove bugs and browser incompatibilities that don’t get much notice… until sites that somehow relied on our previous behaviour start to misbehave.

A recent example of this is the rather innocently titled <q>CORE-4336: Setting innerHTML in XML</q> which was recently shipped in one of our Opera Next snapshots.

Being a hip and happening developer, you may be thinking “XML? HTML5 is where it’s at!”… so it may come as a shock to you that in the vast reaches of the web, there are still a sizeable number of sites that use XML/XHTML.

While the release of Opera 12.10 is still a bit away, one of Opera’s products that already does include many of these core changes, including CORE-4336, is the newly released [Opera Device SDK 3.4](https://www.opera.com/business/tv/), which is used by many TV and set-top box device manufacturers to provide web browsing functionality. And it’s on this platform that some of our customers have started to report issues with the latest SDK relating to this particular core change.

In previous versions of Opera’s core, `innerHTML` was quite forgiving when injecting markup into XML/XHTML documents. As with regular HTML pages, when trying to add malformed content, Opera silently error-corrected the injected fragment according to its HTML parsing algorithm.

To see this in action, here’s a [simple test case]({{ page.id}}/innerhtml-in-xml.xml "Test case for injecting malformed content via innerHTML in an XHTML document") using `innerHTML` to inject the classic `<b><i>…</b></i>` set of misnested tags into an XHTML document. If you take a peek at the DOM after the page was loaded you’ll see how the misnested tags have been silently fixed in the current stable version of Opera, while the same test case will fail in other browsers such as Chrome and Firefox.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/innerhtml-xhtml-result.png" alt="">
	<figcaption elem="caption">Opera Dragonfly showing how the misnested markup has been silently fixed in the DOM</figcaption>
</figure>

Following the fix to CORE-4336, Opera’s core is now aligned with the stricter behavior of other browsers, which has been formally specified in [WHATWG](https://whatwg.org/)’s [DOM Parsing and Serialization](https://html.spec.whatwg.org/multipage/infrastructure.html#dom-innerhtml):

> In the case of an XML document, [`innerHTML`] will throw an `INVALID_STATE_ERR` if the Element cannot be serialized to XML, and a `SYNTAX_ERR` if the given string is not well-formed.

In the long run, this fix will ensure greater cross-browser compatibility...but obviously, if your XHTML sites start to misbehave and throw errors as a result of this change, the best advice we can give is to ensure that injected markup fragments are sanitised to ensure that they’re well-formed XHTML (no misnesting, correct use of quotes around attributes, etc). If this is not possible, a short term (though admittedly quite inelegant) fix would also be to change your site from XHTML to HTML.
