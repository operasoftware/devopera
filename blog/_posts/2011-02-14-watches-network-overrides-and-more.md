---
title: Watches, Network overrides and more
authors:
- dstorey
tags:
- HTTP
- Opera Dragonfly
- Watches
- dragonfly
layout: article
---
<p>We have two more features for you as we move ever closer to Opera Dragonfly 1.0 release.</p>

<h3>Watch expressions</h3>

<p>The first is the Watches feature in the JavaScript Debugger. A watch can monitor a user defined variable or expression while the web page runs. The expression will be evaluated and the result will be shown. As you step through the code it will show the result at that moment in time. A watch expression can be as simple as a variable name, or as complex as any valid JavaScript expressions.</p>

<img src="/blog/watches-network-overrides-and-more/watches.png" alt="" />

<p>To test this feature out, load this <a href="http://people.opera.com/dstorey/dfl/test-watches.html">Watches test file</a> in Opera. Switch to the <q>state</q> tab of the JavaScript debugger and add the following expressions to the Watches panel:

<ul>
    <li><samp>a</samp></li>
    <li><samp>b</samp></li>
    <li><samp>c</samp></li>
    <li><samp>d</samp></li>
    <li><samp>a.a + b.b</samp></li>
   <li><samp>c / d</samp></li>
</ul>

<p>Enter each expression you wish to add, and click the <q>add</q> button to submit that watch. After you&#39;ve added the watch expressions, click the <q>test</q> button in the web page. This will run the JS code until the <code>debugger</code> statement is reached. You’ll notice that most of the expressions will switch from <samp>error</samp> to <samp>undefined</samp>. As the <samp>b</samp> object has already been defined at this stage, it will state that it is of type Object. Expanding this will show it has one property (<samp>b</samp>) with the value of 7. Click the Step Into button, and watch as you step through each statement values get assigned to the variables being watched. Once the relevant variables are assigned a value you’ll see the expressions such as <samp>a.a + b.b</samp> will return the result of the executed expression.  It this case it will return 10. As you can imagine, this feature can be very useful when trying to understand the current state of your application.</p>

<h3>Globally override HTTP headers</h3>

<img src="/blog/watches-network-overrides-and-more/iphonevsoperami.png" alt="" /> 

<p>It is now possible to globally override any HTTP header in Opera Dragonfly. Switch to the Network Inspector and then the Network options tab. There you can find an option to enable global network overrides. In the image above I&#39;ve compared the result when overriding the user-agent header to Opera Mini on iPhone on the left and Safari on iPhone on the right. This shows the results of browser sniffing. In the first Opera gets a basic mobile site, and in the second it gets an advanced mobile app with features such as Google Instant. The global overrides apply to all network requests for the current session. As you can imagine, this is very useful for testing mobile optimised sites, or testing if pesky sites that block Opera actually work when the discrimination is bypassed.</p>

<h3>Remote debug polish</h3>

<p>We’ve also added some help text when the remote debug connection dialog is open. This steps the user through what needs to be done in Opera Dragonfly and the mobile device to connect the two.</p>

<h3>Next steps</h3>

<p>We’re gearing up to moving from the implementation phase to the polishing and bug fixing phase. In the near future we will stop working on new features and start getting Opera Dragonfly ready for the first stable release. In this phase we will fix critical bugs, along with polishing the UI to fix inconstancies and refine the look and feel. Once Dragonfly 1.0 is released we will move back to feature development along with further refining the currently supported features.</p>

<p>We hope you like the current build, and feedback is welcome as always.</p>

</p>
