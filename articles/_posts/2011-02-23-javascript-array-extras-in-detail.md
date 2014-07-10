---
title: JavaScript Array “Extras” in Detail
authors:
- dmitry-soshnikov
intro: 'In this article we’ll look at the functionality made available by the new methods of array objects standardized in ECMAScript 5.'
license: cc-by-3.0
---
<p>Table of contents:</p>

							<ol>
<li><a href="#introduction" title="Introduction">Introduction</a></li>
<li><a href="#browsers-support" title="Browsers support">Browser support</a></li>
<li><a href="#theory-and-rationale" title="Theory and rationale">Theory and rationale</a></li>
<li><a href="#arrays-extra-processing" title="Arrays: extra processing">Arrays: extra processing</a>
									<ol>
<li><a href="#foreach" title="forEach">forEach</a></li>
<li><a href="#map" title="map">map</a></li>
<li><a href="#filter" title="filter">filter</a></li>
<li><a href="#some" title="some">some</a></li>
<li><a href="#every" title="every">every</a></li>
<li><a href="#indexof" title="indexOf">indexOf</a></li>
<li><a href="#lastindexof" title="lastIndexOf">lastIndexOf</a></li>
<li><a href="#reduce" title="reduce">reduce</a></li>
<li><a href="#reduceright" title="reduceRight">reduceRight</a></li>
									</ol>
<li><a href="#generic-nature" title="Generic nature">Generic nature</a></li>
<li><a href="#summary" title="Summary">Summary</a></li>
<li><a href="#further-reading" title="Further reading">Further reading</a></li>
							</ol>

<h2 id="introduction">Introduction</h2>

<p>In this article we’ll look at the functionality made available by the new methods of <em>array objects</em> standardized in ECMA-262 5th edition (aka <abbr title="ECMAScript 5">ES5</abbr>). Most of the methods dicussed below are <em>higher-order</em> (we’ll clarify this term shortly below), and related to functional programming. In addition, most of them have been added to different JavaScript implementations since version 1.6 (SpiderMonkey), although these were only standardised in ES5.</p>

<p class="note">Unless stated otherwise, all the methods discussed below were introduced in JavaScript 1.6.</p>

<p class="note">Note: You can probably learn a lot from this article whether you are an expert in JavaScript, or a comparative novice.</p>

<h2 id="browsers-support">Browser support</h2>
<p>At the time of writing “Array extras” (which are actually standardized methods, rather than extras) are supported by the new versions of all major browsers. Unless stated otherwise, all the discussed methods can be safely used in:</p>

<ul>
<li>Opera 11+</li>
<li>Firefox 3.6+</li>
<li>Safari 5+</li>
<li>Chrome 8+</li>
<li>Internet Explorer 9+</li>
</ul>

<p>If we have to support older browsers we can always implement our own versions of required methods by extending the <code>Array.prototype</code> object, for example:</p>

<pre><code>// for old browsers

if (typeof Array.prototype.forEach != "function") {
	Array.prototype.forEach = function () {
		/* own implementation */
	};
}
</code></pre>

<p>With the introductory information out the way, we’ll start our exploration of array extras by looking at the theory and practical rationale behind the methods.</p>

<h2 id="reasons-and-theory">Theory and rationale</h2>

<p>Every new generation of a programming language arrives with newer and higher abstractions. These new abstractions make our development (and the perception of programs in general) easier and allow us to control <em>complex structures</em> in <em>simpler ways</em>. Consider e.g. the following two functions:</p>

<pre><code>// sum of numbers in range

function getSum(from, to) {
	var result = 0;
	for (var k = from; k &lt; to; k++) {
		result += k;
	}
	return result;
}

var sum = getSum(1, 10); // 45

// sum of squares of numbers in range

function getSumOfSquares(from, to) {
	var result = 0;
	for (var k = from; k &lt; to; k++) {
		result += k * k;
	}
	return result;
}

var sumOfSquares = getSumOfSqures(1, 10); // 285</code></pre>

<p>In first function we loop through the numbers in the required range and collect the sum of the numbers. In the second function we do the same, but collect the squares of the numbers. What if we wanted to provide a function that calculates the sum of <em>cubes</em> of numbers for example, or <em>any</em> possible transformation?</p>

<p>Obviously, we have almost identical code structures in the two previous examples: In a well-designed system we’ll want to <em>reuse</em> the common parts. This is called <em>code reuse</em> in computer science. Generally, it may appear in several aspects (for example, in <abbr tite="Object Oriented Programming">OOP</abbr> we can <em>reuse</em> code from <em>ancestor classes</em> in <em>descendant classes</em>).</p>

