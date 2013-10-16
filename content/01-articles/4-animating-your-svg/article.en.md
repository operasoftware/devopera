Title: Animating Your SVG
----
Date: 2006-10-31 14:55:49
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

<p>SVG provides a simple way of doing animation. A couple of tools let you do it in a graphic environment, but here we&#39;re going to have a look under the hood at the source code.
Ideally, you should be able to understand basic SVG code, since this article is not an introduction to it. But if you&#39;re familiar with HTML and CSS you should easily be able to pick it up as we go along.</p>

<p>We&#39;ll start with a simple shape - a square (a rectangle with the same width and height).</p>
<pre><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;4em&quot; height=&quot;4em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
  <b>&lt;rect width=&quot;50&quot; height=&quot;50&quot; /&gt;</b>
&lt;/svg&gt;</code></pre>

<p><object type="image/svg+xml" data="" style="width:4em; height:4em">
  It&#39;s just a black square.</object>
 (This is an SVG image that is 4x4 em units, with an internal coordinate system
 defined as going from 0,0 at the top left corner, to 100,100 at the bottom
 right. It has one rectangle, 50x50, whose top left corner is at the default position of 0,0  
and which has SVG&#39;s default style - basic black.)</p>

<h2>Basic animations...</h2>

<p>We can have some simple fun by animating it. Let&#39;s just make it look a bit
wider (To see this happening, open <a href="ex-r01.svg">the example
ex-r01.svg</a> - this is animation and it only lasts 10 seconds.
You have to reload it to see it happen again):</p>
<pre class="example"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;4em&quot; height=&quot;4em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
  &lt;rect width=&quot;50&quot; height=&quot;50&quot;&gt;
    <b>&lt;animate attributeName=&quot;width&quot; to=&quot;100&quot; dur=&quot;10s&quot; /&gt;
  &lt;/rect&gt;</b>
&lt;/svg&gt;</code></pre>

<p>We have done two things:</p>
<ol>
  <li>Make the <code>rect</code> element into a pair of tags, so we can put
    something inside them</li>
  <li>Put an <code>animate</code> element inside it, that says to change the
    attribute <code>width</code> to 100, over the course of 10 seconds</li>
</ol>

<p>And so, over 10 seconds, the width of the rectangle <i>appears</i>
wider. It isn&#39;t really - if you look at the document source code, or its DOM, at any time, the
<code>width</code> of the <code>rect</code> is 50. But in the presentation,
the appearance of the document changes. In fact it changes smoothly over the time
specified by the <code>dur</code> attribute of the animation, from where it
was to the value specified in the <code>to</code> attribute. When the
animation is over, it snaps back to its real value.</p>

<p>Let&#39;s play with the animation a bit. We can use another attribute,
<code>fill</code>, to say what happens at the end of it. Instead of snapping
back to where it started, we can tell the effect to remain in place. We can
also use <code>repeatCount</code> to make an animation repeat itself. Let&#39;s
see this with two rectangles, animating different attributes in each
one. Have a look at <a href="ex-r02.svg">example ex-r02.svg</a> and what it
does...</p>
<pre class="example"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;4em&quot; height=&quot;4em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
  &lt;rect width=&quot;50&quot; height=&quot;50&quot;&gt;
    &lt;animate attributeName=&quot;width&quot; to=&quot;100&quot; dur=&quot;30s&quot; <b>fill=&quot;freeze&quot;</b> /&gt;
  &lt;/rect&gt;
  &lt;rect width=&quot;50&quot; height=&quot;50&quot; <b>x=&quot;50&quot; y=&quot;50&quot;</b>&gt;
    &lt;animate <b>attributeName=&quot;x&quot;</b> to=&quot;0&quot; dur=&quot;3s&quot; <b>repeatCount=&quot;10&quot;</b> /&gt;
  &lt;/rect&gt;
&lt;/svg&gt;</code></pre>

<p>Here we have added some attributes to play with, and made some different
effects. We can make things repeat a number of times, or for some amount of
time (with the attribute <code>repeatDur</code>), or even forever by using <code>repeatCount=&quot;indefinite&quot;</code>.</p>

<p class="aside">How does the animation element know which attribute to affect?
 There are two <code>width</code> attributes in our SVG, but only one of them is changed.
 The simple default rule is that an animation applies to its parent element - 
 the one it is directly inside. Later on we&#39;ll see how you can override this,
 and have the animation affect particular identified elements.</p>

<h2>Adding some style</h2>

<p>We have so far let everything follow SVG&#39;s fundamental style rule - basic
black. Let&#39;s have a bit of fun now with SVG&#39;s ability to style objects. We&#39;ll
start with a couple of coloured squares, and see what we can do to them (in
<a href="ex-r03.svg">example ex-r03.svg</a>):</p>
<pre class="example"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;4em&quot; height=&quot;4em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
  &lt;rect width=&quot;50&quot; height=&quot;50&quot; <b>fill=&quot;red&quot; opacity=&quot;0&quot;</b>&gt;
    &lt;animate <b>attributeName=&quot;opacity&quot; to=&quot;1&quot;</b> dur=&quot;30s&quot; fill=&quot;freeze&quot; /&gt;
  &lt;/rect&gt;
  &lt;rect width=&quot;50&quot; height=&quot;50&quot; x=&quot;50&quot; y=&quot;50&quot; <b>fill=&quot;blue&quot; stroke=&quot;red&quot; stroke-width=&quot;1&quot;</b>&gt;
    &lt;animate <b>attributeName=&quot;stroke-width&quot; to=&quot;7&quot;</b> dur=&quot;3s&quot; repeatCount=&quot;10&quot; /&gt;
  &lt;/rect&gt;
&lt;/svg&gt;</code></pre>

<p>We can also animate things that have a
default value. We can apply two (or more) different animations at once. And,
as <a href="ex-r04.svg">example ex-r04.svg</a> shows, we don&#39;t have to simply
start all animations as soon as the picture appears:</p>
<pre class="example"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;4em&quot; height=&quot;4em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
  &lt;rect width=&quot;50&quot; height=&quot;50&quot; fill=&quot;red&quot; opacity=&quot;0&quot;&gt;
    &lt;animate attributeName=&quot;opacity&quot; to=&quot;1&quot; dur=&quot;30s&quot; fill=&quot;freeze&quot; /&gt;
    <b>&lt;animate attributeName=&quot;x&quot; to=&quot;50&quot; dur=&quot;15s&quot; repeatCount=&quot;2&quot; /&gt;</b>
  &lt;/rect&gt;
  &lt;rect width=&quot;50&quot; height=&quot;50&quot; x=&quot;50&quot; y=&quot;50&quot; fill=&quot;blue&quot; stroke=&quot;red&quot; stroke-width=&quot;1&quot;&gt;
    &lt;animate attributeName=&quot;stroke-width&quot; to=&quot;7&quot; dur=&quot;3s&quot; repeatCount=&quot;10&quot; /&gt;
    <b>&lt;animate attributeName=&quot;opacity&quot; to=&quot;.1&quot; begin=&quot;10s&quot; dur=&quot;10s&quot; /&gt;</b>
  &lt;/rect&gt;
&lt;/svg&gt;</code></pre>

<h2>Taking stock (1)</h2>

<p>So let&#39;s review what we have seen:</p>

<p>We can use the animate element to animate some attribute, such as</p>
<ul>
  <li><code>width</code> and <code>height</code></li>
  <li><code>x</code>, <code>y</code>, (and yes, <code>rx</code> and
    <code>ry</code> for rounded rectangle corners, <code>cx</code>,
    <code>cy</code> and <code>r</code> for circles)</li>
  <li><code>opacity</code>, and by extension <code>stroke-opacity</code> and
    <code>fill-opacity</code></li>
  <li><code>stroke-width</code></li>
</ul>

<p>We can also make the animation do a few different things. We can tell it
when to start, how long go go for, or when to end with the
<code>begin</code>, <code>dur</code> and <code>end</code> attributes. We can
tell it to repeat with <code>repeatCount</code> or <code>repeatDur</code>
(for example <code>repeatDur=&quot;40s&quot;</code> will repeat for 40 seconds). We can
animate various different attributes of an element, using
<code>attributeName</code> - including some that are not explicitly set, but
have a default value such as 0 or 1 (e.g. <code>opacity</code>).</p>

<p>And we can tell an animation to maintain its final effect after it has
finished, with <code>fill=&quot;freeze&quot;</code>, or equally, not to with
<code>fill=&quot;remove&quot;</code> (which is the default value, if we say nothing at
all).</p>

<div class="aside">
<p>Wait a
minute, we have seen two <code>fill</code> attributes used, in different
ways! How does this work?</p>
<p>There is a normal
<code>fill</code> attribute for the <code>animate</code> element. It is an
XML attribute which describes what to do when an animation has finished. Its default value is <code>none</code></p> 
<p>There is also a
<dfn>property</dfn> called <code>fill</code>, which can be expressed either
as an attribute in XML, or as a CSS property in a <code>style</code>
attribute or even an external CSS stylesheet. It describes the colour (or pattern)
 that is used to fill a painted SVG element, and its default value is <code>black</code>.</p>
<p>(If this bit seems complicated, don&#39;t worry too
much. You can do a lot without worrying about it - but if you want to make
complex animated SVG you will probably want to understand).</p></div>

<h2>Trickier transformations...</h2>

<p>Now let&#39;s have some fun. We&#39;re going to start with a small triangle. (Very
small. A right angle triangle one pixel along the top and the left sides, so
about 1.4 along the hypoteneuse).</p>
<pre class="example"><code>&lt;?xml version=&quot;1.1&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;10em&quot; height=&quot;10em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
 &lt;path style=&quot;fill:#00f; fill-opacity:.5&quot; d=&quot;M 0,0 L 0,1 0,1 1,0 1,0 z&quot; /&gt;
