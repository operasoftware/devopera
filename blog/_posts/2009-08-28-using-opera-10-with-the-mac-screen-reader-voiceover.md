---
title: Using Opera 10 with the Mac screen reader VoiceOver
authors:
- henny-swan
tags:
- accessibility
- VoiceOver
- screenreader
- blog
layout: article
---
<p>Support for the Mac native screen reader <a href="http://www.apple.com/accessibility/voiceover/">VoiceOver</a> was added to Opera in version 9.5. This is a quick overview explaining what you can access using VoiceOver with Opera. I&#39;m hoping it will be of use to people with screen readers and developers debugging content alike.</p>

<p>Before you get started, if you&#39;re not already familiar with keyboard access in Opera, it&#39;s worth having a read of <a href="http://www.iheni.com/opera-accessibility-where-were-at/">Opera accessibility: where we&#39;re at</a>. I&#39;ll cover what you need to know here but article is good for background information.</p>

<p>Huge thanks go out to <a href="http://twitter.com/vick08">Victor Tsaran</a> over at Yahoo! who gave me some great feedback while I was testing as well as Jon Gibbons (<a href="http://twitter.com/dotjay">Dotjay</a>) who rustled up an <a href="http://lab.dotjay.co.uk/notes/voiceover-commands/">accessible table of VoiceOver commands</a> and <a href="http://twitter.com/alastc">Alastair Campbell</a> who pointed me to his <a href="http://alastairc.ac/notes/osx/voiceover/voiceover-basics/">overview of VoiceOver</a>.</p>
<h3>Setting up keyboard access on OSX</h3>
<p>Mac is odd as it requires that you <a href="http://support.apple.com/kb/HT2840">switch on full keyboard access</a> and optimise it for access technology before you can truly get started. Fortunately however it&#39;s pretty simple to set up:</p>
<ol>
	<li>Open System Preferences.</li>
	<li>Click Keyboard and Mouse.</li>
	<li>Select the Keyboard shortcuts tab.</li>
	<li>Ensure the &quot;Turn full keyboard access on or off&quot; option is checked.</li>
</ol>
<p>Next:
<ol>
<li> Open Universal Access within System Preferences.</li>
	<li>Check &quot;Enable access for assistive devices&quot;.</li>
</ol>
<a href="http://www.iheni.com/wordpress/wp-content/uploads/2009/07/macpreferences.png"><img class="size-medium wp-image-1529" src="http://www.iheni.com/wordpress/wp-content/uploads/2009/07/macpreferences-300x271.png" alt="System Preferences in Mac with Keyboard shortcuts selected and &amp;quot;Turn full keyboard access on or off&amp;quot; highlighted" width="300" height="271" /></a>
<h3>Setting up keyboard access in Opera</h3>
<p>Once Mac is set up you&#39;ll then need to check Opera is ready for keyboard access:</p>
<ol>
<li>Choose Opera &gt; Preferences.</li>
	<li>Click Advanced.</li>
	<li>Select Shortcuts in the list of settings.</li>
	<li>Check the “Enable single-key shortcuts” checkbox.</li>
</ol>
<h3>Basic VoiceOver keyboard commands</h3>
<p>With keyboard access set up in Mac and Opera you&#39;re ready to go. These are the basic VoiceOver commands you need to start interacting with the browser chrome and HTML content. Note that “VoiceOver keys” (or VO), means the Ctrl and Option keys pressed together.</p>
<ol>
	<li><strong>Toggle VoiceOver on or off </strong>- Cmd + F5.</li>
	<li><strong>Navigate around the chrome</strong> - VO + Cmd + Shift and Arrow keys.</li>
	<li><strong>Interact the HTML content</strong> - VO + Shift + down arrow (↓).</li>
	<li><strong>Interact with the browser chrome</strong> - VO + Shift + up arrow (↑).</li>
	<li><strong>Navigate content </strong>(Spatial Navigation, see below) - Shift+ Up, Down, Left or Right arrow.</li>
	<li><strong>Tab through form elements</strong> - TAB / Shift+TAB.</li>