<p>The common part of the above two functions (the exact <em>action</em> applied on current number <code>k</code>) can be <em>encapsulated</em> into a <em>function</em>. In such a way, we can <em>separate</em> the common (often boring) part of the <em>processing</em> (the <code>for...length</code> in this case) from the <em>transformation</em> made on the each element. Having such an approach, the transformation can be <em>passed as an argument</em> to our common function, like so:</p>

<pre><code>function genericSum(handler, from, to) {
	var result = 0;
	for (var k = from; k &lt; to; k++) {
		result += handler(k);
	}
	return result;
}</code></pre>

<p>Here every subsequent summed value is presented not simply as the current number, but as a <em>result of the transformation</em> (provided by the function <code>handler</code>) made on the number. That is, we get the ability to <em>parameterize</em> the handling of every element in the sequence.</p>

<p>It’s a very powerful abstraction, which allows us to have for example <em>just a sum</em> (where the handler function simply returns the number):</p>

<pre><code>var sum = genericSum(function (k) { return k; }, 1, 10); // 45</code></pre>

<p>or the <em>sum of squares</em>:</p>

<pre><code>var sumOfSqures = genericSum(function (k) { return k * k; }, 1, 10); // 285</code></pre>

<p>or even <em>sum of cubes</em>:</p>

<pre><code>var sumOfCubes = genericSum(function (k) { return k * k * k; }, 1, 10); // 2025</code></pre>

<p>And all this using only one function: <code>genericSum</code>.</p>

<p>Functions that <em>accept other functions</em> as arguments (as is the case with our <code>genericSum</code> function) are called <em>higher-order functions (HOF)</em>. And functions that can be <em>passed</em> as an arguments are called <em>first-class functions</em>.</p>

<p>Having this combination of higher-order and first-class functions in JavaScript allows us to create very expressive and highly-abstracted constructions, which help us to solve <em>complex</em> tasks in an <em>easier</em> manner, <em>conveniently reusing the code</em>.</p>

<p>That covers the theory. Let’s see what we can do in practice.</p>

<h2 id="arrays-extra-processing">Arrays: extra processing</h2>

<p>The pattern described above gives us an almost unlimited number of ways to carry out <em>generic processing of arrays</em>. Thus, as we said above all the boring details of applying this processing is hidden from us. Instead of repeating <code>for k ... length</code> every time, we concentrate on the task itself, leaving the non-interesting <em>(lower-abstracted)</em> details behind the scenes. JavaScript has several HOFs for parametrized array processing. They are all available on the <code>Array.prototype</code> object and therefore available on every array instance. Let’s consider these methods.</p>

<h3 id="foreach">forEach</h3>

<p>The most frequent one of these methods you’ll encounter, which corresponds to <em>parametrized looping</em> over an array is the <code>forEach</code> method. It simply applies a function on each element in the array. This means that <em>only existing elements</em> are visited and handled. For example:</p>

<pre><code>[1, 2 ,3, 4].forEach(alert);</code></pre>

<p>Here, <em>“the function passed in as an argument is applied to each item in the array”</em>, which in this case is an alert. So what is the difference between this and a casual <code>for...length</code> loop such as:</p>

<pre><code>var array = [1, 2, 3, 4];

for (var k = 0, length = array.length; k &lt; length; k++) {
	alert(array[k]);
}</code></pre>

<p>Since we can't refer to an array without a variable, we use an additional variable <code>array</code>; for the loop counter we also use the variable <code>k</code>. And the code itself becomes longer because we are repeating the <code>for...length</code> loop over and over again. We could of course use another iteration (e.g. <code>while</code>) and wrap the code into a function (thereby hiding helper variables and not polluting the global scope), but obviously this is less abstract than the <code>forEach</code> approach.</p>

<p>If we replace the action function with for example <code>console.log</code>, we get another interesting result:</p>

<pre><code>[1, 2 ,3, 4].forEach(console.log);

// Result:

// 1, 0, [1, 2, 3, 4]
// 2, 1, [1, 2, 3, 4]
// 3, 2, [1, 2, 3, 4]
// 4, 3, [1, 2, 3, 4]</code></pre>

<p>The Debug function <code>console.log</code> (which works with Opera Dragonfly or Firebug) can accept any number of arguments: here <em>three</em> arguments are passed to every call of <code>console.log</code> by the <code>forEach</code> function.</p>

