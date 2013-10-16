Title: Animating flexboxes: the lowdown
----
Date: 2013-04-04 14:04:19
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

<p>On a recent plane flight, I starting noodling around with combining flexbox properties, animations and transitions. I came to the conclusion that, for simple accordion-type UI features (see Figure 1), this can be quite useful. Sure, it is tricky to get it working the same across all browsers, but using modernizr you can feed legacy properties to older browsers that support the 2009 legacy flexbox syntax, and then provide something completely different to those geriatric browsers we are still called upon to support that have no flexbox support at all — like a simple tabbed interface perhaps.</p>	

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/799-animating-flexboxes-the-lowdown/figure1.png" alt="The final web site interface — 5 columns, with one column is expanded wider than the others, with text shown inside it" /></p>
<p class="caption">Figure 1: A simple accordion interface created with flexbox, transitions and a touch of JavaScript. <a href="http://dev.opera.com/static/articles/2013/animating-flexboxes/flexbox-transition-js/flexbox-transition-javascript.html">run the final example here</a>.</p>

<p>Let&#39;s explore!</p>

<h2>A simple barebones test</h2>

<p>To do the initial test, I created a simple structure of <code>&lt;articles&gt;</code> contained within a <code>&lt;section&gt;</code>:</p>

<pre><code>&lt;section&gt;
  &lt;article&gt;&lt;/article&gt;
  &lt;article&gt;&lt;/article&gt;
  &lt;article&gt;&lt;/article&gt;
&lt;/section&gt;</code></pre>

<p>The CSS I used was as follows:</p>

<pre><code>section {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: flex;
}

article {
  height: 300px;
  -webkit-flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border: 1px solid black;
  -webkit-transition: 1s all;
  -moz-transition: 1s all;
  -ms-transition: 1s all;
  transition: 1s all;
}

article:hover {
  -webkit-flex: 2;
  -moz-flex: 2;
  -ms-flex: 2;
  flex: 2;
}</code></pre>

