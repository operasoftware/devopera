Title: opera.postError()
----
Date: 2011-12-06 05:47:08
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

<p>Makes a given text string appear in the Error Console. Helpful for debugging.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>String</code>: Any string. An array will be converted into a string.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void postError (&lt;DOMString&gt; string)</code></p>

<h2>Example:</h2>

<pre><code>// Print a simple string to the error console
// Outputs: Hello, world!
opera.postError(&#39;Hello, world!&#39;);

// Print an object to the error console
// Outputs: {&quot;banana&quot;:&quot;yellow&quot;,&quot;strawberry&quot;:&quot;red&quot;}
var obj = {
  &#39;banana&#39; : &#39;yellow&#39;,
  &#39;strawberry&#39; : &#39;red&#39;
};
opera.postError(JSON.stringify(obj));</code></pre>

