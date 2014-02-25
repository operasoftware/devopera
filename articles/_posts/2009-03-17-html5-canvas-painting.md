---
title: Creating an HTML5 Canvas Painting Application
authors:
- mihai-sucan
intro: 'Looking for some practical implementations of HTML5 canvas? Look no further. This article takes you through Mihai Sucan’s first development steps at creating a canvas-powered online painting application. In this article he sets up the basic environment, shows how to make the event interactions work and implements some of the basic drawing tools.'
license: cc-by-nc-sa-2.5
layout: article
---
<h2>Table of contents</h2>

<ul>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#gettingstartedwiththehtml">Getting started with the
HTML</a></li>
<li><a href="#canvasinteraction">Canvas interaction</a>
<ul>
<li><a href="#testingthecanvasinteraction">Testing the canvas
interaction</a></li>
<li><a href="#implementingevents">Implementing events</a></li>
<li><a href="#addingdrawingtools">Adding drawing tools</a>
<ul>
<li><a href="#rectangle">Rectangle</a></li>
<li><a href="#line">Line</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#whatsnext">What's next</a></li>
</ul>

<h2 id="introduction">Introduction</h2>

<p>My previous <a href="http://dev.opera.com/articles/view/html-5-canvas-the-basics/">HTML5 canvas tutorial</a> provided you with insight into the numerous use cases
for canvas in web applications. In this article we will explore how you can
write your own canvas-based painting application.</p>

<p>Making a web application that allows users to draw on a canvas requires
several important steps: setting up your <abbr title="HyperText Markup
Language">HTML</abbr> document with a canvas context (a
<code>canvas</code> element with an <code>id</code>), setting up your script
to target that canvas context and draw inside it and adding the required
mouse event handlers for user interaction and associated logic. Once the
event handlers are in place, it's then fairly simple to add any desired
functionality.</p>

<p>The <a href="example5.html">final painting application example</a> looks like this:</p>

<img src="html5-canvas-painting-app.png" alt="The final painting application example from this article">

<p class="note">To make it easier to follow along with the code walkthrough
presented below, you can <a href="canvas-paint-tutorial.zip">download the full code
example</a> and follow along with it as you read the article.</p>

<h2 id="gettingstartedwiththehtml">Getting started with the HTML</h2>

<p>We shall begin with a minimal HTML document:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&#34;en&#34;&gt;
  &lt;head&gt;
    &lt;meta charset=&#34;utf-8&#34;&gt;
    &lt;title&gt;Paint&lt;/title&gt;
    &lt;style type=&#34;text/css&#34;&gt;&lt;!--
      #container { position: relative; }
      #imageView { border: 1px solid #000; }
    --&gt;&lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&#34;container&#34;&gt;
      &lt;canvas id=&#34;imageView&#34; width=&#34;400&#34; height=&#34;300&#34;&gt;
        &lt;p&gt;Unfortunately, your browser is currently unsupported by our web
        application.  We are sorry for the inconvenience. Please use one of the
        supported browsers listed below, or draw the image you want using an
        offline tool.&lt;/p&gt;
        &lt;p&gt;Supported browsers: &lt;a href=&#34;http://www.opera.com&#34;&gt;Opera&lt;/a&gt;, &lt;a
          href=&#34;http://www.mozilla.com&#34;&gt;Firefox&lt;/a&gt;, &lt;a
          href=&#34;http://www.apple.com/safari&#34;&gt;Safari&lt;/a&gt;, and &lt;a
          href=&#34;http://www.konqueror.org&#34;&gt;Konqueror&lt;/a&gt;.&lt;/p&gt;
      &lt;/canvas&gt;
    &lt;/div&gt;

    &lt;script type=&#34;text/javascript&#34;
    src=&#34;example1.js&#34;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>As you can see, we only have the bare bones of an HTML document here,
with a <code>canvas</code> element contained inside. If the browser does not
support Canvas, then the fallback content will show. We will add more markup
later on, but this is all we need for now.</p>

