---
title: Color in Opera 10 — HSL, RGB and Alpha Transparency
authors:
- molly-holzschlag
intro: 'This guide explains how the RGB (Red, Green, Blue) and HSL (Hue, Saturation, Lightness) color models work, and how web designers can make clever use of them in CSS to improve their designs, and make more logical color scheme choices. It also looks at the alpha channel, and how that can also be beneficial.'
layout: article
---
<h2>Introduction</h2>
<p>This article explains how the HSL (Hue, Saturation, Lightness) and RGB (Red, Green, Blue) color models work (and the alpha transparency options in both color models), as supported in the new <a href="http://www.opera.com/browser">Opera 10 browser</a>. It also shows how designers and developers can tap into these color models to create more intelligent color schemes. We will first look at RGB, and how it can be considered somewhat counter-intuitive; then we will explore use of HSL colors for web color schemes, and how shifting the component values gives more logical results, once you get used to how they work.</p>

<h2>RGB Color</h2>

<p>While RGB (Red, Green, Blue) notation using percentages or integers has been around for many years, RGB itself is not only CRT-specific, but it's rather non-intuitive. For most designers and developers, anything other than black, white and perhaps a handful of other commonly used colors are easily memorized in their RGB percentage or integer forms.</p>

<p>In CSS RGB notation, the percentage and integer options have no correlation. The following sample shows a line of CSS where <code>#example1</code> uses integer based notation. <code>#example2</code> uses percentage based notation, and as you can see, there's no correlation between the two resulting colors (here conveniently applied on the respective code samples):</p>

<p><code><span title="rgb(100, 50, 20)" style="color: rgb(100, 50, 20);font-weight:bold;" id="example1">div#example1 {color: rgb(100, 50, 20);}</span></code></p>
<p><code><span title="rgb(100%, 50%, 20%)" style="color: rgb(100%, 50%, 20%);font-weight:bold;" id="example2">div#example2 {color: rgb(100%, 50%, 20%);}</span></code></p>

<p>What's more, it's extremely important to not mix integers and percentages. Unfortunately, this happens sometimes due to human error, and most browsers use  error handling and attempt to "guess" what you meant. This means the resulting color will be arbitrary. The specification forbids an integer and a percentage in the same color value string — in a single string you can use only one or the other, although you can use both notations within a given style sheet. So, it would be fine to use both <code>#example1</code> and <code>#example2</code> in the same sheet because each value uses an integer <em>or</em> percentages, but never use both in the same declaration.</p>

<h2>RGB Color Notation: Counter-Intuitive</h2>
<p>While RGB color notation has proven very useful throughout the life of CSS, the visual color table below shows that it's not very intuitive. First, one has to find the proper RGB notation in either percentage or integer values, or both, and then modify to get hue variations by changing the value of blue. If you try to find a more saturated color, or choose colors that are within a palette range, you have to look those up too. Simply changing percentages can end up being far more confusing, as is shown in Table 1.</p>

<p class="note">Note: You can hover over each of the individual table cells to get information on what their color values are.</p>

<table id="rgb" summary="visual table showing rgb color values">

<caption>Table 1. RGB Colors Using integers and percentages</caption>
<tr style="font-size:80%;">
		<th>Percentages, RGB, solid blue </th>
		<th>Integers, RGB, decreasing blue</th>
		<th>Percentages, RGB, modifying R&G values</th>
</tr>
<tr>
	<td title="rgb(0%, 0%, 100%)" style="background-color: rgb(0%, 0%, 100%);" class="rgb-blue"> </td>
	<td title="rgb(0%, 0%, 100%)" style="background-color: rgb(0%, 0%, 100%);" class="rgb-blue"> </td>
	<td title="rgb(0%, 0%, 100%)" style="background-color: rgb(0%, 0%, 100%);" class="rgb-blue"> </td>
</tr>
<tr>
	<td title="rgb(0%, 0%, 100%)" style="background-color: rgb(0%, 0%, 100%);" class="rgb-blue1"> </td>
	<td title="rgb(0, 0, 255)" style="background-color: rgb(0, 0, 255);" class="rgb-blue1-num"> </td>
	<td title="rgb(0%, 10%, 90%)" style="background-color: rgb(0%, 10%, 90%);" class="rgb-blue1-as"> </td>
