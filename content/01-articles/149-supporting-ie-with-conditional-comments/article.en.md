Title: Supporting IE with conditional comments
----
Date: 2008-08-07 11:55:01
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

<h2>Introduction</h2>
<p>Nearly three years ago, as the IE development team called for developers to  clean up their CSS hacks in preparation for the release of IE7, I wrote a blog post called <a href="http://www.brucelawson.co.uk/2005/future-proof-your-css-with-conditional-comments/">Future-proof your CSS with Conditional Comments</a>, which detailed how to use a proprietary Microsoft technique to avoid CSS hacks by feeding separate CSS (or JavaScript, or whatever) to different versions of Internet Explorer.</p>
<p>It led to a <a href="http://www.brucelawson.co.uk/2008/an-event-apart-boston/">stranger at a conference thanking me</a> for saving his professional life and sparked <a href="http://meiert.com/en/blog/20070201/why-conditional-comments-are-bad-repeat-bad/">a good debate</a>, in which I was either a jobbing pragmatist or an incarnation of Satan, depending on your view. (Actually, I&#8217;m both. Bwa-hah-hah!)</p>

<p>Three years is a long time on the Web. Back then, IE7 was yet to come, its precursors IE6 and IE5 were hanging in the air like a bad smell in an unventilated bathroom, and <a href="http://centricle.com/ref/css/filters/">more and more elaborate CSS hacks</a> were being discovered and used. Some style sheets were so full of weird backslashes, stars, and underscores that they looked more like a regular expression or Perl. I recommended the removal of such hacks and using Microsoft&#8217;s conditional comments instead.</p>

<p>Now, midway through 2008, I&#8217;m not so quick to recommend conditional comments. There are fewer reasons to hack; the browser landscape has changed and settled down into one that generally is quite standards friendly (although the bathroom <a href="http://blogs.msdn.com/ie/archive/2008/06/10/introducing-ie-emulateie7.aspx">doesn&#8217;t quite smell of roses yet</a>), and, with IE8 on the horizon, there are fewer and fewer users of the dinosaur browsers.</p>
<p>Nevertheless, many people do still use conditional comments&#x2014;many because of my original article&#x2014;so I&#8217;m republishing the 2008 remixed article. <strong><dfn title="buyer beware">Caveat emptor.</dfn></strong></p>

<p>Below you&#8217;ll learn:</p>

<ul>
<li>What CSS hacks do and the issues with them</li>
<li>How to use conditional comments and why they aren&#8217;t perfect either</li>
<li>What to do to make sure the different versions of IE still in widespread use won&#8217;t spit out their dummies when presented with your Web site to parse.</li>
</ul>

<h2>What CSS hacks do</h2>
<p>CSS hacks allow Web developers to send different rules to different browsers, usually (paradoxically) to make each browser&#8217;s rendering of the site look the same. This is generally necessary as Internet Explorer 5 and 6 have many bugs, so they can get &#8220;good&#8221; rules wrong.</p>

<p>There are two types of CSS hacks:</p>

<ul>
<li>&#8220;Parsing Error Hacks&#8221; use the fact that browser &#8220;x&#8221; stops reading a rule when it sees some weird combination of characters, while browser &#8220;y&#8221; continues unvanquished and receives the subsequent good rules. The problem with these is that they&#8217;re utterly unintuitive because they&#8217;re pretty random. If they aren&#8217;t well commented, you&#8217;ll never guess what they do.</li>
<li>&#8220;Weak CSS Support Hacks&#8221; use the fact that IE&lt;7 can&#8217;t support advanced CSS selectors, and use those to feed a rule to more advanced browsers, usually to override a rule sent to the old IEs. </li>
</ul>

<p>There are now a gazillion <a href="http://www.webdevout.net/css-hacks">documented CSS hacks</a>, but one of the  most common CSS hacks is a box model hack to get over the <a href="http://simonwillison.net/2003/May/26/theBoxModel/">broken box model</a> in IE5. There are several, but all rely on parsing errors.</p>

<p>Most of the magic behind Parsing Error Hacks involves fooling different browsers into seeing the hack or not. For example, all the voice family nonsense is merely fooling IE5 not to read any more of the rule, so as to not overwrite its overly wide dimensions:</p>

<pre>#sidebar {
  margin:0; padding: 0 15px;
  width: 194px; /*IE 5.5 width - Tantek hack */
  voice-family: &quot;&quot;}&quot;&quot;;
  voice-family:inherit;
  width: 164px; /*real width*/ }</pre>

<p>The &#8220;Simplified Box Model Hack&#8221; uses a different IE parsing error:</p>

<pre>#sidebar {
  border: 10px;
  padding: 10px solid;
  width: 100px; /* real width for proper browsers */
}

