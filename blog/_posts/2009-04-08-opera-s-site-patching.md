---
title: Opera’s Site Patching
authors:
- hallvord-steen
tags:
- site-patching
- browser.js
- coreblog
layout: post
---
<p><em>You know the complexity of web technology is getting out of hand when every website needs some special treatment</em>. Imagine driving a car if you had to change the engine slightly or replace wheels every time you turned a corner and entered a new street? Browser development is a lot like that these days.</p>

<p>Nearly every modern browser has site patching features, to grease the wheels where the nuts and bolts of standards are exposed to the unpredictable elements of the web:</p>

<ul><li>IE8 shows sites on the <a href="http://blogs.zdnet.com/microsoft/?p=2072" title=":rolleyes:">compatibility list</a> in IE7-mode</li>
<li>Google Chrome <a href="http://blogoscoped.com/archive/2009-01-29-n48.html" title="Actually, come to think of it Opera spoofs on Hotmail too. Do Hotmail devs sniff browsers to get high or something?">spoofs on Hotmail</a></li>
<li>Safari has obscure, un-documented  <a href="http://mac.elated.com/2008/05/22/web-developer-features-in-safari/" title="This page just mentions them.. I said they were un-documented">site-specific hacks</a></li>
<li> Firefox apparently only has the <a href="https://addons.mozilla.org/en-US/firefox/addon/59?application=firefox&amp;id=59" title="Yet Another Firefox Extension for stuff Opera already has built-in">User Agent switcher</a> extension - but it is extremely popular in spite of its niche audience.</li>
<li>Opera has user agent spoofing and <a href="http://www.opera.com/docs/browserjs/" title="I maintain that page so it may be, um, outdated..">browser.js</a></li></ul>

<p>Treating every site differently? That sounds insane. It&#39;s clearly impossible. For starters, there are billions of websites, all different. And they keep <em>changing</em> with millions of lines of code being added or changed every day. Who can possibly keep up with that? Besides, aren&#39;t standards supposed to be the answer?</p>

<h2>Standards</h2>
<p>I commend the <a href="http://www.w3.org" title="Our favourite consortium - dragging the web towards its full potential since 1994">standardisation efforts</a> and the evangelists at <a href="http://www.webstandards.org/" title="WASP stings">The Web Standards Project</a> and elsewhere. Without you we would be far, far worse off. The future might even be on your side - more and more sites validating and cleaning up their standards story. Power to you!</p>

<p>Various Opera teams take part in the standards work too, including doing <a href="http://www.opera.com/company/education/curriculum/" title="Opera Standardista Curriculum">education</a> and <a href="http://dev.opera.com/" title="+++ RIP devedge.netscape.com, sorry to see you gone but there is a new kid on the block +++">outreach</a>. Our <a href="http://my.opera.com/community/openweb/" title="The web needs some serious opening, I see small padlocks all over it">Open The Web team</a> contacts web sites with advice on cross-browser compatibility and standards compliance.</p>

<p>But the browser is the user&#39;s agent. Across all sites breaking the rules and standards in different ways, we owe the user to do anything we can to <em>make them all work</em> whenever possible. Often a broken site is not our fault, but it&#39;s most definitely our problem. And we must make it work today. Not in <a href="http://ishtml5readyyet.com/" title="sounds like a lot of time, doesn&#39;t it..">2022</a>..</p>

<p>Hence, we patch.</p>

<p>Since we see various more or less ad-hoc approaches to site patching develop among our fellow browser vendors, it seems like a good time to share some of our experiences - what I think are the strengths and constraints of our particular implementation.</p>

<h2>Strengths</h2>
<h3>Experience</h3>

<p>Opera has more experience with site-specific patches than other browser vendors, since we&#39;ve been patching the web <a href="http://my.opera.com/hallvors/blog/show.dml/13893" title="initial browser.js announcement">since Opera 8.01</a>. I believe our solution is also by far the most advanced one. Special commands available to <a href="http://www.opera.com/browser/tutorials/userjs/" title="learn to love User JS here">User JavaScripts</a> make up a simple yet powerful API for modifying and correcting a website. With getters and setters and DOM interfaces we can change Opera&#39;s behaviour to match most standard deviations the script expects. Sometimes we add a specific missing style or even remove some object or policy that gets in the way. And when a web site uses browser sniffing we can often dig in and repair the exact line of code that is broken! Some random examples:</p>
<ul>
<li>We can add the single missing class name when <a href="http://www.aol.jp/" title="How come Japanese people want to use *America* OnLine anyway?">AOL Japan</a> abuses browser detection and doesn&#39;t apply correct styles, and correct <a href="http://webmail.aol.com/" title="thanks for helping me debug dojo, dbloom. You rock as usual.">AOL webmail</a>&#39;s spelling mistake when they spell dojoType as dojotype.</li>
<li>We can fall back to a graceful postMessage() call when <a href="https://us.etrade.com/e/t/home" title="Why oh why do banks and financial sites so often violate the security policies we need to protect them?">E*Trade</a> tries to violate the security policy against navigating another site&#39;s frame when it loads encrypted content</li>
</ul>

