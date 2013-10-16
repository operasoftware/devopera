Title: Starting with a sound structure – predictable HTML layouts using the YUI
----
Date: 2007-11-15 15:40:38
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

<p>In <a href="http://dev.opera.com/articles/view/progressive-enhancement-and-the-yahoo-u/" alt="Christians previous article">my previous article</a> I introduced you to the YUI, talked about why and how it was created and explained the principles behind it, as well as what parts comprise it. This time we&#39;ll plunge right in, create an HTML document using the YUI grids component.</p>

<h2>Starting with a structure</h2>

<p>When you build a house you need a solid foundation, and the same goes for web pages. While it is true that most desktop browsers will try to display almost anything that vaguely looks like HTML, there is no point in giving in to that commodity - sloppy code takes longer to load, is inaccessible, and often won&#39;t run on some low power browsers, eg mobile browsers. In addition, you cannot develop in a structured fashion or work with other developers in a distributed manner when you don&#39;t follow a standard. Following the W3C standards first and foremost does not mean doing the right technical thing, but instead means you create code that can be validated and easily converted to other output formats (PDF, XML dialects and so on). Valid HTML also means you can predictably style the document using CSS and add extra functionality using JavaScript and the DOM.</p>

<h3>An HTML starting point</h3>

<p>Without further ado, let&#39;s get started by creating a basic HTML starting point for the YUI grids to build on:</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html dir=&quot;ltr&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt; 
  &lt;title&gt;Starting on the right foot... HTML Template&lt;/title&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;http://yui.yahooapis.com/2.3.1/build/reset-fonts-grids/reset-fonts-grids.css&quot;&gt;&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;doc&quot;&gt; 
        &lt;div id=&quot;hd&quot;&gt;Header, baby, yeah!&lt;/div&gt;  
        &lt;div id=&quot;bd&quot;&gt;Nice body&lt;/div&gt;  
        &lt;div id=&quot;ft&quot;&gt;Groovy footer&lt;/div&gt;  
    &lt;/div&gt; 
    &lt;script type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>HTML documents should always start with a <code>DOCTYPE</code> - I&#39;m using HTML 4.01 strict as that provides us with the strictest possible rules while being supported by most browsers. The <code>DOCTYPE</code> is immensely important because it determines how browsers show web pages. Using the right <code>DOCTYPE</code> forces the browser to follow the W3C guidelines; using the wrong one makes it draw assumptions as to how something should be shown to the user. This is called Doctype Switching and there is a lot of information on it available <a href="http://gutfeldt.ch/matthias/articles/doctypeswitch.html" alt="doctype switching article">here</a>.</p>

<p>Next up we define the language (<code>en</code> for English) and the reading direction of the document (<code>ltr</code> for left-to-right) in the <code>html</code> element and open the <code>head</code> element. Inside the <code>head</code> element we define the encoding of the document in a <code>meta</code> tag (<code>utf-8</code> is the safest bet there as it includes Latin, Asian, Hebrew, Arabic and Eastern European languages) and include the <code>title</code> element, which describes the current document (and gets indexed by search engines).</p>

<h3>Adding YUI-specific styles and elements</h3>

Next up in our basic HTML template is a <code>link</code> element that points to the style sheet we want to apply. In this case we use the combined YUI CSS component file that includes CSS Reset, Fonts and Grids.

<p>In order to use the YUI CSS grids we need four <code>div</code> elements to the main document: a container <code>div</code> with an <code>id</code> of doc, which contains three smaller containers for:</p>

<ul>
<li>Page header (<code>id hd</code>)</li>
<li>Page body (<code>id bd</code>)</li>
<li>Page footer (<code>id ft</code>)</li>
</ul>

<p>At the end of the document body we add a <code>script</code> element to include our JavaScript. This is a bit of a break in tradition as most (including my older) best practice tutorials tell you never to add a script inside the body, but instead keep them in the head.</p>

<p>There are however two good reasons why it makes sense to add scripts at the end of the body:</p>

First of all you can be sure that HTML content you want to alter using JavaScript will be loaded by the time the JavaScript is accessed

Second, browsers stop rendering the page when they load scripts. Adding scripts at the end of the body means your scripts don&#39;t slow down the initial rendering of the page and that means your page appears to load a lot faster to end users