<p>It’s not hard to see that these arguments are: the <em>current item</em>, the <em>index</em> of the item, and the <em>array itself</em>. We can provide any function of three arguments and perform required actions with these arguments:</p>

<pre><code>var sum = 0;

[1, 2, 3, 4].forEach(function (item, index, array) {
	console.log(array[index] == item); // true
	sum += item;
});

alert(sum); // 10</code></pre>

<p>Thus we get the first generic higher-order method of arrays, whose signature is defined as:</p>

<p><code>array.forEach(callback,[ thisObject])</code></p>

<p>The first argument is already known to us — it’s a function of three arguments, which is applied for items. The second argument is a <em>context object</em> (or a <em><code>this</code> value</em>), which will be used as a value of <code>this</code> in the code of the applied function. It can be useful, for example when we want to use a method of an object as a processing function:</p>

<pre><code>var database = {

	users: ["Dmitry", "John", "David"],

	sendEmail: function (user) {
		if (this.isValidUser(user)) {
			/* sending message */
		}
	},

	isValidUser: function (user) {
		/* some checks */
	}

};

// send an email to every user

database.users.forEach(  // for each user in database
	database.sendEmail,    // send email
	database               // using context (this) as database
);</code></pre>

<p>Let’s discuss what is going on here. Inside the <code>sendEmail</code> activation function the <code>this</code> value is set to a <code>database</code> object, and <code>this.isValidUser</code> refers to the required function. If we didn’t pass this second argument, the <code>this</code> value would be set to the <em>global object</em> (in browsers it’s <code>window</code>) or even to <code>undefined</code> in <a href="http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/">strict mode</a>.</p>

<p>Let’s show again, that <em>only existing</em> items are handled (i.e. “holes” are <em>not included</em> into the process):</p>

<pre><code>var array = [1, 2, 3];

delete array[1]; // remove 2
alert(array); // "1,,3"

alert(array.length); // but the length is still 3

array.forEach(alert); // alerts only 1 and 3</code></pre>

<h3 id="map">map</h3>

<p>Sometimes we might want to get the <em>transformation</em> or the <em>mapping</em> of the original array. JavaScript provides a HOF for that too: <code>map</code>. This function has a signature, as follows:</p>

<p><code>array.map(callback,[ thisObject])</code></p>

<p>This method also applies callback functions for each element of an array (again, only in the required context of <code>this</code>, and only for existing items). It does however also <em>return</em> the <em>transformed (mapped)</em> array as a result. Take a look at this example:</p>

<pre><code>var data = [1, 2, 3, 4];

var arrayOfSquares = data.map(function (item) {
	return item * item;
});

alert(arrayOfSquares); // 1, 4, 9, 16</code></pre>

<p>In practice we may use this technique to get any transformation of a list. For example, if we have a list of user objects, we can get the list of their email addresses:</p>

<pre><code>var users = [
	{name: "Dmitry", "email": "dmitry@email.com"},
	{name: "John",   "email": "john@email.com"},
	{name: "David",  "email": "david@email.de"},
	// etc
];

var emails = users.map(function (user) { return user.email; });

alert(emails); // ["dmitry@email.com", "john@email.com", "david@email.de"]</code></pre>

<h3 id="filter">filter</h3>

<p>Instead of the basic mapped result, we may want to only get certain entries that <em>satisfy a certain condition</em>, for example ones that have an email address that starts with "d". We can create a filter for exactly this kind of purpose, which will exclude items that don't pass our conditions. The <code>filter</code> method can be used to do this quickly and easily.</p>

<p>The signature is quite similar to that of <code>map</code>:</p>

<p><code>array.filter(callback,[ thisObject])</code></p>

<p>The callback function of the <code>filter</code> should return the <em>boolean</em> value (either <code>true</code> or <code>false</code>). <code>true</code> means that the filter is <em>passed</em>, and <code>false</code> means that an item shouldn’t be included in the result set.</p>

<p>Considering the previous example, we can select a subset of users or emails, for example only emails that are registered in the <code>com</code> domain:</p>

<pre><code>var comEmails = users // from users ...

	// get emails ...
	.map(function (user) { return user.email; })

	// and remove non-needed, leaving only "com"-emails
	.filter(function (email) { return /com$/.test(email); });

alert(comEmails); // ["dmitry@email.com", "john@email.com"]</code></pre>

