---
title: 'Love Your Devices: Adaptive Web Design With Media Queries, Viewport and More'
authors:
- chris-mills
intro: 'In this article Chris Mills takes a look at techniques and technologies that we can adopt to create adaptive (or responsive) web sites, including percentage units, media queries and viewport. He also discusses some recent happenings in the area, such as considerations for display on tablet browsers, object-fit, and the `@viewport` CSS rule.'
layout: article
---
<h2>Introduction</h2>

<p>It's time again to reflect on happiness and well being: that of yourselves and the members of the public who consume the web content and services you create. Today we are going to talk about getting more satisfaction from battery-powered devices...</p>

<p>...no silly, I'm talking about the vast profusion of alternative browsing devices sweeping through our society like wildfire. A lot of us used to deal with support for mobile browsers with very short-sighted expressions of duality, such as completely separate mobile and desktop sites, or <code>handheld</code> media type stylesheets to provide separate styling to mobile. Or we'd detect the <abbr title="User Agent">UA</abbr> string and serve suitable content for the browser.</p>

<p>But designing for specific browsers hasn't been cool since IE and Netscape were slugging it out in the mid to late 90's, and it sucked even more back then because we pretty much had to create separate site versions if we wanted to support both contenders. Designing for specific platforms is not much better: these days it's not just mobile phones versus desktop any more — there are a vast number of portable devices of varying sizes in use, with different screen sizes, resolutions and other attributes.</p>

<p>What we need is a different way of thinking. We need to accept the inherent variability and unpredictability of the Web, and design sites that can breathe a little and adapt to such variations as resolution and screen size. This is generally called "adaptive design" or "responsive design": below I will explore some techniques for creating such sites, using technologies such as media queries and viewport, and techniques like sizing your UI using percentages.</p>

<p>Sit back and enjoy the ride.</p>

<h2>The tools of adaptive design</h2>

<p>The main tools we have for adaptive design are as follows, loosely speaking:</p>

<ul>
<li><strong>Fluid dimensions</strong>: Mainly fluid grids and images, achieved through percentages. We also have things like <code>object-fit</code>, a new CSS3 property that allows more control over how images are displayed.</li>
<li><strong>Media queries</strong>: Control layouts by selectively applying CSS depending on media attributes such as screen and browser width. We also have a new <code>media</code> attribute that you can use on the HTML5 video <code>&lt;source&gt;</code> element to serve tailored video files to say, narrow-screen devices that don't need or want huge videos.</li>
<li><strong>Viewport</strong>: Allows you to control how mobile devices display web apps. As well as the HTML-based viewport meta tag, Opera has also introduced a <code>@-o-viewport</code> CSS container to do the same thing inside CSS instead.</li>
</ul>

<p>We'll look at all these chunks of loveliness in more detail later on, but for now, let's introduce an example I've written to demonstrate all of this to you.</p>

<h2>Tantric obstacles - a psychedelic joyride</h2>

<p>I have always been a big fan of psychedelic imagery and music, so I went ahead and created a site called Tantric obstacles, named after an album by awesome psychedelic British band <a href="http://en.wikipedia.org/wiki/Ozric_Tentacles">The Ozric Tentacles</a>. Check out the <a href="http://people.opera.com/cmills/mediaquery/">Tantric Obstacles site</a>, and the accompanying <a href="http://people.opera.com/cmills/mediaquery/video.html">Tantric video page</a> running live before you read further. Garish? Obnoxious? I actually thought I was fairly restrained, given what I could've done with the psychedelic theme.</p>

<p>The site is written in HTML5, with a typical structure of <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code> bar, <code>&lt;section&gt;</code> elements for the different columns and <code>&lt;article&gt;</code> elements for the different image and video items. It is laid out using floats for the columns and articles, and mostly percentage dimensions, giving it ultra-flexibility. I have used very little CSS3, save for the media queries and Web Fonts, so it even looks ok in older IE versions (more on browser compatibility later on).</p>