<h3>Defining your page grid</h3>

<p>You can find the document I have built so far in <a href="gridstemplate.html" alt="The basic HTML grid">gridstemplate.html</a> - download it and open it in a browser and you&#39;ll see that the YUI CSS components have already worked some magic. The reset component has got rid of all the browser differences in rendering and the font component has reset the font to the equivalent of 13 pixels whilst still rendering it resizable.</p>

<h4>Defining the overall page width</h4>

<p>The <code>doc id</code> made the whole document 750 pixels wide and centred it horizontally in the browser (defined in the YUI CSS). This is the standard for most older pages on the Yahoo! network and if you want to fully support users running a 800x600 pixels resolution with their browsers in full screen width, it makes sense to use it. If I don&#39;t want this width, all I need to do is change the <code>id</code> - <code>doc2</code> makes the document 950 pixels wide, <code>doc3</code> makes it as wide as the browser window and <code>doc-custom</code> allows you to define your own width. For this example I will choose <code>doc2</code> as I can fit more into a wider window.</p>

<h4>Choosing the main template</h4>

<p>So far I have set up our rendering and font defaults and defined the width of the page. This is all well and good, but it doesn&#39;t constitute a layout – all I have created so far is a header and footer with a body in between. In order to create a multicolumn layout I need another container with the <code>id yui-main</code> and two divs with the class <code>yui-b</code> (which stands for for &quot;block&quot;.) I then use the <code>yui-main</code> container to enclose the main block and keep the other one outside. I end up with the following:</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html dir=&quot;ltr&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt; 
    &lt;title&gt;Two column grids template&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot; http://yui.yahooapis.com/2.3.1/build/reset-fonts-grids/reset-fonts-grids.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;doc2&quot;&gt; 
    &lt;div id=&quot;hd&quot;&gt;Header, baby, yeah!&lt;/div&gt;  
    &lt;div id=&quot;bd&quot;&gt;
        &lt;div id=&quot;yui-main&quot;&gt;
            &lt;div class=&quot;yui-b&quot;&gt;
                Main Content
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;yui-b&quot;&gt;
            Secondary Content
        &lt;/div&gt;
    &lt;/div&gt;  
    &lt;div id=&quot;ft&quot;&gt;Groovy footer&lt;/div&gt;  
&lt;/div&gt; 
&lt;script type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>This still shows the two containers one above the other, but the YUI again comes to the resue here - it contains a series of predefined layout templates, accessed through different classes. All I need to do to apply a layout to my page is add one of the following classes to my main container <code>div</code> (the one with the <code>id</code> of <code>doc2</code>):</p>

<ul>
<li>yui-t1 - Two columns, narrow on left, 160px</li>
<li>yui-t2 - Two columns, narrow on left, 180px</li>
<li>yui-t3 - Two columns, narrow on left, 300px</li>
<li>yui-t4 - Two columns, narrow on right, 180px</li>
<li>yui-t5 - Two columns, narrow on right, 240px</li>
<li>yui-t6 - Two columns, narrow on right, 300px</li>
<li>yui-t7 - One full-width column</li>
</ul>

<p>If I for example add a <code>class</code> of <code>yui-t6</code> to the main container <code>div</code> I&#39;ll have a grid with a secondary content area of 300 pixels on the right and a main content column that spans the rest of the main container (that I defined as 950 pixels.) You can find the following code in the file <a href="twocolumn.html" alt="A 2 column grid defined using the YUI">twocolumn.html</a>.</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html dir=&quot;ltr&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt; 
    &lt;title&gt;Two column grids template&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot; http://yui.yahooapis.com/2.3.1/build/reset-fonts-grids/reset-fonts-grids.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;doc2&quot; class=&quot;yui-t6&quot;&gt; 
    &lt;div id=&quot;hd&quot;&gt;Header, baby, yeah!&lt;/div&gt;  
    &lt;div id=&quot;bd&quot;&gt;
        &lt;div id=&quot;yui-main&quot;&gt;
            &lt;div class=&quot;yui-b&quot;&gt;
                Main Content
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;yui-b&quot;&gt;
            Secondary Content
        &lt;/div&gt;
    &lt;/div&gt;  
    &lt;div id=&quot;ft&quot;&gt;Groovy footer&lt;/div&gt;  
