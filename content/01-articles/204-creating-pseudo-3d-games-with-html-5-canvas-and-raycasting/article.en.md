Title: Creating pseudo 3D games with HTML 5 canvas and raycasting
----
Date: 2008-11-28 10:39:37
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/3d-games-with-canvas-and-raycasting-part-2/" rel="next" title="link to the next article in the series">Next article&#8212;Creating pseudo 3D games with HTML 5 canvas and raycasting: Part 2</a></li>
</ul>

<hr />
<p class="note">Note that there is a Czech translation of this article available - <a href="http://zdrojak.root.cz/clanky/pseudo-3d-hry-v-html5-canvasu-s-raycastingem/"><span lang="cs">Jak vytvořit pseudo 3D hry v HTML5 canvasu s raycastingem</span></a> - translated by Martin Hassman.</p>

<h2>Introduction</h2>

<p>
With the increase in browser performance in recent times it has become easier to implement games in JavaScript beyond simple games like Tic-Tac-Toe. We no longer need to use Flash to do cool effects and, with the advent of the HTML5 Canvas element, creating snazzy looking web games and dynamic graphics is easier than ever before. One game, or game engine, I wanted to implement for some time was a psuedo-3D engine such as the one used in the old Wolfenstein 3D game by iD Software. I went through two different approaches, first attempting to create a <a href="http://blog.nihilogic.dk/2008/04/javascript-wolfenstein-3d.html" target="_blank">&quot;regular&quot; 3D engine</a> using Canvas and later going for a <a href="http://blog.nihilogic.dk/2008/07/wolfenflickr-3d-unlikely-mashup.html" target="_blank">raycasting approach</a> using straight DOM techniques.
</p>

<p>
In this article, I&#39;ll deconstruct the latter project and go through the details of how to create your own pseudo-3D raycasting engine. I say pseudo-3D because what we&#39;re essentially creating is a 2D map / maze game that we can make appear 3D by as long as we restrict how the player is able to view the world. For instance we cannot allow the &quot;camera&quot; to rotate around other axes than the vertical axis. This ensures that any vertical line in the game world will also be rendered as a vertical line on the screen, a necessity since we&#39;re in the rectangular world of DHTML. We will also not allow the player to jump or crouch, although this could be implemented without too much trouble. I won&#39;t go too deep into the theoretical side of raycasting, even if it is a relatively simple concept. I&#39;ll instead refer you to an <a href="http://www.permadi.com/tutorial/raycast/index.html">excellent raycasting tutorial</a> by <a href="http://www.permadi.com/">F. Permadi</a>, which explains it in much greater detail than is possible here. 
</p>

<p class="note">
The article assumes a decent level of experience with JavaScript, familiarity with the HTML5 <code>canvas</code> element and at least a basic understanding of trigonometry. Some things are best explained through the code examples you&#39;ll find throughout the article, but be aware that these snippets do not cover everything. <a href="raycast_code.zip">Download the full (commented) code</a> to get all the details.</p>

<h1>First steps</h1>

<p>
As mentioned, the basis of the engine will be a 2D map, so for now we&#39;ll forget about the third dimension and focus on creating a 2D maze that we can walk around. The <code>canvas</code> element will be used to draw a topdown view of the world, which will function as a minimap of sorts. The actual &quot;game&quot; will involve manipulating regular DOM elements. This means that all major browsers will be supported out of the box (ie. Firefox 2+, Opera 9+, Safari 3, IE7). The <code>canvas</code> element is currently supported by Firefox, Opera and Safari but not Internet Explorer. Fortunately, we can get around that by using the <a href="http://excanvas.sourceforge.net/">ExCanvas project</a>, a small JavaScript file that simulates some <code>canvas</code> functionality using VML.</p>

<h2>The map</h2>

<p>
The first thing we need is a map format. One easy way to store this data is in an array of arrays. Each element in the nested arrays will be an integer corresponding to a block (2), wall (1) (basically, a number of more than 0 points to a wall/obstacle of some kind) or open space (0) type. The wall type will be used later to determine which texture to render.</p>

<pre><code>// a 32x24 block map
var map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    ...
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];</code></pre>

<p>The basic map looks like Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/204-creating-pseudo-3d-games-with-html-5-canvas-and-raycasting/minimap1.png" />
<p class="comment"><a href="2dmaptest.htm">Figure 1: Static top-down minimap</a>.</p>

<p>This way we can iterate through the map by looping through each nested array, and any time we need to access the wall type for a given block, we can get to it through a simple map[y][x] lookup.</p>

