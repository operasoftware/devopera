Title: Validating your HTML
----
Date: 2008-09-26 05:42:26
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
<li class="prev"><a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/" rel="prev" title="link to the previous article in the series">Previous article—Creating multiple pages with navigation menus</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/25-accessibility-basics/" rel="next" title="link to the next article in the series">Next article—Accessibility basics</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>So you’ve written a few HTML pages, and they seem to display ok to you, but there are a few things not quite right with them. What is the best way to start finding out what is wrong, and ensure that these pages (and any future pages you write) will be displayed properly across browsers, with no errors?</p>

<p>Validation is the answer! There are many tools available, from the W3C and other places, that allow you to validate the code on your sites. The most common three validators you’ll use are:</p>

<ul>
<li><a href="http://validator.w3.org/">The W3C MarkUp Validator</a>: This looks at the (X)HTML doctype you are using for the document you give it to check, and goes through the entire document pointing out places where your HTML doesn’t follow that doctype correctly (ie where there are errors in your HTML).</li>
<li><a href="http://validator.w3.org/checklink">The W3C Link Checker</a>: This looks through the document you give it to check, and tests all the links inside that document to make sure they are not broken (ie the <code>href</code> values point to resources that don’t exist).</li>
<li><a href="http://jigsaw.w3.org/css-validator/">The W3C CSS Validator</a>: As you’ve probably guessed, this will go through a CSS (or HTML/CSS) document and check that the CSS follows the CSS specs properly.</li>
</ul>

<p>In this article, I will cover the first of these, showing you how to use it, and how to interpret the typical kinds of results the validator gives you. The link checker is very obvious, and the CSS validator should be fairly self explanatory after you’ve read this article, and the CSS articles that come later on in the course.</p>

<p>The structure of this article is as follows:</p>

<ul>
 <li><a href="#errors">Errors</a></li>
 <li><a href="#whatisvalidation">What is validation?</a></li>
 <li><a href="#whyvalidate">Why validate?</a></li>
 <li><a href="#differentbrowserinterpretation">Different browsers interpret invalid HTML differently</a>
   <ul>
     <li><a href="#quirksmode">Quirksmode</a></li>
   </ul>
 </li>
 <li><a href="#howtovalidate">How to validate your pages</a>
   <ul>
     <li><a href="#w3chtmlvalidator">The W3C HTML validator</a></li>
   </ul>
 </li>
 <li><a href="#summary">Summary</a></li>
 <li><a href="#futhertools">Further tools to check out</a></li>
 <li><a href="#exercises">Exercise questions</a></li>
</ul>
        
<h2 id="errors">Errors</h2>
    
<p>In computer programming, there are broadly speaking two kinds of problems with code:</p>
        
<ul>
<li>syntactical errors&#x2014;these are where a mistake in the writing of the code causes the computer to be unable to execute or compile the program properly.</li>
<li>programming (or logic) errors&#x2014;these are where the code does not completely reflect the intent of the programmer.</li>
</ul>
        
<p>With most programming languages, the first error is incredibly easy to spot—your program will just refuse to run or compile until the error is fixed. This makes finding and fixing these types of bugs much easier in those general head-scratching moments of “So why isn’t it doing what I want?”</p>
        
<p>HTML is not a programming language. Syntax errors in a web page do not commonly cause the web browser to refuse to open the page (although XHTML tends to be a lot stricter than HTML—at least when served as <code>application/xhtml+xml</code> or <code>text/xml</code> data, as intended—and some doctypes will disallow certain types of HTML element from being used). This is one of the biggest reasons for the rapid adoption and spread of the web.</p>

<p><a href="http://www.w3.org/People/Berners-Lee/WorldWideWeb.html">The first web browser, WorldWideWeb</a> (written by Tim Berners-Lee) was also an editor, allowing people to create web pages without learning HTML first. This editor created invalid HTML. This could have been fixed, but it established an important precedent that exists in all web browsers to this day—that allowing people access to the content is more important than complaining about errors to people that won’t understand them or be in a position to fix them.</p>
    
<h2 id="whatisvalidation">What is validation?</h2>
    
<p>Although web browsers will accept bad (<em>invalid</em> is the term we use) web pages and do their best to render the code by making a best guess of the author’s intention, it is still possible to check whether the HTML has been written correctly, and indeed it is a good idea to do so, as you’ll see below. We call this “validating” the HTML.</p>
        
<p>The validation program compares the HTML code in the web page with the rules of the accompanying <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/">doctype</a> and tells you if and where those rules have been broken.</p>
        
