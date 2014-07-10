---
title: Blogger, Blogger, Blogger
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-523, journalism.org: fix old `<iframe>` SSI script.
- PATCH-522, wangpiao.com: allow seat selection. `window.constructor` shouldn’t be `Object`.
- PATCH-521, geforce.com - fix unclickable options on custom select box. Oddity with nested `relative/absolute` position and `z-index`.
- PATCH-519, xcweather: make sure the preference form is available when running script. Core script scheduling problem.

## Changed patches

- PATCH-418, Y!Mail Fix inserting links in mail compose screen. Let the patch function return something so further scripts don’t break.
- PATCH-505, YouTube: avoid deadlock when changing volume. New function name.

## Removed patches

- PATCH-207, Spoofing as Mozilla to get rich text editor makes Blogger assume we support `enableObjectResizing`
- PATCH-206, Don’t override native `click()` method and expect to submit forms by calling `click()` on a button on blogger.com
- DSK-152851, Blogger: browser detection prevents WYSIWYG editing

The Blogger patch is one of the oldest patches we have. They have recently redesigned the site and will now support Opera without us patching. Yay!
