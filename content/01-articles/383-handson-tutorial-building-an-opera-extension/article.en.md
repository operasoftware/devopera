Title: Hands-on tutorial: building an Opera extension
----
Date: 2010-10-21 09:10:30
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

<p class="note">This tutorial assumes you have a basic knowledge of CSS and JavaScript.</p>

<h3>Contents</h3>

<ul>
  <li><a href="#intro">Introduction</a></li>
  <li><a href="#structure">Structure of an Opera extension</a></li>
  <li><a href="#config">Super simple config.xml</a></li>
  <li><a href="#basic">Adding a little JavaScript</a></li>
  <li><a href="#complete">Making our extension useful</a></li>
  <li><a href="#conclusion">Conclusion</a></li>
</ul>

<h3 id="intro">Introduction</h3>

<p>Ah, <a href="http://slashdot.org">Slashdot</a>. The grandaddy of wisdom-of-the-crowd news sites and still strong enough to bring web servers to their knees. As a result of its facelift a few years ago, it gained blocks in the sidebar that could be moved or closed, however this functionality is only available to registered members. In this tutorial, we&#39;ll see how we can make an Opera extension that will give users the ability to hide and show individual blocks, logged in or not.</p>

<h3 id="structure">Structure of an Opera extension</h3>

<p>Firstly, let&#39;s look at the structure of Opera extensions. We&#39;ll begin with some ground rules:</p>

<ul>
  <li>Extensions must have a <var>config.xml</var> file, which you can drag into Opera</li>
  <li>Extensions must contain one background process file (typically an index.html)</li>
  <li> JavaScript to be &quot;injected&quot; in a page must be in a folder named <var>includes</var></li>
  <li>The <var>config.xml</var> and other files must be zipped up and renamed with a <var>.oex</var> extension</li>
</ul>


<p><img src="http://forum-test.oslo.osa/kirby/content/articles/383-handson-tutorial-building-an-opera-extension/extension-structure.png" width="216" height="234" alt="The directory structure of an Opera extension" /></p>
<p class="comment">Figure 1: The directory structure of an Opera extension.</p>

<p>As you&#39;d expect, Opera extensions can vary from basic to complex, both in structure and what they do. Figure 1 shows the directory structure of a relatively complex example extension, whereas the simplest type would be a simple JavaScript file applied to a web page. Let&#39;s try this simple approach with the <a href="http://slashdot.org">Slashdot front page</a> with the aim of hiding all content blocks in the sidebar.</p>

<h3 id="config">Super simple config.xml</h3>

<p>Step one, we need a <var>config.xml</var> file containing things like the name, description and author of the extension. This uses   the <a href="http://www.w3.org/TR/widgets/#example-configuration-document">configuration file for W3C widgets</a>. Think of it as a passport&#x2014;without this, you ain&#39;t goin&#39; nowhere:</p>

<div class="comment">config.xml</div>
<pre><code>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
	&lt;name&gt;Slashdotty&lt;/name&gt;
	&lt;description&gt;Hide Slashdot side blocks you don&#39;t need.&lt;/description&gt;
	&lt;author href=&quot;http://people.opera.com/danield/&quot;&gt;Daniel Davis (@ourmaninjapan)&lt;/author&gt;
&lt;/widget&gt;</code></pre>
<h3 id="basic">Adding a little JavaScript</h3>
<p>Create an <var>includes</var>  folder, then create an empty JavaScript file. In it, we are first going to specify that this script applies only to pages in the <var>slashdot.org</var> domain:</p>

<pre><code>// ==UserScript==
// @include http://slashdot.org/*
// @include https://slashdot.org/*
// @include http://*.slashdot.org/*
// @include https://*.slashdot.org/*
// ==/UserScript==
</code></pre>

<p>Next, in the same JavaScript document, we add code to execute when the page has loaded:</p>

<pre><code>
window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    // Functionality will go here
}, false);
</code></pre>

<p>So far so good. Now to go through all the blocks on the page. Unfortunately some blocks don&#39;t have IDs but all the block titles do, so we&#39;ll use those. Thanks to the <a href="http://www.w3.org/TR/selectors-api/">Selectors API</a>, this is easy with the following line:</p>

