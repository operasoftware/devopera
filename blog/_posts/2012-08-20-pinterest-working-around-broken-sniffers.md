---
title: Pinterest, Working Around Broken Sniffers
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-811, pinterest.com: Opera fails to update status of display:none checkbox. Core bug.
- PATCH-808, aldoshoes.com — fix broken document.domain settings
- PATCH-807, urssaf.fr — work around broken sniffer
- PATCH-805, nbcn.ca — work around broken sniffer
- PATCH-804, mycoast.cccd.edu — work around broken sniffer
- PATCH-801, schrack.com — prevent outdated opera-specific stylesheet. Opera used to have a bug that they worked around, now it breaks the site menus.
- PATCH-798, caisse-epargne.fr — Avoid browser sniffing that breaks typing
- PATCH-795, auf.org — work around broken sniffer
- PATCH-776, tejaratbank — Don’t set properties on IFRAME window object until content is loaded

## Changed patches

PATCH-704, nbs.rs: fix `<iframe>` resize

## Removed patches

178723, mail.live.com — Emulating IE’s `cssText` property on style sheets. Now, this one is interesting. <del>With the update to the Outlook-look</del> At some point the mail team have fixed this and added proper prototypes for cssText. But `cssText` you say, isn’t that the issue on the new Outlook-style Skydrive site? Yes it is. Skydrive is lacking some `cssText` getters. Our contact at Microsoft has promised to look into this shortly so we are not patching yet.

PATCH-571, live.com: make file names visible. Made obsolete by new Outlook-look.

## 12.50 bonus

The 12.50 file includes an experimental feature that makes it easier to see when a patch triggers. Paired with an experimental extension you can now get a small notification whenever a site is patched or spoofed. The extension is by default more verbose than the usual console.log messages in that it will also notify every time a patch is run on a sub-window (like frames, like-buttons etc.)

The extension can be found at [http://people.opera.com/olak/sitepatch/SitePatchStatusExt.oex][1]. Again, it is experimental, for 12.50 only, it may break sites, it may be removed without notice etc. But feel free to try it out and tell us if you find it useful, annoying or just plain useless and buggy.

[1]: http://people.opera.com/olak/sitepatch/SitePatchStatusExt.oex
