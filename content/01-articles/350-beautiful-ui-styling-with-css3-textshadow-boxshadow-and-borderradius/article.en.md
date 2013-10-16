Title: Beautiful UI styling with CSS3 text-shadow, box-shadow, and border-radius
----
Date: 2010-04-27 11:14:41
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Introduction</h2>

<p>Previous articles have covered the basics of <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/">CSS3 transitions and 2D transforms</a> and <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow/">CSS3 borders, backgrounds and box-shadows</a>; refer to those articles if you need to read up on the basics of using these properties.</p>

<p>This article takes things further, showing how to use these properties to create beautiful UI elements <strong>without</strong> the use of any images, JavaScript or Flash. This last line highlights the real beauty of CSS3 — many of its features are designed to save you time otherwise spent creating and updating graphics in Photoshop. It makes techniques such as drop shadows and animated UI elements accessible to web developers and designers without scripting smarts or <q>mad Photoshop skills</q>.</p>

<h2>Contents:</h2>

<ul>
  <li><a href="#whereapplied">Where can they be applied?</a></li>
  <li><a href="#buttons">Take 1: Buttons</a>
    <ul>
      <li><a href="#stageone">Stage 1: The basic shape</a></li>
      <li><a href="#stagetwo">Stage 2: Adding some light and shadow</a></li>
      <li><a href="#stagethree">Stage 3: Adding text style</a></li>
      <li><a href="#redbutton">Variation 1: A red button</a></li>
      <li><a href="#twitterbutton">Variation 2: A Twitter-esque button</a></li>
      <li><a href="#downloadbutton">Variation 3: A download button</a></li>
    </ul>
  </li>
  <li><a href="#boxes">Take 2: Containing boxes</a>
    <ul>
      <li><a href="#surfbox">Box 1: Surf’s up</a></li>
      <li><a href="#ghostbox">Box 2: Ghosted grey</a></li>
      <li><a href="#glassbox">Box 3: They call me Mr. Glass</a></li>
    </ul>
  </li>
  <li><a href="#advanced">Take 3: Advanced examples</a>
    <ul>
      <li><a href="#mediaplayer">Media player</a></li>
      <li><a href="#phone">A certain phone home screen</a></li>
      <li><a href="#windowsdesktop">A Windows desktop</a></li>
    </ul>
  </li>
  <li><a href="#summary">Summary</a></li>
</ul>

<h2 id="whereapplied">Where can they be applied?</h2>

<p>Support for these CSS3 features was introduced in Opera 10.50, and you’ll also be able to rely on most of them in the latest versions of Firefox, Safari and Chrome.</p>

<table>
<tr>
<th></th><th>Opera 10.50</th><th>Opera 10.10</th><th>Safari 4.x</th><th>Chrome 4/5</th><th>Firefox 3.6</th><th>Internet Explorer 8 and below</th>
</tr>
<tr>
<th>Text-shadow</th><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td>
</tr>
<tr>
<th>Border-radius</th><td>Yes</td><td>No</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td>
</tr>
<tr>
<th>Box-shadow</th><td>Yes</td><td>No</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td>
</tr>
<tr>
<th>Box-shadow inset</th><td>Yes</td><td>No</td><td>No</td><td>Yes</td><td>Yes</td><td>No</td>
</tr>
</table>

<p>Of course, in the <q>real</q> web most of us are stuck having to support Internet Explorer, which doesn’t yet support any of these properties. The best place to use them is therefore an environment where you can control what browser will be used. A prime example here is <a href="http://widgets.opera.com">Opera Widgets</a>, which run on the Opera core engine and therefore include modern browser features. An intranet is also a good example, so long as you can get your staff or society members all using a good modern browser!</p>

<p>For the Web at large, however, all is not lost. These properties degrade gracefully in browsers that don’t support them, meaning that you’ll still get a usable UI, even if it doesn’t look as hot. You can also provide fallbacks for browsers that don’t support these properties, for example using <a href="http://dev.opera.com/articles/view/supporting-ie-with-conditional-comments">IE conditional comments</a>.</p>

<p>It is really a matter of who your target audience is, and providing an acceptable user experience to them. This does not necessarily mean <em>the same</em> user experience for all web users.</p>

<p class="note">One thing to be aware of is that using a lot of <code>box-shadow</code> properties is expensive in terms of processing — especially when you make heavy use of blurring. If you want to use these effects in your Widgets and web applications, you should test carefully, especially on mobile and other lower-power devices as they start to support these features.</p>

