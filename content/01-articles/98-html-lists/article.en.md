Title: HTML lists
----
Date: 2008-07-08 07:14:42
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
<li class="prev"><a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/" rel="prev" title="link to the previous article in the series">Previous article—Marking up textual content in HTML</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/17-images-in-html/" rel="next" title="link to the next article in the series">Next article—Images in HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>Lists are used to group related pieces of information together, so they are clearly associated with each other and easy to read. In modern web development lists are workhorse elements, frequently used for navigation as well as general content. </p>
<p>Lists are good from a structural point of view as they help create a well-structured, more accessible, easy-to-maintain document. They are also useful for a purely practical reason—they give you extra elements to attach CSS styles to, for a whole variety of styling (we&#39;ll get on to CSS later in the course - check out the <a href="http://dev.opera.com/articles/view/32-styling-lists-and-links/">Styling lists and links article</a> first, and then visit the <a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">table of contents</a> for the full list of CSS articles available.). </p>
<p>In this article, I will cover the different list types available in HTML, when and how you should use them, with a couple of practical examples at the end. The table of contents is as follows (and look — it&#39;s a list!):</p>

<ul>
<li><a href="#threetypes">The three list types</a>
<ul>
<li><a href="#unordered">Unordered lists</a>
  <ul>
    <li><a href="#unorderedmarkup">Unordered list markup</a></li>
  </ul>
</li>
<li><a href="#ordered">Ordered lists</a>
<ul>
<li><a href="#orderedmarkup">Ordered list markup</a></li>
<li><a href="#beginningwithothernumbers">Beginning ordered lists with numbers other than 1</a></li>
</ul>
</li>
<li><a href="#definition">Definition lists</a></li>
</ul>
</li>

<li><a href="#choosinglists">Choosing between list types</a></li>
<li><a href="#listsemantics">The difference between HTML lists and text</a></li>
<li><a href="#nestinglists">Nesting lists</a></li>

<li><a href="#stepbystep">Step by step example</a>
<ul>
<li><a href="#mainpage">Main page markup</a></li>
<li><a href="#recipepage">The recipe page</a></li>
<li><a href="#recipepagemarkup">Recipe page markup</a></li>
</ul>
</li>

<li><a href="#summary">Summary</a></li>
<li><a href="#furtherreading">Further reading</a></li>
<li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="threetypes">The three list types</h2>

<p>There are three list types in HTML: </p>
<ul>
  <li><strong>unordered list</strong>—used to group a set of related items, in no particular order.</li>
  <li><strong>ordered list</strong>—used to group a set of related items, in a specific order.</li>
  <li><strong>definition list</strong>—used to display name/value pairs such as terms and their definitions, or times and events.</li>
</ul>

<p>Each one has a specific purpose and meaning—they are not interchangeable! </p>

<h3 id="unordered">Unordered lists </h3>

<p>Unordered lists, or bulleted lists, are used when a set of items can be placed in any order. An example is a shopping list:  </p>
<ul>
  <li>milk</li>
  <li>bread</li>
  <li>butter</li>
  <li>coffee beans</li>
</ul>

<p>These items are all part of one list, however, you could put the items in any order and the list would still make sense: </p>
<ul>
  <li>bread</li>
  <li>coffee beans </li>
  <li>milk</li>
  <li>butter</li>
</ul>
<p>You can use CSS to change the bullet to one of several default styles, use your own image, or even display the list without bullets—we’ll look at how to do that in the <a href="http://dev.opera.com/articles/view/32-styling-lists-and-links/">Styling lists and links article</a>.</p>
<h4 id="unorderedmarkup">Unordered list markup </h4>
<p>Unordered lists use one set of <code>&lt;ul&gt;&lt;/ul&gt;</code> tags, wrapped around many sets of <code>&lt;li&gt;&lt;/li&gt;</code>:</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;bread&lt;/li&gt;
  &lt;li&gt;coffee beans&lt;/li&gt;
  &lt;li&gt;milk&lt;/li&gt;
  &lt;li&gt;butter&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<h3 id="ordered">Ordered lists</h3>

<p>Ordered lists, or numbered lists, are used to display a list of items that need to be placed in a specific order. An example would be cooking instructions, which must be completed in order for the recipe to work:</p>
<ol>
  <li>Gather ingredients</li>
  <li>Mix ingredients together</li>
  <li>Place ingredients in a baking dish</li>
  <li>Bake in oven for an hour</li>
  <li>Remove from oven</li>
  <li>Allow to stand for ten minutes</li>
  <li>Serve</li>
</ol>
<p>If the list items were moved around into a different order, the information would no longer make sense:</p>
<ol>
  <li>Gather ingredients </li>
  <li>Bake in oven for an hour</li>
  <li>Remove from oven</li>
  <li>Serve</li>
  <li>Place ingredients in a baking dish</li>
  <li>Allow to stand for ten minutes</li>
  <li>Mix ingredients together</li>
</ol>
<p>Ordered lists can be displayed with one of several numbering or alphabetic systems—that is, letters or numbers. The default in most browsers is decimal numbers, but there are more options:</p>
<ul>
  <li>Letters
    <ul>
      <li>Lowercase ascii letters (a, b, c…) </li>
      <li>Uppercase ascii letters (A, B, C…). </li>
      <li>Lowercase classical Greek: (έ, ή, ί…) </li>
    </ul>
  </li>
  <li>Numbers
    <ul>
      <li>Decimal numbers (1, 2, 3…) </li>
      <li> Decimal numbers with leading zeros (01, 02, 03…)</li>
      <li> Lowercase Roman numerals (i, ii, iii…) </li>
      <li> Uppercase Roman numerals (I, II, III…)</li>
      <li>Traditional Georgian numbering (an, ban, gan…) </li>
      <li>Traditional Armenian numbering (mek,
        yerku, yerek…) </li>
    </ul>
  </li>
</ul>
<p>Again, you can use CSS to change the style of your lists.</p>

<h4 id="orderedmarkup">Ordered list markup </h4>

<p>Ordered lists use one set of <code>&lt;ol&gt;&lt;/ol&gt;</code> tags, wrapped around many sets of <code>&lt;li&gt;&lt;/li&gt;</code>:</p>
<pre><code>&lt;ol&gt;
  &lt;li&gt;Gather ingredients&lt;/li&gt;
  &lt;li&gt;Mix ingredients together&lt;/li&gt;
  &lt;li&gt;Place ingredients in a baking dish&lt;/li&gt;
  &lt;li&gt;Bake in oven for an hour&lt;/li&gt;
  &lt;li&gt;Remove from oven&lt;/li&gt;
  &lt;li&gt;Allow to stand for ten minutes&lt;/li&gt;
  &lt;li&gt;Serve&lt;/li&gt;
&lt;/ol&gt;</code></pre>

<h4 id="beginningwithothernumbers">Beginning ordered lists with numbers other than 1</h4>

<p>It is possible to get an ordered list to start with a number other than 1 (or i, or I, etc.). This is done using the <code>start</code> attribute, which takes a numeric value, even if you’re using CSS to change the the list counters to be alphabetic or roman using the <code>list-style-type</code> property. This is useful if you have a single list of items, but you want to break the list up with some kind of note, or some other related information. For example, we could do this with the previous example:</p>

<pre><code>&lt;ol&gt;
  &lt;li&gt;Gather ingredients&lt;/li&gt;
  &lt;li&gt;Mix ingredients together&lt;/li&gt;
  &lt;li&gt;Place ingredients in a baking dish&lt;/li&gt;
&lt;/ol&gt;

&lt;p class=&quot;note&quot;&gt;Before you place the ingredients in the baking dish, preheat the oven to 180 degrees centigrade/350 degrees farenheit in readiness for the next step&lt;/p&gt;

&lt;ol start=&quot;4&quot;&gt;
  &lt;li&gt;Bake in oven for an hour&lt;/li&gt;
  &lt;li&gt;Remove from oven&lt;/li&gt;
  &lt;li&gt;Allow to stand for ten minutes&lt;/li&gt;
  &lt;li&gt;Serve&lt;/li&gt;
&lt;/ol&gt;</code></pre>

<p>This gives the following result:</p>

<ol>
  <li>Gather ingredients</li>
  <li>Mix ingredients together</li>
  <li>Place ingredients in a baking dish</li>
</ol>

<p class="note">Before you place the ingredients in the baking dish, preheat the oven to 180 degrees centigrade/350 degrees farenheit in readiness for the next step</p>

<ol start="4">
  <li>Bake in oven for an hour</li>
  <li>Remove from oven</li>
  <li>Allow to stand for ten minutes</li>
  <li>Serve</li>
</ol>

<p class="note">Note that this attribute is actually deprecated in the latest version of the HTML spec, which means that it will cause your pages to not validate when using strict doctypes. This may seem odd, as the attribute makes sense, and there is no <em>direct</em> CSS equivalent. This shows that validating HTML is an ideal goal to follow, but not always the absolute be all and end all. In addition, we have another leg to stand on — the start attribute is no longer deprecated in the HTML5 spec (the <a href="http://www.w3.org/TR/2008/WD-html5-diff-20080122/">HTML 5 differences from HTML4</a> document attests to this). If you want to make use of such functionality in an HTML4 strict page, and it absolutely has to validate, you can do it using <a href="http://dev.opera.com/articles/view/automatic-numbering-with-css-counters/">CSS Counters</a> instead.</p>

<h3 id="definition">Definition lists</h3>

<p>Definition lists associate specific items and their definitions within the list. For example, if you wanted to give a definition to the items on your shopping list, you could do that like so:</p>
<dl>
  <dt>milk</dt>
  <dd>A white, liquid dairy product. </dd>
  <dt>bread</dt>
  <dd>A baked food made of flour or meal. </dd>
  <dt>butter</dt>
  <dd>A yellow, solid dairy product. </dd>
  <dt>coffee beans </dt>
  <dd>The seeds of the fruit from certain coffee trees. </dd>
</dl>
<p>Each definition and term is a definition group (or name-value group). You can have as many definition groups as you like, but there must be at least one term and at least one definition in each group. You can’t have a term with no definition or a definition with no term.</p>

<p>You can associate more than one term with a single definition, or vice versa. For example, the term &quot;coffee&quot; can have several meanings, and you could show them one after the other:</p>
<dl>
  <dt>coffee</dt>
  <dd>a beverage made from roasted, ground coffee beans</dd>
  <dd>a cup of coffee</dd>
  <dd>a social gathering at which coffee is consumed</dd>
  <dd>a medium to dark brown colour</dd>
</dl>
<p>Alternatively you can have more than one term with the same definition. This is useful to show variations of a term, all of which have the same meaning: </p>
<dl>
  <dt>soda</dt>
  <dt>pop</dt>
  <dt>fizzy drink </dt>
  <dt>cola</dt>
  <dd>A sweet, carbonated beverage. </dd>
</dl>
<p>Definition lists are different from the other kinds of list, as they use definition terms and definition descriptions instead of list items. </p>
<p>So, definition lists use one set of <code>&lt;dl&gt;&lt;/dl&gt;</code> elements, wrapped around groups of <code>&lt;dt&gt;&lt;/dt&gt;</code> and <code>&lt;dd&gt;&lt;/dd&gt;</code> tags. You must pair at least one <code>&lt;dt&gt;&lt;/dt&gt;</code> with at least one <code>&lt;dd&gt;&lt;/dd&gt;</code>; the <code>&lt;dt&gt;&lt;/dt&gt;</code> should always be first in the source order.</p>

<p>A simple definition list of single terms with single definitions would look like this: </p>
<pre>&lt;dl&gt;
  &lt;dt&gt;Term&lt;/dt&gt;
  &lt;dd&gt;Definition of the term&lt;/dd&gt;
  &lt;dt&gt;Term&lt;/dt&gt;
  &lt;dd&gt;Definition of the term&lt;/dd&gt;
  &lt;dt&gt;Term&lt;/dt&gt;
  &lt;dd&gt;Definition of the term&lt;/dd&gt;
&lt;/dl&gt;</pre>
<p>This is rendered as follows:</p>
<dl>
  <dt>Term</dt>
  <dd>Definition of the term</dd>
  <dt>Term</dt>
  <dd>Definition of the term</dd>
  <dt>Term</dt>
  <dd>Definition of the term</dd>
</dl>
<p>In this example, we associate more than one term with a definition, and vice versa: </p>
<pre>&lt;dl&gt;
  &lt;dt&gt;Term&lt;/dt&gt;
  &lt;dd&gt;Definition of the term&lt;/dd&gt;
  &lt;dt&gt;Term&lt;/dt&gt;
  &lt;dt&gt;Term&lt;/dt&gt;
  &lt;dd&gt;Definition that applies to both of the preceding terms&lt;/dd&gt;
  &lt;dt&gt;Term that can have both of the following definitions&lt;/dt&gt;
  &lt;dd&gt;One definition of the term&lt;/dd&gt;
  &lt;dd&gt;Another definition of the term&lt;/dd&gt;
&lt;/dl&gt;</pre>
<p>Which would render as follows:</p>
<dl>
  <dt>Term</dt>
  <dd>Definition of the term</dd>
  <dt>Term</dt>
  <dt>Term</dt>
  <dd>Definition that applies to both of the preceding terms</dd>
  <dt>Term that can have both of the following definitions</dt>
  <dd>One definition of the term</dd>
  <dd>Another definition of the term</dd>
</dl>
<p>In general, it is unusual to associate multiple terms with a single definition, but it is useful to know it is possible in case the need arises.</p>

<h2 id="choosinglists">Choosing between list types</h2>

<p>When trying to decide what type of list to use, you can usually decide by asking two simple questions:</p>
<ol>
<li>Am I defining terms (or associating other name/value pairs)?
    <ul>
        <li>If yes, use a definition list.</li>
      <li>If no, don’t use a definition list—go on to the next question.</li>
    </ul>
  </li>
  <li>Is the order of the list items important?
    <ul>
        <li>If yes, use an ordered list. </li>
      <li>If no, use an unordered list. </li>
    </ul>
  </li>
</ol>

<h2 id="listsemantics">The difference between HTML lists and text</h2>

<p>You may be wondering what the difference is between an HTML list and some text with bullets or numbers written in by hand. Well, there are several advantages to using an HTML list:</p>
<ul>
  <li>If you have to change the order of the list items in an ordered list, you simply move them around in the HTML. If you wrote the numbers in manually you would have to go through and change every single item’s number to correct the order—which is tedious to say the least!</li>
  <li>Using an HTML list allows you to style the list properly - you can use CSS to style just the list elements. If you just use a blob of text, you will find it more difficult to style the individual items in any useful manner, as the elements used will be the same as used for every other piece of text. </li>
  <li>Using an HTML list gives the content the proper semantic structure, as well as a &quot;list-ish&quot; visual effect. This has important benefits such as allowing screen readers to tell users with visual impairments they are reading a list, rather than just reading out a confusing jumble of text and numbers.</li>
</ul>
<p>To put it another way: <strong>text and lists are not the same</strong>. Using text instead of a list makes more work for you and can create problems for your document’s readers. So if your document needs a list, you should use the correct HTML list.</p>

<h2 id="nestinglists">Nesting lists</h2>
<p>A list item can contain another entire list—this is known as &quot;nesting&quot; a list. It is useful for things like tables of contents, such as the one at the start of this article:</p>
<ol>
  <li>Chapter One
    <ol>
      <li>Section One</li>
      <li>Section Two </li>
      <li>Section Three </li>
    </ol>
  </li>
  <li>Chapter Two</li>
  <li>Chapter Three  </li>
</ol>
<p>The key to nesting lists is to remember that the nested list should relate to one specific list item. To reflect that in the code, the nested list is contained inside that list item. The code for the list above looks as follows:</p>

<pre><code>&lt;ol&gt;
  <strong>&lt;li&gt;</strong>Chapter One
    &lt;ol&gt;
      &lt;li&gt;Section One&lt;/li&gt;
      &lt;li&gt;Section Two &lt;/li&gt;
      &lt;li&gt;Section Three &lt;/li&gt;
    &lt;/ol&gt;
  <strong>&lt;/li&gt;</strong>
  &lt;li&gt;Chapter Two&lt;/li&gt;
  &lt;li&gt;Chapter Three  &lt;/li&gt;
&lt;/ol&gt;</code></pre>

<p>Note how the nested list starts after the <code>&lt;li&gt;</code> and the text of the containing list item (“Chapter One”); then ends before the <code>&lt;/li&gt;</code> of the containing list item. Nested lists often form the basis for website navigation menus, as they are a good way to define the structure of the website.</p>

<p>Theoretically you can nest as many lists as you like, although in practice it can become confusing to nest lists too deeply. For very large lists, you may be better off splitting the content up into several lists with headings instead, or even splitting it up into separate pages. </p>

<h2 id="stepbystep">Step by step example</h2>

<p>Let’s run through a step by step example, to put all of this together. Consider the following scenario:</p>
<p>You are creating a small website for the HTML Cooking School. On the main page, you are to show a list of categorised recipes, linking through to recipe pages. Each recipe page lists the ingredients required, notes on those ingredients and the preparation method. The three categories are Cakes (including recipes for “Plain Sponge”,
  “Chocolate Cake” and
  “Apple Tea Cake”);
  “Biscuits” (including recipes for
  “ANZAC Biscuits”,
  “Jam Drops” and
  “Melting Moments”); and “Quickbreads” (including recipes for
  “Damper” and
“Scones”). The client doesn’t mind what order the categories and recipes are shown; they just want to be sure people know which items are categories and which ones are recipes.</p>
<p>Let’s step through the process of creating this site.</p>

<h3 id="mainpage">Main page markup</h3>

<ol>
<li><p>Create a properly-formed HTML page, including a doctype, <code>html</code>, <code>head</code> and <code>body</code> elements, and save it as <em>stepbystep-main.html</em>. Add a main heading (<code>h1</code>) of “HTML Cooking School”, and a subheading (<code>h2</code>) of “Recipes”:</p>

<pre><code>&lt;h1&gt;HTML Cooking School&lt;/h1&gt;<br />
&lt;h2&gt;Recipes&lt;/h2&gt;</code></pre>

</li>
<li>
<p>You have three categories of recipe to represent, and the order is not important—an unordered list is most appropriate for these, so add the following to your page:</p>

<pre><code>&lt;h2&gt;Recipes&lt;/h2&gt;
  &lt;ul&gt;
  &lt;li&gt;Cakes&lt;/li&gt;
  &lt;li&gt;Biscuits&lt;/li&gt;
  &lt;li&gt;Quickbreads&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<p>Indenting the <code>li</code> elements makes the code more readable, but it is not required.</p>
</li>
<li>
<p>Now you need to add the recipes as sub-items, for example “Plain Sponge”,
 “Chocolate Cake” and “Apple Tea Cake” are all part of the “Cakes” category. To do this, you need to create a nested list within each item. Since the order is not important, once again unordered lists are appropriate. To make things easier for the tutorial, I’ll get you to link all of the recipes to one single recipe page (<a href="http://dev.opera.com/articles/view/18-html-links-let-s-build-a-web/">Article 18 explains HTML links in depth</a>. Visit there if you want to read about links):</p>

<pre>&lt;h2&gt;Recipes&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Cakes
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;stepbystep-recipe.html&quot;&gt;Plain Sponge&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;stepbystep-recipe.html&quot;&gt;Chocolate Cake&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;stepbystep-recipe.html&quot;&gt;Apple Tea Cake&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Biscuits
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;stepbystep-recipe.html&quot;&gt;ANZAC Biscuits&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;stepbystep-recipe.html&quot;&gt;Jam Drops&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;stepbystep-recipe.html&quot;&gt;Melting Moments&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Breads/quickbreads
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=&quot;stepbystep-recipe.html&quot;&gt;Damper&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=&quot;stepbystep-recipe.html&quot;&gt;Scones&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>
</li></ol>
<p>The final result should be something similar to Figure 1:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/98-16-html-lists/mainpage.png" alt="Screenshot of main page" /></p>
<p class="comment">Figure 1: The finished main page.</p>
<p>You can also <a href="stepbystep-main.html" title="The live finished main page example">view the live example page here</a>. </p>

<h3 id="recipepage">The recipe page</h3>

<p>For the sake of the example, we will just create the sponge cake recipe page—feel free to create the others yourself, using this one as a template. The HTML Cooking School has supplied the sponge recipe to you in a text file, looking like this:</p>
<pre><code>Simple Sponge Cake
Ingredients
3 eggs
100g castor sugar
85g self-raising flour</code></pre>

<pre><code>Notes on ingredients:
  Caster Sugar - Finely granulated white sugar.
  Self-raising flour - A pre-mixed combination of flour and leavening agents (usually salt and baking powder).</code></pre>

<pre><code>Method
  1. Preheat the oven to 190&#xB0;C.
  2. Grease a 20cm round cake pan.
  3. In a medium bowl, whip together the eggs and castor sugar until fluffy.
  4. Fold in flour.
  5. Pour mixture into the prepared pan.
  6. Bake for 20 minutes in the preheated oven, or until the top of the cake springs back when lightly pressed.
  7. Cool in the pan over a wire rack.
</code></pre>

<h3 id="recipepagemarkup">Recipe page markup</h3>

<ol>
<li>
<p>Create another properly-formed HTML document, and save it as stepbystep-recipe.html. Add the following headings to it:</p>
<pre><code>&lt;h1&gt;Simple Sponge Cake&lt;/h1&gt;
&lt;h2&gt;Ingredients&lt;/h2&gt;
&lt;h3&gt;Notes on ingredients&lt;/h3&gt;
&lt;h2&gt;Method&lt;/h2&gt;</code></pre>
</li>
<li>
<p>The ingredients list has several items but the order isn’t important. An unordered list therefore makes sense. Add the following into the <code>body</code> of your HTML:</p>

<pre>&lt;h2&gt;Ingredients&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;3 eggs&lt;/li&gt;
  &lt;li&gt;100g castor sugar&lt;/li&gt;
  &lt;li&gt;85g self-raising flour&lt;/li&gt;
&lt;/ul&gt;
</pre>
</li>
<li>
<p>The notes on the ingredients are there to properly define what some of the ingredients are. You need to associate the ingredient—the term—with its definition. A definition list is right for this purpose. Add the following to your HTML, below the unordered list in the previous step:</p>
<pre>&lt;h3&gt;Notes on ingredients&lt;/h3&gt;
&lt;dl&gt;
  &lt;dt&gt;Castor Sugar&lt;/dt&gt;
    &lt;dd&gt;Finely granulated white sugar.&lt;/dd&gt;
  &lt;dt&gt;Self-raising flour&lt;/dt&gt;
    &lt;dd&gt;A pre-mixed combination of flour and leavening agents (usually salt and baking powder).&lt;/dd&gt;
&lt;/dl&gt;</pre>
</li>
<li>
<p>The method must obviously follow a single correct order, so it should be an ordered list—add the following to your HTML, below the definition list:</p>
<pre>&lt;h2&gt;Method&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Preheat the oven to 190&#xB0;C.&lt;/li&gt;
  &lt;li&gt;Grease a 20cm round cake pan.&lt;/li&gt;
  &lt;li&gt;In a medium bowl, whip together the eggs and castor sugar until fluffy.&lt;/li&gt;
  &lt;li&gt;Fold in flour.&lt;/li&gt;
  &lt;li&gt;Pour mixture into the prepared pan.&lt;/li&gt;
  &lt;li&gt;Bake for 20 minutes in the preheated oven, or until the top of the cake springs back when lightly pressed.&lt;/li&gt;
  &lt;li&gt;Cool in the pan over a wire rack.&lt;/li&gt;
&lt;/ol&gt;</pre>
</li>
</ol>
<p>The page should look something like Figure 2:</p>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/98-16-html-lists/recipepage.png" alt="Screenshot showing the recipe page" /></p>
<p class="comment">Figure 2: The finished recipe page.</p>

<p>You can also <a href="stepbystep-recipe.html" title="live example of the finished recipe page">view the live example page here</a>. </p>
<p>You’re done!</p>

<h2 id="summary">Summary</h2>
<p>By this stage you should have a clear understanding of the three different list types in HTML. Using the step-by-step example, you should have created all three and learned how to nest lists inside list items.</p>

<p>Once you know how to use HTML lists properly, you will probably discover that you use them all the time. There is a lot of content on the web that should have been placed into a list, but was just thrown into a generic element with some line break tags. It’s a lazy practice that causes far more problems than it solves—so don’t do it! You should always create semantically correct lists to help people read your websites. It is a better practice for everyone, not least yourself when you need to maintain your sites later on. </p>

<h2 id="furtherreading">Further reading</h2>
<ul>
  <li><a href="http://www.alistapart.com/articles/taminglists/">A List Apart: Taming Lists</a> </li>
  <li><a href="http://www.w3.org/TR/REC-CSS2/generate.html#lists">W3C CSS2: list-style-type definition</a></li>
</ul>

<h2 id="exercises">Exercise questions</h2>

<p>Questions you should be able to answer:</p>
<ul>
  <li>What are the three types of HTML list?</li>
  <li>When would you use each type of list? How would you choose between them? </li>
  <li>How do you nest lists?  </li>
  <li>Why should you use CSS rather than HTML to style your lists? </li>
</ul>

<ul style="list-style-type: none;">
<li><a href="http://dev.opera.com/articles/view/15-marking-up-textual-content-in-html/" rel="prev" title="link to the previous article in the series">Previous article—Marking up textual content in HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/17-images-in-html/" rel="next" title="link to the next article in the series">Next article—Images in HTML</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>About the author</h2>
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/98-16-html-lists/benbuchanan.jpg" alt="Picture of the article author Ben Buchanan" class="right" /></p>
<p>Ben Buchanan started creating web pages more than ten years ago, while completing a degree in everything but IT. He has worked in both the public (university) and private sectors; and worked on the redevelopment of major websites including <a href="http://www.theaustralian.com.au/">The Australian</a> and three generations of <a href="http://www.griffith.edu.au/">Griffith University</a>’s corporate website. He now works as Frontend Architect for <a href="http://www.newsdigitalmedia.com.au/">News Digital Media</a> and writes at <a href="http://weblog.200ok.com.au/">the 200ok weblog</a>.</p>
