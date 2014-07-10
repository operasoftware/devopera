---
title: Showing and Hiding Content With Pure CSS3
authors:
- corey-mwamba
intro: 'Creating expanding and collapsing (or show and hide) content on websites used to be the domain of JavaScript, but in modern times we can recreate such functionality without JavaScript, using a combination of `:focus`, and CSS3 opacity and transitions. In this article, Corey Mwamba shows you how.'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>Modern websites and applications are more dynamic than old style web pages, with several pieces of well-placed JavaScript providing smoother content updates, more intuitive user feedback and more responsive controls. One very common feature is the expanding/collapsing or shown/hidden box, whether this is a tabbed interface, a content "tray" on the side that can be slid out and then put away again, or a complex tree menu with expanding/collapsing sub-menus.</p>

<p>Generally, these features are implemented via JavaScript, however using CSS3 it is possible to create such content using only HTML and CSS — no JavaScript required. In this article I'll show you how this works, including a few examples to get you started.</p>

<div>
<h2>Contents</h2>
	<ol id="toc">
<li><a href="#sec1">A simple example</a></li>
<li><a href="#sec2">A real world solution</a></li>
<li><a href="#sec3">Expanding and collapsing with CSS</a></li>
<li><a href="#sec5">Styling the menu: a smoother ride</a></li>
<li><a href="#sec6">Taking care of the elderly</a></li>
	</ol>
</div>

<h2 id="sec1">A simple example</h2>

<p>Here's a <a href="/articles/view/css3-show-and-hide/css-menu-ex1.html">simple example</a> of disappearing/appearing content, created using only HTML and CSS:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;head&gt;
	 &lt;title&gt;menu mockup&lt;/title&gt;
	 &lt;style type="text/css"&gt;
			.show {display: none; }
			.hide:focus + .show {display: inline; }
			.hide:focus { display: none; }
			.hide:focus ~ #list { display:none; }
			@media print { .hide, .show { display: none; } }
	 &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
	 &lt;p&gt;Here's a list&lt;/p&gt;
			&lt;div&gt;
				 &lt;a href="#" class="hide"&gt;[hide]&lt;/a&gt;
				 &lt;a href="#" class="show"&gt;[show]&lt;/a&gt;
				 &lt;ol id="list"&gt;
						&lt;li&gt;item 1&lt;/li&gt;
						&lt;li&gt;item 2&lt;/li&gt;
						&lt;li&gt;item 3&lt;/li&gt;
				 &lt;/ol&gt;
			&lt;/div&gt;
	 &lt;p&gt;How about that?&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>


<p>When the "hide" link is selected, it and the list below disappear, and the "show" link is displayed. If you look at a print preview of the page, the toggle is not shown.</p>

<p>Care must always be taken to ensure that content is still accessible to legacy browsers, but that's is easy with this technique — if the CSS3 is not supported, you will simply see all of the content, and the show/hide functionality will not be available. This method could also be used as a fall-back in CSS3-capable browsers that have JavaScript disabled, or a replacement technique for designers with more knowledge of CSS than JavaScript.</p>

<p>Now we've walked through a simple example, lets look at the technique and surrounding concepts in more detail, and build it up into a nice-looking navigation menu.</p>

<h2 id="sec2">A real world solution</h2>

<p>This technique gives us a solution for the following set of requirements:</p>

<ul>
<li>I want to make content under specific headings expandable/collapsible, for example the content menus on <a href="http://en.wikipedia.org/wiki/Quantitative_easing">Wikipedia pages</a>.</li>
<li>I don't want to use any JavaScript.</li>
</ul>

<p>Let's start our analysis by looking at a JavaScript-based solution; the part that contains the Wikipedia article contents menu. I've reduced the number of items on the list, for brevity.</p>


