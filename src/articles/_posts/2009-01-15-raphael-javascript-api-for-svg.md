---
title: 'Raphaël: A JavaScript API for SVG'
authors:
- dmitry-baranovskiy
intro: 'In this article, we have the pleasure of introducing you to Raphaël, a JavaScript API for SVG that not only allows you to write SVG functionality using JavaScript code, but also provides support for SVG in IE, by emulating it in VML. This is a great tool for introducing more people to the power of SVG, and we’d like to wish it every success.'
license: cc-by-nc-sa-2.5
---
<h2>Introduction</h2>

<p>The first time I saw SVG in 2000–2001, I was blown away by the power it has, and the simplicity of the language, but I was also dismayed that I couldn't really make use of it, because browsers didn't support it. These days all major browsers (with one <strong>I</strong>mportant <strong>E</strong>xception) support SVG to a reasonable extent. This means we can now start to play with it and make use of it on some sites, but Flash is still more popular for vector graphics among front end developers. Why? Because few people know how to work with SVG; In general people coding dynamic applications are much more familiar with JavaScript (or ActionScript).</p>

<p>To solve both the compatibility issues and the knowledge gap, I decided to create <strong>Raphaël</strong>. This is a JavaScript library that provides an API for manipulating SVG, and SVG support for Internet Explorer. It achieves the latter by emulating SVG in Internet Explorer using VML. You don't need to know SVG to work with this library, but SVG knowledge is certainly a bonus, so I'd suggest you get up to speed with the basics if you find the time.</p>

<h2>A simple first example</h2>

<p>Let’s see how it all works by looking at a simple example - let's create a typical "progress <a href="http://en.wikipedia.org/wiki/Throbber">throbber</a>", as seen in Apple interfaces, and copied by many. It is often used in collaboration with Ajax, or complex calculations on the client side. A progress throbber usually looks like that seen in Figure 1:</p>

<img src="spin2.png" width="150" height="150" alt="Spin2">
<p class="comment">Figure 1: A typical progress throbber.</p>

<p>Let's recreate such a throbber without using any images - just SVG via Raphaël.</p>

<h3>The HTML</h3>

<p>First things first - the HTML file for our example (spinner.html in the <a href="raphael_code.zip">code download</a>) is very simple:</p>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
&lt;html lang=&quot;en&quot;&gt;
	&lt;head&gt;
		&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
		&lt;title&gt;Spinner&lt;/title&gt;
		&lt;script src=&quot;raphael.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
		&lt;script src=&quot;spinner.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;div id=&quot;holder&quot;&gt;&lt;/div&gt;
	&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>The <code>body</code> contains a simple <code>div</code>, which in turn will contain our spinner. The only other thing to note about it is that I have linked it to the library file, <code>raphael.js</code>, using a <code>script</code> element in the <code>head</code>, and then done the same for <code>spinner.js</code>. <code>spinner.js</code> is our custom script, and I will cover it below.</p>

<p>I prefer to create the container for such graphics in HTML, because it is easier to control it later with CSS, fitting it into layouts nicely, etc. Feel free to add some CSS to make the example look prettier.</p>

<h3>Coding</h3>

<p>Next, let's take a look at our <code>spinner.js</code> code:</p>

<pre><code>window.onload = function () {
	var r = Raphael("holder", 600, 600),
	sectorsCount = 12,  // number of dashes in spinner
	color = "#000",     // throbber colour
	width = 15,         // width of the dashes
	r1 = 35,            // inner radius of the spinner
	r2 = 60,            // outer radius of the spinner
	cx = 300,           // x and y of the centre of the spinner
	cy = 300,</code></pre>

<p>The script is placed inside a <code>window.onload</code> event handler. At the start of it we create a couple of useful variables. Most are self-explanatory (see the comments above); <code>r</code> is an instance of Raphaël, created inside the "holder" <code>div</code> and given dimensions of 600 x 600 pixels.</p>

<p>The next part of <code>spinner.js</code> is as follows:</p>

<pre><code>sectors = [],            // array for dashes
opacity = [],                       // array for the opacity of the dashes
beta = 2 * Math.PI / sectorsCount,  // angle between dashes</code></pre>

<p>Here we have defined two arrays to help us manage the dashes of the spinner and calculate the angle between dashes so we don't need to calculate it again later.</p>

<pre><code>pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};</code></pre>

<p>The last variable stores properties for each dash: stroke colour, stroke width and stroke line cap. Now we get to the real business code:</p>

<pre><code>for (var i = 0; i &lt; sectorsCount; i++) {
	var alpha = beta * i - Math.PI / 2, // angle between current dash and initial state
	cos = Math.cos(alpha),
	sin = Math.sin(alpha);
	opacity[i] = 1 / sectorsCount * i;  // initial opacity for current dash
	sectors[i] = r.path(pathParams)     // new path in Raphaël
	.moveTo(cx + r1 * cos, cy + r1 * sin)   // move to point on inner radius
	.lineTo(cx + r2 * cos, cy + r2 * sin);  // line to point on outer radius
}</code></pre>

