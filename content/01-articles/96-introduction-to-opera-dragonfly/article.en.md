Title: Introduction to Opera Dragonfly
----
Date: 2008-05-06 16:07:17
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

<p class="note">This article is <strong>deprecated</strong>; instead, consult our <a href="http://www.opera.com/dragonfly/documentation/">Opera Dragonfly Field Guide</a> for up-to-date information.</p>

<h2>Introduction</h2>

<p>Now reaching a mature stage of development, Opera Dragonfly is Opera&#39;s comprehensive set of developer tools, designed to give developers a lightweight-but-powerful application that provides effective mechanisms for web standards debugging and problem solving without slowing down the browser, and fits in nicely with the development workflow. The current feature set includes:</p>

<ul>
<li>JavaScript debugger</li>
<li>DOM inspector</li>
<li>CSS inspector</li>
<li>Command Line to allow commands to be inputed</li>
<li>Error Console that outputs validation errors and warnings exhibited by the CSS and JavaScript connected with the page</li>
<li>Proxy to allow debugging directly on mobile devices</li>
<li>Network analyzer</li>
<li>Cookie and local storage viewer</li>
<li>Colour picker</li>
</ul>

<p>The current release version is an alpha, so it is currently a little rough round the edges; also we decided to implement all the most critical features first, and go from there - we have big plans afoot for our developer tools and you can expect to see a lot of fantastic additions in coming months. It is going to be released under an open source BSD licence.</p>

<p>This articles structure is as follows:</p>

<ul>

<li><a href="#installingdragonfly">How to access Dragonfly</a></li>
<li><a href="#UIoverview">An overview of the UI</a></li>
<li><a href="#basictasks">How to perform basic tasks</a>
<ul>
<li><a href="#script">The Script tab</a>
<ul>
<li><a href="#callstack">The Call Stack panel</a></li>
<li><a href="#threadlog">The Thread Log panel</a></li>
<li><a href="#frameinspection">The Frame Inspection panel</a></li>
<li><a href="#commandline">The Command Line</a></li>
</ul>
</li>
<li><a href="#dom">The DOM tab</a></li>
<li><a href="#stylesheetstab">The Stylesheets tab</a>
<ul>
<li><a href="#stylestab">The Styles tab</a></li>
<li><a href="#domattributestab">The Properties tab</a></li>
<li><a href="#layouttab">The Layout tab</a></li>
</ul>

</li>

<li><a href="#console">The Error Console tab</a></li>

</ul>
</li>
<li><a href="#summary">Summary</a></li>
</ul>

<p><strong>Note</strong>: Opera Dragonfly is not to be confused with the original  
Opera developer tools (available at <a href="http://dev.opera.com/articles/view/opera-developer-tools/">http://dev.opera.com/articles/view/opera-developer-tools/</a> 
 ) - these tools served us well, but are now being superseded by  
Opera Dragonfly.
</p>

<h2 id="installingdragonfly">How to access Dragonfly</h2>

<p>Dragonfly is built into the Opera desktop browser and there are four ways to launch it:<p>

<ul>
  <li>From Opera&#39;s red menu button, select Page &gt; Developer tools &gt; Opera Dragonfly.</li>
  <li>If you have a menu bar, from the Tools menu select Advanced &gt; Opera Dragonfly (see Figure 1).</li>
  <li>Right-click on any element in a web page and select Inspect Element from the context menu.</li>
  <li>Press Ctrl+Shift+i on your keyboard.</li>
</ul>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/open_menu-bar.png" width="454" height="486" alt="The menu option to start the Dragonfly client" />
<p class="comment">Figure 1: Starting up the Dragonfly client from the menu bar.</p>

<p>Note: There might be an occasion where you&#39;ll want to revert to a different version of the Dragonfly client for whatever reason. If you want to do this, go to the <a href="opera:config">Opera config page</a>, find the Developer Tools section, and make sure it looks like Figure 2. The URL in the Developer Tools URL field points to the Dragonfly client - this needs to be populated with the URL of the client you want to switch to.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/configscreen.gif" alt="The Developer Tools configuration settings" />
<p class="comment">Figure 2: The opera:config Developer Tools configuration section.</p>

<p>Once you&#39;ve made the change and clicked save, you&#39;ll need to restart Opera for the changes to take effect.</p>

<h2 id="UIoverview">An overview of the UI</h2>

<p>The Dragonfly client looks like Figure 3 by default. Let&#39;s explore it now.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-layout.png" width="578" height="579" alt="The Dragonfly UI" />
<p class="comment">Figure 3: The default Dragonfly UI.</p>

<p>The different areas are as follows:</p>

