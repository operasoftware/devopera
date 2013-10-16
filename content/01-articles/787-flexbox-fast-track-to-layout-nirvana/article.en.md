Title: Flexbox — fast track to layout nirvana?
----
Date: 2012-10-08 13:36:33
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

<p>HTML and CSS is a great content delivery mechanism in many ways — it is easy to learn, flexible and powerful. One thing however that it has never excelled at is complex layouts. If you want to create a simple typographic essay layout with a floated image or two, then fine, but producing complicated multi column layouts has always been fiddly and hackish, and frustrating to get working consistently and precisely across browsers. We usually tend to abuse floats and other constructs for this purpose, and bugs and rendering differences can really spoil your fun.</p>

<p>To combat this, CSS3 includes a number of modules that exist to made different layout tasks much easier. We&#39;ve already looked at <a href="http://dev.opera.com/articles/view/css3-multi-column-layout/">Multi-column layout</a> and <a href="http://dev.opera.com/articles/view/opera-reader-a-new-way-to-read-the-web/">Generated Content for Paged Media</a> in other articles, and now we turn our attention to the <a href="http://www.w3.org/TR/css3-flexbox/">Flexible Box Layout Module</a>.</p>

<p>Flexbox, as it&#39;s commonly called, is designed to allow us to easily manipulate the layout of a series of child elements in ways that were previously difficult. For example:</p>

<ul>
  <li>Laying out those elements in a row without having to set explicit widths for each one, and wrapping the child elements if there isn&#39;t enough space for them to fit on one line.</li>
  <li>Rapidly changing them to be laid out vertically in a column instead.</li>
  <li>Aligning them to the left, right, center, etc. of the parent container.</li>
  <li>Changing the order in which they are displayed, without altering the markup.</li>
  <li>Setting the amount of space each child takes up as a proportion of the parent&#39;s width/height, without worrying about specifying exact widths or worrying about the layout still working if the parent dimensions are set using percentages and the viewport size changes.</li>
</ul>

<p>Sounds rather useful, no? Let&#39;s explore it in more detail.</p>

