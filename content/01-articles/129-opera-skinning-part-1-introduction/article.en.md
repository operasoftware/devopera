Title: Opera Skinning part 1: Introduction
----
Date: 2008-06-20 13:59:35
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


<p>pages: 1/5: Introduction &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">2/5: Skinning examples</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">3/5: Skin.ini explained</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/">4/5: skin.ini element reference</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-5-tips-and-tricks/">5/5: tips &amp; tricks</a></p>


<h2 id="intro">Introduction</h2>
<p>In <a href="http://dev.opera.com/articles/view/getting-started-with-opera-skinning/" title="Simple Opera skinning article">my first Opera skinning article</a>, I gave a gentle introduction to the world of Opera skinning, including where to get the skin files from, how to unpack and pack them, and some basic graphic replacement examples (eg buttons and background tiles.) In this set of articles, I will go a lot deeper into the subject, providing you with many more practical examples, a detailed guide to the skin.ini file, an element reference, and some tips and tricks for creating more effective skins. This article was last updated for <a href="http://www.opera.com/download/">Opera 9.5</a>.</p>

<p>You can access all the 5 articles in this set using the links above. Don&#8217;t feel like you have to read the articles in order &#8212; there is something useful for everyone here, no matter what your level of familiarity with Opera skins is, and you should feel free to jump to the parts you consider most interesting.</p>


<p>The table of contents for this first part is as follows:</p>

<h3>Index</h3>
<ul>
<li><a href="#locating">Locating the skin files</a></li>
<li><a href="#unpacking">Unpacking / packing skins</a></li>
<li><a href="#structure">Skin structure</a></li>
<li><a href="#skinini">Introduction to skin.ini</a></li>
<li><a href="#native">Native / non-native skins</a></li>
<li><a href="#fallback">Fallbacks</a></li>
<li><a href="#compatibility">backward and forward compatibility</a></li>
<li><a href="#filelist">Standard skin folder/file list</a></li>
<li><a href="#imageformats">Image formats</a></li>
<li><a href="#animations">Animations</a></li>
<li><a href="#loading">Image loading</a></li>
</ul>

<h2 id="locating">Locating the skin files</h2>
Before you start editing a skin you first need to locate the actual files on your hard drive. This location varies depending on the operating system you are running Opera on, and the skin you want to edit &#8212; the default skin&#8217;s location differs from that of the alternative skin packages you can download from <a href="http://my.opera.com/community/customize/skins/">my.opera.com</a>. The following list shows you the location of the different skin package files on the different operating systems:

