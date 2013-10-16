Title: XHTML+Voice By Example
----
Date: 2007-01-04 10:03:35
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

<p>This article assumes that you have already Voice installed and working on your computer.  For more on what XHTML+Voice (X+V) is all about, read our <a href="http://dev.opera.com/articles/view/getting-to-know-voice/">Getting to Know X+V</a> article.</p>
<h2>Hello World!</h2>
<p>You can make an X+V browser say &quot;Hello World&quot; with the &#39;block&#39; element, 
  like this:</p>
    <pre>&lt;block&gt;Hello World!&lt;/block&gt;</pre>
<p>The full web page will look like this:</p>
    <pre>&lt;!DOCTYPE html PUBLIC &quot;-//VoiceXML Forum//DTD XHTML+Voice 1.2//EN&quot;
&quot;http://www.voicexml.org/specs/multimodal/x+v/12/dtd/xhtml+voice12.dtd&quot;&gt; <b class="ref">[1]</b>
&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;
      xmlns:ev=&quot;http://www.w3.org/2001/xml-events&quot;&gt; <b class="ref">[2]</b>

&lt;head&gt;
  &lt;title&gt;Example 1: &quot;Hello, World&quot;&lt;/title&gt;
  &lt;form xmlns=&quot;http://www.w3.org/2001/vxml&quot; id=&quot;sayHello&quot;&gt; <b class="ref">[3]</b>
    <b>&lt;block&gt;Hello World!&lt;/block&gt;</b> <b class="ref">[4]</b>
  &lt;/form&gt;
&lt;/head&gt;

&lt;body ev:event=&quot;load&quot; ev:handler=&quot;#sayHello&quot;&gt; <b class="ref">[5]</b>
  &lt;h1&gt;&quot;Hello World!&quot; example&lt;/h1&gt;
  &lt;p&gt;If your browser is voice enabled, you will hear it say &quot;Hello, world!&quot;.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<ul>
  <li><em>[1]</em> The DOCTYPE describes the type of document this is. It isn&#39;t 
  necessary for voice processing, but is necessary for the document to be valid. 
  Also see <a href="http://www.opera.com/docs/specs/doctype/">DOCTYPE sniffing</a>.</li>
  <li><em>[2]</em> XHTML is the default namespace, and XML Events has prefix &quot;ev&quot;.</li>
  <li><em>[3]</em> This is the voice form, the element that contains voice code. It sets the 
  default namespace to VoiceXML, so everything contained in the voice form is 
  VoiceXML by default. It has an id (&quot;sayHello&quot;) so that other elements 
  can refer to it.</li>
  <li><em>[4]</em> This is the code that actually says &quot;Hello World&quot;.</li>
  <li><em>[5]</em> This is what triggers the voice form. When the body element receives the 
  &quot;load&quot; event (i.e. when the page has loaded) the handler with id <code>sayHello</code> is activated.</li>
</ul>
<p class="tryit"><a href="helloworld.xml">Try it in action</a>. </p>

<h2>Make it listen</h2>
<p>So now you can have the browser talk to you. It is far more exiting that you 
  can talk back to it. This can also be more challenging. It isn&#39;t too hard to 
  make it listen, it is more difficult to make it understand. The application 
  will not behave more intelligently than what you code for. You need to specify 
  what to listen for from the user chatter, and give good hints about what is 
  expected. The examples in this article will be very literal-minded, and not 
  give much leeway for creative user responses, but it isn&#39;t too hard to make 
  it more flexible.</p>
<h3>Using your options</h3>
<p>When you in HTML want to restrict the choices, you can use a <code>select</code> element. To give the user the choice 
  between &quot;one&quot; and &quot;two&quot;, and nothing else, you can code:</p>
    <pre>&lt;select name=&quot;example&quot;&gt;
 &lt;option&gt;One&lt;/option&gt;
 &lt;option&gt;Two&lt;/option&gt;
&lt;/select&gt;</pre>



<p>
You can use the mouse or the <kbd>Tab</kbd> key to activate the select box and the arrow keys to choose one of the options.</p>
<p>In a voice form the <code>field</code> element fulfil a similar role. To present the same choice in voice, you code:</p>
    <pre>&lt;field name=&quot;example&quot;&gt;
 &lt;option&gt;One&lt;/option&gt;
 &lt;option&gt;Two&lt;/option&gt;
