---
title: CSS3 Radial Gradients
authors:
- chris-mills
intro: 'This article covers the basics of CSS3 radial gradients, a great CSS feature that allows for much more flexible design work.'
tags:
- gradients
- css3
- css
license: cc-by-3.0
---

## Article update: 12th December 2012

The article has been updated to cover the gradient syntax covered in the (at the time of writing) latest [Image Values and Replaced Content Module Level 3][1] specification, dated June 12th 2012.

[1]: http://dev.w3.org/csswg/css3-images/#linear-gradients

## Introduction

Gradients are much-used on web sites: if you want to liven up pretty much any UI feature (buttons, panels, headers, etc.) you can use a gradient, although you should use them sparingly to avoid the _web site christmas tree effect™._ Traditionally we used CSS background images to add gradients to our UIs, and they worked ok, but they were rather inflexible. You’d have to go to your image editor and make changes to the image file every time you wanted to change the colours, size or direction of the gradient.

The [CSS Image Values and Replaced Content Module Level 3][2] comes to the rescue by allowing us to create gradients on elements programmatically. You can change colours, etc. with a quick chance to the code, and the gradients are so much flexible. For example, you can set colour stops at different percentages across the element you are applying it to, so in fluid layouts the gradient will adjust to fit as the element changes in size.

[2]: http://www.w3.org/TR/2011/WD-css3-images-20110217/

There are two types of gradients defined in the spec, [linear gradients][3] and [radial gradients][4]. We covered the former in a previous article — [CSS3 linear gradients][5]. This article on the other hand focuses on radial gradients. We’ll go through all the basic syntax, and also look at repeating radial gradients near the end of the article.

[3]: http://www.w3.org/TR/2011/WD-css3-images-20110217/#linear-gradients
[4]: http://www.w3.org/TR/2011/WD-css3-images-20110217/#radial-gradients
[5]: /articles/css3-linear-gradients/

## Linear gradient syntax recap

As a recap, the syntax of linear gradients is fairly simple:

	background-image:linear-gradient(
		to bottom right,
		rgb(255, 0, 0),
		rgb(100, 0, 0) 50%,
		rgb(50, 0, 0) 75%,
		rgb(150, 0, 0)
	);

Inside the brackets you first include a setting for the gradient to go in (`to bottom right` means “start at the top left of the element, and travel diagonally towards the bottom right”), then you include a series of colour stops for the gradient to flow smoothly in between (you can specify these in percentages or fixed measurement units). The above line creates a gradient that looks like the following image:

<figure block="figure" id="figure-1">
	<img elem="media" src="{{ page.id }}/gradients2.png" alt="Simple linear gradient example">
	<figcaption elem="caption">Figure 1: A simple linear gradient example</figcaption>
</figure>

Note that the newest versions of Opera, Firefox and IE all support the current syntax of linear gradients, without prefixes, while WebKit-based browsers still require the old syntax. For compatibility with older browser versions and -Webkit- versions, you should consider including vendor prefixes versions of the property, all including the older syntax. This is basically the same, except:

- The direction keywords are the opposite way round and don’t include the word `to`. So `top left` is equivalent to `to bottom right`, `bottom` is equivalent to `to top`, and so on.
- When signifying angles for directions, you need to do some recalculation, as `0deg` used to mean horizontal towards the right (equivalent to `left`), and now it means vertical and upwards (equivalent to `to top`).

A full code example would be:

	background-image:-webkit-linear-gradient(top left, rgb(255,0,0), rgb(100,0,0) 50%, rgb(50,0,0) 75%, rgb(150,0,0));
	background-image:-moz-linear-gradient(top left, rgb(255,0,0), rgb(100,0,0) 50%, rgb(50,0,0) 75%, rgb(150,0,0));
	background-image:-ms-linear-gradient(top left, rgb(255,0,0), rgb(100,0,0) 50%, rgb(50,0,0) 75%, rgb(150,0,0));
	background-image:-o-linear-gradient(top left, rgb(255,0,0), rgb(100,0,0) 50%, rgb(50,0,0) 75%, rgb(150,0,0));
	background-image:linear-gradient(to bottom right, rgb(255,0,0), rgb(100,0,0) 50%, rgb(50,0,0) 75%, rgb(150,0,0));