<pre><code>&lt;table id="toc" class="toc"&gt;
	&lt;tr&gt;
		&lt;td&gt;
			&lt;div id="toctitle"&gt;
				&lt;h2&gt;Contents&lt;/h2&gt;
			&lt;/div&gt;
			&lt;ul&gt;
				&lt;li class="toclevel-1 tocsection-1"&gt;&lt;a href="#Concept"&gt;&lt;span class="tocnumber"&gt;1&lt;/span&gt; &lt;span class="toctext"&gt;Concept&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
				<em>...and the rest</em>
			&lt;/ul&gt;
		&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;
&lt;script type="text/javascript"&gt;
	//&lt;![CDATA[
		if (window.showTocToggle) { var tocShowText = "show"; var tocHideText = "hide"; showTocToggle(); }
	//]]&gt;
&lt;/script&gt;</code></pre>

<p>This takes the form of a table with one cell that contains a list. Why the table? Well, it's a table of contents. But I also suspect the most convenient way to get the border to grow and shrink was to surround the menu in a table cell.</p>
<p>There's then a script block that adds the switch. To make the switch, there are three functions contained in the file <code>wikibits.js</code> (look in Opera Dragonfly - they're between lines 125 and 184).</p>

<p>The <code>showTocToggle</code> function in <code>wikibits.js</code> looks for an element with an <code>id</code> of "toctitle" (in this case, the <code>div</code>), appends a <code>&lt;span&gt;</code> container for the square brackets, and then places the toggle link inside the <code>&lt;span&gt;</code>. Since the toggle is appended through JavaScript, it doesn't appear when printed.</p>

<p>There's then a fairly short function to change the text of the switch, and lastly a longer block that actually does the work and applies the styles for the table. This all amounts to around forty lines of code for the switch.</p>

<h2 id="sec3">Expanding and collapsing with CSS</h2>

<p>I'm going to try to recreate the Wikipedia menu, but only using CSS. We'll lose some things on the way, but gain some benefits too.</p>

<p>An anchor can link to any part of a page using a fragment identifier, for example <code>&lt;a href="#end"&gt;go to end&lt;/a&gt;</code> will link to the element with an <code>id</code> (or <code>name</code>) of <code>end</code>. In this example, we'll use a slightly different approach — we'll use an anchor like this, not to navigate to another area of the page, but to toggle between two states: collapsed and expanded. To start with, the HTML for our menu looks like so:</p>

<pre><code>&lt;div id="nav"&gt;
&lt;h2&gt;Contents&lt;/h2&gt;
&lt;a href="#" class="hide"&gt;[hide]&lt;/a&gt;
&lt;a href="#" class="show"&gt;[show]&lt;/a&gt;
&lt;ol id="menu"&gt;
&lt;li&gt;&lt;a href="#sec2"&gt;Real-world issues&lt;/a&gt;&lt;/li&gt;
<em>... and the rest</em>
&lt;/ol&gt;
&lt;/div&gt;</code></pre>

<p>Like the Wikipedia content menus, we'll start with the menu expanded. Let's create two reasonably-named classes, .hide and .show, and say that since the box is expanded, we don't want the .show class to be displayed:</p>

<pre><code>.show { display: none; }</code></pre>

<p>Next we need some rules that show the <code>[show]</code> link and hide the <code>[hide]</code> link when the [hide] link is clicked on. This can be done using the <code>:focus</code> pseudo-class, which is triggered when the link is selected using the mouse pointer or keyboard. This is good for accessibility, but it also brings with it a problem — <a href="#issue2">see the short note near the end of the article</a>. The rules are as follows — note that we are using <dfn>the direct sibling selector</dfn> (+) to make sure that the <code>[hide]</code> switch only affects the <code>[show]</code> switch that is next to it.</p>

<pre><code>a.hide:focus + .show { display: inline; }
a.hide:focus { display: none; }</code></pre>

<p>At this point you can check out the <a href="/articles/view/css3-show-and-hide/css-menu-ex2.html">working but non-functional display switch.</a></p>

