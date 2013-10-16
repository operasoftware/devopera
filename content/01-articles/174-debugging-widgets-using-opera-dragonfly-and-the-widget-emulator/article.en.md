Title: Debugging widgets using Opera Dragonfly and the Widget Emulator
----
Date: 2010-02-09 17:22:25
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
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>

<p>Table of contents:</p>

<ol>
<li><a href="#intro">Introduction</a></li>
<li><a href="#using_dragonfly">Using Opera Dragonfly</a></li>
<li><a href="#testing_widget">Testing a widget</a></li>
<li><a href="#testing_emulator">Testing a widget running inside the Widget Emulator</a></li>
<li><a href="#breakpoints">Setting breakpoints and stepping through the code</a></li>
<li><a href="#editing">Editing the animation, with help from Opera Dragonfly</a></li>
<li><a href="#summary">Summary</a></li>
</ol>

<h2 id="intro">Introduction</h2>

<p>This article describes how you can use <a href="http://www.opera.com/dragonfly/">Opera Dragonfly</a> and the <a href="http://dev.opera.com/articles/view/widget-emulator/">Opera Widget Emulator</a> to debug your widgets. Widgets are treated just like any other Web page in Dragonfly, and the scripts of the widget are therefore available for debugging. In addition, the <a href="http://dev.opera.com/articles/view/widget-emulator/">Widget Emulator</a> is itself a widget, so any code running inside it can also be debugged.</p>

<h2 id="using_dragonfly">Using Opera Dragonfly</h2>

<p>Opera Dragonfly is a lightweight developer toolkit, designed to work with a proxy interface. This allows developers to test their applications remotely from a desktop, while the application runs on another device.</p>

<p>To use Opera Dragonfly:</p>

<ul>
<li>Make sure you are running <a href="http://www.opera.com/">Opera 9.5</a> or later.</li>
<li>Load the tools by pressing Ctrl+Shift+I or from selecting Tools &gt; Advanced &gt; Developer tools from the Opera Menu.</li>
</ul>

<p>For detailed information about Opera’s debugging environment, see the following articles:</p>

<ul>
<li><a href="http://dev.opera.com/articles/view/introduction-to-opera-dragonfly/">Introduction to Opera Dragonfly</a></li>
<li><a href="http://dev.opera.com/articles/view/opera-dragonfly-architecture/">Opera Dragonfly Architecture</a></li>
</ul>

<h2 id="testing_widget">Testing a widget</h2>

<p><a href="emulator.zip">Our test widget</a> (the ‘animations’ widget) contains code that dynamically changes the layout for more suitable viewing when it is being used on a small screen device – instead of showing both columns at once, it only shows one column, and clicking on it switches the display to show the other column.</p>

<p>Opera Dragonfly contains a drop-down menu that lists the Web pages and widgets currently running in the host instance of Opera. Try loading the example widget in Opera then starting up Opera Dragonfly – when you select the widget from the drop down list, Opera Dragonfly shows that the widget has an index.html with one inline script and two linked scripts, as seen in Figure 1.</p>

<p class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/174-debugging-widgets-using-opera-dragonfly-and-the-widget-emulator/dragon_widget.png" title="Opera Dragonfly showing script infomration for our example Widget" alt="Opera Dragonfly showing script infomration for our example Widget" /><br />
Figure 1: Opera Dragonfly showing script information for our example Widget</p>

<p>As you are running the widget on the desktop browser, you will not see those changes. To test that functionality, you need to use the Widget Emulator and Opera Dragonfly together. The emulator will make the widget think it is running on a small screen device – hence you will see the dynamic animation between columns when you click the visible column – Opera Dragonfly will show the result of the emulated code.</p>

<h2 id="testing_emulator">Testing a widget running inside the Widget Emulator</h2>

<p>See the <a href="http://dev.opera.com/articles/view/widget-emulator/">emulator documentation</a> for information on how to run the emulator with your widget. To debug the emulated widget, run <a href="emulator.zip">the emulator with our example widget inside it</a> (the ‘animations’ widget) inside Opera and launch Opera Dragonfly.</p>

<p>Opera Dragonfly will provide a drop-down menu option for the Widget Emulator. Selecting that option will display two index.html files – one of them is the emulator itself, and the other is the widget you have running inside the emulator. It is possible to debug your widget in different modes using this mechanism. A common problem is that the JavaScript threads include emulator code, which may get confusing.</p>

<p>We are working on extending the Widget Emulator and Opera Dragonfly to integrate them together, allowing us to hide function calls to the emulator.</p>

<h2 id="breakpoints">Setting breakpoints and stepping through the code</h2>

<p>It is possible to set breakpoints in the code to step through running code. The <code>onload</code> event listener in the widget contains the following:</p>

