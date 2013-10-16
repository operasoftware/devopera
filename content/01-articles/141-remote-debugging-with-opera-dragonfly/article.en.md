Title: Remote debugging with Opera Dragonfly
----
Date: 2008-07-17 07:59:08
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

<p class="note">This article is <strong>deprecated</strong>; instead, consult our <a href="http://www.opera.com/dragonfly/documentation/">Opera Dragonfly 1.0 Field Guide</a>, which has a whole section dedicated to <a href="http://www.opera.com/dragonfly/documentation/remote/">remote debugging</a>.</p>

<h2>Introduction</h2>

<p>One of the revolutionary aspects of <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> is the remote debug feature.  With the release of Opera Mobile 9.5 beta 1, Opera Dragonfly can be used to debug web pages and applications on a mobile phone, from your regular development machine.  This article will step through the process of remotely debugging mobile devices and introduce some of the features of Opera Dragonfly.</p>

<h2>Setting up remote debugging</h2>

<p>Two items are required for remote debugging; a copy of <a href="http://www.opera.com/browser/">Opera desktop</a> (which includes Opera Dragonfly since version 9.5) and a mobile phone running <a href="http://www.opera.com/mobile/">Opera Mobile</a> (9.7 or better).  If you don’t have a mobile phone, it is possible to test this set up by using a second computer running Opera desktop 9.5+, as Opera Dragonfly supports debugging another instance of the desktop browser. This is ideal for debugging a secondary machine, for example if you want to test on a different operating system.</p>
<p>Once you have downloaded and installed both versions of Opera, you should open Opera Dragonfly by selecting “Tools &gt; Advanced &gt; Opera Dragonfly” in the Opera menu bar on your computer.  Click on the “Configurations” icon in the lower right hand corner of the Opera Dragonfly window, check the “Remote Debug” check box, and click the “Apply” button (see Figure 1).  Now that Opera Dragonfly is in remote debug mode, the next step is to connect to it using the mobile phone.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/141-remote-debugging-with-opera-dragonfly/settings_remote-debug.png" width="571" height="308" alt="The settings needed to set up remote debugging in Opera Dragonfly" />
<p class="comment">Figure 1: The settings needed to set up remote debugging in Opera Dragonfly.</p>

<p>Fire up Opera Mobile, and enter <kbd>opera:debug</kbd>  in the URL field.  A page should load allowing you to enter the required information to connect to Opera Dragonfly on your computer.  Here, you should enter the IP address of your computer, and the port number to connect to (the default is 7001); you then press the “Connect” button. </p>

<p>Your IP address can be found on Mac and Linux by typing <kbd>ifconfig</kbd> in a terminal window and looking for the <samp>inet</samp> value of your <samp>active</samp> connection. In my case I’m using a Ethernet connection, so the correct inet value is the one that corresponds to the media value <samp>media: autoselect (100baseTX &lt;full-duplex,flow-control&gt;) status: active</samp>.  If you have multiple connections—such as WiFi, Bluetooth, etc.—there will be multiple inet values, so it is important to specify the correct value (the value you need is highlighted in Figure 2).  On Windows the output is somewhat simpler.  You can find the IP Address by typing <kbd>ipconfig</kbd> on the Windows Command Prompt, and it will be labelled <samp>IP Address</samp>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/141-remote-debugging-with-opera-dragonfly/ipaddressmac.gif" alt="Finding your computers IP address on Mac or Linux. The IP address you need is the one after the inet string." />
<p class="comment">Figure 2: Finding your computer’s IP address on Mac or Linux (actual IP addresses blurred out for security reasons).</p>

<p>If all went well you should be presented with a message informing you that you are connected to the specified IP address and port number.  For best results, I’d recommend using Active Sync (if using Windows) or WiFi (if it is available on your mobile model) for the network connection on the mobile device.</p>
<p>Only one connection is allowed per session—you must disconnect the existing device first if you wish to debug a new device, otherwise Opera Dragonfly will only receive and send requests to the device that was connected first. </p>
<p>It is important to bear in mind that the connection is not encrypted, so if you are connecting over an open public connection, rather than behind a firewall, make sure you do not transmit any sensitive information, such as credit card numbers. </p>
<p>Once connected, you can click on the Opera Dragonfly Environment tab (see Figure 3) to see information about the device you are connected to, and the version of Opera Dragonfly that you are running.  In this case it should give the platform that Opera Mobile is running on, which in my case is Symbian.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/141-remote-debugging-with-opera-dragonfly/remote-environment.png" width="510" height="402" alt="The Opera Dragonfly environment tab, showing it is connected to the Symbian OS." />
<p class="comment">Figure 3: The Opera Dragonfly environment tab, showing it is connected to the Symbian OS.</p>

<h2>Debugging your first mobile page</h2>

<p>Now that your computer and mobile are speaking to each other through the Scope protocol, open a new tab in Opera Mobile, and enter the URL of a page you’d like to debug in the URL field.  Once the page has loaded, it should show up in the drop-down combo box in the Opera Dragonfly user interface.  Once you select this, you are ready to start debugging the page.</p>

<p>With the page selected in Opera Dragonfly, click the DOM tab and select the required (X)HTML file.  You will then see the generated DOM of the page that you are viewing on your mobile phone.  The page can then be debugged in exactly the same way as if it were a page on your computer.</p>

<p>To experiment with debugging the page, I’ll walk you through Opera Dragonfly’s CSS editing feature.  If you try to click on a element, such as the <code>body</code> element, it will scroll the element into view (if it isn’t already) on the mobile, and show the style information on the right hand side panel in Opera Dragonfly.  Now try to edit one of the values.  If there is a <code>background-color</code>, you can click on the value and change it.  Click on the value of the CSS declaration and then enter a new value—<kbd>red</kbd> for example.  Pressing the up or down arrows on the keyboard will cycle through the possible values (as seen in Figure 4).</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/141-remote-debugging-with-opera-dragonfly/editingvalue.png" alt="Cycling through CSS values in Opera Dragonfly." />
<p class="comment">Figure 4: Cycling through CSS values in Opera Dragonfly.</p>

<p>Look at the screen of the mobile while doing this and you will see that the background colour will update in real time.</p>

<p>There may be a short lag if you have a slow network connection between the device and the computer. Now try adjusting another property, such as <code>font-size</code>, and notice how the visuals on screen will change in real time.  This CSS tweaking is very useful for testing what will happen when rules are changed or new rules are added.  Once connected, debugging a remote device works the same way as on your local machine, so you can experiment with the features you already know, or follow the <a href="http://dev.opera.com/articles/view/introduction-to-opera-dragonfly/">introduction to Opera Dragonfly</a> article on <a href="http://dev.opera.com">Dev.Opera</a>.</p>

<h2>Wrapping up and disconnecting</h2>

<p>Once you have finished debugging your page, you have to disconnect to return both Opera Dragonfly and the device into their regular modes.  In Opera Mobile, you can navigate back to <kbd>opera:debug</kbd>  and click the “Disconnect” button.  If you are finished using the browser, you can also disconnect by closing the application.  To return Opera Dragonfly into local debugging mode, you must open the “Settings” window again, uncheck the “Remote Debug” checkbox and click “Apply”. </p>

<h2>Conclusion</h2>

<p>In this article I’ve stepped through how to set up and connect a remote device to Opera Dragonfly using Opera Mobile, and briefly touched on the CSS editing feature of Opera Dragonfly.  Now you should know how to use Opera Dragonfly to debug the different supported devices, right from your regular development machine.</p> 
            