<h2 id="buttons">Take 1: Buttons</h2>

<p>One of the most obvious applications of these properties is to simplify button design. Todays buttons are typically created in a particular pattern. The button usually has rounded corners. Light comes from the top, and shadow appears below the button. Often there is a <q>glass shine</q> effect on the button itself. The text is often white (or another light colour) with a dark drop shadow, or vice-versa, to give an embossed or raised effect. Let’s now go through some examples of what is possible, starting with a step-by-step button construction.</p>

<h3 id="stageone">Stage 1: The basic shape</h3>

<p>First up, I’ll set a basic core colour for the button, and give it rounded corners:</p>

<pre><code>button {
   border: none;
   padding: 5px 30px;
   border-radius: 4px;
   background: lightgreen;
}</code></pre>

<p>The result of this code is as follows:</p>

<p><button style="border: none; padding: 5px 30px; background-color: lightgreen; border-radius: 4px">Test</button></p>

<h3 id="stagetwo">Stage 2: Adding some light and shadow</h3>

<p>Next I’ll add two box shadows to the button, to make it look 3D: raised up, and slightly convex on top:</p>

<pre><code>button {
   border: none;
   padding: 5px 30px;
   border-radius: 4px;
   background: lightgreen;
   box-shadow: inset 0 5px 10px yellow, 0 1px 1px green;
   -o-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green;
   -webkit-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green;
   -moz-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green;
}</code></pre>

<p>Here’s the result of this addition:</p>

<p><button style="border: none; padding: 5px 30px; background-color: lightgreen; border-radius: 4px; box-shadow: inset 0 5px 10px yellow, 0 1px 1px green; -o-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green; -webkit-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green; -moz-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green">Test</button></p>

<h3 id="stagethree">Stage 3: Adding text style</h3>

<p>Finally, I’ll give the button text a more fitting colour, and give it a lighter drop shadow to make it look slightly embossed:</p>

<pre><code>button {
   border: none;
   padding: 5px 30px;
   border-radius: 4px;
   background: lightgreen;
   box-shadow: inset 0 5px 10px yellow, 0 1px 1px green;
   -o-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green;
   -webkit-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green;
   -moz-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green;
   color: darkgreen;
   text-shadow: 0 1px 1px lightyellow;
}</code></pre>

<p>Here is our final result:</p>

<p><button style="border: none; background-color: lightgreen; padding: 5px 30px; border-radius: 4px; box-shadow: inset 0 5px 10px yellow, 0 1px 1px green; -o-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green; -webkit-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green; -moz-box-shadow: inset 0 5px 10px yellow, 0 1px 1px green; color: darkgreen; text-shadow: 0 1px lightyellow;">Test</button></p>

<h3 id="redbutton">Variation 1: A red button</h3>

<pre><code>button{
   border: 1px solid maroon;
   background-color: red;
   border-radius: 4px;
   box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black;
   -o-box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black;
   -webkit-box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black;
   -moz-box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black;
   color: white;
   text-shadow: 0 1px 1px black;
   padding: 5px 30px;
}</code></pre>

<p>The result is as follows:</p>

<p><button style="border: 1px solid maroon; background-color: red; border-radius: 4px; box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black; -o-box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black; -webkit-box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black; -moz-box-shadow: inset 0 1px 3px pink, inset 0 -5px 15px maroon, 0 2px 1px black; color: white; text-shadow: 0 1px 1px black; padding: 5px 30px;">Test</button></p>


<h3 id="twitterbutton">Variation 2: A Twitter-esque button</h3>

<pre><code>button{
   border: 1px solid #8ec1da;
   background-color: #ddeef6;
   border-radius: 4px;
   box-shadow: inset 0 1px 3px #fff, inset 0 -15px #cbe6f2, 0 0 3px #8ec1da;
   -o-box-shadow: inset 0 1px 3px #fff, inset 0 -15px #cbe6f2, 0 0 3px #8ec1da;
   -webkit-box-shadow: inset 0 1px 3px #fff, inset 0 -15px #cbe6f2, 0 0 3px #8ec1da;
   -moz-box-shadow: inset 0 1px 3px #fff, inset 0 -15px #cbe6f2, 0 0 3px #8ec1da;
   color: #3985a8;
   text-shadow: 0 1px #fff;
   padding: 5px 30px;
}</code></pre>

