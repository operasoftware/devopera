---
title: Another experimental preview to test
authors:
- dstorey
tags:
- experimental
- Opera Dragonfly
- dragonfly
layout: article
---
<p>Progress towards Opera Dragonfly 1.0 marches on, and we have a new build on the <a href="http://my.opera.com/dragonfly/blog/getting-opera-dragonfly-ready-for-opera-11/#enable">experimental path</a> for you to try. This build comes with a number of changes:</p>

<h3>Opera Dragonfly Framework</h3>

<img src="/blog/another-experimental-preview-to-test/framework.png" />

<h4>Hybrid layout</h4>

<p>We’ve combined the two previous versions of the panel layout. The side panels retain the original tab layout, while the main panel looses the tabs, as seen in the previous build. However, related side panels have been merged under one tab. An example of this is in Scripts, where the Call Stack and Inspection now sit together. This allows the call stack to still be visible while inspecting the properties in the execution context.</p>

<h4>Unified attached/detached mode</h4>

<p>Attached and detached mode now share the same style and layout. This avoids confusion with the layout changing and allows us to put all energy into perfecting one mode. A detached optimised layout may return in a later version.</p>

<h4>Styling improvements</h4>

<ul>
  <li>Floating window styling</li>
  <li>Updated context menus to a more toned down white theme</li>
  <li>Improved readability of the keyboard bindings preference panel</li>
  <li>Added press state to the Command Line button</li>
</ul>

<h4>Filters</h4>

<p>The Quick Find search fields in the side panels have been changed to act like filters. Searching for a term will filter the views to show only properties that contain the search term.</p>

<h4>Context menus</h4>

<p>Further work has been done to complete the context menu support in the various views. This should improve the discoverability of the editing features, amongst other things.</p>

<h3>Remote Debugging</h3>

<p>The visual feedback has been improved when in remote debug mode. When a connection is established the icon animates to notify the user. When a connection drops or fails, the icon turns red and displays an error message.</p>

<h3>Storage Inspector</h3>

<img src="/blog/another-experimental-preview-to-test/cookies.png" />

There is an entirely new Cookie Inspector which is available for Opera 11 and above. This has a number of improvements over the old service, including:

<ul>
  <li>Expanded information about cookies, including fields for domain, path, secure and http-only</li>
  <li>The cookie list can be sorted and grouped</li>
  <li>Deleting cookies works more consistently</li>
  <li>Fuzzy dates for cookie expiry date</li>
</ul>

<h3>JavaScript Debugger</h3>

<p>Scrolling performance and keyboard accessibility have been improved.</p>

<h3>DOM Inspector</h3>

<p>The styling of the in-page host highlight has been updated.</p>

<h3>Network Inspector</h3>

<p>Work continues on the new version of the network inspector. This is still largely unstyled. New features include:</p>

<ul>
  <li>Added support for showing network details and content bodies</li>
  <li>Added network option to switch on/off content tracking</li>
</ul>

<h3>Resource Inspector</h3>

<img src="/blog/another-experimental-preview-to-test/resources.png" />

<p>A number of updates have been made to the brand new Resource Inspector. These include:</p>

<ul>
  <li>Added missing icon</li>
  <li>Updated styling for resource list and resource meta data</li>
  <li>Ability to group by host or resource type</li>
  <li>Ability to enable and disable columns in the resource list</li>
  <li>Syntax highlighting for JavaScript source</li>
</ul>


<h3>Known issues and missing features</h3>

<p>Some known issues and missing features from this build include:</p>

<ul>
    <li><del>Event breakpoints are missing from the Scripts view</del> (now fixed)</li>
    <li>Network view is mostly unstyled</li>
    <li>Scroll bars and timeline rendering is a bit broken in the Network view</li>
    <li>Only JavaScript files have a customised view in the Resource Inspector at present</li>
    <li>Syntax highlighting in the resource view only works for JavaScript files</li>
    <li>Editing is disabled in the cookie manager</li>
    <li>Both the new and old cookie managers are show</li>
    <li>The colour picker is missing the colour slider image</li>
</ul>
