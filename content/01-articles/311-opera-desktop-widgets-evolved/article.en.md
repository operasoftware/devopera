Title: Opera Desktop Widgets evolved
----
Date: 2009-10-15 12:30:53
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

<p class="note">This article is now obsolete - an updated version can be found at <a href="http://dev.opera.com/articles/view/widgets-as-standalone-applications/">Opera Widgets as standalone applications</a></p>

<h2 id="intro">Introduction</h2>

<p>Opera Widgets are made using Web standards, the same technology used to build Web pages. This ensures that they work on all platforms and operating systems, as well as giving a much shorter and simpler development cycle to desktop applications.</p>

<p>Ever since widgets became part of Opera’s desktop browser in 2006 they have been dependent on the browser in many respects. Widgets are managed from within the browser and they run as long as the browser runs.</p>

<p><a href="http://labs.opera.com/news/2009/10/15/">Opera Widgets for desktop</a> breaks this dependency between widgets and the browser interface. In short, as long as you have Opera installed, you can run any widget you like, without ever opening the browser. </p>

<p>This release gives you a preview of the changes that Opera has planned for widgets. Widgets are getting a complete make-over from being small, single-purpose gadgets to first-class citizens with the power to replace native applications.</p>

<p>In this article, we have a closer look at the main changes and new features included with Opera Widgets for desktop.</p>

<h2 id="download">Download process</h2>

<p>A new, better approach has been introduced for downloading widgets via Opera. This mechanism takes advantage of Opera’s download manager to give you more flexibility while your favorite widgets are being downloaded. You can use this time to look for some other widgets or simply surf the Web, and as soon as the widget download completes, Opera will automatically trigger the widget installer.</p>

<p>From now on, you can also download widgets via different browsers and Opera’s widget runtime will take care of the installation. The widget runtime is registered in the system as one of the .wgt filetype application handlers, so it will be listed among applications capable of handling widget files.</p>

<h2 id="installation">Installation/Uninstallation process</h2>

<p>The installation and uninstallation processes have changed a lot with Opera’s new widget runtime. Widget management has been moved from within Opera into the operating system. Widgets now integrate better with the platform via shortcuts and launch scripts (depending on the host platform), and are listed together with other applications belonging to the OS. The widget runtime is equipped with a graphical widget installer that facilitates the widget deployment process. </p>

<p>Widget installation can be triggered in several ways:</p>

<ul>
<li>Download the widget via Opera — the widget installer will run automatically after download</li>
<li>Double click on a .wgt file in your file system</li>
<li>Drag and drop a .wgt file onto Opera</li>
<li>Type in the system console, e.g. for Windows: <code>opera.exe -widget [widget path]\[widget name].wgt</code></li>
</ul>

<p>The following section describes the installation process for the various desktop platforms:</p>

<h3 id="install_windows">Windows:</h3>

<p>On Windows, a graphical widget installer guides you through the installation process. The default settings should be fine in most cases. Click the <em>Install</em> button to perform the installation.</p>
		<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/install_process.png" alt="The Widget installation dialog box for Windows" width="452" height="393" border="0" /></p>
<p class="comment">Figure 1: The <em>Widget installation</em> dialog box for Windows</p>
		<p>The widget installer will extract the content into the widget installation folder and create shortcuts under Programs in the Start Menu, on the Desktop, and in the Quick Launch Bar.</p>

<p>You can customize your installation by clicking the <em>Customize...</em> button in the installer.</p>
		<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/install_process2.png" alt="The Widget installation settings dialog box for Windows" width="381" height="375" border="0" /></p>
<p class="comment">Figure 2: The <em>Widget installation settings</em> dialog box for Windows</p>
		<p>The <em>Widget Installation Settings</em> dialog makes it possible to customize the following items:</p>

<ul>
<li>Widget name</li>
<li>Installation folder</li>
<li>Shortcut placement</li>
</ul>

<p>A widget can be uninstalled in the same way as any other application:</p>
<ul>
<li><em>Control Panel &gt; Add/Remove Programs</em> on Windows XP and previous</li>
<li><em>Control Panel &gt; Programs &gt; Uninstall Programs</em> on Windows Vista and later</li>
</ul>

<p>During the uninstallation process you will be prompted to confirm whether you really want to remove the widget.</p>

<p class="note">Uninstalling a widget does not remove its settings, so if you decide to reinstall the same widget, your settings will be reused.</p>

