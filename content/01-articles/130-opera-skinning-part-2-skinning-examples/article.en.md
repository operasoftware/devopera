Title: Opera Skinning part 2: Skinning examples
----
Date: 2008-06-20 13:59:39
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

<p>Pages: <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/">1/5: Introduction</a> &#8212; 2/5: Skinning examples &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">3/5: Skin.ini explained</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/">4/5: skin.ini element reference</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-5-tips-and-tricks/">5/5: tips &amp; tricks</a></p>

<h2 id="intro">Introduction</h2>
<p>This part introduces you to the skin settings file, <em>skin.ini</em>, by taking you through some common examples of how to change various parts of the Opera skin. <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">Part 3</a> of the article series will provide a fairly exhaustive reference showing what all the different elements inside <em>skin.ini</em> do, but I thought looking at some examples first would be a more effective way to learn the art of manipulating <em>skin.ini</em>.</p>

<p>Most of the examples in this part will edit the styling of the toolbar buttons, and were chosen because the elements they affect are always visible in the default setups and have most of the attributes you&#8217;re going to want to  commonly change. In Opera&#8217;s default setup you&#39;ll find several toolbar buttons without text in the address bar (Previous, Next, Reload, &#8230;) and some toolbar buttons with text in the main bar that can be enabled in &#8220;View &gt; Toolbars&#8221;. I&#8217;ll be looking at manipulating a number of these in the examples below. For the changes to take effect in these examples you need to save the <em>skin.ini</em> file and any graphics you changed, re-zip the skin package, <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction#locating">copy it back to the appropriate place</a>, and then restart Opera and reapply the skin.</p>

<h3>Index</h3>
<ul>
<li><a href="#textcolor">Setting the text color on toolbar buttons</a></li>
<li><a href="#backgroundcolor">Background color</a></li>
<li><a href="#borders">Borders</a></li>
<li><a href="#paddingmargin">Padding &amp; margin on toolbar buttons</a></li>
<li><a href="#spacing">Spacing</a></li>
<li><a href="#types">Type BoxStretch/BoxTitle</a></li>
<li><a href="#states">States (.hover / .attention / .selected / .pressed)</a></li>
<li><a href="#positions">Positions (.bottom / .left / .top / .right)</a></li>
<li><a href="#cloning">Cloning</a></li>
<li><a href="#childs">Child elements</a></li>
<li><a href="#icons">Icons</a></li>
<li><a href="#large">Large Images</a></li>
</ul>

<h3 id="textcolor">Setting the text color on toolbar buttons</h3>
<p>In this first example you&#8217;ll change the text color of toolbar buttons. This will influence all buttons on toolbars like mainbar, addressbar, mail toolbar, or panels.</p>
<p>Open <em>skin.ini</em> and find the section <code>[Toolbar Button Skin]</code>. There&#8217;s no text color set, so you have to add the <code>
Text Color = </code> option  first. The color value is specified as a hex value with a leading &#8220;#&#8221;.</p>
<p>Add the line <code>Text Color = #FF0000</code> to cause the text to become red:</p>

<pre>[Toolbar Button Skin]
Text Color    = #FF0000</pre>

<p>The toolbar buttons should now look like this:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_redtext.png" alt="%22new page%22 with red text on toolbar buttons" />


<h3 id="backgroundcolor">Background color</h3>
<p>To set an elements background color you need to add the option <code>Color =</code> to the section controlling that element, and specify the color using a hex value. If <code>Color</code> isn&#8217;t set Opera makes the element transparent, causing the background from the element below to shine through.</p>

<p>In the <code>[Toolbar Button Skin]</code> section set <code>Color =</code> to &#8220;#0000FF&#8221; to add a blue background, as follows:</p>

<pre>[Toolbar Button Skin]
Color      = #0000FF</pre>

<p>This should have the folowing effect:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_bluebackground.png" alt="blue background" />


<h3 id="borders">Borders</h3>
<p>To add a border to an element you have to add two options:</p>

