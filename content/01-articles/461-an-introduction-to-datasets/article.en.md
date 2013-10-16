Title: An Introduction to Datasets
----
Date: 2011-05-31 05:52:08
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

<h2>Introduction</h2>
<p>HTML5 includes a means to set custom attributes on elements using the <code>data-</code> prefix. Called <em>data attributes</em>, they can be scripted to define and store data as well as increase options for attribute selection when styling with CSS. You can use as many data attributes as you require, providing greater control when manipulating and rendering data. For a first look, here&#39;s an example that <a href="https://audiofile.cc/">generates annotated music sheets</a>.</p>

<h2>Dataset basics</h2>

<p>Here is an example of data attributes on an element:</p>

<pre><code>&lt;div id=&quot;day2-meal-expense&quot; 
  data-drink=&quot;coffee&quot; 
  data-food=&quot;sushi&quot; 
  data-meal=&quot;lunch&quot;&gt;$20.12&lt;/div&gt;</code></pre>

<p>To get the value of of an attribute, you can use the dataset object as follows:</p>

<pre><code>var expenseday2 = document.getElementById(&#39;day2-meal-expense&#39;);  
var typeOfDrink = expenseday2.dataset.drink;</code></pre>

<p>Note that hyphenated names become camel-cased. For example, if there was an attribute <code>data-meal-time</code> in the above markup, then its value would be retrieved by using <code>expenseday2.dataset.mealTime</code><code>.</code></p>

<p><a href="http://caniuse.com/#feat=dataset">Data attributes have been supported in almost all browsers</a> for some time, but support for dataset has only recently been added. In Opera 11.10+ you can use <code>dataset</code> to access your custom data attributes via JavaScript. It is also supported in Chrome 9+, Safari 6+ (upcoming) and Firefox 6+ (upcoming).</p> 

<h2>Why do we need <code>dataset</code>?</h2>

<p>The traditional way of accessing values of an attribute is as follows below:</p>

<pre><code>var typeOfDrink = document.getElementById(&#39;day2-meal-expense&#39;).getAttribute(&#39;data-drink&#39;);</code></pre>

<p>Now, trying to access more than a few custom attributes could easily get messy: </p>

<pre><code>var attrs = expenseday2.attributes,
expense = {}, i, j;  
for (i = 0, j = attrs.length; i &lt; j; i++) {
  if(attrs[i].name.substring(0, 5) == &#39;data-&#39;) {
    expense[attrs[i].name.substring(5)] = attrs[i].value;
  }
}</code></pre>

<p>With the <code>dataset</code> attribute, you do not need to use any kind of looping to get the values you want to manipulate. You can use it immediately:</p>

<pre><code>expense = document.getElementById(&#39;day2-meal-expense&#39;).dataset;</code></pre>

<p><code>dataset</code> is not your typical object in JavaScript; it is a <a href="http://www.w3.org/TR/html5/common-dom-interfaces.html#domstringmap-0"><code>DOMStringMap</code> object</a>. <code>DOMStringMap</code> is a new interface that is available in HTML5 for a set of name-value pairs.</p>

<h2>Manipulating a dataset</h2>

<p>You could manipulate these name-value pairs like so:</p>

<pre><code>chartInput = [];
for (var item in expense) {
  chartInput.push(expense[item]);
}</code></pre>

<p>If you want to delete a data attribute, you can do that with:</p>

<pre><code>delete expenseday2.dataset.meal;</code></pre>

<p>And to add an attribute to an element:</p>

<pre><code>expenseday2.dataset.dessert = &#39;icecream&#39;;</code></pre>

<h2>How fast is it compared to <code>getAttribute</code>?</h2>

<p>Using <code>dataset</code> to manipulate data is slightly slower than doing so with <code>getAttribute</code>, although if you are manipulating only a handful of data-attributes, the impact is not that <a href="http://jsperf.com/dataset-vs-attributes-loop/3">significant</a>.</p>

<p>Then again, dataset is much less of a headache to manipulate and use compared to other forms of manipulating attributes, and much more readable.</p>

<h2>Where can I use it?</h2>

<p>Every time you use a custom data attribute, using <code>dataset</code> to access the name-value pair is a good way forward. You can also feature-detect for dataset support and use dataset when supported, like this:</p>

<pre><code>if(expenseday2.dataset) {
  expenseday2.dataset.dessert = &#39;icecream&#39;;
} else {
  expenseday2.setAttribute(&#39;data-dessert&#39;, &#39;icecream&#39;);
}</code></pre>

<p class="note">Note: If you have more intensive applications that require frequent updating of data attributes, I would recommend you use a JavaScript object to maintain data rather than manipulating the data attributes every time.</p>

<h2>Data Attributes in CSS</h2>

<p>Using data attributes is also pretty handy if you want to selectively apply styles based on the attribute value. For example, if you want to style each kind of food-related expense based on the kind of meal that was being had, you could do this:</p>

<pre><code>div[data-meal=&quot;lunch&quot;] {
  background-image: url(&#39;lunch.png&#39;);
}</code></pre>

<h2>Using Data Attributes to create charts</h2>

<p>Now I&#39;d like to present to you <a href="http://operasoftware.github.com/devrel-misc/demos/dataset/">an example of using data attributes to render charts</a>. In this example, data are added to the elements using the <code>dataset</code>, which are then rendered via <a href="http://dev.opera.com/articles/view/css-generated-content-techniques/">generated content</a>.</p>

<h2>In summary</h2>

<p><code>dataset</code> is an easy way to access data attributes on an element. Support is slowly increasing, with <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=560112">Firefox nightlies also supporting the dataset attribute</a>. Using this attribute does not improve code performance, but it does make it shorter, easier and more readable.</p>

<p>All snippets that I used in this article are available in this <a href="http://jsfiddle.net/nimbu/tHPtz/">fiddle</a> (or <a href="https://gist.github.com/90aa639a59b3dd3ab3a5">as a gist</a>) for you to play with. The Charts demo is also up on the <a href="https://github.com/operasoftware/devrel-misc/commits/gh-pages/demos/dataset/index.html">Opera Github repository</a> for you to play with.</p>

