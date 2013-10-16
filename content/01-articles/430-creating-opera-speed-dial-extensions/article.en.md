Title: Creating Opera Speed Dial Extensions
----
Date: 2011-05-03 07:58:32
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

<p>Back in 2007, we <a href="http://www.opera.com/docs/changelogs/windows/920/">introduced</a> Speed Dial to the world. The concept proved extremely popular and similar implementations can now be found in other browsers as well. But as proud as we are, what kind of parents would we be if we didn&#39;t help our baby to grow up and develop new skills? For the Opera 11.10 release, we&#39;ve improved the visual display and <abbr title="user interaction">UX</abbr> of Speed Dial and added <a href="http://dev.opera.com/articles/view/opera-speed-dial-enhancements/">hooks for developers to control the way their site looks</a> when rendered in a Speed Dial cell. In Opera 11.50, we&#39;re taking this a step further with <strong>Speed Dial extensions</strong>.</p>

<p>Just as you can extend your browser with one of the many hundreds of <a href="https://addons.opera.com/addons/extensions/">Opera extensions</a>, you can also customise and extend Speed Dial to make it even more useful. Instead of being limited to web page or icon screenshots, Speed Dial can now render live extension content, and this article shows you how.</p>

<p class="note">Note: To see an example running, you&#39;ll need <a href="http://www.opera.com/browser/">Opera 11.50 or later</a> plus a Speed Dial extension example: <a href="clock_SD_extension.oex">download our Speed Dial clock</a>.</p>

<h2>The basics</h2>

<p>In order to maintain extensibility with regular Opera extensions, Speed Dial extensions use the same format and structure but with a couple of additions. In other words, the following small additions to the <code>config.xml</code> file can change an existing Opera extension into a Speed Dial extension:</p>

<ul>
    <li>A <code>&lt;feature&gt;</code> element with a <code>name</code> attribute of value <code>opera:speeddial</code>, which turns the extension into a Speed Dial extension.</li>
    <li>A <code>viewmodes</code> attribute on the containing <code>&lt;widget&gt;</code> tag with the value <code>minimized</code>: this shows the background page in a Speed Dial cell.</li>
</ul>

<p>Please be aware, however, that extensions cannot currently use both the Speed Dial feature and the browser toolbar. In other words, an extension that has a toolbar button cannot also be a Speed Dial extension in the current implementation.</p>

<h2>Specifying the Speed Dial extension with <code>config.xml</code></h2>

<p>Let&#39;s put the methodology into practice and walk through an example extension. To see the following code snippets in context, <a href="clock_SD_extension.oex">download our Speed Dial clock extension</a> and look at the source files inside the package. Figure 1 shows how our extension will look when finished.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/430-creating-opera-speed-dial-extensions/clock_extension_in_speed-dial.jpg" width="400" height="242" alt="Clock extension installed in the Opera browser&#39;s Speed Dial." /></p>
<p class="comment">Figure 1: The clock extension installed in the Opera browser&#39;s Speed Dial.</p>

<p>Whereas regular Speed Dial cells show a screenshot of a page out on the Web, Speed Dial extensions show the start (or background) page of the extension&#x2014;this is <code>index.html</code> by default. To enable this, we first need to add the <code>viewmodes</code> attribute to our <code>config.xml</code>&#39;s <code>&lt;widget&gt;</code> tag, with the value <code>minimized</code>:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; viewmodes=&quot;minimized&quot;&gt;</code></pre>

<p>This tells the browser to show the extension&#39;s background page in minimized form&#x2014;the size of an individual Speed Dial window at 100% zoom level is 256 pixels wide and 160 pixels tall. In addition, we also need to add a <code>feature</code> element for Opera Speed Dial with its <code>required</code> attribute, and a <code>param</code> element:</p>

<pre><code>&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
&lt;/feature&gt;</code></pre>

<p>The <code>feature</code> element&#39;s <code>required</code> attribute indicates whether the Speed Dial is needed for this extension to run. For example, there may be other browsers or user agents that are compatible with Opera extensions but don&#39;t have a Speed Dial. If your extension should still work in these cases use the value <code>false</code>; if your extension won&#39;t work without the Speed Dial choose <code>true</code>.</p>

<p>The <code>param</code> element is required, and specifies which page should open when the Speed Dial icon is clicked.</p>

<p>Here&#39;s the complete <code>config.xml</code> file for this extension:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/SimpleClockSD&quot; defaultlocale=&quot;en&quot; viewmodes=&quot;minimized&quot;&gt;
  &lt;name short=&quot;Simple Clock&quot;&gt;Clock Speed Dial Extension&lt;/name&gt;
  &lt;description&gt;This is an example Speed Dial extension showing a simple clock.&lt;/description&gt;
  &lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis&lt;/author&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Icon source: http://www.openclipart.org/detail/17552 --&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://en.wikipedia.org/wiki/Time&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

<h2>Adding content to the extension</h2>

<p>The next step is to create something interesting to show in the Speed Dial window. This is the extension&#39;s background page so we need to create a file named <code>index.html</code> in the same directory as <code>config.xml</code>. For this example, we&#39;re making a simple JavaScript digital clock that shows the current time to the second. Firstly, we&#39;ll create a basic <code>index.html</code> with an empty <code>output</code> element:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;title&gt;Clock Speed Dial Extension&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;output&gt;&lt;/output&gt;
    &lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Following that, we need to create a <code>scripts</code> directory containing the <code>background.js</code> file that we&#39;ve linked to. This JS file looks like so:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs;
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>The accompanying style sheet (<code>style.css</code>) is also simple, but includes a cunning trick:</p>