</tr>
<tr>
	<td title="rgb(0%, 0%, 100%)" style="background-color: rgb(0%, 0%, 100%);" class="rgb-blue2"> </td>
	<td title="rgb(0, 0, 230)" style="background-color: rgb(0, 0, 230);" class="rgb-blue2-num"> </td>
	<td title="rgb(30%, 0%, 80%)" style="background-color: rgb(30%, 0%, 80%);" class="rgb-blue2-as"> </td>
</tr>
<tr>
	<td title="rgb(0%, 0%, 100%)" style="background-color: rgb(0%, 0%, 100%);" class="rgb-blue3"> </td>
	<td title="rgb(0, 0, 210)" style="background-color: rgb(0, 0, 210);" class="rgb-blue3-num"> </td>
	<td title="rgb(0%, 30%, 70%)" style="background-color: rgb(0%, 30%, 70%);" class="rgb-blue3-as"> </td>
</tr>
<tr>
	<td title="rgb(0%, 0%, 100%)" style="background-color: rgb(0%, 0%, 100%);" class="rgb-blue4"> </td>
	<td title="rgb(0, 0, 190)" style="background-color: rgb(0, 0, 190);" class="rgb-blue4-num"> </td>
	<td title="rgb(50%, 50%, 60%)" style="background-color: rgb(50%, 50%, 60%);" class="rgb-blue4-as"> </td>
</tr>
<tr>
	<td title="rgb(0%, 0%, 100%)" style="background-color: rgb(0%, 0%, 100%);" class="rgb-blue5"> </td>
	<td title="rgb(0, 0, 170)" style="background-color: rgb(0, 0, 170);" class="rgb-blue5-num"> </td>
	<td title="rgb(50%, 0%, 50%)" style="background-color: rgb(50%, 0%, 50%);" class="rgb-blue5-as"> </td>
</tr>

<tr style="font-size:80%;">
		<th>Percentages, RGB, solid red </th>
		<th>Integers, RGB, decreasing red</th>
		<th>Modifying R&G values</th>
</tr>
<tr>
	<td title="rgb(100%, 0%, 0%)" style="background-color: rgb(100%, 0%, 0%);" class="rgb-red"> </td>
	<td title="rgb(100%, 0%, 0%)" style="background-color: rgb(100%, 0%, 0%);" class="rgb-red"> </td>
	<td title="rgb(100%, 0%, 0%)" style="background-color: rgb(100%, 0%, 0%);" class="rgb-red"> </td>
</tr>
<tr>
	<td title="rgb(100%, 0%, 0%)" style="background-color: rgb(100%, 0%, 0%);" class="rgb-red1"> </td>
	<td title="rgb(255, 0, 0)" style="background-color: rgb(255, 0, 0);" class="rgb-red1-num"> </td>
	<td title="rgb(90%, 10%, 0%)" style="background-color: rgb(90%, 10%, 0%);" class="rgb-red1-as"> </td>
</tr>
<tr>
	<td title="rgb(100%, 0%, 0%)" style="background-color: rgb(100%, 0%, 0%);" class="rgb-red2"> </td>
	<td title="rgb(230, 0, 0)" style="background-color: rgb(230, 0, 0);" class="rgb-red2-num"> </td>
	<td title="rgb(80%, 0%, 0%)" style="background-color: rgb(80%, 0%, 0%);" class="rgb-red2-as"> </td>
</tr>
<tr>
	<td title="rgb(100%, 0%, 0%)" style="background-color: rgb(100%, 0%, 0%);" class="rgb-red3"> </td>
	<td title="rgb(210, 0, 0)" style="background-color: rgb(210, 0, 0);" class="rgb-red3-num"> </td>
	<td title="rgb(70%, 30%, 0%)" style="background-color: rgb(70%, 30%, 0%);" class="rgb-red3-as"> </td>
</tr>
<tr>
	<td title="rgb(100%, 0%, 0%)" style="background-color: rgb(100%, 0%, 0%);" class="rgb-red4"> </td>
	<td title="rgb(190, 0, 0)" style="background-color: rgb(190, 0, 0);" class="rgb-red4-num"> </td>
	<td title="rgb(60%, 50%, 0%)" style="background-color: rgb(60%, 50%, 0%);" class="rgb-red4-as"> </td>