&lt;/svg&gt;</code></pre>

<p><a href="ex-b00.svg">Example ex-b00.svg</a> looks a
little like this: <object type="image/svg+xml" data="" style="border:1px dashed red" width="100" height="100">It&#39;s very very small...</object> 
 (the border is added so you can see where it is. Unless you zoom in a <i>lot</i>, it doesn&#39;t look like much, really. Good thing SVG is scalable. Even with zoom at 500%, the triangle is still only 5 pixels along the top and left side...)</p>

<p class="aside">The astute will already notice that we have defined a path that has five
points - but two pairs are zero-legth lines that go nowhere. We&#39;re going to come back and play
with this a bit later. It&#39;s also blue, and semi-transparent.</p>

<p>The <code>path</code> element can have content, including animations, which is what we
are going to give it. For a start, let&#39;s see it grow for us. We&#39;re going to
do this by animating an attribute that we could have put there already -
<code>transform</code> - to scale it up a bit. We can do this because
<code>transform</code> is <dfn>implied</dfn>, in other words there is a
default value defined in the specification so it is as if the attribute exists 
already. But <code>transform</code> can have a series of different values,
not just a number, so we are going to use the <code>animateTransform</code>
element to do the work, and tell it what kind of a transformation we want to
be animating. <a href="ex-b01.svg">Example ex-b01.svg</a> shows what this
looks like:</p>
<pre class="example"><code>&lt;?xml version=&quot;1.1&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;10em&quot; height=&quot;10em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
  &lt;path style=&quot;fill:#00f;fill-opacity:.5&quot; d=&quot;M 0,0 L 0,1 0,1 1,0 L 1,0 z&quot;&gt;
    <b>&lt;animateTransform attributeName=&quot;transform&quot; attributeType=&quot;XML&quot;
      type=&quot;scale&quot; from=&quot;1&quot; to=&quot;500&quot; dur=&quot;10s&quot; fill=&quot;freeze&quot;/&gt;</b>
  &lt;/path&gt;
&lt;/svg&gt;</code></pre>

<p>Let&#39;s look carefully at the animateTransform again, and the attributes we are using:</p>
<dl>
  <dt><code>attributeName</code></dt>
    <dd>This is the attribute whose <strong>apparent</strong> value we are
      going to change. Most attributes can be animated in SVG - a full list
      is part of the specification.</dd>
  <dt><code>attributeType</code></dt>
    <dd>This can either be <code>XML</code>, or <code>CSS</code>. The default
      value for this is <code>auto</code>, which means that it first looks
      for a style property (remember the discussion about fill, above?) and
      if it doesn&#39;t find one looks for a normal XML attribute.</dd>
  <dt><code>type</code></dt>
    <dd>This is here because we are animating a transformation - one of the
      special features of SVG. We could instead have used the other
      transformation types  <code>rotate</code>, 
      <code>translate</code>, <code>skewX</code> or <code>skewY</code>, but here we want to make our little
      triangle bigger, so we change its <code>scale.</code></dd>
  <dt><code>from</code></dt>
    <dd>This is the start value. We could leave it out, and let it start
      &quot;where it was&quot; as we have done so far.</dd>
  <dt><code>to</code></dt>
    <dd>This goes with <code>from</code> - it is the value we want to end up
      with. In this case we have made our triangle appear 500 times
    bigger.</dd>
  <dt><code>dur</code></dt>
    <dd>The is the duration. We have used 10 seconds as the time that the
      animation takes. (By default, animation is smooth, spaced over the
      duration of the animation).</dd>
  <dt><code>fill</code></dt>
     <dd>This says that when the animation has finished, its effect continues
       to be shown. The alternative value of <code>remove</code> is the default,
       so we rarely need to specify it.
</dd></dl>

<p>Some complex changes can be done with a simple <code>animate</code>. Remember that our
triangle is defined as a path, but that there are actually 5 points. Although
triangles only have 3, as we all know, the path looks like a triangle because 2 sets
of points are doubled up. Squares have 4 points, and animation is smooth. We are
going to take advantage of this to move both duplicate points to a new spot, on
top of each other. This will look like the triangle growing out to fill a
square, as <a href="ex-b02.svg">example ex-b02.svg</a> shows:</p>
<pre class="example"><code>&lt;?xml version=&quot;1.1&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;10em&quot; height=&quot;10em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
  &lt;path style=&quot;fill:#00f;fill-opacity:.5&quot; d=&quot;M 0,0 L 0,1 0,1 1,0 L 1,0 z&quot;&gt;
    &lt;animateTransform attributeName=&quot;transform&quot; attributeType=&quot;XML&quot;
      type=&quot;scale&quot; from=&quot;1&quot; to=&quot;100&quot;  begin=&quot;2s&quot; dur=&quot;10s&quot; fill=&quot;freeze&quot;/&gt;
    <b>&lt;animate attributeName=&quot;d&quot; attributeType=&quot;XML&quot; to=&quot;M 0,0 L 0,1 L 1,1 1,1 L 1,0 z&quot;
      begin=&quot;5s&quot; dur=&quot;9s&quot; fill=&quot;freeze&quot; /&gt;</b>
  &lt;/path&gt;
&lt;/svg&gt;</code></pre>

<p>We are about move to some (minimally) practical application of all this. But let&#39;s look first at one more type of animation. In <a href="ex-b03.svg">example ex-b03.svg</a> we are going to change the colour, using animateColor.</p>

<pre class="example"><code>&lt;?xml version=&quot;1.1&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;10em&quot; height=&quot;10em&quot; viewBox=&quot;0 0 100 100&quot;&gt;
  &lt;path style=&quot;fill:#00f;fill-opacity:.5&quot; d=&quot;M 0,0 L 0,1 0,1 1,0 L 1,0 z&quot;&gt;
    &lt;animateTransform attributeName=&quot;transform&quot; attributeType=&quot;XML&quot;
      type=&quot;scale&quot; from=&quot;1&quot; to=&quot;100&quot;  begin=&quot;2s&quot; dur=&quot;10s&quot; fill=&quot;freeze&quot;/&gt;
    <b>&lt;animateColor to=&quot;red&quot; attributeName=&quot;fill&quot; begin=&quot;4s&quot; dur=&quot;8s&quot; fill=&quot;freeze&quot;/&gt;</b>
    &lt;animate attributeName=&quot;d&quot; attributeType=&quot;XML&quot; to=&quot;M 0,0 L 0,1 L 1,1 1,1 L 1,0 z&quot;
      begin=&quot;5s&quot; dur=&quot;9s&quot; fill=&quot;freeze&quot; /&gt;
  &lt;/path&gt;
&lt;/svg&gt;</code></pre>

<p>Here, we are really pushing the power of animation to sort things out for us. The original colour is specified in a <code>style</code> attribute as a CSS property. But we can describe it as if it were an attribute value, and change it as with another animation. Again, the implementation does the work of calculating a smooth transition.</p> 

<p class="aside">The attribute syntax that has been used for most CSS properties in the examples here is just a convenience. SVG uses (and extends) CSS for style, but it provides the attribute syntax for easy manipulation with XSLT and the like. We could just as well have described the presentation of the document using external style sheets, and still applied the same transformations.</p>

<h2>Time to get practical</h2>

<p>Let&#39;s begin a new example, something that moves and is useful. Example <a href="ex-c00.svg">ex-c00.svg</a> is a few lines that rotate around in a
circle...</p>
<pre class="example"><code>&lt;?xml version=&quot;1.1&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot;
     width=&quot;240px&quot; height=&quot;240px&quot; viewBox=&quot;0 0 240 240&quot;&gt;
&lt;g transform=&quot;translate(120,120) rotate(180)&quot;&gt;
  &lt;g&gt;
    &lt;line stroke-width=&quot;5&quot; y2=&quot;80&quot; stroke=&quot;black&quot; opacity=&quot;.5&quot; /&gt;
      &lt;animateTransform attributeName=&quot;transform&quot; type=&quot;rotate&quot;
         repeatCount=&quot;indefinite&quot; dur=&quot;12h&quot; by=&quot;360&quot; /&gt;
    &lt;circle r=&quot;7&quot; /&gt;
  &lt;/g&gt;
  &lt;g&gt;
    &lt;line stroke-width=&quot;4&quot; y2=&quot;95&quot; stroke=&quot;red&quot; opacity=&quot;.9&quot; /&gt;
      &lt;animateTransform attributeName=&quot;transform&quot; type=&quot;rotate&quot;
         repeatCount=&quot;indefinite&quot; dur=&quot;60min&quot; by=&quot;360&quot; /&gt;
    &lt;circle r=&quot;6&quot; fill=&quot;red&quot;/&gt;
  &lt;/g&gt;
  &lt;g&gt;
    &lt;line stroke-width=&quot;2&quot; y2=&quot;100&quot; stroke=&quot;blue&quot; /&gt;
    &lt;animateTransform attributeName=&quot;transform&quot; type=&quot;rotate&quot;
        repeatCount=&quot;indefinite&quot; dur=&quot;60s&quot; by=&quot;360&quot; /&gt;
    &lt;circle r=&quot;4&quot; fill=&quot;blue&quot;/&gt;
  &lt;/g&gt;
&lt;/g&gt;
&lt;/svg&gt;</code></pre>

<p>One of them goes round in a minute, one in an hour, and one in twelve
hours. This is just revision of things we have seen before, but in less than
25 short lines, we have a clock. Admittedly, it&#39;s not very exciting yet. It
would be nice to have a proper clock. Let&#39;s start by adding a background. We
have to put it before the clock hands, so that it gets painted underneath,
and we get <a href="ex-c01.svg">Example ex-c01.svg.</a></p>
<pre class="example"><code>&lt;?xml version=&quot;1.1&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot;
     width=&quot;240px&quot; height=&quot;240px&quot; viewBox=&quot;0 0 240 240&quot;&gt;
&lt;g transform=&quot;translate(120,120)&gt;

  &lt;g&gt;
    &lt;circle r=&quot;108&quot;  fill=&quot;red&quot; stroke-width=&quot;4&quot; stroke=&quot;#099&quot; &gt;
      &lt;animateColor attributeName=&quot;fill&quot; <b>values=&quot;white;red;black;blue;white&quot;</b>
        dur=&quot;10s&quot; repeatCount=&quot;infinite&quot;/&gt;
    &lt;/circle&gt;
    &lt;circle r=&quot;97&quot; fill=&quot;none&quot; stroke-width=&quot;9&quot; stroke=&quot;white&quot; 
       stroke-dasharray=&quot;4,46.789082&quot; transform=&quot;rotate(-1.5)&quot; /&gt;
    &lt;circle r=&quot;100&quot; fill=&quot;none&quot; stroke-width=&quot;3&quot; stroke=&quot;black&quot;
       stroke-dasharray=&quot;2,8.471976&quot; transform=&quot;rotate(-.873)&quot; &gt;
      &lt;animateColor attributeName=&quot;fill&quot; <b>values=&quot;white;black;white&quot;</b>
        dur=&quot;10s&quot; repeatCount=&quot;infinite&quot;/&gt;
    &lt;/circle&gt;
  &lt;/g&gt;

&lt;!-- the actual clock hands go here, but they are unchanged, except the
     translate has been split off, so I left them out to keep this bit shorter.
     The <a href="ex-c01.svg">example file</a> has the full source, of course. --&gt;

&lt;/g&gt;
&lt;/svg&gt;</code></pre>

<p>This clock is now lovely. An exciting animated changing skin. It also shows a new animation feature - instead of simply providing a <code>from</code> and <code>to</code> value, we specify a list of values that the animation should step through. Of course, there is a very real risk that we will get sick of this animation. Let&#39;s see how we can have alternatives, for when we want to change it. This is not so difficult, and we get <a href="ex-c02.svg">example c02.svg</a>, which allows us to switch skins on our clock just by clicking on it.</p>

<pre class="example"><code>&lt;?xml version=&quot;1.1&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot;
     width=&quot;240px&quot; height=&quot;240px&quot; viewBox=&quot;0 0 240 240&quot;&gt;
&lt;g transform=&quot;translate(120,120)&quot;&gt;
  &lt;g&gt;
      <b>&lt;set attributeName=&quot;display&quot; to=&quot;none&quot; begin=&quot;b1.click&quot; end=&quot;b2.click&quot;/&gt;</b>
      &lt;circle r=&quot;108&quot; fill=&quot;#6f6&quot; stroke-width=&quot;4&quot; stroke=&quot;#090&quot; <b>id=&quot;b1&quot;</b> /&gt;
      &lt;circle r=&quot;100&quot; fill=&quot;none&quot; stroke-width=&quot;3&quot; stroke=&quot;black&quot;
         stroke-dasharray=&quot;2,8.471976&quot; transform=&quot;rotate(-.873)&quot; /&gt;
      &lt;circle r=&quot;97&quot; fill=&quot;none&quot; stroke-width=&quot;9&quot; stroke=&quot;white&quot; 
         stroke-dasharray=&quot;4,46.789082&quot; transform=&quot;rotate(-1.5)&quot; /&gt;
  &lt;/g&gt;

  &lt;g&gt;
      <b>&lt;set attributeName=&quot;display&quot; to=&quot;none&quot; begin=&quot;b2.click&quot; end=&quot;b1.click&quot;/&gt;</b>
      &lt;circle r=&quot;108&quot;  fill=&quot;red&quot; stroke-width=&quot;4&quot; stroke=&quot;#099&quot; <b>id=&quot;b2&quot;</b> &gt;
      &lt;animateColor attributeName=&quot;fill&quot; values=&quot;white;red;black;blue;white&quot;
        dur=&quot;10s&quot; repeatCount=&quot;infinite&quot;/&gt;
    &lt;/circle&gt;
      &lt;--  (I snipped the rest of the background, which is unchanged) --&gt;
  &lt;/g&gt;

&lt;!-- the actual clock hands go here, but they are unchanged,
     so I left them out to keep this bit shorter.
     The <a href="ex-c02.svg">example file</a> has the full source, of course. --&gt;

&lt;/g&gt;
&lt;/svg&gt;</code></pre>

<p>Now we have two different backgrounds (the first one is not visible initially 
simply because it is covered by the second one). If you click on the background, it
changes from one to the other. We have a simple swap, but we could equally
have a chain of 3, or 27, backgrounds that we cycle through.</p>

<p>We are using another new element to perform our animation. <code>set</code> does as its name suggests - 
sets the (presentational) value of some attribute. Unlike the animations we have seen so far, this is not smooth but instantaneous.
On the other hand it can be used  in cases where there is no obvious way to make a smooth transition.</p>

<p>Yet another additional feature we are using is event-based animation, taking 
the start and end points from user interface events. In this case a click on the
 circle b1 or b2 (whichever is the visible background) activates one change and 
terminates the other. In order to do this, we have to give an <code>id</code> to 
the things we want to be triggers.</p>

<p>The transition in backgrounds here is basically
instantaneous. But we could have used various other kinds of animation to
provide an effect - scaling the background out over time, making one shrink
towards the centre and then the other expand from the centre, as if flipping
it over.</p>

<h2>Pushing it...</h2>

<p>The problem with our clock is that it always starts showing 12:00:00 - which is
fine if you happen to turn it on at precisely that time, or you are around to
pause it then. We could also tell it not to start moving until 12:00:00, using a
wallclock value for <code>begin</code>. But this isn&#39;t how real clocks work. In the
real world, if your clock is wrong, you can adjust it. Let&#39;s give our clock a
winder that we can use to adjust it.</p>

<p>There are a few steps we want to take at once. We are going to use animations 
that explicitly name their targets, rather than simply acting on their parent. We are
going to introduce yet another way to start and end an animation - this time, based on
when another animation starts or ends.</p>

<p>The code snippets below show the changes that are necessary to give the final 
<a href="ex-c03.svg">example, c03.svg</a>. As always, you can look at the full source
in the example (and this time it might be helpful).</p>

<pre class="example"><code>&lt;?xml version=&quot;1.1&quot;?&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot;
     <b>xmlns:xl=&quot;http://www.w3.org/1999/xlink&quot;</b>
     width=&quot;240px&quot; height=&quot;240px&quot; viewBox=&quot;0 0 240 240&quot;&gt;

&lt;!-- We need to use the xlink namespace, for references around the document --&gt;

&lt;g transform=&quot;translate(120,120)&quot;&gt;

&lt;!-- Don&#39;t forget the background. It&#39;s included in the <a href="ex-c03.svg">example code</a>,
     but not here in the interests of space. --&gt;

  &lt;g transform=&quot;rotate(180)&quot;&gt;
  &lt;!-- We need to give the groups representing hands an id, to animate them from
     elsewhere. We also make them additive, so different rotations combine. --&gt;
    &lt;g <b>id=&quot;h&quot;</b>&gt;
      &lt;line stroke-width=&quot;5&quot; y2=&quot;80&quot; stroke=&quot;black&quot; opacity=&quot;.5&quot; /&gt;
        &lt;animateTransform attributeName=&quot;transform&quot; type=&quot;rotate&quot;
           repeatCount=&quot;indefinite&quot; dur=&quot;12h&quot; by=&quot;360&quot; <b>additive=&quot;sum&quot;</b>/&gt;
      &lt;circle r=&quot;7&quot; /&gt;
    &lt;/g&gt;
      &lt;-- likewise with <b>id=&quot;m&quot;</b> for the minutes, <b>s</b> for seconds --&gt;
  &lt;/g&gt;

&lt;/g&gt;

&lt;!-- Now for the hard part. Starts off easily enough
     with the shapes we will use to make the winder.
     First the forward and backward buttons. --&gt;
  <b>&lt;polygon id=&quot;up&quot; points=&quot;0 10 0 2 2 0 8 0 10 2 10 10&quot;
     transform=&quot;translate(230, 106)&quot; /&gt;
  &lt;polygon id=&quot;down&quot; points=&quot;0 0 0 8 2 10 8 10 10 8 10 0&quot;
     transform=&quot;translate(230, 124)&quot; /&gt;</b>
&lt;!-- Now the reset button. --&gt;
  <b>&lt;rect id=&quot;r&quot; x=&quot;230&quot; y=&quot;116&quot; width=&quot;10&quot; height=&quot;8&quot; fill=&quot;red&quot; /&gt;</b> 
&lt;!-- Now, to move the time forward... --&gt;
  &lt;!-- We have a rotation, that applies to the thing with id=&quot;m&quot; - the minute hand --&gt;
  &lt;!-- It&#39;s additive so it combines with other animations. It can repeat, but when it
       repeats it is the same as starting again, so it doesn&#39;t need to accumulate. --&gt;
    <b>&lt;animateTransform attributeName=&quot;transform&quot; type=&quot;rotate&quot; xl:href=&quot;#m&quot; id=&quot;mup&quot;
         additive=&quot;sum&quot; repeatCount=&quot;indefinite&quot; dur=&quot;48s&quot; by=&quot;4320&quot; fill=&quot;freeze&quot;
         begin=&quot;up.mousedown;r.click&quot; end=&quot;up.mouseup;up.mouseout;r.click&quot;/&gt;</b>
      &lt;!-- It starts when the button is held down, and stops when let go, or moved off.
       But it also starts and immediately stops when the reset button is clicked. --&gt;

  &lt;!-- move the hour hand, by following the animation of the minute hand --&gt;
     <b>&lt;animateTransform attributeName=&quot;transform&quot; type=&quot;rotate&quot; xl:href=&quot;#h&quot;
         additive=&quot;sum&quot; repeatCount=&quot;indefinite&quot; dur=&quot;48s&quot; by=&quot;360&quot;  fill=&quot;freeze&quot;
         begin=&quot;mup.begin&quot; end=&quot;mup.end&quot;/&gt;</b>
      
  &lt;!-- Adjusting the time backward is so similar that I have left it out here --&gt;

&lt;/svg&gt;</code></pre>

<p>Note how we used <code>mup.begin</code> and <code>mup.end</code> as triggers 
for our animations. This allows chaining animations together. We have also specified 
more than one trigger to start the animations. These are simple techniques that can
give you a lot of power as you combine effects.</p>

<p>If you play with the winders, you&#39;ll notice something funnny happens.
Specifically, you can wind forward once, and backward once, and it
does what you expect. But if you wind forward several times, it resets itself
each time. If you have wound forwards and backwards, and then try another
one, it resets itself to a seemingly random point. Is this a bug? What&#39;s
happening?</p>

<p>This is actually reasonable (and we are relying on it to produce the reset
function). SMIL Animation 1.0, which is used in SVG, has no pause/resume
markup. Instead, if you repeat an animation it restarts itself - i.e. removes
its original effect and begins again. So if you have wound forward once,
backward once, and wind forward again, the backward adjustment will still be
in effect, but when you restart the forward winding, the first forward
adjustment is reset so you start with the backward adjustment applied only -
in other words, even further back.</p>

<h2>Conclusion</h2>

<p>We have seen how to use some basic animation in SVG to produce some
interesting effects. We have seen some simple techniques for interactive
or predetermined animations. We have also met some of the limits of animation.
You should now know enough to use animation for a variety of tasks, so be able 
to produce a range of effects with simple SVG markup.</p>

<p>There is more to explore in animation. We have assumed that the implementation
 always controls the pace, making a smooth transition between values. But we could
 have used <code>keyTimes</code> and <code>keySpline</code> to vary the pace of
 the changes. We haven&#39;t looked at <code>animateMotion</code> which lets us move
 an object, or some text, along a path, around in a circle, and so on.</p>

<p>As always, you can look at the relevant part of the specification (in this case, <a href="http://www.w3.org/TR/2003/REC-SVG11-20030114/animate.html">the animation chapter of SVG 1.1</a>) to see what is possible, and you should look at <a href="http://www.opera.com/docs/specs/">Opera&#39;s support documentation</a> to check that what you are using has been implemented. But at least for now, you have
 what it takes to make some of your cool graphics even cooler...</p>
<p>Happy animating!</p>

<h2>Implementation notes</h2>
<p>Not all SVG players support animation. I have not included most of the animations in this document, but they are all linked. All of these work in Opera 9+, and are valid SVG so will work in any conformant SVG player. The entire declarative animation syntax for SVG is available in every SVG version, including 1.1 Tiny (the smallest of them all).</p>
  
