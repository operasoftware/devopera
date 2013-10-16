Title: Opera Mini Widgets: an introductory tutorial
----
Date: 2010-12-01 15:20:30
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

        <p class="note">Note: the ability to run Opera Mini widgets on your phone is a B2B product delivered only to Vodafone at this time.</p>

<h2>Introduction</h2>

<p>Opera Mini widgets - like web pages viewed in Opera Mini - are rendered on the server. In other words, when the user accesses a widget&#39;s URL, it&#39;s installed not on the client device but completely on the server. A small binary file is then sent to the user for viewing. This provides great performance benefits but from a developer&#39;s point of view, one of the trade-offs is that JavaScript support is slightly more limited than with client-side widgets and web applications. For this reason, it&#39;s best to develop a simple widget to start with and gradually add functionality for the best user experience.</p>

<p>Opera Mini widgets use the <a href="http://www.w3.org/TR/widgets/">W3C Widget Packaging and Configuration specification</a>, which means they can consist of HTML, CSS and JavaScript files, image files and other assets, and a configuration file in XML format. The only files that are essential in a widget are this configuration file, called <code>config.xml</code>, and a starting page, usually called <code>index.html</code>. All other files can be created and placed in directories as you wish, just as with a regular website, so the file structure of a typical widget will look something like figure 1:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/413-opera-mini-widgets-an-introductory-tutorial/Opera-Mini-Widgets_file-structure.png" alt="Opera Mini Widgets file structure" /></p>
<p class="comment">Figure 1: Opera Mini Widgets file structure.</p>

<p>In this tutorial, we&#39;re going to make a basic &quot;Hello, world!&quot; widget. Its functionality will be very simple but it will demonstrate how to create a flexible widget that will display nicely on a variety of screen sizes - an important consideration as internet-connected devices become more and more popular and varied. Our starting point will be the two essential widget files, as mentioned above.</p>

<h2>Your configuration file</h2>

<p>For our widget&#39;s configuration file, we can use the <a href="http://www.w3.org/TR/widgets/#example-configuration-document">example in the W3C specification</a> as a template. There are several non-essential items we can remove for simplicity, so, with a few details updated, we end up with this:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
  id=&quot;http://www.opera.com/exampleWidget&quot;
  version=&quot;1.0&quot;
  height=&quot;208&quot;
  width=&quot;176&quot;
  viewmodes=&quot;fullscreen&quot;&gt;

  &lt;name short=&quot;Example&quot;&gt;
    Example Widget
  &lt;/name&gt;

  &lt;description&gt;
    A simple example of an Opera Mini Widget.
  &lt;/description&gt;

  &lt;author href=&quot;http://www.opera.com/&quot;&gt;Opera Software&lt;/author&gt;

  &lt;icon src=&quot;images/icon_128.png&quot; width=&quot;128&quot; height=&quot;128&quot;/&gt;
  &lt;icon src=&quot;images/icon_64.png&quot; width=&quot;64&quot; height=&quot;64&quot;/&gt;
  &lt;icon src=&quot;images/icon_32.png&quot; width=&quot;32&quot; height=&quot;32&quot;/&gt;
  &lt;icon src=&quot;images/icon_16.png&quot; width=&quot;16&quot; height=&quot;16&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>As you can see, we have simply added details such as a name and description of the widget, as well as specifying an icon. In this case we&#39;re using a PNG file I created with the <a href="http://widgets.opera.com/widget/17371/">Icon Creator desktop widget</a>, although any graphics software could be used. You can also specify a number of icon sizes in descending order to ensure the best resolution is chosen for display.</p>

<p>When you are done with your configuation file, you should save it in an empty directory somewhere on your hard drive as <code>config.xml</code>.</p>

<p class="note">As part of our Widgets SDK we have an informative article on <a href="http://dev.opera.com/articles/view/custom-opera-widget-icons/">how to create icons in different sizes</a>.</p>

<h2>Your starting page</h2>

<p>If you choose a name other than <code>index.html</code> for your starting page you must specify the name in the <code>config.xml</code> file using a <code>content</code> element, like so:

<pre><code>&lt;content src=&quot;start-page.html&quot;/&gt;</code></pre>

<p>Therefore, simply creating a file called <code>index.html</code> is recommended for simplicity. For simplicity we&#39;re going to use HTML5, but of course XHTML and HTML 4 are also acceptable. There is nothing special about this file - it&#39;s just a basic web page. As this is a gentle introduction, we&#39;re going to display a simple message to the user:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;style/HelloWorld.css&quot;&gt;
  &lt;title&gt;Hello World Widget&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Example Widget&lt;/h1&gt;
  &lt;/header&gt;
  &lt;div id=&quot;main&quot;&gt;
    &lt;p&gt;Hello, widget world!&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p class="note">As we&#39;re working with client-side web languages, we can use a browser to test and debug our widget initially. This also gives us the advantage of being able to use Opera Dragonfly, which is a development tool built-in to the Opera desktop browser. Once we have a working widget we can then fine-tune it on a mobile device before packaging it.</p>

