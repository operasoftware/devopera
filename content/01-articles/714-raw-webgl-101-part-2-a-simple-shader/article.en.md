Title: Raw WebGL 101 — Part 2: a simple shader
----
Date: 2012-06-18 13:32:18
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

<p>In the last part of this article series — <a href="http://dev.opera.com/articles/view/raw-webgl-part1-getting-started/">Raw WebGL 101 — Part 1: getting started</a>, we introduced you to the world of writing raw WebGL (look ma, no libraries). We got you set up and showed you how to create a couple of very basic examples along with some simple error handling, and we explained basic concepts such as the WebGL rendering pipeline.</p>

<p>In this article, we will carry on where we left off, going further with the same example file and building up a simple shader. This article is a transcript of <a href="http://www.youtube.com/watch?v=me3BviH3nZc&amp;t=22m26s">time 22:26 to 32.36</a> in Erik Möller&#39;s <a href="http://www.youtube.com/watch?v=me3BviH3nZc">WebGL 101</a> tutorial, available on YouTube.</p>

<h2>Making a rectangle out of our triangle</h2>

<p>To build up this example step by step, start with the <a href="minimal-draw.zip">Minimal draw code</a> from the last article and follow the steps below. You can also <a href="02-minimal-draw.html">view the minimal draw example</a> to see what the code so far does, and <a href="03-minimal-shader.html">view the minimal shader example</a> to see what the end result from this tutorial will be.</p>

<p>First of all, make a copy of the 02-minimal-draw.html file, and save it as 03-minimal-shader.html (or something else of your choosing). In this tutorial we are going to forget about triangles, and instead draw a rectangle that will cover the canvas. To show what we will draw, replace the ascii triangle we currently have in our code with a square, like this:</p>

<pre>/*

2 ___ 3
 |\  |
 | \ |
0|__\|1

*/</pre>


<p>Note that in this context we are always using clip space coordinates, hence the values always ranging from -1 to 1. The next thing we want to do is input this data into our vertices array. Change the <code>var vertices</code> line (the fifth line of script) to read like so:</p>

<pre><code>var vertices = [-1, -1, 1, -1, -1, 1, 1, 1];</code></pre>

<p>Next, we take our <code>gl.drawArrays</code> line (the bottom line of script) and change it to use <code>TRIANGLE_STRIP</code> to dictate the shape to be drawn, instead of <code>TRIANGLES</code> — this works for our purposes here because the shape we are drawing is made from a strip of triangles. We will give <code>TRIANGLE_STRIP</code> four vertices, so the last number needs to be changed from 3 to 4.</p>

<pre><code>gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);</code></pre>

<p>These changes will result in our exciting green triangle being changed into an even more exciting green rectangle — see Figure 1!</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/714-raw-webgl-101-part-2-a-simple-shader/figure1.png" alt="A WebGL-rendered green rectangle" /></p>
<p class="caption">Figure 1: An exciting green rectangle, rendered using WebGL.</p>

<h2>Making our example more flexible</h2>

<p>At the moment, we have some hard-coded data to define features of the shape, such as the colour, size and number of items. Let&#39;s make this more flexible, defining these in the buffer instead. First of all, add the following lines below the <code>gl.bufferData</code> line (just above the ascii square):</p>

<pre><code>vertexPosBuffer.itemSize = 2;
vertexPosBuffer.numItems = 4;</code></pre>

<p>Now, replace the hard coded values from the last two lines of script with these properties:</p>

<pre><code>gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, false, 0, 0);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);</code></pre>

<p>This is good, as it makes the code more generic, and able to handle drawing a wider variety of shapes more easily.</p>

<h2>Improving the shaders</h2>

<p>The shaders are currently written inside strings, which is awkward to work with. To improve this, we will put them inside their own &lt;script&gt; elements. Put two new <code>&lt;script&gt;</code> elements in between the two existing ones, one for the vertex shader and one for the fragment shader. Give them <code>id</code>s and <code>type</code>s as shown:</p>

<pre><code>&lt;script id=&quot;vshader&quot; type=&quot;text/plain&quot;&gt;
&lt;/script&gt;
&lt;script id=&quot;fshader&quot; type=&quot;text/plain&quot;&gt;
&lt;/script&gt;</code></pre>

<p>Now let&#39;s add the code for our shaders inside each <code>&lt;script&gt;</code> element. First, put this inside the vertex shader element:</p>

<pre><code>attribute vec2 aVertexPosition;
varying vec2 vTexCoord;
void main() {
  vTexCoord = aVertexPosition;
  gl_Position = vec4(aVertexPosition, 0, 1);
}</code></pre>

<p>The first two lines declare the optional input and output to the shader. <code>gl_Position</code> is the mandatory output from a vertex shader — this contains the clip space vertices passed on to the rasterization step. In <code>main()</code> we just pass the input vertex positions on to the two outputs. Bear in mind that <code>gl_Position</code> is a <code>vec4</code> therefore we need to add two components.</p>

