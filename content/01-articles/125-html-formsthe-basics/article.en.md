Title: HTML forms—the basics
----
Date: 2008-07-08 07:16:24
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">11th October 2012: Material moved to <a href="http://www.webplatform.org">webplatform.org</a></h2>

<p style="padding-bottom: 20px;">The Opera web standards curriculum has now been moved to the <a href="http://docs.webplatform.org/wiki/Main_Page">docs section of the W3C webplatform.org site</a>. Go there to find updated versions of these docs, and much more besides!</p>

<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">12th April 2012: This article is obsolete</h2>

<p>The web standards curriculum has been donated to the <a href="http://www.w3.org/community/webed/">W3C web education community group</a>, to become part of a much bigger educational resource. It is constantly being updated so that it remains current with modern web design practices and technologies. To find the most up-to-date web standards curriculum, visit the <a href="http://www.w3.org/community/webed/wiki/Main_Page">web education community group Wiki</a>. Please make changes to this Wiki yourself, or suggest changes to <a href="mailto:cmills@opera.com">Chris Mills</a>, who is also the chair of the web education community group.</p>
</div>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/19-html-tables/" rel="prev" title="link to the previous article in the series">Previous article—HTML tables</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/21-lesser-known-semantic-elements/" rel="next" title="link to the next article in the series">Next article—Lesser known semantic elements</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>

<p>Everyone has seen a form. Everyone has used one.  But have you coded one?</p>

<p>A form online is any area where you can input information into a web page, for example entering text or numbers into a text box, checking a tick box, causing a radio button to “fill in”, or selecting an option from a list. The form is then submitted to the web site when you push the submit button.</p>

<p>You’ll see forms used on the Web everywhere, for entering user names and passwords on login screens, commenting on blogs, filling your profile in on a social networking site, or specifying billing information on a shopping site. </p>

<p>It is easy to create a form, but what about a web standards compliant form?  By now, if you have been working through the Opera Web Standards Curriculum, you  are hopefully convinced that web standards are the way to proceed forward.  The code required to create a standards compliant accessible form are no more work to implement than a sloppy form.</p>

<p>So, let’s start with the most basic and simple form that one could possibly want to use and build our way up in complexity after that—in this article I’ll cover all the basics you need to know to create elegant, accessible form structures with HTML. The article structure is as follows:</p>

<ul>
<li><a href="#stepone">Step one: The basic code</a></li>
<li><a href="#steptwo">Step two: Adding structure and behaviour</a></li>
<li><a href="#stepthree">Step three: Adding semantics, style and a bit more structure</a></li>
<li><a href="#summary">Summary</a></li>
<li><a href="#furtherreading">Further reading</a></li>
<li><a href="#exercises">Exercise questions</a></li>

</ul>

<h2 id="stepone">Step one: The basic code</h2>

<p>Let’s start off with a really basic comment form, the sort of form you would use on a web site to allow people to give you feedback on something such as an article you’ve written, or allow someone to contact you without knowing your e-mail address. The code looks like this:</p>

<pre>&lt;form&gt;
Name: &lt;input type=&quot;text&quot; name=&quot;name&quot; id=&quot;name&quot; value=&quot;&quot; /&gt;
Email: &lt;input type=&quot;text&quot; name=&quot;email&quot; id=&quot;email&quot; value=&quot;&quot; /&gt;
Comments: &lt;textarea name=&quot;comments&quot; id=&quot;comments&quot; cols=&quot;25&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;
&lt;input type=&quot;submit&quot; value=&quot;submit&quot; /&gt;
&lt;/form&gt;</pre>


<p>If you enter this into an HTML document and then open that document in a browser, the code is rendered as shown in Figure 1.</p>

<img src="http://dev.opera.com/articles/view/20-html-forms-the-basics/figure1.png" alt="the first form example" />
<p class="comment">Figure 1: The first, basic form example.</p>

<p>Try it for yourself—enter the above code into your own sample HTML document and load it in a browser, or <a href="step-1-form.html" title="The first form example">click here to navigate to the form in a separate page</a>. Try playing around with the different form controls to see what you can do with them.</p>

<p>As you read the code, you’ll see an opening <code>&lt;form&gt;</code> tag, a <code>&lt;/form&gt;</code> closing tag, and some bits in between the two.  The element contains two text inputs in which the page’s reader can enter their name and email address, and a textarea that can be filled with a comment to submit to the site owner.</p>  

