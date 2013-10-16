Title: Debugging SVG
----
Date: 2011-11-24 11:02:53
----
Lang: en
----
Author: 
----
License: Opera Software ASA
----
License_url: http://www.opera.com
----
Text:

<div id="content">
  <p> Opera 9 has a lot of new features to help developing content. Here is an example of debugging SVG. </p><p> The basic plan is to have an HTML page that has a clock in it. If you look at the <a href="operalabs_svg_clock_broken.svg"> broken clock </a> it simply doesn&#39;t appear due to bugs in the code. This might seem frustrasting, but it is a good reminder that you need to get at least the minimum right or browsers will have to include megabyutes of bug correction, and spend their developers&#39; time fixing authors&#39; bugs instead of making a better browser. </p><p><a href="error_console.gif"> <img alt="The error console; it&#39;s the idea that counts." src="http://forum-test.oslo.osa/kirby/content/articles/492-debugging-svg/error_console.gif" width="100%" /> </a></p><p> So what&#39;s wrong, and how do we fix it? First, let&#39;s check for warnings. Sure enough, if you open the Error Console (menu Tools » Advanced » Error Console) we get two messages. One is that there is a failed attribute in SVG – the value <code> “preserve” </code> for <code> preserveAspectRatio </code> isn&#39;t what the browser likes. Who is right here? Does Opera 9 even support <code> preserveAspectRatio </code> ? </p><p> Luckily, we can check that. Have a look at the table of <a href="http://www.opera.com/docs/specs/opera9/svg/"> Opera 9&#39;s supported SVG </a> elements, attributes, and DOM methods, and we see that <code> preserveAspectRatio </code> is supported. So it is likely that we have an error in our code. Either look for a tutorial on SVG, or look at the <a href="http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute"> specification </a> . Then we can see that there are various effects we can get. Since our clock makes sense so long as we can see the middle of it, looking at the pictures in the spec, or even from reading the text shows that we want to set the value as “ <code> XmidYMid slice </code> ”. </p><p> So now we know what we want to do, how do we change it? Easily enough... look at the source in Opera 9&#39;s built-in source editor. Make the edit we want in place. To check that it works, press “reload from cache”. If we were working on a locally saved file, this would save our version. When we have downloaded the page, we can also save a local copy (you guessed it, press the “save” button). </p><p> So that&#39;s the first error dealt with. There is also a JavaScript error – we have used <code> …Date()… </code> in the last statement of the script where we should have used <code> new Date()… </code> (or a variable, as earlier in the script). Opera actually works out how to make sense of this by forcing a type change, but good programming style is worth having, so we should make the second change too. </p><p>
    <object class="svg left" data="" type="image/svg+xml">
    </object> And Lo! and Behold! We have a <a href="operalabs_svg_clock.svg"> simple SVG clock </a> in our page. Being in a space that can&#39;t fit it exactly (the object where the clock is has width 20% and height 50%), we can at least see the middle of the clock and so tell the time… <div class="clear2">
  </div>
  </p><p>
    <br /><b> NOTE: </b> This article shows the features of Opera 9. While all the code is standards-compliant, it may not work in a non-compliant browser <br />
</p></div>

