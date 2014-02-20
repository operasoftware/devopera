---
layout: post
title: OperaWatir pre-release
authors:
- andreastt
tags:
- core qa
- test automation
- operawatir
- watir
- coreblog
layout: article
---
<div style="width: 48%; float: right; margin: 0 0 2em 2em;"><img src="/blog/operawatir-pre-release/800px-Full_Opera_by_night.jpg" alt="" /> <p style="font-size: 85%; margin: 0; padding: 0 .5em">The <a href="http://operaen.no/">Norwegian Opera &amp; Ballet House</a> in Bjørvika, Oslo.  Notice the water.</p> <p style="text-align: right; font-size: 85%; margin: 0; padding: 0 .5em">Photo: Rafał Konieczny, CC by-sa</p></div>

<p>
  We are pleased to announce the pre-release
  of <em><a href="http://operawatir.org/">OperaWatir</a></em>, a
  library for driving the Opera browser.  It is the latest addition to
  the <a href="http://watir.com/">Watir family</a>, a toolkit for
  automating interactions with web browsers, and to Opera Software&#39;s
  range of testing frameworks.
</p>

<p>
  OperaWatir provides a querying engine and Ruby bindings to
  <em>OperaDriver</em>, the back end library.  It lets you easily and
  automatically test your web applications <strong>just like a human
  would</strong>, simulating mouse clicks, text entry and the submitting
  of forms, reporting the results back so you know when things work,
  <em>and</em> when they break.
  By using a real web browser to test exactly what users see you are
  ensuring that your entire stack, including HTML, scripts, styling,
  embedded resources and back end functionality, is working.
</p>

<p>
  At Opera Software, we use Watir not only to test web applications,
  but also for testing the browser itself.  We have
  about <strong>1,200</strong> automated renderer tests running
  against every new internal build we compile.  You can read more
  about
  the <a href="http://my.opera.com/core/blog/2009/03/06/test-automation-with-operawatir">background
  of OperaWatir and testing at Opera</a> in an earlier blog post my
  colleague wrote in 2009.
</p>

<p>
  The <a href="https://github.com/operasoftware/operawatir">source
  code is already available on GitHub</a>, so you can go and check it out now!
  While the OperaDriver back end is not yet free software,
  we aim to release it early next year.
</p>

<p>
  We need to point out that this is a <strong>pre-release</strong>,
  and that it should not be considered stable or suitable for use in
  production yet. Also, while we maintain compatibility with the current Watir
  implementations, it includes a proof of concept API based on Jari
  Bakken&#39;s <a href="http://github.com/jarib/watir-webdriver/wiki/Comparison-with-Watir-1.X">ideas
  for Watir 2</a>.  For the more technically inclined I
  would highly recommend having a look at our ideas. If you have any feedback,
  let us know! It is our hope that we can discuss and develop this API
  further in cooperation with the other Watir implementors.
</p>

<p>
  We hope you will enjoy playing around with
  OperaWatir. You are likely to find some bugs, but we decided to follow
  the release early and often principle, and push it out to the public before
  Christmas rather than waiting for another month or two until
  it is pristine and perfect.
</p>

<p>
  We hope that you will <a href="http://operawatir.org/">enjoy this
  little Christmas gift</a>, and furthermore, we wish you a Merry
  Christmas and a Happy New Year from us here at Opera Software in
  Oslo!
</p>
