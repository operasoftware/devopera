Title: Opera 9.5 - the next generation of web standards
----
Date: 2008-06-12 07:14:23
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
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">This article is obsolete</h2>
<p>It&#39;s retained for historical purposes only. Download the <a href="http://www.opera.com/browser/">latest version of Opera</a> or see what&#39;s coming soon in <a href="http://www.opera.com/browser/next/">Opera.Next</a>. See <a href="http://www.opera.com/docs/specs/">Web specifications support in Opera</a>.</p> 
</div>
<h2>Introduction</h2>

<p>Another exciting time dawns upon us for the advancement of web standards, with the release of the final version of Opera 9.5&#8212;<a href="http://www.opera.com/products/desktop/">download Opera 9.5 here</a>. If you&#8217;ve been checking out the beta releases, you&#8217;ll already have a taste of some of the great new features our new browser brings to the table, such as Opera Quick Find and Opera Link integration, and the final release builds on this. Sure, it&#8217;s a great user experience, but what does Opera 9.5 mean for developers? The answer is that Opera is rallying around the web standards flag more than ever before:</p>

<ul>
<li>The browser features better standards support than Opera has ever shipped in previous releases&#8212;not only does it have very thorough support for current standards like (X)HTML, XML, XSLT, CSS 2.1, SVG 1.1 and JavaScript, but it also includes support for many aspects of nascent standards such as HTML 5 and CSS 3. Testament to this is Opera passing the Acid 1 and 2 tests, and scoring 83% on the Acid 3 test&#8212;<a href="http://www.acidtests.org/">check the Acid tests out for yourself here</a>.</li>
<li>As well as providing you with killer standards support, Opera has also created a great new set of developer tools to help you debug your HTML, CSS, and JavaScript&#8212;the debugging application is called Opera Dragonfly, and there is also a brand new developer menu available. <a href="http://dragonfly.opera.com">Check out our Opera Dragonfly page</a> for more information on these.</li>
<li>Last but not least, Opera will soon be releasing the first part of an education program to help propagate best practices and increase web standards usage on the web. The Opera Web Standards Curriculum will provide a thorough grounding in all the skills you need to be a proficient front end developer, including web background theory, in-depth HTML and CSS, design principles and introductory DOM/JavaScript. Watch this space!</li>
</ul>

<p>In this article I will look at all of these in more detail, but with a bias towards the standards support in Opera 9.5&#8212;for much more on the Opera developer tools and the Opera Web Standards Curriculum, follow the links above. The structure of the article is as follows:</p>

<ul>
<li><a href="#standardssupport">Opera 9.5 web standards support</a>
<ul>
<li><a href="#commonstandards">(X)HTML, CSS 2.1 and JavaScript</a></li>
<li><a href="#css3">CSS 3</a></li>
<li><a href="#xml">XML and XSLT</a></li>
<li><a href="#html5">HTML 5</a></li>
<li><a href="#svg">SVG</a></li>
<li><a href="#aria">WAI-ARIA</a></li>
<li><a href="#operawidgets">Opera Widgets</a></li>
</ul>
</li>

<li><a href="#developertools">Opera&#8217;s developer tools</a>
<ul>
<li><a href="#dragonfly">Opera Dragonfly</a></li>
<li><a href="#developermenu">The Opera Developer Menu</a></li>
<li><a href="#widgetemulator">The Opera Wiget Emulator</a></li>
<li><a href="#miniemulator">The Opera Mini Emulator</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>
</ul>

<p class="comment">Thanks a lot to everyone who wrote the examples featured below.</p>

<h2 id="standardssupport">Opera 9.5 web standards support</h2>

<p>In this section, I will review Opera 9.5&#8217;s standards support, going through some of the highlights, and taking you through some examples to show you how the Web of tomorrow is shaping up! It&#8217;s going to be a brighter day when tomorrow eventually comes.</p>

<p>For a reference list of the web standards support in Opera 9.5, <a href="http://www.opera.com/docs/specs/" title="Web specifications supported in Opera 9">have a look at our specs support page</a>. The article you are currently reading focuses more on specific practical examples.</p>

<h3 id="commonstandards">(X)HTML, CSS 2.1 and JavaScript</h3>

<p>As we all know, (X)HTML, CSS and JavaScript are the three mainstays that we do most of our web site building in; it also won&#8217;t be a surprise to many of you that Opera has a reputation for being one of the most standards-compliant browsers. This reputation starts with current web standards, and is gradually building forwards to some of the more nascent ones, which we&#8217;ll discuss later. Suffice to say, <a href="http://www.opera.com/docs/specs/#html" title="Opera 9 HTML support">Opera 9.5 supports the majority of the HTML 4.01 and XHTML 1.1 specifications</a>; <a href="http://www.opera.com/docs/specs/#css" title="Opera 9 CSS support">Opera 9.5 also supports nearly the whole CSS 2.1 Specification</a>; finally, Opera 9.5 has very thorough support for both <a href="http://www.opera.com/docs/specs/#ecmascript" title="Opera 9 ECMAScript support">ECMAScript/JavaScript</a> and the <a href="http://www.opera.com/docs/specs/#dom" title="Opera 9 DOM support">DOM</a>. We support a decent amount of DOM 3, and the majority of DOM 2.</p>

