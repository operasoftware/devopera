Title: Raw WebGL 101 — Part 4: Textures
----
Date: 2012-07-13 15:14:10
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

<p>Greetings, WebGL ninjas. The fourth tutorial is upon you, so be prepared: keep your browsers sharp and your scripts quick, and meld into the shadows, ready to strike! The striking will of course involve writing some cool WebGL, rather than infiltrating a shogun&#39;s palace, but I think that&#39;s ninja enough for us. This week we will turn our attention to importing textures from an image file into the canvas.</p>

<p>This article is a transcript of <a href="http://www.youtube.com/watch?v=me3BviH3nZc&amp;t=56m50s">time 56:50 to 1:03:20</a> in Erik Möller&#39;s <a href="http://www.youtube.com/watch?v=me3BviH3nZc">WebGL 101</a> tutorial, available on YouTube.</p>

<p class="note">Note: <a href="05-texturing.html">You can run the finished texture example</a> from this article to see what you are aiming towards.</p>

<h2>Preparing to use textures in WebGL</h2>

<p>We&#39;re going to build this example on top of the <a href="http://dev.opera.com/articles/view/raw-webgl-part2-simple-shader/">previous lesson</a>&#39;s simple shader. So take a copy of <a href="http://devfiles.myopera.com/articles/9462/03-minimal-shader.html">03 Minimal Shader</a> file and save it as 05-texturing.html.</p>
  
<p>We&#39;ll also need an image to use as texture, so copy this <a href="opera.jpg">Opera logo PNG</a> file into a place in your working directory.</p>

<p>Now we&#39;re going to remove the offset as we&#39;re not going to be using it here. To do so, first go into the vertex shader <code>&lt;script&gt;</code> element and remove the following line:</p>

<pre><code class="javascript">uniform vec2 uOffset;</code></pre>

<p>Next, remove the reference to it in the <code>vTexCoord = aVertexPosition + uOffset;</code> line below it to just leave this:</p>

<pre><code class="javascript">vTexCoord = aVertexPosition;</code></pre>

<p>And finally, back in the main script delete the offset array line:</p>

<pre><code class="javascript">var offset = [1, 1];</code></pre>

<p>and the two lines that link the offset to the program:</p>

<pre><code class="javascript">program.offsetUniform = gl.getUniformLocation(program, &#39;uOffset&#39;);</code></pre>

<p>and</p>

<pre><code class="javascript">gl.uniform2f(program.offsetUniform, offset[0], offset[1]);</code></pre>

<p>Now we&#39;re ready to start working on our texture.</p>

<h2>Creating the texture</h2>

<p>First, let&#39;s create a uniform by going into the fragment shader <code>&lt;script&gt;</code> element and putting the following line just above the <code>main()</code> function:</p>

<pre><code class="javascript">uniform sampler2D uSampler;</code></pre>

<p><code>sampler2D</code> allows to sample pixel colours from a 2D image.</p>

<p>Now inside the <code>main()</code> function of the fragment shader, we need to change the <code>gl_FragColor</code> line to call the texture lookup function <code>texture2D</code> on the sampler as we want to get the colour information from the texture:</p>

<pre><code class="javascript">gl_FragColor = texture2D(uSampler, vTexCoord);</code></pre>

<p>That&#39;s it for the fragment shader. Now we need to modify the main <code>&lt;script&gt;</code> to pull in the sample texture. So, below

<pre><code class="javascript">program.vertexPosAttrib = gl.getAttribLocation(program, &#39;aVertexPosition&#39;);</code></pre>
  
<p>add:</p>

<pre><code class="javascript">program.samplerUniform = gl.getUniformLocation(program, &#39;uSampler&#39;);</code></pre>

<p>And now, always inside the main <code>&lt;script&gt;</code>, we need to create the texture we are going to use, give it an image, and create our drawing function.

<p>So first, we&#39;ll create a new texture and store it in a variable:</p>

<pre><code class="javascript">var texture = gl.createTexture();</code></pre>

<p>Next, we create a new image variable to store our image in:</p>

<pre><code class="javascript">var img = new Image();</code></pre>

<p>and specify the location of the image:</p>

<pre><code class="javascript">img.src = &#39;textures/opera.png&#39;;</code></pre>

<h2>The drawing function</h2>

<p>Now, right above the last line you added, we&#39;ll add our drawing function, which will run when the image has finished loading. Our initial drawing function will look like this:</p>

<pre><code class="javascript">img.onload = function() {
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.uniform1i(program.samplerUniform, 0);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
}</code></pre>

<p>The first line sets <code>TEXTURE0</code> as the active texture. This line is not strictly necessary because <code>TEXTURE0</code> is the default active texture anyway, but I&#39;ve included it so you have it there if you need it for reference in the future.</p>

<p>The second line binds the texture we created earlier.</p>
  
<p> The third line, tells the shader which texture we&#39;re going to be using. WebGL can handle up to 32 textures during any given call to drawing functions (like <code>gl.drawArrays</code>), they&#39;re called TEXTURE0 to TEXTURE31. <code>1i</code> means that the uniform will accept a single integer, and that integer is set to zero because we&#39;re going to be using texture 0.</p> 

<p>The fourth line is the same you&#39;re already familiar with from our previous lesson.</p>

<p>Now we have a drawing function to play with, let&#39;s add to it.</p>

<p>Right after the second line of our drawing function, create a new line and enter the following to it:</p>

<pre><code class="javascript">gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);</code></pre>

<p>This sets how you should read the source data when it&#39;s set with <code>texImage2d</code> (on the next line). Specifically, we&#39;re flipping the Y-axis (or flipping the image around the X-axis) so the texture coordinates will have Ys that increase as you go up the screen when you use images in formats where Y-coordinates increase downwards (like the <code>.png</code> we&#39;re using here).</p>

<p>On the next line, we will actually specify our image data and parameters (using <code>texImage2d</code>). We are specifying that it&#39;s 2D and that it is using RGBA colour and each component in every pixel — r, g, b and a — is specified as un unsigned byte (ranging from 0 to 255). Finally we specify <code>img</code>, the variable where our image is stored:</p>

<pre><code class="javascript">gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)</code></pre>

<p>Finally, for this function, we want to specify some texture parameters, to use for drawing the image. Put these lines underneath the previous one:</p>

<pre><code class="javascript">gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);</code></pre>

