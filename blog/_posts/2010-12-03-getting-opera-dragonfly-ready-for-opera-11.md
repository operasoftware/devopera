---
title: Getting Opera Dragonfly ready for Opera 11
authors:
- david-storey
tags:
- alpha
- command-line
- opera-11
- dragonfly
license: cc-by-3.0
layout: post
---

<p>With <a href="http://www.opera.com/browser/next/">Opera 11 in Beta</a>, we are in the process of getting Opera Dragonfly updated for the final release. We now have a release candidate ready on the cutting-edge branch. Once Opera 11 is released, this branch will be pushed to the default path and will become the next alpha release of Opera Dragonfly.</p>

<h3>Key features</h3>

<p>The main new features for the Opera Dragonfly Alpha for Opera 11 include the following features:</p>

<ul>
    <li>Updated Command Line</li>
        <ul>
             <li><a href="http://getfirebug.com/wiki/index.php/Console_API">Console API support</a></li>
             <li><a href="http://getfirebug.com/wiki/index.php/Command_Line_API">Command Line API support</a></li>
             <li>Improved auto-completion (press <kbd>Tab</kbd> to display and cycle through available options)</li>
             <li>Support for a few common <a href="http://en.wikipedia.org/wiki/Bash_(Unix_shell)#Keyboard_shortcuts">Bash keyboard shortcuts</a></li>
             <li>Support for unpacking any type of list as if they were Objects</li>
        </ul>
     <li>Support for Event Breakpoints (currently accessed from a button on the toolbar in the Scripts view)</li>
     <li>Support for debugging Opera Extensions</li>
     <li>Basic support for handling User.js and Browser.js</li>
     <li>Ability to configure keyboard shortcuts manually (under ”shortcut config” in the settings panel)</li>
</ul>

<p>As well as the abovefeatures, there have been many bug fixes for this release. A full change log since the last release can be found at the bottom of this post. This alpha release will be the last version before beta, when we move to the new Opera Dragonfly UI found in the experimental branch. Full resources will be diverted to getting Opera Dragonfly into final release quality, rather than updating the current version.</p>

<h3>A note about Opera Dragonfly Experimental</h3>

<p>A couple of releases have been pushed to the experimental path of Opera Dragonfly since the <a href="http://labs.opera.com/news/2010/09/29/">announcement on Opera Labs</a>. These changes include:</p>

<ul>
    <li>Command Line is now available globally. Invoke/dismiss with the <kbd>Esc</kbd> key or the Command Line icon (upper right). The keyboard shortcut is currently broken on Mac, but will be fixed in the next push</li>
    <li>Support for application wide context menus (right click)</li>
   <li>Links to W3C specifications for CSS properties and DOM Interfaces (HTML and SVG) on context menus</li>
   <li>Updated auto-complete values for SVG-specific CSS properties and new properties found in Opera 11</li>
   <li>Various UI optimisations</li>
</ul>

<p>The experimental branch is just that. It has features that are in progress, so may be incomplete (such as missing icons or not function as expected) and <strong>may break at any time</strong>.

<h3 id="enable">Enabling special builds</h3>

<p>The cutting-edge branch (builds that have been QA tested, which are being prepared for mainline) can be accessed from:</p>

<pre><code><a>https://dragonfly.opera.com/app/cutting-edge/</a></code></pre>

<p>The experimental branch (work in progress) can be accessed from:</p>

<pre><code><a>https://dragonfly.opera.com/app/experimental/</a></code></pre>

<p class="note">To switch to the experimental or cutting-edge builds, paste the URL into <a href="opera:config#Developer%20Tools%20URL" rel="nofollow">opera:config#DeveloperTools|DeveloperToolsURL</a>, click the <em>Save</em> button, and (re-)open Opera Dragonfly.</p>

<h3>Change log</h3>

<p>To see all changes please see the <a href="http://people.opera.com/dstorey/dfl/2563.4ea4a7f20f8f.log">Change log for Opera Dragonfly Alpha for Opera 11</a>.</p>

</p>
