Title: SVG Evolution 3: Applying Polish
----
Date: 2007-04-11 10:52:22
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<p class="note"><strong>Article update, 16th June 2010</strong>: Browser support notes at the end of the article updated.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/svg-evolution-2-our-first-steps-into-sv/" rel="prev" title="link to the previous article in the series">Previous article—SVG Evolution 2: Our First Steps Into SVG</a></li>
</ul>

    <h2>In Case You Are Just Tuning In</h2>
    
    <p>This is the third entry in a series of articles in which we explore how to integrate <a href="http://www.w3.org/TR/SVG/"><abbr title="Scalable Vector Graphics">SVG</abbr></a> into <abbr title="Dynamic Hyper Text Markup Language">DHTML</abbr> web applications.  In our <a href="http://dev.opera.com/articles/view/22/">first article</a>, we gave an introduction to SVG language and some of its basic capabilities, including integration with the <abbr title="Document Object Model">DOM</abbr>, demonstrating how to bring SVG to a simple photo gallery.  In the <a href="http://dev.opera.com/articles/view/svg-evolution-2-our-first-steps-into-sv/">second article</a>, we started to illustrate some of the immediate benefits of SVG, demonstrated declarative animation in order to spice up the user interface, and then provided some useful functionality to our gallery by creating a styled SVG toolbar with some script for flipping the image horizontally/vertically.  Here is the <a href="/articles/view/svg-evolution-2-our-first-steps-into-sv/ex7-gallery.xhtml">SVG photo gallery</a> that we ended up with at the end of the second article.</p>
    
    <p>We are going to take a similar approach with this article, by first demonstrating another major feature of SVG to provide some eye candy and then moving on to enhance the photo gallery&#39;s functionality using that feature.</p>
    
    <h2>SVG Filters: Not Just Eye Candy</h2>
    
    <p>One of the more sophisticated features of Scalable Vector Graphics is <a href="http://www.w3.org/TR/SVG/filters.html">SVG Filters</a>.  Put simply, a SVG filter modifies the visual appearance of any SVG element before it is rendered to the output device.  Filters are made up of <dfn>filter primitives</dfn>.  Each filter primitive provides a mechanism to produce some RGBA pixels in a single specific way, usually based on some input graphic.  For instance, there are filter primitives that apply a gaussian blur to an input image, to provide lighting or to generate noise.  Filter primitives can provide a variety of &#39;knobs&#39; that control its behavior in the form of XML attributes. Of course filter primitives can be combined in interesting ways to achieve impressive visual effects. </p>
    
    <div class="right">
      <h4>Figure 1 - Filter Primitive Concept</h4>
      <object type="image/svg+xml" data="" width="300" height="375">
        <img src="http://forum-test.oslo.osa/kirby/content/articles/31-svg-evolution-3-applying-polish/plugging-filters.png" title="Blur filter primitive concept" width="300" alt="Blur filter primitive concept" />
      </object>
    </div>
    
    <p>I like to think of filter primitives as pluggable components.  Each filter primitive has zero or more inputs and one output, that can be hooked up (or &quot;chained&quot;) to other primitives.  See Figure 1.  The behavior of each filter primitive is controlled by attributes as described in the SVG specification.</p>
    
    <p>A filter can consist of only one simple primitive (like a <a href="http://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement"><code class="elem">feGaussianBlur</code></a>), or it can consist of several primitives chained together, with outputs of one stage serving as inputs to the next stage in the filter.  Some primitives allow multiple inputs (like the <a href="http://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement"><code class="elem">feBlend</code></a> primitive, which blends two images together) and some have no inputs (like the <a href="http://www.w3.org/TR/SVG/filters.html#feTurbulenceElement"><code class="elem">feTurbulence</code></a> primitive, which produces noise).</p>
    
    <p>The input to each filter primitive or stage is specified by the <code class="att">in</code> attribute and the output from each filter primitive is named in the <code class="att">result</code> attribute (which can be used by later filter primitives).  We will illustrate this concept by building a filter.  For our first experiment, we&#39;re going to use a filter to demonstrate some eye candy in the form of drop shadows underneath our thumbnail images.</p>

