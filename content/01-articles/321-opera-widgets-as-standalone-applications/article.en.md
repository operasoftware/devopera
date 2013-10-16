Title: Opera Widgets as standalone applications
----
Date: 2009-11-25 15:25:26
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">This article is deprecated</h2>
<p>
We recently announced that we&#39;re <a href="http://my.opera.com/addons/blog/2012/04/24/sunsetting-unite-and-widgets">discontinuing Widgets and Unite</a> from Opera 12, in favour of <a href="http://dev.opera.com/addons/extensions/">Opera Extensions</a>. (Already developed a  Widget? See <a href="http://dev.opera.com/articles/view/converting-widgets-to-opera-extensions/">converting widgets to Opera extensions</a>.)</p> 
</div>  

<h2 id="intro">Introduction</h2>

<p>Opera Widgets are made using Web standards, the same technology used to build Web pages. This ensures that they work on all platforms and operating systems, as well as providing developers with a much shorter and simpler development cycle for creating desktop applications.</p>

<p>Ever since Opera Widgets became part of Opera’s desktop browser in 2006 they have been dependent on the browser in many respects. Opera Widgets are managed from within the browser and they run as long as the browser runs.</p>

<p><strong>Opera Widgets for desktop</strong> — found in our new <a href="http://www.opera.com/browser/next">Opera 10.20 alpha release</a> — breaks this dependency between widgets and the browser. In short, as long as you have Opera installed somewhere on your machine, you can run any widget you like, without ever opening the browser.</p>

<p>This release gives you a preview of the changes that Opera has planned for widgets. Opera Widgets are getting a complete make-over — from being small, single-purpose gadgets to standalone applications with the power to replace native applications. In this article, we take a closer look at the main changes and new features included in Opera Widgets for desktop.</p>

<h2 id="download">Download process</h2>

<p>A new, better approach has been introduced for downloading widgets via Opera. This mechanism takes advantage of Opera’s download manager to give you more flexibility while your favorite widgets are being downloaded. You can use this time to look for some other widgets or simply surf the Web, and as soon as the widget download completes Opera will automatically trigger the widget installer.</p>

<p>From now on, you can also download widgets via different browsers and Opera’s widget runtime will take care of the installation. The widget runtime is registered in the system as one of the <code>.wgt</code> filetype application handlers, so it will be listed among the applications capable of handling widget files.</p>

<h2 id="installation">Installation/uninstallation process</h2>

<p>The installation and uninstallation processes have changed a lot with Opera’s new widget runtime. Widget management has been moved out of the Opera browser and into the operating system itself. Widgets now integrate better with the platform via shortcuts and launch scripts (depending on the host platform), and are listed together with other applications belonging to the OS. The widget runtime is equipped with a graphical widget installer that facilitates the widget deployment process.</p>

<p>Widget installation can be triggered in several ways:</p>

<ul>
<li>Download the widget via Opera (or another browser) — the widget installer will run automatically after download</li>
<li>Double click on a <code>.wgt</code> file in your file system</li>
<li>Drag and drop a <code>.wgt</code> file onto Opera</li>
<li>From the system console — for example in Windows you could enter <code>opera.exe -widget [widget path]\[widget name].wgt</code></li>
</ul>

<p>The following sections describe the installation process for the various desktop platforms.</p>

<p class="note">Once you have installed Opera 10.20 alpha, try installing some sample widgets so you can have a play around. We&#39;d recommend our <a href="http://widgets.opera.com/widget/7206/">Twitter</a> and <a href="http://widgets.opera.com/widget/14511/">Google Translator</a> widgets.</p>

<h3 id="install_windows">Windows</h3>

<p>On Windows, a graphical widget installer guides you through the installation process. The default settings should be fine in most cases. You can click the <cite>Install</cite> button to perform the installation, as seen in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/windows_install.png" alt="The Widget installation dialog box for Windows" /></p>
<p class="comment">Figure 1: The <cite>Widget installation</cite> dialog box for Windows.</p>

<p>You can also customize your installation by clicking the <cite>Customize...</cite> button (seen in Figure 1). This brings up the <cite>Widget installation settings</cite> dialog seen in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/windows_install_customise.png" alt="The Widget installation settings dialog box for Windows" /></p>
<p class="comment">Figure 2: The <cite>Widget installation settings</cite> dialog box for Windows.</p>

