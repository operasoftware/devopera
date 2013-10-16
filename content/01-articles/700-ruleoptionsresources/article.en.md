Title: RuleOptions.resources
----
Date: 2012-05-15 08:18:30
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

<p>A bit-masked value indicating the types of resources to apply a given <a href="/articles/view/extensions-api-urlfilter/">URL Filter</a> rule to. The available resource types are as follows:</p>

<dl>
    <dt>RESOURCE_DOCUMENT</dt>
    <dd>Top-level documents.</dd>
    
    <dt>RESOURCE_FONT</dt>
    <dd>Font resources referenced in CSS properties or SVG elements</dd>
    
    <dt>RESOURCE_IMAGE</dt>
    <dd>Image resources referenced by <code>&lt;img&gt;</code> elements, the background attribute on various elements, or CSS properties.</dd>
    
    <dt>RESOURCE_MEDIA</dt>
    <dd>Media resources referenced by <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> or <code>&lt;source&gt;</code> elements.</dd>
    
    <dt>RESOURCE_OBJECT</dt>
    <dd>Generic object resources referenced by <code>&lt;object&gt;</code> elements.</dd>
    
    <dt>RESOURCE_OBJECT_SUBREQUEST</dt>
    <dd>A request made by a plugin loaded by an HTML <code>&lt;embed&gt;</code> or <code>&lt;object&gt;</code> element.</dd>
    
    <dt>RESOURCE_OTHER</dt>
    <dd>Any resource not covered by the other resource types.</dd>
    
    <dt>RESOURCE_REFRESH</dt>
    <dd>An HTML <code>&lt;meta&gt;</code> element with an <code>http-equiv</code> attribute whose value is &quot;refresh&quot; and a content attribute whose value contains a timeout value and optionally a URL.</dd>
    
    <dt>RESOURCE_SCRIPT</dt>
    <dd>Script resources referenced by <code>&lt;script&gt;</code> elements.</dd>
    
    <dt>RESOURCE_STYLESHEET</dt>
    <dd>Stylesheet resources referenced either by <code>&lt;link&gt;</code> elements or <code>@import</code> directives within a stylesheet.</dd>
    
    <dt>RESOURCE_SUBDOCUMENT</dt>
    <dd>Resources referenced by an <code>&lt;frame&gt;</code> or <code>&lt;iframe&gt;</code> element.</dd>
    
    <dt>RESOURCE_XMLHTTPREQUEST</dt>
    <dd>A request from an <code>XMLHttpRequest</code> object.</dd>
</dl>

<p>This property is passed within a <code>RuleOptions</code> object as a parameter for URL Filter methods.</p>

<h2>Syntax:</h2>

<p><code>unsigned long resources</code></p>

<h2>Examples:</h2>

<h3>Example 1</h3>

<p>The following example blocks content from google.com whenever it appears as the source of a frame or iframe, e.g. a Google+ widget.</p>

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
  
  // Set the options for the filter rule
  var ruleOptions = {
      resources: filter.RESOURCE_SUBDOCUMENT
  }
  
  filter.block.add(&#39;||google.com/*&#39;, ruleOptions);
}</code></pre>

<h3>Example 2</h3>

<p>This next example uses a custom function to make it easier to combine multiple resource types. In this case, it blocks all scripts, stylesheets and images from the google.com domain.</p>

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
  // Function for mapping filter resources
  function types(types) {
    var urlfilter = opera.extension.urlfilter;
    var contentType = 0;
    var map = {
      &quot;other&quot;: urlfilter.RESOURCE_OTHER, // 1
      &quot;script&quot;: urlfilter.RESOURCE_SCRIPT, // 2
      &quot;image&quot;: urlfilter.RESOURCE_IMAGE, // 4
      &quot;stylesheet&quot;: urlfilter.RESOURCE_STYLESHEET, // 8
      &quot;object&quot;: urlfilter.RESOURCE_OBJECT, // 16
      &quot;subdocument&quot;: urlfilter.RESOURCE_SUBDOCUMENT, // 32
      &quot;document&quot;: urlfilter.RESOURCE_DOCUMENT, // 64
      &quot;refresh&quot;: urlfilter.RESOURCE_REFRESH, // 128
      &quot;xmlhttprequest&quot;: urlfilter.RESOURCE_XMLHTTPREQUEST, // 2048
      &quot;objectsubrequest&quot;: urlfilter.RESOURCE_OBJECT_SUBREQUEST, // 4096
      &quot;media&quot;: urlfilter.RESOURCE_MEDIA, // 16384
      &quot;font&quot;: urlfilter.RESOURCE_FONT // 32768
    };

    for (var i = 0, len = arguments.length; i &lt; len; i++) {
      contentType |= map[arguments[i]];
    }
    
    return contentType;
  }
  
  // Set the options for the filter rule
  ruleOptions = {resources: types(&quot;script&quot;, &quot;stylesheet&quot;, &quot;image&quot;)};
  /*
   * This is equivalent to
   * ruleOptions = {
   *   resources: opera.extension.urlfilter.RESOURCE_SCRIPT |
   *     opera.extension.urlfilter.RESOURCE_STYLESHEET |
   *     opera.extension.urlfilter.RESOURCE_IMAGE
   * };
   */
  
  opera.extension.urlfilter.block.add(&#39;||google.com/*&#39;, ruleOptions);
}</code></pre>

<p class="note">Note the use of <code>||</code> which is a hostname mark. This indicates that the subsequent characters should begin matching from any host name in the URL. For example, <code>||example.com*</code> matches <code>http://example.com/</code>, <code>https://www.example.com/</code>, or similar. However, it will not match <code>http://badexample.com/</code>.</p>

