Title: Understanding the CSS Transforms Matrix
----
Date: 2012-05-23 15:37:22
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

    <ul>
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#whatisamatrix">What is a matrix?</a></li>
      <li><a href="#coordinates">Transforms and coordinate systems</a></li>
      <li><a href="#calculatingtransform">Calculating the transform: Matrix and vector math</a></li>
      <li><a href="#compoundtransforms">Compound transforms with the matrix</a></li>
    </ul>
	
	<h2 id="intro">Introduction</h2>

<p>The matrix functions &#8212; <code>matrix()</code> and <code>matrix3d()</code> &#8212; are two of the more brain-bending things to understand about <a href="http://dev.w3.org/csswg/css3-transforms/">CSS3 Transforms</a>. In most cases, you&#39;ll use functions such as <code>rotate()</code> and <code>skewY()</code> for ease and clarity&#39;s sake. Behind every transform, though, is an equivalent matrix.  It&#39;s helpful to understand a bit about how they work, so let&#39;s take a look.</p>

<p>CSS transforms are rooted in linear algebra and geometry. Though it helps a great deal to have some advanced math under your belt, it&#39;s possible to understand the matrix functions without it. You should, however, be familiar with CSS transforms. If you aren&#39;t read <a href="http://dev.opera.com/articles/view/css3-transitions-and-2D-transforms/">CSS3 transitions and 2D transforms</a>.</p>

<p>In this article, I&#39;ll cover both the 3-by-3 matrix used for <abbr title="two dimensional">2D</abbr> transforms and the 4-by-4 matrix used for <abbr title="three dimensional">3D</abbr> transforms.</p>

<p class="note">Note that as of this publication, Opera does not support three dimensional transforms. I&#39;ve included the <abbr title="two dimensional">2D</abbr> <code>matrix()</code> equivalent where applicable.</p>

<p class="note">I&#39;ve also used un-prefixed versions of the <code>transform</code> properties in this article. In practice, these properties are still experimental and subject to change. Include the prefixed versions (<code>-o-transform</code>, for example) in your style sheet until they are finalized.</p>

<h2 id="whatisamatrix">What is a matrix?</h2>

<p>
<strong><a href="http://en.wikipedia.org/wiki/Matrix_(mathematics)">Matrix</a></strong> is a fancy math word for <q>a rectangular array of numbers, symbols, or expressions,</q> (<a href="#figure1">Figure 1</a>). Matrices have many math and science applications. Physicists, for example, used them in the study of quantum mechanics. In the computer graphics realm, they&#39;re also used for things like &#8212; surprise! &#8212; linear transformations and projecting <abbr title="three dimensional">3D</abbr> images onto a <abbr title="two dimensional">2D</abbr> screen. That&#39;s precisely what the matrix functions do: <strong><code>matrix()</code></strong> allows us to create linear transformations, while <strong><code>matrix3d()</code></strong> lets us create the illusion of three dimensions in two dimensions using <abbr title="cascading style sheets">CSS</abbr>.</p>

<div id="figure1">
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix1.gif" alt="a 3 by 3 grid of numbers: Top row: 1, 2, 8. Middle row: 10, 3, 9. Bottom row: 7, 4, 0" width="620" height="200" /></p>
    <p class="caption">Figure 1: An example of a matrix</p>
</div>


<p>We won&#39;t wade too far into the waters of advanced algebra here. You should be familiar with the <a href="http://en.wikipedia.org/wiki/Cartesian_coordinate_system">Cartesian coordinate system</a>. You may also want to review how to <a href="https://en.wikipedia.org/wiki/Matrix_multiplication">multiply matrices and vectors</a> (or use a <a href="http://www.bluebit.gr/matrix-calculator/">calculator</a>, such as the one offered by Bluebit.gr).</p>

<p>The big point to understand is that a transform multiplies a matrix by the coordinates of a particular point (or points), expressed as a vector.</p>