<p>What have we got here?</p>

<ul>
<li><p><code>&lt;form&gt;&lt;/form&gt;</code>:  These two tags are essential to start and end a form—without them you don’t have a web form.  Every form must start and end with <code>&lt;form&gt;</code> and <code>&lt;/form&gt;</code> tags.</p>

<p>The <code>&lt;form&gt;</code> tag can have a few attributes, which will be explained in Step Two, but please do note that you can’t nest forms inside each other.</p>  </li>

<li><p><code>&lt;input&gt;</code> (should be <code>&lt;input /&gt;</code> if you’re using an XHTML doc type): This tag defines the area where you can insert information.  In our case above, <code>input</code> tags define text boxes where site visitors can type in their name and email.</p>

<p>Every input tag must have a <code>type</code> attribute to define what it will receive: the possible attribute values are <code>text</code>, <code>button</code>, <code>checkbox</code>, <code>file</code>, <code>hidden</code>, <code>image</code>, <code>password</code>, <code>radio</code>, <code>reset</code> or <code>submit</code>. </p>

<p>Every <code>&lt;input&gt;</code> tag must also have a name (except in special cases where the <code>value</code> attribute is always set to the same value as the <code>type</code> attribute, eg <code>type=&quot;submit&quot;</code> or <code>&quot;reset&quot;</code>), which you the coder can decide on.  The <code>name</code> attribute informs the thing the data is sent to when the form is submitted (be it a database, or an email sent to the site’s administrator via a server-side script) what the name of the information in the input box is. When the form is submitted, most scripts use the <code>name</code> attribute to place the form data into a database or into an email that can be read by a person.</p>

<p>Thus, if the <code>&lt;input&gt;</code> element is for the site visitor to enter their name into, then the <code>name</code> attribute would be <code>name=&quot;name&quot;</code> or <code>name = &quot;first name&quot;</code>, etc.  If the <code>&lt;input&gt;</code> tag is for an email address, then the <code>name</code> attribute would be <code>name=&quot;email&quot;</code>. To make it easier on yourself, and the person who will use the form, it is recommended that you name the <code>&lt;input&gt;</code> element in a semantic fashion.</p>

<p>By semantically, I mean naming it according to what its function is, as detailed above.  If the input is to receive an email address, then name it  <code>name=&quot;email&quot;</code>.  If it is to be the street address of the site visitor, then name it <code>name=&quot;street-address&quot;</code>.  The more accurate the word usage the easier it is not only for you to code the form and then perform maintenance tasks on later, but also for the person or database receiving the form to understand it. Think lean and mean with accurate meaning.</p></li>

<li><p>Every <code>&lt;input&gt;</code> tag should also have a <code>value</code> attribute.  The value can be set to blank—<code>value=&quot;&quot;</code>—which will tell the processing script to just insert whatever the site visitor types into the box.  In the case of a checkbox, radio button, hidden, submit, or other type attributes you can set the value to equal what you want the default to be. In other cases, such as submit or hidden, you set the value to equal the final input. Examples: <code>value=&quot;yes&quot;</code> for yes,  <code>value=&quot;submit&quot;</code> for a submit button, <code>value=&quot;reset&quot;</code> for a reset button, <code>value=&quot;http://www.opera.com&quot;</code> for a hidden redirect, etc.</p>

<p>Examples of how to use the <code>value</code> attribute:</p>

<p>A blank value attribute, which the user input determines the value of:</p>
<ul>

<li><p>The code says: <code>&lt;input type=&quot;text&quot; name=&quot;first-name&quot; id=&quot;first-name&quot; value=&quot;&quot; /&gt;</code></p></li>
<li><p>The user inputs: Jenifer</p></li>
<li><p>The value of <code>first-name</code> is sent as “Jenifer” when the form is submitted.</p></li>
</ul>

<p>A predetermined value:</p>
<ul>

<li><p>The code says: <code>&lt;input type=&quot;checkbox&quot; name=&quot;mailing-list&quot; id=&quot;mailing-list&quot; value=&quot;no&quot; /&gt;</code></p></li>
<li><p>The user checks the box as they wish to join the website’s mailing list.</p></li>
<li><p>The value of <code>mailing-list</code> is sent as “yes” when the form is submitted.</p></li>
</ul>
</li>

