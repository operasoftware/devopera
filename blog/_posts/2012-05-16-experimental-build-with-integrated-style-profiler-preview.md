---
title: Experimental build with integrated style profiler preview
authors:
- david-hasather
tags:
- performance
- dragonfly
license: cc-by-3.0
---

<p>Back in November, we released a standalone build of <a href="http://my.opera.com/dragonfly/blog/style-profiler-preview">Opera Dragonfly&#39;s style profiler</a>. In today&#39;s release on the experimental path, the profiler is now integrated  next to the other Opera Dragonfly tabs and tools.</p>

<p>When switching to the Profiler tab, Opera Dragonfly will ask to reload the page. This is necessary in order to get the best possible profiling data, without any overhead from other debugging services that Opera Dragonfly usually runs. <sup><a href="#fn051601-1" id="fnr051601-1">[1]</a></sup></p>

<p>Please note that this is the same version of the profiler that was previously released in the standalone version, so there aren&#39;t any new pieces of functionality. However, we&#39;re already working on more features, such as the ability to zoom into the timeline.</p>

<p>This release also includes the <a href="https://www.youtube.com/watch?v=wLz2ZOoz784#t=78s">inspection of return values</a> that was <a href="http://my.opera.com/dragonfly/blog/2012/04/13/early-look-at-upcoming-features-pretty-print-function-return-values-upnp">mentioned on the blog recently</a>.</p>

<ol class="note">
<li id="fn051601-1"><p><a href="#fnr051601-1">↑</a> When Opera Dragonfly is opened, it starts a few services for debugging purposes. One of these is the ECMAScript debugger service, which disables JIT. By disabling this service, the profiler will give much more accurate data, since JIT will remain enabled.</p></li>
</ol>
