Title: SVG: Evolution, Not Revolution
----
Date: 2006-10-16 15:55:24
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

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/svg-evolution-2-our-first-steps-into-sv/" rel="next" title="link to the next article in the series">Next article—SVG Evolution 2: Our First Steps Into SVG</a></li>
</ul>

<h2>Introducing The New Web</h2>

<p>This series of articles explores how to integrate SVG into your web applications.  While building entire web applications in SVG+JavaScript is possible, most developers have spent a great deal of time and effort in HTML, JavaScript, <a href="http://www.w3.org/TR/CSS21/"><abbr title="Cascading Style Sheet">CSS</abbr></a>, and the DOM.  Exploring some of the ways in which SVG can be used to integrate with and enhance HTML applications provides us an opportunity to apply what we&#39;ve learned in SVG without having to start &quot;from scratch&quot; in developing web applications.</p>
    
<p>SVG, like <a href="http://www.w3.org/TR/xhtml11/">XHTML</a>, is a declarative XML grammar.  XHTML is a format for text documents; SVG is a format for scalable web graphics.  Also like XHTML, SVG comes with the ability to be scripted and provides its own Document Object Model (DOM).</p>

<a href="ex1-gallery.xhtml"><img class="left" src="http://forum-test.oslo.osa/kirby/content/articles/2-svg-evolution-not-revolution/gallery-thumb.png" alt="A Simple DHTML Image Gallery" height="197" width="174" /></a>

<h2>Our Sample HTML Application</h2>
<p>Let&#39;s start with a simple web application:  <a href="ex1-gallery.xhtml"><b>A photo gallery</b></a>.  This application is bare bones, but for roughly 40 lines of code it&#39;s not bad:  We&#39;ve provided <a href="ex1-gallery.css">some minimal styling</a> with <abbr title="Cascading Style Sheets">CSS</abbr> and 12 lines of JavaScript to handle switching images.</p>

<pre class="clear"><code>    function showPreview(img) {
        var div = document.getElementById(&quot;preview&quot;);
        if(div) {
            var preview_img = document.createElement(&quot;img&quot;);
            preview_img.className = &quot;the_preview&quot;; 
            preview_img.src = img.id + &quot;.jpg&quot;;

            while(div.hasChildNodes()) { div.removeChild(div.firstChild); }
            div.appendChild(preview_img);
        }
    }</code></pre>

<p>An equivalent web application could be built without any JavaScript by moving the business logic of the application to the server and employing a language such as PHP.  For the sake of simplicity, the examples included in these articles will focus only on client-side interaction and use JavaScript.</p>
    
<p>Our first step will be to build the same functional application using SVG for the graphical elements.  In other words our HTML document will host SVG thumbnails and an SVG preview image.  In the process we will learn a little about the capabilities of SVG, how to integrate SVG with HTML, and how to script across the HTML-SVG document boundary.</p>

&lt;page&gt;

<h2>A Quick Introduction To SVG</h2>
    
<p>The SVG language supports three types of graphical objects:</p>  <ol><li>Vector shapes (circles, rectangles, paths)</li><li> text, and</li><li>raster graphics</li></ol><p>These types of objects can be styled, transformed, decorated, animated and made interactive in various ways.  <a href="shapes.svg">Here</a> is a simple SVG document that displays a circle and a rectangle:</p>
    
<div><pre>
&lt;svg version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
  &lt;circle cx=&quot;100&quot; cy=&quot;100&quot; r=&quot;30&quot; fill=&quot;blue&quot; stroke=&quot;red&quot;/&gt;
  &lt;rect x=&quot;10&quot; y=&quot;10&quot; width=&quot;80&quot; height=&quot;40&quot; fill=&quot;yellow&quot;
        stroke=&quot;black&quot;/&gt;
&lt;/svg&gt;</pre></div>
    
<p>SVG provides many different general-purpose shapes:  <a href="http://www.w3.org/TR/SVG11/shapes.html#CircleElement" class="mtag">circle</a>, <a href="http://www.w3.org/TR/SVG11/shapes.html#EllipseElement" class="mtag">ellipse</a>, <a href="http://www.w3.org/TR/SVG11/shapes.html#RectElement" class="mtag">rectangle</a>, <a href="http://www.w3.org/TR/SVG11/shapes.html#LineElement" class="mtag">line</a>, <a href="http://www.w3.org/TR/SVG11/shapes.html#PolylineElement" class="mtag">polyline</a>, <a href="http://www.w3.org/TR/SVG11/shapes.html#PolygonElement" class="mtag">polygon</a>, and <a href="http://www.w3.org/TR/SVG11/paths.html#PathElement" class="mtag">path</a> elements.</p>
    
<p><a href="raster.svg">Here is a simple SVG document</a> that displays a raster graphic with the circle and rectangle drawn overtop:</p>
    
