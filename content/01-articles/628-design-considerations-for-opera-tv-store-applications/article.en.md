Title: Design considerations for Opera TV Store applications
----
Date: 2012-02-09 17:12:03
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<ul class="toc">
<li><a href="#introduction">Introduction</a></li>
<li><a href="#checklist">Quick checklist</a></li>
<li><a href="#context">Potential of the TV context</a></li>
<li><a href="#distance">User distance</a></li>
<li><a href="#resolution_overscan">Resolution and overscan</a></li>
<li><a href="#layout">Layout</a>
	<ul>
		<li><a href="#layout_examples">Examples</a></li>
	</ul></li>
<li><a href="#navigation">Navigation</a>
	<ul>
		<li><a href="#back_key">The <kbd>BACK</kbd> key</a></li>
		<li><a href="#shortcuts">Shortcuts</a></li>
	</ul></li>
<li><a href="#input">Text input</a></li>
<li><a href="#responsiveness">Responsiveness</a></li>
<li><a href="#privacy">Privacy</a></li>
</ul>

<h2 id="introduction">Introduction</h2>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/tvstore.png" alt="The Opera TV Store" /></p>
<p class="comment">The Opera TV Store dashboard</p>
</div>

<p>The Opera TV Store offers a platform for delivering HTML5-based applications to customers on TV.</p>

<p>Although TV Store applications are, in essence, nothing more than web pages, there are certain design considerations related to the TV context in general, and the Opera TV Store model in particular, that developers need to take into consideration.</p>

<h2 id="checklist">Quick checklist</h2>

<p>This is a summary of our recommendations for an optimised TV Store application experience:</p>

