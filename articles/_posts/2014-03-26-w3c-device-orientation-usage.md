---
title: Practical application and usage of the W3C Device Orientation API
authors:
- rich-tibbett
intro: 'The W3C device orientation API allows us to determine the orientation of a device in physical space. In this advanced tutorial we cover some of the pitfalls and propose some new ways of working with this data for developing practical device-orientation-aware web applications on mobile devices.'
tags:
- angles
- augmented-reality
- deviceorientation
- euler-angles
- orientationchange,
- quaternion
- rotation-matrix
- screen-orientation
- tait-bryan-angles
- virtual-reality
license: cc-by-3.0
layout: article
---

## Contents

- [Introduction](#introduction)
- [Our coordinate system revisited](#coordinatesystem)
- [Limitations of using Euler angles](#eulerlimitations)
- [Practical considerations for using device orientation in web applications](#practicalconsiderations)
	- [Avoiding gimbal lock](#practicalconsiderations_1)
	- [Screen orientation](#practicalconsiderations_2)
	- [World orientation](#practicalconsiderations_3)
- [Conversion to alternate device orientation representations](#alternateorientationrepresentations)
	- [Using Rotation Matrices](#rotationmatrixes)
	- [Using Quaternions](#quaternions)
- [Example: An orientation-aware virtual reality viewer](#demo)
- [Cross browser compatibility](#xbrowser)
- [Summary](#summary)

## Introduction {#introduction}

The [W3C Device Orientation specification][1] allows developers to plug in and use a device’s gyroscope and accelerometer data. Such capabilities could be used to build virtual and augmented reality experiences right in to today’s web browsers. Yet the learning curve required for web developers to utilize this raw information to date has been large.

[1]: http://w3c.github.io/deviceorientation/spec-source-orientation.html

In this article we’ll break down and explain practical usage of device orientation event data so web developers can incorporate `deviceorientation` event data in to their web applications in a practical way.

## Our coordinate system revisited {#coordinatesystem}

In our [previous article in this series][2] we introduced the coordinate system in use within the W3C Device Orientation specification.

[2]: http://dev.opera.com/articles/view/w3c-device-orientation-api/

A full description of the coordinate system is provided in our [previous article][3] but to recap, here is the standard W3C Device Orientation coordinate frame:

[3]: http://dev.opera.com/articles/view/w3c-device-orientation-api/

<figure class="figure figure--auto" id="figure-1">
	<img src="/articles/w3c-device-orientation-usage/device-axes.png" alt="Explanation of coordinate system">
	<figcaption class="figure__caption">Figure 1: A diagram of the coordinate system used by device orientation</figcaption>
</figure>

Device orientation defines three types of rotation, which are are follows:

- **Alpha:** The amount of rotation around the Z axis is known as alpha. The range is from 0 to 360 degrees and the current orientation in this axis is denoted with z.

<figure class="figure figure--auto" id="figure-2">
	<img src="/articles/w3c-device-orientation-usage/device-alpha.png" alt="Device rotated around the Z axis">
	<figcaption class="figure__caption">Figure 2: Device rotated z degrees around the Z axis</figcaption>
</figure>

- **Beta:** The amount of rotation around the X-axis is known as beta. The range is from -180 to 180 degrees and the current orientation in this axis is denoted with x.

<figure class="figure figure--auto" id="figure-3">
	<img src="/articles/w3c-device-orientation-usage/device-beta.png" alt="Device rotated around the X axis">
	<figcaption class="figure__caption">Figure 3: Device rotated x degrees around the X axis</figcaption>
</figure>

- **Gamma:** The amount of rotation around the Y-Axis is known as gamma. The range is from -90 to 90 degrees and the current orientation in this axis is denoted with y.

<figure class="figure figure--auto" id="figure-4">
	<img src="/articles/w3c-device-orientation-usage/device-gamma.png" alt="Device rotated around the Y axis">
	<figcaption class="figure__caption">Figure 4: Device rotated y degrees around the Y axis</figcaption>
</figure>

As we also know, the values provided back to us are in the form of [Tait-Bryan angles][8]. Tait-Bryan angles are special forms of Euler angles that require 3 rotations around each of the 3 axis. Normal Euler angles that require 3 rotations around only 2 axis (where one axis of rotation is repeated). The full set of Tait-Bryan rotations we could potentially use to describe the rotation of a device is therefore as follows:

[8]: https://en.wikipedia.org/wiki/Euler_angles

_x-y-z_, _x-z-y_, _y-x-z_, _y-z-x_, _z-x-y_, _z-y-x_

We can obtain the current orientation of the device by registering a `deviceorientation` event listener against the `window` object in our web application. Ideally, we should aim to keep JavaScript processing we do in this event listener to a minimum and aim to manipulate the device orientation event data values only during a canvas paint function or while running a program loop such as [requestAnimationFrame][9].

[9]: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

Here’s a simple event handler that captures the given `deviceorientation` event data values and stores them for us to use at a later time within our application:

    var deviceOrientationData = null;

    window.addEventListener('deviceorientation', function( event ) {
    	deviceOrientationData = event;
    }, false);

## Limitations of using Euler angles {#eulerlimitations}

Tait-Bryan angles, and Euler angles in general, give us a good way to visualize the rotations of a device as it moves around in physical space. However, using Euler angles is known to introduce an issue when trying to model 3-axis rotations called [gimbal lock][10].

[10]: https://en.wikipedia.org/wiki/Gimbal_lock

If we imagine each of the rotation planes described above as a single circular rotation plane - a [gimbal][11] - then each of the three rotation planes work together to define device orientation movement.

[11]: https://en.wikipedia.org/wiki/Gimbal

As two of our gimbals start approaching the same parallel direction they start to have difficulty knowing which way to turn and they start spinning. When this occurs, we effectively lose one degree of freedom in our 3-axis modelling of device orientation. This creates a situation where we can no longer accurately model device rotation as the axis’ approach the extremes of their gimbal rotation.

Fortunately, other device orientation representations exist that can remove the effects of gimbal lock. In order to remove gimbal lock as an issue we need to represent device rotations in an alternative rotation system such as matrix-based or quaternion-based device orientation representations. We will run through both matrix and quaternion rotation representations in a subsequent section.

## Practical considerations for using device orientation in web applications {#practicalconsiderations}

Let’s run through some considerations that can affect how device orientation data will behave in our web application.

### Avoiding gimbal lock {#practicalconsiderations_1}

Firstly, it makes sense for us to avoid gimbal lock as we discussed in the previous section. To do this we can convert the Tait-Bryan angles collected in our `deviceorientation` event listener to a different rotational representation such as a rotation matrix or a quaternion. We will demonstrate how to make that conversion in the alternative device orientation representations section below.

### Matching the current screen orientation {#practicalconsiderations_2}

Once we have an alternate orientation that can avoid gimbal lock such as a rotation matrix or a quaternion, we need to transform our new rotational representation to account for the current screen orientation of a device. Screen orientation changes can be defined as a Z-axis based transformation by the current screen orientation angle.

The [W3C Device Orientation Events][12] specification states that if the orientation of the screen changes (e.g. from portrait to landscape or vice versa) when the device is rotated that this does not affect the orientation of the coordinate frame relative to the device. However, because our user is now holding the device with a different screen orientation, the coordinate frame _relative to the device_ will no longer match the current coordinate frame _relative to the screen_.

[12]: http://w3c.github.io/deviceorientation/spec-source-orientation.html

Web developers are required to fix this physical anomaly themselves according to the specification. Thankfully there are easy ways for web developers to do this based on registering an `orientationchange` event handler against the `window` object in our application.

Known collectively as the `window.orientation` API, by registering for `orientationchange` events a web developer can be informed whenever the device’s screen itself rotates.

Let’s go ahead and add an `orientationchange` event listener to our web application code to record screen orientation changes:

    var currentScreenOrientation = window.orientation || 0; // active default

    window.addEventListener('orientationchange', function() {
    	currentScreenOrientation = window.orientation;
    }, false);

We will discuss how we can apply this screen orientation data against different alternative device orientation representations in the next section.

### Matching the application world orientation {#practicalconsiderations_3}

The final consideration we may need to account for is how we want our orientation to behave relative to the world coordinate frame that we want to use in our final web application model.

For virtual reality or augmented reality applications we want our world coordinate frame to point out the back of the screen in the direction that our device (and therefore, our user) is currently “looking at”. More precisely, we want our world coordinate frame to reflect what can be “seen” behind the device’s screen when the user rotates their device around in physical space.

To do this we will need to make adjustments to our accumulated rotational representation that we can then finally apply to our web application. We will discuss how this can be done in more depth for each of the different alternative device orientation representations presented in the following section.

## Conversion to alternate device orientation representations {#alternateorientationrepresentations}

In the [limitations of using Euler angles][13] section above we discussed how Euler angles tend to introduce gimbal lock in to our rotational coordinate system. Let’s take the device orientation data and convert it to one of the two alternative representations below to avoid this issue entirely.

[13]:

You can decide to use either a Rotation Matrix or a Quaternions representation for your needs. For the sake of completion, we will cover both methods below.

The methods provided below expect that each of the alpha, beta and gamma values provided from the `deviceorientation` event are defined and are not null.

### Using Rotation Matrices {#rotationmatrixes}

A [rotation matrix][14] is a matrix that can be used to represent the physical rotation of our device within 3-dimensional space. In order to build a rotation matrix we need a way to represent matrix-based rotation for each of the x, y and z axis rotations. We shall call each of these axis matrices a _component rotation matrix_ and we will then multiply these together to generate a _combined rotation matrix_ representing the full 3-axis rotation of our device.

[14]: https://en.wikipedia.org/wiki/Rotation_matrix

Based on the practical considerations we discussed above, we need to follow three steps to create a suitable rotation matrix we can use in our web applications.

  1. Convert Euler angles to a Rotation Matrix representation
  2. Calculate a screen coordinate frame transformation for our Rotation Matrix
  3. Calculate a world coordinate frame transformation for our Rotation Matrix (optional)
  4. Put it all together to compute a screen-adjusted and world-adjusted Rotation Matrix representation

#### R.1: Converting `deviceorientation` angles to a Rotation Matrix representation

In order to rotate the device by β degrees around the X axis we can use the following _component rotation matrix_:

<figure class="figure figure--auto" class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation3.png" alt="X = [1 0 0; 0 cos(beta) -sin(beta); 0 sin(beta) cos(beta)]">
</figure>

In order to rotate the device by γ degrees around the Y axis we can use the following _component rotation matrix_:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation4.png" alt="Y = [cos(gamma) 0 sin(gamma); 0 1 0; -sin(gamma) 0 cos(gamma)]">
</figure>

In order to rotate the device by α degrees around the Z axis we can use the following _component rotation matrix_:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation2.png" alt="Z = [cos(alpha) -sin(alpha) 0; sin(alpha) cos(alpha) 0; 0 0 1]">
</figure>

The _combined rotation matrix_ can then be constructed by multiplying each of the _component rotation matrices_ above in any of the Tait-Bryan rotation order combinations we described previously in this article. For example, we can represent a _combined rotation matrix_ R when using a device rotation order of _z-x-y_ as follows:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation9.png" alt="R = ZXY">
</figure>

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation13.png" alt="R = [[cos(alpha), -sin(alpha), 0], [sin(alpha), cos(alpha), 0],[ 0, 0, 1 ]].[[1, 0, 0], [0, cos(beta), -sin(beta)], [0, sin(beta), cos(beta)]].[[cos(gamma), 0, sin(gamma)], [0, 1, 0], [-sin(gamma), 0, cos(gamma)]]">
</figure>

Multiplying each Z, X and Y _component rotation matrix_ together we arrive at the following _combined rotation matrix_ R:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation13a.png" alt="R = [[cos(alpha) cos(gamma)-sin(alpha) sin(beta) sin(gamma), -cos(beta) sin(alpha), cos(gamma) sin(alpha) sin(beta)+cos(alpha) sin(gamma)], [cos(gamma) sin(alpha)+cos(alpha) sin(beta) sin(gamma), cos(alpha) cos(beta), sin(alpha) sin(gamma)-cos(alpha) cos(gamma) sin(beta)], [-cos(beta) sin(gamma), sin(beta), cos(beta) cos(gamma)]]">
</figure>

Let’s add this to our codebase as follows:

    var degtorad = Math.PI / 180; // Degree-to-Radian conversion

    function getBaseRotationMatrix( alpha, beta, gamma ) {
    	var _x = beta  ? beta- degtorad : 0; // beta value
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
    };

So now we have a way to obtain a _combined rotation matrix_ representation that matches the Tait-Bryan representation originally provided by the `deviceorientation` event. Next we need to apply device-specific transformations to this rotation matrix to match it up with both the current screen orientation and world orientation.

#### R.2: Fixing our rotation matrix frame relative to the current screen orientation

As we discussed in the practical considerations section above, any orientation representation we use must be modified to match the current screen orientation. Therefore we need to rotate our rotation matrix by the current screen orientation in order for our coordinate frame to match the current screen orientation and not the default screen orientation.

To obtain our screen-adjusted rotation matrix (Rs) we need to multiple the rotation matrix (R) we constructed in step 1 above by a Z-axis based transformation representing the current screen orientation angle (θ) offset from 0:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation19.png" alt="R_s = R.r_s">
</figure>

We construct our screen orientation transformation matrix (rs) as follows where θ is the value of `currentScreenOrientation` we collected above in our application code:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation20.png" alt="r_s = [[cos(theta_s), - sin(theta_s), 0], [ sin(theta_s), cos(theta_s), 0], [0, 0, 1]]">
</figure>

The construction of our screen orientation transform matrix (rs) can be represented in JavaScript as follows:

    function getScreenTransformationMatrix( screenOrientation ) {
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
    }

#### R.3: Fixing our rotation matrix frame relative to our application’s world orientation

In the same way we “fixed” our rotation matrix frame to account for the current screen orientation we may need to adjust it again to account for the configuration of our application’s “world” space. Depending on how the coordinate frame of your application is constructed it may be necessary to, for example, flip the rotation matrix so it points out of the back of the screen.

In our example we will again transform our rotation matrix for a virtual reality and augmented reality use case to point out the back of the screen for use in the [three.js][23] world space. More formally, we will perform an X-axis based transformation by 90 degrees to our screen-adjusted rotation matrix to fit [three.js][23] world space.

[23]: http://threejs.org

To obtain our world-adjusted rotation matrix (Rw) we need to multiple the screen-adjusted rotation matrix (Rs) we constructed in step 2 above by an X-axis based transformation (θ) of 90 degrees (converted to radians):

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation21.png" alt="R_w = R_s.r_w">
</figure>

We construct our world orientation transformation matrix (rw) as follows:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation22.png" alt="r_w = [1 0 0; 0 cos(theta) -sin(theta); 0 sin(theta) cos(theta)]">
</figure>

The construction of our world orientation transform matrix (rw) can be represented in JavaScript as follows:

    function getWorldTransformationMatrix() {
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
    }

#### R.4: Computing our final rotation matrix representation

In this section we worked through and performed the following:

  1. Construction of a rotation matrix from Tait-Bryan angles provided in the `deviceorientation` event.
  2. Adjustment of our rotation matrix to account for the current screen orientation
  3. Adjustment of our rotation matrix to account for our application’s world orientation

Now we need to put all of this code together so it can be called on each loop of our application’s execution.

Let’s define a two functions: `matrixMultiply(a, b)` that provides generic matrix multiplication and `computeMatrix()` that applies all the multiplications defined above to obtain a final rotation matrix we can finally use in our web application:

    function matrixMultiply( a, b ) {
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
    }

We can now call the `computeMatrix()` function whenever we like, typically during a loop in our application for example using [requestAnimationFrame][26].

[26]: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

### Using Quaternions {#quaternions}

A [quaternion][27] can be used as another alternative representation for device orientation. A quaternion itself consists of two things. Firstly, every quaternion has an x, y and z component that represents the axis about which a device rotation occurs. Secondly, every quaternion has a w component that represents the amount of rotation that will occur about this axis. With these four numbers it is possible to describe device orientation perfectly while also avoiding introducing the problem of gimbal lock.

[27]: https://en.wikipedia.org/wiki/Quaternion

Based on the practical considerations we explained above, we need to follow three steps to create a quaternion we can use in our web application.

  1. Convert Euler angles to a Unit Quaternion representation
  2. Calculate a screen coordinate frame transformation for our Quaternion
  3. Calculate a world coordinate frame transformation for our Quaternion (optional)
  4. Put it all together to compute a screen-adjusted and world-adjusted Quaternion representation

#### Q.1: Converting `deviceorientation` angles to a Unit Quaternion representation

We can convert the Tait-Bryan alpha (α), beta (β) and gamma (γ) representation in to a Unit Quaternion (q) using the following formula:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation14.png" alt="q = [[q_w], [q_x], [q_y], [q_z]] = [[cos(beta)cos(gamma)cos(alpha) - sin(beta)sin(gamma)sin(alpha)], [sin(beta)cos(gamma)cos(alpha) - cos(beta)sin(gamma)sin(alpha)], [cos(beta)sin(gamma)cos(alpha) + sin(beta)cos(gamma)sin(alpha)], [cos(beta)cos(gamma)sin(alpha) + sin(beta)sin(gamma)cos(alpha)]]">
</figure>

This can be represented in JavaScript as follows:

    var degtorad = Math.PI / 180; // Degree-to-Radian conversion

    function getBaseQuaternion( alpha, beta, gamma ) {
    	var _x = beta  ? beta- degtorad : 0; // beta value
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
    }

#### Q.2: Fixing our quaternion frame relative to the current screen orientation

As we discussed in the practical considerations section above, any orientation representation we use must be modified to match the current screen orientation. Therefore we need to rotate our quaternion by the current screen orientation in order for our quaternion frame to match the current screen orientation and not only the default screen orientation.

To obtain our screen-adjusted quaternion (q's) we need to multiple the quaternion (q) we constructed in step 1 above by a Z-axis based transformation quaternion (qs) representing the current screen orientation angle (θ) offset from 0 degrees:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation24.png" alt="q'_s = q.q_s">
</figure>

We construct our quaternion transformation (qs) as follows where θ is the value of `currentScreenOrientation` we collected above in our application code:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation25.png" alt="q_s = [[ cos((-theta_s)/2) ], [0], [0], [ sin((-theta_s)/2) ]]">
</figure>

The construction of our quaternion transform (qs) can be represented in JavaScript as follows:

    function getScreenTransformationQuaternion( screenOrientation ) {
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
    }

#### Q.3: Fixing our quaternion frame relative to our application’s world orientation

In the same way we “fixed” our quaternion frame to account for the current screen orientation we may need to adjust it again to account for the configuration of our application’s “world” space. Depending on how the coordinate frame of your application is constructed it may be necessary to, for example, flip the quaternion so it points out of the back of the screen.

In our example we will again transform our quaternion for a virtual reality and augmented reality use case to point out the back of the screen for use in the [three.js][31] world space. More formally, we will perform an X-axis based transformation by 90 degrees to our screen-adjusted quaternion to fit our predefined world space.

[31]: http://threejs.org

To obtain our world-adjusted quaternion (q'w) we need to multiple the screen-adjusted quaternion (q's) we constructed in step 2 above by an X-axis based quaternion transformation (θ) of 90 degrees (converted to radians):

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation26.png" alt="q'_w = q'_s.q_w">
</figure>

We construct our world orientation transformation quaternion (qw) as follows:

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/equation27.png" alt="q_s = [[ cos((-90)/2) ], [sin((-90)/2)], [0], [0]]">
</figure>

The construction of our world orientation transform quaternion (qw) can be represented in JavaScript as follows:

    function getWorldTransformationQuaternion() {
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
    }

#### Q.4: Computing our final quaternion representation

In this section we worked through and performed the following:

  1. Construction of a quaternion from Tait-Bryan angles provided in the `deviceorientation` event.
  2. Adjustment of our quaternion to account for the current screen orientation
  3. Adjustment of our quaternion to account for our application’s world orientation

Now we need to put all of this code together so it can be called on each loop of our application’s execution.

Let’s define a two functions: `quaternionMultiply(a, b)` that provides generic quaternion multiplication and `computeQuaternion()` that applies all the multiplications defined above to obtain a final quaternion representation we can finally use in our web application:

    function quaternionMultiply( a, b ) {
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
    }

We can now call the `computeQuaternion()` function whenever we like, typically during a loop in our application for example using [requestAnimationFrame][34].

[34]: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

## Example: An orientation-aware virtual reality viewer {#demo}

Applying everything we have covered in this article we can now create virtual reality and augmented reality experiences right in the web browser!

We have created [a demonstration virtual reality viewer web application][35] that utilizes both quaternions and rotation matrix rotation representations and uses the [three.js][36] JavaScript library to render a cubemap-based scene.

[35]: http://people.opera.com/richt/release/demos/orientation/virtualreality/
[36]: http://threejs.org

Here are a couple of screenshots from our demo virtual reality viewer running in [Opera 20 for Android][37]:

[37]: https://play.google.com/store/apps/details?id=com.opera.browser

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/virtualreality_1.png" alt="Virtual Reality Web Application - Screenshot 1">
</figure>

<figure class="figure figure--auto">
	<img src="/articles/w3c-device-orientation-usage/virtualreality_2.png" alt="Virtual Reality Web Application - Screenshot 2">
</figure>

You can find a live version of this virtual reality demonstration [here][40] (best viewed on mobile) and the source code can be found [on Github][41].

[40]: http://people.opera.com/richt/release/demos/orientation/virtualreality/
[41]: https://github.com/richtr/threeVR

## Cross browser compatibility {#xbrowser}

Since the publication of our [previous article][42] in this series the cross-browser compatibility of `deviceorientation` data values has improved considerably between different web browsers.

[42]: http://dev.opera.com/articles/view/w3c-device-orientation-api/

At the time of writing the above provided rotation transformations works correctly on most Android and iOS-based browsers with a few important caveats that web developers need to keep in mind:

- The functions provided above expect `deviceOrientationData.alpha`, `deviceOrientationData.beta` and `deviceOrientationData.gamma` data values provided from the `deviceorientation` event to be defined and not null. Web developers should check that each property is provided and is not null otherwise the calculations will not work correctly and the developers should provide some alternative fallback functionality (e.g. manual orientation controls).
- The `window.orientation` API is not currently supported in Gecko-based browsers (e.g. Firefox). There is [a proposal][43] to add screen orientation change detection (in degrees from the default screen orientation position) to the [W3C Screen Orientation API][44] but at the time of writing this is not available.
- iOS-based browsers currently return `deviceOrientationData.alpha` as an arbitrary non-compass-based value. Therefore, in iOS-based browsers if you need _world-accurate_ values you will need to replace the `deviceOrientationData.alpha` value stored with `(360 - deviceOrientationData.webkitCompassHeading)`. See [this bug][45] for further details.

[43]: https://www.w3.org/Bugs/Public/show_bug.cgi?id=23072
[44]: https://dvcs.w3.org/hg/screen-orientation/raw-file/tip/Overview.html
[45]: https://github.com/w3c/deviceorientation/issues/6

## Summary {#summary}

In this article we have presented two methods we can use to model a device’s 3-dimensional movement without introducing gimbal lock: rotation matrixes and quaternions.

Using the provided alternative device rotation representations we can easily account for additional usage considerations such as screen orientation changes and world orientation frames to produce rotational models that can be used within advanced real-world web applications.

Device Orientation is an exciting capability that is already shipping and available in the majority of mobile web browsers. Where it has been previously difficult to determine how to use this API in advanced 3D modelling applications we hope this article helps web developers in understanding more about device orientation and we hope you will consider using it in your next project!
