Title: jQuery: Write less, do more
----
Date: 2007-10-08 15:08:36
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

<p>For information on other JavaScript toolkits, check out our <a href="http://dev.opera.com/articles/view/introduction-to-javascript-toolkits">Introduction to JavaScript toolkits</a> article</p>

<h2>Introduction</h2>

<p><a href="http://jquery.com/" alt="The jQuery homepage">jQuery</a> is a JavaScript toolkit designed to simplify various tasks such as element selection, DOM manipulation, event handling, AJAX and animations. Its tagline is &#8220;Write less, do more&#8221;. It&#8217;s aimed at a broad audience, as they say &#8220;from hobbyists to businesses&#8221;. It has support for Opera out of the box, so you can pick it up and use it right away.</p>

<p><a href="http://docs.jquery.com/Downloading_jQuery" alt="The jQuery download page">Download jQuery now</a> to get started. Check out the <a href="http://docs.jquery.com/Main_Page" alt="The jQuery documentation">documentation</a>, the API and some of the <a href="http://docs.jquery.com/Tutorials" alt="jQuery tutorials">tutorials</a> related to the toolkit.</p>

<p>Some vital statistics:</p>

<ul>
<li>It has a lightweight footprint - about 20KB in size in compressed form.</li>
<li>It supports <a href="http://www.w3.org/TR/css3-selectors/" alt="The W3C CSS3 selectors working draft">CSS3 selectors</a> and basic <a href="http://www.w3.org/TR/xpath" alt="The W3C XPath recommendation">XPath</a> syntax.</li>
<li>It has cross-browser support, claiming to work in IE 6.0+, FF 1.5+, Safari 2.0+ and Opera 9.0+</li>
</ul>

<p>In the following article, I&#8217;ll show you some of the things you can do with the toolkit.</p>

<p>The article is based on jQuery 1.1.4. Since this article was written, jQuery 1.2.1 has been released. In this release the XPath selector syntax was separated out into it&#8217;s own plugin. The <a href="http://ui.jquery.com/" alt="The jQuery UI homepage">jQuery UI</a> project is also picking up steam, offering UI widgets like Sortables and Draggables.</p>
<h2>Table of contents</h2>
<ol>
<li><a href="#findthings">The magical $, or: Find things, do stuff</a></li>
<li><a href="#chaining">The power of chaining</a></li>
<li><a href="#manipulative">Getting manipulative: The &#8216;Do stuff&#8217; part</a></li>
<li><a href="#bondage">A little bit of bondage, i.e. event binding</a>
<ol>
<li><a href="#gotcha">Gotcha: $.ready, DOMContentLoaded and external style sheets</a></li>
</ol>
</li>
<li><a href="#ajax">jQuerying your AjAX</a></li>
<li><a href="#animate">Ext-animate! Ext-animate!</a></li>
<li><a href="#examples">Examples</a>
<ol>
<li><a href="#collapsiblelist">Collapsable list</a></li>
<li><a href="#highscore">High score table</a></li>
</ol>
</li>
<li><a href="#summary">Summing it up</a></li>
<li><a href="#resources">Resources</a></li>
</ol>

<h2 id="findthings">The magical $, or: Find things, do stuff</h2>

<p>The basic philosophy in jQuery is to find things, ie select a set of DOM elements, and do something to them. To this end, jQuery has a powerful selection mechanism making use of CSS and XPath syntax. The starting point of the framework is the magical $, which is an alias for the jQuery class. JavaScript doesn&#39;t reserve the $ for anything so it can be used as a variable or type name. Everything is accomplished by constructing a jQuery object and giving it some arguments. The simplest example is to retrieve an element with a given id:</p>

