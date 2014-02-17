---
title: Mobile application smackdown — openMIC Bath
authors:
- patrick-lauke
tags:
- html5
- css3
- mediaqueries
- svg
- widgets
- standards
- w3c
- odin
layout: article
---
Last week I attended the <a href="http://openmicamp.ning.com/">openMIC Mobile Innovation Camp</a> in Bath. My co-conspirator Bruce Lawson presented on top tips for mobile web development in the morning, while I ran a barcamp session in the afternoon around the subject of native applications, web applications and widgets.

To set the scene for the session, I came prepared with an extensive presentation – now available on <a href="http://www.slideshare.net/redux/openmic-barcamp-11022010">Slideshare</a>.

<div style="width:425px;text-align:left" id="__ss_3177432"><object style="margin:0px" width="425" height="355"><param name="movie" value="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=openmic11-02-2010-100214140918-phpapp02&amp;stripped_title=openmic-barcamp-11022010" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="never" /><embed src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=openmic11-02-2010-100214140918-phpapp02&amp;stripped_title=openmic-barcamp-11022010" type="application/x-shockwave-flash" allowfullscreen="true" width="425" height="355" allowscriptaccess="never" /></object></div>

The demos I showed:

<ul>
<li><a href="http://people.opera.com/brucel/demo/html5-forms-LWS-demo.html">HTML5 forms</a> page</li>
<li><a href="http://dev.opera.com/articles/view/introduction-html5-video/">Introduction to HTML5 video</a> article on <a href="http://dev.opera.com">dev.opera</a></li>
<li><a href="http://people.opera.com/andreasb/demos/demos_svgopen2009/svgscalegold.html">Mediaqueries + SVG</a></li>
<li><a href="http://www.splintered.co.uk/experiments/archives/paranoid_0.2/">Paranoid 0.2</a> classic game lookalike in <code>&lt;canvas&gt;</code></li>
<li><a href="http://people.opera.com/patrickl/experiments/canvas/particle/2/">Particle party</a> using <code>&lt;canvas&gt;</code></li>
<li><a href="http://www.splintered.co.uk/experiments/104/"><cite>Hello Cthulhu</cite> basic widget</a> (because the classic &quot;Hello World&quot; is too boring)</li>
</ul>

Overall, this was a great day. I&#39;m particularly happy with the good discussion around native <code>&lt;video&gt;</code> and <code>&lt;canvas&gt;</code> that developed during my session. Will these new technologies really replace Flash? Some of the participants weren&#39;t convinced, but we all agreed that at least they now offer an alternative to developers...at the end of the day, it&#39;s still about what the users want from our sites.

<p>Bruce&#39;s presentation Practical Tips for Mobile Widget development (which also useful for making normal Web sites that are &quot;mobile-friendly&quot;) is available (I&#39;ve removed decorative images so it was small enough to post to Slideshare):</p>

<embed src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=bath-openmic-100212084105-phpapp01&amp;stripped_title=practical-tips-for-mobile-widget-development-3156151" type="application/x-shockwave-flash" allowfullscreen="true" width="425" height="355" allowscriptaccess="never" />

<p>If the word &quot;widgets&quot; makes you think of little toys, look at the <a href="http://my.opera.com/ODIN/blog/2010/02/18/svg-edit-standalone-widget">SVG Edit widget</a> that takes the open source, web-based, JavaScript-driven SVG-edit project and turned it into an amazing standalone widget that can hold its own against traditional desktop applications.</p>
<p><a href="http://www.perfectomobile.com/portal/cms/opera.xhtml?key=OP631R89YL2">Perfecto Mobile</a> have an application to help you to easily test your widgets and websites on real mobile devices, and are giving seven hours free testing.</p>
<h3>Using Google Web Toolkit for Opera Widgets</h3>
<p><a href="http://www.danielvaughan.com">Daniel Vaughan</a> asked a question about using Google Web Toolkit to make Widgets. I didn&#39;t know the answer, and he was kind enough to research the answer himself and allow me to post it here.</p>
<blockquote>
<p>GWT lets you write Java code and then compiles it to cross-platform optimised JavaScript. Inspired by your talk last week and an employer who has mobile applications high on the agenda I have spent some time investigating how far I can go by creating GWT JavaScript and packaging it up as a widget. I first tried packaging my code as a Nokia WRT widget as I have a Nokia phone but I have also tried packaging as an Opera Widget and both work without problems.</p>

<p>GWT is designed to be deployed to a Java web container such as Tomcat and supports the JavaScript communicating with back end Java services through an RPC mechanism. We are a financial services company with a lot of existing Java at the backend so this is important. As the GWT JavaScript can perform RPC calls to the Java services on the same server this is obviously a problem on mobile as there is no Java web container to run the services in and no way to connect to services on other machines through RPC from JavaScript. However I then looked at calling the services on a remote via
JSON running into cross site scripting errors but when I changed to using JSONP it worked well and I could get at my backend data.</p>

<p>I am now working on a more comprehensive proof of concept which uses some real backend services and addresses a realistic business problem but I just wanted to let you know that in my experience GWT + Mobile Widgets look promising.</p>
</blockquote>
