Title: Opera TV Emulator user guide
----
Date: 2013-01-23 17:06:20
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

<div class="note">
    <p>This guide has been updated to cover the Opera TV Emulator 3.4. For previous versions of the emulator, please refer to the documentation contained inside the emulator&#39;s <code>.zip</code> package.</p>
</div>

<div class="right"><img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/cover-image.jpg" alt="Opera TV Emulator" /></div>

<h2 id="about">About the Opera TV Emulator</h2>

<p>The Opera TV Emulator allows web developer to test HTML5 and CE-HTML content for TVs and other appliances running the <a href="http://www.opera.com/business/devices/">Opera Devices SDK</a>, as well as HTML-based applications for the <a href="http://www.opera.com/business/tv/store/">Opera TV Store</a>. It comes packaged as an <a href="https://www.virtualbox.org/">Oracle VirtualBox</a> image and can be run on Windows, Mac and Linux.</p>

<ul>
    <li><a href="#install">Installation</a></li>
    <li><a href="#start-page">The Opera TV Emulator start page</a></li>
    <li><a href="#h264-codec">Installing the H.264 codec</a></li>
    <li><a href="#navigation">Navigation</a>
        <ul>
            <li><a href="#keyboard">Keyboard</a></li>
            <li><a href="#web-remote">Web-based remote</a></li>
        </ul></li>
    <li><a href="#local">Accessing local files</a>
        <ul>
            <li><a href="#local-server">Running a local server</a></li>
            <li><a href="#shared-folders">Shared folders</a></li>
        </ul></li>
    <li><a href="#debugging">Debugging with Opera Dragonfly</a></li>
    <li><a href="#settings">Settings</a></li>
    <li><a href="#closing">Closing the emulator</a></li>
    <li><a href="#support">Support</a></li>
</ul>

<h2 id="install">Installation</h2>

<p>The Opera TV Emulator is provided as a preconfigured <a href="https://www.virtualbox.org/">Oracle VirtualBox</a>  machine and disk image. This ensures a test environment for web developers that is as close to a real device as possible. To use the emulator:</p>

<ol>
    <li>Install the <a href="http://www.virtualbox.org/wiki/Downloads">Oracle VirtualBox</a> application.</li>
    <li>Download the <a href="http://www.opera.com/business/tv/emulator/">Opera TV Emulator</a> package.</li>
    <li>Extract the package to an appropriate folder on your development machine.</li>
    <li>Open the <code>.vbox</code> file from the package. This will automatically add the virtual machine to the Oracle VirtualBox Manager and start the emulator.</li>
</ol>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/virtualbox-vbox-vdi-files.png" alt="The Opera TV Emulator .vbox and .vdi files from the extracted package." />

<p>You can also install the emulator from within the VirtualBox Manager itself: in the <b>Machine</b> menu, choose <b>Add</b> and open the <code>.vbox</code> file.</p>

<p class="note">Some Linux distributions already ship with an open source version of VirtualBox. The Opera TV Emulator package was specifically developed for the <a href="https://www.virtualbox.org/">Oracle VirtualBox</a> binary version, and may not work reliably with any other version.</p>

<h2 id="start-page">The Opera TV Emulator start page</h2>

<p>The Opera TV Emulator is, in essence, a self-contained generic web browser, equivalent to what you would find on devices running the <a href="http://www.opera.com/business/devices/">Opera Devices SDK</a>. In addition, the emulator contains specific functionality that is only present in <a href="http://www.opera.com/business/tv/store/">Opera TV Store</a> client application.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/tv-emulator-start-page.png" alt="The Opera TV Emulator start page." />

<p>The emulator&#39;s start page – itself just a web page – provides a direct link to the <a href="http://demo.tvstore.opera.com">Opera TV Store demo server</a> at <code>http://demo.tvstore.opera.com</code>. This demo store can be used to test Opera TV Store applications. See our article on <a href="http://dev.opera.com/articles/view/testing-your-app-inside-the-opera-tv-store/"><cite>Testing your app inside the Opera TV Store</cite></a> for further information.</p>

<h2 id="h264-codec">Installing the H.264 codec</h2>

<p>For legal reasons, the Opera TV Emulator does not come with any H.264 codec preinstalled. As this codec is widely used for TV applications, you will need to install it the first time you run the emulator.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/codec-install.png" alt="The H.264 codec installation prompt on the Opera TV Emulator start page." />

<p>To do this, simply choose the <q>Install</q> option on the start page. This will download the necessary codec, install it, and restart Opera.</p>

<p>For information about the specific multimedia formats that can be used, please refer to the article on <a href="http://dev.opera.com/articles/view/html5-audio-video-support-in-opera-tv-store-applications/"><cite>HTML5 audio/video support in Opera TV Store applications</cite></a>.</p>

