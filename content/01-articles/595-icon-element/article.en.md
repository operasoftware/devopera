Title: icon element
----
Date: 2011-12-06 07:06:57
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

<h2>Description</h2>

<p>If any .svg, .ico, .png, .gif or .jpg file with the name &quot;icon&quot; is present in the extension package (for example: &#39;icon.png&#39;), then that is used as the icon for the extension by default.</p>

<p>The <code>&lt;icon&gt;</code> element is used to specify a custom icon file for the extension. The <code>width</code> and <code>height</code> attributes are not needed for SVG files. For bitmaps (e.g., png, gif, etc), Opera will automatically deduce the width and height of each icon.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-width-attribute">width</a></code></li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-height-attribute">height</a></code></li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-src-attribute">src</a></code></li>
</ul>

<h2>Example</h2>

<p>In the following example, three icon sizes are specified. The 64px icon is used in Opera&#39;s extension manager and the 18px icon (optional) is the size used for toolbar buttons. You can include icons for high density displays (for example, &#39;retina displays&#39;) in the same way. In the following example, the 128px icon is intended for those displays.</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
  ...
  &lt;icon src=&quot;images/icon_128.png&quot;/&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt;
  &lt;icon src=&quot;images/icon_18.png&quot;/&gt;
  ...
&lt;/widget&gt;</code></pre>

<h2>Further reading</h2>

<p>As part of our extension documentation, we have a collection of <a href="/articles/view/creating-effective-opera-extension-icons/">hints and tips for creating effective extension icons</a>.</p>

