---
title: To Attach or to Detach, Is That the Question?
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

A bit of a mixed release this time. Some additions and some removals. However, the important part of this release is a small patch with huge potential impact. In PATCH-313 Hallvord has disabled attachEvent and detachEvent in the file for 10.70/11.00.

browser.js makes for a great testbed for such things, as it can very easily be reversed and we can target specific versions, in this case snapshot builds for a future release.

For some time we have seen compatibility issues because Opera supports both addEventListener and attachEvent. In some cases this causes scripts to be run twice, in other cases attachEvent is simply used as an IE-detector, causing Opera to run the wrong codepath or get IE-only stylesheets or other bad things.

As a consequence we are considering removing support for attachEvent/detachEvent. However, this is a big change that needs to be tested thoroughly.

We have been testing some internally with this disabled without finding anything really bad. But no one is better at finding broken stuff than our real users subjecting the product to every quirk of the web. So if you find that something is broken or working better than before due to this please submit a bug or add a comment below.

## Added patches



PATCH-314, <a href="http://www.pacificare.com/" target="_blank">PacifiCare</a> doctor finder blocks Opera. Work around sniffing.

PATCH-313, Experimentally disable IE event model to watch compatibility impact. 10.70/11.00 only.

PATCH-312, Prevent double values submitted from SELECT elements on booking.com. This is a Core regression that we are working around short term. 10.70/11.00 only.

PATCH-310, JIT bug breaks apply with empty array, use call instead. Fixes <a href="http://kartor.eniro.se" target="_blank">eniro.se</a> Limited to 10.50/10.60 since this has been fixed in later Core versions.

## Changed patches



PATCH-294, Hide extra button text on weather.com - updated to catch more cases. Thanks to <a href="http://my.opera.com/squillaz/" target="_blank">squillaz</a> for noticing.
PATCH-138, Asia-region Generic Patches, update conditionals to catch more cases

## Removed patches



PATCH-258, Opera forgets to send load event to nested FRAMESET, Banco de Chile blank after login. Disabled for 10.70/11.00 since there is a Core fix.

PATCH-224, Opera forgets to send load event to nested FRAMESET, Bank Hapoalim blank after login. Disabled for 10.70/11.00 since there is a Core fix. Yes, same as above. Don&#39;t know what it is about banks and framesets ;)

PATCH-256, Non-flash uploader on Google Docs. Disabled for 10.70/11.00 since there is a Core fix.

PATCH-246, Work around layout freeze on ajaxian.com - site changed

PATCH-222, JavaScript hang when trying to read iframe attributes on mail.qq.com. Disabled for 10.70/11.00 since there is a Core fix.
