Title: XFN encoding, extraction, and visualizations
----
Date: 2008-02-21 01:25:11
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

<h2>Introduction</h2>

<p>In this article I will take a good look at XFN - the microformat for describing relationships between people. I will look briefly at what it is and the basic markup needed to add the information to your sites, before then going into depth, looking at the benefits you can get from that data by extracting it and using it in different ways. Extracting the data is easier than you think - there is probably a library for your favorite language already! If not, there are also some web services that could do the job that I&#39;ll show you below.</p>

<p>Note that I&#39;ve created some complete examples to accompany the CSS and XSLT sections - you can <a href="code.zip">download these here</a>.</p>

<h2>What is XFN?</h2>


<p>XFN stands for XHTML Friends Network and is a very early microformat created by the <a href="http://gmpg.org">Global Multimedia Protocol Group</a>. It grew out of the common publishing trend of linking to other sites you enjoyed reading. On your blog, this is called a blogroll - it is common to think of people by their web sites. Their URL is a representation of that person; part of their online identity. XFN is an attempt to codify these relationships using standard HTML.</p>

<p>XFN is very easy to use - you simply use some intuitive keywords to describe the relationships you have with other people. There is an <a href="http://www.gmpg.org/xfn/11">XMDP document that describes all the possible XFN keyword values</a>. These values are very basic and capture a wide spectrum of possibilities. I will walk you through some examples below. XFN is purposely left vague; it allows for the definitions to more easily flex with time, and therefore we get a shorter list. A more verbose enumerated lists would otherwise be so long that you wouldn&#39;t be able to decide exactly which values to use, and it would never be fine-grained enough for everyone. So XFN fits 80% of use cases very quickly and easily, and using something like <a href="http://microformats.org/wiki/posh">POSH</a> or other microformats to fit edge cases.</p>

<p>These XFN values are added inside the <code>rel</code> attributes (<code>rel</code> is short for &quot;relationship&quot;) of the <code>a</code> elements you use to link to these people. The <code>rel</code> attribute can also appear on the <code>link</code> element, but since microformats are concerned with more visible metadata, we only focus on the <code>a</code> element. A nice aspect of the <code>rel</code> attribute is that it can take a unordered space-separated set of values. This means that you can make compound XFN statements just by listing more than one value, if the person you are linking to has more than one different type of relationship to you. The following is a table of the possible XFN values, split into categories:</p>

<table>
  <tbody>
    <tr>
      <th>Friendship (select one)</th>
      <th>Physical</th>
      <th>Professional</th>
      <th>Geographical (select one)</th>
      <th>Family (select one)</th>
      <th>Romantic</th>
      <th>Identity</th>
    </tr>
    <tr>
      <td>contact</td>
      <td>met</td>
      <td>co-worker</td>
      <td>co-resident</td>
      <td>child</td>
      <td>muse</td>
      <td>me</td>
    </tr>
    <tr>
      <td>acquaintance</td>
      <td>&#xA0;</td>
      <td>colleague</td>
      <td>neighbor</td>
      <td>parent</td>
      <td>crush</td>
      <td>&#xA0;</td>
    </tr>
    <tr>
      <td>friend</td>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
      <td>sibling</td>
      <td>date</td>
      <td>&#xA0;</td>
    </tr>
    <tr>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
      <td>spouse</td>
      <td>sweetheart</td>
      <td>&#xA0;</td>
    </tr>
    <tr>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
      <td>kin</td>
      <td>&#xA0;</td>
      <td>&#xA0;</td>
    </tr>
    </tbody>
  </table>

<h2>Implementation</h2>

<p>So lets take for example, Chris Mills, the editor of my article. He has an author bio on <a href="http://dev.opera.com">dev.opera.com</a>, so we can use <a href="http://dev.opera.com/author/974138">this link</a>:</p>

<pre><code>&lt;a href=&quot;http://dev.opera.com/author/974138&quot; <strong>rel</strong>=&quot;&quot;&gt;Chris Mills&lt;/a&gt;</code></pre>

