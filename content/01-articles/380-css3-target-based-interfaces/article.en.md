Title: CSS3 :target based interfaces
----
Date: 2010-10-27 10:07:48
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

<h2 id="s0">Introduction</h2>

<p>The new properties in CSS3 give us more scope for creating more powerful design features with very little effort, many of which were previously only available through JavaScript or Flash. This example uses the <code>:target</code> selector, a healthy dose of CSS3 transitions and the general sibling combinator to create a modern user interface. <a href="/articles/view/css3-target-based-interfaces/example4.html">You can see the end result here</a>.</p>

<ol>
<li><a href="#s1">Background information</a> </li>
<li><a href="#s2">A look at the example code</a></li>
<li><a href="#s3">Explanations</a>
  <ul>
    <li><a href="#s3-a">First principles: a simple example</a></li>
    <li><a href="#s3-b">Heading towards real life: horizontal targeting and backgrounds</a></li>
    <li><a href="#s3-c">Moving blocks: the actual problem</a></li>
    <li><a href="#s3-d">You can&#39;t talk down to your elders and betters</a></li>
    <li><a href="#s3-e">The solution</a></li>
    <li><a href="#s3-f">Saving graces</a></li>
  </ul>
</li>
<li><a href="#s4">Issues with spiders and reptiles</a></li>
<li><a href="#s5">Conclusion</a></li>
</ol>


<h2 id="s1">Background information</h2>

<p>Techniques for scrolling elements dynamically are used in all sorts 
of places. They are usually achieved using JavaScript, or designed in a 
pure graphical format like Flash. But what if you don&#39;t want to use Flash or JavaScript? With this pure CSS3 solution, a developer/designer has a fall-back or replacement solution.</p>

<p><a href="http://www.katherinecory.com/">Katherine Cory&#39;s site</a> has a fascinating interface. The eye is guided across a large surface to the section, rather than a static loading of the next section. The method used is JQuery: three fairly short scripts that nevertheless are beyond my knowledge of Javascript. In addition, my friend <a href="http://www.natureboy.uk.com/">natureboy&#39;s site</a> scrolls horizontally, but it is rendered entirely in Flash. With the new additions to CSS3 it is entirely possible to render a similar horizontally scrolling interface in HTML and CSS, without the use of proprietary software; and this is what we shall do!</p>

<h2 id="s2">A look at the example code</h2>

<p>To start off, we&#39;ll have a look at the final example we&#39;re working towards in this article. Note that in this example vendor-specific prefixes (<code>-o-</code>, <code>-moz-</code>, <code>-webkit-</code>) have been left out for brevity. You can <a href="final_css.txt">view the final CSS</a> and <a href="final_html.txt">view the final HTML</a> in separate pages (they are quite long listings.) You can also <a href="example4.html">view the final example running live</a>.</p>

<h2 id="s3">Explanations</h2>

<p>Now we&#39;ve looked at the example code, let&#39;s look at some background information, and talk about how to create it, step by step.</p>

<h3 id="s3-a">First principles: a simple example</h3>

<p><a href="http://dev.opera.com/articles/view/css3-show-and-hide/">In a previous article</a>, we looked at how we could expand and collapse elements in a web-page using the <code>:focus</code> selector to trigger the switch. This technique has quite a few benefits
 - the browsing history is not changed by using the <code>:focus</code> switch, and it 
replicates the behaviour of many applications. For example, if you click on any item in your menu bar then move away from it and click inside the window, the menu will disappear.</p>

<p>However, if you want a more permanent change upon click, the use of <code>:focus</code> falls down. As we said at the end of the last article, when you lose focus, everything changes. If you need a persistent change, then <code>:target</code> comes into play. While <code>:focus</code> selects an element that has had some interaction from a user, <code>:target</code> <em>matches the fragment identifier for a specific element</em>, so you can set elements to be styled a certain way only when they are linked to using a fragment identified, and the link in question is clicked.</p>

