Title: Opera Skinning part 4: skin.ini element reference
----
Date: 2008-06-20 14:00:49
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">9th October 2012: This article is obsolete</h2>

<p>Opera 12 and above support a new, simplified form of skinning. See our tutorial on <a href="http://dev.opera.com/articles/view/operas-lightweight-themes/">how to make themes (skins) for Opera</a>.</p>
</div>

<p>pages: <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/">1/5: Introduction, general explanations</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">2/5: Skinning examples</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">3/5: Skin.ini explained</a> &#8212; 4/5: skin.ini element reference &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-5-tips-and-tricks/">5/5: tips &amp; tricks</a></p>

<h2>Introduction</h2>

<p>This article lists all the different sections inside <em>skin.ini</em>, and defines which elements inside the UI these sections control. On the screenshots the element is either completly red or marked by a red border, to allow you to see what elements I am talking about more easily.</p>

<h3 id="accountskin">[Account Skin]</h3>
<p>Not used in Opera 9.5.</p>

<h3 id="activeelementinsideinverse">[Active Element Inside Inverse]</h3>
<p>Specifies the inner corners of the border around focused elements when several areas form a focused region. While a box only needs the normal 4 corners more complex elements need the extra 4 corners.</p>
<p>This element should not be changed for consistency across skins as it&#8217;s an essential element for keyboard users; changing it might cause severe problems for them!</p>

<h3 id="activeelementinsideimage">[Active Element Inside Image]</h3>
<p>Not a skin element; only provides images for <a href="#activeelementinside"><code>[Active Element inside]</code></a>.</p>

<h3 id="activeelementoutside">[Active Element Outside]</h3>
<p>Specifies the border around focused elements if the element is located at the edge of the viewport.</p>
<p>This element should not be changed for consistency across skins as it&#8217;s an essential element for keyboard users; changing it might cause severe problems for them!</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_activeelementoutside.png" alt="Active element outside" /></p>

<h3 id="activeelementinside">[Active Element Inside]</h3>
<p>Specifies the border around focused elements.</p>
<p>This element should not be changed for consistency across skins as it&#8217;s an essential element for keyboard users and changing it might cause severe problems for them!</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_activeelementinside.png" alt="Active element inside" /></p>

<h3 id="addressdropdowntitlelabel">[Address DropDown Title Label]</h3>
<p>Specifies the text color of the pages title in address field dropdown. Only &#8220;Text Color&#8221; can be specified.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_addressdropdowntitlelabel.png" alt="Address drop down title label" /></p>

<h3 id="addressdropdownurllabel">[Address DropDown URL Label]</h3>
<p>Specifies the text color of the pages address in address field dropdown. Only &#8220;Text Color&#8221; can be specified.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_addressdropdownurllabel.png" alt="Address drop down URL label" /></p>

<h3 id="addressbarskin">[Addressbar Skin]</h3>
<p>Specifies the background of the address bar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_addressbarskin.png" alt="Address bar skin" /></p>

<h3 id="boxes">[Boxes]</h3>
<p>Not an element, but this groups elements &#8212; see <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">Skin.ini explained</a> for more details.</p>

<h3 id="browserskin">[Browser Skin]</h3>
<p>Specifies a border around websites to distinguish the site from the user interface. For this item <code>Padding Right</code> should be set to 0 so the user can just move his mouse pointer to the very right of the screen to use the scrollbar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_browserskin.png" alt="Browser skin" /></p>

<h3 id="browserwindowskin">[Browser Window Skin]</h3>
<p>Specifies the browser window including many toolbars, unless they&#8217;re specified seperately which is the case in Opera 9.5.</p>

<h3 id="captionclosebuttonskin">[Caption Close Button Skin]</h3>
<p>Specifies the close button shown in the upper right corner (or left on Mac) when close buttons on tabs are disabled.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_captionbuttonskin.png" alt="Caption close button skin" /></p>

<h3 id="captionminimizebuttonskin">[Caption Minimize Button Skin]</h3>
<p>Specifies the minimize button shown in upper right corner (or left on Mac) when close buttons on tabs are disabled.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_captionbuttonskin.png" alt="Caption minimize button skin" /></p>

