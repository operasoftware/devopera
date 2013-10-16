Title: Automatic numbering with CSS Counters
----
Date: 2008-10-01 10:07:02
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<p class="note">Note that there is a Czech translation of this article available - <a href="http://zdrojak.root.cz/clanky/automaticke-cislovani-pomoci-css/"><span lang="cs">Automatické číslování pomocí kaskádových stylů</span></a> - translated by Martin Hassman.</p>

<h2>Introduction</h2>

<p>When writing documents, it is often useful to number sections and have a table of contents.  You can number these by hand, directly in the markup, but this can be time consuming if the order changes and you have to edit all the numbers.  CSS2.1 gives us a automated way to generate numbers using CSS counters, and this article will walk you through how to use them. One word of note before we start is that CSS counters are not yet implemented in IE, although they are on the roadmap for IE8.</p>

<h2>Setting up the counter</h2>

<p>The first step is to reset the counter to its base value and give it a name.  This can be achieved with the <code>counter-reset</code> property, like the following example:</p>

<pre><code>body { counter-reset: section; }</code></pre>

<p>This says that the counter will be reset to zero on the <code>body</code> element, and the counter identifier is <var>section</var>.  This can be any name that you wish.  The property can also take a optional second value that sets the starting value of the counter.  If you’d like the counter to start counting from 5 upwards, you can specify it like so:</p>

<pre><code>body { counter-reset: section 4; }</code></pre>

<p>The reason for setting it at 4 is that it always increments the counter just before it displays it. So if you start it at 4, at the moment before it displays it, the value increases to 5.</p>

<h2>Incrementing the counter</h2>

<p>The next step is to specify when the counter increments and by what value.  This can be specified with the <code>counter-increment</code> property. If no value is specified then a default increment of one is used:</p>

<pre><code>body { counter-reset: section 4; }

<strong>h2 { counter-increment: section; }</strong></code></pre>

<p>If you’d like it to increment by two instead, you could specify it like so:</p>

<pre><code>h2 { counter-increment: section 2; }</code></pre>

<p>The property also accepts 0 and negative values. If the counter is reset and incremented on the same element, then it is reset first then incremented by the specified value, therefore in the following example, the value will always be 2:</p>

<pre><code>h2 { 
  counter-reset: section;
  counter-increment: section;
}</code></pre>


<h2>Displaying the counter</h2>

<p>Once the counter is set up, you need to display it on the page.  This can be done with generated content using the <code>counter</code> function, and the <code>:before </code> pseudo class:</p>

<pre><code>body { counter-reset: section 4; }

h2 { counter-increment: section; }

<strong>h2:before  { counter(section) “ “; }</strong></code></pre>

<p>If you use a counter and increment it  on the same element, like I have done in the examples above on the <code>h2</code> element, then it is incremented <em>before</em> it is used. </p> 

<p>View the <a href="counters-example-1.html">finished CSS counters example</a>.</p>

<h2>Using two or more counters</h2>

<p>The <code>counter</code> function can used more than once on the <code>content</code> property.  In the following example I use two counters to specify numbering for sections and sub-sections.  The sub-section counter is reset for each new section.</p>

<pre><code>body { counter-reset: section; }

h2 { 
  counter-increment: section;
  counter-reset: sub-section;
}

h2:before, h3:before  { content: counter(section) “.“ counter(sub-section) “ “; }

h3:before  {
  counter-increment: sub-section;
}</code></pre>

<h2>Using nested counters</h2>

<p>As well as specifying each counter there is also a <code>counters()</code> function for specifying nested counters.  This works fine for elements such as lists, where lists can be nested inside each other.  It wouldn’t work for the example above as the sub-sections are not nested inside the main sections, but are rather sibling elements. </p>

<p>Nested counters can be specified as follows:</p>

<pre><code>ol {
  counter-reset: section;
  list-style-type: none;
}
		
ol li { counter-increment: section; }
            
<strong>ol li:before  { content: counters(section, &quot;.&quot;) &quot;. &quot;; }</strong></code></pre>

<p>This will increment the counter for each list item, no matter how many nested lists are in the markup.  It is important to reset the counter in the correct place, so that it resets to zero for each of the nested elements.  In this case I reset the counter on the <code>ol</code> element. In the following example the first nested list will start at 1.1 and count up 1.2, 1.3 and so on.  The second nested list would start at 1.1.1 and count up (1.1.2 and so on).</p>  

<pre><code>&lt;ol&gt;
  &lt;li&gt;item 1
    &lt;ol&gt;
      &lt;li&gt;sub item 1
        &lt;ol&gt;
          &lt;li&gt;sub-sub item 1&lt;/li&gt;
          &lt;li&gt;sub-sub item 2&lt;/li&gt;
          &lt;li&gt;sub-sub item 3&lt;/li&gt;
        &lt;/ol&gt;
      &lt;/li&gt;
      &lt;li&gt;Sub item 2&lt;/li&gt;
   &lt;/ol&gt;
  &lt;/li&gt;
  &lt;li&gt;item 2&lt;/li&gt;
&lt;/ol&gt;</code></pre>

<p>View an example using <a href="nested-counters-example.html">nested counters</a>.</p>

<h2>Styling counters</h2>

<p>It is possible to style the counter by specifying it as the second argument in the <code>counter</code> or counters functions.  The values are the same as for the <code>list-style-type</code> property.  Although all the values are valid, for counters only a subset make sense, as values such as <code>disc</code>, <code>square</code> and <code>circle</code> stay the same no matter what the value of the counter is.  The style can be specified as follows:</p>

<pre><code>ol li:before  { counter(answer, lower-alpha) “) “; }</code></pre>

<p>View an example using <a href="style-counters-example.html">the counter function to style counters</a>.  The example also highlights using non-default counter reset and counter increment values. </p>

<h2>Using counters to replace the deprecated start attribute</h2>

<p>If you have a need to use the <code>start</code> attribute on the <code>ol</code> element, to start a list from a value other than one, and you are using a strict doctype, you will notice that your markup will not validate.  There are arguments over whether the <code>start</code> attribute is presentational or not, and indeed HTML5 has declared that it is no longer deprecated in the current working drafts (at the time of writing). Even if the <code>start</code> attribute is allowed again in HTML5, it doesn’t help with pages that need to be validated against the HTML4 doctype, and the HTML5 doctype is not ready to be used in the production sites yet as HTML5 support is still experimental.  If you want your page to validate you either need to use a transitional doctype or use CSS counters.</p>

<p>If you would like to start a list at 4 instead of 1, you could specify the following CSS:</p>

<pre><code>body { counter-reset: list-order 3; }

ol li { 
  counter-increment: list-order;
  list-style-type: none;
}

ol li:before  { content: counter(list-order) “ “; }</code></pre>

<p>It is important to remove the list marker so that you do not get double numbers.</p>

<p>View an example using <a href="counters-start-example.html">CSS counters to replace the <code>start</code> attribute</a>.</p>


<h2>Conclusion</h2>

<p>In this article I’ve covered how to specify and style counters in CSS, instead of adding them directly to the markup.  This is useful for things such as numbering sections in articles and tables of contents.  Using this approach saves on maintenance when reordering markup. It is also more flexible as the type of marker can be changed via CSS and will automatically change if you use JavaScript to reorder content on your page, eg if you have a script to sort a list or table.  I also covered how you can use counters as a replacement for the deprecated <code>start</code> attribute on ordered lists.  CSS counters are easy to use when you know how, but the main drawback is that they currently are not supported by IE.</p>
  