<p>This looks like so:</p> 

<p><button style="border: 1px solid #8ec1da; background-color: #ddeef6; border-radius: 4px; box-shadow: inset 0 1px 3px #fff, inset 0 -15px #cbe6f2, 0 0 3px #8ec1da; -o-box-shadow: inset 0 1px 3px #fff, inset 0 -15px #cbe6f2, 0 0 3px #8ec1da; -webkit-box-shadow: inset 0 1px 3px #fff, inset 0 -15px #cbe6f2, 0 0 3px #8ec1da; -moz-box-shadow: inset 0 1px 3px #fff, inset 0 -15px #cbe6f2, 0 0 3px #8ec1da; color: #3985a8; text-shadow: 0 1px #fff; padding: 5px 30px;">Test</button></p>


<h3 id="downloadbutton">Variation 3: A download button:</h3>

<pre><code>button {
border: 1px solid darkgreen;
background-color: green;
border-radius: 4px;
box-shadow: inset 1px 6px 12px lightgreen, inset -1px -10px 5px darkgreen, 1px 2px 1px black;
-o-box-shadow: inset 1px 6px 12px lightgreen, inset -1px -10px 5px darkgreen, 1px 2px 1px black;
-webkit-box-shadow: inset 1px 6px 12px lightgreen, inset -1px -10px 5px darkgreen, 1px 2px 1px black;
-moz-box-shadow: inset 1px 6px 12px lightgreen, inset -1px -10px 5px darkgreen, 1px 2px 1px black;
color: white;
text-shadow: 1px 1px 1px black;
padding: 5px 30px;
}</code></pre>

<p>This gives us the following result:</p>

<p><button style="border: 1px solid darkgreen; background-color: green; border-radius: 4px; box-shadow: inset 1px 6px 12px lightgreen, inset -1px -10px 5px darkgreen, 1px 2px 1px black; -o-box-shadow: inset 1px 6px 12px lightgreen, inset -1px -10px 5px darkgreen, 1px 2px 1px black; -webkit-box-shadow: inset 1px 6px 12px lightgreen, inset -1px -10px 5px darkgreen, 1px 2px 1px black; -moz-box-shadow: inset 1px 6px 12px lightgreen, inset -1px -10px 5px darkgreen, 1px 2px 1px black; color: white; text-shadow: 1px 1px 1px black; padding: 5px 30px;">Test</button></p>

<h2 id="boxes">Take 2: Containing boxes</h2>

<p>Another obvious use of these properties is to style containing boxes in UIs — the areas that contain your buttons, form fields, and other interactive application features. As before, I will go through a few examples to help fire up your creativity!</p>

<h3 id="surfbox">Box 1: Surf’s up</h3>

<p>This is a blue box with some cyan highlights and a light drop shadow.</p>

<pre><code>div {
   width: 100px;
   height: 100px;
   margin: 10px;
   padding: 0;
   background: #6fb2e5;
   box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
   -o-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
   -webkit-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
   -moz-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
}</code></pre>

<p>Here is the result:</p>

<div style="width: 100px;height: 100px;margin: 10px;padding: 0;background: #6fb2e5;box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff; -o-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff; -webkit-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff; -moz-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;"></div>

<h3 id="ghostbox">Box 2: Ghosted grey</h3>

<p>In this case, the effect is obtained with creative use of an inner shadow.</p>

<pre><code>div {
   width: 100px;
   height: 100px;
   margin: 10px;
   padding: 0;
   background: #ccc;
   box-shadow: 8px 10px 10px rgba(0,0,0,0.5),
   inset 8px 10px 10px rgba(255,255,255,0.75);
   -o-box-shadow: 8px 10px 10px rgba(0,0,0,0.5),
   inset 8px 10px 10px rgba(255,255,255,0.75);
   -webkit-box-shadow: 8px 10px 10px rgba(0,0,0,0.5),
   inset 8px 10px 10px rgba(255,255,255,0.75);
   -moz-box-shadow: 8px 10px 10px rgba(0,0,0,0.5),
   inset 8px 10px 10px rgba(255,255,255,0.75);
}</code></pre>

<p>This gives us the following effect:</p>

