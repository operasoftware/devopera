Title: Creating your first Opera widget
----
Date: 2010-02-09 17:48:20
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
<li><a href="#before">Before you get started</a>
<ol>
<li><a href="#what">What are widgets?</a></li>
<li><a href="#packaging">Packaging widgets</a></li>
<li><a href="#deploy">What do you need to create and deploy an Opera Widget?</a></li>
<li><a href="#widgets_webpages">How are widgets related to web pages?</a></li>
</ol>
</li>
<li><a href="#workshop">The widget workshop: hello world!</a>
<ol>
<li><a href="#maindoc">Creating the main document</a></li>
<li><a href="#configuration">Creating the widget configuration file</a></li>
<li><a href="#running">Running your widget for the first time</a></li>
<li><a href="#style">Adding style</a></li>
<li><a href="#interactivity">Adding interactivity</a>
<ol>
<li><a href="#styling">Styling the configuration and buttons</a></li>
<li><a href="#behavior">Adding behavior to the buttons</a></li>
</ol>
</li>
</ol>
</li>
<li><a href="#distributing">Distributing your widget</a></li>
<li><a href="#summary">Summary</a></li>
</ol>

<p>Creating an Opera widget is quick and painless, with just a few pointers in the right direction. This article details what a widget is and what you need to create one, and also takes you through creating, running and packaging a widget step by step. The basic techniques discussed here also apply to widgets intended to run on mobiles, set-top-boxes or within the Opera browser on the Nintendo Wii Internet Channel.</p>

<h2 id="before">Before you get started</h2>

<p>OK, we know you can’t wait to get started, but bear with us for just a moment while we run through a few essential basics.</p>

<h3 id="what">What are widgets?</h3>

<p>Widgets are Web applications running on your desktop. They are implemented using client-side Web technologies, and creating one is very much like creating a Web page, except that it is run in a slightly different context.</p>

<p>Opera browsers can install and open these widgets, showing them directly on the user’s desktop (or equivalent in other devices). Widgets are native applications created with web standards, which can integrate nicely with your computer or device. When run on a desktop computer, widgets look something like the eBook widget shown in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/72-creating-your-first-opera-widget/epub-widget.png" alt="The eBook Reader Widget" /></p>
<p class="comment">Figure 1: The eBook Reader Widget, running on Mac OSX.</p>

<h3 id="packaging">Packaging widgets</h3>

<p>Opera Widgets are packaged as regular zip files, renamed to use the extension <code>.wgt</code>. All the files related to your widget should be stored inside the widget file. A typical widget contains the following elements:</p>

<ul>
<li>A widget configuration file — <code>config.xml</code>. This is an XML file in the root of the widget structure that holds information about your widget including its size, name, author, and security information.</li>
<li>An index document — <code>index.html</code>. Like on a Web page, this document contains the basic skeleton/content of the widget. Widgets content can be created using any markup that Opera handles natively, for example HTML, SVG, or XML files. This file also lives in the root of the widget structure.</li>
<li>Images. These are contained in a single images folder.</li>
<li>JavaScript files. These are contained in a single script folder.</li>
<li>Style sheets. These are contained in a single style folder.</li>
</ul>

<p>When a user running the Opera desktop browser clicks on a link to a <code>.wgt</code> file, Opera will download the widget, start it, and ask the user if the widget should be kept on his/her computer. Note that behavior on different platforms supporting widgets may differ slightly.</p>

<p>The next time the user wants to run the widget, it can be started from the Widgets menu inside Opera, double-clicking the Widget icon at the install location (eg the <em>Applications</em> folder in Mac OSX), the Windows start menu, the Widget manager on their phone, or whatever other native mechanism they have available.</p>

<h3 id="deploy">What do you need to create and deploy an Opera Widget?</h3>

<p>In order to be able to create an Opera Widget, you will need the same as you need for regular Web development:</p>

<ul>
<li>A basic understanding of Web technologies.</li>
<li>A text editor or IDE that allows creation of JavaScript, HTML, and CSS files.</li>
<li>A tool for creating <code>.zip</code> archives.</li>
<li>Somewhere to publish the widget. The <a href="http://widgets.opera.com">Opera Widgets web site</a> offers the perfect place to host your widgets, and is visited by tens of thousands of people every day looking for widgets to run.</li>
</ul>

