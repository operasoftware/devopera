---
title: Flexbox — Fast Track to Layout Nirvana?
authors:
- chris-mills
intro: 'This article provides a basic introduction to Flexbox, the gifted new kid on the block with respect to CSS layouts. Here we’ll show you how the most exciting new features of Flexbox work.'
tags:
- css
- flexbox
- layout
- responsive
layout: article
---

## Introduction

HTML and CSS is a great content delivery mechanism in many ways — it is easy to learn, flexible and powerful. One thing however that it has never excelled at is complex layouts. If you want to create a simple typographic essay layout with a floated image or two, then fine, but producing complicated multi column layouts has always been fiddly and hackish, and frustrating to get working consistently and precisely across browsers. We usually tend to abuse floats and other constructs for this purpose, and bugs and rendering differences can really spoil your fun.

To combat this, CSS3 includes a number of modules that exist to made different layout tasks much easier. We’ve already looked at [Multi-column layout][1] and [Generated Content for Paged Media][2] in other articles, and now we turn our attention to the [Flexible Box Layout Module][3].

[1]: /articles/css3-multi-column-layout/
[2]: /articles/opera-reader-a-new-way-to-read-the-web/
[3]: http://www.w3.org/TR/css3-flexbox/

Flexbox, as it’s commonly called, is designed to allow us to easily manipulate the layout of a series of child elements in ways that were previously difficult. For example:

- Laying out those elements in a row without having to set explicit widths for each one, and wrapping the child elements if there isn’t enough space for them to fit on one line.
- Rapidly changing them to be laid out vertically in a column instead.
- Aligning them to the left, right, center, etc. of the parent container.
- Changing the order in which they are displayed, without altering the markup.
- Setting the amount of space each child takes up as a proportion of the parent’s width/height, without worrying about specifying exact widths or worrying about the layout still working if the parent dimensions are set using percentages and the viewport size changes.

Sounds rather useful, no? Let’s explore it in more detail.

This article uses the latest Flexbox syntax, currently supported in Opera Mobile 12.1+, Opera 12.5+, Firefox 18+ (partial) and Chrome. Chrome needs `-webkit-` prefixes, whereas Opera has supported it without prefixes from the beginning. Firefox has partial support with a `-moz-` prefix, and the support is also hidden behind a flag (to enable, go to about:config in the address bar, search for “flexbox”, and double click the `layout.css.flexbox.enabled` line to set it’s value to **true**). Note that other browsers besides Opera have supported Flexbox since 2009, but using an old, outdated syntax that really shouldn’t be used any more. Be sure to keep this in mind when reading and using code from pre-2012 articles about Flexbox — Chris Coyier has more on [how to tell][4] if you’re reading an obsolete article.

[4]: http://css-tricks.com/old-flexbox-and-new-flexbox/

## A simple flex example

To get the flex party started, lets consider a simple example to show how easy Flexbox layout is. We will look at a “fat footer” type construct with three child elements, each of which contains fairly typical footer content. Let’s go for contact details, important global links, and copyright notice. We want to display these in a horizontal line across the footer, centred vertically, and we want the global links to span twice as much width as the other two children. Today we’d typically do this by floating the child elements, setting a width on them, and adjusting alignment using varying amounts of padding, etc. This is often fiddly and imprecise, without setting fixed values on all the dimensions, which can make things inflexible. But Flexbox can help us out here.

<figure>
	<img src="/articles/flexbox-basics/example.png" alt="A simple single column layout with a fat footer, containing three child containers laid out horizontally">
	<figcaption markdown="span">Figure 1: My flexible example. Things are all pretty simple, apart from the footer, which has a flexible layout consisting of three boxes</figcaption>
</figure>

