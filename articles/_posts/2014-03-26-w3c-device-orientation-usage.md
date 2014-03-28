---
title: 'Practical application and usage of the W3C Device Orientation API'
authors:
- rich-tibbett
intro: 'The W3C device orientation API allows us to determine the orientation of a device in physical space. In this advanced tutorial we cover some of the pitfalls and propose some new ways of working with this data for developing practical device-orientation-aware web applications on mobile devices.'
tags:
- angles
- augmented reality
- deviceorientation
- euler angles
- orientationchange,
- quaternion
- rotation matrix
- screen orientation
- tait-bryan angles
- virtual reality
cover: png
license: cc-by-3.0
layout: article
---

<h2 id="contents">Contents</h2>

<ul>
	<li><a href="#introduction">Introduction</a></li>
	<li><a href="#coordinatesystem">Our coordinate system revisited</a></li>
	<li><a href="#eulerlimitations">Limitations of using Euler angles</a></li>
	<li>
		<a href="#practicalconsiderations">Practical considerations for using device orientation in web applications</a>
		<ul>
			<li><a href="#practicalconsiderations_1">Avoiding gimbal lock</a></li>
			<li><a href="#practicalconsiderations_2">Screen orientation</a></li>
			<li><a href="#practicalconsiderations_3">World orientation</a></li>
		</ul>
	</li>
	<li>
		<a href="#alternateorientationrepresentations">Conversion to alternate device orientation representations</a>
		<ul>
			<li><a href="#rotationmatrixes">Using Rotation Matrices</a></li>
			<li><a href="#quaternions">Using Quaternions</a></li>
		</ul>
	</li>
	<li><a href="#demo">Example: An orientation-aware virtual reality viewer</a></li>
	<li><a href="#xbrowser">Cross browser compatibility</a></li>
	<li><a href="#summary">Summary</a></li>
</ul>

<hr>

<h2 id="introduction">Introduction</h2>

<p>The <a href="http://w3c.github.io/deviceorientation/spec-source-orientation.html">W3C Device Orientation specification</a> allows developers to plug in and use a device's gyroscope and accelerometer data. Such capabilities could be used to build virtual and augmented reality experiences right in to today's web browsers. Yet the learning curve required for web developers to utilize this raw information to date has been large.</p>

<p>In this article we'll break down and explain practical usage of device orientation event data so web developers can incorporate <code>deviceorientation</code> event data in to their web applications in a practical way.</p>

<h2 id="coordinatesystem">Our coordinate system revisited</h2>

<p>In our <a href="http://dev.opera.com/articles/view/w3c-device-orientation-api/">previous article in this series</a> we introduced the coordinate system in use within the W3C Device Orientation specification.</p>

<p>A full description of the coordinate system is provided in our <a href="http://dev.opera.com/articles/view/w3c-device-orientation-api/">previous article</a> but to recap, here is the standard W3C Device Orientation coordinate frame:</p>

<p align="center"><img src="/articles/w3c-device-orientation-usage/device-axes.png" alt="explanation of coordinate system" width="520"></p>

<p class="caption">Figure 1: A diagram of the coordinate system used by device orientation.</p>

<p>Device orientation defines three types of rotation, which are are follows:</p>

<ul>
<li><p><strong>Alpha:</strong> The amount of rotation around the Z axis is known as alpha. The range is from 0 to 360 degrees and the current orientation in this axis is denoted with z.</p>

<p align="center"><img src="/articles/w3c-device-orientation-usage/device-alpha.png" alt="Device rotated around the Z axis" width="620"></p>
<p class="caption">Figure 2: Device rotated z degrees around the Z axis.</p>
</li>

<li>
<p><strong>Beta:</strong> The amount of rotation around the X-axis is known as beta. The range is from -180 to 180 degrees and the current orientation in this axis is denoted with x.</p>

<p align="center"><img src="/articles/w3c-device-orientation-usage/device-beta.png" alt="Device rotated around the X axis" width="620"></p>
<p class="caption">Figure 3: Device rotated x degrees around the X axis.</p>
</li>

<li>
<p><strong>Gamma:</strong> The amount of rotation around the Y-Axis is known as gamma. The range is from -90 to 90 degrees and the current orientation in this axis is denoted with y.</p>

