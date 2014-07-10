---
title: CSS3 Transitions and 2D Transforms
authors:
- david-storey
intro: 'In this article, you’ll learn about CSS3 transitions and transforms (as well as their SVG and SMIL corollaries), all of which are supported by Opera versions 10.50 and later.'
license: cc-by-nc-sa-3.0
---
<h2>Introduction</h2>

<p>For richer user interfaces it is often desirable to include some animation to make an effect smoother or more appealing, or effects such as rotating elements and text. Traditionally in HTML pages the primary means to add animations was to use JavaScript to adjust the desired CSS property value over a given period of time. This works but can be slower as the JavaScript code is not hardware or software accelerated. What's more, using JavaScript for animations creates more code to maintain. It has not been possible to apply effects such as text at an angle without resorting to using images or SVG.</p>

<p>In CSS3, these animations and transformations can be handed off to the browser and defined in the CSS layer using CSS3 transitions and transforms, which are supported in our <a href="http://www.opera.com/browser/">Opera 10.50 and later</a>. In this article, you'll learn about CSS3 transitions and transforms in Opera and see the <abbr title="Scalable Vector Graphics">SVG</abbr> and <abbr title="Synchronized Multimedia Integration Language">SMIL</abbr> corollaries to them, too.</p>

<h2>Contents</h2>

<ul>
<li><a href="#introduction">Introduction to CSS transitions</a></li>
<li><a href="#transitions">Working with CSS transitions</a></li>
<li><a href="#combining-transitions">Combining transitions</a></li>
<li><a href="#transforms">CSS 2D transforms</a></li>
<li><a href="#combining-transforms">Combining CSS 2D transforms</a></li>
<li><a href="#showcase">Pulling it all together in a showcase</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>

<h2 id="introduction">Introduction to CSS transitions</h2>

<p>When changing the value of a property in CSS, that new value is applied immediately. For example, in the CSS below the colour would change from red to blue when the user hovers over the element:</p>

<pre><code>div {
			width: 3em;
			height: 3em;
			background-color: red;
}

div:hover {  background-color: blue; }</code></pre>


<p>This article will guide you through how to use CSS3 transitions and briefly touch on how the equivalent can also be achieved in SVG via SMIL.</p>

<h2 id="transitions">Working with CSS transitions</h2>

<h3>Setting up a transition</h3>

<p>The first step in using CSS3 transitions is to define which elements you want to apply the transition to and which CSS properties will be used in the transition.</p>

<p>This is done with the <code>transition-property</code> property:</p>

<pre><code>div {
			width: 3em;
			height: 3em;
			background-color: red;
			<strong>-o-transition-property: background-color;</strong>
}</code></pre>

<p>Note, for brevity I've only used the Opera prefixed version of the property in the inline examples. The actual examples use the prefixes for other vendors and the standard (non-prefixed) version. It is important to use the standard version along with browser-specific prefixes so that your transitions automatically work in other browsers when they support it.</p>

<p>Once the <code>transition-property</code> is set and the element selected, the CSS property value will transition from the original value to the new value. Note that for current properties that can be animated via CSS3 transitions in CSS and SVG check the <a href="http://www.w3.org/TR/css3-transitions/#animatable-properties-">CSS3 transitions spec</a>.</p>

<p>Next you'll define the duration of the transition. This is set with the <code>transition-duration</code> property, which by default is 0 seconds, so we add a time value, usually specified in seconds:</p>

<pre><code>div {
			width: 3em;
			height: 3em;
			background-color: red;
			-o-transition-property: background-color;
			<strong>-o-transition-duration: 4s;</strong>
}

div:hover { background-color: blue; }</code></pre>

<p>In the above example, when the user hovers over the div element the colour will transition from red to blue in 4 seconds. Try the <a href="http://dev.opera.com/static/dstorey/transitions/color-transition.html">colour transition example</a>.</p>

<h3>Delaying a transition</h3>

<p>By default the transition happens as soon as the specified element is accessed, but the <code>transition-delay</code> property can be used to delay the start of the transition:</p>

