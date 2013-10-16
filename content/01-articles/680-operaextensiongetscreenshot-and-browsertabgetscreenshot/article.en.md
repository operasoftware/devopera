Title: opera.extension.getScreenshot() and BrowserTab.getScreenshot()
----
Date: 2012-04-25 06:30:02
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

<p>Captures a screenshot of a page within a tab.</p>

<h2>Parameters:</h2>


    <ul>
        <li><code>callback</code>: The callback function to execute. The callback function takes an ImageData object as its parameter, provided by the API.</li>
    </ul>


<h2>Syntax:</h2>

<p><code>void getScreenshot (&lt;Function&gt; callback)</code></p>

<h2>Example:</h2>
    
<pre><code>&lt;!-- 
  The configuration file (&#39;config.xml&#39;).
--&gt;
&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
    &lt;feature name=&quot;opera:screenshot&quot; required=&quot;false&quot;/&gt;
&lt;/widget&gt;</code></pre>    

<pre><code>//
// An injected script (e.g. includes/injected.js) 
//

window.addEventListener(&#39;load&#39;, function() { 
  // Check the Screenshot API is available
  if (opera.extension.getScreenshot) {
    opera.postError(&#39;Screenshot API found&#39;);
            
    // Callback function to replace page content with the screenshot
    function applyScreenshot(imageData) {
      opera.postError(&#39;Appending screenshot to current page...&#39;);
      
      // Create a blank canvas
      var canvas = document.createElement(&#39;canvas&#39;);
      canvas.width = imageData.width;
      canvas.height = imageData.height;

      // Write the screenshot image data to the canvas context
      var ctx = canvas.getContext(&#39;2d&#39;);
      ctx.putImageData(imageData, 0, 0);

      // Replace the page&#39;s content with the canvas
      var body = document.body;
      body.innerHTML = &#39;&#39;;
      body.appendChild(canvas);
      
      opera.postError(&#39;Snapshot appended to current page.&#39;);
    }
    
    // Use the API&#39;s method to execute the callback function
    opera.extension.getScreenshot(applyScreenshot);        
  } else {
    opera.postError(&#39;No Screenshot API found&#39;);
  }    
}, false);</code></pre>
    

