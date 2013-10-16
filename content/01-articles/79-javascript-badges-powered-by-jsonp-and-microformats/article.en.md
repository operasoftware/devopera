Title: Javascript badges powered by JSONP and microformats
----
Date: 2008-03-08 18:20:33
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


	<p>With the number of social networking sites and other online applications increasing daily, I&#39;m starting to get bored of entering and maintaining the same information on each new site I join, never mind my own personal sites. I&#39;m sure some of you are feeling the same way too! Efforts like the <a href="http://dataportability.org/">DataPortability</a> working group might be the solution in the long term; they are working on bringing together various existing technologies to provide a clear design for personal data portability between systems. But not all the pieces are in place just yet.

	<p>I&#39;ve therefore started working on a solution which could make your lives easier in this respect. Using a bit of JavaScript, a nifty way of making remote web service calls (JSONP) and a few microformats, I can display information from one service somewhere else, leaving me with only one place to update it. In this article you&#39;re going to create a JavaScript badge that can be added to any site and which will display relationship data from a service which exposes it (<a href="http://twitter.com">Twitter</a>, in this particular example.)</p>


	<h2>Microformats</h2>


	<p><a href="http://microformats.org/">Microformats</a> are a set of simple, open data formats built upon existing and widely adopted standards. By adding classes and other attributes to your markup you can add semantics that allow meaningful data to be extracted from the data. Lots of sites are starting to make use of microformats. <a href="http://twitter.com">Twitter</a>, for example, uses the <acronym title="XHTML Friends Network">XFN</acronym> (XHTML Friends Network) microformat to markup the list of followers on its profile pages. And <a href="http://upcoming.org">Upcoming</a> uses the <a href="http://microformats.org/wiki/hcard">hCard</a> and <a href="http://microformats.org/wiki/hcalendar">hCalendar</a> formats to allow for easy export of the event data into calendars and address books.</p>

	<h3>XFN</h3>


	<p>The <a href="http://gmpg.org/xfn/"><acronym title="XHTML Friends Network">XFN</acronym></a> microformat is a simple way to represent human relationships using hyperlinks. By using a set of agreed values for the <code>rel</code> attribute on a hyperlink you can indicate your relationship with others, when linking to their web sites. For instance, you can specify that the destination of a link belongs to you using <code>rel=&quot;me&quot;</code>, or specify that someone is a friend and a colleague using <code>rel=&quot;friend met colleague&quot;</code> on a link to their site. For a much more thorough analysis of XFN, read Brian Suda&#39;s <a href="http://dev.opera.com/articles/view/xfn-encoding-extraction-and-visualizat/">XFN encoding, extraction, and visualizations</a> article.</p>


	<h3>Twitter</h3>


	<p>Twitter uses a few microformats in the markup for the list of friends shown on each profile page, as shown below.</p>


<pre><code>&lt;span class=&quot;vcard&quot;&gt;
  &lt;a href=&quot;http://twitter.com/BenWard&quot; class=&quot;url&quot; rel=&quot;contact&quot; title=&quot;Ben Ward&quot;&gt;
  &lt;img alt=&quot;Ben Ward&quot; class=&quot;photo fn&quot; height=&quot;24&quot; id=&quot;profile-image&quot; src=&quot;...&quot; width=&quot;24&quot; /&gt;
  &lt;/a&gt;
