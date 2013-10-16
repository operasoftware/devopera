Title: Improving image maps with SVG and XSLT
----
Date: 2009-05-15 14:00:15
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

<h2>Introduction</h2>
   <p>(X)HTML has a feature for adding linked areas to images: <a href="http://www.w3.org/TR/html4/struct/objects.html#h-13.6.1">Image maps</a>. These serve their purpose well, but in some situations a graphically more appealing solution is desirable. In this article, I will take you step by step through an example of how XHTML, SVG and XSLT can be combined to create enhanced image maps.</p>

<p class="note">Note: you can <a href="svg_xslt_imagemap.zip">download the full code</a> for this article and experiment with it yourself.</p>
   
    <h2>Step by step</h2>
    <p>SVG is a very powerful technology, but currently it has one issue with its popularity on the Web—its lack of support by Internet Explorer. You cannot afford to lock out such a large user base from your application, therefore this solution takes a <a href="http://dev.opera.com/articles/view/graceful-degradation-progressive-enhancement/">progressive enhancement approach</a> to ensure maximum compatibility. The basis of the application will be an ordinary image map that every browser can render, and the SVG enhancement will be overlaid on top of it. XSLT will transform the image map into SVG for capable browsers.</p>
    
    <p>The image map code looks like so:</p>
    <pre><code>&lt;img src=&quot;UK.png&quot; width=&quot;271&quot;
  height=&quot;599&quot; alt=&quot;Map of the United Kingdom&quot;
  usemap=&quot;#uk-map&quot; /&gt;

&lt;map name=&quot;uk-map&quot; id=&quot;uk-map&quot;&gt;
  &lt;area shape=&quot;poly&quot; coords=&quot;131,309,166,286,160,277,177,264,152,250,179,189,173,169,124,170,145,140,162,105,187,83,214,6,192,9,161,47,161,79,122,100,123,122,45,131,22,161,11,176,17,202,11,226,38,217,32,241,49,247,45,276,66,293,83,296,80,311,89,327,108,322&quot; href=&quot;http://en.wikipedia.org/wiki/Scotland&quot; title=&quot;Scotland&quot; alt=&quot;Map of Scotland&quot; /&gt;
  &lt;area shape=&quot;poly&quot; coords=&quot;140,383,145,396,138,402,141,442,152,456,136,470,118,463,100,456,87,460,74,443,108,424,108,409,92,407,100,391,92,379,104,369,117,377,131,373&quot; href=&quot;http://en.wikipedia.org/wiki/Wales&quot; title=&quot;Wales&quot; alt=&quot;Map of Wales&quot; /&gt;
  &lt;area shape=&quot;poly&quot; coords=&quot;131,309,166,286,160,277,177,264,196,316,226,345,236,391,270,398,270,430,248,460,263,462,262,479,229,498,208,495,189,503,175,499,155,506,142,498,125,518,103,513,85,529,64,522,93,492,99,478,110,469,136,470,152,456,141,442,138,402,145,396,140,383,131,373,137,364,132,346,121,327&quot; href=&quot;http://en.wikipedia.org/wiki/England&quot; title=&quot;England&quot; alt=&quot;Map of England&quot; /&gt;
  &lt;area shape=&quot;poly&quot; coords=&quot;20,312,23,301,51,287,63,289,84,329,64,353,45,351,38,340,28,350,10,344,1,330,10,314&quot; href=&quot;http://en.wikipedia.org/wiki/Northern_Ireland&quot; title=&quot;Northern Ireland&quot; alt=&quot;Map of Northern Ireland&quot; /&gt;
&lt;/map&gt;</code></pre>

    <p>This is a map of the United Kingdom with the each constituent country linked to its respective Wikipedia article (<a href="map.html">view the example</a>). The only visible feedback indicating that the image is clickable and what the areas represent is the changing mouse cursor and a tooltip. This is not very usable, and we can certainly do better.</p>
    
    <h2>Adding graphics to the map</h2>
    <p>Now we will enhance the image map by adding an SVG layer on top of it. SVG shapes create clickable areas that can carry hyperlinks, just as with ordinary image maps. But SVG allows us to add some useful effects that aren’t possible with those. Here, I’ll use this for two things: Reveal each clickable area when hovered over, and display their names clearly above the map.</p>
    <p>First, we create an <code>svg</code> element right before the <code>img</code> element. By setting <code>position:absolute </code> on it, the SVG is taken out of the normal flow. Thus, it takes up no space, and the image will be displayed underneath the SVG when we specify its appearance and position.</p>
    
    <pre><code>&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; 
  xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; 
  style=&quot;position:absolute;&quot; width=&quot;271&quot; 
  height=&quot;599&quot; pointer-events=&quot;visible&quot;&gt;
  
  &lt;a xlink:href=&quot;http://en.wikipedia.org/wiki/Northern_Ireland&quot; 
  xlink:title=&quot;Northern Ireland&quot;&gt;
    &lt;polygon id=&quot;area_ni&quot; class=&quot;area&quot; points=&quot;20,312,23,301,51,287,63,289,84,329,64,353,45,351,38,340,28,350,10,344,1,330,10,314&quot;&gt;
      &lt;title&gt;Northern Ireland&lt;/title&gt;
      &lt;desc&gt;Map of Northern Ireland&lt;/desc&gt;
    &lt;/polygon&gt;
  &lt;/a&gt;
  &#x2026;
