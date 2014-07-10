---
title: Client-Side Error Logging
authors:
- remy-bach
- rob-miller
intro: 'This article shows how to handle client-side error logging, a very useful practice that helps you better understand and discover issues that your users are having.'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>For decades, programmers have been using error logging to find out what they did wrong when their code isn't working. Server-side errors are usually easy to track down. Requests to your website timing out? Check the web server's logs and see if there's anything in there. Values coming out of the database wrong? Look at the database logs to see if there's a syntax error hiding around there.</p>

<p>Traditionally, hunting down errors on your client-side code hasn't been as efficient or elegant as on the server-side, often relying on hawkish little alert outputs embedded in your code.</p>

<p>In this article we will take you in detail through the rather useful concept of client-side logging, a method of recording client-side errors and alerts on the server and making them much easier to work through.</p>

<h2>Just how useful are server-side logs?</h2>

<p>Server-side logs vary in how they look depending on the system in question, but just to give you a few examples:</p>

<h3>A server access log (IP Addresses have been obfuscated):</h3>

<pre><code>XX.XXX.X.XX - - [28/Apr/2012:07:16:24 +0000] "GET /404.php HTTP/1.1" 200 2459 "-" "Mozilla/5.0 (Linux; Android 4.0.3;  HTC One X Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"</code></pre>

<p>This shows that someone visited the site on the 28th of April 2012 at 07:16 in the morning and got to the 404 page. The HTTP status code was 200, so they likely went directly there.</p>

<h3>A database error log</h3>

<pre><code>120516 13:57:39 [ERROR] /usr/sbin/mysqld: Table './wordpress/wp_commentmeta' is marked as crashed and should be repaired</code></pre>

<p>Here we see that there was a problem with our <code>wp_commentmeta</code> table on the 16th of May 2012 (120516) at 13:57 and that we need to run a mysql repair on it.</p>

<h2>So what about the front-end?</h2>

<p>Admit it… you've all used an alert statement when trying to debug client-side JavaScript before. "I had no choice," you counter… "how else was I to know why it wasn't working?"</p>

<p>Don't worry… the best of us have done it too! We've all used the dreaded <code>alert()</code> at some point in our lives. Enter <code>console.log()</code>: our informative new friend literally changed the way we debugged our code. And developer tools such as Opera Dragonfly or Chrome dev tools offer more sophisticated debugging environments, with features such as breakpoints and watches.</p>

<p>This is all well and good, but the problem is that these are <em>only</em> useful when you're the one developing/investigating the issue. How many times have you gotten an email from a client saying that a user had a problem with a particular page, but <em>nothing</em> further. What about when things break down on the user's side? What browser were they using? What is their screen resolution? What is the <em>actual</em> error? An error message would sure be useful at this point — way better than that screenshot embedded in a <code>.pptx</code> file that your client inevitably sends you. If you have even a tiny bit of experience as a developer, you'll know that this kind of thing happens all the time.</p>

<p>Surely, in this day and age, we have to be able to do this in a much smarter way?</p>

<h2>There is a way, with client-side logging</h2>

<p>The principle is quite simple: when the browser encounters an error, or when a developer makes a call to <code>console.log</code> or similar functions, we don't just log the error in the console on the client-side. Instead, we send it to the server and collate it together with all the other errors your users have encountered in a file or database. Then, if a user reports a problem you have something to go on — look through the logs to see what errors people are having on that particular page, and you will probably find your problem more efficiently.</p>

<h2>Capturing errors</h2>

<p>Whenever JavaScript encounters an error, it fires the <code>window.onerror</code> event; you can listen for this event, either to attempt to recover from the error or, in our case, log the error message. Karl Dubost has written <a href="http://dev.opera.com/articles/view/better-error-handling-with-window-onerror/">an excellent article</a> about exactly what <code>window.onerror</code> is and how it behaves; it's certainly worth a read.</p>

<p>In essence, what we need to do for our purposes is listen for the <code>window.onerror</code> event. Whenever it fires, we make an AJAX request to the server, passing along the details of the error message. Here's what it might look like using jQuery:</p>

<pre><code>window.onerror = function(message, file, line) {
		$.post('/log', { message: message, file: file, line: line });
}</code></pre>

<p>Another way of capturing error information would be by making use of a <code>try</code>/<code>catch</code> statement. Here is a simple example of how we might do this:</p>

<pre><code>try {
		// Code that might throw an error here.
} catch (error) {
		$.post('/log', { message: 'This error happened within the try/catch: '+error.message });
}</code></pre>

<h2>Capturing debugging information</h2>

