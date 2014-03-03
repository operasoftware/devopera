---
title: Facebook Again, Web.de
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-604, Facebook API: work around iframe load event issue. This one is active in 11.62 and later (versions with hidden attachEvent support). There is a race condition happening with appendChild, about:blank iframes and immediate navigation of said iframe.<br/><br/>Reported at <a href="https://github.com/operasoftware/browserjs/issues/1" target="_blank">https://github.com/operasoftware/browserjs/issues/1</a><br/><br/>PATCH-603, GoogleTV: fix broken word spacing - Core bug with text-align: justify;<br/><br/>PATCH-581, Make getUserMedia() scripts written according to current spec work. Our implementation is not quite in sync with the spec right now, so to make spec-compliant demos work we fake support for window.URL.createObjectURL. Will soon be obsolete.<br/> <br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-576, facebook API, make sure load event is sent when expected. This one is active along with the hiding of attachEvent patch for Opera 11.61 and older.<br/> <br/><span style="font-size: 140%">Removed patches</span><br/><br/>PATCH-586, web.de: hide browser upgrade message. Site changed.<br/>