<p>I have used a total of five media queries to provide reasonable layouts at different screen widths, and a viewport <code>&lt;meta&gt;</code> tag to make the display look better on small screen devices. The different layouts are as follows:</p>

<p><img src="layout1.jpg" alt="The standard layout before any media queries come into play"></p>
<p class="comment">Figure 1: The standard layout before any media queries come into play.</p>
<p><img src="layout2.jpg" alt="The standard layout before any media queries come into play"></p>
<p class="comment">Figure 2: The expanded widescreen layout, which kicks in when the browser width increases beyond 1500 pixels. You might want to instead set a max-width on your <code>&lt;body&gt;</code> content, depending on your situation. Just beware that lines of content don't get too long, as they become hard to read at wider widths.</p>
<p><img src="layout3.jpg" alt="The standard layout before any media queries come into play"></p>
<p class="comment">Figure 3: A narrower layout ideal for smaller resolution laptops and monitors, and tablets in landscape mode: it kicks in when the browser width gets below 1000 pixels.</p>
<p><img src="layout4.jpg" alt="The standard layout before any media queries come into play"></p>
<p class="comment">Figure 4: The first single column layout, which comes into action at a browser width of below 700 pixels. This might be good for tablets in portrait mode, perhaps?</p>
<p><img src="layout5.jpg" alt="The standard layout before any media queries come into play"></p>
<p class="comment">Figure 5: Identical to the last layout, but with the heading and navigation set to slightly less than 680 pixels wide, so that the layout doesn't break. Slightly cheaty, but it works.</p>
<p><img src="layout6.jpg" alt="The standard layout before any media queries come into play"></p>
<p class="comment">Figure 6: the narrowest layout, for smaller/typical mobile phones. It comes into play at 560 pixels or lower, and again makes the heading smaller so it will stay on one line, while changing the navigation to a 2 x 2 grid.</p>

<p class="note">You might think that this is a lot of media queries for one example, but I'm deliberately showing a fairly complex example, to illustrate what is possible. Each media query simply builds on and overrides what has come before it in the style sheet.</p>

<h2>Flexible layout units: fluid grids and fluid images</h2>

<p class="note">Note: throughout the article I've cut out the CSS rules and properties that aren't directly interesting to the immediate discussion, to make things clearer and cut down on space. Check out the live examples for the full code.</p>

<p>The premise behind flexible layout units is using percentages for your layout dimensions (such as column and image widths.) If I'm doing a fixed width layout, I usually set a specific percentage for the <code>font-size</code> (usually <a href="http://clagnut.com/blog/348/">Mr Rutter's magic 62.5%</a>), and then set all dimensions in ems, so the whole layout is manipulated proportionally to that size. However, recently I've started playing more and more with flexible layouts. In my psychedelic example, I have used the body as the wrapper for the page, and set margins to 0, plus a <code>min-width</code> so things don't break at really low widths when the media queries are put in place.

<pre><code>body {
  margin: 0;
  min-width: 320px;
}</code></pre>

<p class="note">Note that Firefox and Chrome automatically apply a minimum width to pages, even if you don't specify it in the CSS.</p>

<p>I have then floated the left and right columns left and right and given them percentage widths that total a little less than 100% to form a natural gutter in the middle:</p>

<pre><code>section#main {
  width: 33%;
  float: left;
  margin-left: 2%;
}

section#features {
  width: 62%;
  float: right;
  margin-bottom: 3%;
}</code></pre>

<p>This is mundane really, but things start to get more interesting when you look at using percentages for the different contents of the columns. The <code>&lt;article&gt;</code> elements that contain the "psychedelic features" are all floated left, meaning that they will fit comfortably across the width of the container, nearly regardless of what that width might be. In addition, I have set <code>max-width: 100%;</code> on the images, so they will never expand outside the width of their containers, even when the containers are reduced in width.</p>

<pre><code>article {
  float: left;
  width: 30%;
  height:22em;
  margin: 0 1% 0 1%;
}