<p>The fragment identifier is contained in the ID attribute, and affects the browsing history, so for example if you were at <a href="http://www.example.org/index.html," target="_blank">http://www.example.org/index.html,</a> the link <code>&lt;a href=&quot;http://www.example.org/index.html#end&quot;&gt;go to end&lt;/a&gt;</code> would take you to an element with an id of &quot;end&quot;, and be displayed in the address bar as <samp><a href="http://www.example.org/index.html#end" target="_blank">http://www.example.org/index.html#end</a></samp>, which a browser treats as a different location.</p>

<p>So, if we had a page containing this simple content:</p>

<pre style="white-space: pre-wrap;"><code>&lt;ul&gt;
   &lt;li&gt;&lt;a href=&quot;#s1&quot;&gt;S1&lt;/a&gt;&lt;/li&gt;
   &lt;li&gt;&lt;a href=&quot;#s2&quot;&gt;S2&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;p id=&quot;s1&quot;&gt;hello&lt;/p&gt;
&lt;p id=&quot;s2&quot;&gt;bye&lt;/p&gt;</code></pre>

<p>You could apply a style to the paragraphs to hide them and then 
display them and move them when targeted. In this case we want to move 
each one from a different direction and make the text fade in and out. 
Let&#39;s style the paragraphs when they are not targeted first: since we 
want each paragraph to behave differently we need to style 
each one separately (proprietary prefixes for transition are left out for brevity).</p>

<pre><code>p[id^=&quot;s&quot;] {
  width: 5em;
  height: 5em;
  position: absolute;
  font-size: 4em;
}

p#s1 {
  left: 21em;
  top: 2em;
  opacity: 0;
  transition: all 4s;
}

p#s2 {
  left: 1em;
  top: 2em;
  opacity: 0;
  transition: all 4s;
}</code></pre>

<p class="note">Note: In HTML5, you can start ID values off with numbers if you so wish. This wasn&#39;t allowed before, in HTML4.</p>

<p>Now let&#39;s set the paragraphs to fade in and go to a specific position when they are the target of the fragment in the current URL:</p>

<pre><code>p#s1:target, p#s2:target {
  left: 14em;
  top: 2em;
  opacity: 1;
}</code></pre>

<p><a href="http://dev.opera.com/articles/view/css3-target-based-interfaces/try1.html">see our first simple example in action here</a>, and notice how (depending on the resolution of your screen) the page gains a horizontal scroll bar. The browser (correctly) jumps to the target, but in our case we don&#39;t want this correct behaviour as it&#39;s quite ugly. Luckily this is easy to fix: apply <code>position: fixed;</code> to the containing block (in this case, the <code>body</code>):</p>

<pre><code>body {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: freesans;
  position: fixed;
}</code></pre> 

<p>A fixed position element is placed relatively to the browser window. 
Since in this case the containing block is the body, we are effectively 
fixing the body in place. This breaks the normal targeting behaviour of 
the browser and <a href="http://dev.opera.com/articles/view/css3-target-based-interfaces/try2.html">the window will not jump or scroll</a>.</p>

<h3 id="s3-b">Heading towards real life: horizontal targeting and backgrounds</h3>

<p>In the short previous example we have the basis of the technique. Now we can apply it to a more common page structure: it&#39;s rare that we would fix the position of the body itself; it&#39;s 
much more likely that we would have our elements in a container. So let&#39;s now create a page with an article, and sections:</p>

