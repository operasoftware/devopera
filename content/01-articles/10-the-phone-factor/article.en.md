Title: The Phone Factor
----
Date: 2006-11-01 08:32:47
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

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Please consult the <a href="http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/">Opera Mini: web content authoring guidelines</a> for more up-to-date information:</p>
 </div>

<p>Phones can be summed up as being slow and small. Designing for phones isn&#39;t different from designing for desktop PCs, but a greater focus is needed on what is important on a page and how to achieve that efficiently. Redundancy is not desirable on small devices, as you can&#39;t as easily scan and ignore surplus content as you can on a big screen.</p>

<h3>Page design</h3>
<p>The desired layout for handheld devices is single-column, with the important information near the top of the page. Redundant information should be removed or hidden, but be careful not to remove content the user actually will need or want. Horizontal scrolling during reading is very distracting and should be avoided at all cost. There are several strategies that are in use: </p>
<ul>
  <li><b>Use very fluid designs</b>. Designs based on tables, frames, or absolute positioning are ill suited for devices. It is hard to make an attractive design based on <i>one size fits all</i> unless it can be pared down to the very essentials. </li>
  <li><b>Let Opera do the reformatting</b>. Create a design optimized for normal desktop displays and let the browser adapt the content. This strategy works especially well if the source code content comes in logical order. </li>
  <li><b>Make several versions of the page</b>, one for desktop and a few more versions for devices, and let the server decide which one to send.</li>
  <li><b>Let the content adjust to different types of display</b>, using CSS handheld media, Media Queries, or JavaScript based queries. </li>
</ul>

<h4>Some common device screen sizes (pixel width x height)</h4>
<ul>
  <li>128 x 128 pixels - Nokia Series 40 devices. A very common device size. </li>
  <li>176 x 208 pixels - Most Nokia Series 60 version 2 devices </li>
  <li>176 x 220 pixels - Most Microsoft 2003 smartphones </li>
  <li>208 x 320 pixels - Most UIQ version 2 devices</li>
  <li>240 x 320 pixels - [Quarter VGA] Most EZX, MS Pocket PC in portrait mode, UIQ version 3</li>
  <li>320 x 240 pixels - Same as above in landscape mode</li>
  <li>352 x 416 pixels - Nokia N90</li>
  <li>640 x 200 pixels - Nokia Series 80</li>
  <li>640 x 320 pixels - Nokia Series 90
  <li>640 x 480 pixels - [VGA] Large screen phones</li>
  </li></ul>

<p>Unless the browser is in fullscreen mode the actual page size will be somewhat smaller than the screen size. For the smallest sceens you can expect about the same width, but 20 to 40 pixels smaller height. The display resolution, also known as pixel density, will often be higher than what is common on desktop. This means that the pixels may be physically smaller. This is to some extent offset by the devices having higher quality screens which is viewed at a closer distance.</p>

<h4>Tips</h4>
<ul>
<li>Avoid spatial dependencies. Two elements that are next to each other on a big screen will typically be below each other when adapted to a small screen. Depending on how the page is coded the elements can be close or far apart. There is no guarantee they will be both displayed simultaneously.</li>
<li>Let pages degrade gracefully, that is work even if one or more elements can&#39;t be handled by the phone.</li>
<li>Don&#39;t include useless elements. </li>
<li>Frames and positioning is not suited for small screens. Be careful with tables and floats too.</li>
</ul>

<h3>Network Speed (Bandwidth and Latency)</h3>
<p>There are two components to network speed. Bandwidth is how much data can be transferred through the network at a given time, usually measured in bits per second. A file that is twice as big will take twice as long time to download. Latency is how long time you have to wait from sending a request until you get a response, a round trip to the server and back. This delay is a constant dependent on the network, a big file will have the same delay as a small one. Latency typically is less than a second on fixed lines and can usually be ignored. On wireless connections the latency can run into several seconds causing a noticable wait. In typical browsing low bandwidth is a bigger issue than long latency.</p>
<p>Phone networks have very low bandwidth relative to terrestial lines, even relative to wireless local networks like 802.11. Some common phone network bandwidth capabilities: </p>

<table>
  <thead>
  <tr>
    <th>Network</th>
    <th>Theoretical bandwidth</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>GSM (2G)</td>
    <td>14.4 kbps</td>
    </tr>
  <tr>
    <td>HSCSD (2G)</td>
    <td>29-57 kbps</td>
    </tr>
  <tr>
    <td>GPRS (2.5G)</td>
    <td>141 kbps</td>
    </tr>
  <tr>
    <td>EDGE (2.5G)</td>
    <td>384 kbps</td>
    </tr>
  <tr>
    <td>UMTS/W-CDMA (3G)</td>
    <td>1920 kbps</td>
    </tr>
	</tbody>
</table>