Note: to see my finished example, look at my [Flexible fat footer][6] page (Figure 1) — you’ll see that I’ve made a funky little design with a column of content and a footer at the bottom, which stays put via some `position: fixed` magic. The layout is flexible, with the main content column sized as a percentage of the page width, and the footer child elements resize in proportion to that main column. You’ll also notice that I’ve used a few media queries to shift the layout for smaller screen widths.

[6]: /articles/flexbox-basics/flexbox-example.html

## Getting started with Flexbox

So, how do we get started with Flexbox? Most of the Flexbox properties are applied to the parent container of the elements you want to lay out. To specify that you want to lay out a container as Flexbox, you use a special value of the `display` property, like so:

	footer {
		display: flex;
	}

Next, you can use the `flex-flow` property to specify that you want your child elements laid out in a `row` (the default), or a `column`. You can also include the keyword `wrap` if you like, to specify that you want the content to wrap onto a new line if the parent container is too narrow to fit all the Flexbox children on one line. In my example, I’ve set the children of my footer to `row wrap`:

	footer {
		display: flex;
		flex-flow: row wrap;
	}

The significance of the `wrap` keyword will become apparent later on.

Note: `flex-flow` is actually a shorthand property, for the two properties `flex-direction` (values `row`, `column`, `row-reverse` or `column-reverse`; the last two values make your row or column run in the opposite direction) and flex-wrap (values `wrap`, `no-wrap` or `wrap-reverse`.)

### Main axis, cross axis

One concept you should get used to when working with Flexbox is that of main axis and cross axis, which work kind of like the X and Y axes, but with differences. The main axis always runs in the direction the flex flow is set to, so horizontal if your flex children are laid out in a row, and vertical if they are laid out in a column. The cross axis runs perpendicular to the main axis. These are illustrated in Figure 2.

<figure>
	<img src="/articles/flexbox-basics/axis.png" alt="An illustration of the main axis and cross axis of a Flexbox: the main axis always runs in the direction of the row or column, and the cross axis runs perpendicular to that">
	<figcaption markdown="span">Figure 2: An illustration of the main axis and cross axis of a Flexbox</figcaption>
</figure>

### Setting alignment of your Flexbox children

Flexbox features a number of ways to help you align your children along the main and cross axis.

#### align-items across the cross-axis

The first one we’ll look at is `align-items`, which allows you to align your Flexbox children along the cross axis. The different values are:

- `flex-start`/`baseline`: Makes the start of all items sit flush to the start of the cross axis.
- `flex-end`: Makes the end of all items sit flush to the bottom of the cross axis.
- `center`: Makes the center of all items sit flush to the center of the cross axis.
- `stretch`: Makes the child elements all stretch so that they fill the entire length of the cross axis

These are all pretty self explanatory; to see them in action, go and play with the demo, and adjust the values, or check out Figure 3. For the example, I ended up going with this:

	footer {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
	}

And there we have it — all my items will now always fill up the entire height of their parent container, regardless of how much the width and height adjusts as the viewport size changes. This is simply awesome — how many times in the past have you wanted to give a set of columns an equal height even when they contain a different amount of content, and had to mess around with inflexible solutions like setting an equal `height` on them, or using faux-columns?

<figure>
	<img src="/articles/flexbox-basics/align-items_flex-start.png" alt="Showing how the different values of align-items affect child containers — their alignment vertically is different">
	<img src="/articles/flexbox-basics/align-items_center.png" alt="Showing how the different values of align-items affect child containers — their alignment vertically is different">
	<img src="/articles/flexbox-basics/align-items_flex-end.png" alt="Showing how the different values of align-items affect child containers — their alignment vertically is different">
	<img src="/articles/flexbox-basics/align-items_stretch.png" alt="Showing how the different values of align-items affect child containers — their alignment vertically is different">
	<figcaption markdown="span">Figure 3: Showing how the different values of `align-items` affect child containers. From top to bottom — `flex-start`, `center`, `flex-end`, and `stretch`</figcaption>
</figure>

