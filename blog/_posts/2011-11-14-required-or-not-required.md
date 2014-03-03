---
title: Required or Not Required
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-540, Merriam-Webster: override hidden attribute on embed. When we implemented support for the global hidden attribute (basically sets display:none for the element) it conflicted with the old hidden attribute for embeds, causing these not to be played. WebKit has faced the same issue, but opted for special treatment of the embed. We will rather try to follow the spec and patch when required.<br/><br/>PATCH-539, autoblog: hide attachEvent to make images visible. They sniff for attachEvent and send Opera down the IE path.<br/><br/>PATCH-538, Pre-process script to avoid &quot;too deeply nested input&quot; error, internal limits in Opera&#39;s ES engine too low on qq.com.<br/><br/>PATCH-536, renren.com - Unicode space like characters should not be converted in document.title. Core bug where we sanitize the title a bit too much. Will be fixed.<br/><br/>PATCH-534, Bing Maps deadlock on accessing document.cookie from Silverlight.<br/> <br/><span style="font-size: 140%">Removed patches</span><br/>OTW-1909, Barnes&amp;Noble uses &quot;required&quot; attributes on elements that aren&#39;t required<br/>319803, Make Opera&#39;s built-in WF2 validation ignore required attributes on bookryanair.com<br/>305669, The required attribute does not take the value false according to WebForms2<br/><br/>All the above relate to WebForms2 validation. Opera implemented this several years ago and faced some issues as many sites already used custom &quot;required&quot; attributes, causing form submit to fail. This has been discussed in WHATWG etc. and the outcome was that the spec should not change. Now our competitors have also implemented form validation according to spec so most sites have changed their code. If not, the sites should now break equally in other browsers than Opera too, giving more incentive to fix.
