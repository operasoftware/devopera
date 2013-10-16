Title: What can you do with JavaScript?
----
Date: 2009-02-03 06:38:52
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
<li class="prev"><a href="http://dev.opera.com/articles/view/programming-the-real-basics/" rel="prev" title="link to the previous article in the series">Previous article—Programming - the real basics!</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/first-look-at-javascript/" rel="next" title="link to the next article in the series">Next article—Your first look at JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>Introduction</h2>

<p>Now I’ve taken you through the core essential concepts of programming, it’s time to take a step back from the details and take a high level look at what you can actually do with JavaScript — why would you want to take the time to learn such a complicated subject, and use it on your web pages?</p>

<p>This is an interesting time for me, as the usage of JavaScript has moved away from a fringe knowledge matter to a mainstream web development skill over the last few years. Right now you’d be hard pushed to get a job as a web developer without JavaScript skills.</p>

<p>Let’s push on — the structure of this article is as follows:</p>

<ul>
  <li><a href="#likejavascript">How I came to like JavaScript</a></li>
  <li><a href="#downsidejavascript">The downside of JavaScript</a></li>
  <li><a href="#javascriptcando">What JavaScript can do for you</a></li>
  <li><a href="#commonuses">Common uses of JavaScript</a>
    <ul>
      <li><a href="#domscripting">Enter DOM scripting</a></li>
      <li><a href="#otheruses">Other modern uses of JavaScript</a></li>
    </ul>
  </li>
  <li><a href="#sensiblyresponsibly">Using JavaScript sensibly and responsibly</a></li>
  <li><a href="#summary">Summary</a></li>
</ul>

<h2 id="likejavascript">How I came to like JavaScript</h2>

<p>When I first encountered JavaScript computers were slow, browsers were bad at interpreting it, and it just seemed like a bad idea in general. I came from a back-end development world — keep all your functionality in Perl and you’ll be safe.</p> 

<p>On the other hand the speed of the internet was very slow and the cost of hosting files was very high, and this is where JavaScript came in to its own. The language is executed on the computers of the users accessing, meaning that anything you can do in JavaScript will not add processing strain onto your server. This makes your sites much more responsive for the end user and less expensive for you in terms of server traffic.</p>

<p>Skip forward to the modern day, and browsers are better at implementing JavaScript, computers are much faster and bandwidth is a lot cheaper, so a lot of the negatives are less critical now. However, cutting down on server-round trips by doing things in JavaScript still results in more responsive web applications and a better user experience.</p>

<h2 id="downsidejavascript">The downside of JavaScript</h2>

<p>Even with all these improvements in recent times, there is still a catch: JavaScript is flaky. Not the language itself but the environment it is implemented in. You don’t know what computer is on the receiving end of your web page, you don’t know how busy the computer is with other things and you don’t know if some other JavaScript open in another tab of the browser is grinding things down to a halt. Until browsers in general begin having different processing resources for different tabs and windows (also known as threads), this will always remain an issue. Multiple threading is made available to a certain degree by a new HTML5 feature called Web workers, and this has reasonable browsers support.</p>

<p>In addition, JavaScript is frequently turned off in browsers because of security concerns, or because JavaScript is often used to annoy people rather than improving their experience. For example, you will still find a lot of sites that try to pop up new windows against your wishes, or cover the content with advertising until you click a link to get rid of it.</p>

<h2 id="javascriptcando">What JavaScript can do for you</h2>

<p>Let’s take a step back and count the merits of JavaScript:</p>

<ul>
  <li>JavaScript is very easy to implement. All you need to do is put your code in the HTML document and tell the browser that it is JavaScript.</li>
  <li>JavaScript works on web users’ computers — even when they are offline! </li>
  <li>JavaScript allows you to create highly responsive interfaces that improve the user experience and provide dynamic functionality, without having to wait for the server to react and show another page.</li>
  <li>JavaScript can load content into the document if and when the user needs it, without reloading the entire page — this is commonly referred to as Ajax.</li>
  <li>JavaScript can test for what is possible in your browser and react accordingly — this is called <a href="http://dev.opera.com/articles/view/41-unobtrusive-javascript/">Principles of unobtrusive JavaScript</a> or sometimes defensive Scripting.</li>
  <li>JavaScript can help fix browser problems or patch holes in browser support — for example fixing CSS layout issues in certain browsers.</li>
</ul>

<p>That is a lot for a language that until recently was laughed at by programmers favouring “higher programming languages”. One part of the renaissance of JavaScript is that we are building more and more complex web applications these days, and high interactivity either requires Flash (or other plugins) or scripting. JavaScript is arguably the best way to go, as it is a web standard, it is supported natively across browsers (more or less — some things differ across browsers, and these differences are discussed in appropriate places in the articles that follow this one), and it is compatible with other open web standards.</p> 

