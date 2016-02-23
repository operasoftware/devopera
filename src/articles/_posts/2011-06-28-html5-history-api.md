---
title: Introducing the HTML5 History API
authors:
- mike-taylor
- chris-mills
intro: 'The HTML5 history API - supported in Opera 11.50+ - provides a means to perform tasks such as moving forward and backward in the session history, adding new entries into the history, and so on. In this article we’ll look at the API’s basic syntax along with a simple example to show you what’s possible.'
license: cc-by-3.0
---
<h2>Introduction</h2>


<p>Before the advent of HTML5, one thing that we &mdash; as web developers &mdash; were not able to control and manipulate is the session history of a particular browsing context. Not without incurring page reloads or relying on <code>location.hash</code> workarounds. This is all set to change however: the <a href="http://dev.w3.org/html5/spec/history.html">HTML5 history API</a> provides a means to perform tasks such as moving forward and backward in the session history, adding new entries into the history, and so on. In this article we'll look at the API's basic syntax along with a simple example to show you what's possible.</p>

<p class="note"><a href="https://www.opera.com/browser/">Opera 11.50</a> and later support the complete API, including the <code>pushState()</code> and <code>replaceState()</code> methods, the <code>history.state</code> object, and the <code>popstate</code> event.</p>


<h2>Basic concepts and syntax</h2>

<p>The History API relies on a single DOM interface &mdash; the <code>History</code> object. There is a unique <code>History</code> object defined for each tab, accessed through the <code>history</code> attribute of the <code>Window</code> interface. This can be manipulated using JavaScript along with some special methods. To relate this to the actual pages in your session history, each <code>Document</code> object is associated with a unique instance of the tab's <code>History</code> object (they all model the same underlying session history).</p>

<p><code>History</code> objects represent each tab's session history as a flat, comma-separated list of session history entries. Each session history entry consists of a URL or a state object (or both), and in addition can have a title, a <code>Document</code> object, form data, a scroll position, and other information associated with it.</p>

<p>The basic methods of the <code>history</code> object are:</p>

<ul>
<li><code>window.history.length</code>: Returns the number of entries in the joint session history.</li>
<li><code>window.history.state</code>: Returns the current state object.</li>
<li><code>window.history.go(n)</code>: Goes backwards or forwards by the specified number of steps in the joint session history. If the value you specify is zero, it will reload the current page. If it would cause the target position to be outside the available range of the session history, then nothing happens.</li>
<li><code>window.history.back()</code>: Goes backwards by one step in the joint session history. If there is no previous page to go to, it does nothing.</li>
<li><code>window.history.forward()</code>: Goes forwards by one step in the joint session history. If there is no next page to go to, it does nothing.</li>
<li><code>window.history.pushState(data, title [, url])</code>: Pushes the data specified in the arguments onto the session history, with the given title and URL (the URL is optional).</li>
<li><code>window.history.replaceState(data, title [, url])</code>: Updates the current entry in the session history, with the given data, title and URL (the URL is optional).</li>
</ul>

<p>For example, to navigate backwards by two history session entries, the following code can be used:</p>
<pre><code>history.go(-2)</code></pre>

<p>To add history entries with <code>history.pushState</code>, we'd do something like this:

<pre><code>history.pushState({foo: 'bar'}, 'Title', '/baz.html')</code></pre>

<p class="note">Currently the 2nd argument of <code>pushState</code> and <code>replaceState</code> &mdash; the title of the history entry &mdash; isn't used in Opera's implementation, but may be one day.</p>

<p>To replace a history entry using <code>history.replaceState</code>, we would do this:</p>

<pre><code>history.replaceState({foo: 'bat'}, 'New Title')</code></pre>

<p>The (optional) <code>state</code> object argument for <code>pushState</code> and <code>replaceState</code> can then be accessed in <code>history.state</code>.


<h2>A real example</h2>

<p>Now we've seen the basics, let’s look at a real example. This particular example is a web-based file explorer to help you find a URI of a particular image (<a href="http://people.opera.com/miket/2011/6/viewer.html">view the example running live</a>), with a simple JavaScript-based expanding/collapsing folder structure. When you select a file in the folder, the image is dynamically updated on the screen.</p>