<h3 id="css3">CSS 3</h3>

<p>CSS3 is currently still a nascent technology, with the <a href="http://www.w3.org/Style/CSS/current-work#CSS3" title="CSS 3 current work">different parts of its specification at various different stages</a>. Opera 9.5 supports many of the more complete parts of the spec, as explored below.</p>

<h4>Media queries</h4>

<p>Media queries are a CSS 3 construct, which work in a similar manner to conditional comments, except that these are web standards, rather than proprietary constructs&#8212;you can enclose a block of CSS rules inside a media query, and then have them applied to your markup (or not) depending on a condition, such as &quot;is the screen size less than 480 pixels&quot;? Put into code, this would look something like so:</p>

<pre>
img {
  margin: 0 0 10px 10px;
  float: right;
}

@media all and (max-width: 480px) {
  img {
    margin: 10px auto;
    float: none;
    display: block;
    font-size: 80%;
  }
}
</pre>

<p>I&#8217;m sure you can immediately see the benefits here&#8212;this kind of dynamic layout optimization is very powerful for cutting down on dynamic code, and making sites behave better on alternative devices, such as mobile phones (although to target rules at mobile browsers such as Opera Mini and Opera Mobile, you need to use <code>max-device-width</code> instead, as <code>max-width</code> uses the width of the virtual viewport).</p>

<p>Here&#8217;s a more complicated example containing 2 media queries&#8212;one changes the floats to block display when the width gets down to 480 pixels, and the other removes the image altogether when it gets down to 240 pixels:</p>

<pre>body {
  max-width: 800px;
  font-family: georgia, serif;
}

img {
  margin: 0 0 10px 10px;
  float: right;
}
	
.info {
  position: absolute;
  left: 8000px;
}

@media all and (max-width: 480px) {
  img {
    margin: 10px auto;
    float: none;
    display: block;
  }
}

@media all and (max-width: 240px) {
  img {
    display: none;
  }
  
  .info {
    position: static;
  }
}</pre>

<p>See this <a href="article.html" title="media queries example"> media query example in action here</a>. David Storey has <a href="http://files.myopera.com/dstorey/experiments/dynamicmediaqueries.html" title="Another media queries example">another nice media query example located here</a>.</p>

<h4>Text shadows</h4>

<p>Using drop shadows with text used to mean serving the text as an image, and messing about the positioning, but that&#8217;s no longer the case: the creators of CSS3 have introduced a nice easy property to do it all for you called <code>text-shadow</code>. As you will see below, this makes shadows easy to control. The CSS for the example I&#8217;ll display in this section looks like so:</p>

<pre>body {
  max-width: 800px;
  font-family: georgia, serif;
}

h1 {
  text-shadow: #555 3px 3px 4px;
}

h2 {
  text-shadow: #f00 0px -5px 10px;
}

a {
  font-size: 120%;
  text-shadow: #555 2px 2px 0px;
  border: 1px solid black;
}

p.shadow {
  color: #ccc;
  text-decoration: bold;
  text-shadow: #000 2px 2px 2px;
}</pre>

<p>In the <code>text-shadow</code> property, the values from left to right set the colour of the shadow, the left/right and top/bottom offsets of the shadow (negative values move the shadow left/up, and positive values move the shadow right/down), and the amount of blurring for the shadow. <a href="dropShadow.html" title="Drop shadows example">Check the drop shadow example out, to see what effects the CSS has</a>&#8212;the HTML doesn&#8217;t contain anything special&#8212;just a level 1 and level 2 heading, some text, a preformatted code section, and a link.</p>

<p>In Opera 9.5 (and Konqueror and iCab, but no other browsers), you can also make use of multiple text shadows, like so:</p>

<pre>text-shadow: 0 0 4px white, 0 -5px 4px #ff3, 2px -10px 6px #fd3, -2px -15px 11px #f80, 2px -25px 18px #f20;</pre>

<p>You just chain the different shadows together inside a single CSS property, delimiting them using commas.</p>

<p style="background:#000; font-size: 200%; padding:5px; text-shadow: 0 0 4px white, 0 -5px 4px #ff3, 2px -10px 6px #fd3, -2px -15px 11px #f80, 2px -25px 18px #f20;">This text has the shadow applied! Cool huh?</p>

<p>If you want to know more, <a href="http://www.w3.org/TR/2003/CR-css3-text-20030514/#text-shadows" title="The CSS 3 spec text shadow section">visit the CSS3 spec</a>.</p>

<h4>Background sizing</h4>

<p>There are many different screen resolutions in the world, and it can be hard to create graphics so that they work nicely across all those different resolutions&#8212;your lovely designs can be broken if you&#8217;re not careful, and don&#8217;t give this fact enough forethought. There are way to bullet proof things like rounded corner boxes and background repeated images, but they are sometimes tricky.</p>

