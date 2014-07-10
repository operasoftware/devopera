---
title: Introduction to hCard — Part 1
authors:
- christopher-schmitt
intro: 'In this article, Christopher Schmitt follows up his hCard introduction by showing us how add some style to hCards, to make them fit nicely into a page design.'
license: cc-by-nc-sa-2.5
---
<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/introduction-to-hcard-part-two-styling/" rel="next" title="link to the previous article in the series">Next article—Introduction to hCard, Part two: Styling hCards</a></li>
</ul>

<h2>Introduction</h2>
<p>hCard is a way of representing contact information - including people, organizations and places - using nothing but XHTML <code>class</code> attributes. It is one of many standards detailed on the <a href="http://microformats.org">Microformats project</a>, the aim of which is to provide standards for coding machine-readable information into web pages using semantic HTML.</p>

<p>Among other things, this standardized way of representing information allows for third-party software to glean this information and put it to all kinds of good use. hCard is the perfect vehicle for showing off the potential of Microformats, so let's take a look at how to create hCards, and how other sites make use of them.</p>

<h2>What is an hCard?</h2>

<p>The hCard Microformat is fashioned after the vCard, which is a popular file format for contact information. vCard is already implemented in a lot of software (including Microsoft Outlook and the Apple address book), so using it as a basis for an analogous web-focused format makes sense: it makes it readily compatible with a ubiquitous file format. The hCard is structured after the vCard in that its organization - the fields it uses - mirrors that of the standard vCard.</p>

<p>Let's take a look at a simple HTML hCard:</p>

<pre><code>&lt;div class="vcard"&gt;
  &lt;span class="fn n"&gt;Jack Tripper&lt;/span&gt;
  &lt;div class="org"&gt;Jack's Bistro&lt;/div&gt;
  &lt;div class="adr"&gt;
    &lt;div class="street-address"&gt;834 Ocean Vista Ave.&lt;/div&gt;
    &lt;span class="locality"&gt;Santa Monica&lt;/span&gt;,
    &lt;span class="region"&gt;CA&lt;/span&gt;,
    &lt;span class="postal-code"&gt;90405&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<p>The <code>div</code> with the <code>vcard</code> <code>class</code> attribute identifies this block of HTML as an hCard. Each piece of contact data (or set of data) is then wrapped in an element sporting a standardized class name that, again, makes these bits of code "machine-readable" by identifying them as hCard fields.</p>

<p>Most of the fields are optional, and the hCard above only includes a sampling of possible <code>class</code> names. You can include telephone numbers, birthdays, email addresses, instant messaging handles, even photos. And while the above card is a relatively simple one, hCard allows you to map out complex contact data, including nicknames, home and work addresses and phone numbers, preferred phone numbers, and organization info. (Check out the <a href="http://microformats.org/wiki/hcard-cheatsheet">full list of hCard fields</a>).</p>

<p>The only required fields are <code>fn</code> and <code>n</code>, both of which label the contact name. The <code>n</code> <code>class</code> represents the full name (which would include first and last name fields, and any prefixes or suffixes). The <code>fn</code> class labels the "formatted name", or how you would like the name to appear as the label for the card (eg, you may prefer "Mr. Jack Tripper", or "Tripper, Jack" among others). As the formatted name and the full name are often the same, you can combine these fields by assigning both of these classes to the same element.</p>

<p>Figure 1 shows the default rendering of an hCard.</p>


<img src="image001.gif" alt="Default rendering of an hCard" />
<p class="comment">Figure 1. Default rendering of an hCard.</p>

<p>While perfectly legible, you can easily spruce up this sparse contact card with a bit of CSS.</p>
<h2>hCard Tools and Uses</h2>
<p>Marking up HTML as an hCard is fairly straightforward: it requires little more than labeling existing data with specialized classes. However, you may want to make use of a few good tools to make the process easier; details of available tools can be found in this section.</p>
<p>The <a href="http://microformats.org/code/hcard/creator">Microformats.org hCard creator</a> on the Microformats website is a simple tool to create valid hCards. While its interface doesn't include all of the hCard fields available, it’s a great way to quickly whip up an hCard with basic contact information.</p>
<p>If you're creating your hCards by hand, you may want to check out the <a href="http://en.hcard.geekhood.net/">hCard validator</a>, which checks your syntax to make sure you're marking up the HTML correctly.</p>
<p>Once you've incorporated a few hCards into your website, you may wonder "Now what?" How can third-party sites or applications make use of this "machine-friendly" data? To illustrate hCards in action, let's look at them through the eyes of some popular third-party tools.</p>


<h3>Technorati contact feeds</h3>
<p>You should try out the <a href="http://www.technorati.com/contacts">Technorati Contacts Feed Service</a> as shown in Figure 2.</p>

<p>This utility, which is available to use on the site and as a favelet, pulls out the hCard data from a Web address, and lets you download the data as a vCard. You can then import the vCard into your favorite address book application.</p>


<img src="image002.jpg" alt="The Technorati hCards contacts page" />
<p class="comment">Figure 2. The Technorati hCards contacts page.</p>

<p>You can use the hCard extractor that's included on the web page, but let's install the favelet, so that we can use the tool in any browser. To do so, <em>Drag the favelet link to your bookmarks toolbar/Personal Bar</em> (you can see this link underneath the "Get hCards favelet" header).</p>

<p>Then, go to a page that includes an hCard. For example, Figure 3 shows a My Opera Profile page.</p>

<img src="image003.jpg" alt="A profile page on Flickr" />
<p class="comment">Figure 3. A My Opera Profile page, which features an hCard.</p>

<p>Click on the "Get hCard Contacts" favelet (in the Personal Bar). This will convert the hCards found on the page into vCards that will then be made available for download. You can then open up these vCards with a compatible address book application, as shown in Figure 4.</p>

<img src="image004.jpg" alt="Exporting hCard content using the Technorati contact feeds service" />
<p class="comment">Figure 4: Exporting hCard content using the Technorati contact feeds service.</p>

<p>Utilities like these let you quickly identify and utilize the contact data contained in a web page. And what's great is that these tools are able to glean data from any website that has Microformatted data - including your humble blog or small business site!</p>

<h3>Other Microformats applications</h3>

<p>There are other applications out there that can utilize Microformats:</p>

<ul>
<li><a href="https://addons.mozilla.org/en-US/firefox/addon/4106">Operator</a> is a Firefox add-on that detects Microformatted text on a web page, and then provides you with options to do various things with this data, depending on the type of microformat.</li>
<li>The <a href="https://addons.mozilla.org/en-US/firefox/addon/tails-export/">Tails Firefox extension</a> provides similar functionality to Operator.</li>
<li>There are also a couple of budding Microformats search engines, including the <a href="http://kitchen.technorati.com/search/">Technorati search engine</a> and <a href="http://virel.de">Virel</a>.</li>
</ul>
<h2>Summary</h2>
<p>A simple construction of HTML elements, the hCard microformat makes the information in your site much more versatile, which is one of the reasons sites like Flickr and Google Maps use it to markup contact information. With tools such as those discussed above, it is well worth the effort to mark up your contact data using hCards; it makes it more easily accessible to developers and users alike.</p>

<ul class="seriesNav">
<li class="next"><a href="http://dev.opera.com/articles/view/introduction-to-hcard-part-two-styling/" rel="next" title="link to the previous article in the series">Next article—Introduction to hCard, Part two: Styling hCards</a></li>
</ul>
