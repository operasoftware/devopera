---
title: Opera Dragonfly alpha for Presto 2.5
authors:
- david-storey
tags:
- stp1
- opera-10.5
- presto
- dragonfly
license: cc-by-3.0
---

<p><a href="https://www.opera.com/browser/">Opera 10.50</a> has been released as a final version, which brings with it a new rendering engine — Opera Presto 2.5 — and a new version of <a href="http://dragonfly.opera.com/">Opera Dragonfly</a>, featuring some important new features and fixes. In this post I will take you through these Dragonfly updates.</p>

<p>The biggest change is an upgrade to the <a href="http://dragonfly.opera.com/app/scope-interface/scope-transport-protocol.html">STP/1 version of Scope</a>. This, combined with Carakan, Vega and other speed optimisations in Presto, make Opera Dragonfly noticeably faster, giving us a solid foundation to build more features on to in the future.</p>

<p>Next, Opera Dragonfly now includes the initial implementation of a storage inspector. The initial implementation supports inspecting cookies and Web Storage data (<a href="http://dev.w3.org/html5/webstorage/#the-localstorage-attribute">localStorage</a> and <a href="http://dev.w3.org/html5/webstorage/#the-sessionstorage-attribute">sessionStorage</a> — for more details on these, read Shwetank&#39;s <a href="https://dev.opera.com/articles/view/web-storage/">Web Storage</a> article).
The storage inspector shows the currently stored data, along with the option of creating, deleting or editing a record. This feature will also eventually allow for the inspection of <a href="http://dev.w3.org/html5/webdatabase/">Web SQL Databases</a>, which is also supported in Opera Presto 2.5.</p>

<p>The next major new feature is the colour picker. This is the first tool in the new utilities panel. The feature zooms the area of the page under the mouse pointer and reports the colour value in three different formats: HSL, RGB and Hex. The area and scale of the magnification can be customised, and the colour returned can be the exact pixel selected or an average of the surrounding pixels. Once the colour is selected, it can be stored (using localStorage) for later use. This can be handy for creating colour palettes of commonly used colours.</p>

<p>It is also worth pointing out the new element highlight again, as Opera 10.50 is the first desktop browser to support this feature. The metrics are highlighted on the page in the element highlight. Hovering the different parts of the box model in the Layout panel of the DOM inspector changes the highlight focus. Multiple elements can be highlighted by enabling the button labelled <q>draw a border on to selected elements</q> in the DOM panel’s toolbar. Once this is enabled each element that is clicked on retains a light highlight and border, similar to the hover highlight. This can be useful for testing how elements align.</p>
