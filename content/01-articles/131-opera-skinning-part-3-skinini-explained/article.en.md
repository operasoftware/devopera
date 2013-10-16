Title: Opera Skinning part 3: Skin.ini explained
----
Date: 2008-06-20 13:59:44
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

<p>pages: <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/">1/5: Introduction, general explanations</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">2/5: Skinning examples</a> &#8212; 3/5: Skin.ini explained &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/">4/5: skin.ini element reference</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-5-tips-and-tricks/">5/5: tips &amp; tricks</a></p>

<h2>Introduction</h2>

<p>This document is a detailed reference showing what all the different  parameters in the <em>skin.ini</em> file do. The next article will provide a similar reference, but that one will detail all the different sections inside <em>skin.ini</em>, and define what elements in the UI they control/specify attributes of.</p>

<h3 id="Index">Index</h3>
<ul>
<li><a href="#info">[Info] section</a><ul>
	<li><a href="#name">Name</a></li>
	<li><a href="#author">Author</a></li>
	<li><a href="#version">Version</a></li>
	<li><a href="#previewimage">Preview Image</a></li></ul>
</li>
<li><a href="#options">[Options] section</a><ul>
	<li><a href="#nativeskin">Native skin</a></li>
	<li><a href="#pagebarmaxbuttonwidth">Pagebar max button width</a></li>
	<li><a href="#pagebarminbuttonwidth">Pagebar min button width</a></li>
	<li><a href="#fallbackforeground">Fallback foreground</a></li>
	<li><a href="#fallbackbackground">Fallback background</a></li>
	<li><a href="#buttontextpadding">Button Text Padding</a></li>
	<li><a href="#centertabs">Center tabs</a></li>
	<li><a href="#largeimages">Large images</a></li>
	<li><a href="#pageclosebuttonontop">PageCloseButtonOnTop</a></li>
	<li><a href="#invertedpagebaricons">Inverted Pagebar Icons</a></li></ul>
</li>
<li><a href="#types">Element Types</a><ul>
	<li><a href="#image">Image</a></li>
	<li><a href="#box">Box</a></li>
	<li><a href="#boxtile">BoxTile</a></li>
	<li><a href="#boxtilehorizontal">BoxTileHorizontal</a></li>
	<li><a href="#boxtilevertical">BoxTileVertical</a></li>
	<li><a href="#boxstretch">BoxStretch</a></li></ul>
</li>
<li><a href="#parameters">Parameter reference</a><ul>
	<li><a href="#native">Native</a></li>
	<li><a href="#type">Type</a></li>
	<li><a href="#corners">Corner Topleft, Corner Topright, Corner Bottomright, Corner Bottomleft</a></li>
	<li><a href="#tiles">Tile Left, Tile Top, Tile Right, Tile Bottom</a></li>
	<li><a href="#tilecenter">Tile Center</a></li>
	<li><a href="#paddings">Padding Left, Padding Bottom, Padding Right, Padding Top</a></li>
	<li><a href="#margins">Margin Left, Margin Bottom, Margin Right, Margin Top</a></li>
	<li><a href="#spacing">Spacing</a></li>
	<li><a href="#color">Color</a></li>
	<li><a href="#textcolor">Text color</a></li>
	<li><a href="#textbold">Text bold</a></li>
	<li><a href="#textunderline">Text underline</a></li>
	<li><a href="#textzoom">Text zoom</a></li>
	<li><a href="#border">Border</a></li>
	<li><a href="#bordercolor">Border color</a></li>
	<li><a href="#width">Width</a></li>
	<li><a href="#height">Height</a></li>
	<li><a href="#clone">Clone</a></li>
	<li><a href="#colorize">Colorize</a></li>
	<li><a href="#blend">Blend</a></li>
	<li><a href="#child0">Child0</a></li>
	<li><a href="#child1">Child1</a></li>
	<li><a href="#fallbackversion">Fallback version</a></li></ul>
