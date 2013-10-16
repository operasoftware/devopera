Title: Opera Devices SDK 9.6 developer documentation
----
Date: 2008-09-10 10:02:26
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

<h2>Introduction</h2>

<p>The Web has moved beyond the computer, into the living room, the car, and anywhere you go.  The Web is no longer tethered to a fixed internet connection on one kind of device.  Opera is at the forefront of the connected anywhere era, enabling diverse companies to make their devices Web enabled.  This article will introduce the Opera Devices SDK 9.6, which will power many of these devices.</p>

<p>The <a href="http://www.opera.com/b2b/solutions/devices/">Opera Devices SDK</a> is a Software Development Kit available to device manufacturers allowing them to build a browser for their devices, such as TVs, set top boxes, portable media players, Internet tablets, VoIP phones, vehicles and games consoles, etc. A <a href="http://www.opera.com/discover/video/devices_sdk/">video guided tour of the SDK</a> can be found on the Opera <a href="http://www.opera.com/b2b/">B2B</a> web site.</p>

<p>Many of  the devices using the previous SDK have been TVs or set-top box based, such as the Sony BRAVIA Internet Video Link, while the more high-profile consumer-focused browsers have been in portable media players and internet tablet style devices, such as Archos portable media players, and the Nokia 770 and N800. A number of unannounced devices in the pipeline  will include the Opera Devices SDK 9.6.</p>

<h2>Opera Devices SDK 9.6 features</h2>

<h3>Rendering engine</h3>

<p>The Opera Devices SDK 9.6 has been upgraded to use Presto 2.1, the same standards-compliant rendering engine that is included in Opera 9.5 and 9.6 for desktop computers, and Opera Mobile 9.5.</p> 

<p>If you develop using standards and follow established best practices, then your web sites and applications should work correctly across the Opera product line.  If your site is tested and working in Opera 9.5, it should work with the minimum of issues in browsers based on the Opera Devices SDK 9.6.</p> 

<p>The main areas of difference are in relation to the input modes used by the devices (often no keyboard or mouse are available), screen sizes and resolutions and the availability of fonts and plug-ins.  These depend on the device that the browser or rendering component is being delivered on.  You can find out more about how to develop for Presto 2.1 and the specifications it supports in the Dev Opera article <a href="http://dev.opera.com/articles/view/presto-2-1-web-standards-supported-by/">Presto 2.1&#8212;web standards supported by Opera&#8217;s core</a>.</p>

<h3>Opera Zoom</h3>

<p>One of the most noticeable features of the SDK is Opera Zoom.  This feature was introduced in the Nintendo Wii browser, and has since been featured in Opera Mini and Opera Mobile. This was available in the 9.5 version of the SDK, and  is now hardware-accelerated, enabling it to run on more devices with improved performance.</p>

<p>It provides a zoom-able interface, where the page is first loaded zoomed out in an overview mode using a virtual screen of a set number of pixels.  This value depends on the device that is using the SDK, as it is customisable by the customer.   The user can  zoom in to the content they are interested in so that the content becomes readable. The SDK provides text wrapping functionality, so that the text will automatically reflow to fit the width of the screen when the users zooms in.  This eliminates the problems of vertical scrolling when reading text.</p>  

<p>Opera Zoom is designed to work out-of-the-box for most web sites, however  issues can occur when  trying to detect the screen size to provide a optimised layout for small-screen devices.</p> 

<p>Testing for <code>screen.height</code> and <code>screen.width</code> via JavaScript will not return the actual height or width of the screen (if Opera Zoom is enabled on the device), but will instead return the virtual screen height and width&#8212;this may not be what you are actually trying to test.</p> 

<p>Instead, test for <code>window.innerHeight</code> and <code>window.innerWidth</code> if you are trying to detect the display size, which should return the actual physical height and width of the screen (providing the browser window is running full screen, otherwise it is the width and height of the browser window).</p>  

<h3>OBML support</h3>

<p>This release of the SDK introduces experimental OBML  (Opera Binary Markup Language) support which compresses Web pages by up to 90 percent when enabled.  This speeds up page loading times considerably, especially on low bandwidth networks.</p>  

