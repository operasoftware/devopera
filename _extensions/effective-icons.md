---
title: Creating Effective Icons
authors:
- christian-sinding
license: cc-by-3.0
---

## Contents

- [Introduction](#intro)
- [Quick hints and tips](#hints-tips)
	- [Branding and simplicity](#branding)
	- [Less is more](#less-is-more)
	- [Beautiful icons](#beautiful)
	- [Scaling](#scaling)
	- [Problems and solutions](#icons-problems)
	- [Requirements](#icons-requirements)
- [Photoshop: Icon tutorial](#tutorial)
	- [Selecting an icon](#selecting-icon)
	- [The icon shape layer](#createiconlayer)
	- [Pixel sharp vectors](#sharpvectors)
	- [Small icons](#smallicons)
	- [Pixel sharp vectors, Part 2](#sharpvectors2)
	- [The palette](#palette)
	- [Exporting the icons](#exporting)

## Introduction {#intro}

This article provides a tutorial and some hints and tips on creating effective icons for your extensions. I’ve put the hints and tips at the beginning so you can easily refer back to them; the tutorial then follows.

### Downloading and using the icon template

You should download our icon template if you want to follow along with the tutorial, or if you just want to speed up your own icon creation work.

- [Photoshop (PSD) icon template]({{ page.id }}/user-icon.psd)
- [Inkscape SVG icon template]({{ page.id }}/user-icon.svg)
- There is also an extension icons screencast available covering how to use an older version of the Inkscape template. Watch this for more details:

<figure block="figure">
	<video elem="media" controls>
		<source src="{{ page.id }}/tutorial.mp4" type="video/mp4">
		<source src="{{ page.id }}/tutorial.webm" type="video/webm">
	</video>
</figure>

## Quick hints and tips {#hints-tips}

### Branding and simplicity {#branding}

Your icon should be simple and effective, and it should reflect the style and purpose of your extension. A simple shape or letter from an interesting font works well, but detailed images and intricate fonts might not. A game will benefit from having a playful, colorful icon, whereas a more serious application may be better served by a more conservative and functional icon. For identification purposes, consider making your icon consistent with the styling and colors of your extension. Figure 1 shows some good examples.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/simplicity.png" alt="Good examples of icons — simple elegant and/or playful">
	<figcaption elem="caption">Figure 1. Simple, elegant and/or playful icons</figcaption>
</figure>

### Less is more {#less-is-more}

A unique shape or silhouette will help users to identify your extension quickly. Combining objects or shapes is generally not advised, as this tends to complicate your icon, diluting its message (see Figure 2.) Furthermore: to make the icon balance well, imagine that the shape has a physical weight. When centered on an imaginary pillar, the icon should not tip to the right or left; it should balance. **Do not apply a shadow to outline shapes**. Instead, put the shape on a background.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/clean-shape.png" alt="Image showing good and bad examples of icon shapes — you should go for a single clear shape in the center of the icon">
	<figcaption elem="caption">Figure 2: A single, centered shape communicates better than combined shapes. Unbalanced icons are visually troublesome</figcaption>
</figure>

### Beautiful icons {#beautiful}

Consider getting a professional graphic designer or illustrator to help you create your icon. If you aim for realism by making an icon that represents a real life object, it is advisable to use a single light source located directly above you, in front of the object. The perspective should be either straight on for flat objects like picture frames and windows, or from slightly above — as if the object were sitting on your desk, producing a shadow directly below and behind the object. Colors help the user to identify the icon’s significance, but should not be used to grab attention. Gradients should be conservative and smooth. See Figure 3 for a good example versus some not so good ones.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/shadow.png" alt="An image showing good and bad examples of gradients and perspective">
	<figcaption elem="caption">Figure 3: The perspective should be that of an object sitting on the desk in front of you. The lighting is above and slightly in front of the object, creating gradients and shadow.</figcaption>
</figure>

Do not use system icons or other application icons in your work — see Figure 4 for some examples.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/dont-use.png" alt="Examples of system icons and software vendor icons that you should not use">
	<figcaption elem="caption">Figure 4: System icons or icons from other software vendors are not allowed</figcaption>
</figure>

### Scaling {#scaling}

Reducing the size of a bitmap image results in a loss of information. Details will gradually disappear, and it is often necessary to simplify the icon quite a bit to make it legible. You should therefore start with the largest icon size you can and scale down to create smaller sizes — see Figure 5. Depending on the icon design, some effort should be made towards sharpening and simplifying the icons. The example in this case is not really that bad, and would pass, but the quality improves with some extra effort.

As you scale an icon down, details may end up in between pixels. Think of the pixels as a mosaic. If you need to draw a tiny dot, you cannot move the mosaic tiles to fit where you want the dot. You must either move the dot slightly, or make the surrounding tiles imply there is a dot by coloring all of them. This last approach is common to all graphics software, and it will make the dot appear blurry or unsharp. If your icon loses sharpness, you should consider redrawing it: tweak your design to align with the pixel grid or remove details to simplify the information.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/scaling.png" alt="An image showing good and bad examples of scaling an image down to a small size">
	<figcaption elem="caption">Figure 5: Starting from a big icon design, scaling down to 64×64 pixels should not yield many problems. When scaling further, the details get lost and the edges get blurry</figcaption>
</figure>

Note that Interlaced PNG-files are currently not supported, due to a [limitation of the image library](http://www.pythonware.com/library/pil/handbook/format-png.htm) we’re using. Avoid this effect in your screenshots.

### Problems and solutions {#icons-problems}

1. Horizontal and vertical lines should be aligned with the pixel grid, and look sharp.
2. If the extension adds the icon to a button in the Opera UI, it should fit in visually.
3. The requirement of clean lines does not imply pixel art. Angled lines or curves should be anti-aliased, unless pixel art is intended.
4. If the icon disappears because it has a problematic color, it should have a frame of sorts, such as a roundrect button shape background.
5. Icon shapes should fill the space allotted to them. Too much padding is not good. Consider adding a background.

### Requirements {#icons-requirements}

1. Icons should be scaled nicely (no deformation, blurring or loss of intended details).

<figure block="figure">
	<img elem="media" src="{{ page.id }}/dont-blur.png" alt="Scaling and blur">
</figure>

2. Icon edges should be clean (no blur on straight lines and no pixeled corners).

<figure block="figure">
	<img elem="media" src="{{ page.id }}/dont-grid.png" alt="Clean edges">
</figure>

3. Icons with transparent backgrounds must be centered. The icon must not conflict with the Opera UI button.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/dont-center.png" alt="Centered backgrounds">
</figure>

4. Icons should be anti-aliased or perfectly pixelated.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/dont-pixel.png" alt="Anti-aliasing and pixellation">
</figure>

5. Icons must not be completely white, and must not lose their coherence on a white background or on the Opera toolbar chrome.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/dont-white.png" alt="Not completely white background">
</figure>

6. Icons should have a background or fill the space allotted to them. They should not occupy much less than 85% of the field.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/dont-back.png" alt="Fill space or use background">
</figure>

## Photoshop: Icon tutorial {#tutorial}

Note: Even though this tutorial is written with Photoshop in mind, you can still get some useful tips if you decide to use a different graphics package.

First of all, open the [Photoshop (PSD) icon template]({{ page.id }}/user-icon.psd) and save it with a different filename. You can work on your own icon inside this file. This tutorial is written with complete beginners in mind, but even Photoshop veterans may be able to pick up a thing or two.

### Selecting an icon {#selecting-icon}

You don’t need to be able to draw to create a good icon shape. The next best thing to drawing something unique and sexy is to cheat, and select an icon shape from somewhere like a freeware site on the Web or a icon font like the Web- or Wingdings fonts that are available on pretty much all computers, see Figure 6. For this tutorial, I am using the Wingdings letter “z”: ⌘. (Unicode: `U+2318`, HTML: `&#8984;`)

<figure block="figure">
	<img elem="media" src="{{ page.id }}/wingdings-win.png" alt="Wingdings in Windows 7">
	<img elem="media" src="{{ page.id }}/webdings-mac.png" alt="Webdings in OSX">
	<figcaption elem="caption">Figure 6: The Wingdings font cheats you right through the laborious task of creating something unique</figcaption>
</figure>

### The icon shape layer {#createiconlayer}

After selecting the glyph you want from the Wingdings font, select the _Text Tool_ inside Photoshop, as seen in Figure 7. And locate the Wingdings font in the font family dropdown top left in your viewport.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/texttool.png" alt="The text tool button">
	<figcaption elem="caption">Figure 7: Find the “Text Tool”</figcaption>
</figure>

Make sure you have the green “icons” layer group selected and click anywhere outside of text areas to start writing. The easiest way to get the icon you want is to copy and paste the letter from the character palette (Figure 6) and paste it into the text box. Depending on the graphics package used, you might have to apply the Wingdings font to the text again. Figure 8 shows the font applied.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/wingdings.png" alt="Click on the image for the full resolution">
	<figcaption elem="caption">Figure 8: Use a font for quickly applying an icon shape to your icon</figcaption>
</figure>

An elegant and proven way of making your icon look professional is to make the shape white on a subtle gradient colored background. Since this template is all about simplicity and pre-made backgrounds, I strongly suggest you stick with this too, for now.

In order to tweak and properly place your icon shape, you’ll need to make it a vector shape layer. In CS6, from the _Type_ dropdown, simply select _Convert to Shape_ and you have an editable vector shape. (In previous versions of PS, this conversion tool has been located in the _Layer_ menu.) You can also achieve the same result by right/Ctrl + clicking the type layer. Your letter, or in this case icon, is now no longer a text item but an editable vector shape with Bézier curve points for you to play with. Figures 9-11 show this process.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/convert-to-shape.png" alt="Make a vector shape of your text layer to fine tune the icon shape">
	<figcaption elem="caption">Figure 9: Converting the text to a vector shape will provide you with a fine grained control of it</figcaption>
</figure>

<figure block="figure">
	<img elem="media" src="{{ page.id }}/shape-zoomed.png" alt="The resulting shape with vector outlines">
	<figcaption elem="caption">Figure 10: An enlarged view of your text item turned vector shape</figcaption>
</figure>

<figure block="figure">
	<img elem="media" src="{{ page.id }}/shape-layer.png" alt="The resulting shape layer">
	<figcaption elem="caption">Figure 11: Your shape layer will now look like this. You can no longer edit the content with the text tool, but you can alter the shape of it</figcaption>
</figure>

### Pixel sharp vectors {#sharpvectors}

Now that you have an icon that you can work with, you need to place it and make it the correct size (see Figure 12). First, drag it over the 128 px background shape with the _Move Tool (V)_, then select _Edit > Free Transform_ (or hit Ctrl/Cmd + T) to make it fit. Make sure you have zoomed your view (Ctrl/Cmd -+) enough to clearly see what’s going on. While you can drag the corner or side boxes of the transform selection, I recommend you use the input fields up on the tool bar instead. This will ensure you hit whole pixel values thereby giving you an overall much higher level of control.

Depending on what you have previously selected, your icon might have a color that is not good to work with. If so, change this by double-clicking the shape icon in the layer palette.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/XXX.png" alt="Click on the image for the full resolution">
	<figcaption elem="caption">Figure 12: Placing the icon shape on the background shape with the <em>Transform</em> tool</figcaption>
</figure>

Your icon is probably not placed on a whole pixel value on the x- or y-axis — Change this now by rounding the _X:_ and _Y:_ values in the toolbar up or down.

In the next fields, _W:_ (width) and _H:_ (height), you should also input whole pixel values. By default these fields are set to percentages, so you have to right click both of them in turn and select _pixels_ from the dropdown. If you want to, you can click the little chain icon between the fields to maintain the aspect ratio of your icon. Do this. Round your values up to a whole, preferably even, number. In this case, we’re going for 90 px. The number in _(brackets)_, 108 px, underneath the icon size is a maximum recommended shape size for this icon (roughly 85% of the background size). In this case we go for something slightly smaller. 90 px is a nice number. For tall or wide shapes, first scale the widest aspect to the desired size with aspect ratio locked, then release it and tweak the narrow aspect if needed. Usually pointy or curved sides can do without a perfect fit, while straight horizontal or vertical edges look better when exactly matching the pixel grid.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/place-values.png" alt="The transform input fields after new input">
	<figcaption elem="caption">Figure 13: The rounded values make sure your shape is placed nicely on the pixel grid</figcaption>
</figure>

Zoom in a bit more, then look at your icon shape. It should fit the pixel grid perfectly, as seen in Figure 14. That was lucky! Let’s see what happens when we scale the icon down.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/no-blur.png" alt="Perfect fit!">
	<figcaption elem="caption">Figure 14: The icon details are perfectly matching the pixel grid</figcaption>
</figure>

### Small icons {#smallicons}

Let’s start by duplicating the icon shape layer. One way to do this is by holding down the Alt key while dragging the icon with the _Move Tool_ active. In CS6 you will have to disable the _effects_ layer before trying this method, or you will duplicate the linked background and effect layers instead. Next, free transform the layer shape (Ctrl/Cmd + T) to px: 34×34 px (See Figure 17).

<figure block="figure">
	<img elem="media" src="{{ page.id }}/copy-transform.png" alt="Copy/paste/scale to fit the small default background shape">
	<figcaption elem="caption">Figure 15: Duplicate the icon shape layer and move and scale it to fit the 48 px background shape</figcaption>
</figure>

Zoom in on that new icon shape, and you’ll see that the vector shape is fuzzy around the edges. To see the path, make sure you select the _Path Selection Tool (A)_. Now, all vector paths cannot line up with the pixel grid — that would produce pixel art — a judgement on what to tweak has to be made. In this case, the horizontal and vertical paths almost align with the grid. It might work to nudge them a little. The resulting shape should end up slightly fatter than the original, but it might be worth it. The only way to find out is by trying.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/mismatch.png" alt="Vector paths do not fit pixel grid">
	<figcaption elem="caption">Figure 16: The vector paths do not fit the pixel grid</figcaption>
</figure>

### Pixel sharp vectors, Part 2 {#sharpvectors2}

<figure block="figure">
	<img elem="media" src="{{ page.id }}/direct-select.png" alt="Direct Selection Tool">
	<figcaption elem="caption">Figure 17: Direct Selection Tool</figcaption>
</figure>

With the _Direct Selection Tool_ select the six vector points of the left edge of the left vertical bar (Figure 18). Nudge the points a little to the left with the arrow keys on your keyboard so they align with the pixel grid. Repeat for all the eight edges.

If for some reason you cannot select vector points, you might have another shape selected, in which case you must select your shape in the _Layers Tab_. This happens from time to time if you click away from the current shape.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/nudge.png" alt="Left edge vector points selected">
	<figcaption elem="caption">Figure 18: Left edge vector points selected</figcaption>
</figure>

Before we proceed, here’s a little extra tip. The built in vector pixel snapping functionality of Photoshop CS6 is sadly a bit lacking and it can behave differently from what you’d expect. If you wish to make use of grid snapping, a better method is using grid lines. First open the Preferences dialog (Ctrl/Cmd + K) and make sure _Snap Vector Tools and Transforms to Pixel Grid_ is unchecked. Then go to _Guides, Grid & Slices_. Change the values for _Gridline Every_ and _Subdivisions_ to 10 pixels both. You can now snap to the pixel grid by viewing it (_View > Show > Pixel Grid_) and making sure snapping is turned on (_View > Snap to > Grid_).

<figure block="figure">
	<img elem="media" src="{{ page.id }}/no-snap.png" alt="Turn off vector snapping">
	<img elem="media" src="{{ page.id }}/10px-grid.png" alt="Make new gridlines">
	<figcaption elem="caption">Figure 19: Turn off vector snapping and make new gridlines</figcaption>
</figure>

With the _Direct Selection Tool_ selected (the white arrow), select the vector points and move them to pixel corners. You should end up with something like this:

<figure block="figure">
	<img elem="media" src="{{ page.id }}/nudged.png" alt="Straight lines matched">
	<figcaption elem="caption">Figure 20: Straight lines matched</figcaption>
</figure>

Now, that’s less fuzzy, but the loops are now a bit thinner and must be tweaked a little. The outer edge is fine, so we’ll just alter the four corner cut-outs. To do this it would help to reduce the number of points to move around. Less points equals less potential trouble and this shape has way more points than it needs. You can make a perfect circle with just two points, although it’s easier with four. The shapes we will deal with here are circle-like, all with one pointy corner. Let’s keep the corner point and the ones north, east, south and west, ditching the remaining three.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/delete-points.png" alt="Delete Anchor Point Tool">
	<figcaption elem="caption">Figure 21: Delete Anchor Point Tool</figcaption>
</figure>

<figure block="figure">
	<img elem="media" src="{{ page.id }}/deleted.png" alt="Figure 22: Simplified shape">
	<figcaption elem="caption">Simplified shape</figcaption>
</figure>

Voila! That’s easier to deal with. The eagle eyed will notice all the outer edge vector points are aligned to the grid in the above figure. This is strictly not needed, but gives relief to your inner OCD. The vector arms stretching towards the corners are similarily snapped into place.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/cut-out.png" alt="Transforming cut-outs">
	<figcaption elem="caption">Figure 23: Transforming cut-outs</figcaption>
</figure>

To make the loops fatter, the cut-outs must be reduced. To make them even, it’s best to use the _Transform Tool_ on all the vector points. Select them with the _Direct Selection Tool (A)_ and hit Ctrl/Cmd + T. Now select the little dot in the _Reference point location_ grid on the toolbar that corresponds to the pointy part of the cut-out, in this example: the top left one. This makes the transform orienting around the top left corner of the bounding box. Next alter the width and height values to 6.25 px. Hit the Enter key when finished, and repeat for all the next corner cut-outs. Orient towards the corner vector point of the cut-outs as you go along.

Without going into detail how to get there, here are suggestions for solving the last two tweaked shapes. As the number of pixels available is reduced, the detail of the shape naturally also gets reduced. Hence it becomes harder to make the smaller icons look nice the smaller they are. To further complicate things, one of the icons is to have an odd number of pixels along the X and Y axis. The center point has to land on a half-pixel in that case if the icon is to be centered.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/19px.png" alt="The 19×19 px icon">
	<figcaption elem="caption">Figure 24: The 19×19 px icon</figcaption>
</figure>

<figure block="figure">
	<img elem="media" src="{{ page.id }}/16px.png" alt="The 16×16 px icon">
	<figcaption elem="caption">Figure 25: The 16×16 px icon</figcaption>
</figure>

### The palette {#palette}

Now over to the background shapes. To make your icon interesting, it should have a nice colour, with a subtle gradient. A colour palette is provided in the template — click on the gradient you wish to try, and notice that the layer this gradient sits on has been selected in the layers panel. Right/Ctrl + click the blue area of that layer and select _Copy Layer Style_. Paste this gradient by selecting the background shape layers you wish to apply it to, Right/Ctrl + clicking the blue area of those layers and selecting _Paste Layer Style_. You can select multiple layers and have all of them affected at once if you wish.

<figure block="figure">
	<img elem="media" src="{{ page.id }}/palette-layer.png" alt="Select layer style from palette">
	<figcaption elem="caption">Figure 26: Copying the layer style of a palette gradient color</figcaption>
</figure>

Your icon should now look something like this and be ready for export:

<figure block="figure">
	<img elem="media" src="{{ page.id }}/paste-effect.png" alt="Finished icons">
	<figcaption elem="caption">Figure 27. Final icons ready for export</figcaption>
</figure>

### Exporting the icons {#exporting}

Hanging in there? This last part is very easy, as all the hard work is already done. First, simply hide the background layer by clicking the little eye icon next to it. Next click _File > Save for Web & Devices…_ (Ctrl/Cmd + Alt + Shift + S) and select the icons you just made. Your icons might be outside the view, if so pan the viewport until you see your icons (hit the Space key and click-drag). It’s a bit hard to see what’s selected or not, but selected items get a brown border. Click _Save…_ and give your icons a fitting name, they will all get a suffix with their individual size. Make sure to select a correct folder and select _Slices: Selected Slices_ in the dropdown. Hit _Save_, and you’re done!

<figure block="figure">
	<img elem="media" src="{{ page.id }}/export.png" alt="Exporting">
	<figcaption elem="caption">Figure 28: Exporting</figcaption>
</figure>
