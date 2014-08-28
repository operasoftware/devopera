---
title: An Introduction to WebGL — Part 1
authors:
- luz-caballero
intro: 'This is the first in our series of articles about WebGL. The objective of this series is to provide the information and resources you’ll need to get started learning WebGL. In this piece, we will discuss how WebGL works, what you need to create WebGL applications, and what a simple example looks like.'
tags:
- 3d
- javascript
- webgl
license: cc-by-3.0
---

## Introduction

This is the first in our series of articles about WebGL. The objective of this series is to provide the information and resources you’ll need to get started learning WebGL. In this piece, we will discuss how WebGL works, what you need to create WebGL applications, and what a simple example looks like.

## What is WebGL?

WebGL is a JavaScript API that allows us to implement interactive 3D graphics, straight in the browser. For an example of what WebGL can do, take a look at this [WebGL demo video][1] (viewable in all browsers!)

[1]: http://www.youtube.com/embed/KDQbXLXM_l4

WebGL is a web standard developed by the [Khronos group][2]; Opera is an active participating member along with Google (Chrome), Mozilla (Firefox), Apple (Safari), and other 3D graphics developers.

[2]: http://www.khronos.org/

WebGL runs as a specific context for the HTML `<canvas>` element, which gives you access to hardware-accelerated 3D rendering in JavaScript. Because it runs in the `<canvas>` element, WebGL also has full integration with all DOM interfaces. The API is based on [OpenGL ES 2.0][3], which means that it is possible to run WebGL on many different devices, such as desktop computers, mobile phones and TVs. You can [view the WebGL specification][4] at the Khronos site.

[3]: http://www.khronos.org/opengles/2_X/
[4]: https://www.khronos.org/registry/webgl/specs/1.0/

## How do I run WebGL? {#implementations}

To access WebGL content you need to have a browser that supports it.

- [Opera 12.00 or above][5] (enable webGL by entering [Enable WebGL in opera:config][6] by setting the value to 1, and [Enable Hardware Acceleration][7] similarly, then restart the browser)
- [Chrome 9 or higher, on Linux, Mac and Windows][8]
- [Firefox 4 and higher][9]
- [Safari 5.1 or higher on Leopard, Snow Leopard, or Lion][10] (make sure you enable WebGL in Safari — go to _Preferences > Advanced_ and check “Show develop menu in menu bar”, then go to _Develop > Enable WebGL_)

[5]: http://www.opera.com/browser/
[6]: opera:config#UserPrefs|EnableWebGL
[7]: opera:config#UserPrefs|EnableHardwareAcceleration
[8]: http://www.google.com/chrome/
[9]: http://www.mozilla.org/en-US/products/download.html
[10]: http://www.apple.com/safari/

Also, having a good graphics card will likely improve WebGL performance on your computer. If you don’t already have it, get the [latest Opera release][11] and check out the above video example running as a [live demo][12]. Another great demo to check out is [Hello Racer][13].

[11]: http://www.opera.com/browser/next/
[12]: http://aleksandarrodic.com/p/jellyfish
[13]: http://helloracer.com/webgl

## What is WebGL used for?

WebGL allows developers to put real-time interactive 3D graphics in the browser. WebGL can be applied to interactive music videos, games, data visualization, art, 3D design environments, 3D modeling of space, 3D modeling of objects, plotting mathematical functions, or creating physical simulations.

<figure class="figure" id="figure-1">
	<img src="{{ page.id }}/webgl.jpg" class="figure__media">
	<figcaption class="figure__caption" markdown="span">Figure 1: [Interactive music videos][15], [Games][17], [Data visualization][19], [Art][21], [3D design environments][23], [3D modelling of space][25], [3D modelling of objects and textures][27], [Plotting mathematical functions][29], [Creating physical simulations][31]</figcaption>
</figure>

[15]: http://inear.se/beanstalk
[17]: http://operasoftware.github.com/Emberwind/
[19]: http://senchalabs.github.com/philogl/PhiloGL/examples/temperatureAnomalies/
[21]: http://mrdoob.github.com/three.js/examples/webgl_materials_cubemap_escher.html
[23]: http://plopbyte.com/veditor
[25]: http://mrdoob.github.com/three.js/examples/webgl_panorama_equirectangular.html
[27]: http://alteredqualia.com/three/examples/webgl_materials_skin.html
[29]: http://senchalabs.github.com/philogl/PhiloGL/examples/explorer/
[31]: http://www.cake23.de/traveling-wavefronts-lit-up.html

