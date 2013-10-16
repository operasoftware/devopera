Title: Microdata & the microdata DOM API
----
Date: 2011-08-10 10:39:17
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution 3.0 Unported
----
License_url: http://creativecommons.org/licenses/by/3.0/
----
Text:

	<h2>Introduction</h2>
	
	<p>One of the main problems HTML5 set out to solve was consistency (and therefore machine readability) of markup, evidenced by the introduction of standard semantic elements such as <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> and <code>&lt;figure&gt;</code>. This is all well and good, but there are times when you&#39;ll want to add specific machine-readable data attributes to pieces of content so that they can be read consistently by some kind of processing script, even if the exact markup used differs slightly between different content. This need has already been satisfied to a certain degree, by the cleverly simple and backwards compatible <a href="http://microformats.org/">Microformats</a>, and the rather more esoteric <a href="http://www.w3.org/TR/xhtml-rdfa-primer/">RDFa</a>.</p>
	
	<p>But it is perhaps not a surprise that a tailored solution has been added to the HTML5 spec in the form of <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/microdata.html">microdata</a>, which includes a set of attributes that can be added to any element you wish, and an associated DOM API for processing/aggregating the microdata on a given page.</p>
	
	<p>Microdata tries to improve on what we&#39;ve already had in the past: providing a built-in mechanism that is as easy to grasp as microformats, but also allows data processing without needing to build your own parser. And you can of course build your own microdata processing functionality for non-supporting browsers using JavaScript, if needs be. In this article we&#39;ll take a casual stroll through the microdata HTML attribute and DOM API syntax.</p>
	
<h2>HTML syntax</h2>
	
	<p>Microdata consists of a series of <em>items</em>, each of which has data attributed to it via a series of properties, which consist of name-value pairs. So, in the true fashion of a vain web geek, let&#39;s define ourselves in microdata! You can write your own example, following my lead.</p>
	
	<p class="note">Note: You can check whether your microdata syntax is correct by running it through the experimental <a href="http://html5.validator.nu/">HTML5 validator</a>. You should also open up <a href="microdata_example.html">my live microdata example</a> and refer to it as you go through the text below.</p>
	
	<p>First of all, we can define any suitable element as an item container, using the <code>itemscope</code> attribute:</p>
	
<pre><code>&lt;article itemscope&gt;
&lt;/article&gt;</code></pre>

    <p>Obviously, you should choose an element that contains the rest of your data, but this does leave you with a lot of choice. In this case, I&#39;ll turn this into a biography card: our first property will be our name, and we&#39;ll add it like this, using the <code>itemprop</code> attribute:</p>
    
<pre><code>&lt;article itemscope&gt;
  <strong>&lt;h2 itemprop=&quot;name&quot;&gt;Chris Mills&lt;/h2&gt;</strong>
&lt;/article&gt;</code></pre>

  <p>So the <code>itemprop</code> attribute is given to the element that contains the data, and its value is the property name. The content inside this element is the property value. Let&#39;s add a few more properties to make sure we&#39;ve got the idea:</p>
  
<pre><code>&lt;article itemscope&gt;
  &lt;h2 itemprop=&quot;name&quot;&gt;Chris Mills&lt;/h2&gt;
  <strong>&lt;ul&gt;
    &lt;li&gt;Nationality: &lt;span itemprop=&quot;nationality&quot;&gt;British&lt;/span&gt;&lt;/li&gt;
    &lt;li&gt;Age: &lt;span itemprop=&quot;age&quot;&gt;33&lt;/span&gt;&lt;/li&gt;
	&lt;li&gt;Hair colour: &lt;span itemprop=&quot;colour&quot;&gt;Brown&lt;/span&gt;&lt;/li&gt;
  &lt;/ul&gt;</strong>
&lt;/article&gt;</code></pre>
  
<p>In some cases the property value is not the text content of the element, but rather is inside an attribute, for example:</p>

<ul>
  <li>A URL inside a media element&#39;s <code>src</code> attribute.</li>
  <li>A URL inside an <code>&lt;a&gt;</code> element&#39;s <code>href</code> attribute.</li>
  <li>A time/date inside a <code>datetime</code> attribute.</li>
