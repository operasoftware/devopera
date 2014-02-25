---
title: Opera Dragonfly alpha 4 snapshot
authors:
- david-storey
tags:
- network-inspector
- dragonfly
layout: post
---
<p>We’ve recently released a snapshot of Opera Dragonfly alpha 4, to coincide with <a href="http://www.opera.com/browser/next/">Opera 10 beta</a>.  One of the biggest usability issues with Opera Dragonfly has been that it did not select the active tab or window.  This meant that the user had to follow a number of steps before they could start debugging.  This was among the top user requests and has now been fixed for Opera 10 and Opera Dragonfly alpha 4.</p>

<p>Along with detecting the active tab, the UI has been improved to make it more intuitive and compact.  In the detached mode all the tabs, windows, panels and widgets that are open (the debugging contexts) are available from a drop down at the top of the Opera Dragonfly window.  In attached mode, where space is more of a premium, the same functionality has been added as a dragonfly button to the left of the detach button.  The settings have been moved to a tab on the main Opera Dragonfly tab bar.  You will notice that the Error Console layout has improved quite a bit, and shows collapsed by default.  This allows you to have a quick overview of all the errors, unless you have so many errors that they scroll out of the viewport, but you are not creating that many errors, right? While the UI has improved since Alpha 3, you&#39;ll notice that the look and feel doesn&#39;t yet match the beautiful new skin created by Jon Hicks for Opera 10. Once the final Opera 10 skin has been finished we hope to start work on making Opera Dragonfly consistent with the skin.</p>

<p>The big new functionality for Opera Dragonfly alpha 4  is the Network Inspector.  This gives an overview of all the resources that were requested by Opera for the active debugging context.  You can break down each request to show the request summary, raw request and the request &amp; response headers.  Each request will show you how long it took to retrieve that resource, along with the total time taken for the whole page.</p>

<p>Although the new features and layout changes will be the most notable changes, there has been a huge amount of bug fixes since the last snapshot as we work towards making Opera Dragonfly more stable and closer to Beta quality.  You can see all the changes by going to the <a href="https://dragonfly.opera.com/app/core-2-2/logs/1090.89585c66ad64.log">change log</a>.</p>

<p>I hope you enjoy the new release of Opera Dragonfly and Opera 10, as we work toward the next release and improving the product further.</p>
