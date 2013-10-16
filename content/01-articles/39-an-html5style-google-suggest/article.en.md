Title: An HTML5-style "Google Suggest"
----
Date: 2007-10-11 15:03:08
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

<ul class="seriesNav">
<li>Update, January 10th 2011: The ability to use an external source for a <code>&lt;datalist&gt;</code> has been removed from <a href="http://dev.w3.org/html5/spec/Overview.html">the HTML5 spec</a> to reduce complexity. It can still be implemented using <code>XMLHttpRequest</code> to fetch data and then adding <code>&lt;option&gt;</code> elements dynamically, but we may see it return as a native HTML5 feature at some point in the future.</li>
<li>Minor update on 26th April 2010.</li>
</ul>

<h2>Introduction</h2>

<p>HTML5 is the next major revision of HTML (and XHTML) and is being jointly developed by the <a href="http://www.whatwg.org/" alt="The WHATWG homepage">WHATWG</a> and <a href="http://www.w3.org/html/wg/" alt="The W3C HTML working group">W3C HTML WG</a> (as such, it is a work in progress, but this article will simply refer to it as HTML5.) I have already covered the basics of HTML forms in my previous article, <a href="http://dev.opera.com/articles/view/improve-your-forms-using-html5/" alt="Improve your forms using HTML5">improving your forms using HTML5</a>, so this article will look at some more advanced aspects of HTML5 data input constructs, culminating in an example that shows how to build an auto-complete style text box using nothing more than a short server-side script and a few lines of markup.</p>

<p>The features discussed in this article were part of the <a href="http://www.whatwg.org/specs/web-forms/current-work/" alt="The Web Forms 2 draft specification">Web Forms 2 specification</a>, which is now part of <a href="http://dev.w3.org/html5/spec/Overview.html" alt="The HTML5 draft specification">W3C&#39;s HTML5 specification</a>. The feature runs on Opera 9.5 or later. To test it, <a href="http://www.opera.com/browser">grab the latest version of Opera.</a>

<h2>Combo boxes (<code>input list</code>)</h2>

<p>Let&#39;s start off with some background information - first of all, let&#39;s look at how HTML5 deals with combo boxes:</p>
<pre><code>&lt;input list=&quot;languages&quot; name=&quot;language&quot;&gt;
&lt;datalist id=&quot;languages&quot;&gt;
  &lt;option value=&quot;Norwegian&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Dutch&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;English&quot;&gt;&lt;/option&gt;
&lt;/datalist&gt;</code></pre>

<p>In older browsers this will degrade to a simple text field. In newer user agents supporting HTML5 however you will be able to select one of the predefined values in addition to being able to type something in yourself. This functionality is very similar to that offered in e-mail clients and the address bar of the browser for instance. If you need this functionality but your suggested options need to be presented in older browsers as well you might want to consider the following markup (this has some additional context added as well):</p>

<pre><code><label>
  Enter your front-end specialty:
  &lt;input list=&quot;languages&quot; name=&quot;language&quot;&gt;
</label>
&lt;datalist id=&quot;languages&quot;&gt;
  <label>
    or select one from the list:
    &lt;select name=&quot;language&quot;&gt;
      <option value="">(none)</option>
      <option>HTML</option>
      <option>CSS</option>
      <option>JavaScript</option>
    &lt;/select&gt;
  </label>
&lt;/datalist&gt;</code></pre>

<p>Browsers supporting the <code>list</code> attribute / <code>datalist</code> element construct of HTML5 will not display the <code>datalist</code> element and its contents, instead carefully extracting the <code>option</code> element values out of it to populate the combo box. Older browsers will render the contents of the <code>datalist</code> element and allow the user to use either the input field or select an option.</p>

<h2>External source for datalist</h2>

<p>Another interesting feature is that you can let the suggestions be populated from an external XML file. The external XML file looks something like the following (it needs to be served with an <code>application/xml</code> media type):</p>

<pre><code>&lt;select xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
  <option value="1">
  </option><option value="2">
  </option><option value="...">
&lt;/select&gt;</option></code></pre>

<p>The contents of this <code>select</code> element will then replace the contents of any <code>datalist</code> that references it unless the <code>select</code> element in the external file has its <code>type</code> attribute set to <code>incremental</code> in which case the contents will be appended to, and not replace, existing content. You can tell the user agent to populate a <code>datalist</code> element with an external file called <em>foo</em> using something like this:</p>

<pre><code>&lt;input list=&quot;languages&quot; name=&quot;language&quot;&gt;
&lt;datalist id=&quot;languages&quot; data=&quot;foo&quot;&gt;&lt;/datalist&gt;</code></pre>

<p>(<code>select</code> elements have also been extended with a <code>data</code> attribute in HTML5, in case you were wondering.)</p>