<h3 id="widgets_webpages">How are widgets related to Web pages?</h3>

<p>We keep saying widgets are very similar to regular Web pages, but there are a few differences:</p>

<ul>
<li>The security restrictions of a widget are different from regular Web pages — you can create a widget that will simultaneously interface with different Web services living on different Web servers.</li>
<li>Widgets have a <code>widget</code> object available via JavaScript that allows you to access widget-specific functionality.</li>
<li>Widgets have access to a permanent storage facility for its settings and downloaded data. This mechanism is similar to cookies, but the storage capacity is larger than for cookies, and does not automatically expire after a given time.</li>
<li>Widgets typically have several views available in the same document. Typically there will be one or more views used to access the widget’s normal functionality, and a separate view wherein you provide the user with configuration options. Switching between these views is done by performing transitions on the views using regular JavaScript/CSS methods.</li>
<li>By default, widgets are draggable, so you can move them around on the screen simply by clicking and dragging. If this behavior is not desired for a widget (or parts of it) you need to specify control regions where the widget does not respond to dragging.</li>
<li>By default, the widget background color is transparent. The transparent area of a widget does not respond to mouse events but instead passes them through to any underlying application.</li>
</ul>

<h2 id="workshop">The widget workshop: hello world!</h2>

<p>OK, with the background out of the way, let’s start coding! Our first widget will be as simple as possible — a “Hello World!” widget. Earlier on we talked about widgets containing CSS, images and JavaScript files. Many do, but at the very least, a widget requires two files:</p>

<ol>
<li>The main document.</li>
<li>The widget configuration file.</li>
</ol>

<p>We will start this tutorial by creating a minimal widget, and then expand the widget into a complete widget with style, and a configuration view.</p>

<h3 id="maindoc">Creating the main document</h3>

<p>First, create an HTML document inside a new directory and call it <code>index.html</code>. This document will be what your users will see when they first load the widget. Add the following code to it, and save the document.</p>

<pre>
<code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Hello World!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;Hello World!&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code>
</pre>

<h3 id="configuration">Creating the widget configuration file</h3>

<p>Next, we’ll show you how to create the widget configuration file, which is needed in order to run your widget. It is always named <code>config.xml</code>, and holds information on certain properties of the widget. The following are some properties the file can contain:</p>

<ul>
<li>The widget’s name. This is required.</li>
<li>The widget’s dimensions. This is the initial viewable area for a widget.</li>
<li>Author information. Feel free to brag.</li>
<li>A unique ID for the widget. This ID is made up of three parts: A hostname, a path and a revision date on the <code>YYYY-MM</code> format (you can also use <code>YYYY-MM-DDDD</code> if you plan on revising the widget more than once a month).  </li>
<li>Security information that provides the widget user with information about which domains the widget will be contacting. Even if this security information is optional, any widget that contacts a third-party service is highly encouraged to include this, since this will establish a trust relationship between you, the widget author, and the widget user.</li>
</ul>

<p>Create the <code>config.xml</code> file in the same directory as your <code>index.html</code>. Add the following code to it, and save it.</p>

<pre>
<code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;
&lt;widget&gt;
  &lt;widgetname&gt;Hello World!&lt;/widgetname&gt;
  &lt;description&gt;Demo widget from the Hello World tutorial.&lt;/description&gt;
  &lt;width&gt;440&lt;/width&gt;
  &lt;height&gt;200&lt;/height&gt;
  &lt;author&gt;
    &lt;name&gt;John Doe&lt;/name&gt;
    &lt;email&gt;john.doe@example.com&lt;/email&gt;
    &lt;link&gt;http://acme-widget.example.com&lt;/link&gt;
    &lt;organization&gt;Acme Examples, Inc.&lt;/organization&gt;
  &lt;/author&gt;
  &lt;id&gt;
    &lt;host&gt;example.com&lt;/host&gt;
    &lt;name&gt;HelloWorld&lt;/name&gt;
    &lt;revised&gt;2008-01&lt;/revised&gt;
  &lt;/id&gt;
