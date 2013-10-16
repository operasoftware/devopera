Title: Mobile 1: Introduction to the mobile web
----
Date: 2009-06-23 15:04:53
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<h2>Introduction</h2>
<p>The Opera Web Standards Curriculum is about advocating best practices for the web and providing complete coverage of all the skills you need to create modern Web sites, in doing so making the Web a better place for all of us to work and browse. This mini series expands the core web standards curriculum articles, look at all the skills and concepts you should take on board to help optimize your Web sites so that they run successfully on mobile (and other alternative) devices. I’ll start by taking a look at the subject area in general and special considerations for marking up and running pages on mobile devices, then move on to styling, scripting and testing as they relate to <strong>mobile web development</strong>.</p> 
<p>The structure of this article is as follows:</p>
<ul>
<li><a href="#definition">A definition of the mobile web</a></li>
<li><a href="#challenges">challenges associated with the mobile web</a></li>
<li><a href="#limitations">Mobile limitations</a>
<ul>
  <li><a href="#screen">Screen size/resolution</a></li>
  <li><a href="#input">Input mechanisms</a></li>
  <li><a href="#processing">Processing power and available memory</a></li>
  <li><a href="#fontscolours">Available fonts and colours</a></li>
  <li><a href="#webstandards">Web standards support</a></li>
</ul>
</li>
<li><a href="#advantages">Mobile advantages</a>
<ul>
  <li><a href="#movingabout">Mobile means moving about!</a></li>
  <li><a href="#hardwareadvantages">Cameras, phones and other hardware features</a></li>
</ul>
</li>
<li><a href="#mobilewebtechnologies">Mobile web technologies</a>
<ul>
  <li><a href="#wml">WML</a></li>
  <li><a href="#chtml">Compact HTML</a></li>
  <li><a href="#xhtmlmp">XHTML mobile profile</a></li>
  <li><a href="#xhtml">XHTML</a></li>
</ul>
</li>
<li><a href="#csssemantic">CSS and semantic markup</a>
<ul>
  <li><a href="#imagereplacement">Image replacement</a></li>
  <li><a href="#csscolourvalues">CSS colour values</a></li>
</ul>
</li>
<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>
</ul>
<h2 id="definition">A definition of the mobile web</h2>
<p><q>The mobile web</q> is one of those over-used terms that has lost all of its meaning, or worse yet, continues to confuse and perpetuate the <q>mobile</q> myth. If you were to ask web developers to define what <q>the mobile web</q> means, you would get as many different answers as people you asked. It is important then, to define what I mean by <q>the mobile web</q> and how you should be discussing and thinking about it.</p>
<p class="note">The W3C has been pushing the idea of <q>One Web</q>. <q>[This] means making, as far as is reasonable, the same information and services available to users irrespective of the device they are using. However, it does not mean that exactly the same information is available in exactly the same representation across all devices. The context of mobile use, device capability variations, bandwidth issues and mobile network capabilities all affect the representation. Furthermore, some services and information are more suitable for and targeted at particular user contexts.</q> Source: the <a href="http://www.w3.org/TR/mobile-bp/#OneWeb">W3C Mobile best practices one web</a> page.</p>
<p>Having a <q>second web</q> just for mobile devices is contrary to the W3C’s vision and is not what we mean by <q>mobile web</q>. You should refrain as much as is possible from maintaining a second version of your web sites specifically targeted at mobile devices. This requires a bigger initial outlay and becomes a maintenance nightmare. You should be able to create a Web site that offers an acceptable user experience on desktop and mobile browsers.</p>
<p>Using Web Standards and best practices, you should be able to make your site mobile friendly without too much extra work. The mobile web is an ever-growing corner of the market that businesses cannot afford to ignore. In a number of countries, more people use mobile phones to access the Web than desktop computers, and somewhere in 2008 the percentage of the world&#39;s population that carries mobile phones broke past the 50% barrier - an estimated 4 billion phones. An estimated 1 billion of these are capable of Internet access — too big a market to ignore. (<a href="http://www.developer.nokia.com/Community/Discussion/">Source: Forum Nokia</a>.)</p>
<h2 id="challenges">Challenges associated with the mobile web</h2>
<p>The mobile web has always been confusing and difficult for many people to get used to developing for, due mainly to lots of over-hyped jargon and terms that the average web developer has never seen or needed to deal with. Things like <q>content carriers</q>, <q>WAP</q> and <q>the deck</q>, many of which aren&#39;t really relevant to the subject area any more. When we create traditional HTML websites, we simply upload them to our server space with our Web-hosting provider and that’s it. It didn’t matter if the customer was coming from America, Europe, Asia or elsewhere, or if they were on a dial-up modem at home or a super-fast fiber optic connection at a University; all the infrastructure between your Web site and the customer’s desktop computers worked the same way every time.</p>

