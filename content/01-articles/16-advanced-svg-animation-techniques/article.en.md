Title: Advanced SVG Animation Techniques
----
Date: 2006-11-08 14:13:21
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

<p><a href="/articles/view/26/">In a previous article</a>, Charles McCathieNevile demonstrated how to do time-based (as opposed to frame-based) animation in <abbr title="Scalable Vector Graphics">SVG</abbr>, using <abbr title="Synchronized Multimedia Language">SMIL</abbr>. But we can do even more. Today&#39;s web applications, thanks to the advent of <abbr title="Asynchronous Javascript And XML">AJAX</abbr> clearing JavaScript&#39;s bad name, are very interactive and heavy on script-based logic.</p>

<p>So far, you can tell animations to start on a user interface event, and the syntax gives you fine-grained control of how the animation is performed. You need more, however, if you want to run an animation, or even create an animation on-the-fly based on particular conditions. Luckily, SVG caters for these needs, too.</p>

<p>As SVG is based on XML. the &quot;glue&quot; between SVG and the JavaScript programming runtime could be expected to be the <abbr title="Document Object Model">DOM</abbr> ... and it is! Animation elements in SVG are just like any other elements in SVG&#39;s grammar, and they can be created and controlled from JavaScript using the DOM interfaces. Let&#39;s get practical and try to write a handy little function that would fade out any element that&#39;s passed as a parameter. So, our <code class="sfunc">fade()</code> function will need to create the following piece of code on the fly:</p>

<pre><code>&lt;<span class="mtag">animate</span> <span class="mattr">attributeName</span>=&quot;<span class="mvalue">opacity</span>&quot; <span class="mattr">to</span>=<span class="mvalue">&quot;0&quot;</span> <span class="mattr">dur</span>=&quot;<span class="mvalue">0.25</span>&quot; <span class="mattr">fill</span>=&quot;<span class="mvalue">freeze</span>&quot; /&gt;</code></pre>

    <p>Easy! We know that <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS" title="Specification of the Document::createElementNS() method"><code class="sfunc">Document::createElementNS()</code></a> will let us generate an <a href="http://www.w3.org/TR/SVG11/animate.html#AnimateElement" title="Specification of the &#39;animate&#39; element"><code class="mtag">animate</code></a> element, and that all attributes will be set using the <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS" title="Specification of the Element::setAttributeNS() method"><code class="sfunc">Element::setAttributeNS()</code></a> method. Then, after generating the element, all that remains is to append it to the <code class="mtag">target</code> element passed as a parameter to our <code class="sfunc">fade()</code> function. Thus, the code to generate the aforementioned element should look like this:</p>

    <pre><code><span class="skeyw">function</span>&#xA0;<span class="sfunc">fade</span> (target) {
    &#xA0;&#xA0;<span class="comment">// create the &lt;animation&gt; element
    </span>&#xA0;&#xA0;<span class="skeyw">var</span> animation = document.<span class="sfunc">createElementNS</span>(
          <span class="sstring">&#39;http://www.w3.org/2000/svg&#39;</span>, <span class="sstring">&#39;animate&#39;</span>);
    &#xA0;&#xA0;<span class="comment">// set its attributes
    </span>&#xA0;&#xA0;animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;attributeName&#39;</span>, <span class="sstring">&#39;opacity&#39;</span>);
    &#xA0;&#xA0;animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;to&#39;</span>, <span style="color:#0000ff;">0</span>);
    &#xA0;&#xA0;animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;dur&#39;</span>, <span style="color:#0000ff;">0.25</span>);
    &#xA0;&#xA0;animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;fill&#39;</span>, <span class="sstring">&#39;freeze&#39;</span>);
    &#xA0;&#xA0;<span style="color:#236e25;">// link the animation to the target
    </span>&#xA0;&#xA0;target.<span class="sfunc">appendChild</span>(animation);
    }</code></pre>

    <p>This should be enough to have the animation work out. Actually, on second thought, probably not. Indeed, all animations should have a <a href="http://www.w3.org/TR/SVG11/animate.html#BeginAttribute" title="Specification of the begin attribute"><code>begin</code></a> attribute defined to specify when it starts. Omitting to specify what <code>begin</code> is means that the time offset to start the animation is 0 seconds, that is, when the document has loaded. So, unless we call this method right when the document is loaded, the animation will not be triggered as we want it to. </p>

