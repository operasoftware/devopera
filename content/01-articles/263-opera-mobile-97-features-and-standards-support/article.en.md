Title: Opera Mobile 9.7 - features and standards support
----
Date: 2009-06-08 12:01:25
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">This article is obsolete</h2>
<p>It&#39;s retained for historical purposes only. Download the <a href="http://www.opera.com/browser/">latest version of Opera</a> or see what&#39;s coming soon in <a href="http://www.opera.com/browser/next/">Opera.Next</a>. See <a href="http://www.opera.com/docs/specs/">Web specifications support in Opera</a>.</p> 
</div>

<h2>Introduction</h2>

<p>We are proud to announce the release of the Opera Mobile 9.7 beta on Windows Mobile! You can <a href="http://www.opera.com/products/mobile/download">download the beta and try it out</a> right now for free — we&#39;d love to know what you think.</p>

<p>In this article, I&#39;ll give you a brief rundown of the new features available on Opera Mobile 9.7, then jump into looking at Opera Mobile 9.7 web standards support, and how this support can help you optimize sites so they display better in the browser.  Along the way I’ll also cover the Opera Mobile 9.7 user agent string, Google Gears support, and Opera Dragonfly support (ie how to use it to debug sites directly on mobile).</p>

<h2>New features</h2>

<p>This release has many improvements over its predecessor, including:</p>

<ul>

<li><strong>New rendering engine</strong>: Opera Mobile 9.7 uses our Opera Presto 2.2 rendering engine, which gives improved speed, 100/100 on the <a href="http://acid3.acidtests.org/">Acid 3 test</a>, and many new standards support improvements, as you&#39;ll see below</li>
<li><strong>Improved support for Opera Widgets</strong>: Opera Mobile supports Opera Widgets, Opera&#39;s self-contained, cross-device applications built using web standards. Browse to the <a href="http://widgets.opera.com/">Opera Widgets homepage</a> using Opera Mobile 9.7 beta and try some out</li>
<li><strong>Widget Manager</strong>: This release also features a new Widget Manager with improved usability and design, which runs independently from the browser</li>
<li><strong>Opera Mobile 9.7 supports Opera Turbo</strong>: This is a simple but effective feature that, when turned on, compresses pages by up to 80%, giving you a faster browsing experience if you are in a low or patchy bandwidth area. It does not use the same compression technology as Opera Mini, but it is similar. You can <a href="http://labs.opera.com/news/2009/03/13/">read more about Opera Turbo</a> on labs.opera.com</li>
<li><strong>Google Gears support</strong>: Gears is an open source project that allows improved web applications with features such as offline storage and worker threads to help tired processors handle number crunching. Read more about it below</li>
</ul>

<p>The new UI looks like Figure 1.</p>

<img alt="Screenshot of the Opera Mobile 9.7 user interface" src="http://forum-test.oslo.osa/kirby/content/articles/263-opera-mobile-97-features-and-standards-support/nytimes2.png" />
<img alt="Screenshot of the Opera Mobile 9.7 user interface" src="http://forum-test.oslo.osa/kirby/content/articles/263-opera-mobile-97-features-and-standards-support/widgets01.png" />
<img alt="Screenshot of the Opera Mobile 9.7 user interface" src="http://forum-test.oslo.osa/kirby/content/articles/263-opera-mobile-97-features-and-standards-support/EnableTurbo01.png" />
<p class="comment">Figure 1: Opera Mobile 9.7’s new UI.</p>

<p><a href="code_download.zip">Download all the code examples for this article</a>.</p>

<h2>Bug fixes</h2>

<p>We&#39;ve also ironed out some of the issues with the 9.51 Beta:</p>

