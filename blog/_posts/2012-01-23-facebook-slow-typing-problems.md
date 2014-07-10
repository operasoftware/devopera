---
title: Facebook Slow Typing Problems
authors:
- hallvord-steen
tags:
- sitepatching
- browser.js
- facebook
license: cc-by-3.0
---

Today’s Facebook update caused some issues for Opera, some of their changed CSS made Opera work a lot harder while Facebook is updating itself. The main impact of this was that typing became very slow. Ouch.

Removing this CSS makes it work:

	.uiButtonGroupOverlay > :first-child .uiButton{
		border-top-left-radius:3px;
		border-bottom-left-radius:3px;
		}
	.uiButtonGroupOverlay > :last-child .uiButton{
		border-top-right-radius:3px;
		border-bottom-right-radius:3px;
		}

It’s not the selectors, so it seems we have some extra-slow-redraw-everything-in-sight path in our `border-radius` implementation. While we optimise this, we’ll push out a stopgap update that prevents Facebook from applying `border-radius` styles. You can now start updating your statuses again :)

## Removed patches

- CORE-4083 chase.com field refocus from onkeypress-problem (site changed)
- PATCH-392 Fix bestbuy menus (site changed)
- PATCH-448 / OTW-6887 klm.com: Fix broken resizing of iframes (site somewhat less broken, though there is some browser sniffing left and experience isn’t as good as it should be. Patch no longer has any effect, so dropped pending rewrite if OTW doesn’t succeed.)

## Added patches

- PATCH-572 / CORE-7401 smn.gov.ar: reduce search input width to avoid wrapping
- PATCH-573 / CORE-43961 Facebook’s `border-radius` triggers hyperactive reflow bug, performance suffers