<ul>
    <li>Less is more – TV screen may be big, but are usually viewed from a greater distance.</li>
     <li>For best legibility and usability, use sans-serif fonts at a size of at least 22px and make your selectable elements at least 34px in height.</li>
    <li>Make sure your application works at a size of 1216×684px (leaving a 5% margin on the Opera TV Store&#39;s resolution of 1280×720 to account for <a href="#resolution_overscan">overscan</a>).</li>
    <li>Make everything accessible with the standard remote control keys: <kbd>UP</kbd>, <kbd>RIGHT</kbd>, <kbd>DOWN</kbd>, <kbd>LEFT</kbd> and <kbd>BACK</kbd> – other keys (specifically, the color keys found on most connected TVs and devices) are optional and should only be used as shortcuts.</li>
    <li>Ensure that the highlight/outline that indicates the currently selected element is clearly visible at all times.</li>
    <li>Avoid the need for the user to enter text.</li>
    <li>Make an application feel more responsive by giving quick feedback to the user actions.</li>
</ul>

<h2 id="context">Potential of the TV context</h2>

<p>The context of use of a TV is very different from the one for desktop computers or mobile phones. When you make an application for TV you should consider that:</p>

<ul>
    <li>TV is mostly used for entertainment and relaxation. Users prefer to avoid too much interaction or decision making.</li>
    <li>The TV is located far from the user and the only means of interaction is the remote control.</li>
    <li>TV interfaces resemble mobile interfaces because of the simplicity, however, TV interaction has to be modified to work with the remote control (4 key navigation).</li>
    <li>Unlike other devices, TVs are social devices where privacy is very limited.</li>
    <li>The strength of TV is in beautifully  displaying big images, videos and sound. Your application should take advantage of these strengths.</li>
</ul>

<h2 id="distance">User distance</h2>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/10feetUx2.png" alt="10-feet UX" /></p>
<p class="comment">10-feet user experience: A user sits 10 feet away from the TV.</p>
</div>

<p>TV interfaces are also known as 10-foot user interfaces because 10 feet (3m) is the aproximate distance that users will sit from the TV. For designers, this means that the &quot;big screen&quot; cannot really be considered &quot;big&quot; but that you have to keep the same considerations that you have when making a mobile application:</p>

<ul>
    <li>All application elements and text need to be bigger than those
    used for computers. We recommend a minimum text size of 22px, though you may be able to go as low as 18px if your design does not accommodate a bigger font. Considering that you need approximately 10px of padding for your buttons, we recommend them to be of a minimum size of 34px height.</li>
    <li>Fonts should be big and clean. We recommend using simple sans-serif fonts.</li>
    <li>More empty space is needed between elements to avoid items blending into each other from a distance and creating clutter.</li>
    <li>There should be enough contrast between the background and the
    application elements. This is especially important when you use a
    fullscreen photo as a background.</li>
    <li>When items are selected, the highlight should be visible and clear so that there is never any doubt what is selected.</li>
    <li>Light content on a darker background is usually easier to read/view on a TV.</li>
    <li>Do not be tempted to think that a bigger screen means that you can include more content. Less is more. Only include relevant content, and keep the amount of content on each screen to a minimum. </li>
</ul>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/comparisonTvMobile.png" alt="TV viewer" /></p>
<p class="comment">A TV in the distance is not much bigger than a close mobile screen.</p>
</div>

<p>Although TVs are similar in perceived size to a mobile device, it is not enough to take the design of a mobile application and expect it to always work well on a TV:</p>

<ul>
    <li>The mobile screen can be vertical and horizontal; a TV is only horizontal and, in some cases, widescreen.</li>
    <li>By being far away and controlled by a 4-way remote, all interactions made for touchscreen have to be reviewed and designed.</li>
</ul>

<h2 id="resolution_overscan">Resolution and overscan</h2>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/overscan.png" alt="TV viewer" /></p>
<p class="comment">If you don&#39;t consider the overscan, part of your application will be out of the screen.</p>
</div>

<p>The Opera TV Store runs at a resolution of 1280×720px. However, due to overscan, you should ensure that your application works and displays correctly at a size of 1216×684px.</p>
<p> All of today&#39;s TV sets have a certain amount of overscan, meaning that margins of your application are shown outside the visible area of the TV. While it is possible for users to turn off overscan, it is better to design your application with this invisible margin in mind, as most users are likely unaware of this option. The overscan amount varies between TV sets but it is advisable to assume that a 5% margin might not
be visible to the user.</p>

<p>We recommend that you test your applications with overscan both turned on and off.</p>

<h2 id="layout">Layout</h2>
<p>The layout of a TV application should be simple:</p>

<ul>
    <li>The best position for the menu elements is on the top or the left side.</li>
    <li>Keep the layout as simple as possible: menu and container (list, grid, one item, etc).</li>
     <li>Keep all related functionality and information together. For     example, if you have information about a game score, keep all those in the same side / corner instead of scattering them around the screen or grouping them with other elements that are not relevant.</li>
     <li>Remember the basics of graphic design and review that your applications follow them: alignment, proximity, balance, consistency, contrast and whitespace.</li>
</ul>

<h3 id="layout_examples">Examples</h3>
<p>To design the layout for your application, we recommend to have a maximum of two groups of items on the screen: the menu and the content. You can also have the menu in its own screen and dedicate your entire screen to the content.</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/layout-justContent.png" alt="TV app with only  content" /></p>
<p class="comment">Example of a TV app where the menu is on a separate screen</p>
</div>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/layout-horizontal.png" alt="TV app horizontal" /></p>
<p class="comment">Example of a TV app with horizontal layout</p>
</div>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/layout-vertical.png" alt="TV app vertical" /></p>
<p class="comment">Example of a TV app with vertical layout</p>
</div>

<h2 id="navigation">Navigation</h2>

<p>TV users are usually limited to a simple four-way spatial navigation (<kbd>UP</kbd>, <kbd>RIGHT</kbd>, <kbd>DOWN</kbd>, <kbd>LEFT</kbd>) with a regular remote.</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/remote.jpg" alt="TV remote" /></p>
<p class="comment">Everything should be accessible with the directional keys, <kbd>OK</kbd> and <kbd>Exit</kbd> (also labelled <kbd>BACK</kbd> on certain remotes)</p>
</div>

<p>Although all-purpose web browsers on connected TVs may support a combination of spatial navigation and the use of a virtual mouse pointer, only spatial navigation is supported in the Opera TV Store.</p>

<p>You should strive to make navigation as simple as possible. Navigation usually works best with a rectangular/list design, where it is very clear which item is above/below, and to the left and right, of the selected item. Avoid navigation that requires users to jump diagonally to another item.</p>

<p>Avoid mixing vertical and horizontal navigation. It is better to rely solely on either horizontal or vertical columns, rather then mixing the two. Avoid putting content that is critical for user navigation at the top, or at the end, of a list; otherwise, users may be forced to go through the list to select it.</p>

<p>Horizontal navigation is often preferable because of the TV&#39;s landscape orientation and aspect ratio, but this will depends on the application.</p>

<p>Try to avoid elements that need to be enabled or clicked first before being able to interact with them. For example, do not make a list that you need to click first to be able to navigate through it. If you have an element that contains sub-elements (for example, in a list) make it visually obvious that you need to click the item first, before you can select sub-elements.</p>

<h3 id="back_key">The <kbd>BACK</kbd> key</h3>
<p>The <kbd>BACK</kbd> key on the remote control works just like it does in a desktop browser. Users will be familiar with this key and expect it to bring them to the previous screen of the application. If needed, you can still provide a visible back button in the application.</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/back.png" alt="TV app navigation flow" /></p>
<p class="comment">Navigation between screens using the <kbd>BACK</kbd> key</p>
</div>

<p>The ultimate goal of the <kbd>BACK</kbd> key is to take you out of the application. If possible, the application should save the current state and quit but, if this is not possible the<kbd>BACK</kbd> key should bring forward a dialog asking if the application should continue or quit.</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/quitGame.png" alt="TV app menu" /></p>
<p class="comment"><kbd>BACK</kbd> key pressed when playing a game that cannot be stopped</p>
</div>

<p>This also has some implications in the structural design of your TV application:</p>

<ul>
    <li>TV applications should be simple, and this should also be reflected in the structure and complexity. Try not to make an application that has more than 3 levels of depth. If needed, make more menu elements.</li>
    <li>If your application has more than 3 levels of complexity, it is even more important that the menu or the menu items are visible at all times.</li>
    <li>Don&#39;t forget to include an &quot;Exit&quot; item in the menu.</li>
</ul>

<h3 id="shortcuts">Shortcuts</h3>
<p>We recommend that all functionality is accessible with normal navigation using the directional keys. Color keys should be considered as &quot;nice to have&quot; shortcuts. Most people don&#39;t bother learning shortcuts, and, depending on the particular remote control used, the color keys may not actually be located at a convenient position.</p>

<p>Color-key shortcuts are good to have in situations when you have an action that you are likely to do often but that might require many clicks to get to. This, however, also means that it is not always best to use all of the color keys, as users are more likely to remember one or two of them but not all four. Keeping all four shortcuts might mean the users don&#39;t learn any of them. How many you use will depend on each application.</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/shortcuts.png" alt="TV app with shortcut key legend" /></p>
<p class="comment">Example of the placement for a shortcut key legend</p>
</div>

<h2 id="input">Text input</h2>

<p>Historically, TVs have required very little interaction other than changing channels or volume settings. Even if remotes are becoming more advanced, they are still relatively primitive and are rarely optimized for text input.</p>

<div>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/628-design-considerations-for-opera-tv-store-applications/remote2.jpg" alt="TV Remote" /></p>
<p class="comment">A remote control uncomfortably close to the TV</p>
</div>

<p>Some TVs are shipped with external keyboards, but users are most likely to just be using the remote control. We recommend designing your application in such a way that avoids the need for text input as much as possible. Here are a few suggestions:</p>

<ul>
	<li>Provide viewing content suggestions to the user rather than relying on searching.</li>
	<li>Make it possible to navigate to content through logical categories.</li>
	<li>Always include &quot;smart&quot; autocompletion in search/edit fields, if this is possible.</li>
	<li>Let the user choose to stay in a logged-in state in applications that require login. This option could be given as a pre-selected &quot;Keep me logged in&quot; checkbox on the login screen.</li>
</ul>


<h2 id="responsiveness">Responsiveness</h2>
<p>TVs are still running on relatively low-end hardware. TV remotes are also still relatively unresponsive. This makes it extremely important that your applications feel as responsive as possible, to avoid creating an additional bottleneck. Here are a few things to keep in mind:</p>
<ul>
	<li>Make selection highlighting very visible, so the viewer never needs to spend time looking for it.</li>
	<li>Always include some kind of progress indicator if the operation is not instant.</li>
	<li>Make sure animation is not at the expense of performance. If an animation is not smooth, or adds a performance bottleneck, disable it.</li>
	<li>Always give feedback to a user action by changing the state of the affected element, showing a loading indicator, or using sounds.</li>
</ul>

<p>We highly recommend that you test your application on an actual
TV.</p>

<h2 id="privacy">Privacy</h2>
<p>Mobile phones are personal devices that are not commonly shared. Desktop computers can be shared, but the operating system provides interfaces to change the currently active user, and the device is mostly used by one person at a time. TVs are social devices, placed in a common location of the house and too big to cover if you want to hide some information. This has implications for TV application design:</p>

<ul>
	<li>In most cases, users will not want to type their personal information on a TV application, especially if this is sensitive information such as passwords or credit card numbers. For these services, allow users to create their accounts on the desktop version of your website and make it easy to link their accounts to the TV application.</li>
	<li>Allow users to clean their viewing history easily.</li>
	<li>Plan your applications for concurrent use and interaction by multiple people (e.g. multiplayer games,  adding items to a shared playlist)</li>
</ul>
