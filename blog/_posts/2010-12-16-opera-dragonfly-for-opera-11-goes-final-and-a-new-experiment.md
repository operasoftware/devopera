---
title: Opera Dragonfly for Opera 11 goes final, and a new experiment
authors:
- david-storey
tags:
- experimental
- opera-11
- dragonfly
layout: post
---
<p>With today’s <a href="http://www.opera.com/browser/">release of Opera 11</a>, we have pushed the <a href="http://my.opera.com/dragonfly/blog/2010/12/03/getting-opera-dragonfly-ready-for-opera-11">corresponding Opera Dragonfly version</a> to the default path. This means Opera 11 users will get this version automatically.</p>

<p>Will this release out of the way, full Opera Dragonfly resources can be spent working towards the first stable release in the new year. We have pushed the current state of this work to the /experimental/ path (check the previous blog post for details on how to enable this) for you to try out. As well as work in progress, it includes a couple of experiments to try to gauge what the correct behaviour should be.</p>

<h3>New features in progress: Network and Resources</h3>

<p>The first thing you may notice is the new resource inspector mode in the top level toolbar. We’ve decided to split the resource inspector from the network inspector, as the use case and quite possibly even the target use is different. The network inspector will be optimised towards monitoring Network/HTTP traffic, while the resource inspector will collate and present all the resources used in the current page/app, including the original HTML and CSS files (the Documents mode on the other hand shows the documents after they&#39;ve been parsed by Opera and the DOM has been manipulated). In the resource inspector for example, you will be able to see all the images or fonts used on the page. This work is heavily in progress and has yet to be styled, as you can probably tell. It will be much more refined, with more features once it is in beta or final quality. The good news is that it now provides access to the request bodies, which is something that has been requested for quite a while. This should make debugging XHR much easier than before. This is the key feature we want to have finished before we can call Opera Dragonfly a beta quality product, along with the polishing of the new UI.</p>

<h4>Network Inspector updates</h4>

<ul>
    <li>Improved data accuracy due to getting more data directly from Scope</li>
    <li>Displays HTTP request and response bodies (not visible yet in the current build) </li>
    <li>Options to clear cache, disable cache and override HTTP headers</li>
    <li>Craft new raw requests</li>
</ul>

<h4>Resource Inspector</h4>

<ul>
    <li>List of all resources that make up the page or application being debugged</li>
    <li>Detail view for each resource, with custom view for each known resource type (image preview or code view for example)</li>
</ul>

<p>As mentioned these are at an early stage and are a work in progress so they may break or fail to work entirely.</p>
<h3>Experimental changes</h3>

<p>We have made some experimental changes to gauge your feedback. Comments are most welcome on this changes:</p>

<h4>Tabs Vs. Extenders</h4>

<p>Opera Dragonfly currently uses tabs to separate each panel in the UI. In the Documents side panel for example there are three tabs: Styles, Properties and Layout. The advantage is that each can be accessed easily without scrolling,and there is a constant hit target to access the features. The disadvantage is it adds a while extra toolbar row to the UI. The Command Line and Style Sheets panels will be removed, so both the Documents and Scripts modes will only have one tab for the main panel. This wastes a lot of space and adds visual clutter. We are experimenting here to see what works best, or could go with a different approach entirely.</p>

<h4>Smart printing of Objects Vs. Interface name</h4>

<p>If you open the command line in the stable Opera Dragonfly (Found in the REPL tab under Scripts) and type <kbd>document.body</kbd> (tip: press tab to autocomplete) it will return something like <samp>HTMLBodyElement</samp>. This is a clickable link to the corresponding element in the DOM view. This does not give too much information, but is consistent with other views and what JavaScript actually returns. Now in the experimental version open the command line (press Esc) and type <kbd>document.body</kbd>, it will return something like <samp>body#international.greenMode.promoSpanTwoColumnsLeft.blq_hp.redTheme.bbcdotcomAdvertsResetTop.bbccom_slot_mpu.bbccom_slot_module_000yy.</samp>. The experimental output is much more verbose, but provides more information to help the user uniquely identify the object in question. It will show for example the element name, and ID, class, href and src attribute values. This is most useful when you are looking through an array of returned values such as a list of links. Try <kbd>document.getElementsByTagName(&quot;a&quot;);</kbd> for example. As with the previous experimental feature, nothing has been finalised. The highlighting and information returned could be changed or the behaviour could be reverted altogether depending on how it works in use and user feedback.</p>

<h4>Detached view</h4>

<p>When detaching Opera Dragonfly in the previous experimental version, the right side of the top toolbar would become its own toolbar, to give more space for the document selector, and make it more obvious where to change the document (although this was never fully implemented). In the latest build, we&#39;ve reverted the behaviour to act like the attached mode. This gives more room for the code views and keeps the UI consistent, but still keeps the document selector somewhat hidden. We do however have some plans to make this more prominent when the page being debugged isn&#39;t the active tab or window.</p>

<p>Let us know your comments and feedback in the comments or on <a href="http://www.twitter.com/">Twitter</a> (tag with #operadfl).</p>
