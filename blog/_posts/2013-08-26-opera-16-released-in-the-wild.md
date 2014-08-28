---
title: Opera 16 Released in the Wild
authors:
- andreas-bovens
tags:
- stable
- flags
- opera-16
- extensions
- geolocation
- disconnect
- odin
license: cc-by-3.0
---

This morning, we’ve spun out [Opera 16][1] stable from our [Opera Next][2] stream.

[1]: http://www.opera.com/computer/
[2]: http://www.opera.com/computer/next

Some of the bigger changes include advanced settings in [opera:flags][3], auto-fill support for forms, Geolocation support, start page options (e.g. you can disable Discover content preloading), and an engine update to Chromium 29 (Opera 15 was on Chromium 28).

[3]: opera:flags

On the extensions front, we now support the `chrome.cookies` and [`chrome.history`][4] APIs, and you can now use geolocation and, if really necessary, even NPAPI plugins in your extensions. Of course, all of these additions are documented in our [Opera extensions documentation][5], and we’ve added [more extension templates and samples][6] as well for you to build your extensions on.

[4]: https://dev.opera.com/extension-docs/tut_history.html
[5]: https://dev.opera.com/extension-docs/
[6]: https://dev.opera.com/extension-docs/tut_extension_samples.html

Also worth mentioning is that there is now no longer a limitation of 6 extension buttons in the browser UI, which was an issue for people with many extensions installed.

To celebrate this release and the milestone of 300 extensions for Opera 15 and higher in [our catalog][7], we’ve published an [interview with Brian Kennish from Disconnect][8], in which he sheds a light on the thinking behind the [Disconnect extension][9], the team’s UX process, what tools they use, what’s coming up next, and more.

[7]: https://addons.opera.com/
[8]: https://dev.opera.com/articles/extension-developer-interviews-disconnect/
[9]: https://addons.opera.com/en/extensions/details/disconnect/?display=en

[Give it a spin][10] and let us know what you think! And if you’re curious about what’s in the pipeline, check out our [Developer stream][11], which contains a lot of the features you’ll find in upcoming Opera versions.

[10]: http://www.opera.com/computer/
[11]: http://www.opera.com/developer/
