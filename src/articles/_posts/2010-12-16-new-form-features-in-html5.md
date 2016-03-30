---
title: New Form Features in HTML5
authors:
- patrick-lauke
- chris-mills
intro: 'HTML5 includes many new features to make web forms a lot easier to write, and a lot more powerful and consistent across the Web. This article gives a brief overview of some of the new form controls and functionalities that have been introduced.'
license: cc-by-nc-sa-3.0
---
<h2>Introduction</h2>

<p>HTML5 includes many new features to make web forms a lot easier to write, and a lot more powerful and consistent across the Web. This article gives a brief overview of some of the new form controls and functionalities that have been introduced.</p>
<ul>
<li><a href="#badform">Bad form?</a></li>
<li><a href="#formexample">Introducing our example</a></li>
<li><a href="#newcontrols">New form controls</a>
<ul>
<li><a href="#input-number"><code>&lt;input type="number"&gt;</code></a></li>
<li><a href="#input-range"><code>&lt;input type="range"&gt;</code></a></li>
<li><a href="#input-datetime"><code>&lt;input type="date"&gt;</code> and other date/time controls</a></li>
<li><a href="#input-color"><code>&lt;input type=&quot;color&quot;&gt;</code></a></li>
<li><a href="#input-search"><code>&lt;input type=&quot;search&quot;&gt;</code></a></li>
<li><a href="#datalist"><code>&lt;datalist&gt;</code> element and <code>list</code> attribute</a></li>
<li><a href="#input-tel-email-url"><code>&lt;input type=&quot;tel&quot;&gt;</code>, <code>&lt;input type=&quot;email&quot;&gt;</code> and <code>&lt;input type=&quot;url&quot;&gt;</code></a></li>
</ul>
</li>
<li><a href="#newattributes">New attributes</a>
<ul>
<li><a href="#placeholder"><code>placeholder</code></a></li>
<li><a href="#autofocus"><code>autofocus</code></a></li>
<li><a href="#min-max"><code>min</code> and <code>max</code></a></li>
<li><a href="#step"><code>step</code></a></li>
</ul>
</li>
<li><a href="#newoutput">New output mechanisms</a>
<ul>
<li><a href="#output"><code>&lt;output&gt;</code></a></li>
<li><a href="#progress-meter"><code>&lt;progress&gt;</code> and <code>&lt;meter&gt;</code></a></li>
</ul>
</li>
<li><a href="#validation">Validation</a>
<ul>
<li><a href="#required"><code>required</code></a></li>
<li><a href="#type-pattern"><code>type</code> and <code>pattern</code></a></li>
</ul>
</li>
<li><a href="#stylingcss3">Styling with CSS3</a></li>
<li><a href="#crossbrowser">Cross browser?</a></li>
</ul>

<h2 id="badform">Bad form?</h2>

<p>Let's face it – HTML forms have always been a pain. They are not much fun to mark up and they can be fiddly to style – especially if you want them to be consistent cross-browser and fit in with the overall look and feel of your site. And they can be frustrating for your end users to fill out, even if you create them with care and consideration to make them as usable and accessible as possible. Creating a good form is more about damage limitation than pleasurable user experiences.</p>

<p>Back when HTML 4.01 became a stable  recommendation,  the web was a mostly static place. Yes, there was the odd comment  form or guest book script, but generally web sites were there for  visitors to simply read. Since then, the web has evolved. For many  people, the browser has already become a window into a world of  complex, web-based applications that try to bring an almost  desktop-like experience.</p>
<p><img src="fig1.png" alt="Some complicated non-native form controls, faked with JavaScript" /></p>
<p class="comment">Figure 1: Some complicated non-native form controls, faked with JavaScript.</p>

