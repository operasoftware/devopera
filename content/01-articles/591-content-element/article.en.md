Title: content element
----
Date: 2011-12-06 06:58:25
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

<h2>Description</h2>

<p>The <code>&lt;content&gt;</code> element is used to define a <a href="http://www.w3.org/TR/widgets/#custom-start-file">custom start file</a> for the extension. The following attributes are associated with it.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-src-attribute">src</a></code>: Points to a file within the extension package which is supposed to be the start file</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-encoding-attribute">encoding</a></code>: Character encoding of the file identified by the <code>src</code> attribute</li>
</ul>
    
<h2>Example</h2>
    
<pre><code>&lt;widget xmlns=&quot;http&#058;//www.w3.org/ns/widgets&quot;&gt;
  &lt;content src=&quot;index.xml&quot;
    encoding=&quot;utf-8&quot;
    type=&quot;application/xhtml+xml&quot;/&gt;
&lt;/widget&gt;</code></pre>

