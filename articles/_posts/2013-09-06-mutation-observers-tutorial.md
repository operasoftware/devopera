---
title: Getting to Know Mutation Observers
authors:
- tiffany-brown
intro: 'In this article, Tiffany Brown has a look at mutation observers, how they are different from mutation events, and how you can use them in your web applications.'
layout: article
---
<p>As you develop more complex JavaScript-heavy applications or roll-your-own framework, you may find that you need to know when the DOM node tree has changed. You may want to know when a view has been loaded or unloaded. Or perhaps you are profiling an application, and want to measure how many nodes are affected by a DOM operation.</p>

<p>We used to do this with mutation events. Introduced by the DOM, Level 2 specification, the MutationEvent interface defined several events &#8212; such as <code>DOMNodeInserted</code> and <code>DOMAttrModified</code> &#8212; that would be fired by the browser when a node was added, removed, or deleted. Mutation events, however, are not without their problems.</p>

<h2>The problem with MutationEvents</h2>

<p>Though an excellent idea in theory, in practice, mutation events had two major hurdles.</p>

<ol style="list-style-type:decimal">
<li><b>MutationEvents are synchronous.</b> Events are fired when called, and may prevent other events in the queue from being fired.  Add or remove enough nodes, and the application could lag or hang.</li>

<li><b>Because they were events, they were implemented as events.</b> I know that reads like circular logic, but stick with me. Events must propagate through the DOM via capturing and sometimes bubbling. Capturing and bubbling can, in turn, trigger other event listeners that modify the DOM. And those can, in turn, cause more MutationEvents to fire, clogging the JavaScript thread &#8212; or worse, crashing the browser.</li>
</ol>

<p>Sounds messy, right?</p>

<p>Indeed, mutation events are messy enough to have been deprecated in the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#events-mutationevents">DOM, Level 3 specification</a>. But if mutation events are deprecated, we need something to replace them. That's where mutation observers come in.</p>

<h2> How Mutation Observers are different</h2>

<p>Mutation observers are defined by the <a href="http://dom.spec.whatwg.org/#mutation-observers">DOM Standard</a>, and differ from mutation events one key way: they are asynchronous. They do not fire every time an event occurs. Instead they:</p>

<ul>
<li>wait until other scripts or tasks complete;</li>
<li>report changes in a batch as an array of mutation records, rather than one-by-one; and</li>
<li>can observe all changes to a node, or only observe specific kinds of changes.</li>
</ul>

<p>What's more, because they <em>are not</em> events, they don't come with the implementation overhead of events. They're less likely to freeze the UI or cause a browser crash as a result.</p>

<p>Let's consider an example. In the code below, we're appending 2500 paragraphs to a document fragment, and then adding that fragment as a child of an article element.</p>

<div id="DOMNodeInserted">
<pre>var docFrag  = document.createDocumentFragment(),
    thismany = 2500,
    i=0,
    a = document.querySelector('article'),
    p;

while ( i < thismany) {
    // Creates a new p element if one doesn't exists.
    // Clones the existing element if it does.
    p = (p === undefined) ? document.createElement('p') : p.cloneNode(false);
    docFrag.appendChild(p);
    i++;
}

a.appendChild( docFrag );
</pre>
<p class="caption">Figure 1: Adding 2500 paragraph nodes to a document using a document fragment.</p>
</div>

<p>Even though we're adding 2500 paragraphs nodes, we've batched them into one DOM update by using a document fragment. Still, this bit of code generates 2500 <code>DOMNodeInserted</code> events, one for each paragraph. Our <a href="mutationobserver-mutationevent.html">DOMNodeInserted event handler</a> is invoked 2500 times. With a mutation observer, on the other hand, our callback is <a href="mutationobserver-mutationobserver.html">invoked once</a>. One mutation observer can record multiple DOM operations.</p>

<h2> Okay, but can I use them now?</h2>

<p>Support for isn't available everywhere just yet. Opera 15+, Firefox 14+ and Chrome 26+ support the <code>MutationObserver</code> interface. Internet Explorer 11 will also have support when it's released, as will Safari 6.1. Safari 6.0 and Chrome versions 18 through 25 also support <code>MutationObserver</code>, but with a WebKit prefix (<code>WebKitMutationObserver</code>). You can detect support with the code <a href="#detectMutationObserverSupport">shown below</a>.</p>

<div id="detectMutationObserverSupport">
<pre>var canObserveMutation = 'MutationObserver' in window;</pre>
<p class="caption">Figure 2: Detecting mutation observer support.</p>
</div>

