---
title: Start of the Opera Developer stream
authors:
- andreas-bovens
tags:
- opera-developer
- flags
- opera
- odin
layout: article
---
<p>As announced <a href="http://my.opera.com/desktopteam/blog/opera-features-and-release-cycle">on the Desktop Team Blog</a> a while back, we&#39;ve now switched to a fast release cycle with 3 different streams: Stable, Next and Developer.</p>

<img src="/blog/start-of-the-opera-developer-stream/0opera-developer.png" alt="Opera Developer logo" style="float: right; margin: 0 0 5px 5px;" />
<p>Today marks the <strong>release of our first Opera Developer build (<a href="http://www.opera.com/download/get/?partner=www&amp;opsys=MacOS&amp;product=Opera%20Developer">Mac</a>, <a href="http://www.opera.com/download/get/?partner=www&amp;opsys=Windows&amp;product=Opera%20Developer">Windows</a>)</strong>. If you&#39;re a web or extension developer, we recommend you to install this build, which will be auto-updated frequently from now on, and gives a peek at what we have in the pipeline, including but not limited to fresh web standards support.</p>

<p>What is the difference between Next and Developer? Opera Next is a preview of what will be in the next stable version of Opera, which at present is 16. Opera Developer on the other hand is more experimental: this build includes stuff that you may see in 17 or later, but possibly also features that never make it to stable.</p>

<p>To give a better feeling of this, here are some of the differences between the current Opera Next and this first Opera Developer build:</p>

<ul>
 <li>the current Opera Next version number is 16.0.1196.29, and it runs on Chrome 29; Opera Developer has 17.0.1224.1 as version number, and runs on Chrome 30.</li>
 <li>in this first Opera Developer build, we&#39;ve brought back Opera 12&#39;s <strong>tab pinning</strong> functionality, as well as <strong>rocker gestures</strong> (just enable mouse gestures if you haven&#39;t done so already)</li>
 <li>more extension API support: bookmarks, commands, omnibox, webNavigation — we&#39;re still working on documentation for those</li>
 <li>if you go to opera:settings in this build, you&#39;ll see 3 <strong>&quot;On startup&quot; options</strong>, giving you the choice between continuing from where you left off, opening a start page or opening a set of pages.</li>
 <li>another opera:settings option allows you to set <strong>custom search engines</strong> and trigger them with a keyword</li>
 <li>in opera:flags, you&#39;ll find a whole bunch of extra, more experimental settings. Some of this is Chromium stuff that you&#39;ll also find in Chrome Canary, while other bits are Opera-only flags. A selection:
  <ul>
   <li><strong>Media capture</strong> gives you microphone and camera support, which you can try out with <a href="http://webaudioplayground.appspot.com">Web Audio Playground</a> and <a href="http://webcamtoy.com">Webcam Toy</a>.</li>
   <li><strong>Extension action context menu</strong> adds a right-click menu to extension buttons, allowing for easy uninstalling of extensions and hiding of buttons.</li>
   <li><strong>Enable lazy session loading</strong> allows you to start the browser quickly with multiple tabs, but it will only load those tabs when they are activated.</li>
   <li><strong>Theme installation</strong> allows you to install themes from our <a href="https://addons.opera.com/themes/">addons catalog</a>. In a  first phase, we&#39;re supporting a subset of the old theme format; we&#39;re working on an updated theme format where you can use a different background image for Speed Dial, Downloads, Settings, etc.</li>
  </ul>
 </li>
</ul>

<p>Give it a spin, and let us know what you think!</p>
