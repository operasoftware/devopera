Title: Opera TV Store app templates
----
Date: 2012-06-18 06:27:58
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

<p>Since the launch of the Opera TV Store, we&#39;ve seen a variety of apps published by creators and enjoyed by users. The fact that our TV apps are built using web standards means that web developers can use their existing skills to create content for the TV platform. Developing for TV can still feel unfamiliar, however, so to make it easier we&#39;ve created a couple of templates for common app types that content creators can freely use.</p>

<p>On any platform, news and entertainment are among the most popular types of content so the templates we&#39;re providing are for video player and RSS reader apps. Both of them are intended to be easy to customise so you can quickly publish your own branded apps without having to worry about development time and costs.</p>

<h2 id="video">Video player template</h2>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/713-opera-tv-store-app-templates/video-app-template.jpg" alt="Screenshot showing the video player TV app in use." />
</p>
<p class="caption">Figure 1: The video player TV template in use.</p>

<h3>Overview</h3>

<p>The video app template is more than just a simple player — it allows you to separate videos into channels based on a theme or subject. There is also a built-in bookmarking feature where users can move videos they particularly like into a list of their favorites. When watching videos, users can also choose to play videos continuously and even shuffle the order in which they are played. To customize the template, there are three main areas that can be easily edited — data (which can be via the XML file or your existing API), images and colors.</p>

<h3>Customization</h3>

<p>The first thing you will want to do is add your chosen videos and channels. This is done in the <code>video.xml</code> file, which looks like this:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rss&gt;
  &lt;channel&gt;
    &lt;item&gt;
      &lt;title&gt;Opera Labs: Mobile Extensions&lt;/title&gt;
      &lt;description&gt;We&#39;re excited to share with you a Labs release of our mobile browser with support for extensions.&lt;/description&gt;
      &lt;category&gt;Opera Labs&lt;/category&gt;
      &lt;duration&gt;00:01:24&lt;/duration&gt;
      &lt;content url=&quot;http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.mp4&quot; fileSize=&quot;24434480&quot; type=&quot;video/mp4&quot; /&gt;
      &lt;thumbnail url=&quot;http://apps.tvstore.opera.com/videos/Opera_Labs_Mobile_Extensions.jpg&quot; width=&quot;250&quot; height=&quot;140&quot; /&gt;
    &lt;/item&gt;
  &lt;/channel&gt;
&lt;/rss&gt;</code></pre>

<p>This file is read by the function <code>getData()</code>, in the file <code>videotemplate.js</code>, so if you prefer to use your own API or RSS feed for the source of the videos you just need to change the file address in that function. You would also need to change the parsing rules in the <code>prepareData()</code> function in the same file to suit.</p>

<p>For visual customization, all images are contained in the <code>images</code> directory and named with logical filenames such as <code>logo.png</code>. This allows you to easily replace them with your own logo and color scheme. In addition the styles for the app&#39;s design are in the <code>style.css</code> file in the <code>css</code> directory. Font and color definitions have been placed at the top of this file to make it easier to customize.</p>

<h2 id="rss">RSS reader template</h2>

<p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/713-opera-tv-store-app-templates/rss-app-template.jpg" alt="Screenshot showing the RSS reader TV app in use." />
</p>
<p class="caption">Figure 2: The RSS reader TV template in use.</p>

<h3>Overview</h3>

<p>The RSS reader app template allows you to conveniently provide news or other regularly updated content in a single app. Like the video app template, it is easily controlled with the direction keys of a TV remote control and includes a slideshow feature that can automatically display individual news items or articles one by one. Customization can consist of simple color changes, or more advanced alterations such as editing the dynamically-generated HTML.</p>

<h3>Customization</h3>

<p>The most important step is to specify the feeds you&#39;d like to use. This is done by editing the <code>DEF_FEEDS</code> array in the <code>js/config.js</code> file. You can add as many as you like — including feeds that are hosted on an external domain — however to workaround browser security measures a proxy feed server needs to be used. There are instructions for setting this up in the tutorial, linked to with the downloadable package below. A list of feeds may look something like this:</p>

<pre><code>var DEF_FEEDS = [{
  url: &#39;data/data.xml&#39;
},
{
  url: &#39;http://my.opera.com/chooseopera/xml/rss/blog/&#39;,
  proxy: true
}];</code></pre>

<p>Also in the <code>js/config.js</code> file are options to change the title of your app and the address of the proxy server, if necessary:</p>

<pre><code>/**
 * Application main title 
 */
var APP_TITLE = &#39;All feeds&#39;;

/**
 * Proxy URL
 */
var PROXY_URL = &#39;/xhrproxy/?_proxy_url=&#39;;</code></pre>

<p>Visual styles for the app can be changed by editing the <code>css/common.css</code> file, and if you&#39;d like to edit the HTML that each feed item uses, that is contained in the <code>js/Item.js</code> file in the <code>TMPL</code> and <code>TMPL_CONTENT</code> arrays.</p>

<h2>Downloading the templates!</h2>

<p>The app templates are available for download here (ZIP files):</p>

<ul>
    <li><a href="http://apps.tvstore.opera.com/templates/videotemplate.zip">Video player app template</a></li>
    <li><a href="http://apps.tvstore.opera.com/templates/rssreader.zip">RSS reader app template</a></li>
</ul>

<p>The ZIPs both include more detailed tutorials on how to add your own data and customize the templates to suit your taste or brand guidelines. They have been designed so that you don&#39;t need to edit functionality or layout to create an easy-to-use, good-looking app, however because both templates are provided under a <a href="http://creativecommons.org/licenses/by/3.0/">free, open source license</a>, there&#39;s nothing to stop you customizing the code at a deeper level if you wish. We look forward to seeing the apps you create from these templates in the Opera TV Store!</p>

<p class="note">The templates are licensed under a <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported</a> license. Please include the following notice in any distribution: Copyright © 2012 Opera Software ASA. Used by Permission.</p>

<h2>Updating the templates</h2>

<p>We are constantly looking to improve our app templates, by fixing bugs and adding new features. Because of this, they are designed to be easily upgradeable to updated versions containing new styling and script logic — as long as application developers do not modify files other than the <code>custom.css</code> and <code>config.js</code> files.  Whenever a new version of an app template is available (check the links above) just download and unpack it, then copy your app&#39;s existing custom <code>config.js</code> and <code>custom.css</code> files into the updated package, overwriting the default ones there.</p>

<p>If your app has more significant customizations, bear in mind that upgrading to a new version might be much more difficult. Also please note that these instructions mainly relate to the video app template (and possible others that we may release in the future) — the RSS app template is unlikely to require updates, and such an update would be much more complicated.</p>
