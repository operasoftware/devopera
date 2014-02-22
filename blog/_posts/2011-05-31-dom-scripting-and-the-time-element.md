---
title: DOM Scripting and the `<time>` Element
authors:
- mike-taylor
tags:
- robots
- html5
- dom
- javascript
- odin
layout: post
---
<p>We&#39;ve created a fun demonstration (well, at least it was fun to Andreas and me last night at 1AM) of how to make use of the <code>&lt;time&gt;</code> element via DOM scripting. Behold our <a href="http://people.opera.com/miket/2011/5/time.html">mighty date robot</a>.</p>

<p>When a date is selected from the robot&#39;s date picker, a new <code>&lt;time&gt;</code> element is dynamically created and inserted into the &quot;date log&quot;. Let&#39;s take a closer look at how that&#39;s accomplished in the <code>makeTime</code> function expression:</p>

<pre><code>var makeTime = function(date){
  var time = document.createElement(&#39;time&#39;);
  time.dateTime = date;
  time.textContent = time.valueAsDate;
  log.appendChild(time) &amp;&amp; fillMarquee(time);
}</code></pre>

<p>A new <code>&lt;time&gt;</code> element is created with its <code>dateTime</code> property set to the value of the date picker. This corresponds to the <code>datetime</code> attribute if we were to include this via markup. For no real reason other than to see what a <code>Date</code> object looks like, we set the <code>textContent</code> of the element to <code>time.valueAsDate</code>. This new DOM API returns a JavaScript <code>Date</code> object from any valid <code>&lt;time&gt;</code> element.</p>

<p>At this point, standard JavaScript date manipulation is possible, for example showing the day of the week and the difference in days between today and the selected date (<code>&lt;marquee&gt;</code> element optional).</p>

<p>To learn more about the <code>&lt;time&gt;</code> element, be sure to check out Bruce Lawson&#39;s <a href="http://html5doctor.com/the-time-element/">HTML5 Doctor article</a> on the subject as well as the <a href="http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element">HTML5 spec</a>.</p>

<p>NOTE: This demo requires features implemented in Opera 11.50. You can grab it <a href="http://www.opera.com/browser/">here</a>.</p>
