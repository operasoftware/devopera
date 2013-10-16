Title: Unveiling Opera 11.10 final 
----
Date: 2011-04-11 16:29:23
----
Author: 
----
Text:

<h3>From beta to final: a heritage of great functionality</h3>

<p>Today marks the unveiling of the final release of <a href="http://www.opera.com/browser/">Opera 11.10 desktop for PC, Mac and Linux</a>, less than a month after our <a href="http://my.opera.com/ODIN/blog/new-web-standards-support-in-opera-desktop-11-10-beta">desktop 11.10 beta release</a>. This release already had some great new feature additions, such as <a href="http://dev.opera.com/articles/view/css3-multi-column-layout/">CSS3 Multi-column Layout</a>, <a href="http://dev.opera.com/articles/view/css3-linear-gradients/">CSS3 linear gradients</a>, WebP, <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">speed dial enhancements</a>, <a href="http://dev.opera.com/articles/view/site-blocking-with-operas-url-filter-api/">the URL Filter API for extensions</a> and <a href="http://dev.opera.com/articles/view/introducing-woff-web-open-font-format/">Web Open Font Format</a>.</p>

<h3>But there&#39;s more!</h3>

<p>Along with the release of Opera desktop 11.10 final, we are publishing another raft of new developer tutorials and features, to whet your appetite for creating great new web functionality. This time around there is a lot of emphasis on more powerful Opera extensions.</p>

<h4>Creating multilingual extensions</h4>

<p>Opera extensions now support the multi language features of the <a href="http://www.w3.org/TR/widgets/">W3C Widget Packaging and Configuration</a> specification, allowing you to create single extension packages that have content available in multiple languages. Patrick Lauke shows you how it&#39;s done in <a href="http://dev.opera.com/articles/view/creating-multilingual-extensions/">Creating multilingual extensions</a>.</p>

<h4>Magic functions and variables</h4>

<p>You can now use <code>window.opera.defineMagicFunction()</code> and <code>window.opera.defineMagicVariable()</code> inside Opera extensions too: two special functions that allow you to override global functions and variables defined on a web page, fantastic for providing custom behaviour for existing sites through extensions. Hallvord Steen tells all in <a href="http://dev.opera.com/articles/view/magic-functions-and-variables/">Magic functions and variables</a>.</p>

<h4>The bgProcess object</h4>

<p>The new <code>bgProcess</code> object for Opera extensions allows you to access data contained in an extension&#39;s background process from a script in a completely different part of the extension code via a clever shortcut system, as if it were present in that actual part of the code. This makes accessing data from different parts of an extension much quicker and simpler, often bypassing the need for messaging altogether. You can get the full skinny on bgProcess in Daniel Davis&#39; <a href="http://dev.opera.com/articles/view/accessing-an-opera-extensions-background-process/">Accessing an Opera extension&#39;s background process</a>.</p>

<h4>The file API</h4>

<p>Opera 11.10 final has partial support for the W3C&#39;s new <a href="http://www.w3.org/TR/file-upload/">file API</a>, which allows easy access to and manipulation of data from files on the device&#39;s filesystem. In <a href="http://dev.opera.com/articles/view/the-w3c-file-api/">The W3C file API</a>, Bruce Lawson spills the beans.</p>

<h4>HTML5 data-* attributes</h4>

<p>In this release we&#39;ve also added support for the new HTML5 custom <code>dataset</code> property, which allow you to use data defined in <code>data-*</code> attributes. It&#39;s an easy way of defining metadata for elements in your HTML and using that data, without having to abuse ids or divs for the same purpose. <a href="http://html5doctor.com/html5-custom-data-attributes/">HTML5 Custom Data Attributes (data-*)</a> on HTML5Doctor provides an extended explanation of these.</p>
