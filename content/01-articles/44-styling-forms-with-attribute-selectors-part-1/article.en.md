Title: Styling Forms with Attribute Selectors - Part 1
----
Date: 2007-10-25 18:54:27
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
<li class="next"><a href="http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors-1/" rel="next" alt="link to the 2nd part of the article">Styling Forms with Attribute Selectors - Part 2: adding in some CSS3</a></li>
</ul>

<h2>Introduction</h2>

<p>In this article, the first of a two-part series, we will look at attribute selectors and how do
they allow us to better style portions of a Web documents. In this example, we focus on Web forms,
although attribute selectors can be applied to any area of a Web document. <a href="http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors-1/">The second part</a> will
look at CSS 3 pseudo-classes for styling of form elements.</p>

<p>Note that the code examples for this article <a href="code.zip" alt="Download the code examples for this article here">can be downloaded here</a>.</p>

<p>Attribute selectors have been a part of the World Wide Web Consortium&#39;s CSS specification since
version 2 was finalised - that was in 1998. Sadly, support for attribute selectors hasn&#39;t been
widely available in popular browsers until very recently. Now, with the new version of Opera and
solid support in other modern browsers like Safari, Internet Explorer 7 for Windows, Firefox and
Navigator, we don&#39;t have to wait around any more.</p>

<h2>Benefiting from Attribute Selectors</h2>

<p>What&#39;s so special about attribute selectors? Their main strength is that they allow for the
association of style rules to elements without any additional markup than what is usually already
baked into the code.</p>

<p>As a brief example, if we wanted to style a submit button, the markup would look something
like this:</p>

<pre><code>&lt;input type=&quot;submit&quot; value=&quot;submit&quot; class=&quot;submit&quot; /&gt;</code></pre>

<p>Even though the value for both the type and value attributes is the same - &quot;submit&quot; - older
browsers wouldn&#39;t be able to style the element unless we went with a general <strong>type selector</strong> or a
<strong>class selector</strong>:</p>

<pre><code>input { /* type selector */
  border: 1px solid black;
}
.submit { /* class selector */
  border: 1px solid black;
}</code></pre>

<p>The former method doesn&#39;t work, especially if there is more than one type of input element on a
Web document and you want to style them individually. With ecommerce and Web applications needing
to receive a lot of information from you, chances are one input field per page isn&#39;t going to work.
Imagine filling out an Amazon.com order 100 Web pages long? (For a quick moment, brick and mortar
businesses got popular again.)</p>

<p>So, using class selectors had been the de facto method for styling Web forms. The code for a
typical Web form with class selectors (there are 8 of them in all) looks something like this:</p>

<pre><code>&lt;form action=&quot;script.php&quot; method=&quot;get&quot;&gt;
  <fieldset>
  <legend>Personal Information</legend>
  <label for="gender">Sex:</label>
  &lt;input class=&quot;radio&quot; type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot; /&gt;
  Male
  &lt;input class=&quot;radio&quot; type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot; /&gt;
  Female <br />
  <label for="bmonth">Birthday:</label>
  &lt;select name=&quot;bmonth&quot;&gt;
    <option value="">Month:</option>
    <option value="1">Jan</option>
    ...
&lt;/select&gt;
  <label for="bdate">Birth date:</label>
  &lt;select name=&quot;bdate&quot;&gt;
    <option value="">Date:</option>
    ...
  &lt;/select&gt;
  <label for="byear">Birth year:</label>
  &lt;select name=&quot;byear&quot; disabled&gt;
    <option value="">Year:</option>
    <option value="">1975</option>
    <option value=""></option>
  &lt;/select&gt;
  <br />
  <label for="hstate">State:</label>
  &lt;select name=&quot;hstate&quot;&gt;
    <option value="">select...</option>
    <option value="FL">Florida</option>
    <option value="OH">Ohio</option>
  &lt;/select&gt;
  <br />
  <label for="hcountry">Country:</label>
  &lt;select name=&quot;hcountry&quot;&gt;
    <option value="">select...</option>
    <option value="norway">Norway</option>
    <option value="usa">United States</option>
  &lt;/select&gt;
  </fieldset>
  <fieldset>
  <legend>Site Registration</legend>
  <label for="uname">Username:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;uname&quot; value=&quot;&quot; size=&quot;&quot; /&gt;
  <br />
  <label for="upass">Password:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;upass&quot; value=&quot;&quot; size=&quot;&quot; /&gt;
  <br />
  <label for="unpass2">Retype password:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;upass2&quot; value=&quot;&quot; size=&quot;&quot; /&gt;
  <br />
  <label for="uemail">Email address:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;uemail&quot; value=&quot;&quot; size=&quot;&quot; /&gt;
  <br />
  <label for="uemail2">Retype email address:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;uemail2&quot; value=&quot;&quot; size=&quot;&quot; /&gt;
  </fieldset>
  &lt;input class=&quot;submit&quot; type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;