<h3 id="install_linux">Linux:</h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/install_process_linux.png" alt="The Widget installation dialog box for Linux" width="431" height="517" border="0" /></p>
<p class="comment">Figure 3: The <em>Widget installation</em> dialog box for Linux</p>
		<p>The default installation on Linux is for the current user only. A widget is accessible through its shortcut in the Applications menu. Advanced users can run widgets from the terminal using launcher scripts that are optionally placed in the <code>~/bin</code> directory. Opera’s widget manager comes in handy when uninstalling widgets.</p>
		<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/widget_manager_linux.png" alt="The Widget Manager dialog box for Linux" width="452" height="515" border="0" /></p>
<p class="comment">Figure 4: The <em>Widget Manager</em> dialog box for Linux</p>

		<p>You can run Opera’s <em>Widget Manager</em> using its shortcut in the <em>Applications</em> menu. Select the widget you want to uninstall and click the <em>Uninstall</em> button. The widget’s private data will not be lost.</p>
		<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/package_generation.png" alt="The Widget installation dialog box for Linux" width="431" height="358" border="0" /></p>
<p class="comment">Figure 5: The <em>Widget installation</em> dialog box for Linux</p>
		<p>One of the most useful features in the installation process is the ability to generate a platform-specific package for the widget. For example, if you are on Debian, you can generate a .deb package for the widget and install it in the same way as any other package. After installation of the package, all management of the widget is done by your system’s package manager. Three package types are supported: .deb, .rpm and .tar.</p>

<h3 id="install_mac">Mac:</h3>

<p>The graphical widget installer on Mac has the same look and feel as the one used on Windows, while respecting the platform differences regarding installation settings. A default installation will create the widget bundle in the Applications folder. You can customize your installation settings by clicking the <em>Customize...</em> button on the installer.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/install_process_mac.png" alt="The Widget installation dialog box for Mac" width="628" height="437" border="0" />
<p class="comment">Figure 6: The <em>Widget installation</em> dialog box for Mac</p>

<p>The <em>Widget Installation Settings</em> dialog makes it possible to customize:</p>

<ul>
<li>Widget name</li>
<li>Installation folder</li>
</ul>

<p>A widget can be uninstalled in the same way as any other application, by dragging and dropping the widget bundle to the Trash.</p>

<h2 id="runningwidgets">Running Widgets</h2>

<p>There are several ways to start a widget once it has been installed in your operating system:</p>

<h3 id="running_windows">Windows:</h3>
<ul>
<li>Click/Double-click the widget shortcut</li>
<li>Run [widget name].exe file from the widget installation folder</li>
<li>Type in the system console: <code>opera.exe -widget [widget installation folder]\config.xml</code></li>
</ul>

<h3 id="running_linux">Linux:</h3>
<ul>
<li>Select the widget shortcut in the Applications menu.</li>
<li>Type in the system terminal: <code>opera -widget [widget installation directory path]\config.xml</code> (if opera installed globally).</li>
<li>Go to ~/bin and run the widget launcher script in the terminal.</li>
</ul>

<h3 id="running_mac">Mac:</h3>
<ul>
<li>Double-click the widget bundle in the installation folder (eg <code>/Applications/</code>)</li>
<li>Type the name of the widget in Spotlight and choose the correct hint</li>
</ul>
<p class="note">For widgets to run, Opera’s desktop browser must be installed in the OS.</p>


<h2 id="import">Import wizard</h2>

<p>To continue using your current widgets in Opera’s new widget runtime, you need to first import them. Opera provides an easy and quick way to import your widgets into the new runtime.  When you upgrade Opera, you will be greeted by the widget import wizard.</p>
		<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/widget_import.png" alt="The Widget Import Wizard dialog box" width="441" height="553" border="0" /></p>
<p class="comment">Figure 7: The Widget Import Wizard dialog box</p>
		<p class="info">You can import your widgets later via the menu File &gt; Import &gt; Import Widgets...</p>

<h2 id="passwords">Password Manager</h2>

<p>Opera’s widget runtime provides a <em>Password Manager</em> for any widget that requires user credentials. When you submit your login/password, you will be prompted by the <em>Password Manager</em> dialog to decide whether you want to save your credentials.</p>
		<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/widget_password_manager.png" alt="The Password Manager dialog box" width="401" height="238" border="0" /></p>
<p class="comment">Figure 8: The <em>Password Manager</em> dialog box</p>

		<p>The next time you access the login/password form in the widget, the data can be entered automatically via the appropriate keyboard shortcut (e.g. Ctrl+Enter).</p>

<p>You can always delete all saved passwords via the context menu item <em>Preferences &gt; Password Manager &gt; Delete all passwords for this widget</em>.</p>
		<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/widget_password_manager_del.png" alt="The context menu to delete passwords" width="769" height="273" border="0" /></p>
		<p class="comment">Figure 9: The context menu to delete passwords</p>

<h2 id="debugging">Debugging</h2>

<p>Opera supports two ways of debugging your widgets using Opera Dragonfly:</p>

