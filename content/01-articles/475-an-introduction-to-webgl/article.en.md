Title: An introduction to WebGL
----
Date: 2011-10-13 06:59:20
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

<h2>Introduction</h2>
		
<p>This is the first in our series of articles about WebGL. The objective of this series is to provide the information and resources you&#39;ll need to get started learning WebGL. In this piece, we will discuss how WebGL works, what you need to create WebGL applications, and what a simple example looks like.</p>
		
<h2>What is WebGL?</h2>

<p>WebGL is a JavaScript API that allows us to implement interactive 3D graphics, straight in the browser. For an example of what WebGL can do, take a look at this <a href="http://www.youtube.com/embed/KDQbXLXM_l4">WebGL demo video</a> (viewable in all browsers!)</p>
		
<p>WebGL is a web standard developed by the <a href="http://www.khronos.org/">Khronos group</a>; Opera is an active participating member along with Google (Chrome), Mozilla (Firefox), Apple (Safari), and other 3D graphics developers.</p>

<p>WebGL runs as a specific context for the HTML <code>&lt;canvas&gt;</code> element, which gives you access to hardware-accelerated 3D rendering in JavaScript. Because it runs in the <code>&lt;canvas&gt;</code> element, WebGL also has full integration with all <acronym title="Document Object Model">DOM</acronym> interfaces. The API is based on <a href="http://www.khronos.org/opengles/2_X/">OpenGL ES 2.0</a>, which means that it is possible to run WebGL on many different devices, such as desktop computers, mobile phones and TVs. You can <a href="https://www.khronos.org/registry/webgl/specs/1.0/">view the WebGL specification</a> at the Khronos site.</p>
        
<h2>How do I run WebGL?</h2>
        
<p id="implementations">To access WebGL content you need to have a browser that supports it.</p>
		
<ul>
  <li><a class="draft" href="http://www.opera.com/browser/">Opera 12.00 or above</a> (enable webGL by entering <a href="opera:config#UserPrefs|EnableWebGL">Enable WebGL in opera:config</a> by setting the value to 1, and <a href="opera:config#UserPrefs|EnableHardwareAcceleration">Enable Hardware Acceleration</a> similarly, then restart the browser)</li>
  <li><a href="http://www.google.com/chrome/">Chrome 9 or higher, on Linux, Mac and Windows</a></li>
  <li><a href="http://www.mozilla.org/en-US/products/download.html">Firefox 4 and higher</a></li>
  <li><a href="http://www.apple.com/safari/">Safari 5.1 or higher on Leopard, Snow Leopard, or Lion</a> (make sure you enable WebGL in Safari — go to <em>Preferences &gt; Advanced</em> and check &quot;Show develop menu in menu bar&quot;, then go to <em>Develop &gt; Enable WebGL</em>)</li>
</ul>
		
<p>Also, having a good graphics card will likely improve WebGL performance on your computer. If you don&#39;t already have it, get the <a class="draft" href="http://www.opera.com/browser/next/">latest Opera release</a> and check out the above video example running as a <a href="http://aleksandarrodic.com/p/jellyfish">live demo</a>. Another great demo to check out is <a href="http://helloracer.com/webgl">Hello Racer</a>.</p>

<h2>What is WebGL used for?</h2>
		
<p>WebGL allows developers to put real-time interactive 3D graphics in the browser. WebGL can be applied to interactive music videos, games, data visualization, art, 3D design environments, 3D modeling of space, 3D modeling of objects, plotting mathematical functions, or creating physical simulations.</p>
	