&lt;/form&gt;</code></pre>

<p>By default, the unstyled page looks like Figure 1 when rendered in a browser:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/44-styling-forms-with-attribute-selectors-part-1/unstyled.jpg" alt="An unstyled HTML form rendered in a browser" /></p>
<p class="comment">Figure 1. An unstyled Web form</p> 

<p>With the markup in place, let&#39;s apply a basic CSS-enabled design to the piece. Notice that the
last three declaration blocks use class selectors to help define the design:</p>

<pre><code>body {
  background-color: #B67721;
  color: #FFF8DC;
  font-family:Verdana, Arial, Helvetica, sans-serif;
  font-size: .9em;
}
fieldset {
  position: relative;
  margin: 15px 0 15px 0;
  padding: 25px 0;
  border: 1px solid #7F5417;
}
legend {
  position: absolute;
  top: -11px;
  left: 8px;
  background-color: #7F171F;
  border: 1px solid #9F393F;
  padding: 3px;
}
label {
  display: block;
  float: left;
  width: 193px;
  text-align: right;
  padding-right: 7px;
  margin-bottom: 7px;
}
br {
  clear: both;
}
.text {
  border: 1px solid #177F75;
  font-family:Verdana, Arial, Helvetica, sans-serif;
}
.submit {
  margin-left: 201px;
  background-color: #00CC00;
}
.text, select {
  display: block;
  float: left;
  margin-bottom: 7px;
}</code></pre>

<p>The result of applying this CSS to our earlier markup looks like Figure 2:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/44-styling-forms-with-attribute-selectors-part-1/styled.jpg" alt="Our HTML form with CSS styling applied to it" /></p>
<p class="comment">Figure 2. A basic stylized Web form</p> 

<h2>Using Attribute Selectors</h2>

<p>To cure our classitis, we first begin by removing class attributes and their values from the
markup. For example, the text field for the username looks like this:</p>

<pre><code>&lt;input class=&quot;radio&quot; type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot; /&gt;
&lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;uname&quot; value=&quot;&quot; size=&quot;&quot; /&gt;</code></pre>

<p>After removing the class attributes the markup looks like so:</p>

<pre><code>&lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot; /&gt;
&lt;input type=&quot;text&quot; name=&quot;uname&quot; value=&quot;&quot; size=&quot;&quot; /&gt;</code></pre>

<p>Next comes the addition of the attribute selectors to replace the class selectors. The format
of the attribute selector is very straightforward, as shown below - you simply use a type selector
and then in square brackets indicate which attribute and value pairing you want to isolate for
styling:</p>

<pre><code>input[type=&quot;text&quot;] {
  border: 1px solid #177F75;
  font-family:Verdana, Arial, Helvetica, sans-serif;
}
input[type=&quot;submit&quot;]{
  margin-left: 201px;
  background-color: #00CC00;
}
input[type=&quot;text&quot;], select {
  display: block;
  float: left;
  margin-bottom: 7px;
}</code></pre>

<p>The markup and CSS change, but the presentation of the page stays exactly the same.</p>

<p>You can see an immediate advantage in terms of reducing the size and complexity of your code;
however, attribute selectors are not simply confined to picking out input fields or type
attributes. For example, we can specify a CSS rule that will move the birthday select elements to
be closer together, giving the date inputs a much nicer look:</p>

<pre><code>label[for=&quot;byear&quot;], label[for=&quot;bdate&quot;] {
  position: absolute;
  left: -999px;
  width: 990px;
}</code></pre>

<p>Adding this rule to your stylesheet produces the result seen in Figure 3:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/44-styling-forms-with-attribute-selectors-part-1/positionedDate.jpg" alt="Our HTML form with the date inputs positioned more neatly" /></p>
<p class="comment">Figure 3. Removing the label elements for the birthday and sliding the date inputs closer together</p> 

<p>Note that typically we could remove an element like the two label elements above using the
display property set to none. However, this presents an accessibility issue - almost all
screenreaders would miss out the elements hidden in this fashion. So, in order to keep the content
available for readers with visual impairments, set the position to absolute and move it out of the
way with the left properties.</p>

<h2>Summary</h2>

<p>In this tutorial, we introduced attribute selectors and how to use them in a Web form.
In the next tutorial we are going to examine how to use a few CSS 3 selectors to help style the
form even further.</p>

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors-1/" rel="next" alt="link to the 2nd part of the article">Styling Forms with Attribute Selectors - Part 2: adding in some CSS3</a></li>
</ul>
  
