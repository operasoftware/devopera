---
title: Unbreak Dojo 1.7
authors:
- hallvors
tags:
- sitepatching
- ouch
- browserjs update
layout: article
---
Hey, Ola was away last week so I get to do a guest post again :) I&#39;ve shipped a small and urgent update for 11.62 only.<br/><br/><strong><span style="font-size: 140%">Added patches</span></strong><br/>PATCH-616 Make document.attachEvent extra undefined for Dojo 1.7.x<br/><br/>This is a workaround for CORE-45475, a subtle bug which causes problems for Dojo. An affected page like <a href="http://dojotoolkit.org/documentation/tutorials/1.7/hello_dojo/demo/start.html" target="_blank">this demo</a> caused console errors saying <strong>Uncaught exception: Error: WRONG_THIS_ERR</strong>.<br/><br/>Dojo says <br/><pre>has.add(&quot;ie-event-behavior&quot;, doc.attachEvent &amp;&amp; (typeof opera === &quot;undefined&quot; || opera.toString() != &quot;[object Opera]&quot;));</pre><br/>which worked just fine until we tried hiding document.attachEvent and introduced a bug: even though doc.attachEvent on its own evaluates to false, when the &amp;&amp; operator is used the engine will evaluate the second part too and <strong>return the first part</strong> if the second part evaluates to true. The returned function is later called in a way that makes it throw a &quot;wrong this object&quot; type error.<br/><br/>First we noticed this in Dojo demos, and I wasn&#39;t sure if it was a problem on production sites. However, when a user reported <a href="http://my.opera.com/community/forums/topic.dml?id=1358882" target="_blank">problems loading a local Norwegian bank</a> and the Dojo issue turned out to be the root cause, we whipped up a patch.
