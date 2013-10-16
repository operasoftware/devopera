Title: Getting started with Opera extensions
----
Date: 2010-10-21 09:23:56
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<p class="note">DEPRECATED: This article is deprecated. We recommend using our <a href="http://dev.opera.com/addons/extensions/">quick documentation overview</a> instead.</p>

<h2 id="intro">Intro</h2>

<p>Opera 11 comes with a standards-based framework for running extensions that add extra functionality to the browser. This extensions framework is built on existing standards, with W3C Widgets and JavaScript as the basis. This means that if you can write a web application or widget you already have the skills you need to write extensions. They also make use of HTML5 technology such as <a href="http://dev.w3.org/html5/postmsg/">cross-document messaging</a>, and of course, you can use CSS as well.</p>

<p>To get you started, we&#39;ve prepared API reference guides, as well as a number of articles and tutorials. There is a <a href="http://dev.opera.com/articles/view/opera-extensions-quick-documentation-overview/">quick documentation overview</a> if you want to have a structured, <abbr title="Table of Contents">TOC</abbr>-like outline of what is available. This article covers the same documentation pointers, but in a more contextualized fashion.</p>

<p>If you have any questions, feel free to ask them on our <a href="http://dev.opera.com/forums/forum/42202">Opera extensions development forum</a>.</p>

<h2 id="gettingstarted">Getting started</h2>

<p>If you want to have a peek inside an Opera extension and start playing around with some code, we recommend starting with our introductory <a href="http://dev.opera.com/articles/view/whats-in-an-opera-extension/">What&#39;s in an Opera extension?</a> article, and then continue with the <a href="http://dev.opera.com/articles/view/opera-extensions-hello-world/">Hello World</a> one, in which you learn how to make a simple extension.</p>
<p>Also be sure to have a look at the <a href="http://dev.opera.com/articles/view/opera-extensions-developer-workflow/">developer workflow article</a>, so you can make optimal use of the developer features we&#39;ve included for your convenience.</p>

<h2 id="apiguides">API guides</h2>

<p>Apart from the standard web technologies Opera extensions are built on, there are also a number of unique APIs that come into play. These APIs allow programmers to talk to the browser and control browser functionality such as tabs and windows. We have made our extensions APIs as straightforward as possible, so that developers can pick them up quickly and easily.</p>
 
<p>Opera extension APIs exist in the <code>opera.extensions</code> namespace. <code>opera.extensions</code> is a global object which most API modules are built upon. For example, if you want to initialize the <code>tabs</code> object, you will write <code>opera.extensions.tabs</code>.</p>

<p>As a starting point, we recommend having a look at the <a href="http://dev.opera.com/articles/view/opera-extensions-quick-documentation-overview/#apireference">Opera Extensions API guides</a> page. You can then further dig down and inspect the guides to <a href="http://dev.opera.com/articles/view/extensions-api-messaging/">Messaging</a>, the <a href="http://dev.opera.com/articles/view/extensions-api-browser-toolbar/">Browser Toolbar</a>, <a href="http://dev.opera.com/articles/view/extensions-api-config-xml/">config.xml elements and attributes</a>, <a href="http://dev.opera.com/articles/view/extensions-api-injected-scripts/">Injected Scripts</a>, <a href="http://dev.opera.com/articles/view/extensions-api-popup/">Popups</a>, <a href="http://dev.opera.com/articles/view/extensions-api-speeddial/">Speed Dial</a>, <a href="http://www.opera.com/docs/apis/extensions/windowsandtabsguide/">Windows and Tabs</a> and the <a href="http://dev.opera.com/articles/view/extensions-api-urlfilter/">URL Filter API</a>.</p>


<h2 id="apitutorials">API and packaging tutorials</h2>

<p>We have also created a few tutorials to go with the API guides mentioned above. They cover config.xml, User Interface, Tabs, Windows, Messaging, the Options page and the URL Filter API.</p>
 