<p>The real bandwidth can be much lower than the theoretical maximum, especially for congested networks. A typical phone user can have something like GPRS at 50 kbps (thousand bits per second). Furthermore a flat rate is not yet the rule. Most users pay for the amount of transferred data, giving them a strong financial motivation to avoid large data transfers. More data also means more data processing and memory use, further slowing down the perceived speed of browsing.</p>
<p>Media files, primarily images, comprise the majority of bandwidth and memory used in browsing. Since images larger than the phone screen usually will be scaled down to fit, oversized images are a waste of time and money. Other media, like audio, video, or binary files, tend to be even larger and not directly accessible for the lower end devices with neither a plug-in interface nor a viewer. </p>
<p>One strategy is to use different sized images for desktop and devices. This can be done server side (using browser sniffing) or client side. It is possible to use  the CSS3 &#39;content&#39; property to replace content, like <code>@media handheld {#big-image {content: url(small-image.png)}}</code>. Alternatively JavaScript can be used, though on low-end devices JavaScript can have been shut down manually or automatically. A more common strategy is to skip oversized images (with <code>display:none</code> or similar technique), as they aren&#39;t usually relevant for small devices, and show the other images, letting them scale as necessary. </p>
<p>Code files (like HTML, CSS, and JS) are usually smaller than media files, but the processing cost of code files can be considerable.</p>
<p>The server round trip delay is considerably longer for wireless connections, and this is fairly independent of the actual bandwidth. Avoid making more round trips than necessary. For instance an external style sheet linking to another via an @import rule will require three sequential round trips (first the HTML file, then the intial CSS file, followed by the imported CSS file) before the page can be properly displayed.</p>

<h4>Tips </h4>
<ul>
  <li>Don&#39;t use huge images</li>
  <li>Use alt text for &#39;img&#39; and fallback for &#39;object&#39; </li>
  <li>Make code files terse and efficient</li>
  <li>Don&#39;t create long sequences of round trips required to render a document</li>
</ul>

<h3>Processor speed </h3>
<p>For long battery life as well as for size and cost limitations the processors you will find in phones are slow or very slow. PDA style devices have more massive batteries and lower standby requirements so they usually have tolerable processor speed. While the difference between an efficient design and a slow inefficient design can be acceptable on a fast desktop machine it will make a huge impact on a phone.</p>
<p>All browsing processes will take noticeable time to process: document parsing, styling, image processing, page rendering, running scripts, user interaction. A good design will be snappier than an average one, and a bad design can make a page unusable. Some processes are inherently costly, in particularly page reflow and DOM mutations. This cost is higher the more complex the page is. </p>

<h4>Tips </h4>
<ul>
  <li>Don&#39;t use redundant code</li>
  <li>Don&#39;t use huge images</li>
  <li>Optimize JavaScript where it counts</li>
  <li>Don&#39;t run massive processes in the background (it won&#39;t be in the background on a phone, and the battery life will be lowered)</li>
  <li>Avoid reflows (don&#39;t change page layout needlessly)</li>
</ul>

<h3>Memory </h3>
<p>Devices always have too little memory available so the strategy is to use the little there is optimally. Images need a lot of memory. Little memory also limits the cache size, making the cache much smaller than ideal. Pages with many large files will flush much of that cache making the overall experience more sluggish. Markup uses much more memory than text to build up the DOM tree. The fewer elements a document has the faster it will respond, so remove the useless markup. Don&#39;t be afraid to use markup, but make it count. CSS and JS files can be needlessly complex too. Remove what you don&#39;t use. </p>
<ul>
  <li>Don&#39;t use redundant code</li>
  <li>Don&#39;t use huge images</li>
  <li>Optimize JavaScript where it counts</li>
  <li>Don&#39;t run massive processes in the background </li>
</ul>

<h3>User interface and document windows </h3>
<p>Phones don&#39;t come with an attached mouse, and they usually don&#39;t have a full keyboard either. Navigation and especially text input is more cumbersome than on desktop machines. Together with the small screen and slow processing the limited UI leads to designs that  focus on what is important for the user. Selecting among options is easier than typing preferences, but keep select boxes reasonably small. Picking multiple choices in a select box is much harder to do than a single select. </p>
<p>Some browsers, including Opera Mini, only shows single window, design with that in mind. Even browsers that support multiple windows, like Opera Mobile, are constrained by available memory as to how many windows can usefully be displayed at once. Opera supports frames, but most phone browsers do not.</p>

<ul>
<li>Don&#39;t do pop-ups</li>
<li>Don&#39;t depend on mouse-based interactions, in particular :hover and mouseover</li>
<li>Avoid dynamic menus</li>
<li>Don&#39;t force the user to type more than necessary</li>
</ul>

<h2>Design tips</h2>
<h3>Markup and CSS tips</h3>
<ul>
  <li>Use handheld as media type to deactivate reformatting technologies such as Small-Screen Rendering, but don&#39;t use it if you don&#39;t mean it.</li>
  <li>If disabling SSR be very careful with floats and absolute positioning, consider turning this off completely in the handheld style sheet </li>
  <li>Use scalable design to handle multiple screen resolutions/orientations with the same code. Failing that create the source code in natural order, important content first, and let SSR do its work. </li>
<li>Be considerate with :hover, as there often is no mouseover on a phone (this includes CSS dynamic menus) </li>
</ul>

<h3>Graphics tips</h3>
<ul>
  <li>Don&#39;t use huge images</li>
  <li>Use alt text for &#39;img&#39; and fallback for &#39;object&#39; </li>
  <li>Don&#39;t use image slicing (cutting down images into smaller pieces), phone reformatting may scramble the image. If the image is big enough to consider slicing it then it is ulikely to be useful on a phone. </li>
  <li>Use clean and wellmade images, they are smaller in size and scale better </li>
  <li>Use PNG to achieve alpha transparency </li>
  <li>Use JavaScript/DOM for animations instead of plug-ins. </li>
</ul>

<h3>JavaScript tips</h3>
<p>Above all else code <a href="http://dev.opera.com/articles/view/48/">efficient JavaScript</a>, phones don&#39;t have the luxury of vast memory or fast processors to cater for poor code. </p>