</ol>
<h3>Basic Opera keyboard commands</h3>
<p>When using Opera you can do more than just tab linearly around the page as you would in other browsers. The TAB key only picks up form elements allowing you quick and easy access to forms by jumping over other content. To access all content on a web page you can then use the following:</p>
<ul>
<li><strong>Spatial Navigation</strong> - By holding down Shift + left, up, right and down arrows (← ↑ → ↓), you can move up down, left right and across the page. The pus side of this is that you don&#39;t have to laboriously tab though linear content.</li>
	<li><strong>Single key shortcuts</strong> - One you have enabled Single Key Shortcuts (see &#39;Setting up keyboard access in Opera&#39; above) you can simply use &#39;S&#39; and &#39;W&#39; to move forward and backwards through headings and &#39;A&#39; and &#39;Q&#39; to do the same with links. Check out the navigating headings, links, page elements, images, tabs and zooming section below for more details.</li>
</ul>
<p>The important thing to remember is that while VoiceOver has it&#39;s own keyboard commands for accessing headings and links often navigation works better if  Opera Single Key Shortcuts and Spatial Navigation is used.  Single key shortcuts can also be customised either via the Preferences (In  Advanced &gt; Shortcuts &gt; Keyboard setup then Edit) or by <a href="http://operawiki.info/EditingINIFiles">changing the .ini files</a>.</p>
<h3>Preferences</h3>
<p>Before you start browsing you&#39;ll most likely want to customise how you browse using Preferences.  Using VoiceOver you should be able to configure content, security, shortcuts, tabs etc using the following commands:</p>
<ul>
<li><strong>Open Preferences</strong> - Cmd+Comma (,).</li>
	<li><strong>Tab through all content </strong>(including switching between tabs) -  Ctrl+Alt+ Right, Left, Up or Down arrow keys.</li>
	<li><strong>To interact with a list</strong> -  Shift+Ctrl+Alt+Down.</li>
	<li>Cycle through lists - Arrow keys.</li>
	<li><strong>Access  highlighted list item</strong> -  Ctrl+Alt+Right, Left, Up or Down arrow keys.</li>
</ul>
<img class="size-medium wp-image-1527 " src="http://www.iheni.com/wordpress/wp-content/uploads/2009/07/operapreferences-300x225.png" alt="The Preferences screen showing Shortcuts highlighted in the Advanced tab with Enable Single Key Shortcuts selected" width="300" height="225" />
<h3>Reading text</h3>
<p>You can read what you like when you like using the following keyboard commands:</p>
<ul>
	<li><strong>Read content</strong> - VO + A.</li>
	<li><strong>Stop reading </strong>- Ctrl.</li>
	<li><strong>Navigate through paragraphs, headings, and elements - </strong>Single key shortcut &#39;D&#39; (forward) or &#39;E&#39; (backward).</li>
</ul>
<h3>Navigating headings, links, page elements, images, tabs and zooming</h3>
<p>As mentioned above all elements can be accessed using either Spatial Navigation (Shift+Arrow keys) or single key shortcuts.</p>

<p>What follows is a list of main keyboard shortcuts. Where I have said &quot;Navigate to get VO feedback&quot; it means the function can be carried out but VoiceOver does not give feedback. Instead you need to start navigating in order to hear feedback.,</p>
<table border="1" width="651">
<thead>
<tr>
<th width="311">Function and comments</th>
<th width="113">Single-Key Shortcut</th>
<th width="205">Comments</th>
</tr>
</thead>
<tbody>
<tr>
<td>Switch to previous tab on tab bar</td>
<td>1</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Switch to next tab on tab bar</td>
<td>2</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Restore zoom to 100%</td>
<td>6</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Zoom out by 100%</td>
<td>7</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Zoom in by 100%</td>
<td>8</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Zoom out by 10%</td>
<td>9</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Zoom in by 10%</td>
<td>0</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Cycle through links in page</td>
<td>A and Q</td>
<td>Works as expected</td>
</tr>
<tr>
<td>Cycle through headers in page</td>
<td>S and W</td>
<td>Works as expected</td>
</tr>
<tr>
<td>Cycle through elements in page</td>
<td>D and E</td>
<td>Recommended to hit D/E a second time to get VO feedback</td>
</tr>
<tr>
<td>Toggle between author mode and user mode</td>
<td>Shift + G</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Address bar history drop-down</td>
<td>H</td>
<td>Works as expected</td>
</tr>
<tr>
<td>Load and display all images</td>
<td>I</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Toggle loading of images</td>
<td>Shift + I</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Forward</td>
<td>X</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Fast forward</td>
<td>Shift + X</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Back</td>
<td>Z</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Rewind</td>
<td>Shift + Z</td>
<td>Navigate to get VO feedback</td>
</tr>
</tbody></table>
<p>I&#39;m not familiar enough with VoiceOver as a technology but I&#39;m told by our engineers that occasionally things lack feedback because it is hard to see what should be spoken and can be recognised. For example VoiceOver seems to have no concept of zoom level for instance.</p>

<p>I wonder also if this is because VoiceOver has been built with Safari in mind. Reading through the documentation you certainly get that impression. That said there is definitely more fine-tuning that we want to do our end.</p>
<h3>Forms</h3>
<p>As mentioned briefly above navigating forms on web pages is done using the Tab key.</p>
<ul>
	<li><strong>Move forwards/backward through form elements</strong> - Tab / Shift+Tab</li>
	<li><strong>Select</strong> - Space bar</li>
	<li><strong>Activate</strong> - Enter</li>
</ul>
<h3>Item List Chooser</h3>
<p>The Item List Chooser in VoiceOver literally lists - in a keyboard navigable popup - all items available in a page or via the chrome.  This is great if you want to get an overview of everything that&#39;s going on.</p>

<p>Everything is listed alphabetically and by typing the first letter or more you&#39;ll automatically get taken to where you want. If you&#39;re a developer this is a good way of seeing what is and what isn&#39;t accessible.</p>
<ul>
	<li><strong>List items in a page or in the chrome</strong> - VO + I</li>
	<li><strong>Navigate the lists</strong> - Arrow keys.</li>
	<li><strong>Escape</strong> - ESC</li>
	<li><strong>Return to the chrome</strong> - VO + Shift + up arrow (↑)</li>
	<li><strong>Return to HTML content</strong> -  VO+Shift+down arrow (↓)</li>
</ul>
<h3>WAI-ARIA</h3>
<p>While Opera is working on WAI-ARIA support I haven&#39;t found much information regarding VoiceOver support of  WAI-ARIA. VoiceOver is not listed on the <a href="http://wiki.codetalks.org/wiki/index.php/Who_Supports_WAI-ARIA">Codetalks ARIA support</a> page however Steve Faulkner has done some <a href="http://www.paciellogroup.com/blog/aria-tests/ARIA-MACRoleTests.html">ARIA role tests on MAC</a> with Safari 4 beta, Firefox 3 (minefield) and  Opera 10 Alpha and results show that 14 or 50 ARIA roles are exposed on Mac (Firefox exposes 0 and Safari exposes 15).</p>

<p>Update 30 July, 09 - Alex Jurgensen has very kindly pointed out a <a href="http://wiki.codetalks.org/wiki/index.php/Set_of_ARIA_Test_Cases">set of ARIA test cases</a> on Codetalks that cover VoiceOver. This gives a good overview of where VoiceOver is at however Opera is yet to be added.</p>

<p>It&#39;s early days for Opera and WAI-ARIA support so this is a section I will return to soon rather than give too much time to now.</p>
<h3>Known quirks and feedback</h3>
<p>You should be able to comfortably navigate most content in web pages if you are familiar with Opera&#39;s keyboard navigation setup and shortcuts.</p>

<p>There are some areas of the chrome that you can&#39;t reach however there are keyboard shortcuts to access all the main options and features you should need. I did find also that at times navigating out of HTML content was sticky so I&#39;d switch to using VO + Shift + Cmd + Up arrow and it would take me up to a toolbar.</p>

<p>We are obviously always looking to improve on what we have so if you have feedback or questions please leave a comment and I&#39;ll answer as best I can.</p>
<h3>Summary of keyboard shortcuts</h3>
<p>Below is a list of the keyboard commands I&#39;ve referenced in this article. I&#39;ll be adding in further comments based on feedback where necessary.</p>
<table border="1" width="651">
<thead>
<tr>
<th width="311">Function and comments</th>
<th width="113">Keyboard command</th>
<th width="205">Comments</th>
</tr>
</thead>
<tbody>
<tr>
<td>Toggle VoiceOver on / off</td>
<td>Cmd + F5</td>
<td>NA</td>
</tr>
<tr>
<td>Interact with the HTML content</td>
<td>VO + Shift + down arrow (↓)</td>
<td>NA</td>
</tr>
<tr>
<td>Interact with the browser chrome</td>
<td>VO + Shift + up arrow (↑)</td>
<td>NA</td>
</tr>
<tr>
<td>Navigate content</td>
<td>Shift+ Up, Down, Left or Right arrow</td>
<td>NA</td>
</tr>
<tr>
<td>Read content</td>
<td>VO + A</td>
<td>NA</td>
</tr>
<tr>
<td>Stop reading content</td>
<td>Ctrl</td>
<td>NA</td>
</tr>
<tr>
<td>Move forwards/backward through form elements</td>
<td>Tab / Shift+Tab</td>
<td>NA</td>
</tr>
<tr>
<td>Select</td>
<td>Space bar</td>
<td>NA</td>
</tr>
<tr>
<td>Activate</td>
<td>Enter</td>
<td>NA</td>
</tr>
<tr>
<td>List items in a page or in the chrome</td>
<td>VO +  I</td>
<td>NA</td>
</tr>
<tr>
<td>Navigate the lists</td>
<td>Arrow keys</td>
<td>NA</td>
</tr>
<tr>
<td>Switch to previous tab on tab bar</td>
<td>1</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Switch to next tab on tab bar</td>
<td>2</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Restore zoom to 100%</td>
<td>6</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Zoom out by 100%</td>
<td>7</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Zoom in by 100%</td>
<td>8</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Zoom out by 10%</td>
<td>9</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Zoom in by 10%</td>
<td>0</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Cycle through links in page</td>
<td>A and Q</td>
<td>NA</td>
</tr>
<tr>
<td>Cycle through headers in page</td>
<td>S and W</td>
<td>NA</td>
</tr>
<tr>
<td>Cycle through elements in page</td>
<td>D and E</td>
<td>Recommended to hit D/E a second time to get VO feedback</td>
</tr>
<tr>
<td>Toggle between author mode and user mode</td>
<td>Shift + G</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Address bar history drop-down</td>
<td>H</td>
<td>NA</td>
</tr>
<tr>
<td>Load and display all images</td>
<td>I</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Toggle loading of images</td>
<td>Shift + I</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Forward</td>
<td>X</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Fast forward</td>
<td>Shift + X</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Back</td>
<td>Z</td>
<td>Navigate to get VO feedback</td>
</tr>
<tr>
<td>Rewind</td>
<td>Shift + Z</td>
<td>Navigate to get VO feedback</td>
</tr>
</tbody></table>
<h3>Links and things</h3>
<ul>
	<li><a href="http://www.iheni.com/opera-accessibility-where-were-at/">Opera accessibility</a> - where we&#39;re at.</li>
	<li><a href="http://help.opera.com/Windows/9.50/en/keyboard.html">Keyboard shortcuts in Opera</a> - comprehensive overview on how to use Opera via just the keyboard.</li>
	<li><a href="http://www.google.co.uk/url?sa=t&amp;amp;source=web&amp;amp;ct=res&amp;amp;cd=1&amp;amp;url=http%3A%2F%2Fimages.apple.com%2Fsupport%2Ftiger%2Fvoiceover%2FVoiceOver_Commands_Color.pdf&amp;amp;ei=mo9kSv-PEuLOjAeUjOz6Dw&amp;amp;usg=AFQjCNFi6BeJy-Rl5SUb8jD4m-1Iuh-dqg&amp;amp;sig2=ksDmEHS8l4_m7uI35iAPkQ">VoiceOver commands (PDF)</a> - Apple&#39;s overview of VoiceOver commands presented as you&#39;d see the commands on a keyboard.</li>
	<li><a href="http://lab.dotjay.co.uk/notes/voiceover-commands/">VoiceOver commands</a> - brought to you by Jon Gibbons in an accessible data table.</li>
	<li><a href="http://alastairc.ac/notes/osx/voiceover/voiceover-basics/">VoiceOver 1: Basics</a> - from Alastair Campbell.</li>
</ul>
</p>
