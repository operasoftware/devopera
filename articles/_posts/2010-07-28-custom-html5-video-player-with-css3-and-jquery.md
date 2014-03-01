---
title: Building a Custom HTML5 Video Player With CSS3 and jQuery
authors:
- ionut-colceriu
intro: 'In this article we make full use of the HTML5 video element and associated media elements API — along with jQuery and some CSS3 magic — to make a fully-customizable, themeable HTML5 video player. To round things off, the player is encapsulated as a jQuery plugin for easier reuse.'
license: cc-by-nc-sa-3.0
layout: article
---
<h2>Introduction</h2>

<p>The HTML5 <code>&lt;video&gt;</code> element is already supported by most modern browsers, and even IE has support announced for version 9. There are many advantages of having video embedded natively in the browser (covered in the article <a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a> by Bruce Lawson), so many developers are trying to use it as soon as possible. There are a couple of barriers to this that remain, most notably the problem of which codecs are supported in each browser, with a disagreement between Opera/Firefox and IE/Safari. That might not be a problem for much longer though, with Google recently releasing the VP8 codec, and <a href="http://www.webmproject.org/">the WebM project</a> coming into existence. Opera, Firefox, Chrome and IE9 all have support in final builds, developer builds, or at least support announced for this format, and Flash will be able to play VP8. This means that we will soon be able to create a single version of the video that will play in the <code>&lt;video&gt;</code> element in most browsers, and the Flash Player in those that don't support WebM natively.</p>

<p>The other major barrier to consider is building up a custom HTML5 <code>&lt;video&gt;</code> player &mdash; this is where a Flash-only solution currently has an advantage, with the powerful Flash IDE providing an easy interface with which to create a customized video player component. IF we want to write a customised player for the HTML5 <code>&lt;video&gt;</code> element we need to handcode all the HTML5, CSS3, JavaScript, and any other open standards we want to use to build a player!</p>

<p>And this is where this article comes in. This is the first of a series in which we will look at building up an easily customizable HTML5 <code>&lt;video&gt;</code> player, including packaging it as a simple jQuery plugin, choosing control types and outputting custom CSS for your own situation. In this article we will look at:</p>

	<ol>
<li><a href="#sec1">Video controls</a></li>
<li><a href="#sec2">Basic markup for controls</a></li>
<li><a href="#sec3">Packaging the player as a jQuery plugin</a></li>
<li><a href="#sec4">Look and Feel</a></li>
<li><a href="#sec5">Themeing the player</a></li>
	</ol>

<p class="note">We'll use jQuery for easier DOM manipulation, and jQuery UI for the slider controls used for seeking and changing the volume level. To build a scalable solution, we'll wrap everything up in a jQuery plugin.</p>

<h2 id="sec1">Video controls</h2>

<p>As professional web designers, we want to create a video player that looks consistent across browsers. Each browser however provides its own different look and feel for the player, from the minimal approach of Firefox and Chrome, to the more shiny controls of Opera and Safari (see Figure 1 for the controls in each browser). If we want our controls to look the same across all browsers, and integrate with our own design, we'll have to create our own controls from scratch. This is not as hard as it seems.</p>

<p><img src="native-video-controls.jpg" width="630" height="400" alt="Native browser video controls" /></p>
<p class="comment">Figure 1: Native browser video controls across different browsers</p>

<p>All media elements in HTML5 support the <a href="http://www.w3.org/TR/html5/the-iframe-element.html#media-elements">media elements API</a>, which we can access using JavaScript and use to easily wire up functions such as play, pause, etc. to any buttons we create. Because the native video player plays nicely with other open web technologies, we can create our controls using HTML, CSS, SVG or whatever else we like.</p>



<h2 id="sec2">Basic markup for controls</h2>

<p>First, we'll need to create the actual markup for the video controls. We'll need a Play/Pause button, a seek bar, a timer and a volume button and slider. We'll insert the markup for the controls after the <code>&lt;video&gt;</code> element, and wrap them up in another element.</p>

