Title: A more accessible HTML5 <video> player
----
Date: 2010-11-11 11:25:23
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: https://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<h2>Introduction</h2>

<p>In my last article, I implemented a <a href="https://dev.opera.com/articles/view/custom-html5-video-player-with-css3-and-jquery/">customisable, cross-browser compatible video player</a> using the HTML5 <code>&lt;video&gt;</code> element. This is a good solution for many reasons, including accessibility - HTML5 <code>&lt;video&gt;</code> is a lot more accessible than plugin-based alternatives, for example in terms of keyboard accessibility out of the box, and easier to customise without the need for a costly IDE.</p> 

<p>But our work does not stop there. the solution I have built so far, like other JavaScript-based widgets, still has a number of accessibility concerns in terms of semantics and discoverability, which could be addressed using the W3C Web Accessibility Initiative&#39;s <a href="http://www.w3.org/TR/wai-aria/"><abbr title="Web Accessibility Inititative Accessible Rich Internet Applications">WAI-ARIA</abbr></a> specification.</p>
	
	<p>In this article I will show you how to address such problems with WAI-ARIA, and add some further accessibility enhancements to the player, such as captions.</p>
	
	<h2>Contents</h2>
	<ol>
		<li><a href="#multimedia">Multimedia</a></li>
		<li><a href="#state">The current state of native browser controls</a></li>
		<li>
			<a href="#custom">A custom, accessible HTML5 video player</a>		
			<ul>
				<li><a href="#progressive">Progressive enhancement</a></li>
				<li>
					<a href="#controls">Player controls </a>
					<ul>
						<li><a href="#buttons">Buttons</a></li>
						<li><a href="#sliders">Sliders</a></li>
					</ul>
				</li>				
			</ul>
		</li>
		<li>
			<a href="#wai-aria">WAI-ARIA</a>
			<ul>
				<li><a href="#ariasliders">ARIA Sliders</a></li>
			</ul> 
		</li>
		<li><a href="#captions">Captions and transcripts</a></li>
		<li><a href="#accesskeys">Accesskeys?</a></li>
		<li><a href="#finishing">Finishing touches?</a></li>
		<li><a href="#fallback">Fallback</a></li>
		<li><a href="#conclusion">Conclusion</a></li>
				<li><a href="#futher-reading">Further reading</a></li>
	</ol>
	
	<h2 id="multimedia">Multimedia</h2>
	<p>Before the native HTML5 <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> elements were available, all multimedia embedding on the Web relied on third party browser plugins. These plugins present a multitude of accessibility concerns, from difficult keyboard navigation to not being natively accessible to AT. </p>
	
	<p>Solutions to these problems are being constantly developed by plugin makers and developers, but they are non-standard, and not widely adopted.</p>
	
	<h2 id="state">The current state of native browser controls</h2>
	<p>The latest versions of popular web browsers all support both &lt;audio&gt; and &lt;video&gt;, and each browser provides a set of control buttons for the elements. The problem is that not every browser provides keyboard access to these controls:</p>
	
	<ul>
	<li>As of September 2010, Opera 10.6 seems to be the only browser that provides full keyboard access to all individual player controls (see Figure 1).</li>
	
	<li>Firefox 3.6.10 also provides full support for controlling the behavior of the player, but the user can’t access the individual controls via the keyboard, as such. Instead, users can focus the element, then trigger the play event using the space bar, seek with the left and right arrow keys, and change volume levels using the up and down arrow keys.</li>

	<li>Internet Explorer 9 beta employs a pretty much identical system to Firefox 3.6.10.</li>
	
	<li>Safari 5 and Chrome 6 can&#39;t access the player via the keyboard.</li>
	</ul>
	
	
	<p><img alt="Native Browser Video controls in Opera 10" src="http://forum-test.oslo.osa/kirby/content/articles/389-a-more-accessible-html5-video-player/opera-video-controls.png" /></p>
	<p class="comment">Figure 1: Native browser video controls in Opera 10.63, with the volume button focused.</p>
	
	<h2 id="custom">A custom, accessible HTML5 video player</h2>
	<p>The solution to these problems is to create our own multimedia player, and render keyboard accessible controls using the <a href="https://html.spec.whatwg.org/multipage/the-video-element.html#media-elements">media elements API</a>.</p>
	
	<p>In this article we’ll be focusing on adapting the custom-built video player from my last article with some jQuery and CSS3, making it as accessible as possible, and adding new features along the way, such as closed captions and transcriptions. </p>
	
	<h3 id="progressive">Progressive enhancement</h3>
	<p>Our jQuery plugin is built with progressive enhancement in mind — that’s why it’s being built on top of a standard video element. This way, if JavaScript is disabled, the user will get the standard controls provided by the browser. These should provide a basic level of accessibility, even if right now not all browsers provide this &quot;feature&quot;, and some don’t even display them when JavaScript is disabled. </p>
	
	<h3 id="controls">Player controls</h3>
	<p>This is how our original markup for the controls looked: </p>
	
