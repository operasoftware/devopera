Title: Introduction to HTML5 video
----
Date: 2010-02-11 14:32:10
----
Lang: en-GB
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<div class="note">
<p>Update history:</p>
<ul>
<li>1 July 2010 — replaced download links to our experiment.webm-enabled builds with links to Opera 10.60 (final).</li>
<li>14 May 2010 — some minor changes made; information on codecs added to mention the VP8 codec Google have made available and the experimental <a href="http://labs.opera.com/news/2010/05/19/">VP8-supporting Opera Labs build</a>.</li>
<li>31 July 2012 — a late update that merges the original article with an extended version that was written subsequently for an external magazine. This update includes a more in-depth scripting section, a new section that shows how to swap video sources, and replaces the outdated information on the <code>autobuffer</code> attribute with <code>preload</code>.</li>
<li>14 January 2012 — amended to focus on webM and H.264, with only a side-note on Ogg Theora.</li>
</ul>
</div>

<h2>Introduction</h2>

<p>A long time ago, in a galaxy that feels a very long way away, multimedia on the Web was limited to tinkling MIDI tunes and animated GIFs. As bandwidth got faster and compression technologies improved, MP3 music supplanted MIDI and real video began to gain ground. All sorts of proprietary players battled it out — Real Player, Windows Media Player, etc. — until one emerged as the victor in 2005: Adobe Flash. This was largely because of the ubiquity of its plugin and the fact that it was the delivery mechanism of choice for YouTube; Flash has become the de-facto standard for delivering video on the web.</p>

<p>One of the most exciting new features of HTML5 is the inclusion of the <code>&lt;video&gt;</code> element, which allows developers to include video directly in their pages without the need for any plugin-based solution.</p>

<p>This article gives you an introduction to <code>&lt;video&gt;</code> and some of its associated APIs. We look at why native video support in browsers is important, give an overview of the element&#39;s markup, and outline the most important ways in which video can be controlled via JavaScript.</p>

<ul>
<li><a href="#why">Why do we need a <code>&lt;video&gt;</code> element?</a></li>
<li><a href="#anatomy">Anatomy of the <code>&lt;video&gt;</code> element</a></li>
<li><a href="#codecs">Codecs — the fly in the ointment</a></li>
<li><a href="#first-class">No longer a second-class citizen on the Web</a>
<ul>
<li><a href="#keyboard-access">Keyboard accessibility out-of-the-box</a></li>
<li><a href="#playwell"><code>&lt;video&gt;</code> plays well with the rest of the page</a>
<ul>
<li><a href="#CSS">Styling <code>&lt;video&gt;</code> with CSS</a></li>
<li><a href="#canvas">Combining <code>&lt;video&gt;</code> and <code>&lt;canvas&gt;</code></a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#scripting">Scripting your own controls</a></li>
<li><a href="#swapping">Swapping media sources</a></li>
<li><a href="#more">Read more</a></li>
</ul>

<h2 id="why">Why do we need a <code>&lt;video&gt;</code> element?</h2>

<p>Until now, if you wanted to include video in a web page, you had to wrangle some fairly cryptic markup. Here&#39;s an example, taken directly from YouTube:</p>

<pre><code>&lt;object width=&quot;425&quot; height=&quot;344&quot;&gt;
  &lt;param name=&quot;movie&quot;
    value=&quot;http://www.youtube.com/v/9sEI1AUFJKw&amp;hl=en_GB&amp;fs=1&amp;&quot;&gt;&lt;/param&gt;
  &lt;param name=&quot;allowFullScreen&quot;
    value=&quot;true&quot;&gt;&lt;/param&gt;
  &lt;param name=&quot;allowscriptaccess&quot;
    value=&quot;always&quot;&gt;&lt;/param&gt;
  &lt;embed src=&quot;http://www.youtube.com/v/9sEI1AUFJKw&amp;hl=en_GB&amp;fs=1&amp;&quot;
    type=&quot;application/x-shockwave-flash&quot; allowscriptaccess=&quot;always&quot;
    allowfullscreen=&quot;true&quot; width=&quot;425&quot;
    height=&quot;344&quot;&gt;&lt;/embed&gt;