<pre style="white-space: pre-wrap;"><code>&lt;ul id=&quot;nav&quot;&gt;
  &lt;li&gt;&lt;a href=&quot;#s0&quot;&gt;Welcome&lt;/a&gt; &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#s1&quot;&gt;Tab styling&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#s2&quot;&gt;Applications&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;article&gt;

  &lt;section id=&quot;s0&quot;&gt;
    &lt;h2&gt;Welcome&lt;/h2&gt;
    &lt;p&gt;This is a basic study in green, in HTML5. I&#39;ve decided to use
    a collection of &lt;code&gt;section&lt;/code&gt; elements housed within
    an &lt;code&gt;article&lt;/code&gt;, but I could have used a generic
    container (&lt;abbr title=&quot;id est&quot; lang=&quot;la&quot;&gt;i.e.&lt;/abbr&gt; a
    &lt;code&gt;div&lt;/code&gt;). As long as the outer container (in this
    case &lt;code&gt;article&lt;/code&gt;) holds the background image and is
    fixed, then you can get a scrollable background!&lt;/p&gt;
  &lt;/section&gt;

  &lt;section id=&quot;s1&quot;&gt;
    &lt;h2&gt;Tab styling&lt;/h2&gt;
    &lt;p&gt;It&#39;s all rounded corners, and an inset &lt;var&gt;box-shadow
    &lt;/var&gt; to create a three-dimensional effect. It perhaps is not as
    good as a drawing - but it&#39;s quicker.&lt;/p&gt;
  &lt;/section&gt;

  &lt;section id=&quot;s2&quot;&gt;
    &lt;h2&gt;Applications&lt;/h2&gt;
    &lt;p&gt;You could use this for a kiosk or information terminal; and bearing
    in mind that you don&#39;t only have to scroll horizontally, a very creative
    person could create an accessible web-comic where the reader was guided to
    each frame, with the art rendered in SVG, or text with
    &lt;var&gt;:content&lt;/var&gt; generated images.&lt;/p&gt;
  &lt;/section&gt;
&lt;/article&gt;</code></pre>

<p>As it&#39;s the holding block, let&#39;s give the <code>article</code> a fixed position:</p>
 
<pre><code>article {
  position: fixed;
  outline: 1px solid blue;
  left: 1em;
  top: 3em;
}</code></pre>

<p>Let&#39;s look at the visual candy. As in the previous example, we&#39;ve 
added a transition to the opacity of each <code>section</code>. we&#39;ve also 
added two more elements, setting a background image on each one. 
Since the <code>section</code>s are in a line we&#39;ve altered the position of 
the background for each block so that the image tiles seamlessly.</p>

<pre style="white-space: pre-wrap;"><code>section[id^=&quot;s&quot;] {
width: 25em;
  height: 25em;
  position: absolute;
  background-image: url(271.jpg);
  background-size:25em 25em;  
  font-size: 1em;
  opacity: 0;
  transition: all 6s;
}

#s0 {
left: 0em;
  top: 0em;
  background-position: 0em 0em;
}

#s1 {
left: 25em;
  top: 0em;
  background-position: -25em 0em;
}

#s2 {
left: 50em;
  top: 0em;
  background-position: -50em 0em;
}

#s0:target, #s1:target, #s2:target {
  opacity: 1
}</code></pre>

<p><a href="http://dev.opera.com/articles/view/css3-target-based-interfaces/example1.html">You can test the first iteration here</a>. But it isn&#39;t quite what we want, as in this version the links just make the sections appear in different parts of the screen; we want the effect to fill the screen and transition smoothly.</p>

<h3 id="s3-c">Moving blocks; the actual problem</h3>

<p>Heading towards our desired interface, let&#39;s try to move the blocks. We need to add the transition declaration to each section:</p>

<pre style="white-space: pre-wrap;"><code>#s0 {
left: 25em;
  top: 0em;
  background-position: 0em 0em;
  transition: all 3s;
}

#s1 {
left: 50em;
  top: 0em;
  background-position: -25em 0em;
  transition: all 3s;
}

#s2 {
left: 75em;
  top: 0em;
  background-position: -50em 0em;
  transition: all 3s;
}</code></pre>

<p>And alter the rule for the targeted section accordingly, so that each section moves to a predetermined point.</p>

<pre style="white-space: pre-wrap;"><code>#s0:target, #s1:target, #s2:target{
  opacity: 1;
  left: 0em;
  top: 0em;
}</code></pre>

<p><a href="http://dev.opera.com/articles/view/css3-target-based-interfaces/example2.html">this gives us iteration 2</a>. But still, what I&#39;m really looking for is a moving area inside a static viewport. For this we&#39;ll need to create a single viewport that scrolls to a specific location when an anchor is selected. So we have two options:</p>

<ol>
  <li><p><strong>When an anchor is selected, move every <code>section</code> into the corresponding positions, and show the relevant <code>section</code>.</strong></p>