<ul>
  <li>Installation on storage cards is now possible, and this beta will happily coexist with previously installed versions of Opera Mobile</li>
  <li>This beta has better IME support (although a lot of non-standard 3rd party IME applications still make support levels less than we&#39;d like)</li>
  <li>This release also has better performance and feedback when clicking links</li>
</ul>

<h2>Opera Mobile 9.7 user agent string</h2>

<p>Opera Mobile 9.7 identifies using the following string:</p>

<pre><code>Opera/9.7 (Windows Mobile; HTC PPC; Opera Mobi/35166; U; en) Presto 2.2.1</code></pre>

<p>Where <em>buildnumber</em> is replaced by the actual four digit build number. Note that the <code>PPC</code> part of the string is read from the registry on the phone; on some phones it may be modified to something different by the handset manufacturer, eg <code>HTC PPC</code>.</p>

<h2>Web standards support</h2>

<p>This is the easy part—Opera Mobile 9.7 is powered by the same core rendering engine as Opera Desktop 10, so its web standards support is basically the same as that of its desktop-based cousin.</p>

<h3>Cross device development techniques</h3>

<p>Opera Mobile 9.7’s standards support means that it can run any web site that you would expect the major desktop browsers to support—it is a fully-featured web browser running on a mobile device. There are however physical constraints to be aware of such as screen size, which can result in a different user experience when your site is viewed on mobile devices. These call for some extra thought when developing your web sites:</p>

<ul>
<li>Create sensible layouts: this applies for web pages as a whole—having sensible, simple layouts increases usability on desktop browsers as well as mobile browsers, but it is particularly important for page elements such as forms—you should aim to keep them small enough so that each section of the form will fit on a single screen, and allow the user to select their options from lists wherever possible, to keep inputting text down to a minimum.</li>
<li>Use different controls: You can’t always guarantee that mobile users are controlling your site with a (virtual) mouse, and it is a lot more difficult to enter large amounts of data using a mobile keypad, therefore you should plan carefully, for example by allowing the user to select options from a list wherever possible, rather than having to type in all the data they are required to specify.</li>
<li>Different screen sizes: Your viewport will obviously be a lot smaller on mobile devices than it is on desktop. The excellent zoom function of Opera Mobile 9.7 helps a great deal in navigation around large pages, but you can also employ techniques to make the mobile experience better, such as CSS 3 media queries, and the <code>viewport meta</code> tag. You’ll learn more about these below.</li>
</ul>

<h3>Media queries</h3>

<p>Media queries are a CSS 3 construct that allow you to wrap a set of CSS rules in a condition so that they are only applied to the markup if the condition is met by the browser viewing the page — for example &quot;only apply these rules if the device viewport width is less than 480 pixels&quot;. The following example specifies this rule:</p>

<pre><code>img {
  margin: 0 0 10px 10px;
  float: right;
}

@media all and (max-device-width: 480px) {
  img {
    margin: 10px auto;
    float: none;
    display: block;
  }
}</code></pre>

<p>On devices with only a small screen width available, it makes sense to just display images below text, not float them to the right. Opera Mobile 9.7 has support for media queries.</p>

<p>Let&#39;s have a look at a slightly more involved example. I&#39;ve created a simple two-column example — see Figure 2.</p>

<img alt="simple two column example" src="http://forum-test.oslo.osa/kirby/content/articles/263-opera-mobile-97-features-and-standards-support/example_website_desktop.jpg" />
<p class="comment">Figure 2: A simple two column example web site.</p>

<p>You can <a href="world-news.html">check out the example live</a>, or study the code by downloading the <a href="code_download.zip">code download for this article</a>. This is floated using the following rules in the CSS:</p>

<pre><code>#content { 
  float:left; 
  width:60%;
  padding:0px 10px 10px 30px; 
  border-right:1px solid #0f0;
} 

#sidebar { 
  float:right;
  width:30%; 
  margin-bottom:10px; 
  padding:30px 10px 10px 0px; 
}</code></pre>

<p>However, if you look lower down the CSS, you&#39;ll come across the following set of rules:</p>

<pre><code>@media all and (max-width: 750px), all and (max-device-width: 750px) {

  h1 {
    font-size: 200%;
  }

  #content { 
    width: 100%;
  } 

  #sidebar { 
    float:none;
    width: 100%;
    padding: 0 0 0 0;
  } 


  li {
    padding: 5px 0px 5px 0;
    font-size: 100%;
  }
  
  #nav {
    float:right;
    width: 250px;
  }

  .news-item {
    margin: 10px 10px 10px -40px;
  }

  div#signup-form {
    width: 275px;
  }

}</code></pre>