<p class="note">This article uses the latest Flexbox syntax, currently supported in Opera Mobile 12.1+, Opera 12.5+, Firefox 18+ (partial) and Chrome. Chrome needs <code>-webkit-</code> prefixes, whereas Opera has supported it without prefixes from the beginning. Firefox has partial support with a <code>-moz-</code> prefix, and the support is also hidden behind a flag (to enable, go to about:config in the address bar, search for &quot;flexbox&quot;, and double click the <code>layout.css.flexbox.enabled</code> line to set it&#39;s value to <strong>true</strong>).  Note that other browsers besides Opera have supported Flexbox since 2009, but using an old, outdated syntax that really shouldn&#39;t be used any more. Be sure to keep this in mind when reading and using code from pre-2012 articles about Flexbox - Chris Coyier has more on <a href="http://css-tricks.com/old-flexbox-and-new-flexbox/">how to tell</a> if you&#39;re reading an obsolete article.</p>

<h2>A simple flex example</h2>

<p>To get the flex party started, lets consider a simple example to show how easy Flexbox layout is. We will look at a &quot;fat footer&quot; type construct with three child elements, each of which contains fairly typical footer content. Let&#39;s go for contact details, important global links, and copyright notice. We want to display these in a horizontal line across the footer, centred vertically, and we want the global links to span twice as much width as the other two children. Today we&#39;d typically do this by floating the child elements, setting a width on them, and adjusting alignment using varying amounts of padding, etc. This is often fiddly and imprecise, without setting fixed values on all the dimensions, which can make things inflexible. But Flexbox can help us out here.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_example.png" alt="a simple single column layout with a fat footer, containing three child containers laid out horizontally" /></p>
<p class="caption">Figure 1: My flexible example. Things are all pretty simple, apart from the footer, which has a flexible layout consisting of three boxes.</p>

<p>Note: to see my finished example, look at my <a href="flexbox-example.html">Flexible fat footer</a> page (Figure 1) — you&#39;ll see that I&#39;ve made a funky little design with a column of content and a footer at the bottom, which stays put via some <code>position: fixed;</code> magic. The layout is flexible, with the main content column sized as a percentage of the page width, and the footer child elements resize in proportion to that main column. You&#39;ll also notice that I&#39;ve used a few media queries to shift the layout for smaller screen widths.</p>

<h2>Getting started with Flexbox</h2>

<p>So, how do we get started with Flexbox? Most of the Flexbox properties are applied to the parent container of the elements you want to lay out. To specify that you want to lay out a container as Flexbox, you use a special value of the <code>display</code> property, like so:</p>

<pre><code>footer {
  <ins>display: flex;</ins>
}</code></pre>

<p>Next, you can use the <code>flex-flow</code> property to specify that you want your child elements laid out in a <code>row</code> (the default), or a <code>column</code>. You can also include the keyword <code>wrap</code> if you like, to specify that you want the content to wrap onto a new line if the parent container is too narrow to fit all the Flexbox children on one line. In my example, I&#39;ve set the children of my footer to <code>row wrap</code>:</p>

<pre><code>footer {
  display: flex;
  <ins>flex-flow: row wrap;</ins>
}</code></pre>

<p>The significance of the <code>wrap</code> keyword will become apparent later on.</p>

<p class="note">Note: <code>flex-flow</code> is actually a shorthand property, for the two properties <code>flex-direction</code> (values <code>row</code>, <code>column</code>, <code>row-reverse</code> or <code>column-reverse</code>; the last two values make your row or column run in the opposite direction) and flex-wrap (values <code>wrap</code>, <code>no-wrap</code> or <code>wrap-reverse</code>.)</p>

<h3>Main axis, cross axis</h3>

<p>One concept you should get used to when working with Flexbox is that of main axis and cross axis, which work kind of like the X and Y axes, but with differences. The main axis always runs in the direction the flex flow is set to, so horizontal if your flex children are laid out in a row, and vertical if they are laid out in a column. The cross axis runs perpendicular to the main axis. These are illustrated in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_axis.png" alt="An illustration of the main axis and cross axis of a Flexbox: the main axis always runs in the direction of the row or column, and the cross axis runs perpendicular to that" /></p>
<p class="caption">Figure 2: An illustration of the main axis and cross axis of a Flexbox.</p>

<h3>Setting alignment of your Flexbox children</h3>

<p>Flexbox features a number of ways to help you align your children along the main and cross axis.

<h4>align-items across the cross-axis</h4>

<p>The first one we&#39;ll look at is <code>align-items</code>, which allows you to align your Flexbox children along the cross axis. The different values are:</p>

<ul>
  <li><code>flex-start</code>/<code>baseline</code>: Makes the start of all items sit flush to the start of the cross axis.</li>
  <li><code>flex-end</code>: Makes the end of all items sit flush to the bottom of the cross axis.</li>
  <li><code>center</code>: Makes the center of all items sit flush to the center of the cross axis.</li>
  <li><code>stretch</code>: Makes the child elements all stretch so that they fill the entire length of the cross axis</li>
</ul>

<p>These are all pretty self explanatory; to see them in action, go and play with the demo, and adjust the values, or check out Figure 3. For the example, I ended up going with this:</p>

<pre><code>footer {
  display: flex;
  flex-flow: row wrap;
  <ins>align-items: stretch;</ins>
}</code></pre>

<p>And there we have it — all my items will now always fill up the entire height of their parent container, regardless of how much the width and height adjusts as the viewport size changes. This is simply awesome — how many times in the past have you wanted to give a set of columns an equal height even when they contain a different amount of content, and had to mess around with inflexible solutions like setting an equal <code>height</code> on them, or using faux-columns?</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_align-items_flex-start.png" alt="Showing how the different values of align-items affect child containers - their alignment vertically is different" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_align-items_center.png" alt="Showing how the different values of align-items affect child containers - their alignment vertically is different" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_align-items_flex-end.png" alt="Showing how the different values of align-items affect child containers - their alignment vertically is different" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_align-items_stretch.png" alt="Showing how the different values of align-items affect child containers - their alignment vertically is different" /></p>
<p class="caption">Figure 3: Showing how the different values of <code>align-items</code> affect child containers. From top to bottom — <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, and <code>stretch</code>.</p>

<p class="note">Note: there is also a property called <code>align-self</code>, which allows you to set <code>align-items</code> behaviour on individual flex children. These will override <code>align-items</code> when set.</p>

<h4><code>justify-content</code> along the main axis</h4>

<p>The other main property in this category that will get used a lot is <code>justify-content</code>, which specified how items are arranged along the main axis, in terms of what happens to the excess whitespace between the children. This property doesn&#39;t have any effect when you&#39;ve set your children and their margins to take up all the available space across the main axis, as is the case in my main example. Therefore I&#39;ve created another example to demonstrate usage of <code>justify-content</code> — please take a look at the <a href="flexbox-example-fixed-width.html">fixed-width Flexbox example</a>.</p>

<p>In this example I&#39;ve set the different Flexbox children to take up a set percentage of the width of the main axis:</p>

<pre><code>#first {
  width: 25%;
}
    
