Title: First browser to 11 (unless Chrome gets there first)
----
Date: 2010-11-23 22:01:26
----
Author: 
----
Text:

<p>Opera released the beta version of our eleventh desktop browser today. New features unveiled include visual mouse gestures and tab stacking. The latter allows you to place your tabs in stacks to save screen real estate and organise the many tabs you probably have open. So far the feedback has been outstanding. I’m sure you’re not here to learn about the browser features though, or otherwise you’d be on the Spinal Tap inspired <a href="http://www.opera.com/browser/next/">Opera 11 beta product page</a>. What features do we have for the designers and developers I hear you ask? Quite a lot as it happens.</p>

<h3>Extensions</h3>

<p>Opera Extensions have so far been a runaway success with around 20 new extensions being submitted each day by some accounts. Want to know what you’re missing? Check out our <a href="http://dev.opera.com/articles/view/getting-started-with-opera-extensions/">Getting Started with Opera Extensions</a> article for an overview of the technology and what it has to offer. New in the beta release includes <a href="http://dev.opera.com/articles/view/opera-extensions-options-page/">option pages</a> for defining extension preferences, the ability to work on HTTPS connections, and a much improved <a href="http://dev.opera.com/articles/view/opera-extensions-developer-workflow/">developer workflow</a>. Developing Opera Extensions should now be quicker and easier. As extensions use the <a href="http://www.w3.org/TR/widgets/">W3C Widget Packaging and Configuration format</a>, the knowledge you gain can be transferred to other domains such as developing apps using Web technologies.</p>

<h3>Improved CSS3 support</h3>

<p>Opera now supports the full CSS3 Backgrounds and Borders module except the new non-shorthands for <code>border-image</code>. The <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow/#box-decoration-break"><code>box-decoration-break</code></a> property has been added, along with updating the <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow/#background-shorthand"><code>background</code> shorthand</a> to accept <code>background-size</code>, <code>background-origin</code> and <code>background-clip</code>. The overall support for the spec has also been tightened up with a number of bug fixes.</p>

<p>Other CSS changes include support for <code>object-fit</code> and <code>object-position</code> from the <a href="http://dev.w3.org/csswg/css3-images/#object-fit">CSS3 Image Values module</a> (astute readers will note this is the same spec which contains CSS3 Gradients), and the removal of the -o- prefix from the <code>text-overflow</code> property. As part of this work we added support for the experimental <code>-o-ellipsis-lastline</code> value. This hasn&#39;t found a home in any spec yet, but we hope it will as we find it very useful when developing rich UIs. This allows the ellipsis character to be added to multi line blocks when they overflow. Check out the <a href="http://people.opera.com/dstorey/text/text-overflow.html">text-overflow demo</a> in Opera 11 to see what I mean.</p>

<h3>Expanded HTML5 support</h3>

<p>You can’t go five minutes these days without hearing about HTML5, and the Opera 11 beta launch is no different when it comes to showing off fancy new capabilities. New features range from the small and unglamorous (<code>document.head</code> and the <code>HashChangeEvent</code> event object), to hyped features such as Web Sockets, and Web Messaging (the technology that Opera Extensions are built upon). This is even a reintroduction of an old Opera friend with Server-Sent Events having been thoroughly updated to the latest version of the spec. This was originally implemented using an old version of the spec around the time Opera first introduced Web Forms 2. If you want to learn more check out our <a href="http://dev.opera.com/articles/view/introducing-web-sockets/">introduction to Web Sockets article</a>.</p>

<h3>More DOM3</h3>

<p>Opera’s support for DOM3 Events has been updated with support for <a href="http://www.w3.org/TR/DOM-Level-3-Events/#interface-CustomEvent">CustomEvents</a> and <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-event-type-defaultPrevented"><code>defaultPrevented</code></a>. <code>isEqualNode</code> from DOM3 Core has also been added.</p>

<h3>A quick note about Opera Dragonfly</h3>

<p>The ECMAScript service in <a href="http://dragonfly.opera.com/app/scope-interface/">Scope</a> has been improved, which allows <a href="http://dragonfly.opera.com/">Opera Dragonfly</a> to support the Console API amongst other things. The Resource Monitor service is also close to being integrated into Opera Presto (but didn&#39;t quite make it for this beta). Once this is included we will be able to deliver a much improved Network Inspector, which can inspect the bodies of requests (including XHR data and the like). Progress is being made on Opera Dragonfly and the experimental path (<a href="https://dragonfly.opera.com/app/stp-1/experimental/" target="_blank">https://dragonfly.opera.com/app/stp-1/experimental/</a>) has been updated today to the latest code. This introduces improvements the the JavaScript Debugger and Command Line, as well as further refinements to the user interface and context menu support. This should make it easier to discover a number of existing features such as DOM and CSS editing. Links to many specs have also been added. Try right clicking on a CSS property or a DOM Interface for example to see the specification for that feature. This is a work in progress so there will be gremlins and unicorns hiding, and could break at any time. If you are brave check it out and let us know what you think.</p>

<p>We hope you enjoy playing with the new Opera 11 beta features, and if you have any comments or issues we’d love to hear from you.</p>