&lt;/span&gt;</code></pre>

	<p>This snippet is from <a href="http://twitter.com/garethr">my Twitter profile page</a>. As well as marking <a href="http://ben-ward.co.uk">Ben Ward</a> as a contact of mine (via the XFN <code>rel=&quot;contact&quot;</code> attribute) it also indicates Ben is called Ben Ward and owns the web page at <a href="http://twitter.com/BenWard">twitter.com/BenWard</a>, using the <a href="http://microformats.org/wiki/hcard">hCard</a> microformat. You will be extracting this information from Twitter in the example below.</p>


	<h3>Parsing microformats</h3>


	<p>Parsing microformats can be a little complicated as they are purposely designed for people first and machines second. However you don&#8217;t have to do all the work yourself. In this example you&#8217;re going to be using the <a href="http://ufxtract.com/">ufXtract</a> microformats parser from <a href="http://www.glennjones.net/">Glenn Jones</a> to extract the structured data from the markup. ufXtract can discern hCard, XFN, hReview, hCalendar and a whole host of other microformats, and output the results in <acronym title="eXtensible Markup Language">XML</acronym>, plain text or <acronym title="Javascript Object Notation">JSON</acronym>.</p>


	<p>ufXtract can be used as a simple webservice over <acronym title="HyperText Tranfer Protocol">HTTP</acronym>. All you have to do is construct a valid <acronym title="Uniform Resource Location">URL</acronym> to pass the relevant arguments to the parser and it will return the results. For instance, the following <acronym title="Uniform Resource Location">URL</acronym> will parse my Twitter profile at <a href="http://twitter.com/garethr">twitter.com/garethr</a> for hCard data and return it as JSON:</p>


	<pre><code><a href="http://ufxtract.com/api/?url=http://twitter.com/garethr?format=hcard&amp;amp;output=json">http://ufxtract.com/api/?url=http://twitter.com/garethr?format=hcard&amp;output=json</a></code></pre>


	<h2>JSONP</h2>


	<p>A typical way of making a request to the server from JavaScript is to use the <code>XMLHTTPRequest</code> object, but this approach does not currently allow for cross-domain requests. If you controlled both the servers you could always build a proxy to proxy request through to a remote host, but what about third party sites? For this badge you want your site on one domain to talk to one on another so you need another solution.</p>


	<p>The solution is JSONP or <a href="http://bob.pythonmac.org/archives/2005/12/05/remote-json-jsonp/">Remote JSON</a>. The idea is based around the ability of JavaScript to add a new <code>script</code> element to the <code>head</code> of the document at any time and for that <code>script</code> element to point to a remote domain. The remote domain returns a chunk of <acronym title="Javascript Object Notation">JSON</acronym> wrapped in a function call so when the script content loads, a callback function is called with the <acronym title="Javascript Object Notation">JSON</acronym> response passed as a parameter. This approach relies on the third party service supporting the wrapping of the returned <acronym title="Javascript Object Notation">JSON</acronym> in a user specified function call, but luckily for us ufXtract supports JavaScript callbacks.</p>


	<h2>The Markup</h2>


	<p>Before you look at the script that will build the badge, I&#39;ll get you to add some markup into a fresh HTML page, which will be replaced by the list of friends. The only input the script needs is a <acronym title="Uniform Resource Location">URL</acronym> to search for microformats on. You&#8217;ll use an <code>id</code> to trigger the badge script. First of all, create a new <acronym title="HyperText Markup Language">HTML</acronym> document and add the following to it, then save it:</p>


<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; 
  &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
  &lt;title&gt;JSONP Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div id=&quot;ufbadge&quot;&gt;
  &lt;a href=&quot;http://twitter.com/garethr&quot;&gt;Gareth Rushgrove on twitter&lt;/a&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>

	<p>This markup also provides a reasonable fallback for those without JavaScript - a link to the same information.</p>

	<p>You don&#8217;t have to point the script at Twitter either. Any page containing <acronym title="XHTML Friends Network">XFN</acronym> data will work. For example, you could try:</p>


<pre><code>&lt;div id=&quot;ufbadge&quot;&gt;
&lt;a href=&quot;http://ben-ward.co.uk&quot;&gt;Ben Ward&lt;/a&gt;
&lt;/div&gt;</code></pre>

	<h2>The JavaScript</h2>


	<p>Now you have the markup in place you can get on and write the JavaScript. The basic workflow of the script is as follows:</p>

	<ol>
	<li>Find the element with an <code>id</code> of <em>ufbadge</em>.</li>
		<li>Read the <code>href</code> value of the containing link.</li>
		<li>Insert a <code>script</code> element into the <code>head</code> of the document - this loads the JSONP from ufXtract, passing the <code>href</code> value from above as part of the argument.</li>
		<li>When ufXtract calls back, parse the returned JSON and build an unordered list.</li>
		<li>When the end of the <acronym title="Javascript Object Notation">JSON</acronym> is reached, add it to the page as a list.</li>
	</ol>


	<p>The following script uses the <acronym title="Yahoo User Interface">YUI</acronym> (Yahoo User Interface) library to deal with loading the script after the <acronym title="Document Object Model">DOM</acronym> has loaded. Apart from that it&#8217;s pure JavaScript, so you could use this with your framework of choice by simply replacing the loading method. Include the <acronym title="Yahoo User Interface">YUI</acronym> event module in the head of the document you created above as follows:</p>


<pre><code>&lt;script type=&quot;text/javascript&quot; src=&quot;http://yui.yahooapis.com/2.4.1/build/yahoo/yahoo-min.js&quot; &gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;http://yui.yahooapis.com/2.4.1/build/event/event-min.js&quot; &gt;&lt;/script&gt;</code></pre>

	<h3>The Code</h3>


	<p>Let&#39;s get started with the actual JavaScript code. As stated above, the first thing you need to do is get hold of the badge element and its containing link. Best practices would dictate placing this code in an external script but for the moment I&#39;ll get you to add it to the <code>head</code> of the above document, to simplify the example. I&#39;ll just highlight the key parts of the code as we go but if you&#39;re following along with the example then the full script can be found at the end of the article. You can find a <a href="sample.html">working version of the example</a> here. Add the above script import elements inside the <code>head</code> of your document, and then add the following lines inside another <code>script</code> element below them.</p>

