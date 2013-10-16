Title: Mobile-friendly: The mobile web optimization guide
----
Date: 2010-07-28 17:40:00
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

<p class="note">Updated April 2012 to modernise references, eg &quot;will be supported in IE9&quot; and to change the default assumed width in Opera Mobile from 850 to 980 pixels.</p>
<h2>Contents</h2>
<ul>
  <li><a href="#intro">Introduction</a></li>
  <li><a href="#xdevice">The difficulties of cross-device design</a></li>
  <li><a href="#remember">You must remember this&#x2026;</a>
    <ul>
      <li><a href="#taskfocused">Mobile users are task-focused users. And so are all users</a></li>
    </ul>
  </li>
  <li><a href="#strategy-1">Strategy #1: Code well and do nothing special for mobile users</a></li>
  <li><a href="#strategy-2">Strategy #2: Make a separate <q>mobile</q> site</a>
    <ul>
      <li><a href="#template">Designing a template</a></li>
      <li><a href="#viewport">The viewport metatag</a></li>
    </ul>
  </li>
  <li><a href="#strategy-3">Strategy #3: Build mobile-aware adaptive sites</a>
    <ul>
      <li><a href="#hungry">Using Media Queries to turn off resource-hungry CSS</a></li>
    </ul>
  <li><a href="#techniques">Other useful mobile-friendly techniques</a>
    <ul>
      <li><a href="#combinefiles">Combine files and reduce requests across the network</a></li>
      <li><a href="#svg">Use Scalable Vector Graphics for images</a></li>
      <li><a href="#script">Put script elements as far down as possible in the source</a></li>
      <li><a href="#imagedimensions">State the dimensions of images in the HTML</a></li>
      <li><a href="#html5">Familiarise yourself with HTML5</a></li>
      <li><a href="#geo">Geolocation</a></li>
    </ul>
  </li>
  <li><a href="#testing">Testing, testing, one two three…</a>
    <ul>
      <li><a href="#testing-opera">Testing on Opera Mobile and Opera Mini</a></li>
      <li><a href="#testing-other">Testing on other handsets and browsers</a></li>
      <li><a href="#debugging">Debugging devices with Opera Dragonfly</a></li>
    </ul>
  </li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#resources">Resources</a></li>
