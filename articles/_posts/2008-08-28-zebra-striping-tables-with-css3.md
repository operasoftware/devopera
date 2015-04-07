---
title: Zebra Striping Tables With CSS3
authors:
- christopher-schmitt
intro: 'In this article Christopher Schmitt gives a succinct overview of how to use the nth-child CSS3 property to easily create zebra-striped HTML tables.'
license: cc-by-nc-sa-2.5
---
<h2>Introduction</h2>
<p>Zebra striping—or, coloring or shading alternate rows on a table—is thought to enhance the usability of a table by guiding the user’s eye along a row. This method has been used in print for years, and many designers try to emulate this technique when making tables for the Web. CSS has made achieving zebra striping easier, but, up until CSS3, it still involved a bit of cumbersome coding.&nbsp;</p>
<p>With the advent of CSS3’s <code>nth-child</code> selector, we are able to target multiple elements in a document by creating a &quot;counter&quot; that skips over&nbsp;specified children in the document tree. This allows us, specifically, to style only the odd or even rows of a table. This article details how to use <code>nth-child</code> sucessfully.</p>

<p><a href="zebra_striping_demos.zip">Download the sample code for this article</a>.</p>


<h2>The bad old days ...</h2>
<p>Before we begin covering how to use this new selector, let’s review the old way of doing things. First, we would have to add a class attribute to every other table row:</p>

<pre>&lt;table&gt;
	&lt;tr valign=&quot;top&quot; <strong>class=&quot;odd&quot;</strong>&gt;
		&lt;td&gt;Salmon&lt;/td&gt;
		&lt;td&gt;Omega-3's help the brain develop properly, reduce the risk of Alzheimer's, and help prevent heart disease.&lt;/td&gt;
	&lt;/tr&gt;
	&lt;tr valign=&quot;top&quot;&gt;
		&lt;td&gt;Spinach&lt;/td&gt;
		&lt;td&gt;Great source of folate and lutein. Prevents birth defects, heart disease, stroke, and protects your skin from sun damage.&lt;/td&gt;
	&lt;/tr&gt;
	&lt;tr valign=&quot;top&quot; <strong>class=&quot;odd&quot;</strong>&gt;
		&lt;td&gt;Sweet Potatoes&lt;/td&gt;
		&lt;td&gt;Beta carotene protects your skin from sun damage.&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;</pre>

<p>Luckily, our table is fairly small, so this doesn’t require too much work. But you could imagine how tedious this process would be if our table was dozens of rows long! We would then add a CSS rule that targeted those rows:</p>

<pre>tr.odd {
	background-color: #99ff99;
}</pre>
<p>While this method works, it’s a bit inefficient in that it requires extra markup in the HTML document. This markup, in turn, doesn’t really add anything semantically valuable: The odd rows don’t serve a different function&nbsp;than the even rows; we just want them to look different. Hence, we haven’t kept the structure separate from the presentation. Not to mention that coding a large table this way can be a frustrating task.</p>
<h2>Introducing the nth-child</h2>
<p>CSS3, however, includes selectors that let us keep our hands out of the markup and use just CSS to pick out the rows we want to style. The relevant selector—the nth-child selector—is a bit complicated, so let’s take a moment to understand how it works.</p>
<p>The <code>nth-child</code> selector targets elements in a document tree that have a certain number of siblings <em>before</em> it. Where <code>n</code> is an integer, <code>:nth-child(an+b)</code> would match the element that has an+b-1 siblings before it.</p>
<p>What does this mean?</p>
<p>That <code>n</code> is basically a counter: it begins with zero, then it moves up incrementally until it runs out of children elements. Then the <code>b</code> variable represents the counter’s starting place—in other words, the position of first element we begin counting from. Finally, the <code>a</code> variable represents the positions of the elements we match after that.</p>
<p>To clear things up a bit, let’s break down an example:</p>

<pre>:nth-child(<strong>5</strong>n+<strong>2</strong>)</pre>

<p>In our hypothetical example above, the <code>b</code> variable is set as two, which means that the first element targeted is the <em>second</em> child beneath the parent in the document tree, the second paragraph within the body, or the second item within a list.</p>

<p>Also in the example above, the <code>a</code> variable is set to five, which means that every fifth child after that is also to be targeted. Now that we’ve defined both <code>a</code> and <code>b</code> variables, we can determine which child elements are going to be styled. By plugging in the starting value of <em>zero</em> and counting till we run out of child elements, we can determine which child elements get styled.</p>

<p>In this example as shown in Table 1, you can see that the second child element is matched, then the seventh, then the twelfth, and so on, until we’ve run out of elements.</p>

<div block="table">
<table>
<tr>
	<th colspan="4" scope="col">Which child element gets selected?</th>
</tr>
<tr>
	<th width="122" scope="col">Child Element</th>
	<th colspan="3" scope="col">Formulas</th>
</tr>
<tr>
	<th scope="row">&nbsp;</th>
	<th width="81" scope="col">n</th>
	<th width="81" scope="col">5n</th>
	<th width="73" scope="col">5n+2</th>
</tr>
<tr>
	<th scope="row">0</th>
	<td>n/a</td>
	<td>n/a</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">1</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">2</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">3</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">4</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">5</th>
	<td>Y</td>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">6</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">7</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">8</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">9</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">10</th>
	<td>Y</td>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">11</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">12</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
</table>
</div>

