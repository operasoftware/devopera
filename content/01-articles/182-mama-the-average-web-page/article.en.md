Title: MAMA: The "average" Web page
----
Date: 2008-10-15 00:21:12
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

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-key-findings/" rel="start" title="link to the first article in the series">Previous article&#8212;MAMA: Key findings</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-http-headers/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: HTTP headers</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<h2>Introduction</h2>
<p>This section will attempt to describe the construction of a typical Web page based on the 
   statistics presented in the MAMA research. This is not meant to imply that <strong>ALL</strong>, 
   or even most Web pages look like this; it is a composite view of features that a 
   significant percentage of MAMA&#39;s URLs commonly exhibit&#8212;an &quot;average&quot; Web page in 
   the literal sense. The barrier to entry on this list is each component having at 
   least half of the overall MAMA URL set or a majority of the particular technology 
   directly in use.</p>

<h2>HTTP Headers</h2>

<ul>
    <li><strong>Protocol:</strong> HTTP/1.1</li>
    <li><strong>HTTP Header Fields Present:</strong>
    <ul>
        <li><code class="skeyw">Accept-Ranges</code></li>
        <li><code class="skeyw">Connection</code> (value is <span class="string">&quot;close&quot;</span>)</li>
        <li><code class="skeyw">Content-Length</code></li>
        <li><code class="skeyw">Content-Range</code></li>
        <li><code class="skeyw">Content-Type</code> (<code>charset</code> parameter not specified)</li>
        <li><code class="skeyw">Date</code></li>
        <li><code class="skeyw">ETag</code></li>
        <li><code class="skeyw">Last-Modified</code></li>
        <li><code class="skeyw">Server</code> (value is an Apache variant)</li>
    </ul>
    </li>
</ul>

<h2>The Page</h2>

<ul>
    <li><strong>Document size:</strong> Main document is just over 16,400 characters</li>
    <li><strong>Doctype:</strong> HTML 4.x transitional variant doctype is used, with a system identifier</li> 
    <li><strong>Rendering Mode:</strong> Quirks mode</li>
    <li><strong>Document encoding:</strong> Specified using the <code class="elem">META</code> 
        element, set to <span class="string">&quot;iso-8859-1&quot;</span></li>
    <li><strong>Tag ratio:</strong> Ratio of markup to non-markup content is 61.64%</li>
    <li><strong>Basic markup structure:</strong> <code class="elem">HTML</code>, <code class="elem">HEAD</code> 
        and <code class="elem">BODY</code> elements used; <code class="att">Bgcolor</code> attribute used on <code class="elem">BODY</code></li>
    <li><strong>Comments:</strong> About 12 on average; just over 2,250 characters</li>
    <li><strong>Character entities:</strong> At least one, including non-breaking 
        space entity (<code class="value">&amp;nbsp;</code>)</li>
    <li><strong>Technologies not used:</strong> <abbr title="Byte Order Mark ">BOM</abbr>, 
        Event-handler attributes, Forms, Frames, Plugins and XML</li>
</ul>


<h2>Markup validation</h2>

<ul>
    <li><strong>Does not pass markup validation</strong></li>
    <li><strong>No fatal validator errors</strong></li>
    <li><strong>Validator warnings:</strong> 
         <ul>
             <li><span class="string">&quot;W06&quot;</span>&#8212;Unable to determine parse mode (XML/SGML)</li>
             <li><span class="string">&quot;W09&quot;</span>&#8212;No DOCTYPE found (Yes, this contradicts the doctype statement above.)</li>
         </ul>
    </li>
    <li><strong>Validation errors</strong> - 5, including:
        <ul>
            <li><span class="string">108</span>: There is no attribute X</li>
            <li><span class="string">127</span>: Required attribute X not specified</li>
        </ul>
    </li>
</ul>    