<pre><code>&lt;div class="ghinda-video-controls"&gt;
	&lt;a class="ghinda-video-play" title="Play/Pause"&gt;&lt;/a&gt;
	&lt;div class="ghinda-video-seek"&gt;&lt;/div&gt;
	&lt;div class="ghinda-video-timer"&gt;00:00&lt;/div&gt;
	&lt;div class="ghinda-volume-box"&gt;
		&lt;div class="ghinda-volume-slider"&gt;&lt;/div&gt;
		&lt;a class="ghinda-volume-button" title="Mute/Unmute"&gt;&lt;/a&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre>

<p class="note">We've used classes instead of IDs for all elements, to be able to use the same code for multiple video players on the same page.</p>

<h2 id="sec3">Packaging the player as a jQuery plugin</h2>

<p>After creating the markup we'll have to tie our elements to the media elements API, in order to control the video's behavior. As noted before, we'll package the player as a jQuery plugin, which will also aid reuse on multiple elements.</p>

<p class="note">AUTHOR'S NOTE: I'm going to assume you are familiar with the basic anatomy of a jQuery plugin, and JavaScript, so I'm only briefly going to explain the script. If you need more information on these subjects, consult Craig Buckler's <a href="http://www.sitepoint.com/blogs/how-to-develop-a-jquery-plugin/">How to develop a jQuery plugin</a> tutorial, and <a href="http://dev.opera.com/articles/view/programming-the-real-basics/">the JavaScript section of the Opera web standards curriculum</a>.</p>

