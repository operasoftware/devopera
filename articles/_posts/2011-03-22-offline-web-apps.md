---
title: 'Taking Your Web Apps Offline: A Tale of Web Storage, Application Cache and WebSQL'
authors:
- shwetank-dixit
intro: 'To make applications run fully offline, we should make ourselves familiar with three very interesting technologies: The HTML5 Application Cache, Web Storage and WebSQL Databases. This article looks at al three, showing how they can be used together to create an effective offline application.'
license: cc-by-3.0
layout: article
---
<h2>Introduction</h2>

<p>To make applications run fully offline, we should make ourselves familiar with three very interesting technologies: The HTML5 Application Cache, Web Storage and WebSQL Databases.</p>

<p>I’ve already written introductory articles covering <a href="http://dev.opera.com/articles/view/web-storage/">Web Storage</a> and <a href="http://dev.opera.com/articles/view/offline-applications-html5-appcache/">HTML5 Application Cache</a>: you should read these first if you are not already familiar with the basic concepts. This article will revisit these technologies, introduce WebSQL, and show how to effectively use all three in context. All three of these technologies are now supported by Opera desktop version 11.10, Opera Mobile 11, and Webkit-based browsers such as the iOS and Google Android browsers.</p>

<p class="note">Note: All the examples discussed below can be found in our <a href="offline-web-apps.zip">offline web apps demo package</a>. You might want to download this and look through it while you read through the article (unless you are offline, of course!)</p>

<h2>Why do web apps need to work offline?</h2>

<p>Nowadays we don’t just have simple web pages. The internet is becoming increasingly ubiquitous, and we are seeing ourselves consume web applications more and more. Our reliance on them is increasing, and  they are also becoming more complicated and sophisticated. we are seeing more instances where web apps are successfully replacing traditional desktop applications.</p>

<p>One major advantage desktop applications have always had over web applications is the ability to work offline. With web applications, we simply did not have the proper tools and technologies to make this happen.</p>

<p>But this is no longer a problem! With the advent of HTML5 Application Cache, Web Storage and WebSQL we finally have a great way to make web applications work offline:</p>

<ul>
<li>Application Cache allows us to store a copy of our web app's HTML, CSS and other assets off line, to be used when the network is not available.</li>
<li>Web Storage takes the principles of older storage mechanisms such as cookies, and makes them more powerful and flexible.</li>
<li>WebSQL provides a fully-operational SQL database inside the browser, which can store a copy of our web app's data offline, allowing users to continue working with their data when they have no connection available. The data is then synched back up to the server when the network is available again.</li>
</ul>

<p>there are many reasons why we might lose network connection: power failure, router troubles, having a bad (or non-existent) signal when accessing the site outside on a mobile phone. As developers, we would like to ensure that even in these situations, people can use our applications properly (or at least to some degree).</p>

<h2>Application Cache: Loading our app's files when there is no network connection</h2>

<p>Generally speaking, if we are offline and try to load or reload a page, we will get an error. So the first thing to do is to make sure our users can see and use our app even when they try to load the page offline. This means all the images, CSS files, JavaScript files, and the actual HTML page itself should all load properly when offline.</p>

<p>This is achieved using HTML5 Application Cache (also known as AppCache). To use this we first define a manifest file containing the references to the files needed to run that app offline.</p>

<p>Lets look at an example: <code>demo.manifest</code>.</p>

<pre><code>CACHE MANIFEST

CACHE:
logo.png
style.css
script.js
jquery.js
index.htm</code></pre>

<p>Whichever HTML file references this manifest file will now have an application cache associated with it, with these resources available in it. Referencing the manifest file from an html file is easy &mdash; you use a <code>manifest</code> attribute on the <code>&lt;html&gt;</code> element:</p>

<pre><code>&lt;html manifest=&quot;demo.manifest&quot;&gt;</code></pre>

<p>All the files listed here will be cached in the browser’s application cache. Even if a person is offline and tries to load the page, all of the resources mentioned in the linked manifest file will be loaded by the browser.</p>

<p>Full details about this can be found in our full featured <a href="http://dev.opera.com/articles/view/offline-applications-html5-appcache">article about HTML5 application cache</a>.</p>

<h2>What about the data?</h2>

<p>AppCache sorts us out in terms of having the site assets available offline, but sometimes we'll want to store small amounts of data like a user’s preferences, or the last saved search item of a user. Other times you will want to store more structured application data. Depending on the use case, either Web Storage or WebSQL would be the best way to go.</p>