<h3 id="captionrestorebuttonskin">[Caption Restore Button Skin]</h3>
<p>Specifies the restore button shown in the upper right corner (or left on Mac) when close buttons on tabs are disabled.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_captionbuttonskin.png" alt="Caption restore buttton skin" /></p>

<h3 id="chatbarskin">[Chatbar skin]</h3>
<p>Specifies the background of the chat toolbar which is shown at the top of chat window.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_chatbarskin.png" alt="Chat bar skin" /></p>

<h3 id="checkboxskin">[Checkbox Skin]</h3>
<p>Specifies the checkboxes used in the UI and websites, unless the website specifies another style.</p>
<p>States: <code>.hover</code>, <code>.pressed</code>, <code>.selected</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_checkboxskin.png" alt="Check box skin" /></p>

<h3 id="contentblocktoolbarskin">[Content Block Toolbar Skin]</h3>
<p>Specifies the toolbar shown at the top of the active tab when in content block mode, which can be accessed from a page&#8217;s context menu.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_contentblocktoolbarskin.png" alt="Content block toolbar skin" /></p>

<h3 id="cyclerbuttonskin">[Cycler Button Skin]</h3>
<p>Specifies the background surrounding the thumbnails in the tab cycle dialog (Ctrl + Tab) if thumbnails are enabled.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_cyclerbuttonskin.png" alt="Cycler button skin" /></p>

<h3 id="cyclerpagebuttonskin">[Cycler Page Button Skin]</h3>
<p>Specifies the page buttons in the tab cycle dialog.</p>
<p>States: <code>.selected</code>, <code>.attention</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_cyclerpagebuttonskin.png" alt="Cycler page button skin" /></p>

<h3 id="cyclerpagesskin">[Cycler Pages Skin]</h3>
<p>Specifies the area holding the <a href="#cyclerpagebuttonskin"><code>[Cycler Page Button Skin]</code></a> items in the tab cycle dialog.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_cyclerpagesskin.png" alt="Cycler pages skin" /></p>

<h3 id="cyclerwindowskin">[Cycler Window Skin]</h3>
<p>Specifies the whole page cycle dialog.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_cyclerwindowskin.png" alt="Cycler window skin" /></p>

<h3 id="detailedpaneltreeviewskin">[Detailed Panel Treeview Skin]</h3>
<p>Specifies the background of treeviews in maximized panels, eg &#8220;Tools &gt; History&#8221;, &#8220;Tools &gt; Contacts&#8221;, etc.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_detailedpaneltreeviewskin.png" alt="Detailed panel tree view skin" /></p>

<h3 id="dialogbuttonborderskin">[Dialog Button Border Skin]</h3>
<p>Specifies an additional border around buttons in dialogs. Colors can&#8217;t be used here, only paddings.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_dialogbuttonborderskin.png" alt="Dialog button border skin" /></p>

<h3 id="dialogpageskin">[Dialog Page Skin]</h3>
<p>Specifies the content area of dialogs.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_dialogpageskin.png" alt="Dialog page skin" /></p>

<h3 id="dialogskin">[Dialog Skin]</h3>
<p>Specifies the background of dialogs.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_dialogskin.png" alt="Dialog skin" /></p>

<h3 id="disclosuretriangleskin">[Disclosure Triangle Skin]</h3>
<p>Specifies an icon to indicate an expandable section in dialogs, eg an arrow or a &#8220;+&#8221; sign.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_disclosuretriangleskin.png" alt="Disclosure triangle skin" /></p>

<h3 id="dropdownbuttonskin">[Dropdown Button Skin]</h3>
<p>Specifies the dropdown button used in websites and the UI, eg in the address field.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_dropdownbuttonskin.png" alt="Drop down button skin" /></p>

<h3 id="dropdownskin">[Dropdown Skin]</h3>
<p>Specifies the dropdowns used in websites and the UI. The color of this should always be &#8220;Window&#8221;.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_dropdownskin.png" alt="Drop down skin" /></p>

<h3 id="editskin">[Edit Skin]</h3>
<p>Specifies input fields used in websites and the UI, eg the address field. The color of this should always be &#8220;Window&#8221;.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_editskin.png" alt="Edit skin" /></p>

<h3 id="expandhoverskin">[Expand Hover Skin]</h3>
<p>Specifies the area indicating an expandable section in small dialogs like the &#8220;Synchronise Opera&#8221; dialog.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_expandhoverskin.png" alt="Expand hover skin" /></p>

