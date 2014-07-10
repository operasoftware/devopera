---
title: New Disqus and Some Sniffer Workarounds
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

## Added patches

- PATCH-724, work around Carakan optimizer bug causing comments not to load in a in new version of Disqus. So far we have reports for wired.com, commondreams.org, omgubuntu.co.uk and blogspot.fr
- PATCH-723, intel.com: hide `old_browser` message. No, we’re not old.
- PATCH-721, directv.com: suppress “no longer supported” message. The browser IS modern.
- PATCH-720, tv.com: workaround misuse of CSS generated content, hides various `&#xA0;` scattered around.
- PATCH-718, USPS: work around old browser sniffer.
- PATCH-716, Suzuki Japan - fix 3D car browser functionality.
- PATCH-712, huntington.com: work around browser sniff.

## Changed patches

PATCH-697, Moodle / YUI upload. Avoid console messages.
