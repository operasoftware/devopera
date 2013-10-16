Title: How to serve the right content to mobile browsers
----
Date: 2007-11-07 09:03:30
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
<p>The modern web is viewed on many different devices, so it is getting increasingly important for us to think about how to create our web sites so that they will serve the right content to users, no matter what device they are using. We have many technologies at our disposal, including media types, media queries, and browser sniffing, but what&#39;s the best way to handle this? </p>

<p>In this article I will explore the different ways in which you can develop a web site to serve appropriate content to the different devices used to browse to your web site, and show how best to use them. I&#39;ll talk about:</p>

<ul>
<li>Browser sniffing</li>
<li>Creating a separate site for mobile browsers</li>
<li>Media types</li>
<li>Media queries</li>
</ul>

<p>Of course, it is argued by some that you should be able to ensure that your site will work well in most reasonably modern browsers (desktop and mobile) bydoing nothing except designing them carefully and making sure you stick to POSH (Plain Old Semantic HTML.) This is true to an extent, but fails to take into account that some sites just aren&#39;t simple text-based affairs (for example Ajax sites, or sites that feature a lot of multimedia) that need special treatment to get them to play nicely on mobile phones, or just won&#39;t work at all (although Ajax will work if you employ Hijax techniques - see  <a href="http://domscripting.com/blog/display/41">Jeremy Keith&#39;s first post on Hijax</a> and <a href="http://domscripting.com/presentations/xtech2006/">Jeremy&#39;s  Xtech 2006 presentation</a> for more. So if your site doesn&#39;t fall into these categories, it is worth just doing some simple testing on all the target mobile browsers to see if it provides a satisfactory user experience. You could save yourself a lot of trouble this way. If this is not satisfactory, then read on!</p>

<h2>Browser sniffing</h2>
<p>Browser sniffing, as many of you will know, is the art of finding out which browser is trying to access your site, and then serving content to it that you think it will be able to make use of based on your knowledge of that browser&#39;s standards support, likely screen resolution etc. This is commonly done by looking at the browser&#39;s user agent string.</p>

<p>It was very important back in the days of the great browser wars, when IE and Netscape kept adding browser specific features. If you wanted to use any kind of DHTML for example, you&#39;d have to check for IE or Netscape, and then use a totally different DOM structure, and other proprietary constructs. This basically meant coding 2 totally different sites, which was a nasty experience.</p>

<p>Browser sniffing sounds straightforward in principle, but it does have its issues:</p>

<p>First of all, the information you&#39;re going to get back about which browser is visiting your site is not always accurate. Many browsers can &quot;spoof&quot; other browsers, ie send back other browser&#39;s user agent strings when they are requested. One of the main reasons it appeared was because of irresponsible developers deciding on which sites they wanted to develop for, and then completely excluding any other browser. How many times have you seen a site that says &quot;I&#39;m sorry, but you need to download browser x to use this site&quot;? How annoyed does it make you?</p>

<p>These days, more responsible web developers are using browser sniffing techniques in more responsible ways, to include people, rather than exclude them, as we&#39;ll discuss in the next section.</p>

<p>Another thing to consider in this situation is object detection - rather than using the UA string to determine the browser, you detect for the presence of specific browser objects, to determine if your functionality will work or not. This way if a browser lacks a specific object that you are testing for, it will just bypass that code safely without failing, and then be able to access that code if support is added in future versions, without you needing to make any changes to your script. We will follow up this article with a more detailed look at server-sniffing methods in the next couple of weeks - watch this space.</p>

<h2>Creating a separate site for mobile browsers</h2>
<p>Back in the days when the mobile web was very young, and the only thing available to phones was WAP/WML sites (yum!) this of course was the only option you had. It was common to see sites like <code>wap.myplace.com</code> alongside <code>www.myplace.com</code>, and if a user navigated to the desktop version by accident, some good old fashioned browser sniffing could be employed to forward them on to the right site.</p>

<p>These days, the same kind of principle is often used to differentiate between desktop and mobile sites, because even though mobile browsing power has increased a great deal, and mobile web pages can now run on the same technologies that desktop pages do, some sites will not run well at all on many mobile browsers, particularly large ones, with lots of multimedia.</p>

