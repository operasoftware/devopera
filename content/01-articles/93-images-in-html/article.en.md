Title: Images in HTML
----
Date: 2008-07-08 07:15:13
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/16-html-lists/" rel="prev" alt="link to the previous article in the series">Previous article—HTML lists</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/18-html-links-let-s-build-a-web/" rel="next" alt="link to the next article in the series">Next article—HTML links—let’s build a web!</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>In this tutorial I’ll talk about one of the things that makes web design pretty—images. At the end of this tutorial you’ll know how to add imagery to web documents in an accessible way (so that people with visual impairments can still use the information on your site) and how and when to use inline images for delivering information or background images for page layout. You can <a href="code.zip" title="code download for the article">download the example files used in this article here</a>—I’ll refer to these files during the course of the tutorial. The contents are as follows:</p>

<ul>

<li><a href="#picture1000words">A picture says more than a thousand words—or does it?</a></li>
<li><a href="#imagetypes">Different types of images on the web—content and background images</a></li>

<li><a href="#imgelement">The <code>img</code> element and its attributes</a>
<ul>
<li><a href="#alt">Providing a text alternative with the <code>alt</code> attribute</a></li>
<li><a href="#title">Adding nice-to-have information using the <code>title</code> attribute</a></li>
<li><a href="#longdesc">Using <code>longdesc</code> to provide an alternative for complex images</a></li>
<li><a href="#widthheight">Faster image display by defining the dimensions using <code>width</code> and <code>height</code></a></li>
</ul></li>

<li><a href="#somuchforinline">So much for inline images</a></li>
<li><a href="#cssimages">Background images with CSS</a>
<ul>
<li><a href="#cssimageshowto">How to apply backgrounds with CSS</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>
</ul>
<h2 id="picture1000words">A picture says more than a thousand words—or does it? </h2>
<p>It is very tempting to use a lot of imagery on your web sites. Images are a great way to set the mood for the visitor and illustrations are a nice way to make complex information easier to take in for visual learners. </p>

<p>The drawback of images on the web is that not everybody who surfs the web can see them. Back in the days when images were first supported by browsers, many site visitors had images turned off, to save on traffic and get a faster surfing experience—web connections used to be very slow, and you’d pay a lot of money for each minute you were online. While this is not very common these days, we’re still not out of the woods—by a long shot: </p>

<ul>
<li>People surfing on mobile devices might still have images turned off because of small screens and the cost of downloading data.</li>
<li>Visitors of your site might be blind or visually impaired to such a degree that they cannot see your images properly.</li>
<li>Other visitors might be from a different culture and not understand the icons you use.</li>
<li>Search engines only index text—they don’t analyze images (yet), which means that information stored in images cannot be found and indexed.</li>
</ul>

<p>It is therefore very important to choose images wisely and only use them when appropriate. It is even more important to make sure you always offer a fallback for those who cannot see your images. There is more on the problems of wrongly used icons and images in the “Web navigation and menus” tutorial later on in the series (to be published soon). For now, let’s see what technologies are available to add images to an HTML document. </p>
<h2 id="imagetypes">Different types of images on the web—content and background images</h2>
<p>There are two main ways to add images to a document: content images using the <code>img</code> element and background images applied to elements using CSS. When to use what is dependent on what you want to do:</p>

<ol>
<li>If the image is crucial to the content of the document, for example a photo of the author or a graph showing some data, it should be added as an <code>img</code> element with proper alternative text.</li>
<li>If the image is there as “eye candy” you should use CSS background images. The reason is that these images should not have any alternative text (what use is “round green corner with a twinkle” to a blind person?) and you have a lot more options to deal with image styling in CSS than in HTML.</li>
</ol>

<h2 id="imgelement">The <code>img</code> element and its attributes</h2> 
<p>Adding an image to an HTML document is very easy using the <code>img</code> element. The following HTML document (<a href="inlineimageexample.html" title="HTML image example">inlineimageexample.html</a> in the zip file) displays the photo balconyview.jpg in a browser (provided that you have the image in the same folder as the HTML file.) </p> 

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Example of an inline image&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/balconyview.jpg&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>If you run this code in a browser, you’ll get an output as shown in Figure 1. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/images-figure1.jpg" alt="the image displayed in a browser" />
<p class="comment">Figure 1: The image as it is shown in a browser.</p>

