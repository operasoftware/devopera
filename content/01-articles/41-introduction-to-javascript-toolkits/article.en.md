Title: Introduction to JavaScript toolkits
----
Date: 2007-10-08 15:08:04
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



<p>This article is a guide to the most popular JavaScript toolkits out there, giving an overview of what they can do for you, and giving a comparison of their strengths and weaknesses.</p>



<p>Sometimes during JavaScript development you will inevitably find yourself writing the same code over and over again. Perhaps you&#39;ve even put that code in a reusable library. If so, toolkits are for you. This article and its companions are intended for JavaScript developers who want to get rid of the repeated tasks in their work that ought to be simple.</p>



<p>This article is intended for people with previous JavaScript experience; for those of you who want to brush up on the JavaScript language, you might want to take a look at the following articles:</p>



<ul>

<li>Simon Willison&#39;s <a href="http://developer.mozilla.org/en/docs/A_re-introduction_to_JavaScript" alt="Simon Willison re-introduction to JavaScript">A re-introduction to JavaScript</a></li>

<li><a href="http://javascript.crockford.com/javascript.html" alt="Douglas Crockford - JavaScript the worlds most misunderstood programming language">JavaScript: The World&#39;s Most Misunderstood Programming Language</a> and other articles on JavaScript from <a href="http://www.crockford.com/" alt="Douglas Crockford homepage">Douglas Crockford&#39;s Wrrrld Wide Web</a></li>

<li>Mark &#39;Tarquin&#39; Wilton-Jones&#39; <a href="http://www.howtocreate.co.uk/tutorials/javascript/introduction" alt="Mark Wilton Jones introduction to JavaScript">Introduction to JavaScript</a></li>

</ul>



<p>I also recommend the following book:</p>



<ul>

<li>Flanagan, David (2002). JavaScript: The Definitive Guide. 4th edition. O&#39;Reilly Media</li>

</ul>



<p>JavaScript toolkits simplify your development work and save you a lot of time in many ways - they:</p>



<ul>

<li>Offer handy short cuts to the DOM, CSS styles and AJAX</li>

<li>Provide services on top of the basic web technologies, like more comprehensive AJAX handling</li>

<li>Include features like animations and effects like drag and drop, and so on</li>

<li>Hide cross browser complexity</li>
</ul>



<p>Some call them JavaScript toolkits, frameworks or libraries. Regardless of name, they are designed to make your work simpler and more productive, while abstracting away the bare bones of AJAX, animation, event handling, DOM manipulation and aspects of the JavaScript language itself.</p>



<p>We&#39;ll update this article continuously with more introductions and links, so be sure to check back often.</p>



<h2>Table of contents</h2>



<ol>

<li><a href="#comparing">Comparing the toolkits: Functionality, characteristics, and support</a>

<ul><li><a href="#functionalitydef">Functionality definition</a></li>

<li><a href="#characteristicsdef">Characteristics definition</a></li>

<li><a href="#supportdef">Available support definition</a></li>

</ul>

</li>

<li><a href="#toolkits">The toolkits</a>

<ul>
  <li><a href="#jquery">jQuery - Find things, do stuff</a></li>
  <li><a href="#dojo">Dojo - the kitchen sink approach</a></li>
</ul>

</li>

<li><a href="#tables">Toolkit comparison tables</a>

<ul><li><a href="#functionality">Functionality</a></li>

<li><a href="#characteristics">Characteristics</a></li>

<li><a href="#support">Available support</a></li>

</ul>

</li>

<li><a href="#summary">Summary</a></li>

</ol>



<h2 id="comparing">Comparing the toolkits: Functionality, characteristics, and support</h2>



<p>There are many toolkits out there, including jQuery, Yahoo UI, Prototype, DOJO, MochiKit and others. Which do you choose? Many of them offer the same functionality with different twists. Some toolkits focus on animations and effects, while others are more general.</p>



