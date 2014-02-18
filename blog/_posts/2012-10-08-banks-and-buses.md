---
title: Banks and buses
authors:
- olak
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-911, Y!finance: delay script to load comments. Our old friend run-script-before-element-is-ready.<br/><br/>PATCH-910, 2012tokyo: avoid inline-block wrapping.<br/><br/>PATCH-905, rememberthemilk.com: adapt to Opera 12.10&#39;s more compliant key event code. The site has very thorough branching for various user agents (probably did a lot of testing), but then Opera changes something fundamental and all bets are off. And in this case there wasn&#39;t really any way to futureproof the code via feature detection.<br/><br/>PATCH-902, ingdirect.com: avoid browser blocking. This is accompanied by a downloaded site preference.<br/><br/>PATCH-901, finanzas.com: work around generated content abuse. body{content:&quot;&quot;}<br/><br/>PATCH-895, directbus.com.mx: avoid freezing Flash on frontpage.<br/><br/>PATCH-706, myharmony.com - work around browser blocking.<br/><br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-823, img.complete must be false while loading a .js file. Core fix in 12.10.<br/><br/>PATCH-741, Avoid an Opera pushState() and URL resolution bug that breaks navigation on help.adobe.com. Core fix in 12.10.<br/><br/>PATCH-736, Work around browser sniffing that hides Spain&#39;s stock exchange&#39;s menu. Site changed.<br/><br/>PATCH-676, RegExp parsing exception confuses Dojo, breaks BMO.com interface. Core fix in 12.10.<br/><br/>PATCH-514, paper.li: allow clicking headers despite lack of pointer-events. Site changed.<br/><br/>DSK-263826, Y!Mail Keyboard navigation of autocomplete menu fails. Core fix in 12.10.