&lt;/widget&gt;</code>
</pre>

<h3 id="running">Running your widget for the first time</h3>

<p>Let’s test what we have so far.</p>

<ul>
  <li>Select both the files you have so far, and compress them into a <code>.zip</code> file</li>
  <li>Rename the file, giving it a memorable name and an extension of <code>.wgt</code></li>
  <li>Run your widget by dragging and dropping the <code>.wgt</code> file into your browser window</li>
  <li>Select <em>Install</em></li>
</ul>

<p>you should see something like that shown in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/72-creating-your-first-opera-widget/hello-world-1.png" title="An unstyled Opera Widget appearing on the desktop" alt="An unstyled Opera Widget appearing on the desktop" /></p>

<p class="comment">Figure 2: Running an unstyled Opera widget.</p>

<h3 id="style">Adding style</h3>

<p>In its current form, the widget’s default background color is transparent, and uses regular browser defaults for styling. Let’s spice it up with a little CSS and additional markup.</p>

<p>First, you need to add a stylesheet reference to the HTML document, and add some hooks for styling. Replace what you currently have inside <code>index.html</code> with the following, and save the changes.</p>

<pre>
<code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Hello World!&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style/helloworld.css&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;container&quot;&gt;
      &lt;div id=&quot;header&quot;&gt;
        &lt;h1&gt;Hello World!&lt;/h1&gt;
      &lt;/div&gt;
      &lt;div id=&quot;content&quot;&gt;
        &lt;div id=&quot;front&quot; class=&quot;view&quot;&gt;
          &lt;h2 id=&quot;hellotext&quot;&gt;Welcome to the world of Opera Widgets!&lt;/h2&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div id=&quot;footer&quot;&gt;Powered by Opera&lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code>
</pre>

<div class="note">

<p>The easiest way to make changes to a Widget you have already installed and test it is as follows:</p>

<ul>
  <li>Find where the Widget is installed on your development machine. For example, in Mac OSX it will be in the <em>Applications</em> folder; in Windows it will be in <em>Program Files</em> or <em>C:\Users\[username]\AppData\Local\</em>; in Linux it will be in <em>~/.opera-widgets/usr/share</em>. In the case of this example, you are looking for <q>Hello World!</q>.</li>
  <li>Access the files inside the Widget. This is done in different ways depending on your operating system. For example on Mac OS X, Cmd + Click on the Widget icon and select <em>Show Package Contents</em>. You will be given a finder window containing the package contents: <em>Hello World! &gt; Contents &gt; Resources &gt; Widget &gt; index.html</em>.</li>
  <li>Open the HTML file you wish to edit (e.g. index.html) in your favourite text editor, make the desired changes, and save the file.</li>
  <li>Close the widget and restart it to see the effect your changes have had.</li>
</ul>

</div>

<p>Next it’s time to create a style sheet to style your widget. Create a new folder called <code>style</code> in the same directory as your other files, and create a new file inside it called <code>helloworld.css</code>. Add the following code inside this file and save it.</p>

<pre><code>/** Basic styles **/

body {
  font-family: Verdana, Helvetica, sans-serif;
  font-size: 16px;
}

h1 {
  margin: 0;
  font-size: 1.1em;
  padding: 7px 0 0 10px;
  font-weight: normal;
}

h2{
    font-weight: normal;
    font-size: 1.1em;
    margin: 0px;
}

/** Structure **/

#container {
  width: 429px;
}

#header {
  background-image: url(../images/back_top.png);
  padding: 4px 10px 0px 10px;
  height: 35px;
}

#content {
  background-image: url(../images/back_center.png);
  color: #333;
}

.view{
    padding: 10px 10px 10px 20px;
    height: 60px;
    max-height: 60px;
    max-width: 393px;
    overflow: auto;
    -apple-dashboard-region:dashboard-region(control rectangle 0px 0px 0px 0px);
}

#footer {
  background-image: url(../images/back_bottom.png);
  height: 23px;
  padding: 2px 0 0 20px;
  font-size: 0.6em;
  text-decoration: underline;
  color: #dd2222;
}</code></pre>

