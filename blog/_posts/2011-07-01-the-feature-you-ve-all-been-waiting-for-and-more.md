---
title: The feature you’ve all been waiting for and more
authors:
- david-storey
tags:
- developer-tools
- dragonfly
layout: post
---
<p>Another new build has been pushed to experimental today. This has a number of bug fixes and new features, including one many people have been waiting for.</p>

<h3>Go to CSS line number</h3>

<p>The ability to go to the line that a CSS rule is defined from the CSS Inspector is probably in the top 1 or 2 requests for features that did not make it into Opera Dragonfly 1.0. We now have an initial implementation of that feature. Each CSS rule in the CSS Inspector includes the file in which it was defined and the line number. If you click on that link it will open the original CSS file in the Resource Inspector, and will highlight that line. Currently if the file is already open it will still create a new tab with the same file. This will be fixed before the final version of 1.1, along with support for highlighting the line when clicking errors in the Error Log.</p>

<img src="/blog/the-feature-you-ve-all-been-waiting-for-and-more/Screen%20shot%202011-07-01%20at%2018.14.20.png" alt="" />

<h3>Improved POST support</h3>

<p>In the previous build we added support from being able to see POST requests in the Network Inspector. We have improved this to add support for multipart (such as when doing file upload), JSON, XML, and text payloads. This should make network debugging much easier now.</p>

<h3>Filtering in the Error Log</h3>

<p>We’ve continued working on the Error Log, and are in the process of switching out the search field for a filter. The initial work is included in this build. The filter should be more useful as it removes all the errors that do not match the filter term. We are starting to give the Error Log the love it deserves now as Opera Dragonfly matures.</p>

<img src="/blog/the-feature-you-ve-all-been-waiting-for-and-more/Screen%20shot%202011-07-01%20at%2018.32.48.png" alt="" />


