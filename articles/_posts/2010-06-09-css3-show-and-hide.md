---
title: Showing and Hiding Content With Pure CSS3
authors:
- corey-mwamba
intro: 'Creating expanding and collapsing (or show and hide) content on websites used to be the domain of JavaScript, but in modern times we can recreate such functionality without JavaScript, using a combination of `:focus`, and CSS3 opacity and transitions. In this article, Corey Mwamba shows you how.'
license: cc-by-3.0
---
## Introduction

Modern websites and applications are more dynamic than old style web pages, with several pieces of well-placed JavaScript providing smoother content updates, more intuitive user feedback and more responsive controls. One very common feature is the expanding/collapsing or shown/hidden box, whether this is a tabbed interface, a content "tray" on the side that can be slid out and then put away again, or a complex tree menu with expanding/collapsing sub-menus.

Generally, these features are implemented via JavaScript, however using CSS3 it is possible to create such content using only HTML and CSS — no JavaScript required. In this article I'll show you how this works, including a few examples to get you started.

## Contents

  1. A simple example
  2. A real world solution
  3. Expanding and collapsing with CSS
  4. Styling the menu: a smoother ride
  5. Taking care of the elderly

## A simple example

Here's a [simple example][1] of disappearing/appearing content, created using only HTML and CSS:

   [1]: {{ page.id }}/css-menu-ex1.html

	<!DOCTYPE html>
	<html>
		<head>
			 <title>menu mockup</title>
			 <style type="text/css">
					.show {display: none; }
					.hide:focus + .show {display: inline; }
					.hide:focus { display: none; }
					.hide:focus ~ #list { display:none; }
					@media print { .hide, .show { display: none; } }
			 </style>
		</head>
		<body>
			 <p>Here's a list</p>
					<div>
						 <a href="#" class="hide">[hide]</a>
						 <a href="#" class="show">[show]</a>
						 <ol id="list">
								<li>item 1</li>
								<li>item 2</li>
								<li>item 3</li>
						 </ol>
					</div>
			 <p>How about that?</p>
		</body>
	</html>

When the "hide" link is selected, it and the list below disappear, and the "show" link is displayed. If you look at a print preview of the page, the toggle is not shown.

Care must always be taken to ensure that content is still accessible to legacy browsers, but that's easy with this technique — if the CSS3 is not supported, you will simply see all of the content, and the show/hide functionality will not be available. This method could also be used as a fall-back in CSS3-capable browsers that have JavaScript disabled, or a replacement technique for designers with more knowledge of CSS than JavaScript.

Now we've walked through a simple example, let's look at the technique and surrounding concepts in more detail, and build it up into a nice-looking navigation menu.

## A real world solution

This technique gives us a solution for the following set of requirements:

  * I want to make content under specific headings expandable/collapsible, for example the content menus on [Wikipedia pages][2].
  * I don't want to use any JavaScript.

   [2]: http://en.wikipedia.org/wiki/Quantitative_easing

Let's start our analysis by looking at a JavaScript-based solution; the part that contains the Wikipedia article contents menu. I've reduced the number of items on the list, for brevity.

	<table id="toc" class="toc">
		<tr>
			<td>
				<div id="toctitle">
					<h2>Contents</h2>
				</div>
				<ul>
					<li class="toclevel-1 tocsection-1"><a href="#Concept"><span class="tocnumber">1</span> <span class="toctext">Concept</span></a></li>
					_...and the rest_
				</ul>
			</td>
		</tr>
	</table>
	<script type="text/javascript">
		//<![CDATA[
			if (window.showTocToggle) { var tocShowText = "show"; var tocHideText = "hide"; showTocToggle(); }
		//]]>
	</script>

This takes the form of a table with one cell that contains a list. Why the table? Well, it's a table of contents. But I also suspect the most convenient way to get the border to grow and shrink was to surround the menu in a table cell.

There's then a script block that adds the switch. To make the switch, there are three functions contained in the file `wikibits.js` (look in Opera Dragonfly - they're between lines 125 and 184).

The `showTocToggle` function in `wikibits.js` looks for an element with an `id` of "toctitle" (in this case, the `div`), appends a `<span>` container for the square brackets, and then places the toggle link inside the `<span>`. Since the toggle is appended through JavaScript, it doesn't appear when printed.

There's then a fairly short function to change the text of the switch, and lastly a longer block that actually does the work and applies the styles for the table. This all amounts to around forty lines of code for the switch.

## Expanding and collapsing with CSS

I'm going to try to recreate the Wikipedia menu, but only using CSS. We'll lose some things on the way, but gain some benefits too.