<li><p>After the two <code>&lt;input&gt;</code> elements, you can see something a bit different—the <code>textarea</code> element.</p>

<p>The folks at <code>textarea</code> bring you a nice, new, improved space to input text into. Not your ordinary, plain old one line text box that our friend <code>&lt;input&gt;</code> provides, the <code>textarea</code> element provides multiple lines of input, and you can even define how many lines are available to enter text into.  Note the <code>cols</code> and <code>rows</code> attributes—these are required for every <code>textarea</code> element, and specify how many columns and rows big to make the text area. The values are measured in characters.</p></li>

<li><p>Last but not least, you have a special <code>&lt;input&gt;</code> element with the attribute <code>value=&quot;submit&quot;</code>.  Instead of rendering a one line text box for input, the submit input will render a submit button that, when clicked, submits the form to whichever target the form has specified to send its data to (currently this isn’t defined at all, so submitting the form will do nothing.)</p></li>
</ul>

<h2 id="steptwo">Step two: Adding structure and behaviour</h2>

<p>So, you clicked on the form #1 link above, filled it out and clicked Submit—why didn’t it do anything, and why does it look so bad and all in one line? The answer is that you haven’t structured it yet, or defined a place for the data the form is collecting to be submitted to.</p>

<p>Let’s go back to the drawing board, with a new form:</p>

<pre>&lt;form id=&quot;contact-form&quot; action=&quot;script.php&quot; method=&quot;post&quot;&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;redirect&quot; value=&quot;http://www.opera.com&quot; /&gt;
    &lt;ul&gt;
        &lt;li&gt;
            &lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;name&quot; id=&quot;name&quot; value=&quot;&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label for=&quot;email&quot;&gt;Email:&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;email&quot; id=&quot;email&quot; value=&quot;&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;label for=&quot;comments&quot;&gt;Comments:&lt;/label&gt;
            &lt;textarea name=&quot;comments&quot; id=&quot;comments&quot; cols=&quot;25&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;input type=&quot;submit&quot; value=&quot;submit&quot; /&gt;
            &lt;input type=&quot;reset&quot; value=&quot;reset&quot; /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/form&gt;</pre>


<p>This form looks like Figure 2 when rendered in a browser:</p>

<img src="http://dev.opera.com/articles/view/20-html-forms-the-basics/figure2.png" alt="the second form example" />
<p class="comment">Figure 2: The second form example—looking better, but still not perfect.</p>

<p>You can <a href="step-2-form.html" title="Our second form example">play with the improved form on a separate page by clicking here</a>.</p>

<p>Here I have made a few additions to the basic, simple form.  Let’s break it down so you know what I did:</p>

<ul>
<li><p>There are some new attributes inside the <code>&lt;form&gt;</code> tag.  I added an <code>id</code> attribute to not only semantically name what this form is called, but also to provide a unique ID to identify the form so it can be more easily styled using CSS or manipulated using JavaScript if required.  You can only have one of each <code>id</code> per page; in this case I called it <code>contact-form</code>.</p></li> 

