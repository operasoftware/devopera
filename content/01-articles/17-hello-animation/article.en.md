Title: Hello Animation!
----
Date: 2006-11-24 15:45:29
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<p>In <a href="/articles/view/creating-your-first-opera-widget/" title="Your first widget">our previous tutorial</a>, we completed a minimal version of the Hello World! widget.  While the widget works, as is, it may seem a little dull to users, since it simply displays two sides, none of which have any other interaction than the &quot;flip&quot; button.</p>

<p>We will proceed by adding a little sparkle to the widget, by creating some simple animations, using the Opera Animation library. Please note that this is just a brief introduction to the library - there is a separate document describing all the advanced features of the <a href="/libraries/animation/">animation library</a>.</p>

<p>This tutorial assumes that you completed the &quot;Hello World!&quot; tutorial. If you did not save your work, you must <a href="http://widgets.opera.com/widget/3675">download the original widget</a>, and unpack it.</p>

<h2>Using the library</h2>

<p>The first thing you will need to do, if you want to create nice animations in your widget, is to include the file animation.js in their project. A <a href="/libraries/animation/Animation.zip">zip of the library is available for download</a>.</p>

<p>First, begin by copying the animation.js file to your widget&#39;s root folder. Next, you will have to include this file in your project, by placing the appropriate script element into your Hello World!-widget&#39;s index.html file.</p>

<p>In the widget we created in the <a href="/articles/view/creating-your-first-opera-widget/">Hello World! tutorial</a>, the <code class="mtag">head</code> section of our widget looked like this:</p>

<pre><code>&lt;head&gt;
  &lt;title&gt;Hello World!&lt;/title&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;helloworld.css&quot;&gt;
  &lt;script type=&quot;text/javascript&quot; src=&quot;helloworld.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>

<p>We will now change it to include the Opera Animation library:</p>

<pre><code>&lt;head&gt;
  &lt;title&gt;Hello World!&lt;/title&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;helloworld.css&quot;&gt;
  &lt;script type=&quot;text/javascript&quot; src=&quot;animation.js&quot;&gt;&lt;/script&gt;
  &lt;script type=&quot;text/javascript&quot; src=&quot;helloworld.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>

<p>Please note that the order in which you include scripts is significant.  Since we now will proceed to change the helloworld.js script from our previous incarnation of the Hello World! widget, to add the animation, it is important that the functions in already available to our animations.</p>

<h2>The flip button</h2>

<p>This tutorial will cover animation of the &quot;flip&quot; button. Where the flip button in the past simply appeared when we moused over the widget, and disappeared when we moved the mouse off our widget, we will now add some smooth fading:</p>

<ol>
  <li>First, we will let the flip button fade in when you mouse over it.</li>
  <li>We will then fade the flip button to become more visible when you hover the button itself.</li>
</ol>

<h2>Changing styles</h2>

<p>Proceed by opening the helloworld.css file from the original Hello World! tutorial. Some of the rules from that stylesheet will be unneccesary (and even conflict) with our nice JavaScript animations.  Locate and <em>delete</em> the two following style rules, and then save the file:</p>

<pre><code>body:hover .flipbutton {
	opacity: 0.3;
}

body .flipbutton:hover {
	opacity: 1.0;
}</code></pre>

<p>When you have deleted these two style rules, save and close the file, and open helloworld.js instead, so we can add the behavior instead.</p>

<h2>Preparing the widget for animation</h2>

<p>Before we can start animating objects (elements of the markup), we will have to add the animations to the elements themselves.  This is done by calling the <code>createAnimation()</code> method on them.  For our widget, this affects the flip buttons, and they are added, by adding the following to the start of the load event for the widget.</p>