<p>With three sections and three anchors, this would generate nine rules. With nine, it&#39;d be eighty-one!</p>
</li>
<li><p><strong>When an anchor is selected, move the surrounding <code>article</code> to the correct position and only show the relevant <code>section</code>.</strong></p>
<p>Since there is only one <code>article</code> we only need to create one rule per anchor: so for three anchors that&#39;s three rules, and for nine, nine.</p></li>
</ol>

<p>Taking the easier option, I&#39;ll choose the second option. To do this I&#39;ll have to change the type of positioning on the <code>article</code> from fixed to absolute. But we have no way of controlling the movement of the container! Our links point to the sections inside the article, so the result is the same as before.</p>

<h3 id="s3-d">You can&#39;t talk down to your elders and betters</h3>

<p>Here is where we hit a limit of CSS. The C in CSS stands for cascading - and CSS rules are applied downwards or sideways <em>in the same family</em>, never upwards. So looking at the <q>family relationships</q> of our document structure:</p>

<ol>
  <li>The <code>body</code> has two children: <code>ul</code> and <code>article</code>.</li>
  <li>Therefore, the <code>article</code> and <code>ul</code> are siblings.</li>
  <li>The <code>article</code> and <code>ul</code> each have three children.</li>
  <li>the children of the <code>ul</code> (the <code>li</code>s) have one child each (an <code>a</code>).</li>
</ol>

<p>In terms of consanguinity (<a href="http://en.wikipedia.org/wiki/File:CousinTree.svg">see this cousin tree diagram</a>), the <code>a</code> is a grand-niece/grand-nephew of the <code>article</code> and thus cannot <q>talk</q> to the great-uncle/great-aunt. Additionally, in our stylesheet, we would be asking the children of the <code>article</code> to tell it what to do when each one was a target - which also does not work. So, to achieve the effect we want, we have to make some alterations to our document structure, and then to the stylesheet. </p>

<h3 id="s3-e">The solution</h3>

<p>First of all, we know that we will be moving an absolutely positioned
 block around a fixed position element, so we have to contain our links 
and <code>article</code> inside another container, in this case a <code>div</code>:</p>

<pre style="white-space: pre-wrap;"><code>&lt;div&gt;
  &lt;ul id=&quot;nav&quot;&gt;
    &lt;li&gt;&lt;a href=&quot;#s0&quot;&gt;Welcome&lt;/a&gt; &lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#s1&quot;&gt;Tab styling&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;#s2&quot;&gt;Applications&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;article&gt;
    &lt;section id=&quot;s0&quot;&gt;...&lt;/section&gt;
    &lt;section id=&quot;s1&quot;&gt;...&lt;/section&gt;
    &lt;section id=&quot;s2&quot;&gt;...&lt;/section&gt;
  &lt;/article&gt;
&lt;/div&gt;</code></pre>

<p>Let&#39;s adjust the style of the generic container so that it&#39;s fixed, and set the size of our viewport, which is the <code>article</code> element. We want the background image to fill the element completely. As we want to give the impression of movement, we apply the transition to this element.</p>

<p>We also need to remember that there is a stacking order to consider. Each subsequent element rendered on a page will stack <em>above its predecessors</em>; so a child sits on top of the parent, and the last sibling will sit above the first. If we want our exposed links to display correctly we&#39;ll need to add a <code>z-index</code> to the article. Giving it a negative number will stack it below the links.</p>

<pre style="white-space: pre-wrap;"><code>div {
  position: fixed; 
  left:0em; top: 0em; 
}

div &gt; article {
  width: 300em; height: 80em; 
  position:absolute; 
  left: 0em; top: 0em; 
  background-image:url(271.jpg); 
  background-size: 300em 80em; 
  background-repeat: no-repeat; 
  list-style-type: none; 
  font-size: 2em;
  z-index: -100;
  margin: 0; padding: 0;
  transition: top 1.5s 1.5s, left 1.5s 1s; 
}</code></pre>

