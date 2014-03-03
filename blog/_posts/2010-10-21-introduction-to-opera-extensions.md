---
title: Introduction to Opera Extensions
authors:
- chris-mills
tags:
- oex
- opera
- alpha
- extensions
- opera-11
- release
- odin
license: cc-by-3.0
layout: post
---

<p>Opera has always been known for its adaptability, and wealth of options for customisation. You can modify the UI with custom icons, buttons and menu options; you can write user stylesheets and User JavaScript to add custom styles and behaviour to any site you access; you can also create <a href="http://widgets.opera.com/">Opera Widgets</a> and <a href="http://unite.opera.com/applications/">Unite applications</a> to provide standalone native applications written using open standards, and much, much more.</p>

<p>We&#39;ve also spent a long time looking at how to make a more powerful secure extension framework. We want to be certain our framework doesn&#39;t impact the browser&#39;s performance, and allows for the long tail of user requirements and developer needs. New in Opera 11 alpha, we&#39;ve added our own extensions. Opera extensions are packages that add extra functionality to Opera Desktop. Examples include Mapsearch, which allows you to select any address and plot it straight onto a Google Map, and <a href="http://dev.opera.com/articles/view/building-your-first-opera-extension/">Slashdotty</a>, which allows anyone to show and hide blocks in the Slashdot UI, not just registered members.</p>

	<p>Our extensions framework is built on existing standards, with Widgets and JavaScript as the basis. This means that if you can write a Web application or Widget you already have the skills you need to write extensions. Opera extensions also make use of new HTML5 technology such as <a href="http://dev.w3.org/html5/postmsg/">cross-document messaging</a>. </p>
	<p>The architecture is conceptually similar to Firefox&#39;s Jetpack or the Chrome extension framework. Making it easy to port extensions across platforms was a design goal. It is also easy to <a href="http://dev.opera.com/articles/view/converting-userjs-to-extensions/">port User JavaScript  to extensions</a>, although there is of course more functionality available to make extensions more powerful. </p>
	<p>An extension is packaged like a Widget. This provides a simple framework to localise extensions, building on things developers already know. It can be tailored to specific sites in the same way as User JavaScript and Greasemonkey scripts, or active all the time. It runs its own process, and has methods to communicate both with pages and with the web directly as well as add interactive items to the user interface.</p>

<h2>Making the browser even more useful!</h2>

	<p>Extensions are invaluable for creating features not already present in the browser, adding to both the user and developer ability to extend functionality within the Opera browser. So, you could add a button to the browser UI that allows you to add posts to your blog or favourite social networking site, add a custom dialog window to the browser to pull up further information relating to what&#39;s being displayed in the browser, add an e-mail checker icon to the UI that shows the number of unread emails, or anything else that you want to add to make your browser more useful!</p>

	<p>In terms of similarity to other browsers&#39; extension implementations, Opera has the advantage of being able to learn from other vendors&#39; successes and challenges, as well as leveraging some of the browser add-on technology we have had in place for ages, such as Widgets and User JS, with which our extensions share many similarities.</p>

<h2>Trying out Opera extensions</h2>

	<p>Opera extensions are zip files with an extension of <code>.oex</code>. You install one by dropping it into the browser window or clicking on a link pointing to it. You are then asked to confirm installation, after which you can see the extension installed at Tools &gt; extensions &gt; Manage extensions. You can download and install a wealth of Opera extensions from the <a href="http://addons.labs.opera.com">Labs Addons page</a>.</p>

<p>To run Opera extensions, you&#39;ll need an Opera 11 labs build that supports them:</p>

	<ul>
	  <li><a href="http://www.opera.com/download/get.pl?id=33277&amp;location=270&amp;thanks=true&amp;sub=true">Opera 11 extensions build for Windows</a></li>
	  <li><a href="http://www.opera.com/download/get.pl?id=33278&amp;location=270&amp;thanks=true&amp;sub=true">Opera 11 extensions build for Mac</a></li>
	  <li><a href="http://snapshot.opera.com/unix/alpha1-with-extensions_11.00-1029/">Opera 11 extensions build for Linux</a></li>
	</ul>


	<p class="note">Note that the current release is an <strong>experimental labs build</strong>, therefore the implementation, architecture and design may change before the final release. If you create a complex extension, it may require updates as our APIs mature.</p>

<h2>Where to go next</h2>

<li><p><a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Saying hello world to Opera extensions!</a>: A very simple tutorial to get you started with building Opera extensions.</p></li>

<li><p><a href="http://dev.opera.com/articles/view/whats-in-an-opera-extension/">What&#39;s in an Opera extension?</a>: Learn more about how Opera extensions work, what files they contain, what the different parts of the architecture do, and what types of extension you can expect to build.</p></li>

<li><p><a href="http://dev.opera.com/articles/view/hands-on-building-an-opera-extension/">Hands-on tutorial: building an Opera extension</a>: A more in-depth extensions tutorial.</p></li>

<li><p><a href="http://dev.opera.com/articles/view/converting-userjs-to-extensions/">Converting UserJS to Opera extensions</a>: Learn how to convert Opera UserJS files into Opera extensions.</p></li>

<li><p><a href="http://dev.opera.com/articles/view/opera-extensions-tabs/">Opera extensions: tabs</a>: This article takes you through using the Opera extensions API tabs object to allow extensions to manipulate tabs in the Opera desktop browser.</p></li>

<li><p><a href="http://dev.opera.com/articles/view/opera-extensions-windows/">Opera extensions: windows</a>: This article shows you how to manipulate windows in the Opera desktop browser via the Opera extensions Windows object.</p></li>

<li><p><a href="http://dev.opera.com/articles/view/opera-extensions-buttons-badges-and-popups/">Opera extensions: buttons, badges and popups</a>: This article takes you through the ins and outs of implementing buttons, badges and popups for Opera extensions.</p></li>

<li><p><a href="http://labs.opera.com/extensions-api/">Opera extension APIs</a>: References for the specialist APIs that allow you to hook into the browser to extend functionality</p></li>
