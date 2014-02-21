---
title: Hotmail, MySpace, Google patches
authors:
- ola-kleiven
tags:
- sitepatching
layout: article
---
Only additions this week

<span style="font-size: 140%">Added patches</span>

<strong>PATCH-322</strong>, Force height to avoid overlapping on orbitdownloader.com. This is a Core issue that happens only in <a href="http://www.quirksmode.org/css/quirksmode.html" target="_blank">almost-standards</a> mode in that intermediate whitespace doesn&#39;t affect the line height, while it should.

<strong>PATCH-321</strong>, Work around pre inheritance into tables on Google Code. A Core regression has caused whitespace to become significant in a case like this:

<pre>
&lt;pre&gt;
&lt;table&gt;
&lt;tr&gt;

&lt;td&gt;text&lt;/td&gt;

&lt;/tr&gt;
&lt;/table&gt;
&lt;/pre&gt;
</pre>

leading to massive amounts of whitespace on code.google.com diff views.

<strong>PATCH-318</strong>, Fix missing menu and misplaced highlights on hk.centamap.com. Another Core issue related to how Opera reports offset* properties for empty anchors and frameset elements. Opera claims they&#39;re always 0. Caused some hidden text on this site.

<strong>PATCH-311</strong>, Hidden &#39;next page&#39; links due to markup errors on mail.live.com.

<pre>
 &lt;li&gt;&lt;div&gt;Some content&lt;/div&lt;/li&gt;
 &lt;li&gt;&lt;div&gt;Some content&lt;/div&lt;/li&gt;
</pre>

Notice the missing closing bracket on the /divs. This causes the list items to nest instead of being siblings. Obviously an error on their part, but Opera should handle it better too.

<strong>PATCH-266</strong>, Opera disallows using reserved word top as variable name on myspace.com - breaks the color picker. Opera is stricter than the rest by not allowing overwriting certain global script variables (parent, top, self) to protect against certain cross domain attacks. Other browsers have similar blocks in place, but with slightly smarter implementations. Same as PATCH-265 and PATCH-252.
