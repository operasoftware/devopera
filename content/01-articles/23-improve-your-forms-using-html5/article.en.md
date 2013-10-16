Title: Improve your forms using HTML5!
----
Date: 2006-12-13 16:22:20
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - No Derivs 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-nd/2.5/
----
Text:

<div class="note">
 <h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">16th December 2011: This article is obsolete</h2>

<p>This article is obsolete/out of date, so should no longer be treated as a current or reliable source of information. Please consult <a href="http://dev.opera.com/articles/view/new-form-features-in-html5/">New form features in HTML5</a> for a more complete, up to date view.</p>
 </div>

<p><abbr title="HyperText Markup Language">HTML</abbr> hasn&#39;t really been updated since <abbr>HTML</abbr> version 4 was released back in 1998. However, the <a href="http://www.whatwg.org/"><abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr> community</a> has been working on HTML since 2004 and then passed to the W3C which takes the form of the <a href="http://dev.w3.org/html5/spec/Overview.html">W3C HTML5 specifications</a>. This article shows some of the new functionality of the proposed form chapter of <abbr>HTML</abbr>5: <a href="http://www.whatwg.org/specs/web-forms/current-work/">Web Forms 2</a>. Opera supports Web Forms 2 from Version 9.5 or later. To test it, <a href="http://www.opera.com/browser">grab the latest version of Opera.</a>

<h2><code>autofocus</code> and omitting attributes</h2>
<p>The new Web Forms allows you to do validation and a number of other features in a more declarative way making it much easier to author. For instance this code example:</p>
<pre id="example-autofocus-wrong">&lt;form action=&quot;&quot; method=&quot;get&quot;&gt;<code>
 &lt;p&gt;&lt;label&gt;Search: &lt;input name=search type=&quot;text&quot; id=&quot;search&quot;&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;script&gt; document.getElementById(&#39;search&#39;).focus() &lt;/script&gt;
 <span class="comment">&lt;!-- the rest of the form --&gt;</span>
&lt;/form&gt;</code></pre>
<p>can be written using the new form functionality as follows:</p>
<pre id="example-autofocus-right"><code>&lt;form&gt;
 &lt;p&gt;&lt;label&gt;Search: &lt;input name=search <span class="m">autofocus</span>&gt;&lt;/label&gt;&lt;/p&gt;
  <span class="comment">&lt;!-- the rest of the form --&gt;</span>
&lt;/form&gt;</code></pre>

<p>Some code has been removed from the example and a new attribute, <code class="mattr">autofocus</code>, has been added. The <a href="http://www.whatwg.org/specs/web-forms/current-work/#the-autofocus"><code class="mattr">autofocus</code></a> attribute effectively removed the need for the <code class="mtag">script</code> element and the <code class="mattr">id</code> attribute on <code class="mtag">input</code> which was used by the script. The <code class="mattr">method</code> attribute on the <code class="mtag">form</code> element can be omitted because the form will do a <code>GET</code> request by default. Similarly, <code class="mtag">input</code> controls are <code class="mvalue">text</code> by default. Per Web Forms 2 you can also omit the <code class="mattr">action</code> attribute when set to the empty string. Indeed, it will give you the same result.</p>

<h2>Form validation</h2>
<p>Nowadays web developers use nifty scripts to perform form validation on the client side. Soon you&#39;ll be able to simply write the following:</p>
<pre id="example-validation"><code>&lt;form&gt;
 &lt;p&gt;&lt;label&gt;Name: &lt;input name=name <span class="m mattr">required</span>&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;E-mail: &lt;input name=email <span class="m">type=<span class="mvalue">email</span> required</span>&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;URL: &lt;input name=url <span class="m">type=url</span>&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;label&gt;Comment: &lt;textarea name=comment <span class="m mattr">required</span>&gt;&lt;/textarea&gt;&lt;/label&gt;&lt;/p&gt;
 &lt;p&gt;&lt;input type=submit value=React!&gt;&lt;/p&gt;
&lt;/form&gt;</code></pre>
<p>I&#39;d argue that it&#39;s almost as readable as English! When the user tries to submit the form the user agent checks if all conditions are being met and if that&#39;s the case it submits the form and otherwise it shows an error message to the user. Of course, you should always have server-side validation but in case the user agent supports the new forms this might just save your user a few round trips. Better for usability and your bandwidth.</p>
<p>What I&#39;ve introduced in the above example are a few of the new controls: <code class="mvalue"><a href="http://www.whatwg.org/specs/web-forms/current-work/#email">email</a></code> and <code class="mvalue"><a href="http://www.whatwg.org/specs/web-forms/current-work/#url">url</a></code>. And also a new attribute available to all form controls: <a href="http://www.whatwg.org/specs/web-forms/current-work/#the-required"><code>required</code></a>. Besides these, Web Forms 2 also includes controls for dates, time and numbers.</p>

<h2>Styling controls</h2>
<p>If you want to style a required form control (<code>&lt;input required&gt;</code>) that&#39;s quite trivial using some of the new pseudo-classes:</p>
<pre>input:required { background:yellow }</pre>
<p>Simarly for disabled controls, checked checkboxes, the default submit button, read-only controls, et cetera:</p>
<pre>input:disabled { ... }
input:checked + label { ... }
input[type=button]:default { ... }
input:read-only { ... }</pre>

<p><a href="example.html">This form example</a> shows these features in action.</p></p>
