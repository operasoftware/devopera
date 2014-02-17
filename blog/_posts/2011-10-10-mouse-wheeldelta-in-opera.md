---
title: 'Mouse wheelDelta in Opera: clearing up some confusion'
authors:
- daniel-davis
tags:
- opera
- javascript
- odin
layout: article
---
<span class='imgright'><img alt='' src='/blog/mouse-wheeldelta-in-opera/mouse-wheelDelta-in-Opera.jpg' /></span> Thanks to increased competition and a greater love for web standards, browser idiosyncracies are currently rarer than ever, however misunderstandings do still remain. On the Web, information never dies, it just gets archived, so there are still chunks of code out there in the ether that won&#39;t work in modern versions of browsers — including Opera of course. One example that I&#39;ve found recently is due to an unfortunate bug in Opera 9.0, which still resonates today.<br/><br/>To be compatible with web pages designed for Internet Explorer (remember those days?), we implemented support for the <i>wheelDelta</i> property, which changed values when the user scrolled using their mouse wheel. Unfortunately, our implementation produced a negative value when scrolling up, whereas in IE scrolling up produced a positive value. This was fixed in 2007 but already it had been spotted and workarounds had been documented by various web developers. For example, Adomas Paltanavicius&#39; <a href="http://www.adomas.org/javascript-mouse-wheel/" target="_blank">detailed explanation and JavaScript mouse wheel code</a> have been very influential to other coders.<br/><br/>With his help, we&#39;d now like to set the record straight and encourage developers not to use specific fixes for Opera&#39;s scroll wheel handling. Adomas has already kindly updated his article so we recommend using his latest script for a reliable, cross-browser solution. If you&#39;re using some other code and are having problems, then <strong>removing</strong> any lines like the following should help keep your Opera users happy!<br/><br/><pre>
// This code should NOT be used
if (window.opera) delta = -delta;
</pre><br/>
