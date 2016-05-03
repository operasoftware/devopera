---
title: 'For A Better Extensions Ecosystem'
authors:
- shwetank-dixit
intro: 'A number of browser makers have started work on making browser extensions interoperable. This bodes well for the future of the extensions ecosystem.'
tags:
- extensions
- javascript
license: cc-by-3.0
---

In 2013, when we switched over to Chromium, we faced a choice on how to go about our extensions ecosystem. We decided to look to the future and anticipated that someday developers might want to have a standardised way to make extensions (or at least, have a common set of APIs) so that the effort of making a separate extension for each browser is reduced.

That is why we chose our extension packaging format as `.nex` which stands for ‘navigator extensions’, signifying our take on a vendor-neutral format for extensions. Back it 2013, [we wrote the following](https://dev.opera.com/blog/introducing-nex/):

> ...NEX — a vendor-neutral packaging format for browser add-ons that we have initially implemented on top of the Chromium `.crx` format in Opera. We intend to further develop this as an open add-ons format through international standards bodies. Initially we intend to consolidate the differences between add-on execution environments themselves considering their current similarities. As a secondary objective we then aim to kick-start meaningful discussion around shared system and device-level APIs with a view to making browser add-ons first-class citizens of the web core.

Years later, it seems a lot of other browser makers are also on board with getting some common extension APIs which work cross-browser. In order to do this, [Opera, Microsoft, and Mozilla have begun work in the Extensions Community Group](https://lists.w3.org/Archives/Public/public-browserext/2016May/0000.html) where we will try to agree upon a set of common APIs, as well as a common manifest and packaging format for browser extensions. The goal is to enable extension developers to write one extension and have it work cross-browser.

This does not mean that browsers will not have their own proprietary APIs — they will for certain features. However, if we can work out a common manifest and packaging format, along with a core set of APIs to have in common, then this will go a long way in having interoperability of extensions across browsers. This could also open the door to a type of ‘progressive enhancement’ model for developing extensions (where instead of making a separate extension for each browser, we could make one extension and feature detect for various APIs), much like we have for web sites.

We appeal to the community to participate in the discussion in the group, and to give their feedback and ideas. We hope other browser makers will join us, so that together we can make extension development for multiple browsers much smoother than it is right now.
