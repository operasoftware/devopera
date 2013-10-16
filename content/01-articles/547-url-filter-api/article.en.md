Title: URL filter API
----
Date: 2011-12-06 05:19:49
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

<dl class="apicontents">
   <dt><a href="/articles/view/extensions-api-urlfilter-block-add">opera.extension.urlfilter.block.add()</a></dt>
   <dd>Adds a rule to the virtual list of blocked URLs.</dd>
   
   <dt><a href="/articles/view/extensions-api-urlfilter-block-remove">opera.extension.urlfilter.block.remove()</a></dt>
   <dd>Removes a rule from the virtual list of blocked URLs.</dd>

   <dt><a href="/articles/view/extensions-api-urlfilter-allow-add">opera.extension.urlfilter.allow.add()</a></dt>
   <dd>Adds a rule to the virtual list of allowed URLs.</dd>
   
   <dt><a href="/articles/view/extensions-api-ruleOptions-excludeDomains">RuleOptions.excludeDomains</a></dt>
   <dd>Domains on which to not apply a filter rule.</dd>
   
   <dt><a href="/articles/view/extensions-api-ruleOptions-includeDomains">RuleOptions.includeDomains</a></dt>
   <dd>Domains on which to apply a filter rule.</dd>
   
   <dt><a href="/articles/view/extensions-api-ruleOptions-resources">RuleOptions.resources</a></dt>
   <dd>Resource types to apply a filter rule to.</dd>
   
   <dt><a href="/articles/view/extensions-api-ruleOptions-thirdParty">RuleOptions.thirdParty</a></dt>
   <dd>Specifies whether a filter rule should apply to third-party domains.</dd>

   <dt><a href="/articles/view/extensions-api-urlfilter-syntax">URL Filter syntax</a></dt>
   <dd>Special characters that can be used when filtering.</dd>
</dl>

<h2>Overview</h2>

<p>The URL Filter API for Opera extensions defines a DOM interface that allows extensions to add temporary rules to Opera&#39;s native content blocker. Rules added through this API are associated with an extension and apply as long as the extension is enabled. Once an extension is disabled or the browser is shut down, the temporary rules are discarded.</p>

<p>To enable the URL filter, the <code>opera:urlfilter</code> feature needs to be added as a <code>feature</code> element to the extension&#39;s <code>config.xml</code> file.</p>

<p>An in-depth tutorial is available at Dev.Opera: <a href="http://dev.opera.com/articles/view/site-blocking-with-operas-url-filter-api/">Site blocking with Opera&#39;s URL Filter API</a></p>
    
<h2>Example</h2>

<p>Block <code>example.com/images</code>, <code>example.com/css</code> and any subdirectories, whatever the protocol. Note that <code>www.example.com</code> and other sub-domains are not affected.</p>
    
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

// Check that the URL Filter API exists
if (typeof opera.extension.urlfilter != &#39;undefined&#39;) {
  // Create a list of rules to block
  var rules = [&#39;*://example.com/images/*&#39;, &#39;*://example.com/css/*&#39;];

  // Assign the URLFilter object to a variable for efficiency
  var filter = opera.extension.urlfilter;

  // Loop through the array of rules and add each one to the &quot;block&quot; list
  for (var i = 0, len = rules.length; i &lt; len; i++) {
    filter.block.add(rules[i]);
  }
}</code></pre>

