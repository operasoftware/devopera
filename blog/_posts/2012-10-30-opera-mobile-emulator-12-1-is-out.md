---
title: Opera Mobile Emulator 12.1 is out
authors:
- andreasbovens
tags:
- Opera Mobile Emulator
- Opera Mobile
- emulator
- mobile
- blog
layout: article
---
<p>Opera Mobile Emulator is a fine tool for creating and testing responsive web designs, as explained in my recent <a href="http://mobile.smashingmagazine.com/2012/08/30/responsive-designs-opera-mobile-emulator/">Smashing Magazine article</a>. So it&#39;s my pleasure to announce that, today, we&#39;ve released version 12.1 of our <a href="http://www.opera.com/developer/tools/mobile/">Opera Mobile Emulator</a> for Mac, Windows and Linux!</p>

<p>This release brings the emulator in sync with our <a href="https://play.google.com/store/apps/details?id=com.opera.browser&amp;hl=en">Opera Mobile 12.1 for Android release</a> in early October: the same <a href="http://www.opera.com/docs/specs/productspecs/">standards support</a> and feature set of course, but there is more:</p>
<ul>
<li>A wide selection of new profile presets in the Profile Selector, representing a selection of common Android phones.</li>
<li>The Profile Selector now comes with a UA string dropdown, allowing you to set a UA string before launching the browser.</li>
<li>The Window Scale dropdown allows you to launch an Opera Mobile instance at e.g. 50% of its original size: this makes sure the instance fits comfortably inside your laptop monitor, while at the same time preserving reported screen height, width and <code>devicePixelRatio</code>.</li>
<li>Opera Mobile Emulator can now also talk to our browser automation library, OperaDriver. OperaDriver is an implementation of the <a href="http://dvcs.w3.org/hg/webdriver/raw-file/tip/webdriver-spec.html">W3C WebDriver specification</a> and part of the free software web testing framework <a href="http://seleniumhq.org/">Selenium</a>. Support for OperaDriver was first introduced in a <a href="http://dev.opera.com/articles/view/introducing-mobile-browser-automation/">Labs release of the Opera Mobile Emulator</a> back in August, but this is now part of the 12.1 release.</li>
</ul>

<p>Also note that you can use all the <a href="http://my.opera.com/dragonfly/blog/">recent additions to Opera Dragonfly</a> with Opera Mobile Emulator, by activating Opera Dragonfly&#39;s <a href="http://www.opera.com/dragonfly/documentation/remote/">remote debugging feature</a>, opening <code>opera:debug</code> in Opera Mobile Emulator and clicking the Connect button.</p>

<img src="http://files.myopera.com/andreasbovens/blog/debugging.png" alt="Debugging Opera Mobile Emulator with Opera Dragonfly" style="clear: left;" />

<p>For a full overview of all input modes, launch arguments, shortcuts and other power user settings, check out our <a href="http://dev.opera.com/articles/view/opera-mobile-emulator/">extensive guide on Dev.Opera</a>.</p>
