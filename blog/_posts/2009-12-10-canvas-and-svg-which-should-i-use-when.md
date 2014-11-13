---
title: Canvas and SVG — Which Should I Use When?
authors:
- daniel-davis
tags:
- html5
- canvas
- svg
- odin
license: cc-by-3.0
---

As use of HTML5 is spreading, canvas and SVG (Scalable Vector Graphics) are being more widely used to create images within a web page. They are both supported by all major browsers (except Internet Explorer 8 and below) and are open alternatives to Flash for animation and graphic interaction. Why do we need two image-creation methods, however, and when should either be used?

## What is SVG?

- Has been a W3C standard for several years. With the arrival of HTML5 can be embedded into HTML pages.
- XML-based language using tags to create image objects.
- Resize as much as you want without losing quality.
- Every element is available within the SVG DOM so you can attach JavaScript events to them.
- Editing a single object or group of objects is easy.
- Slows down with a large number of objects.
- SVG is accessible - text is selectable just like regular text. [Accessibility software needs to catch up](http://www.iheni.com/just-how-accessible-is-svg/), however.

## What is canvas?

- At the time of writing, part of the HTML5 specification.
- Pixel-based images using JavaScript to edit pixels.
- Images become pixellated when enlarged.
- Everything is drawn with pixels. To change anything in the image you have to edit the pixels.
- Redrawing the pixels in the canvas area is fast.
- Slows down with a large drawing area.
- Canvas is not accessible (as of late 2009) - text is unreadable by e.g. screen readers and search engines.

## So what are canvas and SVG best suited for?

Because of its speed of manipulation, canvas is best when fast rendering and redrawing is needed, e.g. animations and games, such as in [this example](http://www.benjoffe.com/code/demos/canvascape/).

SVG is better suited for large-scale rendering and interactivity, e.g. maps and user interfaces, such as in [this slideshow demo](http://people.mozilla.com/~vladimir/demos/photos.svg).

It should also be noted that it’s not necessarily a choice of using one or the other. If required, there’s a happy middle ground where SVG and canvas can be layered together to make the most of their respective strengths.

N.B. To work around Internet Explorer’s lack of support, please look at [explorercanvas](http://code.google.com/p/explorercanvas/) for canvas capability and [Raphaёl](http://raphaeljs.com/) for cross-browser vector graphics.

## Further reading:

- [SVG vs. Canvas on Trivial Drawing Application](http://svgopen.org/2009/papers/54-SVG_vs_Canvas_on_Trivial_Drawing_Application/)
- [SVG or Canvas? Choosing between the two](https://dev.opera.com/articles/view/svg-or-canvas-choosing-between-the-two/)