<h2 id="coordinates">Transforms and coordinate systems</h2>

<p>First let&#39;s talk about coordinate systems. Every document viewport is a coordinate system. The top-left point in the viewport is the origin, with (0,0) coordinates. Values increase to the right along the x-axis, and down along the y-axis. The z-axis determines the perceived distance from the viewer in the case of <abbr title="three dimensional">3D</abbr> transforms. Larger values appear to be closer and bigger; smaller values appear smaller and farther away.</p>

<p>When a transform is applied to an object, it creates a <strong>local coordinate system</strong>. By default, the <strong>origin</strong> &#8212; the (0,0) point &#8212; of the local coordinate system lies at the object&#39;s center or 50% 50% (<a href="#figure2">Figure 2</a>). </p>

<div id="figure2">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix2.gif" alt="An example of a local coordinate system" width="620" height="420" /></p>
<p class="caption">Figure 2: A local coordinate system.</p>
</div>

<p>We can change the origin of the local coordinate system by adjusting the <code>transform-origin</code> property (<a href="#figure3">Figure 3</a>). Using <code>transform-origin: 50px 70px;</code>, for example, puts the coordinate system origin 50 pixels from the left of the object&#39;s box, and 70 pixels from its top. Transforms for any point within the object&#39;s local coordinate system are relative to this local origin.</p>

<div id="figure3">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix4.gif" alt="An example of a local coordinate system" width="620" height="420" /></p>
<p class="caption">Figure 3: A local coordinate system, with a transform origin of (50px,70px). Also shown is a point at (30px,30px).</p>
</div>

<p>Browsers do these calculations for you whenever you apply a transform. You just need to know which arguments can help you achieve your desired effect.</p>

<h2 id="calculatingtransform">Calculating the transform: Matrix and vector math</h2>

<p>Let&#39;s look at an example using the <a href="http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined">3-by-3 matrix</a> used to calculate two dimensional transforms (<a href="#figure4">Figure 4</a>). The <a href="http://www.w3.org/TR/css3-transforms/#mathematical-description">4-by-4 matrix</a> used for <abbr title="three dimensional">3D</abbr> transforms works the same way, with additional numbers for the additional z-axis.</p>

<div id="figure4">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix3.gif" alt="a 3 by 3 grid of numbers: Top row: a c e. Middle row: b d f. Bottom row: 0 0 1" width="620" height="200" /></p>
<p class="caption">Figure 4: The CSS two-dimensional transform matrix</p>
</div>

<p>We can also write this as <code>transform: matrix(a,b,c,d,e,f)</code>, where <code>a</code>  through <code>f</code> are numbers, determined by the kind of transform we wish to apply. Matrices are recipes of sorts for applying transforms.  This will make more sense in a bit wen we look at some examples.</p>

<p>When we apply a <abbr title="two dimensional">2D</abbr> transform, the browser multiplies the matrix by a vector: <strong>[x, y, 1]</strong>. The values of x and y are the coordinates of a particular point within the local coordinate space.</p>

<p>To determine the transformed coordinates, we multiply each entity in each row of the matrix by its corresponding row in the vector. Then we add the products (<a href="#figure5">Figure 5</a>).</p>

<div id="figure5">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix5.gif" alt="When multiplying a matrix by a vector, the product is the sum of the products of each element in the matrix multiplied by its corresponding element in the vector." width="620" height="200" /></p>
<p class="caption">Figure 5: Multiplying a matrix by a vector</p>
</div>


<p>I know that looks like a bunch of meaningless numbers and letters. But as mentioned above, each type of transform has its own matrix. <a href="#figure6">Figure 6</a> shows the matrix for a translation transformation.</p>

<div id="figure6">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix6.gif" alt="The translation is an identity matrix, but position 0,2 is the x-axis translation and 1,2 is the y-axis translation." width="620" height="200" /></p>
<p class="caption">Figure 6: the translation matrix.</p>
</div>