</li></ul>
<h2 id="intro">Introduction</h2>
<p>If I had a Euro for everyone who asks me at conferences how they can <q>mobilise</q> their web site, I&#39;d be extraordinarily rich as well as breathtakingly handsome.</p>
<p>It&#39;s easy to see why people wish to make their sites <q>mobile friendly</q>; <a href="http://www.gartner.com/it/page.jsp?id=1278413">Gartner research suggests</a> that by 2013, mobile phones will overtake PCs as the most common Web access device worldwide. And don&#39;t forget other visits from devices such as games consoles like Nintendo Wii, DSi, web-enabled TVs, <a href="http://www.opera.com/press/releases/2009/04/02_2/">in-car browsers</a> and the like.</p>
<p>Many customers are already using mobile devices as their main method of Web access, particularly in emerging markets — the <cite>July 2009 Statistical Report on Internet Development in China</cite> states that <q><q>the proportion of [people] accessing the Internet by mobile increased enormously from 39.5% in late 2008 to 46% in June 2009</q>, while the proportion of using desktops and laptops decreased</q>. That translates to 150 million people. In the developed world, many have a mobile device as their secondary method of accessing the Web while they&#39;re out and about.</p>
<p>It&#39;s a truism that on the Web, there is always someone offering the same service as you are. And if you&#39;re not catering for the mobile user, you can be sure that your competitors are. In the current harsh economic climate, sending customers into the arms of the competition doesn&#39;t succeed as a business strategy.</p>
<p>This article provides an overview of three different strategies to make your websites work across all devices. We&#39;ll call them <q>mobile-aware</q> websites, as they&#39;re not specifically for mobile sites, but they will work on mobile, as well as across different alternative browsing devices. These strategies are not mutually exclusive; you can mix and match as your project, budget and sanity allows.</p>
<h2 id="xdevice">The difficulties of cross-device design</h2>
<p>Why is it so difficult to find reliable information on how to code mobile-aware sites? After all, those of us who are adept at using web standards have a corpus of best practices that dates back years. The answer is that the market is still fragmented, although we&#39;re seeing more convergence as devices become more powerful (customers are also becoming more demanding, as a consequence.)</p>
<p>Mobile devices have a wide variety of screen sizes and input methods that range from QWERTY keyboards to touch screens to traditional numeric keypads. Battery life is a problem too; no matter how killer your new web application is, if it eats your visitors&#39; batteries, it&#39;s unlikely to be a success on devices.</p>
<p>Then there is the simple fact that we have a huge variety of devices, and browsers running on those devices. Smartphones can run full Web browsers such as Opera Mobile or Safari/iPhone, while in the developing world we see much lower-end handsets that don&#39;t have an operating system but, if they can run Java they can use Opera Mini (a thin client for a proxy-based system that compresses pages down to about 10% of their original size before being sent to the handset for rendering). Opera&#39;s monthly <a href="http://www.opera.com/smw">State of the Mobile Web report</a> gives useful breakdowns of the different handsets in use across the world.</p>
<h2 id="remember">You must remember this…</h2>
<p>The mantra for cross-device development is: <strong>one site for all is the ideal but it&#39;s not always possible</strong>. Whichever strategy you adopt, there is one vital point to remember:</p>
<h3 id="taskfocused">Mobile users are task-focused users. And so are all users</h3>
<p>Many developers and <a href="http://www.useit.com/alertbox/mobile-usability.html">usability pundits</a> advocate making mobile-only sites because mobile users are in a hurry; they&#39;re on the go and want to perform one specific task and then finish. A common example cited is that of a restaurant site. The mobile user wants to find the location, the menu and the opening hours so, the argument goes, the mobile site should contain this and nothing else.</p>
<p>This is a good argument, but it&#39;s only half true. If it were 100% true, what would be on the <q>full</q> website? Presumably, a movie of the decor, some atmospheric music, animated representations of the house special dishes, and a downloadable menu in some fancy font. The fallacy here is that users of desktop computers are not task-focussed and have time to waste on an immersive branding experience. The truth is that all users are in a hurry, and all users want to find the information, then leave your site and go and do something more interesting — like taking their partner out to dinner. You should therefore make an effort to reduce clutter and save time for <em>all</em> users — one site should be able to serve the needs of both mobile and desktop users.</p>
<p>Mantra #2: <strong>just because a desktop site allows you more space to fill, it doesn&#39;t mean that you should.</strong></p>
<h2 id="strategy-1">Strategy #1: Code well and do nothing special for mobile</h2>
<p>The current crop of advanced mobile browsers are very good at rearranging content without being told how to by a developer. At the user&#39;s request they pan and zoom, reformat a page into a single-column view, remove images, and more.</p>
<p>Making a good semi-liquid layout that has a <code>min-width</code> and <code>max-width</code> set in your CSS and em-based typography will work very well across a range of different devices and screen sizes. This is also more likely to please your marketing and branding people than a stripped-down <q>mobile-only</q> experience, as well as being more familiar to users who are used to the full desktop site.</p>
<p>You can deal with people turning off images to speed up the site (and to save money if they&#39;re paying by the megabyte, which is still very common on mobile, and in the developing world) by ensuring that you code for accessibility. Using correct alternative text on images not only helps those who <em>can&#39;t</em> see images because of a disability, but also those who choose not to download them. There are other parallels between mobile browsing and accessibility: older devices may have no colours or special fonts, so the accessibility requirement not to rely on colour or visuals alone to convey information is appropriate here too. Ensuring good contrast between foreground and background is important; have you ever had to move into the shade to read your phone because the sunlight meant you couldn&#39;t distinguish the text properly?</p>
<p class="note">The catchily-named <a href="http://www.w3.org/TR/mwbp-wcag/">Relationship between Mobile Web Best Practices (MWBP) and Web Content Accessibility Guidelines (WCAG)</a> provides a useful cross-reference between mobile best practices and accessibility guidelines.</p>
<p>Other best practices from desktop development have beneficial side-effects for cross-browser development. <a href="http://wellstyled.com/css-nopreload-rollovers.html">CSS sprites</a>, for example, were developed to stop the need for JavaScript preloading of background images, itself a workaround to prevent flicker while images load. In the mobile world, every request across the network takes an unpredictably long time, so CSS sprites allow us to reduce the number of HTTP requests and therefore make interaction feel faster and more responsive.</p>
<p>If you&#39;re feeling adventurous, you can add some spice from the <a href="#strategy-3">fully mobile-aware site methodology</a>. For example, if you have background images on some element, you might use the <a href="http://people.opera.com/brucel/demo/background-size.html"><code>background-size</code> property</a> so that the background image shrinks or expands to fill its container.</p>
<h2 id="strategy-2">Strategy #2: Make a separate <q>mobile</q> site</h2>
<p>For some CMS-driven sites this may be the quickest option, but it isn&#39;t always the best option longer term: it results in having two sites to user-test, maintain, etc. Of course, in the real commercial world, quicker and easier may often be synonymous with <q>best</q>, so let&#39;s see how these work.</p>
<p>A mobile site usually takes the form of <code>m.example.com</code>, and generally has the same site structure as the full-fat site. This is easily achieved with a half-decent CMS.</p>
<p>You then need to implement server-side sniffing to divert non-desktop browsers to your mobile site. To do this, you first need to maintain a list of <acronym title="User Agent">UA</acronym> strings that browsers send to the server with each request (see <em>Help&gt;About</em> in Opera to see your UA string) — this is how browsers identify themselves to the servers they make requests to. You then test the UA strings from browsers requesting your site to see if they match an entry on the list of UA strings mentioned above and identify as a mobile browser. If so, you send them to the mobile version of the site.</p>
<p>Of course, if a new browser comes on to the market, the list must be updated or it will return false results, resulting in annoyed users being directed to the wrong site.</p>
<p>We can&#39;t recommend any specific browser-sniffing code because what works today can easily go out-of-date if not actively maintained. As an example, the User Agent (UA) string for the Opera 10+ family of browsers says <q>Opera/9.80</q>. This is because the beta version said <q>Opera/10</q>, but this revealed a problem — sites with browser-sniffing blocked access, mistakenly believing it to be Opera 1 because the authors hadn&#39;t allowed for double digits. So beware: if you use browser sniffing, be prepared for continually rewriting and redeploying those scripts on every website for life.</p>
<div class="note">
  <p>For reference, the UA string fragment <q>Mobi</q> is a useful identifier for Opera Mobile; the string fragment <q>Mini</q> is  a useful identifier for Opera Mini.</p>
  <p>Opera can also be identified by using JavaScript to test for the presence of the <code>window.opera</code> object, although this will disappear in Opera 14.</p>
</div>
<p>A more sophisticated method of browser sniffing is the <a href="http://wurfl.sourceforge.net/">Wireless Universal Resource File (WURFL)</a>; this <q>is an XML configuration file which contains information about capabilities and features of many mobile devices</q>. This allows you to test features, but requires each and every handset on the planet to be in the database with its features correctly identified. And, of course, it needs to be kept up-to-date.</p>
<p>Because browser sniffing is, by definition, never future-proof, it&#39;s absolutely vital that you have a link on every page that sends the user to the full website and remembers the choice in a cookie. That way, if your server-side script doesn&#39;t recognise Whizzo-browser as a desktop browser (because the script was written before Whizzo-browser was invented), it will send the user to a mobile page, but Whizzo-browser users can simply click the link to <q>view standard site</q> and henceforth, always get the standard site.</p>
<h3 id="template">Designing a template</h3>
<p>You&#39;ll need to design a cut-down template, with simple branding and layout etc. for your CMS to squirt content into. Ensure that you have the same structure as your non-&quot;mobile&quot; site, so that if someone follows a deep link into your site, they actually get the content they wanted. It&#39;s good practice to offer users a link to the &quot;desktop&quot; version (and vice-versa). Remember their choice with a cookie or in  localstorage, but continue offering the alternative version choice.</p>
<p>Because you&#39;re making all the effort to ensure your site is for mobile devices, you should hint to the browser that you&#39;ve done lots of thinking already so it doesn&#39;t need to do all the clever reformatting that devices can do. One way of doing this is to use the viewport metatag.</p>
<h3 id="viewport">The <code>viewport</code> metatag</h3>
<p>When loading a Web page in a full-powered mobile browser such as Opera Mobile, you start with a zoomed-out overview of the page and can then pan and zoom into specific areas of the page in just a few clicks. While this approach works fine for most websites, it is possible to further enhance the user experience for your visitors by presenting a zoomed-in view of the page by default. This approach works particularly well for Web applications, giving them more of an <q>application-like</q> feel.</p>
<p>By default Opera Mobile assumes a page to be 980 pixels wide, and the zoomed-out overview rescales these values accordingly to fit on the device screen. With a viewport <code>meta</code> tag in the <code>head</code> section of the page you can override this default width and instead set an arbitrary pixel value such as 320, 480, etc. For cross-device compatibility, we recommend setting the width to the <code>device-width</code>:</p>
<pre><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot; /&gt;</code></pre>
<p>This adjusts the page width to fit in the full width of the screen, or put differently, it makes one CSS pixel equal to one device pixel.</p>
<p>Read more in <a href="http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/">An introduction to meta viewport and @viewport</a>.</p>
<h2 id="strategy-3">Strategy #3: Build mobile-aware adaptive sites</h2>
<p>The hardest to pull-off methodology is the one that can bring the best of all worlds to your site visitors. A fully mobile-aware site has adaptive content that reacts to device capabilities, and is therefore future-proof as it tests features rather than sniffing browsers.</p>
<p>The heart of the technique is CSS Media Queries, which are supported by Opera Desktop, Opera Mini and Opera Mobile, Safari (desktop and iPhone/ iPad), Chrome and Firefox and Internet Explorer 9.</p>
<p>Media Queries are a CSS3 feature that allow you to specify under what conditions a style sheet or a particular set of CSS rules should be applied. For instance, to limit a set of styles to only apply to a screen which is 480px wide or less, you could use the following Media Query:</p>
<pre><code>@media screen and (max-width: 480px) {  
   background-color: red;
   font-size: 1.5em;
}</code></pre>
<p>Obviously, you&#39;re unlikely to want to turn all the text red. But you might want to send a <q>wide</q> company logo to a header or footer on desktop-sized screens to use as a background image, but a narrow version to smaller screens:
<pre><code>@media screen and (min-width: 800px { 
   #footer {background-image: url(wide-banner.png);} 
}

@media screen and (max-width: 800px {
   #footer {background-image: url(narrow-banner.png);} 
}</code></pre>
<p>Another common use is to reformat the layout. Here&#39;s a <a href="http://people.opera.com/brucel/demo/media-queries.html">simple Media Queries example</a> to demonstrate. On a widescreen, the page has three columns. If you narrow the screen, you&#39;ll see the page change layout to a two-column design (I also change the font to reinforce the fact that different CSS is pulled in). Narrowing the screen further gives you a single-column  layout, and at a really thin width, all the content is hidden with <code>{display:none;}</code> and instead, a lovely picture  is displayed.</p>
<p>Several different queries are contained within one stylesheet:</p>
<pre><code>@media screen and (min-width: 800px) {
   @font-face {
     font-family: &quot;demand&quot;;
     src: url(&quot;demand.ttf&quot;) format(&quot;truetype&quot;);
   }
   h1 {font-family: demand, cursive}
} 


@media screen and (min-width: 480px) and (max-width: 800px) {
   body {font-family:&quot;Comic Sans MS&quot;, fantasy, cursive;}
/* [etc] */
} 


@media screen and (min-width: 400px) and (max-width: 480px) {
   body {font-family:&quot;Courier New&quot;, Courier, monospace;}
/* [etc] */
}  


@media screen and (max-width: 400px) {
   #main {background-image: url(bruce.png); position: absolute; top: 0; text-indent: -10000em; height: 500px; width: 100%;}
   h1, #sidebar, #footer, #pub {display: none;}
}</code></pre>
<p>Note the relationship to the viewport width here: when the page is loaded in a desktop browser, the viewport width is the width of the browser window; when it is loaded in Opera Mobile, the viewport width defaults to 980 pixels unless overridden by the viewport <code>meta</code> tag.</p>
<p>You can try this out for yourself by loading our <a href="/articles/view/opera-mobile-10-developers-introduction/mq-viewport.html">Media Queries + viewport example</a> in Opera Desktop and then on Opera Mobile, <a href="http://www.opera.com/developer/tools/#operamobile">Opera Mobile emulator</a> on your desktop, or Opera Mini. On desktop, we get a three column layout for browser widths wider than 800 pixels — the page gets a different layout when the browser is resized. In Opera Mobile running on a device with a physical screen that&#39;s less than 400 pixels wide (as an example, a Nokia 5800 in portrait mode has a width of 360 pixels), a viewport <code>meta</code> of <code>width=device-width</code> triggers the <code>@media screen and (max-width: 400px) { ... }</code> style rules, and the three column page turns into a single column page.</p>
<p>There are three important points to understand about Media Queries:</p>
<ol>
  <li>The technique does not test for individual devices or browsers, just capabilities, so is inherently future-proof</li>
  <li>There is no redirection to different pages going on; it&#39;s one page for all</li>
  <li>The Media Query is tested before any assets are downloaded. Therefore, no assets are downloaded if contained in a query is false, saving bandwidth and speeding up the display.</li>
</ol>
<p>You can view Andreas Bovens&#39; <a href="http://my.opera.com/ODIN/blog/screencast-mobile-web-development-techniques#comments">Mobile web development techniques screencast.</a></p>
<h3 id="hungry">Using Media Queries to turn off resource-hungry CSS</h3>
<p>You may find that some facets of your CSS renders slowly on a resource-constrained device, or uses lots of CPU and drains the battery. The culprits vary between browsers and devices, but animating <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/">CSS transforms and transitions</a> and <a href="http://dev.opera.com/articles/view/css3-border-background-boxshadow/">box-shadow</a> have been reported to be resource-hungry.</p>
<p>As CSS is purely stylistic, you may decide to turn such effects off.</p>
<h2 id="techniques">Other useful mobile-friendly techniques</h2>
<p>Whichever primary method you choose for your mobile sites, you can use some or all of the following techniques as appropriate to your content and functionality.</p>
<h3 id="combinefiles">Combine files and reduce requests across the network</h3>
<p>As mentioned before, the slowest part of any mobile device Web use is the network. Every image, CSS file, JavaScript file, CSS background image, etc. is called over the network and each of those HTTP requests takes an unpredictable amount of time. We&#39;ve mentioned CSS Sprites, but other useful techniques are as follows:</p>
<ul>
  <li>Combine as many scripts as you can into one file (e.g. <code>utilities.js</code>)</li>
  <li>Combine as many stylesheets as you can into one file</li>
  <li>Minify your <code>.js</code> and <code>.css</code> files</li>
  <li>Make sure your server uses <a href="http://en.wikipedia.org/wiki/Gzip">gzip</a> to compress all files it sends</li>
  </ul><li>Consider using <a href="http://en.wikipedia.org/wiki/Data_URI_scheme">Data URI</a>s for images and CSS background images. This provides a way to include data inline inside web pages. For example:
    </li></p>
    <pre><code>&lt;img src=&quot;data:image/png;base64,
   iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGP
   C/xhBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9YGARc5KB0XV+IA
   AAAddEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIFRoZSBHSU1Q72QlbgAAAF1J
   REFUGNO9zL0NglAAxPEfdLTs4BZM4DIO4C7OwQg2JoQ9LE1exdlYvBBeZ7jq
   ch9//q1uH4TLzw4d6+ErXMMcXuHWxId3KOETnnXXV6MJpcq2MLaI97CER3N0
   vr4MkhoXe0rZigAAAABJRU5ErkJggg==&quot; alt=&quot;Red dot&quot; /&gt;</code></pre>
    <p>This inserts a red dot onto the page, but no image is requested from the server because it&#39;s encoded in that string of letters and numbers. Ian Hickson has a <a href="http://software.hixie.ch/utilities/cgi/data/data">utility to encode Data URIs</a> (<a href="http://software.hixie.ch/utilities/cgi/data/data.pl">Utility source code</a>). This technique can bloat the file size, but that&#39;s often better than having to wait for the network to download the external image file.
  

<h3 id="svg">Use Scalable Vector Graphics for images</h3>
<p><acronym title="Scalable Vector Graphics"><a href="http://dev.opera.com/articles/view/svg-evolution-not-revolution/?page=2">SVG</a></acronym> is a technology that allows pictures to be described mathematically for the browser to draw via markup. So instead of a bitmapped image of a circle and a rectangle, for example, you describe the shapes:</p>
<pre><code>&lt;svg version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;
   xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;&gt;
   &lt;circle cx=&quot;100&quot; cy=&quot;100&quot; r=&quot;30&quot; fill=&quot;blue&quot; stroke=&quot;red&quot;/&gt;
   &lt;rect x=&quot;10&quot; y=&quot;10&quot; width=&quot;80&quot; height=&quot;40&quot; fill=&quot;yellow&quot; stroke=&quot;black&quot;/&gt;
&lt;/svg&gt;</code></pre>
<p>The browser then draws it like so:</p>
<img src="http://devfiles.myopera.com/articles/22/shapes.svg" alt="blur circle and yellow box" />
<p>The major advantage with this is that you can zoom in as a far as you like, and the image will never pixellate, because it&#39;s redrawn by the browser every time — so it will look as sharp on a small screen as on a widescreen web-enabled television.</p>
<p>The size of the SVG file will generally be a fraction of the equivalent bitmapped image. In HTML5, you can just embed your SVG code into your markup, thereby saving an network request to grab that file.</p>
<p>SVG files also work with CSS/Media Queries — here is a fragment of an SVG file that draws a circle and fills it with different colours according to its width (see <a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/update/svgscalebasic.html">SVG/Media Queries coloured circle demo</a>):</p>
<pre><code>@media screen and (max-width: 350px) {
   #circle {fill:  #879758;}
}
@media screen and (max-width: 200px) {
   #circle {fill: #3b9557;}
}</code></pre>
<p>This technique can be used to simplify logos at smaller sizes. In the <a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/update/svgscalelogo.html">SVG/Media Queries simplified logo demo</a>, the logo on the left uses Media Queries to remove the spiral when the logo is shrunk, and then remove the outer circle completely at very small sizes.</p>
<pre><code>@media screen and (max-width: 256px) {
   #spiral {display: none;}
}

@media screen and (max-width: 16px) {
   #circle1, #circle2 {display: none;}
}</code></pre>
<p>The logic is contained within the SVG file itself, so once written it can be included anywhere and requires no scripting or changes to the pages CSS. (<a href="http://my.opera.com/ODIN/blog/2009/10/12/how-media-queries-allow-you-to-optimize-svg-icons-for-several-sizes">Read more about this technique</a>.)</p>
<h3 id="script">Put <code>script</code> elements as far down as possible in the source</h3>
<p>Browsers pause when downloading <code>script</code> elements contained in HTML files. Therefore, put those <code>script</code> elements as far down the source as possible. The reason for this is a psychological one; if your screen is full of content to read (contained before the <code>script</code> element in the source order) the site will feel faster, as the user can read the content while waiting for any interactivity to download.</p>
<p>(HTML5 specifies how browsers can download and execute scripts without blocking, using <a href="http://dev.w3.org/html5/spec/scripting-1.html#attr-script-async"><code>defer</code> and <code>async</code> attributes</a> but support is incomplete and specification might change.)</p>
<h3 id="imagedimensions">State the dimensions of images in the HTML</h3>
<p>Always give the dimensions of any images in your HTML, so the browser will download textual content first and leave the correct space for the images while they download (which will take more time as images are significantly larger files than textual content). When they are downloaded, they will pop into the blank space left for them.</p>
<p>If you don&#39;t define the image size, the browser leaves no space. When the images eventually arrives across the network, the browser must then reflow all the text to make room for them. If a site visitor was reading something only to then have it jumped around and scrolled off the screen to make space for a picture, it would probably frustrate or annoy him or her. Also, each redraw of the screen uses a lot of processor cycles and therefore drains the battery faster.</p>
<p>This works well in sites that don&#39;t have mobile optimisation techniques. If later you decide to use Media Queries to make your site responsive, a common trick is to override the HTML dimension attributes and stop images spilling out of their container by adding <code>img {max-width:100%;}</code> to your stylesheet. This, however, only over-rides the HTML width attribute, and keeps the height attribute and thus changes the image aspect ratio. A more robust technique is</p>
<pre><code>img {max-width:100%;
height:auto; /* preserve aspect ratio */
}</code></pre>
<h3 id="html5">Familiarise yourself with HTML5</h3>
<p>HTML5 has many aspects that can make developing for devices easier. For example, you can store information inside the browser using <a href="http://dev.opera.com/articles/view/web-storage">local or session storage</a> rather than relying on cookies.</p>
<p>HTML5 forms provide native in-browser validation of certain generic form types; you can test whether an element is a number in certain range, or conforms to a certain regex, or whether a required field is completed, etc.,  without using JavaScript. Try this <a href="http://people.opera.com/brucel/demo/html5-forms-demo.html">HTML5 forms demo</a> in Opera to see it in action. Additionally, some mobile browsers that have their own built-in keyboards (like WebKit on iPhone) give a customised keyboard depending on whether the form type is set to email, number, telephone, etc.</p>
<h3>Use progressive enhancement</h3>
<p>You&#39;re probably using a progressive ehancement methodology in your work anyway. In a mobile context, this might be called &quot;mobile-first&quot;.
<p>Do not assume scripting support or Ajax capabilities. For example, Opera Mini renders pages on the server and sends a snapshot of the page to the device, so the page won&#39;t change until the user does something on that and there is no way for scripts to run in the background. The user must do something to make Mini talk to the server in order for JavaScript to be unpaused. As a result, you cannot expect things like JavaScript animations or timed Ajax updates to work in the background as they would on a desktop browser. There&#39;s much more information in our article <a href="http://dev.opera.com/articles/view/opera-mini-and-javascript/">Opera Mini and JavaScript</a>.</p>
<p>Similarly, you should make no assumptions about animation capabilities (<code>canvas</code>, SVG animations, animated GIFs), fonts, colours and the like. Opera Mini development is docmented in-depth in the companion article <a href="http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/">Opera Mini: web content authoring guidelines</a>.</p>
<h2 id="geo">Geolocation</h2>
<p>Geolocation isn&#39;t just on mobile phones (it&#39;s in the modern desktop browsers, too) but as most high-end phones have a GPS facility and are used when on the move, there is a lot of potential to <a href="http://dev.opera.com/articles/view/how-to-use-the-w3c-geolocation-api/">use  the W3C Geolocation API</a> for useful applications.</p>
<p>But it&#39;s important to ensure that Geolocation is added as an enhancement rather than as a prerequisite; a user may choose not to share his location with the site for privacy reasons, or is running low on battery (GPS can drain batteries quickly), or is in an area where mapping is rudimentary so accuracy is low.</p>
<p>A good example of such progressive enhancement is <a href="http://owlsnearyou.com/">owlsnearyou.com</a> that lists sightings of the bird in your area. If you visit with a geolocation-enabled browser and confirm you wish to share your location, the API will pre-fill a search box with what it believes your current location is. But if that&#39;s not correct (or maybe you&#39;re in London now but want to check owl sightings in Scotland), you can simply type a new destination into the search.</p>
<p> If your browser isn&#39;t geo-enabled, or you deny permission, the search form is blank so you can type in a place-name or postcode.</p>
<h2 id="testing">Testing, testing, one two three…</h2>
<p>To round off this article, I will give you tips for easier testing of websites on Mobile browsers.</p>
<h3 id="testing-opera">Testing on Opera Mobile and Opera Mini</h3>
<p><a href="http://www.opera.com/developer/tools/#operamobile">Opera Mobile emulator</a> can be <a href="http://dev.opera.com/articles/view/introducing-opera-mobile-10-for-desktop/">installed on your desktop</a> and you can therefore use it to test any files that are on your local machine or network before they go live. It&#39;s the full product — the same codebase — so you can be certain it&#39;s accurate. Opera Mobile emulator allows you to change the UA string to mimic several different popular browsers.</p>
<p>If you don&#39;t have Opera Mini on your phone (and it&#39;s available for over 3000 different handsets, so there should be a version for you!) you can test your site using the web-based <a href="http://www.opera.com/mobile/demo/">Opera Mini Emulator</a>. Note that because of the nature of the product, pages viewed in Opera Mini must go through Opera&#39;s servers, so the pages you test must be on the Web somewhere (although you could put them behind a password so that no-one else can see your pre-production pages).</p>
<h3 id="testing-other">Testing on other handsets and browsers</h3>
<p>We&#39;ve teamed up with <a href="http://www.perfectomobile.com/portal/cms/opera.xhtml?key=OP631R89YL2">Perfecto Mobile</a> who have a service that allows you to test on different handsets remotely. Opera users can sign up for <a href="http://www.perfectomobile.com/portal/cms/opera.xhtml?key=OP631R89YL2">seven free hours of testing</a>. Additionally, companies like Apple and BlackBerry offer emulators for testing on their products.</p>
<h3 id="debugging">Debugging devices with Opera Dragonfly</h3>
<p>As with earlier Opera Mobile releases, <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> allows you to debug web pages being displayed on your mobile phone remotely from your desktop. To debug pages in Opera Mobile, open Opera Dragonfly in Opera Desktop (<em>Page/View &gt; Developer Tools &gt; Opera Dragonfly</em>) and follow the instructions in our <a href="http://my.opera.com/ODIN/blog/opera-mobile-10-and-its-remote-debugging-party-trick">remote debugging article</a> (with <a href="http://www.youtube.com/watch?v=sZt-k93qLbg&amp;feature=player_embedded">video (YouTube)</a> also available.)</p>
<h2 id="summary">Summary</h2>
<p>We hope you have found our mobile optimization guide useful. We have covered three different strategies for making your sites work better on mobile, numerous optimization tips and tricks, and debugging and testing advice.</p>
<h2 id="resources">Resources</h2>
<ul>
<li><a href="http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/">Responsive Web Design: What It Is and How To Use It</a> (smashingmag.com)</li>
<li><a href="http://www.mobilexweb.com/emulators">Mobile Emulators &amp; Simulators: The Ultimate Guide</a> (www.mobilexweb.com)</li>
</ul>
</p></p>
