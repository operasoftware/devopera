Title: WCL developer guide
----
Date: 2008-08-21 11:16:21
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Widgets will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<h3>Contents</h3>

<ol class="toc">
    <li><a href="#Introduction">Introduction</a></li>
    <li><a href="#BasicConcepts">Creating a widget with WCL</a></li>
    <li><a href="#SwitchingSkins">Switching skins</a></li>       
    <li><a href="#ApiMethods">WCL API methods and events</a></li>
    <li><a href="#AddingContent">Adding more content</a></li>
    <li><a href="#WorkChrome">Working with chrome</a></li>       
    <li><a href="#WCLEvents">Managing WCL button events</a></li>        
    <li><a href="#WCLResize">Resizing the widget using WCL</a></li>
</ol>

<a name="Introduction" id="Introduction"></a>
<h3>Introduction</h3>            
<p>
    Opera provides a library for the simple creation of chrome for widgets.
    This library makes it relatively painless to reuse code for widgets
    of different resolutions, defining different styles for each. The
    example widgets work identically on both portrait and landscape modes
    on a mobile device and on a desktop computer. The only difference is the
    style sheet that is applied. The library also manages resizing of
    widgets, so authors do not have to implement this themselves in every
    widget. On mobile devices it’s best to <a href="http://dev.opera.com/articles/view/cross-device-development-techniques-for/#layoutfullscreen">enable  full-screen 
    mode</a> to take full advantage of the available screen.
</p>

<a name="BasicConcepts" id="BasicConcepts"></a>
<h3>Creating a widget with the WCL</h3>
<p>
    A bare bones widget that uses WCL could look like this:
</p>
<pre class="examplecode"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Hello World&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;scripts/chrome.js&quot;&gt;&lt;/script&gt;
    &lt;link href=&quot;basic.skin/skin.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; /&gt;
&lt;/head&gt;
&lt;body&gt;
    This is the content body
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>
    The basic skin and the chrome.js files are provided by Opera. Developers
    are free to modify them as needed and to add more skins.
</p>
<p>
    When the widget starts, the chrome.js file creates the extra markup
    needed for the chrome. The chrome consists of a top bar, bottom bar, event handlers
    for resizing and buttons for config and close. The above code would
    produce this screenshot with the default skin:</p>

<p><img src="/articles/view/wcl-developer-guide/hello_world.png" alt="Screenshot of Hello World example" /></p>


<a name="SwitchingSkins" id="SwitchingSkins"></a>
<h3>Switching skins</h3>
<p>
    You can have as many skins as you like for any WCL widget by  adding  elements for external style sheets
    with the type “alternate stylesheet” and a title. Alternate style sheets
    are not automatically applied when the page loads. A simple example
    could look like this:
</p>

<pre class="examplecode"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Hello World&lt;/title&gt;
    &lt;script type=&quot;text/javascript&quot; src=&quot;scripts/chrome.js&quot;&gt;&lt;/script&gt;
    &lt;link title=&quot;basicskin&quot; href=&quot;basic.skin/skin.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; /&gt;
    &lt;link title=&quot;fancyskin&quot; href=&quot;fancy.skin/skin.css&quot; rel=&quot;alternate stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; /&gt;
    &lt;script&gt;
        window.onload = function() {
            // check the size of the viewport and switch skin if
            // it is big enough
            if (window.innerWidth&gt;340) {
                // disable current stylesheet
                WidgetChrome.disableStylesheet(&quot;basicskin&quot;);

                // enable the fancy skin
                WidgetChrome.enableStyleSheet(&quot;fancyskin&quot;);
            }
        }
    &lt;/script&gt;

&lt;/head&gt;
&lt;body&gt;
    This is the content body
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    <p>We disable the <em>basicskin</em> so that all styles specified in that skin are removed and then we apply the <em>fancyskin</em>. </p>

<a name="ApiMethods" id="ApiMethods"></a>
<h3>WCL API methods and events</h3>

<p>The WCL API is available at <a href="/libraries/chrome/docs/WidgetChrome.dml">http://dev.opera.com/libraries/chrome/docs/WidgetChrome.dml/</a>.</p>

