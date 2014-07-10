---
title: A Look Under the Hood of Opera 9.6
authors:
- david-storey
tags:
- opera-9
- estonia
- india
- ukraine
- indonesia
- release
- russia
- odin
license: cc-by-3.0
---

<p><a href="http://www.opera.com/products/desktop/">Opera 9.6</a> has just be released today.  What can developer expect from this release?  This release focusses on stability, so there has not been wholesale changes like the move from Opera 9.2 and Presto 2, to Opera 9.5 and Presto 2.1.  We’ve taken the existing Presto 2.1 engine and tuned it, and polished the rough edges.  Developers will not have to learn new tricks or find and work around newly introduced bugs.  Instead the stability of the browser has been improved, key bugs have been fixed, security holes have been patched and the performance has improved.  There have also been a couple of additions that we felt were important to add even though the engine is the same core branch.</p>

<p>The first thing to note is that a core rendering engine version has been added to the User Agent string.  This was done to help developers that need to detect the same version of the rendering engine across all Opera products, which may not have matching product version numbers.  This is particularly important for when working around bugs or for library developers.  Due to the tuning of the engine, the version is now Presto 2.1.1, and it can be detected by checking for <q>Presto/2.1.1</q> at the end of the UA string.  The version number will obviously increase for future versions.</p>

<p>The next thing to note is that the <a href="http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference:Global_Objects:Function:caller"><code>caller</code> property</a> has now been added for functions.  This is none standard, but has become a de facto standard due to it being supported in all other major browsers.  We were seeing compatibility issues from not supporting it.  Another major fix is that spatial navigation is no longer activated when calling <code>focus</code> via JavaScript.  This was sending developers crazy, especially with library vendors, as the highlight is very prominent.  This should elevate these issues, so I’m glad to report it is fixed.  A bug has also been fixed where the highlight <a href="http://www.opera.com/products/dragonfly">Opera Dragonfly</a> uses doesn&#39;t remain when the Opera Dragonfly window is closed.  The final fix of note is that there has been a further ACID 3 fix to remove the document property been from iframe objects.  This makes us more compatible with Firefox and Safari.

<p>The main changes for this release were more consumer focused, and include features such as improved Opera Link support, to now sync typed history and custom searches.  A feed preview has now been added for RSS and Atom feeds, and a scroll marker has been added to aid the user when scrolling to see where they left off.  There has been numerous Mail fixes, such as a low bandwidth mode—which is useful when you have a slow connection or paying by the kb using a GPRS card, and a way to follow and ignore threads.  The latter is a great time saver when you are CC’d on a never ending thread that doesn&#39;t interest you or isn’t relevant.  Further details can be found in the <a href="http://www.opera.com/docs/changelogs/">Opera 9.6 change logs</a>.</p>

<p>Something else worth noting is we’ve added support for a number of new languages.  These include Indian languages such as Hindi, Tamil and Telugu, and Ukrainian, Estonian and Indonesian.  Ukrainian and Indonesian are particularly interesting as they are two of the countries that are witnessing large growth in Opera users and Opera enjoys a large market share.  Opera is doing very well in general in Eastern and Central Europe and Central Asia.  Hopefully Indonesia will kick start Opera growth in South East Asia, like Russia’s growth seems to have helped in its neighbouring countries.  Opera’s market share is certainly an order of magnitude higher than the often quoted 1% market share in these areas.</p></p>
