Title: Progressive Enhancement with CSS 3: A better experience for modern browsers
----
Date: 2008-01-09 17:45:41
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

<p>The latest releases of cutting-edge browsers (such as Safari 3 and Opera 9.5) implement some of the decorative declarations from the proposed CSS 3 specification. Opacity, shadows and tiger-striping effects are now available without the use of JavaScript, server-side code or extra markup. But with some older browsers still in everyday use, it can be a little frustrating to think that you might not get the chance to use them for another few years.</p>

<p>In this article I will look at how you can use graceful (or, progressive) enhancement techniques to make use of CSS3 features in browsers that support them, while ensuring that your code will still provide a satisfactory user experience in older browsers that do not yet support those features.</p>

<p>The full code for the example featured in this article can be <a href="progressive_enhancement_CSS3.zip" alt="Download the code example here">found here</a>.</p>

<h2>What is progressive enhancement?</h2>

<p>To understand the concept of progressive enhancement, you first need to understand the method of graceful degradation, which is summarised nicely by the following quote:</p>

<blockquote>
<p>Graceful degradation means that your Web site continues to operate even when viewed with less-than-optimal software in which advanced effects don&#39;t work.</p>
<p><a href="http://www.digital-web.com/articles/fluid_thinking/">Fluid Thinking, by Peter-Paul Koch</a></p>
</blockquote>

<p>Graceful enhancement approaches the same methodology from the opposite direction; instead of providing fallback states to ensure sites operate on less-than-optimal software, we take advantage of features in newer software in order to provide an enhanced experience, while ensuring that the basic state still works on older devices. This is, of course, the ideal way to implement the new CSS 3 declarations.</p>

<h2>An example</h2>

<p>For this example, I&#39;m going to build a simple navigation menu that will look a little prettier depending on the CSS support in your favourite browser.</p>

<p>I should note that in this example I&#39;m using no graphics, no hacks, and no browser-specific prefixes; all the enhancements are using stable, implemented declarations. Having said that, some of the choices I&#39;ve made are specifically for example purposes, and may not be best practice for production sites.</p>

<h3>The Markup</h3>

<p>I&#39;m starting with a simple unordered list-based navigation menu, written in <abbr title="Plain Old Semantic HTML">POSH</abbr>:</p>

<pre><code>&lt;ul&gt; 
&lt;li&gt;&lt;a href=&quot;&quot;&gt;Lorem Ipsum&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href=&quot;&quot;&gt;Lorem Ipsum&lt;/a&gt;&lt;/li&gt; 
&lt;li&gt;&lt;a href=&quot;&quot;&gt;Lorem Ipsum&lt;/a&gt;&lt;/li&gt; 
&lt;li&gt;&lt;a href=&quot;&quot;&gt;Lorem Ipsum&lt;/a&gt;&lt;/li&gt; 
&lt;li&gt;&lt;a href=&quot;&quot;&gt;Lorem Ipsum&lt;/a&gt;&lt;/li&gt; 
&lt;/ul&gt;</code></pre>

<h3>The Baseline Style</h3>

<p>I&#39;m going to apply a baseline style that uses only simple descendant selectors. This will apply a border to each list item, and a change of background on mouseover. This should work in every graphical browser made in the last five or six years (and perhaps even older).</p>

<p>The CSS for this is straightforward:</p>

<pre><code>ul {
background-color: blue; 
border-bottom: 1px dotted #999; 
list-style: none; 
margin: 15px; 
width: 150px; 
}

li { 
background-color: #fff; 
border: 1px dotted #999; 
border-bottom-width: 0; 
font: 1.2em/1.333 Verdana, Arial, sans-serif; 
} 
 
li a { 
color: black; 
display: block; 
height: 100%; 
padding: 0.25em 0; 
text-align: center; 
text-decoration: none; 
} 