<p>Note how we used the <em>chained pattern</em> of method invocations. This is quite a normal practice in JavaScript — the <code>map</code> method returns an array so we can then directly call the next method of the array, i.e. <code>filter</code>. In the latter we use a regular expression to check whether passed email addresses end with the <code>com</code> string (the <code>$</code> sign means “the end of the testing string”). Note also that in the former case we accept the <code>user</code> <em>object</em>, whereas in the second case we already have the <code>email</code> <em>string</em> available.</p>

<p>It’s not hard to see that, even though we have highly-abstracted handling here, we nevertheless have an <em>inefficient operation</em>. Indeed, we go through the whole array <em>twice</em>. It would be great if we could do all the needed checks and mapping in one pass. There is some syntactic sugar available to do that: <code>map</code> + <code>filter</code>. This is called <em>array comprehensions</em>. Currently it’s implemented only in Firefox, but it is still worth covering here:</p>

<pre><code>var comEmails = [user.email for each (user in users) if (/com$/.test(user.email)) ];

alert(comEmails); // ["dmitry@email.com", "john@email.com"]</code></pre>

<p>The code snippet above basically says <em>“build an array of user emails if the email ends with the string com”</em>. If we don’t have array comprehensions available, we can always fall back to the simple <code>for</code> enumeration:</p>

<pre><code>var comEmails = [];
var email;

for (var k = 0, length = users.length; k &lt; length; k++) {
	email = user.email;
	if (/com$/.test(email)) {
		comEmails.push(email);
	}
}

alert(comEmails); // ["dmitry@email.com", "john@email.com"]</code></pre>

<p>The choice is ours. Sometimes it is convenient (for example when the operation of transformation is not known in advance) to use array processing HOFs, and sometimes it’s more useful and efficient to use an old-school way.</p>

<p class="note">Note: One thing to note in the above example is that we left two “garbage” variables intact after our actions had completed: <code>k</code> and <code>email</code>. This wouldn’t happen if we used <code>forEach</code> and array comprehension, so we need should consider this also in our choice.</p>

<h3 id="some">some</h3>

<p>Often we want to know whether <em>some</em> or <em>all</em> items of a collection satisfy a specified condition. JavaScript provides two array methods allowing us to create easy solutions to such problems: <code>some</code> and <code>every</code>. We’ll tackle <code>every</code> in the next section; we’ll look at <code>some</code> first:</p>

<p><code>array.some(callback,[ thisObject])</code></p>

<p>This method accepts the function of three arguments and the context object. However, the result of the <code>some</code> function is <em>boolean</em>. It returns <code>true</code> if <em>some</em> (that is, <em>at least one</em>) of the items satisfies the condition. The condition is determined by the callback function, which also should return a boolean result.</p>

<p>For example, we might be storing test results, and want to test whether some user’s scores are higher than a certain threshold:</p>

<pre><code>var scores = [5, 8, 3, 10];
var current = 7;

function higherThanCurrent(score) {
	return score &gt; current;
}

if (scores.some(higherThanCurrent)) {
	alert("Accepted");
}</code></pre>

<p>This code gives the result <code>"Accepted"</code>, since the <code>some</code> method determines that the second element of the <code>scores</code> array (value <code>8</code>) is higher than the current item, value <code>7</code>. The processing therefore stops, returning <code>true</code>.</p>

<p>This technique can be used for performing a <em>complex search</em> (i.e. meeting several conditions at once) of the first found element in the array:</p>

<pre><code>var found = null;

var points = [
	{x: 10, y: 20},
	{x: 15, y: 53},
	{x: 17, y: 72}
];

points.some(function (point) {

	if (point.x &gt; 10 &amp;&amp; point.y &lt; 60) {
		found = point; // found
		return true;
	}

	return false;

});

if (found) {
	alert("Found: " + found.x + ", " + found.y); // Found: 15, 53
}</code></pre>

<p>We could also use <code>forEach</code> for searching, however <code>forEach</code> wouldn’t stop on the first found element: we'd need to throw a special exception to exit from it.</p>

<p>We’ll look at testing an element using just the <code>===</code> operator to provide a simple search below.</p>

<h3 id="every">every</h3>

<p>By contrast, if we instead want to test whether all the scores are higher than the threshold, we can use the <code>every</code> method, which looks like this:</p>

<p><code>array.every(callback,[ thisObject])</code></p>

<p>Our updated example looks like so:</p>

<pre><code>if (scores.every(higherThanCurrent)) {
	alert("Accepted");
} else {
	alert("Not all scores are higher than " + current);
}