<p align="center"><img src="/articles/w3c-device-orientation-usage/device-gamma.png" alt="Device rotated around the Y axis" width="620"></p>
<p class="caption">Figure 4: Device rotated y degrees around the Y axis.</p>
</li>
</ul>

<p>As we also know, the values provided back to us are in the form of <a href="https://en.wikipedia.org/wiki/Euler_angles">Tait-Bryan angles</a>. Tait-Bryan angles are special forms of Euler angles that require 3 rotations around each of the 3 axis. Normal Euler angles that require 3 rotations around only 2 axis (where one axis of rotation is repeated). The full set of Tait-Bryan rotations we could potentially use to describe the rotation of a device is therefore as follows:</p>

<p><em>x-y-z</em>, <em>x-z-y</em>, <em>y-x-z</em>, <em>y-z-x</em>, <em>z-x-y</em>, <em>z-y-x</em></p>

<p>We can obtain the current orientation of the device by registering a <code>deviceorientation</code> event listener against the <code>window</code> object in our web application. Ideally, we should aim to keep JavaScript processing we do in this event listener to a minimum and aim to manipulate the device orientation event data values only during a canvas paint function or while running a program loop such as <a href="http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/">requestAnimationFrame</a>.</p>

<p>Here's a simple event handler that captures the given <code>deviceorientation</code> event data values and stores them for us to use at a later time within our application:</p>

<pre><code>var deviceOrientationData = null;

window.addEventListener('deviceorientation', function( event ) {
	deviceOrientationData = event;
}, false);</code></pre>

<h2 id="eulerlimitations">Limitations of using Euler angles</h2>

<p>Tait-Bryan angles, and Euler angles in general, give us a good way to visualize the rotations of a device as it moves around in physical space. However, using Euler angles is known to introduce an issue when trying to model 3-axis rotations called <a href="https://en.wikipedia.org/wiki/Gimbal_lock">gimbal lock</a>.</p>

<p>If we imagine each of the rotation planes described above as a single circular rotation plane - a <a href="https://en.wikipedia.org/wiki/Gimbal">gimbal</a> - then each of the three rotation planes work together to define device orientation movement.</p>

<p>As two of our gimbals start approaching the same parallel direction they start to have difficulty knowing which way to turn and they start spinning. When this occurs, we effectively lose one degree of freedom in our 3-axis modelling of device orientation. This creates a situation where we can no longer accurately model device rotation as the axis' approach the extremes of their gimbal rotation.</p>

<p>Fortunately, other device orientation representations exist that can remove the effects of gimbal lock. In order to remove gimbal lock as an issue we need to represent device rotations in an alternative rotation system such as matrix-based or quaternion-based device orientation representations. We will run through both matrix and quaternion rotation representations in a subsequent section.</p>


<h2 id="practicalconsiderations">Practical considerations for using device orientation in web applications</h2>

<p>Let's run through some considerations that can affect how device orientation data will behave in our web application.</p>

<h3 id="practicalconsiderations_1">Avoiding gimbal lock</h3>

<p>Firstly, it makes sense for us to avoid gimbal lock as we discussed in the <a href="#eulerlimitations">previous section</a>. To do this we can convert the Tait-Bryan angles collected in our <code>deviceorientation</code> event listener to a different rotational representation such as a rotation matrix or a quaternion. We will demonstrate how to make that conversion in the <a href="#alternateorientationrepresentations">alternative device orientation representations</a> section below.</p>

<h3 id="practicalconsiderations_2">Matching the current screen orientation</h3>

<p>Once we have an alternate orientation that can avoid gimbal lock such as a rotation matrix or a quaternion, we need to transform our new rotational representation to account for the current screen orientation of a device. Screen orientation changes can be defined as a Z-axis based transformation by the current screen orientation angle.</p>

<p>The <a href="http://w3c.github.io/deviceorientation/spec-source-orientation.html">W3C Device Orientation Events</a> specification states that if the orientation of the screen changes (e.g. from portrait to landscape or vice versa) when the device is rotated that this does not affect the orientation of the coordinate frame relative to the device. However, because our user is now holding the device with a different screen orientation, the coordinate frame <em>relative to the device</em> will no longer match the current coordinate frame <em>relative to the screen</em>.</p>

