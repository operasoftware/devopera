---
title: Opera Dragonfly 1.0 RC
authors:
- david-storey
tags:
- dragonfly
license: cc-by-3.0
layout: post
---

<img src="{{ page.id }}/test1.png" alt="" />

<p>The final release of Opera Dragonfly 1.0 is edging ever closer. We pushed the Release Candidate (RC) to the <a href="http://my.opera.com/dragonfly/blog/getting-opera-dragonfly-ready-for-opera-11/#enable">experimental branch</a> today (well really yesterday, but who is counting a few hours?).</p>

<p>All being well, the RC will be what is released on the default path as Opera Dragonfly 1.0. We’re now intensively testing this release with the RC of Opera 11.10. If the build passes testing without any show stoppers it will go golden in the near future. We believe this version is a huge improvement on Opera Dragonfly Alpha, which is the version the majority of our user base are currently using. We hope those users will be pleasantly surprised by the improvements, and will find it even more useful. We’ve implemented the vast majority of the most common requests in the recent user survey we did, and have improved the discoverability of those features which many users missed.</p>

<img src="{{ page.id }}/Screen%20shot%202011-04-12%20at%2002.52.33.png" alt="" />

<p>For those users that have been following the progress of the latest version, the final version is mostly a polished version of the recent beta release. The UI has been cleaned up and optimised, including a number of new icons. The Network and Resource Inspectors in particular have received a lot of polish, and the colour picker in Utilities has undergone a redesign. The associated colour palette is now integrated with the floating colour picker. The element highlight customisation has also been simplified and uses the colour picker for selecting the highlight colour. Selecting multiple elements should also be improved.</p>

<img src="{{ page.id }}/Screen%20shot%202011-04-12%20at%2003.07.38.png" alt="" />

<p>The UI strings have now been reviewed and should be more self explanatory. This will hopefully make the features easier to understand. It was fairly difficult to understand the icons for the status codes in the Network Inspector, so these have now been replaced with the actual codes themselves. If you are not well versed in HTTP status codes you can hover the code to see the description. Cached resources, such as 304s and those that didn&#39;t even contact the network are highlighted with a grey background behind the status code.</p>

<img src="{{ page.id }}/Screen%20shot%202011-04-12%20at%2002.56.28.png" alt="" />

<p>Changes to the Resource Inspector include syntax highlighting for CSS resources, and a preview for font resources. The font preview is editable, so you can try out adding any glyph you want to see for the font in question. The Resource Inspector is now hooked up to other views.  Errors, links to style sheets in the Style Inspector and links to resources in the DOM Inspector will now open the resource in the Resource Inspector.</p>

<p>One change in functionality is that breakpoints are now deleted when clicking on an existing breakpoint in the gutter. They can still be disabled using the right click menu, or the breakpoints panel. All breakpoint related icons have also been updated and polished.</p>

<p>The final release if Opera Dragonfly 1.0 gives us a strong base on while to build. We feel it is a competitive release with many of the features expected in modern debuggers, such as watches and conditional breakpoints. We will build upon these strong foundations to add many innovative features above what we have already implemented. We will also work towards optimising and polishing existing features to improve their consistency, ease of use and functionality. We hope to make each tool in Opera Dragonfly the best in the business. Now that a stable foundation is in place we should be able to have shorter release cycles, improving each feature in turn.</p>

<p>We hope you enjoy Opera Dragonfly 1.0 once it is released and that it helps you in your day to day development needs.</p>
