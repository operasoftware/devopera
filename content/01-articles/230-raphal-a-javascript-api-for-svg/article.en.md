Title: Raphaël: a JavaScript API for SVG
----
Date: 2009-01-15 18:08:34
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
        
        <p>The first time I saw SVG in 2000–2001, I was blown away by the power it has, and the simplicity of the language, but I was also dismayed that I couldn&#39;t really make use of it, because browsers didn&#39;t support it. These days all major browsers (with one <strong>I</strong>mportant <strong>E</strong>xception) support SVG to a reasonable extent. This means we can now start to play with it and make use of it on some sites, but Flash is still more popular for vector graphics among front end developers. Why? Because few people know how to work with SVG; In general people coding dynamic applications are much more familiar with JavaScript (or ActionScript).</p>
        
        <p>To solve both the compatibility issues and the knowledge gap, I decided to create <strong>Raphaël</strong>. This is a JavaScript library that provides an API for manipulating SVG, and SVG support for Internet Explorer. It achieves the latter by emulating SVG in Internet Explorer using VML. You don&#39;t need to know SVG to work with this library, but SVG knowledge is certainly a bonus, so I&#39;d suggest you get up to speed with the basics if you find the time.</p>
        
        <h2>A simple first example</h2>
        
        <p>Lets see how it all works by looking at a simple example - let&#39;s create a typical &quot;progress <a href="http://en.wikipedia.org/wiki/Throbber">throbber</a>&quot;, as seen in Apple interfaces, and copied by many. It is often used in collaboration with Ajax, or complex calculations on the client side. A progress throbber usually looks like that seen in Figure 1:</p>
        
        <img src="http://forum-test.oslo.osa/kirby/content/articles/230-raphal-a-javascript-api-for-svg/spin2.png" width="150" height="150" alt="Spin2" />
        <p class="comment">Figure 1: A typical progress throbber.</p>
        
        <p>Let&#39;s recreate such a throbber without using any images - just SVG via Raphaël.</p>
        
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
        
        <p>Next, let&#39;s take a look at our <code>spinner.js</code> code:</p>
        
<pre><code>window.onload = function () {
  var r = Raphael(&quot;holder&quot;, 600, 600),
  sectorsCount = 12,  // number of dashes in spinner
  color = &quot;#000&quot;,     // throbber colour
  width = 15,         // width of the dashes
  r1 = 35,            // inner radius of the spinner
  r2 = 60,            // outer radius of the spinner
  cx = 300,           // x and y of the centre of the spinner
  cy = 300,</code></pre>
        
        <p>The script is placed inside a <code>window.onload</code> event handler. At the start of it we create a couple of useful variables. Most are self-explanatory (see the comments above); <code>r</code> is an instance of Raphaël, created inside the &quot;holder&quot; <code>div</code> and given dimensions of 600 x 600 pixels.</p>
        
        <p>The next part of <code>spinner.js</code> is as follows:</p>
        
<pre><code>sectors = [],            // array for dashes
opacity = [],                       // array for the opacity of the dashes
beta = 2 * Math.PI / sectorsCount,  // angle between dashes</code></pre>
       
       <p>Here we have defined two arrays to help us manage the dashes of the spinner and calculate the angle between dashes so we don&#39;t need to calculate it again later.</p>
       
<pre><code>pathParams = {stroke: color, &quot;stroke-width&quot;: width, &quot;stroke-linecap&quot;: &quot;round&quot;};</code></pre>
        
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
        
        <img src="http://forum-test.oslo.osa/kirby/content/articles/230-raphal-a-javascript-api-for-svg/spin1.png" width="150" height="150" alt="The dashes are now created" />
        <p class="comment">Figure 2: The dashes are now created, but we still have to animate them and add the opacity.</p>
        
        <p>As you can see, opacity is currently stored in the array, but it hasn&#39;t yet been applied to our dashes. Let&#39;s do this, then animate our spinner:</p>
        
<pre><code>(function ticker() {
  opacity.unshift(opacity.pop());
  for (var i = 0; i &lt; sectorsCount; i++) {
    sectors[i].attr(&quot;opacity&quot;, opacity[i]); // set new opacity attribute
  }
  r.safari();     // temporary (hopefully) fix for Safari
  setTimeout(ticker, 1000 / sectorsCount);
})();</code></pre>
        
        <p>In this code we create a function called <code>ticker</code> and run it immediately. The first line of the function shifts elements in the opacity array forward. We then run over dashes stored in the <code>sectors</code> array and apply an <code>opacity</code> attribute to each of them. Doing this continuously will make an illusion of animation. <code>r.safari();</code> fixes some rendering bugs in Safari.</p>
        
        <p>At the end of the function we set <code>timeout</code> to run it again after a small amount of time, giving the appearence of the spinner&#39;s continuous rotation. It will make it run forever like a clock.</p>
       
        <p>The only thing left to do is to close the function, like so:</p>
       
       <pre><code>};</code></pre>
       
        <p>The complete code example looks like this:</p>
        
