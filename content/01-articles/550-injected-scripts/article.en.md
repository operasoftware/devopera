Title: Injected scripts
----
Date: 2011-12-06 05:33:35
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
   <dt><a href="/articles/view/extensions-api-opera-addEventListener">opera.addEventListener()</a></dt>
   <dd>Registers a listener for an event specific to the injected script side.</dd>
   
   <dt><a href="/articles/view/extensions-api-opera-removeEventListener">opera.removeEventListener()</a></dt>
   <dd>Removes an existing listener from an event.</dd>
   
   <dt><a href="/articles/view/extensions-api-opera-defineMagicFunction">opera.defineMagicFunction()</a></dt>
   <dd>This method can be used to override global functions defined by regular scripts in a page.</dd>
   
   <dt><a href="/articles/view/extensions-api-opera-defineMagicVariable">opera.defineMagicVariable()</a></dt>
   <dd>This method can be used by to override global variables defined by regular scripts in a page.</dd>
   
   <dt><a href="/articles/view/extensions-api-opera-postError">opera.postError()</a></dt>
   <dd>Makes a given text string appear in the Error Console. Helpful for debugging.</dd>
</dl>


<h2>Overview</h2>

<p>You can add JavaScript to a website using &quot;injected scripts&quot;. These are normal JavaScript files located inside the &quot;includes&quot; folder in the extension. Opera will execute the given scripts on either all pages, or certain sites and domains they have been targeted for.</p>

<p>You can, for example, create injected scripts that hide comments on YouTube that are written in upper case, or show all text links on all web pages in pink.</p>
    
<p class="clear separator">Note that injected scripts are essentially User JavaScript, which Opera has supported for a while, and for which we have existing <a href="http://www.opera.com/docs/userjs/">UserJS documentation</a> which includes tutorials, examples and API specification.</p>

<h2>Examples</h2>

<p>The below example is an injected script (/includes/injectedScript.js) that adds a tooltip (using the <code>title</code> attribute) to all links on BBC News (but not on BBC Sport).</p>

<pre><code>// ==UserScript==
// @include http://www.bbc.co.uk/news/*
// @include http://news.bbc.co.uk/*
// @exclude http://news.bbc.co.uk/sport/*
// ==/UserScript==

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  
  // Loop through all  elements (links) in the page
  var links = document.querySelectorAll(&#39;a&#39;);
  for (var i = 0, len = links.length; i &lt; len; i++) {
    // For each link, show the URL as a title attribute (tooltip)
    links[i].title = links[i].href;
  }    
}, false);</code></pre>

<p>Below is another example, this time showing how the injected script can send messages to the backgrond process. For more information on how to send messages between injected scripts and other parts of an extension take a look at the <a href="/articles/view/extensions-api-messaging">messaging</a> guide.</p>

<p>The injected script (e.g. /includes/injectedScript.js):</p>

<pre><code>// ==UserScript==
// @include http://*.facebook.com/*
// ==/UserScript==

opera.extension.postMessage(&quot;He&#39;s on facebook again!&quot;);</code></pre>

<p>The background script (e.g. within index.html):</p>

<pre><code>//
// Store the number of Facebook visits in the extension&#39;s preferences
//

// Get the current Facebook visit count, or zero if it doesn&#39;t exist
var facebookCount = (widget.preferences[&#39;facebookCount&#39;]) ? widget.preferences[&#39;facebookCount&#39;] : 0;

// Listen for injected script messages 
opera.extension.onmessage = function(event) {
  // User has been on facebook again
  if (event.data === &quot;He&#39;s on facebook again!&quot;) {
    facebookCount += 1;
  }

  // Store the updated count in the preferences
  widget.preferences[&#39;facebookCount&#39;] = facebookCount;
};</code></pre>