<p>Let's put the switch to work! We'll create a menu list and put it in a block container so the links can sit inside a neat box that can be styled. We need to connect our switch to the list — the simplest thing to do is set the list (identified with an <code>id</code> of <code>#menu</code>) to not be displayed when <code>.hide</code> has focus. We'll do this using <dfn>the indirect sibling selector</dfn> (~), because the hiding link is not directly next to the list in the DOM:</p>

<pre><code>a.hide:focus ~ #menu { display:none; }</code></pre>

<p>One last adjustment — we need to hide the switch when the page is printed. The <em>quickest way</em> to do this is to use a CSS media query that checks for a print media-type, and then does not display the switch at all if this is the medium being used:</p>

<pre><code>@media print {.hide, .show  { display: none; } }</code></pre>

<p>At this point, the functionality we have implemented gives us a <a href="/articles/view/css3-show-and-hide/css-menu-ex1.html">toggle that shows/hides content</a>. This is the same as the first example we looked at in the chapter.</p>

<p>This now gives us the exact same functionality as the Wikipedia menu, albeit with minimal styling — we'll cover that in the next section. Bear in mind that not only have we not used any scripting, but also that the style-sheet declarations are extremely simple. In the Wikipedia page the three functions for the table of contents toggle comes to around forty lines of code. Would you rather write forty lines of JavaScript, or five CSS declarations?</p>

<h2 id="sec5">Styling the menu: a smoother ride</h2>

<p>Now we've got our functionality in place, we want it to look good! In this section we will look at how we can use some other CSS3 features to give it a much nicer look and feel.</p>

<h3>Fading effects</h3>
<p>Instead of just appearing and disappearing, it would be nice for the menu to fade in and out smoothly. Luckily for us, the CSS3 transitions module allows us to change a value over a set period of time — perfect! In short, the idea is that you create a default state for the element you want to transition, and specify the properties you want to transition, and how long you want the transition to last. Then you specify a transitioned state of that element (for instance, using <code>:hover</code>), which contains the end state of the transition. When the state change occurs (e.g., the element is hovered over), you see a smooth transition between the two states, rather than just an instant flip from one to the other. For more details on the basics of transitions, read <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/">CSS3 transitions and 2D transforms</a>.</p>

<p>Going back to our example, we want to create a transition between completely opaque and completely transparent, which occurs when the menu goes from shown to hidden. We can represent these two states as follows:</p>

<pre><code>#menu { opacity: 1; }
a.hide:focus ~ #menu { opacity: 0;  }</code></pre>

<p>Instead of putting the transition properties directly on these elements, it is more reusable to create a separate class to handle this transition:</p>

<pre><code>.tran1 { -o-transition: all 1s;
				 -moz-transition: all 1s;
				 -webkit-transition: all 1s;
				 transition: all 1s;
}</code></pre>

<p>The <code>transition</code> shorthand specifies that all properties that are changed when the state changes should be transitioned over a period of one second. Note that this includes vendor prefixes for Opera, Gecko (Mozilla) and Webkit, and that we've also included the official W3C syntax at the end for when browsers drop the prefixed versions.</p>

<p>You can then apply this class to any element that you want to transition:</p>

<pre><code>&lt;span id="#secret" class="tran1"&gt;Peekaboo!&lt;/span&gt;</code></pre>

<p>You can see a <a href="/articles/view/css3-show-and-hide/css-menu-ex3.html">basic example of this CSS fade transition</a> in action.</p>

<h3>The growing box</h3>

<p>So now the box appears and disappears when it is shown and hidden, but it would be nice to take it a step further, and make the box expand and collapse as it appears and disappears! This is actually remarkably simple to add, as the transition is already set up to transition all elements that change upon <code>:focus</code>. Therefore you just need to add the start and end height for the expanding/collapsing transition to the relevant rules:</p>

<pre><code>#menu { opacity: 1; <strong>height: 9em;</strong> overflow: hidden }
a.hide:focus ~ #menu { opacity: 0; <strong>height: 0em;</strong> }</code></pre>

<p>We've also added <code>overflow: hidden;</code> to the menu, so that the menu options expand only to the bottom edge of the <code>#menu</code> box, and don't spill out of the bottom when the box is shorter than the text. For extra pizazz I added a hover effect to the surrounding container — <a href="/articles/view/css3-show-and-hide/css-menu-ex4.html">check out the final menu example!</a></p>

<h2 id="sec6">Taking care of the elderly</h2>
<p><abbr title="Also Known As">AKA</abbr>, <q>What are we going to do about Internet Explorer??</q></p>
<p>This is nowhere near as problematic as you might think. No version of Internet Explorer understands CSS3, and only Internet Explorer 8 understands <code>:focus</code>. But all this means is that IE will just be shown the full expanded menu. No fancy visual effects, but all the content is perfectly usable.</p>

<p>One problem that remains is that IE will display the <code>[hide]</code> link, but it won't do anything. The best way to deal with this is to hide the switches from <em>every browser</em>, and then use a media query (which all modern browsers support, except IE) to show them again for the other browsers before implementing the switch mechanism:</p>

<pre><code>.hide, .show  { display: none; }
@media all and (min-width:1px) { .hide, .show  { display: inline; } }</code></pre>

<p>Of course, we might have to change this code if IE starts to understand media queries before it understands some of the other CSS3 features. But for now, it's a reasonable solution.</p>



<p>The method of hiding the toggles when printing also currently uses a media query:</p>

<pre><code>@media print {.hide, .show  { display: none; } }</code></pre>

A better cross-browser solution would be to include a print stylesheet in the <code>&lt;head&gt;</code> of your document, like so:

<pre><code>&lt;link rel="stylesheet" href="print.css" type="text/css" media="print"&gt;</code></pre>

<p>You could then include the rule to hide the toggle in that stylesheet:</p>

<pre><code>.hide, .show  { display: none; }</code></pre>

<p>Unfortunately, Webkit-based browsers also have a problem with the switch.
I have not confirmed this for sure, but it seems that Webkit is foxed by the combination of
the pseudo selector (<code>:focus</code>) and the indirect sibling selector (<code>~</code>). The only
option here is to hide the switch using a Webkit-only media query after the
other queries:</p>

<pre><code>@media screen and (-webkit-min-device-pixel-ratio:0) {
	.hide, .show  { display: none; }
}</code></pre>

<p>You could use this as the basis of a Webkit-friendly alternative solution. With any luck this will be fixed in newer versions.</p>

<h2>The final style sheet in full</h2>

<pre><code>.tran1 { -o-transition: all 1s;-moz-transition: all 1s;-webkit-transition: all 1s; transition: all 1s;}
#nav { padding: 1ex; border: 2px solid #aaa; background-color: #ccf; margin: 1em; width: 50%; }
#nav:hover { border: 2px solid #ddd; background-color: #eef; }
#nav h2 { display: inline; vertical-align: middle; }

.hide, .show  { display: none;  font-size: 80%; vertical-align: middle; }

@media all and (min-width:1px) { .hide, .show  { display: inline; } }

a.hide:focus + .show { display: inline; }
.show { display: none; }
a.hide:focus { display: none; }

#menu { opacity: 1; height:3em; margin-top: 0em; width: auto; margin-left: -1ex; overflow: hidden; }
a.hide:focus ~ #menu { opacity: 0; height: 0em; }

@media print {
.hide, .show  { display: none; }
#nav { position: static; border: none; width: auto; }
#menu { width: auto; }
}</code></pre>

<p class="note" id="issue2"><strong>When you lose focus, everything changes</strong>: One issue with this technique is that if you select the switch, then focus something else on the page, the menu is reset. That's correct behaviour for links, but it isn't necessarily the behaviour we want in this context. The Wikipedia menu certainly does not have that problem. What's more, the Wikipedia toggle uses a cookie so it can remember its state from last time, whereas the menu state for the CSS version will always reset upon page reload. There is not really a way around this.</p>

<h2>Summary</h2>
<p>This marks the end of my article — you really can't argue with the simplicity of this method compared to any equivalent JavaScript solution. And when used with other elements, the technique can be used to create interesting CSS-only interface features. There are other interesting and similar methods of using <code>:focus</code> and <code>:target</code>, which I'll cover in a future article.</p>
