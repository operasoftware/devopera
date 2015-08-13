---
title: 'Responsive Images: What’s the Problem, and How Do We Fix It?'
authors:
- matt-wilcox
intro: 'Responsive images is a surprisingly complicated topic, and one that’s been steadily gaining attention over the last year as more developers discover they need them and then discover there’s no good solution yet. This article aims to give an overview of the problem itself, and show the different proposals in the works to address it.'
license: cc-by-3.0
---
<h2>Introduction</h2>

<p>Responsive images is a surprisingly complicated topic, and one that's been steadily gaining attention over the last year as more developers discover they need them and then discover there's no good solution yet. This article aims to give an overview of the problem itself, and show the different proposals in the works to address it.</p>

<p>So, grab a brew, buckle up, and set your brain to <q>concentrate</q> — there's only
so much condensing of a year's effort and thought an author can do...</p>

<h2>Responsive image context</h2>

<p>First of all we need to establish some context: what is it we want to do, and why? Responsive images are a small part of the responsive design methodology, which aims to adapt a website so it works optimally within known environmental constraints. Those constraints include:</p>

<ul>
<li>Display dimensions</li>
<li>Display quality (pixel density, colour capability)</li>
<li>Connectivity (network conditions)</li>
<li>Input types (touch, mouse, keyboard)</li>
</ul>

<p>By adapting a design to these conditions we aim to provide the best clarity of content, ease of use, load times, and device performance for any given user. Practically this means a designer gives consideration to each constraint and in response alters the design by adjusting some aspect of it. Examples include:</p>

<ul>
<li>Adjusting multi-column layouts to single columns to avoid columns that are too narrow</li>
<li>Changing font sizes to maintain legibility on different screens</li>
<li>Loading smaller assets for devices that do not require large assets</li>
</ul>

<p>How this is done is managed differently in the three different languages of the web.</p>

<p>CSS controls the presentational aspects of web pages and is equipped with <a href="http://www.w3.org/TR/css3-mediaqueries/">Media Queries</a> to act as environment sensors. We can then write rules to adjust the visual design according to the results of each environment test.</p>

<p>JavaScript controls the behaviour of a page and has a number of methods available to detect the environment properties we're interested in adapting to. By reacting to the same conditions as the CSS we can adjust the behaviour at each breakpoint, for example turning long navigation menus into compact drop-downs and adjusting multi-slide carousels into single slide carousels.</p>

<p>HTML offers no mechanism to sense environmental conditions, and no method of adjusting to them. Traditionally this has not been a problem as a fundamental consideration of any web page is that the design should never change the core content of the page. Any visitor should obtain the same understanding of the content as any other visitor, regardless of the device they use.</p>

<h3>The problem with responsive images</h3>

<p>This leads us on to the problem with responsive images. With responsive designs we need to adjust some <code>&lt;img&gt;</code> resources to accommodate the design changes that differing environments call for. For example:</p>

<ol>
<li>We can't expect that an image intended for a 27" display will be suitable for a 3.5" display — we'll need to provide a different image that has the same semantic meaning. A good example is a photograph of an author on a biography page; at large sizes we can use a photo of the author standing in a book store, surrounded by their books, and not lose the detail of who that author is. For a small screen, the author would become unrecognisable, so we'd want to switch to a <q>drivers licence</q> type head shot in order to keep the same meaning for the user.</li>
<li>If a small device is only 480px at its maximum dimension, there is a tremendous amount of wasted bandwidth, device memory, and processing involved in delivering the oversized 27" version and having the device scale the image down to fit on its display.</li>
</ol>

