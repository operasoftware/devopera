---
title: Further progress on Opera Dragonfly 1.1
authors:
- david-storey
tags:
- developer-tools
- dragonfly
license: cc-by-3.0
layout: post
---

<p>We have made some refinements to the first preview of Opera Dragonfly 1.1, which we released on the experimental branch today. These include polishing the new search feature, and further updates to the Error Log.</p>

<h3>Search</h3>

<img src="/blog/further-progress-on-opera-dragonfly-1-1/Screen%20shot%202011-06-21%20at%2023.11.17.png" alt="" />

<p>We have polished the look of the previous and next icons, improved the search highlight colours, and changed the search behaviour to optimise space and performance. We’ve moved the search match and number of hits to a badge inside the search field, instead of a status bar at the bottom of the view, and we have limited the number of search matches that are shown. Due to performance reasons, if you do a search for a short search term with thousands of matches it can freeze or slow down the UI when using the JavaScript search. To avoid this, we&#39;ve limited the number of results that can be shown to 1,000. This will guard against locking up the browser, and you will mostly only run into this issue when you search for a too vague search term, such as a one letter search term. You can increase the number of matches shown in the settings, under the Scripts tab.</p>

<h3>Error Log</h3>

<img src="/blog/further-progress-on-opera-dragonfly-1-1/Screen%20shot%202011-06-21%20at%2023.51.48.png" alt="" />

<p>We&#39;ve updated the Error log to optimise the layout and display of error messages. Each error message should now be more compact. For the &quot;All&quot; tab, we have replaced the severity icon with the type of error, such as JavaScript, CSS, or Storage. We will use the severity icon in the filtered views for the individual error types, although that is not implemented yet. We also now show the context of where the error occurs, such as in a CSS style sheet, HTML style attribute, or the JavaScript event thread, etc.</p>

<h3>Coming soon</h3>

<p>Support for opening the CSS file at the correct line number from the Style Inspector style rule  will come very soon. We will hopefully have another build this week with this enabled.</p>


