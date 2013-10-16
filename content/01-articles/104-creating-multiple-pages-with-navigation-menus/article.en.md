Title: Creating multiple pages with navigation menus
----
Date: 2008-09-26 05:41:52
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
<li class="prev"><a href="http://dev.opera.com/articles/view/22-generic-containers/" rev="prev" title="link to the previous article in the series">Previous article—Generic containers</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/24-validating-your-html/" rel="next" title="link to the next article in the series">Next article—Validating your HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>
 
 
  <h2>Introduction</h2>

  <p>In this article I’ll talk about web site navigation and menus. You’ll learn about different types of menus and how to create them in HTML. I’ll also touch on the subject of menu usability and accessibility. I won’t go into styling menus yet, but this article will lay the foundations for a corresponding CSS tutorial later in the course. There are <a href="menu_examples.zip">code examples to download</a> to go along with this article—I will refer to these throughout the tutorial. The table of contents for this article is as follows:</p>
  
  <ul>
  <li><a href="#menutools">Your HTML menu tools—links, anchors and lists</a></li> 
  <li><a href="#flexibility">The need for flexibility</a></li>
  <li><a href="#typesofmenu">Different types of menu</a>
  
  <ul>
    <li><a href="#inpagenav">In-page navigation (table of contents)</a></li>
    <li><a href="#sitenavigation">Site navigation</a>
    <ul>
    <li><a href="#youarehere">Providing visitors with a “You are here” feeling</a></li>
    <li><a href="#howmanyoptions">How many options should you give users at one time?</a></li>
   
    </ul>
    </li>
    <li><a href="#contextualmenu">Contextual menus</a></li>
    <li><a href="#sitemaps">Sitemaps</a></li>
    <li><a href="#pagination">Pagination</a></li>
  </ul>
  
  </li>
  
  <li><a href="#imagemapsforms">When lists are not enough—image maps and forms</a>
  
  <ul>
   <li><a href="#hotspots">Setting hotspots with image maps</a></li>
   <li><a href="#forms">Saving screen space and preventing link overload with forms</a></li>
  </ul>
  
  </li>
  <li><a href="#skiplinks">Where to put the menu, and offering options to skip it</a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
  </ul>

  <h2 id="menutools">Your HTML menu tools—links, anchors and lists</h2>

  <p>There are several different types of menu and navigation idioms to consider in HTML, all connected closely with <code>link</code> and <code>a</code> (anchor) elements. In a nutshell:</p>
  
   <ul>
    <li><code>link</code> elements describe relationships across several documents. You can for example tell a user agent that the current document is part of a larger course that spans several documents and what other document is the table of contents.</li>
    <li>Anchors (aka <code>a</code> elements) allow you to either link to another document or to a certain section of the current document. These don’t get automatically followed by the user agent; instead they’ll be activated by your visitors by whatever mean available to them (mouse, keyboard, voice recognition, switch access…)</li>
  </ul>
  
  <p>If you haven’t read the <a href="http://dev.opera.com/articles/view/18-html-links-let-s-build-a-web/">links article</a> and <a href="http://dev.opera.com/articles/view/16-html-lists/">lists article</a> earlier in the course, I’d like you to go back and have a read as I build on some of the information given there to avoid repetition.</p>

  <p>Anchors/links do not just become menus on their own—you need to structure and style them to let both the browser and your users know that their function is as a navigation menu, not just a set of random links. If the order of the pages is not important you can use an unordered list as in this <a class="codeExample" href="unordered.html">unordered list menu example</a>.</p>

<p>Note that I’ve put an <code>id</code> on the <code>ul</code> elements. The reason for that is to provide a hook for styling it with CSS and adding special behaviour with JavaScript later on. An <code>id</code> is a very inexpensive way to allow other technologies to single out a certain element in HTML.</p>

<p>If the order in which the visitors go through all the documents is important then you need to use an ordered list. If for example you have a multi-document online course where one tutorial builds on top of the last one, you could use an ordered list like in this <a class="codeExample" href="ordered.html">ordered list example</a>.</p>

<p>Using lists to create menus is great for several reasons:</p>

<ul>
  <li>All the HTML is contained in a single list element (<code>ul</code> for example), which means you can use the cascade in CSS to style each differently  and it is easy to reach the elements in JavaScript going from the top level down.</li>
  <li>Lists can be nested, which means you can easily create several levels of navigation hierarchy.</li>
  <li>Even without any styling applied to the list, the browser rendering of the HTML makes sense and it is easy to grasp for a visitor that these links belong together and make up one logical unit.</li>
</ul>