<ul>
<li><a href="http://dev.opera.com/articles/view/config-xml-howto/">The ins and outs of config.xml</a>: In this article we build up a complete configuration document, showing step by step what all the different elements and attributes do.</li>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-buttons-badges-and-popups/">Buttons, badges and popups</a>: This article introduces the <code>ToolbarContext</code>, <code>ToolbarUIItem</code>, <code>ToolbarUIItemProperties</code>, <code>Popup</code> and <code>Badge</code> objects: you will learn more about creating UI for toolbars, including tooltips, icons and more.</li>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-tabs/">Tabs</a>: This article introduces the <code>tabs</code> object and explains how you can manipulate tabs.</li>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-windows/">Windows</a>: This article introduces the <code>windows</code> object and explains how to manipulate windows.</li>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-messaging/">Messaging</a>: This article introduces <code>opera.extensions</code>&#39; <code>postMessage</code> method and the <code>onconnect</code> and <code>onmessage handlers</code>. You will learn how to send messages between scripts and popups.</li>
<li><a href="http://dev.opera.com/articles/view/opera-extensions-options-page/">Options page</a>: This article explains how you can create a nicely integrated preferences page for your extension, and includes a template which you can use in your own extension.</li>
<li><a href="http://dev.opera.com/articles/view/site-blocking-with-operas-url-filter-api/">Site blocking with Opera’s URL Filter API</a>: Opera&#39;s URL Filter API allows you to easily implement features in extensions that restrict access to certain domains, on a temporary or permanent basis. This article explains the concept, syntax basics and how to build a simple extension using this API.</li>
<li><a href="http://dev.opera.com/articles/view/accessing-an-opera-extensions-background-process/">Accessing an Opera extension&#39;s background process</a>: This article explains how to make optimal use of the bgProcess object, allowing you to avoid messaging in many cases.</li>
</ul>

<h2 id="tutorialstemplates">Extension building tutorials and templates</h2>

<p>Once you&#39;re somewhat familiar with the basic structure and different APIs, it&#39;s time to have a look at some hands-on tutorials and templates.</p>
<ul>
	<li><a href="http://dev.opera.com/articles/view/hands-on-building-an-opera-extension/">Hands-on tutorial: building an Opera extension</a>: this tutorial shows how to add extra functionality to a page with JavaScript.</li>
	<li><a href="http://dev.opera.com/articles/view/opera-extensions-prototypes-modifying-css/">Opera extensions prototypes for modifying CSS</a>: this article introduces three Opera extension templates, which you can use to build your own Opera extension that modifies a page&#39;s CSS.</li>
	<li><a href="http://dev.opera.com/articles/view/opera-extension-code-examples/">Opera extension code examples</a>: this article introduces a number of code snippets for basic extension functionality.</li>
	<li><a href="http://dev.opera.com/articles/view/converting-userjs-to-extensions/">Converting UserJS to Opera extensions</a>: this article teaches you how to convert an existing Opera UserJS into an Opera extension.</li>
	<li><a href="http://dev.opera.com/articles/view/creating-opera-speed-dial-extensions/">Creating Opera Speed Dial extensions</a>: this article covers all the things you need to know for creating Speed Dial extensions.</li>
	<li><a href="http://dev.opera.com/articles/view/creating-multilingual-extensions/">Creating multilingual extensions</a>: this article explains how you can make optimal use of the extension packaging format&#39;s built-in mechanisms for providing multilingual versions of an extensions.</li>
</ul>

<h2 id="uiguidelines">UI guidelines and distribution</h2>
<ul>
	<li><a href="https://addons.opera.com/developer/guidelines/">Publishing guidelines</a>: This guide explains how to make sure your extension is of high quality and shines, so as to get it published on the <a href="https://addons.opera.com/addons/extensions/">Opera extensions catalog</a>.</li>
	<li><a href="http://dev.opera.com/articles/view/distributing-opera-extensions-and-auto-updates/">Distributing Opera extensions and auto-updates</a>: This article talks about methods of distributing your Opera extensions, covering the Opera extensions catalog, MIME type settings if you distribute on your own, and the auto-update mechanism.</li>
</ul>