</ul>

<p>When the property value is a URL, it is expressed using an element that links to or embeds an external resource, such as an <code>&lt;a&gt;</code> element and its <code>href</code>. When the property value is a date/time/both, it is expressed using the <code>&lt;time&gt;</code> element and its <code>datetime</code> attribute. The <code>itemprop</code> attribute is added just the same, but the property value will be the attribute value, rather than the element content.</p>

<p>Let&#39;s add a couple of examples:</p>

<pre><code>&lt;article itemscope&gt;
  &lt;h2 itemprop=&quot;name&quot;&gt;Chris Mills&lt;/h2&gt;
  <strong>&lt;p&gt;&lt;img itemprop=&quot;image&quot; src=&quot;Chris-Mills.png&quot; alt=&quot;Photo of Chris Mills - this is me&quot;&gt;&lt;/p&gt;</strong>
  &lt;ul&gt;
    &lt;li&gt;Nationality: &lt;span itemprop=&quot;nationality&quot;&gt;British&lt;/span&gt;&lt;/li&gt;
    &lt;li&gt;Age: &lt;span itemprop=&quot;age&quot;&gt;33&lt;/span&gt;&lt;/li&gt;
    <strong>&lt;li&gt;Date of birth: &lt;time itemprop=&quot;birthday&quot; datetime=&quot;1978-06-27&quot;&gt;June 27th 1978&lt;/time&gt;&lt;/li&gt;</strong>
    &lt;li&gt;Hair colour: &lt;span itemprop=&quot;colour&quot;&gt;Brown&lt;/span&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/article&gt;</code></pre>

<p class="note">Note: As of the time of publication of this article, there is talk in the W3C about <a href="http://www.w3.org/Bugs/Public/show_bug.cgi?id=13240">replacing the <code>&lt;time&gt;</code> element with <code>&lt;data&gt;</code></a>, so this example may have to change.</p>

    <h3>Nesting microdata items</h3>
    
    <p>You can also quite happily nest microdata items inside one another. The top level microdata item is given the <code>itemscope</code> attribute as normal, and then any nested microdata items are also given an <code>itemscope</code> attribute. Let&#39;s add some information about my band into the biography card:</p>
    
<pre><code>&lt;article itemscope itemtype=&quot;http://example.org/biography&quot;&gt;

  ...

  &lt;li&gt;
    &lt;div itemscope itemprop=&quot;band&quot;&gt;
      &lt;h3&gt;My band&lt;/h3&gt;
      &lt;ul&gt;
        &lt;li&gt;Name: &lt;span itemprop=&quot;name&quot;&gt;Conquest of Steel&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;Band: &lt;span itemprop=&quot;style&quot;&gt;Heavy metal&lt;/span&gt;&lt;/li&gt;
        &lt;li&gt;Members: &lt;span itemprop=&quot;size&quot;&gt;5&lt;/span&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/li&gt;

 ...

&lt;/article&gt;</code></pre>

    <h3>Several properties, same name; same property, several names</h3>
    
    <p>It is possible for you to include several properties with the same name, for example:</p>
    
<pre><code>&lt;li&gt;Members:
  &lt;ul&gt;
    &lt;li itemprop=&quot;member&quot;&gt;Claymore Clark&lt;/li&gt;
    &lt;li itemprop=&quot;member&quot;&gt;DD Danger&lt;/li&gt;
    &lt;li itemprop=&quot;member&quot;&gt;Dan Durrant&lt;/li&gt;
    &lt;li itemprop=&quot;member&quot;&gt;Chris Mills&lt;/li&gt;
    &lt;li itemprop=&quot;member&quot;&gt;Vic Victory&lt;/li&gt;
  &lt;/ul&gt;
&lt;/li&gt;</code></pre>

    <p>This would result in the item having five properties, all with the name <code>member</code>, each having one of the different values.</p>
    
    <p>Conversely, you can also put multiple properties into the same element, thus giving them both the same value:</p>
    
