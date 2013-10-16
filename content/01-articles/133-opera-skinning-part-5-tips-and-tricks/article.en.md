Title: Opera Skinning part 5: Tips and tricks
----
Date: 2008-06-20 13:59:48
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

<p>pages: <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/">1/5: Introduction, general explanations</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">2/5: Skinning examples</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">3/5: Skin.ini explained</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/">4/5: skin.ini element reference</a> &#8212; 5/5: tips &amp; tricks</p>

<h2 id="intro">Introduction</h2>
<p>In this article I&#8217;ll give you some tips and tricks to help you test skins, develop new skins more easily, and improve the quality of your skins. If you have any tips of your own to share, leave a comment, and they may get added!</p>

<h3 id="Index">Index</h3>
<ul>
<li><a href="#colortoid">Use colors to identify elements</a></li>
<li><a href="#specifychangedonly">Specify only changed elements</a></li>
<li><a href="#renamesections">Rename sections to test them</a></li>
<li><a href="#ownsections">Create your own sections</a></li>
<li><a href="#choiceofcolor">Choice of color</a></li>
<li><a href="#keepinmindsizecolor">Keep the icon size and color scheme settings in mind</a></li>
<li><a href="#inverted">Use of &#8220;Inverted&#8221; icons on the tab bar</a></li>
<li><a href="#mailheaderimages">Mail header images</a></li>
</ul>

<h3 id="colortoid">Use colors to identify elements</h3>
<p>When you aren&#8217;t sure which sections in <em>skin.ini</em> you have to edit to change a certain part of the Opera user interface, a clever idea is to create a test skin to help you identify the elements that each part of <em>skin.ini</em> controls.</p>
<p>Instead of specifying types, Tile-images and parameters you can just set one color per element, choosing different colors for each element. For example you can color <code>[Pagebar skin]</code> in red, <code>[Toolbar button skin]</code> in blue, and so on. To figure out what element in the Opera skin is controlled by each section of <em>skin.ini</em>, you can then look at what color each element is, and then look for that color inside <em>skin.ini</em>.</p>


<h3 id="specifychangedonly">Specify only changed elements</h3>
<p>To keep your <em>skin.ini</em> file small and easy to read you should only specify sections you have actually changed, and miss out the rest. Opera will then fallback to the &#8220;Opera Standard&#8221; skin for any elements you want to just look the same as the default. If you want, you can add a comment to <em>skin.ini</em>, saying the element is loaded from the standard skin.</p>
<p>The same goes for parameters you haven&#8217;t changed. If you omit them from your <em>skin.ini</em> file, Opera will use the default value so you don&#8217;t have to specify them if default is what you want to use anyway.</p>


<h3 id="renamesections">Rename sections to test them</h3>
<p>Elements can sometimes be hard to find, eg the fraud indicator in the address field, which only appears on sites considered to be dubious. To be able to test these elements easily it&#8217;s a good idea to put their parameters in another section.</p>

<p>For example, you could rename the <code>[Untrusted Site Security Button Skin]</code> section to <code>[Low Security Button Skin]</code> and comment out the original <code>[Low Security Button Skin]</code> section. The indicator for fraud sites will then appear on any unverified site, so you don&#8217;t have to find a fraud site to test with.</p>


<h3 id="ownsections">Create your own sections</h3>
<p>Opera ignores unknown sections in <em>skin.ini</em>, but you can also create your own ones. This is especially useful if you want several elements to look the same &#8212; then when you want to change them you only have to change them in one place in <em>skin.ini</em>, not in multiple places.</p>
<p>For example, if you wanted all toolbar to be styled with the same images but different paddings, you could create a section <code>[My custom toolbar skin]</code> with all the images. In the toolbar sections you then only need to clone this custom section and specify the paddings.</p>


<h3 id="choiceofcolor">Choice of color</h3>
<p>Some elements should always be styled the same, no matter which skin one is using. For example, the high security indicator should always be yellow while the fraud indicator should be red.</p>

<p>In the same way <code>[Edit Skin]</code>, <code>[Treeview Skin]</code>, <code>[Listbox Skin]</code>, <code>[MultilineEdit Skin]</code>, <code>[MultilineEdit Skin]</code> and <code>[Dropdown Skin]</code> should always use &#8220;Window&#8221; as color.</p>

<p>For these elements you should also disable <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/#colorize">Colorize</a> as that could change the colors as well.</p>


<h3 id="keepinmindsizecolor">Keep the icon size and color scheme settings in mind</h3>
<p>The easiest way for the user to change the look of a skin is to change the icon size and color schemes. Both can easily be done in the &#8220;Appearance&#8221; dialog, so check that your skin still looks good even if the user changes those values.</p>


