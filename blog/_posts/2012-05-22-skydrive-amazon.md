---
title: Skydrive, Amazon ++
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
PATCH-657, skydrive: disable new upload code (thanks to burnout426) due to various Opera bugs as discussed in comments for previous post. Note that this should make it possible to upload/download files, but editing is still very much broken - due to browser sniffing. This patch is for 11.6x only, in the hopes that we&#39;ll get our act together and fix the issues properly in 12.<br/><br/>PATCH-656, Fix disabled buttons on KDDI Customer Support page. Sniffing.<br/><br/>PATCH-653, allegro.pl: cache plugin properties to avoid performance impact from short interval. Site has a 1ms interval that queries plugin properties. With the OOPPlugins in 12 this is slowing down the browser. Need to look into optimizing that, but for now deploy patch. 12.xx only.<br/><br/>PATCH-652, Fix displaying recommended items in Amazon. Missing onload for image inserted with innerHTML to element not part of document tree.<br/><br/>PATCH-651, jcpenney: avoid broken sniffer.<br/><br/>PATCH-650, Fix search suggestions on Goo search engine. Assumes IE based on currentStyle detection.<br/><br/>PATCH-649, Enable keyboard controls on Mapion. Browser sniffing.
