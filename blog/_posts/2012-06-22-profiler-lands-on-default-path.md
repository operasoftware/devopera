---
title: Profiler lands on default path
authors:
- david-hasather
tags:
- dragonfly
license: cc-by-3.0
---

<p>Today we&#39;re releasing the profiler that&#39;s been in beta testing for some time now.</p>

<p>The profiler lets you record all events that happen on a web page, for example script compilation and reflow. When recording is stopped these events will be presented in a timeline where you can see how long each event took.</p>

<p>Events in the timeline can be hovered to get more information and some can be clicked. For now only style recalculation events can be clicked and will show a table of selector matching events with detailed information.</p>

<p>Future releases will add the possibility to profile JavaScript.</p>

<p><span class='imgcenter'><img alt='' src='/blog/profiler-lands-on-default-path/profiler.png' /></span></p>

<p>As can be seen from the screenshot we now also make tabs smaller when the space is narrow. We also have a feature in this release which improves timing accuracy in the Network by turning off unneeded debugging services. This will be especially noticeable when remote debugging.</p>
