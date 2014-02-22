---
title: Updated Web Fonts Support in Opera 10.5 Snapshot Build
authors:
- andreas-bovens
tags:
- opera-10
- web-fonts
- font-face
- odin
layout: post
---
<p>Back when Opera 10 came out on September 1st last year, <a href="http://dev.opera.com/articles/view/the-opera-10-experience/#webfontsissue">we wrote</a> that, while Opera had <code>@font-face</code> support, specifying different weights and styles for a single font-family name was not working: only the last font specified (typically an italic/bold variant) would be applied, thereby overriding other weights and styles of that font family.</p>
<p>Fixing this issue took us a bit longer than originally expected (ahem), but I&#39;m happy to announce that a much improved Web Fonts implementation has landed in the <a href="http://my.opera.com/desktopteam/blog/continued-stabilization">latest Opera 10.5 snapshot</a>!</p>
<p>You can see the result for yourself by loading <a href="http://opentype.info/demo/webfontdemo.html">this fine Web Font demo</a> in Opera 10.10 and compare it with <a href="http://my.opera.com/desktopteam/blog/continued-stabilization">today&#39;s 10.5 snapshot</a>: all showcases now work as intended. Also pages like <a href="http://www.princexml.com/howcome/2008/webfonts/inel.html">this classic example</a> now don&#39;t need the occasional refresh before they are displayed correctly.</p>
<p>Feel free to share your Web Fonts based design in the comments! And of course, in case you find a bug, please report it via our <a href="https://bugs.opera.com/wizard/">Bug Wizard</a>.</p>
