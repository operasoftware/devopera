Title: JavaScript animation
----
Date: 2009-02-03 06:38:14
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/handling-events-with-javascript/" rel="prev" title="link to the previous article in the series">Previous article—Handling events with JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/graceful-degradation-progressive-enhancement/" rel="next" title="link to the next article in the series">Next article—Graceful degredation versus progressive enhancement</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>In this article, I will look at the art of creating animations using JavaScript — animation is often used to add to the user experience, for people using browsers than can support it. Common uses are things such as smoothly expanding and collapsing panels, progress bars, and visual feedback in forms.</p>

<p>As anyone who&#39;s seen a cartoon or a flickbook knows, animation is actually done in lots of small steps that make it look like something is moving. Animation is a powerful technique; it&#39;s good at grabbing attention. The flaw here is that it grabs attention whether you want it to or not. Animated effects can make a web app feel like a more consistent experience, but it&#39;s like hot chilli: don&#39;t add too much of it.</p>

<p>The contents of this article are as follows:</p>

<ul>
  <li><a href="#yellowfade">A simple example: yellow fade technique</a></li>
  <li><a href="#librariesanimation">Animation with JavaScript libraries</a></li>
  <li><a href="#csstransitions">CSS transitions</a></li>
  <li><a href="#motion">A more complex example: moving and changing size</a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="yellowfade">A simple example: yellow fade technique</h2>

<p>One common use of animation is the <a href="http://www.37signals.com/svn/archives/000558.php">Yellow fade technique</a>, where a changed area on a page is given a yellow background colour which then fades back to the background. It&#39;s a nice, unobtrusive way of highlighting that something has changed (eg more content has appeared, or some form feedback messages) without obstructing what the user is doing. <a href="yft_pure_js.html">Take a look at a yellow fade example</a> to see how it looks.</p>

<p>The principle behind the fade is that you set the background colour of your fading element to be yellow and then, in a series of steps, set it back to what it was originally. So if the original background colour was red, then the colour is set to yellow, then orangey-yellow, then orange, then reddish-orange, then red. The number of steps you take dictates how smooth the colour change is, and the time between steps dictates how long the total colour change takes. In changing colours, we can take advantage of a useful CSS fact: a colour can be defined as a triplet of ordinary numbers as well as a hexadecimal string. So <code>#FF0000</code> (red) can also be specified as <code>rgb(255,0,0)</code>. Changing from yellow to red in five steps, then, means going from <code>rgb(255,255,0)</code> (yellow) to <code>rgb(255,0,0)</code> in the following steps:</p>

<pre><code>rgb(255,255,0)
rgb(255,192,0)
rgb(255,128,0)
rgb(255,64,0)
rgb(255,0,0)</code></pre>

<p>You set the background colour of your element to <code>rgb(255,255,0)</code>, then after a period of time (say, 100 milliseconds), change the background colour to <code>rgb(255,192,0)</code>, and then after 100ms set the colour to <code>rgb(255,128,0)</code>, and so on:</p>

<table>
  <tr>
    <th>Colour</th>
    <th>Time</th>
  </tr>
  <tr>
    <td>rgb(255,255,0)</td>
    <td>0</td>
  </tr>
  <tr>
    <td>rgb(255,192,0)</td>
    <td>100ms</td>
  </tr>
  <tr>
    <td>rgb(255,128,0)</td>
    <td>200ms</td>
  </tr>
  <tr>
    <td>rgb(255,64,0)</td>
    <td>300ms</td>
  </tr>
  <tr>
    <td>rgb(255,0,0)</td>
    <td>400ms</td>
  </tr>
</table>

<p>The whole process takes 400ms (just under half a second), and there&#39;s a smooth fade between yellow and red. Conveniently here we&#39;re only changing one part of the colour (the green channel; the three parts of an rgb colour are the red, green, and blue channels), but changing more than one channel at once is perfectly possible. In this example, you&#39;re changing the green channel from 255 to 0 in four steps, which means changing it by 64 in each step.</p>

