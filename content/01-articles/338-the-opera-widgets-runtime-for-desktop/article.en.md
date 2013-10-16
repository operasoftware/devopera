Title: The Opera Widgets runtime for Desktop
----
Date: 2010-02-09 18:09:53
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>


<p>Table of contents:</p>

<ol>
<li><a href="#intro">Introduction</a></li>
<li><a href="#download">Download process</a></li>
<li><a href="#installation">Installation/uninstallation process</a>
<ol>
<li><a href="#install_windows">Windows</a></li>
<li><a href="#install_linux">Linux</a></li>
<li><a href="#install_mac">Mac</a></li>
</ol>
</li>
<li><a href="#runningwidgets">Running Opera Widgets</a>
<ol>
<li><a href="#running_windows">Windows</a></li>
<li><a href="#running_linux">Linux</a></li>
<li><a href="#running_mac">Mac</a></li>
</ol>
</li>
<li><a href="#export">Export wizard</a></li>
<li><a href="#passwords">Managing passwords</a></li>
<li><a href="#debugging">Debugging</a></li>
<li><a href="#fileio">Widget File I/O</a></li>
<li><a href="#notifications">Notification system</a></li>
<li><a href="#contextmenu">Context menu</a></li>
<li><a href="#applicationmode">Widgets in application mode</a></li>
<li><a href="#buttons">Widget control buttons</a></li>
</ol>


<h2 id="intro">Introduction</h2>

<p>Opera Widgets are made using Web standards, the same technology used to build Web pages. This ensures that they work on all platforms and operating systems, as well as providing developers with a much shorter and simpler development cycle for creating desktop applications.</p>

<p>Ever since Opera Widgets became part of Opera’s desktop browser in 2006 they have been dependent on the browser in many respects. Opera Widgets are managed from within the browser and they run as long as the browser runs.</p>

<p><strong>Opera Widgets for desktop</strong> — found in Opera 10.20 alpha and higher — breaks this dependency between widgets and the browser. In short, as long as you have Opera installed somewhere on your machine, you can run any widget you like, without ever opening the browser.</p>

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

<p class="note">Once you have installed the latest version of Opera, try installing some sample widgets so you can have a play around. We’d recommend our <a href="http://widgets.opera.com/widget/14511/">Google Translator</a> widget.</p>

<h3 id="install_windows">Windows</h3>

<p>On Windows, a graphical widget installer guides you through the installation process. The default settings should be fine in most cases. You can click the <code>Install</code> button to perform the installation, as seen in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/simAquarium1.png" title="The Widget installation dialog box for Windows" alt="The Widget installation dialog box for Windows" /></p>

<p class="comment">Figure 1: The <code>Widget installation</code> dialog box for Windows.</p>

<p>You can also customize your installation by clicking the <code>Customize…</code> button (seen in Figure 1). This brings up the <code>Widget installation settings</code> dialog seen in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/simaquarium2.png" title="The Widget installation settings dialog box for Windows" alt="The Widget installation settings dialog box for Windows" /></p>

<p class="comment">Figure 2: The <code>Widget installation settings</code> dialog box for Windows.</p>

<p>In this dialog you can customize the following items:</p>

<ul>
<li><code>Widget name</code>: What the application is called</li>
<li><code>Installation folder</code>: Where it is installed on your system</li>
<li><code>Add widget icon to</code>: Check/uncheck the boxes to choose whether you want shortcuts for the widget added to your <code>Start Menu</code>, <code>Desktop</code> and <code>Quick Launch</code> bar</li>
</ul>

<p>When you press <code>Install</code>, the widget installer will extract the content and create shortcuts as specified.</p>

<p>A widget can be uninstalled in the same way as any other application:</p>

<ul>
<li><code>Control Panel &gt; Add/Remove Programs</code> on Windows XP and previous</li>
<li><code>Control Panel &gt; Programs &gt; Uninstall Programs</code> on Windows Vista and later</li>
</ul>

<p class="note">Uninstalling a widget does not remove its settings, so if you decide to reinstall the same widget, your settings will be reused.</p>

<h3 id="install_linux">Linux</h3>

<p>Figure 3 shows the installation dialog box for Opera Widgets in Linux. The default installation on Linux is for the current user only, but you can also choose to create a package for other users to install the widget as well. You can also choose to create a widget launcher script.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/linux_in.png" title="The Widget installation dialog box for Linux" alt="The Widget installation dialog box for Linux" /></p>