<h3 id="expandiconskin">[Expand Icon Skin]</h3>
<p>Not used in Opera 9.5.</p>

<h3 id="expandskin">[Expand Skin]</h3>
<p>Specifies areas to enable expandable sections in wide dialog boxes like the &#8220;Delete private data&#8221; dialog. Not skinned in standard skin as it looks strange due to the dialog being that wide.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_expandskin.png" alt="Expand skin" /></p>

<h3 id="extenderbuttonskin">[Extender Button Skin]</h3>
<p>Specifies the button appearing at the right end of the tab bar when the bar is full. Clicking this button shows a list of tabs that currently don&#8217;t show in the tab bar.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_extenderbuttonskin.png" alt="Extender button skin" /></p>

<h3 id="headerbuttonskin">[Header Button Skin]</h3>
<p>Specifies the column header used in dialogs with sortable lists like bookmarks, contact lists and mail lists.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_headerbuttonskin.png" alt="Header button skin" /></p>

<h3 id="helptooltipclosebuttonskin">[Help Tooltip Close Button Skin]</h3>
<p>Specifies the close button used in the <a href="#helptooltipskin"><code>[Help Tooltip Skin]</code>.</a></p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_helptooltipclosebuttonskin.png" alt="Help tooltip close button skin" /></p>

<h3 id="helptooltipskin">[Help Tooltip Skin]</h3>
<p>Specifies the dialog that appears when the &#8220;What is Speed Dial?&#8221; button on Speed Dial is clicked.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_helptooltipskin.png" alt="Help tooltip skin" /></p>

<h3 id="highassurancesecuritybuttonskin">[High Assurance Security Button Skin]</h3>
<p>Specifies the skin used for the security level indicator in the address bar on secure websites using <a href="http://en.wikipedia.org/wiki/Extended_Validation">Extended Validation Certificates</a>.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_highassurancesecuritybuttonskin.png" alt="High assurance security button skin" /></p>

<h3 id="horizontaldropinsert">[Horizontal Drop Insert]</h3>
<p>Specifies the position marker shown when dragging elements in toolbars to help placing them.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_horizontaldropinsert.png" alt="Horiztonal drop insert" /></p>

<h3 id="horizontalseparator">[Horizontal Separator]</h3>
<p>Specifies the horizontal seperator used in dialogs, eg the &#8220;Preferences&#8221; dialog.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_horizontalseparator.png" alt="Horizontal separator" /></p>

<h3 id="hotlistfloatingbuttonskin">[Hotlist Floating Button Skin]</h3>
<p>Specifies the button shown as the last item in the panel selector that, when clicked, shows a list of panels available.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_hotlistfloatingbuttonskin.png" alt="Hotlist floating button skin" /></p>

<h3 id="hotlistfloatingskin">[Hotlist Floating Skin]</h3>
<p>Specifies the area at the end of the panel selector containing <a href="#hotlistfloatingbuttonskin"><code>[Hotlist Floating Button Skin]</code></a>.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_hotlistfloatingskin.png" alt="Hotlist floating skin" /></p>

<h3 id="hotlistpanelskin">[Hotlist Panel Skin]</h3>
<p>Specifies the content area of panels, including the panels toolbar and it&#8217;s content, but excluding the header.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_hotlistpanelskin.png" alt="Hotlist panel skin" /></p>

<h3 id="hotlistpanelheaderskin">[Hotlist Panel Header Skin]</h3>
<p>Specifies the header of panels that shows the panels name and a close button.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_hotlistpanelheaderskin.png" alt="Hotlist panel header skin" /></p>

<h3 id="hotlistselectorskin">[Hotlist Selector Skin]</h3>
<p>Specifies the area that holds buttons to select panels &#8212; these are called &#8220;Panel Selectors&#8221; in Opera&#8217;s user interface.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_hotlistselectorskin.png" alt="Hotlist selector skin" /></p>

<h3 id="hotlistskin">[Hotlist Skin]</h3>
<p>Specifies the look of the panels, including their toolbars and the panel selector.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_hotlistskin.png" alt="Hotlist skin" /></p>

<h3 id="hotlistsplitterskin">[Hotlist Splitter Skin]</h3>
<p>Specifies the divider between panels and the browser pane; this can be dragged to resize the panel.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_hotlistsplitterskin.png" alt="Hotlist splitter skin" /></p>

