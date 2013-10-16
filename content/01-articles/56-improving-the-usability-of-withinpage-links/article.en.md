Title: Improving the usability of within-page links
----
Date: 2007-11-15 15:43:08
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
<p>A year and a half ago usability consultant Jakob Nielsen published an article called <a href="http://www.useit.com/alertbox/within_page_links.html" title="Jakob Nielsen article avoid within page links">Avoid Within-Page Links</a>, advising that web developers avoid within-page links (ie any link that takes the user to a &quot;named anchor&quot; within the same page.)</p>

<p>I disagree (respectfully and deferentially, naturally) that they should be avoided, but similarly feel a little disquiet about a couple of problems you can encounter when using within-page links:</p>
<ol>
<li>There&#39;s the disorientation that you feel when the screen changes but you don&#39;t really know what you&#39;re meant to be looking at, especially when there are multiple headings and paragraphs on the page - which section have you jumped to?</li>

<li>You think you&#39;ve gone to another page, when in actual fact you&#39;re on the same page, but you don&#39;t realise it because the display has &quot;jumped&quot;. Likewise, as Nielsen says, &quot;Clicking Back doesn&#39;t take you to the previous page; it takes you to the previous scroll state of the same page.&quot; To me, the problem here is that you don&#39;t see the page scrolling - if the fact that you&#39;re moving within the same page were visually reinforced, then the default behaviour of the back button becomes expected rather than confusing.</li>

</ol>

<p>The first problem is identifying what you&#39;re supposed to be looking at - the target of the link. Fortunately, with CSS3, we can change that using the <a href="http://www.w3.org/TR/css3-selectors/#target-pseudo" title="target in the W3C CSS3 working draft">:target  pseudoclass</a>, which is a class that the browser applies to any element that is the destination of a link that contains the fragment identifier.</p>

<p>The second problem is the default &quot;jumping&quot; of the browser. With some JavaScript we can change that. Visitors with a browser that can&#39;t deal with CSS3 and who don&#39;t have JavaScript enabled will not see any of the usability enhancements, but their experience will not be degraded in any way.</p>

<h2>A word about coding within-page links</h2>
<p>In Ye Olde Days, within-page links were coded as anchors with no destination, either sitting by themselves or wrapped with a semantic element:</p>

<pre><code>&lt;a name=&quot;about&quot; id=&quot;about&quot;&gt;&lt;/a&gt;</code></pre>

or 

<pre><code>&lt;h2&gt;&lt;a name=&quot;start&quot; id=&quot;start&quot;&gt;Cheesecakes through the ages &lt;/a&gt;&lt;/h2&gt;</code></pre>

<p>There are problems with this, however, in our semantics-aware world. Firstly, anchors with no destination heading will still pick up all the styles that you&#39;ve set for links (hover effects and the like), which you probably don&#39;t want  because these anchors are unclickable.  Also, if you&#39;re using XHTML, the <code>name</code> attribute is deprecated for the <code>a</code> element (see <a title="The W3C XHTML spec - a element name attribute is deprecated">http://www.w3.org/TR/xhtml1/#C_8</a>)</p>

<p>More philosophically, destinationless anchors like this are semantically redundant. If you want to identify a heading, or a div (or a list, list item, paragraph - anything really) then it&#39;s better to use the <code>id</code> attribute on that element:</p>

<pre><code>&lt;h2 id=&quot;start&quot;&gt;Cheesecakes through the ages&lt;/h2&gt;</code></pre>

<h2>Indentifying the target of within-page links</h2>
<p>Thanks to the magic of CSS, it&#39;s easy to target the destination of links. The CSS3 draft contains many selectors and pseudo-classes that have been implemented in newer browsers - one of which is the <code>:target</code>      pseudo-class. The Kestrel version of Opera (the alpha of version 9.5) implements <code>:target</code>, although this is currently slightly buggy (it should be fixed by the final version.)  Firefox and Safari already implement :target.. </p>