</li>
<li><a href="#images">[Images]</a><ul>
	<li><a href="#creatingelements">Creating Elements</a></li>
	<li><a href="#settingparameters">Setting parameters</a></li></ul>
</li>
<li><a href="#boxes">[Boxes]</a></li>
<li><a href="#other">Special stuff</a><ul>
	<li><a href="#specialcolorvalues">Special color values</a></li>
	<li><a href="#comments">Comments</a></li>
	<li><a href="#sizes">Sizes</a></li>
	<li><a href="#states">States</a></li>
	<li><a href="#positions">Positions</a></li>
	<li><a href="#sizestateposition">Combining sizes, states and positions</a></li></ul>
</li>
</ul>

<h2 id="info">[Info] section</h2>

<h3 id="name">Name</h3>
<p>Specifies the skin&#8217;s name, which is displayed in the dialog shown after downloading a skin and in the skin list in the &#8220;Tools &gt; Appearance&#8221; dialog box.</p>

<p class="vvalues">Valid values: any text string</p>

<h3 id="author">Author</h3>

<p>Specifies the author&#8217;s name, which is displayed next to the skin&#8217;s name in the dialog shown after downloading a skin:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_authorskinname.png" alt="" />

<p class="vvalues">Valid values: any text string</p>

<h3 id="version">Version</h3>

<p>The version of the format used for <em>skin.ini</em>. For Opera versions 9.5 and greater this must be set to &#8220;3&#8221;. This setting must not be used to indicate the skin&#8217;s version number as that will likely break the skin in future versions of Opera.</p>
<p>Before version 9.2 skins used <code>Version = 2</code>. The default skin used in 9.5 is very different from the one in 9.2 and thus many skins made for 9.2 or earlier would have broken in 9.5 &#8212; because of this they get a special fallback treatment in Opera 9.5. As these fallbacks will likely be removed in the near future, all skins should be updated to version &quot;3&quot;.</p>

<p class="vvalues">Valid values: 3</p>

<h3 id="previewimage">Preview Image</h3>

<p>This option is currently not being used and can be omitted.</p>

<h2 id="options">[Options] section</h2>

<h3 id="nativeskin">Native skin</h3>