<p class="note">Mag filter is used when you&#39;re stretching an image over a larger area than the original source image and you need to figure out what&#39;s &quot;in-between pixels&quot;. You can either linearly interpolate between the colours, or use the same value as the nearest pixel to it (resulting in more blockiness.)</p>

<p>Also, change your canvas size to something a bit bigger so you can see what is going on more clearly. I chose 900 x 900. Now try testing your code — you should be presented with something that looks like Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/722-raw-webgl-101-part-4-textures/figure1.jpg" alt="A series of Opera company logos rendered inside a canvas using WebGL" /></p>
<p class="caption">Figure 1: A series of Opera company logos rendered inside a <code>&lt;canvas&gt;</code> using WebGL.</p>

<h2>Changing the filter</h2>

<p>You&#39;ll notice that currently the rendering looks a bit pixellated, because we chose a <code>NEAREST</code> filter. To see what difference the different filters make, try using the <code>LINEAR</code> filter instead:</p>

<pre><code class="javascript">gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);</code></pre>

<p>This will give a much smoother result, as shown in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/722-raw-webgl-101-part-4-textures/figure2.jpg" alt="A series of Opera company logos rendered inside a canvas using WebGL that look smooth and not pixellated" /></p>
<p class="caption">Figure 2: The linear filter gives a much smoother result.</p>

<h2>Wrap modes</h2>

<p>Right now we are displaying four versions of the Opera logo. This is because we are currently indexing our image with values from -1 to 1, and the wrap mode is by default set to wrap content when it goes outside the range 0 to 1. So we&#39;re drawing  one &quot;O&quot; for -1 to 0 and one for 0 to 1 in each dimension.</p>
  
<p>Let&#39;s update the code to just display a single copy of the image. First, add a solid border to the canvas so it is easier to visualise where the canvas is, and what is going on:</p>

<pre><code class="html">&lt;canvas id=&#39;c&#39; width=&#39;900&#39; height=&#39;900&#39; style=&quot;border: 1px solid black;&quot;&gt;
&lt;/canvas&gt;</code></pre>

<p>Let&#39;s explore how wrap modes work. We&#39;re drawing a quad that covers the entire canvas and we&#39;re texturing it with a &quot;O&quot;. The quad coordinates range from -1 to 1 along both the x and y axes. To draw only one &quot;O&quot; you should have coordinates going from 0 to 1. If we change to clamp in one direction you&#39;ll only see two O&#39;s: the clamped axis will not draw a O in the -1 to 0 range. If you clamp both axes, you&#39;ll only see one O drawn. Add the following <code>texParameter</code> lines below the previous two:</p>

<pre><code class="javascript">gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);</code></pre>


<p class="note">S and T are the texture coordinate axes. Note that our axes start at (0,0) — the bottom left of a texture — and go to (1,1) — the top right.</p>

<p>This will give us the display shown in Figure 3.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/722-raw-webgl-101-part-4-textures/figure3.jpg" alt="A single Opera logo rendered on a canvas" /></p>
<p class="caption">Figure 3: Our four Opera logos have been reduced down to one.</p>

<h2>Summary</h2>

<p>That&#39;s it this for this week, my dear WebGL ninjas. Next time we will start ramping it up again, looking at how we can further improve our shaders with XHR.</p></p></p>
