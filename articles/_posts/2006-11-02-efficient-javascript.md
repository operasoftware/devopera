---
title: Efficient JavaScript
authors:
- mark-wilton
intro: 'Traditionally, a Web page would not contain much scripting, or at least, not much that would affect the performance of that Web page. However, as Web pages become more like applications, the performance of scripts is having a bigger effect. With more and more applications being developed using Web technologies, improving the performance of scripts is becoming increasingly important.'
tags:
- javascript
license: cc-by-nc-sa-2.5
---

Traditionally, a Web page would not contain much scripting, or at least, not much that would affect the performance of that Web page. However, as Web pages become more like applications, the performance of scripts is having a bigger effect. With more and more applications being developed using Web technologies, improving the performance of scripts is becoming increasingly important.

With a desktop application, a compiler is normally used to convert the source into the final binary. The compiler can take its time, and optimize as much as possible for good performance of the final application. Web applications do not have that luxury. Since they need to run on multiple browsers, platforms, and architectures, they cannot be completely precompiled. The browser has to do the interpretation and compilation each time it retrieves a script, and yet the final application has to run as smoothly as a desktop application, and load quickly as well. It is expected to run on a large variety of devices, from an ordinary desktop computer, to a mobile phone.

Browsers are fairly good at achieving this, and Opera has one of the fastest scripting engines of any current browser. However, browsers do have their limits, and that is where the Web developer has to take over. Ensuring that a Web application runs as fast as possible can be a simple matter of trading one type of loop for another, making one combined style change instead of three, or adding only the script that will actually be used.

This article will show several simple changes that can be made to improve the performance of your Web applications. Areas covered will be ECMAScript - the core language used by JavaScript, DOM, and document loading.

## Quick Tips

### ECMAScript

