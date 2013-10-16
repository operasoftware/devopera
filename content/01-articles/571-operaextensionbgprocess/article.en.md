Title: opera.extension.bgProcess
----
Date: 2011-12-06 06:22:28
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

<p>A reference to the <code>window</code> object of the background process. The <code>bgProcess</code> object can be used to set and get variables and functions between the background script and a popup window or preferences page. Note that it cannot be used in injected scripts for security reasons.</p>

<h2>Example (variable):</h2>

<p>The value of a variable in the background process is displayed when the preferences page is opened.</p>

<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

var data = &#39;This is some important data in the backround process&#39;;</code></pre>
    
<pre><code>//
// An extension environment (e.g. &#39;/options.js&#39;)
//

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  var myElement = document.createElement(&#39;p&#39;);
  myElement.textContent = opera.extension.bgProcess.data;
  document.body.appendChild(myElement);
}, false);</code></pre>

<h2>Example (function):</h2>

<p>Executing a function in the background process from the preferences page.</p>

<pre><code>//
// The background process (&#39;/background.js&#39;). 
//

function doReverse(text) {
  var output = &#39;&#39;;
  for (var i = text.length - 1; i &gt;= 0; i--) {
    output += text.charAt(i);
  }
  return output;
}</code></pre>
    
<pre><code>//
// An extension environment (e.g. &#39;/options.js&#39;)
//

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  var reversedText = opera.extension.bgProcess.doReverse(&#39;enihcam ym no skrow tI&#39;);
}, false);</code></pre>


