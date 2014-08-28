---
title: OperaDriver, Test Web Pages Without Efforts
authors:
- karlcow
tags:
- web-testing
- selenium
- testing
- operadriver
- performance
- operawatir
- qa
- odin
license: cc-by-3.0
---

<p>About one year ago, Andreas Tolf Tolfsen <a href="http://seleniumhq.wordpress.com/2011/02/09/operadriver_released/">announced</a> <a href="http://www.opera.com/developer/tools/operawatir/">OperaWatir</a>, a library for driving the Opera browser. To use the library, you needed to brush up a <a href="https://dev.opera.com/articles/view/opera-watir-tutorial/">few scripts in Ruby</a> and <a href="http://my.opera.com/ODIN/blog/2011/02/09/automate-web">start testing</a>. Your first thought is</p>

<blockquote><p>Hey I drive the Web myself. In manual mode! I do not need assistance. What the heck… a driver!</p></blockquote>

<p>Well, your perspective might change when the Project manager comes to you and says:</p>

<blockquote><p>We are going to prod in two days. You have to test the 100 Web pages. Ah by the way… I meant <strong>all</strong> browsers.</p></blockquote>

<p>Oops… A few drops of sweat later and a few searches on Google, you found <a href="http://seleniumhq.org/">Selenium</a>, the mothership of all Web testing. Selenium has developed a <a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol">protocol</a> to help implementers to develop specific Web drivers emulating or connecting to the browsers UI.</p>

<p>So over the last one year, a few updates have been made:</p>

<ul>
<li>Opera has released the <a href="https://github.com/operasoftware/operadriver">source code</a> of its <a href="http://code.google.com/p/selenium/wiki/OperaDriver">Web driver</a>.</li>
<li><a href="http://sny.no/2011/11/operadriver-v081.html">OperaDriver 0.8.1</a> (see also <a href="http://sny.no/2011/11/operadriver-v08.html">version 0.8</a>) was released last week introducing the ability to parallelized testing on all OSes. You can now run multiple instances of Opera/OperaDriver simultaneously.</li>
<li>There are only two drivers in the stack which are maintained by their own company: <a href="http://www.opera.com/developer/tools/operadriver/">OperaDriver</a> and ChromeDriver.</li>
<li>OperaDriver&#39;s performance has improved significantly.  In fact, we are already fast, because our driver is directly plugged to the core engine.</li>
<li>But in addition to that, the WebDriver is really emulating what a user would do by interacting with the browser.</li>
<li>With the WebDriver API, we are implementing the Selenium API. This makes you not put in any <strong>extra efforts for testing with Opera</strong>.</li>
</ul>


<p>A W3C for Browser Testing and Tools Working Group is being discussed. You can read the <a href="http://www.w3.org/2011/08/browser-testing-charter.html">charter</a> and <a href="https://www.w3.org/2004/01/pp-impl/49799/join">join</a>. The first F2F meeting will be in London in January.</p>

<p>So now,  you can use <a href="http://www.opera.com/developer/tools/operadriver/">OperaDriver</a> and finish your project ready to go on production in two days. Go. Start. Play.</p>
