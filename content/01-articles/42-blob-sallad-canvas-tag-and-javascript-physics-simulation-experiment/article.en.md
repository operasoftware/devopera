Title: Blob Sallad – canvas tag and JavaScript physics simulation experiment
----
Date: 2007-10-17 11:44:43
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

<p>Blob Sallad is a small demo I put together using the <code>canvas</code> tag, which modern browsers have started
to support in recent versions (eg Opera 9.x and Firefox 2.x,) and some JavaScript physics simulation.
The main inspiration was the game Loco Rocco, and after reading an <a href="http://web.archive.org/web/20100111035201/http://www.teknikus.dk/tj/gdc2001.htm" alt="Thomas Jacobsen on game character physics">article about game character physics</a> 
by Thomas Jacobsen. I decided I could use similar techniques for
blob simulation.</p>

<p>You can see a working demo of Blob Sallad at <a href="http://blobsallad.se/" alt="The Blob Sallad home page">http://blobsallad.se/</a>, and download the source code to
play around with at <a href="http://blobsallad.se/blobsallad.js" alt="The Blob Sallad source code download page">http://blobsallad.se/blobsallad.js</a>.</p>

<h2>Getting started</h2>

<p>To start with, I simply add a <code>canvas</code> tag to my HTML document and gave it a convenient name:</p>

<pre><code>&lt;canvas id=&quot;blobs&quot; width=&quot;600&quot; height=&quot;400&quot;&gt;&lt;/canvas&gt;</code></pre>

<p>In order to draw on the canvas you use JavaScript, for example:</p> 

