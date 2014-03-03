---
title: Blogger, Blogger, Blogger
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-523, journalism.org: fix old IFrame SSI script.<br/><br/>PATCH-522, wangpiao.com: allow seat selection. window.constructor shouldn&#39;t be Object.<br/><br/>PATCH-521, geforce.com - fix unclickable options on custom select box. Oddity with nested relative/absolute position and z-index. <br/><br/>PATCH-519, xcweather: make sure the preference form is available when running script. Core script scheduling problem.<br/>  <br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-418, Y!Mail Fix inserting links in mail compose screen. Let the patch function return something so further scripts don&#39;t break.<br/><br/>PATCH-505, YouTube: avoid deadlock when changing volume. New function name.<br/><br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-207, Spoofing as Mozilla to get rich text editor makes Blogger assume we support enableObjectResizing<br/>PATCH-206, Don&#39;t override native click() method and expect to submit forms by calling click() on a button on blogger.com<br/>DSK-152851, Blogger: browser detection prevents WYSIWYG editing<br/><br/>The Blogger patch is one of the oldest patches we have. They have recently redesigned the site and will now support Opera without us patching. Yay!<br/>
