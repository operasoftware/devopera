Title: Introduction to User JavaScript
----
Date: 2008-10-08 15:45:36
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
<p>
User JavaScript is an Opera feature allowing you to apply custom JavaScript to any pages you surf, giving you extra control over how sites are presented or loaded. There are many different reasons for you to apply custom JavaScript to web pages, including:</p>

<ol>
<li>
Preventing certain scripts from running: you could  write a User JavaScript to stop advertisement popups.
</li>
<li>
Fixing broken sites: Sometimes pages do not render correctly, and you could use User JavaScript to fix broken behavior on these sites.
</li>
<li>
Introducing extra scripts to the site or browser: you could  load a script to check what kind of user agent your browser is spoofing. 
</li>
</ol>

<p>In this article I will show you how to enable User JavaScript, how to configure Opera to run scripts only on certain domains, and how to create and use a simple example.</p>

<p class="note">Note that there are a lot more <a href="http://userjs.org/">User JavaScript resources available at userjs.org</a>, including lots of free scripts.</p>

<h2>Enabling User JavaScript</h2>

<p>The first thing to do is to check if User JavaScript is enabled in your installation of Opera. To do this, type “opera:about ” in the address bar and press return. If User JavaScript is enabled, the “User JavaScript files” path will be shown in the “Paths” section. If it is not, you can enable User JavaScript (and create a folder for your scripts to reside in) by selecting the following:</p>

<ul>
<li>On Mac, select “Opera &gt; Preferences” from the menus, then select the “Advanced” tab, and click on the “Content” option from the list of the left-hand side. Now click the “JavaScript options” button, and enter a path to where you want to store your User JavaScript files in the “User JavaScript files” input field. OK out of all the dialog boxes and check “opera:about ” again—you should see your “User JavaScript files” path in the “Paths” section.</li>
<li>On Windows and Linux, the instructions are exactly the same, except that the “Preferences” option is found under the “Tools” menu, not the “Opera” menu.</li>
</ul>

<h2>Creating and executing custom scripts</h2>

<p>Now you have User JavaScript enabled, it is time to look at how to actually use it. Bear in mind that all your User JavaScripts can sit in a single or multiple script files inside the folder you specified above. When a page is loaded into Opera and you have User JavaScript enabled, the script is automatically imported into and run against the page. You need to specify when different parts of the script are executed using <strong>event listeners</strong>, and which sites they are run against (if you only want certain parts to run against certain domains) using <strong>domain detection</strong>. Let’s look at both of these subjects now.</p>


<h3>Event Listeners</h3>

<p>An event listener is used to specify exactly when a function should be executed, in the course of the page being loaded. The basic event listener syntax is as follows:</p>

<pre><code>document.addEventListener(&#39;event&#39;, &#39;function&#39;, false);</code></pre>

<p>The arguments are:</p>

<ul>
<li><code>event</code>: This is what event should trigger the running of the function.</li>
<li><code>function</code>: This is the name of your function.</li>
<li><code>false</code>: This is actually a boolean, which can have the value <code>true</code> or <code>false</code>. This states whether the event handler should be executed <a href="http://www.quirksmode.org/js/events_order.html">in the capturing or the bubbling phase</a>.
If you’re not certain what these mean, and which one you should use, stick to a value of <code>false</code> (bubbling).</li>
</ul>

<p>The two most common events that you’ll want to fire functions against are <code>load</code>, which fires the function after the whole page has finished loading, and <code>DOMContentLoaded</code>, which specifies to run the function after the DOM has loaded with. There are <a href="http://www.opera.com/support/tutorials/userjs/specs/#evlistener">other event stages to run functions against</a> too—learn about these at the opera.com tutorials.</p>


<h3>Domain Detection</h3>

<p>By default, User JavaScript will be executed against all pages you visit in Opera. You will often find however that you want to execute certain functions only against specific domains—this can be done using domain detection.</p>

<p>There are a couple of ways to perform domain detection. The first one is to compare a string using <code>location.hostname.indexOf</code> in an <code>if</code> statement, like so:</p>

<pre><code>if (location.hostname.indexOf(&#39;opera.com&#39;) != -1)

{
  ...do stuff...
}
</code></pre>

<p>If the string “opera.com” appears in the URL, a match is detected, and the code inside the braces is run. This detects domains such as the following:</p>

<pre>www.opera.com/dir/subdir/
www.<em>subdomain</em>.opera.com</pre>

<p>However it will also detect this:</p>

<pre><code>www.anythingbeforeopera.com</code></pre>

<p>A more precise method of domain detection is to use a comparison involving <code>location.hostname</code> to match just the domain you want (eg below it is <code>opera.com</code>):</p> 

<pre><code>if( location.hostname == &#39;opera.com&#39; )

{
  ...do stuff...
}</code></pre>

<h2>Example</h2>
<p>This section will show both the above techniques in action, as well as teaching you how to create and run a simple User JavaScript. The example you will build is a User JavaScript that creates a bar at the bottom of the browser displaying the browser name, version, cookies and user agent. The basic logic flow of the script is thus:</p>

<ol>
<li>The script loads only if the user is accessing the www.opera.com web site.</li>
<li>The function is fired when the page has completely finished loading—this is triggered by an event listener that listens for the <code>load</code> event.</li>
<li>A <code>div</code> element is created using <code>document.createElement</code>—this element will act as the container for the tool bar.</li>
<li>In the <code>div</code> element, child nodes are created using DOM calls. These nodes will load JavaScript&#39;s <code>navigator</code> object to find out properties such as user agent, browser name, browser version and cookies.
</li>
</ol>

<p>To make use of this User JavaScript, simply copy and paste the code below into a plain text editor, and save it with a suitable name with a <code>.js</code> extension.</p>

<pre><code>if( location.hostname == &#39;www.opera.com&#39; )
{
  document.addEventListener (
    &#39;load&#39;,
    function (e) 
    {
      if( !document.body ) {
       return;
      }
    	
      var mydiv = document.createElement(&#39;div&#39;);
      mydiv.style.position = &#39;fixed&#39;;
      mydiv.style.bottom = &#39;0px&#39;;
      mydiv.style.border = &#39;1px solid #000&#39;;
      mydiv.style.backgroundColor = &#39;#fff&#39;;
      mydiv.style.color = &#39;#000&#39;;
      mydiv.appendChild(document.createTextNode(&quot;Browser: &quot; + navigator.appName))
      mydiv.appendChild(document.createTextNode(&quot;; Ver: &quot; + navigator.appVersion))
      mydiv.appendChild(document.createTextNode(&quot;; Cookies: &quot; + navigator.cookieEnabled))
      mydiv.appendChild(document.createTextNode(&quot;; User Agent: &quot; + navigator.userAgent))
    	
      document.body.appendChild(mydiv);
    },
    false
  );
}</code></pre>

<p>When you have done this, try it out by <a href="http://www.opera.com">navigating to www.opera.com</a>—you should see a browser information bar at the bottom of the web page, as seen in Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/173-introduction-to-user-javascript/userjsbrowserinfo.gif" alt="browser information bar" />
<p class="comment">Figure 1: The browser information bar in action.</p>

<h2>Summary</h2>

<p>This article introduces User JavaScript and what it can do. Employing User JavaScript, you can employ greater control over web pages, fixing erronous behavior and improving your personal user experience. For more details, check out the <a href="http://www.opera.com/support/tutorials/userjs/">Opera documentation on User JavaScript</a>.</p>
    