<p>You’ll notice that there are several background images referenced inside this style sheet; now you need to add these to our widget folder. The images you need can be found in the <code>/docs/examples/firstwidget</code> directory in the <a href="http://dev.opera.com/sdk/">SDK package</a> — unzip the archive, then grab the images folder contained within it and put it in the same directory as the <code>index.html</code> file.</p>

<p>The styling is now all in place, so try running your widget again, in the same manner as before — it should now look like Figure 3. After this styling is applied, the widget no longer looks bland and unstyled. It now has a background that makes it stand out from the rest of the desktop. The control regions make the center of the widget and any scrollbars clickable without causing the widget to be dragged.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/72-creating-your-first-opera-widget/hello-world-2.png" title="When styling is applied, our widget has nice fonts, backgrounds and shadows." alt="When styling is applied, our widget has nice fonts, backgrounds and shadows." /></p>

<p class="comment">Figure 3: The widget is now styled - much better!</p>

<h3 id="interactivity">Adding interactivity</h3>

<p>You will now have a fully working widget, but there is much farther you can go with it – it does not yet offer any interactivity, and there is no way to configure the widget. Next we will take you through adding a configuration button, which “flips” the widget over.</p>

<p>Open <code>index.html</code> again, replace the contents with the following code, and save it.</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Hello World!&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style/helloworld.css&quot;&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;script/helloworld.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;container&quot;&gt;
      &lt;div id=&quot;header&quot;&gt;
        &lt;div id=&quot;controlbuttons&quot;&gt;
          &lt;button id=&quot;flipbutton&quot; class=&quot;controlbutton&quot; type=&quot;button&quot;&gt;&lt;/button&gt;
          &lt;button id=&quot;closebutton&quot; class=&quot;controlbutton&quot; type=&quot;button&quot;&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;h1&gt;Hello World!&lt;/h1&gt;
      &lt;/div&gt;
      &lt;div id=&quot;content&quot;&gt;
        &lt;div id=&quot;front&quot; class=&quot;view&quot;&gt;
          &lt;h2 id=&quot;hellotext&quot;&gt;Welcome to the world of Opera Widgets!&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div id=&quot;config&quot; class=&quot;view&quot;&gt;
          &lt;h2&gt;Hello World! Configuration&lt;/h2&gt;
          &lt;p&gt;
             &lt;label for=&quot;frontlabel&quot;&gt;Text to display&lt;/label&gt;
             &lt;input id=&quot;frontlabel&quot; type=&quot;text&quot; size=&quot;25&quot;&gt;
             &lt;button id=&quot;updatebutton&quot; type=&quot;button&quot;&gt;Update&lt;/button&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div id=&quot;footer&quot;&gt;Powered by Opera&lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>

<p>The major additions here are:</p>

<ol>
<li>A reference to the script that controls the view flipping, from the main view to the configuration view.</li>
<li>A button for flipping between the front and back of the widget.</li>
<li>A configuration view.</li>
</ol>

<p>Now you need to update the style sheet, and add the JavaScript.</p>

<h4 id="styling">Styling the configuration and buttons</h4>

<p>Add the following style rules to the helloworld.css file below the existing rules, and save the file. These rules hide the configuration view by default and control the look of the buttons.</p>

<pre><code>#config {
  display: none;
}

/** Button styles **/

#controlbuttons {
  float: right;
}

.controlbutton {
  opacity: 0.0;
  overflow: hidden;
  height: 30px;
  width: 30px;
  background-position: left top;
  border: 0;
}

#flipbutton {
  background: transparent url(../images/btn_config.png) scroll no-repeat 0 0;
}

#closebutton {
  background: transparent url(../images/btn_close.png) scroll no-repeat 0 0;
}

/** Button effects **/

#container:hover .controlbutton {
  opacity: 1;
}

#container .controlbutton:hover {
  background-position: 0 50%;
}

#container .controlbutton:active {
  background-position: 0 100%;
}</code></pre>

<p>Now it’s time to test the widget again, to check out the new functionality. Run your widget again as before — it should look like Figure 4.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/72-creating-your-first-opera-widget/hello-world-3.png" alt="Hello World! when hovered" /></p>
<p class="comment">Figure 4: The initial state of the widget when moused over.</p>

