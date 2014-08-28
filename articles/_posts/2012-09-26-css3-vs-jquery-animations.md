---
title: CSS3 vs jQuery Animations
authors:
- siddharth-rao
intro: 'JavaScript has allowed us to create animations on our web pages for a number of years, with JavaScript libraries making such code easier to create and more reliable cross-browser. CSS3 animations, a more recent contender, also allow us to create animations on web pages, although they are currently not quite as reliably supported cross-browser. Which one should you use? This article compares the two approaches in terms of performance and other benefits.'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>Flash originally paved the way for us to feature more than just text and images on web pages. It allowed developers to include animations and other rich effects on web pages, leading to a much more colourful and varied user experience. However, Flash was plagued by a number of issues like security, long loading times on mediocre networks, etc. Then came JavaScript libraries like jQuery, Prototype and MooTools, which got around a lot of Flash's issues by running natively in the browser, plus they made it easier for the average developer to use JavaScript to create rich effects and animations. Fast forward a few more years, and we've now got animation capabilities available in CSS3, which offers additional advantages, such as potential speed increases due to being rendered directly by the browser.</p>

<p>But what animation solution is really best for us to use? In this article, we shall look at how to create animations in jQuery and CSS3, and how they perform against each other.</p>

<h2>Introduction to Animation in jQuery</h2>

<p>The jQuery library abstracts a lot of complexity away from the developer. As a case in point, here is how to create a simple <code>&lt;div&gt;</code> that is animated after a button is clicked.</p>

			<ol>
<li>
<p>Include the jQuery library in your page, for example:</p>

<pre><code class="html">// It's recommended that you use a CDN to use the jQuery library. Here's a link to Google's CDN:
&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js?ver=1.8.1"&gt;&lt;/script&gt;</code></pre>
</li>
<li>
<p>Create the <code>&lt;div&gt;</code> element, and give it some basic style.</p>

<pre><code class="html">&lt;div&gt;&lt;/div&gt;</code></pre>

<pre><code class="css">div {
	margin-left:10px;
	margin-bottom:10px;
	background-color:red;
	opacity:1;
	float:left;
	width:100px;
	height:1px;
}</code></pre>
</li>
<li>

<p>Create the button to click that triggers a function to animate the <code>&lt;div&gt;</code></p>

<pre><code class="html">&lt;button id="start"&gt;Start Animation&lt;/button&gt;</code></pre>
</li>
<li>
<p>Write some jQuery code to select the <code>&lt;div&gt;</code> element and apply the effects once the button is clicked. On click, the <code>&lt;div&gt;</code>'s height is increased to 25px and opacity is decreased from 1 to 0.5 over a period of 2000 milliseconds or 2 seconds.</p>

<pre><code class="javascript">$("#start").click(function(){
	$("div").animate({
		opacity: 0.5,
		height:"25px",
	} , 2000);
});</code></pre>

</li>
			</ol>

<p>It's pretty easy to animate an element with jQuery using very little code, and the best thing about jQuery is that your code will work across older browsers, even as far back as IE6!</p>

<h2>Introduction to Animation in CSS3</h2>

<p>To create an animation in CSS3, you need to specify two different constructs in your CSS. First of all, you need to specify what form the animation will take using the <code>@keyframes</code> at-rule, which looks something like this:</p>

<pre><code class="css">@keyframes my-animation {
	0%   {height:0px; opacity:1; }
	100% {height:25px; opacity:0.5; }
}</code></pre>

<p><code>my-animation</code> is the name your animation will be identified by, and the different lines are different keyframes. In each case, the properties inside the curly braces say what value the animated properties will have at each stage of the animation, and the percentages dictate how far through the animation each stage is — in this particular case our animation is pretty simple, so we are only defining the start and end of the animation. Then, to apply your animation to an element on your page, you need to refer to it using the <code>animation</code> property:</p>

<pre><code class="css">div {
	margin-left:10px;
	margin-bottom:10px;
	background-color:red;
	opacity:0.5;
	float:left;
	width:100px;
	height:25px;
	<strong>animation: my-animation 2s;</strong>
}</code></pre>

