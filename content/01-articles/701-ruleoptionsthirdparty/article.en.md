Title: RuleOptions.thirdParty
----
Date: 2012-05-15 08:20:32
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

<p>A boolean property specifying whether a given <a href="/articles/view/extensions-api-urlfilter/">URL Filter</a> rule should apply to third-party domains. The value <code>true</code> indicates that <b>only domains with a different origin</b> are matched by this option. The value <code>false</code> indicates that <b>only domains with the same origin</b> are matched by this option. The value <code>null</code>, or if the <code>thirdParty</code> property is not specified, indicates that all domains are matched by this option.</p>

<p>This property is passed within a <code>RuleOptions</code> object as a parameter for URL Filter methods.</p>

<h2>Syntax:</h2>

<p><code> boolean thirdParty</code></p>

<h2>Example:</h2>

<p>The following example blocks any content from the facebook.com domain, but only when it&#39;s included in a web page as third-party code, i.e. in non-facebook.com domains.</p>

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
    thirdParty: true
  }
  
  opera.extension.urlfilter.block.add(&#39;||facebook.com/*&#39;, ruleOptions);
}</code></pre>

<p class="note">Note the use of <code>||</code> which is a hostname mark. This indicates that the subsequent characters should begin matching from any host name in the URL. For example, <code>||example.com*</code> matches <code>http://example.com/</code>, <code>https://www.example.com/</code>, or similar. However, it will not match <code>http://badexample.com/</code>.</p>