<p>Previously only available on Opera Mini,  content is first rendered on the server and compressed into OBML before it is sent to the browser client.  Web application developers should be aware of that this can introduce incompatibilities with some Ajax and JavaScript; find out more about OBML and how to develop for browsers using it on the Dev Opera article <a href="http://dev.opera.com/articles/view/opera-binary-markup-language/">Opera Binary Markup Language</a>.</p> 

<p>The main difference between Opera Mini and OBML support  in browsers built with Opera Devices 9.6 SDK is that Opera Mini is always running on a phone with a relatively small screen and restricted input,  whereas devices running Opera Turbo could be running anything from a tiny screen to a TV sized screen, and have any input from a keypad or touch screen to a full keyboard and mouse set up.</p> 

<p>Currently, OBML is a preview of what this feature is capable of and will be refined before being included in shipping products.</p> 

<h3>Universal Plug and Play (UPnP)</h3>

<p>This release also includes a demo version of Universal Plug and Play support.  This zero- configuration standard allows multiple devices to be detected without any manual configuration by the user.  Content can then be streamed from one-web enabled device to the other. For example, a user could send a photo from their friend&#8217;s photo stream on their personal media player to their UPnP enabled TV in the living room.</p> 

<h3>Fraud protection</h3>

<p>Opera Devices 9.6 SDK also debuts fraud detection support.  This is primarily an end-user feature, but provides peace of mind for sites that are often the target of phishing attacks, such as banks, online shopping and auctions.  Browsers based on this SDK will warn users of known phishing sites that are masquerading as your or other sites.</p>  

<h3>Plug-ins and fonts</h3>

<p>The SDK provides support for the <abbr>NPAPI</abbr> (Netscape Plug-in API) for browser plug-ins.  Opera can provide the Adobe Flash plug-in for devices that use the SDK, provided that the plug-in is available for that platform and architecture.</p>

<p>Therefore it can&#8217;t be guaranteed that Flash or other plug-ins are available, so avoid plug-ins where possible, and use open web standards.  If a  plug-in  is essential, to  support video for example, the most widely-supported plug-in is  likely to be  Flash. As the embedded version of Flash is behind the desktop-based equivalent, make sure your content is playable on Flash 8 or below or it will probably not run on any  mobile or device-based browsers, including those made with Opera Devices 9.6 SDK.</p>

<p>As with mobile browsers, it is important not to rely on specific fonts being available.  Pixel-perfect layouts which require specific fonts and sizes may mean that the layout will break in unpredictable ways if that font is unavailable.</p>

<p> Always allow breathing room for the font to be smaller or larger than you expect.  This is also an important consideration for localisation (text translated into other languages could be longer) or accessibility (the user may increase the text size to make it more comfortable to read.)</p> 

<p>Also make sure you include a fallback generic font, so if your specified font is not available, the browser can use the default font for that type.  For example, if you want to use the <q>Helvetica</q> font, make sure you specify the generic <code>sans-serif</code> font as the last value in the <code>font-family</code> CSS rule.  Opera can provide a set of fonts for device manufacturers, but it is up to them if they licence these fonts, or choose other fonts.</p>

<h2>Conclusion</h2>

<ul>
	<li>The Opera Devices 9.6 SDK will be available on a range of devices, from handhelds to large screen TVs.</li>  
	<li>It includes the Opera Presto 2.1 rendering engine found in the Opera 9.5 and 9.6 range of browsers&#8212;enabling devices using the SDK to render real world web sites&#8212;and offers web developers a high degree of current and cutting edge web standards including (X)HTML (including some HTML5), CSS (including some CSS3), DOM (including some DOM 3), JavaScript, SVG, XSLT and much more.</li>  

	<li>Experimental Opera OBML  support allows page loading times to be greatly reduced, especially on constrained devices.</li>
	<li>Hardware accelerated Opera Zoom allows your web pages to adapt to any screen sizes with no (or minimal) development effort.  Developers detecting the screen size to optimise the experience for the device should make sure they detect the screen size instead of the virtual screen size.</li>  
	<li>It is important to take care when using plug-ins and fonts, so that your content is still accessible on a range of devices.  Input methods vary between different classes of devices, so don&#8217;t rely on a mouse and keyboard being available.  Try to limit the amount of typing the users has to do where possible. </li>
</ul>



