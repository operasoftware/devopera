Title: Getting started with Opera skinning
----
Date: 2008-04-10 20:55:59
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

<h2>Introduction</h2>
<p>This tutorial will teach you the basics of how to skin Opera. Sounds painful, doesn&#39;t it? Never fear - I&#39;m not advocating doing any kind of injury to your beloved browser; I am referring to customizing its look and feel by altering the images that comprise the buttons, toolbars, backgrounds, and other visual elements you see in the browser. Bear in mind that all these images are contained in a package of files present on your computer&#39;s hard drive. In this article we will show you how to locate that package on your computer, what the default skin package contains, how to pack and unpack it, and then give you some examples of how to make simple changes to your browser&#39;s skin, such as replacing button graphics and background tiles. The article is structured as follows:</p>
<ol>
	<li><a href="#locating">Locating the skin files</a></li>
	<li><a href="#unpacking">Unpacking / packing skins</a></li>
	<li><a href="#filelist">Standard skin folder/file list</a></li>
	<li><a href="#example1">Example 1: replacing a toolbar button</a></li>
	<li><a href="#example2">Example 2: adding a custom toolbar button</a></li>
	<li><a href="#example3">Example 3: adding a background image to Speed Dial</a></li>
</ol>

<h3 id="locating">Locating the skin files</h3>
Before you start editing a skin you first need to locate the actual files on your hard drive. This location varies depending on the operating system you are running Opera on, and the skin you want to edit - the default skin&#39;s location differs from that of the alternative skin packages you can download from <a href="http://my.opera.com/community/customize/skins/">my.opera.com</a>. The following list shows you the location of the different skin package files on the different operating systems:

