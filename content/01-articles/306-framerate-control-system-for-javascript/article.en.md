Title: Framerate control system for JavaScript
----
Date: 2010-03-10 14:01:24
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

<h2>
    Table of contents
</h2>
<ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#how_it_works">How it works</a></li>
    <li><a href="#the_framerate_object">Implementing the <code>Framerate</code> object</a></li>
    <li><a href="#example_code">Example code</a></li>
    <li><a href="#whats_next">What’s next?</a></li>
</ul>
<h2 id="introduction">
    Introduction
</h2>
<p>
    This article discusses how to create a reliable framerate control system in JavaScript. It is basically a timer with a rate of several cycles per
    second. It would normally be used in games as a timer to keep the game logic running at a given speed — it is important that the timer is stable, otherwise the game will start running at different speeds and adversely affect gameplay.
</p>
<p class="note">
You can <a href="http://dev.opera.com/articles/view/framerate-control-system-for-javascript/framerate_example.zip">download the example code</a>, which includes both the code for the framerate control system object I’m about to explain as well as the example code I discuss later showing how to use it.
</p>
<h2 id="how_it_works">
    How it works
</h2>
<p>
    There are several ways to make a system that lets us keep up with the
    pace of a specific timer (which in our case would be running at the speed of the ideal framerate). One method would be to use a counter — the idea is that we call a function every time a timer tick happens, which increases the counter. Then the main loop would check for this counter later and compare it with the value it had the last time it was run. This lets us know how many frames have elapsed since the last iteration.
</p>
<p>
While this method works perfectly, it has an issue: it requires the function that increases the counter to be called constantly enough to keep up with the timer. Calling this function with methods such as <code>setInterval()</code> works in most browsers; if they can’t keep up with the pace of the timer they will start calling the function more often until they manage to reach the timer, which is accurate enough for our purposes. However, it seems that some browsers won’t call the function more often if they’re going too slowly, which breaks our timing system and becomes useless.
</p>

<p>
The approach used in this article is different. We obtain the current time in milliseconds using the <code>getTime()</code> function from the <code>Date</code> object and make a note of the current frame, then do the same thing again. We can then determine the amount of frames elapsed between those two times by looking at the two “current frame” values. This method isn’t affected by the speed of the browser. This method has only been tested on Opera, Firefox and Internet Explorer, but it should work on any browser that supports scripting and the <code>Date</code> object.
</p>

<h2 id="the_framerate_object">
     Implementing the <code>Framerate</code> object
</h2>
<p>
    Let’s have a look at how we can create this — we’ll store this functionality in a <code>Framerate</code> object. The first thing we’ll do is create an empty object that returns a pointer
    to itself. This is the object that will be doing all the timing duties.
</p>

<pre><code>function Framerate()
{
  // Return a pointer to itself
  return this;
}</code></pre>

<p>
Once we have the base object, we’ll start making the functions for it. The first function we’re going to make will tell the object the framerate. We’re going to call this function <code>setRate()</code>, and it will receive one parameter: the amount of cycles per second.
</p>

<pre><code>Framerate.prototype.setRate = function(rate)
{
  // Calculate new time difference between frames
  this.frameLen = 1000 / rate;
}</code></pre>

<p class="warning">
    Notice that we’re declaring the function as part of the object prototype. Make sure to declare it outside the <code>object</code> code, or there will be a memory leak every time a new object of this type is created. The same applies to the rest of the functions for this object.
</p>

<p>
This function calculates the length of a frame in milliseconds. This value is stored in the object’s <code>frameLen</code> variable and will be used later to determine the amount of frames that have elapsed.
</p>

<p>
The next function — <code>reset()</code> — will reset the timer. It sets the time of the last frame that has been checked to the current time. We need to call this function when initializing the object in order to get proper results.
</p>

<pre><code>Framerate.prototype.reset = function()
{
  // Create Date object
  var d = new Date();
    
  // Reset time of the last time to the current one
  this.prevTime = d.getTime();
}</code></pre>

<p>
First, a new <code>Date</code> object is created. By default, <code>Date</code> objects contain the date and time of when they were created, which is what we’re looking for, so we just store the variable value as is. Next we retrieve the current time in milliseconds, calling the <code>getTime()</code> function on that object. This value is stored in the object’s <code>prevTime</code> variable, which holds the time of the last frame that was checked.
</p>

<p>
Now that the required functions to set up the timer have been created, it’s time to create the function to retrieve the amount of elapsed frames. This function will return how many frames have elapsed since the last time it was called or <code>reset()</code> was called. It achieves that by comparing the amount of time elapsed since the last time, using the value in <code>frameLen</code> to determine the duration in frames. It also updates the time for the last frame accordingly, getting it ready for the next call. We’re calling this function <code>getFrames()</code>.
</p>

<pre><code>Framerate.prototype.getFrames = function()
{
  // Create Date object
  var d = new Date();
    
  // Get current time, in milliseconds
  var currTime = d.getTime();
    
  // Calculate amount of frames elapsed
  // Also update time of the last frame if needed
  var totalFrames = 0;
  while (this.prevTime + this.frameLen &lt;= currTime)
  {
    this.prevTime += this.frameLen;
    totalFrames++;
  }
    
  // Return amount of frames elapsed
  return totalFrames;
}</code></pre>

<p>
First of all, it uses the same method as <code>reset()</code> to retrieve the current time. Next it sets up a counter to determine how many frames have passed (the initial value of this counter is 0 frames), then it enters a loop. If the time for what would be the next frame is smaller than the current frame, it increases the value of the last frame by one frame, and it also increases the amount of elapsed frames by 1. Once the situation arises that the next frame would be after the current time, we have achieved the value we want — the amount of elapsed frames, so the function stops iterating and returns the value.
</p>

