Title: Porting 3D graphics to the web — WebGL intro part 2
----
Date: 2011-11-16 11:24:12
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
	         <div class="right">
		<img src="http://forum-test.oslo.osa/kirby/content/articles/480-porting-3d-graphics-to-the-web-webgl-intro-part-2/image0.jpg" width="300" alt="three dimensional castle model" />
                            <p class="comment">Figure 1: An image of the finished example for this article.</p>
		</div>

		<p>In the <a href="http://dev.opera.com/articles/view/an-introduction-to-webgl/">first part of our WebGL series</a>, we walked through a very simple introduction to WebGL, explaining what it is and how it can be used, and dissected a simple code example. From here on in, we will start looking at WebGL in more detail, focussing on individual tasks and techniques. This time, we&#39;ll look at drawing more complicated models in 3D graphics editing applications, and porting them to WebGL. </p>
	
	<h3>The rationale</h3>
		
		<p>Most WebGL tutorials for beginners show you how to create very simple models, like cubes or spheres, however most real-world use cases will require something a bit more complicated than that. An easy way to create complex WebGL models is to draw your 3D models in a dedicated 3D graphics package and port them over to WebGL.</p>
		
		<p>The porting process described in this article involves drawing your model in <a href="http://sketchup.google.com/intl/en/">Google SketchUp Pro</a>, <a href="http://blender.org">Blender</a> or <a href="http://mirye.net/shade-12-overview">Shade</a>, exporting it to Wavefront .obj format, and rendering it in WebGL using <a href="https://github.com/mrdoob/three.js#readme">Three.js</a>. There is no need to be a WebGL expert to have complex 3D models displayed on your website!</p>
		
		<p>You can see an image of the end result in Figure 1: also <a href="http://dev.opera.com/static/articles/2012/porting-3d-graphics-to-the-web-webgl-intro-part-2/examples/webgl_obj_luz.html">view the live demo here</a>. To see this demo you&#39;ll need a browser that supports WebGL: a good choice is <a href="http://www.opera.com/browser/next/">the latest version of Opera</a>!</p>
		
		<p class="note">Note: We have started with the Wavefront .obj format because the process of porting .obj files into WebGL (without using professional graphics editing software) is more stable than that involved with the alternative Collada .dae format. We will cover using .dae files (and animations) with WebGL in a later article.</p>
		
	<h2>Creating and exporting models</h2>
	
	<p>In this section we will look at the process of creating models and exporting them to the .obj format, in SketchUp Pro, Blender and Shade. Other applications that export to .obj are <a href="http://usa.autodesk.com/3ds-max/">3ds Max</a>, <a href="http://www.eias3d.com/">EIAS</a>, <a href="http://www.newtek.com/lightwave">Lightwave</a>, <a href="http://usa.autodesk.com/maya/">Maya</a>, <a href="http://www.luxology.com/modo/">Modo</a> and <a href="http://www.solidworks.com/sw/3d-cad-design-software.htm">Solidworks</a>.</p>
	
		<h3>SketchUp Pro</h3>
		
			<p><a href="http://sketchup.google.com/intl/en/">Google SketchUp</a> is a 3D graphics editing application created by Google. SketchUp Pro is its big brother and includes, among other things, the ability to export files to the .obj format, which we will look at next.</p>
			
			<p>Creating models with SketchUp is easy and intuitive even if you have no previous experience with other CAD applications. There are <a href="http://sketchup.google.com/training/videos.html">SketchUp Pro video tutorials</a> available for different levels of expertise, and a large <a href="http://sketchup.google.com/3dwarehouse/">SketchUp 3D warehouse</a> where you can find ready-made models for things like buildings, trees, furniture, machines, etc. You will need SketchUp Pro if you want to convert these models to .obj (there&#39;s a trial version available). In this example, I&#39;ll use <a href="http://sketchup.google.com/3dwarehouse/">a model from Google 3D Warehouse</a>, <a href="http://sketchup.google.com/3dwarehouse/details?mid=7451d6ce8a284ae2730bdd5eb60fa5ac&amp;ct=mdrm&amp;prevstart=0">Church of the Savior on Spilled Blood</a> by Arrigo Silva. You can choose any model you like or you can draw your own.</p> 
			
			<p class="note">Note: Models in SketchUp 3D warehouse are user-contributed and while writing this article we found that a few of them were broken. These models would render correctly in SketchUp but would not export correctly and would appear broken when trying to render them from the .obj in another application or using WebGL. This sometimes happens because 3D modelling is not only about the visible drawing but also about the skeleton that connects the visible parts and the consistency of the data that creates the mesh. If you&#39;re having trouble rendering a model downloaded from the SketchUp warehouse (or of your own) and you think you&#39;re doing things right, you may want to try again with another model because that&#39;s where the problem may lie.</p>
			
			<p>Once you have your model, you need to export it to Wavefront .obj. If you only want to export one object out of the scene, select it now. Then, to export, go to <strong>File &gt; Export &gt; 3D model</strong> and select <strong>OBJ File (*.obj)</strong> in the format drop-down menu. Next, click on the <strong>Options...</strong> button to open the export options dialog box. To make the file compatible with the tools we&#39;ll use to port it to WebGL, we need to have the following options checked (see Figure 2 for a visual representation):</p>

<ul>
  <li>Export only current selection</li>
  <li>Triangulate all faces</li>
  <li>Export two-sided faces</li>
  <li>Export texture maps</li>
  <li>Swap YZ coordinates (Y is up)</li>
</ul> 
			
			
<div>
<img src="http://forum-test.oslo.osa/kirby/content/articles/480-porting-3d-graphics-to-the-web-webgl-intro-part-2/image1.jpg" alt="SketchUp Pro Export Options dialog box" />
<p class="comment">Figure 2: The SketchUp Pro Export Options dialog box, showing the options we need.</p>
</div>
			<p>If you selected a particular object to export in the previous step, choose &quot;export only current selection&quot; to avoid exporting everything else (of course, export everything if you wish.)</p>
			<p>Next, choose &quot;swap YZ coordinates&quot; to conserve the orientation of your model when ported to WebGL (the YZ axes are opposite in WebGL compared to how they are in SketchUp.)</p>
			<p>All the other checkboxes need to be checked in order to maintain compatibility (<a href="http://sketchup.google.com/support/bin/answer.py?answer=114390">learn more about the meaning of these options</a>.)</p>
			<p>Click <strong>OK</strong>, then <strong>Export</strong> to export.</p>
			
			<p class="note">Note: SketchUp is free, whereas SketchUp Pro costs $450 for a license. There is a <a href="http://sketchup.google.com/intl/en/download/gsup.html">trial version of SketchUp Pro available</a>, which will give you 8 hours of cost-free .obj exporting.</p>
			
			<p>Once you have exported the file you should get an .obj file, an .mtl file, and all the image files that make up your textures.</p> 
			<p>The <a href="http://en.wikipedia.org/wiki/Wavefront_OBJ">.obj file</a> is a text file that contains all the information needed to construct the 3D geometry of the model: the position of each vertex, texture coordinates, vertex normals, information about how vertices make up the faces, etc. An .obj file also contains a reference to one or more .mtl files. An <a href="http://en.wikipedia.org/wiki/Wavefront_OBJ#Referencing_materials">.mtl file</a> describes the visual aspects of the model. It contains information about the materials applied to the surface of each polygon in the model, how they react in different lighting conditions, transparency, textures and so on. .mtl files also reference the image files where these textures are stored in the form of <a href="http://en.wikipedia.org/wiki/Texture_mapping">texture maps</a>. You need all the .obj, .mtl and image files to completely describe your model.</p>
			
		<h3>Blender</h3>
		
			<p><a href="http://blender.org">Blender</a> is a free and open-source 3D graphics editing application that can be used to create models, animations and effects. It also allows you to export your files to the .obj format: see below.</p>
			 
			<p>Blender has a reputation of being hard to use, but this refers largely to old Blender versions; Blender 2.60 shows a lot of improvements in its UI, and is a lot easier to learn. Although Blender has somewhat of a higher entry barrier than SketchUp, what makes it attractive and worth learning (besides being free!) is that it has more powerful features, for example you can add animations and effects to your models. These animations and effects can be exported to Collada and then rendered in WebGL (this will be explained in a later article), so if you are interested in potentially including animations and effects, you may want to make Blender your tool of choice.</p> 
			
			<p class="note">Note: Compatibility is a bit hit and miss here, and the Blender 2.60 documentation is not clear on this point, but on testing, it appears that .obj files exported from SketchUp Pro can&#39;t be correctly imported into Blender.</p>
			
			<p id="blender_tutorials">There are <a href="http://www.blender.org/education-help/tutorials/">Blender tutorials</a> available to help you get started or refine your Blender skills, and <a href="http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro">Blender 3D: Noob to Pro</a> is a great book. You can also find many models to download and play with at <a href="http://e2-productions.com/repository/">The Blender Model Repository</a>.</p>
			
			<p class="note">Note: The instructions for exporting to .obj in Blender in this article may seem a bit difficult to follow if you&#39;re not familiar with Blender. We recommend that if you&#39;re not already familiar with it, you complete some <a href="#blender_tutorials">Blender tutorials</a> and become familiar with the Blender UI before you try out these instructions.</p>
			
			<p>One thing to bear in mind when using Blender is that textures may not managed automatically for .obj export (in version 2.60 they are not, but texture management varies by Blender version). This means that, if for example you&#39;re using Blender 2.60, image files with texture maps will not be exported automatically together with your .obj and .mtl files. So if you&#39;re creating a model with Blender 2.60 and decide to add some textures to it, be sure to do the following, if you&#39;re drawing your textures by yourself instead of applying a pre-made texture image:</p>	
			
			<ol>
				<li><p>On the <strong>UV view</strong> (where you draw textures), save the texture as an image file once you&#39;ve finished designing it &#x2014; see Figure 3 for a visual representation.</p>
				<img class="pic_clear" src="http://forum-test.oslo.osa/kirby/content/articles/480-porting-3d-graphics-to-the-web-webgl-intro-part-2/save_texture_blender.jpg" alt="UV view save texture as image screenshot" style="padding: 10px 0;" />
<p class="comment">Figure 3: The Blender UV view &quot;save texture as image&quot; option.</p></li>

				<li><p>Once you have saved the image, apply the image as a texture checking it in the <strong>in the Textures tab, found in the Default view</strong>, as seen in Figure 4.</p>
				<img class="pic_clear" src="http://forum-test.oslo.osa/kirby/content/articles/480-porting-3d-graphics-to-the-web-webgl-intro-part-2/apply_texture_blender.jpg" alt="Default view, Textures tab apply image as texture screenshot" style="padding: 10px 0;" />
<p class="comment">Figure 4: The Blender Default view, Textures tab &quot;apply image as texture&quot; options.</p></li>
				<li>When you export to .obj and get your .obj and .mtl files, your .mtl file will then already point to the right image files, and the only thing you&#39;ll need to do is include these image files in a subdirectory inside your working directory when carrying out the later steps.</li>
			</ol>
			
			<p>Otherwise, if you&#39;re applying pre-made texture images, just include these image files in a subdirectory inside your working directory when carrying out the later steps.</p>
			
			<p class="note">Note: It is beyond the scope of this article to explain how to design and apply textures in Blender, but you can find instructions on this in the <a href="http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro/UV_Map_Basics">Blender 3D Noob to Pro texture tutorial</a>. Remember that Blender is a powerful but complex tool: if you have never used it before, we&#39;d recommend that you follow some beginner tutorials before you start making textures wit it.</p>
			
			<p>After the images have been correctly saved and the textures have been applied, it&#39;s time to export the model. As with SketchUp Pro, in order to make .obj files compatible with the tools we&#39;re going to use to port it to WebGL, we need to make certain choices when exporting. To do so, follow the steps below (based on the <a href="https://github.com/mrdoob/three.js/blob/master/utils/exporters/obj/convert_obj_three.py">three.js page instructions</a>, written by <a href="http://alteredqualia.com/">AlteredQualia</a>.)</p>
			
			<p class="note">The exact options that you have to choose in the exporter depend on your Blender version because the interface varies between versions. The below steps worked for us in Blender 2.60, so that&#39;s what we&#39;d recommend!</p>   
			
			<ol>
				<li><p>Remove the default cube using the Delete button on the left hand side.</p></li>
				<li><p>Select all meshes (Select &gt; Select All by Type &gt; Mesh.)</p></li>
				<li><p>Choose Export to .obj (File &gt; Export &gt; Wavefront (.obj)), making sure the following options in the exporter are checked:</p>
				
				<ul>
				  <li>Selection Only</li>
				  <li>Apply Modifiers</li>
				  <li>Include Normals</li>
				  <li>Include UVs</li>
				  <li>Write Materials</li>
				  <li>Triangulate Faces</li>
				  <li>Objects as OBJ Objects</li>
				  <li>Material Groups</li>
				  <li>Keep Vertex Order</li>
				</ul>
				</li>
				<li>Click Export Obj to export.</li>
		    </ol>
				  
				<p>You can find some <a href="http://wiki.blender.org/index.php/Extensions:2.5/Py/Scripts/Import-Export/Wavefront_OBJ">information about what these options mean in the Blender wiki</a>. Here&#39;s a screenshot of what worked for us in Blender 2.60:</p>
				<img class="pic_clear" src="http://forum-test.oslo.osa/kirby/content/articles/480-porting-3d-graphics-to-the-web-webgl-intro-part-2/export_blender.png" alt="Blender Export OBJ dialog box" style="padding: 10px 0;" />
<p class="comment">Figure 5: The Blender &quot;Export OBJ&quot; dialog box.</p>

			
			<p>If everything goes well, you should now have an .obj file and an .mtl file to go with all the image files that make up your textures.</p>

		<h3>Shade</h3>
			
			<p>Shade is a 3D modelling, rendering, and animation tool available from E Frontier, a Japanese software company: it is easy to use and has more powerful features available like complex animations. It also handles a large variety of formats, including Collada .dae and Wavefront .obj, and also direct imports from Google SketchUp (using the .skp format). Shade also offers <a href="http://www.shadecamp.net/wiki/Shade_12._Photo_Modeling#Photo_Modeling_Overview">photo modelling</a>, the ability to generate a 3D model from 2D images and apply textures extracted from those images. Shade has three versions: Basic (US$99), Standard (US$ 349), and Pro (US$749), and you can get a 30 day trial version of the Basic and Pro versions (<a href="http://www.mirye.net/compare-shade-12-versions">Shade version comparison</a>). All three versions (and both trials) support SketchUp import and .obj export.</p>
			
			<p>You can find Shade documentation, tutorials and manuals in <a href="http://www.shadecamp.net/wiki/Main_Page">ShadeCamp, the information portal for Shade.</a></p>
			
			<p>To create an .obj version of a model in Shade, open it up, then select File &gt; Export &gt; Wavefront OBJ (see Figure 6). Choose the following options:</p>
			
			<ul>
			  <li>Max vertices per face: 4-sided</li>
			  <li>Normals (Smoothing)</li>
			  <li>UV Value</li>
			  <li>Invert V Value</li>
			  <li>Material file</li>
			  <li>Create texture folder</li>
			  <li>OS (choose your OS)</li>
			</ul>
			
			<img class="pic_clear" src="http://forum-test.oslo.osa/kirby/content/articles/480-porting-3d-graphics-to-the-web-webgl-intro-part-2/export_shade.png" alt="Shade Export dialog box" />
<p class="comment">Figure 6: The Shade &quot;Export&quot; dialog box.</p>
			
			<p>As you can see, Shade offers the possibility of exporting materials by creating a texture folder so the images for the textures are exported automatically. Here, we&#39;ve selected to export all objects as <strong>Output</strong>, but you can choose to export only selected items if that&#39;s what you want. All the other choices are necessary for compatibility with the next steps of the process of rendering them in WebGL.</p>
			
	<h2>Rendering .obj files in WebGL</h2>
	
		<p>In order to render the model in WebGL we can use <a href="https://github.com/mrdoob/three.js#readme">Three.js</a>. Three.js is a JavaScript library that provides a JavaScript wrapper for WebGL. Three.js doesn&#39;t directly handle .obj files — first you have to convert them to JSON —  but luckily Three.js also provides a script that does this for you.</p>

	<h3>Converting .obj to JSON</h3>
	
	<p>Files can be converted from .obj to the JSON format expected by Three.js using <a href="https://github.com/mrdoob/three.js/blob/master/utils/exporters/obj/convert_obj_three.py">convert_obj_three.py</a>, written by <a href="http://alteredqualia.com/">AlteredQualia</a>. The script includes detailed instructions on how to use it. The defaults should simply work, so lets just run it like this:</p>
	
	<ol>
	  <li><p>Download the convert_obj_three.py library and place it in the same directory as your .obj file.</p></li>
	  <li><p>Open up your terminal/command line, and navigate to said directory.</p></li>
	  <li><p>Run the following command:</p>
<pre><code>python convert_obj_three.py -i infile.obj -o outfile.js</code></pre>
	  </li>
	</ol>
	
	<p> If you are changing the location of the files before running the script, bear in mind that .obj/.mtl files use relative paths.</p> 
	
	<p>Once you run the script successfully, you will get a .js file containing the JSON for your model. You will need this file and the image files for the next step.</p>
	
	<h3>Rendering the model</h3>
	
	<p>Once the model is done, it&#39;s time to finally write some code. In this code we&#39;ll include only the basic WebGL features that you need to render your design and rotate it in order to inspect the end result.  You can take this example and experiment, adding your own model, making changes to the basic stuff that&#39;s there already, or even adding a few things of your own design. The code we&#39;re going to use is adapted from the Three.js example webgl_objconvert_test.html (which you can find in the examples folder when you download Three.js). You can find <a href="http://dev.opera.com/static/articles/2012/porting-3d-graphics-to-the-web-webgl-intro-part-2/examples/webgl_obj_luz.html">my finished WebGL example here</a>.</p>
	
	<p class="note">There are <a href="http://www.aerotwist.com/lab/getting-started-with-three-js/">getting started with Three.js tutorials</a> available, as well as a <a href="https://github.com/mrdoob/three.js/wiki/API-Reference">Three.js API reference</a>.</p>
	
	<p>The very first thing you need to do is to download Three.js from the <a href="https://github.com/mrdoob/three.js/downloads">Three.js Github repo</a>. When you unarchive Three.js you&#39;ll find, inside the main folder, among other things, a folder called <strong>examples</strong>. Here you can find some Three.js demos (you may want to check them out later for more sample code and ideas). We&#39;ll start our own new file here <strong>in the examples folder</strong> and then follow the next steps.</p>
	
	<p class="note">Note: If you&#39;re not using Opera, you may need to serve the folder through a web server for the example to work.</p>

	<ol>
		<li><p>To start with, create a simple skeleton HTML file of your choosing.</p>
		</li>
				
		<li><p>The next code snippet shows the things you&#39;ll need to import — add this into your HTML <code>&lt;body&gt;</code></p> 
<pre><code>&lt;script src=&quot;../build/Three.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/Detector.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/RequestAnimationFrame.js&quot;&gt;&lt;/script&gt;</code></pre>
			<p>The first line imports the main Three.js library, while the 2nd and 3rd import useful scripts that come bundled with Three.js, and can be found in the <strong>js</strong> folder (inside the <strong>examples</strong> folder):</p>		
			<ul>
				<li><p>Detector.js is a clever bit of code written by <a href="http://mrdoob.com/">MrDoob</a> and <a href="http://alteredqualia.com/">AlteredQualia</a> that detects if a visitor&#39;s browser supports WebGL. If it doesn&#39;t it shows them where they can download an updated version of their preferred browser that does.</p>
				</li>
				<li><p>RequestAnimationFrame.js is a script by <a href="http://paulirish.com">Paul Irish</a> that provides access to the requestAnimationFrame API in a cross-browser way. The requestAnimationFrame API allows you to animate a scene in a way that&#39;s optimized inside the browser, making your code more efficient. You can <a href="http://paulirish.com/2011/requestanimationframe-for-smart-animating/">read more about requestAnimationFrame here</a>.</p>
				</li>
			</ul>
		</li>
		<li><p>Now it is time to start writing our own script: add the following below the previous <code>&lt;script&gt;</code> blocks. This first block of code checks that the browser supports WebGL, and defines some variables:</p>

<pre><code>&lt;script&gt;
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var FLOOR = 0;

var container;

var camera, scene;
var webglRenderer;

var zmesh, geometry;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;</code></pre>
		</li>
  
		<li><p>Like I said before, we&#39;ll keep things simple for now, so we&#39;ll provide only the basic features needed to render a model. However, we will add some basic interaction to allow users to rotate scene, so they can appreciate the 3D model, and we can check that it has loaded correctly. Add the following code below the previous block:</p>
		
<pre><code>document.addEventListener( &#39;mousemove&#39;, onDocumentMouseMove, false );
init();
animate();</code></pre>
  
  			<p>The <code>mousemove</code> event listener is there to provide this interaction. Like their names indicate, <code>init()</code> and <code>animate()</code> respectively initialize and animate the WebGL application.</p>
		</li>
  
		<li><p>Now let&#39;s take a look at the functions that make things happen. Add the following, again at the bottom of the previous block:</p>
		
<pre><code>function init() {
  container = document.createElement( &#39;div&#39; );
  document.body.appendChild( container );
			
  // camera
  camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 100000 );
  camera.position.z = 75;
			
  // scene
  scene = new THREE.Scene();

  // lights
  var ambient = new THREE.AmbientLight( 0xffffff );
  scene.add( ambient );
			
  // more lights
  var directionalLight = new THREE.DirectionalLight( 0xffeedd );
  directionalLight.position.set( 0, -70, 100 ).normalize();
  scene.add( directionalLight );
}</code></pre>
		
		<p>In order to initialize the WebGL application, we create the different elements that compose it.</p>
		
		<ul>
		  <li>First we&#39;ll create a div where everything will be contained.</li>
		  <li>Then we create a camera (<code><a href="https://github.com/mrdoob/three.js/wiki/API-Reference#wiki-THREE.PerspectiveCamera">THREE.PerspectiveCamera</a></code>), indicating its <a href="http://en.wikipedia.org/wiki/Field_of_view">field of view</a>, its <a href="http://en.wikipedia.org/wiki/Aspect_ratio_(image)">aspect ratio</a>, and the closest and farthest distances that will be captured by the camera (<a href="http://en.wikipedia.org/wiki/Depth_of_field">near and far</a>). We also set the camera position for the z axis (depth).</li>
		  <li>Then we create a scene (<code><a href="https://github.com/mrdoob/three.js/wiki/API-Reference#wiki-THREE.Scene">THREE.Scene</a></code>) and add some lights (<code><a href="https://github.com/mrdoob/three.js/wiki/API-Reference#wiki-THREE.AmbientLight">THREE.AmbientLight</a></code> and <code><a href="https://github.com/mrdoob/three.js/wiki/API-Reference#wiki-THREE.DirectionalLight">THREE.DirectionalLight</a></code>)</li>
		</ul>
      </li>
		
		<li><p>Now it&#39;s time to add the model. For this we create a new <code><a href="https://github.com/mrdoob/three.js/wiki/API-Reference#wiki-THREE.WebGLRenderer">WebGLRenderer</a></code>. The <code>WebGLRenderer</code> is an object that, among other things, has the attribute <code>.domElement</code> — the <code>&lt;canvas&gt;</code> element that will house the WebGL application. Add the following:</p>
		
<pre><code>// renderer
webglRenderer = new THREE.WebGLRenderer();
webglRenderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
webglRenderer.domElement.style.position = &quot;relative&quot;;
container.appendChild( webglRenderer.domElement );</code></pre>
		</li>
			
		<li><p>Then we load the model, and call the function <code>createScene()</code>. Add this next:</p>
			
<pre><code>// loader
var loader = new THREE.JSONLoader(),
callbackModel   = function( geometry ) { createScene( geometry,  90, FLOOR, -50, 105 ) };
loader.load( { model: &quot;obj/church/church.js&quot;, callback: callbackModel } );</code></pre>
  
       <p class="note">As part of this step, make sure you change the path to the church.js file to point to your own JSON file, as created in the previous stage.</p>
		</li>
    
		<li><p>The function <code>createScene()</code> creates a model from geometry and materials using <code><a href="https://github.com/mrdoob/three.js/wiki/API-Reference#wiki-THREE.Mesh">THREE.Mesh</a></code> and then positions, scales and adds this model to the scene. We&#39;re not really scaling our model in this case od the demo example, but the reason we&#39;re including this line anyway is that more likely than not you&#39;ll have to scale yours to make it display properly if you&#39;re using our code as a template and using your own model. Add this:</p>
		
<pre><code>function createScene( geometry, x, y, z, b ) {
  zmesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
  zmesh.position.set( 0, 16, 0 );
  zmesh.scale.set( 1, 1, 1 );
  scene.add( zmesh );
}</code></pre>
		</li>
    
		<li><p>Next we&#39;ll add the following bit of code, which grabs the mouse movement and stores it for later, when we compute the rotation:</p>
		
<pre><code>function onDocumentMouseMove(event) {
  mouseX = ( event.clientX - windowHalfX );
  mouseY = ( event.clientY - windowHalfY );
}</code></pre>
		</li>
    
		<li><p>And finally, we&#39;ll add the <code>animate()</code> function, which animates and renders the scene, and the <code>render()</code> function, which computes the rotation:</p>
		
<pre><code>function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  zmesh.rotation.set(-mouseY/500 + 1, -mouseX/200, 0);
  webglRenderer.render( scene, camera );
}
&lt;/script&gt;</code></pre>
		</li> 
  </ol>
		
	<h2>Summary</h2>
	
	<p>I hope this article convinced you that you don&#39;t need to be a WebGL expert to include cool 3D models on your website. Now you know how to convert your own 3D models using SketchUp, Blender, or Shade (or any other 3D graphics software that lets you save to .obj) and render them in WebGL using Three.js. If you&#39;ve not followed the walkthrough and built your own, <a href="http://dev.opera.com/static/articles/2012/porting-3d-graphics-to-the-web-webgl-intro-part-2/examples/webgl_obj_luz.html">access the live demo code here</a> and start trying your own ideas. Here are some links you may find useful:</p>
	<ul>
		<li><a href="http://sketchup.google.com/intl/en/download/index.html">Get SketchUp and SketchUp Pro</a></li> 
		<li><a href="http://sketchup.google.com/training/videos.html">SketchUp tutorials</a></li> 
		<li><a href="http://www.blender.org/download/get-blender/">Get blender</a></li> 
		<li><a href="http://www.blender.org/education-help/tutorials/">Blender tutorials</a></li> 
		<li><a href="http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro">Blender 3D: Noob to Pro, a Blender manual</a></li>
		<li><a href="http://www.shadetrial.com/download-shade">Get Shade</a></li>
		<li><a href="http://www.shadecamp.net/wiki/Main_Page">ShadeCamp, the information portal for Shade with documentation, tutorials, manuals, etc.</a></li>
		<li><a href="https://github.com/mrdoob/three.js/blob/master/utils/exporters/obj/convert_obj_three.py">Get convert_obj_three.py</a></li> 
		<li><a href="https://github.com/mrdoob/three.js/downloads">Get three.js</a></li> 
		<li><a href="https://github.com/mrdoob/three.js/wiki/API-Reference">Three.js API reference</a></li>
		<li><a href="http://www.aerotwist.com/lab/getting-started-with-three-js/">Cool getting started with Three.js tutorial in case you want to add more models, effects and animations to your WebGL application</a></li>
	</ul>
	<p>Keep an eye on Dev.Opera for the next part of this tutorial!</p>
