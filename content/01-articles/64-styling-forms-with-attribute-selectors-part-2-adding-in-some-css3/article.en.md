Title: Styling Forms with Attribute Selectors - Part 2: adding in some CSS3
----
Date: 2007-12-12 14:44:47
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
<li class="prev"><a href="http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors/" rel="prev" alt="link to the 1st part of the article">Styling Forms with Attribute Selectors - Part 1</a></li>
</ul>

<h2>Introduction</h2>

<p><a href="http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors/" alt="The first part of this article">In the first part of this article</a>, I talked about attribute selectors and how use them to pinpoint CSS rules onto specific form elements. In this article, I&#39;ll continue to talk about styling form controls, but this time using CSS3 selectors to style form controls under specific conditions - if the form control is enabled, disabled or checked.</p>

<h2>Disabled HTML Form Controls</h2>

<p>Disabling HTML form controls has been around since version 4 of HTML. What does disabling a form control mean? It means three things happen:</p>

<ol>
<li>The disabled form control does not receive focus</li>
<li>The disabled form control is skipped in tabbed navigation</li>
<li>The information the form control contains does not get sent</li>
</ol>

<p>The markup for a disabled HTML form control looks like the following example:</p>

<pre><code>&lt;input name=&quot;disabled&quot; type=&quot;text&quot; value=&quot;Hello, world!&quot; disabled&gt;</code></pre>

<p>Since XHTML mandates that all attributes should be paired with a value, the markup needs to be tweaked in order to be valid. Therefore the markup for disabling a form control should really look like this:</p>

<pre><code>&lt;input name=&quot;disabled&quot; type=&quot;text&quot; value=&quot;Hello, world!&quot; disabled=&quot;disabled&quot; /&gt;</code></pre>

<h2>Enabled HTML Form Controls</h2>

<p>What is an enabled HTML form controls? It is the default state of any control that isn&#39;t disabled through the <code>disabled</code> attribute or a script that effectively makes it disabled via the Document Object Model (DOM).</p> 

<p>Technically, enabled form controls are form controls that are submitted, do receive focus and allow their data to be sent to the server when the form is processed successfully.</p>

<p>Here is an example of a simple enabled control followed by a disabled HTML form control (the output of this is shown in Figure 1.)</p>

<pre><code>&lt;p&gt;Enabled:&lt;br /&gt;
&lt;input name=&quot;enabled&quot; type=&quot;text&quot; value=&quot;Hello, world!&quot; /&gt;
&lt;/p&gt;

&lt;p&gt;Disabled:&lt;br /&gt;
&lt;input name=&quot;disabled&quot; type=&quot;text&quot; value=&quot;Hello, world!&quot; disabled=&quot;disabled&quot; /&gt;
&lt;/p&gt;</code></pre>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/64-styling-forms-with-attribute-selectors-part-2-adding-in-some-css3/forms2_01.png" alt="The difference in default styling of enabled and disabled forms" /></p>
 
<p class="comment">Figure 1. The difference in default styling of enabled and disabled form controls</p>

<h2>Styling Disabled HTML Form Controls</h2>

<p>Let&#39;s review the basic HTML structure of the form I created in the first part of this article. It&#39;s the same as the original in the first part, but in this case I&#39;m disabling the form elements in the bottom section and therefore need to include the <code>disabled</code> attribute (as shown in Figure 2.)</p>

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
    …
&lt;/select&gt;
  <label for="bdate">Birth date:</label>
  &lt;select name=&quot;bdate&quot;&gt;
    <option value="">Date:</option>
    …
  &lt;/select&gt;
  <label for="byear">Birth year:</label>
  &lt;select name=&quot;byear&quot;&gt;
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
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;uname&quot; value=&quot;&quot; size=&quot;&quot; disabled=&quot;disabled&quot; /&gt;
  <br />
  <label for="upass">Password:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;upass&quot; value=&quot;&quot; size=&quot;&quot; disabled=&quot;disabled&quot;  /&gt;
  <br />
  <label for="unpass2">Retype password:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;upass2&quot; value=&quot;&quot; size=&quot;&quot; disabled=&quot;disabled&quot;  /&gt;
  <br />
  <label for="uemail">Email address:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;uemail&quot; value=&quot;&quot; size=&quot;&quot; disabled=&quot;disabled&quot;  /&gt;
  <br />
  <label for="uemail2">Retype email address:</label>
  &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;uemail2&quot; value=&quot;&quot; size=&quot;&quot; disabled=&quot;disabled&quot;  /&gt;
  </fieldset>
  &lt;input class=&quot;submit&quot; type=&quot;submit&quot; value=&quot;Submit&quot; /&gt;
&lt;/form&gt;</code></pre>

 <p><img src="http://forum-test.oslo.osa/kirby/content/articles/64-styling-forms-with-attribute-selectors-part-2-adding-in-some-css3/forms2_02.png" alt="Our example layout, showing the disabled form elements at the bottom" /></p>
 
<p class="comment">Figure 2. Our example form layout, with disabled form controls in the bottom portion of the form.</p>

