---
title: JavaScript Best Practices
authors:
- christian-heilmann
intro: 'Writing a best practice article is quite a tricky business. To a number of you, what you are about to read will appear to be very obvious and just the sensible thing to do. However, looking around the web and getting code handed over to me from other developers for years has taught me that common sense is actually quite a rarity in live code on the web.'
tags:
- javascript
license: cc-by-nc-sa-2.5
---

Writing a best practice article is quite a tricky business. To a number of you, what you are about to read will appear to be very obvious and just the sensible thing to do.

However, looking around the web and getting code handed over to me from other developers for years has taught me that common sense is actually quite a rarity in live code on the web, and the “sensible and logical thing to do” gets pushed far down the priority list once you are in the middle of a project, and the deadline is looming.

So I’ve decided to make it easier for you by creating this article, which is a compilation of best practices and good advice I’ve amassed over the years, much of it learnt the hard way (experimentation and suchlike). Take the advice below to heart and keep it in a part of your brain that has a quick access route so you can apply it without thinking about it. I am sure you will find things to disagree with, and that is a good thing — you should question what you read, and strive to find better solutions. However, I have found that following these principles has made me a more effective developer and allowed other developers to build upon my work more easily.

The article is structured as follows:

- [Call things by their name — easy, short and readable variable and function names](#easynames)
- [Avoid globals](#avoidglobals)
- [Stick to a strict coding style](#strictstyle)
- [Comment as much as needed but not more](#comments)
- [Avoid mixing with other technologies](#mixing)
- [Use shortcut notation when it makes sense](#shortcut)
- [Modularize — one function per task](#modules)
- [Enhance progressively](#progressiveenhancement)
- [Allow for configuration and translation](#configurations)
- [Avoid heavy nesting](#nesting)
- [Optimize loops](#loops)
- [Keep DOM access to a minimum](#dom)
- [Don’t yield to browser whims](#browsercode)
- [Don’t trust any data](#filter)
- [Add functionality with JavaScript, don’t create too much content](#add)
- [Build on the shoulders of giants](#libraries)
- [Development code is not live code](#liveanddev)

## Call things by their name — easy, short and readable variable and function names {#easynames}

This is a no-brainer but it is scary how often you will come across variables like `x1`, `fe2` or `xbqne` in JavaScript, or — on the other end of the spectrum — variable names like `incrementorForMainLoopWhichSpansFromTenToTwenty` or `createNewMemberIfAgeOverTwentyOneAndMoonIsFull`.

None of these make much sense — good variable and function names should be easy to understand and tell you what is going on — not more and not less. One trap to avoid is marrying values and functionality in names. A function called `isLegalDrinkingAge()` makes more sense than `isOverEighteen()` as the legal drinking age varies from country to country, and there are other things than drinking to consider that are limited by age.

**Hungarian notation** is a good variable naming scheme to adopt (there are [other naming schemes][1] to consider), the advantage being that you know what something is supposed to be and not just what it is.

[1]: http://en.wikipedia.org/wiki/Identifier_naming_convention#Metadata_and_hybrid_conventions

For example, if you have a variable called `familyName` and it is supposed to be a string, you would write it as `sFamilyName` in “Hungarian”. An object called `member` would be `oMember` and a Boolean called `isLegal` would be `bIsLegal`. It is very informative for some, but seems like extra overhead to others — it is really up to you whether you use it or not.

Keeping to English is a good idea, too. Programming languages are in English, so why not keep this as a logical step for the rest of your code. Having spent some time debugging Korean and Slovenian code, I can assure you it is not much fun for a non-native speaker.

See your code as a narrative. If you can read line by line and understand what is going on, well done. If you need to use a sketchpad to keep up with the flow of logic, then your code needs some work. Try reading Dostojewski if you want a comparison to the real world — I got lost on a page with 14 Russian names, 4 of which were pseudonyms. Don’t write code like that — it might make it more art than product, but this is rarely a good thing.

## Avoid globals {#avoidglobals}

Global variables and function names are an incredibly bad idea. The reason is that every JavaScript file included in the page runs in the same scope. If you have global variables or functions in your code, scripts included after yours that contain the same variable and function names will overwrite your variables/functions.

There are several workarounds to avoid using globals — we’ll go through them one by one now. Say you have three functions and a variable like this:

	var current = null;
	function init() {
		…
	}
	function change() {
		…
	}
	function verify() {
		…
	}

You can protect those from being overwritten by using an object literal:

	var myNameSpace = {
		current:null,
		init:function() {
			…
		},
		change:function() {
			…
		},
		verify:function() {
			…
		}
	}

This does the job, but there is a drawback — to call the functions or change the variable value you’ll always need to go via the name of the main object: `init()` is `myNameSpace.init()`, current is `myNameSpace.current` and so on. This can get annoying and repetitive.

It is easier to wrap the whole thing in an anonymous function and protect the scope that way. That also means you don’t have to switch syntax from `function name()` to `name:function()`. This trick is called the Module Pattern:

	myNameSpace = function() {
		var current = null;
		function init() {
			…
		}
		function change() {
			…
		}
		function verify() {
			…
		}
	}();

Again, this approach is not without issues. None of these are available from the outside at all any more. If you want to make them available you need to wrap the things you want to make public in a `return` statement:

	myNameSpace = function() {
		var current = null;
		function verify() {
			…
		}
		return {
			init:function() {
				…
			}
			change:function() {
				…
			}
		}
	}();

That pretty much brings us back to square one in terms of linking from one to the other and changing syntax. I therefore prefer to do something like the following (which I dubbed the “revealing module pattern”):

	myNameSpace = function() {
		var current = null;
		function init() {
			…
		}
		function change() {
			…
		}
		function verify() {
			…
		}
		return{
			init:init,
			change:change
		}
	}();

Instead of returning the properties and methods I just return pointers to them. This makes it easy to call functions and access variables from other places without having to go through the `myNameSpace` name.

It also means that you can have a public alias for a function in case you want to give it a longer, descriptive name for internal linking but a shorter one for the outside:

	myNameSpace = function() {
		var current = null;
		function init() {
			…
		}
		function change() {
			…
		}
		function verify() {
			…
		}
		return{
			init:init,
			set:change
		}
	}();

Calling `myNameSpace.set()` will now invoke the `change()` method.

If you don’t need any of your variables or functions to be available to the outside, simply wrap the whole construct in another set of parentheses to execute it without assigning any name to it:

	(function() {
		var current = null;
		function init() {
			…
		}
		function change() {
			…
		}
		function verify() {
			…
		}
	})();

This keeps everything in a tidy little package that is inaccessible to the outside world, but very easy to share variables and functions inside of.

## Stick to a strict coding style {#strictstyle}

Browsers are very forgiving when it comes to JavaScript syntax. This should not however be a reason for you to write sloppy code that relies on browsers to make it work.

The easiest way to check the syntactical quality of your code is to run it through [JSLint — a JavaScript validation tool][2] that gives you a detailed report about the syntax warnings and their meaning. People have been writing extensions for editors (for example the [JS Tools for TextMate][3]) that automatically lint your code when you save it.

[2]: http://www.jslint.com/
[3]: http://andrewdupont.net/2006/10/01/javascript-tools-textmate-bundle/

JSLint can be a bit touchy about the results it returns and — as its developer Douglas Crockford says — it can hurt your feelings. I found myself write much better code however, since I installed the TextMate JS bundle and started subjecting my code to JSLint scrutiny.

Clean and valid code means less confusing bugs to fix, easier handover to other developers and better code security. When you rely on hacks to get your code to work it is likely that there is also a security exploit that uses the same hacks. In addition, as hacks get fixed in browsers, your code will cease to work in the next version of the browser.

Valid code also means that it can be converted by scripts to other formats — hacky code will need a human to do that.

## Comment as much as needed but not more {#comments}

Comments are your messages to other developers (and yourself, if you come back to your code after several months working on something else). There’s been numerous battles raging over the years about whether to use comments at all, the main argument being that good code should explain itself.

What I see as a flaw in this argument is that explanations are a very subjective thing — you cannot expect every developer to understand what some code is doing from exactly the same explanation.

Comments don’t hurt anybody if you do them right. We’ll come back to that in the last point of this article, but let’s say that if your comments end up in the code that end users see then something is not going right.

Again the trick is moderation. Comment when there is an important thing to say, and if you do comment use the `/* */` notation. Single line comments using `//` can be problematic if people minify your code without stripping comments and in general are less versatile.

If you comment out parts of your code to be used at a later stage or to debug code there is a pretty sweet trick you can do:

	module = function() {
		var current = null;
		function init() {
			…
		};
	/*
		function show() {
			current = 1;
		};
		function hide() {
			show();
		};
	*/
		return{
			init:init,
			show:show,
			current:current
		}
	}();

Adding a double slash before the closing star-slash sets your code up so that you can comment and uncomment the whole block by simply adding or removing a slash before the opening slash-star:

	module = function() {
		var current = null;
		function init() {
			…
		};
	/*
		function show() {
			current = 1;
		};
		function hide() {
			show();
		};
	// */
		return{
			init:init,
			show:show,
			current:current
		}
	}();

With the code set up as shown in the above block, adding a slash before the opening slash-star will turn the multiline comment into two one-line comments, “unhiding” the code in between and causing it to be executed. Removing the slash will comment it out again.

For larger applications comment documentation in [JavaDoc style][4] makes a lot of sense — you are seeding the overall documentation of your product by writing code. The Yahoo User Interface library’s success is partly attributable to this, and there is even [a tool you can use to build the same documentation for your products][5]. Don’t worry too much about this until you become more experienced with JavaScripting — JavaDoc is mentioned here for completeness.

[4]: http://java.sun.com/j2se/javadoc/writingdoccomments/
[5]: http://yuiblog.com/blog/2008/12/08/yuidoc/

## Avoid mixing with other technologies {#mixing}

Whilst it is possible to create everything you need in a document using JavaScript and the DOM it is not necessarily the most effective way of doing so. The following code puts a red border around every input field when its class is “mandatory” and there’s nothing in it.

	var f = document.getElementById('mainform');
	var inputs = f.getElementsByTagName('input');
	for(var i = 0, j = inputs.length; i < j; i++) {
		if (inputs[i].className === 'mandatory' && inputs[i].value === '') {
			inputs[i].style.borderColor = '#f00';
			inputs[i].style.borderStyle = 'solid';
			inputs[i].style.borderWidth = '1px';
		}
	}

This works, however it means that if you later need to make a change to these styles you need to go through the JavaScript and apply the changes there. The more complex the change is the harder it’ll be to edit this. Furthermore, not every JavaScript developer is proficient or interested in CSS, which means there’ll be a lot of back and forth until the outcome is reached. By adding a class called “error” to the element when there is an error, you can ensure that the styling information is kept inside the CSS, which is more appriate:

	var f = document.getElementById('mainform');
	var inputs = f.getElementsByTagName('input');
	for(var i = 0, j = inputs.length; i < j; i++) {
		if (inputs[i].className === 'mandatory' && inputs[i].value === '') {
			inputs[i].className += ' error';
		}
	}

This is much more efficient as CSS was meant to cascade through the document. Say for example you want to hide all DIVs with a certain class in a document. You could loop through all the DIVs, check their classes and then change their style collection. In newer browsers you could use a CSS selector engine and then alter the style collection. The easiest way however is to use JavaScript to set a class on a parent element and use syntax along the lines of `element.triggerclass div.selectorclass{}` in the CSS. Keep the job of actually hiding the DIVs to the CSS designer, as he’ll know the best way of doing that.

## Use shortcut notation when it makes sense {#shortcut}

Shortcut notation is a tricky subject: on the one hand it keeps your code small but on the other you might make it hard for developers that take over from you as they might not be aware of the shortcuts. Well, here’s a small list of what can (and should) be done.

Objects are probably the most versatile thing you have in JavaScript. The old-school way of writing them is doing something like this:

	var cow = new Object();
	cow.colour = 'brown';
	cow.commonQuestion = 'What now?';
	cow.moo = function() {
		console.log('moo');
	}
	cow.feet = 4;
	cow.accordingToLarson = 'will take over the world';

However, this means you need to repeat the object name for each property or method, which can be annoying. Instead it makes much more sense to have the following construct, also called an object literal:

	var cow = {
		colour:'brown',
		commonQuestion:'What now?',
		moo:function() {
			console.log('moo');
		},
		feet:4,
		accordingToLarson:'will take over the world'
	};

Arrays are a confusing point in JavaScript. You’ll find a lot of scripts defining an Array in the following way:

	var aweSomeBands = new Array();
	aweSomeBands[0] = 'Bad Religion';
	aweSomeBands[1] = 'Dropkick Murphys';
	aweSomeBands[2] = 'Flogging Molly';
	aweSomeBands[3] = 'Red Hot Chili Peppers';
	aweSomeBands[4] = 'Pornophonique';

This is a lot of useless repetition; this can be written a lot more quickly using the `[ ]` array shortcut:

	var aweSomeBands = [
		'Bad Religion',
		'Dropkick Murphys',
		'Flogging Molly',
		'Red Hot Chili Peppers',
		'Pornophonique'
	];

You will come across the term “associative array” in some tutorials. This is a misnomer as arrays with named properties rather than an index are actually objects and should be defined as such.

Conditions can be shortened using “ternary notation”. For example, the following construct defines a variable as 1 or -1, depending on the value of another variable:

	var direction;
	if (x > 100) {
		direction = 1;
	} else {
		direction = -1;
	}

This can be shortened to a single line:

	var direction = (x > 100) ? 1 : -1;

Anything before the question mark is the condition, the value immediately after it is the true case and the one after the colon the false case. Ternary notation can be nested, but I’d avoid that to keep things readable.

Another common situation in JavaScript is providing a preset value for a variable if it is not defined, like so:

	if (v) {
		var x = v;
	} else {
		var x = 10;
	}

The shortcut notation for this is the double pipe character:

	var x = v || 10;

This will automatically give `x` a value of `10` if `v` is not defined — simple as that.

## Modularize — one function per task {#modules}

This is a general programming best practice — making sure that you create functions that fulfill one job at a time makes it easy for other developers to debug and change your code without having to scan through all the code to work out what code block performs what function.

This also applies to creating helper functions for common tasks. If you find yourself doing the same thing in several different functions then it is a good idea to create a more generic helper function instead, and reuse that functionality where it is needed.

Also, one way in and one way out makes more sense than forking the code in the function itself. Say you wanted to write a helper function to create new links. You could do it like this:

	function addLink(text, url, parentElement) {
		var newLink = document.createElement('a');
		newLink.setAttribute('href', url);
		newLink.appendChild(document.createTextNode(text));
		parentElement.appendChild(newLink);
	}

This works ok, but you might find yourself having to add different attributes depending on which elements you apply the link to. For example:

	function addLink(text,url,parentElement) {
		var newLink = document.createElement('a');
		newLink.setAttribute('href',url);
		newLink.appendChild(document.createTextNode(text));
		if (parentElement.id === 'menu') {
			newLink.className = 'menu-item';
		}
		if (url.indexOf('mailto:') !== -1) {
			newLink.className = 'mail';
		}
		parentElement.appendChild(newLink);
	}

This makes the function more specific and harder to apply to different situations. A cleaner way is to return the link and cover the extra cases in the main functions that need them. This turns `addLink()` into the more generic `createLink()`:

	function createLink(text,url) {
		var newLink = document.createElement('a');
		newLink.setAttribute('href', url);
		newLink.appendChild(document.createTextNode(text));
		return newLink;
	}

	function createMenu() {
		var menu = document.getElementById('menu');
		var items = [
			{
				t:'Home',
				u:'index.html'
			},
			{
				t:'Sales',
				u:'sales.html'
			},
			{
				t:'Contact',
				u:'contact.html'
			}
		];
		for(var i = 0; i < items.length; i++) {
			var item = createLink(items.t, items.u);
			item.className = 'menu-item';
			menu.appendChild(item);
		}
	}

By having all your functions only perform one task you can have a main `init()` function for your application that contains all the application structure. That way you can easily change the application and remove functionality without having to scan the rest of the document for dependencies.

## Enhance progressively {#progressiveenhancement}

Progressive Enhancement as a development practice is discussed in detail in the [Graceful degradation versus progressive enhancement][6]. In essence what you should do is write code that works regardless of available technology. In the case of JavaScript, this means that when scripting is not available (say on a BlackBerry, or because of an over-zealous security policy) your web products should still allow users to reach a certain goal, not block them because of the lack of JavaScript which they can’t turn on, or don’t want to.

[6]: http://dev.opera.com/articles/view/graceful-degradation-progressive-enhancement/

It is amazing how many times you will build a massively convoluted JavaScript solution for a problem that can be solved easily without it. One example I encountered was a search box on a page that allowed you to search different data: the web, images, news and so on.

In the original version the different data options were links that would re-write the `action` attribute of the form to point to different scripts on the backend to perform the searches.

The problem was that if JavaScript was turned off the links would still show up but every search would return standard web results as the action of the form never got changed. The solution was very simple: instead of links we provided the options as a radio button group and did the forking to the different specialist search scripts using a backend script.

This not only made the search work correctly for everybody, it also made it easy to track how many users chose which option. By using the correct HTML construct we managed to get rid of both the JavaScript to switch the form action and the click tracking scripts and made it work for every user out there — regardless of environment.

## Allow for configuration and translation {#configurations}

One of the most successful tips to keep your code maintainable and clean is to create a configuration object that contains all the things that are likely to change over time. These include any text used in elements you create (including button values and alternative text for images), CSS class and ID names and general parameters of the interface you build.

For example the [Easy YouTube player][7] has the following configuration object:

[7]: http://icant.co.uk/easy-youtube

	// This is the configuration of the player. Most likely you will
	// never have to change anything here, but it is good to be able
	// to, isn’t it?
	config = {
		CSS:{
			// IDs used in the document. The script will get access to
			// the different elements of the player with these IDs, so
			// if you change them in the HTML below, make sure to also
			// change the name here!
			IDs:{
				container:'eytp-maincontainer',
				canvas:'eytp-playercanvas',
				player:'eytp-player',
				controls:'eytp-controls',

				volumeField:'eytp-volume',
				volumeBar:'eytp-volumebar',

				playerForm:'eytp-playerform',
				urlField:'eytp-url',

				sizeControl:'eytp-sizecontrol',

				searchField:'eytp-searchfield',
				searchForm:'eytp-search',
				searchOutput:'eytp-searchoutput'

				// Notice there should never be a comma after the last
				// entry in the list as otherwise MSIE will throw a fit!
			},
			// These are the names of the CSS classes, the player adds
			// dynamically to the volume bar in certain
			// situations.
			classes:{
				maxvolume:'maxed',
				disabled:'disabled'
				// Notice there should never be a comma after the last
				// entry in the list as otherwise MSIE will throw a fit!
			}
		},
		// That is the end of the CSS definitions, from here on
		// you can change settings of the player itself.
		application:{
			// The YouTube API base URL. This changed during development of this,
			// so I thought it useful to make it a parameter.
			youtubeAPI:'http://gdata.youtube.com/apiplayer/cl.swf',
			// The YouTube Developer key,
			// please replace this with your own when you host the player!!!!!
			devkey:'AI39si7d…Y9fu_cQ',
			// The volume increase/decrease in percent and the volume message
			// shown in a hidden form field (for screen readers). The $x in the
			// message will be replaced with the real value.
			volumeChange:10,
			volumeMessage:'volume $x percent',
			// Amount of search results and the error message should there
			// be no reults.
			searchResults:6,
			loadingMessage:'Searching, please wait',
			noVideosFoundMessage:'No videos found :(',
			// Amount of seconds to repeat when the user hits the rewind
			// button.
			secondsToRepeat:10,
			// Movie dimensions.
			movieWidth:400,
			movieHeight:300
			// Notice there should never be a comma after the last
			// entry in the list as otherwise MSIE will throw a fit!
		}
	}

If you have this as a part of a module pattern and make it public you even allow implementers to only override what they need before initializing your module.

It is of utmost importance to keep code maintenance simple, avoiding the need for future maintainers having to read all your code and find where they need to change things. If it isn’t obvious, your solution will be either completely ditched or hacked. Hacked solutions can’t be patched once you need to upgrade them and that kills re-use of code.

## Avoid heavy nesting {#nesting}

Nesting code explains its logic and makes it much easier to read, however nesting it too far can also make it hard to follow what you are trying to do. Readers of your code shouldn’t have to scroll horizontally, or suffer confusion when their code editors wrap long lines (this makes your indentation efforts moot anyway).

The other problem of nesting is variable names and loops. As you normally start your first loop with `i` as the iterator variable, you’ll go on with j,k,l and so on. This can become messy quite quickly:

	function renderProfiles(o) {
		var out = document.getElementById('profiles');
		var ul = document.createElement('ul');
		for(var i = 0; i < o.members.length; i++) {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(o.members[i].name));
			var nestedul = document.createElement('ul');
			for(var j = 0; j < o.members[i].data.length; j++) {
				var datali = document.createElement('li');
				datali.appendChild(
					document.createTextNode(
						o.members[i].data[j].label + ' ' +
						o.members[i].data[j].value
					)
				);
				nestedul.appendChild(datali);
			}
			li.appendChild(nestedul);
			ul.appendChild(li);
		}
		out.appendChild(ul);
	}

As I am using the generic — really throw-away — variable names `ul` and `li` here, I need `nestedul` and `datali` for the nested list items. If the list nesting were to go even deeper I would need more variable names, and so on and so on. It makes more sense to put the task of creating nested lists for each member in its own function and call this with the right data. This also prevents us from having a loop inside a loop. The `addMemberData()` function is pretty generic and is very likely to come in handy at another time. Taking these thoughts on board, I would rewrite the code as follows:

	function renderProfiles(o) {
		var out = document.getElementById('profiles');
		var ul = document.createElement('ul');
		for(var i = 0; i < o.members.length; i++) {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(o.members[i].name));
			li.appendChild(addMemberData(o.members[i].data));
			ul.appendChild(li);
		}
		out.appendChild(ul);
	}
	function addMemberData(data) {
		var ul = document.createElement('ul');
		for(var i = 0; i < data.length; i++) {
			var li = document.createElement('li');
			li.appendChild(
				document.createTextNode(
					data[i].label + ' ' +
					data[i].value
				)
			);
			ul.appendChild(li);
		}
		return ul;
	}

## Optimize loops {#loops}

Loops can become very slow if you don’t do them right. One of the most common mistakes is to read the length attribute of an array at every iteration:

	var names = ['George', 'Ringo', 'Paul', 'John'];
	for(var i = 0; i < names.length; i++) {
		doSomeThingWith(names[i]);
	}

This means that every time the loop runs, JavaScript needs to read the length of the array. You can avoid that by storing the length value in a different variable:

	var names = ['George', 'Ringo', 'Paul', 'John'];
	var all = names.length;
	for(var i = 0; i < all; i++) {
		doSomeThingWith(names[i]);
	}

An even shorter way of achieving this is to create a second variable in the pre-loop statement:

	var names = ['George', 'Ringo', 'Paul', 'John'];
	for(var i = 0, j = names.length; i < j; i++) {
		doSomeThingWith(names[i]);
	}

Another thing to ensure is that you keep computation-heavy code outside loops. This includes regular expressions and — more importantly — DOM manipulation. You can create the DOM nodes in the loop but avoid inserting them into the document. You’ll find more on DOM best practices in the next section.

## Keep DOM access to a minimum {#dom}

Accessing the DOM in browsers is an expensive thing to do. The DOM is a very complex API and rendering in browsers can take up a lot of time. You can see this when running complex web applications when your computer is already maxed out with other work — changes take longer or get shown half way through and so on.

To make sure that your code is fast and doesn’t slow down the browser to a halt try to keep DOM access to a bare minimum. Instead of constantly creating and applying elements, have a tool function that turns a string into DOM elements and call this function at the end of your generation process to disturb the browser rendering once rather than continually.

## Don’t yield to browser whims {#browsercode}

Writing code specific to a certain browser is a sure-fire way to keep your code hard to maintain and make it get dated really quickly. If you look around the web you’ll find a lot of scripts that expect a certain browser and stop working as soon as a new version or another browser comes around.

This is wasted time and effort — we should build code based on agreed standards as outlined in this course of articles, not for one browser. The web is for everybody, not an elite group of users with a state-of-the-art configuration. As the browser market moves quickly you will have to go back to your code and keep fixing it. This is neither effective nor fun.

If something amazing works in one browser only and you really have to use it, put that code in its own script document and name it with browser and version. This means that you can find and remove this functionality more easily, should this browser become obsolete.

## Don’t trust any data {#filter}

One of the main points to bear in mind when talking about code and data security is not to trust any data. This is not only about evil people wanting to hack your systems; it starts with plain usability. Users will enter incorrect data, all the time. Not because they are stupid, but because they are busy, distracted or the wording on your instructions is confusing them. For example, I just booked a hotel room for a month rather than six days as I entered a wrong number … I consider myself fairly smart.

In short, make sure that all the data that goes into your systems is clean and exactly what you need. This is most important on the backend when writing out parameters retrieved from the URL. In JavaScript, it is very important to test the type of parameters sent to your functions (using the `typeof` keyword). The following would be an error if `members` is not an Array (for example for a string it’ll create a list item for each character of the string):

	function buildMemberList(members) {
		var all = members.length;
		var ul = document.createElement('ul');
		for(var i = 0; i < all; i++) {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(members[i].name));
			ul.appendChild(li);
		}
		return ul;
	}

In order to make this work, you need to check the type of `members` and make sure it is an array:

	function buildMemberList(members) {
		if (typeof members === 'object' &&
			typeof members.slice === 'function') {
			var all = members.length;
			var ul = document.createElement('ul');
			for(var i = 0; i < all; i++) {
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(members[i].name));
				ul.appendChild(li);
			}
			return ul;
		}
	}

Arrays are tricky as they tell you they are objects. To ensure that they are arrays, check one of the methods only arrays have.

Another very insecure practice is to read information from the DOM and use it without comparison. For example, I once had to debug some code that caused the JavaScript functionality to break. The code that caused it was — for some reason beyond me — reading a user name out of the innerHTML from a page element and calling a function with the data as a parameter. As the user name could be any UTF-8 character this included quotation marks and single quotes. These would end any string and the remaining part would be erroneous data. In addition, any user changing the HTML using a tool like Firebug or Opera DragonFly could change the user name to anything and inject this data into your functions.

The same applies to forms that validate only on the client side. I once signed up for an unavailable email address by rewriting a select to provide another option. As the form wasn’t checked on the backend the process went through without a hitch.

For DOM access, check that the element you try to reach and alter is really available and what you expect it to be — otherwise your code may fail or cause strange rendering bugs.

## Add functionality with JavaScript, don’t create too much content {#add}

As you can see in some of the other examples here, building a lot of HTML in JavaScript can be pretty daunting and flaky. Especially on Internet Explorer you can run into all kinds of trouble by altering the document while it is still loading and manipulating the content (look up “operation aborted error” on [Google][8] for a tale of woe and misery) with `innerHTML`.

[8]: http://www.google.com

In terms of page maintenance it is also a terribly bad idea to create a lot of markup with HTML as not every maintainer will have the same level of skill as you have and could potentially really mess with your code.

I found that when I had to build an application that is very much dependent on JavaScript using an HTML template and loading this template via Ajax made much more sense. That way maintainers can alter the HTML structure and most importantly text without having to interfere with your JavaScript code. The only snag is to tell them which IDs are needed and if there are certain HTML constructs that need to be in the order you defined. You can do that with inline HTML comments (and then strip the comments out when you load the template. Check the source of [the Easy YouTube template][9] as an example.

[9]: http://icant.co.uk/easy-youtube/template.html

In the script I load the template when the correct HTML container is available and apply the event handlers in the `setupPlayer()` method afterwards:

	var playercontainer = document.getElementById('easyyoutubeplayer');
	if (playercontainer) {
		ajax('template.html');
	};

	function ajax(url) {
		var request;
		try {
			request = new XMLHttpRequest();
		} catch(error) {
			try {
				request = new ActiveXObject('Microsoft.XMLHTTP');
			} catch(error) {
				return true;
			}
		}
		request.open('get', url, true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				if (request.status) {
					if (request.status === 200 || request.status === 304) {
						if (url === 'template.html') {
							setupPlayer(request.responseText);
						}
					}
				} else {
					alert('Error: Could not find template…');
				}
			}
		};
		request.setRequestHeader('If-Modified-Since','Wed, 05 Apr 2006 00:00:00 GMT');
		request.send(null);
	};

This way I enable people to translate and change the player any way they want to without having to alter the JavaScript code.

## Build on the shoulders of giants {#libraries}

There is no denying that over the last few years JavaScript libraries and frameworks have taken over the web development market. And that is not a bad thing — if they are used correctly. All good JavaScript libraries want to do one thing and one thing only: make your life as a developer easier by working around cross-browser inconsistencies and patching browser support holes. JavaScript libraries provide you with a predictable, functioning base line to build upon.

It’s a good idea to learn JavaScript without libraries first, so you really know what’s going on, but you should make use of a JS library when you start developing web sites. You’ll have less issues to deal with and at least the bugs that appear will be ones that can be reproduced — not random browser issues.

My personal favourite is [the Yahoo User Interface library (YUI)][10], followed by [jQuery][11], [Dojo][12] and [Prototype][13] but there are dozens of other good libraries out there and you should find the one that suits you and your product best.

[10]: http://developer.yahoo.com/yui
[11]: http://jquery.com/
[12]: http://www.dojotoolkit.org/
[13]: http://www.prototypejs.org/

Whilst all libraries do work well together, it is not a good idea to use several libraries in the same project. This brings in another superfluous level of complexity and maintenance.

## Development code is not live code {#liveanddev}

The last point I want to make is not about JavaScript itself but about how it fits into the rest of your development strategy. As any change in JavaScript has an immediate effect on the performance and functionality of your web applications it is very tempting to optimize your code as much as possible regardless of the consequences for maintenance.

There are a lot of clever tricks you can apply to JavaScript to make it perform great. Most of them come with the drawback of making your code hard to understand and maintain.

In order to write secure, working JavaScript we need to break this cycle and stop optimizing code for machines rather than other developers. Most — something that is very common in other languages but not as well known amongst JavaScripters. A build script can remove whitespace, comments, replace strings with Array lookups (to avoid MSIE creating a string object for every single instance of a string — even in conditions) and do all the other small tweaks needed to make our JavaScript fly in browsers.

If we concentrate more on making the initial code easy to understand and extend by other developers we can create the perfect build script. If we keep optimizing prematurely we’ll never get there. Do not build for yourself or the browser — build for the next developer who takes over from you.

## Summary

The main trick with JavaScript is to avoid taking the easy path. JavaScript is a wonderfully versatile language and as the environment it is executed in is very forgiving it is easy to write sloppy code that seemingly does the job. This same code however will come back to bite you a few months down the line.

JavaScript development has mutated from a fringe knowledge area to an absolute necessity if you want to have a job as a web developer. If you are starting right now you are lucky, as myself and many others have already made most of the mistakes and done all the trial and error self-teaching; we can now pass that knowledge along.