<p>When you are done with your index file, save it in the same directory as your <code>config.xml</code> file.</p>

<h2>Making it look like a widget</h2>

<p>At this stage we have the basis of a widget but we should add a bit of CSS magic to make it look more appealing and usable. This is no different to the CSS you use in your websites which means that, like a website, you have to adapt to a variety of screen sizes. One way to approach this is to create a stylesheet for a minimum expected resolution and then use JavaScript to detect the available screen size and consequently edit the necessary CSS styles.</p>

<p>Alternatively, if you want to avoid JavaScript you could use use CSS3 media queries, which apply certain styles depending on the user&#39;s screen. This is explained in detail in our article covering <a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#layout">cross-device development techniques</a>. In this example, however, we&#39;re going to continue to keep things simple and make our CSS as naturally adaptive as possible. Things to remember when doing this are:</p>

<ul>
  <li>Try to avoid using fixed font sizes. Use <code>em</code> values instead.</li>
  <li>Try to avoid using fixed values for width and height properties. Percentages are better.</li>
  <li>Avoid unnecessary images, particularly for buttons where a <code>button</code> element is better and can be styled to match your design.</li>
</ul>

<p>Based on this, here&#39;s a sample CSS file that should work well on any size of screen. See Figure 2 for a screenshot of how it actually looks on a mobile device:</p>

<pre><code>* {
  margin:0;
  padding:0;
}

body {
  background:#ccc;
  color:#000;
  font-family:helvetica, arial, sans-serif;
}

header {
  background:#789;
  border-bottom:solid 1px #333;
  color:#fff;
  display:block;
  padding:10px;
  text-shadow:0px -1px 1px #333;
}

#main {
  background:#fff;
  border:solid 1px #999;
  margin:10px;
  padding:10px;
}</code></pre>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/413-opera-mini-widgets-an-introductory-tutorial/Opera-Mini-Widgets_css-only.png" alt="Our example widget before and after applying CSS." /></p>
<p class="comment">Figure 2: Our example widget before and after applying CSS.</p>

<p class="note">Note: you can put your stylesheet anywhere you like inside the Widget directory, but the preferred convention is to put it inside a <code>style</code> directory.</p>

<p>Download the widget so far: <a href="HelloWorld_basic.wgt">HelloWorld_basic.wgt</a></p>

<h2>Adding some interactivity</h2>

<p>As good as HTML and CSS are, we want to make our Widget appear more interactive to our users, so we need to add some JavaScript. As mentioned earlier, there are some restrictions when pre-rendering widgets on a server but we are still able to use things like <code>onclick</code> and <code>onchange</code> events, <code>setInterval</code> timers and on-the-fly editing of styles and content. We&#39;ll use the latter in this example to create a button that shows an about page.</p>

<p>First, we&#39;ll continue editing our start page to add a button, some extra content and a link to the JavaScript file we&#39;re going to write - <code>index.html</code> now looks like this:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;style/HelloWorld.css&quot;&gt;
  &lt;script src=&quot;scripts/HelloWorld.js&quot;&gt;&lt;/script&gt;
  &lt;title&gt;Hello World Widget&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Example Widget&lt;/h1&gt;
    &lt;button id=&quot;btn_header&quot;&gt;About&lt;/button&gt;
  &lt;/header&gt;
  &lt;div id=&quot;main&quot;&gt;
    &lt;p&gt;Hello, widget world!&lt;/p&gt;
  &lt;/div&gt;
  &lt;div id=&quot;about&quot;&gt;
    &lt;p&gt;Created by &lt;a href=&quot;http://www.opera.com/&quot;&gt;Opera Software&lt;/a&gt;.&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>In our CSS, not only do we need to style the button so that it suits the design, but we should also hide the text in our about page. This will be displayed later with JavaScript when the user clicks the button. The latest version of <code>HelloWorld.css</code> looks like this:</p>

<pre><code>* {
  margin:0;
  padding:0;
}

body {
  background:#ccc;
  color:#000;
  font-family:helvetica, arial, sans-serif;
}

a {
  color:#c00;
}

header {
  background:#789;
  border-bottom:solid 1px #333;
  color:#fff;
  display:block;
  padding:10px;
  text-shadow:0px -1px 1px #333;
}

header h1 {
  display:inline;
}

#btn_header {
  background:#667;
  color:#fff;
  float:right;
  padding:0.1em;
  text-shadow:0px -1px 1px #333;
  width:4em;
}

#main, #about {
  background:#fff;
  border:solid 1px #999;
  margin:10px;
  padding:10px;
}

#main {
  display:block;
}

#about {
  display:none;
}</code></pre>

<p>The missing step is the JavaScript, so let&#39;s look at this bit by bit. Firstly, we get the relevant elements from the DOM:</p>