// change our value to 2
current = 2;

// now it’s OK
alert(scores.every(higherThanCurrent)); // true</code></pre>

<h3 id="indexof">indexOf</h3>

<p>Another frequent task we’ll run into is testing whether an element is present in a collection.  There are two convenient methods to do this: <code>indexOf</code> and <code>lastIndexOf</code>, which simply search an element, testing it with <em>strict equality</em> <code>===</code> operation. The <code>indexOf</code> definition is as follows:</p>

<p><code>array.indexOf(searchElement[, fromIndex])</code></p>

<p>This method results an <em>integer</em> index of a searched element in the list. In a case where an item is not found, the value <code>-1</code> is returned. The <code>fromIndex</code> parameter is optional — if this is passed then the search starts from this index. If omitted, the default value <code>0</code> is used (i.e. the whole array is searched):</p>

<pre><code>var data = [2, 5, 7, 3, 5];

alert(data.indexOf(5)); // 1
alert(data.indexOf(5, 3)); // 4 (start search from 3 index)

alert(data.indexOf(4)); // -1 (not found)
alert(data.indexOf("5")); // -1 (also not found since 5 !== "5")</code></pre>

<h3 id="lastindexof">lastIndexOf</h3>

<p><code>lastIndexOf</code> is very similar to <code>indexOf</code>, except that it searches the element starting <em>from the end</em> of the array. The <code>lastIndexOf</code> definition is as follows:</p>

<p><code>array.lastIndexOf(searchElement[, fromIndex])</code></p>

<p>The <code>fromIndex</code> parameter is again optional; the default value for it is the array length - 1:</p>

<pre><code>var data = [2, 5, 7, 3, 5];

alert(data.lastIndexOf(5)); // 4
alert(data.lastIndexOf(5, 3)); // 1 (start search from 3 index)

if (data.indexOf(4) == -1) {
	alert("4 is not found");
}</code></pre>

<h3 id="reduce">reduce</h3>

<p>The last two new methods we’ll discuss allow us to <em>reduce</em> an array into a single value: they are <code>reduce</code> and <code>reduceRight</code>. The former starts its analysis from the beginning, while the latter starts it from the end. These methods were introduced into JavaScript later than others: at version 1.8.</p>

<p>We’ll discuss <code>reduce</code> first, and then go on to <code>reduceRight</code> in the next section. <code>reduce</code> has the following definition:</p>

<p><code>array.reduce(callback[, initialValue])</code></p>

<p>The callback function accepts <em>four</em> arguments: <em>previous value, current value, index,</em> and again the <em>array</em> itself. The <code>initialValue</code> parameter is optional and, if omitted, is set to <em>the first element</em> of the array. Consider the following example:</p>

<pre><code>// reduce the array to sum of elements

var sum = [1, 2, 3, 4].reduce(function (previous, current, index, array) {
	return previous + current;
});

alert(sum); // 10</code></pre>

<p>Here we go through the array elements and get:</p>

<ol>
<li>The <em>previous</em> value of every callback, which initially is <em>the first element</em> since it’s equal to the default <code>initialValue</code></li>
<li>The <em>current</em> value of every callback, which at first call is <code>2</code></li>
<li>The two last arguments — <code>index</code> and <code>array</code></li>
</ol>

<p>We then return the sum of our previous and current values, which becomes the <em>previous value</em> of the <em>next iteration</em>, and the current value is set to the next element, i.e. to <code>3</code>. The process loops until the end of the array:</p>

<pre><code></code>// initial set
previous = initialValue = 1, current = 2

// first iteration
previous = (1 + 2) =  3, current = 3

// second iteration
previous = (3 + 3) =  6, current = 4

// third iteration
previous = (6 + 4) =  10, current = undefined (exit)</code></pre>

<p>The resulting value is not required to be a primitive value. With <code>reduce</code> we can, for example, transform two-dimensional arrays into flat vectors:</p>

<pre><code>var matrix = [
	[1, 2],
	[3, 4],
	[5, 6]
];

alert(matrix[0][1]); // 2

// and now get the flatten array

var flatten = matrix.reduce(function (previous, current) {
	return previous.concat(current);
});

alert(flatten); // [1, 2, 3, 4, 5, 6]</code></pre>

<h3 id="reduceright">reduceRight</h3>

<p>The definition of <code>reduceRight</code> is as follows:</p>

<p><code>array.reduceRight(callback[, initialValue])</code></p>

