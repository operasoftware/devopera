Title: Widget Emulator
----
Date: 2010-02-09 17:05:48
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

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>

<ol>
<li><a href="#intro">Introduction</a></li>
<li><a href="#starting">Getting started</a>
<ol>
<li><a href="#previous">Previous versions of Opera</a></li>
</ol>
</li>
<li><a href="#debugging">Debugging with the emulator</a></li>
<li><a href="#what">What is emulated?</a></li>
<li><a href="#notemulated">What is <em>not</em> emulated?</a></li>
<li><a href="#ui">User Interface</a></li>
<li><a href="#devices">Emulator devices</a></li>
<li><a href="#devices-add">How to add devices</a>
<ol>
<li><a href="#devices-add-ui">Adding a device in the emulator</a></li>
<li><a href="#device-add-import">Importing device files</a></li>
<li><a href="#default_devices_js">Editing default_devices.js</a></li>
<li><a href="#device_properties">Device properties</a></li>
</ol>
</li>
</ol>

<h2 id="intro">Introduction</h2>

<p class="note">From Opera 10.10, the emulator now supports loading widgets, devices and plugins from anywhere on your disk. You no longer have to copy these into your widget directory and edit directory files to include them. This is made possible through the File I/O API for widgets. However, at the time of writing there are still unresolved conflicts between the emulator widget’s File I/O access and the access of the emulated widget itself, which may result in problems when emulating a widget which makes use of File I/O features.</p>

<p>The Widget Emulator (see Figure 1) is a tool enabling you to see how your widget is likely to appear on a small monitor, TV, or handheld device. The emulator runs your widget in a sandbox and will “trick” it in various ways to emulate the important differences between these varying environments.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/124-widget-emulator/emulator_small.png" title="Screenshot of the Widget Emulator" alt="Screenshot of the Widget Emulator" /></p>

<p>Figure 1: The Widget Emulator in all its glory.</p>

<p>Strangely enough, the Widget Emulator is a widget itself. It contains a panel on the right where you can set the device parameters, and a screen on the left where your own widget runs in an iFrame.</p>

<p class="note">Despite the emulator’s best efforts to resemble the devices, there will always be aspects that are impossible to emulate. This is due to the enormously complex task that emulation is and the possible device-dependent bugs that exist in any software. The tool should be used while developing your widgets but it is still advised that you test them on a real device before considering them production quality.</p>

<h2 id="starting">Getting started</h2>

<ul>
<li>Open the <a href="emulator.wgt">emulator package</a> (emulator.wgt)</li>
<li>Double-click the file</li>
<li>Follow the installation instructions</li>
</ul>

<p>The Widget Emulator now becomes available through a shortcut in your Start menu or on your Desktop. Launch it by clicking the shortcut.</p>

<p>To add your widget to the emulator, simply click the “Add +” button above the list of widgets. A dialogue for selecting folders appears. Select any folder containing other, unpacked widgets. The folder is scanned recursively and widgets are added to the list. Click on the widget in the list to start it in the emulator.</p>

<p>Clicking the ‘X’ icon in the lower right corner return you to the list of installed widgets. If you change the code in your emulated widget, you need to reload it in the emulator by clicking the reload button next to the device name.</p>

<h3 id="previous">Previous versions of Opera</h3>

<p>For versions of Opera older than 10.10, you need to copy your own widget into the emulator and then run the emulator widget from your file system. You can copy multiple widgets into the emulator.</p>

<p>Copy or edit the contents of the unpacked emulator to your hard drive. You will see the following items:</p>

<ul>
<li>emulator_files/</li>
<li>plugins/</li>
<li>widgets/</li>
<li>config.xml</li>
<li>default_device.js</li>
<li>index.html</li>
</ul>

<p>Copy the directory of the widget you wish to emulate into the <code>widgets</code> directory of the emulator.<br />
The file structure will typically now look like this:</p>

