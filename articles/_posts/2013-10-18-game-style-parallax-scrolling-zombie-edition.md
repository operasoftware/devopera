---
title: 'Creating Game-Style Parallax Scrolling: Zombie Edition'
authors:
- elli-bishop
intro: 'Ready to enter the world of parallax scrolling websites? Yes, scrolling sites are absolutely everywhere. Sadly, sometimes they do little more than distract and disorient a user in an attempt to show off, but when done correctly, they can make the web a more exceptional place. At its best, parallax scrolling can help users explore content in an immersive and engaging way.'
license: cc-by-3.0
layout: article
---
<h2>Introduction</h2>
<p>Ready to enter the world of parallax scrolling websites? Yes, scrolling sites are absolutely everywhere. Sadly, sometimes they do little more than distract and disorient a user in an attempt to show off, but when done correctly, they can make the web a more exceptional place. At its best, parallax scrolling can help users explore content in an immersive and engaging way.</p>

<p>With that said, my team has recently started employing scrolling animation with some of our content pieces. We were inspired by a piece about the <a href="http://yourlocalsecurity.com/resources/adt-timeline">history of ADT</a>, and then decided to up the ante for an interactive zombie infographic about the popular AMC show <em>The Walking Dead</em>. Today, I'd like to take you behind-the-scenes on that project and show you how to use a JavaScript plugin called <a href="https://github.com/Prinzhorn/skrollr">Skrollr.js</a>, which we found to be helpful in getting the piece up and running.</p>

<p><img src="wd-screen-resized.png" alt="Main Zombie Graphic" /></p>

<p>Simply defined, Skrollr is a plugin that allows you to create precise scroll-based animations (parallax or otherwise) using just HTML and CSS. There are a lot of advantages to this, which you can learn more about in the <a href="https://github.com/Prinzhorn/skrollr">Skrollr documentation</a>. In this tutorial, we'll also use JavaScript and some sprites to create a simple walk cycle animation that responds forwards and backwards to the user's scrolling. By the end of this tutorial, we'll have a character walking through a parallax environment, transforming from human to zombie.</p>

<p>First, you'll need to download a few source files. I've provided some images from the Walking Dead project, as well as the needed .js files, and an HTML skeleton. <a href="0-tut-skeleton.zip">Grab those bad boys</a> and we'll get rolling.</p>

<h2>Phase 1 — Parallaxing Background</h2>

<p>We're going to create the first couple of parallaxing background layers by adding a few <code>&lt;div&gt;</code>s with some HTML5 <code>data-</code> attributes, a touch of CSS in our stylesheet, and we'll also call the <code>.init()</code> function on Skrollr in our main .js file. As you'll see in the code below, the parallaxing layers need to be the children of an element with the id 'skrollr-body'.  Some of the classes and IDs will seem excessive at first, but they'll make sense as we add more elements later in the tutorial.</p>

<h3>HTML:</h3>

<pre><code>
&lt;div id=&quot;skrollr-body&quot;&gt;
	&lt;div id=&quot;Scene&quot;&gt;
      &lt;div id=&quot;bg1&quot; class=&quot;parallax-layer&quot;
data-0=&quot;left:0px;&quot;
data-5000=&quot;left:-1000px;&quot;&gt;
&lt;/div&gt;
      &lt;div id=&quot;bg2&quot; class=&quot;parallax-layer&quot;
data-0=&quot;left:0px;&quot;
data-5000=&quot;left:-2500px;&quot;&gt;
&lt;/div&gt;
      &lt;/div&gt;
&lt;/div&gt;
</code></pre>