<p>You nest lists by embedding the nested list inside the <code>li</code> element, not after it. you can see a <a class="codeExample" href="nesting.html">correct and an incorrect example here</a>.</p>

<p>Notice that browsers display both examples in the same way. Browser display should never be an indicator for the quality of your code. An invalid HTML construct like the wrong example shown on the above example page will be hard to style, add behaviour to with JavaScript or convert to another format. The structure of nested ULs should always be <code>&lt;ul&gt;&lt;li&gt;&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;</code> and never <code>&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/ul&gt;</code>.</p>

<h2 id="flexibility">The need for flexibility</h2>

<p>The menu of a site is unlikely to stay the same for very long—sites tend to grow organically as functionality is added and the user base grows, so you should create menus with scope for menu items to be added and removed as the site progresses, and for menus to be translated into different languages (so links will change in length). Also, you may well find yourself working on sites where the HTML for menus is created dynamically using server-side languages rather than with static HTML. This does not however mean that knowing HTML will become obsolete; it will actually become more important as this knowledge will still be needed to create HTML templates for the server-side script to work with.</p>

<h2 id="typesofmenu">Different types of menu</h2>

<p>There are several types of menus you will be called upon to create in HTML, as you work on different web sites. Most of these can be created with lists, although sometimes interface restrictions force you to go another route (more on that later). The list-based menus you will be likely to create are as follows:</p>

<ul>
  <li>In-page navigation: for example a table of contents for a single page, with links pointing to the different sections on the page.</li>
  <li>Site navigation: a navigation bar for your whole web site (or a subsection of it), with links pointing to different pages on the same site.</li>
  <li>Content-contextual navigation: a list of links that point to pages closely related to the subject of the page you’re currently on, either on the same site, or different ones.</li>
  <li>Sitemaps: large lists of links that point to all the different pages of a web site, grouped into related sublists to make them easier to make sense of.</li>
  <li>Pagination: links pointing to other pages that make up further sections or parts of a whole, along with the current page, for example part 1, part 2, and part 3 of an article.</li>
</ul>

<h3 id="inpagenav">In-page navigation (table of contents)</h3>

<p>I already covered this to a certain degree in the tutorial about links, but here’s a more in-depth description of what in-page navigation means and what you need to make it work.</p>

<p>In the <a class="codeExample" href="inpagenavigation.html">example related to this in-page navigation section</a> I have used a list of links that point to anchors further down the page. In order to connect the anchors you use an <code>id</code> attribute on the elements that are to be navigated to and an <code>href</code> attribute consisting of a hash sign followed by the same name as the <code>id</code> value of the anchor you want this link to point to. Each section of the page also has a “back to menu” link that works in the same way, but points back to the menu instead.</p>

<p>Technically, this is all you need to make this kind of navigation work, however, there is an annoying bug in Internet Explorer that forces you do to a bit more.</p>

<p>You can try this bug out yourself:</p>
<ol>
  <li>Open the document in Internet Explorer 6 or 7</li>
  <li>Do not use a mouse; instead use the keyboard to navigate the document. You can hit the tab key to jump from link to link and the enter key to activate a link—in this case to jump to the section it points to.</li>
  <li>Seemingly all is well when you do that—the browser scrolls down to where you wanted to go.</li>
  <li>If you hit the tab key again the right behaviour would be for a browser to take you to (give focus to) the first link inside the section you chose. Internet Explorer, however, will take you back to the start of the menu at the top of the page!</li>
</ol>

<p>The way around this is terribly confusing and deals with a special property of Internet Explorer called <code>hasLayout</code>. You can trigger this in several ways, all of which are explained in <a href="http://www.satzansatz.de/cssd/onhavinglayout.html">Ingo Chao’s excellent article &quot;On having layout&quot;</a>. The easiest way is to <a class="codeExample" href="inpagenavigationmsiefix.html">set the width of the <code>div</code> element using CSS, as in this example</a>. This is what IE needs—the anchor to be inside an element with <code>hasLayout</code>.</p>

<p>Having to do this is annoying, but it also helps you if you want to style the sections differently. It also works around one of the problems of headings in HTML: headings don’t contain the sections they apply to; it is just assumed that everything that follows until the next heading is part of the same document section. This makes it impossible to style different sections of a document without adding a <code>div</code>.</p>

<p class="note">Note that keyboard navigation around links in Opera is slightly different—try looking at the above example in Opera, then hold down <kbd>Shift</kbd> and use the arrow keys to navigate around links (it also works on form elements). This is called spatial navigation.</p>

<h3 id="sitenavigation">Site navigation</h3>