<h3 id="images">[Images]</h3>
<p>This is not an element; it groups elements &#8212; see <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/#images">Skin.ini explained</a> for more details.</p>

<h3 id="info">[Info]</h3>
<p>This is not an element; it is a section for meta info &#8212; see <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/#info">Skin.ini explained</a> for more details.</p>

<h3 id="insecurepopupheaderskin">[Insecure Popup Header Skin]</h3>
<p>This is shown instead of the addressbar when a page opens a popup without an addressbar; it contains the popup&#8217;s server name.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_insecurepopupheaderskin.png" alt="Insecure popup header skin" /></p>

<h3 id="linkbuttonskin">[Link Button Skin]</h3>
<p>Specifies the look of the buttons in the personal bar.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_linkbuttonskin.png" alt="Link button skin" /></p>

<h3 id="listboxskin">[Listbox Skin]</h3>
<p>Specifies the background of list boxes, eg &#8220;Tools &gt; Manage mail and chat accounts&#8221; or &#8220;Tools &gt; Preferences &gt; Search&#8221;</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_listboxskin.png" alt="List box skin" /></p>

<h3 id="lowsecuritybuttonskin">[Low Security Button Skin]</h3>
<p>Specifies the look of the security level indicator in the address bar for websites that tried to apply security measures but failed.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_lowsecuritybuttonskin.png" alt="Low security button skin" /></p>

<h3 id="mailbrowserwindowskin">[Mail Browser Window Skin]</h3>
<p>Specifies a border around the message view to distinguish the site from the user interface. For this item <code>Padding Right</code> should be set to 0 so the user can just move his mouse pointer to the very right of the screen to use the scrollbar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_mailbrowserwindowskin.png" alt="Mail browser window skin" /></p>

<h3 id="mailcomposetoolbarskin">[Mail Compose Toolbar Skin]</h3>
<p>Specifies the toolbar shown at the top of the mail compose window.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_mailcomposetoolbarskin.png" alt="Mail compose toolbar skin" /></p>

<h3 id="mailcomposewindowskin">[Mail Compose Window Skin]</h3>
<p>Specifies the background of the mail compose window, which contains various input fields &#8212; To, CC, Subject, etc.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_mailcomposewindowskin.png" alt="Mail compose window skin" /></p>

<h3 id="mailheadertoolbar">[Mail Header Toolbar]</h3>
<p>Specifies the toolbar shown at the top of the message view, which shows various data like Subject, Date, From, etc.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_mailheadertoolbar.png" alt="Mail header toolbar skin" /></p>

<h3 id="mailbarskin">[Mailbar Skin]</h3>
<p>Specifies the mail toolbar shown at the top of the mail folders.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_mailbarskin.png" alt="Mail bar skin" /></p>

<h3 id="mainbarskin">[Mainbar Skin]</h3>
<p>Specifies the main bar that is disabled by default.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_mainbarskin.png" alt="Main bar skin" /></p>

<h3 id="menubuttonskin">[Menu Button Skin]</h3>
<p>Specifies the look of the buttons in the menu bar.</p>
<p>States: <code>.hover</code>, <code>.pressed</code>, <code>.selected</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_menubuttonskin.png" alt="Menu button skin" /></p>

<h3 id="menuskin">[Menu Skin]</h3>
<p>Specifies the menu bars background. This is used in Windows only &#8212; in Linux, Qt handles the menu bar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_menuskin.png" alt="Menu skin" /></p>

<h3 id="multilineeditskin">[MultilineEdit Skin]</h3>
<p>Specifies edit fields with more than one line. The color of this should always be &#8220;Window&#8221;.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_multilineeditskin.png" alt="Multi line edit skin" /></p>

<h3 id="navigationbarskin">[Navigationbar Skin]</h3>
<p>Specifies the navigation toolbar shown if sites contain certain references in their &lt;head&gt; section.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_navigationbarskin.png" alt="Navigation bar skin" /></p>

<h3 id="notifierclosebuttonskin">[Notifier Close Button Skin]</h3>
<p>Specifies the close button shown in the upper right of the notification popups shown when a new message arrives or the user searches for text in a page.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_notifierclosebuttonskin.png" alt="Notifier close button skin" /></p>

