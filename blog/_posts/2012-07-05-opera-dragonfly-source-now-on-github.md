---
title: Opera Dragonfly source now on GitHub
authors:
- patrickhlauke
- dragonfly
layout: post
---
<p>Effective from today, <a href="http://www.opera.com/dragonfly">Opera Dragonfly</a>&#39;s source code has officially moved from our old <a href="https://bitbucket.org/scope/" title="Opera Dragonfly&#39;s Bitbucket repository">Bitbucket repository</a> to a shiny new home over in the <a href="https://github.com/operasoftware">Opera Software account on GitHub</a>. This move aims to harmonise and gather Opera&#39;s various open source projects into a single, sensible location.</p>

<p><span class='imgright'><img alt='' src='/blog/opera-dragonfly-source-now-on-github/octocat.png' /></span>The four repositories that have been transferred are:</p>

<ul>
<li><a href="https://github.com/operasoftware/dragonfly"><code>dragonfly</code></a></li>
<li><a href="https://github.com/operasoftware/dragonfly-manual-test-suite"><code>dragonfly-manual-test-suite</code></a></li>
<li><a href="https://github.com/operasoftware/dragonfly-build-tools"><code>dragonfly-build-tools</code></a></li>
<li><a href="https://github.com/operasoftware/dragonkeeper"><code>dragonkeeper</code></a></li>
</ul>

<p>The <a href="https://github.com/operasoftware/dragonfly"><code>dragonfly</code></a> repository has three main branches: <code>master</code>, <code>cutting-edge</code> and <code>bugfixes</code>. The <code>HEAD</code> of <code>master</code> will always match the current stable release of Opera Dragonfly at <a><code><a href="https://dragonfly.opera.com/app/" target="_blank">https://dragonfly.opera.com/app/</a></code></a>, while the <code>HEAD</code> of <code>cutting-edge</code> matches <a><code><a href="https://dragonfly.opera.com/app/cutting-edge/" target="_blank">https://dragonfly.opera.com/app/cutting-edge/</a></code></a>. Note that there is no <code>experimental</code> branch – these builds are generated separately, in a temporary repo, as they&#39;re often focused on simply testing a particular new feature.</p>

<p>These repositories were converted from Mercurial to git, so their structure and commit history should have all been preserved in the process. The only aspect that hasn&#39;t been automagically transferred are the various <a href="https://bitbucket.org/scope/dragonfly-stp-1/issues?status=new&amp;status=open">issues that were posted on Bitbucket</a>. If you have a burning issue that you&#39;d like to see addressed, we&#39;d suggest re-posting it over on GitHub.</p>