Note: there is also a property called `align-self`, which allows you to set `align-items` behaviour on individual flex children. These will override `align-items` when set.

#### `justify-content` along the main axis

The other main property in this category that will get used a lot is `justify-content`, which specified how items are arranged along the main axis, in terms of what happens to the excess whitespace between the children. This property doesn’t have any effect when you’ve set your children and their margins to take up all the available space across the main axis, as is the case in my main example. Therefore I’ve created another example to demonstrate usage of `justify-content` — please take a look at the [fixed-width Flexbox example][12].

[12]: /articles/flexbox-basics/flexbox-example-fixed-width.html

In this example I’ve set the different Flexbox children to take up a set percentage of the width of the main axis:

	#first {
		width: 25%;
	}

	#second {
		width: 40%;
	}

	 #third {
		width: 25%;
	}

Then on the parent container I’ve set a value of `justify-content` as follows:

	footer {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: space-around;
	}

This value works rather nicely — sharing out all the space in-between the child elements and on the outside of them all in equal amounts. The other available values are as follows:

- `flex-start`: Bunches all the Flexbox children up at the start of the main axis, with the space all at the end.
- `flex-end`: Bunches all the Flexbox children up at the end of the main axis, with the space all at the start.
- `center`: Bunches all the Flexbox children in the middle of the main axis, with the space equally divided at each end.
- `space-between`: Has a very similar effect to `space-around`, but with no space given to each end of the series of Flexbox children.

Figure 4 shows the effect of different settings of `justify-content`:

<figure>
	<img src="/articles/flexbox-basics/justify-content_flex-start.png" alt="Showing how the different values of justify-content affect child containers — their position horizontally is affected">
	<img src="/articles/flexbox-basics/justify-content_center.png" alt="Showing how the different values of justify-content affect child containers — their position horizontally is affected">
	<img src="/articles/flexbox-basics/justify-content_flex-end.png" alt="Showing how the different values of justify-content affect child containers — their position horizontally is affected">
	<img src="/articles/flexbox-basics/justify-content_space-between.jpg" alt="Showing how the different values of justify-content affect child containers — their position horizontally is affected">
	<img src="/articles/flexbox-basics/justify-content_space-around.png" alt="Showing how the different values of justify-content affect child containers — their position horizontally is affected">
	<figcaption markdown="span">Figure 4: Showing how the different values of `justify-content` affect child containers. From top to bottom — `flex-start`, `center`, `flex-end`, `space-between` and `space-around`</figcaption>
</figure>

#### `align-content` for aligning multi-line Flexboxes

You can also specify how spare space between multiple lines of Flexbox children will be distributed, in the case of multiple-line Flexboxes, i.e. where the `wrap` keyword has been used. It only really has an effect when your Flexbox children take up a fixed amount of space in the direction of the cross axis, so a fixed height in the case of rows. The available values are:

- `flex-start`: Bunches all the Flexbox children up at the start of the cross axis, with the space all at the end.
- `flex-end`: Bunches all the Flexbox children up at the end of the cross axis, with the space all at the start.
- `center`: Bunches all the Flexbox children in the middle of the cross axis, with the space equally divided at each end.
- `space-between`: Shares out all the space in between the child elements and on the outside of them along the cross axis all in equal amounts.
- `space-around`: Has a very similar effect to `space-between`, but with less space given to each end of the series of Flexbox children.

### Altering the element layout order

Traditionally it has always been a pain to change the order in which elements are displayed without messing around with the source order. Not with Flexbox. Flexbox allows you to set the `order` property on child elements to state how soon they will appear in the Flexbox row or column. This property takes a integer value — called an ordinal group — and the higher the ordinal group, the later the child will appear. So for example, going back to my [Flexible fat footer][18] example, the box of links is the second child element by default, as shown in Figure 5.

[18]: /articles/flexbox-basics/flexbox-example.html