<p>Web developers are required to fix this physical anomaly themselves according to the specification. Thankfully there are easy ways for web developers to do this based on registering an <code>orientationchange</code> event handler against the <code>window</code> object in our application.</p>

<p>Known collectively as the <code>window.orientation</code> API, by registering for <code>orientationchange</code> events a web developer can be informed whenever the device's screen itself rotates.</p>

<p>Let's go ahead and add an <code>orientationchange</code> event listener to our web application code to record screen orientation changes:</p>

<pre><code>var currentScreenOrientation = window.orientation || 0; // active default

window.addEventListener('orientationchange', function() {
	currentScreenOrientation = window.orientation;
}, false);</code></pre>

<p>We will discuss how we can apply this screen orientation data against different <a href="#alternateorientationrepresentations">alternative device orientation representations</a> in the next section.</p>

<h3 id="practicalconsiderations_3">Matching the application world orientation</h3>

<p>The final consideration we may need to account for is how we want our orientation to behave relative to the world coordinate frame that we want to use in our final web application model.</p>

<p>For virtual reality or augmented reality applications we want our world coordinate frame to point out the back of the screen in the direction that our device (and therefore, our user) is currently 'looking at'. More precisely, we want our world coordinate frame to reflect what can be 'seen' behind the device's screen when the user rotates their device around in physical space.</p>

<p>To do this we will need to make adjustments to our accumulated rotational representation that we can then finally apply to our web application. We will discuss how this can be done in more depth for each of the different <a href="#alternateorientationrepresentations">alternative device orientation representations</a> presented in the following section.</p>

<h2 id="alternateorientationrepresentations">Conversion to alternate device orientation representations</h2>

<p>In the <a href="">limitations of using Euler angles</a> section above we discussed how Euler angles tend to introduce gimbal lock in to our rotational coordinate system. Let's take the device orientation data and convert it to one of the two alternative representations below to avoid this issue entirely.</p>

<p>You can decide to use either a <a href="#rotationmatrixes">Rotation Matrix</a> or a <a href="#quaternions">Quaternions</a> representation for your needs. For the sake of completion, we will cover both methods below.</p>

<p class="note">The methods provided below expect that each of the alpha, beta and gamma values provided from the <code>deviceorientation</code> event are defined and are not null.</p>

<h3 id="rotationmatrixes">Using Rotation Matrices</h3>

<p>A <a href="https://en.wikipedia.org/wiki/Rotation_matrix">rotation matrix</a> is a matrix that can be used to represent the physical rotation of our device within 3-dimensional space. In order to build a rotation matrix we need a way to represent matrix-based rotation for each of the x, y and z axis rotations. We shall call each of these axis matrices a <em>component rotation matrix</em> and we will then multiply these together to generate a <em>combined rotation matrix</em> representing the full 3-axis rotation of our device.</p>

<p>Based on the <a href="#practicalconsiderations">practical considerations</a> we discussed above, we need to follow three steps to create a suitable rotation matrix we can use in our web applications.</p>

<ol>
	<li><a href="#rotationmatrixes_step1">Convert Euler angles to a Rotation Matrix representation</a></li>
	<li><a href="#rotationmatrixes_step2">Calculate a screen coordinate frame transformation for our Rotation Matrix</a></li>
	<li><a href="#rotationmatrixes_step3">Calculate a world coordinate frame transformation for our Rotation Matrix (optional)</a></li>
	<li><a href="#rotationmatrixes_summary">Put it all together to compute a screen-adjusted and world-adjusted Rotation Matrix representation</a></li>
</ol>

<h4 id="rotationmatrixes_step1">R.1: Converting <code>deviceorientation</code> angles to a Rotation Matrix representation</h4>

<p>In order to rotate the device by &beta; degrees around the X axis we can use the following <em>component rotation matrix</em>:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation3.png" alt="X = [1 0 0; 0 cos(beta) -sin(beta); 0 sin(beta) cos(beta)]"></p>

<p>In order to rotate the device by &gamma; degrees around the Y axis we can use the following <em>component rotation matrix</em>:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation4.png" alt="Y = [cos(gamma) 0 sin(gamma); 0 1 0; -sin(gamma) 0 cos(gamma)]"></p>