<p class="comment">Table 1. Demonstrating which child element is selected</p>
<h2>Calculating zebra stripes</h2>
<p>How does this selector help us with zebra striping? Note that this formula allows for some quite complicated configurations—making it very versatile. To target only odd or even elements, however, we need only remember two kinds of selectors.</p>
<p>To target all even rows as shown in Table 2, we can use the following selector:</p>

<pre>tr:nth-child(2n)</pre>

<div block="table">
<table border="1">
<tr>
	<th colspan="3" scope="col">Which child element gets selected?</th>
</tr>
<tr>
	<th width="122" scope="col">Child&nbsp;Element</th>
	<th colspan="2" scope="col">Formulas</th>
</tr>
<tr>
	<th scope="row">&nbsp;</th>
	<th width="120" scope="col">n</th>
	<th width="118" scope="col">2n</th>
</tr>
<tr>
	<th scope="row">0</th>
	<td>n/a</td>
	<td>n/a</td>
</tr>
<tr>
	<th scope="row">1</th>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">2</th>
	<td>Y</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">3</th>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">4</th>
	<td>Y</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">5</th>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">6</th>
	<td>Y</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">7</th>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">8</th>
	<td>Y</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">9</th>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">10</th>
	<td>Y</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">11</th>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">12</th>
	<td>Y</td>
	<td>Y</td>
</tr>
</table>
</div>

<p class="comment">Table 2. Demonstrating that only even-numbered of rows are selected</p>
<p>To target all odd rows, we would compose the following selector:</p>

<pre>tr:nth-child(2n+1)</pre>

<p>This selector matches the first row within a table, and every second row after that—all of the odd rows as shown in Table 3.</p>

<div block="table">
<table border="1">
<tr>
	<th colspan="4" scope="col">Which child element gets selected?</th>
</tr>
<tr>
	<th width="122" scope="col">Child&nbsp;Element</th>
	<th colspan="3" scope="col">Formulas</th>
</tr>
<tr>
	<th scope="row">&nbsp;</th>
	<th width="81" scope="col">n</th>
	<th width="81" scope="col">2n</th>
	<th width="73" scope="col">2n+1</th>
</tr>
<tr>
	<th scope="row">0</th>
	<td>n/a</td>
	<td>n/a</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">1</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">2</th>
	<td>Y</td>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">3</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">4</th>
	<td>Y</td>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">5</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">6</th>
	<td>Y</td>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">7</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">8</th>
	<td>Y</td>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">9</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">10</th>
	<td>Y</td>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
<tr>
	<th scope="row">11</th>
	<td>Y</td>
	<td>&nbsp;</td>
	<td>Y</td>
</tr>
<tr>
	<th scope="row">12</th>
	<td>Y</td>
	<td>Y</td>
	<td>&nbsp;</td>
</tr>
</table>
</div>

<p class="comment">Table 3. Demonstrating that only odd-numbered of rows are selected</p>
<h2>Illustrating zebra striping</h2>
<p> Figure 1 shows a table listing various &quot;superfoods&quot; and their nutritional virtues as an demonstration of zebra striping.</p>
<p><img src="html-table_no-style.png" width="747" height="581" alt="a sample HTML table with no particular row styling"></p>
<p class="comment">Figure 1: The HTML table</p>
<p> In this demonstration, we want to color the background of the odd rows so that the table is easier to read. The declaration block is written as such:</p>

<pre>tr:nth-child(2n+1) {
	background-color: #99ff99;
}</pre>

<p>This rule matches all of the odd rows, and applies the background color only to that row as shown in Figure 2.</p>
<p><img src="html-table_css-zebra-stripes.png" width="747" height="581" alt="the same example table as before with zebra stripes created using nth child"></p>
<p class="comment">Figure 2: Only the even-numbered rows are styled</p>
<p>If these formulas are too complicated for you to remember, the<code> nth-child</code> property allows the math-challenged to use keyword shortcuts. Instead of a mathematical formula, we can also use the &quot;odd&quot; or &quot;even&quot; keywords as a value:</p>

<pre>tr:nth-child(<strong>odd</strong>) {
	background-color: #99ff99;
}</pre>

<p>CSS3 provides us with a hassle-free technique for zebra-striping our tables, list items or forms, and so on.</p>
<p>Unfortunately, the <code>nth-child</code> selector enjoys limited browser support. As of this writing, the nth-child selector works in Safari 3 and Opera 9.5. Sadly, you may want to stick to the more inefficient CSS coding method until support for the property is brought up to speed in other browsers. Or, if you want to support other browers like Internet Explorer with easy method of zebra striping, you can <a href="http://web.archive.org/web/20080730063636/http://15daysofjquery.com/examples/zebra/">&quot;patch&quot; up <code>nth-child</code> support</a> in those browsers. By using a JavaScript framework like <a href="http://jquery.com/">jQuery</a>, you can deliver a JavaScript-enabled solution through <a href="https://dev.opera.com/articles/view/supporting-ie-with-conditional-comments/">conditional comments</a> to just IE while the other browsers use the CSS rules to style the page.</p>

<h2>Superfoods table live example</h2>

<p>If you have a browser that supports <code>nth-child</code>, <a href="zebra2.html">this linked HTML table will appear to be zebra-striped</a>. The CSS is inserted in the <code>head</code> on this page so you can view source to easily check out what is going on.</p>
