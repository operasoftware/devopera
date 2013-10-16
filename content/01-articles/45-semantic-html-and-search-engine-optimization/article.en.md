Title: Semantic HTML and Search Engine Optimization
----
Date: 2007-10-25 18:48:09
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

or <strong>How to be a POSH SEO!</strong>

<h2>Introduction</h2>

<p>So what is POSH? No, it&#39;s not just some new clothing fashion hype amongst web designers - POSH is the acronym for Plain Old Semantic HTML. The term Semantic HTML is used for a variety of things, but it has it&#39;s origin in one objective: creating (X)HTML documents using semantic elements and attributes, as opposed to using presentational HTML. The term POSH was coined because a group of highly respected web designers wanted to have a short mnemonic to easily capture the essence of the concept of Semantic HTML.</p>

<p>In this article, I talk about why you should use POSH, exactly what you need to do to
implement it (many of you are probably doing this already, and a few of you might not
even realize it!) and how you can optimize it to improve SEO for your site. I also take
a brief look at Microformats at the end of the article.</p>

<h2>Why Should I Use Semantic HTML?</h2>

<p>You could just say: &quot;because it&#39;s the right thing for the web,&quot; but it&#39;s benefits go
far beyond that. For instance, it makes it easier for screenreaders to interpret in an
order that will make sense to users with visual impairments.</p>

<p>Secondly, SEO and Semantic HTML are close friends. They
might sometimes have conflicts of interest, which we&#39;ll get to later on in this
document, but over all, they&#39;re friends. The purpose of SEO is to help search engine
spiders better understand what a page is about and therefore categorize them better.
Since a search engine spider basically has even less capabilities than a screenreader,
it needs even more guidance in determining a page&#39;s structure and topic. Good semantic
HTML provides just that structure.</p>

<p>Semantic HTML tries to convey meaning through the words and the tags on a page. Try
thinking of it this way: the content on the page is the words you speak. The tags
provide the structure, the intonation, the pauses and even the looks on your face.
Basically, your tags are half your message.</p>

<h2>Site structure</h2>

<p>In my <a href="http://dev.opera.com/articles/view/intelligent-site-structure-for-better-se/" alt="Intelligent site structure for better SEO">previous article on dev.opera.com</a> I talked about site structures, with
the aim of providing a clear way for search engines to discover which page on your site
discusses which topic - this can be further improved by using Semantic HTML.</p>

<h2>Page Structure</h2>

<p>A page consists of a title, one or more headings, and content. This content can
contain paragraphs of text, lists, quotes, images and tables. All these types of
information have their own designated tag(s). We will treat all those tags, starting
with the headings. Use this page about sortable tables as an example to follow along
with for the coming points.</p>

<h3>Headings, from h1 to h6</h3>

<p>A good document has headings and subheadings, because headings make it easier to
determine the topic of a page. These headings can range in importance from <code>h1</code> to <code>h6</code>.
To be honest, I never use <code>h5</code> and <code>h6</code> myself. I usually have only one <code>h1</code> tag on a
content page; on portal pages, blog homepages for instance; you can have multiple <code>h1</code>&#39;s,
for all your articles for example. From a semantic perspective that might be weird, from
an SEO perspective, it&#39;s great.</p>

<p>Strict semanticists sometimes suggest that you should only have one <code>h1</code>, two <code>h2</code>&#39;s,
3 <code>h3</code>&#39;s etc. I don&#39;t agree with that, as I think it&#39;s very normal for a document to have
more than two <code>h2</code>&#39;s, in fact, this document has a lot more of them, and I think it&#39;s very
well structured.</p>

<p>Very often, designers who have heard a bit about Semantic HTML will fit the name of
a site in the header into an <code>h1</code> tag. On the homepage of a site, that might be a very
wise decision. On every other page within your site, you probably have a specific topic,
which might be related to your site&#39;s name but doesn&#39;t have to be. On those sub pages,
that topic should be in the <code>h1</code> tag, and it&#39;s wise to put the name of your site into an
<code>h4</code> tag or maybe even a <code>span</code>.</p>

<p>Search engines give the words used in the various headings more weight in determining
the topic of a page. The keyword your page is optimized for should appear at least once
in an <code>h1</code> tag, and related keywords should be used in the other headings, as illustrated
in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/45-semantic-html-and-search-engine-optimization/headingsExample.png" alt="Sample web site sceenshot showing sensible use of keywords in headings" /></p>
<p class="comment">Figure 1: Include keywords in your page headings to improve SEO for
your page.</p>

<h3>Images</h3>

