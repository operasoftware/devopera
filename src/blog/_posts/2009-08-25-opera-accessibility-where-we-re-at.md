---
title: 'Opera Accessibility: Where We’re At'
authors:
- henny-swan
tags:
- accessibility
license: cc-by-3.0
---

It wont be long until I've been at Opera a year during which time I've been exploring Opera's more obvious and less obvious accessibility features. As we look forwards at how we enhance the browser for better accessibility support for both users and developers creating accessible standards compliant websites, I thought I'd share with you some of my favorite bits.

This is not intended as a comprehensive overview of accessibility features - this can be found in the [Opera Support section](https://www.opera.com/support/) - but rather an overview of what I've learnt and really come to appreciate within Opera.

**Note:** Keyboard shortcuts are Mac ones with a full list of both Windows and Mac offered as the end of the article.

### Keyboard accessibility

#### 1. Spatial navigation

Rather than tab to move through links and elements in a page (and _Shift + Tab_ to go back) [Spatial Navigation](https://www.opera.com/browser/tutorials/nomouse/#nav) allows the user to move freely up and down or left and right by simply hitting _Shift_ then using the Arrow buttons (?, ?,?, ?). This means you are not restricted to linear tabbing and can navigate to content far quicker and efficiently on a page with less input.

This works really well if you use voice input or are restricted to keyboard only access as it means you don't have to repeat _tab_ over and over again. This can be crucial if you need to minimise physical movement if you have RSI or repeating the word 'Tab' if you are using voice. This is especially important when in drop down menus as you can quickly exit the list without cycling through all the options. Opera is the only browser that has native support for Spatial Navigation.

As an added bonus Spatial Navigation can trigger `:hover` styling and fire `onmuseover` and `onmouseout` events in Opera. While this is great for users designers shouldn't rely on `:hover` to convey information as support is not there in other browsers. If `:hover` is used also use `:active` (keeps mobile and Internet Explorer happy) and `:hover`. Note that `:hover` is not always handled well by mobile.

#### 2. Single key shortcuts

Opera has a set of [Single Key Shortcuts](http://help.opera.com/Windows/9.50/en/keyboard.html#single-key) that allow you to activate main functions without having to use any key combinations. To cycle through headings, for example, all you need to do it hit _S_ to move forward or _W_ to move back.

This is an obvious benefit to keyboard and voice input users but also for developers. I often use this feature to check the logical flow of my heading structure in a page and quickly navigate long documents.

We found that having Single Key Shortcuts activated by default confused many users who would hit keys by mistake and inadvertently trigger a change so you'll need to activate them yourself. To get them working go to _Preferences > Advanced > Shortcuts_ and check '_Enable single key shortcuts_'.

#### 3. Access keys

By pressing _Shift + Esc_ you can activate an [Access Key](https://www.opera.com/browser/tutorials/nomouse/#access) menu and view all access keys within a page. The beauty of this is that any conflicts with Opera's own shortcuts are avoided which makes designing and using the page much easier for the developer and user respectively.

#### 4. Mouse gestures

Using small movements of your mouse - left or right, with a right click or a left click - you can move forward and back in your history, reload pages, open new tabs, windows and more. Mouse Gestures are really useful it you prefer using a mouse or if you find it hard or move your mouse long distances across the screen to hit a button or can not use a mouse in combination with a keyboard.

Have a look at these and other keyboard access features in our tutorial on [using Opera without a mouse](https://www.opera.com/browser/tutorials/nomouse/) for full details on keyboard accessibility support.

### Screen reader support

#### 1. VoiceOver on Mac

Opera has good support for VoiceOver on Mac allowing the user to comfortably navigate within web pages using a Spatial Navigation. You can access links, lists of links and form elements within the page as well as carry out searches and comfortably read paragraphs of text.

One area that is lacking however is heading support as well as ARIA. While we can fix the heading support VoiceOver still has some improvements to make in ARIA support. As Steve Faulkner shows in his [ARIA role tests for Mac](http://www.paciellogroup.com/blog/aria-tests/ARIA-MACRoleTests.html),  while Opera 10 Alpha beats Safari by exposing 15 ARIA roles to i's 14 and Firefox's zero (on a Mac), overall support is almost non existent due to VoiceOver's lack of support of ARIA.

#### 2. Windows and Linux

Microsoft Active Accessibility is already available in Opera for Windows with[IAccessible 2](http://www-03.ibm.com/able/open_computing/open_source_windows.html) to follow. This means that current versions of Opera are not fully supported by screen readers on Windows. Getting screen reader vendors to work with us has prolonged the process for fixing this but we are working on it and I hope to be able to report back soon as this is a priority for us.

### Zooming

#### 1. Zooming

We were the first browser to implement Full page Zooming which means scaling up everything on the page and not just text. This has obvious benefits for when you need larger text to read but don't have, or need,  access technologies such as screen magnification or text-to-speech software. It's perfect also for sites that use fixed fonts and wont allow the user to scale text. You can zoom pages either via _View > Zoom_ or from the menu on the bottom right of the chrome.

#### 2. Small screen rendering

One of my personal favorites is Small Screen rendering which essentially reformats your content into a single column and removes some images and formatting. It works especially well together with a screen magnifier or page zoom as it removes large empty spaces that in turn lead to disorientation.

I've written in more detail about this in [zooming and removing horizontal scrolling in Opera](http://www.iheni.com/horizontal-scrolling-opera/). If you're a web developer small screen rendering gives you an idea of how your web page may render on mobile browsers, such as Opera Mobile, that support single column layouts.

#### 3. Full screen zoom

As with all modern browsers you can also opt for removing the chrome and having your web pages fill up the entire screen. Many people find this useful when wanting to do away with the many toolbar and menu options found on the browser shell. You can activate this by selecting View > Full Screen. Just hit _Esc_ to return the page to the browser shell.

### Customisation

To say we are all different as human beings is an understatement so customisation is essential to a smooth browsing experience.  It's difficult to ever know how any one person may want to customise the browser, as user testing will show you, but there are key things that we think need to be flexible. There are a number of options that can be found either in the Preferences Menu or quick shortcuts via the Quick Preferences menu. These can be found in the _Opera_ menu:

1. **Pop-up management.** You can block all pop-ups, certain pop-ups or set pop-ups to work in the background. This is ideal if you're using a screen reader and don't want to have your focus bumped off elsewhere unknowingly.
2. **Enable / Disable Animated images.** Animations can be distracting and cause difficulties when reading. Disabling them prevent unnecessary intrusions.
3. **Enable / Disable Sound in web pages.** Many sites tend to load with sound playing automatically. While in some cases this is expected on sites such as YouTube, this can be problematic when using a screen reader that can become drowned out by additional uninvited noise.
4. **Enable / Disable Java, plugins or JavaScript.** Java, plugins (such as Flash) and JavaScript can be made technically accessible (in most instances) to assistive technologies however the behaviour can confuse people's understanding of a page. A dynamically updating page that refreshes every 15 seconds can cause a screen reader user to lose where they are in the page if they are unable so stop the refresh.

Other customisation options available elsewhere include:

1. **Icons.** In Tools > Appearance > Skin you can choose the percentage size of your icons that appear on the browser chrome.
2. **Image.** Not everyone wants images, especially when on dial-up or low band-width. You can easily switch images of by either selecting no images on the icons on the Status bar at the bottom right of the browser, or by selecting  Preferences > Web page > Images and make your selection.
3. **Colours.** Again in _Tools > Appearance > Skin_ you can choose a different colours scheme.
4. **Fonts and colours.** Not all web pages will be styled however using Opera > Tools > Advanced > Fonts you can select your preferred fonts and styling for links

### User CSS

You can switch between two modes for viewing pages in Opera: 'A' and 'User'. 'Author' mode renders the page as the author intended it whilst 'User' mode allows you to choose how the page appears. This benefits almost any type of user who especially people who struggle to read on screen such as people with low vision or cognitive impairments, are elderly or have reading problems.

These options are designed to cater to different browsing preferences and enhance accessibility for the visually impaired. You can switch between 'Author' and 'User' modes with Shift+G or by selecting View > Style > Author mode or user mode.

### Technologies

As we constantly improve on how we deliver content online standards evolve and emerge. A key factor to making these standards work is ensuring that accessibility is at its core:

1. **WAI-ARIA.** Aria is widely expected to become a W3C specification this year. With all the major screen readers (Jaws, WindowEyes, NVDA, FireVox) working hard to support it as well as large and small sites alike implementing it ARIA is becoming an essential staple of the web which we are working to support.
2. **Scalable Vector Graphics.** Scalable Vector Graphics are graphics that do just that, scale. One of the drawbacks of scaling regular gif and jpeg images on the web is that they become distorted and blurred, this is especially a problem when the image is of text. With SVG however you get nice crisp images that retain all of their original sharpness. An example of SVG can be found in the form of a [world map on our Jobs page](https://www.opera.com/company/jobs/) (note this wont work in Internet Explorer which doesn't support SVG). This is a widely overlooked yet excellent way of avoiding using images of text that do not scale well, image maps and many uses of canvas. Opera was one of the first browsers to support some form of SVG from version 9.
3. **HTML5.** With its focus on providing application like functionality HTML5 is key. While the specification is not expected to be complete until 2022 it is possible to implement some parts of HTML5 now. Despite some issues around accessibility that are yet to be ironed out the premise of HTML5 is that accessibility is 'built in' rather than 'bolt on' so that through a combination of browser implementation and page author coding some of the accessibility issues we experience today should be dealt with seamlessly by the spec tomorrow.

For example, common practice today is to add skip links at the top of the page to allow the user to jump to key sections such as navigation and main content. With new structural elements introduced such as `<header>, <nav>, <article>, <section>, <aside> and <footer>` this work around becomes less necessary as these elements should provide additional navigation. See the [shelf life of a skip link](http://www.iheni.com/the-shelf-life-of-a-skip-link/) for details on this.

### Accessibility layout

The accessibility layout has most text formatting disabled and replaced by basic formatting. Font size, word, letter, and line spacing are increased and the page width is limited. A lime green background gives good contrast with black text and linked images are outlined by a black border. Links are also outlined in a blue box when tabbed onto for better visibility.

You can switch to the Accessibility Layout via _View > Style > Accessibility_ layout.

### Table of keyboard shortcuts

<figure block="figure">
	<table>
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
</figure>

- [Full list of Windows shortcuts](http://help.opera.com/Windows/9.50/en/keyboard.html)
- [Using Opera without a mouse](https://www.opera.com/browser/tutorials/nomouse/)

### Finally

As I mentioned at the start I've not covered every bit in detail; this you can find in the [Opera Knowledge database ](https://www.opera.com/support/kb/) and [Support](https://www.opera.com/support/) sections of the site. We know we have some areas to work on and we are working to get these addressed. Particular areas I'd like to see improved upon are screen reader support on Windows and Linux as well as more advanced keyboard accessibility.  Stay tuned for updates on that and in the meantime keep your feedback coming.
