Title: Speed Dial feature element
----
Date: 2011-12-06 05:55:57
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

<p>A feature request by the extension to have its content displayed in a Speed Dial cell. It requires one parameter, the <code>url</code> parameter, as a <code>param</code> child element. The <code>feature</code> element is defined in the <a href="http://www.w3.org/TR/widgets/#the-feature-element-and-its-attributes"> W3C Widgets specification</a>.</p>

<p>A developer must make a Speed Dial feature request in order to display content from within an extension in a Speed Dial cell.</p>

<p>For backward compatibility and to support user agents that don&#39;t have a speed dial, a developer should make sure their extension works without requiring the Speed Dial feature request. This is achieved by setting the <code>required</code> attribute of the <code>feature</code> element to <code>false</code>, as shown in the following example.</p>

<h2>Attributes:</h2>

<ul>
    <li><code>name</code>: Name of feature request; the value for Opera Speed Dial is <code>opera:speeddial</code>.</li>
    <li><code>required</code>: Boolean; <code>false</code> indicates that Speed Dial is not required for the extension to run.</li>
</ul>

<h2>Example:</h2>

<p>This example shows how to use the Speed Dial feature name in a Speed Dial feature request:</p>

<pre><code>&lt;!-- config.xml --&gt;
&lt;feature name=&quot;opera:speeddial&quot; required=&quot;false&quot;&gt;
  ...
&lt;/feature&gt;</code></pre>


