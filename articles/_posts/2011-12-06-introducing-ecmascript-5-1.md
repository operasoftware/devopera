---
title: Introducing ECMAScript 5.1
authors:
- mike-taylor
tags:
- array-extras
- ecmascript
- ecmascript-5.1
- es5
- function.prototype.bind
- json
- object-additions
- strict-mode
layout: article
---

## Table of contents:

1. [Introduction](#introduction)
2. [Browser Support](#browser-support)
3. [The Strict Mode of ES5](#strict-mode)
4. [JSON](#json)
5. [Object Additions](#object-additions)
6. [Array Extras](#array-extras)
7. [Function.prototype.bind](#function-bind)
8. [Additional References](#further-reading)

## Introduction {#introduction}

ECMAScript 5.1 (or just ES5) is the latest revision of the ECMAScript standard -- the specification that JavaScript is based on. Similar in spirit to the HTML5 specification process, ES5 standardizes existing JavaScript implementations in conjunction with additions to the language and native ECMAScript objects. ES5 also introduces a strict variant of the language known as “strict mode”.

In this article we’ll introduce some of the most useful changes and additions. For a full list, consult Appendices D and E of the [official ECMAScript language specification][9] (PDF download, 3MB), available from [http://www.ecmascript.org/][10]; you can also see this content in HTML form, at [Michael[tm] Smith’s unofficial annotated HTML version][11].

[9]: http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
[10]: http://www.ecmascript.org/
[11]: http://es5.github.com/

## Browser Support {#browser-support}

With the release of Opera 11.60, all of the five major browsers now support ES5, save for [implementation bugs][12]. Unless otherwise stated, everything mentioned in this article can be used in the following browser versions (or higher):

[12]: http://kristopolous.blogspot.com/2011/11/winners-are-opera-ie-firefox-chrome.html

- Opera 11.60
- Internet Explorer 9*
- Firefox 4
- Safari 5.1**
- Chrome 13

* [IE9 does not include support for strict mode][13] -- this is added in IE10.
** Safari 5.1 still lacks support for `Function.prototype.bind`, although [`Function.prototype.bind` support has recently been added to Webkit][14].

[13]: http://msdn.microsoft.com/en-us/library/hh673540(v=VS.85).aspx
[14]: https://bugs.webkit.org/show_bug.cgi?id=26382

For information on support in older browsers, see Juriy Zaytsev’s excellent [ECMAScript 5 compatibility table][15].

[15]: http://kangax.github.com/es5-compat-table/

## The Strict Mode of ES5 {#strict-mode}

Strict mode is a way for authors to opt-in a more restrictive variant of the language -- providing additional reliability for authors and safety for users. Enabling strict mode is done by adding the `use strict` directive at the top of a JavaScript file or function. Since the `use strict` directive is just a string, it will be safely ignored by older browsers.

	"use strict";

	function strict(){
		"use strict";
		//…
	}

	function sloppy(){
		eval("window.foo = 'bar'");
	}

Many things that cause surprising or buggy behavior at runtime in a script will throw errors in strict mode, for example:

- Assignment to an undeclared variable throws a `ReferenceError`, rather than creating a global variable.
- Assigning an identical property more than once in an object literal throws a `SyntaxError`.
- Use of the `with` statement throws a `SyntaxError`.

[MDSN’s strict mode article][16] has a useful table summarising all of these differences.

[16]: http://msdn.microsoft.com/en-us/library/br230269(v=vs.94).aspx

## JSON {#json}

ES5 specifies a global `JSON` object for serializing (`JSON.stringify`) and deserializing (`JSON.parse`) objects into the JSON format.

For older browsers, consider using Douglas Crockford’s [json2.js][17], which implements the same functionality in older browsers (after feature-testing for native support).

[17]: https://github.com/douglascrockford/JSON-js/blob/master/json2.js

### `JSON.parse(text [, reviver])`

`JSON.parse` takes text (formatted as JSON) and returns an ECMAScript value. The optional reviver argument is a function with two arguments, `key` and `value`, that operates on the results -- making it possible to filter or transform what gets returned.

	>> var result = JSON.parse('{"a": 1, "b": "2"}');
	Object

	>> result.b
	"2"

If we want to ensure that the value is an integer upon parsing, we can use the reviver function for that.

	var result = JSON.parse('{"a": 1, "b": "2"}', function(key, value){
		if (typeof value == 'string'){
			return parseInt(value);
		} else {
			return value;
		}
	})

	>> result.b
	2

### `JSON.stringify(value [, replacer [, space]])`

`JSON.stringify` allows authors to take an ECMAScript value and convert it to a JSON-formatted string. In its simplest form, `JSON.stringify` takes a value and returns a string.

	>>> var mike = JSON.stringify({mike: "taylor"})
	undefined

	>> mike
	'{"mike": "taylor"}'

	>> typeof mike
	"string"

If we need to to alter the way that the value is stringified, or provide a filter for what gets selected, we can pass it a replacer function. For example, if we want to filter out properties with the value of 13 from our object to be stringified,

	var nums = {
		"first": 7,
		"second": 14,
		"third": 13
	}

	var luckyNums = JSON.stringify(nums, function(key, value){
		if (value == 13) {
			return undefined;
		} else {
			return value;
		}
	});

	>> luckyNums
	'{"first": 7, "second": 14}'

If the replacer function returns `undefined`, the key/value pair will not be included in the resulting JSON. We can also pass in a space argument to aid in the readability of what gets returned. Possible values can be a number indicating the number of spaces to indent at each level of the JSON string or a string to serve as the indentation. A number over 10, or a string with more than 10 characters will result in a spacer that is truncated to 10 or the first 10 characters.

	var luckyNums = JSON.stringify(nums, function(key, value) {
		if (value == 13) {
			return undefined;
		} else {
			return value;
		}
	}, 2);

	>> luckyNums
	'{
		"first":7,
		"second":14
	}'

## Object Additions {#object-additions}

The following methods are added to the `Object` constructor:

- `Object.getPrototypeOf`
- `Object.getOwnPropertyDescriptor`
- `Object.getOwnPropertyNames`
- `Object.create`
- `Object.defineProperty`
- `Object.defineProperties`
- `Object.seal`
- `Object.freeze`
- `Object.preventExtensions`
- `Object.isSealed`
- `Object.isFrozen`
- `Object.isExtensible`
- `Object.keys`

One of the benefits of these additions is more control over an object’s properties, e.g., what is allowed to be modified, enumerated over, deleted, etc. This is done via programmatic access to an object’s _property descriptors_. For example:

	var cat = {};

	Object.defineProperty(cat, "name", {
		value: "Maru",
		writable: false,
		enumerable: true,
		configurable: false
	});

	Object.defineProperty(cat, "skill", {
		value: "exploring boxes",
		writable: true,
		enumerable: true,
		configurable: true
	});

For our `cat` object, its `name` cannot be changed, but will appear in a `for-in` loop. Among other things, Maru is good at exploring boxes, but that could change in the future so the `skill` property is left `writable` and `configurable`.

In a future article we’ll explore all of the Object additions in more detail.

## Array Extras {#array-extras}

The following methods are additions to the Array `prototype` object:

- `Array.prototype.indexOf`
- `Array.prototype.lastIndexOf`
- `Array.prototype.every`
- `Array.prototype.some`
- `Array.prototype.forEach`
- `Array.prototype.map`
- `Array.prototype.filter`
- `Array.prototype.reduce`
- `Array.prototype.reduceRight`

Dmitry Soshnikov has written an in-depth reference article on the [ES5 array “extras”][18].

[18]: /articles/javascript-array-extras-in-detail/

One thing not mentioned in Dmitry’s article is `Array.isArray`, which as you can see sits directly on the `Array` constructor — not the `prototype` object. `Array.isArray` does pretty much what you would expect it to do — it’s a method that returns `true` or `false` depending on if the argument’s `[[Class]]` internal property is `Array`.

	Array.isArray("NO U")
	>> false

	Array.isArray(["NO", "U"])
	>> true

In ES3, the only reliable way to determine if a value is an array was by using [“the Miller Device”][19], i.e., comparing the internal `[[Class]]` property to that of an array.

[19]: http://www.songhaysystem.com/kb/number/2076072056/subject/htmlscrp

	Object.prototype.toString.apply(value) === '[object Array]'

## `Function.prototype.bind(thisArg [, arg1 [, arg2, …]])` {#function-bind}

`Function.prototype.bind` returns a new function object with its _this_ value bound to the `thisArg` argument. Essentially, this allows you to execute a function within the scope of some other object.

	function locate(){
		console.log(this.location);
	}

	function Maru(location){
		this.location = location;
	}

	var kitty = new Maru("cardboard box");
	var locateMaru = locate.bind(kitty);

	locateMaru();

In this example, we can call the `location` function within the context of the Maru object. As `locate` is a property of the global object, its `this` value is the global object (`window`). In this case, we’re looking for a cat, not a `Location` object, so we can create a new method `locateMaru` with the `this` value bound to always be `kitty`.

## Additional References {#further-reading}

- [ECMAScript 5 Objects and Properties][20] by John Resig
- [Understanding JavaScript Function Invocation and “this”][21] by Yehuda Katz
- [JavaScript Strict Mode][22] by Angus Croll
- ECMA-262-5 in detail: [Introduction][23] by Dmitry Soshnikov
- [ECMAScript 5 compatibility table][24] by Juriy Zaytsev

[20]: http://ejohn.org/blog/ecmascript-5-objects-and-properties/
[21]: http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/
[22]: http://javascriptweblog.wordpress.com/2011/05/03/javascript-strict-mode/
[23]: http://dmitrysoshnikov.com/ecmascript/es5-chapter-0-introduction/
[24]: http://kangax.github.com/es5-compat-table/