<p>This is functionally identical to the jQuery example earlier: the <code>&lt;div&gt;</code> is animated over a period of 2 seconds, with its height increasing to 25px and its opacity decreasing from 1 to 0.5. Sounds pretty simple, huh? Unfortunately browser support is not as good for CSS3 animations — IE versions below 10 don't support it, and although all other major browsers support animations well, and the animation spec is now stable, most of them haven't dropped their vendor prefixes yet, so to ensure support just for the moment you'll have to include prefixed versions of the two blocks, for <code>-webkit-</code>, <code>-moz-</code>, <code>-ms-</code> and <code>-o-</code>. The Opera blocks would look like this, for example:</p>

<pre><code class="css">@-o-keyframes my-animation {
	0%   {height:0px; opacity:1; }
	100% {height:25px; opacity:0.5; }
}</code></pre>

<p>and</p>

<pre><code class="css">div {
		...
	<strong>-o-animation: my-animation 2s;</strong>
}</code></pre>

<p>This instantly makes the code base a lot more daunting, although if you wanted to reduce the code back to one block, you could use a solution like a preprocessor. Here are a couple of solutions that you could use to add the right prefix at runtime, or during a site build process:</p>

			<ol>
<li><a href="http://www.sass-lang.com">SASS</a> — A CSS preprocessor that allows you to include variables, functions, and other features, meaning faster more efficient CSS in some cases. Using SASS shouldn't affect the performance of your site.</li>
<li><a href="http://leaverou.github.com/prefixfree/">Prefixfree</a> — A JavaScript library that simple adds the right prefixes to your CSS for the browser accessing it, at runtime. This does mean executing more JavaScript on the client machine, which could lead to a slight performance hit, but this should be relatively minor. The downside is that the layout of the webpage will be broken if the user has JavaScript disabled.</li>
			</ol>

<p>So at the moment, it looks like jQuery is the best way to go, especially in terms of browser support. If you want your site to still be usable in older browsers that don't support the animation, it is advisable to make the default settings of the properties that are animated equal to the end state of the animation, for example above you can see that <code>height</code> is set to 25px and <code>opacity</code> is set to 0.5, so if the animation isn't available, the element just defaults at its end state. This may be acceptable for your site, or it may not — it really depends on what you are trying to do, and what your client or boss is happy with.</p>

<p class="note">Note: for a lot more detail on CSS animations, read <a href="https://dev.opera.com/articles/view/css3-animations/">Making a move with CSS3 animations</a> by Chris Mills.</p>


<h2>Animation Wars: CSS3 vs jQuery</h2>

<p>To test the performance of CSS3 animations against jQuery animations, let's set up a test. We will use the code we have already shown above, but in each case we will animate 300 <code>&lt;div&gt;</code>s simultaneously, so that it is easier to actually measure the time taken for the animation to run.</p>

			<h3>CSS3 Animations</h3>

<p>The execution graph for the <a href="CSS3-300-boxes.html">CSS3 animation test</a> looks like Figure 1, which also links through to a larger version of the image for clarity. This graph was created using the Opera Dragonfly profiler tool, and the browser used was Opera 12 on Mac OS X.</p>

<p><a href="css3-300-boxes-speed-large.jpg"><img src="css3-300-boxes-speed-small.jpg" alt="Image illustrating the time taken to animate 300 divs with CSS animations in Opera 12"></a></p>
<p class="comment">Figure 1: The time taken to animate 300 <code>&lt;div&gt;</code>s with CSS animations.</p>

<p>As seen in Figure 1, the entire animation is completed in around 2.9 seconds.</p>

<p>Next, let's look at memory usage — see Figure 2, which links through to a larger image for clarity. This graph was created using the Memory option inside the Timeline tab of Chrome 21's Developer Tools.</p>

<p><a href="css3-300-boxes-memory-large.jpg"><img src="css3-300-boxes-memory-small.jpg" alt="Image illustrating the heap memory used to animate 300 divs with CSS animations in Chrome 21"/></a></p>
<p class="comment">Figure 2: The memory used in animating 300 <code>&lt;div&gt;</code>s with CSS animations.</p>