<pre><code>$.fn.gVideo = function(options) {
	// build main options before element iteration
	var defaults = {
		theme: 'simpledark',
		childtheme: ''
	};
	var options = $.extend(defaults, options);
	// iterate and reformat each matched element
	return this.each(function() {
		var $gVideo = $(this);

		//create html structure
		//main wrapper
		var $video_wrap = $('&lt;div&gt;&lt;/div&gt;').addClass('ghinda-video-player').addClass(options.theme).addClass(options.childtheme);
		//controls wraper
		var $video_controls = $('&lt;div class=&quot;ghinda-video-controls&quot;&gt;&lt;a class=&quot;ghinda-video-play&quot; title=&quot;Play/Pause&quot;&gt;&lt;/a&gt;&lt;div class=&quot;ghinda-video-seek&quot;&gt;&lt;/div&gt;&lt;div class=&quot;ghinda-video-timer&quot;&gt;00:00&lt;/div&gt;&lt;div class=&quot;ghinda-volume-box&quot;&gt;&lt;div class=&quot;ghinda-volume-slider&quot;&gt;&lt;/div&gt;&lt;a class=&quot;ghinda-volume-button&quot; title=&quot;Mute/Unmute&quot;&gt;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;');
		$gVideo.wrap($video_wrap);
		$gVideo.after($video_controls);</code></pre>

<p>Here we are using jQuery to create the video player markup dynamically (but not the video player itself), and removing the <code>controls</code> attribute once the script loads. That's because in cases where the user has JavaScript disabled, these controls will be useless, and he/she won't even get the native browser controls to the video element. It makes a lot more sense to start with the <code>controls</code> attribute present in case the script fails to load, and then removing it so the player will use our custom controls only after the script successfully loads.</p>

<p>Next, we'll have to target each of the elements in the controls, in order to be able to add listeners.</p>

<pre><code>//get newly created elements
var $video_container = $gVideo.parent('.ghinda-video-player');
var $video_controls = $('.ghinda-video-controls', $video_container);
var $ghinda_play_btn = $('.ghinda-video-play', $video_container);
var $ghinda_video_seek = $('.ghinda-video-seek', $video_container);
var $ghinda_video_timer = $('.ghinda-video-timer', $video_container);
var $ghinda_volume = $('.ghinda-volume-slider', $video_container);
var $ghinda_volume_btn = $('.ghinda-volume-button', $video_container);

$video_controls.hide(); // keep the controls hidden</code></pre>

<p>We're targeting each control by its class; we'll keep the controls hidden until everything is ready.</p>

<p>Now for the Play/Pause controls:</p>

<pre><code>var gPlay = function() {
	if($gVideo.attr('paused') == false) {
		$gVideo[0].pause();
	} else {
		$gVideo[0].play();
	}
};

$ghinda_play_btn.click(gPlay);
$gVideo.click(gPlay);

$gVideo.bind('play', function() {
	$ghinda_play_btn.addClass('ghinda-paused-button');
});

$gVideo.bind('pause', function() {
	$ghinda_play_btn.removeClass('ghinda-paused-button');
});

$gVideo.bind('ended', function() {
	$ghinda_play_btn.removeClass('ghinda-paused-button');
});
</code></pre>

<p>Most browsers provide a secondary set of controls for the video in the right-click (ctrl-click on a Mac) context menu. Because of the way we are putting this together, if a user activated these alternative controls it would break our custom controls. In order to avoid this we're attaching events to the Play/Pause button itself, <em>and</em> the "Play", "Pause" and "Ended" listeners of the video player.</p>

<p>We're also adding and removing classes from our button to change the look of it, depending on the state of the video (Playing or Paused).</p>

<p>For creating the seek slider we'll use the jQuery UI Slider component.</p>

<pre><code>var createSeek = function() {
	if($gVideo.attr('readyState')) {
		var video_duration = $gVideo.attr('duration');
		$ghinda_video_seek.slider({
			value: 0,
			step: 0.01,
			orientation: "horizontal",
			range: "min",
			max: video_duration,
			animate: true,
			slide: function(){
				seeksliding = true;
			},
			stop:function(e,ui){
				seeksliding = false;
				$gVideo.attr("currentTime",ui.value);
			}
		});
		$video_controls.show();
	} else {
		setTimeout(createSeek, 150);
	}
};

createSeek();</code></pre>

<p>As you can see, we're using a recursive function, while reading the <code>readyState</code> of the video. We have to keep polling the video until it is ready, otherwise we can't determine the duration, and can't create the slider. Once the video is ready, we initialize the slider, and also show the controls.</p>

<p>Next we'll create the timer, and attach it to the <code>timeupdate</code> listener of the video element.</p>

<pre><code>var gTimeFormat=function(seconds){
	var m=Math.floor(seconds/60)&lt;10?"0"+Math.floor(seconds/60):Math.floor(seconds/60);
	var s=Math.floor(seconds-(m*60))&lt;10?"0"+Math.floor(seconds-(m*60)):Math.floor(seconds-(m*60));
	return m+":"+s;
};

var seekUpdate = function() {
	var currenttime = $gVideo.attr('currentTime');
	if(!seeksliding) $ghinda_video_seek.slider('value', currenttime);
	$ghinda_video_timer.text(gTimeFormat(currenttime));
};

$gVideo.bind('timeupdate', seekUpdate);</code></pre>

<p>Here we're using the <code>seekUpdate</code> function to get the <code>currentTime</code> attribute of the video, and the <code>gTimeFormat</code> function to format the actual value received.</p>

<p>For the volume controls, we'll also use the jQuery UI slider and a custom function on the volume button for muting and un-muting the video.</p>

<pre><code>$ghinda_volume.slider({
	value: 1,
	orientation: "vertical",
	range: "min",
	max: 1,
	step: 0.05,
	animate: true,
	slide:function(e,ui){
		$gVideo.attr('muted',false);
		video_volume = ui.value;
		$gVideo.attr('volume',ui.value);
	}
});

var muteVolume = function() {
	if($gVideo.attr('muted')==true) {
		$gVideo.attr('muted', false);
		$ghinda_volume.slider('value', video_volume);

		$ghinda_volume_btn.removeClass('ghinda-volume-mute');
	} else {
		$gVideo.attr('muted', true);
		$ghinda_volume.slider('value', '0');

		$ghinda_volume_btn.addClass('ghinda-volume-mute');
	};
};

$ghinda_volume_btn.click(muteVolume);</code></pre>

<p>Finally we're going the remove the <code>controls</code> attribute from the <code>&lt;video&gt;</code>, because by this point our own custom controls are set up and we want to use those instead of the browser defaults.</p>

<pre><code>$gVideo.removeAttr('controls');</code></pre>

<p>Now that we have our plugin all done, we can call it on any video element we want, like so.</p>

<pre><code>$('video').gVideo();</code></pre>

<p>This will call the plugin on all the video elements on the page.</p>

<h2 id="sec4">Look and Feel</h2>

<p>And now for the fun part, the look and feel of the video player. Once the plugin is ready, customizing the controls is really easy with a little bit of CSS. As you've notice we haven't added any styling to the controls. We'll use CSS3 for all the customizations regarding the player.</p>

<p>First, we'll add some style to the main video player container. We'll use this as the main chrome for the player.</p>

<pre><code>.ghinda-video-player {
	float: left;
	padding: 10px;
	border: 5px solid #61625d;

	-moz-border-radius: 5px; /* FF1+ */
        -ms-border-radius: 5px; /* IE future proofing */
	-webkit-border-radius: 5px; /* Saf3+, Chrome */
	border-radius: 5px; /* Opera 10.5, IE 9 */

	background: #000000;
	background-image: -moz-linear-gradient(top, #313131, #000000); /* FF3.6 */
	background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #313131),color-stop(1, #000000)); /* Saf4+, Chrome */

	box-shadow: inset 0 15px 35px #535353;
}</code></pre>

<p>We've floated it left, to prevent it from expanding to the full width of the player, instead keeping it restrained to the width of the actual video element. We're using gradients and border radius to add polish, plus an inset box shadow to emulate the gradient effect in Opera, as it does not yet support gradients (as of 10.60, the latest version at the time of writing).</p>

<p>Next we'll float all the controls to the left, to align them horizontally. We'll use opacity and transitions on the Play/Pause and Volume Mute/Unmute buttons to create a nice hover effect.</p>

<pre><code>.ghinda-video-play {
	display: block;
	width: 22px;
	height: 22px;
	margin-right: 15px;
	background: url(../images/play-icon.png) no-repeat;

	opacity: 0.7;

	-moz-transition: all 0.2s ease-in-out; /* Firefox */
        -ms-transition: all 0.2s ease-in-out; /* IE future proofing */
        -o-transition: all 0.2s ease-in-out;  /* Opera */
	-webkit-transition: all 0.2s ease-in-out; /* Safari and Chrome */
	transition: all 0.2s ease-in-out;
}

.ghinda-paused-button {
	background: url(../images/pause-icon.png) no-repeat;
}

.ghinda-video-play:hover {
	opacity: 1;
}</code></pre>

<p>I'm sure you followed the JavaScript part carefully, and saw that we're adding and removing classes on the Play/Pause button depending on the state of the video(Playing/Paused). That's why the <code>ghida-paused-button</code> class overwrites the background property of the <code>ghinda-video-play</code> class.</p>

<p>Now for the sliders. As you saw before, we're using the jQuery UI slider control for both the seek bar and the volume level. This component has its own styles defined in jQuery UI's stylesheet, but we'll completely overwrite these to make the look of the slider more in keeping with the rest of the player.</p>

<pre><code>.ghinda-video-seek .ui-slider-handle {
	width: 15px;
	height: 15px;
	border: 1px solid #333;
	top: -4px;

	-moz-border-radius:10px;
        -ms-border-radius:10px;
	-webkit-border-radius:10px;
	border-radius:10px;

	background: #e6e6e6;
	background-image: -moz-linear-gradient(top, #e6e6e6, #d5d5d5);
	background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #e6e6e6),color-stop(1, #d5d5d5));

	box-shadow: inset 0 -3px 3px #d5d5d5;
}

.ghinda-video-seek .ui-slider-handle.ui-state-hover {
	background: #fff;
}

.ghinda-video-seek .ui-slider-range {
	-moz-border-radius:15px;
        -ms-border-radius:15px;
	-webkit-border-radius:15px;
	border-radius:15px;

	background: #4cbae8;
	background-image: -moz-linear-gradient(top, #4cbae8, #39a2ce);
	background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #4cbae8),color-stop(1, #39a2ce));

	box-shadow: inset 0 -3px 3px #39a2ce;
}</code></pre>

<p>Currently the volume slider is also visible at all times, positioned next to the volume button. We'll change this so the slider is hidden by default, and shows up only when we're hovering the Mute/Unmute button, to make it look a bit more dynamic and neater. Again, transitions are our answer here:</p>

<pre><code>.ghinda-volume-box {
	height: 30px;

	-moz-transition: all 0.1s ease-in-out; /* Firefox */
        -ms-transition: all 0.1s ease-in-out; /* IE future proofing */
        -o-transition: all 0.2s ease-in-out;  /* Opera */
	-webkit-transition: all 0.1s ease-in-out; /* Safari and Chrome */
	transition: all 0.1s ease-in-out;
}

.ghinda-volume-box:hover {
	height: 135px;
	padding-top: 5px;
}

.ghinda-volume-slider {
	visibility: hidden;
	opacity: 0;

	-moz-transition: all 0.1s ease-in-out; /* Firefox */
        -ms-transition: all 0.1s ease-in-out;  /* IE future proofing */
        -o-transition: all 0.1s ease-in-out;  /* Opera */
	-webkit-transition: all 0.1s ease-in-out; /* Safari and Chrome */
	transition: all 0.1s ease-in-out;
}

.ghinda-volume-box:hover .ghinda-volume-slider {
	position: relative;
	visibility: visible;
	opacity: 1;
}</code></pre>

<p>We're hiding the volume slider by default, and giving the volume container a small fixed height that just fits the width of the volume button. We're also assigning transitions to both.</p>

<p>When the volume button is hovered, its height increases via the specified transition; we then use the <code>.ghinda-volume-box:hover .ghinda-volume-slider</code> descendant selector to transition the volume slider into view.</p>

<p>With basic CSS knowledge and some new CSS3 properties, we've already created a nice interface for our player, it looks like Figure 2:</p>

<p><img src="dark-player-shot.jpg" width="630" height="384" alt="Video player screenshot" /></p>
<p class="comment">Figure 2: Our finished video player.</p>


<h2 id="sec5">Themeing the player</h2>

<p>As you probably noticed, when creating the jQuery plugin, we've defined a set of default options. These options are <code>theme</code> and <code>childtheme</code>, and can be changed when calling the plugin, allowing us to easily apply custom themes as desired.</p>

<p>A theme represents a <strong>completely new set of CSS rules</strong> for every single control. A child theme on the other hand is a set of CSS rules that <strong>builds upon the rules of an existing theme</strong>, adding or overwriting the "parent" theme's style.</p>

<p>We can specify both of there options or only one, when calling the jQuery plugin.</p>

<pre><code>$('video').gVideo({
	childtheme:'smalldark'
});
</code></pre>

<p>In the above example code we are calling the plugin with the <code>smalldark</code> child theme specified. This will apply our default parent theme, and then apply our child theme over the top of it, overwriting a small portion of the rules set by the parent theme. See Figure 3 for the Smalldark theme in action.</p>

<p><img src="smalldark-child-theme.jpg" width="490" height="218" alt="Smalldark child theme" /></p>
<p class="comment">Figure 3: the Smalldark child theme in action.</p>

<p>You can <a href="index.html">check out the final video player example live</a> to see both themes in action.</p>

<p class="note">The techniques contained within these articles about HTML5 <code>&lt;video&gt;</code> have resulted in a production-ready jQuery plugin. You can check out the latest version, and follow the development, on the <a href="http://github.com/ghinda/acornmediaplayer">Github repository for the Acorn Media Player</a>. This code is up to date and actively maintained.</p>

<h2>Summary</h2>

<p>Building our own custom video player with HTML5 video, JavaScript and CSS3 is fairly easy. By using JavaScript only for the actual functionality of the controls, and CSS3 for everything that involves the look and feel of the player, we get a powerful, easily customizable solution.</p>
<h2 id="resources">HTML5 Video resources</h2>
<ul>
<li><a href="/articles/view/introduction-html5-video/">Introduction to HTML5 video</a></li>
<li><a href="/articles/view/accessible-html5-video-with-javascripted-captions/">Accessible HTML5 Video with JavaScripted captions</a></li>
<li><a href="http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2">Everything you need to know about HTML5 video and audio</a> - and it really is <em>everything</em>!</li>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#video"><code>&lt;video&gt;</code> specification</a></li>
<li><a href="http://my.opera.com/core/blog/2009/12/31/re-introducing-video">How <code>&lt;video&gt;</code> is implemented in Opera</a></li>
</ul>