<p>The browser applies the pseudoclass to any element linked to via a fragment identifier, as all within-page links are. (It also works if another page or even an external website links to you!). In any <code>:target</code>  aware browser check out <a href="target1.htm" title="target pseudo class example">my first code example</a> - a <code>:target</code>   demo that colors the background of a targeted paragraph (note that in all my examples, I&#39;ve deliberately put any CSS and JavaScript in the <code>head</code> of the document, so you can easily check out all the code by viewing source.)</p>

<p>Notice, too, that the <code>:target</code>  can be on any HTML element, including lists, list items, headings and spans - <a href="target-any-element.htm" title="Expanded target pseudo class example, showing application to many different elements">this is demonstrated in my second example</a>.</p>

<p>Once we can target the destination for a link, we&#39;re not limited to setting background colours. To immediately make your site achingly oh-so-web-2.0, why not add a one pixel background image of a <a href="target-fade.htm" title="yellow fade technique achieved with target pseudoclass">pastel colour fading to transparent over two seconds?</a></p>

<p>This technique is simple to implement, but does require some thought.  Do you have other background images used within body text - for example, background-images set by CSS on certain links to downloadable documents or external links? If so, you&#39;ll need to ensure that they are gif or png with transparent backgrounds, otherwise they&#39;ll end up as white squares when the <code>:target</code>  background is applied to their container, as demonstrated in Figure 1.</p>
 
<img src="http://forum-test.oslo.osa/kirby/content/articles/56-improving-the-usability-of-withinpage-links/bad-background.gif" alt="Demonstration of messy result when a non-transparent background images are used alongside the fade technique" />
<p class="comment">Figure 1: Make sure your images have transparent backgrounds, otherwise they&#39;ll look a mess when you are using a background colour.</p>

<p>It&#39;s wise to give some thought to the aesthetics of the page once the target style is applied.  Try to apply the styling to the smallest area needed to draw the eye. If, for example, you have a page with multiple news items, each consisting of a div containing a heading and multiple paragraphs, consider highlighting just the heading rather than the whole div with a rule like</p>

<pre><code>div.article:target  h2 {
  background-color: pink;
}</code></pre>

<h2>Smooth scrolling</h2>
<p>The second problem we identified was that of disorienting the reader by &quot;jumping&quot; around the page. Stuart Langridge identified this problem in 2003 - three years before Nielsen - and wrote a script called <a href="http://www.kryogenix.org/code/browser/smoothscroll/" title="Smoothscroll script by Stuart Langridge">Smoothscroll</a>, which he released under the MIT license - see <a href="http://www.kryogenix.org/code/browser/licence.html" title="Stuart Langridge code license policy">http://www.kryogenix.org/code/browser/licence.html</a>.) The script calculates the distance between the link and its destination and scrolls between them, as fast or as slow as is necessary to make the &quot;distance&quot;.</p>

<p>I&#39;m no JavaScripter, so I&#39;ve simply hacked this script so that it can jump to any element with an <code>id</code>, rather than named anchors as the original script was coded for. It works in Opera, Firefox and IE, and you can see it&#39;s already <a href="smoothscroll.html">much less disorientating</a> and <a href="smoothscroll2.html">combines well with the :target  CSS</a>.</p>

<p>Other scripts attempt smooth scrolling as well, indicating that it&#39;s a recognised problem; the <a href="http://mootools.net/" title="The Mootools homepage">mootools library</a> has a &quot;smoothscroll&quot; module, but both mootools and Stuart&#39;s versions have a usability darkside: they break the back button and browser history: if you hit a link to smoothscroll to it, then hit the back button, the browser&#39;s address bar correctly updates to the previous location, but the screen doesn&#39;t scroll back to where it was, which may cause the user more annoyance than the problem it was meant to solve. (Great minds are working on this very problem, and will hopefully report back in a future dev.opera article).</p>

<h2>For Internet Explorer users</h2>
<p>IE users don&#39;t benefit from highlighting the <code>:target</code>  pseudoclass, because that browser doesn&#39;t support it. If you&#39;re using Stuart&#39;s Smoothscroll script, you could fix IE by adding a class to the destination of the link, and double up all <code>:target</code>  CSS rules:</p>

<pre><code>*:target,, .IE-target {
  background-color: pink;
}</code></pre>

<p>This way, IE users who have JavaScript will get the same effect, and IE users who have JavaScript turned off still receive the browser&#39;s default behaviour.</p>

<p>This works best with the fading highlight, otherwise you have to add JavaScript to remove an IE-target class from the &quot;old&quot; target the next time you highlight another within-page link, which adds to the complexity and execution time of the script. Browsers that natively support <code>:target</code>  automatically withdraw the pseudoclass from one element when another element is targeted.</p>

<p>One last thing for IE users: IE has a big ugly bug that can mean that in certain circumstances, within-page links that are activated using the keyboard fail to go to their destination, but instead disappear into limbo. This particularly affects users with disabilities who don&#39;t use conventional mice. <a href="http://www.juicystudio.com/" title="Gez Lemon homepage">Gez Lemon</a> of the <a href="http://webstandards.org/action/atf" title="The WaSP accessibility task force homepage">Web Standards Project&#39;s Accessibility Task Force</a> describes the problem and its various solutions in detail in his article <a href="http://juicystudio.com/article/ie-keyboard-navigation.php" title="Gez Lemon article on fixing the Internet Explorer keyboard navigation bug">Keyboard Navigation and Internet Explorer</a>, but the basic choice is:</p>

<ul>
<li>Code the destination elements to have <code>tabindex=&quot;-1&quot;</code>, which makes the markup invalid</li>
<li>Set the destination link to have <code>tabindex=&quot;-1&quot;</code> in the Smoothscroll JavaScript  - so sneaking an invalidity into your markup through the scripting back door, but this won&#39;t work for that 3 to 10% of your audience who don&#39;t have JavaScript</li>
<li>Make sure the IE-only <code>hasLayout</code> property is <code>true</code> for all destinations using  CSS. This won&#39;t invalidate your markup but fails for users not using CSS, and can lead to madness as you need to understand <a href="http://www.satzansatz.de/cssd/onhavinglayout.html" title="On having layout article">how <code>hasLayout</code> works</a></li>
<li>Persuade all your IE users to switch to a proper browser like Opera instead!</li>
</ul>

<h2>Summary</h2>
None of the techniques above can be classed as advanced, but in combination they show that good document structure combined with CSS and JavaScript can enhance the user experience with some visual reinforcement. Users with screenreaders get no visual reinforcement, of course, but the most poplar screenreaders already prefix within-page link with an announcement of &quot;this page link&quot; so the user understands the context. And, of course, those people using older, less advanced browsers are not disadvantaged in any way. 
<h2>Thanks</h2>
<p><a href="http://www.kryogenix.org" title="This is where Stuart Langridge lives on the web">Stuart Langridge</a> for &quot;Smoothscroll&quot; and Nedjma Mestari for showing me how to make animated gifs.</p>

