Title: CSS3 Multi-column layout
----
Date: 2011-03-17 07:21:38
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
  <p>Multiple column design that allows text to flow naturally from column to column depending on width and other parameters has proven invaluable in print design, crossing languages, cultures and a range of media. It will therefore come as no surprise to anyone reading this that such a multiple column capability is one of the most hotly requested CSS feature additions!</p>
  <p>
    The Multi-column Layout Module in the 
    <a href="http://www.w3.org/TR/css3-multicol/" title="link to w3c multicol spec">CSS3 specification</a>
     consists of the layout algorithm, properties to create the column structure and properties to control the flow and break of multicolumn elements. In this article, I&#39;ll give you an introduction to using the features of this module in your CSS layouts.
  </p>
  <h2>Building columns by creating multicol elements</h2>
  <p>Since there is no specific markup element for multiple columns, CSS is used to modify a given element and turn it into a  <em>multicol element</em>, which occurs automatically when certain column styles are set on an element.</p>
  <p class="note">Note: There are exceptions. A <code>table</code> element or any replaced block-level element cannot be made into a multicol element.</p>
  <p>Review Listing 1, in which I&#39;ve set up a header, a division, and several paragraphs of text.</p>
  <pre>
    <code>&lt;h2&gt;Excerpt from the Saga Of Hakon Herdebreid &lt;/h2&gt;

&lt;div&gt;
&lt;p&gt;Hakon, King Sigurd&#39;s son, was chosen chief of the troop which had
followed King Eystein, and his adherents gave him the title of king. He was ten
years old. At that time he had with him Sigurd, a son of Halvard Hauld of Reyr,
and Andreas and Onund, the sons of Simon, his foster-brothers, and many chiefs,
friends of King Sigurd and King Eystein; and they went first up to Gautland.&lt;/p&gt;

&lt;p&gt;King Inge took possession of all the estates they had left behind, and
declared them banished. Thereafter King Inge went to Viken, and was sometime
also in the north of the country. Gregorius Dagson was in Konungahella, where
the danger was greatest, and had beside him a strong and handsome body of men,
with which he defended the country.&lt;/p&gt;