<pre><code>div {
			…
			-o-transition-property: background-color;
			-o-transition-duration: 4s;
			<strong>-o-transition-delay: 1s;</strong>
}</code></pre>

<p>Try the <a href="http://dev.opera.com/static/dstorey/transitions/color-transition-delay.html">delayed transition example</a>.</p>

<h3>Controlling transition velocity</h3>

<p>As well as defining the timing of the transition, you can also control the velocity. Instead of a smooth transition from A to B, you can define a transition to speed up or slow down along its duration. This is defined using a <a href="http://en.wikipedia.org/wiki/Bézier_curve#Cubic_B.C3.A9zier_curves" title="Wikipedia definition of a cubic bezier curve">cubic bezier curve</a>, which is a common method in computer animation. To make this simpler to use in CSS, there are a number of predefined curves: <var>ease</var> (the default), <var>linear</var>, <var>ease-in</var>, <var>ease-out</var>, and <var>ease-in-out</var>.</p>

<p>Try out the following <a href="http://dev.opera.com/static/dstorey/transitions/transition-timing-example.html">transition example using all five pre-defined timing functions</a>. I've used the <code>width</code> property for the transition to make the differences more obvious:</p>

<pre><code>div {
			…
			-o-transition-property: width;
			-o-transition-duration: 4s;
}

div:nth-of-type(1) { -o-transition-timing-function: ease;  }
div:nth-of-type(2) { -o-transition-timing-function: linear;  }
div:nth-of-type(3) { -o-transition-timing-function: ease-in;  }
div:nth-of-type(4) { -o-transition-timing-function: ease-out;  }
div:nth-of-type(5) { -o-transition-timing-function: ease-in-out;  }</code></pre>

<p>To specify your own cubic bezier curve for the transition, you use the <var>cubic-bezier</var> value along with the X and Y co-ordinates for the P1 and P2 timing function control points. With cubic bezier curves there are 4 control points: P0 through to P3, and they take a number between 0 and 1 for the X and Y co-ordinate. P0 and P3 are constants which are always 0,0 and 1,1 respectively. The browser will use a mathematical equation to produce a smooth curve through P1 to P2. If you were to specify a linear transition by hand you would define it as <code>cubic-bezier(0, 0, 1, 1);</code>, which as you can see is a straight line from 0,0 to 1,1.</p>

<p>An ease-in curve would be defined as <code>cubic-bezier(0.42, 0, 1, 1);</code>. This would create a shallow curve which accelerates upwards to meet the P2 control point.  You can see this as the third box in the example starts slowly and speeds up towards the end. An ease-out curve is the inverse of an ease-in curve and starts quickly where the curve is straighter and slows towards the end as it curves to meet the P2 control point. This would be specified as <code>cubic-bezier(0, 0, 0.58, 1);</code>.</p>

<h2 id="combining-transitions">Combining transitions</h2>

<p>As well as just specifying one property to transition, each of the CSS3 transitions properties can take a comma-separated list of values. This allows multiple properties to be transitioned on each element, each with their own timing and velocity values. In the following example I transition the width, height and background colour, each over varying lengths of time:</p>

<pre><code>div {
	…
	-o-transition-property: background-color, width, height;
	-o-transition-duration: 4s, 8s, 5s;
	-o-transition-delay: 0s, 0s 2s;
}</code></pre>

<p><a href="http://dev.opera.com/static/dstorey/transitions/multiple-transitions.html">Try out the multiple transitions example</a>.</p>

<p>The <code>transition-property</code> property defaults to the <code>all</code> keyword, which means that by default all properties will be transitioned when changed, providing the <code>transition-duration</code> is changed from the default value of zero seconds.</p>

<p>As with other CSS properties such as <code>border</code> and <code>background</code>, there is a <code>transition</code> shorthand property. The example above as a shorthand would be the following:</p>

<pre><code>div {
	transition: background-color 4s 0s, width 8s 0s, height 5s 2s;
}</code></pre>

<h3>Transitions in SVG</h3>

