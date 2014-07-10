---
title: Getting to Know Mutation Observers
authors:
- tiffany-brown
intro: 'In this article, Tiffany Brown has a look at mutation observers, how they are different from mutation events, and how you can use them in your web applications.'
tags:
- javascript
- mutationobservers
- dom
cover: jpg
license: cc-by-3.0
---

As you develop more complex JavaScript-heavy applications or roll-your-own framework, you may find that you need to know when the DOM node tree has changed. You may want to know when a view has been loaded or unloaded. Or perhaps you are profiling an application, and want to measure how many nodes are affected by a DOM operation.

We used to do this with mutation events. Introduced by the DOM, Level 2 specification, the MutationEvent interface defined several events — such as `DOMNodeInserted` and `DOMAttrModified` — that would be fired by the browser when a node was added, removed, or deleted. Mutation events, however, are not without their problems.

## The problem with MutationEvents

Though an excellent idea in theory, in practice, mutation events had two major hurdles.

1. **MutationEvents are synchronous.** Events are fired when called, and may prevent other events in the queue from being fired. Add or remove enough nodes, and the application could lag or hang.
2. **Because they were events, they were implemented as events.** I know that reads like circular logic, but stick with me. Events must propagate through the DOM via capturing and sometimes bubbling. Capturing and bubbling can, in turn, trigger other event listeners that modify the DOM. And those can, in turn, cause more MutationEvents to fire, clogging the JavaScript thread — or worse, crashing the browser.

Sounds messy, right?

Indeed, mutation events are messy enough to have been deprecated in the [DOM, Level 3 specification][1]. But if mutation events are deprecated, we need something to replace them. That’s where mutation observers come in.

[1]: http://www.w3.org/TR/DOM-Level-3-Events/#events-mutationevents

## How Mutation Observers are different

Mutation observers are defined by the [DOM Standard][2], and differ from mutation events one key way: they are asynchronous. They do not fire every time an event occurs. Instead they:

[2]: http://dom.spec.whatwg.org/#mutation-observers

- Wait until other scripts or tasks complete;
- Report changes in a batch as an array of mutation records, rather than one-by-one; and
- Can observe all changes to a node, or only observe specific kinds of changes.

What’s more, because they _are not_ events, they don’t come with the implementation overhead of events. They’re less likely to freeze the UI or cause a browser crash as a result.

Let’s consider an example. In the code below, we’re appending 2500 paragraphs to a document fragment, and then adding that fragment as a child of an article element.

<figure class="figure" id="figure-1">
<div markdown="block">
	var docFrag = document.createDocumentFragment(),
		thismany = 2500,
		i=0,
		a = document.querySelector('article'),
		p;

	while (i < thismany) {
		// Creates a new <p> element if one doesn’t exists.
		// Clones the existing element if it does.
		p = (p === undefined) ? document.createElement('p') : p.cloneNode(false);
		docFrag.appendChild(p);
		i++;
	}

	a.appendChild(docFrag);
</div>
	<figcaption class="figure__caption">Figure 1: Adding 2500 paragraph nodes to a document using a document fragment</figcaption>
</figure>

Even though we’re adding 2500 paragraphs nodes, we’ve batched them into one DOM update by using a document fragment. Still, this bit of code generates 2500 `DOMNodeInserted` events, one for each paragraph. Our [DOMNodeInserted event handler][3] is invoked 2500 times. With a mutation observer, on the other hand, our callback is [invoked once][4]. One mutation observer can record multiple DOM operations.

[3]: {{ page.id }}/mutationevent.html
[4]: {{ page.id }}/mutationobserver.html

## Okay, but can I use them now?

Support for isn’t available everywhere just yet. Opera 15+, Firefox 14+ and Chrome 26+ support the `MutationObserver` interface. Internet Explorer 11 will also have support when it’s released, as will Safari 6.1. Safari 6.0 and Chrome versions 18 through 25 also support `MutationObserver`, but with a WebKit prefix (`WebKitMutationObserver`). You can detect support with the code shown below.