/* only IE&lt;7 gets rules beginning with * html */

* html div {
  width: 140px; /* IE5 width */
  w&#0092;idth: 100px; /* IE6 width (IE5 chokes on backslash character so doesn&#39;t over-write the rule again */
}
</pre>

<p>Given that all this is to overcome deficiencies in Internet Explorer, you might be thinking that it would be superlovelygorgeous if we could have a good, valid, hackless style sheet and an extra one flagged as &#8220;Hey! IE6! this is for you!&#8221;. Well, we can, using <a href="http://msdn.microsoft.com/en-us/library/ms537512.aspx">conditional comments</a>.</p>

<h2>How conditional comments work</h2>

<p>These are plain HTML comments, with a marker so that IE parses them and you can use them to enclose any HTML code&#8212;including the linking of a style sheet. They were introduced in IE5 for Windows, so they can&#8217;t be used to target previous versions of IE (but if you&#8217;re concerned about IE4, dude, you have problems). The best thing is that, because these are HTML comments, they&#8217;re invisible to all other browsers, and they pass validation.</p>

<p>Here&#8217;s the syntax I use to feed  rules to IE5: </p>

<pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; type=&quot;text/css&quot; /&gt;
&lt;!--[if lt IE 6]&gt;
&lt;link rel=&quot;stylesheet&quot;  href=&quot;boxmodel.css&quot; type=&quot;text/css&quot; /&gt;
&lt;![endif]--&gt;
</pre>

<p>The main styles.css has this simple rule:</p>

<pre>#sidebar {
  margin:0; padding: 0 15px;
  width: 164px;
} /*see boxmodel.css for IE5 override */</pre>

<p>The boxmodel.css&#8212;which is only served to IE5&#8212;overrides it thus:</p>

<pre>#sidebar {width: 194px;} /*other rules in styles.css */</pre>

<p>No confusing <code>voice-family</code> hacks or weird escape characters. Huzzah!</p>

<h2>IEbugs.css&#8212;correcting the main bugs and IE6 and earlier</h2>

<p>A lot of CSS hacks feed rules to IE6 and below to compensate for the lack of many important features of modern Web development, like PNG alpha transparency, CSS <code>min-height</code> and fixed positioning.</p>

<p>You can remove the hacks by calling a special override style sheet called IEbugs.css for IE6 browsers or below, like this:</p>

<pre>&lt;!--[if lte IE 6]&gt;
&lt;link rel=&quot;stylesheet&quot;  href=&quot;IEbugs.css&quot; type=&quot;text/css&quot; /&gt;
&lt;![endif]--&gt;</pre>

<p>The operator <code>lte</code> is Microsoftian for &quot;less than or equal to&quot;.</p>

<h3>Simulating min-height</h3>

<p>Suppose you have a box that should never be less than 100px tall&#8212;perhaps you have a 95px background image that you always want displayed, but you can&#8217;t predict the quantity of content. In a standards-compliant browser, you&#8217;d use <code>min-height</code>, but this doesn&#8217;t work in versions of IE less than IE7.</p>

<p>To work around it, you can <strong>add</strong> a rule specifying the height (which works the same as <code>min-height</code> should). So, if the rule in the main style sheet says <code>#box {min-height:100px;}</code>, it should be supplemented in IEbugs.css by:</p>

<pre>#box {
  height:100px;
  overflow:visible;
} /*simulate min-height */</pre>

<h3>Give GIFs to IE, PNGs to the good guys</h3>

<p>People who are more design-oriented than I am have long used graphics in the PNG format for their layouts, as it allows them much more flexibility and loveliness. Unfortunately, IE6 doesn&#8217;t do PNGs properly, so people have used another hack to send an alternative image that&#8217;s a GIF to IE. Here&#8217;s an example, using the <code>* html</code> hack that only IE understands:</p>

<pre>#lovely  {
  background: url(lovely.png) no-repeat;
}

* html #lovely {
  background: url(lovely.gif) no-repeat;
}</pre>

<p>IE7  can do PNGs properly, and it does not understand the <code>* html</code> rule, so it  receives the PNG sent by the first rule: all well and good. But as this is a rule for pre-IE7 browsers,  it would be better sent to the doghouse of IEbugs.css.</p>

<p>Once banished, it won&#8217;t need the * html prefix, as the style sheet is only being sent to IE&lt;7, and will overwrite the main rule. So, the main style sheet keeps <code>#lovely  {background: url(lovely.png)no-repeat;}</code>, and IEbugs.css adds <code>#lovely {background: url(lovely.gif) no-repeat;}</code>.</p>

<h3>Stopping long words destroying layout</h3>