## How does WebGL work?

WebGL is slightly more complicated than your typical web technologies because it’s designed to work directly with your graphics card. As a consequence, it’s pretty low level. This is what allows it to rapidly do complex 3D rendering involving lots of calculations.

You don’t need to fully understand the inner workings of WebGL. There are [several WebGL libraries][32] available to take some of the complexity out of your hands. However, gaining an understanding of it can be useful in case you want to spice up your code with features that are not in your library of choice, or you feel that having a better grasp of the technology will help you find your way around what the libraries have to offer.

[32]: https://dev.opera.com/articles/view/an-introduction-to-webgl/#webgllib

When programming in WebGL, you are usually aiming to render a scene of some kind. This usually includes multiple subsequent draw jobs or “calls”, each of which is carried out in the GPU though a process called the rendering pipeline.

In WebGL, like in most real-time 3D graphics, the triangle is the basic element with which models are drawn. Therefore, the process of drawing in WebGL involves using JavaScript to generate the information that specifies where and how these triangles will be created, and how they will look (colour, shades, textures, etc). This information is then fed to the GPU, which processes it, and returns a view of the scene. Next we will look in more detail at how this last bit happens.

### The rendering pipeline

Note that this section is adapted from [Joe Groff’s explanation of the graphics pipeline in OpenGL][33].

[33]: http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Chapter-1:-The-Graphics-Pipeline.html

<figure class="figure">
	<img src="{{ page.id }}/rendering-pipeline.jpg" class="figure__media">
</figure>

The process starts with the creation of the vertex arrays. These are arrays that contain vertex attributes like the location of the vertex in the 3D space and information about the vertex’ texture, colour or how it will be affected by lighting (vertex normal). These arrays and the information they contain are created in JavaScript in one or more of these ways: processing files that describe a 3D model (for example .obj files), procedurally creating the data from scratch, or using a library that provides vertex arrays for geometrical shapes.

Then the data in the vertex arrays is sent to the GPU by feeding it into a set of one or more **vertex buffers**. When a rendering job is submitted, we also have to supply an additional array of indices that point to the vertex array elements. They control how the vertices get assembled into triangles later on.

The GPU begins by reading each selected vertex out of the vertex buffer and running it through the **vertex shader**. The vertex shader is a program that takes a set of vertex attributes as inputs and outputs a new set of attributes. At a minimum, the vertex shader calculates the projected position of the vertex in screen space. But it can also generate other attributes such as colour or texture coordinates for each vertex. You can code your own vertex shader or use one provided by a WebGL library.

The GPU then connects the projected vertices to form triangles. It does this by taking the vertices in the order specified by the indices array and grouping them into sets of three.

The **rasterizer** takes each triangle, clips it, discards parts that are outside of the screen, and breaks the remaining visible parts into pixel-sized fragments. The vertex shader’s outputs for other vertex attributes are also interpolated across the rasterized surface of each triangle, assigning a smooth gradient of values to each fragment. For example, if the vertex shader assigns a colour value to each vertex, the rasterizer will blend those colours into an appropriate colour gradient across the pixelated surface.

The generated pixel-sized fragments then pass through another program called the **fragment shader**. The fragment shader outputs colour and depth values for each pixel, which then get drawn into the **framebuffer**. Common fragment shader operations include texture mapping and lighting. Since the fragment shader runs independently for every pixel drawn, it can perform the most sophisticated special effects; however, it is also the most performance-sensitive part of the graphics pipeline. As with the vertex shader, you can code your own fragment shader or use one provided by a WebGL library.

The **framebuffer** is the final destination for the rendering job’s output. A framebuffer is more than a single 2D image: in addition to one or more colour buffers, a framebuffer can have a depth buffer and/or stencil buffer, both of which optionally filter fragments before they are drawn to the framebuffer. Depth testing discards fragments from objects that are behind the ones already drawn, and stencil testing uses shapes drawn into the stencil buffer to constrain the drawable part of the framebuffer, “stencilling” the rendering job. Fragments that survive these two filters have their colour value alpha blended with the colour value they’re overwriting. Final colour, depth, and stencil values are drawn into the corresponding buffers. The buffers’ outputs can also be used as texture inputs to other rendering jobs.