li a:hover { background-color: #efefef; }</code></pre>

<p>The only oddity you might notice is the blue background on the &lt;ul&gt;; this will be explained later. With these styles, we have a baseline appearance which will display in IE6 as shown in Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/68-progressive-enhancement-with-css-3-a-better-experience-for-modern-browse/Example_1.png" alt="Our baseline styles, designed to work in older browsers" />
<p class="comment">Figure 1: This baseline appearence will display in IE6 and other older browsers.</p>

<h2>Applying the Enhancements</h2>

<p>IE7 was the first of the series of IE browsers to support all of the CSS 2.1 attribute selectors, which are also implemented in pretty much every other browser release. We can use one of these - the child selector - to begin the process of enhancement. As IE6 doesn&#39;t support the child selector, it will ignore the following rules:</p>

<pre><code>body &gt; ul { border-width: 0; } 

ul &gt; li { 
border: 1px solid #fff; 
border-width: 1px 0 0 0; 
} 

li &gt; a { 
background-color: #666; 
color: white; 
font-weight: bold; 
} 

li:first-child a { color: yellow; } 

li &gt; a:hover { background-color: #999; }</code></pre>

<p>With these rules added to the CSS, the list now looks like Figure 2:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/68-progressive-enhancement-with-css-3-a-better-experience-for-modern-browse/Example_2.png" alt="Enhanced CSS styling that doesnt work in IE6" />
<p class="comment">Figure 2: The list now has coloured backgrounds and bolder text, and the first link is highlighted in a different colour.</p>

<p>IE7, Firefox, Safari and Opera all display like this.</p>

<h3>Adding more emphasis</h3>

<p>The next step is to add a little more emphasis, by using a property that IE doesn&#39;t recognise: Opacity. We don&#39;t need to use any special selectors for this, as IE will simply ignore any properties it doesn&#39;t support:</p>

<pre><code>li { opacity: 0.9; } 

li:hover { opacity: 1; }</code></pre>

<p>Figure 3 shows this property working in Opera; you can see that the list items inherit a blue tint from the background on the &lt;ul&gt;. On mouseover, each element becomes fully opaque.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/68-progressive-enhancement-with-css-3-a-better-experience-for-modern-browse/Example_3.png" alt="Opacity on mouseover" />
<p class="comment">Figure 3: Adding opacity to our example.</p>

<p>You could, of course, use IE&#39;s <code>filter</code> property to gain the same effect in IE as well.  For the purposes of the tutorial, I&#39;ll stick to standard CSS, as <code>filter</code> is not standard therefore it won&#39;t validate.</p>

<p>Firefox 2 supports opacity, but with more recent browsers we can go even further. With Safari and Opera, we can decorate the text and hint at depth by using the <code>text-shadow</code> property:</p>

<pre><code>li a:hover { text-shadow: 2px 2px 4px #333; }</code></pre>

<p>As Figure 4 shows, the moused-over element now gains a little shadow and seems to stand out from the page slightly.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/68-progressive-enhancement-with-css-3-a-better-experience-for-modern-browse/Example_4.png" alt="Further enhancement with textshadow" />
<p class="comment">Figure 4: Adding text shadows with CSS3.</p>

<p>Finally, we can take advantage of Opera&#39;s full support for the new CSS 3 selectors and add one more layer of enhancement: alternating background colours using the <code>nth-child</code> selector:</p>

<pre><code>li:nth-child(2n+1) a { background-color: #333; } 

li:nth-child(n) a:hover { 
background-color: #aaa; 
color: #000; 
} 

li:first-child &gt; a:hover { color: yellow; }</code></pre>

<p>Figure 5 shows Opera&#39;s tiger-striped menu.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/68-progressive-enhancement-with-css-3-a-better-experience-for-modern-browse/Example_5.png" alt="Tiger striping achieved using nth child" />
<p class="comment">Figure 5: A tiger-striped menu, created using <code>nth-child</code>.</p>

<h2>The Result and Summary</h2>

<p>Figure 6 is a side-by-side comparison of how the initial markup is viewed in IE6, IE7, Firefox, Safari and Opera, after applying the CSS rules used in this article. As you can see, as the browser&#39;s support for CSS becomes more sophisticated, the menu becomes more styled and complicated, and using progressive enhancement, the menu remains usable even in six-year-old browsers.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/68-progressive-enhancement-with-css-3-a-better-experience-for-modern-browse/Example_6.png" alt="A side by side result in the different browsers" />
<p class="comment">Figure 6: The result in IE6, IE7, Opera and Firefox.</p>

<p>Of course, many browsers have a myriad other properties which I haven&#39;t used here but could easily be implemented, for example RGBA colours and SVG as background images. And Opera 9.5 is still only in pre-release at the moment, so who knows what else is to come?</p>
