---
title: 'HTML5 Canvas Performance: Drawing Circles'
authors:
- daniel-davis
tags:
- performance
- javascript
- html5
- canvas
- odin
license: cc-by-3.0
---

![HTML5 canvas baubles on a Christmas tree]({{ page.id }}/canvas-christmas-tree.jpg)

As it’s nearly Christmas, I was playing with HTML5 canvas to draw baubles on a photo of a Christmas tree. Wondering what was the best way to do it, I came across this answer on Stack Overflow about [drawing circles with just radial gradients](http://stackoverflow.com/questions/9742830/html5-canvas-glass-circle#answer-9743575).

## Circles

As you probably know, the standard way of drawing circles is to use `arc()`:

    // Drawing a circle the traditional way
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'rgba(195, 56, 56, 1)';
    ctx.fill();
    ctx.closePath();`</pre>

This way of drawing a circle is a bit cumbersome in my opinion, compared to SVG for example. I thought the idea of using just radial gradients was a clever alternative and wondered what the performance difference would be.

    // Drawing a circle with a radial gradient
    var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0.95, 'rgba(195, 56, 56, 1)');
    gradient.addColorStop(1, 'rgba(195, 56, 56, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(x - radius, y - radius, x + radius, y + radius);

Sure enough, using radial gradients is slower than `arc()`. Several times slower! You can play with this [canvas test page](http://daniemon.com/tech/html5/canvas-speed/) here to see the speed difference for yourself.

If I’d thought about it properly, I should have realised this without needing to test it and saved myself some time, but then I tried playing with spheres (well, circles with shading) as well.

## Spheres

There are two common ways to make spheres in canvas:

1.  Radial gradients
2.  Existing images using `drawImage()`

	// Drawing a sphere with radial gradients
	var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
	gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
	gradient.addColorStop(0.2, 'rgba(255, 85, 85, 1)');
	gradient.addColorStop(0.95, 'rgba(128, 0, 0, 1)');
	gradient.addColorStop(1, 'rgba(128, 0, 0, 0)');
	ctx.fillStyle = gradient;
	ctx.fillRect(x - radius, y - radius, x + radius, y + radius);

	// Drawing a sphere with an existing image
	var img = new Image();
	img.src = 'images/baubles.png';
	ctx.drawImage(img, x, y, width, height);

As before, radial gradients are several times slower. Of course, the flip side is that radial gradients are generated dynamically and so can be changed on-the-fly with JavaScript, whereas images have to be pre-made in graphics software. These images can't be edited directly with JavaScript although you can easily change their size. You can also control the colour in a couple of ways:

1.  Using an image sprite of a particular image with varying colours.
2.  Using a greyscale image and applying a semi-transparent overlay with `arc()`.

Don’t forget that using images means they have to be downloaded first so it's better to pre-load them if possible.

You can test the performance of these on the same [canvas test page](http://daniemon.com/tech/html5/canvas-speed/).

As you can see, the overlay approach is obviously slower but not as much as with gradients. It also gives you more freedom in controlling the colours, however the overall effect has lower contrast than the original image.

## Summary

In general, the speed difference is not noticeable for simple applications or fast hardware, but could be an issue if you’re using animation, making a high-performance game, or designing for a TV or set-top box. As always, every decision is a compromise so here's a summary of the various trade-offs and what I’ve learned:

* If you just want to draw a circle, use `arc()`.
* If you want to draw a sphere, use an image (and pre-load it).
* If you want to draw a variety of spheres, try using image sprites.
* If you want spheres with dynamically-changing colours, consider using an image with a semi-transparent overlay.
* Only use radial gradients if you really need to.

One final thing I’ve learned is that adding thousands of baubles does not enhance a Christmas tree's beauty!

### Update

[Marcelo](https://twitter.com/askoth) came up with the cool idea of creating a single image on a hidden canvas using a radial gradient, and then repeatedly drawing that with `drawImage()`. This gets around the need to create images in advance and also means you can edit the colour on-the-fly. But here’s the best part — ignoring the initial gradient creation time, it’s actually faster than using `drawImage()` on an existing image! The code looks something like this:

	// Create a second "buffer" canvas but don't append it to the document
	var tmpCanvas = document.createElement('canvas');
	var tmpCtx = tmpCanvas.getContext('2d');

	// Add the necessary gradients here, as above

	// Draw the image from the second "buffer" canvas
	ctx.drawImage(tmpCanvas, x, y, width, height);

So, if you’re drawing lots of circles or spheres, this is my recommended method. Nice one Marcelo!
