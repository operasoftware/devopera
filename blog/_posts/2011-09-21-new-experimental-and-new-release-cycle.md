---
title: New fast release cycle and a fresh experimental build
authors:
- david-hasather
tags:
- experimental
- dragonfly
layout: post
---
<p>With the big launch of Opera Dragonfly 1.1 out of the way, we’ve decided it’s time to make some changes to our release cycle. From now on releases will be more focused on improvements to individual components, e.g. the DOM inspector or the UI framework. As soon as a feature for a certain component has been implemented, it will be put on the experimental path for some initial testing.</p>

<pre><code><a>https://dragonfly.opera.com/app/experimental/</a></code></pre>

<p>It will then be released on the cutting-edge path as a release candidate, where it can be tested by more users.</p>

<pre><code><a>https://dragonfly.opera.com/app/cutting-edge/</a></code></pre>

<p>If no issues are found, this will then be released as a new version on the default path.</p>

<p>In short, this will result in a faster release cycle, where new and improved features will be available to users much quicker than before.</p>

<p class="note">To switch to the experimental or cutting-edge builds, paste the URL into <a href="opera:config#Developer%20Tools%20URL">opera:config#DeveloperTools|DeveloperToolsURL</a>, click the <em>Save</em> button, and (re-)open Opera Dragonfly.</p>

<p>As part of this new release strategy, we’re also switching over Opera Dragonfly to a new version scheme:</p>

<pre><code>&lt;major-version&gt;.&lt;year&gt;.&lt;month&gt;.&lt;date&gt;.&lt;today’s-build&gt;</code></pre>

<p>For example, a version number of <code>1.2011.11.21.2</code> will indicate major version 1, released 2011-11-21. It’s also the second build released on that day.</p>

<p>To kick things off, we also have a new experimental release today. The focus has been on improving the UI framework. The dimension of panels will now be stored, and will be better preserved when resizing the application. Resizing performance in the scripts view has also been improved. And we’ve made some tweaks to overall text selection – for example, it’s not possible to accidentally select the text of tabs and various other UI elements anymore.</p>

<p>We’ve also fixed an issue where Opera Dragonfly wouldn’t start in Opera 12 pre-alpha (<a href="http://www.opera.com/browser/next/">Opera Next</a> to its friends), as well as some other minor bugs. Lastly, we’ve added <kbd>Ctrl</kbd>-<kbd>R</kbd> and <kbd>⌘</kbd>-<kbd>R</kbd> as a handy shortcut for reloading the debug context.</p>

<p>See the <a href="http://dragonfly.opera.com/app/stp-1/experimental/logs/4981.83d21cc21b45.log" target="_blank">full changelog</a> for further details.</p>

<p>Big thanks to Rafał Chłodnicki (Opera employee, but not on the Opera Dragonfly team) for fixing some of his pet bugs in this release. :)</p>