<p>In order to rotate the device by &alpha; degrees around the Z axis we can use the following <em>component rotation matrix</em>:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation2.png" alt="Z = [cos(alpha) -sin(alpha) 0; sin(alpha) cos(alpha) 0; 0 0 1]"></p>

<p>The <em>combined rotation matrix</em> can then be constructed by multiplying each of the <em>component rotation matrices</em> above in any of the Tait-Bryan rotation order combinations we described previously in this article. For example, we can represent a <em>combined rotation matrix</em> R when using a device rotation order of <em>z-x-y</em> as follows:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation9.png" alt="R = ZXY"></p>

<p><img src="/articles/w3c-device-orientation-usage/equation13.png" alt="R = [[cos(alpha), -sin(alpha), 0], [sin(alpha), cos(alpha), 0],[ 0, 0, 1 ]].[[1, 0, 0], [0, cos(beta), -sin(beta)], [0, sin(beta), cos(beta)]].[[cos(gamma), 0, sin(gamma)], [0, 1, 0], [-sin(gamma), 0, cos(gamma)]]"></p>

<p>Multiplying each Z, X and Y <em>component rotation matrix</em> together we arrive at the following <em>combined rotation matrix</em> R:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation13a.png" alt="R = [[cos(alpha) cos(gamma)-sin(alpha) sin(beta) sin(gamma), -cos(beta) sin(alpha), cos(gamma) sin(alpha) sin(beta)+cos(alpha) sin(gamma)], [cos(gamma) sin(alpha)+cos(alpha) sin(beta) sin(gamma), cos(alpha) cos(beta), sin(alpha) sin(gamma)-cos(alpha) cos(gamma) sin(beta)], [-cos(beta) sin(gamma), sin(beta), cos(beta) cos(gamma)]]"></p>

<p>Let's add this to our codebase as follows:</p>

<pre><code>var degtorad = Math.PI / 180; // Degree-to-Radian conversion

function getBaseRotationMatrix( alpha, beta, gamma ) {
	var _x = beta  ? beta  * degtorad : 0; // beta value
	var _y = gamma ? gamma * degtorad : 0; // gamma value
	var _z = alpha ? alpha * degtorad : 0; // alpha value

	var cX = Math.cos( _x );
	var cY = Math.cos( _y );
	var cZ = Math.cos( _z );
	var sX = Math.sin( _x );
	var sY = Math.sin( _y );
	var sZ = Math.sin( _z );

	//
	// ZXY-ordered rotation matrix construction.
	//

	var m11 = cZ * cY - sZ * sX * sY;
	var m12 = - cX * sZ;
	var m13 = cY * sZ * sX + cZ * sY;

	var m21 = cY * sZ + cZ * sX * sY;
	var m22 = cZ * cX;
	var m23 = sZ * sY - cZ * cY * sX;

	var m31 = - cX * sY;
	var m32 = sX;
	var m33 = cX * cY;

	return [
		m11,    m12,    m13,
		m21,    m22,    m23,
		m31,    m32,    m33
	];
};</code></pre>

<p>So now we have a way to obtain a <em>combined rotation matrix</em> representation that matches the Tait-Bryan representation originally provided by the <code>deviceorientation</code> event. Next we need to apply device-specific transformations to this rotation matrix to match it up with both the current screen orientation and world orientation.</p>

<h4 id="rotationmatrixes_step2">R.2: Fixing our rotation matrix frame relative to the current screen orientation</h4>

<p>As we discussed in the <a href="#practicalconsiderations">practical considerations</a> section above, any orientation representation we use must be modified to match the current screen orientation. Therefore we need to rotate our rotation matrix by the current screen orientation in order for our coordinate frame to match the current screen orientation and not the default screen orientation.</p>

<p>To obtain our screen-adjusted rotation matrix (R<sub>s</sub>) we need to multiple the rotation matrix (R) we constructed in step 1 above by a Z-axis based transformation representing the current screen orientation angle (&theta;) offset from 0:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation19.png" alt="R_s = R.r_s"></p>