&lt;/object&gt;</code></pre>

<p>First of all, we have an <code>&lt;object&gt;</code> element — a generic container for <q>foreign objects</q> — to include the Flash movie in. To work around browser inconsistencies, we also include an <code>&lt;embed&gt;</code> element as fallback content and duplicate most of the <code>&lt;object&gt;</code>&#39;s parameters. The resulting code is ungainly and not very readable, and it has other problems — the plugin content does not play very nicely with the other technologies on the page, and it has inherent accessibility problems (more on those later).</p>

<h2 id="anatomy">Anatomy of the <code>&lt;video&gt;</code> element</h2>
<p>Compared to the convoluted construct necessary to include Flash in your page, the basic markup necessary for <code>&lt;video&gt;</code> in HTML5 is refreshingly straightforward:</p>

<pre><code>&lt;video src=myVideo.webm
  width=320
  height=240
  controls
  poster=image.jpg&gt;
&lt;/video&gt;</code></pre>

<p class="note">Note that in our example we&#39;re taking advantage of HTML5&#39;s more relaxed syntax — you don&#39;t have to put quotes around attribute values, and you can use simple boolean attributes such as <code>autoplay</code> as single words. If you prefer, you can of course also stick to the XHTML syntax  <code>controls=&quot;controls&quot;</code> and quote all your attribute values. It obviously makes sense to choose the coding style that suits you best and stick with it, for consistency and maintainability. In XHTML5, you <strong>must</strong> use XHTML syntax (and you must also serve your pages as XML with the correct MIME type, which currently won&#39;t work in Internet Explorer).</p>

<p>The <code>&lt;video&gt;</code> element attributes we&#39;ve used in our sample code are quite self-explanatory:</p>

<dl>
<dt><code>src</code></dt>
<dd>The source of the element, providing the URL of your video file.</dd>
<dt><code>width</code> and <code>height</code></dt>
<dd>As with <code>img</code> elements, you can explicitly set the dimensions of your video — otherwise, the element will simply default to the intrinsic width and height of the video file itself.  If you specify one but not the other, the browser will
adjust the size of the unspecified dimension to preserve the video&#39;s aspect
ratio.</dd>
<dt><code>controls</code></dt>
<dd>If this boolean attribute is present, the browser will display its native video controls for playback and volume. If you omit this, the user will only see the first frame (or the specified <code>poster</code> image) and won&#39;t be able to play the video, unless you trigger the movie from somewhere in your JavaScript or create your own custom controls, as we&#39;ll demonstrate later in this article.</dd>
<dt><code>poster</code></dt>
<dd>The <code>poster</code> attribute points to an image that the browser will use while the video is downloading, or until the user tells the video to play. If this is not included, the first frame of the video will be used instead.</dd>
</dl>

<p>For Web browsers that do not currently support <code>&lt;video&gt;</code>, it&#39;s possible to include alternative content — at the very least, this could include some text and a link to the video file itself, so that users can download it and play it in a media player application:</p>

<pre><code>&lt;video src=myVideo.webm
  width=320
  height=240
  controls
  poster=image.jpg&gt;
  <strong>Download my awesome video in &lt;a href=myVideo.webm&amp;gt.webm&lt;/a&gt; or &lt;a href=myVideo.mp4&gt;MP4&lt;/a&gt; format</strong>
&lt;/video&gt;</code></pre>

<div class="screenshot">
<img src="http://forum-test.oslo.osa/kirby/content/articles/325-introduction-to-html5-video/opera-standard-video-controls.jpg" alt="Default video element with standard Opera controls" />
<p class="caption">A <code>&lt;video&gt;</code> element with native browser controls in Opera.</p>
</div>

<p>There are more attributes we&#39;re not covering in our examples. They are:</p>