<h3 id="notifierskin">[Notifier Skin]</h3>
<p>Specifies the look of the notification popup shown when a new message arrives or a popup is blocked.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_notifierskin.png" alt="Notifier skin" /></p>

<h3 id="options">[Options]</h3>
<p>This is not an element, but instead is a section for settings; see <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/#options">the options section in Skin.ini explained</a> for more details.</p>

<h3 id="pagebarbuttonskin">[Pagebar Button Skin]</h3>
<p>Specifies the tab buttons shown in the tab bar.</p>
<p>States: <code>.hover</code>, <code>.pressed</code>, <code>.selected</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebarbuttonskin.png" alt="Page bar button skin" /></p>

<h3 id="pagebarclosebuttonskin">[Pagebar Close Button Skin]</h3>
<p>Specifies the look of the close button shown on tabs in the tab bar.</p>
<p>States: <code>.hover</code>, <code>.pressed</code>, <code>.selected</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebarclosebuttonskin.png" alt="Pagebar close button skin" /></p>

<h3 id="pagebarfloatingbuttonskin">[Pagebar Floating Button Skin]</h3>
<p>Specifies the button to open a new tab, shown next to the right-most tab bar button.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebarfloatingbuttonskin.png" alt="Pagebar floating button skin" /></p>

<h3 id="pagebarfloatingskin">[Pagebar Floating Skin]</h3>
<p>Specifies the area next to the right-most tab bar button that contains <a href="#pagebarfloatingbuttonskin"><code>[Pagebar Floating Button Skin]</code></a>.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebarfloatingskin.png" alt="Pagebar floating skin" /></p>

<h3 id="pagebarheadbuttonskin">[Pagebar Head Button Skin]</h3>
<p>Specifies the buttons shown at the very left of tab bar.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebarheadbuttonskin.png" alt="Pagebar head button skin" /></p>

<h3 id="pagebarheadskin">[Pagebar Head Skin]</h3>
<p>Specifies the area at the very left of thetab bar, containing <a href="#pagebarheadbuttonskin"><code>[Pagebar Head Button Skin]</code></a>.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebarheadskin.png" alt="Pagebar head skin" /></p>

<h3 id="pagebarlockedbuttonskin">[Pagebar Locked Button Skin]</h3>
<p>Specifies the style of the lock button shown on tabs in the tab bar, indicating that they can&#8217;t be closed.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebarlockedbuttonskin.png" alt="Pagebar locked button skin" /></p>

<h3 id="pagebarskin">[Pagebar Skin]</h3>
<p>Specifies the tab bar, including the buttons at the beginning and end of it.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebarskin.png" alt="Pagebar skin" /></p>

<h3 id="pagebartailskin">[Pagebar Tail Skin]</h3>
<p>Specifies the area at the very right of the tab bar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pagebartailskin.png" alt="Pagebar tail skin" /></p>

<h3 id="panelbrowserskin">[Panel Browser Skin]</h3>
<p>Specifies a border around websites in panels to distinguish the site from the user interface. For this item <code>Padding Right</code> should be set to &#8220;0&#8221; so the user can just move his mouse pointer to the very right of the screen to use the scrollbar if panels are placed on the right.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_panelbrowserskin.png" alt="Panel browser skin" /></p>

<h3 id="panelfulltoolbarskin">[Panel Full Toolbar Skin]</h3>
<p>Specifies the toolbar of maximized panels, as available from &#8220;Tools &gt; History&#821;, &#8220;Tools &gt; Contacts&#8221;, etc.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_panelfulltoolbarskin.png" alt="Panel full toolbar skin" /></p>

<h3 id="panelnormaltoolbarskin">[Panel Normal Toolbar Skin]</h3>
<p>Specifies the toolbar of panels.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_panelnormaltoolbarskin.png" alt="Panel normal toolbar skin" /></p>

<h3 id="paneltoggleskin">[Panel Toggle Skin]</h3>
<p>Specifies the panel toggle shown at one side of Opera, depending on where panels are placed.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_paneltoggleskin.png" alt="Panel toggle skin" /></p>

<h3 id="paneltreeviewskin">[Panel Treeview Skin]</h3>
<p>Specifies the style of the skin used in panels.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_paneltreeviewskin.png" alt="Panel tree view skin" /></p>

