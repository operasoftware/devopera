---
title: 'Opera Accessibility: Where We’re At'
authors:
- henny-swan
tags:
- accessibility
- odin
license: cc-by-3.0
---

<p>It wont be long until I&#39;ve been at Opera a year during which time I&#39;ve been exploring Opera&#39;s more obvious and less obvious accessibility features. As we look forwards at how we enhance the browser for better accessibility support for both users and developers creating accessible standards compliant websites, I thought I&#39;d share with you some of my favorite bits.</p>
<p>This is not intended as a comprehensive overview of accessibility features - this can be found in the <a href="http://www.opera.com/support/">Opera Support section</a> - but rather an overview of what I&#39;ve learnt and really come to appreciate within Opera.</p>

<p><strong>Note:</strong> Keyboard shortcuts are Mac ones with a full list of both Windows and Mac offered as the end of the article.</p>
<h3>Keyboard accessibility</h3>
<ol>
<li><strong>Spatial navigation</strong> - Rather than tab to move through links and elements in a page (and <em>Shift + Tab</em> to go back) <a href="http://www.opera.com/browser/tutorials/nomouse/#nav">Spatial Navigation</a> allows the user to move freely up and down or left and right by simply hitting <em>Shift</em> then using the Arrow buttons (?, ?,?, ?). This means you are not restricted to linear tabbing and can navigate to content far quicker and efficiently on a page with less input.<br />
This works really well if you use voice input or are restricted to keyboard only access as it means you don&#39;t have to repeat <em>tab</em> over and over again. This can be crucial if you need to minimise physical movement if you have RSI or repeating the word &#39;Tab&#39; if you are using voice. This is especially important when in drop down menus as you can quickly exit the list without cycling through all the options. Opera is the only browser that has native support for Spatial Navigation.