<p>This is not true when we are talking about mobile devices accessing the Web. In the world of mobile carriers, different companies use different hardware for their cell towers, they compress the data differently or not at all, and factors like signal strength and availability can vary a lot. This is before we even get to the capabilities of the software on the device itself!</p>

<p>While that sounds daunting, you shouldn’t let it scare you. As a web developer or designer, all you need to understand to create your Web site in a mobile friendly way is that there are some considerations you need to take into account. These limitations include styling, scripting and thorough testing on a variety of devices. Your existing skill-set for creating traditional web sites is much the same as for mobile web sites. The rest of this article will summarize all of these points to help give you a feel for the topic and address all of the areas to consider. Future mobile articles will give these areas a deeper treatment.</p>
<h2 id="limitations">Mobile limitations</h2>
<p>While creating a site that will work on mobile devices largely involves sticking to the same web standards and best practices as you need to use for desktop browser-compatible sites, you still need to consider the limitations imposed by such compact devices. While the mobile infrastructure is getting better and more devices are equipped with WiFi, there are still some issues. Hopefully, over time, the following points will become obsolete, but for the near future these are still critical considerations today, and will remain so for some time. You must realize that the capabilities of mobile devices differ greatly and that the top of the range smartphones, such as the iPhone, HTC Touch Diamond and Samsung Omnia (and other S60 and Windows Mobile-based phones), constitute only a small percentage world-wide of the overall Web-enabled phone population.</p>
<h3 id="screen">Screen size/resolution</h3> 
<p>For those of you too young to remember, there was a time when you would visit a Web site and they would have a small disclaimer along the lines of <q>Best viewed in Netscape Navigator at 640x480</q>. You couldn&#39;t guarantee the higher resolutions we take for granted today. On mobile devices, screen resolutions still vary greatly, and this doesn&#39;t look as if it will change any time soon.</p>

<p>When constructing a mobile version of your Web site, how can you be sure that your design will work across the different screen resolutions and dimensions? The simplest strategy is to keep your layout as simple and fluid as possible. The ultimate ideal is to keep your page contents all in a single column stacked on top of each other, so no matter how wide or skinny the screen resolution is, the information simply wraps. You will need to test how well your design works with and without CSS and JavaScript.</p>

<p>Using CSS media queries, JavaScript or the <code>viewport</code> meta tag, it is possible to send some CSS targeted specifically to mobile devices without any server-side coding. You will learn more about these later on in this series of articles.</p>
<h3 id="input">Input mechanisms</h3> 
<p>Mobile devices have very different methods of input than desktop machines. When you are at work, your desktop machine probably has a full QWERTY keyboard, a multi-button mouse, possibly a number pad, etc. On a mobile device, you might only have a number pad. You can’t guarantee a full QWERTY keyboard or a pointing device. This makes data entry, even cycling through links, a different experience than when at a stationary desk.</p>

<p>If you have built your Web site using progressive enhancement, then its functionality should not depend on any of these advanced input devices, but should be accessible to everyone using just about any form of input device.</p>
<h3 id="processing">Processing power and available memory</h3>
<p>Mobile devices generally have less memory than their desktop brethren. This creates limitations in the amount of processing they can handle, which limits implementations of JavaScript, Flash and other technologies. These tend to drain batteries, create a slower user-experience and increase the bandwidth - this last point can increase the cost to the user of downloading your web content if they are paying by the kilobyte, which many are. As we’ll see later, these processor limitations account for the mobile web’s evolution along the XML path rather than the HTML/SGML path.</p>
<h3 id="fontscolours">Available fonts and colours</h3> 
<p>On your desktop computer, you can happily install all sorts of fonts and families, from serif to san-serif, from symbols to wingdings, but on mobile devices, you are not so privileged. Some devices have as few as one <q>standard</q> fixed-width font, and perhaps a bold or italic variant. This makes corporate branding a nightmare. Not to mention all your nicely designed navigation items in variable width fonts looking bad!</p>

