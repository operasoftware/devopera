Title: Keyboard accessibility in web applications: part 1
----
Date: 2009-07-08 09:27:38
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

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/keyboard-accessible-web-applications-2/" rel="next" alt="link to the next article in the series">Next article — Keyboard accessibility in web applications: part 2</a></li>
</ul>

    <h2>Table of contents</h2>

    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#gettingstarted">Getting started</a></li>
      <li><a href="#toolactivation">Tool activation</a>
        <ul>
          <li><a href="#theconfigurationfile">The configuration file</a></li>
        </ul>
      </li>
      <li><a href="#keyboardshortcutsindrawingtools">Keyboard shortcuts in 
        drawing tools</a>
        <ul>
          <li><a href="#updatingdrawingtools">Updating the drawing tools</a></li>
        </ul>
      </li>
      <li><a href="#inthenextpart">In the next part</a></li>
    </ul>

    <h2 id="introduction">Introduction</h2>

    <p>In my <a href="http://dev.opera.com/articles/view/html5-canvas-painting/">previous 
      article</a> I showed you how to start developing a browser-based painting 
    application. In this three-part article we will follow on from that, focussing on making our application keyboard accessible. Along the way, you should pick up some good ideas as to how to improve the accessibility of your own web applications.</p>

    <p class="note">You should allow the users of your application to access 
    provided functionality by the keyboard as well as the mouse, to benefit users who cannot use a mouse or trackpad, perhaps due to some kind of motility impairment, or because their chosen browsing device does not have one.</p>

    <p>We will take a look at how to handle keyboard-related events in the 
    painting application, globally and per drawing tool. Additionally, we will 
    implement a way to move the pointer inside the drawing canvas using keyboard 
    shortcuts.</p>

    <p>The process of making your web application accessible to its 
    users does not just require adding keyboard shortcuts. In addition, your 
    markup and the application <abbr title="Document Object Model">DOM</abbr> 
    need to be semantic, and you might need to setup additional <a href="http://www.w3.org/WAI/intro/aria"><abbr title="Web Accessibility Initiative - Accessible Rich Internet Applications">WAI-ARIA</abbr></a> attributes, such that the 
    application can be used with screen readers. Making an application 
    accessible will vary much from case to case - there is no one-size-fits-all 
    solution.</p>

    <p class="note">To make it easier to follow along with the code walkthrough 
    presented below, <a href="canvas-paint-keyboard-tutorial.zip">download the 
      full code examples</a> and follow along with it as you read the 
    article.</p>

    <h2 id="gettingstarted">Getting started</h2>

    <p>We will begin right from the finished example 
    provided in the <a href="http://dev.opera.com/articles/view/html5-canvas-painting/">previous 
      article</a> (refer to <code>example5.html</code> in the code download).</p>

    <p>Before we dive deep into coding the keyboard shortcuts we need to first 
    organize the code better, to allow the web application to grow more 
    easily.</p>

    <p>First we will take the drawing tools out of the main code, and move them 
    all inside a new <a href="tools.js">tools.js</a> file (see app1/tools.js inside the code download). Then we will
    reorganize the code such that all the tool objects are inside a single 
    namespace object, <var>PaintTools</var>. Here&#39;s a snippet from the code:</p>

<pre><code>/**
 * Holds the implementation of each drawing tool.
 */
var PaintTools = {};

/**
 * @class The drawing pencil.
 *
 * @param {Painter} app Reference to the main paint application object.
 */
PaintTools.pencil = function (app) {
  var _self   = this,
      context = app.buffer.context,
      update  = app.layerUpdate;

  /**
   * Tells if the user has started the drawing operation or not.
   *
   * @private
   * @type Boolean
   */
  var started = false;

  /**
   * Initialize the drawing operation.
   *
   * @param {Event} ev The DOM Event object.
   */
  this.mousedown = function (ev) { ... };

  /**
   * Perform the drawing operation, while the user moves the mouse.
   *
   * @param {Event} ev The DOM Event object.
   */
  this.mousemove = function (ev) { ... };

  /**
   * End the drawing operation, once the user releases the mouse button.
   *
   * @param {Event} ev The DOM Event object.
   */
  this.mouseup = function (ev) { ... };
};