&lt;/field&gt;</pre>
<p>The following example will ask the user the name of the best browser (Opera 
  of course), handle mismatches, and give an inspired lecture at the end.</p>

    <pre>&lt;field name=&quot;browser&quot;&gt; 
  &lt;prompt&gt;What is the name of the best browser?&lt;/prompt&gt; <b class="ref">[1]</b>
  &lt;option&gt;Opera&lt;/option&gt; <b class="ref">[2]</b>
  &lt;nomatch&gt;Try again.&lt;/nomatch&gt; <b class="ref">[3]</b>
  &lt;filled&gt;Yes, that&#39;s a fact. Opera is the best browser, full of wonderful 
    features.&lt;/filled&gt; <b class="ref">[4]</b>
&lt;/field&gt;</pre>
<ul class="notate">
<li><em>[1]</em> The spoken texts are called prompts. They are similar to the 
  <code>p</code> elements in XHTML.</li>
  <li><em>[2]</em> The options gives the choices the user has. In this case the only value 
  for the best browser is &quot;Opera&quot;.</li>
  <li><em>[3]</em> If the user tries to say anything that doesn&#39;t match &quot;Opera&quot;, 
  he will be asked to try again (and again and again). If no <code>nomatch</code> is set, the standard phrase (normally &quot;Sorry. I did not understand&quot;) will be used instead.</li>
  <li><em>[4]</em> The filled element will be executed when a match (i.e. &quot;Opera&quot;) 
  has occurred.</li>
 </ul>
<p><a href="opera.xml">Try it in action</a>. </p>
<h3>Going for grammar</h3>
<p>The collection of accepted responses is called a grammar (the collection of 
  options above is also a grammar). At its most simple, it is only a collection 
  of alternatives, e.g. <code>&lt;fruit&gt; = apple 
  | orange | slime mold</code>. The voice recognition version on <i>Hello 
  World</i>, coffee-tea-milk, will politely ask you if you want coffee, tea, or 
  milk, and (in this version) refuse to give it to you afterwards.</p>
    <pre>&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xmlns:ev=&quot;http://www.w3.org/2001/xml-events&quot;&gt;
&lt;head&gt;
  &lt;title&gt;Example 3: Drink dispenser&lt;/title&gt;
  &lt;vxml xmlns=&quot;http://www.w3.org/2001/vxml&quot; id=&quot;drinkform&quot;&gt; <b class="ref">[1]</b>
    <b>&lt;field name=&quot;drink&quot;&gt;</b>
<b>      &lt;prompt&gt;Would you like coffee, tea, or milk?&lt;/prompt&gt;</b> 
      <b>&lt;grammar&gt;&lt;![CDATA[</b>    <b class="ref">[2]</b>
        #JSGF V1.0;
        grammar drinks;
        <b>public &lt;drinks&gt; = coffee | tea | milk</b> <b class="ref">[3]</b>
       <b>]]&gt;</b> <b class="ref">[2]</b>
<b>      &lt;/grammar&gt;</b>
<b>      &lt;filled&gt;</b> <b class="ref">[4]</b>
<b>        &lt;block&gt;Sorry, I&#39;m out of &lt;value expr=&quot;drink&quot;/&gt;.&lt;/block&gt;</b> <b class="ref">[5]</b>
<b>      &lt;/filled&gt;</b>
<b>    &lt;/field&gt;</b>
  &lt;/vxml:form&gt;&lt;/head&gt;
&lt;body ev:event=&quot;load&quot; ev:handler=&quot;#drinkform&quot;&gt; <b class="ref">[1]</b>
&lt;h1&gt;Example 3: Drink dispenser&lt;/h1&gt;
&lt;p&gt;Our drink dispenser can offer you a wide choice of refreshing drinks.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<ul class="notate">
 <li><em>[1]</em> This voice form will be triggered when the document has loaded.</li>
  <li><em>[2]</em> Grammars can have characters like &quot;&lt;&quot; that are normally treated 
  as XML, in this case start of tag, but content inside <code>&lt;![CDATA</code>[ and <code>]]&gt;</code> is taken literally in XML, and not 
  processed as markup. If you write <code>&lt;![CDATA[&lt;b&gt;bold&lt;/b&gt;]]&gt;</code> 
  in the source code, it should be displayed as plain text &quot;&lt;b&gt;bold&lt;/b&gt;&quot;, 
  not as &quot;<b>bold</b>&quot;.</li>
  <li><em>[3]</em> This is the grammar, you can choose between coffee, tea, and milk. The &quot;|&quot; vertical bar means &quot;or&quot;.</li>
  <li><em>[4]</em> The &#39;filled&#39; element is a conditional element, it is entered when the field 
  has gotten a value.</li>
  <li><em>[5]</em> This is where it refuses to serve you anything.</li>
