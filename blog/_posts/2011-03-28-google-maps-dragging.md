---
title: Google Maps dragging
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-393, Google Maps can&#39;t be dragged vertically. As many of you probably noticed (we got a lot of bug reports over the weekend) Google Maps recently broke. A Maps upgrade introduced some ECMAScript that Carakan miscompiles. This patch is a rude stopgap solution until a proper fix can be made. A task with high priority. Thanks to Hallvord and Google representatives for working overtime this weekend to find the cause.<br/><br/>PATCH-391, Fix BestBuy menus, hit-traversal confused by very large positioning values.<br/> <br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-387, Make Apple menu visible, apply patch to Store as well.<br/><br/>PATCH-385, Apple.com thinks Opera&#39;s CSS property vendor prefix is o instead of O on JS properties, make it work for slideshow feature as noticed by ouzowtf