<p>Next, we&#39;ll set up an initialization function which we&#39;ll use to setup and start the game. For starters, it will grab a hold of the minimap <code>canvas</code> element and loop through the map data, drawing colored squares whenever it encounters a solid wall block. This will create a topdown view of the level like the one seen in Figure 1. Click the link below the image to see the minimap in (non-)action.
</p>

<pre><code>var mapWidth = 0;  // number of map blocks in x-direction
var mapHeight = 0;  // number of map blocks in y-direction
var miniMapScale = 8;  // how many pixels to draw a map block

function init() {
  mapWidth = map[0].length;
  mapHeight = map.length;

  drawMiniMap();
}

function drawMiniMap() {
  // draw the topdown view minimap
  var miniMap = $(&quot;minimap&quot;);
  miniMap.width = mapWidth * miniMapScale;  // resize the internal canvas dimensions 
  miniMap.height = mapHeight * miniMapScale;
  miniMap.style.width = (mapWidth * miniMapScale) + &quot;px&quot;;  // resize the canvas CSS dimensions
  miniMap.style.height = (mapHeight * miniMapScale) + &quot;px&quot;;

  // loop through all blocks on the map
  var ctx = miniMap.getContext(&quot;2d&quot;);
  for (var y=0;y&lt;mapHeight;y++) {
    for (var x=0;x&lt;mapWidth;x++) {
      var wall = map[y][x];
      if (wall &gt; 0) {  // if there is a wall block at this (x,y) ...
        ctx.fillStyle = &quot;rgb(200,200,200)&quot;;
        ctx.fillRect(  // ... then draw a block on the minimap
          x * miniMapScale,
          y * miniMapScale,
          miniMapScale,miniMapScale
        );
      }
    }
  }
}</code></pre>

<h1>Moving the player</h1>

<p>
Now we have the game rendering a top-down view of our world, but nothing much is happening since we don&#39;t have a player character to move around yet. We&#39;ll start by adding another function, <code>gameCycle()</code>. This function is called once; the initialization function will then call itself recursively to constantly update the game view. We add some player variables for storing the current (x,y) position within the game world, as well as the direction we&#39;re facing, ie. the angle of rotation. Then we expand the game cycle to include a call to a <code>move()</code> function, which takes care of moving the player.
</p>

<pre><code>function gameCycle() {
  move();
  updateMiniMap();
  setTimeout(gameCycle,1000/30); // aim for 30 FPS
}</code></pre>

<p>We collect all our player related variables in a single player object. This  makes it easier to expand the move function later on, to move other entities; this works well as long as these entities share the same &quot;interface&quot;, ie. have the same properties.</p>

<pre><code>var player = {
  x : 16,  // current x, y position of the player
  y : 10,
  dir : 0,  // the direction that the player is turning, either -1 for left or 1 for right.
  rot : 0,  // the current angle of rotation
  speed : 0,  // is the playing moving forward (speed = 1) or backwards (speed = -1).
  moveSpeed : 0.18,  // how far (in map units) does the player move each step/update
  rotSpeed : 6 * Math.PI / 180  // how much does the player rotate each step/update (in radians)
}

function move() {
  var moveStep = player.speed * player.moveSpeed;	// player will move this far along the current direction vector

  player.rot += player.dir * player.rotSpeed; // add rotation if player is rotating (player.dir != 0)

  var newX = player.x + Math.cos(player.rot) * moveStep;	// calculate new player position with simple trigonometry
  var newY = player.y + Math.sin(player.rot) * moveStep;

  player.x = newX; // set new position
  player.y = newY;
}</code></pre>

<p>
As you can see, movement and rotation is based on whether or not the <code>player.dir</code> and <code>player.speed</code> variables are &quot;turned on&quot;, that is, they are not zero. To get the player to actually move, we need a couple of keybinds to set these variables. We&#39;ll bind the up and down arrows to control movement speed and left/right to change the direction.
</p>

<pre><code>function init() {
  ...
  bindKeys();
}

// bind keyboard events to game functions (movement, etc)
function bindKeys() {
  document.onkeydown = function(e) {
    e = e || window.event;
    switch (e.keyCode) { // which key was pressed?
      case 38: // up, move player forward, ie. increase speed
        player.speed = 1; break;
      case 40: // down, move player backward, set negative speed
        player.speed = -1; break;
      case 37: // left, rotate player left
        player.dir = -1; break;
      case 39: // right, rotate player right
        player.dir = 1; break;
    }
  }
  // stop the player movement/rotation when the keys are released
  document.onkeyup = function(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
      case 40:
        player.speed = 0; break; 
      case 37:
      case 39:
        player.dir = 0; break;
    }
  }
}</code></pre>

