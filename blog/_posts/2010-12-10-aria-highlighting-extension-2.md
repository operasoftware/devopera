---
title: ARIA Highlighting Extension
authors:
- bruce-lawson
tags:
- extensions
- aria
- debugging
- accessibility
- odin
license: cc-by-3.0
---

<p>I was mucking around with  <a href="http://dev.opera.com/articles/extensions/">Opera Extensions</a>, largely to get a grip on how they work, and decided to make an extension that exposes ARIA information in a page, as I was travelling Australia and <a href="http://wipa.org.au/html5/">talking HTML5 and ARIA</a> with ARIA-expert <a href="http://www.paciellogroup.com/blog/">Steve Faulkner</a>.</p>

<p><del>Here&#39;s a very early alpha 1 version of the <a href="http://people.opera.com/brucel/dev/oex/aria-alpha1.oex">ARIA debugging Opera extension</a>. It&#39;s not pretty, and it&#39;s not well-architected (the beta is better), but you can get an idea of the basic functionality. I&#39;m looking for comments on the functionality it offers rather than how it accomplishes it or the aesthetics of the logo, buttons etc.</del></p>

<p>You can download the <a href="http://people.opera.com/brucel/dev/oex/aria-outliner-b1.oex">ARIA highlighter extension beta 1</a>. It&#39;s made much more robustly, using some <a href="http://dev.opera.com/articles/view/opera-extensions-prototypes-modifying-css/">Opera Extension prototype templates</a> that I encourage you to use as the basis for your extensions. (See also the full <a href="http://dev.opera.com/articles/view/opera-extensions-quick-documentation-overview/">Opera Extensions documentation</a>.)

<p>If you install it in Opera 11, you&#39;ll see it adds a toolbar button with a couple of musical notes (Aria, geddit?). Pressing the button activates the extension. If you try it on my handy <a href="http://people.opera.com/brucel/articles/aria-testpage.html">ARIA test page</a> you can see the whole gamut of functionality:
</p>
<h3>Outline elements with ARIA attributes</h3>

<p>These are currently outlined in green. I thought about popping up informational boxes, but decided against it; it would make the page look even busier. To find out more, right click and choose <kbd>Inspect Element</kbd> to see the DOM, stylehseets and layout with Opera Dragonfly.
</p>
<h3>Outline roles</h3>
<p>ARIA roles are outlined in rakish blue. (Actually, any roles.) These are likely to be an important part of your page, particularly your document landmark roles. (See Gez Lemon&#39;s <a href="http://dev.opera.com/articles/view/introduction-to-wai-aria/">Introduction to WAI ARIA</a> for more information.)</p>

<p>A yellow overlay tells you what kind of role it is. Some roles, such as <code>main</code>, <code>banner</code> and  <code>contentinfo</code> are only allowed once on a page - think of them as analogous to HTML <code>id</code>s rather than <code>class</code>es. Therefore, the extension shows a severe red error if it finds duplicates of these roles.
</p>
<p>I&#39;m considering styling <code>role=application</code> differently, as that triggers <a href="http://www.paciellogroup.com/blog/?p=692">special behaviour in the JAWS screenreader</a>.</p>
<p>Elements that have an ARIA <code>role=presentation</code> are given 50% opacity. Be careful, though: not every thing inside a presentation role is presentational. Read (then re-read, then re-re-read) the <a href="http://www.w3.org/TR/wai-aria/roles#presentation">explanation of presentation inheritance</a> to learn more. Or be even more baffled, if you&#39;re like me.</p>
<h3>Outline live regions</h3>
<p><a href="http://www.w3.org/WAI/PF/aria/states_and_properties#aria-live">Live Regions</a> are areas of the page that get updated with Ajax and screenreaders can choose to interrupt whatever they&#39;re currently telling a user (or not) depending on the &quot;politeness&quot; of the <code>aria-live</code> attribute. This is shown as a yellow overlay, and the live region has a dashed purple border.  Basically, if you&#39;re updating part of the page with Ajax, you should consider having an ARIA live region there.
</p>
<p>It seems like other ARIA roles (marquee/timer/log/status) imply special types of live region, so perhaps I should style those similarly? I need to read the spec more (which is an awful thought. This is a spec that defines <a href="http://www.w3.org/TR/2009/WD-wai-aria-20091215/roles">abstract roles</a> that you must not use and which cause validation errors. So what&#39;s the point, except to confuse?)

<h3>Show associations</h3>
<p>ARIA has attributes <code>aria-labelledby</code> and <code>aria-describedby</code>. These attributes point to the <code>id</code> of another element  on the same page that give more information. These assocations are shown. If the  extension can&#39;t find an element with an <code>id</code> that matches a <code>describedby</code> or <code>labelledby</code> pointer, a forbidding red error is shown.</p>

<p>A future version of this might add a link to the element that describes or labels an element, so you can click and check it&#39;s the right one. But that might challenge my JavaScript.</p>
<p>Your feedback is solicited - you can leave an anonymous comment below.<p>

<p>(You might also want to check out the decidedly more polished <a href="https://addons.opera.com/addons/extensions/details/html5-outliner/1.0/?display=en">HTML5 Outliner Extension</a> that shows the HTML5 outline if your pages.)</p></p></p></p></p>
