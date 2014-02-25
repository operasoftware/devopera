---
title: Opera Dragonfly 1.1 just launched
authors:
- david-storey
tags:
- developer-tools
- release
- dragonfly
layout: post
---
<p>After a number of release candidates we launched Opera Dragonfly 1.1 today. Around 3 and a half months ago we launched version 1.0 to <a href="http://www.sitepoint.com/opera-dragonfly-1-browser-development-tool/">critical</a> <a href="http://www.webmonkey.com/2011/05/opera-dragonfly-a-worthy-addition-your-web-development-toolkit/">acclaim</a>. We’ve not rested on our laurels since then and have been hard at work responding to feedback, squashing over 200 bugs, adding new features, perfecting existing ones, and polishing the user interface. We believe we now have an even better product, and we’re excited to get it out the door. We look forward to the feedback from web developers and hope it makes their experience developing for Opera smoother.</p>

<img src="/blog/opera-dragonfly-1-1/Screen%20Shot%202011-08-31%20at%2020.37.50.png" alt="" />

<h3>What’s new?</h3>

<p>There are a lot of new and polished features in Opera Dragonfly 1.1.  For full details see the <a href="http://www.opera.com/dragonfly/new/">what’s new</a> section.</p>


<h4>DOM Inspector</h4>

<img src="/blog/opera-dragonfly-1-1/Screen%20Shot%202011-08-31%20at%2020.51.00.png" alt="" />

<p>As part of the general improvements to search in Opera Dragonfly, the DOM Inspector has a new search panel. This offers a number of advanced options such as searching with RegExp, or using CSS selectors or XPath to find elements.</p>

<p>There is now support for pseudo classes and pseudo elements. Pseudo elements can be seen in the DOM and pseudo classes for matching elements can be seen in the Style Inspector. SVG presentation attributes are also now shown in the style inspector so you can use the same debugging features as regular CSS properties. Another enhancement to the style inspector is that the style rules now link to the correct line where it is defined in the original CSS file in the Resource Inspector. This was the main issue users were having with Opera Dragonfly 1.0 so it should make a few users happy.</p>

<h4>JavaScript Debugger</h4>

<p>Like the DOM Inspector, the search feature in the JavaScript Debugger has been vastly improved. The advanced search window has now been removed and it is replaced with a search panel. The option to search in multiple scripts is still present, but now there are additional options to search via RegExp and ignore case. It is also possible to ignore injected scripts when searching in all files.</p>

<h4>Network Inspector</h4>

<p>Another criticism of Opera Dragonfly 1.0 was that it wasn&#39;t possible to inspect POST data. We’ve improved the Network Inspector to support POST and multipart POST. This should make the Network Inspector much more useful.</p>

<h4>Resource Inspector</h4>

<img src="/blog/opera-dragonfly-1-1/Screen%20Shot%202011-08-31%20at%2023.55.42.png" />

<p>We’ve added a search field in the Resource Inspector so that is is possible to find what you are looking for in text based resources. This was another much requested feature that users will hopefully enjoy. The Resource Inspector is also better integrated with the Style Inspector and the Error Log</p>

<h4>Storage Inspector</h4>

The Local Storage, Session Storage and Widgets Preferences panels have been upgraded to the UI used for cookies in Opera Dragonfly 1.0. This is something we ran out of time to implement in the previous version and should make the new version much more consistent.

<h4>Error Log</h4>

<img src="/blog/opera-dragonfly-1-1/Screen%20Shot%202011-08-31%20at%2020.53.34.png" alt="" />

The old Error Log has been ripped out and replaced with a shiny upgraded version. It has quite a few enhancements including:

<ul>
     <li>UI redesign taking up less real estate</li>
     <li>The resource type in  now shown in the overview instead of the severity level</li>
     <li>Error badge matches currently active view rather than all errors</li>
     <li>Less common error types have been merged into an Other panel</li>
     <li>Linked up error line to the Resource line number</li>
     <li>Replaced search with filter</li>
     <li>Removed console.* entries (with option to add back)</li>
     <li>Errors are shown from before Opera Dragonfly was open (Opera 12 only)</li>
</ul>

<p>For those of you still using the native Error Console you might want to try using the Opera Dragonfly version, especially once Opera 12 comes out later this year when Opera Dragonfly will be able to access the errors from before it was opened.</p>

<h4>Console</h4>

<img src="/blog/opera-dragonfly-1-1/Screen%20Shot%202011-08-31%20at%2020.59.42.png" alt="" />

<p>In Opera Dragonfly 1.1 we have added a new full panel version of the Console. This complements the HUD version that is available when pressing <kbd>Esc</kbd>. This version is most useful when working full time in the console, while the HUD is useful when switching quickly between it and another tool.</p>

<p>Other enhancements include auto-complete for native objects, inline expandable objects (another much requested feature) and highlighting <code>console.warn</code>, <code>console.info</code> and <code>console.error</code>. This release should make it much more useful for Console power users.</p>

<h4>Utilities</h4>

<img src="/blog/opera-dragonfly-1-1/Screen%20Shot%202011-09-01%20at%2000.19.24.png" alt="" />

<p>We&#39;ve added a screen ruler to the Utilities. It can be used in the screen shot to measure pixels on both the x and y axis. It snaps to the pixel so it should be useful even when zooming.</p>

<h3>What next?</h3>

<p>We&#39;re really excited about the refinements and new features we&#39;ve added to this release, and we hope developers will like them too. We constantly strive to make Opera Dragonfly better, but most importantly suited to the needs of our end users — so if you have any issues or suggestions, we&#39;d appreciate your <a href="http://www.opera.com/dragonfly/feedback/">feedback about Opera Dragonfly 1.1</a>.</p>