- [Avoid using `eval` or the `Function` constructor](#avoideval)
	- [Rewrite that `eval`](#rewriteeval)
	- [If you want a function, use a function](#usefunction)
- [Avoid using `with`](#avoidwith)
- [Don't use `try-catch-finally` inside performance-critical functions](#trycatch)
- [Isolate uses of `eval` and `with`](#isolate)
- [Avoid using global variables](#avoidglobal)
- [Beware of implicit object conversion](#implicitconversion)
- [Avoid `for-in` in performance-critical functions](#forin)
- [Use strings accumulator-style](#stringaccumulator)
- [Primitive operations can be faster than function calls](#primitiveoperator)
- [Pass functions, not strings, to `setTimeout()` and `setInterval()`](#timeouts)

### DOM

- [Repaint and reflow](#reflow)
	- [Keeping the number of reflows to a minimum](#minimumreflow)
	- [Minimal reflow](#minimalreflow)
- [Document tree modification](#modifyingtree)
- [Modifying an invisible element](#invisibleelement)
- [Taking measurements](#measuring)
- [Making several style changes at once](#stylechanges)
- [Trading smoothness for speed](#smoothspeed)
- [Avoid inspecting large numbers of nodes](#manynodes)
- [Improve speed with XPath](#xpath)
- [Avoid modifications while traversing the DOM](#traversemodify)
- [Cache DOM values in script variables](#cachevalues)

### Document loading

- [Avoid keeping alive references from one document to another](#docreferences)
- [Fast history navigation](#fasthistory)
- [Use XMLHttpRequest](#xmlhttprequest)
- [Create `<script>` elements dynamically](#dynamicscript)
- [`location.replace()` keeps the history under control](#locationnreplace)

## ECMAScript

### Avoid using `eval` or the `Function` constructor {#avoideval}

Each time `eval` or the `Function` constructor is called on a string representing source code, the script engine must start the machinery that converts the source code to executable code. This is usually expensive for performance - easily a hundred times more expensive than a simple function call, for example.

The `eval` function is especially bad, as the contents of the string passed to `eval` cannot be known in advance. Since the code is interpreted in the context of the call to `eval` this means that the compiler cannot optimise the surrounding context, and the browser is left to interpret much of the surrounding code at runtime. This adds an additional performance impact.

The `Function` constructor is not quite as bad as `eval`, since using it does not affect the code surrounding the use, but it can still be quite slow.

#### Rewrite that `eval` {#rewriteeval}

`eval` is not only inefficient, it is almost always unnecessary. In many cases, it is used because information has been provided as a string, and it is assumed that eval is the way to use that information. The following example shows a common mistake:

	function getProperty(oString) {
		var oReference;
		eval('oReference = test.prop.' + oString);
		return oReference;
	}

This code performs exactly the same function, but avoids using `eval`:

	function getProperty(oString) {
		return test.prop[oString];
	}

The code that does not use `eval` performs around 95% faster than the original in Opera 9, Firefox, and Internet Explorer, and around 85% faster in Safari. (Note that this does not include the time needed to call the function itself.)

#### If you want a function, use a function {#usefunction}

This example shows a common use for the `Function` constructor:

	function addMethod(oObject, oProperty, oFunctionCode) {
		oObject[oProperty] = new Function(oFunctionCode);
	}
	addMethod(
		myObject,
		'rotateBy90',
		'this.angle = (this.angle + 90) % 360'
	);
	addMethod(
		myObject,
		'rotateBy60',
		'this.angle = (this.angle + 60) % 360'
	);

This code provides the same functionality, but avoids using the `Function` constructor. This is done by creating an anonymous function instead, which can be referenced just like any other object:

	function addMethod(oObject, oProperty, oFunction) {
		oObject[oProperty] = oFunction;
	}
	addMethod(
		myObject,
		'rotateBy90',
		function() {
			this.angle = (this.angle + 90) % 360;
		}
	);
	addMethod(
		myObject,
		'rotateBy60',
		function() {
			this.angle = (this.angle + 60) % 360;
		}
	);

### Avoid using `with` {#avoidwith}

Although often seen as a convenience for the developer, `with` can be expensive for performance. The `with` construct introduces an extra scope for the script engine to search through whenever a variable is referenced. This alone produces a minor performance decrease. However, the contents of that scope are not known at compile time, meaning that the compiler cannot optimize for it, in the same way as it can with normal scopes (such as those created by functions).

A more efficient approach that also presents a convenience for the developer, is to reference the object using a normal variable, and then access the properties from that instead. This will obviously only work if the properties are not literal types, such as a string or boolean.

Consider this code:

	with(test.information.settings.files) {
		primary = 'names';
		secondary = 'roles';
		tertiary = 'references';
	}

This will be more efficient for the script engine:

	var testObject = test.information.settings.files;
	testObject.primary = 'names';
	testObject.secondary = 'roles';
	testObject.tertiary = 'references';

### Don't use `try-catch-finally` inside performance-critical functions {#trycatch}

The `try-catch-finally` construct is fairly unique. Unlike other constructs, it creates a new variable in the current scope at runtime. This happens each time the `catch` clause is executed, where the caught exception object is assigned to a variable. This variable does not exist inside other parts of the script even inside the same scope. It is created at the start of the `catch` clause, then destroyed at the end of it.

Because this variable is created and destroyed at runtime, and represents a special case in the language, some browsers do not handle it very efficiently, and placing a catch handler inside a performance critical loop may cause performance problems when exceptions are caught.

If possible, exception handling should be done at a higher level in the script where it may not occur so frequently, or avoided by checking if the desired action is allowed first. The following example shows a loop that may throw several exceptions, if the desired properties do not exist:

	var oProperties = [
		'first',
		'second',
		'third',
		…
		'nth'
	];
	for(var i = 0; i < oProperties.length; i++) {
		try {
			test[oProperties[i]].someproperty = somevalue;
		} catch(e) {
			…
		}
	}

In many cases, the `try-catch-finally` construct could be moved so that it surrounds the loop. This does change the semantics a little, since if an exception is thrown, the loop will be halted, although code following it will continue to run:

	var oProperties = [
		'first',
		'second',
		'third',
		…
		'nth'
	];
	try {
		for(var i = 0; i < oProperties.length; i++) {
			test[oProperties[i]].someproperty = somevalue;
		}
	} catch(e) {
		…
	}

In some cases, the `try-catch-finally` construct could be avoided completely by checking for properties, or using another appropriate test:

	var oProperties = [
		'first',
		'second',
		'third',
		…
		'nth'
	];
	for(var i = 0; i < oProperties.length; i++) {
		if(test[oProperties[i]]) {
			test[oProperties[i]].someproperty = somevalue;
		}
	}

### Isolate uses of `eval` and `with` {#isolate}

Since these constructs can impact performance so significantly, their use should be kept to as little as possible, but there are some times when you may need to use them. If a function is repeatedly called, or a loop is repeatedly evaluated, then it is best to avoid these constructs within it. They are best suited to code that is executed only once, or only a few times, and not within performance critical code.

Wherever possible, isolate them from other code, so that they do not affect its performance. This could mean, for example, putting them inside a top-level function, or running them once, and storing their result, so you can use the result again later without having to rerun the code.

Although not so important, the `try-catch-finally` construct can have performance impacts in some browsers, including Opera, so you may also wish to isolate that in the same way.

### Avoid using global variables {#avoidglobal}

It can be tempting to create variables in the global scope, simply because that is easy to do. However, there are several reasons why this can make scripts run more slowly.

To begin with, if code inside a function or another scope references that variable, the script engine has to step up through each scope in turn until it reaches the global scope. A variable in the local scope will be found more quickly.

Variables in the global scope also persist through the life of the script. In the local scope, they are destroyed when the local scope is lost. The memory they use can then be freed by the garbage collector.

Lastly, the global scope is shared by the window object, meaning that it is in essence two scopes, not just one. In the global scope, variables are always located using their name, instead of using an optimized predefined index, as they can be in local scopes. A global variable will take longer for the script engine to find, as a result.

Functions are also usually created in the global scope. This means that functions that call other functions, that in turn call other functions, increase the number of times the script engine has to step back to the global scope to locate them.

Take this simple example, where i and s are in the global scope, and the function uses those global variables:

	var i, s = '';
	function testfunction() {
		for(i = 0; i < 20; i++) {
			s += i;
		}
	}
	testfunction();

This alternative version performs measurably faster. In most current browsers, including Opera 9, and the latest versions of Internet Explorer, Firefox, Konqueror and Safari, execution is about 30% faster than the original.

	function testfunction() {
		var i, s = '';
		for(i = 0; i < 20; i++) {
			s += i;
		}
	}
	testfunction();

### Beware of implicit object conversion {#implicitconversion}

Literals, such as strings, numbers, and boolean values, have two representations within ECMAScript. Each of them can be created as either a value or an object. For example, a string value is created simply by saying `var oString = 'some content';`, while an equivalent string object is created by saying `var oString = new String('some content');`.

Any properties and methods are defined on the string object, not the value. When you reference a property or method of a string value, the ECMAScript engine must implicitly create a new string object with the same value as your string, before running the method. This object is only used for that one request, and will be recreated next time you attempt to use a method of the string value.

This example requires the script engine to create 21 new string objects, once for each time the length property is accessed, and once each time the charAt method is called:

	var s = '0123456789';
	for(var i = 0; i < s.length; i++) {
		s.charAt(i);
	}

This equivalent example creates just a single object, and will perform better as a result:

	var s = new String('0123456789');
	for(var i = 0; i < s.length; i++) {
		s.charAt(i);
	}

If your code calls methods of literal values very often, you should consider converting them into objects instead, as in the previous example.

Note that although most of the points in this article are relevant to all browsers, this particular optimization is aimed mainly at Opera. It may also affect some other browsers, but can be a little slower in Internet Explorer and Firefox.

### Avoid `for-in` in performance-critical functions {#forin}

The `for-in` loop has its place, but is often misused, when a normal `for` loop would be more appropriate. The `for-in` loop requires the script engine to build a list of all the enumerable properties, and check for duplicates in that list, before it can start the enumeration.

Very often, the script itself already knows what properties must be enumerated. In many cases, a simple `for` loop could be used to step through those properties, especially if they are named using sequential numbers, such as with an array, or an object that is given properties to make it appear to be an array (an example would be a NodeList object created by DOM).

This is an example of incorrect use of a `for-in` loop:

	var oSum = 0;
	for(var i in oArray) {
		oSum += oArray[i];
	}

A `for` loop would be more efficient:

	var oSum = 0;
	var oLength = oArray.length;
	for(var i = 0; i < oLength; i++) {
		oSum += oArray[i];
	}

### Use strings accumulator-style {#stringaccumulator}

String concatenation can be an expensive process. Using the `+` operator does not wait for the result to be assigned to a variable. Instead, it creates a new string in memory, assigns its result to that string, and it is that new string that may be assigned to a variable. The following code shows a common assignment of a concatenated string:

	a += 'x' + 'y';

That code would be evaluated by firstly creating a temporary string in memory, assigning the concatenated value of 'xy', then concatenating that with the current value of a, and finally assigning the resulting value of that to a. The following code uses two separate commands, but because it assigns directly to a each time, the temporary string is not used. The resulting code is around 20% faster in many current browsers, and potentially requires less memory, as it does not need to temporarily store the concatenated string:

	a += 'x';
	a += 'y';

### Primitive operations can be faster than function calls {#primitiveoperator}

Although not significant in normal code, there is a potential for improved speed in performance critical loops and functions, by replacing function calls with an equivalent primitive operation. An example would be the push method of an array, that is slower than simply adding an item to the index at end of the array. Another example would be methods of the Math object, where in most cases, simple mathematical operators would be more appropriate.

	var min = Math.min(a,b);
	A.push(v);

These alternatives provide the same functionality, while performing better:

	var min = a < b ? a : b;
	A[A.length] = v;

### Pass functions, not strings, to `setTimeout()` and `setInterval()` {#timeouts}

The `setTimeout()` and `setInterval()` methods are very closely related to `eval`. If they are passed a string, then after the specified delay, that string will be evaluated in exactly the same way as with `eval`, including the associated performance impact.

These methods can, however, accept a function as the first parameter, instead of a string. This function will be run after the same delay, but can be interpreted and optimized during compilation, with improved performance as a result. Typical examples of using strings as the parameter would be these:

	setInterval('updateResults()', 1000);
	setTimeout('x+=3; prepareResult(); if(!hasCancelled){ runmore() }', 500);

In the first case, the function can simply be referenced directly. In the second case, an anonymous function can be wrapped around the code:

	setInterval(updateResults, 1000);
	setTimeout(function () {
		x += 3;
		prepareResult();
		if(!hasCancelled) {
			runmore();
		}
	}, 500);

Note that in all cases, the timeout or interval delay may not be honoured exactly. In general, browsers will take a little longer than the requested delay. Some may compensate for that with intervals by firing the next one slightly early instead. Others will simply try to wait for the correct amount of time every time. Factors such as CPU speed, thread states, and JavaScript load will affect the accuracy of the delay. Most browsers will be unable to give a delay of 0 ms, and may impose a minimum delay, typically between 10 and 100 ms.

## DOM

In general, there are three main things that can cause DOM to perform slowly. The first is when a script performs some extensive DOM manipulation, such as building a new tree from some retrieved data. The second is when a script triggers too many reflows or repaints. The third is when a script takes a slow approach to locating a desired node in the DOM tree.

The second and third are the most common, and the most significant, so these will be dealt with first.

### Repaint and reflow {#reflow}

Repaint - also known as redraw - is what happens whenever something is made visible when it was not previously visible, or vice versa, without altering the layout of the document. An example would be when adding an outline to an element, changing the background color, or changing the visibility style. Repaint is expensive in terms of performance, as it requires the engine to search through all elements to determine what is visible, and what should be displayed.

A reflow is a more significant change. This will happen whenever the DOM tree is manipulated, whenever a style is changed that affects the layout, whenever the className property of an element is changed, or whenever the browser window size is changed. The engine must then reflow the relevant element to work out where the various parts of it should now be displayed. Its children will also be reflowed to take the new layout of their parent into account. Elements that appear after the element in the DOM will also be reflowed to calculate their new layout, as they may have been moved by the initial reflows. Ancestor elements will also reflow, to account for the changes in size of their children. Finally, everything is repainted.

Reflows are very expensive in terms of performance, and is one of the main causes of slow DOM scripts, especially on devices with low processing power, such as phones. In many cases, they are equivalent to laying out the entire page again.

#### Keeping the number of reflows to a minimum {#minimumreflow}

There are many times that a script will need to do something that will trigger a repaint or reflow. Animations are built on reflows, and these will continue to be desired. So reflows are a fact of Web development, and to keep scripts running fast, they should be kept to a minimum while still having the same overall effect.

Browsers may choose to wait until the end of a script thread before reflowing to show the changes. Opera will wait until enough changes have been made, enough time has elapsed, or the end of the thread is reached. This means that if the changes happen quickly enough in the same thread, they may only produce one reflow. However, this cannot be relied on, especially considering the various different speeds of devices that Opera runs on.

Note that some elements have significantly slower reflows than others. Reflowing an element with table display, can take as much as three times as long as reflowing an equivalent element with block display.

#### Minimal reflow {#minimalreflow}

Normal reflows may affect the whole document. The more of the document that is reflowed, the longer the reflow will take. Elements that are positioned absolutely or fixed, do not affect the layout of the main document, so if they reflow, they are the only thing that reflows. The document behind them will need to repaint to allow for any changes, but this is much less of a problem than an entire reflow.

So is an animation does not need to be applied to the whole document, it is better if it can be applied only to a positioned element. For most animations, this is all that is needed anyway.

### Document tree modification {#modifyingtree}

Document tree modification _will_ trigger reflow. Adding new elements to the DOM, changing the value of text nodes, or changing various attributes will all be enough to cause a reflow. Making several changes one after the other, may trigger more than one reflow, so in general, it is best to make multiple changes in a non-displayed DOM tree fragment. The changes can then be made to the live document's DOM in one single operation:

	var docFragm = document.createDocumentFragment();
	var elem, contents;
	for(var i = 0; i < textlist.length; i++) {
		elem = document.createElement('p');
		contents = document.createTextNode(textlist[i]);
		elem.appendChild(contents);
		docFragm.appendChild(elem);
	}
	document.body.appendChild(docFragm);

Document tree modification can also be done on a clone of the element, which is then swapped with the real element after the changes are complete, resulting in a single reflow. Note that this approach should not be used if the element contains any form controls, as any changes the user makes to their values, are not reflected in the main DOM tree. It should also not be done if you need to rely on event handlers being attached to the element or its children, since in theory they should not be cloned.

	var original = document.getElementById('container');
	var cloned = original.cloneNode(true);
	cloned.setAttribute('width', '50%');
	var elem, contents;
	for(var i = 0; i < textlist.length; i++) {
		elem = document.createElement('p');
		contents = document.createTextNode(textlist[i]);
		elem.appendChild(contents);
		cloned.appendChild(elem);
	}
	original.parentNode.replaceChild(cloned, original);

### Modifying an invisible element {#invisibleelement}

When an element has its display style set to none, it will not need to repaint, even if its contents are changed, since it is not being displayed. This can be used as an advantage. If several changes need to be made to an element or its contents, and it is not possible to combine these changes into a single repaint, the element can be set to `display:none`, the changes can be made, then the element can be set back to its normal display.

This will trigger two extra reflows, once when the element is hidden, and once when it is made to appear again, but the overall effect can be much faster. It may also cause unwanted jumping of the scrollbar, if the element itself affects the scrolling offset. However, it can easily be applied to a positioned element without causing an unsightly effect.

	var posElem = document.getElementById('animation');
	posElem.style.display = 'none';
	posElem.appendChild(newNodes);
	posElem.style.width = '10em';
	// Other changes…
	posElem.style.display = 'block';

### Taking measurements {#measuring}

As stated earlier, the browser may cache several changes for you, and reflow only once when those changes have all been made. However, note that taking measurements of the element will force it to reflow, so that the measurements will be correct. The changes may or may not not be visibly repainted, but the reflow itself still has to happen behind the scenes.

This effect is created when measurements are taken using properties like offsetWidth, or using methods like getComputedStyle. Even if the numbers are not used, simply using either of these while the browser is still caching changes, will be enough to trigger the hidden reflow. If these measurements are taken repeatedly, you should consider taking them just once, and storing the result, which can then be used later.

	var posElem = document.getElementById('animation');
	var calcWidth = posElem.offsetWidth;
	posElem.style.fontSize = (calcWidth / 10) + 'px';
	posElem.firstChild.style.marginLeft = (calcWidth / 20) + 'px';
	posElem.style.left = ((-1 * calcWidth) / 2) + 'px';
	// Other changes…

### Making several style changes at once {#stylechanges}

Just like with DOM tree modifications, it is possible to make several style related changes at the same time, in order to minimise the number of repaints or reflows. The common approach is setting of styles one at a time:

	var toChange = document.getElementById('mainelement');
	toChange.style.background = '#333';
	toChange.style.color = '#fff';
	toChange.style.border = '1px solid #00f';

That approach could mean multiple reflows and repaints. There are two main ways to do this better. If the element itself needs to adopt several styles, whose values are all known in advance, the class of the element can be changed. It will then take on all the new styles defined for that class:

	div {
		background: #ddd;
		color: #000;
		border: 1px solid #000;
	}
	div.highlight {
		background: #333;
		color: #fff;
		border: 1px solid #00f;
	}
	…
	document.getElementById('mainelement').className = 'highlight';

The second approach is to define a new style attribute for the element, instead of assigning styles one by one. Most often this is suited to dynamic changes such as animations, where the new styles cannot be known in advance. This is done using either the cssText property of the style object, or by using setAttribute. Internet Explorer does not allow the second version, and needs the first. Some older browsers, including Opera 8, need the second approach, and do not understand the first. So the easy way is to check if the first version is supported and use that, then fall back to the second if not.

	var posElem = document.getElementById('animation');
	var newStyle = 'background: ' + newBack + ';' +
		'color: ' + newColor + ';' +
		'border: ' + newBorder + ';';
	if(typeof(posElem.style.cssText) != 'undefined') {
		posElem.style.cssText = newStyle;
	} else {
		posElem.setAttribute('style', newStyle);
	}

### Trading smoothness for speed {#smoothspeed}

As a developer, it is tempting to make an animation run as smoothly as possible, by using short timeouts, and small changes. For example, animated motion could be done using a 10ms interval, that moves an element 1 pixel at a time. An animation running that fast may work nicely on some PCs or some browsers. However, a 10ms interval is about the smallest that a browser can achieve without using 100% of most desktop CPUs. Some browsers will not even be able to manage that - requesting 100 reflows per second is quite a lot for most browsers. Lower powered computers, or device browsers, will not be able to perform at that speed, and the animation will feel slow and unresponsive.

It can be necessary to swallow the developer pride, and trade some of the smoothness of the animation for speed instead. Changing the interval to 50ms, and the animation step to 5 pixels, will need much less processing power, and can make the animation run much faster on lower powered processors.

### Avoid inspecting large numbers of nodes {#manynodes}

When attempting to locate a specific node, or specific subset of nodes, use the inbuilt methods and collections of the DOM to narrow the search to as small a number of nodes as possible. For example, if you want to locate an unknown element in the document, that has a certain attribute, you could use this:

	var allElements = document.getElementsByTagName('*');
	for(var i = 0; i < allElements.length; i++) {
		if(allElements[i].hasAttribute('someattr')) {
			// …
		}
	}

Even if we ignore more advanced techniques such as XPath, that example still has two problems that make it slow. Firstly, it searches for every element, without attempting to narrow the search at all. Secondly, it still continues searching, even after it has found the element it wanted. Say for example, that the unknown element is known to be inside a div with the id inhere, this code could perform far better:

	var allElements = document.getElementById('inhere').getElementsByTagName('*');
	for(var i = 0; i < allElements.length; i++) {
		if(allElements[i].hasAttribute('someattr')) {
			// …
			break;
		}
	}

If the unknown element is known to be a direct child of the div, this approach may be even faster, depending on the number of descendent elements of the div, compared with the length of its childNodes collection:

	var allChildren = document.getElementById('inhere')h3 id=h3 id=.childNodes;
	for(var i = 0; i < allChildren.length; i++) {
		if(allChildren[i].nodeType == 1 && allChildren[i].hasAttribute('someattr')) {
			// …
			break;
		}
	}

The basic intention is to avoid manually stepping through the DOM as much as possible. The DOM has many alternatives that may perform better in various circumstances, such as DOM 2 Traversal TreeWalker, instead of recursively stepping through childNodes collections.

### Improve speed with XPath {#xpath}

A simple example would be building a table of contents in a HTML document, based on the H2-H4 elements. In HTML, these elements can appear in a variety of places, without any proper hierarchy, so a recursive function cannot be used to retrieve the elements in the correct order. Traditional DOM would use an approach like this:

	var allElements = document.getElementsByTagName('*');
	for(var i = 0; i < allElements.length; i++) {
		if(allElements[i].tagName.match(/^h[2-4]$/i)) {
			// …
		}
	}

In a document that contains perhaps 2000 elements, this can cause a significant delay, as each must be examined separately. XPath, when natively supported, offers a much faster approach, as the XPath querying engine can be optimised much more effectively than interpreted JavaScript. In some cases, it can be as much as two orders of magnitude faster. This example is equivalent to the traditional example, but uses XPath for improved speed.

	var headings = document.evaluate('//h2|//h3|//h4', document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
	var oneheading;
	while(oneheading = headings.iterateNext()) {
		// …
	}

This version combines both; using XPath where possible, and falling back to traditional DOM if not:

	if( document.evaluate ) {
		var headings = document.evaluate('//h2|//h3|//h4', document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
		var oneheading;
		while(oneheading = headings.iterateNext()) {
			// …
		}
	} else {
		var allElements = document.getElementsByTagName('*');
		for(var i = 0; i < allElements.length; i++) {
			if(allElements[i].tagName.match(/^h[2-4]$/i)) {
				// …
			}
		}
	}

### Avoid modifications while traversing the DOM {#traversemodify}

Certain types of DOM collections are live, in that if the relevant elements change while your script is looking at the collection, the collection will change without waiting for your script to finish first. This includes the childNodes collection, and the node list returned by getElementsByTagName.

If your script is looping through a collection like these, and at the same time, it adds elements to it, then you risk running into an infinite loop where you continually add entries into the collection before you reach the end of it. However, this is not the only problem. These collections can be optimised for performance. They can remember the length, and the last index within it that your script referenced, so that when you increment the index, they can quickly reference the next node.

If you modify any part of the DOM tree, even if it is not included in that collection, the collection must be reassessed to look for new entries. In doing so, it cannot remember the last index or length, as these may have changed, and the optimisation is lost:

	var allPara = document.getElementsByTagName('p');
	for(var i = 0; i < allPara.length; i++) {
		allPara[i].appendChild(document.createTextNode(i));
	}

This equivalent code performs around ten times faster in Opera, and some other current browsers such as Internet Explorer. It works by first building a static list of elements to modify, then performs the modifications while stepping through the static list instead of the node list returned by getElementsByTagName:

	var allPara = document.getElementsByTagName('p');
	var collectTemp = [];
	for(var i = 0; i < allPara.length; i++) {
		collectTemp[collectTemp.length] = allPara[i];
	}
	for(i = 0; i < collectTemp.length; i++) {
		collectTemp[i].appendChild(document.createTextNode(i));
	}
	collectTemp = null;

### Cache DOM values in script variables {#cachevalues}

Some values returned by DOM cannot be cached, and will be reassessed each time they are called. An example is the getElementById method. The following is an example of wasteful code:

	document.getElementById('test').property1 = 'value1';
	document.getElementById('test').property2 = 'value2';
	document.getElementById('test').property3 = 'value3';
	document.getElementById('test').property4 = 'value4';

That code makes four requests to locate the same object. The following code makes one request then stores it, meaning that for a single request, the speed is about the same, or very slightly slower while performing the assignment. However, each subsequent time the cached value is used, the command runs between five and ten times as fast in most current browsers, as the equivalent command in the example above:

	var sample = document.getElementById('test');
	sample.property1 = 'value1';
	sample.property2 = 'value2';
	sample.property3 = 'value3';
	sample.property4 = 'value4';

## Document loading

### Avoid keeping alive references from one document to another {#docreferences}

If one document has accessed nodes or other objects from another document, avoid retaining those references after the script has finished using them. If a reference was stored in a global variable or a property of any long-living object in the current document, clear it by setting it to null, or deleting it.

The reason is that if the other document is destroyed, for instance if it was displayed in a popup window and that window is closed, any references to objects from that document will usually keep its entire DOM tree and scripting environment alive in RAM, even though the document itself is no longer loaded. The same will apply to pages within frames, inline frames, or OBJECT elements.

	var remoteDoc = parent.frames['sideframe'].document;
	var remoteContainer = remoteDoc.getElementById('content');
	var newPara = remoteDoc.createElement('p');
	newPara.appendChild(remoteDoc.createTextNode('new content'));
	remoteContainer.appendChild(newPara);
	// Remove references
	remoteDoc = null;
	remoteContainer = null;
	newPara = null;

### Fast history navigation {#fasthistory}

Opera (and many other browsers) uses fast history navigation by default. When the user navigates forwards or backwards through their browsing history, the state of the page, and any scripts on it, is stored. When the user comes back to it, it continues as if they never left it. The document is not reloaded and reinitialized. Scripts continue to run, and DOM is as it was before they left the page. This results in a much faster response for the user, and can make slow loading Web applications perform much better during navigation.

Although Opera offers a way for [authors to control this behaviour][30], it is better to allow it to use fast history navigation mode wherever possible. This means that if possible, scripts should try to avoid damaging actions that would cause this behaviour to fail. This includes things such as disabling form controls when a form is submitted, a menu that stops working after an item has been clicked, or a page fadeout effect that leaves the page content obscured or invisible.

[30]: http://www.opera.com/support/search/supsearch.dml?index=827

A simple approach would be an onunload listener that resets the fading effect, or re-enables the form control. However, note that with some browsers, such as Firefox and Safari, adding a listener for the unload event will disable their fast history navigation. In addition, the act of disabling the submit button will be enough to disable fast history navigation in Opera.

	window.onunload = function () {
		document.body.style.opacity = '1';
	};

### Use XMLHttpRequest {#xmlhttprequest}

This is not suited to every project, but it is an easy way to potentially reduce the amount of content being retrieved from the server, and avoiding the performance impact of destroying and recreating the scripting environment in between page loads. Initially, the page can be loaded as normal. Then for subsequent loads, XMLHttpRequest can be used to load minimal new content. This allows the JavaScript environment to persist.

Note, however, that this approach can lead to problems. In general, it breaks history navigation completely, and although it is possibles to fake this by storing information in inline frames, this defeats the purpose of using XMLHttpRequest in the first place. So use it sparingly, and only where it makes sense not to need to go back to earlier content. This approach can also confuse assistive devices, which may not be able to see the DOM of the page being changed, so it is best to use this only in situations where that will not cause a problem.

It will also fail if JavaScript is not available, or XMLHttpRequest is not supported. The easiest way to avoid this is to use a normal link, pointing to the new page. Add an event handler to that link that detects when the link is activated. The handler can then detect if XMLHttpRequest is supported, load the new data if it is, and then prevent the default action of the link. Once the new data has been loaded, it can be used to replace some of the content of the page, and the request object can then be destroyed to allow the memory to be retrieved by the garbage collector.

	document.getElementById('nextlink').onclick = function() {
		if(!window.XMLHttpRequest) {
			return true;
		}
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if( request.readyState != 4 ) {
				return;
			}
			var useResponse = request.responseText.replace(/^[\w\W]*<div id="container">|<\/div>\s*<\/body>[\w\W]*$/g , '');
			document.getElementById('container').innerHTML = useResponse;
			request.onreadystatechange = null;
			request = null;
		};
		request.open('GET', this.href, true);
		request.send(null);
		return false;
	}

### Create `<script>` elements dynamically {#dynamicscript}

Loading and processing a script can take time, but in some cases, a script may be loaded but never used. Loading it only wastes time and resources, stalling the current script execution while it does so, and it would be better not to load it at all if it is not going to be used. This can be done by a simple loader script that checks what other scripts are needed, and only creates the script element if the script will actually be used.

In theory, the extra scripts may be added after the page has loaded by creating a SCRIPT element and adding it to the document using DOM. This will work in current versions of all major browsers, but it may actually be placing more scripting demands on the browser than the script that it is loading. In addition, the script may be needed before the page has loaded, so it is best to check during page load, and create the script tags using `document.write`. Just remember to escape your forward slashes so you do not end the current script prematurely:

	if(document.createElement && document.childNodes) {
		document.write('<script src="dom.js"><\/script>');
	}
	if(window.XMLHttpRequest) {
		document.write('<script src="xhr.js"><\/script>');
	}

### `location.replace()` keeps the history under control {#locationnreplace}

Occasionally, it is necessary to change the page address using a script. The typical way to do this is by assigning a new address to `location.href`. This adds a history entry, and loads a new page, in the same way as activating a normal link.

In some cases, this extra history entry is unwanted, as the user will not need to go back to the earlier page. This is particularly useful if working in a situation where memory usage is critical. The memory used by the current page can be recovered by replacing the history entry instead. This is done using the `location.replace()` method.

	location.replace('newpage.html');

Note that the page may still remain in cache, and may use memory there, but this will not be quite so much as if it were also kept in history.