img {
  max-width: 100%;
}</code></pre>

<p>The below screenshot illustrates what effect these rules have when the container width is reduced:</p>

<p><img src="layout7.jpg" alt="max-width means that the images always sit comfortably inside their containers"></p>
<p class="comment">Figure 7: <code>max-width</code> means that the images always sit comfortably inside their containers.</p>
<h3>object-fit</h3>

<p>If you look at the final live code, you'll see some additional properties present in the <code>img</code> rule:</p>

<pre><code>img {
  max-width: 100%;
  <strong>-o-object-fit: none;
  overflow: hidden;</strong>
}</code></pre>

<p><code>object-fit</code> is a CSS property introduced in the CSS3 <a href="http://dev.w3.org/csswg/css3-images/">CSS Image Values and Replaced Content module</a>, which allows you to control how the content of replaced elements behaves. By default, the image will break out of its container and display full size, unless constrained by settings such as <code>width</code>, <code>height</code>, or <code>max-width</code>, as in the case above. <code>object-fit</code> overrides this default and can give some useful advantages, if your browser supports it (it is currently only supported by Opera 11+, and WebKit nightlies, with vendor prefixes). For example, in this case I am using <code>object-fit: none</code>, which makes the image completely ignore any kind of resizing efforts and display full size, regardless. I am then using <code>overflow: hidden;</code> to hide the overflowing image portion, which will differ in size depending on the width of the container. So now, instead of the image resizing to fit the container, it stays the same size, and a different amount of it is cut off by the <code>overflow: hidden;</code>:</p>

<p><img src="layout8.jpg" alt="overflow-hidden in combination with object-fit: none; means that the image will be cropped by a different amount as the image size changes"></p>
<p class="comment">Figure 8: <code>overflow: hidden;</code> in combination with <code>object-fit: none;</code> means that the image will be cropped by a different amount as the image size changes.</p>

<p>This has a definite advantage — image resizing can look ugly, especially on Windows, so cropping instead could definitely be preferred in many situations. There are other <code>object-fit</code> options too, for example if you always want your differently-sized images all to fit inside <code>&lt;img&gt;</code> elements of exactly the same size but maintain aspect ratio, you could use <code>object-fit: contain;</code> along with <code>width</code> and <code>height</code> settings to cause wrongly-sized images to letterbox inside the <code>&lt;img&gt;</code> element. There is also a closely-related property available called <code>object-position</code>, which allows you to change the display position of the media inside the replaced element in the same way that <code>background-position</code> does for background images.</p>

<p>To find out more about these properties and their use cases, read my article <a href="http://dev.opera.com/articles/view/css3-object-fit-object-position/">The CSS3 object-fit and object-position properties</a>.</p>

<h3>Other thoughts on fluid layouts</h3>

<p>There are a couple more points worthy of note here, before we move on. For a start, I have used a very long image for the header, so that as the header size increases, you still get an image spanning all the way across it. Well, up until the point the browser reaches 1920 pixels wide, anyway! This is a useful technique to consider with adaptive layouts, although of course you need to optimize such images as much as possible in a real production environment so that it doesn't adversely affect mobile users/low bandwidth users too much.</p>

<p>Second, the CSS3 <a href="http://www.w3.org/TR/css3-multicol/">multi-column layout module</a> has some uses in this area. <a href="http://people.opera.com/cmills/multi-col/multi-columns3b.html">Look at my multi-col example</a> that uses fixed widths for the columns. When you resize the browser window, the number of columns changes because the browser is able to fit different multiples of that column width into the container. For more on multi-col, read <a href="http://dev.opera.com/articles/view/css3-multi-column-layout/">CSS3 Multi-column layout</a> by Molly Holzschlag.</p>

<h2>The heavy hitter: media queries</h2>