<div><pre>&lt;svg version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; 
     xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;&gt;
  &lt;image xlink:href=&quot;calif3-thumb.jpg&quot; x=&quot;20&quot; y=&quot;20&quot; width=&quot;100&quot; height=&quot;75&quot; /&gt;
  &lt;circle cx=&quot;100&quot; cy=&quot;100&quot; r=&quot;30&quot; fill=&quot;blue&quot; stroke=&quot;red&quot;/&gt;
  &lt;rect x=&quot;10&quot; y=&quot;10&quot; width=&quot;80&quot; height=&quot;40&quot; fill=&quot;yellow&quot; stroke=&quot;black&quot;/&gt;
&lt;/svg&gt;</pre></div>
    
<p>The <a href="http://www.w3.org/TR/SVG11/struct.html#ImageElement">SVG <code class="mtag">image</code> element</a> is the equivalent of the <a href="http://www.w3.org/TR/REC-html40/struct/objects.html#h-13.2">HTML <code class="mtag">img</code> element</a> and simply displays a raster graphic in a viewport.</p>
    
<p>For those new to SVG documents in general, here are a couple important points to keep in mind:</p>

<ul>
<li>It is important to include proper XML namespace declarations in the root <code class="mtag">svg</code> element as we&#39;ve done above, since SVG uses attributes from different namespaces</li>
<li><a href="http://www.w3.org/TR/SVG11/styling.html#StylingWithCSS">SVG elements can be styled using CSS</a> just like HTML.  You can either specify &quot;style&quot; attributes on elements, include <code class="mtag">style</code> elements that describe the CSS rules, or reference external stylesheets using a mechanism similar to the <a href="http://www.w3.org/TR/REC-html40/struct/links.html#edef-LINK">HTML <code class="mtag">link</code> element</a>.</li>
<li>SVG documents have a Document Object Model (DOM).  This means that, like HTML, each SVG tag corresponds to a DOM node that implements one or more interfaces.  For example, the SVG <code class="mtag">image</code> element results in a DOM node that implements the <a href="http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGImageElement">SVGImageElement</a> interface.</li>
<li>SVG documents can be scripted.  Just like HTML, the <a href="http://www.w3.org/TR/SVG11/script.html#ScriptElement">SVG <code class="mtag">script</code> element</a> allows you to define script processing instructions in JavaScript that operate on the DOM nodes in the document.</li></ul>
    
<h2>Integrating SVG with HTML</h2>
    
<p>With this knowledge of SVG under our belts, how do we integrate such documents into the HTML &quot;host&quot; document?  There are numerous ways of doing this:  You can use HTML <code class="mtag">iframe</code>, you can include SVG code inline with XHTML (properly namespaced of course), but currently the most broadly supported and useful technique is to include the SVG document in an <a href="http://www.w3.org/TR/REC-html40/struct/objects.html#h-13.3">HTML <code class="mtag">object</code> element</a>.  The reason HTML <code class="mtag">object</code> is so useful is because it allows the author to specify fall-back HTML content that will be rendered in browsers that do not support SVG content.  <a href="sample-embed.html">Here</a> is a simple example:</p>
    
<div class="code" id="Example2"><pre>&lt;html&gt;
&lt;body&gt;
   &lt;object type=&quot;image/svg+xml&quot; data=&quot;foo.svg&quot;&gt;
   &lt;!-- fall-back HTML content goes here --&gt;
      &lt;p&gt;Sorry! Your browser does not support SVG!  
       Please use a modern browser.&lt;/p&gt;
   &lt;/object&gt;
&lt;/body&gt;
&lt;/html&gt;</pre></div>
    
<p>If you are able, turn your browser&#39;s SVG-rendering capabilities off (in Firefox, go to about:config and double-click svg.enabled) and then refresh the above example to see the behavior.</p>
    
<p>You can put any HTML content inside the <code class="mtag">object</code> as your fallback content.  For example, a link to download a SVG plugin or install a SVG-enabled browser.  For our SVG Photo Gallery, we will tell the browser to &quot;fall back&quot; to render the Example 1 HTML-only code.  In other words, our fall-back content will be an HTML <code class="mtag">img</code> element.</p>


<h2>Break On Through To The Other Side</h2>
    
<p>Embedding SVG documents in HTML documents is useful, but where things become really interesting is being able to script between the documents.  Remember, SVG documents are scriptable and have their own DOM.  This means it is possible to affect the SVG documents from the HTML document and vice versa:</p>
    
    <ul>
    <li>Scripting from HTML to SVG: The <i>contentDocument</i> property of the <a href="http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html#ID-26809268">HTMLObjectElement interface</a> is the SVG document (i.e. the <a href="http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGDocument">SVGDocument</a> interface).</li>
    <li>Scripting from SVG to HTML: The <i>frameElement</i> property of the <a href="http://www.w3.org/TR/Window/#window-embedding">Window</a> interface within the SVG DOM is the HTML <code class="mtag">object</code> element.  Note that this property only has a value if the SVG is embedded. If the SVG document is being viewed alone (non-embedded), the <i>frameElement</i> property is null.</li>
    </ul>
    
