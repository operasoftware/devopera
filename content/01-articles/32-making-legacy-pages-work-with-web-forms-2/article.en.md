Title: Making legacy pages work with Web Forms 2
----
Date: 2007-04-05 20:25:24
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

The <a href="http://www.whatwg.org/specs/web-forms/current-work/">Web Forms 2 specification</a>, part of the HTML5 work at <a href="http://www.whatwg.org/">WHAT WG</a>, makes it easier to write and validate forms - but some compatibility problems with legacy scripts exist. I have seen legacy content run into the following classes of problems:

<ul>
<li>Un-intended form validation prevents submitting forms</li>
<li>Legacy scripts are confused by new DOM properties</li>
<li>Some properties are resolved as URLs
<li>Form.submit() throws error if form validation fails</li>
</li></ul>

Below I will explain each of these with examples and show how you can work around or fix the problems. For more details on how to use Web Forms 2 for new or reworked websites, refer to the article <a href="http://dev.opera.com/articles/view/improve-your-forms-using-html5/">improve your forms using HTML5</a>.

<h2>Unintentional validation</h2>

<img src="/articles/view/making-legacy-pages-work-with-web-forms/squidoo.jpg" align="right" alt="Squidoo web site problem screenshot" />

<p>Forms need validation. User-friendly, helpful, client-side validation. <a href="http://www.quirksmode.org/book/examplescripts/forms/index.html">Plenty</a> <a href="http://www.xs4all.nl/~sbpoley/webmatters/formval.html">of</a> <a href="http://alistapart.com/articles/scripttriggers/">validation</a> <a href="http://tech.groups.yahoo.com/group/validation/">examples</a> <a href="http://developer.apple.com/internet/webcontent/validation.html">exist</a>, using JavaScript of various flavours. Some of these JavaScript libraries work by looking for specific attributes the webmaster adds to the form markup.</p>


<p>If these custom attributes have the same name as Web Forms 2 attributes, they can cause validation to kick in, sometimes in ways the webmaster did not expect. This built-in validation will prevent the user from submitting the form, so the form and possibly the web site might become unusable.</p>


<p>Here is one example of un-intended validation: trying to <a href="http://www.squidoo.com/member/login">log in to Squidoo</a> would show a somewhat cryptic error message saying the E-mail address &quot;is not in the format this page requires&quot;.</p>


<p>Here is an excerpt of their old form code (the issue has since been fixed by them):</p>

<pre><code class="markup">&lt;input required=&quot;true&quot; <b>pattern=&quot;email&quot;</b> type=&quot;text&quot; value=&quot;&quot; tabindex=&quot;1&quot;
 name=&quot;email_address&quot; id=&quot;email_address&quot;  /&gt;
</code></pre>

<p>The problem with that is that the <b>pattern</b> attribute <a href="http://www.whatwg.org/specs/web-forms/current-work/#the-pattern">should</a> be a regular expression. </p>


<p>Something like this:</p>

<pre><code class="markup">&lt;input required=&quot;true&quot; <b>pattern=&quot;.*@.*\..*&quot;</b> type=&quot;text&quot; value=&quot;&quot; tabindex=&quot;1&quot;
 name=&quot;email_address&quot; id=&quot;email_address&quot;  /&gt;
</code></pre>

