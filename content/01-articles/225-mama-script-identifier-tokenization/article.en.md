Title: MAMA script identifier tokenization
----
Date: 2008-12-19 07:53:22
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
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-scripting-syntax/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Scripting syntax</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-script-tokenization-dom/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: 
Script tokenization: DOM</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>

<p><strong>Index:</strong></p>
<ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#how">How it was done</a></li>
    <li><a href="#probs">Problems encountered</a></li>
    <li><a href="#js">Identifier keywords: JavaScript/ECMAScript syntax</a></li>
    <li><a href="#dom">Identifier keywords: DOM</a></li>
    <li><a href="#therest">&quot;The Rest&quot;&#8212;identifier keywords not in the JavaScript/DOM categories</a></li>
</ol>

<h2 id="intro">Introduction</h2>
<p>Throughout much of MAMA&#39;s development history, script content was analyzed 
   using numerous substring and regular expression checks. There was always a 
   desire to use a more formal analysis, but an easy and simple solution never 
   presented itself. After discovering Saarsoo&#39;s markup and CSS study and the 
   breadth of his results, it was decided that one of the biggest deficits still 
   outstanding in large-scale Web research was an in-depth analysis of JavaScript. 
   This was the impetus necessary to finally tackle the formal analysis problem.</p>

<h2 id="how">How it was done</h2>
<p>I looked at using some stock Perl JavaScript libraries, but it would have taken 
   too much effort this time around. I did some research on parsing and tokenization 
   and found that using a tokenizer on script might be the quick and easy way I 
   needed to pull out useful data. Casting my line around the Web, I came across a 
   simple, public domain <a href="http://www.cdiggins.com/tokenizer.html">JavaScript 
   tokenizing script</a> by Christopher Diggins. His tokenizer broke down JavaScript 
   into a number of categories: comments, 
   quoted strings, identifiers, numbers, whitespace, and symbols. Of these, the 
   basic JavaScript and DOM syntax would be covered by the identifiers category. 
   So, here was a simple script to tokenize JavaScript, less than 100 lines, that 
   could give MAMA a lot more data than it would need. Bingo&#8212;it was quick work 
   to hack the code apart, convert it to Perl, and reduce it down to just what was 
   needed.</p>

<p>The next step was to decide what sort of information we wanted to pull out of 
   this tokenizer. Out of storage necessity, I wanted to break up these tokens 
   into groups for easier access. The basic structure of JavaScript as a group of 
   objects with methods and properties lends itself to this type of categorization, 
   so it was a natural fit. The compartmentalization of the language into small 
   groups also easily translated to a database design that made searching for 
   specific JavaScript and DOM keywords much faster. MAMA would also store these 
   keywords with their case-sensitivity preserved, which would further aid in 
   disambiguating their use.</p>

<p>Basic JavaScript syntax was an obvious thing for MAMA to grab. The components 
   of the basic JavaScript objects were also the right sizes for easy storage. 
   The DOM, however, was going to be more ambitious&#8212;in its atomic identifier 
   form, keywords from the DOM are often burdened by property/method name 
   collisions between multiple diverse objects. The DOM is a <strong>very</strong> 
   large domain to cover, so in the end I limited the initial set to objects and 
   keywords that I thought might be the most popular or interesting. All told, 
   28 categories were selected containing a total of 481 identifier keywords. 
   For identifiers that were not extracted into these groups, the remainders were 
   placed into a large group designated &quot;The Rest&quot;.</p>

<p>Once this identifier classification was complete, it made many of MAMA&#39;s original 
   simple script checks redundant. So, even though the tokenization effort was an 
   overall net addition of analysis code, a significant amount of code was also 
   removed from MAMA.</p>

<h2 id="probs">Problems encountered</h2>
<p>Some basic issues were discovered during this process:</p>

<ul>
    <li>The fewer characters in a keyword, the less likely it is used for a single 
        specific purpose. This is especially true for common or ambiguous words like 
        <code class="svar">all</code>, <code class="svar">class</code> and <code class="svar">id</code></li>
    <li>Keywords with mixed case stand a higher chance of representing unique usage, 
        especially camel-case property and method keywords, such as <code class="svar">hasChildNodes</code>
        and <code class="svar">getElementById</code></li>
</ul>

<p>MAMA has done well with this initial tokenizer design, but it is still a 
   first-generation effort that can be improved. For instance, a major bug was 
   discovered after the analysis phase&#8212;a database field created to store token 
   identifier chains never stored anything at all. This field would have allowed 
   better correlation for keywords with ambiguous meaning. For example, the 
   <code class="svar">open</code> method is used by multiple objects including 
   Window and XMLHTTPRequest; the lost MAMA field would have allowed a greater 
   degree of clarity with multiple uses of the same keyword. The next major 
   MAMA crawl will definitely address this lack and will hopefully go even farther 
   in its examination of scripting.</p>

