Title: Differences between Opera Mini 3 and 4
----
Date: 2007-11-07 09:03:18
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

<p class="note">DEPRECATED: This article is deprecated, and a newer article with updated information is available at <a href="http://dev.opera.com/articles/view/opera-mini-5-developers/">A developer’s look at Opera Mini 5</a>. You should read this one if you want updated information on the latest version of Opera Mini.</p>

<h2>Introduction</h2>

<p>Opera Mini 3 was a highly successful mobile browser because of it&#39;s unique features, and also the unique way in which it uses a server farm to load up your pages for you and compress them before sending them to your device, meaning a faster, less costly experience that still gives you the full web on your phones, ever low powered ones. Opera Mini 4 builds on this with more great features and improved standards support, but what exactly are the differences?</p>

<p>In this article I provide a guide to the differences between the two versions. It is mainly geared towards developers wanting to make sure that their sites will still run on both versions, but I have also included a round up of the main new features the browser itself provides..</p>

<h2>New features</h2>

<p>This section lists the main new features introduced in Opera Mini 4, which will tempt users to make the upgrade.</p>

<h3>Integration with Opera Link</h3>

<p>Opera Mini is integrated with <a href="http://www.opera.com/link/">Opera Link</a>, an exciting new service allowing you to keep all your bookmarks in sync between Opera Mini, Mobile, Desktop, and on games consoles.</p>

<h3>Better navigation with virtual mouse and power scrolling</h3>

<p>Opera Mini allows you to navigate around web pages much faster by using your joystick/stylus to move the virtual mouse around to select different page items (it snaps to nearby links etc.)</p>

<h3>Keystrokes</h3>

<p>While using Opera Mini 4 you can use various keyboard shortcuts to speed up using the interface, for example 1 will open up the context menu where you can reload the page, turn images off before you navigate to a new URL, and more.</p>

<h3>View Pages in Landscape mode</h3>

<p>If you want a widescreen view of the web, you can hit * # to rotate the screen through 90 degrees and browse in Landscape mode. This can also be changed to the default setting if you wish.</p>

<h3>Optimized for Blackberry Users</h3>

<p>Opera Mini 4 offers &quot;native BlackBerry menus&quot; designed to invoke the same user-interface Blackberry users are used to on their Blackberry devices, giving them a better experience.</p>

<h2>Identification using the user agent string</h2>

<p>Unsurprisingly, the user agent has changed between Opera Mini 3 and 4. The Opera Mini 3 UA string looked like this:</p>

<pre>Opera/8.01 (J2ME/MIDP; Opera Mini/3.1.8295/1724; en; U; ssr)</pre>

<p>Whereas the Opera Mini 4 string now looks like this:</p>

<pre>Opera/9.5 (J2ME/MIDP; Opera Mini/4.0.xxxx/8; U; en)</pre>

<p>You&#39;ll notice that it is based on the same core engine as Opera 9.5, whereas Opera Mini 3 was based on Opera 8.01.</p>

<h2>Rendering Modes</h2>

<p>Opera Mini 4 has two rendering modes:</p>

<ul>
<li>Small screen rendering mode (mobile view) - the default on phones with screens less than 128 pixels in width, this mode reformats the page and then displays it in one small column, with no scrolling necessary. This is good for small screens, where all the scrolling would be potentially confusing and laborious, but it does mean losing a lot of formatting, such as CSS positioning</li>

<li>Desktop rendering - the default on phones with screens over 128 pixels in width, this mode displays the full page how it was originally intended, from a heavily zoomed out view. You can then select a position to zoom in to view the full-size content. When zoomed in, you can scroll around the page</li>
</ul>

<h2>Supported image formats</h2>

<p>Opera Mini 3 and 4 basically support similar image formats, as both the core rendering engines they are based on have good image support, including PNG, JPEG, GIF (but not animated GIFs,) BMP, ICO, TGA and WBMP.</p>

<p>There are two different image settings available in Opera Mini - low quality, which reduces the image quality to save bandwidth, and high quality, which downloads the full image. The default is low, but the user can change this in the settings menu.</p>

<h2>Standards support</h2>

<p>At this point in the article, we&#39;ve explored some of the new features Opera Mini 4 provides that weren&#39;t present in 3, and also looked at some of the technological differences. Now we turn our attention to web standards support, and how that differs between versions. It is inevitable that there are some differences, as 4 is based on a different core rendering engine to 3, but the differences will certainly be to your liking, I can promise that. For more on standards support in Opera Mini 4 and general development tips, see our article on <a href="http://dev.opera.com/articles/view/evolving-the-internet-on-your-phone-des/"><cite>Designing pages with Opera Mini 4 in mind</cite></a>.</p>
 
<h3>HTML</h3>

<p>Opera Mini 3 didn&#39;t support tables, underlining/strike-through/overlining, strong/emphasis, blockquotes, heading levels, del/abbr/acronym, lists, tables, and blink and marquee.</p>

<p>The good news is that Opera Mini 4 does support all of these (except <code>blink</code> and <code>marquee</code>!), for example <code>h1</code> to <code>h6</code> are displayed properly, and <code>strong</code> and <code>em</code> work as expected.</p>

