Title: Raw WebGL 101 — Part 3: advanced shader
----
Date: 2012-07-11 16:54:05
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

<p>Welcome to part 3 of our Raw WebGL series! Now that we&#39;ve covered the real basics and built up some simple fragment and vertex shaders, let&#39;s move forward and create a much more complex fragment shader example, to give you more of a flavour of the different options available to us.</p>

<p>This article is a transcript of <a href="http://www.youtube.com/watch?v=me3BviH3nZc&amp;t=32m36s">time 32:36 to 56.50</a> in Erik Möller&#39;s <a href="http://www.youtube.com/watch?v=me3BviH3nZc">WebGL 101</a> tutorial, available on YouTube.</p>

<h2>Ramping up our fragment shader power!</h2>

<p class="note">You can see the final result of this article in <a href="04-fragment-shader.html">04-fragment-shader.html</a>. To follow the step by step tutorial below, download <a href="03-minimal-shader.html">03-minimal-shader.html</a> and use it as a starting point.</p>

<p>First of all, change the size of the canvas to 900 x 900 pixels:</p>

<pre><code class="html">&lt;canvas id=&#39;c&#39; width=&#39;900&#39; height=&#39;900&#39;&gt;&lt;/canvas&gt;</code></pre>

<h3>Modifying the vertex shader</h3>

<p>Now we&#39;ll try another way of getting our texture coordinates into the fragment shader. Delete the <code>varying</code> and <code>uniform</code> lines from the vertex shader <code>&lt;script&gt;</code> element:</p>

<pre><code class="javascript">varying vec2 vTexCoord;
uniform vec2 uOffset;</code></pre>

<p>Also delete the line that references these two:</p>

<pre><code class="javascript">vTexCoord = aVertexPosition + uOffset;</code></pre>

<p>This will leave us with a minimal vertex shader.</p>

<p>We will now use a new built-in construct called <code>gl_FragCoord</code>, which gives us the pixel position of the current fragment. First add the following line inside the fragment shader&#39;s main function to calculate the coordinates of the vertices:</p>

<pre><code class="javascript">vec2 texCoord = (gl_FragCoord.xy / uCanvasSize.xy) * 2.0 - vec2(1.0,1.0);</code></pre>

<p>This will give us the same as we had before, but without the offsets we added in the last part of the series. We also need to change the reference to this in the line below:</p>

<pre><code class="javascript">gl_FragColor = vec4(texCoord, 0, 1);</code></pre>

<p>We don&#39;t need the line that brings the texture coordinate data into the fragment shader, so delete the following line from there:</p>

<pre><code class="javascript">varying vec2 vTexCoord;</code></pre>

<p>We&#39;ll replace this with a new constant — add the following <code>uniform</code> in place of the line you just deleted, to convert between pixel position and the <code>texCoord</code> that we want (the -1 to 1 value):</p>

<pre><code class="javascript">uniform vec2 uCanvasSize;</code></pre>

<p>Moving back down to the main <code>&lt;script&gt;</code> element, we now need to start making changes to this part of the code to use the new shaders we are creating. First of all, delete the <code>offset</code> line:</p>

<pre><code class="javascript">var offset = [1,1];</code></pre>

<p>Now go down to the <code>offsetUniform</code> line — we need to change these references to use the new shader uniform system. First change <code>program.offsetUniform</code> to <code>program.canvasSizeUniform</code>, then change <code>uOffset</code> to <code>uCanvasSize</code>. You will end up with the following line:</p>

