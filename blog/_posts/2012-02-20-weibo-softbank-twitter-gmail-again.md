---
title: Weibo, SoftBank, Twitter, GMail Again
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-590, weibo.com: work around missing `KeyboardEvent` interface. 11.62 only, as site expects `KeyboardEvent` to be present if `attachEvent` is not. Not true quite yet (will be though)
- PATCH-588, SoftBank Mobile History Plugin browser sniffing.
- PATCH-561, Twitter: allow selection in `<textarea>`. Core bug where re-setting styles of textarea kills selection.
- PATCH-422, Miscalculated `<iframe>` height prevents booking on rede-expressos. Removed last week, but was apparently still needed.

## Changed patches

- PATCH-585, 4chan: add bottom margin to `<blockquote>` for better readability, improved when selected.
- PATCH-582, GMail: override workaround for old `font-size` bug in Opera, add `!important` in the hope that it will take effect for everyone, not just me ;-)