<figure>
	<img src="/articles/flexbox-basics/order-0.png" alt="The default order of the footer children in this example is contact, links, copyright">
	<figcaption markdown="span">Figure 5: The default order of the footer children — contact, links, copyright</figcaption>
</figure>

By default, all the Flexbox children are in ordinal group 0. We can easily change this order by giving the children different ordinal group values. Higher values will appear later in the list of flex children; the order of children in the same ordinal group will always be governed by source order. So in my example, I’ve made the links appear last by setting their ordinal group to 1 (see Figure 6 for the result):

	#second {
		order: 1;
	}

<figure>
	<img src="/articles/flexbox-basics/order-1.png" alt="The new order of the footer children in this example is contact, copyright, links">
	<figcaption markdown="span">Figure 6: The `order` property has given us a new order for the footer children</figcaption>
</figure>

Note: You can use negative `order` values.

### Making your elements flex

Probably the most powerful feature of Flexbox is the ability to set the length of the child elements in the flex-flow direction (so `width` if `flex-flow` is `row`, or `height` if `flex-flow` is `column`) to be a flexible amount that changes depending on the amount of space available in the parent element in that direction. This is done using the `flex` property, whose value can take a total of three parts. Let’s add them in one by one and look at the effect they have. First of all, a “flex grow factor”:

	#first {
		flex: 1;
	}

	#second {
		flex: 1;
	}

	#third {
		flex: 1;
	}

These are unitless values that serve as a proportion — they dictate what amount of the available space inside the parent each child should take up. If each one is set to 1, every child will set to an equal size inside the Flexbox. If you were to give one of the children a value of 2, that child would take up twice as much space as the others:

	#first {
		flex: 1;
	}

	#second {
		flex: 2;
	}

	#third {
		flex: 1;
	}

You can also set a **flex basis** value for each child, like this:

	#first {
		flex: 1 200px;
	}

	#second {
		flex: 2 300px;
	}

	#third {
		flex: 1 250px;
	}

First of all, the flex basis values are applied to each child as widths/heights, depending on what direction the flex is flowing. Then, the remaining space left inside the parent element is divided up according to the flex grow factors and given to the children to make their final width. So the children would be sized along the main axis as 200 pixels, 300 pixels and 250 pixels, which is a total of 750 pixels. If the parent container was 950 pixels along the main axis, then there would be an additional 200 pixels of space to distribute between the children. The first and third children would be given 50 pixels each, as they have a flex grow factor of 1. Their final size would be 250 pixel and 300 pixels respectively. The second child would be given 100 pixels, as it has a flex grow factor of 2. Its final size would be 400 pixels.

The third part of the `flex` value is rarely used, but let’s look at it just in case. You can also give your child elements a “flex shrink factor”, like this:

	#first {
		flex: 1 1 400px;
	}

	#second {
		flex: 2 3 600px;
	}

	#third {
		flex: 1 2 400px;
	}

The flex shrink factors, despite their name, are still positive values — the second unitless values in the above declarations. These only come into play when the children overflow their parent container in the main axis direction. They also act as proportion values, but this time they specify the proportion of the “overflow amount” (the amount the children overflow their container by) that will be deducted off the size of each child, to bring the overall size down to equal the size of the parent — in effect, to stop the overflow.

Let’s say that the parent container is 1100 pixels along the main axis. This being the case, our above children would overflow it by 300 pixels (they equal 1400 pixels along the main axis, in total). Because of the flex shrink factors set on them:

- The first child would get 1/6th of the overflow amount removed from it, which is 50 pixels. Its computed value would therefore be 350 pixels.
- The second child would get 3/6th of the overflow amount removed from it, which is 150 pixels. Its computed value would therefore be 450 pixels.
- The third child would get 2/6th of the overflow amount removed from it, which is 100 pixels. Its computed value would therefore be 300 pixels.

So a higher flex shrink factor actually results in a smaller element!

