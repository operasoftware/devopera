---
title: NBC videos for you
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-239 disable Flash on <a href="http://mail.google.com/" target="_blank">Gmail</a> for Mac PPC users due to a Flash crash. This will disable the new chat message sound for those users, but that is better than browser crashing...<br/><br/>PATCH-238 Override minmax.js IE helper script on investordaily.com.au and kasyouen.com - a hack to make IE6 support min/max-width. Unfortunately the script also runs in Opera and breaks the pages. If you know of more sites breaking due to this script, please let us know.<br/><br/>PATCH-236 Make <a href="http://www.nbc.com/" target="_blank">NBC</a> videos work by appending Chrome identification to navigator.userAgent , their browser sniffing completely ignores Opera, so this patch tricks script into thinking Opera is Chrome, while maintaining Opera&#39;s UA string.<br/><br/><span style="font-size: 140%">Removed patches</span><br/><br/>CORE-25405 missing  tag issue on tianya.cn caused broken scripting. Site fixed it.<br/><br/>PATCH-63 document.write() overwrites document on tom.com. Site fixed it.<br/><br/>Y!Mail - The hidden &lt;input type=&quot;file&quot;&gt; for the &quot;Attach&quot; button not hidden on Mac OS X. Site has changed and the patch now prevented attaching in 10.10, thus disabled.<br/><br/>PATCH-89 load event not triggered when expected in video section on nba.com. Site fixed it.<br/> <br/>