<p>Along with limited fonts, some devices have a limited colour palette, although this is less of an issue now - most new phones come with thousands of colours, and monochrome phones are rare now.</p>

<h3 id="webstandards">Web standards support</h3>
<p>Not all phones are equipped with web browsers that share the capabilities of today’s modern desktop browsers. Some have <q>full support</q> for the common Web Standards like HTML, CSS and JavaScript. Some only support a certain subset of these standards or use different standards entirely (see the next section for a discussion of WML, cHTML and XHTML-MP). Some support HTML, but not CSS or JavaScript. Other mobile browsers such as <a href="http://www.opera.com/mini/">Opera Mini</a> use a proxy system in which a server farm retrieves the requested web page, optimizes and reduces it in file size, then sends it to the browser for display.</p>

<p>The strategy here is to test, test, test, and make sure your Web sites degrade gracefully on lower-capability browsers.</p>

<p class="note">Note that you can test web sites on Opera Mini using the <a href="http://www.opera.com/mini/demo/">Opera Mini Simulator</a> if you haven&#39;t got a phone handy.</p>

<h2 id="advantages">Mobile advantages</h2>
<p>Mobile devices do have some advantages over their desktop and even laptop cousins. When you are designing sites for mobile devices, it is possible to take advantage of some of these features to enrich the experience over other devices.</p>
<h3 id="movingabout">Mobile means moving about!</h3>
<p>Mobiles (and laptops for that matter) can go with you wherever you go, which opens up a whole world of new possibilities for location-aware applications — applications that give you appropriate data depending on where you are, for example restaurant suggestions, transport details, cinema times and locations, location of your friends, etc. Current location can be captured by some devices, through means such as <acronym title="Global Positioning Systems">GPS</acronym>, web services and triangulation, and you can use this information in your web applications in various ways, for example through the experimental <a href="http://www.w3.org/TR/geolocation-API/">W3C Geolocation API</a>, or through a location broker API such as <a href="http://fireeagle.yahoo.net/">Yahoo! Fire Eagle</a>. I won’t cover <abbr title="Location-Based Services">LBS</abbr> any more in this article series, as it is an advanced topic, and the technologies to allow you to do so are largely at a pretty early stage. Here are some links to some more details about some of the important technologies around this area:</p>
<ul>
<li><a href="http://www.google.com/latitude/">Google Latitude</a></li>
<li><a href="http://fireeagle.yahoo.net/">Yahoo! Fire Eagle</a></li>
<li><a href="http://www.w3.org/TR/geolocation-API/">W3C Geolocation API spec</a></li>
<li><a href="http://www.georss.org/"> GeoRSS: Geographically encoded objects for RSS feeds</a></li>
</ul>
<h3 id="hardwareadvantages">Cameras, phones and other hardware features</h3>
<p>Mobile devices have many hardware features that desktop computers don’t. The two most obvious are:</p>

<ul>
<li><p><strong>Camera</strong>: You’ll be hard-pressed to buy a phone that doesn’t have a built-in camera these days and we are beginning to see APIs to allow web applications to interface with such devices.</p></li>

<li><p><strong>Phone</strong>: Let’s not forget that the primary purpose of a mobile phone is to call people! This can be smoothly integrated into your website by using the little known <code>tel:</code> protocol. Just like you use a <code>mailto:</code> to link to an email address, you use <code>tel:</code> to link to a phone number. When you click the <code>tel:</code> link it causes the phone to dial</p>

<pre><code>&lt;a href=&quot;tel:5121234567&quot;&gt;Phone 5121234567 to book a table&lt;/a&gt;</code></pre>
<p>Note the inclusion of the phone number in the link text as well — while this may seem a little repetitious, bear in mind that some browsing devices won’t support the <code>tel:</code> protocol, such as our old friend the desktop computer.</p></li>
</ul>
<h2 id="mobilewebtechnologies">Mobile web technologies</h2>
<p>Your knowledge of Web Standards as applied to creating traditional web sites can easily be applied to developing mobile sites. There are however some additional acronyms and a bit of history to fully understand where we are today and how we got here. Depending on your target audience and the types of phones they are using, you might just be able to stick to standard HTML and CSS, or you might need to take a step back to something different.</p>

<h3 id="wml">WML</h3> 
<p>WML stands for Wireless Mark-up Language and was created in 1998. Before that, there was no standard used specifically for mobile devices.</p>