<p>We construct our screen orientation transformation matrix (r<sub>s</sub>) as follows where &theta; is the value of <code>currentScreenOrientation</code> we collected above in our application code:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation20.png" alt="r_s = [[cos(theta_s), - sin(theta_s), 0], [ sin(theta_s), cos(theta_s), 0], [0, 0, 1]]"></p>

<p>The construction of our screen orientation transform matrix (r<sub>s</sub>) can be represented in JavaScript as follows:</p>

<pre><code>function getScreenTransformationMatrix( screenOrientation ) {
	var orientationAngle = screenOrientation ? screenOrientation * degtorad : 0;

	var cA = Math.cos( orientationAngle );
	var sA = Math.sin( orientationAngle );

	// Construct our screen transformation matrix
	var r_s = [
		cA,    -sA,    0,
		sA,    cA,     0,
		0,     0,      1
	];

	return r_s;
}</code></pre>

<h4 id="rotationmatrixes_step3">R.3: Fixing our rotation matrix frame relative to our application's world orientation</h4>

<p>In the same way we 'fixed' our rotation matrix frame to account for the current screen orientation we may need to adjust it again to account for the configuration of our application's 'world' space. Depending on how the coordinate frame of your application is constructed it may be necessary to, for example, flip the rotation matrix so it points out of the back of the screen.</p>

<p>In our example we will again transform our rotation matrix for a virtual reality and augmented reality use case to point out the back of the screen for use in the <a href="http://threejs.org">three.js</a> world space. More formally, we will perform an X-axis based transformation by 90 degrees to our screen-adjusted rotation matrix to fit <a href="http://threejs.org">three.js</a> world space.</p>

<p>To obtain our world-adjusted rotation matrix (R<sub>w</sub>) we need to multiple the screen-adjusted rotation matrix (R<sub>s</sub>) we constructed in step 2 above by an X-axis based transformation (&theta;) of 90 degrees (converted to radians):</p>

<p><img src="/articles/w3c-device-orientation-usage/equation21.png" alt="R_w = R_s.r_w"></p>

<p>We construct our world orientation transformation matrix (r<sub>w</sub>) as follows:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation22.png" alt="r_w = [1 0 0; 0 cos(theta) -sin(theta); 0 sin(theta) cos(theta)]"></p>

<p>The construction of our world orientation transform matrix (r<sub>w</sub>) can be represented in JavaScript as follows:</p>

<pre><code>function getWorldTransformationMatrix() {
	var x = 90 * degtorad;

	var cA = Math.cos( x );
	var sA = Math.sin( x );

	// Construct our world transformation matrix
	var r_w = [
		1,     0,    0,
		0,     cA,   -sA,
		0,     sA,   cA
	];

	return r_w;
}</code></pre>

<h4 id="rotationmatrixes_summary">R.4: Computing our final rotation matrix representation</h4>

<p>In this section we worked through and performed the following:</p>

<ol>
	<li>Construction of a rotation matrix from Tait-Bryan angles provided in the <code>deviceorientation</code> event.</li>
	<li>Adjustment of our rotation matrix to account for the current screen orientation</li>
	<li>Adjustment of our rotation matrix to account for our application's world orientation</li>
</ol>

<p>Now we need to put all of this code together so it can be called on each loop of our application's execution.</p>

<p>Let's define a two functions: <code>matrixMultiply(a, b)</code> that provides generic matrix multiplication and <code>computeMatrix()</code> that applies all the multiplications defined above to obtain a final rotation matrix we can finally use in our web application:</p>

<pre><code>function matrixMultiply( a, b ) {
	var final = [];

	final[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6];
	final[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7];
	final[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8];

	final[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6];
	final[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7];
	final[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8];

	final[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6];
	final[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7];
	final[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8];

	return final;
}

function computeMatrix() {
	var rotationMatrix = getBaseRotationMatrix(
		deviceOrientationData.alpha,
		deviceOrientationData.beta,
		deviceOrientationData.gamma
	); // R

	var screenTransform = getScreenTransformationMatrix( currentScreenOrientation ); // r_s

	var screenAdjustedMatrix = matrixMultiply( rotationMatrix, screenTransform ); // R_s

	var worldTransform = getWorldTransformationMatrix(); // r_w

	var finalMatrix = matrixMultiply( screenAdjustedMatrix, worldTransform ); // R_w

	return finalMatrix; // [ m11, m12, m13, m21, m22, m23, m31, m32, m33 ]
}</code></pre>

