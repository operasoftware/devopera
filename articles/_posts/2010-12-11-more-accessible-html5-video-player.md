---
title: A More Accessible HTML5 `<video>` Player
authors:
- ionut-colceriu
intro: 'Cristian returns this week with another detailed look at custom HTML5 `<video>` players! Following on from his last article, he shows us how to make a much more accessible, while still visually appealing, video player including WAI-ARIA support, captions, transcripts, and more.'
tags:
- html
- html5
- media
- video
- accessibility
- semantics
- wai-aria
- javascript
license: cc-by-nc-sa-3.0
---

## Introduction

In my last article, I implemented a [customisable, cross-browser compatible video player][1] using the HTML5 `<video>` element. This is a good solution for many reasons, including accessibility - HTML5 `<video>` is a lot more accessible than plugin-based alternatives, for example in terms of keyboard accessibility out of the box, and easier to customise without the need for a costly IDE.

[1]: /articles/custom-html5-video-player-with-css3-and-jquery/

But our work does not stop there. the solution I have built so far, like other JavaScript-based widgets, still has a number of accessibility concerns in terms of semantics and discoverability, which could be addressed using the W3C Web Accessibility Initiative’s [WAI-ARIA][2] specification.

[2]: http://www.w3.org/TR/wai-aria/

In this article I will show you how to address such problems with WAI-ARIA, and add some further accessibility enhancements to the player, such as captions.

## Contents

