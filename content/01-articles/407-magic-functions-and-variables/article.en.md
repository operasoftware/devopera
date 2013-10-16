Title: Magic functions and variables
----
Date: 2011-04-12 06:04:08
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Introduction</h2>

<p>Opera comes with two special methods of the <code>opera</code> object&#x2014;<code>window.opera.defineMagicFunction()</code> and <code>window.opera.defineMagicVariable()</code>. These allow you to override global functions and variables defined on a web page, which is especially useful when you want to write some User JS or Opera extensions that modify the behaviour of existing web pages and applications. In fact, these methods are not intended for use on regular pages, only User JS and extensions&#x2014;calling them from a normal web page will have no effect.</p>

<p>This article gives you an explanation of how to use them.</p>

<h2>opera.defineMagicFunction()</h2>

<p>A User Script injected into a web page can override any functions the web page defines in its global scope with <code>opera.defineMagicFunction()</code>. For example, you might want to modify an existing page that includes a simple JavaScript function for showing and hiding an element upon the click of a button:</p>

<pre><code>&lt;div&gt;
  &lt;button onclick=&quot;toggleElement(this.nextElementSibling)&quot;&gt;show/hide&lt;/button&gt;
  &lt;div&gt;You can show/hide me&lt;/div&gt;
&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
function toggleElement( elm ) {
  if (elm.style.display == &#39;none&#39;) {
    elm.style.display = &#39;&#39;;
  } else {
    elm.style.display = &#39;none&#39;;
  }
}&lt;/script&gt;</code></pre>

<p>You could then override this function, adding a smooth CSS3 transition during the hiding and showing, with the following code:</p>

<pre><code>window.opera.defineMagicFunction(&#39;toggleElement&#39;, function(realFunc, realThis, elm) {
  elm.style.OTransition=&#39;opacity 1s&#39;;
  elm.style.transition=&#39;opacity 1s&#39;;
  if (elm.style.opacity == 1 || elm.style.opacity == &#39;&#39;) {
    elm.style.opacity = 0;
  } else {
    elm.style.opacity = 1;
  }
});</code></pre>

<p>To see how this works, first install our <a href="magic-function.oex">defineMagicFunction() extension</a>, then check out the <a href="ujs-magic-func-demo.htm">defineMagicFunction() demo page</a>, first with the extension disabled, then with the extension enabled, to see the effect.</p>

<h2>opera.defineMagicVariable()</h2>
<p>A User Script injected into a web page can redefine variables the page&#39;s script declares in its global scope with <code>opera.defineMagicVariable()</code>. This way you can easily change input data or objects the page uses.</p>

For example, GMail&#39;s login page calculates approximately how much total storage each user has and updates a number in the page every second. The numbers are calculated based on numbers in an array named <code>CP</code>. If you wanted to modify the storage data to make the counter negative for fun, you could do so using the following code:

<pre><code>if (window.location.href.indexOf(&#39;https://www.google.com/accounts/ServiceLogin?service=mail&#39;) == 0) {
  window.opera.defineMagicVariable(&#39;CP&#39;, function(originalObj) {
    /* the data is in a double array, [ [1,2], [1,2] ... ] */
    for (var i = 0, len = originalObj.length; i &lt; len; i++ ) {
      originalObj[i][1] *= -1;
    }
    return originalObj;
  }, null);
}</code></pre>

<p>See this in action by installing our <a href="magic-variable.oex">GMail counter <code>defineMagicVariable()</code> extension</a>. If you go to the GMail login page, you should see the effect shown in Figure 1. Please note that the User JS inside this extension will break if Google re-names the variable used in this page.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/407-magic-functions-and-variables/image1.png" alt="GMail login page with negative storage counter, just for fun" /></p>
<p class="comment">Figure 1: The GMail login page with negative storage counter, just for fun or profit?</p>

<p class="note">Note: GMail uses <code>https://</code> so to get this example to work using just User Script, you&#39;ll need to go to <a href="opera:config">opera:config</a> and check the &quot;User JavaScript on HTTPS&quot; check box in the &quot;User Prefs&quot; section. User Script wrapped in an extension, however, is enabled over HTTPS by default so this configuration change isn&#39;t needed.</p>

<h2>Summary</h2>

<p>This pretty much wraps up usage of these two interesting methods. We look forward to seeing how you make use of them in your Opera extensions! Please see the <a href="http://www.opera.com/docs/userjs/">Opera UserJS documentation</a> for more information.</p>