<ul>
	<li>Windows:
		<ul>
			<li>The standard skin can be found in the <code>Skin</code> directory in Opera&#8217;s install directory &#8212; in most cases this should be <code>C:\Program files\Opera\Skin</code>.</li>
			<li>Downloaded skins are stored in <code>profile\Skin</code>. To figure out where the <code>profile</code> directory is located, you can check out &#8220;Help &gt; About Opera&#8221;. As a shortcut, you should also be able to access that directory by selecting &#8220;Start &gt; Run&#8221; and entering <code>%APPDATA%\Opera\profile\Skin</code>.</li>
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
			<li>The standard skin can be found in the <code>application</code> package, usually in <code>/Applications/Opera.app/Contents/Resources/Skin</code> (basically, right click on the Opera program icon inside the <code>Applications</code> folder, Ctrl-click on it, and select <code>Show Package Contents</code> to access the Opera application&#8217;s internal files.)</li>
			<li>Downloaded skins are stored in <code>~/Library/Preferences/Opera Preferences/Skin</code>.</li>
		</ul>
	</li>
</ul>

<p>Opera ships with two skins &#8212; standard_skin.zip, which is the Standard skin, and a native skin, called for example windows_skin.zip or mac_skin.zip. The native skin doesn&#8217;t contain any images; it instead uses the ones from the standard skin. For downloaded skins the filename is usually similar to the skin&#8217;s name.</p>


<h3 id="unpacking">Unpacking / packing skins</h3>
<p>Skins are packed as zip files (.zip). When Opera applies a skin, it unpacks and loads the required images from the package on the fly &#8212; each image is only loaded once, even if it is called more than once from skin.ini.</p>

<p>Before you can start editing a skin you have to unpack it using compression software like WinZip or 7zip. You don&#8217;t have to unpack it to any specific location; you&#8217;ll have to pack it again later anyway. Try it now &#8212; find the standard Opera skin and unpack it. The folder structure of this package (as seen in Opera 9.5x) is discussed in the next section.</p>

<p>After editing the skin you have to pack the files again, so they can be loaded by Opera. You do this by navigating to the folder containing skin.ini and the image files/folders, selecting all the contents of this folder and adding them to a new zip file.</p>

<p>To load the skin in Opera you have to put the zip file into the folder for downloaded skins, mentioned <a href="#locating">above</a>, then start Opera and select &#8220;Tools &gt; Appearance&#8221; &#8212; you&#8217;ll then be able to select your skin from the list of skins that appears there. Note that if skin.ini is not in the root directory of the zip file, Opera will give you the error message &#8220;Unable to continue. Please select a skin made for your version of Opera&#8221;!</p>


<h3 id="structure">Skin structure</h3>
<p>After unpacking the skins zip file you&#8217;ll find a number of folders containing images and a file called skin.ini. This ini file can be edited in any text editor, and sets skin options like the name of the skin to be displayed in Opera, which image to use for each element of the user interface, and text and background colors.</p>
<p>The folders contain the images to be used by the skin. Folders aren&#8217;t required for the skin to work &#8212; you could just put every image in the root level of the zip file &#8212; but they do help a great deal with keeping everything organised.</p>
<p>The contents of the standard Opera skin are described in the <a href="#filelist">Standard skin folder/file list section</a> in this tutorial.</p>


<h3 id="skinini">Introduction to skin.ini</h3>
<p>skin.ini &#8212; which can be found at the root level of every skin &#8212; is the control/configuration file for the skin. It specifies meta information and general options, and defines the settings for every element used in the skin.</p>
<p>At the beginning of the file you&#8217;ll usually find the meta info section, which is marked by the heading <code>[Info]</code>. The section should look similar to the following:</p>

<pre>[Info]
Name=Opera7 Standard Skin
Author=Opera Software
Version=3
Preview Image=</pre>

<ul>
<li><code>Name</code> and <code>Author</code>: The first two options set the names used for the skin itself and its author, which will be displayed in the dialog presented to you after downloading a skin and in the skin list in the &#8220;Appearance&#8221; dialog.</li>
<li><code>Version=</code>: This defines the version of skin.ini being used &#8212; it must not be used to indicate the skin version. For skins made for Opera 9.5 or later this should be set to <code>3</code>.</li>
<li><code>Preview Image=</code>: This is not used &#8212; the whole line may be omitted.</li>
</ul>

<p>The next section below this one, <code>[Options]</code>, specifies general options like whether the skin is a native one (see section below), and the rest of the sections specify skin elements. We&#8217;ll learn more about these sections <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">later in this series</a>.</p>

<h3 id="native">Native / non-native skins</h3>
<p>Opera offers two types of skins, native and normal ones. The basic difference between the two types of skin is as follows:</p>

<ul>
<li><p>Normal skins are very customizable as they allow skinning of nearly everything &#8212; button images, backgrounds, dialog buttons, scrollbars and all the other elements. They allow you to give Opera its own style, independent from the operating system you&#8217;re using, and what other applications look like.</p></li>
<li><p>Native skins use elements from the operating system for most elements &#8212; only button images are set by the skin. All other elements like backgrounds and dialogs are drawn by the operating system it resides on. This makes Opera look more like a native application for that operating system and integrate better with other applications on the system.</p>
<p>Native skins are supported on all operating systems Opera runs on. On Windows the look of a native skin is controlled by the Windows Theme used; on Linux Opera draws native elements from the Qt toolkit.</p>

<p>To mark a skin as native you have to set the following entry in skin.ini &#8212; this will automatically set the correct native option for the operating system the skin is loaded on:</p>

<pre>[Options]
Native Skin = 1</pre>

<p>For non-native skins just omit this line &#8212; in this case Opera will default to non-native.</p></li>
</ul>


<h3 id="fallback">Fallbacks</h3>

<p>If a skin is missing an element, instead of showing a blank space Opera will employ an automatic fallback and load the element from the &#8220;Opera Standard&#8221; skin. An element is considered missing if there&#8217;s no line in skin.ini that defines it &#8212; it doesn&#8217;t matter whether the image for that element exists inside the skin package or not.</p>

<p>Missing images are often encountered when a skin was made for a previous version of Opera and is thus missing images for recently added buttons. To avoid showing just a blank space Opera will check whether the standard skin contains this element and if it&#8217;s present, display that icon. While this can cause inconsistencies in the style of button icons, it avoids breaking functionality because of missing buttons.</p>

<p>This technique is also used for the native skin that comes with Opera. This skin doesn&#8217;t contain any button images &#8212; just some information to tell Opera to draw a native skin, the actual button images are then loaded from the Standard skin.</p>

<p>Fallbacks can be disabled independently for background and foreground images (like button images, dialog buttons, etc) using the <code>Fallback background</code> and <code>Fallback foreground</code> settings in the <code>[Options]</code> section:</p>

<pre>[Options]
Fallback foreground			= 1
Fallback background			= 1</pre>

<p>By default both settings are enabled (<code>1</code>) anyway, so you only need to add these lines if the settings have been changed from the default.</p>
<p><strong>Note</strong>: It&#8217;s not recommended to change this setting as it can break forward compatibility!</p>


<h3 id="compatibility">Backward and forward compatibility</h3>
<p>Opera can load any skin made for Opera 7 or newer. All images present in the skin will be displayed, and sections missing will be loaded from the &#8220;Opera Standard&#8221; skin thanks to the <a href="#fallback">fallback option</a>, as explained above.</p>
<p>Additional images &#8212; for example custom ones or ones from a newer version of Opera &#8212; will just be ignored. Opera will not stop loading a skin if such an image is encountered.</p>


<h3 id="filelist">Standard skin folder/file list</h3>
<p>If you want to create a new skin it&#8217;s often easier to start by editing an existing skin like the Standard skin.</p>
<p>The following folder listing is valid for the Standard skin included in Opera 9.5x, and while it will most likely apply for most of the <a href="http://my.opera.com/community/customize/skins/">skins you can download from MyOpera</a>, you can&#8217;t guarantee that it will apply for all of them. If the skin you&#8217;re trying to edit has a different folder structure to the standard one, you can usually figure out where the files you&#8217;re looking for are located by looking at the folder names or previewing the image files in an image viewer. This of course assumes that the skin&#8217;s creator has used a logical naming system and file structure!</p>
<table>
	<tr>
		<th>folder</th>
		<th>description</th>
		<th>preview</th>
	</tr>
	<tr>
		<td>a/</td>
		<td>Contains the border that&#8217;s drawn around the active element with keyboard navigation. Should not be customized!</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_a.png" width="46" height="25" alt="a" /></td>
	</tr>
	<tr>
		<td>account/</td>
		<td>Not used in Opera 9.5</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_account.png" width="58" height="13" alt="Account" /></td>
	</tr>
	<tr>
		<td>anims/</td>
		<td>Contains animations used in various places like Speed Dial and Opera Link.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_anims.png" width="45" height="24" alt="Animations" /></td>
	</tr>
	<tr>
		<td>backgrounds/</td>
		<td>Contains the background images for all the toolbars.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_backgrounds.png" width="143" height="30" alt="Backgrounds" /></td>
	</tr>
	<tr>
		<td>border/</td>
		<td>Contains border graphics for toolbar borders, separators in dialog boxes, and borders around toolbar buttons.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_border.png" width="45" height="29" alt="Border" /></td>
	</tr>
	<tr>
		<td>buttons/</td>
		<td>Contains all the toolbar button images &#8212; these are referenced in the Boxes and Images sections in the Skin.ini file. Also contains graphics for tab buttons on tab bar.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_buttons.png" width="218" height="22" alt="Buttons" /><br /><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_tabbutton.png" alt="Tab button" /></td>
	</tr>
	<tr>
		<td>caption/</td>
		<td>Contains the minimize, restore and close button graphics that reside at the top right of the menu bar, or top left if you are using a Mac.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_caption.png" width="67" height="19" alt="Caption" /></td>
	</tr>
	<tr>
		<td>checkbox/</td>
		<td>Contains checkbox graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_checkbox.png" width="35" height="14" alt="Checkbox" /></td>
	</tr>
	<tr>
		<td>contacts/</td>
		<td>Contains contact icon graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_contacts.png" width="195" height="16" alt="Contacts" /></td>
	</tr>
	<tr>
		<td>dialog_images/</td>
		<td>Contains icons for several messages.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_dialogimages.png" width="188" height="32" alt="Dialog images" /></td>
	</tr>
	<tr>
		<td>dialog_page/</td>
		<td>Contains graphics for the border and shadows around the inner background of dialog boxes.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_dialogpage.png" width="45" height="29" alt="Dialog page" /></td>
	</tr>
	<tr>
		<td>drop_insert/</td>
		<td>Contains the image that appears as the target when you are dragging and dropping a button.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_dropinsert.png" width="37" height="23" alt="Drop insert" /></td>
	</tr>
	<tr>
		<td>dropdown/</td>
		<td>Contains the image used as the background of dropdowns.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_dropdown.png" width="17" height="22" alt="drop down" /></td>
	</tr>
	<tr>
		<td>edit/</td>
		<td>Contains edit field graphics for the address field, search fields, treeviews, listboxes, and multiline edit fields. These are difficult to change because some unchangeable parts are applied by the operating system.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_edit.png" width="45" height="32" alt="Edit" /></td>
	</tr>
	<tr>
		<td>expand_button/</td>
		<td>Contains arrow images that are used in expand elements in dialogs.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_expand_button.png" width="32" height="16" alt="Expand button" /></td>
	</tr>
	<tr>
		<td>header_button/</td>
		<td>Contains graphics for headers, for example those found on top of mail or preference treeviews.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_headerbutton.png" width="133" height="20" alt="Header button" /></td>
	</tr>
	<tr>
		<td>icons/</td>
		<td>Contains all the icons.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_icons.png" width="186" height="16" alt="Icons" /></td>
	</tr>
	<tr>
		<td>link/</td>
		<td>Contains status icons for Opera Link.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_link.png" width="58" height="16" alt="Link" /></td>
	</tr>
	<tr>
		<td>notifier/</td>
		<td>Contains the background image for popup notifiers and the inline search popup.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_notifier.png" width="75" height="29" alt="Notifier" /></td>
	</tr>
	<tr>
		<td>pagebar_close_button/</td>
		<td>Contains the graphics for the close buttons on the tabs.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_pagebarclosebutton.png" width="79" height="16" alt="Pagebar close button" /></td>
	</tr>
	<tr>
		<td>panel_toggle/</td>
		<td>Contains the panel toggle graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_paneltoggle.png" width="37" height="7" alt="Panel toggle" /></td>
	</tr>
	<tr>
		<td>progress/</td>
		<td>Contains several progress indicator graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_progress.png" width="269" height="23" alt="Progress" /></td>
	</tr>
	<tr>
		<td>radio_button/</td>
		<td>Contains radio button graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_radiobutton.png" width="33" height="14" alt="Radiobutton" /></td>
	</tr>
	<tr>
		<td>scrollbar/</td>
		<td>Contains the graphic for the scrollbar background and the arrows for scrollbar dropdowns and dropdown buttons in dropdown fields.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_scrollbar.png" width="96" height="29" alt="Scrollbar" /></td>
	</tr>
	<tr>
		<td>scrollbar_knob/</td>
		<td>Contains the scrollbar knob images.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_scrollbar_knob.png" width="73" height="29" alt="Scrollbar knob" /></td>
	</tr>
	<tr>
		<td>selector_button/</td>
		<td>Contains the background graphic that goes around toolbar buttons and the panel toggle.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_selectorbutton.png" width="50" height="28" alt="Selector button" /></td>
	</tr>
	<tr>
		<td>smilies/</td>
		<td>Contains all the emoticon graphics.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_smilies.png" width="225" height="17" alt="Smilies" /></td>
	</tr>
	<tr>
		<td>speeddial/</td>
		<td>Contains the graphics for the speed dial thumbs including icons, the separator for the speed dial search area, the overlay with shadows for the speed dial configuration dialog and the overlay without shadows for systems that don&#8217;t support alpha transparency.</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_speeddial.png" width="206" height="87" alt="Speeddial" /></td>
	</tr>
	<tr>
		<td>trust_and_security_button/</td>
		<td>Contains graphics for the area around the fraud protection/security buttons inside the addressfield (green since v9.5.)</td>
		<td><img src="http://forum-test.oslo.osa/kirby/content/articles/129-opera-skinning-part-1-introduction/x1_trustandsecuritybutton.png" width="124" height="22" alt="trust and security button" /></td>
	</tr>
</table>


<h3 id="imageformats">Image formats</h3>
<p>Opera supports PNG, JPEG, BMP and GIF images for skins. In most cases you&#8217;ll want to use PNG images as they support alpha channels, which allows for partial transparency in images. For background images JPEG is sometimes a better choice as its compression is a bit better than PNG.</p>


<h3 id="animations">Animations</h3>
<p>Opera supports animated GIFs and animated PNGs in <a href="http://wiki.mozilla.org/APNG_Specification">APNG format</a>, APNG is to be prefered as GIF only supports 256 colors. The animations will be played in the Opera user interface upon loading. Animated images are used in skins just like any other image.</p>


<h3 id="loading">Image loading</h3>
<p>Opera will load every image only once, no matter how often it&#8217;s referenced in skin.ini, in the same manner that you can use the same image multiple times in an HTML document. While this saves memory it does bring with it the issue. You can&#8217;t use the same image multiple times with different parameters applied to it &#8212; when loading a skin Opera will use the first instance of an image it finds, and remember it, and its parameters. Thus if you want to use the same image with different parameters, for example once with <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/#colorize">Colorize</a> enabled and once with it disabled, you&#39;ll have to use two different copies of the image in different locations.</p>

<p>pages: 1/5: Introduction &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">2/5: Skinning examples</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">3/5: Skin.ini explained</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/">4/5: skin.ini element reference</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-5-tips-and-tricks/">5/5: tips &amp; tricks</a></p>

