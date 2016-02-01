---
title: New stable release with improved color picker
authors:
- david-hasather
tags:
- dragonfly
license: cc-by-3.0
---

<p>Today&#39;s new release on the Opera Dragonfly stable branch includes some major improvements to our color picker. It now opens next to the color being edited, instead of being a floating window. The interface itself has been made lighter, with a smaller size and a gray background. The alpha value is now always available, while previously it only appeared when the original color being edited was specified as <code>rgba</code> or <code>hsla</code>. The palette is available in the bottom left corner and colors can now be added and removed directly from here.</p>
<p>The interaction has also been improved. Scrolling with the mousewheel over the color space will now move the pointer towards or away from the cursor depending on the direction. This makes it easy to blend colors between two points. <kbd>OK</kbd> and <kbd>Cancel</kbd> buttons have been added, based on user feedback.</p>
<img src="{{ page.id }}/0new.png" alt="The new and improved color picker dialog window" />
<p>But it&#39;s not all just about the colors. In this release, we also improved inspection of getters. They will now be presented as <em>getter</em> in italic, and clicking this text will evaluate the getter and show the according value.</p>
<img src="{{ page.id }}/getter.gif" alt="Animation showing the new getter evaluation: clicking on the &#39;getter&#39; string triggers the evaluation, and the according value is displayed in its place" />
<p>In the Network panel, we&#39;ve updated the UA presets for global header overrides in the options tab to reflect some of the latest browsers. And, as a final tweak for this build, Opera Dragonfly will now use the system&#39;s application font for its interface elements.</p>