<pre><code>&lt;div class=&quot;ghinda-video-controls&quot;&gt;
	&lt;a class=&quot;ghinda-video-play&quot; title=&quot;Play/Pause&quot;&gt;&lt;/a&gt;
	&lt;div class=&quot;ghinda-video-seek&quot;&gt;&lt;/div&gt;
	&lt;div class=&quot;ghinda-video-timer&quot;&gt;00:00&lt;/div&gt;
	&lt;div class=&quot;ghinda-volume-box&quot;&gt;
		&lt;div class=&quot;ghinda-volume-slider&quot;&gt;&lt;/div&gt;
		&lt;a class=&quot;ghinda-volume-button&quot; title=&quot;Mute/Unmute&quot;&gt;&lt;/a&gt;
	&lt;/div&gt;
&lt;/div&gt;</code></pre>

	<p>The first version was mostly a proof-of-concept, and the markup could certainly be improved upon both in terms of semantics and accessibility. Let&#39;s rewrite rewrite this now, using more meaningful elements for each control:</p>
	
<pre><code>&lt;div class=&quot;acorn-video-controls&quot;&gt;
	&lt;button class=&quot;acorn-play-button&quot; title=&quot;Start the playback&quot; aria-controls=&quot;video1&quot;&gt;Play&lt;/button&gt;
	
	&lt;input type=&quot;range&quot; class=&quot;acorn-seek-slider&quot; title=&quot;Video seek control&quot; value=&quot;0&quot; min=&quot;0&quot; max=&quot;150&quot; step=&quot;0.1&quot; aria-controls=&quot;video1&quot;/&gt;
	
	&lt;span class=&quot;acorn-timer&quot;&gt;00:00&lt;/span&gt;
	
	&lt;div class=&quot;acorn-volume-box&quot;&gt;
		&lt;button class=&quot;acorn-volume-button&quot; title=&quot;Mute volume&quot; aria-controls=&quot;video1&quot;&gt;Mute&lt;/button&gt;
		&lt;input type=&quot;range&quot; class=&quot;acorn-volume-slider&quot; title=&quot;&quot; value=&quot;1&quot; min=&quot;0&quot; max=&quot;1&quot; step=&quot;0.05&quot; aria-controls=&quot;video1&quot;/&gt;
	&lt;/div&gt;
&lt;/div&gt;</code></pre>

	<p>First, we replaced the <code>&lt;a&gt;</code> elements that behaved like buttons with actual <code>&lt;button&gt;</code> elements, so that the markup shows their meaning and screen readers interpret them correctly.</p>
	
	<p>Instead of meaningless <code>&lt;div&gt;</code>s for the sliders, we are using HTML5 native sliders: <code>&lt;input type=&quot;range&quot;&gt;</code></p>
	
	<p>You can also see a new attribute beside the usuals suspects. <code>aria-controls</code> is part of the WAI-ARIA spec, and specifies which element is being controlled. You can specify an element’s ID or a list of IDs. Our value right now is <code>video1</code>, but in actual production we’d use the video’s ID or generate a unique one in case one is not provided. The basic markup looks like Figure 2.</p>
	
	<p><img alt="Video player controls, with the new markup" src="http://forum-test.oslo.osa/kirby/content/articles/389-a-more-accessible-html5-video-player/barebones-video-controls.png" /></p>
	<p class="comment">Figure 2: Custom video player controls, with the new markup.</p>
	
		<p class="note">If you’re completely new to WAI-ARIA I strongly recommend reading the <a href="https://dev.opera.com/articles/view/introduction-to-wai-aria/">Introduction to WAI ARIA article</a> on <a href="https://dev.opera.com/">Dev.Opera</a>. </p>
	
	<h4 id="buttons">Buttons</h4>
	<p>All our buttons have meaningful labels and <code>title</code> attributes. The <code>title</code> attributes also provide tooltips, which are especially useful if the designer decides to just show the buttons in the UI, without labels. They also benefit screen reader users by providing them with a longer explanation of what the control actually does. </p>
	
	<p>In our previous markup, you could see that the label for the Play button was &quot;Play/Pause&quot;, and the label for the Mute button was &quot;Mute/Unmute&quot;, but in the new version we’re labeling them just &quot;Play&quot; and &quot;Mute&quot;. That’s because we’re now using JavaScript to change the label on each button after it’s pressed. So, after you’ve pressed the Play button, the label on it will become &quot;Pause&quot;. </p>
	
	<p>We’re also adding different classes to each button after they’re pressed. </p>
	
	<h4 id="sliders">Sliders</h4>
	<p>For the seek and volume sliders we’ve used the HTML5 <code>&lt;input type=&quot;range&quot;&gt;</code> form element type. Unfortunately, things are not as simple as you&#39;d hope here:</p>
	
	<ul>
	<li>Opera is the only browser that fully supports the element, with keyboard accessibility for both horizontal and vertical sliders.</li>
	