<pre><code>window.onload = function () {
  var r = Raphael(&quot;holder&quot;, 600, 600),
  sectorsCount = 12,
  color = &quot;#000&quot;,
  width = 15,
  r1 = 35,
  r2 = 60,
  cx = 300,
  cy = 300,

  sectors = [],
  opacity = [],
  beta = 2 * Math.PI / sectorsCount,

  pathParams = {stroke: color, &quot;stroke-width&quot;: width, &quot;stroke-linecap&quot;: &quot;round&quot;};
  for (var i = 0; i &lt; sectorsCount; i++) {
    var alpha = beta * i - Math.PI / 2,
    cos = Math.cos(alpha),
    sin = Math.sin(alpha);
    opacity[i] = 1 / sectorsCount * i;
    sectors[i] = r.path(pathParams)//.attr(&quot;stroke&quot;, Raphael.getColor())
    .moveTo(cx + r1 * cos, cy + r1 * sin)
    .lineTo(cx + r2 * cos, cy + r2 * sin);
  }
  (function ticker() {
    opacity.unshift(opacity.pop());
    for (var i = 0; i &lt; sectorsCount; i++) {
      sectors[i].attr(&quot;opacity&quot;, opacity[i]);
    }
    r.safari();
    setTimeout(ticker, 1000 / sectorsCount);
  })();
};</code></pre>
        
        <p>This is pretty short and simple. The benefit of this method is that you can change foreground and background colours easily as you wish (foreground colour is specified in the script via the <code>color</code> variable, and background colour is just the background of the HTML page), and the throbber has true opacity, so you can put it seamlessly on top of anything you like. As a bonus try uncommenting the commented line. <a href="spinner.html">Check out the live demo</a> right now, if you fancy.</p>
        
        <p>
            If you wanted to recreate the same example in pure SVG it would look like this:
        </p>
<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;!DOCTYPE svg PUBLIC &quot;-//W3C//DTD SVG 1.1//EN&quot; &quot;http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd&quot;&gt;
&lt;svg version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;&gt;
    &lt;g stroke-width=&quot;15&quot; stroke-linecap=&quot;round&quot; stroke=&quot;#000&quot; transform=&quot;translate(100, 100)&quot;&gt;
        &lt;animateTransform attributeName=&quot;transform&quot; attributeType=&quot;XML&quot; calcMode=&quot;discrete&quot;
            additive=&quot;sum&quot; type=&quot;rotate&quot; values=&quot;30;60;90;120;150;180;210;240;270;300;330;360&quot;
            dur=&quot;1s&quot; repeatCount=&quot;indefinite&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(30, 0, 0)&quot; opacity=&quot;.08&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(60, 0, 0)&quot; opacity=&quot;.16&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(90, 0, 0)&quot; opacity=&quot;.25&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(120, 0, 0)&quot; opacity=&quot;.33&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(150, 0, 0)&quot; opacity=&quot;.42&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(180, 0, 0)&quot; opacity=&quot;.5&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(210, 0, 0)&quot; opacity=&quot;.58&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(240, 0, 0)&quot; opacity=&quot;.67&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(270, 0, 0)&quot; opacity=&quot;.75&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(300, 0, 0)&quot; opacity=&quot;.83&quot;/&gt;
        &lt;line x1=&quot;0&quot; y1=&quot;-35&quot; x2=&quot;0&quot; y2=&quot;-60&quot; transform=&quot;rotate(330, 0, 0)&quot; opacity=&quot;.9&quot;/&gt;
    &lt;/g&gt;
&lt;/svg&gt;</code></pre>
        <p>
            All the parameters are hard coded into the SVG markup, so it wouldn&#39;t be as easy to change the number of dashes from say 12 to 16, but you will probably agree that this example is simpler to create using pure SVG than Raphaël JS (well, provided you know SVG syntax). The only serious problem with this example is that it wouldn&#39;t work in Internet Explorer and Firefox (at the time of writing Firefox doesn&#39;t support animation in SVG). Raphaël code however will work everywhere.
        </p>
        
        <h2>Summary</h2>
        
        <p>So that&#39;s it for your short initial look into the world of Raphaël - I hope this has demonstrated why this is a useful project to check out. For more examples, go to <a href="http://raphaeljs.com/">the official Raphaël web site</a> - feel free to hack some of the demos and cook your own coolness.</p>
