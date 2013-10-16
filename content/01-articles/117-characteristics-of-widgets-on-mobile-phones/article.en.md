Title: Characteristics of widgets on mobile phones
----
Date: 2010-02-09 18:54:03
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>


<h2>Introduction</h2>

<p>This document describes what considerations developers need to take into account when developing for mobiles, due to the characteristics specific to those devices. See the article on <a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/">techniques for cross-device development</a> for more practical solutions. The various sections of this article links to the article on techniques. The article is structured as follows:</p>

<p>Table of contents:</p>

<ol>
<li><a href="#context">The mobile use context and the need for services</a></li>
<li><a href="#usability">Usability and different input devices</a></li>
<li><a href="#screen">Small screen size, resolution, and varying DPI</a></li>
<li><a href="#power">Less power: CPU, memory, and battery</a></li>
<li><a href="#connection">Slow and unstable internet connections</a></li>
<li><a href="#resources">Resources</a></li>
</ol>

<h2 id="context">The mobile use context and the need for services</h2>

<p>Consider for a moment the different devices that people use to access the internet. The desktop computer is usually stationary and has a large screen surface and easily manageable input devices. It is great for working on over a prolonged period of time. The laptop gives the user more mobility, but it still has many of the characteristics of the desktop computer. The TV is used for entertainment and is often located in the living room of a house.</p>

<p>The mobile phone is designed to be used by people on the move. It has evolved beyond its original intent as a mobile telephone device to include text messaging, cameras, MP3 players, and internet access. This last feature means the phone can be a source of comprehensive information just like a desktop computer, but at the same time, it provides a considerably different user experience. For example, it is not suitable for reading large amounts of text, and its controls are very different.</p>

<p>Services developed for mobile devices (including widgets) need to take into account how the user interacts with the device, the situation he or she is in when using it and what information needs the user has in that situation.</p>

<p>Here are some examples of good mobile services:</p>

<ul>
<li>Public transport information: The user is on the move and wishes to get from point A to B. A widget can retrieve information about the local transport system and display departure times, allowing travel planning and so on.</li>
<li>Allowing the user to jot down quick notes: Examples may be shopping lists and general notes. The user is able to add small snippets of text easily in the situation he or she is in.</li>
<li>Synchronizing data on the mobile phone with other devices: Examples include calendars data and music playlists. Being on the move should not restrict the user’s access to his or her data.</li>
</ul>

<h2 id="usability">Usability and different input devices</h2>

<p>Different mobile phones come with different mechanisms for inputting data, for example:</p>

<ul>
<li>Numerical keypads: The user taps the number keys repeatedly to get letters and symbols. Keys for alternative symbols or caps are usually available. It is comparable to a normal keyboard, though more cumbersome to type on. Certain number keys may be mapped to moving a virtual cursor or moving focus to activate-able elements of a Web page.</li>
<li>QWERTY keyboards: Some mobiles come with full keyboards as used as on a desktop computer. The keys are smaller, making typing slightly more difficult than on a desktop.</li>
<li>Menu controls and special keys: Phones have a range of menu keys and shortcut keys. Some, such as controls for the camera, are hardwired into the phone, but soft keys will take on different meanings in different applications. Others serve as shortcuts to particular applications such as the Web browser.</li>
<li>Joysticks: Joysticks can either be used to control virtual cursors on the screen or navigate focusable elements on the web page or widget.</li>
<li>Touch screens and styluses: Touch screens allow the user to point and click using a stylus or a finger. They also often give the user a virtual keyboard to touch or supply a way for the user to use handwriting to input text. At the same time, the mechanism has no concept of hovering or mouse overs.</li>
</ul>

<p>These input mechanisms can be mapped to three primary ways of interacting with a widget or Web page:</p>

<ul>
<li>Spatial navigation: Spatial Navigation is an Opera feature whereby each element available for activation is put into a collection. When the user moves a joystick or clicks specific keys, the focus is moved to the next element in the collection. This element is typically highlighted with a blue or black border. Links, form controls, and elements with <code>onclick</code> handlers are added to the collection.</li>
<li>Virtual cursors: A virtual cursor is a cursor on the screen, usually controlled by a joystick. Moving the joystick in any direction moves the cursor. Such cursors could be controlled with the keypad as well.</li>
<li>Touch screens: An element such as a link is activated when the user taps the relevant part of the screen with a finger or a stylus. As there is no notion of moving a cursor, hover effects are not available when using this method.</li>
</ul>