<p>We can now call the <code>computeMatrix()</code> function whenever we like, typically during a loop in our application for example using <a href="http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/">requestAnimationFrame</a>.</p>

<h3 id="quaternions">Using Quaternions</h3>

<p>A <a href="https://en.wikipedia.org/wiki/Quaternion">quaternion</a> can be used as another alternative representation for device orientation. A quaternion itself consists of two things. Firstly, every quaternion has an x, y and z component that represents the axis about which a device rotation occurs. Secondly, every quaternion has a w component that represents the amount of rotation that will occur about this axis. With these four numbers it is possible to describe device orientation perfectly while also avoiding introducing the problem of gimbal lock.</p>

<p>Based on the <a href="#practicalconsiderations">practical considerations</a> we explained above, we need to follow three steps to create a quaternion we can use in our web application.</p>

<ol>
	<li><a href="#quaternions_step1">Convert Euler angles to a Unit Quaternion representation</a></li>
	<li><a href="#quaternions_step2">Calculate a screen coordinate frame transformation for our Quaternion</a></li>
	<li><a href="#quaternions_step3">Calculate a world coordinate frame transformation for our Quaternion (optional)</a></li>
	<li><a href="#quaternions_summary">Put it all together to compute a screen-adjusted and world-adjusted Quaternion representation</a></li>
</ol>

<h4 id="quaternions_step1">Q.1: Converting <code>deviceorientation</code> angles to a Unit Quaternion representation</h4>

<p>We can convert the Tait-Bryan alpha (&alpha;), beta (&beta;) and gamma (&gamma;) representation in to a Unit Quaternion (q) using the following formula:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation14.png" alt="q = [[q_w], [q_x], [q_y], [q_z]] = [[cos(beta)cos(gamma)cos(alpha) - sin(beta)sin(gamma)sin(alpha)], [sin(beta)cos(gamma)cos(alpha) - cos(beta)sin(gamma)sin(alpha)], [cos(beta)sin(gamma)cos(alpha) + sin(beta)cos(gamma)sin(alpha)], [cos(beta)cos(gamma)sin(alpha) + sin(beta)sin(gamma)cos(alpha)]]"></p>

<p>This can be represented in JavaScript as follows:</p>

<pre><code>var degtorad = Math.PI / 180; // Degree-to-Radian conversion

function getBaseQuaternion( alpha, beta, gamma ) {
	var _x = beta  ? beta  * degtorad : 0; // beta value
	var _y = gamma ? gamma * degtorad : 0; // gamma value
	var _z = alpha ? alpha * degtorad : 0; // alpha value

	var cX = Math.cos( _x/2 );
	var cY = Math.cos( _y/2 );
	var cZ = Math.cos( _z/2 );
	var sX = Math.sin( _x/2 );
	var sY = Math.sin( _y/2 );
	var sZ = Math.sin( _z/2 );

	//
	// ZXY quaternion construction.
	//

	var w = cX * cY * cZ - sX * sY * sZ;
	var x = sX * cY * cZ - cX * sY * sZ;
	var y = cX * sY * cZ + sX * cY * sZ;
	var z = cX * cY * sZ + sX * sY * cZ;

	return [ w, x, y, z ];
}</code></pre>

<h4 id="quaternions_step2">Q.2: Fixing our quaternion frame relative to the current screen orientation</h4>

<p>As we discussed in the <a href="#practicalconsiderations">practical considerations</a> section above, any orientation representation we use must be modified to match the current screen orientation. Therefore we need to rotate our quaternion by the current screen orientation in order for our quaternion frame to match the current screen orientation and not only the default screen orientation.</p>

