Title: opera.extension.getFile()
----
Date: 2012-04-25 06:26:14
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

<p>Gets a file within an extension package.</p>

<h2>Parameters:</h2>

    <ul>
        <li><code>path</code>: The path of the file to retrieve, within the extension package. Paths beginning with a forward slash (<code>/</code>) are absolute paths and refer to the extension&#39;s root directory.</li>
    </ul>

<h2>Syntax:</h2>

<p><code>File getFile (&lt;String&gt; path)</code></p>

<h2>Example:</h2>

<p>This demonstrates how a JavaScript library&#x2014;jQuery in this case&#x2014;can be added to a page for an injected script to use.</p>

<pre><code>//
// An injected script (e.g. includes/injected.js) 
//

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    // Path to the library:
    var path = &#39;/scripts/jquery.min.js&#39;;
    
    function addLibrary(path, callback) {
        // Get the library resource
        var fileObj = opera.extension.getFile(path);
        
        if (fileObj) {
            // Read out the File object as a Data URI:
            var fr = new FileReader();
            fr.onload = function() {                
                // Load the library
                var libScript = document.createElement(&quot;script&quot;);
                libScript.textContent = fr.result;
                document.body.appendChild(libScript);
                
                // Load the callback function
                var mainScript = document.createElement(&quot;script&quot;);
                mainScript.textContent = &quot;(&quot; + callback.toString() + &quot;)();&quot;;
                document.body.appendChild(mainScript);
            };
            fr.readAsText(fileObj);
        }
    }

    function main() {
        // Your script that uses the library goes here
    }

    addLibrary(path, main);
}, false);</code></pre>
    

