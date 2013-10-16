Title: preference element
----
Date: 2011-12-06 07:10:33
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

<p><code>The &lt;preference&gt;</code> element allows for preferences to be declared by the developer. Using this, a key-value pair is stored in a persistent manner and is initiated the first time the extension is started. Preferences can then be accessed at runtime via the <code>widget.preferences</code> object in the background process or in any page from within the extension (see the markup example below).</p>

<p>The following attributes are associated with it.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-name-attribute">name</a></code>: Denotes a name for this preference</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-value-attribute">value</a></code>: Denotes a value for this preference</li>
    <li><code><a href="http://www.w3.org/TR/widgets/#the-readonly-attribute">readonly</a></code>: Indicates whether it can be overwritten at runtime or not; it is a boolean, with valid values as &quot;true&quot; or &quot;false&quot;</li>
</ul>

<h2>Example</h2>

<p>An example of this could be the following:</p>

<pre><code>&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
  &lt;preference name     = &quot;api-key&quot;
    value    = &quot;abcd123456&quot;
    readonly = &quot;true&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>Then, in the background process:</p>

<pre><code>//
// background.js
//

//gets the value the preference in the config.xml
var apiKey = widget.preferences[&quot;api-key&quot;];</code></pre>


