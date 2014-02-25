---
title: Opera Dragonfly updated for Opera 10.60
authors:
- dstorey
tags:
- performane
- offline
- HTML5
- Opera Dragonfly
- dragonfly
layout: post
---
<p>Those of you who love traveling by trains or planes will enjoy the latest update to Opera Dragonfly. To sync up with the <a href="http://www.opera.com/browser/">Opera 10.60 release</a>, we have added offline support to Opera Dragonfly. We now take advantage of the <a href="http://dev.opera.com/articles/view/offline-applications-html5-appcache/">Application Cache</a> feature (commonly known as AppCache) of HTML5, which has just landed in the desktop browser. This is not the first time we have taken advantage of a feature from the HTML5 family of specifications; we recently used <a href="http://dev.opera.com/articles/view/web-storage/">Web Storage</a> (introduced in Opera 10.50) to save user preferences, such as colours used in the element highlight. The added power of HTML5 JavaScript APIs allow us to get closer to the capabilities of native applications.</p>

<p>We recently launched a survey of developers to find out their needs and wants for a tool such as Opera Dragonfly. The ability to work offline was close to the top of this list, so we are pleased to be able to offer this feature right now. Many of the top requests are already in the pipeline or under active development. Examples of the top requests include:</p>

<ol>
    <li>Enable/Disable CSS rules (Close to completion)</li>
    <li>Improve icons and UI intuitiveness (Design work ongoing)</li>
    <li>Offline support (Implemented)</li>
    <li>Right-click (context menu) support (Planned)</li>
    <li>Firebug Console API (Supported in Scope. Under development in Opera Dragonfly)</li>
    <li>Requests around inspecting bodies of HTTP requests and page resources (Under development)</li>
</ol>

<p>There were of course many more requests and suggestions, and we’ll release a more in depth summary at a latter date. The feature closest to release in the above list is the ability to be able to temporarily disable and enable individual CSS style rules. This was heavily requested, and we hope to get it out on the cutting edge path in the near future.</p>

<p>One big improvement you will see in this release is the speed of the application. This speed increase is achieved two fold. Using AppCache really speeds up the start up time of the application, as well as allowing it to work offline. This will be even more clear in areas with slow network connections. The overall responsiveness has also improved, and there we didn’t have to do so much extra work in the Opera Dragonfly team. Opera Presto, the engine behind the Opera browser is speeding up dramatically in each release, which has a big knock on effect for complex web applications such as Opera Dragonfly. Opera 10.50 concentrated on JavaScript and graphics speed with the introduction of Carakan and Vega. Opera 10.60 improves JavaScript performance even further (up to 50% in some cases), but also concentrates on DOM and selector matching improvements. When inspecting a page with a deep DOM, Opera Dragonfly really has to do a lot of heavy DOM lifting, so those improvements are very welcome. We are not stopping there of course; Opera’s rendering engine will continue to get faster (which Opera Dragonfly will automatically take advantage of) and we plan to optimise the CSS used in Opera Dragonfly while we are developing the upcoming redesign.</p>

<p>As always, let us know what you think, and we hope you enjoy the latest update to Opera Dragonfly.</p>