<h3>Going offline with Web Storage</h3>

<p>Web Storage is perfect for storing small chunks of information rather than large tables of organized information. We only give a brief overview in this article, and look at some examples. You can learn more of the basics in our <a href="http://dev.opera.com/articles/view/web-storage/">dedicated article on Web Storage</a>.</p>

<p>There are a lot of places in the world where electricity goes off frequently, and people are offline for quite a while before the power comes back on again. Imagine if someone living in such a region is filling out a multi-page form, or writing a long blog post, or composing an important email? If the power suddenly goes off (or their computer runs out of battery), they would lose all that data. Wouldn’t it be nice if the next time they are online, they could go to the URL and have that information available again, to carry on with?</p>

<p>Lets look at how we can do this with a simple page containing a <code>&lt;textarea&gt;</code>. This page should save whatever we type into local storage every few seconds so if it is closed and reopened, it should load up the last saved text.</p>

<p>Our page contains a <code>&lt;textarea&gt;</code> with an <code>id</code> of <code>draft</code>:</p>

<pre><code>...
<textarea id="draft" rows="10" cols="30"></textarea>
...</code></pre>

<p>We’ll create a simple function to save into <code>localStorage</code> whatever is typed in the textbox.</p>

<pre><code>function saveMessage(){
	var message = document.getElementById(&quot;draft&quot;);
	localStorage.setItem(&quot;message&quot;, message.value)
}</code></pre>

<p>We’ll make it save whatever is typed into <code>localStorage</code> every half a second:</p>

<pre><code>setInterval(saveMessage, 500);</code></pre>

<p class="note">For the sake of simplicity, we have used <code>setInterval()</code> to save the message to local storage every half a second. (You could further improve on it by having it save the message to local storage only when you detect that the user has inputted something into the text box).</p>

<p>We also have to make sure that, whenever the page is opened or reloaded, the last saved value from <code>localStorage</code> is reflected inside the textbox.</p>

<pre><code>window.addEventListener(&quot;DOMContentLoaded&quot;, loadMessage, false);

function loadMessage(){
	var textbox = document.getElementById(&quot;draft&quot;);
	var message = localStorage.getItem(&quot;message&quot;);

	 if (!message) {
	 	textbox.value = &quot;&quot;;
	 }else {
		textbox.value = message;
	}
}</code></pre>


<p>Try out the <a href="http://people.opera.com/shwetankd/webstorage/webstoragedemo.htm">Web Storage demo</a>. Web Storage is a great thing to use when you have to store small pieces of information like this.</p>

<h3>Working in offline mode</h3>

<p>Users that want to enable working in offline mode, can do so by enabling "Work Offline" mode (In Opera it is available under <em>Menu&gt;Settings&gt;Work Offline</em> or <em>File&gt;Work Offline</em>). The <code>navigator.onLine</code> property is set to <code>false</code> whenever the user is working in offline mode, and is <code>true</code> otherwise. In many cases, however, it might be better to use events to do the same thing. When the user is in offline mode, the <code>offline</code> event is fired, and when they switch back the <code>online</code> event is fired. We can use this to display a small notification whenever the user switches to offline mode.</p>

<p>Something like this will work fine:</p>

<pre><code>...
window.addEventListener( &quot;offline&quot;, function(){showWarningDiv(&quot;on&quot;)}, false);
window.addEventListener( &quot;online&quot;, function(){showWarningDiv(&quot;off&quot;)}, false);
...
function showWarningDiv(status){
var warningdiv = document.getElementById(&quot;warning&quot;);
if (status == &quot;on&quot;){
warningdiv.innerHTML = &quot;&lt;p style=\&quot;padding:3px;\&quot;&gt;Right now you are in offline mode. This message is saved and will be sent to the server the next time you are online.&lt;/p&gt;&quot;;
} else {
warningdiv.innerHTML = &quot;&quot;;
	}
}</code></pre>

<p class="note">Right now, the "Work Offline" mode is available only in Opera and Firefox.</p>

<p>It might make sense to make sure forms are not attempting to submit information while a user is working in Offline Mode. To check for that, we can do the following:</p>

<pre><code>...
window.addEventListener( &quot;submit&quot;, submitForm, false);
...
function submitForm(){
	saveMessage();
	if (!navigator.onLine){
		return false;
	}

}</code></pre>

<p>Whenever the form is submitted, a <code>submit</code> event is fired, which calls the <code>submitForm()</code> function. This function will save the message locally first, and then see if the user is in offline mode. If so, then it will not submit the form.</p>

