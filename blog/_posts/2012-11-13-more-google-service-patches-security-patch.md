---
title: More Google Service Patches, Security Patch
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-1035, Work around Cross Site Scripting bug for Opera versions prior to 12.10. See [opera.com/support/kb/view/1031/][1]
- PATCH-1034, Google Image search centered. Presto drops center-inheritance for elements inside abs.pos. elements.
- PATCH-1032, Google Docs — auto-close unsupported browser message. Message may be visible for a short while, then auto-clicked. Hiding it completely could also hide useful status messages.
- PATCH-1031, surveymonkey.com — prevent dialog from growing when typing. Core margin issue.
- PATCH-1030, GMail — force show attach file field in new composer. A reflow bug in Presto causes the file input not to show up.
- PATCH-1028, tsn.ca — Dispatch of the “video player ready” event happens before event listener is added due to blocking DOM-added scripts, fire it again. Core issue.

[1]: http://www.opera.com/support/kb/view/1031/

## Changed patches

PATCH-857, hotels.ctrip.com maps not loading. Extended to cover more cases.

## Removed patches

PATCH-967, barnesandnoble.com — show select arrows. Site changed.
