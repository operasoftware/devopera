---
title: 'Opera 11.50 Released: Speed Dial Extensions, Improved Standards Support, and More'
authors:
- andreas-bovens
tags:
- opera
- swordfish
- speed-dial
- extensions
- standards
- odin
license: cc-by-3.0
---

<span class='imgright'><img alt='' src='/blog/opera-11-50-released-speed-dial-extensions-improved-standards-support/300px-Xiphias_gladius2.jpg' /></span>
<p>Today, we&#39;re releasing <a href="http://www.opera.com/browser/">Opera 11.50</a>, aka &quot;Swordfish&quot;. It has a brand new <em>featherweight</em> look-and-feel, and juicy standards bits. Over the last couple of weeks, we&#39;ve introduced this release&#39;s new features in different blog posts — here&#39;s a quick recap, with pointers to updated documentation and more.</p>
<h3>Speed Dial extensions</h3>
<p>Back in 2007, we <a href="http://www.opera.com/docs/changelogs/windows/920/">introduced</a> Speed Dial to the world, and over the years, we&#39;ve have gradually improved its looks and functionality. For our Opera 11.10 release a couple of months ago, we also added <a href="https://dev.opera.com/articles/view/opera-speed-dial-enhancements/">hooks for developers</a> to control the way their site looks when rendered in a Speed Dial cell.</p>
<p>In Opera 11.50, we&#39;re taking this a step further with Speed Dial extensions: you can now render live content in a Speed Dial cell, allowing for several interesting use cases. We invite you to have a look at our extensions catalog and play around with some of the <a href="https://addons.opera.com/addons/extensions/?tag=speeddial&amp;amp;order=popular&amp;amp;language=any">recently submitted Speed Dial extensions</a>. If you&#39;re inspired and want to start building one yourself, <a href="https://www.youtube.com/watch?v=H5uNupSR6yw">this YouTube video</a> and <a href="https://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/">our Speed Dial extension Dev.Opera article</a> (available in 10 different languages!) are good places to start.</p>
<p>Also worth a look are Mike&#39;s <a href="https://github.com/miketaylr/Speed-Dial-extension-boilerplate">Speed Dial extension boilerplate</a>, and Arnstein&#39;s <a href="http://my.opera.com/addons/blog/2011/06/21/turn-your-rss-into-a-live-opera-speed-dial-extension">RSS feed &#x2192; Opera Speed Dial extension template</a>.
<h3>Extension cookie-sharing</h3>
<p>From 11.50 onward, extensions can now share cookies with the browser. This means that Opera extensions can interact with APIs and websites that would otherwise require extra authentication. This is done through an explicit <code>&lt;access&gt;</code> setting in the extension&#39;s config.xml — have a look at our new <a href="https://dev.opera.com/articles/view/cookie-sharing-in-opera-extensions/">cookie-sharing article</a> for full details on how to make use of this.</p>
<p>If you&#39;re new to Opera Extensions, we recommend starting from our (renewed) <a href="https://dev.opera.com/articles/view/opera-extensions-quick-documentation-overview/">quick documentation overview</a>.</p>
<h3>Opera Presto 2.9</h3>
<p>Our browser engine has now been bumped up to Presto 2.9.168, which means there are a number of new standards features, compatibility fixes, and performance tweaks — among other things, we&#39;ve improved our CSS parsing performance by 10 to 15%! Other additions are listed below.</p>
<h3>The classList API</h3>
<p>Using <code>classList</code>, you can easily add, remove, or toggle a class on an element, without the need for complex regular expressions or libraries. <a href="http://people.opera.com/andreasb/demos/html5-classlist/">This example</a> shows the code to toggle a class is as simple as this:</p>
<pre><code>document.getElementById(&#39;blinds&#39;).classList.toggle(&#39;cover&#39;);</code></pre>
<p>You can then attach some styles (incl. transitions!) to <code>#blinds.cover</code>, and off you go.</p>
<h3>We have <code>&lt;time&gt;</code>!</h3>
<p>We&#39;re the first browser to support the &lt;time&gt; element. Mike unveils what you can do with it in his <a href="http://my.opera.com/ODIN/blog/2011/05/31/dom-scripting-and-the-time-element">mighty <code>&lt;time&gt;</code> robot demo article</a>.</p>
<h3>HTML5 Session History &amp; Navigation</h3>
<p>Opera 11.50 also comes with support for <a href="http://dev.w3.org/html5/spec/history.html#history">HTML5 Session History &amp; Navigation</a>, which allows you to control and manipulate the session history of a particular browsing context. More details can be found in our <a href="http://www.opera.com/docs/specs/presto28/sessionhistorynav/">spec support reference</a> and (after his yoga class (!) yesterday) Mike has finished off a <a href="https://dev.opera.com/articles/view/introducing-the-html5-history-api/">a Dev.Opera article with examples</a> as well.</p>
<p>Those are the main bits — as always, there&#39;s much more to tell, but I leave that up for you to discover in our <a href="http://www.opera.com/docs/changelogs/">changelogs</a> and <a href="http://www.opera.com/docs/specs/presto29/">specs pages</a>. Enjoy, and let us know what you think!</p></p>