<p>In the articles that follow this one, I&#39;ll look at the functionality, characteristics and support structure available with the different toolkits. In this article I&#39;ll offer a brief summary of the different characteristics the toolkits offer, and how they compare to each other. I have defined the characteristics as shown in the following sections.</p>

<h3 id="functionalitydef">Functionality definition</h3>



<p>Functionality indicates what actual functions, widgets and other features the toolkit provides. We&#39;ll look at the following different types of functionality:</p>
<ul>
<li>DOM selection: Shorthand and mechanisms for selecting parts of the DOM, like aliases of getElementById and friends, and more comprehensive selectors.</li>
<li>DOM manipulation: Utilities for changing the DOM or style of the document. Examples include creating elements with contents or setting multiple styles with one call.</li>

<li>Event binding and handling: Frameworks for listening to and handling events. Some toolkits offer customized events in addition to the DOM events.</li>

<li>AJAX: Utilities for doing AJAX, for example by providing more comprehensive methods on top of the XMLHttpRequest object.</li>

<li>Animation: Support for animating parts of the document. Examples include expanding boxes, changing colors and drag and drop.</li>

<li>UI Widgets: Ready made and reusable UI widgets you can put into your document like trees, tabs, accordions and so on.</li>

</ul>


<h3 id="characteristicsdef">Characteristics definition</h3>



<p>By characteristics I mean emergent properties of the toolkit rather than specific functionality they provide:</p>



<ul>

<li>Extendibility: How easy it is to add functionality into the toolkit using plugins, registering functions and so on.</li>

<li>Compatibility: How well the toolkit plays with other code eg whether or not it hijacks the global space, uses a namespace and so on.</li>

<li>Modularity: Whether or not the toolkit is split up into modules or plugins that can be loaded separately.</li>

<li>Size: Physical size of the toolkit. If the toolkit is compressed, I use the compressed size.</li>

<li>Opera support: How well does the toolkit work in Opera? I&#39;m not totally objective here of course - I wouldn&#39;t recommend it to you if you couldn&#39;t use it with the Opera browser!</li>

</ul>

<h3 id="supportdef">Available Support definition</h3>



<p>By available support I basically mean how well the library is supported by the creators of the library, the community, etc:</p>


<ul>

<li>Support mechanisms: Do the makers supply some form of support service, for example an e-mail list? Is this a community effort?</li>

<li>Documentation: Up-to-date and comprehensive documentation, including APIs, demos and getting started guides.</li>

<li>Community: Is there a living community of developers around the toolkit? Is the community helpful and friendly?</li>

</ul>



<p>In follow up articles, we&#39;ll also take a look at the performance of these toolkits on various Opera browser versions like the desktop browsers, Opera for mobiles, TVs and other devices.</p>



<h2 id="toolkits">The toolkits</h2>



<p>Here we provide some summary information of each specific toolkit, to give you a taste before we move on to the dedicated articles.</p>



<h3 id="jquery">jQuery - Find things, do stuff</h3>



<p>This toolkit is based around a powerful mechanism for selecting different elements on the page. You can then apply animations, event bindings and AJAX downloads to several elements all at once. <a href="http://dev.opera.com/articles/view/jquery-write-less-do-more/" alt="My indepth article on jQuery">Read the article on jQuery</a>.</p>



<p>Resources:</p>



<ul>

<li><a href="http://jquery.com/" alt="The jQuery homepage">Website</a></li>

<li><a href="http://code.google.com/p/jqueryjs/downloads/list" alt="Download jQuery here">Download</a></li>

<li><a href="http://docs.jquery.com/Main_Page" alt="The jQuery documentation">Documentation</a></li>

</ul>

<h3 id="dojo">Dojo - the kitchen sink approach</h3>



<p>Dojo is a very expansive toolkit, providing an enormous wealth of different functionality with a very modular approach. It provides pretty much everything you could want to do in JavaScript, packed into one fairly weighty package (you can also download the modules separately if you only need a small subset of functionality). To find out more, read our <a href="http://dev.opera.com/articles/view/introducing-the-dojo-toolkit/">Introducing the Dojo toolkit</a> article.</p>



