---
title: Facebook slow typing problems
authors:
- hallvors
tags:
- sitepatching
- browserjs update
- facebook
layout: article
---
Today&#39;s Facebook update caused some issues for Opera, some of their changed CSS made Opera work a lot harder while Facebook is updating itself. The main impact of this was that typing became very slow. Ouch.<br/><br/>Removing this CSS makes it work: <br/><br/><pre> .uiButtonGroupOverlay &gt; :first-child .uiButton{border-top-left-radius:3px;border-bottom-left-radius:3px} 
 .uiButtonGroupOverlay &gt; :last-child .uiButton{border-top-right-radius:3px;border-bottom-right-radius:3px}</pre><br/><br/>It&#39;s not the selectors, so it seems we have some extra-slow-redraw-everything-in-sight path in our border-radius implementation. While we optimise this, we&#39;ll push out a stopgap update that prevents Facebook from applying border-radius styles. You can now start updating your statuses again :)<br/><br/><h2>Removed patches</h2><br/>CORE-4083 chase.com field refocus from onkeypress-problem (site changed)<br/><br/>PATCH-392 Fix bestbuy menus (site changed)<br/><br/>PATCH-448	/ OTW-6887 klm.com: Fix broken resizing of iframes 	(site somewhat less broken, though there is some browser sniffing left and experience isn&#39;t as good as it should be. Patch no longer has any effect, so dropped pending rewrite if OTW doesn&#39;t succeed.)<br/><br/><h2>Added patches</h2><br/>PATCH-572	/ CORE-7401 smn.gov.ar: reduce search input width to avoid wrapping<br/><br/>PATCH-573 / CORE-43961 Facebook&#39;s border-radius triggers hyperactive reflow bug, performance suffers<br/>
