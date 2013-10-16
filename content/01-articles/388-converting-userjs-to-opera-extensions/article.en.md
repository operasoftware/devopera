Title: Converting UserJS to Opera Extensions
----
Date: 2010-10-21 09:09:59
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
	
	<p>This is a quickfire guide to converting a <a href="http://www.opera.com/docs/userjs/">UserJS</a> over to an Opera extension. This is a very straightforward process, although there are a few caveats to be aware of, which will be discussed below. We round off the article with a practical example.</p>
	
	<h2>The process</h2>
	
	<ol>
	  <li>First of all, create an empty directory to act as the root directory of the extension.</li>
	  <li>Place your UserJS into an <code>includes</code> folder, inside the root directory — this effectively uses it as an injected script.</li>
	  <li>Create an icon for the extension to use, and place it inside a directory (named something like <code>icons</code>) inside the root directory.</li>
	  <li>Create an appropriate <code>config.xml</code> file and place this inside the root directory)</li>
          <li>Create an empty HTML document and save it as <code>index.html</code> inside the root directory</li>
	  <li>Select all the contents of the root directory, zip them up, and give the file an <code>.oex</code> extension.</li>
	  <li>You now have an extension that should work fine, although you should test and debug it before you upload it to the Opera extensions site.</li>
	</ol>
 
<h2>Caveats</h2>
 
<p>Sometimes the UserJS doesn&#39;t work as an extension, for various reasons. Often it&#39;s because an object is accessed directly — <code>location</code> or <code>opera</code>, for example — although this is simple to fix by accessing them from the <code>window</code> object instead (<code>window.location</code>, <code>window.opera</code>, etc.)
 
<h2>A real world example</h2>
 
<p>To prove how easy it is to convert a UserJS into an Opera extension, here&#39;s an example that will turn you into an extension developer in a matter of minutes. Start the stopwatch!

<h3>Step 1: Find a UserJS</h3>

<p>For this example, we&#39;ll use a topical <a href="http://extendopera.org/userjs/content/html5-video-full-screen">HTML5 video UserJS</a> created by a former intern at Opera, <a href="http://rauscheronline.de">Martin Rauscher</a>. His script enables an HTML5 video to be viewed fullscreen. It goes without saying that you should check the license of any script you intend to use and re-publish. In this case, Martin kindly gave me permission but you could equally use scripts released under an open source or otherwise permissive license.</p>

<h3>Step 2: Create some directories</h3>

<p>Firstly, a home for our extension is needed, eg <code>VideoFullscreen</code>. To comply with the <a href="http://www.w3.org/TR/widgets/">W3C Widget Packaging and Configuration specification</a> we create an empty starting page in here, named <code>index.html</code>. Then we create a sub-directory named <code>includes</code> and into that, we copy our UserJS file (<code>VideoFullscreen.js</code>).</p>

<h3>Step 3: Create an icon</h3>

<p>You could of course lovingly design your own custom icon but in this example we&#39;re being lazy, so let&#39;s head on over to the <a href="http://openiconlibrary.sourceforge.net/">Open Icon Library</a>. There are hundreds of icons available for use although check the license first as some of them require attribution. Of course, it&#39;s always nice to mention the source anyway, and in this case the credit goes to the <a href="http://tango.freedesktop.org/Tango_Icon_Library">Tango project</a> for this <a href="http://openiconlibrary.sourceforge.net/gallery2/?./Icons/actions/view-fullscreen-4.png">icon representing a fullscreen action</a>. Let&#39;s use the 64x64 version as this is the maximum resolution for Opera&#39;s extension manager.</p>

<h3>Step 4: Create a configuration file</h3>

<p>Again, the emphasis is on being lazy, I mean, efficient, so feel free to copy and paste the code below into a blank <code>config.xml</code> file and save it in your extension&#39;s root directory:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
    &lt;name&gt;VideoFullscreen&lt;/name&gt;
    &lt;description&gt;Adds fullscreen capability to every HTML5 video element. Just play the video and then hit SHIFT-ENTER or F11.&lt;/description&gt;
    &lt;author href=&quot;http://rauscheronline.de/&quot;&gt;Martin Rauscher (ported by Daniel Davis)&lt;/author&gt;
    &lt;icon src=&quot;VideoFullscreen.png&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>Remember to change all the details to match your particular extension and give yourself credit as well as the original author.</p>

<h3>Step 5: Make an index.html</h3>

<p>Make an index.html, which can be blank. If you don&#39;t, your extension won&#39;t install. If you drag the config.xml into Opera and the textual content of the file is shown, rather than your extension installed in <a href="http://dev.opera.com/articles/view/opera-extensions-developer-workflow/#developermode">extension developer mode</a>, that&#39;s a sign that you&#39;ve forgotten this step.</p>

<h3>Step 6: Wrap it up</h3>

<p>The last step is to package it - select the <code>icons</code> and <code>includes</code> directories and the <code>index.html</code> and <code>config.xml</code> files and zip them them up. Finally, change the file extension to <code>.oex</code> - eg our <code>VideoFullscreen.zip</code> becomes <code>VideoFullscreen.oex</code> - that&#39;s it! It&#39;s ready to be installed by dragging it to the Opera desktop browser.</p>

<h3>Step 7: Tweaking and bugfixing</h3>

<p>Despite the original UserJS working well, your new extension may not. It&#39;s a good idea to check the error console before anything else, but in most cases the problem could be due to the environment structure of Opera extensions, meaning we have to be more specific about some objects we use. In the case of <code>VideoFullscreen.js</code>, the <code>addEventListener()</code> method is used a few times but it&#39;s not specified what object we&#39;re attaching these events to. The UserJS environment assumes <code>window</code>, which is correct, but the Opera extension environment is more complex so we have to specify <code>window</code>, as in the code below:</p>

<pre><code>window.addEventListener(&#39;DOMContentLoaded&#39;,init,false);
window.addEventListener(&#39;DOMContentLoaded&#39;,function(){
	document.getElementsByTagName(&quot;body&quot;)[0].addEventListener(&#39;keydown&#39;,keyDownHandler,false);
},false);
window.addEventListener(&#39;DOMNodeInserted&#39;,init,false);
</code></pre>

<p>While we&#39;re delving into the code, we could also look for areas to improve. In the case of this script, we could make the following change to make it slightly more efficient:</p>

<pre><code>// Change this:
document.getElementsByTagName(&quot;body&quot;)[0].addEventListener(&#39;keydown&#39;,keyDownHandler,false);

// to this:
document.body.addEventListener(&#39;keydown&#39;,keyDownHandler,false);
</code></pre>

<p>We have a detailed article on <a href="http://dev.opera.com/articles/view/efficient-javascript/">writing efficient JavaScript</a> which is recommended reading for speeding up not just your extension but web pages and applications too.</p>

<h3>Step 8: Releasing it into the wild</h3>

<p>Now we&#39;ve converted it, tested it and tweaked it, we&#39;re ready to show it off. We can do this by uploading it to <a href="http://addons.labs.opera.com">addons.labs.opera.com</a> and telling the world. The extension we made in this tutorial can be found there, or alternatively you can download it here: <a href="VideoFullscreen.oex">VideoFullscreen Opera extension</a>. After installing it, you can try it out by finding a page that contains HTML5 video, such as <a href="http://people.opera.com/brucel/demo/video/accessible-html5-video-captions.html">this educational video by Bruce Lawson</a>, and after clicking play, press F11. In an upcoming article we&#39;ll look at dealing with the trauma of seeing Bruce Lawson in fullscreen but until then, we look forward to seeing your extensions, both converted and newly created.</p></p></p>