</ul>
<p><a href="coffee-tea-milk.xml">Try it in action</a>. </p>
<p>The grammar could in this case just as well be expressed using <code>option</code>, like this:</p>

    <pre>&lt;option&gt;coffee&lt;/option&gt;
&lt;option&gt;tea&lt;/option&gt;
&lt;option&gt;milk&lt;/option&gt;</pre>

<h3>I don&#39;t understand what you are saying, but I can pretend</h3>
<p>The advantage of <code>grammar</code> over <code>option</code> is that you can handle more natural language this way. Here is a more advanced <code>grammar</code> example:</p>
<pre>&lt;form xmlns=&quot;http://www.w3.org/2001/vxml&quot; id=&quot;command&quot;&gt;
  &lt;field name=&quot;commandInterpreter&quot;&gt;
    &lt;grammar&gt;&lt;![CDATA[
      #JSGF V1.0;
      grammar command;
      public &lt;command&gt; = [I want to] &lt;action&gt; {the_action = $action} <b class="ref">[1]</b>
                         &lt;object&gt; {the_object = $object}  
                         [with &lt;instrument&gt;{the_instrument=$instrument}];
      &lt;action&gt;         = watch | shut down | surprise | control | buy | hide | ignore; <b class="ref">[2]</b>
      &lt;object&gt;         = [the|a] tv | [the|a] phone | [the|my] neighbor | Opera | my boss;
      &lt;instrument&gt;     = [the] remote control | [my famous] wit | [a] stick | 
                         [a] camera | [an] [expired] credit card | a wet blanket;
       ]]&gt;&lt;/grammar&gt; 
     &lt;prompt&gt;Give me a command&lt;/prompt&gt;
     &lt;nomatch&gt;I refuse to do that. &lt;/nomatch&gt;
    &lt;/field&gt;
    &lt;filled&gt; &lt;!-- Give feedback --&gt; <b class="ref">[3]</b>
      Why do you want to &lt;value expr=&quot;the_action&quot;/&gt; the poor &lt;value expr=&quot;the_object&quot;/&gt;?
    &lt;/filled&gt;
  &lt;/form&gt;
</pre>
<ul class="notate">
<li><em>[1]</em> Phrases in [brackets], like &quot;I want to&quot; are, optional. &lt;action&gt; refers to the action rule further down, the  variable is set to , which is a special variable containing whatever the &lt;action&gt; rule has returned.</li>
<li><em>[2]</em> The &lt;action&gt; rule lets you pick one out of a set of verbs, much like <code>option</code> would.</li>
<li><em>[3]</em> The <code>value</code> element refers to the values set in [1]. This values can also be used when <a href="http://dev.opera.com/articles/view/xhtml-voice-in-action/">scripting X+V</a></li>
</ul>
<p>This grammar would accept utterances like:</p>
<ul class="bullets">
<li>watch tv</li>
<li>I want to surprise my neighbour with my famous wit</li>
<li>buy Opera with an expired credit card</li>
<li>I want to hide the phone</li>
<li>shut down tv with remote control</li>
<li>ignore my boss</li>
</ul>
<p><a href="big-grammar.xml">Try it in action</a></p>
<p>The grammar can easily be modified. Try use different verbs and nouns for the &lt;action&gt;, &lt;object&gt;, and &lt;instrument&gt; rules. </p>
<p>This example may be more advanced than you would need, but it does show some of the things that grammars allow you to do. To learn more about this see the grammar links in <a href="http://dev.opera.com/articles/view/getting-to-know-voice/">Getting to Know X+V</a>.</p> id=