<p>Resources:</p>



<ul>

<li><a href="http://dojotoolkit.org/" alt="The Dojo homepage">Website</a></li>

<li><a href="http://dojotoolkit.org/download/" alt="Download Dojo here">Download</a></li>

<li><a href="http://dojotoolkit.org/documentation/" alt="The Dojo documentation">Documentation</a></li>

</ul>



<h2 id="tables">Toolkit comparison tables</h2>



<p>In the following tables I summarize the aspects of the different toolkits. Read the articles on the specific toolkits for more information. The comparisons will be updated as we cover more of the toolkits.</p>



<h3 id="functionality">Functionality</h3>



<table>

<tr>

<th>Feature/framework</th>

<th>jQuery</th>

<th>Dojo</th>

</tr>

<tr>

<td>DOM Selection</td>

<td>Yes</td>
<td>Yes</td>

</tr>

<tr>

<td>DOM Manipulation</td>

<td>Yes</td>
<td>Yes</td>

</tr>

<tr>

<td>Event handling</td>

<td>Yes</td>
<td>Yes</td>

</tr>

<tr>

<td>Custom events</td>

<td>Yes</td>
<td>Yes</td>

</tr>

<tr>

<td>Ajax</td>

<td>Yes</td>
<td>Yes</td>

</tr>

<tr>

<td>Animation</td>

<td>Yes</td>
<td>Yes</td>

</tr>

<tr>

<td>UI Widgets</td>

<td>Yes - jq UI</td>
<td>Yes - Dijit</td>

</tr>

<tr>

<td>Package loading</td>

<td>No</td>
<td>Yes</td>

</tr>

<tr>

<td>Accessibility tools</td>

<td>Yes with plugin</td>
<td>Yes</td>

</tr>

<tr>

<td>Internationalization tools</td>

<td>Yes with plugin</td>
<td>Yes</td>

</tr>




</table>



<h3 id="characteristics">Characteristics</h3>



<table>

<tr>

<th>Characteristic/framework</th>

<th>jQuery</th>
<th>Dojo</th>

</tr>

<tr>

<td>Extendibility</td>

<td>Very good</td>
<td>Very good</td>

</tr>

<tr>

<td>Compatibility</td>

<td>Very good</td>
<td>Very good</td>

</tr>

<tr>

<td>Modularity</td>

<td>Poor</td>
<td>Very good</td>

</tr>

<tr>

<td>Size</td>

<td>16kb</td>
<td>26kb</td>

</tr>

<tr>

<td>Support for Opera</td>

<td>Good</td>
<td>Good</td>


</tr>

<tr>

<td>Developer tools</td>

<td>No</td>
<td>Yes</td>


</tr>

<tr>

<td>License</td>

<td>MIT/GPL</td>
<td>BSD/AFL</td>


</tr>

</table>



<h3 id="support">Available Support</h3>



<table>

<tr>

<th>Support/framework</th>

<th>jQuery</th>
<th>Dojo</th>

</tr>

<tr>

<td>Commercial</td>

<td>Liferay</td>
<td>SitePen / Uxebu</td>

</tr>

<tr>

<td>Documentation</td>

<td>Very good</td>
<td>Very good</td>

</tr>

<tr>

<td>Community support</td>

<td>Very good</td>
<td>Very good</td>

</tr>

<tr>

<td>Mailing lists</td>

<td>Yes</td>
<td>Yes</td>

</tr>

<tr>

<td>Forums</td>

<td>Yes</td>
<td>Yes</td>

</tr>


<tr>

<td>IRC</td>

<td>Yes</td>
<td>Yes</td>

</tr>


</table>



<h2 id="summary">Summary</h2>



<p>In this article I&#39;ve introduced JavaScript toolkits and given a quick comparison of them, so you can get an idea of what each one offers. The article will be expanded as we go through more toolkits, and more full articles will be added to this site in time, to give you more details on each toolkit.</p>