&lt;/div&gt; 
&lt;script type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

&lt;&gt;
</pre>

<h3>Defining standard and special grids</h3>

<p>The above takes care of the main layout blocks - the only thing left, layout wise, is to define the layout within our main blocks. In YUI this is done using grids (split into 2 types - standard grids and special grids.) Each grid has units and is defined as a <code>div</code> with the class <code>yui-g</code> for standard grids and <code>yui-ga</code> to <code>yui-gf</code> for special grids. Each grid needs the right amount of nested unit containers with the <code>class yui-u</code>. If I wanted for example to split our main content into two equal columns using a standard grid, I&#39;d use the following (found in <a href="standardgrids.html" alt="A 2 column standard grid">standardgrids.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html dir=&quot;ltr&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt; 
    &lt;title&gt;Nested grid template&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot; http://yui.yahooapis.com/2.3.1/build/reset-fonts-grids/reset-fonts-grids.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;doc2&quot; class=&quot;yui-t6&quot;&gt; 
    &lt;div id=&quot;hd&quot;&gt;Header, baby, yeah!&lt;/div&gt;  
    &lt;div id=&quot;bd&quot;&gt;
        &lt;div id=&quot;yui-main&quot;&gt;
            &lt;div class=&quot;yui-b&quot;&gt;
                &lt;div class=&quot;yui-g&quot;&gt;
                    &lt;div class=&quot;yui-u first&quot;&gt;First&lt;/div&gt;
                    &lt;div class=&quot;yui-u&quot;&gt;Second&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;yui-b&quot;&gt;
            Secondary Content
        &lt;/div&gt;
    &lt;/div&gt;  
    &lt;div id=&quot;ft&quot;&gt;Groovy footer&lt;/div&gt;  
&lt;/div&gt; 
&lt;script type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>Notice that I use a <code>class</code> of <code>first</code> to define which of the grids should be the first one on the left. This is independent of the order in the source document. The above example shows the unit with the text content <code>First</code> on the <code>left</code>. If I shifted the <code>first</code> class to the other unit that one would be shown on the left instead. This is an amazingly powerful tool and one of the coolest things YUI grids offers you.</p>

<p>The special grids allow for different numbers of columns and space distribution:</p>

<ul>
<li>yui-gb - Special grid, 1/3 - 1/3 - 1/3</li>
<li>yui-gc - Special grid, 2/3 - 1/3</li>
<li>yui-gd - Special grid, 1/3 - 2/3</li>
<li>yui-ge - Special grid, 3/4 - 1/4</li>
<li>yui-gf - Special grid, 1/4 - ¾</li>
</ul>

<p>So if I wanted to add another grid below the one I&#39;ve already defined containing three columns, all I would need to do is to add another grid using the <code>yui-gb</code> class and three units.</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html dir=&quot;ltr&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt; 
    &lt;title&gt;Nested grid template&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot; http://yui.yahooapis.com/2.3.1/build/reset-fonts-grids/reset-fonts-grids.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;doc2&quot; class=&quot;yui-t6&quot;&gt; 
    &lt;div id=&quot;hd&quot;&gt;Header, baby, yeah!&lt;/div&gt;  
    &lt;div id=&quot;bd&quot;&gt;
        &lt;div id=&quot;yui-main&quot;&gt;
            &lt;div class=&quot;yui-b&quot;&gt;
                &lt;div class=&quot;yui-g&quot;&gt;
                    &lt;div class=&quot;yui-u first&quot;&gt;First&lt;/div&gt;
                    &lt;div class=&quot;yui-u&quot;&gt;Second&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;yui-gb&quot;&gt;
                    &lt;div class=&quot;yui-u&quot;&gt;Second&lt;/div&gt;
                    &lt;div class=&quot;yui-u&quot;&gt;Third&lt;/div&gt;
                    &lt;div class=&quot;yui-u first&quot;&gt;First&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;yui-b&quot;&gt;
            Secondary Content
        &lt;/div&gt;
    &lt;/div&gt;  
    &lt;div id=&quot;ft&quot;&gt;Groovy footer&lt;/div&gt;  
