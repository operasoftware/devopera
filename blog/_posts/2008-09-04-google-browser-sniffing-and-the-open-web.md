---
title: Google browser sniffing and the Open Web
authors:
- david-storey
tags:
- bad-practices
- browser-sniffing
- opera
- google
- chrome
layout: article
---
<p>As well as being a valuable partner to Opera, with the release of Google Chrome, Google has also become a competitor.  We welcome that as more competitors means more innovation, and less likelihood that the Web will be dominated by one single vendor.</p>

<p>However, now Google has become a competitor with its own self interests in promoting its own browser, it brings new responsibility.  Google themselves state the following in their Google developer documentation (emphasis mine):</p>

<blockquote cite="http://www.google.com/chrome/intl/en/webmasters.html"><p>Internet users have an increasing number of choices for web browsers today, including Firefox, Safari, Opera, and now Google Chrome. Sometimes web pages look and work differently in each browser, so <strong>it’s important to test your site across all of them</strong> to ensure all your visitors can enjoy the experience you’ve designed. <cite><a href="http://www.google.com/chrome/intl/en/webmasters.html">– Google Chrome</a></cite></p></blockquote>

<p>They also state in <a href="http://code.google.com/p/doctype/wiki/ArticleUserAgent">Google DocType</a> that is is bad code that checks for browser names:</p>

<blockquote cite="http://code.google.com/p/doctype/wiki/ArticleUserAgent"><p>Since there is so much bad code out there already that <em>does</em> check for specific browser names, some browsers have options to give out false information about who they are. <cite><a href="http://code.google.com/p/doctype/wiki/ArticleUserAgent">– Google DocType</a></cite></p></blockquote>


<p>Why is this important? Well, in these places and others, Google’s developer documentation and PR is telling us that Google believes in the Open Web, we should test in multiple browsers, and browser sniffing is bad.  With these statements, and the fact that Google is now a member of the browser market, it is clear that it is important that they do not warn users of their services against using certain browsers, or block them completely, and that they would be against such policies anyway.  You could consider it an anti-competitive move if they do so, while allowing access to their own browser.</p>

<p>The reality is though that Google has and continues to block Opera (and other browsers) from accessing their services, or warns against using them.  Sometimes for entire services, or sometimes for specific features.  Often the only change needed to allow those services to work is to bypass Google’s browser sniffing.  It will be telling if Google changes their tune now that Google Chrome has been released.  A list of Google sites that currently block or warn against Opera includes, but is not limited to:</p>

<ul>
    <li>Google Notebook</li>
    <li>Google Groups</li>
    <li>Google Spreadsheets (they have promised to remove the block but this is not live yet</li>
    <li>Google Presentations</li>
     <li>Google Picasa</li>
     <li>Google Sites</li>
    <li>Blogger (patched in browser.js to allow us to get the rich text editor)</li>
    <li>Lively</li>
</ul>

<p>It is not all bad.  There are certainly people in Google that are very helpful to Opera, such as the Google GWT team, and in recent weeks and months I’ve been able to find contacts that have fixed issues and removed the browser sniffing that stopped Opera working on properties such as Orkut, Google Docs, and GMail (mobile specific).  The Google Spreadsheets team has also recently been helpful and promised to remove the block on that property soon.  I look forward to this collaboration continuing, and for Google to stick to the principles they mention on their sites about testing in all browsers.  I hope that there is commitment from higher up in Google to make sure that all discrimination against Opera (and other browsers) is removed.  If they test their new features and services in Opera, I’d be happy to work with Google and our QA team to look into any problems they find in our browsers that cause them problems.</p>



