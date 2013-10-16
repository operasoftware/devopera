Title: Opera extensions: messaging
----
Date: 2010-10-27 12:55:44
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

<p>With extensions, you have the ability to create and add exciting new functionality to the Opera desktop browser. As mentioned in other articles, Opera extensions contain a background process, injected scripts, and sometimes popup script too. In this article, we will take a look at how to communicate between all three.</p>

<h2>Contents</h2>
<ul>
<li><a href="#backgroundscript_injectedscript">Communicating between background process and injected script</a></li>
<li><a href="#popup_backgroundscript">Communicating between popup and background process</a></li>
<li><a href="#popup_injectedscript">Communicating between popup and injected script</a></li>
<li><a href="#conclusion">Wrapping it up</a></li>
<li><a href="#api">Further reading</a></li>
</ul>

<div class="note">
<p>Before we continue, you should download the following three extensions and install them in the <a href="http://www.opera.com/">newest version of the Opera browser</a>. We&#39;ll explain everything with the help of the code in these extensions. <!--It would also be helpfull to check out the <a href="http://labs.opera.com/extensions-api/visual-guide/index.htm">'Visual Guide to the Opera Extensions API' reference.</a>--></p>

<ol>
  <li><a href="message_example1.oex">Sample extension showing communication between background process and injected script</a></li>
  <li><a href="message_example2.oex">Sample extension showing communication between background process and popup</a></li>
  <li><a href="messaging_example_3.oex">Sample extension showing communication between popup and injected script (with a little initial help from background process)</a></li>
</ol>
</div>

<h2 id="backgroundscript_injectedscript">Communicating between background process and injected script</h2>

<p>Opera uses <code>postMessage()</code> to post a message, and we&#39;ll use that the majority of the time. However, if you want to post a message from the background process to <em>ALL</em> of the resources of that particular extension (like injected scripts, popup window, preference page etc), then you write the following in the background process:</p>

<pre><code>opera.extension.broadcastMessage(&quot;Hello there&quot;);</code></pre>

<p>Now you&#39;ve sent a message, the injected script needs to catch it, which is done like so:</p>

<pre><code>opera.extension.onmessage = function(event){
  var thecatch = event.data; // event.data in this case will contain the string &quot;Hello there&quot;
}</code></pre>

<p>It&#39;s as simple as that. In the above code, the background process is firing a message using <code>broadcastMessage</code> to the injected script, and the injected script is listening for it. When it gets the message, the stores it in a variable called <code>thecatch</code>. Keep in mind though, that using <code>broadcastMessage</code> will send the message to all injected scripts and popups, so it should be used sparingly. Normally, you&#39;ll want to communicate to just one popup or injected script (the one inside your own extension) using <code>postMessage</code> or message channels.</p>

