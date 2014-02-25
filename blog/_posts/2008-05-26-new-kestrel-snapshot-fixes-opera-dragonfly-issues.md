---
title: New Kestrel snapshot fixes Opera Dragonfly issues
authors:
- david-storey
tags:
- kestrel
- accessibility
- aria
- css3
- svg
- dragonfly
layout: post
---
<p>The weekly snapshot of <a href="http://my.opera.com/desktopteam/blog/2008/05/23/a-lighter-ev">Opera Kestrel</a> included a few fixes to bugs that caused issues in Opera Dragonfly.  The most prominent one of these is that persistent cache should now work in Opera Dragonfly, enabling offline mode to work as it was designed.  This should make Opera Dragonfly much more useful.</p>

<p>Another bug that has been fixed, and should be coming soon, is that Opera Dragonfly will be useable even when JavaScript is turned off.  Once this fix lands, it will be possible to debug how your web page or application works without JavaScript</p>

<p>In further news, we are doing our best to try to squeeze the single windowed docked mode into Opera Dragonfly alpha 2.  This hopefully wont delay what we&#39;ve already planned for the second alpha.  It wont be the final solution, as we need to do some interaction design work on how it will work differently to the separate window solution.  As there is less space to work with, it will likely be more optimal to have a different view.  The initial work will likely just make it work in that view, and test out the functionality given to use from the Desktop team.</p>

<p>In a post alpha 2 release, we hope to redesign and optimise the UI somewhat, and work on keyboard accessibility.  The ground work for the later has already began.  I&#39;ve been reading up on <a href="http://www.w3.org/WAI/intro/aria">WAI-ARIA</a>, and it looks like something we can put to good use.  As well as making controls accessible to assistive technology, it should make our keyboard navigation work more like a native application for those controls.  There are a number of roles for components that stand out instantly as useful for Opera Dragonfly, including <code>tree</code>, and <code>treeitem</code> for the DOM source code tree, <code>toolbar</code>, <code>button</code>, <code>search</code> and perhaps <code>checkbox</code> for the toolbars, <code>tabpanel</code> for the tabs, <code>breadcrumbs</code> for the DOM path and so on.  It looks like ARIA should be something that isn&#39;t too difficult to learn or apply.</p>

<p>One of the great things about developing Opera Dragonfly in Web technologies (except being a useful exercise in finding Opera bugs), is that we can design only for the Web standards provided by the Core-2.1/Opera 9.5 platform.  Opera has one of the most advanced support for Web standards in the industry, and we don&#39;t have to care if they are supported yet in another browser.  I&#39;m specifically talking about Web standards here, not vendor only solutions, that will cause lock-in.  We can use Opera Dragonfly as a showcase of what is possible with the likes of accessibility on the Web.  My next mission is to try to get the team to use SVG images in the interface.  With SVG we can make the backgrounds of buttons as a reusable element (styleable through CSS SVG profile), use a CSS sprite to reduce the HTTP traffic, and zip as SVGZ to reduce the file size even further than what  SVG would already give you.  SVG will also allow the button styles to be programatically changed.  An example could be detecting the platform and changing the button shapes or colours accordingly.  This is not something we&#39;ve planned yet, but is certainly something that is possible when we don&#39;t have to care about IE.</p>