<h3 id="alt">Providing a text alternative with the <code>alt</code> attribute</h3>
<p>This displays the image fine, however, it is invalid HTML because the <code>img</code> element needs an <code>alt</code> attribute. This attribute contains text that is displayed if the image is not available for some reason. The image may not be available because it could not be found, loaded or because the user agent (normally a browser) does not support images. In addition, people with visual disabilities use assistive technologies to read web pages to them. These technologies will read the contents of the <code>alt</code> attribute of <code>img</code> elements out to their users. It is therefore important to write good alternative text to describe the contents of the image and put it in the <code>alt</code> attribute. </p>

<p>You’ll find a lot of texts on the web talking about “alt tags”. This is factually wrong as there is no tag (or element) with that name. It is an attribute of the <code>img</code> element and amazingly important both for accessibility and search engine optimization. </p>

<p>In order to make the image understandable for everybody you need to add a proper alternative text, for example in this case “View from my balcony, showing a row of houses, trees and a castle” (<a href="inlineimageexamplealt.html" title="image alt attribute example">inlineimageexamplealt.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Example of an inline image&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/balconyview.jpg&quot; alt=&quot;View from my balcony, showing a row of houses, trees and a castle&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>The <code>alt</code> attribute contains the text that should be displayed when the image is not available. The information in the <code>alt</code> attribute should not be displayed when the image was successfully loaded and shown; Internet Explorer gets this wrong, and shows it as a tooltip when you hover your mouse pointer over the image for a while. This is a mistake, as it leads a lot of people to add additional information about the image into the <code>alt</code> attribute. If you wanted to add additional information, you should use the <code>title</code> attribute instead, which I’ll get on to in the next section. </p>

<h3 id="title">Adding nice-to-have information using the title attribute</h3>
<p>Most browsers will display the value of an <code>img</code> element’s <code>title</code> attribute as a tool-tip when you hover your mouse cursor over it (see Figure 2.) This can help a visitor learn more about the image, but you cannot rely on each visitor to have a mouse. The <code>title</code> attribute can be very useful, but it is not a safe way of providing crucial information. Instead it offers a good way to, for example, write about the mood of the image, or what it means in context (<a href=" inlineimagewithtitle.html" title="image title attribute example">inlineimagewithtitle.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Example of an inline image with alternative text and title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/balconyview.jpg&quot; alt=&quot;View from my balcony, showing a row of houses, trees and a castle&quot; title=&quot;What I see when I look out of my window; the castle was one reason to move there.&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>If you load this code in your browser, you will see the display shown in Figure 2. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/images-figure2.jpg" alt="title attribute contents shown as a tool tip" /> 
<p>Figure 2: <code>title</code> attributes are shown as tool tips in a lot of browsers.</p>
<h3 id="longdesc">Using longdesc to provide an alternative for complex images</h3>
<p>If the image is a very complex image, like for example a chart, you can offer a more lengthy description of it using the <code>longdesc</code> attribute, so that people using screenreaders or browsing with images turned off can still access the information conveyed by the image.</p>

<p>This attribute contains a URL that points to a document containing the same information. For example, if you have a chart showing a set of data, you can link it to a data table with the same information using <code>longdesc</code> (<a href="inlineimagelongdesc.html" title="longdesc example">inlineimagelongdesc.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Example of an inline image with longdesc&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/chart.png&quot; width=&quot;450&quot; height=&quot;150&quot; alt=&quot;Chart showing the fruit consumption amongst under 15 year olds. Most children ate Pineapples, followed by Pears&quot; longdesc=&quot;fruitconsumption.html&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>The data file <a href="fruitconsumption.html" title="longdesc target file">fruitconsumption.html</a> contains a very simple data table that represents the same data: </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Fruit consumption&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;table summary=&quot;Fruit Consumption of under 15 year olds, March 2007&quot;&gt;
  &lt;caption&gt;Fruit Consumption&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th scope=&quot;col&quot;&gt;Fruit&lt;/th&gt;&lt;th scope=&quot;col&quot;&gt;Amount&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Apples&lt;/td&gt;&lt;td&gt;10&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Oranges&lt;/td&gt;&lt;td&gt;58&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Pineapples&lt;/td&gt;&lt;td&gt;95&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Bananas&lt;/td&gt;&lt;td&gt;30&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Raisins&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Pears&lt;/td&gt;&lt;td&gt;63&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
&lt;p&gt;&lt;a href=&quot;inlineimagelongdesc.html&quot;&gt;Back to article&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>The two different data representations side by side look like that seen in Figure 3. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/images-figure3.jpg" alt="A document next to its longdesc output" />
<p class="comment">Figure 3: You can link a document with complex data to an image by using the <code>longdesc</code> attribute. </p>

<p>Note that there is no visual clue that there is a long description file connected with this image. Assistive technologies however will let their users know there is an alternative available. </p>
<h3 id="widthheight">Faster image display by defining the dimensions using width and height</h3>
<p>When the user agent finds an <code>img</code> element in the HTML, it starts loading the image the <code>src</code> attribute points to. By default, it doesn’t know the image’s dimensions, so it’ll just display all the text lumped together, then shift the rest of the document around when the images finally load and appear. This can slow down page loading and looks a bit confusing to the page visitors. To stop this happening you can tell the user agent to allocate the right amount of space for the images before they load by giving it the image’s dimensions using the <code>width</code> and <code>height</code> attributes (<a href="inlineimagewithdimensions.html" title="height and width attribute example">inlineimagewithdimensions.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Example of an inline image with dimensions&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src=&quot;http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/balconyview.jpg&quot; alt=&quot;View from my balcony, showing a row of houses, trees and a castle&quot; width=&quot;400&quot; height=&quot;186&quot;&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>This will display a place holder the size of the image until the image loads and takes up its place, therefore avoiding the unsightly page shift. You can also resize images using these attributes (try halving the attribute values in the above example, saving it, and then reloading the page), but this is not a good idea as the quality of resizing is not smooth in all browsers. It is especially bad to resize images to become thumbnails, as the idea of thumbnails is that you not only have a smaller image in physical size, but also in file size. Nobody wants to load a 300KB photo just to see a small image that could be 5KB. </p>

<h2 id="somuchforinline">So much for inline images</h2>
<p>There are a lot more attributes you can use in images but most are deprecated as they define the layout and alignment of the image. This is not the job of HTML—it is what CSS was invented for. Suffice to say it is important to remember that images are—by default—inline elements. This means they can appear in between words in text without forcing new lines. This is great if you want to add small icons within copy, but it can be annoying when you are trying to create layouts using images and text. Using CSS you can override the inline default and make images appear like block level elements (elements that appear on a new line when you add them to a document). </p>
<h2 id="cssimages">Background images with CSS</h2>
<p>It is pretty safe to say that web design became a lot more fun when browsers started supporting CSS. Instead of hacking around in the HTML using table cells for positioning items on the page, non-breaking-spaces (&amp;nbsp;) to preserve spacing, and spacer GIFs (transparent 1x1 pixel GIF images that were resized to create margins) we can now use padding, margin, dimensions and positioning in CSS and leave the HTML free to just worry about the content structure. </p>

<p>CSS also means you can use background images in a very versatile way—you can position them behind and around your text any way you want, and also repeat images in regular patterns to create backgrounds. I’ll only cover CSS images briefly here, as a later article will cover CSS background images in much more detail. </p>
<h3 id="cssimageshowto">How to apply backgrounds with CSS</h3>
<p>The CSS to apply images as backgrounds is pretty easy. Before you look at the CSS code below, load the <a href="imagesandcss.html" title="CSS background images example">imagesandcss.html</a> example file in your browser, or look at Figure 4, to get an idea of all the different things that are possible with background images in CSS. </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/images-figure4.gif" alt="CSS background examples" />
<p class="comment">Figure 4: Backgrounds with CSS. </p>

<p>The different boxes are actually styled <code>h2</code> heading elements with some padding and borders applied through CSS to give us enough space to show the background image. If you check out the HTML file, you’ll see that each <code>h2</code> element has a unique <code>id</code> so each one can have a different CSS rule applied to it. The CSS for the first example is the following: </p>

<pre>background-image:url (ball.gif);
background-color:#eee;</pre>

<p>You add the image with the <code>background-image</code> selector and give it a URL in parenthesis to specify the image to be included. As a fallback in case the image is not available, you should also provide a background colour with the <code>background-color</code> selector and a (hexadecimal, named or RGB) colour value (in this case I chose a light grey).</p>

<p>By default, background images will be repeated both horizontally and vertically to fill up the whole element space. You can however define a different repetition with the <code>background-repeat</code> selector:</p>

<ul>
<li>Don’t repeat the image at all: <code>background-repeat:no-repeat;</code></li>
<li>Just repeat the image horizontally: <code>background-repeat:repeat-x; </code></li>
<li>Just repeat the image vertically: <code>background-repeat:repeat-y; </code></li>
</ul>

<p>By default the background image (if not repeated) will be positioned at the top and left corner of the element. You can however use <code>background-position</code> to move the background image around. The easiest values to choose are <code>top</code>, <code>center</code>, and <code>bottom</code> for the vertical alignment and <code>left</code>, <code>center</code>, and <code>right</code> for the horizontal alignment. For example, to position the image on the bottom right you need to use 
<code>background-position:bottom-right; </code>, while to centre the image vertically and apply it to the right you would use
<code>background-position:center-right;</code>. </p>

<p>By controlling the repetition and the position of background images and using clever images you can create a lot of stunning effects that were not possible before CSS, and by keeping the background definitions in a separate CSS file you make it very easy to change the look and feel of a whole site by changing some lines of code. This will all be covered later in Article 30. </p>

<h2 id="summary">Summary</h2>
<p>That’s all you need to know to get you going when it comes to adding images to HTML. There are a lot more tricks available using images and CSS, but for now have a go with what you learnt here and concentrate on best-practice application of images. We talked about:</p>
<ul>
<li>The <code>img</code> element and its basic attributes:
<ul>
<li><code>src</code> for the file location of the image</li>
<li><code>alt</code> for text that should be available when the image is not loaded or cannot be seen</li>
<li><code>title</code> for interesting (but not essential) additional information</li>
<li><code>longdesc</code> to point to an external data file containing an alternative textual representation of the data illustrated in the image when the image is for example a complex chart</li>
<li><code>width</code> and <code>height</code> to tell the browser how large the image is and therefore how much space to allocate for it</li>
</ul>
</li>
<li>
The basics of CSS background images
<ul>
<li>When to use backgrounds (basically when the image does not need a text alternative but is only “eye candy” or “screen furniture”, for layout.)</li>
<li>How to position and repeat background images in CSS</li>
</ul>
</li>
</ul>

<h2 id="exercises">Exercise Questions</h2>
<ul>
<li>Why is it important to add good text to an image in an <code>alt</code> attribute and do you really need one? </li>
<li>If you have an image that is 1280x786 pixels large and you want to show a 40x30 pixel thumbnail, can you do that in HTML and is it wise to do so? </li>
<li>What does the <code>longdesc</code> attribute do, and how do browsers show it?  </li>
<li>What do the <code>valign</code> and the <code>align</code> attributes do and why weren’t they covered here?</li>
<li>Where are CSS background images positioned inside an element by default, and how do they get repeated by default? </li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/16-html-lists/" rel="prev" alt="link to the previous article in the series">Previous article—HTML lists</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/18-html-links-let-s-build-a-web/" rel="next" alt="link to the next article in the series">Next article—HTML links—let’s build a web!</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>





<div class="right">
<img src="http://forum-test.oslo.osa/kirby/content/articles/93-17-images-in-html/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />
<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>
</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>
      