<p>This function works in the same way as <code>reduce</code>, except that it processes an array from the end. Let’s have look at an example:</p>

<pre><code>var data = [1, 2, 3, 4];

var specialDiff = data.reduceRight(function (previous, current, index) {

	if (index == 0) {
		return previous + current;
	}

	return previous - current;

});

alert(specialDiff); // 0</code></pre>

<p>This results in a value of zero. I’m going to leave the explanation for you as an exercise: draw every step of the process, like we did in the previous example.</p>

<h2 id="generic-nature">Generic nature</h2>

<p>One of the biggest advantages of the array methods discussed in this article is the fact that they are all <em>generic</em> with respect to the objects on which they operate. In other words, <em>it’s not required</em> that the object to process should be an array. The object just needs the <code>length</code> property, and numeric indices.</p>

<p>This means we can <em>reuse</em> the functionality of arrays, applying it to other kinds of objects, for example strings:</p>

<pre><code>// get the reference to the map method

var map = Array.prototype.map;

// and call it for a string

var hello = map.call("hello world", function (char) {
	return char + "*";
});

alert(hello.join("")); // "h*e*l*l*o* *w*o*r*l*d*"</code></pre>

<p>Here we apply the <code>map</code> function to the <code>"hello world"</code> string, then get the result as an <em>array</em> (yes, the <code>map</code> function has converted the string into an array) and then convert the array into another string — <code>"h*e*l*l*o* *w*o*r*l*d*"</code>. This is of course only one solution, included to show the generic nature of the methods: we could instead solve this using regular expressions, or with a combination of <code>split</code> and <code>join</code> functions.</p>

<p>This approach can work in the opposite way too — here’s how we can reuse a string method to handle an array:</p>

<pre><code>// reuse "toUpperCase" method
var toUpperCase = String.prototype.toUpperCase;

var upper = toUpperCase.apply(["foo", "bar"]).split(",");

alert(upper); // ["FOO", "BAR"]</code></pre>

<p>In Firefox these generic methods are duplicated for constructors as well, as a <em>non-standard extension</em>: this provides an even more convenient generic application:</p>

<pre><code>// reuse array's "map" method for a string
Array.map("foo", String.toUpperCase).join(""); // "FOO"

// reuse string's "toLowerCase" method for an array
String.toLowerCase(["F", "O", "O"]).split(","); // ["f", "o", "o"]</code></pre>

<p>Another example — the <code>arguments</code> object isn’t an array and hasn't got such methods available intrinsically. However, it has <code>length</code> and properties-indices: here’s a better way to handle passed arguments:</p>

<pre><code>// function "foo" accepts
// any number of arguments

function foo(/* arguments */) {

	var every = Array.prototype.every;

	var allNumbers = every.call(arguments, function (arg) {
		return typeof arg == "number";
	});

	if (!allNumbers) {
		throw "Some argument is not a number";
	}

	/* further handling */

}

foo(1, 2, 3); // OK
foo(1, 2, "3"); // Error</code></pre>

<p>We can also call a method of an array for the <abbr title="Document Object Model">DOM</abbr> nodes collection, even though the DOM <code>NodeList</code> collection is not an array and has none of the discussed methods natively:</p>

<pre><code>var paragraphs = document.querySelectorAll("p");

[].forEach.call(paragraphs, console.log);</code></pre>

<p>In this example we select all paragraphs in the document and then log every paragraph to the console. Note how we reuse the <code>forEach</code> method of the array — the empty array is created only to get the reference to the <code>forEach</code> method.</p>

<p>We can use all the other array methods discussed in this article in exactly the same way.</p>

<h2 id="summary">Summary</h2>

<p>Higher-order methods of arrays provide convenient and elegant ways to process different collections. Having the ability to parametrize the action applied on the element of a sequence increases the abstraction and therefore makes our code cleaner and shorter, with easier handling of complex structures.</p>

<p>At the same time, sometimes it can be more efficient to fall back to a lower abstraction level. Bear in mind that every new abstraction level can bring some kind of performance penalty, in exchange for providing more convenient ways of programming. We can use different programming styles depending on our situation and needs.</p>

<h2 id="further-reading">Further reading</h2>
<p>ECMA-262-5:</p>
<ul>
<li><a href="http://es5.github.com/#x15.4.4">15.4.4 Properties of the Array Prototype Object</a></li>
</ul>

<p>Other useful articles:</p>
<ul>
<li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array#Iteration_methods">Iteration methods</a> of arrays on MDC</li>
</ul>
