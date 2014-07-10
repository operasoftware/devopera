---
title: Banks and Buses
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-911, Y!finance: delay script to load comments. Our old friend run-script-before-element-is-ready.
- PATCH-910, 2012tokyo: avoid inline-block wrapping.
- PATCH-905, rememberthemilk.com: adapt to Opera 12.10’s more compliant key event code. The site has very thorough branching for various user agents (probably did a lot of testing), but then Opera changes something fundamental and all bets are off. And in this case there wasn’t really any way to futureproof the code via feature detection.
- PATCH-902, ingdirect.com: avoid browser blocking. This is accompanied by a downloaded site preference.
- PATCH-901, finanzas.com: work around generated content abuse `body{content:''}`
- PATCH-895, directbus.com.mx: avoid freezing Flash on frontpage.
- PATCH-706, myharmony.com — work around browser blocking.

## Removed patches

- PATCH-823, img.complete must be false while loading a .js file. Core fix in 12.10.
- PATCH-741, Avoid an Opera `pushState()` and URL resolution bug that breaks navigation on help.adobe.com. Core fix in 12.10.
- PATCH-736, Work around browser sniffing that hides Spain’s stock exchange’s menu. Site changed.
- PATCH-676, RegExp parsing exception confuses Dojo, breaks BMO.com interface. Core fix in 12.10.
- PATCH-514, paper.li: allow clicking headers despite lack of pointer-events. Site changed.
- DSK-263826, Y!Mail Keyboard navigation of autocomplete menu fails. Core fix in 12.10.