<p>Errors are definitely a useful source of information, however users often experience behaviour that isn't outright wrong, but is instead just a bit problematic; if you're only logging outright errors, then you might still be out of luck in tracking down your problem. What you need is more detailed information: the state of key variables, the values of important user input, etc.</p>

<p>You might already log this information when developing, using functions like <code>console.log</code>, <code>console.info</code>, and <code>console.error</code> to trigger debugging messages that then show up in your favourite developer console. Well, we can also track these messages in your log; by hooking into the various <code>console</code> methods before they perform their usual behaviour, we can do exactly the same as we did for <code>window.onerror</code>, and send off a request to the server containing the relevant information.</p>

<p>If you're comfortable both with leaving these debug messages lying around in your code and the idea of parodying important functions, you can hook into them with some code similar to this; it's called the <a href="http://stackoverflow.com/a/296706">proxy pattern</a>:</p>

<pre><code>console.log = (function(message) {
	var original_log = console.log;
	return function(message) {
		$.post('/log', { message: message });
		original_log(message);
	}
})();</code></pre>

<p>Now, every time you call <code>console.log</code>, your output will be sent to the server as well as the developer console. Magic!</p>

<h2> A sample backend</h2>

<p>Of course, the backend could be whatever data store you like. In practice, it's likely to be a choice that's influenced by the rest of the backend on your site: if your content management system uses MySQL you're likely to want to store your logs in a MySQL database; if it's written in Ruby, your server-side logging code is likely to be in Ruby; and so on.</p>

<p>Here's an example of a simple PHP backend that could work; hopefully it's commented enough to be self-explanatory:</p>

<pre><code>&lt;?php
	# Take the message from the query string, e.g.
	# log.php?message=some+error
	$message = $_REQUEST['message'];

	# Store the log data in a file called 'log.txt', in the same
	# directory as the script.
	$log_file = __DIR__ . '/log.txt';

	# If the file can't be read, attempt to create it and set its
	# permissions to be writable; if all that fails, then we must exit.
	if ( !is_readable($log_file) && !touch($log_file) && !chmod($log_file, 0664) ) {
		die;
	}

	# Fetch the existing log data; we'll be appending to it.
	$json = file_get_contents($log_file);
	$log  = json_decode($json);

	# If we couldn't decode the JSON, then the file is likely to be
	# empty and we should start a new log.
	if ( !$log ) {
		$log = array();
	}

	# Along with the log message, store the date.
	$log[] = array('date' => date('Y-m-d H:i:s'), 'message' => $message);
	$json  = json_encode($log);

	# If the file isn't writable, and we can't make it so, then we must
	# exit too.
	if ( !is_writable($log_file) && !chmod($log_file, 0664) ) {
		die;
	}

	# Finally, write the log data back out to the file.
	file_put_contents($log_file, $json);
?&gt;</code></pre>

<h2>But wait, surely there are some security issues here?</h2>

<p>This entire concept revolves around sending data through the Internet to a server: there are a few security issues to be aware of here.</p>

<p>The first is the security of the data in motion. During the communication with the server, could the data be intercepted by a third party? Unless you're connecting to the server over SSL, the answer is "yes". Whether this is an issue depends on whether or not you're sending sensitive or identifiable information; if you are, it's pretty much inexcusable not to send it over SSL. For most people, though, this is largely unnecessary; you're only likely to be sending anonymous data like error messages and browser versions, data that's no more sensitive than the sort of data sent in every request.</p>

<p>The second is the security of the data at rest. Think about where you're storing your logs on the server; are they accessible from the Web? They almost certainly shouldn't be; you should take care either to store the log files in a directory that's outside your web-accessible one, or at the very least to deny access to them via your server's configuration. The former solution might mean that, if your web files were in the following directory:</p>

<pre><code>/var/www/vhosts/example.com/httpdocs/</code></pre>

<p>…you might store your log files in:</p>

<pre><code>/var/www/vhosts/example.com/logs/</code></pre>

<p>By doing this, malicious users can't navigate to your logs directory and read the files.</p>

<p>If this isn't possible — some web hosts, particularly on shared servers, might restrict you from writing to certain directories — then the next best thing is simply to restrict access to the files. If your log files were all text files in a directory called <code>/logs</code>, then you'd want to restrict access to <code>*.txt</code> in the <code>/logs</code> directory. If your web server is running Apache, you can achieve this by creating a file called <code>.htaccess</code> in your <code>/logs</code> directory that contains the following text:</p>

<pre><code>RewriteEngine On
RewriteRule \.txt$ - [F,L]</code></pre>

<p>Another concern is the reliability of the information you're receiving; if a malicious user sees the requests being logged, they might want to add their own malicious or humorous messages to the logs. There's very little you can do about this; ultimately, you have to trust the client as a source of the log information. However, in your server-side code you can pursue various strategies — only allowing a certain amount of requests from an IP in a certain period, for example — that will help mitigate your problems.</p>

