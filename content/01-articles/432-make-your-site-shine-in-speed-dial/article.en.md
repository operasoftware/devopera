Title: Make your site shine in Speed Dial
----
Date: 2011-03-11 01:01:05
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

<h2>Table of Contents</h2>


<ul>
	<li><a href="#intro">Introduction</a></li>
	<li>
		<a href="#use-logo">Using a logo</a>
		<ul>
			<li><a href="#html5icons">Icons in HTML5</a></li>
			<li><a href="#setanicon">Specifying a Speed Dial icon</a></li>
			<li><a href="#multipleicons">Using multiple icons</a></li>
		</ul>
	</li>
	<li>
		<a href="#tailored-content">Providing tailored content in your Speed Dial entry</a>
		<ul>
			<li><a href="#viewmode">Using <code>view-mode:minimized</code></a></li>
			<li><a href="#with-x-purpose">Using the X-Purpose header</a></li>
			<li><a href="#preview-refresh">Autoreloading content at regular intervals</a></li>
		</ul>
	</li>


	<li><a href="#sdpriority">Speed Dial priority</a></li>
	<li><a href="#productsupport">Opera product support</a></li>
</ul>


<object height="344" width="425"><embed allowfullscreen="true" height="344" src="http://www.youtube.com/v/GeHYPLS-K2I" type="application/x-shockwave-flash" width="425" allowscriptaccess="never" /><param name="movie" value="http://www.youtube.com/v/GeHYPLS-K2I" />
<param name="allowfullscreen" value="true" />
<param name="allowscriptaccess" value="never" /></object>

	<h2 id="intro">Introduction</h2>

	<p>As of version 11.10, Opera for desktop allows content creators to control how their site looks in Speed Dial. By default, Speed Dial uses a screen capture of the web site. But now site owners can specify an icon or serve Speed Dial-specific CSS or content.</p>


	<h2 id="use-logo">Using a logo</h2>

	<p>This section looks at how to use a custom logo or icon in your Speed Dial.</p>


	<h3 id="html5icons">Icons in HTML5</h3>

	<p>You&#39;re probably familiar with bookmark icons. They were first introduced with Internet Explorer 5 in 1999. Though not included in the HTML4 spec, browser vendors eventually agreed to <a href="http://www.w3.org/2005/10/howto-favicon">implement shortcut icons</a> by adding support for <code>icon</code> as a value for the <code>rel</code> attribute of the <code>link</code> element. Apple then extended this to touch devices through <a href="http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html"><code style="word-wrap:none">apple-touch-icon</code></a>. According to the HTML5 specification, <code>icon</code> is now a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">valid, standardized value</a> for the <code>rel</code> attribute.</p>


	<h3 id="setanicon">Specifying a Speed Dial icon</h3>

	<p>Specifying a Speed Dial icon is very similar to specifying a shortcut icon. Just add a <code>&lt;link&gt;</code> tag in the <code>head</code> section of your document.</p>

	<pre>
<code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/logo.png&quot;&gt;
&lt;/head&gt;</code>
	</pre>


	<p>Speed dial icons must be:</p>

	<ul>
		<li>At least 114 pixels wide by 114 pixels high. This is the default minimum icon size and icons smaller than this will be ignored.</li>

		<li>A PNG, JPEG or GIF image. SVG images aren&#39;t yet supported. Only the first frame of an animated image will be used.</li>
	</ul>

	<p>By default, the maximum icon size is 256 pixels wide by 160 pixels high. Icons larger than that will be resized to fit (<a href="icon.html">icon resize demo</a>). Users can change the default minimum and default maximum settings from the opera:config menu.</p>

	<p>As an aside, Opera 11.10 does have legacy support for <code>apple-touch-icon</code>, <code>apple-touch-icon-precomposed</code> and <code>image_src</code>.</p>

	<h3 id="multipleicons">Using multiple icons</h3>

	<p>You can also specify multiple icons. This is great if you&#39;d like users to receive one icon when they bookmark a page, and another when they add it to Speed Dial.</p>

	<pre>
<code>&lt;head&gt;
    &lt;title&gt;My Opera&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/128x128image.png&quot;&gt;
    &lt;!-- This will be the speed dial icon --&gt;
    &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;http://path/to/200x200image.png&quot;&gt;
&lt;/head&gt;</code>
	</pre>


	<p>If you specify more than one icon, Speed Dial will choose the larger one for its entry (<a href="multiple-icons-diff-sizes.html">multiple icon demo</a>). If both icons are the same size, the first icon link takes precedence (<a href="multiple-icons-same-size.html">same size icon demo</a>).</p>


