---
title: Facebook, GDocs, Apple, Shopping.com, Sears
authors:
- ola-kleiven
tags:
- sitepatching
license: cc-by-3.0
layout: post
---

## Added patches

- PATCH-852, facebook: avoid unwanted chat box scroll. Small regression from a Core fix causes chat box to jump. 12.50 only.
- PATCH-851, Fix event object detection in old DynAPI code.
- PATCH-850, ieee.org — postpone insertion of JSONP data source until we’ve parsed the element the data is meant to be inserted into. Core issue.
- PATCH-847, sears.com — fix moving product thumbnail images. Core issue with collapsing margins on hover.

PATCH-846, apple.com/jobs: don&’t reload from within unload handler.

	window.onunload = function(){ location.reload(true);};

OK, some browsers have exceptions to handle such things, but why would you write it in the first place?

- PATCH-844, clarkhoward.com: abouse of CSS content property.
- PATCH-836, shopping.com — work around browser sniff to see help info.
- PATCH-833, help.sap.com: fool sniffing to make frameset complete. Old “Netscape” sniffer.

## Changed patches

- PATCH-382, Google Spreadsheets cell highlight mismatch and key event workaround. For 12.50 only, now spreadsheets work better than ever in Opera thanks to Mr. Byberg’s heroic dive into obfuscated browser sniff branches.
- PATCH-176, Allow upload of workspace resources in Salesforce. Add try/catch to avoid x-domain error messages.
