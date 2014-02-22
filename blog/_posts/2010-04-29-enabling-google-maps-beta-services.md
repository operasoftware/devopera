---
title: Enabling Google Maps Beta Services
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-243 - <a href="http://maps.google.com" target="_blank">maps.google.com</a> some beta features not working due to a Carakan issue with document.constructor returning the wrong type.<br/><br/>(and before you ask, we are painfully aware that the Earth plug-in on Google Maps isn&#39;t working. We are working on solving that too. It is unrelated to the patch above.)<br/><br/><br/>PATCH-242 - <a href="http://mail.live.com" target="_blank">live.com</a> login screen shows multiple backgrounds due to support for readystatechange events on SCRIPT. Patch makes Opera ignore that.<br/><br/>PATCH-241 - Make menus visible on <a href="http://news.naver.com/" target="_blank">news.naver.com</a><br/><br/>