<p>Site navigation is most probably the most common menu type you’ll need to create. It is the menu of the whole site (or a subset of it), showing both the options visitors can choose from and the hierarchy of the site. Lists are perfect for this purpose, as you’ll see from this <a class="codeExample" href="home.html">site navigation example</a>.</p>

<p>There aren’t many surprises here, at least not from a pure HTML point of view. Later on in the course we’ll talk about styling these kind of menus with CSS and adding behaviour via JavaScript. One important thing to consider is how to highlight the current document in the menu, to give the user a sense of being in a particular place, and that they are moving location (even though in reality they aren’t, unless of course they are using a mobile device to browse the Web!). This is what I’ll look at next.</p>

<h4 id="youarehere">Providing visitors with a “You are here” feeling</h4>

<p>One golden rule of web development and navigation is that the current document should never link to itself but instead be obviously different to the other entries in the menu. This is important as it gives the visitors something to hold on to and tells them where they are on their journey through your site. There are edge cases like web applications, permalinks in blogs and so called “one page” web sites but in 99% of cases a link to the document you are already looking at is redundant and confusing to the visitor.</p>

<p>In the links tutorial, I stated that a link is an agreement and a liability: you offer visitors a way to reach more information that they need, but you need to be careful—you’ll lose credibility and trust if that link doesn’t give the users what they want, and/or results in unexpected behaviour. If you offer for example a link that points to the current document, activating it will reload the document. As a user this is something you don’t expect—what purpose did clicking this link have? This results in users getting confused.</p>

<p>This is the reason why the current page should never be linked to from the menu. You could remove it altogether, or even better stop it from being a link  but highlight it (eg by surrounding it with a <code>strong</code> element)—this gives users a visual clue and also tells blind visitors that this is important and the current entry in the menu—this <a class="codeExample" href="about.html">current page highlight example</a> illustrates this.</p>

<h4 id="howmanyoptions">How many options should you give users at one time?</h4>

<p>Another issue to consider is how many options you want to give visitors. A lot of menus you see on the web try to make sure that every page in the site can be accessed from one single menu. This is where scripting and CSS trickery comes in—you can make the menu more manageable by hiding parts of the menu until the users select certain areas (rollover menus, as they are sometimes called). This is clever from a technical point of view, but there are several issues with this approach:</p>

<ul>
  <li>Not all visitors will be able to use the clever trick as intended; keyboard users for example will have to tab through all links on the page just to reach the one they are looking for.</li>
  <li>You need to add a lot of HTML to each document of your site to achieve this, and a lot of it can be redundant on many pages. If I drill down three levels in your menu to reach a document I want to read, I don’t need to see options leading me to 4, 5, and 6 levels deep.</li>
  <li>You can overwhelm visitors if you present them with too many options at once—humans don’t like making decisions. Think about how long it can take you to pick a meal from a lengthy restaurant menu.</li>
  <li>If there is not much content on a page but a lot of links, search engines will assume that there is not much valid information on this page and not give the page much attention, so it is harder to find when searching the Web.</li>
</ul>

<p>All in all, it is up to you how many items you put into a menu—different designs will call for different choices—but if in doubt, you should try cutting your menus down to only the links to the main sections of the site. You can always provide further submenus where appropriate.</p>

<h3 id="contextualmenu">Contextual menus</h3>

<p>Contextual menus are links that build on the content of the current document and offer more information related to the current page you are on. A classic example is the “related articles” links you tend to get at the bottom of news articles, as shown in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/104-23-creating-multiple-pages-with-navigation-menus/menus-figure1.png" alt="Screenshot of a contexual menu, in this case related news items" /></p>
<p class="comment">Figure 1: An example of a contextual menu—a news article offering related news items at the bottom.</p>

<p>This is a slightly different thing to context menus in software user interfaces, which offer different options depending on where they are acccessed (like the right-click or Ctrl + click menus you find in desktop applications that offer specific options depending on where your mouse pointer is at the time).</p>

<p>Contextual menus on web sites are a great way to promote content on other parts of the site; in terms of HTML they are just another list of links.</p>

<h3 id="sitemaps">Sitemaps</h3>

<p>Sitemaps are what you might expect—maps of all the different pages (or the main sections if you are talking about really huge sites ) of your site. They allow your site’s visitors to get a glimpse of the overall structure of your site, and go anywhere they need to fast—even if the page they need is deep within your page hierarchy.</p>

<p>Both sitemaps and site searches are a great way of offering visitors a fallback option when they are lost or to offer quick access for those who are in a hurry.</p>