<pre><code>&lt;li&gt;Band: &lt;span itemprop=&quot;style favouritemusic&quot;&gt;Heavy metal&lt;/span&gt;&lt;/li&gt;</code></pre>    
    
    <h3>Referencing properties outside the itemscope</h3>
    
    <p>There may be occasions where you want your microdata item to include properties that aren&#39;t actually within the same parent element. You can do so by referencing the ID(s) of the external properties inside an <code>itemref</code> attribute. Take the following example, in which I&#39;ve moved my band members outside into a separate bit of markup:</p>
    
<pre><code>&lt;article&gt;

  ...

	&lt;li&gt;
      &lt;div itemscope itemprop=&quot;band&quot; itemref=&quot;members&quot;&gt;
        &lt;h3&gt;My band&lt;/h3&gt;
        &lt;ul&gt;
          &lt;li&gt;Name: &lt;span itemprop=&quot;name&quot;&gt;Conquest of Steel&lt;/span&gt;&lt;/li&gt;
          &lt;li&gt;Band: &lt;span itemprop=&quot;style&quot;&gt;Heavy metal&lt;/span&gt;&lt;/li&gt;
          &lt;li&gt;Members: &lt;span itemprop=&quot;bandsize&quot;&gt;5&lt;/span&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/article&gt;
	
	&lt;ul id=&quot;members&quot;&gt;
      &lt;li itemprop=&quot;member&quot;&gt;Claymore Clark&lt;/li&gt;
      &lt;li itemprop=&quot;member&quot;&gt;DD Danger&lt;/li&gt;
      &lt;li itemprop=&quot;member&quot;&gt;Dan Durrant&lt;/li&gt;
      &lt;li itemprop=&quot;member&quot;&gt;Chris Mills&lt;/li&gt;
      &lt;li itemprop=&quot;member&quot;&gt;Vic Victory&lt;/li&gt;
    &lt;/ul&gt;
</code></pre>

  <p>In this instance, the <code>member</code> properties are included inside the item by referencing the ID of the their surrounding element inside the <code>itemref</code> attribute.</p>

<p class="note">Note that you reference multiple properties in the <code>itemref</code> attribute by including them in a space-separated list, for example <code>itemref=&quot;members instruments gigdates&quot;</code>.</p>
    
    <h3>Creating a reusable vocabulary for your items</h3>
    
    <p>Ok, so what you have seen so far is all well and good in isolation, but how do you actually define a vocabulary that can be reused in cooperation with other web developers? The answer is that you give each item a type, using the <code>itemtype</code> attribute. The value of this attribute takes the form of a URL, which may or may not exist. It&#39;s helpful if you point the URL to a real page on the Web that informs other users of the vocabulary and its properties, but you don&#39;t have to.

<p>Going back to our example:</p>
    
<pre><code>&lt;article itemscope <strong>itemtype=&quot;http://example.org/biography&quot;</strong>&gt;
  ... 
  &lt;div itemscope itemprop=&quot;band&quot; <strong>itemtype=&quot;http://example.org/band&quot;</strong> itemref=&quot;members&quot;&gt; 
    ... 
  &lt;/div&gt; 
  ...
&lt;/article&gt;</code></pre>

<p>An item can only have one type, and the type gives the context for the properties, thus defining a vocabulary. So in our example, the item of type <code>http://example.org/biography</code> has four properties — <code>name</code>, <code>style</code>, <code>bandsize</code> and <code>member</code>. This helps to avoid confusion with similarly-named properties. You might also have microdata for marking up information about a jury in a court of law, also with <code>itemprop=&quot;member&quot;</code>, but this would be differentiated by giving the jury microdata a different <code>itemtype</code>, such as <code>itemtype=&quot;http://example.org/jury&quot;</code>, or something else of your choosing.</p>

<p>You should think carefully about what vocabulary to use for your purposes, to make sure that it is robust, flexible and extensible: for more information and tips, read the spec section entitled <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/microdata.html#selecting-names-when-defining-vocabularies">Selecting names when defining vocabularies</a>. You should also look around on the Web to see if anyone has already written a suitable vocabulary for your purposes. See the spec section <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/microdata.html#mdvocabs">microdata vocabularies</a> for details of some existing vocabularies ported over from microformats such as vCard and vEvent.</p>

    <h3>Assigning a global identifier to an item</h3>

