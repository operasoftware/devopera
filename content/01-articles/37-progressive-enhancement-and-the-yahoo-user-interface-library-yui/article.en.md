Title: Progressive Enhancement and the Yahoo! User Interface Library (YUI)
----
Date: 2007-09-27 10:02:42
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

<p>Web development is a terribly confusing matter. There is probably no other development area that can be compared to it, as you normally have at least an idea of what environment your software will run in. With web development, all bets are off. You have no reliable way of knowing:</p>

<ul>
<li>What browser is in use by the end user</li>
<li>The operating system it is running in</li>
<li>The screen resolution and colours of the display in use</li>
<li>If there is a mouse or keyboard available, or just some kind of switch access</li>
<li>How able-bodied the visitor is</li>
</ul>

<p>All but the last are technical issues, which should not be a problem. There are several ways of dealing with these problems, the most reliable being Progressive Enhancement.</p>

<p>In this article I will discuss progressive enhancement and how it can help you successfully get around such issues, before going on to look at an out-of-the-box solution available for you to use that has fixed these issues for you already - the Yahoo! User Interface Library (YUI), which can be downloaded at <a href="http://developer.yahoo.com/yui/download/" title="The YUI download page">http://developer.yahoo.com/yui/download/</a>.</p>
<h2>Progressive Enhancement - checking if the ice can carry you before stepping on it</h2>
<p>Progressive Enhancement isn&#39;t magic - it simply means that you test for an improvement before you apply it. Browsers to a certain degree do that for us. If you link a style sheet in the head of your document, browsers that support CSS will load it and change the document&#39;s display accordingly. Those that don&#39;t support CSS won&#39;t load it at all. If you add a JavaScript the browsers that support scripting and have it turned on will try to execute it, and the other won&#39;t. So, a lot of the work is already done for us, however, the way you write your CSS and JavaScript is where progressive enhancement comes into play.</p>
<h3>Progressive Enhancement and CSS</h3>
<p>Say for example you want a certain element to have a minimum height of 200 pixels across browsers. Technically you should be able to simply use:</p>

<pre><code>#myelement{
  min-height:200px;
}</code></pre>

<p>But there&#39;s a problem here - this will fail in IE6, which does not support <code>min-height</code>. What it does do though is expand the height of any element when it&#39;s content is higher than the defined height. This is handy (although not officially documented in the CSS specs) - it allows you to use height for IE6 and override this functionality for other browsers. Other browsers support the &gt; child selector in CSS, which means you can use:</p>

<pre><code>#myelement{
  height:200px;
}
html &gt; body #myelement{
  min-height:200px;
  height:auto;
}</code></pre>

<p>This means that browsers that don&#39;t get it right like IE6 get the <code>height</code> property, whereas more modern ones use the <code>min-height</code>. We anticipated a problem and made the CSS work for the older browsers, and then you added a rule to ensure that the rule for the older browsers is overridden only for browsers that do support min-height and the child selector.</p>
<h3>Progressive Enhancement and JavaScript</h3>
<p>Progressive Enhancement with JavaScript is something so easy and logical that it is easy to forget about it. The main trick is to check for the existence of anything you want to reach in the document or in the script before you try to modify it. This kind of scripting is called Unobtrusive JavaScript and you can read up on it in more detail at <a href="http://onlinetools.org/articles/unobtrusivejavascript/" title="Unobtrusive JavaScript article">http://onlinetools.org/articles/unobtrusivejavascript/</a>.</p>

<p>Another part of progressively enhancing with JavaScript is that you mustn&#39;t rely on it. JavaScript can and will be disabled by some people, so you simply cannot trust it. Make sure that all of your solutions are based on top of a working non-JavaScript solution, and then enhance them with JavaScript to work faster and smoother for the end users that can make use of that extra functionality. A classic example is using a form that gets validated on the server-side but some preliminary checking is also done on the client-side with JavaScript to spare the visitor some annoying page reloads.</p>

<p>If you have functionality that relies on JavaScript to work, then add the HTML offering this functionality with JavaScript and the DOM. That way you will never promise the visitor something you do not fulfil, and if there is one thing you should cherish the most it is the trust of your users.</p>

<h2>Following a standard to ensure reproducible problems</h2>