<p>I happily saw that it worked fine (In Opera and Chrome anyway, other browsers don&#39;t support modern flexbox) — on hover, the <code>&lt;article&gt;</code>s smoothly increase in size, with their siblings shrinking to accommodate (<a href="http://dev.opera.com/static/articles/2013/animating-flexboxes/flexbox-experiment.html">run the initial test example</a>).</p>

<h2>A better looking transition flexbox example</h2>

<p>Following on from this I created a better looking example, and continued to play (see Figure 2).</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/799-animating-flexboxes-the-lowdown/figure2.png" alt="a simple web site interface with 5 columns. one column is expanded wider than the others, with text shown inside it" /></p>
<p class="caption">Figure 2: A simple accordion interface created with flexbox and transitions <a href="http://dev.opera.com/static/articles/2013/animating-flexboxes/flexbox-transition/flexbox-transition.html">run the transitions example</a>.</p>

<p>The HTML structure is basically the same, except that I&#39;ve added in more content, increased the number of <code>&lt;article&gt;</code>s from three to five, and removed the <code>&lt;section&gt;</code> — <code>&lt;body&gt;</code> is now the outer container. I have used the following CSS to give me the same effect as before (plus a load of styling that I&#39;ve omitted for brevity):</p>

<pre><code>body {
  margin: 0 auto;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: flex;
}

article {  
  -webkit-flex: 1 0;
  -moz-flex: 1 0;
  -ms-flex: 1 0;
  flex: 1 0;
  -webkit-transition: 1s all;
  -moz-transition: 1s all;
  -ms-transition: 1s all;
  transition: 1s all;
  overflow: hidden;
  height: 550px;
  color: rgba(0,0,0,1);
}

article:hover {
  -webkit-flex: 1 600px;
  -moz-flex: 1 600px;
  -ms-flex: 1 600px;
  flex: 1 600px;
  color: rgba(0,0,0,1);
}</code></pre>

<p class="note">Note that I&#39;ve hidden the headings for now, as they were creating a weird problem with the flex animation not working at lower viewport widths, refusing to expand beyond the width of the headings. Don&#39;t worry: I&#39;ll throw in a fix for this later on in the article!</p>

<h2>An animation/flexbox example</h2>

<p>The next thing I tried was creating a similar example, but using animations applied to the <code>&lt;article&gt;</code>s using JavaScript: it is surely better to allow the user to expand and contract content by clicking, rather than being at the mercy of hover states!</p>

<p>My code base for this example (<a href="http://dev.opera.com/static/articles/2013/animating-flexboxes/flexbox-animation-js/flexbox-animation-javascript.html">try the flexbox animation example live</a>) is very similar to the previous example, except that there are no transitions, and I have defined the following animations to control the width increases/decreases:</p>

<pre><code>@keyframes flex-out {
  0% {	  
    color: rgba(0,0,0,0);
    width: auto;
  }
  
  100% {  
    color: rgba(0,0,0,1);
    width: 500px;
  }
}

@keyframes flex-in {
  0% {	  
    color: rgba(0,0,0,1);
    width: 500px;
  }
  
  100% {  
    color: rgba(0,0,0,0);
    width: auto;
  }
}</code></pre>

<p class="note">Note: I&#39;ve not included all the different vendor prefix versions of the keyframe blocks in this listing, to abate boredom.</p>

<p>YES. Bit of a golf clap moment here. I&#39;m not animating <code>flex</code>, like I did with the transition example! WHY? Because it won&#39;t work. Flexbox can be transitioned, but not animated, so we had to make do with animating width instead. The animations are attached to classes, like this:</p>

<pre><code>article.flex-out {
  -webkit-animation: flex-out 1s both;
  -moz-animation: flex-out 1s both;
  -ms-animation: flex-out 1s both;
  animation: flex-out 1s both;
}

article.flex-in {
  -webkit-animation: flex-in 1s both;
  -moz-animation: flex-in 1s both;
  -ms-animation: flex-in 1s both;
  animation: flex-in 1s both;
}</code></pre>

<p>I then use a fairly simple toggle function to attach the classes to the <code>&lt;article&gt;</code>s, alternating them on successive clicks to allow us to expand and collapse them as we want.</p>

<pre><code>var articles = document.getElementsByTagName(&#39;article&#39;);

var toggleFlex = function(articleId) {
  for(j=0;j&lt;=(articles.length-1);j++) {
    if(articles[j].id == articleId) {
      if(articles[j].className == &quot;&quot; || articles[j].className == &quot;flex-in&quot;) {
        articles[j].className = &quot;flex-out&quot;;
      } else {
        articles[j].className = &quot;flex-in&quot;;
      }
    } else if(articles[j].className == &quot;flex-out&quot;) {
      articles[j].className = &quot;flex-in&quot;;
    }
  }
}

for(i=0;i&lt;=(articles.length-1);i++) {
  articles[i].onclick = function() {
    var articleId = this.id;
    toggleFlex(articleId);
  }
}</code></pre>

<p>But there was a problem … put simply, this sucks! It doesn&#39;t seem to work very well across browsers, and the animation can be jarring. I decided to go back to the drawing board, and revisit transitions!</p>

<h2>The final attempt: transitions, JavaScript, and backwards compatibility</h2>

<p>I thought a bit more about this, and decided to try the JavaScript toggling technique along with transitions. This actually turns out to be simpler and more effective. You just put the transitions inside your CSS like before, but don&#39;t include the hover states inside the CSS. Instead, you can attach alternative styles to the elements via JavaScript on click, which triggers the transition. In addition, I have:</p>

<ul>
  <li>Made the boxes fill the whole of the screen width <strong>and</strong> height</li>
  <li>Added the headings back in, fixing the layout problem they were creating and keeping them accessible in the process</li>
  <li>Used Modernizr to make the examples work in older browsers that support the legacy Flexbox syntax</li>
  <li>Made it keyboard accessible</li>
</ul>

<p><a href="http://dev.opera.com/static/articles/2013/animating-flexboxes/flexbox-transition-js/flexbox-transition-javascript.html">Try the final example live</a>.</p>

<p>The first thing I did was to add Modernizr to my page, and some Google fonts:</p>

<pre><code>&lt;script src=&quot;modernizr-flex.js&quot;&gt;&lt;/script&gt;
&lt;link href=&#39;http://fonts.googleapis.com/css?family=Viga|Bowlby+One|Montaga&#39; rel=&#39;stylesheet&#39; type=&#39;text/css&#39;&gt;</code></pre>

<p>Next, the full CSS for the <code>&lt;html&gt;</code>, <code>&lt;body&gt;</code> and <code>&lt;article&gt;</code>s ended up looking like this:</p>

<pre><code>html {
  font-size: 10px;
  font-family: &#39;Montaga&#39;, serif;
  width: 100%;
  height: 100%;
  margin: 0;  
}

body {
  width: 100%;
  height: inherit;
  margin: 0;
  
  display: -ms-flexbox;
  -ms-box-orient: horizontal;
  
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
}

.no-flexbox body {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
}

article {  
  -webkit-flex: 1 0;
  -moz-flex: 1 0;
  -ms-flex: 1 0;
  flex: 1 0;
  
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  color: rgba(0,0,0,0);
  
  background: -webkit-linear-gradient(top left,rgba(0,0,0,0),rgba(0,0,0,0.4));
  background: -moz-linear-gradient(top left,rgba(0,0,0,0),rgba(0,0,0,0.4));
  background: -ms-linear-gradient(top left,rgba(0,0,0,0),rgba(0,0,0,0.4));
  background: linear-gradient(to bottom right,rgba(0,0,0,0),rgba(0,0,0,0.4));
  
  -webkit-transition: 1s all;
  -moz-transition: 1s all;
  -ms-transition: 1s all;
  -o-transition: 1s all;
  transition: 1s all;
  
  overflow: hidden;
  position: relative;
  
  padding-top: 5rem;
}

.no-flexbox article {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  width: 200px;
}</code></pre>

<p>The transitions are defined here, but this time I have no <code>article:hover</code> rule to dictate what happens on mouse over. In addition, I have used Modernizr&#39;s class names to apply legacy flex properties to <code>&lt;body&gt;</code> and <code>&lt;section&gt;</code> only for browsers that don&#39;t support modern flexbox but do support flexbox legacy, and I&#39;ve added in IE-specific flex properties (e.g. <code>display: -ms-flexbox; -ms-box-orient: horizontal;</code>) to the main rules so that IE10 will now support the example. This will now work in Safari, Firefox and IE10 as well.</p>

<p class="note">Note: Read the <a href="http://dev.opera.com/articles/view/advanced-cross-browser-flexbox/#fallbacks">Intelligent fallbacks for flexbox</a> section of my previous Flexbox article for more detailed information on the current state of Flexbox browser support, and the legacy syntax required for cross browser support.</p>

<p>Also note the <code>width</code> and <code>height</code> of <code>100%</code> and <code>margin: 0</code> on the <code>&lt;html&gt;</code> element, and <code>height: inherit</code> and <code>margin: 0;</code> on the <code>&lt;body&gt;</code>. This forces the contents to fill up the viewport, whatever width and height it is, which works well with the flexbox inside it.</p>

<p>Now let&#39;s look at the JavaScript:</p>

<pre><code>var articles = document.getElementsByTagName(&#39;article&#39;);
  
  var toggleFlex = function(articleId) {
    for(j=0;j&lt;=(articles.length-1);j++) {
      if(articles[j].id == articleId) {
        articles[j].focused = true;
        if(articles[j].className == &quot;&quot;) {
          if(Modernizr.flexbox) {
            articles[j].className = &quot;flex-out&quot;;
            articles[j].style.cssText = &quot;-webkit-flex: 1 500px;-moz-flex: 1 500px;-ms-flex: 1 500px;flex: 1 500px;color: rgba(0,0,0,1);&quot;
          } else if(Modernizr.flexboxlegacy) {
            articles[j].className = &quot;flex-out&quot;;
            articles[j].style.cssText = &quot;width: 500px;color: rgba(0,0,0,1);&quot;
          }
        } 
      } else if(articles[j].className == &quot;flex-out&quot;) {
          articles[j].className = &quot;&quot;;
          articles[j].style.cssText = &quot;&quot;
      }
    }
  }
  
  for(i=0;i&lt;=(articles.length-1);i++) {
    articles[i].onfocus = function() {
      var articleId = this.id;
      toggleFlex(articleId);
    }
  }</code></pre>

<p>This is very similar to before. I&#39;m looping through all the <code>&lt;article&gt;</code>s, but this time I&#39;m adding an <code>onfocus</code> handler to them, not <code>onclick</code>. This means that the article can be keyboard accessible, so long as the <code>&lt;article&gt;</code>s can receive focus. I have handled that by adding an attribute of <code>tabindex=&quot;0&quot;</code> to all of them. The one problem is that now you can&#39;t close a chapter again by clicking on it when it is open. You can can only close a chapter by clicking on a different chapter. I&#39;ve left this as a problem for another day.</p>

<p>In the <code>toggleFlex()</code> function, I am looping through all of the <code>&lt;article&gt;</code>s, and checking which one is being clicked by checking its ID value. The one that is clicked is opened up and the text inside made visible by giving it a different flex basis value (or a different width in the case of legacy flexbox browsers, as they don&#39;t have flex basis available, and I couldn&#39;t get this to work in any other way) and high text opacity, plus it is given a <code>className</code> to set up a toggle:</p>

<pre><code>if(Modernizr.flexbox) {
  articles[j].className = &quot;flex-out&quot;;
  articles[j].style.cssText = &quot;-webkit-flex: 1 500px;-moz-flex: 1 500px;-ms-flex: 1 500px;flex: 1 500px;color: rgba(0,0,0,1);&quot;
} else if(Modernizr.flexboxlegacy) {
  articles[j].className = &quot;flex-out&quot;;
  articles[j].style.cssText = &quot;width: 500px;color: rgba(0,0,0,1);&quot;
}</code></pre>

<p>The other <code>&lt;article&gt;</code>s are not affected, unless they have already been opened up (checking whether they have the <code>flex-out</code> class), in which case they are contracted again by removing the CSS added to them and removing the class:</p>

<pre><code>else if(articles[j].className == &quot;flex-out&quot;) {
  articles[j].className = &quot;&quot;;
  articles[j].style.cssText = &quot;&quot;
}</code></pre>

<p>The last thing to mention is the headings. I have made the actual <code>&lt;h2&gt;</code>s very small and hidden them, so they won&#39;t mess up the layout but will still remain accessible to screen reader users:</p>

<pre><code>h2 {
  line-height: 0;
  font-size: 0;
  visibility: hidden;
}</code></pre>

<p>I have then added the visual headings back in using a CSS counter and absolutely positioned generated content, which won&#39;t trigger the layout problem encountered earlier:</p>

<pre><code>body {
  counter-reset: chapter 0;
}

article { 
  counter-increment: chapter;
}

article:before {
  font-family: &#39;Bowlby One&#39;, cursive;
  position: absolute;
  top: 13px;
  left: 10px;
  content: &quot;Chapter &quot; counter(chapter);
  font-size: 2rem;
  font-size: 1.5vw;
  color: rgba(0,0,0,0.5);
}</code></pre>

<h2>Summary</h2>

<p>This article has been fun to write, and I hope I have created an interesting technique that has at least given you food for thought! It is worth noting that you can achieve a similar effect using floated elements and focus states, like in this <a href="http://dev.opera.com/static/articles/2013/animating-flexboxes/float-test.html">float demo</a>. However, this is most inflexible — it relies on knowing the exact number of chapters you are going to have, and setting the percentages to suit. With the Flexbox method, it should work regardless of the number of child containers, and without needing to worry about exact measurements.</p>
