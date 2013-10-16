Title: Creating and modifying HTML
----
Date: 2009-02-03 06:38:23
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
<li class="prev"><a href="http://dev.opera.com/articles/view/traversing-the-dom/" rel="prev" title="link to the previous article in the series">Previous article—Traversing the DOM</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/" rel="next" title="link to the next article in the series">Next article—Dynamic style - manipulating CSS with JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>Introduction</h2>

<p>In this article I’ll explain the basics of using JavaScript to
manipulate the content of your pages, including showing and hiding parts of a
page, and adding new HTML and removing it. At the end of this you’ll
understand that the most fundamental thing we use JavaScript for
is to change the contents of pages, and you’ll understand the best ways
to do this.</p>

<p>The article contents are as follows:</p>

<ul>
  <li><a href="#hidingshowing">Hiding and showing</a>
    <ul>
      <li><a href="#hidingshowingexample">Hiding and showing example</a>
        <ul>
          <li><a href="#regex">Regular expressions</a></li>
          <li><a href="#connectingcode">Connecting the working code to the page</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#creatinghtml">Creating HTML</a></li>
  <li><a href="#summary">Summary</a></li>
  <li><a href="#exercises">Exercise questions</a></li>
</ul>

<h2 id="hidingshowing">Hiding and showing</h2>

<p>The easiest place to start is with manipulating the HTML you’ve already
got, by hiding or showing elements that are already in the page. To do this,
you can use JavaScript to change the styles on an element. CSS styles are already a
powerful way of describing how an element looks, and one part of how an
element looks is whether it’s displayed at all. The CSS <code>display</code>
property is the key to showing and hiding an element: setting it to 
<code>display:none;</code> hides an element. Imagine a paragraph like this:</p>

<pre><code>&lt;p id=&quot;mypara&quot; style=&quot;display: none&quot;&gt;I am a paragraph&lt;/p&gt;</code></pre>

<p>That paragraph would be invisible on the page. JavaScript allows you to
<em>dynamically</em> add that <code>display: none</code> style to that element
and take it away.</p>

<p>JavaScript is designed to allow you to get a <em>reference</em> to an HTML
element. For example, <code>var el = document.getElementById(&quot;nav&quot;);</code> will
give you a reference to the element with <code>id=&quot;nav&quot;</code>. Once you’ve got
a reference to an element, you can change the CSS applied to it by using the <code>style</code> attribute. For example, our above
“mypara” paragraph is currently hidden (it has <code>display: none</code>  set).
To show it, set the style attribute <code>display</code> to
<code>block</code>:</p>

