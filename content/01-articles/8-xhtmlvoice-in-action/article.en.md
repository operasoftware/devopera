Title: XHTML+Voice in Action
----
Date: 2006-10-30 08:35:15
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

<p class="note">July 27th 2011: Please note that Voice only works in Opera on Windows 2000/XP, and we no longer officially support it.</p>

<div id="voice">
<p>This article builds upon topics in the <a href="http://dev.opera.com/articles/view/xhtml-voice-by-example/">XHTML+Voice by Example</a> article. Some knowledge of JavaScript and <acronym>DOM</acronym> is also assumed.</p>

<h2>Make the browser say what you want</h2>
<p>X+V isn&#39;t limited to canned phrases like &quot;Hello World&quot;. It also uses  JavaScript variables that can contain any text, including text picked up from the document itself (DOM).</p>
<p>This example not only will speak any text, it will do so on user interaction. &quot;Hello World&quot; in the previous example was spoken as soon as the document loaded, here the browser will stay mum until the user clicks on the button.</p>

<pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C/DTD XHTML+Voice 1.0/EN&quot; &quot;xhtml+voice.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;
      xmlns:ev=&quot;http://www.w3.org/2001/xml-events&quot;&gt;
&lt;head&gt;
  &lt;title&gt;Example 2: Make it talk&lt;/title&gt;
  &lt;form xmlns=&quot;http://www.w3.org/2001/vxml&quot; id=&quot;talker&quot;&gt;
    <b>&lt;block&gt;</b>
<b>     I always believed that 
        &lt;value expr=&quot;document.getElementById(&#39;phrase&#39;).value&quot;/&gt;</b>
<b>    &lt;/block&gt;</b> <b class="ref">[1]</b>
  &lt;/form&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;h1&gt;Make Opera say what you want&lt;/h1&gt;
  &lt;p&gt;
    <b>&lt;label&gt;</b>
<b>      Text: &lt;input type=&quot;text&quot; id=&quot;phrase&quot; 
         value=&quot;you are the greatest.&quot; size=&quot;30&quot;/&gt;</b>
<b>    &lt;/label&gt;</b> <b class="ref">[2]</b>
    <b>&lt;button ev:event=&quot;click&quot; 
               ev:handler=&quot;#talker&quot;&gt;Say it now!&lt;/button&gt;</b> <b class="ref">[3]</b>
  &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p><a href="makeittalk.xml">Try it in action</a>. </p>
<ul class="notate"><li><b>[1]</b> This code will make the browser say &quot;I always believed that&quot; 
  followed by whatever is currently the value of the element with the &quot;phrase&quot; 
  id .</li>
  <li><b>[2]</b> The &quot;phrase&quot; input element contains the phrase to be spoken. Here 
  you can type in any text you want. By default it is &quot;you are the greatest.&quot;.</li>
  <li><b>[3]</b> When the button is clicked, the &quot;talker&quot; handler (the voice form) 
  is activated.</li>
</ul>

<h2>Spoken colors</h2>
<p>The example above didn&#39;t do much with the information it got from the user. 
  This example will let the user control the color used on the page by a voice 
  command. </p>
    <pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C/DTD XHTML+Voice 1.0/EN&quot; &quot;xhtml+voice.dtd&quot;&gt;
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;
      xmlns:ev=&quot;http://www.w3.org/2001/xml-events&quot;&gt;
&lt;head&gt;
  &lt;title&gt;Example 4: Colorpicker&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
     #colorSample {border: thick solid; 
                   background: #EEC; 
                   font-size: 1.27em; 
                   padding: 0.1em}
  &lt;/style&gt;
  &lt;form xmlns=&quot;http://www.w3.org/2001/vxml&quot; id=&quot;sayHello&quot;&gt; <b>[1]</b>
    &lt;block&gt;Hello. Voice is installed.&lt;/block&gt;
  &lt;/form&gt;
  &lt;form xmlns=&quot;http://www.w3.org/2001/vxml&quot; id=&quot;chooseColor&quot;&gt; <b>[2]</b>
    &lt;field name=&quot;favColor&quot;&gt;
      &lt;prompt&gt;What is your favourite color?&lt;/prompt&gt;
      &lt;grammar&gt;&lt;![CDATA[
      #JSGF V1.0;
      grammar color;
        public &lt;color&gt; = Red | Pink | Purple | 
                         Blue | Green |  Maroon | Orange | 
                         Black | Gray | Seagreen; ]]&gt;
      &lt;/grammar&gt; 
      
     <b>&lt;nomatch&gt;I didn&#39;t quite catch that. &lt;/nomatch&gt; [3]</b>
    &lt;/field&gt;
    &lt;filled&gt; &lt;!-- Give aural and visual feedback --&gt;
        I&#39;ve been told your favorite color is &lt;value expr=&quot;favColor&quot;/&gt;.
