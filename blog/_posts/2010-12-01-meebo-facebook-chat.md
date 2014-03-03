---
title: Meebo, Facebook Chat
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---
The blog has been quiet for some time as we digested the outcome of the big experiments. Now we&#39;re back with some nice normal fixes.<br/><br/><span style="font-size: 140%">Added patches</span><br/>PATCH-441, Meebo tries to use detachEvent to remove listeners added with addEventListener due to inversed feature detection in their ui.detachEvent method. Causes the contact list to be stuck to the cursor after resizing. This patch is for 10.6, as the generic attach/detachEvent patch in 11-file takes care of it for O11.<br/><br/>PATCH-339, prevent Facebook chat from loosing focus when a new message arrives. They use a plug-in to play a sound and this plug-in grabs focus when the sound it played. This patch grabs focus back to the previously active element (chat box). This has later been fixed in Core, so this patch is active only for 10.6x.<br/><br/>PATCH-338, If XHR doesn&#39;t support EventTarget interface, setting onload should throw. jcrew.com &quot;add to cart&quot; functionality doesn&#39;t work.<br/><br/>PATCH-336, Block a change event that makes Opera reset select element to default value on sj.se. Changing ticket type was impossible. This has been fixed in later Core so patch is for 10.6x only.<br/> <br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-321, Work around pre inheritance into tables on Google Code. Improved patch a bit to better preserve indentation.