<h2 id="whyvalidate">Why validate?</h2>
        
<p>There is a common feeling amongst some web developers that if a web page looks fine in browsers, it doesn’t matter if it doesn’t validate. They describe validation as an ideal goal, but not something that is a black-and-white issue.</p>
        
<p>There is some wisdom in this attitude. The HTML specification is not perfect, and it is now quite out of date. Some things that are arguably correct (such as <a href="http://dev.opera.com/articles/view/16-html-lists/#beginningwithothernumbers">starting an ordered list at a point other than 1</a>) are invalid HTML. However, as the saying goes:</p>
        
<p><em>Learn the rules so you know how to break them properly.</em></p>
        
<p>There are two over-ridingly powerful reasons to validate your HTML 
        as you author it.</p>
        
<ul>
<li>You are not always perfect, and neither is your code—we all make mistakes, and your web pages will be higher quality (ie, work more consistently) if you weed out all the mistakes.</li>
<li>Browsers change. In the future, it is likely that browsers will be less forgiving when parsing invalid code, not more forgiving.</li>
</ul>
        
<p>Validation is your early-warning system about introducing bugs into your pages that can manifest in interesting and hard-to-determine ways. When a browser encounters invalid HTML, it has to take an educated guess as to what you meant to do&#x2014;and different browsers can come up with different answers.</p>

<h2 id="differentbrowserinterpretation">Different browsers interpret invalid HTML differently</h2>
        
<p>Valid HTML is the only contract you have with the browser manufacturers. The HTML specification says how you should write it, and how they should interpret your document. In recent times, standards compliance of browsers has reached the point where, as long as you write valid code, all the major browsers should interpet your code the same. This is almost always the case for HTML anyway, with other standards having a few more differences in support here and there.</p>

<p>But what if you pass a browser invalid code? What happens then? The answer is that the browser error handling comes into play to work out what to do with the code. It basically says “ok, this code doesn’t validate, so how do we present this page to the end user? Let&#39;s fill in the gaps like this!”</p>

<p>It sounds great doesn’t it? If you leave a few errors in your page, the browser will fill in the gaps for you? Not so, as each browser does things differently. For example:</p>

<pre>&lt;p&gt;&lt;strong&gt;This text should be bold&lt;/p&gt;
&lt;p&gt;Should this text be bold? How does the HTML look when rendered?&lt;/p&gt;

&lt;p&gt;&lt;a href=&quot;#&quot;&gt;&lt;/strong&gt;This text should be a link&lt;/p&gt;
&lt;p&gt;Should this text be a link? How does the HTML look when rendered?&lt;/p&gt;</pre>

<p>The errors are that the <code>strong</code> element is incorrectly nested across multiple block elements, and the anchor element is not closed. When you try to render this across different browsers, they interpret the code in very different ways:</p>

<ul>
  <li>Opera makes the subsequent elements children of the bold element.</li>
  <li>Firefox adds extra bold elements between the paragraphs, which were not present in the markup.</li>
  <li>Internet Explorer puts the text “This text should be a link” outside the anchor tag that creates the link.</li>
</ul>

<p class="note">This original version of this example can be found in Hallvord Steen’s article “<a href="http://www.thinkvitamin.com/features/dev/same-dom-errors-different-browser-interpretations">Same DOM errors, different browser interpretations</a>”—read this for a much deeper treatment of HTML errors, and some information about debugging tools.</p>

<p>None of the different browsers’ behaviours is incorrect; they’re all trying to fill in the gaps of your incorrect code.The bottom line is, <em>avoid invalid markup if at all possible in your page</em>!</p>

<h3 id="quirksmode">Quirksmode</h3>

<p>Another thing you should know about is <em>Quirksmode</em>. This is the mode the browser goes into if it encounters a page that has an incorrect doctype, or no doctype at all. In this mode, the browser takes a best guess as to what set of rules it should validate the code to, and again fills in the blanks as best it can. This mode exists really to allow older pages to still be displayed, and should never be used when authoring a new page.</p>
        
        
<h2 id="howtovalidate">How to validate your pages</h2>

<p>Now we’ve explored all the theory behind validating your HTML, I’ll talk about the easy part—the actual validation! Ok, that’s not completely accurate. Putting a URL into a validator and seeing if the page is valid or not is easy; working out what is wrong and fixing the errors is sometimes not so easy, as the error messages can sometimes be a little bit cryptic. I’ll go through some examples below.</p>

