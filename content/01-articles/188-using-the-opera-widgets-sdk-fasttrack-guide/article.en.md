Title: Using the Opera Widgets SDK - fast-track guide
----
Date: 2008-10-20 08:01:21
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<p>Table of contents:</p>
<ol>
<li><a href="#intro">Introduction</a></li>
<li><a href="#prerequisites">Prerequisite knowledge</a></li>
<li><a href="#basics">Getting started</a></li>
<li><a href="#javascript">JavaScript for widgets</a></li>
<li><a href="#debugging">Debugging your widgets</a></li>
<li><a href="#optimization">Opera Widget optimization across devices</a></li>
<li><a href="#otherdocumentation">Other useful documentation with which to get started</a></li>
</ol>

<h2 id="intro">Introduction</h2>

<p>Opera Widgets are cross-platform applications made with Web technologies such as HTML, CSS, and JavaScript; therefore, they represent a great way to create and deploy applications rapidly across different devices – for example, you can run Opera Widgets equally well across Opera browsers on any desktop computer, mobile devices, or games consoles.</p>

<p>The Opera Widgets Software Development Kit (<abbr title="Software Development Kit">SDK</abbr>) helps you to do this by providing tools, libraries, documentation, and examples, but it can be a bit daunting to use if you are new to widget development. Therefore, we have created this fast-track guide to help you get up to speed quickly. The main resource index is available at the <a href="http://dev.opera.com/articles/view/opera-widgets-sdk/">Opera Widgets SDK homepage</a>. This guide will link to some of the same resources you will find there, but it will do it in a more structured way for the benefit of those less experienced in using the SDK.</p>

<p>You can also get help in the <a href="http://widgets.opera.com/forum/">Opera Widgets forum</a>.</p>

<h2 id="prerequisites">Prerequisite knowledge</h2>

<p>Since Opera Widgets are built using standard Web technologies, it is assumed that you already know how to develop Web pages using HTML, CSS, DOM, or JavaScript. You can also use other <a href="http://www.opera.com/docs/specs/">Web technologies supported by the Opera platform</a> within your widgets, but they are not mandatory for getting an Opera Widget up and running.</p>

<p>You should also know that Opera Widgets are distributed as ZIP archives (with a <code>.wgt</code> file extension and a MIME type of application/x-opera-widgets) and run using an instance of an Opera browser. Widgets are supported by Opera desktop for Mac, PC, and Linux), Opera Mini, Opera Mobile, and Opera for the Nintendo Wii. You can find lots of examples of Opera Widgets at the <a href="http://widgets.opera.com">Opera Widget homepage</a>, which can also be accessed by selecting “Widgets &gt; Add Widgets” from the main Opera Desktop Menu. Try a few out to get familiar with the way they work!</p>

<h2 id="basics">Getting started</h2>

<p>Creating a widget is a little bit different than creating a normal Web page, but you will soon get used to it; the basics are all explained in <a href="http://dev.opera.com/articles/view/creating-your-first-opera-widget/">Creating your first widget</a>.</p>

<p>Once you have created a widget, you will want to package it up and deploy it, so that others can download and make use of it. This is covered in <a href="http://dev.opera.com/articles/view/packing-and-deploying-your-opera-widget/">Packaging and deploying your widget</a>.</p>

<h2 id="javascript">JavaScript for widgets</h2>

<p>There are many resources available for those of you looking to add interactivity to your Opera Widgets using JavaScript. For a start, Opera Widgets have some specialized functions available to them through the Core DOM API – check this out at the <a href="http://dev.opera.com/libraries/widgetobject/">Opera Widgets Core DOM reference</a>.</p>

<p>Opera Software also provides many <a href="http://dev.opera.com/libraries/">JavaScript libraries</a> to help make development easier – the most relevant ones for widget development are the <a href="http://dev.opera.com/articles/view/hello-animation/">Animation library</a>, which makes adding JavaScript animations to your Opera Widgets easier, and the <a href="http://www.w3.org/TR/css3-mediaqueries/">Test Media query library</a>, which is used to detect the media type of the current device, and then optimize content appropriately.</p>

<h2 id="debugging">Debugging your widgets</h2>

<p>The beauty of Opera Widgets is that because they are build using standard Web technologies, they can be debugged in pretty much the the same way. For a start, you can debug your widget’s DOM, CSS and JavaScript using <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a>. To examine your widget using Opera Dragonfly, make sure it is open in your Opera desktop browser, then select “Tools &gt; Advanced &gt; Developer Tools” – you will be able to select your widget’s <code>index.html</code> file in the Opera Dragonfly main drop-down menu. For more on how to operate Opera Dragonfly, check out our <a href="http://dev.opera.com/articles/view/introduction-to-opera-dragonfly/">Introduction to Opera Dragonfly article</a>.</p>

<p>It doesn’t stop there either – you can connect your running Opera Dragonfly instance to any browser that contains the Scope protocol (for example Opera Mobile 9.5) and debug widgets running on other devices. You can find out how to do this in the article <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">Remote debugging with Opera Dragonfly</a></p>

<p>You can also run your widgets inside our Widget Emulator, which will show you how they look on different devices (different screen sizes, etc). To learn how to use this, read our <a href="http://dev.opera.com/articles/view/widget-emulator/">Widget emulator</a> article.</p>

<p>There is a useful article available that gives you a workflow for debugging Opera Widgets using Opera Dragonfly and the Widget Emulator together – check out <a href="http://dev.opera.com/articles/view/debugging-widgets-using-opera-dragonfly/">Debugging widgets using Opera Dragonfly and the Widget Emulator</a>.</p>

<h2 id="optimization">Opera Widget optimization across devices</h2>

<p>Since one main focus of Opera Widgets is to provide applications that run across platforms, we have created resources to show you how to optimize your Opera Widgets so they run better on mobiles, game consoles, etc. as well as more familiar desktop environments.</p>

<p><a href="http://dev.opera.com/articles/view/opera-widgets-cross-platform-applicatio/">Opera Widgets: cross-platform applications</a> is the best place to start here – it outlines basic issues to be aware of when creating cross-platform widgets. You can then go on to read an extensive array of practical cross-device development tips at <a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/">Cross-device development techniques for widgets</a>.</p>

<p>There are different modes in which to display widgets, which may be controlled by JavaScript; for example, mobile phones might want to display a widget in fullscreen mode, whereas in a desktop browser you are more likely to want the widget in application mode (i.e., in its own distinct window with chrome, not covering the full screen). You can find out more about controlling the modes at <a href="http://dev.opera.com/articles/view/widget-modes-docked-widget-and-more/">Widget modes: docked, widget, and more</a>, and there’s a practical solution for docked modes availale at <a href="http://dev.opera.com/articles/view/adding-a-docked-mode-to-your-widgets/">Adding a docked mode to your widgets</a>.</p>

<p><a href="http://dev.opera.com/articles/view/mobile-widget-development-process-advice/">Mobile development process advice</a> provides you with a useful workflow for creating mobile Opera Widgets.</p>

<h2 id="otherdocumentation">Other useful documentation with which to get started</h2>

<p>Some widget features are supported in some Opera browser instances, but not others. Check out the <a href="http://dev.opera.com/articles/view/opera-widget-support-notes/">Opera Widget support notes</a> to find out what the caveats are in this respect.</p>

<p>The <a href="http://dev.opera.com/articles/view/opera-widgets-preference-store/">Opera Widgets Preference Store</a> is also worth knowing about – it’s a specialized widget data storage system, which allows you to persist information after an Opera Widget restarts.</p>