<p>Media queries are awesome. They are quite simply my favourite CSS3 feature — they fill a real need, are supported well across all modern browsers and degrade gracefully. To sum it up, media queries allow you to specify a condition for a block of CSS - if that condition is met, the block is applied to your HTML. If not, it is completely ignored. The conditions tend to look like this — <code>all and (max-width: 1000px)</code> — which means "apply this CSS to all media types if the browser window width is 1000 pixels or smaller". You can set these conditions on entire external stylesheets like this:</p>

<pre><code>&lt;link rel="stylesheet" type="text/css" href="core.css" media="all and (max-width: 1000px)"&gt;</code></pre>

<p>or, as I have done in my examples, you can apply them to specific blocks of CSS inside a stylesheet:</p>

<pre><code>@media all and (max-width: 1000px) {

 /* CSS rules go here */

}</code></pre>

<p>You can also add further conditions to a media query rule like this:</p>

<pre><code>all and (max-width: 1000px) and (min-height: 600px)</code></pre>

<p>Or chain together multiple media queries so that the CSS will be applied if any are met, like this:</p>

<pre><code>screen and (max-width: 1000px), print and (max-width: 29.7cm)</code></pre>

	    <h3>The obvious - width media queries</h3>

<p>The most common media query you'll use is one that alters your design when browser width gets below or above a certain amount, and this is what I've done a lot in my example. I won't go through everything, but for example, I have changed the percentage width that the <code>&lt;article&gt;</code> elements span across their containing <code>&lt;section&gt;</code> when width gets below 1000 pixels, so that the layout goes from three per row to two per row. They are initially styled like this:</p>

<pre><code>article {
    ...
  width: 30%;
  margin: 0 1% 0 1%;
    ...
}</code></pre>

And the media query then styles them like this:

<pre><code>@media all and (max-width: 1000px) {
  article {
    width: 40%;
    margin: 0 5% 0 1%;
  }
}</code></pre>

<p>As another example, I also have an extra-wide layout that kicks in at 1500 pixels and above, for wide monitors. This changes the percentage width again so that all six "psychedelic features" fit on one row:</p>

<pre><code>article {
  width: 14%;
  margin: 0 1% 0 1%;
}</code></pre>

<p>I also used a media query to get rid of the <code>&lt;section&gt;</code> floats, to make the 2-column layout turn to 1-column, when the browser width is 700 pixels or less. I think that's enough examples - the rest of them work in the same way.</p>

	    <h3>Other uses</h3>

<p>Media queries aren't just limited to setting rules based on widths and heights. You can also set rules based on many other variables, such as resolution, aspect ratio, whether the screen is monochrome or not, orientation (portrait or landscape?) and more. For example, you could bump up the font size on high resolution devices such as the iPhone 4, so the text isn't teeny tiny (although be aware that some such devices tend to automatically bump up text size for the same reason).</p>

<pre><code>@media screen and (resolution: 163dpi) {
  p { font-size: 200%; }
}</code></pre>

<p class="note">You could use <code>min-pixel-ratio: 2</code> in place of <code>resolution: 163dpi</code>, for a similar result.</p>

<p>For a full list of the media features you can create rules based on, look them up on the <a href="http://www.w3.org/TR/css3-mediaqueries/#media1">media queries specification</a>.</p>

	    <h3>The media attribute on video</h3>

<p>And that's not all, folks. Recently, the HTML5 specification was changed to allow the <code>media</code> attribute to be used on the video <code>&lt;source&gt;</code> attribute. This means that you can serve different video files to different devices — for example, my "psychedelic video" page contains the following player code:</p>

<pre><code>&lt;article&gt;
  &lt;video controls&gt;
    &lt;source type="video/mp4" src="video/windowsill_small.mp4" media="all and (max-width: 480px), all and (max-device-width: 480px)"&gt;
    &lt;source type="video/webm" src="video/windowsill_small.webm" media="all and (max-width: 480px), all and (max-device-width: 480px)"&gt;
    &lt;source type="video/mp4" src="video/windowsill.mp4"&gt;
    &lt;source type="video/webm" src="video/windowsill.webm"&gt;
	  &lt;!-- proper fallback content goes here --&gt;
  &lt;/video&gt;
