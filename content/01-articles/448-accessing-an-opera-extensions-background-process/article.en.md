Title: Accessing an Opera extension's background process
----
Date: 2011-04-12 06:05:07
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

<p>One of the trickiest areas of building an Opera extension is messaging&#x2014;sending information from one part of the extension to another. For example, you may want to execute some code in the background process whenever a pop up window is opened, which would involve communicating between the two parts. There is a comprehensive <a href="http://dev.opera.com/articles/view/opera-extensions-messaging/">introduction to messaging</a> already on <a href="http://dev.opera.com/">Dev.Opera</a> but it is a bit complicated for achieving simple communication tasks. In many cases, messaging could be avoided altogether thanks to the <code>bgProcess</code> object, which allows you to access data contained in an extension&#39;s background process from a script in a completely different part of the extension code via a clever shortcut system, as if it were present in that actual part of the code.</p>

<h2>bgProcess in a nutshell</h2>

<p>The concept is very simple&#x2014;the <code>window</code> object of an extension&#39;s background process can be accessed through the <code>opera.extension.bgProcess</code> object. The main points to remember are:</p>

<ul>
    <li>You can share variables and functions with an options page or a popup window.</li>
    <li>Both read and write access to <code>bgProcess</code> is possible.</li>
    <li>The <code>bgProcess</code> object is not accessible from injected scripts because of security restrictions.</li>
</ul>

<p>The relationship between an extension&#39;s components and how you can communicate between them is shown in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/448-accessing-an-opera-extensions-background-process/opera-extension-structure.png" width="500" height="319" alt="The communication structure of an Opera extension" /></p>
<p class="comment">Figure 1: The communication structure of an Opera extension.</p>

<h2>bgProcess in practice</h2>

<p>To illustrate when this could be useful and how easy it is to use, let&#39;s make an example extension. To follow good coding practice, we&#39;ll have our core code contained in the background process and access it from a popup window; we&#39;ll use the wonderfully simple Reddit API to get the latest headlines from Reddit&#39;s front page.</p>

<p>As usual, we start building an extension by creating two blank files, <code>config.xml</code> and <code>index.html</code>, both of which are in the extension&#39;s root folder. We will be using <code>XMLHttpRequest</code> to get data from Reddit so as well as the usual metadata in <code>config.xml</code>, we also need to include an <code>&lt;access&gt;</code> element to give the extension permission to access external sites.</p>

<pre><code>&lt;-- config.xml (in its most basic form) --&gt;
&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot;&gt;
  ...
  &lt;access origin=&quot;http://reddit.com&quot; subdomains=&quot;true&quot;/&gt;
&lt;/widget&gt;</code></pre>

<p>Next we&#39;ll start scripting: the first thing to do is create a toolbar button to open the popup. This is done in the background script which we&#39;ll call <code>background.js</code>, and link to from <code>index.html</code>. The background script is also where we set the dimensions of the popup window, and it looks like so:</p>

<pre><code>// scripts/background.js

// Set the properties of the button
var buttonProperties = {
  disabled: false,
  title: &#39;Reddit Headlines&#39;,
  icon: &#39;images/icon_18.png&#39;,
  popup: {
    href: &#39;popup.html&#39;,
    width: 600,
    height: 400
  }
};

// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(buttonProperties);
opera.contexts.toolbar.addItem(button);</code></pre>

<p>Also in the background script we&#39;ll put the main function for fetching the external data, not forgetting error checks in case something goes wrong:</p>

<pre><code>// scripts/background.js

function doXHR(url) {
  // Try to get the contents of the URL
  var response;
  var xhr = new XMLHttpRequest();
  xhr.open(&#39;GET&#39;, url, false);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      // Error check for fetching the URL
      if (this.status == 200 &amp;&amp; this.responseText) {
        response = this.responseText;
      } else {
        opera.postError(&#39;EXTENSION ERROR: Can\&#39;t read &#39; + url);
        return false;
      }
    }
  };    

  xhr.send();    
  return response;
}</code></pre>

<p>As you can see, we&#39;ve referenced a file called <code>popup.html</code> so we need to create that as a blank HTML file. We can leave the body empty as we&#39;ll be generating content dynamically, but we do need to use JavaScript to achieve that, so let&#39;s use <code>popup.html</code> to link to another new file called <code>popup.js</code>. This is where we get to use the <code>bgProcess</code> object, which now contains our <code>doXHR()</code> function:</p>

<pre><code>// scripts/popup.js

window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  // Get the headlines from the background process
  var redditText = opera.extension.bgProcess.doXHR(&#39;http://api.reddit.com/&#39;);
}, false);</code></pre>

<p>It&#39;s that easy! However, we now have to do something with the data we&#39;ve fetched. Opera&#39;s support for JSON means we can convert the data (which comes from a JSON-formatted text file) into an object and loop through its contents. With each iteration we&#39;ll create a list item containing a story title from Reddit and a link to its page. At the end of the loop, we&#39;ll display the entire list inside the popup page:</p>

<pre><code>// scripts/popup.js (appended to the above function)

// Stop if there&#39;s an error
try {
  // Create a JSON object and get the array of stories within it
  var redditObj = JSON.parse(redditText);
  var stories = redditObj.data.children;
} catch(e) {
  return;
}

