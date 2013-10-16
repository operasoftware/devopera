Title: MAMA
----
Date: 2008-10-15 00:20:36
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

<h2 id="intro">MAMA: What is the Web made of?</h2>
    <p>The Web has search engines&#8212;many of them. However, they are typically concerned only with the text content
    of a Web page. What about a search engine for a Web page&#39;s structure? Say you want to find a sampling 
    of Web pages that have more than 100 hyperlinks or for pages that use the <code class="prop">Font-size</code> CSS property 
    that also use the <code class="elem">FONT</code> element with a <code class="att">Size</code> attribute? Many parties would be interested 
    in such a service, even if the market would be smaller than for a &quot;traditional&quot; search engine. For browser makers 
    and standards bodies, the structure and composition of the Web is a more pressing issue than its content. A content 
    search engine numbers its market in millions, even billions, of individuals; the number of browser makers and 
    standards bodies who would see the biggest benefit from a structural search engine is much smaller, but they 
    include some of the most powerful software companies in the marketplace. Yet, there have been no obvious efforts 
    to address this shortcoming ... until now.</p>

    <p>Enter <abbr title="Metadata Analysis and Mining Application"><strong>MAMA</strong></abbr>&#8212;the 
    &quot;Metadata Analysis and Mining Application&quot;. MAMA is a structural Web-page search engine&#8212;it trawls 
    Web pages and returns results detailing page structures, including what HTML, CSS, and script is used 
    on it, as well as whether the HTML validates. In this document, and the ones that link from it, you&#39;ll 
    find data that has been pulled from MAMA so far. There is <strong>a lot</strong> of information here, but 
    every effort has been made to keep it readable and interesting for the various types of people 
    who might be interested in such data.</p>

<h2 id="what">What can you get from MAMA?</h2>
    <p>The intent has always been for MAMA to provide those developing the Opera Web browser with a tool
    to quickly find live examples of markup and other Web page structural components. We at Opera believe 
    this tool can also be useful to other stakeholders in the standards and browser-making world. For example:</p>

    <ul>
    <li>Browser manufacturers and others can use MAMA data on the popularity of widely used technologies to 
        prioritize bugs and justify adding support for new technology to in-progress releases.</li>
    <li>Standards bodies can use the data to measure the success and adoption rates of various technologies.</li>
    <li>Web developers can use the same data to justify support of various technologies in their work.</li>
    <li>It can provide real-world, practical samples of the Web developer&#39;s &quot;art&quot;, for inspiration and instruction.</li>
    </ul>
    
    <p>MAMA can definitely provide data on discrete issues such as &quot;what is the 18th most popular element?&quot; 
       (<code class="elem">SPAN</code>), or &quot;how popular is Flash?&quot; (found in 33.5% of MAMA URLs). It can also dig deeper, 
       by yielding regional and other data breakdowns. This allows us to discover that some countries like 
       Germany show a decreased tendency for Flash (25% of pages), while other countries have much higher 
       incidences (Chinese URLs in MAMA used Flash 67% of the time). For a quick look at some of MAMA&#39;s
       basic results, the <a href="http://dev.opera.com/articles/view/mama-key-findings">Key Findings</a> document provides a summary.</p>

    <p>There will inevitably be those who are looking for simple, blanket answers to complex questions, 
       such as what the prevalence of &quot;Web 2.0&quot; is, or how many sites are &quot;mobile-ready&quot;. Questions like 
       these require answers that consider numerous facets and issues. Only a tool like MAMA is up to this 
       challenge. MAMA can give answers to many components of such questions. As its net of features and 
       detections is cast ever wider, the granularity of the answers will only increase.</p>

<h2 id="history">The history of MAMA</h2>
    <p>I have been working in Opera&#39;s QA department since 2002. In the projects on which I worked, there has always been 
       a great need to justify various features and bug fixes. A tester can come up with all the isolated test scenarios they like, 
       but it is difficult to know if such tests truly represent how those things are actually used in the real world 
       of the live, evolving Web. Authors do the darnedest things. Real-world Web pages are often convoluted, complex, and messy, 
       not insular or sanitary. This is the true environment in which a Web browser must survive, not the simple conditions of a 
       test case.</p>

    <p>When the seeds of this project were sown in early 2004, there was little in the way of effective data 
       about the state of the Web. MAMA was designed to bridge the divide between the test case and the actual Web, to provide 
       examples of real-world sites that use existing and emerging technologies. Browser makers and standards bodies cannot
       control the authoring population&#8212;on the Web, you merely have to point to a single concrete usage of code, and that is 
       sometimes enough to win an argument about usage; the question then switches from &quot;who in their right mind would do 
       that??&quot; to a simple statement of reality: &quot;authors <strong>ACTUALLY</strong> do that&#8212;now, how do we react?&quot;</p> 

    <p>Because of my past experience with creating my own comprehensive HTML and CSS resource, I personally had many 
       interesting questions to ask about the Web, but I knew that there were many other stake-holders at Opera that would 
       have additional questions and insight that would be useful to consider. I talked with a variety of my co-workers at 
       Opera regarding what they wanted to know about the Web&#8212;program managers, core developers, QA, 
       those involved with writing specs at the W3C, marketing people&#8212;anyone I could think of that might provide unique
       perspectives and questions. Almost every person involved with creating Opera had different questions about &quot;what is out 
       there&quot; on the Web; thus began the genesis of MAMA.</p>

