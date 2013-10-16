Title: Optimizing widget graphics for mobile and devices
----
Date: 2010-02-09 09:38:08
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<p>Table of contents:</p>

<ol>
<li><a href="#intro">Introduction</a></li>
<li><a href="#limit">Limit the amount of graphics</a></li>
<li><a href="#sprites">Use CSS sprites</a></li>
<li><a href="#format">Choose the right image format</a></li>
<li><a href="#colordepth">Optimize color depth</a></li>
<li><a href="#crushing">PNG crushing</a>
<ol>
<li><a href="#pngcrush">Pngcrush</a></li>
<li><a href="#pngout">PNGOut</a></li>
</ol>
</li>
<li><a href="#repeating">A note about repeating backgrounds</a></li>
</ol>

<h2 id="intro">Introduction</h2>

<p>This article will explore a few simple techniques that help you optimize the graphics inside your Opera widget for mobile phones and devices with limited resources. Of course, these tips are likely to also improve the widget’s performance on desktop, albeit to a lesser extent.</p>

<h2 id="limit">Limit the amount of graphics</h2>

<p>In general, it is a good idea to keep the number of decorative or informative images low and to use text and CSS styling where possible. Using PNG alpha-transparency for drop shadows and see-through effects may have a slight impact on performance and ultimately on the device’s battery life, especially when used in combination with animated elements, so proceed with caution.</p>

<h2 id="sprites">Use CSS sprites</h2>

<p>When navigating inside an Opera widget, graphics are sometimes loaded with a delay of a few tenths of a second. Although such a short delay may not seem like a lot, it still has a considerable impact on the user experience and makes the widget feel sluggish. Luckily enough, this delay can be largely avoided by using CSS sprites. With the CSS sprites technique, all images used in the Opera widget are combined into one “master image”—by using a smart combination of CSS positioning and width/height settings, the individual image parts can be selectively shown inside the Opera Widget, without any delay. The reason for this performance optimization has to do with the fact that the different parts in the master image are all loaded at once and they reside in memory: moving the master image to the appropriate position is less resource intensive then loading the individual images one by one.</p>

<p>Below you can find a CSS sprites example, showing an Opera widget with a red “front side” and a gray “back side.” Both the <code>front div</code> and the <code>back div</code> use the same <code>background-image</code>, but in the latter case, the image is shifted up with 300 pixels, so as to push the red rectangle out of view and show the gray one instead. The color change will be visible instantly upon clicking the “Go to backside” link. In case two separate images would have been used, the user may notice a small image loading delay when navigating to the “back side” of the Opera Widget, depending on the device’s capabilities.</p>