<h2> So how do I use 'MutationObserver'?</h2>

<p>The good news is that mutation observers are easy to use. First create an observer object using the MutationObserver constructor as shown in <a href="#MutationObserver">Figure 3</a>. The constructor requires a single parameter, a callback function.</p>

<div id="MutationObserver">
<pre>var observer, callback;
callback = function( recordqueue ){
    // do something to each record in the recordqueue array.
}
observer = new MutationObserver( callback );</pre>
<p class="caption">Figure 3: Creating a mutation observer.</p>
</div>

<p>Our callback function will receive an array of <code>MutationRecord</code> objects as an argument. Each <code>MutationRecord</code> object summarizes a change to the node tree. We'll discuss <a href="#mutationrecords">mutation records</a> in more detail later.</p>

<p>Next, you'll need to define a node to observe, and determine what kinds of DOM changes you'd like to keep an eye on. For this, we use the <code>observe</code> method. Its first parameter must be a node, and its second must be a <a href="http://dev.w3.org/2006/webapi/WebIDL/#dfn-dictionary">dictionary</a> of options (<a href="#usingobservefunction">Figure 4</a>). In the example below, we'll watch an article element for changes to its children or attributes.</p>

<div id="usingobservefunction">
<pre>var  options = {
    'childList': true,
    'attributes':true
},
article = document.querySelector( 'article' );

observer.observe( article, options );</pre>
<p class="caption">Figure 4: Determining which node and mutation types to track</p>
</div>

<p>The options parameter may include the following properties and values.

<dl>
	<dt><code>childList</code></dt>
		<dd>true or false; observe mutations to the target node's children. </dd>

	<dt><code>attributes</code></dt>
		<dd>true or false; observe changes to the attributes of a target node.</dd>

	<dt><code>characterData</code></dt>
		<dd>true or false; Observe changes to the data or text content of the target node. </dd>

	<dt><code>subtree</code></dt>
		<dd>true or false; observe mutations to all descendants of the target, including child nodes and "grandchild nodes" (or the child nodes of child nodes).</dd>

	<dt><code>attributeOldValue</code></dt>
		<dd>true or false; if the attributes property is true, and you'd like to capture the value of the attribute before the mutation is recorded.</dd>

	<dt><code>characterDataOldValue</code></dt>
		<dd>true or false; if the characterData property is true, and you'd like to capture the value of the data before the mutation is recorded.</dd>

	<dt><code>attributeFilter</code></dt>
	<dd>a list of attributes to observe, enclosed in square brackets (example: <code>['class','src']</code>);</dd>
</dl>


<p>Either the <code>childList</code>, <code>attributes</code>, or <code>characterData</code> property <em>must</em> be included, and set to <code>true</code> in order to observe a mutation.</p>

<p>To stop observing mutations, use the <code>disconnect()</code> method (<code>observer.disconnect()</code>). Using this method prevents further invocation of the callback function. The <code>takeRecord</code> method (<code>observer.takeRecord()</code>) clears the record queue. To resume watching mutations, just re-invoke the <code>observe</code> method.</p>

<p>I mentioned above that the mutation callback receives an array of mutation records as an argument. Let's take a look at what a mutation record is.</p>

<h2 id="mutationrecords">Mutation records</h2>

<p>A mutation record is an object that reports a single change to the document tree. Mutation record objects are defined by the <code>MutationRecord</code> interface, and contain the following items.</p>

<dl>
	<dt><code>type</code></dt>
		<dd>the type of of mutation observed, either <code>attribute</code>, <code>characterData</code> or <code>childList</code>.</dd>

	<dt><code>target</code></dt>
		<dd>the node affected by the mutation. </dd>

	<dt><code>addedNodes</code></dt>
		<dd>a NodeList of elements, attributes, and text nodes added to the tree.</dd>

	<dt><code>removedNodes</code></dt>
		<dd>a NodeList of elements, attributes, and text nodes removed from the tree.</dd>

	<dt><code>previousSibling</code></dt>
		<dd>returns the previous sibling node, or null if there is no previous sibling.</dd>

	<dt><code>nextSibling</code></dt>
		<dd>returns the next sibling node, or null if there is no next sibling.</dd>

	<dt><code>attributeName</code></dt>
		<dd>The name of the attribute or attributes changed. If <code>attributeFilter</code> option was set, it will only return the filtered node.</dd>
	<dt><code>oldValue</code></dt>
	<dd>the pre-mutation value in the case of attribute or <code>characterData</code> mutations, and <code>null</code> for <code>childList</code> mutations.</dd>
</dl>

