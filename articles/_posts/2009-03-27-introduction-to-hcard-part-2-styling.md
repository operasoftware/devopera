---
title: 'Introduction to hCard — Part 2: Styling hCards'
authors:
- christopher-schmitt
intro: 'In this article, Christopher Schmitt follows up his hCard introduction by showing us how add some style to hCards, to make them fit nicely into a page design.'
license: cc-by-nc-sa-2.5
---
<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/introduction-to-hcard/" rel="prev" title="link to the previous article in the series">Previous article&#8212;Introduction to hCard</a></li>
</ul>

<h2>Introduction</h2>
<p>In <a href="http://dev.opera.com/articles/view/introduction-to-hcard/">the first part of this tutorial</a>, I showed you the basics of the hCard microformat - what it is, how you implement on in HTML, and what tools are available to extract tem form web pages. Now that we know how to create hCards, let's go through a couple of examples that demonstrate how we might style hCards with CSS to make them fit into the visual design of a web page.</p>

<p class="note"><a href="hcard_examples.zip">Download the full code</a> for the examples in this article.</p>

<h2>Our first example - styling an existing hCard</h2>

<p>For our first example, let's work on the contact card created in the first part of the article, making it a bit more visually appealing with some CSS. First let's add a few more fields to the hCard we made last time (to give our card some more hooks to hang style information on):</p>

<pre><code>&lt;div class="vcard"&gt;
				&lt;div class="fn"&gt;Tripper, Jack&lt;/div&gt;
		&lt;div class="n"&gt;Jack Tripper&lt;/div&gt;
		&lt;div class="org"&gt;Jack's Bistro&lt;/div&gt;
				&lt;div class="adr"&gt;
					&lt;div class="street-address"&gt;834 Ocean Vista Ave.&lt;/div&gt;
					&lt;span class="locality"&gt;Santa Monica&lt;/span&gt;,
					&lt;span class="region"&gt;CA&lt;/span&gt;,
					&lt;span class="postal-code"&gt;90405&lt;/span&gt;
				&lt;/div&gt;
				&lt;p&gt;&lt;div class="tel"&gt;(310) 444-8444&lt;/div&gt;&lt;/p&gt;
				&lt;p&gt;&lt;div class="email"&gt;&lt;a href="mailto:jackthetripper@@example.com"&gt;jackthetripper@example.com&lt;/a&gt;&lt;/div&gt;&lt;/p&gt;
	 &lt;/div&gt;&lt;!-- end vcard--&gt;</code></pre>

<p>Notice how we've split up the <code>n</code> and <code>fn</code> properties: For the purposes of this example, we want to separate the title of our contact card (or "formatted name") from the rest of the card. The formatted name – <code>Tripper, Jack</code> – will label our contact card, while the <code>n</code> name field – <code>Jack Tripper</code> – will be included in the body of the card.</p>

<p>The default rendering of the contact information is shown in Figure 1.</p>


<img src="hcard01.jpg" alt="The default rendering of the hCard content">
<p class="comment">Figure 1. The default rendering of the hCard content.</p>

<p>This contact card is, at best functional, but uninspiring. Let's style this hCard with some CSS and make it a bit more impressive. There are many directions we could take here, but we are going to take inspiration from the old-fashioned Rolodex card. When we're finished the hCard will be styled as seen in Figure 2:</p>



<img src="hcard02.png" alt="The finalized version of the hCard style">
<p class="comment">Figure 2. The finalized version of the hCard style.</p>

<p class="note">Check out <a href="index1.html">the first example running live</a>.</p>

<h3>Enhancing the HTML and adding basic spacing</h3>

<p>So, how do we make our card this hip and retro? Let's begin by marking up our HTML a bit more. We first want to style the "title" of the hCard, which will make the "tab" of the Rolodex card stand out separate from the rest of it. So we first wrap the portion of the hCard that is separate from this title in its own <code>div</code>:</p>

