Title: Better performance with requestAnimationFrame
----
Date: 2013-06-06 07:38:27
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

<p>This article discusses how you can (and should) improve the performance of your animations, using the <code>requestAnimationFrame</code> API instead of the old <code>setInterval</code>/<code>setTimeout</code> methods, and how <code>requestAnimationFrame</code> is used. And of course, we will show you the mandatory code <a href="raf-demo.html">example of <code>requestAnimationFrame</code> in action</a>.</p>

<p><code>requestAnimationFrame</code> is now <a href="http://caniuse.com/requestanimationframe">supported across all modern browsers</a>, although still prefixed in some. Erik M&#xF6;ller has written a <a href="http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating">polyfill</a> that should handle all other browsers. We&#39;ll see this in more detail later. Let&#39;s start from the beginning...</p>

<h2>The not-so-good old way</h2>

<p>In order to see what&#39;s great about <code>requestAnimationFrame</code>, we must first have a look at the not-so-good old way in which we used to do animations. I&#39;m sure I don&#39;t need to tell you that long before Mozilla got the first experimental implementation of <code>mozRequestAnimationFrame</code> you could already create animations using <code>setTimeout</code> and <code>setInterval</code>. I&#39;ll assume you&#39;re already familiar with these two so I&#39;ll not go into details, if you want to know more here&#39;s an excellent article by John Resig explaining in depth how <a href="http://ejohn.org/blog/how-javascript-timers-work/">JavaScript timers work</a>.</p>

<p>As much as I don&#39;t want to be dismissive of these old-school methods, they do have some unfortunate downsides. First of all, JavaScript timers continue to work even in background tabs, and even when the corresponding browser window is minimized. As a consequence, the browser will continue to run invisible animations, resulting in unnecessary CPU usage and wastage of battery life. This is especially bad in the case of mobile devices.</p>

<p>Second, not only do timers continue to run for invisible animations, but when their time is up they also <em>always</em> enqueue their callback functions. Let me explain why this can sometimes pose a problem &#x2014; say you didn&#39;t do your job particularly well and for some reason the callback function takes more time to finish than you have set up your timers for. Once the timers are up they will enqueue yet *another* callback function, even though the previous one hasn&#39;t finished running. As this process repeats itself over time, you can quickly enqueue a virtually infinite amount of timer code, causing the browser to stall. Figure 1 provides an illustration of this.</p>

<p id="figure1"><img src="http://forum-test.oslo.osa/kirby/content/articles/804-better-performance-with-requestanimationframe/figure1.png" alt="diagram showing multiple callback functions being queued up" /></p>
<p class="caption">Figure 1: If your callback functions take longer than your timers, enqueuing of multiple callback functions can choke up the browser.</p>

<p>But even in cases where your callback functions don&#39;t take longer than the timers, <code>setTimeout</code> and <code>setInterval</code> still aren&#39;t optimal. Both can only redraw animations at a fixed rate, so to make sure the animation is smooth, we tend to err on the side of caution and choose a frequency slightly higher than the display refresh rate. This, however, causes unnecessary drawing, as some frames are drawn before the display refresh rate is ready to paint the animation outcome and are therefore just discarded. Figure 2 illustrates this problem.</p> 

<p id="figure2"><img src="http://forum-test.oslo.osa/kirby/content/articles/804-better-performance-with-requestanimationframe/figure2.png" alt="diagram showing frames in an animation being skipped, but  everything still being drawn" /></p>
<p class="caption">Figure 2: Skipped frames can lead to higher CPU usage and battery consumption, and sometimes even choppy animations.</p>

<p>These downsides are even more dangerous when these methods are used to implement looping animations, for example in games or crazy experiments like my <a href="http://shinydemos.com/hipster-dog/">hipster dog</a>, as looping animations <em>guarantee</em> to endlessly enqueue new callback functions in such scenarios. If you want to read more about the history of looping animations on the web, how animation loops behave when using <code>setTimeout</code> and <code>setInterval</code>, and how <code>requestAnimationFrame</code> has changed the way we code, I recommend you read <a href="http://www.nczonline.net/blog/2011/05/03/better-javascript-animations-with-requestanimationframe/">Better JavaScript animations with requestAnimationFrame</a> by Nicholas Zakas, which deals with the subject in depth.</p>

<h2>Introducing requestAnimationFrame</h2>

<p><code>requestAnimationFrame</code> is an API that does exactly what you would hope for: it passes the responsibility of scheduling animation drawing directly to the browser. The browser can do it better because, well, it knows what&#39;s going on inside the browser!</p>

<p><code>requestAnimationFrame</code> is part of W3C&#39;s <a href="http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/RequestAnimationFrame/Overview.html">Timing control for script-based animations</a> API.

<h2>What requestAnimationFrame does</h2>

<p>The browser knows about things like the tab and window status, what parts of a page are visible or not, when the browser is ready to paint, and what other animations are also running and visible. <code>requestAnimationFrame</code> addresses the problems with JavaScript timers we discussed before by putting the browser in charge and allowing it to use this information to optimize animation scheduling. So, the workflow for <code>requestAnimationFrame</code> looks like so:</p>

<ul>
  <li>First, it only draws the animations that will be visible to the user. That means no CPU power or battery life is wasted drawing animations that are running in background tabs, minimized windows, or otherwise hidden parts of a page.</li>
  <li>Second, frames are only drawn when the browser is ready to paint <em>and</em> there are no ready frames waiting to be drawn. This means that it&#39;s impossible for an animation drawn using <code>requestAnimationFrame</code> to enqueue more than one callback function or to stall the browser.</li>
  <li>Third, since frames are only drawn when the browser is ready to paint <em>and</em> there are no ready frames waiting to be drawn, there are no unnecessary frame draws. So animations are smoother and CPU and battery use are optimized further.</li>