&lt;page/&gt;

    <h2>Drop Shadows</h2>
    
    <p>We first need to define what we mean by &quot;drop shadow&quot;:  We would like a fuzzy, darkened region that appears <em>under</em> the thumbnail image in the same rough shape and size of the thumbnail image rectangle, but offset by 5-10 pixels to the right and down.</p>
    
    <h3><code>feGaussianBlur</code>, <code>defs</code>, <code>SourceAlpha</code></h3>
    
    <p>The first thing we will try is to use the <a href="http://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement"><code class="elem">feGaussianBlur</code></a> filter primitive to generate the &quot;fuzzy region&quot;:</p>
    
    <pre class="clear"><code>
    &lt;svg viewBox=&quot;0 0 100 100&quot;&gt;
      &lt;defs&gt;
        <span class="m">&lt;filter id=&quot;drop-shadow&quot;&gt;
          &lt;feGaussianBlur in=&quot;SourceGraphic&quot; stdDeviation=&quot;4&quot; /&gt;
        &lt;/filter&gt;</span>
      &lt;/defs&gt;
      
      &lt;circle fill=&quot;blue&quot; cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;40&quot; <span class="m">filter=&quot;url(#drop-shadow)&quot;</span> /&gt;
    &lt;/svg&gt;
    </code></pre>
    
    <p>We have named the filter &quot;drop-shadow&quot; here and placed it in the <code class="elem">defs</code> section of the SVG document. The <code class="elem">defs</code> element is used for creating definitions of elements that will be referenced later in the document.  The &quot;drop-shadow&quot; filter has one element, a <code class="elem">feGaussianblur</code> filter primitive element.  The blue circle specifies to the renderer that it should apply the &quot;drop-shadow&quot; filter before sending the circle&#39;s visual output to the screen.  We do this by specifying the filter attribute:  <code><span class="att">filter</span>=&quot;<span class="value">url(#drop-shadow)</span>&quot;</code>.</p>
        <div class="right">
          <h4>Figure 2 - Gaussian Blur Filter Primitive</h4>
          <a href="blur.svg" title="Click to see the SVG file.  Opera 9 or Firefox 3 only"><img src="http://forum-test.oslo.osa/kirby/content/articles/31-svg-evolution-3-applying-polish/blur.png" width="150" /></a>
        </div>
    <p>The feGaussianBlur filter primitive has a couple important settings that we must pay attention to.  The <code class="att">in</code> attribute has been set to the special value <code class="value">SourceGraphic</code>.  This tells the renderer that the blur filter primitive uses the source image (in this case, the blue circle) as its input.  The attribute <code class="att">stdDeviation</code> describes how blurry the output should be.  The results of this filter as shown in Figure 2.</p>
    
    <p>The blurry circle looks a little bit like a shadow now, except for the fact that it&#39;s the wrong colour.  We want our shadow to be black.  The easiest way to change this is instead of using SourceGraphic as the input to the <code class="elem">feGaussianBlur</code> primitive, we use SourceAlpha (i.e. only the alpha channel of the blue circle) as input to the filter.  To do this, we set the in attribute of the <code class="elem">feGaussianBlur</code> filter primitive to be <code class="value">SourceAlpha</code> (that is <code><span class="att">in</span>=&quot;<span class="value">SourceAlpha</span>&quot;</code>).  The results are shown below:

        <div class="right">
          <h4>Figure 3 - Gaussian Blur with Source Alpha as Input</h4>
          <a href="blur2.svg" title="Click to see the SVG file.  Opera 9 or Firefox 3 only"><img src="http://forum-test.oslo.osa/kirby/content/articles/31-svg-evolution-3-applying-polish/blur2.png" width="150" /></a>
        </div>
    
    <h3><code>feBlend</code>, <code>feOffset</code></h3>
    
    <p>There, now that looks like a shadow of a circle!  But we have a problem - we&#39;re missing the original blue circle now.  Thankfully, we can use the <a href="http://www.w3.org/TR/SVG/filters.html#feBlendElement"><code class="elem">feGaussianBlurfeBlend</code></a> filter primitive to tell the renderer that it should combine/blend the original source image with the output of the <code class="elem">feGaussianBlur</code> primitive.  That is layer the two on top:</p>

    <pre class="clear"><code>
    &lt;svg viewBox=&quot;0 0 100 100&quot;&gt;
      &lt;defs&gt;
        &lt;filter id=&quot;drop-shadow&quot;&gt;
          &lt;feGaussianBlur in=&quot;SourceAlpha&quot; <span class="m">result=&quot;blur-out&quot;</span> stdDeviation=&quot;4&quot; /&gt;
          <span class="m">&lt;feBlend in=&quot;SourceGraphic&quot; in2=&quot;blur-out&quot; mode=&quot;normal&quot;/&gt;</span>
        &lt;/filter&gt;
      &lt;/defs&gt;
      
      &lt;circle fill=&quot;blue&quot; cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;40&quot; filter=&quot;url(#drop-shadow)&quot; /&gt;
    &lt;/svg&gt;
    </code></pre>
    
    <p>Here, we&#39;ve added a new filter primitive to our &quot;drop-shadow&quot; filter.  The <code class="elem">feBlend</code> primitive combines the original source image with the output of the <code class="elem">feGaussianBlur</code> stage.  However, there is a problem with this approach:  the shadow is in the same location as the blue circle, so it will get almost completely covered by the blue circle that is rendered on top by the <code class="elem">feBlend</code> element.  We need to add one more filter primitive to our chain, the <a href="http://www.w3.org/TR/SVG/filters.html#feOffsetElement"><code class="elem">feOffset</code></a> filter primitive.</p>
    
    <p>The <code class="elem">feOffset</code> filter primitive shifts the image in the x and/or y direction by a given amount.  It is useful for specific scenarios like drop shadows.  The final filter code looks like:</p>

    <pre class="clear"><code>
    &lt;svg viewBox=&quot;0 0 120 120&quot;&gt;
      &lt;defs&gt;
        &lt;filter id=&quot;drop-shadow&quot; <span class="m">filterUnits=&quot;userSpaceOnUse&quot; width=&quot;120&quot; height=&quot;120&quot;</span>&gt;
          &lt;feGaussianBlur in=&quot;SourceAlpha&quot; result=&quot;blur-out&quot; stdDeviation=&quot;4&quot; /&gt;
          <span class="m">&lt;feOffset in=&quot;blur-out&quot; result=&quot;the-shadow&quot; dx=&quot;8&quot; dy=&quot;8&quot;/&gt;</span> 
          &lt;feBlend in=&quot;SourceGraphic&quot; in2=&quot;<span class="m">the-shadow</span>&quot; mode=&quot;normal&quot;/&gt;
        &lt;/filter&gt;
      &lt;/defs&gt;
      
      &lt;circle fill=&quot;blue&quot; cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;40&quot; filter=&quot;url(#drop-shadow)&quot; /&gt;
    &lt;/svg&gt;
    </code></pre>
    
    <p>Note that the output of the <code class="elem">feGaussianBlur</code> now gets sent to the <code class="elem">feOffset</code> primitive, where it is shifted over by 8 pixels in the x and y directions.  Then, the output of the <code class="elem">feOffset</code> primitive is blended with the original graphic by sending both as inputs to the <code class="elem">feBlend</code> filter primitive to achieve the final result.  The attributes which were added to the <code class="elem">filter</code> element were necessary to tell the rendered that the user coordinates should be used and to specify the filter output region.  The results of this filter are:</p>

        <div class="right">
          <h4>Figure 4 - Drop Shadow Using SVG Filters</h4>
          <a href="blur3.svg" title="Click to see the SVG file.  Opera 9 or Firefox 3 only"><img src="http://forum-test.oslo.osa/kirby/content/articles/31-svg-evolution-3-applying-polish/blur3.png" width="150" /></a>
        </div>
    
    <p>The beauty of this is that <em>any</em> SVG element can use this &quot;drop-shadow&quot; <code class="elem">filter</code> element to acquire a drop-shadow just by adding <code><span class="att">filter</span>=&quot;<span class="value">url(#drop-shadow)</span>&quot;</code> as an attribute of that element.</p>
    
    <h3>Updating the SVG Image Gallery</h3>
    
    <p><a href="ex8-gallery.xhtml">You can see the SVG Image Gallery</a>  updated with drop shadows on the thumbnail images at the top.  Note that I had to slightly shrink the thumbnails further such that the drop shadows and images all fit within the original region of space defined by the <code class="elem">object</code> element.</p>

        <div class="right">
          <h4>Figure 5 - Drop Shadow On Image Thumbnails</h4>
          <a href="ex8-gallery.xhtml" title="Click to see the SVG Image Gallery with drop shadows.  Opera 9 and Firefox 3 only"><img src="http://forum-test.oslo.osa/kirby/content/articles/31-svg-evolution-3-applying-polish/gallery-with-drop-shadow.png" width="100" /></a>
        </div>
    
    <p>Now let&#39;s move on to provide some useful functionality using SVG Filters.</p>
    
&lt;page/&gt;

    <h2>Grey Scale</h2>
    
    <p>For our next trick, we&#39;ll see how we can use an SVG filter to turn any colour image into a greyscale one.  This is something that is not possible in SVG without using filters.  First, let&#39;s define the <em>theory</em> of what we want to do:</p>
    
    <h3>Theory</h3>
    
    <p>Without getting too far into colour theory, digital representation and mathematics, very briefly - each pixel in an image has a Red, Green, and Blue &quot;channel&quot;, which is a fancy name for value.  We often see the abbreviation RGB to describe this.  The reason RGB terminology is used is because each actual physical pixel on the screen is made up of 3 different phosphors that emit red, green and blue light in various combinations to create all the colours you can possibly see.  For instance, a pure red pixel would have a value of zero for Green (G=0) and Blue (B=0) channels and a non-zero value in Red (the brighter the red, the higher the value of the R component).</p>
    
    <p>We also speak of an Alpha channel per pixel that defines that pixel&#39;s transparency, so a completely opaque pixel has the highest Alpha value of 1.0 (meaning this element completely obscures elements &quot;behind&quot; it at that pixel), while a completely transparent pixel has an A value of 0 (meaning other entities can be seen &quot;behind&quot; that pixel).</p>
    
    <p>If each RGBA channel can vary between 0.0 and 1.0, one way to convert a coloured pixel into a grey pixel is to first determine how &quot;bright&quot; (or luminous) the pixel is by doing the following:</p>
    
    <div style="margin-left:20px"><pre>Brightness = (Red Value + Green Value + Blue Value) / 3.0
           = (0.3333*R + 0.3333*G + 0.3333*B)</pre></div>
    
    <p>Thus, a completely black pixel (RGB=0,0,0) would result in a &quot;Brightness&quot; of 0 and a completely white pixel (RGB=1,1,1) would result in a &quot;Brightness&quot; of (1+1+1)/3 = 1.0.  A completely blue pixel (RGB=0,0,1) would result in a &quot;Brightness&quot; of 0.3333, while a completely yellow pixel (RGB=1,1,0) would result in a &quot;Brightness&quot; of 0.6666.</p>
    
    <p>Now that we know how bright each pixel is, we can simply set each of the Red, Green, and Blue channels to this value.  When you set a pixel&#39;s RGB values to the same value, you are forcing it to be a grey pixel (that varies from pure black to pure white in proportion to the &quot;Brightness&quot; value).</p>
    
    <p>This is what we want to do.  Essentially, we can write 4 equations for the new R&#39;G&#39;B&#39;A&#39; values (grey-scale) based on the old RGBA values (colour):</p>
    
    <div style="margin-left:20px"><pre>R&#39; = <b>0.3333</b>*R + <b>0.3333</b>*G + <b>0.3333</b>*B + <b>0.0</b>*A
G&#39; = <b>0.3333</b>*R + <b>0.3333</b>*G + <b>0.3333</b>*B + <b>0.0</b>*A
B&#39; = <b>0.3333</b>*R + <b>0.3333</b>*G + <b>0.3333</b>*B + <b>0.0</b>*A
A&#39; =    <b>0.0</b>*R      <b>0.0</b>*G +    <b>0.0</b>*B + <b>1.0</b>*A (always use the same alpha)</pre></div>

    <h3>The Color Matrix</h3>

    <p>Mathematicians like to use short-cuts in writing equations like those above.  Basically if we take all the numbers in the above equations (in bold), they can be grouped into a rectangle of 16 numbers that we call a <dfn>matrix</dfn>:</p>
    
    <div style="margin-left:20px"><pre>| 0.3333 0.3333 0.3333 0.0 |
| 0.3333 0.3333 0.3333 0.0 |
| 0.3333 0.3333 0.3333 0.0 |
| 0.0    0.0    0.0    1.0 |</pre></div>

    <p>SVG provides the <a href="http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement"><code class="elem">feColorMatrix</code></a> filter primitive.  This primitive allows you to specify the exact color matrix that should be applied to the input image.  The filter primitive will output the resultant RGBA pixels after multiplying them by the specified color matrix.</p>
    
    <p>The <code class="elem">feColorMatrix</code> primitive actually adds a column to the color matrix to allow for offsets to be added to the RGBA values, but for our purposes that column can stay all zeros.  Below shows the updated color matrix with the extra column added:</p>
    
    <div style="margin-left:20px"><pre>| 0.3333 0.3333 0.3333 0.0  0.0 |
| 0.3333 0.3333 0.3333 0.0  0.0 |
| 0.3333 0.3333 0.3333 0.0  0.0 |
| 0.0    0.0    0.0    1.0  0.0 |
</pre></div>

    <h3>So Where&#39;s The Code?</h3>

    <p>We&#39;re finally at a point where we can apply all this theory to some SVG and see what&#39;s what.  We&#39;re going to construct a filter consisting of a <code class="elem">feColorMatrix</code> primitive with the above matrix and apply it to an image:</p>
    
    <pre class="clear"><code>
    &lt;svg viewBox=&quot;0 0 512 192&quot;&gt;
      &lt;defs&gt;
       &lt;filter id=&quot;grey-filter&quot; filterUnits=&quot;userSpaceOnUse&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;512&quot; height=&quot;192&quot;&gt;
          &lt;feColorMatrix in=&quot;SourceGraphic&quot; type=&quot;matrix&quot;
              values=&quot;0.3333 0.3333 0.3333 0 0
                      0.3333 0.3333 0.3333 0 0 
                      0.3333 0.3333 0.3333 0 0 
                      0      0      0      1 0&quot;/&gt;
       &lt;/filter&gt;
      &lt;/defs&gt;
      
      &lt;image xlink:href=&quot;calif2.jpg&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;256&quot; height=&quot;192&quot; /&gt;
      &lt;image xlink:href=&quot;calif2.png&quot; x=&quot;256&quot; y=&quot;0&quot; width=&quot;256&quot; height=&quot;192&quot; 
             <b>filter=&quot;url(#grey-filter)&quot;</b> /&gt;
    &lt;/svg&gt;
    </code></pre>

    <p>The result is shown below.  It is clear that our filter does what we wanted - turns any colour image into a greyscale one.  </p>

        <div style="text-align:center">
          <h4>Figure 6 - Demonstrating a Greyscale Filter</h4>
          <a href="grey.svg" title="Click to see the SVG file.  Opera 9 and Firefox 3 only"><img src="http://forum-test.oslo.osa/kirby/content/articles/31-svg-evolution-3-applying-polish/greyscale.png" /></a>
        </div>
    
    <p>So now back to our SVG Image Gallery web application.  First, we&#39;ll put in the &quot;grey-filter&quot; <code class="elem">filter</code> element into our <code class="elem">defs</code> section.  Then, we&#39;ll create a new button in our toolbar (see <a href="http://dev.opera.com/articles/view/svg-evolution-2-our-first-steps-into-sv/">last article</a>).  In this instance, I want the button to indicate &quot;Switch to Greyscale&quot;, and when clicked, it will incidate &quot;Switch to Color&quot;.  We do this by adding two buttons to the toolbar in the same location and making one of these buttons initially not visible:</p>
    
    <pre class="clear"><code>
        &lt;g id=&quot;options_panel&quot; display=&quot;none&quot; transform=&quot;translate(50,5)&quot;&gt;
            ...
            <span class="comment">&lt;!-- Flip Horizontal button --&gt;</span>
            ...
            <span class="comment">&lt;!-- Flip Vertical button --&gt;</span>
            ...
            <span class="m"><span class="comment">&lt;!-- Greyscale button --&gt;</span>
            &lt;g id=&quot;grey_button&quot; transform=&quot;translate(62.5,2.5)&quot; cursor=&quot;pointer&quot; 
                pointer-events=&quot;all&quot;&gt;
                &lt;title&gt;Switch To Greyscale&lt;/title&gt;
                &lt;polyline class=&quot;topleftborder&quot; points=&quot;0,25 0,0 25,0&quot;/&gt;
                &lt;polyline class=&quot;botrightborder&quot; points=&quot;25,0 25,25 0,25&quot;/&gt;
                &lt;rect x=&quot;1&quot; y=&quot;2&quot; width=&quot;4&quot; height=&quot;20&quot; fill=&quot;#222&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;4&quot; y=&quot;2&quot; width=&quot;4&quot; height=&quot;20&quot; fill=&quot;#444&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;7&quot; y=&quot;2&quot; width=&quot;4&quot; height=&quot;20&quot; fill=&quot;#666&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;10&quot; y=&quot;2&quot; width=&quot;4&quot; height=&quot;20&quot; fill=&quot;#888&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;13&quot; y=&quot;2&quot; width=&quot;4&quot; height=&quot;20&quot; fill=&quot;#aaa&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;16&quot; y=&quot;2&quot; width=&quot;4&quot; height=&quot;20&quot; fill=&quot;#ccc&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;19&quot; y=&quot;2&quot; width=&quot;4&quot; height=&quot;20&quot; fill=&quot;#eee&quot; stroke=&quot;none&quot;/&gt;
            &lt;/g&gt;
            <span class="comment">&lt;!-- Color button, initially not displayed --&gt;</span>
            &lt;g id=&quot;color_button&quot; transform=&quot;translate(62.5,2.5)&quot; cursor=&quot;pointer&quot; 
                pointer-events=&quot;all&quot; <b>style=&quot;display:none&quot;</b> &gt;
                &lt;title&gt;Switch To Color&lt;/title&gt;
                &lt;rect x=&quot;1&quot; y=&quot;2&quot; width=&quot;5&quot; height=&quot;20&quot; fill=&quot;red&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;6&quot; y=&quot;2&quot; width=&quot;5&quot; height=&quot;20&quot; fill=&quot;blue&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;11&quot; y=&quot;2&quot; width=&quot;5&quot; height=&quot;20&quot; fill=&quot;yellow&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;16&quot; y=&quot;2&quot; width=&quot;5&quot; height=&quot;20&quot; fill=&quot;purple&quot; stroke=&quot;none&quot;/&gt;
                &lt;rect x=&quot;21&quot; y=&quot;2&quot; width=&quot;5&quot; height=&quot;20&quot; fill=&quot;green&quot; stroke=&quot;none&quot;/&gt;
                &lt;polyline class=&quot;topleftborder&quot; points=&quot;0,25 0,0 25,0&quot;/&gt;
                &lt;polyline class=&quot;botrightborder&quot; points=&quot;25,0 25,25 0,25&quot;/&gt;
            &lt;/g&gt;</span>
    </code></pre>
    
    <p>This gives us a new button on our toolbar: <img style="margin:5px" src="http://forum-test.oslo.osa/kirby/content/articles/31-svg-evolution-3-applying-polish/new-button.png" alt="%5Bbutton%5D" /></p>   

    <p>Now we need to hook up some functionality to it.  We create a global variable, gnGreyMode, that defines our greyscale mode (initially set to 0).  Then we create a simply JavaScript function that will set or unset the filter attribute on the image:</p>

    <pre><code>    
        &lt;script&gt;
            function setGrey() {
                var sGreyButtStyle = (gnGreyMode ? &quot;display:none&quot; : &quot;display:default&quot;);
                var sColorButtStyle = (gnGreyMode ? &quot;display:default&quot; : &quot;display:none&quot;);
                var sImageFilter = (gnGreyMode ? &quot;url(#grey-filter)&quot; : &quot;&quot;);
                document.getElementById(&quot;grey_button&quot;).setAttributeNS(null, &quot;style&quot;, sGreyButtStyle);
                document.getElementById(&quot;color_button&quot;).setAttributeNS(null, &quot;style&quot;, sColorButtStyle);
                document.getElementById(&quot;thePreviewImage&quot;).setAttributeNS(null, &quot;filter&quot;, sImageFilter);
            }
            ...
        &lt;/script&gt;
    </code></pre>
    
    <p>Then, we hook up a mouse-click handler to each of the buttons like so:</p>
    
    <pre><code>
        &lt;g id=&quot;grey_button&quot; <span class="m">onclick=&quot;gnGreyMode=true; setGrey()&quot;</span> ...&lt;/g&gt; 
        &lt;g id=&quot;color_button&quot; <span class="m">onclick=&quot;gnGreyMode=false; setGrey()&quot;</span> ...&lt;/g&gt;
    </code></pre>
 
    <p>And now we&#39;re done &#x2014; <a href="ex9-gallery.xhtml">see the updated SVG Image Gallery application</a> with greyscale capabilities.  
    
    <h3>Side Note: Revisiting the Drop Shadow</h3>

    <p>Now that we&#39;ve learned a bit about color theory, I took the opportunity to add a <code class="elem">feColorMatrix</code> element into our drop shadow <code class="elem">filter</code>.  This primitive simply takes the black shadow and outputs a slightly transparent shadow (not fully black) which is then merged to achieve the final result.  We do this by applying the following color matrix:</p>

    <div style="margin-left:20px"><pre>| 1 0 0 0   0 |
| 0 1 0 0   0 |
| 0 0 1 0   0 |
| 0 0 0 0.8 0 |
</pre></div>
 
    <p>which translates to the following filter equations:</p>

    <div style="margin-left:20px"><pre>R&#39; = 1*R
G&#39; = 1*G
B&#39; = 1*B
A&#39; = 0.8*A</pre></div>
 
    <p>In other words, our drop shadow is no longer completely opaque (few shadows are) but slightly transparent, which provides a more realistic effect.  <a href="drop-shadow-flow.png" title="Diagram of how the Drop Shadow filter primitives are chained together">This picture</a> shows how we have assembled the Drop Shadow filter.</p>
 
    <h3>Conclusion</h3>
 
    <p>Our <a href="ex9-gallery.xhtml" title="SVG Image Gallery app">SVG Image Gallery</a> web application has grown in little jets and spurts as we&#39;ve added various drops of eye candy and functionality to it.  Viewing this application in Opera or other advanced renderers of SVG, the app starts to feel very, um, &quot;Flash&quot;-like, especially when you consider <a href="/articles/view/svg-evolution-not-revolution/ex1-gallery.xhtml" title="Simple HTML Photo Gallery app">where we started</a>.  But the application still has lots of room to grow.  Off the top of my head, some useful features that could still be added:</p>
    
    <ul>
      <li>A Rotate tool</li>
      <li>A Crop tool</li>
      <li>A &quot;brightness&quot; slider that adjusts the lightness/darkness of the whole image</li>
      <li>Red, Green, Blue sliders that affect colour properties of the image</li>
      <li>A &quot;burn&quot; tool (creates small, mostly transparent circles filled with a radial gradient that can darken specific areas of the image)</li>
      <li>Ability to save the modified SVG DOM to client&#39;s disk as an SVG image</li>
      <li>Ability to save the modifications to the server side</li>
    </ul>
 
<h2>Implementation notes</h2>

<p>As of 2010, Opera is still the only browser that supports the greyscale filter and the blur drop shadow effect. This is a shame, as three years have passed since the article was first written. Good news may well be on the horizon though. Firefox 3.7 alpha runs the drop-shadow effect properly and it recognises the greyscale filter, although it doesn&#39;t seem to interpret it properly and you end up with a completely grey image. But at least this is showing some progress. And who knows what IE9 will bring?</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/svg-evolution-2-our-first-steps-into-sv/" rel="prev" title="link to the previous article in the series">Previous article—SVG Evolution 2: Our First Steps Into SVG</a></li>
</ul></p></p>
