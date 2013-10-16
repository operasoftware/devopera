Title: Gridnite - the Unite-powered multiuser spreadsheet application
----
Date: 2009-07-22 16:52:05
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

<div class="note">
<h2 style="color:red;font-weight:bold;padding-top:0;margin-top:0;">24th April 2012: Please note</h2>

<p>Starting with Opera 12, Opera Unite will <a href="http://my.opera.com/ODIN/blog/2012/04/24/end-unite-apps-and-widgets">be turned off for new users and completely removed in a later release</a>. If you&#39;re interested in building addons for Opera, we recommend going with our extensions platform — check out <a href="http://dev.opera.com/addons/extensions/">our extensions documentation</a> to get started.</p>
</div>

<p class="note"><a href="http://dev.opera.com/articles/view/unite-spreadsheet-part-2-formulas/">Part 2: developing the formula engine</a> is now available.<br />
<a href="http://dev.opera.com/articles/view/gridnite-part-3-saving-and-restoring-multiple-spreadsheets/">Part 3: saving and restoring multiple spreadsheets</a> is also now available.</p>

<h2>Introduction</h2>

<p>In this tutorial I&#39;m going to show you how to build a simple multi-user spreadsheet service in Opera Unite - this great new technology is, after all, about collaboration, and an ideal use case is locally hosted documents that can be collaborated on by multiple users across the Web.</p>

<p>The example application is called <strong>Gridnite</strong>, and it bears a definite resemblance to existing online spreadsheet applications, so you may be asking &quot;why reinvent the wheel?&quot;. But think about it. Isn&#39;t it nice to be able to host your own data? And isn&#39;t it nice to be able to continue working on your spreadsheets offline without needing to worry about any conversation between different applications?</p>

<p>This article just looks at getting the bare bones of the service up and running (see Figure 1) - future articles will build on this, adding more advanced features to it. Writing and debugging the basic &quot;Gridnite&quot; app took a few hours to build.</p>

<p class="note">Note: before going any future, <a href="gridnite.us">download the Gridnite service package</a> so you can install it, and play with the application and its source code while you read the article.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/270-gridnite-the-unitepowered-multiuser-spreadsheet-application/figure1.png" alt="The basic Gridnite service" />
<p class="comment">Figure 1: The basic Gridnite service</p>

<h2> Welcome to Gridnite! </h2>

<p>Generally, in order to write a multi-user application we need to decide on a few things first. The first questions I asked when creating the Gridnite service were as follows:</p>

<ol>
  <li>How do we store the state?</li>
  <li>How to we plan to propagate real-time updates?</li>
  <li>How do we plan to resolve &quot;conflicts&quot;?</li>
  <li>How do we authenticate users?</li>
  <li>How do we protect against malicious users?</li>
</ol>

<p>So, time for a few answers. To start with, we&#39;re going to use File I/O for state storage, and the data will be stored as JSON.</p>

<p>Second, the real-time updates are handled via AJAX request to the Server (which is Opera Unite, hosting the service). The server will be polled every 5 seconds. The request will include a &quot;since&quot; parameter to indicate to the server the time when we last polled it. The server will look through the &quot;updates&quot; database and return only those that happened in those last 5 seconds.</p>

<p class="note">This is just one strategy. Another one would be to use <a href="http://ajaxian.com/archives/comet-a-new-approach-to-ajax-applications">Comet</a> techniques, but those are outside the scope of this tutorial.</p>

<p>The other questions won&#39;t be answered fully in this tutorial, but we will endeavor to look at them in future articles on dev.opera.</p>

<h2>The client-side</h2>

<p class="note">To clarify, when developing for Opera Unite &quot;server-side&quot; means JavaScript that executes inside the Opera Unite server, where the service is installed. &quot;Client-side&quot; means JavaScript code that is executed in browsers accessing your service. So, our Gridnite&#39;s &quot;server-side&quot; JavaScript generates HTML and scripts, and browsers visiting the service execute &quot;client-side&quot; JavaScript.</p>

<p>Since much of the spreadsheet is going to be done in client-side JavaScript, we will start with a simple static <code>static_test.html</code> file and design the basic interface there first. To simplify the client-side development we&#39;re going to use the JQuery library.</p>