<h3 id="hover">Hover effects</h3>
<p>As described on the previous pages hover effects can be set using the <code>.hover</code> state. When that state isn&#8217;t specified Opera will apply its own hover effect, which adds a lighter grey with a touch of blue. This native effect can&#8217;t be adjusted.</p>
<p>On hover this native effect adds an overlay to the existing image using the formula MIN(color + (100 * colorfactor) / 255) with the RGB values of 60, 60, 140.</p>
<p>Example: If a pixel previously had the RGB values 206, 164, 33 the result would be MIN(206 + (100 * 60) / 255) = 229, MIN(164 + (100 * 60) / 255) = 187, MIN(33 + (100 * 140) / 255) = 87 when hovered.</p>


<h3 id="inverted">Use of &quot;Inverted&quot; icons on the tab bar</h3>
<p>If a skin is using different colors for the toolbars and the tab bar, like Opera&#8217;s standard skin does, it sometimes occurs that icons that are easy to distinguish on toolbars become hardly visible on the tab bar. As both bars normally use the same icons, this causes severe usability problems.</p>
<p>By enabling <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/#invertedpagebaricons">Inverted Pagebar Icons</a> in the <code>[Options]</code> section of <em>skin.ini</em> this problem can be avoided. This option makes Opera use different icons for the tab bar than for other toolbars. The name of those icons used for the tab bar consist of the normal name plus an attached &#8220;Inverted&#8221;. For example, if the icon that&#8217;d usually be used is the <code>Window Document Icon</code>, Opera would instead use <code>Window Document Icon Inverted</code>.</p>


<h3 id="mailheaderimages">Mail header images</h3>
<p>To make it easier to recognize which mail filter one has currently open it&#8217;s possible to specify mail header images. These are shown at the left of the <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/#mailbarskin"><code>[Mailbar Skin]</code></a>:</p>
<img src="http://forum-test.oslo.osa/kirby/content/articles/133-opera-skinning-part-5-tips-and-tricks/x5_mailheaderimage.png" alt="Mail header image" />
<p>These images can be specified independently for every filter but for consistency reasons either each or no filter should have one. The images are usually specified in the <code>[Images]</code> section with their name being one of the following, depending on which filter it&#39;s to be used with:</p>

<ul>
<li><code>Mail Filter Header</code></li>
<li><code>Mail Unread Header</code></li>
<li><code>Mail Inbox Header</code></li>
<li><code>Mail Outbox Header</code></li>
<li><code>Mail Sentbox Header</code></li>
<li><code>Mail Drafts Header</code></li>
<li><code>Mail Trash Header</code></li>
<li><code>Mail Spam Header</code></li>
<li><code>Mail Thread Header</code></li>
<li><code>Attachment Documents Header</code></li>
<li><code>Attachment Archives Header</code></li>
<li><code>Attachment Music Header</code></li>
<li><code>Attachment Video Header</code></li>
<li><code>Attachment Images Header</code></li>
<li><code>Label Important Header</code></li>
<li><code>Label Todo Header</code></li>
<li><code>Label Mail back Header</code></li>
<li><code>Label Call back Header</code></li>
<li><code>Label Meeting Header</code></li>
<li><code>Label Funny Header</code></li>
<li><code>Label Valuable Header</code></li>
<li><code>Unknown contact header</code></li>
<li><code>Search Header</code></li>
<li><code>News Header</code></li>
<li><code>Folder Header</code></li>
<li><code>Chat Room Header</code></li>
<li><code>Chat Private Header</code></li>
<li><code>Newsfeed Header</code></li>
</ul>

<p>By default mail headers cause the content of the mail bar to get moved 80px to the right, no matter how wide the mail header is. If the mail header is wider than 80px it extends behind the text, as seen on the figure above. The indentation can be adjusted by specifying &#8220;Margin Right&#8221; for the mail header. For example, to disable the indentation you would set &#8220;Margin Right = -80&#8221;; &#8220;Margin Right = 20&#8221; would indent the mail bar content by 100px. If no mail header is specified the indentation is disabled completely.</p>
<p>In the following example &#8221;mail_headers/unread.png&#8221; is specified as the mail header for the unread filter and the text indentation is set to 40px (80px default width minus 40px negative margin right):</p>
<pre>Mail Unread Header		= mail_headers/unread.png, 1, 0, 0, -40, 0</pre>

<h2>Summary</h2>
<p>So that&#8217;s the end of our journey into Opera skinning &#8212; in this set of articles I have taken you through skinning in detail, including packing and unpacking skins, simple image replacements and a very detailed account of what all the sections and properties inside <em>skin.ini</em> do. I would love to see what skins you come up with after reading my articles &#8212; please provide links to them in comments. In addition, feel free to comment if you have any suggestions on how to improve the articles.</p>

<p>Pages: <a href="http://dev.opera.com/articles/view/opera-skinning-part-1-introduction/">1/5: Introduction, general explanations</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-2-skinning-examples/">2/5: Skinning examples</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-3-skin-ini-explaine/">3/5: Skin.ini explained</a> &#8212; <a href="http://dev.opera.com/articles/view/opera-skinning-part-4-skin-ini-element/">4/5: skin.ini element reference</a> &#8212; 5/5: tips &amp; tricks</p>
