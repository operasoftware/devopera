---
title: Console + UI + Script debugging release
authors:
- danfoooo
tags:
- console
- UI
- dragonfly
layout: article
---
<p>As <a href="http://my.opera.com/dragonfly/blog/2011/10/06/new-experimental-with-console-fixes-and-ui-tweaks">you&#39;ve seen before</a>, quite some work has gone into Opera Dragonfly&#39;s UI lately. We have now released these changes on the default path, so everyone should be able to see them. Here are some more things that we have improved:<p>
<h3>Debug what you submit in the console</h3>
<p>Before, when you placed a <b><code>debugger;</code></b> statement in the body of for example function a, you didn&#39;t hit that statement when you called <b><code>a()</code></b> from Opera Dragonfly&#39;s console. The reason was that it would have made things difficult in the interface. If you - while stopped - submitted <b><code>a()</code></b> again, it would get pretty hard to reflect this state in the user interface. The solution now is to let you debug anything that you type in the console, but once you&#39;re stopped, Dragonfly goes back to the old behavior so you won&#39;t be stopped again.<p>
<p>That means you can now submit something like <pre><code>(function(my_arg){debugger;})(&quot;let&#39;s have an argument&quot;)</code></pre> and you&#39;ll be stopped right away to see your arguments.</p>
<img src="/blog/console-ui-script-debugging-release/instant_debug_in_opera_dragonfly.png" width="620" height="335" alt="Instant debugging from the console in Opera Dragonfly" />
<h3>Stepping improvements</h3>
<p>When clicking through that not too exciting callstack above you won&#39;t notice, but updates in this view are now smooth. The view is not scrolled when stepping from line to line unless it has too. This was contributed by Rafał Chłodnicki, many thanks!</p>
<h3>Bugfixes</h3>
<p>Here is the list of bugs that were fixed with this release. More details are available in the <a href="https://dragonfly.opera.com/app/stp-1/logs/5056.1d40ae386f13.log">changelog</a>.</p>
<ul>
<li>DFL-1855	Accessing or setting a property named &quot;values&quot; in the command line throws an error</li>
<li>DFL-2520	Exception when clicking some areas in Session storage UI after text selection</li>
<li>DFL-2555	Exception when switching to Utilities and then Errors very fast</li>
<li>DFL-2585	console.group(&quot;hello&quot;) doesn&#39;t work, throws, leaves console broken</li>
<li>DFL-2575	Exception while using autocomplete during stepping</li>
<li>DFL-2596	console.group() throws</li>
<li>DFL-2580	Go to line in Resources is broken</li>
<li>DFL-2545	for(var i = 0; i&lt; 100; i ++) { console.log(i); } is slow in the console</li>
<li>DFL-2570	The HTTP interface of DFL does not handle U+2028 and U+2029 correctly</li>
<li>DFL-2572	&quot;invalid character escape sequence&quot; when autocompleting RegExp</li>
<li>DFL-2581	Don&#39;t show console scripts in the script dropdown</li>
<li>DFL-1568	Stepping should not scroll script view if target line is visible</li>
<li>DFL-2534	Styling of checkbox labels should be changed to not look disabled when not hovered</li>
<li>DFL-2549	debugger; won&#39;t work when submitted via console</li>
<li>DFL-2561	Console is not scrolled to bottom when re-opening</li>
<li>DFL-2569	Arrow on overlays doesn&#39;t point to the middle of pressed button</li>
<li>DFL-2556	Style and icons update</li>
<li>DFL-2490	remove dependency on document.document</li>
</ul>