<pre>
<code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Background showcase&lt;/title&gt;
&lt;script type=&#39;text/javascript&#39;&gt;
function showback() {
  if (document.getElementById) {
    document.getElementById(&#39;back&#39;).style.display = &#39;block&#39;;
    document.getElementById(&#39;front&#39;).style.display = &#39;none&#39;;
  }
}
function hideback() {
  if (document.getElementById) {
    document.getElementById(&#39;front&#39;).style.display = &#39;block&#39;;
    document.getElementById(&#39;back&#39;).style.display = &#39;none&#39;;
  }
}
&lt;/script&gt;
&lt;style type=&quot;text/css&quot;&gt;
h1 {font-size: 1.3em;}
#front h1 {color: #fff;}
#front a {color: #ccc;}
#back a {color: #333;}
#front {
    background: transparent url(200_600_combo.png) 0 0 no-repeat;
    height:260px;
    width:200px;
    padding: 20px;
}
#back {
    background: transparent url(200_600_combo.png) 0 -300px no-repeat;
    height:260px;
    width:200px;
    padding: 20px;
}
&lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;div id=&quot;front&quot;&gt;
  &lt;h1&gt;Frontside&lt;/h1&gt;
  &lt;a href=&quot;javascript:showback()&quot;&gt;Go to backside&lt;/a&gt;
&lt;/div&gt;
&lt;div id=&quot;back&quot; style=&quot;display: none;&quot;&gt;
  &lt;h1&gt;Backside&lt;/h1&gt;
  &lt;a href=&quot;javascript:hideback()&quot;&gt;Go to frontside&lt;/a&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
</pre>

<p><a href="doublebg.png">This</a> is the image that is used—note that the two backgrounds form one single graphic.</p>

<h2 id="format">Choose the right image format</h2>

<p>When using graphics in Opera widgets, choosing the right image format is likely to speed up the widget’s performance. It is recommended to try out which image format produces the smallest file size for a given graphic, as smaller file sizes usually perform better than big ones.</p>

<h2 id="colordepth">Optimize color depth </h2>

<p>Applying posterization, dithering and color indexing algorithms on your images generally reduces file size, which often results in better performance. Although it is hard to give a winning combination of settings that invariably result in small file sizes while maintaining high visual quality, the screenshots below give an idea of a typical color indexing conversion workflow. The graphics tool being used here for screenshots is The Gimp, but Photoshop and other graphic editors allow for similar procedures.</p>

<p>We start off with a <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Japan_large.png/526px-Japan_large.png">PNG image of about 180 KB</a> found at the <a href="http://commons.wikimedia.org/">Wikimedia Commons</a></p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/189-optimizing-widget-graphics-for-mobile-and-devices/526px-Japan_large.png" title="Map of about 180KB" alt="Map of about 180KB" /></p>

<p>Open the image in The Gimp and select Image:Mode:Indexed. In case Indexed is already selected, select RGB, and then try again…</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/189-optimizing-widget-graphics-for-mobile-and-devices/gimp1.png" title="Gimp screenshot" alt="Gimp screenshot" /></p>

<p>Choose “Generate optimum palette” and select the maximum number of colors – in this case 10 is enough. Press Convert and save the result.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/189-optimizing-widget-graphics-for-mobile-and-devices/gimp2.png" title="Gimp screenshot" alt="Gimp screenshot" /></p>

<p>This is the image output by The Gimp: an indexed PNG (10 colors) of about 10 KB:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/189-optimizing-widget-graphics-for-mobile-and-devices/map-output.png" title="Map of about 10KB" alt="Map of about 10KB" /></p>

<h2 id="crushing">PNG crushing</h2>

<p>Image editors often choose poor compression algorithms for PNGs and may include unneeded metadata. This results in larger files, which, as we said, often means longer loading times. Pngcrush and PNGOut, two PNG file optimizers, do a great job in solving this compression problem.</p>

<h3 id="pngcrush">Pngcrush</h3>

<ol>
<li>Pngcrush can be found at <a href="http://pmt.sourceforge.net/pngcrush/">http://pmt.sourceforge.net/pngcrush/</a> : on the download page, search for the package ending in -win32.zip.</li>
<li>Once downloaded, unpack it and move the PNG files you want to convert to the same folder. </li>
<li>Open the command line, and navigate to the folder with pngcrush.exe and the PNG files in question. </li>
<li>Execute <code>pngcrush img.png img2.png</code> where img.png and img2.png are the names of the input and output image, respectively. </li>
<li>Additional arguments (type <code>pngcrush -help</code> for an overview) can be used for further optimization. </li>
</ol>

<h3 id="pngout">PNGOut</h3>

<ol>
<li>PNGOut can be found at <a href="http://www.advsys.net/ken/utils.htm">http://www.advsys.net/ken/utils.htm</a> : search for a link called PNGOUT.EXE. </li>
<li>Once downloaded to a folder, move the PNG files you want to convert to the same folder. <br />
Open the command line, and navigate to the folder with pngout.exe and the PNG files in question. <br />
Execute <code>pngout img.png img2.png</code> where img.png and img2.png are the names of the input and output image, respectively. </li>
<li>Additional arguments (type <code>pngout -help</code> for an overview) can be used for further optimization.</li>
</ol>

<h2 id="repeating">A note about repeating backgrounds</h2>

<p>We have said before that images with smaller file sizes perform better than bigger ones. However, it is recommended to proceed with caution when repeating background images along the x or y axis. In certain cases, repeating a small background image multiple times instead of using a single bigger one may negatively affect performance on the device. Therefore, it is to be expected that</p>

<pre>
<code>
#surface {background: url(5x5px.png) 0 0 repeat-all;}    /* 5x5px.png is a 5 by 5 pixels PNG image */@
</code>
</pre>

<p>is slightly slower to load than</p>

<pre>
<code>
#surface {background: url(200x200px.png) 0 0 no-repeat;} /* 200x200px.png is a 200 by 200 pixels PNG image  */
</code>
</pre>

<p>However, as the browser engine’s rendering behavior is dependent on a number of factors, it is recommended to test these two methods before deciding which one is ideal for the Opera Widget in question.</p>

<p>We hope these tips get you started. Happy optimizing!</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>  
