---
title: A Few Tips on TV Web Development
authors:
- daniel-davis
tags:
- presentation
- emulator
- tv
- media-queries
- odin
license: cc-by-3.0
---

![An Opera TV Store seminar in Tokyo]({{ page.id }}/Opera-TV-Store-seminar.jpg)

Over the past few days I’ve been lucky enough to give a couple of talks on web development for TV. It seems there’s growing interest and enthusiasm in this area, which I’m pleased to see, because although it can be frustrating, web on TV also offers opportunities for innovation and interesting technical challenges.

There are many things to consider when creating a great user experience and we have some [in-depth TV tutorials over on Dev.Opera](https://dev.opera.com/tv), but in my experience there are a handful of priority problems that, when fixed, go a long way towards making life easier for TV users. They can mostly be linked to three main characteristics of TVs:

* **TV screen** — actually quite small from a normal viewing distance.
* **Remote control** — keypad-based and slow, due to infrared lag.
* **TV hardware** — generally less powerful than mobile phones.

These characteristics lead to a number of problems; in the next section we’ll expand on these and outline some possible solutions.

## Problems (and what to do about them)

<dl>
<dt>Font size</dt><dd>Text on most websites is too small to be read on a TV while sitting on a sofa. Try increasing the font size by about 2.5 times.</dd>
<dt>Lack of on-screen space</dt><dd>Because the text should be large, you now have less space for other elements so reduce or hide unnecessary page sections, much as you would for mobile.</dd>
<dt>Non-focusable elements</dt><dd>With a keypad, it’s hard or impossible to click on a `div` or image that is pretending to be a button, for example if you are using JavaScript to capture a click or other event. Use `tabindex="0"` to make such elements focusable, as in this [spatial navigation challenge](http://daniemon.com/tech/utils/spatial.html).</dd>
<dt>Cumbersome scrolling</dt><dd>Scrolling should be minimized where possible. A relatively unknown but useful optimization is to use [CSS directional focus navigation](http://www.w3.org/TR/css3-ui/#nav-dir) for easily moving around lists of objects, like an image gallery for example. See our [Tweaking spatial navigation](https://dev.opera.com/articles/view/tweaking-spatial-navigation-for-tv-browsing/) article for more details and an example.</dd>
<dt>Inputting text</dt><dd>Quite simply, avoid this wherever possible! Text input on a keypad over infrared is fiddly and frustrating. Either offer lists of choices to provide users with sensible defaults or see if any of the newer [HTML5 input types](https://dev.opera.com/articles/view/new-form-features-in-HTML5/) can help.</dd>
<dt>Animation</dt><dd>Try to minimize the use of animation. Because of the lack of processing power you’ll encounter on TVs, animations can really slow things down if you’re not careful. A couple of tips are a) use CSS3 effects rather than JavaScript; b) animate properties that require fewer reflows, for example transitioning left or top is usually faster and smoother than width or height.</dd>
<dt>Caching/localStorage</dt><dd>This can be unreliable because of a lack of hardware storage space and inconsistent behaviour across devices. Store things like user preferences on the server-side if possible.</dd>
<dt>Detecting TVs</dt><dd>Unfortunately the TV media type is rarely used, including in Opera’s TV browser and Google TV. An alternative is to detect TVs with media queries — there are only 2 or 3 standard TV resolutions. It’s a bit of a hack, but here’s an [example of how to use it to enlarge font size](http://daniemon.com/tech/utils/webtv.html) when a page is viewed on a TV.</dd>
<dt>Difficulty in testing</dt><dd>![Using your hand to estimate a TV screen’s viewing size]({{ page.id }}/tv-rule-of-thumb.jpg)Testing on a TV is essential but can be time-consuming, so in the early stages of development I recommend simply moving back from your PC until the finger and thumb on your outstretched hand are the same size as the PC screen. Believe it or not, this viewing size is about the same as for the average TV viewer sitting on their sofa. To test keypad usage, a handy feature in Opera is the ability to press <kbd>[Shift]</kbd> + <kbd>[arrow keys]</kbd> to move around a page with spatial navigation. Finally, we have a [free TV emulator](http://www.opera.com/business/tv/emulator/), which provides the same environment as that on many actual TVs.</dd>
 </dl>

## The good news!

Despite the hurdles, TVs have some key advantages over PCs and mobile devices:

* The big screen and speakers mean good video and audio quality.
* Many people, especially the young and the elderly, and more familiar with using a TV than other devices.
* TVs enjoy pride of place in the home and can be viewed by multiple people at the same time.
* You don’t need to be close to a TV to use it.

There are a few ideas of using these advantages to create TV apps towards the end of my [TV strategy slide deck](http://daniemon.com/presentations/tv-strategy/). As you can see, we’re restricted in what design techniques we can use but these restrictions can be fuel for creativity. It’s still a young area of web development and is ripe for a new breed of apps and experiences to emerge.