&lt;/article&gt;</code></pre>

<p>Here, the first two <code>&lt;source&gt;</code> attributes contain a media query rule that is passed if the browser or device screen width is 480 pixels or less, i.e., probably some kind of mobile device. If the rule is passed, then the browser will load the video from one of those <code>&lt;source&gt;</code> attributes (depending on which video format it understands). If not, the browser will skip down the list and load the video from the third or fourth <code>&lt;source&gt;</code> attribute. This is great, as mobile browser users with small screen widths don't need a large video file, so you might as well serve them a smaller-sized version and save them a bit of bandwidth. This works on all the latest versions of modern browsers.</p>

<p class="note">Note: You may notice that Chrome does something odd with my weird aspect ratio video, seemingly wanting to make it look more normal and less deviant: I'm not sure why this is.</p>

<p class="note">Note#2: To get Firefox to play the video, I needed to include an <code>.htaccess</code> file in the root of my example, containing the line <code>AddType video/webm webm</code>. Firefox is a bit more stringent about the video mime types than other browsers.</p>

<h2>Mobile browsers lie</h2>

<p>If I just had the media queries present in my example as they are, the view on an average smart phone browser would look like so:</p>

<p><img src="layout9.jpg" alt="The layout on Opera Mobile 11, with just the media queries in place"></p>
<p class="comment">Figure 9: The layout on Opera Mobile 11 on a phone, with just the media queries in place.</p>

<p>This is a bit strange - the device is only 480 pixels wide, so how come it is still showing a two column layout, when the media query to switch it into a one column layout kicks in at 700 pixels? The answer is that mobile browsers lie - most of them don't render web pages at their true browser width. Instead, they pretend that the browser is a lot wider than it really is, render the page at that width, and then shrink the result down to display it on the mobile screen; Opera Mobile for example uses 850 pixels for its rendering width. It is not hard to see why they might do this — a lot of your favourite sites would probably look pretty crappy if you viewed them at say, 320 pixels wide — but it is annoying for us when we've used media queries to create tailored narrow layouts for such devices, and the site is presented to mobile browser users in a very small unreadable way (at least initially).</p>

<p>So what do we do? Well, there are a couple of approaches we could use, either separately, or in combination.</p>

	    <h3>max-device-width</h3>

<p>Instead of just including <code>max-width</code> in your media query, you could chain together two media queries to test for <code>max-width</code> <em>and</em> <code>max-device-width</code>, like I did in the video source <code>media</code> attribute. For example:</p>

<pre><code>@media all and (max-width: 700px), all and (max-device-width: 700px) {
  ...
}</code></pre>

<p>So here we are saying we want the CSS block to kick in if either the browser width is 700 pixels wide or less (the one the mobile browsers lie about), or the actual device screen is 700 pixels of less (the mobile browsers find it harder to lie about this). I do however find this a bit messy to deal with on all your media queries: can't we just make those mobile browsers tell the truth?</p>

<h2>Viewport</h2>

<p>There is a way: Apple invented the viewport meta tag with the aim of giving developers more control over how their web apps display on the iPhone. Other browser vendors thought it was a good idea, and so it was also adopted by the Opera Mobile browsers, Android, and more. The viewport meta tag I have included in my pages looks like so:</p>

<pre><code>&lt;meta name="viewport" content="width=device-width"&gt;</code></pre>

<p>This tells the mobile browsers that support it to render the page assuming a browser width equal to the physical pixel width of the device, and not their default lying width. Our layout now looks like so on modern mobile browsers:</p>

