Title: The HTML <head> element
----
Date: 2008-07-08 07:13:20
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
<li class="prev"><a href="http://dev.opera.com/articles/view/12-the-basics-of-html/" rel="prev" title="link to the previous article in the series">Previous article—The basics of HTML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" rel="next" title="link to the next article in the series">Next article—Choosing the right doctype for your HTML documents</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>This article deals with a part of the HTML document that does not get the attention it deserves: the markup that goes inside the <code>head</code> element. By the end of this tutorial you’ll have learnt about the different parts of this section and what they all do, including the doctype, <code>title</code> element, keywords and description (which are handled by <code>meta</code> elements). You’ll also learn about JavaScript and CSS styles (both internal and external) and about what not to leave in the <code>head</code>. You can <a href="headtutorial.zip" title="The demo code for this article">download some demo files here</a>, which I will refer to during the article; feel free to play with them however you like once you have finished working through it. Make sure you go through the full tutorial from start to finish, as it builds up a series of best practices to follow when dealing with the HTML <code>head</code>. Whilst each part is valid in itself, there is a conclusion at the end about the best practices that will make you reconsider some of the earlier advice. The contents are as follows:</p>

<ul>
<li><a href="#head">Head? What head are we talking about?</a></li>
<li><a href="#language">Setting the document&#x2019;s primary language</a></li>
<li><a href="#title">Judging a document by its title</a></li>
<li><a href="#meta">Adding keywords and a description</a></li>
<li><a href="#csshead">What about the looks? Adding styles</a></li>
<li><a href="#javascripthead">Adding dynamic features using JavaScript</a></li>
<li><a href="#externalfileshead"> Stop right there! Using inline CSS and JavaScript is not the greatest idea!</a></li>
<li><a href="#summary">Summary</a></li>
<li><a href="#exercises">Exercise questions</a></li>

</ul> 
<h2 id="head">Head? What head are we talking about?</h2>
<p>Earlier on in this course you learnt that a valid HTML document needs a doctype—the doctype explains what type of HTML is to be expected and instructs browsers to show the document accordingly. <a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" title="choosing the right doctype">Roger goes into the doctype in much more detail in Article 14</a>, but for now, let’s just say that the doctype specifies that the document needs an <code>html</code> element with <code>head</code> and <code>body</code> elements inside it. The <code>body</code> is where you’ll spend most of your time, as this is where all the content of the document goes. The <code>head</code> plays a seemingly less important role, because with the exception of the <code>title</code> element, nothing you put in this section is directly visible to your site’s visitors. Instead, the <code>head</code> is the place where most of the instructions for the browser happen and where you store extra information—so called <code>meta</code> information—about the document. </p>

<h2 id="language">Setting the document&#x2019;s primary language</h2>

<p>One piece of information about the document goes on the parent of the <code>head</code>, the <code>html</code> element. It is here that we define the primary natural language of the document. By natural language, I mean <em>human</em> language, such as French, Thai or even English. This helps screenreaders, because for example the word &quot;six&quot; is pronounced very differently in French and English; this may also help search engines. It&#39;s a good idea to define the primary language of a document, especially when you are writing pages for an international audience; you don&#39;t tend to see that many pages that use it, however. You set it as follows:</p>

<pre><code>&lt;html lang=&quot;en-GB&quot;&gt;
  ...
&lt;/html&gt;</code></pre>

<p class="note">Note that you can also set the language of sub sections of your document by using the <code>lang</code> attribute on other elements, for example <code>&lt;span lang=&quot;fr&quot;&gt;Bonjour&lt;/span&gt;</code>.</p>


<p>The attributes you use to set the language depend on the <code>DOCTYPE</code> of your document. The <a href="http://www.w3.org/TR/i18n-html-tech-lang/#ri20040429.092928424">W3C says</a></p>
<blockquote cite="http://www.w3.org/TR/i18n-html-tech-lang/#ri20040429.092928424">For <abbr>HTML</abbr> use the <code>lang</code> attribute only, for <abbr>XHTML</abbr> 1.0 served as text/html use the  <code>lang</code>  and  <code>xml:lang</code>  attributes, and for <abbr>XHTML</abbr> served as XML use the  <code>xml:lang</code>  attribute only.</blockquote>

<p>The language codes may be two-letter codes, such as <code>en</code> for English, four-letter codes such as <code>en-US</code> for American English, or other, less common, codes. The two-letter codes are defined in <a href="http://en.wikipedia.org/wiki/ISO_639-1"><abbr>ISO</abbr> 639-1</a>, although modern best practice dictates that you should <a href="http://www.w3.org/International/articles/language-tags/">use the IANA subtag registry for your language code definitions</a>.</p>