<p>To adapt the <code>&lt;img&gt;</code>s in such cases, we need to make changes to the mark-up in as well as the CSS and JS, but there is currently no native way to do this. There are a number of <a href="http://css-tricks.com/which-responsive-images-solution-should-you-use/">hacks around the problem</a> (I've made a popular one myself — <a href="http://adaptive-images.com">Adaptive Images</a>), but each potential solution has its share of drawbacks and no existing solution is right for all occasions. The community is well aware of this, and realised a <q>perfect hack</q>could never be made with the tools that exist at the moment. So over six months ago members of the community began looking to the future and a way of introducing a native way of addressing the issue.</p>

<h3>A designers methodology</h3>

<p>Before we look at the potential solutions, we need to build up a picture of the problems we are dealing with. First of all, it is worth outlining a 'best practice' process for creating a responsive
design, because it has an impact on our problems and how they might be solved:</p>

<ol>
<li>We have all of the content for the page we are designing up-front, and we'll start at the smallest layout. This often calls for a pure typography, minimal graphic, one column design.</li>
<li>We increase the browser width until the previous design begins to break (line lengths too long, etc). This marks a new breakpoint, and a new round of design adjustments.</li>
<li>We adjust the layout, font sizes, CSS background images, JavaScript behaviour, etc. to optimise the design at this new breakpoint size.</li>
<li>We go back to step 2 and continue repeating steps until we reach our maximum width. It's important to note that the breakpoints are design breakpoints for the page overall. If individual parts of content need adapting that's done with 'minor breakpoints' within the major breakpoint.</li>
</ol>

<h3>The limits of our tools</h3>

<p>Now let's look in more detail at the limitation of the current toolset we have to build web sites.</p>

<p>You will notice the methodology above is all about dealing with browser size. We can do that, but we are somewhat stuck on the bandwidth question. This is a serious issue, but we have to infer information about connectivity; we have no capability to measure it directly. Instead, we assume a small screen means low bandwidth, and a big screen means high bandwidth. It's a poor assumption, but all we have to work with, and it works in the majority of cases (for now).</p>

<p>CSS is not likely to get <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-May/035967.html">bandwidth media queries</a> as there is no practical way for CSS to do what we need in this regard — they simply can't work as we'd like. <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-May/036108.html">JavaScript is getting a Network API but the current implementations are effectively useless</a>.</p>

<p>And HTML of course has nothing at all built in to adapt to anything.</p>

<p>Our tools are not only inadequate in terms of features, but they are not built to work with our methodology either; the content adaptations (CSS, JS) are dependent on an identical result of the same test — the width of the browser. And it is these design breakpoints that dictate when the CSS/JS/<code>&lt;img&gt;</code>s should change. But our technologies offer no central sensor mechanism that each of our languages can inherit from: there is no way to set breakpoints once and have disparate languages react to them. Instead we have to write specific tests in each language. We test for the same thing multiple times in CSS, and again in JS. That's not optimal in terms of performance, or for authors to work with and manage.</p>

<h3>Web content in the real world</h3>

<p>There are other considerations to take into account before we consider what an ideal solution to responsive images looks like, namely how a website is used once it's built.</p>

<p>It's easy to forget that the vast bulk of web content is not made by web designers building pages and populating content. It's done by website owners, and that means people who are not web experts, working inside of some CMS, and adding content to pages which are actually instances of a template that web designers have built. The huge majority of web pages are <q>dumb</q>in that no-one with expertise in HTML/CSS/JS laid a finger on them directly. That means any solution we come up with must be simple to automate, because most people using it will never actually code directly.</p>

<p>Additionally, real world websites have <q>legacy</q>content, stuff that was there from the previous design. That content is simply re-imported into new templates that inherit the new designs. This has knock-on effects for us thinking about responsive images — how can we make responsive images that work with legacy content? How can we make sure that any mark-up we write now does not hinder us when it has become legacy content? We have a duty to come up with a solution that is future friendly and not just for the here-and-now.</p>

<h3>Process improvements</h3>

<p>For responsive design in general it would be ideal if we could perform our environment tests in one place and re-use the results throughout our languages - rather than declaring the tests repeatedly whenever we need to create an element that adapts. This would benefit us in a couple of ways:</p>

<ul>
<li>It is programatically more efficient to reference a variable value than to
perform multiple tests.</li>
<li>It'd be much easier to adjust a design or add a new breakpoint if it only
needed to be done in one place.</li>
</ul>

<p>Right now, this is not possible, although there is a <a href="http://adactio.com/journal/5429/">clever hack to achieve something similar for CSS and JS</a>.</p>

<p>It would also be ideal if we could avoid putting any presentationally based properties or tests directly into HTML markup. The fact is, when a redesign happens the markup will still be there, and any presentational aspects will no longer apply to the design correctly, necessitating editing the mark-up. But not polluting our HTML with design properties is an old and important idea we do not want to throw away.</p>

<h3>Pre-fetch; a spanner in the works</h3>

<p>Now we come to the main pain point of responsive images! <em>All of this</em> would be trivial to fix reliably (although still hack-ish) with JavaScript, if only it wasn't for <strong>pre-fetch</strong>. Pre-fetch is a relatively new behaviour that browsers employ to attempt to load a page faster. Before the HTML has finished loading, a look-ahead-pre-parser scans for any <code>&lt;img&gt;</code> elements, and as soon as it finds one it immediately asks for the resource it contains. This happens before anything else on the page can do anything, including JavaScript. It didn't used to be this way, and indeed there was a <a href="https://github.com/filamentgroup/Responsive-Images">solution in use by Filament Group</a> that worked — right up until point where the browser vendors turned to pre-fetch. And then <a href="http://www.alistapart.com/articles/responsive-images-how-they-almost-worked-and-what-we-need/">it didn't work at all</a>. The ever brilliant Jason Grigsby has a long write-up about why <a href="http://blog.cloudfour.com/the-real-conflict-behind-picture-and-srcset/">pre-fetch is the real problem</a> and it's well worth reading in it's entirety, but the take-away is this:</p>

<p><strong>It seems implausible that there can ever be a solution to adaptive images that can work alongside pre-fetch unless vendors make pre-fetch smarter — which would make it slower, which negates the advantage of pre-fetch. The two technologies are both trying to do the same job (ensure a page loads as fast as possible) but they are seemingly mutually exclusive.</strong></p>

<h2>Finding a reliable standards solution</h2>

<p>So given everything above, what are the options for a standards based solution?</p>

<h3>Defining content, not context</h3>

<p>In the case of <code>&lt;img&gt;</code> specifically, the ideal process would be to let the browser itself select an appropriate source file to download based on the current connection speed, device DPI, and size of the area into which an image must fit. This is preferable to relying on the author writing appropriate tests and defining appropriate <code>src</code>s to match.</p>

<p>If we could tell the browser <q>here is a list of assets applicable for this image, and here are their properties</q>, listing file-size and dimensions, the browser would then be able to select which image is best. For example, if the browser is in a position to know the image is inside a container which is 600px wide, the connection is 5mbps and that the device has a 300dpi screen, it could then use its own heuristics and user-preferences to decide which available version of the image it should pull from the server. The benefits of this are many:</p>

<ul>
<li>It's simpler than having to author specific tests for all combinations of environment a user may experience (narrow screen but high dpi, narrow screen but low dpi, narrow screen but high bandwidth, narrow screen but low bandwidth, wider screen but... etc).</li>
<li>There are no designed breakpoints to manage.</li>
<li>Because it's not based on any design breakpoint it's future-friendly; it'll always work with any redesigns.</li>
<li>User preferences can be taken into account (e.g., always load low-res images).</li>
</ul>

<p>Unfortunately, this is not likely to happen without considerable effort, if at all:</p>

<p>First, our technology does not work that way. In order for that approach to work the markup needs to know what the layout is, for example how big is the space in which the image is sitting? But the browser can't work that out until the CSS has been applied, and that CSS may well rely on the image itself to force the width of the container. It's a chicken and egg situation at that point.</p>

<p>Second, even assuming the container has an explicit size applied via CSS, that CSS is normally in an external file, loaded after the <code>&lt;img&gt;</code> has been found by the browser. That leaves the browser sitting around with an <code>&lt;img&gt;</code> tag that it can't fire a request for because it must:</p>

<ol>
<li>Wait for the CSS to be applied to the page so that it can...</li>
<li>...find out how big the space is that the image will fit into, so it can...</li>
<li>...figure out which of the available resources it should ask for.</li>
</ol>

<p>That's a lot of waiting around, and browser vendors aren't keen on anything that causes waiting — to the extent that Google have made movements towards replacing HTTP itself to help prevent such things (<a href="http://en.wikipedia.org/wiki/SPDY">see SPDY</a>).</p>

<p>Third, browsers do not currently detect bandwidth and it's looking like meaningful and useful bandwidth detection is some way off, if it ever comes (we all hope it does).</p>

<p>Let's now have a look at the proposed solutions we've had so far.</p>

<h2><code>&lt;picture&gt;</code></h2>

<p>Putting aside the politics of the situation (other articles can be read for
information <a href="http://www.w3.org/community/respimg/2012/05/11/respimg-proposal/">on</a> <a href="http://timkadlec.com/2012/05/wtfwg/">that</a> <a href="http://www.alistapart.com/articles/responsive-images-and-web-standards-at-the-turning-point/">debacle</a>), one of the earliest proposed solutions was a
new element: <a href="http://wiki.whatwg.org/wiki/Adaptive_images">the <code>&lt;picture&gt;</code> element</a>. A new element was thought to be required because it had been understood that altering <code>&lt;img&gt;</code> itself was off the cards.</p>

<p>After months of debate, research, community engagement, and looking into other possibilities, the <a href="http://www.w3.org/community/respimg/">Responsive Images Community Group</a> decided <code>&lt;picture&gt;</code> was the most suitable approach and presented it to the WHATWG. <code>&lt;picture&gt;</code> follows the syntax of the existing HTML <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> elements, and uses media queries to handle the detection and assignment of which resource to load. Not only is the mark-up familiar, so is the control mechanism; it's just standard CSS. This makes <code>&lt;picture&gt;</code> instantly easy to understand and work with from a web designers perspective.</p>

<p>It also means that <code>&lt;picture&gt;</code> can adapt to all the same things the design itself does with the media queries in the CSS files. <code>&lt;picture&gt;</code> is designed to be backward compatible, loading the default <code>&lt;img&gt;</code> in non-supporting browsers. An example of <code>&lt;picture&gt;</code> is as follows:</p>

<pre><code>&lt;picture alt="a picture of something"&gt;
&lt;!-- Matches by default: --&gt;
&lt;source src="mobile.jpg" /&gt;
&lt;source src="medium.jpg" media="min-width: 600px" /&gt;
&lt;source src="fullsize.jpg" media="min-width: 900px" /&gt;
&lt;img src="mobile.jpg" /&gt;&lt;!-- fallback for non-supporting browsers --&gt;
&lt;/picture&gt;</code></pre>

<h3>Problems with <code>&lt;picture&gt;</code></h3>

<p>There are considerable downsides to this solution:</p>

<ul>
<li>All that code for a single instance of an image is rather verbose.</li>
<li>It's verbose multiple times because for every image you'd repeat the same design breakpoint tests.</li>
<li>Because <code>&lt;picture&gt;</code>'s sensors are based on CSS, and because CSS can't support bandwidth detection, <code>&lt;picture&gt;</code> can not adapt to bandwidth.</li>
<li>It bakes the sensor tests into the mark-up, that's poor for performance, tedious to manage, and is future unfriendly — it will cause problems come any redesigns that don't share the same breakpoints as the current design.</li>
</ul>

<h2><code>srcset</code></h2>

<p><code>srcset</code> is a proposed property that can be added to an <code>&lt;img/&gt;</code> element, specifying alternate <code>src</code> resources that may be applicable. <a href="http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035746.html"><code>srcset</code> had a bad reception when it was first suggested</a>, due to some <a href="http://www.w3.org/community/respimg/2012/05/14/more-on-the-srcset-proposal/">unclear communication and unclear specification</a>. It could actually do many of the things <code>&lt;picture&gt;</code> does, but in a much more concise syntax — mainly because it was developed by people who were still thinking altering <code>&lt;img&gt;</code> itself was possible. The suggestion for <code>srcset</code> is as follows:</p>

<pre><code>&lt;img alt="image description" src="/path/to/fallbackimage.png" srcset="/
path/to/image.png 800w, /path/to/otherimage.png 600w"&gt;</code></pre>

<p>Here the <code>src</code> would be used by browsers that don't support <code>srcset</code>, and <code>srcset</code> itself is defining two additional image resources that can be applied, along with rules for when each should be applied.</p>

<p class="note">The main confusion here is that <code>srcset</code> brings together a few things into one property, and those <code>srcset</code> conditions (e.g.,
<code>800w</code>) refer to the viewport width - not the width of the image resources. That's counter intuitive; attributes usually define properties of the element or linked resource; <code>srcset</code>'s does neither. <code>&lt;picture&gt;</code> has a similar issue, but because it uses media queries we're already familiar with the fact <code>min-width</code> means <q>of the
viewport</q> and wouldn't make sense as a property of the image itself.</p>

<p>The benefit here is mainly that it's much shorter code to do a similar job to <code>&lt;picture&gt;</code>. It's also possible that it could get around the image-prefetch issue — but only if browser vendors re-engineered their pre-parser with <code>srcset</code> in mind.</p>

<h3>Problems with <code>srcset</code></h3>

<p>The drawbacks of <code>srcset</code> are:</p>

<ul>
<li>It's hard to understand as it uses unfamiliar syntax.</li>
<li>The solution is stuck with pixels for measuring viewport width, unless further refinement is made — and we don't often use pixel dimensions in responsive designs. This may be impossible to solve; how can the HTML know the size of an EM or % when the CSS has not loaded yet?</li>
<li>It's not clear that the syntax refers to the <code>min-width</code> or <code>max-width</code>.</li>
<li>It doesn't offer all the same sensors as a media query does.</li>
<li>It still bakes the sensing into the mark-up as does <code>&lt;picture&gt;</code>, with all the same problems because of it.</li>
</ul>

<h2>A hybrid of <code>&lt;picture&gt;</code> and <code>srcset</code></h2>

<p>Later, Opera's rep on the CSS Working Group — Florian Rivoal — suggested a <a href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-May/036160.html">hybrid</a> of <code>&lt;picture&gt;</code> and <code>srcset</code>:</p>

<pre><code>&lt;picture&gt;
  &lt;source media="(orientation:landscape)" srcset="long.jpg 1x, long2.jpg
2x"&gt;
  &lt;source media="(orientation:portrait)" srcset="tall.jpg 1x, tall2.jpg 2x"&gt;
  &lt;img src="fallback.jpg" /&gt;
&lt;/picture&gt;</code></pre>

<p>This blend addresses a number of subtle issues with the other two approaches. The <code>srcset</code> element here is restricted to telling the browser about images available for devices at differing pixel densities. This allows the browser to be smart about which it should download after it's matched a media query. For example, a browser could not only get the raw information about pixel density, but it could infer a rough guess to file-sizes. Should future innovation in browsers make bandwidth measures possible then the browser can figure out which is more appropriate to load.</p>

<h3>Disadvantages of the hybrid solution</h3>

<p>This proposal still has some disadvantages:</p>

<ul>
<li>It's verbose.</li>
<li>It has two attributes that could easily be confused as doing the same job.</li>
<li>It bakes design properties into the mark-up.</li>
</ul>


<h2><code>&lt;meta&gt;</code> variables</h2>

<p>To address the problem of <code>&lt;picture&gt;</code>'s repetition and verbosity, and to enable centralisation of breakpoint management between all languages, <a href="http://www.w3.org/community/respimg/2012/02/21/adaption-mechanisms-efficiency-of-authoring/">the idea of <code>&lt;meta&gt;</code> variables was put forward</a>. Later a revised version along similar lines emerged when Denis LeBlanc struck on a <a href="http://www.w3.org/community/respimg/2012/05/13/an-alternative-proposition-to-and-srcset-with-wider-scope/">smarter implementation of the same meta concept</a>. This looks like so:</p>

<pre><code>&lt;head&gt;
  &lt;meta name='case' data='breakpoint1' media='min-width:350px' /&gt;
  &lt;meta name='case' data='breakpoint2' media='min-width:1000px' /&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;img src='/content/images/{case}/photo.jpg' alt='' /&gt;
&lt;/body&gt;</code></pre>

<p>This has a number of advantages:</p>

<ul>
<li>We have a single <code>&lt;img&gt;</code> element with no custom properties, which will adapt to any number of breakpoints.</li>
<li>The mark-up does not include design properties, making it much more future-friendly.</li>
<li>Depending on the syntax used to reference the meta variable inside <code>&lt;img&gt;</code> the solution could be backward compatible.</li>
<li>Because <code>&lt;head&gt;</code> is loaded prior to any other HTML the pre-parser problem can be fixed, <code>&lt;meta&gt;</code> variables will have been loaded before any <code>&lt;img&gt;</code> is seen.</li>
<li>Because <code>&lt;meta&gt;</code> variables can be loaded before any external resource is requested, it's possible to have CSS and JS inspect them reliably — therefore meta variables offer a way to centralise breakpoints.</li>
</ul>

<h3>Meta disadvantages</h3>

<p>The <code>&lt;meta&gt;</code> tag solution also has some disadvantages:</p>

<ul>
<li>It requires access to the <code>&lt;head&gt;</code>, meaning this technique is only useful
for site-wide or template-specific breakpoints, not special-case
individual images.</li>
<li>It would require significant work for browser vendors, as URI
resolution would now have to include looking up variables too.</li>
<li>It restricts image storage to pre-configured paths.</li>
</ul>

<h2>A new image format</h2>

<p>With the mark-up approach proving to be so hard, another suggestion was
put forward: <a href="http://blog.yoav.ws/2012/05/Responsive-image-format">a new image format with built-in mechanisms to deal with the issue</a>. A good candidate for this is our old friend JPG, in it's progressive incarnation, though it would need some editing on the browser side of things to work as intended. Any solution involving a new format would have to go through the following steps:</p>

<ul>
<li>The author will compress the progressive JPEG with multiple scans.</li>
<li>The browser would download an initial buffer of each image (10-20K), using the <code>Range</code> request header.</li>
<li>This initial buffer will contain the image's dimensions and (optionally) a <q>scan info</q>JPEG comment that will state the byte breakpoints of each one of the JPEG scans (slightly similar to the MP4 video format meta data).</li>
<li>If the image is not a progressive JPEG, the browser will download the
rest of the image's byte range.</li>
<li>When the scan info comment is present, the browser will download only the byte range that it actually needs, as soon as it knows the image's presentation size.</li>
<li>When the scan info comment is not present, the browser can rely on dimension based heuristics and the <code>Content-Length</code> header to try and guess how many bytes it needs to really download.</li>
</ul>

<p>(Solution steps courtesy of <a href="http://blog.yoav.ws/">Yoav Weiss</a>).</p>

<p>The big advantage of this approach is that it side-steps any need to write custom mark-up, which removes a lot of problems with the previously mentioned solutions.</p>

<h3>Image format disadvantages</h3>

<p>The disadvantages are substantial:</p>

<ul>
<li>Getting new file-format or enhanced format support is traditionally arduous and slow (we waited years to be able to use PNGs with 8-bit alpha).</li>
<li>Those images with their custom byte breakpoints will have to be created somehow — either via some CMS system or by hand. That seems non-trivial to do.</li>
</ul>

<h2>New headers</h2>

<p>Another potential solution is to take all the management of images to the server, standardising the <a href="http://adaptive-images.com">Adaptive Images</a> method (or similar) by allowing browsers to <a href="http://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-February/034648.html">send new headers to the server</a>. The problem with any current server-side solution that does not use user agent sniffing (which we don't want to do) is reliance on cookies to change the resource loaded via a single URI. This has a knock-on effect of meaning the technique cannot work with proxies or CDNs (neither of which like cookies). But the advantages of server-side content negotiation are numerous:

<ul>
<li>It requires little to no effort to support from a CMS user or author.</li>
<li>It is future friendly.</li>
<li>It is backward compatible.</li>
<li>Depending on specific implementation it can generate its own down-sampled images, and/or address the <q>different image at different sizes</q>problem.</li>
</ul>

<p>HTTP is not a great protocol for this kind of thing due to the increased latency additional headers demand, but SPDY (and/or HTTP2) is likely to deal with it a lot more efficiently. SPDY can GZIP headers and a number of other clever tricks that reduce the number of requests.</p>

<p>A process for this to happen might go something like:</p>

<ol>
<li>Browser asks for <code>spdy://website.com</code></li>
<li>Server responds with content and adds a <q>I request your bandwidth & device screen size</q> header</li>
<li>Browser then appends these headers to all future requests on the domain (perhaps qualified via file-type).</li>
<li>Server can push any amended content from point 2 over SPDY without another request.</li>
<li>Server processing then handles which image to send from any URI request in a similar manner to Adaptive Images.</li>
</ol>

<p>There are potential gotchas about this when thinking about proxies and content delivery networks. However should headers such as this be standardised it's possible proxies and CDNs could be built to deal with them - some CDNs are already smarter than dumb file-caches. And even if not, the majority of sites on the web aren't behemoths running on CDNs; they're on shared servers — and they'd benefit hugely from this technique.</p>

<h2>Conclusion</h2>

<p>As yet, there is no single perfect method that can answer all of the requirements of adapting a simple <code>&lt;img&gt;</code> to simple constraints like bandwidth or device size. There are no hacks that do a perfect job, and there is no clear way of standardising any such method that does not have its own problems. It's possible that a single grand solution will prove impossible, and we'll have to use a few techniques to achieve the things we want. It's possible that the only true solution will be patience while the <q>constrained bandwidth and poor device capabilities</q> problems slowly fade away — but while that may only be a few years away in privileged countries, the majority of the world will take a lot longer.</p>

<p>If you have any ideas, your feedback and effort would be greatly appreciated either at the <a href="http://www.whatwg.org/mailing-list">WHAT-WG mailing list</a>, or the <a href="http://www.w3.org/community/respimg/">Responsive Images Community Group</a>.</p>
