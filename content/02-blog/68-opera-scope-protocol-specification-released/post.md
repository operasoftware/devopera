Title: Opera Scope protocol specification released
----
Date: 2009-07-02 18:37:13
----
Author: 
----
Text:

<p>With great pleasure I can announce that we have released the <a href="http://dragonfly.opera.com/app/scope-interface/index.html">Scope protocol specification</a>, which is used in Opera Dragonfly and some of our internal QA tools.  Currently Opera Dragonfly uses the STP/0 version, but for future version of Opera we will switch to the STP/1 version, which all new clients are recommended to use.</p>

<p>One of the reasons to release this documentation is that we hope that other browsers and users agents will be interested in adopting Scope in their products.  If this is the case, we’d like to standardise the specification through a standards body, so that there will be one standard way for tools to interact with the browser.  Having this would allow any developer tools to work with any browser that implements the specification.  This would be great not just for debugging tools like Opera Dragonfly and Firebug, but also IDEs and QA tools.</p>

<p>One of the key design decisions for Scope was to make sure it works well when debugging remote devices, such as a mobile phone or TV.  Debugging on a device is difficult, due to limited screen size, resolution or input method.  Scope allows you to connect your device to a computer running a Scope-enabled tool, so you can debug directly from the computer.  Since we started work on Scope, both Apple and Mozilla have released, or are in the process of releasing a mobile browser, and Google has come on the scene with a desktop and mobile browser of there own.  Being able to debug remotely is likely now important functionality for them as well.</p>

<p>You can read more about the Scope protocol on the Opera Dragonfly blog, written by one of the Scope Engineers, Johannes Hoff: <a href="http://my.opera.com/dragonfly/blog/scope-protocol-specification">Scope Protocol release: how the fat lady sings</a>.</p>