<ul>
<li>emulator_files/</li>
<li>plugins/</li>
<li>widgets/
<ul>
<li>mywidget/
<ul>
<li>scripts/</li>
<li>style/</li>
<li>config.xml</li>
<li>index.html</li>
</ul>
</li>
<li>dir.js</li>
</ul>
</li>
<li>config.xml</li>
<li>default_device.js</li>
<li>index.html</li>
</ul>

<p>You need to initialize your widget as an emulated widget. Add the following line of code into the <code>head</code> of the <code>index.html</code> file of your emulated widget, before your own JavaScript:</p>

<pre>
<code>&lt;script type=&quot;text/javascript&quot;&gt;if(parent.emulator)parent.emulator.begin(window);&lt;/script&gt;&quot;</code>
</pre>

<p>When this code is called, the emulator will override certain functions the emulated widget calls, and provide values consistent with the type of device selected. One example is overriding the reported available screen size.</p>

<p>Finally, you need to register the widget in the emulator. Open the <code>dir.js</code> file in the <code>widgets</code> directory and add the name of the directory of your widget to the list. (It’s currently not possible to scan a directory for widgets. This will be possible with a public implementation of <a href="http://labs.opera.com/news/2008/11/25/">File I/O</a>.)</p>

<p>Click and drag the config.xml file of the emulator (not the <code>config.xml</code> in your emulated widget) to an Opera window to run the emulator.</p>

<p>When the emulator starts, it will display a list of currently ‘installed’ widgets, i.e. those defined in <code>widgets/dir.js</code>. Click on your widget to start emulation of it. Clicking the ‘X’ icon inside your widget will return you to the list of installed widgets.</p>

<h2 id="debugging">Debugging with the emulator</h2>

<p>Debugging widgets within the emulator is done using remote debugging, as with any widget. Once remote debugging is enabled in Dragonfly (<em>Settings</em> -&gt; <em>Remote Debugging</em>), right-click on your widget and from the <em>Settings</em> menu select <em>Remote Debugging</em>. You should then be able to connect to Dragonfly and use it to debug your HTML, CSS and JavaScript.</p>

<p>See:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/the-opera-widgets-runtime-for-desktop/#debugging">Debugging section of the Desktop Widget runtime article</a></li>
<li><a href="http://dev.opera.com/articles/view/debugging-widgets-using-opera-dragonfly/">Debugging widgets using Opera Dragonfly and the Widget Emulator</a></li>
</ul>

<h2 id="what">What is emulated?</h2>

<dl>
<dt>Screen size</dt>
<dd>JavaScript properties such as <code>screen.height</code> and <code>screen.availHeight</code> will contain different values than your actual monitor to reflect the screen size of the device being emulated. <a href="http://www.w3.org/TR/css3-mediaqueries/">CSS media queries</a> will evaluate according to the device chosen. This means that if you include, for instance, a stylesheet with <code>media=“handheld”</code> then that stylesheet will be applied if you decide to emulate a mobile phone.</dd>
<dt>Docked mode</dt>
<dd>The widget can be put in docked mode, also known as micro mode, to see what it looks like when this mode is enabled on a device.</dd>
<dt>Frame rate</dt>
<dd>The frame rate of your JavaScript animations can be decreased to see how the widget handles slow computers. This only applies to JavaScript making use of <code>setTimeout</code> and <code>setInterval</code> and not to animated GIFs etc.</dd>
<dt>Internet connection speed</dt>
<dd>The <code>XMLHttpRequest</code> object (used in Ajax(Asynchronous JavaScript and XML)) can be made to run slower to mimic the loading times experienced on mobile phones with slow internet connections.</dd>
<dt>Maximum preferences storage</dt>
<dd>The preferences stored by <code>widget.setPreferenceForKey</code> are limited to as little as 20KB of storage on some devices with limited hard disk space. In cases where your widget exceeds this value the method will throw an error and the preference will not be stored.</dd>
</dl>

<h2 id="notemulated">What is <em>not</em> emulated?</h2>

