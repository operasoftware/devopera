---
title: Opera Dragonfly Alpha 3
authors:
- david-storey
tags:
- alpha
- dragonfly
- developer-tools
- odin
layout: post
---
<p> Today saw the release of <a href="http://www.opera.com/products/dragonfly">Opera Dragonfly alpha 3</a>.  As it is based on web technology, you don&#39;t have to do anything—it will just update itself the next time you load it.  Key new features are DOM editing, localisation, and improved breadcrumb trail.  Full details can be found at the <a href="http://my.opera.com/dragonfly/blog/introducing-opera-dragonfly-alpha-3">Opera Dragonfly blog</a>. </p>
<h3>object not found error?</h3>
<p>If you get an error using Opera Dragonfly saying &quot;object not found&quot;, it&#39;s a confusion between versions. By default, if you&#39;re running a stable build of Opera,  it tries to use the latest stable version of Opera Dragonfly, while running a pre-release of Opera (alpha, beta or a weekly) tries to connect to the latest experimental version of Opera Dragonfly. Sometimes this can get confused.</p>

<p>To cure it, update &lt;URL:opera:config#DeveloperTools|DeveloperToolsURL&gt; to either of these:</p>
<ul><li>
<a href="https://dragonfly.opera.com/app/" target="_blank">https://dragonfly.opera.com/app/</a> for the latest stable version, or</li>
<li><a href="https://dragonfly.opera.com/app/cutting-edge" target="_blank">https://dragonfly.opera.com/app/cutting-edge</a> for  the latest cutting edge-build.</li>
</ul>