<p>Now let&#39;s build the fragment shader, inside the second <code>&lt;script&gt;</code> element:</p>

<pre><code>precision mediump float;
varying vec2 vTexCoord;
void main() {
  gl_FragColor = vec4(vTexCoord, 0, 1);
}</code></pre>

<p>Here we set the precision of any float variables in the shader. Like the <code>gl_Position</code> in the vertex shader, the fragment shader has a mandatory output called <code>gl_FragColor</code> that tells the graphic library which colour to draw the fragment in. Here we use the two components of <code>vTexCoord</code> for the red and green components, set the blue component to 0, and the alpha component to 1.</p>

<p>Because we&#39;ve moved our shaders out to different element positions, we need to change references to them in the main code. Delete the two old lines that contain the shaders as strings (the ones that start <code>var vs</code> and <code>var fs</code>) and replace them with the following code:</p>

<pre><code>var vs = document.getElementById(&#39;vshader&#39;).textContent;
var fs = document.getElementById(&#39;fshader&#39;).textContent;</code></pre>

<p>these just grab the content of the <code>&lt;script&gt;</code> elements containing the shaders as strings. We also need to change the <code>program.vertexPosAttrib</code> line a couple of lines below to read like so:</p>

<pre><code>program.vertexPosAttrib = gl.getAttribLocation(program, &#39;aVertexPosition&#39;);</code></pre>

<p>This makes our program use the information from the shaders.</p>

<p>Now try testing your code — you should end up with an altogether more colourful rectangle, as shown in Figure 2:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/714-raw-webgl-101-part-2-a-simple-shader/figure2.png" alt="A WebGL-rendered rectangle with a colourful gradient" /></p>
<p class="caption">Figure 2: Our rectangle now has a much more exciting look to it.</p>

<h2>Offsetting the texture coordinates</h2>

<p>Now let&#39;s look at how to offset our texture coordinates. To start with, we will add a uniform to our vertex shader — this is a constant that is passed into the shader. Add the following line into the <code>vshader</code> <code>&lt;script&gt;</code> element, below the <code>varying...</code> line:</p>

<pre><code>uniform vec2 uOffset;</code></pre>

<p>Unlike the attributes, which are per vertex data, the uniform is just a constant that is passed into the program. To pass this in, let&#39;s create an offset array, just below the 2nd line of the main program (the <code>var gl</code> line):</p>

<pre><code>var offset = [1,1];</code></pre>

<p>we will add this to the texture coord of each vertex, meaning that they now go between 0 and 1, not -1 and 1. We now need to reference the location of the <code>uniform</code>, just like we already reference the attribute location with <code>Program.vertexPosAttrib</code>. Below the <code>Program.vertexPosAttrib</code> line near the bottom of the code, add the following:</p>

<pre><code>program.offsetUniform = gl.getUniformLocation(program, &#39;uOffset&#39;);</code></pre>

<p>We&#39;ll then set that uniform, using <code>uniform2f</code> — add the following line just above the <code>gl.drawArrays</code> line in the main code:</p>

<pre><code>gl.uniform2f(program.offsetUniform, offset[0], offset[1]);</code></pre>


<p>The <code>offsetUniform</code> identifies which variable from inside the shaders the values should be tied to: in this case the <code>uOffset</code>, which is a <code>vec2</code>. The last step is to add the <code>uOffset</code> to the first line inside your <code>void main()</code> function:</p>

<pre><code>vTexCoord = aVertexPosition + uOffset;</code></pre>

<p>This should now offset the gradient and give us an altogether more yellowy look, as seen in Figure 3:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/714-raw-webgl-101-part-2-a-simple-shader/figure3.png" alt="A WebGL-rendered rectangle with a colourful gradient, the texture offset for a more colourful effect" /></p>
<p class="caption">Figure 3: Offsetting the gradient texture gives us a nicer, more yellowy effect.</p>

<h2>Reusing code</h2>

<p>Now let&#39;s have a look at putting some of our reusable code into a utility file so we can make it available easily wherever we need. Take the whole of the following code chunk that generates our Quad:</p>

<pre><code>var vertexPosBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
var vertices = [-1, -1, 1, -1, -1, 1, 1, 1];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexPosBuffer.itemSize = 2;
vertexPosBuffer.numItems = 4;</code>

/*

2 ___ 3
 |\  |
 | \ |
0|__\|1

*/</pre>

<p>and put it into your <code>webgl-utils.js</code> file, at the bottom, wrapped in a function called <code>screenQuad() { ... }</code>. At the bottom of this function, return <code>vertexPosBuffer</code>, like this:</p>

<pre><code>return vertexPosBuffer;</code></pre>

<p>Where the quad generation code once sat once sat in your main code, put the following line to reference it:</p>

<pre><code>var vertexPosBuffer = screenQuad();</code></pre>

<h2>Summary</h2>

<p>That&#39;s it for now. Check back again soon for more articles.</p>

