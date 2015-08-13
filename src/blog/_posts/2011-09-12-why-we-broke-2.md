---
title: Why We Broke BBC’s iPlayer Site
authors:
- hallvord-steen
tags:
- sitepatching
- ouch
license: cc-by-3.0
---

Site patching isn’t risk-free. It’s pretty powerful to be able to rewrite scripts and websites, and while we try to use it really carefully, things can go wrong. [Very wrong][1]. We now know that a patch [added back in June][2] recently broke BBC’s iPlayer site completely.

[1]: http://twitter.com/RobTaylor84/statuses/113266572717600768
[2]: http://my.opera.com/sitepatching/blog/2011/06/06/apple-core-fixes

The reason we patched in the first place, was that Opera had a bug that broke something a previous iteration of iPlayer was doing.

The underlying bug is that if you through the DOM append a `<script>` tag loading an external script, Opera’s parser will pause until that script has loaded. Other browsers continue parsing up until some random time when the external script loads and runs. Hence Opera, unlike other browsers, does not let that external script see elements that are later in the source than the script that created the external script.

The way this bug manifested itself on the BBC iPlayer site was described as follows:

> There is code in the `<head>` of the document to add external scripts, and when they have loaded trigger among other things `setBGUIDCookie()`. However, the `prependTo('body')` call will fail if the parsing has not reached the body element.

As this was an Opera bug and not a site bug, we tried to push out a minor workaround while waiting for the big, complicated rewrite that will fix it properly. Script loading issues are, however, pretty hard to work around. So, we shipped something that would fake the response to document.getElementsByTagName() if you call it with the argument `body` before the `<body>` element exists in the DOM:

	document.getElementsByTagName = function(n){
		var elms=getElementsByTagName.call(this, n);
		if(elms.length==0 && n=='body') return [document.documentElement];
		return elms;
	}

This resolved the “Add To Favourites does not work at BBC Iplayer” problem back in June. I even thought it was simple, elegant and relatively safe at the time.

Fast forward, and we meet the updated jQuery version’s interesting feature detection code. They create an element for testing various things, add it to the document, do the gymnastics required and remove it again. If document.body exists, their test element will be a DIV, if not they create a BODY element. Because we pretended BODY exists, they would create a DIV element, append it before the HEAD element and do the odd stuff — for example setting innerHTML to a string of table markup. Hey, here’s another obscure Opera bug: if you try to create a table with innerHTML on an element outside BODY, the table simply disappears. So jQuery broke in a fundamental way, and probably knocked out most of iPlayer’s JS-based functionality. :awww:

This patch is of course removed from the upcoming browser.js release, and we’d like to sincerely apologise to the BBC developers for causing this problem.
