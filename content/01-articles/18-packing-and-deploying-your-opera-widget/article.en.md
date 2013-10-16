Title: Packing and deploying your Opera Widget
----
Date: 2010-02-09 17:51:13
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


<h2>Introduction</h2>

<p>When your widget is finished, what remains is to deploy it, and make it available for all to see. This article explains how.</p>

<h2>Packing</h2>

<p>Widgets are packed using the zip format (using .wgt extension), with the config.xml and index.html in the root folder of the archive. Any other files you use in the widget can be located anywhere within the widget archive file. For example, to package a standard widget you would:</p>
<ol>
  <li>Have a widget folder containing at least a config.xml file and a main HTML file, usually named index.html</li>
  <li>Zip these files and any other necessary files or folders in your widget folder</li>
  <li>Rename the zip file from .zip to .wgt</li>
</ol>

<p>That&#39;s it! It&#39;s now ready to install, send to others or upload to our repository.</p>

<h2>Publish on Opera’s widget repository site</h2>

<p>The easiest way to deploy your widget and make it available to millions of users is to <a href="http://widgets.opera.com/upload/">upload</a> it to <a href="http://widgets.opera.com/">Opera’s widget repository web site</a>, where Opera widget users will have access to your widget in a matter of hours.</p>

<p>Widgets uploaded to the widget repository are reviewed by Opera staff before the become available for end users. If there is a problem, you’ll receive a message explaining what the issue is. Please note the widgets <a href="http://dev.opera.com/articles/view/opera-widgets-style-guide/">style guide</a>, which you should follow for a more consistent Widget user experience.</p>

<h2>Publish on your own web site</h2>

<p>If you wish to deploy the widget on your own server, it should be served with the Content-Type: application/x-opera-widgets. For the <a href="http://httpd.apache.org/">Apache HTTP server</a> add the following to a .htaccess file in the folder where the widget is stored:</p>

<pre>
<code>AddType application/x-opera-widgets .wgt</code>
</pre>

<p>To make a widget icon appear in Opera’s address bar, add the below code to the head-section of your HTML document. Opera will display a widget icon in the address bar that the user can click to run the widget.</p>

<pre>
<code>&lt;link rel=&quot;alternate&quot; 
  type=&quot;application/x-opera-widgets&quot; 
  title=&quot;[widget name]&quot;
  href=&quot;[widget url]&quot; /&gt;</code>
</pre>

<h2>Running a deployed widget</h2>

<p>Provided the widget is served with the correct Content-Type, Opera will automatically ask the user whether he/she wants to install the widget when the user clicks on a widget on a Web page. When the widget is deployed on the <a href="http://widgets.opera.com/">Opera Widgets site</a>, the end-user can easily find and download your widget from the “Add Widget” entry in Opera’s Widget menu.</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