<p>Similar effects to CSS transitions can be performed in SVG using the <code>animate</code> element from SMIL. The SVG equivalent of the delay transition example above would be:</p>

<pre><code>&lt;animate attributeType="CSS" attributeName="background-color"
	from="red" to="blue" begin="2s" dur="4s" fill="freeze" /&gt;</code></pre>

<p>The <code>animate</code> element is placed as a child of the element you want to animate. You can use multiple <code>animate</code> elements to transition multiple properties. The attributes are all self-explanatory except for the <var>freeze</var> value. This is used to express that when the transition ends, it will stay in the final state rather than resetting to the initial state. With SVG, it is possible to animate along paths, fire animations by events such as clicking or hovering, repeat animations and so on, but that is beyond the scope of this article.</p>

<h2 id="transforms">CSS 2D transforms</h2>

<p>2D transforms in CSS allow for various transformation to be applied to elements, such as scaling or rotating. It is possible to apply one or many transforms to a single element. This allows for effects such as rotating text or images at an angle, and can be combined with transitions to apply interactive effects such as scaling up elements when the users interacts with them.</p>

<h3>Applying a transform</h3>

<p>Two CSS properties have to be specified to apply a transform: the <code>transform</code> property specifies the type(s) of transform(s) you want to apply to the element and the <code>transform-origin</code> property sets the point of origin from where the transform takes place. This differs from SVG where the transform origin is specified by translating the element first (similar to the CSS translate function described below), or as an optional 2nd and 3rd argument in the case of <code>rotate</code>. The CSS version is more flexible in that it is easy to specify things like the centre of the element to be the origin of the transform (which is a common need, especially when scaling or rotating), while in SVG the centre point has to be calculated yourself from a set point (often the top left corner) on the element in question.</p>

<h3>Setting the origin of the transform</h3>

<p>The initial <code>transform-origin</code> value is <var>50% 50%</var> which is the centre of the element&mdash;50% from the left of the element and 50% from the top of the element. The origin can be specified using either a length (in the regular CSS units), a percentage or the keywords <var>left</var>, <var>center</var> or <var>right</var> (for the X co-ordinate) and <var>top</var>, <var>center</var> or <var>bottom</var> for the Y coordinate.</p>

<p>The first value specified is the X coordinate and the second value is the Y coordinate. The value of the X and Y coordinates are calculated from the top left-hand corner of the element. In the example below, the origin of the transform is set to 3 ems from the left of the element on the X axis and the bottom of the parent element on the Y axis:</p>

<pre><code>-o-transform-origin: 3em bottom;</code></pre>

<p>Technically the transform origin is applied by calculating the negation of the <code>transform-origin</code> value (-3em on the X axis, and the top of the element in the example above), translating the element to this value, then applying the transform that is specified in the <code>transform</code> property, then translating the element by the actual value of the <code>transform-origin</code>.</p>

<h3>Transforming the element</h3>

<p>Once the point of origin is set (or left to the default), the actual type of transform can be applied. This is set with the <code>transform</code> property with a list of one or more transforms as the value.</p>

<h3>Translating</h3>

<p>We'll start with a simple <code>translate</code> transform. This moves the element from its original position in the document to the new location specified by the X and Y co-ordinates supplied.</p>

<p>The following <a href="http://dev.opera.com/static/dstorey/transforms/transformTransition.html">translate example</a> moves the <code>div</code> element 50 pixels to the left and down 100 pixels from the centre of the element:</p>

<pre><code>-o-transform: translate(50px, 100px);</code></pre>

<p>We've created a <a href="http://dev.opera.com/static/dstorey/transforms/transformTransitionGhost.html">second version of the translate example</a> with a faded out element moved to the original position the element was in before it was transformed in order to highlight the transform.</p>

<p>Note that a transform <em>doesn't affect the flow of the document</em>, so if the element is moved to where another element is already positioned it will overlap that element rather than the content flowing around or under it. Elements later in the document also will not take up the space vacated by the transformed element. This is illustrated in this <a href="http://dev.opera.com/static/dstorey/transforms/transformTransitionFlow.html">translate transform flow example</a> where the blue <code>div</code> element stays in its natural position.</p>