<h2 id="navigation">Navigation</h2>

<p>Although the Opera TV Emulator can be used with a mouse, this will not provide the same user experience as the real TV browser and Opera TV Store client. Instead of using on-screen mouse pointers, users navigate by using directional keys on their remote controls to select different focusable page elements (buttons, links, etc). For a more accurate emulation, there are two alternative control mechanisms that simulate a real device&#39;s remote control interface:</p>

<h3 id="keyboard">Keyboard</h3>

<p>The emulator uses the following keyboard controls:</p>

<ul>
<li><kbd>F1</kbd> shows/hides the browser navigation bar</li>
<li><kbd>←</kbd><kbd>↑</kbd><kbd>→</kbd><kbd>↓</kbd> cursor keys move the focus</li>
<li><kbd>0</kbd>-<kbd>9</kbd> number keys</li>
<li><kbd>Enter</kbd> activates the currently focused element</li>
<li><kbd>Backspace</kbd> maps to the <kbd>Return</kbd>/<kbd>Back</kbd> key</li>
<li><kbd>F5</kbd> reload the current page</li>
<li><kbd>F10</kbd> restart the browser</li>
<li><kbd>ESC</kbd> close current tab, open a fresh <code>about:blank</code> tab</li>
</ul>

<h3 id="web-remote">Web-based remote</h3>

<p>In addition to basic keyboard controls, the Opera TV Emulator also provides a more comprehensive web-based remote control that also simulates the colored keys (red, green, yellow, blue) and a set of media controls (play/pause, stop, rewind, fast-forward).</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/web-based-remote.png" alt="The Opera TV Emulator&#39;s web-based remote control on localhost:5555." />

<p>When the emulator is running, the Oracle VirtualBox machine is configured to expose a local server on the host machine on port <code>5555</code>. To access the web-based remote, simply launch your regular browser on the development machine and point it to <code>http://localhost:5555</code>.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/port-forwarding.png" alt="VirtualBox&#39;s settings for Port Forwarding." />

<p>In order to use the web-based remote control, please ensure that no other application is currently running on your development machine using port <code>5555</code>. If this is not possible, you can change the port number used by the VirtualBox machine by going to the <q>Network</q> section in the machine&#39;s settings and modifying the <q>Port Forwarding</q> host port.</p>

<h2 id="local">Accessing local files</h2>

<p>The Opera TV Emulator runs as a completely separate Linux-based system on your development machine. To access files hosted on your development machine for testing, there are two options:</p>

<h3 id="local-server">Running a local server</h3>

<p>If you have a server (such as the <a href="http://projects.apache.org/projects/http_server.html">Apache HTTP Server</a>) running on your development machine, note that it is not possible to access it from within the emulator by just using the standard <code>http://localhost</code> address, as <code>localhost</code> in this context refers to the emulator&#39;s environment itself.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/local-server.png" alt="Running WAMP as a local server on the machine: in a browser on the host environment, the server can simply be accessed from &#39;http://localhost&#39;. In the Opera TV Emulator, the IP address of the host machine itself has to be used." />

<p>Instead, you should use the IP address of your development machine – the emulator will then establish a connection to your server from within the virtual machine.</p>

<h3 id="shared-folders">Shared folders</h3>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/shared-folder.png" alt="VirtualBox&#39;s setup for Shared Folders." />

<p>Particularly for static files that do not require any server-side functionality, another option is to add a local folder on your development machine as a shared folder inside the emulator&#39;s Linux environment. This can be done from the Oracle VirtualBox Manager:

<ol>
    <li>Make sure the Opera TV Emulator is not currently running</li>
    <li>Go to the emulator&#39;s <q>Settings...</q> (either by right-clicking on the emulator or from the <q>Machine</q> menu)</li>
    <li>In the <q>Shared Folders</q> section, add your local folder, making sure the <q>Auto-mount</q> option is checked</li>
</ol>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/shared-folder2.png" alt="The Opera TV Emulator, showing the shared folder being displayed from the relevant file://localhost/mydata location." />

<p>Your shared folder will be available under <code>file://localhost/mydata/sf_[name of your folder]</code> the next time you start the emulator.</p>

<h2 id="debugging">Debugging with Opera Dragonfly</h2>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/remote-debug-setup.png" alt="A standard debugging setup: Opera TV Emulator, a browser showing the web-based remote control, and an undocked Opera Dragonfly window set to remotely debug the emulator." />

