Title: Advanced cross-browser flexbox
----
Date: 2013-04-04 13:09:46
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

<h2>Introduction</h2>

<p>The <a href="http://www.w3.org/TR/css3-flexbox/">CSS Flexible box module level 3</a> — or Flexbox for short — brings with it a lot of power and some very exciting possibilities for web development, allowing us to put together complex site layouts easily and rapidly, and dispensing with some of the illogical hacks and kludges that we&#39;ve traditionally used. I dealt with the basics of Flexbox in my article <a href="http://dev.opera.com/articles/view/flexbox-basics/">Flexbox: fast track to layout nirvana?</a> In this article I will go a bit further, looking at a more advanced example, and using Modernizr to serve different styles to browsers with differing levels of flexbox support, providing the best level of cross browser support currently available.</p>

<h2>Introducing the example</h2>

<p>The example I have built for this article looks like Figure 1:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/798-advanced-crossbrowser-flexbox/figure1.jpg" alt="An image of the final layout example" /></p>
<p class="caption">Figure 1: An image of the final layout example</p>

<p>This has multiple levels of flexboxes contained within it. You can <a href="http://dev.opera.com/static/articles/2013/flexbox-case-study/flexbox-modernizr.html">view the example live</a> if you wish, and read on to explore the code in more detail.</p>

<h2>The overall layout</h2>

<p>The basic layout of the site is like this:</p>

<pre><code>&lt;section&gt;
  &lt;nav&gt;&lt;/nav&gt;
  &lt;article&gt;&lt;/article&gt;
  &lt;article&gt;&lt;/article&gt;
&lt;/section&gt;</code></pre>

<p>The <code>&lt;section&gt;</code> is set to display as a flexible box like so:</p>

<pre><code>section {
  display: -ms-flexbox;
  -ms-box-orient: horizontal;

  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  -moz-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}</code></pre>

<p class="note">Note: Different IE-specific properties are specified at the top of the rule because IE10 currently supports different flexbox syntax (from 2011) to the latest spec supported by Opera and Chrome. What makes it worse is that Firefox and other WebKit browsers (like Safari) support an even older version of the syntax (from 2009). And to top it off, Modernizr reports IE10 as supporting modern flexbox, even though it doesn&#39;t, therefore we need to deal with IE10 like this, rather than in a Modernizr rule. See below, in the <a href="#fallbacks">Intelligent fallbacks for flexbox</a> section for more details and clarification.</p>

<p>I am making the flow horizontal, but forcing the <code>&lt;nav&gt;</code> to sit on its own line using the following rule:</p>

<pre><code>nav {
  padding: 1rem;
   -webkit-flex: 1 100%;
  -moz-flex: 1 100%;
  -ms-flex: 1 100%;
  flex: 1 100%;
}</code></pre>

<p>Setting <code>flex-basis</code> to <code>100%</code> makes it take up 100% of the width of its parent, forcing the other flexbox children to wrap onto a new line. The <code>&lt;article&gt;</code>s are set with <code>flex-grow</code> values as follows:</p>

<pre><code>article:nth-of-type(1) {
  -webkit-flex: 2;
  -moz-flex: 2;
  -ms-flex: 2;
  flex: 2;
}

article:nth-of-type(2) {
  -webkit-flex: 3;
  -moz-flex: 3;
  -ms-flex: 3;
  flex: 3;
}</code></pre>

<p>They will take up that proportion of the space on the line they are sat on — the first <code>&lt;article&gt;</code> spanning 40%, or 2/5ths of the width, and the second <code>&lt;article&gt;</code> (the image container) spanning 60%, or 3/5ths of the width. This is worth remembering — the proportion values constitute a proportion of the space only on the line the item is sitting on, not all lines the children are sat on.</p>

<p class="note">Note: The <code>flex-basis</code> values, when specified, are applied to the flexbox child elements first; after that, the space left over in the parent is divided up between the children according to the <code>flex-grow</code> proportion values. When a <code>flex-grow</code> value is not set explicitly, like in the <code>nav</code> ruleset above, it defaults to 1. For more information on how these work, read the &quot;Making your elements flex&quot; section of my <a href="http://dev.opera.com/articles/view/flexbox-basics/">Flexbox — fast track to layout nirvana?</a> article.</p>

<h2>Child flexboxes</h2>

<p>When you set an element to be laid out as a flexible box, it will only flex its immediate children, and not further descendants. But there is nothing to stop you making those descendants flexible boxes as well, enabling some really complex layouts! Here, I have set the <code>&lt;nav&gt;</code> to be a flexbox as well, so I can center it effectively without having to worry about how wide it is:</p>

<pre><code>nav {
    display: -ms-flexbox;
  -ms-box-orient: horizontal;
  -ms-box-pack: center;

  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: flex;
  
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center; 
}</code></pre>


<p>Then I&#39;ve made <code>&lt;ul&gt;</code> a flexible box as well and wrapped and centered its children, the <code>&lt;li&gt;</code>s:</p>

