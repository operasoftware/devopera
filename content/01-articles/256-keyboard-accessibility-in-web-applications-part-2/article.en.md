Title: Keyboard accessibility in web applications: part 2
----
Date: 2009-07-15 12:14:07
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
<li class="prev"><a href="http://dev.opera.com/articles/view/keyboard-accessible-web-applications-1/" rel="start" title="link to the first article in the series">Previous article — Keyboard accessibility in web applications: part 1</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/keyboard-accessible-web-applications-3/" rel="next" title="link to the next article in the series">Next article — Keyboard accessibility in web applications: part 3</a></li>
</ul> 

<h2>Table of contents</h2>

    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#extendingthepaintapplication">Extending the paint 
        application</a></li>
      <li><a href="#mousekeysimplementation">Mouse keys implementation</a>
        <ul>
          <li><a href="#configurationfileupdate">Configuration file 
            update</a></li>
          <li><a href="#theeventhandlers">The event handlers</a></li>
        </ul>
      </li>
      <li><a href="#inthenextpart">In the next part</a></li>
    </ul>

    <h2 id="introduction">Introduction</h2>

    <p>In the <a href="http://dev.opera.com/articles/view/keyboard-accessible-web-applications-1/">first part</a> of the article we added 
    keyboard shortcuts to a simple paint application. Now we will implement 
    a way to move the pointer inside the drawing canvas using keyboard 
    shortcuts.</p>

    <p>At this point, the web application cannot be used entirely via the keyboard; 
    it still requires a pointing device for the actual drawing. Users who really 
    need keyboard-based drawing will most likely have mouse keys activated in 
    their operating system of choice (<a href="http://www.microsoft.com/enable/training/windowsxp/mousekeys.aspx">check this page out for details of the Windows implementation</a>, for example).</p>

    <p>For educational and experimentation purposes, we can implement 
    keyboard-based drawing inside our paint tool. Compared to a system-wide 
    mouse keys implementation, this has the advantage of being tied directly to 
    our web application, opening a range of possible improvements applicable 
    only to our use-case.</p>

    <p>To implement mouse keys in the paint application we have to add support 
    for extending the application functionality from external code. We must make 
    sure any extended functionality can be accessed from the keyboard shortcuts 
    configuration file.</p>

    <p class="note">To make it easier to follow along with the code walkthrough 
    presented below, <a href="canvas-paint-keyboard-tutorial.zip">download the 
      full code example</a> and follow along with it as you read the 
    article. The code discussed in this article is all found inside the <code>app4</code> directory.</p>

    <h2 id="extendingthepaintapplication">Extending the paint application</h2>

    <p>Let&#39;s begin by adding support for removable actions to the paint 
    application. Here is a snippet from the updated <code>Painter</code> 
    class:</p>

<pre><code>function Painter () {
  // ...
  /**
   * Holds all the removable functionality from the paint application.
   *
   * @type Object
   * @see Painter#actionAdd Add a new action.
   * @see Painter#actionRemove Remove an action.
   */
  this.actions = {};

  // ...
  this.actionAdd = function (id, func, overwrite) {
    if (typeof id != &#39;string&#39; || typeof func != &#39;function&#39; || (this.actions[id] &amp;&amp; !overwrite)) {
      return false;
    }

    this.actions[id] = new func(_self);

    return this.actions[id] ? true : false;
  };

  // ...
  this.actionRemove = function (id) {
    if (!id || !_self.actions[id]) {
      return false;
    }

    if (typeof _self.actions[id].actionRemove == &#39;function&#39;) {
      _self.actions[id].actionRemove();
    }

    delete _self.actions[id];

    return true;
  };

  // ...
};</code></pre>

    <p>The new code allows us to add new actions, which are in fact functions 
    that return an object holding any properties and methods you want. Any new 
    object is added to the <code>Painter</code> actions with the given ID.  When 
    the action is removed, the <code>actionRemove()</code> method is called, if 
    the action implements it.  This allows you to execute any custom 
    &quot;uninstall&quot; procedures you like.</p>

    <p>There is not much we can do with that, for now. Let&#39;s tie things together 
    by allowing the keyboard shortcuts configuration to call methods from 
    installed actions. This can be done in the <code>ev_keyhandler()</code> 
    function:</p>

