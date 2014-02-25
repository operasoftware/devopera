---
title: Introducing Opera Dragonfly alpha 3
authors:
- dstorey
tags:
- DOM
- alpha 3
- developer tools
- Opera Dragonfly
- dragonfly
layout: post
---
<p>We’ve got a couple of announcments related to <a href="http://www.opera.com/products/dragonfly">Opera Dragonfly</a> today.  The first piece of news is that Opera Dragonfly alpha 3 has just been released.  The main focus of this release has been fixing reported bugs, to make the user experience more pleasant.  We’ve also added localisation support—which was introduced in the previous weekly release.  The German translation is ready, and we are working on other locales, that will be pushed live as they are completed and QA&#39;d.  We hope this will make Opera Dragonfly more useful in the none-English speaking world.  Obviously markets where Opera is more popular have high priority, such as Russian and Indonesian.</p>

<p>One of the key new features of Opera Dragonfly alpha 3 is DOM editing support.  There is two modes.  The first mode allows you to edit, add and delete attributes and text nodes in real time. You can activate this by double clicking on a attribute, value or text node.  The second mode allows you to do free form editing, such as adding new DOM node.  You can activate this by double clicking on the opening or closing tag of a element.  This will turn the entire element and its children into a free form text field.  There is currently a known issue with the first mode, where focus doesn&#39;t leave the editing mode when pressing the enter/return key.  This will be silently updated as soon as it is fixed.</p>

<p>The other main new feature is that the breadcrumb trail has been updated.  Now each node acts like a button, so you can navigate the element hierarchy  more easily.</p>

<p>The next release will be Opera Dragonfly alpha 4, which is under heavy development.  This has been under development at the same time as alpha 3, as it requires new features found in the Scope module that is part of the upcoming Opera Presto 2.2 rendering engine.  It will refine the user experience some what, as the currently active tab will be detected.  This will tidy up the layout and make the docked mode much more logical to navigate.  It will also introduce a HTTP inspector.</p>

<p>The way experimental releases are handled has also changed.  Now instead of switching to the path for weekly releases, Opera Dragonfly will detect if you are on a stable release version of Opera or a pre-released version, such as an alpha, beta, or weekly release.  If you are using a stable release it will use the latest official release of Opera Dragonfly (currently alpha 3).  If you are using a pre-released version of Opera it will automatically updated to the latest experimental version of Opera Dragonfly.  It is possible to force the use of a stable or experimental version.  This is explained in the <a href="https://dragonfly.opera.com/app/paths-schema.html">URL Schema</a> document.</p>

<p>In further Opera Dragonfly news, we now have a person who is focusing on Project Management for Opera Dragonfly. I’ve been handling Product Management, but the Project Manager role has been vacant.  The new Project Manager is <a href="http://virtuelvis.com/">Arve Bersvendsen</a>, whom many of you may know already.  He will bring a great deal of experience and knowledge into the project.  I’ll let him introduce himself further in this blog when we have some more news to tell.  For now, have fun playing with the latest release.</p>