<p>In this dialog you can customize the following items:</p>

<ul>
<li><cite>Widget name</cite>: What the application is called</li>
<li><cite>Installation folder</cite>: Where it is installed on your system</li>
<li><cite>Add widget icon to</cite>: Check/uncheck the boxes to choose whether you want shortcuts for the widget added to your <cite>Start Menu</cite>, <cite>Desktop</cite> and <cite>Quick Launch</cite> bar</li>
</ul>

<p>When you press <cite>Install</cite>, the widget installer will extract the content and create shortcuts as specified.</p>

<p>A widget can be uninstalled in the same way as any other application:</p>
<ul>
<li><cite>Control Panel &gt; Add/Remove Programs</cite> on Windows XP and previous</li>
<li><cite>Control Panel &gt; Programs &gt; Uninstall Programs</cite> on Windows Vista and later</li>
</ul>

<p class="note">Uninstalling a widget does not remove its settings, so if you decide to reinstall the same widget, your settings will be reused.</p>

<h3 id="install_linux">Linux</h3>

<p>Figure 3 shows the installation dialog box for Opera Widgets in Linux. The default installation on Linux is for the current user only, but you can also choose to create a package for other users to install the widget as well. You can also choose to create a widget launcher script.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/linux_install.png" alt="The Widget installation dialog box for Linux" /></p>
<p class="comment">Figure 3: The <cite>Widget installation</cite> dialog box for Linux.</p>

<p class="note">When you choose the <cite>Make xxx package from this Widget</cite> option, the system will actually generate a platform-specific package for the widget (eg <cite>.deb</cite> for Debian/Ubuntu), which is installed in the same way as any other package. After installation of the package, all management of the widget is done by your system’s package manager. Three package types are supported: <cite>.deb</cite>, <cite>.rpm</cite> and <cite>.tar</cite>.</p>

<p>After installation is complete, your widgets are accessible through the <cite>Applications</cite> menu, for example they are installed in <cite>Applications &gt; Other</cite> in Ubuntu. Advanced users can run widgets from the terminal using the launcher scripts created during the install process. Also available in the <cite>Applications</cite> menu (under <cite>Accessories</cite>) is the <cite>Widget Manager</cite>, as seen in Figure 4. This is worth knowing about when you want to uninstall Opera Widgets — simply click the Opera Widget you want to uninstall, and click <cite>Uninstall</cite>.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/linux_widget_manager.png" alt="The Widget Manager dialog box for Linux" /></p>
<p class="comment">Figure 4: The <cite>Widget Manager</cite> dialog box for Linux.</p>

<h3 id="install_mac">Mac</h3>

<p>The graphical widget installer on Mac has the same look and feel as the one used on Windows, while respecting the platform differences regarding installation settings — see Figure 5. A default installation will create the widget bundle in the <cite>Applications</cite> folder.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/mac_install.png" alt="The Widget installation dialog box for Mac" /></p>
<p class="comment">Figure 5: The <cite>Widget installation</cite> dialog box for Mac.</p>

<p>You can customize your installation settings by clicking the <cite>Customize...</cite> button, which brings up the <cite>Widget installation settings</cite> dialog — see Figure 6.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/mac_install_customise.png" alt="The Widget installation settings dialog box for Mac" /></p>
<p class="comment">Figure 6: The <cite>Widget installation settings</cite> dialog box for Mac.</p>

<p>This dialog makes it possible to customize the widget name and the installation location.</p>

<p class="code">Widgets can be uninstalled in the same way as any other applications on Mac, by dragging and dropping the widget bundle into the Trash.</p>

<h2 id="runningwidgets">Running Opera Widgets</h2>

<p>There are several ways to start a widget once it has been installed on your operating system:</p>

<h3 id="running_windows">Windows</h3>
<ul>
<li>Click/Double-click the widget shortcut, or select it from your Quick Bar or Start Menu</li>
<li>Run [widget name].exe from the widget installation folder</li>
<li>In the system console, type <code>opera.exe -widget [widget installation folder]\config.xml</code></li>
</ul>

<h3 id="running_linux">Linux</h3>
<ul>
<li>Select the widget shortcut in the Applications menu.</li>
<li>In the system terminal, type <code>opera -widget [widget installation directory path]\config.xml</code> (if opera installed globally).</li>
<li>Go to <code>~/bin</code> and run the widget launcher script in the terminal</li>
</ul>

