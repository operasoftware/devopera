---
title: How to get started contributing to Opera Dragonfly development
authors:
- hallvord-steen
tags:
- mercurial
- development
- bitbucket
- hacking
- dragonfly
license: cc-by-3.0
layout: post
---

<span class='imgright'><img alt='' src='/blog/how-to-get-started-contributing-to-opera-dragonfly-development/bb-logo.png' /></span> <p>The web developer tool <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> is open source, and it&#39;s written in JavaScript. It&#39;s available from <a href="https://bitbucket.org/scope/dragonfly-stp-1/">a public repository on Bitbucket</a> so that everyone who would like to can contribute. Sounds easy? It&#39;s meant to be.. but how, exactly, do you get started?</p>

<p>Here&#39;s a quick guide to begin hacking, including how you send your hacks back to the Dragonfly developers when you find them useful.</p>
<h2>Getting a local copy of Opera Dragonfly</h2>
<ol>
<li>First, if you don&#39;t already have the Mercurial version control software go to <a href="http://mercurial.selenic.com/">the Mercurial site</a> and download it. It&#39;s a really quick and painless installation.</li>
<li>You need to register with the <a href="https://bitbucket.org/">Bitbucket.org</a> site to easily fork the code and contribute changes back. Signing up is free - go for the <a href="http://bitbucket.org/account/signup/?plan=5_users">5 users free plan</a> option. (If you just want to hack on a local copy this step is not really required, but isn&#39;t half the fun sharing the hacks with other people?)</li>
</ol>
<p>When those initial setup chores are done, you&#39;re ready to create a copy to work on.</p><span class='imgright'><img alt='' src='/blog/how-to-get-started-contributing-to-opera-dragonfly-development/bb-fork.png' /></span>
<ol>
<li> After logging in to Bitbucket, go to the <a href="https://bitbucket.org/scope/dragonfly-stp-1">Opera Dragonfly repository home page</a> (or perhaps you prefer the
cutting edge <a href="https://bitbucket.org/scope/dragonfly-stp-1-experimental">experimental</a> one?) and click &quot;Fork&quot;. Give your fork a suitable name, for example by including your user name to make it obvious it&#39;s your personal playground.</li>
<li>When the fork is ready, the site tells you what command to use to create a local clone. For example, I clone mine with this command:
<code>hg clone <a href="https://hallvors@bitbucket.org/hallvors/dragonfly-stp-1-hallvors" target="_blank">https://hallvors@bitbucket.org/hallvors/dragonfly-stp-1-hallvors</a></code>, but you will naturally have your user name instead of mine. To run this command, use your operating system&#39;s command line:
<ol>
	<li>Open a command line / terminal window</li>
	<li>Go to a suitable folder with the <code>cd</code> command</li>
	<li>Copy the &#39;hg clone&#39; command from the Bitbucket site, paste it in the command line window and press enter</li>
</ol>
</li>
</ol><span class='imgcenter'><img alt='' src='/blog/how-to-get-started-contributing-to-opera-dragonfly-development/bb-hg-cmdline.png' /></span>
<p>Mercurial now copies Opera Dragonfly to your computer so that you can play around and make changes.</p>

<h2>Using and editing your local copy</h2>
<p>Congratulations, now you&#39;ve got a local copy of Opera Dragonfly. You can explore the folder Mercurial created to see how the files are organised - the source code is inside the src folder, and the main application starting point is the client-en.xml file.</p>
<p>While developing, you probably want to keep testing your changes. To do so, you can simply make Opera use your local copy as developer tool instead of the official version:</p>
<ol>
	<li> Go to <a href="opera:config#DeveloperTools|DeveloperToolsURL">opera:config#DeveloperTools|DeveloperToolsURL</a></li>
	<li>Change the value to point to the <code>src/client-en.xml</code> file. (Note: it seems this value needs to start with <a href="" target="_blank"></a> when pointing to a local resource. If you first open client-en.xml in a new Opera tab, you can copy the address from there to the Developer Tools URL field.) </li>
	<li><b>Tip: if you add ?debug after client-en.xml, Opera Dragonfly will show an extra debug pane that lets you inspect the communication between Opera&#39;s core and the debugger.</b> This is really handy when getting familiar with the way it works.</li></ol><span class='img'><img alt='' src='/blog/how-to-get-started-contributing-to-opera-dragonfly-development/opera-config-devtools.png' /></span>

<p>This is where the real fun starts. Anything you always wanted to be able to do with a web debugger? Well, perhaps it will work once you&#39;ve done a bit of hacking :)</p>
<h2>Updating your local copy</h2>
<p>While you&#39;re playing around, chances are that Opera&#39;s developers - or other contributors - make changes that appear in the official repository. Since you have made a copy of Opera Dragonfly for your own hacking, you are stuck in time and will keep working on an increasingly outdated version, right?</p>
<p>Don&#39;t worry - simply open the command line / terminal, go to the correct folder and run the command <code>hg pull <a href="https://bitbucket.org/scope/dragonfly-stp-1" target="_blank">https://bitbucket.org/scope/dragonfly-stp-1</a></code> followed by <code>hg merge</code>. Your version is now up-to-date.</p>
<p>If you are not familiar with Mercurial and want some more information about using it, Joel Spolsky has a <a href="http://hginit.com/">pretty good hg tutorial at hginit.com</a>. Atlassian has a lot of useful information on using Bitbucket, see for example their <a href="http://confluence.atlassian.com/display/BITBUCKET/Bitbucket+101">Bitbucket 101</a> overview. Here you can find information about more advanced topics like how to resolve merge conflicts.</p>
<h2>Making your changes public</h2>
<p>So, when you&#39;ve fixed an annoyance or added a feature, it&#39;s time to share your work.</p>
<ol>
<li>Edit the <code>.hg/hgrc</code> file to add your Bitbucket user name - in mine, I&#39;ve added this section:
<pre><code>[ui]
username = hallvors
</code></pre>
</li>
<li>Go to the command line / terminal, change to correct folder and type <br /><code>hg commit -m&quot;quick description of the changes&quot;</code></li>
<li>Followed by <br /><code>hg push</code><br /> and your Bitbucket password when prompted.</li>
</ol><span class='imgright'><img alt='' src='/blog/how-to-get-started-contributing-to-opera-dragonfly-development/bb-pull-req.png' /></span>
<p>Success! The change should now show up as a revision on your Bitbucket repository, where you can share it with others - for example by going to the official repository to use the &quot;Pull request&quot; button. Good luck and thanks in advance for any contributions!</p>