<p>Now that I have my basic structure, I need to put in the appropriate values for my relationship with Chris. If I just start at the left of the XFN list and work across, I can see what values I can use. The first category is <em>Friendship</em>, which describes the level of friendliness Chris and I have. I know how to contact Chris, so <code>contact</code> is certainly appropriate. For most people this might be the maximum relationship possible, but I know Chris better than that, so I could use <code>acquaintance</code>. I have also worked with Chris before on other projects and met him on several occasions such as SxSWi and d.Construct, and we have chatted over several beverages, so I think <code>friend</code> is the most suitable description. Some people reserve the term <code>friend</code> for people whom they would let watch their children, some people are friends with someone they simply met for 5 minutes or admire. In the friendship category, it is possible to only have one value, so I would mark Chris as a <code>friend</code>. The term <code>friend</code> is often symmetrical, meaning that if I consider Chris a friend, it is likely that he considers me a friend too, but that is not required. Chris could be much more strict about his definition of <code>friend</code> and only consider the few people on his Christmas card list worthy of that value. The definition of <code>friend</code> is open for interpretation and will change with context and time. Since the <em>Friendship</em> category can only have one value at most, I selected the highest fidelity relationship, <code>friend</code>.</p>

<pre><code>&lt;a href=&quot;http://dev.opera.com/author/974138&quot; rel=&quot;<strong>friend</strong>&quot;&gt;Chris Mills&lt;/a&gt;</code></pre>

<p>The next category is <em>Physical</em>. The only option is <code>met</code>, and I have met Chris on several occasions, so I can add that to the <code>rel</code> value as well.</p>

<pre><code>&lt;a href=&quot;http://dev.opera.com/author/974138&quot; rel=&quot;friend <strong>met</strong>&quot;&gt;Chris Mills&lt;/a&gt;</code></pre>

<p>The order of the XFN values is not important; just the fact that they are space separated means that all of these apply. The next category is <em>Professional</em>. These describe a few professional relationships that you could have had with people. Both Chris and I work in the same field and write for <a href="http://dev.opera.com">dev.opera.com</a>, so I would say that he is a <code>colleague</code>. The other option is <code>co-worker</code>, but we don&#39;t both work for the same company, so I probably wouldn&#39;t use that. Both of these professional values are symmetric, so if I am a co-worker of Chris&#39; then he is also a co-worker of mine, and the same for colleague - if we both work in the same field/area then we both should consider each other colleagues.</p>

<pre><code>&lt;a href=&quot;http://dev.opera.com/author/974138&quot; rel=&quot;friend met <strong>colleague</strong>&quot;&gt;Chris Mills&lt;/a&gt;</code></pre>

<p>In the rest of the categories, I don&#39;t find any matches for Chris, so I don&#39;t need to add any more values to my <code>rel</code> attribute.</p>

<p>The last category in XFN is <em>Identity</em>, and is only used for your own sites, not for friends&#39; sites. The only <code>rel</code> value is <code>me</code> which, when symmetric, allows for identity consolidation across different pages on the internet. If my website <a href="http://suda.co.uk">suda.co.uk</a> has a link to my flickr profile, I can use <code>rel=&quot;me&quot;</code>. Then on my flickr profile I can use <code>rel=&quot;me&quot;</code> to link back to <a href="http://suda.co.uk">suda.co.uk</a>. If I can do this over all my various profile pages on Twitter, upcoming and others. Then any XFN rel-me aware crawler can begin to build a single profile of me on the Web all without having to tell every single site about all my other profiles.</p>

<h2>Tools to Create XFN</h2>

