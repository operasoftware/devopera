Title: RuleOptions.includeDomains
----
Date: 2012-05-15 08:17:00
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

<p>An array of zero or more domains on which to apply a given <a href="/articles/view/extensions-api-urlfilter/">URL Filter</a> rule.</p>

<p>This property is passed within a <code>RuleOptions</code> object as a parameter for URL Filter methods.</p>

<h2>Syntax:</h2>

<p><code>DOMString[] includeDomains</code></p>

<h2>Example:</h2>

<p>The following example blocks any content with <code>/ads/</code> in the URL except from <code>||huffpost.com/images/ads/*</code> and when included in pages in the huffingtonpost.com domain.</p>

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
  
  filter.block.add(&#39;*/ads/*&#39;);
  
  // The following is the same as this Adblock syntax for whitelisting:
  // @@||huffpost.com/images/ads/$domain=huffingtonpost.com
  var ruleOptions = {
    includeDomains: [&#39;huffingtonpost.com&#39;]
  }
  filter.allow.add(&#39;||huffpost.com/images/ads/*&#39;, ruleOptions);
}</code></pre>

<p class="note">Note the use of <code>||</code> which is a hostname mark. This indicates that the subsequent characters should begin matching from any host name in the URL. For example, <code>||example.com*</code> matches <code>http://example.com/</code>, <code>https://www.example.com/</code>, or similar. However, it will not match <code>http://badexample.com/</code>.</p>
