---
title: Update to CSS Inspector
authors:
- dstorey
tags:
- Network
- Colour
- CSS
- Firebug
- Opera Dragonfly
- dragonfly
layout: article
---
<p>The previous release of Opera Dragonfly to coincide with Opera 10.60 added one of the most requested features: offline support via App Cache. Now we are launching the second release for the 10.6x branch with another highly requested feature. This time we have added support for disabling and enabling CSS declarations.</p>

<h3>Enabling/disabling declarations</h3>

<p>Much of the CSS Styles panel code has been rewritten while adding this feature, and a number of bugs have been squashed in the process. A CSS declaration can be disabled by hovering over the rule and unchecking the check box. Similarly the declaration can be enabled again by checking the box. This can be very useful while debugging for quickly testing how an individual declaration effects rendering, without deleting and thus loosing the declaration.</p>

<h3>Colour picker</h3>

<p>The other new key feature is the introduction of a colour picker. This complements the existing colour feature for picking colours from the web page and storing them in the colour palette. The new colour picker adds a swatch after colour related CSS declarations. This swatch gives a quick preview of the defined colour. This is especially handy if like me, you never remember the mapping between RGB or Hex values and the actual colour. The real fun starts when you click the swatch. The colour picker is opened in a floatable panel, and allows you to define a colour by typing in the value, adjusting the RGB or HSV sliders, or selecting a colour from the colour preview. As with hand editing, the colours on the web page are updated in real time, so it is easy to make small adjustments to find the perfect colour without a lot of effort switching between your editor and reloading the browser.</p>

<p>For all you SVG fans, you’ll be happy to know the colour picker also works for CSS properties in SVG, and the colour picker itself is implemented using SVG, along with HTML5 forms. Opera Dragonfly itself uses liberal amounts of modern web technologies, such as App Cache, Web Storage, HTML5 Forms, SVG and CSS3 properties amongst others.</p>

<h3>Future releases</h3>

<p>While these are the two key features of this release, that is not the only things coming. Attentive readers may have seen the Core fix <q>CORE-22402 (EcmaScript debugger improvements)</q> in a <a href="http://my.opera.com/desktopteam/blog/2010/08/03/presto-update">recent Opera 10.70 snapshot</a>. What is this mysterious bug? This was our task bug for Scope improvements for the JavaScript debugger. There were a number of bug fixes and a couple of key features. The first is the highly anticipated <a href="http://getfirebug.com/wiki/index.php/Console_API">Firebug Console API</a>. Work is well underway on the Opera Dragonfly side of this task as well, along with the <a href="http://getfirebug.com/wiki/index.php/Command_Line_API">Firebug Command Line API</a>. Both should be complete when a final public version of the browser with the relevant Core version is released. The next major feature from this Scope task to add support for breaking on an event (e.g. break when a click event fires). Other features include things like including inherited properties in the variable inspection view.</p>

<p>Work is currently going on in parallel on the Opera Dragonfly side between implementing these new features enabled by Scope and the Opera Dragonfly UX and visual redesign. On the Scope side, work is ongoing to improve the network inspector and add much requested features such a being able to view the bodies of HTTP requests. This will for example give us the ability to access the original CSS and HTML files. We will be able to provide much more detail than what we currently provide with the existing basic network inspector.</p>

<h3>Known issues in this release</h3>

<p>Opera Dragonfly is still in alpha so there are a couple of known issues related to this release:</p>

<ul>
    <li>When disabling all declarations in a rule, the rule itself will be deleted</li>
    <li>The way Speed Dial pages are handled in Opera has changed in a recent release of Opera. If a Speed Dial page is opened after Opera Dragonfly is already opened, the DOM will not update when loading any web page in that tab. A work around is to close Opera Dragonfly and open it again for that tab</li>
</ul>