<pre><code>// ...
var gkey = PainterConfig.keys[ev.kid_];
if (!gkey) {
  return;
}

ev.kobj_ = gkey;

// Execute the associated action.
if (gkey.action) {
  var action = _self.actions[gkey.action];
  if (action) {
    var func = action[ev.type];
    if (typeof func == &#39;function&#39;) {
      func(ev);
    }
  }
}
// ...</code></pre>

    <p>This update allows us to include an <code>action</code> property for each 
    configured keyboard shortcut, just like we have the <code>tool</code> property 
    for tool activation. When the user presses the key combination, the 
    method having the same name as the event type will be invoked, from the 
    action object.</p>

    <p>With the above code in place, we can now do something really simple like 
    this:</p>

<pre><code>PainterInstance.actionAdd(&#39;test&#39;, function (app) {
 // ...
 this.keydown = function (ev) { ... };
 this.keypress = function (ev) { ... };
 // ...
});</code></pre>

    <p>Into the <var>PainterConfig</var> object we can add a keyboard shortcut 
    that invokes the test action:</p>

<pre><code>var PainterConfig = {
  keys: {
    T: { action: &#39;test&#39;, prop1: &#39;val1&#39; }
  }
};</code></pre>

    <p>From this code you can see that the key <kbd>T</kbd> is associated with 
    the action with an ID of <code>test</code>. Now we&#39;ve implemented the change on the 
    <code>ev_keyhandler()</code> function, the <code>keydown()</code>, 
    <code>keypress()</code> and the <code>keyup()</code> methods from the test 
    action are invoked when their respective events are fired. Additionally, by 
    adding the <code>kobj_</code> property to the DOM Event object, any method 
    from the test action can access the keyboard shortcut configuration and any 
    of its properties. This allows us to pass custom parameters to the action 
    method.</p>

    <h2 id="mousekeysimplementation">Mouse keys implementation</h2>

    <p>To implement mouse keys support, we need to always store the last mouse 
    location in an object, to allow keyboard-based movements to continue from 
    the same place.</p>

    <p>During typical use, the event flow involves several 
    <code>mousemove</code> events to the desired position, then 
    <code>mousedown</code> to start drawing, then several <code>mousemove</code> 
    events until the destination is reached, and finally a <code>mouseup</code> 
    event for ending the drawing operation. We need to store the state of the 
    mouse button - if it is down or not. The mouse button is considered to be 
    down/active between a <code>mousedown</code> and a <code>mouseup</code> 
    event. This is needed by a mouse keys implementation in order to determine 
    and synthetically alter the state of the mouse button and generate any 
    required mouse events when the user presses a key.</p>

    <p>Here are the updates needed in the <code>ev_canvas()</code> function:</p>

<pre><code>function Painter () {
  // ...

  /**
   * Holds the last recorded mouse coordinates and the button state (if it&#39;s 
   * down or not).
   *
   * @private
   * @type Object
   */
  this.mouse = {x: 0, y: 0, buttonDown: false};

  // ...
  function ev_canvas (ev) {
    // ...

    /*
     * If the mouse is down already, skip the event.
     * This is needed to allow the user to go out of the drawing canvas, release 
     * the mouse button, then come back and click to end the drawing operation.
     * Additionally, this is needed to allow extensions like mouse keys to 
     * perform their actions during a drawing operation, even when a real mouse 
     * is used. For example, allow the user to start drawing with the keyboard 
     * (press 0) then use the real mouse to move and click to end the drawing 
     * operation.
     */
    if (_self.mouse.buttonDown &amp;&amp; ev.type == &#39;mousedown&#39;) {
      return false;
    }

    // Don&#39;t overwrite any existing x_ / y_ property.
    // These properties might be added by other functions.
    if (typeof ev.x_ == &#39;undefined&#39;) {
      if (typeof ev.layerX != &#39;undefined&#39;) { // Firefox
        ev.x_ = ev.layerX;
        ev.y_ = ev.layerY;
      } else if (typeof ev.offsetX != &#39;undefined&#39;) { // Opera
        ev.x_ = ev.offsetX;
        ev.y_ = ev.offsetY;
      }

      // Update the current mouse position only for mouse events.
      // Other events do not provide accurate mouse coordinates.
      switch (ev.type) {
        case &#39;mousedown&#39;:
        case &#39;mousemove&#39;:
        case &#39;mouseup&#39;:
          _self.mouse.x = ev.x_;
          _self.mouse.y = ev.y_;
      }
    }

    if (ev.type == &#39;mousedown&#39;) {
      _self.mouse.buttonDown = true;
    }

    // Call the event handler of the active tool.
    var func = _self.tool[ev.type];
    if (typeof func != &#39;function&#39;) {
      return false;
    }

    res = func(ev);

    if (ev.type == &#39;mouseup&#39;) {
      _self.mouse.buttonDown = false;
    }
  };

  // ...
};</code></pre>

    <p>Here we&#39;ve added a new property object to the <code>Painter</code> class 
    - the <code>mouse</code> property - to hold information about the mouse 
    coordinates and the button state. The updated <code>ev_canvas()</code> 
    function tries to determine the mouse coordinates if the DOM Event object 
    does not already have the two <code>x_</code> and <code>y_</code> properties.  
    Both properties will be added by the mouse keys implementation. The new 
    <code>ev_canvas()</code> function updates the mouse coordinates and the 
    button state, depending on each event type.</p>

    <p>The above completes the updates necessary to the main code - <a href="index4.js">check out the fourth index.js update</a>.</p>

    <p>In the current tools, we have set an inner variable named <var>started</var> 
    to true on <code>mousedown</code>, to track if the mouse button is being 
    clicked, so their <code>mousemove</code> event handler can perform the 
    drawing operation. We can drop that now, and reuse the new 
    <var>mouse.buttonDown</var> property from the application object. Check out 
    the minor changes in the <a href="tools4.js">fourth tools.js 
      update</a>.</p>

    <p>The <code>Painter</code> API provides us with sufficient pointer 
    information, and an extension mechanism for adding custom keyboard shortcuts  
    - we can now start implementing mouse keys support. Let&#39;s create a new <a href="mousekeys.js">mousekeys.js</a> file, which is added into the <code>index.html</code> file (to see all of these in action, fire up <code>index.html</code> from the app4 folder in the <a href="canvas-paint-keyboard-tutorial.zip">code download</a>). Here is the basic code structure for 
    mouse keys:</p>

<pre><code>/**
 * @class The MouseKeys action.
 *
 * @param {Painter} app Reference to the main paint application object.
 */
function PaintMouseKeys (app) {
  var canvas = app.buffer.canvas,
      mouse  = app.mouse;

  /**
   * Holds the current mouse movement speed in pixels.
   *
   * @private
   * @type Number
   */
  var speed = 1;

  /**
   * Holds the current mouse movement acceleration, taken from the 
   * configuration.
   *
   * @private
   * @type Number
   * @see PainterConfig.mousekeys_accel The mouse keys acceleration setting.
   */
  var accel = PainterConfig.mousekeys_accel;

  if (!canvas || !canvas.parentNode) {
    return false;
  }

  /**
   * Holds a reference to the DOM element representing the pointer on top of the 
   * canvas element.
   *
   * @private
   * @type Element
   */
  var pointer = document.createElement(&#39;div&#39;);
  if (!pointer) {
    return false;
  }
  pointer.id = &#39;mousekeysPointer&#39;;
  pointer.style.display = &#39;none&#39;;
  canvas.parentNode.appendChild(pointer);

  function pointerMousemove (ev) { ... };
  function dispatch (type, ev) { ... };

  this.keydown = function (ev) { ... };
  this.keypress = function (ev) { ... };
  this.actionRemove = function () { ... };

  canvas.addEventListener(&#39;mousemove&#39;, pointerMousemove, false);
};</code></pre>

    <p>The <code>PaintMouseKeys</code> class object holds the main methods: 
    <code>keydown()</code>, <code>keypress()</code> and 
    <code>actionRemove()</code>. The two private variables, <code>speed</code> and 
    <code>accel</code>, hold information about the speed and the acceleration of 
    the mouse pointer. The longer the user holds down a key, the faster the 
    pointer will move. While a key is being held down the <code>speed</code> value 
    increases based on the <code>accel</code> value.</p>

    <p>The <code>pointer</code> DOM element is added in the parent node of the 
    <code>&lt;canvas&gt;</code> element because it is needed for providing the 
    user with a visual indicator of where the pointer is moving. Since this 
    script cannot move the real mouse pointer, which might not even exist, we 
    need our own virtual pointer. The <code>pointerMousemove()</code> updates the 
    position of the <code>pointer</code> element when the mouse moves:</p>

<pre><code>/**
 * Track the virtual pointer coordinates, by updating the position of the 
 * <code>pointer</code> element. This allows the keyboard users to see where 
 * they moved the virtual pointer.
 *
 * @param {Event} ev The DOM Event object.
 */
function pointerMousemove (ev) {
  if (typeof ev.x_ == &#39;undefined&#39; || !ev.kobj_ || !ev.kobj_.action || ev.kobj_.action != &#39;mousekeys&#39;) {
    if (pointer.style.display == &#39;block&#39;) {
      pointer.style.display = &#39;none&#39;;
    }
    return;
  }

  pointer.style.top  = ev.y_ + &#39;px&#39;;
  pointer.style.left = ev.x_ + &#39;px&#39;;
};</code></pre>

    <p>The function above will only update the pointer location if the 
    <code>mousemove</code> event contains the <code>x_</code> and <code>y_</code> 
    coordinates, and only if the event was generated by the <code>mousekeys</code> action.  
    If the event is not a synthetic one, the <code>pointer</code> element is 
    hidden.  We only want it visible when the keyboard is used.</p>

    <p>You need to decide how you want the users to interact with the drawing 
    canvas using their keyboard. I decided for this demo to use the number keys.  
    Therefore, key <kbd>2</kbd> should move the cursor to the south (towards the 
    bottom of the image), key <kbd>4</kbd> to the west (left), key <kbd>6</kbd> 
    to the east (right), and key <kbd>8</kbd> should move the pointer towards 
    the north (top of the image). The rest of the keys, <kbd>1</kbd>, 
    <kbd>3</kbd>, <kbd>7</kbd> and <kbd>9</kbd>, should move the pointer in 
    diagonal directions (eg <kbd>1</kbd> for south-west). If the user also holds 
    down the <kbd>Shift</kbd> key in addition to a direction, the mouse pointer 
    moves faster.</p>

    <p>Having defined what we want for the pointer movement (the 
    <code>mousemove</code> event) we need a key to generate the
    <code>mousedown</code> and the <code>mouseup</code> events. For this demo, 
    when the user presses the <kbd>0</kbd> key the synthetic 
    <code>mousedown</code> event is dispatched. Pressing it again would generate 
    the <code>mouseup</code> event. As such, this key allows the user to toggle 
    the &quot;mouse is down&quot; state to true or false, by alternating the two events.  
    When the mouse is down, any <code>mousemove</code> event will perform the 
    drawing operation associated with the active tool. The drawing tools do not 
    need any code change since the mouse events are all fired synthetically.</p>

    <h3 id="configurationfileupdate">Configuration file update</h3>

    <p>Another important technical point is that we do not want to modify the 
    script when we change the keyboard shortcuts. Here is the 
    modification for the <code>PainterConfig</code> object:</p>

<pre><code>var PainterConfig = {
  /**
   * The mouse keys movement acceleration.
   *
   * @type Number
   * @see PaintMouseKeys The MouseKeys extension.
   */
  mousekeys_accel: 0.1,

  /**
   * Keyboard shortcuts associated to drawing tools and other actions.
   *
   * @type Object
   * @see PaintTools The object holding all the drawing tools.
   */
  keys: {
    0: { action: &#39;mousekeys&#39;, param: &#39;Toggle&#39; },
    1: { action: &#39;mousekeys&#39;, param: &#39;SouthWest&#39; },
    2: { action: &#39;mousekeys&#39;, param: &#39;South&#39; },
    3: { action: &#39;mousekeys&#39;, param: &#39;SouthEast&#39; },
    4: { action: &#39;mousekeys&#39;, param: &#39;West&#39; },
    6: { action: &#39;mousekeys&#39;, param: &#39;East&#39; },
    7: { action: &#39;mousekeys&#39;, param: &#39;NorthWest&#39; },
    8: { action: &#39;mousekeys&#39;, param: &#39;North&#39; },
    9: { action: &#39;mousekeys&#39;, param: &#39;NorthEast&#39; },
    L: { tool: &#39;line&#39; },
    P: { tool: &#39;pencil&#39; },
    R: { tool: &#39;rect&#39; }
  }
};</code></pre>

    <p>We have added the virtual pointer acceleration we want, and the new 
    keyboard shortcuts for the <code>mousekeys</code> action. The <code>param</code> property 
    specifies the action what to do. This is where adding the <code>kobj_</code> 
    property to the DOM Event object in the <code>ev_keyhandler()</code> becomes 
    useful.  The <code>keydown()</code> and <code>keypress()</code> methods from 
    the mouse keys implementation can use the <code>param</code> property to 
    determine the mouse movement direction associated to the keyboard shortcut.  
    As such, we do not include any of the keyboard shortcuts at all in the 
    implementation, only in the configuration file.</p>

    <p>When the <kbd>Shift</kbd> key is held down, the system generates 
    different keys for the numbers on the number pad. We need to take them into 
    consideration in the keyboard shortcuts configuration:</p>

<pre><code>lib.extend(PainterConfig.keys, {
  &#39;Shift Insert&#39;:   PainterConfig.keys[&#39;0&#39;],
  &#39;Shift End&#39;:      PainterConfig.keys[&#39;1&#39;],
  &#39;Shift Down&#39;:     PainterConfig.keys[&#39;2&#39;],
  &#39;Shift PageDown&#39;: PainterConfig.keys[&#39;3&#39;],
  &#39;Shift Left&#39;:     PainterConfig.keys[&#39;4&#39;],
  &#39;Shift Right&#39;:    PainterConfig.keys[&#39;6&#39;],
  &#39;Shift Home&#39;:     PainterConfig.keys[&#39;7&#39;],
  &#39;Shift Up&#39;:       PainterConfig.keys[&#39;8&#39;],
  &#39;Shift PageUp&#39;:   PainterConfig.keys[&#39;9&#39;]
});</code></pre>

    <p>We use the <code>extend()</code> function to add the new keys, as 
    duplicates of the numbers. With this we have completed the update needed for 
    <a href="config4.js">the configuration file</a>.</p>

    <h3 id="theeventhandlers">The event handlers</h3>

    <p>Now we will continue with the MouseKeys action implementation. Here is 
    the code for the <code>keydown()</code> event handler:</p>

<pre><code>this.keydown = function (ev) {
  speed = 1;
  accel = PainterConfig.mousekeys_accel;

  if (pointer.style.display == &#39;none&#39;) {
    pointer.style.display = &#39;block&#39;;
    pointer.style.top  = mouse.y + &#39;px&#39;;
    pointer.style.left = mouse.x + &#39;px&#39;;
  }

  if (!ev || !ev.kobj_ || ev.kobj_.param != &#39;Toggle&#39;) {
    return false;
  }

  var type = mouse.buttonDown ? &#39;mouseup&#39; : &#39;mousedown&#39;;
  dispatch(type, ev);

  return true;
};</code></pre>

    <p>The <code>keydown()</code> method always resets the speed and the mouse 
    acceleration to the default values. This ensures that the speed gained from 
    the previous key press is not reused in another key press for mouse 
    movement.  Otherwise, the mouse movement would become too fast quite 
    quickly.</p>

    <p>The <code>pointer</code> element is always made visible, such that the user 
    can see where the virtual pointer is located when he/she starts using the 
    keyboard for drawing.</p>

    <p>The <code>kobj_</code> property object is used to determine which action 
    needs to be performed. If the keyboard shortcut object holds the 
    <code>param</code> property with the value <code>Toggle</code>, we perform the 
    action of the key <code>0</code>, as discussed above. We dispatch 
    a <code>mouseup</code> event if the mouse button is down, otherwise we 
    dispatch the <code>mousedown</code> event. The <code>mouse.buttonDown</code> 
    boolean property is the one being updated by the <code>ev_canvas()</code> 
    function as previously described.</p>

    <p>The implementation for the rest of the number keys used for dispatching 
    synthetic <code>mousemove</code> events is held in the 
    <code>keypress()</code> event handler in the <code>mousekeys</code> action:</p>

<pre><code>this.keypress = function (ev) {
  if (!ev || !ev.kobj_ || !ev.kobj_.param) {
    return false;
  }

  if (ev.shiftKey) {
    speed += speed * accel * 3;
  } else {
    speed += speed * accel;
  }

  var w = canvas.width,
      h = canvas.height,
      x = mouse.x,
      y = mouse.y,
      step = Math.ceil(speed);

  switch (ev.kobj_.param) {
    case &#39;SouthWest&#39;:
      x -= step;
      y += step;
      break;
    case &#39;South&#39;:
      y += step;
      break;
    case &#39;SouthEast&#39;:
      x += step;
      y += step;
      break;
    case &#39;West&#39;:
      x -= step;
      break;
    case &#39;East&#39;:
      x += step;
      break;
    case &#39;NorthWest&#39;:
      x -= step;
      y -= step;
      break;
    case &#39;North&#39;:
      y -= step;
      break;
    case &#39;NorthEast&#39;:
      x += step;
      y -= step;
      break;
    default:
      return false;
  }

  if (x &lt; 0) {
    x = 0;
  } else if (x &gt; w) {
    x = w;
  }

  if (y &lt; 0) {
    y = 0;
  } else if (y &gt; h) {
    y = h;
  }

  mouse.x = x;
  mouse.y = y;

  dispatch(&#39;mousemove&#39;, ev);

  return true;
};</code></pre>

    <p>The implementation for the movement keys has been put in the 
    <code>keypress()</code> event handler because this event is always repeated 
    while the user holds down a key. The <code>keydown</code> event is 
    dispatched only once.</p>

    <p>The code is rather simple: increase the movement speed based on the 
    acceleration (with a variation if the <kbd>Shift</kbd> key is down), and 
    update the mouse coordinates based on the <code>param</code> property of the 
    keyboard shortcut object. At the end, the synthetic <code>mousemove</code> 
    event is dispatched. The mouse coordinates are those automatically updated 
    by the <code>ev_canvas()</code> function.</p>

    <p>Here is the code that performs the actual synthetic event 
    dispatching:</p>

<pre><code>function dispatch (type, ev) {
  var ev_new = document.createEvent(&#39;MouseEvents&#39;);

  ev_new.initMouseEvent(type,
      ev.bubbles,  ev.cancelable,
      ev.view,     0,
      0,           0,
      0,           0,
      ev.ctrlKey,  ev.altKey,
      ev.shiftKey, ev.metaKey,
      0,           ev.relatedTarget);

  // Make sure the new coordinates are passed to the event handlers.
  ev_new.x_ = mouse.x;
  ev_new.y_ = mouse.y;

  // Make sure the event handlers can check this is a synthetic event.
  // This is needed by the pointerMousemove() function.
  ev_new.keyCode_  = ev.keyCode_;
  ev_new.key_      = ev.key_;
  ev_new.kid_      = ev.kid_;
  ev_new.kobj_     = ev.kobj_;

  canvas.dispatchEvent(ev_new);
};</code></pre>

    <p>This function creates a new mouse event of the given <code>type</code>. The 
    new mouse event will share several properties (eg the active key modifiers) 
    with the current keyboard event. Several new properties are added: the new 
    mouse coordinates and the keyboard-related properties. The new event is 
    dispatched to the buffer <code>&lt;canvas&gt;</code> element.</p>

    <p>When the real mouse is used, typically the following execution chain is 
    activated:
    
    <ol>
    <li>The mouse event is fired by the browser and the 
    <code>ev_canvas()</code> event handler is invoked, which determines the 
    mouse coordinates on the <code>&lt;canvas&gt;</code> element and updates the 
    <var>mouse</var> object to hold them and the button state</li>
    <li>The event 
    handler of the active tool is invoked to perform any drawing operations</li>
    </ol>

    <p>When the mouse keys are used, typically the following execution chain is 
    activated:</p>

    <ol>
      <li>The keyboard event is fired by the browser and handled by the 
      <code>KeyboardEventListener</code> class instance from the minimal 
      JavaScript library.</li>
      <li>That code invokes the <code>ev_keyhandler()</code> function from the 
      paint application, which in turn invokes the event handler within the 
      <code>mousekeys</code> action.</li>
      <li>The event handlers in the mouse keys implementation, as explained, also 
      dispatch a synthetic mouse event, which in turn is handled by the 
      <code>ev_canvas()</code> function and by the active tool.</li>
      <li>For synthetic <code>mousemove</code> events, the 
      <code>pointerMousemove()</code> function updates the location of the 
      <var>pointer</var> element.</li>
    </ol>

    <p>To wrap it all up, we include the <code>actionRemove()</code> method and 
    perform the actual addition of the action in the <var>Painter</var> 
    instance:</p>

<pre><code>function PaintMouseKeys (app) {
  // ...

  /**
   * Handles action removal. This will remove the pointer DOM element and the 
   * canvas event listener.
   */
  this.actionRemove = function () {
    canvas.parentNode.removeChild(pointer);
    canvas.removeEventListener(&#39;mousemove&#39;, pointerMousemove, false);
  };
};

window.addEventListener(&#39;load&#39;, function () {
  // Add the MouseKeys action to the Painter instance.
  if (window.PainterInstance) {
    PainterInstance.actionAdd(&#39;mousekeys&#39;, PaintMouseKeys);
  }
}, false);</code></pre>

    <p>That&#39;s all! Go ahead and test the updated 
      application inside the <code>app4</code> folder - and the documentation, found in <code>app4/doc/</code> - in the <a href="canvas-paint-keyboard-tutorial.zip">code download</a>.</p>

    <h2 id="inthenextpart">In the next part</h2>

    <p>In the third and final part of the article we will look 
    into the cross-browser compatibility layer we use for dealing with the 
    browser differences in the DOM keyboard events handling.</p>

    <p>If you want to learn more, stick around at <a href="http://dev.opera.com">DevOpera</a> and also follow the upcoming 
    major changes to <a href="http://code.google.com/p/paintweb">PaintWeb</a> - the open-source web application this article is based on.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/keyboard-accessible-web-applications-1/" rel="start" title="link to the first article in the series">Previous article — Keyboard accessibility in web applications: part 1</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/keyboard-accessible-web-applications-3/" rel="next" title="link to the next article in the series">Next article — Keyboard accessibility in web applications: part 3</a></li>
</ul>  
   </p>