<p>Just like web browsers use HTML for content structure, older mobile device browsers use WML - if you need to support really old mobile phones using WML browsers, you will need to know about it. WML is XML-based (an XML vocabulary just like XHTML and MathML, but not HTML) and does not use the same metaphor as HTML. HTML is a single document with some metadata packed away in the <code>head</code>, and a <code>body</code> encapsulating the visible page. With WML, the metaphor does not envisage a page, but rather a deck of cards. A WML file might have several pages or <q>cards</q> contained within it.</p>

<p>The following is an example WML file:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;!DOCTYPE wml PUBLIC &quot;-//WAPFORUM//DTD WML 1.1//EN&quot;
&quot;http://www.wapforum.org/DTD/wml_1.1.xml&quot;&gt;
&lt;wml&gt;
  &lt;card id=&quot;home&quot; title=&quot;Example Homepage&quot;&gt;
    &lt;p&gt;Welcome to the Example homepage&lt;/p&gt;
  &lt;/card&gt;
  &lt;card id=&quot;contact&quot; title=&quot;Example Contact Page&quot;&gt;
    &lt;p&gt;Welcome to the Example Contact page&lt;/p&gt;
  &lt;/card&gt;
&lt;/wml&gt;</code></pre>

<p>There are several downsides to using WML. Even though it does have a scripting language, it does not allow for very rich interactions or applications to be built. It was designed for very small screen and low-resolution devices. Older WML browsers do not support more widespread image formats such as GIF and JPEG. The corresponding image format, WBMP, supports only a black and white color scheme and it is difficult to create WBMPs as they are not easily supported in modern image manipulation tools. WML is also not easily interoperable with other markup formats, so having a WML version of your site does mean that you need to maintain two separate versions of a web site, which adds complexity, overhead and cost to the project.</p>

<p>We really do not recommend that you start creating sites using WML - this is really just a history lesson. For old, low power mobile devices there is <a href="http://www.opera.com/mini">Opera Mini</a>, which can run on pretty much any device with a <acronym title="Java Virtual Machine">JVM</acronym>).</p>

<h3 id="chtml">Compact HTML</h3>
<p>Around the same time as WML was created, CHTML was also born. CHTML stands for Compact HTML and is a subset of early versions of HTML from the late nineties. Since CHTML is much more like HTML it can be viewed in regular desktop browsers. Even back in 1998, they were beginning to realize the difficulty with maintaining multiple versions of a single Web site.</p>

<p>Eventually, CHTML evolved into i-mode HTML in Japan, but it has since been superseded by XHTML Basic and then XHTML Mobile Profile elsewhere. The use of Compact HTML has been relegated to history, but it was a perfect demonstration of the forward thinking of its creators in following the <q>One Web</q> philosophy.</p>

<h3 id="xhtmlmp">XHTML mobile profile</h3> 
<p><acronym title="XHTML mobile profile">XHTML-MP</acronym> is a subset of the XHTML mark-up, which is very similar to regular HTML but with a few more restrictions. Knowing standard HTML gets you 99% of the way towards understanding XHTML and XHTML-MP.</p>

<p>The history of XHTML-MP is an interesting one. After WML, XHTML-MP was independently proposed to bring mobile mark-up inline with the XHTML/HTML that developers were used to coding. The W3C decided to also get in on the game and created XHTML-Basic, which was very similar to XHTML-MP with the same intent. Then XHTML-MP 1.2 came about to add some functionality into the mark-up and XHTML-Basic version 1.1 appeared, echoing this. These two standards are pretty much interchangeable in terms of functionality.</p>