<p>To fill the need for the more sophisticated controls required for such applications, developers have been taking advantage of JavaScript libraries and frameworks (such as jQueryUI or YUI). These solutions have certainly matured over the years, bringing rich functionality to web pages and even starting to incorporate screenreader support through bridging technologies like WAI-ARIA. But essentially, they're a workaround to compensate for the limited form controls available in HTML. They “fake” the more complex widgets (such as date pickers and sliders) by layering additional (not always semantic) markup and a slew of JavaScript on top of pages.</p>
<p>HTML5 aims to standardise some of the  most common rich form controls, making them render natively in the  browser and obviating the need for these script-heavy workarounds.</p>

<h2 id="formexample">Introducing our example</h2>

<p>To illustrate some of the new features, this article comes with a <a href="html5-forms-example.html">basic HTML5 forms example</a>. It's not meant to represent a "real" form (as you'd be hard-pressed to find a situation where you need all the new features in a single form), but it should give you an idea of how the various new aspects look and behave.</p>
<p class="note">Note: the look and feel of the new form controls and validation messages differs from browser to browser, so styling your forms to look reasonably consistent across browsers will still need careful consideration.</p>

<h2 id="newcontrols">New form controls</h2>

<p>As forms are the main tool for data input in Web applications, and the data we want to collect has become more complex, it has been necessary to create an input element with more capabilities, to collect this data with more semantics and better definition, and allow for easier, more effective error management and validation.</p>

<h3 id="input-number"><code>&lt;input type="number"&gt;</code></h3>

<p>The first new input type we'll discuss is the number type:</p>

<pre><code>&lt;input type="number" … ></code></pre>

<p>This creates a special kind of input field for number entry – in most supporting browsers this appears as a text entry field with a spinner control, which allows you to increment and decrement its  value.</p>

<p><img src="fig2.png" alt="A number input type" /></p>
<p class="comment">Figure 2: A <code>number</code> input type.</p>

<h3 id="input-range"><code>&lt;input type="range"&gt;</code></h3>

<p>Creating a slider control to allow you to choose between a range of values used to be a complicated, semantically dubious proposition, but with HTML5 it is easy — you just use the <code>range</code> input type:</p>

<pre><code>&lt;input type="range" … ></code></pre>

<p><img src="fig3.png" alt="A range input type" /></p>
<p class="comment">Figure 3: A <code>range</code> input type.</p>

<p>Note that, by default, this input does not generally show the currently selected value, or even the range of values it covers. Authors will need to provide these through other means – for instance, to display the current value, we could us an output element together with some JavaScript to update its display whenever the user has interacted with the form:</p>
<pre><code>&lt;output onforminput="value=weight.value"&gt;&lt;/output&gt;</code></pre>

<h3 id="input-datetime"><code>&lt;input type="date"&gt;</code> and other date/time controls</h3>

<p>HTML5 has a number of different input types for creating complicated date/time pickers, for example the kind of date picker you see featured on pretty much every flight/train booking site out there. These used to be created using unsemantic kludges, so it is great that we now have standardized easy ways to do this. For example:</p>

<pre><code>&lt;input type="date" … &gt;
&lt;input type="time" … &gt;</code></pre>

<p>Respectively, these create a fully functioning date picker, and a text input containing a separator for hours, minutes and seconds (depending on the <code>step</code> attribute specified) that only allows you to input a time value.</p>

<p><img src="fig4.png" alt="date and time input types" /></p>
<p class="comment">Figure 4: <code>date</code> and <code>time</code> input types.</p>

<p>But it doesn't end here — there are a number of other related input types available:</p>

<ul>
<li><code>datetime</code>: combines the functionality of two we have looked at above, allowing you to choose a date and a time</li>
<li><code>month</code>: allows you to choose a month, stored internally as a number between 1-12, although different browsers may provide you with more elaborate choosing mechanisms, like a scrolling list of the month names</li>
<li><code>week</code>: allows you to choose a week, stored internally in the format 2010-W37 (week 37 of the year 2010), and chosen using a similar datepicker to the ones we have seen already</li>
</ul>

<h3 id="input-color"><code>&lt;input type="color"&gt;</code></h3>

<p>This input type brings up a color picker. Opera's implementation allows the user to pick from a selection of colors, enter hexadecimal values directly in a text field, or to invoke the OS's native color picker.</p>

