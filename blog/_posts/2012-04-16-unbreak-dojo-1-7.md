---
title: Unbreak Dojo 1.7
authors:
- hallvord-steen
tags:
- sitepatching
- ouch
- browser.js
license: cc-by-3.0
---

Hey, Ola was away last week so I get to do a guest post again :) I’ve shipped a small and urgent update for 11.62 only.

## Added patches

PATCH-616 Make `document.attachEvent` extra undefined for Dojo 1.7.x

This is a workaround for CORE-45475, a subtle bug which causes problems for Dojo. An affected page like [this demo][1] caused console errors saying `Uncaught exception: Error: WRONG_THIS_ERR`.

[1]: http://dojotoolkit.org/documentation/tutorials/1.7/hello_dojo/demo/start.html

Dojo says

	has.add("ie-event-behavior", doc.attachEvent && (typeof opera === "undefined" || opera.toString() != "[object Opera]"));

which worked just fine until we tried hiding `document.attachEvent` and introduced a bug: even though `doc.attachEvent` on its own evaluates to false, when the `&&` operator is used the engine will evaluate the second part too and **return the first part** if the second part evaluates to true. The returned function is later called in a way that makes it throw a “wrong this object” type error.

First we noticed this in Dojo demos, and I wasn’t sure if it was a problem on production sites. However, when a user reported [problems loading a local Norwegian bank][2] and the Dojo issue turned out to be the root cause, we whipped up a patch.

[2]: http://my.opera.com/community/forums/topic.dml?id=1358882