<p>Another potential solution would be to make use of <abbr title="Cross-Origin Resource Sharing">CORS</abbr>. You should find out more about what CORS is, but briefly (and in layman's terms): it's a way of only allowing requests to come from specified domains. This will make sure that only your site can communicate with your back-end code.</p>

<p>To make use of CORS, we first need to make sure that the server is behaving correctly. It needs to send the following header:</p>

<pre><code>Access-Control-Allow-Origin: http://example.com</code></pre>

<p>If you're using PHP, you can accomplish this by calling the following code before any of your other output:</p>

<pre><code>&lt;?php header('Access-Control-Allow-Origin: http://example.com'); ?&gt;</code></pre>

<p>Of course, specific implementations vary and it may well be significantly more complicated than this.</p>

<p>The second thing we need to do is to make sure that we're making our AJAX request from the frontend in a CORS-compatible way. To do this, we need to make sure it's sent using <code>XMLHTTPRequest</code> 2, or <code>XDomainRequest</code> for <abbr title="Internet Explorer">IE</abbr>.</p>

<p>Detection for and usage of this is baked in to jQuery from version 1.5.1 onwards. Should you need (or want) to do this without jQuery, you can use this handy <a href="http://www.nczonline.net/blog/about/">XMLHTTPRequest2 wrapper function</a> courtesy of Nicholas Zakas:</p>

<pre><code>function createCORSRequest(method, url){
		var xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr){
				xhr.open(method, url, true);
		} else if (typeof XDomainRequest != "undefined"){
				xhr = new XDomainRequest();
				xhr.open(method, url);
		} else {
				xhr = null;
		}
		return xhr;
}

var request = createCORSRequest("get", "http://www.example.com/foo");
if (request){
		request.onload = function(){
				//do something with request.responseText
		};
		request.send();
}</code></pre>

<p>To find out more, I highly recommend giving <a href="http://dev.opera.com/articles/view/dom-access-control-using-cross-origin-resource-sharing/">DOM access control using cross-origin resource sharing</a> by Tiffany Brown a good read.</p>

<h2>What about the privacy of the user?</h2>

<p>Generally, this isn't much of a concern. Error messages don't contain any information that could identify a particular user; even if you log more information, such as screen resolution or browser version, such data would be used anonymously and in aggregate. It's no more data — and in reality, far less — than Google Analytics routinely collects, and is little more than is stored in your average web server log file. So, while this might be something that you want to mention in your site's privacy policy, unless you're storing personally identifiable information you shouldn't run into issues with data protection legislation and shouldn't raise the heckles of even the most privacy-conscious of your users. Your mileage (and the laws of your jurisdiction) may vary, of course; you may have to make considerations for your site's audience or your local laws.</p>

<h2>Making use of all this goodness</h2>

<p>So hopefully by now, you can see how useful this is and you might be asking yourself how to make use of it all. Luckily for you, there's a jQuery plugin called <a href="https://github.com/remybach/jQuery.clientSideLogging">clientSideLogging</a> (disclaimer: this plugin is written and maintained by both Rob and R&eacute;my).</p>

<p>It's worth having a look through the README and the source code before you use it. We've commented the code pretty well (or so we think at least), but just to give you a quick overview it has the following features:</p>

<ul>
<li>Captures native errors using <code>window.onerror</code>.</li>
<li>Captures the following <code>console.*</code> methods: <code>error</code>, <code>info</code>, and <code>log</code>.</li>
<li>Provides 3 wrapper functions in case you don't want to hijack the <code>console.*</code> methods: <code>$.error()</code>, <code>$.info()</code>, and <code>$.log()</code>.</li>
<li>Allows you to choose which level of messages to log: 1 = only error, 2 = error &amp; log, 3 = error, log &amp; info. This means you can ramp up the amount of logging at any time without having to drop in more logging code.</li>
<li>Passes through the data as a serialized <abbr title="JavaScript Object Notation">JSON</abbr> array.</li>
<li>Allows you to specify where each of the three methods logs to as well as the query var it sends the data through with.</li>
<li>Includes a sample logging script (written in PHP) that will handle storing and viewing the logs.</li>
<li>Colour coding, with facilities to filter the list of logs.</li>
<li>Collation of like errors so you can see at a glance what the most common errors are.</li>
</ul>

<h2>Conclusion</h2>

<p>The benefits of sending client side error/info/log messages to the server to be stored are clearly quite significant. The great news is that as long as you do your best to make sure things are secure and you provide fallbacks for older browsers, you can start using this right away!</p>
