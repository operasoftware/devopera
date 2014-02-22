---
title: Small Update With Some New Patches
authors:
- ola-kleiven
tags:
- sitepatching
layout: post
---
<span style="font-size: 140%">Added patches</span><br/><br/>PATCH-230 Sun&#39;s Java has an extra plug-in (npdeploytk.dll) that takes care of deployment and upgrade of Java Web Start components. It turns out this plug-in isn&#39;t sanitizing all input parameters as described <a href="http://threatpost.com/en_us/blogs/serious-new-java-flaw-affects-all-browsers-040910" target="_blank">here</a> Until there is an official upgrade for Java, we will prevent access to the vulnerable functions of the plug-in.<br/><br/>The patch is a bit crude, in that it may also prevent access to other plug-ins using the same function names, &quot;launch&quot; and &quot;installJRE&quot;. We are not aware of any such plug-ins.<br/><br/>PATCH-229 <a href="http://www.orkut.com/" target="_blank">Orkut</a> profile image upload didn&#39;t work due to the form having opacity:0 so clicks went right through.<br/><br/>PATCH-227 <a href="http://mail.live.com/" target="_blank">Hotmail</a> quoting, forwarding not working due to race condition between timeout and IFRAME&#39;s load event<br/><br/>PATCH-225 <a href="http://mail.yahoo.com/" target="_blank">Y!Mail</a> Can not scroll to see all messages in inbox if list is taller than 32767px
