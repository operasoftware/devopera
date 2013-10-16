Title: Give your widgets a voice
----
Date: 2006-11-08 06:48:27
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

<p>Prerequisites: <a href="/articles/voice/">knowledge of XHTML+Voice</a> and how to <a href="http://dev.opera.com/addons/widgets/">make a basic Opera widget</a></p>

<p>X+V uses namespaces and it is therefore neccessary to make the widget using XML documents. However, the widget engine will only look for <q>index.html</q>. Thus, the XML file needs to be embedded in a normal HTML document. The <q>index.html</q> file body section could look something like this: </p>

<pre><code>&lt;body&gt;
 &lt;iframe src=&quot;main.xml&quot;&gt;&lt;/iframe&gt;
&lt;/body&gt;</code></pre>

<p>Now to the more interesting bit - adding voice to the widget. An example <samp>main.xml</samp> may look like this:</p>

<pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;iso-8859-1&quot; ?&gt;
<span class="m">&lt;!DOCTYPE html PUBLIC &quot;-//VoiceXML Forum//DTD XHTML+Voice 1.2//EN&quot;
&quot;http://www.vxmlforum.org/specs/multimodal/x+v/12/dtd/xhtml+voice12.dtd&quot;&gt;</span>
  
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;
      <span class="m">xmlns:ev=&quot;http://www.w3.org/2001/xml-events&quot;
      xmlns:vxml=&quot;http://www.w3.org/2001/vxml&quot;&gt;</span>

&lt;head&gt;
 &lt;title&gt;Hello world!&lt;/title&gt;

  <span class="m">&lt;vxml:form id=&quot;helloworld&quot;&gt;
   &lt;vxml:block &gt;
    &lt;vxml&#58;prompt src=&quot;#srctext&quot; /&gt;
   &lt;/vxml:block &gt;
  &lt;/vxml:form &gt;</span>
&lt;/head&gt;

&lt;body <span class="m">ev:event=&quot;load&quot; ev:handler=&quot;#helloworld&quot;</span>&gt;
 &lt;h2 id=&quot;srctext&quot;&gt;Hello World!&lt;/h2&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre>

<p>Now wrap your config.xml, index.html and main.xml into a zipped widget file and you have your first voice enabled widget. You can also add interaction just as you would with a normal X+V application. The widget is available for input as long as it has focus.</p>

<p>If you want to voice enable an existing widget, make sure to convert your main document to a well-formed XML document, add the X+V markup and wrap it in an iframe.</p>