<p>They are encased inside a Media Query (<code>@media all and (max-width: 750px), all and (max-device-width: 750px) {}</code>) that says &quot;for all media types, apply these rules if the browser width is equal to or less than 750 pixels, or if the width of the viewing device screen is less than 750 pixels&quot; (this last bit is required for mobile devices). The result of this is that if the browser window is less than 750 pixels, the layout dynamically changes to that seen in Figure 3.</p>

<img alt="simple two column example changed to one column dynamically using a media query" src="http://forum-test.oslo.osa/kirby/content/articles/263-opera-mobile-97-features-and-standards-support/example_website_narrow.jpg" />
<p class="comment">Figure 3: Our simple two column example web site has been dynamically changed using a Media Query!</p>

<p>The most important things that this media query does are getting rid of the two column layout by setting the sidebar&#39;s <code>float</code> property to <code>none</code>, and causing the form to float alongside the navigation by setting its <code>float</code> value to <code>right</code>.</p>

<p>But that&#39;s not all. We&#39;ve got another Media Query below the first one, which looks like this:</p>

<pre><code>@media all and (max-width: 540px), all and (max-device-width: 480px) {

 #nav {
    float:none;
    width: 250px;
  }

}</code></pre>

<p>This Media Query says &quot;for all media types, if the maximum width of the browser window gets below 540 pixels, or if the maximum width of the device&#39;s screen gets below 480 pixels, apply the rules inside&quot;. If you view the example site using Opera Mobile 9.7, it should look something like Figure 4.</p>

<img alt="example site layout has changed again on mobile, when second media query is applied. The float is removed from the form, giving us a narrower layout" src="http://forum-test.oslo.osa/kirby/content/articles/263-opera-mobile-97-features-and-standards-support/example_website_mobile.jpg" />
<p class="comment">Figure 4: Now the float has been removed from the form in the sidebar!</p>

<p>The second Media Query simply removes the float from the form and reduces its width, so that it is even narrower, and will work better on small screen mobile devices.</p>

<h4>The viewport meta tag</h4>

<p>The <code>viewport meta</code> tag contains information about the preferred settings of the viewport for viewing the HTML page it is contained within. Just like any other <code>meta</code> tag, <code>viewport</code> sits inside the <code>head</code> element of your HTML page—browsers that support it use the information to display the web page more appropriately for that device, while browsers that don’t simply ignore it. It was originally created by Apple to improve the way web pages display on the iPhone, but we have added support for it in Opera Mobile 9.7 because it is a good way of optimizing display information for different mobile devices. The tag looks like so:</p>

<pre><code>&lt;meta name = &quot;viewport&quot; content = &quot;width = device-width, height = device-height&quot; /&gt;</code></pre>

<p>All it contains is the <code>meta</code> attribute, which specifies that this is a <code>viewport</code> meta tag, and the <code>content</code> attribute, which contains a comma-delimited list of the different values you want to specify for this page. The different pieces of information you can specify are as follows:</p>

<ul>
<li><code>width</code> and <code>height</code>: These specify the width and height that the viewport should be set at for this web page. The values can be set in pixels, or even better, you can use the <code>device-width</code> and <code>device-height</code> values, respectively, to specify that the width and height should be set as the full width and height of the device’s screen. The default value of <code>width</code> is 980 pixels, and it can be set from 200 to 10,000 pixels. The default value of <code>height</code> is calculated from the width of the device and its aspect ratio, and it can be set from 223 to 10,000 pixels.</li>
<li><code>initial-scale</code>: This sets the initial scale of the web page when it is first displayed. By default it just fills up the whole screen of the device, unless you deliberately set it otherwise.</li>
</ul>

<p>Note that the <code>user-scalable</code>, <code>minimum-scale</code> and <code>maximum-scale</code> attributes are not supported at this point. Also, as the presence of the <code>viewport meta</code> tag in the page’s <code>head</code> section indicates the author has taken care of optimizing for mobile, small screen rendering is not applied. This means that <code>viewport</code>-enabled pages will look exactly the same whether “Mobile view” is switched on or off.</p>

<h2 id="webfonts">Web Fonts — Web typography just got easier</h2>

