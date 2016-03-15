---
title: Optimise Generated SVG Files With Scour
authors:
- david-storey
tags:
- scour
- optimisation
- svg
license: cc-by-3.0
---

<p>One of the issues with <abbr>SVG</abbr> is that to make any complex image involving things like paths, you really need to generate the initial file using a vector graphics editor.  Even with formats such as <abbr>HTML</abbr>, automatically generated mark-up is most often sub par compared to hand crafted mark-up.  This is no different with <abbr>SVG</abbr>, with each editor adding its own extra attributes for meta data, or adding a lot of default values that are not needed.  It is often best to strip out this extra cruft to make the mark up leaner, save file size, speed up rendering and make it easier to script and update the image.  I’ve done this by hand previously, and it is a slow process.  Now however their is an easier way.  Jeff Schiller has produced <a href="https://launchpad.net/scour">Scour</a>, which is an open source script to scrub automatically generated SVG files to optimise their size.  It is currently in early days of development, so there are bugs, but it is already immensely useful.</p>

<p>As an example of its powers, I took a <a href="http://people.opera.com/dstorey/images/OperaMarketShareEEhover.svgz">SVG file</a> I recently created by talking an Inkscape generated map and hand edited, and ran it through Scour.  The file went from 560126 bytes to 299969 bytes.  There was some bugs along the way, which I&#39;ve been speaking to Jeff about, and he has already fixed most of them and a 0.11 version will be out very soon with these fixes.  He even added SVGZ support out of the box, so I was able to get the file size down to only 81919 bytes.  This is huge savings from the original size.  As Scour optimises path data as well as removing unneeded elements and attributes, it makes better savings than most people would be able to do by trying to optimise a generated file by hand. An example of how to use Scour via the command line, with an SVG file as input and SVGZ file as output is as follows:</p>

<p><samp>python scour.py -i input.svg -o output.svgz</samp> (requires version 0.11)</p>

<p>I would recommend to run Scour before you do any adjustments by hand to the SVG file.  For example, in the map file linked previously, I based it on a Inkscape generated map from Wikipedia, and added things like my own styling, animations and text by hand.  As Scour adjusts the mark up, it may remove any semantics you have added, and has issues with CSS styles in the <code>style</code> element, due to not being able to parse references in the CSS.  Scour removes unused mark up, so it may remove things like filters or gradients if they are only referenced in the style element or by and external style sheet, and adjusting the mark-up, such as putting anything from a <code>style</code> attribute into a XML attribute instead may affect the specificity, making different rules fire.  As most of these issues are not a problem if the file has been untouched by hand, the best work flow is probably to Scour the file first then add extra semantics and hand tuned adjustments afterwards.  Of course, if you try out Scour and find bugs, please <a href="https://launchpad.net/scour/+filebug/">report them</a>.  If you can reduce the file to the minimum amount of SVG to reproduce the problem, that would help a great deal.</p>