<dl>
<dt><code>autoplay</code></dt>
<dd>This instructs the browser to start playback of the video automatically. Use this attribute with care, as this can be highly annoying, if not downright problematic, particularly for users with assistive technologies such as screen readers or those on low-bandwidth connections (such as on a mobile device).</dd>
<dt><code>preload</code></dt>
<dd>This attribute suggests to the browser whether or not it should try to preload the video. It can take the values of <code>none</code> (the browser shouldn&#39;t download anything until the playback has started), <code>metadata</code> (only grab enough of the video file to work out the metadata, such as intrinsic dimensions and duration), and <code>auto</code> (whatever the browser does by default - for instance, on a mobile device, it&#39;s likely that the browser will be set not to download anything unless explicitly needed, mirroring the <code>none</code> behaviour, while a desktop browser may start to at least grab the <code>metadata</code>).</dd>
<dt><code>loop</code></dt>
<dd>The <code>loop</code> attribute is another boolean attribute. As you would imagine, it loops the video.</dd>
</dl>

<h2 id="codecs">Codecs — the fly in the ointment</h2>

<p>Unfortunately, when it comes to the types of video that browsers can handle, the landscape is currently fragmented. Although the HTML5 specification clearly defines the new <code>&lt;video&gt;</code> element and its associated APIs, it does not mandate any particular video codec that browsers should support as a baseline. Opera and Mozilla Firefox chose to include native support for <a href="http://www.webmproject.org/">webM</a> – a high-quality, open video format for the web that&#39;s free for use and distribution without licensing and royalty fees. Safari and Internet Explorer 9, on the other hand, opted for the  <a href="http://en.wikipedia.org/wiki/H.264/MPEG-4_AVC">H.264 codec</a> – a royalty-encumbered format licensed by an organisation called MPEG-LA. Google Chrome included supports for both of these formats. IE will support.webm if it is separately installed on the user&#39;s system.</p>
<p>(Chrome, Opera and Firefox also include support for a royalty-free codec called Ogg Theora, but this is superseded by.webm, so we don&#39;t discuss it further.)
<p>What this means at the moment, though, is that we need to encode our videos twice if we want it to work in all current browsers: once as webM and once as H.264. Fortunately, the new <code>&lt;video&gt;</code> element allows us to specifiy different versions of our movies: if we add alternative <code>&lt;source&gt;</code> elements with appropriate <code>type</code> attributes to the video, the browser will choose and download the format that it can display. Note that in this case we do not provide a <code>src</code> attribute in the <code>&lt;video&gt;</code> element itself:</p>
<pre><code>&lt;video width=320 height=240 controls poster=image.jpg&gt;
  <strong>&lt;source src=myVideo.webm type=video.webm&gt;
  &lt;source src=myVideo.mp4 type=video/mp4&gt;</strong>
  Download my awesome video in &lt;a href=myVideo.webm&amp;gt.webm&lt;/a&gt; or &lt;a href=myVideo.mp4&gt;MP4&lt;/a&gt; format
&lt;/video&gt;</code></pre>

<p>And interestingly, after we do this double-encoding step we&#39;re also halfway to supporting older browsers: Flash can load and play MP4-formatted movie files, so these can be used in combination as a fallback for Internet Explorer, for instance . See Kroc Camen&#39;s nifty implementation of this technique in his article <a href="http://camendesign.com/code/video_for_everybody"><cite>Video for Everybody!</cite></a>, in which he squeezes the <code>object</code> and <code>embed</code> of old into the alternative content part of the <code>&lt;video&gt;</code> element.</p>

<p class="note">Of course, if the browsers that don&#39;t support the <code>&lt;video&gt;</code> element fall back to using Quicktime or Flash plugins, we&#39;re really back where we started, and we won&#39;t be able to take advantage of any of the new features and improvements we&#39;re about to outline below. <em><q>What&#39;s the point then?</q></em>, you may ask. We would say that this is a transitional solution, until native video support hits all major browsers. It&#39;s a case of graceful degradation – users may receive a slightly cut-down version of your page, but at least they&#39;re able to see your movies.</p>

<h2 id="first-class">No longer a second-class citizen on the Web</h2>

<p>So, we&#39;ve seen that the markup for the new HTML5 <code>&lt;video&gt;</code> element is an order of magnitude more readable and understandable compared to what we currently have to do in order to get Flash movies into our markup. But regardless of how horrid the old way of coding is, in most cases it works, doesn&#39;t it? So why would we want to move away from this approach of handing over the display of video to a third-party plugin such as Flash?</p>

<p>The major advantage of the HTML5 <code>&lt;video&gt;</code> element is that finally video is a fully-fledged citizen on the Web, rather than being shunted off to the hinterland of <code>object</code> or the non-validating <code>embed</code> element (although that now validates in HTML5). Let&#39;s expand on some of the advantages.</p>

<h3 id="keyboard-access">Keyboard accessibility out-of-the-box</h3>

<p>One of the great unresolved problems of using Flash is keyboard accessibility. With the exception of Internet Explorer on Windows, there is usually no way for a keyboard user to <kbd>Tab</kbd> or otherwise move their focus into a Flash movie. And even if these users somehow manage to get their focus into the movie (using additional assistive technologies), there is no easy way for them to <kbd>Tab</kbd> back out of it (unless additional ActionScript code is added to the movie to programmatically set the browser focus back out of the plugin and onto the page). In contrast, as the browser is directly responsible for the <code>&lt;video&gt;</code> element, it can handle the movie&#39;s controls as if they were regular buttons on a web page and include them in its normal tabbing order.</p>

<p class="note">Keyboard support for native video has not currently been implemented across all browsers...however, it works fine in Opera out of the box.</p>

<h3 id="playwell"><code>&lt;video&gt;</code> plays well with the rest of the page</h3>

<p>In simple terms, whenever you include a plugin in your pages, you&#39;re reserving a certain drawing area that the browser delegates to the plugin. As far as the browser is concerned, the plugin&#39;s area remains a black box — the browser does not process or interpret anything that is happening there.</p>

<p>Normally, this is not a problem, but issues can arise when your layout overlaps the plugin&#39;s drawing area. Imagine for instance a site that contains a Flash movie, but also has JavaScript or CSS-based dropdown menus that need to unfold over the movie. By default, the plugin&#39;s drawing area sits on top of the webpage, meaning that these menus will strangely appear behind the movie. A similar unsightly effect happens in cases where your page uses lightboxes — any Flash movie would still appear to float on top of the dimmed page overlay. This is why most ready-made lightbox scripts tend to hack around the issue by first removing any plugin objects from the page before triggering the overlay itself, and reintroducing them once the overlay is closed.</p>

<p class="note">In the specific case of Flash plugins, developers can fix this display issue by adding the <code>wmode=&#39;opaque&#39;</code> attribute to their <code>&lt;object&gt;</code> element and the equivalent <code>&lt;param name=&#39;wmode&#39; value=&#39;opaque&#39;&gt;</code> to their <code>&lt;embed&gt;</code> element. However, this also causes the plugin to become completely inaccessible to users with screen readers, and is therefore best avoided.</p>

<p>Problems and quirks can also arise if your page undergoes dynamic layout changes. If the dimensions of the plugin&#39;s drawing area are resized, this can sometimes have unforeseen effects — a movie playing in the plugin may not resize, but instead simply be cropped or display extra white space.</p>

<p>With the native <code>&lt;video&gt;</code> element, it&#39;s the browser itself that is taking care of the rendering. As such, <code>&lt;video&gt;</code> behaves no differently from any other element in your page layout. It can be positioned, floated, overlapped or dynamically resized, with no additional hacks required. It is even possible to achieve interesting effects such as semi-transparent video simply by setting the opacity for the element via CSS.</p>

<h4 id="CSS">Styling video with CSS</h4>

<p>Now video is part of the Open Web set of technologies, we can use CSS to style the element reliably. As a simple demonstration of what can now be achieved, we&#39;ll apply <a href="http://dev.opera.com/static/articles/2010/introduction-html5-video/transitions/">CSS transitions to a video</a> to change its dimensions once we <code>:hover</code> or <code>:focus</code> on it. (Read our <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/"><cite>CSS3 transitions and 2D transforms</cite> tutorial</a>.)</p>

<h4 id="canvas">Combining video and canvas</h4>

<p>As the browser is taking care of laying out and rendering video, we can easily overlap and combine other elements on top of it. In this example, a <a href="http://dev.opera.com/static/articles/2010/introduction-html5-video/video-canvas/"><code>&lt;canvas&gt;</code> is superimposed over the video</a>. (Warning: this video has potentially upsetting images of a handsome Opera employee and his children being menaced by a gigantic mouse pointer.)</p>

<p>Note that the <code>&lt;canvas&gt;</code> does not completely cover the video. We&#39;ve made the canvas 40 pixels shorter than the video height, so that the area of the video where the controls appear is not covered. This ensures that, if the user mouses over the bottom of the video, there is enough of the <code>&lt;video&gt;</code> element poking out behind the canvas to receive the <code>hover</code> event and cause it to expose the controls. Keyboard access to the controls should work regardless of covering elements, however keyboard support currently varies across browsers.</p>

<h2 id="scripting">Scripting your own controls</h2>

<p><code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> (which we will cover in a future article) are instances of the new HTML5 DOM <a href="http://www.w3.org/TR/html5/the-iframe-element.html#media-element">media elements</a>, which exposes a powerful API giving developers control over movie playback through a whole host of new JavaScript methods and properties. Let&#39;s have a look at some of the most relevant ones to build ourselves a simple custom controller:</p>

<dl>
<dt><code>play()</code> and <code>pause()</code></dt>
<dd>Quite obviously, these methods start and pause video playback. <code>play()</code> will always start the video from the current playback position. When a movie is first loaded, this will be the first frame of the movie. Note that there is no <code>stop()</code> method — if you want to stop playback and <q>rewind</q> to the start of the movie, you will have to <code>pause()</code> and programmatically change the current playback position yourself.</dd>
<dt><code>volume</code></dt>
<dd>This attribute can be used to get or set the volume of the video&#39;s audio track, taking a <code>float</code> value ranging from <var>0.0</var> (silent) to <var>1.0</var> (loudest).</dd>
<dt><code>muted</code></dt>
<dd>Regardless of <code>volume</code>, a video can be muted.</dd>
<dt><code>currentTime</code></dt>
<dd>When read, this attribute returns the current playback position in seconds, again expressed as a <code>float</code>. Setting this attribute will — if possible — move the playback position to the specified time index.</dd>
</dl>

<p>All we need is a reference to our <code>&lt;video&gt;</code> object and we can control it directly via JavaScript:</p>

<pre><code>&lt;video width=320 height=240 controls poster=image.jpg <strong>id=videoPlayer</strong>&gt;
<strong>  …</strong>
&lt;/video&gt;

&lt;script&gt;
  var v = document.getElementById(&#39;videoPlayer&#39;);
  v.volume = 0.5;
  v.play();
&lt;/script&gt;</code>
</pre>

<p>In addition, media elements also fire a range of events as part of their processing model, which we can listen for and hook into. For our example, we will only look at a few of these:</p>
<dl>
<dt><code>loadeddata</code></dt>
<dd>The browser has loaded enough video data to begin playback at the current position.
<dt><code>play</code> and <code>pause</code></dt>
<dd>Playback was started or paused. If we&#39;re controlling the video from JavaScript, we want to listen out for these to ensure that calling the <code>play()</code> and <code>pause()</code> methods actually return succesfully.</dd>
<dt><code>timeupdate</code></dt>
<dd>The current playback position has changed because the movie is playing, a script changed it programmatically, or the user has decided to jump to a different point in the video.</dd>
<dt><code>ended</code></dt>
<dd>We&#39;ve reached the end of the movie, and the <code>&lt;video&gt;</code> element is not set to <code>loop</code> or play backwards (not covered in this article).</dd>
</dd></dl>

<p>Here&#39;s a simple example of hooking into the <code>timeupdate</code> event to display the <code>currentTime</code> (in seconds, remember) of the video:</p>

<pre><code>
&lt;video width=320 height=240 controls poster=image.jpg <strong>id=videoPlayer</strong>&gt;
<strong>  …</strong>
&lt;/video&gt;
&lt;p&gt; Current time is: &lt;span id=timeDisplay&gt;&lt;/span&gt;&lt;/p&gt;

&lt;script&gt;
  var v = document.getElementById(&#39;videoPlayer&#39;);
  v.addEventListener(&#39;timeupdate&#39;,updateTimeDisplay,true);

  function updateTimeDisplay(e) {
    document.getElementById(&#39;timeDisplay&#39;).innerHTML = e.target.currentTime;
  }
&lt;/script&gt;
</code></pre>

<p>Now we have all the basic building blocks needed to create a simple controller. We&#39;ll keep things very spartan to demonstrate the new API methods and events. As this is quite a small example, I&#39;m also keeping the JavaScript inline and simply adding a few anonymous functions – in a production environment, this would obviously look a lot more complex.</p>
<pre><code>&lt;video src=myVideo.webm width=320 height=240 controls id=videoPlayer&gt;&lt;/video&gt;

&lt;div&gt;
  &lt;button id=buttonPlay&gt;Play&lt;/button&gt;
  &lt;button id=buttonPause&gt;Pause&lt;/button&gt;
  Current time is: &lt;span id=&quot;timeDisplay&quot;&gt;&lt;/span&gt;
&lt;/div&gt;
  
&lt;script&gt;
  /* use global variable for ease */
  var v = document.getElementById(&#39;videoPlayer&#39;);
  /* play button */
  document.getElementById(&#39;buttonPlay&#39;).addEventListener(&#39;click&#39;,function(e){ v.play(); },true);
  /* pause button */
  document.getElementById(&#39;buttonPause&#39;).addEventListener(&#39;click&#39;,function(e){ v.pause(); },true);
  /* current time display (rounded to nearest second) */
  v.addEventListener(&#39;timeupdate&#39;,function(e){ document.getElementById(&#39;timeDisplay&#39;).innerHTML = Math.floor(e.target.currentTime); },true);
&lt;/script&gt;</code></pre>

<p><a href="http://dev.opera.com/static/articles/2010/introduction-html5-video/basic-controls/"><cite>Example 1: basic video controls with JavaScript</cite></a>.</p>

<p>This certainly won&#39;t win any design awards, and the page doesn&#39;t really degrade gracefully…if a user happens to come along without JavaScript enabled, they&#39;ll see a bunch of <code>&lt;button&gt;</code>s that don&#39;t do anything. However, all it now takes is a bit of CSS and JavaScript finessing (first testing for actual video support in the browser, generating the controls themselves programmatically, styling everything up to look a lot more refined). For a – still fairly straightforward – example of what can be achieved, have a look at this example  <a href="http://dev.opera.com/static/articles/2010/introduction-html5-video/fancy-controls/"><cite>Example 2: fancy video controls with JavaScript</cite></a>.</p>

<div class="screenshot">
<img src="http://forum-test.oslo.osa/kirby/content/articles/325-introduction-to-html5-video/fancy-javascript-controls.jpg" alt="Custom video controls" />
<p class="caption">Custom <code>&lt;video&gt;</code> controls, using nothing more than HTML, CSS and JavaScript.</p>
</div>

<p>The JavaScript has become a lot more verbose,  and would benefit from a bit of a clean-up and refactoring but it hopefully gives a glimpse of the  new powerful possibilities that HTML5 video opens up: with just a bit of web standards knowledge, it&#39;s now easy for web developers to create custom video controls that perfectly complement their site designs, without the need to create bespoke Flash video players.</p>
<h2 id="swapping">Swapping media sources</h2>

<p>Remember all those classic scripts we used to use to dynamically swap out images when a user hovered a mouse over them, or to create simple slideshow galleries? Changing images via JavaScript, at its core, simply required you to modify the <code>src</code> attribute of your <code>&lt;img&gt;</code> element, and the browser would then load and display the new image. Well, guess what? With the new native media elements in HTML5, the process is similarly easy to achieve for videos as well.</p>
<p>Let&#39;s start with the simple case: a <code>&lt;video&gt;</code> with a single <code>src</code> attribute. This attribute can be modified programmatically to point to a different video file, but to get the browser to actually swap out the video, we need to take an additional step and invoke a new method:</p>

<dl>
<dt><code>load()</code></dt>
<dd>Resets the <code>&lt;video&gt;</code> element and starts selecting and loading a new media resource from scratch</dd>
</dl>

<p>Here&#39;s an example with some hardcoded filenames and quite rough scripting (which also uses <dfn>custom data attributes</dfn>, another new feature of HTML5, to associate these filenames with the individual <code>&lt;button&gt;</code> elements and make our scripts a little easier). At first, there&#39;s no video present – or rather, the <code>&lt;video&gt;</code> element is there, but is lacking an actual <code>src</code> attribute. Pressing any of the buttons will load the respective video into the player.</p>

<pre><code>
&lt;video width=320 height=240 controls id=videoPlayer&gt;&lt;/video&gt;

&lt;button data-file=video1.webm&gt;Video 1&lt;/button&gt;
&lt;button data-file=video2.webm&gt;Video 2&lt;/button&gt;
&lt;button data-file=video3.webm&gt;Video 3&lt;/button&gt;

&lt;script&gt;
  /* use global variable for ease */
  var v = document.getElementById(&#39;videoPlayer&#39;);
  /* grab all buttons and attach click events */
  var b = document.getElementsByTagName(&#39;button&#39;);
  for(i = 0; i&lt;b.length; i++) {
    b[i].addEventListener(&#39;click&#39;,swapVideo,true);
  }

  function swapVideo(e) {
    /* change the video src attribute based on the
       data-file attribute of the pressed button */
    v.src = e.target.getAttribute(&#39;data-file&#39;);
    v.load();
  }
&lt;/script&gt;</code></pre>

<p>As we&#39;ve seen previously, though, there&#39;s no single video container format and codec that will be understood equally by all browsers. To make native video work in Chrome, Firefox, Opera <em>and</em> Safari, we&#39;ve seen that we need to use a series of <code>&lt;source&gt;</code> elements, offering the browser at least a choice between.webm and MP4. So, the naive – but still quite workable – approach here would be to not just swap out <code>src</code>, but rather to generate these separate <code>&lt;source&gt;</code>s programmatically. For simplicity, we&#39;ll assume that both the webM and MP4 versions of each video are in the same location and have the exact same filename, with just the file extension (<code>.webm</code> and <code>.mp4</code>) being different. We&#39;ll also disregard any fallback content that we should really provide inside the <code>&lt;video&gt;</code> as well.</p>

<pre><code>
&lt;video width=320 height=240 controls id=videoPlayer&gt;&lt;/video&gt;

&lt;button <strong>data-file=video1</strong>&gt;Video 1&lt;/button&gt;
&lt;button <strong>data-file=video2</strong>&gt;Video 2&lt;/button&gt;
&lt;button <strong>data-file=video3</strong>&gt;Video 3&lt;/button&gt;

&lt;script&gt;
  /* use global variable for ease */
  var v = document.getElementById(&#39;videoPlayer&#39;);
  /* grab all buttons and attach click events */
  var b = document.getElementsByTagName(&#39;button&#39;);
  for(i = 0; i&lt;b.length; i++) {
    b[i].addEventListener(&#39;click&#39;,swapVideo,true);
  }

  function swapVideo(e) {
    <strong>/* insert two source elements inside the video - one for.webm, one for MP4 */
    v.innerHTML = &#39;&lt;source src=&#39;+e.target.getAttribute(&#39;data-file&#39;)+&#39;.webm type=video.webm&gt;&#39;;
    v.innerHTML += &#39;&lt;source src=&#39;+e.target.getAttribute(&#39;data-file&#39;)+&#39;.mp4 type=video/mp4&gt;&#39;;</strong>
    v.load();
  }
&lt;/script&gt;</code></pre>

<p>Although this works just fine, I&#39;d say that we&#39;re missing a trick here. When writing static HTML, we include the separate <code>&lt;source&gt;</code> elements in there to give the browser a set of options to choose from, based on its internal algorithms and its built-in understanding of which types of files it can natively play back. But as we&#39;re already working in JavaScript in this case, we can tap into that same internal logic to let our script work out what the browser supports, and then only update the <code>&lt;video&gt;</code> with the most suitable format/codec.</p>

<dl>
<dt><code>canPlayType(type)</code></dt>
<dd>This method returns either an empty string (a negative response), &quot;<code>maybe</code>&quot; or &quot;<code>probably</code>&quot;, to indicate how confident the browser is that it can play a file of that particular <code>type</code></dd>
</dl>

<p>Looking past the slightly strange return values of this method, we can see how, with just a small modification to our previous code, we go back to just using a single <code>src</code> attribute, which we populate with the type of file that is likely to work the best in the current browser.</p>

<pre><code>
&lt;video width=320 height=240 controls id=videoPlayer&gt;&lt;/video&gt;

&lt;button data-file=video1&gt;Video 1&lt;/button&gt;
&lt;button data-file=video2&gt;Video 2&lt;/button&gt;
&lt;button data-file=video3&gt;Video 3&lt;/button&gt;

&lt;script&gt;
  /* use global variable for ease */
  var v = document.getElementById(&#39;videoPlayer&#39;);
  /* grab all buttons and attach click events */
  var b = document.getElementsByTagName(&#39;button&#39;);
  for(i = 0; i&lt;b.length; i++) {
    b[i].addEventListener(&#39;click&#39;,swapVideo,true);
  }

  function swapVideo(e) {
    <strong>/* change the video src attribute based on the
       data-file attribute of the pressed button,
       selecting the most appropriate of either.webm or MP4 */
    if (v.canPlayType(&quot;video.webm&quot;) == &#39;maybe&#39; || v.canPlayType(&quot;video.webm&quot;) == &#39;probably&#39;) {
      v.src = e.target.getAttribute(&#39;data-file&#39;)+&#39;.webm&#39;;
    } else if (v.canPlayType(&quot;video/mp4&quot;) == &#39;maybe&#39; || v.canPlayType(&quot;video/mp4&quot;) == &#39;probably&#39;) {
      v.src = e.target.getAttribute(&#39;data-file&#39;)+&#39;.mp4&#39;;
    }</strong>
    v.load();
  }
&lt;/script&gt;</code></pre>

<p><a href="http://dev.opera.com/static/articles/2010/introduction-html5-video/basic-swap/"><cite>Example 3: basic video swap</cite></a>.</p>

<p>If we now combine this approach (and keep in mind that this is only a very simplified example – there are many more elegant ways to solve this particular problem) with our more visually appealing custom controller, we already have the basis for a rather nifty video player…all put together with nothing more than pure web standards and the power of the new HTML5 native video support.</p>

<div class="screenshot">
<img src="http://forum-test.oslo.osa/kirby/content/articles/325-introduction-to-html5-video/fancy-swap.jpg" alt="A basic video gallery" />
<p class="caption">A basic video gallery/playlist using the <code>&lt;video&gt;</code> element.</p>
</div>

<p><a href="http://dev.opera.com/static/articles/2010/introduction-html5-video/fancy-swap/"><cite>Example 4: fancy video swap</cite></a>.</p>

<p>Does this spell the end for plugin-based video solutions of old? In the short term, it may still be a bit too early to start throwing out our Flash players. There is still a sizeable number of users out there who don&#39;t have a browser capable of displaying native video, and the issue around different formats and codec is still causing a few headaches for those who rightly wish to take advantage of HTML5 <code>&lt;video&gt;</code> in <strong>all</strong> modern browsers. But now, for the first time, we as developers have an alternative tool at our disposal. And having choice is always a good thing.</p>

<h2 id="more">Read more</h2>
<ul>
<li><a href="http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2">Everything you need to know about HTML5 video and audio</a> - and it really is <em>everything</em>!</li>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#video"><code>&lt;video&gt;</code> specification</a></li>
<li><a href="http://my.opera.com/core/blog/2009/12/31/re-introducing-video">How <code>&lt;video&gt;</code> is implemented in Opera</a></li>
<li><a href="http://dev.opera.com/articles/view/accessible-html5-video-with-javascripted-captions/">Accessible HTML5 Video with JavaScripted captions</a></li>
</ul></p>
