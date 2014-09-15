---
title: Running Opera Dragonfly offline
authors:
- daniel-herzog
tags:
- performance
- developer-tools
- offline
- dragonfly
license: cc-by-3.0
---

<p>Opera Dragonfly uses <a href="https://html.spec.whatwg.org/#applicationcache">HTML5 Application Cache</a> (commonly known as AppCache) to store itself on your machine. The biggest advantage is probably that Opera Dragonfly still works while you are completely offline, updating itself to the newest version available when you go back online. In addition, this also reduces start-up time: Opera Dragonfly will execute from cache as soon as it&#39;s invoked, while any newer version will only be downloaded once the tool is already running.</p>

<p>However, there are a few situations in which this use of AppCache won&#39;t work, and Opera Dragonfly will need to first be downloaded via a live web connection before being usable:</p>

<ul>
<li>You&#39;ve never started Opera Dragonfly with this instance of Opera before (for example, after a fresh installation)</li>
<li>You&#39;re using multiple profiles in Opera and you&#39;ve have never started Opera Dragonfly in this particular profile.</li>
<li>You have cleared the list of <em>Webpages using persistent storage</em> in your preferences or specifically removed the entry for <code>dragonfly.opera.com</code></li>
</ul>

<p>In these situations, there are a few (admittedly rare or unlikely) things that can go horribly wrong and prevent Opera Dragonfly from being downloaded correctly:</p>

<ul>
<li>Your browser version is too old to support AppCache</li>
<li>Your browser&#39;s <em>Use application cache</em> preference is set to <em>No</em>, or you haven&#39;t started Opera Dragonfly since you set it back to <em>Yes</em></li>
<li>You don&#39;t have enough free disk space for Opera Dragonfly to be stored (currently it needs ~370KB)</li>
<li>The file transfer was interrupted (someone fell over the cable while Opera Dragonfly was loading from the Internetz)</li>
</ul>

<p>To check if your particular instance of Opera Dragonfly will also work correctly offline, <s>unplug the cable</s> <s>disable wifi and try</s> take a look at <em>Preferences &gt; Advanced &gt; Storage</em> and check that <code>dragonfly.opera.com</code> is in the list and takes up a few hundred KBs of space.</p>

<p>We&#39;re working on a fancy AppCache status display for <em>Settings &gt; About</em> to show you more clearly what&#39;s going on – but you&#39;ll see more on that in a future blog post.</p>

<h3>Advanced: Clone me, fork me, build me</h3>

<p>If you want to be 100% independent of AppCache and are not afraid of a bit of command line work, you can use <a href="http://mercurial.selenic.com/">Mercurial</a> to grab the entire source from the <a href="http://bitbucket.org/scope/dragonfly-stp-1/">Opera Dragonfly repository on Bitbucket</a>.</p>

<pre><code>$ hg clone <a href="https://bitbucket.org/scope/dragonfly-stp-1" target="_blank">https://bitbucket.org/scope/dragonfly-stp-1</a></code></pre>

<p>You&#39;ll get the very latest version of the code from our repository, but be warned: this will include all the latest changes, which will not have undergone testing – so there&#39;s a chance that some things may break. Once cloned, enter the local <code>/path/to/dir/src/client-en.xml</code> in the URL field of <a href="opera:config#DeveloperTools"><code>opera:config#DeveloperTools</code></a>, and next time Opera Dragonfly will run directly from your machine.</p>

<p>To update your local version with Mercurial, simply issue a pull and update command and restart Opera Dragonfly.</p>

<pre><code>$ hg pull
$ hg update</code></pre>

<p>Although simply running the code from the repository will work just fine, you can also improve your local Opera Dragonfly&#39;s start-up time by running our <a href="https://bitbucket.org/scope/dragonfly-tools">Opera Dragonfly build tools</a>, which preprocess some of the files for greater performance. These tools have recently been rewritten and we&#39;ll follow this up with detailed instructions on their function and usage soon.</p>

<h3>Future outlook</h3>

<p>We realize that it&#39;s crucial to have Opera Dragonfly available offline whenever possible – and that includes a fresh install of Opera. As outlined, due to the nature of AppCache, there&#39;s currently still a need for the code to be loaded at least once through a live internet connection. Rest assured, though, that we&#39;re investigating ways in which even this initial hurdle can be overcome in future versions. Until that point, please make sure to &quot;seed&quot; the cache of your development instance and profile of Opera at least once before embarking on any offline debugging adventures.</p>
