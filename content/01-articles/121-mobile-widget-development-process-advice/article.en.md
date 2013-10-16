Title: Mobile widget development process advice
----
Date: 2010-02-09 18:56:21
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


<p>Table of contents:</p>

<ol>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#defineidea">Define a widget idea</a></li>
<li><a href="#desktop">Develop on desktop</a>
<ol>
<li><a href="#desktop-spatial">Tip: Spatial navigation on desktop</a></li>
</ol>
</li>
<li><a href="#testing">Testing your widget</a>
<ol>
<li><a href="#testing-emulator">Test in the emulator</a></li>
<li><a href="#testing-phone">Test on the phone</a></li>
<li><a href="#testing-dragonfly">Debug using Opera Dragonfly</a></li>
</ol>
</li>
<li><a href="#deploy">Deploy your widget</a></li>
<li><a href="#tools">Tools</a>
<ol>
<li><a href="#tools-editors">Editing environments</a></li>
<li><a href="#tools-autocomplete">Tip: Import dummy JavaScript files for auto completion</a></li>
</ol>
</li>
<li><a href="#resources">Resources</a></li>
</ol>

<h2 id="introduction">Introduction</h2>

<p>This articles provides some advice on developing mobile widgets, with special focus on mobile widgets. We can split the process into four main parts:</p>

<ul>
<li>Defining a widget idea</li>
<li>Development</li>
<li>Testing</li>
<li>Deployment</li>
</ul>

<p>Generally, we recommend that you develop your widget on desktop, test your widget in the <a href="http://dev.opera.com/articles/view/widget-emulator/">Widget Emulator</a>, and test on the phone when you’re done. Finally, you should upload your widget to <a href="http://widgets.opera.com">widgets.opera.com</a> to share it with the world.</p>

<h2 id="defineidea">Define a widget idea</h2>

<p>You should start out by determining what sort of widget you want to make. We recommend analysing user needs and <a href="/articles/view/characteristics-of-widgets-on-mobile-pho/">considering the characteristics of the mobile device</a> before embarking on making a widget.</p>

<p>Who are the users? Young or old? Professionals or casual users? What is the need the widget satisfies or the problem it will solve? Which situations will the widget be used in? In the user’s office, living room or while on the move? These are all questions you should have answered before embarking on development.</p>

<h2 id="desktop">Develop on desktop</h2>

<p>Developing on desktop is quick, easy and supported by several tools, so it’s a lot easier to do the bulk of your development work there, before then testing on mobile devices.</p>

<h3 id="desktop-spatial">Tip: Spatial navigation on desktop</h3>

<p>You can simulate Spatial navigation on desktop by clicking Shift + &lt;arrow key&gt;. Opera will highlight the active link and move the focus when you click the arrow keys.</p>

<p>Spatial navigation is an Opera technology allowing the joystick on your mobile phone to be used to move focus between navigable elements on a webpage. Form controls and links and elements with <code>onclick</code> handlers are added to the spatial navigation connection. Moving the joystick right or down will move to the next navigable element on the page. Moving it up or left will move to the previous one.</p>

<p>By testing Spatial navigation on desktop, you can get an idea of how your widget works on different devices which support it.</p>

<h2 id="testing">Testing your widget</h2>

<h3 id="testing-emulator">Test in the emulator</h3>

<p>The <a href="http://dev.opera.com/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/">Opera Widgets Mobile Emulator</a> is a useful desktop application for testing what your widget will look like on different devices. Instead of copying your widget onto your mobile phone each time you make a change, you can work on your desktop using your favorite editing tools and run the widget inside the emulator.</p>

<p><img src="/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/6-opera-widgets-add.png" width="640" height="585" alt="Screenshot of the Opera Widgets Mobile Emulator" /></p>
<p class="comment">Figure 1: The Opera Widgets Mobile Emulator</p>

<p>The beauty of the emulator is not only that it runs on your desktop, but it&#39;s also a native application that fully reflects the features and capabilities of our <a href="http://labs.opera.com/news/2010/02/18/">Opera Widgets manager for mobile phones</a>. See the article on the <a href="http://dev.opera.com/articles/view/opera-mobile-10-widgets-mobile-emulator-desktop/">Opera Widgets Mobile Emulator</a> for more details and a download link.</p>