<ol>
  <li>The Script, DOM and Console tabs: These are the main functionality selectors in the UI, which allow you to check out different facets of the web sites loaded into the Opera browser.</li>
  <li>The site/widget selector: This shows which site or widget is currently loaded and active in Dragonfly. The drop down menu displays the sites and widgets currently available and when you select one, it becomes the active site/widget in Dragonfly.</li>
  <li>Context sensitive tools: Different tools are shown in these areas, depending on which main tab is selected. We&#39;ll look at all the different options in detail later on.</li>
  <li>Search boxes/Quick find: Using these, you can search for different terms inside the various panes.</li>
  <li>The main information window: This shows the full contents of the different scripts, CSS files, etc. you can select from the site information window &#x2014; the contents will differ depending on which main tab is currently active. Again, we&#39;ll look at the different contents later on.</li>
  <li>The command line: This allows you to enter JavaScript commands to be evaluated by Opera Dragonfly.</li>
  <li>Information panels: These panels vary depending on which main tab is selected &#x2014; they display different information about the scripts, styles, etc. that you are currently examining. Again, we&#39;ll look at these further later on in the article.</li>
  <li>This indicator shows the status of the web sites being debugged and the debugger, showing what is active at any one time.</li>
</ol>

<p>Now that you&#39;re familiar with the basics of Dragonfly, let&#39;s look at what you can do in the different contexts available.</p>

<h2 id="basictasks">How to perform basic tasks</h2>

<p>Let&#39;s start by loading up a few web sites in the version of Opera that Dragonfly is active inside &#x2014; feel free to open up any sites that you are interested in examining. My browser window currently looks like Figure 5.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/browser-screenshot.png" width="630" height="456" alt="Some web sites opened up in Opera" />
<p class="comment">Figure 5: Some of my favourite web sites open in the Opera desktop browser.</p>

<p>When you open the sites, they will appear in the drop-down menu inside the Dragonfly UI, as shown in Figure 6.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-site-selector.png" width="578" height="115" alt="The web sites appear in the Dragonfly site/widget selector drop-down menu." />
<p class="comment">Figure 6: The web sites appear in the Dragonfly site/widget selector drop-down menu.</p>

<h3 id="script">The Script tab</h3>

<p>Making sure that the Script tab is selected, select one of ther sites in the drop down menu, and click on one of the black information lines that appear along with the site URL in the site information window. You&#39;ll see the display update as shown in Figure 7. Here I&#39;ve selected an experiment from one of my colleague&#39;s web sites, but you can choose any example you like.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-script-tab.png" width="776" height="647" alt="Examining a JavaScript file in Dragonfly" />
<p class="comment">Figure 7: Examining a JavaScript file in Dragonfly.</p>

<p>You can set a breakpoint by clicking on the line numbers - see Figure 8 for examples.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/breakpoints.gif" alt="setting breakpoints in the javascript" />
<p class="comment">Figure 8: Setting breakpoints in the JavaScript.</p>

