---
title: web.de, 4chan, GMail
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-586, web.de: hide browser “upgrade” message.
- PATCH-585, 4chan: add bottom margin to blockquote for better readability. A quirk IE and Opera have causes vertical margins to collapse. Re-introduce them.
- PATCH-582, GMail: override workaround for old `font-size` bug in Opera. We fixed a bug in 11.60 and now the GMail compose font is too small because they coded for our old behavior. Patch while we wait.

## Changed patches

- PATCH-517, docs.google: make document names visible. Now even when toggling selection.
- PATCH-372, Work around Facebook’s attachEvent usage in all.js. Moved code to separate event listener to be able to version it better according to recent attachEvent core changes.

## Removed patches

- PATCH-551, Keep `document.domain` in sync inside `<iframe>` and main document on eBay. Site changed.
- PATCH-516, infojobs.com.br: unwrap input elements. Site changed.
- PATCH-422, Miscalculated `<iframe>` height prevents booking on rede-expressos. Site changed.
- 352969, Make Opera’s built-in WF2 validation ignore `required` attributes on ingdirect.com.au. Site changed after other browsers implemented `required` attribute too.

## Changes to 12.00 file only

### Added

PATCH-571, live.com: make file names visible. A Core bug fix removed a quirk that unfortunately live.com depends on.

### Removed

- PATCH-536, renren.com — Unicode space like characters should not be converted in `document.title`. Core fix.
- PATCH-506, YouTube: avoid Silverlight uploader. As of Presto/2.10.246 Opera supports XHR2 upload attribute and progress events which should make native uploader available on Google, voiding the need to avoid Silverlight.
- PATCH-497, Avoid focus problems using IME on empty content-editable elements on qq.com. Core fix.
- PATCH-464, Make it possible to type in TomTom route planner. Core fix.