An anchor can link to any part of a page using a fragment identifier, for example `<a href="#end">go to end</a>` will link to the element with an `id` (or `name`) of `end`. In this example, we'll use a slightly different approach — we'll use an anchor like this, not to navigate to another area of the page, but to toggle between two states: collapsed and expanded. To start with, the HTML for our menu looks like so:

	<div id="nav">
		<h2>Contents</h2>
		<a href="#" class="hide">[hide]</a>
		<a href="#" class="show">[show]</a>
		<ol id="menu">
			<li><a href="#sec2">Real-world issues</a></li>
			_... and the rest_
		</ol>
	</div>

Like the Wikipedia content menus, we'll start with the menu expanded. Let's create two reasonably-named classes, .hide and .show, and say that since the box is expanded, we don't want the .show class to be displayed:

	.show {
		display: none;
	}

Next we need some rules that show the `[show]` link and hide the `[hide]` link when the `[hide]` link is clicked on. This can be done using the `:focus` pseudo-class, which is triggered when the link is selected using the mouse pointer or keyboard. This is good for accessibility, but it also brings with it a problem — see the short note near the end of the article. The rules are as follows — note that we are using the direct sibling selector (+) to make sure that the `[hide]` switch only affects the `[show]` switch that is next to it.

	a.hide:focus + .show {
		display: inline;
	}
	a.hide:focus {
		display: none;
	}

At this point you can check out the [working but non-functional display switch.][3]

   [3]: {{ page.id }}/css-menu-ex2.html

Let's put the switch to work! We'll create a menu list and put it in a block container so the links can sit inside a neat box that can be styled. We need to connect our switch to the list — the simplest thing to do is set the list (identified with an `id` of `#menu`) to not be displayed when `.hide` has focus. We'll do this using the indirect sibling selector (`~`), because the hiding link is not directly next to the list in the DOM:

	a.hide:focus ~ #menu {
		display:none;
	}

One last adjustment — we need to hide the switch when the page is printed. The _quickest way_ to do this is to use a CSS media query that checks for a print media-type, and then does not display the switch at all if this is the medium being used:

	@media print {
		.hide, .show  {
			display: none;
			}
		}

At this point, the functionality we have implemented gives us a [toggle that shows/hides content][4]. This is the same as the first example we looked at in the chapter.

   [4]: {{ page.id }}/css-menu-ex1.html

This now gives us the exact same functionality as the Wikipedia menu, albeit with minimal styling — we'll cover that in the next section. Bear in mind that not only have we not used any scripting, but also that the style-sheet declarations are extremely simple. In the Wikipedia page the three functions for the table of contents toggle comes to around forty lines of code. Would you rather write forty lines of JavaScript, or five CSS declarations?

## Styling the menu: a smoother ride

Now we've got our functionality in place, we want it to look good! In this section we will look at how we can use some other CSS3 features to give it a much nicer look and feel.

### Fading effects

Instead of just appearing and disappearing, it would be nice for the menu to fade in and out smoothly. Luckily for us, the CSS3 transitions module allows us to change a value over a set period of time — perfect! In short, the idea is that you create a default state for the element you want to transition, and specify the properties you want to transition, and how long you want the transition to last. Then you specify a transitioned state of that element (for instance, using `:hover`), which contains the end state of the transition. When the state change occurs (e.g., the element is hovered over), you see a smooth transition between the two states, rather than just an instant flip from one to the other. For more details on the basics of transitions, read [CSS3 transitions and 2D transforms][5].

   [5]: http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/

Going back to our example, we want to create a transition between completely opaque and completely transparent, which occurs when the menu goes from shown to hidden. We can represent these two states as follows:

	#menu {
		opacity: 1;
	}
	a.hide:focus ~ #menu {
		opacity: 0;
	}

Instead of putting the transition properties directly on these elements, it is more reusable to create a separate class to handle this transition:

	.tran1 {
		-o-transition: all 1s;
		-moz-transition: all 1s;
		-webkit-transition: all 1s;
		transition: all 1s;
	}

The `transition` shorthand specifies that all properties that are changed when the state changes should be transitioned over a period of one second. Note that this includes vendor prefixes for Opera, Gecko (Mozilla) and Webkit, and that we've also included the official W3C syntax at the end for when browsers drop the prefixed versions.

You can then apply this class to any element that you want to transition:

	<span id="#secret" class="tran1">Peekaboo!</span>

You can see a [basic example of this CSS fade transition][6] in action.

   [6]: {{ page.id }}/css-menu-ex3.html