<a name="AddingContent" id="AddingContent"></a>
<h3>Adding more content</h3>
<p>When you add WCL to your widget, it takes all the content from the body and places it inside the chrome. When you want to add or remove content from the
elements, there are no special rules that you need to follow. As long as you are using IDs to get the elements, you can add and remove elements as you would 
normally do without using WCL. For example, if there is a <strong>DIV</strong> with id <em>test</em> you can still use <code>document.getElementById(&quot;test&quot;)</code> 
 as  normal.</p>
<p>There are times when you want an element to use all the available area inside the widget. You can use the helper 
function <code>WidgetChrome.autoResize</code> to help you resize the element to occupy the complete section in the middle and to resize automatically as the widget 
is resized. </p>
<p>
<strong>Example</strong>: There is a <strong>DIV</strong> with the id <em>pnlConfig</em>. To make sure that it resizes and takes up all the available area
and resizes automatically, we use the helper function <code>WidgetChrome.autoResize(<strong>&quot;pnlConfig&quot;</strong>);</code> in the onload event.</p>

<a name="WorkChrome" id="WorkChrome"></a>
<h3>Working with chrome</h3>
<p>There are times when you want to customize elements in the chrome. </p>
<p>Lets start with elements that you don’t want to add. Add the attribute <code>data-not-chrome-content=&quot;true&quot;</code> to those elements. The elements with 
this attribute will not be added inside the widget chrome.</p>

<h4>Example</h4>
<pre><code>&lt;div data-not-chrome-content=&quot;true&quot;&gt; &lt;/div&gt; </code></pre>
<p>To add extra elements to the chrome, such as  another button, use the 
API <code>WidgetChrome.addElementToChrome</code>. </p>

<h4>HTML example</h4>
<p><code>&lt;button id=&quot;btnMinimise&quot; data-not-chrome-content=&quot;true&quot;&gt;Minimise&lt;/button&gt;</code></p>
<h4>JavaScript example</h4>
<p><code>WidgetChrome.addElementToChrome(&quot;btnMinimise&quot;);</code></p>


<p>
  We make sure that the element is not added inside the chrome by setting <code>data-not-chrome-content=&quot;true&quot;</code>. On the onload event, we call the function to add the button to the
chrome. Once you put the button into the chrome, you must still  position it with CSS.
</p>

<a name="WCLEvents" id="WCLEvents"></a>
<h3>Managing WCL button events</h3>
<p> There is only one event <code>WidgetChrome.ButtonConfig.onclick</code> that you need to handle if you use WidgetChrome. If you want to handle the 
event when a user clicks the close button, you need to load the function <code>WidgetChrome.ButtonClose.onclick</code>.</p>
    
<pre>WidgetChrome.ButtonConfig.onclick = function(event)
{
    //Do something when the config button clicked.
}

WidgetChrome.ButtonClose.onclick = function(event)
{
    //Do something when the close button is clicked.
}</pre>

<p>You can also use <strong>addEventListener</strong>. You can get the reference to the button elements and use addEventListener on them.     
<strong>WidgetChrome.ButtonConfig</strong> will give the reference to the config button, and <strong>WidgetChrome.ButtonClose</strong> 
will give the reference to the close button. </p>

<pre>WidgetChrome.ButtonClose.addEventListener(&quot;click&quot;, function() {
    window.close();    
}, false);</pre>

<p>If you don&#39;t need the config button, you can use the following methods to hide the button:</p>

<dl>
  <dt>Using <em>CSS</em></dt>
  <dd><code>#btnConfig { display: none; } </code></dd>
  <dt>Using <em>JavaScript</em></dt>
  <dd><code>WidgetChrome.ButtonConfig.style.display = &quot;none&quot;;</code></dd>
</dl>
 
<a name="WCLResize" id="WCLResize"></a>
<h3>Resizing the widget using WCL</h3>
<p> To resize a widget, call <strong>window.resizeTo</strong>&#8212; then, call <strong>WidgetChrome.redraw()</strong> so that 
the chrome is repainted.</p>
<p>If you want to make a widget fullscreen, you can use the helper function <strong>WidgetChrome.setFullScreen()</strong>.</p>    
<p>
    You can set the minimum height and width of the widget using <strong>WidgetChrome.minHeight</strong> and <strong>WidgetChrome.minWidth</strong>. 
    By default, the minimum width is 50px and height is set to 100px, so that a user doesn&#39;t  resize it and make the widget unusable.
</p>
none