<p><img src="example.png" alt="sample app making use of the HTML5 history API so that you can still maintain a proper usable history even with dynamic content"></p>

<p>We are using custom <code>data-*</code> attributes to store each image's caption, and then using the <code>dataset</code> property to access these and print them underneath their respective images:</p>

<pre><code>&lt;li class="photo"&gt;
	&lt;a href="crab2.href" data-note="Grey crab!"&gt;crab2.png&lt;/a&gt;
&lt;/li&gt;</code></pre>

<p>Now, there is something clever going on here - when we access the main <code>viewer.html</code> page with a browser that supports the history API, then open a folder and click on an image, it looks like we are visiting a new page. But in fact this is not the case - every time an image is selected, it is dynamically loaded into the <code>viewer.html</code> page and a new history entry is written using the history API. This way, the user experience is far snappier as we aren't loading an entire new page each time a new image is selected, and the history API usage means that we are still able to use the back button to go between different images.</p>

<p>But there's more - each page is also available at a separate URL, as a separate HTML file, so the demo will gracefully degrade in non-supporting browsers, and you can bookmark the URLs and go straight back to them. Try for example, going straight to <a href="http://people.opera.com/miket/2011/6/crab.html">crab.html</a> in a browser, even one that doesn't support the History API, or one that has JavaScript turned off completely!</p>

		<h3>Walking through the code</h3>

<p>The HTML is pretty self-explanatory &mdash; two <code>&lt;div&gt;</code>s sat next to one another, the left one containing the folder structure inside nested lists, and the right one providing a space to display the pictures. The dynamic functionality is all controlled via the linked JavaScript file, <code>app.js</code>. Apart from images and CSS, the demo relies on a single constructor function, <code>FilePreview</code>. We'll only highlight relevant portions here, but the code is quite short (only 80 lines) and we encourage you to have a look at it all.</p>

<p>In the <code>bindEvents</code> method, we set up event handlers for the <code>popstate</code> event on the document, as that will allow the application to know that the history has been navigated and to update the page accordingly.</p>

<pre><code>window.addEventListener('popstate', function(e){
	if (history.state){
		self.loadImage(e.state.path, e.state.note);
	}
}, false);</pre></code>

<p>Note that the event object that gets passed into the listener has a <code>state</code> property which corresponds to the <code>state</code> argument (if any) of the <code>pushState</code> or <code>replaceState</code> method call of the current history entry.

<p>We also listen for the <code>click</code> event on the <code>&lt;div&gt;</code> holding our file navigation, using event delegation to know if we should open or close a folder, or load a new image into the page (which results in a history entry being added). By inspecting the <code>className</code> of the parent element of the link that was clicked (with the <code>classList</code> API) we can find out what it is, and act accordingly:</p>

<ul>
<li>If it's a folder we open or close it.</li>
<li>If it's a photo we load the image and update the history accordingly.</li>
</ul>

<pre><code>dir.addEventListener('click', function(e){
	e.preventDefault();
	var f = e.target;

	if (f.parentNode.classList.contains('folder')) {
		self.toggleFolders(f);
	}

	else if (f.parentNode.classList.contains('photo')){
		note = f.dataset ? f.dataset.note : f.getAttribute('data-note');

		self.loadImage(f.textContent, note);
		history.pushState({note: note, path:f.textContent}, '', f.href);
	}
}, false);</pre></code>

<p>The actual method that changes the image and updates the caption is pretty self-explanatory:</p>

<pre><code>loadImage: function(path, note){
		img.src = path;
		h2.textContent = note;
}</pre></code>

<h2>Summary</h2>

<p>Put it all together and we have a <a href="http://people.opera.com/miket/2011/6/viewer.html">simple file-browsing app</a> that demonstrates how to use some of the additions to the <code>History</code> interface, namely <code>pushState</code> to add entries to the browsing context's history and the <code>popstate</code> event to react to state changes. What's more, each file that has been navigated to can be accessed later at its real URL.

<p>This highlights the real usefulness of the history API: you can create Ajaxy navigation in the style of Facebook or Twitter, without breaking the back button or the URLs to individual pages. Although bear in mind that hashbangs don't work if you share the URL with someone who has scripting disabled.</p>