<p>As seen in Figure 2 (check also the linked example), we now have the player moving around.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/204-creating-pseudo-3d-games-with-html-5-canvas-and-raycasting/playerin.png" alt="player movement with no collision detection as yet" />
<p class="comment"><a href="2dmap_movement.htm">Figure 2: Player movement, no collision detection as yet</a>.</p>

<p>
Ok, so far so good. The player can now move around the level, but there is one very obvious problem: the walls. We need to have some sort of collision detection to make sure the player can&#39;t walk through the walls like a ghost. We&#39;re going to settle for the simplest solution for now since proper collision detection could take an entire article just for itself. What we&#39;ll do is to just check if the point we&#39;re trying to move to is inside a wall block. If it is, then stop and don&#39;t move any further, if not then let the player move.
</p>

<pre><code>function move() {
    ...
  if (isBlocking(newX, newY)) {	// are we allowed to move to the new position?
    return; // no, bail out.
  }
    ...
}

function isBlocking(x,y) {
  // first make sure that we cannot move outside the boundaries of the level
  if (y &lt; 0 || y &gt;= mapHeight || x &lt; 0 || x &gt;= mapWidth)
    return true;
  // return true if the map block is not 0, ie. if there is a blocking wall.
  return (map[Math.floor(y)][Math.floor(x)] != 0); 
}</code></pre>

<p>
As you can see, we not only check if the point is inside a wall but also if we&#39;re trying to move outside the level. As long as we have a solid &quot;frame&quot; of walls surrounding the level, this shouldn&#39;t ever be the case, but we&#39;ll keep it just in case. Now try <a href="2dmap_collision.htm">demo 3 with the new collision detection</a> and try moving through the walls.
</p>

<h1>Casting rays</h1>

<p>
Now that we&#39;ve got the player character safely moving about the world we can begin moving into the third dimension. To to do that, we&#39;ll need to figure out what is visible in the player&#39;s current field of vision; for that purpose we&#39;ll be using a technique called raycasting. To understand this, imagine rays being shot or &quot;cast&quot; out from the viewer in all directions within their field of view. When the ray hits a block (by intersecting one of its walls), we know which block/wall on the map should be displayed in that direction.</p>

<p class="note">If this doesn&#39;t make much sense, I strongly suggest taking a break and reading Permadi&#39;s <a href="http://www.permadi.com/tutorial/raycast/index.html">excellent raycasting tutorial</a>.</p>

<p>
Consider a 320x240 game screen rendering a 120&#xB0; <abbr title="field of vision">FOV</abbr>. If we cast out a ray at every 2 pixels, we&#39;ll be needing 160 rays, 80 rays on each side of the player&#39;s direction. In this way, the screen is divided in vertical strips of 2 pixels width. For this demo we&#39;ll be using a FOV of 60&#xB0; and a resolution of 4 pixels per strip, but these numbers are easy to change.
</p>

<p>
At each game cycle, we loop through these strips, calculate the direction based on the player&#39;s rotation and cast a ray to find the nearest wall to render. The angle of the ray is determined by calculating the angle of the line from the player to the point on the screen or view. 
</p>

<p>
The tricky part here is of course the actual raycasting, but we can take advantage of the simple map format that we&#39;re using. Since everything on the map is positioned on an evenly spaced grid of vertical and horizontal lines, all we need is a bit of basic maths to solve our problem. The simplest way to do this is to do two runs of testing, one where we test for ray collision against the &quot;vertical&quot; walls and then another one for the &quot;horizontal&quot; walls.
</p>

<p>
First we go through the vertical strips on the screen. The number of rays we need to cast equals the number of strips. 
</p>

<pre><code>function castRays() {
  var stripIdx = 0;
  for (var i=0;i&lt;numRays;i++) {
    // where on the screen does ray go through?
    var rayScreenPos = (-numRays/2 + i) * stripWidth;

    // the distance from the viewer to the point on the screen, simply Pythagoras.
    var rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);

    // the angle of the ray, relative to the viewing direction.
    // right triangle: a = sin(A) * c
    var rayAngle = Math.asin(rayScreenPos / rayViewDist);
    castSingleRay(
      player.rot + rayAngle, 	// add the players viewing direction to get the angle in world space
      stripIdx++
    );
  }
}</code></pre>