<p>The magic we're about to witness is all in the data- attributes. When Skrollr is called, it will sift through all the elements within <code>#skrollr-body</code>, and will render the appropriate animations based on those attributes. The number connected to the data attribute corresponds with the number of pixels the user has scrolled, and the value of the attribute is the style the element will have at that position. In <code>#bg1</code> above, we're telling Skrollr we'd like it to animate the div by shifting it 1,000 pixels to the left as the user scrolls from the top of the page <code>(data-0)</code> to 5,000 pixels down the page <code>(data-5000)</code>. At those supplied values, Skrollr will move the div approximately 1 pixel to the left for every 5 pixels the user scrolls. This animation will occur forwards and backwards, so the user can scroll either direction and Skrollr will render it properly.</p>

<p>Based on the values supplied in the <code>data-*</code> attributes of <code>#bg2</code>, you can see we're moving it at a much faster rate—1 pixel to the left for every 2 pixels scrolled, hence creating the illusion of 3D space. Before running this though, we need to add some CSS to pull in and properly frame our images, and then also issue the Skrollr initialization call.</p>

<h3>CSS:</h3>

<pre><code>
* we want the scene to be vertically centered in a 700px tall frame */
#Scene{
	position: fixed;
	width: 100%;
	height: 700px;
	margin-top: -350px;
	top: 50%;
}

.parallax-layer{
	position: absolute;
	height: 700px;
	background-repeat: no-repeat;
}

#bg1{
	background: url(&#39;../images/bg-1.jpg&#39;);
	width: 3528px;
}

#bg2{
	background: url(&#39;../images/bg-2.png&#39;) left bottom;
	width: 4368px; /* these images are big… but worth it. */
}
</code></pre>

<h3>JavaScript:</h3>

<pre><code>
skrollr.init();

// we'll be doing more here later, so I'd keep this in a separate file… but you don't necessarily have to.
</code></pre>

<p>Viola! <a href="1-tut-afterPhase1.zip">We have parallax!</a></p>

<h2>Phase 2 — Foreground Elements</h2>

<p>Next, we're going to add some elements to the foreground: an extra layer of clouds, the sun, a schoolhouse (which we'll use to hide the character during the transformation from human to zombie) and the character himself.</p>

<p>First, let's add the second layer of clouds. We'll have it slide across the screen at the same pace as <code>#bg2</code>, so we can just add it within that div and it will inherit the same animation (which is based on absolute positioning) just as an inner div would normally inherit the CSS positioning of its parent.</p>

<h3>HTML:</h3>

<pre><code>
&lt;div id=&quot;bg2&quot; class=&quot;parallax-layer&quot;
data-0=&quot;left:0px;&quot;
data-5000=&quot;left:-2500px;&quot;&gt;
	&lt;div id=&quot;cloud&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>


<h3>CSS:</h3>
<pre><code>
#cloud{
	position:absolute;
	background:url(&#39;../images/clouds.png&#39;);
	width:2059px;
	height:347px;
}
</code></pre>

<p>Now we'll add the schoolhouse and the pre-zombie character. We'll have the schoolhouse travel slightly faster than <code>#bg2</code>, and because of the perspective it was drawn at, we're going to slice it into a top and a bottom layer and put the zombie in between them so it appears that he is passing through the doorway.</p>

<h3>HTML:</h3>

<pre><code>
&lt;div class=&quot;parallax-layer&quot;&gt;
&lt;div id=&quot;schoolunder&quot; class=&quot;school&quot;
data-0=&quot;left:2000px;&quot;
data-5000=&quot;left:-1500px;&quot;&gt;
&lt;/div&gt;
&lt;div id=&quot;zombie&quot;&gt;&lt;/div&gt;
&lt;div id=&quot;schoolover&quot; class=&quot;school&quot;
data-0=&quot;left:2000px;&quot;
data-5000=&quot;left:-1500px;&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre>

<h3>CSS:</h3>

<pre><code>
#zombie{
	position:absolute;
	background-image:url(&#39;../images/zombify.png&#39;);
	width:250px;
	height:190px;
	top:340px;
	left:300px;
/* the character will stay stationary at 300px from the left of the screen, and the background will slide across the screen, like your classic side-scrolling platform game */
}