<p>In Figure 2, even though I&#39;m clicking on an <code>input</code> control to bring focus to it, the browser keeps me from doing that - the <code>disabled</code> attributes are doing their job as expected.</p>

<p>There&#39;s a stylistic issue here however - the form fields are bright white and therefore might look like they can be filled in, when currently they can&#39;t. To improve this situation, I added the following simple rule to my CSS design:</p>

<pre><code>input[type=&quot;text&quot;]:disabled {
  opacity: .7;
}</code></pre>

<p>This rule gives the result shown in Figure 3.</p>
 
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/64-styling-forms-with-attribute-selectors-part-2-adding-in-some-css3/forms2_03.png" alt="Making the disabled form elements look more disabled using CSS 3 opacity" /></p> 
 
<p class="comment">Figure 3. Lowering the opacity of the form controls to make them look disabled.</p>

<h2>The filter property - needed for IE support</h2>

<p>The CSS3 <a href="http://www.w3.org/TR/css3-color/#transparency"><code>opacity</code> property</a> has been implemented in the latest Opera browser, and is also supported by Safari, Firefox, and Netscape.</p> 

<p>While IE doesn&#39;t support the CSS3 selectors discussed in this article, it is possible to get a similar transparency effect in IE using Microsoft&#39;s proprietary <a href="http://msdn.microsoft.com/en-us/library/ms532847%28v=VS.85%29.aspx"><code>filter</code> property</a> in addition to the <code>opacity</code> filter to achieve greater cross-browser support:</p>

<pre><code>H3 {
  opacity: .7;
  filter: alpha(opacity=70);
}</code></pre>

<p>Lowering the <code>opacity</code> of the disabled field does a couple of things. First it lessens the presence of the form field, seemingly moving it into the background of the Web page, which reinforces the notion that the element shouldn&#39;t be touched - this is what we want. We don&#39;t want to confuse site visitors any more than we have to.</p> 

<p>Second, the opacity helps create consistent color schemes. By lowering the opacity instead of citing a specific color, the background color comes through the translucent <code>input</code> fields, so the elements look like they belong with the rest of the site design even if the background color changes.</p>

<h2>Stepping Further</h2>

<p>I can also add pseudo-elements in conjunction with the pseudo-classes to add a text warning to our users:</p>

<pre><code>input[type=&quot;text&quot;]:disabled:after {
  content: &quot;(disabled - do not use)&quot;;
  font-size: .9em;
  color: #CCCCCC;
  display: block;
}</code></pre>

<p>The result of applying this rule is shown in Figure 4:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/64-styling-forms-with-attribute-selectors-part-2-adding-in-some-css3/forms2_04.png" alt="Adding labels to make it clearer that the form elements are disabled" /></p>
 
<p class="comment">Figure 4. Adding more feedback for the user.</p>

<h2>Enabling Styles</h2>

<p>Styling enabled elements is more straightforward. We don&#39;t need to add extra markup to make the elements disabled for a start. The below CSS rules add some styling to the radio buttons:</p>

<pre><code>option:enabled {
  color: #9F393F;
}

input:enabled { 
  background: #21B6A8;
  color:#9F393F; 
}</code></pre>

<p>This produces an output as seen in Figure 5:</p>
 
<p><img src="http://forum-test.oslo.osa/kirby/content/articles/64-styling-forms-with-attribute-selectors-part-2-adding-in-some-css3/forms2_05.png" alt="Styling the radio buttons using CSS3 selectors" /></p> 
 
<p class="comment">Figure 5. Styled radio buttons</p>

<h2>Checking Styles</h2>

<p>With CSS3 selectors we can now style checked form elements just as easily as any other radio button, like so:</p>

<pre><code>input[type=&quot;radio&quot;]:checked {
  background: #9F393F;
}</code></pre>

<p>Now try <a href="CSS3FormsPart2_code.zip">running the example</a> and clicking a radio button, and you&#39;ll see a result like Figure 6.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/64-styling-forms-with-attribute-selectors-part-2-adding-in-some-css3/forms2_06.png" alt="Styling checked for  elements using CSS 3 selectors" /></p>
 
<p class="comment">Figure 6. Styling checked controls.</p>

<h2>CSS3 Support - Opera came out on top</h2>

<p>At the time of writing, the only browsers that support the <code>:disabled</code>, <code>:enabled</code>  and <code>:checked</code> selectors are Opera 9.5 and to some extent Firefox 2 and 3, however I didn&#39;t have robust support for the selectors in Firefox like I did in Opera 9.5. The stepping further approach of coupling content auto-generation after the <code>:disabled</code> selector doesn&#39;t work. Also, the coloring of the text from the <code>:enabled</code>  CSS rule occurred only after I clicked on the form controls.</p>

<h2>In Conclusion</h2>

<p>This wraps up our two-part article series on styling forms. We&#39;ve covered attribute selectors as well as new CSS3 selectors that offer greater control over styling Web forms than ever before.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/styling-forms-with-attribute-selectors/" rel="prev" alt="link to the 1st part of the article">Styling Forms with Attribute Selectors - Part 1</a></li>
</ul>
  