// Create a list element and prepare variables for its items
var list = document.createElement(&#39;ol&#39;);
var story, item;

// Loop through the array of stories and add each one to the list
for (var i = 0, len = stories.length; i &lt; len; i++) {
  story = stories[i].data;
  item = document.createElement(&#39;li&#39;);
  item.innerHTML = &#39;&lt;a href=&quot;&#39; + story.url + &#39;&quot;&gt;&#39; + story.title + &#39;&lt;/a&gt;&#39;;
  list.appendChild(item);
}

// Finally, show the list of stories
document.body.appendChild(list);</code></pre>

<h2>Just show me the code!</h2>

<p>Although it doesn&#39;t look pretty, the functionality is complete. You can <a href="bgProcessExample.oex">download and run the example extension</a>, and view all the code for the various pages and scripts below.</p>

<h3><code>config.xml</code></h3>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;widget xmlns=&quot;http://www.w3.org/ns/widgets&quot; id=&quot;RedditHeadlines&quot; defaultlocale=&quot;en&quot;&gt;
	&lt;name&gt;Reddit Headlines&lt;/name&gt;
	&lt;description xml:lang=&quot;en&quot;&gt;Shows the latest headlines from reddit.com in a popup window.&lt;/description&gt;
	&lt;author href=&quot;http://www.example.com/&quot;&gt;[Your name here]&lt;/author&gt;
	&lt;icon src=&quot;images/icon_64.png&quot;/&gt;
    &lt;icon src=&quot;images/icon_18.png&quot;/&gt;
    &lt;access origin=&quot;http://reddit.com/&quot; subdomains=&quot;true&quot;/&gt;
&lt;/widget&gt;</code></pre>

<h3><code>index.html</code></h3>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;Reddit Headlines (background)&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Reddit Headlines (background)&lt;/h1&gt;
  &lt;script src=&quot;scripts/background.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<h3><code>scripts/background.js</code></h3>

<pre><code>// Set the properties of the button
var buttonProperties = {
  disabled: false,
  title: &#39;Reddit Headlines&#39;,
  icon: &#39;images/icon_18.png&#39;,
  popup: {
    href: &#39;popup.html&#39;,
    width: 600,
    height: 400
  }
};

// Create the button and add it to the toolbar
var button = opera.contexts.toolbar.createItem(buttonProperties);
opera.contexts.toolbar.addItem(button);
    
function doXHR(url) {
  // Try to get the contents of the URL
  var response;
  var xhr = new XMLHttpRequest();
  xhr.open(&#39;GET&#39;, url, false);

  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      // Error check for fetching the URL
      if (this.status == 200 &amp;&amp; this.responseText) {
        response = this.responseText;
      } else {
        opera.postError(&#39;EXTENSION ERROR: Can\&#39;t read &#39; + url);
        return false;
      }
    }
  };    

  xhr.send();    
  return response;
}
</code></pre>

<h3><code>popup.html</code></h3>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;utf-8&quot;&gt;
  &lt;title&gt;Reddit Headlines&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Headlines from &lt;a href=&quot;http://reddit.com/&quot;&gt;reddit.com&lt;/a&gt;&lt;/h1&gt;
  &lt;script src=&quot;scripts/popup.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<h3><code>scripts/popup.js</code></h3>

<p class="note">Note that I&#39;ve added a loading message to the code below so the user knows something is happening.</p>

<pre><code>window.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  // First, tell the user that something&#39;s happening
  var loading = document.createElement(&#39;p&#39;);
  loading.innerHTML = &#39;Loading...&#39;;
  document.body.appendChild(loading);

  // Get the headlines from the background process
  var redditText = opera.extension.bgProcess.doXHR(&#39;http://api.reddit.com/&#39;);

  // Stop if there&#39;s an error
  try {
    // Create a JSON object and get the array of stories within it
    var redditObj = JSON.parse(redditText);
    var stories = redditObj.data.children;
  } catch(e) {
    loading.innerHTML = &#39;Problem fetching the headlines&#39;;
    return;
  }

  // Create a list element and prepare variables for its items
  var list = document.createElement(&#39;ol&#39;);
  var story, item;

  // Loop through the array of stories and add each one to the list
  for (var i = 0, len = stories.length; i &lt; len; i++) {
    story = stories[i].data;
    item = document.createElement(&#39;li&#39;);
    item.innerHTML = &#39;&lt;a href=&quot;&#39; + story.url + &#39;&quot;&gt;&#39; + story.title + &#39;&lt;/a&gt;&#39;;
    list.appendChild(item);
  }

  // Finally, remove the loading message and show the list of headlines
  document.body.removeChild(loading);
  document.body.appendChild(list);
}, false);
</code></pre>

<h2>Conclusion</h2>

<p>As you can see, not having to use messaging has saved us considerable coding time and effort. Keep in mind that the <code>bgProcess</code> object can be accessed from an options page in exactly the same way: further enhancements to this extension could include <a href="http://dev.opera.com/articles/view/opera-extensions-options-page/">an options page</a> for the user to choose how many stories to display. Some CSS to nicely style the popup would also be a good idea. With that in place, this example is a good foundation for any sort of extension showing news, blog posts or other frequently updated stories. We&#39;d love to see what you can make once you&#39;ve submitted them to the <a href="http://addons.opera.com/">Opera extensions repository</a>. Happy coding!</p>