<li>Chrome supports it, with keyboard accessibility, but it does not support vertical sliders. Safari is pretty much the same, but without keyboard accessibility.</li>

	<li>Firefox (both 3.6 and Minefield 4.0b7), and Internet Explorer 9 Beta don’t support sliders at all and fall back to regular text inputs.</li>
	</ul>
	
	<p>Because of these problems, we’ll still be using jQuery UI to create the sliders, but we&#39;ll still provide native sliders as an option to our plugin, for when they get properly implemented everywhere. </p>
	
	<p>In the previous version of our plugin, we called the UI slider plugin on an empty <code>&lt;div&gt;</code>, but now we’re going to call it on the <code>&lt;input&gt;</code> element. We now have a problem, because the plugin adds classes to our slider, and appends other elements, such as the slider handle, to our element. This is not going to work because <code>&lt;input&gt;</code> is inline, so cannot wrap around other elements.  </p>
	
	<p>That’s why before calling the slider plugin we will have to remove our <code>&lt;input&gt;</code>, replace it with a <code>&lt;div&gt;</code> (or <code>&lt;p&gt;</code> or any other regular HTML element) and call the plugin on it. </p>
	
	<h2 id="wai-aria">WAI-ARIA</h2>
	<p>When rewriting our original markup, we could have kept our original elements, and added ARIA roles to them, for example adding <code>role=&quot;button&quot;</code> to the <code>&lt;a&gt;</code> elements. For users of AT, this would have made them behave almost the same as <code>&lt;button&gt;</code> elements. However, there are a number of problems with this approach. </p>
	
	<p>Semantic conflicts can be problem. The <code>&lt;div&gt;</code> element, for example, is semantically neutral and could accept any role, but other elements have their own inherent semantics, and adding random roles to them could result in a conflict between the ARIA role trying to describe the element, and its inherent semantics.</p>
	
	<p>Because of these conflicts, the concept of &quot;implicit ARIA semantics&quot; was born. This way, the spec describes the applied semantics, and the inherent semantic restriction for most elements. For example, the <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code> and <code>&lt;section&gt;</code> elements have the following applied semantics: &quot;article role&quot;, &quot;note role&quot; and &quot;region role&quot;. </p>
	
	<p>Using elements with the native role is immeasurably better than &quot;faking&quot; it, <strong>as long as such an element is available</strong>. You can read more about this in the HTML5 spec in the section that deals with WAI-ARIA (<a href="http://dev.w3.org/html5/spec/Overview.html#annotations-for-assistive-technology-products-aria">Annotations for Assistive Technology Products</a>). </p>
	
	<h3 id="ariaslider">ARIA Sliders</h3>	
	<p>Back to our player, we’ve now resolved the problems with the buttons, but considering we can’t always use the native browser sliders, we still have some work to do on the jQuery UI sliders.</p>

	<p>The UI sliders provide great keyboard accessibility, but don’t have any ARIA support (as of 1.8.4). And, considering the slider is an <code>&lt;a&gt;</code> element pointing to the same document <code>href=&quot;#&quot;</code>, screen readers will interpret it a visited link, and not as a slider control. To get around this we’ll create our own nifty little function to add focusability and ARIA to the slider.</p>

	<p>To make our element be interpreted as a slider by AT, we’ll need to use the <code>slider</code> role on the element. But our slider is composed of two elements: a handle, and a rail. ARIA only requires one element to be tagged with the attribute, so which one should it be? </p>
	
	<p>Considering only one element (for a slider) should receive focus, and jQuery UI provides keyboard control for the slider when the handle is focused, this is our best choice.</p>

	<p>All form elements should be identifiable by users, so we need to label our slider. We can take different approaches for this. We could use the <code>aria-labelledby</code> attribute, use a <code>&lt;label&gt;</code> element and have it point to the slider, or use the <code>title</code> attribute. For our use case, the <code>title</code> attribute is probably the best solution.</p>
	
	<p>Besides the role attribute, an ARIA slider requires the following attributes: </p>
	
	<dl>
		<dt><code>aria-valuenow</code></dt>
		<dd>The current value of the slider.</dd>
		<dt><code>aria-value-min</code></dt>
		<dd>The minimum value.</dd>
		<dt><code>aria-value-max</code></dt>
		<dd>The maximum value the slider can have.</dd>
	</dl>

	<p>By default, the <code>aria-valuenow</code> attribute is used by AT, but the value has to be a number — if we want to provide a more human readable value to the user, we’ll can instead use another ARIA property, <code>aria-valuetext</code>. This value is a string, so, for example, when the user uses the seek slider, instead of providing him with the value &quot;23&quot;, we could provide &quot;23 seconds&quot;. </p>
	
	<p>Having considered all these, this is what our function looks like: </p>
	