<h2 id="commonuses">Common uses of JavaScript</h2>

<p>The usage of JavaScript has changed over the years we’ve been using it. At first, JavaScript interaction with the site was mostly limited to interacting with forms, giving feedback to the user and detecting when they do certain things. We used <code>alert()</code> to notify the user of something (see Figure 1), <code>confirm()</code> to ask if something is OK to do or not and either <code>prompt()</code> or a form field to get user input.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/238-40-what-can-you-do-with-javascript/alert.png" alt="A form using an alert to flag up errors" /></p>
<p class="comment">Figure 1: Telling the end user about errors using an <code>alert()</code> statement was all we could do in the early days of JavaScript. Neither pretty nor subtle.</p>

<p>This lead mostly to validation scripts that stopped the user to send a form to the server when there was a mistake, and simple converters and calculators. In addition, we also managed to build highly useless things like prompts asking the user for their name just to print it out immediately afterwards.</p> 

<p>Another thing we used was <code>document.write()</code> to add content to the document. We also worked with popup windows and frames and lost many a nerve and pulled out hair trying to make them talk to each other. Thinking about most of these technologies should make any developer rock forward and backward and curl up into a fetal position stammering “make them go away”, so let&#39;s not dwell on these things — there are better ways to use JavaScript!</p>

<h3 id="domscripting">Enter DOM scripting</h3> 

<p>When browsers started supporting and implementing the <a href="http://www.w3.org/DOM/">Document Object Model (DOM)</a>, which allows us to have much richer interaction with web pages, JavaScript started to get more interesting.</p> 

<p>The DOM is an object representation of the document. The previous paragraph for example (check out its source using view source) in DOM speak is an element node with a <code>nodeName</code> of <code>p</code>. It contains three <code>child nodes</code> — a text node containing “When browsers started supporting and implementing the ” as its <code>nodeValue</code>, an element node with a <code>nodeName</code> of <code>a</code>, and another text node with a <code>nodeValue</code> of “, which allows us to have much richer interaction with web pages, JavaScript started to get more interesting.”. The <code>a</code> child node also has an attribute node called <code>href</code> with a value of “http://www.w3.org/DOM/” and a child node that is a text node with a <code>nodeValue</code> of “Document Object Model(DOM)”.</p> 

<p>You could also represent this paragraph visually using a tree diagram, as seen in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/238-40-what-can-you-do-with-javascript/DOMTree.gif" alt="A visual representation of our sample DOM tree" /></p>
<p class="comment">Figure 2: A visual representation of our sample DOM tree.</p>

<p>In human words you can say that the DOM explains both the types, the values and the hierarchy of everything in the document — you don’t need to know anything more for now. For more information on the DOM, check out the <a href="http://dev.opera.com/articles/view/45-traversing-the-dom/">Traversing the DOM article</a> later in the course.</p>

<p>Using the DOM you can:</p>

<ul>
  <li>Access any element in the document and manipulate its look, content and attributes.</li>
  <li>Create new elements and content and apply them to the document when and if they are needed.</li>
</ul>

<p>This means that we don’t have to rely on windows, frames, forms and ugly alerts any longer, and can give feedback to the user in the document in a nicely styled manner, as indicated in Figure 3.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/238-40-what-can-you-do-with-javascript/dom_errors.png" alt="A form using DOM error messages" /></p>
<p class="comment">Figure 3: Using the DOM you can create nicer and less intrusive error messages.</p>

<p>Together with event handling this is a very powerful arsenal to create interactive and beautiful interfaces.</p> 

<p>Event handling means that our code reacts to things that happen in the browser. This could be things that happen automatically — like the page finishing loading — but most of the time we react to what the user did to the browser.</p>

<p>Users might resize the window, scroll the page, press certain keys or click on links, buttons and elements using the mouse. With event handling we can wait for these things to happen and tell the web page to respond to these actions as we wish. Whereas in the past, clicking any link would take the site visitor to another document, we can now hijack this functionality and do something else like showing and hiding a panel or taking the information in the link and using it to connect to a web service.</p>

<p>Events are covered in much more detail in the <a href="http://dev.opera.com/articles/view/49-handling-events-with-javascript/">Handling events in JavaScript</a> article later in the course.</p>

<h3 id="otheruses">Other modern uses of JavaScript</h3>

<p>And this is basically what we are doing these days with JavaScript. We enhance the old, tried and true web interface — clicking links, entering information and sending off forms, etc. — to be more responsive to the end user. For example:</p>

