Title: Mobile Ajax And The Frost Ajax Library
----
Date: 2007-12-05 06:34:07
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

<div class="note">
 <h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">14th December 2011: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. The official Frost page (http://frostlib.org) no longer seems functional.</p>
 </div>

<h2>Introduction</h2>

<p>
	This article is a short introduction to the tricky topic of creating Ajax-powered web sites and applications on mobile and other alternative devices. 
	Below I will discuss how Mobile Ajax is different from desktop Ajax, what its special problems and limitations are and the possible solutions that exist. 
	One solution presented is the Frost Ajax Library, a useful tool in developing Ajax-powered services for mobile devices - an example of using Frost is given.
	
	This article is for web developers who want to create Ajax sites that work across alternative browsing devices, not just the desktop.
</p>

<h3>Assumed knowledge</h3>

<p>
	If you&#39;ve mastered the basics of HTML, JavaScript and the XMLHttpRequest object, you&#39;ll understand this article fine. 
	Further helpful knowledge might be DOM scripting, CSS and some experience with Ajax libraries and/or frameworks (such as prototype, jQuery, dojo, YUI etc,) but these are not mandatory.
</p>


<h2>Some terms and definitions</h2>

<p>
	<em>Mobile Ajax</em> has become a buzzword of its own - I&#39;m not sure if I like it or not. On one hand I like that there is a term to describe what we&#39;re talking about when referring to the area of creating Ajax-enhanced sites, but on the other hand it&#39;s not a clearly defined term and everybody has their own definition. Maybe it&#39;s time for a Wikipedia entry ... anybody? </p>
	<p>
	I really don&#39;t claim to provide definitive definitions for anything, it&#39;s legitimate for everybody to have his or her own definition, however I want to define the following terms in order to level the playing field for the rest of this article:
</p>
<ul>
	<li><strong>Mobile Web:</strong> There is a huge discussion going on at the moment as to what this is. Personally I think we should be referring to &quot;One Web&quot;<a href="#ref_1">[1]</a>, but there are many different parts to this one web, and some parts of it are definitely aimed at mobile phones, and other alternative devices. That is what I would refer to as the Mobile Web and it encompasses different standards (e.g. XHTML-MP) and of course different web browsers, usually ones with constraints on standards support and bandwidth. Here I will therefore distinguish between mobile and desktop environments - for the web as well as specifically for Ajax.</li>
	<li><strong>Ajax:</strong> A technology based on JavaScript/ECMAScript, running in a web browser and providing a means of asynchronous communication between the client and a web server (you can choose to reload small chunks of the currrent web page without the need for a complete page refresh.) Ajax is a compound technology that requires several things, such as different methods to retrieve, manipulate and display data.</li>
	<li><strong>Mobile Ajax:</strong> This is pretty straightforward now, since it&#39;s combining the two above. Mobile Ajax is exactly the same technology as in desktop browsers. However there are some important differences: different browsers with different capabilities, different use cases due to limited resources on the devices as well as on the network and finally other, usually limited interaction possibilities between user and device.</li>
</ul>

<p>
	Ajax in the mobile space can offer many improvements, because it can help to overcome problems like narrow bandwidths and usability issues. For example can it help load content faster by only reloading the necessary parts of a page, and also if you imagine a page scrolled down by several screen heights, retrieving info and showing it in this place does not require the user to scroll down to the end of the page again, which he would have to if the action required a page refresh.
</p>

<p>
	Mobile Ajax has, since pre-2006<a href="#ref_2">[2]</a>, created a lot of hype<a href="#ref_3">[3]</a> and more and more people are getting interested in it. This is shown by events like the W3C/OpenAjax Alliance-organized workshop<a href="#ref_4">[4]</a>, the OpenAjax Alliance Mobile Ajax Task-force<a href="#ref_5">[5]</a>, numerous conference talks and at least as many blog posts on the topic.
</p>

<p>
	Leaving all the hype that often surrounds Mobile Ajax aside, it comes down to being one of many tools that can improve the user experience for mobile web users, despite it&#39;s limitations. Mobile Ajax is very fragmented due to many different browsers with many different capabilities and different JavaScript implementations. Therefore comparisons to other mobile technologies are usually heavily skewed and are close to comparing apples with oranges, especially when it comes to developing mobile applications.
</p>

