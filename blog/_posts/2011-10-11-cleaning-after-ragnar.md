---
title: Cleaning After Ragnarök
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

A long log this time, so I’ll split it into several sections.

First the things common to O11- and O12-files

## Added patches

- PATCH-517, docs.google: make document names visible. Core issue where a table with fixed layout and cells with total width exceeding table width pushes content out of view. Somewhat unspecified territory but Opera is the odd one out, so we’ll have to align here at some point. Same thing that broke the apple.com menus.
- PATCH-516, infojobs.com.br: unwrap input elements. The button has a margin-right of 0.1em. Opera calulates this to 2px due to imprecise rounding and ends up with slightly too wide content that wraps. Basic issue is up for fixing, but won’t make it into O12.

## Removed patches

PATCH-87, Downloading documents on salesforce.com runs into too strict anti-drive-by-install security (Core fix)

## Additional changes in 12-file

Presto/2.9.220 introduces the new parser, but other Core developers have been busy fixing stuff too.

## Removed patches due to normal Core fixes

- PATCH-479, capital.gr: avoid unintentional XHR `abort()` calls.
- PATCH-454, No closure for eval’ed function expression means no way to close info box on Google Maps.
- PATCH-441, Script sets window.event manually for other events but not for (all) click events, breaks attachment download on Hotmail.
- PATCH-361, Avoid too tall content on AOL.
- PATCH-331, Disable `HTMLElement.removeNode` support. This was a compat experiment with no side effects, so we have removed support in Core.
- PATCH-329, Disable Node.document support, breaks shimano.com menu. Also had some side effect in some jQuery-versions.
- PATCH-303, Reporting different `clientHeight` and `scrollHeight` for `<textarea>` breaks commenting on nfl.com

## Removed patches due to Ragnarök fixes

- PATCH-463, Fix misnested markup on FlyTap
- PATCH-462, 56.com - fix missing video comments
- PATCH-444, Make Twitter hashtags visible due to misnested elements.
- PATCH-366, Fix unclickable credit card selection box on PayPal.
- PATCH-311, Hotmail hidden “next page” links due to markup errors

## Removed patches due to site changes

Since Yahoo! have now phased in the latest Y!Mail version, we are retiring a bunch of patches that applied to the old one. It’s hard to test all aspects of a site like this, so we’re removing these from O12-file only for now. Please yell if you find something to be broken after this.

- CORE-17539, Y!Mail spell check fix
- CORE-17538, Y!Mail avoid text selection on drag-and-drop
- 353880, Y!Mail reversed mouse wheel scrolling
- 327060, Shadow on dialogs is messed up, so fix it
- 321384, createElement in XML document should put un-prefixed nodes in null namespace
- 194334, Make sure dragging does not cause visible selections
- 194334, Y!Mail remove `selectSingleNode` and `selectNodes`
