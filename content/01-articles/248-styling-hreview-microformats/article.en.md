Title: Styling hReview Microformats
----
Date: 2009-05-08 10:48:22
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

<p>The <strong>hReview</strong> Microformat gives us an agreed convention for adding markup structure and semantics to reviews — reviews of products, people, websites, events, and other things. In this article, you will learn how to style hReviews with CSS (the final example is shown in Figure 1) and create a versatile rating star system that integrates seamlessly with the hReview structure.</p>


<img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/hreview01.jpg" alt="Finalized rendering of an hReview microformat" />
<p class="comment">Figure 1: Finalized rendering of an hReview microformat.</p>

<p class="note">You can <a href="hreview_example.zip">download the complete code for the hReview example</a> in this article and play with it yourself. Feel free to reuse it, as long as you credit the original source and author.</p>

<h2>The markup</h2>

<p>Let&#39;s begin by looking at the HTML structure of our review:</p> 

<pre><code>&lt;div class=&quot;hreview&quot;&gt; 
     &lt;div class=&quot;brief&quot;&gt; 
         &lt;div class=&quot;item&quot;&gt; 
         &lt;a class=&quot;url fn&quot; href=&quot;http://veilandsubdue.com&quot;&gt;&lt;img src=&quot;images/cdcoversm.jpg&quot; alt=&quot;Veil &amp; Subdue Album Cover&quot; class=&quot;cover&quot; /&gt;Veil &amp; Subdue: The Courtship of the Black Sultan&lt;/a&gt; 
         &lt;/div&gt;&lt;!--end item--&gt; 
     &lt;p class=&quot;summary&quot;&gt; 
         “A delicious, dark and haunting journey!” 
     &lt;/p&gt; 
     &lt;div class=&quot;reviewer vcard fn&quot;&gt; 
         Buddy Powers 
     &lt;/div&gt; 
     &lt;abbr class=&quot;dtreviewed&quot; title=&quot;20090401&quot;&gt;April 1, 2009&lt;/abbr&gt; 
     &lt;/div&gt;&lt;!--end brief--&gt; 
     &lt;div class=&quot;rating&quot;&gt; 
          &lt;div title=&quot;4&quot;&gt; 
          4 out of 5 
        &lt;/div&gt; 
     &lt;/div&gt;&lt;!--end rating--&gt; 
     &lt;div class=&quot;description&quot;&gt; 
          &lt;p&gt; 
    From the first haunting, windswept keystrokes on &lt;span class=&quot;fn product&quot;&gt;&lt;em&gt;Veil &amp; Subdue&lt;/em&gt;&lt;/span&gt;, one thing is clear &#x2014; it’s going to be a dark ride indeed.  
          [...]
          &lt;/p&gt; 
     &lt;/div&gt;&lt;!--end description--&gt; 
&lt;/div&gt;&lt;!--end hreview--&gt;</code></pre>

<p>We won&#39;t go into the details of hReview markup here (see <a href=" http://microformats.org/wiki/hreview">Microformats.org</a> for the basics), but note that we&#39;ve wrapped the entire review in a <code>div</code> with a <code>class</code> attribute of <code>hreview</code>. This defines the enclosed text as a Microformatted review.</p> 

<div class="note">
<p>Note the following line of code to represent the date of the review:</p>

<pre><code>&lt;abbr class=&quot;dtreviewed&quot; title=&quot;20090401&quot;&gt;April 1, 2009&lt;/abbr&gt; </code></pre>

<p>This presents us with a potential accessibility problem, in that screen readers will read out the <code>abbr title</code> attribute in a really horrible way. You can <a href="http://www.webstandards.org/2007/04/27/haccessibility/">read more about the accessibility issue on webstandards.org</a>. The <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-time-element">HTML 5 <code>time</code> element</a> was developed to use with microformats in order to get over this problem, but it&#39;s not part of the microformat convention yet.</p>

</div>

<p>In addition to the hReview fields represented by <code>class</code> and <code>title</code> attributes here (<code>item</code>, <code>reviewer</code>, <code>rating</code>, and so on), we&#39;ve also wrapped up a portion of the information in a <code>div</code> labeled <code>brief</code>. This chunk of information is styled separately. In its unstyled state, the hReview content looks like Figure 2.</p>


<img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/hreview02.jpg" alt="The default rendering of the hReview content" />
<p class="comment">Figure 2: The default rendering of the hReview content.</p>


<h2>Text sizing and positioning</h2>

<p>Let&#39;s begin by centering and sizing the <code>hreview div</code>:</p>