<h3 id="personalbarskin">[Personalbar Skin]</h3>
<p>Specifies the look of the personal bar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_personalbarskin.png" alt="Personal bar skin" /></p>

<h3 id="progressemptyskin">[Progress Empty Skin]</h3>
<p>Specifies the part of the progress bar indicating the not yet loaded percentage. When the page is loaded this is replaced by <code>[Progress Full Skin]</code>, which is expanded from left to right.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_progressemptyskin.png" alt="Progress empty skin" /></p>

<h3 id="progressfullskin">[Progress Full Skin]</h3>
<p>Specifies the part of the the progress bar indicating the already loaded percentage.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_progressfullskin.png" alt="Progress full skin" /></p>

<h3 id="progressbarpopupskin">[Progressbar Popup Skin]</h3>
<p>Specifies the progress bar when &#8220;Pop-up at bottom of page&#8221; is enabled.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_progressbarpopupskin.png" alt="Progress bar popup skin" /></p>

<h3 id="progressbarskin">[Progressbar Skin]</h3>
<p>Specifies the progress bar when &#8220;Show in address bar&#8221; is enabled. This should use the same style as the <a href="#addressbarskin"><code>[Addressbar Skin]</code></a>.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_progressbarskin.png" alt="Progress bar skin" /></p>

<h3 id="pushbuttonskin">[Push Button Skin]</h3>
<p>Specifies the style of buttons used in dialogs and websites. This shouldn&#8217;t be dark as some sites use dark text on buttons, which would then be unreadable.</p>
<p>States: <code>.hover</code>, <code>.pressed</code>, <code>.disabled</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pushbuttonskin.png" alt="Push button skin" /></p>

<h3 id="pushdefaultbuttonskin">[Push Default Button Skin]</h3>
<p>Specifies the default button used in dialogs &#8212; this is the one that gets &#8220;pressed&#8221; when you hit the enter key.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_pushdefaultbuttonskin.png" alt="Push default button skin" /></p>

<h3 id="radiobuttonskin">[Radio Button Skin]</h3>
<p>Specifies the radio buttons used in the UI and websites, unless the website specifies another style.</p>
<p>States: <code>.hover</code>, <code>.pressed</code>, <code>.selected</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_radiobuttonskin.png" alt="Radio button skin" /></p>

<h3 id="scrollbarhorizontalknobskin">[Scrollbar Horizontal Knob Skin]</h3>
<p>Specifies the style of the Horizontal scrollbar.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_scrollbarhorizontalknobskin.png" alt="Scrollbar horizontal knob skin" /></p>

<h3 id="scrollbarhorizontalleftskin">[Scrollbar Horizontal Left Skin]</h3>
<p>Specifies the style of the scrollbar button with a left facing arrow.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_scrollbarhorizontalleftskin.png" alt="Scrollbar horizontal left skin" /></p>

<h3 id="scrollbarhorizontalrightskin">[Scrollbar Horizontal Right Skin]</h3>
<p>Specifies the scrollbar button with a right facing arrow.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_scrollbarhorizontalrightskin.png" alt="Scrollbar horizontal right skin" /></p>

<h3 id="scrollbarhorizontalskin">[Scrollbar Horizontal Skin]</h3>
<p>Specifies the horizontal scrollbar background.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_scrollbarhorizontalskin.png" alt="Scrollbar horizontal skin" /></p>

<h3 id="scrollbarverticaldownskin">[Scrollbar Vertical Down Skin]</h3>
<p>Specifies the scrollbar button with an arrow pointing down.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_scrollbarverticaldownskin.png" alt="Scrollbar vertical down skin" /></p>

<h3 id="scrollbarverticalknobskin">[Scrollbar Vertical Knob Skin]</h3>
<p>Specifies the vertical scrollbar.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_scrollbarverticalknobskin.png" alt="Scrollbar vertical knob skin" /></p>

<h3 id="scrollbarverticalskin">[Scrollbar Vertical Skin]</h3>
<p>Specifies the vertical scrollbar background.</p>
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_scrollbarverticalskin.png" alt="Scrollbar vertical skin" /></p>

