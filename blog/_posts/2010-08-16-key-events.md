---
title: Key events
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
Hallvord has been busy trying to figure out Google Docs, with fruitful results.<br/><br/><span style="font-size: 140%">Added patches</span><br/><br/>PATCH-278 - do not send keypress events for navigation and function keys on new Google Docs. <br/><br/>It is no secret that Opera&#39;s handling of key events is somewhat less compatible than we&#39;d like it to be. In this case it caused all sorts of characters to be inserted into documents in the new version of Google Docs when using arrow keys etc. We are going to fix it once and for all, but it is a non-trivial task. So patch for now.<br/><br/>PATCH-255 - work around browser sniffing in old Zimbra installations, fixes Comcast webmail and hopefully more. Thank you, <a href="/toyotabedzrock/" target="_blank">toyotabedzrock</a>, for the Comcast test account that made it possible to test this! :up:<br/><br/><span style="font-size: 140%">Changed patches</span><br/>PATCH-280 changed generic HVMenu patch to better cope with frames. Fixes webalerts.net<br/><br/><span style="font-size: 140%">Removed patches</span><br/>PATCH-208 cajamadrid.es login form was invisible. Site has been redesigned.<br/>We&#39;ve had several problems with this site - thanks to users <a href="/fernando823" target="_blank">fernando823</a> and <a href="/jorge.ca" target="_blank">jorge.ca</a>,  who helped analyse the issues with Caja Madrid - if the site resolved all issues I say it&#39;s time for a small party in the <a href="http://my.opera.com/community/forums/topic.dml?id=249032" target="_blank">forum
thread</a>. :)<br/><br/>PATCH-151 tvguide.or.jp missing content due to browser sniffing. Site fixed the issue.