<p>Check out this <a href="background-sizing1.html" title="first background sizing example">single column example</a>. This is a simple single column&#8212;a heading and a paragraph inside a <code>div</code>, with a background graphic repeated vertically. The CSS looks like this:</p>

<pre>div {
  background-image: url(bkgd_col.png);
  background-repeat: repeat-y;
  border: 1px solid #466900;
}

h1 {
font: Georgia, &quot;Times New Roman&quot;, Times, serif;
margin: 0;
background: url(transparency.png);
 padding: 0 50px;
 font-style: italic;
 color: #F1921A;

}

p {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  padding: 0 50px;
}

p+p {
  margin-top: 1em;
}</pre>

<p>the trouble is that the text breaks out of the column after the viewport gets any wider than about 400 pixels. You could fix this by setting the <code>max-width</code> value to 400 pixels, but wouldn&#8217;t it be nice if the Image just scaled with the paragraph width increase? CSS provides a way to do this&#8212;background size. If you add a <code>-o-background-size</code> declaration to the <code>div</code> rule, you&#8217;ll end up with this <a href="background-sizing2.html" title="second background sizing example with background-size added to CSS">background sizing example</a>. (Opera is still using an experimental version of this, hence the <code>-o-</code> prefix. Webkit and KHTML also have experimental implementations (using their <code>-webkit-</code> and <code>-khtml-</code> prefixes) so to ensure maximum compatibility for now, add multiple rules to your page with the different prefixes on them.)</p>

<p>the rule added to the div is <code>-o-background-size: 100% auto;</code>&#8212;the first value is the x value&#8212;ie, &quot;always make the image expand to 100% of the container width&#8212;and the second value is the y value. If there is only one value specified, it is applied to both the width and height. The <code>background-size</code> property accepts percentage and length values as well as auto, which preserves the aspect ratio.</p> 

<h4>Opacity</h4>

<p>CSS 3 opacity is very easy to use&#8212;all you need to do is add an <code>opacity</code> proprety to your rule, with a single value to specify the opacity of the element(s) you are selecting. For example:</p>

<pre>div {
  opacity: .7;
}</pre>

<p>Check out this <a href="opacity.html" title="An opaque HTML block laid over another one">opacity example</a>, which shows a semi-transparent block laid over the rest of the page.</p>

<h4>HSL</h4>

<p>CSS 3 allows you to specify colours as HSL (or Hue, Saturation, Lightness) values&#8212;this is good, HSL colours overcome some of the limitations of RGB colours (such as being affected by hardware, and being much easier to predict). HSL colours are specified like so:</p>

<pre>div {
  background-color: hsl(240, 100%, 50%);
}</pre>

<p>It is also easy to convert RGB colours into HSL. <a href="http://www.w3.org/TR/css3-color/#hsl-color" title="CSS 3 color module section on HSL">Check out the CSS 3 color module</a> for more details on this. By way of an example, I&#8217;ve <a href="HSLcolour.html" title="Opaque block with HSL colour value">rewritten the opacity example using HSL colour</a> - in this version the absolutely positioned block&#8217;s background colour is set using an HSL value, and a lighter paragraph is added, which simply has the lightness values increased to create a ligher shade&#8212;.</p>


<h4>overflow-x and overflow-y</h4>

<p>these properties allow you to control how children will behave when they flow out of their containing parent box; <code>overflow-x</code> controls overflow out of the right and left, and <code>overflow-y</code> controls overflow out of the top and bottom. The possible values of these properties are as follows:</p>

<ul>
<li><code>visible</code>: The child content will flow beyond the edge of the containing parent.</li>
<li><code>hidden</code>: After the point where the child content reaches the edge of the containing parent, it disappears, as if it were being viewed through a window, and disappeared behind the wall at the edge of the window.</li>
<li><code>scroll</code>: This creates the same effect as <code>hidden</code>, with the addition of scroll bars to allow you to scroll to see the rest of the content.</li>
<li><code>auto</code>: Similar to <code>scroll</code>, but scroll bars are only shown when necessary.</li>
<li><code>no-display</code>: If the child content flows over the edge of the containing parent, the whole lot is removed, as if <code>display: none</code> were specified.</li>
<li><code>no-content</code>: If the child content flows over the edge of the containing parent, the whole lot is hidden, as if <code>visibility: hidden</code> were specified.</li>
</ul>

<p>Note that you can also set a property called just <code>overflow</code>, which acts as shorthand for <code>overflow-x</code> and <code>overflow-y</code>. See the <a href="http://www.w3.org/TR/css3-box/#overflow" title="CSS 3 overflow">CSS 3 box model specification</a> for more details and some examples.</p>

<h4>nav-index, nav-up, nav-down, nav-left and nav-right</h4>

