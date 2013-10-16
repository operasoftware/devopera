Title: Introducing mobile browser automation
----
Date: 2012-08-02 15:55:11
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

<p>
Opera Mobile brings the Web to millions of people through their mobile phones and other non-desktop devices. Opera believes in giving people access to the full Web, and not making the distinction of a “mobile web”. Testing on mobile devices has always been hard for developers, though. That&#39;s why we introduced the <a href="http://www.opera.com/developer/tools/mobile/">Opera Mobile Emulator</a>, which is our mobile browser packaged for installation on Windows, Mac and Linux desktops.
</p>

<p>To help automated mobile testing, we&#39;ve updated the Opera Mobile Emulator so it can talk to our browser automation library, OperaDriver. OperaDriver is an implementation of the <a href="http://dvcs.w3.org/hg/webdriver/raw-file/tip/webdriver-spec.html">W3C WebDriver specification</a> and part of the free software web testing framework <a href="http://seleniumhq.org/">Selenium</a>. Selenium provides a lightweight and elegant way of testing web apps by emulating user interaction with actual web browsers.</p>

<h2>Requirements</h2>

<p>
  Since support for OperaDriver in Opera Mobile is fresh out of the
  lab, you&#39;ll need to use a set of custom builds we&#39;ve prepared:
</p>

<ul>
  <li><a href="http://www.opera.com/download/get.pl?id=34969&amp;sub=true&amp;nothanks=yes&amp;location=360">Windows</a></li>
  <li><a href="http://www.opera.com/download/get.pl?id=34970&amp;sub=true&amp;nothanks=yes&amp;location=360">Mac</a></li>
  <li><a href="http://www.opera.com/download/get.pl?id=34967&amp;sub=true&amp;nothanks=yes&amp;location=360">DEB</a>/<a href="http://www.opera.com/download/get.pl?id=34968&amp;sub=true&amp;nothanks=yes&amp;location=360">tarball</a> (Linux 64-bit)</li>
  <li><a href="http://www.opera.com/download/get.pl?id=34965&amp;sub=true&amp;nothanks=yes&amp;location=360">DEB</a>/<a href="http://www.opera.com/download/get.pl?id=34966&amp;sub=true&amp;nothanks=yes&amp;location=360">tarball</a> (Linux 32-bit)</li>
</ul>

<p>
  To play with this you also need to fetch a <a href="https://github.com/operasoftware/operadriver/downloads">fresh release of
  OperaDriver (0.16 or later)</a> because it hasn&#39;t landed in any Selenium
  release yet.  Built-in support for Opera Mobile should be available
  onwards from Selenium version 2.26, though.
</p>

<h2>Setting it up</h2>

<p>
  Using WebDriver with Opera Mobile is not very different from using
  it with Opera Desktop. Since OperaDriver uses
  the <a href="http://dragonfly.opera.com/app/scope-interface/">Scope
  debug protocol</a> to communicate with all the different products
  Opera offer, you can even reuse the same interfaces as you&#39;d use for
  the Desktop product. The only difference is that you must tell it
  which product to use, as shown here with the Java bindings:
</p>

<pre><code>DesiredCapabilities c = DesiredCapabilities.opera();
c.setCapability(&quot;opera.product&quot;, OperaProduct.MOBILE);
c.setCapability(&quot;opera.binary&quot;, &quot;/path/to/my/custom/opera-mobile-build&quot;);

WebDriver driver = new OperaDriver(c);
driver.get(&quot;bostonglobe.com&quot;);</code></pre>

<p>
  If you don&#39;t specify which binary to use it will start the Opera
  Mobile Emulator you already have installed in a default location.
  Since we require a special build, either set
  the <var>opera.binary</var> capability or the <var>OPERA_PATH</var>
  environmental variable for this example to work.
</p>

<p>
  Depending on your platform and specific preferences, the binary can be in any number of locations. However, here is a list of the most common:</p>
  <ul>
    <li>Linux: <code>/usr/bin/operamobile</code></li>
    <li>Mac: <code>/Applications/Opera Mobile Emulator.app</code></li>
    <li>Windows: <code>C:\Program Files\Opera Mobile Emulator\OperaMobileEmu.exe</code></li>
  </ul>