<pre><code>window.addEventListener(&#39;load&#39;,function(ev){
// ... other code

// create animations for the front and back flip buttons
var frontFlipAnimation = document.getElementById(&#39;flipfront&#39;).createAnimation();
var backFlipAnimation = document.getElementById(&#39;flipback&#39;).createAnimation();
// set the speed for the animations
frontFlipAnimation.speed=10;
backFlipAnimation.speed=10;</code></pre>

<p>In addition to adding the animations, we also set the speed of the animations, so they are a bit faster, by setting the <code>.speed</code> property of the animations we just created.</p>

<h2>Mousing over the widget</h2>

<p>According to the &quot;Opera Widgets Style Guide&quot;, the flip button should be invisible when the mouse is not over the widget, and at 0.3 opacity when the mouse is over the widget.  We will now add the animation to do that:</p>

<p>Again, inside the onload event handler, we add code for the animations themselves:</p>

<pre><code>// a handler to fade in the flip button on hover over the widget
document.body.addEventListener(&#39;mouseover&#39;,function(){
  clearTimeout(buttonTimeout);
  if (parseFloat(frontFlipAnimation.style.opacity) == 0){
    // create the animation, and add an opacity fade and run it
    frontFlipAnimation.addAnimation(&#39;opacity&#39;,0,0.3).run();
    // similarily for the back side
    backFlipAnimation.addAnimation(&#39;opacity&#39;,0,0.3).run();
  }
},false);

// create an animation for whenever we move the mouse away from the widget
document.body.addEventListener(&#39;mouseout&#39;,function(){
  // create the animation, and add an opacity fade and run it
  buttonTimeout = setTimeout(fadeOut,50);
},false);</code></pre>

<p>This example might seem a bit complicated, but relax. This really is quite simple:</p>

<p>First, we are adding <em>event handlers</em> to the document, so that when we mouse over, or out of the widget, we start fading in and out. Inside these event handlers we add the actual code for animating. Let&#39;s examine one line of the code in the `mouseover&#39; handler:</p>

<pre><code>frontFlipAnimation.addAnimation(&#39;opacity&#39;,0,0.3).run();</code></pre>

<p>We are doing two things here:</p>

<ol><li>We add an animation on the <span class="caps">CSS</span> property <code>opacity</code>, and we are animating the value from 0.0 (fully transparent) to 0.3 (somewhat transparent). This is done by the <code>addAnimation()</code> method</li><li>Then we simply run the animation, by calling <code>run()</code></li></ol>

<h3>Delayed triggering</h3>

<p>In our example, we are delaying the animation with 50ms, as shown on this line:</p>

<pre><code>buttonTimeout = setTimeout(fadeOut,50);</code></pre>

<p>We will now need to declare the buttonTimeout somewhere in our global scope. Add the following as the first line of your script:</p>

<pre><code>var buttonTimeout;</code></pre>

<p>Next, when we want to animate, we are calling the <code>fadeOut</code> function, and thus, we&#39;ll need to declare this function. Let&#39;s add it, somewhere inside our `load&#39; event handler. This function will be called whenever you move the mouse away from the widget:</p>

<pre><code>function fadeOut(){
    frontFlipAnimation.addAnimation(&#39;opacity&#39;,0.3,0).run();
    backFlipAnimation.addAnimation(&#39;opacity&#39;,0.3,0).run();
}</code></pre>

<p>Voila! When you now start the widget, and mouse over the widget, the flip icon will gradually fade into view, and when you move your mouse away, it will gradually disappear.</p>

<h2>Mousing over the flip button</h2>

<p>The next thing we&#39;ll have to fix, is to make the flip button fully visible when we move the mouse over it, e.g. without transparency.  This is done by adding event handlers to the button itself. Again, we add these inside the load event handler:</p>

<pre><code>frontFlipAnimation.element.addEventListener(&#39;mouseover&#39;,function(){
  if (parseFloat(frontFlipAnimation.style.opacity) != 1){
    frontFlipAnimation.addAnimation(&#39;opacity&#39;,0.3,1.0).run();
  }
},false);

frontFlipAnimation.element.addEventListener(&#39;mouseout&#39;,function(){
  frontFlipAnimation.addAnimation(&#39;opacity&#39;,1.0,0.3).run();
},false);

backFlipAnimation.element.addEventListener(&#39;mouseover&#39;,function(){
  if (parseFloat(backFlipAnimation.style.opacity) != 1){
    backFlipAnimation.addAnimation(&#39;opacity&#39;,0.3,1.0).run();
  }
},false);

backFlipAnimation.element.addEventListener(&#39;mouseout&#39;,function(){
  backFlipAnimation.addAnimation(&#39;opacity&#39;,1.0,0.3).run();
},false);</code></pre>

<p>Note that we are adding four event handlers here: One for mousing over the flip button in the main view, and one for the config view.  Similarily, we add animations for moving the mouse away on both views.</p>

<p>Another thing worth noting is that we don&#39;t trigger animation when the opacity is already at 1 (full opacity).  This is something we will need to do to prevent an unwanted extra fade when we actually click on the widget.  This is signified by the <code>if</code> statement:</p>

<pre><code>if (parseFloat(backFlipAnimation.style.opacity) != 1)</code></pre>

<h3>Adding flipping</h3>

<p>The final thing we actually need to do, is to change the flip button image when we click the it. We covered this in the original tutorial, but we need to make two tiny modifications. Our previous code contained the following:</p>

<pre><code>document.getElementById(&#39;flipback&#39;).addEventListener(&#39;click&#39;,function(ev){
  flipWidget(&quot;front&quot;);
}, false);

document.getElementById(&#39;frontlabel&#39;).addEventListener(&#39;change&#39;,function(ev){
  document.getElementById(&#39;hellotext&#39;).textContent = this.value;
},false);
</code></pre>

<p>This should be changed to:</p>

<pre><code>document.getElementById(&#39;flipfront&#39;).addEventListener(&#39;click&#39;,function(ev){
  backFlipAnimation.style.opacity = 1;
  flipWidget(&quot;back&quot;);
}, false);

document.getElementById(&#39;flipback&#39;).addEventListener(&#39;click&#39;,function(ev){
  frontFlipAnimation.style.opacity = 1;  
  flipWidget(&quot;front&quot;);
}, false);
</code></pre>

<p>What we are doing here is setting the opacity for the opposite flip button directly to 1 (full opacity), so that the flip button will appear the same after you have flipped as before. So, when we click the flip button in the main view, <code>backFlipAnimation.style.opacity = 1;</code> changes the opacity of the configuration view&#39;s flip button, and <code>frontFlipAnimation.style.opacity = 1;</code> changes the flip button on the main view when we click the config view&#39;s flip button.</p>

<p>Our Hello Animation! widget should now be complete with animations. You can now add your own fancy ones, or you can <a href="http://widgets.opera.com/widget/3677">download</a> the complete widget if you want to see the reference code.</p>