<p><img src="fig5.png" alt="a color input, and the native color pickers on Windows and OS X" /></p>
<p class="comment">Figure 5: a <code>color</code> input, and the native color pickers on Windows and OS X.</p>

<h3 id="input-search"><code>&lt;input type="search"&gt;</code></h3>

<p>The <code>search</code> input type is arguably nothing more than a differently-styled text input. Browsers are meant to style these inputs the same way as any OS-specific search functionality. Beyond this purely aesthetic consideration, though, it's still important to note that marking up search fields explicitly opens up the possibility for browsers, assistive technologies or automated crawlers to do something clever with these inputs in the future – for instance, a browser could conceivably offer the user a choice to automatically create a custom search for a specific site.</p>

<p><img src="fig6.png" alt="A search input as it appears in Opera on OS X" /></p>
<p class="comment">Figure 6: A <code>search</code> input as it appears in Opera on OS X.</p>

<h3 id="datalist"><code>&lt;datalist&gt;</code> element and <code>list</code> attribute</h3>

<p>Up until now we have been used to using <code>&lt;select&gt;</code> and <code>&lt;option&gt;</code> elements to create dropdown lists of options for our users to choose from. But what if we wanted to create a list that allowed users to choose from a list of suggested options, as well as being able to type in their own? That required fiddly scripting – but now you can simply use the <code>list</code> attribute to connect an ordinary input to a list of options, defined inside a <code>&lt;datalist&gt;</code> element.</p>

<pre><code>&lt;input type=&quot;text&quot; <strong>list=&quot;mydata&quot;</strong> … &gt;
&lt;datalist <strong>id=&quot;mydata&quot;</strong>&gt;
    &lt;option label=&quot;Mr&quot; value=&quot;Mister&quot;&gt;
    &lt;option label=&quot;Mrs&quot; value=&quot;Mistress&quot;&gt;
    &lt;option label=&quot;Ms&quot; value=&quot;Miss&quot;&gt;
&lt;/datalist&gt;</code></pre>

<p><img src="fig7.png" alt="Creating an input element with preset options using datalist" /></p>
<p class="comment">Figure 7: Creating an input element with suggestions using <code>datalist</code>.</p>

<h3 id="input-tel-email-url"><code>&lt;input type=&quot;tel&quot;&gt;</code>, <code>&lt;input type=&quot;email&quot;&gt;</code> and <code>&lt;input type=&quot;url&quot;&gt;</code></h3>

<p>As their names imply, these new input types relate to telephone numbers, email addresses or URLs. Browsers will render these as normal text entry inputs, but explicitly stating what kind of text we're expecting in these fields plays an important role in client-side form validation. Additionally, on certain mobile devices the browser will switch from its  regular text entry on-screen keyboard to the more context-relevant  variants. Again, it's conceivable that in the future browsers will take further advantage of these explicitly marked-up inputs to offer additional functionality, such as autocompleting email addresses and telephone numbers based on the user's contacts list or address book.</p>

<h2 id="newattributes">New attributes</h2>

<p>In addition to explicit new input types, HTML5 defines a series of new attributes for form controls that help simplify some common tasks and further specify the expected values for certain entry fields.</p>

<h3 id="placeholder"><code>placeholder</code></h3>

<p>A common usability trick in web forms is to have placeholder content in text entry fields – for instance, to give more information about the expected type of information we want the user to enter – which disappears when the form control gets focus. While this used to require some JavaScript (clearing the contents of the form field on focus and resetting it to the default text if the user left the field without entering anything), we can now simply use the <code>placeholder</code> attribute:</p>

<pre><code>&lt;input type=&quot;text&quot;… <strong>placeholder=&quot;John Doe&quot;</strong>&gt;</code></pre>
<p><img src="fig8.png" alt="A text input with placeholder text" /></p>
<p class="comment">Figure 8: A text input with <code>placeholder</code> text.</p>

<h3 id="autofocus"><code>autofocus</code></h3>

