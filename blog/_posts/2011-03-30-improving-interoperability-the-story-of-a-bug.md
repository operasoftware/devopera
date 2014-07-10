---
title: Improving Interoperability — the Story of a Bug
authors:
- karlcow
tags:
- opera
- open-the-web
- web-standards
- interoperability
- odin
license: cc-by-3.0
---

<p>Open The Web is an initiative from Opera to encourage Web developers to use Web standards for ensuring interoperability across Web browsers (and Web clients as large). We publish <a href="http://dev.opera.com/">articles</a>. We participate in <a href="http://my.opera.com/ODIN/blog/2011/03/24/opera-developer-relations-team-april-events">conferences</a>. We contact Web sites owners that have interoperability issues. Opera users kindly report issues through <a href="https://bugs.opera.com/wizard/">Opera Bug Report Wizard</a>. We sometimes group similar issues in a work package.</p>

<p>My favorite package has been &#8220;HTML served as XHTML package&#8221; (OTW-6223). Some Web sites (including high profile Web sites) send to some Web clients HTML content with the mime type <code>application/xhtml+xml</code>. The parsing rules for XHTML and HTML are different. When sending <code>application/xhtml+xml</code>, site owners have to be sure that their content is, at least, well-formed XML. I have written about this issue in <a href="http://my.opera.com/karlcow/blog/2011/03/03/wrong-to-be-right-with-xhtml">Wrong To Be Right</a>. We noticed that the issue was often happening with sites using Microsoft IIS and ASP.net.</p>

<p><a href="http://www.starbucks.com">Starbucks</a> was listed under OTW-6642 (created on 2010-12-20) in the package OTW-6223. The site was sending to Opera users HTML content with  <code>application/xhtml+xml</code>. We tried to contact the site owners without too much success. This is one of the issues that we, the Web community, should try to address: a universal reporting system for Web sites interoperability. The biggest challenge being to find the right channel and appropriate level of communications. A system too open might lead to bashing when too closed might be ignored. </p>

<p>Yesterday I closed OTW-6642 with joy. The issue has been solved by a Starbucks Software Engineer, <a href="http://www.rohanradio.com/">Rohan Singh</a> <a href="http://twitter.com/rohansingh">@rohansingh</a>. He noticed the <a href="http://my.opera.com/karlcow/blog/2011/03/03/wrong-to-be-right-with-xhtml">blog post</a> and left a <a href="http://my.opera.com/karlcow/blog/2011/03/03/wrong-to-be-right-with-xhtml#comment56718692">comment</a></p>

<blockquote>
  <p>Hey Karl, </p>

<p>Thanks for the heads up about this happening on Starbucks.com. We tracked it down to an issue in the ASP.NET Browser Capabilities functionality. </p>

<p>As it turns out, if you supply ASP.NET with a browsercaps file (database of browser capabilities), it sets the response&#8217;s Content-Type to the user agent&#8217;s preferred Content-Type. </p>

<p>Of course, this doesn&#8217;t make a lot of sense, since HTML isn&#8217;t going to magically change into XHTML or WML or anything else simply because it&#8217;s the preferred type. </p>

<p>Anyway, we&#8217;ve worked around this behavior and are testing the fix. Should be out soon. </p>

<p>Thanks again!</p>
</blockquote>

<p>He then solved the issue on Starbucks Web sites and then wrote a <a href="http://www.rohanradio.com/getting-aspnet-to-play-nice-with-opera-wget">blog post to explain the ASP.Net feature</a> which created the issue. Not only it was sending the wrong information to Opera but also to clients such as wget. My favorite quote of his blog post is (emphasis is mine):</p>

<blockquote>
  <p>The simplest fix, of course, is to get rid of any *.browser files you may be using in your application. I understand redirecting to a mobile version of your site for mobile browsers or the like, <strong>but basing any major functionality on guesses about the user&#8217;s browser is a great path to future pain.</strong></p>
</blockquote>

<p>Rohan provided a fix by either getting rid of any  <code>*.browser</code> files or at least remove the instances of <code>preferrendRenderingMime</code>.</p>

<p><strong>Respect to Rohan Singh</strong>, really. It will also help us contact and eventually fix other sites exhibiting the same behavior such as: <a href="http://home.mcafee.com/Root/stdLandingPage.aspx">McAfee</a>, <a href="http://www.excalibur.com">Excalibur</a>, <a href="http://www.mgmgrand.com/">MGM Grand</a>, <a href="http://www.spanair.com/web/">SpanAir</a>, <a href="http://www.adidas.com/us/micoach/">Adidas</a>, etc.</p>

<p>If you are a site owner, <a href="http://twitter.com/odevrel">please contact us</a> and/or fix it.
If you are a Web user having this issue, please use the <a href="https://bugs.opera.com/wizard/">Opera Bug Report Wizard</a> to notify us.</p>