<h2 id="results">MAMA&#39;s full results</h2>
    <p>Previous studies into Web-page structure have focused primarily on overall statistics. 
       MAMA&#39;s nature as a structural search engine automatically provides that sort of data 
       and much, much more. MAMA&#39;s extensive results should provide easy comparison to previous 
       Web page studies as well as a broad baseline for any future studies. We will start by 
       providing analysis into a number of Web page topics mined from the MAMA data. For a 
       quick look at some MAMA&#39;s basic results, be sure to look at the <a href="http://dev.opera.com/articles/view/mama-key-findings/">Key findings</a> page.</p>

    <p>What follows is not as informal and witty as a blog nor as dry and formal as a 
       research paper&#8212;it lies somewhere in between. Those expecting rigorous academia 
       will forgive the occasional humorous turns of phrase or moments where personal 
       observations and experience intrude&#8212;I try to limit it to places where they 
       seem useful or interesting. For blog junkies, this will grow into a long, multi-part 
       saga (hopefully) worthy of a company from Scandinavia. Go get some coffee and buckle 
       up&#8212;it&#39;s about to get bumpy!</p>    

<h2 id="tableofcontents">MAMA: Table of contents</h2>

    <p>Here is what MAMA found:</p>

    <ol>
       <li><a href="http://dev.opera.com/articles/view/mama-key-findings/">Key findings</a></li>
       <li><a href="http://dev.opera.com/articles/view/mama-the-average-web-page/">What does an &quot;average&quot; Web page look like?</a></li>
       <li><a href="http://dev.opera.com/articles/view/mama-http-headers/">HTTP Headers</a> <strong>(Summary report available: <a href="http://dev.opera.com/articles/view/mama-http-headers-report/">HTTP headers</a>)</strong></li>
       <li><a href="http://dev.opera.com/articles/view/mama-w3c-validator-research-2/">Markup validation</a> <strong>(Summary report available: <a href="http://dev.opera.com/articles/view/mama-markup-validation-report/">Validation summary</a>)</strong></li>
       <li><strong>Markup (Summary reports available: <a href="http://dev.opera.com/articles/view/mama-markup-report-part-1-the-basics/">Markup basics</a> | <a href="http://dev.opera.com/articles/view/mama-markup-report-part-2/">Primary functional and structural markup</a> | <a href="http://dev.opera.com/articles/view/mama-markup-report-part-3-basic-body/">body markup</a> | <a href="http://dev.opera.com/articles/view/mama-markup-report-part-4/">Forms, tables and plugins</a>)</strong>
         <ul>
            <li><a href="http://dev.opera.com/articles/view/mama-basic-document-structure/">Basic document structure</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-document-encodings/">Document encodings</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-character-entities/">Character entities</a></li>
    <li><a href="http://dev.opera.com/articles/view/mama-code-comments/">Code comments</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-common-attributes/">Common attributes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-event-handler-attributes/">Event-handler attributes</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-frames/">Frames</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-head-structure/">HEAD structure</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-body-structure/">Body structure</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-hyperlinks/">Hyperlinks</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-phrase-block-list/">Phrase, block, list, and other elements</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-images-elements-and-formats/">Images</a></li>

<li><a href="http://dev.opera.com/articles/view/mama-forms/">Forms</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-plug-ins/">Plug-ins</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-tables/">Tables</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-xml/">XML</a></li>
         
         </ul>
       </li>
       <li><strong>CSS (Summary report available: <a href="http://dev.opera.com/articles/view/mama-css-report/">CSS</a>)</strong>
         <ul>
           <li><a href="http://dev.opera.com/articles/view/mama-css-quantities-and-sizes/">CSS quantities and sizes</a></li>
           <li><a href="http://dev.opera.com/articles/view/mama-css-syntax/">CSS syntax</a></li>
         </ul>
       </li>
       <li><strong>Script (Summary reports available: <a href="http://dev.opera.com/articles/view/mama-scripting-syntax-and-features/">Scripting syntax and features</a> | <a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript-dom/">JavaScript and DOM tokenization</a>)</strong>
         <ul>
<li><a href="http://dev.opera.com/articles/view/mama-scripting-quantities-and-sizes/">JavaScript quantities and sizes</a></li>
           <li><a href="http://dev.opera.com/articles/view/mama-scripting-syntax/">JavaScript scripting syntax</a></li>

<li><a href="http://dev.opera.com/articles/view/mama-script-identifier-tokenization/">Script identifier tokenization</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-script-tokenization-dom/">Script tokenization: DOM</a></li>
<li><a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/">Script tokenization: ECMAScript/JavaScript syntax</a></li>

         </ul>
       </li>
       <li><strong>Appendices</strong>
         <ul>
           <li><a href="http://dev.opera.com/articles/view/mama-what-has-come-before/">What has come before</a></li>
           <li><a href="http://dev.opera.com/articles/view/mama-methodology/">Methodology</a></li>
           <li><a href="http://dev.opera.com/articles/view/mama-the-url-set/">The URL set</a></li>
           <li><a href="http://dev.opera.com/articles/view/mama-acknowledgments/">Acknowledgments</a></li>
         </ul>
       </li>
    </ol>