<p>The example we’ll be looking at in this section is as follows (you can also <a href="example_validation.html">download or view the HTML</a>):</p>

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;title&gt;Validating your HTML&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h2&gt;The tale of Herbet Gruel&lt;/h2&gt;
    &lt;p&gt;Welcome to my story. I am a slight whisp of a man, slender and fragile, features wrinkled and worn, eyes sunken into their sockets like rabbits cowering in their burrows. The &lt;em&gt;years have not been kind to me&lt;/em&gt;, but yet I hold no regrets, as I have overcome all that sought to ail me, and have been allowed to bide my time, making mischief as I travel to and fro, &#39;cross the unyielding landscape of the &lt;a href=&quot;http://outer-rim-rocks.co.uk&quot; colspan=&quot;3&quot;&gt;outer rim&lt;/a&gt;.&lt;/p&gt;
    
    &lt;h3&gt;Buster&lt;/h3&gt;
    &lt;p&gt;Buster is my guardian angel. Before that, he was my dog. Before that, who knows? I lost my dog many moons ago while out hunting geese in the undergrowth. A shot rang out from my rifle, and I called for Buster to collect the goose I had felled. He ran off towards where the bird had landed, but never returned. I never found his body, but I comfort myself with the thought that he did not die; rather he transcended to a higher place, and now watches over me, to ensure my well-being.
    
    &lt;h3&gt;My possessions&lt;/h3&gt;
    &lt;p&gt;A travelling man needs very little to accompany him on the road:&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;My hat full of memories&lt;/li&gt;
      &lt;li&gt;My trusty walking cane&lt;/li&gt;
      &lt;li&gt;A purse that did contain gold at one time&lt;/li&gt;
      &lt;li&gt;A diary, from the year 1874&lt;li&gt;
      &lt;li&gt;An empty glasses case&lt;/li&gt;
      &lt;li&gt;A newspaper, for when I need to look busy&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/body&gt;</pre>

<p>This simple page consists of three headings, three paragraphs, one hyperlink, and one unordered list. It uses the XHTML 1.0 Strict doctype as its rule set to validate against. There are a few errors in the document, which you’ll discover below using the W3C HTML validator.</p>

        
<h3 id="w3chtmlvalidator">The W3C HTML validator</h3>
        
<p>As mentioned above, the <a href="http://validator.w3.org/">W3C has an online validator available</a>—navigate to this by right/ctrl-clicking on the hyperlink you see here and selecting the “Open in new tab” option—it’ll be useful to be able to switch tabs to get between the validator and this article as you go through this example.</p>

<p class="note">Note that you can also validate pages in the W3C validator from directly within the Opera browser by simply right/Ctrl-clicking and selecting the “Validate” option.</p>

<p>You’ll notice that the validator has three tabs available across the top of the interface:</p>

<ul>
<li>Validate by URI: Allows you to enter the address of a page already on the internet for validation</li>
<li>Validate by File Upload: Allows you to upload an HTML file for validation</li>
<li>Validate by Direct Input: Allows you to paste the contents of an HTML file into the window for validation</li>
</ul>

<p>Whichever method you use should give you the same result; I think it’s easiest to test the example page from here by copying the full example code from above, and pasting it into the third tab along. Doing so should give you the result shown in Figure 1:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/147-24-validating-your-html/figure1.gif" alt="The results of validating the sample document is 17 errors" />
<p class="comment">Figure 1: The results of validating the sample document—17 errors!</p>

<p>This may sound worrying, especially when I tell you that there aren’t 17 errors in the document! Don’t despair—it is reporting more errors than there actually are because often an error at the top of the page will cascade, making the validator report more errors further down, as it looks like more elements are not closed or incorrectly nested. You just have to think about what the error messages mean, and look for obvious errors in the markup. Table 1 below shows all of the errors I fixed to make the page validate, along with my logic for working out what was wrong, and the fix I applied to solve the problem.</p>