<p>The memory used during the CSS3 animation is very small — around 1.5MB, with only about 100 actions required. The final data for this test is:</p>

<ul>
<li>Number of actions performed to finish the animation: 100</li>
<li>Time taken to finish executing the animation: 2.9 seconds</li>
<li>Memory consumed at the end of the animation: 1.5 MB</li>
</ul>

<p>Now let us proceed to see how the jQuery animations fare.</p>

			<h3>jQuery Animations</h3>

<p>The execution graph for the <a href="jQuery-300-boxes.html">jQuery animation test</a> looks like Figure 3, which links through to a larger version for clarity. This graph was created using the Opera Dragonfly profiler tool, and the browser used was Opera 12 on Mac OS X.</p>

<p><a href="jquery-300-boxes-speed-large.jpg"><img src="jquery-300-boxes-speed-small.jpg" alt="Image illustrating the time taken to animate 300 divs with jQuery in Opera 12"></a></p>
<p class="comment">Figure 3: The time taken to animate 300 <code>&lt;div&gt;</code>s with jQuery.</p>

<p>The entire operation takes just over 5 seconds — a much longer time right? The actual animation doesn't take much longer, but there is all the extra overhead of the JavaScript being loaded (notice a slight delay between the button being clicked and the animation starting.) Also, the number of actions performed by the browser is more than 2000, enormous compared to just 100 for the same animation done using CSS3. Even without using developer tools, you will notice that once the 'Start Animation' button is clicked, there is a slight delay before the animation starts.</p>

<p>Now onto memory usage — see Figure 4, which links through to a larger image for clarity. This graph was created using the Memory option inside the Timeline tab of Chrome 21's Developer Tools.</p>

<p><a href="jquery-300-boxes-memory-large.jpg"><img src="jquery-300-boxes-memory-small.jpg" alt="Image illustrating the heap memory used to animate 300 divs with jQuery in Chrome 21"/></a></p>
<p class="comment">Figure 4: The memory used in animating 300 <code>&lt;div&gt;</code>s with jQuery.</p>


<p>When it comes to memory, this animation is a lot hungrier, using close to 6 MB! The final data for this test is:</p>

<ul>
<li>Number of actions performed to finish the animation: 2119</li>
<li>Time taken to finish executing the animation: 5 seconds</li>
<li>Memory consumed at the end of the animation: 6 MB</li>
</ul>

<p>It is also worth noting that the above animations will give different test results across different browsers on different computers, but at least they provide a usable comparison. Currently, Chrome has the fastest JavaScript processor and executes the jQuery animation a few hundred milliseconds faster than its competitors. However it's an entirely different story when it comes to CSS3 animations. Opera 12 blasts ahead giving a smooth animation, as Opera currently leads the way when it comes to DOM manipulation and processing CSS. Firefox 14 and Safari 6 do a very good job at both the areas. The developer's nightmare, IE (the latest stable version being IE 9) doesn't support CSS3 animations but executes jQuery animations decently.</p>

<h2>And the winner is...</h2>

<p>CSS3! Clearly, CSS3 wins the race by lengths. The huge difference in performance is because the browser's CSS processor is written in C++ and native code executes very fast whereas jQuery (JavaScript) is an interpreted language and the browser can't predict JavaScript ahead in time, in terms of what event will occur next.</p>

<p>Although the results above indicate that you should use CSS3 for animations, you should bear in mind the advantages and disadvantages we discussed earlier on in the article. You need to keep in mind that a fair amount of people still use Internet Explorer 7 and 8, so you should use jQuery if your animations absolutely need to work the same in those older browsers.</p>

<p>Alternatively, you might be able to live with your animations gracefully degrading in non-supporting browsers, in which case CSS3 animations are the best option.</p>

<p class="note">Note that for simple animations, such as the trivial one shown in this test example, you could probably use less CSS if you did it as a <a href="https://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/">transition</a> instead of an animation. It really is up to you what to use — transitions are quicker to set up but rely on state changes, whereas animations are arguably more flexible and powerful. Choose what is best for your particular situation.</p>