</ul>  

<p class="note">I just said no additional callbacks will be enqueued until the current one has finished drawing and has been painted. However, if you call <code>requestAnimationFrame()</code> more than once each call will enqueue one callback, so you&#39;ll get additional callbacks.</p>

<p>Also, the browser can have several animations happening in the same page in a single reflow and repaint cycle.</p>

<h2>What requestAnimationFrame does NOT do</h2>

<p><code>requestAnimationFrame</code> does not:</p>

<ul>
<li>Set up a continuous animation; it only schedules a single update that is identified by an <strong>id</strong> number returned by that particular request. If subsequent animation frames are needed, then <code>requestAnimationFrame</code> will need to be called again from within the callback function. If you need to stop the animation, you can use <code>cancelAnimationFrame(id)</code>.</li>

<li>Guarantee when it&#39;ll paint; only that it&#39;ll paint when needed.</li>

<li>Guarantee the synchronicity of the animations. For example, if you start two animations at the same time but then one of the animations is in an area that is visible and the other is not, the first animation will go on playing while the other will not; when the second one becomes visible again, they may be out of sync. If you care about this you&#39;ll have to take care of this when you write your animation code, by making sure that the state of all the animations that need to be in sync is dictated by a parameter that goes unaffected by visibility (like the time passed since the starting time of the animation group, for example) as opposed to depending on each animation&#39;s previous frame.</li>

<li>Paint until the callback function has finished executing, even if you try to trigger a reflow mid-callback by using any of the methods that would trigger a reflow and repaint in normal conditions, like <code>getComputedStyle()</code>, for example.</li>
</ul>

<h2>How to use requestAnimationFrame</h2>

<p><code>requestAnimationFrame</code> is now <a href="http://caniuse.com/requestanimationframe">supported across all modern browsers</a> but it&#39;s still prefixed in some. At the time of writing the (un)prefixing situation is as follows:</p>

<ul>
  <li>Opera: unprefixed since Opera 15</li>
  <li>Chrome: unprefixed since version 24</li>
  <li>Safari: prefixed</li>
  <li>Firefox: prefixed, although unprefixed as of version 23</li>
  <li>IE: unprefixed since version 10</li>
</ul>

<p>However, to make sure your code works truly <em>everywhere</em> you should use <a href="http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating">Erik M&#xF6;ller&#39;s polyfill</a>, which provides robust cross-browser support, improving on <a href="http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/">Paul Irish&#39;s fantastic original groundwork on the subject</a>.</p>

<p>Here is the simple code that handles the animation inside our frog demo:</p>

<pre><code>var requestId = 0;
var animationStartTime = 0;

function animate(time) {
  var frog = document.getElementById(&quot;animated&quot;);
  frog.style.left = (50 + (time - animationStartTime)/10 % 300) + &quot;px&quot;;
  frog.style.top = (185 - 10 * ((time - animationStartTime)/100 % 10) + ((time - animationStartTime)/100 % 10) * ((time - animationStartTime)/100 % 10) ) + &quot;px&quot;;
  var t = (time - animationStartTime)/10 % 100;
  frog.style.backgroundPosition = - Math.floor(t / (100/2)) * 60+ &quot;px&quot;;
  requestId = window.requestAnimationFrame(animate);
}
function start() {
  animationStartTime = window.performance.now();
  requestId = window.requestAnimationFrame(animate);
}
function stop() {
  if (requestId)
    window.cancelAnimationFrame(requestId);
  requestId = 0;
}</code></pre>

<p><code>requestAnimationFrame</code> is a method that will signal to the browser that a script-based animation needs to be resampled by enqueuing a <strong>callback</strong> to the <strong>animation frame request callback list</strong>. This holds a list of the ids of the callback functions that are waiting to be executed. Calling <code>requestAnimationFrame</code> returns the <strong>id</strong> (<code>requestId</code>) that identifies the callback that has been enqueued. That <code>id</code> can be later used to cancel the callback, by using <code>cancelAnimationFrame(id)</code>.</p> 

<p>The <code>requestAnimationFrame</code> method takes as its argument the callback that needs to be executed to draw a new frame of the animation (<code>animate</code>). The callback, in turn, is itself a function that receives as an argument the <strong>timestamp</strong> of when the animation update was requested (<code>time</code>).</p>

<p>This timestamp is the result of invoking the <a href="http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/HighResolutionTime/Overview.html#dom-performance-now"><strong>now</strong> method of the Performance interface</a>. You need to make sure that any other time measurement you want to compare this with is also a <a href="http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/HighResolutionTime/Overview.html#sec-DOMHighResTimeStamp">DOMHighResTimeStamp</a> — in the example above we are calling <code>window.performance.now</code> and storing the result in the <code>animationStartTime</code> variable. In the animation function (<code>animate</code>) we then  compare this start time with the current time (<code>time</code>) in each frame to calculate the position of the frog in each case.</p>

<p class="note">When coding your animations, in case you bump into some old tutorials, note that the <code>animationStartTime</code> property was built in, but it is now deprecated, so you&#39;ll have to keep track of the start time yourself like I&#39;ve shown above.</p>

<p>To see this code in action, you can have a look at the source of my <a href="raf-demo.html"><code>requestAnimationFrame</code> demo</a>.</p>

<h2>Summary</h2>

<p>In this article we have discussed how <code>requestAnimationFrame</code> increases the performance of JavaScript animations and how you can use it in a way that will successfully work in all browsers. I hope this article inspires you to try some cool animation experiments &#x2014; and to update any old animation code you may have lying around!</p>
</p>