<p><a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> is a comprehensive set of web developer tools integrated with the Opera desktop browser. Using the remote debugging functionality of Opera Dragonfly, it is possible to debug web pages and applications running in the Opera TV Emulator:</p>
<ol>
    <li>Set Opera Dragonfly to listen for incoming remote debugging connections.</li>
    <li>Press the <q>Connect to Dragonfly</q> button on the emulator&#39;s web-based remote control.</li>
</ol>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/tv-emulator-remote-dragonfly.png" alt="The web remote control&#39;s &#39;Connect to Dragonfly&#39; button." />

<p class="note">Note that using the <q>Connect to Dragonfly</q> button is the only way to establish a remote debugging connection. Entering <code>opera:debug</code> in the Opera TV Emulator&#39;s address bar will not work.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/debugging-context.png" alt="Opera Dragonfly&#39;s Debugging Context button." />

<p>When the connection is established, make sure that the debugging context is set to the web page / application that you want to debug, rather than the Opera TV Emulator&#39;s status page or navigation bar.</p>

<p>For more information, please refer to the <a href="http://www.opera.com/dragonfly/documentation/">Opera Dragonfly documentation</a>.</p>

<h2 id="settings">Settings</h2>

<p>The Opera TV Emulator offers a few customisation options that can be configured via the <q>Settings</q> button on the web remote control.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/web-remote-settings.png" alt="The web-based remote control, showing the settings popup dialog." />

<h3>General</h3>
<ul>
<li><strong>TV Emulator version:</strong> Some emulator packages can contain a series of different Opera Devices SDK versions. You can switch between them with this dropdown.</li>
<li><strong>Enable TV Store profile:</strong> the Opera TV Store features a few customisations (such as custom <code>VK_</code> key constants in the global JavaScript namespace) not present in the standard Opera Devices SDK. If you are developing/testing Opera TV Store applications, this option should be checked.</li>
<li><strong>Default URL:</strong> The URL that will be loaded when the emulator is launched.</li>
<li><strong>Screen resolution:</strong> The screen resolution of the Opera TV Emulator.</li>
</ul>
<h3>Debug</h3>
<ul>
<li><strong>Opera Dragonfly listening IP/port:</strong> For the purposes of Opera Dragonfly debugging, it is possible to set a different IP and port from the default. Generally, you should not need to change these.</li>
</ul>
<h3>Memory</h3>
<ul>
<li><strong>Alloc limit/Heap limit:</strong> These are advanced options that let you control the memory available for the TV Emulator. These options may be useful when you want to emulate a device with limited memory.</li>
</ul>
<h3>Browsing Data</h3>
<ul>
<li><strong>Clear cache / Clear history:</strong> these buttons clear the cache or history immediately, without having to save or apply the settings.</li>
</ul>
<h3>Proxy</h3>
<ul>
<li><strong>HTTP/HTTPS proxy:</strong> Define the address of any proxies required to make HTTP/HTTPS connections from your development machine.</li>
</ul>
<h3>Other</h3>
<ul>
<li><strong>Allow file and cross-domain XMLHttpRequests:</strong> For security reasons, most browsers block XMLHttpRequests to external domains and local files by default. However, for testing purposes (for instance, if your application is not yet deployed to its production server) you can set the emulator to allow these requests.</li>
<li><strong>Performance adjustment:</strong> You can throttle the performance of the emulator to more closely simulate low-power devices.</li>
<li><strong>HTTP Accept Language:</strong> If your application does content negotiation based on language headers, this option lets you define the default HTTP Accept Language header that is sent with each request.</li>
</ul>

<p>To immediately apply changes, choose <q>Apply</q> – this will store the settings and restart the emulator. Using <q>Save</q> will store the new settings, but these will only take effect the next time the emulator is restarted.</p>

<h2 id="closing">Closing the emulator</h2>

<img src="http://forum-test.oslo.osa/kirby/content/articles/797-opera-tv-emulator-user-guide/shutdown.png" alt="VirtualBox&#39;s &#39;Close Virtual Machine&#39; dialog, with the &#39;Send the shutdown signal&#39; option checked." />

<p>When closing the emulator, please choose the <q>Send the shutdown signal</q> option. This will ensure that the Linux environment in the emulator is properly powered down.</p>

<h2 id="support">Support</h2>

<p>Opera Software does not provide any official support for the Opera TV Emulator. However, a number of communication channels are available:</p>
<ul>
    <li>Join our developer community forums on <a href="http://dev.opera.com/forums/">dev.opera.com/forums</a>, where you&#39;ll find a dedicated section on TV content development.</li>
    <li>Get notified of updates to the Opera TV Emulator on the <a href="https://list.opera.com/mailman/listinfo/tv-emulator-external">tv-emulator-external@list.opera.com mailing list</a>.</li>
</ul></p>