<p>The fallback content you provide should be as helpful as possible. You
should not just say something like "this web application is unsupported by
your browser" - that would be basically useless. Tell the user what he/she
can do to get your application to work (eg use a different web browser), or
provide alternative solutions, like a file upload input which allows the
user to upload a painting created offline. Even better would be to detect Canvas support and then serve the application as is to browsers that support it, and the upload solution to browsers that don't, automatically. Naturally, the fallback content
depends on the context in which the painting application appears.</p>

<h2 id="canvasinteraction">Canvas interaction</h2>

<p>Now we have the <code>canvas</code> element in place, the next step is to
make the element somehow interact with the mouse. We shall first test our
interaction, and then go on to start adding in the functions we want our
application to perform.</p>

<h3 id="testingthecanvasinteraction">Testing the canvas interaction</h3>

<p>For testing purposes we shall first try to paint something under the
mouse. We can do that by attaching a <code>mousemove</code> event handler to
the <code>canvas</code> element. Here's the gist of the <a
href="example1.js">mousemove example script</a>:</p>

<pre><code>// ...
function init () {
  // ...
  // Attach the mousemove event handler.
  canvas.addEventListener('mousemove', ev_mousemove, false);
}

// The mousemove event handler.
var started = false;
function ev_mousemove (ev) {
  var x, y;

  // Get the mouse position relative to the canvas element.
  if (ev.layerX || ev.layerX == 0) { // Firefox
    x = ev.layerX;
    y = ev.layerY;
  } else if (ev.offsetX || ev.offsetX == 0) { // Opera
    x = ev.offsetX;
    y = ev.offsetY;
  }

  // The event handler works like a drawing pencil which tracks the mouse
  // movements. We start drawing a path made up of lines.
  if (!started) {
    context.beginPath();
    context.moveTo(x, y);
    started = true;
  } else {
    context.lineTo(x, y);
    context.stroke();
  }
}
// ...</code></pre>

<p><a href="example1.html">Try the mousemove example live</a>.</p>

<p>This code turned out to be a success: we are just starting to see how
dynamic and cool canvas can be. We use the <code>event.layer*
/ offset*</code> properties to determine the mouse position relative to
the canvas element.  That's all we need to start drawing.</p>

<h3 id="implementingevents">Implementing events</h3>
<p>Let's take this script one step further. It's best to have a single event
handler that only determines the coordinates relative to the canvas element.
The implementation of each drawing tool should be split into independent
functions. Lastly, drawing tools need to interact with the user for events
like <code>mousedown</code> and <code>mouseup</code> as well, not just when
moving the mouse (<code>mousemove</code>). Therefore, multiple event
listeners will be added to the script.</p>

<p>The <a href="example2.js">updated script including events</a> contains
the following snippet:</p>

<pre><code>// ...
function init () {
  // ...
  // The pencil tool instance.
  tool = new tool_pencil();

  // Attach the mousedown, mousemove and mouseup event listeners.
  canvas.addEventListener('mousedown', ev_canvas, false);
  canvas.addEventListener('mousemove', ev_canvas, false);
  canvas.addEventListener('mouseup',   ev_canvas, false);
}

// This painting tool works like a drawing pencil which tracks the mouse
// movements.
function tool_pencil () {
  var tool = this;
  this.started = false;

  // This is called when you start holding down the mouse button.
  // This starts the pencil drawing.
  this.mousedown = function (ev) {
      context.beginPath();
      context.moveTo(ev._x, ev._y);
      tool.started = true;
  };

  // This function is called every time you move the mouse. Obviously, it only
  // draws if the tool.started state is set to true (when you are holding down
  // the mouse button).
  this.mousemove = function (ev) {
    if (tool.started) {
      context.lineTo(ev._x, ev._y);
      context.stroke();
    }
  };

  // This is called when you release the mouse button.
  this.mouseup = function (ev) {
    if (tool.started) {
      tool.mousemove(ev);
      tool.started = false;
    }
  };
}