#second {
  width: 40%;
}
     
 #third {
  width: 25%;
}</code></pre>

<p>Then on the parent container I&#39;ve set a value of <code>justify-content</code> as follows:</p>

<pre><code>footer {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  <ins>justify-content: space-around;</ins>
}</code></pre>

<p>This value works rather nicely — sharing out all the space in-between the child elements and on the outside of them all in equal amounts. The other available values are as follows:</p>

<ul>
  <li><code>flex-start</code>: Bunches all the Flexbox children up at the start of the main axis, with the space all at the end.</li>
  <li><code>flex-end</code>: Bunches all the Flexbox children up at the end of the main axis, with the space all at the start.</li>
  <li><code>center</code>: Bunches all the Flexbox children in the middle of the main axis, with the space equally divided at each end.</li>
  <li><code>space-between</code>: Has a very similar effect to <code>space-around</code>, but with no space given to each end of the series of Flexbox children.</li>
</ul>

<p>Figure 4 shows the effect of different settings of <code>justify-content</code>:</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_justify-content_flex-start.png" alt="Showing how the different values of justify-content affect child containers - their position horizontally is affected" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_justify-content_center.png" alt="Showing how the different values of justify-content affect child containers - their position horizontally is affected" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_justify-content_flex-end.png" alt="Showing how the different values of justify-content affect child containers - their position horizontally is affected" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_justify-content_space-between.jpg" alt="Showing how the different values of justify-content affect child containers - their position horizontally is affected" />
<img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_justify-content_space-around.png" alt="Showing how the different values of justify-content affect child containers - their position horizontally is affected" /></p>
<p class="caption">Figure 4: Showing how the different values of <code>justify-content</code> affect child containers. From top to bottom — <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code> and <code>space-around</code>.</p>

<h4><code>align-content</code> for aligning multi-line Flexboxes</h4>

<p>You can also specify how spare space between multiple lines of Flexbox children will be distributed, in the case of multiple-line Flexboxes, i.e. where the <code>wrap</code> keyword has been used. It only really has an effect when your Flexbox children take up a fixed amount of space in the direction of the cross axis, so a fixed height in the case of rows. The available values are:</p>

<ul>
  <li><code>flex-start</code>: Bunches all the Flexbox children up at the start of the cross axis, with the space all at the end.</li>
  <li><code>flex-end</code>: Bunches all the Flexbox children up at the end of the cross axis, with the space all at the start.</li>
  <li><code>center</code>: Bunches all the Flexbox children in the middle of the cross axis, with the space equally divided at each end.</li>
  <li><code>space-between</code>: Shares out all the space in between the child elements and on the outside of them along the cross axis all in equal amounts.</li>
  <li><code>space-around</code>: Has a very similar effect to <code>space-between</code>, but with less space given to each end of the series of Flexbox children.</li>
</ul>

<h3>Altering the element layout order</h3>

<p>Traditionally it has always been a pain to change the order in which elements are displayed without messing around with the source order. Not with Flexbox. Flexbox allows you to set the <code>order</code> property on child elements to state how soon they will appear in the Flexbox row or column. This property takes a integer value — called an ordinal group — and the higher the ordinal group, the later the child will appear. So for example, going back to my <a href="flexbox-example.html">Flexible fat footer</a> example, the box of links is the second child element by default, as shown in Figure 5.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_order-0.png" alt="the default order of the footer children in this example is contact, links, copyright" /></p>
<p class="caption">Figure 5: The default order of the footer children — contact, links, copyright.</p>

<p>By default, all the Flexbox children are in ordinal group 0. We can easily change this order by giving the children different ordinal group values. Higher values will appear later in the list of flex children; the order of children in the same ordinal group will always be governed by source order. So in my example, I&#39;ve made the links appear last by setting their ordinal group to 1 (see Figure 6 for the result):</p>

