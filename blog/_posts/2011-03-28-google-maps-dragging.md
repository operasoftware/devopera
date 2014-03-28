---
title: Google Maps Dragging
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches



PATCH-393, Google Maps can&#39;t be dragged vertically. As many of you probably noticed (we got a lot of bug reports over the weekend) Google Maps recently broke. A Maps upgrade introduced some ECMAScript that Carakan miscompiles. This patch is a rude stopgap solution until a proper fix can be made. A task with high priority. Thanks to Hallvord and Google representatives for working overtime this weekend to find the cause.

PATCH-391, Fix BestBuy menus, hit-traversal confused by very large positioning values.

## Changed patches



PATCH-387, Make Apple menu visible, apply patch to Store as well.

PATCH-385, Apple.com thinks Opera&#39;s CSS property vendor prefix is o instead of O on JS properties, make it work for slideshow feature as noticed by ouzowtf