<p>Another common feature that previously had to rely on scripting is having a form field automatically focused when a page is loaded. This can now be achieved with the <code>autofocus</code> attribute:</p>

<pre><code>&lt;input type="text" <strong>autofocus</strong> … &gt;</code></pre>

<p>Keep in mind that you shouldn't have more than one <code>autofocus</code> form control on a single page. You should also use this sort of functionality with caution, in situations where a form represents the main area of interest in a page. A search page is a good example – provided that there isn't a lot of content and explanatory text, it makes sense to set the focus automatically to the text input of the search form.</p>

<h3 id="min-max"><code>min</code> and <code>max</code></h3>

<p>As their name suggests, this pair of attributes allows you to set a lower and upper bound for the values that can be entered into a numerical form field, for example number, range, time or date input types (yes, you can even use it to set upper and lower bounds for dates – for instance, on a travel booking form you could limit the datepicker to only allow the user to select future dates). For <code>range</code> inputs, <code>min</code> and <code>max</code> are actually necessary to define what values are  returned when the form is submitted. The code is pretty simple and self-explanatory:</p>

<pre><code>&lt;input type="number" … <strong>min="1" max="10"</strong>&gt;</code></pre>

<h3 id="step"><code>step</code></h3>

<p>The <code>step</code> attribute can be used with a numerical input value to dictate how granular the values you can input are. For example, you might want users to enter a particular time, but only in 30 minute increments. In this case, we can use the <code>step</code> attribute, keeping in mind that for <code>time</code> inputs the value of the attribute is in seconds:</p>

<pre><code>&lt;input type=&quot;time&quot; … <strong>step=&quot;1800&quot;</strong>&gt;</code></pre>

<h2 id="newoutput">New output mechanisms</h2>

<p>Beyond the new form controls that users can interact with, HTML5 defines a series of new elements specifically meant to display and visualise information to the user.</p>

<h3 id="output"><code>&lt;output&gt;</code></h3>

<p>We've already mentioned the <code>output</code> element when talking about the <code>range</code> input – this element serves as a way to display the <q>result of a calculation</q>, or more generally to provide an explicitly identified output of a script (rather than simply pushing some text into in a random <code>span</code> or <code>div</code> with <code>innerHTML</code>, for instance). To make it even more explicit what particular form controls the <code>output</code> relates to, we can – in a similar way to <code>label</code> – pass a list of <code>ID</code>s in the element's optional <code>for</code> attribute.</p>

<pre><code>
&lt;input type=&quot;range&quot; <strong>id=&quot;rangeexample&quot;</strong> … &gt;
&lt;output onforminput=&quot;value=rangeexample.value&quot; <strong>for=&quot;rangeexample&quot;</strong>&gt;&lt;/output&gt;</code></pre>

<h3 id="progress-meter"><code>&lt;progress&gt;</code> and <code>&lt;meter&gt;</code></h3>

<p>These two new elements are very similar, both resulting in a gauge/bar being presented to the user. Their distinction is in their intended purpose. As the name suggests, <code>progress</code> is meant to represent a progress bar, to indicate the percentage of completion of a particular task, while meter is a more generic indicator of a scalar measurement or fractional value.</p>

<p><img src="fig9.png" alt="A progress indicator bar" /></p>
<p class="comment">Figure 9: A progress indicator bar.</p>

<h2 id="validation">Validation</h2>

<p>Form validation is very important on both client- and server-side, to help legitimate users avoid and correct mistakes, and to stop malicious users submitting data that could cause damage to our application. As browsers can now get an idea of what type of values are expected from the various form controls (be it their <code>type</code>, or any upper/lower bounds set on numerical values, dates and times), they can also offer native form validation – another tedious task that, up to now, required authors to write reams of JavaScript or use some ready-made validation script/library.</p>

<p class="note">Note: for form controls to be validated, they need to have a <code>name</code> attribute, as without it they wouldn't be submitted as part of the form anyway.</p>

<h3 id="required"><code>required</code></h3>

