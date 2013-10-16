Title: Opera Mini and JavaScript
----
Date: 2012-08-31 14:44:52
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

    <p><a href="http://www.opera.com/mobile/download/">Opera Mini</a> is one of the world&#39;s foremost mobile browsers, which runs on a range of devices and operating systems ranging from expensive smart phones and tablets to less expensive feature phones that are in common use across many parts of the world. In July 2012, there were <a href="http://www.opera.com/smw/2012/07/#growth">187 million Opera Mini users</a>, an increase of 50% over July 2011. Opera Mini is growing strongly on smart phones; in the same period, the share of Opera Mini smartphone users in <a href="http://www.opera.com/smw/2012/07/">Asia Pacific countries</a> increased from 9% to 32%; in Indonesia, the increase was more than 460%. (Our monthly <a href="http://www.opera.com/smw/">State Of the Mobile Web reports</a> give the latest statistics for different territories, lists of top ten handsets and websites.)</p>

    <p>Much of the reason for Mini&#39;s popularity is that it is capable of rendering complex web pages, even on low-spec devices. It does this by using a proxy-based architecture (see Figure 1). Requests from the user&#39;s handset pass through the carrier&#39;s internet gateway on their way to Opera&#39;s transcoding servers. These servers then forward the request to the server.</p>

        <p><img src="http://forum-test.oslo.osa/kirby/content/articles/777-opera-mini-and-javascript/opera-mini_architecture.png" alt="Opera Mini requests pass through Opera&#39;s servers" /></p>
        <p class="caption">Figure 1: Opera Mini&#39;s architecture.</p>

    <p>The server sends the response back as normal — when this is received by the Opera transcoding servers, they parse the markup and styles, execute the JavaScript, and transcode the data into Opera Binary Markup Language (<abbr>OBML</abbr>). This OBML data is progressively loaded by Opera Mini on the user&#39;s device. Think of it as an interactive snapshot of a document&#39;s state, which is similar in form to a PDF.</p>

<p class="note">Note: Opera Mini versions older than 5.0 do not support progressive loading of OBML content; the page loads will seem slower and more sluggish on older devices.</p>

    <p>OBML is great for users and carriers; it sends less data &#8212; up to 90% less &#8212; over the network. But there is a downside for developers: JavaScript can behave in unexpected ways. In the course of this article we&#39;ll discuss what this means for your development, but first, let&#39;s look at how to <a href="#development">create a test environment</a>, and <a href="#detectingmini">detect Opera Mini</a>.</p>

<p class="note">Note that in general I use &#8216;JavaScript&#8217; interchangeably with &#8216;DOM scripting&#8217; in this article. I&#39;ve used more precise terms such as &#8216;DOM events&#8217; where appropriate.</p>

<h2 id="development">Setting up a testing environment Using MicroEmulator</h2>

<p>Unlike <a href="http://www.opera.com/developer/tools/mobile/" target="_blank">Opera Mobile</a>, Opera Mini does not have a standalone emulator, and it can be tedious to switch between a device and a computer during development. Fortunately, you can use <strong>MicroEmulator</strong>, an LGPL licensed <abbr title="Java 2.0, Mobile Edition">J2ME</abbr> environment to run your own instance of Opera Mini on your desktop machine. To use MicroEmulator, make sure you have Java installed first, and then:</p>

    <ol>
	    <li><strong><a href="http://code.google.com/p/microemu/downloads/list">Download MicroEmulator</a></strong> and unzip it to a location of your choice.</li>
	    <li><strong>Download the Opera Mini package</strong>, and save it somewhere memorable. Go to the <a href="http://m.opera.com/">Opera for mobile devices</a> download site and select the <em>Download Opera Mini 7</em> link to give you a JAD installer file.</li>
        <li><strong>Run microemulator.jar</strong>, then at the start-up screen, choose <em>File &#x2192; Open MIDlet File</em> from the menu (see Figure 2) and select the Opera Mini JAD file.</li>
        <li><strong>Click <em>Start</em>.</strong> Opera Mini will load as it would on a mobile device.</li>
    </ol>

   <p><img src="http://forum-test.oslo.osa/kirby/content/articles/777-opera-mini-and-javascript/opera-mini_microemulator.png" alt="MicroEmulator screen shot." /></p>
   <p class="caption">Figure 2: How to start an Opera Mini instance with MicroEmulator.</p>
  
  <p class="note">Note: If opening the JAD file in the MicroEmulator doesn&#39;t work, you can access the Opera Mini JAR file directly, as follows: open the JAD file with a text editor, find the <em>MIDlet-Jar-URL:</em> line, then copy the URL from that line and enter it into your browser to allow you to directly download the Opera Mini JAR file. Now try selecting this file using the MicroEmulator.</p>

  <p>MicroEmulator offers two modes:</p>
   <ul>
   		<li>Default device emulator, which mimics the behavior of a feature phone</li>
   		<li>Resizable device (shown above), which does not provide dial pad emulation, but offers a larger screen.</li>
    </ul>

    <p>You can select which mode you&#39;d like to use under Options &#x2192; Select device.</p>