<pre><code>function drawSomething()
{
  var canvas = document.getElementById(&#39;blobs&#39;);
  var ctx = canvas.getContext(&#39;2d&#39;);

  ctx.lineWidth = 2;
  ctx.strokeStyle = &quot;#FF0000&quot;;
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(40, 10);
  ctx.lineTo(40, 40);
  ctx.stroke();
}</code></pre>

<p>The first two lines in the <code>drawSomething</code> function will find the <code>canvas</code> object using <code>getElementById</code>,
just like with any other HTML object. The second line probes the canvas for its context. The context
is the actual drawing area and as you can see we manipulate different properties of the context such as
line width and stroke color. When you want to start drawing you call use <code>beginPath</code> and move the cursor
around using <code>moveTo</code> and <code>lineTo</code>. When you are done with your path you call <code>stroke</code> and voila. It&#39;s all
really simple and Blob Sallad as such doesn&#39;t use anything outside the standard API
(see <a href="http://developer.mozilla.org/en/docs/Category:Canvas_tutorial" alt="Canvas API tutorial">http://developer.mozilla.org/en/docs/Category:Canvas_tutorial</a> for further coverage of the API.)</p>

<h2>Animation basics</h2>

<p>You will probably want to animate things before long as well. The easiest way to do this is to set
up a time-out function in JavaScript. For example:</p>

<pre><code>function mainLoop()
{
  drawSomething();
  updateAnimation();
  setTimeout(&#39;mainLoop()&#39;, 30);
}</code></pre>

<p>First I call <code>mainLoop</code>, which in turn will call <code>drawSomething</code> - this draws the current state on the
canvas, while <code>updateAnimation</code> calculates our object&#39;s new position and move it. When all this is done I
call the <code>setTimeout</code> function. Here the first parameter is the function I want to run, namely <code>mainLoop</code>
again. The second is the waiting time in milliseconds, meaning <code>setTimeout</code> will wait 30 milliseconds before
calling <code>mainLoop</code> again. As you can see this will go on forever unless I do something to stop it, but
that&#39;s another story.</p>

<h2>The physics</h2>

<p>Now I have my basic drawing equipment and can cycle an animation forward, the crucial next step is to
update the animation. I now need to cover some basics of physics simulation, so you can understand how
the blobs in Blob Sallad work - in essence they are made up of point masses and constraints. I will talk
about constraints later on; first we will cover point masses.</p>

<h3>Point masses</h3>

<p>A point mass is an object in two-dimensional space that has properties such as mass and velocity. You
can add a force to the point mass to manipulate its speed and direction. The force could for instance be
gravity, which would make the point mass fall to the ground.</p> 

<p>The following code will move a point mass when I add a force to it. The variable <code>dt</code> is the time step -
the exact value depends on in how large steps you want the animation to update. A larger <code>dt</code> will result
in an animation taking larger steps; a smaller <code>dt</code> will make the animation go slower but smoother. As a
rule of thumb, use a fairly small value, such as 0.05. Values larger than 1.0 will most likely make things
go crazy and &#39;explode&#39;.</p>

<pre><code>function movePointmass(pointmass, dt)
{
  var t, a, c, dtdt;

  dtdt = dt * dt;

  // move in x-dimension 
  a = pointmass.force.getX() / pointmass.mass;
  c = pointmass.currentPosition.getX(); 
  t = (2.0 - pointmass.friction) * 
    c - (1.0 - pointmass.friction) * 
    pointmass.previousPosition.getX() + a * dtdt;

  pointmass.previousPosition.setX(c); 
  pointmass.currentPosition.setX(t);

  // move in y-dimension 
  a = pointmass.force.getY() / pointmass.mass;
  c = pointmass.currentPosition.getY(); 
  t = (2.0 - pointmass.friction) * 
    c - (1.0 - pointmass.friction) * 
    this.prev.getY() + a * dtdt;

  pointmass.previousPosition.setY(c); 
  pointmass.currentPosition.setY(t);
}</code></pre>

<p>The technique used here is called Verlet integration (see <a href="http://en.wikipedia.org/wiki/Verlet_integration" alt="Verlet integration Wikipedia entry">http://en.wikipedia.org/wiki/Verlet_integration</a>
for more details.) One of the main advantages of this technique over for instance Euler integration is
that it is quiet stable. Complex physics simulation using Euler integration is more prone to &#39;explode&#39;
unless tuned carefully (<a href="http://en.wikipedia.org/wiki/Euler_integration" alt="Euler integration Wikipedia entry">http://en.wikipedia.org/wiki/Euler_integration</a>.) The main reason for this is that
the speed of the point mass is implicitly defined by its current and previous position rather than a
velocity variable. As long as a point mass doesn&#39;t bump into something Euler integrators work ok however
updating the velocity of a point mass when interacting with other objects is somewhat complicated. Here I
can just move the current position to change the point mass&#39; direction and speed, something that will
become convenient when implementing constraints and collisions further on.</p>

<p>In the example above, the variable <code>a</code> keeps track of how much a force will influence the point mass.
Heavy objects need more force to move. The friction part is used when a point mass bumps into something,
for example a point mass in free space would have a friction of 0.1, which would make it slow down after
a while. I&#39;ve done this because, although it&#39;s not completely physically accurate, it often looks better.
If the point mass bumps into a wall you can set the friction to say 0.75 to slow it down a bit. If you
don&#39;t do this objects will tend to slide around on floors like as if they where skating around a hockey
rink. The variable <code>t</code> is the new position of the point mass.</p> 

<p>Let&#39;s talk about walls for a while - what do you do when the point mass hits a wall? It&#39;s very simple.
Let&#39;s assume that I have a point mass confined to a small room measuring 1 x 1 distance units. I pass the
current position of a point mass as a parameter to the <code>BumpIntoWall</code> function and, if the point mass is on
the outside of the walls, I simply project it to the inside. The method is crude, as I don&#39;t take the
point masses&#39; incoming trajectory into account, but if you update in small enough steps (choose a small
<code>dt</code>,) the effect is passable. I really don&#39;t care if the simulation is accurate as long as it looks 
plausible. After all, JavaScript isn&#39;t that fast, so I&#39;d rather save some rendering speed and spend
resources doing other things.</p>

<pre><code>function BumpIntoWall(currentPosition)
{
  var collide = false;
  var i; 
  var left = 0.0;
  var right = 1.0;
  var top = 0.0;
  var bottom = 1.0;

  if(currentPosition.getX() &lt; left)
  {
    currentPosition.setX(left); 
    collide = true; 
  }
  else if(currentPosition.getX() &gt; right)
  {
    currentPosition.setX(right); 
    collide = true; 
  }
  if(currentPosition.getY() &lt; top)
  {
    currentPosition.setY(top); 
    collide = true; 
  }
  else if(currentPosition.getY() &gt; buttom)
  {
    currentPosition.setY(buttom); 
    collide = true; 
  }
  return collide; 
}</code></pre>

<p>Altering the current position of the point mass as in the example above will also alter its velocity,
which is a good thing, recalling the previous discussion about updating velocity. In addition, systems
that lose energy in this way often look more realistic. It&#39;s really annoying when you see objects on the
floor moving around because they are constantly trying to punch through the floor - a typical effect of
not losing velocity in the proper manner.</p>

<h3>Constraints</h3>

<p>A constraint is a rule that states how near or far two point masses can come to each other. In the 
below example I take two point masses, the black dots, and set them up with a constraint, which is
illustrated by the red and blue bars.</p>

<p>For an interactive example, check out <a href="http://blobsallad.se/article/example2.html" alt="Constraints interactive example">http://blobsallad.se/article/example2.html</a></p>

<p>When the masses get closer to each other than the red bars they wont go any further, as is the case
when they hit the blue bars. How do we know when two point masses actually get too close or to far from
each other? The following code assumes that you understand some basic vector algebra, but I&#39;ll try my
best to explain this somewhat simplified version of the satisfy constraints function used in Blob Sallad.
I removed some parts of the code that would make things unnecessarily confusing at this stage. Assume
that we have a constraint with two point masses, <code>pointMassA</code> and <code>pointMassB</code>.</p>

<pre><code>function satisfyConstrains()
{
  var delta = new Vector();
  delta.set(pointMassB); 
  delta.sub(pointMassA); 

  var dotprod = delta.dotProd(delta);

  var k = shortConst * shortConst;
  if(dotprod &lt; k)
  {
    var scaleFactor;
    scaleFactor = k / (dotprod + k) - 0.5;
    delta.scale(scaleFactor);
    pointMassA.sub(delta);
    pointMassB.add(delta);
  }

  k = longConst * longConst;
  if(dotprod &gt; k)
  {
    var scaleFactor;
    scaleFactor = k / (dotprod + k) - 0.5;
    delta.scale(scaleFactor);
    pointMassA.sub(delta);
    pointMassB.add(delta);
  }
}</code></pre>

<p>The first thing I did is to create a new vector delta that points from <code>pointMassA</code> towards <code>pointMassB</code>;
it has the same length as the distance between A and B. Then I figure out the squared length of <code>delta</code>
using the dot-product function. The variable <code>shortConst</code> holds the minimum distance the two point masses
are allowed to get from each other. Now, if the squared distance between the point masses (the dot product
of <code>delta</code>) is smaller than the squared shorter constraint, <code>k</code> in this case, the two point masses are pushed
a bit further away from each other. I do the exact same test to see if the point masses are too far away
from each other in the second <code>if</code> statement. If so, they are pushed a bit closer to each other. Read
Thomas Jacobsen&#39;s article mentioned above if you want to dig into the details.</p> 

<h3>Building models</h3>

<p>As you might have guessed already one point mass can be shared by many constraints. You can in this
fashion build more complex models by linking together point masses with constraints. As an example assume
that I have three point masses - <code>p1</code>, <code>p2</code> and <code>p3</code> - and three constraints - <code>c1</code>, <code>c2</code> and <code>c3</code>. <code>c1</code> links <code>p1</code>
and <code>p2</code>, <code>c2</code> links <code>p2</code> and <code>p3</code>, and <code>c3</code> links <code>p3</code> and <code>p1</code>. This would give me a triangle of point masses linked
together - see <a href="http://www.blobsallad.se/article/example3.html" alt="3 point masses linked together in a triangle">http://www.blobsallad.se/article/example3.html</a> for an interactive example of this.</p>

<p>The <code>satisfyConstrains</code> function is used to move <code>p1</code> and <code>p2</code> a bit further away from each other if they
get too close. Satisfying <code>c1</code> might violate constraint <code>c2</code> because we moved <code>p2</code> around. Satisfying <code>c2</code> would
then in turn violate <code>c3</code>, and satisfying <code>c3</code> would violate <code>c1</code> and so on. It looks like we have an endless
loop of constraints violating each other going on. In order to solve this in a mathematical manner we
have to solve a system of equations solving all constraints simultaneously. It turns out we don&#39;t have
to worry that much though, as the following loop will do the trick:</p> 

<pre><code>for(var i = 0; i &lt; 4; i++)
{
  c1.satisfyConstrains();
  c2.satisfyConstrains();
  c3.satisfyConstrains();
}</code></pre>

<p>This loop solves the system of equations but in an iterative manner, often called relaxation. The exact
number of iterations in the loop is a matter of tweaking. The more iterations, the stiffer an object built
this way tends to be. Blobs are not that stiff, so I typically loop over the constraints three to four 
times. You might wonder why this works, and it took me some time to realize why. It has something to do
with the degree of freedom the point masses have when choosing new positions - the solver can typically
place them in a position where they don&#39;t get in the way of each other (or stated in another way, where it
is unlikely that satisfying one constraint will violate another.)</p>

<p>If you, however, try to place the object in a small compartment that can&#39;t contain it you will notice
strange effects. Also, if you build large objects such as blobs containing say 40 or more point masses
they may start moving around in an unpredictable manner. Consider our example blob A below - when
solving the first constraint it will push around its&#39; point masses which will make the second constraint
move a bit and so on. This creates a &#39;wave&#39; starting from the first constraint and going through all the
constraints back to the first. As the complexity of your models increase the likelihood of one constraint
violating another increase, thus creating this &#39;wave&#39; of going through the model. A simple trick to get
around this can be to solve all constraints in a spacial random order, as shown in blob B in Figure 1. This is not exactly
fool proof but it can work.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/42-blob-sallad-canvas-tag-and-javascript-physics-simulation-experiment/image_5.png" alt="Solving vector constraints in a random order" /></p>

<p class="comment">Figure 1: Solving vector constraints in a random order.</p>


<p>However, if such cheap tricks fail you consider solving everything at once using an equations solver.
The previously mentioned Wikipedia article about Verlet integration discusses this in some detail.</p>

<h2>On to the actual blobs</h2>

<p>The blobs in Blob Sallad are made of eight point masses as an outer hull, and one point mass in the
middle. The point masses of the blob are linked to each other using the constraints described above to
make sure the blob will not collapse under it&#39;s own weight, as demonstrated in Figure 2.</p> 

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/42-blob-sallad-canvas-tag-and-javascript-physics-simulation-experiment/image_4.png" alt="Image showing all of a blobs point masses linked to one another" /></p>

<p class="comment">Figure 2: All the point masses of a blob are linked to one another.</p>

<p>In this set up the blobs looked a bit jagged, so in order to make them more rounded I used Bezier
curves in the canvas API to figure out a smooth path around the blob, as shown on the right hand side of Figure 3.</p> 

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/42-blob-sallad-canvas-tag-and-javascript-physics-simulation-experiment/image_2.png" alt="Bezier curves give a smoother curve round the blob" /></p>

<p class="comment">Figure 3: As shown on the right hand side, Bezier curves give a smoother curve round the perimeter of the blobs.</p>

<p>It is not quiet perfect, but using 40 point masses just to get a nice curvy outline isn&#39;t an option
given the limited computing resources available.</p> 

<h3>Transformation matrices</h3>

<p>One interesting aspect of the canvas API is the ability to draw things in a local coordinate system
and then get everything scaled and rotated as an effect of an applied transformation matrix. Confused?
Consider the following code snippet used for drawing a blobs&#39; mouth when it is closed.</p> 

<pre><code>function drawHappyFace1(ctx, scaleFactor)
{      
  ctx.lineWidth = 2; 
  ctx.strokeStyle = &quot;#000000&quot;;
  ctx.fillStyle = &quot;#000000&quot;;
  ctx.beginPath(); 
  ctx.arc(0.0, 0.0, this.radius * 0.25 * scaleFactor, 0, Math.PI, false);
  ctx.stroke();
}</code></pre>

<p>This code simply draws a semi-circle using the <code>arc</code> command. The parameters are x-coordinate,
y-coordinate, radius, start degree and end degree. If I just called this function for every blob all
their mouths would reside at the same place, namely at the x- and y-coordinate origin (0.0, 0.0). Therefore, before
calling this function I need to make the canvas API aware of our current position and somehow make it
draw stuff there instead. This is done using the <code>save</code>, <code>restore</code>, <code>rotate</code>, <code>translate</code> and <code>scale</code> commands.</p>

<pre><code>function drawFace(scaleFactor)
{
  // save the current transposition matrix
  ctx.save(); 

  // move origo to the middle of the blob 
  ctx.translate(middleX, middleY); 
      
  // rotate everything draw from here on any degrees 
  ang = figureOutBlobRotation();
  ctx.rotate(ang);  
      
  // draw the happy face number one 
  drawHappyFace1(ctx, scaleFactor); 
      
  // make everything go back to the point as it was
  // when calling save
  ctx.restore(); 
}</code></pre>

<p>I first call <code>save</code>, which saves a copy of the current transformation matrix on a stack inside the
<code>canvas</code> tag. A transformation matrix is a mathematical manipulation of sorts. Just think of it as a black box
unless you intend to study linear algebra to find out exactly how it works (it&#39;s out of scope for this article in any case.) As a default the transformation matrix associated
with the canvas tag doesn&#39;t do anything, but it is always there. I can set up the transformation matrix
to translate, i.e. move things around. For example, if I tell the black box to move everything it gets
by (2.0, 3.0) and I give it the coordinates (1.0, 1.0) it will spit out (3.0, 4.0). In addition you can
tell it to rotate or scale everything it gets as well. The nice thing is that you can make it do all
these things at the same time, without any additional cost or computation time. Great news!</p> 

<p>After calling <code>save</code> to remember the current transformation matrix, I then start manipulating it using
<code>translate</code>. I want everything I draw from here on to originate from the middle of the blob - essentially
I set up the coordinate system so that (0.0, 0.0) is in the middle of the blob. Furthermore I figure out
how the blob is rotated around its own axis by calling <code>figureOutBlobRotation</code>. That value becomes an
argument of <code>rotate</code>, and then I call <code>drawhappyface1</code>. This draw function is totally oblivious to the blobs&#39;
orientation, but it doesn&#39;t have to know anything - when it calls the <code>arc</code> function the canvas API will
apply the current transformation matrix black box to every coordinate it gets.</p> 

<p>When I am done I call the <code>restore</code> method and everything goes back to how it was when I called <code>save</code>,
which is a good thing when calling <code>draw</code> for the next blob. Since transformation matrices are stored on a
stack you could call <code>save</code>, do some manipulation, call <code>save</code> again and so on. When done you just call
<code>restore</code>, draw something else using the previous transformation matrix, call <code>restore</code> and <code>save</code> and so
on until you are back at the bottom.</p>

<p>The observant reader might have noticed that the parameter <code>scaleFactor</code> could have been part of the
transformation as well. I really have no good reason for not doing that except maybe temporary insanity.</p>

<h3>The Eyes</h3>

<p>The blobs have three different possible kinds of eye. Open, closed and yihaa! eyes, as shown in Figure 4.</p> 

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/42-blob-sallad-canvas-tag-and-javascript-physics-simulation-experiment/image_3.png" alt="The 3 different kinds of eyes that blobs have - open, closed, and yihaa!" /></p>

<p class="comment">Figure 4: The 3 different kinds of eyes that blobs have - open, closed, and yihaa!.</p>

<p>It&#39;s really a matter of switching eye state once in a while. This code snippet is called every frame
to randomize between open and closed eyes.</p>

<pre><code>if(eyeStyle == 1 &amp;&amp; Math.random() &lt; 0.025)
  eyeStyle = 2; // closed eyes 
else if(eyeStyle == 2 &amp;&amp; Math.random() &lt; 0.3)
  eyeStyle = 1; // open eyes

drawEyes(eyeStyle);</code></pre>

<p>What are the yihaa! eyes then? When using the arrow keys to move the blobs around really fast they
change eye style, and blobs love it when you smash then into walls, really they do! Basically, if the
blob moves at a certain velocity it gets the yihaa! eyes. To figure the speed of the blob you can use the
current and previous position of the middle point mass. Remembering the previous discussion about point
masses, consider the following code.</p>

<pre><code>function getVelocity()
{
  var cXpX, cYpY; 
      
  cXpX = currentPosition.getX() - previousPosition.getX(); 
  cYpY = currentPosition.getY() - previousPosition.getY();
      
  return cXpX * cXpX + cYpY * cYpY;  
}</code></pre>

<p>The previous code snippet could be extended to this.</p>

<pre><code>if(getVelocity() &gt; 0.004)
  eyeStyle = 3; // the yihaa! eyes
else if(eyeStyle == 1 &amp;&amp; Math.random() &lt; 0.025)
  eyeStyle = 2; // closed eyes
else if(eyeStyle == 2 &amp;&amp; Math.random() &lt; 0.3)
  eyeStyle = 1; // open eyes

drawEyes(eyeStyle);</code></pre>

<p>If you are familiar with physics you might notice that we actually do not compute the velocity of the
blob in <code>getVelocity</code> but rather the squared velocity. In order to get the actual velocity you would have
to take the square root of the return value. I am, however, only interested in the case when the blob
moves faster than some certain limit not the actual speed. Which means that it doesn&#39;t matter if we use
the squared value or not. I guess the lesson here is that you can cheat as much as you want as long as it
looks plausible.</p> 

<h3>The Blob Collective</h3>

<p>The last part is to make many blobs. A container class called a blob collective holds the blobs, and
follows some rules. Blobs can&#39;t get too close to each other, and in order to make them stay away from each 
other each blob has a constraint set up between its middle point mass and all the other blob&#39;s middle
points. This constraint is a special case of the constraints discussed previously, which will allow two
point masses to get as far from each other as they want but not too close. The following code will do 
the job.</p> 

<pre><code>function satisfyBlobToBlobConstrains()
{
  var delta = new Vector();
  delta.set(pointMassB); 
  delta.sub(pointMassA); 

  var dotprod = delta.dotProd(delta);

  var k = shortConst * shortConst;
  if(dotprod &lt; k)
  {
    var scaleFactor;
    scaleFactor = k / (dotprod + k) - 0.5;
    delta.scale(scaleFactor);
    pointMassA.sub(delta);
    pointMassB.add(delta);
  }
}</code></pre>

<p>As you can see, I simply omitted the second <code>if</code> statement from the previous code, which would try to
move the point masses back towards each other if they were too far from each other. In the case where
they get to close, I move the middle point mass of the blob as before. Please note that I only move the
middle point mass, but the middle point mass is hooked up to all the other point masses of the blob by
a bunch of constraints, so they all drag along. This is somewhat interesting because you can build quite
complex structures using point masses and constraints and then make them interact with each other,
without any additional principles involved.</p>  

<p>When the user presses &#39;h&#39; (the create a new blob key) I find the largest blob available and remove it
from the bob collective and insert two smaller blobs. When figuring out the positions of the new blobs I
intentionally place them too close to each other so that the keep-away-from-me constraint described before
will kick in and make the blobs bounce off each other.</p>

<p>In the same fashion, when joining two blobs I find the smallest one available and the one that is the
closest to it and replace them with one larger blob.</p> 

<h3>Keyboard interaction</h3>

<p>To make the blobs move around using the arrow keys is rather easy. First I figure out if an arrow key
was pressed.</p> 

<pre><code>document.onkeydown = function(event)
{
  var keyCode;

  if(event == null)
    keyCode = window.event.keyCode;
  else
    keyCode = event.keyCode;

  switch(keyCode)
  {
    // left
    case 37:
      addForceToAllBlobs(new Vector(-50.0, 0.0));
      break;
    // up
    case 38:
      addForceToAllBlobs(new Vector(0.0, -50.0));
      break;
    // right
    case 39:
      addForceToAllBlobs(new Vector(50.0, 0.0));
      break;
    // down
    case 40:
      addForceToAllBlobs(new Vector(0.0, 50.0));
      break;
  }
}</code></pre>

<p>The code will add a keyboard listener to the document. If an arrow key is pressed the above code will
be executed, adding a force to all point masses of all blobs. These forces point in different directions
depending on the key pressed. A force here is simply a vector of some length. Recall how this influenced
a point mass in the <code>movePointmass</code> function.</p>

<p>Gravity is implemented in the same way; in each frame I add a force pointing downwards to all point
masses.</p>

<p>An important note on gravity and forces. As you might know two objects independent of weight and size
will fall towards the earth at the same speed in vacuum. This is because gravity does not act as a force
but rather as acceleration. If we review the code in <code>movePointmass</code> we will find the following line.</p> 

  <pre><code>a = pointmass.force.getX() / pointmass.mass;</code></pre>

<p>The variable <code>a</code> is the acceleration of the point mass, in this case in the x-direction. Clearly the
mass of the point mass has something to with this. Heavier point masses will not be as influenced by a
force as lighter ones. But this is in clear violation of how gravity works. In my case this still works
since I have been a lazy programmer and just made all the point masses weigh the same, namely one weight
unit. But you might want to actually have point masses of different weights and still have working
gravity. To solve this you can either multiply the gravity force for each point mass with the weight of 
the point mass.</p> 

  <pre><code>pointmass.addForceX(gravity.getX() * pointmass.mass);
  pointmass.addForceY(gravity.getY() * pointmass.mass);</code></pre>

<p>Or you can implement an independent <code>addAcceleration</code> method, which would have to be considered when
moving the point mass.</p> 

<pre><code>function addAcceleration(acc)
{
  this.acceleration.Add(acc);
}</code></pre>

<p>When moving the point mass, I extend the code like this.</p> 

<pre><code>a  = pointmass.force.getX() / pointmass.mass;
  a += acceleration.getX();</code></pre>

<h3>Mouse interaction</h3>

<p>The mouse interaction is a bit more complicated. To find the current position of the mouse I have to
add a mouse listener, as sene below (note that I stripped out some error checking in the example below to make it less confusing for now.)
When writing a mouse listener you will have to add some tests since all browsers do not behave in the
same way (see the Blob Sallad source code for a working example.) First we want to know if someone
clicked the mouse.</p>

<pre><code>function getMouseCoords(event)
{
  return {x : event.pageX, y : event.pageY};
}
  document.onmousedown = function(event)
{
  var mouseCoords;

  mouseCoords = getMouseCoords(event);
  selectOffset = selectBlob(mouseCoords.x, mouseCoords.y);
}</code></pre>

<p>When someone presses the mouse I figure out if a blob is being selected by calling <code>selectBlob</code>, which
is a part of the blob collective class. What I want to do is check if I actually clicked on a blob.</p>

<pre><code>function selectBlob(x, y)
{
  var i, minDist = 10000.0;
  var otherPointMass;
  var selectedBlob;
  var selectOffset = null;

  for(i = 0; i &lt; numBlobs; i++)
  {
    otherPointMass = getBlob(i).getMiddlePointMass();
    aXbX = x - otherPointMass.getXPos();
    aYbY = y - otherPointMass.getYPos();
    dist = aXbX * aXbX + aYbY * aYbY;
    if(dist &lt; minDist)
    {
      minDist = dist;
      if(dist &lt; getblob(i).getRadius() * 0.5)
      selectOffset = { x : aXbX, y : aYbY };
    }
  }

  return selectOffset;
}</code></pre>

<p>First I loop through all the blobs in the blob collective and check to see if any blobs&#39; middle point
mass is closer to the mouse pointer than its radius; if so, the blob is selected. If a blob is selected I
let the blob collective remember which one. The select offset is the distance from the middle point mass
to the mouse pointer. I use the select offset later when moving the mouse around to avoid making the blob
jump to the mouse position, which leads to the next part, what happens when moving the mouse.</p>

<pre><code>document.onmousemove = function(event)
{
  var mouseCoords;

  mouseCoords = getMouseCoords(event);
  selectedBlobMoveTo(mouseCoords.x – selectOffset.x,
                     mouseCoords.y - selectOffset.y);
  savedMouseCoords = mouseCoords;
}</code></pre>

<p>In this part I get the mouse position and subtract the select offset. This is to stop the blob
&quot;jumping&quot; to the position of the mouse. Then I call the function <code>moveSelectedBlobTo</code>.</p> 

<pre><code>function moveSelectedBlobTo(x, y)
{
  if(selectedBlob == null)
    return;

  var i, blobPos; 
      
  blobPos = selectedBlob.middlePointMass.getPos(); 
  x -= blobPos.getX(x); 
  y -= blobPos.getY(y); 

  for(i = 0; i &lt; selectedBlob.pointMasses.length; i++)
  {
    blobPos = selectedBlob.pointMasses[i].getPos(); 
    blobPos.addX(x); 
    blobPos.addY(y); 
  }
  blobPos = selectedBlob.middlePointMass.getPos(); 
  blobPos.addX(x); 
  blobPos.addY(y); 
}</code></pre>

<p>This is pretty straightforward - I have simply added the offset of the mouse to every point mass of
the blob. An interesting aspect of this is that you do not have to bother with the velocity of the point
mass since that is, again, an implicit result of moving the point mass around in this fashion. As a last
measure I have registered the following function, which is triggered when releasing the mouse.</p>

<pre><code>document.onmouseup = function(event)
{
  unselectBlob();
  savedMouseCoords = null;
  selectOffset = null;
}</code></pre>

<p>The <code>unselectBlob</code> function simply sets the selected blob in the blob collective to <code>null</code>, which will make
<code>moveSelectedBlobTo</code> to exit early if no blob is selected.</p> 

<h2>Summary</h2>

<p>This article has taken you through some techniques for physics simulation and using the <code>canvas</code> tag.
You can use physics simulation to do many things, such as cloth simulation and moving cars around in game
engines. Don&#39;t be discouraged if your simulations explode quite a bit in the beginning. It usually takes
some tweaking before everything is set straight.</p> 

<p>Note: I would like to point out that the code examples here are stripped down and simplified, to make
them readable and less confusing, so they shouldn&#39;t be taken as working examples. My hope is that I have
helped you recognize the key principles here, and can go on to implement your own stuff.</p>

<p>Also worth noting is that there is a non trivial part of the Blob Sallad code - handling vector
arithmetic - which I have omitted from this tutorial altogether. I think that vectors are pretty well
covered <a href="http://en.wikipedia.org/wiki/Vector_%28spatial%29" alt="Spacial vectors tutorial">elsewhere on the web</a>.</p>
 

<p>Furthermore, collision detection has not been discussed at all - this is because Blob Sallad doesn&#39;t
use any. The environment class could be said to do some collision detection but it is hardly anything
useful if you want to implement more complicated environments.</p>

<p>Make sure to check out <a href="http://blobsallad.se/" alt="The Blob Sallad home page">http://blobsallad.se/</a> for the Cairo + SDL version of Blob Sallad; send me an
e-mail if you have any questions (<a href="mailto:bjoern.lindberg@gmail.com" alt="E-mail the creator of Blob Sallad">bjoern.lindberg@gmail.com</a>.)</p>




