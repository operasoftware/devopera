Title: opera.extension.urlfilter.block.add()
----
Date: 2011-12-06 05:24:15
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

<p>Adds a rule to the virtual list of blocked URLs.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>rule</code>: The rule (e.g. domain) to block.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void add (&lt;DOMString&gt; rule)</code></p>

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

// Store and retrieve a list of URLs in the extension&#39;s preferences
widget.preferences[&#39;blacklist&#39;] = [&#39;http://opera.com/*&#39;, &#39;http://*.opera.com/*&#39;];
var blacklist = widget.preferences[&#39;blacklist&#39;].split(&#39;,&#39;);

// Assign the URLFilter object to a variable for efficiency
var filter = opera.extension.urlfilter;

// Loop through the array of sites and add each one to the &quot;block&quot; list
for (var i = 0, len = blacklist.length; i &lt; len; i++) {
  filter.block.add(blacklist[i]);
}</code></pre>

<p class="note">The following functionality is currently in production, and only available to test in an experimental build of Opera desktop. To download the experimental build, see <a href="http://dev.opera.com/articles/view/new-extension-apis-screenshot-resource-loader-url-filter/">Desktop build with new extension APIs: Screenshot, Resource Loader and URL Filter</a>.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>rule</code>: The rule (e.g. domain) to allow.</li>
        <li><code>options</code>: Options to specify conditions for the given rule.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void add (DOMString rule, RuleOptions options)</code></p>

<h2>Example</h2>

<p>The following example blocks all content from the google.com but only when it appears in a third-party domain (i.e. not google.com).</p>

<pre><code>&lt;!-- 
  The configuration file (&#39;config.xml&#39;).
--&gt;
&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
    ...
    &lt;feature name=&quot;opera:urlfilter&quot;/&gt;
&lt;/widget&gt;</code></pre>    

<pre><code>//
// The background process (e.g. index.html) 
//

if (typeof opera.extension.urlfilter != &#39;undefined&#39;) {
  // Set the options for the filter rule
  var ruleOptions = {
      thirdParty: true
  }
  
  opera.extension.urlfilter.block.add(&#39;||google.com/*&#39;, ruleOptions);
}</code></pre>