<pre><code>&lt;div class="vcard"&gt;
				&lt;div class="fn"&gt;Tripper, Jack&lt;/div&gt;
		<strong>&lt;div class="vcardmain"&gt;</strong>
		&lt;div class="n"&gt;Jack Tripper&lt;/div&gt;
		&lt;div class="org"&gt;Jack's Bistro&lt;/div&gt;
				&lt;div class="adr"&gt;
					&lt;div class="street-address"&gt;834 Ocean Vista Ave.&lt;/div&gt;
					&lt;span class="locality"&gt;Santa Monica&lt;/span&gt;,
					&lt;span class="region"&gt;CA&lt;/span&gt;,
					&lt;span class="postal-code"&gt;90405&lt;/span&gt;
				&lt;/div&gt;
				&lt;p&gt;&lt;div class="tel"&gt;(310) 444-8444&lt;/div&gt;&lt;/p&gt;
				&lt;p&gt;&lt;div class="email"&gt;&lt;a href="mailto:jackthetripper@@example.com"&gt;jackthetripper@example.com&lt;/a&gt;&lt;/div&gt;&lt;/p&gt;
			<strong>&lt;/div&gt;&lt;!-- end vcardmain--&gt;</strong>
	 &lt;/div&gt;&lt;!-- end vcard--&gt;</code></pre>

<p>Next, we add dimensions to this element, and a background color:</p>
<pre><code>.vcardmain {
					width: 350px;
					padding: 45px 35px 65px 35px;
					background: #fff;
	}</code></pre>

<p>Our contact card now looks like Figure 3.</p>

<img src="hcard03.jpg" alt="Styling the main parts of the hCard">
<p class="comment">Figure 3. Styling the main parts of the hCard.</p>

<p>Note that we've added quite a bit of vertical space at the bottom of the card. The importance of this comes later.</p>

<h3>Creating the Rolodex "tab"</h3>

<p>Next we want to create the Rolodex "tab" – we do this by targeting the <acronym title="formatted name"><code>fn</code></acronym> <code>class</code>:</p>

<pre><code>.fn {
	 width: 140px;
	 padding: 5px 5px 5px 15px;
	 background-color: #fc0;
	 font-weight: bold;
	 color: #000;
}</code></pre>

<p>This rule sets the dimensions of the <code>div</code>, makes the font bold so it stands out, and sets the background and font colour. Now our contact card is beginning to look more like a Rolodex card – check out Figure 4.</p>




<img src="hcard04.jpg" alt="Now the tab appears on the hCard">
<p class="comment">Figure 4. Now the tab appears on the hCard.</p>


<h3>Adding rounded corners</h3>
<p>Now it's time to start adding more subtle design touches – we will now add some rounded corners of our elements to make it look more like an authentic Rolodex card.  There are many techniques for creating rounded corners, but here we will use <a href=" http://www.html.it/articoli/niftycube/index.html">Alessandro Fulciniti's Nifty Corners Cube</a>, which includes a piece of JavaScript that rounds element corners for you. I won't go into detail about how it works, but I will run quickly through steps needed to get it to work for our hCard.</p>

<p>After downloading the script and placing it in the same directory as the hCard HTML file, link the script to your page by placing the following in the HTML <code>head</code>:</p>

<pre><code>&lt;script type="text/javascript" src="niftycube.js"&gt;&lt;/script&gt;</code></pre>

<p>Then, add the following script to the heading as well:</p>

<pre><code>&lt;script type="text/javascript"&gt;
				 window.onload=function(){
				 Nifty("div.fn","large top");
				 Nifty("div.vcardmain","large tr");
		}
&lt;/script&gt;</code></pre>

<p>This first targets the <code>fn</code> <code>div</code> (the top tab) and gives it large round corners on the top. The second line of the script targets the <code>vcardmain</code> <code>div</code> (the element making up the body of the card), and rounds the top right (<code>tr</code>) corner of the element.</p>

<p>After putting this in place, our card now looks like Figure 5.</p>



<img src="hcard05.jpg" alt="Rounded edges on the hCard">
<p class="comment">Figure 5. Rounded edges on the hCard.</p>

<h3>The background image</h3>
<p>It's getting close! All that remains now is to add the background image for the card, including the card text, and the Rolodex hole punches at the bottom. Recall that we included a large amount of padding at the bottom of the <code>vcardmain div</code>. We did this so that we would have room to add this graphic element.</p>

<p>The image is 420 pixels wide, the same width as the <code>div</code> - see Figure 6.</p>


<img src="hcard06.jpg" alt="The background image for the hCard">
<p class="comment">Figure 6. The background image for the hCard.</p>
<p>So, the background image is attached to the <code>vcardmain div</code> using the following CSS rule:</p>