<p>
These three functions give us enough to have a reliable timer that can be used to keep track of the framerate in a game. We&#39;d like to encourage you to improve the object, and tell us about your results in the comments.
</p>

<h2 id="example_code">
    Example code
</h2>
<p>
Now we will look at some example code showing how to use the <code>Framerate</code> object. It’ll merely show the amount of seconds elapsed on screen, with accuracy within a tenth of a second. We’ll set the framerate at 10 frames per second, and set up a function that will check the frames regularly and update the amount of seconds accordingly. Even if the browser doesn’t call this function fast enough, the amount of seconds will appear at the correct speed (albeit results will appear on screen at a slower rate, skipping some values).
</p>

<p>
First we’ll set up our main function to do the initialization. All variables will be stored here in order to prevent global namespace pollution.
</p>

<pre><code>// Main function
function TestCode()
{
}

// Call main function on load
TestCode();</code></pre>

<p>
Now we have to create the <code>Framerate</code> object. We’ll set it to run at a rate of 10 frames per second, as stated earlier. Then we’ll reset the timer so it knows when to start counting. We can achieve that by putting the following code inside the function. We’re storing the pointer to the <code>Framerate</code> object in a variable called <code>f</code>.
</p>

<pre><code>// Create a Framerate object
this.f = new Framerate();

// Initialize Framerate object
this.f.setRate(10);
this.f.reset();</code></pre>

<p>
Now we’ll create a <code>&lt;p&gt;</code> element to put in the document, which will show the amount of seconds elapsed. We’re storing the pointer to it in the <code>p_obj</code> variable, and appending the object to the document body.
</p>

<pre><code>// Create &lt;p&gt; object inside the page
this.p_obj = document.createElement(&quot;p&quot;);
this.p_obj.innerHTML = &quot;0.0 seconds&quot;;
document.body.appendChild(this.p_obj);</code></pre>

<p>
We’ll start the counter at 0 seconds, so we have to set its initial value accordingly.
</p>

<pre><code>// Reset seconds counter
this.seconds = 0;</code></pre>

<p>
Now we need a function that will be used to update the seconds counter on screen. We’ll be using <code>setInterval()</code> so it is called regularly. Let’s start by making an empty function. We’re going to store a pointer to it in a variable called <code>callback</code>.
</p>

<pre><code>// This function will be called constantly to update the counter in the
// &lt;p&gt; object in the page.
this.callback = function()
{
}</code></pre>

<p>
Now we’ll insert the meat of the code into this function. The first thing we need in order to calculate the amount of seconds elapsed since the last time is to retrieve the amount of frames. In order to do that, we call the <code>getFrames()</code> function from our <code>Framerate</code> object.
</p>

<pre><code>// Get amount of frames elapsed
var numFrames = this.f.getFrames();</code></pre>

<p>
So far so good. Now we need to calculate the amount of seconds to show this time. In order to do that, we increase the <code>seconds</code> counter by the amount of seconds elapsed. Since the timer is running at 10 frames per second, that means that we have to divide the amount of frames by 10 in order to know how many seconds have elapsed. We add this value to the previous amount of seconds to get the new amount of seconds.
</p>

<pre><code>// Update amount of seconds
this.seconds += numFrames / 10;</code></pre>

<p>
Finally, we show the updated amount of seconds on screen by altering the <code>innerHTML</code> property of the <code>&lt;p&gt;</code> element we created before, thereby changing its contents.
</p>

<pre><code>// Show seconds on screen
this.p_obj.innerHTML = Math.floor(this.seconds) + &quot;.&quot; +
                       Math.floor(this.seconds * 10) % 10 +
                       &quot; seconds&quot;;</code></pre>

<p>
That is all we need in the updating function. The last thing we need now is to somehow cause this function to be called constantly. I’m going to use the <code>setInterval()</code> function for this. So, after having created our updating function, we only need to put the following inside the main function. Notice that I’m storing <code>this</code> in a variable and referencing the function from there; otherwise the updating function won’t receive a proper value for <code>this</code> and it won’t work.
</p>

<pre><code>// Call updating function
var myself = this;
setInterval(myself.callback, 150);</code></pre>

<p>
If you did everything correctly, you will see a seconds counter on screen. You can find the completed code in the <a href="http://dev.opera.com/articles/view/framerate-control-system-for-javascript/framerate_example.zip">code download for this article</a>. I&#39;m calling the updating function every 150 milliseconds in order to make the effects of going too slow more obvious. Feel free to modify this value in order to see how the <code>Framerate</code> object behaves. The seconds counter should be counting at the right speed regardless of how often the function is called.
</p>

<h2 id="whats_next">
    What’s next?
</h2>

<p>
In this article we’ve described a barebones framerate control system. It can certainly be improved on — here are some suggestions that you may want to look into:
</p>

<ul>
    <li>Function parameters are not validated. You may want to make sure that the passed parameters are valid, otherwise the code may crash if invalid parameters are passed in.</li>
    <li>Related to the above point, you may want to make the <code>Framerate</code> object have default values. Trying to use it without explicitly calling <code>setRate()</code> and <code>reset()</code> will yield invalid results.</li>
    <li>Make a function to retrieve the current rate.</li>
</ul>
<p>
And of course, feel free to experiment and try new ideas to improve the <code>Framerate</code> object.
</p>
              