// The general-purpose event handler. This function just determines the mouse
// position relative to the canvas element.
function ev_canvas (ev) {
  if (ev.layerX || ev.layerX == 0) { // Firefox
    ev._x = ev.layerX;
    ev._y = ev.layerY;
  } else if (ev.offsetX || ev.offsetX == 0) { // Opera
    ev._x = ev.offsetX;
    ev._y = ev.offsetY;
  }

  // Call the event handler of the tool.
  var func = tool[ev.type];
  if (func) {
    func(ev);
  }
}
// ...</code></pre>

<p><a href="example2.html">Try the updated freehand canvas example.</a></p>

<p>The script has been split into multiple functions. Now the canvas has
three event listeners (<code>mousedown, mousemove</code> and
<code>mouseup</code>). The <code>ev_canvas()</code> function adds two new
properties to the <abbr title="Document Object Model">DOM</abbr> event
object, <var>_x</var> and <var>_y</var>, which simply hold the mouse
coordinates relative to the canvas. This event handler acts like a "proxy"
by calling other functions, depending on the event type. If the event is
<code>mousemove</code>, then <code>tool.mousemove()</code> is called, and so
on. The event handlers associated with the active tool can use the
properties added to the DOM event object.</p>

<p>With the above changes made, we are ready to kick things off. The drawing
pencil works fine now, with the added start and end functions. All the
pencil-related functions are grouped together in a single function object.
Currently we only have the <var>tool_pencil</var> object present, instanced
as <var>tool</var>, but we can easily add more objects.</p>

<h3 id="addingdrawingtools">Adding drawing tools</h3>

<p>Let's add some more drawing tools, by adding more tool objects. Each new
tool needs to implement some of the available events.</p>

<p>First, a drop-down menu will be added, to allow the user to select the
different drawing tools. This is achieved by adding the following into the
HTML document:</p>

<pre><code>&lt;body&gt;
&lt;p&gt;&lt;label&gt;Drawing tool: &lt;select id=&#34;dtool&#34;&gt;
  &lt;option value=&#34;rect&#34;&gt;Rectangle&lt;/option&gt;
  &lt;option value=&#34;pencil&#34;&gt;Pencil&lt;/option&gt;
&lt;/select&gt;&lt;/label&gt;&lt;/p&gt;
&lt;!-- ... --&gt;
&lt;/body&gt;</code></pre>

<p>Then we update the script to handle more than just one tool:</p>

<pre><code>// ...
// The active tool instance.
var tool = false;
var tool_default = 'rect';

function init () {
  // ...
  // Get the tool select input.
  var tool_select = document.getElementById('dtool');
  if (!tool_select) {
    alert('Error: failed to get the dtool element!');
    return;
  }
  tool_select.addEventListener('change', ev_tool_change, false);

  // Activate the default tool.
  if (tools[tool_default]) {
    tool = new tools[tool_default]();
    tool_select.value = tool_default;
  }
  // ...
}

// ...
// The event handler for any changes made to the tool selector.
function ev_tool_change (ev) {
  if (tools[this.value]) {
    tool = new tools[this.value]();
  }
}

// This object holds the implementation of each drawing tool.
var tools = {};

// The drawing pencil.
tools.pencil = function () {
  // ...
};

// ...</code></pre>

<p>That should be enough. The code above just sets up an event handler for
the <code>&lt;select&gt;</code> element. The implementation of each drawing
tool is now inside a single <var>tools</var> object, and the <var>tool</var>
variable just holds an instance of the active tool. The
<code>ev_tool_change()</code> function makes sure that the <var>tool</var>
variable is always an object instance of the tool picked by the user.</p>

<p>The benefit of the above code is that any tool can have its own instance
logic, dependent on any factors you see fit. You can do anything you want
when the tool is activated, for example ask the user for a string, number or
some other input.</p>

<p>Now we've set up a solid groundwork for the tools and looked at the
pencil implementation, let's now look at implementing some of the other
individual tools.</p>

<h4 id="rectangle">Rectangle</h4>
<p>You are now in for a surprise. Let's implement the rectangle tool and
then <a href="example3.html">test the code</a>. Here's the <a
href="example3.js">updated script</a>:</p>