.school{
	position:absolute;
	width:600px;
	height:523px;
	top:100px;
}

#schoolunder{background:url(&#39;../images/school_under.png&#39;);}
#schoolover{background:url(&#39;../images/school_over.png&#39;);}
</code></pre>

<p>For now, our character will just look like he's ice-skating through the scene, but we'll add the walk cycle and zombie transformation shortly. Before that though, let's add the sun image. We'll use 5 data attributes to give it a smooth rising and setting animation. This element will live right in between <code>#bg1</code> and <code>#bg2</code>, so that it's on top of the sky background but passes behind the foreground elements.</p>

<h3>HTML:</h3>

<pre><code>
&lt;div id=&quot;bg1&quot; class=&quot;parallax-layer&quot;
data-0=&quot;left:0px;&quot;
data-5000=&quot;left:-1000px;&quot;&gt;
&lt;/div&gt;

&lt;div id=&quot;sun&quot;
data-0=&quot;top:200px;&quot;
data-2000=&quot;top:25px;&quot;
data-3000=&quot;top:0px;&quot;
data-4000=&quot;top:25px;&quot;
data-5000=&quot;top:50px;&quot;&gt;
&lt;/div&gt;

&lt;div id=&quot;bg2&quot; class=&quot;parallax-layer&quot;
data-0=&quot;left:0px;&quot;
data-5000=&quot;left:-2500px;&quot;&gt;
&lt;/div&gt;
</code></pre>

<h3>CSS:</h3>
<pre><code>
#sun{
	position:absolute;
	background:url(&#39;../images/sun.png&#39;);
	width:194px;
	height:194px;
	left:180px;
}
</code></pre>

<p>You can <a href="2-tut-afterPhase2.zip">check out the progress we have achieved so far</a>. It's pretty nice, but we need to add more polish.</p>

<h2>Phase 3 — Walk Cycle (&amp; Zombification)</h2>

<p>Now it's time to give our character some life. I've provided a .png sprite with all of the necessary frames for our character's walk cycle, first as a human, and then as a zombie. We're going to write some JavaScript to cycle through these frames in our background image, based on the user's scrolling. We'll have it work forwards and backwards, which should give the piece a very game-like feel.</p>

<p><img src="zombifysprites-resized.jpg" alt="Sprite showing zombification" /></p>