<p>If the Y co-ordinate value is not specified then it is assumed to be zero. Negative values will move the element to the left and above the point of origin respectively. Alternatively the X and Y co-ordinate can be specified individually using <code>translateX</code> and <code>translateY</code>:</p>

<pre><code>-o-transform: translateX(50px);
-o-transform: translateY(100px);</code></pre>

<p>CSS transforms are very similar to the existing SVG transforms, except they are applied via CSS rather than a XML attribute. They also apply to HTML, while with SVG the HTML has to be wrapped in a SVG <code>foreignObject</code> element inside the actual SVG file.</p>

<p>In SVG, transforms are applied using the <code>transform</code> attribute. The SVG equivalent of the initial translate example would be:</p>

<pre><code>&lt;rect transform="translate(50px, 100px)" /&gt;</code></pre>

<p>Note for the subsequent SVG examples we've missed out the styling information and attributes such as the <code>width</code> and <code>height</code>. We've also assumed the point of origin for the transforms are set up correctly.</p>

<h3>Scaling</h3>

<p>The <code>scale</code> transform function scales the element it is applied on by the value specified from the point of origin. The following <a href="http://dev.opera.com/static/dstorey/transforms/transformScale.html">scale example</a> scales the <code>div</code> element 2.5 times from the top left of the element:</p>

<pre><code>-o-transform: scale(2.5);
-o-transform-origin: left top;</code></pre>

<p>In this example only one value was specified. In this case the Y scaling direction is set to the same value as the X scaling direction. If you only want to scale in one direction you can use the <code>scaleX</code> or <code>scaleY</code> transform functions. To scale an image smaller, a value less than 1 is used such as 0.5 for halving the size of the element.</p>

<p>We've created a <a href="http://dev.opera.com/static/dstorey/transforms/transformScaleCentreOrigin.html">second scaling example</a> to highlight what happens if the point of origin for the scale is set to the centre point of the element. Here the element scales slightly off the screen to the left and overlaps the element above it, as the element scales in all directions equally from the centre point.</p>

<p>In SVG, an initial scale example would be the following:</p>

<pre><code>&lt;rect transform="scale(2.5)" /&gt;</code></pre>

<h3>Skewing</h3>

<p>The <code>skew</code> transform function skews the element along the X or Y axis, or both. The value is specified in degrees (<code>deg</code>), and if only one value is specified the skew on the Y axis is set to 0 or no skew. In the following <a href="http://dev.opera.com/static/dstorey/transforms/transformSkew.html">skew example</a> the element is skewed 10 degrees on the X axis, so that it is leaning to the left, and 20 degrees on the Y axis, so that it is sloping from top to bottom. The skew is applied from the default centre point of the element:</p>

<pre><code>-o-transform: skew(10deg, 20deg);</code></pre>

<p>As with other transform functions the X and Y directions can be specified individually using <code>skewX</code> and <code>skewY</code>. If a negative value is supplied the skew is performed in the opposite direction, i.e. leaning to the right for a negative skew on the X axis, and from bottom to top for a negative skew on the Y axis.</p>

<p>In SVG there is no transform type for skew alone. The X and Y axes have to be skewed individually with <code>skewX</code> and <code>skewY</code> respectively:</p>

<pre><code>&lt;rect transform="skewX(10) skewY(20) /&gt;</code></pre>

<h3>Rotating</h3>

<p>The <code>rotate</code> transform function rotates the element around the point of origin and as with skewing is specified in degrees. The following <a href="http://dev.opera.com/static/dstorey/transforms/transformRotate.html">rotation example</a> rotates the element 30 degrees clockwise:</p>

<pre><code>-o-transform: rotate(30deg);</code></pre>

<p>A negative value will rotate the element anti-clockwise.</p>

<p>The SVG equivalent would be:</p>

<pre><code>&lt;rect transform="rotate(30) /&gt;</code></pre>

