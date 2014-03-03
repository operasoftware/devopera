---
title: 'HTML5 Forms: Error Reporting With Wobbly Bubbles'
authors:
- bruce-lawson
tags:
- error-reporting
- validation
- html5
- forms
- odin
license: cc-by-3.0
layout: post
---

<p>On Wednesday night, at <a href="http://standards-next.org/2010/09/html5-from-the-ground-up/">standards.next in Manchester</a>, Patrick Lauke and I were glad to be able to demonstrate HTML5 Forms validation in Opera with a visually much more appealing method of reporting errors. It was appreciated by attendees and we received requests from people who couldn&#39;t attend to see a sneak peek.</p>

<p>As we&#39;ve spoken at conferences over the last couple of years, we heard designers&#39; complaints about the blinking form fields and red boxes with error messages (and felt the pain ourselves!) so worked with Emil in our Swedish office to make the out-of-the-box look and feel more acceptable.</p>

<p>Phase 1 is shown in the YouTube video below (there is a before and after comparison). Instead of red boxes with error messages, we now have a speech bubble with a movement to attract the eye. We call this the Wobbly Bubbles build (as &quot;Wobbly Bubbles&quot; is Patrick&#39;s nickname throughout Opera).</p>

<p>We&#39;ve also reworked the error messages; for example, if you submit a blank required field, the wobbly bubble says &quot;This is a required field&quot; instead of the previous &quot;You have to enter a value&quot;. (&quot;Have to&quot; as a phrasal verb that means &quot;must&quot; is very problematic for international speakers, as it&#39;s easily confused with &quot;have&quot; for possession and &quot;have&quot; as the auxiliary verb for perfect tenses.)</p>

<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/r20OjmbB2xA?fs=1&amp;amp;hl=en_GB" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="never" /><embed src="http://www.youtube.com/v/r20OjmbB2xA?fs=1&amp;amp;hl=en_GB" type="application/x-shockwave-flash" allowfullscreen="true" width="480" height="385" allowscriptaccess="never" /></object>

<p>As yet, these bubbles are not author stylable (because there are no hooks in any CSS specification yet, although that&#39;s being worked on) so it&#39;s particularly important that the default implementation doesn&#39;t make your eyes bleed.</p>

<p>We have lots more on our wishlist for HTML5 forms error reporting, and this is just an experimental build. We can&#39;t say when it would be in a shipping browseror will ever ship in this format. But we&#39;re eager to hear your comments (you can comment anonymously below).</p>
