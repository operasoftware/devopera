Title: Introducing ECMAScript 5.1
----
Date: 2011-12-06 10:23:49
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

<h2>Table of contents:</h2>

<ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#browser-support">Browser support</a></li>
    <li><a href="#strict-mode">The Strict Mode of ES5</a></li>
    <li><a href="#json">JSON</a>
    <li><a href="#object-additions">Object Additions</a></li>
    <li><a href="#array-extras">Array Extras</a></li>
    <li><a href="#function-bind">Function.prototype.bind</a></li>
    <li><a href="#further-reading">Additional References</a></li>
</li></ol>


<h2 id="introduction">Introduction</h2>

<p>ECMAScript 5.1 (or just ES5) is the latest revision of the ECMAScript standard &#x2014; the specification that JavaScript is based on. Similar in spirit to the HTML5 specification process, ES5 standardizes existing JavaScript implementations in conjunction with additions to the language and native ECMAScript objects. ES5 also introduces a strict variant of the language known as &quot;strict mode&quot;.</p>
  
<p>In this article we&#39;ll introduce some of the most useful changes and additions. For a full list, consult Appendices D and E of the <a href="http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf">official ECMAScript language specification</a> (PDF download, 3MB), available from <a href="http://www.ecmascript.org/">http://www.ecmascript.org/</a>; you can also see this content in HTML form, at <a href="http://es5.github.com/">Michael[tm] Smith&#39;s unofficial annotated HTML version</a>.</p>

<h2 id="browser-support">Browser Support</h2>

<p>With the release of Opera 11.60, all of the five major browsers now support ES5, save for <a href="http://kristopolous.blogspot.com/2011/11/winners-are-opera-ie-firefox-chrome.html">implementation bugs</a>. Unless otherwise stated, everything mentioned in this article can be used in the following browser versions (or higher):</p>

<ul>
  <li>Opera 11.60</li>
  <li>Internet Explorer 9*</li>
  <li>Firefox 4</li>
  <li>Safari 5.1**</li>
  <li>Chrome 13</li>
</ul>

<p class="note">* <a href="http://msdn.microsoft.com/en-us/library/hh673540(v=VS.85).aspx">IE9 does not include support for strict mode</a> &#x2014; this is added in IE10.</p>
<p class="note">** Safari 5.1 still lacks support for <code>Function.prototype.bind</code>, although <a href="https://bugs.webkit.org/show_bug.cgi?id=26382"><code>Function.prototype.bind</code> support has recently been added to Webkit</a>.</p>

<p>For information on support in older browsers, see Juriy Zaytsev&#39;s excellent <a href="http://kangax.github.com/es5-compat-table/">ECMAScript 5 compatibility table</a>.
  
<h2 id="strict-mode">The Strict Mode of ES5</h2>

<p>Strict mode is a way for authors to opt-in a more restrictive variant of the language &#x2014; providing additional reliability for authors and safety for users. Enabling strict mode is done by adding the &quot;use strict&quot; directive at the top of a JavaScript file or function. Since the &quot;use strict&quot; directive is just a string, it will be safely ignored by older browsers.</p>

<pre><code>&quot;use strict&quot;;</code></pre>
 
<pre><code>function strict(){
  &quot;use strict&quot;;
  //...
}