<p>The values <code>tx</code> and <code>ty</code> are the values by which the origin should be translated. We can also represent it using the vector [1 0 0 1 tx ty]. This vector serves as the arguments for the <code>matrix()</code> function as shown below.</p>

<pre><code>#mydiv{
    transform: matrix(1, 0, 0, 1, tx, ty);
}</code></pre>

<p>Let&#39;s transform an object that has its top-left corner aligned with the top-left corner of our viewport (<a href="#figure7">Figure 7</a>). Its global coordinates are (0,0).</p>

<div id="figure7">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix4b.png" alt="An object with coordinates of 0,0" width="620" height="384" /></p>
<p class="caption">Figure 7: An object with global coordinates of (0,0).</p>
</div>

<p>We&#8217;ll translate this object by 150 pixels along the x and y axes, using the default transform origin. What follows is the CSS for this transform.</p>

<pre><code>#mydiv{
    transform: matrix(1, 0, 0, 1, 150, 150);
}</code></pre>

<p>This, by the way, is the equivalent of <code>transform: translate(150px,150px)</code>. Let&#8217;s calculate the result of this transform for a point at (220px,220px) (<a href="#figure8">Figure 8</a>).</p>

<div id="figure8">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix7.gif" alt="Multiplying our translation matrix by our vector gives us coordinates of 370,370." width="620" height="200" /></p>
<p class="caption">Figure 8: Calculating a translation transform.</p>
</div>

<p>Transforms map coordinates and lengths from the object&#39;s local coordinate system to the previous coordinate system. Where a point is rendered in the viewport depends on the transform applied offset from the object&#8217;s start position. In this example, our point at (220px,220px) is now rendered at (370px,370px). Other coordinates within our object&#8217;s bounds have also been shifted by 150 pixels to the right, and 150 pixels down (<a href="#figure9">Figure 9</a>).</p>

<div id="figure9">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix7b.png" alt="A 4 by 4 matrix, with the values sx, sy, sz, and 1 on the diagonal." width="620" height="384" /></p>
<p class="caption">Figure 9: Our object after the translation is applied.</p>
</div>

<p>The translation matrix is a special case. It is both <em>additive</em> and <em>multiplicative</em>. A simpler way to solve this is would be to add the translation value to our point&#8217;s <em>x</em> and <em>y</em> coordinate values.</p>

<h3>Calculating a three-dimensional transform</h3>

<p>We covered the 3-by-3 translation matrix above. Let&#39;s try another example using the 4-by-4 transformation matrix for scaling (<a href="#figure10">Figure 10</a>).</p>

<div id="figure10">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix8.gif" alt="A 4 by 4 matrix, with the values sx, sy, sz, and 1 on the diagonal." width="620" height="200" /></p>
<p class="caption">Figure 10: The 4-by-4 transformation matrix for scaling.</p>
</div>

<p>Here <i>sx</i>, <i>sy</i>, and <i>sz</i> represent the scaling multipliers for each axis. Using the <code>matrix3d</code> function, this would be: <code>transform: matrix3d(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1)</code>.</p>

<p>Let&#39;s continue with our object from above. We&#39;re going to scale down along the x and y axes using the <code>matrix3d()</code> function as shown below.</p>

<pre><code>#mydiv{
    transform: matrix3d(.8, 0, 0, 0, 0, .5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}</code></pre>

<p>This is the equivalent of <code>transform: scale3d(0.8, 0.5, 1)</code>. Because we are only scaling along the x and y axes (creating a <abbr title="two dimensional">2D</abbr> transform), we could also use <code>transform: matrix(.8, 0, 0, .5, 0, 0)</code> or <code>scale(.8,.5)</code>. You can see the effect of this transform in <a href="#figure11">Figure 11</a>.</p>