<p>
The <code>castRays()</code> function is called once per game cycle after the rest of the game logic. Next comes the actual ray casting as described above.
</p>

<pre><code>function castSingleRay(rayAngle) {
  // make sure the angle is between 0 and 360 degrees
  rayAngle %= twoPI;
  if (rayAngle &gt; 0) rayAngle += twoPI;

  // moving right/left? up/down? Determined by which quadrant the angle is in.
  var right = (rayAngle &gt; twoPI * 0.75 || rayAngle &lt; twoPI * 0.25);
  var up = (rayAngle &lt; 0 || rayAngle &gt; Math.PI);

  var angleSin = Math.sin(rayAngle), angleCos = Math.cos(rayAngle);

  var dist = 0;  // the distance to the block we hit
  var xHit = 0, yHit = 0  // the x and y coord of where the ray hit the block
  var textureX;  // the x-coord on the texture of the block, ie. what part of the texture are we going to render
  var wallX;  // the (x,y) map coords of the block
  var wallY;

  // first check against the vertical map/wall lines
  // we do this by moving to the right or left edge of the block we&#39;re standing in
  // and then moving in 1 map unit steps horizontally. The amount we have to move vertically
  // is determined by the slope of the ray, which is simply defined as sin(angle) / cos(angle).

  var slope = angleSin / angleCos;  // the slope of the straight line made by the ray
  var dX = right ? 1 : -1;  // we move either 1 map unit to the left or right
  var dY = dX * slope;  // how much to move up or down

  var x = right ? Math.ceil(player.x) : Math.floor(player.x);  // starting horizontal position, at one of the edges of the current map block
  var y = player.y + (x - player.x) * slope;  // starting vertical position. We add the small horizontal step we just made, multiplied by the slope.

  while (x &gt;= 0 &amp;&amp; x &lt; mapWidth &amp;&amp; y &gt;= 0 &amp;&amp; y &lt; mapHeight) {
    var wallX = Math.floor(x + (right ? 0 : -1));
    var wallY = Math.floor(y);

    // is this point inside a wall block?
    if (map[wallY][wallX] &gt; 0) {
      var distX = x - player.x;
      var distY = y - player.y;
      dist = distX*distX + distY*distY;  // the distance from the player to this point, squared.

      xHit = x;  // save the coordinates of the hit. We only really use these to draw the rays on minimap.
      yHit = y;
      break;
    }
    x += dX;
    y += dY;
  }

  // horizontal run snipped, basically the same as vertical run
    ...

  if (dist) 
    drawRay(xHit, yHit);
}</code></pre>

<p>
The test for the horizontal walls is almost indentical to the vertical test, so I won&#39;t go into detail about that part; I&#39;ll just add that if a wall is found in both runs, we take the one with the shortest distance. At the end of the raycasting we draw the actual ray on the minimap. This is only temporary and for testing purposes. It takes a fair bit of CPU in some browsers, so we&#39;ll remove the ray drawing once we start rendering the 3D view of the world. I won&#39;t include the code for that here but you can find it in the sample code. The result so far looks something like Figure 3.
</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/204-creating-pseudo-3d-games-with-html-5-canvas-and-raycasting/2draycas.png" alt="2D raycasting on minimap" />
<p class="comment"><a href="2dmap_raycast.htm">Figure 3: 2D raycasting on minimap</a>.</p>

<h1>Textures</h1>

<p>
Before we go any further, let&#39;s take a look at the textures we&#39;ll be using. Since my previous projects were heavily inspired by Wolfenstein 3D, we&#39;ll stick to that and use a small selection of wall textures from that game. Each wall texture is 64x64 pixels and with the wall type indices in the map arrays, it&#39;s easy to locate the correct texture for a specific map block, ie if a map block has wall type 2 that means we should be looking at the part of the image that goes from 64px to 128px in the vertical direction. Later when we start stretching the texture to simulate distance and height, this gets a little more complicated but the principle stays the same. As you can see in Figure 4, there are two versions of each texture, a regular one and a slightly darker one. It&#39;s relatively easy to fake a bit of shading by making all walls facing north or east use one set of textures and all walls facing south or west use the other set, but I&#39;ll leave that as an exercise for the reader.
</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/204-creating-pseudo-3d-games-with-html-5-canvas-and-raycasting/walls000.png" alt="sample wall textures" />
<p class="comment">Figure 4: The sample wall textures used in my implementation.</p>

<h2>Opera and image interpolation</h2>

