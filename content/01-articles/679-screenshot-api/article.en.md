Title: Screenshot API
----
Date: 2012-04-25 06:27:41
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
   <dt><a href="/articles/view/extensions-api-screenshot-getScreenshot">opera.extension.getScreenshot()</a> (also BrowserTab.getScreenshot())</dt>
   <dd>Captures a screenshot of a page within a tab.</dd>
</dl>

<h2>Overview</h2>

<p>The Screenshot API for Opera extensions enables a screenshot to be taken of a page within a tab. Only the visible portion of the page is included in the screenshot, excluding the browser chrome (i.e. no toolbars and scrollbars, etc.).</p>

<p>There is a single method available to create a screenshot &#x2014; <code>getScreenshot()</code> &#x2014; and this method can be called from two contexts:</p>

<ul>
    <li>An extension&#39;s injected script</li>
    <li>An extension&#39;s background script</li>
</ul>

<p>Because of this, possible use cases are either a toolbar button to call the method in the background script, or an in-page UI to call the method in an injected script.</p>

<p>The <code>getScreenshot()</code> method does not return a value, but rather executes a callback function which is specified as its parameter. The callback function in turn needs its own parameter with an arbitrary name. This parameter is an <code>ImageData</code> object which can be written to an HTML5 <code>&lt;canvas&gt;</code> context using the <code>putImageData()</code> method.</p>

<h2>Example</h2>

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

<h2>Compatibility</h2>

<p>Google Chrome extensions have access to a similar API which uses a method named <code>captureVisibleTab()</code>. If you wish to port a Google Chrome extension to Opera, below is a function you can use to mimic the behaviour of <code>captureVisibleTab()</code>.</p>

<pre><code>// Note: This assumes that all optional arguments are present
function captureVisibleTab(window, options, callBack) {
  if (options.format)
    var type = &quot;image/&quot; + options.format;
  else
    type = &quot;image/jpeg&quot;; //chrome gives jpeg by default
    
  opera.extension.getScreenshot(handleImage);
  
  function handleImage(theImage) {
    var myCanvas = document.createElement(&#39;canvas&#39;);
    myCanvas.width = theImage.width;
    myCanvas.height = theImage.height;
    var ctx = aCanvas.getContext(&#39;2D&#39;);
    ctx.putImageData(&#39;theImage&#39;);
    theData = aCanvas.toDataURL(type);
    callBack(theData);
  }
}</code></pre>

(Image attribution: <a href="http://thenounproject.com/noun/camera/#icon-No3987">Camera</a> designed by <a href="http://thenounproject.com/Simon Child">Simon Child</a> from The Noun Project)