<p>We can also override settings like what browser we identify as and what rendering mode (quirks or standards) we should use for a specific site through downloadable preferences.</p>

<h3>Bugfixes</h3>

<p>Given the power to change websites and change Opera, we can sometimes even work around our own bugs.</p>

<ul>
<li>When the menu on <a href="http://www.weather.com" title="this case teaches us that the effect of mice on weather is underestimated">weather.com</a> disappears because mouse events happen in the wrong order, I can re-order them</li>
<li>When search results on <a href="http://www.google.com/codesearch" title="The #1 Geek Oracle">Google Codesearch</a> appear as white-on-white I can re-style them</li>
</ul>

<p> Now there&#39;s a thought. Opera - the browser that works around its bugs so you don&#39;t have to? This is like a time machine - we can fix our past sins for already released versions.</p>

<p>In the long term, this is a very important and subtle effect of browser.js: there will be less Opera-specific hacks to worry about. Both IE8&#39;s upgrade woes and our own experience tells us that <em>workarounds against our own old bugs are among our worst problems.</em> We did the wrong thing, sites did the wrong thing in response. We fixed it on our side, but <em>the web never forgets your old bugs</em>.</p>

<p>The difference with browser.js? When we release a new version with bug fixes, corresponding browser.js patches are secretly dropped as obsolete. What used to work because of browser.js hacks keeps working because the new version supports it, making the upgrade experience smoother for users and web developers alike, and <em>a lot</em> simpler for us. I can almost feel the envy of the IE8 team across the Atlantic.</p>

<p>Another interesting effect is that we can implement new standards with less worries. When HTML5&#39;s &lt;input required&gt; feature breaks <a href="http://www.barnesandnoble.com/" title="The web&#39;s favourite also-ran book store?">Barnes &amp; Noble</a> because the user name field in the login form isn&#39;t <em>really</em> required input after all <em>when you click the &quot;create account&quot; button</em> - we can first patch it, and later tell the spec editor about our problems and discuss if the spec can be made more web-compatible.</p>

<h3>Transparency</h3>
<p>From the very beginning, one of the main concerns was that our fixes would prevent webmasters from finding and correcting problems. We might even end up <em>creating</em> problems if our patches linger on while the site changes.</p>

<p>To make things as transparent as possible, the patches are <a href="http://www.opera.com/docs/browserjs/" title="um, it&#39;s probably still a bit outdated. Sorry about that.">documented</a>, we try to keep the file itself readable and reasonably well commented (though we also try to avoid unnecessary download bloat). And every patch applied will output a message in Opera&#39;s error console trying to make it obvious what is going on.</p>

<p><b>Update:</b> to make things even more transparent, the latest released browser.js file is now <a href="https://github.com/operasoftware/browserjs/">available on GitHub</a> for your JavaScript-reading pleasure!</p>

<h3>Scope</h3>
<p>Site patching is cross-platform. Actually, that&#39;s an understatement. Did you know we have site patches for <a href="http://www.nintendo.com/wii" title="cool, white, Opera-powered box">Nintendo Wii</a>? And for the <a href="http://www.nintendodsi.com/" title="Did you know people even *blog* from this thing?!?">DSi</a>? For Opera on Windows Mobile, Symbian, BREW and <a href="http://www.archos.com/" title="Someone said Opera is the de-facto standard where you don&#39;t expect a browser. I want one of these.">Archos</a>&#39;s portable media players? Heck, we even have patches for <a href="http://www.operamini.com/" title="Meet the browser that can&#39;t decide if it is a client or a server">Opera Mini</a>!</p>

<ul>
<li>When <a href="http://www.hotmail.com" title="Hot or not? Well, since they now brand it Windows Live instead I guess it&#39;s official..">Hotmail</a> and <a href="http://mail.yahoo.com" title="The Web App Formerly Known as Oddpost">Yahoo mail</a> require rich text editing to compose E-mail we can fake rich text support even on devices with input and CPU limitations where rich text support is impossible</li>
<li>If <a href="http://www.facebook.com" title="Phone directory meets Web 2.0">Facebook</a>&#39;s fancy animations take too long to run for the Opera Mini server - it needs to pass content on to the actual client after all - we can cut them short and yet perform the important actions Facebook saved for the end of the animation.</li>
</ul>

