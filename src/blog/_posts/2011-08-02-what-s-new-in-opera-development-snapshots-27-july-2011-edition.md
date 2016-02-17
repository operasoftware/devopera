---
title: 'What’s New in Opera Development Snapshots: 27 July 2011 Edition'
authors:
- divya-manian
tags:
- opera-next
license: cc-by-3.0
---

<p>The biggest news for this <a href="http://my.opera.com/desktopteam/blog/2011/07/27/latency-microdata-qresync">snapshot</a> is the first practical implementation of the Microdata API in a browser.</p>
<p>As usual, your <a href="https://www.opera.com/browser/next/">Opera Next</a> should already have this update (checking <code>opera:about</code> should give you &quot;Presto/2.9.<b>186</b> Version/12.00&quot; under <i>Browser Identification</i>).</p>
<ul>
<li>
	<h3>Implementation of Microdata APIs</h3>
	<p>This release of Opera has full support for <a href="https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api">Microdata DOM APIs</a>. There is a bug around the implementation on Mac, Linux/FreeBSD versions of this snapshot that we are hoping to fix as soon as we can. </p>
	<p>What this API would allow you to do is to access microdata specified using microdata attributes like <code>itemprop</code>, <code>itemscope</code> via a JavaScript interface. </p>
	<p>Opera&#39;s <a href="http://blog.foolip.org/">Philip Jägenstedt</a> also <a href="http://bugzilla.validator.nu/show_bug.cgi?id=671">added a bunch of patches</a> to make <a href="http://validator.nu">validator.nu</a> validate microdata attributes better. </p>
	<p>Tests written while implementing the APIs will also be shortly submitted to the W3C test suite.</p>
</li>
<li><h3>href of a link element is no longer empty if it is same as document url.</h3>
	<p>Not sure why, but you can legally have such markup <code>&lt;link href=&quot;&lt;same url as where this markup exists&gt;&quot;&gt;</code>. In this specific case, Opera used to return an empty string when queried for the <code>href</code> attribute on the <code>link</code> (here is <a href="http://jsbin.com/esiloz/6/">an example</a>).</p>
</li>
<li>
	<h3>Change events now fire when clicking on labels associated with an input checkbox</h3>
	<p>This was a regression and this has now been fixed. </p>
</li>
<li>
	<h3>Inset Box Shadow on input text elements</h3>
	<p>Opera was not rendering inset box shadows on input text elements which has now been fixed (<a href="http://jsfiddle.net/Ap7sM/">here is an example</a>). </p>
</li>
<li>
	<h3>Maxlength attribute ignored if set to zero</h3>
	<p>Another no-idea-why-anyone-would-do-it-but-should-conform-to-spec-anyway bug. So, if you set maxlength as 0 for an input element, Opera used to ignore it, but now it longer does (here is a <a href="http://jsfiddle.net/nimbu/PFKcB/">demo</a>). </p>
</li>
<li>
	<h3>Default widths of input of types url and email</h3>
	<p>The default width of url and email inputs was longer than regular text inputs. So, now your default inputs in a form will look prettier!</p>
</li>
<li>
	<h3>Computed Value of overflow now returns <code>auto</code> on hidden elements</h3>
	<p>For some reason the computed value for <code>overflow</code> returned on an element hidden with <code>display:none</code> was always <code>visible</code> instead of the default of <code>auto</code> causing weird effects in some design patterns such as <a href="http://jqueryui.com/demos/accordion/#fillspace">jQuery UI&#39;s accordion</a> (note the scrollbar that appears when clicking &quot;Section 4&quot; does not appear on previous versions of Opera).</p>
</li>
<li>
	<h3>No longer creating a new stacking context for <code>position:fixed</code> with no z-index set</h3>
	<p><a href="http://jsfiddle.net/nimbu/QTWD2/show/">This demo</a> would explain this best. In previous versions of Opera, we used to create a new stacking context whenever a parent element had <code>position:fixed</code> but now we no longer do this, and match the behaviour of other browsers. </p>
</li>
<li>Finally, <a href="http://jsfiddle.net">jsfiddle</a> is working again!</li>
<p>Please do try it out and let us know if any of these do not work for you, or any other suggestions you might have!</p></ul>