<h3 id="scrollbarverticalupskin">[Scrollbar Vertical Up Skin]</h3>
<p>Specifies the scrollbar button with an upwards facing arrow.</p>
<p />
<p>States: <code>.hover</code>, <code>.pressed</code></p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_scrollbarverticalupskin.png" alt="Scrollbar vertical up skin" /></p>

<h3 id="searchskin">[Search Skin]</h3>
<p>Specifies the style of the search panel background.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_searchskin.png" alt="Search skin" /></p>

<h3 id="securepopupheaderskin">[Secure Popup Header Skin]</h3>
<p>Specifies the skin shown instead of the addressbar when a page opens a secure page in a popup without an addressbar &#8212; it contains the popup&#8217;s address.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_insecurepopupheaderskin.png" alt="Secure popup header skin" /></p>

<h3 id="securitybuttonskin">[Security Button Skin]</h3>
<p>Specifies the skin used for the security level indicator in the address bar on secure websites.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_securitybuttonskin.png" alt="Security button skin" /></p>

<h3 id="selectorbuttonskin">[Selector Button Skin]</h3>
<p>Specifies the button used to open a panel.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_selectorbuttonskin.png" alt="Selector button skin" /></p>

<h3 id="speeddialconfigurationdialogbuttonborderskin">[Speed Dial Configuration Dialog Button Border Skin]</h3>
<p>Specifies the area around buttons in Speed Dial configuration dialogs. Colors can&#8217;t be used here, only paddings.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_speeddialconfigurationdialogbuttonborderskin.png" alt="Speed dial configuration dialog button border skin" /></p>

<h3 id="speeddialconfigurationdialognoalphaskin">[Speed Dial Configuration Dialog No Alpha Skin]</h3>
<p>This is the same as <a href="#speeddialconfigurationdialogskin"><code>[Speed Dial Configuration Dialog Skin]</code></a> but applied to operating systems that don&#8217;t support alpha-transparency.</p>

<h3 id="speeddialconfigurationdialogpageskin">[Speed Dial Configuration Dialog Page Skin]</h3>
<p>Specifies the content area of the Speed Dial configuration dialog.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_speeddialconfigurationdialogpageskin.png" alt="Speed dial configuration dialog page skin" /></p>

<h3 id="speeddialconfigurationdialogskin">[Speed Dial Configuration Dialog Skin]</h3>
<p>Specifies the Speed Dial configuration dialog, which is partly covered by <a href="#speeddialconfigurationdialogpageskin">[Speed Dial Configuration Dialog Page Skin]</a>.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_speeddialconfigurationdialogskin.png" alt="Speed dial configuration dialog skin" /></p>

<h3 id="speeddialsearchwidgetskin">[Speed Dial Search Widget Skin]</h3>
<p>Specifies the styling of the Search field on the Speed Dial page.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_speeddialsearchwidgetskin.png" alt="Speed dial search widget skin" /></p>

<h3 id="speeddialthumbnailclosebuttonskin">[Speed Dial Thumbnail Close Button Skin]</h3>
<p>Specifies the style of the close buttons on Speed Dial next to every thumbnail that delete each item.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_speeddialthumbnailclosebuttonskin.png" alt="Speed dial thumbnail close button skin" /></p>

<h3 id="speeddialthumbnailimageskin">[Speed Dial Thumbnail Image Skin]</h3>
<p>Specifies the background of the thumbnail area on Speed Dial.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_speeddialthumbnailimageskin.png" alt="Speed dial thumbnail image skin" /></p>

<h3 id="speeddialthumbnailwidgetskin">[Speed Dial Thumbnail Widget Skin]</h3>
<p>Specifies the frame holding the thumbnails on Speed Dial.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_speeddialthumbnailwidgetskin.png" alt="Speed dial thumbnail widget skin" /></p>

<h3 id="speeddialwidgetskin">[Speed Dial Widget Skin]</h3>
<p>Specifies the background of the Speed Dial page.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_speeddialwidgetskin.png" alt="Speed dial widget skin" /></p>

<h3 id="startskin">[Start Skin]</h3>
<p>Not used in Opera 9.5.</p>

<h3 id="startpopupskin">[Start Popup Skin]</h3>
<p>Specifies the start bar background, which is mostly covered by <a href="#startbarskin"><code>[Startbar Skin]</code></a>.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_startpopupskin.png" alt="Start popup skin" /></p>