<p class="comment">Figure 3: The <code>Widget installation</code> dialog box for Linux.</p>

<p class="note">When you choose the <code>Make xxx package from this Widget</code> option, the system will actually generate a platform-specific package for the widget (eg <code>.deb</code> for Debian/Ubuntu), which is installed in the same way as any other package. After installation of the package, all management of the widget is done by your system’s package manager. Three package types are supported: <code>.deb</code>, <code>.rpm</code> and <code>.tar</code>.</p>

<p>After installation is complete, your widgets are accessible through the <code>Applications</code> menu, for example they are installed in <code>Applications &gt; Other</code> in Ubuntu. Advanced users can run widgets from the terminal using the launcher scripts created during the install process. Also available in the <code>Applications</code> menu (under <code>Accessories</code>) is the <code>Widget Manager</code>, as seen in Figure 4. This is worth knowing about when you want to uninstall Opera Widgets — simply click the Opera Widget you want to uninstall, and click <code>Uninstall</code>.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/linux_wi.png" title="The Widget Manager dialog box for Linux" alt="The Widget Manager dialog box for Linux" /></p>

<p class="comment">Figure 4: The <code>Widget Manager</code> dialog box for Linux.</p>

<h3 id="install_mac">Mac</h3>

<p>The graphical widget installer on Mac has the same look and feel as the one used on Windows, while respecting the platform differences regarding installation settings — see Figure 5. A default installation will create the widget bundle in the <code>Applications</code> folder.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/mac_inst.png" title="The Widget installation dialog box for Mac" alt="The Widget installation dialog box for Mac" /></p>

<p class="comment">Figure 5: The Widget installation dialog box for Mac.</p>

<p>You can customize your installation settings by clicking the <code>Customize…</code> button, which brings up the <code>Widget installation settings</code> dialog — see Figure 6.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/mac_insu.png" title="The Widget installation settings dialog box for Mac" alt="The Widget installation settings dialog box for Mac" /></p>

<p class="comment">Figure 6: The <code>Widget installation settings</code> dialog box for Mac.</p>

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

<p>To keep on using the widgets you already have installed in versions of Opera previous to the change, you need to first export them into the new <code>Widget Runtime</code>. Fortunately, Opera provides an easy way to do this — when you upgrade Opera you will be greeted by the <code>Widget Export Wizard</code>, as seen in Figure 7.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/widget_e.png" title="The Widget Export Wizard dialog box" alt="The Widget Export Wizard dialog box" /></p>

<p class="comment">Figure 7: The <code>Widget Export Wizard</code> dialog box.</p>

<p class="note">You can import your widgets later via the menu option <code>File &gt; Import and Export &gt; Export Widgets…</code></p>

<h2 id="passwords">Managing passwords</h2>

<p>When you log in to any widget that requires user credentials, your user name and password are saved so you can automatically log in next time you run the widget. If you don’t want your credentials to be stored, you can always delete all saved passwords via the context menu item <code>Preferences…</code> (see Figure 8). You can also select this option from the Widget’s <code>Preferences…</code> menu bar option.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/context_.png" title="The widget context menu" alt="The widget context menu" /></p>

<p class="comment">Figure 8: The widget context menu.</p>

<p>This opens up the <code>Widget preferences</code> dialog, seen in Figure 9.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/widgetpr.png" title="The widget preferences dialog box" alt="The widget preferences dialog box" /></p>

<p class="comment">Figure 9: The widget preferences dialog box.</p>

<p>Here you can:</p>

<ul>
<li>Choose to enable or disable notifications</li>
<li>Set proxy servers to run your widget through</li>
<li>Reset all settings for the current widget to their defaults</li>
<li>Delete all stored passwords</li>
</ul>

<h2 id="debugging">Debugging</h2>

<p>To debug your widget remotely you have to take the following steps:</p>

<ol>
<li>Start Opera and go to Tools &gt; Advanced &gt; Developer Tools to start Opera Dragonfly</li>
<li>Go to <code>Settings tab &gt; Remote Debug</code> section</li>
<li>Check the <code>Remote Debug</code> check box and adjust the port number if needed</li>
<li>Click the <code>Apply</code> button on the right hand side of the section</li>
<li>Start the widget you want to debug and open the remote debugging configuration dialog from the context menu (<code>Developer Tools</code>)</li>
<li>Enable remote debugging (see Figure 10) and specify the IP address of the device you are debugging and the port on which Opera Dragonfly is listening (for widgets running on your machine, the default IP address for the localhost will be 127.0.0.1); press the <code>OK</code> button</li>
<li>When the connection is complete you will be informed via a notification in the bottom right corner of the screen</li>
</ol>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/remotedebug.png" title="The remote debugging dialog box" alt="The remote debugging dialog box" /></p>