<h2 id="detectingmini">Detecting Opera Mini</h2>

    <p>99% of the time, you should use <a href="http://dev.opera.com/articles/view/using-capability-detection/">feature detection</a> to determine whether a browser supports a particular feature or API. Yet sometimes browser sniffing is the right choice. There are two approaches you can take to detect Opera Mini. You can:

    <ul>
	    <li>Examine the <strong>user agent string</strong></li>
	    <li>Check for the presence of the <strong><code>operamini</code> object</strong></li>
    </ul>

	<h3>Using the user agent string</h3>

    <p>As with most browsers, Opera Mini identifies itself through the <code>navigator</code> object, and its <code>userAgent</code> property. Its user agent string adheres to the following pattern:</p>

<pre><code>Opera/9.80 ($PLATFORM; Opera Mini/$CLIENT_VERSION/$SERVER_BUILD; U; $CLIENT_LANG) Presto/$PRESTO_VER Version/$OPERA_VER</code></pre>

	<p>To detect whether a particular request is (presumably) from Opera Mini, check for the presence of <code>Opera Mini</code> in the user agent string. An example follows.</p>

<pre><code>var isOperaMini = (navigator.userAgent.indexOf(&#39;Opera Mini&#39;) &gt; -1);</code></pre>

	<h3>Detecting Opera Mini using the <code>window.operamini</code> property</h3>

    <p>Opera Mini also includes an <code>operamini</code> object as a property of the <code>window</code> object. To check for the presence of this object, use the following code.</p>

    <pre><code>var isOperaMini = Object.prototype.toString.call(window.operamini) === &quot;[object OperaMini]&quot;</code></pre>

<h3>Determining the corresponding desktop version</h3>

<p>Unfortunately, <code>navigator.appVersion</code> is not an accurate way to determine which version of Opera you&#39;re using (<a href="http://dev.opera.com/articles/view/opera-ua-string-changes/">here&#39;s why</a>). Instead, you&#39;ll need to parse the value of the <code>navigator.userAgent</code> string. An example using <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/RegExp">regular expressions</a> is shown below.</p>

<pre><code>var operaVersion = navigator.userAgent.match(/Version\/([1-9]+\.[0-9]{2})/)[1];</code></pre>

<p class="note">Again, in the vast majority of cases, you should <strong>use feature detection</strong> rather than user agent sniffing.</p>

<h2>What to know about JavaScript in Opera Mini</h2>

<p>There are two guiding principles to keep in mind when developing JavaScript with Opera Mini in mind.</p>

<ul>
	<li>Everything requires user interaction.</li>
	<li>Everything requires a server round-trip.</li>
</ul>

<p>As mentioned above, an OBML document is more like an interactive image of a document at a particular state. During the transcoding process, JavaScript is executed by the server. If a script continues to run, it will be paused before being sent to the user&#39;s device. In other words, animations won&#39;t work well, if at all.</p>

<p>In addition, links, buttons and most elements with a mouse event listener are <strong>transformed into hotspots</strong>. When a user clicks or taps on such a hotspot, it triggers a server request. If the hotspot has an event listener attached, its handler will be called during that request, and executed by the server.</p>

<p>How does that work in practice? Let&#39;s explore click and form events.</p>

<h3>Click events in Opera Mini</h3>

<p>In desktop versions of Opera (and mobile versions with trackball type controls available), the <code>mouseover</code> and <code>mouseenter</code> events are fired after the user hovers over an object, but before the user clicks it. When the user presses the mouse button, a <code>mousedown</code> event is fired, followed by a <code>mouseup</code> event when the button is released and then a <code>click</code> event. When the user moves the mouse away from the object, the browser will fire <em>mouseout</em> and <em>mouseleave</em> events.</p>

<p>In Opera Mini, the <code>mouseover</code>, <code>mousedown</code>, <code>mouseup</code>, and <code>click</code> events are all fired at once, after the user engages with a clickable hotspot (see Figure 3, and <a href="javascript-opera-mini-fig3.html">view my click events example</a>). Note that the <strong><code>mouseenter</code>, <code>mouseleave</code> and <code>mouseout</code> events are never fired</strong>.</p>

       <p><img src="http://forum-test.oslo.osa/kirby/content/articles/777-opera-mini-and-javascript/opera-mini_mouse-events.png" alt="How mouse events work in Opera Mini" /></p>
       <p class="caption">Figure 3: How mouse events work in Opera Mini (<a href="http://www.youtube.com/watch?v=mp5IFTPhV20" title="a video showing how mouse events work in Opera Mini">view a video</a>).</p>

<h3>Form events in Opera Mini</h3>

<p>In a similar fashion, form fields can receive <code>focus</code>, <code>click</code>, <code>change</code>, and <code>blur</code> events, in that order. However, these events will only be triggered after the user has changed the value of a field (see Figure 4, and view my <a href="javascript-opera-mini-fig4.html">form events example</a>).</p>

       <p><img src="http://forum-test.oslo.osa/kirby/content/articles/777-opera-mini-and-javascript/opera-mini_form-events.png" alt="How form events work in Opera Mini" /></p>
       <p class="caption">Figure 4: How form events work in Opera Mini (<a href="http://www.youtube.com/watch?v=DWbr3cV9hbg" title="a video showing how form events work in Opera Mini">view a video</a>).</p>

<p>Unlike desktop browsers, <code>focus</code> and <code>blur</code> events <strong>only apply to form input elements</strong> in Opera Mini. The <code>click</code> event is the only mouse event supported for <code>input</code> elements.</p>

<p>As you may have noticed in the examples above, any time the state of the document changes &#8212; any time a repaint or reflow needs to occur &#8212; Opera Mini must make a request to the transcoding server.</p>

<h3>JavaScript execution limits</h3>

<p>Opera Mini servers usually execute JavaScript quickly. Scripts that consume too much memory, however, will be killed. As with any JavaScript development, your goal should be to construct scripts as efficiently as possible.</p>

<p>Some JavaScript and DOM operations have absolute timeouts. When reached, <strong>the script is paused</strong> by the server, as mentioned above.</p>

<h4><code>setTimeout</code> and <code>setInterval</code></h4>

<p><code>setTimeout</code> and <code>setInterval</code> are subject to the following timeout limits:</p>

    <ul>
    	<li>Opera Mini 5.0+:&#8776;5 seconds</li>
    	<li>Opera Mini 4.x: &#8776;2.5 seconds</li>
    </ul>

    <p>This means that if you use <code>setInterval</code> to invoke a function, it will be called a <b>maximum</b> of <em>n</em> times where <em>n</em> is the quotient of the timeout divided by the interval. If the interval is 1000 milliseconds, the function will be executed a maximum of five times (in newer versions of Opera Mini) before the entire script is paused (5000 &#247; 1000 = 5). If the interval is 5000 milliseconds, it will be executed no more than once before pausing.</p>

    <p><code>setTimeout</code>, obviously, works a bit differently. If the timeout value is greater than 5000 milliseconds &#8212; give or take a few milliseconds &#8212; the function will not be executed unless the user interacts with the document. Your best bet is to set the smallest timeout value necessary.</p>

    <p>In both cases, the timeout limit begins when the page starts to load.</p>

    <h4><code>XMLHttpRequest</code> timeouts</h4>

    <p><code>XMLHttpRequest</code> is also supported by Opera Mini. Timeout limits are as follows:

    <ul>
        <li>Opera Mini 5.0+: &#8776;5 seconds</li>
        <li>Opera Mini 4.x: &#8776;2.5 seconds</li>
    </ul>


    <p>As with <code>setInterval</code>, if an XHR request exceeds the timeout, the script will be paused as it&#39;s transcoded.</p>

    <h4>Restarting paused scripts</h4>

    <p><strong>What does a paused script look like?</strong> Have a look at my <a href="http://www.youtube.com/watch?v=VnleANWlomI">video example of a paused script being restarted</a>. Here we are using <code>setInterval</code> to change the background color of an object every 50 milliseconds. When the timeout limit is reached, the color will stop changing as the state of the script pauses.</p>

<p>It&#39;s possible to <strong>un-pause</strong> a script, however, with the help of a user-initiated event. Let&#39;s examine the JavaScript code used to create the animation in the video.</p>

<pre id="unpausingascript" class="javascript"><code>var box = document.getElementById(&#39;box&#39;),
    update = document.getElementById(&#39;valofnewcol&#39;),
    start = 0;

changecolor = function(element, degreeshift, update){
  var newcol = (start * degreeshift)/360 &lt;&lt; 8,
    col = &#39;hsl(&#39;+newcol+&#39;,100%,50%)&#39;,
    coltxt = document.createTextNode(col),
    anim,
    restart;

  element.style.background = col;
  start++;

  if(update.firstChild){
    update.replaceChild( coltxt, update.firstChild );
  } else {
    update.appendChild( coltxt );
  }
}

anim = setInterval(changecolor, 50, box, 45, update);

// Unpauses the interval.
restart = function(){
  // This can be an empty function.
}
box.addEventListener(&#39;click&#39;, restart, false);</code></pre>

<p>The last few lines of this script add a <code>click</code> event listener to the <code>box</code> object. When the box object receives a <code>click</code> event, the interval will resume. (<a href="javascript-opera-mini-fig5.html">view my animation example running live</a>.)</p>

<p class="note">As mentioned before, Opera Mini versions 5.0 and upwards support progressive loading, meaning data is sent to the client in chunks as it is transcoded. This is not true of Opera Mini 4, which is why its timeouts are shorter.</p>

<h3 id="unsupporteddom">Unsupported DOM events</h3>

<p>Mini supports DOM events, but only a subset. Much of this is dictated by hardware; some phones lack keyboards, for example. Below is a table of events and event attributes supported in Opera desktop or Opera Mobile that Opera Mini does not support.</p>

<table id="unsupportedbymini">
    <thead>
        <tr>
            <th>Event name</th>
            <th>Event attribute</th>
	    </tr>
    </thead>

    <tbody>
         <tr>
            <td><code>contextmenu</code></td><td><code>oncontextmenu</code></td>
	    </tr>
        <tr>
            <td><code>dblclick</code></td><td><code>ondblclick</code></td>
	    </tr>
        <tr>
            <td><code>error</code></td><td><code>onerror</code></td>
	    </tr>
	    <tr>
            <td><code>keydown</code></td><td><code>onkeydown</code></td>
	    </tr>
        <tr>
            <td><code>keypress</code></td><td><code>onkeypress</code></td>

	    </tr>
        <tr>
            <td><code>keyup</code></td><td><code>onkeyup</code></td>
	    </tr>
  	    <tr>
            <td><code>mousemove</code></td><td><code>onmousemove</code></td>
	    </tr>
	    <tr>
            <td><code>mouseenter</code></td><td><code>onmouseenter</code></td>
        </tr>
        <tr>
            <td><code>mouseleave</code></td><td><code>onmouseleave</code></td>
        </tr>
	    <tr>
            <td><code>mouseout</code></td><td><code>onmouseout</code></td>
        </tr>

	    <tr>
            <td><code>mousewheel</code></td><td><code>onmousewheel</code></td>
        </tr>
	    <tr>
            <td><code>resize</code></td><td><code>onresize</code></td>
	    </tr>
	    <tr>
            <td><code>scroll</code></td><td><code>onscroll</code></td>
	    </tr>
	    <tr>
            <td><code>touchcancel</code></td><td><code>ontouchcancel</code></td>
	    </tr>
	    <tr>
            <td><code>touchend</code></td><td><code>ontouchend</code></td>
	    </tr>
	    <tr>
            <td><code>touchmove</code></td><td><code>ontouchmove</code></td>
	    </tr>
	    <tr>
            <td><code>touchstart</code></td><td><code>ontouchstart</code></td>
	    </tr>
    </tbody>
</table>


<p>As you can see, <strong>key events</strong> such as <code>keypress</code> and <code>keyup</code> are not supported. Neither are <code>touch</code> and <code>scroll</code> events.</p>

<p>At this time, the <code>unload</code> event and the <code>onunload</code> event attribute are poorly supported across Opera products. Though feature detection can be used to indicate support, the current implementation does not perform as it should.</p>

<h3 id="unsupportedtechniques">Unsupported techniques and APIs</h3>

<p>The DOM methods, techniques, and HTML5 APIs that in this section are not supported in Opera Mini as of version 7.0.</p>

<h4>Opening and closing windows</h4>

<p>Opera Mini also doesn&#39;t support using JavaScript to open new windows (such as <code>window.open()</code>). If you use <code>window.open()</code> to launch a new window, Opera Mini will instead load that page as a new &#39;screen.&#39; It will not open a new window or tab. Similarly, because a new window was never opened, <code>window.close()</code> will not work. (This is also true of the <code>target</code> attribute of HTML.)</p>

<h4>Offline storage APIs</h4>

<p>Since Opera Mini&#39;s client-server architecture requires it to be online, it shouldn&#39;t come as a surprise that Opera Mini doesn&#39;t support offline storage <abbr title="Application Programming interface">API</abbr>s.</p>

<p>Supporting local databases presents performance and scalability challenges since data would have to be stored on the server rather than client-side. Writing or reading data would require server round trips. Applications that rely on <code>localStorage</code>, <code>sessionStorage</code>, Application Cache, or client-side databases will not work for Opera Mini. Use server-side storage instead.</p>

<h4>Web Workers</h4>

<p>For scalability and performance reasons, Web Workers have been disabled in recent versions of Opera Mini, despite support in the corresponding desktop versions of Opera.</p>

<h4>Native client-side form validation</h4>

<p>Current versions of Opera desktop and Opera Mobile support <a href="http://dev.opera.com/articles/view/new-form-features-in-html5/">HTML5 form features</a>, including validation. Opera Mini, at this time, does not support them. Developers must still use JavaScript for client-side validation, and newer type attribute values such as <code>range</code> and <code>email</code> default to the <code>text</code> type in Opera Mini. However, you can still use selectors such as <code>input[type=range]</code> in your CSS and with the <a href="http://www.w3.org/TR/selectors-api2/">Selectors API</a>.</p>

<p>You may also set attributes such as <code>min</code>, <code>max</code> and <code>pattern</code>, and use the <code>getAttribute()</code> method to retrieve those values for your validation script. Another option is to just rely solely on server-side validation &#8212; something you probably have and should have in place regardless of client-side validation support.</p>

<h2 id="debugging">Debugging JavaScript in Opera Mini</h2>

    <p>Opera Mini lacks the robust development and debugging tools of other Opera products such as Opera Mobile and <a href="http://www.opera.com/developer/tools/mobile/">its emulator</a> and <a href="http://www.opera.com/dragonfly/">Dragonfly</a> for Opera desktop. It does, however, offer two development tools:</p>

<ul>
	<li><code>server:source</code>, which dumps the generated source code for the current page state.</li>
	<li><code>server:console</code>, which collects JavaScript errors and output from <code>console.log()</code>.</li>
</ul>

<h3>Using <code>server:source</code></h3>

<p>Entering <code>server:source</code> into the address bar after a page has been rendered will reveal the server-generated source code for the page (see Figure 5).</p>

   <p><img src="http://forum-test.oslo.osa/kirby/content/articles/777-opera-mini-and-javascript/opera-mini_server-source.png" alt="The source code for Opera dot com." /></p>
   <p class="caption">Figure 5: The <code>server:source</code> for the Opera home page.</p>

    <p>You can also export this source to a script on your server. Enter <code>server:source?post=http://your.server.com/script</code> in the address bar. This will send three fields &#8212; <code>url</code>, <code>host</code>, and <code>html</code> as a POST request. Your script can then write this code to a file or a database.</p>

<h3>Using <code>server:console</code></h3>

<p>Opera Mini&#39;s JavaScript console supports a subset of the <a href="http://www.opera.com/dragonfly/documentation/console/">Console API</a>. JavaScript errors will be logged to the console as shown in Figure 6. You can also write messages to the console using <code>console.log()</code>.</p>

   <p><img src="http://forum-test.oslo.osa/kirby/content/articles/777-opera-mini-and-javascript/opera-mini_server-console.png" alt="The conesole output for Opera dot com." /></p>
   <p class="caption">Figure 6: The <code>server:console</code> for the Opera home page.</p>

<p>You can also download and install the <a href="http://www.opera.com/browser/download/?custom=yes">corresponding version of Opera desktop</a> to take advantage of Dragonfly&#39;s debugging tools. But be aware that the sequence of events may be fired in a different order than you might expect.</p></p></p>
