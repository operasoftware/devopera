Title: Custom web fonts with sIFR
----
Date: 2009-06-23 15:05:23
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th January 2012: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Web Fonts now have very good cross browser support and some high quality commercial tools available, meaning it is very unlikely that you will have to use a font replacement technique again, in most circumstances.</p>
</div>

<h2>Introduction</h2>

<p>You may have heard the term <acronym title="scalable Inline Flash Replacement">sIFR</acronym>, banded about on high brow design sites or by web gurus on their tweets, and you&#39;ll know roughly what it is ... a flash-based technology for swapping fonts in titles and headers for your own custom fonts that the end-user won&#39;t have installed on their machine. At this point you&#39;ll probably ask &quot;why?&quot;.</p>

<p>As a designer, implementing a client&#39;s look and feel is part and parcel of design, and one of the biggest obstacles for a web designer is the <a href="http://dev.opera.com/articles/view/fonts-for-web-design-a-primer/">limited available fonts</a>. A good designer can often make a company&#39;s web site tie in tightly with their brand guidelines by the simple use of a title font and the correct corporate colour, but often brand guidelines require use of specific fonts, which creates a problem.</p>

<p class="note">Note that the CSS 3 spec defines web fonts, a technology to  allow you to import whichever font families you want to use in your web pages. This very much solves the problem we are describing here, and could potentially render sIFR redundant, but it is a nascent technology at the time of writing, and it will be a while until we see it supported across all major browsers (although Microsoft&#39;s <abbr title="Embedded OpenType">EOT</abbr> technology does basically the same thing, but in a different way). <a href="http://dev.opera.com/articles/view/presto-2-2-and-opera-10-a-first-look/#webfonts">Read more about web fonts</a>. sIFR solves this problem now, works in all modern browsers, and degrades gracefully. Of course, nothing is completely perfect - sIFR does have a downside in that it requires Flash to implement, but if you need a custom font solution now, it is your best available solution. You don&#39;t necessarily have to buy the Adobe tools either - <a href="http://www.osflash.org">open source Flash solutions</a> exist.</p>

<p>In this article, I&#39;ll show exactly what sIFR is and how you can use it, and share some simple examples to get you started. You can <a href="sIFR_test.zip">download my example</a> and play with it, and I&#39;d suggest that you <a href="http://dev.novemberborn.net/sifr3/nightlies/">download sIFR</a> at this point too.</p>

<h2>What is sIFR exactly?</h2>

<p>sIFR - or <strong>scalable Inline Flash Replacement</strong> - is a method of substituting a header rendered in a plain old web font like say, Times or Arial, for any font you want - rendered in Flash.</p>

<h2>How does sIFR work?</h2>

<p>The technique sIFR uses is a very clever combination of Javascript, CSS and Flash. In layman&#39;s terms, when your web page loads, the script looks for your specified targets - <code>h1</code>, <code>h2</code>, <code>#header h1</code> or <code>div.details h2</code>, for example - then adds a few lines of code to your HTML, slightly modifying (validly!) your desired target. The script then replaces this target with a Flash movie that includes your specific font. You can specify a few essentials inside the Flash movie like colour, weight and spacings, and the script inserts this into the targeted element.</p>

<p>The result is headers, quotes, etc. on your page that are dynamically generated and use non-computer specific fonts, such as a clients custom typeface, or a specific font to imply a feeling or mood.</p>

<p>These dynamic replacement techniques have risen from the need to advance the standard CSS image replacement techniques. These generally involve making bitmap graphics that will be displayed instead of the usual <code>&lt;h1&gt;</code> titles, and using CSS to hide the HTML text. However, this technique only works if you know what the content of your <code>&lt;h1&gt;</code> tag is going to be be - if you then want to change your headings, you have to update your images! sIFR gets around this. In addition, if you&#39;re creating blogs, Content Management Systems or e-commerce sites, you&#39;re going to have section headers and titles that will be changed by clients or end users. The standard replacement method will not work in these situations.</p>

<h2>What about accessibility?</h2>

<p>sIFR comes up smelling of roses in terms of accessibility. The content of your HTML is changed to allow for the clever scripts to do their bits, but it&#39;s good enough to write out a line specifically for assistive devices/technologies. For example:</p>

<pre><code>&lt;h3&gt;Latest News&lt;/h3&gt;</code></pre>

<p>becomes</p>

<pre><code>&lt;h3 class=&quot;sIFR-replaced&quot; style=&quot;&quot;&gt;
  &lt;object id=&quot;sIFR_replacement_0&quot; class=&quot;sIFR-flash&quot; width=&quot;266&quot; height=&quot;25&quot; type=&quot;application/x-shockwave-flash&quot; name=&quot;sIFR_replacement_0&quot; data=&quot;flash/cooper_black.swf&quot; style=&quot;&quot;&gt;
  &lt;/object&gt;
  &lt;span id=&quot;sIFR_replacement_0_alternate&quot; class=&quot;sIFR-alternate&quot;&gt;
    Latest News
  &lt;/span&gt;
&lt;/h3&gt;</code></pre>

<p>My original code was a &lt;h3&gt; tag with the title &quot;Latest News&quot; inside. You can see sIFR has dropped in the &lt;object&gt; code required for the Flash file, but pushes my title into a &lt;span&gt;, which will still be read, but hidden when rendered in a web browser.</p>


<h2>The basics</h2>

<p>To use sIFR you&#39;ll need the following:</p>

<ul>
  <li>sIFR: the current stable release version is 2.0.7, although I&#39;ve been using the <a href="http://dev.novemberborn.net/sifr3/nightlies/">nightly version of sIFR 3</a> (r436) with no problems, and this is the version I&#39;ll be using in this walkthrough.</li>
  <li>Flash</li>
  <li>An HTML/CSS editor</li>
  <li>A server environment: I use MAMP under OSX for local development, which serves up pages via Apache. sIFR needs this due to some security issues with the Flash plug-in, to stop local execution and messing with files.
You can <a href="http://www.mamp.info/en/index.html">download the non-pro version of MAMP</a> for free.</li>
</ul>

<p>If you&#39;re on Linux and you need to get a server environment up and running, <a href="http://en.wikipedia.org/wiki/LAMP">LAMP</a> does the job; on Windows, <a href="http://en.wikipedia.org/wiki/WAMP">WAMP</a> is perfectly good.</p>

<p class="note">MAMP installation is ridiculously simple. You download the app, copy the MAMP folder from the disk image into the Applications folder, open the MAMP folder and double click the application icon. You don&#39;t need to fiddle with any options or settings; you should create a &quot;sifr&quot; folder inside the MAMP &quot;htdocs&quot; folder (&quot;htdocs&quot; is the root folder of MAMP - the folder where you put your web site content to test)</p>

<h2>Creating a font SWF file in Flash</h2>

<p>As daunting as it may seem to have to use Flash, this couldn&#39;t really be much easier. The makers of sIFR have provided a <code>sifr.fla</code> file in the sIFR download, and all you need to do with it is:</p>

<ul>
  <li>Open this Flash file</li>
  <li>Double click on the movie clip that&#39;s already on the stage</li>
  <li>Select the text box on the stage</li>
  <li>Change the font to your desired font (you&#39;ll need to change the font embed options if you need extra glyphs for your target language)</li>
</ul>

<p>During this process you should see something like Figure 1.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/261-custom-web-fonts-with-sifr/flash-before.jpg" alt="The sifr file opened in Flash" />
<p class="comment">Figure 1: The sIFR file, open in the Flash IDE.</p>

<p>You don&#39;t need to add any extra text into the Flash movie. The whole idea of sIFR is that it&#39;s dynamic. Once you&#39;ve done that, you can export the movie using the Publish command, and you&#39;re all good to go.</p>

<p>It&#39;s worth naming the exported SWF with a name relevant to the font, rather than leaving it as <code>sifr.swf</code>, eg <code>frutiger.swf</code> or <code>cooper_black.swf</code>.</p>

<p>It is important to check that the export has worked correctly. This might sound obvious, but I&#39;ve had trouble with sIFR Flash exports before and have spent ages checking my <code>.js</code> and <code>.css</code> files for a mistake as nothing was showing up in the browser, only to find the problem was the <code>.swf</code> file. To validate that the SWF export has worked correctly, simply double click your <code>.swf</code> and you should see a message within the SWF player window. If you can read the message &quot;Rendered with sIFR 3, revision 436&quot; (see Figure 2), then it&#39;s worked. If the SWF is blank, you have a problem, and you should open up the original <code>sifr.fla</code> file again, set the text up again and republish it.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/261-custom-web-fonts-with-sifr/rendered.jpg" alt="The sifr SWF rendered successfully" />
<p class="comment">Figure 2: The sIFR SWF file, rendered correctly in the Flash player.</p>

<h2>Setting up the folder structure</h2>

<p>You should use a similar structure to that found within the downloaded sIFR folder:</p>

<ul>
  <li>sifr3-r436/changelog.txt</li>
  <li>sifr3-r436/css/</li>
  <li>sifr3-r436/demo/</li>
  <li>sifr3-r436/flash/</li>
  <li>sifr3-r436/js/</li>
</ul>

<p>You should move these directories into your website or local dev environment (eg MAMP&#39;s &quot;htdocs&quot;), and mimic the set up. You don&#39;t need all the files listed above, and if you&#39;ve already got a similar folder structure, you can just move the contents of the folders.</p>

<p>The essential directories that you absolutely need are:</p>

<ul>
  <li>yoursite.com/css/</li>
  <li>yoursite.com/flash/</li>
  <li>yoursite.com/js/</li>
</ul>

<p>Move the contents of the <code>css</code> and <code>js</code> folders over as they are; your <code>.swf</code> file should go inside the <code>flash</code> directory.</p>

<p>Right, that&#39;s the prep done. By this point you should have created a Flash movie containing your desired font. Let&#39;s get some sIFR action on the go.</p>

<h2>Hooking up the HTML</h2>

<p>Starting with a fresh HTML doc in your preferred editor, the first thing you need to do is add a reference to the one <code>.css</code> file and two <code>.js</code> files (found in the <code>css</code> and <code>js</code> folders) into the <code>&lt;head&gt;</code> of the HTML file.</p>

<p>It&#39;s important to make sure the CSS is only set for <code>screen</code> media:</p>

<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;css/sifr.css&quot; type=&quot;text/css&quot; media=&quot;screen&quot; /&gt;</code></pre>

<p>It is also important that the reference to <code>sifr.js</code> comes before the reference to <code>sifr-config.js</code>:</p>

<pre><code>&lt;script src=&quot;js/sifr.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/sifr-config.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;</code></pre>

<p>Lastly, you want an to add an element that&#39;ll be replaced by the Flash movie, so add an &lt;h1&gt; into the &lt;body&gt;.</p>

<p>That should give you something along these lines:</p>

<pre><code>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot;
&quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;

&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot; lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;/&gt;
  &lt;title&gt;sIFR test&lt;/title&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/sifr.css&quot; type=&quot;text/css&quot; media=&quot;screen&quot; /&gt;
  &lt;script src=&quot;js/sifr.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;js/sifr-config.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;The Replacements&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>Save this file as <code>index.html</code> in the root of your sifr test folder. At this point, the contents of your site should look like figure 3.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/261-custom-web-fonts-with-sifr/mysite-index.jpg" alt="your test site structure" />
<p class="comment">Figure 3: The structure of your test site should look like this.</p>

<p>It&#39;s worth pointing out at this moment that in a real project you would probably already have an existing style sheet to style the &lt;h1&gt; in a desired way. Should anything go wrong with the rendering, or if the target device doesn&#39;t have Flash available (eg iPhone), a passable HTML/CSS style should be shown as a fallback. This CSS should be added before the <code>sifr.css</code> in your HTML, and it&#39;s important to keep the two CSS files completely separate, if only for your own sanity.</p>

<h2>Configuring sIFR</h2>

<p>There are two places where styling and setting sIFR information takes place. One is in the CSS file, which is fairly obvious, but the second is the <code>sifr-config.js</code> file. This file holds information that&#39;s passed to the Flash movie, not just CSS related variables, so it can include your more regular Flash type arguments, which we&#39;ll touch upon later on.</p>

<p>If you open up the supplied <code>sifr-config.js</code>, you&#39;ll see that there&#39;s a lot of text already in there. It&#39;s worth a read if you want to get more out of sIFR, but for the moment, we&#39;re only interested in replacing a few things, to get you used to how this works.</p>

<p>At about line 15, you&#39;ll see an uncommented bit of text, as follows:</p>

<pre><code>var futura = { src: &#39;/path/to/futura.swf&#39; };</code></pre>

<p>This is setting up the name of our sIFR font, and the relevant SWF location. It&#39;s just plain common sense to set the var as the name of our font, so later on, we know exactly what fonts we&#39;re turning on and configuring.</p>

<p>If you&#39;re using more than one font, you can create multiple copies of this line one after the other, with just the names and paths set as necessary.</p>

<p>Edit this to specify the path to your <code>font.swf</code> file. In my case, I&#39;m using Cooper Black, and it&#39;s in the /flash/ folder we looked at earlier, so mine is as follows:</p>

<pre><code>var vag_thin = { src: &#39;flash/cooper_black.swf&#39; };</code></pre>

<p>The next bit of uncommented text in the <code>sifr-config.js</code> is a command to activate sIFR, and it&#39;s pretty self-explanatory:</p>

<pre><code>sIFR.activate(futura);</code></pre>

<p>change it to suit your situation...for example mine would be this:</p>

<pre><code>sIFR.activate(cooper_black);</code></pre>

<p>If you want to use more than one font, you can activate them all in one go, by listing them in a comma-delimited list:</p>

<pre><code>sIFR.activate(cooper_black, futura, soho);</code></pre>

<p>The last bit of information we need to edit in this config is down at the very bottom. 
It&#39;s the instructions to pass variables into the Flash movie and affect how the Flash movie is rendered.</p>

<pre><code>sIFR.replace(futura, {
  selector: &#39;h1&#39;,
  css: &#39;.sIFR-root { background-color: #F9F9F9; color: #FF0000; }&#39;
});</code></pre>

<p>The instructions after <code>css:</code> are passed to the Flash movie as if it was reading a CSS file to style the text. So we can set a colour for the text and a background colour.</p>

<p>At an advanced level, we can pass Flash specific commands into the movie. For example, setting the Flash movie to be transparent &#x2014; useful if it sits over a patterned background &#x2014; or fine tune spacing by changing the offsets. These are things you can play with when you&#39;ve got the basics down, and a search around the <a href="http://wiki.novemberborn.net/sifr/">sIFR wiki online</a> will reveal a lot of variables that can be adjusted to suit. See Figure 4 for an example of a more advanced configuration.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/261-custom-web-fonts-with-sifr/advanced.jpg" alt="an advanced configuration inside the sifr config JS file" />
<p class="comment">Figure 4: An advanced configuration inside <code>sifr-config.js</code>.</p>

<p>So, going back to the code segment listed above, if I wanted to change this to accommodate my font, colouring it dark grey and sitting it atop a yellow background, I&#39;d change it to the following:</p>

<pre><code>sIFR.replace(cooper_black, {
  selector: &#39;h1&#39;,
  css: &#39;.sIFR-root { background-color: #fff300; color: #333333; }&#39;
});</code></pre>

<p>I can leave the selector as h1, because that&#39;s the element I want to affect. You can be very specific with the selector, targeting <code>#header h1</code> or <code>#wrapper h3.title</code> for example, if required. Remember, you can remove the background colour statement if you&#39;re not intent on changing it. This colours the actual Flash movie, not the element (our <code>h1</code>). You can colour that in the CSS.</p>

<p>Yes, that may seem confusing, but sIFR writes the Flash &lt;object&gt; inside the &lt;h1&gt; tag, hence you can style the two independently. See figure 5 for the live DOM view of the running example, shown inside Opera Dragonfly.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/261-custom-web-fonts-with-sifr/dragonfly.jpg" alt="The live DOM view showing the object element" />
<p class="comment">Figure 5: The live DOM view inside Opera Dragonfly, showing the <code>object</code> element.</p>

<p>These variables, while looking like CSS, are being passed to the Flash movie, so can include more than just colours and weights. You can set the background to transparent or change the font&#39;s offset to line it up better.</p>

<p>Save the <code>sifr-config.js</code> file - we&#39;re done with that for now.</p>

<h2>Adding some style</h2>

<p>Lastly, we need to change the CSS to include our desired replacement element. In the latest versions of sIFR3, they&#39;ve done all the heavy lifting for you, and given you a sample of what you need to edit to make your sIFR work a treat. This has come a long way from the early versions, and is a welcome addition.</p>

<p>Open <code>sifr.css</code>. At the bottom you should see a <code>@media screen</code> construct with curly braces, containing a commented out sample:</p>

<pre><code>.sIFR-active h1 {
    font-family: Verdana;
    visibility: hidden;
}</code></pre>

<p>Yes, I know it says <code>visibility: hidden;</code> - it needs to be left as such too. If it&#39;s not hidden, the HTML text can still be seen under or at the edges of the Flash movie. The font Verdana is used because it&#39;s one of the few fonts available on nearly every computer, meaning that we can be sure of seeing the same text sizing results across different browsers and platforms.
For my situation, I duplicated the rule and changed it to this:</p>

<pre><code>.sIFR-active h1 {
    font-family: Verdana;
    visibility: hidden;
    font-size: 24px;
}</code></pre>

<p>Within the CSS declaration, you can provide the font height, padding, spacing, borders and text-indenting. Colours are overwritten with your <code>sifr-config.js</code> settings. Remember, these apply to the element wrapping the <code>&lt;object&gt;</code> element being used to embed your Flash movie.</p>

<p class="note">Note: If you find your text is wrapping onto another line at strange points when it should all be on one line, increase the <code>text-indent</code> by 5px and try again, and repeat until you have success.  What&#39;s happening is that the JavaScript is trying to fit the Flash movie into the space your HTML text inhabited. Depending on your chosen font (say if it&#39;s a bold font), it may be too wide for this replacement width, and thus have to be broken up.</p>

<h2>The end result</h2>

<p>If you&#39;ve followed these instructions carefully, and have everything in place, browse to your HTML file running on your web server setup (http://localhost:8888/sIFR_test if you&#39;re running MAMP) and you&#39;ll see your <code>h1</code> element replaced with a yellow background running the width of the page and the text, in our chosen font, over on the left (see Figure 6 - this is zoomed in significantly)</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/261-custom-web-fonts-with-sifr/final.jpg" alt="The final display of the sifr rending inside the html" />
<p class="comment">Figure 6: The final display of the sIFR rending inside the HTML.</p>

<h3>Troubleshooting</h3>

<p>Either that, or you might have a completely blank screen. If this is the case, go back and check you&#39;ve linked to the <code>.js</code> and <code>.css</code> files correctly from your HTML, and that your <code>.js</code> file  has the right font activated. Try opening the <code>.swf</code> too, to see if you can read the default text.</p>

<p>Now, if you&#39;re feeling adventurous, you can start adding other elements that you want to display in a chosen font, an <code>h2</code> or a <code>blockquote</code> perhaps.</p>

<h2>Conclusion</h2>

<p>So, sIFR gives us a lot of power but remember, with great power comes great responsibility. Just because you can replace text with fancy fonts it doesn&#39;t mean you have to. We&#39;re using Flash, and lots of instances of Flash on the page at any one time will slow the speed of the users&#39; browsing experience. Do not, ever, sIFR replace body copy!</p>/p