<p class="note"><code>broadcastMessage()</code> only takes one argument: a string or an object. For example, either <code>broadcastMessage(&quot;hi&quot;)</code> or <code>broadcastMessage({&#39;say&#39;: &#39;hi&#39;, &#39;to&#39;:&#39;adam&#39;})</code>. The same thing goes for <code>postMessage()</code> communication that we&#39;ll discuss in this article. However, for the sake of simplicity and consistency, we&#39;re only going to use strings in the examples being discussed below.</p>

<p>Let&#39;s illustrate this further by taking a look at our first test example.</p>

<p>The background process has an event listener for <code>load</code>, and all the code is inside the function call for it. You can read the <code>opera.postError</code> logs in <em>Tools &gt; Advanced &gt; Error Console</em>.</p>

<p class="note">In Opera 11 beta onwards, you can easily open the Error Console by the keyboard shortcut [Cmd|Control]+Shift+O</p>

<pre><code>window.addEventListener(&quot;load&quot;, setupConnection, false);

function setupConnection(){
   // When the injected script is activated, it connects with the background process.
   opera.extension.onconnect = function(event){
        // Post message to the source, that is, the thing which connected to us (in this case the injected script)
 	event.source.postMessage(&quot;something&quot;);
        // Post this message in the opera error console
	opera.postError(&quot;sent message to injected script&quot;);
   }

   // Listen for messages
   opera.extension.onmessage = function(event){
       	// Post a sentence (which includes the message received) to the opera error console
       opera.postError(&quot;This is what I got from injected script: &quot;+event.data);
   }
}</code></pre>


<p>Let&#39;s focus first on the following code snippet:</p>

<pre><code>opera.extension.onconnect = function(event){
   event.source.postMessage(&quot;something&quot;);
   opera.postError(&quot;sent message to injected script&quot;);
}</code></pre>

<p><code>onconnect</code> is fired whenever something connects to the background process, in this case, when the injected script is activated on a document, thus creating a connection with the background process. So as soon as the injected script loads, the <code>onconnect</code> event is fired.</p>

<p>The <code>onconnect</code> handler in the background contains a reference back to the injected script in <code>event.source</code>. This message port can then be used to directly communicate back to the injected script, which is done here by sending the string &quot;something&quot; as a message using <code>event.source.postMessage()</code>. We also send a small string to the error console, just to keep track of what&#39;s happening.</p>


<p>Let&#39;s leave the background process for a while and focus instead now on the injected script:</p>

<pre><code>opera.extension.onmessage = function(event){
  // Get content of incoming message.
  var message  = event.data;
  opera.postError(&quot;background process sent: &quot; + message);

  //  Replies back to background process.
  var reply = &quot;background process&#39;s message only had &quot; + (message ? message.length : 0) + &quot; characters.&quot;;
  event.source.postMessage(reply);
};</code></pre>

<p>Here, <code>onmessage</code> is invoked whenever the injected script receives a message. We store the content of the message in the variable <code>message</code>. Next we use <code>opera.postError</code> to display a sentence in the error console along with the message sent by the background process.</p>

<p>To acknowledge receipt of the message, we post back a message to the background process using the <code>event.source</code> of the incoming message. This always holds true: a message <code>event.source</code> always points back to the sender.</p>

<p>So now, we&#39;ve seen how messages are received by the injected script, and also how they can be transmitted back to the background process.</p>

<p>The next step is for the background process to catch this message and do something with it. So let&#39;s focus on the background process again, this time on the other part of the script:</p>

<pre><code>// Listen for injected script messages
opera.extension.onmessage = function(event){
   // Post a sentence (which includes the message received) to the opera error console.
   opera.postError(&quot;This is what I got from the injected script: &quot; + event.data);
}</code></pre>

<p>Here, whenever a message is received, it posts a sentence containing that message data onto the error console.</p>

<p>So in summary, this is what happens in the extension:<p>

<ul>
  <li>The background process sends a message to the injected scripts</li>
  <li>The injected script catches that message and writes something on the error console, which includes the message given by the background process</li>
  <li>The injected script then replies, sending a message back to background process</li>
  <li>The background process writes a sentence into a string on the error console, which includes information about the message sent by the injected script.</li>
</ul>

<p>If you have installed the extension (reload the page for the injected script to take affect) then go to the error console. You should find the messages shown in Figure 1 written into it.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/397-opera-extensions-messaging/message_example1.png" alt="Image of Error console showing the messages sent to it by the extension" /></p>

<p class="comment">Figure 1: The error console, showing the messages sent to it by the extension.</p>

<p>So we&#39;ve now seen how both background process and injected script can post messages and catch messages. Next, we&#39;ll see how this is done with a popup.<p>


<h2 id="popup_backgroundscript">Communicating between popup and background process</h2>

<p>We&#39;ll be using the second extension example for this. Notice that there is no <code>includes/</code> folder or any injected scripts — it&#39;s just the background process, and the HTML files along with <code>config.xml</code> and an icon.</p>

<p>You already know from previous articles <a href="http://dev.opera.com/articles/view/opera-extensions-buttons-badges-and-popups/#create_buttons">how to create a <code>UIItem</code> like a button</a>, so we won&#39;t cover that. Let&#39;s focus on the following piece of code in <code>background.js</code>:</p>

<pre><code>opera.extension.onconnect = function(event){
  event.source.postMessage(&quot;sending something&quot;);
  opera.postError(&quot;sent message to popup&quot;);
}</code></pre>

<p>As we know from the previous example, this will be run when something connects to the background process, in this case, the popup. The function sends the message &quot;sending something&quot; to the popup, and the message &quot;Sent message to popup&quot; to the error console.</p>

<p>Let&#39;s go to the popup page now:</p>

<pre><code>&lt;script&gt;
    window.addEventListener(&quot;load&quot;, function(){
    opera.extension.onmessage = function(event){
    	event.source.postMessage(&quot;do whatever you want with this message&quot;);
    	opera.postError(&quot;sent from popup to background process&quot;);
    	}
    }, false);
&lt;/script&gt;</code></pre>

<p>Here we listen for a message to arrive, and when it does we send a message back to the source. We also post something to the error console once again. So now the popup script receives a message, and sends a message back to the background process. All that&#39;s left now is for the background process to catch it.</p>

<p>Let&#39;s go back to the background process again, and study the following code:</p>

<pre><code>opera.extension.onmessage = function(event){
   opera.postError(&quot;This is what I got from injected script: &quot; + event.data);
}</code></pre>

<p>Here the background process listens for a message, and when there is one, it posts something to the error console, with the content of the message received as part of the message. As you can see, we approximate and label the message as coming from an injected script here too.</p>

<p>So in summary, this is what happens in the extension:</p>

<ul>
  <li>The background process sends a message to the popup script.</li>
  <li>The popup script catches that message and writes something onto the error console, which includes the message given by background process.</li>
  <li>The popup then sends a message back to the background process</li>
  <li>The background process writes something into a string on the error console, which includes the message sent by the popup script.</li>
</ul>

<p>So the way it behaves is actually pretty similar to the previous example, its just that with this example, we did not have an injected script file at all in the <code>includes/</code> folder. Rather, we used a popup and the popup document&#39;s script communicated with the background process.</p>


<p>If you install the extension, click the extension button to trigger the communication with the popup then open up the error console, you should see the messages shown in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/397-opera-extensions-messaging/message_example2.png" alt="Image of Error console showing the messages sent to it by the extension" /></p>
<p class="comment">Figure 2: the error console showing the messages sent to it by the extension.</p>

<h2 id="popup_injectedscript">Communicating between popup and injected script</h2>

<p>Let&#39;s now look at how to communicate between a popup and an injected script. The background process will be used initially to make the connection, then both popup and injected script will talk without the background process.</p>

<p>We achieve this by creating a message channel. You can learn more about message channels by looking at the <a href="http://dev.w3.org/html5/postmsg/#message-channels">HTML5 cross document messaging specifications</a>, which is what the messaging for extensions is closely based on.</p>

<p>We&#39;ll explain this using the third test example, so fire up your text editor and have a look at the code. Let&#39;s first look at the background process. You&#39;ll notice some familiar things, like the code to add a button and a popup, etc. Let&#39;s delve into the interesting bit.</p>

<p>Let&#39;s look at the <code>onconnect</code> event here:</p>

<pre><code>opera.extension.onconnect = function( event ){
	if( event.origin.indexOf(&quot;popup.html&quot;) &gt; -1 &amp;&amp; event.origin.indexOf(&#39;widget://&#39;) &gt; -1 ){
		var tab = opera.extension.tabs.getFocused();
		if( tab ){
			tab.postMessage( &quot;Send a port&quot;, [event.source] );
			opera.postError(&#39;sent a message to injected script&#39;);
		} 
	} 
}</code></pre>

<p>We first check whether the origin of the connection is the popup file (popup.html) and whether it is the same popup.html that is included in our extension file or not (by checking for &#39;widget://&#39;). If so, then it will send a message to the injected script, together with a reference to the source of the connect (the popup). </p>

<p>Now look at the injected script:</p>

<pre><code>var counter = 0;
var background;

opera.extension.onmessage = function( event ){
	if( event.data == &quot;Send a port&quot; ){
		background = event.source; // in case you need to send anything to background, just do background.postMessage()
		var channel = new MessageChannel();
		
		event.ports[0].postMessage( &quot;Here is a port to the currently focused tab&quot;, [channel.port2] );
		opera.postError(&#39;post sent from injected script&#39;);
		
		channel.port1.onmessage = handlePopupMessage;
	}
}</code></pre>

<p>Here we initially set the counter to zero. The injected script listens to any message, and if the message if &#39;send a port&#39; (the same that the background message sends when the popup connects to it), then a message channel is set up.</p>

<p>Essentially in message channels:</p>
<ul>
<li>MessageChannel.port1.postMessage -&gt; will fire MessageChannel.port2.onmessage</li>
<li>MessageChannel.port2.postMessage -&gt; will fire MessageChannel.port1.onmessage</li>
</ul>
<p>So in this case, we want to send port2 to the popup. When the popup posts to port2, the injected script can listen to it on port1.</p>

<p>When we recieve a message from the popup on port1, we check call the function &#39;handlePopupMessage&#39; (more on that later).</p>

<p>The message sent by the background script also had a refernce to the popup. This reference to the popup is available as <code>event.ports[0]</code>. We now post a message to the popup, together with a reference to port 2 of the message channel. </p>

<p>Now let&#39;s look at the popup file:</p>

<pre><code>var theport;

function handleMessageFromInjectedScript( event ){
	opera.postMessage( &quot;Message received from the injected script: &quot; + event.data );
}
 
opera.extension.onmessage = function ( event ){
	if( event.data == &quot;Here is a port to the currently focused tab&quot; ){
		if(event.ports.length &gt; 0 ){
		theport = event.ports[0];
			theport.onmessage = handleMessageFromInjectedScript;
		} 
	}
}


function sendMessage(message){
var sendstring = message;
	if (theport){
		theport.postMessage(sendstring);
		opera.postError(&#39;the send sent is: &#39;+sendstring);
	}
}</code></pre>

<p>Lets start from the <code>onmessage</code> part. Here it checks whether the message is the same one which is supposed to come from the background process. If so, it saves a reference to that port (port2) in the &#39;theport&#39; variable. Whenever a message a message is received on it, it calls the function &#39;handleMessageFromInjectedScript&#39;, which would post a message to the console. Then in the end we post a message back on this port, which will be received by the injected script.</p>

<p>In the HTML, we have </p>
<pre><code>&lt;p&gt;&lt;a href=&quot;javascript:sendMessage(&#39;change title&#39;);&quot;&gt;Change Title&lt;/a&gt;&lt;/p&gt;</code></pre>
<p>This calls the <code>sendMessage()</code> function, which takes the string &#39;change title&#39; and sends it to the injected script.</p>

<p>Finally, we come back to the injected script. Remember that we have a function to handle messages from the popup? Lets look into that function</p>

<pre><code>function handlePopupMessage(e){
			opera.postError( &quot;Message received from the popup: &quot; + event.data );
			
			if (event.data == &quot;change title&quot;){
				document.title = &quot;You have clicked &quot; + counter + &quot; times&quot;;
				counter++;
			}


		}</code></pre>

<p>The function &#39;handlePopupMessage&#39; is called whenever a message is recieved from the popup on port1. It checks whether the message is &#39;change title&#39;, and if so, it changes the document title and increments the counter.</p>

<p>So in summary, the following things happen:</p>

<ul>
<li>Background process loads</li>
<li>The page loads, and so does the injected script.</li>
<li>User clicks on popup, which connects to background process. The <code>onconnect</code> event is fired in the background process which fires a message to the injected script. The message which is sent to the injected script, also has a reference to the popup.</li>
<li>The injected script listens to this message, and sets up a message channel. It takes the reference to the popup (which came along the message it has just recieved) and posts a message to it. That message has a reference to channel 2 of the message channel.</li>
<li>The popup listens to this message and stores the reference to the second channel.</li>
<li>Now whenever a message needs to be sent to injected script, the popup just sends a <code>postMessage</code> to it.</li>
<li>That message sent on port2 by popup will be listened on port1 by injected script. When a message arrives, it checks which kind of message it is and performs the appropriate action (in the example&#39;s case it changes the document title)</li>
</ul>

<h2 id="conclusion">Wrapping it up</h2>

<p>Communicating between various parts of an extension is pretty easy once you get to know how to use <code>postMessage</code> along with the <code>onconnect</code> and <code>onmessage</code> handlers. You can also use message channels, which is required when it comes to communicating between a popup and an injected script. This article has shed some light on how to pass around messages in three scenarios: between background process and injected script; between background process and popup; and between popup and injected script.</p>

<h2 id="api">Further reading</h2>
<ul>
<li><a href="/articles/view/accessing-an-opera-extensions-background-process/">Accessing an Opera extension&#39;s background process</a></li>
<li>Attributes and methods regarding the <a href="/articles/view/extensions-api-injected-scripts/">Injected script API reference</a></li>
<li>Attributes and methods regarding the <a href="/articles/view/extensions-api-popup/">Popup process API reference</a></li>
<!--<li>The <a href="http://labs.opera.com/extensions-api/visual-guide/index.htm">Visual Guide to the Opera Extensions API</a></li>-->
</ul></p></p></p></p>