<pre><code>// ...
tools.rect = function () {
  var tool = this;
  this.started = false;

  this.mousedown = function (ev) {
    tool.started = true;
    tool.x0 = ev._x;
    tool.y0 = ev._y;
  };

  this.mousemove = function (ev) {
    if (!tool.started) {
      return;
    }

    var x = Math.min(ev._x,  tool.x0),
        y = Math.min(ev._y,  tool.y0),
        w = Math.abs(ev._x - tool.x0),
        h = Math.abs(ev._y - tool.y0);

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (!w || !h) {
      return;
    }

    context.strokeRect(x, y, w, h);
  };

  this.mouseup = function (ev) {
    if (tool.started) {
      tool.mousemove(ev);
      tool.started = false;
    }
  };
};
// ...</code></pre>

<p>The implementation of the new rectangle tool should be straight-forward
and thus easy to understand. It maintains the same basic structure as the
pencil tool. The difference is that for the rectangle we store the start
point, which is needed so we can then draw the rectangle for each mouse move
(live feedback).</p>

<p>Now, for the surprise: <a href="example3.html">Access the above example
link</a> and try drawing two rectangles.  Notice any problem?  Yes, that's
right: the previous drawing is always lost because of the
<code>clearRect()</code> method call. We cannot remove this call, because
the tool becomes useless if we do so (every rectangle resize remains on
screen, before you even release the mouse button to make your
selection).</p>

<p>The solution is to use a temporary canvas for live feedback operations.
The script initialization adds a new <code>canvas</code> element with the
same dimensions as the original one, positioned on top. All tools must draw
on the temporary canvas. When their drawing operation ends, the pixels they
generated are then moved onto the background canvas.</p>

<p><a href="example4.html">Try the updated rectangle example</a> - the
rectangle tool now works fine.</p>

<p>Here are the <a href="example4.js">script changes</a> required. The
initialization function now looks like so:</p>

<pre><code>// ...
var canvas, context, canvaso, contexto;

function init () {
  // Find the canvas element.
  canvaso = document.getElementById('imageView');
  if (!canvaso) {
    alert('Error: I cannot find the canvas element!');
    return;
  }

  if (!canvaso.getContext) {
    alert('Error: no canvas.getContext!');
    return;
  }

  // Get the 2D canvas context.
  contexto = canvaso.getContext('2d');
  if (!contexto) {
    alert('Error: failed to getContext!');
    return;
  }

  // Add the temporary canvas.
  var container = canvaso.parentNode;
  canvas = document.createElement('canvas');
  if (!canvas) {
    alert('Error: I cannot create a new canvas element!');
    return;
  }

  canvas.id     = 'imageTemp';
  canvas.width  = canvaso.width;
  canvas.height = canvaso.height;
  container.appendChild(canvas);

  context = canvas.getContext('2d');

  // ...
}</code></pre>

<p>The new <code>img_update()</code> function is as follows:</p>

