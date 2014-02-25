---
title: 'Early look at upcoming features: “pretty print”, function return values, UPnP'
authors:
- patrick-lauke
tags:
- pretty-print
- remote-debugging
- gogi
- experimental
- upnp
- dragonfly
layout: post
---
<p>The blog may have been a bit quiet in recent weeks, but the Opera Dragonfly team has certainly not been idly sitting around twiddling their thumbs. There are some nice little features being worked on behind the scenes, but unfortunately they&#39;re not quite ready to be pushed to the experimental channel just yet, as they require actual changes to the underlying browser architecture itself...but here&#39;s a short video teaser, where I run through some of the new features in what we call a GOGI build. You&#39;ll notice that the interface of these builds is very spartan, to say the least, but we use these builds internally at Opera to test core functionality, before any of the regular browser UI is applied.</p>

<object width="560" height="315"><param name="movie" value="http://www.youtube.com/v/wLz2ZOoz784?version=3&amp;amp;hl=en_GB" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="never" /><embed src="http://www.youtube.com/v/wLz2ZOoz784?version=3&amp;amp;hl=en_GB" type="application/x-shockwave-flash" width="560" height="315" allowfullscreen="true" allowscriptaccess="never" /></object>

<p>The three features showcased in this video are:</p>
<ul>
<li>&quot;pretty print&quot; functionality to reformat JavaScript – particularly useful when analysing and debugging minified scripts</li>
<li>an enhancement to the JavaScript inspection panel, which now shows any functions that executed – and their return values – when stepping through code in the debugger</li>
<li>improved remote debugging workflow using UPnP (Universal Plug and Play) to automatically find instances of Opera Dragonfly listening on the local network, without the need to enter manual IP addresses in <code>opera:debug</code></li>
</ul>

<p>We can&#39;t make any promises as to when you&#39;re going to start to see these features appearing in an experimental build, because of the underlying core browser changes that are required. Nonetheless we&#39;re very excited to be showing you these features at this early stage, and we&#39;d really welcome your feedback and suggestions. Thank you.</p>
