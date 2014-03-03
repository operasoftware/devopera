---
title: window.event, attachEvent, detachEvent, script.onreadystatechange
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---
We don&#39;t have a file for you this time, but want to highlight the latest 11.62 snapshot over at <a href="http://my.opera.com/desktopteam/blog/2012/02/09/another-11-62-snapshot" target="_blank">Desktopteam blog</a><br/><br/>This build has backported two recent Core changes of some compatibility impact, namely CORE-10115 and CORE-24242. <br/><br/><span style="font-size: 140%">Hiding</span><br/><br/>CORE-10115 performs the same trick we (and other browsers) have had in place for document.all for quite some time, hide it from detection, on window.event and {window,Node}.{attach,detach}Event<br/><br/>These properties were implemented in Opera for IE compat many years ago and have been a pain ever since, as many script do things like<br/><br/><pre>
if(window.attachEvent){
 isIE=true
}
</pre><br/><br/>We tried simply removing the support as a compat experiment <a href="http://my.opera.com/sitepatching/blog/2010/10/19/to-attach-or-to-detach-is-that-the-question" target="_blank">a while ago</a> but then we broke some scripts that first sniffed for Opera, then applied these.<br/><br/>The compromise is to hide them from detection, so that<br/><br/><pre>
if(element.attachEvent){
 //this will NOT run
}else if(element.addEventListener){
 //this will run
}
</pre><br/>but<br/><pre>
element.attachEvent(&#39;click&#39;,function(){//this will still work});
</pre><br/><br/><span style="font-size: 140%">onreadystatechange</span><br/><br/>CORE-24242 aligns onreadystatechange behavior with <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/scripting-1.html#the-script-element" target="_blank">HTML5</a>. Until now, Opera fired these events various places (like script, img elements) for IE compatibility. Again this causes pain and we have been patching issues through browser.js for a long time.<br/><br/>So try this out and look for breakage.
