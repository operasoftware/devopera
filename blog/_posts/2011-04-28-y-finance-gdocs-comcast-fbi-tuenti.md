---
title: Y!Finance, Gdocs, Comcast, FBI, Tuenti
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/>PATCH-406, Prevent currency menu from closing too fast on Y!Finance. A Core fix caused a workaround they had in place to start failing. Yahoo! will fix it, but it takes a while to roll out so we&#39;re patching temporarily.<br/><br/>PATCH-405, Prevent focusing search field and messed up rendering on Comcast. Strange case where a Core fix uncovered a different bug, seemingly unrelated. The new bug is scheduled for fixing.<br/><br/>PATCH-402, Work around compilation bug by reversing the order of two statements. New Google Docs not working properly. Has been fixed internally.<br/><br/>PATCH-401, Avoid scrollbar on FBI. Overflow caused by large negative text-indent and negative margin. Ongoing fix work.<br/><br/>PATCH-400, Make sure mouse events can reach FBI menu. This patch is quite an ugly workaround, but since the issue has been fixed internally we didn&#39;t want to spend more time on it.<br/><br/> <br/><span style="font-size: 140%">Removed patches</span><br/>DSK-243723, Problems submitting messages and comments on tuenti.com. This was fixed in Core a while ago but we forgot to remove the patch. With their latest update the patch actually causes issues with status updates as reported by <a href="http://my.opera.com/Cjcr/about/" target="_blank">Christian</a>.
