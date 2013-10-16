Title: Designing With Opera Mini in Mind
----
Date: 2006-11-13 10:00:03
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
 <h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">16th December 2011: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Please consult the <a href="http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/">Opera Mini: web content authoring guidelines</a> for more up-to-date information:</p>
 </div>

<p>Designing for Opera Mini is a special case of designing for mobile devices, you should have a look at the article <a href="/articles/view/making-small-devices-look-great/">Making Small Devices Look Great</a> first, as well as the note on <a href="/articles/view/the-phone-factor-2/">Phone Factors</a>. As Opera Mini uses a different approach to the other Opera clients there are a few additional factors that are covered in this document.</p>

<p>Opera Mini uses the same engine as every other Opera product, be it for Desktop, TV, Mobile, or Embedded Devices. Unlike these Opera Mini has two separate components, a Java™ Opera Client thin client on the phone and an Opera Server on the backend doing the pre-processing. Opera Server converts web pages into an efficient code that the Client can understand. Opera Client is designed to be as small as possible and still be able to present web pages usefully.</p>

<p>Opera Mini Client will work on most devices with J2ME support, something most current phones have. Opera Mini Client supports both the older MIDP1.0 profile (&quot;Opera Mini Basic&quot;) and the more advanced MIDP2.0 profile (&quot;Opera Mini Advanced&quot;). The web standards support is the same with both profiles, but the user experience is better with MIDP 2.0.</p>

<p><a href="http://www.opera.com/mini/demo/">The Opera Mini™ Simulator</a> shows how a page could appear on an Opera Mini device. A basic simulation of Opera Mobile or Opera Mini can be achieved by turning on <kbd>View &gt; Small screen (Shift+F11)</kbd> in an Opera desktop browser and resizing the window to the target device size.</p>

<h3>Display limitations</h3>
<p>There are a few display properties the Opera Mini Client doesn&#39;t currently support:</p>
<ul><li>Tables</li><li>Underlining, strike-through, and overlining</li><li>Blink and marquee</li></ul>

<h4>Use of Small-Screen Rendering in Opera Mini</h4>
<p>Opera Mini always runs with Colour Small-Screen Rendering activated to adapt web pages to the small screen. Like with Opera Mobile this can be disabled by using a style sheet with media=handheld, but unless you are using a very fluid design (no tables, frames, or positioning) this is not recommended. There is no horizontal scrolling available and a phone screen can be as little as 100 pixels across.</p>

<h4>Media types and media queries</h4>

<p>Opera supports different media types for different media contexts. Desktop machines use <code>screen</code>, or <code>projection</code>  in fullscreen (allowing for OperaShow presentations),  <code>print</code> for printouts, and <code>handheld</code> for small-screen view (e.g. in panels). Handheld devices use <code>handheld</code>, the largest devices may also support <code>screen</code>. Home media may use <code>tv</code> or <code>screen</code>, and <code>speech</code> is used for text-to-speech. This media support allows for radically different presentations of the same content in different contexts.</p>

<p>Opera also has <a href="http://www.opera.com/docs/specs/">partial support</a> of <a href="http://www.w3.org/TR/css3-mediaqueries/">Media Queries</a>. This can for instance be used to make one design for small handheld devices (e.g. less than 200px wide) and another for larger handheld devices. Opera 8 only supports media queries defined in CSS, not in the HTML media attribute. This will be fixed in future versions of Opera.</p>

<h3>User interface and document windows </h3>

<p>Phones don&#39;t come with an attached mouse, and they usually don&#39;t have a full keyboard either. Navigation and especially text input is more cumbersome than on desktop machines. Together with the small screen and slow processing the limited UI leads to designs that  focus on what is important for the user. Selecting among options is easier than typing preferences, but keep select boxes reasonably small. Picking multiple choices in a select box is much harder to do than a single select. </p>

<p>Depending on memory constraint a web page can be split into multiple pages by Opera Mini.</p>

<p>Opera Mini only shows single window, design with that in mind. Opera Mini supports frames, but frames is not a suitable technique for smaller phones. </p>

<ul><li>Don&#39;t do pop-ups</li><li>Don&#39;t depend on mouse-based interactions, in particular :hover and mouseover</li><li>Avoid dynamic menus</li><li>Don&#39;t force the user to type more than necessary  </li></ul>

<h3>International text and fonts</h3>

<p>Opera Mini supports internationalization, including the full range of character sets supported by Opera in addition to Unicode. However this is dependent on font support in the phone which commonly is limited. Bidirectional text is not supported in Opera Mini.</p>

<h3>JavaScript</h3>

<p>The thin client model also gives strong restrictions on JavaScript interaction. Event based scripts, for instance by triggering a button, can be run while background scripts will fail. Opera Mini only uses one window.</p>
<h4>Not supported</h4>
<ul><li>Pop-ups are either blocked or replace the original document.</li><li>Background scripts</li><li>Events handlers using the &#39;this&#39; keyword on other elements than form controls. This fails: <code>&lt;a href=&quot;http://labs.opera.com&quot; onclick=&#39;window.location = this.href&#39;&gt;</code></li></ul><h4>Supported</h4><ul><li>document.write()</li><li>Event based scripts (with the exception above)</li></ul>

<h3>Server Sniffing (User Agent String and Location)</h3>

<h4>The User Agent String</h4>

<p>Opera Mini will give the same UA string as Opera Mobile, but additionally it will identify itself as Opera Mini in a comment. Look for &quot;Mini/N.M&quot; (e.g. &quot;Opera Mini/1.2&quot;) in addition to &quot;Opera/N.M&quot; (as Opera) or &quot;Opera N.M&quot; (spoofing).</p>

<p>Opera Mini/1.0 and 1.1: Limited regional releases for Northern Europe. <br />
Opera Mini/1.2: Global release of Opera Mini.<br />
Opera Mini/2.0: First major upgrade of Opera Mini.</p>

<h4>IP-based location sniffing</h4>
<p>IP-based location sniffing is based on the knowledge of the location where blocks of IP addresses are registered. This is usually enough to give a rough idea of the user&#39;s location, such as country or region. This is far from a fool-proof method, and the user should always have the option to correct the initial assumption. In particular assumptions on preferred language based on IP address should be avoided.</p>

<p>Opera Mini has an additional issue. The IP address of the HTTP connection is the address of the Opera Mini Server, and it can be very distant from, even be in a different country than, the Opera Mini Client. </p>

<p>The <tt>X-Forwarded-For</tt> header contains the more useful IP address of the Opera Mini Client. Services using the IP address to give localized content should first look for an X-Forwarded-For HTTP header, and only if such a header is absent use the remote IP address of the HTTP connection.</p>

<h4>Cookies</h4>
<p>Cookies are supported.</p>

<h2>References</h2>
<ul>
<li><a href="http://my.opera.com/community/dev/device/">Making Small Devices Look Great</a></li>
<li><a href="http://my.opera.com/community/dev/idopera/">How to Correctly Check for Opera</a></li>
<li><a href="http://www.opera.com/mini/">Opera Mini</a></li>
</ul>