<pre><code>var el = document.getElementById(&#39;mypara&#39;);
el.style.display = &#39;block&#39;;</code></pre>

<p>And lo, the paragraph appears. Setting CSS on an element through the
<code>style</code> attribute does the same thing as setting it in the
<code>style</code> attribute in the HTML itself, so the above code setting 
<code>el.style.display = &#39;block&#39;</code> achieves the same effect as putting 
<code>style=&quot;display: block&quot;</code> directly in your HTML. Except that it’s dynamic. Hiding any element is just as simple:</p>

<pre><code>var el = document.getElementById(&#39;mypara&#39;);
el.style.display = &#39;none&#39;;</code></pre>

<h3 id="hidingshowingexample">Hiding and showing example</h3>

<p>Theory is all good, but a more practical example may be useful here. Imagine
a set of tabs, where clicking on the tab itself shows it and hides all the 
others. </p>

<p>Here’s an example of a set of tabs:</p>

<pre><code>&lt;ol class=&quot;tablinks&quot;&gt;
  &lt;li&gt;&lt;a href=&quot;#tab1&quot;&gt;Tab 1&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#tab2&quot;&gt;Tab 2&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#tab3&quot;&gt;Tab 3&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;

&lt;div class=&quot;tab&quot; id=&quot;tab1&quot;&gt;This is tab 1&lt;/div&gt;
&lt;div class=&quot;tab&quot; id=&quot;tab2&quot;&gt;This is tab 2&lt;/div&gt;
&lt;div class=&quot;tab&quot; id=&quot;tab3&quot;&gt;This is tab 3&lt;/div&gt;</code></pre>

<p>In the <code>head</code> of the example file (see <a href="tabs.html">tabs.html</a> for the live example), you’ll find the following CSS and JavaScript (these would normally be put in external files and imported into the HTML, but I’m keeping everything in one file here to make things simpler to navigate). Some of the code looks intimidating; don’t worry, we’ll go through it.</p>

<pre><code>&lt;style type=&quot;text/css&quot;&gt;
ol.tablinks {
  margin: 0; padding: 0;
}
ol.tablinks li {
  float: left;
  border: 2px solid red;
  border-width: 2px 2px 0 2px;
  background: #eee;
  list-style: none;
  padding: 5px;
  margin: 0;
}
ol.tablinks li a {
  text-decoration: none;
  color: black;
}
div.tab {
  clear: left;
  border: 2px solid red;
  border-width: 1px 2px 2px 2px;
}
&lt;/style&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
var tabify = {
  hasClass: function(el,c) {
    return el.className.match(new RegExp(&#39;(\\s|^)&#39;+c+&#39;(\\s|$)&#39;));        
  },
  addClass: function(el,c) {
    if (!tabify.hasClass(el,c)) el.className += &quot; &quot; + c;
  },
  removeClass: function(el,c) {
    if (tabify.hasClass(el,c)) {
      el.className=el.className.replace(new RegExp(&#39;(\\s|^)&#39;+c+&#39;(\\s|$)&#39;),&#39; &#39;);
    }
  },
  hideAllTabs: function(ol) {
    var links = ol.getElementsByTagName(&quot;a&quot;);
    for (var i=0; i&lt;links.length; i++) {
      tabify.setTabFromLink(links[i], &quot;none&quot;);
   }
  },
  setTabFromLink: function(link, style) {
    var dest = link.href.match(/#(.*)$/)[1];
    document.getElementById(dest).style.display = style;
    if (style == &quot;none&quot;) {
        tabify.removeClass(link, &quot;active&quot;);
    } else {
        tabify.addClass(link, &quot;active&quot;);
    }
  },
  addEvent: function(obj, type, fn) {
    if ( obj.attachEvent ) {
      obj[&#39;e&#39;+type+fn] = fn;
      obj[type+fn] = function(){obj[&#39;e&#39;+type+fn]( window.event );};
      obj.attachEvent(&#39;on&#39;+type, obj[type+fn] );
    } else {
      obj.addEventListener( type, fn, false );
    }
  },  
  init: function() {
    var ols = document.getElementsByTagName(&quot;ol&quot;);
    for (var i=0; i&lt;ols.length; i++) {
      var ol = ols[i];
      if (!/(^|\s)tablinks(\s|$)/.test(ol.className)) { continue; }
      tabify.addEvent(ol, &quot;click&quot;, function(e) {
        var target = window.event ? window.event.srcElement : e.target;
        if (target.nodeName.toLowerCase() === &quot;a&quot;) {
          tabify.hideAllTabs(e.target.parentNode.parentNode);
          tabify.setTabFromLink(e.target, &quot;block&quot;);
          if (e) e.preventDefault();
          if (window.event) window.event.returnValue = false;
          return false;
        }
      }, true);
      tabify.hideAllTabs(ol);
      tabify.setTabFromLink(ol.getElementsByTagName(&quot;a&quot;)[0], &quot;block&quot;);
    }
  }
};
tabify.addEvent(window, &quot;load&quot;, tabify.init);
&lt;/script&gt;</code></pre>

<p>Each tab is a link. Each link has an <code>onclick</code>
event handler on it. That event handler does
two things: it <strong>hides</strong> all the <code>div</code>s (using the
<code>display: none</code> approach from above) and then <strong>shows</strong> 
the <code>div</code> corresponding to that tab, by setting that 
<code>div</code>’s <code>style</code> to <code>display: block</code>.</p>

<p>You’ll have noted that the HTML here is set up to still make sense even in
the absence of scripting; while clicking a link won’t show or hide a tab, the
links jump to the appropriate tab, so the page still operates correctly and
makes semantic sense even in a browser without JavaScript. This is important:
 it’s a technique that you may have heard referred to as “progressive
enhancement” (or, in the ancient tongue of three years ago “graceful
degradation”, but we don’t call it that any more). It’s important not only
for people who are using some modern browser but with JavaScript turned off, but
for a host of other user types as well. Assistive technologies such as
screen-readers for blind users rely heavily on the structure of your HTML
being semantic and meaningful, and their support for JavaScript enhancements is
not as good as those for sighted users. Mobile browsers also tend not to have
as much useful support for scripting. Search engines also read your HTML and
not your script—it could be said that Google is the world’s most
voracious blind browser user. This is the meaning of the term “progressive
enhancement”: start with a page that makes sense and displays its content
in the most simple of environments, such as a text-only web browser, and then
gradually add extra functionality to it so that at every step of the way
your site is still usable and functional.</p>

<p>All JavaScript code basically comes in two parts: the part that actually
does the work, and the part that hooks up that bit to the HTML. The code that
actually does the work in this example is pretty trivial: showing the corresponding tab to a particular link is two lines of JavaScript:</p>

<pre><code>var dest = link.href.match(/#(.*)$/)[1];
document.getElementById(dest).style.display = &quot;block&quot;;</code></pre>

<p>The links, if you remember, look like <code>&lt;a href=&quot;#tab1&quot;&gt;Tab 1&lt;/a&gt;</code>
and so the first line uses a regular expression (see the note below) to extract 
the part of the link that appears after the <code>#</code> symbol; in this 
example that would be the string <code>tab1</code>. That part of the link is the same as
the ID of the corresponding <code>div</code> (because, as mentioned, the page
is built to make sense semantically, so a “tab” links to its <code>div</code>).
We then fetch a reference to that <code>div</code> with 
<code>document.getElementById</code>, and set <code>style.display</code> to
<code>block</code> as previously discussed.</p>


<div class="note">
<h4 id="regex">Regular expressions</h4>
<p>Regular expressions are a sort of mini-programming-language designed to help
with the problem of “parsing” text—for example, answering questions like
“does this string appear inside this other string?“ and “in the string ‘abc123def’,
what are the numbers between ‘c’ and ‘d’?” They’re a very powerful tool, but
they’re also pretty complicated. There’s a description below of what the
regular expression is for; for now, though, feel free to take how they 
work on trust and come back to it later.</p>
<p>The “regex” (short for “regular expression”) used in this example is
<code>/#(.*)$/</code>. Each character in a regular expression is designed to
match against a sequence of characters in some target string; the idea is
to express how a target string is made up, in sections.</p>
<ul>
  <li><code>/ … /</code> &#x2014; the slashes denote the start and end of
  a regex, just like double or single quotes do for a “string”</li>
  <li><code>#</code> &#x2014; the hash symbol (#) actually means “match a 
  hash symbol”</li>
  <li><code>( … )</code> &#x2014; brackets mean “here is a section of
  the string that I’ll be interested in later”</li>
  <li><code>.*</code> &#x2014; this means “any characters you like”; it’s actually
  a dot (.), meaning “any one character”, followed by asterisk (*) meaning
  “repeat as many times as you want”</li>
  <li><code>$</code> &#x2014; the dollar means “the end of the 
  string”</li>
</ul>
<p>So our regex describes a “matching pattern” for a string comprised of “a hash,
followed by whatever characters you want”. <code>link.href</code> is the 
destination of the link we’re looking at (for example, <code>#tab1</code>, and
since this <em>is</em> a string described by “a hash followed by whatever
characters you want”), the “matching pattern” <em>does</em> apply to this 
string.</p>
<p><code>link.href.match(<strong>our_regexp</strong>)</code>, therefore, will return
a true rather than false result; what it actually returns is an array of two
things, <code>[&quot;#tab1&quot;, &quot;tab1&quot;]</code>. The first is the text that was matched
by the whole regex, and the second is the text matched inside the brackets; this
is why the brackets are there—to mark that part of the string as “this is the
bit we care about”. That <code>tab1</code> is the string we want, so we can
grab it out of the returned array (it’s the second item, so <code>[1]</code>
will grab it &#x2014; arrays start numbering at zero.)</p>
</div>

<h4 id="connectingcode">Connecting the working code to the page</h4>

<p>As mentioned above, there are two parts to the code: the part which actually
does the work, and the part which hooks up that bit to the HTML. Hooking up the
working code to the HTML is what events are for. In this particular example,
we care about two events: the <code>window</code>’s <code>load</code> event,
which is used to say “start everything off”, and the tab list’s
<code>click</code> event, which is fired when the user clicks on a tab. When the
page loads, we need to run the connection code, and the connection code should
connect the tab <code>click</code> event to the code above, which displays the
appropriate tab.</p>

<p>Running code in response to an event is done with the 
<code>addEventListener</code> function in most browsers and with the
<code>attachEvent</code> function in Internet Explorer. Here we are creating a “wrapper” function, which does the right thing depending on which is supported:</p>

<pre><code>addEvent: function(obj, type, fn) {
  if ( obj.attachEvent ) {
    obj[&#39;e&#39;+type+fn] = fn;
    obj[type+fn] = function(){obj[&#39;e&#39;+type+fn]( window.event );};
    obj.attachEvent(&#39;on&#39;+type, obj[type+fn] );
  } else {
    obj.addEventListener( type, fn, false );
  }
}</code></pre>
  
<p>(Don’t worry too much about how this works; just take it on trust for now—you’ll understand it better as you become more experienced in JavaScript.) 
This function takes three parameters, <code>obj</code>, <code>type</code>,
and <code>fn</code>, which are “the object that fires the event”, “the
event we care about”, and “the function to run when the event fires”.
We need to run our function called <code>tabify.init</code> when the page loads;
the <code>tabify.init</code> function will then take care of hooking up each
tab’s <code>click</code> event.</p>

<pre><code>addEvent(window, &quot;load&quot;, tabify.init);</code></pre>

<p>As you can see from the HTML structure above, a set of tabs are actually
expressed as an ordered list with <code>class=&quot;tablinks&quot;</code>. So the
<code>tabify.init</code> function needs to do the following:</p>

<ol>
  <li>Find all the <code>&lt;ol&gt;</code>s on the page with a class of 
  <code>tablinks</code></li>
  <li>Attach to each <code>&lt;ol&gt;</code>’s <code>click</code> event some code that does the following:
  <ol>
    <li>Work out exactly which tab link the user clicked on</li>
    <li>Work out which actual tab corresponds to that tab link</li>
    <li>Show that one tab</li>
    <li>Hide any other tabs</li>
  </ol>
  </li>
</ol>

<p>The <code>init</code> function that does all this looks like so:</p>

<pre><code>init: function() {
  var ols = document.getElementsByTagName(&quot;ol&quot;);
  for (var i=0; i&lt;ols.length; i++) {
    var ol = ols[i];
    if (!/(^|\s)tablinks(\s|$)/.test(ol.className)) { continue; }
    tabify.addEvent(ol, &quot;click&quot;, function(e) {
      var target = window.event ? window.event.srcElement : e.target;
      if (target.nodeName.toLowerCase() === &quot;a&quot;) {
        tabify.hideAllTabs(e.target.parentNode.parentNode);
        tabify.setTabFromLink(e.target, &quot;block&quot;);
        if (e) e.preventDefault();
        if (window.event) window.event.returnValue = false;
        return false;
      }
    }, true);
    tabify.hideAllTabs(ol);
    tabify.setTabFromLink(ol.getElementsByTagName(&quot;a&quot;)[0], &quot;block&quot;);
  }
}</code></pre>
  
<p>Let’s walk through this function step by step, looking at what each part does in turn:</p>

<pre><code>var ols = document.getElementsByTagName(&quot;ol&quot;);
  for (var i=0; i&lt;ols.length; i++) {
    var ol = ols[i];
    if (!/(^|\s)tablinks(\s|$)/.test(ol.className)) { continue; }
  }</code></pre>

<p>This finds all the <code>&lt;ol&gt;</code>s on the page with a class of <code>tablinks</code>&#x2014;it then pulls up a list of <em>all</em> <code>&lt;ol&gt;</code>s and for each one,
says “if this <em>doesn’t</em> have a class of ‘tablinks’, then skip it”.
(Checking the class is done with a regular expression; <code>continue</code>
means “skip over this one and on to the next”.)</p>

<pre><code>tabify.addEvent(ol, &quot;click&quot;, function(e) {
  ...
});</code></pre>

<p>This attaches some code to each <code>&lt;ol&gt;</code>’s <code>click</code> event.</p>
  
<pre><code>var target = window.event ? window.event.srcElement : e.target;</code></pre>

<p>This works out exactly which tab link the user clicked on…</p>

<pre><code>tabify.setTabFromLink(e.target, &quot;block&quot;);</code></pre>

<p>…then this shows that single tab…</p>

<pre><code>tabify.hideAllTabs(e.target.parentNode.parentNode);</code></pre>

<p>…and finally, this line hides any other tabs.</p>

<p>The <code>setTabFromLink</code> and <code>hideAllTabs</code> functions are
also in the code; they use the techniques above to hide a tab or show it.
Take a look at them to see how they work &#x2014; they’re separate functions
because it’s often useful to take a block of code that’s called from more
than one place and put it in its own function. (It makes your code easier
to understand and reuse in multiple places. People will sometimes refer to this as “breaking out” or “factorising” code into a function.)</p>

<p>There&#39;s a bit of &quot;extra credit&quot; work in there as well, which neatly 
demonstrates more adding and removing of attributes. The <code>setTabFromLink</code>
function not only displays the appropriate tab but also sets 
<code>class=&quot;active&quot;</code> on the &quot;active&quot; tab. It does this with the help
of three utility functions, <code>hasClass</code>, <code>removeClass</code>, and
<code>addClass</code>. In the same way that we hide all the tabs and then show
the active one, we use <code>removeClass</code> to remove &quot;active&quot; from the
<code>className</code> of all the tablinks and then <code>addClass</code> to add
&quot;active&quot; to the one tablink which is actually active. Just adding a class to
a link may seem pointless &#x2014; after all, classes are invisible &#x2014; but
it&#39;s a hook for styling. We can (and have) make links with 
<code>class=&quot;active&quot;</code> appear differently, by adding extra CSS:</p>

<pre><code>ol.tablinks li a {
  background-color: red;
}

ol.tablinks li a.active {
  background-color: white;
}</code></pre>

<p>So now, the &quot;active&quot; tab appears in white, while other tabs appear in red.
Using JavaScript to add and remove classes is a very common technique, and one
that you should use whenever possible; CSS is good at controlling layout and
position and appearance of your HTML elements, and so using JavaScript to
alter the classes on those elements means that they can pick up different
CSS styles. It&#39;s an ideal unification; JavaScript makes your elements dynamic
but doesn&#39;t actually change very much itself. Just add a class and let CSS
do the heavy lifting.</p>

<h2 id="creatinghtml">Creating HTML</h2>

<p>DOM scripting is much more powerful than simply altering the 
CSS properties of your existing HTML, though. You can also dynamically create
new HTML that was never in your page to begin with. For example, 
on the tech news site Slashdot, a link in a comment displays the destination of
the link in square brackets, so a link like 
&lt;a href=&quot;http://opera.com&quot;&gt;A web browser&lt;/a&gt; will display as 
<strong>&lt;a href=&quot;http://opera.com&quot;&gt;A web browser&lt;/a&gt; [opera.com]</strong>.
(They did this to stop people being <a href="http://www.youtube.com/watch?v=oHg5SJYRHA0" title="Rickrolling: giving someone a link which looks sensible but is actually to a Youtube recording of Rick Astley performing &#39;Never Gonna Give You Up&#39;. Never stops being funny.">rickrolled</a>, or worse.) 
Adding this extra bit of HTML, displaying the destination domain of every link 
on the page, will be easy to do with JavaScript.</p>

<p>Creating new HTML elements is done with the 
<code>document.createElement</code> function. For this
example, we only need to add one thing: after each link, we’ll add a 
<code>span</code> containing text listing the domain of the link (check out <a href="linkify.html">linkify.html</a> for a live example). The HTML for the example looks like this:</p>

<pre><code>&lt;p id=&quot;start&quot;&gt;This is some text that has 
&lt;a href=&quot;http://www.w3.org/TR/html4/struct/links.html&quot;&gt;links&lt;/a&gt; in it
to various places, including &lt;a href=&quot;http://www.opera.com&quot;&gt;Opera&lt;/a&gt;,
&lt;a href=&quot;http://www.bbc.co.uk/&quot;&gt;the BBC&lt;/a&gt; and an internal link to
&lt;a href=&quot;#start&quot;&gt;the beginning of this section&lt;/a&gt;. All the external links
should have &lt;span&gt;[domain]&lt;/span&gt; after them.&lt;/p&gt;</code></pre>

<p>The JavaScript looks like this:</p>

<pre><code>&lt;script type=&quot;text/javascript&quot;&gt;
var linksuffix = {
  addEvent: function(obj, type, fn) {
    if ( obj.attachEvent ) {
      obj[&#39;e&#39;+type+fn] = fn;
      obj[type+fn] = function(){obj[&#39;e&#39;+type+fn]( window.event );};
      obj.attachEvent(&#39;on&#39;+type, obj[type+fn] );
    } else {
      obj.addEventListener( type, fn, false );
    }
  },  
  init: function() {
    var links = document.getElementById(&quot;linksuffixtext&quot;).getElementsByTagName(&quot;a&quot;);
    for (var i=0; i&lt;links.length; i++) {
      var matches = links[i].href.match(/^http:\/\/(.*?)\//);
      if (matches) {
        var linkdomain = matches[1];
        var span = document.createElement(&quot;span&quot;);
        var spantext = document.createTextNode(&quot; [&quot;+linkdomain+&quot;]&quot;);
        span.appendChild(spantext);
        links[i].parentNode.insertBefore(span, links[i].nextSibling);
      }
    }
  }
};
linksuffix.addEvent(window, &quot;load&quot;, linksuffix.init);
&lt;/script&gt;</code></pre>

<p>The part of the script that does the work here is as follows:</p>

<pre><code>var links = document.getElementsByTagName(&quot;a&quot;);
for (var i=0; i&lt;links.length; i++) {
  var matches = links[i].href.match(/^http:\/\/(.*?)\//);
  if (matches) {
    var linkdomain = matches[1];
    var span = document.createElement(&quot;span&quot;);
    var spantext = document.createTextNode(&quot; [&quot;+linkdomain+&quot;]&quot;);
    span.appendChild(spantext);
    links[i].parentNode.insertBefore(span, links[i].nextSibling);
  }
}</code></pre>

<p>This breaks down like this:</p>

<pre><code>var links = document.getElementsByTagName(&quot;a&quot;);
for (var i=0; i&lt;links.length; i++) {
  ...
}
</code></pre>

<p>First, it finds all the links (<code>getElementsByTagName(&quot;a&quot;)</code>) in the document</p>

<pre><code>var matches = links[i].href.match(/^http:\/\/(.*?)\//);
if (matches) {
  ...
}
</code></pre>

<p>This line uses a regular expression on each link to find out whether the destination of the
link begins with <code>http://something/</code>. If it does…</p>

<pre><code>var linkdomain = matches[1];
var span = document.createElement(&quot;span&quot;);
var spantext = document.createTextNode(&quot; [&quot;+linkdomain+&quot;]&quot;);
span.appendChild(spantext);</code></pre>

<p>…this next part first gets the “linkdomain”, the <code>www.opera.com</code> part of the link. It next creates a <code>&lt;span&gt;</code> element using 
<code>document.createElement</code>. Next, it creates a “textNode”. While HTML
elements themselves are created with <code>document.createElement</code>, 
all text in an HTML document is actually contained within 
“textNode”s, and you have to create those separately. You 
don’t have to worry about this (or even know about it) when writing 
actual HTML, but you do have to know about it when creating elements using 
DOM scripting. The text in the textNode is actually “ [domain]”, 
created by concatenating (adding together)
strings. Finally, this part uses the <code>&lt;span&gt;</code>’s
<code>appendChild</code> method to put the textNode inside the span.</p>

<pre><code>links[i].parentNode.insertBefore(span, links[i].nextSibling);
</code></pre>

<p>This line adds the <code>span</code> into the document. At this point, <code>span</code> is a reference to an HTML
element that looks like this:</p>

<pre><code>&lt;span&gt; [example.com]&lt;/span&gt;</code></pre>

<p>That element however isn’t part of the document. It’s not part of any document yet; it’s just floating around in limbo. Adding the element to the document can be
done in one of two ways: using <code>appendChild</code> as above, or using
<code>insertBefore</code>. The <code>appendChild</code> function adds our new
element at the <em>end</em> of an existing element (that’s why it’s called
<em>append</em>). Since we want to add it in the middle of an existing element,
we need <code>insertBefore</code>. Remember that our current bit of HTML looks
something like this:</p>

<pre><code>&lt;p&gt;... text that has 
&lt;a href=&quot;http://www.w3.org/TR/html4/struct/links.html&quot;&gt;links&lt;/a&gt; in it
to ...</code></pre>

<p>This equates to a DOM tree looking something like Figure 1:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/169-47-creating-and-modifying-html/figure1.jpg" alt="DOM tree before the addition of the span element after the link" />
<p class="comment">Figure 1: The DOM tree before the addition of the span element after the link</p>

<p>We want to insert our new span in between the <code>&lt;a&gt;</code> and the
“in it to” textNode, so that it appears after the <code>&lt;a&gt;</code>. This would leave our DOM tree looking like Figure 2:</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/169-47-creating-and-modifying-html/figure2.jpg" alt="DOM tree after the addition of the span element" />
<p class="comment">Figure 2: The DOM tree after the addition of the span element</p>

<p>or, more simply, HTML such as</p>

<pre><code>&lt;p&gt;... text which has 
&lt;a href=&quot;http://www.w3.org/TR/html4/struct/links.html&quot;&gt;links&lt;/a&gt;
&lt;span&gt; [domain]&lt;/span&gt; in it to ...</code></pre>

<p>What would be handy here is to be able to say “insert our new 
<code>span</code> <em>after</em> the link”. Sadly, there is no 
<code>insertAfter</code> function. Instead, we need to insert it 
<em>before</em> the thing after the link (confusing, but think about it and
it’ll make sense). A quick shortcut to “the thing after an element labelled
<code>el</code>” is <code>el.nextSibling</code>. The <code>insertBefore</code>
function needs to be called on the element that you’re inserting into, which
is the parent <code>&lt;p&gt;</code> of the link, quickly accessible with
<code>link.parentNode</code>. So the full call, as above, is</p>

<pre><code>links[i].parentNode.insertBefore(span, links[i].nextSibling);
</code></pre>

<p>That is, find the parent (<code>&lt;p&gt;</code>) of the link we’re currently
processing (<code>links[i]</code>), and insert our created <code>span</code> element
(<code>span</code>) before the thing after the link 
(<code>links[i].nextSibling</code>). Treating HTML as a DOM tree in this way
and inserting new elements into it can be confusing at first, but it soon
becomes clearer as you get more practice at it.</p>


<h2 id="summary">Summary</h2>

<p>HTML provides the structure of your pages, and CSS provides the description
of how it looks. What JavaScript brings is flexibility; your HTML structure
and your CSS styles become <em>dynamic</em>. You can change how your pages
look and feel and work from moment to moment, based on what your users do. It’s
the next step up: from well-thought-out and well-structured information to 
data that changes depending on what your users need. You can show and hide elements,
change styles and appearances, and add new HTML or remove the old in whatever
way you need to.</p>

<h2 id="exercises">Exercise questions</h2>

<ul>
  <li>How do you set an element’s CSS display property to hide an element?</li>
  <li>What’s the difference between an element and a text node?</li>
  <li>Give two reasons why progressive enhancement is important.</li>
  <li>What’s the difference between <code>appendChild</code> and 
  <code>insertBefore</code>?</li>
  <li>Why do we use an <code>addClass</code> function rather than just
  concatenating the new class name with an existing element&#39;s <code>className</code>
  attribute?</li>
  <li><p>In the following HTML structure, what would 
  <code>document.getElementById(&quot;marker&quot;).nextSibling</code> be?</p>
  
  <pre><code>&lt;p&gt;This is a &lt;strong&gt;block of HTML with 
  &lt;span id=&quot;marker&quot;&gt;various markup&lt;span&gt; in it&lt;/strong&gt;.&lt;/p&gt;</code></pre></li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/traversing-the-dom/" rel="prev" title="link to the previous article in the series">Previous article—Traversing the DOM</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/dynamic-style-css-javascript/" rel="next" title="link to the next article in the series">Next article—Dynamic style - manipulating CSS with JavaScript</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>

<img alt="Picture of the article author Stuart Langridge" src="http://forum-test.oslo.osa/kirby/content/articles/169-47-creating-and-modifying-html/stuartlangridge.jpg" class="right" />


<p style="padding-bottom:50px; padding-right: 10px;">Stuart Langridge is quite possibly the only person in the world to
have a BSc in Computer Science and Philosophy. When he&#39;s not fiddling
about with computers, he&#39;s a JavaScript, Django, and Python hacker at
<a href="http://www.canonical.com">Canonical</a>, author of SitePoint&#39;s <a href="http://www.sitepoint.com/books/dhtml1/">DHTML Utopia</a>, and a drinker of
decent beers. He&#39;s also one-quarter of the team at <a href="http://lugradio.org/presenters/">LugRadio</a>, the
world&#39;s premiere Free and Open Source Software radio show. His
ramblings about the web, scripting, open source software, and whatever
else floats past the window are to be found at <a href="http://kryogenix.org">kryogenix.org</a>; Stuart
is to be found outside looking for the smoking area.</p>li