<p>Since this part has very little to do with Opera Unite, we&#39;re going to go through it very quickly. We&#39;re going to need a grid (a simple <code>&lt;table&gt;</code> element is ideal), an &quot;edit&quot; field, and AJAX routines to handle the data updates. If you check out the source, you&#39;ll see that the grid consists of a <code>&lt;table&gt;</code> with the different cells given attributes for future development: <code>id=&quot;CELL_A1&quot;</code>, <code>id=&quot;CELL_B3&quot;</code>, etc. We will use these in future articles to create additional functionality such as a fomula solving engine, copy and paste, etc.</p>

<p>When users of the service click a table cell, the edit field is positioned with <code>&quot;position: absolute;&quot;</code> next to that cell&#39;s location and displayed, as shown in Figure 2.</p>

<img src="http://forum-test.oslo.osa/kirby/content/articles/270-gridnite-the-unitepowered-multiuser-spreadsheet-application/figure2.png" alt="The Gridnite service showing the edit field" />
<p class="comment">Figure 2: The Gridnite service, showing the edit field.</p>

<p>If the user enters something in the edit field then presses the <kbd>ENTER</kbd> key (<code>event.keyCode == 13</code>), an AJAX request is sent to the server to request that the contents of the edit field are copied inside the relevant table cell. With JQuery it&#39;s as simple as this:</p>