<p>To obtain our screen-adjusted quaternion (q'<sub>s</sub>) we need to multiple the quaternion (q) we constructed in step 1 above by a Z-axis based transformation quaternion (q<sub>s</sub>) representing the current screen orientation angle (&theta;) offset from 0 degrees:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation24.png" alt="q'_s = q.q_s"></p>

<p>We construct our quaternion transformation (q<sub>s</sub>) as follows where &theta; is the value of <code>currentScreenOrientation</code> we collected above in our application code:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation25.png" alt="q_s = [[ cos((-theta_s)/2) ], [0], [0], [ sin((-theta_s)/2) ]]"></p>

<p>The construction of our quaternion transform (q<sub>s</sub>) can be represented in JavaScript as follows:</p>

<pre><code>function getScreenTransformationQuaternion( screenOrientation ) {
	var orientationAngle = screenOrientation ? screenOrientation * degtorad : 0;

	var minusHalfAngle = - orientationAngle / 2;

	// Construct the screen transformation quaternion
	var q_s = [
		Math.cos( minusHalfAngle ),
		0,
		0,
		Math.sin( minusHalfAngle )
	];

	return q_s;
}</code></pre>

<h4 id="quaternions_step3">Q.3: Fixing our quaternion frame relative to our application's world orientation</h4>

<p>In the same way we 'fixed' our quaternion frame to account for the current screen orientation we may need to adjust it again to account for the configuration of our application's 'world' space. Depending on how the coordinate frame of your application is constructed it may be necessary to, for example, flip the quaternion so it points out of the back of the screen.</p>

<p>In our example we will again transform our quaternion for a virtual reality and augmented reality use case to point out the back of the screen for use in the <a href="http://threejs.org">three.js</a> world space. More formally, we will perform an X-axis based transformation by 90 degrees to our screen-adjusted quaternion to fit our predefined world space.</p>

<p>To obtain our world-adjusted quaternion (q'<sub>w</sub>) we need to multiple the screen-adjusted quaternion (q'<sub>s</sub>) we constructed in step 2 above by an X-axis based quaternion transformation (&theta;) of 90 degrees (converted to radians):</p>

<p><img src="/articles/w3c-device-orientation-usage/equation26.png" alt="q'_w = q'_s.q_w"></p>

<p>We construct our world orientation transformation quaternion (q<sub>w</sub>) as follows:</p>

<p><img src="/articles/w3c-device-orientation-usage/equation27.png" alt="q_s = [[ cos((-90)/2) ], [sin((-90)/2)], [0], [0]]"></p>

<p>The construction of our world orientation transform quaternion (q<sub>w</sub>) can be represented in JavaScript as follows:</p>

<pre><code>function getWorldTransformationQuaternion() {
	var worldAngle = 90 * degtorad;

	var minusHalfAngle = - worldAngle / 2;

	// Construct the world transformation quaternion
	var q_w = [
		Math.cos( minusHalfAngle ),
		Math.sin( minusHalfAngle ),
		0,
		0
	];

	return q_w;
}</code></pre>

<h4 id="quaternions_summary">Q.4: Computing our final quaternion representation</h4>

<p>In this section we worked through and performed the following:</p>

<ol>
	<li>Construction of a quaternion from Tait-Bryan angles provided in the <code>deviceorientation</code> event.</li>
	<li>Adjustment of our quaternion to account for the current screen orientation</li>
	<li>Adjustment of our quaternion to account for our application's world orientation</li>
</ol>

<p>Now we need to put all of this code together so it can be called on each loop of our application's execution.</p>

<p>Let's define a two functions: <code>quaternionMultiply(a, b)</code> that provides generic quaternion multiplication and <code>computeQuaternion()</code> that applies all the multiplications defined above to obtain a final quaternion representation we can finally use in our web application:</p>

<pre><code>function quaternionMultiply( a, b ) {
	var w = a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3];
	var x = a[1] * b[0] + a[0] * b[1] + a[2] * b[3] - a[3] * b[2];
	var y = a[2] * b[0] + a[0] * b[2] + a[3] * b[1] - a[1] * b[3];
	var z = a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1];

	return [ w, x, y, z ];
}

function computeQuaternion() {
	var quaternion = getBaseQuaternion(
		deviceOrientationData.alpha,
		deviceOrientationData.beta,
		deviceOrientationData.gamma
	); // q

	var worldTransform = getWorldTransformationQuaternion(); // q_w

	var worldAdjustedQuaternion = quaternionMultiply( quaternion, worldTransform ); // q'_w

	var screenTransform = getScreenTransformationQuaternion( currentScreenOrientation ); // q_s

	var finalQuaternion = quaternionMultiply( worldAdjustedQuaternion, screenTransform ); // q'_s

	return finalQuaternion; // [ w, x, y, z ]
}</code></pre>