<h4 id="behavior">Adding behavior to the buttons</h4>

<p>The next step is to add behavior to the flip button, so that the widget shows its other side when the flip button is clicked or activated. This behavior is controlled by some simple JavaScript, and all you need to do is put it in the right place. Look to the resource zip file you unpacked earlier to find a script folder containing a <code>helloworld.js</code> file. Copy this folder into the same directory as your <code>index.html</code> file.</p>

<p>The contents of the file is as follows:</p>

<pre><code>// define a namespace to hold our widget specific functions,
// avoid polluting the global namespace
var helloWorld = helloWorld || {};

// function for flipping between different sides of the widget
helloWorld.flip = function ( e )
{
    var display = document.getElementById(&#39;front&#39;).style.display;
    if ( display == &#39;block&#39; || display == &#39;&#39; )
    {
        document.getElementById(&#39;front&#39;).style.display = &quot;none&quot;;
        document.getElementById(&#39;config&#39;).style.display = &quot;block&quot;;
    }
    else
    {
        document.getElementById(&#39;config&#39;).style.display = &quot;none&quot;;
        document.getElementById(&#39;front&#39;).style.display = &quot;block&quot;;
    }
}

// initialize the widget

window.addEventListener( &#39;load&#39; , function(ev)
{
    // add behavior to the flip button
    document.getElementById(&#39;flipbutton&#39;).addEventListener(&#39;click&#39;,function(ev){
        helloWorld.flip();
    }, false);

    // add behavior to the close button
    document.getElementById(&#39;closebutton&#39;).addEventListener(&#39;click&#39;,function(ev){
        window.close();
    }, false);

    // add a change handler so that the widget shows whatever we input into the 
    // widget front, flip back to the front when done
    document.getElementById(&#39;updatebutton&#39;).addEventListener(&#39;click&#39;,function(ev){
        document.getElementById(&#39;hellotext&#39;).textContent = 
            document.getElementById(&#39;frontlabel&#39;).value;
        helloWorld.flip();
    },false);

    // set the contents of the text field to the initial value
    document.getElementById(&#39;frontlabel&#39;).setAttribute( &#39;value&#39;,
        document.getElementById(&#39;hellotext&#39;).textContent );
},false);</code></pre>

<p>In this code, we’ve encapsulated the functions specific to the widget in their own object, or namespace. This way the functions are not overriden if they have already been defined. We recommend you stay away from the global namespace as much as possible. The second half of the code is a function that runs when the widget is loaded and sets up the behavior of the buttons and the text field.</p>

<p>Now try running the widget and clicking the configuration button. The widget is flipped so that the reverse side of the widget is visable. This reverse side shows a text input field, which you use to alter the text on the main view of the widget, as shown in Figure 5.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/72-creating-your-first-opera-widget/hello-world-4.png" title="The configuration view for Hello World" alt="The configuration view for Hello World" /></p>
<p class="comment">Figure 5: The widget configuration view.</p>

<h2 id="distributing">Distributing your widget</h2>

<p>At this point in the article, your widget should be complete. The final step you’ll want to take is to package it up, and make it available for others to download and use. There are <a href="http://dev.opera.com/articles/view/packing-and-deploying-your-opera-widget/">instructions available on how to deploy your own widgets here</a>.</p>

<h2 id="summary">Summary</h2>

<p><strong>Congratulations!</strong> You have now finished your first Opera Widget. Now you can move on to personalize this widget, or create and <a href="http://dev.opera.com/articles/view/packing-and-deploying-your-opera-widget/">deploy</a> your own widgets on <a href="http://widgets.opera.com/">widgets.opera.com</a>.</p>

<p>If you would like to examine a complete copy of the widget created in this article, you can view the source code in the <code>/docs/examples/firstwidget</code> directory in the SDK package, or <a href="firstwidget.wgt">download the Hello World!</a>. Click the Launch-button on the download page to run the widget. If you want to save the widget zip-file on your hard drive, right click on the Launch-button and select <code>Save Link As…</code>.</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index" alt="link to the table of contents">Opera Widgets SDK table of contents</a></li>
</ul>  