<p>Tables work fine, even down to <code>th</code> producing headings,  although tables containing more than about 2 columns won&#39;t look very good in mobile view.</p>

<p>The full complement of lists are supported - ordered, unordered, and definition.</p>

<h3>CSS</h3>

<p>CSS support is vastly improved in Opera Mini 4 over Opera Mini 3, again because of the change in rendering engine. Opera Mini 4 basically supports all the CSS that Opera 9.5 desktop (Kestrel) does, including CSS 3 features such as selectors, media queries and <code>text-shadow</code> (although <code>text-shadow</code> support is only partial - Mini 4 does not support blurred text shadows).</p>

<p>Opera Mini 4 also supports borders and background images.</p>

<p>Another big change with Opera Mini 4 is how it handles the handheld media type and media queries. This is discussed next.</p>

<h4>Media types and media queries</h4>

<p>Opera Mini 3 supports the <code>handheld</code> media type, as does 4, but 3 supports <code>handheld</code> by default, whereas 4 uses the <code>screen</code> stylesheet by default in desktop rendering mode, and allows users to switch to small screen rendering mode/mobile view to use the <code>handheld</code> stylesheet.</p>


<p>This decision was made because even though <code>handheld</code> is designed for mobile devices, it is rather restricting - Mini can handle most desktop web page content pretty well (although there are some scripting caveats, as mentioned below) so it is unfair to lumber it with low-fidelity handheld styling, when it could handle the main stylesheet. The styles used in the stylesheets are of course down to you as designers and developers, but a lot of web folk tend to offer a really low style experience in their <code>handheld</code> stylesheets. The way Opera Mini 4 does it gives users an immediate better-looking experience, while at the same time allowing them to choose the handheld styles or SSR if they wish.</p>

<p>Opera recommends media queries as a better way of tailoring styling to different devices, allowing iterative changes in style based on important factors such as browser window width. For example you could have one block of styles that will apply a good 2 column layout to all browsers, then a block of styles inside a media query that will reduce the heading sizes and change it to a single column layout if the browser window is less than 480 pixels wide - genius!</p>

<p>In the real world, using media types and queries does have issues due to browser support, and a combination of both is in fact needed to ensure reliable support in most browser. These issues are discussed further in our article on <a href="http://dev.opera.com/articles/view/how-to-serve-the-right-content-to-mobile/"><cite>How to serve the right content to mobile browser</cite></a>.</p>	


<h3>JavaScript</h3>

<p>The basic story in Mini 3 and 4 is that JavaScript is very limited on the client - background scripts will fail, there is limited support for DOM events, and very limited Ajax support. JavaScript executed on the server however will work fine. Mini 3&#39;s client-side JavaScript support was even more limited than the list you see below; fortunately Mini 4 has expanded it&#39;s support a bit.</p>

<p>The supported events are as follows (bear in mind that Event handlers using the &#39;this&#39; keyword on elements other than form controls will fail, for example <code>&lt;a href=&quot;http://labs.opera.com&quot; onclick=&#39;window.location = this.href&#39;&gt;</code>):</p>

<ol>
<li>Loading: normal event processing is done for <code>onLoad</code> and <code>onUnload</code>.</li>
<li>Forms:
	<ol><li><code>onSubmit</code></li>
	<li><code>onChange</code>: this even works during filling out a form, not just on submitting the entire form. For example, if you have 2 form fields, &quot;Select Country&quot; and &quot;Select State/Region,&quot; and the second one changes depending on the country you selected in the first one, Opera Mini will reload to display this change</li>
	<li><code>onClick</code> on buttons (bear in mind that events will only be fired when the form is finally submitted, not while it&#39;s being edited in the client, therefore <code>onFocus</code> would not work)</li></ol>
</li>
<li>Clicks: <code>onClick</code> is implemented as a mouse motion to the coordinate being clicked (<code>onMouseEnter</code>, <code>onMouseOver</code>, <code>onMouseLeave</code> etc) followed by <code>onMouseDown</code> followed by <code>onMouseUp</code> and finally <code>onClick</code>.</li>
</ol>

<p>All other events are ignored/not applicable, for example:</p>

<ol>
<li>key/mouse events (<code>onMouseOver/-Out/-Down/-Up</code>, <code>onKeyDown/-KeyPress</code>)</li>
<li>focus events (<code>onBlur</code>, <code>onFocus</code>, as mentioned above)</li>
</ol>

The <p><code>document.write()</code> function is also supported, and pop-ups are either blocked or replace the original document.</p>

<p>For more details of JavaScript support in Mini 4, see my <a href="http://dev.opera.com/articles/view/javascript-support-in-opera-mini-4/" alt="JavaScript in Opera Mini 4 article">JavaScript support in Opera Mini 4 article</a>.</p>

<h2>Summary</h2>

<p>In this article we have covered the differences between Opera Mini 3 and Opera Mini 4, from a developer&#39;s point of view. This should be useful to anyone actively developing web content with mobile devices in mind, to see what issues there are to be aware of when making sure sites will work in both Opera Mini 3 and 4, and upgrading your knowledge.</p>
  
