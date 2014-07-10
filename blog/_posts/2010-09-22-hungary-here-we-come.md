---
title: Hungary, Here We Come
authors:
- hallvord-steen
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches



PATCH-301, <strong>Disable browser blocking on freemail.hu</strong>

The Opera usage statistics for Hungary have long been an anomaly in a region with generally high Opera usage: while we&#39;ve been pretty popular in all neighbouring countries, in Hungary Opera&#39;s usage share has been much lower. Apparently, being blocked by <a href="http://www.freemail.hu" target="_blank">Freemail.hu</a> is one of the main reasons. This patch will give users access to the full version of their site, and everything I tested (while switching back and forth between the Freemail window and <a href="http://translate.google.com" target="_blank">Google Translate</a> to understand what I was testing) appeared to work fine.

There is a remaining issue with HTTPS certificates - a CA that signs many bank certificates in Hungary doesn&#39;t have a root certificate installed with Opera. That is something we can not fix with site patching, but there is some ongoing work that hopefully will solve it.

<strong>Hungary, here we come</strong> - do try Opera again. And apologies that the way this patch is written made it impossible to sneak in any <a href="http://en.wikipedia.org/wiki/Hungarian_notation" target="_blank">Hungarian notation</a> in it ;)

## Changed patches



PATCH-298 <strong>HTMLArea RTE sniffer workaround + script load order fix</strong>.

This patch should now deal with most instances of the old HTMLArea rich text editor script.

225374/231082,  <strong>video problems on T-online.de</strong> - apply to different domains since they&#39;ve moved.

PATCH-285, <strong>Enable log-in button on Cambrian bank</strong> - more elegant patch that hides Element.all instead of changing the UA-string

PATCH-256, <strong>Non-flash uploader on Google Docs</strong> - apply to all of Google Docs to enable image upload (previously only on documents section). The problem is that they cancel the default action of a mousedown event on the file input. In Opera, this will prevent opening the &quot;select file&quot; dialog box. A core fix is pending, meanwhile the patch will make sure that Opera never fires any mousedown event on a file input on docs.google.com.

PATCH-30, <strong>MSNBC sniffing hides Flash content</strong> - domain is now under MSN umbrella. Thanks to <a href="http://my.opera.com/d4rkn1ght/" target="_blank">d4rkn1ght</a> for <a href="http://my.opera.com/hallvors/blog/show.dml/17638162#comment41092552" target="_blank">pointing out</a> that the patch was broken.

## Removed patches



PATCH-236, <strong>Make NBC videos work</strong> - <a href="http://my.opera.com/hallvors/blog/2010/09/20/improve-browser-sniffing-nbc" target="_blank">site removed sniffing</a>

PATCH-156, <strong>Clicks blocked on stylenanda.co.kr</strong> - site redesigned
