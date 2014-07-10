---
title: Making a Move With CSS3 Animations
authors:
- chris-mills
intro: 'CSS animations allow us to animate our web content, by declaring property values at different keyframes, and then applying the animations you’ve declared to the elements you want to animate. And what’s more is that they’re available in Opera 12+! In this article, we’ll walk you through the basics and look at some examples along the way.'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>Traditionally, the Web was a very static place. Achieving animations was not really possible in any sane way until JavaScript, animated GIFs and Flash came along, at which point we rejoiced and applauded the ensuing slew of skip intros and horrible obtrusive animations.</p>

<p>This was all well and good, but there was still no way for non-developers to create animations using open standards. You can spout all the religious arguments you want about animation belonging in the behaviour layer rather than the presentation layer, but I think animation definitely falls in the realm of design. And now, with CSS3 transitions and animations, we can animate elements of our web documents. Standards-based web design with added fun! And added skip intros, if you're that way inclined...</p>

<p>Opera has supported transitions now for a long time, and we've already written about them in <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/">CSS3 transitions and 2D transforms</a>. This article focuses on the other way to animate things using stylesheets — <strong>CSS3 animations</strong>. Below we'll give you a concrete introduction including where the specification and browser support is at, how animations differ from transitions, basic syntax, and a list of examples.</p>

<h2>How mature is the technology?</h2>

<p>The <a href="http://www.w3.org/TR/css3-animations/">CSS animations spec</a>, proposed and edited by Apple, is currently in Working Draft status and is labelled as "Outdated" on the <a href="http://www.w3.org/Style/CSS/current-work.en.html">CSS working group current work page</a>, so I think we can expect to see some minor changes before it is completed, but the basic principle should remain the same.</p>

<p>In any case, it has already been implemented experimentally in Firefox (since 5), Chrome (since 4), Safari (since 4), IE (in 10), and Opera since version 12. Note "experimentally" — this means that you need to use appropriate vendor prefixes for each browser.</p>

<h2>Basic syntax</h2>

<p>Animations differ from transitions in that transitions are only triggered when a state change occurs (such as hovering over an element), whereas animations can be triggered independent of a state change, usually a set amount of time after a page loads, or on an event, via JS. Also, a transition animation always occurs on any properties that change their values when a state change occurs, whereas a CSS animation can animate between property values even if those properties are not set on the default state of the element being animated.</p>

<h3>Defining an animation</h3>

<p>To set up an animation, you first have to define some animation keyframes, in a special new at-rule block, which looks like this:</p>

<pre><code>@keyframes spin {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}</code></pre>

<p>Here we are saying that this animation is called <q>spin</q>, and what the animation does is smoothly rotates whatever it is applied to through 360 degrees. Nothing else is defined here at all, which may sound lacking, but in actual fact it is very flexible, as you can define an animation once, and then apply it to many different elements with different durations and other behaviour.</p>

<p>You can also use <code>0%</code> and <code>100%</code> in place of <code>from</code> and <code>to</code>. If you like, you can include intermediate keyframes, for more complex animations:</p>

<pre><code>@keyframes spin {
	0% { transform: rotate(0deg); }
	25% { transform: rotate(30deg); }
	50% { transform: rotate(120deg); }
	100% { transform: rotate(360deg); }
}</code></pre>

<p>You can write keyframes that have the same values on one line, like this:</p>

<pre><code>25%, 50% { opacity: 0.9; }</code></pre>

<p class="note">Note: You can set your animation so that the first keyframe doesn't appear at 0%, e.g. 40%. If you do this, however, nothing will change before that point in the animation. If you don't set the last keyframe as 100%, e.g. 70%, the animation will reach that point and stay the same up until 100%.</p>

<p>The current main annoyance of using animations is that you have to define a separate keyframes block for each browser, as the at-rule itself uses a prefix, so <code>@-o-keyframes animation1 { }</code>, <code>@-moz-keyframes animation1 { }</code>, etc. And this is in addition to the different prefixed versions of all the animation properties you'll see later. But at least within each prefixed at-rule, you only need to include the single prefixed properties for that browser, in the case of properties that require prefixes. And there are a couple of JavaScript libraries worth looking at, which detect the rendering engine at runtime and add the appropriate prefixes where needed, saving you having to write all of them out. See <a href="http://leaverou.github.com/prefixfree/">Prefixfree</a> by Lea Verou, and <a href="http://prefixr.com/">Prefixr</a> by Jeffrey Way.</p>

<h3>Applying an animation</h3>

<p>To animate an element using this animation, you apply it to the element using the <code>animation-name</code> property:</p>