<pre><code>body { 
     <strong>text-align: center;</strong> 
     line-height: 1.3; 
     font-family: &#39;palatino linotype&#39;, palatino, serif; 
     font-size: 15px; 
     color: #2b2b28; 
} 

.hreview { 
     <strong>width: 500px; 
     margin: 30px auto; 
     text-align: justify;</strong> 
}</code></pre> 

<p>Here we&#39;ve centered the <code>div</code> by setting the <code>text-align</code> property to <code>center</code> for the parent element (here, the <code>body</code> element), then setting the left and right margins to <code>auto</code> for the <code>hreview div</code>.</p>

<p>After centering the <code>hReview div</code>, we&#39;ve set the <code>width</code> of the <code>div</code> and set the <code>text-alignment</code>, as shown in Figure 3. (Unless we specify otherwise, the centered <code>text-alignment</code> is inherited from the <code>body</code> element).</p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/hreview03.jpg" alt="Centering and styling the hReview" />
<p class="comment">Figure 3: Centering and basic styling of the hReview.</p>

<h2>Sizing and positioning the CD cover</h2>

<p>Next we want to size the CD cover and move the summary, date, and author text next to the cover. This is quickly accomplished by sizing and floating the cover image:</p> 

<pre><code>.item img { 
     width: 75px; 
     float: left; 
     margin-right: 10px; 
     margin-bottom: 5px; 
}</code></pre> 

<p>After setting the <code>width</code> and floating the image to the left, we add a bit of <code>margin</code> to the right and the bottom of the image, so the text isn&#39;t flush up against it. Now all of the following text wraps nicely around the floated image, as shown in Figure 4.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/hreview04.jpg" alt="Floating the image to the left" />
<p class="comment">Figure 4: Floating the image to the left.</p>

<h2>Text styling</h2>

<p>Our information is starting to look a lot more organized and reader-friendly, but we should still style the main text of the review so that it is visually distinguished from the rest of the information:</p>

<pre><code>.description { 
     border: 2px solid #a19e96; 
     padding: 15px 30px; 
     background-color: #e3dfd3; 
     font-family: &quot;Verdana&quot; sans-serif; 
     font-size: 12px; 
     line-height: 1.6; 
} </code></pre>

<p>After adding <code>border</code> to this div, we&#39;ve added some <code>padding</code> to pull the text in from the edges, added a light brown background color, and changed the <code>font</code> properties to contrast with the proceeding review section, as seen in Figure 5.</p> 

<img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/hreview05.jpg" alt="Additional detail added to the description" />
<p class="comment">Figure 5: Additional styling added to the description.</p>

<h2>The star rating</h2>

<p>We now want to tackle the most challenging part of our review: the rating stars. We could simply replace the &quot;4 out of 5&quot; text with an image depicting four out of five stars. But that&#39;s a bit shortsighted — it would be better to create a flexible system to let us specify and display a variety of ratings.</p> 

<p>To do this we&#39;re going to adopt <a href=" http://www.thebroth.com/blog/119/css-rating-stars ">David Topper&#39;s method of creating rating stars with CSS</a>. Instead of using embedded CSS as his method employs, we&#39;re going to externalize the CSS onto our style sheet.</p>

<p>The CSS star rating system will let you assign a rating from 1 to 5 in .5 increments (implementing the rating field already standardized in the hReview format) and it replaces the asterisks (&quot;*&quot;) with star rating images.</p> 

<p>There are two star GIFs provided to use in our rating system:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/star_gray.gif" alt="clear rating star" /> and <img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/star_yellow.gif" alt="yellow rating star" /></p>


<p>The empty star (star_gray.gif) and the full yellow star (star_yellow.gif) are both 15 x 15 pixels in size. These serve as the background images for the two <code>div</code> elements used in the rating section of the HTML document.</p>  

<p>Let&#39;s refresh our memories as to the relevant part of the HTML:</p>
 
&lt;pre.<code>&lt;div class=&quot;rating&quot;&gt; 
          &lt;div title=&quot;4&quot;&gt; 
          4 out of 5 
        &lt;/div&gt; 
 &lt;/div&gt;</code>

<p>We&#39;ll style the outer <code>rating div</code> first:</p>

<pre><code>.rating  { 
  clear: both; 
  margin-bottom: 10px; 
  width: 75px; 
  background: url(images/star_gray.gif) 0 0 repeat-x; 
  text-indent: -9999px; 
}</code></pre>

<p>Here we have cleared the <code>div</code>, so that it doesn&#39;t end up wrapped along the edge of the CD cover image: we want the ratings beneath the cover. We also created a bit of a margin on the bottom, and set the width to equal the width of the CD cover image. This width is, coincidentally, just the right size to fit five of the empty rating stars horizontally across (15px x 5 = 75px).</p>