<figure class="figure" id="figure-2">
<div markdown="block">
	var canObserveMutation = 'MutationObserver' in window;
</div>
	<figcaption class="figure__caption">Figure 2: Detecting mutation observer support</figcaption>
</figure>

## So how do I use `MutationObserver`?

The good news is that mutation observers are easy to use. First create an observer object using the MutationObserver constructor as shown in Figure 3. The constructor requires a single parameter, a callback function.

<figure class="figure" id="figure-3">
<div markdown="block">
	var observer, callback;
	callback = function(recordqueue){
		// do something to each record in the recordqueue array.
	}
	observer = new MutationObserver(callback);
</div>
	<figcaption class="figure__caption">Figure 3: Creating a mutation observer</figcaption>
</figure>

Our callback function will receive an array of `MutationRecord` objects as an argument. Each `MutationRecord` object summarizes a change to the node tree. We’ll discuss mutation records in more detail later.

Next, you’ll need to define a node to observe, and determine what kinds of DOM changes you’d like to keep an eye on. For this, we use the `observe` method. Its first parameter must be a node, and its second must be a [dictionary][5] of options (Figure 4). In the example below, we’ll watch an article element for changes to its children or attributes.

[5]: http://dev.w3.org/2006/webapi/WebIDL/#dfn-dictionary

<figure class="figure" id="figure-4">
<div markdown="block">
	var options = {
		'childList': true,
		'attributes':true
	},
	article = document.querySelector('article');

	observer.observe(article, options);
</div>
	<figcaption class="figure__caption">Figure 4: Determining which node and mutation types to track</figcaption>
</figure>

The options parameter may include the following properties and values.

- `childList` true or false; observe mutations to the target node’s children.
- `attributes` true or false; observe changes to the attributes of a target node.
- `characterData` true or false; Observe changes to the data or text content of the target node.
- `subtree` true or false; observe mutations to all descendants of the target, including child nodes and “grandchild nodes” (or the child nodes of child nodes).
- `attributeOldValue` true or false; if the attributes property is true, and you’d like to capture the value of the attribute before the mutation is recorded.
- `characterDataOldValue` true or false; if the characterData property is true, and you’d like to capture the value of the data before the mutation is recorded.
- `attributeFilter` a list of attributes to observe, enclosed in square brackets (example: `['class','src']`);

Either the `childList`, `attributes`, or `characterData` property _must_ be included, and set to `true` in order to observe a mutation.

To stop observing mutations, use the `disconnect()` method (`observer.disconnect()`). Using this method prevents further invocation of the callback function. The `takeRecord` method (`observer.takeRecord()`) clears the record queue. To resume watching mutations, just re-invoke the `observe` method.

I mentioned above that the mutation callback receives an array of mutation records as an argument. Let’s take a look at what a mutation record is.

## Mutation records

A mutation record is an object that reports a single change to the document tree. Mutation record objects are defined by the `MutationRecord` interface, and contain the following items.

- `type` the type of of mutation observed, either `attribute`, `characterData` or `childList`.
- `target` the node affected by the mutation.
- `addedNodes` a NodeList of elements, attributes, and text nodes added to the tree.
- `removedNodes` a NodeList of elements, attributes, and text nodes removed from the tree.
- `previousSibling` returns the previous sibling node, or null if there is no previous sibling.
- `nextSibling` returns the next sibling node, or null if there is no next sibling.
- `attributeName` The name of the attribute or attributes changed. If `attributeFilter` option was set, it will only return the filtered node.
- `oldValue` the pre-mutation value in the case of attribute or `characterData` mutations, and `null` for `childList` mutations.

Now that we’ve covered the syntax of mutation observers and mutation records, let’s look at some examples.

## Observing the addition or removal of child nodes

Observing the addition or removal of child nodes is pretty straightforward. We’ll create a new object and pass a callback. We’ll also observe our document’s body, and all changes to its children. Figure 5 shows how.