<pre><code>nav ul {
  text-align: center;

    display: -ms-flexbox;
  -ms-box-orient: horizontal;
  -ms-box-pack: center;

  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  -moz-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center; 
  width: 80%;
}

nav a {
  width: 100%;
}</code></pre>

<p>I have also added a few other properties to sort out the look of those navigation items. I want the <code>&lt;ul&gt;</code> to not quite stretch all the way across the screen and have all text centered, so I&#39;ve set <code>width: 80%</code> and <code>text-align: center</code>; I&#39;m also making sure the anchors span the whole width of the <code>&lt;li&gt;</code>s, with <code>width: 100%</code>.</p>

<p>Next comes the magic moment. At this point the list items are looking a bit overlapping and odd, and they look stupid when they start to wrap. How&#39;s about a nice responsive menu that looks really cool, with no media queries required? All that&#39;s required is the following rule:</p>

<pre><code>nav ul li {
  margin: 0 1.5rem;
  
  -webkit-flex: auto;
  -moz-flex: auto;
  -ms-flex: auto;
  flex: auto;
  
  min-width: 5rem;
}</code></pre>

<p>Here I am giving the list items some breathing room with <code>margin</code>, giving them a <code>min-width</code>, and setting <code>flex</code> to <code>auto</code>. This is a special value of flex that allows flex children to respect <code>min-width</code> type values and remain a constant size when no excess space is available, but expand to fill any excess space when it does because available. See what happens when you expand and contract the page (illustrated in Figure 2)?</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/798-advanced-crossbrowser-flexbox/figure2-1.jpg" alt="A navigation menu laid out differently depending on the width of the screen, done just using Flexbox" /><img src="http://forum-test.oslo.osa/kirby/content/articles/798-advanced-crossbrowser-flexbox/figure2-2.jpg" alt="A navigation menu laid out differently depending on the width of the screen, done just using Flexbox" /><img src="http://forum-test.oslo.osa/kirby/content/articles/798-advanced-crossbrowser-flexbox/figure2-3.jpg" alt="A navigation menu laid out differently depending on the width of the screen, done just using Flexbox" /></p>
<p class="caption">Figure 2: Magical expanding and contracting Flexy menu!</p>

<p>I have also flexed the 2nd <code>&lt;article&gt;</code>, and laid out the paragraphs inside like so (each contains an image):</p>

<pre><code>article:nth-of-type(2) {
  display: -ms-flexbox;
  -ms-box-orient: horizontal;
  -ms-box-pack: center;
  -ms-box-align: center;

  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: inline-flex;
  
  -webkit-flex-flow: row wrap;
  -moz-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  
  -webkit-align-content: flex-start;
  -moz-align-content: flex-start;
  -ms-align-content: flex-start;
  align-content: flex-start;
}

article p {
  margin: 0.5rem;
  
  -webkit-flex: 1 20rem;
  -moz-flex: 1 20rem;
  -ms-flex: 1 20rem;
  flex: 1 20rem;
}


article p img {
  display: block;
  width: 100%;
  border: 1px solid black;
}</code></pre>

<p>Here I am setting them to have a fixed <code>flex-basis</code> value, so they will change the number per line as the width increases and decreases (See Figure 3 — again, no media queries required), and have made both the items and the item content sit in the middle, horizontally and vertically.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/798-advanced-crossbrowser-flexbox/figure3-1.jpg" alt="different images show in the image box at different widths: at its widest, a 3x2 is shown" /><img src="http://forum-test.oslo.osa/kirby/content/articles/798-advanced-crossbrowser-flexbox/figure3-2.jpg" alt="different images show in the image box at different widths: at intermediate widths, a 2x3 is shown" /><img src="http://forum-test.oslo.osa/kirby/content/articles/798-advanced-crossbrowser-flexbox/figure3-3.jpg" alt="different images show in the image box at different widths: at its narrowest, a 1x6 is shown" /></p>
<p class="caption">Figure 3: A nice responsive image box, without media queries.</p>

<h2 id="fallbacks">Intelligent fallbacks for flexbox</h2>

<p>Support for flexbox is getting there (WebKit browsers, Presto-based Opera, Firefox support limited, coming in others soon!) but it will be a little while before support is really in the mainstream. This means that for now, we&#39;ll need to employ some intelligent alternatives if we want to employ flexbox in production code. Some browsers (old WebKits, and Firefox) support an <a href="http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/">older version of the Flexbox syntax from 2009</a>. IE10 supports a weird hybrid of old and new, from 2011. As luck would have it the Modernizr feature detection library has a feature detect for modern flexbox syntax and legacy flexbox syntax, with the <code>flexbox</code>, and <code>flexbox-legacy</code> flags. But there&#39;s a further problem — Modernizr&#39;s tests report IE10 as supporting modern flexbox, and not flexbox legacy. It in fact doesn&#39;t support either — it supports an in between syntax! This is why we have been putting the IE10-specific properties throughout our code in the main CSS rules, rather than dealing with them in the Modernizr code blocks you&#39;ll see below.</p>

<p class="note">Note: There has been discussion about what to do with the <a href="https://github.com/Modernizr/Modernizr/issues/812">Modernizr flexbox IE10 detection issue</a>, and it is still ongoing as of April 2013.</p>