<p>Now that we've covered the syntax of mutation observers and mutation records, let's look at some examples.</p>

<h2>Observing the addition or removal of child nodes</h2>

<p>Observing the addition or removal of child nodes is pretty straightforward. We'll create a new object and pass a callback. We'll also observe our document's body, and all changes to its children. <a href="#watchchildnodes">Figure 5</a> shows how.</p>

<div id="watchchildnodes">
<pre>var callback = function(allmutations){

    // Since allmutations is an array, we can use JavaScript Array methods.
    allmutations.map( functions(mr){
    	var mt = 'Mutation type: ' + mr.type;  // log the type of mutation
    	mt += 'Mutation target: ' + mr.target; // log the node affected.
    	console.log( mt );
    });

},
mo = new MutationObserver(callback),
options = {
    // required, and observes additions or deletion of child nodes.
    'childList': true,
    // observes the addition or deletion of "grandchild" nodes.
    'subtree': true
}
mo.observe(document.body, options);</pre>
<p class="caption">Figure 5: How to observe the addition or removal of child nodes to a document.</p>
</div>

<p>Notice that we've included the <code>subtree</code> option, and set it to <code>true</code>. Doing so captures when <a href="mutationobserver-addchildren.html">children are appended</a> to the document body (example: <code>document.body.appendChild(el)</code>), <em>and</em> when they are appended to a child of the body (<code>document.getElementById('my_element').appendChild(el)</code>). If, instead, <code>subtree</code> was <code>false</code> or missing, the observer would only keep track of elements appended to the body.</p>

<p>It's also possible to observe mutations to <a href="mutationobserver-docfrag.html">document fragments</a>. Just pass the fragment as the first parameter to the <code>observe</code> method.</p>

<h2>Observing changes to attributes</h2>

<p>Observing changes to attributes works much the same way. The main difference is that you must add <code>'attributes': true</code> to the options dictionary. If you also want to record the previous attribute value, set the <code>attributeOldValue</code> option to <code>true</code> (<a href="mutationobserver-attributes.html">view a demo</a>).</p>

<div id="watchchildnodes">
<pre>var callback = function(allmutations){
    // Since allmutations is an array, we can use array functions.
    allmutations.map( functions(mr){
        // log the previous value of the attribute.
    	var attr = 'Previous attribute value: ' + mr.oldValue;
    	console.log(attr);
    });
},
element = document.getElementById('my_el'),
mo = new MutationObserver(callback),
options = {
    'attributes': true,        // required
    'attributeOldValue': true  // captures the previous attribute value.
}

mo.observe(element, options);</pre>
<p class="caption">Figure 6: How to observe the changes attribute values.</p>
</div>


<p>The example above will capture all changes to any attribute of our target element, including deletions. As you can see <a href="mutationobserver-attributes.html">in the demo</a>, each time the value of an attribute changes, a new mutation record gets added to the queue. But what if we only wanted to observe changes to <em>particular</em> attributes?</p>


<h3>Filtering which attributes are observed</h3>

<p>We can limit the which attributes we'd like to observe by adding the <code>attributeFilter</code> property to our options (<a href="#filteringattributes">Figure 7</a>). The value of <code>attributeFilter</code> must be a comma-separated list of attributes to track, enclosed in square brackets (<code>[</code> and <code>]</code>).</p>

<div id="watchchildnodes">
<pre>var options = {
    'attributes': true,
    'attributeOldValue': true,
    'attributeFilter': ['class'] // only captures changes to the class attribute
}

mo.observe(element, options);</pre>
<p class="caption">Figure 7: Filtering which attributes we observe.</p>
</div>

<p>Setting that property means that a mutation record wil be generated <em>only</em> for changes to the value of the class attribute (<a href="mutationobserver-attributes-filtered.html">view a demo</a>).</p>

<h2>Learn More</h2>

<p>To learn more about mutation observers, try the following resources.</p>

<ul>
<li><a href="http://dom.spec.whatwg.org/#mutation-observers">Mutation observers from the WHATWG</a></li>
<li><a href="http://code.google.com/p/mutation-summary/wiki/DOMMutationObservers">Mutation Observers vs Mutation Events</a> from the Mutation Summary project.</li>
<li><a href="http://www.w3.org/2008/webapps/wiki/MutationReplacement">MutationReplacement</a>, from the W3C WebApps wiki, which offers historical and technical context</li>
</ul>

<p><em>Cover photo by <a href="http://www.flickr.com/photos/gerlos/3119891607">gerlos</a>. Used under a Attribution-ShareAlike 2.0 Generic license.</em></p>
