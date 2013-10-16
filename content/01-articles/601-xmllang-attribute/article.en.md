Title: xml:lang attribute
----
Date: 2011-12-06 07:13:32
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

<p>The <code><a href="http://www.w3.org/TR/widgets/#the-xmllang-attribute">xml:lang</a></code> attribute specifies the language of the contained text in the element. This attribute is optional and should only be used for localization purposes.</p>

<h2>Example</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
 ...
  &lt;span xml:lang=&quot;en&quot;&gt;
    TODO: Add some cool features.
  &lt;/span&gt;
  &lt;span xml:lang=&quot;ja&quot;&gt;
    TODO: クールな機能を追加する。
  &lt;/span&gt;
  ...
&lt;/widget&gt;</code></pre>

