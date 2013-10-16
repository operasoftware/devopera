Title: Converting widgets to Opera extensions: Things to keep in mind
----
Date: 2012-04-25 15:21:39
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

<h2 id="introdcution">Introduction</h2>

<p>This article will shed light on some things to keep in mind for Widgets developers when converting widgets into Opera Extensions. We recently announced that the <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">sun is setting on our support for Widgets (and Unite)</a> in upcoming versions of Opera, so this article will help developers who have existing Widgets to convert them into the highly-popular Opera Extensions format, if they so choose.</p>

<p>If you haven’t already, we&#39;d recommended that you take a look at <a href="http://dev.opera.com/addons/extensions/">developing Opera extensions</a> and gain some familiarity with how it is made before reading this article.</p>

<p>One very important and useful thing to note is that Opera Extensions are based on the same packaging format as Widgets, i.e, the <a href="http://www.w3.org/TR/widgets/">Widget Packaging and XML Configuration Specification</a>. There are a few differences between the two, but essentially both are based on the same config.xml file, index.html build file, and other files necessary for the look and behavior, which are then packaged together into a zip file (then given a custom file extension — .wgt for widgets and .oex for extensions).</p>

<p>To start with, let’s take a deeper look into the packaging format. We will take the <a href="http://widgets.opera.com/widget/26182/">Geolocator widget</a> and convert it to an extension during the course of the article.</p>

<h2 id="packaging">Packaging</h2>

<p>Widgets are .wgt files and Opera Extensions are .oex files, however, both are essentially .zip files renamed into their respective formats. One thing to keep in mind is that if you want to convert your widget to an extension (especially if it requires some interactivity from the user’s side), the best way is to make it run inside the popup page of the extension. Figure 1 shows how the files differ between a Widget and an Opera Extension</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/686-converting-widgets-to-opera-extensions-things-to-keep-in-mind/widgetfilesystem.jpg" alt="Files inside the geolocator widget file" /></p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/686-converting-widgets-to-opera-extensions-things-to-keep-in-mind/extensionfilesystem.jpg" alt="Files inside the converted geolocator extension file" /></p>
<p class="figure">Figure 1: Files inside the Geolocator widget file (top), and the converted Geolocator extension file (bottom).</p>

<p>In Widgets, generally the build file (called index.html) was the main page where the UI of the whole app manifested itself. All the JS, CSS and image files were ultimately linked to that. In the equivalent Opera Extension, you want to display the functionality in the popup, so start off by renaming your widget’s index.html to popup.html.</p>

<p>Then what about the index.html file? Is isn’t it needed even in extensions? Yes, it is. Next you should create a new index.html build file linking to the background.js script, which should look like so:</p> 

<pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Index Page&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;background.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
&lt;/html&gt;</code></pre>

<p>The linked background.js file is needed to define the UI properties of the extension (like the icon, the popup file, the size of the popup, etc). So let&#39;s create that next; you define the popup like so:</p>

<pre><code>...
popup: {
        href: &quot;popup.html&quot;,
        width: 500,
        height: 420
      },
...</code></pre>

<p class="note">Read our article <a href="http://dev.opera.com/articles/view/opera-extensions-buttons-badges-and-popups/">how to use the background.js script to add buttons, badges and popups to extensions</a> to find out more about how background script works.</p>

<p>Keep in mind that this popup.html is just the renamed &#39;index.html&#39; that we had in the widget.</p>

<h2>Correcting the configuration file</h2>

<p>Now let&#39;s move on to the configuration file: usually referred to as config.xml, this is a simple XML file needed for both widgets and extensions. You already have a widget config.xml, which just needs a few changes to make it work properly in extensions. These changes actually make writing config.xml easier for extensions, which is welcome news!</p>

<p>You need to make the following changes:</p>