<pre><code>var main = document.getElementById(&#39;main&#39;);
var about = document.getElementById(&#39;about&#39;);
var btn_header = document.getElementById(&#39;btn_header&#39;);</code></pre>

<p>The next part is easy - we just add an event listener to the button that will fire a <code>flip()</code> function when it&#39;s clicked:</p>

<pre><code>btn_header.addEventListener(&#39;click&#39;, flip, false);</code></pre>

<p>Lastly we create the <code>flip()</code> function and use it to show and hide both the main page and the about page. To keep the code clean I&#39;ve made separate functions to display each page and change the text on the button:</p>

<pre><code>function showMain() {
  about.style.display = &#39;none&#39;;
  main.style.display = &#39;block&#39;;
  btn_header.textContent = &#39;About&#39;;
}

function showAbout() {
  about.style.display = &#39;block&#39;;
  main.style.display = &#39;none&#39;;
  btn_header.textContent = &#39;Back&#39;;
}

function flip() {
  if (main.currentStyle.display === &#39;block&#39;) {
    showAbout();
  } else {
    showMain();
  }
}</code></pre>

<p>Putting it all into a file which we&#39;ll call <code>HelloWorld.js</code> and making sure it executes after the widget has loaded, we have this:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  var main = document.getElementById(&#39;main&#39;);
  var about = document.getElementById(&#39;about&#39;);
  var btn_header = document.getElementById(&#39;btn_header&#39;);
	
  function showMain() {
    about.style.display = &#39;none&#39;;
    main.style.display = &#39;block&#39;;
    btn_header.textContent = &#39;About&#39;;
  }
	
  function showAbout() {
    about.style.display = &#39;block&#39;;
    main.style.display = &#39;none&#39;;
    btn_header.textContent = &#39;Back&#39;;
  }
	
  function flip() {
    if (main.currentStyle.display === &#39;block&#39;) {
      showAbout();
    } else {
      showMain();
    }
  }
	
  btn_header.addEventListener(&#39;click&#39;, flip, false);
}, false);</code></pre>

<p class="=&quot;note&quot;">Note: As you may have guessed, the preferred convention for storing your scripts is to put them inside a <code>script</code> directory.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/413-opera-mini-widgets-an-introductory-tutorial/Opera-Mini-Widgets_about-page.png" alt="Our example widget showing the about page." /></p>
<p class="comment">Figure 3: Our example widget showing the about page.</p>

<p>Excellent! Figure 3 shows the about page of our widget, which now has a flexible design and basic interactivity. Our configuration file is ready so we can finally turn it into a widget. Packaging is straightforward - we just zip up the files and directories we have created and then rename the resulting file with a <code>.wgt</code> extension. Our widget is complete!</p>

<p>Download the finished widget here: <a href="HelloWorld.wgt">HelloWorld.wgt</a> - try loading this article in Opera Mini and then following this link to see how it works in Opera Mini! Functionally, there is no difference between Opera Mini Widgets and any other W3C Widgets - it is just that the widgets are run on the server in the case of Mini, whereas they run on the client in other browsers.</p>

<p>If you are building up the widget yourself, now is the time to zip it up, change the file extension to <code>.wgt</code>, and test it out by making it available on the web somewhere, and pointing Opera Mini to its URL.</p>

<p class="note">Note: You need to make sure you zip up your widget so that the files and directories that comprise it are in the root of the zip, and not inside a folder. To ensure this, make sure that you zip up the files inside your widget directory, and not the directory itself. Subtle, but it makes all the difference.</p>

<h2>A word about the mobile development environment</h2>

<p>I suggested earlier developing the widget initially in a desktop version of Opera. While this is convenient, it is no substitute for testing on hardware actually running Opera Mini. For this, using Opera Unite as a temporary web server is extremely effective and saves time compared to uploading your files to an external server. The steps are as follows:</p>

<ol>
  <li>In the Opera desktop browser, start the <a href="http://unite.opera.com/application/192/">Opera Unite Web Server application</a>.</li>
  <li>In the <code>properties</code> dialog box, specify the local directory that contains your widget.</li>
  <li>Either set or remove the password for the web server, as you prefer.</li>
  <li>In the Opera Mini browser, open the web server URL. This can be found in the right-hand side of the web server admin page.</li>
  <li>Opera Mini should recognise the <code>config.xml</code> file in your development directory and automatically load your files as a widget. To see any changes you make, simply reload the page in Opera Mini as you normally would.</li>
</ol>

<h2>Summary</h2>

<p>I hope this has provided you with a foundation from which to develop, test and debug Opera Mini widgets. The example here is simple but demonstrates several key concepts, enabling you to use the example widget as a basic template to build upon and add features to. You can find many more tutorials and resources to help you on your way in the <a href="http://dev.opera.com/articles/view/opera-widgets-sdk/">Opera Widgets SDK</a>.</p>
  </p>