## Radial gradient syntax

Radial gradients are a little bit more complicated, but still don’t take much time to get used to. The syntax takes the following form:

	radial-gradient(
		size shape at position,
		colour stops
	);

As with linear gradients, Opera, Firefox and IE all support the newest syntax of radial gradients without prefixes. WebKit- based browsers still use the old syntax and require a prefix. The old syntax of radial gradients uses the same values, but in a different structure:

	radial-gradient(
		position,
		size and shape,
		colour stops
	);

So for example the full cross browser syntax would look like this:

	-webkit-radial-gradient(50% 50%, circle, rgb(75, 75, 200), rgb(0, 0, 75));
	-moz-radial-gradient(50% 50%, circle, rgb(75, 75, 200), rgb(0, 0, 75));
	-ms-radial-gradient(50% 50%, circle, rgb(75, 75, 200), rgb(0, 0, 75));
	-o-radial-gradient(50% 50%, circle, rgb(75, 75, 200), rgb(0, 0, 75));
	radial-gradient(circle at 50% 50%, rgb(75, 75, 200), rgb(0, 0, 75));

Will create a gentle blue gradient radiating from the center of the element it is applied to, kind of like this:

<figure block="figure" id="figure-2">
	<img elem="media" src="{{ page.id }}/gradients3.png" alt="Simple radial gradient example">
	<figcaption elem="caption">Figure 2: A simple radial gradient example</figcaption>
</figure>

Now let’s explore the three syntax areas — size and shape, position, and colour stops.

### position

The position the gradient radiates from is determined by specifying the position of its centre. This takes the form of `at`, followed by keyword or unit values, specified in basically the same way as CSS `background-position`. So for example (the button in the example is 107 pixels wide):

- `circle at left top` means “place the gradient centre in the top left corner”.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/position1.png" alt="Placing the gradient center at the top left hand corner of the element">
</figure>

- `circle at 20% 70%` means “place the gradient centre 20% across the element and 70% of the way down”.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/position2.png" alt="Placing the gradient center 20% across and 70% down the element">
</figure>

- `circle at 70px 80px` means “place the gradient centre 70 pixels across the element and 80 pixels down”.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/position3.png" alt="Placing the gradient center 70 pixels across and 80 pixels down">
</figure>

- `circle at 0%` means “place the gradient centre on the left hand edge of the element, centred vertically”. If you only specify a single value, that value is taken as the horizontal value, and the vertical value is set to `50%` (or `center`).

<figure block="figure">
	<img elem="media" src="{{ page.id }}/position4.png" alt="Placing the gradient center all the way left and 50% down, only using one value">
</figure>

- If you set no value at all for the gradient position, it is assumed to be in the center of the element, ie `center center` or `50% 50%`.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/gradients3.png" alt="Specifying no values for position makes it default to the enter of the element">
</figure>

### size and shape

the gradient size and shape is set using a combination of explicit sizes or implicit sizes, and shape keywords.

#### Explicit sizes

When using explicit sizes, the two values you set are the horizontal and vertical radii of the shape. If you include the `circle` keyword, and a single value, you will get a circle. If you include the `ellipse` keyword and two values, or just two values (`ellipse` being the default), you will get an ellipse. You can use any CSS units that would make sense in the situation, except that bizarrely you can’t use percentages. So for example:

- `40px circle` means “make the gradient circular, and give it a **radius** of 40px”.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/size1.png" alt="A circular radial gradient with radius set to 40 pixels">
</figure>

- `2em 4em ellipse` means “make the gradient an ellipse, and give it a minor radius of `2em`, and a major radius of `4em`”.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/size2.png" alt="An elliptical radial gradient with minor radius width set to 2em, and major radius height set to 4em">
</figure>