<ul>
<li><code>Border =</code> sets the border width, the default value being &#8220;0&#8221; (which means no border). Bear in mind that the border will start at the edge of the element and grow inwards &#8212; setting a border width of 10 won&#8217;t make the element any bigger; it will just start to cover up the element graphic.</li>
<li>The second option, <code>Border Color =</code>, sets the border color. As with <code>Text Color</code>, the color is specified as a hex value.</li>
</ul>

<p>Try it yourself &#8212; add the following 2 lines to the <code>[Toolbar Button Skin]</code> section to set a 1 pixel blue border for all toolbar buttons:</p>

<pre>Border     = 1
Border Color    = #0000FF</pre>

<p>After applying these changes your buttons should look like this:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_blueborder.png" alt="Opera with blue border on toolbar buttons" />

<p>To add more complex borders you can use images &#8212; how to do this is described <a href="#types">later in this document</a>.</p>


<h3 id="paddingmargin">Padding &amp; margin on toolbar buttons</h3>

<p>Paddings set the distance between an elements borders and its content; margins set the distance between an elements border and the next element. They work in the same way to the same properties of the HTML box model.</p>

<p>Both paddings and margins are set for all 4 directions (Top, Right, Bottom, Left) independently. The default value is 0, and the range of values that can be set isn&#8217;t limited to any particular bounds. Negative values are also allowed. </p>

<p>For demonstration purposes setting paddings and margins to high values will work best, as this ensures that they will be easily visible, so that&#8217;s what we will do in this example. The section <code>[Toolbar Button Skin]</code> already has 5 of the 8 parameters set so only the missing 3 ones need to be added. Set the value for <code>Padding Top =</code> to &#8220;20&#8221; and <code>Margin Right =</code> to &#8220;10&#8221;, as shown below:</p>

<pre>[Toolbar Button Skin]
Padding Left        = 4
Padding Top         = 20
Padding Right       = 6
Padding Bottom      = 5
Margin Right        = 10
Margin Left         = 0
Margin Top          = 0
Margin Bottom       = 0</pre>

<p>You should now be able to see a big space at the top (the padding), inside the blue border, and a smaller spacing between the buttons, outside the blue border:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_paddingsmargins.png" alt="buttons with blue border and spacing" />

<p>To learn more about these settings, have a look at the detailed explanations of <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine#padding">padding</a> and <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine#margin">margin</a> in the next article.</p>


<h3 id="spacing">Spacing</h3>
<p>After having learnt how paddings and margins influence the distances on the inside and outside of the border, you&#8217;ll now set the spacing between a button&#8217;s image and its text. To do this, you add the option <code>Spacing =</code> and set the distance in pixels.</p>

<p>This option automatically adds some spacing where needed. If you set Opera&#8217;s Image Style setting (see the Toolbars tab inside Tools &gt; Appearence) to &#8220;Images only&#8221;, then spacing is completly ignored. If on the other hand you set it to &#8220;Image and text below&#8221; it&#8217;s added below the image, and if it&#8217;s set to &#8220;Images and text on right&#8221; it&#8217;s added to the right of the image.</p>
<p>In the standard Opera skin <code>Spacing =</code> is set to &#8220;2&#8221; for <code>[Toolbar Button Skin]</code>; go ahead and change that value to &#8220;15&#8221; to make it more visible, as shown below:</p>

<pre>[Toolbar Button Skin]
Spacing      = 15</pre>

<p>This results in a change like the following:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_spacing.png" alt="buttons with spacing" />


<h3 id="types">Type BoxStretch/BoxTitle</h3>
<p>While working with Opera you might already have noticed that toolbar button backgrounds change when you hover over them. While this could have been done using the parameters to set border and background colors it is in fact done using images.</p>

