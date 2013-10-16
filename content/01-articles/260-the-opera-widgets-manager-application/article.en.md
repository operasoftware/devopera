Title: The Opera Widgets Manager application
----
Date: 2010-02-09 18:38:15
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

<p>Table of contents:</p>

<ol>
<li><a href="#intro">Introduction</a></li>
<li><a href="#wm">Windows Mobile</a>
<ol>
<li><a href="#wm_install">Installation instructions</a></li>
</ol>
</li>
<li><a href="#ws60">S60</a>
<ol>
<li><a href="#s60_install">Installation instructions</a></li>
</ol>
</li>
<li><a href="#run">Running widgets on the device</a></li>
<li><a href="#resources">Resources</a></li>
</ol>

<h2 id="intro">Introduction</h2>

<p>The Opera Widget manager is a standalone application allowing you to organize and run widgets independently of the browser. The manager integrates with Opera’s distribution channel for widgets – <a href="http://widgets.opera.com">widgets.opera.com</a> – and responds to files with a <code>.wgt</code> extension.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/260-the-opera-widgets-manager-application/s60_manager.png" title="Screenshot of the Widget manager on S60" alt="Screenshot of the Widget manager on S60" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/260-the-opera-widgets-manager-application/wm_manager.png" title="Screenshot of the Widget manager on Windows Mobile" alt="Screenshot of the Widget manager on Windows Mobile" /><br />
Figure 1: The Opera Widget manager application on different platforms</p>

<p>The Widget manager application for Windows Mobile and a developer version of the application for the S60 platform are both included in the Opera Widgets SDK.</p>

<h2 id="wm">Windows Mobile</h2>

<p>The Windows Mobile Widget manager gives you one-click access to your favourite widgets. The Windows Mobile Widget manager is available as an add-on download to the Opera Mobile browser for Windows Mobile. These can both be downloaded from <a href="ftp://ftp.opera.com/pub/opera/winmobile/970b1/">ftp://ftp.opera.com/pub/opera/winmobile/970b1/</a></p>

<p>The Windows Mobile Widget manager includes the following widgets by default: Twitter, Mystatus, Google Translate, Geoquiz and Bubbles. It links to an updated version of the <a href="http://widgets.opera.com">Opera Widgets website</a>, where more widgets can be downloaded.</p>

<p>Note that this manager depends on the browser component already being installed.</p>

<h3 id="wm_install">Installation instructions</h3>

<ol>
<li>Either <a href="ftp://ftp.opera.com/pub/opera/winmobile/970b1/">download the Windows Mobile Widget manager package</a> using the browser on your phone, or locate the installation file in the util/manager folder in the SDK package.</li>
<li>Send it to your phone using <a href="http://www.microsoft.com/download/en/details.aspx?id=15">ActiveSync</a>.</li>
<li>Locate the <code>.cab</code> file on your device. Double-click it to start the installation.</li>
<li>Run the installation. The Widget manager is now available in your application list.</li>
</ol>

<h2 id="ws60">S60</h2>

<p>The Widget manager brings widgets to the S60 platform at the touch of a button. The build does not include the Opera browser component – the build has been made available so that developers can test and build Opera Widgets even before our product hits the market.</p>

<p>The application has been tested on the following handsets:</p>

<ul>
<li>Nokia E65</li>
<li>Nokia E66</li>
<li>Nokia 6110</li>
<li>Nokia 6210 Navigator</li>
<li>Nokia N73</li>
<li>Nokia N78</li>
<li>Nokia N82</li>
<li>Nokia N95</li>
<li>Nokia N95 8gb</li>
<li>Nokia N96</li>
<li>Nokia 6124c</li>
<li>Samsung i550</li>
</ul>

<p>Several new features have been added in this update. These include:</p>

<ul>
<li>Move widget: Sort your own widget list and put your widgets where you want them</li>
<li>Send widget: Send your favorite widgets to friends using MMS, Bluetooth or IR (depending on what the phone supports)</li>
<li>Support for <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a>.</li>
</ul>

<h3 id="s60_install">Installation instructions</h3>

<ol>
<li>Either download the S60 Widget manager package using the browser on your phone, or locate the installation file in the util/manager folder in the SDK package.</li>
<li>Send the file to your device using Bluetooth. This will open a dialogue as seen in Figure 3.</li>
<li>Run the installation. The Widget manager will now be available in your application grid.</li>
</ol>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/260-the-opera-widgets-manager-application/s60_install_1.png" title="Installing the manager" alt="Installing the manager" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/260-the-opera-widgets-manager-application/s60_install_2.png" title="Information about the installation package" alt="Information about the installation package" /> <img src="http://forum-test.oslo.osa/kirby/content/articles/260-the-opera-widgets-manager-application/s60_appgrid_wm.png" title="The running manager" alt="The running manager" /><br />
Figure 2: Installing on S60</p>

<h2 id="run">Running widgets on the device</h2>

<p>To run widgets on your device, do the following:</p>

<ol>
<li>Create the widget and test it in the <a href="http://dev.opera.com/articles/view/widget-emulator/">Widget Emulator</a>.</li>
<li>Zip the contents of the widget directory and give it a ”.wgt” extension.</li>
<li>Send it to your device, using Bluetooth, IR or ActiveSync over USB.</li>
<li>Locate the package on the device and double click the file to view your widget in action.</li>
</ol>

<p>You can also visit <a href="http://widgets.opera.com">widgets.opera.com</a> using your phone’s browser to download more widgets.</p>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://dev.opera.com/articles/view/characteristics-of-widgets-on-mobile-pho/">Characteristics of widgets on mobile phones</a></li>
<li><a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/">Cross device development techniques for widgets</a></li>
<li><a href="http://dev.opera.com/articles/view/remote-debugging-of-widgets-on-mobile-devices/">Remote debugging of widgets on mobile devices</a></li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