Note that if you don’t set a value at all, the setting defaults to `ellipse cover` (see next section).

#### Implicit sizes

When using implicit sizes, you use a number of different keywords that specify whether you want the circle or ellipse to be touching the closet or farthest away corner or side of the container from the point it’s center is positioned at (for this example we’ve made the button square, and set the position of the gradient centre to 35% across and 25% down the square):

- `closest-side circle at 35% 25%` positions the gradient so that its edge just touches the side of the element nearest to its centre. In the case of an ellipse, it would position it so that its edge just touches the horizontal and vertical sides of the element nearest to its center. You can use the keyword `contain` in place of `closest-side`.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/circle-closest-side.png" alt="Closest-side makes the circle stretch to touch the side of the element closest to it">
	<img elem="media" src="{{ page.id }}/ellipse-closest-side.png" alt="Closest-side makes the ellipse stretch to touch the sides of the element closest to it">
</figure>

- `closest-corner circle at 35% 25%` positions the gradient so that its edge just touches the corner of the element nearest to its centre. In the case of an ellipse, the effect is pretty much the same.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/circle-closest-corner.png" alt="Closest-corner makes the circle stretch to touch the corner of the element closest to it">
	<img elem="media" src="{{ page.id }}/ellipse-closest-corner.png" alt="Closest-corner makes the ellipse stretch to touch the corner of the element closest to it">
</figure>

- `farthest-side circle at 35% 25%` positions the gradient so that its edge just touches the side of the element farthest away from its centre. In the case of an ellipse, its edge just touches the horizontal and vertical sides of the element farthest way from its center. The following are `circle farthest-side` and `ellipse farthest-side`:

<figure block="figure">
	<img elem="media" src="{{ page.id }}/circle-farthest-side.png" alt="Farthest-side makes the circle stretch to touch the side of the element farthest from it">
	<img elem="media" src="{{ page.id }}/ellipse-farthest-side.png" alt="Farthest-side makes the ellipse stretch to touch the sides of the element farthest from it">
</figure>

- `farthest-corner circle at 35% 25%` positions the gradient so that its edge just touches the corner of the element farthest from its centre, in the case of a circle and ellipse. You can use the keyword `cover` in place of `farthest-corner`.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/circle-farthest-corner.png" alt="Farthest-corner makes the circle stretch to touch the corner of the element farthest from it">
	<img elem="media" src="{{ page.id }}/ellipse-farthest-corner.png" alt="Farthest-corner makes the ellipse stretch to touch the corner of the element farthest from it">
</figure>

### Colour stops

In the last section of the radial gradient syntax, you specify at least two colour stops — these specify what colour is found in different positions along the gradient, and the browser fills in the in-between stages. You can specify the position along the gradient (starting at the centre of the gradient and going outwards) in any unit that it makes sense to (although you’ll probably use percentages, pixels or ems). You can specify the colours themselves in any colour units that the browsers support (including alpha channel colours). Each colour stop is separated off using commas.

- `#ff0000, #000000`: The simplest setting for colour stops is to just use two colours. When no position unit is specified, the browser assumes that the first colour is at 0% (right in the center), and the second one is at 100% (right on the edge)

<figure block="figure">
	<img elem="media" src="{{ page.id }}/colour-stop1.png" alt="Simple colour stop settings with two colours and no position units set: the default is first colour stop at 0%, second one at 100%">
</figure>

- `rgb(255,0,0), rgb(150,150,150) 50%, rgb(0,0,0)`: Here we have three colour stops, with the colours set using RGB. The first colour is again at 0%, and the last one is at 100%, but we’ve also got a different color stop at 50%.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/colour-stop2.png" alt="Three colour stops, with the middle one set at 50%">
</figure>