&lt;p&gt;The summer after (A.D. 1158) Hakon came with his men, and proceeded to
Konungahella with a numerous and handsome troop. Gregorius was then in the town,
and summoned the bondes and townspeople to a great Thing, at which he desired
their aid; but he thought the people did not hear him with much favour, so he
did not much trust them.&lt;/p&gt;
&lt;/div&gt;
</code>
  </pre>
  <p class="comment">Listing 1: Some elements and content used to create a simple multicol element.</p>
  <p>
    Without any author styles applied, the <code>div</code> and its child elements will simply remain in the normal flow. But now I&#39;m going to turn the  <code>div</code> to have multi-column layout by simply specifying either of these properties:
  </p>
  <pre>
    <code>div {column-count: 4; }</code>
  </pre>
  <p>or</p>
  <pre>
    <code>div { column-width: 100px; }</code>
  </pre>
  <ul>
    <li>
      <strong><code>column-width</code></strong> sets the width of each column within the parent element. Values include pixels and ems, but not percentages.
    </li>
    <li>
      <strong><code>column-count</code></strong> sets the number of columns that should be displayed within the element.
    </li>
  </ul>
  <p>You could specify them both, but the <a href="http://www.w3.org/TR/css3-multicol/#pseudo-algorithm">pseudo-algorithm</a> used to calculate the number of columns would only use either one of them in most cases. </p>
  <p>Figure 1 shows the result, as rendered by Opera 11.10. </p>
  <p>
    <img src="http://forum-test.oslo.osa/kirby/content/articles/431-css3-multicolumn-layout/multicol-1.jpg" alt="defining an element as a multicol element" />
  </p>
  <p class="comment">Figure 1: Creating a multicol element.</p>
  <p>Now all the content in the <code>div</code> flows from column to column. Each column acts as a containing block for their content. This means any floated element within that column would be aligned to that column box.</p>
  <p class="note">Note: columns do not establish containing blocks for elements with <code>position: fixed</code> or <code>position: absolute</code>.
  </p>
  <h2>Adding gaps and rules</h2>
  <p>Of course, you&#39;ll want to add gaps and rules to your columns as necessary. To add gaps and rules, use the following multicolumn-specific properties:</p>
  <ul>
    <li>
      <code><strong>column-gap</strong></code>: This property sets the length of the gap between columns.
    </li>
    <li>
      <code><strong>column-rule-color</strong></code>: Use any standard value for the rule color.
    </li>
    <li>
      <code><strong>column-rule-style</strong></code>: This property allows you to style rules using <code>border</code> styles from CSS 2.1 (eg <code>dashed</code>, <code>dotted</code>, etc.).
    </li>
    <li>
      <code><strong>column-rule-width</strong></code>: Sets the width of the rule between columns. The rule will appear in the middle of the gap.
    </li>
    <li>
      <code><strong>column-rule</strong>: The shorthand for setting <code>column-rule-color</code>, <code>column-rule-style</code>, and <code>column-rule-width</code>. </code>
    </li>
  </ul>

  <p>Here are the styles I&#39;ve added:</p>
  <pre>
    <code>div { column-gap: 20px; column-rule: 2px solid #33c; }</code>
  </pre>
  <p>Now I&#39;ve got a series of distinct columns, which can be seen in Figure 2. You&#39;ll note I removed the guiding outlines for the main elements.</p>
  <p>
    <img src="http://forum-test.oslo.osa/kirby/content/articles/431-css3-multicolumn-layout/multicol-2.jpg" alt="adding gaps and rules to a multicol element" />
  </p>
  <p class="comment">Figure 2: Adding gaps and rule styles to the element to demonstrate the structure.</p>

  <h2>Controlling breaks in element flow</h2>
  <p>Just as we can break pages in print for increased organization and understanding, we can break elements with multi-column layout for paged and visual media. This provides a level of control over content flow, helping us to avoid columns breaking apart in odd places, such as at the point where an image or other object is placed within the columns.</p>
  <p>If content spans multiple columns, you would want to control the occurrence of column breaks. We have three properties to do so:</p>
  <ul>
    <li>
      <code><strong>break-before</strong></code>: Control column breaking (prevent, allow, force) before an element inside of an element with multi-column layout.
    </li>
    <li>
      <code><strong>break-after</strong></code>: Control column breaking (prevent, allow, force) after an element inside of an element with multi-column layout.
    </li>
    <li>
      <code><strong>break-inside</strong></code>: Control the break behavior inside the element.
    </li>
  </ul>
<p>Each of <a href="http://www.w3.org/TR/css3-multicol/#column-breaks">these column break properties can take several values</a> which lets you control how the text is spread out over multiple columns.</p>
  <h2>Spanning multiple columns</h2>
  <p>What if you&#39;d like to have an element span across the full length of the element, for example if you wanted a heading or image to appear across the columns but retain the multicolumn flow? We can do just that easily by using the <code>column-span</code> property.</p>
  <p>There are two values for <code>column-span</code>:</p>
  <ul>
    <li><code>none</code>: The element will not span across columns.
    </li>
    <li>
      <code>all</code>: This will cause the selected element to span all columns.
    </li>
  </ul>
  <p>In Listing 2, I&#39;ve simply moved the <code>h2</code> into the element with multi-column layout and added a rule to the CSS, <code>h2 { column-span: all; }</code> in order to have it span across all the columns.</p>
  <pre>
<code>&lt;div&gt;
&lt;h2&gt;Excerpt from the Saga Of Hakon Herdebreid &lt;/h2&gt;

&lt;p&gt;Hakon, King Sigurd&#39;s son, was chosen chief of the troop which had
followed King Eystein, and his adherents gave him the title of king. He was ten
years old. At that time he had with him Sigurd, a son of Halvard Hauld of Reyr,
and Andreas and Onund, the sons of Simon, his foster-brothers, and many chiefs,
friends of King Sigurd and King Eystein; and they went first up to
Gautland.&lt;/p&gt;

&lt;p&gt;King Inge took possession of all the estates they had left behind, and
declared them banished. Thereafter King Inge went to Viken, and was sometimes
also in the north of the country. Gregorius Dagson was in Konungahella, where
the danger was greatest, and had beside him a strong and handsome body of men,
with which he defended the country.&lt;/p&gt;

&lt;p&gt;The summer after (A.D. 1158) Hakon came with his men, and proceeded to Konungahella with a numerous and handsome troop. Gregorius was then in the town, and summoned the bondes and townspeople to a great Thing, at which he desired their aid; but he thought the people did not hear him with much favour, so he did not much trust them.&lt;/p&gt; &lt;/div&gt;</code> </pre> 
<p class="comment">Listing 2: Creating a spanning element in multicol layout</p> 
<p>Once you&#39;ve applied a <code>column-span</code> to an element, that element then becomes what is referred to as a <em>spanning element</em> . You can see the effect in Figure 3. </p> 
<p> <img src="http://forum-test.oslo.osa/kirby/content/articles/431-css3-multicolumn-layout/multicol-3.jpg" alt="creating a spanning element inside a multicol element" /> </p> 
<p class="comment"> Figure 3: Creating a spanning element. </p> 
<h2>Balancing Columns</h2>
<p>When you have multiple columns, browsers make an effort to make sure each column balances and that the variation in column length is minimal. You can change this by using the <code>column-fill</code> property. Setting it to <code>auto</code> (instead of the initial value of <code>balance</code>) could make the columns be filled sequentially which might result in some partially filled columns (or empty ones). You can see <a href="http://jsfiddle.net/nimbu/UprmV/">how different they look in this demo</a>.</p>
<h2>Now comes the fun part</h2> 
<p> Armed with this article, your favorite editor and Opera 11.10 (or Opera Mobile 11.10), you can begin experimenting with multi-column layout. You could conceivably create a layout combining multiple columns on the <code>body</code>, floated elements within the columns or even positioned elements. You can play around with spanning elements, using background images and transparency, and controlling content flow. </p> 
<p>I encourage you to &quot;just have fun with it,&quot; but I also want to add that multi-column layout, while widespread in print, is a new feature for Web developers and designers. As such, its uses and best practices for accessibility, usability, cross media and cross-browser interoperability are still immature. What&#39;s more, these are critical issues that cannot be addressed effectively in theory, so it is up to us to take this emerging layout feature and add it to our toolbox with care, thought and most important, creativity!</p> 
<h2>Browser Support</h2>
<p>Opera 11.10+, Opera Mobile 11.10 and IE 10 have the most <a href="http://www.opera.com/docs/specs/presto28/css/multicolumnlayout/">complete support for Multicolumn layout module</a>, while partial support can be found (via prefixes) for <a href="http://caniuse.com/#multicolumn"> Firefox 3.6+, Safari 3.2+, Chrome 10+</a></p>
<h2>Demos and further reading</h2> 
<ul>
  <li>David Storey demos <a href="http://people.opera.com/dstorey/multi-column/multicolumn-article.html">a print-inspired layout</a> including a spanning element. </li> 
  <li> <a href="http://people.opera.com/zibin/multicol/index.html">Zi Bin Cheah</a> offers up some fun with CSS3 including multicol for your enjoyment </li>  
  <li>Vadim Makeev has created <a href="http://people.opera.com/pepelsbey/experiments/multicol/">a fine newspaper-style multicol example to inspire you</a> </li> 
  <li> Opera&#39;s <a href="http://www.opera.com/docs/specs/presto28/css/multicolumnlayout/">documentation on its implementation of the Multi-column Layout Module</a> </li> 
  <li> <a href="http://www.w3.org/TR/css3-multicol/" title="specification for CSS Multi-column Layout module">The Multi-column Layout Module Specification</a> (at W3C) </li>
</ul>
