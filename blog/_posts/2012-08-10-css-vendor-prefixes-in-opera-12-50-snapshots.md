---
title: CSS Vendor Prefixes in Opera 12.50 Snapshots
authors:
- bruce-lawson
tags:
- webkit
- gradients
- prefixes
- prefixes
- opera-presto
license: cc-by-3.0
---

<p>Vendor prefixes have been useful, but they have arguably caused as many problems as they&#39;ve solved, both in CSS and <a href="http://lists.w3.org/Archives/Public/public-webapps/2012JulSep/0392.html">DOM APIs</a>. So, in the run up to Opera 12.50, we&#39;re removing as many <code>-o-</code> prefixes from stable CSS properties as we can.</p>

<p>Last week, Patrick mentioned the <a href="http://my.opera.com/ODIN/blog/2012/08/03/a-hot-opera-12-50-summer-time-snapshot">removal of prefixes from Transitions, Animations and Transforms</a>.</p>

<p>In <a href="http://my.opera.com/desktopteam/blog/2012/08/10/more-marlin">today&#39;s Opera 12.50 snapshot</a>, we&#39;re removing prefixes from CSS Gradients. The <a href="http://www.broken-links.com/2012/01/11/the-new-and-hopefully-final-linear-gradient-syntax/">latest CSS Gradients syntax</a> is supported in Opera with no prefix. Using an <code>-o-</code> will no longer work, so if your CSS still has some <code>-o-linear-gradient</code> hanging around, you should start to include the unprefixed version as well.</p>

<p>While it&#39;s encouraging to see that Opera, <a href="https://hacks.mozilla.org/2012/07/aurora-16-is-out/">Firefox</a> and even <a href="http://blogs.msdn.com/b/ie/archive/2012/06/06/moving-the-stable-web-forward-in-ie10-release-preview.aspx">Internet Explorer 10</a> are accelerating the move towards unprefixing stable CSS properties, it&#39;s not all roses. The elephant in the room is of course the WebKit family of browsers, which continue to support the <code>-webkit-</code> prefixed stuff even in parallel with the unprefixed variants. This means that &quot;Web developers&quot; who only test in (or care about) WebKit have no incentive to move to unprefixed CSS, and their sites will look broken in non-WebKit browsers.</p>

<p>Admittedly, the history of <code>linear-gradient</code> has been very tumultuous, with a series of incompatible syntaxes being implemented at one time or another. Although we&#39;d love to just support the new unprefixed standard, our testing has shown that there are many sites that use an older syntax, but do so with only a <code>-webkit-</code> prefix. In order to ensure Opera users don&#39;t receive a worse experience, we&#39;ve included support for this older syntax when it&#39;s <code>-webkit-</code> prefixed. So, in Opera 12.50, the legacy syntax is supported:</p>

<pre><code>background: -webkit-linear-gradient(top, white, black);</code></pre>

<p>whereas the equivalent, newest syntax is supported without any prefixes:</p>

<pre><code>background: linear-gradient(to bottom, white, black);</code></pre>

<p>For reasons of site compatibility and interoperability, this Opera 12.50 snapshot also introduces aliasing for <code>-webkit-background-size</code>, as this particular property is heavily used on Japanese mobile sites. This brings the list of our aliased CSS properties to:</p>
<ul>
<li><code>-webkit-background-size</code></li>
<li><code>-webkit-box-shadow</code></li>
<li><code>-webkit-transform</code></li>
<li><code>-webkit-transform-origin</code></li>
<li><code>-webkit-border-radius</code></li>
<li><code>-webkit-border-top-left-radius</code></li>
<li><code>-webkit-border-top-right-radius</code></li>
<li><code>-webkit-border-bottom-left-radius</code></li>
<li><code>-webkit-border-bottom-right-radius</code></li>
<li><code>-webkit-transition</code></li>
<li><code>-webkit-transition-delay</code></li>
<li><code>-webkit-transition-duration</code></li>
<li><code>-webkit-transition-property</code></li>
<li><code>-webkit-transition-timing-function</code></li>
</ul>
<p>Therefore, if (for some reason) you&#39;re sending a different value to Opera than to webkit browsers, put the -o- prefixed rule <em>after</em> the <code>-webkit-</code> prefix, so the Opera one &quot;wins&quot; in the cascade.</p>
<p>You can find more information about this in our earlier article on the <a href="https://dev.opera.com/articles/view/opera-mobile-emulator-experimental-webkit-prefix-support/">Opera Mobile Emulator build with experimental WebKit prefix support</a>.</p>
