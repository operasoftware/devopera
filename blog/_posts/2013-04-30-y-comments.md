---
title: Y!Comments
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
---

Only 12.1x this time as the Yahoo! patch doesn’t apply to earlier versions.

## Added patches

PATCH-1135, Make Yahoo news load comments in “fragment” mode because there is a bug in Opera’s “multipart” support. This patch builds on My Opera user [XP1][1]’s research in [this “Can’t see Yahoo comments” forum thread][2].

[1]: http://my.opera.com/XP1/
[2]: http://my.opera.com/community/forums/topic.dml?id=1640352

## Changed patches

PATCH-1018, lufthansa.com — fix unclickable positioned inputs. Site changed, updated selector.

## Removed patches

- PATCH-1082, coe.int — transitionend casing. Site changed.
- PATCH-734, Avoid IE PNG transparency bug workaround that hides submit button. Site changed.
- PATCH-360, Enable the password box on smithbarney.com. Site discontinued.