<pre><code>#image {
	animation-name: spin;
}</code></pre>

<p>To make this do anything, you also need to tell the animation how long it should take to run from start to finish: this is done using <code>animation-duration</code>:</p>

<pre><code>#image {
	animation-name: spin;
	animation-duration: 3s;
}</code></pre>

<p>these are all the properties you need to get an animation to run once on an element. Let's now look at what other properties we have to control animations.</p>

<h3>How many times do we want it to happen?</h3>

<p>To make our animation run a set number of times, you use <code>animation-iteration-count</code>:</p>

<pre><code>#image {
	animation-name: spin;
	animation-duration: 3s;
	animation-iteration-count: 10;
}</code></pre>

<p>the value of <code>animation-iteration-count</code> can be any positive whole number, or you can set it to <code>infinite</code> to make it go on forever. The default value is 1.</p>

<p>To see what we have so far in action, check out my <a href="basic-spinner.html">basic spinner</a> example.</p>

<h3>Varying animation rate</h3>

<p>The first example doesn't look too bad, but you'll notice that in each iteration of the animation, the sun starts off by spinning fast, then slows down to a stop. You can alter the rate of animation change by setting different values of the <code>animation-timing-function</code> property. The different possible values are:</p>

<ul>
<li><code>linear</code> makes the animation happen at the same rate from beginning to end.</li>
<li><code>ease</code>, the default value, causes the animation to start quickly and then gradually slow down, as you've already seen.</li>
<li><code>ease-out</code> makes the animation start quickly, stay quick for longer than <code>ease</code>, and then slow down more abruptly at the end.</li>
<li><code>ease-in</code> makes the animation start off slowly, and then speed up toward the end.</li>
<li><code>ease-in-out</code> means that the animation starts off by accelerating, is quite fast for most of the duration, and decelerates toward the end.</li>
<li><code>steps()</code> is slightly different. Instead of giving a smooth animation throughout, this causes the animation to jump between a set number of steps placed equally along the duration. For example, <code>steps(10)</code> would make the animation jump along in ten equal steps. There's also an optional second parameter that takes a value of <code>start</code> or <code>end</code>. <code>steps(10, start)</code> would specify that the change in property value should happen at the start of each step, while <code>steps(10, end)</code> means the change would come at the end.</li>
<li><code>cubic-bezier()</code> applies your own custom cubic Bézier curve to dictate the change in animation rate. This function takes four arguments: the X and Y coordinates of the beginning control handle, and the X and Y coordinates of the end control handle: for example <code>cubic-bezier(.28, 1.48, .9, .02)</code>.</li>
</ul>

<p class="note">Don't understand cubic Bézier curves? Lea Verou has created a fantastic visual tool allowing you to easily visualise what we are on about, see the effects of different timing function values, and even generate your own cubic bezier values. Check out <a href="http://cubic-bezier.com/">cubic-bezier.com</a>.</p>

<p>To make the spinning sun look more consistent, I set <code>animation-timing-function</code> to <code>linear</code> — load up <a href="linear-spinner.html">linear spinner</a> to see the result.</p>

<p class="note">To create a "bounce" effect, you can use a cubic Bézier curve value with drag handle values greater than the lower or upper bounds of the graph, e.g. <code>cubic-bezier(.2,-0.36,.71,1.45)</code></p>

<h3>Animation delays</h3>

<p>You can set a delay before the animation starts, by setting an <code>animation-delay</code> property:</p>

<pre><code>#image {
	animation-delay: 4s;
}</code></pre>

<p>This property can take positive and negative values. A positive value will delay when the animation starts, whereas a negative value will make the animation start part way through the specified animation duration. You'll most commonly use this when you've got multiple animations that you want to fire at different times to provide a complete sequence.</p>

<h3>Start to end, or back and forth?</h3>

<p>By default, animations that run multiple times will go from start to end, then flick straight back to the start and go to the end again, and so on. You can instead make the animation go smoothly back and forth, so from start to end, then from end to start, start to end, and so on, by specifying <code>animation-direction: alternate;</code> on the element.</p>

<p>To see the effect of this, check out my <a href="alternate-spinner.html">alternate spinner example</a>. Note that the timing function effect is reversed as well, on the alternate animations.</p>

<h3>animation-fill-mode</h3>

<p>The last property we'll look at is <code>animation-fill-mode</code>. This allows you to specify how the animated element is displayed after an animation ends or during an <code>animation-delay</code>. The possible values of <code>animation-fill-mode</code> are:</p>