<p>One big sore point among Web designers for a number of years now has been the lack of fonts available to use on Web sites. Sure, you can make use of any font installed on your machine via CSS, but there is no guarantee that it will be installed on your site visitors’ machines. In fact, there are very few fonts that you can guarantee to be installed across all major platforms, and you often need to specify different platform—specific variations for serif or sans serif fonts, and test them on their respective platforms to make sure your design holds up.</p>

<p>But this is hopefully going to change in the near future, with <strong>Web Fonts</strong>. Web Fonts is a <a href="http://www.w3.org/TR/css3-webfonts/">CSS 3 module</a> that allows you to download a specified font file along with a Web site and then make use of it on that Web site, so it doesn’t need to be installed on your site visitor’s computers. To include the font along with the Web site download, you use the following syntax:</p>

<pre><code>@font-face {
  font-family: &quot;My font gothic&quot;;
  src: url(&quot;http://www.myweb.com/fonts/myfont.ttf&quot;) format(&quot;truetype&quot;);
}</code></pre>

<p>You declare your custom font inside a <code>@font-face</code> construct (do it at the start of your stylesheet, <em>before</em> you set any fonts), then refer to it in your stylesheet as normal, for example:</p>

<pre><code>p {
  font-family: &quot;My font gothic&quot;;  
  ...
}</code></pre>

<p><a href="http://dev.opera.com/author/1385211">Andreas</a> has created a <a href="webfonts.html">Web Fonts example</a>, which uses the <a href="http://www.myfonts.com/fonts/larabie/forgotten-futurist/">Forgotten Futurist</a> and <a href="http://www.myfonts.com/fonts/larabie/minya-nouvelle/">Minya Nouvelle</a> fonts. Access the web fonts example at the link above using a supporting browser, and you should see something like Figure 5.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/263-opera-mobile-97-features-and-standards-support/webfont1.png" alt="web fonts example" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/263-opera-mobile-97-features-and-standards-support/webfont2.png" alt="web fonts example" />
<p class="comment">Figure 5: Our Web Fonts example, running in Opera Mobile 9.7.</p>

<p>More free fonts are listed on the <a href="http://www.designwritingresearch.org/free_fonts.html">Free Font Manifesto page</a> and on <a href="http://typodermicfonts.com/the-larabie-fonts-collection">Larabie Fonts</a>. More complex examples can be found on <a href="http://www.princexml.com/howcome/2008/webfonts/">this Web Fonts demo page</a>.</p>


<h2 id="selectorsapi">The selectors API</h2>

<p><a href="http://www.w3.org/TR/selectors-api/">The selectors API specification</a> defines DOM APIs designed to make selecting DOM elements a lot simpler.</p>

<p>Let&#39;s look at an example—the following line selects all of the elements in a document with a <code>class</code> of <code>alert</code>:</p>

<pre><code>document.querySelectorAll(&quot;.alert&quot;);</code></pre>

<p>The next line selects the first <code>div</code> element in a document:</p>

<pre><code>document.querySelector(&quot;div&quot;);</code></pre>

<p>The use of CSS-like syntax for the argument makes things a bit easier for non-JavaScript experts.</p>

<p>As you can see above, there are two new methods supported in Opera Presto 2.2: <code>querySelector()</code> and <code>querySelectorAll()</code>. The former returns the first matching element within the tree, and the latter returns a collection of all matching elements as a <code>NodeList</code>. The current specification defines that the methods are available on the <code>Document</code>, <code>Element</code> and <code>DocumentFragment</code> nodes, however our implementation currently only supports it on the <code>Document</code> and <code>Elements</code> nodes.</p>

<p>The <code>querySelector()</code> method is useful for situations where only the first matching element is needed, and is designed to be more efficient than the alternative <code>querySelectorAll()</code> method in such cases.</p>

<p>To see how much easier this is compared with traditional APIs, consider this example HTML fragment:</p>

<pre>&lt;ul id=&quot;fruits&quot;&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;apples&quot;&gt; Apples&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;oranges&quot;&gt; Oranges&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;bananas&quot;&gt; Bananas&lt;/li&gt;
  &lt;li&gt;&lt;input type=&quot;checkbox&quot; name=&quot;fruit&quot; value=&quot;grapes&quot;&gt; Grapes&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>After the user has filled out the form containing those check boxes, suppose you want to get the list of all the checked items. Using traditional APIs, this would require obtaining a list of all the <code>input</code> elements and iteratively checking which ones were checked.</p>

<pre>var fruits = document.getElementById(&quot;fruits&quot;);
var checkboxes = fruits.getElementsByTagName(&quot;input&quot;);
var list = [];
for (var i = 0; i &lt; checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    list.push(checkboxes[i]);
  }
}</pre>