<pre><code>#second {
  order: 1;
}</code></pre>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_order-1.png" alt="the new order of the footer children in this example is contact, copyright, links" /></p>
<p class="caption">Figure 6: The <code>order</code> property has given us a new order for the footer children.</p>

<p class="note">Note: You can use negative <code>order</code> values.</p>

<h3>Making your elements flex</h3>

<p>Probably the most powerful feature of Flexbox is the ability to set the length of the child elements in the flex-flow direction (so <code>width</code> if <code>flex-flow</code> is <code>row</code>, or <code>height</code> if <code>flex-flow</code> is <code>column</code>) to be a flexible amount that changes depending on the amount of space available in the parent element in that direction. This is done using the <code>flex</code> property, whose value can take a total of three parts. Let&#39;s add them in one by one and look at the effect they have. First of all, a &quot;flex grow factor&quot;:</p>

<pre><code>#first {
  flex: 1;
}
    
#second {
  flex: 1;
}
    
#third {
  flex: 1;
}</code></pre>


<p>These are unitless values that serve as a proportion — they dictate what amount of the available space inside the parent each child should take up. If each one is set to 1, every child will set to an equal size inside the Flexbox. If you were to give one of the children a value of 2, that child would take up twice as much space as the others:</p>

<pre><code>#first {
  flex: 1;
}
    
#second {
  flex: 2;
}
    
#third {
  flex: 1;
}</code></pre>

<p>You can also set a <strong>flex basis</strong> value for each child, like this:</p>

<pre><code>#first {
  flex: 1 200px;
}
    
#second {
  flex: 2 300px;
}
    
#third {
  flex: 1 250px;
}</code></pre>

<p>First of all, the flex basis values are applied to each child as widths/heights, depending on what direction the flex is flowing. Then, the remaining space left inside the parent element is divided up according to the flex grow factors and given to the children to make their final width. So the children would be sized along the main axis as 200 pixels, 300 pixels and 250 pixels, which is a total of 750 pixels. If the parent container was 950 pixels along the main axis, then there would be an additional 200 pixels of space to distribute between the children. The first and third children would be given 50 pixels each, as they have a flex grow factor of 1. Their final size would be 250 pixel and 300 pixels respectively. The second child would be given 100 pixels, as it has a flex grow factor of 2. Its final size would be 400 pixels.</p>

<p>The third part of the <code>flex</code> value is rarely used, but let&#39;s look at it just in case. You can also give your child elements a &quot;flex shrink factor&quot;, like this:</p>

<pre><code>#first {
  flex: 1 1 400px;
}
    
#second {
  flex: 2 3 600px;
}
    
#third {
  flex: 1 2 400px;
}</code></pre>

<p>The flex shrink factors, despite their name, are still positive values — the second unitless values in the above declarations. These only come into play when the children overflow their parent container in the main axis direction. They also act as proportion values, but this time they specify the proportion of the &quot;overflow amount&quot; (the amount the children overflow their container by) that will be deducted off the size of each child, to bring the overall size down to equal the size of the parent — in effect, to stop the overflow.</p>

<p>Let&#39;s say that the parent container is 1100 pixels along the main axis. This being the case, our above children would overflow it by 300 pixels (they equal 1400 pixels along the main axis, in total). Because of the flex shrink factors set on them:</p>

<ul>
  <li>The first child would get 1/6th of the overflow amount removed from it, which is 50 pixels. Its computed value would therefore be 350 pixels.</li>
  <li>The second child would get 3/6th of the overflow amount removed from it, which is 150 pixels. Its computed value would therefore be 450 pixels.</li>
  <li>The third child would get 2/6th of the overflow amount removed from it, which is 100 pixels. Its computed value would therefore be 300 pixels.</li>
</ul>

<p>So a higher flex shrink factor actually results in a smaller element!</p>

<p>The values I ended up with for my main example are as follows:</p>

<pre><code>#first {
  <ins>flex: 1 0 7rem;</ins>
}
    
#second {
  order: 1;
  <ins>flex: 2 0 8rem;</ins>
}
    
#third {
  <ins>flex: 1.5 0 7rem;</ins>
}</code></pre>