1. [Multimedia](#multimedia)
2. [The current state of native browser controls](#state)
3. [A custom, accessible HTML5 video player](#custom)
	- [Progressive enhancement](#progressive)
	- [Player controls](#controls)
		- [Buttons](#buttons)
		- [Sliders](#sliders)
4. [WAI-ARIA](#wai-aria)
	- [ARIA Sliders](#ariasliders)
5. [Captions and transcripts](#captions)
6. [Accesskeys?](#accesskeys)
7. [Finishing touches](#finishing)
8. [Fallback](#fallback)
9. [Conclusion](#conclusion)
10. [Further reading](#futher-reading)

## Multimedia {#multimedia}

Before the native HTML5 `<video>` and `<audio>` elements were available, all multimedia embedding on the Web relied on third party browser plugins. These plugins present a multitude of accessibility concerns, from difficult keyboard navigation to not being natively accessible to AT.

Solutions to these problems are being constantly developed by plugin makers and developers, but they are non-standard, and not widely adopted.

## The current state of native browser controls {#state}

The latest versions of popular web browsers all support both `<audio>` and `<video>`, and each browser provides a set of control buttons for the elements. The problem is that not every browser provides keyboard access to these controls:

- As of September 2010, Opera 10.6 seems to be the only browser that provides full keyboard access to all individual player controls (see Figure 1).
- Firefox 3.6.10 also provides full support for controlling the behavior of the player, but the user can’t access the individual controls via the keyboard, as such. Instead, users can focus the element, then trigger the play event using the space bar, seek with the left and right arrow keys, and change volume levels using the up and down arrow keys.
- Internet Explorer 9 beta employs a pretty much identical system to Firefox 3.6.10.
- Safari 5 and Chrome 6 can’t access the player via the keyboard.

<figure class="figure">
	<img src="{{ page.id }}/opera-video-controls.png" alt="Native Browser Video controls in Opera 10" class="figure__media">
	<figcaption class="figure__caption">Figure 1: Native browser video controls in Opera 10.63, with the volume button focused</figcaption>
</figure>

## A custom, accessible HTML5 video player {#custom}

The solution to these problems is to create our own multimedia player, and render keyboard accessible controls using the [media elements API][4].

[4]: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#media-elements

In this article we’ll be focusing on adapting the custom-built video player from my last article with some jQuery and CSS3, making it as accessible as possible, and adding new features along the way, such as closed captions and transcriptions.

### Progressive enhancement {#progressive}

Our jQuery plugin is built with progressive enhancement in mind — that’s why it’s being built on top of a standard video element. This way, if JavaScript is disabled, the user will get the standard controls provided by the browser. These should provide a basic level of accessibility, even if right now not all browsers provide this “feature”, and some don’t even display them when JavaScript is disabled.

### Player controls {#controls}

This is how our original markup for the controls looked:

	<div class="ghinda-video-controls">
		<a class="ghinda-video-play" title="Play/Pause"></a>
		<div class="ghinda-video-seek"></div>
		<div class="ghinda-video-timer">00:00</div>
		<div class="ghinda-volume-box">
			<div class="ghinda-volume-slider"></div>
			<a class="ghinda-volume-button" title="Mute/Unmute"></a>
		</div>
	</div>

The first version was mostly a proof-of-concept, and the markup could certainly be improved upon both in terms of semantics and accessibility. Let’s rewrite rewrite this now, using more meaningful elements for each control:

	<div class="acorn-video-controls">
		<button class="acorn-play-button" title="Start the playback" aria-controls="video1">Play</button>
		<input type="range" class="acorn-seek-slider" title="Video seek control" value="0" min="0" max="150" step="0.1" aria-controls="video1">
		<span class="acorn-timer">00:00</span>
		<div class="acorn-volume-box">
			<button class="acorn-volume-button" title="Mute volume" aria-controls="video1">Mute</button>
			<input type="range" class="acorn-volume-slider" title="" value="1" min="0" max="1" step="0.05" aria-controls="video1">
		</div>
	</div>

First, we replaced the `<a>` elements that behaved like buttons with actual `<button>` elements, so that the markup shows their meaning and screen readers interpret them correctly.

Instead of meaningless `<div>`s for the sliders, we are using HTML5 native sliders: `<input type="range">`

You can also see a new attribute beside the usuals suspects. `aria-controls` is part of the WAI-ARIA spec, and specifies which element is being controlled. You can specify an element’s ID or a list of IDs. Our value right now is `video1`, but in actual production we’d use the video’s ID or generate a unique one in case one is not provided. The basic markup looks like Figure 2.

<figure class="figure">
	<img src="{{ page.id }}/barebones-video-controls.png" alt="Video player controls, with the new markup" class="figure__media">
	<figcaption class="figure__caption">Figure 2: Custom video player controls, with the new markup</figcaption>
</figure>

If you’re completely new to WAI-ARIA I strongly recommend reading the [Introduction to WAI ARIA article][6] on Dev.Opera.

[6]: /articles/introduction-to-wai-aria/

#### Buttons {#buttons}

All our buttons have meaningful labels and `title` attributes. The `title` attributes also provide tooltips, which are especially useful if the designer decides to just show the buttons in the UI, without labels. They also benefit screen reader users by providing them with a longer explanation of what the control actually does.

In our previous markup, you could see that the label for the Play button was “Play/Pause”, and the label for the Mute button was “Mute/Unmute”, but in the new version we’re labeling them just “Play” and “Mute”. That’s because we’re now using JavaScript to change the label on each button after it’s pressed. So, after you’ve pressed the Play button, the label on it will become “Pause”.

We’re also adding different classes to each button after they’re pressed.

#### Sliders {#sliders}

For the seek and volume sliders we’ve used the HTML5 `<input type="range">` form element type. Unfortunately, things are not as simple as you’d hope here:

- Opera is the only browser that fully supports the element, with keyboard accessibility for both horizontal and vertical sliders.
- Chrome supports it, with keyboard accessibility, but it does not support vertical sliders. Safari is pretty much the same, but without keyboard accessibility.
- Firefox (both 3.6 and Minefield 4.0b7), and Internet Explorer 9 Beta don’t support sliders at all and fall back to regular text inputs.

Because of these problems, we’ll still be using jQuery UI to create the sliders, but we’ll still provide native sliders as an option to our plugin, for when they get properly implemented everywhere.

In the previous version of our plugin, we called the UI slider plugin on an empty `<div>`, but now we’re going to call it on the `<input>` element. We now have a problem, because the plugin adds classes to our slider, and appends other elements, such as the slider handle, to our element. This is not going to work because `<input>` is inline, so cannot wrap around other elements.

That’s why before calling the slider plugin we will have to remove our `<input>`, replace it with a `<div>` (or `<p>` or any other regular HTML element) and call the plugin on it.

## WAI-ARIA {#wai-aria}

When rewriting our original markup, we could have kept our original elements, and added ARIA roles to them, for example adding `role="button"` to the `<a>` elements. For users of AT, this would have made them behave almost the same as `<button>` elements. However, there are a number of problems with this approach.

Semantic conflicts can be problem. The `<div>` element, for example, is semantically neutral and could accept any role, but other elements have their own inherent semantics, and adding random roles to them could result in a conflict between the ARIA role trying to describe the element, and its inherent semantics.

Because of these conflicts, the concept of “implicit ARIA semantics” was born. This way, the spec describes the applied semantics, and the inherent semantic restriction for most elements. For example, the `<article>`, `<aside>` and `<section>` elements have the following applied semantics: “article role”, “note role” and “region role”.

Using elements with the native role is immeasurably better than “faking” it, **as long as such an element is available**. You can read more about this in the HTML5 spec in the section that deals with WAI-ARIA ([Annotations for Assistive Technology Products][8]).

[8]: http://dev.w3.org/html5/spec/Overview.html#annotations-for-assistive-technology-products-aria

### ARIA Sliders {#ariasliders}

Back to our player, we’ve now resolved the problems with the buttons, but considering we can’t always use the native browser sliders, we still have some work to do on the jQuery UI sliders.

The UI sliders provide great keyboard accessibility, but don’t have any ARIA support (as of 1.8.4). And, considering the slider is an `<a>` element pointing to the same document `href="#"`, screen readers will interpret it a visited link, and not as a slider control. To get around this we’ll create our own nifty little function to add focusability and ARIA to the slider.

To make our element be interpreted as a slider by AT, we’ll need to use the `slider` role on the element. But our slider is composed of two elements: a handle, and a rail. ARIA only requires one element to be tagged with the attribute, so which one should it be?

Considering only one element (for a slider) should receive focus, and jQuery UI provides keyboard control for the slider when the handle is focused, this is our best choice.

All form elements should be identifiable by users, so we need to label our slider. We can take different approaches for this. We could use the `aria-labelledby` attribute, use a `<label>` element and have it point to the slider, or use the `title` attribute. For our use case, the `title` attribute is probably the best solution.

Besides the role attribute, an ARIA slider requires the following attributes:

- `aria-valuenow` the current value of the slider.
- `aria-value-min` the minimum value.
- `aria-value-max` the maximum value the slider can have.

By default, the `aria-valuenow` attribute is used by AT, but the value has to be a number — if we want to provide a more human readable value to the user, we’ll can instead use another ARIA property, `aria-valuetext`. This value is a string, so, for example, when the user uses the seek slider, instead of providing him with the value “23”, we could provide “23 seconds”.

Having considered all these, this is what our function looks like:

	var initSliderAccess = function (elem, opts) {
		var accessDefaults = {
			'role': 'slider',
			'aria-valuenow': parseInt(opts.value),
			'aria-valuemin': parseInt(opts.min),
			'aria-valuemax': parseInt(opts.max),
			'aria-valuetext': opts.valuetext,
			'tabindex': '0'
		};
		elem.attr(accessDefaults);
	};

The function is adapted for the options we’re using when calling the jQuery UI slider. We’re taking two objects as parameters for the function, the first one is the element which we’re manipulating, and the other is the properties object we’re using for the values.

You can see that, beside the `role` and `aria` attributes, we’re adding the `tabindex` attribute. This is to make sure our handle is accessible by keyboard. Also, we’re using `parseInt()` on some of the values, so that we don’t provide values like “1.54321” to the AT.

In the previous article, to actually make the sliders control our video player, we attached functions to the jQuery provided events `slide` and `stop`.

And because we’ll always want to inform the user about the current value of the slider, we’ll have to change the value of `"aria-valuenow"` and `"aria-valuetext"` on `slide()`.

We’ll add some extra code to our functions. For the seek slider we’ll use this:

	sliderUI.attr('aria-valuenow', parseInt(ui.value));
	sliderUI.attr('aria-valuetext', ariaTimeFormat(ui.value));

The `sliderUI` object is the slider handle element, and `ui.value` is the current value of the slider, returned by the plugin. You can see we’re using another function for the `aria-valuetext` attribute, the `ariaTimeFormat()` function.

This is what the `ariaTimeFormat()` function looks like:

	var ariaTimeFormat = function(sec) {
		var m = Math.floor(sec / 60) < 10 ? '' + Math.floor(sec / 60) : Math.floor(sec / 60);
		var s = Math.floor(sec - (m * 60)) < 10 ? '' + Math.floor(sec - (m * 60)) : Math.floor(sec - (m * 60));
		var formatedTime;

		var min = 'minutes';
		var sec = 'seconds';

		if(m==1) min = 'minute';
		if(s==1) sec = 'second';

		if (m!=0) {
			formatedTime = m + ' ' + min + ' ' + s + ' ' + sec;
		} else {
			formatedTime = s + ' ' + sec;
		};

		return formatedTime;
	};

This function takes the current value of the slider (the number of seconds where the handle is located), and transforms it into a human-readable string. If the slider is located at 72 (seconds), for example, our function will return “1 minute 12 seconds”.

This is particularly useful for longer videos, where a seek progress of 25 minutes would be reported as 1500 seconds without our function, making it rather confusing, especially to screen reader users.

We’ll use the same `ARIAfication` function on the volume slider to make it accessible, and modify the volume changing function to change the value of `aria-valuenow` and `aria-valuetext` when we’re moving the slider:

	video.$volume.$handle.attr('aria-valuenow', Math.round(volume * 100));
	video.$volume.$handle.attr('aria-valuetext', Math.round(volume * 100) + ' percent');

You can see we’re multiplying our value by 100. That’s because the volume value of a video ranges between 0 and 1, not between 0 and 100. Also, it makes more sense to give our user a “percent” value for the volume rather than a 1 digit number, that’s why we’re adding a percentage symbol to `aria-valuetext`, as well as multiplying and rounding the value.

## Captions and transcripts {#captions}

As an extremely important accessibility feature, every video/multimedia player should provide support for captions and/or transcripts. Unfortunately the current W3C HTML5 spec does not contain anything related to these.

On the other hand, the WHATWG HTML5 spec (yes, there are two HTML5 specs..) recently got the `<track>` element for captions added. It “allows authors to specify explicit external timed tracks for media elements”. So, basically, you can specify an external file containing captions, subtitles, descriptions or other timed tracks. You can define multiple `<track>` elements for different tracks, such as different languages.

The current file format is called WebSRT, and is basically an improved version of [SubRip’s SRT format][9].

[9]: http://en.wikipedia.org/wiki/SubRip

You can read more about it in the [WHATWG HTML5 spec][10].

[10]: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#the-track-element

The element is not present in the W3C spec because of “political” problems, mainly because the current proposed format (WebSRT) conflicts with about 50 other formats, including W3C formats like smilText and TTML.

One major problem is that it’s not implemented in any browser right now, but fear not — we’re going to implement the element on our own, using JavaScript. This is the best future-proof way of dealing with captions right now. That’s because once problems are cleared, and browsers implement the element, we won’t have to change existing markup to use native captions.

The technique we’re going to use is more or less a reversed version of Bruce Lawson’s captioning technique. In case you’re not familiar with it, check out the [Accessible HTML5 Video with JavaScripted captions][11] article on Dev Opera.

[11]: /articles/accessible-html5-video-with-javascripted-captions/

The technique described in the article uses HTML markup to define the captions, using custom `data-` attributes to set the time offsets for each caption. It then parses the elements and creates a JavaScript object which it uses to show each caption at the correct time. It also uses CSS generated content to insert timestamps into the content.

We’re going to reverse the technique, and interpret the `<track>` elements in the same way a browser might.

First we’re going to need an interpreter for our files, so we’re going to make use of [Silvia Pfeiffer][12]’s [SRT parser — see this article for discussions][13], and her [SRT parser itext demo][14].

[12]: http://silvia-pfeiffer.de/
[13]: http://blog.gingertech.net/2009/07/29/first-experiments-with-itext/
[14]: http://www.annodex.net/~silvia/itext/

Now, in our caption initiation function, we’re going to look for `<track>` elements. If we find more than one element, we’re going to generate markup and allow the user to select the caption from a list. The spec includes the `label` attribute for the `<track>` element, defining it as “a user-readable title for the track” which “is used by user agents when listing subtitle, caption, and audio description tracks in their user interface”. So, this is the attribute we’re going to use in our UI.

	<ul>
		<li>
			<label>
				<input type="radio" name="acornCaptions" checked="checked">
				None
			</label>
		</li>
		<li>
			<label>
				<input type="radio" name="acornCaptions">
				English <!-- this is the “label” attribute of the <track> -->
			</label>
		</li>
		<li>
			<label>
				<input type="radio" name="acornCaptions">
				Romani <!-- this is the “label” attribute of the <track> -->
			</label>
		</li>
	</ul>

We’re using an unordered list with `<input type="radio">` buttons. We’re wrapping the `<input>` elements and text into `<label>`s in order for AT to associate the label with the button, without having to define the `<label>` separately and assign an unique ID to it and the button.

The actual text for the label is the contents of the `label` attribute of the `<track>` element.

When the user selects a caption, we’ll load it with an Ajax call, parse it, create the timed object with each caption, and also generate a transcript.

This sounds more complicated than it actually is:

	$.ajax({
		url: url,
		success: function(data) {
			// User our SRT parser on the loaded data
			captions = parseSrt(data);

			// Find the transcript button control and display it
			video.$transcript = video.$container.next('.acorn-transcript');
			video.$transcriptBtn.show();

			// Generate markup for the transcript and append it
			var transcriptText = '';
			$(captions).each(function() {
				transcriptText += '' + this.content.replace("'","") + '';
			});
			video.$transcript.html(transcriptText);

			captionsActive = true;
			video.$captions.show();

			// In case the video is paused and timeUpdate is not triggered, we’ll updateCaption manually
			if(video.$self.attr('paused')) updateCaption();

			video.$captionsBtn.addClass('acorn-captions-active').removeClass('acorn-captions-loading');
		},
		error: function() {
			// In case there’s an error while loading the caption
			// don’t display anything and show the error if a console is present

			captionsActive = false;
			captions = '';
			video.$transcriptBtn.hide();
			video.$captionsBtn.removeClass('acorn-captions-active').removeClass('acorn-captions-loading');

			if(console) console.log('Error loading captions');
		}
	});

The code is fairly easy to understand, so I’m going to focus more on the transcripts. You can see we’re generating markup and using the jQuery `html()` function to add it to our transcript container. We’re using the same markup as in Bruce Lawson’s technique, but this time for the transcript, not the captions.

This way, we’re generating the transcript based on the captions, and are able to have as many versions of the transcript as there are caption versions.

## Accesskeys? {#accesskeys}

Most accessible multimedia players and RIAs implement some form of access keys, either using the standard `accesskey` attribute or by assigning complex keyboard shortcuts with JavaScript. While this may sound great to most developers, survey and use cases prove us wrong.

The “feature”, aimed at making pages and apps more accessible, has proved to be poorly designed and implemented, confusing AT users rather than helping them.

That’s why, I’ve preferred to not implement access keys at all, and make the player controls be controlled using standard TAB based navigation.

## Finishing touches {#finishing}

Our plugin takes a standard HTML5 `<video>` element and creates accessible controls for it, caption and transcript support, and other features, but it does not provide any sort of support for video description. This is something that you should do without relying on the plugin.

My suggestion is that you use the HTML5 `<figure>` element along with `<figcaption>`, and use the `aria-describedby` attribute to link the `<video>` element with the description. This way when a screen reader, for example, reaches the video, it will also get its description.

	<figure>
		<video controls="controls" width="300" height="200" preload="metadata" aria-describedby="videodescription">
			<source src="/path/to/video.webm">
			<track src="/path/to/caption.srt" kind="captions" srclang="rom" label="Romani">
		</video>
		<figcaption id="videodescription">
			Trailer for the short animation film “Sintel”, the Durian Open Movie project by the Blender Foundation. More information [http://durian.blender.org][15]. This represents the video’s description.
		</figcaption>
	</figure>

[15]: http://durian.blender.org/

## Fallback {#fallback}

Just like in the previous article about the video player, I’m not going to provide a fallback mechanism because each fallback method comes with its own accessibility problems, be it Flash, Java, Silverlight or anything else. It should be up to the developer to choose the best option for him or her.

## Conclusion {#conclusion}

See [the final accessible HTML5 video player demos][16], complete with everything described in the article.

[16]: {{ page.id }}/demos.html

The techniques contained within these articles about HTML5 `<video>` have resulted in a production-ready jQuery plugin. You can check out the latest version, and follow the development, on the [Github repository for the Acorn Media Player][17].

[17]: http://github.com/ghinda/acornmediaplayer

As HTML5 is being delivered on more and more platforms and devices, it’s essential that developers and browser makers address the accessibility problems while implementing the new features, not afterwards.

## Further reading {#futher-reading}

### More on `<video>`

- [Everything you need to know about HTML5 video and audio][18]
- [Accessible HTML5 Video with JavaScripted captions][19]

[18]: /blog/everything-you-need-to-know-about-html5-video-and-audio-2
[19]: /articles/accessible-html5-video-with-javascripted-captions/

### Opera Curriculum on Accessibility

- [Accessibility basics][20]
- [Accessibility testing][21]

[20]: /articles/25-accessibility-basics/
[21]: /articles/26-accessibility-testing/

### Resources

- [HTML5 accessibility][22]
- [Semantics in HTML 5][23]
- [Built-in Accessibility Roles in HTML5][24]
- [DIY Accessible UI Controls with ARIA and HTML][25]
- [Terrill Thompson: Creating Your Own Accessible HTML5 Media Player][26]
- [Screen Reader User Survey Results][27]
- [HTML5, ARIA Roles, and Screen Readers in May 2010][28]
- [Wikipedia on Access keys][29]

[22]: http://html5accessibility.com/
[23]: http://www.alistapart.com/articles/semanticsinhtml5
[24]: http://hsivonen.iki.fi/html5-roles/
[25]: http://www.w3.org/2010/Talks/www2010-dsr-diy-aria/#(1)
[26]: http://terrillthompson.blogspot.com/2010/08/creating-your-own-accessible-html5.html
[27]: http://webaim.org/projects/screenreadersurvey2/
[28]: http://www.accessibleculture.org/research/html5-aria/
[29]: http://en.wikipedia.org/wiki/Access_key