<div id="grid" style="padding: 30px 30px 50px 10px; width: 624px; height: 624px; clear: both;">
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://inear.se/beanstalk"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_interactive-music-video.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">Interactive music videos</p>
		        </div>
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://operasoftware.github.com/Emberwind/"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_game.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">Games</p>
		        </div>
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://senchalabs.github.com/philogl/PhiloGL/examples/temperatureAnomalies/"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_data-visualization.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">Data visualization</p>
		        </div>
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://mrdoob.github.com/three.js/examples/webgl_materials_cubemap_escher.html"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_art.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">Art</p>
		        </div>
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://plopbyte.com/veditor"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_3d-design.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">3D design environments</p>
		        </div>
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://mrdoob.github.com/three.js/examples/webgl_panorama_equirectangular.html"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_3d-modelling-space.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">3D modelling of space</p>
		        </div>
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://alteredqualia.com/three/examples/webgl_materials_skin.html"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_3d-modelling-objects-textures.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">3D modelling of objects and textures</p>
		        </div>
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://senchalabs.github.com/philogl/PhiloGL/examples/explorer/"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_plotting-math-function.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">Plotting mathematical functions</p>
		        </div>
		        <div style="position: relative; float: left; margin: 2px; width: 200px; height: 200px; border: none;">
		            <a href="http://www.cake23.de/traveling-wavefronts-lit-up.html"><img src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/webgl_physical-simulation.png" style="width: 200px; height: 200px;" /></a>
		            <p style="position: absolute; background-color: white; right: 3px; bottom: 3px; padding: 1px; margin: 0; font-size:80%;">Creating physical simulations</p>
		        </div>
		    </div>

<h2>How does WebGL work?</h2>

<p>WebGL is slightly more complicated than your typical web technologies because it&#39;s designed to work directly with your graphics card. As a consequence, it&#39;s pretty low level. This is what allows it to rapidly do complex 3D rendering involving lots of calculations.</p>
		
<p>You don&#39;t need to fully understand the inner workings of WebGL. There are <a href="#webgllib">several WebGL libraries</a> available to take some of the complexity out of your hands. However, gaining an understanding of it can be useful in case you want to spice up your code with features that are not in your library of choice, or you feel that having a better grasp of the technology will help you find your way around what the libraries have to offer.</p>
		
<p>When programming in WebGL, you are usually aiming to render a scene of some kind. This usually includes multiple subsequent draw jobs or &quot;calls&quot;, each of which is carried out in the <acronym title="Graphics Processing Unit">GPU</acronym> though a process called the rendering pipeline.</p>

<p>In WebGL, like in most real-time 3D graphics, the triangle is the basic element with which models are drawn. Therefore, the process of drawing in WebGL involves using JavaScript to generate the information that specifies where and how these triangles will be created, and how they will look (colour, shades, textures, etc). This information is then fed to the GPU, which processes it, and returns a view of the scene. Next we will look in more detail at how this last bit happens.</p>
		
<h3>The rendering pipeline</h3>
		
<p class="note">Note that this section is adapted from <a href="http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Chapter-1:-The-Graphics-Pipeline.html">Joe Groff&#39;s explanation of the graphics pipeline in OpenGL</a>.</p>
		 		
<img class="left" src="http://forum-test.oslo.osa/kirby/content/articles/475-an-introduction-to-webgl/rendering_pipeline.jpg" />
		
<p>The process starts with the creation of the vertex arrays. These are arrays that contain vertex attributes like the location of the vertex in the 3D space and information about the vertex&#39; texture, colour or how it will be affected by lighting (vertex normal). These arrays and the information they contain are created in JavaScript in one or more of these ways: processing files that describe a 3D model (for example .obj files), procedurally creating the data from scratch, or using a library that provides vertex arrays for geometrical shapes.</p>
		
<p>Then the data in the vertex arrays is sent to the GPU by feeding it into a set of one or more <strong>vertex buffers</strong>. When a rendering job is submitted, we also have to supply an additional array of indices that point to the vertex array elements. They control how the vertices get assembled into triangles later on.</p>
		
