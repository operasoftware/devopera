Title: Indexing and searching in Opera with Opera Quick Find History Search
----
Date: 2008-04-10 20:50:06
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
<p>Opera 9.5 contains a new feature that allows you to search the full text from any previously-visited pages &#8212; Opera Quick Find History Search. Anytime you visit a page, its contents is indexed. Then for example if, a month later, you start thinking &quot;Where did I see that article about Pierre Richard?&quot;, you can go to Tools -&gt; History (or press Ctrl/Cmd + Shift + H) and search for &quot;pierre&quot; and &quot;richard&quot; in the search field. Voilà &#8212; you get a list of all the pages you have previously read containing the strings &quot;pierre&quot; and &quot;richard&quot;. You can also keep refining/reducing the search term as you type, which is very useful. Easier still, you can even do the search directly in the address bar by typing &quot;h pierre richard&quot; into it!</p>

<p>Of course, if you don&#39;t want others to know that you have seen such a page, you can delete the URL from Opera&#39;s history and it won&#39;t appear in your search results anymore. There is also an option to delete all your private data in a single step (choose Tools &gt; Delete Private Data from the Opera menu bar).</p>

<h2>The structure of the Index</h2>
<p>So how does Opera Quick Find History Search work? Opera contains a simple database engine that specializes in indexing and storing full-text data. All changes to its indexes are journaled, so it doesn&#39;t break when you for example run out of power in the middle of modifying the data.</p>

<p>For the indexing to work effectively, all the words from the documents you read have to be recognized by the indexing database. It&#39;s quite easy for latin or arabic languages, but Japanese and Thai are difficult, because they don&#39;t have spaces between words. Luckily enough, they use different character sets to arabic languages, so it&#39;s easy to find out that a page contains such a script, and adjust things accordingly. </p>

<p>As the words are parsed, they are stored as an inverted file index. An inverted file index contains a list of words and, for each word, a list of ID numbers of the documents that contain the word. For example, say you have the following three documents, each containing a single line, numbered 1, 2 and 3: </p>

<pre>1: <code>Pourquoi un site sur Pierre Richard?</code>
2: <code>Interview de Pierre Richard</code>
3: <code>Interview de Pierre Curie</code>
</pre>
<p>The three documents give us a following inverted file index:</p>

<table>
  <tr>
    <th>curie</th><td>{3}</td>
  </tr>
  <tr>
    <th>de</th><td>{2, 3}</td>
  </tr>
  <tr>
    <th>interview</th><td>{2, 3}</td>
  </tr>
  <tr>
    <th>pierre</th><td>{1, 2, 3}</td>
  </tr>
  <tr>
    <th>pourquoi</th><td>{1}</td>
  </tr>
  <tr>
    <th>richard</th><td>{1, 2}</td>
  </tr>
  <tr>
    <th>site</th><td>{1}</td>
  </tr>
  <tr>
    <th>sur</th><td>{1}</td>
  </tr>
  <tr>
    <th>un</th><td>{1}</td>
  </tr>
</table>

<p>The words in the indexed documents are ranked during indexing to give you the best search results first. Ranking is stored in the inverted file index together with document numbers; bear in mind that the same word can have a different ranking in different documents. An inverted file index with the ranking added looks something like the following: </p>

<table>
  <tr>
    <th>curie</th><td>{[3, <i>0.8</i>]}</td>
  </tr>
  <tr>
    <th>de</th><td>{[2, <i>0.5</i>], [3, <i>0.6</i>]}</td>
  </tr>
  <tr><th></th><td>...</td></tr>
</table>

<h2>Searching</h2>
<p>The index can contain hundreds of thousands of items, so it&#39;s important to return the best matching results first. When you search for multiple words, the ranking of the searched words is combined for each document to give an overall ranking of a result. Here is an example how searching works &#8212; consider the following inverted index:</p>

<table>
  <tr><th>Pierre</th><th></th> <th>Richard</th><th></th></tr>
  <tr><th>rank</th><th>document</th> <th>rank</th><th>document</th></tr>
  <tr><td>0.9</td><td>3</td> <td>0.7</td><td>2</td></tr>
  <tr><td>0.5</td><td>1</td> <td>0.2</td><td>1</td></tr>
  <tr><td>0.3</td><td>2</td> <td>&#xA0;</td><td>&#xA0;</td></tr>
</table>

<p><em>Let&#39;s say that Gertrude, an Opera user, likes French movies, so she decides to buy a copy of a movie featuring Pierre Richard. She remembers she has previously read an article about it, but she doesn&#39;t remember the name of the movie, or the URL of the site she read it at. So she enters &quot;Pierre Richard&quot; in the History Search search box, as explained above.</em></p>

<p><em>Document 3 contains &quot;Pierre&quot;, but doesn&#39;t contain &quot;Richard&quot;, therefore it will not appear in the results. The other documents (1 and 2) contain both of the words, therefore documents 1 and 2 will be presented to Gertrude, sorted by their overall ranking. The overall ranking is computed as the arithmetic mean of all the rankings of the particular words. Document 1 has a ranking of 0.35 (0.2 + 0.5 divided by 2) and document 2 has a ranking of 0.5 (0.3 + 0.7 divided by 2,) so document 2 will appear first in the list of results. </em></p>

<h2>Summary</h2>
<p>Opera has a fast indexing and searching engine, able to, for example, <a href="#note_perf">import more than 100 emails per second</a> and update their status. Searching for a word in Opera Quick Find History Search may require just 1 read from disk, but usually it takes at least 3 reads. A prefix search for multiple words will take longer, of course. </p>

<p>The engine has a safe system of transactions, which keeps its indexes safe even if power is lost in a the middle of a disk write operation. All the data is kept on your HDD, so there is very little memory used, except for caches. Processing long queries may require slightly more significant memory usage, but it&#39;s never likely to weigh heavily on your CPU. </p>

<p>Besides the visited documents and email indexing, the indexing engine is also used for other tasks in opera. It does have some weaknesses &#8212; for example no support for a database language such as SQL and weak support for advanced queries; this is deliberate however &#8212; a big effort has been put into making the transactions run as smoothly as possible. </p>

<hr />
<p><a name="note_perf">*</a>
<em>Note that all operations for the examples in this article were run in a single thread on a 2.4GHz processor with antivirus turned off.
</em></p>

<h2>Resources</h2>
<ol>
<li><a href="http://www.pierre-richard.fr/Frameset-PR.html">Bienvenue sur le site officiel de Pierre Richard</a></li>
<li><a href="http://en.wikipedia.org/wiki/Inverted_index">Wikipedia inverted index entry</a></li>
</ol>
