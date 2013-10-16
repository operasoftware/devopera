Title: Introducing The Dojo Toolkit
----
Date: 2008-12-12 12:03:01
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

<p> Introducing Dojo page 1 : <a href="http://dev.opera.com/articles/view/introducing-the-dojo-toolkit/?page=2">Introducing Dojo page 2</a> : <a href="http://dev.opera.com/articles/view/introduction-to-javascript-toolkits">Introduction to JavaScript toolkits</a></p>

<h2>Introduction</h2>

<p><a href="http://dojotoolkit.org">The Dojo Toolkit</a> is a collection of uniform JavaScript components 
to assist with any of your web development needs. The Base <code>dojo.js</code> provides a collection of &#39;must have&#39; APIs for your most common needs, and provides an entire library of functionality built around a &quot;use at 
will&quot; philosophy. Dojo is completely free, and is dual-licensed under the AFL and new-BSD Open Source 
Licenses, providing peace of mind about the history and future of the project.</p>

<p>You can <a href="http://dojotoolkit.org/download/">download Dojo</a> now, or simply get started by including a single <code>&lt;script&gt;</code> tag in an existing page:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot; charset=&quot;utf-8&quot; src=&quot;http://ajax.googleapis.com/ajax/libs/dojo/1.2/dojo/dojo.xd.js&quot;&gt;&lt;/script&gt;</code></pre>

<p>That&#39;s it! The line will load the Dojo Toolkit (1.2 at the time of this writing) from the Google Ajax API Content Distribution Network, which uses edge-caching to deliver the library from the closest possible geographic location. The entire Dojo Toolkit is available on both <a href="http://build.dojotoolkit.org/">the AOL CDN</a>, and Google&#39;s new <a href="http://code.google.com/apis/ajaxlibs/documentation/index.html#dojo">Ajax API CDN</a> - all components, styles and images, available at your fingertips with zero overhead.</p>
	
<p>You can see a fairly complete demonstrative <a href="http://dojocampus.org/explorer/">overview of available components</a>, as well as a complete <a href="http://api.dojotoolkit.org/">API reference</a> to get familiar with the potential functionality. The <a href="http://www.sitepen.com/blog/series/dojo-quick-start-guide/">Dojo QuickStart guide</a> covers several core concepts in depth as well, and <a href="http://dojocampus.org">DojoCampus</a> makes a great community-driven learning center, providing documentation, tutorials, and examples around every corner. A community driven Wiki is in place at <a href="http://docs.dojocampus.org">docs.dojocampus.org</a>, and will soon become the definitive on-line documentation resource for Dojo.</p>

<p>Dojo is the &quot;less Magic&quot; JavaScript library, a motto adopted after the 0.9 release. The API is clear, concise, consistent, namespaced and entirely extensible, though it makes few (if any) assumptions about &quot;what you want&quot; to happen. Every component is &quot;use at will&quot;. Every feature is additive and optional.</p>
	
<p>Facts about Dojo:</p>

