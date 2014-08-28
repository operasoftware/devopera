---
title: Opera Desktop 17 Released
authors:
- bruce-lawson
intro: '[Opera 17 for desktop is released](http://my.opera.com/desktopteam/blog/opera-17-final), and installs are being autoupdated as you read this. Opera 17 is based on Chromium/Blink 30, which means that [Canvas blend modes](http://codepen.io/adobe/pen/gbzmE) are now supported.'
tags:
- extensions
- opera
- opera-17
- canvas
- api
- odin
license: cc-by-3.0
---

[Opera 17 for desktop is released][1], and installs are being autoupdated as you read this.

[1]: http://my.opera.com/desktopteam/blog/opera-17-final

Opera 17 is based on Chromium/Blink 30, which means that [Canvas blend modes][2] are now supported.

[2]: http://codepen.io/adobe/pen/gbzmE

In addition, we’ve added support for a number of new extension APIs, which you now can safely use in your extensions:

* `chrome.bookmarks`: [API docs][3], [tutorial][4]
* `chrome.commands`: [API docs][5], [tutorial][6]
* `chrome.webNavigation`: [API docs][7], [tutorial][8]

[3]: https://dev.opera.com/extension-docs/bookmarks.html
[4]: https://dev.opera.com/extension-docs/tut_bookmarks.html
[5]: https://dev.opera.com/extension-docs/commands.html
[6]: https://dev.opera.com/extension-docs/tut_commands.html
[7]: https://dev.opera.com/extension-docs/webNavigation.html
[8]: https://dev.opera.com/extension-docs/tut_webnavigation.html

Consumer highlights are the ability to add custom searches, configure startup options, pinned tabs and (behind opera:flags) a new Quick Access Bar to house bookmarklets and bookmarks, powered by the chrome.bookmarks API.

If you are interested in experimenting with features that are in the pipeline for future versions of the product, we recommend following our [Opera Developer stream][9].

[9]: http://www.opera.com/developer
