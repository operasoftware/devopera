---
title: Are you a browser sniffer? Get your site ready for a new smell
authors:
- dstorey
tags:
- Opera 10
- browser sniffing
- blog
layout: article
---
<p>Opera released an <a href="http://www.opera.com/browser/next/">alpha of Opera 10</a> earlier this month.  One reason for alpha releases is to find and fix potential problems and bugs. These can either be browser bugs that we have to fix or site bugs where the site’s developers need to fix.  Opera 10 has uncovered a flaw in many browser sniffer scripts, that causes the script to detect Opera 10 as Opera 1.  This is because they only detect the first digit of the version number.  My colleague Hallvord Steen has more information in his blog post <a href="http://my.opera.com/hallvors/blog/2008/12/19/10-is-the-one">10 is the one</a>.  I&#39;d recommend anyone that developers web sites to download the latest alpha and check their sites for this and other potential issues, before Opera 10 goes final.</p>

<p>This issue has caused problems on many big sites from Microsoft Live to Bank of America.  If it isn&#39;t fixed the sites will also likely stay broken for when browsers like IE 10 get released in a number of years time.  Unfortunately we are the ones leading the pack into this particular issue.</p>