&lt;/div&gt; 
&lt;script type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>As you can see this already makes it very flexible. It gets even better when you remember that you can nest grids and create lots and lots of different combinations that way.</p>

<h3>The lazy way of using YUI grids</h3>

<p>At first glance this can look a bit overwhelming and complex, however the flexibility you gain by using these containers, <code>id</code>s and <code>class</code>es is pretty impressive. In addition, you can be sure that, when a new browser comes out and becomes widely used, the YUI will get an update and your layout will still work.</p>

<p>If you don&#39;t feel like memorizing all these <code>class</code>es and <code>id</code>s you can just refer to the <a href="http://developer.yahoo.com/yui/#cheatsheets" alt="YUI grids class and id cheatsheets">handy cheatsheets available on the YUI site</a>. Another, even lazier way is to use the <a href="http://developer.yahoo.com/yui/grids/builder/" alt="The YUI grids builder">YUI grids builder</a>, a WYSIWYG editor that allows you to choose your template, define your grids and copy and paste the final code into your main code editor.</p>

<h2>Adding extra hooks for styling and functionality</h2>

<p>While this is enough to define a layout I have not yet looked at styling it. You can use the element names and classes, but in order to achieve a specificity high enough to, for example, style the sidebar differently from the main content you need to use rather contrived selectors like <code>.yui-b</code> and <code>#yui-main .yui-b</code>. To save a lot of headaches and to add another hook to use in JavaScript later on it makes a lot of sense to add some <code>id</code>s to label the different sections of the document, as shown below:</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html dir=&quot;ltr&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt; 
    &lt;title&gt;Template with ID hooks&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot; http://yui.yahooapis.com/2.3.1/build/reset-fonts-grids/reset-fonts-grids.css&quot;&gt;
&lt;/head&gt;
&lt;body&amp;rt;
&lt;div id=&quot;doc2&quot; class=&quot;yui-t6&quot;&gt; 
    &lt;div id=&quot;hd&quot;&gt;Header, baby, yeah!&lt;/div&gt;  
    &lt;div id=&quot;bd&quot;&gt;
        &lt;div id=&quot;yui-main&quot;&gt;
            &lt;div class=&quot;yui-b&quot;&gt;
                &lt;div class=&quot;yui-g&quot; id=&quot;introduction&quot;&gt;
                    &lt;div class=&quot;yui-u first&quot;&gt;First&lt;/div&gt;
                    &lt;div class=&quot;yui-u&quot;&gt;Second&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;yui-gb&quot; id=&quot;showcase&quot;&gt;
                    &lt;div class=&quot;yui-u first&quot;&gt;First&lt;/div&gt;
                    &lt;div class=&quot;yui-u&quot;&gt;Second&lt;/div&gt;
                    &lt;div class=&quot;yui-u&quot;&gt;Third&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;	
        &lt;div class=&quot;yui-b&quot; id=&quot;sidebar&quot;&gt;
            Secondary Content
        &lt;/div&gt;
    &lt;/div&gt;  
    &lt;div id=&quot;ft&quot;&gt;Groovy footer&lt;/div&gt;  
&lt;/div&gt; 
&lt;script type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>This&#39;ll make it a lot easier to style the sections differently and apply some JavaScript functionality to make the interface more usable.</p>

<h2>To be continued</h2>

<p>In this article I looked at creating a sturdy HTML base for my example, described why this is important and how you can add a few <code>div</code>s with the right <code>class</code> names to created hundreds of different layouts using the YUI CSS grids component. You can then add some styling to create a nice looking site with this, as shown in Figure 1.</p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/58-starting-with-a-sound-structure-predictable-html-layouts-using-the-yui/unfixed.gif" alt="Nice site styling, but the CSS columns do not line up" />

<p class="comment"> Figure 1: The styling is quite nice, but the CSS columns by default do not line up, and are as high as their text content.</p>

<p>This is all well and good, but it does have it&#39;s problems. The columns are not the same height and the right column does not extend all the way down to the footer. This is something that could be fixed with CSS but it would mean a lot of hacking. It is much easier to achieve this with a bit of JavaScript and we&#39;ll talk about how to do that in the next article in this series.</p>