<p>Images are used in all sorts of ways within documents, and you should apply the
proper semantics to them. The only really useful semantic variable on an <code>img</code> tag is the
<code>alt</code> attribute, and it should only be used if the image adds meaning to the document.
If the image is there only for decorative purposes, leave the <code>alt</code>attribute empty. Otherwise,
describe what the image is showing in the <code>alt</code> attribute.</p>

<p>If you&#39;re using images to replace text, because you want the text to look nicer
(image replacement,) make sure that you&#39;re using normal text in your HTML, and that you replace
that text with images by using CSS. You have to do this because both people with visual
impairments and search engines cannot read the text in your images. My own preferred
method of doing this is through applying the image with CSS <code>background-image</code>,
and then hiding the HTML text using a large text-indent (about <code>-1000px</code> or so does the
trick.) Be careful though: the text in the image should be exactly the same as the text
in your document. If it&#39;s not, you risk losing a lot of ranking value from the search engines.</p>

<h3>Abbreviations and acronyms</h3>

<p>You&#39;re bound to do it as a web designer - I do it in this article several times - using acronyms
or abbreviations. When you do, make sure you provide the written out version of the term using
<code>abbr</code> or <code>acronym</code> tags. That&#39;s good for your keyword density too!</p>

<h3>Tables</h3>

<p>We all know why using tables for layout out web sites is bad, and we also know what they are
supposed to be used for - displaying tabular data. Just using basic tables is a big step in the
right direction, but there are a number of ways in which you can improve your tables&#39; semantic
value, thereby improving your site&#39;s SEO further:</p>

<ul>
  <li>Use table headings (<code>th</code>) for your table&#39;s headings (it&#39;s really that easy)</li>
  <li>If you can, use the <code>thead</code>, <code>tbody</code> and <code>tfoot</code> sections to properly section your table</li>
  <li>Provide a caption for your table, describing what&#39;s in it</li>
</ul>

<p>The caption and the table headings would be a good, and usually natural place to use some of
your document&#39;s keywords.</p>

<h3>Emphasizing your meaning</h3>

<p>Remember I said earlier that tags should be the emotion of your text? This is where the real
emotion comes in: you can provide emphasis to certain words using <code>em</code> or 
<code>strong</code>. In the old days, people used <code>b</code> and <code>i</code> for that, but these tags are no
longer encouraged, since they imply a specific styling, whereas HTML should only describe
structure/meaning (all style should be created using CSS, of course.)</p>

<p>Search engines give more weight to any words marked up using any of these four tags. Overusing
them can do more harm than good, and actually cause a loss of emphasis, but if treated with care,
they can apply an extra dimension to your documents.</p>

<h3>A few words on (i)frames</h3>

<p>It&#39;s quite simple: don&#39;t use them. Search engines don&#39;t get them, and screenreaders have quite
a hard time using them as well.</p>

<h2>Conflicts of interest</h2>

<p>All of the above rules can be bent a little of course, which is a good thing, as sometimes it&#39;s
necessary to keep everyone at your organization happy. Say your boss wants a page to have a zappy
marketing title you&#39;d rather not have, because it doesn&#39;t exactly describe what&#39;s on the page, and
pushes your most important keyword to the second heading. If you&#39;re in a competitive area, it
might be wise to make the page look like that for your boss, yet use an <code>h2</code> for the first heading,
and an <code>h1</code> for the second.</p>

<p>The same goes for iframes and images. If someone really wants you to put a certain block of
content on a specific well-ranking page, but you don&#39;t want to risk losing focus, you could of
course put that content into an iframe or image, and choose not to provide an alternative.</p>

<p>These decisions are up to you in the end - normal semantics should be the basis of your design,
and the conflicts should only arise when you&#39;re really optimizing your pages.</p>

<h2>Not so simple semantic HTML - Microformats</h2>

<p>Microformats are also semantic HTML, but they are not exactly simple! At the moment, search
engines are hardly using microformats in their algorithms, but that might change. The hCard
especially (the HTML version of the vCard) has some very easy and obvious uses for search engines,
and I suspect that they will start using those within the next couple of years. You can apply
intelligent extra semantics within Microformats using the basic set of HTML elements - for example,
a good way of marking up your address hCard is by using the <code>address</code> tag as a container!</p>

<h2>Conclusion</h2>

<p>By using semantic HTML to mark up your pages, you can create pages that are more accessible,
both to people with disabilities, as well as to search engines. Good semantic markup helps search
engines to determine what the topic of a page is, and if used together with a good site structure,
allows you pushy up your web site rankings!</p>

