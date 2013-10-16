Title: URL Filter syntax
----
Date: 2012-05-22 08:39:37
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

<p>Enables special characters to be used for more flexible filtering. Note that all pattern matching is case sensitive.</p>

<h2>Syntax:</h2>

<h3>Wildcard</h3>

<p><code>*</code> matches any character.</p>

<h3>Hostname marker</h3>

<p><code>||</code> matches the beginning of any hostname.</p>

<h3>Separator wildcard</h3>

<p><code>^</code> matches a single character from the following list:</p>

<p><code>! &quot; # $ &amp; &#39; ( ) * + , / : ; &lt; = &gt; ? @ [ \ ] ^ ` { | } ~</code></p>

<p>In other words, <code>||</code> matches any character in the ASCII subset that is not a letter, a digit, or one of the following:</p>

<p><code>_ - . %</code></p>

<p>For example, <code>||example.com^</code> will match match http://example.com:8080/, http://example.com/, https://subdomain.example.com/, etc. but not http://example.com.evil.com because <code>^</code> doesn&#39;t match <code>.</code> (period).

<h2>Example:</h2>

<p>This example shows how we can convert whitelisting in <a href="http://adblockplus.org/">Adblock Plus</a> syntax to the Opera URL Filter syntax. The whitelisting rule will allow scripts from the <code>||ads.cnn.com/js.ng/*&amp;cnn_intl_subsection=download</code> URL and is taken from this list: <a href="https://easylist-downloads.adblockplus.org/easylist.txt">https://easylist-downloads.adblockplus.org/easylist.txt</a></p>

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
</p>