<p>You can take this example further and have it save the typed text to a server every few seconds, so that a copy of the draft is available on the site in case the user deletes it. This is especially relevant in cases where sensitive information is involved: you would not for example want to store credit card details locally in a persistent way via <code>localStorage</code>.</p>

<p>Try out our <a href="http://people.opera.com/shwetankd/webstorage/demofolder/webstorage_advanced.zip">Advanced Web Storage demo</a>, which stores information in <code>sessionStorage</code>. As long as you do not close the page, the information typed will remain in the textbox, even if you reload the page. The page will also send the information to a server side script every few seconds and update the time it was last saved. An approach like this could be used in blogging or email systems to make sure that data is periodically saved to the server and that the user can continue working during network outages.</p>

<h3>WebSQL: Going further with offline data</h3>

<p>Web Storage is great for storing small blobs of information, but what if want to store a whole database offline? What if your application demanded querying tables within the database, doing joins, searches, etc.?</p>

<p>Using Web Storage will not cut it in such cases: you need something more robust. This is where WebSQL comes in. WebSQL is a local SQLite database that you can save application data to, using a combination of simple JavaScript and SQL.</p>

<h4>Working with WebSQL databases</h4>

<p>The first thing to do is to detect whether the browser actually has support for WebSQL or not. We can do this using the <code>window.openDatabase</code> property, like so:</p>

<pre><code>if (window.openDatabase){
	//rest of your code
} else{
	alert(&quot;It seems your browser does not have support for WebSQL. Please use a browser which does, otherwise parts of this application may not run as intended.&quot;); //or any other similar message
}</code></pre>

<h4>Creating and opening a database</h4>

<p>You can create and open a database using the <code>openDatabase</code> command.</p>

<pre><code>var db = openDatabase(&quot;food_db&quot;, &quot;1.0&quot;, &quot;Web SQL Storage Demo Database&quot;, 1*1024*1024); // creates a database called 'food_db' with version number 1.0, description as 'Web SQL Demo Database' and a size of 1MB.</code></pre>

<p>This creates a database called <code>food_db</code> with version number 1.0, a description of <code>Web SQL Demo Database</code>, and a size of 1MB. The variable <code>db</code> contains a reference to this database object, which we will use further down in the code.
</p>

<p class="note">The size of the database has to be set in bytes. That is why we have defined the size as <code>1*1024*1024</code>, which equals 1Mb. If we want the size to be 4Mb, we would define the size as <code>4*1024*1024</code>.</p>

<h4>Executing transactions on the database</h4>

<p>Now that we have created and opened a database, we can execute transactions on it using SQL commands. We create transactions by calling the <code>transaction()</code> function on the database object (<code>db</code> in our case). The callback to it will return a transaction object as a reference, on which we will be executing SQL commands using the <code>executeSQL()</code> command. The syntax for the command is like so: <code>executeSql(sqlStatement, arguments, callback, errorCallback)</code>. Out of these only the SQL statement is required: the rest of the parameters are optional.</p>

<p>So for example, if we wanted to create a table within the database, we would write the following:</p>

<pre><code>...
db.transaction(
 function(t){ // This is the callback with &quot;t&quot; as the transaction object
  t.executeSql(&quot;CREATE TABLE IF NOT EXISTS cal_list (food_name TEXT PRIMARY KEY, calories REAL, servings TEXT)&quot;);
}
);
...</code></pre>

<p>The above code will create a table (if it does not already exist) called <code>cal_list</code> with the columns <code>food_name</code>, <code>calories</code> and <code>servings</code>.</p>

<h4>Inserting values into the tables</h4>

<p>Tasks like inserting and querying data within tables is pretty straight forward with WebSQL. Lets take the following example:</p>

<pre><code>var food_name = "pizza";
var amount_of_calories = 320;
var serving_size = "one slice";

db.transaction(
 function(t){
  t.executeSql(&quot;INSERT INTO cal_list VALUES (?, ?, ?)&quot;, [food_name, amount_of_calories, serving_size]);
		}
);</code></pre>

<p>Here, the first <code>?</code> will map to <code>food_name</code>, the second one to <code>amount_of_calories</code> and the third to <code>serving_size</code>. This code will create a new row in the <code>cal_list</code> table with values of <code>pizza</code>, <code>320</code> and <code>one slice</code> in each respective column.</p>

<p>Lets take another example, this time querying a table:</p>