<ul>
  <li>A sign-up form can check if your user name is available when you enter it, preventing you from having to endure a frustrating reload of the page.</li>
  <li>A search box can give you suggested results while you type, based on what you’ve entered so far (for example “bi” could bring up suggestions to choose from that contain this string, such as “bird”, “big” and “bicycle”). This usage pattern is called <a href="http://developer.yahoo.com/ypatterns/pattern.php?pattern=autocomplete">autocomplete</a>.</li>
  <li>Information that changes constantly can be loaded periodically without the need for user interaction, for example sports match results or stock market tickers.</li>
  <li>Information that is a nice-to-have and runs the risk of being redundant to some users can be loaded when and if the user chooses to access it. For example the navigation menu of a site could be 6 links but display links to deeper pages on-demand when the user activates a menu item.</li>
  <li>JavaScript can fix layout issues. Using JavaScript you can find the position and area of any element on the page, and the dimensions of the browser window. Using this information you can prevent overlapping elements and other such issues. Say for example you have a menu with several levels; by checking that there is space for the sub-menu to appear before showing it you can prevent scroll-bars or overlapping menu items.</li>
  <li>JavaScript can enhance the interfaces HTML gives us. While it is nice to have a text input box you might want to have a combo box allowing you to choose from a list of preset values or enter your own. Using JavaScript you can enhance a normal input box to do that.</li>
  <li>You can use JavaScript to animate elements on a page — for example to show and hide information, or highlight specific sections of a page — this can make for a more usable, richer user experience. There is more information on this in the <a href="http://dev.opera.com/articles/view/51-javascript-animation/">JavaScript animation article</a> later on in the course.</li>
</ul>

<h2 id="sensiblyresponsibly">Using JavaScript sensibly and responsibly</h2>

<p>There is not much you cannot do with JavaScript — especially when you mix it with other technologies like <a href="http://dev.opera.com/articles/view/html-5-canvas-the-basics/">Canvas</a> or <a href="http://dev.opera.com/articles/svg/">SVG</a>. However, with great power comes great responsibility, and you should always remember the following when using JavaScript.</p>

<ul>
  <li>JavaScript might not be available — this is easy to test for so not really a problem. Things that depend on JavaScript should be created with this in mind however, and you should be careful that your site does not break (ie essential functionality is not available) if JavaScript is not available.</li>
  <li>If the use of JavaScript does not aid the user in reaching a goal more quickly and efficiently you are probably using it wrong.</li>
  <li>Using JavaScript we often break conventions that people have got used to over the years of using the web (for example clicking links to go to other pages, or a little basket icon meaning “shopping cart”). Whilst these usage patterns might be outdated and inefficient, changing them still means making users change their ways — and this makes humans feel uneasy. We like being in control and once we understand something, it is hard for us to deal with change. Your JavaScript solutions should feel naturally better than the previous interaction, but not so different that the user cannot relate to it via their previous experience. If you manage to get a site visitor saying “ah ha — this means I don’t have to wait” or “Cool — now I don’t have to take this extra annoying step”— you have got yourself a great use for JavaScript.</li>
  <li>JavaScript should never be a security measure. If you need to prevent users from accessing data or you are likely to handle sensitive data then don’t rely on JavaScript. Any JavaScript protection can easily be reverse engineered and overcome, as all the code is available to read on the client machine. Also, users can just turn JavaScript off in their browsers.</li>
</ul>

<h2 id="summary">Summary</h2>

<p>JavaScript is a wonderful technology to use on the web. It is not <em>that</em> hard to learn and it is very versatile. It plays nicely with other web technologies — such as HTML and CSS — and can even interact with plugins such as Flash. JavaScript allows us to build highly responsive user interfaces, prevent frustrating page reloads and even fix support issues for CSS. Using the right browser add-ons (such as Google Gears or Yahoo Browser Plus) you can even use JavaScript to make online systems available offline and sync automatically once the computer goes online.</p>

<p>JavaScript is also not restricted to browsers. The speed and small memory footprint of JavaScript in comparison to other languages brings up more and more uses for it — from automating repetitive tasks in programs like Illustrator, up to using it as a server-side language with a standalone parser. The future is wide open; no matter what you do as a web developer in the nearer future, I am quite sure you will have to work with JavaScript sooner or later.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/programming-the-real-basics/" rel="prev" title="link to the previous article in the series">Previous article—Programming - the real basics!</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/first-look-at-javascript/" rel="next" title="link to the next article in the series">Next article—Your first look at JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/238-40-what-can-you-do-with-javascript/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />
<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>