<p>
  You can learn more on how to use WebDriver
  from <a href="http://seleniumhq.org/docs/03_webdriver.html">Selenium&#39;s
  excellent documentation</a>, or you
  can <a href="http://selenium.googlecode.com/svn/trunk/docs/api/java/index.html">explore
  WebDriver&#39;s API documentation</a> on your own to learn more about
  which functionality is available.  OperaDriver
  also <a href="http://operasoftware.github.com/operadriver/docs/">has
  its own API documentation</a> if you want to look into which
  Opera-specific functionality is available to you as a WebDriver
  user.
</p>


<h2>Emulating a specific device</h2>

<p>
  The <a href="http://www.opera.com/developer/tools/mobile/">Opera
  Mobile Emulator</a> combined
  with <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a>
  lets you have a proper environment for mobile web development on
  your desktop.  One of the exciting features is that you can tell it
  to emulate Opera on a specific device based on a list of ready-made
  profiles.  This enables you to change the resolution of the screen,
  the pixel density, the UI, and to modify the user agent string.
</p>

<p>
  For example, to use a tablet UI with a greater resolution you could
  do the following:
</p>

<pre><code>DesiredCapabilities c = DesiredCapabilities.opera();
c.setCapability(&quot;opera.product&quot;, OperaProduct.MOBILE);
c.setCapability(&quot;opera.binary&quot;, &quot;/path/to/my/custom/opera-mobile-build&quot;);

// Use the tablet UI and a display of 860x600 pixels
c.setCapability(&quot;opera.arguments&quot;, &quot;-tabletui -displaysize 860x600&quot;);

WebDriver driver = new OperaDriver(c);
driver.get(&quot;vimeo.com&quot;);</code></pre>

<p>
  Note that changing these settings will likely be made easier at a
  later stage, perhaps by closer integration with the capabilities
  system.
</p>


<h2>Mobile-specific functionality</h2>

<p>
  With this release we&#39;ve also introduced a new entry-point
  class, <code>OperaMobileDriver</code>, which offers a few
  additional mobile specific roles, such
  as <a href="http://selenium.googlecode.com/svn/trunk/docs/api/java/org/openqa/selenium/Rotatable.html"><code>Rotatable</code></a>
  and <a href="http://selenium.googlecode.com/svn/trunk/docs/api/java/org/openqa/selenium/TouchScreen.html"><code>TouchScreen</code></a>,
  but not all of these have been fully implemented yet by
  <code>OperaMobileDriver</code>.
</p>

<p>
  For example, <code>Rotatable</code> will allow you to check the screen
  orientation of the emulator:
</p>

<pre><code>DesiredCapabilities c = DesiredCapabilities.opera();
c.setCapability(&quot;opera.binary&quot;, &quot;/path/to/my/custom/opera-mobile-build&quot;);

OperaMobileDriver driver = new OperaMobileDriver(c);
System.out.println(driver.getOrientation());</code></pre>


<h2>Known issues</h2>

<p>
  Opera Mobile support in OperaDriver is very much a prototype, but it should allow you to start exploring automated testing
  of the mobile web.  A few things to be aware of:
</p>

<ul>
  <li>There are issues with key combinations, such as when using
  modifier keys in action chains</li>

  <li>Using “special” keys, like arrow left or right, will not work
  due to the nature of the mobile browser</li>

  <li>Large portions of <code>TouchScreen</code> and <code>Rotatable</code> have not been fully
  implemented yet</li>

  <li>There is no support for testing Opera Mobile on real devices
  yet, but we expect that to follow soon</li>
</ul>

<p>
  If you have any bugs to report, please do so in
  the <a href="https://github.com/operasoftware/operadriver/issues">issue
  tracker</a>.
</p>


<h2>When will it be ready?</h2>

<p>
  OperaDriver 0.16 has already landed in Selenium&#39;s trunk and support
  for Opera Mobile should be available in the standalone JARs as of
  2.26.  This will allow you to use other languages, such as Python or
  Ruby, to control Opera Mobile.
</p>

<p>
  Controlling Opera Mobile on real Android devices still needs some
  further polishing before it&#39;s ready, so stay tuned!
</p>