<h2>Markup</h2>
    <h3><code>HEAD</code> Section</h3>
    
    <ul>
        <li><strong>Elements used:</strong> <code class="elem">LINK</code>, 
            <code class="elem">META</code>, <code class="elem">SCRIPT</code>, 
            <code class="elem">TITLE</code></li> 
        <li><strong><code class="elem">LINK</code> element:</strong> 1-2 external stylesheets 
            (<code class="elem">Rel</code> attribute value is <span class="string">&quot;Stylesheet&quot;</span>, 
            <code class="elem">Type</code> attribute value is <span class="string">&quot;text/css&quot;</span>); 
            Total size: just under 8,500 characters; <span class="string">&quot;style.css&quot;</span> is the most 
            likely name of one of the external style sheets. </li>
        <li><strong><code>META</code> elements:</strong> Contains 3 <code class="elem">META</code> statements:
            <ul>
                <li>1 for search engine keywords (<code class="att">Name</code>=<span class="string">&quot;keywords&quot;</span>)</li>
                <li>1 for search engine description (<code class="att">Name</code>=<span class="string">&quot;description&quot;</span>)</li>
                <li>1 for setting the MIME type with <code>charset</code> parameter: 
                    <span class="string">&quot;iso-8859-1&quot;</span> 
                    (<code class="att">Http-equiv</code>=<span class="string">&quot;Content-Type&quot;</span>)</li>
            </ul></li>
        <li><strong><code>SCRIPT</code> element:</strong> Uses <code class="att">Language</code>, 
            <code class="att">Src</code> and <code class="att">Type</code> attributes. Contains at least 2 Scripts: 
            <ul>
                <li>External script - Typically 1, average: 2.5. Total size: just over 26,500 characters</li>
                <li>Embedded script - Typically 1, average: 3.6. Total size: just under 2,500 characters</li>
            </ul>
        </li>
    </ul>
    

    <h3><code>BODY</code> Section</h3>
    
    <ul>
        <li><strong>Block level elements:</strong> 
            <ul>
                <li><code class="elem">BR</code> element</li>
                <li><code class="elem">DIV</code> and <code class="elem">P</code> elements with the <code class="att">Align</code> attribute</li>
                <li><code class="elem">DIV</code> element also uses <code class="att">Id</code> and <code class="att">Style</code> attributes</li>
            </ul></li>
        <li><strong>Tables:</strong> <code class="elem">TABLE</code>, <code class="elem">TR</code>, and 
            <code class="elem">TD</code> all used. Tables typically nested 3 levels deep. The 
            following attributes are used:
            <ul>
                <li><strong><code class="elem">TABLE</code>:</strong> <code class="att">Border</code>, 
                    <code class="att">Cellpadding</code>, <code class="att">Cellspacing</code></li>
                <li><strong><code class="elem">TD</code>:</strong> <code class="att">Align</code>, 
                    <code class="att">Class</code>, <code class="att">Colspan</code>, 
                    <code class="att">Height</code>, <code class="att">Valign</code>, 
                    <code class="att">Width</code></li>
            </ul>
            </li>
        <li><strong>Phrase elements:</strong> <code class="elem">FONT</code> and <code class="elem">B</code> 
            element. <code class="elem">FONT</code> has the following attributes:
            <ul>
                <li><strong><code class="att">Color</code>:</strong> Using white, black or red colors specified with hex notation</li>
                <li><strong><code class="att">Face</code>:</strong>  Value includes the <span class="string">&quot;arial&quot;</span> font</li>
                <li><strong><code class="att">Size</code>:</strong>  Set to <code class="att">Size</code>=<span class="string">&quot;2&quot;</span></li>
            </ul>
            </li>
        <li><strong>Images:</strong> 
            <ul>
                <li>23 inline images (via <code class="elem">IMG</code> element)</li>
                <li>12 unique image URL references</li>
                <li>The images use the <code class="att">Alt</code>, <code class="att">Border</code>, 
                    <code class="att">Height</code>, <code class="att">Width</code> and 
                    <code class="att">Src</code> attributes</li> 
                <li>Image formats used are a mix of GIF and JPEG, with GIFs favored slightly</li>
            </ul>
            </li>
        <li><strong>Hyperlinks:</strong> 
            <ul>
                <li>38 hyperlinks</li>
                <li>Uses the <code class="att">Class</code> attribute</li>
                <li>One or more links outside the document&#39;s domain</li> 
                <li>One or more has <code class="att">Target</code> attribute value set to <span class="string">&quot;_blank&quot;</span></li>
                <li>One or more has event handler script attributes (<code class="att">Onmouseover</code> 
                    and/or <code class="att">Onmouseout</code>)</li>
            </ul>
        </li>
    </ul>
    