</tr>
<tr>
	<td title="rgb(100%, 0%, 0%)" style="background-color: rgb(100%, 0%, 0%);" class="rgb-red5"> </td>
	<td title="rgb(170, 0, 0)" style="background-color: rgb(170, 0, 0);" class="rgb-red5-num"> </td>
	<td title="rgb(50%, 0%, 0%)" style="background-color: rgb(50%, 0%, 0%);" class="rgb-red5-as"> </td>
</tr>

</table>


<h2>HSL: Hue, Saturation, Lightness Samples</h2>

<p>HSL color, which is supported as part of the CSS 3 color module and has been implemented in Opera since 9.5, works very differently. Instead of adding amounts of red, green and blue (known as additive synthesis) to get a specific color, the hue is chosen as a base point. Then, the percentage of saturation and lightness can be independently modified using percentages, providing a much more intutive way for designers to work.</p>

<p>The HSL model attempts to recreate perceptual color. Using a 3d model, it's easier to see the geometric relationships that impact how color is perceived. At the center of the image, you can see the color wheel from which the hue is taken. Move toward lightness, and a lighter hue appears, move toward saturation, and greater saturation of the color becomes apparent (Figure 1).</p>

<img src="hsl-cone.png" alt="Hue, Saturation and Lightness Color Cone">
<p class="comment">Figure 1: Color cone* visually defining the Hue, Saturation and Lightness (HSL) from 0-360 degree angles and percentages.</p>

<p>In HSL color, when saturation is at 100% and lightness is at 50% you get a pure hue. So, 0, 100%, 50% is pure red. The hue value is expressed as an integer, but actually relates to the angle on the HSL color wheel where the Hue lies. So, common colors would be:</p>

<ul>
<li>hsl(0, 100%, 50%) - Red</li>
<li>hsl(60, 100%, 50%) - Yellow</li>
<li>hsl(120, 100%, 50%) -  Green</li>
<li>hsl(180, 100%, 50%) - Cyan</li>
<li>hsl(240, 100%, 50%) - Blue</li>
<li>hsl(300, 100%, 50%) - Magenta/Purple</li>
</ul>

<p>And, because 360 degrees in HSL also falls on the 0 point, the value <code>hsl(360, 100%, 50%)</code> will also be red.</p>


<h3>HSL Notation</h3>

<p>Unlike RGB, HSL requires a mix of integer and percentage values. After the <code>color</code> property name, the <code>hsl()</code> notation is added. The first integer is the hue, and then a percentage value for saturation is followed by a percentage value for lightness. Any other notation will not work, as it is necessary to first set the hue so the browser can properly calculate your chosen percentages.</p>

<p><code><span title="hsl(100, 50%, 20%)" style="color: hsl(100, 50%, 20%);font-weight:bold;" id="example3">div#example3 {color: hsl(100, 50%, 20%);}</span></code></p>
<p><code><span title="hsl(250, 40%, 60%)" style="color: hsl(250, 40%, 60%);font-weight:bold;" id="example4">div#example2 {color: hsl(350, 40%, 90%);}</span></code></p>

<p>As a result, it becomes extremely easy to select a hue and then modify it by simply modifying its saturation and lightness values. This gives a range of options to the designer and developer that are very intuitive (Table 2).</p>

<table summary="visual table showing hsl and rgb color values as CSS3">
<caption>Table 2: HSL: Base Hue, Saturation, &amp; Lightness</caption>
<tr>
		<th>HSL: Blue analog to RGB blue </th>
		<th>HSL: Saturation decrease</th>
		<th>HSL: Light decrease</th>
		<th>HSL: Change both</th>
</tr>
<tr>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
</tr>
<tr>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
	<td title="hsl(240, 80%, 50%)" style="background-color: hsl(240, 80%, 50%);" class="hsl-blue1-s"> </td>
	<td title="hsl(240, 100%, 40%)" style="background-color: hsl(240, 100%, 40%);" class="hsl-blue1-l"> </td>
	<td title="hsl(240, 80%, 40%)" style="background-color: hsl(240, 80%, 40%);" class="hsl-blue1-ls"> </td>