<p>From an HTML point of view they could either be one massive nested list full of links or—in the case of very large sites—section headings with nested links of section-specific hierarchies or even search forms for each of the sections.</p>

<h3 id="pagination">Pagination</h3>

<p>Pagination is necessary when you have to offer a way to navigate through large documents split into separate pages. You’ll find pagination for example in large image archives or search result pages (like Google or Yahoo search.)</p>
<p>Pagination is different from other types of navigation because it does normally link back to the same document—but with a link that has more information in it like which page to start from. Some examples of pagination are shown in Figure 2:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/104-23-creating-multiple-pages-with-navigation-menus/menus-figure2.png" alt="Different types of pagination menus" /></p>
<p class="comment">Figure 2: Pagination menus allow visitors to go through large sets of data without losing track of where they are.</p>


<p>The HTML is nothing ground-breaking—once again you offer a list of links with the current link (indicating which chunk of data is shown and how far down in your pagination you are) not being linked and highlighted (eg with a <code>strong</code> element).</p>

<p>The main difference to site navigation is that there is a lot of programming logic going on with pagination. Depending on where you are in the whole data set you need to show or hide the previous, next, first and last links. If you have really massive amounts of information to navigate through you also want to offer links to landmarks like 100, 200 and many more options. This is why you are not very likely to hard-code menus like these in HTML but instead create them on the server-side. This does not change the rules however—the current chunk should not link to itself and you shouldn’t offer links that lead nowhere.</p>

<h2 id="imagemapsforms">When lists are not enough—image maps and forms</h2>

<p>In 99% of the cases the ordered or unordered list is a sufficient HTML construct for menus, especially as the logical order and nesting also allows for styling with CSS very nicely. There are however some situations that may require different design techniques.</p>

<h3 id="hotspots">Setting hotspots with image maps</h3>

<p>One technique is client side image maps. Image maps turn an image into a menu by turning sections of the images into interactive areas that you can link to different documents. The <a class="codeExample" href="imagemap.html">imagemap example</a> associated with this section turns an image into a clickable menu. Try it out by following the link above and clicking the different sections of the triangle in the image shown in Figure 3.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/104-23-creating-multiple-pages-with-navigation-menus/menus-figure3.png" alt="Screenshot of an image with hotspots" /></p>
<p class="comment">Figure 3: By defining a map with area elements you can turn parts of an image into interactive elements.</p>

<p>You can turn any image into a menu by defining a map with different areas (also called hotspots). You give the map a <code>name</code> attribute and connect the image and the map using the <code>usemap</code> attribute on the <code>img</code> element. Notice that this works exactly like in-page links, which means that you need to precede the value of the <code>usemap</code> attribute with a hash.</p>
<p>Each area should have several attributes:</p>

<dl>
<dt><code>href</code></dt>
<dd>defines the URL the area should link to (which could also be a target in the same document)</dd>
<dt><code>alt</code></dt>
<dd>defines alternative text in case the image can not be found or the user agent does not support images</dd>
<dt><code>shape</code></dt>
<dd>defines the shape of the area. This can be <code>rect</code> for rectangles, <code>circle</code> for circles or <code>poly</code> for irregular shapes defined using polygons.</dd>
<dt><code>coords</code></dt>
<dd>defines the coordinates in the image that should become hotspots—these values are measured from the top left corner of the image, and can be measured in pixels or percentages. For rectangular areas you only need to define the top left and the bottom right corner; for circles you need to define the center of the circle and the radius; for polygons you need to provide a list of all the corner points.</dd>
</dl>

<p>Image maps are not much fun to define and type in as HTML, which is why  image manipulation tools like Adobe Image Ready or Fireworks offer an option to create them visually (they generate the HTML for you).</p>

<h3 id="forms">Saving screen space and preventing link overload with forms</h3>

<p>Another technique you can employ is to create a form using a <code>select</code> element. You can define your different pages as options inside the <code>select</code> element, and your visitors can choose an option then submit the form to jump to different pages. You can find a working <a class="codeExample" href="selectnavigation.html">form menu example here</a>.</p>

<p>The most obvious benefit of using this type of menu is that you can offer a lot of options without using up a lot of space on the screen, as browsers render the menu as one line —see Figure 4.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/104-23-creating-multiple-pages-with-navigation-menus/menus-figure4.png" alt="Screenshot of a menu created with a select box, open and closed" /></p>
<p class="comment">Figure 4: Select menus take up only one line on the screen.</p>

