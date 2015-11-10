---
title: New experimental with Console fixes and UI tweaks
authors:
- patrick-lauke
tags:
- experimental
- dragonfly
license: cc-by-3.0
---

<p>We have a new build up on the experimental branch.</p>
<pre><code><a>https://dragonfly.opera.com/app/experimental/</a></code></pre>
<p>The main focus this time has been to improve some of the performance and functionality aspects of the Console.</p>
<p>Rendering output to the Console has now been considerably optimised. For example, this innocent-looking piece of code used to take about 3 seconds (depending on your specific hardware/OS) to render all the output:</p>
<pre><code>for (var i = 0; i &lt; 100; i++) { console.log(i); }</code></pre>
<p>With our latest performance enhancements, the output is displayed almost instantly.</p>
<p>We have also added the ability to trigger breakpoints directly from the Console. If you have a breakpoint set in <code>f()</code>, you can now trigger it by calling the method from the Console&#39;s command line:</p>
<pre><code>&gt;&gt;&gt; f()</code></pre>
<p>But not all new improvements are hidden under the hood. This experimental release also features a few UI tweaks.</p>
<img src="{{ page.id }}/dragonfly-experimental-october-UI-tweaks.png" alt="A small comparison of the old and new Opera Dragonfly button design and grouping" />
<p>Overall, the grey icons have now been made a tad lighter, buttons have been given a bit more padding, and related buttons are now grouped together. This should give a much clearer, more pleasant debugging experience.</p>
<p>There are lots more little bug fixes and changes in this release - see the <a href="http://dragonfly.opera.com/app/stp-1/experimental/logs/">changelogs</a>.</p>