<p><img src="layout10.jpg" alt="The layout on Opera Mobile 11, with viewport in action"></p>
<p class="comment">Figure 10: The layout on Opera Mobile 11, with viewport in action (I've scrolled down a bit to illustrate a bit more what the text looks like).</p>
<p>Viewport allows you to do more that just specify rendering screen widths. You can also specify initial zoom level, whether the users can zoom at all or not (handle with care &mdash; this could create accessibility issues), maximum and minimum allowed zoom levels, and more besides. You can also chain multiple viewport values together, separating them with commas inside the <code>content</code> attribute:</p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=2"&gt;</code></pre>

	    <h3>Coming soon to a browser near you — @viewport</h3>

<p>Us lovely folks at Opera like the viewport meta tag, but we thought it strange that it is implemented as a meta tag at all, when what it is doing is really quite, well, <em>CSS-ish</em>. So we decided to create a new implementation of viewport, reformulated as a CSS at-rule. If you look near the top of my CSS, you'll find this construct, commented out:</p>

<pre><code>@-o-viewport {
  width: device-width;
}</code></pre>

<p>This does the same thing as the viewport meta tag we discussed above. Try swapping the comments around from one to the other and loading the page in Opera Mobile 11 (or later), and you'll see the same effect as before. We are hoping this will catch on in other browsers soon. The CSS version has been submitted to the W3C as an editor's draft — see the <a href="http://dev.w3.org/csswg/css-device-adapt/">CSS device adaptation</a> spec.</p>

<p><code>@viewport</code> has equivalents for all the things you can do with the viewport meta tag. For a much deeper, more complete treatment of viewport, read <a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">An introduction to meta viewport and @viewport</a> by Andreas Bovens.</p>

     <h3>Tablets and viewport</h3>

<p>The recent growth in popularity of tablet devices has given us even more to think about in terms of adaptive web design, to be sure. Generally there are not too many horrors to consider, but one thing to bear in mind is that some tablet browsers behave like mobile browsers and therefore follow viewport rules, and some don't. As an example, I originally had my viewport rule set to <code>width=320</code>, to give a more consistent small screen layout that would blow up the text to be as big and readable as possible (bear in mind that my layout has a <code>min-width</code> of 320 pixels set, as it looks awful if set to thinner than this). The layout did look great across most smartphone browsers I tested it on.</p>

<p>Then it came to tablets. I tested the layout on my Samsung Galaxy 10.1. On the default Webkit-based browser it looked fine, as it doesn't pay attention to viewport. However, on Opera Mobile 11 it rendered at 320 pixels and then blew the result up, which looked dreadful:</p>

<p><img src="tablet1.jpg" alt="The layout on Opera Mobile 11, on an Android tablet, with viewport width set to 320 pixels"></p>
<p class="comment">Figure 11: The layout on Opera Mobile 11, on an Android tablet, with viewport width set to 320 pixels: not good.</p>
<p>To fix this, I used a viewport width of <code>device-width</code> instead. With this set, Opera Mobile 11 now behaves itself:</p>

<p><img src="tablet2.jpg" alt="The layout on Opera Mobile 11, on an Android tablet, with viewport width set to device width"></p>
<p class="comment">Figure 12: The layout on Opera Mobile 11 on an Android tablet in landscape mode, with viewport width set to device-width: much better.</p>
<p>And now it works nicely in portrait mode too:</p>

<p><img src="tablet3.jpg" alt="The layout on Opera Mobile 11 on an Android tablet in portait mode, with viewport width set to device width"></p>
<p class="comment">Figure 13: The layout now works nicely in portrait mode too!</p>


<h2>Slaying the IE dragon</h2>

<p>Looking at my default layout in older versions of IE, it actually looks pretty darn good by default. I've used very little in the way of CSS3 bling for this one, apart from web fonts, which IE handles very well due to EOT support going back a long way. And even IE6 can be coaxed into coping with floats and percentages without too much special treatment. The main place we start to run into problems here is with <code>max-width</code>/<code>min-width</code>, and the media queries themselves. Let's look at these two in turn.</p>

<p>IE6 doesn't support <code>max-width</code> and <code>min-width</code>, therefore our images would start to spill out of their containers if we didn't do anything about it. In addition, once you get down below 320 pixels — the <code>min-width</code> we have set on the layout — it breaks horribly. As a final stab in the back, IE before 9 doesn't support our lovingly-crafted media queries. So what to do?</p>

<p>We could just have an IE fix stylesheet inside a conditional comment that sets the body to a fixed width for older versions of IE. That would work - IE users would get a layout that works, and wouldn't need to know about all the media query cleverness. To be honest, I think this is what most of us will do in these situations.</p>

<p>However, some of you will want to explore the possibility of introducing responsiveness into older versions of IE, so for you guys, I went the extra mile. I've actually gone with setting <code>width: 100%;</code> as the width for the images in the IE stylesheet, so that the image effect will still work on old IE versions. You need to be careful here — this works for my demo, but it could go horribly wrong for images that are significantly narrower than their container. Resizing them all to 100% would make them look nasty. You need to select your images to apply this to carefully.</p>

<p>I also made use of the <a href="http://code.google.com/p/css3-mediaqueries-js/">css3-mediaqueries.js</a> library, which adds support for media queries to older browsers, including IE5-8. It isn't perfect, and you'll notice a lag when resizing your browser, but it is nice to know there is a way.</p>

<p>Oh wait, one more thing - I haven't implemented a fallback for users of browsers that don't support HTML5 <code>&lt;video&gt;</code>. You can read about how to do that in <a href="http://dev.opera.com/articles/view/simple-html5-video-flash-fallback-custom-controls/">Simple HTML5 video player with Flash fallback and custom controls</a>, by Bruce Lawson and Vadim Makeev.</p>

<h2>Summary</h2>

<p>So that's it for now folks — hope you've found my little foray into adaptive/responsive/awesome/[insert your own groovy word here] design useful. For a whole boatload of inspiringly cool sites that use media queries, look at <a href="http://mediaqueri.es/">mediaqueri.es</a>.</p>

<h2>Read more...</h2>

<ul>
<li><a href="http://dev.opera.com/articles/view/css3-object-fit-object-position/">The CSS3 object-fit and object-position properties</a></li>
<li><a href="http://dev.opera.com/articles/view/css3-multi-column-layout/">CSS3 Multi-column layout</a></li>
<li><a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">An introduction to meta viewport and @viewport</a></li>
</ul>

	    <h3>Credits</h3>

<ul>
<li><a href="http://www.flickr.com/photos/burningmax/4955905625/">psychedelic header background</a> by Burningmax</li>
<li><a href="http://www.flickr.com/photos/sterneck/5684323006/">third eye</a> by Sterneck</li>
<li><a href="http://www.flickr.com/photos/dejahthoris/164384971/">psychedelic flower</a> by dejathoris</li>
<li><a href="http://www.flickr.com/photos/tonythemisfit/4869280504/">60's psyche music mural</a> by Tony the Misfit</li>
<li><a href="http://www.flickr.com/photos/maynard/3105909533/">Fish</a> by Nemo's great uncle</li>
<li><a href="http://www.flickr.com/photos/27289736@N00/1056961804/">psychedelic art</a> by move-at-light-speed</li>
<li><a href="http://en.wikipedia.org/wiki/Psychedelic">Psychedelic text courtesy of Wikipedia</a></li>
<li>Awesome web fonts: Cowboy Hippie Pro by <a href="http://www.cheapprofonts.com/">www.CheapProFonts.com</a>, and Bell Bottom Laser (can't find the font creator, sorry - let me know if you need credit! I did download it from a free font site, and the license says it is ok to use for non-commercial projects.)</li>
<li>Video by <a href="http://www.splintered.co.uk/">Patrick Lauke</a></li>
<li>Article review provided by <a href="http://twitter.com/#!/rudyrigot">Rudy Rigot</a> and <a href="http://goetter.fr/">Raphael Goetter</a>. Thank you so much guys!</li>
</ul>
