Title: Server-side capability detection for mobile devices part 2
----
Date: 2007-12-12 14:45:05
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

<h2>Increasing the user experience</h2>

<p>This is part 2; If you haven&#39;t already read part 1, <a href="http://dev.opera.com/articles/view/server-side-capability-detection-for-mob/" title="Server-side capability detection for mobile devices part 1">do so here</a>.</p>

<p>Now we&#39;ll look at some tips to increase the user experience. Let&#39;s first look at an example of effectively detecting screen size and serving appropriate content. You thought it was hard to design for 800 x 600 and 1024 x 768? Think again!</p>

<p>Luckily with the help of WURFL we can detect the type of device and check the screen size. Once you have the screen width, you can serve the appropriate size image. My phone is a Nokia 6600, which has screen dimensions of 208x176. The iPhone has a screen size of 320x480. Using the following code, I can check the screen size of the device accessing my site, and serve either a 180 pixel wide image to phones like mine, or a 320px wide image to the iPhone.</p> 

<pre><code>if ($width==320){ 
&lt;img src=&quot;/images/logos/320.gif&quot; /&gt; 
} else { 
&lt;img src=&quot;/images/logo/170.gif&quot; /&gt; 
}</code></pre>

<p>By serving the correct size image, we avoid the need for the mobile browser to shrink the image, making it pixelated and unreadable. It can also minimize the amount of data sent to the phone, keeping data costs down for those who pay by the megabyte. Some of the other capabilities we can check on phones are:</p> 

<ul>
<li>Support for the <code>tel:</code> protocol</li> 
<li>If it supports access keys on anchors</li> 
<li>If you can use CSS to color backgrounds</li> 
<li>If the device can handle animated gifs</li>
<li>If the device supports HTTPS</li> 
<li>If the device supports downloadable video and what kinds of video encodings</li> 
<li>If the device supports Flash Lite</li>
</ul>

<p>Many of these capabilities are booleans (true/false,) allowing us to customize the HTML output before sending the result back to the device. Instead of designing for the lowest common denominator only, we can design a base site and progressively enhance the experience based on phone capabilities. Libraries like WURFL allow you to create a database of these capabilities. When a device visits your site, you can cross-reference the database and get an array of this device&#39;s features. There is already an open source <a href="http://wurfl.sourceforge.net/php_index.php">WURFL PHP library</a> to do this. If PHP is not your thing, then there are libraries in just about every popular language to suit your needs.</p> 

<p>This is some pretty simple PHP code. First, we include the libraries needed for WURFL. The next step is to create a new object - <code>$myDevice</code> - and get the capabilities based on the <code>User_Agent</code> String from the browser. This populates the <code>$myDevice</code> object with all the things it can and can&#39;t do. Finally, we check to see if this device recognizes the <code>tel:</code> protocol. If it does, we output HTML with the phone number as a <code>tel:</code> link; If not, we just output it as plain text.</p>

<pre><code>require_once(&#39;wurfl_config.php&#39;);
require_once(WURFL_CLASS_FILE); // include the main class. This is defined in the configuration file
// creating the WURFL object
$myDevice = new wurfl_class($wurfl, $wurfl_agents);
$myDevice-&gt;GetDeviceCapabilitiesFromAgent($_SERVER[&quot;HTTP_USER_AGENT&quot;]);
if ( $myDevice-&gt;getDeviceCapability(&#39;wml_make_phone_call_string&#39;) ) {
    echo &#39;&lt;a href=&quot;&#39;.$myDevice-&gt;getDeviceCapability(&#39;wml_make_phone_call_string&#39;).&#39;1234567890&quot;&gt;click to call me at 123.456.7890&lt;/a&gt;&#39;.&quot;\n&quot;;
  } else {
    echo &#39;call me at 123.456.7890<br />\n&quot;;
  }</code></pre>

<p>Any detection script will start pretty much in the same manner. All the interesting stuff happens in the if statements. This is where you customize the HTML output for each device. There are many different capabilities you can test for and against, and the <a href="http://wurfl.sourceforge.net/help_doc.php">full list of capabilities can be found on the WURFL site</a>.</p>

<p>This creates a new instance of the database and references that device&#39;s capabilities. To also check to see if the device can support the HTTPS version of the site and redirect or not, I could use this:</p> 

<pre><code>if ( $myDevice-&gt;getDeviceCapability(&#39;https_support&#39;) ) {
    header(&#39;Location: https://example.org&#39;);
  } else {
    header(&#39;Location: http://example.org&#39;);
  }</code></pre>

<p>This will simply redirect as needed. Another common capability test might be checking the level of CSS support for the device, which can be done like so:</p>

<pre><code>switch($myDevice-&gt;getDeviceCapability(&#39;xhtml_support_level&#39;)){ 
case 0: 
  echo $css_file = &#39;basic.css&#39;; 
  break; 
case 1: case 2: 
  echo $css_file = &#39;basic-tables.css&#39;; 
  break; 
case 3: 
  echo $css_file = &#39;baseline.css&#39;; 
  break; 
default: 
  echo $css_file = &#39;advanced.css&#39;; 
  break; 
} 
echo &#39;&lt;link rel=&quot;stylesheet&quot; href=&quot;&#39;.$css_file.&#39;&quot; /&gt;&#39;;</code></pre> 

<p>This allows you to progressively enhance your site to best match the device. I prefer the term &quot;progressive enhancement&quot; over &quot;graceful degradation&quot;. Graceful degradation assumes the failure case, which is usually built only after the base-case. The idea of progressive enhancement achieves the same end, but from a different direction, starting with a solid workable base-case. If done correctly, the result is the same - all users are catered for in their experience.</p>

<p>Many of the enhancements discussed within this article are done on the server-side. This makes it more difficult for the client to have a fall-back because the enhancements are written into the HTML before the client receives the data. When dealing with client-side enhancements in the HTML for the browser, things like JavaScript support need to be tested on the client-side - even though the WURFL database says a device supports JavaScript, the user could still turn it off manually.</p>

<h2>Summary</h2>

<p>If there is only one thing you take away from this article, it should be that the mobile web, despite being a significant part of the one web, will not be the same for every device. This is due to the sheer diversity of hardware in the mobile space (which is not such an issue on the desktop,) and can only be matched by an equivalent diversity of user-experiences. The websites that do not take the time and effort to meet the needs of each customer by enhancing their mobile experience won&#39;t be last very long. The best way to make the experience pleasant and successful is to optimize the content for the device with the help of tools like WUFRL (while still making the base line content usable on any device, or course.) This should be less of an issue in the future, as mobile devices should get more powerful, but this is the state of things now.</p>
  