<pre><code>var initSliderAccess = function (elem, opts) {
	var accessDefaults = {
	 &#39;role&#39;: &#39;slider&#39;,
	 &#39;aria-valuenow&#39;: parseInt(opts.value),
	 &#39;aria-valuemin&#39;: parseInt(opts.min),
	 &#39;aria-valuemax&#39;: parseInt(opts.max),
	 &#39;aria-valuetext&#39;: opts.valuetext,
	 &#39;tabindex&#39;: &#39;0&#39;
	};
	elem.attr(accessDefaults);       
};</code></pre>

	<p>The function is adapted for the options we’re using when calling the jQuery UI slider. We’re taking two objects as parameters for the function, the first one is the element which we’re manipulating, and the other is the properties object we’re using for the values.</p>
	
	<p>You can see that, beside the <code>role</code> and <code>aria</code> attributes, we’re adding the <code>tabindex</code> attribute. This is to make sure our handle is accessible by keyboard. Also, we’re using <code>parseInt()</code> on some of the values, so that we don’t provide values like &quot;1.54321&quot; to the AT.</p>
	
	<p>In the previous article, to actually make the sliders control our video player, we attached functions to the jQuery provided events <code>slide</code> and <code>stop</code>.</p>
	
	<p>And because we’ll always want to inform the user about the current value of the slider, we’ll have to change the value of <code>&quot;aria-valuenow&quot;</code> and <code>&quot;aria-valuetext&quot;</code> on <code>slide()</code>. </p>

	<p>We’ll add some extra code to our functions. For the seek slider we’ll use this: </p>

<pre><code>sliderUI.attr(&quot;aria-valuenow&quot;, parseInt(ui.value));
sliderUI.attr(&quot;aria-valuetext&quot;, ariaTimeFormat(ui.value));</code></pre>

	<p>The <code>sliderUI</code> object is the slider handle element, and <code>ui.value</code> is the current value of the slider, returned by the plugin. You can see we’re using another function for the <code>aria-valuetext</code> attribute, the <code>ariaTimeFormat()</code> function.</p>

	<p>This is what the <code>ariaTimeFormat()</code> function looks like: </p>
		