<div>
  <h4>Figure 1 - HTML-to-SVG Interface</h4>
  <object type="image/svg+xml" data="" width="640" height="480">
    <img src="http://forum-test.oslo.osa/kirby/content/articles/2-svg-evolution-not-revolution/html2svg.png" alt="Figure 1" />
  </object>
</div>
    
<p>Figure 1 shows how navigation between all elements (window, documents, objects, etc) is achieved in the DOM.  The HTML document (the top-left block) has embedded an SVG document (represented by the bottom-right block) by using the HTML <code class="mtag">object</code> element.  The HTML object&#39;s <i>contentDocument</i> property points to the <i>document</i> in the SVG DOM.  Similarly, you can follow how other attributes and objects give the author links to other pieces within the DOM.</p>

&lt;page&gt;

<h2>Photo Gallery in SVG</h2>
    
    <p>So here is the <a href="ex2-gallery.xhtml"><b>photo gallery application</b></a> with all images replaced by SVG documents embedded via <code class="mtag">object</code> elements.  Clicking a thumbnail image invokes a function on the host document which, in turn, calls a function on the preview image.  The HTML document is serving as a &quot;mediator&quot; between the SVG thumbnail and the SVG preview document, routing script function calls appropriately. See Figure 2.</p>

    <div>
<object width="640" type="image/svg+xml" data=""><img alt="Figure 2" src="http://forum-test.oslo.osa/kirby/content/articles/2-svg-evolution-not-revolution/gallery-scripting.png" /></object>
    </div>
    
    <h2>Some More SVG Details</h2>
    
    <p>Looking at the SVG thumbnail code:</p>

<div><pre>&lt;svg version=&quot;1.1&quot; ...&gt;
  &lt;g id=&quot;thumbnail&quot; cursor=&quot;pointer&quot;  
        onclick=&quot;if(gHtmlWin) {gHtmlWin.thumbnailClicked(gImgFilename); 
                 return false;}&quot; &gt;
    &lt;rect id=&quot;blueborder&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;104&quot; height=&quot;79&quot; fill=&quot;blue&quot;/&gt;
    &lt;image id=&quot;theThumbImage&quot; class=&quot;thumb&quot; x=&quot;2&quot; y=&quot;2&quot; width=&quot;100&quot; 
              height=&quot;75&quot;/&gt;
   &lt;/g&gt;
        &lt;/svg&gt;</pre></div>
    
<p>SVG uses the <a href="http://www.w3.org/TR/SVG11/struct.html#Groups">SVG <code class="mtag">g</code> element</a> to group logically related graphical elements.  This is similar in concept to the <a href="http://www.w3.org/TR/REC-html40/struct/global.html#h-7.5.4">HTML <code class="mtag">div</code> element</a>, allowing you to treat the group of elements as one in terms of styling, behavior, transformation, etc.  Thus, the graphical elements <code class="mtag">rect</code> and <code class="mtag">image</code> are placed into a graphical group identified as &quot;thumbnail&quot;.</p>
    
<p>Also notice that in order to achieve the blue border from the HTML application, we place a <a href="http://www.w3.org/TR/SVG11/shapes.html#RectElement">SVG <code class="mtag">rect</code> element</a> filled with blue underneath the raster graphic.  SVG follows a &quot;painter&#39;s model&quot; in which elements are conceptually rendered in the order in which they are placed in the document.  Since the blue rectangle exists earlier in the document and is slightly larger than the raster graphic, we see a thin border around the raster.</p>
    
<p>Notice that the graphical group that represents the thumbnail image has a <a href="http://www.w3.org/TR/SVG11/interact.html#CursorProperty">cursor attribute</a> which allows you to control what mouse cursor should be displayed when the pointer is over the element.  The thumbnail also has an onclick handler which invokes the <code class="sfunc">thumbnailClicked()</code> function in the XHTML document.</p>

<h2>Conclusion, first part</h2>

<p>We&#39;ve given a brief introduction to SVG, how to integrate SVG into existing HTML applications and how to script between the documents.  We used SVG to achieve parity with our HTML application and set the stage for future exploration.  <a href="http://dev.opera.com/articles/view/svg-evolution-2-our-first-steps-into-sv/">In the next article</a> we will be exploring ways that SVG can actually enhance applications by providing useful client-side functionality.  This will start to answer the question of <i>why</i> we have bothered to integrate SVG in the first place.</p>

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/svg-evolution-2-our-first-steps-into-sv/" rel="next" title="link to the next article in the series">Next article—SVG Evolution 2: Our First Steps Into SVG</a></li>
</ul>
  
