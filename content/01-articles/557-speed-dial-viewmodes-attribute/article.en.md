Title: Speed Dial viewmodes attribute
----
Date: 2011-12-06 05:54:36
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

<h2>Description:</h2>

<p>Indicates whether the extension should be run in a minimized state by using a value of <code>minimized</code>. It is not mandatory that the minimized view mode be explicitly used through CSS in the background process&#x2014;so long as the extension declares that the minimized view mode is supported, the background process will be rendered regardless.</p>

<h2>Example:</h2>

<p>This example shows how a developer indicates that their extension supports the <code>minimized</code> view mode.</p>

<pre><code>&lt;!-- config.xml --&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
    id=&quot;http://example.com/myextension&quot;
    defaultlocale=&quot;en&quot;
    viewmodes=&quot;minimized&quot;&gt;
  ...
&lt;/widget&gt;</code></pre>