<p>Triggering an action after a certain period of time is done in JavaScript with the <code>setTimeout</code> and <code>setInterval</code> functions. The <code>setTimeout</code> function runs your action once after a certain time delay; <code>setInterval</code> runs the action over and over again, with each instance separated by the time delay; this is ideal for animation. In essence, then, the way to do this fade is to work out what each of the steps are and then use <code>setInterval</code> to call them, one after another. The <code>setInterval</code> function takes two parameters: a function to call as your action, and the time delay in milliseconds.</p>

<p>Obviously, you don&#39;t want to always change from yellow to red, so the function needs to be generic. If you know the start and end colours and the number of steps then it&#39;s a matter of mathematics to work out how much to change each colour by in each step. If you define a <code>startcolour</code> array as a list of three numbers (<code>[255,255,0]</code>) and <code>endcolour</code> as a similar list (<code>[255,0,0]</code>), then the amount to change each colour by in each step is:</p>

<pre><code>var red_change = (startcolour[0] - endcolour[0]) / steps;
var green_change = (startcolour[1] - endcolour[1]) / steps;
var blue_change = (startcolour[2] - endcolour[2]) / steps;</code></pre>

<p>So, use <code>setInterval</code> to change the background colour of the element in steps:</p>

<pre><code>var currentcolour = [255,255,0];
var timer = setInterval(function(){
    currentcolour[0] = parseInt(currentcolour[0] - red_change);
    currentcolour[1] = parseInt(currentcolour[1] - green_change);
    currentcolour[2] = parseInt(currentcolour[2] - blue_change);
    element.style.backgroundColor = &#39;rgb(&#39; + currentcolour.toString() + &#39;)&#39;;
}, 50);</code></pre>

<p>In each step, take <code>currentcolour</code> and change the red channel by amount <code>red_change</code>, the green channel by amount <code>green_change</code>, and the blue channel by amount <code>blue_change</code>. Then, set the actual background colour of the element to the new colour: <code>[255,255,0].toString()</code> is &quot;255,255,0&quot;, so to get the colour <code>rgb(255,255,0)</code> we use <code>toString()</code> to create <code>rgb(255,255,0)</code> and set that as the background colour of the element.</p>

<p>However, <code>setInterval</code> will call your action functon indefinitely; it won&#39;t stop when the destination colour is reached. To stop an interval, use <code>clearInterval()</code>; the following code counts the number of times that the action has been called and clears the interval after the correct number of steps:</p>

<pre><code>var currentcolour = startcolour;
var stepcount = 0;
var timer = setInterval(function(){
    currentcolour[0] = parseInt(currentcolour[0] - red_change);
    currentcolour[1] = parseInt(currentcolour[1] - green_change);
    currentcolour[2] = parseInt(currentcolour[2] - blue_change);
    element.style.backgroundColor = &#39;rgb(&#39; + currentcolour.toString() + &#39;)&#39;;
    stepcount += 1;
    if (stepcount &gt;= steps) {
        element.style.backgroundColor = &#39;rgb(&#39; + endcolour.toString() + &#39;)&#39;;
        clearInterval(timer);
    }
}, 50);</code></pre>
 
<p>And that&#39;s how you do animation: one step at a time.</p>

<p>How do <code>startcolour</code> and <code>endcolour</code> get set? One easy way is to wrap the above code up in a <code>fade</code> function:</p>

<pre><code>fade: function(element, startcolour, endcolour, time_elapsed) {
   <em>...code from above...</em>
}</code></pre>

<p>and then you can trigger the yellow fade on an element with a function call like:</p>

<pre><code>fade(document.getElementById(&quot;yft&quot;), [255,255,60], [0,0,255], 750);</code></pre>