<pre><code>var min_cal_amount = 300;
...
t.executeSql(&quot;SELECT * FROM cal_list WHERE calories &gt; ?&quot;, [min_cal_amount]);</code></pre>

<p>This code will execute a SQL statement to select all rows where the <code>calories</code> field is greater than 300: the question mark <code>('?')</code> is mapped to <code>min_cal_amount</code>.</p>

<h4>Looping through result sets</h4>

<p>So we’ve created our database and tables, inserted information into them, and now we want to query the database and display the information. Usually we’ll have a bunch of results for one single SQL query, and we’ll want to loop through them and display the data in a table or some other structure on the page. The third parameter of the <code>executeSql</code> function is the success callback. Its here that we will loop through the result set.</p>

<pre><code>var list = document.getElementById("thelist");
var food;
var min_cal_amount = 400;
var serving_size;

db.transaction(
 function(t){
  t.executeSql(&quot;SELECT food_name AS food, calories AS amount_of_calories, servings as serving_size FROM cal_list where calories &gt; ?&quot; ,[min_cal_amount], function(t,r){
	 for (var i=0; i &lt; r.rows.length; i++){
	  food = r.rows.item(i).food;
	  amount_of_calories = r.rows.item(i).amount_of_calories;
	  serving_size = r.rows.item(i).serving_size;

	  list.innerHTML +=&quot;&lt;li&gt;&quot;+food+&quot; has &quot;+amount_of_calories+&quot; KCAL worth of calories.&lt;/li&gt;&quot;;

		}
	},

	function(t,e){alert(e.message);})
}
);</code></pre>

<p>We first determine the length of the result with <code>r.rows.length</code> and then loop from 0 to that value. Each row's results are accessible by <code>r.rows.item(i)</code> where <code>i</code> is the row number. The column names are accessible through it as well. So to determine the food column of the row, we use <code>r.rows.item(i).food</code>, and so on for the other columns.</p>

<h2>Using all three technologies at once</h2>

<p>There are some use cases where you'll want to use AppCache, Web Storage and WebSQL all at once. This is certainly possible, as long you are aware of which technologies to use for which things. For example, if you just want to store some user preferences, it would be overkill to use WebSQL. You are much better off using Web Storage for that.</p>

<p>However, if you have a lot of data to use, and you also want to do queries on it then it would be better to use WebSQL.</p>

<p>Take a look at our <a href="http://people.opera.com/shwetankd/websql/combineddemo.htm">Calorie Finder demo page, which uses all three technologies together</a>. It uses Web Storage to store your search terms, so that the search term will persist in the search box even if you refresh or close and open the page. It also uses AppCache and WebSQL so that you can still load the page and search the data even when offline.</p>

<p class="note">Note: you can get information on what web databases Opera is currently storing, and administrate the databases stored for different domains by going to <a href="opera:webdatabases">opera:webdatabases</a>. You can also find out the current domains storing data in your browser using Web Storage, and administrate said data, using <a href="opera:webstorage">opera:webstorage</a>.</p>

<h2>Wait ... isn’t the WebSQL specification in impasse?</h2>

<p>Yes, but you can use it right now, on a number of browsers and devices. At the time of this writing, the same can’t be said of IndexedDB, which doesn’t have as much cross browser and cross device support. As that specification matures, that will no longer be the case, but it will take quite some time for that to happen.</p>

<p>It is important to note that certain desktop browsers like Firefox and Internet Explorer will likely never support WebSQL and will instead go on to support IndexedDB. So the primary use case of WebSQL is offline data storage for smart phones: it is supported on Opera Mobile since version 11, as well as prominent Webkit-based browsers on Android and iPhone.</p>

<p>The good thing about WebSQL is that it provides a nice way to have an offline database working in a browser. It's simple to learn and use, and you can quickly make an offline web app working across quite a few different browsers and devices right now.</p>

<h2>Summary</h2>

<p>Web applications can now run offline with the help of Application Cache, Web Storage and WebSQL Databases. Application Cache takes care of files being cached for offline usage, Web Storage takes care of small amounts of data and WebSQL Databases deals with handling large and complicated data. Developers, according to their needs, can use any combination of these technologies to make their applications run offline.</p>

<h2 id="readmore">Read more...</h2>
<ul>
<li><a href="/articles/view/web-storage/">Web Storage: easier, more powerful client-side data storage</a></li>
<li><a href="/articles/view/offline-applications-html5-appcache/">Running your web applications offline with HTML5 Application Cache</a></li>
</ul>
