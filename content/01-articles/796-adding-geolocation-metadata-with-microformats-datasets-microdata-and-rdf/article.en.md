Title: Adding Geolocation metadata, with microformats, datasets, microdata and RDFa Lite
----
Date: 2013-01-11 02:08:32
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

<ul>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#microformats">Microformats</a></li>
    <li><a href="#datasets">Datasets API</a></li>
    <li><a href="#microdata">Microdata API</a></li>
    <li><a href="#rdfalite">RDFa Lite</a></li>
    <li><a href="#conclusion">Some Final Thoughts</a></li>
</ul>

<h2>Introduction</h2>

<p>In September 2011, I needed to <a href="http://lists.w3.org/Archives/Public/public-lod/2011Sep/0029.html">mark up location data</a> in an HTML document and it became more complicated than I initially thought it would be. I started to think about this topic again recently and <a href="http://lists.w3.org/Archives/Public/public-rdfa/2012Dec/0000">explored</a> <a href="http://lists.w3.org/Archives/Public/semantic-web/2012Dec/thread#msg10">some possibilities</a>. In this article I will share my findings, looking at how I used microformats, datasets, microdata and RDFa Lite to mark up this data, and discussing what the best option might be.</p>

<h2 id="microformats">Microformats</h2>

<p>Quite a few years back, there were not that many choices for adding explicit metadata to the content of a web page. It was possible to add metadata to the web page itself through the <code>&lt;meta&gt;</code> element, which was useful in some cases, but not for cases like mine where more precise granularity was required. <a href="http://microformats.org/">Microformats</a> tried to answer some basic use cases for simple vocabularies, without addressing the semantic clash of micro-communities.</p>

<p>The microformat syntax for <a href="http://microformats.org/wiki/geo">geolocation information</a> is quite verbose:</p>

<pre><code>&lt;span class=&quot;geo&quot;&gt;
    &lt;span class=&quot;latitude&quot;&gt;
    &lt;span class=&quot;value-title&quot;
          title=&quot;35.336833&quot;&gt; &lt;/span&gt;
    &lt;/span&gt;
    &lt;span class=&quot;longitude&quot;&gt;
    &lt;span class=&quot;value-title&quot;
          title=&quot;139.447083&quot;&gt; &lt;/span&gt;
    &lt;/span&gt;
    Tsujido
&lt;/span&gt;</code></pre>

<p>It also requires a specific microformat JavaScript library for parsing the data. There are <a href="http://www.jquery.info/spip.php?article7">clues</a> for parsing such data but no dedicated (official) JavaScript library to process it. There is a <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-data-element">proposal for a <code>&lt;data&gt;</code> element</a>, which might be useful for the <a href="http://microformats.org/wiki/microformats2#h-geo">microformats community in the future</a>, but that would still need a dedicated API for extracting the data.</p>

<h2 id="datasets">Datasets API</h2>

<p>Next, I explored the option that seemed most natural to me &#x2014; using the <a href="http://dev.opera.com/articles/view/an-introduction-to-datasets/">Datasets API</a>.</p>

<pre><code>&lt;ul&gt;
  &lt;li class=&quot;location&quot;
    data-lat=&quot;35.336833&quot;
    data-lon=&quot;139.447083&quot;&gt;Tsujido&lt;/li&gt;
  &lt;li class=&quot;location&quot;
    data-lat=&quot;35.633983&quot;
    data-lon=&quot;139.71600&quot;&gt;Meguro&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<p>I could do something along these lines to parse the data:</p>