<p>These properties allow you to specify which element will be given focus when the user presses navigation keys on the keyboard, for any element you like (ie, you might want focus to be able to move from a central element only to the four elements that immediately surround it, using the keyboard). The spec doesn&#8217;t define what key to use for each, but suggests the direction arrows should be used by user agents, and that they should provide a means to left users set their own custom keys. Opera actually uses this for spatial navigation&#8212;it&#8217;s used by pressing Shift + the arrow keys.</p>

<p>These properties are especially useful when absolute positioning is used and the elements may not be displayed in source order. Check out the <a href="http://www.w3.org/TR/css3-ui/#nav-dir" title="CSS nav key properties">CSS 3 UI module</a> for more information and an example.</p>

<h4>The first-of-type selector</h4>

<p>A popular way to add drop caps is to put a span around the first letter, or add a class to the paragraph you want to add the drop cap to and use the <code>::first-letter</code> pseudo-element to manipulate the drop cap (the class is needed as it isn&#8217;t always predictable where the element will be in the code; there could be a image or a list before the first paragraph for example, which could throw things off.)  But no more do we have to suffer this hassle&#8212;you can now create a drop cap (among many other things) with the <code>first-of-type</code> selector.</p>



<p>Check out the following code:</p>



<pre><code>div.article &gt; p:first-of-type::first-letter { }</code></pre>



<p>This selects the first letter of the first <code>p</code> element that is a direct child of the <code>div</code> element with a class of <code>article</code>.  If there are any other elements before the first paragraph of the article, the correct element will still be selected.  It ignores any paragraphs that are not a direct descendent, such as those contained in <code>div</code> elements.  This can be seen in this <a href="http://files.myopera.com/dstorey/experiments/dropcaps.html" title="CSS3 drop caps example">drop caps example</a>.</p>

<h4>The nth child/nth-of-type selector</h4>

<p>Alternating the background colour of the rows in a data table has been a popular usability technique for a few years now&#8212;it allows the eye to follow the rows more easily.  This traditionally required JavaScript or adding a class name to each row that needed to be styled with the alternative colour, but no more!  This can now be done with <code>nth-child</code> (or <code>nth-of-type</code>).</p>



<p>In the following example (<a href="http://files.myopera.com/dstorey/experiments/iTunesTable.html" title="CSS3 zebra sriped HTML table example">nth-child example in action</a>) the striped effect can be created by simply using:</p>



<pre><code>#playlist tr:nth-child(odd) td {

  background-color: #edf3fe; 

}
</code></pre>



<p>Alternatively <code>nth-child(even)</code> could have been used.  You can have exact control over which element is selected, by specifying the element number, the repeating pattern you want and/or the element offset value.  For example, <code>tr:nth-child(2)</code> would specify the second row only, <code>tr:nth-child(3n)</code> would select every third row, while <code>tr:nth-child(3n+1)</code> would select every third row offset by one.</p>  

<h4>Form pseudo-classes</h4>

<p>You can now use pseudo-classes to select specific form elements in different states, such as <code>:disabled</code>, <code>:enabled</code> etc. <a href="http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors-1/" title="article covering styling forms with CSS 3">Check out this article for more on styling form elements with form pseudo-classes</a>.</p>

<h4>Other CSS 3 selectors</h4>

<p>There are many other CSS 3 selectors available&#8212;<a href="http://www.w3.org/TR/css3-selectors/" title="The CSS 3 selectors spec">check out the CSS 3 selectors spec for more about them</a>.</p>

<h3 id="xml">XML and XSLT</h3>

<p>Opera 9.5 features a fast, streamlined XML and XSLT processor, which boasts full support for XSLT 1.0, XPath 1.0, XML events, XML namespaces and the xml:id attribute. Read more about <a href="http://www.opera.com/docs/specs/#xml" title="Opera 9 XML support">Opera 9.5&#8217;s XML support</a>.</p> 

<h3 id="html5">HTML 5</h3>

<p><a href="http://www.whatwg.org/specs/web-apps/current-work/" title="The current HTML 5 working draft">HTML 5</a> is the next generation of HTML language, currently in working draft form&#8212;it aims to improve on the semantics of HTML 4.x, get rid of some of its ambiguities, and provide a better language for creating modern applications. After all, HTML was never originally intended for creating dynamic web applications&#8212;it was originally intended for static documents. In addition, HTML is under threat of being usurped from its position as &quot;language of the Web&quot; by proprietary technologies. In order for HTML to stay competitive with proprietary technologies and to keep the Web open it needs new functionality and even better interoperability between the various browser vendors. HTML 5 adds new functionality and provides browser vendors with watertight definitions to follow.</p>

<p>Opera 9.5 is currently the leader in supporting nascent HTML 5 features. In this section I will look at some of those features, along with some examples.</p>

<h4>Web Forms 2.0</h4>

<p>Web Forms 2.0 go a long way towards improving the usability, simplicity and robustness of HTML forms&#8212;the semantics are better, they are easier to style, and some stuff that used to require scripting has been handled by some special built-in attributes. Let&#8217;s look at some examples.</p>

<p>Validation can now be handled automatically using specialist attributes. Take a look at the following:</p>

