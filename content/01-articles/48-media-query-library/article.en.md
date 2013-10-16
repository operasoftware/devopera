Title: Media Query library
----
Date: 2007-10-31 11:59:04
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

<h2>Introduction</h2>

<p>The Media query library JavaScript file contains a single function <code>testMediaQuery()</code>, which takes a single string as an argument (see <a href="testMediaQuery.js">here</a> for a test file.) The string can contain any valid <a href="http://www.w3.org/TR/css3-mediaqueries/">media query</a>, including <a href="http://www.w3.org/TR/REC-CSS2/media.html">media types</a> and <a href="http://www.w3.org/TR/css3-mediaqueries/#media1">media features</a>. It returns a boolean true/false based on whether or not the browser is in a mode that satisfies the given query.</p>

<p>This function can be used in any browser that supports media queries. See the following <a href="index.html">JSDoc</a> output for the library&#39;s documentation and code.</p>

<h2>What can you use it for?</h2>

<p>Media queries and device capabilities are currently not exposed to JavaScript directly. You can use this library to detect the capabilities of the browser and adapt your web page or widget accordingly. An example is when the browser is running on a wide or small screen device, like a tv or a handheld device. In the latter case memory and CPU power may be sparse or network connections slow and unstable. By detecting the capabilities of the browser, you can can tweak things like how much you cache data, how often you refresh the page, and if a widget needs to be resized to fit the screen.</p>

<p>You should avoid calling this function multiple times to test the same thing, as the function call may cause a reflow of the layout on the page. Instead, test once and store the results in a variable.</p>

<h2>Examples</h2>

<p>The following code will test if the browser is in a handheld mode and store the results in a variable. The typical example is mobile phones, PDAs and similar.</p>

<pre><code>var handheld = testMediaQuery(&#39;handheld&#39;);</code></pre>

<p>In the following example a combination of a media type and a media feature query is used. The <code>if</code> block will be executed if the browser is in a TV mode and has a maximum available height of 400 pixels.</p>

<pre><code>var test = testMediaQuery(&#39;tv and (max-height: 400px)&#39;);</code></pre>

<h2>How it works</h2>

<p>The function adds an invisible <code>div</code> element to the document <code>body</code>. A <code>style</code> element is added with the given media query and a <code>display:none;</code> rule on the <code>div</code>. Then the function checks if the style has been applied properly to the <code>div</code> element in the current mode. Finally, both elements are removed from the DOM.</p>

<h2>Resources</h2>

<ul>
<li><a href="index.html">JSDoc API documentation</a></li>
<li><a href="http://www.w3.org/TR/REC-CSS2/media.html">CSS 2 Media types</a></li>
<li><a href="http://www.w3.org/TR/css3-mediaqueries/">CSS 3 Media queries</a></li>
<li><a href="http://www.w3.org/TR/css3-mediaqueries/#media1">CSS 3 Media features</a></li>
</ul>