<p>If this is too hard to remember, don&#39;t worry - there are plenty of tools to help you. There is a <a href="http://gmpg.org/xfn/creator">web version of the XFN creator in various languages</a> to quickly get you started. There are also <a href="http://www.webstandards.org/action/dwtf/microformats/">plug-ins for Dreamweaver</a> and <a href="http://web.archive.org/web/20090607083622/http://www.factorycity.net/projects/wp-microformatted-blogroll/">Wordpress</a>. More and more plugins are constantly appearing, so be sure to check the <a href="http://microformats.org/wiki/xfn">XFN wiki page</a> for your favorite language or CMS.</p>

<h2>Issues with XFN</h2>

<p>There have always been some open issues with XFN. I won&#39;t go into depth here, but below I will point out a few common sticking points and look at how we can benefit from taking note of them.</p>

<ul>

<li><em>There is no way to say, for example, ex-friend 1990-2000.</em> XFN exists in the now. This is more of an edge case and can&#39;t be represented in XFN.</li>
<li><em>The definition of &#39;friend&#39; is perhaps too lose.</em> This is a grey area - some think it is definitely too loose, and others say let the language evolve and the definition of friend change as well. I personally agree with the latter - if we strive to increase the accuracy of the terminology we could over-complicate things and end up with 400 extra definitions of friendship which no one would use anyway.</li>
<li> <em>XFN does not have enough professional relationships such as &quot;manager&quot; or &quot;vendor&quot;.</em> The great thing about HTML is that you could still write <code>rel=&quot;co-worker manager&quot;</code>. An XFN parser would still find the &#39;co-worker&#39; value and other specific parsers would extract your custom values such as &#39;manager&#39;. Microformats are also based on publishing practices, so as more people publish their professional relationships, these could get folded into XFN at a later date. Nothing is frozen in perpetuity.</li>

</ul>

<h2>How do you extract XFN data?</h2>

<p>There are plenty of different ways you can extract data from HTML, and I&#39;ll look at some of the more popular ones in this section.</p>

<h3>JavaScript</h3>

<p>Javascript naturally compliments HTML, so it is an ideal language to parse XFN from the DOM. The JavaScript could be loading into the page <code>onLoad</code>, it could be part of a bookmarklet, or even compiled into a greasemonkey script. Here is some simple code to get you started.</p>

<pre><code>// get all &#39;a&#39; elements

