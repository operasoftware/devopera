Title: The Opera Animation library
----
Date: 2008-07-23 16:03:24
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<p>The goal of this tutorial is to take you through creating animations using the Opera Animation library. The tutorial requires a basic understanding of JavaScript and <code><span class="caps">CSS</span></code>.</p>

<h3>Including the Animation library</h3>

<p>To enable animations in your widgets, copy the animation.js file to your widget&#39;s project folder, and include the script in your widget&#39;s main document.
The animation library can be downloaded here.</p>

<pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;http://forum-test.oslo.osa/kirby/content/articles/1-the-opera-animation-library/animation.js&quot;&gt;&lt;/script&gt;
</pre>

<h4>Creating an animation using <code>createAnimation()</code></h4>

<p>After the animation library is included, every element in the <span class="caps">DOM</span> will have a <code>createAnimation()</code> method available, that is used to create an animation on that element. When invoked, the <code>createAnimation()</code> method returns an <code>Animation</code> object that can later be referenced:</p>

<pre>
// Get an element
var myElement = document.getElementById( &#39;myAnimatableElement&#39; );
// Create an animation for &#39;myElement&#39; and assign the animation to myAnimation
var myAnimation = myElement.createAnimation();
</pre>

<p>We now have an <code>Animation</code> object available in the variable myAnimation that we can create our animation effects on.</p>

<h3>Using <code>addAnimation()</code></h3>

<p><code>Animation</code> object have a method called <code>addAnimation()</code> used to add an actual animation to our animation object.  We can add as many animations as we wish to any object. Each animation consists of a <span class="caps">CSS</span> property we wish to change, and a source and destination value.  This makes the  function prototype for <code>addAnimation()</code> as follows:</p>

<pre>
<code>@addAnimation( &lt;String&gt; CSS property, &lt;String&gt; from, &lt;String&gt; to)</code>
</pre>

<p>Going back to our animation named myAnimation, we wish to add the following effects:</p>

<ol>
<li>We wish to resize the &quot;myAnimatableElement&quot; element width from <samp>0</samp> to <samp>200</samp> pixels.</li>
<li>We wish to resize the &quot;myAnimatableElement&quot; element height from <samp>0</samp> to <samp>200</samp> pixels.</li>
<li>We wish to change it&#39;s opacity from <samp>0.0</samp> to <samp>1.0</samp>.</li>
</ol>

<p>We will need to add three animations to myAnimation, one for each property we wish to change:</p>

<pre>
<code>// Changing the width ...
myAnimation.addAnimation( &#39;width&#39;, &#39;0px&#39;, &#39;200px&#39; );
// ... and the height ...
myAnimation.addAnimation( &#39;height&#39;, &#39;0px&#39;, &#39;200px&#39; );
// ... and also the opacity ...
myAnimation.addAnimation( &#39;opacity&#39;, &#39;0.0&#39;, &#39;1.0&#39; );</code>
</pre>

<p>The properties we have added to myAnimation will, when they are run, be executed synchronously: Each of our new animation properties start at the same time, and end at the same time when the animation is run.</p>

<p>There is no limit to the number of animation effects we can add to any given animation, but keep in mind that adding too many effects may have an impact on animation performance.</p>

<h3>Running the animation using <code>run()</code></h3>

<p>When we have added all of the properties we want to our animation, we can run them using the <code>run()</code> method. This method takes no arguments, and simply executes the animation directly.</p>

<p><a href="simpleAnimation.html">View the sample animation</a>.</p>

<h3>Adjusting animation speed</h3>

<p>Adjusting the overall speed of the animation is done by changing the <code>Animation</code> object&#39;s <code>speed</code> property. Setting this to lower values makes the animation run slower</p>

<pre>
<code>// Slow down animation by setting speed to 3;
myAnimation.speed = 3;</code>
</pre>

<p>The default value of the <code>speed</code> property is <samp>6</samp>.</p>

<h3>Animation acceleration profiles</h3>

<p>Our first, simple example showed a very simple animation, we shall now proceed with modifying how the animation speeds up and/or slows down during the period of animation.</p>

<p>By default, animations move at a constant interval, but this can be changed by assigning a function to the <code>accelerationProfile</code> attribute on an <code>Animation</code> object. An <code>Animation</code> object has four predefined such acceleration profiles that can be set for the animation.</p>

<h4>Sine acceleration profile</h4>

<p>This profile gradually speeds the animation up at the start of the animation, and slows it down again when nearing the end. The name of the method is <code>sine</code>, and is set like this, on myAnimation:</p>

<pre>
<code>myAnimation.accelerationProfile = myAnimation.sine;</code>
</pre>

<h4>&quot;accelerate&quot; acceleration profile</h4>

<p>Another pre-made acceleration profile, is to have the animation start slowly, to gradually increase speed as it nears the end of the animation:</p>

<pre>
<code>myAnimation.accelerationProfile = myAnimation.accelerate;</code>
</pre>

<h4>&quot;decelerate&quot; acceleration profile</h4>

<p>This effect is the exact opposite of &quot;accelerate&quot; the animation will start by being quick, and then become gradually slower.</p>

<pre>
<code>myAnimation.accelerationProfile = myAnimation.decelerate;</code>
</pre>

<h4>Custom acceleration profiles</h4>

<p>If the pre-provided acceleration profiles don&#39;t suit you, you can easily use your own, as the <code>accelerationProfile</code> is a function pointer you can assign your own function to.  In the following example, <code>myAnimation</code> will run through 1/4 of the animation, and then have it&#39;s speed set to a constant value.</p>

<pre>
<code>myAnimation.accelerationProfile=function(x){
    var speed_constant = 1/25;
    if (x&lt;25){
      return speed_constant+x/25;
    } else {
      return speed_constant+1;
    }
  };</code>
</pre>

<p>In <a href="customAcceleration.html">this example</a> we see this custom animation compared to the predefined profiles <code>sine</code> and <code>constant</code>.</p>

<h3>Callbacks</h3>

<p>Animations using the <code>Animation</code> class has support for two types of callbacks: Callbacks that are executed before the animation runs, and callbacks that are executed after the animation has finished.</p>

<h4>onstart callback</h4>

<p>The <code>onstart</code> callback is executed right before the animation is run, and can for instance be used to synchronise two animations. The callback is added as a function reference.</p>

<pre>
<code>// Sync the start of &#39;mySecondAnimation&#39; to the start of &#39;myAnimation&#39;
myAnimation.onstart = function(){
  mySecondAnimation.run();
}</code>
</pre>

<p>Note that because of variable scope, we cannot simply do the following, but instead use the syntax as described above:</p>

<pre>
<code>myAnimation.onstart = mySecondAnimation.run;</code>
</pre>

<h4>onfinish callback</h4>

<p>The <code>onfinish</code> callback is executed when an animation has finished. An example use of this is to synchronise the start of another animation to the end of another.  The usage is similar to the <code>onstart</code> callback:</p>

<pre>
<code>// Sync the start of &#39;mySecondAnimation&#39; to the end of &#39;myAnimation&#39;
myAnimation.onfinish = function(){
  mySecondAnimation.run();
}</code>
</pre>

<h3>Animation Events </h3>

<p>When animations starts, finishes, or are interrupted (stopped), events will be raised that you, as a widget user can optionally choose to listen to.</p>

<h4>The <code>OAnimationStart</code> event</h4>

<p>In the same way the <code>onstart</code> callback is executed when the <code>run()</code> method is invoked on an animation, the <code>OAnimationStart</code> event is raised when the <code>run()</code> method is invoked:</p>

<pre>
<code>// execute some code when an animation is executed
myAnimation.addEventListener(&#39;OAnimationStart&#39;,function(ev){
  // run some code when the animation is started
},false);</code>
</pre>

<h4>The <code>OAnimationFinish</code> event</h4>

<p>In the same way the <code>onfinish</code> callback is executed when the animation has finished executing, the <code>OAnimationDone</code> event is raised when an animation is finished.</p>

<pre>
<code>// execute some code when an animation is finished
myAnimation.addEventListener(&#39;OAnimationFinish&#39;,function(ev){
  // run some code when the animation has finished
},false);
</code></pre>

<h4>The <code>OAnimationStop</code> event</h4>

<p>If an animation is interrupted before it has completely finished, the event <code>OAnimationStop</code> event will be raised.</p>

<pre>
<code>// execute some code if an animation is interrupted
myAnimation.addEventListener(&#39;OAnimationStop&#39;,function(ev){
  // run some code when the animation is interrupted
},false);</code>
</pre>

<h4>The <code>OAnimationFrame</code> event</h4>

<p>The <code>OAnimationFrame</code> event is raised whenever a single frame in an animation has finished rendering.</p>

<pre>
<code>// execute some code for each frame in an animation
myAnimation.addEventListener(&#39;OAnimationFrame&#39;,function(ev){
  // run some code for the current frame
},false);</code>
</pre>

<h4>Events example: Measuring <span class="caps">FPS</span></h4>

<p><a href="fpsmeter.html">This example</a> demonstrates how we can use the <code>OAnimationStart</code> and <code>OAnimationFrame</code> events to build an <span class="caps">FPS</span> meter into one of our animations.</p>
  
