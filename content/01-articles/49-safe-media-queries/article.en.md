Title: Safe media queries
----
Date: 2007-11-07 09:02:52
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

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Media queries are now supported much more reliably across browsers. Please consult the following for more up-to-date information:</p>

<ul>
 <li><a href="http://dev.opera.com/articles/view/the-mobile-web-optimization-guide/">Mobile-friendly: The mobile web optimization guide</a></li>
 <li><a href="http://dev.opera.com/articles/view/love-your-devices-adaptive-web-design-with-media-queries-viewport-and-more/">Love your devices: adaptive web design with media queries, viewport and more</a></li>
  <li>For more articles, consult the <a href="http://dev.opera.com/mobile">dev.opera.com mobile page</a>.</li>
 </ul>
 </div>

<h2>Introduction</h2>

<p>Certain page authors reject media queries off-hand as a viable solution, claiming that the rules within them are not ignored by browsers with 
broken parsers (ie, ones that do not ignore unrecognized constructs like they are supposed to,) which in turn implies the pages they are applied to do not display as intended across browsers. This article provides analysis
of the problem at hand, and offers a simple solution that does not resort to hacks, which should hopefully make such page authors consider giving media queries another look.</p>



<h2>Example usage of media queries</h2>
<p>Consider the following stylesheet:</p>

<pre>/* example 1 */
object {
	margin: 0 0 10px 10px;
	float: right;
}
@media all and (max-width: 500px) {
	object {
		margin: 10px auto;
		float: none;
		display: block;
	}
}
</pre>

<p>This is a typical usage of media queries. For wide enough viewports, the object image is floated right, with text surrounding it from the left and below. The moderate margin ensures that the text does not flow too close to the image. For smaller viewports, the container of both the image and the text becomes too narrow to hold both the image and the text on the same line, since there is room for just a few words to the left of the image. The applied media query enables the page author to renounce the float for small enough viewports, in
this case smaller than 500px in width. The <code>object</code> is no longer floated; it is now assigned a block display and centered within the containing block, with a new set of vertical margins comfortably separating it from the preceding and following text, presumably contained within paragraphs, although not necessarily.</p>

<p>Is this media query safe to use? Let&#39;s see. Are there any graphical user agents that will apply the rules inside the media query regardless of viewport width? The answer is yes: Netfront 3.2-, ICEbrowser, Escape, WebTV/MSNTV, and Openwave. Do you care? Should you care? Personally we do not like providing 
crutches to help any browser, but ultimately, the decision is yours - a bit of testing is in order to make sure it looks ok cross browser. The most important question that 
arises in this context is: &quot;will IE misapply the media queries?&quot; The answer is no: IE5 and later will simply ignore a <em>simple</em> media query as a whole, and whatever set of rules is contained therein, which is safe. As we shall see next, the problem arises when using mixed media queries.</p>


<h2>Problematic usage of media queries</h2>

<p>The keyword here is &#39;simple&#39;. Before we proceed further, let&#39;s simplify the rules subject to a media query in terms of ambient lights:</p>

<pre>/* example 2 */
div {
	background: lime;
}
@media all and (min-width: 300px) {
	div {
		background: blue;
	}
}
</pre>

<p>In this simplistic example, most user agents will color the box green; only the smart user agents that support media queries apply the query and color the box blue. As of this writing, there are only two browsers that should do the latter: Opera 7+ and Safari 3.0. If you see blue in any other browser, that browser has a broken parser.</p>

<p>The aforequoted example is safe, because all major browsers that do not understand media queries drop the entire rule, and so you will see green. This is because the media rule is simple, and contains only a media query. Consider however the following alteration:</p>

<pre>/* example 3 */
div {
	background: lime;
}
@media screen, all and (min-width: 300px) {
	div {
		background: blue;
	}
}
</pre>

<p>Now it is no longer the case that IE does not apply the contents of the query. It now doesn&#39;t understand the second part (<code>all and</code>,) so it ignores that, and happily applies the contents of the query, since to IE, the query looks
as follows:</p>

<pre>@media screen, pantyhose {
	div {
		background: blue;
	}
}
</pre>

