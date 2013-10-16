Title: Icon Creator tutorial
----
Date: 2010-05-05 11:23:13
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by-nc-sa/3.0/
----
Text:

  <p>Table of contents:</p>

  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#getting-started">Getting started</a>
      <ul>
        <li><a href="#ready-motif">Example 1: Creating an icon with a ready-made motif</a></li>
        <li><a href="#load-from-file">Example 2: Loading a motif from a file</a></li>
        <li><a href="#load-from-picture">Example 3: Creating an icon from a picture</a></li>
      </ul>
    </li>
    <li><a href="#adding">Adding icons to your widget</a></li>
    <li><a href="#summary">Summary</a></li>
  </ul>

  <h2 id="introduction">Introduction</h2>

  <p>There are many tasks in web development that are tedious and time consuming but absolutely essential to ensure that the product comes across as professional and looks finished. Icon creation is one of them. An application with a badly-designed icon will look amateurish to its potential users, no matter how fantastic the underlying functionality is.</p>

  <p>This is never more true than in the case of Opera widgets. Not only are icons displayed in a number of important places (status bars, managers, widget lists), creating that all-important first impression about your widget, but a good icon is also a major criteria for acceptance at <a class="external" href="http://widgets.opera.com/">widgets.opera.com</a>.</p>

  <p>That&#39;s right. No icon or a bad icon = no acceptance.</p>

  <p>The <a href="http://widgets.opera.com/widget/17371/">Icon Creator</a> has been created to ease the pain of creating widget icons, saving you a lot of time whether you are a graphic designer or a developer. Even better, the Icon Creator is itself a widget, meaning it&#39;s easy to install and use.</p>

  <p class="note">Note: there is a <a class="internal" href="http://dev.opera.com/articles/view/custom-opera-widget-icons/">widget icon tutorial</a> available which describes how to make a widget icon based on ready-made templates. This is a useful reference but there is still a certain amount of graphic design skill and work needed when going down this route. The Icon Creator widget abstracts a lot of that work away from you.</p>

  <h2 id="getting-started">Getting started</h2>

  <p>The application is really simple and straightforward — see Figure 1 for an overview of the UI.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/startup0.png" alt="Icon Creator startup window" /></p>

    <p class="comment">Figure 1: The start-up window of the Icon Creator.</p>

  <p>In the following sections I&#39;ll go through two real-world examples that will cover most of its functionality. Let&#39;s begin — first of all I&#39;d like you to <a href="http://widgets.opera.com/widget/17371/">download and install the Icon Creator</a>. Keep it open as you read through the rest of the article.</p>

  <h3 id="ready-motif">Example 1: Creating an icon with a ready-made motif</h3>

  <p>There are some pre-installed motifs included in the Icon Creator. The cogwheel you see when you open the application is just one of them. See the arrow button lurking on the left hand side of Figure 1 (<img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/arrow000.png" alt="right-pointing arrow button that opens the pre-installed motifs panel" style="vertical-align: bottom;" />)? Click it to have the pre-installed motifs slide into view, as seen in Figure 2.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/motifs00.png" alt="Icon Creator pre-installed motifs" /></p>

    <p class="comment">Figure 2: Pre-installed motifs.</p>

  <p>When you&#39;ve chosen one you like, you can save your icon in different sizes using the <em>Export</em> buttons on the right of the Icon Creator (see Figure 3). Icons are saved in <code>.png</code> format.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/export.png" alt="The icon export buttons" /></p>

    <p class="comment">Figure 3: The icon export buttons.</p>

    <p>You can also easily alter the widget&#39;s background color and motif/symbol color, turn background gradients on and off, and select from four overall icon styles using the controls shown in Figure 4.</p>

    <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/toolbar.png" alt="The main icon toolbar" /></p>

    <p class="comment">Figure 4: The main icon toolbar.</p>
    
    <p>First of all, try clicking on the color controls to the right of the <q>Bg color</q> text — these will allow you to change the color of the icon background — see Figure 5 for an example. Figure 5 also illustrates the difference that the <em>Use BG gradient</em> checkbox makes. 

 <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/icon_gre.png" alt="widget icon with gradient" />

    <img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/icon_grf.png" alt="widget icon with no gradient" /></p>

    <p class="comment">Figure 5: Icons usually look better <em>with</em> a background gradient.</p>

    <p>There are three ways you can define a new color:</p>

  <ul>
    <li>Choose one of the predefined colors in the toolbar.</li>
    <li>Type the color in hex format in the input box.</li>
    <li>Use the color picker that pops up when you click or focus on the input box.</li>
  </ul>

<p>Now try clicking on the <q>Symbol color</q> text — this will result in the color controls for the symbol/motif being displayed, as seen in in Figure 6.</p>

   <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/toolbar_alt.png" alt="The main icon toolbar with Symbol color controls displayed" /></p>

    <p class="comment">Figure 6: The main icon toolbar with Symbol color controls displayed.</p>

   <p>These controls work just the same as the background color controls. Altering them results in a change in the color of the symbol/motif, as seen in Figure 7.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/icon_grf.png" alt="widget icon with gradient" />

    <img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/icon_symbolcolor.png" alt="widget icon with gradient and changed symbol color" /></p>

    <p class="comment">Figure 7: Changing the icon symbol color.</p>

    <p>At this point, take a minute or two to have a play with these controls before moving on. You&#39;ll find them pretty intuitive and easy to grasp.</p>

  <h3 id="load-from-file">Example 2: Loading a motif from a file</h3>

  <p>This is all well and good, but it is likely that you won&#39;t want to use one of our preset motifs. You might already have your own brand icon to use, or maybe you&#39;ve found a free one online that suits your widget. I&#39;m not a great designer myself, so I&#39;m going to take advantage of the fantastic <a href="http://openiconlibrary.sourceforge.net/">Open Icon Library</a>. I particularly liked the icon shown in Figure 6.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/applicat.png" width="128" height="128" alt="motif example" /></p>

    <p class="comment">Figure 6: Example motif from the Open Icon Library.</p>

  <p>Let&#39;s make a widget icon from this (feel free to use one of your own icons if you prefer). Click the <em>Open Image</em> button in the top right of the Widget Icon Creator interface and select your chosen icon image file in the file chooser dialog box that pops up.</p>

  <p>The moment your image is opened, your icons will be created in the preview section of the interface, ready to be saved! Their dimensions are set to the four commonly used sizes seen in Figure 7: 128 x 128, 64 x 64, 32 x 32 and 16 x 16 pixels.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/icon_128.png" width="128" height="128" alt="sample 128 by 128 pixel icon" />
    <img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/icon_640.png" width="64" height="64" alt="sample 64 by 64 pixel icon" />
    <img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/icon_320.png" width="32" height="32" alt="sample 32 by 32 pixel icon" />
    <img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/icon_160.png" width="16" height="16" alt="sample 16 by 16 pixel icon" /></p>

    <p class="comment">Figure 7: Icon previews, ready to be saved.</p>

    <p>Again, have a go at defining different icon styles using the available controls. When you&#39;re done, save your icons to somewhere suitable on your hard disk again using the <em>Export</em> buttons.</p>

  <h3 id="load-from-picture">Example 3: Creating an icon from a picture</h3>

  <p>What if you can&#39;t find a motif that satisfies you? What if you want your icon to be more unique? You can use any picture you like — just load it into the Widget Icon Creator using the <em>Open image</em> button as in the previous example (the icon creator supports <code>.png</code>, <code>.jpg</code>, <code>.gif</code> and <code>.tiff</code> images).</p>

  <p>I chose a photo by <a class="external" href="http://www.freedigitalphotos.net/images/view_photog.php?photogid=345">Carlos Porto</a> that he kindly published on the <a class="external" href="http://www.freedigitalphotos.net/">http://www.freedigitalphotos.net</a> site — see Figure 8.</p>

  <p><img src="http://forum-test.oslo.osa/kirby/content/articles/352-icon-creator-tutorial/screensh.png" width="600" height="493" alt="Widget Icon Creator screenshot" /></p>

  <p class="comment">Figure 8: Making an icon from a custom picture.</p>

  <p>One important tool we haven&#39;t yet covered is the crop square — this is the dashed square with the small white boxes (handles) at regular intervals around its edge, as seen in Figures 1, 2, and 8. This lets you grab exactly the part of the image you want to use for your icon. It has two functions:</p>

  <ul>
    <li>You can move the crop square around the image by holding down the left mouse button inside the square and dragging it.</li>
    <li>You can resize the crop square by holding down the mouse button over any of the white handles around the edge and dragging.</li>
  </ul>

  <p class="note">Note that unless your picture uses transparency, background tools (color and gradient) will have no effect.</p>

  <h2 id="adding">Adding icons to your widget</h2>

  <p>In order for your widget to use the icons you&#39;ve made, you need to put them in your widget package and add their paths to the <code>&lt;widget&gt;</code> element in your <code>config.xml</code> file:</p>

  <pre><code>&lt;widget&gt;
    ...
    &lt;icon&gt;icons/128_widget_icon_mywidget.png&lt;/icon&gt;
    &lt;icon&gt;icons/64_widget_icon_mywidget.png&lt;/icon&gt;
    &lt;icon&gt;icons/32_widget_icon_mywidget.png&lt;/icon&gt;
    &lt;icon&gt;icons/16_widget_icon_mywidget.png&lt;/icon&gt;
    ...
  &lt;/widget&gt;</code></pre>

  <h2 id="summary">Summary</h2>

  <p>So that&#39;s it — our tour of the Icon Creator has come to an end. I hope you found it useful. There are only two things I&#39;d like to re-emphasize:</p>

  <ul>
     <li>It&#39;s very important for your widget to have proper icons.</li>
     <li>The Icon Creator helps you make nice icons even if you&#39;re no graphic designer.</li>
  </ul>

  <p>So, no excuses any more! See you at <a class="external" href="http://widgets.opera.com/">widgets.opera.com</a>.</p></p>