function sloppy(){
  eval(&quot;window.foo = &#39;bar&#39;&quot;);
}</code></pre>

<p>Many things that cause surprising or buggy behavior at runtime in a script will throw errors in strict mode, for example:</p>

<ul>
  <li>Assignment to an undeclared variable throws a <code>ReferenceError</code>, rather than creating a global variable.</li>
  <li>Assigning an identical property more than once in an object literal throws a <code>SyntaxError</code>.</li>
  <li>Use of the <code>with</code> statement throws a <code>SyntaxError</code>.</li>
</ul>

<p><a href="http://msdn.microsoft.com/en-us/library/br230269(v=vs.94).aspx">MDSN&#39;s strict mode article</a> has a useful table summarising all of these differences.</p>

<h2 id="json">JSON</h2>

<p>ES5 specifies a global <code>JSON</code> object for serializing (<code>JSON.stringify</code>) and deserializing (<code>JSON.parse</code>) objects into the JSON format.</p>

<p class="not">For older browsers, consider using Douglas Crockford&#39;s <a href="https://github.com/douglascrockford/JSON-js/blob/master/json2.js">json2.js</a>, which implements the same functionality in older browsers (after feature-testing for native support).</p>
  
<h3><code>JSON.parse(text [, reviver])</code></h3>

<p><code>JSON.parse</code> takes text (formatted as JSON) and returns an ECMAScript value. The optional reviver argument is a function with two arguments, <code>key</code> and <code>value</code>, that operates on the results &#x2014; making it possible to filter or transform what gets returned.</p>

<pre><code>&gt;&gt; var result = JSON.parse(&#39;{&quot;a&quot;: 1, &quot;b&quot;: &quot;2&quot;}&#39;);
Object

&gt;&gt; result.b
&quot;2&quot;</code></pre>

<p>If we want to ensure that the value is an integer upon parsing, we can use the reviver function for that.</p>

<pre><code>var result = JSON.parse(&#39;{&quot;a&quot;: 1, &quot;b&quot;: &quot;2&quot;}&#39;, function(key, value){
  if (typeof value == &#39;string&#39;){
    return parseInt(value);
  } else {
    return value; 
  }
})

&gt;&gt; result.b
2</code></pre>


<h3><code>JSON.stringify(value [, replacer [, space]])</code></h3>

<p><code>JSON.stringify</code> allows authors to take an ECMAScript value and convert it to a JSON-formatted string. In its simplest form, <code>JSON.stringify</code> takes a value and returns a string.</p>

<pre><code>&gt;&gt;&gt; var mike = JSON.stringify({mike: &quot;taylor&quot;})
undefined

&gt;&gt; mike
&#39;{&quot;mike&quot;: &quot;taylor&quot;}&#39;

&gt;&gt; typeof mike
&quot;string&quot;</code></pre>

<p>If we need to to alter the way that the value is stringified, or provide a filter for what gets selected, we can pass it a replacer function. For example, if we want to filter out properties with the value of 13 from our object to be stringified,</p>

<pre><code>var nums = {
  &quot;first&quot;: 7,
  &quot;second&quot;: 14,
  &quot;third&quot;: 13
}

var luckyNums = JSON.stringify(nums, function(key, value){
  if (value == 13) {
    return undefined;
  } else {
    return value;
  }
});

&gt;&gt; luckyNums
&#39;{&quot;first&quot;: 7, &quot;second&quot;: 14}&#39;</code></pre>

<p>If the replacer function returns <code>undefined</code>, the key/value pair will not be included in the resulting JSON. We can also pass in a space argument to aid in the readability of what gets returned. Possible values can be a number indicating the number of spaces to indent at each level of the JSON string or a string to serve as the indentation. A number over 10, or a string with more than 10 characters will result in a spacer that is truncated to 10 or the first 10 characters.</p>

<pre><code>var luckyNums = JSON.stringify(nums, function(key, value) {
  if (value == 13) {
    return undefined;
  } else {
    return value;
  }
}, 2);

&gt;&gt; luckyNums
&#39;{
  &quot;first&quot;:7,
  &quot;second&quot;:14
}&#39;</code></pre>

<h2>Object Additions</h2>

<p>The following methods are added to the <code>Object</code> constructor:</p>

<ul>
  <li><code>Object.getPrototypeOf</code></li>
  <li><code>Object.getOwnPropertyDescriptor</code></li>
  <li><code>Object.getOwnPropertyNames</code></li>
  <li><code>Object.create</code></li>
  <li><code>Object.defineProperty</code></li>
  <li><code>Object.defineProperties</code></li>
  <li><code>Object.seal</code></li>
  <li><code>Object.freeze</code></li>
  <li><code>Object.preventExtensions</code></li>
  <li><code>Object.isSealed</code></li>
  <li><code>Object.isFrozen</code></li>
  <li><code>Object.isExtensible</code></li>
  <li><code>Object.keys</code></li>
</ul>

<p>One of the benefits of these additions is more control over an object&#39;s properties, e.g., what is allowed to be modified, enumerated over, deleted, etc. This is done via programmatic access to an object&#39;s <em>property descriptors</em>. For example:</p>
  
<pre><code>var cat = {};

Object.defineProperty(cat, &quot;name&quot;, {
  value: &quot;Maru&quot;,
  writable: false,
  enumerable: true,
  configurable: false
});