<p>When you set a breakpoint and then run the script (ie by doing something that causes the part of the script you&#39;ve set a breakpoint on to run, such as click a button), the script will stop executing at the breakpoint, and you can then inspect what the environment looks like in that instant, ie what values the different variables have and so on. See Figure 9 for the result of me clicking a button that executed the <code>playSong()</code> function - the arrow shows the breakpoint that the code stopped at.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/activebreakpoint.gif" alt="The breakpoint that the script paused at." />
<p class="comment">Figure 9: the arrow shows the break point that the script execution paused at.</p>

<p>Notice the HTML DOM &quot;breadcrumb trail&quot; at the bottom of the window, which indicates where in the DOM Tree the item being examined is at. This appears in all the views. There is also a button in the top left of this tab called &quot;Reload selected window in the host&quot; - this, predictably, reloads the currently selected web page in the browser, to refresh it to its initial state.</p>  

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/jsbuttons.gif" alt="The JavaScript buttons" />
<p class="comment">Figure 10: The main button controls in the Script view.</p>

<p>The main buttons (see Figure 10) provide the following functions, from left to right:</p>

<ul>
<li>Continue (F8): This continues the currently selected script after it has stopped at a breakpoint.</li>
<li>Step into (F11): This allows you to step into the next function in the stack, after the current function the breakpoint is contained within.</li>
<li>Step over (F10): This allows you to step to the next line after the one the breakpoint is set on - you can use this multiple times to follow the execution path of the script.</li>
<li>Step out (Shift + F11): This causes you to step out of the function.</li>
<li>Stop at new thread: This is an on/off toggle that selects whether the script will stop at the next new thread when run.</li>
<li>Stop at error: This is an on/off toggle that selects whether the script will stop at the next error when run.</li>
<li>Log threads: This is an on/off toggle that selects whether the threads will be logged in the threads panel (see top right hand corner.)</li>
</ul>

<h4 id="callstack">The Call Stack panel</h4>

<p>The Callstack shows the nature of the runtime environment at the time of a specific function call - whathas been called, and in what order. For example, function A calls B, which calls C. First C returns, then B, then A. Each function call will typically change something in the environment, for example changing the value of a variable. Figure 11 shows an example of how the callstack looks after I&#39;ve executed up to my first breakpoint, then stepped into the next function call in the stack.</p>


<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/callstack.gif" alt="the callstack panel" />
<p class="comment">Figure 11: The Call Stack panel, showing the different function calls that make up the call stack.</p>

<p>You can now click on the different calls in the stack to move the identifying arrow in the script window to the position of that call. Try it!</p>

<h4 id="threadlog">The Thread Log panel</h4>

<p>The Thread Log panel records details of the different threads running through the script you are currently examining, provided you have the Log threads button pressed in (see above). Figure 12 shows an example from the Thread Log window after I&#39;ve run my example code.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/threads.gif" alt="the thread log panel in action" />
<p class="comment">Figure 12: The Thread Log panel in action.</p>

<p>There are two buttons in the Thread Log panel, as follows:

<ul>
<li>Clear thread log: This does what its name suggests.</li>
<li>Export thread log: This exports the current thread log to a plain text document in a new browser window.</li>
</ul>

<h4 id="frameinspection">The Frame Inspection panel</h4>

<p>The Frame Inspection panel lists all of the property values etc for the current call stack, as shown in Figure 13 - frames are specific parts of the call stack. You can change frames by selecting a call in the Call Stack panel.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/frameinspection.gif" alt="the frame inspection panel" />
<p class="comment">Figure 13: The Frame Inspection panel, showing all the current property values etc for the currently selected call in the stack.</p>

<p>The button in the top left hand corner of the Frame Inspection panel is the &quot;Hide default properties in global scope&quot; button, which does as its name suggests. Try it out.</p>


<h4 id="commandline">The Command Line</h4>

<p>The command line panel allows you to input and execute JavaScript commands, to find information and perform tests on the JavaScript code you are currently examining. For example, try entering some simple commands such as:</p>

<pre>var a = 1;
var b = 2;
var c = a + b;</pre>

<pre>document.getElementsByTagName(&#39;div&#39;);</pre>

</p>


<h3 id="dom">The DOM tab</h3>

<p>Now try selecting the DOM tab and selecting a web site. The display will change to show the DOM of the selected site in a typical expandable/collapsible view, plus Styles, DOM Properties and Layout tabs on the right hand side, which I&#39;ll cover later on (see Figure 14). If you change the tab selection in the second set of tabs down from DOM to Stylesheets, the display in the site information window will change to show what CSS is attached to each web page, and how. Let&#39;s keep it on DOM for now.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-dom-tab.png" width="776" height="627" alt="examining the DOM of a site in Dragonfly." />
<p class="comment">Figure 14: Examining the DOM of a site in Dragonfly.</p>

<p>Try playing with the DOM tree for a while, selecting different elements and seeing how this affects the display. Notice the green highlight that indicates the currently selected element.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dom-buttons.png" width="213" height="28" alt="The DOM buttons" />
<p class="comment">Figure 15: The main button controls in the DOM view.</p>

<p>The main buttons (see Figure 15) in the DOM view provide the following functions, from left to right:</p>

<ul>
  <li>Expand the DOM tree: Clicking this button expands the whole DOM tree.</li>
  <li>Export current DOM view: Click on this to open up a new tab - Export - which contains the absolute current DOM view, ie collapsed nodes are not shown at all.</li>
  <li>Find element by clicking: When you have this button pushed in, you can click anywhere on the page to select different elements in the DOM inspector.</li>
  <li>Highlight by mouse hover: When this button is pressed in, you will get an outline highlighting the currently selected element in the DOM inspector when it is hovered over with the mouse.</li>
  <li>Update DOM when a node is removed: Only when this button is pressed in, will you see the results of running a JavaScript command to select a node and remove it from the DOM programmatically, for example if you run something like <code>div.parentNode.removeChild(div);</code> on the Dragonfly command line.</li>
  <li>Draw a border on to selected elements</li>
  <li>Show comment nodes: Push this in/out to show/hide HTML and CSS comments.</li>
  <li>Show whitespace nodes: Push this in/out to show/hide whitespace nodes.</li>
  <li>Show DOM in tree view: When this is pushed in, it shows &quot;tree branches&quot; connecting the different nodes, to give a better idea of the DOM tree hierarchy. Which view style you use is down to personal preference.</li>
</ul>

<h3 id="stylesheetstab">The Stylesheets tab</h3>

<p>Now let&#39;s try clicking on the Stylesheets tab. This will bring up information on the different stylesheets associated with the web sites or widgets you have loaded. Selecting different stylesheets will change the view to show the contents of the different stylesheets in the bottom Stylesheet tab, as seen in Figure 16.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-stylesheet-tab.png" width="528" height="542" alt="Examining stylesheets" />
<p class="comment">Figure 16: Examining stylesheets in Dragonfly.</p>

<p>There is a single button at the top left of the Stylesheets tab, &quot;use shortcuts for properties&quot;, which toggles between seeing all CSS properties as expanded longhand, and just seeing the single-line shorthand values (where appropriate.)</p>

<p>Now we&#39;ve looked at what is going on in the left hand side of the screen, let&#39;s turn our attention to the right.</p>

<h4 id="stylestab">The Styles tab</h4>

<p>The Styles tab contains two sections, Computed Style and Styles, as seen in Figure 17.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-styles-tab.png" width="328" height="740" alt="the styles tab" />
<p class="comment">Figure 16: The two sections of the Styles tab - Computed style and Styles.</p>

<p>The Styles section shows all the CSS that is acting on the currently selected DOM node, and the Computed style section shows the actual computed style values that are in effect on the currently selected on DOM node. As you&#39;ll see form Figure 17, it rather usefully splits the styles up to show what styles are directly applied to the DOM node, and what stryles are inherited from parent nodes.</p>

<p>This tab has two buttons in its top left hand corner, as seen in Figure 18 - they are, from left to right:</p>

<ul>
<li>Hide initial values in computed styles: This does as expected - pushing it in or out hides/shows initial values in computed styles.</li>
<li>Hide shorthands in computed styles: As expected, pushing it in or out hides/shows shorthand values in computed styles.</li>
</ul>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/stylesbuttons.gif" alt="The hide empty strings and null values button" />
<p class="comment">Figure 18: The Styles tab buttons.</p>

<h4 id="domattributestab">The Properties tab</h4>

<p>This tab shows all the attributes of the DOM object for the selected element. Note that these are different from the HTML attributes on the selected element - if you select an <code>img</code> element for example, you will get the full URL of the source they point for the <code>src</code> DOM attribute. See Figure 19 for an example.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-properties-tab.png" width="283" height="492" alt="The Properties tab" />
<p class="comment">Figure 19: The Properties tab.</p>

<p>This tab has one button in its top left hand corner, &quot;hide empty strings and null values&quot;, which does what it says on the tin &#x2014; pushing it in and out hides/shows empty strings and null values. </p>


<h4 id="layouttab">The Layout tab</h4>

<p>This rather useful tab shows a visual representation of the box model as it looks for the currently selected DOM node, along with a breadcrumb trail showing the node in relation to its parent and child nodes, and a list of the offset values, as shown in Figure 20.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-layout-tab.png" width="325" height="630" alt="The layout tab" />
<p class="comment">Figure 20: The layout tab.</p>

<h3 id="console">Error Console</h3>

<p>Finally, click on the Error Console tab - this will result in the display changing to show CSS and JavaScript validation errors and warnings, as shown in Figure 21.</p>  

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/dragonfly-error-console.png" width="" height="667" alt="The error console view shows CSS and JavaScript warnings" />
<p class="comment">Figure 21: The error console view shows CSS and JavaScript warnings and errors.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/96-introduction-to-opera-dragonfly/console-buttons.png" width="67" height="28" alt="The error console buttons" />
<p class="comment">Figure 22: The main button controls in the error console view.</p>

<p>The buttons in the error console view (see Figure 22) do the following, from left to right:</p>

<ul>
<li>Clear log: This clears the current contents of the error console tab.</li>
<li>Use selected runtime as filter: This shows the error console output for just the selected runtime, as opposed to all runtimes.</li>
</ul>

<h2 id="summary">Summary</h2>

<p>In this article we&#39;ve covered the basics of Dragonfly including how to install it, and given you a guided tour of the basics. To find out more, explore the <a href="http://www.opera.com/dragonfly/" alt="the Dragonfly homepage">Dragonfly website</a>, and ask questions and let us know what you think at <a href="http://dev.opera.com/forums/forum/11057" alt="The Dragonfly support forums">the Dragonfly forums</a>.</p></p></p>
