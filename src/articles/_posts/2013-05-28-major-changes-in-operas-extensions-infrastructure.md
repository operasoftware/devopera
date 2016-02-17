---
title: Major Changes in Opera’s Extensions Infrastructure
authors:
- andreas-bovens
intro: 'With Opera switching from Presto to Chromium and a complete UI remake, our extensions infrastructure has also gotten a major overhaul: from Opera 15 onward, Opera 11 & 12’s extension format is no longer supported, and instead, we’ve switched to Chromium’s extension model.'
tags:
- extensions
- opera-presto
license: cc-by-3.0
---

With Opera switching from Presto to Chromium and a complete UI remake, our extensions infrastructure has also gotten a major overhaul: from Opera 15 onward, **Opera 11 & 12’s extension format is no longer supported, and instead, we’ve switched to Chromium’s extension model**. At this point, Opera 15 (available as [Opera Next][1]) supports a subset of the Chromium extension APIs — with more to come — as well as our own Speed Dial API.

[1]: https://www.opera.com/next/

If you want to upgrade your existing Opera extension to the new format, you can use the conversion tool we’ve built into the Opera extensions catalog’s [developer interface][2] and test if the extension works as expected. Of course, you can also reuse an existing Chromium extension or create a new one from scratch. There’s a whole [new tutorial section][3] with API documentation, examples and more for you to get started.

[2]: https://addons.opera.com/developer/
[3]: https://dev.opera.com/extensions/

We’re looking forward to getting the [Opera extensions catalog][4] filled with exciting new extensions in the next few months, and will be expanding our support for Chromium extension APIs, as well as adding new Opera-specific APIs.

[4]: https://addons.opera.com/extensions/

As for themes, Opera 15 ships with a couple of preset themes, but third party themes are not supported at the moment; however, we plan to bring theming functionality back in the near future, so stay tuned.

If you have questions or feedback, [get in touch][5]!

[5]: https://twitter.com/odevrel