Object.defineProperty(cat, &quot;skill&quot;, {
  value: &quot;exploring boxes&quot;,
  writable: true,
  enumerable: true,
  configurable: true
});</code></pre>

<p>For our <code>cat</code> object, its <code>name</code> cannot be changed, but will appear in a <code>for-in</code> loop. Among other things, Maru is good at exploring boxes, but that could change in the future so the <code>skill</code> property is left <code>writable</code> and <code>configurable</code>.</p>

<p>In a future article we&#39;ll explore all of the Object additions in more detail.</p>

<h2>Array Extras</h2>

<p>The following methods are additions to the Array <code>prototype</code> object:</p>

<ul>
  <li><code>Array.prototype.indexOf</code></li>
  <li><code>Array.prototype.lastIndexOf</code></li>
  <li><code>Array.prototype.every</code></li>
  <li><code>Array.prototype.some</code></li>
  <li><code>Array.prototype.forEach</code></li>
  <li><code>Array.prototype.map</code></li>
  <li><code>Array.prototype.filter</code></li>
  <li><code>Array.prototype.reduce</code></li>
  <li><code>Array.prototype.reduceRight</code></li>
</ul>

<p>Dmitry Soshnikov has written an in-depth reference article on the <a href="http://dev.opera.com/articles/view/javascript-array-extras-in-detail/">ES5 array &quot;extras&quot;</a>.</p>

<p>One thing not mentioned in Dmitry&#39;s article is <code>Array.isArray</code>, which as you can see sits directly on the <code>Array</code> constructor &#x2014; not the <code>prototype</code> object.

<code>Array.isArray</code> does pretty much what you would expect it to do &#x2014; it&#39;s a method that returns <code>true</code> or <code>false</code> depending on if the argument&#39;s [[Class]] internal property is &quot;Array&quot;.

<pre><code>Array.isArray(&quot;NO U&quot;)
&gt;&gt; false

Array.isArray([&quot;NO&quot;, &quot;U&quot;])
&gt;&gt; true</code></pre>

<p>In ES3, the only reliable way to determine if a value is an array was by using <a href="http://www.songhaysystem.com/kb/number/2076072056/subject/htmlscrp">&quot;the Miller Device&quot;</a>, i.e., comparing the internal <code>[[Class]]</code> property to that of an array.</p>
  
<pre><code>Object.prototype.toString.apply(value) === &#39;[object Array]&#39;</code></pre>

<h2 id="function-bind"><code>Function.prototype.bind(thisArg [, arg1 [, arg2, …]])</code></h2>

<p><code>Function.prototype.bind</code> returns a new function object with its <em>this</em> value bound to the <code>thisArg</code> argument. Essentially, this allows you to execute a function within the scope of some other object.</p>

<pre><code>function locate(){
  console.log(this.location);
}

function Maru(location){
  this.location = location;
}

var kitty = new Maru(&quot;cardboard box&quot;);

var locateMaru = locate.bind(kitty);

locateMaru();</code></pre>

<p>In this example, we can call the <code>location</code> function within the context of the Maru object. As <code>locate</code> is a property of the global object, its <code>this</code> value is the global object (<code>window</code>). In this case, we&#39;re looking for a cat, not a <code>Location</code> object, so we can create a new method <code>locateMaru</code> with the <code>this</code> value bound to always be <code>kitty</code>.</p>

<h2 id="further-reading">Additional References</h2>

<ul>
  <li><a href="http://ejohn.org/blog/ecmascript-5-objects-and-properties/">ECMAScript 5 Objects and Properties</a> by John Resig</li>
  <li><a href="http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/">Understanding JavaScript Function Invocation and “this”</a> by Yehuda Katz</li>
  <li><a href="http://javascriptweblog.wordpress.com/2011/05/03/javascript-strict-mode/">JavaScript Strict Mode</a> by Angus Croll</li>
  <li>ECMA-262-5 in detail: <a href="http://dmitrysoshnikov.com/ecmascript/es5-chapter-0-introduction/">Introduction</a> by Dmitry Soshnikov</li>
  <li><a href="http://kangax.github.com/es5-compat-table/">ECMAScript 5 compatibility table</a> by Juriy Zaytsev</li>
</ul></p></p>