<pre><code>$(&#39;#container&#39;);</code></pre>

<p>In this case an object of the jQuery class is created, the <code>$(...)</code> works like a constuctor. The object looks up the element identified by the given id and stores it for further processing.</p>

<p>The equivalent DOM statement would be:</p>

<pre><code>document.getElementById(&#39;container&#39;);</code></pre>

<p>The argument to the $ constructor can be an XPath or a CSS selector expression. XPath is a language for selecting parts of an XML document, navigating up and down the DOM tree. Selections can be constrained by various expressions, selecting elements which have certain attribute values, which is the nth-child of another element and so on. CSS selectors are used to define style rules in style sheets, eg saying that all instances of this class of tables should have a green font color. The syntax is simpler and less powerful than XPath, but useful enough for most purposes.</p>

<p>The combination of these two syntaxes allows you to do various selections ranging from the simple to the complex in jQuery:</p>

<pre><code>$(&#39;a&#39;); //All anchors in the document (CSS/XPath)
$(&#39;div.container&#39;); //All divs with a container class (CSS)
$(&#39;div[@class=codeSnippet]/code&#39;); 
//All code elements that are direct children of divs in the document with the class &#39;codeSnippet&#39;. (XPath)</code></pre>

<p>The $ object actually produces <em>matches</em>, which means it can contain several elements which are the result of the query. In the first example only one element could match the expression, as it used an id, but in the cases above you get multiple elements.</p>

<p>When supplying only one argument, the entire document is searched for matches. You may supply an optional extra argument <code>context</code>, which limits the scope of the search:</p>

<pre><code>var container = document.getElementById(&#39;container&#39;);
$(&#39;div[@class=codeSnippet]/code&#39;, container );</code></pre>

<p>In the example we select a specific container element, and then search among it&#8217;s descendants for matches. The context can be either a DOM element or another jQuery object, which means you can do this:</p>

<pre><code>$(&#39;div[@class=codeSnippet]/code&#39;, $(&#39;#container&#39;) );</code></pre>

<p>For comparison, Opera has experimental built in support for XPath with DOM bindings, as described in the DOM Level 3 XPath specification. The following code would accomplish the same.</p>

<pre><code>var result = document.evaluate(&#39;div[@class=codeSnippet]/code&#39;, document, null, 0, null );
var ele = result.iterateNext(); //and so on</code></pre>

<p>The <code>$</code> object itself wraps an array of DOM elements matched by the given query. This means you can examine the length of the search by using a <code>length</code> property or <code>size</code> function:</p>

<pre><code>$(&#39;a&#39;).length;
$(&#39;a&#39;).size();</code></pre>

<p>It is possible to retrieve the actual elements found by the query by using the get method. By default it returns all the matched elements as an array. If you supply a number argument, it returns the elements at that position in the array.</p>

<pre><code>var anchors = $(&#39;a&#39;).get();
var first = $(&#39;a&#39;).get(0);</code></pre>

<p>Note: The 1.1.4 version deprecates the XPath syntax, and 1.2.1 version supplies this in it&#8217;s own <a href="http://jquery.com/plugins/project/xpath" alt="The jQuery XPath plugin">plugin</a>.</p>

<h2 id="chaining">The power of chaining</h2>

<p>Almost all of the methods on the <code>jQuery</code> object return another <code>jQuery</code> object. This leads us to the second strength of the toolkit: Method calls can be chained indefinitely. Let&#8217;s look at an example:</p>

<pre><code>$(&#39;a&#39;).slice(0,3).each( function (i) {
    alert(this);
});</code></pre>

<code>$(&#39;a&#39;)</code> selects all anchors in the document. <code>slice(0,3)</code> selects the first three elements from the previous result. <code>each()</code> loops through and calls the given function for each of them.

<p>It&#8217;s possible to do much more complex chaining. the <code>end()</code> function undoes the last change to the selection.</p>

<pre><code>$(&#39;a&#39;)
  .filter(&#39;[@href^=http://]&#39;).append(&#39;&lt;img src=&quot;external_arrow.png&quot; /&gt;&#39;)
  .end()
  .not(&#39;[@href^=http://]&#39;).append(&#39;&lt;img src=&quot;internal_arrow.png&quot; /&gt;&#39;);</code></pre>

In this example we first select all anchors elements in the document, then filter that selection down to those anchors with a <code>href</code> attribute starting with <code>http://</code> (<code>.filter(&#39;[@href^=http://]&#39;)</code>). An image of an arrow pointing away from the text is added to each matched element. Then call to <code>end()</code> undoes the filtering of the selection, restoring it to all anchors in the document again. The next snippet selects those anchors having an <code>href</code> attribute that doesn&#39;t start with <code>http://</code> (<code>.not(&#39;[@href^=http://]&#39;)</code>), and adds an image of an arrow pointing towards the text.

<h2 id="manipulative">Getting manipulative: The &#8216;Do stuff&#8217; part</h2>

<p>jQuery supplies several methods for manipulating the matched elements. Examples include affecting CSS, and adding content before, inside and after elements. The simples is CSS manipulation, demonstrated in the following example:</p>

<pre><code>$(&#39;a&#39;).css( &#39;text-decoration&#39;, &#39;none&#39; );</code></pre>

<p>In this case we select all the anchors in the document and remove their underline. As other methods, the css method applies the style to all matched elements. A different shorthand takes a single dictionary of properies and sets all the properties for all matched elements:</p>

<pre><code>$(&#39;a&#39;).css( { text-decoration: &#39;none&#39;, color: &#39;green&#39;} );</code></pre>

<p>The equivalent DOM statements would be:</p>

<pre><code>var anchors = document.getElementsByTagName(&#39;a&#39;);
for ( var i = 0, a; a = anchors[i]; i++ )
{
    a.style.textDecoration = &#39;none&#39;;
    a.style.color = &#39;green&#39;;
}</code></pre>

<p>If you give the css method a single string property, it will retrieve the value for that property on the first element in the list of matched elements.</p>

<p>In addition to manipulating CSS itself, jQuery also provides you with a set of methods to manipulate the DOM. The functions <code>prepend()</code> and <code>append()</code> allow you to add content into an existing node at the beginning and the end respecticely.</p>

<pre><code>$(&#39;#status&#39;).append( &#39;&lt;span class=&quot;warning&quot;&gt;red&lt;/span&gt;&#39; );</code></pre>

<p>The argument will be parsed and placed into the node. The similar methods <code>before()</code> and <code>after()</code> add content before or after the matched nodes:</p>

<pre><code>$(&#39;#highscore li:nth-child(3)&#39;).before(&#39;&lt;li&gt;696 Arve&lt;/li&gt;&#39;);</code></pre>

<p>Here, a new <code>li</code> element is added to a high score list before the current third <code>li</code> element. The <code>appendTo</code> and <code>prependTo</code> methods do the opposite: They take the string to be evaluated and appends it to the jQuery or DOM argument given to the function. The <code>wrap()</code> method is interesting because it wraps each matched element in a supplied HTML or element structure.</p>

<pre><code>$(&#39;#foo&#39;).wrap( &#39;&lt;div class=&quot;adhocContainer&quot;&gt;&lt;/div&gt;&#39; );</code></pre>

<p>Finally there are a few utility methods: <code>empty()</code> will clean out all content from the matched elements while <code>clone()</code> creates a deep clone of the matched elements for insertion elsewhere.</p>

<h2 id="bondage">A little bit of bondage, i.e. event binding</h2>

<p>Another favorite among toolkits is event binding. jQuery builds comprehensive support on top of the basic event model.</p>

<p>The first and most important for event binding is the <code>$.ready()</code> function. This is bound to the event DOMContentLoaded, which fires when the DOM is fully constructed, but before images are loaded. As such, this is not comparable to <code>window.onload</code> or <code>body.onload</code>, which fires when images are also loaded.</p>

<pre><code>$.ready( function () {
    //Do init stuff here
});</code></pre>

<p>jQuery supplies a handy shortcut for this. The above be be reduced to simply:</p>

<pre><code>$( function () {
    //Do init stuff here
});</code></pre>

<p>From there, jQuery has one general and several specific functions for adding event handlers. The general one is called <code>$.bind()</code>, and works the same way as the DOM <code>addEventListener</code> function:</p>

<pre><code>$(&#39;#addCustomerButton&#39;).bind( &#39;click&#39;, function() {
  //Submit request
});</code></pre>

<p>In this case we retrieve the element with the id <code>addCustomerButton</code> and add a click event handler to it. The second argument is the event handler function itself.</p>

<p>For each type of event there is a similar jQuery function. For example, for the click event there is a <code>click()</code> function. The above can thus be rewritten as:</p>

<pre><code>$(&#39;#addCustomerButton&#39;).click( function() {
    //Submit request
});</code></pre>

<p>Of other examples I can mention <code>change()</code>, <code>keypress()</code>, <code>select()</code>, <code>scroll()</code> and <code>focus()</code>.</p>

<p>If you do not specify an argument to these functions, the corresponding event will be fired on the matched elements. I.e.:</p>

<pre><code>$(&#39;#addCustomerButton&#39;).click();</code></pre>

<p>This will fire a click event on the element with the id &#8220;addCustomerButton&#8221;</p>

<h3 id="gotcha">Gotcha: $.ready, DOMContentLoaded and external style sheets</h3>

<p>In his <a href="http://my.opera.com/nicomen/blog/2007/07/08/domcontentloaded-gotcha-with-external-stylesheets" alt="Nicholas Mendoza blog jQuery gotcha">blog</a>, Nicolas Mendoza noted one cross browser problem with jQuery: The DOMContentLoaded event fires before images are loaded, but there is a disagreement as to whether or not it should wait until external CSS styles are loaded as well.</p>

<p>Currently Opera will fire the event without waiting for external CSS, while Firefox will wait until they are loaded. This causes a cross browser gotcha if you modify the CSS of your elements inside the <code>$.ready()</code> call. In Opera, your changes will potentially be overriden when the style sheet is finally loaded.</p>

<p>A workaround for this problem is to use the load event (<code>$(element).load()</code>) for situations where you change your CSS during the initialization phase.</p>

<h2 id="ajax">jQuerying your AjAX</h2>

<p>Any self-respecting JavaScript toolkit comes complete with functions which simplify AJAX and jQuery is no exception. jQuery supports both simple and advanced variants. use the <code>$.get()</code> and <code>$.post()</code> methods to send simple GET and POST requests respectively. Each take three arguments, the request URL, a set of parameters (optional) and a callback function (optional) for the resulting data. For example:</p>

<pre><code>$.get( &#39;bookDetails.php&#39;, { &#39;isbn&#39; : &#39;ISBN 0-201-63361-2&#39; }, showDetails );
$.post( &#39;addCustomer.php&#39; { &#39;name&#39; : &#39;Darth Vader&#39;, &#39;e-mail&#39; : &#39;darthvader@galacticempire.org&#39; }, showReport );</code></pre>

<p>In the first example, we retrieve information via a GET request sent to the PHP script. The CGI parameter <code>isbn</code> is passed. The <code>showDetails</code> function is added as an event handler for when a response is received. In the second example, data is sent to the server as a POST request, passing data about a new customer to add. The showReport function handles any responses.</p>

<p>But jQuery also allow you to control your queries with a more flexible variant. The <code>$.ajax()</code> function takes a single dictionary, which can set several properties of the request. Examples include the expected contentType and dataType (JSON, html, XML and script) and functions to call at various stages of the request.</p>

<pre><code>$.ajax( { url: &#39;addCustomer.php&#39;,  type : &#39;POST&#39;, success : showReport, 
    data : {&#39;name&#39; : &#39;Darth Vader&#39;, &#39;e-mail&#39; : &#39;darthvader@galacticempire.org} }, 
    dataType : &#39;json&#39;, error : showError } );</code></pre>

<p>Another nifty aspect of jQuery&#8217;s ajax handling is the ability to set global defaults for several of the parameters. This is accomplished using the <code>$.ajaxSetup()</code> function. Like the <code>$.ajax()</code> function, it takes a single dictionary of properties:</p>

<pre><code>$.ajaxSetup( { url : &#39;customerApp.php&#39;, type : &#39;POST&#39;, contentType : &#39;json&#39;, error : showError } );
$.ajax( { data : { type : &#39;add&#39;, name : &#39;Darth Vader&#39; } } );
$.ajax( { data : { type : &#39;add&#39;, name : &#39;Darth Maul&#39; } } );</code></pre>

<p>As see in the example, once the properties are set, they are treated as default values for future calls to <code>$.ajax()</code>.</p>

<p>A smart little function is <code>load()</code> which loads the results of an AJAX request into the matched elements. This is a simple way of adding in chunks of data from other sources much like the include function of for example PHP:</p>

<pre><code>$(&#39;#overview-container&#39;).load(&#39;overview-toc.html&#39;);</code></pre>

<h2 id="animate">Ext-animate! Ext-animate!</h2>

<p>jQuery has support for animations and visual effects. The JavaScript toolkit has several methods for <br />
specific visual effects such as fading, sliding, hiding and toggling, . For example:</p>

<pre><code>$(&#39;.inactive&#39;).slideUp(&#39;fast&#39;);</code></pre>

<p>In this case, any element with the inactive class slides up with a fast speed.</p>

<p>The methods <code>hide()</code>, <code>show()</code> and <code>toggle()</code> allows you to quickly hide and show elements on the page.</p>

<pre><code>$(&#39;#commentControls&#39;).toggle();</code></pre>

<p>In addition to these, there is a specialized method <code>animate()</code> which allows you to do more specific or complex animations. <code>animate()</code> takes a dictionary of CSS properties and values to animate to, ie if you write:</p>

<pre><code>$(&#39;#foo&#39;).animate( { width : 100, height: 100 }  );</code></pre>

<p>Then the element will be animated &#8211; it will go form its current width and height to 100 pixels wide and tall. There are three preset string values for the properties: &#8216;hide&#8217;, &#8216;show&#8217; and &#8216;toggle&#8217;, which gives you often used effects. You can also supply an argument for the speed of the animation, using preset values of &#8216;slow&#8217;, &#8216;normal&#8217; and fast, and a function to call once the animation has completed. The latter can allow you to chain animations, for example.</p>

<p>Note: jQuery 1.2 introduces animations of colors, which wasn&#8217;t present in the previous versions. Furthermore, the animation mechanism itself has become more powerful with for example chaining.</p>

<h2 id="examples">Examples</h2>

<p>In this section I show some examples of how you can use jQuery. You can download the code examples for this article <a href="examples.zip" alt="The code examples that accompany this article">from here</a>.</p>

<h3 id="collapsiblelist">Collapsable list</h3>

<p>The following shows a quick way of making a list where sublists can be collapsed and expanded by clicking:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Collapsable list&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.1.4.pack.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;
$( function () {
    $(&#39;li:has(ul)&#39;).click( function (evt) {
        if ( event.target != this ) {
            return;
        }
        $(&#39;ul:eq(0)&#39;, this).toggle();
        evt.stopPropagation();
    })
});
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;ul&gt;
      &lt;li&gt;A&lt;/li&gt;
      &lt;li&gt;
        B
        &lt;ul&gt;
          &lt;li&gt;C&lt;/li&gt;
          &lt;li&gt;
            D
            &lt;ul&gt;
              &lt;li&gt;E&lt;/li&gt;
              &lt;li&gt;F&lt;/li&gt;
              &lt;li&gt;G&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/li&gt;
          &lt;li&gt;H&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;
      &lt;li&gt;I&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Let&#39;s dissect the JavaScript code a little bit, and look at what is going on:</p>

<pre><code>$( function () {
    $(&#39;li:has(ul)&#39;).click( function (evt) {
        if ( event.target != this ) {
            return;
        }
        $(&#39;ul:eq(0)&#39;, this).toggle();
        evt.stopPropagation();
    })
});</code></pre>

<p>First of all, the <code>$( func )</code> constructor is used as a shorthand for <code>$.ready()</code>. The fragment <code>$(&#8216;li:has(ul)&#8217;)</code> selects all <code>li</code> elements which have a <code>ul</code> child. A click handler is added to all of these elements in one go: Calling a function on a jQuery object will usually apply it to all the matched elements in the query. The first if structure simply stops clicks from child elements of the <code>li</code>, so that only clicks on the text content of the <code>li</code> itself causes a change. Finally, <span>$(&#8216;ul:eq(0)&#8217;, this)</span> selects the first ul child of the li (this) and toggles it using a jQuery utility function. Finally the event is stopped to avoid more handlers firing higher in the tree.</p>

<h3 id="highscore">High score table</h3>

<p>In this example I go through using a simple high score list, where people are pushed down and out of the list as higher scores are added.</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;High score table&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;jquery-1.1.4.pack.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;
$(function () {
    $(&#39;#scoreForm&#39;).submit( function (e) {
        var score = this.score.value;
        var name = this.name.value;
        var hs = $(&#39;#highscore&#39;);
        $( &#39;li&#39;, hs ).each( function () {
            if ( parseInt(this.firstChild.nodeValue.split(&#39; &#39;)[0]) &lt; score )
            {
                $(this).before( &#39;&lt;li&gt;&#39; + score + &#39; &#39; + name + &#39;&lt;/li&gt;&#39;);
                $(&#39;li:last-child&#39;, hs).remove();
                return false;
            }
        });
        return false;
    });
});
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;ol id=&quot;highscore&quot;&gt;
      &lt;li&gt;276 Rune&lt;/li&gt;
      &lt;li&gt;135 Mathieu&lt;/li&gt;
      &lt;li&gt;97 Christian&lt;/li&gt;
    &lt;/ol&gt;
    &lt;form id=&quot;scoreForm&quot; method=&quot;POST&quot; action=&quot;&quot;&gt;
    &lt;p&gt;
      &lt;label&gt;Score: &lt;input type=&quot;text&quot; name=&quot;score&quot;&gt;&lt;/label&gt;
      &lt;label&gt;Name: &lt;input type=&quot;text&quot; name=&quot;name&quot;&gt;&lt;/label&gt;
      &lt;input type=&quot;submit&quot; value=&quot;Save score&quot;&gt;
    &lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Let&#39;s take a closer look at the code:</p>

<pre><code>$(function () {
    $(&#39;#scoreForm&#39;).submit( function (e) {
        var score = this.score.value;
        var name = this.name.value;
        var hs = $(&#39;#highscore&#39;);
        $( &#39;li&#39;, hs ).each( function () {
            if ( parseInt(this.firstChild.nodeValue.split(&#39; &#39;)[0]) &lt; score )
            {
                $(this).before( &#39;&lt;li&gt;&#39; + score + &#39; &#39; + name + &#39;&lt;/li&gt;&#39;);
                $(&#39;li:last-child&#39;, hs).remove();
               return false;
            }
        });
        return false;
    });
});</code></pre>

<p>When the DOM is loaded, we add a submit event handler on the high score form. When you submit a new score, the code looks through the current list and checks if the submited code is higher than one in the list. We loop through all li children of the high score list by doing <code>$(&#8216;li&#8217; hs ).each()</code>. The <code>each()</code> method takes a function which is called for each iteration. The second argument limits the span of the selection to the high score list itself. Note that <code>this</code> refers to the DOM element being processed. We add a new list item before the one we&#8217;re checking through <code>$(this).before()</code>. Finally, we remove the last list item in the list which is now below the threshold: <code>$(&#8216;li:last-child&#8217;, hs).remove()</code>.</p>

<h2 id="summary">Summing it up</h2>

<p>jQuery has a very powerful selection mechanism, and this is at the heart of the toolkit. You can retrieve a set of elements and apply functions or otherwise change them. The syntax is easy to understand, and supports CSS selectors and XPath expressions. The chaining mechanism is also excellent, allowing you to do complex mutations with very little code. The code of the toolkit itself is small in terms of total number of functions and file size: 22kb compressed and 61kb uncompressed.</p>

<p>jQuery also provides several now standard aspects such as event binding, Ajax and animation. &#8220;All&#8221; toolkits have these, so what is special? The advantage to the event binding and animation implementation here, stems from the ability to apply them to a series of elements at the same time. The Ajax implementation is run-of-the-mill, with the exception of loading the results directly into a specific container.</p>

<p>Additionally, jQuery provides several utility methods which are nice to have. Among the less useful is a shorthand for checking which browser the reader is using. This is effectively user agent sniffing and should be avoided. Such sniffing means you&#8217;ll need to update your scripts every time a new browser version comes out. Use <a href="http://dev.opera.com/articles/view/using-capability-detection/" alt="dev.opera.com article on using capability detection">capability detection</a> instead, checking if the browser supports a given feature, like XPath or similar. All in all, many of the features make your work a bit easier, but are not revolutionary by themselves. They all work cross browser, however, which is a big advantage.</p>

<p>The toolkit separates everything into one place, the jQuery class. This effectively means it plays nice with other toolkits and libraries which is a very good thing. The use of $ conflicts with a similar function in the Prototype library, but jQuery provides a way out by calling <code>$.noConflict()</code>, releasing the $ back to Prototype. You can alias the jQuery class by simply creating another variable refering to it.</p>

<p>jQuery is the basis for several <a href="http://docs.jquery.com/Plugins" alt="jQuery user-contributed plugins">user-contributed pluings</a> which extend and transform its functionality. The website gives a comprehensive list of registered plugins, some of which are adopted as official plugins for the project. One example is <a href="http://ui.jquery.com" alt="The jQuery UI project homepage">jQuery UI</a> project, which we mentioned earlier</p>

<p>If you apply this library and the jQuery object everywhere, your JavaScript code really starts looking different. This is also one of the goals of the toolkit: To transform the way you write JavaScript code. Ultimately, however, it&#8217;s still just an object which can be wrapped around any DOM element at any time, which means you can apply it only where you need it.</p>

<p>jQuery has solid <a href="http://docs.jquery.com/API" alt="The jQuery documentation">API</a> documentation and a host of <a href="http://docs.jquery.com/Tutorials" alt="jQuery tutorials">tutorials</a> to get you started. There is an active community around the toolkit, for example on the general mailing list where people are helpful and friendly. The list sees several hundred mails each day.</p>

<h2 id="resources">Resources</h2>

<ul>
<li><a href="http://jquery.com" alt="The main jQuery homepage">jQuery website</a></li>
<li><a href="http://docs.jquery.com/Downloading_jQuery" alt="The jQuery download page">Download jQuery</a></li>
<li><a href="http://docs.jquery.com/API" alt="">jQuery API</a></li>
<li><a href="http://docs.jquery.com/Tutorials" alt="jQuery tutorials">Official jQuery tutorials</a></li>
<li><a href="http://groups.google.com/group/jquery-en" alt="The english language jQuery support mailing list">Support mailing list</a></li>
<li><a href="http://docs.jquery.com/Plugins" alt="The jQuery plugins homepage">jQuery plugins</a></li>
<li><a href="http://jquery.com/plugins/project/xpath" alt="jQuery XPath plugin">XPath compatibility plugin</a></li>
<li><a href="http://ui.jquery.com" alt="The jQuery UI project homepage">jQuery UI</a></li>
<li><a href="http://visualjquery.com/" alt="|Visual jQuery homepage">Visual jQuery</a> (More visual representation of the API)</li>
<li><a href="http://jquery.bassistance.de/api-browser/" alt="The jQuery API browser">jQuery API browser</a></li>
<li><a href="http://planet.jquery.com/" alt="Planet jQuery homepage">Planet jQuery</a></li>
<li><a href="http://www.learningjquery.com/" alt="Learning jQuery homepage">Learning jQuery</a></li>
<li><a href="http://simonwillison.net/2007/Aug/15/jquery/" alt="Simon Willison article on jQuery">Simon Willisons article on jQuery</a></li>
<li>&#8230; And his <a href="http://www.slideshare.net/simon/jquery-in-15-minutes/" alt="Simon Willison 15 minute jQuery slideshow">15 minute slideshow</a></li>
<li><a href="http://my.opera.com/nicomen/blog/2007/07/08/domcontentloaded-gotcha-with-external-stylesheets" alt="Nicholas Mendoza blog - jQuery gotcha">Nicolas Mendoza&#8217;s DOMContentLoaded Gotcha</a></li>
<li><a href="http://www.w3.org/TR/css3-selectors/" alt="The W3C CSS3 selectors working draft">CSS3 selectors</a></li>
<li><a href="http://www.w3.org/TR/xpath" alt="The W3C XPath recommendation">XPath selectors</a></li>
<li><a href="http://dev.opera.com/articles/view/using-capability-detection/" alt="dev.opera.com capability detection article">Using capability detection</a></li>
</ul>