<ul>
  <li>Dojo is lightweight - 26KB in size when compressed, with more advanced options to shrink to as little as <a href="http://www.sitepen.com/blog/2008/07/01/dojo-in-6k/">6KB on the wire</a>.</li>
  <li>Dojo supports all CSS3 selectors in its query engine, designed with a forward-looking API.</li>
  <li>Dojo supports all major web browsers: Opera 9+, FF2+, Safari 3+, and IE6+
    <ul>
      <li>Dijit (the UI portion of the Dojo Toolkit) is currently not supported in Opera 9, though it works. Small keyboard and accessibility features in Opera prevent Dijit from claiming &quot;official&quot; support, though per Dojo&#39;s open development, patches to enhance support are always welcome with a CLA.</li>
    </ul>
  </li>
  <li>Dojo has a large group of <a href="http://turtle.dojotoolkit.org/~dante/skewDemo/demo.html">core developers</a> working together in relative harmony from all across the globe.</li> 
  <li>The Dojo Build and Package systems takes the guesswork out of optimization, including the automated creation of optimized &quot;layers&quot; of JavaScript, as well as inlining CSS @imports and comment removal.</li>
  <li>Dojo is dual-licensed under the New BSD or the AFL, allowing for a true Open Source, Open Project experience, and piece of mind about IP purity.</li>
  <li>DojoX provides countless <em>plugins</em>, all similarly licensed, supported, and included &#39;in the box&#39;. Client-side charting, Graphics API, Advanced IO, Countless dojo.data Stores, and more.</li>
  <li>Not only is Dojo backed by a thriving community providing support (on the <a href="http://dojotoolkit.org/community/">Dojo Forums</a>, #dojo on irc.freenode.net, and <a href="http://dojocampus.org">DojoCampus</a>),  it also has commercial support options from available <a href="http://sitepen.com/services/support.php">SitePen</a> for  guaranteed results. Dojo also has the support and backing of a number of <a href="http://dojotoolkit.org/reference-guide/developer/contributors.html">prominent companies within the web industry</a>.</li>
</ul>

<h2>Base overview: what do I get?</h2>

<p>On the client-side, the lightweight <code>dojo.js</code> file provides a vast amount of functionality. <code>dojo.js</code> is referred to as Base Dojo - the most stable, useful, and common functionality for all web developers. Without getting into too much detail (it would make for a very long article), below is an overview of the tools available in Base Dojo.</p>

<h3>dojo.addOnLoad</h3> 

<p>Registers some function to run when the page is ready. This includes any additional components loaded in through the Dojo package system as well. <code>dojo.addOnLoad</code> accepts a function as follows:</p>

<pre><code id="ex-addonload-basic-js">dojo.addOnLoad(function() {
  console.log(&quot;The Page is ready!&quot;)
});</code></pre>

<p>This is the quintessential &quot;first step&quot; when working with the Document Object Model, or DOM. Note that you should never directly add an onLoad event handler to the body element when using Dojo (or most any other toolkit).</p>

<h3>dojo.require</h3>

<p>Loads namespaced modules or components. For example, to load the advanced Animations and easing plugins, you&#39;d do the following:</p>

<pre><code>dojo.require(&quot;dojo.fx&quot;); 
dojo.require(&quot;dojo.fx.easing&quot;);
dojo.addOnLoad(function() {
  console.log(&quot;The Page and all Dojo dependencies are ready!&quot;)
});</code></pre>

<p>All modules/packages/plugins, however you prefer to call them, will be loaded and have their dependencies loaded as well. <code>dojo.addOnLoad</code> fires <em>after</em> everything has been resolved.</p>

<p>Alternate useful package tools: <code>dojo.requireIf</code> (conditional loading), <code>dojo.provide</code> (to alert the package system a module has been provided, and to not re-load).</p>

<p>Combining <code>dojo.require</code> and <code>dojo.addOnLoad</code> wrapped within each other provides a unique way to lazy-load resources. Simply include the base <code>dojo.js</code> in your page, and call <code>dojo.require()</code> from within an <code>addOnLoad</code> function:</p>

<pre><code>// with just dojo.js, this is basically document.ready:
dojo.addOnLoad(function() {
  // page is rendered, add extra code:
  dojo.require(&quot;dijit.Dialog&quot;);
  dojo.addOnLoad(function() {
    // Dialog and all (if any) dependencies solved:
    var thinger = new dijit.Dialog( { 
      title:&quot;A Modal Dialog&quot;,
      href:&quot;remote.html&quot; 
    });
    thinger.startup();
    // show it:
    thinger.show();
  });
});</code></pre>

<p>In this example, we introduced the <code>dijit</code> namespace. Dijit is an add-on to the Dojo Core, and entirely optional. The above example needs a theme to &quot;look right&quot;, which we&#39;ll cover later, but if you are impatient, the following will do:</p>

<pre><code>&lt;head&gt;
&lt;link rel=&quot;stylesheet&quot;  href=&quot;http://ajax.googleapis.com/ajax/libs/dojo/1.2.0/dijit/themes/tundra/tundra.css&quot; /&gt;

&lt;script type=&quot;text/javascript&quot; charset=&quot;utf-8&quot; src=&quot;http://ajax.googleapis.com/ajax/libs/dojo/1.2.0/dojo/dojo.xd.js&quot;
&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body class=&quot;tundra&quot;&gt;
&lt;h2&gt;Hello, Dijit&lt;/h2&gt;

&lt;/body&gt;</code></pre>

<p>We simply added a CSS file, and <code>class=&quot;tundra&quot;</code> to the body. This enables the &#39;tundra&#39; theme for the entire page. Two other themes, <em>soria</em> and <em>nihilo</em> are available by default with Dojo, though themes are entirely CSS and images, so with some design work you can easily create your own.</p>

<h3>dojo.byId</h3> 

<p>This is an alias to <code>document.getElementById</code>, but works in the few cases where <code>getElementById</code> does not. <code>dojo.byId</code> simply returns the native DOM Node, which can you manipulate directly. It is shorter to type, too.</p>

<pre><code>dojo.addOnLoad(function() {
  dojo.byId(&quot;someNode&quot;).innerHTML = &quot;I just replaced the content.&quot;;
});</code></pre>

<p>You&#39;ll notice all of the examples are wrapped in an <code>addOnLoad</code> call, which prevents the code from executing before the DOM is actually ready.</p>

<h3>dojo.connect - <em>the</em> event connection maker</h3> 

<p>or: &quot;one-to-one&quot; communication. This function can connect any DOM Event to any node and give you a powerful API for manipulating scope. The events are normalized across browsers and in some cases synthesized. For example, to connect an <code>onclick</code> handler to a single node:</p>

<pre><code id="ex-addonload-click-js">dojo.addOnLoad(function() {
  var node = dojo.byId(&quot;someNode&quot;);
  dojo.connect(node, &quot;onclick&quot;, function(event) {
    console.log(&quot;the node was clicked: &quot;, event.target);
  });
});</code></pre>

<p>Dojo connect also allows you to connect to any object. For instance, to execute a function anytime the method <code>dojo.require()</code> is issued, as in the following example:</p>

<pre><code>var handle = dojo.connect(dojo, &quot;require&quot;, function(arg) {
  console.log(&quot;require() called with: &quot;, arg)
  dojo.disconnect(handle);
});
dojo.require(&quot;dojo.io.iframe&quot;);</code></pre>

<p><code>dojo.connect</code> passes the parameters the connected function is called with to the callback, illustrated above as an anonymous function. By calling dojo.disconnect with the return value of the dojo.connect, we insure this listener is only called once ever.</p>

<p>dojo.connect handles much more than just DOM Events. Any method or function can act as an &#39;event&#39;:</p>

<pre><code>var myObj = {
  foo:&quot;bar&quot;,
  baz: function(e) {
    console.log(this.foo);
},
bam: function(e) {
  this.foo = &quot;barbar&quot;;
}
};
// call myObj.bam() in scope when baz() is run
dojo.connect(myObj, &quot;baz&quot;, myObj, &quot;bam&quot;);
myObj.baz();</code></pre>

<p>The third parameter is a scope to execute the function from. We can pass a named function (as seen above), or an anonymous function to call in scope:</p>

<pre><code id="ex-connect-obj2">var myObj = {
  foo:&quot;bar&quot;,
  baz: function(e){
  console.log(this.foo);
},
bam: function(e) {
  this.foo = &quot;barbar&quot;;
}
};
// call anon function in myObj scope when bam() is run
dojo.connect(myObj, &quot;bam&quot;, myObj, function() {
  // this is know as &quot;after advice&quot;, and is run after bam
  this.foo = &quot;otherbar&quot;;
  this.baz();
});
myObj.bam();</code></pre>

<p>Connect uses <code>dojo.hitch()</code> under the covers to provide the scope-switching magic, which is a very powerful and useful feature once you understand the concept, and the frustration of the default behavior of events firing in the scope of the window and not the point at which the event handler is defined.</p>

<h3>Topics: dojo.publish, dojo.subscribe</h3> 

<p>An extremely convenient method of sending information to and from ambiguous objects. After <code>dojo.subscribe()</code>&#39;ing to a named channel, the function registered will be called any time some other function <code>dojo.publish()</code>es something on the same channel.</p>

<pre><code id="ex-topic-js">var subscription = dojo.subscribe(&quot;/system/alerts&quot;, function(msg) {
  console.log(msg);
});	
// and later:
dojo.publish(&quot;/system/alerts&quot;, [&quot;You&#39;ve been logged out&quot;]);</code></pre>

<p>Indeed, this is a very handy way for sections of a page to update themselves without prior knowledge of the other components on a page. In the above example, we save the handle of the <code>dojo.subscribe</code> call in a variable. Like <code>dojo.disconnect</code>, we can stop the subscription at any time by passing that handle to <code>dojo.unsubscribe</code>:</p>

<pre><code id="ex-topic-unsubscribe-js">var handle = dojo.subscribe(&quot;/foo/bar&quot;, function(msg) {
  console.log(&quot;In this example, I&#39;ll never run.&quot;)
});
dojo.unsubscribe(handle);
dojo.publish(&quot;/foo/bar&quot;, [&quot;Baz&quot;]);</code></pre>

<p>Topics are used in places throughout the Dojo API. For instance, <code>dojo.dnd</code> (the Drag and Drop component in Core) uses them to notify ambiguous events like &quot;/dnd/move/start&quot;, and &quot;/dnd/move/stop&quot;. The Dijit component <code>dijit.layout.TabContainer</code> uses them to notify itself about events like <code>addChild</code>, <code>selectChild</code>, <code>removeChild</code>, and so on.</p>

<h3>Array utilities</h3> 

<p><code>dojo.map</code>, <code>dojo.filter</code>, <code>dojo.every</code>, <code>dojo.some</code>, <code>dojo.forEach</code>, <code>dojo.indexOf</code> and so on... Dojo wraps all the native Array utilities found in JavaScript 1.6, providing a very <a href="http://lazutkin.com/blog/2008/jan/12/functional-fun-javascript-dojo/">functional approach</a> to most problems.</p>

<p>The most common would be <code>forEach</code>, to run a function on each element in an array:</p>

<pre><code>var arr = [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;]; dojo.forEach(arr, function(elm, index, theArray) {
  // elm is the item in the array:
  console.log(elm);
  // index is where in the array we are:
  console.log(&#39;run &#39;, index, &#39; times&#39;);
  // theArray is the full array, should you need a reference to it internally:
  console.log(elm == theArray[index]); 
  // should return &#39;true&#39;
});</code></pre>

<p>An optional third parameter to <code>forEach</code> is <code>scope</code>, which again utilizes <code>dojo.hitch</code> to scope your function to another object.</p>

<pre><code id="ex-foreach-scope-js">var arr = [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;];
var obj = {
  log: function(elm) {
    console.log(elm);
  }
};
dojo.forEach(arr, function(elm) {
   // elm is the item in the array:
   this.log(elm);
}, obj);</code></pre>

<p>Filter reduces an array based on a return value from a function:</p>

<pre><code id="ex-filter-js">var arr = [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;];
var newArr = dojo.filter(arr, function(elm, i) {
  // only do even numbers:
  return i % 2 !== 0;
});
console.log(newArr);</code></pre>

<p>Map creates a new array of elements based on a return value from a function:</p>

<pre><code id="ex-map-js">var arr = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;];
var other = [&quot;one&quot;, &quot;two&quot;, &quot;three&quot;, &quot;four&quot;];
var newArr = dojo.map(arr, function(elm, i) {
  if(i % 2 == 0) {
    // only odds elements from a different array
    return other[i];
  }
});
console.log(newArr);</code></pre>

<p><code>indexOf</code> and <code>lastIndexOf</code> return integer values for matches within an array, returning -1 if no match was found:</p>

<pre><code id="ex-indexof-js">var arr = [&quot;one&quot;,&quot;two&quot;,&quot;three&quot;,&quot;four&quot;,&quot;five&quot;,&quot;one&quot;];
console.log(dojo.indexOf(arr, &quot;two&quot;)); // 1
console.log(dojo.lastIndexOf(arr, &quot;one&quot;)); // 5
console.log(dojo.indexOf(arr, &quot;one&quot;)); // 0
console.log(dojo.indexOf(arr, &quot;unknown&quot;)); // -1</code></pre>

<h3>DOM and CSS utilities</h3> 

<p><code>dojo.place</code>, <code>dojo.clone</code>, <code>dojo.attr</code>, <code>dojo.style</code>, <code>dojo.addClass/removeClass/toggleClass</code>, <code>dojo.marginBox</code>, and <code>dojo.coords</code> are just some of the convenience functions above and beyond normal DOM manipulation common in the JavaScript DOM.</p>

<p><code>dojo.place</code> will place a node in a position relative to another node:</p>

<pre><code>// place a new &lt;li&gt; as the first in the ul id=&quot;miUl&quot;:
var li = dojo.doc.createElement(&#39;li&#39;);
dojo.place(li, &quot;myUl&quot;, &quot;first&quot;); 
// give it some content, too:
li.innerHTML = &quot;Hi!&quot;;</code></pre>

<p><code>dojo.clone</code> clones a node, returning the newly created node:</p>

<pre><code>var input = dojo.query(&quot;.cloneMe&quot;)[0];
dojo.query(&quot;#someButton&quot;).onclick(function(e) {
  // add a new &lt;input /&gt; every time you click on someButton
  dojo.clone(input);
  dojo.place(input, e.target, &quot;last&quot;);
});</code></pre>

<p><code>dojo.attr</code> handles all cross-browser attribute getting and setting:</p>

<pre><code>// getter:
dojo.attr(&quot;someId&quot;, &quot;title&quot;); // title=&quot;bar&quot;

// setter, single:
dojo.attr(&quot;someId&quot;, &quot;title&quot;, &quot;A new Title&quot;);

// setter, multiple:
dojo.attr(&quot;someId&quot;, {
  &quot;tabindex&quot;: 2, // add to tab order
  &quot;onclick&quot;: function(e) {
    // add a click event to this node
  }
});</code></pre>

<p><code>dojo.style</code> works with the same getter/setter API as <code>dojo.attr</code>, but for CSS styles:</p>

<pre><code>// getter:
dojo.style(&quot;someId&quot;, &quot;height&quot;); 

// setter, single:
dojo.style(&quot;someId&quot;, &quot;padding&quot;, &quot;8px&quot;);

// setter, multiple:
dojo.style(&quot;someId&quot;, {
  &quot;fontSize&quot;: &quot;14pt&quot;, 
  &quot;color&quot;: &quot;#333&quot;
});</code></pre>

<p>Simple utilities for dynamically altering a node&#39;s <code>class=&quot;&quot;</code> attribute include <code>dojo.addClass</code>, <code>dojo.removeClass</code>, <code>dojo.toggleClass</code> and <code>dojo.hasClass</code>. All follow the same API pattern: pass the function a string ID or DOM Node reference, and act on the node, adding, removing, or toggling a class name. <code>dojo.hasClass</code> returns a boolean, <code>true</code> if a node has a specified class name.</p>

<p>Locating a node in the page, or setting/getting a Node&#39;s size and position can be done as follows:</p>

<pre><code>// returns x, y, t, l, w, and h values of id=&quot;someNode&quot;
var pos = dojo.coords(&quot;someNode&quot;);
console.log(pos); 

// includes any potential scroll offsets in t and l values
var abs = dojo.coords(&quot;someNode&quot;, true);
console.log(abs); 

// get just the marginBox, set another node to identical size
var mb = dojo.marginBox(&quot;someNode&quot;);
dojo.marginBox(&quot;otherNode&quot;, mb);</code></pre>

<p>Dojo&#39;s DOM Utility functions aim to take the pain out of working around cross browser quirks, and provide an easy-to-use API for common tasks.</p>

<h3>dojo.query - Dojo&#39;s CSS3 selector query engine</h3> 

<p>Or: &quot;Get DOMNodes, and do something with them&quot;.</p>

<p>Most of the core API (where relevant) are wrapped by <code>dojo.query</code>. In other words, anything you can do to a single node with Dojo can be applied to all matching nodes, using the same conventions. For instance, the above <code>onclick</code> example can be rewritten as:</p>

<pre><code>dojo.addOnLoad(function() {
  dojo.query(&quot;#someNode&quot;).connect(&quot;onclick&quot;, function(e) {
    console.log(&#39;the node dojo.byId(&quot;someNode&quot;) was clicked&#39;, e.target);
  });
});</code></pre>

<p>For convenience, shorthand methods more or less aliasing <code>.connect()</code> are mixed into <code>dojo.NodeList</code> (the super-Array returned by <code>dojo.query()</code>):</p>

<pre><code>dojo.query(&quot;#someNode&quot;).onclick(function(e) {
  console.log(&#39;the node dojo.byId(&quot;someNode&quot;) was clicked&#39;, e.target);
});</code></pre>

<p>All of the DOM Level 2 events are normalized and mixed: <code>.onclick</code>, <code>.onmouseenter</code>, <code>.onmouseleave</code>, <code>.onmousemove</code>, <code>.onmouseover</code>, <code>.onmouseout</code>, <code>.onfocus</code>, <code>.onblur</code>, <code>.onkeypress</code>, <code>.onkeydown</code>, <code>.onkeyup</code>, <code>.onsubmit</code> and <code>.onload</code>. <code>dojo.query</code> methods are also chainable, returning the same <code>NodeList</code> instance back after (most) calls.</p>

<pre><code>dojo.addOnLoad(function() {
  // connect mouseenter and mouseleave functions to all div&#39;s with the class &quot;hoverable&quot;:
  dojo.query(&quot;div.hoverable&quot;)
  .connect(&quot;onmouseenter&quot;, function(e) {
    dojo.style(e.target, &quot;opacity&quot;, 1);
  })
  .connect(&quot;onmouseout&quot;, function(e) {
    dojo.style(e.target, &quot;opacity&quot;, 0.42);
  })
  .style( {
    // set the initial opacity to 0.42, as if a mouseout has happened
    opacity: 0.42,
    // and the color:
    backgroundColor:&quot;#ededed&quot;
  });
});</code></pre>

<p>Extending <code>dojo.query</code> (or &quot;creating a plugin&quot;) is exceptionally easy:</p>

<pre><code>dojo.extend(dojo.NodeList, {
  makeItRed: function() {
    return this.style({ color:&quot;red&quot; });
  },
  setColor: function(color) {
    return this.style({ color: color });
  }
});
// run the makeItRed function across all nodes
dojo.query(&quot;.greenNodes&quot;).makeItRed();
// set the color: property of .redNodes to a greyish tone:
dojo.query(&quot;.redNodes&quot;).setColor(&quot;#ededed&quot;);</code></pre>

<p>Sometimes it is handy to work directly with a Node reference. For instance, when you register an <code>onclick</code> event handler on a <code>div</code>, any node within that <code>div</code> when clicked on will be the <code>event.target</code>, provided the event bubbles to the <code>div</code>. Sometimes you explicitly want to manipulate the original node, like so:</p>

<pre><code>dojo.query(&quot;li&quot;).forEach(function(n) {
  dojo.connect(n,&quot;onclick&quot;,function(e) {
    if(n == e.target) {
      console.log(&#39;same node&#39;);
    } else {
      console.log(&#39;bubbling up from different node&#39;);
    }
    // ensure we only ever add the class to the LI element, regardless of target
    dojo.addClass(n, &quot;beenClicked&quot;);
  });
});</code></pre>

<p>Dojo doesn&#39;t pollute the global namespace, nor compete for any shorthand convenience variables. If you desire aliases for commonly used functionality, you are capable of making that decision. <code>dojo.query</code> can be aliased trivially by creating a scope out of an anonymous function:</p>

<pre><code>(function($) {
  $(&quot;a[href^=http://]&quot;).onclick(function(e) {
    // confirm all external links before leaving the page
    if(!confirm(&quot;Visit&quot; + $(e.target).attr(&quot;href&quot;) + &quot;?&quot;)) {
      e.preventDefault();
    }
  });
})(dojo.query);</code></pre>

<p>Or by a convention seen throughout the Dojo source code:</p>

<pre><code>(function() {
  var d = dojo;
  d.addOnLoad(function() {
    d.connect(d,&quot;loaded&quot;,function() {
      console.log(&quot;obfuscated some&quot;);
    })
  });
})();</code></pre>

<p>JavaScript is a very flexible language. A more advanced use case can be seen in Neil Robert&#39;s &quot;<a href="http://web.archive.org/web/20101122051148/http://dojocampus.org/content/2008/03/13/creating-your-own/">Creating your Own $</a>&quot; Article on DojoCampus, ultimately mapping the entire Dojo Toolkit around a single $ variable.</p>

<p><code>dojo.query</code> / <code>dojo.NodeList</code> follows the same &quot;use at will&quot; philosophy as the rest of Dojo - specific use-case methods are left out of the Base <code>dojo.js</code>, allowing you to optionally mix them in should you need them, by issuing a simple <code>dojo.require</code>. For instance:</p>

<pre><code>dojo.require(&quot;dojo.NodeList-fx&quot;); // adds Animation support to dojo.query
dojo.require(&quot;dojox.fx.ext-dojo.NodeList&quot;); // adds DojoX addon Animations to dojo.query
dojo.require(&quot;dojo.NodeList-html&quot;); // adds advanced HTML utility functions to dojo.query </code></pre>

<p>The naming convention on these packages are slightly different. The hyphen, being an invalid character in normal &quot;dotted notation&quot; is here used to indicate &quot;cross package manipulation&quot;. For example, <code>dojo.NodeList-fx</code> adds &quot;fx&quot; to <code>NodeList</code>, but you will never be able to call a <code>dojo.NodeList-fx</code> method directly. Instead, such methods are simply injected into the <code>dojo.NodeList</code>. <code>dojox.fx.ext-dojo.NodeList</code> reads semantically as &quot;This module in DojoX FX project extends Dojo&#39;s NodeList Class directly, and is only the convention of this type used within The Toolkit.&quot;</p>

&lt;page /&gt;

<p><a href="http://dev.opera.com/articles/view/introducing-the-dojo-toolkit/">Introducing Dojo page 1</a> : Introducing Dojo page 2 : <a href="http://dev.opera.com/articles/view/introduction-to-javascript-toolkits">Introduction to JavaScript toolkits</a></p>

<h3>Ajax: transporting data</h3>

<p><code>dojo.xhr</code> provides a simple, powerful API for using Ajax. In newer versions of Dojo, the simple <code>dojo.xhr()</code> call wraps the existing methods from previous versions: <code>dojo.xhrGet</code>, <code>dojo.xhrPost</code>, <code>dojo.xhrPut</code> and <code>dojo.xhrDelete</code>.</p>

<pre><code id="ex-xhrget-js">dojo.xhrGet( {
  url:&quot;/path/to/remote.html&quot;,
  load:function (data) {
    dojo.byId(&quot;updateArea&quot;).innerHTML = data;
  }
});</code></pre>

<p>Many things are simple to achieve with such calls, like retrieving the contents of a remote file by issuing a GET on the server, and injecting the result into a node (as seen above) or progressively trapping a native Form and using Ajax to POST the results to the server, as seen below:</p>

<pre><code>&lt;!-- a simple form: --&gt;
&lt;form id=&quot;sampleForm&quot; action=&quot;submit.php&quot; method=&quot;POST&quot;&gt;
&lt;input type=&quot;text&quot; name=&quot;username&quot; /&gt;

&lt;button type=&quot;submit&quot;&gt;login&lt;/button&gt;
&lt;/form&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
dojo.addOnLoad(function() {
  var form = dojo.byId(&quot;sampleForm&quot;); // save ref to form
  dojo.connect(form, &quot;onsubmit&quot;, function(e) {
    // connect to, and disable the submit of this form
    e.preventDefault();
    // post the form with all it&#39;s defaults
    dojo.xhrPost( {
      form: form,
      load: function(data) {
        // set the form&#39;s HTML to be the response
        form.innerHTML = data;
      }
    });
  });
});
&lt;/script&gt;</code></pre>

<p>A simple PHP script to process the POST and send back some text would look like so:</p>

<pre><code>&lt;?php

  print &quot;You Sent:&quot;;
  print_r($_POST);

?&gt;</code></pre>

<p>All the <code>dojo.xhr*</code> methods use a single object hash, or property bag, as the only parameter, so there&#39;s no need to remember the order of parameters - just the common names and what they do:</p>

<ul>
  <li><code>url</code>: The endpoint to target.</li>
  <li><code>handleAs</code>: defaults to <code>text</code>, but allows you to modify the way the callback receives the data. Valid built-in options are: <code>text</code>, <code>javascript</code>, <code>json</code>, or <code>xml</code></li>
  <li><code>timeout</code>: time (in milliseconds) to wait before throwing a failure, should the data not come back.</li>
  <li><code>load</code>: a function to call when the data arrives. The data is passed to the function as the first parameter.</li>
  <li><code>error</code>: an error handler function to define.</li>
  <li><code>sync</code>: A Boolean to toggle whether or not this <code>XMLHttpRequest</code> is blocking or runs in the background. This defaults to <code>false</code>, which indicates asynchronous operation.</li>
  <li><code>handle</code>: A function that is fired in the result of error or load success. The data object passed is either the data, or <code>typeof</code> &quot;Error&quot;. It is provided as a convenience.</li>
  <li><code>form</code>: A <code>domNode</code> (or string ID of a node) to use as the content when submitting. As seen in the example above, the <code>url:</code> parameter is retrieved from the form&#39;s <code>action</code> attribute. You may specify an alternate url by passing both <code>form:</code> and <code>url:</code> parameters. </li>
  <li><code>content</code>: A JSON object of data to send to the url. </li>
</ul>

<p>Later in this article, we&#39;ll show the &quot;magic&quot; behind <code>dojo.hitch</code> and <code>dojo.partial</code>, which give you more flexibility over the scope in which your <code>load:</code>, <code>error:</code> and <code>handle:</code> callbacks are called.</p>

<h3>FX: A powerful, flexible animation API</h3> 

<p>Base <code>dojo.js</code> includes simple <code>fade</code> methods, and a powerful <code>animateProperty</code> method, which animates any CSS property. All animation methods return an instance of <code>dojo._Animation</code>, the core object providing control over the sequence. To create and run a fade animation, we&#39;d do the following:</p>

<pre><code id="ex-fadeout-js">dojo.addOnLoad(function() {
  dojo.fadeOut( { 
    node:&quot;someNode&quot;, // a node ref, byId
  }).play();
});</code></pre>

<p><code>dojo._Animation</code> instances have <code>play()</code>, <code>stop()</code>, <code>status()</code>, <code>gotoPercent()</code>, and <code>pause()</code> methods for control. With the exception of <code>dojo.anim</code>, all use a single object hash for defining the options. Some of the more useful options include:</p>

<pre><code id="ex-anim-options-js">var anim = dojo.fadeOut( {
  node: &quot;someNode&quot;, // node to manipulate
  duration: 3000, // time in ms to run the animation
  easing: function(n) {
    // a linear easing function, alter the progression of the curve used
    return n;
  },
  delay: 400, // time in ms to delay the animation when calling .play()
  rate: 10 // a framerate like modifier. 
});
anim.play();</code></pre>

<p>There are 30+ available easing functions in the optional <code>dojo.fx.easing</code> component. Simply <code>dojo.require()</code> it to use them:</p>

<pre><code>dojo.require(&quot;dojo.fx.easing&quot;);
dojo.addOnLoad(function() {
  dojo.fadeOut( {
    node:&quot;someNode&quot;,
    easing: dojo.fx.easing.bounceOut // bounce towards the end of the animation
  }).play();
});</code></pre>

<p>They also fire synthetic events at various stages of the cycle. What follows is an involved example illustrating all of them:</p>

<pre><code>dojo.addOnLoad(function() {
  dojo.fadeOut( { 
    node:&quot;someNode&quot;,
    beforeBeing: function() {
      console.log(&quot;the animation will start after I&#39;ve executed&quot;);
    },
    onBegin: function() {
      console.log(&#39;the animation just started&#39;);
    },
    onEnd: function() {
      console.log(&#39;the animation is done now&#39;);
    },
    onPlay: function() {
      console.log(&#39;the animation was started by calling play()&#39;);
    },
    onStop: function() {
      console.log(&#39;the animation was stopped&#39;);
    }
    onAnimate: function(val) {
      // fired at every step of the animation
    console.log(&#39;current value: &#39;, val);
    }
  })
});</code></pre>

<p>The most commonly used event is <code>onEnd</code>. For instance, supposed you want to fade out some content, replace it via Ajax, and fade it back in:</p>

<pre><code>var n = dojo.byId(&quot;someNode&quot;);
dojo.fadeOut( { 
  node: n,
  onEnd: function() {
    dojo.xhrGet( {
      url: &quot;newContent.html&quot;,
      load: function(data) {
        n.innerHTML = data;
        dojo.fadeIn({ node: n }).play();
      }
    })
  }
}).play();</code></pre>

<p>The <code>node:</code> parameter can either be a DOM Node reference, or a string to be passed through <code>dojo.byId</code>. In this example, we stored the reference as &quot;n&quot;, and reuse it in our callback.</p>

<p>You can also use <code>dojo.connect</code> for advanced usage with animations, the <code>_Animation</code> instance simply being an object to connect to:</p>

<pre><code>// create a simple loop
var fadein = dojo.fadeIn({ node: &quot;someNode&quot; });
var fadeOut = dojo.fadeOut({ node: &quot;someNode&quot; });
// call fadeout.play() anytime fadein&#39;s onEnd is fired:
// and re-play fadein when fadeout&#39;s onEnd is fired:
dojo.connect(fadein, &quot;onEnd&quot;, fadeout, &quot;play&quot;);
dojo.connect(fadeout, &quot;onEnd&quot;, fadein, &quot;play&quot;);
// start the loop
fadeout.play();</code></pre>

<p>Fading is great, and useful, but is only provided as a convenience wrapper around <code>dojo.animateProperty</code>. The property undergoing the animation is opacity:</p>

<pre><code id="ex-animateprop-js">// simulate fadeIn
dojo.animateProperty( {
  node:&quot;someNode&quot;,
  properties: {
    opacity: 1
  }
}).play();
// as opposed to:
// dojo.fadeIn({ node: &quot;someNode&quot; }).play();</code></pre>

<p>But <code>animateProperty</code> is entirely more robust and flexible. With it, you can animate any number of properties across a single node:</p>

<pre><code id="ex-animateprop-multi-js">dojo.animateProperty( {
  node:&quot;someNode&quot;,
  properties: {
    // end is assumed:
    opacity:0,
    // define a start AND end value:
    marginLeft: {
      start:5, end:250
    }
    // start is calculated, use unit &quot;em&quot;
    padding: {
      end:5, unit:&quot;em&quot;
    }
  }
}).play();</code></pre>

<p>Of course all the same <code>dojo._Animation</code> events and configuration options still apply. The <code>properties</code> hash accepts several formats. When passed a <code>start:</code> value and and <code>end:</code> value, the node is forced to those properties. When only passing an <code>end:</code> value, the <code>start:</code> value is calculated based on the node&#39;s current state. When only passed an integer, it is used as an <code>end:</code> value. The <code>unit:</code> parameter is assumed to be &quot;px&quot; unless otherwise specified, though use it with caution as some browsers do not convert &quot;em&quot; and &quot;pt&quot; to pixel values very well, or not at all.</p>

<p>Notice <code>marginLeft</code> in the example above. In CSS the value would be <code>margin-left:</code>, though the hyphen is illegal in JavaScript. A <em>camelCase</em> version is used instead per standard CSS to JavaScript property name translations, eg <code>marginLeft</code>.</p>

<p>You&#39;ll probably notice the <code>animateProperty</code> syntax is relatively verbose, as well as most every example so far has immediately called <code>.play()</code> on the returned <code>_Animation</code>. A shorthand function in Base Dojo exists to wrap common conventions (though it breaks the convenience of the &quot;object hash&quot; paradigm):</p>

<pre><code id="ex-anim-small-js">dojo.anim(&quot;someNode&quot;, { 
  opacity:0,
  marginLeft: { start:5, end:250 },
  padding: 50
});</code></pre>

<p>This example produces the same results as the much longer example above. You sacrifice flexibility for convenience with <code>dojo.anim</code>, as the parameters are ordered, and the animation is automatically <code>play()</code>ed. This really only scratches the surface of the Dojo Animation API.</p>

<h3>Advanced JavaScript utilities</h3> 

<p>Including object-oriented helpers like <code>dojo.declare</code> and <code>dojo.mixin</code>, as well as native prototypical inheritance helpers like <code>dojo.extend</code>, and <code>dojo.delegate</code> is extremely helpful.  There are also useful scope-manipulation functions - like the often-used <code>dojo.hitch</code> and the elegant <code>dojo.partial</code> - included for your convenience.</p>

<p>By far the most magical of functions is <code>dojo.hitch</code>, which creates a function that will only ever execute in a give scope.</p>

<pre><code>var foo = function() {
  var bar = function(arg) {
    console.log(&quot;was passed: &quot;, arg);
  }
  dojo.fadeOut( { 
    node: &quot;nodeById&quot;,
    onEnd: dojo.hitch(this,&quot;bar&quot;)
  }).play();
}</code></pre>

<p>The important thing to note here is the function created by hitch isn&#39;t executed immediately. We retain the scope of <code>this</code> in the example, calling a local function. There are a few great <a href="http://web.archive.org/web/20101122034134/http://dojocampus.org/content/tag/dojohitch/">dojo.hitch articles available on DojoCampus</a>, further exploring the potential of Javascript scope-manipulation.</p>

<p><code>dojo.partial</code> behaves similarly to <code>dojo.hitch</code>, though it assumes a global scope. Using hitch or partial, you can &#39;curry&#39; in JavaScript.</p>

<pre><code>var style = dojo.partial(dojo.style,&quot;someNodeId&quot;);
// anytime we execute this function, we&#39;ll style a node with id=&quot;someNodeId&quot;
style(&quot;opacity&quot;,0.5);
style(&quot;backgorundColor&quot;,&quot;#fff&quot;);
// it also acts as a getter:
var val = style(&quot;width&quot;);
console.log(val);</code></pre>

<p><code>dojo.mixin</code> simply mixes objects together from right to left:</p>

<pre><code>var obj = { a: &quot;foo&quot;, b: &quot;bar&quot; };
dojo.mixin(obj, { b: &quot;baz&quot;, c: &quot;bam&quot; });
console.log(obj);
// Object a=foo b=baz c=bam</code></pre>

<p>We lose the initial value of <code>b:</code>, having mixed in a new value.</p>

<p>To create a new object, and simply add properties to it, we can use <code>dojo.clone</code> (which also works on DOM Nodes):</p>

<pre><code>var obj = { a: &quot;foo&quot;, b: &quot;bar&quot; };
var newObj = dojo.clone(obj); 
dojo.mixin(newObj, { b: &quot;baz&quot;, c: &quot;bam&quot; });
console.log(obj, newObj);
// Object a=foo b=bar Object a=foo b=baz c=bam</code></pre>

<p><code>declare</code> is Dojo&#39;s Class creator. Without delving too deeply into its powerful API, we will say that it allows you to create reusable objects in an object-oriented manner, wrapped around JavaScript&#39;s prototypical nature. In the below example we create a <code>Person</code> class, and then create an instance of that <code>Person:</code>.</p>

<pre><code>dojo.declare(&quot;Person&quot;, null, {
  constructor: function(nick, name, age) {
    this.nick = nick;
    this.name = name;
    this.age = age;
    this.location = null;
  },
  setLocation:function(loc) {
    this.location = loc; 
  },
  getLocation:function() {
    return this.location;
  }
});
var dante = new Person(&quot;dante&quot;,&quot;Peter Higgins&quot;, 28);
dante.setLocation(&quot;Tennessee&quot;);
console.log(dante.getLocation());</code></pre>

<p>We can use mixins within <code>declare</code> to create new classes that inherit from other classes. Below we make an <code>Employee</code> class that inherits from <code>Person</code>. Employees will receive additional relevant fields:</p>

<pre><code>dojo.declare(&quot;Person&quot;, null, {
  constructor: function(nick, name, age) {
    this.nick = nick;
    this.name = name;
    this.age = age;
    this.location = null;
  },
  setLocation:function(loc) {
    this.location = loc; 
  },
  getLocation:function() {
    return this.location;
  }
});
dojo.declare(&quot;Employee&quot;, Person, {
  employeeId: 0,
  setId: function(id) {
    this.employeeId = id;
  }
})
// I am employed:
var dante = new Employee(&quot;dante&quot;,&quot;Peter Higgins&quot;, 28);
dante.setLocation(&quot;Tennessee&quot;);
dante.setId(42);
console.log(dante.employeeId);</code></pre>

<p>This way, we can create People and Employees, and differentiate them by their properties and/or methods.</p>

<p>Using <code>dojo.mixin</code>, we can add custom properties to instances of a class, as the instances are just decorated objects:</p>

<pre><code>dojo.declare(&quot;Person&quot;, null, {
  constructor: function(nick, name, age) {
    this.nick = nick;
    this.name = name;
    this.age = age;
    this.location = null;
  }
});
var dante = new Person(&quot;dante&quot;,&quot;Peter Higgins&quot;, 28);
dojo.mixin(dante, {
  employeeId: 42
});
console.log(dante.employeeId); // 42</code></pre>

<p>Using <code>dojo.extend</code>, we can modify the class directly. The extended properties will be available in all instances defined after the <code>extend()</code> occurred:</p>

<pre><code>dojo.declare(&quot;Person&quot;, null, {
  constructor: function(nick, name, age) {
    this.nick = nick;
    this.name = name;
    this.age = age;
    this.location = null;
  }
});
// add Eye-color functions to the Person Class
dojo.extend(Person, {
  eyeColor:&quot;adefault&quot;,
  setEyeColor: function(color) {
    this.eyeColor = color;
  }
});
var dante = new Person(&quot;dante&quot;,&quot;Peter Higgins&quot;, 28);
console.log(dante.eyeColor); // default
dante.setEyeColor(&quot;brown&quot;);
console.log(dante.eyeColor); // brown</code></pre>

<p>The flexibility provided by <code>dojo.declare</code>, <code>dojo.mixin</code> and <code>dojo.extend</code> is visible throughout the entire Dojo Toolkit. Every aspect of Dojo, Dijit, or DojoX can be extended, modified, reused or otherwise hacked up as you see fit. For instance, all Dijits inherit from a base class named <code>dijit._Widget</code>, which is subject to all the rules of standard <code>dojo.declare</code> extension points mentioned above.</p>			

<h2>Built-in namespacing support</h2> 

<p>Never worry about the location of your code again! The namespaces dojo, dijit, and dojox are all assumed to be sibling folders of each another, and are located ../namespace relative to dojo/. You can create a custom namespace to encapsulate your own code simply by adding a sibling folder:</p>

<pre><code>+ dojo-1.2/
+ dojo/
  + dojo.js
+ dijit/
+ dojox/
+ custom/
  + kernel.js</code></pre>

<p>All that is required to notify Dojo about your page is <code>dojo.provide()</code>. In dojo-1.2/custom/kernel.js:</p>

<pre><code>dojo.provide(&quot;custom.kernel&quot;);
dojo.require(&quot;dojo.io.iframe&quot;);
custom.init = function() {
  // comments get removed as part of the Build process
  console.log(&quot;I am custom code!&quot;);
}
dojo.addOnLoad(custom.init);</code></pre>

<p>In your pages, you simply <code>dojo.require</code> your package:</p>

<pre><code>dojo.require(&quot;custom.kernel&quot;);
</code></pre>

<p>If you&#39;d like your code tree to live outside the dojo-1.2 folder, simply register the path relative to <code>dojo.js</code>:</p>

<pre><code id="ex-structure-external-txt">+ dojo-1.2/
  + dojo/
    + dojo.js
  + dijit/
  + dojox/
+ custom/
  + templates/
    + Template.html
  + kernel.js</code></pre>

<p>Then in your HTML, register the module path. In this case, custom is two-folders below dojo.js:</p>

<pre><code>dojo.registerModulePath(&quot;custom&quot;, &quot;../../custom&quot;);
dojo.require(&quot;custom.kernel&quot;);
</code></pre>

<p>The most important item is locating <code>dojo.js</code> on your web server. Everything &quot;just works&quot; after that. Once the module path has been registered, you can access any file within that path with ease:</p>

<pre><code>dojo.require(&quot;dijit._Widget&quot;);
dojo.require(&quot;dijit._Templated&quot;);
dojo.declare(&quot;custom.Widget&quot;, [dijit._Widget, dijit._Templated], {
  templatePath: dojo.moduleUrl(&quot;custom&quot;, &quot;templates/Template.html&quot;);
});</code></pre>

<h2>Summary</h2>

<p>This tutorial barely scratches the surface of the tools Dojo provides for building your web application or enhancing your web site. To get more help, visit the <a href="http://dojotoolkit.org/">Dojo web site</a>. Not only is Dojo backed by a thriving community providing support (on the <a href="http://dojotoolkit.org/community/">Dojo Forums</a>, #dojo on irc.freenode.net, and <a href="http://dojocampus.org">DojoCampus</a>), it also has commercial support options from available <a href="http://sitepen.com/services/support.php">SitePen</a> for guaranteed results. Dojo also has the support and backing of a number of <a href="http://dojotoolkit.org/reference-guide/1.8/developer/contributors.html">prominent companies within the web industry</a>. We also encourage you to <a href="http://dojofoundation.org/about/">get involved</a> to help us continue to make Dojo even better.</p> 