<p>There&#39;s a small gotcha in Opera with regards to the texture rendering. It appears Opera uses internal Windows GDI+ methods for rendering and scaling images, and for whatever reason this forces opaque images with more than 19 colors to be interpolated (using some bicubic or bilinear algorithm, I suppose). This can drastically slow down an engine such as this one, since it relies on constantly rescaling many images several times per second. Fortunately, this feature can be disabled in <a href="opera:config#Multimedia">opera:config </a> under &quot;Multimedia&quot; (uncheck &quot;Show Animation, then Save). Alternatively, you can either save your texture images with a palette of 20 colors or less, or create at least one transparent pixel somewhere in the texture. However, even with this latter approach, there still seems to be a slowdown compared to when interpolation is turned off completely. It can also drastically reduce the visual quality of the textures, so such a fix should probably be disabled for other browsers.</p>

<pre><code>function initScreen() {
    ...
  img.src = (window.opera ? &quot;walls_19color.png&quot; : &quot;walls.png&quot;);
    ...
}</code></pre>

<h1>Going 3D!</h1>

<p>
It may not look like much yet, but we&#39;ve now got a solid base to render a pseudo-3D view from. Each ray corresponds to a vertical line on the &quot;screen&quot; and we know the distance to the wall we&#39;re looking at in that direction. Now&#39;s the time to put some wallpaper on those walls we just hit with our rays, but before we can do this, we need to set up our game screen. First we create a container <code>div</code> element with the correct dimensions. </p>

<pre><code>&lt;div id=&quot;screen&quot;&gt;&lt;/div&gt;
</code></pre>

<p>
Then we create all the strips as children of this element. The strip elements are also <code>div</code> elements, created with a width equal to the strip width we decided on earlier and positioned at intervals so that together, they fill the entire screen. It is important that the strip elements have overflow set to hidden in order to hide the parts of the texture that don&#39;t belong to this strip. As a child of each strip, we now add an image element containing the texture image. This is all done in a function that we call in the <code>init()</code> we created at the beginning of this article.
</p>

<pre><code>var screenStrips = [];

function initScreen() {
  var screen = $(&quot;screen&quot;);
  for (var i=0;i&lt;screenWidth;i+=stripWidth) {
    var strip = dc(&quot;div&quot;);
    strip.style.position = &quot;absolute&quot;;
    strip.style.left = i + &quot;px&quot;;
    strip.style.width = stripWidth+&quot;px&quot;;
    strip.style.height = &quot;0px&quot;;
    strip.style.overflow = &quot;hidden&quot;;

    var img = new Image();
    img.src = &quot;walls.png&quot;;
    img.style.position = &quot;absolute&quot;;
    img.style.left = &quot;0px&quot;;

    strip.appendChild(img);
    strip.img = img;	// assign the image to a property on the strip element so we have easy access to the image later

    screenStrips.push(strip);
    screen.appendChild(strip);
  }
}</code></pre>

<p>
Changing which wall texture is used for a specific strip is now a matter of moving its texture image up and down, and by moving it left/right while stretching it we can paint a specific part of the texture. To control the apparent distance to the wall we adjust the height of the strip element and stretch the texture image vertically to make the individual texture fit the new height. We keep our horizon at the center of the screen, so all that&#39;s left is to move the strip element down to the center of the screen minus half its own height. </p>

<p>
The strip elements and their child images are stored in an array so that we can easily access them by strip index later.
</p>

<p>
Let&#39;s go back to the rendering loop now. In the raycasting loops we now need to remember a bit of extra information about the wall we hit, namely the specific spot on the wall that was hit and the type of wall. This is what determines how we&#39;re going to move the texture image within the strip element to make sure the right part is visible. We now throw away the minimap raydrawing part from earlier and replace it with the code that is going to manipulate the screen strips.
</p>

<p>
We have already figured out the squared distance to the wall, so we take the square root of the saved &quot;distance&quot; to get the actual distance to the wall. While this is the real distance to the point on the wall that was hit by the ray, we need to adjust it a bit lest we get something commonly referred to as the &quot;fish-eye&quot; effect. This effect is best explained by seeing it (Figure 5).</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/204-creating-pseudo-3d-games-with-html-5-canvas-and-raycasting/fisheye0.png" alt="Rendering without adjusting for fish-eye effect." />
<p class="comment">Figure 5: Rendering without adjusting for the &quot;fish-eye&quot; effect</p>