<p><samp>Pantyhose</samp> is not a known media to IE, hence it drops the media, and ultimately, sees the following:</p>

<pre>@media screen {
	div {
		background: blue;
	}
}
</pre>

<p>This is equivalent to not using the media query at all. Consider the next example:</p>

<pre>/* example 4 */
div {
	background: lime;
}
@media handheld, screen and (max-width: 300px) {
	div {
		background: blue;
	}
}
</pre>

<p>Again, the query will be applied by Opera 7+ and Safari 3.0. Browsers that do not support media queries but correctly handle unknown constructs (such as Firefox and Safari 1 and 2) will ignore the query. IE however drops only what it does not understand, and sees this:</p>

<pre>div {
	background: lime;
}
@media handheld, pantyhose {
	div {
		background: blue;
	}
}
</pre>

<p>Since it does not support <code>handheld</code> media, it ultimately sees this:</p>

<pre>div {
	background: lime;
}
@media wonderbra, pantyhose {
	div {
		background: blue;
	}
}
</pre>

<p>it does not know what to do with any of those media types, so it drops the entire block, and the background comes out lime.</p>

<p>In summary, the only opportunity to get into trouble is to mix unconditional media rules with media queries, as shown in example 3 above:</p>

<pre>/* example 3 */
div {
	background: lime;
}
@media screen, all and (min-width: 300px) {
	div {
		background: blue;
	}
}
</pre>

<p>But then, what exactly is this doing? It is overriding itself, since within the screen media, the latter condition is a subset of the former. It may look as a convenient way of handling &quot;normal browsers and any user agents that are wide enough&quot;, but in fact, it isn&#39;t.</p>



<h2>Solution</h2>
<p>The solution is simple: </p>

<ol>
<li>If you want to conditionally apply styles depending on viewport dimensions, use media queries rather than handheld/tv media</li>
<li>If you do not want IE to misapply your styles, do not mix media queries with unconditional media rules within the same block</li>
<li>A corollary of point 2: use media queries only for overrides on an as-needed basis</li>
<li>Use the <samp>all</samp> keyword in queries, if possible</li>
</ol>

<p>If you observe these guidelines, all but the most broken browsers will parse your stylesheet as intended, with no side-effects, including IE. The following example illustrates the safe usage of media queries:</p>

<pre>/* example 5 */
div {/*rule 1*/}
@media projection {
	div {/*rule 2*/}
}
@media all and (max-width: 800px) {
	div {/*rule 3*/}
}
@media all and (max-width: 500px) {
	div {/*rule 4*/}
}
@media all and (max-width: 350px) {
	div {/*rule 5*/}
}
@media projection and (min-width: 1281px) and (max-width: 1600px) {
	div {/*rule 6*/}
}
@media projection and (min-width: 1601px) {
	div {/*rule 7*/}
}
</pre>

<p>IE, Safari 2-, Konqueror and Gecko browsers will apply only the first rule. Opera is capable of applying everything, since it understands projection media. Safari 3.0 is capable of applying rules 1,3,4,5 since it does not understand projection media, and ignores what it does not understand. We&#39;re saying capable, because what is ultimately applied depends on viewport width.</p>

<h2>User agents with FUBAR parsers</h2>
<p>Some user agents are only partially CSS-capable, which due to parser errors, apply rules inside media queries regardless of how the latter are constructed. As mentioned above, Netfront 3.2-, ICEbrowser, Escape, Openwave, and WebTV/MSNTV will apply rules in media queries in all circumstances. If for some reason you must bend over and cater to those particular user agents (note that Netfront 3.3 and later contains a bugfix for this issue), then you will probably have to resort to so-called CSS-hackery. Good luck.</p>

<h2>Staying safe</h2>
<p>As already mentioned, as long as you do not mix regular unconditional media rules with media queries in the same block, IE, Gecko-based browsers, KHTML-based browsers, older versions of Safari, iCab, Clue, Omniweb, and 
older Netscape browsers will ignore the media query in its entirety, as they should. Opera and Safari 3+ will apply the query, as they should. Any browsers with future support for media queries will ultimately pick up the queries as they add support for this technology.</p>