<p>Using these new APIs, the operation can be reduced to <em>a single line of code!</em></p>

<pre>var list = document.querySelectorAll(&quot;#fruits input:checked &quot;);</pre>

<p>This returns a node list containing all the <code>input</code> elements that were checked by the user. Your script can then perform any operation you like with them.</p>

<h2>Gears support</h2>

  <p>Go to the <a href="http://gears.google.com/">Gears</a> web site and click the “Install Gears” button. This makes all the Gears APIs available, so users can take advantage of advanced functionality when they surf to Gears-enabled web sites.</p>

  <p>The idea is that as a developer using Gears your web site should contain a piece of code that <a href="http://code.google.com/apis/gears/design.html#detecting">detects</a> whether Gears is installed on a visiting browser, before your web application tries to access Gears APIs. The code should first initialize Gears by including <code><a href="http://code.google.com/apis/gears/tools.html#gears_init">gears_init.js</a></code>, then do a check to see if <code>google.gears</code> is defined, which it will be if Gears is installed. If it isn’t, your code should probably redirect the user to the Gears installation page, or serve them up a more basic version of your application, depending on what is most suitable for your situation. If Gears is installed, then it should just continue running the rest of the code.</p>

  <h3>Allowing your users to go offline</h3>

  <p>At the basic level, allowing your users to access a site offline is incredibly simple (it gets a bit more complex when you start involving dynamic data sources). All you need to add to your regular web site is:</p>

  <ul>
  <li>Some kind of special user interface functionality to give users with Gears installed the option to store the web site locally so it can be used offline.</li>
  <li>A manifest file, which is a JSON file that resides in the root of your web site’s server location. This file contains a <code>version</code> value, which allows Gears to track whether the site has been updated, and a series of <code>url</code> values, which are relative paths to all the files Gears needs to store locally for the web site to work offline.</li>
  </ul>

  <p>When the user then selects the option to store the site locally, they will be able to access the site and work with it normally while offline, even down to accessing the same URL.</p>

  <p>When you update your Gears-enabled web site, you should increase the <code>version</code> number inside the manifest file by a sensible iteration of your choosing. When Gears detects a new version number, it will automatically download a fresh copy of the site to the user’s computer. Google Code has a <a href="http://code.google.com/apis/gears/tutorial.html">full tutorial</a> on taking your site offline with Gears.</p>

  <h3>Enhancements on desktop and mobile web applications</h3>

  <p>Creating web applications that provide a smooth, responsive user experience is enough of a challenge over desktop, but on mobile devices it is even more difficult. Mobile networks have high latency and low bandwidth compared to desktop computers, meaning that you need to be extra careful with the amount of code an application requires, as well as the number of round trips to the server. Mobile devices have also less processing power than desktop computers, so you need to optimize very carefully. One last point to consider is that JavaScript is not great at integrating with mobile context and taking advantage of the hardware it is running on—it is not easy for it to access the user’s location, phone camera or address book.</p>

  <p>Gears can solve many of these issues. You can ease the strain on your processor by splitting up JavaScript calculations into separate worker threads, which are background processes defined by Gears that can perform tasks on behalf of the browser. You can make applications more responsive by downloading data (it provides offline database functionality via <a href="http://www.sqlite.org/">SQLite</a>) and code onto your device and allowing much of your application’s functionality to run offline. On top of this, you can also use Gears to create application shortcuts for your web applications that will be visible in the file system.</p>

  <h3>The Gears APIs</h3>

  <p>You can find more out about the Gears APIs on <a href="http://code.google.com/apis/gears/api_summary.html">the Gears web site</a>, but here is a quick rundown of what’s available:</p>

  <ul>
  <li><a href="http://code.google.com/apis/gears/api_database.html">Database API</a>: This allows persistent client side data storage, using a SQLite database, meaning that data can be stored on the client while the application is online, and then used to continue working while the application is offline.</li>
  <li><a href="http://code.google.com/apis/gears/api_desktop.html">Desktop API</a>: Provides functionality for integrating Gears applications with the desktop, for example creating shortcuts that will access web applications.</li>
  <li><a href="http://code.google.com/apis/gears/api_factory.html">Factory API</a>: The <code>Factory</code> class is used to instantiate all other Gears objects, so it’s basically the central controlling API for the whole application. The easiest way to create a <code>Factory</code> object is to use <a href="http://code.google.com/apis/gears/tools.html#gears_init"><code>gears_init.js</code></a>, as mentioned above.</li>
  <li><a href="http://code.google.com/apis/gears/api_httprequest.html">HttpRequest Module API</a>: This API implements a subset of the standard W3C XMLHttpRequest specification, to make Ajax-type functionality available in the offline application, both in the HTML pages and background worker threads.</li>
  <li><a href="http://code.google.com/apis/gears/api_localserver.html">LocalServer API</a>: <code>LocalServer</code> is what allows Gears to cache an application’s files locally and serve them without having a network connection available. It in effect creates a virtual server for controlling Gears applications.</li>
  <li><a href="http://code.google.com/apis/gears/api_timer.html">Timer API</a>: This API implements the standard Timer API found in the browser’s <code>Window</code> object inside Gears. This make timers available in the offline application, both in the HTML pages and background worker threads (see Worker Pool API below).</li>
  <li><a href="http://code.google.com/apis/gears/api_workerpool.html">WorkerPool Module API</a>: Provides a way to define background worker processes—these allow JavaScript calculations/processing to be done in the background, taking some of the strain away from the browser, so that the application runs more smoothly, and the UI is less likely to become unresponsive. This is invaluable for mobile applications.</li>
  <li><a href="http://code.google.com/intl/ja/apis/gears/api_geolocation.html">Geolocation API</a>: This API provides the best estimate of the user’s position using a number of so called location providers. The <code>getCurrentPosition</code> and <code>watchPosition</code> methods allow web applications to retrieve a user’s current position or watch how it changes over time. The <code>lastPosition</code> property allows to quickly and cheaply obtain the user’s last known position.</li>
  </ul>

<h2>Opera Dragonfly support</h2>

<p>Using Opera Dragonfly’s remote debugging feature, you can debug content running directly in an instance of Opera Mobile 9.7, from an instance of Opera Desktop (with Opera Dragonfly running.) This is an incredibly useful feature for developers wishing to check out their sites on mobile. To find out <a href="http://dev.opera.com/articles/view/remote-debugging-with-opera-dragonfly/">how to set up remote debugging and debug sites running on Opera Mobile 9.7</a>, check out David&#39;s article. There is also an article available to give you a <a href="http://dev.opera.com/articles/view/introduction-to-opera-dragonfly/">guided tour of Opera Dragonfly</a>, and take you through the basics.</p>

<h2>Opera Widgets support</h2>

<p>Opera Widgets are cross platform and cross device applications that run on top of any browser that supports them. They are made with web technologies, therefore you can develop Opera Widgets quickly and easily and deploy them to different devices with a minimum amount of adaptation.</p>

<p>The good news is that Opera Mobile 9.7 now has full support for these. You can download hundreds of Opera widgets for free from the <a href="http://widgets.opera.com/">Opera Widget homepage</a>, and find a lot more out about how develop them in the <a href="http://dev.opera.com/articles/view/opera-widgets-sdk/">Opera Widgets SDK</a>.</p>

<p class="note">Note: due to some changes in the way Widgets are run on Opera Mobile 9.7, you will need to add the following into your Widget <code>config.xml</code> files to get them to access the network — <code>network=&quot;public&quot;</code>.</p>


 <h2>Summary</h2>
 
 <p>I hope you have enjoyed this developer-centric tour of Opera Mobile 9.7. Let us know what you think, in the discussion forum for this article, or the Opera Forums.</p>