<p>With responsible browser sniffing, you can detect what browser a user is using and then serve them an appropriate site that will work on their browser.</p>

<p>But there are still issues here - 2 versions of a site means 2 copies of the same content to maintain, which can be a nightmare, and forcing the user to remember 2 URLs can be painful (unless of course you have 1 central URL, and then do redirects as appropriate.)</p>

<p>If you use browser sniffing/object detection to redirect to a mobile site then you <em>should</em> include a link (preferably at the top) to redirect to the regular desktop version (with a cookie to store the user&#39;s choice) in case the user doesn&#39;t agree with your optimisations and wants some content that is only available on the regular site, or just prefers it.  A mobile users *shouldn&#39;t* be excluded from the regular experience.</p>

<p>In many cases it is best to have one version of the site that adapts to the user agent, and this is what we&#39;ll look at next. Exceptions to this do exist - the decision depends on the content and audience of the site. For example, a very complex heavy webapp would benefit from a separate mobile site to display just the specific functionality that mobile users could benefit from (some good examples of this can be seen in Brian Suda&#39;s article <a href="http://dev.opera.com/articles/view/designing-and-developing-mobile-web-site-1/" alt="Brian Suda mobile development case studies">here</a>. Conversely, a site that is designed specifically for the mobile context, for example using location aware services - such as automatic display of specific hotel or weather information for an area - wouldn&#39;t make sense on the desktop. It would be better to have a separate desktop version that allows you to just search using keywords (this would also be used by mobile handsets that don&#39;t have the ability to give location information.)   </p>

<h2>One site to rule them all (sorry, couldn&#39;t resist it)</h2>
<p>To create one site that will adapt to the user agent visiting it, we have a few options.</p>

<p>To deal with dynamic content such as JavaScript menus, it is best to employ graceful degradation techniques to ensure that the site is still usable if the JavaScript functionality fails. In anycase, a sensible design will win out here - a huge DHTML style animation certainly won&#39;t work very well on a low power mobile browser with a 240 pixel screen available, so don&#39;t serve it to them.</p>

<p>For CSS on mobile devices, the main concerns are altering the layout so that it works on a much smaller screen size, and keeping your background images in check so that you don&#39;t wallop your mobile users with huge downloads. The 2 ways of handling this are with media types, and media queries.</p>

<h2>Media types</h2>

<p>Media types allow you to specify different stylesheets for different media types, for example <code>screen</code> (the default in most browsers,) <code>print</code> (for the printed page,) and most relevant to this article, <code>handheld</code> for handheld devices. You could use the following lines to import an appropriate stylesheet for the desktop browser, or ignore that and import a different stylesheet appropriate for mobile devices if the user agent is a phone:</p>

<pre>
&lt;link rel=&quot;stylesheet&quot; href=&quot;screenstyle.css&quot; type=&quot;text/css&quot; media=&quot;screen, projection&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;handheldstyle.css&quot; type=&quot;text/css&quot; media=&quot;handheld&quot; /&gt;
</pre>

<p>Opera Mobile 8.65 and Opera Mini beta 1 and 2 supported <code>handheld</code> by default, whereas future versions of Opera Mobile and Opera Mini 4 use the screen stylesheet by default, and allow users to switch to small screen rendering mode/mobile view to use the handheld stylesheet - this reformats the handheld stylesheet into a single column if it is defined.</p>

<p>Why did Opera do this? Well, the main issue with handheld is that you are not giving the user much of a choice of what content is delivered to their phone. These days, phones are much more powerful than they used to be, and it is a bit insulting to have a web site see you are a mobile device, and then serve you a really dumbed down version of it&#39;s content, even thought the device could quite easily support the full desktop version of the site. If you check out Opera Mobile 8.65, or WebKit on the iPhone, you&#39;ll see a browser of comparable power to their desktop cousins. For these reasons, Opera decided to favour media queries. </p>

<p>Other browers have varying support - the Nokia S60 browser and iPhone (both WebKit-based) browsers don&#39;t have SSR/mobile mode, and just rely on the screen styles - they basically try to be desktop browsers, but on a phone (as does Opera Mobile, with Mini being somewhere in between, depending on the power of your handset.) With Pocket IE , Netfront and Openwave on the other hand, you need to rely on the handheld stylesheet, as they don&#39;t support media queries correctly - IE often just ignores entire stylesheets if they contain media queries, whereas the others usually just apply all the styles inside them regardless of the situation (see below for more on media queries, and check out this <a href="http://www.howtocreate.co.uk/tutorials/css/mediatypes" alt="Browser support for mediatypes and queries">HowToCreate article for more on mobile browser support for media types/queries.</a></p>

<h2>Media queries</h2>
<p>Media queries are part of the <a href="http://www.w3.org/TR/css3-mediaqueries/" alt="The W3C CSS3 mediaqueries spec">CSS3</a> spec, and quite simply are a way to insert decision statements into your CSS, similar to <code>if ... then ... else</code> constructs in traditional programming. The idea is that you can check for a condition in the user agent (such as browser window width) and choose to ignore the styles within that block if the condition isn&#39;t met. For example (in the real world, this style blocs would be in a separate stylesheet, and then imported into the web page using a link element - this is just for illustrative purposes):</p>

<pre>&lt;style type=&quot;text/css&quot; media=&quot;screen,projection&quot;&gt;
  
 /* Insert your rules for desktop and other big browser windows here */

  @media only all and (max-width: 480px) {
    /* Insert your rules for smaller screens here */
  }

&lt;/style&gt;</pre>

<p>This will apply the rules contained within it on any browser where the screen width is smaller than 481px wide - this happens dynamically as you resize the browser window, and these rules override anything set outside the media query. Again, this is the theory - there are issues with browser support here. IE and Safari versions 1 and 2 (and other earlier WebKit-based browsers) don&#39;t understand the media query. The rather bizarre <code>only</code> keyword is needed, otherwise Firefox 2 and 3 doesn&#39;t understand it either (these, and other Gecko-based browsers will use all the media query statements even if the media query returns false - they understand all, but don&#39;t understand the media query, so they return false, but instead of ignoring it they render the content. Unless <code>only</code> is used in addition to all.)

Safari 3 (and iPhone and iPod touch - WebKit) and Opera 7+ (including Opera Mobile 7+ and Mini 4) are the only browsers that interpret media queries totally correctly at the time of writing of this article. <a href="http://dev.opera.com/articles/view/safe-media-queries/" alt="Safe media queries">See this article on safe media queries</a> for a much deeper discussion on how use media queries across different browsers.</p>

<p>One of the best ways to tackle this is by using a combination of the 2 above methods, as follows:</p>

<h2>A combination works best</h2>
<p>We recommend that you employ the following approach:</p>

<pre>&lt;style type=&quot;text/css&quot; media=&quot;screen,projection&quot;&gt;
  
 /* Insert your rules for desktop and other big browser windows here */

  @media only all and (max-width: 480px) {
    /* Insert your rules for smaller screens here */
  }

&lt;/style&gt;

&lt;style type=&quot;text/css&quot; media=&quot;handheld&quot;&gt;
/* specific mobile design rules for handheld devices with small screens, which don&#39;t support media queries. */
&lt;/style&gt;</pre>

<p>With this approach we leave the decision to the user. They can decide how they want to view the site, as long as the site or the browser they are using gives the the choice (Opera Mini for example.). A lot of users of course will just go for the default because they don&#39;t really understand the options being presented to them, but at least the media query is there to help optimize the site for them. The handheld stylesheet is still there as well, for browsers that don&#39;t understand media queries (like Pocket IE, Netfront, early versions of Opera Mini and Openwave.)</p>

<p>There is still a slight issue with this approach - browsers using the regular screen stylesheet will have to download a larger stylesheet, due to all the additional rules inside the media query, and furthermore, *all* the styles are acted upon in this case, not just the ones inside the media query - the rules inside the media query override the rules outside it, giving you the desired layout on your small screen browser. Of course, you can minimize how much of an issue this is by using media queries responsibly. You don&#39;t need to repeat the entire stylesheet inside the media query - just override the rules that need it.</p>

<h2>Summary</h2>
<p>I hope this article has been useful to you in deciding how to tackle the issue of serving your content to different devices. The road ahead isn&#39;t easy by any means, but as specs and spec support improves, and mobile devices get more powerful, some of the issues discussed here should subside somewhat.</p>
    
