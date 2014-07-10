---
title: Ready to Wave?
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

With the latest <a href="http://my.opera.com/desktopteam/blog/2010/02/05/skin-fixes-unite-and-then-some" rel="nofollow" target="_blank">snapshot</a> we have killed some more bugs in the new Carakan JS engine, including a couple required to get Google Wave to work. ...

As you know Wave is still under development and they too have bugs and issues. But as mentioned by hallvors <a href="http://my.opera.com/community/forums/findpost.pl?id=3621811" target="_blank">here</a> we have been playing a bit internally and developed a little user.js snippet that makes Wave work in Opera as well.

By work I mean there are still some issues, including layout issues and rich text editing issues, but you can load the page, create waves and reply to them with reasonable success.

So get yourself the latest <a href="http://my.opera.com/desktopteam/blog/2010/02/05/skin-fixes-unite-and-then-some" target="_blank">snapshot</a> and download <a href="http://files.myopera.com/olak/files/gwave.js" target="_blank">this</a> little script into your user javascript folder and play. Note that you need to enable opera:config#UserPrefs|UserJavaScriptonHTTPS for it to work. At your own risk of course :up:

The short version of why you need this script is that Wave stores some state info in the location.hash value. But the browsers do different things for special characters in location.hash, Firefox seems to magically decode when getting, while WebKit browsers and Opera get it as is. And since Opera gets Firefox code path for this particular functionality it causes a number of issues.
