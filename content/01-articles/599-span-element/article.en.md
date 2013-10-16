Title: span element
----
Date: 2011-12-06 07:11:43
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

<p>The <code>&lt;span&gt;</code> element serves as a wrapper for text content, usually for the purpose of internationalization. The following attributes are associated with it.</p>
    
<ul>
    <li><code><a href="/articles/view/extensions-api-config-xml-lang/">xml:lang</a></code> (see also the <a href="http://www.w3.org/TR/widgets/#the-xml:lang-attribute">W3C specification</a>)</li>
    <li><code><a href="/articles/view/extensions-api-config-dir/">dir</a></code> (see also the <a href="http://www.w3.org/TR/widgets/#the-dir-attribute">W3C specification</a>)</li>
</ul>

<h2>Example</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.1&quot;&gt;
 ...
  &lt;span&gt;
    CHANGELOG
    Version 1.1: Added ability to travel through time.
  &lt;/span&gt;
  ...
&lt;/widget&gt;</code></pre>
