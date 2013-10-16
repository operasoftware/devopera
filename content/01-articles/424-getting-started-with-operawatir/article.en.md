Title: Getting started with OperaWatir
----
Date: 2011-02-09 08:36:48
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

	<p>
	  The Watir API allows us to write Ruby scripts that interact with
	  any web page, automatically going through
	  all the steps users would normally take and alerting us to any
	  problems quickly. This makes testing <strong>much quicker and easier</strong>.</p>

	<p>
	  In this tutorial we are going to control <a href="http://maps.google.com/">Google Maps</a> through <a href="http://www.opera.com/developer/tools/operawatir/">OperaWatir</a>. We
	  will find directions from the Opera headquarters to the Oslo
	  Opera House, and then take a closer look at our
	  destination.
	</p>
	
		  <p>To run the scripts described in this tutorial, we must
	  first <a href="http://www.opera.com/developer/tools/operawatir/install/">install OperaWatir and its
	  dependencies</a>.
	</p>

  <h3>The beginning</h3>

	<p>
	  In each script we first need to require OperaWatir,
	  and then start Opera.  Pretty soon after that we will want
	  to visit a URL, which is achieved with
	  the <code>browser.goto</code> method. We then add our tests,
	  and when they are finished we quit the browser, with <code>browser.quit</code>.
	</p>

<pre><code>require &#39;rubygems&#39;
require &#39;operawatir&#39;

browser = OperaWatir::Browser.new
browser.goto &#39;http://maps.google.com/?hl=en&#39;

# Add your tests here

browser.quit
</code></pre>

	<p>
	  Save this code into a file called <code>tutorial.rb</code>,
	  and then run it using this command:
	</p>

	<pre><code>jruby tutorial.rb</code></pre>

	<p>
	  Opera will start, wait a moment, go and visit
	  Google Maps, and quit.  Now we have visited a page, let&#39;s 
	  look at actually interacting with it.
	</p>


	<h3>Finding elements</h3>

	<p>
	  To interact with the page we first need to find the element
	 which we&#39;d like to test.  We can then perform a variety of actions,
	  of which the most common are clicking and typing in
	  text. Take a look at the <a href="http://www.opera.com/developer/tools/operawatir/api">API
	  documentation</a> for a full list of possible actions.
	</p>
	
     <p class="note">
	    You can find the ID of an element in Opera by right
	    clicking it, selecting ‘Inspect Element’, and looking for
	    the
	    <code>id=&quot;…&quot;</code> attribute in the window that
	    appears. Try finding my ID!
	  </p>

	<p>
	  There are two things you need to find an
	  element with Watir: the kind of element, and an identifying
	  feature. The easiest way to uniquely identify an element is
	  by using the ID, which for the search field this is
	  “<code>q_d</code>”. This is a text input, therefore we use
	  the <code>text_field</code> method. In this example we are going enter a value into the Google Maps search field. 
	</p>