<h3 id="startbarskin">[Startbar Skin]</h3>
<p>Specifies the toolbar that shows when focus is in the address bar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_startbarskin.png" alt="Start bar skin" /></p>

<h3 id="startupdialogskin">[Startup Dialog Skin]</h3>
<p>Specifies the dialog shown when starting Opera if Opera was either closed unexpectedly or with startup options set to &#8220;show startup dialog&#8221;</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_startupdialogskin.png" alt="Startup dialog skin" /></p>

<h3 id="statustitleskin">[Status Title Skin]</h3>
<p>Specifies the chat room name in Opera&#8217;s chat client.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_statustitleskin.png" alt="Status title skin" /></p>

<h3 id="statusbarskin">[Statusbar Skin]</h3>
<p>Specifies the background of the status bar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_statusbarskin.png" alt="Statusbar skin" /></p>

<h3 id="tabbuttonskin">[Tab Button Skin]</h3>
<p>Specifies the tabs used in dialogs (not in the tab bar)</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_tabbuttonskin.png" alt="Tab button skin" /></p>

<h3 id="tabsskin">[Tabs Skin]</h3>
<p>Specifies the style of the area tabs that are shown in dialogs.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_tabsskin.png" alt="Tab skin" /></p>

<h3 id="thumbnailimageskin">[Thumbnail Image Skin]</h3>
<p>Specifies the background of the thumbnail image that appears when a tab bar button is hovered.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_thumbnailimageskin.png" alt="Thumbnail image skin" /></p>

<h3 id="thumbnailwidgetskin">[Thumbnail Widget Skin]</h3>
<p>Specifies the style of the window thumbnails that are shown when hovering over a tab bar button.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_thumbnailwidgetskin.png" alt="Thumbnail widget skin" /></p>

<h3 id="toolbarbuttonskin">[Toolbar Button Skin]</h3>
<p>Specifies the style of the buttons used in toolbars.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_toolbarbuttonskin.png" alt="Toolbar button skin" /></p>

<h3 id="tooltipskin">[Tooltip Skin]</h3>
<p>Specifies all tooltips in Opera appearing when an element is hovered with the mouse.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_tooltipskin.png" alt="Tooltip skin" /></p>

<h3 id="transferpaneldetailsskin">[Transfer Panel Details Skin]</h3>
<p>Specifies the bottom section of the transfers panel, which shows various information about the transfer.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_transferpaneldetailsskin.png" alt="Transfer panel detail skin" /></p>

<h3 id="treeviewskin">[Treeview Skin]</h3>
<p>Specifies the style of the skin used in panels, some dialogs and the address bar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_treeviewskin.png" alt="Tree view skin" /></p>

<h3 id="untrustedsitesecuritybuttonskin">[Untrusted Site Security Button Skin]</h3>
<p>Specifies the skin used for the security level indicator in the addressbar on websites that are considered fraud by Opera&#8217;s fraud filter.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_untrustedsitesecuritybuttonskin.png" alt="Untrusted site security button skin" /></p>

<h3 id="verticaldropinsert">[Vertical Drop Insert]</h3>
<p>Specifies the position marker shown when dragging elements in toolbars to help placing them.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_verticaldropinsert.png" alt="Vertical drop insert" /></p>

<h3 id="verticalseparator">[Vertical Separator]</h3>
<p>Specifies the style of the vertical seperator in dialogs, in a similar manner to <a href="#horizontalseparator"><code>[Horizontal Separator]</code></a>. This is currently not used.</p>

<h3 id="viewbarskin">[Viewbar Skin]</h3>
<p>Specifies the look of the view bar.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_viewbarskin.png" alt="Viewbar skin" /></p>

<h3 id="webimagebrowserskin">[Web Image Browser Skin]</h3>
<p>Specifies a border around images in contacts properties dialog.</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/132-opera-skinning-part-4-skinini-element-reference/x4_webimagebrowserskin.png" alt="Web image browser skin" /></p>

<h3 id="windowskin">[Window Skin]</h3>
<p>Specifies the background for all windows, unless covering elements have a different background specified.</p>

<p>pages: <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/">1/5: Introduction, general explanations</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">2/5: Skinning examples</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">3/5: Skin.ini explained</a> &#8212; 4/5: skin.ini element reference &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-5-tips-and-tricks/">5/5: tips &amp; tricks</a></p>

