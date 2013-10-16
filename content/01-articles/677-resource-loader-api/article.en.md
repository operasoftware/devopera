Title: Resource Loader API
----
Date: 2012-04-25 06:24:42
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
   <dt><a href="/articles/view/extensions-api-resourceloader-getFile">opera.extension.getFile()</a></dt>
   <dd>Gets a file within an extension package.</dd>
</dl>

<h2>Overview</h2>

<p>Because of the security model that Opera extensions use, simply grabbing a local file from some parts of an extension has not been possible. For example, an injected script could not access an image file, even if it was within the same extension package. A workaround has been to use XMLHttpRequest (AJAX) from the background script but this is cumbersome and still restricted to non-binary data. The Resource Loader API aims to solve this problem by making it easy to access any file within an extension package, from any part of the extension.</p>

<p>There are two parts to reading a particular file within an extension:</p>

<ol>
    <li>Use this API&#39;s <a href="/articles/view/extensions-api-resourceloader-getFile"><code>getFile()</code> method</a> to get a file object.</li>
    <li>Use the <a href="http://www.w3.org/TR/FileAPI/">W3C File API</a> to read the contents of the file object.</li>
</ol>

<p>The API is available to all extension contexts, such as injected script, background script, popup page and options page. Some examples of when it could be used are displaying the extension&#39;s logo within an options page, or reading a CSS file to apply styles to a web page. It&#39;s also possible to read the extension&#39;s metadata from the <code>config.xml</code> file.</p>

<h2>Notes</h2>

<ul>
    <li>Similar to web URIs, only forward slashes (<code>/</code>) can be used in file paths.</li>
    <li>Both relative and absolute paths are allowed. An absolute path is one that begins with a forward slash (<code>/</code>), referring to the extension&#39;s root directory.</li>
    <li>The API&#39;s <code>getFile()</code> method will automatically retrieve localised versions of files if available. For more information on localisation, see our article on <a href="http://dev.opera.com/articles/view/creating-multilingual-extensions/">Creating Multilingual Extensions</a>.</li>
</ul>

<h2>Example</h2>

<p>The following example has an image of a padlock within the extension&#39;s <code>images</code> directory. It displays this within each page that has <code>https://</code> within its URL.</p>
    
<pre><code>&lt;!-- 
  The configuration file (&#39;config.xml&#39;).
--&gt;
&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;http://example.com/amisecure&quot; version=&quot;1.0&quot; defaultlocale=&quot;en&quot;&gt;
  &lt;name&gt;Am I secure?&lt;/name&gt;
  &lt;description&gt;Displays a padlock icon when a page uses SSL (https in the URL).&lt;/description&gt;
  &lt;icon src=&quot;images/icon_64.png&quot;/&gt; &lt;!-- Source: http://openclipart.org/detail/58957/lock-by-jhnri4 --&gt;
&lt;/widget&gt;</code></pre>

<pre><code>//
// An injected script (e.g. includes/injected.js)
//

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  if (window.location.href.indexOf(&#39;https://&#39;) &gt; -1) {
    function displayImage() {
          // Create an image element from the FileReader object
          var badge = document.createElement(&quot;img&quot;);
          badge.src = fr.result;
          
          // Apply styles to the image
          badge.style.position = &#39;fixed&#39;;
          badge.style.top = &#39;2px&#39;;
          badge.style.right = &#39;2px&#39;;
          badge.style.zIndex = &#39;1001&#39;;
          badge.title = &quot;Secured with SSL&quot;;
          
          // Append the image to the current page
          document.body.appendChild(badge);
    }
    
    // Get the image resource
    var imgFile = opera.extension.getFile(&quot;/images/icon_16.png&quot;);
    
    if (imgFile) {
      // Read out the File object as a Data URI
      var fr = new FileReader();
      fr.onload = displayImage;
      fr.readAsDataURL(imgFile);
    }
  }
}, false);</code></pre>