<pre><code>var ariaTimeFormat = function(sec) {
	var m = Math.floor(sec/60)&lt;10?&quot;&quot; + Math.floor(sec/60):Math.floor(sec/60);
	var s = Math.floor(sec-(m*60))&lt;10?&quot;&quot; + Math.floor(sec-(m*60)):Math.floor(sec-(m*60));
	var formatedTime;
						
	var min = &#39;minutes&#39;;
	var sec = &#39;seconds&#39;;
	
	if(m==1) min = &#39;minute&#39;;
	if(s==1) sec = &#39;second&#39;;
	
	if (m!=0) {				
		formatedTime = m + &#39; &#39; + min + &#39; &#39; + s + &#39; &#39; + sec;
	} else {						
		formatedTime = s + &#39; &#39; + sec;
	};					
	
	return formatedTime;
};</code></pre>

	<p>This function takes the current value of the slider (the number of seconds where the handle is located), and transforms it into a human-readable string. If the slider is located at 72 (seconds), for example, our function will return &quot;1 minute 12 seconds&quot;. </p>
	
	<p>This is particularly useful for longer videos, where a seek progress of 25 minutes would be reported as 1500 seconds without our function, making it rather confusing, especially to screen reader users.</p>

	<p>We’ll use the same <code>ARIAfication</code> function on the volume slider to make it accessible, and modify the volume changing function to change the value of <code>aria-valuenow</code> and <code>aria-valuetext</code> when we’re moving the slider:</p>
	