<h2 id="combining-transforms">Combining transforms</h2>

<p>Multiple transforms can be applied to one <code>transform</code> property using a space-separated list. When multiple transforms are used, they are applied one after another linearly from left to right. In the following <a href="http://dev.opera.com/static/dstorey/transforms/multipleTransforms.html">multiple transform example</a>, the element is initially scaled by a factor of two, then rotated 45 degrees clockwise, then moved 80 pixels along the X axis:</p>

<pre><code>-o-transform: scale(2) rotate(45deg) translate(80px);</code></pre>

<p>Note how the element doesn't just move to the right when it is translated 80 pixels. This is because the X and Y axes are transformed with the <code>rotate</code> function, so the X axis is pointing from top to bottom and from left to right. Also note that the transform origin moves with each transform. The initial transform origin is the centre of the element in its initial position, while the transform origin for the rotate transform is the centre point of the element <em>after</em> it has been scaled, and so on.</p>

<p>The SVG equivalent would be:</p>

<pre><code>&lt;rect transform="scale(2) rotate(45) translate(80px) /&gt;</code></pre>

<h2 id="showcase">Pulling it all together into a showcase</h2>

<p>We’ve created an image gallery showcase to show off transitions and transforms with something more exciting than a bunch of red boxes. This is not meant to be a practical way to display or interact with photos, just a display of what is possible. Try out the <a href="image-gallery.html">transitions and transforms image gallery showcase</a>.</p>

<p>There is not much to this that hasn't been explained previously. Each image is added to the document one after another. If transforms are not applied they will fill the width of the window then display on the next row. The <code>figure</code> element that wraps each image is then targeted individually using a <code>:nth-of-type()</code> CSS3 selector and the relevant transform is applied to it. This selector is used to avoid using classes but it may be more practical to explicitly target each element with an ID or class, depending on whether elements will change position in the DOM or not. I didn't worry about backwards compatibility of the CSS3 selectors as all browsers that support CSS transforms and transitions also support <code>:nth-of-type()</code>.</p>

<p>Each <code>figure</code> element has a chain of transforms applied to it. They first have a scale applied to them to shrink them closer to a thumbnail size, then a transition applied to them to move them to the desired position in the photo stack. Finally a rotation is applied to make the images look randomly placed. Note that if you want to override one of the transforms you have to override them all otherwise the other transforms will move back to their original non-transformed state.</p>

<p>The <code>transition-property</code> value is set to <var>all</var> so any property that changes will have a transition applied to it. In the case of this demo, the <code>z-index</code> and <code>box-shadow</code> property values are changed on hovering the element so that the user can see the image more clearly. The <code>z-index</code> is animated over 0.5 second. In Safari/WebKit <code>z-index</code> doesn't work on transformed elements.</p>

<p>A small amount of JavaScript has been added to handle click events. When clicking on an image it will transition to the top left of the document, rotate so that it changes back to 0 degrees, and move to a higher <code>z-index</code> so it is on top of any elements in the same position. You will see when clicking on an image that it animates from its position to the new location and rotates over a half second. As with the hover transition, in Safari the transition effect isn't applied and instead moves instantly.</p>

<h2 id="conclusion">Conclusion</h2>

<p>In this article we've covered the CSS3 transitions and CSS 2D transforms supported by Opera Presto 2.4 and above. I've also briefly covered the similar functionality in SVG from which they were inspired. This will allow you to transfer the knowledge when using both HTML and SVG.</p>

<p>With CSS transitions we've covered how to specify which properties to transition, how long the transition takes, how to delay the transition and how to control the speed of the transition. With CSS3 transforms we've covered how to set the origin of the transform and the types of transforms that can be applied. Finally we've pulled together both techniques into an image gallery showcase to show what kind of effects are possible.</p>

<h2 id="readmore">Read more...</h2>
<ul>
<li><a href="/articles/understanding-the-css-transforms-matrix/">Understanding the CSS Transforms Matrix</a></li>
<li><a href="/articles/css3-animations/">Making a move with CSS3 animations</a></li>
</ul>