/**
 * @class The rectangle tool.
 *
 * @param {Painter} app Reference to the main paint application object.
 */
PaintTools.rect = function (app) { ... };

// ...</code></pre>

    <p class="note">The code above has comments in jsdoc comment format. It 
    is recommended you add comments to your code describing any <abbr title="Application Programmable Interface">API</abbr>, so that it is 
    easier for others to read and extend your code. With <a href="http://code.google.com/p/jsdoc-toolkit/">jsdoc-toolkit</a> you can 
    generate complete documentation based on the comments you write in the 
    source code files.</p>

    <p>Additional changes are required in the main code (<a href="index.js">index.js</a> - see also <code>app1/index.js</code> in the code download) to enable us to make use of the new 
    <var>PaintTools</var> object. Here&#39;s the relevant code snippet:</p>

<pre><code>/**
 * @class The paint tool application object.
 */
function Painter () {
  var _self = this;

  /**
   * Holds the buffer canvas and context references.
   * @type Object
   */
  this.buffer = {canvas: null, context: null};

  /**
   * Holds the current layer ID, canvas and context references.
   * @type Object
   */
  this.layer = {id: null, canvas: null, context: null};

  /**
   * The instance of the active tool object.
   *
   * @type Object
   * @see Painter#tool_default holds the ID of the tool which is activated when 
   * the application loads.
   * @see PaintTools The object which holds the implementation of each drawing 
   * tool.
   */
  this.tool = null;

  /**
   * The default tool ID.
   *
   * @type String
   * @see PaintTools The object which holds the implementation of each drawing 
   * tool.
   */
  this.tool_default = &#39;line&#39;;

  /**
   * Initialize the paint application.
   * @private
   */
  function init () { ... };

  /**
   * The Canvas event handler.
   * 
   * This method determines the mouse position relative to the canvas 
   * element, after which it invokes the method of the currently active tool 
   * having the same name as the current event type. For example, for the 
   * <code>mousedown</code> event the <var>tool</var>.mousedown() method is 
   * invoked.
   *
   * The mouse coordinates are added to the <var>ev</var> DOM Event object: 
   * <var>ev.x_</var> and <var>ev.y_</var>.
   *
   * @private
   * @param {Event} ev The DOM Event object.
   */
  function ev_canvas (ev) { ... };

  /**
   * The event handler for any changes made to the tool selector.
   * @private
   */
  function ev_tool_change () { ... };

  /**
   * This method draws the buffer canvas on top of the current image layer, 
   * after which the buffer is cleared. This function is called each time when 
   * the user completes a drawing operation.
   */
  this.layerUpdate = function () { ... };

  init();
};

if(window.addEventListener) {
window.addEventListener(&#39;load&#39;, function () {
  if (window.Painter) {
    // Create a Painter object instance.
    window.PainterInstance = new Painter();
  }
}, false); }</code></pre>

    <p>Following the same style as in the tools file, we add jsdoc comments and 
    define a <var>Painter</var> object, which holds the main code of the web 
    application. Once the page loads, a new instance of the <code>Painter</code> 
    object is created.</p>

    <p>For internationalization, it is better to keep all language-related 
    strings in separate files, for each supported language. For this purpose, we 
    now have a simple <a href="en.js">lang/en.js</a> file. Currently 
    there are only a few strings, but many more will be added in the future.  
    You might want to consider the use of a <a href="http://en.wikipedia.org/wiki/JSON">JSON</a> file for storing 
    language strings, instead of JavaScript. This is left as an exercise for 
    those interested in further modifying these examples.</p>

    <p>Please take a look at the updated code (app1 directory), and the documentation (doc directory) in the code download. The documentation is generated generated using <a href="http://code.google.com/p/jsdoc-toolkit/">jsdoc-toolkit</a>; you will 
    see it is very much the same as what we had in the previous article.</p>

    <h2 id="toolactivation">Tool activation</h2>

    <p>In order to add keyboard shortcuts there are several important aspects 
    you need to take into consideration. For one, you need to implement 
    a cross-browser compatibility layer. Unfortunately, the DOM keyboard events 
    have important implementation differences between browsers. Thus, you need 
    to provide for any such differences in your code. Additionally, you need to 
    structure your code and API to make sure you can easily add new keyboard 
    shortcuts to any action you want.</p>

    <p>To tackle cross-browser compatibility you might want to check out an 
    open-source JavaScript library such as <a href="http://jquery.com">jQuery</a> or <a href="http://www.dojotoolkit.org">Dojo</a> - you could write code 
    yourself, but there is no point reinventing the wheel.  For the sake of 
    simplicity, here we will reuse a small part of <a href="http://code.google.com/p/libmacrame">libmacrame</a>: the keyboard 
    event handling mechanism.</p>

    <p>For global keyboard shortcuts we only need to add an event listener to 
    the <var>window</var> object, for the <code>keydown</code> event. The event 
    handler determines the key combination generated by the event and checks the 
    list of defined keyboard shortcuts to find which operation needs to be 
    performed. Additionally, we need a configuration file to store the keyboard 
    shortcuts and the associated tool IDs.</p>

    <p>Here&#39;s a snippet from the <a href="index2.js">updated 
      <code>init</code>() function</a> (see also inside the app2 folder in the code download):</p>