<ul>
  <li>The <code>&lt;widget&gt;</code> tag for widget config.xml had an attribute called <code>&quot;dockable&quot;</code>. That was specific to widgets, so delete it.</li>
  <li>You need to add an <code>xmnls</code> attribute to the <code>&lt;widget&gt;</code> tag, so that it looks like <code>&lt;widget xmlns = &quot;http://www.w3.org/ns/widgets&quot;&gt;</code></li>
  <li>In widgets, you have the tag <code>&lt;widgetname&gt;</code>. This should be renamed to <code>&lt;name&gt;</code> in the config.xml for extensions.</li>
  <li><code>&lt;width&gt;</code> and <code>&lt;height&gt;</code> are defined in the config.xml for widgets, but they are not needed for extensions, so delete those elements (in extensions, the width and height of the popup is defined in the background.js file).</li>
  <li>In widgets, the author information was stated in the <code>&lt;id&gt;</code> tag of the config.xml, but this is not needed in extensions. Instead, you can include similar information in the &lt;author&gt; tag, with attributes like <code>&quot;email&quot;</code> and <code>&quot;href&quot;</code>.</li>
  <li>In widgets, icon files used to be defined in the config.xml like so: <code>&lt;icon&gt;icon.png&lt;/icon&gt;</code>. In the config.xml for extensions, it is simply defined like <code>&lt;icon src=&quot;icon.png&quot; /&gt;</code>. You need to make this change as well.</li>
  <li>The <code>&lt;host&gt;</code> tag is not required in the config.xml for extensions, so delete it.</li>
</ul>

<h2 id="storage">Storage</h2>

<p>The mechanism for storage in widgets and extensions differ slightly. In extensions, you store items using <code>widget.preferences.setItem()</code> and retrieve it using <code>widget.preferences.getItem()</code>.</p>

<table>
<caption>Storage</caption>
<thead>
<tr>
	<th>Action</th><th>widget</th><th>extension</th>
</tr>
</thead>
<tbody>
<tr>
	<td>Store</td><td>widget.setPreferenceForKey()</td><td>widget.preferences.setItem()</td>
</tr>
<tr>
	<td>Retrieve</td><td>widget.preferenceForKey()</td><td>widget.preferences.getItem()</td>
</tr>
</tbody>
</table>

<p>So you need to replace <code>widget.setPreferenceForKey()</code> with <code>widget.preferences.setItem()</code>, and <code>widget.preferenceForKey()</code> with <code>widget.preferences.getItem()</code> in all of your scripts when you are converting your widgets to extensions. The functions work exactly the same way; its just the naming that has changed.</p>

<h2>The finished product</h2>

<p>And that&#39;s it! Figure 2 shows our existing Widget running as an Opera Extension.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/686-converting-widgets-to-opera-extensions-things-to-keep-in-mind/extension_oslo1.png" alt="Geolocator extension" /></p>
<p class="figure">Figure 2: The converted Geolocator extension</p>

<p>You can <a href="http://widgets.opera.com/widget/26182/">download the Geolocator Widget file</a> and the <a href="geolocator_extension.oex">converted Opera Extension file</a> and peruse the code to see the differences. As an additional example, take a look at the <a href="http://widgets.opera.com/widget/3529/">Analog Clock Widget</a> and the <a href="analog_clock_extension.oex">converted Analog Clock extension</a>.</p>

<h2 id="xhr">Communication with a server using XMLHttpRequest</h2>

<p>Some widgets require communication with a server using Ajax. This was pretty straightforward in Widgets, where you could do an XHR request directly from the index page. However, in extensions, you need to communicate with the background script, which will do the Ajax request and then communicate the result back to the popup page. We have an excellent article showing how to do this — <a href="http://dev.opera.com/articles/view/accessing-an-opera-extensions-background-process/">Accessing an Opera Extension&#39;s background process</a>.</p>

<h2 id="openlinks">Opening links in the browser</h2>

<p>Some widgets required the <code>widget.openURL()</code> method to open links in the browser. To do this in extensions however, the popup file would need to communicate with the background.js file, which will open a new tab and the load the URL within it. You can take a look at the <a href="http://www.opera.com/docs/apis/extensions/windowsandtabsguide/">Windows and Tabs API documentation</a> as well as our <a href="http://dev.opera.com/articles/view/opera-extensions-messaging/">article on messaging in extensions</a>, which deals with communicating between different parts of an extension (including between popup and background script) and how to go ahead with it.</p>

<h2 id="polishing">Polishing things up</h2>

<p>Keep in mind that the Opera Extensions you have converting from Widgets may work, but still may or may not conform to the <a href="http://dev.opera.com/articles/view/opera-extensions-publishing-guidelines/">Opera extension publishing guidelines</a>. We&#39;d recommend that you take a look at it, and adjust and polish the extension to conform to the guidelines before submitting it to the <a href="https://addons.opera.com">Opera addons catalog</a>.</p>
