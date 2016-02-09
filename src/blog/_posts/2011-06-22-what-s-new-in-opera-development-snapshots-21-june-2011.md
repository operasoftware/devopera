---
title: 'What’s New in Opera Development Snapshots: 21 June 2011'
authors:
- divya-manian
tags:
- opera-next
license: cc-by-3.0
---
	<p>Another Tuesday, <a href="http://my.opera.com/desktopteam/blog/2011/06/21/another-happy-tuesday">snapshot</a> (&amp; <a href="http://my.opera.com/desktopteam/blog/2011/06/20/presto-2-9">more</a>). Let&#39;s see what&#39;s new.</p>
	<p>As usual, your <a href="https://www.opera.com/browser/next/">Opera Next</a> should already have this update (checking <code>opera:about</code> should give you &quot;Presto/2.<b>9</b>.<b>168</b> Version/11.50&quot; under <i>Browser Identification</i>).</p>
	<ul>
		<li>
			<h3>Presto 2.9!</h3><p>The biggest news is we are now one version up. Hooray for <a href="https://www.opera.com/docs/specs/presto29/">Presto 2.9</a>!</p></li>
		<li><h3>Extensions can share cookies with the browser</h3>
			<p>When writing <a href=" https://addons.opera.com/addons/extensions/">extensions</a>, it is really annoying when you have to interact with APIs that require user authentication before they serve you content to display. Now, your Opera extensions can share cookies which means they can now interact with APIs and websites that require authentication.</p>
			<p>Do note that an extension can only have access to cookies if it has an explicit <code>&lt;access&gt;</code> directive in the <code>config.xml</code> —not just every single cookie on the web. <del>Needless to say, we would be mentioning more details about this soon</del>Daniel Davis has written a great <a href="https://dev.opera.com/articles/view/cookie-sharing-in-opera-extensions/">post on shared cookies along with a demo extension</a>. </p>
		</li>
		<li>
			<h3>CSS parsing optimizations</h3>
			<p>A bunch of optimizations have landed which improves the CSS parsing performance by 10-15%.</p>
		</li>
		<li>
			<h3>Object Load event</h3>
			<p>Previously, the load event did not fire when an Object element was loaded. This has now been fixed (<a href="http://kangax.github.com/jstests/object_load_event_test/">demo</a>). </p>
		</li>
		<li><a href="http://chrome.angrybirds.com/">chrome.angrybirds.com</a> exposed a bug in our handling of <code>xhr</code> requests, which this update fixes! Unfortunately, <a href="http://chrome.angrybirds.com/?version=standard">chrome.angrybirds.com</a> now seem intent on blocking Opera! Boo.</li>
		<li>
			<p><a href="http://bbc.com">bbc.com</a> was completely unavailable to be used for <a href="https://www.opera.com/browser/tutorials/nomouse/#nav">spatial navigation</a>. But this has now been fixed (also you really should be using spatial navigation, best thing ever).</p>
		</li>
	</ul>
	<p>If you find any bugs with any of these fixes, please file them with the <a href="https://bugs.opera.com/wizard/">bug wizard</a>!</p>

	<p>Hold your horses! There is a new snapshot with a brand new UI! Go <a href="http://my.opera.com/desktopteam/blog/2011/06/22/featherweight">check it out</a> and comment on what you love/hate about it. It might make its way to Opera Next soon, but don&#x2019;t quite hold your breath for it yet.</p>
