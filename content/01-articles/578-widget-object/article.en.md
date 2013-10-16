Title: Widget object
----
Date: 2011-12-06 06:35:16
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
   <dt><a href="/articles/view/extensions-api-widget-author">widget.author</a></dt>
   <dd>A readonly attribute referring to the extension&#39;s author.</dd>
   
   <dt><a href="/articles/view/extensions-api-widget-authorEmail">widget.authorEmail</a></dt>
   <dd>A readonly attribute referring to the extension author&#39;s email address.</dd>
   
   <dt><a href="/articles/view/extensions-api-widget-authorHref">widget.authorHref</a></dt>
   <dd>A readonly attribute referring to the extension author&#39;s website URL.</dd>
   
   <dt><a href="/articles/view/extensions-api-widget-description">widget.description</a></dt>
   <dd>A readonly attribute referring to the extension&#39;s description.</dd>
   
   <dt><a href="/articles/view/extensions-api-widget-id">widget.id</a></dt>
   <dd>A readonly attribute referring to the extension&#39;s unique ID.</dd>
   
   <dt><a href="/articles/view/extensions-api-widget-name">widget.name</a></dt>
   <dd>A readonly attribute referring to the extension&#39;s name.</dd>
   
   <dt><a href="/articles/view/extensions-api-widget-preferences">widget.preferences</a></dt>
   <dd>Readonly attributes that refer to the extension&#39;s preferences in key/value format.</dd>
   
   <dt><a href="/articles/view/extensions-api-widget-shortName">widget.shortName</a></dt>
   <dd>A readonly attribute referring to a shortened version of the extension&#39;s name.</dd>
   
   <dt><a href="/articles/view/extensions-api-widget-version">widget.version</a></dt>
   <dd>A readonly attribute referring to the extension&#39;s version number.</dd>
</dl>


<h2>Overview</h2>

<p>The <code>widget</code> object provides functionality for accessing an extension&#39;s metadata and persistently-stored data. It can be accessed from any of the extension&#39;s environments, such as background process, popup window, injected script or preferences page. Note that the <code>widget</code> object is readonly and therefore cannot be used to edit or store values on-the-fly.</p>
    
<h2>Example</h2>

<p>The below example shows how simple it is to access data within the <code>widget</code> object.</p>

<pre><code>//
// The preferences page (e.g. options.js)
//

var footer = &#39;This extension is the work of &lt;a href=&quot;&#39; + widget.authorHref + &#39;&quot;&gt;&#39; + widget.author + &#39;&lt;/a&gt;&#39;;
document.body.innerHTML += footer;</code></pre>

