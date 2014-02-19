---
title: Understanding the CSS Transforms Matrix
authors:
- tiffany-brown
intro: 'In this article we explain how transform matrices work — these involve some rather complicated math, but they are not so hard to understand when you sit down and check out a few examples! Once you understand how to put together matrices, you can use them inside the CSS `transform: matrix();` and `transform: matrix3d();` functions to apply transform effects to your web pages.'
tags:
- css
- coordinates
- transform
- matrices
- matrix
- transform-origin
- vector
- math
layout: article
---

- [Introduction](#intro)
- [What is a matrix?](#whatisamatrix)
- [Transforms and coordinate systems](#coordinates)
- [Calculating the transform: Matrix and vector math](#calculatingtransform)
- [Compound transforms with the matrix](#compoundtransforms)

## Introduction {#intro}

The matrix functions — `matrix()` and `matrix3d()` — are two of the more brain-bending things to understand about [CSS3 Transforms][6]. In most cases, you’ll use functions such as `rotate()` and `skewY()` for ease and clarity’s sake. Behind every transform, though, is an equivalent matrix. It’s helpful to understand a bit about how they work, so let’s take a look.

[6]: http://dev.w3.org/csswg/css3-transforms/

CSS transforms are rooted in linear algebra and geometry. Though it helps a great deal to have some advanced math under your belt, it’s possible to understand the matrix functions without it. You should, however, be familiar with CSS transforms. If you aren’t read [CSS3 transitions and 2D transforms][7].

[7]: http://dev.opera.com/articles/css3-transitions-and-2D-transforms/

In this article, I’ll cover both the 3×3 matrix used for 2D transforms and the 4×4 matrix used for 3D transforms.

Note that as of this publication, Opera does not support three dimensional transforms. I’ve included the 2D `matrix()` equivalent where applicable.

I’ve also used un-prefixed versions of the `transform` properties in this article. In practice, these properties are still experimental and subject to change. Include the prefixed versions (`-o-transform`, for example) in your style sheet until they are finalized.

## What is a matrix? {#whatisamatrix}

[Matrix][8] is a fancy math word for a rectangular array of numbers, symbols, or expressions, ([Figure 1](#figure-1)). Matrices have many math and science applications. Physicists, for example, used them in the study of quantum mechanics. In the computer graphics realm, they’re also used for things like — surprise! — linear transformations and projecting 3D images onto a 2D screen. That’s precisely what the matrix functions do: `matrix()` allows us to create linear transformations, while `matrix3d()` lets us create the illusion of three dimensions in two dimensions using CSS.

[8]: http://en.wikipedia.org/wiki/Matrix_(mathematics)

<figure id="figure-1">
	<img src="/articles/understanding-the-css-transforms-matrix/1.gif" alt="A 3 by 3 grid of numbers. Top row: 1, 2, 8. Middle row: 10, 3, 9. Bottom row: 7, 4, 0">
	<figcaption markdown="span">Figure 1: An example of a matrix</figcaption>
</figure>

We won’t wade too far into the waters of advanced algebra here. You should be familiar with the [Cartesian coordinate system][11]. You may also want to review how to [multiply matrices and vectors][12] (or use a [calculator][13], such as the one offered by Bluebit.gr).

[11]: http://en.wikipedia.org/wiki/Cartesian_coordinate_system
[12]: https://en.wikipedia.org/wiki/Matrix_multiplication
[13]: http://www.bluebit.gr/matrix-calculator/

The big point to understand is that a transform multiplies a matrix by the coordinates of a particular point (or points), expressed as a vector.

## Transforms and coordinate systems {#coordinates}

First let’s talk about coordinate systems. Every document viewport is a coordinate system. The top-left point in the viewport is the origin, with `(0,0)` coordinates. Values increase to the right along the X-axis, and down along the Y-axis. The Z-axis determines the perceived distance from the viewer in the case of 3D transforms. Larger values appear to be closer and bigger; smaller values appear smaller and farther away.

When a transform is applied to an object, it creates a **local coordinate system**. By default, the **origin** — the `(0,0)` point — of the local coordinate system lies at the object’s center or `50% 50%` ([Figure 2](#figure-2)).

<figure id="figure-2">
	<img src="/articles/understanding-the-css-transforms-matrix/2.gif" alt="An example of a local coordinate system">
	<figcaption markdown="span">Figure 2: A local coordinate system</figcaption>
</figure>

We can change the origin of the local coordinate system by adjusting the `transform-origin` property ([Figure 3](#figure-3)). Using `transform-origin: 50px 70px`, for example, puts the coordinate system origin 50 pixels from the left of the object’s box, and 70 pixels from its top. Transforms for any point within the object’s local coordinate system are relative to this local origin.

<figure id="figure-3">
	<img src="/articles/understanding-the-css-transforms-matrix/4.gif" alt="An example of a local coordinate system">
	<figcaption markdown="span">Figure 3: A local coordinate system, with a transform origin of `(50px,70px)`. Also shown is a point at `(30px,30px)`</figcaption>
</figure>

Browsers do these calculations for you whenever you apply a transform. You just need to know which arguments can help you achieve your desired effect.

## Calculating the transform: Matrix and vector math {#calculatingtransform}

Let’s look at an example using the [3×3 matrix][18] used to calculate two dimensional transforms ([Figure 4](#figure-4)). The [4×4 matrix][20] used for 3D transforms works the same way, with additional numbers for the additional z-axis.

[18]: http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined
[20]: http://www.w3.org/TR/css3-transforms/#mathematical-description

<figure id="figure-4">
	<img src="/articles/understanding-the-css-transforms-matrix/3.gif" alt="A 3×3 grid of numbers. Top row: a c e. Middle row: b d f. Bottom row: 0 0 1">
	<figcaption markdown="span">Figure 4: The CSS two-dimensional transform matrix</figcaption>
</figure>

We can also write this as `transform: matrix(a,b,c,d,e,f)`, where `a` through `f` are numbers, determined by the kind of transform we wish to apply. Matrices are recipes of sorts for applying transforms. This will make more sense in a bit wen we look at some examples.

When we apply a 2D transform, the browser multiplies the matrix by a vector: `[x, y, 1]`. The values of x and y are the coordinates of a particular point within the local coordinate space.

To determine the transformed coordinates, we multiply each entity in each row of the matrix by its corresponding row in the vector. Then we add the products ([Figure 5](#figure-5)).

<figure id="figure-5">
	<img src="/articles/understanding-the-css-transforms-matrix/5.gif" alt="When multiplying a matrix by a vector, the product is the sum of the products of each element in the matrix multiplied by its corresponding element in the vector">
	<figcaption markdown="span">Figure 5: Multiplying a matrix by a vector</figcaption>
</figure>

I know that looks like a bunch of meaningless numbers and letters. But as mentioned above, each type of transform has its own matrix. [Figure 6](#figure-6) shows the matrix for a translation transformation.

<figure id="figure-6">
	<img src="/articles/understanding-the-css-transforms-matrix/6.gif" alt="The translation is an identity matrix, but position 0,2 is the x-axis translation and 1,2 is the y-axis translation">
	<figcaption markdown="span">Figure 6: the translation matrix</figcaption>
</figure>

The values `tx` and `ty` are the values by which the origin should be translated. We can also represent it using the vector `[1 0 0 1 tx ty]`. This vector serves as the arguments for the `matrix()` function as shown below.

	#mydiv{
		transform: matrix(1, 0, 0, 1, tx, ty);
		}

Let’s transform an object that has its top-left corner aligned with the top-left corner of our viewport ([Figure 7](#figure-7)). Its global coordinates are `(0,0)`.

<figure id="figure-7">
	<img src="/articles/understanding-the-css-transforms-matrix/4b.png" alt="An object with coordinates of (0,0)">
	<figcaption markdown="span">Figure 7: An object with global coordinates of `(0,0)`</figcaption>
</figure>

We’ll translate this object by 150 pixels along the _X_ and _Y_ axes, using the default transform origin. What follows is the CSS for this transform.

	#mydiv{
		transform: matrix(1, 0, 0, 1, 150, 150);
		}

This, by the way, is the equivalent of `transform: translate(150px,150px)`. Let’s calculate the result of this transform for a point at `(220px,220px)` ([Figure 8](#figure-8)).

<figure id="figure-8">
	<img src="/articles/understanding-the-css-transforms-matrix/7.gif" alt="Multiplying our translation matrix by our vector gives us coordinates of 370,370">
	<figcaption markdown="span">Figure 8: Calculating a translation transform</figcaption>
</figure>

Transforms map coordinates and lengths from the object’s local coordinate system to the previous coordinate system. Where a point is rendered in the viewport depends on the transform applied offset from the object’s start position. In this example, our point at `(220px,220px)` is now rendered at `(370px,370px)`. Other coordinates within our object’s bounds have also been shifted by 150 pixels to the right, and 150 pixels down ([Figure 9](#figure-9)).

<figure id="figure-9">
	<img src="/articles/understanding-the-css-transforms-matrix/7b.png" alt="A 4×4 matrix, with the values sx, sy, sz, and 1 on the diagonal">
	<figcaption markdown="span">Figure 9: Our object after the translation is applied</figcaption>
</figure>

The translation matrix is a special case. It is both _additive_ and _multiplicative_. A simpler way to solve this is would be to add the translation value to our point’s _X_ and _Y_ coordinate values.

### Calculating a three-dimensional transform

We covered the 3×3 translation matrix above. Let’s try another example using the 4×4 transformation matrix for scaling ([Figure 10](#figure-10)).

<figure id="figure-10">
	<img src="/articles/understanding-the-css-transforms-matrix/8.gif" alt="A 4×4 matrix, with the values sx, sy, sz, and 1 on the diagonal">
	<figcaption markdown="span">Figure 10: The 4×4 transformation matrix for scaling</figcaption>
</figure>

Here _sx_, _sy_, and _sz_ represent the scaling multipliers for each axis. Using the `matrix3d` function, this would be: `transform: matrix3d(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1)`.

Let’s continue with our object from above. We’re going to scale down along the _X_ and _Y_ axes using the `matrix3d()` function as shown below.

	#mydiv{
		transform: matrix3d(.8, 0, 0, 0, 0, .5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		}

This is the equivalent of `transform: scale3d(0.8, 0.5, 1)`. Because we are only scaling along the _X_ and _Y_ axes (creating a 2D transform), we could also use `transform: matrix(.8, 0, 0, .5, 0, 0)` or `scale(.8,.5)`. You can see the effect of this transform in [Figure 11](#figure-11).

<figure id="figure-11">
	<img src="/articles/understanding-the-css-transforms-matrix/9b.png" alt="The effect of our scaling matrix">
	<figcaption markdown="span">Figure 11: A 300×300 pixel object after our scaling transform has been applied</figcaption>
</figure>

If we multiply this matrix by a coordinate vector `[150,150,1]`, ([Figure 12](#figure-12)), we get the our point’s new coordinates: `(120,75,1)`.

<figure id="figure-12">
	<img src="/articles/understanding-the-css-transforms-matrix/9.gif" alt="A scaling matrix where sx equals .8, sy equals .5, and sz equals 1 multiplied by the vector 150, 150, 1 produces coordinates of 120, 75, 1">
	<figcaption markdown="span">Figure 12: Calculating a scaling transform</figcaption>
</figure>

### Where to find matrix values

Matrix values for each of the transform functions are outlined in both the [Scalable Vector Graphics][38] specification and the [CSS Transforms][39] specification.

[38]: http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined
[39]: http://www.w3.org/TR/css3-transforms/#mathematical-description

## Compound transforms with the matrix {#compoundtransforms}

Finally, let’s look at how to create a compound transform — a transform equal to applying multiple transform functions at the same time. For simplicity’s sake, we’ll stick to two dimensions. That means we will use the 3×3 transform matrix and the `matrix()` function. With this transform, we will rotate our object by 45° and scale it to 1.5 times its size.

The rotation matrix, expressed as a vector, is `[cos(a) sin(a) -sin(a) cos(a) 0 0]` where _a_ is an angle. To scale, we need to use the matrix `[sx 0 0 sy 0 0]`. To combine, multiply the rotation matrix by the scaling matrix as shown in [Figure 13](#figure-13) (both the sine and cosine of 45° is 0.7071).

<figure id="figure-13">
	<img src="/articles/understanding-the-css-transforms-matrix/10.gif" alt="Multiplying a 45 degree rotation matrix by a 1.5 scaling matrix">
	<figcaption markdown="span">Figure 13: Calculating a compound transform matrix</figcaption>
</figure>

Using CSS, this would be: `transform: matrix(1.0606, 1.0606, -1.0606, 1.0606, 0, 1)`. [Figure 14](#figure-14) shows the effect of this transform after it’s applied.

<figure id="figure-14">
	<img src="/articles/understanding-the-css-transforms-matrix/10b.png" alt="Applying a compound transform to an object">
	<figcaption markdown="span">Figure 14: Our 300×300 pixel object after it has been scaled and rotated</figcaption>
</figure>

Now let’s calculate the new viewport coordinates of a point at `(298,110)` as shown in [Figure 15](#figure-15).

<figure id="figure-15">
	<img src="/articles/understanding-the-css-transforms-matrix/11.gif" alt="Calculating the effect of the above compound transform matrix returns coordinates of 316.0588,432.4248">
	<figcaption markdown="span">Figure 15: Applying the transform</figcaption>
</figure>

Our point’s new coordinates are `(199.393px,432.725px)`.

## Learn More

I hope this piece has demystified the CSS Transforms matrix functions a bit. If it hasn’t, try consulting the resources below.

- [Matrix (mathematics)][46] from Wikipedia
- [Understanding the Transformation Matrix in Flash 8][47] from Senocular
- [Transformations][48] from WolframMathWorld

[46]: http://en.wikipedia.org/wiki/Matrix_(mathematics)
[47]: http://www.senocular.com/flash/tutorials/transformmatrix/
[48]: http://mathworld.wolfram.com/topics/Transformations.html