<li><p>Lights, camera, action!  When you pressed the submit button in the first form and it did not do anything, this was because it had no action or method.  The <code>method</code> attribute specifies how the data is sent to the script that will process it.  The two most common methods are “GET” &amp; “POST”.  The “GET” method will send the data in the page’s URL (you will sometimes see URLs along the lines of <code>http://www.example.com/page.php?data1=value1&amp;data2=value2...</code>; these are bits of data being transported using the “GET”  method).  Unless you have a specific reason to use “GET”, it is probably best to not use it if you are trying to send secure information as anyone can see the information as it is transmitted via the URL.   “POST” sends the data via the script that powers the form, either to an email that is sent to the site’s administrator, or a database to be stored and accessed later,  rather than in the “GET” URL. <a href="http://www.w3.org/2001/tag/doc/whenToUseGet.html" title="when the use get and when to use post">&quot;POST&quot; is the more secure and usually the better option</a>.</p> 

<p>If you are very concerned about the security of the data in the form, for example if you are submitting a credit card number to a shopping site, then you should use the https protocol with a secure socket layer (SSL). Basically, this means that data will be sent over the https protocol, not the http protocol. Have a look at the URLs next time you are paying for something on a shopping site, or using online banking—you’ll probably see https:// in your address bar, not http://. The difference is that an https connection is a bit slower to transmit than http, but the data is encrypted, so anyone hacking into the data connection can’t make any sense out of it while it is in transit.  Talk to your web host for information on how they can provide you with https and SSL.</p></li>

<li><p>The <code>action</code> attribute specifies what script file the form data should be sent to for processing.  Many web hosts will have a generic send mail script or other form scripts available for use (see your host’s documentation for information) that they have customized to their servers. On the other hand, you could use a server-side script that you or someone else has created to power your form.  Most of the time, folks use languages such as PHP, Perl or Ruby to create a script that will process the form—you could for example send an email containing the form information, or input the form information into a database to be stored for later use.</p>

<p>It is outside of the scope of this course to write up a server-side script for you, or teach you how to write server-side code yourself—please inquire with your host to find out what they offer, or find a nice programmer to befriend.</p>

<p>Here are a few resources to get you started if you would like to investigate server-side scripting:</p>

<ul> 
<li><p>Perl: <a href="http://www.perl.com/">http://www.perl.com/</a></p></li>
<li><p>PHP: <a href="http://www.php.net">http://www.php.net</a></p></li>
<li><p>PHP documentation on Forms: <a href="http://uk3.php.net/manual/en/tutorial.forms.php">http://uk3.php.net/manual/en/tutorial.forms.php</a></p></li>
<li><p>Python: <a href="http://python.org/">http://python.org/</a></p></li>
<li><p>Ruby: <a href="http://www.ruby-lang.org">http://www.ruby-lang.org</a></p></li>
<li><p>Sendmail: <a href="http://www.sendmail.org/">http://www.sendmail.org/</a></p></li>
<li><p>ASP.NET: <a href="http://www.asp.net/">http://www.asp.net/</a></p></li>
</ul>

</li>

<li><p>The second line that’s been added to our Step Two form is the “hidden” input field—this is a redirect.  What? </p>

<p>Under the goal of separating markup structure from presentation and behaviour, it is ideal to use the script that will power the form to also redirect the user once the form is submitted.  You don’t want your users to be left sitting there looking at the form page, wondering what the heck to do next after they’ve submitted the form; I’m sure you’ll agree that it is a much better user experience to instead redirect your users to a thank you page featuring “what to do next” links, after a successful form submission. This line in particular specifies that after this form is submitted, the user will be redirected to the Opera homepage.</p></li>

<li><p>To improve the look of the form, I have put all the form elements into an unordered list so that I can use the markup to line them up cleanly  and then use CSS to polish the look.</p>

<p>Some folk would argue that you should not use an unordered list to markup a form, but use a definition list instead.  Others would argue that one should not use a list at all but use CSS to style the <code>&lt;label&gt;</code> and <code>&lt;input&gt;</code> tags. I will let you research this debate and make up your own mind on which is more semantically correct.  For our simple exercise I will use the unordered list.</p></li>

<li><p>Last but not least in step two, I’ve labeled the form elements.  Both in terms of meaning and making the form accessible to a wide range of internet enabled devices, it is best to give all the form elements labels—check out the contents of the <code>label</code> elements - these labels are tied to their respective form elements by giving the <code>input</code> and <code>textarea</code> elements <code>id</code>s that have the same value as the labels&#39; <code>for</code> attributes. This is great because it not only gives a visual indicator of the purpose of each form field on the screen, but it also gives the form fields more meaning semantically. For example, a visually impaired person using the page with a screenreader can now see which label goes with which form element. The <code>id</code>s can also be used to style individual form fields using CSS.</p>

<p>By now you are probably wondering why <code>id</code> attributes are included as identifiers in form elements as well as <code>name</code> attributes. The answer is that <code>input</code> elements without <code>name</code> attributes are not submitted to the server, so those are definitely needed. <code>id</code> attributes are needed to associate form elements with their corresponding <code>label</code> elements. You should therefore use both.</p>

</li>
</ul>

<p>The 2nd form displays a bit better, but it has been beaten with the default ugly stick.  Time to add a few more bits and bobs before applying some style.</p>


<h2 id="stepthree">Step three: Adding semantics, style and a bit more structure</h2>

<p>Now I’ll finish off what I started at the beginning of the article, with the following final version of my example form:</p>

<pre>&lt;form id=&quot;contact-form&quot; action=&quot;script.php&quot; method=&quot;post&quot;&gt; 
  &lt;fieldset&gt;
    &lt;legend&gt;Contact Us:&lt;/legend&gt;
    &lt;ul&gt;
      &lt;li&gt;
        &lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;
        &lt;input type=&quot;text&quot; name=&quot;name&quot; id=&quot;name&quot; value=&quot;&quot; /&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;label for=&quot;email&quot;&gt;Email:&lt;/label&gt;
        &lt;input type=&quot;text&quot; name=&quot;email&quot; id=&quot;email&quot; value=&quot;&quot; /&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;label for=&quot;comments&quot;&gt;Comments:&lt;/label&gt;
        &lt;textarea name=&quot;comments&quot; id=&quot;comments&quot; cols=&quot;25&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;label for=&quot;mailing-list&quot;&gt;Would you like to sign up for our mailing list?&lt;/label&gt;
        &lt;input type=&quot;checkbox&quot; checked=&quot;checked&quot; id=&quot;mailing-list&quot; value=&quot;Yes, sign me up!&quot; /&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;input type=&quot;submit&quot; value=&quot;submit&quot; /&gt;
        &lt;input type=&quot;reset&quot; value=&quot;reset&quot; /&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</pre>

<p>When rendered in a browser, this form looks as shown in Figure 3.</p>

<img src="http://dev.opera.com/articles/view/20-html-forms-the-basics/figure3.png" alt="the third and final form example" />
<p class="comment">Figure 3: The final form example in all its glory.</p>


<p>To see this form live in a browser and play with it, <a href="step-3-form.html" title="The third and final form example for this article">following this link</a> to the form on a separate page.</p>

<p>The last two major elements I have added to this form are <code>fieldset</code> and <code>legend</code>.  Both of these elements are not mandatory, but are very useful for more complex forms and for presentation.</p>

<p>The <code>fieldset</code> element allows you to organize the form into semantic modules.  In a more complex form, you could for example use different <code>fieldset</code>s to contain address information, billing information, customer preference information, and so on. The <code>legend</code> element allows you to name each <code>fieldset</code> section.</p>

<p>I’ve also applied a little bit of CSS to this form, to style the structural markup. This is applied to the third form example using an external stylesheet—<a href="form.css" title="the CSS that styles the third form example">click on this link to see the styles</a>.  The two most important tasks I wanted the basic CSS to do is add margins to line up the labels and input boxes, and get rid of the unordered list’s bullet points.  Here is the CSS that resides in the external stylesheet:</p>

<pre>#contact-form fieldset {width:40%;}
#contact-form li {margin:10px; list-style: none;}
#contact-form input  {margin-left:45px; text-align: left;}
#contact-form textarea {margin-left:10px; text-align: left;}</pre>

<p>What does it do? The first line styles the fieldset border to not take up the whole page; you could also set the border to none using <code>{border: none;}</code> if you didn’t want one. The second line puts a margin of 10 pixels on the <code>li</code> elements to help give a little visual room between each list item.  The third and fourth lines set a left margin on the <code>input</code> and <code>textarea</code> elements so that they don’t crowd the labels and line up properly.  

If you would like more information on the styling of a form please consult the article on Styling Forms in this Web Standards Curriculum (to be published at a later date) or <a href="http://alistapart.com/articles/prettyaccessibleforms" title="article on styling fforms">Nick Rigby’s A List Apart article on “Prettier Accessible Forms”</a>. You will also be able to find more information on margins and borders later on in this course.</p>

<h2 id="summary">Summary</h2>

<p>In this article, I have covered the most basic three steps to a web standards compliant form.  There is much more in form world I did not cover here and that is left for you to explore for now.  There are access keys, checkboxes and radio buttons, custom submit and reset buttons, and select boxes.</p>

<p>In the above Step three Form, I added a checkbox to show how you can use the additional attributes in the <code>input</code> element to collect information that is beyond the single line text input or the multiple line text area input.  The <code>checkbox</code> and <code>radio</code> button attribute values could be used to add the ability to ask short questions and give the reader a list of options to choose from (checkboxes allow you to select multiple options, radio buttons only one). Radio buttons can be very useful in a survey form.</p>

<p>The <code>select</code> element, also not featured in this article, can be used for a drop down menu of choices (for example a list of countries, or states/provinces).</p>

<h2 id="furtherreading">Further reading</h2>

<ul>
<li>Cameron Adams, “Accessible, stylish form layout”: <a href="http://www.themaninblue.com/writing/perspective/2004/03/24/">http://www.themaninblue.com/writing/perspective/2004/03/24/</a>.</li>
<li>Brian Crescimanno, “Sensible Forms: A Form Usability Checklist”: <a href="http://www.alistapart.com/articles/sensibleforms/">http://www.alistapart.com/articles/sensibleforms/</a>.</li>
<li>Simon Willison, “Easier form validation with PHP”, <a href="http://simonwillison.net/2003/Jun/17/theHolyGrail/">http://simonwillison.net/2003/Jun/17/theHolyGrail/</a>.</li>
<li>The Spec. Not any old specification, but THE W3C SPEC—<a href="http://www.w3.org/TR/html401/interact/forms.html">http://www.w3.org/TR/html401/interact/forms.html</a>. If you ever have a bout of insomnia in which a warm glass of milk, counting sheep, and <a href="http://www.ambiencr.com/">Ambien</a> are not putting you to sleep, go read the whole spec for HTML 4.01 or XHTML 1.0 at the w3.org.  It is cheaper and more effective than any remedy out there.  [Insert name of deity here] bless the engineers of the world.</li>
<li>The nice folk over at the W3.org have defined the differences between “GET” &amp; “POST” and when to use them: <a href="http://www.w3.org/2001/tag/doc/whenToUseGet.html">http://www.w3.org/2001/tag/doc/whenToUseGet.html</a>.</li>
<li>Many blessings upon Mr. Rigby: <a href="http://alistapart.com/articles/prettyaccessibleforms">http://alistapart.com/articles/prettyaccessibleforms</a>.</li>
</ul>


<h2 id="exercises">Exercise questions</h2>

<p>Time to code your own contact form.</p>
<ol>
<li>Create a simple contact form that asks the user for their name, email address, and a comment.</li>
<li>Add a checkbox asking if the reader would like to join your mailing list.</li>
<li>Use some CSS to style your form: set a width to the form, align the labels to the left, put a background colour on to your page, etc.</li>
</ol>

<p>Extra Credit: The more you play with the form elements and different CSS the more you will see what you can do with a simple contact form.</p>

<p>Extra Extra Credit: If you want to proceed into deep unknown lands, find a script or use one that your web host provides to send the form to yourself.   If the script part to make the form gets a bit ornery, bribe a nice programming sort with neon snacks.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/19-html-tables/" rel="prev" title="link to the previous article in the series">Previous article—HTML tables</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/21-lesser-known-semantic-elements/" rel="next" title="link to the next article in the series">Next article—Lesser known semantic elements</a></li>
<li><a href="http://dev.opera.com/articles/view/1-introduction-to-the-web-standards-cur/#toc" rel="index">Table of contents</a></li>
</ul>


<h2>About the author</h2>

<img src="http://forum-test.oslo.osa/kirby/content/articles/125-20-html-formsthe-basics/msjen.jpg" alt="Picture of the article author Ms Jen" class="right" />

<p>A web designer/developer by trade, a photographer,
moblogger and professional art weirdo for the love of it, Ms. Jen
started her art and design career in the high chair with her love of personal
food art and food wall art at the age of 11 months. She taught herself HTML
in 1996 when a computer snob said that an artist could not learn to code and
has been fully in love with all things web design ever since.</p>

<p>Ms. Jen is the owner and founder of Black Phoebe Designs, a web &amp;
mobile design firm. Ms. Jen has has a Masters degree in Computer
Science and Multimedia Systems from Trinity College in Dublin, Ireland,
and taught web design at an LA area university from 2001–2005. She
has participated in two Nokia mobile blogging projects, Wasabi
Lifeblog (2004-2005) and the Nokia Urbanista Diaries (2008). Ms. Jen
can always be found online at <a href="http://www.blackphoebe.com" title="Black Phoebe homepage">blackphoebe.com</a> or <a href="http://blackphoebe.mobi/" title="Black Phoebe mobile site">blackphoebe.mobi</a>.</p>
    /code
