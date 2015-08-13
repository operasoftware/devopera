---
title: window.event, attachEvent, detachEvent, script.onreadystatechange
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

We don’t have a file for you this time, but want to highlight the latest 11.62 snapshot over at [Desktopteam blog][1]

[1]: http://my.opera.com/desktopteam/blog/2012/02/09/another-11-62-snapshot

This build has backported two recent Core changes of some compatibility impact, namely CORE-10115 and CORE-24242.

## Hiding

CORE-10115 performs the same trick we (and other browsers) have had in place for `document.all` for quite some time, hide it from detection, on `window.event` and `{window,Node}.{attach,detach}Event`

These properties were implemented in Opera for IE compat many years ago and have been a pain ever since, as many script do things like

	if(window.attachEvent){
		isIE=true
	}

We tried simply removing the support as a compat experiment [a while ago][2] but then we broke some scripts that first sniffed for Opera, then applied these.

[2]: http://my.opera.com/sitepatching/blog/2010/10/19/to-attach-or-to-detach-is-that-the-question

The compromise is to hide them from detection, so that

	if(element.attachEvent){
		// this will NOT run
	}else if(element.addEventListener){
		// this will run
	}

but

	element.attachEvent('click', function(){
		//this will still work
	});

## onreadystatechange

CORE-24242 aligns `onreadystatechange` behavior with [HTML5][3]. Until now, Opera fired these events various places (like `<script>`, `<img>` elements) for IE compatibility. Again this causes pain and we have been patching issues through browser.js for a long time.

[3]: https://html.spec.whatwg.org/multipage/scripting-1.html#the-script-element

So try this out and look for breakage.
