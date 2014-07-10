---
title: Multi-file search just landed
authors:
- david-storey
tags:
- search
- dragonfly
license: cc-by-3.0
---

<p>We took another step towards the final Opera Dragonfly 1.0 release today, with multi-file search landing on the <a href="http://my.opera.com/dragonfly/blog/getting-opera-dragonfly-ready-for-opera-11/#enable">experimental branch</a>. This is still work in progress, and so will feature bugs and rough edges.</p>

<img src="{{ page.id }}/mult-file-search.png" />

<p>Multi-file search is currently only implemented in the Scripts mode. The search field in the JavaScript debugger and DOM Inspector has been switched to a search button. When this is activated a search toolbar is shown, similar to the one used in the desktop browser. Pressing the <q>more</q> button in the Scripts mode enables advanced search, which allows for the search term to be searched for in all script files. Clicking on the line in the search window will take you to the corresponding line in the source view.</p>

<p>In the screenshot above I’ve searched for all the places <a href="http://www.hbo.com">HBO</a> is detecting Opera, in order to give a very friendly warning to ask Opera users to go away. Multi-file search is an incredibly useful tool for our QA department to analyse such issues quickly, but it can also be very useful when debugging your own projects.</p>

<p>There are a number of optimisations left to do, such as remembering the search term between the search toolbar and search window, and visual refinements.</p>

<p>Meanwhile work continues on the rest of the application, and this snapshot reflects the current state of each mode. These are under heavy development so will contain buggy behaviour and missing features.</p>