<figure class="figure" id="figure-5">
<div markdown="block">
	var callback = function(allmutations) {

		// Since allmutations is an array,
		// we can use JavaScript Array methods.
		allmutations.map( functions(mr) {
			// Log the type of mutation
			var mt = 'Mutation type: ' + mr.type;
			// Log the node affected.
			mt += 'Mutation target: ' + mr.target;
			console.log( mt );
		});

	},
	mo = new MutationObserver(callback),
	options = {
		// Required, and observes additions
		// or deletion of child nodes
		'childList': true,
		// Observes the addition or deletion
		// of “grandchild” nodes
		'subtree': true
	}
	mo.observe(document.body, options);
</div>
	<figcaption class="figure__caption">Figure 5: How to observe the addition or removal of child nodes to a document</figcaption>
</figure>

Notice that we’ve included the `subtree` option, and set it to `true`. Doing so captures when [children are appended][6] to the document body (example: `document.body.appendChild(el)`), _and_ when they are appended to a child of the body (`document.getElementById('my_element').appendChild(el)`). If, instead, `subtree` was `false` or missing, the observer would only keep track of elements appended to the body.

[6]: {{ page.id }}/addchildren.html

It’s also possible to observe mutations to [document fragments][7]. Just pass the fragment as the first parameter to the `observe` method.

[7]: {{ page.id }}/docfrag.html

## Observing changes to attributes

Observing changes to attributes works much the same way. The main difference is that you must add `'attributes': true` to the options dictionary. If you also want to record the previous attribute value, set the `attributeOldValue` option to `true` ([view a demo][8]).

[8]: {{ page.id }}/attributes.html

<figure class="figure" id="figure-6">
<div markdown="block">
	var callback = function(allmutations){
		// Since allmutations is an array,
		// we can use array functions
		allmutations.map( functions(mr){
			// Log the previous value of the attribute.
			var attr = 'Previous attribute value: ' + mr.oldValue;
			console.log(attr);
		});
	},
	element = document.getElementById('my_el'),
	mo = new MutationObserver(callback),
	options = {
		// Required
		'attributes': true,
		// Captures the previous attribute value
		'attributeOldValue': true
	}

	mo.observe(element, options);
</div>
	<figcaption class="figure__caption">Figure 6: How to observe the changes attribute values</figcaption>
</figure>

The example above will capture all changes to any attribute of our target element, including deletions. As you can see [in the demo][9], each time the value of an attribute changes, a new mutation record gets added to the queue. But what if we only wanted to observe changes to _particular_ attributes?

[9]: {{ page.id }}/attributes.html

### Filtering which attributes are observed

We can limit the which attributes we’d like to observe by adding the `attributeFilter` property to our options (Figure 7). The value of `attributeFilter` must be a comma-separated list of attributes to track, enclosed in square brackets (`[` and `]`).

<figure class="figure" id="figure-7">
<div markdown="block">
	var options = {
		'attributes': true,
		'attributeOldValue': true,
		// Only captures changes to the class attribute
		'attributeFilter': ['class']
	}

	mo.observe(element, options);
</div>
	<figcaption class="figure__caption">Figure 7: Filtering which attributes we observe</figcaption>
</figure>

Setting that property means that a mutation record will be generated _only_ for changes to the value of the class attribute ([view a demo][10]).

[10]: {{ page.id }}/attributes-filtered.html

## Learn More

To learn more about mutation observers, try the following resources.

- [Mutation observers from the WHATWG][11]
- [Mutation Observers vs Mutation Events][12] from the Mutation Summary project.
- [MutationReplacement][13], from the W3C WebApps wiki, which offers historical and technical context

[11]: http://dom.spec.whatwg.org/#mutation-observers
[12]: http://code.google.com/p/mutation-summary/wiki/DOMMutationObservers
[13]: http://www.w3.org/2008/webapps/wiki/MutationReplacement

_Cover photo by [gerlos][14]. Used under a Attribution-ShareAlike 2.0 Generic license._

[14]: http://www.flickr.com/photos/gerlos/3119891607
