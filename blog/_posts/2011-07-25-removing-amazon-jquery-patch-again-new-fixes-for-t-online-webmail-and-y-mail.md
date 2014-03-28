---
title: Removing Amazon jQuery Patch Again, New Fixes for T-Online Webmail and Y!Mail
authors:
- hallvord-steen
tags:
- sitepatching
- update
- amazon
- ymail
license: cc-by-3.0
layout: post
---

Hi, while Ola is still away on vacation, I’ve just signed a set of new browser.js files. The main reason to get them out quickly is to pull the patch that adds jQuery on Amazon pages, because while it fixes some problems it seems to cause others..

## Changelog

### Added

- PATCH-461 Unexpected blur events breaks CKEditor menus. This is a workaround for a bug specific to Opera 11.11 — see [http://dev.ckeditor.com/ticket/7882][1].
- PATCH-459 Prevent Asus browser sniffing from breaking support site software download (added for .tw site which doesn’t yet have the fix .com has)
- PATCH-460 Prevent hidden text when composing long e-mails on Yahoo mail
- PATCH-457 Prevent double Google Maps init on tripadvisor.com (caused by support for both script.onreadystatechange and script.onload, we should probably stop supporting the former)
- PATCH-458 Indicate loading state while a form submit is in progress, fixes attachment upload on T-Online webmail. I have described the problem in an [E-mail to the public-html list][2], but there is not yet any feedback on whether HTML5 should change to specify what the site relies on.

### Removed

- CORE-17497 Opera doesn’t support `col-resize` and `row-resize` cursors (Hotmail) — fixed in core
- PATCH-225 Can not scroll to see all messages in inbox if list is taller than 32767px (Yahoo mail) — core fix
- OTW-492 Yahoo ISP portal blocks Opera users. Seems this is not a problem anymore. Thanks to My Opera user Words for helping me test this.
- PATCH-451 Add jQuery to Amazon pages. We will kill the general “add jQuery on Amazon” patch (for now) as some users report problems. I guess we may try to ship more specific patches for the pages where the problems are most severe while we wait for Amazon updates…
- PATCH-362 Prevent Asus browser sniffing from breaking support site software download (.com site, fixed)
- PATCH-286 Avoid throwing JS errors on Hangame.co.jp from CSS hacks (site fixed)

[1]: http://dev.ckeditor.com/ticket/7882
[2]: http://lists.w3.org/Archives/Public/public-html/2011Jul/0199.html