<pre><code>var badge = document.getElementById(&#39;ufbadge&#39;);
var link = badge.getElementsByTagName(&#39;a&#39;)[0];</code></pre>

	<p>Now you have the <acronym title="Document Object Model">DOM</acronym> element you wish to parse, namely <code>link.href</code>, you can make a request to ufXtract as follows. You&#8217;ll be making extensive usage of the <acronym title="Document Object Model">DOM</acronym>. If you&#8217;re not too familiar or just want a refresher on the DOM then W3Schools has a good <a href="http://www.w3schools.com/htmldom/"><acronym title="HyperText Markup Lanuage">HTML</acronym> <acronym title="Document Object Model">DOM</acronym> Tutorial</a>. Add the following inside the bottom <code>script</code> element, just before  the closing tag.

<pre><code>var head = document.getElementsByTagName(&#39;head&#39;);
var script = document.createElement(&#39;script&#39;);
script.type = &quot;text/javascript&quot;;
script.src = &quot;http://lab.backnetwork.com/ufXtract/?url=&quot; + escape(link.href) + &quot;&#38;format=xfn&#38;output=json&#38;callback=build&quot;;
head[0].appendChild(script);</code></pre>

	<p>Note the use of the <code>escape</code> function to escape the value of <code>link.href</code> - this is because the web service expects a well-formed <acronym title="Uniform Resource Locator">URL</acronym>. Note also the callback parameter, which will trigger our next function.</p>

	<p>The next part is triggered when the code you added above has loaded fully. This part loops through the <acronym title="XHTML Friends Network">XFN</acronym> data returned (<code>response.xfn</code>) and creates a list of links along with the relationship data. Again, add this just before the closing tag of your bottom <code>script</code> element.</p>


<pre><code>function build(response) {
  var ul = document.createElement(&#39;ul&#39;);
  ul.id = &quot;ufbadge&quot;;
  for (j in response.xfn) {
    var li = document.createElement(&#39;li&#39;);
    li.className = response.xfn[j].rel;
    var a = document.createElement(&#39;a&#39;);
    a.href= response.xfn[j].link;
    var txt = document.createTextNode(response.xfn[j].link);
    var span = document.createElement(&#39;span&#39;);
    var rel = document.createTextNode(&#39; (&#39; + response.xfn[j].rel + &#39;)&#39;);
    a.appendChild(txt);
    span.appendChild(rel);
    li.appendChild(a);
    li.appendChild(span);
    ul.appendChild(li);
  }
}</code></pre>

<p>That&#39;s pretty much it! Try your example out, and you should get something like the image seen in Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/79-javascript-badges-powered-by-jsonp-and-microformats/figure1.png" alt="XFN data from Twitter imported into the example page" />
<p class="comment">Done! My Twitter XFN data has been imported into the example page</p>

	<h3>The Complete Script</h3>


	<p>The complete script wraps the basic code above into an object, adds a little bit of error checking and displays a loading message for good measure. You can <a href="sample.html">see the finished script in action here</a>.</p>


	<pre><code>var Badge = function() {
var obj;

return({
  init: function() {
    var badge = document.getElementById(&#39;ufbadge&#39;);
    if (badge) {
      var link = badge.getElementsByTagName(&#39;a&#39;)[0];      
      if (link) {
        badge.innerHTML = &quot;loading relationships for &quot; + link.childNodes[0].nodeValue;
        var head = document.getElementsByTagName(&#39;head&#39;);
        var script = document.createElement(&#39;script&#39;);
        script.type = &quot;text/javascript&quot;;
        Badge.obj = badge;
        script.src = &quot;http://lab.backnetwork.com/ufXtract/?url=&quot; + escape(link.href) + &quot;&#38;format=xfn&#38;output=json&#38;callback=Badge.build&quot;;
        head[0].appendChild(script);
      }
    }
  },
  build: function(response) {
    var ul = document.createElement(&#39;ul&#39;);
    ul.id = &quot;ufbadge&quot;;
    for (j in response.xfn) {
      var li = document.createElement(&#39;li&#39;);
      li.className = response.xfn[j].rel;
      var a = document.createElement(&#39;a&#39;);
      a.href= response.xfn[j].link;
      var txt = document.createTextNode(response.xfn[j].link);
      var span = document.createElement(&#39;span&#39;);
      var rel = document.createTextNode(&#39; (&#39; + response.xfn[j].rel + &#39;)&#39;);
      a.appendChild(txt);
      span.appendChild(rel);
      li.appendChild(a);
      li.appendChild(span);
      ul.appendChild(li);
    }
  this.obj.parentNode.replaceChild(ul,this.obj);
  }
});

YAHOO.util.Event.onDOMReady(Badge.init);</code></pre>


	<h2>Conclusion</h2>


	<p>The above script extracts <acronym title="XHTML Friends Network">XFN</acronym> data but it would be possible to extend it to display other microformats as well. The idea is simply that you can manage your content in one place and then display it in several other places around the web using a JavaScript badge. In many cases this type of work is best done on the server, but for occasions when you only control the client or where you don&#39;t have access to server-side processing, JavaScript and JSONP can be invaluable.</p>


	<p>JSONP is a simple but powerful pattern for all kinds of client-side applications that utilise external <acronym title="Application Programmer Interface">API</acronym>s. You can get started using ufXtract or other supporting web services now. And if you&#8217;re building a service in the future think about adding the ability to specify a JavaScript callback as part of your <acronym title="Application Programmer Interface">API</acronym>.</p></p></p>