<p>While it would be possible to have Skrollr animate the background image using <code>data-*</code> attributes, that would require us to write dozens of them, so instead we'll write our own function. This will give us a little more flexibility, and obviously make the code a lot more maintainable. When we call <code>skrollr.init()</code> we'll pass our function in as a parameter, specifically as the <code>beforerender</code> listener function, which is automatically called right before Skrollr renders each frame of animations. (You can read more about <code>beforerender</code> and Skrollr's other options in the docs.) <code>beforerender</code> is passed an object with a property called <code>curTop</code> that will be especially helpful for us, as it contains the current scroll top offset, or in other words, the number of pixels the user has scrolled from the top of the page. We'll use this to determine if we need to shift to the next or previous sprite in our background image, or if it is time to transition from human to zombie.</p>

<p>We'll work on the walk cycle functionality first, and then add in the human to zombie transformation:</p>

<h3>JavaScript:</h3>

<pre><code>
/***
 * zombie - reference to the div containing the character
 * pLocs – array of pixel locations of the left edge of each frame in our
 *         spritesheet
 * curFrm - holds the index of the current walk cycle frame in pLocs
 * lastStep - will hold the location of the last time we shifted the
 *            background image to reveal the next/previous frame
 ***/

var zombie = $(&#39;#zombie&#39;),
    pLocs = [0, -250, -500, -750, -1000, -1250, -1500]
    curFrm = 0,
    lastStep=0;

skrollr.init({
	beforerender: function(o){
//if the user has scrolled 50 pixels down since the last time we shifted the background image, we must be moving forward, so move to the next frame in the spritesheet
		if(o.curTop &gt; lastStep + 50){
			if (curFrm&gt;=6){curFrm=-1;}
			zombie.css(&#39;background-position&#39;, pLocs[curFrm++] + &#39;px 0px&#39;);
lastStep = o.curTop;
//if the user has scrolled 50 pixels up, we're moving backwards, so move to the previous frame
		}else if(o.curTop &lt; lastStep - 50){
			if (curFrm&lt;=0){curFrm=7;}
zombie.css(&#39;background-position&#39;, pLocs[curFrm--] + &#39;px 0px&#39;);
			lastStep = o.curTop;
}
	}
});
</code></pre>

<p>Fantastic! The difficult part is out of the way, and our man is now walking. Now only one step remains… the ZOMBIE TRANSFORMATION!</p>

<p>It may not be entirely true to <em>The Walking Dead</em>, but in this project the mode of zombie transformation for our character will be zombie school. Programmatically, the process is relatively painless. The frames for both walk cycles have been included in the same image, one stacked on top of another, so we simply need to bump up the background image positioning of <code>#zombie</code> 190 pixels when the user has scrolled to the point where the school passes over the character. In addition, because the zombie walk cycle is only 4 frames long (as opposed to 7 frames for the human walk cycle), we'll need to make a few slight tweaks to the code that handles the walk cycle to make it a bit more flexible. The changes below are in bold.</p>

<h3>JavaScript:</h3>

<pre><code>
var zombie = $(&#39;#zombie&#39;),
	pLocs = [0, -250, -500, -750, -1000, -1250, -1500],
	curFrm = 0,
	lastStep=0,
	animationCycle, backPosY; //we need just a couple extra variables


skrollr.init({
	beforerender: function(o){

// if the user has scrolled less than 2,800 pixels from the top our character should be human, otherwise… he's turned.
if(o.curTop &lt; 2800){
			animationCycle=7;
			backPosY= &#39;0px&#39;;
		}else{
			animationCycle=4;
			backPosY= &#39;-190px&#39;;
		}

		if(o.curTop &gt; lastStep + 50){
			if (curFrm&gt;=animationCycle-1){curFrm=-1;}
			zombie.css(&#39;background-position&#39;, pLocs[++curFrm] + &#39;px &#39; + backPosY);
			lastStep=o.curTop;
		}else if(o.curTop &lt; lastStep - 50){
			if (curFrm&lt;=0){curFrm=animationCycle;}
			zombie.css(&#39;background-position&#39;, pLocs[--curFrm] + &#39;px &#39; + backPosY);
			lastStep = o.curTop;		}
	}
});
</code></pre>

<p>And that, my friends, is it. We now have a <a href="3-tut-finished.zip">game-style parallax scrolling piece</a>. Congrats! If you want to see a more polished version of it in the wild, then <a href="http://www.cabletv.com/the-walking-dead">check out our Walking Dead demo</a>.</p>

<h2>Conclusion</h2>

<p>We've obviously only just scraped the surface of what is possible with <a href="https://github.com/Prinzhorn/skrollr">Skrollr</a>, so I encourage you to read up on its many other nifty functions. There are some interesting things you can do, such as applying easing functions to your animations, using constants in combination with data attributes (great for code maintainability), or pulling keyframes entirely out of your markup and instead putting them in your CSS using Skrollr stylesheets.</p>

<p>To close, I'm going to hop up on my soapbox for a minute. Sometimes as web designers we feel like slaves to our medium — there are lots of limitations on the web, and lots of frustrating cross browser and cross device issues. At least being one who has worked in multiple mediums of design and development, I certainly feel that way sometimes. But there are also some very unique aspects in this browser-based medium of ours. For example, scrolling provides us with the opportunity to interact with users in different kinds of ways. In my opinion, we should take note of these unique properties, and always be searching for ways to fully leverage them to create great experiences.</p>
