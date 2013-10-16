Title: Opera's lightweight themes
----
Date: 2011-10-13 06:59:31
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

<h2>Introduction</h2>
	
<p>Opera 12 brings us many improvements, including updates to the Opera skinning system. For a start, the updates are so extensive that we have renamed skins to <strong>themes</strong>. There is a new lightweight system that sits on top of the default Opera theme and makes simple customizations much easier to achieve. In this article we&#39;ll take a look at how this lightweight system works.</p>

<h2>How does it work?</h2>

<p>These new lightweight themes work in the same way as the existing themes system: they are packaged in a ZIP file, and contain two things, assets that you want to use in your theme, and a persona.ini file. The .ini file is how Opera recognises the ZIP file as a theme — when it encounters such a file (eg by following a link to it), it will automatically install the theme: a nice simple process. The theme applies is applied on top of the default Opera skin for your OS.</p>

<p>The persona.ini file contains a number of sections, each begun by a heading contained in square brackets, like so: [Options]. Each of these sections contains information to specify different parts of the theme, such as a custom background image, etc. the key here is simplicity — you can still use the old heavyweight theme system to create a full customization if you want, but a lot of people just want to do something simple, and don&#39;t want to risk breaking the UI. The lightweight system is much easier to use. In <a href="http://www.opera.com/browser/next/">Opera 12</a> we are only allowing you to customize the background image, colorization, and which major parts of the UI the image shows through. More options may be added in the future.</p>

<p>In the next section we will run through a complete theme example to show how this all works.</p>

<h2>Walking through an example</h2>

<p>To try out an example theme, install <a href="http://www.opera.com/browser/next/">Opera 12</a> and point it at our <a href="https://addons.opera.com/themes/">Opera themes page</a>. Try clicking on one of the examples and you&#39;ll notice that your browser changes its style to look something like the following:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/474-operas-lightweight-themes/theme1.jpg" alt="A sample Opera lightweight theme applied to Opera 12" /></p>
<p class="comment">Figure 1: An example theme in action.</p>

<p class="note">You will find this theme listed along with any other themes you may have installed, in <em>Tools &gt; Appearance</em>. From these you can choose to select between the different ones you&#39;ve previously installed, or delete them. You can also make a theme available from the appearance dialog by placing it in the <em>skin</em> directory of your Opera profile. You can find this in <em>[home folder]/Library/Opera</em> on Mac and Linux, and <em>C:\users\[user]\AppData\Roaming\Opera\Opera</em> on Windows.</p>

<p>I have made an <a href="natural_history_of_norway.zip">Opera theme available for you to play with</a>. If you save the ZIP file to your machine, then unzip it, you&#39;ll find assets, plus the personas.ini file, which contains the following sections:</p>

<pre><code># This file describes a test persona for the Opera browser. Not meant for redistribution.</code></pre>

<p>This is a comment, to give some background information about the theme. You can put comments anywhere you like in the file, as long as they are written on a separate line and started with a hash/pound symbol (#).</p>

<pre><code>[Info]
Name                          = The Natural History of Norway
Author                        = Opera Software
Version                       = 1
Preview Image                 =</code></pre>

<p>The <code>[Info]</code> section is quite self explanatory. The <code>Name</code> is the name of the theme, as it will appear in the Appearance dialog, on the upcoming Opera themes catalog, etc. The <code>Author</code> is the author of the theme, and <code>Version</code> should always be set as 1 (this means &quot;version 1 of the lightweight theme system&quot;). Preview Image is supposed to provide a preview for catalogs, etc., but is not currently being used.</p>

<pre><code>[Options]
Tint Color                = #3e6da9</code></pre>

<p>An optional section: if specified, <code>Tint Color</code> overrides the current colorization with a specific color tint — we colorize with the average colour of the image. Some of the themes, when installed, will add a colouration/tint over the top of the theme.</p>

<p class="note"><code>Tint Color</code> has an alias, <code>Colorize Color</code>, which you can use instead, but I think you&#39;ll agree that <code>Tint Color</code> is a bit more intuitive.</p>

<pre><code>[Window Image]
Type                          = BestFit
Background                = Kraken.jpg
Colorize                      = 0</code></pre>

<p>The <code>[Window Image]</code> section controls settings of the whole browser window. The <code>Type</code> is set to <code>BestFit</code> to indicate that Opera will fit a single copy of the image in the best way it can. The other available setting is BoxTile, which tiles the image. The <code>Background</code> line specifies the path to the image that will be used as a custom background image for the theme. <code>Colorize = 0</code> specifies that you don&#39;t want the custom image colorized in the same way as the rest of the UI. Set it to <code>1</code> if you do.</p>

<p class="note">Note: The overall size of the theme should not exceed 1MB, therefore you should be careful with the size of your background image, and try to optimize it down using an application such as <a href="http://imageoptim.com/">ImageOptim</a>.</p>

<pre><code>[Clear elements]
Speed Dial Widget Blank Skin  = 1
Speed Dial Widget Skin        = 1</code></pre>

<p>Setting these properties all to <code>1</code> will cause the background image to shine through the speed dial. If they are missing or set to 0, it won&#39;t.</p>

<p>You can&#39;t do much else inside lightweight themes, although we may add more options later. This sounds limiting, you might say, but this is deliberate — themes are for applying small changes. If you want to make more extensive changes, you&#39;ll still use the full theming system. But this new way is a lot simpler to write and apply.</p>

<h2>Installing and sharing a theme</h2>

<p>When you&#39;ve created a theme, you&#39;ll want to share it with others so they can see your handiwork. The best way to do this is to upload it to our Themes repository — to do this, use our <a href="https://addons.opera.com/en/developer/upload/">Opera addons developer upload page.</a> You&#39;ll need a <a href="http://my.opera.com/community/">my.opera</a> user account to do so. Sharing your theme like this means that it will be easily findable by others, and our team will also check it thoroughly for errors before making it public.</p>

<p>Note that if you instead upload it to your own web server, you&#39;ll need to make sure you serve it with the correct mime type, otherwise it won&#39;t install. To do this, put the following inside an <code>.htaccess</code> file in the same directory (for an Apache-based server, of course — other server types will require a different but equivalent fix):</p>

<pre><code>&lt;files *.zip&gt;
  ForceType application/x-opera-configuration-skin
&lt;/files&gt;</code></pre>

<h2>Summary</h2>

<p>I hope you found our walkthrough of Opera lightweight themes helpful. Let us know what you think!</p>