<p>You can go further with this, grouping the different menu options using the <code>optgroup</code> element, as shown in this <a class="codeExample" href="selectnavigationoptgroup.html"><code>optgroup</code> example</a>.</p>

<p>This will show a menu with non-selectable options (these are the group names) as shown in Figure 5:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/104-23-creating-multiple-pages-with-navigation-menus/menus-figure5.png" alt="Screenshot of a menu created with a select boxincluding option groups" /></p>
<p class="comment">Figure 5: Select menus can get option groups that allow you to tell visitors which options belong together.</p>

<p>This technique has the benefit of using up hardly any space but it also means that you need to have a server-side script to send the visitors to the pages they have chosen. You can also use JavaScript to make the links work, but you cannot rely on JavaScript being available—you need to make sure your users can still make use of the menu with JavaScript disabled.</p>

<p>Another, less obvious benefit is that you don’t offer too many links in the same document. This means that you don’t overwhelm users of assistive technologies (who often tend to be presented with the links in one big list). It also means that search engines don’t consider the links on your page worthless as the link to text ratio makes the document appear to be a sitemap. However, many assistive technologies can produce a map of your pages&#39; links; if your important links are all in a select menu, there is a chance that a visitor might never chance upon them. It is therefore a good idea to offer anchor links to the main destination pages and <code>select</code> element menus to offer more options. Visitors will be able to use them, but machines like search engine robots don’t need to know they exist.</p>

<h2 id="skiplinks">Where to put the menu, and offering options to skip it</h2>

<p>One last thing to mention about HTML menus is that the placement of the menu plays a large role. Consider visitors that have no scrolling mechanism or might not be able to see so rely on keyboard navigation to find their way around your site. The first thing they&#39;ll encounter when they load the document is its location and the title; next the document gets read top to bottom, stopping at each link to ask the visitor if they wanted to follow this link or not. Other options are to get a list of all the links or to jump from heading to heading.</p>

<p>If the menu is at the top of document, it will be the first thing the user will meet. Having to skip through 15 or 20 links before they get to any content could get really annoying. There are two workarounds available. First, you could put the menu after the main content of the document (you can still place it at the top the screen using CSS if you wish). Second, you could offer a skip link. Skip links are simply links placed before the main menu that link to the start of the content, allowing the visitor to skip over the menu and get to the content immediately if they wish. You can add another “go to menu” link at the end of the document to make it easy to get back up to the top. Check out the <a class="codeExample" href="skiplinks.html">skiplinks example for more of an insight</a>.</p>

<p>Skip links are not only useful for these kind of disabilities but make life a lot easier when you navigate a site on a mobile device with a small screen.</p>

<h2 id="summary">Summary</h2>

<p>In this tutorial I covered the different types of menu you are likely to have to write in HTML. I’ve talked about:</p>

<ul>
<li>Why lists with anchors are the perfect HTML construct to define a menu</li>
<li>Why it is important to not consider menus as set in stone but to expect and plan for change instead</li>
<li>In-page navigation: linking to sections of the current document and back to the menu</li>
<li>Site navigation: offering a menu that shows both the pages in the current site and their hierarchy; I also looked at why it is important to highlight the page the user is currently looking at</li>
<li>Contextual navigation: offering links to related pages elsewhere on the site (or on other sites)</li>
<li>Sitemaps: as a fallback and re-orientation tool for visitors that feel lost or come with a specific need</li>
<li>Pagination: a tool to allow visitors to navigate through a document split up into multiple pages</li>
<li>Image maps: creating graphical menus by overlaying images with hotspots</li>
<li>Form menus: providing a lot of options without using up a lot of space and without overwhelming your visitors and search engines with too many links.</li>
<li>Skip links and menu placement</li>
</ul>
<p>We will come back to some of these topics later on in the CSS section of this course to take a look at how to make these HTML constructs look good and become even more obvious as a menu for your visitors.</p>

<h2 id="exercises">Exercise Questions</h2>

<ul>
  <li>Why is it a good idea to mark up menus as lists?</li>
  <li>When you design a navigation menu, what do you need to plan for in the future?</li>
  <li>What are the benefits of using <code>select</code> elements for menus, and what are the problems?</li>
  <li>What do you define with <code>area</code> elements, and what is the <code>nohref</code> attribute of an area element for (this is not in here, you&#39;d need to do some online research)</li>
  <li>What are the benefits of skip links?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/22-generic-containers/" rev="prev" title="link to the previous article in the series">Previous article—Generic containers</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/24-validating-your-html/" rel="next" title="link to the next article in the series">Next article—Validating your HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/104-23-creating-multiple-pages-with-navigation-menus/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />

<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>