### The growing box

So now the box appears and disappears when it is shown and hidden, but it would be nice to take it a step further, and make the box expand and collapse as it appears and disappears! This is actually remarkably simple to add, as the transition is already set up to transition all elements that change upon `:focus`. Therefore you just need to add the start and end height for the expanding/collapsing transition to the relevant rules:

	#menu {
		opacity: 1; height: 9em;
		overflow: hidden;
	}
	a.hide:focus ~ #menu {
		opacity: 0; height: 0em;
	}

We've also added `overflow: hidden;` to the menu, so that the menu options expand only to the bottom edge of the `#menu` box, and don't spill out of the bottom when the box is shorter than the text. For extra pizazz I added a hover effect to the surrounding container — [check out the final menu example!][7]

   [7]: {{ page.id }}/css-menu-ex4.html

## Taking care of the elderly

AKA, what are we going to do about Internet Explorer??

This is nowhere near as problematic as you might think. No version of Internet Explorer understands CSS3, and only Internet Explorer 8 understands `:focus`. But all this means is that IE will just be shown the full expanded menu. No fancy visual effects, but all the content is perfectly usable.

One problem that remains is that IE will display the `[hide]` link, but it won't do anything. The best way to deal with this is to hide the switches from _every browser_, and then use a media query (which all modern browsers support, except IE) to show them again for the other browsers before implementing the switch mechanism:

	.hide, .show {
		display: none;
	}
	@media all and (min-width:1px) {
		.hide, .show  {
			display: inline;
			}
		}

Of course, we might have to change this code if IE starts to understand media queries before it understands some of the other CSS3 features. But for now, it's a reasonable solution.

The method of hiding the toggles when printing also currently uses a media query:

	@media print {
		.hide, .show  {
			display: none;
			}
		}

A better cross-browser solution would be to include a print stylesheet in the `<head>` of your document, like so:

	<link rel="stylesheet" href="print.css" type="text/css" media="print">

You could then include the rule to hide the toggle in that stylesheet:

	.hide, .show  {
		display: none;
	}

Unfortunately, Webkit-based browsers also have a problem with the switch. I have not confirmed this for sure, but it seems that Webkit is foxed by the combination of the pseudo selector (`:focus`) and the indirect sibling selector (`~`). The only option here is to hide the switch using a Webkit-only media query after the other queries:

	@media screen and (-webkit-min-device-pixel-ratio:0) {
		.hide, .show  {
			display: none;
		}
	}

You could use this as the basis of a Webkit-friendly alternative solution. With any luck this will be fixed in newer versions.

## The final style sheet in full

	.tran1 {
		-o-transition: all 1s;
		-moz-transition: all 1s;
		-webkit-transition: all 1s;
		transition: all 1s;
	}
	#nav {
		padding: 1ex;
		border: 2px solid #aaa;
		background-color: #ccf;
		margin: 1em;
		width: 50%;
	}
	#nav:hover {
		border: 2px solid #ddd;
		background-color: #eef;
	}
	#nav h2 {
		display: inline;
		vertical-align: middle;
	}

	.hide, .show  {
		display: none;
		font-size: 80%;
		vertical-align: middle;
	}

	@media all and (min-width:1px) {
		.hide, .show  {
			display: inline;
			}
		}

	a.hide:focus + .show {
		display: inline;
	}
	.show {
		display: none;
	}
	a.hide:focus {
		display: none;
	}

	#menu {
		opacity: 1;
		height:3em;
		margin-top: 0em;
		width: auto;
		margin-left: -1ex;
		overflow: hidden;
	}
	a.hide:focus ~ #menu {
		opacity: 0;
		height: 0em;
	}

	@media print {
		.hide, .show  {
			display: none;
		}
		#nav {
			position: static;
			border: none;
			width: auto;
		}
		#menu {
			width: auto;
		}
	}

**When you lose focus, everything changes**: One issue with this technique is that if you select the switch, then focus something else on the page, the menu is reset. That's correct behaviour for links, but it isn't necessarily the behaviour we want in this context. The Wikipedia menu certainly does not have that problem. What's more, the Wikipedia toggle uses a cookie so it can remember its state from last time, whereas the menu state for the CSS version will always reset upon page reload. There is not really a way around this.

## Summary

This marks the end of my article — you really can't argue with the simplicity of this method compared to any equivalent JavaScript solution. And when used with other elements, the technique can be used to create interesting CSS-only interface features. There are other interesting and similar methods of using `:focus` and `:target`, which I'll cover in a future article.