<p>Now, we need to have the anchors and the <code>article</code> at the 
same level, so we&#39;ll extract them from the list, leaving exposed links. 
Since the links are exposed, <a href="http://www.w3.org/TR/WCAG10-TECHS/#tech-divide-links">we&#39;ll need to separate them with something 
better than white space</a>: so we&#39;ll surround our links in brackets, with each bracket surrounded by a <code>span</code>. However, we will <em>keep our original list</em>, for reasons that will become very clear later.</p>

<pre style="white-space: pre-wrap;"><code>
&lt;span&gt;{&lt;/span&gt;&lt;a id=&quot;l0&quot; href=&quot;#l0&quot;&gt;Welcome
&lt;/a&gt;&lt;span&gt;}&lt;/span&gt;
&lt;span&gt;{&lt;/span&gt;&lt;a id=&quot;l1&quot; href=&quot;#l1&quot;&gt;Tab styling
&lt;/a&gt;&lt;span&gt;}&lt;/span&gt; 
&lt;span&gt;{&lt;/span&gt;&lt;a id=&quot;l2&quot; href=&quot;#l2&quot;&gt;Applications&lt;/a&gt;&lt;span&gt;}&lt;/span&gt;

&lt;ul id=&quot;nav&quot;&gt;
  &lt;li&gt;&lt;a href=&quot;#s0&quot;&gt;Welcome&lt;/a&gt; &lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#s1&quot;&gt;Tab styling&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#s2&quot;&gt;Applications&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<p>Since the child cannot affect a parent, the target declaration in
 our stylesheet also needs altering. As the exposed links are now 
siblings of the container, we can add <strong>meaningful</strong> fragment identifiers to each link, and have each one reference itself. So we&#39;ll use the heading of each section to generate the <code>id</code> and the <code>href</code>.</p>

<pre style="white-space: pre-wrap;"><code>&lt;span&gt;{&lt;/span&gt;&lt;a id=&quot;welcome&quot; href=&quot;#welcome&quot;&gt;Welcome
&lt;/a&gt;&lt;span&gt;}&lt;/span&gt;
&lt;span&gt;{&lt;/span&gt;&lt;a id=&quot;tabs&quot; href=&quot;#tabs&quot;&gt;Tab styling
&lt;/a&gt;&lt;span&gt;}&lt;/span&gt; 
&lt;span&gt;{&lt;/span&gt;&lt;a id=&quot;apps&quot; href=&quot;#apps&quot;&gt;Applications
&lt;/a&gt;&lt;span&gt;}&lt;/span&gt;</code></pre>

<p>In this case we&#39;ve saved the job of working out the 
positions of each section in the block by floating them, and since we&#39;ve stretched the <code>article</code> to be 300em &#xD7; 80em, the three sections each must be 100em &#xD7; 80em. This will have the effect of arranging the <code>section</code>s in a line.</p>

<pre style="white-space: pre-wrap;"><code>article &gt; section {
  display: block; 
  width: 100em;
  height: 80em;
  margin: 0em;
  padding: 0em; 
  float:left; 
  opacity: 0; 
  color: #250; 
  transition:all 1.5s;
}</code></pre>

<p>We can now use the general sibling combinator (~) alongside <code>:target</code> to move the container...</p>

<pre><code>#welcome:target ~ article {
  left: 0em;
  top: 0em;
} 

#tabs:target ~ article {
  left: -100em;
  top: 0em;
}

#apps:target ~ article {
  left: -200em;
  top: 0em;
}</code></pre>

<p>...and modify the rule to display the appropriate <code>section</code>s. In this case we want the first section to display upon loading the page, so we set its initial opacity to 1, and then change it to zero when the other sections are targeted.</p>

<pre style="white-space: pre-wrap;"><code>#tabs:target ~ article &gt; section#s1 {
  opacity:1;
}

#apps:target ~ article &gt; section#s2 {
  opacity:1;
}

section#s0 {
  opacity: 1;
}

#tabs:target ~ article &gt; section#s0, #apps:target ~ article &gt; section#s0 {
  opacity: 0;
}</code></pre>
 



<p>We&#39;ll now add a bit of styling for the links. Here we&#39;re making them look like tabs that pop up slightly on a hover, and then extend fully on a target. We&#39;ve used box-shadow to create the effect of a light source, and made them translucent. Finally, we&#39;ve positioned them relative to our sections:</p>