<pre><code>function Painter () {
  // ...
  /**
   * Holds references to important DOM elements.
   *
   * @private
   * @type Object
   */
  this.elems = {};

  /**
   * Holds the keyboard event listener object.
   *
   * @private
   * @type lib.dom.KeyboardEventListener
   * @see lib.dom.KeyboardEventListener The class dealing with the cross-browser 
   * differences in the DOM keyboard events.
   */
  var kbListener_;

  // ...
  function init () {
    // ...
    // Get the tools drop-down.
    _self.elems.tool_select = document.getElementById(&#39;tool&#39;);
    if (!_self.elems.tool_select) {
      alert(lang.errorToolSelect);
      return;
    }
    _self.elems.tool_select.addEventListener(&#39;change&#39;, ev_tool_change, false);

    // Activate the default tool.
    _self.toolActivate(PainterConfig.tool_default);

    // ...
    // Add the keydown event listener.
    kbListener_ = new lib.dom.KeyboardEventListener(window,
        {keydown: ev_keydown});
  };

  // ...
};</code></pre>

    <p>The initialization function now adds the <code>keydown</code> event 
    listener using the compatibility layer provided by the minimal JavaScript 
    library (see the new <a href="lib2.js">lib.js</a> file - see the app2 directory in code download). The event 
    handler we provide makes the keyboard shortcuts work in the paint 
    application.</p>

    <p>Another rather minor detail is that we now need to store a reference to 
    the tool drop-down element in <var>elems</var>, so we can change the 
    selected value when another tool is activated using the new 
    <code>toolActivate()</code> method:</p>

<pre><code>this.toolActivate = function (id) {
  if (!id) {
    return false;
  }

  // Find the tool object.
  var tool = PaintTools[id];
  if (!tool) {
    return false;
  }

  // Check if the current tool is the same as the desired one.
  if (_self.tool &amp;&amp; _self.tool instanceof tool) {
    return true;
  }

  // Construct the new tool object.
  var tool_obj = new tool(_self);
  if (!tool_obj) {
    alert(lang.errorToolActivate);
    return false;
  }

  _self.tool = tool_obj;

  // Update the tool drop-down.
  _self.elems.tool_select.value = id;

  return true;
};</code></pre>

    <p>The <code>toolActivate()</code> method does the same as the 
    <code>ev_tool_change()</code> method did, but it is no longer relying on the 
    existence of the tools drop-down element. The <var>id</var> parameter takes 
    a string - the <code>id</code> of the drawing tool - to activate it. The 
    drawing tool must be defined in the global <var>PaintTools</var> object (see 
    <a href="tools2.js">tools.js from application 2</a> inside the app2 directory in the code download).</p>

    <p>Here&#39;s the updated <code>ev_tool_change()</code> function:</p>

<pre><code>/**
 * The event handler for any changes made to the tool selector.
 *
 * @private
 * @see Painter#toolActivate The method which does the actual drawing tool 
 * activation.
 */
function ev_tool_change () {
  _self.toolActivate(this.value);
};</code></pre>

    <p>It is a piece of cake now - we just call the <code>toolActivate()</code> 
    method with the input value.</p>

    <p>Next, to make everything work we define the <code>keydown</code> event 
    handler:</p>

<pre><code>function ev_keydown (ev) {
  if (!ev || !ev.key_) {
    return;
  }

  // Do not continue if the event target is some form input.
  if (ev.target &amp;&amp; ev.target.nodeName) {
    switch (ev.target.nodeName.toLowerCase()) {
      case &#39;input&#39;:
      case &#39;select&#39;:
        return;
    }
  }

  // Determine the key ID.
  var i, kid = &#39;&#39;,
      kmods = {altKey: &#39;Alt&#39;, ctrlKey: &#39;Control&#39;, shiftKey: &#39;Shift&#39;};
  for (i in kmods) {
    if (ev[i] &amp;&amp; ev.key_ != kmods[i]) {
      kid += kmods[i] + &#39; &#39;;
    }
  }
  kid += ev.key_;

  // If there&#39;s no event handler within active tool, or if the event handler 
  // does otherwise return false, then continue with the global keyboard 
  // shortcuts.

  var gkey = PainterConfig.keys[kid];
  if (!gkey) {
    return;
  }

  // Activate the tool associated with the current keyboard shortcut.
  if (gkey.tool) {
    _self.toolActivate(gkey.tool);
  }

  if (ev.preventDefault) {
    ev.preventDefault();
  }
};</code></pre>

    <p>In the <code>keydown</code> event handler we make use of the new minimal 
    JavaScript library (see the new <a href="lib2.js">lib.js</a> file).  The 
    <code>lib.dom.KeyboardEventListener</code> class is used to determine the 
    key generated by the event. It will always provide the <var>key_</var> event   
    property to our event handler. This makes it easy to check which key was 
    generated via a user interaction. We will go into details about this class in 
    one of the sections ahead, but for the sake of simplicity we are now focusing on the actual web application.</p>

    <p>We next generate the &quot;key ID&quot; - which includes the name of the modifiers - to make it easier to write down the keyboard shortcuts in the configuration 
    file.</p>

    <h3 id="theconfigurationfile">The configuration file</h3>

    <p>To store the keyboard shortcuts we could simply define a new object in 
    the <a href="index2.js">main file</a>. However, it is best that we keep the 
    code separated, therefore we create a new <a href="config.js">config.js</a> 
    file. You might want to use <a href="http://en.wikipedia.org/wiki/JSON">JSON</a> for your configuration.</p>
      
    <p>Here&#39;s the code:</p>

<pre><code>/**
 * @namespace Holds all the configuration for the paint application.
 */
var PainterConfig = {
  /**
   * The default tool ID.
   *
   * @type String
   * @see PaintTools The object holding all the drawing tools.
   */
  tool_default: &#39;line&#39;,

  /**
   * Keyboard shortcuts associated to drawing tools.
   *
   * @type Object
   * @see PaintTools The object holding all the drawing tools.
   */
  keys: {
    L: { tool: &#39;line&#39; },
    P: { tool: &#39;pencil&#39; },
    R: { tool: &#39;rect&#39; }
  }
};</code></pre>

    <p>For now, it is quite small, but in the future you will need a lot more 
    configuration options in this file.</p>

    <p>In the <var>PainterConfig.keys</var> object we can setup the keyboard 
    shortcuts.  If the keyboard combination is found in this list, then the 
    associated tool is activated by the <code>keydown</code> event handler.</p>

    <p>To wrap it all up, you just need to update the index.html markup to include the new scripts: <a href="config.js">config.js</a> and <a href="lib2.js">lib.js</a>.</p>
    
    <p>That&#39;s about all you need to do. Now you can activate any drawing tool 
    using keyboard shortcuts.</p>

    <p>Try the updated application in the code download. Also, make sure to take 
    a look at the app2 documentation in the download too.</p>

    <h2 id="keyboardshortcutsindrawingtools">Keyboard shortcuts in drawing 
      tools</h2>

    <p>The next logical step is to extend what we have in order to allow any 
    drawing tool to have its own keyboard shortcuts. For example, you might want 
    to be able to press <kbd>Escape</kbd> to cancel a drawing operation, or when 
    you code a selection tool, you might like the <kbd>Delete</kbd> key to clear  
    the selected pixels.</p>

    <p>Luckily, there is only a small amount of work remaining to be done to 
    achieve our goal. You need to update the <code>ev_canvas()</code> function 
    to return the result of the current tool event handler, or 
    <code>false</code> if no event handler was executed. Here is the updated 
    function:</p>

<pre><code>function ev_canvas (ev) {
  if (!ev.type || !_self.tool) {
    return false;
  }

  if (typeof ev.layerX != &#39;undefined&#39;) { // Firefox
    ev.x_ = ev.layerX;
    ev.y_ = ev.layerY;
  } else if (typeof ev.offsetX != &#39;undefined&#39;) { // Opera
    ev.x_ = ev.offsetX;
    ev.y_ = ev.offsetY;
  }

  // Call the event handler of the active tool.
  var func = _self.tool[ev.type];
  if (typeof func != &#39;function&#39;) {
    return false;
  }

  res = func(ev);

  /*
   * If the event handler from the current tool does return false, it means it 
   * did not execute for some reason. For example, in a <code>keydown</code> 
   * event handler the keyboard shortcut does not match some criteria, thus the 
   * handler returns false, leaving the event continue its normal flow.
   */
  if (res !== false &amp;&amp; ev.preventDefault) {
    ev.preventDefault();
  }

  return res;
};</code></pre>

    <p>Next, you need to update the <code>init()</code> function to make sure 
    our global keyboard shortcuts event handler is invoked for all keyboard 
    events:</p>

<pre><code>function init () {
  // ...

  // Add the keyboard events handler.
  kbListener_ = new lib.dom.KeyboardEventListener(window,
      {keydown: ev_keyhandler, keypress: ev_keyhandler, keyup: ev_keyhandler});
};</code></pre>

    <p>The previous event handler <code>ev_keydown()</code> is now maturing, 
    becoming the global keyboard events handler, 
    <code>ev_keyhandler()</code>.</p>

    <p>Now we have to update the <code>ev_keyhandler()</code> function to modify 
    the DOM Event object. Just like with the mouse coordinates, you want to pass 
    to the event handler of the current tool the key and the &quot;key ID&quot; 
    properties. The <var>key_</var> property is already added to the event 
    object so we only have to add the <var>kid_</var> property. We then have to 
    call the <code>ev_canvas()</code> function with the modified event object.  
    We do this because that function will also include the mouse coordinates 
    into the DOM Event object, and it will call the event handler of the current 
    tool (if there is one defined).  If <code>ev_canvas()</code> returns some 
    result, we know to stop the execution; in such cases we allow the drawing 
    tools to overwrite any global keyboard shortcut.</p>

    <p>Here is a code snippet from the updated <code>ev_keyhandler()</code> 
    function:</p>

<pre><code>// Determine the key ID.
ev.kid_ = &#39;&#39;;
var i, kmods = {altKey: &#39;Alt&#39;, ctrlKey: &#39;Control&#39;, shiftKey: &#39;Shift&#39;};
for (i in kmods) {
  if (ev[i] &amp;&amp; ev.key_ != kmods[i]) {
    ev.kid_ += kmods[i] + &#39; &#39;;
  }
}
ev.kid_ += ev.key_;

/*
 * Send the event to the canvas, and eventually to the keydown event handler 
 * of the currently active tool (if any).
 * The effect of calling ev_canvas() is that the event object *might* have the 
 * x_ and y_ coordinate properties added. Additionally, if ev_canvas() returns 
 * some result, we can use it to cancel any global keyboard shortcut.
 */
var canvas_result = ev_canvas(ev);
if (canvas_result) {
  return;
}</code></pre>

    <p>As you can see, a new property is added to the <var>ev</var> object: 
    <var>ev.kid_</var> is a string holding the key and the modifiers list 
    (<kbd>Control</kbd>, <kbd>Alt</kbd> and/or <kbd>Shift</kbd>). For example, 
    if the user presses the <kbd>A</kbd> key while holding down 
    <kbd>Control</kbd>, then <var>ev.kid_</var> is &quot;Control A&quot;. If the user 
    presses &quot;9&quot; while holding down <kbd>Shift</kbd>, then <var>ev.kid_</var> is 
    &quot;Shift 9&quot;.</p>

    <p>That&#39;s all you need to change in the <a href="index3.js">main 
      code from app 3</a>. Now let&#39;s update the drawing tools.</p>

    <h3 id="updatingdrawingtools">Updating the drawing tools</h3>

    <p>For the rectangle tool we can implement support for pressing the 
    <kbd>Escape</kbd> key to cancel the drawing operation, and we can also 
    implement support for using the <kbd>Shift</kbd> key to force the side 
    lengths to remain the same, so you can draw perfect squares if desired.</p>

    <p>Here we have a snippet from the updated rectangle tool 
    implementation:</p>

<pre><code>PaintTools.rect = function (app) {
  // ...
  this.mousemove = function (ev) {
    // ...
    // Constrain the shape to a square when the user holds down the Shift key.
    if (ev.shiftKey) {
      if (w &gt; h) {
        if (y == ev.y_) {
          y -= w-h;
        }
        h = w;
      } else {
        if (x == ev.x_) {
          x -= h-w;
        }
        w = h;
      }
    }

    context.strokeRect(x, y, w, h);
  };

  // ...
  this.keydown = function (ev) {
    if (!started || ev.kid_ != &#39;Escape&#39;) {
      return false;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    started = false;
  };
};</code></pre>

    <p>The <code>mousemove</code> event handler implements the constraining of 
    the shape to a square when the user holds down the <kbd>Shift</kbd> key.  
    The new <code>keydown</code> event handler is straight-forward and easy: it 
    returns false if the drawing operation is not started, or if the key 
    combination is unrecognized. If the user pressed the <kbd>Escape</kbd> key, 
    then the method simply clears the buffer and ends the drawing operation.</p>

    <p>Similarly, we can also update the line tool so it allows users to hold 
    down the <kbd>Shift</kbd> key to force drawing a straight 
    horizontal/vertical line, or to press the <kbd>Escape</kbd> key to cancel 
    the drawing operation. Here is the updated code:</p>

<pre><code>PaintTools.line = function (app) {
  // ...
  this.mousemove = function (ev) {
    // ...
    // Snap the line to be horizontal or vertical, when the Shift key is down.
    if (ev.shiftKey) {
      var diffx = Math.abs(ev.x_ - x0),
          diffy = Math.abs(ev.y_ - y0);

      if (diffx &gt; diffy) {
        ev.y_ = y0;
      } else {
        ev.x_ = x0;
      }
    }

    // ...
  };

  // ...
  this.keydown = function (ev) {
    if (!started || ev.kid_ != &#39;Escape&#39;) {
      return false;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    started = false;
  };
};</code></pre>

    <p>For all intents and purposes, the <code>keydown</code> event handler is 
    identical to the one in the rectangle tool; it&#39;s just that the 
    implementation for the line horizontal/vertical snapping is slightly 
    different.</p>

    <p>That&#39;s all! Try the updated application and check out the updated documentation found in the app3 directory in the code download.</p>

    <h2 id="inthenextpart">In the next part</h2>

    <p>In the <a href="http://dev.opera.com/articles/view/keyboard-accessible-web-applications-2/">second part of the article</a> we extend 
    the functionality of the paint application to allow users to draw with 
    the keyboard, without any pointing device.</p>

    <p>If you want to learn more, stick around at <a href="http://dev.opera.com">DevOpera</a> and also check for the upcoming changes to <a href="http://code.google.com/p/paintweb">PaintWeb</a> 
    - the open-source web application this article is based on.</p>

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/keyboard-accessible-web-applications-2/" rel="next" alt="link to the next article in the series">Next article — Keyboard accessibility in web applications: part 2</a></li>
</ul>