<p>
	The term Mobile Ajax is often also used to refer to technologies that consist of an installable program, usually based on Java/J2ME that provides a runtime to execute JavaScript and render HTML (or similar dialects). These technologies are usually used to implement widget engines and to enable developers to employ web standards (or similar markup) to create applications that run on the device. However they don&#39;t refer to themselves as web browsers, but as frameworks or platforms. Mojax<a href="#ref_6">[6]</a> and the now deprecated Opera Platform<a href="#ref_7">[7]</a> are examples of this.</p>
	

<h2>Browser Constraints And Other Problems</h2>

<p>
	Talking about constrained browsers, let&#39;s look at some of them. The below list contains all the important browsers that are able to provide some kind of web access and that are not available on the desktop. WML browsers are really out of focus, so we&#39;re looking at anything that can do XHTML/WAP 2.0<a href="#ref_8">[8]</a>:
</p>
<ul>
	<li>Pocket IE/IE Mobile (WM 2003, 5.0, 6.0)</li>
	<li>OpenWave (&gt;= Mercury)</li>
	<li>Access Netfront (&gt;= 3.4)</li>
	<li>Nokia S60</li>
	<li>Minimo (Mozilla)</li>
	<li>Opera Mini and similar (proxy-based)</li>
</ul>

<p>
	All these browsers are more or less capable of doing some Ajax, or if not, the next versions promise support for it. When I say &quot;some&quot; Ajax this means that the browser and its JavaScript engine are generally able to execute asynchronous calls to a server. However, since Ajax is a compound technology the available tools in the various different JavaScript implementations on different browsers can be totally different, usually because of a lack of standards support and DOM functionality.</p>

<p>Opera Mobile is one of the true mobile browsers, as it doesn&#39;t have many constraints/limitations and provides a very capable JavaScript implementation.</p>

<p>
	The basic things any browser that wants to do Ajax need to be capable of are as follows:
</p>

<ol>
	<li>Sending/retrieving data asynchronously (through a XMLHttpRequest object or ActiveX)</li>
	<li>Doing something once the data arrives back at the client (usually a callback function call)</li>
	<li>Displaying something in the client based on the data retrieved or just the data itself</li>
</ol>

<p>
Number 3 would involve using a collection of DOM functions to manipulate the document. Constrained browsers often lack sufficient DOM implementations and usually only a subset of the DOM specification is implemented. Another possibility is to use the non-standard but very well supported innerHTML, which can also be used to change pieces of content on a document in the client. In the mobile space innerHTML is often the only existing alternative to true DOM manipulation. Now for innerHTML to make really sense, usually you will want to use another DOM function along with it - <code>getElementById()</code>. Luckily this element of DOM functionality is pretty well supported - from experience, I have developed the following general rule of thumb: if the browser implements XHR then <code>getElementById()</code> should be supported as well and can therefore be used.
</p>

<p>
I also want to mention one of the major problems when dealing not only with Mobile Ajax, but the mobile web in general: network latency. Wireless networks can have huge latency times, often one or more seconds. This means that if you request a script or page on the server, it can take several seconds before the actual download of data happens. This is really annoying and a real problem for Mobile Ajax in general. Using Ajax however you overcome some other problems, as mentioned earlier (cutting down on page reloads to save bandwidth and browser rendering time and usability in long pages.) Fortunately all of these issues are already going away as both networks and devices become faster.
</p>

<h2>Running Ajax In Constrained Browsers</h2>

<p>
	Let&#39;s get into some real examples - I&#39;ll start with a basic Ajax request. The task here is to call a server-side script once the user clicks on a link - the data returned by that script should be displayed below the link. Here&#39;s the markup for that:
</p>

<pre><code>&lt;a href=&quot;no_ajax.html&quot; onclick=&quot;return !getData();&quot;&gt;request data&lt;/a&gt;
&lt;div id=&quot;datacontainer&quot;&gt;data should go here&lt;/div&gt;</code></pre>

<p>
	This markup consists of a link and a container for the data to populate. The link&#39;s <code>onclick</code> attribute contains a bit of JavaScript, namely a function call that provides a return value which is negated. This return value is important for graceful degradation - the user gets to see the content the link points to whether Ajax is supported or not; if it is, then the content is shown on the same page, meaning a better user experience:
</p>

<ul>
	<li>If <code>getData()</code> returns <code>true</code> (meaning it was able to do whatever it does) then the link&#39;s <code>onclick</code> returns <code>false</code> (since the return value of <code>getData()</code> is negated) and the link-click is intercepted, causing the browser not to follow the <code>href</code> attribute given in the link. </li>
	<li>If <code>getData()</code> returns <code>false</code> (eg because a necessary JavaScript method was not found) then the return value &quot;true&quot; of the <code>onclick</code> attribute causes the link to be followed as if there had never been an <code>onclick</code> attribute. </li>