<pre><code>
var block_titles = document.querySelectorAll(&#39;.block .title&#39;);
</code></pre>

<p>The result is an array of all the elements in the page with a class name of <var>title</var> within elements with a class name of <var>block</var>. Thankfully, Slashdot uses a consistent naming pattern, <var>blockname-title</var> and <var>blockname-content</var>, so if we remove the <var>-title</var> suffix from each title, we&#39;re left with the block name. To get the ID of the block&#39;s content, we just add the <var>-content</var> suffix. We need a loop to do that, like so:</p>

<pre><code>
var block_name, block_content; // Declare variables outside the loop for efficiency.
for (var i = 0, block_title; block_title = block_titles[i]; i++) {
    block_name = block_title.getAttribute(&#39;id&#39;).replace(&#39;-title&#39;, &#39;&#39;);
    block_content = document.getElementById(block_name + &#39;-content&#39;);
}
</code></pre>

<p>The final part of this stage is to set the <var>display</var> property to <var>none</var> for each block&#39;s content. Combining it with the previous steps, we get:</p>

<div class="comment">includes/slashdotty.js</div>
<pre><code>// ==UserScript==
// @include http://slashdot.org/*
// @include https://slashdot.org/*
// @include http://*.slashdot.org/*
// @include https://*.slashdot.org/*
// ==/UserScript==

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    var block_titles = document.querySelectorAll(&#39;.block .title&#39;);
    var block_name, block_content; // Declare variables outside the loop for efficiency.
    for (var i = 0, block_title; block_title = block_titles[i]; i++) {
        // Remove the &quot;-title&quot; suffix to get the block name
        block_name = block_title.getAttribute(&#39;id&#39;).replace(&#39;-title&#39;, &#39;&#39;);
        block_content = document.getElementById(block_name + &#39;-content&#39;);
        // Check for the block&#39;s existence to avoid errors
        if (block_content) {
            block_content.style.display = &#39;none&#39;;
        }
    }
}, false);
</code></pre>

<p><a href="slashdotty_basic.oex">Download the extension so far</a>. (Rename it with a <var>.zip</var> extension to inspect its contents.)</p>

<h3 id="complete">Making our extension useful</h3>

<p>Looking good! All that&#39;s remaining is to give the user control over which blocks are shown and hidden. To do this, we remove the line setting the block content&#39;s <var>display</var> to <var>none</var> and add two features. One is some clickable text in each block and the other is a function to change the value of the block content&#39;s <var>display</var> property to <var>none</var> or <var>block</var>. So, first things first, let&#39;s get the function ready:</p>

<pre><code>
// Function to show and hide a block&#39;s content
function addToggle(block_content, block_toggle) {
    var block_style = block_content.style;
    block_toggle.addEventListener(&#39;click&#39;, function() {
        block_style.display = (block_style.display !== &#39;none&#39;) ? &#39;none&#39; : &#39;block&#39;;
    }, false);
}
</code></pre>

<p class="note">It&#39;s worth mentioning that we have two arguments&#x2014;a block&#39;s content element and toggle element&#x2014;but in our example these are not essential. This is because the <var>addToggle</var> function is enclosed in a higher-level, anonymous function that executes when the page loads, however using arguments makes the function more portable for use in other projects.</p>

<p>As you can see, we set the <var>display</var> value with a nifty one line <var>if</var> statement. We could equally have used the following code which does the same thing but is more lengthy:</p>

<pre><code>
if (block_style.display !== &#39;none&#39;) {
    block_style.display = &#39;none&#39;;
} else {
    block_style.display = &#39;block&#39;;
}
</code></pre>

<p>The final piece of our extension jigsaw is something for the user to click, i.e. the <var>block_toggle</var> element that we pass to the <var>addToggle</var> function above. For simplicity, we&#39;ll just create a <var>span</var> element with static text and, in our loop, add it to each block&#39;s title, like so:</p>

<pre><code>
if (block_content) {
    // Add a show/hide text link
    block_toggle = document.createElement(&#39;span&#39;);
    block_toggle.textContent = &#39;Hide/Show&#39;;
    block_title.appendChild(block_toggle);
    addToggle(block_content, block_toggle);
}
</code></pre>

<p>Putting it all together, our complete <var>slashdotty.js</var> should look like this:</p>

<div class="comment">includes/slashdotty.js</div>
<pre><code>// ==UserScript==
// @include http://slashdot.org/*
// @include https://slashdot.org/*
// @include http://*.slashdot.org/*
// @include https://*.slashdot.org/*
// ==/UserScript==

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    // Function to show and hide a block&#39;s content
    function addToggle(block_content, block_toggle) {
        var block_style = block_content.style;
        block_toggle.addEventListener(&#39;click&#39;, function() {
            block_style.display = (block_style.display !== &#39;none&#39;) ? &#39;none&#39; : &#39;block&#39;;
        }, false);
    }

    var block_titles = document.querySelectorAll(&#39;.block .title&#39;);
    var block_name, block_content, block_toggle; // Declare variables outside the loop for efficiency.
    for (var i = 0, block_title; block_title = block_titles[i]; i++) {
        // Remove the &quot;-title&quot; suffix to get the block name
        block_name = block_title.getAttribute(&#39;id&#39;).replace(&#39;-title&#39;, &#39;&#39;);
        block_content = document.getElementById(block_name + &#39;-content&#39;);
        if (block_content) {
            // Add a show/hide text link
            block_toggle = document.createElement(&#39;span&#39;);
            block_toggle.textContent = &#39;Hide/Show&#39;;
            block_title.appendChild(block_toggle);
            addToggle(block_content, block_toggle);
        }
    }
}, false);
</code></pre>

<p><a href="slashdotty_complete.oex">Download the completed extension</a>, which also includes an extension icon. (Rename it with a <var>.zip</var> extension to inspect its contents.)</p>

<p>If you are building up the extension yourself, now is the time to zip it up, change the file extension to <code>.oex</code>, and test it out.</p>

<div class="note">
<h3>Note on zipping extensions</h3>
<p>You need to make sure you zip up your extension so that the files and directories that comprise it are in the root of the zip, and not inside a folder. To ensure this, make sure that you zip up the files inside your extension directory, and not the directory itself. Subtle, but it makes all the difference.</p>
</div>

<h3 id="conclusion">Conclusion</h3>

<p>Hopefully this has helped you on your way to making Opera extensions. We hope you&#39;ll enjoy to taking this code and creating your own, or improving on what&#39;s here, for example by locally storing each block&#39;s state or by dynamically changing the toggle text based on each block&#39;s state. Extra points if you can animate the block with CSS3! Don&#39;t forget to share your completed work so users can benefit from it and other developers can learn from it.</p>
