Title: dir attribute
----
Date: 2011-12-06 07:03:18
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

<p>	The <code><a href="http://www.w3.org/TR/widgets/#the-dir-attribute">dir</a></code> attribute defines the direction of the language used by an element with the following values:</p>

<ul>
    <li><code>&quot;ltr&quot;</code> value stands for Left-To-Right text</li>
    <li><code>&quot;rtl&quot;</code> value stands for Right-To-Left text</li>
    <li><code>&quot;lro&quot;</code> value stands for Left-To-Right Override text</li>
    <li><code>&quot;rlo&quot;</code> value stands for Right-To-Left Override text</li>
</ul>

<h2>Example</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
 ...
  &lt;span dir=&quot;rtl&quot;&gt;
    Text meant to be read from right to left can go here.
  &lt;/span&gt;
  ...
&lt;/widget&gt;</code></pre>