<p>As an added bonus Spatial Navigation can trigger <code>:hover</code> styling and fire <code>onmuseover</code> and <code>onmouseout</code> events in Opera. While this is great for users designers shouldn&#39;t rely on <code>:hover</code> to convey information as support is not there in other browsers. If <code>:hover</code> is used also use <code>:active</code> (keeps mobile and Internet Explorer happy) and <code>:hover</code>. Note that  <code>:hover</code> is not always handled well by mobile.</p>
</li>
<li><strong>Single key shortcuts</strong> - Opera has a set of <a href="http://help.opera.com/Windows/9.50/en/keyboard.html#single-key">Single Key Shortcuts</a> that allow you to activate main functions without having to use any key combinations. To cycle through headings, for example, all you need to do it hit <em>S</em> to move forward or <em>W</em> to move back.<br />
This is an obvious benefit to keyboard and voice input users but also for developers. I often use this feature to check the logical flow of my heading structure in a page and quickly navigate long documents.
<p>We found that having Single Key Shortcuts activated by default confused many users who would hit keys by mistake and inadvertently trigger a change so you&#39;ll need to activate them yourself. To get them working go to <em>Preferences &gt; Advanced &gt; Shortcuts</em> and check &#39;<em>Enable single key shortcuts</em>&#39;.</p></li>
<li><strong>Access keys</strong> - By pressing <em>Shift + Esc</em> you can activate an <a href="http://www.opera.com/browser/tutorials/nomouse/#access">Access Key</a> menu and view all access keys within a page. The beauty of this is that any conflicts with Opera&#39;s own shortcuts are avoided which makes designing and using the page much easier for the developer and user respectively.</li>
<li><strong>Mouse gestures</strong> - Using small movements of your mouse - left or right, with a right click or a left click - you can move forward and back in your history, reload pages, open new tabs, windows and more. Mouse Gestures are really useful it you prefer using a mouse or if you find it hard or move your mouse long distances across the screen to hit a button or can not use a mouse in combination with a keyboard.</li>
</ol>
<p>Have a look at these and other keyboard access features in our tutorial on <a href="http://www.opera.com/browser/tutorials/nomouse/">using Opera without a mouse</a> for full details on keyboard accessibility support.</p>
<h3>Screen reader support</h3>
<ol>
<li><strong>VoiceOver on Mac</strong> - Opera has good support for VoiceOver on Mac allowing the user to comfortably navigate within web pages using a Spatial Navigation. You can access links, lists of links and form elements within the page as well as carry out searches and comfortably read paragraphs of text.<br />
One area that is lacking however is heading support as well as ARIA. While we can fix the heading support VoiceOver still has some improvements to make in ARIA support. As Steve Faulkner shows in his <a href="http://www.paciellogroup.com/blog/aria-tests/ARIA-MACRoleTests.html">ARIA role tests for Mac</a>,  while Opera 10 Alpha beats Safari by exposing 15 ARIA roles to i&#39;s 14 and Firefox&#39;s zero (on a Mac), overall support is almost non existent due to VoiceOver&#39;s lack of support of ARIA.</li>
<li><strong>Windows and Linux</strong> - Microsoft Active Accessibility is already available in Opera for Windows with<a href="http://www-03.ibm.com/able/open_computing/open_source_windows.html"> IAccessible</a>2 to follow. This means that current versions of Opera are not fully supported by screen readers on Windows. Getting screen reader vendors to work with us has prolonged the process for fixing this but we are working on it and I hope to be able to report back soon as this is a priority for us.</li>
</ol>
<h3>Zooming</h3>
<ol>
<li><strong>Zooming</strong> - We were the first browser to implement Full page Zooming which means scaling up everything on the page and not just text. This has obvious benefits for when you need larger text to read but don&#39;t have, or need,  access technologies such as screen magnification or text-to-speech software. It&#39;s perfect also for sites that use fixed fonts and wont allow the user to scale text. You can zoom pages either via <em>View &gt; Zoom</em> or from the menu on the bottom right of the chrome.</li>
<li><strong>Small screen rendering</strong> - One of my personal favorites is Small Screen rendering which essentially reformats your content into a single column and removes some images and formatting. It works especially well together with a screen magnifier or page zoom as it removes large empty spaces that in turn lead to disorientation.<br />
I&#39;ve written in more detail about this in <a href="http://www.iheni.com/horizontal-scrolling-opera/">zooming and removing horizontal scrolling in Opera</a>. If you&#39;re a web developer small screen rendering gives you an idea of how your web page may render on mobile browsers, such as Opera Mobile, that support single column layouts.</li>
<li><strong>Full screen zoom </strong>- As with all modern browsers you can also opt for removing the chrome and having your web pages fill up the entire screen. Many people find this useful when wanting to do away with the many toolbar and menu options found on the browser shell. You can activate this by selecting View &gt; Full Screen. Just hit <em>Esc</em> to return the page to the browser shell.</li>
</ol>
<h3>Customisation</h3>
<p>To say we are all different as human beings is an understatement so customisation is essential to a smooth browsing experience.  It&#39;s difficult to ever know how any one person may want to customise the browser, as user testing will show you, but there are key things that we think need to be flexible. There are a number of options that can be found either in the Preferences Menu or quick shortcuts via the Quick Preferences menu. These can be found in the <em>Opera</em> menu:</p>
<ol>
<li><strong>Pop-up management</strong> - You can block all pop-ups, certain pop-ups or set pop-ups to work in the background. This is ideal if you&#39;re using a screen reader and don&#39;t want to have your focus bumped off elsewhere unknowingly.</li>
<li><strong>Enable / Disable Animated images</strong> - Animations can be distracting and cause difficulties when reading. Disabling them prevent unnecessary intrusions.</li>
<li><strong>Enable / Disable Sound in web pages</strong> - Many sites tend to load with sound playing automatically. While in some cases this is expected on sites such as YouTube, this can be problematic when using a screen reader that can become drowned out by additional uninvited noise.</li>
<li><strong>Enable / Disable Java, plugins or JavaScript</strong> - Java, plugins (such as Flash) and JavaScript can be made technically accessible (in most instances) to assistive technologies however the behaviour can confuse people&#39;s understanding of a page. A dynamically updating page that refreshes every 15 seconds can cause a screen reader user to lose where they are in the page if they are unable so stop the refresh.</li>
</ol>
<p>Other customisation options available elsewhere include:</p>
<ol>
<li><strong>Icons </strong>- In Tools &gt; Appearance &gt; Skin you can choose the percentage size of your icons that appear on the browser chrome.</li>
<li><strong>Image</strong> - Not everyone wants images, especially when on dial-up or low band-width. You can easily switch images of by either selecting no images on the icons on the Status bar at the bottom right of the browser, or by selecting  Preferences &gt; Web page &gt; Images and make your selection.</li>
<li><strong>Colours</strong> - Again in <em>Tools &gt; Appearance &gt; Skin</em> you can choose a different colours scheme.</li>
<li><strong>Fonts and colours</strong> - Not all web pages will be styled however using Opera &gt; Tools &gt; Advanced &gt; Fonts you can select your preferred fonts and styling for links</li>
</ol>
<h3>User CSS</h3>
<p>You can switch between two modes for viewing pages in Opera: &#39;A&#39; and &#39;User&#39;. &#39;Author&#39; mode renders the page as the author intended it whilst &#39;User&#39; mode allows you to choose how the page appears. This benefits almost any type of user who especially people who struggle to read on screen such as people with low vision or cognitive impairments, are elderly or have reading problems.</p>
<p>These options are designed to cater to different browsing preferences and enhance accessibility for the visually impaired. You can switch between &#39;Author&#39; and &#39;User&#39; modes with Shift+G or by selecting View &gt; Style &gt; Author mode or user mode.</p>
<h3>Technologies</h3>
<p>As we constantly improve on how we deliver content online standards evolve and emerge. A key factor to making these standards work is ensuring that accessibility is at its core:</p>
<ol>
<li><strong>WAI-ARIA</strong> - Aria is widely expected to become a <abbr>W3C </abbr>specification this year. With all the major screen readers (Jaws, WindowEyes, NVDA, FireVox) working hard to support it as well as large and small sites alike implementing it ARIA is becoming an essential staple of the web which we are working to support.</li>
<li><strong>Scalable Vector Graphics</strong> -  Scalable Vector Graphics are graphics that do just that, scale. One of the drawbacks of scaling regular gif and jpeg images on the web is that they become distorted and blurred, this is especially a problem when the image is of text. With SVG however you get nice crisp images that retain all of their original sharpness.<br />
An example of SVG can be found in the form of a <a href="http://www.opera.com/company/jobs/">world map on our Jobs page</a> (note this wont work in Internet Explorer which doesn&#39;t support SVG). This is a widely overlooked yet excellent way of avoiding using images of text that do not scale well, image maps and many uses of canvas. Opera was one of the first browsers to support some form of SVG from version 9.</li>
<li><strong>HTML5 </strong>- With its focus on providing application like functionality HTML5 is key. While the specification is not expected to be complete until 2022 it is possible to implement some parts of HTML5 now. Despite some issues around accessibility that are yet to be ironed out the premise of HTML5 is that accessibility is &#39;built in&#39; rather than &#39;bolt on&#39; so that through a combination of browser implementation and page author coding some of the accessibility issues we experience today should be dealt with seamlessly by the spec tomorrow.<br />
For example, common practice today is to add skip links at the top of the page to allow the user to jump to key sections such as navigation and main content. With new structural elements introduced such as <code>&lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt; and &lt;footer&gt;</code> this work around becomes less necessary as these elements should provide additional navigation. See the <a href="a href=&amp;quot;http://www.iheni.com/the-shelf-life-of-a-skip-link/">shelf life of a skip link</a> for details on this.</li>
</ol>
<h3>Accessibility layout</h3>
<p>The accessibility layout has most text formatting disabled and replaced by basic formatting. Font size, word, letter, and line spacing are increased and the page width is limited. A lime green background gives good contrast with black text and linked images are outlined by a black border. Links are also outlined in a blue box when tabbed onto for better visibility.</p>
<p>You can switch to the Accessibility Layout via <em>View &gt; Style &gt; Accessibility</em> layout.</p>
<h3>Table of keyboard shortcuts</h3>
<table border="1" width="554">
<thead>
<tr>
<th width="200" scope="col">Action</th>
<th width="200" scope="col">Windows</th>
<th width="200" scope="col">Mac</th>
</tr>
</thead>
<tbody>
<tr>
<td>Spatial navigation</td>
<td>Shift + Arrows</td>
<td>Shift + Arrow keys</td>
</tr>
<tr>
<td>Single key shortcuts</td>
<td>Preferences &gt; Advanced &gt; Shortcuts</td>
<td>Opera &gt; Preferences &gt; Advanced &gt; Shortcuts and check &#39;Enable single key shortcuts&#39;</td>
</tr>
<tr>
<td>Toggle access Keys</td>
<td>Shift + Esc</td>
<td>Shift + Esc</td>
</tr>
<tr>
<td>Enter access Keys</td>
<td>A-z and 0-9</td>
<td>A-z and 0-9</td>
</tr>
<tr>
<td>Zoom</td>
<td>Ctrl + Plus and Ctrl + Minus</td>
<td>Shift + Plus and Shift + Minus</td>
</tr>
<tr>
<td>Small screen rendering</td>
<td>View &gt; Small small screen</td>
<td>View &gt; Small small screen</td>
</tr>
<tr>
<td>Full screen zoom</td>
<td>View &gt; Fullscreen</td>
<td>View &gt; Full</td>
</tr>
<tr>
<td>Pop-up management</td>
<td>Tools &gt; Quick Preferences &gt; Enable Popups etc</td>
<td>Opera &gt; Quick Preferences &gt; Enable Popups etc</td>
</tr>
<tr>
<td>Enable/Disable animated images</td>
<td>Preferences &gt; Web page &gt; Images</td>
<td>Opera &gt; Quick Preferences &gt; Enable animated images</td>
</tr>
<tr>
<td>Enable / Disable sound</td>
<td>Tools &gt; Quick Preferences &gt; Enable sound</td>
<td>Opera &gt; Quick Preferences &gt; Enable sound</td>
</tr>
<tr>
<td>Enable / Disable Java, plugins or JavaScript</td>
<td>Tools &gt; Quick Preferences &gt; Enable Java, plugins or JavaScript</td>
<td>Opera &gt; Quick Preferences &gt; Enable Java, plugins or JavaScript</td>
</tr>
<tr>
<td>Icon size</td>
<td>Tools &gt; Appearance &gt; Skin</td>
<td>Tools &gt; Appearance &gt; Skin</td>
</tr>
<tr>
<td>Images on/off</td>
<td>Tools &gt; Preferences &gt; Web page &gt; Images or Icon on bottom right of browser</td>
<td>Preferences &gt; Web page &gt; Images or Icon on bottom right of browser</td>
</tr>
<tr>
<td>Colours (browser)</td>
<td>Tools &gt; Preferences &gt; Web page &gt; Colour</td>
<td>Tools &gt; Appearance &gt; Skin</td>
</tr>
<tr>
<td>Fonts</td>
<td>Tools &gt; Preferences &gt; Web page &gt; Fonts</td>
<td>Tools &gt; Web</td>
</tr>
<tr>
<td>User CSS</td>
<td>View &gt; Style &gt; Author/User mode</td>
<td>View &gt; Style &gt; Author/User mode or Shift + G</td>
</tr>
<tr>
<td>Accessibility layout</td>
<td>View &gt; Style &gt; Accessibility layout</td>
<td>View &gt; Style &gt; Accessibility layout</td>
</tr>
</tbody>
</table>
<ul>
<li>Full list of <a href="http://help.opera.com/Windows/9.50/en/keyboard.html">Windows shortcuts</a></li>
<li><a href="http://www.opera.com/browser/tutorials/nomouse/">Using Opera without a mouse</a></li>
</ul>
<h3>Finally</h3>
<p>As I mentioned at the start I&#39;ve not covered every bit in detail; this you can find in the <a href="http://www.opera.com/support/kb/">Opera Knowledge database </a>and <a href="http://www.opera.com/support/">Support</a> sections of the site. We know we have some areas to work on and we are working to get these addressed. Particular areas I&#39;d like to see improved upon are screen reader support on Windows and Linux as well as more advanced keyboard accessibility.  Stay tuned for updates on that and in the meantime keep your feedback coming.</p>