<p>Since XHTML-MP and XHTML-Basic are a subset of XHTML, they have more restrictions than standard HTML. This keeps mobile devices from having to support large amounts of code and processing that are used only by a small amount of sites. (For more information about the limitations in XHTML-Basic you can read <a href="http://dev.opera.com/articles/view/mobile-markup-xhtml-basic-1-1/">David Storey&#39;s article on mobile markup at dev.opera.com</a>.)</p>

<p>the below code shows an example XHTML-MP document (note the different doctype):</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE html PUBLIC &quot;-//WAPFORUM//DTD XHTML Mobile 1.1//EN&quot;
 &quot;http://www.openmobilealliance.org/tech/DTD/xhtml-mobile11.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;title&gt;Example Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Example XHTML-MP page&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p class="note">Note that one subtle difference between XHTML-MP and XHTML-Basic is that XHTML-Basic needs to be served up with a mimetype of <code>application/xhtml+xml</code>. Doing so tends to break older versions of Internet Explorer, which attempt to download or display the file as XML, rather than render it as a Web page. XHTML-MP on the other hand commonly uses a mimetype of <code>application/vnd.wap.xhtml+xml</code>, but can also be served as <code>application/xhtml+xml</code> or even <code>text/html</code> so that any browser can display it.</p>
<h3 id="xhtml">XHTML</h3> 
<p>Finally, there is plain XHTML. This is the XML version of your vanilla HTML. If you are a competent Web Developer, then this should be nothing new to you. In fact, if you are not creating anything wildly specific, you might be producing XHTML that is MP/Basic compliant already. You can easily switch the doctype and see if you get any validation errors.</p>

<p>As we’ve seen, all of the mark-up languages available to mobile devices are from the XML family. The idea behind this is to streamline the code in the browser so the already less powerful mobile browsers do not have to deal with incorrectly nested elements and other common mark-up mistakes that can cause errors and increase the amount of processing power needed to render the Web page.</p>

<p>As more and more mobile devices are using slimmed down versions of their desktop counterpart’s rendering engines, the ability to browse standard (X)HTML pages is increasing. And of course, you can stick with an HTML doctype if you wish — many mobile browsers will support those too; I am recommending an XHTML doctype really so that a strict set of rules is enforced, hopefully leading to fewer errors, smaller downloads, and less processing strain for mobile devices viewing your site. But it is up to you.</p>

<h2>CSS and Semantic Mark-up</h2>
<p>Many of the design and layout tricks that we have developed over the years to keep our mark-up as semantic as possible, fall down on mobile devices.</p>  

<h3 id="imagereplacement">Image Replacement</h3>

<p>One example is image replacement for headlines - the use of CSS to create a background image on a heading element and then shift the text off the page to display just the background image, which could be a company logo, or a really fancy typographically appealing version of the text heading. This allows designers to have more control over the design of the heading while at the same time keeping the original text heading present so that it can be read by screen readers and search engines.</p>

<p>Sadly, some browsers on mobile devices support some or none of the CSS standard. When optimizing for mobile devices, you are generally trying to cut down on file size and HTTP requests while retaining design values and functionality. It is very difficult though - no matter which way you move to optimize or improve user experience for some mobile browsers, you will lose ground on the other facets.</p>

<p>Let&#39;s look at simple image replacement use case, to give you more of an idea of this. The below example uses a nice tiled blue gradient background image, and demonstrates how difficult it can be to get the exact corporate logo and colours you want, while at the same time keeping it semantic when targeting devices that do not support CSS.</p>

<p>Figure 1 shows the final result we&#39;d like.</p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/figure1.jpg" alt="finished heading with background gradient and image replacement" />
<p class="comment">Figure 1: Our finished heading, with background gradient and image replacement.</p>

<p>The markup for this heading looks like so:</p> 

<pre><code>&lt;h1&gt;&lt;span&gt;ABC co.&lt;/span&gt;&lt;/h1&gt;</code></pre> 

<p>The process by which we would optimize this heading might go something like this.</p>

<ol>
<li>
<p>You&#39;d first specify a solid blue background color on the heading as a default.</p> 

<pre><code>h1 { background-color: blue; } </code></pre>
</li>

<li><p>We can then do our trick of moving the <code><span>ABC co.</span></code> off the page with a negative text indent, and replace it with a background image of the company logo.</p> 

<pre><code>h1 span { text-indent: -9999px; background-image(&#39;logo.png&#39;); } </code></pre>

<p>This gives us the rendering shown in Figure 2.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/figure2.jpg" alt="heading text has been replaced with a background image" />
<p class="comment">Figure 2: Our heading text has been replaced with a background image.</p>


  

</li>
<li><p>Next, we can progressively enhance the CSS to include the gradient background image.</p>

<pre><code>h1 { background-color: blue; background-image: url(&#39;gradient.gif&#39;); } </code></pre>

<p>This results in  display along the lines of Figure 3.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/figure3.jpg" alt=" the company logo, and our background gradient" />
<p class="comment">Figure 3: We now have the company logo, and our background gradient.</p>


 

</li>
</ol>

<p>We have achieved our basic goal, but need to remember how this looks in browsers that do not support aspects of CSS or CSS at all.</p>

<p>Some browsers don&#39;t support CSS background images (even desktop web-browsers don&#39;t always support them when printed), because of this your company logo would not appear and the text is still positioned off the page so the header would end-up looking like Figure 4:</p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/figure4.jpg" alt="No background image means we do not see the company logo" />
<p class="comment">Figure 4: If the browser does not support CSS background images, we don&#39;t see the company logo!</p>

<p>Other browsers mess up the text indenting, so you see both, which doesn&#39;t look great - see Figure 5.</p>
 
<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/figure4a.jpg" alt="In some browsers we see the original text as well as the background image" />
<p class="comment">Figure 5: In some browsers we see the original text as well as the background image</p>
   

<p>The only way around this is to avoid using the text-swapping trip and change the mark-up so the image is included using an <code>image</code> element, not a CSS background image property:</p> 

<pre><code>&lt;h1&gt;&lt;img src=&quot;logo.png&quot; alt=&quot;ABC co. Logo&quot;/&gt;&lt;/h1&gt;</code></pre>

 
<p>This would give you the rendering shown in Figure 6 - the same as when we started - but the mark-up isn&#39;t as clean.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/figure5.jpg" alt="HTML img element means more heading support but the markup is less clean" />
<p class="comment">Figure 6: Using an HTML <code>img</code> element means more support for heading, but the markup is less clean.</p>


 

 

<p>However, some poorer devices can&#39;t even render background colors, so your fancy transparent logo image ready for any background style will appear as white text on a white background - see Figure 7!</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/figure6.jpg" alt="no background colours means white on white" />
<p class="comment">Figure 7: No support for background colours means that your image will appear white on white - terrible!</p>
 

 
   

<p>As a last resort, we&#39;ll reluctantly decide to make the logo background color solid blue instead to make it visible across as many browser types as possible and drop the use of the gradient background image altogether - see Figure 8.</p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/figure7.jpg" alt="The logo background is now solid blue, so it is visible on devices without background colour support" />
<p class="comment">Figure 8: The logo background is now solid blue, so it is visible on devices without background colour support.</p>


 
   

<p>While this is not optimal mark-up, but gives the most consistent rendering across all devices. As with any development, there are trade-off to what can and can&#39;t be achieved, you need to be aware of these problems and address them accordingly.</p>

<h2 id="summary">Summary</h2> 
<p>This article was just a brief introduction to the world of mobile Web Development, including some of the technical and design hurdles you need to be aware of before getting started. I touched on issues with CSS, mark-up and some of the limitations and advantages across the different mobile browsers.</p>

<p>All of these different renderings and interpretations are not to be considered bugs (well some are) but instead features of the device. Sure the phone might not support a colour screen or JavaScript, but the battery will probably last longer. As you optimize for specific devices, it changes the functionality on others. This might seem like a major issue to developers and designers stuck in a pixel perfect world, but in reality these differences are acceptable — even expected. The idea of <q>One Web</q> does not mean exactly the same look and feel across all devices. Just as this is an unobtainable goal on the desktop, it is even more so on mobile devices.</p>

<p>The sooner you accept this and move on, the sooner you can begin to develop better Web sites. From screen-size and resolution, to installed fonts and colors, to image and HTML support, not all phones are created equal, so the best you can do is present the best, most flexible, equivalent design you can — which does not mean identical. This is where testing is key! Testing is an important part of any web development process, but especially so for mobile devices due to the diverse range of devices and capabilities.</p>

<h2 id="exercises">Exercise questions</h2>

<ul>
<li>How many versions of your website should you create to support the mobile web?</li> 
<li>Explain progressive enhancement</li>
<li>Do mobile devices support XHTML?</li>
<li>What image format is natively supported in WML?</li>
<li>How do you mark-up a telephone number as a link?</li>
</ul>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>

  


<img src="http://forum-test.oslo.osa/kirby/content/articles/250-mobile-1-introduction-to-the-mobile-web/brian.png" alt="picture of the article author Brian Suda" class="right" /> 

<p>Brian Suda is an informatician currently residing in Reykjavík, Iceland. He has spent a good portion of each day connected to Internet after discovering it back in the mid-1990s. Most recently, he has been focusing on the mobile space - how smaller devices will augment our every day life and what that means to the way we live, work and are entertained. His own little patch of Internet can be found at <a href="http://suda.co.uk/">suda.co.uk</a> where many of his past projects and crazy ideas can be found.</p>
      