<p>Contrary to the spec, IE allows very long words to expand a box widthwards&#8212;which can then easily <a href="http://www.positioniseverything.net/explorer/expandingboxbug.html">destroy a layout</a> if other boxes are floated right. This is particularly dangerous in areas where content can&#8217;t be rigidly controlled and tested, such as where blog comments are displayed, as someone can accidentally (or maliciously!) enter a very long word and totally nuke your design.</p>

<p>There&#8217;s a CSS 3 property that will fix this which IE respects (because it was originally a Microsoft invention that was later added to the spec).</p><p>As it&#x2019;s only IE that will actually wreck the layouts because it allows boxes to expand to fit content, you can add this rule to the box that holds blog comments (or do what I did, and just add it to the <code>body</code> element): </p>

<pre>body {word-wrap: break-word;}</pre>

<h3>Advanced IE6 bugfixing and hasLayout</h3>

<p>If your design requires the ability to hover over any element, rather than just the <code>a</code> element as IE6 restricts you to, you can add the <a href="http://www.xs4all.nl/~peterned/csshover.html">CSS hover behavior</a> in the IEbugs stylesheet:</p>

<pre>body {behavior:url(&quot;csshover.htc&quot;); }</pre>

<p>You can even go the whole hog and simulate IE7  with <a href="http://dean.edwards.name/IE7/usage/">Dean Edwards&#8217; JavaScript library</a>, which uses conditional comments to pull in a JavaScript library.</p>

<h2>IE.css&#8212;serving styles to all versions of IE</h2>

<p>Another good use for conditional comments is to separate IE-only extensions to the CSS spec, as they&#8217;ll stop your main styles.css from validating (and aren&#8217;t necessary in a non-IE browser, so why send them?).</p>

<p>Such extensions would be <a href="http://msdn.microsoft.com/en-us/library/ms532847.aspx">filters on images</a>, or <a href="http://www.yourhtmlsource.com/stylesheets/scrollbars.html">colored scrollbars</a>.</p>

<p>Here&#8217;s the code for the <code>head</code> of the page:</p>

<pre>&lt;!--[if  IE]&gt;
&lt;link rel=&quot;stylesheet&quot;  href=&quot;IE.css&quot; type=&quot;text/css&quot; /&gt;
&lt;![endif]--&gt;</pre>

<p>If you don&#8217;t need these extensions, or you don&#8217;t care that you have stuff in your main style sheet that won&#8217;t validate (and, in a practical world, there are absolutely no negative side-effects if you have, but it can be very useful for testing and <abbr title="Quality assurance">QA</abbr> if you do validate) you can just leave this in the main style sheet.</p>

<p>Another potential use for an IE.css is to add <a href="http://msdn.microsoft.com/en-us/library/Bb250481">IE Layout</a> to certain elements, which can help <a href="http://www.satzansatz.de/cssd/onhavinglayout.html">stop many IE rendering bugs</a>. For example, adding a background image to the bottom right of a link in IE7 (if you want to add an icon depending on file type) can break if the link wraps over the end of a line&#8212;which is impossible to predict or prevent. The cure (setting the proprietary property <code>zoom:1</code>) can be added to an IE-only style sheet&#8212;for example:</p>

<pre>a[href*=&quot;.ppt&quot;],  a[href*=&quot;.pdf&quot;],  a[href*=&quot;.doc&quot;], a[href*=&quot;.xls&quot;] {
  background: url(icon-download.gif)  no-repeat  center right;
  padding-right: 17px ; zoom:1;
}</pre>

<h2>IE/Mac: the new Netscape 4</h2>

<p>If you need to feed rules to IE/Mac (which is as obsolete as Netscape 4), there are hacks available, but you should consider importing a separate IE/Mac style sheet in your HTML header and keeping all IE/Mac rules in there:</p>

<pre>&lt;style type=&quot;text/css&quot;&gt;
@import(&quot;IEMac.css&quot;);
&lt;/style&gt;</pre>

<p>The formatting of the import must be exactly as above. (<a href="http://www.premonition.co.uk/cssd/ie51-only.html">Hat-tip</a>.) Alternatively, you can keep your HTML header clean and import a separate IE/Mac set of rules from your main style sheet via Tantek&#8217;s <a href="http://stopdesign.com/eg/ie5mac-bpf/">IE5/Mac Band Pass Filter</a>, which is made out of fairy dust:</p>

<pre>/*\*//*/
&#xA0;&#xA0;@import &quot;ie5mac.css&quot;;
/**/</pre>

<h2>Get yer code on, baby</h2>

<p>To recap, here&#8217;s all the code for your header (though you probably won&#8217;t need all of it):</p>

<pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; type=&quot;text/css&quot; /&gt;
&lt;!--[if  IE]&gt;
&lt;link rel=&quot;stylesheet&quot;  href=&quot;IE.css&quot; type=&quot;text/css&quot; /&gt;
&lt;![endif]--&gt;
&lt;!--[if lte IE 6]&gt;
&lt;link rel=&quot;stylesheet&quot;  href=&quot;IEbugs.css&quot; type=&quot;text/css&quot; /&gt;
&lt;![endif]--&gt;
&lt;!--[if lt IE 6]&gt;
&lt;link rel=&quot;stylesheet&quot;  href=&quot;boxmodel.css&quot; type=&quot;text/css&quot; /&gt;
&lt;![endif]--&gt;
&lt;style type=&quot;text/css&quot;&gt;
@import(&quot;IEMac.css&quot;);
&lt;/style&gt;</pre>

<h2>Minimizing <abbr title="">HTTP</abbr> requests</h2>

<p>Each style sheet pulled in requires an extra <abbr>HTTP</abbr> request, which can slow things down, because the <abbr>HTTP</abbr> gnomes get tired easily. In order to minimize these, you can combine all IE-facing hacks into a single IE.css, although you still need a version of the box model hack in here so IE5 gets the wider box. </p>

<p>To send 164px width to IE6, and 194px width to IE5 use this code: </p> 

<pre>#sidebar {width: 194px; /*IE 5.5 width - Tantek hack */
  voice-family: &quot;&quot;}&quot;&quot;;
  voice-family:inherit;
  width: 164px; /*real width*/ }</pre>

<h2>Testing</h2>

<p>Traditionally, and frustratingly, it&#8217;s been impossible to install more than one version of IE on a Windows operating system, making testing difficult. If you&#8217;re running Windows XP, you will weep with gratitude when you download the <a href="http://tredosoft.com/Multiple_IE">multiple IE installer</a> that installs IE3(!), IE4, IE5, IE5.5, and IE6 with version numbers in the title bar and respects conditional comments. If you&#39;re running Vista, you&#8217;re out of luck.</p>

<h2>Using conditional comments to hide something from IE/ Win</h2>

<p>It&#8217;s also possible to hide HTML from IE/Win:</p>

<pre>&lt;!--[if !IE]&gt;--&gt;
do something; IE will ignore this, other browsers parse it
&lt;!--&lt;![endif]--&gt;</pre>

<p>This validates fine. (Hat-tip Lachlan Hunt via <a href="http://www.456bereastreet.com/archive/200511/valid_downlevelrevealed_conditional_comments/">Roger Johansson.</a>)</p>

<h2>Summary</h2>
<p>Conditional comments are simple to use and effective in sending out special rules to the dinosaur browsers. They have their good points and negatives, however. For the prosecution:</p>

<ul>
  <li>They are contrary to the <a href="http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.4">specification</a> (&quot;Information that appears between comments has no special meaning&quot;), but this is a very purist objection, as they validate perfectly.</li>
  <li>They are a form of browser-sniffing, albeit one that you can guarantee will be future proof.</li>
  <li>They separate out the styles into several sheets, which could lead to maintenance hell.</li>
  <li>They are incompatible with the &quot;vision&quot; of CSS as a cross-platform, open standard.</li>
  <li>They give Microsoft an excuse not to tidy up their browsers.</li>
</ul>

<p>In defense of conditional comments:</p>

<ul>
<li>They allow you to ensure that your site works in standards-compliant browsers like Opera, and then add hacks for the bad browsers without worrying about regression testing (because you know that your IE5-facing rules won&#8217;t have some unintended side-effect in Camino or Flock or whatever).</li>
<li>They allow you to put your invalid, IE-only properties (<code>zoom</code>, <code>scollbar</code>), etc. in a separate style sheet, preserving the validity of the rest of your CSS.</li>
<li>They allow you to ghetto your IE-only rules and to reduce the regex-like hacks that are difficult to understand and may have unintended consequences in future browsers.</li>
</ul>

<h3>Further reading</h3>
<ul>
<li><a href="http://meiert.com/en/blog/20070201/why-conditional-comments-are-bad-repeat-bad/">Why Conditional Comments Are Bad, Repeat: Bad&#8212;Jens Meiert</a></li>
<li><a href="http://tantek.com/log/2005/11.html">Pandora&#39;s Box (Model) of CSS Hacks And Other Good Intentions&#8212;Tantek &#xC7;elik</a></li>
<li><a href="http://msdn.microsoft.com/en-us/library/ms537512.aspx">About Conditional Comments&#8212;Microsoft Developer&#39;s Network</a> (check out the first 2 sentences for some oh-so-1998 ideas).</li>
</ul>