- `rgb(255,0,0) 20px, rgb(150,150,150) 40px, rgb(0,200,0) 60px, rgb(0,0,0) 80px`: Four colour stops, this time positioned along the gradient using pixel values. You’ll notice that if you don’t position the first and last colour stops at the start and end of the gradient, the space before the first one will adopt its colour, and the space after the last one will adopt the same colour as it too.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/colour-stop3.png" alt="Four colour stops, positioned using pixel values, with the beginning and end colour stops not at the start and end of the gradient">
</figure>

And so on and so on. You can have as many colour stops as you like.

### Looking at a real example

To show some real usage of radial gradients, let’s have a look at a little button panel I whipped up: [view the live example][26].

[26]: {{ page.id }}/radial-gradient.html

<figure block="figure" id="figure-3">
	<img elem="media" src="{{ page.id }}/radial-gradient.png" alt="A panel of pop up buttons made with radial gradients">
	<figcaption elem="caption">Figure 3: A panel of buttons — no images in sight</figcaption>
</figure>

Each button is a link, with block display, width and height set, border-radius set to make it round, and a simple linear gradient used to give it depth. Since Opera, Firefox and IE all support the newest radial gradient syntax without prefixes in their newest version, I only really need to include a prefixed property for WebKit-based browsers, but I’ve included the whole lot, for extra backwards compatibility:

	background-image:-webkit-radial-gradient(30% 40%, rgb(255,0,0), rgb(0,0,0));
	background-image:-moz-radial-gradient(30% 40%, rgb(255,0,0), rgb(0,0,0));
	background-image:-ms-radial-gradient(30% 40%, rgb(255,0,0), rgb(0,0,0));
	background-image:-o-radial-gradient(30% 40%, rgb(255,0,0), rgb(0,0,0));
	background-image:radial-gradient(circle at 30% 40%, rgb(255,0,0), rgb(0,0,0));

The page background was written by Divya Manian, and is composed entirely of `background-image` gradients — see [Marrakesh][28] for an explanation of the pattern, and see Lea Verou’s excellent [CSS3 patterns gallery][29] for more inspiration.

[28]: http://leaverou.me/css3patterns/#marrakesh
[29]: http://leaverou.me/css3patterns/

When the buttons are focused on, they are depressed slightly. When they are clicked, they press fully in. I have achieved this by use of varying inset box shadows on hover, focus and active states.

## Repeating radial gradients

In the same manner as linear gradients, you can create repeating radial gradients by using the relevant repeat property, in this case `repeating-radial-gradient`. This simply takes the pattern you have set for your radial gradient, and just repeats it as far as the element it is applied to extends. This cross-browser example comes from my [live repeating radial gradients demo][30]:

[30]: {{ page.id }}/repeating-radial-gradient.html

	background:-webkit-repeating-radial-gradient(center, 30px 30px, #009, #0000FA 50%, #009);
	background:-moz-repeating-radial-gradient(center, 30px 30px, #009, #0000FA 50%, #009);
	background:-ms-repeating-radial-gradient(center, 30px 30px, #009, #0000FA 50%, #009);
	background:-o-repeating-radial-gradient(center, 30px 30px, #009, #0000FA 50%, #009);
	background:repeating-radial-gradient(30px circle, #009, #0000FA 50%, #009);

<figure block="figure" id="figure-4">
	<img elem="media" src="{{ page.id }}/repeating-examples.png" alt="Repeating radial gradient examples">
	<figcaption elem="caption">Figure 4: Repeating radial gradient examples</figcaption>
</figure>

## Summary

I hope this article has given you all you need to know to start using radial gradients on your designs! Please let us know what you think of Opera’s implementation — feedback is always helpful, good or bad. You might also want to check out [Gradient][32], a really nice little app for Mac OS X that generates cross-browser gradient code.

[32]: http://www.gradientapp.com/

What you’ve seen here isn’t the limit of uses for radial gradients. According to the spec, you can use them anywhere where you can use images, so you should experiment with using them with `border-image`, `list-style-image`, etc.