<pre><code>* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

/* Use display:table and display:table-cell
so that we can use vertical-align:middle */
body {
  background: #444;
  color: #fff;
  display: table;
  height: 100%;
  width: 100%;
}
output {
  display: table-cell;
  font-family: monospace;
  font-size: 10em;
  text-align: center;
  text-shadow: 0 0.1em 0.1em #000;
  vertical-align: middle;
}

/* Styles here are only applied in a &quot;minimized&quot; state */
@media screen and (view-mode: minimized) {
  output {
    font-size: 1.8em;
  }
}</code></pre>

<p>As you can see, there is a CSS3 media query at the bottom of this file that checks for the <code>view-mode: minimized</code> condition, in keeping with the <a href="http://dev.w3.org/2006/waf/widgets-vmmf/"><code>view-mode</code> Media Feature specification</a>. In other words, the styles in this section will only apply when the page is shown in a minimized state such as a Speed Dial cell. This is a handy way to override styles for a certain situation without having to maintain multiple designs.</p>

<h2>Finishing the extension off</h2>

<p>As usual, to package our creation as an extension we zip all the files in the directory (but not the directory itself) and rename it with an <code>.oex</code> extension. If you haven&#39;t done so already,  <a href="clock_SD_extension.oex">download the clock_SD_extension.oex</a> and give it a try.</p>

<h2>The <code>SpeedDialContext</code> API</h2>

<p>Once installed, our extension can dynamically control its Speed Dial cell with the <code>SpeedDialContext</code> API. This is a very simple API with two writable properties: <code>title</code> and <code>url</code>. They are accessed from the background JavaScript through the <code>opera.contexts.speeddial</code> object, like so:</p>

<pre><code>if (opera.contexts.speeddial) {
  var sd = opera.contexts.speeddial; 
  sd.title = &quot;My title&quot;;
  sd.url = &quot;mypage.html&quot;; 
}</code></pre>

<p>We can use this feature to enhance our clock extension, for example by making it display a friendly message depending on the time of day. The only file we need to edit is the <code>background.js</code> JavaScript file:</p>

<pre><code>window.addEventListener(&#39;load&#39;, function() {
  // Simple function to prefix a zero if the value passed is less than 10
  function formatTime(time) {
    return (time &lt; 10) ? &#39;0&#39; + time : time;
  }
    
  var output = document.querySelector(&#39;output&#39;);
  var date, hours, mins, secs, tmp_hours, timeofday;
  var messages = {
    &quot;morning&quot;: &quot;Good morning!&quot;,
    &quot;afternoon&quot;: &quot;Good afternoon!&quot;,
    &quot;evening&quot;: &quot;Good evening!&quot;,
    &quot;night&quot;: &quot;Shouldn&#39;t you be in bed?&quot;
  };
    
  // Get and display the current time every 500 milliseconds
  var timer = window.setInterval(function() {
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    output.innerHTML = formatTime(hours) + &#39;:&#39; + formatTime(mins) + &#39;:&#39; + formatTime(secs);
        
    // Make the Speed Dial title display time-related message
    if (hours !== tmp_hours) {
      if (hours &gt; 15) {
        timeofday = &#39;evening&#39;;
      } else if (hours &gt; 11) {
        timeofday = &#39;afternoon&#39;;
      } else if (hours &gt; 3) {
        timeofday = &#39;morning&#39;;
      } else {
        timeofday = &#39;night&#39;;
      }
            
      if (opera.contexts.speeddial) {
        opera.contexts.speeddial.title = messages[timeofday];
      }
      tmp_hours = hours;
    }
  }, 500); // Twice a second to allow for slight delays in JavaScript execution
}, false);</code></pre>

<p>This is the same as the first example but with a few things added, namely:</p>

<ul>
    <li>A <code>messages</code> object containing messages for various times of day.</li>
    <li>A repeated check that runs code when the hour has changed.</li>
    <li>A line that shows the relevant message from the <code>messages</code> object in the Speed Dial title.</li>
</ul>

<p>This extension can be downloaded here: <a href="friendly_clock_SD_extension.oex">friendly_clock_SD_extension.oex</a>. When installed, this is how it will look:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/430-creating-opera-speed-dial-extensions/friendly_clock_extension_in_speed-dial.jpg" width="400" height="256" alt="Friendly clock extension installed in the Opera browser&#39;s Speed Dial." /></p>
<p class="comment">Figure 2: The friendly clock extension installed in the Opera browser&#39;s Speed Dial.</p>

<h2>Conclusion</h2>

<p>As you can see, extension developers now have an extra window of opportunity to add convenience, ease-of-use or just fun to their extensions. The examples here are basic but show the potential of Speed Dial extensions when combined with clever ideas and web development skills. We&#39;re hoping to see Speed Dial extensions become more than just pretty links to a website, so we look forward to seeing the creative ways you use this API over at the <a href="https://addons.opera.com/addons/extensions/">Opera extensions repository</a>!</p>

<h2>Reference</h2>
<p><a href="/articles/view/extensions-api-speeddial/">Opera Extensions API: Speed Dial guide</a></p>