<p>The GPU begins by reading each selected vertex out of the vertex buffer and running it through the <strong>vertex shader</strong>. The vertex shader is a program that takes a set of vertex attributes as inputs and outputs a new set of attributes. At a minimum, the vertex shader calculates the projected position of the vertex in screen space. But it can also generate other attributes such as colour or texture coordinates for each vertex. You can code your own vertex shader or use one provided by a WebGL library.</p>
		
<p>The GPU then connects the projected vertices to form triangles. It does this by taking the vertices in the order specified by the indices array and grouping them into sets of three.</p>
		
<p>The <strong>rasterizer</strong> takes each triangle, clips it, discards parts that are outside of the screen, and breaks the remaining visible parts into pixel-sized fragments. The vertex shader&#39;s outputs for other vertex attributes are also interpolated across the rasterized surface of each triangle, assigning a smooth gradient of values to each fragment. For example, if the vertex shader assigns a colour value to each vertex, the rasterizer will blend those colours into an appropriate colour gradient across the pixelated surface.</p>
		
<p>The generated pixel-sized fragments then pass through another program called the <strong>fragment shader</strong>. The fragment shader outputs colour and depth values for each pixel, which then get drawn into the <strong>framebuffer</strong>. Common fragment shader operations include texture mapping and lighting. Since the fragment shader runs independently for every pixel drawn, it can perform the most sophisticated special effects; however, it is also the most performance-sensitive part of the graphics pipeline. As with the vertex shader, you can code your own fragment shader or use one provided by a WebGL library.</p>
		
<p>The <strong>framebuffer</strong> is the final destination for the rendering job&#39;s output. A framebuffer is more than a single 2D image: in addition to one or more colour buffers, a framebuffer can have a depth buffer and/or stencil buffer, both of which optionally filter fragments before they are drawn to the framebuffer. Depth testing discards fragments from objects that are behind the ones already drawn, and stencil testing uses shapes drawn into the stencil buffer to constrain the drawable part of the framebuffer, &quot;stencilling&quot; the rendering job. Fragments that survive these two filters have their colour value alpha blended with the colour value they&#39;re overwriting. Final colour, depth, and stencil values are drawn into the corresponding buffers. The buffers&#39; outputs can also be used as texture inputs to other rendering jobs.</p>

<h2 class="get_started">How do I get started using WebGL?</h2>

<p>The first thing you have to do is <a href="#implementations">get a browser that supports WebGL</a>. You can code WebGL using your favourite JavaScript development environment.</p>

<p>For your first WebGL project, I&#39;d suggest using a WebGL library. If you have read the previous section you can probably imagine why directly using the WebGL API can be a bit exhausting. Unlike other web APIs, &quot;naked&quot; WebGL can be pretty low level. The people who designed WebGL decided to make it that way to keep it flexible and applicable to any use case, with the idea that libraries would later add a layer of convenience to accelerate and simplify development.</p>
		
<p>Most libraries provide a selection of ready-made models, vertex shaders and fragment shaders that can drastically decrease the amount of code you need to write. If you are still not convinced, have a look at the code for an example <a href="http://learningwebgl.com/lessons/lesson11/index.html">3D model of the Moon</a> — <a href="https://gist.github.com/818017">with a library</a> and <a href="https://github.com/gpjt/webgl-lessons/blob/master/lesson11/index.html">without a library</a>. Even if you just take a quick look, the difference in length and complexity of code is apparent and makes a good case for using a library.</p>

<p>There are many WebGL libraries. What most do is build on top of WebGL to create elements intuitive to a 3D environment like a scene, a camera, a light source, ambient light, ready-made shapes, materials, textures, and effects such as fog, and floating particles. The idea of these elements remains pretty much the same across libraries. How they are used, however, depends on the library&#39;s architecture. Because WebGL can be interactive, most libraries provide easy ways to handle events as well. Finally, most libraries also provide some vertex and fragment shaders. When you do your own library exploration you&#39;ll see that this is by no means an exhaustive description of what libraries have to offer, but it gives you a good idea to start with.</p>
		