<pre>&lt;form&gt;
 &lt;p&gt;&lt;label&gt;Name: &lt;input name=&quot;name&quot; required=&quot;required&quot;&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;E-mail: &lt;input name=&quot;email&quot; type=&quot;email&quot; required=&quot;required&quot;&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;URL: &lt;input name=&quot;url&quot; type=&quot;url&quot;&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;Comment: &lt;textarea name=&quot;comment&quot; required=&quot;required&quot;&gt;&lt;/textarea&gt;&lt;/p&gt;
 &lt;p&gt;&lt;input type=&quot;submit&quot; value=&quot;React!&quot;&gt;&lt;/p&gt;
&lt;/form&gt;</pre>

<p>This is very logical, even to a developer who has never seen HTML 5 before&#8212;the <code>url</code>, <code>email</code> etc keywords dictate what type of string should be entered for the field to validate, and the <code>required</code> keyword specifies whether the field should be mandatory or not.</p>

<p>Styling form controls is now easier using the new pseudo-classes recognised in HTML 5&#8212;for example:</p>

<pre>input:required{background:yellow}</pre>

<p>You can do the same type of thing for disabled controls, checked checkboxes, the default submit button, read-only controls, like this:</p>

<pre>input:disabled{ background:gray; }
input:checked+ label { text-decoration:bold; }
input[type=button]:default { border-width:1px; }
input:readonly { border-width:2px; border-color:ff0000; }</pre>

<p>Combo boxes are now a lot more logical to create. An HTML 5 combo box looks like this:</p>

<pre>&lt;input list=&quot;drinks&quot; name=&quot;drinks&quot;&gt;
&lt;datalist id=&quot;drinks&quot;&gt;
  &lt;option value=&quot;Tea&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Coffee&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Beer&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Smoothie&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Water&quot;&gt;&lt;/option&gt;
&lt;/datalist&gt;</pre>

<p>It will degrade to a commmon text field in browsers that do not support HTML 5, but in ones that do, it will allow you to choose the options in a drop down box as well as <strong>entering your own value</strong> if wished&#8212;<a href="webFormsExample.html" title="Web Forms 2.0 example">check the Web Forms 2.0 example out here</a>.</p>

<p>The last thing I&#8217;ll cover is giving auto focus to a certain form element. Whereas before this required scripting, in HTML 5 you can just put an <code>autofocus</code> attribute on to the form element you want to give focus to first, eg <code>&lt;input name=search autofocus&gt;</code>.</p>

<p>for more, check out this <a href="http://olav.dk/wf2/demo/" title="HTML 5 tutorial site">Web Forms 2.0 tutorial site</a> from Olav Junker Kjaer, and these <a href="http://shwetankdixit.com/testpages/webforms2demo.htm" title="Web Forms 2.0 examples from Shwetank">Web Forms 2.0 examples by Shwetank Dixit</a>.</p>

<h4>Server-sent events</h4>

<p>Traditional Ajax applications tend to involve the clients putting a lot of strain on the server by continuously polling it. Server-sent events provide a mechanism by which you can continuously push events from server to client via a persistent connection, which reduces the load, and still allows instant feedback to the user. This type of interaction has been done in various different guises over the years , mostly put under the umbrella term &quot;Comet&quot;; Comet methods have traditionally had many issues however, and server-sent events aim to solve some of those issues. For more about Comet, check out the <a href="http://cometdaily.com/" title="Comet daily Comet programming experiements">Comet Daily site</a> here, or this <a href="http://www.slideshare.net/simon/comet-at-the-highland-fling/" title="Comet presentation form the highland fling 2008">very informative Comet presentation by Simon Willison</a>.</p>

<p>More about our <a href="http://my.opera.com/WebApplications/blog/show.dml/438711" title="Opera 9.5 server sent events">Server-sent events implementation plus a cool example</a> is available on Arve Bersvendsen&#39;s site. Bear in mind that the spec actually changed after we implemented Server-sent events (<code>event-source</code>); we will update our implementation when the specification is finalised.</p>

<h4>Canvas</h4>

<p>HTML 5 canvas is a drawing API that uses a special HTML element to define a drawing area, and scripting to draw graphics inside that area. Creating a canvas requires you to use the <code>&lt;canvas&gt;</code>&#8212;simple as that:</p>

<pre>&lt;canvas id=&quot;example&quot; width=&quot;260&quot; height=&quot;200&quot;&gt;
There is supposed to be an example drawing here, but it&#39;s not important.
&lt;/canvas&gt;</pre>

<p>The <code>id</code> is used as a hook for the script to identify the canvas and draw something inside it, the <code>width</code> and <code>height</code> simply define the size of the canvas area, and the text inbetween the tags specifies a fallback message to display in case the canvas doesn&#8217;t work in the browser viewing the page (you could specify a static image too if you wished). To actually draw something inside the canvas, you need to use script, as shown in the following example:</p>