<pre style="white-space: pre-wrap;"><code>#tabs, #apps, #welcome {
  height: 1em; 
  position: relative; 
  left: 40em; top: -2em;  
  display: inline-block; 
  padding: 1ex; 
  border: 1px solid #230;
  border-bottom: none;
  width: auto;
  font-size: 1.4em;
  text-decoration: none;  
  border-radius: 2ex 2ex 0ex 0ex;
  box-shadow: -2px 1px 2px 0px rgba(157, 184, 122, 0.5) inset;
  background-color: rgba(127, 154, 102, 0.6); 
  transition: box-shadow 2.5s, background-color 2s, top 1s, height 1s; 
}

#tabs:hover, #apps:hover, #welcome:hover {
  background-color: rgba(158, 192, 65, 0.6); 
  top: -3em; 
  height: 2em;
  box-shadow: -2px 1px 2px 0px rgba(187, 214, 152, 0.3) inset;
  transition: box-shadow 2.5s, background-color 2s, top 1s, height 1s;
}

#tabs:target, #apps:target, #welcome:target {
  background-color: rgba(158, 192, 65, 1); 
  top: -4em;  
  height: 3em;
  box-shadow: -2px 1px 2px 0px rgba(217, 244, 182,  0.6) inset;
}</code></pre>


<p>With some extra styling to the main page heading, we&#39;re almost there, but it will need tidying up — <a href="http://dev.opera.com/articles/view/css3-target-based-interfaces/example3.html">see the third iteration in action</a>.</p>

<h3 id="s3-f">Saving graces</h3>

<p>So what have we got left to do? Luckily, not much. We have used a lot of CSS that legacy browsers will not understand and thus will be ignored: for example, Internet Explorer 6, 7 and 8 will get a single page with no positioning, but all content will still be viewable. The only things we need to do to tidy up are:</p>

<ol>

<li><strong>ensure that the HTML5 elements are displayed as blocks</strong>
<p>This is simple:</p>
<pre><code>section, article {display: block;}</code></pre>
</li>

<li><strong>remove the exposed links below the main page title; but show them for more modern browsers</strong>

<p>We can simply use the cascade for this, adding a <code>display: none</code> rule above our declarations for the links: we can also hide the <code>span</code> elements with this rule.</p>

<pre style="white-space: pre-wrap;"><code>#tabs, #apps, #welcome, span {
  display: none;
}

#tabs, #apps, #welcome {
  height: 1em; 
  position: relative; 
  left: 40em;
  top: -2em;  
  display: inline-block; 
  padding: 1ex; 
  border: 1px solid #230; border-bottom: none;
  width: auto;
  font-size: 1.4em; text-decoration: none;  
  border-radius: 2ex 2ex 0ex 0ex;
  box-shadow: -2px 1px 2px 0px rgba(157, 184, 122, 0.5) inset;
  background-color: rgba(127, 154, 102, 0.6); 
  transition: box-shadow 2.5s, background-color 2s, top 1s, height 1s; 
}</code></pre>

<p>In older browsers, the more advanced styles will be skipped over.</p>
</li>

<li><strong>hide the original navigation list from more modern browsers</strong>
<p>Note that we cannot get rid of the list, since our exposed links are self-referencing and thus wouldn&#39;t take the user to the right section. We want to make sure the page is still usable by text browsers such as Lynx and W3M, as well as screen-readers. So we can move our list so that it comes after the <code>article</code>: this will also help us position the exposed links in the right place.</p>

<pre style="white-space: pre-wrap;"><code>
&lt;article&gt;
  &lt;section id=&quot;s2&quot;&gt;
    &lt;h2&gt;Applications&lt;/h2&gt;
    &lt;p&gt;...&lt;/p&gt;
  &lt;/section&gt;
&lt;/article&gt;

&lt;ul id=&quot;nav&quot;&gt;
  &lt;li&gt;&lt;a href=&quot;#s0&quot;&gt;Welcome&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#s1&quot;&gt;Tab styling&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#s2&quot;&gt;Applications&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<p>Then for our exposed links, we can include a heading and link, writing a short sentence to explain the situation to text and screen-readers:</p>