<p>The next step to take the random element out of web development is to develop using standards. The World Wide Web Consortium (<a href="http://w3.org" title="The W3C homepage">http://w3.org</a>) defines standards detailing what techniques to use and how to structure and write your web sites. Following these guidelines makes sure that browsers and other user agents will display and broadcast the content you want to publish in the way you intended it to. By following a standard you can run tests against it and see the quality of your code or why something doesn&#39;t work the way it should be. If you follow a standard it becomes a lot easier to spot mistakes and remedy them; if you don&#39;t follow a standard it becomes tricky to reproduce problems.</p>

<h2>The cold shower of cross-browser issues</h2>

<p>So much for the theory, now on to the reality! The sad truth is that there is quite a gap between what the standards define and what browsers actually do. As with any kind of software, browsers have bugs and make mistakes when rendering mark up and code. When the heat was on and different companies competed against each other in the race to produce the de-facto standard browser corners were cut and browsers were developed to be forgiving. It was more important to ensure that the web sites got shown and were available than how clean they are. Furthermore, the standards didn&#39;t offer enough razzle dazzle to make one browser cooler to use than the competitor&#39;s product. This is why browser vendors added their own implementations of the ideas and structures defined in the W3C standards. While a lot of this historically was to add bells and whistles or tie the browser closer to the Operating System, it has become more interesting in recent times, with browser vendors starting to implement and agreeing on clever extensions (like <code>XMLHttpRequest</code> for Ajax) and the W3C taking these on to add to the standards.</p> 

<p>That aside, browsers still have lots of differences in the way they interpret the standards, and browser quirks and bugs make it hard for a web developer to create code that works across the board.</p>

<h2>Playing well with others</h2>

<p>One other thing you always have to be aware of is that your code is unlikely to be the only code used on a web page. Advertising scripts, statistics software and scripts added later on by other developers are likely to interfere with your code. You need to make sure that there is no possibility of clashes between your code and this other stuff that results in your code not working any longer. The main trick here is to not rely on global variables and use unique names for your objects and methods, thereby avoiding the possibility of conflicts.</p>

<h2>You are not alone with these problems - enter the YUI</h2>

<p>All of these issues are quite a job to take care of and constantly consider when you develop your site, however. Try to imagine how much harder all of this would be if your audience numbered millions of users and you were one of the most used sites on the internet!</p>

<p>This is the case for Yahoo! and they realized that tackling these issues from scratch over and over again is a huge waste of time. This is why they developed a library that first and foremost works around all the browser differences and allows developers to build web sites starting from a clean slate. They called it the Yahoo! User Interface Library (YUI) and made it available for the world to use.</p>

<p>Later on we will discuss all the different things the YUI provides to make your life quicker and simpler such as CSS and JavaScript components, and widgets. The first thing to consider when creating the YUI however was to define some boundaries in which to move. There are hundreds of user agents out there for web users to use and simply no way to take care of all of them in the same way. Yahoo! needed to come up with a methodology to define which ones to concentrate on and which ones not to support. The methodology is called Graded Browser Support.</p>
<h3>Graded Browser Support</h3>
<p>Graded Browser Support is no magic either, but it is a very pragmatic and clever approach to the problem of having to deal with lots of different browsers. The full explanation is available at <a href="http://developer.yahoo.com/yui/articles/gbs/" title="The Yahoo graded browser support page">http://developer.yahoo.com/yui/articles/gbs/</a> and would be tedious to repeat here, but the main idea is that you organize the browsers into several categories:</p>

<ul>
<li>C-grade: these are browsers that are known to have issues with modern technologies and do not get any CSS or JavaScript served to them</li>
<li>A-grade: these are the good guys, the browsers we know are able to understand the technologies we want to use</li>
<li>X-grade: these are browsers we don&#39;t know or are not sure about</li>
</ul>

<p>Using these grades you can define a proper testing methodology and make sure that only the browsers that can correctly interpret content get it served to them. In addition to progressive enhancement techniques described earlier Yahoo! internally also has a server-side component that blocks out styling and scripting for browsers that don&#39;t have a proper compliance track record and fall into the C category.</p>

<h3>CSS components for look and feel</h3>

<p>Once the browser support was planned out the YUI team looked at CSS and its issues when it comes to cross-browser support. One issue is that browsers have different levels of support for the CSS standards, but there is no way to enhance the browsers to work around that (that said, there is IE7, a script by Dean Edwards - <a href="http://dean.edwards.name/IE7/" title="Dean Edwards IE7 script">http://dean.edwards.name/IE7/</a> - that fixes a lot of IE6 issues, and this includes different default styling, ie when no CSS has been applied). So to make things easier and start off with a level playing field across browsers, the YUI team concentrated first on working out the different browser default styles and undoing them.</p>

<p>If you hear people talking about an &quot;unstyled page&quot; it is technically true that no style sheet has been applied to it, but there is a predefined style setting in every browser that defines the size of headings, the margin and padding of paragraphs and so on. As hinted at above, the problem is that these are not consistent from one browser to another and that means they interfere with you creating reliable CSS layouts. The workaround for that problem is a technique called the global whitespace reset. In essence, this means that you get rid of the padding and margin for every element in the document, leaving nothing behind to interfere with your own styles. The YUI provides you with a file called reset.css at <a href="http://developer.yahoo.com/yui/reset/" title="YUI CSS reset homepage">http://developer.yahoo.com/yui/reset/</a>, which overrides the default styling of browsers (margins, padding, font-weight and other annoyances too many to mention) allowing you to start with a clean slate.</p>

<p>The next problem is that browsers render type and fonts differently depending on what size you give your text. This has been a thorn in the side of designers for years and years and the YUI team put a lot of time and effort and testing into creating fonts.css, a style sheet that works around browser differences in text rendering and helps you to create pages that have resizable text and still allow you to define font settings that correspond with pixel values. There is a conversion table from fonts.css percentages to pixels available at <a href="http://developer.yahoo.com/yui/fonts/#using" title="YUI fonts CSS page">http://developer.yahoo.com/yui/fonts/#using</a>.</p>

<p>Probably the most powerful CSS component of the YUI is the grids package. This is a CSS framework to create CSS layouts by following a simple HTML structure using predefined IDs and classes. Using grids.css you can create hundreds of different layouts that work across all A-level browsers without worrying about nasty browser bugs . You can read all about YUI grids at <a href="http://developer.yahoo.com/yui/grids/" title="YUI grids homepage">http://developer.yahoo.com/yui/grids/</a>, and there even is a WYSIWYG-like builder for grids available at <a href="http://developer.yahoo.com/yui/grids/builder/" title="CSS grid builder">http://developer.yahoo.com/yui/grids/builder/</a>.</p>

<h3>Namespacing and the YUI JavaScript components</h3>

<p>The bulk of the YUI is a JavaScript library that takes on the same challenges the CSS components do. Its job is to work around bugs and incorrect browser implementations and offer you faster and more reliable ways to create the functionality you want to create.</p>

<p>The first step to make sure that scripts written using the YUI don&#39;t interfere with other code on the page was to define a namespace for them. The technicalities of namespacing are explained at <a href="http://developer.yahoo.com/yui/yahoo/" title="Yahoo! global object page">http://developer.yahoo.com/yui/yahoo/</a> and <a href="http://snook.ca/archives/javascript/javascript_name/" alt="Jon Snooks JavaScript namespacing page">http://developer.yahoo.com/yui/yahoo/</a> but suffice to say that all scripts using the YUI should start with <code>YAHOO</code> and follow a self-explanatory naming convention after that. This seems a bit bloated when you look at your own code in comparison but it is a safety measure and makes debugging and maintenance of scripts a lot easier, for example when you see a function called <code>YAHOO.util.Dom.setAttribute()</code>, you know it is part of the YUI utilities, it is dealing with the Dom and it sets attributes. In the same manner, you can create namespaces for each product, eg <code>YAHOO.productname.section.functionality</code>, and cut down on overhead when it comes to handing products over from developer to developer.</p>

<p>We&#39;ll be talking in more detail about the different components of the YUI in the next few articles, but for now let&#39;s just list what it offers:</p>

<ul>
<li>Animation Utility: Allows you to create animations for your applications. The cool thing about this utility is that it gives you full control over the animation process. You know when an animation starts, when it ends and what the state (including frames per second!) of the animation is at any time</li>
<li>Browser History Manager (beta): Allows you to fix the back button and bookmarking issues for Ajax applications</li>
<li>Connection Manager: An Ajax connectivity manager that gives you full control over your Ajax calls</li>
<li>Dom Collection: Deals with everything DOM related, including reading out the location and dimensions of any screen element</li>
<li>Drag &amp; Drop: Makes it dead easy to create drag and drop interfaces, once again giving you full reports about what is happening and when</li>
<li>Event Utility: Takes the confusion out of event handling. You can react to events happening in the browser, read out the state (eg where is the mouse cursor?) and even define, listen and fire test events that don&#39;t exist in the browser</li>
<li>ImageLoader Utility (experimental): Allows you to delay the loading of images until they are needed (for example it does not load images that are not in the currently visible part of the document)</li>
<li>YUI Loader Utility (beta): A tool that allows you to load the YUI components on the fly rather than having to embed them</li>
<li>YUI Test Utility (beta): A unit testing framework for JavaScript</li>
</ul>

<p>The great thing about the JavaScript components of the YUI is their pragmatic approach. Unlike some other libraries, the YUI does not tamper with the syntax of JavaScript but simply offers patches for obvious problems and browser inconsistencies. </p>

<p>YUI is not there to replace JavaScript; it merely takes the random element away from it. Anyone who knows JavaScript can read a YUI-based script and should be able to grasp quickly what is going on. This is not possible with all libraries out there - some sacrifice readability for the sake of compact code and small file size. If there is a bug in a YUI script you can easily trace back where it came from; this is harder when all you have to dig your teeth into something like <code>$(&#39;myelement&#39;).toggle(show(slow),hide(fast));</code></p>

<h3>YUI Widgets - your web site lego bricks</h3>

<p>Widgets are interface components that were built by the YUI team using the utilities mentioned above. They are cross-browser components that you can use to build a web application. They are in use across the Yahoo! network and thoroughly tested with different environments and users. In short, they are the lazy but reliable way to build a web-app, if you don&#39;t want to come up with your own solutions. The available widgets to date are:</p>

<ul>
<li>AutoComplete Control: Allows you to build a search field that automatically offers suggestions close to what users enter while they are entering it</li>
<li>Button Control (beta): Creates multifunctional buttons eg like on Flickr (buttons that can either be pressed or have an arrow to show more options)</li>
<li>Calendar Control: Creates a pop-up calendar to pick dates for forms</li>
<li>Color Picker Control (beta): A fully-fledged colour picker, the likes of which you normally see in paint programs like Photoshop</li>
<li>Container Family: A widget to create overlays, tooltips, panels and dialogs, simulating windows of an operating system</li>
<li>DataTable Control (beta): An implementation of a dynamic table that allows for sorting by clicking on column headings, as seen in tables on native Mac OSX applications and MS Excel</li>
<li>Logger Control: A cross browser debugging tool for logging the state of your scripts and making it easy to debug in pretty much any major browser</li>
<li>Menu Family: A menu control to show menu bars, dropdown menus or even context menus working across browsers and assistive technology alike</li>
<li>Rich Text Editor (beta): A rich text editor, like the ones seen in web mail clients</li>
<li>Slider Control: A widget to allow users to select data by using a slider, great for example for resizing widgets</li>
<li>TabView Control: An implementation of a tabbed menu</li>
<li>TreeView Control: A tree menu like Windows Explorer</li>
</ul>

<p>All of these widgets are plug and play and can be used immediately. They all come with documentation and examples to play with and are also easily skinnable, allowing you to ensure a consistent look and feel. At <a href="http://developer.yahoo.com/yui/articles/skinning/" title="How to skin YUI components">http://developer.yahoo.com/yui/articles/skinning/</a> you&#39;ll see how the skinning works and how you can create your own look and feel.</p>

<h3>Licensing and hosting</h3>

<p>I left the best things about the YUI for last. One is the licensing model - the YUI is released under the FreeBSD license, which in short means you can use it for any product you like - commercial or non-profit - and you don&#39;t need to pay Yahoo! anything. You can also add to and change parts of the library and re-distribute it, but please make sure to mention yourself as the main contact for bug-reporting if you do.</p>

<p>The other cool feature of the YUI is that it comes as a hosted version. If you go to <a href="http://developer.yahoo.com/yui/articles/hosting/" title="YUI hosting information">http://developer.yahoo.com/yui/articles/hosting/</a> and read the instructions you&#39;ll learn that you can have the YUI hosted by Yahoo! on a distributed network. This has several benefits:</p>

<ul>
<li>You don&#39;t need to host the files yourself, which cuts down immensely on server traffic</li>
<li>Visitors to your site will get the library files delivered to them from a server closest to their physical location - which will always be faster than your server</li>
<li>The hosting servers are configured to deliver the library in a packed and cleverly cached format which means that visitors don&#39;t have to load the files over and over again when they come back to your site and the initial download is as small as can be. More detail on this can be found at <a href="http://yuiblog.com/blog/2006/10/16/pageweight-yui0114/" title="Yahoo! pageweights article">http://yuiblog.com/blog/2006/10/16/pageweight-yui0114/</a>.</li>
</ul>

<h2>To be continued</h2>

<p>This article has looked at cross browser issues, how progressive enhancement helps alleviate some of these issues, and how YUI provides a consistent implementation that you can apply to any such problem you meet in your day to day work. Go to the YUI site (<a href="http://developer.yahoo.com/yui" title="YUI homepage">http://developer.yahoo.com/yui</a>), have a look around, download the lot and see where you get stuck and what interests you the most (you&#39;ll also find examples and documentation for all the utilities and widgets at this location.) In the next article we&#39;ll dive straight in to creating a site using YUI grids, and creating some JavaScript components by progressively enhancing semantically valuable HTML.</p>