<p>These different characteristics, make it difficult to make a Web page or widget as usable on all variations of devices. Virtual cursors allow hovering effects when the user hits an important object on the page, while this will not work on touch screens. In both cases, large click surfaces make it easier for the user to navigate. This is even more important if the user is using his or her fingers on the touch screen, as this has less precision than a stylus.</p>

<p>The keyboard on a mobile is often small or otherwise cumbersome to use. In some cases one can use the stylus on a virtual keyboard, but this is generally slower than typing on a desktop computer. As a result, developers should not require the user to have to input lots of text. Instead, one should turn text input into a list of selectable options or at least prefill the text fields with something sensible.</p>

<p>This leads to the following recommendations:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#uxsimple">Keep the widget simple</a>: Avoid clutter and too many choices in each view.</li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#uxclick">Offer larger click surfaces</a> to make clickable elements easy to hit with a low precision input method.</li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#uxtext">Enhance or replace text input</a> with autocompletion and lists of options.</li>
<li>Use hover effects to improve usability and make it clear to the user what is activatable, <a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#uxhover">but do not rely only on such effects</a>.</li>
</ul>

<h2 id="screen">Small screen size, resolution, and varying DPI</h2>

<p>Mobile screens are becoming larger and better but are still behind their desktop counterparts. Resolutions and DPI are typically quite high, which means images and pixel-sized elements that look normal on desktop may look tiny on a mobile. With TVs and set-top boxes, the challenge is to design for a big screen viewed from a distance, whereas with mobile phones it is more a case of designing for a small screen, viewed from half an arm’s length. This, combined with the use context of being on the move and needing information quickly, means mobile applications need to be laid out differently to desktop applications.</p>

<p>This leads to the following recommendations:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#layoutmq">Use the media type handheld for backward compatibility, but do not rely on it</a>.</li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#layoutmq">Use media queries to detect screen size and other screen capabilities</a> and tailor the layout.</li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#layoutfullscreen">Resize to fullscreen</a> if the widget doesn’t fit the screen.</li>
<li><a href="http://dev.opera.com/articles/view/optimizing-opera-widget-graphics-for-mob/#limit">Use a minimum amount of graphics</a>.</li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#effects">Optimize image compression and colors</a>.</li>
</ul>

<h2 id="power">Less power: CPU, memory, and battery</h2>

<p>Hardware keeps getting smaller and more powerful, but mobiles are still generally weaker than PCs – they usually have weaker CPUs and less memory. This is also connected to the battery, which drains faster if the CPU is used a lot. Efficient code and good architecture becomes more important than on the desktop. Graphical effects create aesthetically pleasing widgets, but should be used sparringly on mobiles.</p>

<p>This leads to the following recommendations:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#arch-mvc">Use MVC, separate data from the view</a></li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#arch-views">Rebuild views rather than hide and show them</a>.</li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#javascript-optimize">Optimize JavaScript code</a>.</li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#dom">Optimize DOM usage</a>.</li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#effects-trans">Use transparency sparingly</a></li>
</ul>

<h2 id="connection">Slow and unstable internet connections</h2>

<p>The following are some common properties of network connections on mobiles:</p>

<ul>
<li>Low bandwidth</li>
<li>High latency</li>
<li>Unstable connections</li>
<li>Data transfer costs money</li>
<li>Battery intensive</li>
</ul>

<p>Mobiles use a variety of ways to connect to the internet, ranging from GPRS to WiFi. Expect a mobile internet connection to be slower than the broadband connections with which computer users are familiar. Additionally, the connection may be unstable as the user moves in and out of cell coverage or chooses to temporarily disable the net connection altogether. The user is often paying for the downloaded data, which means one should strive for concise downloads. Furthermore, network activity is draining on the battery, which means that developers should aim for quick and rare connections, pooling together connections from different widgets if possible.</p>

<p>This leads to the following recommendations:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#network-concise">Ensure that data retrieved over XMLHttpRequest is as concise as possible</a>.</li>
<li>Design for unstable connections: <a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#network-timeout">Handle timeouts in XMLHttpRequests</a>.</li>
<li>Pool requests to avoid setting up and tearing down network connections frequently.</li>
<li>Cache data sensibly, try to predict what the user will want to look at next, and avoid refetching data already viewed.</li>
<li>Design for infrequent connections: <a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#network-timeout">Make the widget work offline</a>.</li>
</ul>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://yuiblog.com/blog/2007/10/02/challenges-of-interface-design-for-mobile-devices/">Challenges of Interface Design for Mobile Devices</a></li>
<li><a href="/articles/view/cross-device-development-techniques-for/">Cross-device development techniques for widgets</a></li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