<pre style="white-space: pre-wrap;"><code>&lt;h2 id=&quot;skip&quot;&gt;&lt;span&gt;non-functioning links for graphical browser users&lt;/span&gt; [&lt;a href=&quot;#nav&quot;&gt;skip to menu&lt;/a&gt;]&lt;/h2&gt;</code></pre>

<p>Now we can use a media query to hide these things from more modern browsers.</p>

<pre style="white-space: pre-wrap;"><code>@media all and (min-width: 1px) {
  #nav {
    display: none;
  }
  
  #skip {
    display: none;
  }
}</code></pre>

<p>This gives a reasonable layout on a text browser, and makes the menu accessible on legacy graphical browsers.</p>

<p class="note">Note: There is of course a catch. W3M does not understand some of the new elements of HTML5 - so the links pointing to a <code>section</code> will not work. To rectify this you&#39;ll have to use a <code>div</code> instead.</p>  
</li>
</ol>

<p>And We now have an interface that scrolls smoothly from section to 
section, and which degrades gracefully on older browsers to a single page - <a href="http://dev.opera.com/articles/view/css3-target-based-interfaces/example4.html">try out the fourth iteration</a>.</p>

<p><strong>And yet we still have some...</strong></p>

<h2 id="s4">Issues with spiders and reptiles</h2>

<p>Or: <q>what are are we going to do about Gecko and Webkit?</q></p>

<p>As we mentioned briefly in the last article and in slightly more detail in its discussion, <a href="https://bugs.webkit.org/show_bug.cgi?id=12520">Webkit has a bug that means it can&#39;t deal with this standards-compliant technique</a>: this results in it not honouring the general sibling combinator in conjunction with a pseudo selector. Since we know that our technique won&#39;t work with Webkit browsers, we have to hide our styling from Webkit by wrapping our rules inside a media query to one that is Webkit-specific, using the <em>-webkit-</em> prefix. Here, we extract our rules from our original media query, place them and pretty much everything else in a new one, and remove all the <code>-webkit-</code> prefixed styles. The full media query will look like so:</p>