<p class="note">Note: the <code>flex</code> property is shorthand — you can use the <code>flex-grow</code>, <code>flex-shrink</code> and <code>flex-basis</code> properties to set the three components individually.</p>

 <h2>Flexbox: responsive advantages</h2>

<p>One thing that has worked to really good effect on my example is combining a multiline Flexbox (<code>flex-flow: row wrap</code>) with a preferred flex length for the child elements (e.g. <code>flex: 1 0 7rem;</code>), and media queries. At narrower viewport widths, the preferred width cannot be reached without overflowing the parent element, therefore the Flexbox children will wrap onto multiple lines to keep things looking smooth, as shown in Figure 7.</p>

<p>
  <img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_example_wide.png" alt="some simple Flexbox application has given us a useful responsive layout - the image shows a one, two and three row layout, at different viewport widths" />
  <img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_example_medium.png" alt="some simple Flexbox application has given us a useful responsive layout - the image shows a one, two and three row layout, at different viewport widths" />
  <img src="http://forum-test.oslo.osa/kirby/content/articles/787-flexbox-fast-track-to-layout-nirvana/css-flexbox_example_narrow.png" alt="some simple Flexbox application has given us a useful responsive layout - the image shows a one, two and three row layout, at different viewport widths" />
</p>
<p class="caption">Figure 7: Some simple Flexbox application has given us a useful responsive layout.</p>

<h4 id="common-flex-values">flex: auto and flex:initial</h4>

<p>Flex has some other useful values, described in the part of the spec titled <a href="http://dev.w3.org/csswg/css3-flexbox/#flex-common">Common values of &#39;flex&#39;</a>. Two of the most useful are <code>auto</code> and initial. Setting <code>flex: auto;</code> on a child element of a flexible box (equivalent to <code>flex: 1 1 auto</code>) will make it fully flexible and size it according to any <code>width</code>/<code>height</code> or <code>min</code>/<code>max</code>-<code>width</code>/<code>height</code> properties it has set; it will expand to take up a proportion of any free space available, but then shrink to fit its contents when there is no extra free space. This can have some interesting effects when combined with a <code>min-width</code>, say. Take a look at my <a href="flex-auto-test.html">Flex auto</a> example. In this example, the parent container is set to <code>flex-flow: row</code>, and the third child container is set to <code>flex: auto;</code>, and has a <code>min-width</code>. It therefore expands to fill any excess space on the line, no matter where the toolbar is multiple line or not, and then shrinks neatly as it gets smaller, allowing the child buttons to rearrange themselves to suit.</p>

<p>Try changing the <code>flex: auto;</code> value to <code>flex: initial</code> (equivalent to <code>flex: 0 1 auto</code>) and you&#39;ll see that the third child container no longer increases in size when there is excess space, but it still shrinks if needed.</p>

<p>All of this power and flexibility with such little code is definitely a good thing!</p>

<h2>Degrading gracefully</h2>

<p>Flexbox is a whole new layout model, and browsers that don&#39;t understand it will simply ignore it. That might appear to be a deal-breaker that prevents you from ever using it. However, it doesn&#39;t need to be. For example, you might use floats or <a href="http://www.w3.org/TR/CSS2/tables.html">CSS tables</a> to layout the &quot;desktop&quot; layout for a site, and choose to use Flexbox for very narrow (mobile) browser widths, perhaps to move a left-hand nav below the main content.</p>
<p>If you set all the page elements (nav, header, footer, etc)  to <code>display:block;</code> as a default before the Flexbox rules, a browser which supports media queries but not flexbox would simply linearise your content into blocks that span the full width of the device. They would remain in source order, but all the content remains accessible to the user.</p>    
<p>Alternatively, CSS tables can be used to pull one element out of source order and put it at the start or end of the content - see the <a href="http://jsbin.com/axobun/1/edit">filthy table-caption hack</a> and chuckle as you recoil.</p>

<h2>Summary</h2>

<p>I hope that this article has made it clear to you exactly how awesome and useful Flexbox is, allowing us to do with away with repeated float and clear abuse, and a number of other horrible, hacky, inflexible layout techniques. You can also see how great Flexbox is for responsive web design when combined with other technologies such as Media Queries.</p>

<p class="note">Note: cover image by <a href="http://www.flickr.com/photos/horiavarlan/4273846588/">Horia Varlan</a>.</p></p>
