---
title: Installing multiple Opera instances with separate profiles on Mac
authors:
- andreas-bovens
tags:
- install
- mac
- opera
layout: article
---
<p><strong>Update 2011-01-28: From Opera 11.01 and onward, the <code>-csp</code> command line hook should be used instead of the <code>PrefsSuffix</code> method described below. See <a href="http://my.opera.com/daniel/blog/2011/01/28/opera-mac-multiinstallation-summary">Daniel Aleksandersen&#39;s multi-installation blog entry</a> for full details.</strong></p>

<p>If you&#39;re an avid <a href="http://my.opera.com/desktopteam/blog/">Opera snapshot</a> downloader, you&#39;ve probably bumped into a situation where you want to install an Opera build with a clean profile, rather than having it reuse an already existing profile.</p>
<p>At first sight, there&#39;s no easy way to do so, but luckily enough, there&#39;s a handy command line hook that helps you out. A quick step-by-step guide to explain how you can install 2 Opera instances with separate profiles:</p>
<ol>
<li>Install the first Opera instance in the Applications folder</li>
<li>Rename it to <code>Opera_xxx</code></li>
<li>Install the second Opera instance in the Applications folder</li>
<li>Rename it to <code>Opera_yyy</code></li>
<li>Open up Terminal (can be found in the Utilities folder)</li>
<li>Type <code>cd /Applications/Opera_yyy.app/Contents/Resources/</code> and hit enter</li>
<li>Then type <code>echo &quot;Opera_yyy&quot; &gt;&gt; PrefsSuffix</code> and close the terminal</li>
<li>Done!</li>
</ol>
<p>If you launch <code>Opera_xxx</code> and <code>Opera_yyy</code> now, they will each run with their own profile. Of course, you can adjust the file name and profile strings to your liking :-)</p>
