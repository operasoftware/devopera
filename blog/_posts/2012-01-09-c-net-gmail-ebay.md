---
title: C|net, GMail, Ebay
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-567, Improve scrolling performance on cnet. Opera&#39;s scrolling performance sucks when using box-shadow in combination with fixed position elements. This patch is ugly and basically kills box-shadow on cnet. Sorry about that, but it makes the site possible to use at least.<br/><br/>PATCH-566, Improve scrolling performance on GMail. Vaguely related to the above - GMail has a workaround for an old Opera bug (since fixed) that involves fixed position elements. With their new design this hurts performance. This patch improves performance somewhat, still not great though. We&#39;re working on it in Core, but is it not an easy fix.<br/><br/>PATCH-565, ebay: make sign in buttons accessible with spatial navigation. Core bug where negative margin + positive padding causes the focus to never reach the button.<br/><br/>PATCH-563, aol.fr: give Opera better styling. Browser sniffing.<br/> <br/><span style="font-size: 140%">Changed patches</span><br/>TinyMCE patch to avoid iframe error message<br/><br/>PATCH-6 - Maconomy, make sure all subframes get unload event when removing parent frameset.<br/> <br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-533, Add jQuery to Amazon At A Glance page (we&#39;re now masking)<br/>PATCH-489, Add jQuery to Amazon product page (we&#39;re now masking)<br/>PATCH-483, Add jQuery to Amazon Shopping Basket page (we&#39;re now masking)<br/>PATCH-481, Add jQuery to Amazon offer-listing pages (we&#39;re now masking)<br/><br/>PATCH-294, Hide extra button text on weather.com (site changed)