<pre><code>$.getScript(&#39;URL?data=&#39;+escape(&#39;data&#39;));</code></pre>

<p>At this point the server needs to store the data in a local database (which is our JSON-based file). We also need to devise a function that will update a cell and temporarily mark it so that changes are visible for all users (this is <code>&quot;set_cell_value&quot;</code>).</p>

<p class="note">I&#39;ve included the <code>static_test.html</code> file inside the Gridnite service package; it&#39;s not actually needed by application - it&#39;s just there so that you can follow on with the first step more easily).</p>

<h2>The server-side</h2>
<p>Now let&#39;s move on to the server-side of the application. First of all, let&#39;s design a basic schema for our local data storage.</p>

<h3>Local data storage</h3>

<p>Let&#39;s start with a simple object that will map fields to its values:</p>

<pre><code>db = { 
    A1: &#39;First cell&#39;,
    A2: &#39;Second cell&#39;,
};</code></pre>

<p>This was good enough to start with - you can access your data by issuing a call of <code>db.A1</code> or <code>db[&#39;A1&#39;]</code> - these are equivalent in JavaScript.</p>

<p>Later on, I discovered that I needed to store updates too. This shows the beauty of JavaScript objects - to allow storage of updates, I just changed the schema as follows:</p>

<pre><code>if(&#39;updates&#39; not in db) {
    db = {
        values: db,
        updates: [],
    };
};</code></pre>

<p>There&#39;s actually no schema in JavaScript objects, but you can manipulate them any way you want, adding any new attributes and methods you need). Running the above snippet once and you&#39;ve moved your database into <code>&quot;db.values&quot;</code> instead of just <code>&quot;db&quot;</code>. This shows how to change a working database. Debugging and data loss is not a problem, and you can just change the initialization of the object and be done with it. This is how it looks:</p>

<pre><code>db = {
    values:
    { 
        A1: &#39;First cell&#39;,
        A2: &#39;Second cell&#39;,
    },
    updates:
    [
        [1245785592, &#39;C2&#39;, &#39;Cell update&#39;],
        [1245785595, &#39;C3&#39;, &#39;Next update&#39;],
    ],
};</code></pre>

<p>Here we&#39;ve added structure to hold our updates. It&#39;s an array of arrays (3-tuple if you will). &quot;1245785593&quot; is called UNIX time - its basically a number of seconds. All you need to know about this number is that it increases by 1 every second. You can get this in JavaScript with a <code>&quot;(new Date()).getTime()/1000&quot;</code> call. We divide it by 1000, because <code>getTime</code> actually returns milliseconds.</p>

<h3>How are updates going to work?</h3>

<p>&quot;Should we synchronize our watches?&quot; We, certainly, should.</p>

<p>When somebody opens the &quot;Gridnite&quot; service, we generate the output table by iterating over the data from <code>&quot;db.values&quot;</code>. We will also send the user&#39;s browser a &quot;server time&quot;, which is our local <code>&quot;getTime()/1000&quot;</code> result from above. The reason we need to serve local time is time zones. If we trust the <code>&quot;since&quot;</code> parameter supplied by the user&#39;s computer (which is <em>his</em> &quot;client-side&quot; <code>getTime()/1000</code> result), we can get ourselves in a mess: if the user is in a timezone behind our time we will be serving him data from the past, so he will be seeing updates that are hours old. If the user is ahead of our time he won&#39;t see any updates at all, because he will be effectively be requesting updates from the future from the server (Opera Unite).</p>

<p>The way to solve this is as follows. We output the <code>current_time</code> variable when we first show the spreadsheet to the user, then with each subsequent request for updates, we update this variable with a new value. During an update, the user&#39;s computer sends us the <code>current_time</code> value it received from the &quot;server&quot; last time in the <code>since</code> parameter, and the server sends back the spreadsheet updates along with a new <code>current_time</code> variable.</p>

<p>To do this we use JQuery&#39;s <code>$.getScript</code>, which loads data from the server and executes it on the client-side.</p>

<p>At this point the server gets the <code>since</code> parameter and iterates over <code>db.updates</code> to find items that are older than <code>since</code> (the items that need to be updated across the server and clients). To do this we&#39;re going to use the JavaScript Array&#39;s <code>forEach</code> method:</p>

<pre><code>db.updates.forEach(function(i) {
    if(i[0] &amp;&amp; i[0]&gt;=r.GET.since) {
        r.write(&#39;set_cell_value(&#39;+safe_js_val(i[1])+&#39;, &#39;+safe_js_val(i[2])+&#39;);\n&#39;);
    };
});
function safe_js_val(t) { return &quot;unescape(&#39;&quot;+escape(t)+&quot;&#39;)&quot;; };
</code></pre>

<p>This will output:</p>

<pre><code>set_cell_value(unescape(&#39;C3&#39;), unescape(&#39;Hello%20World&#39;));
</code></pre>

<h3>Taking precautions</h3>

<p>If you check out the code, you&#39;ll see a <code>safe_js_val</code> function - Why do we need this? The answer is data integrity. If the string that inputted into the data entry field contains symbols like &#39; (apostrophe) or the new line symbol, we could end up with something malicious. For example let&#39;s say we have a string that says &quot;Hello&#39;); alert(&#39;Test&quot; - our output would end up as this:</p>

<pre><code>set_cell_value(&#39;C3&#39;, &#39;Hello&#39;); alert(&#39;Test&#39;);</code></pre>

<p>This is definitely not what we wanted, and you can see how this could lead to malicious code being executed. The correct solution actually would be to use <code>$.getJSON</code> from JQuery and parse the output on the client-side. I&#39;ve done this in <code>$.getScript</code> to demonstrate the possible malicious use that you need to be on the lookout for. As a side note, the usage of <code>safe_js_val</code> is perfectly safe as long as you don&#39;t forget to use it!</p>

<h2>Time for action! </h2>

<p>Now that we&#39;ve outlined how the service will work, let&#39;s look at actually putting the service together. I&#39;ll be using the <a href="http://unitehowto.com/uniteness">Uniteness framework</a> to speed things up. This is a framework I created that features a set of shortcuts for many possible occasions and includes a &quot;debug mode&quot; that reloads your scripts to accomodate changes and outputs script errors to your Opera browser (your visitors see &quot;Error happened&quot; without the specific details).</p>

<h3>./config.xml</h3>

<p>First we need to create <code>./config.xml</code>:</p>

<pre><code>&lt;widget&gt;
  &lt;widgetname&gt;Gridnite&lt;/widgetname&gt;
  &lt;feature name=&quot;http://xmlns.opera.com/fileio&quot;&gt;
  &lt;/feature&gt;
  &lt;feature name=&quot;http://xmlns.opera.com/webserver&quot;&gt;
    &lt;param name=&quot;type&quot; value=&quot;service&quot;/&gt;
    &lt;param name=&quot;servicepath&quot; value=&quot;gridnite&quot;/&gt;
  &lt;/feature&gt;
&lt;/widget&gt;</code></pre>

<p class="note">Note that, like above, I will refer to files all other files discussed below by stating their full path - <code>./config.xml</code>, <code>./lib/library.js</code>, etc. - so that you can understand where to place them in the package structure.</p>

<p><code>./config.xml</code> is fairly straightforward; we&#39;ve specified the <code>title</code> of the application and enabled the <code><a href="http://dev.opera.com/libraries/unite/">webserver</a></code> and <code><a href="http://dev.opera.com/libraries/fileio/">fileio</a></code> libraries. Pretty much any service you write will need both of those. <code>webserver</code> is used to serve the URLs and <code>fileio</code> is needed to work with local sandboxed filesystem.</p>

<h3>./index.html</h3>

<p>Now let&#39;s look at the <code>./index.html</code> file:</p>

<pre><code>&lt;script src=&quot;lib/template.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;lib/uniteness-0.12.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;

DEBUG = 1;
LOAD_SCRIPT(&#39;main.js&#39;);

&lt;/script&gt;</code></pre>

<p>That&#39;s it, in it&#39;s entirety! Here we simply load up the Markuper template library from <code>./lib/template.js</code> and my Uniteness framework from <code>./lib/uniteness-0.12.js</code>. Since those are files that we don&#39;t need to debug, we load them via <code>script</code> tags. On the contrary, our <code>./main.js</code> is what we need to debug, so we load it with a <code>LOAD_SCRIPT</code> command.

<h3>./main.js</h3>

<code>./main.js</code> will be constantly reloaded during debug (<code>DEBUG = 1</code>) mode so that any changes you make are instantly visible when you Refresh your browser</p>

<p>In this file we first define some URLs:</p>

<pre><code>URLs([
    &#39;_index&#39;, spreadsheet,
    &#39;spreadsheet_update&#39;, spreadsheet_update,
    &#39;spreadsheet_set_cell&#39;, spreadsheet_set_cell,
    // &#39;imgs&#39;: &#39;static&#39;,
]); 
</code></pre>

<p>This allows us to define <code>imgs</code> as <code>static</code>, so that it&#39;s available from visitors&#39; browsers as <code>http://device.login.operaunite.com/gridnite/imgs/</code>. The other option is to create a <code>./public_html</code> directory, the contents of which will be automatically visible at <code>http://device.login.operaunite.com/gridnite/</code>.</p>

<p><code>spreadsheet</code>, <code>spreadsheet_update</code> and <code>spreadsheet_set_cell</code> are our functions that respond to the URLs <code>http://device.login.operaunite.com/gridnite/</code>, <code>http://device.login.operaunite.com/gridnite/spreadsheet_update</code> and <code>http://device.login.operaunite.com/gridnite/spreadsheet_set_cell</code> respectively.</p>

<p>The <code>_update</code> function will be used when a visitor requests updates after some period of time.</p>

<p>The <code>_set_cell</code> function will be used when a visitor requests that a cell&#39;s value be changed (at this point we change the value of <code>db.values</code> and append the <code>update</code> to <code>db.updates</code> so that we can propagate it to other connected clients).</p>

<p>We need a local database too - this is also created in <code>./main.js</code>. There&#39;s a <code>JSON_FILE</code> class my Uniteness library that deals with all the <code>fileio</code> and JSON library calls; so to create the JSON data store, we can just write this:</p>

<pre><code>db = new JSON_FILE(&#39;spreadsheet.json&#39;, {
    values:{},
    updates:[],
});
</code></pre>

<p>We can now access data as <code>db.store</code>, for example <code>db.store.values.A3</code> would return A3&#39;s value. If you change it, you can then just issue <code>db.save()</code> to dump the database to disk.</p>

<p>Now for the actual functions in the <code>./main.js</code> file:</p>

<pre><code>function spreadsheet(r) {
    template = new Markuper(&#39;templates/index.html&#39;, {
       base: r.uri(&#39;/&#39;),
       current_time: (new Date()).getTime()/1000,
    });</code></pre>
    
    <p>Here we initialize the Markuper templating library. We won&#39;t be using much of its functionality, but it&#39;s still better to have an external HTML template file to edit, rather than mixing everything into <code>./main.js</code>.</p>

<p>The template called is <code>./templates/index.html</code>, which is pretty much the same file as the <code>static_test.html</code>, except that I&#39;ve replaced the 3x3 table with <code>&lt;div id=&quot;main_table&quot;&gt;&lt;/div&gt;</code>. Using Markuper you can issue</p>

<pre><code>template.select(&#39;#main_table&#39;)[0].innerHTML = &quot;&lt;table&gt;&lt;/table&gt;&quot;;</code></pre>

<p>where <code>#main_table</code> can be any CSS selector, and your <code>div</code> contents will be replaced with whatever you specify.</p>

<p>Now we need to construct the actual table. We will use two nested <code>for()</code> loops to build and output the table:</p>

<pre><code>table = &#39;&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#39;;
// Building a table header
for(var j=1;j&lt;20;j++) {
    table += &#39;&lt;td class=&quot;header&quot;&gt;&#39;+j;
};

for(var i=0;i&lt;15;i++) {
    // 65 is the code for &quot;A&quot;
    A = String.fromCharCode(65+i);
    // Drawing left column gray letters
    table += &#39;&lt;tr&gt;&lt;td class=&quot;header&quot;&gt;&#39;+A;
    for(var j=1;j&lt;20;j++) {
        table += &#39;&lt;td class=&quot;cell&quot; id=&quot;CELL_&#39;+A+j+&#39;&quot;&gt;&#39;;
        table += (A+j in db.store.values) ? db.store.values[A+j] : &quot;&quot;;
    };
};
table += &#39;&lt;/table&gt;&#39;;</code></pre>

<p>HTML allows us not to close <code>tr</code> and <code>td</code> element, howver, we&#39;re using this to keep code cleaner. Basically, we are just replicating what we designed in <code>./static_test.html</code></p>

<p>The last step is to write the template into the browser:</p>

<pre><code>r.write(template.parse().html());
// r.write is Uniteness&#39; shortcut; 
// Uniteness will also close the connection automatically when function returns
</code></pre>

<p>At this point we will devise a <code>spreadsheet_set_cell</code> function that will set the contents of a table&#39;s cell, when called via AJAX:</p>

<pre><code>function spreadsheet_set_cell(r) {
    if(r.GET.cell_id) {  
        if (r.GET.cell_id.match(/^[A-Z][0-9]+$/)) {
</code></pre>

<p>Even though Opera Unite is very well sandboxed, it&#39;s still a good idea to check that input from users is valid (we use a regular expression for that). <code>r.GET.cell_id</code> is Uniteness shortcut for acquiring <code>GET</code> parameters from the query string (we pass these in the url, for example <code>http://.../gridnite/spreadsheet_set_cell?cell_id=A3&amp;value=new_value</code>).</p>

<pre><code> // save the value into the database
 db.store.values[r.GET.cell_id] = r.GET.value;
 
 // push(append) a new update &quot;row&quot; for propagation with UNIX time, cell_id and value
 // as you remember, we will query this to send &quot;updates&quot; to other connected clients
 db.store.updates.push(
   [
     (new Date()).getTime()/1000, 
     r.GET.cell_id, 
     r.GET.value
   ]
 );
</code></pre>

<p>Now we use a new JavaScript <code>.filter</code> method to clean out the database of all the entries that are more than half an hour old (since clients request updates every 5 seconds, we don&#39;t need to keep <code>update</code> entries that long):</p>

<pre><code>db.store.updates = db.store.updates.filter(
      function(i){
           return i[0]&gt;((new Date()).getTime()/1000)-1800;
      }
 );</code></pre>
 
<p>Now all we left to do save the database, as follows:</p>

<pre><code>db.save();</code></pre>

<p>The last thing we need is a <code>spreadsheet_update</code> function, which is an AJAX request for the last 5 seconds of updates from the browser:</p>

<pre><code>function spreadsheet_update(r) {
    db.store.updates.forEach(function(i) {
        if(i[0] &amp;&amp; i[0]&gt;=r.GET.since) {
            r.write(&#39;set_cell_value(&#39;+safe_js_val(i[1])+&#39;, &#39;+safe_js_val(i[2])+&#39;);\n&#39;);
        };
    });
    r.write(&quot;current_time = &quot;+(new Date()).getTime()/1000+&quot;;&quot;);
};</code></pre>

<p>As discussed above, this writes <code>set_cell_value()</code> out to the client page, and updates the <code>server_time</code> variable on the client.</p>

<h2>Summary</h2>

<p>And that&#39;s it for now. The total time to create this multi-user spreadsheet application is a few hours. Check it out and let us know what you think! We will be adding more functionality to it in future articles, and we&#39;d appreciate your thoughts on functionality you think should be added.</p>p class=