<p>One of the most common aspects of form validation is the enforcement of required fields – not allowing a form to be submitted until certain pieces of information have been entered. This can now simply be achieved by adding the <code>required</code> attribute to an <code>input</code>, <code>select</code> or <code>textarea</code> element.</p>

<pre><code>&lt;input type="text" … <strong>required</strong>&gt;</code></pre>

<p><img src="fig10.png" alt="Opera's client-side validation in action, showing an error for a required field that was left empty" /></p>
<p class="comment">Figure 10: Opera's client-side validation in action, showing an error for a required field that was left empty.</p>

<h3 id="type-pattern"><code>type</code> and <code>pattern</code></h3>
<p>As we've seen, authors can now specify the kinds of entries they expect from their form fields – rather than simply defining text inputs, authors can explicitly create inputs for things like numbers, email addresses and URLs. As part of their client-side validation, browsers can now check that what the user entered in these more specific fields matches the expected structure – in essence, browsers evaluate the input values against a built-in pattern that defines what valid entires in those types of inputs look like, and will warn a user when their entry didn't match the criteria.</p>

<p><img src="fig11.png" alt="Opera's error message for invalid email addresses in an email input" /></p>
<p>Figure 11: Opera's error message for invalid email addresses in an <code>email</code> input.</p>

<p>For other text entry fields that nonetheless need to follow a certain structure (for instance, login forms where the usernames can only contain a specific sequence of lowercase letters and numbers), authors can use the <code>pattern</code> attribute to specify their own custom regular expression.</p>
<pre><code>&lt;input type="text" … <strong>pattern="[a-z]{3}[0-9]{3}"</strong>&gt;</code>
</pre>
<h2 id="stylingcss3">Styling with CSS3</h2>

<p>In concert with HTML5's built-in form validation, the <a href="http://www.w3.org/TR/css3-ui/">CSS3 Basic User Interface Module</a> defines a series of new pseudo-classes that can be used to differentiate required fields and to change the appearance of form controls dynamically based on whether or not they have been filled in correctly:</p>
<ul>
<li><code>:required</code> and <code>:optional</code> let us explicitly style controls based on whether or not they have a required attribute</li>
<li><code>:valid</code> and <code>:invalid</code> will apply styles to form controls subject to client-side validation</li>
<li><code>:in-range</code> and <code>:out-of-range</code> specifically works with controls that feature a min and/or max attribute</li>
</ul>

<p>In our example form, we're only applying specific validity and range styles on text, email, url and number inputs when they are currently focused, so users would get some immediate visual feedback while entering information into those fields, but without affecting the overall look of the form in general.</p>

<pre><code>input[type=text]:focus:valid,
input[type=email]:focus:valid,
input[type=number]:focus:in-range { outline: 2px #0f0 solid; }

input[type=text]:focus:invalid,
input[type=email]:focus:invalid,
input[type=number]:focus:out-of-range { outline: 2px #f00 solid; }</code></pre>

<p><img src="fig12.png" alt=":focus:valid and :focus:invalid styles being applied dynamically as an email address is entered" /></p>
<p>Figure 12: <code>:valid</code> and <code>:invalid</code> styles being applied dynamically as an email address is entered.</p>


<h2 id="crossbrowser">Cross browser?</h2>

<p> On the desktop, Opera currently has the most complete implementation of new input types and native client-side validation, but support is on the roadmap for all other major browsers as well, so it won't be long before we can take advantage of these new powerful tools in our projects. But what about older browser versions?</p>
<p>By design, browsers that don't understand the new input types (like <code>date</code> or <code>number</code>) will simply fall back to treating them as standard text inputs – not as user-friendly as their advanced HTML5 counterparts, but at the very least they allow for a form to be filled in. However, as with most of the new HTML5 functionalities, we can offer a nicer fallback for users of  browsers that aren't quite up to speed with HTML5 forms by doing basic JavaScript-based feature-detection and, only if needed, proceed to load external JavaScript libraries to “fake” the support for more complex form control widgets and validation. This way, we can code for the future, while not alienating any of our users.</p>