<b>       &lt;assign name=&quot;document.getElementById(&#39;textbox&#39;).value&quot;
               expr=&quot;&#39;Color: &#39;+ favColor&quot;/&gt; [4]</b>
<b>       &lt;assign name=&quot;document.getElementById(&#39;colorSample&#39;).style.color&quot; 
               expr=&quot;favColor&quot;/&gt;</b> <b>[5]</b>
   &lt;/filled&gt;
  &lt;/form&gt;
&lt;/head&gt;
 
&lt;body ev:event=&quot;load&quot; ev:handler=&quot;#sayHello&quot;&gt; <b class="ref">[1]</b>
  &lt;h1&gt;What is your favorite color?&lt;/h1&gt;
  &lt;p id=&quot;colorSample&quot;&gt;Is this the one? You can choose between the all these 
     pretty colors: Red | Pink | Purple | Blue | Green | 
               Maroon | Orange | Black | Gray | Seagreen. &lt;/p&gt;
  &lt;p&gt;&lt;button ev:event=&quot;click&quot; ev:handler=&quot;#chooseColor&quot;&gt;
     Change color now
  &lt;/button&gt; <b>[2]</b>
  &lt;input ev:event=&quot;focus&quot; ev:handler=&quot;#chooseColor&quot; id=&quot;textbox&quot;/&gt; <b class="ref">[2]</b>
  &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<ul><li><b>[1]</b> An introductory message, &quot;Hello. Voice is installed.&quot;, is uttered  on page load.</li>
  <li><b>[2]</b>Clicking on the button or entering the textbox will trigger the color picker voice form.</li>
  <li><b>[3]</b> This is an example of built-in voice event handling. Here it is used to specify a different error message than the default when the browser couldn&#39;t find any matching option from the grammar.</li>
  <li><b>[4]</b> Give feedback on what color was chosen.
  </li><li><b>[6]</b> Turn the &#39;colorSample&#39; element into the chosen color.
</li></ul>

<p><a href="colorpicker.xml">Try it in action</a></p>
<h2>A browser that is going places</h2>
<p>One of the most common tasks is to go to a new page when you are done with  this one. You can do this in the HTML part of the document by submitting a form  or following a link, but you can also trigger a link directly in the voice forms  by a little JavaScript. Starting with the browser selection example, adding <code>&lt;assign name=&quot;window.location&quot;  expr=&quot;&#39;URL-to-next-page&#39;&quot;/&gt;</code> to the &#39;filled&#39; element is all it takes.</p>

    <pre>&lt;field name=&quot;browser&quot;&gt;
  &lt;prompt&gt;What is the name of the best browser?&lt;/prompt&gt;
  &lt;option&gt;Opera&lt;/option&gt;
  &lt;nomatch&gt;Try again.&lt;/nomatch&gt;
  &lt;filled&gt;
    Yes, that&#39;s a fact. Opera is the best browser, full of wonderful features. 
        <b>&lt;assign name=&quot;window.location&quot; expr=&quot;&#39;http://www.opera.com/features/&#39;&quot;/&gt;</b>
  &lt;/filled&gt;
&lt;/field&gt;</pre>

<p><a href="opera2go.xml">Try it in action</a></p>
<p>You can take advantage of that already in the grammer, both with &#39;option&#39; and 
  with &#39;grammar&#39;. With option it would look like this:</p>

    <pre>&lt;field name=&quot;browser&quot;&gt;
  &lt;option value=&quot;URL-to-next-page&quot;&gt;Opera&lt;/option&gt;
  &lt;filled&gt;
    &lt;assign name=&quot;window.location&quot; expr=&quot;browser&quot;/&gt;
  &lt;/filled&gt;
&lt;/field&gt;</pre>

<p>With grammar it could look like this:</p>

    <pre>&lt;field name=&quot;browser&quot;&gt;
  &lt;grammar&gt;&lt;![CDATA[
    #JSGF V1.0;
    grammar link;
    public &lt;link&gt; = Opera{URL-to-next-page}
  ]]&gt;&lt;/grammar&gt; 
  &lt;filled&gt;
    &lt;assign name=&quot;window.location&quot; expr=&quot;browser&quot;/&gt;
  &lt;/filled&gt;
&lt;/field&gt;</pre>

<h2>Implementation notes</h2>
<p>The XHTML+Voice profile is experimental, with limited support. VoiceXML and the other specifications used here are W3C standards, but it is not certain a future multimodal specification will be like this. Furthermore the browser support is severely limited. Only some versions of the Netfront and Opera browsers support X+V. It is instructive to note that DOM programming will work for X+V just like any other XML language.</p>
</div>