<p class="comment">Figure 10: The remote debugging dialog box.</p>

<h2 id="fileio">Widget File I/O</h2>

<p>The <a href="http://dev.opera.com/libraries/fileio/">File I/O API</a> provides developers with the  functionality to access data on your file system from widgets, allowing for hybrid Web/desktop capabilities. This feature is even more powerful now that widgets can run as standalone applications.</p>

<p>When a widget is installed, you will be notified if the widget has access to your file system — see Figure 11.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/fileio.png" title="The widget File I/O dialog box" alt="The widget File I/O dialog box" /></p>

<p class="comment">Figure 11: The widget File I/O dialog box.</p>

<h2 id="notifications">Notification system</h2>

<p>Opera’s widget runtime supports a basic notification mechanism. Notifications appear in the bottom right corner of the screen when the widget calls the <code>ShowNotification()</code> function – see Figure 12 for an example. The notification window consists of:</p>

<ul>
<li>Widget name</li>
<li>Widget icon </li>
<li>Text of the notification</li>
</ul>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/widget-n.png" title="A sample widget notification" alt="A sample widget notification" /></p>

<p class="comment">Figure 12: A sample widget notification.</p>

<h2 id="contextmenu">Context menu</h2>

<p>The widget context menu (take another look at Figure 8) has been expanded with new items to provide even better access to the most important options related to the widget:</p>

<ul>
<li><code>View</code> options: <code>Always On Top</code>, <code>Normal</code>, <code>Always Below</code>, <code>Zoom</code></li>
<li><code>Preferences</code>: Opens the <code>Widget preferences</code> dialog box (see Figure 9)</li>
<li><code>Developer tools</code>: Opens the <code>Widget Remote Debug</code> dialog box (see Figure 10)</li>
<li><code>Download more widgets</code>: this lets you download additional widgets from <a href="http://widgets.opera.com/"><a href="http://widgets.opera.com">http://widgets.opera.com</a></a></li>
</ul>

<h2 id="applicationmode">Widgets in application mode</h2>

<p>Opera’s widget runtime introduces support for an additional mode called application mode. In this mode widgets run in an OS-native window, as seen in Figure 13.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/widget_c.png" title="An example of application Mode on a widget" alt="An example of application Mode on a widget" /></p>

<p class="comment">Figure 13: An example of application Mode on a widget.</p>

<p>This mode can be triggered by setting the <code>defaultmode</code> attribute in the config.xml’s <code>widget</code> element to <code>application</code>, as seen in the following example:</p>


<pre><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;
&lt;widget <strong>defaultmode=&quot;application&quot;</strong>&gt;
  &lt;widgetname&gt;Sample widget&lt;/widgetname&gt;
  &lt;description&gt;Shows the default chrome for application mode.&lt;/description&gt;
&lt;/widget&gt;</code></pre>


<p>This provides the widget with standard OS windows controls — such as minimize, maximize and close buttons — automatically.</p>

<h2 id="buttons">Widget control buttons</h2>

<p>Widget control buttons are another new feature made available in this release. They ensure that a consistent set of basic controls — <code>Move</code>, context menu, <code>Minimize</code> and <code>Close</code> — are available in all widgets in “Widget” mode. See the top-right of Figure 14 for an idea of what they look like.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/338-the-opera-widgets-runtime-for-desktop/widget_g.png" title="Widget control buttons" alt="Widget control buttons" /></p>

<p class="comment">Figure 14: Widget control buttons — <code>Move</code>, context menu, <code>Minimize</code> and <code>Close</code> respectively.</p>

<p>This provides a consistent user experience that fits in with the style of the platform the widget is running on — previously the onus was on the developer to provide such controls and follow the Opera Widgets Style Guide (deprecated). These buttons only appear when the user positions the mouse over the widget.</p>

<p>See the <a href="http://dev.opera.com/articles/view/widget-control-buttons/">article on widget control buttons</a>.</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
                                                    a href=