<h2 id="title">Judging a document by its title</h2>
<p>One of the most important elements in the <code>head</code> is the <code>title</code>. The text contained within the <code>title</code> is displayed by pretty much all user agents/browsers in the browser application title bar (the bar bordering the top of the browser window. It is the first piece of content that web users will see when they visit your site, and therefore it is very important. In addition, assistive technologies like screen readers (software that reads out web pages to users with visual impairments) give this as a first hint of what visitors can expect from the document, and a lot of search engines work similarly too, so your chances to get found on the web increase drastically when you use a good title that is human readable and contains the right keywords. Let’s take the following HTML document (<a href="headexample.html" title="title example file">headexample.html</a> in your zip file) and open it in a browser. </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;I am a title example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>You’ll see that the text in the <code>title</code> is displayed in the bar above the browser navigation as shown in Figure 1. </p>

<img src=" head-figure1.gif" alt="The title is displayed in the title bar of the web browser" />

 
<p class="comment">Figure 1: Displaying a title in a browser. </p>

<p>There are many tutorials on the Web about how to write good document titles, most of which are related to search engine optimization (SEO). Don’t get overboard and try to trick the search engines into showing up an inflated number of search results. Write a concise short information piece about what the document is. “Breeding Dogs—Tips about Alsatians” is a lot more human digestible than “Dogs, Alsatian, Breeding, Dog, Tips, Free, Pet.” </p>
<h2 id="meta">Adding keywords and a description</h2>
<p>The next thing to do might seem superfluous at first as it will never be directly visible to your visitors: adding a description and keywords. Both of these get added to the <code>head</code> inside <code>meta</code> elements, as shown in the following example taken from the Yahoo! Eurosport site (<a href="headwithmeta.html" title="meta elements example">headwithmeta.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Yahoo! UK &amp; Ireland Eurosport—Sports News | Live Scores | Sport&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;Latest sports news and live scores from Yahoo! Eurosport UK. Complete sport coverage with Football results, Cricket scores, F1, Golf, Rugby, Tennis and more.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;eurosport,sports,sport,sports news,live scores,football,cricket,f1,golf,rugby,tennis,uk,yahoo&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>If you open this document in a browser you’ll not see anything in the <code>body</code> of the document, however, if you put this document online and search engines index it, the description will be displayed as the text below the link in search engine results, as shown in Figure 2. </p>

<img src=" head-figure2.gif" alt="descriptions showing in a search engine results page" />

 
<p class="comment">Figure 2: Descriptions show up in search engine result pages. </p>

<p>This could be the crucial bit of information a possible visitor of your site was looking for and the reason for him or her to click the link. Descriptions have another use too—some browsers show the description as extra information when you add the document to your favourites, as shown in Figure 3:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/90-13-the-html-head-element/head-figure3.gif" alt="Some browsers use the description as a bookmark description" />


 
<p class="comment">Figure 3: Descriptions show up in some browsers when you add the document as a favourite. </p>

<p>So although there is no obvious immediate benefit to adding meta descriptions, they do play an important role in the success of your document. The same—to a smaller degree—applies to the keywords you added. </p>

<p>Although years of abuse by spammers made search engines not take keywords seriously any more, they can however still be a really good tool to use if you want to quickly index a lot of documents without having to scan and analyze the content. You could use the <code>meta</code> keywords for example in a content management system by writing a script that indexes them and makes your search engine a lot faster. It doesn’t hurt to provide a way of finding documents without having to analyze their content. By adding some keywords in a <code>meta</code> element you leave yourself the option to have a clever and fast search for your sites should you want to create something like this in the future. Think of keywords as small bookmarks you leave in a massive book to make it easier for yourself to find a certain section immediately without having to read through whole chapters.</p>

<h2 id="csshead">What about the looks? Adding styles</h2>

<p>The next thing you can add to the <code>head</code> of a document is style rules, defined in Cascading Style Sheets (CSS). You can embed those directly in the <code>head</code> using a <code>style</code> element, for example (<a href="headinlinestyles.html" title="CSS styled defined in the HTML head">headinlinestyles.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Breeding Dogs—Tips about Alsatians&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;How to breed Alsatians, tips on proper breeding and information about common issues with this breed.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet&quot;&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    body{
      background:#000;
      color:#ccc;
      font-family: helvetica, arial, sans-serif;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Test!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>If you open this in a browser it’ll show the “Test!” text in grey on a black background, and the font will be Helvetica or Arial, depending what your system has installed. The <code>style</code> element can also contain another attribute called <code>media</code>, which defines what kind of media will use these styles, ie do you want these styles used when viewing the document on a computer screen, on a handheld device, or when printed out? There are several media types to choose from, the most useful being: </p>

<ul>
<li><code>screen</code>—for displays on monitors. </li>
<li><code>print</code>—to define what a printout of the document should look like. </li>
<li><code>handheld</code>—to define the look and feel of the document on mobile devices and other handheld devices.</li>
<li><code>projection</code>—for presentations done in HTML.</li>
</ul>
<p>If you for example want to override the colours used on the screen and use a larger font size to make the page better for printing, you can add another style block below the first one, with a <code>media</code> attribute of <code>print</code>, as seen below (check out the full code in <a href="headinlinestylesmedia.html" title="Example of using a print media stylesheet">headinlinestylesmedia.html</a>): </p>

<pre>&lt;style type=&quot;text/css&quot; media=&quot;print&quot;&gt;
  body{
    background:#fff;
    color:#000;
    font-family: helvetica, arial, sans-serif;
    font-size:300%;
  }
&lt;/style&gt;</pre>

<p>Now when you go to print this web page, the browser knows to use the print stylesheet for printing the document, and not the screen styles. Check this out by loading <a href="headinlinestylesmedia.html" title="Example of using a print media stylesheet">headinlinestylesmedia.html</a> and selecting print preview, as shown in Figure 4: </p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/90-13-the-html-head-element/head-figure4.gif" alt="The same page with print and screen style sheets applied" />

 
<p class="comment">Figure 4: A screen and a print style sheet. </p>
<h2 id="javascripthead">Adding dynamic features using JavaScript</h2>
<p>Another thing you can add to the <code>head</code> is scripts that get executed by the browser—so called “client side scripts”—written in JavaScript. As you learned in <a href="http://dev.opera.com/articles/view/4-the-web-standards-model-html-css-a/" title="the web standards model">Article 4</a>, JavaScript adds dynamic behavior to the static HTML document, for example animation effects, or form data validation, or other things being triggered when the user performs certain actions. </p>

<p>You add JavaScript to a document using the <code>script</code> element. When a browser encounters one of these, it’ll drop everything else and pause parsing of the rest of the document while it tries to execute the code inside it. This means that when you want to make sure that your JavaScript is available before the main document loads, you need to add it to the <code>head</code>. For example, you can give the visitor a warning that a certain link will take them to another server with the following script (<a href="headscript.html" title="Simple JavaScript example">headscript.html</a>): </p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Breeding Dogs—Tips about Alsatians&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;How to breed Alsatians, tips on proper breeding and information about common issues with this breed.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet&quot;&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
    body{
      background:#000;
      color:#ccc;
      font-family: helvetica, arial, sans-serif;
    }
    a {color:#fff}
  &lt;/style&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;print&quot;&gt;
    body{
      background:#fff;
      color:#000;
      font-family: helvetica, arial, sans-serif;
      font-size:300%;
    }
  &lt;/style&gt;
  &lt;script&gt;
    function leave(){
      return confirm(&quot;This will take you to another site,\n are you sure you want to go?&quot;)
    }
  &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
Test!
&lt;a href=&quot;http://dailypuppy.com&quot; onclick=&quot;return leave()&quot;&gt;The Daily Puppy&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>If you open this example in your web browser and click the link you’ll get asked to confirm your action. This is just a quick example of scripting and is far from what is best practice these days. Other tutorials later on in this course will deal with JavaScript best practices and teach you JavaScript techniques in depth, but don’t worry about it for now. </p>
<h2 id="externalfileshead">Stop right there! Inline CSS and JavaScript is not too clever!</h2>
<p>Strong words, I know, but there is one thing you need to remember when you build web sites: the best thing to do is to re-use your code as much as possible. Adding site-wide styles and scripts into each and every one of your pages doesn’t make much sense—on the contrary, it makes it harder to maintain a complete site and bloats the individual documents unnecessarily. </p>

<p>It is much better to put your styles and scripts in external files, and import them into your HTML files where needed, so you only need to update them in one place if changes need to be made. For your JavaScript, you do this using <code>script</code> elements that have no script inside them, but instead link to an external file using a <code>src</code> attribute, as seen in the code below (<a href="externaljs.html" title="External JavaScript file example">externaljs.html</a>): </p> 

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Breeding Dogs—Tips about Alsatians&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;How to breed Alsatians, tips on proper breeding and information about common issues with this breed.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet&quot;&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;screen&quot;&gt;
    body{
      background:#000;
      color:#ccc;
      font-family: helvetica, arial, sans-serif;
    }
    a {color:#fff}
  &lt;/style&gt;
  &lt;style type=&quot;text/css&quot; media=&quot;print&quot;&gt;
    body{
      background:#fff;
      color:#000;
      font-family: helvetica, arial, sans-serif;
      font-size:300%;
    }
  &lt;/style&gt;
  &lt;script src=&quot;http://forum-test.oslo.osa/kirby/content/articles/90-13-the-html-head-element/leaving.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
Test!
&lt;a href=&quot;http://dailypuppy.com&quot; onclick=&quot;return leave()&quot;&gt;The Daily Puppy&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>It is not as easy with CSS. The <code>style</code> element does not have a <code>src</code> attribute, so you need to use the <code>link</code> element instead—it has an <code>href</code> attribute that specifies an external CSS file to import, and a <code>media</code> attribute to define if these styles should be used for screen, print etc, similar to what we saw earlier on. By putting both CSS and JavaScript into their own files you can cut down the length of the <code>head</code> immensely, as shown below (<a href="externalall.html" title="External JavaScript and CSS example">externalall.html</a>):</p>

<pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Breeding Dogs—Tips about Alsatians&lt;/title&gt;
  &lt;meta name=&quot;description&quot; content=&quot;How to breed Alsatians, tips on proper breeding and information about common issues with this breed.&quot;&gt;
  &lt;meta name=&quot;keywords&quot; content=&quot;Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; href=&quot;styles.css&quot;&gt;
  &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;print&quot; href=&quot;printstyles.css&quot;&gt;
  &lt;script src=&quot;http://forum-test.oslo.osa/kirby/content/articles/90-13-the-html-head-element/leaving.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
Test!
&lt;a href=&quot;http://dailypuppy.com&quot; onclick=&quot;return leave()&quot;&gt;The Daily Puppy&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>The other benefits of keeping styles and scripts in their own files are: </p>

<ol>
<li>You make it both faster and easier for your site visitors, because although a few extra files are downloaded, the style and script information doesn&#39;t need to be repeated in each web page file (it is just downloaded once, in the separate script/style files) so each page file downloaded will be smaller. In addition, the CSS and JavaScript files will be cached (stored temporarily on your local machine), so that the next time you access the site, the files will be on your computer already, meaning they don’t need to be downloaded again.</li>
<li>Next comes ease of maintenance. The style and script for the whole site—which could be thousands of documents—are in one single location, so if you need to change something you only need to change one file, and not thousands.</li>
</ol>

<h2 id="summary">Summary</h2>
<p>That’s it for this article. You’ve learnt about all the different parts that can be in the head section of HTML documents. They are: </p>

<ul>
<li>The <code>title</code>, which introduces the document.</li>
<li><code>meta</code> elements, which contain a description of the content of this document and keywords allowing for easier indexing of the content.</li>
<li><code>link</code> elements, which point to external CSS files.</li>
<li><code>script</code> elements that point to external JavaScript files.</li>
</ul>
<p>Making sure that all of these are correct will result in your document being fast, and easy to find and understand. </p>

<h2 id="exercises">Exercise questions</h2>
<p>As usual, here are some exercise questions to test your comprehension of the subject area.</p>
<ul>
<li>Why does it make sense to add a description in a <code>meta</code> element if it doesn’t get displayed on the screen? </li>
<li>What is the benefit of adding JavaScript to the <code>head</code> of a document and not in the <code>body</code>?</li>
<li>How can you benefit from your browser’s caching and what do you need to do to make it work for you?</li>
<li>As search engines give the title of a document much love, wouldn’t it be useful to cram it full of relevant keywords? What are the downsides of this practice?</li>
<li>As the title display can be a bit boring, wouldn’t it make sense to bold some words with a <code>b</code> element? Is that possible?</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/12-the-basics-of-html/" rel="prev" title="link to the previous article in the series">Previous article—The basics of HTML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/14-choosing-the-right-doctype-for-your/" rel="next" title="link to the next article in the series">Next article—Choosing the right doctype for your HTML documents</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>

<div class="right">

<img src="http://forum-test.oslo.osa/kirby/content/articles/90-13-the-html-head-element/chrisheilmann.jpg" alt="Picture of the article author Chris Heilmann" />
<p class="comment">Photo credit: <a href="http://www.flickr.com/photos/bluesmoon/1545636474/">Bluesmoon</a></p>

</div>

<p>Chris Heilmann has been a web developer for ten years, after dabbling in radio journalism. He works for Yahoo! in the UK as trainer and lead developer, and oversees the code quality on the front end for Europe and Asia.</p>

<p>Chris blogs at <a href="http://wait-till-i.com">Wait till I come</a>  and is available on many a social network as &#x201C;codepo8&#x201D;.</p>
      