<p>To be able to use images as element backgrounds you first have to define the elements <code>Type =</code>. The type most commonly used types Opera&#8217;s standard skin are <code>BoxStretch</code> and <code>BoxTile</code>:</p>
<ul>
<li>
  <p>In <code>BoxTile</code> elements you set a total of nine images:</p>

  <ul>
  <li>One image per corner &#8212; <code>Corner Topleft</code>, <code>Corner Topright</code>, <code>Corner Bottomright</code>, <code>Corner Bottomleft</code>. These are fixed in position in the corners of the element.</li>
  <li>One image per border &#8212; <code>Tile Left</code>, <code>Tile Top</code>, <code>Tile Right</code>, <code>Tile Bottom</code>. These are repeated to fill the space along each edge of the element.</li>
  <li>One center image that is repeated to fill the empty room left in the middle of the element &#8212; <code>Tile Center</code>.</li>
  </ul>

  <p>These images are demonstrated by the following:</p>

  <img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x3_boxtile.png" alt="Type = BoxTile" />


  <p>If you have a look at the <code>[Toolbar Button Skin.pressed]</code> section in <em>skin.ini</em>, you&#8217;ll notice the following code:</p>

  <pre>[Toolbar Button Skin.pressed]
Type                = BoxTile
Tile Center         = selector_button/selector_selected.png
Tile Left           = border/simple_border.png
Tile Top            = border/simple_border.png
Tile Right          = border/simple_border.png
Tile Bottom         = border/simple_border.png
Corner Topleft      = border/simple_border.png
Corner Topright     = border/simple_border.png
Corner Bottomright  = border/simple_border.png
Corner Bottomleft   = border/simple_border.png</pre>

  <p>As you can see, all corners and borders in the default skin use the same image &#8212; <code>border/simple_border.png</code>; <code>Tile Center =</code> uses a different one.</p>

  <p>Let&#8217;s do something interesting &#8212; copy these 10 lines to the <code>[Toolbar Button Skin]</code> section to style the toolbar buttons in normal state &#8212; the skin should now look like this:</p>

  <img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_type_1.png" alt="buttons surrounded with blue border" />

  <p>If you remove the 4 lines that style the borders (Tile Left, Tile Top, Tile Right, Tile Bottom), then reload the skin you&#8217;ll notice that only the corners and the center of the image stay colored, and the borders become transparent:</p>

  <img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_noborders.png" alt="buttons with transparent borders" />

  <p>The area that is left transparent is determined by the existing images. In this example the corner images are 1 x 1 px, thus the room reserved for borders is 1px in height for the top and bottom borders and 1px in width for the left and right borders. If the corner images were 5px high and 2px, wide the height reserved for top and bottom borders would be 5px but the width reserved for left and right borders would only be 2px.</p>

  <p>The same goes for removing  the corner images, thus it&#8217;s always important to create corner and border images to match each other. It isn&#8217;t so important for the center image, as that will always be tiled to fill the room left in the middle.</p>

  <p>In <code>BoxStretch</code> you only set one image which is then stretched automatically to fit. This stretching ignores a specified border and is only applied to the middle of the image.</p>

  <p>The image is specified as <code>Tile Center</code>, and the size of the border not to be stretched is specified in pixels under the <code>StretchBorder</code> property, as indicated by the dotted line in the following figure:</p>

  <img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x3_boxstretch.png" alt="Type = BoxStretch" />


  <p>The address bar background is drawn using a BoxStretch skin with <code>StretchBorder</code> set to &#8220;3&#8221;. This is because the left-most three pixels of the image contain a shadow-like gradient:</p>
  <pre>[Addressbar Skin]
Fallback version  = 3
Type              = BoxStretch
StretchBorder     = 3
Tile Center       = backgrounds/addressbar.png</pre>

  <p>By setting <code>StretchBorder = 0</code> you stretch that gradient as well:</p>
  <img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_boxstretch_no_border.png" alt="stretched border and gradient" />
</li>
</ul>

<p>These two types both have their pros and cons, and which one is suited better depends on the situation. Most elements that can be styled with <code>BoxTile</code> can also be styled with <code>BoxStretch</code>, and the latter is often fast to create as you need only one image instead of nine.</p>

<p>For an explanation of the other types check out the <a href="/articles/view/opera-skinning-part-3-skin-ini-explaine/#types">types</a> section in article 3.</p>


<h3 id="states">States (.hover / .attention / .selected / .pressed / .open)</h3>