<h2>CSS</h2>

<ul>
    <li><strong>Inline CSS (<code class="att">Style</code> attribute):</strong> Total size ~1000 characters</li>
    <li><strong>External CSS (<code class="elem">LINK</code> element):</strong> 
        <ul>
            <li>1-2 external style sheets used</li>
            <li>MIME type used is <span class="string">&quot;text/css&quot;</span></li>
            <li>Total size: just under 8,500 characters</li>
            <li><span class="string">&quot;style.css&quot;</span> is file name of one of the external style sheets</li>
        </ul>
    </li>
    <li><strong>Uses the <code class="sel">:hover</code> pseudo-class</strong></li>
    <li><strong>CSS properties used:</strong>
        <ul>
            <li><code class="prop">Background-color</code></li>
            <li><code class="prop">Color</code></li>
            <li><code class="prop">Font-family</code></li>
            <li><code class="prop">Font-size</code></li>
            <li><code class="prop">Font-weight</code></li>
            <li><code class="prop">Height</code></li>
            <li><code class="prop">Text-align</code></li>
            <li><code class="prop">Text-decoration</code></li>
            <li><code class="prop">Width</code></li>
        </ul> 
    </li>
</ul>

<h2>Script</h2>

<ul>
    <li><strong>External scripts:</strong> At least 1, avg: 2.5; Total size just over 26,500 characters</li>
    <li><strong>Embedded scripts:</strong> At least 1, avg: 3.6; Total size just under 2,500 characters</li>
    <li><strong>Event handlers:</strong> At least 1, avg: 19.2; Total size just under 1,000 characters</li>
    <li><strong>External script MIME type:</strong> <span class="string">&quot;application/x-javascript&quot;</span></li>
    <li><strong>JavaScript/ECMAScript keywords used:</strong>
        <ul>
            <li>Basic language: <code class="svar">function</code>, <code class="svar">if</code>, 
                <code class="svar">var</code>, <code class="svar">new</code>, <code class="svar">return</code>, 
                <code class="svar">else</code>, <code class="svar">for</code>, <code class="svar">true</code>, 
                <code class="svar">false</code>, <code class="svar">null</code></li>
            <li>Global object methods: <code class="svar">escape</code>, <code class="svar">eval</code>, 
                <code class="svar">parseInt</code></li>
            <li>Array object: <code class="svar">length</code></li>
            <li>String object: <code class="svar">indexOf</code>, <code class="svar">length</code>, 
                <code class="svar">substring</code></li>
        </ul></li>
    <li><strong>DOM keywords used:</strong>
        <ul>
            <li>Document object: <code class="svar">document.getElementById</code>, <code class="svar">write</code></li>
            <li>Element object: <code class="svar">id</code>, <code class="svar">innerHTML</code></li>
            <li>Event-related objects: <code class="svar">onload</code>, <code class="svar">addEventListener</code></li>
            <li>Location object: <code class="svar">href</code></li>
            <li>Navigator object: <code class="svar">appName</code>, <code class="svar">appVersion</code>, <code class="svar">userAgent</code></li>
            <li>Window object: <code class="svar">window</code>, <code class="svar">navigator</code>, <code class="svar">location</code></li>
        </ul></li>
    <li><strong>Other script keywords used:</strong> <code class="svar">Image</code>, <code class="svar">height</code>, 
        <code class="svar">src</code>, <code class="svar">width</code></li>
    <li><strong>Script factors not used:</strong> Does not mention a browser; Does not use any recognized DHTML menus/libraries</li>
</ul>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-key-findings/" rel="start" title="link to the first article in the series">Previous article&#8212;MAMA: Key findings</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-http-headers/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: HTTP headers</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
