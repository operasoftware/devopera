Title: Can Kestrels do Math? MathML support in Opera Kestrel
----
Date: 2007-09-27 10:59:38
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

<h2>Introduction</h2>

<p>As the new Opera 9.5 takes shape, and you download new &quot;weeklies&quot; (keep checking <a href="http://my.opera.com/desktopteam/blog/" alt="The Opera desktop team blog">the Opera desktop team blog for new weeklies</a>,) there are a number of improvements and new features you will see. Most of them are listed in the changelogs when they are put into the build, and you find out about them when they are first released.</p>
 

<p>But there&#39;s more! One improvement that you won&#39;t find there yet, which we have been working on diligently behind the scenes is MathML support, and you can actually try it out now, before it is released. More specifically, we have been working on the <a href="http://www.w3.org/TR/mathml-for-css/" alt="The W3C MathML for CSS profile working draft">MathML for CSS profile</a>, a W3C working draft describing a large set of MathML features that can be implemented by any browser with good CSS support. Since this effectively includes all modern browsers, it means a simple way to have MathML widely supported in normal web browsers, without having to rely on a plugin.</p> 

<h2>How to set it up</h2>
 
<p>So how can you see it before we release it? Well, it is pretty simple really. First save <a href="mathml.css" alt="The MathML stylsheet">the magic stylesheet</a> that accompanies this article to a location on your HDD, then set Opera&#39;s display preferences (for supporting other browsers, see later on in the article) to use this stylesheet by default. You do this by going to &quot;Preferences...&quot;, then selecting &quot;Advanced Preferences&quot; &gt; &quot;Content&quot;, and then clicking on the &quot;Style Options&quot; button, as seen in Figure 1.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/38-can-kestrels-do-math-mathml-support-in-opera-kestrel/prefs.jpg" alt="Setting style options in Opera Kestrel" /></p>
<p class="comment">Figure 1: The &quot;Style Options...&quot; button in the Opera 9.5 preferences</p> 
 
<p>There are a couple of things you need to do here. The first is to set the location of &quot;My Style Sheet&quot; to the style sheet you have downloaded, by clicking &quot;Choose...&quot; and selecting it in the file navigator, which should give you a display like the one shown in Figure 2. (Note that if you already have your own style sheet, you can add the rules there - but in that case I assume you know how to do it.)</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/38-can-kestrels-do-math-mathml-support-in-opera-kestrel/display.jpg" alt="The Opera Kestrel display options" /></p>
<p class="comment">Figure 2: The Display options in the preferences of Opera 9.5</p> 

<p>When you are finished in this dialog, select the &quot;Presentation Modes&quot; tab, to reveal the screen shown in Figure 3.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/38-can-kestrels-do-math-mathml-support-in-opera-kestrel/presopt.jpg" alt="The Opera Kestrel presentation modes options" /></p>
<p class="comment">Figure 3: The Presentation Modes options in the preferences of Opera 9.5</p> 
 
<p>Here you need to decide whether you want to apply the stylesheet in the default presentation mode (&quot;Author mode&quot;), &quot;User mode&quot; (which you can switch to on any page,) or both. In my personal setup, I have it as a user mode option (hence the &quot;My style sheet&quot; box being checked on the &quot;User mode&quot; side, but not the &quot;Author mode&quot; side.) The main reason I have done this is that applying a great big stylesheet to every page on the Web results in a performance hit, and I don&#39;t read a lot of MathML.</p>
 
<p>Finally, if you decide you only want this in User Mode, you probably want the button to switch modes somewhere handy. I decided to put it on my Status bar, with the other display options I use a lot. Pick the bar you want it on, right click, and select customize. Choose the &quot;Buttons&quot; tab and add the &quot;Author mode&quot; button, from the &quot;Browser View&quot; set, as seen in Figure 4.</p>
 
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/38-can-kestrels-do-math-mathml-support-in-opera-kestrel/buttons.jpg" alt="Setting a custom button in Opera Kestrel to change between user and author mode" /></p>
<p class="comment">Figure 4: Adding the User mode/Author mode switcher button can save you a lot of hassle in this case</p> 
 
<p>Now, you are ready to look at some MathML - download the sample XHTML documents from <a href="stress.xhtml" alt="The first sample XHTML math document">here</a> and <a href="torture.xhtml" alt="The second sample XHTML math document">here</a> and try running them and playing with them!(Remember, if you only set it up for User mode, you will have to turn on User mode with the button you just installed). The output you get should be along the same lines as Figure 5:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/38-can-kestrels-do-math-mathml-support-in-opera-kestrel/screen.jpg" alt="Sample MathML output" /><img src="http://forum-test.oslo.osa/kirby/content/articles/38-can-kestrels-do-math-mathml-support-in-opera-kestrel/screen2.jpg" alt="More sample MathML output" /></p>
<p class="comment">Figure 5: Some sample MathML output to whet your appetite.</p> 


<p>As this is still at the experimental stage, we certainly appreciate feedback - are you using it, are there things that don&#39;t work (we know some of these already of course, but feel free to tell us in case we missed something,) and where have you found this useful? The best way to provide feedback is to join the my.opera.com MathML group, found <a href="http://my.opera.com/mathml/about/" alt="The MathML my.opera discussion group">here</a>, or post to this article&#39;s forum, found at the bottom of this page - see the &quot;Discuss this article&quot; link.</p>

<h2>Working with the Web at large</h2>

<p>If you are using this stylesheet, some of the MathML you find &quot;in the wild&quot; will come out beautifully, because it matches the profile already. Some won&#39;t, because it relies on some other kind of MathML (as well as the constructs that are not included in the MathML for CSS profile, there are two entire dialects within the one markup language, which makes it a little complicated).</p>

<p>One way to increase adoption is to make this work with multiple browsers. The main stylesheet really requires Opera Kestrel to work - as well as high-quality CSS support, it relies on support for the following:</p>

<ul>
<li>URIs (relatively common)</li>
<li>The ability to install a user stylesheet (relatively common, but different for each browser)</li>
<li>The ability to use SVG as a background image (currently available only in Opera).</li>
</ul>

<p>This <a href="Oldmathml.css" alt="An alternative MathML stylesheet for other browsers">slightly less pretty stylesheet</a> using PNG images should mostly work in very recent versions of other browsers.</p>

<h2>Summary</h2>

<p>As we move forward with this, we think it is important to work with the developers of authoring tools and site content to get them to provide the widest possible coverage - and your help here is of course appreciated. Whether you publish some MathML and make it fit the profile, or use a tool and want the authors to make it easier to produce MathML for CSS, or work on another browser and want to improve its MathML support, we would love to hear what you have done - see above for the feedback mechanisms we have provided!</p>

<h2>Resources</h2>

<ol>
<li><a href="http://my.opera.com/desktopteam/" alt="The Opera desktop team homepage">The Opera desktop team homepage</a></li>
<li><a href="http://www.w3.org/TR/mathml-for-css/" alt="The W3C MathML for CSS profile working draft">The W3C MathML for CSS profile working draft</a></li>
<li><a href="mathml.css" alt="The MathML stylsheet">The MathML stylesheet</a></li>
<li>The example XHTML documents to be styled using <a href="mathml.css" alt="The MathML stylsheet">mathml.css</a> - <a href="stress.xhtml" alt="The first sample XHTML math document">stress.xhtml</a> and <a href="torture.xhtml" alt="The second sample XHTML math document">torture.xhtml</a>.</li>
</ol>