<p>We next set the empty star GIF as the background image, tiling it horizontally. Finally, we&#39;ve &quot;indented&quot; the text far off of the page: a common technique used to replace text with images using CSS. Now the &quot;4 out of 5&quot; text effectively disappears, leaving only the tiled GIF visible.</p>

<p>Next, we&#39;re going to style the inside nested <code>div</code> so that the yellow star tiles across the empty stars, as shown in Figure 6.</p>

<pre><code>.rating div { 
  height: 15px; 
  background: url(images/star_yellow.gif) 0 0 repeat-x; 
} </code></pre>

<p>This tiles the yellow star across, covering the empty stars we just placed there.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/hreview06.jpg" alt="The yellow stars overlapping the outlines of the stars beneath it" />
<p class="comment">Figure 6. The yellow stars overlapping the outlines of the stars beneath it.</p>

<p>This essentially creates a 5-star rating, which is great if everything we review is stellar. But, most of our reviews (including this one) are less than five stars.</p>

<p>In those cases, we want to show only a portion of the five yellow stars, while revealing the rest of the empty stars underneath. To do this, we can set the <code>width</code> of this nested <code>div</code> as a percentage of the width of the parent <code>rating div</code>. In this case, the CD we reviewed is four stars, so we want to set the <code>width</code> of the <code>div</code> to <code>80%</code>:</p>

<pre><code>.rating div { 
    width: 80%; 
}</code></pre>

<p>In this case the yellow stars only fill up 80% of the 75-pixel parent div, leaving the remaining 20% (or, 5th star) as an empty star as shown in Figure 7.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/hreview07.jpg" alt="The star rating system showing 80% approval" />
<p class="comment">Figure 7. The star rating system showing 80% approval.</p>

<p>Fabulous! We&#39;ve created our &quot;4 out of 5 star&quot; rating.</p>  

<p>This works great for this example. But what about future reviews, which may have 3 stars, 2 stars, or 4 1/2 stars? We want to be able to use the same CSS for any possible variation.  We can do this by styling the title attribute selector. Recall that in our HTML, we included a title attribute with the value of the rating:</p>

<pre><code>&lt;div title=&quot;4&quot;&gt; 
          4 out of 5 
&lt;/div&gt;</code></pre>

<p>We can attach a CSS property to specific values of this attribute by targeting the <code>title</code> attribute selector. In this case, we want to set the <code>width</code> of the <code>div</code> to 80% when its <code>title</code> attribute value equals <code>4</code>:</p> 

<pre><code>.rating div<strong>[title=&quot;4&quot;]</strong> { 
     width: 80%; 
}</code></pre>

<p>So, this <code>width</code> property <em>only</em> applies when the <code>title</code> attribute in the HTML has a velue of <code>4</code>. Similarly, we can target all of the <code>title</code> attribute selectors matching the other possible ratings:</p>

<pre><code>.rating div[title=&quot;1&quot;] { 
     width: 20%; 
} 

.rating div[title=&quot;1.5&quot;] { 
     width: 30%; 
} 
.rating div[title=&quot;2&quot;] { 
     width: 40%; 
} 

.rating div[title=&quot;2.5&quot;] { 
     width: 50%; 
} 

.rating div[title=&quot;3&quot;] { 
     width: 60%; 
} 

.rating div[title=&quot;3.5&quot;] { 
     width: 70%; 
} 

.rating div[title=&quot;4&quot;] { 
     width: 80%; 
} 

.rating div[title=&quot;4.5&quot;] { 
     width: 90%; 
}</code></pre>

<p>So, for example hen the <code>title</code> attribute value equals <code>1.5</code>, the yellow stars only fill up 30% of the 75-pixel parent gif (or 1 1/2 stars worth). And so on with the other nine variations as shown in Figure 8.</p>

 
<img src="http://forum-test.oslo.osa/kirby/content/articles/248-styling-hreview-microformats/hreview08.jpg" alt="Example of how the star rating system grows" />
<p class="comment">Figure 8. Example of how the star rating system grows.</p>

<h2>Summary</h2>

<p>In this article we have looked at a great way to style an hReview with CSS. The cleverest part of it by far is the versatile CSS star rating system, which has two great pluses:</p>

<ul>
<li>We didn&#39;t need to add new class or title attributes: this method makes use of the classes and attributes we already created when designing our hReview.</li>

<li>Secondly, all of the possible ratings are created using two small GIF files (thus relinquishing the need to load a new image file for each rating). This makes for an elegant and stylish technique for polishing up our hReviews.</li>
</ul>