<ul>
	<li>Windows:
		<ul>
			<li>The standard skin can be found in <code>Skin</code> directory in Opera&#39;s install directory - in most cases this should be <code>C:\Program files\Opera\Skin</code>.</li>
			<li>Downloaded skins are stored in <code>profile\Skin</code>. To figure out where the <code>profile</code> directory is located, you can check out &quot;Help &gt; About Opera&quot;. As a shortcut, you should also be able to access that directory by selecting &quot;Start &gt; Run&quot; and entering <code>%APPDATA%\Opera\profile\Skin</code>.</li>
		</ul>
	</li>
	<li>Linux/Unix:
		<ul>
			<li>The standard skin can be found in <code>/usr/share/opera/skin</code>.</li>
			<li>Downloaded skins are stored in <code>~/.opera/skin</code>. Note that <code>.opera</code> is a hidden directory therefore you might have to type the path manually.</li>
		</ul>
	</li>
	<li>Mac OS X:
		<ul>
			<li>The standard skin can be found in the <code>application</code> package, usually in <code>/Applications/Opera.app/Contents/Resources/Skin</code> (basically, right click on the Opera program icon inside the <code>Applications</code> folder, Ctrl-click on it, and select <code>Show Package Contents</code> to access the Opera application&#39;s internal files.)</li>
			<li>Downloaded skins are stored in <code>~/Library/Preferences/Opera Preferences/Skin</code>.</li>
		</ul>
	</li>
</ul>

<p>Opera ships with two skins - standard_skin.zip, which is the Standard skin, and a native skin, either called windows_skin.zip or mac_skin.zip. The native skin doesn&#39;t contain any images; it instead uses the ones from the standard skin. For downloaded skins the filename is usually similar to the skin&#39;s name.</p>


<h3 id="unpacking">Unpacking / packing skins</h3>
<p>Skins are packed as zip files (.zip). When Opera applies a skin, it unpacks and loads the required images from the package on the fly - each image is only loaded once, even if it is called more than once.</p>

<p>Before you can start editing a skin you have to unpack it using compression software like WinZip or 7zip. You don&#39;t have to unpack it to any specific location as you&#39;ll have to pack it again later anyway. Try it now - find the standard Opera skin and unpack it. The folder structure of this package (as seen in Opera 9.2x) is discussed in the next section.</p>

<p>After editing the skin you have to pack the files again, so they can be loaded by Opera. You do this by navigating to the folder containing skin.ini and the image files/folders, selecting all the contents of this folder and adding them to a new zip file.</p>

<p>To load the skin in Opera you have to put the zip file into the folder for downloaded skins, mentioned <a href="#locating">above</a>, then start Opera and select &quot;Tools &gt; Appearance&quot; - you&#39;ll then be able to select your skin from the list of skins that appears there. Note that if skin.ini is not in the root directory of the zip file, Opera will give you the error message &quot;Unable to continue. Please select a skin made for your version of Opera&quot;!</p>


<h3 id="filelist">Standard skin folder/file list</h3>
<p>Each skin package contains a configuration file callled skin.ini that dictates how the images are used inside the skin, and the images themselves. These images are usually organized inside a series of folders, the structure of which differs from package to package. You can basically structure the images and folders inside a skin package any way you want, as long as the paths to the images are correct inside the skin.ini file. Skin.ini is edited in the examples at the end of this article, and I&#39;ll cover how to manipulate skin.ini in detail in future articles, to be published soon.</p>

<p>If you want to edit an existing skin it&#39;s useful to know where the images that comprise the different parts of Opera&#39;s interface are located. The following table shows what images all the different folders in the default Opera skin contain - it is valid for the standard skin included in Opera 9.2 and might be valid for some skins you can download from <a href="http://my.opera.com/community/customize/skins/">my.opera.com</a> but it won&#39;t apply to all of them. If the skin you&#39;re trying to edit has a different folder structure you can usually figure out where the files you&#39;re looking for are located by looking at the folder names or previewing the image files in an image viewer.</p>

<p>Note that the folder structure for Opera 9.5 beta is similar to 9.2x, but has a few additions. We&#39;ll keep to the basic 9.2x set here because the folder structure in the default skin for 9.5 is expected to change significantly in the final release version. We&#39;ll give you the lowdown on that when the final release occurs, so watch this space!</p>
<table>
	<tr>
		<th>folder</th>
		<th>description</th>
	</tr>
	<tr>
		<td>border/</td>
		<td>Contains border graphics for toolbar borders, separators in dialog boxes, and borders around toolbar buttons.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1border.png" width="45" height="29" alt="Border" /></td>
	</tr>
	<tr>
		<td>buttons/</td>
		<td>Contains all the toolbar button images - these are referenced in the Boxes and Images sections in the Skin.ini file.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1buttons.png" width="218" height="22" alt="Buttons" /></td>
	</tr>
	<tr>
		<td>caption/</td>
		<td>Contains the minimize, restore and close button graphics that reside at the top right of the menu bar (top left if you are using a Mac.)</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1caption.png" width="67" height="19" alt="Caption" /></td>
	</tr>
	<tr>
		<td>checkbox/</td>
		<td>Contains checkbox graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1checkbox.png" width="35" height="14" alt="Checkbox" /></td>
	</tr>
	<tr>
		<td>contacts/</td>
		<td>Contains contact icon graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1contacts.png" width="195" height="16" alt="Contacts" /></td>
	</tr>
	<tr>
		<td>dialog/</td>
		<td>Contains the outer background for dialog boxes.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1dialog.png" width="45" height="29" alt="Dialog" /></td>
	</tr>
	<tr>
		<td>dialog_button_border/</td>
		<td>Contains shadows for push buttons in dialog boxes (not in use in version 9.2 and later):</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1dialogbuttonborder.png" width="45" height="29" alt="Dialog button border" /></td>
	</tr>
	<tr>
		<td>dialog_images/</td>
		<td>Contains icons for several messages, ie the ones found in alert/dialog boxes.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1dialogimages.png" width="211" height="32" alt="Dialog images" /></td>
	</tr>
	<tr>
		<td>dialog_page/</td>
		<td>Contains graphics for the border and shadows around the inner background of dialog boxes.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1dialogpage.png" width="45" height="29" alt="Dialog page" /></td>
	</tr>
	<tr>
		<td>drop_insert/</td>
		<td>Contains the image that appears as the target when you are dragging and dropping a button.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1dropinsert.png" width="37" height="23" alt="Drop insert" /></td>
	</tr>
	<tr>
		<td>edit/</td>
		<td>Contains edit field graphics for the address field, search fields, treeviews, listboxes, and multiline edit fields. These are difficult to change because some unchangeable parts are applied by the operating system.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1edit.png" width="45" height="32" alt="Edit" /></td>
	</tr>
	<tr>
		<td>header_button/</td>
		<td>Contains graphics for headers, for example those found on top of mail or preference treeviews.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1headerbutton.png" width="45" height="20" alt="Header button" /></td>
	</tr>
	<tr>
		<td>icons/</td>
		<td>Contains most of the icons, with the exception of those described elsewhere in the table.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1icons.png" width="186" height="16" alt="Icons" /></td>
	</tr>
	<tr>
		<td>notifier/</td>
		<td>Contains the background image for popup notifiers and the inline search popup.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1notifier.png" width="75" height="29" alt="Notifier" /></td>
	</tr>
	<tr>
		<td>pagebar_close_button/</td>
		<td>Contains the graphics for the close buttons on the tabs.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1pagebarclosebutton.png" width="79" height="16" alt="Pagebar close button" /></td>
	</tr>
	<tr>
		<td>panel_toggle/</td>
		<td>Contains the panel toggle graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1paneltoggle.png" width="37" height="7" alt="Panel toggle" /></td>
	</tr>
	<tr>
		<td>progress/</td>
		<td>Contains several progress indicator graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1progress.png" width="269" height="23" alt="Progress" /></td>
	</tr>
	<tr>
		<td>push_button/</td>
		<td>Contains the basic graphics for OK, Cancel, and similar buttons in dialog boxes, and dropdown buttons in dropdown fields and scrollbars.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1pushbutton.png" width="152" height="29" alt="Push button" /></td>
	</tr>
	<tr>
		<td>push_default_button/</td>
		<td>Similar to the one above but for the default button, thus the one that gets selected when you press Enter.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1pushdefaultbutton.png" width="106" height="29" alt="Push default button" /></td>
	</tr>
	<tr>
		<td>radio_button/</td>
		<td>Contains radio button graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1radiobutton.png" width="33" height="14" alt="Radiobutton" /></td>
	</tr>
	<tr>
		<td>scrollbar/</td>
		<td>Contains the graphic for the scrollbar background and the arrows for scrollbar dropdowns and dropdown buttons in dropdown fields.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1scrollbar.png" width="96" height="29" alt="Scrollbar" /></td>
	</tr>
	<tr>
		<td>scrollbar_knob/</td>
		<td>Contains the scrollbar knob images.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1scrollbarknob.png" width="54" height="29" alt="Scrollbar knob" /></td>
	</tr>
	<tr>
		<td>selector_button/</td>
		<td>Contains the background graphic that goes around toolbar buttons, panel selector buttons and the panel toggle (for the <code>.hover</code>, <code>.selected</code> and <code>.pressed</code> states).</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1selectorbutton.png" width="283" height="49" alt="Selector button" /></td>
	</tr>
	<tr>
		<td>smilies/</td>
		<td>Contains all the emoticon graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1smilies.png" width="225" height="17" alt="Smilies" /></td>
	</tr>
	<tr>
		<td>speeddial/</td>
		<td>Contains the graphics for the speed dial thumbs, including icons, the separator for the speed dial search area, the overlay with shadows for the speed dial configuration dialog and the overlay without shadows for systems that don&#39;t support alpha transparency.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1speeddial.png" width="206" height="87" alt="Speeddial" /></td>
	</tr>
	<tr>
		<td>startup_dialog/</td>
		<td>Contains the graphics for the v7 startup dialog header (not used by the default skin anymore.)</td>
		<td></td>
	</tr>
	<tr>
		<td>tab_button/</td>
		<td>Contains graphics for tab buttons on the tab bar and in dialog boxes.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1tabbutton.png" width="366" height="26" alt="Tab button" /></td>
	</tr>
	<tr>
		<td>tab_button_bottom/</td>
		<td>Contains hanging tab buttons to use when the tab bar is displayed at the bottom of the browser window.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1tabbuttonbottom.png" width="237" height="26" alt="Tab button bottom" /></td>
	</tr>
	<tr>
		<td>toolbar_button/</td>
		<td>Contains graphics for the v7 toolbar button background - not in use anymore.</td>
		<td></td>
	</tr>
	<tr>
		<td>trust_and_security_button/</td>
		<td>Contains graphics for the area around the fraud protection/security buttons inside the address field (green in version 9.5.)</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1trustandsecuritybutton.png" width="124" height="22" alt="trust and security button" /></td>
	</tr>
	<tr>
		<td>window/</td>
		<td>Contains the general background image for all the toolbars - exchanging this image is the easiest way to personalize your Opera skin.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1window.png" width="76" height="49" alt="Window" /></td>
	</tr>
</table>

<p>Now I&#39;ve taken you through the standard Opera skin package structure, I&#39;ll walk you through a few examples that demonstrate how to replace default button and background images in this package, and add a custom image for a new toolbar button.</p>


<h3 id="example1">Example 1: replacing a toolbar button</h3>
<p>In this example you&#39;ll replace the Reload image with the one shown in Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/New_Reload.png" alt="new reload button" />
<p class="comment">Figure 1: A new custom Reload button</p>

<p>First of all, <a href="#unpacking">unpack</a> the standard skin archive, as explained earlier. As the image you want to replace is a toolbar button, it should be located in the <code>buttons/</code> folder - check that directory for a filename that could be the image you&#39;re looking for. You should find <code>reload.png</code> fairly easily.</p>
<p>Now replace the old <code>reload.png</code> with the one above (you could of course use your own custom image instead, if you wish).</p>
<p>To use the edited skin with Opera it has to be packed again. Go up a level so you&#39;re in the root of the folder containing <code>skin.ini</code>, select all files and add them to a new zip archive - name the zip file something memorable.</p>
<p>Now put the  resulting zip file into Opera skin directory, restart Opera and select the <code>Tools &gt; Appearance</code> menu option - you should see your zip file name in the skin list. Select it, and the Opera skin should now contain the new reload button, as shown in Figure 2.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1example1final.png" alt="Opera with new Reload button" />
<p class="comment">Figure 2: Opera with the custom Reload button added.</p>

<h3 id="example2">Example 2: adding an icon to a custom toolbar button</h3>

<p>Opera gives you the ability to add custom buttons to any toolbar. Those buttons can use any images already in the skin, but often there isn&#39;t an appropriate button available, so you&#39;ll want to add your own image to the skin.</p>

<p>In this example you&#39;ll first add a custom button to your toolbars and then apply an image to that button. This example doesn&#39;t have all the details that example 1 has so you might want to read and try that one first, if you haven&#39;t done so already.</p>

<p>To add the button click <a href="opera:/button/Switch%20to%20next%20page,,,,%22Next%20page%22" title="Next page">here</a>, click OK in the dialog that appears and drag&#39;n&#39;drop the button to any toolbar. It should currently appear as shown in Figure 3.<br />
The button link above already applies the image name &quot;Next page&quot; to the new button - we&#39;ll have to add an image for that name to the skin later on.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1example2buttonadded.png" alt="new button without any image" />
<p class="comment">Figure 3: The new button without any image applied.</p>

<p>Next, unpack the skin like you did in <a href="#example1">example 1</a> and navigate to the <code>buttons/</code> directory - that&#39;s the most logical place to put the new image. Now of course you need an image to be used for that button -  a suitable image can be found in Figure 4.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/nextpage.png" alt="next page" />

<p class="comment">Figure 4: The custom next tab button graphic.</p>

<p>Name that image <code>nextpage.png</code> and save it in the <code>buttons/</code> directory.</p>

<p>There&#39;s a bit more to be done in this example - the image currently won&#39;t display when the skin is packed and loaded because it isn&#39;t linked to a button name in <code>skin.ini</code>. To do this, we need to add a line associating the image with the button name inside <code>skin.ini</code>. Open <code>skin.ini</code> in a text editor and scroll down to the <code>[Images]</code> section. The lines in this section are in the form <code>Image name = path/to/image.png</code> - as you&#39;d logically expect, the path is relative to the location of skin.ini.</p>
<p>Add the following line just below <code>[Images]</code> to associate your custom image with your custom button:</p>

<p><code>Next page = buttons/nextpage.png</code></p>

<p>Save the changes and close the text editor, then pack the files and put the zip file into Opera&#39;s skin directory as discussed before. Now restart Opera and select the skin as before - The toolbar button you added at the beginning of this example should now have an icon, as shown in Figure 5.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1example2final.png" alt="new button with custom image" />
<p class="comment">Figure 5: The new button with a custom image applied.</p>

<h3 id="example3">Example 3: adding a background image to Speed Dial</h3>
<p>In this example you&#39;ll replace the white background on the Speed Dial page with the image seen in Figure 6 - it&#39;ll be tiled so that it covers the whole page.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/speeddialbackground.png" alt="speed dial background image" />
<p class="comment">Figure 6: A custom background tile for the speed dial page.</p>

<p>Again you should start by unpacking the skin. As you want to add an image to speed dial, put the above image in the <code>speeddial/</code> directory (name it <code>speeddialbackground.png</code>.)</p>

<p>Next open <code>skin.ini</code> in a text editor. The background of speed dial is controlled by the <code>[Speed Dial Widget Skin]</code> section. By default this section should look like this:</p>

<pre><code>[Speed Dial Widget Skin]
Padding Left				= 1
Padding Top				= 1
Padding Right				= 1
Padding Bottom				= 1
Border					= 1
Border Color				= #bec2cb
Color					= #000000
Text Color				= #000000</code></pre>

<p>To be able to use a background image you need to start by setting the section <code>Type</code> to <code>BoxTile</code> - the <code>Type</code> specifies that the image should be tiled to cover the whole screen. Set this by adding the following line to the top of the section, just below <code>[Speed Dial Widget Skin]</code>:</p>

<pre><code>Type						= BoxTile</code></pre>

<p>Now you&#39;ve told Opera how to fill the space available with a tiled image, but you haven&#39;t told it what image to be used! This is easily remedied by adding the following line, just below the first line you added:</p>

<pre><code>Tile Center					= speeddial/speeddialbackground.png</code></pre>

This tells Opera to load <code>speeddial/speeddialbackground.png</code>; the <code>Tile Center</code> declaration dictates that the image shouldn&#39;t be repeated in just one direction (vertically or horizontally) - it should tile in both directions to fill all the available space.

<p>The final updated section should look like this:</p>

<pre><code>[Speed Dial Widget Skin]
Type					= BoxTile
Tile Center				= speeddial/speeddialbackground.png
Padding Left				= 1
Padding Top				= 1
Padding Right				= 1
Padding Bottom				= 1
Border					= 1
Border Color				= #bec2cb
Color					= #000000
Text Color				= #000000</code></pre>

<p>Save the changes and close the text editor.</p>

<p>Now pack the files and put the zip file into Opera&#39;s skin directory and select the skin. Your speed dial pages should now have a custom wood background instead of being plain white, as shown in Figure 7.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/80-getting-started-with-opera-skinning/1example3final.png" alt="speed dial page with wooden background" />
<p class="comment">Figure 7: The speed dial page with the wooden background applied.</p>

<h2>Summary</h2>
<p>In this article I have shown you the basics of how Opera skins work, and how to unpackage them, manipulate them by adding new images, and re-package and apply the changes to Opera. If you still have a thirst for knowledge do not despair - in the next few articles I will start to delve deeper into customizing Opera skins.</p>

<p>You can find a skin containing the modifications detailed in the above three Example sections in <a href="new_skin.zip">this skin zip file</a></p>
