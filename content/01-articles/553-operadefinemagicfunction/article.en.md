Title: opera.defineMagicFunction()
----
Date: 2011-12-06 05:43:45
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

<p>This method can be used to override global functions defined by regular scripts in a page.</p>

<h2>Parameters:</h2>

<p>
    <ul>
        <li><code>name</code>: String giving the name of the function to be overridden.</li>
        <li><code>implementation</code>: Function to be run in place of the function defined by the page. The function will be passed the following parameters.
            <ul>
                <li>A reference to the real function defined by the page.</li>
                <li>The object that would have been referred to by the this keyword in the real function.</li>
                <li>Any parameters that would have been passed to the real function (each is passed as a separate parameter to the magic function).</li>
            </ul>
        </li>
    </ul>
</p>

<h2>Syntax:</h2>

<p><code>void defineMagicFunction (&lt;DOMString&gt; name, &lt;Function&gt; implementation)</code></p>

<h2>Example:</h2>

<pre><code>window.opera.defineMagicFunction(&#39;getLayer&#39;, function (oRealFunc, oThis, oParam1, oParam2) {
  return oParam1.getElementById(oParam2).style;
});

// This example overrides a function f. If the this object refers to the window object, it returns false.
// Otherwise it just runs the real function instead:
window.opera.defineMagicFunction(&#39;f&#39;, function (real, thisObject) {
  if (thisObject == window) {
    return false;
  } else {
    return real.apply(thisObject, Array.prototype.slice.call(arguments, 2));
  }
});</code></pre>



