---
title: More Experiments
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

As discussed in a <a href="http://my.opera.com/sitepatching/blog/2010/10/19/to-attach-or-to-detach-is-that-the-question" target="_blank">previous post</a> supporting everything and the kitchen sink isn&#39;t always for the best.

With a small experimental update to the browser.js for Opera 11 we are taking it a bit further, disabling support for another two things that causes compatibility issues in Opera from time to time.

**Update 2:** new file released 2010-11-16.

PATCH-328 is also now disabled, so CKEditor should be back working. Overall this was a very successful experiment, so there may be more of similar nature in the future. We will not be able to remove HTMLElement.all for now, but the goal is still to remove it at some point in the future.

PATCH-313 (disables attachEvent/detachEvent) and PATCH-331 (disables Element.removeNode) are still active, as we have not seen any feedback that they break anything so far.

**Update:** new file released 2010-11-11.

PATCH-329 caused some breakage as you found and Hallvord explained below. PATCH-329 has therefore been changed to only apply on shimano.com for now.

<s>PATCH-328 removes HTMLElement.all. In IE and current Opera you can get a HTMLCollection with all children of the specified element. Like document.all, but limited to a subtree. However, we have not been able to be completely compatible with IE in which elements are included and this has caused some issues. Since Gecko and WebKit don&#39;t support this either it is probably safe to remove but we do it through browser.js first to see if it breaks anything.</s>

<s>PATCH-329 removes Node.document. This is another IE+Opera thing. All elements have a .document that points to the parent document (same as ownerDocument) Again, Gecko and WebKit don&#39;t have this and it causes issues on sites.</s>

PATCH-331 removes support for Element.removeNode. Yet another IE+Opera thing. Also it works in a slightly unintuitive way and in Opera it has caused clashes with the flowjs library.

Some sites fixed by this:

<s><a href="http://www.cambrian.mb.ca/" target="_blank">Cambrian bank</a></s>
<s><a href="http://www.sony.ua" target="_blank">Sony.ua</a> (product description popup)</s>
<a href="http://www.shimano.com/" target="_blank">Shimano</a> (main menu)
<s><a href="http://www.glow.co.uk/bicygnal-indicators.html" target="_blank">glow.co.uk</a></s>
<a href="http://www.southparkstuidos.com/" target="_blank">Southpark Studios</a> (overlapping episode descriptions)

<s>Can you find any that break?</s>
Can you find any more that break?
