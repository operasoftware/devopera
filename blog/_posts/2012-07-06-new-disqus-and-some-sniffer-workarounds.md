---
title: New Disqus and Some Sniffer Workarounds
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

<span style="font-size: 140%">Added patches</span><br/>PATCH-724, work around Carakan optimizer bug causing comments not to load in a in new version of Disqus. So far we have reports for wired.com, commondreams.org, omgubuntu.co.uk and blogspot.fr<br/><br/>PATCH-723, intel.com: hide &quot;old_browser&quot; message. No, we&#39;re not old.<br/><br/>PATCH-721, directv.com: suppress &quot;no longer supported&quot; message. The browser IS modern.<br/><br/>PATCH-720, tv.com: workaround misuse of CSS generated content, hides various &quot;&#xA0;&quot; scattered around.<br/><br/>PATCH-718, USPS: work around old browser sniffer.<br/><br/>PATCH-716, Suzuki Japan - fix 3D car browser functionality.<br/><br/>PATCH-712, huntington.com: work around browser sniff.<br/> <br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-697, Moodle / YUI upload. Avoid console messages.