<p>SVG has specific facilities to trigger animations from script at any given time. Indeed, a special <a href="http://www.w3.org/TR/SVG11/animate.html#IndefiniteValue" title="Specification of the indefinite attribute value"><code>indefinite</code></a> keyword can be used in both the <code class="mattr">begin</code> and <a href="http://www.w3.org/TR/SVG11/animate.html#EndAttribute" title="Specification of the end attribute"><code class="mattr">end</code></a> attributes. While this keyword doesn&#39;t look really helpful here, since it essentially seems to say that we don&#39;t specify when the animation starts or ends, it is in fact really powerful because it means that you can use the methods defined on the <a href="http://www.w3.org/TR/SVG11/animate.html#InterfaceElementTimeControl" title="Specification of the ElementTimeControl interface"><code>ElementTimeControl</code></a> interface from the SMIL DOM, for instance the <code class="sfunc">beginElement()</code> and <code class="sfunc">endElement()</code> methods. These methods are well named for what they do: begin or start an animation.</p>


<p>This means that if you ever have an animation you want to start from script, following any kind of code you need to execute to check that the animation should run, you can simply use <code>begin=&quot;indefinite&quot;</code> and you&#39;re golden. So, let&#39;s add this piece of beauty to our <code class="sfunc">fade()</code> function (added code <span class="m">highlighted</span>):</p>

    <pre><code><span class="skeyw">function</span>&#xA0; <span class="sfunc">fade </span>(target) {
  &#xA0;&#xA0;<span class="comment">// create the fade animation</span>
  &#xA0;&#xA0;<span class="skeyw">var</span> animation = document.<span class="sfunc">createElementNS</span>(
                         <span class="sstring">&#39;http://www.w3.org/2000/svg&#39;</span>, <span class="sstring">&#39;animate&#39;</span>);
  &#xA0;&#xA0;animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;attributeName&#39;</span>, <span class="sstring">&#39;fill-opacity&#39;</span>);
  &#xA0;&#xA0;<span class="m">animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;begin&#39;</span>, <span class="sstring">&#39;indefinite&#39;</span>);</span>
  &#xA0;&#xA0;animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;to&#39;</span>, <span style="color:#0000ff;">0</span>);
  &#xA0;&#xA0;animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;dur&#39;</span>, <span style="color:#0000ff;">0.25</span>);
  &#xA0;&#xA0;animation.<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;fill&#39;</span>, <span class="sstring">&#39;freeze&#39;</span>);
  &#xA0;&#xA0;<span class="comment">// link the animation to the target</span>
  &#xA0;&#xA0;target.<span class="sfunc">appendChild</span>(animation);
  &#xA0;&#xA0;<span class="comment m">// start the animation</span>
  &#xA0;&#xA0;<span class="m">animation.<span class="sfunc">beginElement</span>();</span>
}</code></pre>
    