&lt;/svg&gt;</code></pre>

    <p>To simulate the image map behaviour, a style of <code>fill:none </code> is applied to each clickable area. The <code>pointer-events=&quot;visible&quot;</code> property ensures that the areas remain clickable even with no fill.</p>
    
    <p>Now we have full control over the appearance and can choose to make the linked areas visible to the user. But that would mean quite a lot of distraction from the image, even if the areas are a bit translucent. So we will make the areas visible on when hovered over, providing some visual feedback while keeping out of the way when they are not needed.</p>
   
   <p>This can easily be achieved with <a href="http://dev.opera.com/articles/view/animating-your-svg/">declarative animation</a>. We set the polygon’s opacity to 0 and let it fade in on <code>mouseover</code> and fade out on <code>mouseout</code>:</p>
   
    <pre><code>&lt;polygon id=&quot;area_ni&quot; class=&quot;area&quot; 
  points=&quot;20,312,23,301,51,287,63,289,84,329,64,353,45,351,38,340,28,350,10,344,1,330,10,314&quot; opacity=&quot;0&quot;&gt;
  &lt;title&gt;Northern Ireland&lt;/title&gt;
  &lt;desc&gt;Map of Northern Ireland&lt;/desc&gt;
  &lt;animate attributeName=&quot;opacity&quot; from=&quot;0&quot; to=&quot;1&quot; begin=&quot;mouseover&quot; dur=&quot;0.5s&quot; fill=&quot;freeze&quot;/&gt;
  &lt;animate attributeName=&quot;opacity&quot; to=&quot;0&quot; begin=&quot;mouseout&quot; dur=&quot;0.5s&quot; fill=&quot;freeze&quot;/&gt;
&lt;/polygon&gt;</code></pre>
    
    <p>This already gives us quite a nice effect that helps the user understand which regions of the image are linked. But it would be nice to give some more information as to what the countries are called. In classical image maps, this is normally done via the <code>title</code> attribute (which most browsers render as a small tooltip). We do have the <code>xlink:title </code> attribute here which describes the link. However, it might be desirable to have full control about the way text is rendered. Therefore, we explicitly create a <code>text</code> element that shows the title text when the pointer is above the shape:</p>
    
    <pre><code>&lt;g class=&quot;text&quot; opacity=&quot;0&quot; 
  pointer-events=&quot;none&quot; id=&quot;area_ni_text&quot;&gt;
  &lt;rect width=&quot;100%&quot; height=&quot;35&quot;/&gt;
  &lt;text x=&quot;135.5&quot; y=&quot;25&quot; text-anchor=&quot;middle&quot;&gt;Northern Ireland&lt;/text&gt;
  &lt;animate attributeName=&quot;opacity&quot; to=&quot;1&quot; begin=&quot;area_ni.mouseover&quot; dur=&quot;0.5s&quot; fill=&quot;freeze&quot;/&gt;
  &lt;animate attributeName=&quot;opacity&quot; to=&quot;0&quot; begin=&quot;area_ni.mouseout&quot; dur=&quot;0.5s&quot; fill=&quot;freeze&quot;/&gt;
&lt;/g&gt;</code></pre>
   
   <p><code>rect</code> creates a rectangle that is used to give the text a (semi-transparent) background. The actual styling is done by the CSS. The <code>pointer-events=&quot;none&quot;</code> property ensures that the text doesn’t affect the mouseover behaviour, meaning that if the text overlaps an area shape, the text will be ignored when determining if the mouse is above the shape or not.</p>
    <p>Now we’re almost there. We do already have the desired behaviour when using an SVG compliant browser, but declarative animation still isn’t supported by many browsers, eg Firefox. In the case of Firefox the shape and text will simply stay invisible (although the link still works). But we can easily work around this by adding a little bit of scripting. We therefore add the following to the beginning of the <code>svg</code>:</p>
   
   <pre><code>&lt;defs&gt;
  &lt;script type=&quot;text/ecmascript&quot;&gt;
  function set_opacity(evt, value){
    evt.target.setAttributeNS(null, &quot;opacity&quot;, value);
    var id = evt.target.getAttributeNS(null, &quot;id&quot;);
    text_elem = document.getElementById(id+&quot;_text&quot;);
    text_elem.setAttributeNS(null, &quot;opacity&quot;, value);
  }
  &lt;/script&gt;