<p>If enabled (by setting the value as &#8220;1&#8221;) Opera will use elements from the operating system to draw the skin instead of using images from the skin. This allows Opera to integrate better with the look of the operating system. Please see <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/#native">the section in part 1</a> for more information on this topic.</p>
<p>There are four different values to enable this setting: &#8220;1&#8221;, &#8220;Windows&#8221;, &#8220;Mac&#8221; and &#8220;Qt&#8221;. &#8220;1&#8221; enables native skinning &#8212; in this case Opera automatically selects the proper source for the native element, depending on the operating system used by the user. The other three options work only on one or two operating systems and will cause the skin to be broken on other systems, therefore &#8220;1&#8221; is the recommended value to use.</p>

<p class="vvalues">Valid values: 0 / 1 / Windows / Mac /Qt</p>

<h3 id="pagebarmaxbuttonwidth">Pagebar max button width</h3>
<p>Specifies the maximum width of tab bar buttons (tabs), specified in pixels. If this option isn&#8217;t set Opera will grow tabs to fit the website&#8217;s &lt;title&gt;. If this option is used to limit the maximum width Opera will still grow the tabs, but they won&#8217;t become any wider than the value set here. To stop tabs from adjusting in size, set both <code>Pagebar max button width</code> and <code>Pagebar min button width</code> (see below) to the same value.</p>

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="pagebarminbuttonwidth">Pagebar min button width</h3>

<p>Specifies the minimum width of tab bar buttons (tabs), specified in pixels.</p>

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="fallbackforeground">Fallback foreground</h3>

<p>Unless disabled (by setting the value as &#8220;0&#8221;) Opera will use images from the standard skin as a fallback for any foreground images (like icons) missing from the skin. This option should be enabled so the skin can still be used when a new version of Opera introduces new icons that aren&#8217;t included in older skins. If disabled, Opera won&#8217;t show anything, which is bad as it can break functionality by causing buttons to not display.</p>

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="fallbackbackground">Fallback background</h3>

<p>Unless disabled (by setting the value as &#8220;0&#8221;) Opera will use images from the standard skin as a fallback for background images (like dialog backgrounds, buttons, etc) missing from the skin. Please see above (<code>Fallback foreground</code>) for more on the effects of this option.</p>

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="buttontextpadding">Button Text Padding</h3>

<p>Specifies the padding around the text labels of buttons added to create some space between the text and their corresponding images. This setting applies to all elements and is cummulative with <a href="#spacing">spacing</a>, which can also be set for any element individually.</p>

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="centertabs">Center tabs</h3>

<p>If enabled (by setting the value as &#8220;1&#8221;) Opera will center tabs in dialog boxes (like the ones in the Preferences dialog), otherwise they&#8217;ll be left-aligned. Please note that this setting doesn&#8217;t apply to the &#8220;tabs&#8221; in the pagebar &#8212; those are called &#8220;Pagebar buttons&#8221;. The default value is &#8220;0&#8221; (left-aligned).</p>

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="largeimages">Large images</h3>
<p>Specifies whether the skin contains large images as an alternative to the standard ones. If enabled (by setting the value to &#8220;1&#8221;) Opera will show the checkbox for &#8220;Large images&#8221; in the Appearance &gt; Toolbar dialog. It&#8217;s only necessary to specify that this should appear if any <code>.large</code> toolbar button images are defined &#8212; the default value is &#8220;0&#8221;. If they exist, the user can choose whether they want to see small icons or large ones (for example 16px vs 28px) by unchecking or checking the &#8220;Large images&#8221; checkbox:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x2_appearance.png" alt="screenshot of Appearance dialog with %22Large images%22 checked" />

<p>The following image shows an example of a skin with large images enabled and disabled.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_largevssmall.png" alt="screenshot of Opera 7 with large images enabled and disabled" />

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="pageclosebuttonontop">PageCloseButtonOnTop</h3>

<p>If enabled (by setting the value as &#8220;1&#8221;) the close button on tabs (pagebar buttons) is aligned to the top of the tab, else it&#8217;ll be centered. Please note that this setting doesn&#8217;t work in Opera versions before 9.5. The default value is &#8220;0&#8221; (vertically centered).</p>

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="invertedpagebaricons">Inverted Pagebar Icons</h3>

<p>If enabled (by setting the value as &#8220;1&#8221;) Opera will load &#8220;Imagename Inverted&#8221; instead of &#8220;Imagename&#8221; for images shown on pagebar buttons. This is especially useful if pagebar is using a similar background color as the icons to be shown on it which would make the icons hardly visible.</p>

<p class="vvalues">Valid values: 0 or 1</p>


<h2 id="types">Element Types</h2>

<h3 id="image">Image</h3>

<p>The image type normally isn&#8217;t used in the form <code>Type = Image</code>. Elements of that type are specified in the <code>[Images]</code> section instead. Every line in that section creates a new element with one image assigned to it.</p>

<p>Instead of using this shorthand way of creating elements you could also do it like this, which is not recommended and only mentioned to aid understanding:</p>

<pre>[Panel Search]
Type			= Image
Tile Center		= buttons/search.png
Width			= 22
Height			= 22</pre>

<p>The <code>Tile Center</code> image expands to fill the space available; if you don&#8217;t want that to happen you have to use a <code>box-type</code>.</p>

<h3 id="box">Box</h3>

<p>This element is the most simple box element, but it is a bit inflexible. It creates a box consisting of 9 elements:</p>

<ul>
<li>One image per corner &#8212; <code>Corner Topleft</code>, <code>Corner Topright</code>, <code>Corner Bottomright</code>, <code>Corner Bottomleft</code>. These are fixed in position in the corners of the element.</li>
<li>One image per border &#8212; <code>Tile Left</code>, <code>Tile Top</code>, <code>Tile Right</code>, <code>Tile Bottom</code>. these are repeated to fill the space along each edge of the element.</li>
<li>One center image that is repeated to fill the empty room left in the middle of the element &#8212; <code>Tile Center</code>.</li>
</ul>


<p>Elements of this type can also be specified in the <code>[Boxes]</code> section. Only one image is specified there, which is used as <code>Tile Center</code>; the other 8 are omitted.</p>

<p>Each of the corner images is placed in their relevant corner, the &#8220;Tile Top/Right/Bottom/Left&#8221; images are placed in the middle of their respective sides, and the &#8220;Tile Center&#8221; image is put in the middle. This is better illustrated with an image:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_box.png" alt="type = box" />

<p>This image also illustrates the problem with <code>Type = Box</code>: If the box is bigger than the images some parts are left unskinned. This is where <code>BoxTile</code> comes in handy; we shall look at this next.</p>

<h3 id="boxtile">BoxTile</h3>

<p>This is an improved version of <code>Type = Box</code>. Its basic structure is the same as for <code>Type = Box</code>, but it&#8217;s more flexible in terms of element resizing. All of the &#8220;Tile &#8230;&#8221; images are repeated (tiled) in order to fill the whole box &#8212; this allows the element to be any size and still be completely covered:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_boxtile.png" alt="Type = Boxtile" />

<pre>[Caption Button Skin]
Type                = BoxTile
Tile Center         = caption/center.png
Tile Left           = caption/left.png
Tile Top            = caption/top.png
Tile Right          = caption/right.png
Tile Bottom         = caption/bottom.png
Corner Topleft      = caption/topleft.png
Corner Topright     = caption/topright.png
Corner Bottomright  = caption/bottomright.png
Corner Bottomleft   = caption/bottomleft.png</pre>

<p>If the box becomes smaller Opera first removes copies of the &#8220;Tile &#8230;&#8221; images; if they&#8217;ve already completely disappeared the corner images will overlay each other, as seen here:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_boxtile_cropped.png" alt="cropped BoxTile" />

<h3 id="boxtilehorizontal">BoxTileHorizontal</h3>

<p>This is a mix between <code>Box</code> and <code>BoxTile</code>. In the horizontal direction images are tiled just like in <code>BoxTile</code>, but vertically they aren&#8217;t tiled and therefore work just like in <code>Box</code>:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_boxtilehorizontal.png" alt="" />

<h3 id="boxtilevertical">BoxTileVertical</h3>

<p>This type works on the same principle as <code>BoxtileHorizontal</code>, except that the directions are switched:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_boxtilevertical.png" alt="" />

<h3 id="boxstretch">BoxStretch</h3>

<p>Introduced in Opera 9.5, this type creates results very similar to <code>Type = BoxTile</code> but it is a lot easier to create them using this method. Instead of having to create nine images only one is needed and Opera will automatically stretch it to the required size.</p>

<p>The image is specified with <code>Tile Center</code>. The value of <code>Stretchborder</code> specifies how much of that image is used to draw the borders and corners (&#8220;0&#8221; is a valid value here). The corners aren&#8217;t stretched at all; the top/bottom borders are stretched horizonally and the left/right borders are stretched vertically. The rest of the image is then used to draw the center area where it&#8217;s stretched to fit both horizontally und vertically.</p>

<pre>[Push Button Skin]
Type              = BoxStretch
Tile Center       = buttons/push_button.png
StretchBorder     = 5</pre>

<p>In the following figure the dotted lines indicate the area set by <code>Stretchborder</code>:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_boxstretch.png" alt="Type = BoxStretch" />

<p>When using the <code>BoxStretch</code> type, the image should be larger than the expected resulting image in the skin to prevent artifacts.</p>

<p><strong>Note:</strong> This type is not supported by releases previous to 9.5.</p>

<h2 id="parameters">Parameter reference</h2>

<p>All parameters in this section can be set for any skin element. Depending on the <code>Type</code> specified and the way the skin is designed, not all parameters are required.</p>

<h3 id="native">Native</h3>

<p>If <a href="#nativeskin">Native skin</a> is enabled it can be disabled for individual elements by setting this option to &#8220;0&#8221;. It&#8217;s not possible to have it globally disabled and then enabled for certain elements.</p>

<p class="vvalues">Valid values: 0 / 1</p>

<h3 id="type">Type</h3>

<p>Specifies the element&#8217;s type &#8212; see <a href="#types">Types</a> for detailed information on this.</p>

<p class="vvalues">Valid values: <code>Image</code>, <code>Box</code>, <code>BoxStretch</code>, <code>BoxTile</code>, <code>BoxTileHorizontal</code>, <code>BoxTileVertical</code></p>

<h3 id="corners">Corner Topleft, Corner Topright, Corner Bottomright, Corner Bottomleft</h3>

<p>Specifies the image to be used to draw a named corner of an element of the types <code>Box</code>, <code>BoxTile</code>, <code>BoxTileHorizontal</code> or <code>BoxTileVertical</code>.</p>

<p class="vvalues">Valid values: the relative path to an image</p>

<h3 id="tiles">Tile Left, Tile Top, Tile Right, Tile Bottom</h3>

<p>Specifies the image to be used to draw a named side of an element of the types <code>Box</code>, <code>BoxTile</code>, <code>BoxTileHorizontal</code> or <code>BoxTileVertical</code>, excluding the area covered by the corner images.</p>

<p class="vvalues">Valid values: the relative path to an image</p>

<h3 id="tilecenter">Tile Center</h3>

<p>Specifies the image to be used to draw the center area of an element of the types <code>Box</code>, <code>BoxTile</code>, <code>BoxTileHorizontal</code> or <code>BoxTileVertical</code>. For <code>Type = Image</code> this is the only image specified.</p>

<p class="vvalues">Valid values: the relative path to an image</p>

<h3 id="paddings">Padding Left, Padding Bottom, Padding Right, Padding Top</h3>

<p>Specifies the padding for the specified side of the element. Padding is inserted between the element border and it&#8217;s contents, as shown here:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_padding.png" alt="" />

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="margins">Margin Left, Margin Bottom, Margin Right, Margin Top</h3>

<p>Specifies the margin for the specified side of the element. Margins are inserted outside the element&#8217;s borders, making the distance between elements larger:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_margin.png" alt="" />

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="spacing">Spacing</h3>

<p>Specifies the spacing to be used for an element. Spacing is added between an element&#8217;s children. Setting it for a toolbar would add some distance between the toolbar buttons that are children of the toolbar; setting it for a specific toolbar button would specify the distance added between the button&#8217;s icon and text.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_spacing.png" alt="spacing set for a toolbar" />

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="color">color</h3>

<p>Specifies the background color of an element. This can be used instead or in addition to images (Tile/Corner). The color is specified as a hex value (for example &#8220;#FFFFFF&#8221; for white). There are also two <a href="#specialcolorvalues">special values</a>, &#8220;Window&#8221; and &#8220;Window Disabled&#8221;, which use operating system colors.</p>

<p class="vvalues">Valid values: A color specified in hex code, &#8220;Window&#8221;, or &#8220;Window Disabled&#8221;</p>

<h3 id="textcolor">Text color</h3>

<p>Specifies the text color. This is often used for highlights, eg as an indication when a page has finished loading.  The color is specified as a hex value (for example &#8220;#FFFFFF&#8221; for white):</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x2_redtext.png" alt="" />

<p class="vvalues">Valid values: A color specified in hex code, &#8220;Window&#8221;, or &#8220;Window Disabled&#8221;</p>

<h3 id="textbold">Text bold</h3>
<p>Makes text bold. The default setting is &#8220;0&#8221;, which means normal font-weight; &#8220;1&#8221; makes the text bold.</p>

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="textunderline">Text underline</h3>
<p>Makes the text underlined. The default setting is &#8220;0&#8221;, which means no underlining; &#8220;1&#8221; makes the text underlined.</p>

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="textzoom">Text zoom</h3>

<p>If this setting is enabled, toolbar button text will be hidden until the toolbar button is hovered over. This setting only works in the <code>[Toolbar Button Skin]</code> section, and with the following criteria:</p>

<ul>
<li>The operating system used must be Windows 2000, Windows XP or Windows Vista</li>
<li>&#8220;Special effects&#8221; must be enabled</li>
<li>The toolbar style must be set to &#8220;Images and text below&#8221;.</li>
</ul>

<p>The following image shows the Opera 7 main bar with text zoom enabled:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/131-opera-skinning-part-3-skinini-explained/x3_textzoom.png" alt="" />

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="border">Border</h3>

<p>Specifies the border width in pixels. The border grows from the edge of the element, so if it&#8217;s set too large, it&#8217;ll overlap the button content.</p>

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="bordercolor">Border color</h3>

<p>Specifies the border color. <code>Border</code> must be set for this setting to have an effect. The color is specified as a hex value (for example &#8220;#FFFFFF&#8221; for white).</p>

<p class="vvalues">Valid values: A color in hex code, &#8220;Window&#8221;, or &#8220;Window Disabled&#8221;</p>

<h3 id="width">Width</h3>
<p>Specifies the element&#8217;s width in pixel.</p>

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="height">Height</h3>
<p>Specifies the elements height in pixel.</p>

<p class="vvalues">Valid values: Any positive whole number</p>

<h3 id="clone">Clone</h3>

<p>If set Opera will copy all parameters from the specified element to the current one. If you want two elements to look the same you only have to define all parameters once and can then just clone them across to any others you specify the <code>Clone</code> element on.</p>

<p>If an option is both cloned from another element and set for the current one the cloned value will be overwritten and the element&#8217;s own setting is used.</p>

<p><strong>Warning</strong>: Be careful not to create clone loops &#8212; they&#8217;ll crash Opera!</p>

<p class="vvalues">Valid values: An element name</p>

<h3 id="colorize">Colorize</h3>

<p>If enabled, color schemes will be applied to the element. color schemes allow you to change a skin&#8217;s coloring to the colors chosen by the user. The default value is &#8220;1&#8221; but for images specified in <code>[Images]</code> and <code>[Boxes]</code> sections it&#8217;s &#8220;0&#8221;.</p>

<p class="vvalues">Valid values: 0 or 1</p>

<h3 id="blend">Blend</h3>
<p>Specifies the opacity to be used for <code>.hover</code> elements. &#8220;0&#8221; means the element isn&#8217;t visible at all, while &#8220;100&#8221; means it&#8217;s completely opaque and doesn&#8217;t let the one below shine through.</p>

<p class="vvalues">Valid values: Any whole number from 0 to 100.</p>

<h3 id="child0">Child0</h3>
<p>Creates a child element inside the element. Depending on the child&#8217;s type it is either resized to fill the content area available (for <code>Type = Image</code> and items specified in the <code>[Images]</code> section) or just put in the center of the element (for Box-types and items specified in the <code>[Boxes]</code> section).</p>
<p>If you want to specify multiple child elements for one parent you have to number them. The first child should always be called <code>Child0</code>, the second one <code>Child1</code>, and so on.</p>
<p>Examples of current usage in Opera&#8217;s default skin include the arrows in scrollbar button, and icons in caption buttons (close, minimize, restore).</p>

<p class="vvalues">Valid values: Any element name</p>

<h3 id="child1">Child1</h3>
<p>Second child element, see <a href="#child0">Child0</a>.</p>
<p class="vvalues">Valid values: Any element name</p>

<h3 id="fallbackversion">Fallback version</h3>
<p>Introduced in Opera 9.5, this option provides backwards compatibility with older skins. It&#8217;s only to be used in standard_skin.zip, which ships with Opera; it mustn&#8217;t be used with user-created skins.</p>
<p>If set to &#8220;3&#8221; and a skin with &#8220;Version = 2&#8221; with this element missing is loaded the element won&#8217;t be loaded from standard_skin.zip as usual but instead Opera will use a hardcoded fallback to an element that existed before 9.5. For example, <code>[Panel Treeview Skin]</code> will fallback to <code>[Treeview Skin]</code>.</p>
<p class="vvalues">Valid values: 3</p>


<h2 id="images">[Images]</h2>

<p>All elements specified in this section are of the type <a href="#image">Images</a>. Putting them in this section is a more convenient way of specifying them as it&#8217;s a lot shorter and better arranged. Most images used as toolbar buttons or icons are usually specified in this section. Note that, as with all elements of the type <code>Image</code>, the image is resized to fill the available space.</p>

<h3 id="creatingelements">Creating Elements</h3>
<p>Elements are specified using the syntax <code>Name = path/to/image.png</code> with one element per line.</p>

<h3 id="settingparameters">Setting parameters</h3>
<p>As with the complex version of specifying elements you can set various parameters as described above. Instead of specifying them using Name plus value, the values are just appended after the path to the image, seperated by a comma, in the following order:</p>

<ul>
<li><code>Colorize</code></li>
<li><code>Margin Left</code></li>
<li><code>Margin Top</code></li>
<li><code>Margin Right</code></li>
<li><code>Margin Bottom</code></li>
<li><code>Padding Left</code></li>
<li><code>Padding Top</code></li>
<li><code>Padding Right</code></li>
<li><code>Padding Bottom</code></li>
</ul>

<p>If an option isn&#8217;t specified Opera uses the default value; the defaults are <code>Colorize = 0</code>, <code>Margins = 0</code>, <code>Paddings = 2</code>.</p>

<p>Note that for most skin elements specified in the <code>[Images]</code> section neither margins nor padding have any effect!</p>

<h3 id="imagesexamples">Examples for elements specified in <code>[Images]</code> section</h3>

<pre>Reload       = buttons/reload.png
Stop              = buttons/stop.png, 1, 2, 0, 2, 0
Forward           = buttons/forward, 0, 1, 1, 1, 1, 3, 2, 3, 2</pre>

<h2 id="boxes">[Boxes]</h2>
<p>All elements specified in this section are of type <a href="#box">Box</a>. Specifying them in this section is just a more convenient way of specifying them as it&#8217;s a lot shorter and better arranged.</p>

<p>Elements in this section are specified in the same way they are in the <a href="#images">[Images]</a> section, and parameters are also set in the same way &#8212; please see that section for more details. The fundamental difference between the two of them is the type used &#8212; elements specified in the <code>[Boxes]</code> section don&#8217;t grow to fit the available space.</p>

<p>Examples of elements commonly found in this section are the arrows to be used in scrollbars and dropdowns and the caption buttons.</p>


<h2 id="other">Other special settings</h2>

<h3 id="specialcolorvalues">Special color values</h3>

<p>&#8220;Window&#8221; and &#8220;Window Disabled&#8220; are special color values used by Opera. Instead of specifying a color as a hex value you can tell Opera to get the color from the operating system it&#8217;s running on instead. Opera will query the operating system for the color and then display it just as if it was specified as a hex value.</p>

<p>&#8220;Window&#8221; is the color used by operating systems to fill blank (background) space. On most systems, including Windows, Mac OS X and most Linux distributions this is by default set to white and can be changed in the systems settings.</p>
<p>&#8220;Window Disabled&#8221; is the color used to fill disabled space, in most cases this will be a shade of grey.</p>

<p>These two color values are often used for elements like address fields, panel backgrounds and similar as this allows the user to preserve their operating system color scheme across Opera as well, to a certain extent.</p>

<h3 id="comments">Comments</h3>
<p>You can use &#8220;;&#8221; or &#8220;#&#8221; at the start of lines to mark them as comments &#8212; these lines will then be ignored by Opera.</p>

<h3 id="sizes">Sizes</h3>
<p>Opera supports three different element sizes which allow the user to adjust elements. Those sizes are toolbar specific and can&#8217;t be enabled for single elements only.</p>

<ul>
<li>normal: If no size is specified Opera will just display the element as it is.</li>
<li><code>.large</code>: To enable large elements the <a href="#largeimages">Large Images</a> option in <code>[Options]</code> must be enabled. Large elements are then specified by adding and additional element with <code>.large</code> appended to the element&#8217;s name, eg <code>Reload = small/reload.png</code> becomes <code>Reload.large = small/reload.png</code>.</li>
<li><code>.mini</code>: For toolbars with &#8220;Mini Buttons&#8221; enabled Opera automatically resizes elements to 80% of their size and padding if they&#8217;re larger than 16*16px. It&#8217;s not possible to specify seperate mini images but sections like eg <code>[Statusbar Skin.mini]</code> and <code>[Dropdown Skin.mini]</code> can be specified.</li>
</ul>

<p>Additional to these 3 sizes users can set a custom size in percentage in &#8220;Appearance&#8221; dialog.</p>

<h3 id="states">States</h3>
<p>An element can exist in different states. States are defined by appending the states name to the elements name, seperated by a dot.</p>

<p>The available states are as follows:</p>

<ul>
<li id="hover"><code>.hover</code>: This is used when the mouse is placed above an element. The hover state is drawn on top of the normal state. Thus if elements with transparency are used for the .hover state the normal one will still shine through.</li>
<li id="pressed"><code>.pressed</code>: This state is used when a button is pressed with the mouse. As such it&#8217;s usually visited for short moments only.</li>
<li id="attention"><code>.attention</code>: The attention state is used to indicate special situations and is supported by only a few elements, for instance:
<ul><li><code>[Pagebar Button Skin.attention]</code> is used when an inactive tab has finished loading</li>
<li><code>[Panel Mail.attention]</code> indicates new messages</li>
<li><code>[Panel Transfers.attention]</code> indicates finished transfers</li>
<li><code>[Selector Button Skin.attention]</code> is used with <code>[Panel Mail.attention]</code> and <code>[Panel Transfers.attention]</code></li>
<li><code>[Trash.attention]</code> is used when a popup is blocked</li></ul>
</li>
<li id="selected"><code>.selected</code>: Indicates an element that&#8217;s currently selected, eg the active pages tab in the tab bar or buttons indicating their state.</li>
<li id="open"><code>.open</code>: This is used for elements that can opened and closed, eg mail threads or bookmark folders.</li>
<li id="disabled"><code>.disabled</code>: This state is used for elements that currently can&#8217;t be used, eg the Wand button on pages with no login details saved.</li>
</ul>

<h3 id="positions">Positions</h3>
<p>Toolbars and their buttons can be styled depending on the toolbar&#8217;s placement as well. Positions are defined by appending the name to the elements name, separated by a dot.</p>
<p>The four positions available are <code>.top</code>, <code>.right</code>, <code>.bottom</code> and <code>.left</code>.</p>
<p>A common usecase for positions is the pagebar &#8212; depending on the bar&#8217;s position different images are used for #8212; please see that section for more details. The fundamental difference between the two of them is the type used the pagebar buttons so they look attached to the document.</p>

<h3 id="sizestateposition">Combining sizes, states and positions</h3>
<p>You can use more than one size, state or position for an element and even combine them. For example, <code>[Pagebar Button Skin.hover.attention]</code> is used when a page has finished loading (<code>.attention</code>) and you hover that tab (<code>.hover</code>). Likewise, <code>[Pagebar Button Skin.bottom.selected]</code> is used for the active tab (<code>.selected</code>) with the pagebar placed at the bottom (<code>.bottom</code>).</p>
<p>When using those combinations you have to stick to a certain order: first you have to set the size, then position and finally the states in the order <code>.pressed</code>, <code>.selected</code>, <code>.hover</code> and <code>.attention</code>. <code>.disabled</code> can be combined with positions only.</p>

<p>pages: <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/">1/5: Introduction, general explanations</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">2/5: Skinning examples</a> &#8212; 3/5: Skin.ini explained &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/">4/5: skin.ini element reference</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-5-tips-and-tricks/">5/5: tips &amp; tricks</a></p>
