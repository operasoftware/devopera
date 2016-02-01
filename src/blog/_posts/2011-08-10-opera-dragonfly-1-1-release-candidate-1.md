---
title: Opera Dragonfly 1.1 release candidate 1
authors:
- david-storey
tags:
- dev-tools
- release-candidate
- dragonfly
license: cc-by-3.0
---

<p>We have just released the release candidate of Opera Dragonfly 1.1 on the cutting-edge (coming soon) and <a href="http://my.opera.com/dragonfly/blog/getting-opera-dragonfly-ready-for-opera-11/#enable">experimental paths</a>. This will be the build that will be pushed to the default path unless we find any P1 bugs during the final testing and cooling down phase. Work will then switch to feature development on Opera Dragonfly 1.2, including features such as a profiler and collapsing to shorthands in the CSS Inspector.</p>

<h3>New features and enhancements since the last snapshot</h3>

<p>The search feature in the Resource Inspector has been upgraded to match the search field in the DOM Inspector and JavaScript debugger.  This includes the navigation buttons and badge to highlight the current and total matches. The search has also been removed from resource types that do not have textual content, such as fonts and images.</p>

<p>The UI continues its makeover and refinement. The toolbars have lost their high gloss look, making them blend better with the rest of the UI. The buttons have been improved so they look like they have been engraved into the toolbar. The general smoked glass overlay style has been tweaked and polished to give it better contrast and emphasis, and the syntax highlighting for the Console has been improved. </p>

<img src="{{ page.id }}/Screen%20shot%202011-08-10%20at%2020.28.42.png" alt="" />


<p>Along with those changes, a large number of bugs have been fixed, including all P1 bugs targeted at this release.</p>

<h3>Features added since Opera Dragonfly 1.0</h3>

<h4>DOM and Style Inspector 1.1</h4>
<ul>
	<li>Search via regex, <abbr>CSS</abbr> selectors, XPath, and text</li>
	<li>Link back from a style declaration to its declaration in the <abbr>CSS</abbr> source file</li>
	<li>Show style declarations for pseudo-classes and pseudo-elements</li>
	<li>SVG presentational attributes in Style Inspector</li>
</ul>

<h4>Storage Inspector 1.1</h4>

<ul>
	<li>Upgrade Local Storage, Session Storage and Widgets Preferences to the new Cookie UI</li>
</ul>

<h4>Console 1.1</h4>

<ul>
	<li>Full panel Console</li>
	<li>Auto-complete for JS/DOM built-ins</li>
	<li>Inline expandable Objects</li>
	<li>Highlight console.warn, info and error</li>
</ul>

<h4>Error Log 1.1</h4>

<ul>
	<li>UI redesign taking up less real estate</li>
	<li>Show resource type in overview instead of severity level</li>
	<li>Error badge matches currently active view</li>
	<li>Merged less common error types into an Other panel</li>
	<li>Link up error line to the Resource line number</li>
	<li>Replace search with filter</li>
	<li>Remove console.* entries (with option to add back)</li>
	<li>Show errors from before DFL was open (Opera 12 only)</li>
</ul>

<h4>Network Inspector 1.1</h4>

<ul>
	<li>Inspect POST data</li>
	<li>Performance improvements</li>
</ul>

<h4>Resource Inspector 1.1</h4>

<ul>
	<li>Link up line numbers with Error Log and CSS Inspector</li>
	<li>Search</li>
</ul>

<h4>Utilities 1.1</h4>

<ul>
	<li>2D Screen Ruler</li>
</ul>