&lt;/defs&gt;</code></pre>
    <p>Now we add <code>onmouseover</code> and <code>onmouseout</code> attributes to the shapes to set the opacity by script if the user agent doesn’t support SVG animation. This makes the area and title text visible on mouseover, but doesn’t provide the nice fade effect.</p>
    
    <pre><code>&lt;polygon id=&quot;area_ni&quot; class=&quot;area&quot;
  points=&quot;41,290,60,289,84,329,62,358,9,346,1,328,19,299&quot;
  opacity=&quot;0&quot; onmouseover=&quot;set_opacity(evt, 1);&quot;
  onmouseout=&quot;set_opacity(evt, 0);&quot;&gt;
  …
&lt;/polygon&gt;</code></pre>
   
   <h2>Letting others do the work: Using XSLT to create the SVG map</h2>
    <p>While the result is visually appealing, it poses two problems: First, the SVG code is much more verbose that the image map we started with, so it takes longer to write and is more difficult to maintain. Second, the browser has to support XHTML <em>as XML</em>, since we are mixing two XML namespaces in the same document (XHTML and SVG); this isn’t supported by Internet Explorer.</p>
    <p>Fortunately, we can kill these two birds with a single stone: XSLT. We only need an XHTML document with the image map; we can then use a linked XSLT stylesheet to transform this into the corresponding SVG code. Since Microsoft’s browsers support neither SVG nor XHTML served as XML, the stylesheet will return the document unchanged for these. Since they expect XSLT stylesheets to return an HTML representation of the served XML document, the XML mimetype is no issue once we apply an XSLT transformation.</p>
    
    <p>The XSLT can be applied to the XHTML document using a <code>xml-stylesheet</code> processing instruction at the beginning of the file:</p>
    
    <pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
  &lt;?xml-stylesheet href=&quot;addsvg.xsl&quot; type=&quot;text/xsl&quot;?&gt;
  &lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
  …
&lt;/html&gt;</code></pre>
    <h2>Compatibility and Accessibility</h2>
    <p>In an ideal world, all web browsers could cope with the XML techniques used in these examples. But in reality, we have to deal with Internet Explorer’s inability to deal with XHTML as XML. So to ensure this works in IE, please take a note of the following points:</p>
    <ul>
      <li>The mime type has to be <code>application/xml</code>, as IE doesn’t accept <code>application/xhtml+xml</code>. It’s probably a good idea to use an <code>.xml</code> file extension, since <code>.xhtml</code> is normally associated with <code>application/xhtml+xml</code>.</li>
      <li>One must not give a doctype declaration. IE is <a href="http://www.w3.org/blog/systeam/2008/02/08/w3c_s_excessive_dtd_traffic">locked out</a> from accessing the XHTML DTD, since it unnecessarily tries to download it every time it reads an XHTML document. But the XHTML namespace provides enough information for browsers to render it properly, so the page works well without a doctype declaration.</li>
    </ul>
    <p>On the other hand, using an XML mime type might result in accessibility issues, since not all client programs can handle XML or support XSLT. Especially text browsers like w3m refuse to display XML (and thus XHTML with an <code>application/xml</code> mime type). The original XHTML file ensures accessibility using <code>title</code> and <code>alt</code> attributes on the areas. The resulting SVG file retains accessibility using the <code>xlink:title </code> attribute and <code>title</code> and <code>desc</code> elements. Losing these features just because of the mime type is a bit of a miserable situation.</p>
    
    <p>If the server supports it, choosing the mime type by client abilities might be the best solution. For example, using Apache’s mod_rewrite you can serve an <code>.html</code> file as <code>text/html</code> or <code>application/xhtml+xml</code> depending on what the client accepts. Just put the following into your <code>.htaccess</code> file:</p>
    
    <pre><code>RewriteEngine On
RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml
RewriteCond %{HTTP_ACCEPT} !application/xhtml\+xml\s*;\s*q=0
RewriteCond %{REQUEST_URI} \.html$
RewriteCond %{THE_REQUEST} HTTP/1\.1
RewriteRule .* - &quot;[T=application/xhtml+xml]&quot;</code></pre>
    
    <h2>Summary</h2>
    <p>We now have a cross-browser solution providing progressive enhancement depending on the capabilities of the browser. Non-SVG-capable browsers (eg, IE) will show the plain image map, while others (eg Opera, Firefox, Safari*) will use SVG to display the areas and title text. If declarative animation is supported (eg Opera, Safari 4*), a nice fade effect is provided too.</p>
    
    <p class="note">*Note: Safari on Windows has some serious display issues with the SVG overlay.</p>
    
    <p>You can now <a href="map.xml">check out the full example</a> and <a href="addsvg.xsl">download the XSLT stylesheet</a>.</p>