<pre><code>video.$volume.$handle.attr(&quot;aria-valuenow&quot;, Math.round(volume*100));
video.$volume.$handle.attr(&quot;aria-valuetext&quot;, Math.round(volume*100) + &#39; percent&#39;);
</code></pre>	
	
	<p>You can see we’re multiplying our value by 100. That’s because the volume value of a video ranges between 0 and 1, not between 0 and 100. Also, it makes more sense to give our user a &quot;percent&quot; value for the volume rather than a 1 digit number, that’s why we&#39;re adding a percentage symbol to <code>aria-valuetext</code>, as well as multiplying and rounding the value.</p>
	
	<h2 id="captions">Captions and transcripts</h2>
	<p>As an extremely important accessibility feature, every video/multimedia player should provide support for captions and/or transcripts. Unfortunately the current W3C HTML5 spec does not contain anything related to these.</p>
	
	<p>On the other hand, the WHATWG HTML5 spec (yes, there are two HTML5 specs..) recently got the <code>&lt;track&gt;</code> element for captions added. It &quot;allows authors to specify explicit external timed tracks for media elements&quot;. So, basically, you can specify an external file containing captions, subtitles, descriptions or other timed tracks. You can define multiple <code>&lt;track&gt;</code> elements for different tracks, such as different languages. </p>
	
	<p>The current file format is called WebSRT, and is basically an improved version of <a href="http://en.wikipedia.org/wiki/SubRip">SubRip’s SRT format</a>.</p>
	
	<p>You can read more about it in the <a href="https://html.spec.whatwg.org/multipage/the-video-element.html#the-track-element">WHATWG HTML5 spec</a>. </p>
	
	<p>The element is not present in the W3C spec because of &quot;political&quot; problems, mainly because the current proposed format (WebSRT) conflicts with about 50 other formats, including W3C formats like smilText and TTML. </p>
	
	<p>One major problem is that it’s not implemented in any browser right now, but fear not — we’re going to implement the element on our own, using JavaScript. This is the best future-proof way of dealing with captions right now. That’s because once problems are cleared, and browsers implement the element, we won’t have to change existing markup to use native captions.</p>
	
	<p>The technique we’re going to use is more or less a reversed version of Bruce Lawson’s captioning technique. In case you’re not familiar with it, check out the <a href="https://dev.opera.com/articles/view/accessible-html5-video-with-javascripted-captions/">Accessible HTML5 Video with JavaScripted captions</a> article on Dev Opera.</p>
	
	<p>The technique described in the article uses HTML markup to define the captions, using custom <code>data-</code> attributes to set the time offsets for each caption. It then parses the elements and creates a JavaScript object which it uses to show each caption at the correct time. It also uses CSS generated content to insert timestamps into the content. </p>
	
	<p>We’re going to reverse the technique, and interpret the <code>&lt;track&gt;</code> elements in the same way a browser might.</p>
	
	<p>First we’re going to need an interpreter for our files, so we’re going to make use of <a href="http://silvia-pfeiffer.de/">Silvia Pfeiffer</a>’s <a href="http://blog.gingertech.net/2009/07/29/first-experiments-with-itext/">SRT parser — see this article for discussions</a>, and her <a href="http://www.annodex.net/~silvia/itext/">SRT parser itext demo</a>.</p>
	
	<p>Now, in our caption initiation function, we’re going to look for <code>&lt;track&gt;</code> elements. If we find more than one element, we’re going to generate markup and allow the user to select the caption from a list. The spec includes the <code>label</code> attribute for the <code>&lt;track&gt;</code> element, defining it as &quot;a user-readable title for the track&quot; which &quot;is used by user agents when listing subtitle, caption, and audio description tracks in their user interface&quot;. So, this is the attribute we’re going to use in our UI. </p>
	
<pre><code>&lt;ul&gt;
	&lt;li&gt;
		&lt;label&gt;
			&lt;input type=&quot;radio&quot; name=&quot;acornCaptions&quot; checked=&quot;checked&quot; /&gt;
			None
		&lt;/label&gt;
	&lt;/li&gt;
	&lt;li&gt;
		&lt;label&gt;
			&lt;input type=&quot;radio&quot; name=&quot;acornCaptions&quot; /&gt;
			English &lt;!-- this is the &quot;label&quot; attribute of the &lt;track&gt; --&gt;
		&lt;/label&gt;
	&lt;/li&gt;
	&lt;li&gt;
		&lt;label&gt;
			&lt;input type=&quot;radio&quot; name=&quot;acornCaptions&quot; /&gt;
			Romani &lt;!-- this is the &quot;label&quot; attribute of the &lt;track&gt; --&gt;
		&lt;/label&gt;
	&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

	<p>We’re using an unordered list with <code>&lt;input type=&quot;radio&quot;&gt;</code> buttons. We’re wrapping the <code>&lt;input&gt;</code> elements and text into <code>&lt;label&gt;</code>s in order for AT to associate the label with the button, without having to define the <code>&lt;label&gt;</code> separately and assign an unique ID to it and the button.</p>
	
	<p>The actual text for the label is the contents of the <code>label</code> attribute of the <code>&lt;track&gt;</code> element. </p>
	
	<p>When the user selects a caption, we’ll load it with an Ajax call, parse it, create the timed object with each caption, and also generate a transcript. </p>
	
	<p>This sounds more complicated than it actually is:</p>
	
<pre><code>$.ajax({
	url: url,
	success: function(data) {
		// user our SRT parser on the loaded data
		captions = parseSrt(data);
		
		// find the transcript button control and display it
		video.$transcript = video.$container.next(&#39;.acorn-transcript&#39;);
		video.$transcriptBtn.show();
		
		// generate markup for the transcript and append it
		var transcriptText = &#39;&#39;;
		$(captions).each(function() {
			transcriptText += &#39;<span>&#39; + this.content.replace(&quot;&#39;&quot;,&quot;&quot;) + &#39;</span>&#39;;
		});
		video.$transcript.html(transcriptText);
		
		captionsActive = true;
		video.$captions.show();
		
		// in case the video is paused and timeUpdate is not triggered, we&#39;ll updateCaption manually
		if(video.$self.attr(&#39;paused&#39;)) updateCaption();	
				
		video.$captionsBtn.addClass(&#39;acorn-captions-active&#39;).removeClass(&#39;acorn-captions-loading&#39;);
	},
	error: function() {
		// in case there&#39;s an error while loading the caption
		// don&#39;t display anything and show the error if a console is present
		
		captionsActive = false;
		captions = &#39;&#39;;
		video.$transcriptBtn.hide();
		video.$captionsBtn.removeClass(&#39;acorn-captions-active&#39;).removeClass(&#39;acorn-captions-loading&#39;);
		
		if(console) console.log(&#39;Error loading captions&#39;);
	}
});</code></pre>
	
	<p>The code is fairly easy to understand, so I’m going to focus more on the transcripts. You can see we’re generating markup and using the jQuery <code>html()</code> function to add it to our transcript container. We’re using the same markup as in Bruce Lawson’s technique, but this time for the transcript, not the captions.</p>
	
	<p>This way, we’re generating the transcript based on the captions, and are able to have as many versions of the transcript as there are caption versions. </p>
	
	<h2 id="accesskeys">Accesskeys?</h2>
	<p>Most accessible multimedia players and RIAs implement some form of access keys, either using the standard <code>accesskey</code> attribute or by assigning complex keyboard shortcuts with JavaScript. While this may sound great to most developers, survey and use cases prove us wrong. </p>
	
	<p>The “feature”, aimed at making pages and apps more accessible, has proved to be poorly designed and implemented, confusing AT users rather than helping them. </p>
	
	<p>That’s why, I’ve preferred to not implement access keys at all, and make the player controls be controlled using standard TAB based navigation. </p>
	
	<h2 id="finishing">Finishing touches</h2>
	<p>Our plugin takes a standard HTML5 <code>&lt;video&gt;</code> element and creates accessible controls for it, caption and transcript support, and other features, but it does not provide any sort of support for video description. This is something that you should do without relying on the plugin. </p>
	
	<p>My suggestion is that you use the HTML5 <code>&lt;figure&gt;</code> element along with <code>&lt;figcaption&gt;</code>, and use the <code>aria-describedby</code> attribute to link the <code>&lt;video&gt;</code> element with the description. This way when a screen reader, for example, reaches the video, it will also get its description. </p>
	
<pre><code>&lt;figure&gt;
	&lt;video controls=&quot;controls&quot; width=&quot;300&quot; height=&quot;200&quot; preload=&quot;metadata&quot; aria-describedby=&quot;videodescription&quot;&gt;
		&lt;source src=&quot;/path/to/video.webm&quot; /&gt;		
		&lt;track src=&quot;/path/to/caption.srt&quot; kind=&quot;captions&quot; srclang=&quot;rom&quot; label=&quot;Romani&quot; /&gt;					
	&lt;/video&gt;
	&lt;figcaption id=&quot;videodescription&quot;&gt;
		Trailer for the short animation film &quot;Sintel&quot;, the Durian Open Movie project by the Blender Foundation. More information <a href="http://durian.blender.org/" target="_blank">http://durian.blender.org</a>. This represents the video&#39;s description.
	&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

	<h2 id="fallback">Fallback</h2>
	<p>Just like in the previous article about the video player, I’m not going to provide a fallback mechanism because each fallback method comes with its own accessibility problems, be it Flash, Java, Silverlight or anything else. It should be up to the developer to choose the best option for him or her.</p>
	
	<h2 id="conclusion">Conclusion</h2>
	<p>See <a href="demos.html">the final accessible HTML5 video player demos</a>, complete with everything described in the article.</p>
	
	<p class="note">The techniques contained within these articles about HTML5 <code>&lt;video&gt;</code> have resulted in a production-ready jQuery plugin. You can check out the latest version, and follow the development, on the <a href="http://github.com/ghinda/acornmediaplayer">Github repository for the Acorn Media Player</a>.</p>
	
	<p>As HTML5 is being delivered on more and more platforms and devices, it’s essential that developers and browser makers address the accessibility problems while implementing the new features, not afterwards. </p>
		
	<h2 id="futher-reading">Further reading</h2>
	
	<h3>More on &lt;video&gt;</h3>
	<ul>
		<li><a href="http://my.opera.com/core/blog/2010/03/03/everything-you-need-to-know-about-html5-video-and-audio-2">Everything you need to know about HTML5 video and audio</a></li>
		<li><a href="https://dev.opera.com/articles/view/accessible-html5-video-with-javascripted-captions/">Accessible HTML5 Video with JavaScripted captions</a></li>
	</ul>
	
	<h3>Opera Curriculum on Accessibility</h3>
	<ul>
		<li><a href="https://dev.opera.com/articles/view/25-accessibility-basics/">Accessibility basics</a></li>
		<li><a href="https://dev.opera.com/articles/view/26-accessibility-testing/">Accessibility testing</a></li>
	</ul>
	
	<h3>Resources</h3>
	<ul>
		<li><a href="http://html5accessibility.com/">HTML5 accessibility</a></li>
		<li><a href="http://www.alistapart.com/articles/semanticsinhtml5">Semantics in HTML 5</a></li>
		<li><a href="http://hsivonen.iki.fi/html5-roles/">Built-in Accessibility Roles in HTML5</a></li>
		<li><a href="http://www.w3.org/2010/Talks/www2010-dsr-diy-aria/#(1)">DIY Accessible UI Controls with ARIA and HTML</a></li>
		<li><a href="http://terrillthompson.blogspot.com/2010/08/creating-your-own-accessible-html5.html">Terrill Thompson: Creating Your Own Accessible HTML5 Media Player</a></li>
		<li><a href="http://webaim.org/projects/screenreadersurvey2/">Screen Reader User Survey Results</a></li>
		<li><a href="http://www.accessibleculture.org/research/html5-aria/">HTML5, ARIA Roles, and Screen Readers in May 2010</a></li>
		<li><a href="http://en.wikipedia.org/wiki/Access_key">Wikipedia on Access keys</a></li>	
	</ul>
