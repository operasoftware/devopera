---
title: Opera Dragonfly 1.1 Beta
authors:
- david-storey
tags:
- dev-tools
- beta
- dragonfly
license: cc-by-3.0
---

<p>We released a candidate for the beta release of Opera Dragonfly 1.1 on the <a href="http://my.opera.com/dragonfly/blog/getting-opera-dragonfly-ready-for-opera-11/#enable">experimental branch</a> today. If all goes well this will move over to the cutting-edge branch in the near future.</p>

<p>The main focus for this build was to fix the most critical bugs left in Opera Dragonfly 1.1. We have also implemented a few new features and updates. This build more or less contains the full feature set for Opera Dragonfly 1.1. We are now entering the release testing phase, and will fix any critical bugs we find before the final stable release.</p>

<h3>New features</h3>

<h4>Search in Resource Inspector</h4>

<img src="{{ page.id }}/Screen%20shot%202011-07-25%20at%2022.01.06.png" alt=" " />

<p>It is now possible to search in the Resource Inspector. This will make it much easier to find issues in the original source. This joins the go to CSS line number feature we added previously to make the Resource Inspector much more robust in this release.</p>

<h3>Updates and changes</h3>

<h4>Error count</h4>

<p>The error count now resets when switching to a new debugging context, such as a new tab. This along with the reintroduction of the clear errors button should help with managing errors in the Error Log.</p>

<h4>Network Inspector updates</h4>

<p>The HTTP profile presets have been updated to match the latest desktop browsers and Opera Mini on iPhone and the Nokia 6330. The latter will help when trying to debug what content your site sends to Opera Mini if you do user agent or mobile detection.</p>

<p>We have added an experimental update to always track request payloads. Feedback on this would be appreciated.</p>

<h4>Search improvements</h4>

<p>A large number of fixes have been applied to the new search feature in Opera Dragonfly 1.1. This should improve stability and improve the matches. We have also added an option in the JavaScript search to ignore injected scripts. With this disabled, browser.js, user.js and injected scripts from extensions are ignored when searching all files. This is useful to make sure the matches are all in the original scripts. For example, when searching for <q>Opera</q>, the results are littered with hits from browser.js, masking the real hits in the site where the browser sniffing is taking place.</p>

<h4>Updated style</h4>

<img src="{{ page.id }}/Screen%20shot%202011-07-25%20at%2022.11.15.png" alt="" />

<p>Some of the icons have been optimised in the application toolbar, and the styling of the expanders in the side panels has been improved. The toolbars under the expanders should now look like they belong to the expander instead of appearing as if they&#39;re visually higher. The Error Log styling has also been updated to match the Resource Inspector and have a more subtle hover style.  The button style in the overlay dialogues have been updated to a new style. The Network Inspector timeline markers have also been improved.</p>
