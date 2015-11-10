---
title: Web Workers Rise Up!
authors:
- daniel-davis
intro: 'In this article you will meet Web Workers, one of many technologies that, together with HTML5, are forming the next generation of the open web. Web Workers allow you to create separate processes in your JavaScript to deal with number crunching, while your main process remains as responsive as possible for the users of your applications.'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>Picture this. You are the dear leader of the little-known land of ScravaJipt, reigning supreme over all you survey. You have a chief servant to look after you, buy your clothes, press the buttons on your mobile phone. But there are times when this gets too much for him. He gets overloaded with all those chores so you have to outsource certain tasks to specialists (one to press buttons, one to buy shirts, another to buy trousers). Luckily for him, there are plenty of workers you can rely on. Similarly, luckily for web developers there are digital specialists that can take over certain tasks when our JavaScript engine gets overloaded. Meet Web Workers, one of many technologies that, together with HTML5, are forming the next generation of the open web.</p>

<h2>The raison d'être of Web Workers</h2>

<p>Have you ever been to a page that displayed partially but didn't respond to any clicks? Or a page that froze or crashed your browser?</p>

<p>The cause was most likely JavaScript. Web pages are becoming increasingly JavaScript-heavy, sometimes so heavy they can't move. JavaScript's ubiquity is a boon for developers but this means it can run on a wide variety of devices including many that are underpowered for today's web applications. There are several ways to optimize your JavaScript but it still won't be anywhere near as fast as native code.</p>