<p>Notice how the walls seem to be &quot;bend&quot;. Fortunately, the fix is easy - we simply need to get the distance perpendicular to the wall we hit. This is done by multiplying the distance to the wall by the cosine of the relative ray angle. See <a href="http://www.permadi.com/tutorial/raycast/rayc8.html">the &quot;Finding distance to walls&quot; page of Permadi&#39;s tutorial</a> for further details.
</p>

<pre><code>  ...
  if (dist) {
    var strip = screenStrips[stripIdx];

    dist = Math.sqrt(dist);

    // use perpendicular distance to adjust for fish eye
    // distorted_dist = correct_dist / cos(relative_angle_of_ray)
    dist = dist * Math.cos(player.rot - rayAngle);</code></pre>

<p>
Now we can calculate the projected wall height; since the wall blocks are cubes, the width of wall in this single strip is the same, although we must stretch the texture additionally by a factor equal to the strip width to make it render correctly. When we hit the wall in the raycasting loop, we also saved the type of wall, which tells us how far up we have to move the texture image. We basically multiply this number by the projected wall height and that&#39;s it. Finally, as described earlier, we simply move the strip element and its image into place.
</p>

<pre><code>    // now calc the position, height and width of the wall strip
    // &quot;real&quot; wall height in the game world is 1 unit, the distance from the player to the screen is viewDist,
    // thus the height on the screen is equal to wall_height_real * viewDist / dist
    var height = Math.round(viewDist / dist);

    // width is the same, but we have to stretch the texture to a factor of stripWidth to make it fill the strip correctly
    var width = height * stripWidth;

    // top placement is easy since everything is centered on the x-axis, so we simply move
    // it half way down the screen and then half the wall height back up.
    var top = Math.round((screenHeight - height) / 2);

    strip.style.height = height+&quot;px&quot;;
    strip.style.top = top+&quot;px&quot;;

    strip.img.style.height = Math.floor(height * numTextures) + &quot;px&quot;;
    strip.img.style.width = Math.floor(width*2) +&quot;px&quot;;
    strip.img.style.top = -Math.floor(height * (wallType-1)) + &quot;px&quot;;

    var texX = Math.round(textureX*width);

    if (texX &gt; width - stripWidth)	// make sure we don&#39;t move the texture too far to avoid gaps.
      texX = width - stripWidth;

    strip.img.style.left = -texX + &quot;px&quot;;

  }</code></pre>

<p>
And that&#39;s about it; see Figure 6 for the final result! Well, not really - there&#39;s still plenty of things to do before this can be called a game but the first big hurdle is done with and there&#39;s a 3D world ready to be expanded upon. The last thing needed is to add a floor and a ceiling but this part is trivial if we make both a solid color. Simply add two <code>div</code> elements, each taking up half the screen space. Position them underneath the strips using <code>z-index</code> as appropriate and colour them as needed.
</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/204-creating-pseudo-3d-games-with-html-5-canvas-and-raycasting/textured.png" alt="pseudo 3d raycasting with textured walls" />
<p class="comment"><a href="3d_texture.htm">Figure 6: Pseudo-3D raycasting with textured walls</a>.</p>

<h1>Ideas for further development</h1>

<ul>

<li>Separate the rendering from the rest of the game logic (movement, etc.) Movement and other things should be independent of the framerate.</li>

<li>Optimizing - Several places can be optimized to gain small performance improvements, ie only set the style properties on the strips when they have actually changed and things like that.</li>

<li>Static sprites - Adding the ability to render static sprites (like lamps, tables, pickups, etc) would make the 3D world much more interesting.</li>

<li>Enemies/NPCs - When the engine is capable of rendering static sprites and it can move around at least one entity, we should also be able to combine these two with a simple AI to populate the world.</li>

<li>Better movement handling and collision detection - The player movement is rather crude, ie. the player comes to a full stop as soon as you release the key. Using a bit of acceleration when dealing with both movement and rotation would make for a smoother experience. The current collision detection is a bit brutal; the player is simply stopped dead in their tracks. Being able to slide along walls would be a great improvement.</li>

<li>Sounds - Using a Flash/JavaScript sound bridge such as <a href="http://www.schillmania.com/projects/soundmanager2/">Scott Schill&#39;s SoundManager2</a> it would be easy to add sound effects to various events.</li>
</ul>

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/3d-games-with-canvas-and-raycasting-part-2/" rel="next" title="link to the next article in the series">Next article&#8212;Creating pseudo 3D games with HTML 5 canvas and raycasting: Part 2</a></li>
</ul>
