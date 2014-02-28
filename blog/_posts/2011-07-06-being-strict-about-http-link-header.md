---
title: Being Strict About HTTP Link Header
authors:
- karlcow
tags:
- user interaction
- UX
- daisycms
- browser
- http
- interoperability
- Opera
- link
- bug
- odin
layout: post
---
<p>Opera users are <a href="https://bugs.opera.com/wizard/" target="_blank">reporting Web sites</a> which seem to not work properly. That is good. There are two cases:</p> 
<ul>
  <li>The browser is wrong and we have to fix it</li>
  <li>the Web site is wrong is wrong and we <a href="http://my.opera.com/community/openweb/">try to contact them</a></li>
</ul>
<p>But sometimes it is trickier. The browser can be perceived as <a href="http://my.opera.com/ODIN/blog/2011/03/30/improving-interoperability-the-story-of-a-bug" target="_blank">being wrong when it is right</a> on the technical side. </p>
<p>Someone reported us that he could not connect with Opera to <a href="http://wiki.restlet.org/" target="_blank">Restlet</a>. When looking at the HTTP headers, we can discover something a bit funny:</p>
<pre><code>% curl -sI <a href="http://wiki.restlet.org/" target="_blank">http://wiki.restlet.org/</a>
HTTP/1.1 200 OK
Date: Wed, 06 Jul 2011 14:30:33 GMT
Server: Jetty(6.1.9)
X-Cocoon-Version: 2.1.11-dev
X-Daisy-Version: 2.4.1 (build: banana/20101216 16:32:48+0100; run: Linux/i386/2.6.34.6-xxxx-grs-ipv6-32 java/1.5.0_22-b03)
Content-Type: text/html; charset=utf-8
Content-Length: 3825
Link: &quot;<a href="http://wiki.restlet.org:80/amcd.json" target="_blank">http://wiki.restlet.org:80/amcd.json</a>&gt;; rel=&#39;acct-mgmt&#39;;
X-Account-Management-Status: none
Via: 1.1 wiki.restlet.org (Apache/2.2.9)
Vary: Accept-Encoding
</code></pre>
<p>Indeed, the HTTP <code>Link</code> header is broken. The correct syntax is:</p> 
<pre><code>Link: &lt;<a href="http://wiki.restlet.org:80/amcd.json" target="_blank">http://wiki.restlet.org:80/amcd.json</a>&gt;; rel=&#39;acct-mgmt&#39;;</code></pre>
<p>We contacted the owners of the website and they were indeed surprised. Not looking at their websites with Opera, they <strong>didn&#39;t notice the issue</strong>. Other browsers do voodoo magic and silently ignore the faulty HTTP header. The Restlet site is using <a href="http://www.daisycms.org/">DaisyCMS</a>. And indeed, all sites using DaisyCMS are exhibiting the same issue. Fortunately, DaisyCMS is an open source project, so I opened a <a href="http://dev.outerthought.org/trac/outerthought_daisy/ticket/862">ticket about this bug</a>.</p>
<p>What about Opera? </p>
<span class='imgcenter'><img alt='' src='/blog/being-strict-about-http-link-header/daisyCMS.jpg' /></span> 
<p>This is tricky. The perception by common users is that Opera is buggy, when Opera is just saying: &quot;Hey these headers are bogus, I stop here because it might lead to a wrong interpretation of the document.&quot; Same usual story. The fact is that most people are not tech savvy enough to understand that, specifically when other browsers have a different behavior and silently recover. </p>
<p>Note that it might be a dangerous path. When the browser does not send an error message to users, they don&#39;t see the website&#39;s mistakes. It is then less likely that these errors will be reported. It also might lead in some cases in some serious security issues. So there is a right balance to be found for each case. We decided to open a bug, CORE-38210, so that Opera will ignore this type of bogus HTTP <code>Link</code> header in future releases.</p>
<p>Finding the right balance in between a strict implementation of the technology and a smooth user interaction is a challenging art.</p>