<pre><code>// This function draws the #imageTemp canvas on top of #imageView,
// after which #imageTemp is cleared. This function is called each time when the
// user completes a drawing operation.
function img_update () {
  contexto.drawImage(canvas, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
}</code></pre>

<p>When any drawing operation is complete, the <code>img_update()</code>
function must be invoked, so that the new pixels get stored in the image.
For example, here is the minor update for the pencil tool:</p>

<pre><code>// The drawing pencil.
tools.pencil = function () {
  // ...
  this.mouseup = function (ev) {
    if (tool.started) {
      tool.mousemove(ev);
      tool.started = false;
      img_update();
    }
  };
};</code></pre>

<p>In the case of the rectangle and pencil tools, the drawing operation is
complete once the user releases the mouse button, so we simply add the call
to <code>img_update()</code> into the <code>mouseup</code> event handler.
However, note that this call is dependent on each drawing tool
implementation, in order to ensure the additional flexibility required by
other use cases.</p>

<p>The last part needing a minor update is the HTML document's CSS:</p>

<pre><code>&lt;style type=&#34;text/css&#34;&gt;
  #container { position: relative; }
  #imageView { border: 1px solid #000; }
  #imageTemp { position: absolute; top: 1px; left: 1px; }
&lt;/style&gt;</code></pre>

<p>The <abbr title="Cascading Style Sheet">CSS</abbr> above rules are needed
to properly position the temporary <code>&lt;canvas&gt;</code> element on
top of the original one.</p>

<h4 id="line">Line</h4>

<p>With everything in place, adding new tools becomes easier and easier.
The <a href="example5.js">JavaScript implementation including the line
tool</a> looks like this:</p>

<pre><code>tools.line = function () {
  var tool = this;
  this.started = false;

  this.mousedown = function (ev) {
    tool.started = true;
    tool.x0 = ev._x;
    tool.y0 = ev._y;
  };

  this.mousemove = function (ev) {
    if (!tool.started) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(tool.x0, tool.y0);
    context.lineTo(ev._x,   ev._y);
    context.stroke();
    context.closePath();
  };

  this.mouseup = function (ev) {
    if (tool.started) {
      tool.mousemove(ev);
      tool.started = false;
      img_update();
    }
  };
};</code></pre>

<p>That's it! <a href="example5.html">Try the line-drawing example for
yourself</a>.</p>

<p>The line tool is very similar to the rectangle tool. The
<code>mousedown()</code> function stores the starting point, which is then
used in <code>mousemove()</code> for drawing the actual line.</p>

<h2 id="whatsnext">What's next?</h2>

<p>The above should give you a fairly good understanding of what it takes to
<em>start</em> developing an online paint application. Besides just drawing
on the canvas you need to take into consideration other aspects as well,
such as:</p>

<ul>
<li>The current structure of the drawing tool objects is roughly
events-based. You will need events for pre-activation, post-activation and
deactivation for some of your tools. For example, an "Insert image" tool
might ask the user for the URL, but if the user decides to cancel, your
script must somehow cancel the activation of said tool.</li>

<li>You will certainly need more event listeners, not just the three
listed in the previous point (think of context menus, double clicks and
more).  Adding any new event to the list is a trivial task.</li>

<li>You need a way to store history steps for undoing / redoing
operations. There are three approaches for this: store the entire image in
memory for each step, remember each operation executed (like a macro), or
a hybrid between the two methods. Each method has its own pros and cons. The
first method is faster and easier to implement, but uses too much memory,
and with big images it is slow to store the image in the history. The
second method is more complex, but faster when considering just storing
the macro commands for each step; there is still a slowness associated
with actually executing undo / redo however - you have to re-execute the
commands in history. The hybrid method is the most complex approach, but
depending on your implementation it should be the fastest.</li>

<li>Keyboard shortcuts for most drawing operations are needed. This means
that the drawing tool objects need more event handlers. I will deal with the keyboard accessibility of this application in a future article - watch this space.</li>

<li>Each tool should have its own set of properties and options (colors,
line thickness, and more).</li>

<li>You might want to consider combining <abbr title="Scalable Vector
Graphics">SVG</abbr> with canvas, for more possibilities.</li>

<li>What makes or breaks an application is its user interface: commands,
tools, keyboard shortcuts, and the general use-cases best handled by the
application. You have to make your application pleasant for daily usage as
well as cool.</li>
</ul>

<p>If you want to learn more, you can take a look at the open-source project
<a href="http://code.google.com/p/paintweb/">Paint.Web</a>. This tutorial is
based on the code used for Paint.Web, thus you should already have
a head-start in understanding that code. At the moment, Paint.Web is in
a permanent state of evolution, and it has already tackled some of the
aspects mentioned above.</p>

<h2 id="readmore">Read more...</h2>
<ul>
<li><a href="/articles/view/html-5-canvas-the-basics/">HTML5 canvas - the basics</a></li>
<li><a href="/articles/view/svg-or-canvas-choosing-between-the-two/">SVG or Canvas? Сhoosing between the two</a></li>
</ul>