<h3 id="testing-phone">Test on the phone</h3>

<p>When you are satisfied with the result, you can copy the widget onto the device and make final tests.</p>

<p>In order to test your widget on a an actual device, you have some choices:</p>

<ul>
<li>Copy the packaged widget onto the device, for example through USB or Bluetooh connection, and run it from the file system. How this is done varies from mobile to mobile.</li>
<li>Make the widget downloadable from the web. Opera will recognize any .zip or .wgt file served with the <code>application/x-opera-widgets</code> MIME type. Visit the URL with your mobile phone to load the widget.</li>
</ul>

<h3 id="testing-dragonfly">Debug using Opera Dragonfly</h3>

<p>In order to speed up debugging, you can use Opera’s inspector and debugger Opera Dragonfly. You can debug scripts running in widgets on Desktop as explained in the <a href="http://dev.opera.com/articles/view/debugging-widgets-using-opera-dragonfly/">article on debugging widgets with the Widget Emulator and Dragonfly</a>.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/121-mobile-widget-development-process-advice/dragonfly_opera_script.png" title="Screenshot of the Opera Dragonfly" alt="Screenshot of the Opera Dragonfly" /></p>

<p class="comment">Figure 2: Opera Dragonfly.</p>

<p>You can also <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">debug widgets running on the mobile phone</a>, by connecting it to a debugger running on Desktop.</p>

<p>You should use Opera Dragonfly rather than use more cumbersome methods such as calls to <code>alert()</code> and <code>opera.postError()</code>. Note that these functions usually do not work on mobiles anyway.</p>

<h2 id="deploy">Deploy your widget</h2>

<p>You have two choices when finally deploying your widget:</p>

<ul>
<li>Upload your widget to <a href="http://widgets.opera.com">widgets.opera.com</a>. This website is the hub of all community widget activity. Each widget is reviewed by Opera Software to check if it works on different devices.</li>
<li>Make the widget available on your own website. Opera will recognize any .zip or .wgt served with the application/x-opera-widgets MIME type. The link element can be used to announce a widget from a web page using rel=“alternate” and type=“application/x-opera-widgets”.</li>
</ul>

<p>widgets.opera.com will filter the list of available widgets based on the client viewing the pages. If you visit the site with a mobile phone, you will only be able to access those widgets that have been approved for use on that type of device.</p>

<p>See <a href="http://dev.opera.com/articles/view/packing-and-deploying-your-opera-widget/">Packing and deploying your Opera Widget</a> at <a href="http://dev.opera.com">dev.opera.com</a> for more information.</p>

<h2 id="tools">Tools</h2>

<h3 id="tools-editors">Editing environments</h3>

<p>Several editors have good support for web related languages such as HTML, JavaScript and CSS. Some suggestions:</p>

<ul>
<li><a href="http://www.aptana.org/">Aptana</a> – Eclipse-based IDE, featuring built in support for various toolkits.</li>
<li><a href="http://www.openkomodo.com/">OpenKomodo</a> – Limitless scriptability.</li>
<li><a href="http://www.ultraedit.com/">UltraEdit</a> – for a slimmer experience</li>
<li><a href="http://www.gnu.org/software/emacs/">Emacs</a> – for the diehard Unix user.</li>
</ul>

<h3 id="tools-autocomplete">Tip: Import dummy JavaScript files for auto completion</h3>

<p>Some editors, like Komodo, support importing JavaScript files and using their contents for auto completion. There is a dummy file for the <a href="http://dev.opera.com/libraries/widgetobject/widget-object.js">Opera Widgets core DOM reference</a> available that you can use to get auto completion of the widget and window objects when editing your JavaScript.</p>

<p><a href="http://dev.opera.com/libraries/widgetobject/widget-object.js">Download the file here</a>.</p>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://dev.opera.com/articles/view/widget-emulator/">Widget Emulator</a>.</li>
<li><a href="http://dev.opera.com/articles/view/packing-and-deploying-your-opera-widget/">Packing and deploying your Opera Widget</a></li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
                          Widget Emulator
