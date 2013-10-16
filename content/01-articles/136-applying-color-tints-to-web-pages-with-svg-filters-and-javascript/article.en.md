Title: Applying color tints to web pages with SVG filters and JavaScript
----
Date: 2008-07-03 13:12:18
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

<p>In this article I will present to you a new experiment of mine—an application of SVG and JavaScript that allows you to re-color any web page you navigate to.
This has great uses—not only can it be used to make pages more accessible, but you can also use it to test different color schemes on a page on the fly.
The re-coloring functions are actually packaged up bookmarklets, contained in the article below—feel free to install these in your browser as buttons in the UI, or as bookmarks.</p>

<p>While I explain you how it works, you’ll learn about bookmarklets, <code>linearGradient</code>, <code>feColorMatrix</code> and <code>foreignObject</code>.</p>

<p>Note on browser support: The examples in this article will work in Opera 9.5+. <a href="https://bugs.opera.com/wizard/">Please report any bugs you find</a>; i’ve found the following:</p>

<ul>
	<li>Can’t drag the window scrollbar (#332880)</li>
	<li><code>svg:foreignObject</code>  displays badly when window is resized (#336280)</li>
</ul>

<h2>Gradients</h2>

<p>I once had a map with black, white and all shades of grey in between on it.
The “colors” represented the different temperature values,
and as I wanted to drive to the warmest place possible,
it was therefore important to be able to distinguish between the grey shades.
This is all well and good when you’ve only got 7 shades of grey to distinguish between, but the combination of my eyes and my screen however doesn’t allow me to tell apart 256 colors on a web page. Does yours? The SVG object below shows a grey gradient containing 256 shades of grey.</p>

<p><object data="" style="border:none;height:30px;">black to white gradient</object></p>

<p>The code to create this is as follows:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; standalone=&quot;no&quot;?&gt;
&lt;!DOCTYPE svg PUBLIC &quot;-//W3C//DTD SVG 1.1//EN&quot; &quot;http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd&quot;&gt;
&lt;svg viewBox=&quot;0 0 256 25&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
    &lt;defs&gt;
        <b>&lt;linearGradient id=&quot;MyGradient&quot;&gt;</b>
            &lt;stop offset=&quot;0%&quot; stop-color=&quot;<b>black</b>&quot;/&gt;
            &lt;stop offset=&quot;100%&quot; stop-color=&quot;<b>white</b>&quot;/&gt;
        &lt;/linearGradient&gt;
    &lt;/defs&gt;
    <b>&lt;rect fill=&quot;url(#MyGradient)&quot;</b> stroke-width=&quot;0&quot; width=&quot;256&quot; height=&quot;25&quot;/&gt;
&lt;/svg&gt;</code></pre>

<p>I thought maybe it would be easier to distinguish between shades of red, green or blue. Testing with only my own eyes shows that distinguishability between neighboring colors
is highest in a gradient depending on where in the minimum/maximum range the colors fall (sometimes I prefer red, sometimes green, sometimes blue).
What do you think? The below SVG objects show different red, green, and blue gradients.</p>

<p><object data="" style="border:none;height:30px;">black to red gradient</object></p>
<p><object data="" style="border:none;height:30px;">black to green gradient</object></p>
<p><object data="" style="border:none;height:30px;">black to blue gradient</object></p>

<h2>feColorMatrix</h2>
<p>In the above 3 color gradients I am actually still showing the grey gradient you saw earlier, but I am using <code>feColorMatrix</code> to re-color it.
The code to do this looks like so (this only shows the code for the red above example—the code for each is the same except for differing color matrix values):</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; standalone=&quot;no&quot;?&gt;
&lt;!DOCTYPE svg PUBLIC &quot;-//W3C//DTD SVG 1.1//EN&quot;  &quot;http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd&quot;&gt;
&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; version=&quot;1.1&quot; width=&quot;100%&quot; height=&quot;100%&quot;&gt;
    &lt;defs&gt;
        <b>&lt;filter id=&quot;myFilter&quot;</b>color-interpolation-filters=&quot;sRGB&quot;&gt;
            <i>&lt;!-- without the above interpolation setting halving a color with the filter doesn&#39;t mean halving its numerical value,
                 if this doesn&#39;t make sense, try the SVG spec. --&gt;</i>
            <b>&lt;feColorMatrix id=&quot;myFilterElement&quot; values=&quot;1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0&quot;</b>
                x=&quot;0&quot; y=&quot;0&quot; width=&quot;100%&quot; height=&quot;100%&quot; in=&quot;sourceGraphic&quot; type=&quot;matrix&quot; result=&quot;ColorMatrix&quot;/&gt; 
        &lt;/filter&gt;
    &lt;/defs&gt;
    &lt;g <b>filter=&quot;url(#myFilter)&quot;</b> image-rendering=&quot;optimizeSpeed&quot;&gt;
        <i>&lt;!-- the attributes of the group could in theory be put on the foreignObject directly,
             but not with the Opera implementation I tested it on --&gt;</i>
        <b>&lt;foreignObject xlink:href=&quot;shadesOfGrey.svg&quot;</b> id=&quot;myForeignObject&quot; width=&quot;100%&quot; height=&quot;100%&quot;/&gt;
    &lt;/g&gt;
&lt;/svg&gt;</code></pre>

<p>(instead of using <code>foreignObject</code>,
I could have instead used a different one from <a href="http://svgopen.org/2007/papers/abstract3/index.html#S2.1">the collection of external references</a>*, but my choice will become clear as you read on.)</p>

<p>Using <code>feColorMatrix</code> filtering basically results in every component of the resulting color being a linear function of all the components of the original color. 
Here both the input and output color components are taken as fractions of the maximum. Full opaque pure red for example is <code>(r=1,g=0,b=0,a=1)</code>.</p>

<p>The formula for one component is as follows:</p>

<p><code>Red_result= Rr*Red_original + Rg*Green_original + Rb*Blue_original + Ra*Alpha_original + R1.</code></p>

<p>This stated, you can define <code>feColorMatrix</code>’s “values” attribute like so:</p>

<p><code>Rr Rg Rb Ra R1 Gr Gg Gb Ga G1 Br Bg Bb Ba B1 Ar Ag Ab Aa A1</code></p>

<p>What applications does this technique have? One is fun: imagine shooting a picture or video with your mobile and instantly showing an alien version to your friends, with the colors all shifted?</p>

<p>Or you could make a photobook with the photos made black-and-white for a nostalgic feel (there is a <a href="http://dev.opera.com/articles/view/svg-evolution-3-applying-polish/?page=3">Photo gallery example available on dev.opera.com</a> that you could modify). Instead, you could put this technique to more serious uses. I’ll look at one now.</p>

<h2>Accessibility</h2>
<p>I got interested in color contrast and, after some Googlin’, <a href="http://en.wikipedia.org/wiki/Color_blindness" title="Wikipedia entry on Color blindness">read about color blindness</a> and learned that:</p>
<ul>
<li>About 10% of men (and a lot less women), have some sort of color blindness.</li>
<li>There are many kinds of color blindness, including insensitivities to different (but rarely all) color components.</li>
</ul>

<p>On pages with bad contrast (for example <span style="color:yellow;">yellow text on white background</span>) I often select all text using the browser’s own <code>select All</code> (which you can usually call with Ctrl + A on Windows and Command + A on Mac). This however doesn’t help with <img src="http://forum-test.oslo.osa/kirby/content/articles/136-applying-color-tints-to-web-pages-with-svg-filters-and-javascript/YellowTe.png" alt="low contrast images" style="vertical-align:text-top;" />. <code>feColorMatrix</code> is a nice alternative that can help improve contrast on the whole page, not just text.</p>

<p>I imposed the following constraints on my design:</p>

<ul>
	<li>The number of colors should stay the same, so nothing disappears.</li>
	<li>color values stay the same relative distance apart on the color spectrum, so you can recognize the original picture in the result.</li>
</ul>
<p>This leaves the following subset of <code>feColorMatrix</code> operations available to use (giving, including the original, 8 x 6 = 48 color schemes):</p>
<ul>
<li>swap color channels (3*2*1=6 options: rgb, rbg, grb, gbr, brg, bgr)</li>
<li>flip the minimum/maximum for a channel (2 x 2 x 2 = 8 options: rgb, rgB, rGb, rGB, Rgb, RgB, RGb, RGB)—this would be equivalent to a left/right flip on the gradients I started the article with.</li>
</ul>

<p>For those that are curious about the mathematics, I’ll explain how flipping the minimum/maximum for a color component works—basically it’s the multi-dimensional version of x becomes 1-x :</p>

<p><code>Red_result<strong>_new</strong> = <strong>(-1)*</strong>Rr_old*Red_original + <strong>(-1)*</strong>Rg_old*Green_original + <strong>(-1)*</strong>Rb_old*Blue_original + <strong>(-1)*</strong>Ra_old*Alpha_original + <strong>(-1)*</strong>R1<strong>+1</strong></code>
</p>


<p>But surely it is too difficult to use? Instead of hitting a keyboard shortcut, this requires creation of an SVG file, and some more coding besides, so how can we implement this in a way that is usable by non-technical people?  After pondering this for a while, I decided on using bookmarklets.</p>


<h2>Bookmarklets</h2>

<p>Bookmarklets are bookmarks containing a piece of script—the script is executed when you click on the link. For example, try putting the following code inside the <code>href</code> attribute of a link, click it, and see what the effect is:</p>

<pre><code>javascript:alert(&#39;the%20address%20of%20this%20page%20is:\n\n&#39;+location.href);</code></pre>

<p><a href="bookmarklet1.html">Try bookmarklet example 1</a></p>

<p>Because of <a href="http://www.w3schools.com/TAGS/ref_urlencode.asp">URL-encoding</a>, the spaces in the above code are escaped as “%20”—before encoding you need to bring back your script to one line and also prevent a return value. 
If you want you can learn specifics, but I just use <a href="http://subsimple.com/bookmarklets/jsbuilder.htm">the Sub Simple bookmarklet builder form</a> to do it for me. Simply copy your JavaScript (with the <code>javascript:</code> protocol that prefixes it) into the form, press “format” (this also checks for errors), then “compress” and finally “function”.</p>

<p>If you bookmark this link, it will become a so-called bookmarklet, and you can then call it to run on any page form your bookmarks menu. If you place it on a browser bar, it effectively becomes a browser button.</p>
<p>Now let’s look at how to use <code>feColorMatrix</code> inside a bookmarklet. </p>

<h2>How it works</h2>

<p>First let&#39;s look at the example in action. Put the script below into a link, like you did before with the previous bookmarket example, change the <code>feColorMatrix</code> values that appear in the resulting alert box, and press OK/Enter (<a href="bookmarklet2.html">Try this 2nd example live here</a>).The script basically redirects you to an SVG file and sends the document title and address of the original file, plus the <code>feColorMatrix</code> values along as variables in the URL.</p>

<pre><code>var <strong>baseURL=&quot;http://steltenpower.com/feColorMatrix.svg&quot;;</strong>
var values;
if (location.href.substr(0,baseURL.length)==baseURL){
    values=document.getElementById(&quot;myFilterElement&quot;).getAttribute(&quot;values&quot;);
}else{
    values=&quot;&quot;;
}
var defaultValues;
if (values===&quot;&quot;){
    defaultValues=&quot;1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0&quot;;
}else{
    defaultValues=values;
}
var newValues = prompt(&quot;matrix values for feColorMatrix please&quot;,defaultValues);
if (newValues!=defaultValues){
    if (values===&quot;&quot;){
        <strong>location.assign(baseURL+&quot;?uri=&quot;+escape(location.href)+&quot;&amp;amp;values=&quot;+escape(newValues)+&quot;&amp;amp;title=&quot;+escape(document.title));</strong>
    }else{
        document.getElementById(&quot;myFilterElement&quot;).setAttribute(&quot;values&quot;,newValues);
    }
}</code></pre>

<p>The SVG file that the script redirects to contains JavaScript that takes the variables from the URL and uses them in setting the color parameters. This SVG file looks like so:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; standalone=&quot;no&quot;?&gt;
&lt;!DOCTYPE svg PUBLIC &quot;-//W3C//DTD SVG 1.1//EN&quot;  &quot;http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd&quot;&gt;
&lt;svg <strong>onload=&quot;setValues()&quot;</strong> width=&quot;100%&quot; height=&quot;100%&quot; version=&quot;1.1&quot;
        xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;&gt;
    &lt;title&gt;title as page that is recolored&lt;/title&gt;
    &lt;script type=&quot;text/ecmascript&quot;&gt; &lt;![CDATA[
        function setValues(){
             var <strong>here=location.href;</strong>
             var <strong>getString=here.substr(here.indexOf(&quot;?&quot;)+1);</strong>
             var <strong>pairs=getString.split(&quot;&amp;&quot;);</strong>
             var pair;
             var value;
             var uri;
             for (var i=0;i&lt;3;i++){
                 <strong>pair=pairs[i].split(&quot;=&quot;);</strong>
                 <strong>value=unescape(pair[1]);  <em>// reverse of previous code (URL encoding: e.g. &quot; &quot; is &quot;%20&quot; in URL)</em></strong>
                 switch(pair[0]){
                     case &quot;title&quot;:
                         document.getElementsByTagNameNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;title&quot;)[0].firstChild.nodeValue=value;
                         break;
                     case &quot;values&quot;:
                         <strong>document.getElementById(&quot;myFilterElement&quot;).setAttributeNS(null,&quot;values&quot;,value);</strong>
                         break;
                     case &quot;uri&quot;:
                         uri=value;
                         break;
                 }
             }
             document.getElementById(&quot;myForeignObject&quot;).setAttributeNS(&quot;http://www.w3.org/1999/xlink&quot;,&quot;href&quot;,uri);		
             <i>// this is done last to prevent seeing the original un-re-colored page first for a bit</i>
        }
    ]]&gt; &lt;/script&gt;
    &lt;defs&gt;
        &lt;filter id=&quot;myFilter&quot; color-interpolation-filters=&quot;sRGB&quot;&gt;
            <em>&lt;!-- without the above interpolation setting halving a color with the filter doesn&#39;t mean halving its numerical value in RGB space. --&gt;</em>
            &lt;feColorMatrix id=&quot;myFilterElement&quot; values=&quot;1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0&quot;
                   x=&quot;0&quot; y=&quot;0&quot; width=&quot;100%&quot; height=&quot;100%&quot; in=&quot;sourceGraphic&quot; type=&quot;matrix&quot; result=&quot;ColorMatrix&quot;/&gt; 
        &lt;/filter&gt;
    &lt;/defs&gt;
    &lt;g filter=&quot;url(#myFilter)&quot; image-rendering=&quot;optimizeSpeed&quot;&gt;
		<em>&lt;!-- the attributes of the group could in theory be put on the foreignObject directly, but not with the Opera implementation I tested it on --&gt;</em>
        &lt;foreignObject id=&quot;myForeignObject&quot; xlink:href=&quot;&quot; width=&quot;100%&quot; height=&quot;100%&quot;/&gt;
    &lt;/g&gt;
&lt;/svg&gt;</code></pre>

<h2>Some usability thoughts</h2>

<p>So this is working quite nicely, but there’s a usabillity issue here—the <code>feColorMatrix</code> values you have to calculate and type to choose a color value aren’t exactly easy to comprehend for most people.
Therefore I have also coded the flip and swap operations into bookmarklets. Try <a href="bookmarklet3.htmL">bookmarklet example 3</a>.</p>


<p style="font-weight:bold;">flip <span style="background-color:red;">red</span>, <span style="background-color:green;">green</span>, or <span style="background-color:blue;">blue</span></p>

<p>The full code for this is as follows:</p>

<pre><code>var baseURL=&quot;http://steltenpower.com/feColorMatrix.svg&quot;;
var values;
if (location.href.substr(0,baseURL.length)==baseURL){
	values=document.getElementById(&quot;myFilterElement&quot;).getAttribute(&quot;values&quot;);
}else{
	values=&quot;&quot;;
}
var defaultValues;
if (values===&quot;&quot;){
	defaultValues=&quot;1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0&quot;;
}else{
	defaultValues=values;
}
var valuesComponents = defaultValues.split(&quot; &quot;);
for(var i=0;i&lt;5;i++){
	valuesComponents[<span style="background-color:green;">5+</span><span style="background-color:blue;">10+</span>i]=-valuesComponents[<span style="background-color:green;">5+</span><span style="background-color:blue;">10+</span>i];
}	
valuesComponents[<span style="background-color:red;">4</span><span style="background-color:green;">9</span><span style="background-color:blue;">14</span>]+=1;
var newValues=valuesComponents[0];
for(var j=2;j&lt;=20;j++){
	newValues=newValues+&quot; &quot;+valuesComponents[j-1];
}
if (values===&quot;&quot;){
	location.href=baseURL+&quot;?uri=&quot;+escape(location.href)+&quot;&amp;amp;values=&quot;+escape(newValues)+&quot;&amp;amp;title=&quot;+escape(document.title);
}else{
	document.getElementById(&quot;myFilterElement&quot;).setAttribute(&quot;values&quot;,newValues);
}</code></pre>

<p style="font-weight:bold;">swap <span style="background-color:red;color:green;">red and green</span>, or <span style="background-color:green;color:blue;">green and blue</span>, or <span style="background-color:blue;color:red;">blue and red</span>.</p>

<p>The full code for this is as follows:</p>

<pre><code>var baseURL=&quot;http://steltenpower.com/feColorMatrix.svg&quot;;
var values;
if (location.href.substr(0,baseURL.length)==baseURL){
	values=document.getElementById(&quot;myFilterElement&quot;).getAttribute(&quot;values&quot;);
}else{
	values=&quot;&quot;;
}
var defaultValues;
if (values===&quot;&quot;){
	defaultValues=&quot;1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0&quot;;
}else{
	defaultValues=values;
}
var valuesComponents = defaultValues.split(&quot; &quot;);
var temp;
for(var i=0;i&lt;=4;i++){
	temp=valuesComponents[<span style="background-color:green;color:blue;">5+</span><span style="background-color:blue;color:red;">10+</span>i];
	valuesComponents[<span style="background-color:green;color:blue;">5+</span><span style="background-color:blue;color:red;">10+</span>i]=valuesComponents[<span style="background-color:red;color:green;">5+</span><span style="background-color:green;color:blue;">10+</span>i];
	valuesComponents[<span style="background-color:red;color:green;">5+</span><span style="background-color:green;color:blue;">10+</span>i]=temp;
}
var newValues=valuesComponents[0];
for(i=2;i&lt;=20;i++){
	newValues=newValues+&quot; &quot;+valuesComponents[i-1];
}
if (values===&quot;&quot;){
	location.href=baseURL+&quot;?uri=&quot;+escape(location.href)+&quot;&amp;amp;values=&quot;+escape(newValues)+&quot;&amp;amp;title=&quot;+escape(document.title);
}else{
	document.getElementById(&quot;myFilterElement&quot;).setAttribute(&quot;values&quot;,newValues);
}</code></pre>

<p>Now try them out and see what happens to the colors below.</p>

<table style="font-size:85%;"><tr>
      <td style="color:white;background-color:#000000;padding-left:1.8em;">black = 0, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#000033;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#000066;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0, 102</td>
      <td style="color:white;background-color:#000099;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0, 153</td>
      <td style="color:white;background-color:#0000cc;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0, 204</td>
      <td style="color:white;background-color:#0000ff;padding-left:2.3em;">blue = 0, &#xA0;&#xA0;&#xA0;&#xA0;0, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#003300;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#003333;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#003366;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51, 102</td>
      <td style="color:white;background-color:#003399;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51, 153</td>
      <td style="color:white;background-color:#0033cc;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51, 204</td>
      <td style="color:white;background-color:#0033ff;">&#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#006600;">&#xA0;&#xA0;&#xA0;&#xA0;0, 102, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#006633;">&#xA0;&#xA0;&#xA0;&#xA0;0, 102, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#006666;">&#xA0;&#xA0;&#xA0;&#xA0;0, 102, 102</td>
      <td style="color:white;background-color:#006699;">&#xA0;&#xA0;&#xA0;&#xA0;0, 102, 153</td>
      <td style="color:white;background-color:#0066cc;">&#xA0;&#xA0;&#xA0;&#xA0;0, 102, 204</td>
      <td style="color:white;background-color:#0066ff;">&#xA0;&#xA0;&#xA0;&#xA0;0, 102, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#009900;">&#xA0;&#xA0;&#xA0;&#xA0;0, 153, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#009933;">&#xA0;&#xA0;&#xA0;&#xA0;0, 153, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#009966;">&#xA0;&#xA0;&#xA0;&#xA0;0, 153, 102</td>
      <td style="background-color:#009999;">&#xA0;&#xA0;&#xA0;&#xA0;0, 153, 153</td>
      <td style="background-color:#0099cc;">&#xA0;&#xA0;&#xA0;&#xA0;0, 153, 204</td>
      <td style="background-color:#0099ff;">&#xA0;&#xA0;&#xA0;&#xA0;0, 153, 255</td>
    </tr><tr>
      <td style="background-color:#00cc00;">&#xA0;&#xA0;&#xA0;&#xA0;0, 204, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#00cc33;">&#xA0;&#xA0;&#xA0;&#xA0;0, 204, &#xA0;&#xA0;51</td>
      <td style="background-color:#00cc66;">&#xA0;&#xA0;&#xA0;&#xA0;0, 204, 102</td>
      <td style="background-color:#00cc99;">&#xA0;&#xA0;&#xA0;&#xA0;0, 204, 153</td>
      <td style="background-color:#00cccc;">&#xA0;&#xA0;&#xA0;&#xA0;0, 204, 204</td>
      <td style="background-color:#00ccff;">&#xA0;&#xA0;&#xA0;&#xA0;0, 204, 255</td>
    </tr><tr>
      <td style="background-color:#00ff00;padding-left:1.9em;">green = 0, 255, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#00ff33;">&#xA0;&#xA0;&#xA0;&#xA0;0, 255, &#xA0;&#xA0;51</td>
      <td style="background-color:#00ff66;">&#xA0;&#xA0;&#xA0;&#xA0;0, 255, 102</td>
      <td style="background-color:#00ff99;">&#xA0;&#xA0;&#xA0;&#xA0;0, 255, 153</td>
      <td style="background-color:#00ffcc;">&#xA0;&#xA0;&#xA0;&#xA0;0, 255, 204</td>
      <td style="background-color:#00ffff;padding-left:2.2em;">aqua = 0, 255, 255</td>
    </tr>
    <tr>
      <td style="color:white;background-color:#330000;">&#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#330033;">&#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#330066;">&#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0, 102</td>
      <td style="color:white;background-color:#330099;">&#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0, 153</td>
      <td style="color:white;background-color:#3300cc;">&#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0, 204</td>
      <td style="color:white;background-color:#3300ff;">&#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#333300;">&#xA0;&#xA0;51, &#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#333333;">&#xA0;&#xA0;51, &#xA0;&#xA0;51, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#333366;">&#xA0;&#xA0;51, &#xA0;&#xA0;51, 102</td>
      <td style="color:white;background-color:#333399;">&#xA0;&#xA0;51, &#xA0;&#xA0;51, 153</td>
      <td style="color:white;background-color:#3333cc;">&#xA0;&#xA0;51, &#xA0;&#xA0;51, 204</td>
      <td style="color:white;background-color:#3333ff;">&#xA0;&#xA0;51, &#xA0;&#xA0;51, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#336600;">&#xA0;&#xA0;51, 102, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#336633;">&#xA0;&#xA0;51, 102, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#336666;">&#xA0;&#xA0;51, 102, 102</td>
      <td style="color:white;background-color:#336699;">&#xA0;&#xA0;51, 102, 153</td>
      <td style="color:white;background-color:#3366cc;">&#xA0;&#xA0;51, 102, 204</td>
      <td style="color:white;background-color:#3366ff;">&#xA0;&#xA0;51, 102, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#339900;">&#xA0;&#xA0;51, 153, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#339933;">&#xA0;&#xA0;51, 153, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#339966;">&#xA0;&#xA0;51, 153, 102</td>
      <td style="background-color:#339999;">&#xA0;&#xA0;51, 153, 153</td>
      <td style="background-color:#3399cc;">&#xA0;&#xA0;51, 153, 204</td>
      <td style="background-color:#3399ff;">&#xA0;&#xA0;51, 153, 255</td>
    </tr><tr>
      <td style="background-color:#33cc00;">&#xA0;&#xA0;51, 204, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#33cc33;">&#xA0;&#xA0;51, 204, &#xA0;&#xA0;51</td>
      <td style="background-color:#33cc66;">&#xA0;&#xA0;51, 204, 102</td>
      <td style="background-color:#33cc99;">&#xA0;&#xA0;51, 204, 153</td>
      <td style="background-color:#33cccc;">&#xA0;&#xA0;51, 204, 204</td>
      <td style="background-color:#33ccff;">&#xA0;&#xA0;51, 204, 255</td>
    </tr><tr>
      <td style="background-color:#33ff00;">&#xA0;&#xA0;51, 255, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#33ff33;">&#xA0;&#xA0;51, 255, &#xA0;&#xA0;51</td>
      <td style="background-color:#33ff66;">&#xA0;&#xA0;51, 255, 102</td>
      <td style="background-color:#33ff99;">&#xA0;&#xA0;51, 255, 153</td>
      <td style="background-color:#33ffcc;">&#xA0;&#xA0;51, 255, 204</td>
      <td style="background-color:#33ffff;">&#xA0;&#xA0;51, 255, 255</td>
    </tr>
    <tr>
      <td style="color:white;background-color:#660000;">102, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#660033;">102, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#660066;">102, &#xA0;&#xA0;&#xA0;&#xA0;0, 102</td>
      <td style="color:white;background-color:#660099;">102, &#xA0;&#xA0;&#xA0;&#xA0;0, 153</td>
      <td style="color:white;background-color:#6600cc;">102, &#xA0;&#xA0;&#xA0;&#xA0;0, 204</td>
      <td style="color:white;background-color:#6600ff;">102, &#xA0;&#xA0;&#xA0;&#xA0;0, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#663300;">102, &#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#663333;">102, &#xA0;&#xA0;51, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#663366;">102, &#xA0;&#xA0;51, 102</td>
      <td style="color:white;background-color:#663399;">102, &#xA0;&#xA0;51, 153</td>
      <td style="color:white;background-color:#6633cc;">102, &#xA0;&#xA0;51, 204</td>
      <td style="color:white;background-color:#6633ff;">102, &#xA0;&#xA0;51, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#666600;">102, 102, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#666633;">102, 102, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#666666;">102, 102, 102</td>
      <td style="color:white;background-color:#666699;">102, 102, 153</td>
      <td style="color:white;background-color:#6666cc;">102, 102, 204</td>
      <td style="color:white;background-color:#6666ff;">102, 102, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#669900;">102, 153, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#669933;">102, 153, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#669966;">102, 153, 102</td>
      <td style="background-color:#669999;">102, 153, 153</td>
      <td style="background-color:#6699cc;">102, 153, 204</td>
      <td style="background-color:#6699ff;">102, 153, 255</td>
    </tr><tr>
      <td style="background-color:#66cc00;">102, 204, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#66cc33;">102, 204, &#xA0;&#xA0;51</td>
      <td style="background-color:#66cc66;">102, 204, 102</td>
      <td style="background-color:#66cc99;">102, 204, 153</td>
      <td style="background-color:#66cccc;">102, 204, 204</td>
      <td style="background-color:#66ccff;">102, 204, 255</td>
    </tr><tr>
      <td style="background-color:#66ff00;">102, 255, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#66ff33;">102, 255, &#xA0;&#xA0;51</td>
      <td style="background-color:#66ff66;">102, 255, 102</td>
      <td style="background-color:#66ff99;">102, 255, 153</td>
      <td style="background-color:#66ffcc;">102, 255, 204</td>
      <td style="background-color:#66ffff;">102, 255, 255</td>
    </tr>
    <tr>
      <td style="color:white;background-color:#990000;">153, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#990033;">153, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#990066;">153, &#xA0;&#xA0;&#xA0;&#xA0;0, 102</td>
      <td style="color:white;background-color:#990099;">153, &#xA0;&#xA0;&#xA0;&#xA0;0, 153</td>
      <td style="color:white;background-color:#9900cc;">153, &#xA0;&#xA0;&#xA0;&#xA0;0, 204</td>
      <td style="color:white;background-color:#9900ff;">153, &#xA0;&#xA0;&#xA0;&#xA0;0, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#993300;">153, &#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#993333;">153, &#xA0;&#xA0;51, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#993366;">153, &#xA0;&#xA0;51, 102</td>
      <td style="color:white;background-color:#993399;">153, &#xA0;&#xA0;51, 153</td>
      <td style="color:white;background-color:#9933cc;">153, &#xA0;&#xA0;51, 204</td>
      <td style="color:white;background-color:#9933ff;">153, &#xA0;&#xA0;51, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#996600;">153, 102, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#996633;">153, 102, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#996666;">153, 102, 102</td>
      <td style="background-color:#996699;">153, 102, 153</td>
      <td style="background-color:#9966cc;">153, 102, 204</td>
      <td style="background-color:#9966ff;">153, 102, 255</td>
    </tr><tr>
      <td style="background-color:#999900;">153, 153, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#999933;">153, 153, &#xA0;&#xA0;51</td>
      <td style="background-color:#999966;">153, 153, 102</td>
      <td style="background-color:#999999;">153, 153, 153</td>
      <td style="background-color:#9999cc;">153, 153, 204</td>
      <td style="background-color:#9999ff;">153, 153, 255</td>
    </tr><tr>
      <td style="background-color:#99cc00;">153, 204, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#99cc33;">153, 204, &#xA0;&#xA0;51</td>
      <td style="background-color:#99cc66;">153, 204, 102</td>
      <td style="background-color:#99cc99;">153, 204, 153</td>
      <td style="background-color:#99cccc;">153, 204, 204</td>
      <td style="background-color:#99ccff;">153, 204, 255</td>
    </tr><tr>
      <td style="background-color:#99ff00;">153, 255, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#99ff33;">153, 255, &#xA0;&#xA0;51</td>
      <td style="background-color:#99ff66;">153, 255, 102</td>
      <td style="background-color:#99ff99;">153, 255, 153</td>
      <td style="background-color:#99ffcc;">153, 255, 204</td>
      <td style="background-color:#99ffff;">153, 255, 255</td>
    </tr>
    <tr>
      <td style="color:white;background-color:#cc0000;">204, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#cc0033;">204, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#cc0066;">204, &#xA0;&#xA0;&#xA0;&#xA0;0, 102</td>
      <td style="color:white;background-color:#cc0099;">204, &#xA0;&#xA0;&#xA0;&#xA0;0, 153</td>
      <td style="color:white;background-color:#cc00cc;">204, &#xA0;&#xA0;&#xA0;&#xA0;0, 204</td>
      <td style="color:white;background-color:#cc00ff;">204, &#xA0;&#xA0;&#xA0;&#xA0;0, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#cc3300;">204, &#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#cc3333;">204, &#xA0;&#xA0;51, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#cc3366;">204, &#xA0;&#xA0;51, 102</td>
      <td style="color:white;background-color:#cc3399;">204, &#xA0;&#xA0;51, 153</td>
      <td style="color:white;background-color:#cc33cc;">204, &#xA0;&#xA0;51, 204</td>
      <td style="color:white;background-color:#cc33ff;">204, &#xA0;&#xA0;51, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#cc6600;">204, 102, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#cc6633;">204, 102, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#cc6666;">204, 102, 102</td>
      <td style="background-color:#cc6699;">204, 102, 153</td>
      <td style="background-color:#cc66cc;">204, 102, 204</td>
      <td style="background-color:#cc66ff;">204, 102, 255</td>
    </tr><tr>
      <td style="background-color:#cc9900;">204, 153, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#cc9933;">204, 153, &#xA0;&#xA0;51</td>
      <td style="background-color:#cc9966;">204, 153, 102</td>
      <td style="background-color:#cc9999;">204, 153, 153</td>
      <td style="background-color:#cc99cc;">204, 153, 204</td>
      <td style="background-color:#cc99ff;">204, 153, 255</td>
    </tr><tr>
      <td style="background-color:#cccc00;">204, 204, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#cccc33;">204, 204, &#xA0;&#xA0;51</td>
      <td style="background-color:#cccc66;">204, 204, 102</td>
      <td style="background-color:#cccc99;">204, 204, 153</td>
      <td style="background-color:#cccccc;">204, 204, 204</td>
      <td style="background-color:#ccccff;">204, 204, 255</td>
    </tr><tr>
      <td style="background-color:#ccff00;">204, 255, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#ccff33;">204, 255, &#xA0;&#xA0;51</td>
      <td style="background-color:#ccff66;">204, 255, 102</td>
      <td style="background-color:#ccff99;">204, 255, 153</td>
      <td style="background-color:#ccffcc;">204, 255, 204</td>
      <td style="background-color:#ccffff;">204, 255, 255</td>
    </tr>
    <tr>
      <td style="color:white;background-color:#ff0000;padding-left:1.3em;">red = 255, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#ff0033;">255, &#xA0;&#xA0;&#xA0;&#xA0;0, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#ff0066;">255, &#xA0;&#xA0;&#xA0;&#xA0;0, 102</td>
      <td style="color:white;background-color:#ff0099;">255, &#xA0;&#xA0;&#xA0;&#xA0;0, 153</td>
      <td style="color:white;background-color:#ff00cc;">255, &#xA0;&#xA0;&#xA0;&#xA0;0, 204</td>
      <td style="color:white;background-color:#ff00ff;padding-left:0.1em;">fuchsia = 255, &#xA0;&#xA0;&#xA0;&#xA0;0, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#ff3300;">255, &#xA0;&#xA0;51, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#ff3333;">255, &#xA0;&#xA0;51, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#ff3366;">255, &#xA0;&#xA0;51, 102</td>
      <td style="color:white;background-color:#ff3399;">255, &#xA0;&#xA0;51, 153</td>
      <td style="color:white;background-color:#ff33cc;">255, &#xA0;&#xA0;51, 204</td>
      <td style="color:white;background-color:#ff33ff;">255, &#xA0;&#xA0;51, 255</td>
    </tr><tr>
      <td style="color:white;background-color:#ff6600;">255, 102, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="color:white;background-color:#ff6633;">255, 102, &#xA0;&#xA0;51</td>
      <td style="color:white;background-color:#ff6666;">255, 102, 102</td>
      <td style="background-color:#ff6699;">255, 102, 153</td>
      <td style="background-color:#ff66cc;">255, 102, 204</td>
      <td style="background-color:#ff66ff;">255, 102, 255</td>
    </tr><tr>
      <td style="background-color:#ff9900;">255, 153, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#ff9933;">255, 153, &#xA0;&#xA0;51</td>
      <td style="background-color:#ff9966;">255, 153, 102</td>
      <td style="background-color:#ff9999;">255, 153, 153</td>
      <td style="background-color:#ff99cc;">255, 153, 204</td>
      <td style="background-color:#ff99ff;">255, 153, 255</td>
    </tr><tr>
      <td style="background-color:#ffcc00;">255, 204, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#ffcc33;">255, 204, &#xA0;&#xA0;51</td>
      <td style="background-color:#ffcc66;">255, 204, 102</td>
      <td style="background-color:#ffcc99;">255, 204, 153</td>
      <td style="background-color:#ffcccc;">255, 204, 204</td>
      <td style="background-color:#ffccff;">255, 204, 255</td>
    </tr><tr>
      <td style="background-color:#ffff00;padding-left:0.1em;">yellow = 255, 255, &#xA0;&#xA0;&#xA0;&#xA0;0</td>
      <td style="background-color:#ffff33;">255, 255, &#xA0;&#xA0;51</td>
      <td style="background-color:#ffff66;">255, 255, 102</td>
      <td style="background-color:#ffff99;">255, 255, 153</td>
      <td style="background-color:#ffffcc;">255, 255, 204</td>
      <td style="background-color:#ffffff;padding-left:0.5em;">white = 255, 255, 255</td>
    </tr>
</table>

<h2>Conclusion</h2>

<p>One of the advantages of SVG is that it seamlessly cooperates with other open webstandards—this fact alone made this experiment far easier.
I hope I’ve inspired you to create many more applications and experiments using SVG.
Ideas, examples and funny recolorings are welcome in the comments for this article, as are possible bug reports and other comments. I’d like to leave you with the following image—a vision of an alternate reality perhaps?</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/136-applying-color-tints-to-web-pages-with-svg-filters-and-javascript/GreenOpera.gif" alt="Opera has gone green" /></p>

<h2>Reader challenges</h2>

<p>Now it’s time to set you some challenges:</p>
<ul><li>Who can code a bookmarklet that loops through all 48 color schemes, first? (I wonder who will go bananas, you or your browser?) Every n=prompt seconds or every link-click?</li>
<li>Do the same as the above request, but now show all color schemes simultaneously instead of looping: a massive time saver for web designers.</li>
<li>Code a (GreaseMonkey kind of?) script that flips color channels for a different version of <a href="http://ecoiron.blogspot.com/2007/08/history-in-january-2007-mark-ontkush.html">background color-based energy saving</a></li>
</ul>

<p>*: This is part of the same <a href="http://svgopen.org/">SVG Open presentation</a> in which Erik Dahlstr&#xF6;m inspired me to write this article by showing <a href="http://youtube.com/watch?v=mPw0WNrBWuY&amp;amp;feature=related">SVG filters applied to video</a>. You can also get inspired at this year’s edition of <a href="http://steltenpower.com/feColorMatrix.svg?uri=http%3A//svgopen.org/2008/index.php&amp;amp;values=0%200%20-1%200%201%200%20-1%200%200%201%20-1%200%200%200%201%200%200%200%201%200&amp;amp;title=SVG%20Open%202008%20-%20SVG%20Open%202008%20%3E%20Start">SVG Open</a> (re-coloring applied :-) )</p>