<p>would turn the &quot;pattern&quot; attribute into a proper regular expression. (I know that&#39;s simplistic, I just don&#39;t want to divert into the endless debate about finding the perfect regexp for E-mail addresses..).</p>

<p>Now, the validation script needs to be updated to take that into account of course. First of all, it can &quot;learn&quot; not to validate forms in WF2-browsers since that is handled by the browser. For example on Squidoo, they have a function called validate that receives a form as its argument. They could write </p>

<pre><code class="script">function validate(form){
  if(form.checkValidity){ return; } // browser has built-in validation
</code></pre>

<p>..then rewrite the part that checks the &quot;pattern&quot; attribute for the other browsers to read the regexp directly from the pattern.</p>

<p>They could of course do even better and use an</p> <pre><code>&lt;input <b>type=&quot;email&quot;</b> required name=&quot;email_address&quot;&gt;</code></pre><p>to make the browser&#39;s built-in validation check if the input looks like an E-mail address before allowing the form to be submitted.</p>

<p>If for some reason fixing it properly is not an option, they could also fix such a problem by throwing in a workaround. This is sort of the fireman&#39;s approach, and a correct fix is naturally much better. Below is an example of how to listen for the &quot;invalid&quot; event which fires when form validation finds invalid fields, and remove problematic &quot;pattern&quot; attributes to allow submitting forms anyway.</p>

<pre class="example"><code class="script">document.addEventListener( &#39;invalid&#39; , 
/* when an invalid event occurs, the user is trying to submit a form with invalid fields */
function(e){ 
  var input=e.target;
  if(input.validity.patternMismatch){ /* value crashed with pattern attribute */
     e.target.removeAttribute(&#39;pattern&#39;);
  }
  e.preventDefault(); /* do not show validation error */
  if(validate(e.target.form)) e.target.form.submit(); /* make sure form actually submits */

}, false );</code></pre>



<img src="/articles/view/making-legacy-pages-work-with-web-forms/freeparking.jpg" align="right" alt="Freeparking web site problem screenshot" />

<h2>Legacy scripts confused by new DOM properties</h2>

<p><a href="http://www.freeparking.co.uk/">FreeParking</a>&#39;s domain lookup is broken in Opera 9. The reason is that the script finds input.min and input.max properties, both are empty but since they are not null the script thinks the domain name is supposed to be a number.</p>

<p>The only real fix for that is to audit your custom attributes and make sure they do not conflict with Web Forms 2. The fireman could of course also check if a WF2-browser is used, meaning</p>

<pre><code>if (e.numeric || (e.min != null) || (e.max != null))</code></pre>

<p>becomes for example</p>

<pre><code>if ( e.willValidate==null &amp;&amp; (  e.numeric || (e.min != null) || (e.max != null) ) )</code></pre>

<p>since if willValidate is defined the UA would handle min and max with its built-in validation. (Of course they could also just remove the null comparison since the empty strings will evaluate to false anyway - but they may want to be able to set an empty min or max attribute to trigger number validation..)</p>

<h2>Some properties are resolved as URLs</h2>

<p>Web Forms 2 lets you write for example <code>&lt;input type=&quot;submit&quot; <b><a href="http://www.whatwg.org/specs/web-forms/current-work/#extensions3">action</a>=&quot;/bar.cgi&quot;</b>&gt;</code> or <code>&lt;select <b><a href="http://www.whatwg.org/specs/web-forms/current-work/#selectSeeding">data</a>=&quot;/mydatafile.xml&quot;</b>&gt;&lt;/select&gt;</code>. (Click the attributes for more information about using them).</p>

<p>The attributes &quot;action&quot; on INPUT and &quot;data&quot; on SELECT elements are expected to be URLs. URLs are typically resolved according to the address of the page the script runs on. This means that when <a href="http://mail.google.com/">GMail</a> did the following:</p>

<pre><code>
input.action=5;
.
.
switch(input.action)
    case 5:
        // do something
</code></pre>

<p>the resolved value of input.action was not the expected &quot;5&quot;, it was &quot;http://mail.google.com/mail/5&quot;, and the switch statement failed miserably at working out what the expected &quot;action&quot; of that button was.</p>

<p>To fix this type of problem, avoid custom attribute names that conflict with Web Forms 2. You can also use <code>.setAttribute()</code> and <code>.getAttribute()</code> since the latter will return the un-resolved version of the URL.</p>

<h2><code>Form.submit()</code> throws an error if validation fails</h2>

<p>If custom attributes or legacy scripts trigger unintended form validation, calling the <code>submit()</code> method of the form will <a href="http://www.whatwg.org/specs/web-forms/current-work/#form-submission">throw an error</a>. For example </p>

<pre><code>&lt;input name=&quot;foo&quot; required &gt;
.
.
form.submit();
</code></pre>

<p>will cause an error similar to this one in the JavaScript console:</p>

<pre><code>
JavaScript - data:text/html,&lt;form&gt;&lt;input name=&quot;foo&quot; required&gt;&lt;/form&gt; &lt;a href=&quot;javascript:document.forms[0].submit()&quot;&gt;test&lt;/a&gt;
Javascript URL thread: &quot;javascript:document.forms[0].submit()&quot;
Error:
Unhandled exception: [Object DOMException]
code: 12
message: SYNTAX_ERR - Form didn&#39;t validate in submit()
Backtrace:
  Line 1 of unknown script 
    document.forms[0].submit();
</code></pre>

<p>To fix this, if the validation errors are genuine you can call <code>form.checkValidity()</code> before <code>form.submit()</code> to make the browser report validation errors to the user. For example: </p>

<pre><code>if (form.checkValidity ){// browser supports validation
    if( ! form.checkValidity()){ // form has errors,
        // the browser is reporting them to user 
        // we don&#39;t need to take any action

    }else{ // passed validation, submit now
        form.submit();
    }
}else{ // browser does not support validation
    form.submit();
}
</code></pre>

<p>This snippet will ensure validation errors are shown to the user.</p>

<p>If, on the other hand, you want to submit the form regardless of validation errors it would be a good idea to change your custom attribute names to avoid the invalid state. Otherwise you need to iterate over the form elements, check <code><a href="http://www.whatwg.org/specs/web-forms/current-work/#validity">element.validity.valid</a></code> for each to find the problem, and remove or alter the validation attributes that caused an unwanted validity state.</p>


<p>HTML5 and Web Forms 2 gives web developers new and convenient tools, and if you know what the issues are fixing problems with legacy content is relatively easy. I hope this article was useful and that it inspires you to investigate the possibilities of using Web Forms 2 features for your forms.</p>

<p>A <a href="http://my.opera.com/hallvors/blog/show.dml/476181">shorter version of this article</a> was first posted on <a href="http://my.opera.com/hallvors/blog/">my blog</a>.</p>