<p>Some items are already identified by an existing global identifier convention, such as an <a href="http://en.wikipedia.org/wiki/Isbn">ISBN</a> for a book, or a <a href="http://en.wikipedia.org/wiki/Universal_Product_Code">UPC</a> for a product in a shop. Some microdata vocabularies support such global identifiers (you have to find this out yourself, which is why we suggest that if you write your own vocabulary you document it on the URL you use for the <code>itemtype</code>). If you&#39;re using such an indentifier, you express it as a URL in an <code>itemid</code> attribute on the same element as the <code>itemscope</code> and <code>itemtype</code> attributes. A crawler or search engine that understands such things (we know of none that do — yet) will then know that your content is about the same ISBN/ UPC as someone else&#39;s content with that same <code>itemid</code>. They can then seamlessly mash that data up until the web becomes sentient and the machines rise up.</p>
   
   For example, the following would work, provided the <code>http://example.com/book</code> vocabulary has explicitly opted into using the ISBN identifier (more details on this to follow, at a later date):</p>
   
<pre><code>&lt;article itemscope
    itemtype=&quot;http://example.com/book&quot;
    itemid=&quot;urn:isbn:978-0321703521&quot;&gt;
  &lt;h2 itemprop=&quot;title&quot;&gt;InterACT with web standards&lt;/h2&gt;
  &lt;p&gt;Authors:&lt;/p&gt;
  &lt;ul&gt;
    &lt;li itemprop=&quot;author&quot;&gt;Leslie Jensen-Inman&lt;/li&gt; 
    &lt;li itemprop=&quot;author&quot;&gt;Chris Mills&lt;/li&gt;
    &lt;li itemprop=&quot;author&quot;&gt;Glenda Sims&lt;/li&gt;
    &lt;li itemprop=&quot;author&quot;&gt;Aarron Walter&lt;/li&gt;
  ...   </code></pre>
  
  <h2>The microdata DOM API</h2>
  
  <p>Microdata becomes even more helpful when you start using the associated DOM API to manipulate items and properties on a page programmatically, perhaps to present the information in a searchable/filterable manner, or deliver it to another application somewhere else.</p>
  
  <p>The API is very simple — you use the <code>document.getItems()</code> method to grab a nodelist containing the microdata items on a page. If you leave the arguments blank, you&#39;ll just grab all items; or you can specify a specific <code>itemtype</code> URL as an argument to just grab items of that type. For example:</p>
  
<pre><code>var biography = document.getItems(&quot;http://example.org/biography&quot;);</code><code></code></pre>
  
  <p>Would grab our biography item and store it in a variable. Once you&#39;ve grabbed your item(s), you can then access the different properties with the <code>properties</code> attribute:</p>
  
<pre><code>var biography = document.getItems(&quot;http://example.org/biography&quot;)[0];
<strong>alert(&#39;Hi there &#39; + biography.properties[&#39;name&#39;][0].textContent + &#39;!&#39;);</strong></code><code></code></pre>

  <p>And there&#39;s not much more to it than that, really. You can find some more examples to study in the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/microdata.html#using-the-microdata-dom-api">Using the microdata DOM API</a> section of the spec. Alternatively, <a href="http://blog.foolip.org/">Philip Jägenstedt</a> has created a rather nifty <a href="http://foolip.org/microdatajs/live/">live microdata viewer</a>, which is rather useful for checking your code, and extracting values from it quickly in different formats, eg JSON.
  
  <p class="note">You can <a href="microdata_example.html">view my microdata example</a> live. Also be sure to check out <a href="http://w3c-test.org/html/tests/submission/Opera/microdata/001.html">Opera&#39;s microdata tests</a> — these have only recently been submitted to the W3C test suite.</p>
  
  <h2>Summary</h2>
  
  <p>And so ends our brief tour of microdata — I hope it helped you to understand this interesting new technology. Let us know what you think.</p></p>