<p>It&#39;s an ambitious scope, probably much more ambitious than it might seem from the outside. The devices and platforms have very different requirements and problems. For example:</p>

<ul>
<li>On the Wii we have a minimum font size to keep things readable - but this often causes unexpected widths, wrapping and repositioning content in ways that don&#39;t happen on a Desktop browser. We patch several sites that have too rigid positioning to accomodate a slightly larger font size.</li>
<li>Using an on-screen keyboard on the Wii and many mobile phones means the window resizes itself every time you focus a form element - to make room for the keyboard. When <a href="http://www.ba.com" title="the world&#39;s favourite reload implementation? Maybe not.">British Airways</a> re-loads the booking page <em>every time you resize it</em>, booking a ticket with a virtual keyboard becomes pretty hard...</li>
<li>..and when <a href="http://www.ebay.fr/" title="Vive la France! But would you mind stop watching my keys?">eBay in France</a> tries to count your keydown events to make sure you don&#39;t cheat and <em>paste</em> your e-mail address into the registration form&#39;s &quot;re-type E-mail&quot; field it won&#39;t work with on-screen keyboards either. Some of them just don&#39;t support key events. Come on eBay, I really <em>did</em> type it in. I mean, REALLY! On hardware where cut-and-paste isn&#39;t even AVAILABLE!...</li>
</ul>

<p>When dealing with such a range of problems the true and magic potential of browser.js becomes apparent.</p>

<h3>Infrastructure</h3>
<p>To support all this, we need some nifty download servers picking the correct file for any client that asks for one. We have a database of patches and meta data like what versions and platforms a patch applies to. But did you know we also have a script spidering sites to check if broken parts are still there? When a patched site changes a relevant piece of code, I want to know about it. I love the sound patches make when they hit the virtual &quot;obsolete&quot; bin.</p>

<h2>Constraints</h2>
<h3>Time</h3>
<p>So much power, so little time.. Analysing sites and developing patches takes a lot of time. We are nowhere near IE8&#39;s overwhelming list of 2400+ sites. (Actually, browsing the IE8 list is a <em>Déjà vu</em> experience. Many familiar names, many sites we need to patch or contact for various reasons too.)</p>

<p>Nevertheless, our list is shorter - fortunately! Technical analysis with the level of detail required to support our site patching can be very time consuming, so I hope we&#39;ll remain smaller and more focused than the IE list. We will however scale the efforts up - we&#39;re at 600+ entries in the database and there is room for plenty of more - and we welcome <a href="http://my.opera.com/operaqa/blog/2008/09/17/you-can-be-a-site-compatibility-wizard" title="come on.. give us some love and JavaScript :)">contributions</a>.</p>


<h3>Performance</h3>
<p>I just said there is room for plenty of more patches. But how far can we scale site patching before performance suffers too much?</p>

<p>Apparently we can keep going for quite a while. Some profiling work we did recently indicates that we can patch upwards of 10 000 specific sites without slowing Opera down by more than a couple of percentage points. And frankly, by the time we&#39;ve written patches for 10 000 sites you&#39;ve probably bought a more powerful computer..</p>

<h3>Security</h3>
<p>Isn&#39;t it unsafe? Can&#39;t a virus or malicious server fake your browser.js file and gain instant control of your Opera browsing?</p>

<p>The short answer is: no.</p>

<p>The longer answer is that this would be possible without our security precautions, but it is in fact all taken care of. Every file is signed, so Opera can check that it is a genuine file and that it has not been tampered with. Such a signature is very, very hard to fake. If a malicious server or virus alters the file, Opera will stop using it and try to download a fresh version from the server.</p>

<h2>Conclusions</h2>

<p>One of the things that surprised me most about browser.js work is how quickly the web changes. <em>By paying such close attention to specific sites we see the web as a whole evolve</em>, and it&#39;s iterating faster than I would have dared to expect. And contrary to what you might expect, we do see sites change to become more Opera-friendly <em>after</em> we&#39;ve patched them!</p>

<p>That means <a href="http://my.opera.com/hallvors/blog/show.dml/103863" title="I came across this old blog post of mine so I might as well quote from it">site patcing works</a>. It works because it improves compatibility, thereby giving users a real choice in browsers and - as weird as it may sound - as a direct effect of that, it gives webmasters incentives to make sure their sites are Opera- and cross-browser-compatible.</p>

<p>Welcome to the future - <em>made of and with standards, openness and site patching.</em></p>

<hr />
<h2><span style="font-size: 80%">About the author</span></h2>
<p><span style="font-size: 80%"><a href="/hallvors/blog/" title="rel=me">Hallvord R. M. Steen</a> works for Opera&#39;s core team on quality assurance, testing and web compatibility. He maintains the browser.js file and can break all websites worldwide with a minor typo.</span></p>
