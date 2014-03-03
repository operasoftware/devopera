---
title: 'Opera User Agent Strings: Opera 15 and Beyond'
authors:
- bruce-lawson
tags:
- user-agent
- opera-15
- odin
license: cc-by-3.0
layout: post
---
If you track user agents visiting your sites, please adjust your scripts for Opera 15 for desktop and Android.<br/><br/>Desktop&#39;s UA string (on Windows) is <code>Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100</code><br/><br/>On all platforms, the digits after &quot;OPR/&quot; tell you version and minor version number - in this case &quot;15.0&quot;. (The subsequent numbers are internal identifiers and build numbers.)<br/><br/>Opera 15 for Android contains the string &quot;Mobile&quot; and also contains &quot;OPR/&quot; followed by version number, as both Opera 15 for desktop and Android are based on Chromium 28.<br/><br/>Opera Mini continues to use Presto on the server, and its UA string is unchanged; it contains the string &quot;Opera Mini&quot;.<br/>
