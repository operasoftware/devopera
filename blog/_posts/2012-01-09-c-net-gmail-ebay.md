---
title: C|net, GMail, Ebay
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-567, Improve scrolling performance on cnet. Opera’s scrolling performance sucks when using box-shadow in combination with fixed position elements. This patch is ugly and basically kills box-shadow on cnet. Sorry about that, but it makes the site possible to use at least.
- PATCH-566, Improve scrolling performance on GMail. Vaguely related to the above — GMail has a workaround for an old Opera bug (since fixed) that involves fixed position elements. With their new design this hurts performance. This patch improves performance somewhat, still not great though. We’re working on it in Core, but is it not an easy fix.
- PATCH-565, ebay: make sign in buttons accessible with spatial navigation. Core bug where negative margin + positive padding causes the focus to never reach the button.
- PATCH-563, aol.fr: give Opera better styling. Browser sniffing.

## Changed patches

- TinyMCE patch to avoid iframe error message
- PATCH-6 — Maconomy, make sure all subframes get unload event when removing parent frameset.

## Removed patches

- PATCH-533, Add jQuery to Amazon At A Glance page (we’re now masking)
- PATCH-489, Add jQuery to Amazon product page (we’re now masking)
- PATCH-483, Add jQuery to Amazon Shopping Basket page (we’re now masking)
- PATCH-481, Add jQuery to Amazon offer-listing pages (we’re now masking)
- PATCH-294, Hide extra button text on weather.com (site changed)