<h3 id="running_mac">Mac</h3>
<ul>
<li>Double-click the widget bundle in the installation folder (ie <code>/Applications/</code>)</li>
<li>Type the name of the widget in Spotlight and choose the correct hint</li>
</ul>

<p class="note">For widgets to run, Opera’s desktop browser must be installed on the OS, but you can download widgets using other browsers and have them install just fine.</p>


<h2 id="export">Export wizard</h2>

<p>To keep on using the widgets you already have installed via previous versions of Opera in Opera 10.20, you need to first export them into the new <cite>Widget Runtime</cite>. Fortunately, Opera 10.20 provides an easy way to do this — when you upgrade Opera you will be greeted by the <cite>Widget Export Wizard</cite>, as seen in Figure 7.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/widget_export.png" alt="The Widget Export Wizard dialog box" /></p>
<p class="comment">Figure 7: The <cite>Widget Export Wizard</cite> dialog box.</p>

<p class="note">You can import your widgets later via the menu option <cite>File &gt; Import and Export &gt; Export Widgets...</cite></p>

<h2 id="passwords">Managing passwords</h2>

<p>When you log in to any widget that requires user credentials, such as the Twitter widget, your user name and password are saved so you can automatically log in next time you run the widget. If you don’t want your credentials to be stored, you can always delete all saved passwords via the context menu item <cite>Preferences...</cite> (see Figure 8). You can also select this option from the Widget’s <cite>Preferences...</cite> menu bar option.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/context_menu.png" alt="The widget context menu" /></p>
<p class="comment">Figure 8: The widget context menu.</p>

<p>This opens up the <cite>Widget preferences</cite> dialog, seen in Figure 9.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/widgetpreferences.png" alt="The widget preferences dialog box" /></p>
<p class="comment">Figure 9: The widget preferences dialog box.</p>


<p>here you can:</p>

<ul>
  <li>Choose to enable or disable notifications</li>
  <li>Set proxy servers to run your widget through</li>
  <li>Reset all settings for the current widget to their defaults</li>
  <li>Delete all stored passwords</li>
</ul>

<h2 id="debugging">Debugging</h2>

<p>Opera supports two ways of debugging your widgets using <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> — local debugging and remote debugging.</p>

<h3 id="localdebugging">Local debugging</h3>

<p>To do this while developing your widget, you simply drag and drop the <code>config.xml</code> file of the widget you are working on onto Opera’s desktop browser. Opera Dragonfly will then start up automatically, ready to debug your widget.</p>

<p class="info">In this scenario the widget is not installed via the graphical widget installer and will not be accessible from within the system.</p>

<h3 id="remotedebugging">Remote debugging</h3>

<p>To debug your widget remotely you have to take the following steps:</p>

<ol>
  <li>Start Opera and go to Tools &gt; Advanced &gt; Developer Tools to start Opera Dragonfly</li>
  <li>Go to <cite>Settings tab &gt; Remote Debug</cite> section</li>
  <li>Check the <cite>Remote Debug</cite> check box and adjust the port number if needed</li>
  <li>Click the <cite>Apply</cite> button on the righthand side of the section</li>
  <li>Start the widget you want to debug and open the remote debugging configuration dialog from the context menu (<cite>Developer Tools</cite>)</li>
  <li>Enable remote debugging (see Figure 10) and specify the IP address of the device you are debugging and the port on which Opera Dragonfly is listening (for widgets running on your machine, the default IP address for the localhost will be 127.0.0.1); press the <cite>OK</cite> button</li>
  <li>When the connection is complete you will be informed via a notification in the bottom right corner of the screen</li>
</ol>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/widget_debug.png" alt="The remote debugging dialog box" /></p>
<p class="comment">Figure 10: The remote debugging dialog box.</p>

<p>To find out more about remote debugging with Opera Dragonfly, watch our video and read our article — <a href="http://my.opera.com/ODIN/blog/opera-mobile-10-and-its-remote-debugging-party-trick">Opera Mobile 10 and its remote debugging party trick</a>.</p>

<h2 id="fileio">Widget File I/O</h2>