<table>
<caption>Table 1: The errors I fixed to make the example page validate</caption>
  <thead>
  <tr>
    <th>Error message</th>
    <th>Logic</th>
    <th>Fix made</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Line 8, Column 461: there is no attribute &quot;colspan&quot;</td>
    <td>We know that there is a <code>colspan</code> attribute, and it is valid HTML, so why is it saying it doesn’t exist? Wait, maybe it means it is being used on an element that you shouldn’t use it on? Sure enough, it is being used on an <code>a</code> element—wrong!</td>
    <td>Removed the <code>colspan</code> attribute from the <code>a</code> element.</td>
  </tr>
  <tr>
    <td>Line 13, Column 7: document type does not allow element &quot;h3&quot; here; missing one of &quot;object&quot;, &quot;applet&quot;, &quot;map&quot;, &quot;iframe&quot;, &quot;button&quot;, &quot;ins&quot;, &quot;del&quot; start-tag . &lt;h3&gt;My possessions&lt;/h3&gt;</td>
    <td>Again, from first glance this seemes strange—the <code>h3</code> element is properly closed, and allowed in this context. You should note that often, this error message means that there is an unclosed element nearby…</td>
    <td>Added a closing <code>p</code> tag to the line above the heading in question.</td>
  </tr>
  <tr>
    <td>Line 19, Column 40: document type does not allow element &quot;li&quot; here; missing one of &quot;ul&quot;, &quot;ol&quot;, &quot;menu&quot;, &quot;dir&quot; start-tag . &lt;li&gt;A diary, from the year 1874&lt;li&gt;</td>
    <td>This one is pretty easy—you can see from the line it is pointing you to, at a glance, that the end <code>li</code> tag has a missing closing slash (/)</td>
    <td>Added a closing slash to the line in question.</td>
  </tr>
  <tr>
    <td>Line 23, Column 9: end tag for &quot;html&quot; omitted, but OMITTAG NO was specified . &lt;/body&gt;</td>
    <td>Again, it doesn’t take much to work out that this means the end <code>html</code> tag is missing. The error message explanation even starts with <q>You may have neglected to close an element</q>.</td>
    <td>Added the missing end <code>html</code> element.</td>
  </tr>
  </tbody>
</table>

<p>With these errors fixed, the validator now gives a rather satisfying success message, as shown in Figure 2:</p>  

<img src="http://forum-test.oslo.osa/kirby/content/articles/147-24-validating-your-html/figure2.gif" alt="A success message to say that all my errors have been fixed" />
<p class="comment">Figure 2: A success message to say that all my errors have been fixed.</p>

<p>This is about all there is to it really. You just need to keep your wits about you, and remember what doctype your page is being validated against. <a href="example_validation_fixed.html">Download or view a fixed version of the HTML</a></p>

<h2 id="summary">Summary</h2>

<p>After reading this article, you should be comfortable with using the online W3C validator to validate your HTML. This really is the tip of the iceberg with regards to validation—there are more complicated tools listed below, which will help you out as your pages start to get larger and more complicated.</p>

<h2 id="furthertools">Further tools to check out</h2>
<ul>

<li><a href="http://dragonfly.opera.com/app/debugmenu/DebugMenu.ini">The Opera debug menu</a></li>
<li><a href="https://www.squarefree.com/bookmarklets/validation.html">General validation bookmarklet</a></li>
<li><a href="http://chrispederick.com/work/web-developer/">The Firefox web developer toolbar extension</a></li>
<li><a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=e59c3964-672d-4511-bb3e-2d5e1db91038&amp;displaylang=en">The IE developer toolbar</a></li>
<li><a href="http://zappatic.net/safaritidy/">Safari tidy</a></li>
<li><a href="http://tidy.sourceforge.net">HTML tidy</a></li>
</ul>

<h2 id="exercises">Exercise questions</h2>

<ul>
<li>What happens when a browser parses invalid HTML?</li>
<li>What is the problem with this?</li>
<li>Will using a frameset in a document validated against the HTML 4 Strict doctype generate an error?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/23-creating-multiple-pages-with-navigat/" rel="prev" title="link to the previous article in the series">Previous article—Creating multiple pages with navigation menus</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/25-accessibility-basics/" rel="next" title="link to the next article in the series">Next article—Accessibility basics</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

 <h2>About the author</h2>

<div class="right">

<img alt="Picture of the article author Mark Norman Francis" src="http://forum-test.oslo.osa/kirby/content/articles/147-24-validating-your-html/norm.jpg" />


<p class="comment">Photo credit: <a href="http://flickr.com/photos/andybudd/98405468/" title="Original photo source">Andy Budd</a>.</p>

</div>

<p>Mark Norman Francis has been working with the internet since before the web was invented. In his last job he worked at Yahoo! as a Front End Architect for the world’s biggest website, defining best practices, coding standards and quality in web development internationally.</p>


<p>Previous to Yahoo! he worked at Formula One Management, Purple Interactive and City University in various roles including web development, backend CGI programming and systems architecture. He pretends to blog at <a href="http://marknormanfrancis.com/" title="Norms blog">http://marknormanfrancis.com/</a>.</p>