<pre><code># Find the search field
search = browser.text_field(:id, &#39;q_d&#39;)</code></pre>
	
	<p>Add this line to your code file, just below the comment line.</p>

	<p class="note">
	  Consult the <a href="http://www.opera.com/developer/tools/operawatir/api">Watir 2 API Reference</a> to
	  see the other elements you can find.
	</p>

	<p>
	  Now that we have the search box we want to type something in it.
	</p>


	<h3>Issuing keyboard commands</h3>

	<p>
	  We can type text in the browser using the <code>set</code> method, and
	  press ‘special’ keys by using the <code>key</code> method.
	  We will use these methods to search for the directions from
	  Opera Headquarters to the Oslo Opera House, and submit the form by
	  pressing the enter key. We will also use the <code>sleep</code> method to make the browser wait before closing, giving us time to look at the results!
	</p>
	
	<p>The following is the new code you should add to your code file:</p>

<pre><code># Type text and submit the form
search.set &#39;Opera Software ASA, Oslo to Den Norske Opera &amp; Ballett&#39;
browser.keys.send :enter

# Wait 3 seconds so that we can see the results
sleep 3

browser.quit</code></pre>

	<p>
	  Try running the script again using the
	  command shown earlier.  After loading Google Maps,
	  Opera will wait a bit, type the specified test, then press
	  enter. This works ok, although the <code>sleep 3</code> command will keep Opera open long
	  enough for you to notice that our search was ambiguous, and we
	  need to click the first result. We&#39;ll do that next.
	</p>


	<h3>Manipulating the mouse</h3>

	<p>
	  Clicking links is very simple and uses some of the
	  techniques we have already learned.  First we need to find
	  the link to click, and then we can call the
	  <code>click</code> method.
	</p>

	<p>
	  In our search the first suggested result, which
	  has an ID of <code>ddw_dll_1_0</code>, is the one we want. We use
	  the <code>link</code> method to search for only links:
	</p>

	<pre><code>browser.li(:id, &#39;altroute_0&#39;).click</code></pre>

	<p>Put this line after the <code>sleep 3</code> line above.</p>


	<h3>Finding more difficult elements</h3>

	<p>
	  Sometimes the element we want will not have an ID, and we will
	   need to use other tools.  If the element has a
	  unique <code>title</code> or
	  <code>name</code> we can use these to find elements, or,
	  if we know it will always be in the same position we can
	  find it by index. For example:
	</p>

<pre><code># Examples of alternative selectors
labs_image = browser.image(:title, &#39;Google Maps Labs&#39;)
search_button = browser.button(:name, &#39;btnG&#39;)
web_link = browser.link(:index, 2) # second link on the page</code></pre>

	<p>
	  If we still cannot locate the element using these we can use
	  <strong>XPath</strong> (see <a href="http://www.w3.org/TR/xpath20/">The XPath spec</a> for more details, or read this <a href="http://calibre-ebook.com/user_manual/xpath.html">Simple XPath tutorial</a>).  XPath can be very complicated, but
	  we will be using only the simple
	  selector <code>//div[@log=&#39;pan_down&#39;]</code>.  This selects
	  all the <code>&lt;div&gt;</code> elements
	  whose <code>log</code> attribute equals
	  &#39;<code>pan_down</code>&#39;.  In this case there is only one:
	  the pan down button located at the top left of the map.  We
	  will use a similar selector to get the Zoom In button.
	</p>

<pre><code>pan_down = browser.element_by_xpath(&quot;//div[@log=&#39;pan_down&#39;]&quot;)
zoom_in = browser.element_by_xpath(&quot;//div[@title=&#39;Zoom In&#39;]&quot;)</code></pre>

	<p>
	  In this case we are taking a closer look at our destination
	  by clocking the &quot;pan down&quot; button
	  once, and then clicking the &quot;Zoom In&quot; button twice.</p>
	  
	  <p>See if you can work out how to add the code for this to your
	   current example file, before looking below.
	</p>


	<h3>Final code</h3>

	<p>
	  Here is the final code example - try running it again, to check it works out.  Because Google Maps is an Ajax
	  application we have added <code>sleep</code> commands to make sure
	  things have loaded and been added to the DOM before we try
	  and find them.
	</p>

<pre><code>require &#39;rubygems&#39;
require &#39;operawatir&#39;

browser = OperaWatir::Browser.new
browser.goto &#39;http://maps.google.com/?hl=en&#39;

puts &#39;Find the search box&#39;
search = browser.text_field(:id, &#39;q_d&#39;)

puts &#39;Type text and submit the form&#39;
search.set &#39;Opera Software ASA, Oslo to Den Norske Opera &amp; Ballett&#39;
browser.keys.send :enter

sleep 1

puts &#39;Select the first result&#39;
<strong>browser.li(:id, &#39;altroute_0&#39;).click

sleep 2

puts &#39;Pan down&#39;
pan_down = browser.element_by_xpath(&quot;//div[@log=&#39;pan_down&#39;]&quot;)
pan_down.click

puts &#39;Zoom in&#39;
zoom_in = browser.element_by_xpath(&quot;//div[@title=&#39;Zoom In&#39;]&quot;)
zoom_in.click
zoom_in.click</strong>
puts &#39;Done&#39;

sleep 10

# End
browser.quit</code></pre>


	  <p class="note">
	    <strong>Extra homework</strong>: if you want to try something yourself,
	    see if you can close the left panel (hint: the button is an image with an ID
	    of <code>panelarrow2</code>).
	  </p>

        <h3>Conclusion</h3>

	<p>
	  Hopefully this has been an enjoyable introduction to
	  OperaWatir, and has shown you how easy it is to
	  automatically control the browser.  You are certainly 
	  not limited
	  to what has been demonstrated here: have a look at the
	  <a href="http://www.opera.com/developer/tools/operawatir/api/">documentation</a> to see
	  everything you can do.
	</p>

	<p>
	  Happy testing and automating!
	</p>


	<h3>PS</h3>

	<p>
	  If you want to play with OperaWatir interactively, you can
	  use <code>jirb</code> (irb equivalent). Just do the
	  following:
	</p>

<pre><code>jirb
irb(main):001:0&gt; require &#39;rubygems&#39;
=&gt; true
irb(main):002:0&gt; require &#39;operawatir&#39;
=&gt; true
irb(main):003:0&gt; browser = OperaWatir::Browser.new
=&gt; #&lt;OperaWatir::Browser:0x1496e57 @active_window=#&lt;OperaWatir::Window:0x1eb1db2 @browser=#&lt;OperaWatir::Browser:0x1496e57 ...&gt;&gt;, @driver=#&lt;Java::ComOperaCoreSystems::OperaDriver:0xeabd2f&gt;&gt;
irb(main):004:0&gt; browser.goto &#39;http://sau.no/&#39;
=&gt; nil

<em>&lt;Enter your Watir commands here&gt;</em>

irb(main):005:0&gt; browser.quit
=&gt; nil
</code></pre>