<pre><code class="javascript">program.canvasSizeUniform = gl.getUniformLocation(program, &#39;uCanvasSize&#39;);</code></pre>

<p>Next, onto the line where we specify the values for our uniforms. We need to change our references, like so:</p>

<pre><code class="javascript">gl.uniform2f(program.canvasSizeUniform, c.width, c.height);</code></pre>

<p>Here we have referenced our new uniform, and replaced the offset values with simple references to the <code>&lt;canvas&gt;</code> width and height. Checking the example as it stands, you&#39;ll see that we have basically got back to where we started, but using the built-in <code>gl_FragCoord</code> instead of passing the texture coordinates from the vertex shader; see Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/720-raw-webgl-101-part-3-advanced-shader/figure1.png" alt="A canvas generated gradient going from green at the top left to red at the bottom right, with a large black square at the bottom left" /></p>
<p class="caption">Figure 1: Our new shader is functional.</p>

<h3>Preparing our fragment shader</h3>

<p>Now let&#39;s prepare our fragment shader to take more detailed information. For this detailed shader, we want to use high precision floats. The problem with this is that lower powered devices may not be able to handle high precision, therefore we will want to detect what type of device is accessing our example, and use high precision or medium precision, depending on its capabilities. We will do this with an <code>#ifdef</code> construct, like so:</p>

<pre><code class="javascript">#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif</code></pre>

<p>This is saying &quot;if high precision is available, use highp floats, otherwise use mediump.&quot; Put this block at the top of your fragment shader script element, right below the opening <code>&lt;script&gt;</code> tag.</p>

<p>In this example, we are also going to be using an integer for the first time, which we will set as medium precision. therefore, change the existing <code>precision mediump float;</code> line that was already there to</p>

<pre><code class="javascript">precision mediump int;</code></pre>

<p>Now we will add some code to calculate the colour of every single pixel in our creation — staying inside the same <code>&lt;script&gt;</code> block, add the following function just below the <code>uniform vec2 uCanvasSize;</code> line:</p>

<pre><code class="javascript">vec4 calc(vec2 texCoord) {
  return vec4 (texCoord, 0, 1);
}</code></pre>

<p>Below, in the <code>main()</code> function, we also need to change the <code>gl_FragColor</code> line to use the new function:</p>

<pre><code class="javascript">gl_FragColor = calc(texCoord);</code></pre>

<p>If you save and refresh your browser, you should see the same as before. Nothing more exciting yet, but we have now made our shader a lot more flexible and able to handle more detail.</p>

<h3>Turning it up to 11</h3>

<p>With our preparation done, now let&#39;s have some fun! We&#39;ll ramp up the <code>calc()</code> function we just created to produce something far more interesting. First of all, add the following variables at the top of the <code>calc()</code> function:</p>

<pre><code class="javascript">float x = 0.0;
float y = 0.0;</code></pre>

<p>Now we&#39;ll add an iteration loop to iteratively calculate a score value for each pixel. First, add the skeleton loop structure, below our variables:</p>

<pre><code class="javascript">for(int iteration = 0; iteration &lt; 100; ++iteration) {

}</code></pre>

<p>We&#39;ll now do some calculations. First of all, let&#39;s calculate a temporary x value, which looks like this (add this inside the loop):</p>

<pre><code class="javascript">float xtemp = x*x - y*y+texCoord.x;</code></pre>

<p>now let&#39;s calculate a <code>y</code> value — add this line just below the last:</p>

<pre><code class="javascript">y = 2.0+x*y+texCoord.y;</code></pre>

<p>Now set <code>x</code> to <code>xtemp</code> (again, just below the last one):</p>

<pre><code class="javascript">x = xtemp;</code></pre>

<p>Now for an <code>if</code> statement — add this construct next:</p>

<pre><code class="javascript">if(x*x+y*y &gt;= 8.0) {
  float d = float(iteration)/20.0;
  return vec4(d,d,d,1);
}</code></pre>

<p>Here we are saying that if the result of the calculations is less than 8, we keep iterating. So we iterate either until the result is &gt; 8 in which case we use the iteration count to colour the pixel, or until we iterate through all 100 iterations without ever going over 8, in which case we return a black color. Change the existing <code>return</code> line at the bottom of the <code>calc()</code> function to the following:</p>

<pre><code class="javascript">return vec4(0,0,0,1);</code></pre>

<p>Now let&#39;s try it out in the browser and see what happened. If you made all the updates correctly, you should be presented with a rather nice fractal, as seen in Figure 2!</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/720-raw-webgl-101-part-3-advanced-shader/figure2.png" alt="A canvas generated fractal" /></p>
<p class="caption">Figure 2: We have generated a rather nice fractal.</p>

<h3>Continuous colouring</h3>

<p>What we have got so far is quite nice, but the background is rather banded: it would be nice to have things looking a bit smoother. To do this, we will use a continuous colour mandelbrot algorithm. First of all, we need to plug the algorithm into our calculation of that <code>d</code> variable. Replace the <code>float d</code> line with the following:</p>

<pre><code class="javascript">float d = (float(iteration) - (log(log(sqrt(x*x+y*y))) / log(2.0))) / 50.0;</code></pre>

<p>This will be a bit slow and can be optimized later on, but it&#39;s ok for now as a proof of concept. Save and reload, and you&#39;ll now see that the colouring is a lot smoother, as seen in Figure 3.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/720-raw-webgl-101-part-3-advanced-shader/figure3.png" alt="A canvas generated fractal with smoother colouring in the background" /></p>
<p class="caption">Figure 3: The background colour is now a smooth gradient!.</p>

<h3>Further colour improvements</h3>

<p>The smooth version looks a lot better, but it is still a bit dark and not very colourful. Let&#39;s improve things further by blending in more properties of the fractal into the final colour. Set the following two variables below the other two variables we set earlier inside <code>calc()</code>:</p>

<pre><code class="javascript">float v = 10000.0;
float j = 10000.0;</code></pre>

<p>Inside the loop, we will now set <code>v</code> and <code>j</code> to be the minimum absolute value of <code>x</code> squared times <code>y</code> squared, and the minimum absolute value of <code>x</code> times <code>y</code>, respectively. Add the following in, below the <code>x = xtemp;</code> line:</p>

<pre><code class="javascript">v = min(v, abs(x*x+y*y));
j = min(j, abs(x*y));</code></pre>

<p>We&#39;ll use these values to colour our fractal background a bit more interestingly; add these into the return value, like so:</p>

<pre><code class="javascript">return vec4(d+j,d,d+v,1);</code></pre>

<p>This will give us the much more colourful look seen in Figure 4.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/720-raw-webgl-101-part-3-advanced-shader/figure4.png" alt="A canvas generated fractal with a beautiful coloured background gradient" /></p>
<p class="caption">Figure 4: This is much prettier.</p>

<p>Let&#39;s just fiddle with the colour values a bit more to see what we can get. Go back to the <code>calc()</code> function, and just above the <code>return</code> line, add the following so that we&#39;ll actually end up inverting the values, and dividing them by 2.0:</p>

<pre><code class="javascript">v = (1.0 - v) / 2.0;
j = (1.0 - j) / 2.0;</code></pre>

<p>See Figure 5 for the rather halo-like result!</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/720-raw-webgl-101-part-3-advanced-shader/figure5.png" alt="A canvas generated fractal with inverted colours" /></p>
<p class="caption">Figure 5: Inverted colours give our fractal a halo-type effect.</p>

<h3>Offsetting and scaling our fractal</h3>

<p>We&#39;ve got a pretty pleasing result so far, but let&#39;s just tweak it a little bit more before we have a well-earned beer. As it stands, we can&#39;t see all of the halo at once, so let&#39;s offset and scale our fractal so we can see it a bit better.</p>

<p>To get this plan into action, let&#39;s start by adding a couple of variables to represent our offset and scale. Add the following two lines below our <code>uniform vec2 uCanvasSize;</code> line:</p>

<pre><code class="javascript">uniform vec2 uOffset;
uniform float uScale;</code></pre>

<p>Dipping down into the main <code>&lt;script&gt;</code> element now, let&#39;s make the program aware of these values and feed them in. Add the following below your <code>program.canvasSizeUniform</code> line:</p>

<pre><code class="javascript">program.offsetUniform = gl.getUniformLocation(program, &#39;uOffset&#39;);
program.scaleUniform = gl.getUniformLocation(program, &#39;uScale&#39;);</code></pre>

<p>Now we need to give these some values to use — add the following array above your <code>var vertexPosBuffer = screenQuad();</code> line:</p>

<pre><code class="javascript">var offset = [-0.5, 0];
var scale = 1.35;</code></pre>

<p>Now we&#39;ll set the offset for the program. Near the bottom of your code, just after your <code>uniform2f</code> line, we&#39;ll add in another one for the offset:</p>

<pre><code class="javascript">gl.uniform2f(program.offsetUniform, offset[0], offset[1]);</code></pre>

<p>Then directly afterwards, add the following for scale (this uses <code>uniform1f</code> instead, as it is only setting a single float value):</p>

<pre><code class="javascript">gl.uniform1f(program.scaleUniform, scale);</code></pre>

<p>We&#39;re almost there now! Now we just need to modify the <code>main()</code> function back up in the fragment shader to apply the scale and offset to each pixel. Add the following just below the <code>main()</code> function&#39;s <code>vec2 texCoord</code> line:</p>

<pre><code class="javascript">texCoord = texCoord * uScale + uOffset;</code></pre>

<p class="note">Note: You should now be able to see your fractal much better on your screen. If you wanted to improve this for better viewing on different devices, you could also consider using media queries to change the canvas size when appropriate, and viewport, to make mobile devices respect those media queries better. See <a href="http://dev.opera.com/articles/view/love-your-devices-adaptive-web-design-with-media-queries-viewport-and-more/">Love your devices: adaptive web design with media queries, viewport and more</a> for more details.</p>

<h3>Moving and zooming the fractal</h3>

<p>The design is looking great, but how about adding in some control functionality to move around the fractal, and zoom in and out? To achieve this, we&#39;ll draw the fractal several times, once for each time it is moved and zoomed. To give our code the flexibility to do this, wrap the bottom four lines of code in our main code in a function called <code>draw()</code>, like so:</p>

<pre><code class="javascript">function draw() {
  gl.uniform2f(program.canvasSizeUniform, c.width, c.height);
  gl.uniform2f(program.offsetUniform, offset[0], offset[1]);
  gl.uniform1f(program.scaleUniform, scale);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
}

draw();</code></pre>

<p>We want to call this function each time the fractal is to be drawn, and allow the user to control the scaling and zooming via the keyboard. Add the following just below the line where we set our <code>offset</code> and <code>scale</code> variable values:</p>

<pre><code class="javascript">var actions = [];
var keyMappings = { &#39;37&#39; : &#39;panleft&#39;, &#39;38&#39; : &#39;panup&#39;, &#39;39&#39; : &#39;panright&#39;, &#39;40&#39; : &#39;pandown&#39;, &#39;90&#39; : &#39;zoomin&#39;, &#39;88&#39; : &#39;zoomout&#39; };</code></pre>

<p class="note">Note: The key codes map to the arrow keys and the minus and plus buttons. You might find that these key mappings don&#39;t behave quite as expected on some browsers or operating systems, as keycodes tend to differ across different implementations. One fix might be to ask the user to choose their keyboard controls when the demo loads, but we&#39;ll leave that for now!</p>

<p>Now we&#39;ll initialise all the keymappings as <code>false</code>:</p>

<pre><code class="javascript">for (var k in keyMappings) {
  actions[keyMappings[k]] = false;
}</code></pre>

<p>With the actions initialised, we now need to add in some event handlers to listen out for keys being pressed and released and then react accordingly. First, the key press:</p>

<pre><code class="javascript">window.onkeydown = function(e) {
  var kc = e.keyCode.toString();
  if (keyMappings.hasOwnProperty(kc)) {
    actions[keyMappings[kc]] = true;
  }
};</code></pre>

<p>Here we are getting the code of the key that was pressed and storing it in a string. If this key code appears in the <code>keyMappings</code> object, we set the action to <code>true</code>. For the corresponding key release, we just copy the function, set the handler to <code>onkeyup</code>, and reverse the functionality (what goes down, must go up):</p>

<pre><code class="javascript">window.onkeyup = function(e) {
  var kc = e.keyCode.toString();
  if (keyMappings.hasOwnProperty(kc)) {
    actions[keyMappings[kc]] = false;
  }
};</code></pre>

<p>But there&#39;s more. We want to keep redrawing as long as an action is active. To do this we&#39;ll use an interval — initialise an interval variable near the top of your main code, where you initialised the others:</p>

<pre><code class="javascript">var iv = null;</code></pre>

<p>Going back to the <code>onkeydown</code> function, we need to add the following inside the <code>if</code> block, below the line that is already there:</p>

<pre><code class="javascript">if (!iv) {
  iv = setInterval(&#39;draw();&#39;, 16);
}</code></pre>

<p>Here were are saying that if an interval is not already set, we will set an interval — we are calling the <code>draw()</code> function every 16 milliseconds while an action is active.</p>

<p>Now on to the <code>onkeyup</code> handler: in this case we need to add the following to the bottom of the function, just before the closing curly brace:</p>

<pre><code class="javascript">for (var j in keyMappings) {
  if (actions[keyMappings[j]]) {
    return;
  }
}
clearInterval(iv);
iv = null;</code></pre>

<p>This code loops through the different actions and checks to see if any are active. If so, we clear the interval to stop drawing, and set the <code>iv</code> variable back to null.</p>

<p>As a last step, we need to add the following lines into the top of the <code>draw()</code> function, to update the offset and zoom with each call of the function:</p>

<pre><code class="javascript">offset[0] += -(actions.panleft ? scale / 25 : 0) + (actions.panright ? scale / 25 : 0);
offset[1] += -(actions.pandown ? scale / 25 : 0) + (actions.panup ? scale / 25 : 0);
scale = scale * (actions.zoomin ? 0.975 : 1.0) / (actions.zoomout ? 0.975 : 1.0);</code></pre>

<p>Now we&#39;re done — reload the example and try zooming in and out, and panning around the fractal. This looks really cool now, I&#39;m sure you&#39;ll agree! Eventually when you zoom in really far, the fractal will start to look really blocky. The reason this is happening is that we&#39;re looking at a very small piece of the fractal and we&#39;re simply running out of precision: the graphics card cannot represent such small numbers precisely. We remedied this to some extent by using high precision floats, but eventually as you zoom in even those will not have enough precision.</p>

<h2>Summary</h2>

<p>We hope you&#39;ve had fun in this tutorial! Try experimenting with all the different colour variables, and post links to your modifications in the comments. We are looking forward to seeing what you will achieve!</p>code
