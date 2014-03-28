---
title: 'Browser.js for 10.5: The Giant Cleanup — Stage 2'
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## 2010-04-08 update

After the Easter test period most of the changes below are now live, both for 10.10 and 10.50. We discovered that the TinyMCE patch was missing a piece for the view source functionality. This has been corrected. In addition the following changes were done:

Added PATCH-223 <a href="http://www.nationalgeographic.com/" target="_blank">nationalgeographic.com</a> menus broken - thanks to <a href="http://my.opera.com/community/forums/topic.dml?id=497451" target="_blank">valeksandrov</a> for patch.

Added PATCH-221 append browser.js version info to <a href="https://bugs.opera.com/wizard/" target="_blank">https://bugs.opera.com/wizard/</a> - this can be useful info for us sometimes.

Removed teletekst.nos.nl patch - keyboard input not possible (site changed)

## /update

We have done some more cleaning (me) and rewriting (Hallvord) of patches. Some changes are quite big, thus this new file will only be served to 10.52 snapshot for now, to enable a little more testing before it is unleashed.

## New patches

Missing scrollbar on very tall pages patch applied to fotki.com, livejournal.com, ncbi.nlm.nih.gov, mail.ru, oper.ru, github.com, lovdata.no (thanks to FataL for <a href="http://my.opera.com/community/forums/findpost.pl?id=4701231" target="_blank">list</a>)

<a href="http://avalanche.nhl.com/" target="_blank">nhl.com</a> expanding sections content issue

## Changed patches



<a href="http://social.microsoft.com" target="_blank">Microsoft forums</a> editor patch should apply to more domains (thanks rseiler) Rewrote the TinyMCE2.x patch

<a href="http://mail.live.com" target="_blank">Hotmail</a> patches reorganized and rewritten - please let us know if anything is broken.

## Removed patches

After popular demand fakeOncontextmenu patch is finally disabled, since there is support in core now. Thanks for nagging fearphage :) <a href="http://kevinroth.com/rte/demo.htm" target="_blank">Kevin Roth RTE</a> - used to fail due to document.all detection, but since that is cloaked now it is no longer an issue.
news.aol.com gallery popups - the new domain is aolnews.com and the popups seem to work now after the redesign. Please let us know if we are wrong.
<a href="http://mail.yahoo.com" target="_blank">Y!Mail</a> disabled several sub patches

- can&#39;t get past new features screen - site changed
- can&#39;t close dialogs due to WF2 &quot;action&quot; attribute (core fix)
- JS error dialogs popping up -documentElement not defined on XML nodes (core fix)
- autocomplete fails (core fix)
- disable oncontextmenu patch (core fix)

<a href="http://www.lgmobile.com" target="_blank">lgmobile.com</a> missing flash - site changed

<a href="http://qzone.qq.com" target="_blank">qq.com</a> login - site changed

<a href="" target="_blank">Legoland</a> missing content (core fix)

<a href="http://anz.com" target="_blank">anz.com</a> and <a href="http://icicibank.com" target="_blank">icicibank.com</a> login form didn&#39;t work due to action attribute encoding issue (core fix)

<a href="http://aol.com" target="_blank">AOL</a> browser sniffing blocked Opera (site changed)

Lenovo driver download fails due to html comments in javascript source (Carakan handles this better)

<a href="http://n-gage.com" target="_blank">n-gage.com</a> missing Flash content on Mac (site changed)

<a href="http://pogo.com" target="_blank">pogo.com</a> java detection - Opera now use Java plugin2 in 10.50, patch still active for older Operas. There is another issue that causes some games to fail loading, this unfortunately doesn&#39;t seem to be patchable.

<a href="http://sfile.ydy.com" target="_blank">ydy.com</a> missing comments - now redirects to 46.com, problem not apparent there

<a href="http://video.nbc.com" target="_blank">nbc.com</a> missing videos. URL changed so patch doesn&#39;t apply. Still no videos though, due to browser sniffing. May have to patch this in a different way.

<a href="http://www.westjet.com" target="_blank">westjet.com</a> infinite reload due to browser sniffing (site redesigned)

<a href="http://zdnet.com.com" target="_blank">ZDnet</a> missing videos - url is now just zdnet.com and site redesigned to use flash video player instead of Windows Media Player.