<p>Reading the above section about Types, you might have noticed the mention of <code>[Toolbar Button Skin.hover]</code>. Adding <code>.hover</code> to a section&#8217;s name tells Opera to use this element only when you hover your mouse over it.</p>

<p>The parameters used to define properties of the states are the same as you use for any other element.</p>

<p>The hover state is drawn on top of the normal state, so if you use elements with transparency for the <code>.hover</code> state the normal one will still shine through.</p>

<p>The same goes for all other states. The available states are <code>.hover</code>, <code>.pressed</code> (used when they are actually clicked on), <code>.selected</code> (used when the element is selected, eg by a keyboard shortcut), <code>.disabled</code> (for example used for the Wand button if Opera doesn&#8217;t have login information stored for the site), <code>.attention</code> (for instance used to indicate a tab that just finished loading and for the trash bin in the tab bar when a popup was blocked) and <code>.open</code>.</p>

<p>As states are drawn on top of the normal state you don&#8217;t need to specify paddings and margins again, unless you want to change them for that state.</p>

<p>Note that not every element supports all states.</p>

<h3 id="positions">Positions (.bottom / .left / .top / .right)</h3>

<p>Similar to the states mentioned above, there are also location indicators. These are used to style toolbars and their contents depending on their position. In Opera&#8217;s standard skin you&#8217;ll notice that the tabs look different depending on whether you have the tab bar placed at the top or the bottom. This is because the tabs are styled using <code>[Pagebar Button Skin.bottom]</code> if the tab bar is placed at the bottom, and <code>[Pagebar Button Skin]</code> for the other 3 possible placements.</p>

<p>If a location-specific element is available, Opera will use that one, otherwise it&#8217;ll fall back to the non-specific one.</p>
<p>Let&#8217;s add a new style for styling the tab bar when it&#8217;s placed on the right of the user interface. To do this, you first have to add the corresponding section to <em>skin.ini</em> &#8212; <code>[Pagebar Skin.right]</code>. Please note that <code>[Tabs Skin]</code> is not used for styling tab bar, but for the tab buttons in dialogs.</p>

<p>In this newly created section, specify the type to be used and the images as follows:</p>

<pre>[Pagebar Skin.right]
Type      = BoxTile
Tile Center    = backgrounds\dialog.png</pre>

<p>After adding this section to your skin and moving the tab bar to the right of the user interface it should look like this:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_pagebaronright.png" alt="" />

<p>As you can see, the &#8220;New tab&#8221; button doesn&#8217;t look like an arrow anymore &#8212; that&#8217;s because the <code>[Pagebar Floating Skin.right]</code> section is empty. To give it back its arrow look copy the options from <code>[Pagebar Floating Skin]</code> to <code>[Pagebar Floating Skin.right]</code>:</p>

<pre>[Pagebar Floating Skin.right]
Type            = BoxTileHorizontal
Tile Left       = backgrounds/pagebar_floating_left.png
Tile Center     = backgrounds/pagebar_floating_center.png
Tile Right      = backgrounds/pagebar_floating_right.png
Padding Top     = 0
Padding Bottom  = 0
Padding Right   = 0
Padding Left    = 0
Margin Left     = 0
Margin Top      = 0
Margin Bottom   = 0
Margin Right    = -23</pre>

<p>When you&#8217;ve finished, the tab bar will look like this:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_pagebaronrightwithnewtab.png" alt="" />

<h3 id="cloning">Cloning</h3>
<p>If you want several elements to look the same you don&#8217;t have to specify all parameters for each one independently &#8212; instead you can do it once and tell Opera to copy those parameters for other elements. This is done using the <code>Clone =</code> option.</p>

<p>As its value it takes the name of the element you want to clone the information from, omitting the square brackets. To make the normal state of toolbar buttons look as if they were hovered you&#8217;d replace the default <code>[Toolbar Button Skin]</code> with this:</p>

<pre>[Toolbar Button Skin]
Clone        = Toolbar Button Skin.hover</pre>

<p>The buttons should then look like this:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_clonehovered.png" alt="" />

<p>While <code>Clone =</code> copies all parameters from one element to another one, you can still overwrite them by adding the <code>Clone</code> option to the specific element you&#8217;re copying to, for example:</p>

<pre>[Toolbar Button Skin]
Clone         = Toolbar Button Skin.hover
Tile Center   = backgrounds/pagebar.png
Margin Right  = 3</pre>

<p>This would have the following effect:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_clonechanged.png" alt="" />

<h3 id="childs">Child elements</h3>

<p>Another popular option is <code>Child0 =</code>. This option creates an element inside the element you specify it in. The child is resized to fill its parent element&#8217;s content. If there are  borders or corners set, the area they occupy won&#8217;t be filled, just like with &#8220;Tile Center&#8221; in <code>Type = BoxTile</code>.</p>

<p>For the next example you&#8217;ll add a child element to the dialog buttons. As the dialog button element is cloned to other elements like dropdown buttons and scrollbar buttons, those elements will also be influenced.</p>

<p>Find the <code>[Push Button Skin]</code> section and add the line <code>Child0 = Reload</code> to it. This should make the buttons in dialogs look like this:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_child.png" alt="" />

<p>You can add multiple children to an element &#8212; the first one is called <code>Child0 =</code>, the second one <code>Child1 =</code>, and so on.</p>


<h3 id="icons">Icons</h3>

<p>You might already have wondered how to tell Opera which image to use for the icons used in toolbars and other places. The &#8220;Reload&#8221; icon mentioned in the previous example doesn&#8217;t have a section of its own, so how is it defined?</p>

<p>Towards the end of <em>skin.ini</em> you&#8217;ll find the <code>[Images]</code> and <code>[Boxes]</code> sections. These are special sections that don&#8217;t work the same way as the ones you&#8217;ve got to know so far &#8212; every line in those sections creates a new element with one image assigned to it.</p>

<p>The <code>Panel Search = buttons/search.png</code> line creates a <code>Panel Search</code> element and assigns the &#8220;search.png&#8221; image found in the &#8220;buttons&#8221; directory to it. When used, this image will be displayed as is, thus it won&#8217;t be resized or repeated (tiled) in any way.</p>

<p>Instead of using this short way of creating elements you could also do it like this; bear in mind however that this is not recommended, and only mentioned to aid your understanding:</p>

<pre>[Panel Search]
Type         = Image
Tile Center  = buttons/search.png
Width        = 22
Height       = 22</pre>

<h3 id="large">Large Images</h3>
<p>A nice feature that isn&#8217;t used in Opera&#8217;s default skin is the ability to specify an icon in two different sizes. This enables users to choose whether they want to use smaller images to save screen space or larger ones that are often nicer as they have more details.</p>
<p>Before you can start using large images you have to tell Opera you&#8217;re using them in the skin by adding the line <code>Large images = 1</code> in <code>[Options]</code> section. This will make Opera show a &#8220;Large images&#8221; checkbox in the &#8220;Appearance&#8221; dialog that can be set independently for each toolbar:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/130-opera-skinning-part-2-skinning-examples/x2_appearance.png" alt="screenshot of Appearance dialog with %22Large images%22 checked" />

<p>After adding that option you can now specify the elements. That&#8217;s done by adding <code>.large</code> to the element you want a large version of. To create a large version of the &#8220;Reload&#8221; button you&#8217;d add <code>Reload.large = large_buttons/reload.png</code> to the <code>[Images]</code> section where &#8220;large_buttons&#8221; would be a folder containing larger versions of the images.</p>

<p>You can add large image versions for other elements in the same way, for example <code>[Toolbar button skin.large]</code> for large versions of the <code>[Toolbar button skin]</code> images.</p>

<p>Please note that unlike <a href="#states">states</a> and <a href="#positions">positions</a> there&#8217;s no fallback element for large images!</p>

<p>Pages: <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/">1/5: Introduction</a> &#8212; 2/5: Skinning examples &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">3/5: Skin.ini explained</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/">4/5: skin.ini element reference</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-5-tips-and-tricks/">5/5: tips &amp; tricks</a></p>a href=