<p>The <a href="http://dev.opera.com/libraries/fileio/">File I/O API</a> provides developers with the  functionality to access data on your file system from widgets, allowing for hybrid Web/desktop capabilities. This feature is even more powerful now that widgets can run as standalone applications. </p>

<p>When a widget is installed, you will be notified if the widget has access to your file system — see Figure 11.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/widget_file_access_warning.png" alt="The widget File I/O dialog box" /></p>
<p class="comment">Figure 11: The widget File I/O dialog box.</p>

<h2 id="notifications">Notification system</h2>

<p>Opera’s widget runtime supports a basic notification mechanism. Notifications appear in the bottom right corner of the screen when the widget calls the <code>ShowNotification()</code> function - see Figure 12 for an example. The notification window consists of:</p>

<ul>
  <li>Widget name</li>
  <li>Widget icon </li>
  <li>Text of the notification</li>
</ul>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/widget-notification.png" alt="A sample widget notification" /></p>
<p class="comment">Figure 12: A sample widget notification.</p>

<h2 id="contextmenu">Context menu</h2>

<p>The widget context menu (take another look at Figure 8) has been expanded with new items to provide even better access to the most important options related to the widget:</p>

<ul>
  <li><cite>View</cite> options: <cite>Always On Top</cite>, <cite>Normal</cite>, <cite>Always Below</cite>, <cite>Zoom</cite></li>
  <li><cite>Preferences</cite>: Opens the <cite>Widget preferences</cite> dialog box (see Figure 9)</li>
  <li><cite>Developer tools</cite>: Opens the <cite>Widget Remote Debug</cite> dialog box (see Figure 10)</li>
  <li><cite>Download more widgets</cite>: this lets you download additional widgets from <a href="http://widgets.opera.com/" title="Opera Widgets">http://widgets.opera.com</a></li>
</ul>


<h2 id="applicationmode">Widgets in “Application” mode</h2>

<p>Opera’s widget runtime introduces support for an additional mode called “Application” mode. In this mode widgets run in an OS-native window, as seen in Figure 13.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/widget_chrome.png" alt="An example of Application Mode on a widget" /></p>
<p class="comment">Figure 13: An example of Application Mode on a widget.</p>

<p>This mode can be triggered by setting the <code>defaultmode</code> attribute in the <code>config.xml</code>’s <code>widget</code> element to <code>application</code>, as seen in the following example:</p>

<pre><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;
&lt;widget <strong>defaultmode=&quot;application&quot;</strong>&gt;
  &lt;widgetname&gt;Sample widget&lt;/widgetname&gt;
  &lt;description&gt;Shows the default chrome for application mode.&lt;/description&gt;
&lt;/widget&gt;</code></pre>

<p>This provides the widget with standard OS windows controls — such as minimize, maximize and close buttons — automatically. See the next section for more on these.</p>

<h2>Widget control buttons</h2>

<p>Widget control buttons are another new feature made available in this release. They ensure that a consistent set of basic controls — <cite>Move</cite>, context menu, <cite>Minimize</cite> and <cite>Close</cite> — are available in all widgets in “Widget” mode. See the top-right of Figure 14 for an idea of what they look like.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/321-opera-widgets-as-standalone-applications/widget_control_buttons.png" alt="Widget control buttons" /></p>
<p class="comment">Figure 14: Widget control buttons — <cite>Move</cite>, context menu, <cite>Minimize</cite> and <cite>Close</cite> respectively.</p>

<p>This provides a consistent user experience that fits in with the style of the platform the widget is running on — previously the onus was on the developer to provide such controls and follow the <a href="http://dev.opera.com/articles/view/opera-widgets-style-guide/">Opera Widgets Style Guide</a>. These buttons only appear when the user positions the mouse over the widget.</p>



<h2 id="conclusion">Conclusion</h2>

<p>This is just a preview of what is to come. There are several enhancements planned for the features listed above as well as some exciting new ones. We&#39;d like to invite you to <a href="http://www.opera.com/browser/next">download and install the alpha</a> and play with our new <a href="http://labs.opera.com/downloads/twitter.wgt">Twitter</a> and <a href="http://labs.opera.com/downloads/facebook.wgt">Facebook</a> widgets. To give your own suggestions and join the discussion of our latest Opera Widgets implementation, join the <a href="http://my.opera.com/community/forums/forum.dml?id=1296">widgets forum on My Opera</a>.</p>