<h3 id="localdebugging">Local debugging</h3>
<p>You simply drag and drop the config.xml file of the widget you are working on onto Opera’s desktop browser. Opera Dragonfly starts up automatically, ready to debug your widget.</p>
<p class="info">In this scenario the widget is not installed via the graphical widget installer and will not be accessible from within the system.</p>

<h3 id="remotedebugging">Remote debugging</h3>
<p>To debug your widget remotely you have to take the following steps:</p>
<ol>
<li>Start Opera and go to Tools &gt; Advanced &gt; Developer Tools (Opera Dragonfly will start up)</li>
<li>Go to the Settings tab and the Remote Debug section</li>
<li>Check the <em>Remote Debug</em> check box and adjust the port number to your needs.</li>
<li>Click the Apply button on the right side of the section.</li>
<li>Now start the widget you want to debug and open the remote debugging configuration dialog from the context menu Preferences &gt; Remote Debugger.</li>
<li>Enable remote debugging and specify the IP address and the port on which Opera Dragonfly listens and press the OK button.</li>
<li>When the connection is complete you will be informed via a notification in the bottom right corner of the screen.</li>
</ol>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/widget_debug.png" alt="The remote debugging dialog box" width="421" height="391" border="0" /></p>
<p class="comment">Figure 10: The remote debugging dialog box</p>

<h2 id="fileio">Widget File I/O</h2>

<p>The File I/O API provides functionality needed to access data on your file system from widgets, providing powerful hybrid Web/desktop capabilities. This feature becomes even more powerful now that widgets can run as standalone applications. </p>

<p>When a widget is installed, you will be notified whether the widget has access to your file system or not.</p>
		<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/widget_file_access_warning.png" alt="The widget File I/O dialog box" width="452" height="393" border="0" /></p>
<p class="comment">Figure 11: The widget File I/O dialog box</p>

		<p>More information about File I/O for Widgets can be found in <a href="http://dev.opera.com/libraries/fileio/" title="File I/O API - Opera Developer Community">the Libraries section</a>.</p>


<h2 id="notifications">Notification system</h2>

<p>Opera’s widget runtime supports a basic notification mechanism. Notifications appear in the bottom right corner of the screen when the widget calls the <code>ShowNotification()</code> function. The notification window consists of:</p>
<ul>
<li>Widget name</li>
<li>Widget icon </li>
<li>Text of the notification</li>
</ul>

<h2 id="contextmenu">Context menu</h2>

<p>The widget context menu has been extended with new items to provide even better access to the most important options related to the widget:</p>

<ul>
<li><em>View</em> options — <em>Always On Top</em>, <em>Normal</em>, <em>Always Below</em>, <em>Zoom</em></li>
<li><em>Preferences</em> options – <em>Remove All Remembered Passwords</em> and <em>Remote Debugging</em> configuration dialog</li>
<li><em>Download more widgets</em> – this lets you download additional widgets from <a href="http://widgets.opera.com/" title="Opera Widgets">http://widgets.opera.com</a></li>
</ul>


<h2 id="applicationmode">Widgets in “Application” mode</h2>

<p>Opera’s widget runtime introduces support for an additional mode called “Application” mode. Widgets in this mode are equipped with OS specific window decorations as seen in the picture.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/311-opera-desktop-widgets-evolved/widget_chrome.png" alt="An example of Application Mode on a widget" width="240" height="302" border="0" /></p>
<p class="comment">Figure 12: An example of Application Mode on a widget</p>

<p>This mode can be triggered by setting the <code>defaultmode</code> attribute in the config.xml&#39;s <code>widget</code> tag to <code>application</code> mode.</p>

<p>Example:</p>

<pre>
<span>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;
&lt;widget defaultmode=&quot;</span>application<span>&quot;&gt;
  &lt;widgetname&gt;Sample widget&lt;/widgetname&gt;
  &lt;description&gt;Shows the default chrome for application mode.&lt;/description&gt;
&lt;/widget&gt;</span>
</pre>

<p>This provides the widget with minimize, maximize and close buttons automatically.</p>

<h2 id="conclusion">Conclusion</h2>

<p>This is just a preview of what is to come. There are several enhancements planned for the features listed above as well as some exciting new ones. So, go get the <a href="http://labs.opera.com/news/2009/10/15/">Labs build</a> and play with the <a href="http://labs.opera.com/downloads/twitter.wgt">Twitter</a> and <a href="http://labs.opera.com/downloads/facebook.wgt">Facebook widgets</a> we&#39;ve provided. To give your own suggestions and join the discussion of our latest Opera Widgets implementation, join the <a href="http://my.opera.com/community/forums/forum.dml?id=1296">widgets forum on My Opera</a>.</p>