<p>The following table provides a summary of modern flexbox syntax, and its equivalent in the 2009, and 2011 hybrid syntax:</p>

<table id="flexbox-syntax-table" style="caption-side: bottom">
<caption>Table showing the different flexbox syntaxes supported across different browsers, and what the equivalents are for different properties.</caption>
  <tr>
    <th>Final syntax</th>
    <th>2009 syntax</th>
    <th>2011 hybrid syntax</th>
  </tr>
  <tr>
    <td>display: flex</td>
    <td>display: box</td>
    <td>display: flexbox</td>
  </tr>
  <tr>
    <td>flex-direction: row</td>
    <td>box-orient: horizontal</td>
    <td>box-orient: horizontal</td>
  </tr>
  <tr>
    <td>justify-content: flex-start</td>
    <td>box-pack: start</td>
    <td>box-pack: start</td>
  </tr>
  <tr>
    <td>align-items: flex-start</td>
    <td>box-align: start</td>
    <td>box-align: start</td>
  </tr>
  <tr>
    <td>flex: 1</td>
    <td>box-flex: 1</td>
    <td>flex: 1</td>
  </tr>
</table>

<p class="note">Note: There is a <code>box-lines</code> property in the 2009 spec, which looks like an equivalent of <code>flex-wrap</code>, but unfortunately this doesn&#39;t seem to be supported by any of the legacy syntax-supporting browsers. My example therefore wouldn&#39;t work, so I had to simplify it for older browsers.</p>

<p>So I have got the following fallback styles provided in my example for browsers that don&#39;t support flexbox modern, but do support flexbox legacy:</p>

<pre><code>/* legacy flexbox fallback */

.no-flexbox section {
  display: -webkit-box;
  display: -moz-box;
  
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
}

.no-flexbox nav {
  padding: 1rem;
  width: 20%;
}

.no-flexbox article {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
}

.no-flexbox article p {
  float: left;
}

.no-flexbox article img {
  display: block;
  width: 200px;
}</code></pre>

<p>Then we&#39;ve got the following in place, for browsers that don&#39;t even support legacy flexbox:</p>

<pre><code>.no-flexbox-legacy nav, .no-flexbox-legacy article {
  float: left;
}

.no-flexbox-legacy nav {
  width: 20%;
}

.no-flexbox-legacy article {
  width: 36%;
}

.no-flexbox article img {
  float: left;
}</code></pre>

<p class="note">Note: A good way to generate cross browser Flexbox code, and learn about the syntax different browsers use, is to use the <a href="http://the-echoplex.net/flexyboxes/">Flexy Boxes</a> tool.</p>

<h2>Adding in simple media queries for narrow and wide screen layouts</h2>

<p>In the end, I did decide to put in a couple of media queries, just to fix the layout at narrow screen widths. But please take note of how small the code inside the media queries is: flexbox creates layouts that are innately very flexible, at varying screen widths.</p>

<p>First of all, a brief fix for the legacy flexbox layout:</p>

<pre><code>@media all and (max-width: 600px) {
  h1 {
    font-size: 5rem;
  }
  
  .no-flexbox section { 
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
  }
  
  .no-flexbox nav {
    width: 100%;
    margin-left: -3rem;
  }
  
  .no-flexbox nav a, .no-flexbox nav ul, .no-flexbox nav li {
    width: 100%;
  }

}</code></pre>

<p>Next, a fix for modern flexbox and no flex at all browsers, at small screen widths.</p>

<pre><code>@media all and (max-width: 480px) {
  article:nth-of-type(1) {
    -webkit-flex: 1 100%;
    -moz-flex: 1 100%;
    -ms-flex: 1 100%;
    flex: 1 100%;
  }
  
  body {
    min-width: 320px;
  }
  
  nav ul {
    width: 100%;
  }
    
  .no-flexbox-legacy nav, .no-flexbox-legacy article {
    float: none;
  }

  .no-flexbox-legacy nav, .no-flexbox-legacy article {
    width: 100%;
  }
}</code></pre>

<p>Last, a media query that just centers the content on wide screens.</p>

<pre><code>@media all and (min-width: 1100px) {
  section {
    width: 1100px;
    margin: 0 auto;
  }
}</code></pre>

<h2>Conclusion</h2>

<p>There are limitations to using flexbox at the moment, and it will be much easier when flexbox is just supported across all modern browsers in the same way. For now, it is much more effective to just stick to simpler, single line uses of flexbox, as multi-line flexboxes can&#39;t really be done effectively in legacy-flex supporting browsers. As it standards, my example works ok, even though the legacy layout is not as good as the modern flexbox layout; one other interesting problem is that Firefox seems to refuse to center content that has been laid out as a flexbox using the <code>margin: 0 auto</code> trick (the centering works fine in Safari).</p>

<p>For simple flexbox uses however, you can get things working well a wide range of modern browsers: Chrome, Firefox, Safari, Opera Presto 12.1+, IE 10+, iOS and Android.</p>