The values I ended up with for my main example are as follows:

	#first {
		flex: 1 0 7rem;
	}

	#second {
		order: 1;
		flex: 2 0 8rem;
	}

	#third {
		flex: 1.5 0 7rem;
	}

Note: the `flex` property is shorthand — you can use the `flex-grow`, `flex-shrink` and `flex-basis` properties to set the three components individually.

## Flexbox: responsive advantages

One thing that has worked to really good effect on my example is combining a multiline Flexbox (`flex-flow: row wrap`) with a preferred flex length for the child elements (e.g. `flex: 1 0 7rem`), and media queries. At narrower viewport widths, the preferred width cannot be reached without overflowing the parent element, therefore the Flexbox children will wrap onto multiple lines to keep things looking smooth, as shown in Figure 7.

<figure>
	<img src="/articles/flexbox-basics/example_wide.png" alt="Some simple Flexbox application has given us a useful responsive layout — the image shows a one, two and three row layout, at different viewport widths">
	<img src="/articles/flexbox-basics/example_medium.png" alt="Some simple Flexbox application has given us a useful responsive layout — the image shows a one, two and three row layout, at different viewport widths">
	<img src="/articles/flexbox-basics/example_narrow.png" alt="Some simple Flexbox application has given us a useful responsive layout — the image shows a one, two and three row layout, at different viewport widths">
	<figcaption markdown="span">Figure 7: Some simple Flexbox application has given us a useful responsive layout</figcaption>
</figure>

#### flex: auto and flex:initial

Flex has some other useful values, described in the part of the spec titled [Common values of `flex`][24]. Two of the most useful are `auto` and initial. Setting `flex: auto` on a child element of a flexible box (equivalent to `flex: 1 1 auto`) will make it fully flexible and size it according to any `width`/`height` or `min`/`max`-`width`/`height` properties it has set; it will expand to take up a proportion of any free space available, but then shrink to fit its contents when there is no extra free space. This can have some interesting effects when combined with a `min-width`, say. Take a look at my [Flex auto][25] example. In this example, the parent container is set to `flex-flow: row`, and the third child container is set to `flex: auto`, and has a `min-width`. It therefore expands to fill any excess space on the line, no matter where the toolbar is multiple line or not, and then shrinks neatly as it gets smaller, allowing the child buttons to rearrange themselves to suit.

[24]: http://dev.w3.org/csswg/css3-flexbox/#flex-common
[25]: /articles/flexbox-basics/flex-auto-test.html

Try changing the `flex: auto` value to `flex: initial` (equivalent to `flex: 0 1 auto`) and you’ll see that the third child container no longer increases in size when there is excess space, but it still shrinks if needed.

All of this power and flexibility with such little code is definitely a good thing!

## Degrading gracefully

Flexbox is a whole new layout model, and browsers that don’t understand it will simply ignore it. That might appear to be a deal-breaker that prevents you from ever using it. However, it doesn’t need to be. For example, you might use floats or [CSS tables][26] to layout the “desktop” layout for a site, and choose to use Flexbox for very narrow (mobile) browser widths, perhaps to move a left-hand nav below the main content.

[26]: http://www.w3.org/TR/CSS2/tables.html

If you set all the page elements (nav, header, footer, etc) to `display:block` as a default before the Flexbox rules, a browser which supports media queries but not flexbox would simply linearise your content into blocks that span the full width of the device. They would remain in source order, but all the content remains accessible to the user.

Alternatively, CSS tables can be used to pull one element out of source order and put it at the start or end of the content — see the [filthy table-caption hack][27] and chuckle as you recoil.

[27]: http://jsbin.com/axobun/1/edit

## Summary

I hope that this article has made it clear to you exactly how awesome and useful Flexbox is, allowing us to do with away with repeated float and clear abuse, and a number of other horrible, hacky, inflexible layout techniques. You can also see how great Flexbox is for responsive web design when combined with other technologies such as Media Queries.
