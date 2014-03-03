---
title: First preview of Opera Dragonfly 1.1
authors:
- david-storey
tags:
- dragonfly
license: cc-by-3.0
layout: post
---

<p>Since Opera Dragonfly 1.0 was released we have been hard at work preparing the first point release. We are hoping to deliver this before the Oslo summer vacation period. The first fruits of this labour are available on the experimental path. If you are using Opera Next you will automatically get this version. If you are using the stable Opera version you will have to switch to this version manually. I recommend that you use <a href="http://my.opera.com/desktopteam/blog/2011/06/14/happy-tuesday">a recent Opera 11.50 build</a> to be able to test out the new features.</p>

<h3>New features and improvements</h3>

<p>It doesn’t seem like a long time since the previous release, but we’ve already packed in a number of improvements that we hope you will enjoy. These are work in progress so they may be unstyled, buggy, or not work at all. As we are releasing these features to allow you to experiment, we may change how these features work depending on feedback and how  they feel to use in practice.</p>

<h4>Upgraded search capabilities</h4>

<p>We had an initial implementation of advanced multi-file search in Opera Dragonfly 1.0. We have replaced this with a much more powerful search feature for both DOM and JavaScript in Opera Dragonfly 1.1. The search feature has now moved to its own sidebar panel, and includes a number of advanced options. The styling is not complete yet, so although the next and previous buttons do work, they will be displayed rather strangely.</p>

<h5>DOM search</h5>

<p>The DOM search now searches all nodes, even if they are collapsed in the DOM view. This was requested by a large number of users, so we expect to see some dancing in the streets. We have also provided the functionality to allow you to search using either plain text (as in the previous version), regular expressions, CSS selectors, or XPath expressions. You can also ignore case when searching. The results will be shown in the side panel. Hovering over the results will highlight it in the page if visible, and clicking on it will take you to the element in the DOM view.</p>

<h5>JavaScript search</h5>

<p>JavaScript search is similar to DOM, except allows for searching via regular expressions or ignoring case. It is also possible to search in all files as in the previous advanced search. Every line will be shown in the side panel that has a hit that matches the search query, along with its line number. Cycling through the results will highlight the match in that line.  When clicking on a search result it will scroll the source view to display the match, switching JavaScript files if needed. The match will be highlighted in the source file until you scroll the view. </p>

<h4>Pseudo elements and classes</h4>

<p>One limitation of Opera Dragonfly’s DOM inspector is that pseudo elements and some pseudo classes can not be displayed in the DOM or style inspector. This has now been fixed in 1.1. </p>

<h5>Pseudo classes</h5>

<p>Previously pseudo classes only showed in the style inspector if it matched when selecting the element. For example <code>:hover</code> would only show if you hovered the element when clicking in the page. It would not show if you clicked on the same element in the DOM view (and thus the element was not hovered). Now there is a drop down button in the styles section (currently without icon – this will be fixed for final) where you can enable which pseudo classes you want to see. If the option is enabled you will see the style rules that use that pseudo class. These can be disabled to avoid cluttering the view. The <code>::selection</code> pseudo element can also be found in this menu, as it is somewhat special, as it can wrap many (partial) elements.</p>

<h5>Pseudo elements</h5>

<p>Pseudo elements could not be seen at all previously. Styles such as <code>before</code> and <code>after</code>, or <code>first-letter</code> were not visible at all, meaning debugging was a pain. Now the pseudo element will be displayed in the DOM and the matching rules will show in the style inspector when the pseudo element is selected. This is a really nice feature that I’ve wanted for quite a while, so I’m excited it is now included. As an example, try selected the drop cap in the second column of my <a href="http://people.opera.com/dstorey/newspaper-finished.html">Web Fonts Newspaper example</a>. You should see something like the following:</p>

<img src="/blog/first-preview-of-opera-dragonfly-1-1/Screen%20shot%202011-06-14%20at%2022.02.40.png" alt="" />

<h4>Upgraded Web Storage and Widget Preferences panels</h4>

<p>Opera Dragonfly 1.0 used two different styles for the Storage Inspector. The cookie inspector used the new layout and Web Storage used the older style. Now Web Storage and Widget Preferences have been fully modernised to be consistent with the cookie inspector. Try going to Remy Sharp’s <a href="http://html5demos.com/storage">Web Storage</a> demo and give it a spin.</p>

<h4>Restyled Error Log and Console</h4>

<p>The Error Log has been given a facelift to optimise the layout. Each entry is tidier and takes up less space than the old version. The Console has been improved to avoid showing <code>console.log</code> messages twice, and to give visual emphasis to <code>warn</code>, <code>info</code> and <code>error</code>. The line numbers are also now shown in a more consistent manor with the rest of the application.</p>

<img src="/blog/irst-preview-of-opera-dragonfly-1-1/Screen%20shot%202011-06-14%20at%2022.37.37.png" alt="" />

<h3>Bug, bugs and more bugs</h3>

<p>We fixed the most critical P1 bugs for Opera Dragonfly, but there are always more to fix. We’ve prioritised the most important bugs and are in the process of working our way through them. A large number have already been squashed, and we have more in progress. Opera Dragonfly 1.1 should be more stable, leaner, and faster than the previous version. We’ve been hard at work testing and optimising the selectors used in Opera Dragonfly to improve the performance as much as possible. Just one stray slow selector in an app like Opera Dragonfly can have drastic effects on performance and responsiveness.</p>

<h3>Change log</h3>

<p>All the bug fixes and feature commits can be found in the <a href="http://dragonfly.opera.com/app/stp-1/experimental/logs/4527.61da8f1362ff.log">commit log</a>.

<h3>More to come</h3>

<p>As well as more bug fixes, we will announce new features as they are ready. One such feature that will likely make it will be CSS line numbers for rules in the Style Inspector. That has just landed in Opera Presto and the Opera Dragonfly side should make it in time for the next release. This has probably been the most requested feature since Opera Dragonfly 1.0 was released.</p>

<p>I hope you enjoy playing with this release, and I’ll let you know when we have our next update on experimental.</p>




</p>
