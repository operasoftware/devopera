---
title: Beautiful UI styling with CSS3 `text-shadow`, `box-shadow`, and `border-radius`
authors:
- henrik-helmers
intro: 'CSS3 shadows and rounded corners are easy to understand at a basic level, but what if you want to start using them in more advanced UI styling, such as textured buttons and semi-transparent glass effects? In this article Opera designer Jan Henrik Helmers hows you how to create these UI features and more, using CSS3 features, and no images whatsoever.'
tags:
- border-radius
- box-shadow
- css3
- open-web
- text-shadow
- ui
layout: article
---

## Introduction

Previous articles have covered the basics of [CSS3 transitions and 2D transforms][1] and [CSS3 borders, backgrounds and box-shadows][2]; refer to those articles if you need to read up on the basics of using these properties.

[1]: /articles/css3-transitions-and-2d-transforms/
[2]: /articles/css3-borders-backgrounds-boxes/

This article takes things further, showing how to use these properties to create beautiful UI elements **without** the use of any images, JavaScript or Flash. This last line highlights the real beauty of CSS3 — many of its features are designed to save you time otherwise spent creating and updating graphics in Photoshop. It makes techniques such as drop shadows and animated UI elements accessible to web developers and designers without scripting smarts or mad Photoshop skills.

## Contents:

- [Where can they be applied?](#whereapplied)
- [Take 1: Buttons](#buttons)
	- [Stage 1: The basic shape](#stageone)
	- [Stage 2: Adding some light and shadow](#stagetwo)
	- [Stage 3: Adding text style](#stagethree)
	- [Variation 1: A red button](#redbutton)
	- [Variation 2: A Twitter-esque button](#twitterbutton)
	- [Variation 3: A download button](#downloadbutton)
- [Take 2: Containing boxes](#boxes)
	- [Box 1: Surf’s up](#surfbox)
	- [Box 2: Ghosted grey](#ghostbox)
	- [Box 3: They call me Mr. Glass](#glassbox)
- [Take 3: Advanced examples](#advanced)
	- [Media player](#mediaplayer)
	- [A certain phone home screen](#phone)
	- [A Windows desktop](#windowsdesktop)
- [Summary](#summary)

## Where can they be applied? {#whereapplied}

Support for these CSS3 features was introduced in Opera 10.50, and you’ll also be able to rely on most of them in the latest versions of Firefox, Safari and Chrome.

<table>
<tr>
	<th scope="row">Browser</th>
	<th>Opera 10.50</th>
	<th>Opera 10.10</th>
	<th>Safari 4.x</th>
	<th>Chrome 4/5</th>
	<th>Firefox 3.6</th>
	<th>IE 8 and below</th>
</tr>
<tr>
	<th scope="row" markdown="span">`text-shadow`</th>
	<td>Yes</td>
	<td>Yes</td>
	<td>Yes</td>
	<td>Yes</td>
	<td>Yes</td>
	<td>No</td>
</tr>
<tr>
	<th scope="row" markdown="span">`border-radius`</th>
	<td>Yes</td>
	<td>No</td>
	<td>Yes</td>
	<td>Yes</td>
	<td>Yes</td>
	<td>No</td>
</tr>
<tr>
	<th scope="row" markdown="span">`box-shadow`</th>
	<td>Yes</td>
	<td>No</td>
	<td>Yes</td>
	<td>Yes</td>
	<td>Yes</td>
	<td>No</td>
</tr>
<tr>
	<th scope="row" markdown="span">`box-shadow:inset`</th>
	<td>Yes</td>
	<td>No</td>
	<td>No</td>
	<td>Yes</td>
	<td>Yes</td>
	<td>No</td>
</tr>
</table>

Of course, in the real web most of us are stuck having to support Internet Explorer, which doesn’t yet support any of these properties. The best place to use them is therefore an environment where you can control what browser will be used. A prime example here is [Opera Widgets][20], which run on the Opera core engine and therefore include modern browser features. An intranet is also a good example, so long as you can get your staff or society members all using a good modern browser!

[20]: http://widgets.opera.com

For the Web at large, however, all is not lost. These properties degrade gracefully in browsers that don’t support them, meaning that you’ll still get a usable UI, even if it doesn’t look as hot. You can also provide fallbacks for browsers that don’t support these properties, for example using [IE conditional comments][21].

[21]: /articles/supporting-ie-with-conditional-comments/

It is really a matter of who your target audience is, and providing an acceptable user experience to them. This does not necessarily mean _the same_ user experience for all web users.

One thing to be aware of is that using a lot of `box-shadow` properties is expensive in terms of processing — especially when you make heavy use of blurring. If you want to use these effects in your Widgets and web applications, you should test carefully, especially on mobile and other lower-power devices as they start to support these features.

## Take 1: Buttons {#buttons}

One of the most obvious applications of these properties is to simplify button design. Todays buttons are typically created in a particular pattern. The button usually has rounded corners. Light comes from the top, and shadow appears below the button. Often there is a glass shine effect on the button itself. The text is often white (or another light colour) with a dark drop shadow, or vice-versa, to give an embossed or raised effect. Let’s now go through some examples of what is possible, starting with a step-by-step button construction.

### Stage 1: The basic shape {#stageone}

First up, I’ll set a basic core colour for the button, and give it rounded corners:

	button {
		padding:5px 30px;
		border:none;
		border-radius:4px;
		background-color:lightgreen;
		}

The result of this code is as follows:

<figure>
	<button id="demo-1">Test</button>
	<style>
		#demo-1 {
			padding:5px 30px;
			border:none;
			border-radius:4px;
			background-color:lightgreen;
			}
	</style>
</figure>

### Stage 2: Adding some light and shadow {#stagetwo}

Next I’ll add two box shadows to the button, to make it look 3D: raised up, and slightly convex on top:

	button {
		padding:5px 30px;
		border:none;
		border-radius:4px;
		background:lightgreen;
		-webkit-box-shadow:
			inset 0 5px 10px yellow,
			0 1px 1px green;
		-moz-box-shadow:
			inset 0 5px 10px yellow,
			0 1px 1px green;
		box-shadow:
			inset 0 5px 10px yellow,
			0 1px 1px green;
		}

Here’s the result of this addition:

<figure>
	<button id="demo-2">Test</button>
	<style>
		#demo-2 {
			padding:5px 30px;
			border:none;
			border-radius:4px;
			background:lightgreen;
			-webkit-box-shadow:
				inset 0 5px 10px yellow,
				0 1px 1px green;
			-moz-box-shadow:
				inset 0 5px 10px yellow,
				0 1px 1px green;
			box-shadow:
				inset 0 5px 10px yellow,
				0 1px 1px green;
			}
	</style>
</figure>

### Stage 3: Adding text style {#stagethree}

Finally, I’ll give the button text a more fitting colour, and give it a lighter drop shadow to make it look slightly embossed:

	button {
		padding:5px 30px;
		border:none;
		border-radius:4px;
		-webkit-box-shadow:
			inset 0 5px 10px yellow,
			0 1px 1px green;
		-moz-box-shadow:
			inset 0 5px 10px yellow,
			0 1px 1px green;
		box-shadow:
			inset 0 5px 10px yellow,
			0 1px 1px green;
		background:lightgreen;
		color:darkgreen;
		text-shadow:0 1px 1px lightyellow;
	}

Here is our final result:

<figure>
	<button id="demo-3">Test</button>
	<style>
		#demo-3 {
			padding:5px 30px;
			border:none;
			border-radius:4px;
			-webkit-box-shadow:
				inset 0 5px 10px yellow,
				0 1px 1px green;
			-moz-box-shadow:
				inset 0 5px 10px yellow,
				0 1px 1px green;
			box-shadow:
				inset 0 5px 10px yellow,
				0 1px 1px green;
			background:lightgreen;
			color:darkgreen;
			text-shadow:0 1px 1px lightyellow;
			}
	</style>
</figure>

### Variation 1: A red button {#redbutton}

	button {
		padding:5px 30px;
		border:1px solid maroon;
		border-radius:4px;
		-webkit-box-shadow:
			inset 0 1px 3px pink,
			inset 0 -5px 15px maroon,
			0 2px 1px black;
		-moz-box-shadow:
			inset 0 1px 3px pink,
			inset 0 -5px 15px maroon,
			0 2px 1px black;
		box-shadow:
			inset 0 1px 3px pink,
			inset 0 -5px 15px maroon,
			0 2px 1px black;
		background-color:red;
		color:white;
		text-shadow:0 1px 1px black;
		}

The result is as follows:

<figure>
	<button id="demo-4">Test</button>
	<style>
		#demo-4 {
			border:1px solid maroon;
			border-radius:4px;
			-webkit-box-shadow:
				inset 0 1px 3px pink,
				inset 0 -5px 15px maroon,
				0 2px 1px black;
			-moz-box-shadow:
				inset 0 1px 3px pink,
				inset 0 -5px 15px maroon,
				0 2px 1px black;
			box-shadow:
				inset 0 1px 3px pink,
				inset 0 -5px 15px maroon,
				0 2px 1px black;
			background-color:red;
			color:white;
			text-shadow:0 1px 1px black;
			padding:5px 30px;
			}
	</style>
</figure>

### Variation 2: A Twitter-esque button {#twitterbutton}

	button{
		padding:5px 30px;
		border:1px solid #8ec1da;
		border-radius:4px;
		-webkit-box-shadow:
			inset 0 1px 3px #fff,
			inset 0 -15px #cbe6f2,
			0 0 3px #8ec1da;
		-moz-box-shadow:
			inset 0 1px 3px #fff,
			inset 0 -15px #cbe6f2,
			0 0 3px #8ec1da;
		box-shadow:
			inset 0 1px 3px #fff,
			inset 0 -15px #cbe6f2,
			0 0 3px #8ec1da;
		background-color:#ddeef6;
		color:#3985a8;
		text-shadow:0 1px #fff;
		}

This looks like so:

<figure>
	<button id="demo-5">Test</button>
	<style>
		#demo-5 {
			padding:5px 30px;
			border:1px solid #8ec1da;
			border-radius:4px;
			-webkit-box-shadow:
				inset 0 1px 3px #fff,
				inset 0 -15px #cbe6f2,
				0 0 3px #8ec1da;
			-moz-box-shadow:
				inset 0 1px 3px #fff,
				inset 0 -15px #cbe6f2,
				0 0 3px #8ec1da;
			box-shadow:
				inset 0 1px 3px #fff,
				inset 0 -15px #cbe6f2,
				0 0 3px #8ec1da;
			background-color:#ddeef6;
			color:#3985a8;
			text-shadow:0 1px #fff;
			}
	</style>
</figure>

### Variation 3: A download button {#downloadbutton}

	button {
		padding:5px 30px;
		border:1px solid darkgreen;
		border-radius:4px;
		-webkit-box-shadow:
			inset 1px 6px 12px lightgreen,
			inset -1px -10px 5px darkgreen,
			1px 2px 1px black;
		-moz-box-shadow:
			inset 1px 6px 12px lightgreen,
			inset -1px -10px 5px darkgreen,
			1px 2px 1px black;
		box-shadow:
			inset 1px 6px 12px lightgreen,
			inset -1px -10px 5px darkgreen,
			1px 2px 1px black;
		background-color:green;
		color: white;
		text-shadow: 1px 1px 1px black;
		}

This gives us the following result:

<figure>
	<button id="demo-6">Test</button>
	<style>
		#demo-6 {
			padding:5px 30px;
			border:1px solid darkgreen;
			border-radius:4px;
			-webkit-box-shadow:
				inset 1px 6px 12px lightgreen,
				inset -1px -10px 5px darkgreen,
				1px 2px 1px black;
			-moz-box-shadow:
				inset 1px 6px 12px lightgreen,
				inset -1px -10px 5px darkgreen,
				1px 2px 1px black;
			box-shadow:
				inset 1px 6px 12px lightgreen,
				inset -1px -10px 5px darkgreen,
				1px 2px 1px black;
			background-color:green;
			color: white;
			text-shadow: 1px 1px 1px black;
			}
	</style>
</figure>

## Take 2: Containing boxes {#boxes}

Another obvious use of these properties is to style containing boxes in UIs — the areas that contain your buttons, form fields, and other interactive application features. As before, I will go through a few examples to help fire up your creativity!

### Box 1: Surf’s up {#surfbox}

This is a blue box with some cyan highlights and a light drop shadow.

	div {
		margin:10px;
		padding:0;
		width:100px;
		height:100px;
		-webkit-box-shadow:
			0 1px 5px #0061aa,
			inset 0 10px 20px #b6f9ff;
		-moz-box-shadow:
			0 1px 5px #0061aa,
			inset 0 10px 20px #b6f9ff;
		box-shadow:
			0 1px 5px #0061aa,
			inset 0 10px 20px #b6f9ff;
		background: #6fb2e5;
		}

Here is the result:

<figure>
	<div id="demo-7"></div>
	<style>
		#demo-7 {
			margin:10px;
			padding:0;
			width:100px;
			height:100px;
			-webkit-box-shadow:
				0 1px 5px #0061aa,
				inset 0 10px 20px #b6f9ff;
			-moz-box-shadow:
				0 1px 5px #0061aa,
				inset 0 10px 20px #b6f9ff;
			box-shadow:
				0 1px 5px #0061aa,
				inset 0 10px 20px #b6f9ff;
			background: #6fb2e5;
			}
	</style>
</figure>

### Box 2: Ghosted grey {#ghostbox}

In this case, the effect is obtained with creative use of an inner shadow.

	div {
		margin:10px;
		padding:0;
		width:100px;
		height:100px;
		-webkit-box-shadow:
			8px 10px 10px rgba(0,0,0,0.5),
			inset 8px 10px 10px rgba(255,255,255,0.75);
		-moz-box-shadow:
			8px 10px 10px rgba(0,0,0,0.5),
			inset 8px 10px 10px rgba(255,255,255,0.75);
		box-shadow:
			8px 10px 10px rgba(0,0,0,0.5),
			inset 8px 10px 10px rgba(255,255,255,0.75);
		background:#ccc;
		}

This gives us the following effect:

<figure>
	<div id="demo-8"></div>
	<style>
		#demo-8 {
			margin:10px;
			padding:0;
			width:100px;
			height:100px;
			-webkit-box-shadow:
				8px 10px 10px rgba(0, 0, 0, 0.5),
				inset 8px 10px 10px rgba(255, 255, 255, 0.75);
			-moz-box-shadow:
				8px 10px 10px rgba(0,0,0,0.5),
				inset 8px 10px 10px rgba(255, 255, 255, 0.75);
			box-shadow:
				8px 10px 10px rgba(0,0,0,0.5),
				inset 8px 10px 10px rgba(255, 255, 255, 0.75);
			background:#ccc;
			}
	</style>
</figure>

### Box 3: They call me Mr. Glass {#glassbox}

Here I’ve applied rgba colours to the shadows, so most of this box is semi-transparent. I have added a second `div` around the first one with a repeating background pattern image applied to it, so you can appreciate the full extent of this effect.

	div {
		margin:10px;
		padding:0;
		width:100px;
		height:100px;
		border:1px solid rgba(0,0,0,0.5);
		border-radius:10px 10px 2px 2px;
		-webkit-box-shadow:
			0 2px 6px rgba(0,0,0,0.5),
			inset 0 1px rgba(255,255,255,0.3),
			inset 0 10px rgba(255,255,255,0.2),
			inset 0 10px 20px rgba(255,255,255,0.25),
			inset 0 -15px 30px rgba(0,0,0,0.3);
		-moz-box-shadow:
			0 2px 6px rgba(0,0,0,0.5),
			inset 0 1px rgba(255,255,255,0.3),
			inset 0 10px rgba(255,255,255,0.2),
			inset 0 10px 20px rgba(255,255,255,0.25),
			inset 0 -15px 30px rgba(0,0,0,0.3);
		box-shadow:
			0 2px 6px rgba(0,0,0,0.5),
			inset 0 1px rgba(255,255,255,0.3),
			inset 0 10px rgba(255,255,255,0.2),
			inset 0 10px 20px rgba(255,255,255,0.25),
			inset 0 -15px 30px rgba(0,0,0,0.3);
		background:rgba(0,0,0,0.25);
		}

Here’s the result:

<figure>
	<div id="demo-9">
		<div></div>
	</div>
	<style>
		#demo-9 {
			position:relative;
			width:200px;
			height:200px;
			background-image:url(/articles/beautiful-ui-styling-with-css3/ru.png);
			}
			#demo-9 div {
				position:absolute;
				left:35px;
				top:35px;
				margin:10px;
				padding:0;
				width:100px;
				height:100px;
				border:1px solid rgba(0,0,0,0.5);
				border-radius:10px 10px 2px 2px;
				-webkit-box-shadow:
					0 2px 6px rgba(0,0,0,0.5),
					inset 0 1px rgba(255,255,255,0.3),
					inset 0 10px rgba(255,255,255,0.2),
					inset 0 10px 20px rgba(255,255,255,0.25),
					inset 0 -15px 30px rgba(0,0,0,0.3);
				-moz-box-shadow:
					0 2px 6px rgba(0,0,0,0.5),
					inset 0 1px rgba(255,255,255,0.3),
					inset 0 10px rgba(255,255,255,0.2),
					inset 0 10px 20px rgba(255,255,255,0.25),
					inset 0 -15px 30px rgba(0,0,0,0.3);
				box-shadow:
					0 2px 6px rgba(0,0,0,0.5),
					inset 0 1px rgba(255,255,255,0.3),
					inset 0 10px rgba(255,255,255,0.2),
					inset 0 10px 20px rgba(255,255,255,0.25),
					inset 0 -15px 30px rgba(0,0,0,0.3);
				background:rgba(0,0,0,0.25);
				}
	</style>
</figure>

For more information on RGBa and HSLa colours, check out Molly Holzschlag’s article [Color in Opera 10 — HSL, RGB and Alpha Transparency][22]

[22]: /articles/hsl-rgb-and-alpha-transparency/

## Take 3: Advanced examples {#advanced}

Hopefully you are completely blown away by the power of the new CSS properties by now, but just in case I have prepared some more examples! Figures 1-3 show what the examples look like, and you can also use the links to see them running live.

### Media player {#mediaplayer}

<figure id="figure-1">
	<img src="/articles/beautiful-ui-styling-with-css3/media-player.png" alt="A screenshot of a CSS3 media player UI example">
	<figcaption>Figure 1: The media player example</figcaption>
</figure>

[View the media player][24] running live.

[24]: /articles/beautiful-ui-styling-with-css3/media-ui.html

### A certain phone home screen {#phone}

<figure id="figure-2">
	<img src="/articles/beautiful-ui-styling-with-css3/phone-home-screen.png" alt="A screenshot of a CSS3 mobile phone UI example">
	<figcaption>Figure 2: A rather nice phone UI created using just CSS3</figcaption>
</figure>

[View the phone UI example][26] running live.

[26]: /articles/beautiful-ui-styling-with-css3/phone.html

### A Windows desktop {#windowsdesktop}

<figure id="figure-3">
	<img src="/articles/beautiful-ui-styling-with-css3/windows-desktop.png" alt="A screenshot of a CSS3 Windows desktop-style UI example">
	<figcaption>Figure 3: A Windows desktop-style UI</figcaption>
</figure>

[View the Windows desktop example][28] running live.

[28]: /articles/beautiful-ui-styling-with-css3/win7.html

## Summary {#summary}

This concludes our tour of some advanced UI effects, all created with CSS3 shadows and rounded corners — absolutely no images required. At Opera we’re pretty excited about having this functionality available, and hope you are as well — we look forward to seeing what you’ll create!

## Read more

- [CSS3 borders, backgrounds and boxes][29]
- [CSS text shadows and background sizing][30]

[29]: /articles/css3-borders-backgrounds-boxes/
[30]: /articles/css-text-shadows-and-background-sizing/