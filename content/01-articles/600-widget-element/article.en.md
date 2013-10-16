Title: widget element
----
Date: 2011-12-06 07:12:40
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

<p>The <code>&lt;widget&gt;</code> element is the container element under which the rest of the elements of the config.xml file go. The following attributes are associated with it.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-id-attribute">id</a></code>: A URL that uniquely identifies the widget or extension.
        <ul>
            <li>This is used by the browser for identifying installations and for automatically updating the extension.</li>
            <li>The <code>id</code> is set automatically by the Opera extensions repository when a new extension is uploaded. </li>
            <li>Developers should add an <code>id</code> attribute during development to avoid installing multiple instances of the same extension.</li>
        </ul>
    </li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-version-attribute">version</a></code>: Specifies a version of the extension.</li>
</ul>

<h2>Example</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
  ...
&lt;/widget&gt;</code></pre>