<p>or a &quot;red fade&quot;, which sets the element to red and then fades to blue (the element&#39;s background colour), like:</p>

<pre><code>fade(document.getElementById(&quot;yft&quot;), [255,0,0], [0,0,255], 750);</code></pre>

<p>This example changed the background colour, but it could be anything that&#39;s changed: foreground colour (for eye-pulsing 1960s psychedelic text effects), opacity (to make something fade out or fade in), position (to make an element move around the page), height and width (to grow an element, or shrink it down to nothing before it disappears).</p>

<h2 id="librariesanimation">Animation with JavaScript libraries</h2>

<p>Animation is a commonly used effect, and so most JavaScript libraries have some sort of support for it, including in-built support for common animations. For example, <a href="http://jquery.com/">jQuery</a> has built-in support for making an element fade to transparent:</p>

<pre><code>$(&quot;#myelement&quot;).fadeOut();</code></pre>

<p>and an <code>animate()</code> function for more complicated custom work:</p>

<pre><code>$(&quot;#block&quot;).animate({ 
    width: &quot;70%&quot;,
}, 1500 );</code></pre>

<p>This is pretty intuitive - it will take the element and change the CSS <code>width</code> attribute, over 1500 milliseconds, from whatever it is now to 70% - the <a href="http://docs.jquery.com/Effects"><code>animate</code> function is documented here</a>.</p>

<p><a href="http://script.aculo.us/">Prototype&#39;s scriptaculous framework</a> offers similar facilities, such as <code>Effect.Fade(&#39;id_of_element&#39;)</code>, and many, many others. The <a href="http://yuilibrary.com/">YUI library can also do similar effects</a>:</p>

<pre><code>new Y.Anim({ node: &#39;#demo&#39;, to: { width: 70%, }}).run();</code></pre>

<p>If you&#39;ve already used a JavaScript library in your code, you&#39;ll already know that they offer much simpler animation facilities than managing animations yourself with <code>setInterval</code>. However, I think it is important to understand what is going on under the hood - it will make your scripting skills stronger in the long run. This is why I went through an example from first principles before getting into libraries.</p>

<p class="note">You can find more resources about using the different JavaScript libraries at the dev.opera.com <a href="http://dev.opera.com/articles/view/introduction-to-javascript-toolkits/">Introduction to JavaScript toolkits</a>.</p>

<h2 id="motion">A more complex example: moving and changing size</h2>

<p>While the Yellow Fade Technique does demonstrate animation, it&#39;s a bit, well, boring. When most people think of animation they think of <em>movement</em>. Wile E. Coyote would have been way less amusing if all he ever did was change colour.</p>

<p>A nice trick to alert the user to something that&#39;s happened without interrupting their workflow is a <em>non-modal message</em>. Instead of popping up an <code>alert()</code> dialog, which requires the user to click OK before they can carry on, simply put the message in a floating div on the page which unobtrusively stays there until they acknowledge it. A second rather nice thing, then, might be to allow the user to get back the message that they acknowledged to read it again. So, let&#39;s implement a floating message that, when clicked, &quot;zooms&quot; off to the corner of the screen, and then can be clicked on again to get it back. You can see a <a href="moving_messages_jq.html">brief demo of this &quot;zooming message&quot;</a> to get the idea.</p>

<p>If you&#39;re doing any serious animation work, or any serious JavaScript work, it will almost always be worth using a JavaScript library. This will allow you to get on with providing the user experience that you want without having to worry about the nitty-gritty of the math required to run the animations. (You know <em>how</em> to do the math and how to use <code>setInterval</code> now, having read through the first example above, but you&#39;ll save time and brain-cells letting someone else do the heavy lifting for you.)</p>

<p>The above demo uses the <a href="http://jquery.com/">jQuery</a> library to do the work, but as mentioned most libraries provide a fairly similar concept of animation and so you should be able to re-implement the principle using the library that you prefer. In essence, we want to do the following:</p>

<ol>
  <li>Show a floating message centered on the screen</li>
  <li>When it&#39;s clicked on:
    <ol>
      <li>Move its horizontal position to the far right</li>
      <li>Move its vertical position to the top</li>
      <li>Change its width to 20px wide</li>
      <li>Change its height to 20px high</li>
      <li>Change its opacity to 20% so it&#39;s nearly transparent</li>
    </ol>
    and hide the text in it</li>
  <li>When this &quot;mini&quot; version of the message is clicked, bring it back to the centre of the screen (ie, the opposite of what we did to shrink it)</li>
</ol>

<p>and so the user gets a clear picture of what&#39;s happened to their message, the transition from full-sized message to mini-message should be animated (so they see that their message has &quot;shrunk&quot; into the corner of the window).</p>

<p>Performing the animation with jQuery is simple: just use the <code>.animate()</code> function and provide what you want the end result of the animation to be (and how long you want it to take):</p>

<pre><code>$(ourObject).animate({
    width: &quot;20px&quot;, height: &quot;20px&quot;, top: &quot;20px&quot;,
    right: &quot;20px&quot;, marginRight: &quot;0px&quot;, opacity: &quot;0.2&quot;
  }, 300);</code></pre>

<p>which will take <code>ourObject</code> and, over 300 milliseconds, change its width and height to 20px, its top and right positions to 20px, its <code>margin-right</code> style property to 0px, and its opacity (in browsers that support opacity) to 20%. It&#39;s then just a matter of programming in jQuery style to make this animation happen when the message is clicked:</p>

<pre><code>$(ourObject.click, function(){
  $(this).animate({
    width: &quot;20px&quot;, height: &quot;20px&quot;, top: &quot;20px&quot;,
    right: &quot;20px&quot;, marginRight: &quot;0px&quot;, opacity: &quot;0.2&quot;
  }, 300)
});</code></pre>

<p>Restoring the message when clicked on again just requires another <code>.animate()</code> call:</p>

<pre><code>$(ourObject).animate({
    width: &quot;400px&quot;, height: &quot;75px&quot;, top: &quot;50px&quot;,
    right: &quot;50%&quot;, marginRight: &quot;-200px&quot;, opacity: &quot;0.9&quot;
  }, 300);</code></pre>

<p>and with a little bit of logic to dictate whether the message is currently showing or shrunk (so you know which animation to run), and some CSS to describe the initial style of the message (large, green, horizontally centred), that&#39;s all that&#39;s needed. A mere thirty lines of script. This is why libraries are a good idea!</p>

<h2 id="csstransitions">CSS Transitions</h2>

<p>Finally, some (not all) animations can actually be set up without any JavaScript at all! Safari and other Webkit-based browsers, and the upcoming Firefox 3.1, can perform transitions from one CSS value to another smoothly without using any JavaScript. This code:</p>

<pre><code>div { opacity: 1; -webkit-transition: opacity 1s linear; }
div:hover { opacity: 0; }</code></pre>

<p>will make the <code>div</code> smoothly fade out over one second in a supporting browser when it is hovered over. These CSS transitions are very new, however, and are not supported in anything but the most up-to-date browsers, so if you want your animation to work for most of your public then you&#39;ll need to use DOM scripting to do it.</p>

<h2 id="summary">Summary</h2>

<p>This concludes our look at animating web page functionality using JavaScript - I&#39;ve taken you through some animation examples created from first principles using the <code>setTimeout</code> and <code>setInterval</code> functions, and then looked at how you can use JavaScript libraries to create animations more quickly.</p>

<h2 id="exercises">Exercise questions</h2>

<ol>
  <li>What&#39;s the difference between <code>setTimeout</code> and <code>setInterval</code>?</li>
  <li>If <code>setInterval</code> didn&#39;t exist, how could you emulate it?</li>
  <li>How would you make an element fade from fully visible to fully invisible in 20 steps over the course of 1.5 seconds?</li>
  <li>How would you make an element fade from fully visible to fully invisible <em>and then back to visible again</em> in 20 steps over the course of 1.5 seconds?</li>
</ol>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/handling-events-with-javascript/" rel="prev" title="link to the previous article in the series">Previous article—Handling events with JavaScript</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/graceful-degradation-progressive-enhancement/" rel="next" title="link to the next article in the series">Next article—Graceful degredation versus progressive enhancement</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<p><img alt="Picture of the article author Stuart Langridge" src="http://forum-test.oslo.osa/kirby/content/articles/236-50-javascript-animation/stuartlangridge.jpg" class="right" /></p>


<p>Stuart Langridge is quite possibly the only person in the world to
have a BSc in Computer Science and Philosophy. When he&#39;s not fiddling
about with computers, he&#39;s a JavaScript, Django, and Python hacker at
<a href="http://www.gcapmedia.com">GCap Media</a>, author of SitePoint&#39;s <a href="http://www.sitepoint.com/books/dhtml1/">DHTML Utopia</a>, and a drinker of
decent beers. He&#39;s also one-quarter of the team at <a href="http://lugradio.org/presenters/">LugRadio</a>, the
world&#39;s premiere Free and Open Source Software radio show. His
ramblings about the web, scripting, open source software, and whatever
else floats past the window are to be found at <a href="http://kryogenix.org">kryogenix.org</a>; Stuart
is to be found outside looking for the smoking area.</p>