<ul>
<li><code>none</code> is the default value — by default, when an animation ends the element it is applied to will go back to using its intrinsic styling. In addition, no styling from animation keyframes will be applied to an element during an animation delay.</li>
<li><code>forwards</code> makes an element with an animation applied to it retain the styles defined by the properties in the final keyframe after the animation ends.</li>
<li><code>backwards</code> causes styles defined in the first keyframe to be applied to the element the animation is applied to during an <code>animation-delay</code>, rather than the default element styles.</li>
<li><code>both</code> applies the combined effects of <code>forwards</code> and <code>backwards</code> to an element undergoing an animation.</li>
</ul>

<p>To experiment with some of these effects, I've created another example including an animation that moves the spinning sun, and an animation delay. I've then made four versions, each of which has a different value of <code>animation-fill-mode</code>:</p>

<ul>
<li><a href="spinner-fill-mode-none.html"><code>animation-fill-mode: none;</code></a> — notice that the sun starts in the middle of the screen as defined in the #image ruleset, then jumps to the position defined in the 0% keyframe when the animation starts. At the end of the animation, it jumps back to the middle of the screen again.</li>
<li><a href="spinner-fill-mode-backwards.html"><code>animation-fill-mode: backwards;</code></a> — here the sun starts at the position defined in the 0% keyframe, and stays there until the animation starts. At the end of the animation, it jumps back to the middle of the screen again.</li>
<li><a href="spinner-fill-mode-forwards.html"><code>animation-fill-mode: forwards;</code></a> — in this case, the sun starts in the middle of the screen as defined in the #image ruleset, then jumps to the position defined in the 0% keyframe when the animation starts. At the end of the animation, it stays in the position defined in the 100% keyframe.</li>
<li><a href="spinner-fill-mode-both.html"><code>animation-fill-mode: both;</code></a> — the sun now starts at the position defined in the 0% keyframe, and stays there until the animation starts. At the end of the animation, it stays in the position defined in the 100% keyframe.</li>
</ul>

<h2>Animation shorthand</h2>

<p>You need to write a lot of code for CSS animations due to having to write multiple keyframe blocks <em>and</em> multiple properties including all the different prefixes. Fortunately, you can use shorthand to seriously reduce the amount of code needed.</p>

<p>The following properties:</p>

<pre><code>animation-name: spin;
animation-duration: 3s;
animation-timing-function: linear;
animation-delay: 3s;
animation-iteration-count: infinite;
animation-direction: alternate;
animation-fill-mode: both;</code></pre>

<p>can be replaced by this one line:</p>

<pre><code>animation: spin 3s linear 3s infinite alternate both;</code></pre>

<p>The spec is not very specific in defining the exact order of the property values in the shorthand, but it’s best to stick with the order shown above to avoid potential browser bugs. Various sources indicate that this order fulfils the idiosyncrasies different browsers currently have.</p>

<p>You <em>need</em> to include <code>animation-name</code> and <code>animation-duration</code> for the animation to do anything at all. If you don’t explicitly specify the other values, their default values will be applied:</p>

<pre><code>animation-timing-function: ease;
animation-delay: 0s;
animation-iteration-count: 1;
animation-direction: normal;
animation-fill-mode: none;</code></pre>

<p>You can apply multiple animations in a single rule by including them in the same property, separated by commas. This works for both longhand and shorthand values. Here's an example:</p>

<pre><code>animation: spin 3s, movement 5s;

animation-name: spin, movement;
animation-duration: 3s, 5s;</code></pre>

<p>If you’re using longhand properties with different numbers of values, you need to specify all the animation names to be applied. Thereafter, if any of the other properties have less values than the number of animations specified, they will be alternated to fill up the gaps. For example:</p>

<pre><code>animation-name: spin, movement, glow;
animation-duration: 3s, 5s;
animation-delay: 2s;</code></pre>

<p>The spin animation will have a duration of 3 seconds, and the zap animation will have a duration of 5 seconds. The glow animation will have a delay of 3 seconds again, because the duration values have run out, so they start from the beginning again. All of the animations will have a delay of 2 seconds.</p>

<h2>A More involved example</h2>

<p>To round off the article, I've created a slightly more interesting example with some more animations involved — check out my <a href="sun-rise.html">Sunrise example</a> in all its glory. If you dissect the code, you'll see a number of animations working together to produce the final effect.</p>

<img src="sun-rise.jpg" alt="a sunrise landscape scene, created mostly just using CSS">

<h2>Summary</h2>

<p>That's it for our basic tour of CSS animations — let us know what you think, and have fun.</p>