<p>In a simple cycle we calculate all the future dashes to be displayed. Depending on the dash count we calculate the angle of the current dash and its trigonometric values, then we calculate the appropriate opacity, so the opacity of the dashes degrades from 1 to 0 as we go round the circle. Finally, in the <code>sectors</code> array we add the newly created path. In the case of this example it quite simple - it is a straight line from each angle on the inner circle to the same point on the same angle on the outer circle. By this point the code produces something like Figure 2.</p>

<img src="spin1.png" width="150" height="150" alt="The dashes are now created">
<p class="comment">Figure 2: The dashes are now created, but we still have to animate them and add the opacity.</p>

<p>As you can see, opacity is currently stored in the array, but it hasn't yet been applied to our dashes. Let's do this, then animate our spinner:</p>

<pre><code>(function ticker() {
	opacity.unshift(opacity.pop());
	for (var i = 0; i &lt; sectorsCount; i++) {
		sectors[i].attr("opacity", opacity[i]); // set new opacity attribute
	}
	r.safari();     // temporary (hopefully) fix for Safari
	setTimeout(ticker, 1000 / sectorsCount);
})();</code></pre>

<p>In this code we create a function called <code>ticker</code> and run it immediately. The first line of the function shifts elements in the opacity array forward. We then run over dashes stored in the <code>sectors</code> array and apply an <code>opacity</code> attribute to each of them. Doing this continuously will make an illusion of animation. <code>r.safari();</code> fixes some rendering bugs in Safari.</p>

<p>At the end of the function we set <code>timeout</code> to run it again after a small amount of time, giving the appearance of the spinner's continuous rotation. It will make it run forever like a clock.</p>

<p>The only thing left to do is to close the function, like so:</p>

<pre><code>};</code></pre>

<p>The complete code example looks like this:</p>

<pre><code>window.onload = function () {
	var r = Raphael("holder", 600, 600),
	sectorsCount = 12,
	color = "#000",
	width = 15,
	r1 = 35,
	r2 = 60,
	cx = 300,
	cy = 300,

	sectors = [],
	opacity = [],
	beta = 2 * Math.PI / sectorsCount,

	pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};
	for (var i = 0; i &lt; sectorsCount; i++) {
		var alpha = beta * i - Math.PI / 2,
		cos = Math.cos(alpha),
		sin = Math.sin(alpha);
		opacity[i] = 1 / sectorsCount * i;
		sectors[i] = r.path(pathParams)//.attr("stroke", Raphael.getColor())
		.moveTo(cx + r1 * cos, cy + r1 * sin)
		.lineTo(cx + r2 * cos, cy + r2 * sin);
	}
	(function ticker() {
		opacity.unshift(opacity.pop());
		for (var i = 0; i &lt; sectorsCount; i++) {
			sectors[i].attr("opacity", opacity[i]);
		}
		r.safari();
		setTimeout(ticker, 1000 / sectorsCount);
	})();
};</code></pre>

<p>This is pretty short and simple. The benefit of this method is that you can change foreground and background colours easily as you wish (foreground colour is specified in the script via the <code>color</code> variable, and background colour is just the background of the HTML page), and the throbber has true opacity, so you can put it seamlessly on top of anything you like. As a bonus try uncommenting the commented line. <a href="spinner.html">Check out the live demo</a> right now, if you fancy.</p>

<p>
		If you wanted to recreate the same example in pure SVG it would look like this:
</p>
<pre><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;
&lt;svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
		&lt;g stroke-width="15" stroke-linecap="round" stroke="#000" transform="translate(100, 100)"&gt;
				&lt;animateTransform attributeName="transform" attributeType="XML" calcMode="discrete"
						additive="sum" type="rotate" values="30;60;90;120;150;180;210;240;270;300;330;360"
						dur="1s" repeatCount="indefinite"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(30, 0, 0)" opacity=".08"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(60, 0, 0)" opacity=".16"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(90, 0, 0)" opacity=".25"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(120, 0, 0)" opacity=".33"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(150, 0, 0)" opacity=".42"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(180, 0, 0)" opacity=".5"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(210, 0, 0)" opacity=".58"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(240, 0, 0)" opacity=".67"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(270, 0, 0)" opacity=".75"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(300, 0, 0)" opacity=".83"/&gt;
				&lt;line x1="0" y1="-35" x2="0" y2="-60" transform="rotate(330, 0, 0)" opacity=".9"/&gt;
		&lt;/g&gt;
&lt;/svg&gt;</code></pre>
<p>
All the parameters are hard coded into the SVG markup, so it wouldn't be as easy to change the number of dashes from say 12 to 16, but you will probably agree that this example is simpler to create using pure SVG than Raphaël JS (well, provided you know SVG syntax). The only serious problem with this example is that it wouldn't work in Internet Explorer and Firefox (at the time of writing Firefox doesn't support animation in SVG). Raphaël code however will work everywhere.
</p>

<h2>Summary</h2>

<p>So that's it for your short initial look into the world of Raphaël - I hope this has demonstrated why this is a useful project to check out. For more examples, go to <a href="http://raphaeljs.com/">the official Raphaël web site</a> - feel free to hack some of the demos and cook your own coolness.</p>
