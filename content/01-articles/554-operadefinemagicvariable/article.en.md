Title: opera.defineMagicVariable()
----
Date: 2011-12-06 05:45:57
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

<p>This method can be used by to override global variables defined by regular scripts in a page.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>name</code>: String giving the name of the variable to be overridden.</li>
        <li><code>getter</code>: Function to be run whenever a script attempts to access the contents of the variable. Any value returned by the function is used as the value of the variable. The function receives the current value of the variable as parameter.</li>
        <li><code>setter</code>: Optional function to be run whenever a script attempts to set the value of the variable. The value that the script was attempting to assign to the variable is passed to the function as parameter. If no setter function is required, the value null must be used instead.</li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void defineMagicVariable (&lt;DOMString&gt; name, &lt;Function&gt; getter, &lt;Function&gt; setter)</code></p>

<h2>Example:</h2>

<pre><code>window.opera.defineMagicVariable(&#39;isGoodBrowser&#39;, function (curVal) {
  return true;
}, function (newVal) {
  if (!newVal) {
    window.status = &#39;Repairing script&#39;;
  }
});</code></pre>