<p>Now, <a href="01.svg">trying this out</a> gives the expected result, we did good. The amount of code we wrote here is alright, but if we were to write a more complex effect, things are likely to get very tedious. Being able to reuse a piece of SVG animation code would be much easier. We can&#39;t really make use of the built-in markup-based SVG <a href="http://www.w3.org/TR/SVG11/struct.html#UseElement" title="Specification of the &#39;use&#39; element"><code class="mtag">use</code></a> referencing mechanism here as it&#39;s meant to be used for things that get rendered only. We can, however, make use of the DOM to sort things out again. This time around, for illustration, we&#39;ll crank up our effect a notch by making our object scale down and slightly rotate as it fades out, for no particular reason besides being able to&#x2014;and it&#39;s all visuals, so that&#39;s actually a solid argument! Our template animation should be as follows, wrapped in a <a href="http://www.w3.org/TR/SVG11/struct.html#DefsElement" title="&quot;Specification"> element&quot;&gt;<code class="mtag">defs</code></a> element to clearly show that it&#39;s an asset we&#39;ll reuse, somehow:</p>

    <pre><code>&lt;<span class="mtag">defs</span> <span class="mattr">id</span>=<span class="mvalue">&quot;defs&quot;</span>&gt;
    &#xA0;&#xA0;&lt;<span class="mtag">animateTransform </span><span class="mattr">begin</span>=<span class="mvalue">&quot;indefinite&quot;</span> <span class="mattr">attributeName</span>=<span class="mvalue">&quot;transform&quot;</span> 
          <span class="mattr">type</span>=<span class="mvalue">&quot;translate&quot;</span> <span class="mattr">dur</span>=<span class="mvalue">&quot;0.5&quot;</span> <span class="mattr">additive</span>=<span class="mvalue">&quot;sum&quot;</span> /&gt; &#xA0;&#xA0;&#xA0;
    &#xA0;&#xA0;&lt;<span class="mtag">animateTransform </span><span class="mattr">begin</span>=<span class="mvalue">&quot;indefinite&quot;</span> <span class="mattr">attributeName</span>=<span class="mvalue">&quot;transform&quot;</span> 
          <span class="mattr">type</span>=<span class="mvalue">&quot;scale&quot;</span> <span class="mattr">to</span>=<span class="mvalue">&quot;0&quot;</span> <span class="mattr">dur</span>=<span class="mvalue">&quot;0.5&quot;</span> <span class="mattr">additive</span>=<span class="mvalue">&quot;sum&quot;</span> /&gt;
    &#xA0;&#xA0;&lt;<span class="mtag">animateTransform </span><span class="mattr">begin</span>=<span class="mvalue">&quot;indefinite&quot;</span> <span class="mattr">attributeName</span>=<span class="mvalue">&quot;transform&quot;</span> 
          <span class="mattr">type</span>=<span class="mvalue">&quot;rotate&quot;</span> <span class="mattr">to</span>=<span class="mvalue">&quot;30&quot;</span> <span class="mattr">dur</span>=<span class="mvalue">&quot;0.5&quot;</span> <span class="mattr">additive</span>=<span class="mvalue">&quot;sum&quot;</span> /&gt;
    &#xA0;&#xA0;&lt;<span class="mtag">animateTransform </span><span class="mattr">begin</span>=<span class="mvalue">&quot;indefinite&quot;</span> <span class="mattr">attributeName</span>=<span class="mvalue">&quot;transform&quot;</span> 
          <span class="mattr">type</span>=<span class="mvalue">&quot;translate&quot;</span> <span class="mattr">dur</span>=<span class="mvalue">&quot;0.5&quot;</span> <span class="mattr">additive</span>=<span class="mvalue">&quot;sum&quot;</span> /&gt;
    &#xA0;&#xA0;&lt;<span class="mtag">animate </span><span class="mattr">begin</span>=<span class="mvalue">&quot;indefinite&quot;</span> <span class="mattr">attributeName</span>=<span class="mvalue">&quot;opacity&quot;</span> <span class="mattr">to</span>=<span class="mvalue">&quot;0&quot;</span> <span class="mattr">dur</span>=<span class="mvalue">&quot;0.5&quot;</span> 
          <span class="mattr">fill</span>=<span class="mvalue">&quot;freeze&quot;</span> /&gt;
&lt;<span class="mtag">/defs&gt;</span></code></pre>

<p>In order for this to work, some blank values must be filled in via script. To be precise, we&#39;ll need to know what the size of the object we&#39;re fading is in order to slide it to its center, apply scaling and rotation, and then back to its origin, so that the transforms can be applied with the object&#39;s center as a reference point (this is what the first and last <a href="http://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement" title="Specification of the animateTransform element"><code class="mtag">animateTransform</code></a> elements do here). Also, a cloned copy of all of these elements is necessary in order to use them for the target object independently of any other fading animation that might have been triggered prior to that. Finally, all these animations also have to be triggered via script.</p>
    
