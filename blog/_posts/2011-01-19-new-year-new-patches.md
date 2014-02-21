---
title: New year, new patches
authors:
- olak
tags:
- sitepatching
layout: article
---
Only new patches this time, all for real Opera bugs.<br/><br/><span style="font-size: 140%">Added patches</span><br/><br/>PATCH-371, Prevent repaint issues triggered by specific text-overflow style on Facebook. Avoids <a href="http://my.opera.com/desktopteam/blog/2011/01/17/11-01-snapshot-with-several-crash-fixes?startidx=50#comment52507282" target="_blank">this issue</a> :eyes: Temporary patch for Core bug.<br/><br/>PATCH-370, Avoid overwriting page content on Weborama.ru. An appended script document.writes something from a timeout, overwriting the page. The expected behavior here is specified in HTML5 but Opera hasn&#39;t aligned yet.<br/><br/>PATCH-368, Enable MSDN search with Enter. Opera requires cancelling keypress, not keydown. The good old key-event issue. <br/><br/>PATCH-367, Correct placement of marquee on in.gr. Opera&#39;s marquee implementation makes it a block element, causing an extra line moving the scrolling text down.<br/><br/>PATCH-366, Fix unclickable credit card selection box on PayPal. A layout corner case where an inline child of a positioned floated element may be hidden if the positioning is negative. Corner case or not, this made it impossible to add new credit cards to your PayPal account. Not good.<br/><br/>PATCH-236, no video on nbc.com. Old patch that we disabled for a while since they simplified the browser sniffing. But now the old code is back in a new file thus patch is again needed.
