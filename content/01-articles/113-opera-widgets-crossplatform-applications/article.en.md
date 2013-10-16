Title: Opera Widgets: cross-platform applications
----
Date: 2010-02-09 18:52:13
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>The Opera Widgets runtime is available on all platforms where Opera is available. This article discusses the nature of Opera Widgets, as cross-platform applications, goes through the benefits of their implementation model, and looks at some platform variations to be aware of when creating widgets.</p>

<p>Table of contents:</p>
<ol>
<li><a href="#platforms">The same Web technologies on all platforms</a></li>
<li><a href="#characteristics">Platforms have different characteristics</a></li>
<li><a href="#contexts">Different use contexts</a></li>
<li><a href="#conclusions">Conclusions</a></li>
</ol>

<h2>The same Web technologies on all platforms</h2>

<p>A key feature of Opera is that the browser is based on a common implementation of Web technologies which is reused on all platforms where Opera is available.</p>

<p>The Opera Widgets runtime is based on the same common implementation of Web technologies as is used by the browser. A widget can use the same Web technologies even if its running on platforms as different as a Windows desktop machine or a mobile phone running a proprietary operating system. The Web developer has access to the same features with the same quality on all platforms.</p>

<p>The benefits of this include:</p>

<ul>
<li>Reuse of knowledge</li>
<li>Reuse of code</li>
<li>Shorter development time</li>
<li>Less risk, higher quality</li>
<li>Increases the user base for your widgets</li>
<li>Simplification of development process</li>
</ul>

<p>The Opera Widgets runtime is available on platforms such as the following:</p>

<ul>
<li>Windows Mobile</li>
<li>Linux for various embedded systems architectures</li>
<li>Linux on x86, Sparc and PowerPC architectures with support for a large number of distributions</li>
<li>Microsoft Windows on x86 architecture</li>
<li>Solaris on Sparc and x86</li>
<li>Mac OS X</li>
<li>FreeBSD on x86</li>
<li>KDDI auWidgets – based on Opera 8</li>
<li>Nintendo Wii</li>
<li>UIQ </li>
</ul>

<h2 id="characteristics">Platforms have different characteristics</h2>

<p>Even though the same Web technologies are available on many platforms, a widget may not behave the same way on all platforms.</p>

<p>This is primarily due to the fact that platforms have different characteristics, for instance:</p>

<ul>
<li>CPU performance</li>
<li>RAM amount available and access speed</li>
<li>Permanent storage space and access speed</li>
<li>Network bandwidth and latency</li>
<li>Availability of fonts</li>
</ul>

<p>Also, the devices will vary with respect to issues like:</p>

<ul>
<li>Input capabilities, support for full or limited keyboard, mouse, stylus, joystick, and so forth</li>
<li>Screen size, available colours, pixel density, screen readability</li>
<li>Power source and battery life.</li>
</ul>

<p>Such characteristics either directly affect the performance of a widget limit, or even aid the user in interacting with the widget.</p>

<h2 id="contexts">Different use contexts</h2>

<p>Users use different devices in different settings, for instance, a desktop computer is used while sitting down, focusing fully on what’s on the screen. A mobile phone is mostly used when moving around, supporting the user in his primary task.</p>

<p>The user’s needs are not the same in different use contexts, even when using the same widget.</p>

<p>As an example, consider a travel-related widget:</p>

<ul>
<li>While planning a trip, users could use the widget on a desktop computer to research places they may want to visit</li>
<li>When out traveling, users could use the widget on a mobile phone to get quick access to maps and key information aiding them in getting around</li>
</ul>

<p>Widgets need to adapt to the use context in order to be successful.</p>

<h2 id="conclusions">Conclusions</h2>

<p>Using your Web developer skills and the Opera Widgets runtime you can create applications able to run on a wide variety of platforms.</p>

<p>In order to develop successful widgets you must understand the use contexts and devices where the widget will be used. You also need to consider the characteristics of the device it will be running on.</p>

<h2>Resources</h2>

<dl>
<dt><a href="http://dev.opera.com/articles/view/characteristics-of-widgets-on-mobile-pho/">Characteristics of widgets on mobile phones</a>.</dt>
<dd>This article discusses what kind of characteristics mobiles have, and how they affect development.</dd>
<dt><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/">Cross device development techniques for widgets</a>.</dt>
<dd>Techniques for designing mobile applications and improving performance.</dd>
<dt><a href="http://dev.opera.com/articles/view/mobile-widget-development-process-advice/">Mobile widget development process advice</a>.</dt>
<dd>Here you will find some general tips on mobile widget development.</dd>
<dt><a href="http://dev.opera.com/articles/view/adding-a-docked-mode-to-your-widgets/">Adding a docked mode to your widget</a>.</dt><dd>This articles will teach you how to add a docked or micro widget mode to your widgets.</dd>
<dt><a href="http://my.opera.com/WebApplications/blog/show.dml/235368">Optimizing PNG Graphics for Devices</a>.</dt>
<dd>This blog post gives some useful hints on optimizing PNGs for devices.
</dd>
</dl>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
            