<pre style="white-space: pre-wrap;"><code>@media not all and (-webkit-min-device-pixel-ratio: 0) {

  #nav {
    display: none;
  }

  #skip {
    display: none;
  }

  #tabs, #apps, #welcome {
    height: 1em; 
    display: inline-block;
    position: relative; 
    left: 40em;
    top: -2em;
    padding: 1ex; 
    border: 1px solid #230; 
    border-bottom: none; 
    width: auto;
    font-size: 1.4em; 
    text-decoration: none;  
    background-color: rgba(127, 154, 102, 0.6); 

    border-radius: 2ex 2ex 0ex 0ex;       /* Opera understands this as-is */
    -moz-border-radius: 2ex 2ex 0ex 0ex;

    box-shadow: -2px 1px 2px 0px rgba(157, 184, 122, 0.5) inset;    /* Opera also understands this */
    -moz-box-shadow: -2px 1px 2px 0px rgba(157, 184, 122, 0.5) inset;

    -o-transition: box-shadow 2.5s, background-color 2s, top 1s, height 1s;
    -moz-transition: -moz-box-shadow 2.5s, background-color 2s, top 1s, height 1s;
    transition: box-shadow 2.5s, background-color 2s, top 1s, height 1s; 
  }

  #tabs:hover, #apps:hover, #welcome:hover {
    background-color: rgba(158, 192, 65, 0.6); 
    top: -3em; 
    height: 2em;

    box-shadow: -2px 1px 2px 0px rgba(187, 214, 152,  0.3) inset;
    -moz-box-shadow: -2px 1px 2px 0px rgba(187, 214, 152,  0.3) inset;

    -o-transition: box-shadow 2.5s, background-color 2s, top 1s, height 1s;
    -moz-transition: -moz-box-shadow 2.5s, background-color 2s, top 1s, height 1s;
    transition: box-shadow 2.5s, background-color 2s, top 1s, height 1s;
  }

  #tabs:target, #apps:target, #welcome:target {
    background-color: rgba(158, 192, 65, 1); 
    top: -4em;  
    height: 3em;
    -moz-box-shadow: -2px 1px 2px 0px rgba(217, 244, 182,  0.6) inset;
    box-shadow: -2px 1px 2px 0px rgba(217, 244, 182,  0.6) inset;
  }

  div &gt; h1 { 
    width: 80em; 
    padding: 1.5ex; 
    background-color: rgba(10, 10, 10, 0.8); 
    color: #efe; 
    font-size: 2.5em; 
    margin: 0em;
  }

  div &gt; h2 {
    display: inline;
  }

  div {
    position: fixed; 
    left:0em; top: 0em; 
  }

  div &gt; article {
    width: 300em; height: 80em; 
    position:absolute; 
    left: 0em;
    top: 0em; 
    background-image:url(271.jpg); 
    background-size: 300em 80em; 
    -moz-background-size: 300em 80em; 
    background-repeat: no-repeat; 
    z-index: -100; 
    list-style-type: none; 
    font-size: 2em;
    margin: 0;
    padding: 0;
    -o-transition: top 1.5s 1.5s, left 1.5s 1s; 
    -moz-transition: top 1.5s 1.5s, left 1.5s 1s; 
    transition: top 1.5s 1.5s, left 1.5s 1s; 
  }

  article &gt; section {
    width: 100em;
    height: 80em;
    margin: 0em;
    padding: 0em; 
    float:left; 
    opacity: 0; 
    color: #250; 
    -o-transition: all 1.5s; 
    -moz-transition: all 1.5s;
    transition: all 1.5s; 
  }

  section[id^=&quot;s&quot;] &gt; p {
    width: 36em;
    padding-left: 2em;
    font-size: 0.7em;
  }

  section[id^=&quot;s&quot;] &gt; h2, section[id^=&quot;s&quot;] &gt; h3 {
    padding-left: 1em;
    margin-bottom: 0.1em;
    margin-top: 3em;
  }

  #tabs:target ~ article &gt; section#s1 {
    opacity: 1;
  }
  
  #apps:target ~ article &gt; section#s2 {
    opacity: 1;
  }

  section#s0 {
    opacity: 1;
  }

  #tabs:target ~ article &gt; section#s0, #apps:target ~ article &gt; section#s0 {
    opacity: 0;
  }

  #welcome:target ~ article {
    left: 0em;
    top: 0em;
  } 

  #tabs:target ~ article {
    left: -100em;
    top: 0em;
  }

  #apps:target ~ article {
    left: -200em;
    top: 0em;
  } 
}</code></pre>


<p><a href="http://dev.opera.com/articles/view/css3-target-based-interfaces/example5.html">Try the fifth iteration, with Webkit media query</a>.</p>

<p>In this case, we&#39;re saying that the styles should not be applied to 
those screens that have a Webkit-specific device pixel ratio of zero or more.</p>

<p>Opera drops all of a declaration if it doesn&#39;t understand part of it, so it essentially sees the same thing as the CSS validator:</p>

<pre><code>@media</code></pre>

<p>and thus Opera applies the styles inside the media query. However, Firefox drops the whole declaration as (according to its debugger) it actually sees this:</p>

<pre><code>@media not all</code></pre>

<p>So, frustratingly, it does not apply the styles inside the media query. So by &quot;fixing&quot; the page for Webkit, the styling is lost for Gecko.</p>

<p class="note">Note: This really isn&#39;t ideal, as it is effectively Webkit-specific browser sniffing, and it causes the layout to break in Webkit and Gecko. I am just trying to demonstrate a way to get Webkit to read the page successfully. The best approach would be to lobby Webkit to fix this bug!</p>

<h2 id="s5">Conclusion</h2>

<p>We&#39;ve worked our way through various applications of <code>:target</code>
 - from the fairly simple to more complex and visually impressive user 
interfaces without heavy scripting. A bit of thought is required, but 
through careful use of transitions, media queries and pseudo selectors, 
we can create functional sites with interesting new designs.</p>                                                                  code