<h3 id="webgllib">Choose a WebGL library!</h3>

<p>(Not a comprehensive list)</p>
<dl>
<dt><a href="https://github.com/mrdoob/three.js#readme">Three.js</a> (<a href="https://github.com/mrdoob/three.js">Three Github repo</a>)</dt>
<dd> Three.js is a lightweight 3D engine with a very low level of complexity — in a good way. The engine can render using &lt;canvas&gt;, &lt;svg&gt; and WebGL. This is some info on <a href="http://www.aerotwist.com/lab/getting-started-with-three-js/">how to get started</a>, which has a nice description of the elements in a scene. And here is the Three.js <a href="https://github.com/mrdoob/three.js/wiki/API-Reference">API documentation</a>. Three.js is also the most popular WebGL library in terms of number of users, so you can count on an enthusiastic community (<a href="http://webchat.freenode.net/?channels=three.js">#three.js on irc.freenode.net</a>) to help you out if you get stuck with something.</dd>
<dt><a href="http://senchalabs.github.com/philogl/">PhiloGL</a> (<a href="https://github.com/senchalabs/philogl">PhiloGL Github repo</a>)</dt>
<dd>PhiloGL is built with a focus on JavaScript good practices and idioms. Its modules cover a number of categories from program and shader management to XHR, JSONP, effects, web workers and much more. There is an extensive set of <a href="http://www.senchalabs.org/philogl/demos.html#lessons">PhiloGL lessons</a> that you can go through to get started. And the <a href="http://senchalabs.github.com/philogl/doc/index.html">PhiloGL documentation</a> is pretty thorough too.</dd>
<dt><a href="http://www.glge.org/">GLGE</a> (<a href="https://github.com/supereggbert/GLGE">GLGE Github repo</a>)</dt>
<dd>GLGE has some more complex features, like skeletal animation and animated materials. You can find a list of <a href="http://www.glge.org/about/">GLGE features on their project website</a>. And here is a link to the <a href="http://www.glge.org/api-docs/">GLGE API documentation</a>.</dd>
  <dt><a href="https://github.com/drojdjou/J3D#readme">J3D</a> (<a href="https://github.com/drojdjou/J3D">J3D Github repo</a>)</dt>
  <dd>J3D allows you not only to create your own scenes but also to export scenes from <a href="http://unity3d.com/">Unity</a> to WebGL. The <a href="https://github.com/drojdjou/J3D/wiki/How-to-create-a-cube">J3D &quot;Hello cube&quot; tutorial</a> can help you get started. Also have a look at this <a href="https://github.com/drojdjou/J3D/wiki/Unity-exporter-tutorial">tutorial on how to export from Unity to J3D</a>.</dd>	
			
</dl>	
		
<p class="note">As mentioned, you can also write your own WebGL from scratch, using no libraries. Find out how at <a href="http://learningwebgl.com/blog/?page_id=1217">the Learning WebGL blog</a>.</p>
				
<h3>Looking at WebGL code</h3>
		
<p>Now it&#39;s time to have a look at some actual WebGL code. To make it simpler, this code has been created using a WebGL library. For the following example I have chosen <a href="http://senchalabs.github.com/philogl/">PhiloGL</a> because it has very good <a href="http://senchalabs.github.com/philogl/doc/index.html" title="PhiloGL documentation">documentation</a>, making it a great library for someone who wants to get started with WebGL.</p> 
		
<p>This code shows some of the basic WebGL features that you may want to include in a simple program. The accompanying notes provide ample explanation, and links to the PhiloGL documentation for further details. You should take this example and experiment, making changes to what&#39;s there already and maybe even adding a few things of your own design. If you&#39;re curious you can compare this PhiloGL implementation with <a href="http://learningwebgl.com/blog/?p=1253" title="3D moon model, in raw WebGL">its equivalent in &quot;raw&quot; WebGL</a>.</p>
		
<p>This scene has been translated into PhiloGL from <a href="http://learningwebgl.com/blog/?p=1253">Learning WebGL lesson #11</a>. It shows a 3D model of the Moon, with textures applied from <a href="http://maps.jpl.nasa.gov/">a NASA Moon map</a>. The Moon can be rotated using drag-and-drop. You can <a href="http://senchalabs.github.com/philogl/PhiloGL/examples/lessons/11/">see the moon example running live</a>.</p>

<p>The next code snippet shows what your HTML file should look like. We import the PhiloGL script, as downloaded from the <a href="http://senchalabs.github.com/philogl/">PhiloGL website</a>, and the <code>index.js</code> file where we will write our code. We also create a <code>&lt;canvas&gt;</code> element where we want the WebGL scene to be rendered. When the document is loaded, <code>webGLStart();</code> will be called. This function resides in <code>index.js</code> and will initialize the WebGL application. </p>
		
<code><pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Learning WebGL lesson 11 in PhiloGL&lt;/title&gt;
    &lt;link href=&quot;path/to/file.css&quot; type=&quot;text/css&quot; rel=&quot;stylesheet&quot; media=&quot;screen&quot; /&gt;
    &lt;script src=&quot;path/to/PhiloGL.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;path/to/index.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
		
  &lt;body onload=&quot;webGLStart();&quot;&gt;
    &lt;canvas id=&quot;lesson11-canvas&quot; width=&quot;500&quot; height=&quot;500&quot;&gt;&lt;/canvas&gt;
    &lt;!-- more html elements here... --&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre></code>

<p>Now Let&#39;s walkthrough the code inside <code>index.js</code>. The <code>webGLStart();</code> function is the entry point for creating the WebGL application.</p>	
			
<code><pre>function webGLStart() {
  var pos, $ = function(d) { return document.getElementById(d); };</pre></code>
		
<p>The moon is created using the PhiloGL <a href="http://senchalabs.github.com/philogl/doc/o3d.html">O3D module</a>. O3D provides model management and 3D primitives, like the sphere used in this case. The number of parallels (<code>nlat</code>) and meridians (<code>nlong</code>) and the radius are specified. A texture is applied to the sphere from an image file:</p>
		
<code><pre>  //Create moon 
  var moon = new PhiloGL.O3D.Sphere({
    nlat: 30,
    nlong: 30,
    radius: 2,
    textures: &#39;moon.gif&#39;
  });</pre></code>
	  
<p>Next, the WebGL application is created by calling the <a href="http://senchalabs.github.com/philogl/doc/core.html#PhiloGL:constructor">PhiloGL constructor</a>. The PhiloGL constructor automatically creates a WebGL context, a program, a camera, a scene, options for loading textures via IO, events handlers, and more. In this example we are going to use the default shaders, so no <a href="http://senchalabs.github.com/philogl/doc/program.html">program</a> needs to be specified in the constructor. The <a href="http://senchalabs.github.com/philogl/doc/scene.html">scene</a> is also left unspecified. It will be created with its default values. The <a href="http://senchalabs.github.com/philogl/doc/camera.html">camera</a>&#39;s position is modified. We declare a texture from an image source (<code>moon.gif</code>), and use some <a href="http://senchalabs.github.com/philogl/doc/event.html">event</a> handlers: drag-and-drop to rotate, and the mouse scroll to zoom the model.</p>
		
<code><pre>  //Create application
  PhiloGL(&#39;lesson11-canvas&#39;, {
    camera: {
      position: {
        x: 0, y: 0, z: -7
      }
    },
    textures: {
      src: [&#39;moon.gif&#39;],
      parameters: [{
        name: &#39;TEXTURE_MAG_FILTER&#39;,
        value: &#39;LINEAR&#39;
      }, {
        name: &#39;TEXTURE_MIN_FILTER&#39;,
        value: &#39;LINEAR_MIPMAP_NEAREST&#39;,
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
    },</pre></code>
	    
<p>Once the application is created successfully (the WebGL program is compiled, images are loaded and converted to textures, etc.), the <code>onLoad</code> callback will be executed. The first argument to the <code>onLoad</code> callback is a <a href="http://senchalabs.github.com/philogl/doc/webgl.html#WebGL:Application">WebGL application</a>. The WebGL Application class has useful methods to manipulate the program, the camera, the scene, etc. We also get a handle to the WebGL context through the <code>gl</code> property, in case we want to do some fine tuning at the WebGL API level:</p>
		
<code><pre>    onError: function() {
      alert(&quot;There was an error creating the app.&quot;);
    },
    onLoad: function(app) {
      //Unpack app properties
      var gl = app.gl,
      program = app.program,
      scene = app.scene,
      canvas = app.canvas,
      camera = app.camera;</pre></code>
	          
<p>In this example, users can dynamically modify the lighting values (ambient light colour, point light colour, and position) using a form on the page. Here we get a handle to those form elements:</p>
		
<code><pre>      //get light config from forms
    lighting = $(&#39;lighting&#39;),
    ambient = {
      r: $(&#39;ambientR&#39;),
      g: $(&#39;ambientG&#39;),
      b: $(&#39;ambientB&#39;)
    },
    direction = {
      x: $(&#39;lightDirectionX&#39;),
      y: $(&#39;lightDirectionY&#39;),
      z: $(&#39;lightDirectionZ&#39;),

      r: $(&#39;directionalR&#39;),
      g: $(&#39;directionalG&#39;),
      b: $(&#39;directionalB&#39;)
    };</pre></code>
	          
<p>Next we define some basic WebGL setup information: we set opaque black for background colour when clearing the canvas, we enable depth testing (this hides objects that are &quot;behind&quot; other objects in the scene), and we set the viewport to occupy the total width and height of the canvas.</p>
		
<code><pre>    //Basic gl setup
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.viewport(0, 0, canvas.width, canvas.height);</pre></code>
	      
<p>Now we add the moon to our scene, and draw it. For each frame in the scene, the <code>draw()</code> function clears the screen, sets up the lighting, renders the moon and makes a request for the next frame to be drawn:</p>
		
<code><pre>    //Add object to the scene
    scene.add(moon);
	
    //Draw the scene
    draw();		

    function draw() {
      //clear the screen
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      //Setup lighting
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
  
      //render moon
      scene.render();
      //Animate
      Fx.requestAnimationFrame(draw);
      }
    }
  });
}</pre></code>

<h2>Summary</h2>

<p>I hope this article gave you a good idea of what WebGL is about and how to get started building a simple WebGL application. Most importantly, however, I hope it got you excited about trying it yourself. We expect to  publish more about WebGL in the near future. Stay tuned!</p>
		
<p>Useful links for more information:</p>

<ul>
  <li><a href="http://www.khronos.org/message_boards/viewforum.php?f=34">The Khronos WebGL forum</a></li>
  <li><a href="http://learningwebgl.com/cookbook/index.php/WebGL:_Frequently_Asked_Questions">Frequently asked questions about WebGL</a></li>
  <li><a href="http://learningwebgl.com/blog/">The Learning WebGL blog</a>, a cool place for WebGL news and resources</li>
</ul>Then the data in the vertex arrays is sent to the GPU by feeding it into a set of one or more /aThen the data in the vertex arrays is sent to the GPU by feeding it into a set of one or more 

<p class="note">Read Part 2 of this series: <a href="http://dev.opera.com/articles/view/porting-3d-graphics-to-the-web-webgl-intro-part-2/">Porting 3D graphics to the web</a>.</p>opera:config#UserPrefs|EnableHardwareAccelerationopera:config#UserPrefs|EnableHardwareAccelerationdd
