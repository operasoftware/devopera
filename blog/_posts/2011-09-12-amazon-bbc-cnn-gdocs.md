---
title: Amazon, BBC, CNN, ++
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-490, CNN: avoid plugin-triggered `document.cookie` setting script deadlock bug. Same patch as slideshare.net and ted.com. 11.xx only, fixed in 12.
- PATCH-489, Add jQuery to Amazon product page
- PATCH-485, Add jQuery to Amazon Prime page
- PATCH-483, Add jQuery to Amazon Shopping Basket page
- PATCH-481, Add jQuery to Amazon offer-listing pages Amazon fails to include content when the browser is Opera. In particular jQuery is often missing, causing lack of functionality. We tried patching this in a generic way earlier this year, but it had unwanted side effects. This time we try to handle problem by problem. These four patches do not fix every missing functionality on Amazon, but it is a first step.
- PATCH-488, Fake paste event to make Facebook show preview immediately after pasting links in status. This patch works when using Ctrl V, not when pasting from context menu.
- PATCH-487, Fix smiley insertion in mail and blog editor on myspace.com. While doing some manual testing last week, Hallvord stumbled across this issue. He searched our bug tracker for known issues but couldn’t find any, so a new bug was reported. I knew I had seen this before and a quick search returned the exact same issue, reported by Hallvord himself last year. Eager to avoid this, Hallvord decided to patch it immediately. Why didn’t he find the original issue? “+myspace +smiley” doesn’t match “myspace smileys”. Urgh. Anyway, the bug is about stacking of iframes and related mouse events.
- PATCH-482, Delay `mousedown` event on Flash file upload to make sure Flash sees it on docs.google.com. The Flash file uploader is moved in the DOM upon mousedown. This causes the mouse event not to reach Flash in the expected way, making file upload fail. All browsers handle this differently, so we’ll see what to do.
- PATCH-480, IME input invisible and does not trigger Google Suggest due to missing events. While composing IME strings Opera doesn’t send any events to the page, thus the page remains unupdated and content is invisible.
- PATCH-479, Avoid unintentional XHR `abort()` calls on capital.gr. Opera returns status 0 if `xhr.readyState` is 2, while it should return the actual status code.
- PATCH-478, Fix annotations and advance to next video on YouTube leanback. Opera as the only browser throws an error when setting `className` attribute of SVGElement.

## Changed patches

PATCH-327, HierMenus additional check.

## Removed patches

- PATCH-426, Add to favourites fails on BBC iPlayer because of script loading/parsing timing issue. Site changed. Removing this makes Iplayer work again. See also [http://my.opera.com/sitepatching/blog/2011/09/12/why-we-broke-2][1] Apologies to BBC.
- PATCH-401, Avoid scrollbar on FBI. Core fix in 12.
- PATCH-394, Hide browser warning on summitonthesummit. Site changed.
- PATCH-318, Fix misplaced highlights on Centamap. Core fix in 12.
- PATCH-241, Make menus visible on news.naver.com. Core fix in 12.
- PATCH-229, Hidden form causes non-clickable button, prevents profile image selection on orkut. Core fix in 12.

[1]: http://my.opera.com/sitepatching/blog/2011/09/12/why-we-broke-2