<pre><code>var lonlist = document.querySelectorAll(&#39;[data-lon]&#39;);

function getPoslon(city) {
  var lon = city.dataset.lon;
  return lon;
};

for (var i = lonlist.length - 1; i &gt;= 0; i--) {
  console.log(getPoslon(lonlist[i]));
};</code></pre>

<p>which displays the thing I wanted in the console:</p>

<pre><code>139.71600
139.447083</code></pre>

<p>But that didn&#39;t feel quite right either. <code>data-*</code> should not be used for encoding useful information for the public. The <a href="http://www.w3.org/TR/html5/global-attributes.html#embedding-custom-non-visible-data-with-the-data-*-attributes">datasets specification</a> says:</p>

<blockquote>
  <p>Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.</p>
</blockquote>

<p>Location data seems interesting to the rest of the world, therefore it shouldn&#39;t be stored under <code>data-*</code> attributes. This creates an additional question: how do we use <code>data-*</code>? My personal opinion is that the use cases are very narrow and maybe <code>data-*</code> should have been named something like <code>local-*</code>. I can see how it could be used for parameters for a UI, for example.</p>

<p>So what are the other choices?</p>

<h2 id="microdata">Microdata API</h2>

<p>The <a href="http://dev.opera.com/articles/view/microdata-and-the-microdata-dom-api/">Microdata API</a> has been designed to expose more structured data in a web page so that people and inference engines can use it. There is a <a href="http://schema.org/GeoCoordinates">vocabulary for geographical coordinates</a> defined at <a href="http://schema.org/">schema.org</a>. Let&#39;s see how we&#39;d use it for my data:</p>

<pre><code>&lt;ul&gt;
  &lt;li itemscope itemtype=&quot;http://schema.org/Place&quot;&gt;
    &lt;span itemprop=&quot;name&quot;&gt;Tsujido&lt;/span&gt;
    &lt;div itemprop=&quot;geo&quot;
            itemscope
             itemtype=&quot;http://schema.org/GeoCoordinates&quot;&gt;
      &lt;meta itemprop=&quot;latitude&quot; content=&quot;35.336833&quot;/&gt;
      &lt;meta itemprop=&quot;longitude&quot; content=&quot;139.447083&quot;/&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li itemscope itemtype=&quot;http://schema.org/Place&quot;&gt;
    &lt;span itemprop=&quot;name&quot;&gt;Meguro&lt;/span&gt;
    &lt;div itemprop=&quot;geo&quot;
            itemscope
            itemtype=&quot;http://schema.org/GeoCoordinates&quot;&gt;
      &lt;meta itemprop=&quot;latitude&quot; content=&quot;35.633983&quot;/&gt;
      &lt;meta itemprop=&quot;longitude&quot; content=&quot;139.71600&quot;/&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>

<p>The <a href="http://www.google.com/webmasters/tools/richsnippets">rich snippet data testing tool</a> and the <a href="http://foolip.org/microdatajs/live/">Live Microdata tool</a> can both help to check that the data structure is valid. In each case, two locations are detected, and for each of them it gets the name, latitude and longitude. Try them out for yourselves, and see Figure 1 for the result I got.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/796-adding-geolocation-metadata-with-microformats-datasets-microdata-and-rdf/md-richdata-tool.png" alt="Results from microdata validation tool, showing that two geodata places are reported, each with a separate latitude and longitude associated with them." /></p>
<p class="caption">Figure 1: Validation of microdata markup.</p>

<p>The HTML markup became quite verbose and the JavaScript is a little bit unfriendly.</p>

<pre><code>var places = document.getItems(&#39;http://schema.org/Place&#39;);
for (var i = places.length - 1; i &gt;= 0; i--) {
  longitude = places[i].properties[&#39;geo&#39;][0].properties[&#39;longitude&#39;][0].itemValue;
  console.log(longitude);
};</code></pre>

<p><code>places</code> returns a <code>NodeList</code>. On each node I am searching for the geo property, <code>itemprop=&quot;geo&quot;</code>, which contains latitude and longitude data (for example <code>itemprop=&quot;longitude&quot;</code>) and extracting that data with <code>itemValue</code>.</p>

<p>Once again, I get:</p>

<pre><code>139.71600
139.447083</code></pre>

<p>The chaining of objects in this API is cumbersome, and not very user friendly — I would prefer something that directly plays with the meaning described in the document. In pseudo-code, I would prefer something along these lines</p>

<pre><code>foreach places in the document:
  longitude = places[i].longitude</code></pre>

<p>to return a list of data, or one value if there were only one value.</p>

<h2 id="rdfalite">RDFa Lite</h2>

<p>Finally, let&#39;s try the <a href="http://www.w3.org/TR/rdfa-lite/">RDFa Lite</a> version of the markup. If you are starting from Microdata markup, the conversion is easy and makes the markup more readable. The steps are as follows:</p>

<ul>
  <li><code>itemscope</code> is removed.</li>
  <li><code>itemprop</code> is replaced by <code>property</code>.</li>
  <li><code>itemtype</code> is replaced by <code>typeof</code>, which holds a value such as <code>Place</code> or <code>GeoCoordinates</code>.</li>
  <li><code>vocab=&quot;http://schema.org/&quot;</code> is added on an enclosing tag.</li>
</ul>

<p>The markup becomes simply:</p>

<pre><code>&lt;ul vocab=&quot;http://schema.org/&quot;&gt;
  &lt;li typeof=&quot;Place&quot;&gt;
    &lt;span property=&quot;name&quot;&gt;Tsujido&lt;/span&gt;
    &lt;div property=&quot;geo&quot;
             typeof=&quot;GeoCoordinates&quot;&gt;
      &lt;meta property=&quot;latitude&quot; content=&quot;35.336833&quot;/&gt;
      &lt;meta property=&quot;longitude&quot; content=&quot;139.447083&quot;/&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li typeof=&quot;Place&quot;&gt;
    &lt;span property=&quot;name&quot;&gt;Meguro&lt;/span&gt;
    &lt;div property=&quot;geo&quot;
            typeof=&quot;GeoCoordinates&quot;&gt;
      &lt;meta property=&quot;latitude&quot; content=&quot;35.633983&quot;/&gt;
      &lt;meta property=&quot;longitude&quot; content=&quot;139.71600&quot;/&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>

<p>Once this is tested with the <a href="http://www.google.com/webmasters/tools/richsnippets">rich snippet data testing tool</a> we get the result seen in Figure 2.</p>

<p><img src="http://forum-test.oslo.osa/kirby/content/articles/796-adding-geolocation-metadata-with-microformats-datasets-microdata-and-rdf/rdfa-richdata-tool.png" alt="The rich snippet data testing tool reports that we have two RDFa nodes, and lists the type, place name, latitude and longitude for each one" /></p>
<p class="caption">Figure 2: Validation of RDFa Lite markup.</p>

<p>The issue here is that there is no API in browsers to access the data. I asked around on various mailing lists to see if someone could come up with a shim to parse RDFa Lite data, but have had no positive responses as yet.</p>

<h2 id="conclusion">Some Final Thoughts</h2>

<p>Most of the issues of explicit metadata in Web pages are well-known. Cory Doctorow called it <a href="https://en.wikipedia.org/wiki/Metacrap">metacrap</a> in his essay, <a href="http://www.well.com/~doctorow/metacrap.htm">Metacrap: Putting the torch to seven straw-men of the meta-utopia</a> . While I do not agree with all his conclusions, he clearly puts across some of the issues associated with <strong>metadata editing</strong>.</p>

<p>One of the main issues is the feedback loop. As long as the tools are not helping <strong>people who are editing</strong> the metadata to get direct feedback on the editing, there will be less chance of it being properly edited in the Web page. Short feedback loops are essential to the quality of data. Having good solid APIs to access the data and expose them is a way to ensure the quality of metadata.</p>

<p>The second issue is that the data has to be directly useful for the person who is editing it. The only reason we bother to enter information in an address book is because we know it is directly useful to us.</p>

<p>As a conclusion, I would love to have a shim for accessing RDFa Lite data on top of Microdata API or — even better — to have an RDFa Lite API implemented in browsers. I found the RDFa Lite markup more readable than the Microdata markup (in this simple case at least). The Microdata API is a bit heavy to write/read. The Dataset API is a lot easier to write/read for accessing data, but not for public consumption.</p>

<table>
    <caption>Summary of Markup Choices</caption>
    <thead>
        <tr>
            <th>Markup</th>
            <th>Verbosity</th>
            <th>Native Browser API</th>
            <th>Online Checkers</th>
        </tr>
    </thead>
    <tbody>
        <tr id="mf">
            <th>microformats</th>
            <td>compact</td>
            <td class="N">no</td>
            <td>?</td>
        </tr>
        <tr id="ds">
            <th>datasets</th>
            <td>compact</td>
            <td class="Y">yes</td>
            <td>N/A</td>
        </tr>
        <tr id="md">
            <th>microdata</th>
            <td>very verbose</td>
            <td class="Y">yes</td>
            <td class="Y">yes</td>
        </tr>
        <tr id="rdfa">
            <th>RDFa Lite</th>
            <td>verbose</td>
            <td class="N">no</td>
            <td class="Y">yes</td>
        </tr>
    </tbody>
</table>