</tr>
<tr>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
	<td title="hsl(240, 60%, 50%)" style="background-color: hsl(240, 60%, 50%);" class="hsl-blue2-s"> </td>
	<td title="hsl(240, 100%, 30%)" style="background-color: hsl(240, 100%, 30%);" class="hsl-blue2-l"> </td>
	<td title="hsl(230, 60%, 10%)" style="background-color: hsl(230, 60%, 10%);" class="hsl-blue2-ls"> </td>
</tr>
<tr>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
	<td title="hsl(240, 40%, 50%)" style="background-color: hsl(240, 40%, 50%);" class="hsl-blue3-s"> </td>
	<td title="hsl(240, 100%, 20%)" style="background-color: hsl(240, 100%, 20%);" class="hsl-blue3-l"> </td>
	<td title="hsl(220, 40%, 30%)" style="background-color: hsl(220, 40%, 30%);" class="hsl-blue3-ls"> </td>
</tr>
<tr>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
	<td title="hsl(240, 20%, 50%)" style="background-color: hsl(240, 20%, 50%);" class="hsl-blue4-s"> </td>
	<td title="hsl(240, 100%, 10%)" style="background-color: hsl(240, 100%, 10%);" class="hsl-blue4-l"> </td>
	<td title="hsl(210, 20%, 50%)" style="background-color: hsl(210, 20%, 50%);" class="hsl-blue4-ls"> </td>
</tr>
<tr>
	<td title="hsl(240, 100%, 50%)" style="background-color: hsl(240, 100%, 50%);" class="hsl-blue"> </td>
	<td title="hsl(240, 0%, 50%)" style="background-color: hsl(240, 0%, 50%);" class="hsl-blue5-s"> </td>
	<td title="hsl(240, 100%, 5%)" style="background-color: hsl(240, 100%, 5%);" class="hsl-blue5-l"> </td>
	<td title="hsl(200, 0%, 60%)" style="background-color: hsl(200, 0%, 60%);" class="hsl-blue5-ls"> </td>
</tr>

<tr>
		<th>HSL: Red analog to RGB red </th>
		<th>HSL: Saturation decrease</th>
		<th>HSL: Light decrease</th>
		<th>HSL: Change both</th>
</tr>
<tr>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
</tr>
<tr>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
	<td title="hsl(0, 80%, 50%)" style="background-color: hsl(0, 80%, 50%);" class="hsl-red1-s"> </td>
	<td title="hsl(0, 100%, 40%)" style="background-color: hsl(0, 100%, 40%);" class="hsl-red1-l"> </td>
	<td title="hsl(0, 80%, 40%)" style="background-color: hsl(0, 80%, 40%);" class="hsl-red1-ls"> </td>
</tr>
<tr>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
	<td title="hsl(0, 60%, 50%)" style="background-color: hsl(0, 60%, 50%);" class="hsl-red2-s"> </td>
	<td title="hsl(0, 100%, 30%)" style="background-color: hsl(0, 100%, 30%);" class="hsl-red2-l"> </td>
	<td title="hsl(0, 60%, 70%)" style="background-color: hsl(0, 60%, 70%);" class="hsl-red2-ls"> </td>
</tr>
<tr>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
	<td title="hsl(0, 40%, 50%)" style="background-color: hsl(0, 40%, 50%);" class="hsl-red3-s"> </td>
	<td title="hsl(0, 100%, 20%)" style="background-color: hsl(0, 100%, 20%);" class="hsl-red3-l"> </td>
	<td title="hsl(0, 40%, 20%)" style="background-color: hsl(0, 40%, 20%);" class="hsl-red3-ls"> </td>
</tr>
<tr>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
	<td title="hsl(0, 20%, 50%)" style="background-color: hsl(0, 20%, 50%);" class="hsl-red4-s"> </td>
	<td title="hsl(0, 100%, 10%)" style="background-color: hsl(0, 100%, 10%);" class="hsl-red4-l"> </td>
	<td title="hsl(0, 20%, 90%)" style="background-color: hsl(0, 20%, 90%);" class="hsl-red4-ls"> </td>