var links=document.getElementsByTagName(&quot;a&quot;);
var xfnValues=[&#39;friend&#39;,&#39;acquaintance&#39;,&#39;contact&#39;,&#39;met&#39;,&#39;co-worker&#39;,&#39;colleague&#39;,&#39;co-resident&#39;,&#39;neighbor&#39;,&#39;child&#39;,&#39;parent&#39;,&#39;sibling&#39;,&#39;spouse&#39;,&#39;kin&#39;,&#39;muse&#39;,&#39;crush&#39;,&#39;date&#39;,&#39;sweetheart&#39;,&#39;me&#39;]

// loop through and look for rel attributes

for(var i=0;i&lt;links.length;i++){
  var link = links[i];
  // check to see if the link has an rel and href attribute
  if(link.getAttribute(&quot;href&quot;)&amp;&amp;link.getAttribute(&quot;rel&quot;)) {
    // get the rel value
    var rel=link.getAttribute(&quot;rel&quot;);
    // loop through the known XFN values
    for(var j=0;j&lt;&#xA0;xfnValues.length;j++) {
      // check for matches
      var regex=new RegExp(&#39;\\b&#39;+&#xA0;xfnValues[j]+&#39;\\b&#39;,&quot;i&quot;);
      if(rel.match(regex)) {
        // do something here
      }
    }
  }
}</code></pre>

<p>Drew McLellan has a great tool called <a href="http://tools.microformatic.com/help/xhtml/rel-lint/">rel-Lint</a>, which will help you find common problems with your XFN and other markup.</p>

<h3>CSS</h3>

<p>Using CSS you can easily style XFN data. There are lots of different ways to achieve this, including styling background colors, or using <code>content :after</code> to add an asterisk or an image. Wolfgang Bartelme has made several very nice <a href="http://bartelme.at/journal/archive/microformats_icons">images for this purpose</a> that are generously licensed.</p>

<p>XFN values are added to the <code>rel</code> attributes of <code>a</code> elements. So the first part of any CSS statement would be to style the <code>a</code>, from there we will build up to styling specific XFN values.</p>

<pre><code>a{ background-color: yellow; }</code></pre>

<p>That will give a yellow background to all links, but I need to be more specific here - next, I want to target just <code>a</code> elements with a <code>rel</code> attribute. This is possible with the CSS attribute selector.</p>

<pre><code>a[rel] { background-color: yellow; }</code></pre>

<p>This will only apply the style to all links that also contain the <code>rel</code> attribute. The next step is to make sure that the <code>rel</code> attributes selected have an XFN values - we don&#39;t want just any <code>rel</code> attributes.</p>
       
<pre><code>a[rel=&quot;friend&quot;]{ background-color: yellow; }</code></pre>

<p>While this is correct, it will only find <code>a</code> elements that have a single <code>rel</code> value of <code>friend</code>. Remember that the <code>rel</code> attribute can take a space separated list of values. If there are other values on the <code>rel</code> attribute, this selector will not match and the style will not be applied. So I need to add another piece of information to my CSS selector syntax.</p>

<pre><code>a[rel~=&quot;friend&quot;]{ background-color: yellow; }</code></pre>

<p>Using <code>~=&quot;</code> instead of just <code>=</code> tells the browser to match the string <code>friend</code> in any list of space-separated values, as well as just <code>friend</code> on it&#39;s own. Note that this is not supported in IE6, but it is in most other modern browsers. Finally, it is also possible to chain these together:</p>

<pre><code>a[rel~=&quot;friend&quot;][rel~=&quot;co-worker&quot;] background-color: red; }</code></pre>

<p>That allows you to style people combinations of XFN values, for instance, I might style friends in yellow, but friends that I also work with would have a red background. This is possible for any combination, friend vs. friend and colleagues, muse vs. muse and met; using CSS it is easy to target these special relationships.</p>
      
<h3>XSLT</h3>

<p>XSLT is designed to convert XML to another format - you can extract data from HTML using XSL and XPath very easily, as long as the HTML is well-formed. (If it isn&#39;t, you can use an application like TIDY to clean it up.) For all the people who are more familiar with Javascript than XPath, much of the DOM knowledge transfers over, you just need to familiarize yourself with the new syntax. Let me walk you through an example. First I need to find all <code>a</code> elements anywhere in the DOM Tree. To do this, I start with the <code>//</code> path.</p>

<pre><code>//a</code></pre>

<p>That will find any <code>a</code> element at any depth (<code>//</code>) from the root node, in our case <code>html</code>. It is much like <code>document.getElementByTagName(&#39;a&#39;)</code> in JavaScript. The next step is to refine our selection to all <code>a</code> elements that have a <code>rel</code> attribute of <code>friend</code>.</p>

<pre><code>//a[@rel=&#39;friend&#39;]</code></pre>

<p>The brackets (<code>[]</code>) work in almost the same way as our CSS brackets. The <code>@</code> is used to say that this is an attribute, so <code>@rel</code> is the <code>rel</code> attribute and it must be equal to <code>friend</code>. The problem with that XPath expression is the same as the CSS issue; it will find <code>rel</code> values that <strong>only</strong> contain the string <code>friend</code>; I want to find <code>friend</code> anywhere in a space separated list.</p>

<p>XPath gives us a few more tools than CSS; we can add the function <code>contains()</code> to find the string <code>friend</code> from within the whole <code>rel</code> attribute value. <code>contains()</code> takes two parameters - the full string followed by the substring you are looking for.</p>

<pre><code>//a[contains(@rel,&#39;friend&#39;)]</code></pre>

<p>This will find any <code>a</code> element that has a <code>rel</code> attribute that contains the substring <code>friend</code>. The problem is that it will also find the string <code>friendship</code> because <code>friend</code> is contained within it. To solve this, I can pad both sides of the <code>rel</code> attribute with spaces and search for the term also padded with spaces. It sounds complicated, but it isn&#39;t. There are two more functions to note in this example - <code>normalize-space()</code> which removes unneeded white-space (equivalent to <code>trim()</code> in other programming languages) and <code>concat()</code>, which just merges strings together. In this example we are concatenating an empty space before and after the normalized <code>rel</code> attribute.</p>

<pre><code>//a[contains(concat(&#39; &#39;, normalize-space(@rel), &#39; &#39;),&#39; friend &#39;)]</code></pre>
      
<p>Using XPath you can now find the elements that match your queries. It is now possible to extract that data and style it, transform it and save it for access later.</p>
    
<h3>Regular Expressions</h3>
      
<p>You can also use Regular Expressions to extract the data. This is more complicated, but some people are more comfortable with Regexes than XSLT. I&#39;m not a Regular Expressions expert - there is probably a better, more optimized why to do this - but this works for me!</p>

<pre><code>/&lt;a(.*|\W*)(rel\s*=\s*\&quot;([^\&quot;]*)\&quot;)(.*|\W*)&gt;(.*|\W*)&lt;\/a&gt;/i</code></pre>
 
<p>That will find all the <code>a</code> elements and attempt to extract the rel values into an array that you can then parse to match any values; you can then do anything you want with the data.</p>
    
<p>The regular expression is case-insensitive; we specified that with the <code>/i</code> on the end. It starts off matching a string of <code>&lt;a</code> - this is how every anchor link is written. Next, it looks for <code>(.*|\W*)</code>. The period (<code>.</code> matches any character and the <code>\W</code> matches any word. We are looking for either of them zero or more times. This will eat-up any other text such as <code>href=&quot;...&quot;</code> or other attributes that are not the <code>rel</code> values we are looking for. We need to do this again after the <code>rel</code> value to eat-up any text behind it as well. The <code>href</code> or other attributes can be in any order, so we need to handle those scenarios. The really important part is <code>(rel\s*=\s*\&quot;([^\&quot;]*)\&quot;)</code>. This matches the string <code>rel</code> followed by zero or more white-space characters, then an <code>=</code> followed by more optional white-space. The <code>\&quot;</code> is the escaped value for a double-quote character. This is the start of our space separated list of <code>rel</code> values. The <code>([^\&quot;]*)</code> tells my regular expression to grab zero or more characters that are not (<code>^</code>) a double-quote.</p>
      
<p>Once you run that regular expression, all the data within the parenthesis is collected in array values. The actual value of the <code>rel</code> attribute would be in array item [3] because it is the third set of parenthesis in that string. This is quite complicated for something that seems pretty simple in other languages, but depending on your situation, comfort level and programming language, regular expressions might be the best choice for you.</p>

<p>If none of those snippets are your cup of tea, there might be one available in your favorite language. <a href="http://microformats.org/wiki/xfn-implementations">The XFN wiki page</a> has a growing list of applications and libraries already written, so that is an excellent place to start for your next XFN project.</p>
        
<h2>What can we do with this data?</h2>
      
<p>So this is all well and good, but some of you must be thinking &quot;What interesting things can I now do with this data, now I&#39;ve extracted it&quot;? Once you have extracted all of this data from the HTML, it is easy to store in a database or text file for retrieval later. You are basically storing three pieces of data - two URLs (one URL#1 that has an XFN relationship with the second URL) and an XFN relationship type (the value of the <code>rel</code> attribute.) Once you have your database, you can ask questions such as &quot;Show me all URLs that have a relationship of &#39;contact or colleague&#39; with &#39;suda.co.uk&#39;&quot;</p>

<p>In this section, I will look at some use cases and sites that allow you to do some of this today.</p>

<h3>Six Degrees of Separation</h3>
    
<p>The <a href="http://en.wikipedia.org/wiki/Small_world_phenomenon">famous Small World Phenomenon</a> by <a href="http://en.wikipedia.org/wiki/Stanley_Milgram">Stanley Milgram</a> demonstrated that there is on average of 6 steps between any two people. This was done through a complex network of letter sending, and then later on again via email. Using XFN it is possible to map distances between two people via their relationships. The site <a href="http://rubhub.com/">RubHub</a> tracks XFN relationships and lists who links to you and how, along with who you link to and how. <a href="http://rubhub.com/main/site/?9694">The results for my personal site, suda.co.uk</a>, can be seen in Figure 1. My friend Harry Halpin from my University days links to me and in my example above, I link to Chris Mills. So an automated spider could begin to build a network of who is connected to who and through whom. We can expand that through Harry&#39;s contacts and Chris&#39;s, and we can ask who knows who and in how many hops, or what other mutual connections there are between the two parties. Previously, without XFN, you could only guess if a link defined a relationship or if it was just a link. Now that we have &quot;typed&quot; the links, it is possible to extract more meaning from them.</p>
    
<p>There is no tool that I know of which can answer questions such as &quot;how far is Jeffrey Zeldman from Brian Suda&quot;. The <a href="http://rubhub.com/">RubHub</a> service allows you to click through to each person&#39;s site and follow their links ad infinitum, much like you can do with IMDB to see which actors have worked with with others. This sort of data is just asking for a nice visual front-end to be built, so you can ask questions like &quot;Find the path between suda.co.uk and zeldman.com&quot;. Now, if only Kevin Bacon had a website with XFN...</p>
  
<img src="http://forum-test.oslo.osa/kirby/content/articles/76-xfn-encoding-extraction-and-visualizations/figure1.png" alt="the Rubhub results for suda.co.uk" />  
<p class="comment">Figure 1: <a href="http://rubhub.com/main/site/?9694">suda.co.uk RubHub XFN results</a></p>
    
<p>As you can see, the RubHub spider has found 6 external links that point back to suda.co.uk with various types of XFN value. Rubhub also participates in identity consolidation through the use of rel-me links - it knows that there are 3 other pages that I have claimed to be mine. This means that any XFN link to any of those 3 pages should be counted as a link to <a href="http://suda.co.uk">suda.co.uk</a>.</p>
    
<h3>XFN Graph</h3>
    
<p><a href="http://xfngraph.sourceforge.net/">XFN Graph</a> is a similar application to IBM&#39;s Many Eyes, which I mentioned in a <a href="http://dev.opera.com/articles/view/microformat-encoding-and-visualization/">previous article</a>. You seed this application with a URL and a depth. It will then crawl the URL and links to the specified depth looking for XFN data. This allows you to build a connected graph between people. From this you can easily inspect the nodes and edges to find a path between any two people.</p>
    
<img src="http://forum-test.oslo.osa/kirby/content/articles/76-xfn-encoding-extraction-and-visualizations/figure2.png" alt="XFN Twitter graph" />  
<p class="comment">Figure 2: XFN Graph of Brian Suda&#39;s friends from Twitter.</p>
  
<p>The example in Figure 2 only goes to a depth of 1, but it is possible to continue to crawl each of those nodes and find their friends. With a depth search of 2 it becomes possible to search friends of friends, with a depth of 3 you get friends of friends of friends and so on.</p>

<p>Combining this data with supplementary information allows for some interesting mash-ups, for example you could combine your email&#39;s sent folder with your XFN friends list to match your friends with the frequency you e-mail them. You could also use twitter&#39;s <code>@username</code> to see which people are talking to who most frequently.</p>
     
<h3>Tag Clouds</h3>

<p>The <a href="http://backnetwork.com/">backnetwork</a> is a piece of software for conferences and other gatherings. It allows you to add yourself and some personal information, then you can slowly build-up your relationships with other event attendees. It has many interesting feature, but the one I&#39;ll focus on is the relationship tag cloud.</p>
      
<p>As you connect with other event goers, you label them with XFN values in the system. The relationship cloud tags those XFN values and assigns weights to them. A friend is larger than an acquaintance, which is in-turn larger than a contact. If the relationship is reciprocal then the size is further increased. This goes back to the example of myself and Chris. I consider him a friend, but it might be reciprocal. In that instance, the size of the name would not be as larger as if it where. Using this odd pairing, we can begin to also weight the strength of ties, not just the type.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/76-xfn-encoding-extraction-and-visualizations/figure3.png" alt="Brians dconstruct 07 backnetwork relationship cloud" />  
<p class="comment">Figure 3: d.Construct backnetwork relationship cloud</p>
   
      
<p>Figure 3 shows my Tag Cloud from d.Construct 07 - you can easily see who I am connected to and how strongly. Cloud type visualizations are popular for tags and word breakdowns, but they can also be used for people and the strength of the connection. This allows you to see at a quick glance who you are most connected with. Most of the time, people are not interested in exactly HOW you may know someone, but that the connection is big and strong. If you want to be introduced to someone in particular, then you can see which or your friends have the strongest connection to that person. That is the route with the most success.</p>
      
<h2>Building your own XFN spider</h2>
      
<p>Building your own spider is probably not advisable. Writing the code, traveling the web, indexing sites for links ... while you&#39;re at it, why not just write an entire Internet search engine? Fortunately you have a few options. For those who just must roll their own applications, you could rent data and server time from <a href="http://www.alexa.com/siteowners/data">Alexa</a> and crawl the data for yourself, or you could use the new <a href="http://code.google.com/apis/socialgraph/">Google Social Graph API</a>. This allows you to enter one or more URLs; it will then look in its own Internet database for links to and from those URLs that have XFN or FoaF links. I entered suda.co.uk, my personal site, and claimid.com/briansuda, another site that I use for OpenID. The results of what it found are amazing - check out Figure 4.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/76-xfn-encoding-extraction-and-visualizations/figure4.png" alt="Brians connected URLs in Google Social API" />  
<p class="comment">Figure 4: Screen Shot of my connected URLs in the Google Social API</p>
  
<p>The service finds 25 URLs that it knows are also me, and 4 more that it thinks are me. This service allows for you to consolidate your identity across the entire internet. It epitomizes what the internet was designed for, loosely coupled sites, without the need for a central server where you enter all your information. You can live your life at the edges of this graph on websites that do each task as they were designed. Then services can gather all that data together to make a single profile about you.</p>
  
<p> This not only works for data about you, but also data about how you relate to friends. The functionality found at the above link allows for any new social networking site to ask you for a URL as you join. It can then use the Google API to get a list of friends&#39; URLs that you have declared elsewhere on the internet. This new social networking site has no requirement for you to spend hours writing code to access various sites&#39; APIs or scrap them for data; you can now ask a single service which has previously indexed the sites and relationships. Google returns the data, suggesting potential URLs that match existing members of this new social network and asking you to migrate your relationships with just a click.</p>

<h2>Summary</h2>

<p>As we have seen, XFN is a quick and simple way to express some basic relationships between yourself and others through the use of existing HTML practices. By marking-up data explicitly, you are giving more meaning to your mark-up, which can then be used to generate interesting new visualizations and used to create a network of connections that can easily be moved from place to place. So what are you waiting for?</p>

<h2>Resources</h2>
      
<ul>
  <li><a href="http://jheer.org/vizster/">Social Network Visualizations</a></li>
  <li><a href="http://bradfitz.com/social-graph-problem/">Social Graph Problem</a></li>
  <li><a href="http://microformats.org/wiki/hcard-xfn-supporting-friends-lists">List of friend list supporting XFN</a></li>
  <li><a href="http://code.google.com/apis/socialgraph/">the Google Social Graph application</a></li>
</ul>
      
      /pre/code
