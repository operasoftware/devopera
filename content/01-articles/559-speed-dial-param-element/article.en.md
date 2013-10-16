Title: Speed Dial param element
----
Date: 2011-12-06 05:57:03
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

<p>The Speed Dial feature request takes one parameter whose <code>name</code> attribute value is the string <code>url</code> and whose <code>value</code> attribute value is a valid non-empty URL potentially surrounded by spaces. The <code>param</code> element is defined in the <a href="http://www.w3.org/TR/widgets/#param">W3C Widgets specification</a>.</p>

<p>A developer is required to include the <code>url</code> parameter with a Speed Dial feature request to allow synchronization Opera Link. Without one, the extension will be treated as invalid.</p>

<h2>Attributes:</h2>

<ul>
    <li><code>name</code>: Name of a parameter; value for an Opera Speed Dial feature is <code>url</code>.</li>
    <li><code>value</code>: URL; indicates the URL to open when the Speed Dial cell is clicked.</li>
</ul>

<h2>Example:</h2>

<p>This examples shows how to make a Speed Dial feature request.</p>

<pre><code>&lt;!-- config.xml --&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;
    id=&quot;http://example.com/myextension&quot;
    defaultlocale=&quot;en&quot;
    viewmodes=&quot;minimized&quot;&gt;
  &lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
    &lt;param name=&quot;url&quot; value=&quot;http://opera.com&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>