<p>The following is a list of aspects that may differ between actual devices and the emulator.</p>

<dl>
<dt>Fonts</dt>
<dd>The fonts used in your widget may not be available on the device. Also, font rendering is usually platform dependent, which could cause lines of text to wrap at slightly different positions than you see in the emulator.</dd>
<dt>Dragging</dt>
<dd>The ability to drag a widget across your screen is usual on desktop, but on other devices this may not be enabled. The emulator does not enable dragging.</dd>
<dt>Input mechanism</dt>
<dd>The experience on a mobile or TV may be quite different if it is not equipped with a pointing device. Also, on-screen keyboards are used on some devices, which can make text input more cumbersome and possibly hide certain events such as <code>onkeydown</code>.</dd>
<dt>DPI(Dots per inch)</dt>
<dd>Desktop monitors often have a resolution of around 96 DPI, which is a measure of how densely packed the pixels are on the screen. Handheld devices often have screens with a much higher DPI, while televisions usually have a lower value. The emulator does not make adjustments for this, which means that a widget running on an actual device may appear smaller or larger than in the emulator.</dd>
<dt>Color Depth</dt>
<dd>Some devices have screens with a color depth lower than 24 bit. These devices will dither images in widgets at runtime, but the emulator does not demonstrate this. If you want to control exactly how your images look on these devices you have the option of dithering your own images before packaging your widgets.</dd>
</dl>

<h2 id="ui">User Interface</h2>

<p class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/124-widget-emulator/emulator_descr.png" title="The Widget Emulator, with the main parts of the interface illustrated" alt="The Widget Emulator, with the main parts of the interface illustrated" /><br />
Figure 2: The Widget Emulator, with the main parts of the interface illustrated</p>

<ol>
<li><em>Device list</em>: This shows a list of your emulated devices. Click on the arrows to move one device up or down in the list, or click on the list itself to expand the full list and choose a device. The “I” icon will show or hide the device information panel.</li>
<li><em>Control panels</em>: Clicking on either of the icons on the right side of the main window will open a panel. Clicking “I” will open the device information panel. This panel shows information about your current device, for example its screen dimensions and which plugins are enabled for it. Clicking “D” will open the devices panel, allowing you to edit and import devices. Clicking “P” will open the plugins panel, allowing you to manage and import plugins.</li>
<li><em>Emulated device</em>: This is the main part of the emulator showing how your widget looks on the emulated device. This will display a widget manager when you begin. Click on one of the widget to start it.</li>
<li><em>Emulated toolbar</em>: The emulated toolbar allows you to reduce your widget to a docked state or closing it entirely. When closed, the widget manager will reappeared.</li>
<li><em>Widget information panel</em>: This panel shows information about the widget you are currently emulating, such as its position on the screen and the size of its preference store.</li>
</ol>

<h2 id="devices">Emulator devices</h2>

<p>The Widget Emulator comes with a set of devices which simulate characteristics of devices such as mobile phones, TVs and a desktop computer. Each device varies with respect to for example screen resolution, availability of features like a dock, user agent and so on.</p>

<p>The default devices provided are:</p>

<table id="devicetable">
<tr>
<th>Preset</th>
<th>Media-type</th>
<th>Screen size (px)</th>
<th>Connection</th>
<th>Storage</th>
<th>Framerate</th>
</tr>
<tr>
<td>Desktop</td>
<td>screen</td>
<td>800×600</td>
<td>256kbps</td>
<td>2MB</td>
<td>Fast</td>
</tr>
<tr>
<td>VGA Mobile</td>
<td>screen</td>
<td>640×480</td>
<td>16kbps</td>
<td>20kB</td>
<td>Slower</td>
</tr>
<tr>
<td>QVGA Mobile</td>
<td>screen</td>
<td>320×240</td>
<td>16kbps</td>
<td>20kB</td>
<td>Slower</td>
</tr>
<tr>
<td>WVGA Mobile</td>
<td>screen</td>
<td>800×480</td>
<td>16kbps</td>
<td>20kB</td>
<td>Slower</td>
</tr>
<tr>
<td>TV</td>
<td>tv</td>
<td>800×480</td>
<td>32kbps</td>
<td>200kB</td>
<td>Fast</td>
</tr>
</table>

