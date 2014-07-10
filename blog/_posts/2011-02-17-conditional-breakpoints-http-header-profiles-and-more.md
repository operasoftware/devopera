---
title: Conditional Breakpoints, HTTP header profiles and more
authors:
- david-storey
tags:
- conditional-breakpoints
- dragonfly
license: cc-by-3.0
layout: post
---

<img src="{{ page.id }}/conditional.png" alt="" />

<p>We have another build for you on the experimental branch of Opera Dragonfly. This build contains all of the features we are targeting for the Opera Dragonfly 1.0 release. We now move to the polishing and bug fixing phase. Critical bugs will be fixed, and the UI and features will be polished to look and feel consistently across the application. Extra features will only be considered if they are critical to improve the usability, or we magically find time before the final release date (i.e. don’t count on it). New feature development will start up again once Opera Dragonfly 1.0 is released.</p>

<p>It is also worth pointing out that this build is <strong>buggy</strong>, but we wanted to release it to show the progress and let you try out the new features.</p>

<h3>Conditional Breakpoints and the Breakpoints panel</h3>

<p>We’ve implemented a breakpoint management panel next to the state panel in the JavaScript Debugger. This replaces and integrates the previous Event Breakpoints panel.  When adding a breakpoint (such as a line breakpoint by clicking in the gutter of the source view or by adding an event breakpoint), it will be added to the Breakpoints panel. For line breakpoints this will list the JS file name, line number and the contents of the line. For event breakpoints it will list the event name. A checkbox next to the entry allows you to enable or disable the breakpoint. It is possible to delete and disable all breakpoints using the buttons on the Breakpoints toolbar.</p>

<p>It is now possible to add a break condition to the breakpoints. For example you could set a condition so it only breaks at a line if <code>foo &gt; bar</code>, or add a condition to an event breakpoint to break if the event fires on an element with a certain ID, such as <code>event.target.id == &quot;foo&quot;</code>. If the condition matches it will break otherwise it will skip the breakpoint and continue. You can add a condition by right clicking on the breakpoint and selecting <q>Add condition</q> from the context menu.  You can edit it using the <q>Edit breakpoint</q> context menu option. As you can imagine, this gives you a lot more power and efficiency when debugging your site or application.</p>

<h3>Additional methods to add watches</h3>

<p>In the previous build you had to type the expression to be watched manually. It is now possible to highlight the code you want to watch in the JavaScript source and select <q>add &quot;<em>foo</em> to watches</q>. It is also possible to add a watch for a property directly from the Inspection section of the State panel, or in the Properties panel in the DOM Inspector in the same way.</p>

<h3>Preset HTTP header profiles</h3>

<p>We&#39;ve expanded the HTTP header override feature to add support for presets. The current build just contains dummy data, but it will be possible to select a user agent from the dropdown list. This will set the HTTP header overrides in the Network Options to use the default headers used by that user agent. We will add a number of options such as various desktop, mobile and device browsers, and perhaps search engine bots. This makes the process of spoofing as a different browser or user agent much easier. It will give you an idea if the code you send to Firefox 4 for example will work fine in Opera, or check what code you send to a mobile browser. Let us know in the comments if there are any specific user agents you would find useful for debugging your pages.</p>

<h3>Breadcrumb trail toolbar position, and other UI adjustments</h3>

<img src="{{ page.id }}/breadcrumbs.png" alt="" />

<p>We have had requests to give the option to allow the breadcrumb trail to be positioned at the bottom of the window, like the previous version of Opera Dragonfly. There have also been reports that Opera Dragonfly now takes up more space than the previous version. The number of pixels taken up by the chrome is actually less than the previous version, but as it is stacked at the top of the window it can visually look bigger. We’re experimenting in this build with moving the breadcrumbs toolbar to the bottom of the window. We request your feedback on this to see which you prefer.</p>

<p>We’ve also made some other UI adjustments which are in progress, such as moving the badges on the main panel selector buttons to the top right, and other small details.</p>

<p>We hope you find the new features useful, and we look forward to polishing them up to a shine and shipping the first major release of Opera Dragonfly. Let us know what you think in the comments.</p>
