Title: Creating effective Opera Extension icons
----
Date: 2011-03-17 07:20:55
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

	<h2>Table of contents</h2>
	
	<ul>
	  <li><a href="#intro">Introduction</a></li>
	  <li><a href="#hints-tips">Quick hints and tips</a>
	    <ul>
              <li><a href="#branding">Branding and simplicity</a></li>
              <li><a href="#less-is-more">Less is more</a></li>
              <li><a href="#beautiful">Beautiful icons</a></li>
              <li><a href="#scaling">Scaling</a></li>
              <li><a href="#highdensityscreens">Icons for high density screens</a></li>
              <li><a href="#icons-problems">Problems and solutions</a></li>
              <li><a href="#icons-requirements">Requirements</a></li>
            </ul>
          </li>
          <li><a href="#tutorial">Photoshop: Icon tutorial</a>
            <ul>
              <li><a href="#selecting-icon">Selecting an icon</a></li>
              <li><a href="#createiconlayer">The icon shape layer</a></li>
              <li><a href="#sharpvectors">Pixel sharp vectors</a></li>
              <li><a href="#sharpvectors2">Pixel sharp vectors, Part 2</a></li>
              <li><a href="#smallicons">Small icons</a></li>
              <li><a href="#palette">The palette</a></li>
              <li><a href="#exporting">Exporting the icons</a></li>
            </ul>
          </li>
        </ul>
	
	<h2 id="intro">Introduction</h2>
	
	<p>This article provides a tutorial and some hints and tips on creating effective icons for your extensions. I&#39;ve put the hints and tips at the beginning so you can easily refer back to them; the tutorial then follows.</p>
	
	<div class="note"><h3>Downloading and using the icon template</h3>
	  <p>You should download our icon template if you want to follow along with the tutorial, or if you just want to speed up your own icon creation work.</p>
	  <ul>
	     <li><p><a href="user_icon_template.psd">Photoshop (PSD) icon template</a></p></li>
	     <li><p><a href="user_icon_template.svg">SVG icon template</a></p></li>
             <li><p>There is also an extension icons screencast available covering how to use the Inkscape template. Watch this for more details: <a href="svg_template_tutorial.webm">Extension icons screencast WebM version</a> | <a href="svg_template_tutorial.mp4">Extension icons screencast MP4 version</a>.</p></li>
	  </ul>
	</div>	
  
  <h2 id="hints-tips">Quick hints and tips</h2>
  
  <h3 id="branding">Branding and simplicity</h3>

  <p>Your icon should be simple and effective, and it should reflect your extension&#39;s style and purpose. A simple image or letter from a simple font works well, but detailed images and intricate fonts do not. A game will benefit from having a playful, colorful icon, whereas a more serious application may be better served by a more conservative and functional icon. Your icon should be consistent with the branding and colors of your extension. Figure 1 shows some good examples.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/simplicity.png" alt="good examples of icons - simple elegant and playful" /></p>
  <p class="comment">Figure 1. Simple, elegant, playful icons.</p>

  <h3 id="less-is-more">Less is more</h3>

  <p>A unique shape or silhouette will help users to identify your extension. Combining objects or shapes is generally not advised, as this tends to complicate your icon, diminishing its effectiveness (see Figure 2.) Imagine that the shape has a physical weight. When centered on a pillar, the icon should not tip to the right or left; it should balance. <strong>Do not apply a shadow to outline shapes</strong>. Instead, put the shape on a background.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/cleanshape.png" alt="image showing good and bad examples of icon shapes - you should go for a single clear shape in the center of the icon" /></p>
  <p class="comment">Figure 2: A single, centered shape communicates better than combined shapes. Unbalanced icons are visually troublesome.</p>

  <h3 id="beautiful">Beautiful icons</h3>

  <p>Consider getting a professional graphic designer or illustrator to help you create your icon. If you aim for realism by making an icon that represents a real life object, it is advisable to use a single light source located directly above the object. The perspective should be either straight on for flat objects like picture frames and windows, or slightly above - as if the object were sitting on your desk, producing a shadow directly below the object. Colours help the user to identify the icon&#39;s significance, but should not be used to grab attention. Gradients should be conservative and smooth. See Figure 3 for a good example versus some not so good ones.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/shadow.png" alt="an image showing good and bad examples of gradients and perspective" /></p>
  <p class="comment">Figure 3: The perspective should be that of an object sitting on the desk in front of you. The lighting is above and slightly in front of the object, creating gradients and shadow.</p>

  <div class="note" style="margin: 25px;">
    <p>Do not use system icons or other application icons in your work - see Figure 4 for some examples.</p>
    
    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/dontuse.png" alt="examples of system icons and software vendor icons that you should not use" /></p>
    <p class="comment">Figure 4: System icons or icons from other software vendors are not allowed.</p>
  </div>

  <h3 id="scaling">Scaling</h3>

  <p>Reducing the size of a bitmap image results in a loss of information. Details will gradually disappear, and it is often necessary to simplify the icon quite a bit to make it stand out. You should therefore start with the largest icon size you can and scale down to create smaller sizes - see Figure 5. Depending on the icon design, some effort should be made towards sharpening and simplifying the icons. The example in this case is not really that bad, and would pass, but the quality improves with some extra effort.</p>

  <p>As you scale an icon down, details may end up in between pixels. Think of the pixels as a mosaic. If you need to draw a tiny dot, you cannot move the mosaic tiles to fit where you want the dot. You must either move the dot slightly, or make the surrounding tiles imply there is a dot by coloring all of them. This last approach is common to all graphics software, and it will make the dot appear blurry or unsharp. If your icon loses sharpness, you should consider redrawing it: tweak your design to align with the pixel grid or remove details to simplify the information.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/scaling.png" alt="An image showing good and bad examples of scaling an image down to a small size" /></p>
  <p class="comment">Figure 5: Starting from a big icon design, scaling down to 64x64 pixels should not yield many problems. When scaling further, the details get lost and the edges get blurry.</p>

  <p>To create an acceptable set of icons, you can use the <a href="http://widgets.opera.com/widget/17371/">Icon creator</a>. Note that your extension may be rejected if your icons are of poor quality.</p>

  <p>Note that Interlaced PNG-files are currently not supported, due to a <a href="http://www.pythonware.com/library/pil/handbook/format-png.htm">limitation of the image library</a> we&#39;re using. Avoid this effect in your screenshots.</p>

 <h3 id="highdensityscreens">Icons for high density screens</h3>

 <p>From Opera 12.10 onwards, you can make extension icons which would look great even on high density screens (for example &#39;Retina displays&#39; etc). All you need to do is to take that high density extension icon, and attach the suffix &#39;@2x&#39; to its name. So if the normal icon is named &#39;icon.png&#39; then the high density icon will be named &#39;icon@2x.png&#39;. Opera will look for the &#39;@2x&#39; suffixed icon file in the extension package and will use that in case it finds it. </p>

<p>For the extension manager icon, the browser will check the config.xml file that can contain multiple &lt;icon&gt; tags with different sizes of the icon. To see how to support high density icons for the extension manager panel, please see the <a href="http://dev.opera.com/articles/view/extensions-api-config-icon/">config.xml guide regarding the &lt;icon&gt; element</a>.</p>

  <h3 id="icons-problems">Problems and solutions</h3>

  <ol>
    <li>Horizontal and vertical lines should be aligned with the pixel grid, and look sharp.</li>
    <li>Opera adds a button to the icon in the UI. It should fit, and not look unbalanced.</li>
    <li>The requirement of clean lines does not imply pixel art. Angled lines or curves should be anti-aliased, unless pixel art is intended.</li>
    <li>If the icon disappears because it has a problematic color, it should have a frame of sorts, such as a roundrect button shape background.</li>
    <li>Icon shapes should fill the space allotted to them. Too much padding is not good. Consider adding a background.</li>
  </ol>

  <h3 id="icons-requirements">Requirements</h3>

  <ol>
    <li>Icons should be scaled nicely (no deformation, blurring or loss of intended details).<br /><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/do_dont_blur.png" alt="Scaling and blur" /></li>
    <li>Icon edges should be clean (no blur on straight lines and no pixeled corners).<br /><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/do_dont_grid.png" alt="Clean edges" /></li>
    <li>Icons with transparent backgrounds must be centered. The icon must not conflict with the Opera UI button.<br /><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/do_dont_center.png" alt="Centered backgrounds" /></li>
    <li>Icons should be anti-aliased or perfectly pixelated.<br /><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/do_dont_pixel.png" alt="Anti-aliasing and pixellation" /></li>
    <li>Icons must not be completely white, and must not lose their coherence on a white background or on the Opera toolbar chrome.<br /><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/do_dont_white.png" alt="Not completely white background" /></li>
    <li>Icons should have a background or fill the space allotted to them. They should not occupy much less than 85% of the field.<br /><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/do_dont_back.png" alt="Fill space or use background" /></li>
  </ol>
  
  <h2 id="tutorial">Photoshop: Icon tutorial</h2>
  
  <p class="note">Note: Even though this tutorial is written with Photoshop in mind, you can still get some useful tips if you decide to use a different graphics package.</p>
  
  <p>First of all, open the <a href="user_icon_template.psd">Photoshop (PSD) icon template</a> and save it with a different filename. You can work on your own icon inside this file. This tutorial is written with complete beginners in mind, but even Photoshop veterans may be able to pick up a thing or two.</p>
  
  <h3 id="selecting-icon">Selecting an icon</h3>
  
  <p>You don&#39;t need to be able to draw to create a good icon shape. The best thing to do is cheat, and select an icon shape from somewhere like a freeware site on the Web, or better still, the Webdings font that is available on pretty much all computers, see Figure 6. For this tutorial, I am using the Webdings letter &quot;i&quot;.</p>


  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/02_webdings_win7.png" alt="Webdings in Windows 7" /><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/02_webdings_osx.png" alt="Webdings in OSX" /></p>
  <p class="comment">Figure 6: The Webdings font cheats you right through the laborious task of creating something unique.</p>

  <h3 id="createiconlayer">The icon shape layer</h3>

  <p>After selecting the glyph you want from the Webdings font, select the &quot;Text Tool&quot; inside Photoshop, as seen in Figure 7.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/02_texttool.png" alt="The text tool button" /></p>
  <p class="comment">Figure 7: Find the &quot;Text Tool&quot;.</p>

  <p>Make sure you have the &quot;icons&quot; layer group selected and click anywhere to start writing. the easiest way to get the icon you want is to copy and paste the letter from the character palette (Figure 6) and paste it into the text box. Depending on the graphics package used, you might have to apply the webdings font to the text again. Figure 8 shows the font applied.</p>


  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/03_webdings.png" alt="Click on the image for the full resolution" /></p>
  <p>Figure 8: Use a font for quickly applying an icon shape to your icon.</p>

  <p>An elegant and proven way of making your icon look professional is to make it white on a colored background. Since this template is all about simplicity and premade backgrounds, I strongly suggest you stick with this too, for now.</p>

  <p>In order to tweak your icon shape, you&#39;ll need to make it a vector shape layer. From the &quot;Layer&quot; dropdown menu, select &quot;Type&quot; and &quot;Convert to Shape&quot; (the same can be achieved by right/Ctrl + clicking the type layer). This will make the letter, or in this case icon, into an editable vector shape with bezier curve points for you to play with. Figures 9-11 show this process.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/05_converttoshape.png" alt="Make a vector shape of your text layer to fine tune the icon shape" /></p>
  <p class="comment">Figure 9: Converting the text to a vector shape will provide you with a fine grained control of it.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/06_shapezoomed.png" alt="The resulting shape with vector outlines" /></p>
  <p class="comment">Figure 10: An enlarged view of your webding turned vector shape.</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/06_shapelayer.png" alt="The resulting shape layer" /></p>
  <p class="comment">Figure 11: Your shape layer will now look like this. You can no longer edit the content with the text tool, but you can alter the shape of it.</p>
  

  <h3 id="sharpvectors">Pixel sharp vectors</h3>
  
  <p>Now that you have an icon that you can work with, you need to place it and make it the correct size (see Figure 12). First, drag it over the 64 px background shape with the &quot;Move Tool&quot;, then select &quot;Edit &gt; Free Transform&quot; (or hit Ctrl/Cmd + T) to make it just right. Make sure you have zoomed your view (Ctrl/Cmd -+) enough to clearly see what&#39;s going on. While you can drag the corner or side boxes of the transform selection, I recommend you use the input fields up on the tool bar instead. This will ensure you hit whole pixel values thereby giving you an overall much higher level of control.</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/07_place_reference.png" alt="Click on the image for the full resolution" /></p>
  <p class="comment">Figure 12: Placing the icon shape on the background shape with the &#39;Transform&#39; tool.</p>
  
  <p>First, you want to change the point from which the orientation of the icon shape is made. In the little 3x3 grid with a black box in the center, hit the top left corner box. This will make Photoshop orient your shape from the top left corner and is a bit easier to work with than the alternatives. Your icon is probably not placed on a whole pixel value on the x- or y-axis — Change this now by rounding the &quot;X:&quot; and &quot;Y:&quot; values up or down.</p>
  
  <p>In the next fields, &quot;W:&quot; (width) and &quot;H:&quot; (height), you should also input whole pixel values. By default these fields are set to percentages, so you have to right click both of them in turn and selext &quot;pixels&quot; from the dropdown. If you want to, you can click the little chain icon between the fields to maintain the aspect ratio of your icon, but in this example the values need to be set individually. Round your values up to a whole, preferrably even number such as 54 px. As a rule of thumb, I first scale the widest aspect to the desired size with aspect ratio locked, then release it and tweak the narrow aspect if needed. Usually pointy or curved sides can do without a perfect fit, while straight edges need a bit more precision.</p>
  
  <p>When you&#39;re happy with the size (Figure 13 shows a good set of values), go back and center your icon shape on the background using the input fields. You should now see why even numbers are preferred.</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/08_place_values.png" alt="The transform input fields after new input" /></p>
  <p class="comment">Figure 13: The rounded values make sure your shape is placed nicely on the pixel grid.</p>
   
  <h3 id="sharpvectors2">Pixel sharp vectors, Part 2</h3>
  
  <p>Zoom in a bit more, then look at your icon shape. It should be awful, because the other vector shapes are not matching the grid, giving a blurry look, as seen in Figure 14. Let&#39;s deal with this.</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/10_blur.png" alt="Blurry content" /></p>
  <p class="comment">Figure 14: The icon details are not matching the pixel grid.</p>
  
  <p>With the &quot;Direct Selection Tool&quot; selected, click the corner vector points of the stem of the &quot;i&quot; shape. If for some reason you cannot select it, you might have an underlaying shape selected, in which case select your shape in the &#39;Layers Tab&#39; instead. When you have all the corner points selected, simply repeat the process of free transforming by inputting values. Press Ctrl/Cmd + T, select the upper left reference point location, input whole numbers and hit Enter/Return on your keyboard.</p>
    
  <p>Bam! That is so much better. Because those straight lines now perfectly fit the pixel grid, the shape will be sharp as a knife. As for the inside of the curved shape (the inside of the O), I&#39;d ignore it. The benefit of tweaking this is not worth the work. But the dot can easily be altered for some extra bonus points, so let&#39;s go on repeating the process for that one (see Figures 15-16). Consider it a good exercise if nothing else.</p>
    
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/13_selectdot.png" alt="Select the dot vector points" /></p>
  <p class="comment">Figure 15: Select the vector points of the dot ...</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/13_transformdot.png" alt="End result of transforming dot" /></p>
  <p class="comment">Figure 16: ... and make it fit the grid.</p>
  
  <h3 id="smallicons">Small icons</h3>
  
  <p>For the 64x64 px icon you can get away with not treating the pixels as carefully as described here, but for understanding the following it is easier if you&#39;re a bit familiar with the shapes making up your icon. Let&#39;s start by duplicating the icon shape layer (hold the Alt key while dragging the icon with the &quot;Move Tool&quot; active). Next, free transform the layer shape (Ctrl/Cmd + T) to 18x18 px (See Figure 17).</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/14_copytransform.png" alt="Copy/paste/scale to fit the small default background shape" /></p>
  <p class="comment">Figure 17: Duplicate the icon shape layer and move and scale it to fit the 18 px background shape.</p>
  
  <p>Zoom in on that new icon shape, and you&#39;ll see that there is certainly work to do! Don&#39;t lose heart — the nice thing about working with vectors like this in Photoshop is that the Bézier curves tell you how the shape would have looked at a higher resolution, while the pixel mosaic tells the hard truth. In our case, we can see from the 64 x 64 icon that the dot of the &quot;i&quot; is slightly wider than the stem. Deciding whether to keep a feature like this or not must be decided upon for the individual shape, but in this case it&#39;s useful to know.</p>
  
  <p>But before we proceed go to &quot;Edit &gt; Preferences &gt; Guides, Grid &amp; Slices&quot;. Change the values for &quot;Gridline Every&quot; and &quot;Subdivisions&quot; to 10 pixels. You can now snap to the pixel grid by viewing it (&quot;View &gt; Show &gt; Grid&quot;) and making sure snapping is turned on (&quot;View &gt; Snap to &gt; Grid&quot;). This is useful because we&#39;re doing stuff a bit differently now. There&#39;s nothing wrong with the free transforming process, so if you prefer this skip ahead, but I would advise this alternative method for smaller, more precise work.</p>
  
  <p>With the &quot;Direct Selection Tool&quot; selected (the white arrow), select the corner points and move them to pixel corners. You can fix most things using this technique, although I&#39;d suggest leaving the oval dot to be treated with the free transform technique as this easily distorts.</p>
    
  <p>I mentioned earlier the benefit of knowing your icon shape inside out, and this is evident in the dot in this case. If it&#39;s scaled to be perfectly round and as wide as the stem, it vanishes in a blur. By being true to the original design and benefitting from its qualities, the dot is better left half a pixel wider on each side. While not knife sharp, this is as good a result as you can hope for at this resolution.</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/20_final.png" alt="Final small icon" /></p>
  <p class="comment">Figure 18: Final small icon.</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/20_finalzoomedout.png" alt="Final shapes" /></p>
  <p class="comment">Figure 19: The icon shapes are finally tweaked and in place.</p>
  
  <h3 id="palette">The palette</h3>
  
  <p>To make your icon interesting, it should have a nice colour, with a subtle gradient. A colour palette is provided in the template — click on the gradient you wish to try, and notice that the layer this gradient sits on has been selected in the layers panel. Right/Ctrl + click the blue area of that layer and select &quot;Copy Layer Style&quot;. Paste this gradient by selecting the background shape layers you wish to apply it to, Right/Ctrl + clicking the blue area of those layers and selecting &quot;Paste Layer Style&quot;. You can select multiple layers and have all of them affected at once if you wish.</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/21_palettelayer.png" alt="Select layer style from palette" /><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/22_copyeffect.png" alt="Copy layer style" /></p>
  <p class="comment">Figure 20: Copying the layer style of a palette gradient color.</p>
  
  <p>Your icon should now look something like this and be ready for export:</p>
  
  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/434-creating-effective-opera-extension-icons/24_pasteeffect.png" alt="Finished icons" /></p>
  <p class="comment">Figure 21. Final icons ready for export.</p>
  
  <h3 id="exporting">Exporting the icons</h3>
  
  <p>Hanging in there? This last part is very easy, as all the hard work is already done. First, simply hide the background layer by clicking the little eye icon next to it. Next click &quot;File &gt; Save for Web &amp; Devices...&quot; (Ctrl/Cmd + Alt + Shift + S) and select the two icons you just made. It&#39;s a bit hard to see what&#39;s selected or not, but selected items get a brown border. Click &quot;Save&quot; and give your icons a fitting name. Make sure to select a proper folder and select &quot;Slices: Selected Slices&quot; in the dropdown. Hit &quot;Save&quot;, and you&#39;re done!</p>
