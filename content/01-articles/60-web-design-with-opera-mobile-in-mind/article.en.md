Title: Web design with Opera Mobile in mind
----
Date: 2007-11-29 17:06:43
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
 <h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">14th December 2011: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Please consult the following for more up-to-date information:</p>

<ul>
 <li><a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/">Mobile-friendly: The mobile web optimization guide</a></li>
 <li><a href="http://dev.opera.com/articles/view/love-your-devices-adaptive-web-design-with-media-queries-viewport-and-more/">Love your devices: adaptive web design with media queries, viewport and more</a></li>
  <li>For more articles, consult the <a href="http://dev.opera.com/mobile">dev.opera.com mobile page</a>.</li>
 </ul>
 </div>

<h2>Introduction</h2>

<p>Opera Mobile is a fully featured web browser, developed to run on high-end mobile devices. It is based on the same core rendering engine as its Opera cousin, and as such has the same web standards support (with the exception of a few features like native video support, which are device-dependent). There are however a few caveats to consider if you want to make sure your web sites will work as desired in Opera Mobile, and these are all detailed below. This article is structured as followed:</p>

<ol>
<li>CSS issues</li>
<li>JavaScript issues</li>
</ol>

<p class="note">Visit our <a href="http://www.opera.com/mobile/">Opera Mini &amp; Opera Mobile</a> page for details and download instructions.</p>

<h2>CSS issues</h2>

<p>CSS support in Opera Mobile is largely very good, but there are some issues to consider - these are mainly due to the device limitations rather than browser limitations.</p>

<h3>Font styles and languages</h3>
<p>Availability of fonts and languages on mobile is very limited. On the desktop you typically have fonts available for a reasonable number of fonts<strong>*</strong>, in hundreds of languages with characters of almost any size for each font. On mobile you typically have fonts only for a few languages (region based and they also vary between devices) and each character in a font is often only available in 2-3 sizes. Bear this in mind when you are designing your site typography, and don&#39;t go too overboard with different font combinations or obscure font choices.</p>

<p>On the desktop, Flash is becoming a viable tool for typography - check out <a href="http://www.mikeindustries.com/sifr">siFR (Shaun Inman Flash Replacement)</a> - and there is Flash support in Opera Mobile, but use it carefully, keeping in mind the file size and screen size limitation you are working with on mobile devices. At the end of the day, you need to test, test, test. Opera on Windows Mobile also supports Flash Lite 2.1.</p>

<p><strong>* Let&#39;s face it, the web is terrible for font choice - print designers moving to the web have a hard time - but there are some good ones available, such as Georgia and Helvetica.</strong></p>

<h3>Positioning and layout</h3>
<p>The biggest thing to consider with CSS on Opera mobile is that due to the size of the screen, a lot of CSS layouts won&#39;t really work. To handle this, most phones default to CSSR (Color small screen rendering.) This rendering mode reformats the whole page into one column, disregarding a large portion of the stylesheets (positioning, visibility, font sizes, etc). This can be overridden by the use of a <code>@media</code> handheld stylesheet, but be aware of the limitations you are playing with in the mobile space. Opera Mobile also supports CSS3 media queries, which is great news, but bear in mind that it only works with pixels.</p>

<p>On newer and more powerful phones, Opera Mobile defaults to a rendering much closer to that of its desktop cousin, using pan and zoom features to navigate around the page. The ERA textwrap feature (also known as Limit Paragraph Width or MSR light) wraps lines to the width of the browser window so that they are readable without too much panning. Some CSS tweaks are included here, for example <code>height</code> becomes <code>min-height</code>.</p>

<h2>JavaScript Issues</h2>
<p>Again, JavaScript support on Opera Mobile is very good, and most of the issues presented here are to do with the device, not the browser.</p>

<h3>Mouse events and keyboard events</h3>
<p>On mobiles without touch screen, JS mouse events will be difficult to handle - you can&#39;t do <code>onMouseOut</code>, <code>onMouseMove</code> etc when you have no mouse, so on sites that you want Opera Mobile users to make use of, provide alternatives to mouse selection. </p>

<p>On the flip side of the coin, you can&#39;t rely on keyboard events on devices with no keyboard. Providing both mouse and keyboard input mechanisms is simply the best way to deal with this, plus it also confers accessibility benefits on the desktop.</p>


<h3>JavaScript differences between specific implementations of Opera Mobile</h3>
<p>Some vendor-specific implementations of Opera Mobile disable various JavaScript features, for example some devices have <code>XMLHttpRequest</code> disabled. It is very difficult to document all of these possibilities, but bear this in mind if you are ever troubleshooting one of your sites, and you are pulling your hair out because you can&#39;t figure out why it won&#39;t work on a certain phone.</p>

<h3>Memory constraints</h3>
<p>In terms of JavaScript on Opera mobile, memory is the major concern - mobile devices obviously have much lower memory capacity than desktop computers, and scripts that demand several mb to run cannot be expected to run on low memory phones.</p>

<h2>Summary</h2>
<p>This article has detailed the main issues to be aware of when developing web content with Opera Mobile in mind. Apart from the above, you can pretty much guarantee that other functions and techniques will work as expected in the Opera desktop version.<!-- For details of Opera 8 standards support, check out <a href="http://www.opera.com/docs/specs/opera8/" alt="Opera 8.x standards support document">http://www.opera.com/docs/specs/opera8/</a>.--></p>
  
