---
title: A few tips on TV web development
authors:
- daniel-davis
tags:
- presentation
- emulator
- tv
- media-queries
layout: article
---
<p><img src="http://files.myopera.com/tagawa/blog/Opera-TV-Store-seminar.jpg" alt="An Opera TV Store seminar in Tokyo" style="box-shadow:0 4px 8px rgba(0, 0, 0, 0.5); margin:12px auto;" /></p>

<p>Over the past few days I&#39;ve been lucky enough to give a couple of talks on web development for TV. It seems there&#39;s growing interest and enthusiasm in this area, which I&#39;m pleased to see, because although it can be frustrating, web on TV also offers opportunities for innovation and interesting technical challenges.</p>

<p>There are many things to consider when creating a great user experience and we have some <a href="http://dev.opera.com/tv">in-depth TV tutorials over on Dev.Opera</a>, but in my experience there are a handful of priority problems that, when fixed, go a long way towards making life easier for TV users. They can mostly be linked to three main characteristics of TVs:</p>

<ul>
  <li><strong>TV screen</strong> — actually quite small from a normal viewing distance.</li>
  <li><strong>Remote control</strong> — keypad-based and slow, due to infrared lag.</li>
  <li><strong>TV hardware</strong> — generally less powerful than mobile phones.</li>
</ul>

<p>These characteristics lead to a number of problems; in the next section we&#39;ll expand on these and outline some possible solutions.</p>

<h2>Problems (and what to do about them)</h2>

<dl>
  <dt>Font size</dt><dd>Text on most websites is too small to be read on a TV while sitting on a sofa. Try increasing the font size by about 2.5 times.</dd>
  <dt>Lack of on-screen space</dt><dd>Because the text should be large, you now have less space for other elements so reduce or hide unnecessary page sections, much as you would for mobile.</dd>
  <dt>Non-focusable elements</dt><dd>With a keypad, it&#39;s hard or impossible to click on a div or image that is pretending to be a button, for example if you are using JavaScript to capture a click or other event. Use <code>tabindex=&quot;0&quot;</code> to make such elements focusable, as in this <a href="http://people.opera.com/danield/utils/spatial.html">spatial navigation challenge</a>.</dd>
  <dt>Cumbersome scrolling</dt><dd>Scrolling should be minimized where possible. A relatively unknown but useful optimization is to use <a href="http://www.w3.org/TR/css3-ui/#nav-dir">CSS directional focus navigation</a> for easily moving around lists of objects, like an image gallery for example. See our <a href="http://dev.opera.com/articles/view/tweaking-spatial-navigation-for-tv-browsing/">Tweaking spatial navigation</a> article for more details and an example.</dd>
  <dt>Inputting text</dt><dd>Quite simply, avoid this wherever possible! Text input on a keypad over infrared is fiddly and frustrating. Either offer lists of choices to provide users with sensible defaults or see if any of the newer <a href="http://dev.opera.com/articles/view/new-form-features-in-HTML5/">HTML5 input types</a> can help.</dd>
  <dt>Animation</dt><dd>Try to minimize the use of animation. Because of the lack of processing power you&#39;ll encounter on TVs, animations can really slow things down if you&#39;re not careful. A couple of tips are a) use CSS3 effects rather than JavaScript; b) animate properties that require fewer reflows, for example transitioning left or top is usually faster and smoother than width or height.</dd>
  <dt>Caching/localStorage</dt><dd>This can be unreliable because of a lack of hardware storage space and inconsistent behaviour across devices. Store things like user preferences on the server-side if possible.</dd>
  <dt>Detecting TVs</dt><dd>Unfortunately the TV media type is rarely used, including in Opera&#39;s TV browser and Google TV. An alternative is to detect TVs with media queries — there are only 2 or 3 standard TV resolutions. It&#39;s a bit of a hack, but here&#39;s an <a href="http://people.opera.com/danield/utils/webtv.html">example of how to use it to enlarge font size</a> when a page is viewed on a TV.</dd>
  <dt>Difficulty in testing</dt><dd><img src="http://files.myopera.com/tagawa/blog/tv-rule-of-thumb.jpg" alt="Using your hand to estimate a TV screen&#39;s viewing size" style="box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);float:right;margin:0 0 12px 12px;" />Testing on a TV is essential but can be time-consuming, so in the early stages of development I recommend simply moving back from your PC until the finger and thumb on your outstretched hand are the same size as the PC screen. Believe it or not, this viewing size is about the same as for the average TV viewer sitting on their sofa. To test keypad usage, a handy feature in Opera is the ability to press <kbd>[Shift]</kbd> + <kbd>[arrow keys]</kbd> to move around a page with spatial navigation. Finally, we have a <a href="http://www.opera.com/business/tv/emulator/">free TV emulator</a>, which provides the same environment as that on many actual TVs.</dd>
 </dl>

<h2>The good news!</h2>

<p>Despite the hurdles, TVs have some key advantages over PCs and mobile devices:</p>

<ul>
  <li>The big screen and speakers mean good video and audio quality.</li>
  <li>Many people, especially the young and the elderly, and more familiar with using a TV than other devices.</li>
  <li>TVs enjoy pride of place in the home and can be viewed by multiple people at the same time.</li>
  <li>You don&#39;t need to be close to a TV to use it.</li>
</ul>

<p>There are a few ideas of using these advantages to create TV apps towards the end of my <a href="http://people.opera.com/danield/presentations/tv-strategy/index.html">TV strategy slide deck</a>. As you can see, we&#39;re restricted in what design techniques we can use but these restrictions can be fuel for creativity. It&#39;s still a young area of web development and is ripe for a new breed of apps and experiences to emerge.</p>