<pre>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;HTML 5 Canvas example&lt;/title&gt;
    &lt;script&gt;
      function drawPicture(){
        var canvas = document.getElementById(&#39;example&#39;);
        
        var context = canvas.getContext(&#39;2d&#39;);
        
        context.fillStyle = &quot;rgb(0,255,0)&quot;;
        context.fillRect (25, 25, 100, 100);
        
        context.fillStyle = &quot;rgba(255,0,0, 0.6)&quot;;
        context.beginPath();
        context.arc(125,100,50,0,Math.PI*2,true);
        context.fill();
        
        context.fillStyle = &quot;rgba(0,0,255,0.6)&quot;;
        context.beginPath();
        context.moveTo(125,100);
        context.lineTo(175,50);
        context.lineTo(225,150);
        context.fill();
        
      }
    &lt;/script&gt;
    &lt;style type=&quot;text/css&quot;&gt;
      canvas { border: 2px solid black; }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body onload=&quot;drawPicture();&quot;&gt;
    &lt;canvas id=&quot;example&quot; width=&quot;260&quot; height=&quot;200&quot;&gt;
    There is supposed to be an example drawing here, but it&#39;s not important.
    &lt;/canvas&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>View the <a href="canvasExample.html" title="Basic canvas example">basic canvas example here</a>.</p>

<p>The <code>getContext()</code> Canvas DOM method is used to get the context (in this case it&#8217;s 2d), and the two lines below it are fairly self explanatory&#8212;the <code>fillStyle</code> method specifies what color the shape I&#8217;m going to draw will be, using an rgb value (you could also use hex values or colour keywords, and you can also specify rgba values to include opacity too, as I&#8217;ve done with the other two shapes.) The <code>fillRect</code> method specifies a filled rectangle to be filled with that colour&#8212;the parameters from left to right are x and y coordinates relative to the origin (0,0), which the top left hand corner of the canvas, and the width and height of the rectangle.</p>

<p>The rectangle is the only shape primitive specified by the Canvas API however&#8212;other similar shapes have to be drawn using curves and lines, which is what I have done for the circle and the triangle. In each case, I set the fill colour, including opacity this time, specify that I&#8217;m beginning to draw a shape using <code>beginPath()</code>, draw the shape I want, then use <code>fill()</code> to close the shape and fill it. The other methods are as follows:</p>

<ul>
<li><code>arc()</code>: Draws a circle, or part of a circle. The parameters (L-R) are the x and y coordinates or the centre of the arc, the arc&#8217;s radius, the start and end angles of the arc, and a boolean value to specify whether the arc should be drawn clockwise (<code>false</code>) or anticlockwise (<code>true</code>).</li>
<li><code>moveTo()</code>: Moves the pen to the specified x and y coordinates.</li>
<li><code>lineTo()</code>: Draws a line from where the pen is currently positioned, to a new position specified by the x and y coordinates.</li>
</ul>

<p>Canvas also allows manipulation of images, transformations, composition, animation, and all manner of other wonderful things. </p>

<p>You can <a href="http://dev.opera.com/articles/view/blob-sallad-canvas-tag-and-javascrip/" title="canvas animation and physics example">find a very interesting Canvas example that uses physics simulation and animation here</a>, and some <a href="http://virtuelvis.com/2005/12/image-manipulation-in-canvas/" title="canvas colour manipulation examples">nice examples of canvas colour manipulation</a> here.</p>

<h4>Cross document messaging</h4>

<p>Cross document messaging is an HTML feature that allows you to easily send messages between web pages that are sitting on different domains.</p>

<h4>getElementsByClassName</h4>

<p>At last, that DOM method we&#8217;ve all been waiting for has been introduced in HTML 5. Most JavaScript libraries now implement a shorthand commend that does something similar, but it is nice to be able to do it natively.</p>


<h3 id="svg">SVG</h3>

<p>SVG (Scalable Vector Graphics) is a web standard for representing vector graphics in markup&#8212;it is a fantastic technology, which, in conjunction with other web standards, provides you with mechanisms for creating shapes, animation, text user interaction and more. In fact, it can give Flash a run for its money, and it&#8217;s all open. Currently Opera leads the way in terms of SVG support, with Safari/WebKit following, and then Firefox a bit further behind them. We can only hope that other major browsers will follow suit soon (we&#8217;re looking at you, Internet Explorer.)</p>

<p>Opera 9.5 supports a pretty complete set of SVG 1.1 features (with a few minor exceptions). In addition, it supports some features of SVG 1.2&#8212;such as SVG 1.2 Tiny&#8217;s vector effects (such as non-scaling stroke), keyboard navigation, handler, and editable text as seen in the examples below. Check out the <a href="http://www.w3.org/TR/SVGMobile12/" title="SVG Tiny spec">SVG Tiny 1.2 spec</a> for more details.</p>

<p><a href="http://www.opera.com/docs/specs/#svg" title="Opera 9 SVG support">See here for some more information on Opera&#8217;s SVG support</a>. With the pleasantries out of the way, let&#8217;s go on to look at some SVG examples.</p>

<h4>Decorating your pages using SVG backgrounds</h4>

<p>A very nice feature in Opera 9.5 is the ability to use a SVG image as the source of an <code>img</code> element, or even add SVG to a page with CSS, using the <code>background-image</code> and <code>list-style-image</code> properties, just like you would regular images. Try this out yourself! and of course, because SVG is fully scriptable and can support animations, you could have all kinds of fascinating background animations, without having to resort to Flash or lots of complicated code.</p>

<h4>SVG for text</h4>

<p>SVG has all the functionality you&#8217;d ever need for creating rich internet applications, complete with great looking form fields for entering data. You can easily create simple form fields like so:</p>

<p><object data="" type="image/svg+xml" width="850px" height="300px"></object></p>

<p>This requires the following simple code:</p>

<pre>  &lt;rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;#87ceeb&quot;&gt;
      &lt;title&gt;background rectangle&lt;/title&gt;
   &lt;/rect&gt;

   &lt;g id=&quot;nameInput&quot; transform=&quot;scale(4) translate(50, 20)&quot;&gt;
      &lt;text x=&quot;0&quot; y=&quot;20&quot; font-size=&quot;18&quot; font-family=&quot;Arial, sans-serif&quot; fill=&quot;#000080&quot;&gt;Name:&lt;/text&gt;
      &lt;rect x=&quot;0&quot; y=&quot;25&quot; width=&quot;156&quot; height=&quot;26&quot; rx=&quot;3&quot; ry=&quot;3&quot;
         fill=&quot;white&quot; stroke-width=&quot;2&quot; stroke=&quot;#000080&quot;/&gt;
      &lt;textArea x=&quot;3&quot; y=&quot;27&quot; width=&quot;150&quot; height=&quot;20&quot; font-size=&quot;18&quot; font-family=&quot;Arial, sans-serif&quot;
         editable=&quot;simple&quot; focusable=&quot;true&quot; pointer-events=&quot;boundingBox&quot;&gt;John Doe&lt;/textArea&gt;
   &lt;/g&gt;</pre>

<p>Or go a bit crazy, like this (check out the <a href="text2.svg" title="crazy text field SVG">crazy SVG text field example</a> then view source to check out the source code):</p>

<p><object data="" type="image/svg+xml" width="600px" height="600px"></object></p>

<h4>SVG Animation and image manipulation</h4>

<p>Again, SVG is full equipped for animation/image manipulation. You can include images in an SVG file easily enough, draw complex shapes with SVG, or even include SVG files inside the HTML 5 Canvas, as shown in this <a href="http://files.myopera.com/MacDev_ed/sarpsborg2007/canvas2d.html" title="resizing imges in SVG">Image resizing example from Erik Dahlström</a>. You simply pass an <code>Image</code> object to <code>drawImage</code> that points to an SVG file.</p>

<p>I just had to include this <a href="circularclip.svg" title="Erik Ds SVG time travel example">time travel animation example</a>, again from Erik. As Erik explains on his blog, this currently tends to freeze Safari and Firefox, so only an image is included below. his makes use of SVG animate motion, and the FakeSMILe (partial javascript implementation of SMIL) library. Check out the source of this example&#8212;it is amazing how litle script is needed for this animation, compared to how much it would be to do it in JavaScript alone.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/128-opera-95-the-next-generation-of-web-standards/timetravel.jpg" alt="image of Erik Ds time travel SVG example" /></p>

<p>I can however include Erik&#8217;s example showing how to create an advanced SVG menu using opacity, matrices, and other cool effects:</p>

<p><object data="" type="image/svg+xml" width="100%" height="335"><img src="http://forum-test.oslo.osa/kirby/content/articles/128-opera-95-the-next-generation-of-web-standards/vistamen.jpg" alt="fall back image for SVG menu" /></object></p>

<p>Also check out the dev.opera.com SVG tutorials showing an <a href="http://dev.opera.com/articles/view/svg-evolution-2-our-first-steps-into-sv/" title="Jeff Schiller SVG image gallery">SVG Image gallery by Jeff Schiller</a>, and an <a href="http://dev.opera.com/articles/view/playing-svg-darts-target-practice/" title="Ruud Steltenpool SVG darts game">SVG darts game by Ruud Steltenpool</a>.</p> 

<p>You can find more SVG tutorials on the <a href="http://dev.opera.com/articles/svg/">SVG tutorial page at dev.opera.com</a>. Carto.net is also worth checking out, for <a href="http://carto.net/" title="SVG maps">SVG maps</a>.</p>

<h3 id="aria">WAI-ARIA</h3>

<p><a href="http://www.w3.org/WAI/intro/aria" title="the Accessible Rich Internet Applications Suite">WAI-ARIA</a> (the Accessible Rich Internet Applications Suite) is a W3C specification that aims to define how to make Rich Internet Application technologies such as Ajax accessible, by filling in the accessibility gaps in the Ajax model. Opera 9.5 supports the current ARIA implementation.</p> 

<p>Wikipedia says, &quot;It allows web pages (or portions of pages) to declare themselves as applications rather than as static documents, by adding role, property, and state information to dynamic web applications. ARIA is intended for use by developers of web applications, browsers (or user agents), assistive technologies (or ATs), and accessibility evaluation tools.&quot; (<a href="http://www.paciellogroup.com/blog/misc/ARIA/atmedia2008/">More about WAI-ARIA from Steve Faulkner of Paciello Group</a>)</p>

<h3 id="operawidgets">Opera Widgets</h3>

<p>Opera Widgets are applications written using web standards, which are specially packaged and run on the desktop. They have their own security model, can be run across different platforms and devices (including mobile devices) and have some exciting features available such as the <a href="http://dev.opera.com/libraries/widgetobject/docs/widget.dml" title="The Opera Widgets API">Opera Widget API</a>, which allows all manner of useful new Widget manipulation.</p>

<p>You can <a href="http://widgets.opera.com/" title="widgets.opera.com - The home of Opera Widgets on the Web">download a large amount of Opera widgets from widgets.opera.com</a>; to find out more about how to develop widgets, <a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" title="Opera Widgets SDK">visit the wealth of information available at the Opera Widgets SDK</a>.</p>


<h2 id="developertools">Opera&#8217;s developer tools</h2>

<p>The recent move from static web pages to web applications of web applications has greatly increased the complexity of web development: mark-up, CSS and script all interact with each other in ever-more elaborate ways. As Opera is committed to becoming a vital tool in every developer&#8217;s armoury, we are releasing a new breed of developer tools to help you testing your web standards work, and debug any problems you may encounter.</p>

<h3 id="dragonfly">Opera Dragonfly</h3>

<p>Opera Dragonfly is the centrepiece of Opera&#8217;s new developer tools&#8212;it is a complete debugging application that features a JavaScript debugger, command line for entering JavaScript commands, DOM and CSS inspector, call stack inspector, error console, optional integration inside the browser window, and much more. You can access Opera Dragonfly in Opera 9.5 by simply selecting the Tools &gt; Advanced &gt; Developer Tools option in the Opera menu bar.</p>

<p>To find out more information about Opera Dragonfly, read the following:</p>

<ul>
<li><a href="http://www.opera.com/products/dragonfly/">The Opera Dragonfly product page</a>.</li>
<li><a href="http://dev.opera.com/articles/view/introduction-to-opera-dragonfly/">Introduction to Opera Dragonfly</a>.</li>
<li><a href="http://dev.opera.com/articles/view/opera-dragonfly-architecture/">Opera Dragonfly architecture</a>.</li>
</ul>

<p>Let us know what you think of Opera Dragonfly at the <a href="http://www.opera.com/products/dragonfly/feedback/">Opera Dragonfly feedback page</a>.</p>

<h3 id="developermenu">The Opera Debug Menu</h3>

<p>To complement Opera Dragonfly, we&#8217;ve also got our own Developer Menu in the works. The goal of this is to bring developer-specific 
functionality already present in the browser into one place, and further 
enhance them with some extra features and reference materials. This is currently in alpha stage, but you can <a href="http://dragonfly.opera.com/app/debugmenu/" title="download the opera developer menu">try the developer menu out</a> by clicking on this link.</p>

<p>Again, we want you to give us as much feedback as possible on this, as we want to make it as useful for designers and developers as possible.</p>

<h3 id="widgetemulator">The Opera Widget Emulator</h3>

<p>The Opera Widget Emulator is another useful new tool that Opera has recently created&#8212;it allows you to run your Opera Widgets inside a sandbox, emulating them running on a variety of different sizes and with other altered parameters. Basically, it makes it simple to see how your widgets will perform in different environments, such as on small monitors, TVs, or mobile devices.</p>

<p>The application is an Opera widget itself, so is used in just the same way as any other; all you need to do to run your widgets in it is put your widget package inside the widget directory of the emulator, insert a special line of JavaScript into your index.html file, and then save it all and drag the emulator&#8217;s config.xml file into the browser to load the emulator. <a href="http://dev.opera.com/articles/view/widget-emulator/">For more information on how to get hold of the Opera Widget Emulator and how to use it, check out this article</a>.</p>

<h3 id="miniemulator">The Opera Mini Simulator</h3>

<p>As more and more people check the Web on their phones, it&#8217;s a vital part of the QA process to ensure that the Opera Mini phone browser renders your site correctly, so we&#8217;ve developed the Opera Mini simulator. This is available on a standard web site located at <a href="http://www.opera.com/developer/tools/mini/" title="Opera Mini emulator">http://www.opera.com/developer/tools/mini/</a>, and you just use it like you would the real thing.</p>

<h2 id="summary">Summary</h2>

<p>So that&#8217;s a wrap&#8212;the end of my summary of Opera 9.5&#8217;s standards support, and Opera&#8217;s overall commitment to the web standards movement. Let us know what you think of the new browser, our new wave of developer tools and our educational material.</p>

