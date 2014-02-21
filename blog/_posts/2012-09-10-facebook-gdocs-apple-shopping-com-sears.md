---
title: Facebook, GDocs, Apple, Shopping.com, Sears
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-852, facebook: avoid unwanted chat box scroll. Small regression from a Core fix causes chat box to jump. 12.50 only.<br/><br/>PATCH-851, Fix event object detection in old DynAPI code.<br/><br/>PATCH-850, ieee.org - postpone insertion of JSONP data source until we&#39;ve parsed the element the data is meant to be inserted into. Core issue.<br/><br/>PATCH-847, sears.com - fix moving product thumbnail images. Core issue with collapsing margins on hover.<br/><br/>PATCH-846, apple.com/jobs: don&#39;t reload from within unload handler.<br/><pre>
window.onunload = function(){ location.reload(true);};
</pre><br/>OK, some browsers have exceptions to handle such things, but why would you write it in the first place?<br/><br/>PATCH-844, clarkhoward.com: abouse of CSS content property.<br/><br/>PATCH-836, shopping.com - work around browser sniff to see help info.<br/><br/>PATCH-833, help.sap.com : fool sniffing to make frameset complete. Old &quot;Netscape&quot; sniffer.<br/><br/><span style="font-size: 140%">Changed patches</span><br/><br/>PATCH-382, Google Spreadsheets cell highlight mismatch and key event workaround. For 12.50 only, now spreadsheets work better than ever in Opera thanks to Mr. Byberg&#39;s heroic dive into obfuscated browser sniff branches.<br/><br/>PATCH-176, Allow upload of workspace resources in Salesforce. Add try/catch to avoid x-domain error messages.
