Title: Saying hello world to Opera extensions!
----
Date: 2010-10-21 09:09:37
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

<h2>Contents</h2>

<ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#configuring">Configuring an extension</a></li>
    <li><a href="#icon">Creating an extension icon</a></li>
    <li><a href="#button">Add a button to the Opera toolbar</a></li>
    <li><a href="#popup">Creating a popup</a></li>
    <li><a href="#packaging">Packaging and installing the extension</a></li>
</ul>

<h2 id="intro">Introduction</h2>

<p>This article walks you through the basic steps to create your first Opera extension. You will create a toolbar button, which when pressed will open a popup that displays a <q>Hello World!</q> message. Opera extensions are written using regular open web standards, so all you need to get started is a copy of Opera 11 and your text editor or IDE of choice.</p>

<h2 id="configuring">Configuring an extension</h2>

<p>First, you’ll create the extension configuration file, which holds the meta data describing the extension. This is where information such as the extension name, author and icon for the extension manager is specified. Opera extensions use the W3C Widgets packaging and configuration format, which you may be familiar with from Opera Widgets. </p>

<p>Go ahead and create a bare bones configuration file as follows:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://www.example.org/helloworld&quot;&gt;
	&lt;name&gt;Hello extensions!&lt;/name&gt;
	&lt;description&gt;A simple hello world example&lt;/description&gt;
  	&lt;author href=&quot;yourURL&quot; email=&quot;yourEMail&quot;&gt;Enter your name here&lt;/author&gt;
  	&lt;icon src=&quot;icons/hello.png&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>Save this file as <code>config.xml</code> in your development folder.</p>

<h2 id="icon">Creating an extension icon</h2>

<p>You may have noticed the icon element referenced in the config file. This specifies the icon used in the extensions manager and the Opera extensions site. We recommend creating an icon of 64×64 pixels for this.</p>

<p>Download the <a href="hello.png">hello.png</a> icon and save it in the &quot;icons&quot; folder inside your development folder.</p>

<h2 id="button">Add a button to the Opera toolbar</h2>

<p>Once you&#39;ve configured your extension, you can start to create the actual code. Create a button, which is then added to the toolbar. This can be done with the following code:</p>

<pre><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;script&gt;
       window.addEventListener(&quot;load&quot;, function(){
        var theButton;
        var ToolbarUIItemProperties = {
          title: &quot;Hello World&quot;,
          icon: &quot;hello-button.png&quot;,
          popup: {
            href: &quot;popup.html&quot;,
            width: 110,
            height: 30
          }
        }
        theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
        opera.contexts.toolbar.addItem(theButton);
      }, false);
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Save this file as <code>index.html</code> in your development directory.</p>

<p>Any Opera extension requires a start file, commonly called <code>index.html</code>. A different filename could be used but it would have to be specified in the <code>config.xml</code> file using the &lt;content src=&quot;&quot;/&gt; syntax. This file is a bare bones HTML template with a script that creates the UI elements. The body of this document isn&#39;t used.</p>

<p>The script will create a toolbar item (a button) with a number of properties. A tooltip is created along with an 18×18 icon. A popup belonging to the button is also created with a specified size, along with a reference to where the popup UI is defined.</p>

<p>You can download the <a href="hello-button.png">hello-button.png icon</a> and save it in your development directory.</p>

<h2 id="popup">Creating a popup</h2>

<p>You’ve already created a button, and specified the size of the popup, so you just need to create the contents. This is just an HTML document, with its viewport set to the specified size. You can use any HTML, CSS, JavaScript or any other web technologies as you would normally use on a web page. This is a hello world example, so you’ll create a page which says just that:</p>

<pre><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
  	&lt;title&gt;Hello World!&lt;/title&gt;
  	&lt;style&gt;
  		h1 {
  			font: 14px helvetica, arial, sans-serif;
  			text-align: center;
  		 }
  	&lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
  	&lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Go ahead and save this as <code>popup.html</code> in your development directory.</p>

<h2 id="packaging">Packaging and installing the extension</h2>

<p>You&#39;ve almost got a finished extension. While developing, you can drag the <code>config.xml</code> file into Opera which will install it in Developer Mode. This aids development by allowing you to update your files and refresh the extension with the click of a button, rather than continually uninstalling and reinstalling.</p>

<p>When you&#39;re happy with your work and ready to release it, all you have left to do is to select all the files and zip them up. Once that is done, you can rename the zip file to HelloExtension.oex (remember to replace the .zip extension) and you&#39;re done.</p>

<div class="note">
<h3 id="zipping">Note on zipping extensions</h3>
<p>You need to make sure you zip up your extension so that the files and directories that comprise it are in the root of the zip, and not inside a folder. To ensure this, make sure that you zip up the files inside your extension directory, and not the directory itself. Subtle, but it makes all the difference.</p>
</div>

<p>You can download the finished <a href="hello.oex">HelloExtension</a> extension.</p>

<p>To install it as a regular user, i.e. not in Developer Mode, just drag the extension into Opera and it will ask you if you want to install it. You will see the icon you specified along with the meta data. Switch to a tab and try clicking on your newly created toolbar icon.</p>

<p>Try experimenting with the different properties of the toolbar button and the popup contents, until you feel comfortable with the process.</p>#intro