<pre><code>.vcardmain {
		width: 350px;
		padding: 45px 35px 65px 35px;
		background: #fff url('images/background.jpg') no-repeat bottom;
}</code></pre>
<p>Note that we put this image at the bottom of the card, and set the <code>background-repeat</code> property to <code>no-repeat</code>.</p>

<p><a href="index1.html">This finishes our hCard</a>! Of course, this is only one of the many possibilities for styling a contact card. You may opt for a more subdued aesthetic when designing your own cards, but this is certainly a fun example to show off what can be done.</p>

<h3>A second example - hCard footer</h3>

<p>For our second example, let's create something a bit more understated. Footers are a very common design treatment for Web pages, and a fair amount of site information gets posted there, including contact information. A footer is a perfect place to put an hCard!</p>

<p>Our second footer example - as shown in Figure 7 - not only has an hCard in the footer, it also contains a link that allows a user to download our hCard as a working vCard, which can then be easily imported into their address book application (eg Mac Address Book or Microsoft Outlook on Windows.)</p>



<img src="hcard07.jpg" alt="An hCard styled to fit into a Web page footer">
<p class="comment">Figure 7. An hCard styled to fit into a Web page’s footer.</p>

<p class="note">Check out <a href="index2.html">the second example running live</a>.</p>

<h3>The footer HTML</h3>
<p>Let's look at the HTML for the footer portion of this web page:</p>

<pre><code>&lt;div id="footer"&gt;
		 &lt;a href="http://feeds.technorati.com/contacts/referrer"&gt;&lt;img src="images/hcardicon.png" alt="download vcard" /&gt;&lt;/a&gt;
		 &lt;div class="vcard"&gt;
				 &lt;span class="title"&gt;&lt;span class="fn"&gt;Jack Tripper&lt;/span&gt; at &lt;span class="org"&gt;Jack's Bistro&lt;/span&gt;&lt;/span&gt;
						 &lt;div class="adr"&gt;
									&lt;span class="street-address"&gt;834 Ocean Vista Ave.&lt;/span&gt;, &lt;span class="locality"&gt;Santa Monica&lt;/span&gt;,         &lt;span class="region"&gt;CA&lt;/span&gt;, &lt;span class="postal-code"&gt;90405&lt;/span&gt;
						 &lt;/div&gt;&lt;!--end adr--&gt;
				 ph &lt;span class="tel"&gt;(310) 444-8444&lt;/span&gt; e: &lt;span class="email"&gt;&lt;a
href="mailto:jackthetripper@@example.com"&gt;jackthetripper@example.com&lt;/a&gt;&lt;/span&gt;
		 &lt;/div&gt;&lt;!-- end vcard--&gt;
&lt;/div&gt;&lt;!--end footer--&gt;</code></pre>

<p>Apart from a few minor changes, the hCard portion of the footer is very similar to the first example. Note however the link above the hCard that wraps a small icon image. When the user clicks on this icon, any hCards included in the markup is converted to a vCard, which can then be downloaded onto the user's computer.</p>

<p>The link points to a free service offered by Technorati that performs this very specific and very useful task. To make use of this hCard to vCard converter, we just need to include a link that points to <a href="http://feeds.technorati.com/contacts/referrer">http://feeds.technorati.com/contacts/referrer</a> - Technorati does the rest! So long as a valid hCard is included in the web page, Technorati finds the hCard content, converts it, and makes it available to the user for download.</p>

<h3>Styling the footer</h3>
<p>Now we've set up our download icon and hCard, we just need to add a bit of CSS to style these elements within the footer. Once we've set the desired colors and general font styles in the footer, we just need to add the following:</p>

<pre><code>#footer .title {
	color: #999;
}

#footer img {
	float: left;
}

#footer .vcard {
	margin-left: 38px;
}</code></pre>


<p>The first selector targets the "title" (or first line) of the hCard, and colors the text so that it stands out from the rest of the contact information. The icon image is floated to the left, and the <code>vcard class</code>, which wraps the entire hCard, is given a wide left-hand margin to make room for the icon so that it doesn't wrap around the image.</p>

<h2>Summary</h2>
<p>In this article, we have created a couple of simple, elegant method to make your contact information more easily accessible to your users. With a bit of semantic markup, we've made it very simple for the user to import your contact data into their favorite address book application.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/introduction-to-hcard/" rel="prev" title="link to the previous article in the series">Previous article&#8212;Introduction to hCard</a></li>
</ul>