<p>Web developers are not going to (and shouldn't have to) cut back on their use of JavaScript because of this. Instead, web standards and the browsers that implement them are stepping up to carry the burden. Web Workers are one example of this, together with various other JavaScript APIs that are being developed to bring more power to the browser.</p>

<h2>How Web Workers work</h2>

<p>Most modern programming languages are multi-threaded, meaning they can run several processes simultaneously. Making JavaScript multi-threaded would require a lot of architectural changes and fundamental re-thinking, so Web Workers offers a way around this, enabling the language to be extended so that it can appear to be multi-threaded in certain cases. In other words, more than one process can effectively be run simultaneously but with some restrictions. Quite a lot of restrictions, in fact, so they're only useful in certain situations.</p>

<h3>When can I use them?</h3>

<p>Going back to our 'specialists' analogy, Web Workers can only do one thing but they do it very well. They are excellent at doing fast calculations but are unable to do more complex work such as accessing the DOM. If we compare our web application to a kitchen, the main JavaScript thread would be the head chef about to make an omelette. If he did everything himself, he would beat an egg, prepare a pan, melt some butter and finally cook the omelette. If he wanted to improve efficiency he could get help from a kitchen worker. The worker could beat the egg, enabling the head chef to get the pan and butter ready and then cook the omelette. The worker is not allowed to touch the pan or cook the omelette &mdash; he just completes a task while the head chef continues with other work.</p>

<img src="web-workers-explained.png" width="600" height="465" alt="How a Web Worker can perform a task simultaneously to another task." />
<p><div class="comment">Figure 1: If Web Workers could cook, this is how they'd help make an omelette.</div></p>

<p>Using Web Workers is the same. If your JavaScript includes some resource-intensive calculations, you can pass this to a Web Worker to process while the main thread continues running. You can use more than one Web Worker, and a Web Worker can do more than one task. Let's cook up an example to see it in action.</p>

<h3>Just show me the code!</h3>

<p>Stay calm, we're getting there! The worker itself is simply some JavaScript code in its own file. Just as the concept of Web Workers is executing code in a separate thread, so the worker code itself has to be in a separate file, or multiple files if you're using more than one worker. In our example, let's start by creating an empty text file and naming it <code>worker.js</code>.</p>

<p>In our main JavaScript thread we use our worker by creating a new <code>Worker</code> object:</p>

<div class="comment">Main JavaScript thread</div>
<pre><code>var worker = new Worker('worker.js');</code></pre>

<p>Like our kitchen assistant, we pass the worker something, it does something with it in the background, and then gives us something back. Communicating with the worker is done using the <code>postMessage</code> method:</p>

<div class="comment">Main JavaScript thread</div>
<pre><code>// Create a new worker object
var worker = new Worker('worker.js');

// Send a simple message to start the worker
worker.postMessage();</code></pre>

<p>It's also possible to pass a variable to the worker:</p>

<div class="comment">Main JavaScript thread</div>
<pre><code>// Create a new worker object
var worker = new Worker('worker.js');

// Send a message to start the worker and pass a variable to it
var info = 'Web Workers';
worker.postMessage(info);</code></pre>

<p>In the worker, i.e. within <code>worker.js</code>, we use the <code>onmessage</code> event to receive the message from the main thread and do something. If you're passing a variable, you can access it with <code>event.data</code> like so:</p>

<div class="comment">worker.js</div>
<pre><code>// Receive the message from the main thread
onmessage = function(event) {
  // Do something
  var info = event.data;
};</code></pre>

<p>Sending messages from the worker back to the main thread uses the same methods:

<div class="comment">worker.js</div>
<pre><code>// Receive the message from the main thread
onmessage = function(event) {
  // Do something
  var info = event.data;
  var result = info + ' rise up!';
  postMessage(result);
};</code></pre>

<div class="comment">Main JavaScript thread</div>
<pre><code>// Create a new worker object
var worker = new Worker('worker.js');

// Send a message to start the worker and pass a variable to it
var info = 'Web Workers';
worker.postMessage(info);

// Receive a message from the worker
worker.onmessage = function (event) {
  // Do something
  alert(event.data);
};</code></pre>

<p>Feel free to <a href="web-workers-demo.zip">download this Web Workers demo</a>.</p>

<!--<p>We've also made this <a href="http://people.opera.com/danield/webapps/web-workers/">Web Workers speed test</a> to demonstrate their effectiveness. Note that results may vary depending on the browser.</p>-->

<p class="note" id="note">Opera is built as a single-threaded browser with support for a wide variety of platforms, so our current implementation of Web Workers interleaves code execution in the single UI thread. Other browsers, however, may have multi-threaded architectures which enable simultaneous execution of code.<!-- The benefit to both approaches is speed &mdash; either perceived speed when the UI is loaded while scripts are still being executed, or overall speed as in Opera's implementation and clearly visible in the above speed test.--></p>

<h3>Things to bear in mind</h3>

<p>This is obviously a very simple example, but when you give the worker more complicated tasks to do, such as handling large arrays or calculating points in a 3D space for the main thread to display, it becomes a very powerful feature. The main thing to remember, however, is that the worker cannot access the DOM. In the above example, for instance, we could not call <code>alert()</code> within the worker, or even <code>document.getElementById()</code> &mdash; it can only receive and return variables, although these could be strings, arrays, JSON objects, etc.</p>

<p>Here's a summary of what Web Workers do and don't have access to.</p>

<ul>
<li>Can use:</li>
<ul>
<li><code>navigator</code> object</li>
<li><code>location</code> object (read-only)</li>
<li><code>importScripts()</code> method (for accessing script files in the same domain)</li>
<li>JavaScript objects such as <code>Object</code>, <code>Array</code>, <code>Date</code>, <code>Math</code>, <code>String</code></li>
<li><code>XMLHttpRequest</code></li>
<li><code>setTimeout()</code> and <code>setInterval()</code> methods</li>
</ul>
<li>Can't use:</li>
<ul>
<li>The DOM</li>
<li>The worker's parent page (except via <code>postMessage()</code>)</li>
</ul>
</ul>

<h3>Browser support</h3>

<p>At the time of writing, not all browsers support Web Workers so they should be used with care. Rather than trying to keep track of which browser versions do and don't have support, it's easy to include a check within your script. To detect whether a user's browser supports Web Workers, you can test for the existence of the <code>window</code> object's <code>Worker</code> property:</p>

<pre><code>// Check to see if Web Workers are supported
if (!!window.Worker) {
  // Yay, I can delegate the boring stuff!
}</code></pre>

<p>Web Workers are particularly suited for situations where you don't want to keep the user waiting while some code is processed. The main thread could concentrate on dealing with the UI, displaying it as quickly as possible, while the Web Workers could process the data, using AJAX to communicate with the server, in the background. Everybody's happy, and all is well in the land of ScravaJipt.</p>

<h2>Further links about Web Workers</h2>

<ul>
<li><a href="http://www.w3.org/TR/workers/">The latest published version of the Web Workers specification</a></li>
<li><a href="http://html5demos.com/worker">A simple Web Workers demo</a>, by Remy Sharp</li>
<li><a href="http://brandonaaron.net/examples/connecting-the-dots-with-web-workers/1">Connecting the Dots with Web Workers Example</a>, by Brandon Aaron</li>
<li><a href="http://answers.oreilly.com/topic/1358-introducing-the-web-workers-api/">Introducing the Web Workers API</a>, by Nicholas C. Zakas</li>
<li><a href="http://diveintohtml5.info/detect.html">Detecting support for HTML5 and related JavaScript APIs</a>, by Mark Pilgrim</li>
</ul>