<p>We can now call the <code>computeQuaternion()</code> function whenever we like, typically during a loop in our application for example using <a href="http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/">requestAnimationFrame</a>.</p>

<h2 id="demo">Example: An orientation-aware virtual reality viewer</h2>

<p>Applying everything we have covered in this article we can now create virtual reality and augmented reality experiences right in the web browser!</p>

<p>We have created <a href="http://people.opera.com/richt/release/demos/orientation/virtualreality/">a demonstration virtual reality viewer web application</a> that utilizes both quaternions and rotation matrix rotation representations and uses the <a href="">three.js</a> JavaScript library to render a cubemap-based scene.

<p>Here are a couple of screenshots from our demo virtual reality viewer running in <a href="https://play.google.com/store/apps/details?id=com.opera.browser">Opera 20 for Android</a>:

<p align="center"><img src="/articles/w3c-device-orientation-usage/virtualreality_1.png" alt="Virtual Reality Web Application - Screenshot 1">

<p align="center"><img src="/articles/w3c-device-orientation-usage/virtualreality_2.png" alt="Virtual Reality Web Application - Screenshot 2">

<p>You can find a live version of this virtual reality demonstration <a href="http://people.opera.com/richt/release/demos/orientation/virtualreality/">here</a> (best viewed on mobile) and the source code can be found <a href="https://github.com/richtr/threeVR">on Github</a>.

<h2 id="xbrowser">Cross browser compatibility</h2>

<p>Since the publication of our <a href="http://dev.opera.com/articles/view/w3c-device-orientation-api/">previous article</a> in this series the cross-browser compatibility of <code>deviceorientation</code> data values has improved considerably between different web browsers.</p>

<p>At the time of writing the above provided rotation transformations works correctly on most Android and iOS-based browsers with a few important caveats that web developers need to keep in mind:</p>

<ul>
	<li>The functions provided above expect <code>deviceOrientationData.alpha</code>, <code>deviceOrientationData.beta</code> and <code>deviceOrientationData.gamma</code> data values provided from the <code>deviceorientation</code> event to be defined and not null. Web developers should check that each property is provided and is not null otherwise the calculations will not work correctly and the developers should provide some alternative fallback functionality (e.g. manual orientation controls).</li>
	<li>The <code>window.orientation</code> API is not currently supported in Gecko-based browsers (e.g. Firefox). There is <a href="https://www.w3.org/Bugs/Public/show_bug.cgi?id=23072">a proposal</a> to add screen orientation change detection (in degrees from the default screen orientation position) to the <a href="https://dvcs.w3.org/hg/screen-orientation/raw-file/tip/Overview.html">W3C Screen Orientation API</a> but at the time of writing this is not available.</li>
	<li>iOS-based browsers currently return <code>deviceOrientationData.alpha</code> as an arbitrary non-compass-based value. Therefore, in iOS-based browsers if you need <em>world-accurate</em> values you will need to replace the <code>deviceOrientationData.alpha</code> value stored with <code>(360 - deviceOrientationData.webkitCompassHeading)</code>. See <a href="https://github.com/w3c/deviceorientation/issues/6">this bug</a> for further details.</li>
</ul>

<h2 id="summary">Summary</h2>

<p>In this article we have presented <a href="#alternateorientationrepresentations">two methods</a> we can use to model a device's 3-dimensional movement without introducing <a href="#eulerlimitations">gimbal lock</a>: <a href="#rotationmatrixes">rotation matrixes</a> and <a href="#quaternions">quaternions</a>.</p>

<p>Using the provided <a href="#alternateorientationrepresentations">alternative device rotation representations</a> we can easily account for <a href="#practicalconsiderations">additional usage considerations</a> such as <a href="#practicalconsiderations_2">screen orientation changes</a> and <a href="#practicalconsiderations_3">world orientation frames</a> to produce rotational models that can be used within advanced real-world web applications.</p>

<p>Device Orientation is an exciting capability that is already shipping and available in the majority of mobile web browsers. Where it has been previously difficult to determine how to use this API in advanced 3D modelling applications we hope this article helps web developers in understanding more about device orientation and we hope you will consider using it in your next project!</p>