</tr>
<tr>
	<td title="hsl(0, 100%, 50%)" style="background-color: hsl(0, 100%, 50%);" class="hsl-red"> </td>
	<td title="hsl(0, 0%, 50%)" style="background-color: hsl(0, 0%, 50%);" class="hsl-red5-s"> </td>
	<td title="hsl(0, 100%, 5%)" style="background-color: hsl(0, 100%, 5%);" class="hsl-red5-l"> </td>
	<td title="hsl(0, 0%, 45%)" style="background-color: hsl(0, 0%, 45%);" class="hsl-red5-ls"> </td>
</tr>

</table>

<p>With a bit of study, it should become clear to you that whether you're looking to increase or decrease lightness and saturation, or choose harmonious colors, using HSL is far more intuitive and easy to use.</p>

<h2>Alpha transparency in CSS 3 colors</h2>
<p>Along with the ability to interpret HSL or RGB notation, Opera 10 now offers both RGBA and HSLA — the core color models discussed in this article, but with an added alpha transparency value.</p>

<p>Using the alpha transparency value allows you to control how much opacity a given color has. Opacity ranges from 0.0 (fully transparent) to 1.0 (fully opaque).</p>

<p>The notation for RGB or HSL alpha transparency is to add the level of transparency in the fourth position of the color value. You must also prefix <code>rgba</code> or <code>hsla</code> to the value as follows:</p>

<p><code><span title="rgb(100, 50, 20)" style="color: rgb(100, 50, 20);font-weight:bold;" id="example5">div#example5 {color: rgb(100, 50, 20);}</span></code></p>
<p><code><span title="rgba(100%, 50%, 20%, 0.9)" style="color: rgba(100%, 50%, 20%, 0.9);font-weight:bold;" id="example6">div#example6 {color: rgba(100%, 50%, 20%, 0.9);}</span></code></p>
<p><code><span title="hsla(100, 50%, 60%, 0.5)" style="color: hsla(100, 50%, 60%, 0.5);font-weight:bold;" id="example7">div#example7 {color: hsla(100, 50%, 60%, 0.5);}</span></code></p>

<p>Table 3 shows one column of RGBA and one of HSLA opacity in use.</p>

<table summary="Table visually describing opacity and transparency in HSLA and RGBA">
<caption>Table 3: Alpha transparency in RGBA and HSLA</caption>
<tr>
	<th>Almost transparent</th>
	<th>.25 transparency</th>
	<th>.50 transparency</th>
	<th>Opaque</th>
</tr>
<tr>
	<td title="hsla(30, 100%, 50%, 0.1)" style="background-color: hsla(30, 100%, 50%, 0.1);" class="orange1"> </td>
	<td title="hsla(30, 100%, 50%, 0.25)" style="background-color: hsla(30, 100%, 50%, 0.25);" class="orange2"> </td>
	<td title="hsla(30, 100%, 50%, 0.5)" style="background-color: hsla(30, 100%, 50%, 0.5);" class="orange3"> </td>
	<td title="hsla(30, 100%, 50%, 1)" style="background-color: hsla(30, 100%, 50%, 1);" class="orange4"> </td>
</tr>
<tr>
	<td title="rgba(0,255,0,0.1)" style="background-color: rgba(0,255,0,0.1);" class="green1"> </td>
	<td title="rgba(0,255,0,0.25)" style="background-color: rgba(0,255,0,0.25);" class="green2"> </td>
	<td title="rgba(0,255,0,0.5)" style="background-color: rgba(0,255,0,0.5);" class="green3"> </td>
	<td title="rgba(0,255,0,1)" style="background-color: rgba(0,255,0,1);" class="green4"> </td>
</tr>

</table>

<h2>Conclusion</h2>

<p>Intelligent use of the RGB and HSL color models will allow clever designers to overlap colors and even images, gaining powerful control over managing color and working with it to create a variety of imaginative designs. I hope this article has helped you to understand how these color models work, and inspired you towards better web design!</p>

<p>*Used with permission by Alexandre Van de Sande, <a href="http://wanderingabout.com/">wanderingabout.com</a></p>