<h2 id="tailored-content">Providing tailored content in your Speed Dial entry</h2>

<h3 id="viewmode">Using <code>view-mode:minimized</code></h3>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/432-make-your-site-shine-in-speed-dial/view-mode.png" width="664" height="445" alt="The Speed Dial screen in Opera 11.10" /></p>
<p class="comment">Figure 1: The Speed Dial screen in Opera 11.10</p>

<p>The <a href="http://www.w3.org/TR/view-mode/"><code>view-mode</code></a> media feature defines a way to specify styles by viewing mode. By using <code>view-mode: minimized</code>, you can provide alternate styles or display content that has been tailored for Speed Dial. The <code>view-mode</code> feature works like other media features, such as <code>device-width</code>. As with any media query, styles should be contained within an <code>@media</code> block.</p>


<pre>
<code>@media screen and (view-mode: minimized) {
    body {
        color: #fff;
        background: #b20000;
    }
}</code>
</pre>


<p>Or you can link to an external style sheet, and set the value of the media attribute to <code>(view-mode: minimized)</code></p>

<pre>
<code>&lt;link rel=stylesheet type=&quot;text/css&quot; href=&quot;minimizedstyles.css&quot; media=&quot;(view-mode:minimized)&quot;&gt;</code>
</pre>

<p>See an <a href="view-mode.html">example of <code>view-mode: minimized</code> at work</a>.</p>


<p>
Using <code>view-mode: minimized</code> ensures that your Speed Dial viewport will be at least <strong>256 pixels wide by 160 pixels high</strong>.
</p>

<h3 id="with-x-purpose">Using the X-Purpose Header</h3>

<p>It&#39;s also possible to serve a different URL for your Speed Dial entry. This is because every Speed Dial request includes an additional <code>X-Purpose: preview</code> header.</p>

<pre>
<code>GET / HTTP/1.1
Host: www.bbc.co.uk/news
X-Purpose: preview
User-agent: Opera/9.80 (Macintosh; Intel Mac OS X 10.6.6; U; en) Presto/2.8.99 Version/11.10</code>
</pre>

<p>By detecting that header, you can choose whether to serve a different URL, limit which files are sent to Speed Dial, or display different content. Note that this doesn&#39;t affect the URL that is launched when the user clicks on the Speed Dial entry.</p>

<p>In the example below, we&#39;re using Apache&#39;s mod_rewrite to redirect all Speed Dial requests for any URL to <code>/preview.html</code> instead (you&#39;ll probably want to be more specific than this in the real world).</p>

<pre>
<code>RewriteEngine On
RewriteCond %{HTTP:X-Purpose} ^preview$
RewriteRule ^(.*) /preview.html
</code>
</pre>

<p>Or maybe you&#39;d rather use a server-side language to conditionally serve different content at the same URL. The example below uses PHP.</p>

<pre>
<code>&lt;?php
if ($_SERVER[&#39;HTTP_X_PURPOSE&#39;] == &#39;preview&#39;) {
    // Send Speed Dial content
} else {
    // Send regular content
}
?&gt;</code>
</pre>

<h3 id="preview-refresh">Autoreloading content at regular intervals</h3>

<p>To make Speed Dial content more dynamic, you can define an autoreloading behavior that will be used if the user adds the site to a Speed Dial slot. You can set this in two ways:</p>
<ol><li><p>Using a <code>meta</code> tag:</p>
<pre>&lt;meta http-equiv=&quot;preview-refresh&quot; content=&quot;3600&quot;&gt;</pre></li>
<li><p>Setting <code>Preview-Refresh</code> as a response header:</p>
<pre>Preview-Refresh:3600</pre>
</li></ol>
<p>Note that the value is set in seconds. 3600 will thus reload the Speed Dial entry every hour.</p>

<h2 id="sdpriority">Speed Dial priority</h2>

<p>Speed Dial gives first priority to <code>view-mode: minimized</code> CSS. If no styles are available, the browser will look for an icon. If no icon is specified or if the file is missing or corrupted, Speed Dial will use a screenshot of the web site — its default behavior.</p>


<h2 id="productsupport">Opera product support</h2>
<p>For now these enhancements are only available to Opera Desktop users.</p>

<h2>Further reading</h2>

<ul>
	<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#rel-icon">Links from the WHATWG HTML5 specification</a></li>

	<li><a href="http://www.w3.org/TR/view-mode/">View mode media feature specification</a></li>
</ul>