<h2 id="devices-add">How to add devices</h2>

<p>There are three ways of adding devices: By using the device panel in the emulator, importing a device file and by editing the file default_devices.js in the root of the emulator directory.</p>

<h3 id="devices-add-ui">Adding a device in the emulator</h3>

<p style="float:right;" class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/124-widget-emulator/emulator_add.png" title="The panel for adding devices" alt="The panel for adding devices" /><br />
Figure 3. The panel for adding devices</p>

<ol>
<li>Click the blue “D” icon to display the device panel. This panel displays information about the installed devices.</li>
<li>Click “New” beneath the list of devices. This will expand the panel with a UI for creating a new device.</li>
<li>Fill in relevant values, such as device name, user agent and so on.</li>
</ol>

<p class="note">Note that by adding devices this way, they  will be saved in the preference store of the emulator.</p>

<h3 id="device-add-import">Importing device files</h3>

<p>Yoy may also import a JSON-file describing devices:</p>

<ol>
<li>Click the blue “D” icon to display the device panel. This panel displays information about the installed devices.</li>
<li>Click “Browse” beneath the list of devices. This will raise a dialogue for choosing a file.</li>
<li>Locate a JSON file with device descriptions and select it.</li>
</ol>

<p>Note that by adding devices this way, they  will be saved in the preference store of the emulator. See the <a href="#device_properties">section on device properties</a> for the format of the file.</p>

<h3 id="default_devices_js">Editing default_devices.js</h3>

<p>The default devices are stored in the file <code>default_devices.js</code> in the root of the emulator package. You can use this file to change the devices the emulator is distributed with.</p>

<ol>
<li>Browse to the installation directory of the emulator.</li>
<li>Open the <code>default_devices.js</code> file in your favorite text editor.</li>
<li>Add or edit entries as needed.</li>
</ol>

<p>See the next section for format of the file.</p>

<h3 id="device_properties">Device properties</h3>

<p><code>default_devices.js</code> describes one object with an array of device entries. An imported JSON file needs to contain one array with the same type of entries. Each entry is an object with properties describing one device. An entry can look something like this:</p>

<pre>
<code>[
  ...
  {
    title: &#39;Desktop&#39;,
    media: &#39;screen&#39;,
    screen: [800, 600],
    storage: 2097152, // 2MB storage
    rotatable: true,
    chrome: null,
    dock: null,
    useragent: null,
    plugins: [&#39;Network Security&#39;]
  },
  ...
]</code>
</pre>

<p>Here’s a quick explanation of the properties:</p>

<dl>
<dt>title</dt>
<dd>Name of the device.</dd>
<dt>media</dt>
<dd>The media type the device identifies itself with, one of ‘screen’, ‘handheld’ or ‘tv’.</dd>
<dt>screen</dt>
<dd>An array with two numbers, the dimensions of the screen of the device.</dd>
<dt>storage</dt>
<dd>A number, the number of bytes available for preference data storage.</dd>
<dt>rotatable</dt>
<dd>A boolean, whether or not the device’s screen can be rotated, i.e. if the resolution event is fired.</dd>
<dt>chrome</dt>
<dd>An array with four numbers, corresponding to the number of pixels the device chrome takes up, in the order of top, right, bottom and left.</dd>
<dt>dock</dt>
<dd>An array with two values, denoting the dimensions of the dock, or null if docking is not supported.</dd>
<dt>useragent</dt>
<dd>A string with the User Agent string the device identifies itself with, or null for the default.</dd>
<dt>plugins</dt>
<dd>An array of strings, the names of plugins that should be enabled for the device.</dd>
</dl>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>    