<p>The source code for the above examples can be found in the example files that accompany this article, <a href="examples.zip" alt="The example files to accompany this article">found here</a>. In addition, a live demo is available at <a href="http://html5.org/demos/dev.opera.com/article-examples.html" alt="Live demo for the first half of this article">http://html5.org/demos/dev.opera.com/article-examples.html</a>.</p>

<h2>A dynamic combo box</h2>

<p>So far we have looked at combo boxes and a way to populate them using an external file. All we need now to emulate Google Suggest in HTML5 is an event to listen to the combo box and a small script on the server to dynamically generate the file that will populate the <code>datalist</code> element. Using conventional techniques you would need to create your own &quot;dropdown menu&quot; listing the various options, use <code>XMLHttpRequest</code> to fetch the external data, and write code to parse this data to populate the menu - a lot of work, I&#39;m sure you&#39;ll agree.</p>

<p>So what event can we use? Web Forms 2 introduces an event called <code>input</code>, which is already supported by several browsers, including Opera. The event dispatches after the user inputs some text using the keyboard. For rapid keyboard input (entering multiple characters) a single event is dispatched. Integrating the event in our combo box makes the code a tad more complicated:</p>

<pre><code>&lt;input list=&quot;suggest&quot; name=&quot;q&quot;
       oninput=&quot;list.data = &#39;?w=&#39; + encodeURIComponent(value)&quot;&gt;
&lt;datalist id=&quot;suggest&quot;&gt;&lt;/datalist&gt;</code></pre>

<p>As you can see the <code>input</code> event handler manipulates <code>list.data</code>. The <code>list</code> attribute on the <code>input</code> element refers to the <code>datalist</code> element by its <code>id</code>, so it knows what it is populating. All we need to do to load the data from the specified location is manipulate the <code>data</code> attribute - the location is <code>?w</code> plus the user input, which is encoded into a URI compatible syntax using the <code>encodeURIComponent</code> function (part of the global object). So if the user enters <em>foo</em> the URI fetched will be <code>?w=foo</code> (resolved relative to the URI of the page the script runs on). A server-side file receives this URI, searches a text file full of possible words for this text string, and then returns an XML file containing the words that contain the text string, to populate the datalist. This all happens nice and dynamically, so as soon as you change the search term inside the text input, the server-side file processes the new search term and sends an updated XML file, changing the contents of the <code>datalist</code> element accordingly.</p>

<p>I&#39;ve provided a working example of this for you to try out yourselves - download the files from <a href="examples.zip" alt="The example files to accompany this article">here</a>, or check out the live demo at <a href="http://html5.org/demos/dev.opera.com/article-example-suggest.py" alt="Live demo for the HTML5 Google suggest">http://html5.org/demos/dev.opera.com/article-example-suggest.py</a>.</p>
<p>The files for this example are:</p>

<ul>
<li>A newline-delimited file of suggestions called suggest.txt, which will be parsed when the script searches for the user-entered search term</li>
<li>A Python script called article-example-suggest.py, which parses the textfile looking for the user-entered search term, and then returns the XML search results. This file also contains the input and datalist elements discussed above</li>
</ul>

<p>The full python code file looks like this:</p>
<pre><code>import os
qs = os.environ[&quot;QUERY_STRING&quot;]

# The page as shown by default
main=&quot;&quot;&quot;Content-Type:text/html;charset=UTF-8\n
&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;<title>Demo</title>&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;
    <label>
      Please enter a word:
      &lt;input list=&quot;suggest&quot; name=&quot;q&quot;
             oninput=&quot;list.data = &#39;?w=&#39; + encodeURIComponent(value)&quot;&gt;
    </label>
    &lt;datalist id=&quot;suggest&quot;&gt;&lt;/datalist&gt;
  &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;&quot;&quot;&quot;

if qs==&quot;&quot;:
    print main
else:
    # If a query string was provided we need to provide an XML file with
    # options filtered using the user input
    import sys
    print &quot;Content-type: application/xml&quot;
    print &quot;Cache-control: no-cache&quot;
    print &quot;&quot;
    sys.stdout.write(&#39;&lt;select xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;&#39;)
    sys.stdout.write(&#39;  <option>[searching for &quot;%s&quot;]</option>&#39; % qs[2:])
    for name in open(&#39;suggest.txt&#39;).readlines():
        if name.lower().find(qs[2:].lower())!=-1:
            sys.stdout.write(&#39;<option>%s</option>&#39; % name)
    sys.stdout.write(&#39;&lt;/select&gt;&#39;)
</code></pre>

<h2>Summary</h2>
<p>I hope you enjoyed these examples! (Many thanks to Johannes Hoff (Core developer at Opera) for writing the above Python script after I hinted in a presentation that Google Suggest was only a few lines of code using HTML5 - turned out to be true both on the client and server.) They are not ready for mass production yet, but they do give you another interesting taste of what is to come with HTML5.</p>
          </p>