</ul>

<p>
	This technique and some inspirations for the following JavaScript code are taken from an excellent book: &quot;Bulletproof Ajax&quot; by Jeremy Keith<a href="#ref_9">[9]</a>. The <code>getData()</code> method looks like this:
</p>

<pre><code>function getData() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject(&quot;Msxml2.XMLHTTP&quot;);
    } catch(e) {
      try {
        xhr = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
      } catch(e) {
        xhr = false;
      }
    }
  }
  if(xhr) {
    xhr.onreadystatechange = function() {
      parseResponse(xhr);
    };
    xhr.open(&quot;GET&quot;, &quot;somescript.php&quot;, true);
    xhr.send(null);
    document.getElementById(&quot;datacontainer&quot;).innerHTML = &quot;...loading...&quot;;
    return true;
  } else {
    return false;
  }
}</code></pre>

<p>As you can see, <code>getData()</code> calls <code>parseResponse()</code> (that&#39;s the callback function) whenever the <code>onreadystatechange</code> property of the <code>xhr</code> object changes. <code>getData()</code> always returns either <code>true</code> or <code>false</code>, so the link will either get executed, or not. <code>parseResponse()</code> then puts the returned data into the container using innerHTML. The source for that looks like this:</p>

<pre><code>function parseResponse(request) {
  if (request.readyState == 4) {
    if (request.status == 200 || request.status == 304) {
      var data = request.responseText;
      document.getElementById(&quot;datacontainer&quot;).innerHTML = data;
    }
  }
}</code></pre>

<p>
	This is very basic stuff - probably one of the most basic ways to do some Ajax; the good thing here though is that it will work on pretty much all devices that can do Ajax, even the limited ones on mobile phones. The minimum requirements are XHR/ActiveX, <code>getElementById()</code> and innerHTML - and that&#39;s exactly what the core of the Frost library needs too. This is what we&#39;ll discuss next.
</p>

<h2>Using Frost To Do The Same</h2>

<p>
	The Frost Ajax library is a tool for Ajax development on constrained browsers, such as those on mobile phones or gaming consoles.
	Frost provides you with JavaScript functions that can be used in mobile web applications to do Ajax and related things.
	The underlying approach is to be very minimalist in functionality and file size. 
	Frost aims to output only the JavaScript code that can actually be used by the browser running the script, which means some server-side browser detection is involved. The server-side parts of Frost are currently available in PHP, but some people have already expressed interest in porting them to Java and Ruby.
</p>
<p>
	The way Frost basically works is pretty straightforward: 
</p>
	<ul>
		<li>You include Frost in your page, usually using a <code>script</code> tag&#39;s <code>src</code> attribute (you point to a server-side script)</li>
		<li>You add some Frost function calls here and there in your markup or scripts (cf. example below)</li>
		<li>When the page is requested by a browser, Frost tries to detect the browser using it&#39;s user agent string</li>
		<li>Frost outputs JavaScript code depending on the browser&#39;s capabilities</li>
		<li>If a browser does not have the necessary capabilities to run the Ajax, the Frost functions return false, so you can execute fallback functions</li>
		<li>if Frost doesn&#39;t know a browser and it&#39;s capabilities, it outputs a universal version of the JavaScript, one that most likely will work</li>
	</ul>
	<p>As a result Frost outputs very little code to known browsers and more in depth but more robust code to unknown ones.</p>
    
<p>
	Frost consists of a core library that will be extended by contributors in the future; you can configure which of the contributions should be contained in the library at inclusion time .
	Since Frost contains a server-side component you can either include an external script directly from the Frost site or you can install the whole thing on your own server and handle browser-detection etc. yourself - in this case you can also include the JavaScript output of the library directly in the XHTML document, which can help to overcome latency issues.
</p>
<p>
	Frost is still under development and not officially released yet. However you can play around with a pre-release version available at http://frostlib.org.
	Your feedback is always appreciated. 
</p>

<p>Getting back to our simple Ajax example from above, if you wanted to use the Frost Ajax Library to do the same thing, things would look quite similar:</p>

<pre><code>&lt;a href=&quot;no_ajax.html&quot; onclick=&quot;return !f(&#39;urltoid&#39;,[&#39;somescript.php&#39;, &#39;datacontainer2&#39;]);&quot;&gt;request data&lt;/a&gt;
&lt;div id=&quot;datacontainer&quot;&gt;data should go here&lt;/div&gt;</code></pre>

<p>
	That&#39;s a tad more code than before, but it&#39;s also more universal. Basically the <code>f()</code> function is the only public function Frost provides and it&#39;s a wrapper for all the functions in Frost. The parameters of this function are the Frost function name, here: <code>urltoid</code>, and an array of arguments for this function, in this case the <code>id</code> of the container the data should be displayed in. <code>f()</code> always returns either <code>true</code> or <code>false</code>, so in case something goes wrong, the browser can always expose the link&#39;s <code>href</code> instead.
</p>

<p>
	You can check out how this works in reality in your own mobile browser by pointing it to http://frostlib.org/demo/ - this page contains both versions of the example and also shows the debug output of Frost. The page works with fully-functional mobile browsers like Opera Mobile, and also constrained mobile browsers like Opera Mini 4, IE and Minimo - all tested on Windows Mobile 5. it also works on the PlayStation 3 and Wii web browsers. 
</p>
<p>
	Frost&#39;s debug output shows you everything that&#39;s going on within the library. This should help developers in their development efforts, because especially on mobile devices there&#39;s almost no way to debug JavaScript code, except by <code>alert()</code>ing everything, which quickly gets very tedious. Debug can of course easily be disabled in production environments, in this case the server-side component in Frost strips out all debug-related code from the JavaScript that is outputted.
</p>

<p>If you look into the source of the example page, you&#39;ll see that Frost is included there as an external script like this:</p>

	<pre><code>&lt;script type=&quot;text/javascript&quot; src=&quot;frost/frost.php?debug=1&quot;&gt;&lt;/script&gt;</code></pre>
	
<p>As you can see, the <code>src</code> attribute points to a PHP script, <code>frost.php</code>, that gets passed an argument: <code>debug=1</code> - this turns debugging output on. On the server the PHP script referenced here uses a JavaScript file as its input and strips out anything the browser cannot deal with. If you&#39;re curious how the underlying JavaScript code on the server looks like, check out http://frostlib.org/demo/frost/frost.js - that&#39;s the complete source of the JavaScript part of the library. </p>

<p>Aside from providing a universal set of functions for as many browsers as possible, one major goal of Frost is to provide you with a small file size to save on loading times. However, to achieve the same functionality as the simple Ajax demo, Frost actually needs more space than the 0.7kB above - that&#39;s simply because Frost provides a lot of other functionality. The full Frost source is around 1.9kB...still really small for a JavaScript library. 
</p>

<h2>The advantages of using Frost</h2>

<p>
	So why use Frost when I just can do it myself like shown above? There are some good reasons:
</p>

<ul>
	<li><strong>You don&#39;t want to keep rewriting the same code over and over again</strong> - that&#39;s no big deal in this case, but what if you need more functionality, and what if you don&#39;t know what browser you&#39;re serving the page to?</li>
	<li><strong>You want to cut down on irrelevant code for each browser</strong> - e.g. you can check if the XHR object or the ActiveX exists and then serve it just the appropriate content it can use</li>
	<li><strong>You want debugging support</strong> - it is useful to know what&#39;s going on in the background, and constant <code>alert()</code>s can be  annoying, time consuming, and affect results</li>
	<li><strong>You want to handle offline states</strong> - guess what happens when you load the page, then go offline and then click the link? It depends on the browser and the device. The best thing that could happen is for the connection to be restored automatically, but that doesn&#39;t happen a lot. What usually happens is that the check for <code>xhr.onreadystatechange</code>  waits forever because the state simply doesn&#39;t change. Too bad we already returned <code>true</code> in <code>getData()</code> when the link was not executed - it means you&#39;re stuck and nothing happens. Frost handles callbacks a bit differently and can therefore have time-outs for XHR requests, so in case nothing happens for a while, the request will time-out and Frost can then execute any JavaScript function you specify, eg show a message informing the user that the request failed, and then return to the previoud page.</li>
	<li><strong>You want to show something is going on in the background</strong> - typically some kind of spinning animation is shown while the Ajax request runs in the background, so the user knows something is going on. Frost can swap a predefined image on the page with a loading animation whenever an XHR request is happening; a text-based animation is also being worked on at this moment.</li>
</ul>

<p>
	The current Frost core library weights in at 1.9kB and offers all of these points except for debugging. If you enable debugging, which is only necessary for development environments, you&#39;re looking at 3.2kB. 
</p>

<p>
	So why is Frost still not released? As mentioned before, Frost tries to minimize the JavaScript file size by outputting only the JavaScript code that can actually be used by the browser running the script, so some kind of browser detection and a database of browser-related capabilities is necessary. 
	That&#39;s one of the reasons why there&#39;s not a final release of Frost available yet - we are still working on the testing setup that will test a browser&#39;s capabilities and populate the database. It is planned to export this data to and also use data from projects like WURFL<a href="#ref_10">[10]</a> or DDWG<a href="#ref_11">[11]</a>. The brand new Frost site at http://frostlib.org and the evolving community around it will help to resolve those issues quickly. By the end of the year we should have a working release. For now, please check out the pre-release version on the site! Also you might want to join the just recently set up mailing list covering Ajax in WURFL.<a href="#ref_12">[12]</a>
</p>

<h2>Summary</h2>

<p>
Mobile Ajax is a nice thing to have, it will become much more important with the further emergence of more capable phones. On the mobile the same best practices apply as on the desktop for using Ajax - you should use it as an enhancement, but not force your users to rely on it - let it degrade gracefully. Content adaptation has become a common technology in mobile development and deployment, so why not do the same for Ajax?</p> 

<p>
	If I would have to give a forecast of the future I would say we&#39;ll see Mobile Ajax evolve in many ways, as browsers become more capable and technological problems in dealing with Ajax go away. Soon there will be ways to access the device API, such as GPS or applications through JavaScript objects. Mobile widgets and offline handling will become widespread too. Ajax will be coupled with other technologies like SVG for example (imagine dynamic SVG graphics!) 
</p>

<p>
	On our blog at PavingWays<a href="#ref_14">[13]</a>, you can find further information about Mobile Ajax. People at dev.mobi<a href="#ref_15">[14]</a> have also written some stuff on Mobile Ajax. Finally, an article by Chris Mills here on dev.opera.com<a href="#ref_16">[15]</a> also covers Ajax capabilities of Opera Mini and explains pretty well why Ajax works, but not asynchronously.
</p>

<h2>References</h2>
<p>
	[1] <a id="ref_1" href="http://www.w3.org/2006/Talks/0404-sb-ctia-mwi/Overview.html">W3C One Web presentation</a><br />
	[2] <a id="ref_2" href="http://blogs.msdn.com/iemobile/archive/2005/11/15/493200.aspx">Ajax on IE Mobile in 2005</a><br />
	[3] <a id="ref_3" href="http://opengardensblog.futuretext.com/archives/2006/03/mobile_web_20_a_2.html">Ajit Jaokar on Mobile Ajax</a><br />
	[4] <a id="ref_4" href="http://www.w3.org/2007/06/mobile-ajax/">Mobile Ajax Workshop 2007</a><br />
	[5] <a id="ref_5" href="http://www.openajax.org/member/wiki/Mobile_TF">Open Ajax Alliance Mobile Ajax Taskforce</a><br />
	[6] <a id="ref_6" href="http://mojax.mfoundry.com/">Mojax, Java based</a><br />
	[7] <a id="ref_7" href="http://www.opera.com/pressreleases/en/2005/11/15/">Opera Platform</a><br />
	[8] <a id="ref_8" href="http://en.wikipedia.org/wiki/Wireless_Application_Protocol#WAP_2.0">WAP 2.0 definition</a><br />
	[9] <a id="ref_9" href="http://bulletproofajax.com/">&quot;Bulletproof Ajax&quot; by Jeremy Keith</a><br />
	[10] <a id="ref_10" href="http://wurfl.sourceforge.net/">WURFL project</a><br />
	[11] <a id="ref_11" href="http://www.w3.org/2005/MWI/DDWG/">DDWG at W3C</a><br />
	[12] <a id="ref_12" href="http://tech.groups.yahoo.com/group/wurflajax/">Ajax in WURFL (Yahoo! Group)</a><br />
	[13] <a id="ref_14" href="http://www.pavingways.com/mobile-ajax">Mobile Ajax Intro at PavingWays</a><br />
	[14] <a id="ref_15" href="http://dev.mobi/node/557">Mobile Ajax Intro at dev.mobi</a><br />
	[15] <a id="ref_16" href="http://dev.opera.com/articles/view/javascript-support-in-opera-mini-4/">Chris Mills on Opera Mini and Ajax</a>
</p>a href=
