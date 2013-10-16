Title: access element
----
Date: 2011-12-06 06:56:38
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

<h2>Description</h2>

<p><code>The &lt;access&gt;</code> element allows authors permission to access external web resources. If the background process needs anything to load from outside the extension (like a web resource) then it needs to be specified in this element. If the extension needs to <a href="http://dev.opera.com/articles/view/cookie-sharing-in-opera-extensions/">share cookies</a> with a web domain, that also needs to be specified in the <code>&lt;access&gt;</code> element. The following attributes are associated with it.</p>

<ul>
    <li><code><a href="http://www.w3.org/TR/widgets-access/#attributes/">origin</a></code>: Specifies the domain part of a URL whose resources need to be fetched; you can use an asterisk (*) to specify unrestricted access to network resources</li>
    <li><code><a href="http://www.w3.org/TR/widgets-access/#attributes">subdomains</a></code>: Specifies whether the access requests are also valid on subdomains or not; it is a boolean, with valid values as &quot;true&quot; or &quot;false&quot;.</li>
</ul>

<h2>Examples</h2>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
 ...
   &lt;access origin=&quot;https://example.com&quot;/&gt;
 ...
&lt;/widget&gt;</code></pre>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/myExtension&quot; version=&quot;1.0&quot;&gt;
 ...
  &lt;access origin=&quot;https://example.com&quot; subdomains=&quot;true&quot; /&gt;
 ...
&lt;/widget&gt;</code></pre>