<div style="width: 100px;height: 100px;margin: 10px;padding: 0;background: #ccc;box-shadow: 8px 10px 10px rgba(0,0,0,0.5), inset 8px 10px 10px rgba(255,255,255,0.75); -o-box-shadow: 8px 10px 10px rgba(0,0,0,0.5), inset 8px 10px 10px rgba(255,255,255,0.75); -webkit-box-shadow: 8px 10px 10px rgba(0,0,0,0.5), inset 8px 10px 10px rgba(255,255,255,0.75); -moz-box-shadow: 8px 10px 10px rgba(0,0,0,0.5), inset 8px 10px 10px rgba(255,255,255,0.75);"></div>

<h3 id="glassbox">Box 3: They call me Mr. Glass</h3>

<p>Here I’ve applied rgba colours to the shadows, so most of this box is semi-transparent. I have added a second <code>div</code> around the first one with a repeating background pattern image applied to it, so you can appreciate the full extent of this effect.</p>

<pre><code>div {
   width: 100px;
   height: 100px;
   margin: 10px;
   padding: 0;
   border: 1px solid rgba(0,0,0,0.5);
   border-radius: 10px 10px 2px 2px;
   background: rgba(0,0,0,0.25);
   box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);
   -o-box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);
   -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);
   -moz-box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);
}</code></pre>

<p>Here’s the result:</p>

<div style="background-image:url(ru.png); width: 200px; height: 200px; position: relative;">
<div style="width: 100px;height: 100px; position: absolute; left: 35px; top: 35px;margin: 10px;padding: 0;border: 1px solid rgba(0,0,0,0.5);border-radius: 10px;background: rgba(0,0,0,0.25);box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.1), inset 0 10px 20px rgba(255,255,255,0.3), inset 0 -15px 30px rgba(0,0,0,0.3); -o-box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3); -webkit-box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3); -moz-box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3);"></div>
</div>

<p>For more information on RGBa and HSLa colours, check out Molly Holzschlag’s article <a href="http://dev.opera.com/articles/view/color-in-opera-10-hsl-rgb-and-alpha-transparency/">Color in Opera 10 — HSL, RGB and Alpha Transparency</a></p>

<h2 id="advanced">Take 3: Advanced examples</h2>
<p>Hopefully you are completely blown away by the power of the new CSS properties by now, but just in case I have prepared some more examples! Figures 1-3 show what the examples look like, and you can also use the links to see them running live.</p>

<h3 id="mediaplayer">Media player</h3>

<img src="http://forum-test.oslo.osa/kirby/content/articles/350-beautiful-ui-styling-with-css3-textshadow-boxshadow-and-borderradius/css-media-player.png" alt="A screenshot of a CSS3 media player UI example" />
<p class="comment">Figure 1: The media player example.</p>

<p><a href="widgetstyling_mediaui.html">View the media player</a> running live.</p>

<h3 id="phone">A certain phone home screen</h3>

<img src="http://forum-test.oslo.osa/kirby/content/articles/350-beautiful-ui-styling-with-css3-textshadow-boxshadow-and-borderradius/css-phone-home-screen.png" alt="A screenshot of a CSS3 mobile phone UI example" />
<p class="comment">Figure 2: A rather nice phone UI created using just CSS3.</p>

<p><a href="widgetstyling_phone.html">View the phone UI example</a> running live.</p>

<h3 id="windowsdesktop">A Windows desktop</h3>

<img src="http://forum-test.oslo.osa/kirby/content/articles/350-beautiful-ui-styling-with-css3-textshadow-boxshadow-and-borderradius/css-windows-desktop.png" alt="A screenshot of a CSS3 Windows desktop-style UI example" />
<p class="comment">Figure 3: A Windows desktop-style UI.</p>

<p><a href="widgetstyling_win7.html">View the Windows desktop example</a> running live.</p>

<h2 id="summary">Summary</h2>

<p>This concludes our tour of some advanced UI effects, all created with CSS3 shadows and rounded corners — absolutely no images required. At Opera we’re pretty excited about having this functionality available, and hope you are as well — we look forward to seeing what you’ll create!</p>

<h2 id="readmore">Read more...</h2>
<ul>
  <li><a href="/articles/view/css3-border-background-boxshadow/">CSS3 borders, backgrounds and boxes</a></li>
  <li><a href="/articles/view/css-text-shadows-and-background-sizing/">CSS text shadows and background sizing</a></li>
</ul>                         