<pre>
<code>if(screen.availWidth &lt; 600 || screen.availHeight &lt; 600)
{
    window.resizeTo(screen.availWidth, screen.availHeight);
}
if(screen.availWidth &lt; 400 || screen.availHeight &lt; 400)
{
    var columnOne = document.getElementById(&#39;columnOne&#39;);
    var columnTwo = document.getElementById(&#39;columnTwo&#39;);
    // ... animation setup code ...
}</code>
</pre>

<p>To start with, set breakpoints for our example widget at both the conditions in the event listener, and see what happens.</p>

<p>As can be seen in Figure 2, the second breakpoint has been reached and the variables <code>columnOne</code> and <code>columnTwo</code> have not been set. The thread is currently in the global scope and on line number 6 of <code>script.js</code>.</p>

<p class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/174-debugging-widgets-using-opera-dragonfly-and-the-widget-emulator/dragon_break.png" title="Opera Dragonfly window showing the breakpoints inside our script." alt="Opera Dragonfly window showing the breakpoints inside our script." /><br />
Figure 2: Opera Dragonfly window showing the breakpoints inside our script.</p>

<p>This information is crucial when developing complex applications.</p>

<h2 id="editing">Editing the animation, with help from Opera Dragonfly</h2>

<p>To test the animation you must use the Widget Emulator, and to debug the animation you must use Opera Dragonfly. Both products combined give you extreme flexibility in developing applications for various devices.</p>

<p>Under normal development circumstances it is very important that you understand the libraries you intend to use in your code; for this example however we shall assume no knowledge of the library in use (the <a href="http://dev.opera.com/libraries/animation/">Opera Animation library</a>) and modify the animation purely on information given to us by Opera Dragonfly.</p>

<p>Once the Widget Emulator is started, an option in Opera Dragonfly allows you to debug the Widget Emulator and widget together. To find out what happens when an animation is triggered, set a breakpoint on <code>columnOne.animHide.run()</code>.</p>

<p>The widget is initialized, as seen in Figure 3.</p>

<p class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/174-debugging-widgets-using-opera-dragonfly-and-the-widget-emulator/widget_state_1.png" title="A widget with three columns, a header and a footer runnning in the Widget emulator" alt="A widget with three columns, a header and a footer runnning in the Widget emulator" /><br />
Figure 3: A widget with three columns, a header, and a footer runnning in the Widget Emulator</p>

<p>Click on the blue area (<code>columnOne</code>) and you will see the <code>click</code> event dispatched and two functions called: <code>columnOne.animHide.run();</code> and <code>columnTwo.animShow.run();</code>.</p>

<p>Opera Dragonfly stops the thread at the breakpoint, as seen in Figure 4.</p>

<p class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/174-debugging-widgets-using-opera-dragonfly-and-the-widget-emulator/dragon_1.png" title="Closeup of hiting a breakpoint" alt="Closeup of hiting a breakpoint" /><br />
Figure 4: Close-up of hitting a breakpoint</p>

<p>From this moment on, you can follow what path JavaScript takes while this widget runs. This is also helpful for optimizing code.</p>

<p>While stepping through the code, you can find the function <code>constant</code> by clicking on the “Step into” icon or pressing F11; see Figure 5.</p>

<p class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/174-debugging-widgets-using-opera-dragonfly-and-the-widget-emulator/dragon_2.png" title="Stepping into the constant function." alt="Stepping into the constant function." /><br />
Figure 5: Stepping into the <code>constant</code> function.</p>

<p>This function represents the default linear acceleration used for animations in the widget. This is what you need to edit in order to achieve a smoother acceleration. By stepping back in the thread using the “Step out” icon or by pressing Shift+F11, you will find that <code>animation_object.accelarationProfile</code> is the function you need to override. You will also see that the library provides various prototypes that you can use.</p>

<p>Using this knowledge, add this to the <code>onload</code> event listener:</p>

<pre>
<code>columnOne.animShow.accelerationProfile = Animation.prototype.decelerate;
columnOne.animHide.accelerationProfile = Animation.prototype.decelerate;
columnTwo.animShow.accelerationProfile = Animation.prototype.decelerate;
columnTwo.animHide.accelerationProfile = Animation.prototype.decelerate;</code>
</pre>

<p>To test the widget, run it in the Widget Emulator and select a mobile profile. Clicking on the columns should provide a nice decelerating animation; see Figure 6 for an example. You can download a <a href="emulator.zip">debugged version of the widget inside the emulator</a> (The ‘fixed’ widget).</p>

<p class="figure"><img src="http://forum-test.oslo.osa/kirby/content/articles/174-debugging-widgets-using-opera-dragonfly-and-the-widget-emulator/decelerating_animation.png" title="Model of decelerating animation" alt="Model of decelerating animation" /><br />
Figure 6: Model of decelerating animation</p>

<h2 id="summary">Summary</h2>

<p>This article has shown you how you can debug an emulated widget using Opera Dragonfly. This way you can debug code paths and effects which only occur on a device. You need to place the widget inside the emulator, run the emulator and use Opera Dragonfly on the emulator widget itself. When doing this, you need to keep in mind that the emulator’s function calls are also included in the call stack in the debugger.</p>

<ul class="seriesNav">
<li><a href="http://dev.opera.com/articles/view/opera-widgets-sdk/" rel="index">Opera Widgets SDK table of contents</a></li>
</ul>