<p>We&#39;ll start by figuring out the bounding box of the objects using the SVG DOM <a href="http://www.w3.org/TR/SVG11/types.html#InterfaceSVGLocatable" title="Specification of the SVGLocatableElement interface"><code class="sfunc">SVGLocatableElement::getBBox()</code></a> method. Then, cloning the elements is done by iterating through the animation elements and cloning them one after the other using the DOM <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-3A0ED0A4" title="Specification of the Node::cloneNode() method"><code class="sfunc">Node::cloneNode()</code></a> method. While cloning, we&#39;ll also attach the cloned animation elements as children of the target element for the fading animation. Once we have the elements cloned, we&#39;ll use the metrics collected from calling <code class="sfunc">getBBox()</code> to set the <a href="http://www.w3.org/TR/SVG11/animate.html#FromAttribute" title="Specification of the from attribute"><code class="mattr">from</code></a> and <a href="http://www.w3.org/TR/SVG11/animate.html#ToAttribute" title="Specification of the to attribute"><code class="mattr">to</code></a> attributes of the translation <code class="mtag">animateTransform</code> elements. Finally, we&#39;ll use <code class="sfunc">beginElement()</code> to start the animation we&#39;ve created. So, our final code should look a little something like this:</p>

    <pre><code><span class="skeyw">function</span> <span class="sfunc">fade </span>(target) {
    &#xA0;&#xA0;<span class="comment">// get the target&#39;s bounding box
    </span>&#xA0;&#xA0;<span class="skeyw">var</span> bounds = target.<span class="sfunc">getBBox</span>();
    &#xA0;&#xA0;<span class="skeyw">var</span> t_x = bounds.width / <span class="snum">2</span> + bounds.x;
    &#xA0;&#xA0;<span class="skeyw">var</span> t_y = bounds.height / <span class="snum">2</span> + bounds.y;
    &#xA0;&#xA0;<span class="comment">// get a pointer to the template animations
    </span>&#xA0;&#xA0;<span class="skeyw">var</span> template_animations = document.<span class="sfunc">getElementById</span>(<span class="sstring">&#39;defs&#39;</span>).<span class="sfunc">getElementsByTagNameNS</span>(<span class="sstring">&#39;http://www.w3.org/2000/svg&#39;</span>, <span class="sstring">&#39;*&#39;</span>);
    &#xA0;&#xA0;<span class="comment">// clone and append the animations
    </span>&#xA0;&#xA0;<span class="skeyw">var</span> animations = <span class="skeyw">new</span> <span class="sfunc">Array</span>();
    &#xA0;&#xA0;<span class="skeyw">for</span><span class="sfunc"> </span>(<span class="skeyw">var</span> i = <span class="snum">0</span>; i &lt; template_animations.length; i++) {
    &#xA0;&#xA0;&#xA0;&#xA0;<span class="skeyw">var</span> animation = template_animations.<span class="sfunc">item</span>(i).<span class="sfunc">cloneNode</span>(<span class="skeyw">false</span>);
    &#xA0;&#xA0;&#xA0;&#xA0;animations.<span class="sfunc">push</span>(target.<span class="sfunc">appendChild</span>(animation));
    &#xA0;&#xA0;}
    &#xA0;&#xA0;<span class="comment">// customize translations
    </span>&#xA0;&#xA0;animations[<span class="snum">0</span>].<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;from&#39;</span>, t_x + <span class="sstring">&#39;,&#39;</span> + t_y);
    &#xA0;&#xA0;animations[<span class="snum">0</span>].<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;to&#39;</span>, t_x + <span class="sstring">&#39;,&#39;</span> + t_y);
    &#xA0;&#xA0;animations[<span class="snum">3</span>].<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;from&#39;</span>, (-t_x) + <span class="sstring">&#39;,&#39;</span> + (-t_y));
    &#xA0;&#xA0;animations[<span class="snum">3</span>].<span class="sfunc">setAttributeNS</span>(null, <span class="sstring">&#39;to&#39;</span>, (-t_x) + <span class="sstring">&#39;,&#39;</span> + (-t_y));
    &#xA0;&#xA0;<span class="comment">// launch animations
    </span>&#xA0;&#xA0;<span class="skeyw">for</span><span class="sfunc"> </span>(<span class="skeyw">var</span> i = <span class="snum">0</span>; i &lt; animations.length; i++) {
    &#xA0;&#xA0;&#xA0;&#xA0;animations[i].<span class="sfunc">beginElement</span>();
    &#xA0;&#xA0;}
    }</code></pre>    

<p>And <a href="02.svg">here you can try the final code</a>.</p>

<h2>Conclusions</h2>
<p>The key take-away from this article should be that SVG&#39;s animation elements are like any other elements and can be created and manipulated via the DOM. Of course, special elements such as these have special needs, and the <code>ElementTimeControl</code> interface and its methods cater for those. Now you can have fun mixing animations with script code, the possibilities are endless. Our next article will show you more of this with animation events, smart animation chaining, and more!</p>
    

