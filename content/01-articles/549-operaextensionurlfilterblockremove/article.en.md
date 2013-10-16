Title: opera.extension.urlfilter.block.remove()
----
Date: 2011-12-06 05:27:01
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

<p>Removes a rule from the virtual list of blocked URLs.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>rule</code>: The rule (e.g. domain) to block.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void remove (&lt;DOMString&gt; rule)</code></p>

<h2>Example:</h2>

<pre><code>&lt;!-- 
  The configuration file (&#39;config.xml&#39;).
--&gt;
&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
    &lt;feature name=&quot;opera:urlfilter&quot;/&gt;
&lt;/widget&gt;</code></pre>    

<pre><code>//
// The background process (e.g. index.html) 
//

var whitelist = [&#39;http://opera.com/*&#39;, &#39;http://*.opera.com/*&#39;];

// Assign the URLFilter object to a variable for efficiency
var filter = opera.extension.urlfilter;

// Loop through the array of sites and remove each one from the &quot;block&quot; list
for (var i = 0, len = whitelist.length; i &lt; len; i++) {
  filter.block.remove(whitelist[i]);
}</code></pre>
