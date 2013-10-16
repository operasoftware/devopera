Title: opera.extension.urlfilter.allow.add()
----
Date: 2012-05-15 08:24:52
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

<p>Adds a rule, with accompanying options, to the virtual list of allowed URLs (whitelist).</p>

<p class="note">Note that allowed rules have priority over blocked rules by default.</p>

<h2>Parameters:</h2>

    <ul>
        <li><code>rule</code>: The rule (e.g. domain) to allow.</li>
        <li><code>options</code>: Options to specify conditions for the given rule.</li>
    </ul>

<h2>Syntax:</h2>

<p><code>void add (DOMString rule, RuleOptions options)</code></p>

<h2>Examples:</h2>

<h3>Example 1</h3>

<p>The following example blocks any content from facebook.com, but only when accessed from the cnn.com domain, e.g. a &quot;Like&quot; or &quot;Recommend&quot; button.</p>

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

// Check that the URL Filter API exists
if (typeof opera.extension.urlfilter != &#39;undefined&#39;) {
  // Set the options for the filter rule
  var ruleOptions = {
    excludeDomains: [&#39;cnn.com&#39;]
  }
  
  // Assign the URLFilter object to a variable for efficiency
  var filter = opera.extension.urlfilter;
  
  filter.allow.add(&#39;||facebook.com/*&#39;, ruleOptions);
  filter.block.add(&#39;||facebook.com/*&#39;);
}</code></pre>

<h3>Example 2</h3>

<p>This second example shows how we can convert whitelisting in <a href="http://adblockplus.org/">Adblock Plus</a> syntax to the Opera URL Filter syntax. The whitelisting rule will allow scripts from the <code>||ads.cnn.com/js.ng/*&amp;cnn_intl_subsection=download</code> URL and is taken from this list: <a href="https://easylist-downloads.adblockplus.org/easylist.txt">https://easylist-downloads.adblockplus.org/easylist.txt</a></p>

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

// Check that the URL Filter API exists
if (typeof opera.extension.urlfilter != &#39;undefined&#39;) {
  // Assign the URLFilter object to a variable for efficiency
  var filter = opera.extension.urlfilter;
  
  filter.block.add(&#39;||ads.*&#39;);
  
  // The following is the same as this Adblock syntax for whitelisting:
  // @@||ads.cnn.com/js.ng/*&amp;cnn_intl_subsection=download$script
  filter.allow.add(&quot;||ads.cnn.com/js.ng/*&amp;cnn_intl_subsection=download&quot;, {resources: filter.RESOURCE_SCRIPT});
}</code></pre>

<p class="note">Note the use of <code>||</code> which is a hostname mark. This indicates that the subsequent characters should begin matching from any host name in the URL. For example, <code>||example.com*</code> matches <code>http://example.com/</code>, <code>https://www.example.com/</code>, or similar. However, it will not match <code>http://badexample.com/</code>.</p>

