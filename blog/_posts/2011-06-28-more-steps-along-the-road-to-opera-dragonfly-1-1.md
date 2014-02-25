---
title: More steps along the road to Opera Dragonfly 1.1
authors:
- dstorey
tags:
- developer tools
- Opera Dragonfly 1.1
- dragonfly
layout: post
---
<p>On the day that <a href="http://my.opera.com/chooseopera/blog/2011/06/28/new-opera-version-available-updated-design-speed-dial-extensions-and-a-lot-mor">Opera 11.50</a> was released, we have released another build of Opera Dragonfly 1.1 to the experimental branch. This continues the work with a lot of <a href="https://dragonfly.opera.com/app/stp-1/experimental/logs/4601.b3a9baf012fa.log">bug fixes</a> and a few new features.</p>

<h3>Experimental full panel console</h3>

<p>One common complaint we have had is that we don&#39;t have a JS Console, or that it is too hard to find. We use the standard Esc shortcut, but if you don&#39;t know that (and shortcuts are by default hard to discover) then you need to know to click on the small &gt;_ icon at the top right. We are instead experimenting with having two different modes for the console. The regular mode (opened by pressing Esc or the existing icon) which overlays Opera Dragonfly like a Heads Up Display and a new full panel mode.</p>

<p>The new mode is the last tab on the application toolbar, and it replaces the whole view when activated. If the console HUD is open it will grow to the full size of the panel. This should make it easier to discover, and they both have slightly different use cases. The full screen mode is likely more useful when working full time in the console and the HUD is useful when working in another view and you want to quickly call it up to enter an command and then dismiss it. We’d like to get feedback on if the new mode is useful and you want to keep it, or if the HUD mode is all that is needed. Leave a comment to let us know.</p>

<img src="/blog/more-steps-along-the-road-to-opera-dragonfly/Screen%20shot%202011-06-28%20at%2019.14.09.png" alt="" />

<p>As well as the full panel mode, there have also been some improvements. The main one is that auto-complete (by pressing <kbd>tab</kbd>) now works for built-in JavaScript/DOM objects and functions. This should make the auto-complete a lot more useful. We will also add inline expandable objects in a future build of 1.1.</p>

<p>Related to the full panel console, we’ve also remove console.* messages from the Error Log. This now only show up in the Console. If you like this implementation, or feel like you miss it from the Error Log then also let us know in the comments. Along with that change we have continued to work on implementing the new style Error Log.</p>

<h3>SVG  presentational attributes</h3>

<p>In SVG it is common to include styling information in the markup as attributes rather than CSS. Unlike HTML this is not frowned upon. This creates an issue as the DOM Inspector doesn&#39;t support all the cool features the CSS Inspector does, such as disabling properties, auto-complete, the colour picker and so on. As SVG presentational attributes are the equivalent to the matching CSS properties with a specificity of zero, we have added support in the Style Inspector to show the presentational attributes as just that. you can now use all the features of the Style Inspector even when debugging a SVG file that doesn&#39;t use CSS at all.</p>

<img src="/blog/more-steps-along-the-road-to-opera-dragonfly/Screen%20shot%202011-06-28%20at%2019.07.42.png" alt="" />

<h3>POST data in Network Inspector</h3>

<p>We’re continuing to polish up and fix bugs in the Network Inspector. The big new feature for this build is that we now have an initial implementation of supporting debugging of POST data. This is another feature that a number of you have requested. We will complete support for this before Opera Dragonfly 1.1 goes final</p>

<h3>A new toy in utilities</h3>

<p>The colour picker in Utilities includes a screenshot of the page so that you can pick out the colours. A number of users thought this was a screenshot utility, and indeed it can be useful for that. To make this use case even more useful we have added a screen ruler feature. You can enable this from the Color Picker panel, but we will likely optimise the UI to make it more logical before release. Enabling it will show a screen ruler over the screenshot in the main panel. This can be dragged around the screenshot and resized to measure the number of pixels. This will snap to the pixel when zooming into the screenshot, using the zoom slider or the mouse wheel/trackpad. The scale will match the zoom level so that it is always 1 to 1 pixels. There are some bugs but we will iron those out before release. We already use this feature in the Opera Dragonfly team to zoom into the UI and see the pixels in detail. The new screen ruler will make Opera Dragonfly more powerful for designers and developers who design in the browser.</p>

<img src="/blog/more-steps-along-the-road-to-opera-dragonfly/Screen%20shot%202011-06-28%20at%2019.43.39.png" alt="" />

<p>For the full changes take a look at the <a href="https://dragonfly.opera.com/app/stp-1/experimental/logs/4601.b3a9baf012fa.log">change log</a>. We hope you enjoy the new features and increased stability. Let us know what you think in the comments or on <a href="http://www.twitter.com/">Twitter</a>.</p>