## How do I get started using WebGL?

The first thing you have to do is [get a browser that supports WebGL](#implementations). You can code WebGL using your favourite JavaScript development environment.

For your first WebGL project, I’d suggest using a WebGL library. If you have read the previous section you can probably imagine why directly using the WebGL API can be a bit exhausting. Unlike other web APIs, “naked” WebGL can be pretty low level. The people who designed WebGL decided to make it that way to keep it flexible and applicable to any use case, with the idea that libraries would later add a layer of convenience to accelerate and simplify development.

Most libraries provide a selection of ready-made models, vertex shaders and fragment shaders that can drastically decrease the amount of code you need to write. If you are still not convinced, have a look at the code for an example [3D model of the Moon][36] — [with a library][37] and [without a library][38]. Even if you just take a quick look, the difference in length and complexity of code is apparent and makes a good case for using a library.

[36]: http://learningwebgl.com/lessons/lesson11/index.html
[37]: https://gist.github.com/818017
[38]: https://github.com/gpjt/webgl-lessons/blob/master/lesson11/index.html

There are many WebGL libraries. What most do is build on top of WebGL to create elements intuitive to a 3D environment like a scene, a camera, a light source, ambient light, ready-made shapes, materials, textures, and effects such as fog, and floating particles. The idea of these elements remains pretty much the same across libraries. How they are used, however, depends on the library’s architecture. Because WebGL can be interactive, most libraries provide easy ways to handle events as well. Finally, most libraries also provide some vertex and fragment shaders. When you do your own library exploration you’ll see that this is by no means an exhaustive description of what libraries have to offer, but it gives you a good idea to start with.

### Choose a WebGL library!

(Not a comprehensive list)

1. [Three.js][39] ([Github][40]) is a lightweight 3D engine with a very low level of complexity — in a good way. The engine can render using `<canvas>`, `<svg>` and WebGL. This is some info on [how to get started][41], which has a nice description of the elements in a scene. And here is the Three.js [API documentation][42]. Three.js is also the most popular WebGL library in terms of number of users, so you can count on an enthusiastic community ([#three.js on irc.freenode.net][43]) to help you out if you get stuck with something.
2. [PhiloGL][44] ([Github][45]) is built with a focus on JavaScript good practices and idioms. Its modules cover a number of categories from program and shader management to XHR, JSONP, effects, web workers and much more. There is an extensive set of [PhiloGL lessons][46] that you can go through to get started. And the [PhiloGL documentation][47] is pretty thorough too.
3. [GLGE][48] ([Github][49]) has some more complex features, like skeletal animation and animated materials. You can find a list of [GLGE features on their project website][50]. And here is a link to the [GLGE API documentation][51].
4. [J3D][52] ([Github][53]) allows you not only to create your own scenes but also to export scenes from [Unity][54] to WebGL. The [J3D “Hello cube” tutorial][55] can help you get started. Also have a look at this [tutorial on how to export from Unity to J3D][56].

[39]: https://github.com/mrdoob/three.js#readme
[40]: https://github.com/mrdoob/three.js
[41]: http://aerotwist.com/tutorials/getting-started-with-three-js/
[42]: https://github.com/mrdoob/three.js/wiki/API-Reference
[43]: http://webchat.freenode.net/?channels=three.js
[44]: http://senchalabs.github.com/philogl/
[45]: https://github.com/senchalabs/philogl
[46]: http://www.senchalabs.org/philogl/demos.html#lessons
[47]: http://senchalabs.github.com/philogl/doc/index.html
[48]: http://www.glge.org/
[49]: https://github.com/supereggbert/GLGE
[50]: http://www.glge.org/about/
[51]: http://www.glge.org/api-docs/
[52]: https://github.com/drojdjou/J3D#readme
[53]: https://github.com/drojdjou/J3D
[54]: http://unity3d.com/
[55]: https://github.com/drojdjou/J3D/wiki/How-to-create-a-cube
[56]: https://github.com/drojdjou/J3D/wiki/Unity-exporter-tutorial

As mentioned, you can also write your own WebGL from scratch, using no libraries. Find out how at [the Learning WebGL blog][57].

[57]: http://learningwebgl.com/blog/?page_id=1217

### Looking at WebGL code

Now it’s time to have a look at some actual WebGL code. To make it simpler, this code has been created using a WebGL library. For the following example I have chosen [PhiloGL][58] because it has very good [documentation][59], making it a great library for someone who wants to get started with WebGL.

[58]: http://senchalabs.github.com/philogl/
[59]: http://senchalabs.github.com/philogl/doc/index.html

This code shows some of the basic WebGL features that you may want to include in a simple program. The accompanying notes provide ample explanation, and links to the PhiloGL documentation for further details. You should take this example and experiment, making changes to what’s there already and maybe even adding a few things of your own design. If you’re curious you can compare this PhiloGL implementation with [its equivalent in “raw” WebGL][60].

[60]: http://learningwebgl.com/blog/?p=1253

This scene has been translated into PhiloGL from [Learning WebGL lesson #11][61]. It shows a 3D model of the Moon, with textures applied from [a NASA Moon map][62]. The Moon can be rotated using drag-and-drop. You can [see the moon example running live][63].

[61]: http://learningwebgl.com/blog/?p=1253
[62]: http://maps.jpl.nasa.gov/
[63]: http://senchalabs.github.com/philogl/PhiloGL/examples/lessons/11/

The next code snippet shows what your HTML file should look like. We import the PhiloGL script, as downloaded from the [PhiloGL website][64], and the `index.js` file where we will write our code. We also create a `<canvas>` element where we want the WebGL scene to be rendered. When the document is loaded, `webGLStart();` will be called. This function resides in `index.js` and will initialize the WebGL application.

[64]: http://senchalabs.github.com/philogl/

	<!DOCTYPE html>
	<html>
	<head>
		<title>Learning WebGL lesson 11 in PhiloGL</title>
		<link href="path/to/file.css" type="text/css" rel="stylesheet" media="screen">
		<script src="path/to/PhiloGL.js"></script>
		<script src="path/to/index.js"></script>
	</head>
	<body onload="webGLStart()">
		<canvas id="lesson11-canvas" width="500" height="500"></canvas>
		<!-- More HTML elements here… -->
	</body>
	</html>

Now Let’s walkthrough the code inside `index.js`. The `webGLStart();` function is the entry point for creating the WebGL application.

	function webGLStart() {
		var pos, $ = function(d) { return document.getElementById(d); };

The moon is created using the PhiloGL [O3D module][65]. O3D provides model management and 3D primitives, like the sphere used in this case. The number of parallels (`nlat`) and meridians (`nlong`) and the radius are specified. A texture is applied to the sphere from an image file:

[65]: http://senchalabs.github.com/philogl/doc/o3d.html

	//Create moon
	var moon = new PhiloGL.O3D.Sphere({
		nlat: 30,
		nlong: 30,
		radius: 2,
		textures: 'moon.gif'
	});

Next, the WebGL application is created by calling the [PhiloGL constructor][66]. The PhiloGL constructor automatically creates a WebGL context, a program, a camera, a scene, options for loading textures via IO, events handlers, and more. In this example we are going to use the default shaders, so no [program][67] needs to be specified in the constructor. The [scene][68] is also left unspecified. It will be created with its default values. The [camera][69]’s position is modified. We declare a texture from an image source (`moon.gif`), and use some [event][70] handlers: drag-and-drop to rotate, and the mouse scroll to zoom the model.

[66]: http://senchalabs.github.com/philogl/doc/core.html#PhiloGL:constructor
[67]: http://senchalabs.github.com/philogl/doc/program.html
[68]: http://senchalabs.github.com/philogl/doc/scene.html
[69]: http://senchalabs.github.com/philogl/doc/camera.html
[70]: http://senchalabs.github.com/philogl/doc/event.html

	//Create application
	PhiloGL('lesson11-canvas', {
		camera: {
			position: {
			x: 0, y: 0, z: -7
			}
		},
		textures: {
			src: ['moon.gif'],
			parameters: [{
				name: 'TEXTURE_MAG_FILTER',
				value: 'LINEAR'
			}, {
				name: 'TEXTURE_MIN_FILTER',
				value: 'LINEAR_MIPMAP_NEAREST',
				generateMipmap: true
			}]
		},
	events: {
		onDragStart: function(e) {
			pos = {
				x: e.x,
				y: e.y
			};
		},
		onDragMove: function(e) {
			var z = this.camera.position.z,
			sign = Math.abs(z) / z;

			moon.rotation.y += -(pos.x - e.x) / 100;
			moon.rotation.x += sign * (pos.y - e.y) / 100;
			moon.update();
			pos.x = e.x;
			pos.y = e.y;
		},
		onMouseWheel: function(e) {
			e.stop();
			var camera = this.camera;
			camera.position.z += e.wheel;
			camera.update();
		}
	},

Once the application is created successfully (the WebGL program is compiled, images are loaded and converted to textures, etc.), the `onLoad` callback will be executed. The first argument to the `onLoad` callback is a [WebGL application][71]. The WebGL Application class has useful methods to manipulate the program, the camera, the scene, etc. We also get a handle to the WebGL context through the `gl` property, in case we want to do some fine tuning at the WebGL API level:

[71]: http://senchalabs.github.com/philogl/doc/webgl.html#WebGL:Application

	onError: function() {
		alert('There was an error creating the app');
	},
	onLoad: function(app) {
		// Unpack app properties
		var gl = app.gl,
		program = app.program,
		scene = app.scene,
		canvas = app.canvas,
		camera = app.camera;

In this example, users can dynamically modify the lighting values (ambient light colour, point light colour, and position) using a form on the page. Here we get a handle to those form elements:

	// Get light config from forms
	lighting = $('lighting'),
	ambient = {
		r: $('ambientR'),
		g: $('ambientG'),
		b: $('ambientB')
	},
	direction = {
		x: $('lightDirectionX'),
		y: $('lightDirectionY'),
		z: $('lightDirectionZ'),

		r: $('directionalR'),
		g: $('directionalG'),
		b: $('directionalB')
	};

Next we define some basic WebGL setup information: we set opaque black for background colour when clearing the canvas, we enable depth testing (this hides objects that are “behind” other objects in the scene), and we set the viewport to occupy the total width and height of the canvas.

		// Basic gl setup
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.viewport(0, 0, canvas.width, canvas.height);

Now we add the moon to our scene, and draw it. For each frame in the scene, the `draw()` function clears the screen, sets up the lighting, renders the moon and makes a request for the next frame to be drawn:

	// Add object to the scene
	scene.add(moon);

	// Draw the scene
	draw();

	function draw() {
		// Clear the screen
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		// Setup lighting
		var lights = scene.config.lights;
		lights.enable = lighting.checked;
		lights.ambient = {
			r: +ambient.r.value,
			g: +ambient.g.value,
			b: +ambient.b.value
		};
		lights.directional = {
			color: {
				r: +direction.r.value,
				g: +direction.g.value,
				b: +direction.b.value
			},
			direction: {
				x: +direction.x.value,
				y: +direction.y.value,
				z: +direction.z.value
			}
		};

		// Render moon
		scene.render();
		// Animate
		Fx.requestAnimationFrame(draw);
		}
	}

## Summary

I hope this article gave you a good idea of what WebGL is about and how to get started building a simple WebGL application. Most importantly, however, I hope it got you excited about trying it yourself. We expect to publish more about WebGL in the near future. Stay tuned!

Useful links for more information:

- [The Khronos WebGL forum][72]
- [Frequently asked questions about WebGL][73]
- [The Learning WebGL blog][74], a cool place for WebGL news and resources

[72]: http://www.khronos.org/message_boards/viewforum.php?f=34
[73]: http://learningwebgl.com/cookbook/index.php/WebGL:_Frequently_Asked_Questions
[74]: http://learningwebgl.com/blog/

Then the data in the vertex arrays is sent to the GPU by feeding it into a set of one or more /aThen the data in the vertex arrays is sent to the GPU by feeding it into a set of one or more

Read part 2 of this series: [An Introduction to WebGL — Part 2: Porting 3D Graphics][75].

[75]: /articles/introduction-to-webgl-part-2-porting-3d/
