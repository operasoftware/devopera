---
title: 'CSS Viewport Units: `vw`, `vh`, `vmin` and `vmax`'
authors:
- chris-mills
intro: 'CSS viewport units allow us to size lengths on web pages relative to the viewport size, which has some interesting applications for responsive design. In this article we’ll explore the fundamentals of this topic.'
license: cc-by-3.0
layout: article
---
<h2>Introduction</h2>

<p>The <a href="http://www.w3.org/TR/css3-values/">CSS Values and Units Module Level 3</a> defines a whole host of new units that can be used in various contexts, for example seconds and milliseconds, degrees and radians, and rems for sizing things relative to the font-size on the root element. One type of units that has not been so widely discussed is viewport units, for sizing things relative to the viewport size, a brilliant proposition for responsive design. They are currently supported by a reasonable variety of browsers (Opera 15, Firefox, Chrome, Blackberry 10, IE10, iOS), and allow for a lot of interesting new possibilities. Let's explore.</p>

<h2>Viewport unit syntax</h2>

<p>In brief, the available new units are as follows:</p>

<ul>
<li><code>1vw</code>: 1% of viewport width</li>
<li><code>1vh</code>: 1% of viewport height</li>
<li><code>1vmin</code>: <code>1vw</code> or <code>1vh</code>, whatever is smallest</li>
<li><code>1vmax</code>: <code>1vw</code> or <code>1vh</code>, whatever is largest</li>
</ul>

<p class="note">Note that IE9 supports the old syntax for <code>vmin</code> — <code>vm</code>, but not for <code>font-size</code>. Webkit-based browsers that support it do so, but not dynamically — refresh the browser window if you see no change upon resizing the viewport.</p>

<p>I have created a <a href="vw-units.html">simple viewport demo</a> that includes a main heading, a dummy navigation menu, and a simple article of content split into columns using column-width from the <a href="http://www.w3.org/TR/css3-multicol/">CSS Multi-column Layout Module</a> (Figure 1).</p>

<pre><code>article {
  -webkit-column-width: 40rem;
  -moz-column-width: 40rem;
  column-width: 40rem;
}

article p {
    -webkit-break-inside: avoid-column;
    -moz-break-inside: avoid-column;
    break-inside: avoid-column;
}

article p:first-child {
  margin-top: 0;
}</code></pre>

<p>If you load this up in a supporting browser and try adjusting the viewport width, you'll see that the main heading and navigation menu's text sizes adjust accordingly to keep them fitting inside the design (Figure 2)! This is very cool, and works because they are sized relative to the viewport width — when it changes, they change.</p>

<p><img src="vwunit1.jpg" alt="a simple web page layout with a main heading, navigation menu and three columns of body copy"></p>
<p class="caption">Figure 1: A simple layout for our vw unit example.</p>

<p><img src="vwunit2.jpg" alt="a simple web page layout with a main heading and navigation menu, and one column of body copy. the viewport width has been decreased and the text size decreases accordly"></p>
<p class="caption">Figure 2: When the viewport width is decreased, the heading and nav items decrease text size accordingly.</p>

<p>The code used for this is as follows:</p>

<pre><code>h1 {
  font-size: 6vw;
}

nav li a {
  font-size: 1.5vw;
}</code></pre>

<p>This allows you to natively implement responsive headings in a similar fashion to Paravel's excellent jQuery plugin <a href="http://fittextjs.com/">fittext.js</a> (although with less flexibility; fittext automatically expands headings so they will fill up their containers, so they will still work if the amount of text in the headings changes). But think about it — I have kept things simple here, but you could size all your UI features with these units, resulting in the ultimate liquid layout that always stays relative to the viewport size.</p>

<p>According to <a href="http://caniuse.com/viewport-units">caniuse.com</a>, at the time of writing support for viewport units in today’s browsers ran at about 55%. So you should think carefully when using them in your production projects. You could use fittext.js, consider using a Polyfill (<a href="https://github.com/saabi/vminpoly">vminpoly</a> works ok, but is in need of improvements) or use a fallback like so (bearing in mind that old IE doesn’t support rem units either):</p>

<pre><code>h1 {
  font-size: 100px;
  font-size: 10rem;
  font-size: 6vw;
}</code></pre>

<p class="note">You should be careful about overusing vw units: I especially wouldn't recommend it for body copy, as you could too easily end up with text that is too small to read easily on some devices.</p>

<h2>Summary</h2>

<p>That's it! I hope you think viewport units are as cool as I do, and I'll look forward to seeing what you create with them. Well, when I say viewport units are cool — I am pretty much just talking about <code>vw</code> and <code>vh</code>; I can't think of a specific use case for <code>vmin</code> or <code>vmax</code>. If you have got one, I'd love to hear from you.</p>