<h2 id="js">Identifier keywords: JavaScript/ECMAScript syntax</h2>
<p><strong>[<a href="http://dev.opera.com/articles/view/mama-script-tokenization-javascript/">full results of the JavaScript identifier keywords</a>]</strong></p>

<p>The JavaScript section was easy to break down. It has a restricted set of basic 
   syntax details and a limited number of basic object categorizations. I broke 
   these down into 13 groups with a total of 187 keywords.</p>

<h2 id="dom">Identifier keywords: DOM</h2>
<p><strong>[<a href="http://dev.opera.com/articles/view/mama-script-tokenization-dom/">full coverage of the DOM identifier keywords</a>]</strong></p>

<p>Grouping the DOM together and organizing it into manageable clusters was a 
   difficult process. The DOM is a large category, with many object areas. There 
   were two main problems encountered when establishing this section&#8212;keyword 
   name collision (previously mentioned) and keywords that are too generic. I 
   picked object categories and keywords that seemed to cover the broadest parts 
   of the DOM. I also occasionally ignored choosing keywords that had more than 
   a single use, so that I could judiciously avoid messy ambiguity where possible. 
   This selection process resulted in 15 groupings having 294 total keywords.</p>

<h2 id="therest">&quot;The Rest&quot;&#8212;identifier keywords not in the JavaScript/DOM categories</h2>

<p><strong>[<a href="jsrest-url.htm">full coverage of &quot;The Rest&quot; of the identifier keywords</a>]</strong></p>

<p>After extracting the 481 JavaScript and DOM identifier keywords that had been 
   selected for special storage, MAMA placed all the remaining identifiers in a 
   big bucket called &quot;The Rest&quot;. There is overlap here with some of the other 
   MAMA mechanisms (such as <a href="jsfunctionlist-url.htm">script function names are stored in their 
   declared form elsewhere</a> but are also 
   stored here when they are invoked). This remainder list is <strong>very</strong> 
   large. The full table of values with frequency &gt;= 4 has 939,236 entries and a 
   file size of over 60MB! Luckily for the reader, I bumped the frequency floor of 
   this table up to 5,000 for this study. The resulting 420K file still has 
   6,715 items to wade through.</p>

<p>Some prominent entries in the list of &quot;The Rest&quot; suggest ways to improve and 
   add to the tokenization process in the future. For example, the Image object 
   was neglected by MAMA&#39;s DOM categorization, but seems very well represented 
   in this list by the <span class="string">&quot;Image&quot;</span> keyword. Other keywords 
   like <span class="string">&quot;src&quot;</span>, <span class="string">&quot;width&quot;</span> 
   and <span class="string">&quot;height&quot;</span> also have very high frequency and 
   could apply to images, but probably have name collisions with other uses as 
   well...such as CSS. If the <span class="string">&quot;width&quot;</span> and 
   <span class="string">&quot;height&quot;</span> keywords are interpreted instead as CSS, 
   they then become the most popular properties controlled by script. Separating 
   out the CSS properties into their own DOM keyword group yields the biggest 
   single keyword cluster yet at over 120 values.</p>

<p>Form control keywords are also significant in this list&#8212;<span class="string">&quot;name&quot;</span> 
   and <span class="string">&quot;value&quot;</span> are high on the list, but other form 
   properties are also prominent farther down. Another keyword from JavaScript 
   syntax that didn&#39;t really belong anywhere else, <span class="string">&quot;this&quot;</span>, 
   attains very high marks (96,0476 times) in our remainders ranking at number 7. 
   Clocking in with 407,385 mentions, the keyword <span class="string">&quot;java&quot;</span> 
   places high, scoring another point in the argument that a large number of Java 
   instances are dynamically created or manipulated by script.</p>

<p>Our look at script function names and external script file names showed that 
   the usage frequency tables make it easy to pick out commonly used script 
   libraries. The repeating patterns with very close frequencies are hard to miss. 
   This is also true in our list of &quot;The Rest&quot; of the identifier keywords. Google&#39;s 
   Urchin tracker (prefixed by <span class="string">&quot;_u&quot;</span>) and ad syndication 
   (prefixed by <span class="string">&quot;google_&quot;</span>) are very prominent in the 
   list, as are Macromedia function calls (prefixed by <span class="string">&quot;MM_&quot;</span>). 
   There are numerous other examples easily revealed in the table.</p>

<ul class="seriesNav">
<li class="prev"><a href="http://dev.opera.com/articles/view/mama-scripting-syntax/" rel="prev" title="link to the previous article in the series">Previous article&#8212;MAMA: Scripting syntax</a></li>
<li class="next"><a href="http://dev.opera.com/articles/view/mama-script-tokenization-dom/" rel="next" alt="link to the next article in the series">Next article&#8212;MAMA: 
Script tokenization: DOM</a></li>
<li><a href="http://dev.opera.com/articles/view/mama/#tableofcontents" rel="index">Table of contents</a></li>
</ul>