<div id="figure11">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix9b.png" alt="The effect of our scaling matrix." width="620" height="430" /></p>
<p class="caption">Figure 11: A 300 pixel-by-300 pixel object after our scaling transform has been applied.</p>
</div>


<p>If we multiply this matrix by a coordinate vector [150,150,1], (<a href="#figure12">Figure 12</a>), we get the our point&#39;s new coordinates: (120,75,1).</p>

<div id="figure12">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix9.gif" alt="A scaling matrix where sx equals .8, sy equals .5, and sz equals 1 multiplied by the vector 150, 150, 1 produces coordinates of 120, 75, 1." width="620" height="200" /></p>
<p class="caption">Figure 12: Calculating a scaling transform.</p>
</div>


<h3>Where to find matrix values</h3>

<p>Matrix values for each of the transform functions are outlined in both the <a href="http://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined">Scalable Vector Graphics</a> specification and the <a href="http://www.w3.org/TR/css3-transforms/#mathematical-description">CSS Transforms</a> specification.</p>


<h2 id="compoundtransforms">Compound transforms with the matrix</h2>

<p>Finally, let&#39;s look at how to create a compound transform — a transform equal to applying multiple transform functions at the same time. For simplicity&#39;s sake, we&#39;ll stick to two dimensions. That means we will use the 3-by-3 transform matrix and the <code>matrix()</code> function. With this transform, we will rotate our object by 45&#xB0; and scale it to 1.5 times its size.</p>

<p>The rotation matrix, expressed as a vector, is <code>[cos(a) sin(a) -sin(a) cos(a) 0 0]</code> where <i>a</i> is an angle. To scale, we need to use the matrix <code>[sx 0 0 sy 0 0]</code>. To combine, multiply the rotation matrix by the scaling matrix as shown in <a href="#figure13">Figure 13</a> (both the sine and cosine of 45&#xB0; is 0.7071).</p>

<div id="figure13">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix10.gif" alt="Multiplying a 45 degree rotation matrix by a 1.5 scaling matrix." width="620" height="200" /></p>
<p class="caption">Figure 13: Calculating a compound transform matrix.</p>
</div>


<p>Using CSS, this would be: <code>transform: matrix(1.0606, 1.0606, -1.0606, 1.0606, 0, 1)</code>. <a href="#figure14">Figure 14</a> shows the effect of this transform after it&#39;s applied.

<div id="figure14">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix10b.png" alt="Applying a compound transform to an object." width="620" height="450" /></p>
<p class="caption">Figure 14: Our 300 pixel-by-300 pixel object after it has been scaled and rotated.</p>
</div>

<p>Now let&#39;s calculate the new viewport coordinates of a point at (298,110) as shown in <a href="#figure15">Figure 15</a>. </p>

<div id="figure15">
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/706-understanding-the-css-transforms-matrix/css-transforms-matrix11.gif" alt="Calculating the effect of the above compound transform matrix returns coordinates of 316.0588,432.4248." width="620" height="200" /></p>
<p class="caption">Figure 15: Applying the transform.</p>
</div>

<p>Our point&#39;s new coordinates are (199.393px,432.725px).</p>

<h2>Learn More </h2>

<p>I hope this piece has demystified the CSS Transforms matrix functions a bit. If it hasn&#39;t, try consulting the resources below.</p>

<ul>
	<li><a href="http://en.wikipedia.org/wiki/Matrix_(mathematics)">Matrix (mathematics)</a> from Wikipedia</li>
	<li><a href="http://www.senocular.com/flash/tutorials/transformmatrix/">Understanding the Transformation Matrix in Flash 8</a> from Senocular</li>
    <li><a href="http://mathworld.wolfram.com/topics/Transformations.html">Transformations</a> from WolframMathWorld</li>
</ul>

<p class="note">Matrix texture cover image by <a href="http://www.flickr.com/photos/zooboing/4335531769/">Patrick Hoesly</a>.</p></p>
